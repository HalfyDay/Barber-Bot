const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("events");

const { createBotRuntimeService } = require("../services/botRuntimeService");

const normalizeText = (value) => (value ?? "").toString().trim();

test("bot runtime service reads token from env when settings token is empty", async () => {
  const service = createBotRuntimeService({
    spawn: () => {
      throw new Error("spawn should not be called");
    },
    pathExistsSync: () => true,
    processEnv: { TELEGRAM_BOT_TOKEN: "env-token" },
    cwd: "D:\\Works\\Barber Bot",
    pythonExecutable: "python",
    botScriptPath: "D:\\Works\\Barber Bot\\BotBrotherShop.py",
    getBotSettings: async () => ({ botToken: "" }),
    ensureBotSettingsRecord: async () => ({ id: "settings-1" }),
    prisma: {
      botSettings: {
        async update() {},
      },
    },
    normalizeText,
  });

  const token = await service.readBotToken();

  assert.equal(token, "env-token");
});

test("bot runtime service rejects invalid token update payload", async () => {
  const service = createBotRuntimeService({
    spawn: () => {
      throw new Error("spawn should not be called");
    },
    pathExistsSync: () => true,
    processEnv: {},
    cwd: "D:\\Works\\Barber Bot",
    pythonExecutable: "python",
    botScriptPath: "D:\\Works\\Barber Bot\\BotBrotherShop.py",
    getBotSettings: async () => ({ botToken: "" }),
    ensureBotSettingsRecord: async () => ({ id: "settings-1" }),
    prisma: {
      botSettings: {
        async update() {
          throw new Error("update should not be called");
        },
      },
    },
    normalizeText,
  });

  await assert.rejects(
    () => service.writeBotToken("line1\nline2"),
    /invalid characters/i,
  );
});

test("bot runtime service reports missing script on start", async () => {
  const service = createBotRuntimeService({
    spawn: () => {
      throw new Error("spawn should not be called");
    },
    pathExistsSync: () => false,
    processEnv: {},
    cwd: "D:\\Works\\Barber Bot",
    pythonExecutable: "python",
    botScriptPath: "D:\\Works\\Barber Bot\\BotBrotherShop.py",
    getBotSettings: async () => ({ botToken: "token" }),
    ensureBotSettingsRecord: async () => ({ id: "settings-1" }),
    prisma: {
      botSettings: {
        async update() {},
      },
    },
    normalizeText,
  });

  const status = await service.startBotProcess();

  assert.equal(status.running, false);
  assert.equal(status.lastError, "BotBrotherShop.py not found");
});

test("bot runtime service starts process and updates runtime state", async () => {
  class MockProcess extends EventEmitter {
    constructor() {
      super();
      this.stdout = new EventEmitter();
      this.stderr = new EventEmitter();
      this.kills = [];
    }
    kill(signal) {
      this.kills.push(signal);
      if (signal === "SIGTERM") {
        this.emit("close", 0);
      }
    }
  }

  const calls = [];
  const child = new MockProcess();
  const service = createBotRuntimeService({
    spawn: (command, args, options) => {
      calls.push({ command, args, options });
      return child;
    },
    pathExistsSync: () => true,
    processEnv: { CUSTOM: "1" },
    cwd: "D:\\Works\\Barber Bot",
    pythonExecutable: "python",
    botScriptPath: "D:\\Works\\Barber Bot\\BotBrotherShop.py",
    getBotSettings: async () => ({ botToken: "db-token", isBotEnabled: true }),
    ensureBotSettingsRecord: async () => ({ id: "settings-1" }),
    prisma: {
      botSettings: {
        async update() {},
      },
    },
    normalizeText,
  });

  const started = await service.startBotProcess();
  const stopped = await service.stopBotProcess();

  assert.equal(started.running, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].command, "python");
  assert.equal(calls[0].args[0], "D:\\Works\\Barber Bot\\BotBrotherShop.py");
  assert.equal(calls[0].options.env.TELEGRAM_BOT_TOKEN, "db-token");
  assert.equal(stopped.running, false);
  assert.deepEqual(child.kills, ["SIGTERM"]);
});
