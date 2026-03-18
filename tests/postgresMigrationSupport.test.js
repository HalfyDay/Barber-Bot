const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const Database = require("better-sqlite3");

const {
  collectInventory,
  parseArgs,
  resolveSqlitePath,
} = require("../scripts/lib/postgresMigrationSupport");

test("postgres migration support parses cli args", () => {
  const args = parseArgs([
    "--write",
    "docs/reports/out.json",
    "--database-url",
    "file:./server.db",
    "--label",
    "server",
  ]);

  assert.deepEqual(args, {
    writePath: "docs/reports/out.json",
    databaseUrl: "file:./server.db",
    label: "server",
  });
});

test("postgres migration support resolves sqlite path from explicit file url", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "barber-bot-db-"));
  const sqlitePath = path.join(tempDir, "server.db");
  fs.writeFileSync(sqlitePath, "");

  const resolved = resolveSqlitePath({
    databaseUrl: "file:./server.db",
    cwd: tempDir,
  });

  assert.equal(resolved, sqlitePath);
});

test("postgres migration support requires explicit snapshot path when database url is missing", () => {
  assert.throws(
    () => resolveSqlitePath({ databaseUrl: "", snapshotPath: "" }),
    /SQLite snapshot path is required/i,
  );
});

test("postgres migration support collects inventory and detects key issues", () => {
  const db = new Database(":memory:");
  db.exec(`
    CREATE TABLE "Users" (
      "id" TEXT PRIMARY KEY,
      "Phone" TEXT,
      "TelegramID" TEXT
    );
    CREATE TABLE "Appointments" (
      "id" TEXT PRIMARY KEY,
      "Barber" TEXT,
      "Date" TEXT,
      "Time" TEXT,
      "Status" TEXT,
      "UserID" TEXT
    );
    CREATE TABLE "Schedules" (
      "id" TEXT PRIMARY KEY,
      "Barber" TEXT,
      "Date" TEXT
    );
    CREATE TABLE "Barbers" (
      "id" TEXT PRIMARY KEY,
      "name" TEXT
    );
    CREATE TABLE "Services" (
      "id" TEXT PRIMARY KEY,
      "name" TEXT
    );
    CREATE TABLE "ServicePrices" (
      "id" TEXT PRIMARY KEY,
      "serviceId" TEXT,
      "barberId" TEXT
    );
  `);

  db.prepare('INSERT INTO "Users" ("id", "Phone", "TelegramID") VALUES (?, ?, ?)').run(
    "user-1",
    "+7 (999) 000-00-11",
    "tg-1",
  );
  db.prepare('INSERT INTO "Users" ("id", "Phone", "TelegramID") VALUES (?, ?, ?)').run(
    "user-2",
    "79990000011",
    "tg-1",
  );
  db.prepare('INSERT INTO "Users" ("id", "Phone", "TelegramID") VALUES (?, ?, ?)').run(
    "user-3",
    "",
    "",
  );

  db.prepare(
    'INSERT INTO "Appointments" ("id", "Barber", "Date", "Time", "Status", "UserID") VALUES (?, ?, ?, ?, ?, ?)',
  ).run("appt-1", "Timur", "2026-03-20", "10:00", "Активная", null);
  db.prepare(
    'INSERT INTO "Appointments" ("id", "Barber", "Date", "Time", "Status", "UserID") VALUES (?, ?, ?, ?, ?, ?)',
  ).run("appt-2", "Timur", "2026-03-20", "10:00", "active", "");
  db.prepare(
    'INSERT INTO "Appointments" ("id", "Barber", "Date", "Time", "Status", "UserID") VALUES (?, ?, ?, ?, ?, ?)',
  ).run("appt-3", "", "", "", "done", "user-1");

  db.prepare('INSERT INTO "Schedules" ("id", "Barber", "Date") VALUES (?, ?, ?)').run(
    "schedule-1",
    "",
    "",
  );

  db.prepare('INSERT INTO "Barbers" ("id", "name") VALUES (?, ?)').run("barber-1", "Timur");
  db.prepare('INSERT INTO "Services" ("id", "name") VALUES (?, ?)').run("service-1", "Fade");
  db.prepare('INSERT INTO "ServicePrices" ("id", "serviceId", "barberId") VALUES (?, ?, ?)').run(
    "price-1",
    "service-1",
    "barber-1",
  );
  db.prepare('INSERT INTO "ServicePrices" ("id", "serviceId", "barberId") VALUES (?, ?, ?)').run(
    "price-2",
    "missing-service",
    "missing-barber",
  );

  const report = collectInventory(db, {
    sqlitePath: "D:/snapshot/dev.db",
    databaseUrl: "file:./dev.db",
    label: "local",
  });

  assert.equal(report.source.label, "local");
  assert.equal(report.counts.Users, 3);
  assert.equal(report.counts.Appointments, 3);
  assert.equal(report.issues.usersWithoutPhone, 1);
  assert.equal(report.issues.usersWithoutTelegramId, 1);
  assert.equal(report.issues.duplicatePhones, 1);
  assert.equal(report.issues.duplicateTelegramIds, 1);
  assert.equal(report.issues.appointmentsMissingBarber, 1);
  assert.equal(report.issues.appointmentsMissingDate, 1);
  assert.equal(report.issues.appointmentsMissingTime, 1);
  assert.equal(report.issues.appointmentsMissingUserReference, 2);
  assert.equal(report.issues.duplicateActiveSlots, 1);
  assert.equal(report.issues.schedulesMissingBarber, 1);
  assert.equal(report.issues.schedulesMissingDate, 1);
  assert.equal(report.issues.servicePricesMissingBarber, 1);
  assert.equal(report.issues.servicePricesMissingService, 1);
  assert.ok(
    report.warnings.includes("Users contain duplicate normalized phone numbers."),
  );

  db.close();
});
