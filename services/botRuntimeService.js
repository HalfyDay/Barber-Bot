const createBotRuntimeService = ({
  spawn,
  pathExistsSync,
  processEnv,
  cwd,
  pythonExecutable,
  botScriptPath,
  getBotSettings,
  ensureBotSettingsRecord,
  prisma,
  normalizeText,
}) => {
  let botProcess = null;
  const botRuntime = {
    running: false,
    since: null,
    lastExit: null,
    lastError: null,
  };

  const serializeBotRuntime = () => ({
    running: botRuntime.running,
    since: botRuntime.since,
    lastExit: botRuntime.lastExit,
    lastError: botRuntime.lastError,
  });

  const readBotToken = async () => {
    const settings = await getBotSettings();
    const token = settings?.botToken ? normalizeText(settings.botToken) : "";
    if (token) return token;
    const envToken = normalizeText(
      processEnv.TELEGRAM_BOT_TOKEN || processEnv.TOKEN || "",
    );
    return envToken || null;
  };

  const writeBotToken = async (nextToken) => {
    const sanitized = normalizeText(nextToken || "");
    if (!sanitized) {
      throw new Error("Bot token is required");
    }
    if (/[\r\n]/.test(sanitized)) {
      throw new Error("Bot token contains invalid characters");
    }
    const settings = await ensureBotSettingsRecord();
    await prisma.botSettings.update({
      where: { id: settings.id },
      data: { botToken: sanitized, lastSyncSource: "site" },
    });
    return sanitized;
  };

  const startBotProcess = async () => {
    if (botProcess || !pathExistsSync(botScriptPath)) {
      if (!pathExistsSync(botScriptPath)) {
        botRuntime.lastError = "BotBrotherShop.py not found";
      }
      return serializeBotRuntime();
    }
    const botToken = await readBotToken();
    if (!botToken) {
      botRuntime.lastError = "Bot token is not configured";
      return serializeBotRuntime();
    }
    botProcess = spawn(processEnv.BOT_COMMAND || pythonExecutable, [botScriptPath], {
      cwd,
      env: {
        ...processEnv,
        TELEGRAM_BOT_TOKEN: botToken,
        TOKEN: botToken,
      },
    });
    botRuntime.running = true;
    botRuntime.since = new Date().toISOString();
    botRuntime.lastError = null;
    botProcess.stdout.on("data", (chunk) => {
      console.log(`[BOT]: ${chunk.toString().trim()}`);
    });
    botProcess.stderr.on("data", (chunk) => {
      const message = chunk.toString();
      console.error(`[BOT:ERR]: ${message.trim()}`);
      botRuntime.lastError = message.trim();
    });
    botProcess.on("close", (code) => {
      botRuntime.running = false;
      botRuntime.lastExit = { code, at: new Date().toISOString() };
      botProcess = null;
    });
    return serializeBotRuntime();
  };

  const stopBotProcess = async () => {
    if (!botProcess) return serializeBotRuntime();
    return new Promise((resolve) => {
      botProcess.on("close", () => resolve(serializeBotRuntime()));
      botProcess.kill("SIGTERM");
      setTimeout(() => {
        if (botProcess) {
          botProcess.kill("SIGKILL");
        }
      }, 3000);
    });
  };

  const ensureBotProcessState = async () => {
    const settings = await getBotSettings();
    if (settings?.isBotEnabled) {
      await startBotProcess();
    } else if (botProcess) {
      await stopBotProcess();
    }
  };

  return {
    botRuntime,
    serializeBotRuntime,
    readBotToken,
    writeBotToken,
    startBotProcess,
    stopBotProcess,
    ensureBotProcessState,
  };
};

module.exports = {
  createBotRuntimeService,
};
