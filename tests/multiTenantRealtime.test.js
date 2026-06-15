const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("events");
const jwt = require("jsonwebtoken");

// 1. Mock prismaRuntime to intercept tenantMiddleware database/context calls
let contextStore = null;
const mockPrismaRuntime = {
  tenantPrismaStorage: {
    run(context, fn) {
      contextStore = context;
      return fn();
    }
  },
  getTenantPrismaClient(schema) {
    return {
      businesses: {
        async findUnique({ where }) {
          if (where.id === "biz-123") {
            return { id: "biz-123", dbSchema: "schema_123", isActive: true };
          }
          return null;
        }
      }
    };
  },
  getTenantTimezone(schema) {
    return Promise.resolve("Europe/Moscow");
  }
};

require.cache[require.resolve("../services/prismaRuntime")] = {
  id: require.resolve("../services/prismaRuntime"),
  exports: mockPrismaRuntime,
  loaded: true
};

const { tenantMiddleware } = require("../services/tenantMiddleware");
const { createRealtimeService } = require("../services/realtimeService");

const createResponse = () => {
  const writes = [];
  return {
    writes,
    write(chunk) {
      writes.push(chunk);
    },
    endCalled: false,
    end() {
      this.endCalled = true;
    },
  };
};

test("tenantMiddleware extracts businessId from query token and sets context", async () => {
  const secret = "test-secret";
  const token = jwt.sign({ businessId: "biz-123" }, secret);
  const req = {
    headers: {},
    query: { token },
    hostname: "localhost"
  };
  const res = {};
  let nextCalled = false;

  await tenantMiddleware(req, res, () => {
    nextCalled = true;
  });

  assert.equal(nextCalled, true);
  assert.equal(req.businessId, "biz-123");
  assert.equal(contextStore?.businessId, "biz-123");
  assert.equal(contextStore?.schema, "schema_123");
});

test("realtime service partitions clients and broadcasts only to matching businessId", async () => {
  const req1 = new EventEmitter();
  const res1 = createResponse();
  const req2 = new EventEmitter();
  const res2 = createResponse();

  const payloads = {
    "biz-1": {
      appointmentsRaw: [{ id: "appt-1", businessId: "biz-1" }],
      active: [],
      upcoming: [],
      overdue: [],
      stats: {},
      updatedAt: "2026-06-15T00:00:00.000Z",
    },
    "biz-2": {
      appointmentsRaw: [{ id: "appt-2", businessId: "biz-2" }],
      active: [],
      upcoming: [],
      overdue: [],
      stats: {},
      updatedAt: "2026-06-15T00:00:00.000Z",
    }
  };

  const service = createRealtimeService({
    createHash: require("crypto").createHash,
    buildPayload: async (businessId) => {
      return payloads[businessId] || { appointmentsRaw: [], active: [], upcoming: [], overdue: [], stats: {}, updatedAt: "" };
    },
    pollIntervalMs: 5000,
    keepAliveMs: 15000,
    randomUUID: (() => {
      let count = 0;
      return () => `client-${++count}`;
    })(),
    setIntervalFn() {
      return { id: "timer" };
    },
    clearIntervalFn() {},
  });

  // Attach client 1 to business 1
  service.attachClient({ req: req1, res: res1, businessId: "biz-1" });
  // Attach client 2 to business 2
  service.attachClient({ req: req2, res: res2, businessId: "biz-2" });

  // Wait a moment for any initial async pushes to finish
  await new Promise(resolve => setTimeout(resolve, 50));

  res1.writes.length = 0;
  res2.writes.length = 0;

  // Run push for business 1
  await service.runPush(true, "biz-1");

  // Client 1 should receive the update for business 1
  assert.equal(res1.writes.length, 1);
  assert.match(res1.writes[0], /"id":"appt-1"/);

  // Client 2 should NOT receive the update for business 1
  assert.equal(res2.writes.length, 0);

  // Run push for business 2
  await service.runPush(true, "biz-2");

  // Client 2 should receive the update for business 2
  assert.equal(res2.writes.length, 1);
  assert.match(res2.writes[0], /"id":"appt-2"/);
});
