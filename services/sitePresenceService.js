const createSitePresenceService = ({
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

  const touchSession = ({ sessionId, userId = "", userAgent = "" } = {}) => {
    const safeSessionId = String(sessionId || "").trim();
    if (!safeSessionId) return { onlineCount: getOnlineCount() };
    sessions.set(safeSessionId, {
      sessionId: safeSessionId,
      userId: String(userId || "").trim(),
      userAgent: String(userAgent || "").trim(),
      lastSeenAt: now(),
    });
    ensureCleanupLoop();
    pruneExpiredSessions();
    return { onlineCount: sessions.size };
  };

  const removeSession = (sessionId) => {
    const safeSessionId = String(sessionId || "").trim();
    if (!safeSessionId) return { onlineCount: getOnlineCount() };
    sessions.delete(safeSessionId);
    if (sessions.size === 0) {
      stopCleanupLoop();
    }
    return { onlineCount: sessions.size };
  };

  const getOnlineCount = () => {
    pruneExpiredSessions();
    return sessions.size;
  };

  return {
    touchSession,
    removeSession,
    getOnlineCount,
    pruneExpiredSessions,
    stopCleanupLoop,
  };
};

module.exports = {
  createSitePresenceService,
};
