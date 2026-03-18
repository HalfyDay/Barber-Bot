const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const POSTGRES_SCHEMA_PATH = path.join(PROJECT_ROOT, "prisma", "schema.postgresql.prisma");
const POSTGRES_CLIENT_OUTPUT_PATH = path.join(PROJECT_ROOT, "generated", "prisma-postgresql-client");
const LEGACY_SQLITE_RUNTIME_ERROR =
  "PRISMA_RUNTIME=sqlite is no longer supported by the application runtime. Use PostgreSQL for the app and keep SQLite only for legacy migration scripts.";

const normalizeRuntime = (value) => {
  const normalized = (value || "postgres").toString().trim().toLowerCase();
  if (!normalized || normalized === "postgres") return "postgres";
  if (normalized === "sqlite") {
    throw new Error(LEGACY_SQLITE_RUNTIME_ERROR);
  }
  return "postgres";
};

const getPrismaRuntimeConfig = (env = process.env) => {
  const runtime = normalizeRuntime(env.PRISMA_RUNTIME);
  return {
    runtime,
    schemaPath: POSTGRES_SCHEMA_PATH,
    clientModulePath: POSTGRES_CLIENT_OUTPUT_PATH,
    databaseUrlEnv: "POSTGRES_DATABASE_URL",
    supportsPrismaMigrateDeploy: false,
  };
};

const validatePrismaRuntimeConfig = (env = process.env) => {
  const config = getPrismaRuntimeConfig(env);
  const databaseUrl = env[config.databaseUrlEnv];

  if (!databaseUrl || !String(databaseUrl).trim()) {
    throw new Error(
      `${config.databaseUrlEnv} is required for PRISMA_RUNTIME=${config.runtime}.`,
    );
  }

  const entryPath = path.join(config.clientModulePath, "index.js");
  if (!fs.existsSync(entryPath)) {
    throw new Error(
      `PostgreSQL Prisma client is not generated. Run "npm run prisma:generate:postgres" before starting with PRISMA_RUNTIME=postgres.`,
    );
  }

  return config;
};

const loadPrismaClientClass = (env = process.env) => {
  const config = validatePrismaRuntimeConfig(env);
  return require(config.clientModulePath).PrismaClient;
};

const createPrismaClient = (options = {}, env = process.env) => {
  const PrismaClient = loadPrismaClientClass(env);
  return new PrismaClient(options);
};

module.exports = {
  LEGACY_SQLITE_RUNTIME_ERROR,
  POSTGRES_CLIENT_OUTPUT_PATH,
  POSTGRES_SCHEMA_PATH,
  createPrismaClient,
  getPrismaRuntimeConfig,
  loadPrismaClientClass,
  normalizeRuntime,
  validatePrismaRuntimeConfig,
};
