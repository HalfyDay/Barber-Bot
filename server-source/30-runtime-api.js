} = createSitePresenceService();
const stopHttpServer = () =>
  new Promise((resolve) => {
    if (!httpServer) return resolve();
    httpServer.close((error) => {
      if (error) {
        console.error("HTTP server close error:", error);
      }
      httpServer = null;
      resolve();
    });
    setTimeout(() => resolve(), 4000);
  });
const performSystemUpdate = async () => {
  if (updateInProgress) {
    throw new Error("System update is already running");
  }
  updateInProgress = true;
  const realtimeWasRunning = hasRealtimeLoop();
  let prismaDisconnected = false;
  try {
    console.log("[update] performSystemUpdate: stopping services...");
    stopRealtimeLoop();
    shutdownRealtimeClients();
    await stopBotProcess();
    try {
      await prisma.$disconnect();
      prismaDisconnected = true;
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (disconnectError) {
      console.warn(
        "Failed to disconnect Prisma before update:",
        disconnectError?.message || disconnectError,
      );
    }
    console.log("[update] performSystemUpdate: applying update...");
    const result = await applyUpdate();
    console.log("[update] performSystemUpdate: update applied");
    return result;
  } catch (error) {
    if (!restartScheduled) {
      if (prismaDisconnected) {
        try {
          await prisma.$connect();
          prismaDisconnected = false;
        } catch (reconnectError) {
          console.error(
            "Failed to reconnect Prisma after update error:",
            reconnectError?.message || reconnectError,
          );
        }
      }
      if (realtimeWasRunning) {
        ensureRealtimeLoop();
      }
      try {
        await ensureBotProcessState();
      } catch (cleanupError) {
        console.error(
          "Failed to restore bot process state after update error:",
          cleanupError?.message || cleanupError,
        );
      }
    }
    throw error;
  } finally {
    if (prismaDisconnected && !restartScheduled) {
      try {
        await prisma.$connect();
      } catch (reconnectError) {
        console.error(
          "Failed to reconnect Prisma after update:",
          reconnectError?.message || reconnectError,
        );
      }
    }
    updateInProgress = false;
  }
};
const {
  buildPostRestartHealthUrl,
  appendUpdateAlert,
  waitForPostRestartHealth,
} = createUpdateMonitorService({
  fs,
  path,
  os,
  runtimeFetch,
  config: {
    port: PORT,
    healthcheckPath: HEALTHCHECK_PATH,
    postRestartHealthcheckEnabled: POST_RESTART_HEALTHCHECK_ENABLED,
    postRestartHealthcheckHost: POST_RESTART_HEALTHCHECK_HOST,
    postRestartHealthcheckPort: process.env.POST_RESTART_HEALTHCHECK_PORT || PORT,
    postRestartHealthcheckTimeoutMs: POST_RESTART_HEALTHCHECK_TIMEOUT_MS,
    postRestartHealthcheckIntervalMs: POST_RESTART_HEALTHCHECK_INTERVAL_MS,
    postRestartHealthcheckUrl: POST_RESTART_HEALTHCHECK_URL,
    updateAlertLog: UPDATE_ALERT_LOG,
  },
});
const scheduleSelfRestart = (delayMs = 500) => {
  if (restartScheduled) return;
  restartScheduled = true;
  updateInProgress = true;
  const restartStrategy = getRestartStrategy();
  const { command, args } = restartCommand();
  console.log(
    `[update] Scheduling self-restart in ${delayMs}ms (strategy: ${restartStrategy}) with: ${command} ${args.join(
      " ",
    )}`,
  );
  setTimeout(async () => {
    let relaunched = false;
    try {
      stopAppointmentReminderLoop();
      stopRealtimeLoop();
      shutdownRealtimeClients();
      await stopBotProcess();
      await stopHttpServer();
      await prisma.$disconnect();
    } catch (error) {
      console.error("Shutdown for restart failed:", error);
    }
    if (restartStrategy === "exit") {
      console.log(
        "[update] Restart strategy is exit: terminating process and waiting for supervisor restart.",
      );
      process.exit(0);
      return;
    }
    try {
      const child = spawn(command, args, {
        cwd: __dirname,
        env: process.env,
        detached: false,
        windowsHide: false,
        stdio: "inherit",
      });
      child.on("error", (spawnError) => {
        console.error("Failed to relaunch application:", spawnError);
      });
      relaunched = true;
      console.log("[update] Relaunch spawned in current console");
    } catch (error) {
      console.error("Failed to relaunch application:", error);
    }
    if (!relaunched) {
      console.error(
        "[update] Relaunch did not start; keeping current process alive.",
      );
      await appendUpdateAlert("Не удалось поднять новый процесс после обновления.", {
        strategy: restartStrategy,
      });
      restartScheduled = false;
      updateInProgress = false;
      ensureRealtimeLoop();
      await ensureBotProcessState();
      return;
    }
    const healthResult = await waitForPostRestartHealth();
    if (healthResult.ok) {
      if (!healthResult.skipped) {
        console.log(
          `[update] Post-restart health check passed in ${healthResult.elapsedMs}ms (${healthResult.url})`,
        );
      }
    } else {
      const details = {
        strategy: restartStrategy,
        url: healthResult.url,
        error: healthResult.error,
        elapsedMs: healthResult.elapsedMs,
      };
      console.error("[update] Post-restart health check failed:", details);
      await appendUpdateAlert("Post-restart health check failed", details);
    }
    console.log("[update] Exiting current process after relaunch spawn.");
    process.exit(0);
  }, delayMs);
};
const {
  sendTelegramMessage,
  notifyBarberAboutNewAppointment,
  startAppointmentReminderLoop,
  stopAppointmentReminderLoop,
} = createNotificationReminderService({
  normalizeText,
  readBotToken,
  runtimeFetch,
  prisma,
  formatDateOnly,
  parseDateTime,
  parseTimeRangeParts,
  parseZonedDateTime,
  listUsersWithHaircutReminderState,
  markUserHaircutReminderSent,
  getUserBookingSummaryByTelegram,
  getBotSettings,
  appointmentRetentionDays: APPOINTMENT_RETENTION_DAYS,
  appointmentReminderIntervalMs: APPOINTMENT_REMINDER_INTERVAL_MS,
  statusActive: STATUS_ACTIVE,
  logger: console,
});
app.get("/api/login/options", handleLoginOptions);
app.post("/api/login", handleLogin);
app.get("/api/auth/me", authenticateToken, (req, res) => {
  const identity = resolveUserIdentity(req.user || req.identity || {});
  res.json({
    authenticated: true,
    username: identity.username || null,
    displayName: identity.barberName || identity.username || null,
    barberId: identity.barberId || null,
    role: identity.role || null,
    barberName: identity.barberName || null,
  });
});
registerHomeRoutes({
  app,
  authenticateHomeToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  hashHomePassword,
  verifyHomePassword,
  findHomeUserByPhone,
  findHomeUserByTelegramId,
  findHomeUserById,
  shouldHydrateUserNameFromHome,
  HOME_USER_SELECT,
  HOME_PROFILE_SELECT,
  toPublicHomeUser,
  toPublicHomeProfile,
  buildHomeIdentity,
  signHomeSessionToken,
  buildLimitBlockedMessage,
  getBotSettings,
  getUserMeta,
  updateUserMeta,
  applyReferralCode,
  buildReferralPayload,
  resolveBsTransferRecipient,
  transferBsBalance,
  applyBsToBookingAppointment,
  refundBsForCancelledAppointment,
  buildHomeAppPayload,
  buildPublicHomePayload,
  TELEGRAM_BOT_USERNAME,
  markExpiredTelegramAuthRequests,
  createTelegramAuthRequest,
  getTelegramAuthRequestById,
  updateTelegramAuthRequestById,
  deleteTelegramAuthRequestById,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_FLOW_PROFILE_LINK,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
  toTelegramIdNumber,
  resolveHomeAssetPath,
  getServiceCatalog,
  resolveHomeBookingUser,
  getHomeBookingSettings,
  appointmentService,
  getBarbers,
  buildDateWindow,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  notifyBarberAboutNewAppointment,
  requestRealtimePush: requestUnifiedRealtimePush,
  parseDateTime,
  touchSitePresenceSession,
  removeSitePresenceSession,
  attachHomeRealtimeClient,
});
registerBotInternalRoutes({
  app,
  authenticateBotInternal,
  normalizeText,
  normalizePhone,
  prisma,
  getBotSettings,
  getBarbers,
  getServiceCatalog,
  getUserBookingSummaryByTelegram,
  registerOrUpdateBotUser,
  updateBotUserNameByTelegram,
  updateBotUserPhoneByTelegram,
  processBotInternalTelegramAuthStart,
  processBotInternalTelegramAuthPhone,
  listBotAvailabilityDates,
  listBotAvailabilityTimes,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  getHomeBookingSettings,
  randomUUID,
  appointmentService,
  notifyBarberAboutNewAppointment,
  requestRealtimePush: requestUnifiedRealtimePush,
  parseDateTime,
});
app.use("/api", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const headerToken = authHeader && authHeader.split(" ")[1];
  const queryToken = typeof req.query?.token === "string" ? req.query.token : "";
  const token = headerToken || queryToken;
  if (token) {
    try {
      const { payload } = verifyTokenGracefully(token);
      const identity = resolveUserIdentity(payload || {});
      if (isCreatorIdentity(identity) || isOwnerIdentity(identity)) {
        req.identity = identity;
        req.user = identity;
        return next();
      }
    } catch (error) {
      console.warn("License bypass token parse failed:", error.message);
    }
  }
  return licenseMiddleware(req, res, next);
});

