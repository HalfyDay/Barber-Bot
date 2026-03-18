#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const { resolvePostgresUrl } = require("./postgresApplySql");
const {
  IMPORT_TABLES,
  buildCountQuery,
  buildVerificationQueries,
  buildVerificationReport,
} = require("./lib/postgresImportVerification");
const { writeJsonReport } = require("./lib/postgresMigrationSupport");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    databaseUrl: null,
    bundlePath: null,
    writePath: null,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--database-url") {
      args.databaseUrl = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--bundle") {
      args.bundlePath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || null;
      index += 1;
    }
  }
  return args;
};

const verifyImport = async ({ databaseUrl, bundlePath }) => {
  const bundle = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), bundlePath), "utf8"));
  const client = new Client({ connectionString: resolvePostgresUrl(databaseUrl) });
  const verificationQueries = buildVerificationQueries();
  await client.connect();
  try {
    const actualCounts = {};
    for (const tableName of IMPORT_TABLES) {
      const row = (await client.query(buildCountQuery(tableName))).rows[0];
      actualCounts[tableName] = Number(row?.count || 0);
    }

    const actualIssues = {};
    for (const [issueKey, sql] of Object.entries(verificationQueries)) {
      const row = (await client.query(sql)).rows[0];
      actualIssues[issueKey] = Number(row?.count || 0);
    }

    return buildVerificationReport({
      bundle,
      actualCounts,
      actualIssues,
    });
  } finally {
    await client.end();
  }
};

const main = async () => {
  const { databaseUrl, bundlePath, writePath } = parseArgs();
  if (!bundlePath) {
    throw new Error("Usage: node scripts/postgresVerifyImport.js --bundle <bundle.json> [--database-url <postgres-url>] [--write <report.json>]");
  }
  const report = await verifyImport({ databaseUrl, bundlePath });
  if (writePath) {
    const resolved = writeJsonReport(writePath, report);
    console.log(`PostgreSQL import verification report written to ${resolved}`);
    return;
  }
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
  verifyImport,
};
