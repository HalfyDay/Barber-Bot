const test = require("node:test");
const assert = require("node:assert/strict");
const Database = require("better-sqlite3");

const {
  IMPORT_TABLES,
  buildExportBundle,
} = require("../scripts/lib/postgresImportBundle");

test("postgres import bundle exports ordered tables and cleanup suggestions", () => {
  const db = new Database(":memory:");
  db.exec(`
    CREATE TABLE "Users" (
      "id" TEXT PRIMARY KEY,
      "Name" TEXT,
      "Phone" TEXT,
      "TelegramID" TEXT,
      "HomeIsActive" INTEGER
    );
    CREATE TABLE "Appointments" (
      "id" TEXT PRIMARY KEY,
      "CustomerName" TEXT,
      "Phone" TEXT,
      "Barber" TEXT,
      "Date" TEXT,
      "Time" TEXT,
      "Status" TEXT,
      "UserID" TEXT
    );
    CREATE TABLE "Schedules" (
      "id" TEXT PRIMARY KEY,
      "Barber" TEXT,
      "Date" TEXT,
      "DayOfWeek" TEXT,
      "Week" TEXT,
      "Time" TEXT
    );
    CREATE TABLE "Services" ("id" TEXT PRIMARY KEY, "name" TEXT);
    CREATE TABLE "Barbers" ("id" TEXT PRIMARY KEY, "name" TEXT);
    CREATE TABLE "ServicePrices" ("id" TEXT PRIMARY KEY, "serviceId" TEXT, "barberId" TEXT);
    CREATE TABLE "Positions" ("id" TEXT PRIMARY KEY, "name" TEXT);
    CREATE TABLE "BotSettings" ("id" TEXT PRIMARY KEY, "bookingLimit" INTEGER);
    CREATE TABLE "BotMessages" ("id" TEXT PRIMARY KEY, "code" TEXT, "text" TEXT);
    CREATE TABLE "TelegramAuthRequests" ("id" TEXT PRIMARY KEY, "Code" TEXT);
    CREATE TABLE "Cost" ("id" TEXT PRIMARY KEY, "РЈСЃР»СѓРіРё" TEXT);
  `);

  db.prepare('INSERT INTO "Users" ("id", "Name", "Phone", "TelegramID", "HomeIsActive") VALUES (?, ?, ?, ?, ?)').run(
    "user-2",
    "Client 2",
    "79990004455",
    "22",
    1,
  );
  db.prepare('INSERT INTO "Users" ("id", "Name", "Phone", "TelegramID", "HomeIsActive") VALUES (?, ?, ?, ?, ?)').run(
    "user-1",
    "Client 1",
    "+7 (999) 000-11-22",
    "11",
    1,
  );
  db.prepare(
    'INSERT INTO "Appointments" ("id", "CustomerName", "Phone", "Barber", "Date", "Time", "Status", "UserID") VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
  ).run("appt-2", "No User", "79990001122", "Timur", "2026-03-20", "12:00", "active", null);
  db.prepare(
    'INSERT INTO "Appointments" ("id", "CustomerName", "Phone", "Barber", "Date", "Time", "Status", "UserID") VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
  ).run("appt-1", "Linked", null, "Timur", "2026-03-20", "10:00", "done", "user-1");
  db.prepare(
    'INSERT INTO "Schedules" ("id", "Barber", "Date", "DayOfWeek", "Week", "Time") VALUES (?, ?, ?, ?, ?, ?)',
  ).run("schedule-1", null, null, null, "17:00-20:00", null);
  db.prepare('INSERT INTO "Services" ("id", "name") VALUES (?, ?)').run("service-1", "Fade");
  db.prepare('INSERT INTO "Barbers" ("id", "name") VALUES (?, ?)').run("barber-1", "Timur");
  db.prepare('INSERT INTO "ServicePrices" ("id", "serviceId", "barberId") VALUES (?, ?, ?)').run(
    "price-1",
    "service-1",
    "barber-1",
  );
  db.prepare('INSERT INTO "Positions" ("id", "name") VALUES (?, ?)').run("position-1", "Master");
  db.prepare('INSERT INTO "BotSettings" ("id", "bookingLimit") VALUES (?, ?)').run("settings-1", 2);
  db.prepare('INSERT INTO "BotMessages" ("id", "code", "text") VALUES (?, ?, ?)').run("msg-1", "hello", "hi");
  db.prepare('INSERT INTO "TelegramAuthRequests" ("id", "Code") VALUES (?, ?)').run("auth-1", "1234");
  db.prepare('INSERT INTO "Cost" ("id", "РЈСЃР»СѓРіРё") VALUES (?, ?)').run("cost-1", "Legacy");

  const bundle = buildExportBundle(db, {
    sqlitePath: "D:/snapshot/server.db",
    databaseUrl: "file:D:/snapshot/server.db",
    label: "server",
  });

  assert.deepEqual(bundle.importOrder, IMPORT_TABLES);
  assert.equal(bundle.tables.Users[0].id, "user-1");
  assert.equal(bundle.tables.Users[1].id, "user-2");
  assert.equal(bundle.tables.Appointments[0].id, "appt-1");
  assert.equal(bundle.tables.Appointments[1].id, "appt-2");
  assert.equal(bundle.cleanup.summary.appointmentsMissingUserReference, 1);
  assert.equal(bundle.cleanup.summary.appointmentsMissingUserReferenceWithSuggestion, 1);
  assert.equal(bundle.cleanup.appointmentsMissingUserReference[0].suggestedUserId, "user-1");
  assert.equal(bundle.cleanup.summary.incompleteSchedules, 1);
  assert.equal(bundle.legacyTables.Cost.length, 1);

  db.close();
});
