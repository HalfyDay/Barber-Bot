const createHomeRealtimeService = ({
  randomUUID,
  keepAliveMs = 15000,
  setIntervalFn = setInterval,
  clearIntervalFn = clearInterval,
}) => {
  const clients = new Set();

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

  const attachClient = ({ req, res, userId = "" }) => {
    const client = {
      id: randomUUID(),
      userId: String(userId || "").trim(),
      res,
      keepAlive: null,
    };
    clients.add(client);
    client.keepAlive = setIntervalFn(() => {
      try {
        res.write(":keep-alive\n\n");
      } catch {
        removeClient(client);
      }
    }, keepAliveMs);
    req.on("close", () => {
      removeClient(client);
    });
    return client.id;
  };

  const broadcast = (payload = {}) => {
    const eventString = formatSseEventString("home-sync", payload);
    clients.forEach((client) => {
      try {
        client.res.write(eventString);
      } catch {
        removeClient(client);
        try {
          client.res.end();
        } catch {
          // ignore disconnect races
        }
      }
    });
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

  return {
    attachClient,
    broadcast,
    shutdownClients,
  };
};

module.exports = {
  createHomeRealtimeService,
};
