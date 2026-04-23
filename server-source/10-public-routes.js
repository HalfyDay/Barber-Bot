app.get("/", (req, res) => {
  setNoStoreHeaders(res);
  res.sendFile(PUBLIC_HOME_LANDING);
});
app.get("/service-worker.js", (req, res) => {
  // Keep root alias for legacy SW registrations created before /panel scope.
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(__dirname, "service-worker.js"));
});
app.get("/client-app.css", (req, res) => {
  setNoStoreHeaders(res);
  res.type("text/css");
  res.sendFile(path.join(__dirname, "client-app.css"));
});
app.get("/client-app.js", (req, res) => {
  setNoStoreHeaders(res);
  res.type("application/javascript");
  res.sendFile(path.join(__dirname, "client-app.js"));
});
app.get("/client.webmanifest", (req, res) => {
  setNoStoreHeaders(res);
  res.type("application/manifest+json");
  res.sendFile(path.join(__dirname, "client.webmanifest"));
});
app.get("/favicon.ico", (req, res) => {
  setNoStoreHeaders(res);
  res.type("image/x-icon");
  res.sendFile(path.join(__dirname, "favicon.ico"));
});
app.get("/favicon.svg", (req, res) => {
  setNoStoreHeaders(res);
  res.type("image/svg+xml");
  res.sendFile(path.join(__dirname, "Image", "site", "login", "orig_logo.svg"));
});
app.get("/apple-touch-icon.png", (req, res) => {
  setNoStoreHeaders(res);
  res.type("image/png");
  res.sendFile(path.join(__dirname, "Image", "Icon", "icon-192.png"));
});
app.get("/manifest.webmanifest", (req, res) => {
  setNoStoreHeaders(res);
  res.type("application/manifest+json");
  res.sendFile(path.join(__dirname, "manifest.webmanifest"));
});
app.get("/panel/manifest.webmanifest", (req, res) => {
  setNoStoreHeaders(res);
  res.type("application/manifest+json");
  res.sendFile(path.join(__dirname, "manifest.webmanifest"));
});
app.get("/yandex_cc337524dd400430.html", (req, res) => {
  setNoStoreHeaders(res);
  res.type("text/html; charset=utf-8");
  res.sendFile(path.join(__dirname, "yandex_cc337524dd400430.html"));
});
app.get("/googlecfc334560efc95d7.html", (req, res) => {
  setNoStoreHeaders(res);
  res.type("text/html; charset=utf-8");
  res.sendFile(path.join(__dirname, "googlecfc334560efc95d7.html"));
});
app.get("/robots.txt", (req, res) => {
  setNoStoreHeaders(res);
  res.type("text/plain; charset=utf-8");
  res.sendFile(path.join(__dirname, "robots.txt"));
});
app.get("/sitemap.xml", (req, res) => {
  setNoStoreHeaders(res);
  res.type("application/xml; charset=utf-8");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});
const CLIENT_APP_SHELL = path.join(__dirname, "home-page", "app-shell.html");
const sendClientAppShell = (req, res) => {
  setNoStoreHeaders(res);
  res.sendFile(CLIENT_APP_SHELL);
};
app.get("/login/login.css", (req, res) => {
  setNoStoreHeaders(res);
  res.type("text/css");
  res.sendFile(path.join(__dirname, "home", "home.css"));
});
app.use(
  "/login",
  express.static(path.join(__dirname, "login"), {
    setHeaders: setNoStoreHeaders,
  }),
);
app.use(
  "/legal",
  express.static(LEGAL_DIR, {
    extensions: ["html"],
    setHeaders: setNoStoreHeaders,
  }),
);
app.get(["/home", "/home/", "/booking", "/booking/", "/referral", "/referral/", "/shop", "/shop/", "/profile", "/profile/"], sendClientAppShell);
app.get(/^\/barber\/[^/]+\/?$/, sendClientAppShell);
app.use("/panel", express.static(path.join(__dirname)));
app.get(/^\/panel(?:\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/Image", express.static(IMAGE_DIR));
app.use((req, res, next) => {
  if (
    updateInProgress &&
    req.path.startsWith("/api") &&
    req.path !== "/api/system/update" &&
    req.path !== "/api/system/restart" &&
    req.path !== HEALTHCHECK_PATH
  ) {
    return res
      .status(503)
      .json({ error: "РЎРёСЃС‚РµРјР° РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ, РїРѕРІС‚РѕСЂРёС‚Рµ Р·Р°РїСЂРѕСЃ РїРѕР·Р¶Рµ." });
  }
  next();
});
app.post("/api/log", async (req, res) => {
  const payload = req.body || {};
  const isNoisyScriptError =
    payload?.message === "Script error." &&
    payload?.isGenericScriptError === true &&
    !payload?.source &&
    !payload?.line &&
    !payload?.stack;
  if (isNoisyScriptError) {
    return res.status(204).end();
  }
  const entry = {
    ...payload,
    ip: req.ip,
    time: new Date().toISOString(),
  };
  try {
    await fs.ensureDir(path.dirname(CLIENT_ERROR_LOG));
    await fs.appendFile(
      CLIENT_ERROR_LOG,
      `${JSON.stringify(entry)}${os.EOL}`,
      "utf8",
    );
  } catch (error) {
    console.error("Failed to persist client log", error);
  }
  console.error("Client error log:", entry);
  res.status(204).end();
});
const noCacheMiddleware = (req, res, next) => {
  setNoStoreHeaders(res);
  next();
};
app.use("/api", noCacheMiddleware);
app.get(HEALTHCHECK_PATH, async (req, res) => {
  const payload = {
    ok: true,
    status: "ok",
    service: "brothershop",
    timestamp: new Date().toISOString(),
    uptimeSec: Math.round(process.uptime()),
    pid: process.pid,
  };
  try {
    await prisma.$queryRaw`SELECT 1`;
    payload.database = "ok";
  } catch (error) {
    payload.ok = false;
    payload.status = "degraded";
    payload.database = "error";
    payload.error = "database_unavailable";
  }
  return res.status(payload.ok ? 200 : 503).json(payload);
});

