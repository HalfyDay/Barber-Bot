const createNotificationReminderService = ({
  normalizeText,
  readBotToken,
  runtimeFetch,
  prisma,
  formatDateOnly,
  parseDateTime,
  parseTimeRangeParts,
  parseZonedDateTime,
  listUsersWithHaircutReminderState,
  markUserHaircutReminderSent,
  getUserBookingSummaryByTelegram,
  getBotSettings,
  appointmentRetentionDays,
  appointmentReminderIntervalMs,
  statusActive,
  setIntervalFn = setInterval,
  clearIntervalFn = clearInterval,
  logger = console,
}) => {
  let appointmentReminderInterval = null;
  let appointmentReminderCycleRunning = false;
  let lastAppointmentCleanupDateKey = "";

  const escapeTelegramHtml = (value) =>
    normalizeText(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const sendTelegramMessage = async (chatId, text) => {
    const safeChatId = normalizeText(chatId);
    const safeText = normalizeText(text);
    if (!safeChatId || !safeText) {
      throw new Error("Telegram chat id or text is missing");
    }
    const token = await readBotToken();
    if (!token) {
      throw new Error("Telegram bot token is not configured");
    }
    const response = await runtimeFetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chat_id: safeChatId,
        text: safeText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload?.ok === false) {
      throw new Error(
        normalizeText(payload?.description) || `HTTP ${response.status || "unknown"}`,
      );
    }
    return payload;
  };

  const notifyBarberAboutNewAppointment = async ({ appointment, barber, homeUser }) => {
    const barberName = normalizeText(barber?.name || appointment?.Barber);
    const barberChatId = normalizeText(barber?.telegramId);
    if (!barberName || !barberChatId) return false;
    const message = [
      `Новая запись: ${escapeTelegramHtml(appointment?.Date)} ${escapeTelegramHtml(
        appointment?.Time,
      )}.`,
      `Клиент: <b>${escapeTelegramHtml(
        appointment?.CustomerName || homeUser?.displayName || "Клиент",
      )}</b>`,
      `Телефон: ${escapeTelegramHtml(
        appointment?.Phone || homeUser?.phone || "Не указан",
      )}`,
      `Услуги: ${escapeTelegramHtml(appointment?.Services || "Не указаны")}`,
    ].join("\n");
    try {
      await sendTelegramMessage(barberChatId, message);
      return true;
    } catch (error) {
      logger.error(`Barber notification failed for ${barberName}:`, error?.message || error);
      return false;
    }
  };

  const buildAppointmentReminderContext = async () => {
    const [users, barbers] = await Promise.all([
      prisma.users.findMany({
        where: { TelegramID: { not: null } },
        select: { id: true, TelegramID: true, Name: true, Phone: true },
      }),
      prisma.barbers.findMany({
        where: { telegramId: { not: null } },
        select: { name: true, telegramId: true },
      }),
    ]);
    const userLookup = new Map();
    users.forEach((row) => {
      const userId = normalizeText(row?.id);
      const telegramId = normalizeText(row?.TelegramID);
      if (userId) userLookup.set(userId, row);
      if (telegramId) userLookup.set(telegramId, row);
    });
    const barberLookup = new Map();
    barbers.forEach((row) => {
      const barberName = normalizeText(row?.name);
      if (barberName) barberLookup.set(barberName, row);
    });
    return { userLookup, barberLookup };
  };

  const purgeOldAppointments = async (now = new Date()) => {
    const threshold = new Date(now.getTime());
    threshold.setDate(threshold.getDate() - appointmentRetentionDays);
    const thresholdKey = formatDateOnly(threshold);
    if (!thresholdKey) return 0;
    const result = await prisma.appointments.deleteMany({
      where: { Date: { lt: thresholdKey } },
    });
    return Number(result?.count) || 0;
  };

  const processMonthlyHaircutReminders = async (now = new Date()) => {
    const reminderUsers = await listUsersWithHaircutReminderState();
    if (!reminderUsers.length) return 0;
    let sentCount = 0;
    for (const row of reminderUsers) {
      const telegramId = normalizeText(row?.TelegramID);
      if (!telegramId) continue;
      let summary = null;
      try {
        summary = await getUserBookingSummaryByTelegram(telegramId);
      } catch (error) {
        logger.error(`Monthly reminder summary failed for ${telegramId}:`, error);
        continue;
      }
      const lastHaircutDate = normalizeText(summary?.lastHaircutDate);
      if (!lastHaircutDate) continue;
      const lastSentDate = normalizeText(row?.LastHaircutReminderSent);
      if (lastSentDate && lastSentDate >= lastHaircutDate) continue;
      const lastHaircutDateTime = parseZonedDateTime(lastHaircutDate, "00:00");
      if (!lastHaircutDateTime) continue;
      const dueAt = new Date(lastHaircutDateTime.getTime());
      dueAt.setDate(dueAt.getDate() + 30);
      if (now.getTime() < dueAt.getTime()) continue;
      try {
        await sendTelegramMessage(
          telegramId,
          "Вы достаточно давно не были на стрижке. Предлагаем записаться снова.",
        );
        await markUserHaircutReminderSent(telegramId, lastHaircutDate);
        sentCount += 1;
      } catch (error) {
        logger.error(`Monthly reminder send failed for ${telegramId}:`, error?.message || error);
      }
    }
    return sentCount;
  };

  const processUpcomingAppointmentReminders = async (now = new Date()) => {
    const todayKey = formatDateOnly(now);
    if (!todayKey) return 0;
    const appointments = await prisma.appointments.findMany({
      where: { Status: statusActive, Date: todayKey },
      select: {
        id: true,
        UserID: true,
        CustomerName: true,
        Phone: true,
        Barber: true,
        Date: true,
        Time: true,
        Reminder2hClientSent: true,
        Reminder2hBarberSent: true,
      },
    });
    if (!appointments.length) return 0;
    const { userLookup, barberLookup } = await buildAppointmentReminderContext();
    let sentCount = 0;
    for (const appointment of appointments) {
      const appointmentStart = parseDateTime(appointment?.Date, appointment?.Time);
      if (!appointmentStart) continue;
      const deltaMs = appointmentStart.getTime() - now.getTime();
      if (deltaMs < 0 || deltaMs > 2 * 60 * 60 * 1000) continue;
      const timeLabel =
        parseTimeRangeParts(appointment?.Time).start || normalizeText(appointment?.Time);
      if (!appointment?.Reminder2hClientSent) {
        const userRow = userLookup.get(normalizeText(appointment?.UserID));
        const clientChatId = normalizeText(userRow?.TelegramID);
        if (clientChatId) {
          try {
            await sendTelegramMessage(
              clientChatId,
              [
                "⏰ Напоминание:",
                `У вас сегодня в ${escapeTelegramHtml(timeLabel)} запись к барберу <b>${escapeTelegramHtml(
                  appointment?.Barber,
                )}</b>.`,
              ].join("\n"),
            );
            await prisma.appointments.update({
              where: { id: appointment.id },
              data: { Reminder2hClientSent: true },
            });
            sentCount += 1;
          } catch (error) {
            logger.error(
              `Client reminder send failed for appointment ${appointment.id}:`,
              error?.message || error,
            );
          }
        }
      }
      if (!appointment?.Reminder2hBarberSent) {
        const barberRow = barberLookup.get(normalizeText(appointment?.Barber));
        const barberChatId = normalizeText(barberRow?.telegramId);
        if (barberChatId) {
          try {
            await sendTelegramMessage(
              barberChatId,
              [
                "⏰ Напоминание:",
                `У вас сегодня в ${escapeTelegramHtml(timeLabel)} запись.`,
                `Клиент: <b>${escapeTelegramHtml(
                  appointment?.CustomerName || "Клиент",
                )}</b>`,
                `Телефон: ${escapeTelegramHtml(appointment?.Phone || "Не указан")}`,
              ].join("\n"),
            );
            await prisma.appointments.update({
              where: { id: appointment.id },
              data: { Reminder2hBarberSent: true },
            });
            sentCount += 1;
          } catch (error) {
            logger.error(
              `Barber reminder send failed for appointment ${appointment.id}:`,
              error?.message || error,
            );
          }
        }
      }
    }
    return sentCount;
  };

  const runAppointmentReminderCycle = async () => {
    if (appointmentReminderCycleRunning) return;
    appointmentReminderCycleRunning = true;
    try {
      const settings = await getBotSettings();
      if (settings?.isBotEnabled === false) return;
      const token = await readBotToken();
      if (!token) return;
      const now = new Date();
      const todayKey = formatDateOnly(now);
      if (todayKey && todayKey !== lastAppointmentCleanupDateKey) {
        const removed = await purgeOldAppointments(now);
        lastAppointmentCleanupDateKey = todayKey;
        if (removed > 0) {
          logger.log(`[reminders] Purged old appointments: ${removed}`);
        }
      }
      const [monthlySent, appointmentSent] = await Promise.all([
        processMonthlyHaircutReminders(now),
        processUpcomingAppointmentReminders(now),
      ]);
      if (monthlySent || appointmentSent) {
        logger.log(`[reminders] Sent monthly=${monthlySent}, appointment=${appointmentSent}`);
      }
    } catch (error) {
      logger.error("Appointment reminder cycle failed:", error);
    } finally {
      appointmentReminderCycleRunning = false;
    }
  };

  const startAppointmentReminderLoop = () => {
    if (appointmentReminderInterval) return;
    void runAppointmentReminderCycle();
    appointmentReminderInterval = setIntervalFn(() => {
      void runAppointmentReminderCycle();
    }, appointmentReminderIntervalMs);
    logger.log(
      `[reminders] Loop started every ${Math.round(appointmentReminderIntervalMs / 1000)}s`,
    );
  };

  const stopAppointmentReminderLoop = () => {
    if (!appointmentReminderInterval) return;
    clearIntervalFn(appointmentReminderInterval);
    appointmentReminderInterval = null;
  };

  return {
    escapeTelegramHtml,
    sendTelegramMessage,
    notifyBarberAboutNewAppointment,
    buildAppointmentReminderContext,
    purgeOldAppointments,
    processMonthlyHaircutReminders,
    processUpcomingAppointmentReminders,
    runAppointmentReminderCycle,
    startAppointmentReminderLoop,
    stopAppointmentReminderLoop,
  };
};

module.exports = {
  createNotificationReminderService,
};
