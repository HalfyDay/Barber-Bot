#!/usr/bin/env node

require("dotenv").config();

const {
  collectInventory,
  openSqliteDatabase,
  parseArgs,
  writeJsonReport,
} = require("./lib/postgresMigrationSupport");

const buildDryRunReport = (inventory) => {
  const importOrder = [
    "Positions",
    "Barbers",
    "Services",
    "ServicePrices",
    "Users",
    "Schedules",
    "Appointments",
    "BotSettings",
    "BotMessages",
    "TelegramAuthRequests",
  ];

  const blockers = [];
  if (inventory.issues.duplicateActiveSlots) {
    blockers.push("Resolve duplicate active appointment slots before cutover.");
  }
  if (inventory.issues.servicePricesMissingBarber || inventory.issues.servicePricesMissingService) {
    blockers.push("Resolve orphan ServicePrices rows before migration.");
  }

  return {
    generatedAt: inventory.generatedAt,
    source: inventory.source,
    importOrder,
    rowCounts: inventory.counts,
    issues: inventory.issues,
    warnings: inventory.warnings,
    readiness: {
      canStartImport: blockers.length === 0,
      blockers,
    },
  };
};

const main = () => {
  const { writePath, databaseUrl, label } = parseArgs();
  const { db, sqlitePath } = openSqliteDatabase({ databaseUrl });
  try {
    const inventory = collectInventory(db, {
      sqlitePath,
      databaseUrl: databaseUrl || process.env.DATABASE_URL,
      label,
    });
    const report = buildDryRunReport(inventory);
    if (writePath) {
      const resolved = writeJsonReport(writePath, report);
      console.log(`Dry-run report written to ${resolved}`);
    } else {
      console.log(JSON.stringify(report, null, 2));
    }
  } finally {
    db.close();
  }
};

main();
