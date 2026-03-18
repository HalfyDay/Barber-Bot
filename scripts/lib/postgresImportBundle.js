const path = require("path");

const {
  collectInventory,
  normalizePhone,
} = require("./postgresMigrationSupport");

const normalizeText = (value) => (value ?? "").toString().trim();

const IMPORT_TABLES = [
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

const LEGACY_TABLES = ["Cost"];

const readTableRows = (db, tableName) => {
  const columns = db.prepare(`PRAGMA table_info("${tableName}")`).all();
  if (!columns.length) return [];
  const hasId = columns.some((column) => normalizeText(column.name) === "id");
  const orderClause = hasId ? ' ORDER BY "id"' : " ORDER BY rowid";
  return db.prepare(`SELECT * FROM "${tableName}"${orderClause}`).all();
};

const buildPhoneIndex = (users) => {
  const index = new Map();
  for (const user of users) {
    const phone = normalizePhone(user.Phone);
    if (!phone) continue;
    if (!index.has(phone)) index.set(phone, []);
    index.get(phone).push(user);
  }
  return index;
};

const buildCleanupSnapshot = (users, appointments, schedules) => {
  const usersByPhone = buildPhoneIndex(users);

  const appointmentsMissingUserReference = appointments
    .filter((row) => !normalizeText(row.UserID))
    .map((row) => {
      const normalizedPhone = normalizePhone(row.Phone);
      const matchingUsersByPhone = normalizedPhone ? usersByPhone.get(normalizedPhone) || [] : [];
      const suggestedUserId = matchingUsersByPhone.length === 1 ? matchingUsersByPhone[0].id : null;
      return {
        id: row.id,
        customerName: row.CustomerName || null,
        phone: row.Phone || null,
        normalizedPhone: normalizedPhone || null,
        barber: row.Barber || null,
        date: row.Date || null,
        time: row.Time || null,
        status: row.Status || null,
        suggestedUserId,
        matchingUsersByPhone: matchingUsersByPhone.map((user) => ({
          id: user.id,
          name: user.Name || null,
          phone: user.Phone || null,
          telegramId: user.TelegramID ?? null,
          homeIsActive: user.HomeIsActive ?? null,
        })),
      };
    });

  const incompleteSchedules = schedules
    .filter((row) => !normalizeText(row.Barber) || !normalizeText(row.Date))
    .map((row) => ({
      id: row.id,
      barber: row.Barber || null,
      date: row.Date || null,
      dayOfWeek: row.DayOfWeek || null,
      week: row.Week || null,
      time: row.Time || null,
    }));

  return {
    summary: {
      appointmentsMissingUserReference: appointmentsMissingUserReference.length,
      appointmentsMissingUserReferenceWithSuggestion: appointmentsMissingUserReference.filter(
        (row) => row.suggestedUserId,
      ).length,
      incompleteSchedules: incompleteSchedules.length,
    },
    appointmentsMissingUserReference,
    incompleteSchedules,
  };
};

const buildExportBundle = (
  db,
  { sqlitePath, databaseUrl = null, label = null, relativeTo = process.cwd() } = {},
) => {
  const inventory = collectInventory(db, { sqlitePath, databaseUrl, label });

  const tables = {};
  for (const tableName of IMPORT_TABLES) {
    tables[tableName] = readTableRows(db, tableName);
  }

  const legacyTables = {};
  for (const tableName of LEGACY_TABLES) {
    legacyTables[tableName] = readTableRows(db, tableName);
  }

  const cleanup = buildCleanupSnapshot(
    tables.Users || [],
    tables.Appointments || [],
    tables.Schedules || [],
  );

  return {
    generatedAt: inventory.generatedAt,
    source: {
      ...inventory.source,
      relativeSqlitePath: sqlitePath ? path.relative(relativeTo, sqlitePath) : null,
    },
    importOrder: [...IMPORT_TABLES],
    rowCounts: inventory.counts,
    issues: inventory.issues,
    warnings: inventory.warnings,
    cleanup,
    tables,
    legacyTables,
  };
};

module.exports = {
  IMPORT_TABLES,
  LEGACY_TABLES,
  buildCleanupSnapshot,
  buildExportBundle,
  readTableRows,
};
