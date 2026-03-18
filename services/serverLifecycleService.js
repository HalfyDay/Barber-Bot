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
  stopBotProcess,
  stopHttpServer,
  prisma,
  processObj = process,
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

  const gracefulShutdown = async () => {
    try {
      stopAppointmentReminderLoop();
      stopRealtimeLoop();
      shutdownRealtimeClients();
      await stopBotProcess();
      await stopHttpServer();
      await prisma.$disconnect();
      processObj.exit(0);
    } catch (error) {
      console.error("Shutdown error:", error);
      processObj.exit(1);
    }
  };

  const registerShutdownHandlers = () => {
    processObj.on("SIGINT", gracefulShutdown);
    processObj.on("SIGTERM", gracefulShutdown);
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
