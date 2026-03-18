const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildCleanupBacklog,
  parseArgs,
} = require("../scripts/postgresCleanupBacklog");

test("postgres cleanup backlog parses cli args", () => {
  const args = parseArgs([
    "--inventory",
    "docs/reports/inventory.json",
    "--duplicates",
    "docs/reports/duplicates.json",
    "--cleanup",
    "docs/reports/cleanup.json",
    "--write",
    "docs/reports/backlog.md",
    "--title",
    "Server Cleanup Backlog",
  ]);

  assert.deepEqual(args, {
    inventoryPath: "docs/reports/inventory.json",
    duplicatesPath: "docs/reports/duplicates.json",
    cleanupPath: "docs/reports/cleanup.json",
    writePath: "docs/reports/backlog.md",
    title: "Server Cleanup Backlog",
  });
});

test("postgres cleanup backlog renders production cleanup summary", () => {
  const output = buildCleanupBacklog({
    title: "Server Cleanup Backlog",
    inventory: {
      generatedAt: "2026-03-17T10:00:00.000Z",
      issues: {
        duplicateActiveSlots: 0,
        servicePricesMissingBarber: 0,
        servicePricesMissingService: 0,
      },
    },
    duplicates: {
      duplicatePhones: [
        {
          key: "+79990000000",
          users: [
            { id: "user-1", Phone: "79990000000" },
            { id: "user-2", Phone: "79990000000" },
          ],
        },
      ],
      duplicateTelegramIds: [
        {
          key: "123",
          users: [
            { id: "user-3", Phone: "" },
            { id: "user-4", Phone: "79990000001" },
          ],
        },
      ],
    },
    cleanup: {
      appointmentsMissingUserReference: [
        {
          id: "appt-1",
          normalizedPhone: null,
          matchingUsersByPhone: [],
          suggestedUserId: null,
          customerName: "No Phone",
        },
        {
          id: "appt-2",
          normalizedPhone: "+79990000002",
          matchingUsersByPhone: [],
          suggestedUserId: null,
          customerName: "No Match",
        },
        {
          id: "appt-3",
          normalizedPhone: "+79990000003",
          matchingUsersByPhone: [{ id: "user-7" }],
          suggestedUserId: "user-7",
          customerName: "Single Match",
        },
      ],
      incompleteSchedules: [
        {
          id: "schedule-1",
          barber: null,
          date: null,
          week: "17:00-20:00",
        },
      ],
    },
  });

  assert.match(output, /Duplicate phones: 1/);
  assert.match(output, /Appointments without UserID: 3/);
  assert.match(output, /Appointments without UserID and without phone: 1/);
  assert.match(output, /With single candidate user: 1/);
  assert.match(output, /appt-3: \+79990000003 -> user-7/);
  assert.match(output, /schedule-1: barber=null, date=null, week=17:00-20:00/);
});
