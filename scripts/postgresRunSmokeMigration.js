#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const { applySqlFile, resolvePostgresUrl } = require("./postgresApplySql");
const { verifyImport } = require("./postgresVerifyImport");
const { writeJsonReport } = require("./lib/postgresMigrationSupport");
const { buildVerificationSummaryMarkdown } = require("./lib/postgresVerificationSummary");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    databaseUrl: null,
    initSqlPath: "docs/reports/postgres-target-init.sql",
    importSqlPath: "docs/reports/server-postgres-import-sanitized.sql",
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writeJsonPath: "docs/reports/postgres-smoke-verification.json",
    writeSummaryPath: "docs/reports/POSTGRES_SMOKE_VERIFICATION_SUMMARY.md",
    skipInit: false,
    skipImport: false,
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
    if (token === "--write-json") {
      args.writeJsonPath = argv[index + 1] || args.writeJsonPath;
      index += 1;
      continue;
    }
    if (token === "--write-summary") {
      args.writeSummaryPath = argv[index + 1] || args.writeSummaryPath;
      index += 1;
      continue;
    }
    if (token === "--skip-init") {
      args.skipInit = true;
      continue;
    }
    if (token === "--skip-import") {
      args.skipImport = true;
    }
  }
  return args;
};

const runSmokeMigration = async ({
  databaseUrl,
  initSqlPath,
  importSqlPath,
  bundlePath,
  writeJsonPath,
  writeSummaryPath,
  skipInit = false,
  skipImport = false,
}) => {
  const resolvedDatabaseUrl = resolvePostgresUrl(databaseUrl);

  if (!skipInit) {
    await applySqlFile({
      databaseUrl: resolvedDatabaseUrl,
      filePath: initSqlPath,
    });
  }

  if (!skipImport) {
    await applySqlFile({
      databaseUrl: resolvedDatabaseUrl,
      filePath: importSqlPath,
    });
  }

  const report = await verifyImport({
    databaseUrl: resolvedDatabaseUrl,
    bundlePath,
  });

  const resolvedJson = writeJsonReport(writeJsonPath, report);
  const summary = buildVerificationSummaryMarkdown(report, "PostgreSQL Smoke Verification Summary");
  const resolvedSummary = path.resolve(process.cwd(), writeSummaryPath);
  fs.mkdirSync(path.dirname(resolvedSummary), { recursive: true });
  fs.writeFileSync(resolvedSummary, summary, "utf8");

  return {
    report,
    resolvedJson,
    resolvedSummary,
  };
};

const main = async () => {
  const args = parseArgs();
  const result = await runSmokeMigration(args);
  console.log(`Smoke verification report written to ${result.resolvedJson}`);
  console.log(`Smoke verification summary written to ${result.resolvedSummary}`);
  console.log(`matchesBundle=${result.report.readiness?.matchesBundle ? "yes" : "no"}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
  runSmokeMigration,
};
