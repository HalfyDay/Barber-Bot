const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

test("postgres report diff compares counts and issues between two reports", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "barber-bot-report-diff-"));
  const leftPath = path.join(tempDir, "left.json");
  const rightPath = path.join(tempDir, "right.json");

  fs.writeFileSync(
    leftPath,
    JSON.stringify(
      {
        source: { label: "local", sqlitePath: "D:/local.db" },
        counts: { Users: 10, Appointments: 20 },
        issues: { duplicatePhones: 1, duplicateTelegramIds: 0 },
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    rightPath,
    JSON.stringify(
      {
        source: { label: "server", sqlitePath: "D:/server.db" },
        counts: { Users: 12, Appointments: 18 },
        issues: { duplicatePhones: 2, duplicateTelegramIds: 3 },
      },
      null,
      2,
    ),
  );

  const result = spawnSync(
    process.execPath,
    [
      "scripts/postgresReportDiff.js",
      "--left",
      leftPath,
      "--right",
      rightPath,
    ],
    {
      cwd: path.resolve(__dirname, ".."),
      encoding: "utf8",
    },
  );

  assert.equal(result.status, 0, result.stderr);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.left.label, "local");
  assert.equal(payload.right.label, "server");
  assert.deepEqual(
    payload.counts.find((item) => item.key === "Users"),
    { key: "Users", left: 10, right: 12, delta: 2 },
  );
  assert.deepEqual(
    payload.issues.find((item) => item.key === "duplicateTelegramIds"),
    { key: "duplicateTelegramIds", left: 0, right: 3, delta: 3 },
  );
});
