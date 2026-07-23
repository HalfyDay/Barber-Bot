
function mapFrontendAppointmentToPrisma(payload) {
  const result = { ...payload };
  if ('CustomerName' in payload) { result.customerName = payload.CustomerName; delete result.CustomerName; }
  if ('Phone' in payload) { result.phone = payload.Phone; delete result.Phone; }
  if ('Barber' in payload) { result.barber = payload.Barber; delete result.Barber; }
  if ('Date' in payload) { result.date = payload.Date; delete result.Date; }
  if ('Time' in payload) { result.time = payload.Time; delete result.Time; }
  if ('Status' in payload) { result.status = payload.Status; delete result.Status; }
  if ('Services' in payload) { result.services = payload.Services; delete result.Services; }
  if ('UserID' in payload) { result.userId = payload.UserID; delete result.UserID; }
  if ('Comment' in payload) { result.comment = payload.Comment; delete result.Comment; }
  if ('CoverBs' in payload) { result.coverBs = payload.CoverBs; delete result.CoverBs; }
  if ('DiscountRub' in payload) { result.discountRub = payload.DiscountRub; delete result.DiscountRub; }
  if ('Reminder2hClientSent' in payload) { result.reminder2hClientSent = payload.Reminder2hClientSent; delete result.Reminder2hClientSent; }
  if ('Reminder2hBarberSent' in payload) { result.reminder2hBarberSent = payload.Reminder2hBarberSent; delete result.Reminder2hBarberSent; }
  return result;
}

function mapPrismaAppointmentToFrontend(record) {
  if (!record) return record;
  const result = { ...record };
  if ('customerName' in record) { result.CustomerName = record.customerName; delete result.customerName; }
  if ('phone' in record) { result.Phone = record.phone; delete result.phone; }
  if ('barber' in record) { result.Barber = record.barber; delete result.barber; }
  if ('date' in record) { result.Date = record.date; delete result.date; }
  if ('time' in record) { result.Time = record.time; delete result.time; }
  if ('status' in record) { result.Status = record.status; delete result.status; }
  if ('services' in record) { result.Services = record.services; delete result.services; }
  if ('userId' in record) { result.UserID = record.userId; delete result.userId; }
  if ('comment' in record) { result.Comment = record.comment; delete result.comment; }
  if ('coverBs' in record) { result.CoverBs = record.coverBs; delete result.coverBs; }
  if ('discountRub' in record) { result.DiscountRub = record.discountRub; delete result.discountRub; }
  if ('reminder2hClientSent' in record) { result.Reminder2hClientSent = record.reminder2hClientSent; delete result.reminder2hClientSent; }
  if ('reminder2hBarberSent' in record) { result.Reminder2hBarberSent = record.reminder2hBarberSent; delete record.reminder2hBarberSent; }
  return result;
}

