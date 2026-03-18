const test = require("node:test");
const assert = require("node:assert/strict");

const { registerAdminCrudRoutes } = require("../routes/adminCrudRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();

const createHarness = (overrides = {}) => {
  const app = createAppMock();
  const prisma = {
    appointments: {
      async findMany() {
        return [];
      },
      async create({ data }) {
        return data;
      },
      async findUnique() {
        return null;
      },
      async update({ where, data }) {
        return { id: where.id, ...data };
      },
      async delete() {
        return {};
      },
    },
    schedules: {
      async findMany() {
        return [];
      },
      async findFirst() {
        return null;
      },
      async create({ data }) {
        return data;
      },
      async update({ where, data }) {
        return { id: where.id, ...data };
      },
      async delete() {
        return {};
      },
      async deleteMany() {
        return {};
      },
    },
    barbers: {
      async create({ data }) {
        return data;
      },
      async update({ where, data }) {
        return { id: where.id, ...data };
      },
      async delete() {
        return {};
      },
      async findUnique() {
        return null;
      },
    },
    ...(overrides.prisma || {}),
  };

  registerAdminCrudRoutes({
    app,
    authenticateToken: (_req, _res, next) => next && next(),
    prisma,
    randomUUID: () => "uuid-1",
    normalizeText,
    normalizePhone: (value) => value,
    canonicalizeKey: (value) => normalizeText(value).toLowerCase(),
    tableToModelMap: {},
    TABLE_ORDERING: {},
    STAFF_READ_TABLES: new Set(["Appointments", "Schedules"]),
    STAFF_WRITE_TABLES: new Set(["Appointments", "Schedules"]),
    STAFF_DELETE_TABLES: new Set(["Appointments"]),
    isStaffIdentity: () => false,
    getIdentityBarberName: (identity) => identity?.barberName || null,
    matchesIdentityBarber: (barberName, identity) => normalizeText(barberName) === normalizeText(identity?.barberName),
    filterBarbersForIdentity: (rows) => rows,
    filterAppointmentsForIdentity: (rows) => rows,
    mapAppointment: (record) => ({ ...record, mapped: true }),
    getBarbers: async () => [],
    propagateBarberRename: async () => {},
    coercePayload: (_tableName, payload) => payload,
    normalizeAppointmentStatus: (status) => normalizeText(status).toLowerCase() || "active",
    appointmentService: {
      async validateAppointmentRecord() {},
    },
    respondWithAppointmentDomainError: () => false,
    requestRealtimePush: () => {},
    respondWithLegacyCrudBlock: () => false,
    ...overrides,
    prisma,
  });

  return { app };
};

test("admin crud routes return appointments list", async () => {
  const records = [{ id: "appt-1", Barber: "Timur" }];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return records;
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    filterAppointmentsForIdentity: (rows, identity) => {
      assert.deepEqual(identity, { username: "owner" });
      return rows;
    },
    mapAppointment: (record) => ({ ...record, mapped: true }),
  });
  const handler = app.getRoute("GET", "/api/appointments");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, [{ id: "appt-1", Barber: "Timur", mapped: true }]);
});

