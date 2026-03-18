const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const ACTIVE_STATUS_KEYS = new Set(["active", "активная"]);

const normalizeText = (value) => (value ?? "").toString().trim();

const normalizePhone = (value) => {
  const raw = normalizeText(value);
  if (!raw) return "";
  const digits = raw.replace(/[^\d]/g, "");
  if (!digits) return "";
  return `+${digits}`;
};

const normalizeStatusKey = (value) => normalizeText(value).toLowerCase();

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = { writePath: null, databaseUrl: null, label: null };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--write") {
      args.writePath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--database-url") {
      args.databaseUrl = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--label") {
      args.label = argv[index + 1] || null;
      index += 1;
    }
  }
  return args;
};

const resolveSqlitePath = ({
  databaseUrl = process.env.DATABASE_URL,
  snapshotPath = process.env.LEGACY_SQLITE_SNAPSHOT_PATH,
  cwd = process.cwd(),
} = {}) => {
  const normalizedUrl = normalizeText(databaseUrl);
  if (!normalizedUrl) {
    const explicitSnapshotPath = normalizeText(snapshotPath);
    if (!explicitSnapshotPath) {
      throw new Error(
        "SQLite snapshot path is required. Pass --database-url file:... or set LEGACY_SQLITE_SNAPSHOT_PATH.",
      );
    }
    return path.resolve(cwd, explicitSnapshotPath);
  }
  if (!normalizedUrl.startsWith("file:")) {
    throw new Error("Inventory script supports only SQLite file DATABASE_URL values.");
  }
  const filePath = normalizedUrl.slice("file:".length);
  if (path.isAbsolute(filePath)) return filePath;
  const direct = path.resolve(cwd, filePath);
  if (fs.existsSync(direct)) return direct;
  return path.resolve(cwd, "prisma", filePath.replace(/^[.][\\/]/, ""));
};

const openSqliteDatabase = ({ databaseUrl, snapshotPath, cwd } = {}) => {
  const sqlitePath = resolveSqlitePath({ databaseUrl, snapshotPath, cwd });
  return {
    sqlitePath,
    db: new Database(sqlitePath, { readonly: true }),
  };
};

const countTable = (db, tableName) => {
  try {
    const row = db.prepare(`SELECT COUNT(*) AS count FROM "${tableName}"`).get();
    return Number(row?.count || 0);
  } catch {
    return null;
  }
};

const tableExists = (db, tableName) => {
  const row = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name = ?")
    .get(tableName);
  return Boolean(row);
};

const countDuplicateValues = (rows, normalizer) => {
  const counts = new Map();
  for (const row of rows) {
    const key = normalizer(row);
    if (!key) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  let duplicates = 0;
  for (const value of counts.values()) {
    if (value > 1) duplicates += 1;
  }
  return duplicates;
};

const collectInventory = (
  db,
  { sqlitePath, databaseUrl = process.env.DATABASE_URL, label = null } = {},
) => {
  const counts = {};
  const tableNames = [
    "Users",
    "Appointments",
    "Schedules",
    "Cost",
    "Barbers",
    "Positions",
    "Services",
    "ServicePrices",
    "BotSettings",
    "BotMessages",
    "TelegramAuthRequests",
  ];
  for (const tableName of tableNames) {
    counts[tableName] = countTable(db, tableName);
  }

  const users = tableExists(db, "Users")
    ? db.prepare('SELECT "id", "Phone", "TelegramID" FROM "Users"').all()
    : [];
  const appointments = tableExists(db, "Appointments")
    ? db.prepare('SELECT "id", "Barber", "Date", "Time", "Status", "UserID" FROM "Appointments"').all()
    : [];
  const schedules = tableExists(db, "Schedules")
    ? db.prepare('SELECT "id", "Barber", "Date" FROM "Schedules"').all()
    : [];
  const barbers = tableExists(db, "Barbers")
    ? db.prepare('SELECT "id", "name" FROM "Barbers"').all()
    : [];
  const services = tableExists(db, "Services")
    ? db.prepare('SELECT "id", "name" FROM "Services"').all()
    : [];
  const servicePrices = tableExists(db, "ServicePrices")
    ? db.prepare('SELECT "id", "serviceId", "barberId" FROM "ServicePrices"').all()
    : [];

  const barberIds = new Set(barbers.map((row) => normalizeText(row.id)).filter(Boolean));
  const serviceIds = new Set(services.map((row) => normalizeText(row.id)).filter(Boolean));

  const activeSlotCounts = new Map();
  for (const appointment of appointments) {
    if (!ACTIVE_STATUS_KEYS.has(normalizeStatusKey(appointment.Status))) continue;
    const barber = normalizeText(appointment.Barber);
    const date = normalizeText(appointment.Date);
    const time = normalizeText(appointment.Time);
    if (!barber || !date || !time) continue;
    const key = `${barber}__${date}__${time}`;
    activeSlotCounts.set(key, (activeSlotCounts.get(key) || 0) + 1);
  }

  let duplicateActiveSlots = 0;
  for (const value of activeSlotCounts.values()) {
    if (value > 1) duplicateActiveSlots += 1;
  }

  const issues = {
    usersWithoutPhone: users.filter((row) => !normalizePhone(row.Phone)).length,
    usersWithoutTelegramId: users.filter((row) => !normalizeText(row.TelegramID)).length,
    duplicatePhones: countDuplicateValues(users, (row) => normalizePhone(row.Phone)),
    duplicateTelegramIds: countDuplicateValues(users, (row) => normalizeText(row.TelegramID)),
    appointmentsMissingBarber: appointments.filter((row) => !normalizeText(row.Barber)).length,
    appointmentsMissingDate: appointments.filter((row) => !normalizeText(row.Date)).length,
    appointmentsMissingTime: appointments.filter((row) => !normalizeText(row.Time)).length,
    appointmentsMissingUserReference: appointments.filter((row) => !normalizeText(row.UserID)).length,
    duplicateActiveSlots,
    schedulesMissingBarber: schedules.filter((row) => !normalizeText(row.Barber)).length,
    schedulesMissingDate: schedules.filter((row) => !normalizeText(row.Date)).length,
    barbersMissingName: barbers.filter((row) => !normalizeText(row.name)).length,
    servicesMissingName: services.filter((row) => !normalizeText(row.name)).length,
    servicePricesMissingBarber: servicePrices.filter((row) => !barberIds.has(normalizeText(row.barberId))).length,
    servicePricesMissingService: servicePrices.filter((row) => !serviceIds.has(normalizeText(row.serviceId))).length,
  };

  const warnings = [];
  if (issues.duplicatePhones) warnings.push("Users contain duplicate normalized phone numbers.");
  if (issues.duplicateTelegramIds) warnings.push("Users contain duplicate TelegramID values.");
  if (issues.duplicateActiveSlots) warnings.push("Appointments contain duplicate active slot combinations.");
  if (issues.servicePricesMissingBarber || issues.servicePricesMissingService) {
    warnings.push("ServicePrices contain rows with missing related barber or service.");
  }

  return {
    generatedAt: new Date().toISOString(),
    source: {
      label: label || null,
      databaseUrl: databaseUrl || null,
      sqlitePath,
    },
    counts,
    issues,
    warnings,
  };
};

const writeJsonReport = (targetPath, payload) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return resolved;
};

module.exports = {
  collectInventory,
  normalizePhone,
  openSqliteDatabase,
  parseArgs,
  resolveSqlitePath,
  writeJsonReport,
};
