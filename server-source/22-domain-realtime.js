const getDashboardSnapshotIdentityKey = (identity = null) => {
  const safeIdentity = identity || {};
  return JSON.stringify({
    role: normalizeText(safeIdentity.role || ""),
    barberId: normalizeText(safeIdentity.barberId || ""),
    username: normalizeText(
      safeIdentity.username || safeIdentity.login || safeIdentity.displayName || safeIdentity.name || "",
    ),
  });
};
const clearDashboardSnapshotCache = () => {
  dashboardSnapshotCache.clear();
};
const buildDashboardSnapshotCached = async (identity = null, { force = false } = {}) => {
  const cacheKey = getDashboardSnapshotIdentityKey(identity);
  const now = Date.now();
  const cachedEntry = dashboardSnapshotCache.get(cacheKey);
  if (!force && cachedEntry?.value && now - cachedEntry.timestamp < DASHBOARD_SNAPSHOT_CACHE_TTL_MS) {
    return { snapshot: cachedEntry.value, cacheStatus: "hit" };
  }
  if (!force && cachedEntry?.pending) {
    const snapshot = await cachedEntry.pending;
    return { snapshot, cacheStatus: "shared" };
  }
  const pending = (async () => {
    const startedAt = Date.now();
    const snapshot = await buildDashboardSnapshot(identity);
    dashboardSnapshotCache.set(cacheKey, {
      value: snapshot,
      timestamp: Date.now(),
      pending: null,
    });
    const durationMs = Date.now() - startedAt;
    if (durationMs >= 1000) {
      console.warn(`[perf] dashboard snapshot built in ${durationMs}ms for ${cacheKey}`);
    }
    return snapshot;
  })();
  dashboardSnapshotCache.set(cacheKey, {
    value: cachedEntry?.value || null,
    timestamp: cachedEntry?.timestamp || 0,
    pending,
  });
  try {
    const snapshot = await pending;
    return { snapshot, cacheStatus: "miss" };
  } catch (error) {
    dashboardSnapshotCache.delete(cacheKey);
    throw error;
  }
};
const {
  buildRevenueSummary,
  buildUserProfile,
  toggleUserBlock,
} = createAdminInsightsService({
  prisma,
  getBarbers,
  getServiceCatalog,
  readBlockedUsers,
  writeBlockedUsers,
  requestRealtimePush: (...args) => requestUnifiedRealtimePush(...args),
  parseDateFilter,
  getDefaultRevenueRange,
  formatDateOnly,
  normalizeText,
  buildBarberNameLookup,
  buildServiceLookup,
  getServicePriceForBarber,
  splitServiceList,
  isCompletedStatus,
  canonicalizeKey,
  mapAppointment,
  countAppointmentWarnings,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
  buildHomeAppPayload,
  buildUserInsightsMap,
});
const buildRealtimeAppointmentsPayloadForBusiness = async (businessId) => {
  if (!businessId) {
    return buildRealtimeAppointmentsPayload();
  }
  const { getTenantPrismaClient, getTenantTimezone, tenantPrismaStorage } = require("./services/prismaRuntime");
  const globalPrisma = getTenantPrismaClient("public");
  const business = await globalPrisma.businesses.findUnique({
    where: { id: String(businessId) },
  });
  if (!business || !business.isActive) {
    return buildRealtimeAppointmentsPayload();
  }
  const schema = business.dbSchema;
  const tenantPrisma = getTenantPrismaClient(schema);
  const timezone = await getTenantTimezone(schema);
  return tenantPrismaStorage.run({ prisma: tenantPrisma, timezone, schema, businessId: business.id }, () => {
    return buildRealtimeAppointmentsPayload();
  });
};
const {
  attachClient: attachRealtimeClient,
  runPush: runRealtimePush,
  requestPush: requestRealtimePush,
  ensureLoop: ensureRealtimeLoop,
  stopLoop: stopRealtimeLoop,
  shutdownClients: shutdownRealtimeClients,
  hasLoop: hasRealtimeLoop,
} = createRealtimeService({
  createHash,
  buildPayload: buildRealtimeAppointmentsPayloadForBusiness,
  pollIntervalMs: REALTIME_POLL_INTERVAL_MS,
  keepAliveMs: REALTIME_KEEPALIVE_MS,
  randomUUID,
});
const {
  attachClient: attachHomeRealtimeClient,
  broadcast: broadcastHomeRealtimeEvent,
  shutdownClients: shutdownHomeRealtimeClients,
} = createHomeRealtimeService({
  randomUUID,
  keepAliveMs: REALTIME_KEEPALIVE_MS,
});
const requestHomeRealtimeSync = (reason = "app-sync") =>
  broadcastHomeRealtimeEvent({
    type: "home:sync",
    reason: normalizeText(reason) || "app-sync",
    updatedAt: new Date().toISOString(),
  });
const requestUnifiedRealtimePush = (force = false) => {
  clearDashboardSnapshotCache();
  const { tenantPrismaStorage } = require("./services/prismaRuntime");
  const activeStore = tenantPrismaStorage.getStore();
  const businessId = activeStore?.businessId || null;
  requestRealtimePush(force, businessId);
  requestHomeRealtimeSync("app-sync");
};
const {
  touchBarber: touchBarberPresence,
  removeBarber: removeBarberPresence,
  isBarberOnline: isBarberOnline,
  getBarberLastSeen: getBarberLastSeen,
  getOnlineBarberIds: getOnlineBarberIds,
} = createBarberPresenceService();
const {
  touchSession: touchSitePresenceSession,
  removeSession: removeSitePresenceSession,
  getOnlineCount: getSiteOnlineCount,

