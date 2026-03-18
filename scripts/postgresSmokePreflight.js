#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    databaseUrl: null,
    initSqlPath: "docs/reports/postgres-target-init.sql",
    importSqlPath: "docs/reports/server-postgres-import-sanitized.sql",
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writePath: "docs/reports/postgres-smoke-preflight.json",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--database-url") {
      args.databaseUrl = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--init-sql") {
      args.initSqlPath = argv[index + 1] || args.initSqlPath;
      index += 1;
      continue;
    }
    if (token === "--import-sql") {
      args.importSqlPath = argv[index + 1] || args.importSqlPath;
      index += 1;
      continue;
    }
    if (token === "--bundle") {
      args.bundlePath = argv[index + 1] || args.bundlePath;
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || args.writePath;
      index += 1;
    }
  }
  return args;
};

const resolvePostgresUrl = (explicitUrl = null) => {
  const url = explicitUrl || process.env.POSTGRES_DATABASE_URL || process.env.DATABASE_URL || "";
  if (!/^postgres(ql)?:\/\//i.test(url)) {
    throw new Error("POSTGRES_DATABASE_URL or --database-url must point to a PostgreSQL database.");
  }
  return url;
};

const checkFile = (targetPath) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  const exists = fs.existsSync(resolved);
  return {
    path: resolved,
    exists,
    sizeBytes: exists ? fs.statSync(resolved).size : 0,
  };
};

const checkDatabaseConnection = async (databaseUrl) => {
  const client = new Client({ connectionString: databaseUrl });
  try {
    await client.connect();
    const versionRow = (await client.query("SELECT version() AS version")).rows[0];
    const dbRow = (await client.query("SELECT current_database() AS name, current_schema() AS schema")).rows[0];
    return {
      ok: true,
      version: versionRow?.version || null,
      database: dbRow?.name || null,
      schema: dbRow?.schema || null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error?.message || String(error),
    };
  } finally {
    try {
      await client.end();
    } catch {
      // ignore
    }
  }
};

const buildPreflightReport = async ({
  databaseUrl,
  initSqlPath,
  importSqlPath,
  bundlePath,
}) => {
  const resolvedDatabaseUrl = resolvePostgresUrl(databaseUrl);
  const files = {
    initSql: checkFile(initSqlPath),
    importSql: checkFile(importSqlPath),
    bundle: checkFile(bundlePath),
  };
  const database = await checkDatabaseConnection(resolvedDatabaseUrl);
  const ready =
    database.ok &&
    Object.values(files).every((entry) => entry.exists);

  return {
    generatedAt: new Date().toISOString(),
    databaseUrl: resolvedDatabaseUrl,
    files,
    database,
    ready,
  };
};

const main = async () => {
  const { databaseUrl, initSqlPath, importSqlPath, bundlePath, writePath } = parseArgs();
  const report = await buildPreflightReport({
    databaseUrl,
    initSqlPath,
    importSqlPath,
    bundlePath,
  });
  const resolvedWritePath = path.resolve(process.cwd(), writePath);
  fs.mkdirSync(path.dirname(resolvedWritePath), { recursive: true });
  fs.writeFileSync(resolvedWritePath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`PostgreSQL smoke preflight report written to ${resolvedWritePath}`);
  console.log(`ready=${report.ready ? "yes" : "no"}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  buildPreflightReport,
  checkFile,
  checkDatabaseConnection,
  parseArgs,
  resolvePostgresUrl,
};
