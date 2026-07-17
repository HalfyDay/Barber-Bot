const createBarberPresenceService = ({
  now = () => Date.now(),
  ttlMs = 90 * 1000,
  cleanupIntervalMs = 30 * 1000,
  setIntervalFn = setInterval,
  clearIntervalFn = clearInterval,
} = {}) => {
  const sessions = new Map();
  let cleanupTimer = null;

  const ensureCleanupLoop = () => {
    if (cleanupTimer) return;
    cleanupTimer = setIntervalFn(() => {
      pruneExpiredSessions();
    }, cleanupIntervalMs);
  };

  const stopCleanupLoop = () => {
    if (!cleanupTimer) return;
    clearIntervalFn(cleanupTimer);
    cleanupTimer = null;
  };

  const pruneExpiredSessions = () => {
    const threshold = now() - ttlMs;
    sessions.forEach((session, key) => {
      if (!session || session.lastSeenAt < threshold) {
        sessions.delete(key);
      }
    });
    if (sessions.size === 0) {
      stopCleanupLoop();
    }
  };

  const touchBarber = ({ barberId } = {}) => {
    const safeId = String(barberId || '').trim();
    if (!safeId) return;
    sessions.set(safeId, {
      barberId: safeId,
      lastSeenAt: now(),
    });
    ensureCleanupLoop();
    pruneExpiredSessions();
  };

  const removeBarber = (barberId) => {
    const safeId = String(barberId || '').trim();
    if (!safeId) return;
    sessions.delete(safeId);
    if (sessions.size === 0) {
      stopCleanupLoop();
    }
  };

  const isBarberOnline = (barberId) => {
    const safeId = String(barberId || '').trim();
    if (!safeId) return false;
    pruneExpiredSessions();
    return sessions.has(safeId);
  };

  const getBarberLastSeen = (barberId) => {
    const safeId = String(barberId || '').trim();
    if (!safeId) return null;
    pruneExpiredSessions();
    const session = sessions.get(safeId);
    return session ? session.lastSeenAt : null;
  };

  const getOnlineBarberIds = () => {
    pruneExpiredSessions();
    return new Set(sessions.keys());
  };

  return {
    touchBarber,
    removeBarber,
    isBarberOnline,
    getBarberLastSeen,
    getOnlineBarberIds,
    pruneExpiredSessions,
    stopCleanupLoop,
  };
};

module.exports = {
  createBarberPresenceService,
};
