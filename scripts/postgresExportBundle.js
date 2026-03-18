#!/usr/bin/env node

require("dotenv").config();

const {
  openSqliteDatabase,
  parseArgs,
  writeJsonReport,
} = require("./lib/postgresMigrationSupport");
const { buildExportBundle } = require("./lib/postgresImportBundle");

const main = () => {
  const { writePath, databaseUrl, label } = parseArgs();
  const { db, sqlitePath } = openSqliteDatabase({ databaseUrl });
  try {
    const payload = buildExportBundle(db, {
      sqlitePath,
      databaseUrl: databaseUrl || process.env.DATABASE_URL || null,
      label,
    });
    if (writePath) {
      const resolved = writeJsonReport(writePath, payload);
      console.log(`Export bundle written to ${resolved}`);
    } else {
      console.log(JSON.stringify(payload, null, 2));
    }
  } finally {
    db.close();
  }
};

main();
