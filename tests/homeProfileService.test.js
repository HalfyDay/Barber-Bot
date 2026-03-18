const test = require("node:test");
const assert = require("node:assert/strict");
const { randomBytes, scryptSync, timingSafeEqual } = require("node:crypto");

const { createHomeProfileService } = require("../services/homeProfileService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => (value ?? "").toString().replace(/[^\d+]/g, "");

const createHarness = (overrides = {}) =>
  createHomeProfileService({
    normalizeText,
    normalizePhone,
    randomBytes,
    scryptSync,
    timingSafeEqual,
    homeMinPasswordLength: 6,
    homePasswordHashLength: 64,
    homeProfileChangeCooldownMs: 30 * 24 * 60 * 60 * 1000,
    findHomeUserById: async () => null,
    ...overrides,
  });

test("home profile service hashes and verifies password", () => {
  const service = createHarness();

  const { hashHex, saltHex } = service.hashHomePassword("secret123");

  assert.ok(hashHex);
  assert.ok(saltHex);
  assert.equal(service.verifyHomePassword("secret123", hashHex, saltHex), true);
  assert.equal(service.verifyHomePassword("wrong", hashHex, saltHex), false);
});

test("home profile service builds public profile with telegram state and limits", () => {
  const service = createHarness();
  const lastChangedAt = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString();

  const profile = service.toPublicHomeProfile({
    id: "user-1",
    Name: "Ivan",
    Phone: "+7 (999) 000-00-00",
    TelegramID: "777",
    LastNameChanged: lastChangedAt,
    homePhoneChangedAt: null,
    homeTelegramChangedAt: "2030-01-01T00:00:00.000Z",
    homeCreatedAt: "2030-01-01T00:00:00.000Z",
    homeLastLoginAt: "2030-01-02T00:00:00.000Z",
  });

  assert.equal(profile.id, "user-1");
  assert.equal(profile.phone, "+79990000000");
  assert.equal(profile.telegramLinked, true);
  assert.equal(profile.limits.name.isLocked, true);
  assert.equal(profile.limits.phone.isLocked, false);
});

test("home profile service resolves booking user from stored profile", async () => {
  const service = createHarness({
    findHomeUserById: async () => ({
      id: "user-77",
      Name: "Ivan",
      Phone: "+79990000000",
    }),
  });

  const user = await service.resolveHomeBookingUser({
    homeUser: {
      userId: "user-77",
      phone: "+79990000001",
      displayName: "Fallback",
    },
  });

  assert.deepEqual(user, {
    id: "user-77",
    phone: "+79990000000",
    displayName: "Ivan",
  });
});

