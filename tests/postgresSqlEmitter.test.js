const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildBundleImportSql,
  buildInsertStatement,
  normalizeTypedValue,
  quoteIdentifier,
  quoteLiteral,
} = require("../scripts/lib/postgresSqlEmitter");
const { parseArgs } = require("../scripts/postgresBundleToSql");

test("postgres sql emitter quotes identifiers and literals safely", () => {
  assert.equal(quoteIdentifier('weird"name'), '"weird""name"');
  assert.equal(quoteLiteral("O'Hara"), "'O''Hara'");
  assert.equal(quoteLiteral(true), "TRUE");
  assert.equal(quoteLiteral(false), "FALSE");
  assert.equal(quoteLiteral(null), "NULL");
  assert.equal(quoteLiteral(12.5), "12.5");
});

test("postgres sql emitter builds insert statement from row payload", () => {
  const statement = buildInsertStatement("Users", {
    id: "user-1",
    Name: "O'Hara",
    HomeIsActive: true,
    TelegramID: 123,
    Phone: null,
  });

  assert.equal(
    statement,
    `INSERT INTO "Users" ("id", "Name", "HomeIsActive", "TelegramID", "Phone") VALUES ('user-1', 'O''Hara', TRUE, 123, NULL);`,
  );
});

test("postgres sql emitter normalizes postgres boolean and datetime literals", () => {
  assert.equal(normalizeTypedValue("Users", "HomeIsActive", 1), true);
  assert.equal(normalizeTypedValue("Users", "HomeIsActive", 0), false);
  assert.equal(
    normalizeTypedValue("Barbers", "createdAt", 1762533843588),
    "2025-11-07T16:44:03.588Z",
  );

  const statement = buildInsertStatement("Barbers", {
    id: "barber-1",
    isActive: 1,
    createdAt: 1762533843588,
  });

  assert.equal(
    statement,
    `INSERT INTO "Barbers" ("id", "isActive", "createdAt") VALUES ('barber-1', TRUE, '2025-11-07T16:44:03.588Z');`,
  );
});

test("postgres sql emitter renders import script from bundle", () => {
  const sql = buildBundleImportSql({
    generatedAt: "2026-03-17T10:00:00.000Z",
    source: { sqlitePath: "D:/snapshot/server.db" },
    tables: {
      Positions: [],
      Barbers: [{ id: "barber-1", name: "Timur" }],
      Services: [],
      ServicePrices: [],
      Users: [{ id: "user-1", Name: "Client" }],
      Schedules: [],
      Appointments: [],
      BotSettings: [],
      BotMessages: [],
      TelegramAuthRequests: [{ id: "auth-1", Code: "1234" }],
    },
    legacyTables: {
      Cost: [{ id: "legacy-1" }],
    },
  });

  assert.match(sql, /BEGIN;/);
  assert.match(sql, /INSERT INTO "Barbers" \("id", "name"\) VALUES \('barber-1', 'Timur'\);/);
  assert.match(sql, /INSERT INTO "TelegramAuthRequests" \("id", "Code"\) VALUES \('auth-1', '1234'\);/);
  assert.match(sql, /-- Legacy tables retained in bundle but excluded from primary PostgreSQL import:/);
  assert.match(sql, /COMMIT;/);
});

test("postgres bundle to sql parses cli args", () => {
  const args = parseArgs([
    "--bundle",
    "docs/reports/server-postgres-export-bundle.json",
    "--write",
    "docs/reports/server-postgres-import.sql",
  ]);

  assert.deepEqual(args, {
    bundlePath: "docs/reports/server-postgres-export-bundle.json",
    writePath: "docs/reports/server-postgres-import.sql",
  });
});
