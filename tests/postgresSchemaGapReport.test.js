const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildSchemaGapReport,
  parseArgs,
  parsePrismaSchema,
} = require("../scripts/postgresSchemaGapReport");

test("postgres schema gap report parses cli args", () => {
  const args = parseArgs([
    "--schema",
    "prisma/schema.sqlite.legacy.prisma",
    "--bundle",
    "docs/reports/server-postgres-export-bundle.json",
    "--write",
    "docs/reports/schema-gap.md",
    "--title",
    "Schema Gap",
  ]);

  assert.deepEqual(args, {
    schemaPath: "prisma/schema.sqlite.legacy.prisma",
    bundlePath: "docs/reports/server-postgres-export-bundle.json",
    writePath: "docs/reports/schema-gap.md",
    title: "Schema Gap",
  });
});

test("postgres schema gap report parses prisma provider and model names", () => {
  const parsed = parsePrismaSchema(`
    datasource db {
      provider = "sqlite"
      url = "file:./dev.db"
    }

    model Users {
      id String @id
    }

    model Appointments {
      id String @id
    }
  `);

  assert.equal(parsed.provider, "sqlite");
  assert.equal(parsed.url, '"file:./dev.db"');
  assert.deepEqual(parsed.models, ["Users", "Appointments"]);
});

test("postgres schema gap report highlights missing tables and sqlite provider", () => {
  const output = buildSchemaGapReport({
    title: "Schema Gap",
    schema: {
      provider: "sqlite",
      url: '"file:./dev.db"',
      models: ["Users", "Appointments", "Schedules"],
    },
    bundle: {
      importOrder: ["Users", "Appointments", "Schedules", "TelegramAuthRequests"],
    },
  });

  assert.match(output, /Provider: sqlite/);
  assert.match(output, /- TelegramAuthRequests/);
  assert.match(output, /Datasource provider is sqlite, expected postgresql\./);
  assert.match(output, /Datasource url is still SQLite file-based\./);
});
