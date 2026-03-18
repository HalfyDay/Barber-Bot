const test = require("node:test");
const assert = require("node:assert/strict");

const { createBotUserService } = require("../services/botUserService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => (value ?? "").toString().replace(/[^\d+]/g, "");

const createHarness = (overrides = {}) => {
  const updates = [];
  const creates = [];
  const prisma = {
    appointments: {
      async findMany() {
        return [];
      },
    },
    users: {
      async update(payload) {
        updates.push(payload);
        return payload;
      },
      async create(payload) {
        creates.push(payload);
        return payload;
      },
    },
    ...(overrides.prisma || {}),
  };

  const service = createBotUserService({
    prisma,
    randomUUID: () => "uuid-1",
    normalizeText,
    normalizePhone,
    toTelegramIdNumber: (value) => Number(value),
    findAnyUserByTelegramId: async () => null,
    findAnyUserByPhone: async () => null,
    getHomeBookingSettings: async () => ({ bookingLimit: 2, minLeadHours: 2, maxDaysAhead: 14 }),
    getBarbers: async () => [],
    buildDateWindow: () => [],
    appointmentService: {
      getWorkingHoursForBarberDate: async () => null,
      getBusyIntervalsForBarberDate: async () => [],
      buildTimeSlotsForDate: () => [],
      isIsoDateKey: () => true,
    },
    formatDateOnly: (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    isActiveStatus: (status) => normalizeText(status).toLowerCase() === "active",
    isCompletedStatus: (status) => normalizeText(status).toLowerCase() === "done",
    normalizeAppointmentStatus: (status) => normalizeText(status).toLowerCase(),
    statusNoShow: "no_show",
    ...overrides,
    prisma,
  });

  return { service, updates, creates };
};

test("bot user service builds booking summary by telegram id", async () => {
  const { service } = createHarness({
    findAnyUserByTelegramId: async () => ({
      id: "user-1",
      TelegramID: "777",
    }),
    prisma: {
      appointments: {
        async findMany() {
          return [
            { Status: "active", Date: "2030-01-02" },
            { Status: "done", Date: "2030-01-03" },
            { Status: "no_show", Date: "2030-01-04" },
          ];
        },
      },
    },
  });

  const summary = await service.getUserBookingSummaryByTelegram("777");

  assert.equal(summary.userRecordId, "user-1");
  assert.equal(summary.activeAppointments, 1);
  assert.equal(summary.lastHaircutDate, "2030-01-03");
  assert.equal(summary.noShows, 1);
  assert.deepEqual(summary.lookupKeys, ["user-1", "777"]);
});

test("bot user service links phone owner to telegram account", async () => {
  const { service, updates } = createHarness({
    findAnyUserByPhone: async () => ({
      id: "user-2",
      TelegramID: null,
    }),
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
      },
    },
  });

  const summary = await service.registerOrUpdateBotUser({
    telegramId: "777",
    name: "Ivan",
    phone: "+7 (999) 000-00-00",
  });

  assert.equal(updates.length, 1);
  assert.deepEqual(updates[0], {
    where: { id: "user-2" },
    data: {
      TelegramID: 777,
      Name: "Ivan",
      Phone: "+79990000000",
    },
  });
  assert.equal(summary.activeAppointments, 0);
});

test("bot user service lists available times for barber and validates date", async () => {
  const { service } = createHarness({
    getBarbers: async () => [{ id: "barber-1", name: "Timur" }],
    buildDateWindow: () => [{ key: "2030-01-10" }],
    appointmentService: {
      getWorkingHoursForBarberDate: async () => [600, 1080],
      getBusyIntervalsForBarberDate: async () => [[720, 780]],
      buildTimeSlotsForDate: () => [{ start: "10:00", end: "10:45", label: "10:00 - 10:45" }],
      isIsoDateKey: (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
    },
  });

  const times = await service.listBotAvailabilityTimes({
    barberName: "Timur",
    dateKey: "2030-01-10",
    duration: "45",
  });

  assert.equal(times.barber.id, "barber-1");
  assert.deepEqual(times.times, [{ start: "10:00", end: "10:45", label: "10:00 - 10:45" }]);

  await assert.rejects(
    () =>
      service.listBotAvailabilityTimes({
        barberName: "Timur",
        dateKey: "bad-date",
        duration: "45",
      }),
    (error) => error?.code === "INVALID_DATE",
  );
});

