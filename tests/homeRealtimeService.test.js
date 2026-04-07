const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("events");

const { createHomeRealtimeService } = require("../services/homeRealtimeService");

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

test("home realtime service broadcasts sync events to attached clients", () => {
  const req = new EventEmitter();
  const res = createResponse();
  const timers = [];
  const service = createHomeRealtimeService({
    randomUUID: () => "client-1",
    keepAliveMs: 12000,
    setIntervalFn(callback, delay) {
      const token = { callback, delay };
      timers.push(token);
      return token;
    },
    clearIntervalFn() {},
  });

  service.attachClient({ req, res, userId: "user-1" });
  service.broadcast({ type: "home:sync", reason: "app-sync" });

  assert.match(res.writes[0], /event: home-sync/);
  assert.match(res.writes[0], /"type":"home:sync"/);
  assert.equal(timers.length, 1);
});

test("home realtime service clears client on close and shutdown", () => {
  const req = new EventEmitter();
  const res = createResponse();
  const cleared = [];
  const service = createHomeRealtimeService({
    randomUUID: () => "client-2",
    setIntervalFn() {
      return { id: "timer" };
    },
    clearIntervalFn(token) {
      cleared.push(token);
    },
  });

  service.attachClient({ req, res, userId: "user-2" });
  req.emit("close");
  service.shutdownClients();

  assert.ok(cleared.length >= 1);
});
