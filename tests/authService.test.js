const test = require("node:test");
const assert = require("node:assert/strict");
const jwt = require("jsonwebtoken");

const { createAuthService } = require("../services/authService");
const { createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => (value ?? "").toString().replace(/[^\d+]/g, "");
const normalizeLogin = (value) => normalizeText(value);
const resolveUserIdentity = (payload = {}) => ({
  username: payload.username || payload.login || null,
  role: payload.role || "owner",
  barberId: payload.barberId || null,
  barberName: payload.barberName || payload.name || null,
});
const buildHomeIdentity = (payload = {}) => ({
  userId: normalizeText(payload.userId || payload.id),
  phone: normalizePhone(payload.phone || ""),
  displayName: normalizeText(payload.displayName || payload.name || ""),
  scope: "home_client",
});

const createHarness = (overrides = {}) =>
  createAuthService({
    jwt,
    jwtSecret: "secret",
    tokenExpiresIn: "30d",
    tokenRefreshThresholdMs: 1000,
    homeJwtSecret: "home-secret",
    homeTokenExpiresIn: "30d",
    homeTokenRefreshThresholdMs: 1000,
    botInternalApiToken: "bot-token",
    resolveUserIdentity,
    normalizeText,
    normalizePhone,
    normalizeLogin,
    buildHomeIdentity,
    creatorAccount: {
      username: "creator",
      phone: "+70000000000",
      password: "pass",
      name: "Creator",
    },
    creatorRole: "creator",
    prisma: {
      barbers: {
        async findMany() {
          return [];
        },
      },
      ...(overrides.prisma || {}),
    },
    isDatabaseCorruptionError: () => false,
    buildDatabaseCorruptionMessage: () => "db-error",
    ...overrides,
  });

test("auth service authenticates access token and refreshes near-expiry session", async () => {
  const service = createHarness();
  const token = jwt.sign(
    { username: "owner", role: "owner", barberName: "Owner" },
    "secret",
    { expiresIn: 1 },
  );
  await new Promise((resolve) => setTimeout(resolve, 1100));
  const req = {
    headers: { authorization: `Bearer ${token}` },
    query: {},
  };
  const res = createResponseMock();
  let nextCalled = false;

  service.authenticateToken(req, res, () => {
    nextCalled = true;
  });

  assert.equal(nextCalled, true);
  assert.equal(req.identity.username, "owner");
  assert.ok(res.headers["x-session-token"]);
});

test("auth service authenticates home token and refreshes home session header", async () => {
  const service = createHarness();
  const token = jwt.sign(
    { userId: "user-1", phone: "+70000000001", displayName: "Ivan", scope: "home_client" },
    "home-secret",
    { expiresIn: 1 },
  );
  await new Promise((resolve) => setTimeout(resolve, 1100));
  const req = {
    headers: { authorization: `Bearer ${token}` },
    query: {},
  };
  const res = createResponseMock();
  let nextCalled = false;

  service.authenticateHomeToken(req, res, () => {
    nextCalled = true;
  });

  assert.equal(nextCalled, true);
  assert.equal(req.homeUser.userId, "user-1");
  assert.ok(res.headers["x-home-session-token"]);
});

test("auth service allows creator login without barber lookup", async () => {
  const service = createHarness();
  const req = {
    body: {
      login: "creator",
      password: "pass",
    },
  };
  const res = createResponseMock();

  await service.handleLogin(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(res.body.role, "creator");
  assert.ok(res.body.token);
});
