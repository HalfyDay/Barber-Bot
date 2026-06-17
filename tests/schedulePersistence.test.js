/**
 * schedulePersistence.test.js
 *
 * Tests for the schedule save/persist bug:
 *   "when you update the schedule and go to the client website, the schedule resets"
 *   "schedules don't save for certain workers and reset on page refresh"
 *
 * Root cause: buildScheduleBoard was mutating the DB on every GET /api/schedules,
 * rolling expired records to new dates. This caused saved schedules to disappear
 * from the dates the admin set them for.
 *
 * Fix: buildScheduleBoard now only reads the DB (no rolling). Only truly stale
 * records (older than 2x window) are deleted. The PUT endpoint is unchanged.
 */
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
    matchesIdentityBarber: (barberName, identity) =>
      normalizeText(barberName) === normalizeText(identity?.barberName),
    filterBarbersForIdentity: (rows) => rows,
    filterAppointmentsForIdentity: (rows) => rows,
    mapAppointment: (record) => ({ ...record, mapped: true }),
    getBarbers: async () => [],
    propagateBarberRename: async () => {},
    coercePayload: (_tableName, payload) => payload,
    normalizeAppointmentStatus: (status) =>
      normalizeText(status).toLowerCase() || "active",
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

/** Returns an ISO date key N days from today (negative = in the past). */
const dateOffsetKey = (offsetDays = 0) => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offsetDays);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// в”Ђв”Ђв”Ђ Tests: GET /api/schedules does NOT roll records в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ

