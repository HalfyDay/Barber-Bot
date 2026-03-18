#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const {
  DEFAULT_DATABASE_URL_TEMPLATE,
  buildCutoverPacket,
  buildCutoverRunbookMarkdown,
} = require("./lib/postgresCutoverPacket");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    label: "server",
    inventoryPath: "docs/reports/server-postgres-migration-inventory.json",
    duplicatesPath: "docs/reports/server-postgres-duplicate-users.json",
    cleanupPath: "docs/reports/server-postgres-cleanup-candidates.json",
    backlogPath: "docs/reports/SERVER_POSTGRES_CLEANUP_BACKLOG_2026-03-17.md",
    initSqlPath: "docs/reports/postgres-target-init.sql",
    importSqlPath: "docs/reports/server-postgres-import-sanitized.sql",
    bundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    schemaGapPath: "docs/reports/POSTGRES_TARGET_SCHEMA_GAP_2026-03-17.md",
    sanitizationPath: "docs/reports/server-postgres-bundle-sanitization.json",
    databaseUrlTemplate: DEFAULT_DATABASE_URL_TEMPLATE,
    appBaseUrlTemplate: "http://127.0.0.1:3000",
    writeJsonPath: "docs/reports/postgres-cutover-packet.json",
    writeRunbookPath: "docs/reports/POSTGRES_CUTOVER_RUNBOOK_2026-03-17.md",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--label") {
      args.label = argv[index + 1] || args.label;
      index += 1;
      continue;
    }
    if (token === "--inventory") {
      args.inventoryPath = argv[index + 1] || args.inventoryPath;
      index += 1;
      continue;
    }
    if (token === "--duplicates") {
      args.duplicatesPath = argv[index + 1] || args.duplicatesPath;
      index += 1;
      continue;
    }
    if (token === "--cleanup") {
      args.cleanupPath = argv[index + 1] || args.cleanupPath;
      index += 1;
      continue;
    }
    if (token === "--backlog") {
      args.backlogPath = argv[index + 1] || args.backlogPath;
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
    if (token === "--schema-gap") {
      args.schemaGapPath = argv[index + 1] || args.schemaGapPath;
      index += 1;
      continue;
    }
    if (token === "--sanitization") {
      args.sanitizationPath = argv[index + 1] || args.sanitizationPath;
      index += 1;
      continue;
    }
    if (token === "--database-url-template") {
      args.databaseUrlTemplate = argv[index + 1] || args.databaseUrlTemplate;
      index += 1;
      continue;
    }
    if (token === "--app-base-url-template") {
      args.appBaseUrlTemplate = argv[index + 1] || args.appBaseUrlTemplate;
      index += 1;
      continue;
    }
    if (token === "--write-json") {
      args.writeJsonPath = argv[index + 1] || args.writeJsonPath;
      index += 1;
      continue;
    }
    if (token === "--write-runbook") {
      args.writeRunbookPath = argv[index + 1] || args.writeRunbookPath;
      index += 1;
    }
  }

  return args;
};

const writeFile = (targetPath, content) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, content, "utf8");
  return resolved;
};

const main = async () => {
  const args = parseArgs();
  const packet = buildCutoverPacket(args);
  const runbook = buildCutoverRunbookMarkdown(packet);

  const jsonPath = writeFile(args.writeJsonPath, `${JSON.stringify(packet, null, 2)}\n`);
  const runbookPath = writeFile(args.writeRunbookPath, runbook);

  console.log(`PostgreSQL cutover packet written to ${jsonPath}`);
  console.log(`PostgreSQL cutover runbook written to ${runbookPath}`);
  console.log(`readyForSmokeMigration=${packet.readiness.readyForSmokeMigration ? "yes" : "no"}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
};
