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
}) => {
  const buildScheduleBoard = async (requestedWindowDays = 14) => {
    const barbersList = await getBarbers({ includeInactive: true });
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
    const expiredSchedules = await prisma.schedules.findMany({
      where: { Date: { lt: todayKey } },
    });
    for (const schedule of expiredSchedules) {
      if (!schedule?.Barber || !schedule?.Date) continue;
      const baseDate = new Date(`${schedule.Date}T00:00:00`);
      if (Number.isNaN(baseDate.getTime())) continue;
      let rollingDate = new Date(baseDate);
      while (rollingDate < today) {
        rollingDate.setDate(rollingDate.getDate() + windowDays);
      }
      const nextDateKey = formatDateKey(rollingDate);
      const targetDayIndex = (rollingDate.getDay() + 6) % 7;
      const existingTarget = await prisma.schedules.findFirst({
        where: { Barber: schedule.Barber, Date: nextDateKey },
      });
      if (existingTarget) {
        await prisma.schedules.delete({ where: { id: schedule.id } });
      } else {
        await prisma.schedules.update({
          where: { id: schedule.id },
          data: { Date: nextDateKey, DayOfWeek: daysOfWeek[targetDayIndex] },
        });
      }
    }
    await prisma.schedules.deleteMany({
      where: {
        Date: { lt: todayKey },
      },
    });
    const allSchedules = await prisma.schedules.findMany();
    const schedulesMap = allSchedules.reduce((acc, schedule) => {
      if (schedule.Barber && schedule.Date) {
        acc.set(`${schedule.Barber}-${schedule.Date}`, schedule);
      }
      return acc;
    }, new Map());
    const fallbackNames = Array.from(
      new Set(allSchedules.map((item) => item.Barber).filter(Boolean)),
    );
    const barberNames = (
      barbersList.map((barber) => barber.name).filter(Boolean).length
        ? barbersList.map((barber) => barber.name).filter(Boolean)
        : fallbackNames
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
          Week: existing?.Week || "",
          originalId: existing?.id || null,
        });
      }
    });
    return fullSchedule;
  };

  app.get("/api/barbers/full", authenticateToken, async (req, res) => {
    try {
      const [barbers, appointmentsRaw] = await Promise.all([
        getBarbers({ includeInactive: true }),
        prisma.appointments.findMany(),
      ]);
      const appointments = appointmentsRaw.map(mapAppointment);
      const now = new Date();
      const yearAgo = new Date(now);
      yearAgo.setFullYear(yearAgo.getFullYear() - 1);
      const hydrated = barbers.map((barber) => {
        const related = appointments.filter(
          (appt) => normalizeText(appt.Barber) === normalizeText(barber.name),
        );
        return {
          ...barber,
          stats: {
            total: related.length,
            upcoming: related.filter((appt) => appt.isActive).length,
            confirmedYear: related.filter(
              (appt) =>
                appt.isConfirmed &&
                appt.startDateTime &&
                new Date(appt.startDateTime) >= yearAgo,
            ).length,
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
      const records = await prisma.appointments.findMany();
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
    const payload = coercePayload("Appointments", { ...req.body });
    if (isStaffIdentity(req.identity)) {
      const staffBarber = getIdentityBarberName(req.identity);
      if (!staffBarber) {
        return res.status(400).json({
          error: "В профиле сотрудника не указано имя барбера.",
        });
      }
      payload.Barber = staffBarber;
    }
    payload.Status = normalizeAppointmentStatus(payload.Status);
    if (!normalizeText(payload.Barber)) {
      return res.status(400).json({ error: "Для записи нужно указать барбера." });
    }
    if (payload.UserID !== undefined) {
      payload.UserID = payload.UserID === null || payload.UserID === "" ? null : String(payload.UserID);
    }
    try {
      try {
        await appointmentService.validateAppointmentRecord(payload, {
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
      const record = await prisma.appointments.create({
        data: { id: randomUUID(), ...payload },
      });
      res.status(201).json(record);
      requestRealtimePush(true);
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
    const data = coercePayload("Appointments", { ...req.body });
    if (data.UserID !== undefined) {
      data.UserID = data.UserID === null || data.UserID === "" ? null : String(data.UserID);
    }
    if (data.Status !== undefined) {
      data.Status = normalizeAppointmentStatus(data.Status);
    }
    try {
      const existing = await prisma.appointments.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Запись не найдена." });
      }
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
        data.Barber = staffBarberName;
      }
      const nextAppointment = { ...existing, ...data, id };
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
      const updated = await prisma.appointments.update({ where: { id }, data });
      res.json(updated);
      requestRealtimePush(true);
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
      if (isStaffIdentity(req.identity)) {
        const existing = await prisma.appointments.findUnique({ where: { id } });
        if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
          return res.status(403).json({
            error: "Недостаточно прав для удаления этой записи.",
          });
        }
      }
      await prisma.appointments.delete({ where: { id } });
      res.status(204).send();
      requestRealtimePush(true);
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
      return res.json(await buildScheduleBoard(req.query.days));
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
        where: { Barber, Date: date },
      });
      const result = existing
        ? await prisma.schedules.update({
            where: { id: existing.id },
            data: { Week: week },
          })
        : await prisma.schedules.create({
            data: {
              id: randomUUID(),
              Barber,
              Week: week,
              DayOfWeek: data.DayOfWeek,
              Date: date,
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
      let records = await prisma[modelName].findMany(queryOptions);
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
    if (tableName === "Cost") {
      ["Timur", "Vladimir", "Alina", "Aleksey", "Dlitelnost"].forEach((field) => {
        if (data[field] === undefined) return;
        if (data[field] === null || data[field] === "") {
          data[field] = null;
          return;
        }
        const parsed = Number(data[field]);
        data[field] = Number.isNaN(parsed) ? null : parsed;
      });
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
};

module.exports = {
  registerAdminCrudRoutes,
};


