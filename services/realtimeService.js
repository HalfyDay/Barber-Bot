const createRealtimeService = ({
  createHash,
  buildPayload,
  pollIntervalMs,
  keepAliveMs,
  randomUUID,
  setIntervalFn = setInterval,
  clearIntervalFn = clearInterval,
  logError = (...args) => console.error(...args),
}) => {
  const clients = new Set();
  let interval = null;
  const snapshotHashes = new Map();
  const busyMap = new Map();
  const pendingForceMap = new Map();
  const lastEventStrings = new Map();

  const hashAppointmentsSnapshot = (rows = []) => {
    const sorted = [...rows].sort((a, b) => {
      if (a.id && b.id) return String(a.id).localeCompare(String(b.id));
      if (a.id) return -1;
      if (b.id) return 1;
      return 0;
    });
    return createHash("sha1").update(JSON.stringify(sorted)).digest("hex");
  };

  const formatSseEventString = (eventName, payload) =>
    `event: ${eventName}\ndata: ${JSON.stringify(payload)}\n\n`;

  const removeClient = (client) => {
    if (!client) return;
    if (client.keepAlive) {
      clearIntervalFn(client.keepAlive);
      client.keepAlive = null;
    }
    clients.delete(client);
  };

  const broadcastRealtimePayload = (payload, businessId) => {
    const eventString = formatSseEventString("appointments", payload);
    const key = businessId || "";
    lastEventStrings.set(key, eventString);
    clients.forEach((client) => {
      if (client.businessId !== businessId) return;
      try {
        client.res.write(eventString);
      } catch (error) {
        removeClient(client);
        try {
          client.res.end();
        } catch {
          // ignore downstream disconnects
        }
      }
    });
  };

  const runPush = async (force = false, businessId = null) => {
    const key = businessId || "";
    if (busyMap.get(key)) {
      pendingForceMap.set(key, pendingForceMap.get(key) || force);
      return;
    }
    busyMap.set(key, true);
    try {
      const snapshot = await buildPayload(businessId);
      const nextHash = hashAppointmentsSnapshot(snapshot.appointmentsRaw);
      if (!force && nextHash === snapshotHashes.get(key)) return;
      snapshotHashes.set(key, nextHash);
      const envelope = {
        type: "appointments:update",
        payload: {
          rows: snapshot.appointmentsRaw,
          active: snapshot.active,
          upcoming: snapshot.upcoming,
          overdue: snapshot.overdue,
          stats: snapshot.stats,
          updatedAt: snapshot.updatedAt,
        },
      };
      broadcastRealtimePayload(envelope, businessId);
    } catch (error) {
      logError(`Realtime snapshot error for business ${key}:`, error);
    } finally {
      busyMap.set(key, false);
      if (pendingForceMap.get(key)) {
        const shouldForce = pendingForceMap.get(key);
        pendingForceMap.set(key, false);
        void runPush(shouldForce, businessId);
      }
    }
  };

  const requestPush = (force = false, businessId = null) =>
    runPush(force, businessId).catch((error) => logError(`Realtime push failed for business ${businessId}:`, error));

  const ensureLoop = () => {
    if (interval) return;
    interval = setIntervalFn(() => {
      if (clients.size === 0) return;
      const businessIds = new Set();
      clients.forEach((client) => {
        businessIds.add(client.businessId);
      });
      businessIds.forEach((bId) => {
        void runPush(false, bId);
      });
    }, pollIntervalMs);
  };

  const stopLoop = () => {
    if (interval) {
      clearIntervalFn(interval);
      interval = null;
    }
  };

  const shutdownClients = () => {
    clients.forEach((client) => {
      removeClient(client);
      try {
        client.res.end();
      } catch {
        // ignore
      }
    });
  };

  const attachClient = ({ req, res, businessId = null }) => {
    const client = { id: randomUUID(), res, businessId, keepAlive: null };
    clients.add(client);
    const key = businessId || "";
    const cachedEvent = lastEventStrings.get(key);
    if (cachedEvent) {
      res.write(cachedEvent);
    } else {
      requestPush(true, businessId);
    }
    client.keepAlive = setIntervalFn(() => {
      try {
        res.write(":keep-alive\n\n");
      } catch (error) {
        removeClient(client);
      }
    }, keepAliveMs);
    req.on("close", () => {
      removeClient(client);
    });
    return client.id;
  };

  const hasLoop = () => Boolean(interval);

  return {
    attachClient,
    runPush,
    requestPush,
    ensureLoop,
    stopLoop,
    shutdownClients,
    hasLoop,
  };
};

module.exports = {
  createRealtimeService,
};
