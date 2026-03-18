const test = require("node:test");
const assert = require("node:assert/strict");

const { createBookingUtilityService } = require("../services/bookingUtilityService");
const { createResponseMock } = require("./routeTestUtils");

const service = createBookingUtilityService({
  normalizeText: (value) => (value ?? "").toString().trim(),
  canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
  toWindows1251Mojibake: (value) => value,
  getTimeZoneParts: () => ({ year: "2026", month: "03", day: "17" }),
  formatDateOnly: (date) => date.toISOString().slice(0, 10),
  timeZone: "Asia/Irkutsk",
  statusActive: "active",
  statusDone: "done",
  statusCancelled: "cancelled",
  statusNoShow: "no_show",
  supportedAppointmentStatuses: ["active", "done", "cancelled", "no_show"],
  numericFields: {
    Services: ["duration", "orderIndex"],
  },
  booleanFields: {
    Services: ["isActive"],
  },
});

test("booking utility service normalizes appointment statuses and supported values", () => {
  assert.equal(service.normalizeAppointmentStatus("Подтверждена"), "active");
  assert.equal(service.normalizeAppointmentStatus("done"), "done");
  assert.equal(service.resolveSupportedStatus("DONE"), "done");
  assert.equal(service.resolveSupportedStatus("unknown"), null);
});

test("booking utility service parses telegram id and date window", () => {
  assert.equal(service.toTelegramIdNumber("12345"), 12345);
  assert.equal(service.toTelegramIdNumber("abc"), null);
  assert.equal(service.buildDateWindow(2).length, 2);
});

test("booking utility service coerces payload types", () => {
  const payload = service.coercePayload("Services", {
    duration: "45",
    orderIndex: "",
    isActive: "true",
  });

  assert.deepEqual(payload, {
    duration: 45,
    orderIndex: null,
    isActive: true,
  });
});

test("booking utility service maps appointment domain errors to http response", () => {
  const res = createResponseMock();
  const handled = service.respondWithAppointmentDomainError(res, {
    code: "SLOT_TAKEN",
  });

  assert.equal(handled, true);
  assert.equal(res.statusCode, 409);
  assert.equal(res.body.error, "Слот уже занят. Выберите другое время.");
});
