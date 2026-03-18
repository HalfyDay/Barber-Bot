const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildGenerateCommand,
  quoteShellArg,
} = require("../scripts/prismaGenerateRuntimeClient");

test("prisma generate runtime client builds postgres command by default", () => {
  const command = buildGenerateCommand({});
  assert.match(command, /^npx prisma generate --schema /);
  assert.match(command, /schema\.postgresql\.prisma"?$/);
});

test("prisma generate runtime client rejects legacy sqlite runtime", () => {
  assert.throws(
    () => buildGenerateCommand({ PRISMA_RUNTIME: "sqlite" }),
    /no longer supported/i,
  );
});

test("prisma generate runtime client quotes schema path when needed", () => {
  assert.match(
    quoteShellArg("D:/Works/Barber Bot/prisma/schema.postgresql.prisma"),
    /^".+"$/,
  );
});
