const test = require("node:test");
const assert = require("node:assert/strict");

const { createLegacyCrudGuard } = require("../services/legacyCrudGuard");

const normalizeText = (value) => (value ?? "").toString().trim();

test("legacy CRUD guard blocks appointments table and points to dedicated route", () => {
  const guard = createLegacyCrudGuard({ normalizeText });

  const error = guard.ensureTableAllowed("Appointments");

  assert.equal(error?.code, "LEGACY_ROUTE_DISABLED");
  assert.equal(error?.status, 410);
  assert.equal(error?.tableName, "Appointments");
  assert.equal(error?.targetRoute, "/api/appointments");
  assert.match(error?.message || "", /\/api\/appointments/);
});

test("legacy CRUD guard blocks schedules table and points to dedicated route", () => {
  const guard = createLegacyCrudGuard({ normalizeText });

  const error = guard.ensureTableAllowed("Schedules");

  assert.equal(error?.code, "LEGACY_ROUTE_DISABLED");
  assert.equal(error?.status, 410);
  assert.equal(error?.tableName, "Schedules");
  assert.equal(error?.targetRoute, "/api/schedules");
  assert.match(error?.message || "", /\/api\/schedules/);
});

test("legacy CRUD guard blocks barbers table and points to dedicated route", () => {
  const guard = createLegacyCrudGuard({ normalizeText });

  const error = guard.ensureTableAllowed("Barbers");

  assert.equal(error?.code, "LEGACY_ROUTE_DISABLED");
  assert.equal(error?.status, 410);
  assert.equal(error?.tableName, "Barbers");
  assert.equal(error?.targetRoute, "/api/barbers");
  assert.match(error?.message || "", /\/api\/barbers/);
});

test("legacy CRUD guard blocks services table and points to dedicated route", () => {
  const guard = createLegacyCrudGuard({ normalizeText });

  const error = guard.ensureTableAllowed("Services");

  assert.equal(error?.code, "LEGACY_ROUTE_DISABLED");
  assert.equal(error?.status, 410);
  assert.equal(error?.tableName, "Services");
  assert.equal(error?.targetRoute, "/api/services/full");
  assert.match(error?.message || "", /\/api\/services\/full/);
});

test("legacy CRUD guard allows tables without dedicated route", () => {
  const guard = createLegacyCrudGuard({ normalizeText });

  assert.equal(guard.ensureTableAllowed("Users"), null);
  assert.equal(guard.getRedirectRoute("Users"), null);
});
