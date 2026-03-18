const test = require("node:test");
const assert = require("node:assert/strict");

const { createLegacyHomeUsersMigrationService } = require("../services/legacyHomeUsersMigrationService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => (value ?? "").toString().replace(/[^\d+]/g, "");
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();

test("legacy home users migration service migrates legacy users into prisma users", async () => {
  const createdRows = [];
  class FakeDb {
    pragma() {}
    prepare(sql) {
      if (sql.includes("sqlite_master")) {
        return { get: () => ({ name: "home_users" }) };
      }
      return {
        all: () => [
          {
            id: "legacy-1",
            phone: "+70000000001",
            display_name: "Ivan",
            password_hash: "hash",
            password_salt: "salt",
            is_active: 1,
            created_at: "2026-03-01T00:00:00.000Z",
            updated_at: "2026-03-02T00:00:00.000Z",
            last_login_at: "2026-03-03T00:00:00.000Z",
          },
        ],
      };
    }
    close() {}
  }

  const service = createLegacyHomeUsersMigrationService({
    SqliteDatabase: FakeDb,
    LEGACY_HOME_USERS_DB_PATH: "D:\\legacy.sqlite",
    prisma: {
      users: {
        async findMany() {
          return [];
        },
        async create({ data, select }) {
          const row = { ...data };
          createdRows.push(row);
          return Object.fromEntries(Object.keys(select).map((key) => [key, row[key] ?? null]));
        },
      },
    },
    fs: {
      existsSync(target) {
        return target === "D:\\legacy.sqlite";
      },
    },
    normalizeText,
    normalizePhone,
    canonicalizeKey,
    HOME_USER_SELECT: {
      id: true,
      Name: true,
      Phone: true,
      homePasswordHash: true,
      homePasswordSalt: true,
      homeIsActive: true,
      homeCreatedAt: true,
      homeUpdatedAt: true,
      homeLastLoginAt: true,
    },
  });

  const result = await service.migrateLegacyHomeUsersToUsers();

  assert.deepEqual(result, { created: 1, updated: 0, total: 1 });
  assert.equal(createdRows[0].id, "legacy-1");
  assert.equal(createdRows[0].Name, "Ivan");
});
