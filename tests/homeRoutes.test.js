const test = require("node:test");
const assert = require("node:assert/strict");

const { registerHomeRoutes } = require("../routes/homeRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => normalizeText(value);

const createHomeUserRecord = (overrides = {}) => ({
  id: "user-1",
  Name: "Ivan",
  Phone: "+79990000000",
  TelegramID: null,
  homeIsActive: true,
  homePasswordHash: "hash",
  homePasswordSalt: "salt",
  homeCreatedAt: "2025-01-01T00:00:00.000Z",
  homeUpdatedAt: "2025-01-01T00:00:00.000Z",
  ...overrides,
});

const createHomeHarness = (overrides = {}) => {
  const {
    prisma: prismaOverrides = {},
    appointmentService: appointmentServiceOverrides = {},
    ...restOverrides
  } = overrides;
  const app = createAppMock();
  const prisma = {
    users: {
      async findUnique() {
        return null;
      },
      async findMany() {
        return [];
      },
      async update({ data }) {
        return data;
      },
      async create({ data }) {
        return data;
      },
      ...(prismaOverrides.users || {}),
    },
    barbers: {
      async findMany() {
        return [];
      },
      ...(prismaOverrides.barbers || {}),
    },
  };

  registerHomeRoutes({
    app,
    authenticateHomeToken: (_req, _res, next) => next && next(),
    prisma,
    randomUUID: () => "user-1",
    normalizeText,
    normalizePhone,
    hashHomePassword: () => ({ hashHex: "hash", saltHex: "salt" }),
    verifyHomePassword: () => true,
    findHomeUserByPhone: async () => null,
    findHomeUserByTelegramId: async () => null,
    findHomeUserById: async () => null,
    shouldHydrateUserNameFromHome: () => false,
    HOME_USER_SELECT: { id: true },
    HOME_PROFILE_SELECT: { id: true },
    toPublicHomeUser: (row) => row,
    toPublicHomeProfile: (row) => row,
    buildHomeIdentity: (payload) => payload,
    signHomeSessionToken: () => "token",
    buildLimitBlockedMessage: () => "blocked",
    getBotSettings: async () => ({ isBotEnabled: true }),
    TELEGRAM_BOT_USERNAME: "botname",
    markExpiredTelegramAuthRequests: () => {},
    createTelegramAuthRequest: () => ({
      id: "req-1",
      code: "123456",
      expiresAt: "2030-01-01T00:00:00.000Z",
    }),
    getTelegramAuthRequestById: () => null,
    updateTelegramAuthRequestById: () => {},
    deleteTelegramAuthRequestById: () => {},
    TELEGRAM_AUTH_FLOW_LOGIN: "login",
    TELEGRAM_AUTH_FLOW_PROFILE_LINK: "profile_link",
    TELEGRAM_AUTH_STATUS_COMPLETED: "completed",
    TELEGRAM_AUTH_STATUS_FAILED: "failed",
    TELEGRAM_AUTH_STATUS_EXPIRED: "expired",
    toTelegramIdNumber: () => 1,
    resolveHomeAssetPath: (value) => value,
    getServiceCatalog: async () => [],
    resolveHomeBookingUser: async () => ({ id: "home-1", Phone: "+79990000000" }),
    getHomeBookingSettings: async () => ({ bookingLimit: 2, minLeadHours: 2, maxDaysAhead: 14 }),
    appointmentService: {
      countHomeUserActiveAppointments: async () => 0,
      parseServiceIdsInput: (input) => (Array.isArray(input) ? input : [input].filter(Boolean)),
      resolveBookableServicesForBarber: () => [],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: () => ({
        id: "appt-1",
        Barber: "Barber",
        Date: "2030-01-01",
        Time: "10:00-10:30",
        Services: "Cut",
      }),
      getWorkingHoursForBarberDate: async () => null,
      getBusyIntervalsForBarberDate: async () => [],
      buildTimeSlotsForDate: () => [],
      ...appointmentServiceOverrides,
    },
    getBarbers: async () => [{ id: "barber-1", name: "Barber", cardPhrase: "", description: "" }],
    buildDateWindow: () => [],
    STATUS_ACTIVE: "active",
    notifyBarberAboutNewAppointment: async () => {},
    requestRealtimePush: () => {},
    ...restOverrides,
    prisma,
  });

  return { app };
};

test("home telegram auth start returns request payload with bot link", async () => {
  const { app } = createHomeHarness({
    createTelegramAuthRequest: () => ({
      id: "req-42",
      code: "654321",
      expiresAt: "2030-01-01T00:00:00.000Z",
    }),
    TELEGRAM_BOT_USERNAME: "brother_bot",
  });
  const handler = app.getRoute("POST", "/api/home/auth/telegram/start");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.requestId, "req-42");
  assert.equal(res.body.code, "654321");
  assert.match(res.body.botLink, /brother_bot/);
});

