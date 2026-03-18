const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const { parseArgs } = require("../scripts/postgresCutoverPacket");
const {
  buildCutoverPacket,
  buildCutoverRunbookMarkdown,
  parseSchemaGapBlockers,
} = require("../scripts/lib/postgresCutoverPacket");

test("postgres cutover packet parses cli args", () => {
  const args = parseArgs([
    "--label",
    "server",
    "--inventory",
    "docs/reports/server-postgres-migration-inventory.json",
    "--duplicates",
    "docs/reports/server-postgres-duplicate-users.json",
    "--cleanup",
    "docs/reports/server-postgres-cleanup-candidates.json",
    "--backlog",
    "docs/reports/SERVER_POSTGRES_CLEANUP_BACKLOG_2026-03-17.md",
    "--init-sql",
    "docs/reports/postgres-target-init.sql",
    "--import-sql",
    "docs/reports/server-postgres-import.sql",
    "--bundle",
    "docs/reports/server-postgres-export-bundle.json",
    "--schema-gap",
    "docs/reports/POSTGRES_TARGET_SCHEMA_GAP_2026-03-17.md",
    "--sanitization",
    "docs/reports/server-postgres-bundle-sanitization.json",
    "--database-url-template",
    "postgresql://user:pass@db:5432/barber_bot?schema=public",
    "--app-base-url-template",
    "https://barber.example.com",
    "--write-json",
    "docs/reports/postgres-cutover-packet.json",
    "--write-runbook",
    "docs/reports/POSTGRES_CUTOVER_RUNBOOK_2026-03-17.md",
  ]);

  assert.equal(args.label, "server");
  assert.equal(args.inventoryPath, "docs/reports/server-postgres-migration-inventory.json");
  assert.equal(args.sanitizationPath, "docs/reports/server-postgres-bundle-sanitization.json");
  assert.equal(args.databaseUrlTemplate, "postgresql://user:pass@db:5432/barber_bot?schema=public");
  assert.equal(args.appBaseUrlTemplate, "https://barber.example.com");
  assert.equal(args.writeRunbookPath, "docs/reports/POSTGRES_CUTOVER_RUNBOOK_2026-03-17.md");
});

test("postgres cutover packet parses schema blockers", () => {
  assert.deepEqual(parseSchemaGapBlockers("## Blockers\n- none\n"), []);
  assert.deepEqual(parseSchemaGapBlockers("## Blockers\n- missing table\n- bad type\n"), ["missing table", "bad type"]);
});

test("postgres cutover packet builds packet and markdown", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "barber-bot-cutover-"));
  const oldCwd = process.cwd();
  process.chdir(tempDir);

  try {
    fs.mkdirSync(path.join(tempDir, "docs", "reports"), { recursive: true });
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "inventory.json"), JSON.stringify({
      counts: {
        Users: 10,
        Appointments: 20,
        Schedules: 5,
      },
      issues: {
        appointmentsMissingUserReference: 3,
      },
    }));
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "duplicates.json"), JSON.stringify({
      duplicatePhones: [{ key: "+79990000000" }],
      duplicateTelegramIds: [{ key: "123" }],
    }));
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "cleanup.json"), JSON.stringify({
      summary: {
        appointmentsMissingUserReference: 3,
        incompleteSchedules: 2,
      },
    }));
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "backlog.md"), "# backlog\n");
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "init.sql"), "CREATE TABLE demo();\n");
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "import.sql"), "INSERT INTO demo VALUES (1);\n");
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "bundle.json"), JSON.stringify({ rows: [] }));
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "schema-gap.md"), "# Gap\n\n## Blockers\n- none\n");
    fs.writeFileSync(path.join(tempDir, "docs", "reports", "sanitization.json"), JSON.stringify({
      summary: {
        removedExactDuplicateRows: 4,
        conflictingDuplicateGroups: 0,
      },
    }));

    const packet = buildCutoverPacket({
      label: "server",
      inventoryPath: "docs/reports/inventory.json",
      duplicatesPath: "docs/reports/duplicates.json",
      cleanupPath: "docs/reports/cleanup.json",
      backlogPath: "docs/reports/backlog.md",
      initSqlPath: "docs/reports/init.sql",
      importSqlPath: "docs/reports/import.sql",
      bundlePath: "docs/reports/bundle.json",
      schemaGapPath: "docs/reports/schema-gap.md",
      sanitizationPath: "docs/reports/sanitization.json",
      databaseUrlTemplate: "postgresql://user:pass@db:5432/barber_bot?schema=public",
      appBaseUrlTemplate: "https://barber.example.com",
    });
    const markdown = buildCutoverRunbookMarkdown(packet, "Runbook");

    assert.equal(packet.readiness.readyForSmokeMigration, true);
    assert.equal(packet.readiness.duplicatePhones, 1);
    assert.equal(packet.readiness.incompleteSchedules, 2);
    assert.equal(packet.readiness.removedExactDuplicateRows, 4);
    assert.match(markdown, /Ready for smoke migration: yes/);
    assert.match(markdown, /Removed exact duplicate rows in bundle: 4/);
    assert.match(markdown, /npm run db:smoke-run/);
    assert.match(markdown, /run-postgres-rehearsal\.ps1/);
    assert.match(markdown, /npm run app:smoke/);
    assert.match(markdown, /run-app-smoke\.ps1/);
    assert.match(markdown, /Cleanup backlog:/);
  } finally {
    process.chdir(oldCwd);
  }
});
