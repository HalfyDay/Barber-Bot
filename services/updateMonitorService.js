const createUpdateMonitorService = ({
  fs,
  path,
  os,
  runtimeFetch,
  wait = (delayMs) =>
    new Promise((resolve) => {
      setTimeout(resolve, delayMs);
    }),
  config,
}) => {
  const buildPostRestartHealthUrl = () => {
    if (config.postRestartHealthcheckUrl) {
      return config.postRestartHealthcheckUrl;
    }
    const rawPort = Number(config.postRestartHealthcheckPort || config.port);
    const safePort = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : 3000;
    return `http://${config.postRestartHealthcheckHost}:${safePort}${config.healthcheckPath}`;
  };

  const appendUpdateAlert = async (message, details = {}) => {
    const entry = {
      level: "error",
      source: "update",
      message,
      details,
      time: new Date().toISOString(),
    };
    try {
      await fs.ensureDir(path.dirname(config.updateAlertLog));
      await fs.appendFile(
        config.updateAlertLog,
        `${JSON.stringify(entry)}${os.EOL}`,
        "utf8",
      );
    } catch (error) {
      console.error("[update] Failed to persist alert:", error?.message || error);
    }
  };

  const waitForPostRestartHealth = async () => {
    if (!config.postRestartHealthcheckEnabled) {
      return { ok: true, skipped: true, reason: "disabled" };
    }
    const url = buildPostRestartHealthUrl();
    const startedAt = Date.now();
    const deadline = startedAt + config.postRestartHealthcheckTimeoutMs;
    let lastError = "timeout";
    while (Date.now() < deadline) {
      try {
        const response = await runtimeFetch(url, {
          method: "GET",
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          return {
            ok: true,
            url,
            status: response.status,
            elapsedMs: Date.now() - startedAt,
          };
        }
        lastError = `HTTP ${response.status}`;
      } catch (error) {
        lastError = error?.message || "network_error";
      }
      await wait(config.postRestartHealthcheckIntervalMs);
    }
    return {
      ok: false,
      url,
      error: lastError,
      elapsedMs: Date.now() - startedAt,
    };
  };

  return {
    buildPostRestartHealthUrl,
    appendUpdateAlert,
    waitForPostRestartHealth,
  };
};

module.exports = {
  createUpdateMonitorService,
};
