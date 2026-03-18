#!/usr/bin/env node

require("dotenv").config();

const {
  collectInventory,
  openSqliteDatabase,
  parseArgs,
  writeJsonReport,
} = require("./lib/postgresMigrationSupport");

const main = () => {
  const { writePath, databaseUrl, label } = parseArgs();
  const { db, sqlitePath } = openSqliteDatabase({ databaseUrl });
  try {
    const report = collectInventory(db, {
      sqlitePath,
      databaseUrl: databaseUrl || process.env.DATABASE_URL,
      label,
    });
    if (writePath) {
      const resolved = writeJsonReport(writePath, report);
      console.log(`Inventory written to ${resolved}`);
    } else {
      console.log(JSON.stringify(report, null, 2));
    }
  } finally {
    db.close();
  }
};

main();
