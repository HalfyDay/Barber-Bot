const test = require("node:test");
const assert = require("node:assert/strict");

const {
  LEGACY_SQLITE_RUNTIME_ERROR,
  POSTGRES_CLIENT_OUTPUT_PATH,
  POSTGRES_SCHEMA_PATH,
  getPrismaRuntimeConfig,
  normalizeRuntime,
  validatePrismaRuntimeConfig,
} = require("../services/prismaRuntime");

test("prisma runtime normalizes runtime mode to postgres", () => {
  assert.equal(normalizeRuntime(undefined), "postgres");
  assert.equal(normalizeRuntime("postgres"), "postgres");
  assert.equal(normalizeRuntime("POSTGRES"), "postgres");
  assert.equal(normalizeRuntime("unknown"), "postgres");
});

test("prisma runtime rejects legacy sqlite mode for app runtime", () => {
  assert.throws(
    () => normalizeRuntime("sqlite"),
    new RegExp(LEGACY_SQLITE_RUNTIME_ERROR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
  );
});

test("prisma runtime resolves postgres config by default", () => {
  const config = getPrismaRuntimeConfig({});

  assert.equal(config.runtime, "postgres");
  assert.equal(config.clientModulePath, POSTGRES_CLIENT_OUTPUT_PATH);
  assert.equal(config.databaseUrlEnv, "POSTGRES_DATABASE_URL");
  assert.equal(config.schemaPath, POSTGRES_SCHEMA_PATH);
  assert.equal(config.supportsPrismaMigrateDeploy, false);
});

test("prisma runtime validates postgres env requirements", () => {
  const config = validatePrismaRuntimeConfig({
    POSTGRES_DATABASE_URL: "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public",
  });
  assert.equal(config.runtime, "postgres");
});

test("prisma runtime rejects missing database url for selected runtime", () => {
  assert.throws(
    () => validatePrismaRuntimeConfig({}),
    /POSTGRES_DATABASE_URL is required/i,
  );
});