test("schedule GET does not mutate records set for today", async () => {
  const todayKey = dateOffsetKey(0);
  const dbCalls = [];

  const existingRecord = {
    id: "sched-uuid-1",
    Barber: "РРІР°РЅ",
    Date: todayKey,
    Week: "10:00-18:00",
    DayOfWeek: "РџРѕРЅРµРґРµР»СЊРЅРёРє",
  };

  const { app } = createHarness({
    getBarbers: async () => [{ id: "b1", name: "РРІР°РЅ" }],
    prisma: {
      schedules: {
        async findMany(args) {
          dbCalls.push(["findMany", args]);
          // Return today's record when queried with gte todayKey filter
          if (args?.where?.Date?.gte === todayKey) {
            return [existingRecord];
          }
          return [];
        },
        async findFirst() {
          return null;
        },
        async create({ data }) {
          dbCalls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          dbCalls.push(["update", { where, data }]);
          return { id: where.id, ...data };
        },
        async delete(args) {
          dbCalls.push(["delete", args]);
          return {};
        },
        async deleteMany(args) {
          dbCalls.push(["deleteMany", args]);
          return {};
        },
      },
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();
  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200, "GET /api/schedules should return 200");

  // The schedule for today should be returned in the board
  const board = res.body;
  assert.ok(Array.isArray(board), "Response should be an array");
  const ivanToday = board.find((slot) => slot.Barber === "РРІР°РЅ" && slot.Date === todayKey);
  assert.ok(ivanToday, "Today's slot for РРІР°РЅ should be in the board");
  assert.equal(ivanToday.Week, "10:00-18:00", "Today's Week should be preserved");

  // CRITICAL: The GET must NOT have called update or delete on the existing record
  const updateCalls = dbCalls.filter(([op]) => op === "update");
  const deleteCalls = dbCalls.filter(([op]) => op === "delete");
  assert.equal(
    updateCalls.length,
    0,
    "GET /api/schedules must not update any schedule records"
  );
  assert.equal(
    deleteCalls.length,
    0,
    "GET /api/schedules must not individually delete any schedule records"
  );
});

test("schedule GET does not roll recently-saved records to future dates", async () => {
  // Scenario: admin saves schedule for yesterday (it's "expired" by old logic)
  // After the fix, GET should NOT roll it to tomorrow+14 days
  const yesterdayKey = dateOffsetKey(-1);
  const dbCalls = [];

  const existingRecord = {
    id: "sched-uuid-2",
    Barber: "РўРёРјСѓСЂ",
    Date: yesterdayKey,
    Week: "09:00-17:00",
    DayOfWeek: "Р’С‚РѕСЂРЅРёРє",
  };

  const { app } = createHarness({
    getBarbers: async () => [{ id: "b2", name: "РўРёРјСѓСЂ" }],
    prisma: {
      schedules: {
        async findMany(args) {
          dbCalls.push(["findMany", args?.where?.Date]);
          // Old rolling logic would query without filter; new code queries with gte
          if (args?.where?.Date?.gte) {
            // Yesterday's record is before today, so won't be returned
            return [];
          }
          return [existingRecord];
        },
        async findFirst() {
          return null;
        },
        async create({ data }) {
          dbCalls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          dbCalls.push(["update", { where, data }]);
          return { id: where.id, ...data };
        },
        async delete(args) {
          dbCalls.push(["delete", args]);
          return {};
        },
        async deleteMany(args) {
          dbCalls.push(["deleteMany", args]);
          return {};
        },
      },
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();
  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);

  // No update or individual delete should have happened (rolling was removed)
  const updateCalls = dbCalls.filter(([op]) => op === "update");
  const deleteCalls = dbCalls.filter(([op]) => op === "delete");
  assert.equal(
    updateCalls.length,
    0,
    "GET must not roll expired records to new dates"
  );
  assert.equal(
    deleteCalls.length,
    0,
    "GET must not individually delete records (only deleteMany for stale)"
  );
});

test("schedule GET only calls deleteMany for stale records (not for recent ones)", async () => {
  const todayKey = dateOffsetKey(0);
  const deleteManyArgs = [];

  const { app } = createHarness({
    getBarbers: async () => [],
    prisma: {
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
        async deleteMany(args) {
          deleteManyArgs.push(args);
          return {};
        },
      },
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();
  await handler({ identity: { username: "owner" }, query: { days: "14" } }, res);

  assert.equal(res.statusCode, 200);

  // deleteMany should be called exactly once (for stale cleanup)
  assert.equal(deleteManyArgs.length, 1, "deleteMany should be called once for stale cleanup");

  // The stale cutoff should be 2 * windowDays (28 days) in the past
  const staleWhere = deleteManyArgs[0]?.where?.Date?.lt;
  assert.ok(staleWhere, "deleteMany should have a Date.lt condition");

  // staleKey should be at least 27 days ago (before today - 28 days)
  const staleDate = new Date(staleWhere);
  const today = new Date(todayKey);
  const diffDays = Math.round((today - staleDate) / (1000 * 60 * 60 * 24));
  assert.ok(
    diffDays >= 27 && diffDays <= 29,
    `Stale cutoff should be ~28 days ago, got ${diffDays} days ago`
  );
});

// в”Ђв”Ђв”Ђ Tests: PUT /api/schedules saves correctly в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ

test("schedule PUT creates new record when none exists", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      schedules: {
        async findMany() {
          return [];
        },
        async findFirst(args) {
          calls.push(["findFirst", args]);
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
  const todayKey = dateOffsetKey(0);

  await handler(
    {
      identity: { username: "owner" },
      params: { id: `РРІР°РЅ-${todayKey}` },
      body: {
        Barber: "РРІР°РЅ",
        Date: todayKey,
        DayOfWeek: "РџРѕРЅРµРґРµР»СЊРЅРёРє",
        Week: "10:00-18:00",
      },
    },
    res
  );

  assert.equal(res.statusCode, 200, "PUT should return 200");
  assert.equal(res.body.Week, "10:00-18:00", "Response should contain the saved Week");
  assert.equal(res.body.Barber, "РРІР°РЅ", "Response should contain the Barber");
  assert.equal(res.body.Date, todayKey, "Response should contain the Date");

  const createCall = calls.find(([op]) => op === "create");
  assert.ok(createCall, "Should have called create");
  assert.equal(createCall[1].Week, "10:00-18:00");
  assert.equal(createCall[1].Barber, "РРІР°РЅ");
  assert.equal(createCall[1].Date, todayKey);
});

test("schedule PUT updates existing record when one already exists for barber+date", async () => {
  const calls = [];
  const todayKey = dateOffsetKey(0);

  const { app } = createHarness({
    prisma: {
      schedules: {
        async findMany() {
          return [];
        },
        async findFirst(args) {
          calls.push(["findFirst", args]);
          // Simulate existing record for this barber+date
          return { id: "existing-uuid", Barber: "РРІР°РЅ", Date: todayKey, Week: "09:00-17:00" };
        },
        async create({ data }) {
          calls.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          calls.push(["update", { where, data }]);
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
      params: { id: `РРІР°РЅ-${todayKey}` },
      body: {
        Barber: "РРІР°РЅ",
        Date: todayKey,
        DayOfWeek: "РџРѕРЅРµРґРµР»СЊРЅРёРє",
        Week: "10:00-18:00", // changed from 09:00-17:00
      },
    },
    res
  );

  assert.equal(res.statusCode, 200, "PUT should return 200");

  const updateCall = calls.find(([op]) => op === "update");
  assert.ok(updateCall, "Should have called update (not create)");
  assert.equal(updateCall[1].where.id, "existing-uuid", "Should update by DB id");
  assert.equal(updateCall[1].data.Week, "10:00-18:00", "Should save new Week value");

  const createCall = calls.find(([op]) => op === "create");
  assert.equal(createCall, undefined, "Should NOT create a duplicate record");
});

test("schedule GET preserves saved schedule for a specific date after multiple refreshes", async () => {
  // Simulates the production bug: admin saves June 17, then refreshes the page on June 18.
  // Old code would roll June 17 to July 1. New code should preserve June 17 (which is
  // now in the past and won't appear in the board, but should NOT be rolled/moved).
  const todayKey = dateOffsetKey(0);
  const yesterdayKey = dateOffsetKey(-1);
  const mutations = [];

  const { app } = createHarness({
    getBarbers: async () => [{ id: "b1", name: "РђР»РµРєСЃРµР№" }],
    prisma: {
      schedules: {
        async findMany(args) {
          // Simulate: only return records that are gte todayKey (yesterday not included)
          if (args?.where?.Date?.gte === todayKey) {
            return []; // yesterday's record not in today's window
          }
          return [{ id: "sched-1", Barber: "РђР»РµРєСЃРµР№", Date: yesterdayKey, Week: "10:00-18:00" }];
        },
        async findFirst() {
          return null;
        },
        async create({ data }) {
          mutations.push(["create", data]);
          return data;
        },
        async update({ where, data }) {
          mutations.push(["update", { where, data }]);
          return { id: where.id, ...data };
        },
        async delete(args) {
          mutations.push(["delete", args]);
          return {};
        },
        async deleteMany(args) {
          mutations.push(["deleteMany", args]);
          return {};
        },
      },
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");

  // Simulate 3 consecutive page refreshes (the old bug would compound on each refresh)
  for (let i = 0; i < 3; i++) {
    const res = createResponseMock();
    await handler({ identity: { username: "owner" } }, res);
    assert.equal(res.statusCode, 200, `Refresh ${i + 1} should return 200`);
  }

  // After 3 refreshes, there should be NO update or individual delete mutations
  // (only deleteMany for stale cleanup is allowed)
  const badMutations = mutations.filter(([op]) => op === "update" || op === "delete");
  assert.equal(
    badMutations.length,
    0,
    `GET must not update or individually delete records across ${3} refreshes. Got: ${JSON.stringify(badMutations)}`
  );
});

test("schedule GET board shows saved schedule for a barber on correct date", async () => {
  const in3Days = dateOffsetKey(3);
  const todayKey = dateOffsetKey(0);

  const savedRecord = {
    id: "sched-future",
    Barber: "Р”РµРЅРёСЃ",
    Date: in3Days,
    Week: "11:00-20:00",
    DayOfWeek: "РЎСЂРµРґР°",
  };

  const { app } = createHarness({
    getBarbers: async () => [{ id: "b3", name: "Р”РµРЅРёСЃ" }],
    prisma: {
      schedules: {
        async findMany(args) {
          if (args?.where?.Date?.gte === todayKey) {
            return [savedRecord];
          }
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
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();
  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  const board = res.body;
  const denisIn3Days = board.find(
    (slot) => slot.Barber === "Р”РµРЅРёСЃ" && slot.Date === in3Days
  );
  assert.ok(denisIn3Days, `Slot for Р”РµРЅРёСЃ on ${in3Days} should be in the board`);
  assert.equal(denisIn3Days.Week, "11:00-20:00", "Week should match the saved record");
  assert.equal(denisIn3Days.originalId, "sched-future", "originalId should reference the DB record");
});

test("schedule GET matches schedule record if barber name has a trailing space in Barbers table", async () => {
  const todayKey = dateOffsetKey(0);
  const { app } = createHarness({
    getBarbers: async () => [{ id: "barber-vadim", name: "Вадим🐯 " }],
    prisma: {
      schedules: {
        async findMany() {
          return [
            {
              id: "sched-1",
              Barber: "Вадим🐯", // Trimmed in DB
              Date: todayKey,
              Week: "10:00-18:00",
            },
          ];
        },
        async deleteMany() {
          return {};
        },
        async findFirst() {
          return null;
        },
      },
    },
  });

  const handler = app.getRoute("GET", "/api/schedules");
  const res = createResponseMock();
  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  const board = res.body;
  const vadimSlot = board.find(
    (slot) => slot.Barber === "Вадим🐯" && slot.Date === todayKey
  );
  assert.ok(vadimSlot, "Vadim slot should be in the board (normalized)");
  assert.equal(vadimSlot.Week, "10:00-18:00", "Week should match the saved record");
});

test("barber POST and PUT normalize trailing space in name", async () => {
  const createdBarbers = [];
  const updatedBarbers = [];

  const app = createAppMock();
  const prisma = {
    barbers: {
      async create({ data }) {
        createdBarbers.push(data);
        return data;
      },
      async update({ where, data }) {
        updatedBarbers.push({ where, data });
        return { id: where.id, ...data };
      },
      async findUnique() {
        return { id: "barber-1", name: "Вадим🐯 " };
      },
    },
  };

  const { registerAdminCrudRoutes } = require("../routes/adminCrudRoutes");

  registerAdminCrudRoutes({
    app,
    authenticateToken: (req, res, next) => next(),
    prisma,
    randomUUID: () => "uuid-1",
    normalizeText: (v) => (v ?? "").toString().trim(),
    normalizePhone: (v) => v,
    canonicalizeKey: (v) => (v ?? "").toString().trim().toLowerCase(),
    isStaffIdentity: () => false,
    filterBarbersForIdentity: (b) => b,
    coercePayload: (table, body) => body,
    getBarbers: async () => [],
    propagateBarberRename: async () => {},
    requestRealtimePush: () => {},
  });

  const postHandler = app.getRoute("POST", "/api/barbers");
  const postRes = createResponseMock();
  await postHandler({ body: { name: "  Вадим🐯  ", phone: "12345" } }, postRes);
  assert.equal(postRes.statusCode, 201);
  assert.equal(createdBarbers[0].name, "Вадим🐯", "POST must trim name");

  const putHandler = app.getRoute("PUT", "/api/barbers/:id");
  const putRes = createResponseMock();
  await putHandler({ params: { id: "barber-1" }, body: { name: "  Вадим🐯  " } }, putRes);
  assert.equal(putRes.statusCode, 200);
  assert.equal(updatedBarbers[0].data.name, "Вадим🐯", "PUT must trim name");
});