const registerAdminCrudRoutes = ({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  tableToModelMap,
  TABLE_ORDERING,
  STAFF_READ_TABLES,
  STAFF_WRITE_TABLES,
  STAFF_DELETE_TABLES,
  isStaffIdentity,
  getIdentityBarberName,
  matchesIdentityBarber,
  filterBarbersForIdentity,
  filterAppointmentsForIdentity,
  mapAppointment,
  getBarbers,
  propagateBarberRename,
  coercePayload,
  normalizeAppointmentStatus,
  appointmentService,
  respondWithAppointmentDomainError,
  requestRealtimePush,
  respondWithLegacyCrudBlock,
  buildUserInsightsMap,
  adjustUserBsBalance,
  addUserWarning,
  homePushService,
  notifyBarberAboutNewAppointment,
  splitServiceList,
  buildServiceLookup,
  getServicePriceForBarber,
  formatDateOnly,
  statusNoShow,
  isBarberOnline,
  getBarberLastSeen,
}) => {
  const getCityIdFromReq = (req) => req.headers?.['x-city-id'] || req.query?.cityId || null;

  const buildScheduleBoard = async (requestedWindowDays = 14, cityId = null) => {
    const barbersList = (await getBarbers({ includeInactive: true })).filter((b) => !cityId || !b.cityId || b.cityId === cityId);
    const daysOfWeek = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];
    const allowedWindowDays = [7, 14, 21, 30, 42];
    const normalizedWindowDays = Number(requestedWindowDays);
    const windowDays = allowedWindowDays.includes(normalizedWindowDays) ? normalizedWindowDays : 14;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const formatDateKey = (dateObj) => {
      const yyyy = dateObj.getFullYear();
      const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
      const dd = String(dateObj.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };
    const todayKey = formatDateKey(today);

    // Cleanup only truly stale records (older than 2x the window) without rolling.
    // Previously this function rolled expired records to new dates on every read,
    // which caused schedules to disappear from the dates the admin set them for.
    const staleThreshold = new Date(today);
    staleThreshold.setDate(staleThreshold.getDate() - windowDays * 2);
    const staleKey = formatDateKey(staleThreshold);
    await prisma.schedules.deleteMany({
      where: { date: { lt: staleKey } },
    });

    // Read all future/current schedules (from today onwards) for the display grid
    const cityBarberNames = barbersList.map((b) => normalizeText(b.name)).filter(Boolean);
    const scheduleWhere = { date: { gte: todayKey } };
    if (cityId) {
      scheduleWhere.OR = [{ cityId: cityId }, { cityId: null }];
    }
    const allSchedules = await prisma.schedules.findMany({
      where: scheduleWhere,
    });
    const schedulesMap = allSchedules.reduce((acc, schedule) => {
      if (schedule.barber && schedule.date) {
        acc.set(`${schedule.barber}-${schedule.date}`, schedule);
      }
      return acc;
    }, new Map());
    const barberNames = (
      barbersList.map((barber) => normalizeText(barber.name)).filter(Boolean)
    ).sort((a, b) => a.localeCompare(b, "ru"));
    const fullSchedule = [];
    barberNames.forEach((name) => {
      for (let offset = 0; offset < windowDays; offset += 1) {
        const date = new Date(today);
        date.setDate(today.getDate() + offset);
        const dateKey = formatDateKey(date);
        const dayIndex = (date.getDay() + 6) % 7;
        const mapKey = `${name}-${dateKey}`;
        const existing = schedulesMap.get(mapKey);
        fullSchedule.push({
          id: mapKey,
          Barber: name,
          DayOfWeek: daysOfWeek[dayIndex],
          Date: dateKey,
          Week: existing?.week || "",
          originalId: existing?.id || null,
        });
      }
    });
    return fullSchedule;
  };

  app.get("/api/barbers/full", authenticateToken, async (req, res) => {
    try {
      const cityId = getCityIdFromReq(req);
      let [barbers, appointmentsRaw, servicesRaw] = await Promise.all([
        getBarbers({ includeInactive: true }),
        prisma.appointments.findMany(),
        prisma.services.findMany(),
      ]);
      if (cityId) {
        barbers = barbers.filter(b => !b.cityId || b.cityId === cityId);
        servicesRaw = servicesRaw.filter(s => !s.cityId || s.cityId === cityId);
      }
      const appointments = appointmentsRaw.map(mapAppointment);
      const serviceLookup = buildServiceLookup(servicesRaw);
      const now = new Date();
      const todayKey = formatDateOnly(now);
      const yearAgo = new Date(now);
      yearAgo.setFullYear(yearAgo.getFullYear() - 1);
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthStartKey = formatDateOnly(monthStart);
      const isCompleted = (status) => normalizeAppointmentStatus(status) === 'Выполнена';
      const isNoShow = (status) => {
        const normalized = normalizeAppointmentStatus(status);
        return normalized === statusNoShow || normalized === 'no_show';
      };
      const hydrated = barbers.map((barber) => {
        const related = appointments.filter(
          (appt) => normalizeText(appt.Barber) === normalizeText(barber.name),
        );
        const monthAppointments = related.filter(
          (appt) => appt.Date && appt.Date >= monthStartKey,
        );

        // На сегодня — активные записи на сегодня
        const todayActive = related.filter(
          (appt) => appt.isActive && appt.Date === todayKey,
        ).length;

        // Клиенты за месяц — уникальные выполненные клиенты
        const monthClientVisits = new Map();
        monthAppointments.forEach((appt) => {
          if (!isCompleted(appt.Status)) return;
          const key = normalizeText(appt.UserID || appt.Phone || appt.CustomerName);
          if (key) monthClientVisits.set(key, (monthClientVisits.get(key) || 0) + 1);
        });
        const monthClients = monthClientVisits.size;

        // Постоянные — клиенты с 2+ визитами за месяц
        const monthRegular = [...monthClientVisits.values()].filter((count) => count >= 2).length;

        // Неявки за месяц
        const monthNoShow = monthAppointments.filter((appt) => isNoShow(appt.Status)).length;

        // Заработано за месяц
        let earningsMonth = 0;
        const masterSharePercent = Number(barber.position?.masterSharePercent ?? 0);
        monthAppointments.forEach((appt) => {
          if (!isCompleted(appt.Status)) return;
          if (appt.Services && splitServiceList(appt.Services).includes('Прочее')) return;
          const serviceNames = splitServiceList(appt.Services);
          if (!serviceNames.length) return;
          let appointmentGross = 0;
          serviceNames.forEach((serviceName) => {
            const service = serviceLookup.get(canonicalizeKey(serviceName));
            if (!service) return;
            const price = getServicePriceForBarber(service, barber.id);
            const numericPrice = Number(price);
            if (!Number.isFinite(numericPrice) || numericPrice <= 0) return;
            appointmentGross += numericPrice;
          });
          if (!appointmentGross) return;
          earningsMonth += Math.round(appointmentGross * (masterSharePercent / 100));
        });

        const online = typeof isBarberOnline === 'function' ? isBarberOnline(barber.id) : false;
        const memLastSeen = typeof getBarberLastSeen === 'function' ? getBarberLastSeen(barber.id) : null;
        const lastSeenAt = memLastSeen
          ? new Date(memLastSeen).toISOString()
          : barber.lastSeenAt
            ? new Date(barber.lastSeenAt).toISOString()
            : null;
        return {
          ...barber,
          isOnline: online,
          lastSeenAt,
          stats: {
            total: related.length,
            upcoming: related.filter((appt) => appt.isActive).length,
            confirmedYear: related.filter(
              (appt) =>
                appt.isConfirmed &&
                appt.startDateTime &&
                new Date(appt.startDateTime) >= yearAgo,
            ).length,
            todayActive,
            monthClients,
            monthRegular,
            monthNoShow,
            earningsMonth,
          },
        };
      });
      res.json(filterBarbersForIdentity(hydrated, req.identity));
    } catch (error) {
      console.error("Barbers list error:", error);
      res.status(500).json({ error: "Не удалось загрузить список барберов." });
    }
  });

  app.get("/api/barbers", authenticateToken, async (req, res) => {
    try {
      const barbers = await getBarbers({ includeInactive: true });
      res.json(filterBarbersForIdentity(barbers, req.identity));
    } catch (error) {
      console.error("Barbers list error:", error);
      res.status(500).json({ error: "Не удалось загрузить список барберов." });
    }
  });

  app.post("/api/barbers", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для создания барберов." });
    }
    const payload = coercePayload("Barbers", { ...req.body });
    if (payload.phone !== undefined) {
      payload.phone = normalizePhone(payload.phone);
    }
    if (payload.name !== undefined) {
      payload.name = normalizeText(payload.name);
    }
    try {
      const record = await prisma.barbers.create({
        data: { id: randomUUID(), ...payload },
      });
      await getBarbers({ includeInactive: true });
      res.status(201).json(record);
      requestRealtimePush(true);
    } catch (error) {
      console.error("Barber create error:", error);
      res.status(500).json({ error: "Не удалось создать барбера." });
    }
  });

  app.put("/api/barbers/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const isStaff = isStaffIdentity(req.identity);
    const data = coercePayload("Barbers", { ...req.body });
    let barberRenameContext = null;
    if (isStaff && id !== req.identity.barberId) {
      return res.status(403).json({ error: "Можно редактировать только свой профиль." });
    }
    if (data.phone !== undefined) {
      data.phone = normalizePhone(data.phone);
    }
    if (data.name !== undefined) {
      data.name = normalizeText(data.name);
    }
    if (data.name !== undefined) {
      const existingBarber = await prisma.barbers.findUnique({
        where: { id },
        select: { name: true },
      });
      if (
        existingBarber?.name &&
        canonicalizeKey(existingBarber.name) !== canonicalizeKey(data.name)
      ) {
        barberRenameContext = {
          barberId: id,
          oldName: existingBarber.name,
          newName: data.name,
        };
      }
    }
    try {
      const updated = await prisma.barbers.update({ where: { id }, data });
      if (barberRenameContext) {
        await propagateBarberRename(barberRenameContext);
      } else {
        await getBarbers({ includeInactive: true });
      }
      res.json(updated);
      requestRealtimePush(true);
    } catch (error) {
      console.error("Barber update error:", error);
      res.status(500).json({ error: "Не удалось обновить барбера." });
    }
  });

  app.delete("/api/barbers/:id", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для удаления барберов." });
    }
    try {
      await prisma.barbers.delete({ where: { id: req.params.id } });
      await getBarbers({ includeInactive: true });
      res.status(204).send();
      requestRealtimePush(true);
    } catch (error) {
      console.error("Barber delete error:", error);
      res.status(500).json({ error: "Не удалось удалить барбера." });
    }
  });

  app.post("/api/barbers/reorder", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РїРѕСЂСЏРґРєР° Р±Р°СЂР±РµСЂРѕРІ." });
    }
    const orderedIds = Array.isArray(req.body?.orderedIds) ? req.body.orderedIds : [];
    try {
      const existingBarbers = await prisma.barbers.findMany({
        select: { id: true, orderIndex: true, name: true },
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });
      const knownIds = new Set(existingBarbers.map((barber) => barber.id));
      const uniqueIds = orderedIds
        .map((value) => normalizeText(value))
        .filter((value, index, values) => value && knownIds.has(value) && values.indexOf(value) === index);
      const remainingIds = existingBarbers
        .map((barber) => barber.id)
        .filter((id) => !uniqueIds.includes(id));
      const finalOrder = [...uniqueIds, ...remainingIds];
      await prisma.$transaction(
        finalOrder.map((id, index) =>
          prisma.barbers.update({
            where: { id },
            data: { orderIndex: index },
          }),
        ),
      );
      const barbers = await getBarbers({ includeInactive: true });
      return res.json(filterBarbersForIdentity(barbers, req.identity));
    } catch (error) {
      console.error("Reorder barbers error:", error);
      return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РёР·РјРµРЅРёС‚СЊ РїРѕСЂСЏРґРѕРє Р±Р°СЂР±РµСЂРѕРІ." });
    }
  });

  app.get("/api/appointments", authenticateToken, async (req, res) => {
    try {
      const cityId = getCityIdFromReq(req);
      let cityFilter = {};
      if (cityId) {
        const cityBarbers = (await getBarbers({ includeInactive: true })).filter(
          (b) => !b.cityId || b.cityId === cityId,
        );
        const cityBarberNames = cityBarbers.map((b) => b.name).filter(Boolean);
        cityFilter = {
          where: {
            OR: [{ cityId: cityId }, { cityId: null }],
          },
        };
      }
      const records = await prisma.appointments.findMany(cityFilter);
      return res.json(filterAppointmentsForIdentity(records, req.identity).map(mapAppointment));
    } catch (error) {
      console.error("Appointments list error:", error);
      return res.status(500).json({ error: "Не удалось загрузить записи." });
    }
  });

  app.post("/api/appointments", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity) && !STAFF_WRITE_TABLES.has("Appointments")) {
      return res.status(403).json({
        error: "Недостаточно прав для создания записей в этом разделе.",
      });
    }
    const rawPayload = coercePayload("Appointments", { ...req.body });
    if (isStaffIdentity(req.identity)) {
      const staffBarber = getIdentityBarberName(req.identity);
      if (!staffBarber) {
        return res.status(400).json({
          error: "В профиле сотрудника не указано имя барбера.",
        });
      }
      rawPayload.Barber = staffBarber;
    }
    rawPayload.Status = normalizeAppointmentStatus(rawPayload.Status);
    if (!normalizeText(rawPayload.Barber)) {
      return res.status(400).json({ error: "Для записи нужно указать барбера." });
    }
    if (rawPayload.UserID !== undefined) {
      rawPayload.UserID = rawPayload.UserID === null || rawPayload.UserID === "" ? null : String(rawPayload.UserID);
    }
    try {
      try {
        await appointmentService.validateAppointmentRecord(rawPayload, {
          allowMissingSchedule: true,
          allowOutsideWorkingHours: true,
          allowBusySlot: true,
        });
      } catch (error) {
        if (respondWithAppointmentDomainError(res, error)) {
          return;
        }
        throw error;
      }
      const payload = mapFrontendAppointmentToPrisma(rawPayload);
      const cityId = getCityIdFromReq(req);
      if (cityId && !payload.cityId) payload.cityId = cityId;
      const record = await prisma.appointments.create({
        data: { id: randomUUID(), ...payload },
      });
      const recordFrontend = mapPrismaAppointmentToFrontend(record);
      res.status(201).json(recordFrontend);
      requestRealtimePush(true);
      // Notify the specific barber about the new appointment
      const barberName = normalizeText(recordFrontend.Barber);
      if (barberName) {
        const allBarbers = await getBarbers({ includeInactive: true });
        const targetBarber = allBarbers.find((b) => normalizeText(b.name) === barberName);
        if (targetBarber?.telegramId) {
          await notifyBarberAboutNewAppointment({
            appointment: recordFrontend,
            barber: targetBarber,
            homeUser: { displayName: recordFrontend.CustomerName, phone: recordFrontend.Phone },
          }).catch(() => {});
        }
      }
      // Notify the client
      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(recordFrontend);
      if (ownerUserId && normalizeText(recordFrontend.Status) === "Активная") {
        await homePushService?.sendNotificationToUser?.(
          ownerUserId,
          {
            title: "Запись создана",
            body: `${normalizeText(recordFrontend.Date)} · ${normalizeText(recordFrontend.Time)}`,
            tag: `brothershop-admin-booking-create-${normalizeText(recordFrontend.id)}`,
            url: "/booking/#booking",
          },
          { channel: "booking" },
        );
      }
    } catch (error) {
      console.error("Appointment create error:", error);
      res.status(500).json({ error: "Не удалось создать запись." });
    }
  });

  app.put("/api/appointments/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const isStaff = isStaffIdentity(req.identity);
    if (isStaff && !STAFF_WRITE_TABLES.has("Appointments")) {
      return res.status(403).json({
        error: "Недостаточно прав для изменения записи.",
      });
    }
    const rawData = coercePayload("Appointments", { ...req.body });
    if (rawData.UserID !== undefined) {
      rawData.UserID = rawData.UserID === null || rawData.UserID === "" ? null : String(rawData.UserID);
    }
    if (rawData.Status !== undefined) {
      rawData.Status = normalizeAppointmentStatus(rawData.Status);
    }
    try {
      let existing = await prisma.appointments.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Запись не найдена." });
      }
      existing = mapPrismaAppointmentToFrontend(existing);
      if (isStaff) {
        const staffBarberName = getIdentityBarberName(req.identity);
        if (!staffBarberName) {
          return res.status(400).json({
            error: "В профиле сотрудника не указано имя барбера.",
          });
        }
        if (!matchesIdentityBarber(existing.Barber, req.identity)) {
          return res.status(403).json({
            error: "Недостаточно прав для изменения этой записи.",
          });
        }
        rawData.Barber = staffBarberName;
      }
      const nextAppointment = { ...existing, ...rawData, id };
      try {
        await appointmentService.validateAppointmentRecord(nextAppointment, {
          excludeAppointmentId: id,
          allowMissingSchedule: true,
          allowOutsideWorkingHours: true,
          allowBusySlot: true,
        });
      } catch (error) {
        if (respondWithAppointmentDomainError(res, error)) {
          return;
        }
        throw error;
      }
      const prismaData = mapFrontendAppointmentToPrisma(rawData);
      let updated = await prisma.appointments.update({ where: { id }, data: prismaData });
      updated = mapPrismaAppointmentToFrontend(updated);
      res.json(updated);
      requestRealtimePush(true);
      // Notify the specific barber about the updated appointment
      const barberName = normalizeText(updated.Barber);
      if (barberName) {
        const allBarbers = await getBarbers({ includeInactive: true });
        const targetBarber = allBarbers.find((b) => normalizeText(b.name) === barberName);
        if (targetBarber?.telegramId) {
          await notifyBarberAboutNewAppointment({
            appointment: updated,
            barber: targetBarber,
            homeUser: { displayName: updated.CustomerName, phone: updated.Phone },
          }).catch(() => {});
        }
      }
      // Notify the client
      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(updated);
      if (ownerUserId) {
        const nextStatus = normalizeText(updated.Status);
        const title = nextStatus === "Отмена" ? "Запись отменена" : "Запись изменена";
        await homePushService?.sendNotificationToUser?.(
          ownerUserId,
          {
            title,
            body: `${normalizeText(updated.Date)} · ${normalizeText(updated.Time)}`,
            tag: `brothershop-admin-booking-update-${normalizeText(updated.id)}`,
            url: "/booking/#booking",
          },
          { channel: "booking" },
        );
      }
    } catch (error) {
      console.error("Appointment update error:", error);
      res.status(500).json({ error: "Не удалось обновить запись." });
    }
  });

  app.delete("/api/appointments/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    if (isStaffIdentity(req.identity) && !STAFF_DELETE_TABLES.has("Appointments")) {
      return res.status(403).json({
        error: "Недостаточно прав для удаления этого раздела.",
      });
    }
    try {
      let existing = null;
      if (isStaffIdentity(req.identity)) {
        existing = await prisma.appointments.findUnique({ where: { id } });
        if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
          return res.status(403).json({
            error: "Недостаточно прав для удаления этой записи.",
          });
        }
      } else {
        existing = await prisma.appointments.findUnique({ where: { id } });
      }
      await prisma.appointments.delete({ where: { id } });
      res.status(204).send();
      requestRealtimePush(true);
      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(existing || {});
      if (ownerUserId) {
        await homePushService?.sendNotificationToUser?.(
          ownerUserId,
          {
            title: "Запись удалена",
            body: `${normalizeText(existing?.Date)} · ${normalizeText(existing?.Time)}`,
            tag: `brothershop-admin-booking-delete-${normalizeText(id)}`,
            url: "/booking/#booking",
          },
          { channel: "booking" },
        );
      }
    } catch (error) {
      console.error("Appointment delete error:", error);
      res.status(500).json({ error: "Не удалось удалить запись." });
    }
  });

  app.get("/api/schedules", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity) && !STAFF_READ_TABLES.has("Schedules")) {
      return res.status(403).json({ error: "Недостаточно прав для доступа к этому разделу." });
    }
    try {
      const cityId = getCityIdFromReq(req);
      return res.json(await buildScheduleBoard(req.query?.days, cityId));
    } catch (error) {
      console.error("Schedules fetch error:", error);
      return res.status(500).json({ error: "Не удалось загрузить расписание." });
    }
  });

  app.put("/api/schedules/:id", authenticateToken, async (req, res) => {
    const isStaff = isStaffIdentity(req.identity);
    if (isStaff && !STAFF_WRITE_TABLES.has("Schedules")) {
      return res.status(403).json({ error: "Недостаточно прав для доступа к этому разделу." });
    }
    const data = coercePayload("Schedules", { ...req.body });
    if (isStaff) {
      const staffBarberName = getIdentityBarberName(req.identity);
      if (!staffBarberName) {
        return res.status(400).json({ error: "В профиле сотрудника не указано имя барбера." });
      }
      if (data.Barber && !matchesIdentityBarber(data.Barber, req.identity)) {
        return res.status(403).json({ error: "Можно редактировать только своё расписание." });
      }
      data.Barber = staffBarberName;
    }
    const Barber = normalizeText(data.Barber);
    const date = normalizeText(data.Date);
    const week = normalizeText(data.Week);
    if (!Barber || !date) {
      return res.status(400).json({ error: "Для расписания нужно указать барбера и дату." });
    }
    try {
      const existing = await prisma.schedules.findFirst({
        where: { barber: Barber, date: date },
      });
      const result = existing
        ? await prisma.schedules.update({
            where: { id: existing.id },
            data: { week: week },
          })
        : await prisma.schedules.create({
            data: {
              id: randomUUID(),
              barber: Barber,
              week: week,
              dayOfWeek: data.DayOfWeek,
              date: date,
            },
          });
      res.json(result);
      requestRealtimePush(true);
    } catch (error) {
      console.error("Schedule update error:", error);
      return res.status(500).json({ error: "Не удалось обновить расписание." });
    }
  });

  app.get("/api/:tableName", authenticateToken, async (req, res) => {
    const { tableName } = req.params;
    if (respondWithLegacyCrudBlock(res, tableName)) return;
    const modelName = tableToModelMap[tableName];
    if (!modelName || !prisma[modelName]) {
      return res.status(404).json({ error: "Запрошенная таблица не найдена." });
    }
    if (isStaffIdentity(req.identity) && !STAFF_READ_TABLES.has(tableName)) {
      return res.status(403).json({ error: "Недостаточно прав для доступа к этому разделу." });
    }
    try {
      const queryOptions = {};
      if (TABLE_ORDERING[tableName]) {
        queryOptions.orderBy = TABLE_ORDERING[tableName];
      }
      // Support filtering by positionId for PositionServiceMaxPrices
      if (tableName === "PositionServiceMaxPrices" && req.query?.positionId) {
        queryOptions.where = { positionId: req.query.positionId };
      }
      // Include children for Positions hierarchy
      if (tableName === "Positions") {
        queryOptions.include = { children: true };
      }
      // City filtering for tables that have a cityId column
      const CITY_FILTERED_TABLES = new Set(["Barbers", "Services", "Positions", "ShopCategories", "ShopProducts", "Users"]);
      const cityId = getCityIdFromReq(req);
      if (cityId && CITY_FILTERED_TABLES.has(tableName) && tableName !== "Users") {
        queryOptions.where = { ...(queryOptions.where || {}), OR: [{ cityId: cityId }, { cityId: null }] };
      }
      let records = await prisma[modelName].findMany(queryOptions);
      // City filtering for Users (Users don't have cityId, filter by appointments)
      if (tableName === "Users" && cityId) {
        const cityAppointments = await prisma.appointments.findMany({
          where: { cityId: cityId },
          select: { userId: true, phone: true },
        });
        const userPhonesWithAppointments = new Set(
          cityAppointments.map((a) => normalizeText(a.phone)).filter(Boolean),
        );
        const userIdsWithAppointments = new Set(
          cityAppointments.map((a) => a.userId).filter(Boolean),
        );
        records = records.filter((user) => {
          if (user.cityId === cityId) return true;
          if (userIdsWithAppointments.has(user.id)) return true;
          const normalizedPhone = normalizeText(user.Phone);
          if (normalizedPhone && userPhonesWithAppointments.has(normalizedPhone)) return true;
          return false;
        });
      }
      if (tableName === "Users" && typeof buildUserInsightsMap === "function") {
        const [appointmentsRaw, blockedUsers] = await Promise.all([
          prisma.appointments.findMany(),
          Promise.resolve(new Set()),
        ]);
        const insightsMap = await buildUserInsightsMap(records, appointmentsRaw.map(mapAppointment), blockedUsers);
        records = records.map((record) => ({
          ...record,
          ...(insightsMap.get(record.id) || {}),
          BS: insightsMap.get(record.id)?.bsBalance || 0,
          BSColor: insightsMap.get(record.id)?.activityColor || "red",
        }));
      }
      return res.json(records);
    } catch (error) {
      console.error("Generic fetch error:", error);
      return res.status(500).json({ error: "Не удалось загрузить данные." });
    }
  });

  app.post("/api/users/:id/bs", authenticateToken, async (req, res) => {
    if (typeof adjustUserBsBalance !== "function") {
      return res.status(501).json({ error: "BS operations are unavailable." });
    }
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения BS." });
    }
    const { id } = req.params;
    const actorName =
      normalizeText(req.identity?.displayName) ||
      normalizeText(req.identity?.name) ||
      normalizeText(req.identity?.login) ||
      "";
    try {
      const result = await adjustUserBsBalance({
        userId: id,
        mode: req.body?.mode,
        amountBs: req.body?.amountBs,
        comment: req.body?.comment,
        actorName,
      });
      requestRealtimePush(true);
      if (Number(result?.amountBs) > 0) {
        await homePushService?.sendNotificationToUser?.(
          id,
          {
            title: "Пополнение BS",
            body: `Баланс увеличен на ${Math.trunc(Number(result.amountBs) || 0)} BS.`,
            tag: `brothershop-admin-balance-${normalizeText(id)}`,
            url: "/booking/#referral",
          },
          { channel: "balance" },
        );
      }
      return res.json(result);
    } catch (error) {
      if (error?.message === "USER_NOT_FOUND") {
        return res.status(404).json({ error: "Пользователь не найден." });
      }
      if (error?.message === "NEGATIVE_BALANCE") {
        return res.status(400).json({ error: "Баланс BS не может быть отрицательным." });
      }
      if (error?.message === "INVALID_AMOUNT" || error?.message === "USER_REQUIRED") {
        return res.status(400).json({ error: "Некорректное значение BS." });
      }
      console.error("BS adjust error:", error);
      return res.status(500).json({ error: "Не удалось изменить баланс BS." });
    }
  });

  app.post("/api/users/:id/warnings", authenticateToken, async (req, res) => {
    if (typeof addUserWarning !== "function") {
      return res.status(501).json({ error: "Warnings are unavailable." });
    }
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для добавления предупреждения." });
    }
    const actorName =
      normalizeText(req.identity?.displayName) ||
      normalizeText(req.identity?.name) ||
      normalizeText(req.identity?.login) ||
      "";
    try {
      const result = await addUserWarning({
        userId: req.params.id,
        comment: req.body?.comment,
        actorName,
      });
      requestRealtimePush(true);
      return res.json(result);
    } catch (error) {
      if (error?.message === "USER_REQUIRED") {
        return res.status(400).json({ error: "Не выбран клиент." });
      }
      if (error?.message === "COMMENT_REQUIRED") {
        return res.status(400).json({ error: "Введите комментарий к предупреждению." });
      }
      console.error("Warning add error:", error);
      return res.status(500).json({ error: "Не удалось добавить предупреждение." });
    }
  });

  app.put("/api/:tableName/:id", authenticateToken, async (req, res) => {
    const { tableName, id } = req.params;
    if (respondWithLegacyCrudBlock(res, tableName)) return;
    const modelName = tableToModelMap[tableName];
    if (!modelName || !prisma[modelName]) {
      return res.status(404).json({ error: "Запрошенная таблица не найдена." });
    }
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для доступа к этому разделу." });
    }
    const data = coercePayload(tableName, { ...req.body });
    if (tableName === "Users" && data.TelegramID !== undefined) {
      if (data.TelegramID === null || data.TelegramID === "") {
        data.TelegramID = null;
      } else {
        const parsed = Number(data.TelegramID);
        data.TelegramID = Number.isNaN(parsed) ? null : parsed;
      }
    }
    try {
      const updated = await prisma[modelName].update({ where: { id }, data });
      res.json(updated);
      requestRealtimePush(true);
    } catch (error) {
      console.error("Record update error:", error);
      res.status(500).json({ error: "Не удалось обновить запись." });
    }
  });

  app.post("/api/:tableName", authenticateToken, async (req, res) => {
    const { tableName } = req.params;
    if (respondWithLegacyCrudBlock(res, tableName)) return;
    const modelName = tableToModelMap[tableName];
    if (!modelName || !prisma[modelName]) {
      return res.status(404).json({ error: "Запрошенная таблица не найдена." });
    }
    if (isStaffIdentity(req.identity) && !STAFF_WRITE_TABLES.has(tableName)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для создания записей в этом разделе." });
    }
    const payload = coercePayload(tableName, { ...req.body });
    const CITY_FILTERED_TABLES = new Set([
      "Barbers",
      "Services",
      "Positions",
      "ShopCategories",
      "ShopProducts",
      "ShopOrders",
      "Appointments",
      "Schedules",
    ]);
    const cityId = getCityIdFromReq(req);
    if (cityId && CITY_FILTERED_TABLES.has(tableName) && !payload.cityId) {
      payload.cityId = cityId;
    }
    if (tableName === "Users") {
      if (payload.TelegramID) {
        const parsed = Number(payload.TelegramID);
        payload.TelegramID = Number.isNaN(parsed) ? null : parsed;
      } else {
        payload.TelegramID = null;
      }
    }
    try {
      const record = await prisma[modelName].create({
        data: { id: randomUUID(), ...payload },
      });
      res.status(201).json(record);
      requestRealtimePush(true);
    } catch (error) {
      console.error("Record create error:", error);
      res.status(500).json({ error: "Не удалось создать запись." });
    }
  });

  app.delete("/api/:tableName/:id", authenticateToken, async (req, res) => {
    const { tableName, id } = req.params;
    if (respondWithLegacyCrudBlock(res, tableName)) return;
    const modelName = tableToModelMap[tableName];
    if (!modelName || !prisma[modelName]) {
      return res.status(404).json({ error: "Запрошенная таблица не найдена." });
    }
    if (isStaffIdentity(req.identity) && !STAFF_DELETE_TABLES.has(tableName)) {
      return res.status(403).json({ error: "Недостаточно прав для удаления этого раздела." });
    }
    try {
      await prisma[modelName].delete({ where: { id } });
      res.status(204).send();
      requestRealtimePush(true);
    } catch (error) {
      console.error("Record delete error:", error);
      res.status(500).json({ error: "Не удалось удалить запись." });
    }
  });

  // ── Positions reorder ─────────────────────────────────────────────────────
  app.post("/api/Positions/reorder", authenticateToken, async (req, res) => {
    if (isStaffIdentity(req.identity)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения порядка должностей." });
    }
    const orderedIds = Array.isArray(req.body?.orderedIds) ? req.body.orderedIds : [];
    try {
      const existingPositions = await prisma.positions.findMany({
        select: { id: true, orderIndex: true },
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });
      const knownIds = new Set(existingPositions.map((p) => p.id));
      const uniqueIds = orderedIds
        .map((value) => normalizeText(value))
        .filter((value, index, values) => value && knownIds.has(value) && values.indexOf(value) === index);
      const remainingIds = existingPositions
        .map((p) => p.id)
        .filter((id) => !uniqueIds.includes(id));
      const finalOrder = [...uniqueIds, ...remainingIds];
      await prisma.$transaction(
        finalOrder.map((id, index) =>
          prisma.positions.update({
            where: { id },
            data: { orderIndex: index },
          }),
        ),
      );
      const positions = await prisma.positions.findMany({
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });
      return res.json({ positions });
    } catch (error) {
      console.error("Reorder positions error:", error);
      return res.status(500).json({ error: "Не удалось изменить порядок должностей." });
    }
  });
};

module.exports = {
  registerAdminCrudRoutes,
};