test("admin crud routes create appointment and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    appointmentService: {
      async validateAppointmentRecord(payload) {
        calls.push(["validate", payload]);
      },
    },
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("POST", "/api/appointments");
  const res = createResponseMock();
  const payload = {
    Barber: "Timur",
    Service: "Fade",
    Status: " ACTIVE ",
    StartAt: "2026-03-18T10:00:00.000Z",
    UserID: "42",
  };

  await handler({ identity: { username: "owner" }, body: payload }, res);

  assert.equal(res.statusCode, 201);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    Barber: "Timur",
    Service: "Fade",
    Status: "active",
    StartAt: "2026-03-18T10:00:00.000Z",
    UserID: "42",
  });
  assert.deepEqual(calls, [
    [
      "validate",
      {
        Barber: "Timur",
        Service: "Fade",
        Status: "active",
        StartAt: "2026-03-18T10:00:00.000Z",
        UserID: "42",
      },
    ],
    [
      "create",
      {
        id: "uuid-1",
        Barber: "Timur",
        Service: "Fade",
        Status: "active",
        StartAt: "2026-03-18T10:00:00.000Z",
        UserID: "42",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes let staff create own appointment", async () => {
  const calls = [];
  const { app } = createHarness({
    isStaffIdentity: () => true,
    appointmentService: {
      async validateAppointmentRecord(payload) {
        calls.push(["validate", payload]);
      },
    },
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("POST", "/api/appointments");
  const res = createResponseMock();

  await handler(
    {
      identity: { role: "staff", barberId: "barber-1", barberName: "Timur" },
      body: {
        Barber: "Another Barber",
        Service: "Fade",
        Status: " ACTIVE ",
        StartAt: "2026-03-18T12:00:00.000Z",
        UserID: 77,
      },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    Barber: "Timur",
    Service: "Fade",
    Status: "active",
    StartAt: "2026-03-18T12:00:00.000Z",
    UserID: "77",
  });
  assert.deepEqual(calls, [
    [
      "validate",
      {
        Barber: "Timur",
        Service: "Fade",
        Status: "active",
        StartAt: "2026-03-18T12:00:00.000Z",
        UserID: "77",
      },
    ],
    [
      "create",
      {
        id: "uuid-1",
        Barber: "Timur",
        Service: "Fade",
        Status: "active",
        StartAt: "2026-03-18T12:00:00.000Z",
        UserID: "77",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes create or update schedule and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      schedules: {
        async findMany() {
          return [];
        },
        async findFirst(where) {
          calls.push(["findFirst", where]);
          return null;
        },
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
        async deleteMany() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/schedules/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "schedule-1" },
      body: {
        Barber: "Timur",
        Date: "2026-03-20",
        Week: "10:00-19:00",
        DayOfWeek: "Friday",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    Barber: "Timur",
    Week: "10:00-19:00",
    DayOfWeek: "Friday",
    Date: "2026-03-20",
  });
  assert.deepEqual(calls, [
    ["findFirst", { where: { Barber: "Timur", Date: "2026-03-20" } }],
    [
      "create",
      {
        id: "uuid-1",
        Barber: "Timur",
        Week: "10:00-19:00",
        DayOfWeek: "Friday",
        Date: "2026-03-20",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes return hydrated barbers list", async () => {
  const { app } = createHarness({
    getBarbers: async () => [{ id: "barber-1", name: "Timur" }],
    prisma: {
      appointments: {
        async findMany() {
          return [
            {
              id: "appt-1",
              Barber: "Timur",
              isActive: true,
              isConfirmed: true,
              startDateTime: new Date().toISOString(),
            },
          ];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    mapAppointment: (record) => record,
    filterBarbersForIdentity: (rows, identity) => {
      assert.deepEqual(identity, { username: "owner" });
      return rows;
    },
  });
  const handler = app.getRoute("GET", "/api/barbers/full");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.length, 1);
  assert.equal(res.body[0].name, "Timur");
  assert.deepEqual(res.body[0].stats, {
    total: 1,
    upcoming: 1,
    confirmedYear: 1,
  });
});

test("admin crud routes return plain barbers list", async () => {
  const barbers = [{ id: "barber-1", name: "Timur" }];
  const { app } = createHarness({
    getBarbers: async ({ includeInactive }) => {
      assert.equal(includeInactive, true);
      return barbers;
    },
    filterBarbersForIdentity: (rows, identity) => {
      assert.deepEqual(identity, { username: "owner" });
      return rows;
    },
  });
  const handler = app.getRoute("GET", "/api/barbers");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, barbers);
});

test("admin crud routes create barber and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      barbers: {
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
        async findUnique() {
          return null;
        },
      },
    },
    getBarbers: async ({ includeInactive }) => {
      calls.push(["getBarbers", includeInactive]);
      return [];
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("POST", "/api/barbers");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      body: { name: "Timur", phone: "+79990001122", orderIndex: 2 },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    name: "Timur",
    phone: "+79990001122",
    orderIndex: 2,
  });
  assert.deepEqual(calls, [
    ["create", { id: "uuid-1", name: "Timur", phone: "+79990001122", orderIndex: 2 }],
    ["getBarbers", true],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes update appointment and request realtime push", async () => {
  const calls = [];
  const existing = {
    id: "appt-1",
    Barber: "Timur",
    Service: "Fade",
    Status: "active",
    UserID: "42",
  };
  const { app } = createHarness({
    appointmentService: {
      async validateAppointmentRecord(payload, options) {
        calls.push(["validate", payload, options]);
      },
    },
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique({ where }) {
          assert.deepEqual(where, { id: "appt-1" });
          return existing;
        },
        async update({ where, data }) {
          calls.push(["update", where, data]);
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/appointments/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "appt-1" },
      body: { Status: " DONE ", UserID: "77" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "appt-1",
    Status: "done",
    UserID: "77",
  });
  assert.deepEqual(calls, [
    [
      "validate",
      {
        id: "appt-1",
        Barber: "Timur",
        Service: "Fade",
        Status: "done",
        UserID: "77",
      },
      { excludeAppointmentId: "appt-1" },
    ],
    ["update", { id: "appt-1" }, { Status: "done", UserID: "77" }],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes let staff update own appointment", async () => {
  const calls = [];
  const existing = {
    id: "appt-1",
    Barber: "Timur",
    Service: "Fade",
    Status: "active",
    StartAt: "2026-03-18T10:00:00.000Z",
    UserID: "42",
  };
  const { app } = createHarness({
    isStaffIdentity: () => true,
    appointmentService: {
      async validateAppointmentRecord(payload, options) {
        calls.push(["validate", payload, options]);
      },
    },
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique({ where }) {
          calls.push(["findUnique", where]);
          return existing;
        },
        async update({ where, data }) {
          calls.push(["update", where, data]);
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/appointments/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { role: "staff", barberId: "barber-1", barberName: "Timur" },
      params: { id: "appt-1" },
      body: {
        Barber: "Another Barber",
        Service: "Buzz",
        Status: " CONFIRMED ",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "appt-1",
    Barber: "Timur",
    Service: "Buzz",
    Status: "confirmed",
  });
  assert.deepEqual(calls, [
    ["findUnique", { id: "appt-1" }],
    [
      "validate",
      {
        id: "appt-1",
        Barber: "Timur",
        Service: "Buzz",
        Status: "confirmed",
        StartAt: "2026-03-18T10:00:00.000Z",
        UserID: "42",
      },
      { excludeAppointmentId: "appt-1" },
    ],
    [
      "update",
      { id: "appt-1" },
      {
        Barber: "Timur",
        Service: "Buzz",
        Status: "confirmed",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes delete appointment and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete({ where }) {
          calls.push(["delete", where]);
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("DELETE", "/api/appointments/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "appt-1" },
    },
    res,
  );

  assert.equal(res.statusCode, 204);
  assert.deepEqual(calls, [
    ["delete", { id: "appt-1" }],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes let staff delete own appointment", async () => {
  const calls = [];
  const { app } = createHarness({
    isStaffIdentity: () => true,
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique({ where }) {
          calls.push(["findUnique", where]);
          return { id: where.id, Barber: "Timur" };
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete({ where }) {
          calls.push(["delete", where]);
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("DELETE", "/api/appointments/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { role: "staff", barberId: "barber-1", barberName: "Timur" },
      params: { id: "appt-1" },
    },
    res,
  );

  assert.equal(res.statusCode, 204);
  assert.deepEqual(calls, [
    ["findUnique", { id: "appt-1" }],
    ["delete", { id: "appt-1" }],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes return schedule board", async () => {
  const schedules = [];
  const { app } = createHarness({
    getBarbers: async ({ includeInactive }) => {
      assert.equal(includeInactive, true);
      return [];
    },
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      schedules: {
        async findMany() {
          return schedules;
        },
        async findFirst() {
          return null;
        },
        async create({ data }) {
          return data;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
        async deleteMany(input) {
          return input;
        },
      },
    },
  });
  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, []);
});

test("admin crud routes let staff update own schedule", async () => {
  const calls = [];
  const { app } = createHarness({
    isStaffIdentity: () => true,
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      schedules: {
        async findMany() {
          return [];
        },
        async findFirst(where) {
          calls.push(["findFirst", where]);
          return null;
        },
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
        async deleteMany() {
          return {};
        },
      },
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/schedules/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { role: "staff", barberId: "barber-1", barberName: "Timur" },
      params: { id: "schedule-1" },
      body: {
        Date: "2026-03-19",
        DayOfWeek: "Wednesday",
        Week: "10:00-19:00",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    Barber: "Timur",
    Week: "10:00-19:00",
    DayOfWeek: "Wednesday",
    Date: "2026-03-19",
  });
  assert.deepEqual(calls, [
    ["findFirst", { where: { Barber: "Timur", Date: "2026-03-19" } }],
    [
      "create",
      {
        id: "uuid-1",
        Barber: "Timur",
        Week: "10:00-19:00",
        DayOfWeek: "Wednesday",
        Date: "2026-03-19",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes update barber and propagate rename", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      barbers: {
        async create({ data }) {
          return data;
        },
        async update({ where, data }) {
          calls.push(["update", where, data]);
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
        async findUnique() {
          return { name: "Old Timur" };
        },
      },
    },
    propagateBarberRename: async (context) => {
      calls.push(["propagateBarberRename", context]);
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/barbers/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "barber-1" },
      body: { name: "Timur", phone: "+79990001122" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "barber-1",
    name: "Timur",
    phone: "+79990001122",
  });
  assert.deepEqual(calls, [
    ["update", { id: "barber-1" }, { name: "Timur", phone: "+79990001122" }],
    [
      "propagateBarberRename",
      {
        barberId: "barber-1",
        oldName: "Old Timur",
        newName: "Timur",
      },
    ],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes delete barber and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
        async create({ data }) {
          return data;
        },
        async findUnique() {
          return null;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete() {
          return {};
        },
      },
      barbers: {
        async create({ data }) {
          return data;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
        async delete({ where }) {
          calls.push(["delete", where]);
          return {};
        },
        async findUnique() {
          return null;
        },
      },
    },
    getBarbers: async ({ includeInactive }) => {
      calls.push(["getBarbers", includeInactive]);
      return [];
    },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("DELETE", "/api/barbers/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "barber-1" },
    },
    res,
  );

  assert.equal(res.statusCode, 204);
  assert.deepEqual(calls, [
    ["delete", { id: "barber-1" }],
    ["getBarbers", true],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes return generic table records with ordering", async () => {
  const calls = [];
  const records = [{ id: "position-1", name: "Admin" }];
  const { app } = createHarness({
    prisma: {
      positions: {
        async findMany(options) {
          calls.push(options);
          return records;
        },
      },
    },
    tableToModelMap: { Positions: "positions" },
    TABLE_ORDERING: { Positions: [{ orderIndex: "asc" }, { name: "asc" }] },
  });
  const handler = app.getRoute("GET", "/api/:tableName");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { tableName: "Positions" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, records);
  assert.deepEqual(calls, [{ orderBy: [{ orderIndex: "asc" }, { name: "asc" }] }]);
});

test("admin crud routes create generic users record and normalize telegram id", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      users: {
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
      },
    },
    tableToModelMap: { Users: "users" },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("POST", "/api/:tableName");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { tableName: "Users" },
      body: {
        FullName: "Client",
        TelegramID: "12345",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.deepEqual(res.body, {
    id: "uuid-1",
    FullName: "Client",
    TelegramID: 12345,
  });
  assert.deepEqual(calls, [
    ["create", { id: "uuid-1", FullName: "Client", TelegramID: 12345 }],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes update generic users record and normalize telegram id", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      users: {
        async update({ where, data }) {
          calls.push(["update", where, data]);
          return { id: where.id, ...data };
        },
      },
    },
    tableToModelMap: { Users: "users" },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("PUT", "/api/:tableName/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { tableName: "Users", id: "user-1" },
      body: {
        FullName: "Client Updated",
        TelegramID: "",
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "user-1",
    FullName: "Client Updated",
    TelegramID: null,
  });
  assert.deepEqual(calls, [
    ["update", { id: "user-1" }, { FullName: "Client Updated", TelegramID: null }],
    ["requestRealtimePush", true],
  ]);
});

test("admin crud routes delete generic table record and request realtime push", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      positions: {
        async delete({ where }) {
          calls.push(["delete", where]);
          return {};
        },
      },
    },
    tableToModelMap: { Positions: "positions" },
    requestRealtimePush: (force) => {
      calls.push(["requestRealtimePush", force]);
    },
  });
  const handler = app.getRoute("DELETE", "/api/:tableName/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { tableName: "Positions", id: "position-1" },
    },
    res,
  );

  assert.equal(res.statusCode, 204);
  assert.deepEqual(calls, [
    ["delete", { id: "position-1" }],
    ["requestRealtimePush", true],
  ]);
});
