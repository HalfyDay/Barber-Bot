const test = require("node:test");
const assert = require("node:assert/strict");

const { createCatalogConfigService } = require("../services/catalogConfigService");

const normalizeText = (value) => (value ?? "").toString().trim();
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();

const createHarness = (overrides = {}) => {
  const calls = {
    appointmentUpdates: [],
    createdServices: [],
    createdPrices: [],
    lookupRefreshes: [],
    aliases: [],
    commissionSanitized: 0,
  };
  const prisma = {
    botSettings: {
      async count() {
        return 1;
      },
      async findFirst() {
        return { id: "settings-1", bookingLimit: 2, minLeadHours: 2, maxDaysAhead: 14 };
      },
      async create({ data }) {
        return data;
      },
    },
    appointments: {
      async findMany() {
        return [];
      },
      async update(payload) {
        calls.appointmentUpdates.push(payload);
        return payload;
      },
      updateMany(payload) {
        return payload;
      },
    },
    users: {
      updateMany(payload) {
        return payload;
      },
    },
    services: {
      async count() {
        return 0;
      },
      async findMany() {
        return [];
      },
    },
    cost: {
      async findMany() {
        return [];
      },
    },
    servicePrices: {
      async findMany() {
        return [];
      },
    },
    barbers: {
      async findMany() {
        return [];
      },
    },
    async $transaction(input) {
      if (typeof input === "function") {
        return input({
          services: {
            async create({ data }) {
              const created = { ...data };
              calls.createdServices.push(created);
              return created;
            },
          },
          servicePrices: {
            async createMany({ data }) {
              calls.createdPrices.push(...data);
              return { count: data.length };
            },
          },
        });
      }
      return input;
    },
    ...(overrides.prisma || {}),
  };

  const service = createCatalogConfigService({
    prisma,
    randomUUID: (() => {
      let counter = 0;
      return () => `uuid-${++counter}`;
    })(),
    normalizeText,
    canonicalizeKey,
    normalizeAppointmentStatus: (status) => canonicalizeKey(status) || "active",
    DEFAULT_BOT_DESCRIPTION: "desc",
    DEFAULT_ABOUT_TEXT: "about",
    RESERVED_COST_FIELDS: new Set(["id", "Uslugi", "Dlitelnost"]),
    buildBarberLookup: (records = []) =>
      new Map(records.map((row) => [canonicalizeKey(row.name), row.id])),
    resolveBarberIdFromLookup: (lookup, key) => lookup.get(canonicalizeKey(key)) || null,
    filterServicesForIdentity: (rows) => rows,
    registerBarberAlias: async (barberId, alias) => {
      calls.aliases.push({ barberId, alias });
    },
    sanitizeCommissionRates: async () => {
      calls.commissionSanitized += 1;
    },
    onBarberLookupRefresh: (lookup) => {
      calls.lookupRefreshes.push(lookup);
    },
    logger: {
      error() {},
    },
    ...overrides,
    prisma,
  });

  return { service, calls };
};

test("catalog config service normalizes only changed appointment statuses", async () => {
  const { service, calls } = createHarness({
    prisma: {
      appointments: {
        async findMany() {
          return [
            { id: "a1", Status: "Done" },
            { id: "a2", Status: "active" },
          ];
        },
        async update(payload) {
          calls.appointmentUpdates.push(payload);
          return payload;
        },
      },
    },
  });

  const result = await service.normalizeStoredAppointmentStatuses();

  assert.deepEqual(result, { updated: 1, total: 2 });
  assert.equal(calls.appointmentUpdates.length, 1);
  assert.deepEqual(calls.appointmentUpdates[0], {
    where: { id: "a1" },
    data: { Status: "done" },
  });
});

test("catalog config service clamps home booking settings", async () => {
  const { service } = createHarness({
    prisma: {
      botSettings: {
        async findFirst() {
          return {
            id: "settings-1",
            bookingLimit: 0,
            minLeadHours: -5,
            maxDaysAhead: 100,
          };
        },
      },
    },
  });

  const settings = await service.getHomeBookingSettings();

  assert.deepEqual(settings, {
    bookingLimit: 2,
    minLeadHours: 1,
    maxDaysAhead: 30,
  });
});

test("catalog config service seeds services and prices from legacy cost rows", async () => {
  const { service, calls } = createHarness({
    prisma: {
      cost: {
        async findMany() {
          return [
            {
              id: "legacy-1",
              Uslugi: "Cut",
              Dlitelnost: "45 мин",
              Timur: 1200,
            },
          ];
        },
      },
      barbers: {
        async findMany() {
          return [{ id: "barber-1", name: "Timur" }];
        },
      },
    },
  });

  await service.seedServicesFromCost();

  assert.equal(calls.createdServices.length, 1);
  assert.equal(calls.createdServices[0].name, "Cut");
  assert.equal(calls.createdServices[0].duration, 45);
  assert.equal(calls.createdPrices.length, 1);
  assert.deepEqual(calls.createdPrices[0], {
    id: "uuid-2",
    serviceId: "uuid-1",
    barberId: "barber-1",
    price: 1200,
  });
});
