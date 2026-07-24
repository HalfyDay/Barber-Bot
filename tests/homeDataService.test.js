const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

const { createHomeDataService } = require("../services/homeDataService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => (value ?? "").toString().replace(/[^\d+]/g, "");
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();

const baseDeps = (overrides = {}) => ({
  prisma: {},
  fs: {
    existsSync() {
      return false;
    },
  },
  path,
  BLOCKLIST_FILE: "D:\\blocklist.json",
  HOME_AUTH_COLUMNS: [],
  HOME_USER_SELECT: { id: true, Phone: true },
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  randomUUID: () => "uuid-1",
  randomBytes: () => Buffer.from([0, 0, 0, 1]),
  HOME_TELEGRAM_AUTH_TTL_MS: 60000,
  TELEGRAM_AUTH_REQUESTS_TABLE: "TelegramAuthRequests",
  TELEGRAM_AUTH_FLOW_LOGIN: "login",
  TELEGRAM_AUTH_STATUS_PENDING: "pending",
  TELEGRAM_AUTH_STATUS_COMPLETED: "completed",
  TELEGRAM_AUTH_STATUS_FAILED: "failed",
  TELEGRAM_AUTH_STATUS_EXPIRED: "expired",
  ...overrides,
});

test("home data service reads and writes blocked users list", async () => {
  let deleted = false;
  let createdMany = null;
  const service = createHomeDataService(
    baseDeps({
      prisma: {
        blockedUsers: {
          findMany: async () => [
            { userId: "user-1" },
            { userId: "user-2" },
          ],
          deleteMany: async () => {
            deleted = true;
          },
          createMany: async ({ data }) => {
            createdMany = data;
          },
        },
      },
    }),
  );

  const blocked = await service.readBlockedUsers();
  await service.writeBlockedUsers(new Set(["user-3"]));

  assert.deepEqual(Array.from(blocked), ["user-1", "user-2"]);
  assert.equal(deleted, true);
  assert.equal(createdMany.length, 1);
  assert.equal(createdMany[0].userId, "user-3");
});

test("home data service readBlockedUsers returns empty set on error", async () => {
  const service = createHomeDataService(
    baseDeps({
      prisma: {
        blockedUsers: {
          findMany: async () => {
            throw new Error("Database connection failed");
          },
        },
      },
    }),
  );

  const blocked = await service.readBlockedUsers();

  assert.ok(blocked instanceof Set);
  assert.equal(blocked.size, 0);
});

test("home data service finds home user by phone preferring active account with password", async () => {
  const service = createHomeDataService(
    baseDeps({
      prisma: {
        users: {
          async findMany() {
            return [
              {
                id: "user-1",
                Phone: "+70000000001",
                homeIsActive: false,
                homePasswordHash: "",
                homePasswordSalt: "",
              },
              {
                id: "user-2",
                Phone: "+70000000001",
                homeIsActive: true,
                homePasswordHash: "hash",
                homePasswordSalt: "salt",
              },
            ];
          },
        },
      },
      HOME_USER_SELECT: {
        id: true,
        Phone: true,
        homeIsActive: true,
        homePasswordHash: true,
        homePasswordSalt: true,
      },
    }),
  );

  const user = await service.findHomeUserByPhone("+70000000001");

  assert.equal(user.id, "user-2");
});