test("home telegram auth start rejects when bot is disabled", async () => {
  const { app } = createHomeHarness({
    getBotSettings: async () => ({ isBotEnabled: false }),
  });
  const handler = app.getRoute("POST", "/api/home/auth/telegram/start");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 503);
  assert.equal(res.body.success, false);
  assert.equal(res.body.message, "Вход через Telegram сейчас недоступен.");
});

test("home public payload exposes telegram auth availability", async () => {
  const { app } = createHomeHarness({
    buildPublicHomePayload: async () => ({
      site: {
        home: {},
        auth: { telegramEnabled: false },
      },
      booking: {
        activeAppointments: [],
        barbers: [],
      },
    }),
  });
  const handler = app.getRoute("GET", "/api/home/public");
  const res = createResponseMock();

  await handler({ query: {} }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(res.body.site.auth.telegramEnabled, false);
});

test("home telegram auth status completes login for existing user with password", async () => {
  const existingUser = createHomeUserRecord({
    id: "user-42",
    TelegramID: 777,
  });
  const { app } = createHomeHarness({
    getTelegramAuthRequestById: () => ({
      id: "req-1",
      status: "completed",
      flow: "login",
      telegramId: "777",
      userId: "user-42",
      phone: "+79990000000",
      displayName: "Ivan",
    }),
    prisma: {
      users: {
        async findUnique() {
          return existingUser;
        },
        async update({ data }) {
          return { ...existingUser, ...data };
        },
      },
    },
    findHomeUserByTelegramId: async () => existingUser,
    findHomeUserByPhone: async () => existingUser,
    toPublicHomeUser: (row) => ({
      id: row.id,
      phone: row.Phone,
      displayName: row.Name,
    }),
  });
  const handler = app.getRoute("GET", "/api/home/auth/telegram/status");
  const res = createResponseMock();

  await handler({ query: { requestId: "req-1" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(res.body.done, true);
  assert.equal(res.body.token, "token");
  assert.equal(res.body.user.id, "user-42");
});

test("home profile update blocks locked name changes", async () => {
  const currentUser = createHomeUserRecord({
    id: "user-77",
    Name: "Old Name",
  });
  const { app } = createHomeHarness({
    prisma: {
      users: {
        async findUnique() {
          return currentUser;
        },
      },
    },
    toPublicHomeProfile: (row) => ({
      id: row.id,
      displayName: row.Name,
      phone: row.Phone,
      limits: {
        name: { isLocked: true },
      },
    }),
  });
  const handler = app.getRoute("PUT", "/api/home/profile");
  const res = createResponseMock();

  await handler(
    {
      homeUser: { userId: "user-77" },
      body: { displayName: "New Name" },
    },
    res,
  );

  assert.equal(res.statusCode, 429);
  assert.equal(res.body.success, false);
  assert.equal(res.body.message, "blocked");
});

test("home profile telegram status rejects request created for another user", async () => {
  const currentUser = createHomeUserRecord({
    id: "user-77",
  });
  const { app } = createHomeHarness({
    getTelegramAuthRequestById: () => ({
      id: "req-77",
      flow: "profile_link",
      targetUserId: "user-other",
      status: "pending",
    }),
    prisma: {
      users: {
        async findUnique() {
          return currentUser;
        },
      },
    },
  });
  const handler = app.getRoute("GET", "/api/home/profile/telegram/status");
  const res = createResponseMock();

  await handler(
    {
      homeUser: { userId: "user-77" },
      query: { requestId: "req-77" },
    },
    res,
  );

  assert.equal(res.statusCode, 403);
  assert.equal(res.body.success, false);
  assert.equal(res.body.done, true);
});

test("home booking dates returns limit error when user already has max active appointments", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      countHomeUserActiveAppointments: async () => 2,
      parseServiceIdsInput: () => ["svc-1"],
    },
    getHomeBookingSettings: async () => ({ bookingLimit: 2, minLeadHours: 2, maxDaysAhead: 14 }),
  });
  const handler = app.getRoute("GET", "/api/home/booking/dates");
  const res = createResponseMock();

  await handler(
    {
      query: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.match(res.body.error, /2/);
});

test("home booking dates returns available dates and selected services", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      countHomeUserActiveAppointments: async () => 0,
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 45, name: "Cut" }],
      getWorkingHoursForBarberDate: async () => ({ start: "10:00", end: "18:00" }),
      getBusyIntervalsForBarberDate: async () => [],
      buildTimeSlotsForDate: ({ dateKey }) => (dateKey === "2030-01-01" ? [{ start: "10:00" }] : []),
    },
    getServiceCatalog: async () => [{ id: "svc-1", duration: 45, name: "Cut" }],
    buildDateWindow: () => [{ key: "2030-01-01" }, { key: "2030-01-02" }],
  });
  const handler = app.getRoute("GET", "/api/home/booking/dates");
  const res = createResponseMock();

  await handler(
    {
      query: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.dateCount, 1);
  assert.deepEqual(res.body.dates, ["2030-01-01"]);
  assert.equal(res.body.totalDuration, 45);
  assert.equal(res.body.services[0].id, "svc-1");
});

