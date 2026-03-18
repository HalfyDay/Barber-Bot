const test = require("node:test");
const assert = require("node:assert/strict");

const {
  parseArgs,
  resolvePostgresUrl,
} = require("../scripts/postgresApplySql");

test("postgres apply sql parses cli args", () => {
  const args = parseArgs([
    "--file",
    "docs/reports/postgres-target-init.sql",
    "--database-url",
    "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
  ]);

  assert.deepEqual(args, {
    filePath: "docs/reports/postgres-target-init.sql",
    databaseUrl: "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
  });
});

test("postgres apply sql resolves explicit postgres url", () => {
  const url = resolvePostgresUrl("postgresql://postgres:postgres@127.0.0.1:5432/barber_bot");
  assert.equal(url, "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot");
});

test("postgres apply sql rejects non-postgres url", () => {
  assert.throws(
    () => resolvePostgresUrl("file:./prisma/dev.db"),
    /must point to a PostgreSQL database/i,
  );
});
