const test = require("node:test");
const assert = require("node:assert/strict");

const { parseArgs } = require("../scripts/postgresRunSmokeMigration");

test("postgres run smoke migration parses cli args", () => {
  const args = parseArgs([
    "--database-url",
    "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    "--init-sql",
    "docs/reports/postgres-target-init.sql",
    "--import-sql",
    "docs/reports/server-postgres-import-sanitized.sql",
    "--bundle",
    "docs/reports/server-postgres-export-bundle-sanitized.json",
    "--write-json",
    "docs/reports/postgres-smoke-verification.json",
    "--write-summary",
    "docs/reports/POSTGRES_SMOKE_VERIFICATION_SUMMARY.md",
    "--skip-init",
    "--skip-import",
  ]);

  assert.deepEqual(args, {
    databaseUrl: "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    initSqlPath: "docs/reports/postgres-target-init.sql",
    importSqlPath: "docs/reports/server-postgres-import-sanitized.sql",
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writeJsonPath: "docs/reports/postgres-smoke-verification.json",
    writeSummaryPath: "docs/reports/POSTGRES_SMOKE_VERIFICATION_SUMMARY.md",
    skipInit: true,
    skipImport: true,
  });
});
