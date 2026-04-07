const test = require("node:test");
const assert = require("node:assert/strict");

const { createServerLifecycleService } = require("../services/serverLifecycleService");

const createBaseService = (overrides = {}) => {
  const events = [];
  let httpServer = null;
  const service = createServerLifecycleService({
    cron: {
      schedule(expression, handler, options) {
        events.push({ type: "schedule", expression, options, handler });
      },
    },
    cronExpression: "0 3 * * *",
    cronTimezone: "Asia/Irkutsk",
    createBackup: async () => {
      events.push("createBackup");
    },
    listBackups: async () => ["old.db", "fresh.db"],
    path: {
      join: (...parts) => parts.join("/"),
    },
    backupDir: "D:/backups",
    fs: {
      async stat(filePath) {
        return {
          mtimeMs: filePath.includes("old")
            ? Date.now() - 40 * 24 * 60 * 60 * 1000
            : Date.now(),
        };
      },
      async remove(filePath) {
        events.push({ type: "remove", filePath });
      },
    },
    backupRetentionDays: 30,
    stopAppointmentReminderLoop: () => events.push("stopAppointmentReminderLoop"),
    stopRealtimeLoop: () => events.push("stopRealtimeLoop"),
    shutdownRealtimeClients: () => events.push("shutdownRealtimeClients"),
    shutdownHomeRealtimeClients: () => events.push("shutdownHomeRealtimeClients"),
    stopBotProcess: async () => {
      events.push("stopBotProcess");
    },
    stopHttpServer: async () => {
      events.push("stopHttpServer");
    },
    prisma: {
      async $disconnect() {
        events.push("prismaDisconnect");
      },
    },
    processObj: {
      handlers: {},
      on(event, handler) {
        this.handlers[event] = handler;
      },
      exit(code) {
        events.push({ type: "exit", code });
      },
    },
    ensureUsersHomeAuthColumns: () => events.push("ensureUsersHomeAuthColumns"),
    ensureTelegramAuthRequestsTable: () => events.push("ensureTelegramAuthRequestsTable"),
    markExpiredTelegramAuthRequests: () => events.push("markExpiredTelegramAuthRequests"),
    ensureLicenseValid: async () => events.push("ensureLicenseValid"),
    startLicenseWatcher: () => events.push("startLicenseWatcher"),
    migrateLegacyHomeUsersToUsers: async () => ({ created: 1, updated: 0, total: 1 }),
    ensureBootstrapData: async () => events.push("ensureBootstrapData"),
    normalizeStoredAppointmentStatuses: async () => ({ updated: 1, total: 1 }),
    seedServicesFromCost: async () => events.push("seedServicesFromCost"),
    ensureBotProcessState: async () => events.push("ensureBotProcessState"),
    startAppointmentReminderLoop: () => events.push("startAppointmentReminderLoop"),
    runRealtimePush: async () => events.push("runRealtimePush"),
    ensureRealtimeLoop: () => events.push("ensureRealtimeLoop"),
    app: {
      listen(port, callback) {
        events.push({ type: "listen", port });
        if (callback) callback();
        return { close() {} };
      },
    },
    port: 3000,
    setHttpServer(server) {
      httpServer = server;
      events.push("setHttpServer");
    },
    ...overrides,
  });

  return { service, events, getHttpServer: () => httpServer };
};

test("server lifecycle service installs backup cron with configured timezone", async () => {
  const { service, events } = createBaseService();

  service.installBackupCron();

  assert.equal(events[0].type, "schedule");
  assert.equal(events[0].expression, "0 3 * * *");
  assert.deepEqual(events[0].options, { timezone: "Asia/Irkutsk" });
});

test("server lifecycle service runs backup cleanup for outdated files", async () => {
  const { service, events } = createBaseService();

  await service.runBackupCronTask();

  assert.equal(events[0], "createBackup");
  assert.deepEqual(events[1], {
    type: "remove",
    filePath: "D:/backups/old.db",
  });
});

test("server lifecycle service bootstraps app and starts listeners", async () => {
  const { service, events, getHttpServer } = createBaseService();

  await service.bootstrap();

  assert.ok(events.includes("ensureUsersHomeAuthColumns"));
  assert.ok(events.includes("ensureBotProcessState"));
  assert.ok(events.includes("startAppointmentReminderLoop"));
  assert.ok(events.includes("runRealtimePush"));
  assert.ok(events.includes("ensureRealtimeLoop"));
  assert.ok(events.some((entry) => entry?.type === "listen" && entry.port === 3000));
  assert.ok(getHttpServer());
});

test("server lifecycle service shuts down dependencies and exits", async () => {
  const { service, events } = createBaseService();

  await service.gracefulShutdown();

  assert.deepEqual(events.slice(0, 6), [
    "stopAppointmentReminderLoop",
    "stopRealtimeLoop",
    "shutdownRealtimeClients",
    "shutdownHomeRealtimeClients",
    "stopBotProcess",
    "stopHttpServer",
  ]);
  assert.equal(events[6], "prismaDisconnect");
  assert.deepEqual(events[7], { type: "exit", code: 0 });
});
