const test = require("node:test");
const assert = require("node:assert/strict");

const { createAdminInsightsService } = require("../services/adminInsightsService");

const baseDeps = () => ({
  prisma: {
    appointments: {
      async findMany() {
        return [];
      },
    },
    users: {
      async findFirst() {
        return null;
      },
      async findUnique() {
        return null;
      },
    },
  },
  getBarbers: async () => [],
  getServiceCatalog: async () => [],
  readBlockedUsers: async () => new Set(),
  writeBlockedUsers: async () => {},
  requestRealtimePush: () => {},
  parseDateFilter: (value, fallback) =>
    value ? new Date(`${value}T00:00:00`) : new Date(fallback),
  getDefaultRevenueRange: () => ({
    start: new Date("2026-03-01T00:00:00.000Z"),
    end: new Date("2026-03-31T00:00:00.000Z"),
  }),
  formatDateOnly: (date) => date.toISOString().slice(0, 10),
  normalizeText: (value) => (value ?? "").toString().trim(),
  buildBarberNameLookup: (barbers) =>
    new Map(barbers.map((barber) => [barber.name.toLowerCase(), barber])),
  buildServiceLookup: (services) =>
    new Map(services.map((service) => [service.name.toLowerCase(), service])),
  getServicePriceForBarber: (service, barberId) =>
    service?.prices?.[barberId] ?? null,
  splitServiceList: (value) =>
    (value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  isCompletedStatus: (status) => status === "done",
  canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
  mapAppointment: (row) => row,
  countAppointmentWarnings: (appointments) =>
    appointments.filter((appt) => appt.isBlocked).length,
  warningBlockThreshold: 2,
});

test("admin insights service builds revenue summary totals and timeline", async () => {
  const service = createAdminInsightsService({
    ...baseDeps(),
    prisma: {
      appointments: {
        async findMany() {
          return [
            {
              Barber: "Max",
              Status: "done",
              Services: "Fade, Beard",
              Date: "2026-03-10",
            },
            {
              Barber: "Max",
              Status: "cancelled",
              Services: "Fade",
              Date: "2026-03-11",
            },
          ];
        },
      },
      users: {
        async findFirst() {
          return null;
        },
        async findUnique() {
          return null;
        },
      },
    },
    getBarbers: async () => [
      { id: "barber-1", name: "Max", color: "#111", position: { commissionRate: 10 } },
    ],
    getServiceCatalog: async () => [
      { name: "Fade", prices: { "barber-1": 1000 } },
      { name: "Beard", prices: { "barber-1": 500 } },
    ],
  });

  const result = await service.buildRevenueSummary({
    requestedBarberId: "barber-1",
    start: "2026-03-01",
    end: "2026-03-31",
  });

  assert.equal(result.totalGross, 1500);
  assert.equal(result.totalCommission, 150);
  assert.equal(result.totalNet, 1350);
  assert.equal(result.items.length, 1);
  assert.equal(result.timeline.length, 1);
  assert.equal(result.targetBarber.id, "barber-1");
});

test("admin insights service builds user profile with warning and manual block flags", async () => {
  const service = createAdminInsightsService({
    ...baseDeps(),
    prisma: {
      appointments: {
        async findMany() {
          return [
            { id: "appt-1", sortKey: 2, isBlocked: true },
            { id: "appt-2", sortKey: 1, isBlocked: false },
          ];
        },
      },
      users: {
        async findFirst() {
          return { id: "user-1", Name: "Ivan", Phone: "+70000000001" };
        },
        async findUnique() {
          return null;
        },
      },
    },
    readBlockedUsers: async () => new Set(["user-1"]),
  });

  const result = await service.buildUserProfile("Ivan");

  assert.equal(result.user.id, "user-1");
  assert.equal(result.manualBlocked, true);
  assert.equal(result.isBlocked, true);
  assert.equal(result.appointments[0].id, "appt-1");
});

test("admin insights service maps home payload visit history to appointment records for CRM profile", async () => {
  const service = createAdminInsightsService({
    ...baseDeps(),
    prisma: {
      appointments: {
        async findMany() {
          return [];
        },
      },
      users: {
        async findFirst() {
          return { id: "user-1", Name: "Ivan", Phone: "+70000000001" };
        },
        async findUnique() {
          return null;
        },
      },
    },
    buildHomeAppPayload: async () => ({
      user: {
        warningCount: 1,
        isBlocked: false,
        noticeCount: 0,
      },
      profile: {
        visitHistory: [
          {
            id: "visit-1",
            when: "2026-03-15T09:00:00.000Z",
            date: "2026-03-15",
            time: "12:00 - 13:00",
            barber: "Max",
            services: ["Fade", "Beard"],
            status: "done",
          },
        ],
        operations: [],
        notices: [],
      },
      referral: {
        bsBalance: 0,
        stats: { green: 0 },
      },
    }),
  });

  const result = await service.buildUserProfile("Ivan");

  assert.equal(result.appointments.length, 1);
  assert.deepEqual(result.appointments[0], {
    id: "visit-1",
    Date: "2026-03-15",
    Time: "12:00 - 13:00",
    Barber: "Max",
    Services: "Fade, Beard",
    Status: "done",
    startDateTime: "2026-03-15T09:00:00.000Z",
  });
});

test("admin insights service toggles manual block and requests realtime push", async () => {
  const pushes = [];
  let persisted = null;
  const service = createAdminInsightsService({
    ...baseDeps(),
    prisma: {
      appointments: {
        async findMany() {
          return [{ id: "appt-1", isBlocked: true }];
        },
      },
      users: {
        async findFirst() {
          return null;
        },
        async findUnique() {
          return { id: "user-1", Name: "Ivan", Phone: "+70000000001" };
        },
      },
    },
    readBlockedUsers: async () => new Set(),
    writeBlockedUsers: async (set) => {
      persisted = new Set(set);
    },
    requestRealtimePush: (force) => pushes.push(force),
  });

  const result = await service.toggleUserBlock({
    id: "user-1",
    shouldBlock: true,
  });

  assert.equal(result.blocked, true);
  assert.equal(result.manualBlocked, true);
  assert.equal(result.warnings, 1);
  assert.equal(persisted.has("user-1"), true);
  assert.deepEqual(pushes, [true]);
});
