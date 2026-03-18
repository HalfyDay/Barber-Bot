const test = require("node:test");
const assert = require("node:assert/strict");

const { createNotificationReminderService } = require("../services/notificationReminderService");

const normalizeText = (value) => (value ?? "").toString().trim();

const createHarness = (overrides = {}) => {
  const sentRequests = [];
  const appointmentUpdates = [];
  const deps = {
    normalizeText,
    readBotToken: async () => "bot-token",
    runtimeFetch: async (_url, options) => {
      sentRequests.push(JSON.parse(options.body));
      return {
        ok: true,
        async json() {
          return { ok: true, result: { message_id: 1 } };
        },
      };
    },
    prisma: {
      users: {
        async findMany() {
          return [{ id: "user-1", TelegramID: "1001", Name: "Ivan", Phone: "+7999" }];
        },
      },
      barbers: {
        async findMany() {
          return [{ name: "Timur", telegramId: "2002" }];
        },
      },
      appointments: {
        async findMany() {
          return [];
        },
        async update(payload) {
          appointmentUpdates.push(payload);
          return payload;
        },
        async deleteMany() {
          return { count: 0 };
        },
      },
    },
    formatDateOnly: (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    parseDateTime: (dateStr, timeRange) => {
      const start = normalizeText(timeRange).split("-")[0];
      return new Date(`${dateStr}T${start}:00.000Z`);
    },
    parseTimeRangeParts: (value) => {
      const [start = ""] = normalizeText(value).split("-");
      return { start };
    },
    parseZonedDateTime: (dateStr, timeToken) => new Date(`${dateStr}T${timeToken}:00.000Z`),
    listUsersWithHaircutReminderState: () => [],
    markUserHaircutReminderSent: () => {},
    getUserBookingSummaryByTelegram: async () => ({ lastHaircutDate: null }),
    getBotSettings: async () => ({ isBotEnabled: true }),
    appointmentRetentionDays: 90,
    appointmentReminderIntervalMs: 60000,
    statusActive: "active",
    logger: {
      log() {},
      error() {},
    },
    ...overrides,
  };

  const service = createNotificationReminderService(deps);

  return {
    service,
    sentRequests,
    appointmentUpdates,
  };
};

test("notification reminder service notifies barber about new appointment", async () => {
  const { service, sentRequests } = createHarness();

  const result = await service.notifyBarberAboutNewAppointment({
    appointment: {
      Date: "2030-01-01",
      Time: "10:00-10:30",
      CustomerName: "Ivan",
      Phone: "+7999",
      Services: "Cut",
    },
    barber: {
      name: "Timur",
      telegramId: "2002",
    },
    homeUser: null,
  });

  assert.equal(result, true);
  assert.equal(sentRequests.length, 1);
  assert.equal(sentRequests[0].chat_id, "2002");
  assert.match(sentRequests[0].text, /10:00-10:30/);
});

test("notification reminder service sends client and barber 2-hour reminders", async () => {
  const now = new Date("2030-01-01T08:30:00.000Z");
  const { service, sentRequests, appointmentUpdates } = createHarness({
    prisma: {
      users: {
        async findMany() {
          return [{ id: "user-1", TelegramID: "1001", Name: "Ivan", Phone: "+7999" }];
        },
      },
      barbers: {
        async findMany() {
          return [{ name: "Timur", telegramId: "2002" }];
        },
      },
      appointments: {
        async findMany() {
          return [
            {
              id: "appt-1",
              UserID: "user-1",
              CustomerName: "Ivan",
              Phone: "+7999",
              Barber: "Timur",
              Date: "2030-01-01",
              Time: "10:00-10:30",
              Reminder2hClientSent: false,
              Reminder2hBarberSent: false,
            },
          ];
        },
        async update(payload) {
          appointmentUpdates.push(payload);
          return payload;
        },
        async deleteMany() {
          return { count: 0 };
        },
      },
    },
  });

  const sentCount = await service.processUpcomingAppointmentReminders(now);

  assert.equal(sentCount, 2);
  assert.equal(sentRequests.length, 2);
  assert.deepEqual(
    appointmentUpdates.map((item) => item.data),
    [{ Reminder2hClientSent: true }, { Reminder2hBarberSent: true }],
  );
});

