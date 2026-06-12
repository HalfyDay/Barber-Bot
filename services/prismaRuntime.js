const fs = require("fs");
const path = require("path");
const { AsyncLocalStorage } = require("async_hooks");
const { Client } = require("pg");

const PROJECT_ROOT = path.join(__dirname, "..");
const POSTGRES_SCHEMA_PATH = path.join(PROJECT_ROOT, "prisma", "schema.postgresql.prisma");
const POSTGRES_CLIENT_OUTPUT_PATH = path.join(PROJECT_ROOT, "generated", "prisma-postgresql-client");
const LEGACY_SQLITE_RUNTIME_ERROR =
  "PRISMA_RUNTIME=sqlite is no longer supported by the application runtime. Use PostgreSQL for the app and keep SQLite only for legacy migration scripts.";

// Context storage for the active tenant's PrismaClient
const tenantPrismaStorage = new AsyncLocalStorage();

// Cache to reuse PrismaClient instances across requests for the same schema
const tenantClientsCache = new Map();
let defaultPrismaClient = null;

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

const getTenantPrismaClient = (schema, env = process.env) => {
  if (!schema || schema === "public") {
    if (!defaultPrismaClient) {
      const PrismaClient = loadPrismaClientClass(env);
      defaultPrismaClient = new PrismaClient();
    }
    return defaultPrismaClient;
  }

  if (tenantClientsCache.has(schema)) {
    return tenantClientsCache.get(schema);
  }

  const PrismaClient = loadPrismaClientClass(env);
  const baseUrl = env.POSTGRES_DATABASE_URL;

  let tenantUrl;
  try {
    const parsedUrl = new URL(baseUrl);
    parsedUrl.searchParams.set("schema", schema);
    tenantUrl = parsedUrl.toString();
  } catch (error) {
    if (baseUrl.includes("?")) {
      const parts = baseUrl.split("?");
      const searchParams = new URLSearchParams(parts[1]);
      searchParams.set("schema", schema);
      tenantUrl = `${parts[0]}?${searchParams.toString()}`;
    } else {
      tenantUrl = `${baseUrl}?schema=${schema}`;
    }
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: tenantUrl,
      },
    },
  });

  tenantClientsCache.set(schema, client);
  return client;
};

const getActivePrismaClient = () => {
  const active = tenantPrismaStorage.getStore();
  if (active) {
    return active.prisma || active;
  }

  return getTenantPrismaClient("public");
};

const getActiveTimezone = () => {
  const active = tenantPrismaStorage.getStore();
  if (active && active.timezone) {
    return active.timezone;
  }
  return null;
};

const getActiveSchema = () => {
  const active = tenantPrismaStorage.getStore();
  if (active && active.schema) {
    return active.schema;
  }
  return "public";
};

const tenantTimezoneCache = new Map();

const getTenantTimezone = async (schema) => {
  if (!schema || schema === "public") {
    return process.env.APP_TIMEZONE || "Europe/Moscow";
  }
  if (tenantTimezoneCache.has(schema)) {
    return tenantTimezoneCache.get(schema);
  }

  const tenantPrisma = getTenantPrismaClient(schema);
  let timezone = null;
  try {
    const rows = await tenantPrisma.$queryRawUnsafe(
      'SELECT "payload" FROM "SiteSettings" WHERE "id" = $1 LIMIT 1',
      "client-site"
    );
    if (Array.isArray(rows) && rows[0]) {
      const payload = rows[0].payload;
      const site = typeof payload === "string" ? JSON.parse(payload) : payload;
      timezone = site?.timeZones?.crm || site?.timeZones?.client;
    }
  } catch (error) {
    // ignore
  }

  if (!timezone) {
    timezone = process.env.APP_TIMEZONE || "Europe/Moscow";
  }

  tenantTimezoneCache.set(schema, timezone);
  return timezone;
};

const clearActiveTenantTimezone = () => {
  const schema = getActiveSchema();
  tenantTimezoneCache.delete(schema);
};

// Create a Proxy that routes all prisma client calls to the context-active client instance
const createPrismaClient = (options = {}, env = process.env) => {
  // Prime the default client
  getTenantPrismaClient("public", env);

  return new Proxy({}, {
    get(target, prop, receiver) {
      const activePrisma = getActivePrismaClient();
      const value = Reflect.get(activePrisma, prop, receiver);
      if (typeof value === "function") {
        return value.bind(activePrisma);
      }
      return value;
    },
    set(target, prop, value, receiver) {
      const activePrisma = getActivePrismaClient();
      return Reflect.set(activePrisma, prop, value, receiver);
    },
  });
};

// Creates a new PostgreSQL schema and initializes it using the tenant_template.sql file
const createTenantSchema = async (schema) => {
  if (!/^[a-zA-Z0-9_]+$/.test(schema)) {
    throw new Error(`Invalid schema name: ${schema}`);
  }

  const globalPrisma = getTenantPrismaClient("public");

  // 1. Create schema
  await globalPrisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${schema}";`);

  // 2. Read template SQL
  const sqlFilePath = path.join(PROJECT_ROOT, "prisma", "tenant_template.sql");
  if (!fs.existsSync(sqlFilePath)) {
    throw new Error(`Init SQL template not found at: ${sqlFilePath}`);
  }
  const sqlContent = fs.readFileSync(sqlFilePath, "utf8");

  // 3. Connect via raw pg Client and execute the multi-statement script
  const connectionString = process.env.POSTGRES_DATABASE_URL;
  let cleanUrl = connectionString;
  try {
    const parsedUrl = new URL(connectionString);
    parsedUrl.search = ""; // remove search params (like ?schema=public)
    cleanUrl = parsedUrl.toString();
  } catch (e) {
    if (connectionString.includes("?")) {
      cleanUrl = connectionString.split("?")[0];
    }
  }

  const client = new Client({ connectionString: cleanUrl });
  await client.connect();
  try {
    // Set search path for this connection session
    await client.query(`SET search_path TO "${schema}";`);
    // Run the multi-statement template SQL script
    await client.query(sqlContent);
  } finally {
    await client.end();
  }
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
  tenantPrismaStorage,
  getTenantPrismaClient,
  createTenantSchema,
  getActiveTimezone,
  getActiveSchema,
  getTenantTimezone,
  clearActiveTenantTimezone,
};
