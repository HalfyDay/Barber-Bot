const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("events");

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

test("realtime service broadcasts payload to attached clients", async () => {
  const req = new EventEmitter();
  const res = createResponse();
  const timers = [];
  const service = createRealtimeService({
    createHash: require("crypto").createHash,
    buildPayload: async () => ({
      appointmentsRaw: [{ id: "b" }, { id: "a" }],
      active: [],
      upcoming: [],
      overdue: [],
      stats: { activeAppointments: 2 },
      updatedAt: "2026-03-17T00:00:00.000Z",
    }),
    pollIntervalMs: 5000,
    keepAliveMs: 15000,
    randomUUID: () => "client-1",
    setIntervalFn(callback, delay) {
      const token = { callback, delay };
      timers.push(token);
      return token;
    },
    clearIntervalFn() {},
  });

  service.attachClient({ req, res });
  await service.runPush(true);

  assert.match(res.writes[0], /event: appointments/);
  assert.match(res.writes[0], /"type":"appointments:update"/);
  assert.equal(timers.length, 1);
});

test("realtime service skips unchanged payload when not forced", async () => {
  const req = new EventEmitter();
  const res = createResponse();
  let calls = 0;
  const service = createRealtimeService({
    createHash: require("crypto").createHash,
    buildPayload: async () => {
      calls += 1;
      return {
        appointmentsRaw: [{ id: "same" }],
        active: [],
        upcoming: [],
        overdue: [],
        stats: {},
        updatedAt: "2026-03-17T00:00:00.000Z",
      };
    },
    pollIntervalMs: 5000,
    keepAliveMs: 15000,
    randomUUID: () => "client-1",
    setIntervalFn() {
      return { id: "timer" };
    },
    clearIntervalFn() {},
  });

  service.attachClient({ req, res });
  res.writes.length = 0;
  await service.runPush(false);
  const writesAfterFirstPush = res.writes.length;
  await service.runPush(false);

  assert.ok(calls >= 2);
  assert.equal(writesAfterFirstPush, 1);
  assert.equal(res.writes.length, 1);
});

test("realtime service replays last event to newly attached client and cleans up on close", async () => {
  const req1 = new EventEmitter();
  const req2 = new EventEmitter();
  const res1 = createResponse();
  const res2 = createResponse();
  const cleared = [];
  const service = createRealtimeService({
    createHash: require("crypto").createHash,
    buildPayload: async () => ({
      appointmentsRaw: [{ id: "x" }],
      active: [],
      upcoming: [],
      overdue: [],
      stats: {},
      updatedAt: "2026-03-17T00:00:00.000Z",
    }),
    pollIntervalMs: 5000,
    keepAliveMs: 15000,
    randomUUID: (() => {
      let index = 0;
      return () => `client-${++index}`;
    })(),
    setIntervalFn() {
      return { id: "timer" };
    },
    clearIntervalFn(token) {
      cleared.push(token);
    },
  });

  service.attachClient({ req: req1, res: res1 });
  await service.runPush(true);
  service.attachClient({ req: req2, res: res2 });
  req2.emit("close");
  service.shutdownClients();

  assert.match(res2.writes[0], /appointments:update/);
  assert.equal(res1.endCalled, true);
  assert.ok(cleared.length >= 1);
});
