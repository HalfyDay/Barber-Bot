const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

const { registerOwnerSystemRoutes } = require("../routes/ownerSystemRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();

const createHarness = (overrides = {}) => {
  const app = createAppMock();
  const prisma = {
    async $disconnect() {},
    ...(overrides.prisma || {}),
  };

  registerOwnerSystemRoutes({
    app,
    authenticateToken: (_req, _res, next) => next && next(),
    isOwnerRequest: () => true,
    ensureLicenseValid: async () => ({ valid: true }),
    getLicenseStatus: () => ({ valid: true }),
    prisma,
    normalizeText,
    checkForUpdates: async () => ({ hasUpdate: false }),
    getUpdateInProgress: () => false,
    performSystemUpdate: async () => ({ updated: true }),
    scheduleSelfRestart: () => {},
    appendUpdateAlert: async () => {},
    isDatabaseCorruptionError: () => false,
    buildDatabaseCorruptionMessage: () => "db-corrupted",
    getRestartScheduled: () => false,
    createBackup: async () => {},
    listBackups: async () => [],
    restoreBackup: async () => ({ restored: true, format: "sqlite" }),
    path,
    BACKUP_DIR: "D:\\backups",
    fs: {
      async pathExists() {
        return false;
      },
      async copyFile() {},
      async remove() {},
    },
    ...overrides,
    prisma,
  });

  return { app };
};

test("owner system routes block license status for non-owner", async () => {
  const { app } = createHarness({
    isOwnerRequest: () => false,
  });
  const handler = app.getRoute("GET", "/api/license/status");
  const res = createResponseMock();

  await handler({ identity: { username: "staff" } }, res);

  assert.equal(res.statusCode, 403);
});

test("owner system routes reject update while update is already in progress", async () => {
  const { app } = createHarness({
    getUpdateInProgress: () => true,
  });
  const handler = app.getRoute("POST", "/api/system/update");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" }, body: {} }, res);

  assert.equal(res.statusCode, 429);
  assert.match(res.body.error, /Обновление уже выполняется/i);
});


test("owner system routes require backup filename for restore", async () => {
  const { app } = createHarness();
  const handler = app.getRoute("POST", "/api/backups/restore");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /бэкапа/i);
});

test("owner system routes return license status for owner", async () => {
  const expected = { valid: true, tier: "pro" };
  const { app } = createHarness({
    ensureLicenseValid: async () => expected,
  });
  const handler = app.getRoute("GET", "/api/license/status");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, expected);
});


test("owner system routes perform system update and schedule restart", async () => {
  const calls = [];
  const { app } = createHarness({
    performSystemUpdate: async () => {
      calls.push("performSystemUpdate");
      return { updated: true, files: 3 };
    },
    checkForUpdates: async (force) => {
      calls.push(["checkForUpdates", force]);
      return { hasUpdate: false, force };
    },
    scheduleSelfRestart: () => {
      calls.push("scheduleSelfRestart");
    },
  });
  const handler = app.getRoute("POST", "/api/system/update");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" }, body: {} }, res);

  assert.equal(res.statusCode, 202);
  assert.deepEqual(res.body, {
    success: true,
    started: true,
    restarting: true,
    info: { hasUpdate: false, force: true },
  });

  // Wait for background async update functions to execute
  await new Promise((resolve) => setTimeout(resolve, 10));

  assert.deepEqual(calls, [
    ["checkForUpdates", true],
    "performSystemUpdate",
    "scheduleSelfRestart",
  ]);
});




test("owner system routes schedule restart successfully", async () => {
  const calls = [];
  const { app } = createHarness({
    scheduleSelfRestart: (delayMs) => {
      calls.push(delayMs);
    },
  });
  const handler = app.getRoute("POST", "/api/system/restart");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { restarting: true });
  assert.deepEqual(calls, [400]);
});

test("owner system routes return update check info", async () => {
  const calls = [];
  const { app } = createHarness({
    checkForUpdates: async (force) => {
      calls.push(force);
      return { hasUpdate: true, version: "1.2.3" };
    },
  });
  const handler = app.getRoute("GET", "/api/system/update");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      query: { force: "true" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { hasUpdate: true, version: "1.2.3" });
  assert.deepEqual(calls, [true]);
});

test("owner system routes create backup successfully", async () => {
  let called = 0;
  const { app } = createHarness({
    createBackup: async () => {
      called += 1;
    },
  });
  const handler = app.getRoute("POST", "/api/backups/create");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(called, 1);
  assert.equal(res.body.success, true);
});

test("owner system routes list backups successfully", async () => {
  const files = ["backup-1.sqlite", "backup-2.sqlite"];
  const { app } = createHarness({
    listBackups: async () => files,
  });
  const handler = app.getRoute("GET", "/api/backups/list");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, files);
});

test("owner system routes restore backup successfully", async () => {
  const calls = [];
  const { app } = createHarness({
    restoreBackup: async (filename) => {
      calls.push(["restoreBackup", filename]);
      return { restored: true, format: "postgres" };
    },
  });
  const handler = app.getRoute("POST", "/api/backups/restore");
  const res = createResponseMock();

  await handler({ body: { filename: "backup.sqlite" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(res.body.format, "postgres");
  assert.deepEqual(calls, [["restoreBackup", "backup.sqlite"]]);
});

test("owner system routes delete backup successfully", async () => {
  const calls = [];
  const { app } = createHarness({
    fs: {
      async pathExists(targetPath) {
        calls.push(["pathExists", targetPath]);
        return true;
      },
      async copyFile() {},
      async remove(targetPath) {
        calls.push(["remove", targetPath]);
      },
    },
  });
  const handler = app.getRoute("POST", "/api/backups/delete");
  const res = createResponseMock();

  await handler({ body: { filename: "backup.sqlite" } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.deepEqual(calls, [
    ["pathExists", path.join("D:\\backups", "backup.sqlite")],
    ["remove", path.join("D:\\backups", "backup.sqlite")],
  ]);
});
