#!/usr/bin/env node

require("dotenv").config();

const {
  normalizePhone,
  openSqliteDatabase,
  parseArgs,
  writeJsonReport,
} = require("./lib/postgresMigrationSupport");

const normalizeText = (value) => (value ?? "").toString().trim();

const buildPhoneIndex = (rows) => {
  const index = new Map();
  for (const row of rows) {
    const phone = normalizePhone(row.Phone);
    if (!phone) continue;
    if (!index.has(phone)) index.set(phone, []);
    index.get(phone).push(row);
  }
  return index;
};

const main = () => {
  const { writePath, databaseUrl, label } = parseArgs();
  const { db, sqlitePath } = openSqliteDatabase({ databaseUrl });
  try {
    const users = db
      .prepare('SELECT "id", "Name", "Phone", "TelegramID", "HomeIsActive" FROM "Users"')
      .all();
    const appointments = db
      .prepare(
        'SELECT "id", "CustomerName", "Phone", "Barber", "Date", "Time", "Status", "UserID" FROM "Appointments"',
      )
      .all();
    const schedules = db
      .prepare('SELECT "id", "Barber", "Date", "DayOfWeek", "Week", "Time" FROM "Schedules"')
      .all();

    const usersByPhone = buildPhoneIndex(users);

    const appointmentsMissingUserReference = appointments
      .filter((row) => !normalizeText(row.UserID))
      .map((row) => {
        const phone = normalizePhone(row.Phone);
        const candidates = phone ? usersByPhone.get(phone) || [] : [];
        return {
          id: row.id,
          customerName: row.CustomerName || null,
          phone: row.Phone || null,
          normalizedPhone: phone || null,
          barber: row.Barber || null,
          date: row.Date || null,
          time: row.Time || null,
          status: row.Status || null,
          matchingUsersByPhone: candidates.map((user) => ({
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

    const payload = {
      generatedAt: new Date().toISOString(),
      source: {
        label: label || null,
        databaseUrl: databaseUrl || process.env.DATABASE_URL || null,
        sqlitePath,
      },
      summary: {
        appointmentsMissingUserReference: appointmentsMissingUserReference.length,
        incompleteSchedules: incompleteSchedules.length,
      },
      appointmentsMissingUserReference,
      incompleteSchedules,
    };

    if (writePath) {
      const resolved = writeJsonReport(writePath, payload);
      console.log(`Cleanup report written to ${resolved}`);
    } else {
      console.log(JSON.stringify(payload, null, 2));
    }
  } finally {
    db.close();
  }
};

main();
