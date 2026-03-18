const test = require("node:test");
const assert = require("node:assert/strict");

const { registerServiceCatalogRoutes } = require("../routes/serviceCatalogRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();

const createHarness = (overrides = {}) => {
  const app = createAppMock();
  const prisma = {
    services: {
      delete: async () => ({}),
    },
    servicePrices: {
      deleteMany: async () => ({}),
    },
    async $transaction(input) {
      if (typeof input === "function") {
        return input({
          services: {
            findUnique: async () => ({ id: "service-1" }),
            create: async ({ data }) => data,
            update: async ({ where, data }) => ({ id: where.id, ...data }),
          },
          servicePrices: {
            deleteMany: async () => ({}),
            createMany: async () => ({}),
            upsert: async () => ({}),
          },
        });
      }
      return input;
    },
    ...(overrides.prisma || {}),
  };

  registerServiceCatalogRoutes({
    app,
    authenticateToken: (_req, _res, next) => next && next(),
    prisma,
    randomUUID: () => "uuid-1",
    isOwnerRequest: () => false,
    isStaffIdentity: () => false,
    normalizeText,
    getServiceCatalog: async () => [],
    getBarbers: async () => [],
    filterBarbersForIdentity: (rows) => rows,
    filterServicesForIdentity: (rows) => rows,
    ...overrides,
    prisma,
  });

  return { app };
};

test("service catalog routes block create for non-owner", async () => {
  const { app } = createHarness({
    isOwnerRequest: () => false,
  });
  const handler = app.getRoute("POST", "/api/services/full");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 403);
});

test("service catalog routes require staff price for own profile", async () => {
  const { app } = createHarness({
    isOwnerRequest: () => false,
    isStaffIdentity: () => true,
  });
  const handler = app.getRoute("PUT", "/api/services/full/:id");
  const res = createResponseMock();

  await handler(
    {
      params: { id: "service-1" },
      identity: { role: "staff", barberId: "barber-1" },
      body: { prices: {} },
    },
    res,
  );

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /цену|price/i);
});

test("service catalog routes block delete for non-owner", async () => {
  const { app } = createHarness({
    isOwnerRequest: () => false,
  });
  const handler = app.getRoute("DELETE", "/api/services/full/:id");
  const res = createResponseMock();

  await handler({ params: { id: "service-1" } }, res);

  assert.equal(res.statusCode, 403);
});

test("service catalog routes let owner create service", async () => {
  const calls = [];
  const services = [{ id: "service-1", name: "Fade" }];
  const { app } = createHarness({
    isOwnerRequest: () => true,
    prisma: {
      services: {
        delete: async () => ({}),
      },
      servicePrices: {
        deleteMany: async () => ({}),
      },
      async $transaction(run) {
        return run({
          services: {
            create: async ({ data }) => {
              calls.push(["create", data]);
              return { id: data.id, ...data };
            },
            update: async () => {
              throw new Error("unexpected update");
            },
            findUnique: async () => ({ id: "service-1" }),
          },
          servicePrices: {
            deleteMany: async ({ where }) => {
              calls.push(["deleteMany", where]);
            },
            createMany: async ({ data }) => {
              calls.push(["createMany", data]);
            },
            upsert: async () => ({}),
          },
        });
      },
    },
    getServiceCatalog: async () => services,
  });
  const handler = app.getRoute("POST", "/api/services/full");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      body: {
        name: "Fade",
        description: "Classic fade",
        category: "Hair",
        duration: 45,
        orderIndex: 2,
        prices: { "barber-1": 1500, "barber-2": "" },
      },
    },
    res,
  );

  assert.equal(res.statusCode, 201);
  assert.deepEqual(res.body, { services });
  assert.deepEqual(calls, [
    [
      "create",
      {
        id: "uuid-1",
        name: "Fade",
        description: "Classic fade",
        category: "Hair",
        duration: 45,
        isActive: true,
        orderIndex: 2,
      },
    ],
    ["deleteMany", { serviceId: "uuid-1" }],
    [
      "createMany",
      [
        {
          id: "uuid-1",
          serviceId: "uuid-1",
          barberId: "barber-1",
          price: 1500,
        },
      ],
    ],
  ]);
});

