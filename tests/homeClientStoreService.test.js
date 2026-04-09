const test = require("node:test");
const assert = require("node:assert/strict");

const { createHomeClientStoreService } = require("../services/homeClientStoreService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => normalizeText(value).replace(/[^\d+]/g, "");
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();

const createPrismaHarness = () => {
  const userMetaRows = new Map();
  const siteSettingsRows = new Map();

  return {
    prisma: {
      async $executeRawUnsafe(sql, ...params) {
        if (sql.includes('CREATE TABLE IF NOT EXISTS "HomeUserMeta"')) return 0;
        if (sql.includes('CREATE TABLE IF NOT EXISTS "SiteSettings"')) return 0;
        if (sql.includes('INSERT INTO "HomeUserMeta"')) {
          const [userId, payload] = params;
          userMetaRows.set(userId, JSON.parse(payload));
          return 1;
        }
        if (sql.includes('INSERT INTO "SiteSettings"')) {
          const [siteId, payload] = params;
          siteSettingsRows.set(siteId, JSON.parse(payload));
          return 1;
        }
        throw new Error(`Unexpected execute SQL: ${sql}`);
      },
      async $queryRawUnsafe(sql, ...params) {
        if (sql.includes('SELECT "userId", "payload" FROM "HomeUserMeta"')) {
          return [...userMetaRows.entries()].map(([userId, payload]) => ({
            userId,
            payload,
          }));
        }
        if (sql.includes('SELECT "payload" FROM "SiteSettings"')) {
          const siteId = params[0];
          const payload = siteSettingsRows.get(siteId);
          return payload ? [{ payload }] : [];
        }
        throw new Error(`Unexpected query SQL: ${sql}`);
      },
      users: {
        async findMany() {
          return [];
        },
        async findUnique() {
          return null;
        },
      },
      appointments: {
        async findMany() {
          return [];
        },
      },
    },
    userMetaRows,
    siteSettingsRows,
  };
};

const createService = ({
  prisma,
  legacyStore = { version: 1, users: {}, site: {} },
  readJsonCallsRef = { count: 0 },
}) => {
  let uuidCounter = 0;
  return createHomeClientStoreService({
    fs: {
      async readJson() {
        readJsonCallsRef.count += 1;
        return legacyStore;
      },
    },
    dataFilePath: "D:\\home-client-store.json",
    randomUUID: () => `00000000-0000-0000-0000-${String(++uuidCounter).padStart(12, "0")}`,
    normalizeText,
    normalizePhone,
    canonicalizeKey,
    prisma,
    readBlockedUsers: async () => new Set(),
    getServiceCatalog: async () => [],
    getBarbers: async () => [],
    getBotSettings: async () => ({ bookingLimit: 2 }),
    mapAppointment: (appointment) => appointment,
    splitServiceList: (value) => normalizeText(value).split(",").map((item) => item.trim()).filter(Boolean),
    getServicePriceForBarber: () => 0,
    isCompletedStatus: () => false,
    countAppointmentWarnings: () => 0,
  });
};

test("home client store service imports legacy user meta into postgres-backed store", async () => {
  const harness = createPrismaHarness();
  const service = createService({
    prisma: harness.prisma,
    legacyStore: {
      version: 1,
      users: {
        "user-1": {
          birthDate: "2030-01-02",
          gender: "male",
          avatarUrl: "/avatar.png",
          referralCode: "LEGACY001",
          transactions: [
            {
              id: "tx-1",
              type: "manual_adjust",
              amountBs: 10,
              createdAt: "2030-01-03T00:00:00.000Z",
            },
          ],
        },
        "user-2": {
          referralCode: "LEGACY002",
        },
      },
      site: {},
    },
  });

  const meta = await service.getUserMeta("user-1");

  assert.equal(meta.birthDate, "2030-01-02");
  assert.equal(meta.gender, "male");
  assert.equal(meta.avatarUrl, "/avatar.png");
  assert.equal(meta.referralCode, "LEGACY001");
  assert.equal(meta.transactions.length, 1);
  assert.equal(harness.userMetaRows.size, 2);
  assert.equal(harness.userMetaRows.get("user-2")?.referralCode, "LEGACY002");
});

test("home client store service persists updates in postgres and can read without legacy file", async () => {
  const harness = createPrismaHarness();
  const firstService = createService({ prisma: harness.prisma });

  const updated = await firstService.updateUserMeta("user-9", {
    birthDate: "2031-04-05",
    gender: "female",
    bookingNotificationsEnabled: false,
  });

  assert.equal(updated.birthDate, "2031-04-05");
  assert.equal(updated.gender, "female");
  assert.equal(updated.bookingNotificationsEnabled, false);
  assert.ok(harness.userMetaRows.get("user-9")?.referralCode);

  const secondService = createService({
    prisma: harness.prisma,
    legacyStore: { version: 1, users: {}, site: {} },
  });

  const meta = await secondService.getUserMeta("user-9");

  assert.equal(meta.birthDate, "2031-04-05");
  assert.equal(meta.gender, "female");
  assert.equal(meta.bookingNotificationsEnabled, false);
  assert.equal(meta.referralCode, harness.userMetaRows.get("user-9")?.referralCode);
});

test("home client store service keeps active appointment time label from stored time range", async () => {
  const harness = createPrismaHarness();
  harness.prisma.users.findUnique = async () => ({
    id: "user-1",
    Name: "Client One",
    Phone: "+79990000001",
    Barber: "Barber One",
    TelegramID: null,
  });
  harness.prisma.appointments.findMany = async () => [
    {
      id: "appt-1",
      UserID: "user-1",
      CustomerName: "Client One",
      Phone: "+79990000001",
      Barber: "Barber One",
      BarberID: "barber-1",
      Date: "2026-04-09",
      Time: "17:00 - 18:00",
      endDateTime: "2026-04-09T10:00:00.000Z",
      Status: "active",
      Services: "Haircut",
      isActive: true,
    },
  ];

  const service = createService({
    prisma: harness.prisma,
    legacyStore: { version: 1, users: {}, site: {} },
  });

  const payload = await service.buildHomeAppPayload("user-1");

  assert.equal(payload.booking.activeAppointments.length, 1);
  assert.equal(payload.booking.activeAppointments[0].time, "17:00 - 18:00");
  assert.equal(payload.booking.activeAppointments[0].timeLabel, "17:00 - 18:00");
});
