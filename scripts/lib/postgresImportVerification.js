const { IMPORT_TABLES } = require("./postgresImportBundle");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => {
  const raw = normalizeText(value);
  if (!raw) return "";
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? `+${digits}` : "";
};

const countDuplicateGroups = (rows, pickKey) => {
  const counts = new Map();
  for (const row of rows) {
    const key = pickKey(row);
    if (!key) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  let duplicates = 0;
  for (const count of counts.values()) {
    if (count > 1) duplicates += 1;
  }
  return duplicates;
};

const buildCountQuery = (tableName) => `SELECT COUNT(*)::int AS count FROM "public"."${tableName}"`;

const PHONE_SQL = `CASE
  WHEN regexp_replace(coalesce("Phone", ''), '[^0-9]', '', 'g') = '' THEN NULL
  ELSE '+' || regexp_replace(coalesce("Phone", ''), '[^0-9]', '', 'g')
END`;

const TELEGRAM_SQL = `NULLIF(BTRIM(CAST("TelegramID" AS TEXT)), '')`;

const buildVerificationQueries = () => ({
  duplicatePhones: `
    SELECT COUNT(*)::int AS count
    FROM (
      SELECT ${PHONE_SQL} AS normalized_phone
      FROM "public"."Users"
      GROUP BY 1
      HAVING ${PHONE_SQL} IS NOT NULL AND COUNT(*) > 1
    ) AS groups
  `,
  duplicateTelegramIds: `
    SELECT COUNT(*)::int AS count
    FROM (
      SELECT ${TELEGRAM_SQL} AS telegram_id
      FROM "public"."Users"
      GROUP BY 1
      HAVING ${TELEGRAM_SQL} IS NOT NULL AND COUNT(*) > 1
    ) AS groups
  `,
  appointmentsMissingUserReference: `
    SELECT COUNT(*)::int AS count
    FROM "public"."Appointments"
    WHERE NULLIF(BTRIM(COALESCE("UserID", '')), '') IS NULL
  `,
  incompleteSchedules: `
    SELECT COUNT(*)::int AS count
    FROM "public"."Schedules"
    WHERE NULLIF(BTRIM(COALESCE("Barber", '')), '') IS NULL
       OR NULLIF(BTRIM(COALESCE("Date", '')), '') IS NULL
  `,
});

const buildVerificationReport = ({ bundle, actualCounts, actualIssues }) => {
  const expectedCounts = bundle?.rowCounts || {};
  const bundleUsers = bundle?.tables?.Users || [];
  const bundleAppointments = bundle?.tables?.Appointments || [];
  const bundleSchedules = bundle?.tables?.Schedules || [];
  const expectedIssues = {
    duplicatePhones: bundleUsers.length
      ? countDuplicateGroups(bundleUsers, (row) => normalizePhone(row.Phone))
      : bundle?.issues?.duplicatePhones ?? null,
    duplicateTelegramIds: bundleUsers.length
      ? countDuplicateGroups(bundleUsers, (row) => normalizeText(row.TelegramID))
      : bundle?.issues?.duplicateTelegramIds ?? null,
    appointmentsMissingUserReference: bundleAppointments.length
      ? bundleAppointments.filter((row) => !normalizeText(row.UserID)).length
      : bundle?.issues?.appointmentsMissingUserReference ?? null,
    incompleteSchedules: bundleSchedules.length
      ? bundleSchedules.filter((row) => !normalizeText(row.Barber) || !normalizeText(row.Date)).length
      : (bundle?.cleanup?.summary?.incompleteSchedules ??
          (bundle?.issues?.schedulesMissingBarber || 0)) || 0,
  };

  const counts = {};
  const countMismatches = [];
  for (const tableName of IMPORT_TABLES) {
    const expected = Number(expectedCounts[tableName] ?? 0);
    const actual = Number(actualCounts[tableName] ?? 0);
    counts[tableName] = {
      expected,
      actual,
      matches: expected === actual,
    };
    if (expected !== actual) {
      countMismatches.push({
        table: tableName,
        expected,
        actual,
      });
    }
  }

  const issues = {};
  const issueMismatches = [];
  for (const [issueKey, expected] of Object.entries(expectedIssues)) {
    const actual = Number(actualIssues[issueKey] ?? 0);
    const safeExpected = Number(expected ?? 0);
    issues[issueKey] = {
      expected: safeExpected,
      actual,
      matches: safeExpected === actual,
    };
    if (safeExpected !== actual) {
      issueMismatches.push({
        issue: issueKey,
        expected: safeExpected,
        actual,
      });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    source: bundle?.source || null,
    counts,
    issues,
    readiness: {
      matchesBundle: !countMismatches.length && !issueMismatches.length,
      countMismatches,
      issueMismatches,
    },
  };
};

module.exports = {
  IMPORT_TABLES,
  buildCountQuery,
  buildVerificationQueries,
  buildVerificationReport,
  countDuplicateGroups,
  normalizePhone,
  normalizeText,
};
