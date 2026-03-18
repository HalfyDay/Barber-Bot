const createBotUserService = ({
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  toTelegramIdNumber,
  findAnyUserByTelegramId,
  findAnyUserByPhone,
  getHomeBookingSettings,
  getBarbers,
  buildDateWindow,
  appointmentService,
  formatDateOnly,
  isActiveStatus,
  isCompletedStatus,
  normalizeAppointmentStatus,
  statusNoShow,
}) => {
  const buildBotInternalError = (message, code) => {
    const error = new Error(message);
    error.code = code;
    return error;
  };

  const buildUserLookupKeys = (row, fallbackIdentifier = "") => {
    const keys = [];
    const safeFallback = normalizeText(fallbackIdentifier);
    const safeId = normalizeText(row?.id);
    const safeTelegramId = normalizeText(row?.TelegramID);
    if (safeId) keys.push(safeId);
    if (safeTelegramId && !keys.includes(safeTelegramId)) keys.push(safeTelegramId);
    if (safeFallback && !keys.includes(safeFallback)) keys.push(safeFallback);
    return keys;
  };

  const getUserBookingSummaryByTelegram = async (telegramId) => {
    const safeTelegramId = normalizeText(telegramId);
    const user = safeTelegramId ? await findAnyUserByTelegramId(safeTelegramId) : null;
    const lookupKeys = buildUserLookupKeys(user, safeTelegramId);
    if (!lookupKeys.length) {
      return {
        user: null,
        userRecordId: null,
        lookupKeys: [],
        activeAppointments: 0,
        lastHaircutDate: null,
        noShows: 0,
      };
    }
    const appointments = await prisma.appointments.findMany({
      where: { UserID: { in: lookupKeys } },
      select: { Status: true, Date: true },
    });
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - 90);
    const thresholdKey = formatDateOnly(threshold);
    const activeAppointments = appointments.reduce(
      (count, item) => (isActiveStatus(item?.Status) ? count + 1 : count),
      0,
    );
    const lastHaircutDate = appointments.reduce((latest, item) => {
      if (!isCompletedStatus(item?.Status)) return latest;
      const dateKey = normalizeText(item?.Date);
      if (!dateKey) return latest;
      return !latest || dateKey > latest ? dateKey : latest;
    }, "");
    const noShows = appointments.reduce((count, item) => {
      if (normalizeAppointmentStatus(item?.Status) !== statusNoShow) return count;
      const dateKey = normalizeText(item?.Date);
      if (dateKey && dateKey < thresholdKey) return count;
      return count + 1;
    }, 0);
    return {
      user: user || null,
      userRecordId: normalizeText(user?.id) || null,
      lookupKeys,
      activeAppointments,
      lastHaircutDate: lastHaircutDate || null,
      noShows,
    };
  };

  const registerOrUpdateBotUser = async ({ telegramId, name, phone }) => {
    const safeTelegramId = normalizeText(telegramId);
    const safePhone = normalizePhone(phone);
    const safeName = normalizeText(name) || safePhone;
    if (!safeTelegramId || !safePhone || !safeName) {
      throw buildBotInternalError(
        "telegramId, name and phone are required.",
        "INVALID_USER_DATA",
      );
    }
    const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);
    const [existing, phoneOwner] = await Promise.all([
      findAnyUserByTelegramId(safeTelegramId),
      findAnyUserByPhone(safePhone),
    ]);
    if (existing?.id) {
      await prisma.users.update({
        where: { id: existing.id },
        data: {
          Name: safeName,
          Phone: safePhone,
        },
      });
      return getUserBookingSummaryByTelegram(safeTelegramId);
    }
    if (
      phoneOwner?.id &&
      (!normalizeText(phoneOwner.TelegramID) ||
        normalizeText(phoneOwner.TelegramID) === safeTelegramId)
    ) {
      await prisma.users.update({
        where: { id: phoneOwner.id },
        data: {
          TelegramID: telegramIdAsNumber,
          Name: safeName,
          Phone: safePhone,
        },
      });
      return getUserBookingSummaryByTelegram(safeTelegramId);
    }
    await prisma.users.create({
      data: {
        id: randomUUID(),
        TelegramID: telegramIdAsNumber,
        Name: safeName,
        Phone: safePhone,
      },
    });
    return getUserBookingSummaryByTelegram(safeTelegramId);
  };

  const updateBotUserNameByTelegram = async ({ telegramId, name }) => {
    const safeTelegramId = normalizeText(telegramId);
    const safeName = normalizeText(name);
    if (!safeTelegramId || !safeName) {
      throw buildBotInternalError("telegramId and name are required.", "INVALID_USER_DATA");
    }
    const user = await findAnyUserByTelegramId(safeTelegramId);
    if (!user?.id) {
      throw buildBotInternalError("User not found.", "USER_NOT_FOUND");
    }
    await prisma.users.update({
      where: { id: user.id },
      data: {
        Name: safeName,
        LastNameChanged: new Date().toISOString(),
      },
    });
    return getUserBookingSummaryByTelegram(safeTelegramId);
  };

  const updateBotUserPhoneByTelegram = async ({ telegramId, phone }) => {
    const safeTelegramId = normalizeText(telegramId);
    const safePhone = normalizePhone(phone);
    if (!safeTelegramId || !safePhone) {
      throw buildBotInternalError("telegramId and phone are required.", "INVALID_USER_DATA");
    }
    const user = await findAnyUserByTelegramId(safeTelegramId);
    if (!user?.id) {
      throw buildBotInternalError("User not found.", "USER_NOT_FOUND");
    }
    await prisma.users.update({
      where: { id: user.id },
      data: {
        Phone: safePhone,
        homePhoneChangedAt: new Date().toISOString(),
      },
    });
    return getUserBookingSummaryByTelegram(safeTelegramId);
  };

  const parseBotAvailabilityDuration = (value) => {
    const parsed = Number.parseInt(normalizeText(value), 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    return Math.max(15, parsed);
  };

  const resolveBotAvailabilityContext = async ({ barberName, duration }) => {
    const safeBarberName = normalizeText(barberName);
    if (!safeBarberName) {
      throw buildBotInternalError("barberName is required.", "INVALID_BARBER");
    }
    const totalDuration = parseBotAvailabilityDuration(duration);
    if (totalDuration == null) {
      throw buildBotInternalError("duration is required.", "INVALID_DURATION");
    }
    const [settings, barbers] = await Promise.all([
      getHomeBookingSettings(),
      getBarbers({ includeInactive: false }),
    ]);
    const barber =
      barbers.find((item) => normalizeText(item?.name) === safeBarberName) || null;
    if (!barber) {
      throw buildBotInternalError("Barber not found.", "INVALID_BARBER");
    }
    const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
    return {
      barber,
      settings,
      totalDuration,
      minAllowedDate,
    };
  };

  const listBotAvailabilityDates = async ({ barberName, duration }) => {
    const { barber, settings, totalDuration, minAllowedDate } =
      await resolveBotAvailabilityContext({ barberName, duration });
    const dateWindow = buildDateWindow(settings.maxDaysAhead);
    const dates = [];
    for (const entry of dateWindow) {
      const workingHours = await appointmentService.getWorkingHoursForBarberDate(
        barber.name,
        entry.key,
      );
      if (!workingHours) continue;
      const busyIntervals = await appointmentService.getBusyIntervalsForBarberDate(
        barber.name,
        entry.key,
      );
      const slots = appointmentService.buildTimeSlotsForDate({
        dateKey: entry.key,
        workingHours,
        busyIntervals,
        totalDuration,
        minAllowedDate,
      });
      if (slots.length) dates.push(entry.key);
    }
    return {
      barber: {
        id: barber.id,
        name: normalizeText(barber.name),
      },
      totalDuration,
      dates,
    };
  };

  const listBotAvailabilityTimes = async ({ barberName, dateKey, duration }) => {
    const safeDateKey = normalizeText(dateKey);
    if (!appointmentService.isIsoDateKey(safeDateKey)) {
      throw buildBotInternalError("Invalid date.", "INVALID_DATE");
    }
    const { barber, totalDuration, minAllowedDate } = await resolveBotAvailabilityContext({
      barberName,
      duration,
    });
    const workingHours = await appointmentService.getWorkingHoursForBarberDate(
      barber.name,
      safeDateKey,
    );
    if (!workingHours) {
      return {
        barber: {
          id: barber.id,
          name: normalizeText(barber.name),
        },
        date: safeDateKey,
        totalDuration,
        times: [],
      };
    }
    const busyIntervals = await appointmentService.getBusyIntervalsForBarberDate(
      barber.name,
      safeDateKey,
    );
    const times = appointmentService.buildTimeSlotsForDate({
      dateKey: safeDateKey,
      workingHours,
      busyIntervals,
      totalDuration,
      minAllowedDate,
    });
    return {
      barber: {
        id: barber.id,
        name: normalizeText(barber.name),
      },
      date: safeDateKey,
      totalDuration,
      times,
    };
  };

  return {
    buildBotInternalError,
    getUserBookingSummaryByTelegram,
    registerOrUpdateBotUser,
    updateBotUserNameByTelegram,
    updateBotUserPhoneByTelegram,
    listBotAvailabilityDates,
    listBotAvailabilityTimes,
  };
};

module.exports = {
  createBotUserService,
};
