const createServerLifecycleService = ({
  cron,
  cronExpression,
  cronTimezone,
  createBackup,
  listBackups,
  path,
  backupDir,
  fs,
  backupRetentionDays,
  stopAppointmentReminderLoop,
  stopRealtimeLoop,
  shutdownRealtimeClients,
  shutdownHomeRealtimeClients,
  stopBotProcess,
  stopHttpServer,
  prisma,
  processObj = process,
  ensureUsersHomeAuthColumns,
  ensureTelegramAuthRequestsTable,
  markExpiredTelegramAuthRequests,
  ensureLicenseValid,
  startLicenseWatcher,
  runPostUpdateDatabaseFixes,
  migrateLegacyHomeUsersToUsers,
  ensureBootstrapData,
  normalizeStoredAppointmentStatuses,
  seedServicesFromCost,
  ensureBotProcessState,
  startAppointmentReminderLoop,
  runRealtimePush,
  ensureRealtimeLoop,
  app,
  port,
  setHttpServer,
}) => {
  const runBackupCronTask = async () => {
    try {
      await createBackup();
      const files = await listBackups();
      const now = Date.now();
      await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(backupDir, file);
          const stats = await fs.stat(filePath);
          const ageDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
          if (ageDays > backupRetentionDays) {
            await fs.remove(filePath);
          }
        }),
      );
    } catch (error) {
      console.error("Backup cron error:", error);
    }
  };

  const installBackupCron = () => {
    const backupCronOptions = cronTimezone ? { timezone: cronTimezone } : undefined;
    try {
      cron.schedule(cronExpression, runBackupCronTask, backupCronOptions);
      console.log(
        `[backup] Cron scheduled: ${cronExpression}${
          cronTimezone ? ` (${cronTimezone})` : " (server timezone)"
        }`,
      );
    } catch (error) {
      console.error(
        `[backup] Invalid cron config "${cronExpression}"${
          cronTimezone ? ` (${cronTimezone})` : ""
        }, using fallback "0 3 * * *".`,
        error,
      );
      cron.schedule("0 3 * * *", runBackupCronTask);
    }
  };

  const gracefulShutdown = async (signal) => {
    const isPm2 = process.env.PM2_HOME || process.env.pm_id;
    const timeoutMs = 30000;
    
    console.log(`[shutdown] Received ${signal || 'shutdown'}, draining connections...`);
    
    // Set a hard timeout to prevent hanging
    const forceExitTimer = setTimeout(() => {
      console.error('[shutdown] Forced exit after timeout');
      processObj.exit(1);
    }, timeoutMs);
    forceExitTimer.unref();
    
    try {
      // 1. Stop accepting new connections
      stopAppointmentReminderLoop();
      stopRealtimeLoop();
      
      // 2. Notify SSE clients about upcoming restart
      try {
        shutdownRealtimeClients();
        shutdownHomeRealtimeClients?.();
      } catch (e) {
        // Non-fatal
      }
      
      // 3. Stop bot process
      await stopBotProcess();
      
      // 4. Drain HTTP connections (give in-flight requests time to complete)
      await stopHttpServer();
      
      // 5. Disconnect Prisma
      await prisma.$disconnect();
      
      // 6. If PM2, signal readiness for graceful reload
      if (isPm2 && processObj.send) {
        console.log('[shutdown] Signaling PM2 readiness');
        processObj.send('ready');
      }
      
      clearTimeout(forceExitTimer);
      processObj.exit(0);
    } catch (error) {
      console.error('[shutdown] Error during graceful shutdown:', error);
      clearTimeout(forceExitTimer);
      processObj.exit(1);
    }
  };

  const registerShutdownHandlers = () => {
    processObj.on("SIGINT", () => gracefulShutdown("SIGINT"));
    processObj.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    processObj.on("SIGUSR2", () => gracefulShutdown("SIGUSR2")); // PM2 reload signal
  };

  const bootstrap = async () => {
    try {
      await ensureUsersHomeAuthColumns();
      await ensureTelegramAuthRequestsTable();
      await markExpiredTelegramAuthRequests();
      try {
        await ensureLicenseValid(true);
      } catch (licenseError) {
        console.warn(
          "License validation failed during bootstrap, server will continue in restricted mode:",
          licenseError?.message || licenseError,
        );
      }
      await runPostUpdateDatabaseFixes?.();
      startLicenseWatcher();
      const legacyMigration = await migrateLegacyHomeUsersToUsers();
      if (legacyMigration.created || legacyMigration.updated) {
        console.log(
          `Legacy home users migrated: created=${legacyMigration.created}, updated=${legacyMigration.updated}, total=${legacyMigration.total}`,
        );
      }
      await ensureBootstrapData();
      const normalizedStatuses = await normalizeStoredAppointmentStatuses();
      if (normalizedStatuses.updated) {
        console.log(
          `Appointment statuses normalized: updated=${normalizedStatuses.updated}, total=${normalizedStatuses.total}`,
        );
      }
      await seedServicesFromCost();
      await ensureBotProcessState();
      startAppointmentReminderLoop();
      await runRealtimePush(true);
      ensureRealtimeLoop();
      const server = app.listen(port, () => {
        console.log(`CRM server ready on http://localhost:${port}`);
      });
      setHttpServer(server);
    } catch (error) {
      console.error("Bootstrap error:", error);
      processObj.exit(1);
    }
  };

  return {
    runBackupCronTask,
    installBackupCron,
    gracefulShutdown,
    registerShutdownHandlers,
    bootstrap,
  };
};

module.exports = {
  createServerLifecycleService,
};
