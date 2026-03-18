const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  checkFile,
  parseArgs,
  resolvePostgresUrl,
} = require("../scripts/postgresSmokePreflight");

test("postgres smoke preflight parses cli args", () => {
  const args = parseArgs([
    "--database-url",
    "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    "--init-sql",
    "docs/reports/postgres-target-init.sql",
    "--import-sql",
    "docs/reports/server-postgres-import-sanitized.sql",
    "--bundle",
    "docs/reports/server-postgres-export-bundle-sanitized.json",
    "--write",
    "docs/reports/postgres-smoke-preflight.json",
  ]);

  assert.deepEqual(args, {
    databaseUrl: "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
    initSqlPath: "docs/reports/postgres-target-init.sql",
    importSqlPath: "docs/reports/server-postgres-import-sanitized.sql",
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writePath: "docs/reports/postgres-smoke-preflight.json",
  });
});

test("postgres smoke preflight checks file existence", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "barber-bot-preflight-"));
  const target = path.join(tempDir, "file.sql");
  fs.writeFileSync(target, "SELECT 1;\n");

  const report = checkFile(target);

  assert.equal(report.exists, true);
  assert.ok(report.sizeBytes > 0);
});

test("postgres smoke preflight resolves postgres url and rejects sqlite", () => {
  assert.equal(
    resolvePostgresUrl("postgresql://postgres:postgres@127.0.0.1:5432/barber_bot"),
    "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot",
  );
  assert.throws(() => resolvePostgresUrl("file:./prisma/dev.db"), /must point to a PostgreSQL database/i);
});
