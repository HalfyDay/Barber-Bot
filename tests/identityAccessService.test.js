const test = require("node:test");
const assert = require("node:assert/strict");

const { createIdentityAccessService } = require("../services/identityAccessService");
const { createResponseMock } = require("./routeTestUtils");

const createService = (overrides = {}) =>
  createIdentityAccessService({
    normalizeText: (value) => (value ?? "").toString().trim(),
    canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
    roleOwner: "owner",
    roleCreator: "creator",
    roleStaff: "staff",
    resolveBarberIdFromLookup: (lookup, key) => lookup.get(key),
    getBarberAliasLookup: () => new Map([["tim", "barber-1"]]),
    ...overrides,
  });

test("identity access service resolves owner access for creator requests", () => {
  const service = createService();
  const req = { user: { username: "creator", role: "creator" } };

  assert.equal(service.isOwnerRequest(req), true);
  assert.equal(service.hasOwnerAccess(service.resolveRequestIdentity(req)), true);
});

test("identity access service matches staff barber by direct name or alias", () => {
  const service = createService();
  const identity = { role: "staff", barberId: "barber-1", barberName: "Timur" };

  assert.equal(service.matchesIdentityBarber("Timur", identity), true);
  assert.equal(service.matchesIdentityBarber("tim", identity), true);
  assert.equal(service.matchesIdentityBarber("Vladimir", identity), false);
});

test("identity access service filters rows for staff identity", () => {
  const service = createService();
  const identity = { role: "staff", barberId: "barber-1", barberName: "Timur" };

  assert.deepEqual(
    service.filterAppointmentsForIdentity(
      [{ Barber: "Timur" }, { Barber: "Vladimir" }],
      identity,
    ),
    [{ Barber: "Timur" }],
  );
  assert.deepEqual(
    service.filterBarbersForIdentity(
      [{ id: "barber-1", name: "Timur" }, { id: "barber-2", name: "Vladimir" }],
      identity,
    ),
    [{ id: "barber-1", name: "Timur" }],
  );
});

test("identity access service keeps only staff price for services", () => {
  const service = createService();
  const identity = { role: "staff", barberId: "barber-1", barberName: "Timur" };

  const filtered = service.filterServicesForIdentity(
    [{ id: "svc-1", prices: { "barber-1": 1200, "barber-2": 1500 } }],
    identity,
  );

  assert.deepEqual(filtered, [{ id: "svc-1", prices: { "barber-1": 1200 } }]);
});

test("identity access service blocks non-owner request in middleware", () => {
  const service = createService();
  const req = { user: { username: "staff", role: "staff" } };
  const res = createResponseMock();
  let nextCalled = false;

  service.requireOwner(req, res, () => {
    nextCalled = true;
  });

  assert.equal(nextCalled, false);
  assert.equal(res.statusCode, 403);
  assert.equal(res.body.error, "Недостаточно прав для выполнения действия.");
});
