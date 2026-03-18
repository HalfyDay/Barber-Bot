const test = require("node:test");
const assert = require("node:assert/strict");

const { parseArgs } = require("../scripts/postgresSanitizeBundle");
const { sanitizeBundle, sanitizeTableRows } = require("../scripts/lib/postgresBundleSanitizer");

test("postgres sanitize bundle parses cli args", () => {
  const args = parseArgs([
    "--bundle",
    "docs/reports/server-postgres-export-bundle.json",
    "--write-bundle",
    "docs/reports/server-postgres-export-bundle-sanitized.json",
    "--write-report",
    "docs/reports/server-postgres-bundle-sanitization.json",
    "--fail-on-conflict",
  ]);

  assert.deepEqual(args, {
    bundlePath: "docs/reports/server-postgres-export-bundle.json",
    writeBundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writeReportPath: "docs/reports/server-postgres-bundle-sanitization.json",
    failOnConflict: true,
  });
});

test("postgres sanitize bundle removes exact duplicate id rows", () => {
  const result = sanitizeTableRows("Users", [
    { id: "u1", Name: "Ivan", Phone: "123" },
    { id: "u1", Name: "Ivan", Phone: "123" },
    { id: "u2", Name: "Petr", Phone: "456" },
  ]);

  assert.equal(result.rows.length, 2);
  assert.equal(result.report.removedExactDuplicateRows, 1);
  assert.equal(result.report.conflictingDuplicateGroups, 0);
});

test("postgres sanitize bundle reports conflicting duplicate id rows", () => {
  const result = sanitizeTableRows("Users", [
    { id: "u1", Name: "Ivan", Phone: "123" },
    { id: "u1", Name: "Ivan", Phone: "456" },
  ]);

  assert.equal(result.rows.length, 1);
  assert.equal(result.report.removedExactDuplicateRows, 0);
  assert.equal(result.report.conflictingDuplicateGroups, 1);
  assert.equal(result.report.conflictingDuplicateIds[0].id, "u1");
});

test("postgres sanitize bundle updates bundle row counts and summary", () => {
  const { bundle, report } = sanitizeBundle({
    rowCounts: {
      Users: 3,
      Appointments: 2,
    },
    tables: {
      Users: [
        { id: "u1", Name: "Ivan" },
        { id: "u1", Name: "Ivan" },
        { id: "u2", Name: "Petr" },
      ],
      Appointments: [
        { id: "a1", CustomerName: "A" },
        { id: "a2", CustomerName: "B" },
      ],
    },
  });

  assert.equal(bundle.rowCounts.Users, 2);
  assert.equal(bundle.tables.Users.length, 2);
  assert.equal(report.summary.removedExactDuplicateRows, 1);
  assert.equal(report.summary.safeToImport, true);
});
