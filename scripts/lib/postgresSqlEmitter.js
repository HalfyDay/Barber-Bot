const { IMPORT_TABLES } = require("./postgresImportBundle");

const quoteIdentifier = (value) => `"${String(value).replace(/"/g, '""')}"`;

const BOOLEAN_COLUMNS = {
  Appointments: new Set(["Reminder2hClientSent", "Reminder2hBarberSent"]),
  Barbers: new Set(["isActive", "cardPhotoGrayscale", "cardPhotoOutline"]),
  BotSettings: new Set(["isBotEnabled"]),
  Schedules: new Set(["Today"]),
  Services: new Set(["isActive"]),
  Users: new Set(["HomeIsActive"]),
};

const DATETIME_COLUMNS = {
  Barbers: new Set(["createdAt", "updatedAt"]),
  BotMessages: new Set(["updatedAt"]),
  BotSettings: new Set(["updatedAt"]),
  Positions: new Set(["createdAt", "updatedAt"]),
  ServicePrices: new Set(["createdAt"]),
  Services: new Set(["createdAt", "updatedAt"]),
};

const quoteLiteral = (value) => {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "NULL";
  }
  return `'${String(value).replace(/'/g, "''")}'`;
};

const normalizeBooleanLiteral = (value) => {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const normalized = String(value).trim().toLowerCase();
  if (normalized === "1" || normalized === "true") return true;
  if (normalized === "0" || normalized === "false") return false;
  return value;
};

const normalizeDateTimeLiteral = (value) => {
  if (value === null || value === undefined || value === "") return null;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "number" && Number.isFinite(value)) {
    return new Date(value).toISOString();
  }
  if (typeof value === "string" && /^\d+$/.test(value.trim())) {
    return new Date(Number(value.trim())).toISOString();
  }
  return value;
};

const normalizeTypedValue = (tableName, key, value) => {
  if (BOOLEAN_COLUMNS[tableName]?.has(key)) {
    return normalizeBooleanLiteral(value);
  }
  if (DATETIME_COLUMNS[tableName]?.has(key)) {
    return normalizeDateTimeLiteral(value);
  }
  return value;
};

const buildInsertStatement = (tableName, row) => {
  const keys = Object.keys(row);
  if (!keys.length) return null;
  const columns = keys.map(quoteIdentifier).join(", ");
  const values = keys.map((key) => quoteLiteral(normalizeTypedValue(tableName, key, row[key]))).join(", ");
  return `INSERT INTO ${quoteIdentifier(tableName)} (${columns}) VALUES (${values});`;
};

const buildBundleImportSql = (bundle) => {
  const lines = [
    "-- PostgreSQL import SQL generated from SQLite export bundle",
    `-- Generated at: ${bundle.generatedAt || new Date().toISOString()}`,
    `-- Source: ${bundle.source?.sqlitePath || bundle.source?.databaseUrl || "unknown"}`,
    "-- Ensure PostgreSQL schema already exists before running this script.",
    "-- Resolve cleanup backlog before import if duplicate users or orphan appointments remain.",
    "",
    "BEGIN;",
    "",
  ];

  for (const tableName of IMPORT_TABLES) {
    const rows = bundle.tables?.[tableName] || [];
    lines.push(`-- ${tableName}: ${rows.length} rows`);
    for (const row of rows) {
      const statement = buildInsertStatement(tableName, row);
      if (statement) lines.push(statement);
    }
    lines.push("");
  }

  const legacyTables = Object.keys(bundle.legacyTables || {});
  if (legacyTables.length) {
    lines.push("-- Legacy tables retained in bundle but excluded from primary PostgreSQL import:");
    for (const tableName of legacyTables) {
      const rows = bundle.legacyTables[tableName] || [];
      lines.push(`-- ${tableName}: ${rows.length} rows`);
    }
    lines.push("");
  }

  lines.push("COMMIT;");
  lines.push("");
  return lines.join("\n");
};

module.exports = {
  buildBundleImportSql,
  buildInsertStatement,
  normalizeTypedValue,
  quoteIdentifier,
  quoteLiteral,
};
