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
  let snapshotHash = null;
  let busy = false;
  let pendingForce = false;
  let lastEventString = null;

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

  const broadcastRealtimePayload = (payload) => {
    const eventString = formatSseEventString("appointments", payload);
    lastEventString = eventString;
    clients.forEach((client) => {
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

  const runPush = async (force = false) => {
    if (busy) {
      pendingForce = pendingForce || force;
      return;
    }
    busy = true;
    try {
      const snapshot = await buildPayload();
      const nextHash = hashAppointmentsSnapshot(snapshot.appointmentsRaw);
      if (!force && nextHash === snapshotHash) return;
      snapshotHash = nextHash;
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
      broadcastRealtimePayload(envelope);
    } catch (error) {
      logError("Realtime snapshot error:", error);
    } finally {
      busy = false;
      if (pendingForce) {
        const shouldForce = pendingForce;
        pendingForce = false;
        void runPush(shouldForce);
      }
    }
  };

  const requestPush = (force = false) =>
    runPush(force).catch((error) => logError("Realtime push failed:", error));

  const ensureLoop = () => {
    if (interval) return;
    interval = setIntervalFn(() => {
      if (clients.size === 0) return;
      void runPush(false);
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

  const attachClient = ({ req, res }) => {
    const client = { id: randomUUID(), res, keepAlive: null };
    clients.add(client);
    if (lastEventString) {
      res.write(lastEventString);
    } else {
      requestPush(true);
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
