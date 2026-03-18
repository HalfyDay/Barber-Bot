const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const os = require("os");

const { createUpdateMonitorService } = require("../services/updateMonitorService");

const baseConfig = {
  port: 3000,
  healthcheckPath: "/api/health",
  postRestartHealthcheckEnabled: true,
  postRestartHealthcheckHost: "127.0.0.1",
  postRestartHealthcheckPort: 4123,
  postRestartHealthcheckTimeoutMs: 50,
  postRestartHealthcheckIntervalMs: 1,
  postRestartHealthcheckUrl: "",
  updateAlertLog: "D:\\logs\\update-alert.log",
};

test("update monitor service builds explicit health url when configured", async () => {
  const service = createUpdateMonitorService({
    fs: {},
    path,
    os,
    runtimeFetch: async () => ({ ok: true, status: 200 }),
    config: {
      ...baseConfig,
      postRestartHealthcheckUrl: "http://example.test/health",
    },
  });

  assert.equal(
    service.buildPostRestartHealthUrl(),
    "http://example.test/health",
  );
});

test("update monitor service appends alert entry to log", async () => {
  const writes = [];
  const service = createUpdateMonitorService({
    fs: {
      async ensureDir(dir) {
        writes.push({ type: "dir", dir });
      },
      async appendFile(target, content, encoding) {
        writes.push({ type: "file", target, content, encoding });
      },
    },
    path,
    os,
    runtimeFetch: async () => ({ ok: true, status: 200 }),
    config: baseConfig,
  });

  await service.appendUpdateAlert("failure", { code: "E_TEST" });

  assert.equal(writes[0].type, "dir");
  assert.equal(writes[1].type, "file");
  assert.equal(writes[1].target, baseConfig.updateAlertLog);
  assert.equal(writes[1].encoding, "utf8");
  assert.match(writes[1].content, /"message":"failure"/);
  assert.match(writes[1].content, new RegExp(`${os.EOL.replace(/\r/g, "\\r").replace(/\n/g, "\\n")}$`));
});

test("update monitor service retries healthcheck until success", async () => {
  let calls = 0;
  const waits = [];
  const service = createUpdateMonitorService({
    fs: {
      async ensureDir() {},
      async appendFile() {},
    },
    path,
    os,
    runtimeFetch: async () => {
      calls += 1;
      if (calls === 1) {
        throw new Error("offline");
      }
      return { ok: true, status: 204 };
    },
    wait: async (delayMs) => {
      waits.push(delayMs);
    },
    config: {
      ...baseConfig,
      postRestartHealthcheckTimeoutMs: 100,
    },
  });

  const result = await service.waitForPostRestartHealth();

  assert.equal(result.ok, true);
  assert.equal(result.status, 204);
  assert.equal(calls, 2);
  assert.deepEqual(waits, [1]);
});
