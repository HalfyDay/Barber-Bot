const test = require("node:test");
const assert = require("node:assert/strict");

const { registerBotInternalRoutes } = require("../routes/botInternalRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => normalizeText(value);

const createBotInternalHarness = (overrides = {}) => {
  const {
    prisma: prismaOverrides = {},
    appointmentService: appointmentServiceOverrides = {},
    ...restOverrides
  } = overrides;
  const app = createAppMock();
  const prisma = {
    barbers: {
      async findFirst() {
        return { id: "barber-1", name: "Barber", telegramId: "500" };
      },
      ...(prismaOverrides.barbers || {}),
    },
    appointments: {
      async findMany() {
        return [];
      },
      async findUnique() {
        return null;
      },
      async create({ data }) {
        return data;
      },
      async update({ where, data }) {
        return { id: where.id, ...data };
      },
      ...(prismaOverrides.appointments || {}),
    },
  };

  registerBotInternalRoutes({
    app,
    authenticateBotInternal: (_req, _res, next) => next && next(),
    normalizeText,
    normalizePhone,
    prisma,
    getBotSettings: async () => ({}),
    getBarbers: async () => [],
    getServiceCatalog: async () => [],
    getUserBookingSummaryByTelegram: async () => ({
      activeAppointments: 0,
      userRecordId: "user-1",
      user: { Name: "Ivan", Phone: "+79990000000" },
      lookupKeys: ["user-1"],
    }),
    registerOrUpdateBotUser: async () => ({}),
    updateBotUserNameByTelegram: async () => ({}),
    updateBotUserPhoneByTelegram: async () => ({}),
    processBotInternalTelegramAuthStart: async () => ({}),
    processBotInternalTelegramAuthPhone: async () => ({}),
    listBotAvailabilityDates: async () => ({}),
    listBotAvailabilityTimes: async () => ({}),
    STATUS_ACTIVE: "active",
    STATUS_CANCELLED: "cancelled",
    getHomeBookingSettings: async () => ({ bookingLimit: 2 }),
    randomUUID: () => "appt-1",
    appointmentService: {
      async validateAppointmentRecord() {},
      ...appointmentServiceOverrides,
    },
    notifyBarberAboutNewAppointment: async () => {},
    requestRealtimePush: () => {},
    parseDateTime: () => null,
    ...restOverrides,
    prisma,
  });

  return { app };
};

test("bot-internal create appointment returns limit error when active bookings reached", async () => {
  const { app } = createBotInternalHarness({
    getUserBookingSummaryByTelegram: async () => ({
      activeAppointments: 2,
      userRecordId: "user-1",
      user: { Name: "Ivan", Phone: "+79990000000" },
      lookupKeys: ["user-1"],
    }),
    getHomeBookingSettings: async () => ({ bookingLimit: 2 }),
  });
  const handler = app.getRoute("POST", "/api/bot-internal/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        telegramId: "700",
        barberName: "Barber",
        date: "2030-01-01",
        timeRange: "10:00-10:30",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.code, "LIMIT_REACHED");
});

test("bot-internal cancel appointment blocks cancellation less than 2 hours before start", async () => {
  const { app } = createBotInternalHarness({
    prisma: {
      appointments: {
        async findUnique() {
          return { id: "appt-9", Date: "2030-01-01", Time: "10:00-10:30" };
        },
      },
    },
    parseDateTime: () => new Date(Date.now() + 60 * 60 * 1000),
  });
  const handler = app.getRoute("POST", "/api/bot-internal/appointments/:id/cancel");
  const res = createResponseMock();

  await handler({ params: { id: "appt-9" } }, res);

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.code, "TOO_LATE_TO_CANCEL");
});

test("bot-internal create appointment maps validation conflict to 409 response", async () => {
  const { app } = createBotInternalHarness({
    appointmentService: {
      async validateAppointmentRecord() {
        const error = new Error("Slot already taken");
        error.code = "SLOT_TAKEN";
        throw error;
      },
    },
  });
  const handler = app.getRoute("POST", "/api/bot-internal/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        telegramId: "700",
        barberName: "Barber",
        date: "2030-01-01",
        timeRange: "10:00-10:30",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.code, "SLOT_TAKEN");
});

test("bot-internal appointments list requires telegramId", async () => {
  const { app } = createBotInternalHarness();
  const handler = app.getRoute("GET", "/api/bot-internal/appointments");
  const res = createResponseMock();

  await handler({ query: {} }, res);

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /telegramId/i);
});

test("bot-internal appointment read returns 404 for missing appointment", async () => {
  const { app } = createBotInternalHarness({
    prisma: {
      appointments: {
        async findUnique() {
          return null;
        },
      },
    },
  });
  const handler = app.getRoute("GET", "/api/bot-internal/appointments/:id");
  const res = createResponseMock();

  await handler({ params: { id: "missing-id" } }, res);

  assert.equal(res.statusCode, 404);
  assert.match(res.body.error, /Appointment not found/i);
});

test("bot-internal user summary returns payload from service", async () => {
  const { app } = createBotInternalHarness({
    getUserBookingSummaryByTelegram: async () => ({
      activeAppointments: 1,
      userRecordId: "user-1",
      user: { Name: "Ivan", Phone: "+79990000000" },
      lookupKeys: ["user-1"],
    }),
  });
  const handler = app.getRoute("GET", "/api/bot-internal/users/by-telegram/:telegramId/summary");
  const res = createResponseMock();

  await handler({ params: { telegramId: "700" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.activeAppointments, 1);
  assert.equal(res.body.userRecordId, "user-1");
});

test("bot-internal appointments list returns user appointments in client mode", async () => {
  const { app } = createBotInternalHarness({
    getUserBookingSummaryByTelegram: async () => ({
      activeAppointments: 1,
      userRecordId: "user-1",
      user: { Name: "Ivan", Phone: "+79990000000" },
      lookupKeys: ["user-1", "700"],
    }),
    prisma: {
      appointments: {
        async findMany() {
          return [{ id: "appt-1", UserID: "user-1", Status: "active" }];
        },
      },
    },
  });
  const handler = app.getRoute("GET", "/api/bot-internal/appointments");
  const res = createResponseMock();

  await handler({ query: { telegramId: "700" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.appointments.length, 1);
  assert.equal(res.body.user.Name, "Ivan");
});

test("bot-internal create appointment returns created appointment and barber payload", async () => {
  let notified = null;
  let realtimeForced = null;
  const { app } = createBotInternalHarness({
    prisma: {
      appointments: {
        async create({ data }) {
          return data;
        },
      },
    },
    appointmentService: {
      async validateAppointmentRecord() {},
    },
    notifyBarberAboutNewAppointment: async (payload) => {
      notified = payload;
    },
    requestRealtimePush: (force) => {
      realtimeForced = force;
    },
  });
  const handler = app.getRoute("POST", "/api/bot-internal/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        telegramId: "700",
        barberName: "Barber",
        date: "2030-01-01",
        timeRange: "10:00-10:30",
        services: "Cut",
        customerName: "Ivan",
        phone: "+79990000000",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.appointment.id, "appt-1");
  assert.equal(res.body.appointment.Barber, "Barber");
  assert.equal(res.body.barber.telegramId, "500");
  assert.equal(notified?.appointment?.id, "appt-1");
  assert.equal(realtimeForced, true);
});
