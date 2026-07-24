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
    stopRealtimeLoop: () => events.push("stopRealtimeLoop"),
    shutdownRealtimeClients: () => events.push("shutdownRealtimeClients"),
    shutdownHomeRealtimeClients: () => events.push("shutdownHomeRealtimeClients"),
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
    ensureLicenseValid: async () => events.push("ensureLicenseValid"),
    startLicenseWatcher: () => events.push("startLicenseWatcher"),
    migrateLegacyHomeUsersToUsers: async () => ({ created: 1, updated: 0, total: 1 }),
    ensureBootstrapData: async () => events.push("ensureBootstrapData"),
    normalizeStoredAppointmentStatuses: async () => ({ updated: 1, total: 1 }),
    seedServicesFromCost: async () => events.push("seedServicesFromCost"),
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
  assert.ok(events.includes("runRealtimePush"));
  assert.ok(events.includes("ensureRealtimeLoop"));
  assert.ok(events.some((entry) => entry?.type === "listen" && entry.port === 3000));
  assert.ok(getHttpServer());
});

test("server lifecycle service shuts down dependencies and exits", async () => {
  const { service, events } = createBaseService();

  await service.gracefulShutdown();

  assert.deepEqual(events.slice(0, 4), [
    "stopRealtimeLoop",
    "shutdownRealtimeClients",
    "shutdownHomeRealtimeClients",
    "stopHttpServer",
  ]);
  assert.equal(events[4], "prismaDisconnect");
  assert.deepEqual(events[5], { type: "exit", code: 0 });
});

test("server lifecycle service gracefulShutdown sends ready signal in PM2", async () => {
  const originalPm2Home = process.env.PM2_HOME;
  process.env.PM2_HOME = "/home/user/.pm2";
  
  try {
    const sentSignals = [];
    const { service, events } = createBaseService({
      processObj: {
        handlers: {},
        on(event, handler) {
          this.handlers[event] = handler;
        },
        exit(code) {
          events.push({ type: "exit", code });
        },
        send(signal) {
          sentSignals.push(signal);
        },
      },
    });

    await service.gracefulShutdown();

    assert.ok(sentSignals.includes("ready"), "Should send 'ready' signal to PM2");
    const exitEvent = events.find((e) => e?.type === "exit");
    assert.deepEqual(exitEvent, { type: "exit", code: 0 });
  } finally {
    if (originalPm2Home === undefined) {
      delete process.env.PM2_HOME;
    } else {
      process.env.PM2_HOME = originalPm2Home;
    }
  }
});

test("server lifecycle service gracefulShutdown does not send ready without PM2", async () => {
  const originalPm2Home = process.env.PM2_HOME;
  const originalPmId = process.env.pm_id;
  delete process.env.PM2_HOME;
  delete process.env.pm_id;
  
  try {
    const sentSignals = [];
    const { service, events } = createBaseService({
      processObj: {
        handlers: {},
        on(event, handler) {
          this.handlers[event] = handler;
        },
        exit(code) {
          events.push({ type: "exit", code });
        },
        send(signal) {
          sentSignals.push(signal);
        },
      },
    });

    await service.gracefulShutdown();

    assert.equal(sentSignals.length, 0, "Should not send any signal without PM2");
    const exitEvent = events.find((e) => e?.type === "exit");
    assert.deepEqual(exitEvent, { type: "exit", code: 0 });
  } finally {
    if (originalPm2Home !== undefined) {
      process.env.PM2_HOME = originalPm2Home;
    }
    if (originalPmId !== undefined) {
      process.env.pm_id = originalPmId;
    }
  }
});

test("server lifecycle service registerShutdownHandlers registers SIGINT SIGTERM SIGUSR2", async () => {
  const registeredSignals = [];
  const { service } = createBaseService({
    processObj: {
      handlers: {},
      on(event, handler) {
        registeredSignals.push(event);
        this.handlers[event] = handler;
      },
      exit() {},
    },
  });

  service.registerShutdownHandlers();

  assert.ok(registeredSignals.includes("SIGINT"), "Should register SIGINT handler");
  assert.ok(registeredSignals.includes("SIGTERM"), "Should register SIGTERM handler");
  assert.ok(registeredSignals.includes("SIGUSR2"), "Should register SIGUSR2 handler");
});
