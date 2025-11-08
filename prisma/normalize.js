/**
 * fix-users.js
 *  /     Users.
 *
 * -   dev.db -> dev.db.backup.TIMESTAMP.db
 * -   TelegramID / LastNameChanged / Barber     
 * -    fix-users.report.txt
 *
 * :
 *   node fix-users.js
 *
 * :    ,     .
 */
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");
const SRC = path.resolve(__dirname, "dev.db");
if (!fs.existsSync(SRC)) {
  console.error(" dev.db     :", SRC);
  process.exit(1);
}
const BACKUP = path.resolve(
  __dirname,
  `dev.db.backup.${new Date().toISOString().replace(/[:.]/g, "-")}.db`,
);
fs.copyFileSync(SRC, BACKUP);
console.log(" :", BACKUP);
const db = new Database(SRC);
//   Barber (       emoji,   @map)
const ALLOWED_BARBERS = new Set(["", "", "", ""]);
function tryToParseDateToISO(s) {
  if (!s) return null;
  const raw = String(s).trim();
  // 1)   ISO-ish ->    (    ISO)
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    //     ->  T00:00:00Z
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw + "T00:00:00Z";
    //    Date
    const dt = new Date(raw);
    if (!isNaN(dt.getTime())) return dt.toISOString();
    return null;
  }
  // 2)  DD.MM.YYYY
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(raw)) {
    const [d, m, y] = raw.split(".");
    return `${y}-${m}-${d}T00:00:00Z`;
  }
  // 3)   JS Date
  const dt = new Date(raw);
  if (!isNaN(dt.getTime())) return dt.toISOString();
  //
  return null;
}
function normalizeTelegramId(val) {
  if (val === null || val === undefined) return null;
  const s = String(val).trim();
  if (s.length === 0) return null;
  //   -
  const digits = s.replace(/\D/g, "");
  if (digits.length === 0) return null;
  // Telegram IDs    signed 64-bit;   ,
  //   ,       (INTEGER)
  //       NULL ()
  if (digits.length > 18) {
    // :  NULL
    return null;
  }
  return BigInt(digits).toString(); // string of integer, compatible with INTEGER storage
}
//
const reportLines = [];
reportLines.push(`fix-users report - ${new Date().toISOString()}`);
reportLines.push(`Source DB: ${SRC}`);
reportLines.push(`Backup created at: ${BACKUP}`);
reportLines.push("---");
const users = db.prepare("SELECT * FROM Users").all();
reportLines.push(`Total users found: ${users.length}`);
const updates = [];
for (const u of users) {
  const orig = {
    id: u.id,
    TelegramID: u.TelegramID,
    LastNameChanged: u.LastNameChanged,
    Barber: u.Barber,
  };
  let changed = false;
  const newValues = {};
  // TelegramID
  const normalizedTG = normalizeTelegramId(u.TelegramID);
  // compare as strings (null vs '12345')
  if (
    (normalizedTG === null &&
      u.TelegramID !== null &&
      u.TelegramID !== undefined &&
      String(u.TelegramID).trim() !== "") ||
    (normalizedTG !== null &&
      String(u.TelegramID).trim() !== String(normalizedTG))
  ) {
    newValues.TelegramID = normalizedTG;
    changed = true;
  }
  // LastNameChanged -> ISO or null
  const normalizedDate = tryToParseDateToISO(u.LastNameChanged);
  // if original is falsy and normalizedDate is null -> no change
  if (normalizedDate !== null) {
    // if parsed ISO differs from stored string -> update
    if (String(u.LastNameChanged || "").trim() !== String(normalizedDate)) {
      newValues.LastNameChanged = normalizedDate;
      changed = true;
    }
  } else {
    //    ,        (NULL),  Prisma
    if (
      u.LastNameChanged !== null &&
      u.LastNameChanged !== undefined &&
      String(u.LastNameChanged).trim() !== ""
    ) {
      newValues.LastNameChanged = null;
      changed = true;
    }
  }
  // Barber     ,  NULL
  if (
    u.Barber !== null &&
    u.Barber !== undefined &&
    String(u.Barber).trim() !== ""
  ) {
    if (!ALLOWED_BARBERS.has(u.Barber)) {
      newValues.Barber = null;
      changed = true;
    }
  }
  if (changed) updates.push({ id: u.id, newValues, orig });
}
//
if (updates.length === 0) {
  reportLines.push("No updates necessary     .");
} else {
  reportLines.push(`Updating ${updates.length} user(s).`);
  const tx = db.transaction((rows) => {
    const stmt = db.prepare(
      "UPDATE Users SET TelegramID = @TelegramID, LastNameChanged = @LastNameChanged, Barber = @Barber WHERE id = @id",
    );
    for (const r of rows) {
      //  ,
      const param = {
        id: r.id,
        TelegramID:
          r.newValues.TelegramID !== undefined
            ? r.newValues.TelegramID
            : r.orig.TelegramID,
        LastNameChanged:
          r.newValues.LastNameChanged !== undefined
            ? r.newValues.LastNameChanged
            : r.orig.LastNameChanged,
        Barber:
          r.newValues.Barber !== undefined ? r.newValues.Barber : r.orig.Barber,
      };
      stmt.run(param);
      reportLines.push(
        `User ${r.id} updated. Orig: ${JSON.stringify(r.orig)} -> New partial: ${JSON.stringify(r.newValues)}`,
      );
    }
  });
  try {
    tx(updates);
    reportLines.push("All updates applied successfully.");
  } catch (e) {
    reportLines.push("ERROR while applying updates: " + String(e));
  }
}
//
const reportPath = path.resolve(__dirname, "fix-users.report.txt");
fs.writeFileSync(reportPath, reportLines.join("\n"), "utf8");
console.log(".   ", reportPath);
console.log(":     `npx prisma generate`     Prisma-.");
db.close();
