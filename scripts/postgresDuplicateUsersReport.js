#!/usr/bin/env node

require("dotenv").config();

const {
  normalizePhone,
  openSqliteDatabase,
  parseArgs,
  writeJsonReport,
} = require("./lib/postgresMigrationSupport");

const normalizeText = (value) => (value ?? "").toString().trim();

const buildDuplicateGroups = (rows, keyBuilder) => {
  const groups = new Map();
  for (const row of rows) {
    const key = keyBuilder(row);
    if (!key) continue;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  return Array.from(groups.entries())
    .filter(([, items]) => items.length > 1)
    .map(([key, items]) => ({
      key,
      count: items.length,
      users: items,
    }));
};

const main = () => {
  const { writePath, databaseUrl, label } = parseArgs();
  const { db, sqlitePath } = openSqliteDatabase({ databaseUrl });
  try {
    const rows = db
      .prepare(
        'SELECT "id", "Name", "Phone", "TelegramID", "HomeIsActive", "HomeLastLoginAt" FROM "Users"',
      )
      .all();

    const payload = {
      generatedAt: new Date().toISOString(),
      source: {
        label: label || null,
        databaseUrl: databaseUrl || process.env.DATABASE_URL || null,
        sqlitePath,
      },
      duplicatePhones: buildDuplicateGroups(rows, (row) => normalizePhone(row.Phone)),
      duplicateTelegramIds: buildDuplicateGroups(rows, (row) => normalizeText(row.TelegramID)),
    };

    if (writePath) {
      const resolved = writeJsonReport(writePath, payload);
      console.log(`Duplicate report written to ${resolved}`);
    } else {
      console.log(JSON.stringify(payload, null, 2));
    }
  } finally {
    db.close();
  }
};

main();
