const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildPrismaDiffArgs,
  parseArgs,
  quoteShellArg,
} = require("../scripts/postgresGenerateInitSql");

test("postgres generate init sql parses cli args", () => {
  const args = parseArgs([
    "--schema",
    "prisma/schema.postgresql.prisma",
    "--write",
    "docs/reports/postgres-target-init.sql",
  ]);

  assert.deepEqual(args, {
    schemaPath: "prisma/schema.postgresql.prisma",
    writePath: "docs/reports/postgres-target-init.sql",
  });
});

test("postgres generate init sql builds prisma migrate diff args", () => {
  const args = buildPrismaDiffArgs("D:/Works/Barber Bot/prisma/schema.postgresql.prisma");

  assert.deepEqual(args, [
    "prisma",
    "migrate",
    "diff",
    "--from-empty",
    "--to-schema-datamodel",
    "D:/Works/Barber Bot/prisma/schema.postgresql.prisma",
    "--script",
  ]);
});

test("postgres generate init sql quotes schema path for shell execution", () => {
  const quoted = quoteShellArg('D:/Works/Barber Bot/prisma/schema.postgresql.prisma');
  assert.match(quoted, /^["']/);
  assert.match(quoted, /schema\.postgresql\.prisma["']$/);
});
