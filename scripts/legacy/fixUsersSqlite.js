/**
 * Legacy SQLite repair helper for historical snapshots.
 *
 * - creates snapshot.backup.TIMESTAMP.db next to the source file
 * - normalizes TelegramID / LastNameChanged / Barber fields
 * - writes fix-users.report.txt next to the source file
 *
 * Usage:
 *   node scripts/legacy/fixUsersSqlite.js --sqlite-path path/to/snapshot.db
 *   LEGACY_SQLITE_SNAPSHOT_PATH=path/to/snapshot.db node scripts/legacy/fixUsersSqlite.js
 */
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = { sqlitePath: null };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--sqlite-path") {
      args.sqlitePath = argv[index + 1] || null;
      index += 1;
    }
  }
  return args;
};

const { sqlitePath } = parseArgs();
const SRC = path.resolve(
  process.cwd(),
  sqlitePath || process.env.LEGACY_SQLITE_SNAPSHOT_PATH || "",
);

if (!sqlitePath && !process.env.LEGACY_SQLITE_SNAPSHOT_PATH) {
  console.error("SQLite snapshot path is required. Use --sqlite-path or LEGACY_SQLITE_SNAPSHOT_PATH.");
  process.exit(1);
}

if (!fs.existsSync(SRC)) {
  console.error("SQLite snapshot not found:", SRC);
  process.exit(1);
}

const BACKUP = path.resolve(
  path.dirname(SRC),
  `${path.basename(SRC, path.extname(SRC))}.backup.${new Date().toISOString().replace(/[:.]/g, "-")}.db`,
);

fs.copyFileSync(SRC, BACKUP);
console.log("Backup created:", BACKUP);

const db = new Database(SRC);

// Keep only known barber values in legacy snapshots.
const ALLOWED_BARBERS = new Set(["", "", "", ""]);

function tryToParseDateToISO(value) {
  if (!value) return null;
  const raw = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return `${raw}T00:00:00Z`;
    const date = new Date(raw);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
    return null;
  }
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(raw)) {
    const [day, month, year] = raw.split(".");
    return `${year}-${month}-${day}T00:00:00Z`;
  }
  const date = new Date(raw);
  if (!Number.isNaN(date.getTime())) return date.toISOString();
  return null;
}

function normalizeTelegramId(value) {
  if (value === null || value === undefined) return null;
  const text = String(value).trim();
  if (!text) return null;
  const digits = text.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.length > 18) return null;
  return BigInt(digits).toString();
}

const reportLines = [];
reportLines.push(`fix-users report - ${new Date().toISOString()}`);
reportLines.push(`Source DB: ${SRC}`);
reportLines.push(`Backup created at: ${BACKUP}`);
reportLines.push("---");

const users = db.prepare("SELECT * FROM Users").all();
reportLines.push(`Total users found: ${users.length}`);

const updates = [];

for (const user of users) {
  const original = {
    id: user.id,
    TelegramID: user.TelegramID,
    LastNameChanged: user.LastNameChanged,
    Barber: user.Barber,
  };
  let changed = false;
  const nextValues = {};

  const normalizedTelegramId = normalizeTelegramId(user.TelegramID);
  if (
    (normalizedTelegramId === null &&
      user.TelegramID !== null &&
      user.TelegramID !== undefined &&
      String(user.TelegramID).trim() !== "") ||
    (normalizedTelegramId !== null &&
      String(user.TelegramID).trim() !== String(normalizedTelegramId))
  ) {
    nextValues.TelegramID = normalizedTelegramId;
    changed = true;
  }

  const normalizedDate = tryToParseDateToISO(user.LastNameChanged);
  if (normalizedDate !== null) {
    if (String(user.LastNameChanged || "").trim() !== String(normalizedDate)) {
      nextValues.LastNameChanged = normalizedDate;
      changed = true;
    }
  } else if (
    user.LastNameChanged !== null &&
    user.LastNameChanged !== undefined &&
    String(user.LastNameChanged).trim() !== ""
  ) {
    nextValues.LastNameChanged = null;
    changed = true;
  }

  if (
    user.Barber !== null &&
    user.Barber !== undefined &&
    String(user.Barber).trim() !== "" &&
    !ALLOWED_BARBERS.has(user.Barber)
  ) {
    nextValues.Barber = null;
    changed = true;
  }

  if (changed) {
    updates.push({ id: user.id, nextValues, original });
  }
}

if (updates.length === 0) {
  reportLines.push("No updates were required.");
} else {
  reportLines.push(`Updating ${updates.length} user(s).`);
  const transaction = db.transaction((rows) => {
    const statement = db.prepare(
      "UPDATE Users SET TelegramID = @TelegramID, LastNameChanged = @LastNameChanged, Barber = @Barber WHERE id = @id",
    );
    for (const row of rows) {
      const payload = {
        id: row.id,
        TelegramID:
          row.nextValues.TelegramID !== undefined
            ? row.nextValues.TelegramID
            : row.original.TelegramID,
        LastNameChanged:
          row.nextValues.LastNameChanged !== undefined
            ? row.nextValues.LastNameChanged
            : row.original.LastNameChanged,
        Barber:
          row.nextValues.Barber !== undefined ? row.nextValues.Barber : row.original.Barber,
      };
      statement.run(payload);
      reportLines.push(
        `User ${row.id} updated. Orig: ${JSON.stringify(row.original)} -> New partial: ${JSON.stringify(row.nextValues)}`,
      );
    }
  });
  try {
    transaction(updates);
    reportLines.push("All updates applied successfully.");
  } catch (error) {
    reportLines.push(`ERROR while applying updates: ${String(error)}`);
  }
}

const reportPath = path.resolve(path.dirname(SRC), "fix-users.report.txt");
fs.writeFileSync(reportPath, reportLines.join("\n"), "utf8");
console.log("Report written to:", reportPath);
console.log("If Prisma schema changed, regenerate the client separately.");

db.close();