registerOwnerSystemRoutes({
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
  getUpdateInProgress: () => updateInProgress,
  performSystemUpdate,
  scheduleSelfRestart,
  appendUpdateAlert,
  isDatabaseCorruptionError,
  buildDatabaseCorruptionMessage,
  getRestartScheduled: () => restartScheduled,
  createBackup,
  listBackups,
  restoreBackup,
  path,
  BACKUP_DIR,
  fs,
  getSiteSettings,
  updateSiteSettings,
  getSiteOnlineCount,
});
app.get("/api/dashboard/overview", authenticateToken, async (req, res) => {
  try {
    const forceRefresh = parseEnvBoolean(req.query?.force, false);
    const { snapshot, cacheStatus } = await buildDashboardSnapshotCached(req.identity, {
      force: forceRefresh,
    });
    res.setHeader("X-Dashboard-Cache", cacheStatus);
    res.json(snapshot);
  } catch (error) {
    console.error("Dashboard snapshot error:", error);
    res
      .status(500)
      .json({ error: "Не удалось загрузить данные панели." });
  }
});
registerServiceCatalogRoutes({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  isOwnerRequest,
  isStaffIdentity,
  normalizeText,
  getServiceCatalog,
  getBarbers,
  filterBarbersForIdentity,
  filterServicesForIdentity,
});
registerOwnerAssetsRoutes({
  app,
  authenticateToken,
  isOwnerRequest,
  listAvatarImages,
  buildSafeImageFilename,
  IMAGE_DIR,
  decodeBase64Image,
  MAX_AVATAR_FILE_SIZE,
  ensureUniqueImageName,
  fs,
  path,
  CARD_IMAGE_DIR,
  normalizeText,
  getExistingImageFilename,
  listMenuImages,
  MENU_IMAGE_DIR,
  loadBotMenu,
  saveBotMenu,
  prisma,
});
app.get("/api/events/stream", authenticateStream, (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no",
  });
  req.socket?.setKeepAlive?.(true);
  if (typeof res.flushHeaders === "function") {
    res.flushHeaders();
  } else {
    res.writeHead(200);
  }
  res.write("retry: 5000\n\n");
  attachRealtimeClient({ req, res });
});
registerAdminCrudRoutes({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  tableToModelMap,
  TABLE_ORDERING,
  STAFF_READ_TABLES,
  STAFF_WRITE_TABLES,
  STAFF_DELETE_TABLES,
  isStaffIdentity,
  getIdentityBarberName,
  matchesIdentityBarber,
  filterBarbersForIdentity,
  filterAppointmentsForIdentity,
  mapAppointment,
  getBarbers,
  propagateBarberRename,
  coercePayload,
  normalizeAppointmentStatus,
  appointmentService,
  respondWithAppointmentDomainError,
  requestRealtimePush: requestUnifiedRealtimePush,
  respondWithLegacyCrudBlock,
  buildUserInsightsMap,
  adjustUserBsBalance,
  addUserWarning,
});
app.get("/api/options/appointments", authenticateToken, async (req, res) => {
  try {
    const [services, barbers] = await Promise.all([
      getServiceCatalog(false, req.identity),
      getBarbers({ includeInactive: false }),
    ]);
    res.json({
      services: services.map((svc) => svc.name),
      barbers: filterBarbersForIdentity(barbers, req.identity).map(
        (barber) => barber.name,
      ),
      statuses: BOT_SUPPORTED_STATUS_OPTIONS,
    });
  } catch (error) {
    console.error("Options fetch error:", error);
    res
      .status(500)
      .json({ error: "Не удалось получить справочники записи." });
  }
});
app.get("/api/revenue/summary", authenticateToken, async (req, res) => {
  const identity = resolveRequestIdentity(req);
  const isOwner = hasOwnerAccess(identity);
  const isStaff = isStaffIdentity(identity);
  const normalizedIdentityBarberId = identity?.barberId
    ? normalizeText(identity.barberId)
    : null;
  let requestedBarberId = normalizeText(req.query.barberId);
  if (isStaff) {
    if (!normalizedIdentityBarberId) {
      return res
        .status(403)
        .json({ error: "У сотрудника не указан барбер в профиле." });
    }
    if (requestedBarberId && requestedBarberId !== normalizedIdentityBarberId) {
      return res.status(403).json({ error: "Недостаточно прав для просмотра выручки." });
    }
    requestedBarberId = normalizedIdentityBarberId;
  } else if (!isOwner) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для просмотра выручки." });
  }
  try {
    const summary = await buildRevenueSummary({
      requestedBarberId,
      start: req.query.start,
      end: req.query.end,
    });
    const { targetBarber } = summary;
    if (isStaff && !targetBarber) {
      return res.status(404).json({ error: "Барбер не найден." });
    }
    res.json(summary);
  } catch (error) {
    console.error("Revenue summary error:", error);
    res.status(500).json({
      error: "Не удалось получить сводку выручки.",
      details: error.message,
    });
  }
});
app.get("/api/user-profile/:name", authenticateToken, async (req, res) => {
  try {
    const profile = await buildUserProfile(req.params.name);
    if (!profile)
      return res.status(404).json({ error: "Пользователь не найден." });
    res.json(profile);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res
      .status(500)
      .json({ error: "Не удалось загрузить профиль пользователя." });
  }
});
app.post("/api/users/:id/block", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав: требуется владелец приложения." });
  }
  const { id } = req.params;
  const shouldBlock = req.body?.blocked !== false;
  try {
    const result = await toggleUserBlock({ id, shouldBlock });
    if (!result) {
      return res.status(404).json({ error: "Пользователь не найден." });
    }
    return res.json(result);
  } catch (error) {
    console.error("Block toggle error:", error);
    return res
      .status(500)
      .json({ error: "Не удалось изменить статус блокировки.", details: error.message });
  }
});
const {
  installBackupCron,
  registerShutdownHandlers,
  bootstrap,
} = createServerLifecycleService({
  cron,
  cronExpression: BACKUP_CRON_EXPRESSION,
  cronTimezone: BACKUP_CRON_TIMEZONE,
  createBackup,
  listBackups,
  path,
  backupDir: BACKUP_DIR,
  fs,
  backupRetentionDays: BACKUP_RETENTION_DAYS,
  stopAppointmentReminderLoop,
  stopRealtimeLoop,
  shutdownRealtimeClients,
  shutdownHomeRealtimeClients,
  stopBotProcess,
  stopHttpServer,
  prisma,
  processObj: process,
  ensureUsersHomeAuthColumns,
  ensureTelegramAuthRequestsTable,
  markExpiredTelegramAuthRequests,
  ensureLicenseValid,
  startLicenseWatcher,
  migrateLegacyHomeUsersToUsers,
  ensureBootstrapData,
  normalizeStoredAppointmentStatuses,
  seedServicesFromCost,
  ensureBotProcessState,
  startAppointmentReminderLoop,
  runRealtimePush,
  ensureRealtimeLoop,
  app,
  port: PORT,
  setHttpServer: (server) => {
    httpServer = server;
  },
});
installBackupCron();
registerShutdownHandlers();
bootstrap();

