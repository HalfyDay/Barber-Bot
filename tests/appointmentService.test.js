const test = require("node:test");
const assert = require("node:assert/strict");

const { createAppointmentService } = require("../services/appointmentService");

const normalizeText = (value) => (value ?? "").toString().trim();
const isActiveStatus = (status) => normalizeText(status) === "Активная";

const createMockPrisma = ({
  scheduleWeek = "09:00-18:00",
  appointments = [],
} = {}) => {
  const rows = appointments.map((row) => ({ ...row }));
  const prisma = {
    schedules: {
      async findFirst({ where }) {
        if (!scheduleWeek) return null;
        if (where?.Barber && where?.Date) {
          return { Week: scheduleWeek };
        }
        return null;
      },
    },
    appointments: {
      async findMany({ where }) {
        return rows.filter((row) => {
          if (where?.Barber && row.Barber !== where.Barber) return false;
          if (where?.Date && row.Date !== where.Date) return false;
          if (where?.UserID && row.UserID !== where.UserID) return false;
          if (where?.id?.not && row.id === where.id.not) return false;
          return true;
        });
      },
      async create({ data }) {
        rows.push({ ...data });
        return { ...data };
      },
    },
  };
  prisma.$transaction = async (runner) => runner(prisma);
  return prisma;
};

const createService = (options = {}) =>
  createAppointmentService({
    prisma: createMockPrisma(options),
    dbPath: "unused.db",
    timeZone: "UTC",
    randomUUID: () => "test-id",
    normalizeText,
    normalizePhone: normalizeText,
    isActiveStatus,
  });

test("resolveBookableServicesForBarber uses barber id price map", () => {
  const service = createService();
  const result = service.resolveBookableServicesForBarber(
    [
      {
        id: "svc-1",
        name: "Haircut",
        duration: 60,
        prices: { "barber-1": 1500, "barber-2": 0 },
      },
      {
        id: "svc-2",
        name: "Beard",
        duration: 30,
        prices: { "barber-2": 900 },
      },
    ],
    "barber-1",
  );

  assert.deepEqual(result, [
    {
      id: "svc-1",
      name: "Haircut",
      description: "",
      duration: 60,
      price: 1500,
    },
  ]);
});

test("buildTimeSlotsForDate respects lead time and busy intervals", () => {
  const service = createService();
  const slots = service.buildTimeSlotsForDate({
    dateKey: "2026-03-20",
    workingHours: [9 * 60, 12 * 60],
    busyIntervals: [[10 * 60, 11 * 60]],
    totalDuration: 60,
    minAllowedDate: new Date("2026-03-20T09:30:00Z"),
  });

  assert.deepEqual(slots, [
    {
      start: "11:00",
      end: "12:00",
      label: "11:00 - 12:00",
    },
  ]);
});

test("validateAppointmentRecord rejects occupied slots for active appointments", async () => {
  const service = createService({
    appointments: [
      {
        id: "busy-1",
        Barber: "Alex",
        Date: "2026-03-20",
        Time: "10:00 - 11:00",
        Status: "Активная",
      },
    ],
  });

  await assert.rejects(
    service.validateAppointmentRecord({
      id: "new-1",
      Barber: "Alex",
      Date: "2026-03-20",
      Time: "10:00 - 11:00",
      Status: "Активная",
    }),
    (error) => error?.code === "SLOT_TAKEN",
  );
});

test("validateAppointmentRecord allows updating the same appointment when excluded", async () => {
  const service = createService({
    appointments: [
      {
        id: "same-id",
        Barber: "Alex",
        Date: "2026-03-20",
        Time: "10:00 - 11:00",
        Status: "Активная",
      },
    ],
  });

  const result = await service.validateAppointmentRecord(
    {
      id: "same-id",
      Barber: "Alex",
      Date: "2026-03-20",
      Time: "10:00 - 11:00",
      Status: "Активная",
    },
    { excludeAppointmentId: "same-id" },
  );

  assert.deepEqual(result.appointmentRange, [10 * 60, 11 * 60]);
});

test("validateAppointmentRecord skips validation for non-active statuses", async () => {
  const service = createService({
    scheduleWeek: null,
  });

  const result = await service.validateAppointmentRecord({
    Barber: "Alex",
    Date: "bad-date",
    Time: "invalid",
    Status: "Отмена",
  });

  assert.deepEqual(result, { mode: "skip" });
});

test("createHomeAppointment writes through prisma transaction", async () => {
  const service = createService({
    appointments: [
      {
        id: "existing-1",
        UserID: "user-2",
        Barber: "Alex",
        Date: "2026-03-20",
        Time: "12:00 - 13:00",
        Status: "РђРєС‚РёРІРЅР°СЏ",
      },
    ],
  });

  const created = await service.createHomeAppointment({
    homeUser: {
      id: "user-1",
      displayName: "Ivan",
      phone: "+79990000000",
    },
    barber: {
      id: "barber-1",
      name: "Alex",
    },
    dateKey: "2026-03-20",
    startMinute: 10 * 60,
    totalDuration: 60,
    selectedServices: [{ id: "svc-1", name: "Haircut" }],
    settings: {
      bookingLimit: 2,
      minLeadHours: 1,
    },
    activeStatus: "РђРєС‚РёРІРЅР°СЏ",
  });

  assert.equal(created.id, "test-id");
  assert.equal(created.Barber, "Alex");
  assert.equal(created.Time, "10:00 - 11:00");
  assert.equal(created.Services, "Haircut");
  assert.equal(created.Reminder2hClientSent, false);
  assert.equal(created.Reminder2hBarberSent, false);
});
