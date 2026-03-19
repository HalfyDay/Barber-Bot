const registerBotInternalRoutes = ({
  app,
  authenticateBotInternal,
  normalizeText,
  normalizePhone,
  prisma,
  getBotSettings,
  getBarbers,
  getServiceCatalog,
  getUserBookingSummaryByTelegram,
  registerOrUpdateBotUser,
  updateBotUserNameByTelegram,
  updateBotUserPhoneByTelegram,
  processBotInternalTelegramAuthStart,
  processBotInternalTelegramAuthPhone,
  listBotAvailabilityDates,
  listBotAvailabilityTimes,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  getHomeBookingSettings,
  randomUUID,
  appointmentService,
  notifyBarberAboutNewAppointment,
  requestRealtimePush,
  parseDateTime,
}) => {
  app.get("/api/bot-internal/settings", authenticateBotInternal, async (req, res) => {
    try {
      const settings = await getBotSettings();
      return res.json({
        botDescription: settings?.botDescription || "CRM Bot",
        aboutText: settings?.aboutText || "",
        bookingLimit: Math.max(1, Number(settings?.bookingLimit) || 2),
        minLeadHours: Math.max(1, Number(settings?.minLeadHours) || 2),
        maxDaysAhead: Math.max(1, Math.min(30, Number(settings?.maxDaysAhead) || 14)),
        isBotEnabled: settings?.isBotEnabled !== false,
      });
    } catch (error) {
      console.error("Bot internal settings error:", error);
      return res.status(500).json({ error: "Failed to load bot settings." });
    }
  });

  app.get("/api/bot-internal/barbers", authenticateBotInternal, async (req, res) => {
    try {
      const includeInactive =
        normalizeText(req.query?.includeInactive) === "1" ||
        normalizeText(req.query?.includeInactive).toLowerCase() === "true";
      const barbers = await getBarbers({ includeInactive });
      return res.json({ barbers });
    } catch (error) {
      console.error("Bot internal barbers error:", error);
      return res.status(500).json({ error: "Failed to load barbers." });
    }
  });

  app.get("/api/bot-internal/services", authenticateBotInternal, async (req, res) => {
    try {
      const services = await getServiceCatalog(false);
      return res.json({
        services: services.map((service) => ({
          id: service.id,
          name: service.name,
          duration: Number(service.duration) || 0,
          isActive: service.isActive !== false,
          prices: service.prices || {},
        })),
      });
    } catch (error) {
      console.error("Bot internal services error:", error);
      return res.status(500).json({ error: "Failed to load services." });
    }
  });

  app.get(
    "/api/bot-internal/barbers/by-telegram/:telegramId",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const safeTelegramId = normalizeText(req.params.telegramId);
        if (!safeTelegramId) {
          return res.status(400).json({ error: "telegramId is required." });
        }
        const barber = await prisma.barbers.findFirst({
          where: { telegramId: safeTelegramId },
        });
        return res.json({ barber: barber || null });
      } catch (error) {
        console.error("Bot internal barber by telegram error:", error);
        return res.status(500).json({ error: "Failed to load barber." });
      }
    },
  );

  app.get(
    "/api/bot-internal/users/by-telegram/:telegramId/summary",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const summary = await getUserBookingSummaryByTelegram(req.params.telegramId);
        return res.json(summary);
      } catch (error) {
        console.error("Bot internal user summary error:", error);
        return res.status(500).json({ error: "Failed to load user summary." });
      }
    },
  );

  app.post("/api/bot-internal/users/register", authenticateBotInternal, async (req, res) => {
    try {
      const summary = await registerOrUpdateBotUser({
        telegramId: req.body?.telegramId,
        name: req.body?.name,
        phone: req.body?.phone,
      });
      return res.status(201).json(summary);
    } catch (error) {
      if (error?.code === "INVALID_USER_DATA") {
        return res.status(400).json({ error: error.message, code: error.code });
      }
      console.error("Bot internal user register error:", error);
      return res.status(500).json({ error: "Failed to save user." });
    }
  });

  app.post(
    "/api/bot-internal/users/by-telegram/:telegramId/name",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const summary = await updateBotUserNameByTelegram({
          telegramId: req.params.telegramId,
          name: req.body?.name,
        });
        return res.json(summary);
      } catch (error) {
        if (error?.code === "INVALID_USER_DATA") {
          return res.status(400).json({ error: error.message, code: error.code });
        }
        if (error?.code === "USER_NOT_FOUND") {
          return res.status(404).json({ error: error.message, code: error.code });
        }
        console.error("Bot internal user name update error:", error);
        return res.status(500).json({ error: "Failed to update user name." });
      }
    },
  );

  app.post(
    "/api/bot-internal/users/by-telegram/:telegramId/phone",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const summary = await updateBotUserPhoneByTelegram({
          telegramId: req.params.telegramId,
          phone: req.body?.phone,
        });
        return res.json(summary);
      } catch (error) {
        if (error?.code === "INVALID_USER_DATA") {
          return res.status(400).json({ error: error.message, code: error.code });
        }
        if (error?.code === "USER_NOT_FOUND") {
          return res.status(404).json({ error: error.message, code: error.code });
        }
        console.error("Bot internal user phone update error:", error);
        return res.status(500).json({ error: "Failed to update user phone." });
      }
    },
  );

  app.post("/api/bot-internal/telegram-auth/begin", authenticateBotInternal, async (req, res) => {
    try {
      const payload = await processBotInternalTelegramAuthStart({
        code: req.body?.code,
        telegramId: req.body?.telegramId,
        displayName: req.body?.displayName,
      });
      return res.json(payload);
    } catch (error) {
      if (["INVALID_CODE", "INVALID_USER_DATA"].includes(error?.code)) {
        return res.status(400).json({ error: error.message, code: error.code });
      }
      if (error?.code === "REQUEST_NOT_FOUND") {
        return res.status(404).json({ error: error.message, code: error.code });
      }
      if (
        [
          "REQUEST_NOT_ACTIVE",
          "REQUEST_EXPIRED",
          "TELEGRAM_MISMATCH",
          "REQUEST_CORRUPT",
          "TELEGRAM_ALREADY_LINKED",
        ].includes(error?.code)
      ) {
        return res.status(409).json({ error: error.message, code: error.code });
      }
      console.error("Bot internal telegram auth begin error:", error);
      return res.status(500).json({ error: "Failed to start Telegram auth." });
    }
  });

  app.post("/api/bot-internal/telegram-auth/phone", authenticateBotInternal, async (req, res) => {
    try {
      const payload = await processBotInternalTelegramAuthPhone({
        requestId: req.body?.requestId,
        telegramId: req.body?.telegramId,
        phone: req.body?.phone,
      });
      return res.json(payload);
    } catch (error) {
      if (["INVALID_PHONE", "INVALID_USER_DATA"].includes(error?.code)) {
        return res.status(400).json({ error: error.message, code: error.code });
      }
      if (error?.code === "REQUEST_NOT_FOUND") {
        return res.status(404).json({ error: error.message, code: error.code });
      }
      if (
        [
          "REQUEST_NOT_ACTIVE",
          "REQUEST_EXPIRED",
          "TELEGRAM_MISMATCH",
          "REQUEST_FLOW_MISMATCH",
        ].includes(error?.code)
      ) {
        return res.status(409).json({ error: error.message, code: error.code });
      }
      console.error("Bot internal telegram auth phone error:", error);
      return res.status(500).json({ error: "Failed to complete Telegram auth." });
    }
  });

  app.get(
    "/api/bot-internal/availability/dates",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const payload = await listBotAvailabilityDates({
          barberName: req.query?.barberName,
          duration: req.query?.duration,
        });
        return res.json(payload);
      } catch (error) {
        if (error?.code === "INVALID_BARBER") {
          return res.status(404).json({ error: error.message, code: error.code });
        }
        if (error?.code === "INVALID_DURATION") {
          return res.status(400).json({ error: error.message, code: error.code });
        }
        console.error("Bot internal availability dates error:", error);
        return res.status(500).json({ error: "Failed to load available dates." });
      }
    },
  );

  app.get(
    "/api/bot-internal/availability/times",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const payload = await listBotAvailabilityTimes({
          barberName: req.query?.barberName,
          dateKey: req.query?.date,
          duration: req.query?.duration,
        });
        return res.json(payload);
      } catch (error) {
        if (error?.code === "INVALID_BARBER") {
          return res.status(404).json({ error: error.message, code: error.code });
        }
        if (error?.code === "INVALID_DURATION" || error?.code === "INVALID_DATE") {
          return res.status(400).json({ error: error.message, code: error.code });
        }
        console.error("Bot internal availability times error:", error);
        return res.status(500).json({ error: "Failed to load available times." });
      }
    },
  );

  app.get("/api/bot-internal/appointments", authenticateBotInternal, async (req, res) => {
    try {
      const safeTelegramId = normalizeText(req.query?.telegramId);
      const mode = normalizeText(req.query?.mode).toLowerCase() || "client";
      const activeOnly =
        normalizeText(req.query?.activeOnly || "1") !== "0" &&
        normalizeText(req.query?.activeOnly || "1").toLowerCase() !== "false";
      if (!safeTelegramId) {
        return res.status(400).json({ error: "telegramId is required." });
      }
      if (mode === "barber") {
        const barber = await prisma.barbers.findFirst({
          where: { telegramId: safeTelegramId },
          select: { name: true },
        });
        if (!barber?.name) {
          return res.json({ appointments: [], barber: null });
        }
        const where = { Barber: barber.name };
        if (activeOnly) where.Status = STATUS_ACTIVE;
        const appointments = await prisma.appointments.findMany({
          where,
          orderBy: [{ Date: "asc" }, { Time: "asc" }],
        });
        return res.json({ appointments, barber });
      }
      const summary = await getUserBookingSummaryByTelegram(safeTelegramId);
      if (!summary.lookupKeys.length) {
        return res.json({ appointments: [], user: null });
      }
      const where = { UserID: { in: summary.lookupKeys } };
      if (activeOnly) where.Status = STATUS_ACTIVE;
      const appointments = await prisma.appointments.findMany({
        where,
        orderBy: [{ Date: "asc" }, { Time: "asc" }],
      });
      return res.json({ appointments, user: summary.user });
    } catch (error) {
      console.error("Bot internal appointments list error:", error);
      return res.status(500).json({ error: "Failed to load appointments." });
    }
  });

  app.get("/api/bot-internal/appointments/:id", authenticateBotInternal, async (req, res) => {
    try {
      const appointment = await prisma.appointments.findUnique({
        where: { id: req.params.id },
      });
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found." });
      }
      return res.json({ appointment });
    } catch (error) {
      console.error("Bot internal appointment read error:", error);
      return res.status(500).json({ error: "Failed to load appointment." });
    }
  });

  app.post("/api/bot-internal/appointments", authenticateBotInternal, async (req, res) => {
    const safeTelegramId = normalizeText(req.body?.telegramId);
    const barberName = normalizeText(req.body?.barberName);
    const dateKey = normalizeText(req.body?.date);
    const timeRange = normalizeText(req.body?.timeRange);
    const services = normalizeText(req.body?.services);
    const customerName = normalizeText(req.body?.customerName);
    const phone = normalizePhone(req.body?.phone || "");

    if (!safeTelegramId || !barberName || !dateKey || !timeRange) {
      return res.status(400).json({ error: "Missing required appointment fields." });
    }

    try {
      const [summary, settings] = await Promise.all([
        getUserBookingSummaryByTelegram(safeTelegramId),
        getHomeBookingSettings(),
      ]);
      if (summary.activeAppointments >= settings.bookingLimit) {
        return res.status(409).json({
          code: "LIMIT_REACHED",
          error: `User already has ${settings.bookingLimit} active appointments.`,
        });
      }
      const barber = await prisma.barbers.findFirst({
        where: { name: barberName },
        select: { id: true, name: true, telegramId: true },
      });
      if (!barber) {
        return res.status(404).json({ error: "Barber not found." });
      }
      const appointment = {
        id: randomUUID(),
        UserID: summary.userRecordId || safeTelegramId,
        CustomerName:
          customerName || normalizeText(summary.user?.Name) || phone || safeTelegramId,
        Phone: phone || normalizePhone(summary.user?.Phone || "") || null,
        Barber: barber.name,
        Date: dateKey,
        Time: timeRange,
        Status: STATUS_ACTIVE,
        Services: services,
        Reminder2hClientSent: false,
        Reminder2hBarberSent: false,
      };
      try {
        await appointmentService.validateAppointmentRecord(appointment);
      } catch (error) {
        const code = normalizeText(error?.code || error?.message) || "APPOINTMENT_INVALID";
        return res.status(409).json({
          code,
          error: error?.message || "Appointment validation failed.",
        });
      }
      const created = await prisma.appointments.create({ data: appointment });
      await notifyBarberAboutNewAppointment({
        appointment: created,
        barber,
        homeUser: {
          displayName: created.CustomerName,
          phone: created.Phone,
        },
      });
      requestRealtimePush(true);
      return res.status(201).json({
        appointment: created,
        barber: {
          name: barber.name,
          telegramId: normalizeText(barber.telegramId) || null,
        },
      });
    } catch (error) {
      console.error("Bot internal appointment create error:", error);
      return res.status(500).json({ error: "Failed to create appointment." });
    }
  });

  app.post(
    "/api/bot-internal/appointments/:id/cancel",
    authenticateBotInternal,
    async (req, res) => {
      try {
        const existing = await prisma.appointments.findUnique({
          where: { id: req.params.id },
        });
        if (!existing) {
          return res.status(404).json({ error: "Appointment not found." });
        }
        const apptStart = parseDateTime(existing.Date, existing.Time);
        if (apptStart && apptStart.getTime() - Date.now() < 2 * 60 * 60 * 1000) {
          return res.status(409).json({
            code: "TOO_LATE_TO_CANCEL",
            error: "Appointment cannot be cancelled less than 2 hours before start.",
          });
        }
        const updated = await prisma.appointments.update({
          where: { id: req.params.id },
          data: { Status: STATUS_CANCELLED },
        });
        requestRealtimePush(true);
        return res.json({ appointment: updated });
      } catch (error) {
        console.error("Bot internal appointment cancel error:", error);
        return res.status(500).json({ error: "Failed to cancel appointment." });
      }
    },
  );
};

module.exports = {
  registerBotInternalRoutes,
};
