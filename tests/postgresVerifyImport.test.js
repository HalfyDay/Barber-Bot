const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildVerificationReport,
} = require("../scripts/lib/postgresImportVerification");
const { parseArgs } = require("../scripts/postgresVerifyImport");

test("postgres verify import parses cli args", () => {
  const args = parseArgs([
    "--bundle",
    "docs/reports/server-postgres-export-bundle-sanitized.json",
    "--database-url",
    "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    "--write",
    "docs/reports/postgres-import-verification.json",
  ]);

  assert.deepEqual(args, {
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    databaseUrl: "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    writePath: "docs/reports/postgres-import-verification.json",
  });
});

test("postgres verify import builds report with mismatches", () => {
  const report = buildVerificationReport({
    bundle: {
      source: { label: "server" },
      rowCounts: {
        Positions: 9,
        Barbers: 2,
        Services: 6,
        ServicePrices: 9,
        Users: 215,
        Schedules: 72,
        Appointments: 286,
        BotSettings: 1,
        BotMessages: 2,
        TelegramAuthRequests: 18,
      },
      issues: {
        duplicatePhones: 2,
        duplicateTelegramIds: 1,
        appointmentsMissingUserReference: 74,
      },
      cleanup: {
        summary: { incompleteSchedules: 16 },
      },
    },
    actualCounts: {
      Positions: 9,
      Barbers: 2,
      Services: 6,
      ServicePrices: 9,
      Users: 214,
      Schedules: 72,
      Appointments: 286,
      BotSettings: 1,
      BotMessages: 2,
      TelegramAuthRequests: 18,
    },
    actualIssues: {
      duplicatePhones: 2,
      duplicateTelegramIds: 1,
      appointmentsMissingUserReference: 73,
      incompleteSchedules: 16,
    },
  });

  assert.equal(report.readiness.matchesBundle, false);
  assert.deepEqual(report.readiness.countMismatches, [
    { table: "Users", expected: 215, actual: 214 },
  ]);
  assert.deepEqual(report.readiness.issueMismatches, [
    { issue: "appointmentsMissingUserReference", expected: 74, actual: 73 },
  ]);
});

test("postgres verify import derives duplicate expectations from bundle tables when present", () => {
  const report = buildVerificationReport({
    bundle: {
      source: { label: "server" },
      rowCounts: {
        Positions: 0,
        Barbers: 0,
        Services: 0,
        ServicePrices: 0,
        Users: 4,
        Schedules: 2,
        Appointments: 2,
        BotSettings: 0,
        BotMessages: 0,
        TelegramAuthRequests: 0,
      },
      issues: {
        duplicatePhones: 0,
        duplicateTelegramIds: 0,
        appointmentsMissingUserReference: 0,
      },
      tables: {
        Users: [
          { id: "u1", Phone: "+7 999 000 00 00", TelegramID: 10 },
          { id: "u2", Phone: "79990000000", TelegramID: 10 },
          { id: "u3", Phone: "+7 111 000 00 00", TelegramID: 11 },
          { id: "u4", Phone: "+7 111 000 00 00", TelegramID: 12 },
        ],
        Appointments: [
          { id: "a1", UserID: "" },
          { id: "a2", UserID: "u2" },
        ],
        Schedules: [
          { id: "s1", Barber: "Timur", Date: "" },
          { id: "s2", Barber: "Timur", Date: "2026-03-17" },
        ],
      },
      cleanup: {
        summary: { incompleteSchedules: 0 },
      },
    },
    actualCounts: {
      Positions: 0,
      Barbers: 0,
      Services: 0,
      ServicePrices: 0,
      Users: 4,
      Schedules: 2,
      Appointments: 2,
      BotSettings: 0,
      BotMessages: 0,
      TelegramAuthRequests: 0,
    },
    actualIssues: {
      duplicatePhones: 2,
      duplicateTelegramIds: 1,
      appointmentsMissingUserReference: 1,
      incompleteSchedules: 1,
    },
  });

  assert.equal(report.readiness.matchesBundle, true);
  assert.deepEqual(report.readiness.issueMismatches, []);
});