test("service catalog routes let owner update service", async () => {
  const calls = [];
  const services = [{ id: "service-1", name: "Fade Premium" }];
  const { app } = createHarness({
    isOwnerRequest: () => true,
    prisma: {
      services: {
        delete: async () => ({}),
      },
      servicePrices: {
        deleteMany: async () => ({}),
      },
      async $transaction(run) {
        return run({
          services: {
            create: async () => {
              throw new Error("unexpected create");
            },
            update: async ({ where, data }) => {
              calls.push(["update", where, data]);
              return { id: where.id, ...data };
            },
            findUnique: async () => ({ id: "service-1" }),
          },
          servicePrices: {
            deleteMany: async ({ where }) => {
              calls.push(["deleteMany", where]);
            },
            createMany: async ({ data }) => {
              calls.push(["createMany", data]);
            },
            upsert: async () => ({}),
          },
        });
      },
    },
    getServiceCatalog: async () => services,
  });
  const handler = app.getRoute("PUT", "/api/services/full/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "service-1" },
      body: {
        name: "Fade Premium",
        duration: 60,
        prices: { "barber-1": 2000 },
      },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { services });
  assert.deepEqual(calls, [
    [
      "update",
      { id: "service-1" },
      {
        name: "Fade Premium",
        description: "",
        category: null,
        duration: 60,
        isActive: true,
        orderIndex: 0,
      },
    ],
    ["deleteMany", { serviceId: "service-1" }],
    [
      "createMany",
      [
        {
          id: "uuid-1",
          serviceId: "service-1",
          barberId: "barber-1",
          price: 2000,
        },
      ],
    ],
  ]);
});

test("service catalog routes let owner delete service", async () => {
  const calls = [];
  const services = [{ id: "service-2", name: "Beard" }];
  const { app } = createHarness({
    isOwnerRequest: () => true,
    prisma: {
      services: {
        delete: ({ where }) => {
          calls.push(["services.delete", where]);
          return { id: where.id };
        },
      },
      servicePrices: {
        deleteMany: ({ where }) => {
          calls.push(["servicePrices.deleteMany", where]);
          return { count: 1 };
        },
      },
      async $transaction(input) {
        return input;
      },
    },
    getServiceCatalog: async () => services,
  });
  const handler = app.getRoute("DELETE", "/api/services/full/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "service-2" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { services });
  assert.deepEqual(calls, [
    ["servicePrices.deleteMany", { serviceId: "service-2" }],
    ["services.delete", { id: "service-2" }],
  ]);
});

test("service catalog routes return staff filtered catalog", async () => {
  const services = [{ id: "service-1", name: "Fade" }];
  const barbers = [{ id: "barber-1", name: "Timur" }];
  const { app } = createHarness({
    isStaffIdentity: () => true,
    getServiceCatalog: async (includeInactive, identity) => {
      assert.equal(includeInactive, true);
      assert.deepEqual(identity, { role: "staff", barberId: "barber-1" });
      return services;
    },
    getBarbers: async () => barbers,
    filterBarbersForIdentity: (rows, identity) => {
      assert.deepEqual(identity, { role: "staff", barberId: "barber-1" });
      return rows;
    },
  });
  const handler = app.getRoute("GET", "/api/services/full");
  const res = createResponseMock();

  await handler({ identity: { role: "staff", barberId: "barber-1" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { services, barbers });
});

test("service catalog routes let staff update own service price", async () => {
  const calls = [];
  const services = [{ id: "service-1", name: "Fade", prices: { "barber-1": 1700 } }];
  const { app } = createHarness({
    isStaffIdentity: () => true,
    prisma: {
      services: {
        delete: async () => ({}),
      },
      servicePrices: {
        deleteMany: async () => ({}),
      },
      async $transaction(run) {
        return run({
          services: {
            findUnique: async ({ where }) => {
              calls.push(["findUnique", where]);
              return { id: where.id };
            },
            create: async ({ data }) => data,
            update: async ({ where, data }) => ({ id: where.id, ...data }),
          },
          servicePrices: {
            deleteMany: async ({ where }) => {
              calls.push(["deleteMany", where]);
            },
            createMany: async ({ data }) => data,
            upsert: async (input) => {
              calls.push(["upsert", input]);
            },
          },
        });
      },
    },
    getServiceCatalog: async () => services,
    filterServicesForIdentity: (rows, identity) => {
      assert.deepEqual(identity, { role: "staff", barberId: "barber-1" });
      return rows;
    },
  });
  const handler = app.getRoute("PUT", "/api/services/full/:id");
  const res = createResponseMock();

  await handler(
    {
      params: { id: "service-1" },
      identity: { role: "staff", barberId: "barber-1" },
      body: { prices: { "barber-1": 1700 } },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { services });
  assert.deepEqual(calls, [
    ["findUnique", { id: "service-1" }],
    [
      "upsert",
      {
        where: {
          serviceId_barberId: {
            serviceId: "service-1",
            barberId: "barber-1",
          },
        },
        update: { price: 1700 },
        create: {
          id: "uuid-1",
          serviceId: "service-1",
          barberId: "barber-1",
          price: 1700,
        },
      },
    ],
  ]);
});
