#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    databaseUrl: null,
    filePath: null,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--database-url") {
      args.databaseUrl = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--file") {
      args.filePath = argv[index + 1] || null;
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

const applySqlFile = async ({ databaseUrl, filePath }) => {
  const sql = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf8");
  const client = new Client({ connectionString: resolvePostgresUrl(databaseUrl) });
  await client.connect();
  try {
    await client.query(sql);
  } finally {
    await client.end();
  }
};

const main = async () => {
  const { databaseUrl, filePath } = parseArgs();
  if (!filePath) {
    throw new Error("Usage: node scripts/postgresApplySql.js --file <sql-file> [--database-url <postgres-url>]");
  }
  await applySqlFile({ databaseUrl, filePath });
  console.log(`Applied SQL file ${path.resolve(process.cwd(), filePath)}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  applySqlFile,
  parseArgs,
  resolvePostgresUrl,
};
