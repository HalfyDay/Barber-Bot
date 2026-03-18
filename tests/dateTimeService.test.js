const test = require("node:test");
const assert = require("node:assert/strict");

const { createDateTimeService } = require("../services/dateTimeService");

const service = createDateTimeService({
  normalizeText: (value) => (value ?? "").toString().trim(),
  timeZone: "Asia/Irkutsk",
});

test("parseTimeRangeParts normalizes time range", () => {
  assert.deepEqual(service.parseTimeRangeParts("9:00 — 18:30"), {
    start: "09:00",
    end: "18:30",
  });
});

test("parseZonedDateTime builds a valid zoned date", () => {
  const value = service.parseZonedDateTime("2026-03-17", "09:30");
  assert.ok(value instanceof Date);
  assert.equal(value.toISOString(), "2026-03-17T01:30:00.000Z");
});

test("parseAppointmentEndDateTime rolls over to next day when needed", () => {
  const value = service.parseAppointmentEndDateTime("2026-03-17", "23:30 - 00:15");
  assert.ok(value instanceof Date);
  assert.equal(value.toISOString(), "2026-03-17T16:15:00.000Z");
});

test("formatDateOnly returns date in configured timezone", () => {
  const value = service.formatDateOnly(new Date("2026-03-16T20:00:00.000Z"));
  assert.equal(value, "2026-03-17");
});

test("parseDateFilter falls back on invalid input", () => {
  const fallback = new Date("2026-03-01T00:00:00.000Z");
  const value = service.parseDateFilter("bad-date", fallback);
  assert.equal(value.toISOString(), fallback.toISOString());
});
