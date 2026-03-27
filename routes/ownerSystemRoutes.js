const registerOwnerSystemRoutes = ({
  app,
  authenticateToken,
  isOwnerRequest,
  ensureLicenseValid,
  getLicenseStatus,
  getBotSettings,
  readBotToken,
  serializeBotRuntime,
  ensureBotSettingsRecord,
  prisma,
  startBotProcess,
  stopBotProcess,
  ensureBotProcessState,
  normalizeText,
  writeBotToken,
  botRuntime,
  checkForUpdates,
  getUpdateInProgress,
  performSystemUpdate,
  scheduleSelfRestart,
  appendUpdateAlert,
  isDatabaseCorruptionError,
  buildDatabaseCorruptionMessage,
  getRestartScheduled,
  createBackup,
  listBackups,
  restoreBackup,
  path,
  BACKUP_DIR,
  fs,
  getSiteSettings,
  updateSiteSettings,
}) => {
  app.get("/api/license/status", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для доступа к лицензии." });
    }
    try {
      const status = await ensureLicenseValid();
      res.json(status);
    } catch (error) {
      res.status(403).json({
        error: "Лицензия недействительна. Проверьте ключ и повторите попытку.",
        details: error.message,
        status: getLicenseStatus(),
      });
    }
  });

  app.get("/api/bot/status", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для управления ботом." });
    }
    const settings = await getBotSettings();
    const token = await readBotToken();
    res.json({ status: serializeBotRuntime(), settings, token });
  });

  app.post("/api/bot/status", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для управления ботом." });
    }
    const { action, isBotEnabled } = req.body || {};
    try {
      const currentSettings = await ensureBotSettingsRecord();
      if (typeof isBotEnabled === "boolean") {
        await prisma.botSettings.update({
          where: { id: currentSettings.id },
          data: { isBotEnabled, lastSyncSource: "site" },
        });
      }
      let actionHandled = false;
      if (action === "start") {
        await startBotProcess();
        actionHandled = true;
      } else if (action === "stop") {
        await stopBotProcess();
        actionHandled = true;
      } else if (action === "restart") {
        await stopBotProcess();
        await startBotProcess();
        actionHandled = true;
      }
      if (!actionHandled) {
        await ensureBotProcessState();
      }
      const settings = await getBotSettings();
      res.json({ status: serializeBotRuntime(), settings });
    } catch (error) {
      console.error("Bot status update failed:", error);
      res.status(500).json({ error: "Не удалось изменить статус бота." });
    }
  });

  app.put("/api/bot/token", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для изменения токена." });
    }
    const candidate = normalizeText(req.body?.token);
    if (!candidate) {
      return res.status(400).json({ error: "Укажите токен бота." });
    }
    try {
      const token = await writeBotToken(candidate);
      if (botRuntime.running) {
        await stopBotProcess();
        await startBotProcess();
      }
      res.json({ token });
    } catch (error) {
      console.error("Bot token update failed:", error);
      res.status(500).json({ error: "Не удалось обновить токен бота." });
    }
  });

  app.get("/api/system/update", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для проверки обновлений." });
    }
    try {
      const force = req.query.force === "1" || req.query.force === "true";
      const info = await checkForUpdates(force);
      res.json(info);
    } catch (error) {
      console.error("Update check error:", error);
      res.status(500).json({
        error: "Не удалось проверить обновления.",
        details: error.message,
      });
    }
  });

  app.post("/api/system/update", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для установки обновлений." });
    }
    if (getUpdateInProgress()) {
      return res.status(429).json({ error: "Обновление уже выполняется." });
    }
    try {
      console.log("[update] /api/system/update: user", req.identity?.username || "unknown");
      const result = await performSystemUpdate();
      const info = await checkForUpdates(true);
      res.json({ ...result, info, restarting: true });
      scheduleSelfRestart();
    } catch (error) {
      console.error("Update apply error:", error);
      await appendUpdateAlert("System update failed", {
        user: req.identity?.username || "unknown",
        error: error?.message || String(error),
      });
      if (isDatabaseCorruptionError(error)) {
        return res.status(500).json({
          error: "Не удалось применить обновление.",
          details: buildDatabaseCorruptionMessage(),
        });
      }
      res.status(500).json({
        error: "Не удалось применить обновление.",
        details: error.message,
      });
    }
  });

  app.post("/api/system/restart", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для перезапуска системы." });
    }
    if (getUpdateInProgress() || getRestartScheduled()) {
      return res
        .status(429)
        .json({ error: "Перезапуск или обновление уже выполняется." });
    }
    try {
      console.log(
        "[restart] /api/system/restart: user",
        req.identity?.username || "unknown",
      );
      scheduleSelfRestart(400);
      res.json({ restarting: true });
    } catch (error) {
      console.error("[restart] Failed to schedule restart:", error);
      res.status(500).json({
        error: "Не удалось запланировать перезапуск.",
        details: error.message,
      });
    }
  });

  app.post("/api/backups/create", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для создания бэкапов." });
    }
    try {
      await createBackup();
      res.json({ success: true, message: "Резервная копия создана." });
    } catch (error) {
      console.error("Backup create error:", error);
      res.status(500).json({ error: "Не удалось создать бэкап." });
    }
  });

  app.get("/api/backups/list", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для просмотра бэкапов." });
    }
    try {
      const files = await listBackups();
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: "Не удалось получить список бэкапов." });
    }
  });

  app.post("/api/backups/restore", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для восстановления из бэкапа." });
    }
    try {
      const { filename } = req.body || {};
      if (!filename) {
        return res.status(400).json({ error: "Не указано имя файла бэкапа." });
      }
      const restoreResult = await restoreBackup(filename);
      res.json({
        success: true,
        message: `Бэкап ${filename} восстановлен.`,
        format: restoreResult?.format || null,
      });
    } catch (error) {
      console.error("Backup restore error:", error);
      if (error?.message === "BACKUP_NOT_FOUND") {
        return res.status(404).json({ error: "Бэкап не найден." });
      }
      res.status(500).json({ error: "Не удалось восстановить бэкап." });
    }
  });

  app.post("/api/backups/delete", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для удаления бэкапов." });
    }
    try {
      const { filename } = req.body || {};
      if (!filename) {
        return res.status(400).json({ error: "Не указано имя файла бэкапа." });
      }
      const safeName = path.basename(filename);
      const backupPath = path.join(BACKUP_DIR, safeName);
      if (!(await fs.pathExists(backupPath))) {
        return res.status(404).json({ error: "Бэкап не найден." });
      }
      await fs.remove(backupPath);
      res.json({
        success: true,
        message: `Бэкап ${safeName} удален.`,
      });
    } catch (error) {
      console.error("Backup delete error:", error);
      res.status(500).json({ error: "Не удалось удалить бэкап." });
    }
  });

  app.get("/api/system/site", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для просмотра сайта." });
    }
    try {
      const site = await getSiteSettings();
      res.json(site);
    } catch (error) {
      console.error("Site settings fetch error:", error);
      res.status(500).json({ error: "Не удалось загрузить настройки сайта." });
    }
  });

  app.put("/api/system/site", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения сайта." });
    }
    try {
      const site = await updateSiteSettings(req.body || {});
      res.json(site);
    } catch (error) {
      console.error("Site settings save error:", error);
      res.status(500).json({ error: "Не удалось сохранить настройки сайта." });
    }
  });
};

module.exports = {
  registerOwnerSystemRoutes,
};
