const test = require("node:test");
const assert = require("node:assert/strict");

const {
  createDashboardSnapshotService,
} = require("../services/dashboardSnapshotService");

const baseDeps = () => ({
  prisma: {
    appointments: {
      async findMany() {
        return [];
      },
    },
    users: {
      async findMany() {
        return [];
      },
      async count() {
        return 0;
      },
    },
  },
  getBarbers: async () => [],
  getServiceCatalog: async () => [],
  getBotSettings: async () => ({ isBotEnabled: true }),
  listBackups: async () => [],
  readBlockedUsers: async () => new Set(),
  mapAppointment: (row) => row,
  formatDateOnly: (date) => date.toISOString().slice(0, 10),
  splitActiveAppointments: (appointments) => ({
    active: appointments.filter((appt) => appt.isActive),
    upcoming: appointments.filter((appt) => appt.isActive),
    overdue: [],
  }),
  normalizePhone: (value) => (value ?? "").toString().trim(),
  normalizeText: (value) => (value ?? "").toString().trim(),
  countAppointmentWarnings: (appointments) =>
    appointments.filter((appt) => appt.isBlocked).length,
  countBlockedClientsFromAppointments: (appointments, blocked) =>
    Math.max(
      blocked.size,
      appointments.filter((appt) => appt.isBlocked).length,
    ),
  buildServiceLookup: (services) =>
    new Map(services.map((service) => [service.name.toLowerCase(), service])),
  getServicePriceForBarber: (service, barberId) =>
    service?.prices?.[barberId] ?? null,
  splitServiceList: (value) =>
    (value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  filterAppointmentsForIdentity: (rows, identity) =>
    rows.filter((row) => row.Barber === identity.barberName),
  filterBarbersForIdentity: (barbers, identity) =>
    barbers.filter((barber) => barber.id === identity.barberId),
  isStaffIdentity: (identity) => identity?.role === "staff",
  matchesIdentityBarber: (value, identity) => value === identity?.barberName,
  isCompletedStatus: (status) => status === "done",
  canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
  getWarningCutoffDate: () => new Date("2026-01-01T00:00:00.000Z"),
  warningBlockThreshold: 2,
  botRuntime: { running: true },
});

test("dashboard snapshot service builds client rows with user merge and orphan appointments", async () => {
  const service = createDashboardSnapshotService(baseDeps());

  const rows = service.buildClientRows(
    [
      {
        id: "user-1",
        Name: "Ivan",
        Phone: "+70000000001",
        TelegramID: "tg-1",
        Barber: "Max",
      },
    ],
    [
      {
        id: "appt-1",
        UserID: "user-1",
        CustomerName: "Ivan",
        Phone: "+70000000001",
        normalizedPhone: "+70000000001",
        Barber: "Max",
        Date: "2026-03-10",
        Time: "10:00 - 11:00",
        isActive: true,
        isConfirmed: false,
        isBlocked: false,
        sortKey: Date.parse("2026-03-10T10:00:00Z"),
      },
      {
        id: "appt-2",
        UserID: null,
        CustomerName: "Petr",
        Phone: "+70000000002",
        normalizedPhone: "+70000000002",
        Barber: "Leo",
        Date: "2026-03-09",
        Time: "12:00 - 13:00",
        isActive: false,
        isConfirmed: true,
        isBlocked: true,
        startDateTime: "2026-03-09T12:00:00.000Z",
        sortKey: Date.parse("2026-03-09T12:00:00Z"),
      },
    ],
    new Set(["user-1"]),
  );

  assert.equal(rows.length, 2);
  const byId = new Map(rows.map((row) => [row.id, row]));
  assert.equal(byId.get("user-1").manualBlocked, true);
  assert.equal(byId.get("user-1").activeAppointments, 1);
  assert.equal(byId.get("appt-appt-2").isBlocked, true);
});

test("dashboard snapshot service builds staff snapshot with filtered stats and earnings", async () => {
  const service = createDashboardSnapshotService({
    ...baseDeps(),
    prisma: {
      appointments: {
        async findMany() {
          return [
            {
              id: "appt-1",
              UserID: "user-1",
              CustomerName: "Ivan",
              Phone: "+70000000001",
              normalizedPhone: "+70000000001",
              Barber: "Max",
              Date: "2026-03-10",
              Time: "10:00 - 11:00",
              Status: "done",
              Services: "Fade",
              isActive: false,
              isConfirmed: true,
              isBlocked: false,
              startDateTime: "2026-03-10T10:00:00.000Z",
              sortKey: Date.parse("2026-03-10T10:00:00Z"),
            },
            {
              id: "appt-2",
              UserID: "user-2",
              CustomerName: "Petr",
              Phone: "+70000000002",
              normalizedPhone: "+70000000002",
              Barber: "Leo",
              Date: "2026-03-10",
              Time: "12:00 - 13:00",
              Status: "done",
              Services: "Fade",
              isActive: false,
              isConfirmed: true,
              isBlocked: false,
              startDateTime: "2026-03-10T12:00:00.000Z",
              sortKey: Date.parse("2026-03-10T12:00:00Z"),
            },
          ];
        },
      },
      users: {
        async findMany() {
          return [
            { id: "user-1", Name: "Ivan", Phone: "+70000000001", Barber: "Max" },
            { id: "user-2", Name: "Petr", Phone: "+70000000002", Barber: "Leo" },
          ];
        },
        async count() {
          return 2;
        },
      },
    },
    getBarbers: async () => [
      {
        id: "barber-1",
        name: "Max",
        position: { commissionRate: 20, name: "Senior" },
      },
      {
        id: "barber-2",
        name: "Leo",
        position: { commissionRate: 10, name: "Junior" },
      },
    ],
    getServiceCatalog: async () => [
      { name: "Fade", prices: { "barber-1": 1000, "barber-2": 900 } },
    ],
    formatDateOnly: () => "2026-03-10",
  });

  const snapshot = await service.buildDashboardSnapshot({
    role: "staff",
    barberId: "barber-1",
    barberName: "Max",
  });

  assert.equal(snapshot.stats.totalUsers, 1);
  assert.equal(snapshot.stats.confirmedYear, 1);
  assert.equal(snapshot.stats.earningsMonth, 800);
  assert.equal(snapshot.stats.positionName, "Senior");
  assert.equal(snapshot.barbers.length, 1);
  assert.equal(snapshot.backups.length, 0);
});
