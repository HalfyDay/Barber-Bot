const createError = (code) => {
  const error = new Error(code);
  error.code = code;
  return error;
};

const createAppointmentService = ({
  prisma,
  timeZone = "Europe/Moscow",
  randomUUID,
  normalizeText = (value) => (value ?? "").toString().trim(),
  normalizePhone = (value) => normalizeText(value),
  isActiveStatus = () => false,
}) => {
  const toLower = (value) => normalizeText(value).toLowerCase();
  const slotBlockTokens = ["block", "блок"];
  const timeZoneFormatterCache = new Map();

  const sanitizeTimeToken = (value) => {
    const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
    if (!match) return "";
    return `${match[1].padStart(2, "0")}:${match[2]}`;
  };

  const getTimeZoneFormatter = (zone = timeZone) => {
    const cacheKey = zone || "default";
    if (!timeZoneFormatterCache.has(cacheKey)) {
      timeZoneFormatterCache.set(
        cacheKey,
        new Intl.DateTimeFormat("en-CA", {
          timeZone: zone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }
    return timeZoneFormatterCache.get(cacheKey);
  };

  const getTimeZoneParts = (dateObj, zone = timeZone) => {
    const formatter = getTimeZoneFormatter(zone);
    return formatter.formatToParts(dateObj).reduce((acc, part) => {
      if (part.type !== "literal") {
        acc[part.type] = part.value;
      }
      return acc;
    }, {});
  };

  const getTimeZoneOffsetMs = (dateObj, zone = timeZone) => {
    const parts = getTimeZoneParts(dateObj, zone);
    const asUtc = Date.UTC(
      Number(parts.year || 0),
      Number(parts.month || 1) - 1,
      Number(parts.day || 1),
      Number(parts.hour || 0),
      Number(parts.minute || 0),
      Number(parts.second || 0),
    );
    return asUtc - dateObj.getTime();
  };

  const parseZonedDateTime = (dateStr, timeToken, zone = timeZone) => {
    const safeDate = normalizeText(dateStr).slice(0, 10);
    const safeTime = sanitizeTimeToken(timeToken) || "00:00";
    const dateMatch = safeDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const timeMatch = safeTime.match(/^(\d{2}):(\d{2})$/);
    if (!dateMatch || !timeMatch) return null;
    const year = Number(dateMatch[1]);
    const month = Number(dateMatch[2]);
    const day = Number(dateMatch[3]);
    const hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);
    const utcMillis = Date.UTC(year, month - 1, day, hours, minutes, 0);
    let candidate = new Date(utcMillis);
    try {
      let offsetMs = getTimeZoneOffsetMs(candidate, zone);
      candidate = new Date(utcMillis - offsetMs);
      const adjustedOffsetMs = getTimeZoneOffsetMs(candidate, zone);
      if (adjustedOffsetMs !== offsetMs) {
        candidate = new Date(utcMillis - adjustedOffsetMs);
      }
      return Number.isNaN(candidate.getTime()) ? null : candidate;
    } catch {
      const fallback = new Date(`${safeDate}T${safeTime}:00`);
      return Number.isNaN(fallback.getTime()) ? null : fallback;
    }
  };

  const parseTimeLabelToMinutes = (value) => {
    const text = normalizeText(value);
    const match = text.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
    return hours * 60 + minutes;
  };

  const parseWorkingRange = (value) => {
    const text = normalizeText(value);
    if (!text || text === "0" || !text.includes("-")) return null;
    const [startRaw, endRaw] = text.split("-", 2);
    const start = parseTimeLabelToMinutes(startRaw);
    const end = parseTimeLabelToMinutes(endRaw);
    if (start == null || end == null || end <= start) return null;
    return [start, end];
  };

  const formatMinutesAsClock = (minutes) => {
    const safeMinutes = Number(minutes);
    if (!Number.isFinite(safeMinutes) || safeMinutes < 0) return "00:00";
    const normalized = Math.floor(safeMinutes);
    const hours = Math.floor(normalized / 60);
    const mins = normalized % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  };

  const canFitTimeRange = (startMinute, duration, busyIntervals = []) => {
    const endMinute = startMinute + duration;
    if (endMinute > 24 * 60) return false;
    for (const [busyStart, busyEnd] of busyIntervals) {
      if (startMinute < busyEnd && endMinute > busyStart) {
        return false;
      }
    }
    return true;
  };

  const isSlotBlockingStatus = (status) => {
    const lowered = toLower(status);
    return isActiveStatus(status) || slotBlockTokens.some((token) => lowered.includes(token));
  };

  const isIsoDateKey = (value) => /^\d{4}-\d{2}-\d{2}$/.test(normalizeText(value));

  const parseServiceIdsInput = (value) => {
    if (Array.isArray(value)) {
      return Array.from(
        new Set(
          value
            .map((item) => normalizeText(item))
            .filter(Boolean),
        ),
      );
    }
    const text = normalizeText(value);
    if (!text) return [];
    return Array.from(
      new Set(
        text
          .split(",")
          .map((item) => normalizeText(item))
          .filter(Boolean),
      ),
    );
  };

  const resolveBookableServicesForBarber = (services = [], barberId) => {
    const safeBarberId = normalizeText(barberId);
    return services
      .map((service) => {
        const priceRaw = service?.prices?.[safeBarberId] ?? service?.prices?.[String(safeBarberId)];
        const price = Number(priceRaw);
        if (!Number.isFinite(price) || price <= 0) return null;
        return {
          id: normalizeText(service?.id),
          name: normalizeText(service?.name),
          description: normalizeText(service?.description),
          duration: Math.max(0, Number(service?.duration) || 0),
          price,
        };
      })
      .filter((item) => item && item.id && item.name);
  };

  const getWorkingHoursForBarberDate = async (barberName, dateKey, prismaClient = prisma) => {
    const schedule = await prismaClient.schedules.findFirst({
      where: { Barber: barberName, Date: dateKey },
      select: { Week: true },
    });
    return parseWorkingRange(schedule?.Week);
  };

  const getBusyIntervalsForBarberDate = async (
    barberName,
    dateKey,
    excludeAppointmentId = null,
    prismaClient = prisma,
  ) => {
    const where = { Barber: barberName, Date: dateKey };
    if (normalizeText(excludeAppointmentId)) {
      where.id = { not: excludeAppointmentId };
    }
    const rows = await prismaClient.appointments.findMany({
      where,
      select: { Time: true, Status: true },
    });
    return rows.reduce((acc, row) => {
      if (!isSlotBlockingStatus(row?.Status)) return acc;
      const parsed = parseWorkingRange(row?.Time);
      if (parsed) acc.push(parsed);
      return acc;
    }, []);
  };

  const buildTimeSlotsForDate = ({
    dateKey,
    workingHours,
    busyIntervals,
    totalDuration,
    minAllowedDate,
  }) => {
    if (!workingHours) return [];
    const [startDay, endDay] = workingHours;
    if (endDay - startDay < totalDuration) return [];
    const slots = [];
    for (let minute = startDay; minute <= endDay - totalDuration; minute += 60) {
      const startLabel = formatMinutesAsClock(minute);
      const endLabel = formatMinutesAsClock(minute + totalDuration);
      const slotDate = parseZonedDateTime(dateKey, startLabel);
      if (!slotDate || Number.isNaN(slotDate.getTime())) continue;
      if (slotDate < minAllowedDate) continue;
      if (!canFitTimeRange(minute, totalDuration, busyIntervals)) continue;
      slots.push({
        start: startLabel,
        end: endLabel,
        label: `${startLabel} - ${endLabel}`,
      });
    }
    return slots;
  };

  const countHomeUserActiveAppointments = async (userId, prismaClient = prisma) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return 0;
    const rows = await prismaClient.appointments.findMany({
      where: { UserID: safeUserId },
      select: { Status: true },
    });
    return rows.reduce((acc, row) => (isActiveStatus(row?.Status) ? acc + 1 : acc), 0);
  };

  const validateActiveAppointment = async (appointment, options = {}) => {
    const safeBarber = normalizeText(appointment?.Barber);
    const safeDate = normalizeText(appointment?.Date);
    const safeTime = normalizeText(appointment?.Time);
    const excludeAppointmentId = normalizeText(options.excludeAppointmentId);
    const prismaClient = options.prismaClient || prisma;
    const allowMissingSchedule = options.allowMissingSchedule === true;
    const allowOutsideWorkingHours = options.allowOutsideWorkingHours === true;
    const allowBusySlot = options.allowBusySlot === true;

    if (!safeBarber) {
      throw createError("INVALID_BARBER");
    }
    if (!isIsoDateKey(safeDate)) {
      throw createError("INVALID_DATE");
    }
    const appointmentRange = parseWorkingRange(safeTime);
    if (!appointmentRange) {
      throw createError("INVALID_TIME_RANGE");
    }

    const workingHours = await getWorkingHoursForBarberDate(safeBarber, safeDate, prismaClient);
    if (!workingHours) {
      if (allowMissingSchedule) {
        return {
          date: safeDate,
          time: safeTime,
          workingHours: null,
          appointmentRange,
        };
      }
      throw createError("NO_SCHEDULE");
    }

    const [startMinute, endMinute] = appointmentRange;
    const [workStart, workEnd] = workingHours;
    if (startMinute < workStart || endMinute > workEnd) {
      if (allowOutsideWorkingHours) {
        return {
          date: safeDate,
          time: safeTime,
          workingHours,
          appointmentRange,
        };
      }
      throw createError("OUTSIDE_WORKING_HOURS");
    }

    const busyIntervals = await getBusyIntervalsForBarberDate(
      safeBarber,
      safeDate,
      excludeAppointmentId || null,
      prismaClient,
    );
    if (!canFitTimeRange(startMinute, endMinute - startMinute, busyIntervals)) {
      if (allowBusySlot) {
        return {
          date: safeDate,
          time: safeTime,
          workingHours,
          appointmentRange,
        };
      }
      throw createError("SLOT_TAKEN");
    }

    return {
      date: safeDate,
      time: safeTime,
      workingHours,
      appointmentRange,
    };
  };

  const createHomeAppointment = async ({
    homeUser,
    barber,
    dateKey,
    startMinute,
    totalDuration,
    selectedServices,
    settings,
    activeStatus,
  }) => {
    const startLabel = formatMinutesAsClock(startMinute);
    const endLabel = formatMinutesAsClock(startMinute + totalDuration);
    const startDate = parseZonedDateTime(dateKey, startLabel);
    const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
    if (!startDate || Number.isNaN(startDate.getTime()) || startDate < minAllowedDate) {
      throw createError("LEAD_TIME");
    }

    return prisma.$transaction(async (tx) => {
      const activeCount = await countHomeUserActiveAppointments(homeUser.id, tx);
      if (activeCount >= settings.bookingLimit) {
        throw createError("LIMIT_REACHED");
      }

      const appointment = {
        id: randomUUID(),
        UserID: homeUser.id,
        CustomerName: homeUser.displayName || homeUser.phone || "Клиент",
        Phone: homeUser.phone || null,
        Barber: barber.name,
        Date: dateKey,
        Time: `${startLabel} - ${endLabel}`,
        Status: activeStatus,
        Services: selectedServices.map((service) => service.name).join(", "),
        Reminder2hClientSent: false,
        Reminder2hBarberSent: false,
      };

      await validateActiveAppointment(appointment, { prismaClient: tx });
      await tx.appointments.create({ data: appointment });
      return appointment;
    });
  };

  const validateAppointmentRecord = async (appointment, options = {}) => {
    if (!isActiveStatus(appointment?.Status)) {
      return { mode: "skip" };
    }
    return validateActiveAppointment(appointment, options);
  };

  return {
    buildTimeSlotsForDate,
    countHomeUserActiveAppointments,
    createHomeAppointment,
    formatMinutesAsClock,
    getBusyIntervalsForBarberDate,
    getWorkingHoursForBarberDate,
    isIsoDateKey,
    parseServiceIdsInput,
    parseTimeLabelToMinutes,
    parseWorkingRange,
    parseZonedDateTime,
    resolveBookableServicesForBarber,
    validateAppointmentRecord,
    validateActiveAppointment,
    normalizePhone,
  };
};

module.exports = {
  createAppointmentService,
};
