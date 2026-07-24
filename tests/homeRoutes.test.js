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
    findHomeUserById: async () => null,
    getUserMeta: async () => null,
    updateUserMeta: async (_userId, meta) => meta,
    shouldHydrateUserNameFromHome: () => false,
    HOME_USER_SELECT: { id: true },
    HOME_PROFILE_SELECT: { id: true },
    toPublicHomeUser: (row) => row,
    toPublicHomeProfile: (row) => row,
    buildHomeIdentity: (payload) => payload,
    signHomeSessionToken: () => "token",
    buildLimitBlockedMessage: () => "blocked",
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
    requestRealtimePush: () => {},
    ...restOverrides,
    prisma,
  });

  return { app };
};





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

test("home profile update stores a new password when provided", async () => {
  const currentUser = createHomeUserRecord({
    id: "user-78",
    Name: "Ivan",
    Phone: "+79990000000",
  });
  const calls = [];
  const { app } = createHomeHarness({
    prisma: {
      users: {
        async findUnique() {
          return currentUser;
        },
        async findMany() {
          return [];
        },
        async update({ where, data, select }) {
          calls.push(["update", where, data, select]);
          return { ...currentUser, ...data };
        },
      },
    },
  });
  const handler = app.getRoute("PUT", "/api/home/profile");
  const res = createResponseMock();

  await handler(
    {
      homeUser: { userId: "user-78" },
      body: { password: "new-secret-123" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0][1], { id: "user-78" });
  assert.equal(calls[0][2].homePasswordHash, "hash");
  assert.equal(calls[0][2].homePasswordSalt, "salt");
  assert.equal(calls[0][2].Name, "Ivan");
  assert.equal(calls[0][2].Phone, "+79990000000");
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
