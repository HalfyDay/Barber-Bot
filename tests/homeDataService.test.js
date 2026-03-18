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
  let written = null;
  const service = createHomeDataService(
    baseDeps({
      fs: {
        async readJson() {
          return ["user-1", "user-2"];
        },
        async ensureDir() {},
        async writeJson(_target, payload) {
          written = payload;
        },
        existsSync() {
          return false;
        },
      },
    }),
  );

  const blocked = await service.readBlockedUsers();
  await service.writeBlockedUsers(new Set(["user-3"]));

  assert.deepEqual(Array.from(blocked), ["user-1", "user-2"]);
  assert.deepEqual(written, ["user-3"]);
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

test("home data service lists users with haircut reminder state", async () => {
  const service = createHomeDataService(
    baseDeps({
      prisma: {
        users: {
          async findMany() {
            return [
              {
                id: "user-1",
                TelegramID: 777,
                LastHaircutReminderSent: "2030-01-01",
              },
            ];
          },
        },
      },
    }),
  );

  const rows = await service.listUsersWithHaircutReminderState();

  assert.deepEqual(rows, [
    {
      id: "user-1",
      TelegramID: "777",
      LastHaircutReminderSent: "2030-01-01",
    },
  ]);
});

test("home data service marks haircut reminder as sent by telegram id", async () => {
  const updates = [];
  const service = createHomeDataService(
    baseDeps({
      prisma: {
        users: {
          async findMany() {
            return [
              { id: "user-1", TelegramID: 777 },
              { id: "user-2", TelegramID: 888 },
            ];
          },
          async updateMany(payload) {
            updates.push(payload);
            return { count: 1 };
          },
        },
      },
    }),
  );

  await service.markUserHaircutReminderSent("777", "2030-01-01");

  assert.equal(updates.length, 1);
  assert.deepEqual(updates[0], {
    where: { id: { in: ["user-1"] } },
    data: { LastHaircutReminderSent: "2030-01-01" },
  });
});
