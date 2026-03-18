const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildGenerateCommand,
  buildGenerateArgs,
  parseArgs,
  quoteShellArg,
} = require("../scripts/prismaGeneratePostgresClient");

test("prisma generate postgres client parses cli args", () => {
  const args = parseArgs([
    "--schema",
    "prisma/schema.postgresql.prisma",
  ]);

  assert.deepEqual(args, {
    schemaPath: "prisma/schema.postgresql.prisma",
  });
});

test("prisma generate postgres client builds npx prisma generate args", () => {
  assert.deepEqual(
    buildGenerateArgs("D:/Works/Barber Bot/prisma/schema.postgresql.prisma"),
    [
      "prisma",
      "generate",
      "--schema",
      "D:/Works/Barber Bot/prisma/schema.postgresql.prisma",
    ],
  );
});

test("prisma generate postgres client builds shell command with quoted schema path", () => {
  const command = buildGenerateCommand("D:/Works/Barber Bot/prisma/schema.postgresql.prisma");
  assert.match(command, /^npx prisma generate --schema /);
  assert.match(command, /schema\.postgresql\.prisma"$/);
  assert.match(quoteShellArg("D:/Works/Barber Bot/prisma/schema.postgresql.prisma"), /^"/);
});