test("home booking appointment creates appointment and triggers side effects", async () => {
  let notified = null;
  let realtimeForced = null;
  const { app } = createHomeHarness({
    appointmentService: {
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 30, name: "Cut" }],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: ({ barber, dateKey, selectedServices }) => ({
        id: "appt-1",
        Barber: barber.name,
        Date: dateKey,
        Time: "10:00-10:30",
        Services: selectedServices.map((item) => item.name).join(", "),
      }),
    },
    getServiceCatalog: async () => [{ id: "svc-1", duration: 30, name: "Cut" }],
    notifyBarberAboutNewAppointment: async (payload) => {
      notified = payload;
    },
    requestRealtimePush: (force) => {
      realtimeForced = force;
    },
  });
  const handler = app.getRoute("POST", "/api/home/booking/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
        date: "2030-01-01",
        startTime: "10:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.appointment.id, "appt-1");
  assert.equal(res.body.appointment.barberName, "Barber");
  assert.equal(res.body.appointment.services, "Cut");
  assert.equal(notified?.appointment?.id, "appt-1");
  assert.equal(notified?.barber?.name, "Barber");
  assert.equal(realtimeForced, true);
});

test("home booking appointment maps slot taken domain error to 409 response", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 30 }],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: () => {
        throw new Error("SLOT_TAKEN");
      },
    },
    getServiceCatalog: async () => [{ id: "svc-1" }],
  });
  const handler = app.getRoute("POST", "/api/home/booking/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
        date: "2030-01-01",
        startTime: "10:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.error, "Слот уже занят. Выберите другое время.");
});

test("home booking appointment maps no schedule domain error to 409 response", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 30 }],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: () => {
        throw new Error("NO_SCHEDULE");
      },
    },
    getServiceCatalog: async () => [{ id: "svc-1" }],
  });
  const handler = app.getRoute("POST", "/api/home/booking/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
        date: "2030-01-01",
        startTime: "10:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.error, "На выбранную дату у барбера нет расписания.");
});

test("home booking appointment maps lead time domain error to 409 response", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 30 }],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: () => {
        throw new Error("LEAD_TIME");
      },
    },
    getServiceCatalog: async () => [{ id: "svc-1" }],
  });
  const handler = app.getRoute("POST", "/api/home/booking/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
        date: "2030-01-01",
        startTime: "10:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.match(res.body.error, /Lead|lead|minLeadHours/i);
});

test("home booking appointment maps outside working hours domain error to 409 response", async () => {
  const { app } = createHomeHarness({
    appointmentService: {
      parseServiceIdsInput: () => ["svc-1"],
      resolveBookableServicesForBarber: () => [{ id: "svc-1", duration: 30 }],
      isIsoDateKey: () => true,
      parseTimeLabelToMinutes: () => 600,
      createHomeAppointment: () => {
        throw new Error("OUTSIDE_WORKING_HOURS");
      },
    },
    getServiceCatalog: async () => [{ id: "svc-1" }],
  });
  const handler = app.getRoute("POST", "/api/home/booking/appointments");
  const res = createResponseMock();

  await handler(
    {
      body: {
        barberId: "barber-1",
        serviceIds: ["svc-1"],
        date: "2030-01-01",
        startTime: "10:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 409);
  assert.equal(res.body.error, "Время выходит за рабочий диапазон барбера.");
});
