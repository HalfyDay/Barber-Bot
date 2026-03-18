const test = require("node:test");
const assert = require("node:assert/strict");

const {
  createAppointmentPresentationService,
} = require("../services/appointmentPresentationService");

const createService = () =>
  createAppointmentPresentationService({
    parseDateTime: (date, time) => new Date(`${date}T${time.slice(0, 5)}:00.000Z`),
    parseAppointmentEndDateTime: (date, time) => {
      const end = time.includes("-") ? time.split("-")[1].trim() : time.slice(0, 5);
      return new Date(`${date}T${end}:00.000Z`);
    },
    normalizeAppointmentStatus: (value) => (value || "").trim().toLowerCase(),
    isConfirmedStatus: (value) => value === "done",
    isActiveStatus: (value) => value === "active",
    isBlockedStatus: (value) => value === "cancelled" || value === "no_show",
    normalizePhone: (value) => (value || "").replace(/\D/g, ""),
    normalizeText: (value) => (value ?? "").toString().trim(),
    warningLookbackDays: 90,
    warningBlockThreshold: 3,
  });

test("appointment presentation service maps appointment flags and dates", () => {
  const service = createService();
  const mapped = service.mapAppointment({
    id: "appt-1",
    Date: "2026-03-17",
    Time: "09:00 - 10:00",
    Status: " active ",
    Phone: "+7 (999) 000-11-22",
  });

  assert.equal(mapped.Status, "active");
  assert.equal(mapped.isActive, true);
  assert.equal(mapped.isConfirmed, false);
  assert.equal(mapped.isBlocked, false);
  assert.equal(mapped.normalizedPhone, "79990001122");
  assert.equal(mapped.startDateTime, "2026-03-17T09:00:00.000Z");
  assert.equal(mapped.endDateTime, "2026-03-17T10:00:00.000Z");
});

test("appointment presentation service counts only recent blocked appointments", () => {
  const service = createService();
  const recentBlocked = {
    id: "a1",
    isBlocked: true,
    startDateTime: new Date().toISOString(),
  };
  const oldBlocked = {
    id: "a2",
    isBlocked: true,
    startDateTime: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  };

  assert.equal(service.countAppointmentWarnings([recentBlocked, oldBlocked]), 1);
});

test("appointment presentation service counts blocked clients with manual block override", () => {
  const service = createService();
  const appointments = [
    { id: "a1", UserID: "u1", isBlocked: true, startDateTime: new Date().toISOString() },
    { id: "a2", UserID: "u1", isBlocked: true, startDateTime: new Date().toISOString() },
    { id: "a3", UserID: "u1", isBlocked: true, startDateTime: new Date().toISOString() },
  ];

  assert.equal(service.countBlockedClientsFromAppointments(appointments, new Set(["u2"])), 2);
});

test("appointment presentation service splits active appointments into upcoming and overdue", () => {
  const service = createService();
  const now = new Date("2026-03-17T12:00:00.000Z");
  const buckets = service.splitActiveAppointments(
    [
      {
        id: "future",
        isActive: true,
        sortKey: new Date("2026-03-17T14:00:00.000Z").getTime(),
        endDateTime: "2026-03-17T15:00:00.000Z",
      },
      {
        id: "past",
        isActive: true,
        sortKey: new Date("2026-03-17T09:00:00.000Z").getTime(),
        endDateTime: "2026-03-17T10:00:00.000Z",
      },
    ],
    now,
  );

  assert.deepEqual(
    buckets.active.map((item) => item.id),
    ["future", "past"],
  );
  assert.deepEqual(
    buckets.upcoming.map((item) => item.id),
    ["future"],
  );
  assert.deepEqual(
    buckets.overdue.map((item) => item.id),
    ["past"],
  );
});
