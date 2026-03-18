const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildVerificationSummaryMarkdown,
} = require("../scripts/lib/postgresVerificationSummary");

test("postgres verification summary renders markdown for matches and mismatches", () => {
  const markdown = buildVerificationSummaryMarkdown({
    generatedAt: "2026-03-17T10:00:00.000Z",
    counts: {
      Users: { expected: 215, actual: 214, matches: false },
      Appointments: { expected: 286, actual: 286, matches: true },
    },
    issues: {
      duplicatePhones: { expected: 2, actual: 2, matches: true },
    },
    readiness: {
      matchesBundle: false,
      countMismatches: [{ table: "Users", expected: 215, actual: 214 }],
      issueMismatches: [],
    },
  });

  assert.match(markdown, /matchesBundle: no/);
  assert.match(markdown, /Users: expected=215, actual=214, matches=no/);
  assert.match(markdown, /Users: expected=215, actual=214/);
  assert.match(markdown, /Issue Mismatches/);
});
