const createAuthService = ({
  jwt,
  jwtSecret,
  tokenExpiresIn,
  tokenRefreshThresholdMs,
  homeJwtSecret,
  homeTokenExpiresIn,
  homeTokenRefreshThresholdMs,
  botInternalApiToken,
  resolveUserIdentity,
  normalizeText,
  normalizePhone,
  normalizeLogin,
  buildHomeIdentity,
  creatorAccount,
  creatorRole,
  prisma,
  isDatabaseCorruptionError,
  buildDatabaseCorruptionMessage,
}) => {
  const readBearerToken = (req) => {
    const authHeader = req.headers.authorization;
    return authHeader && authHeader.split(" ")[1];
  };

  const signSessionToken = (identity) =>
    jwt.sign(identity, jwtSecret, {
      expiresIn: tokenExpiresIn,
    });

  const verifyTokenGracefully = (token) => {
    try {
      const payload = jwt.verify(token, jwtSecret);
      return { payload, expired: false };
    } catch (error) {
      if (error?.name !== "TokenExpiredError") throw error;
      const payload = jwt.verify(token, jwtSecret, { ignoreExpiration: true });
      return { payload, expired: true };
    }
  };

  const shouldRefreshToken = (payload, expired) => {
    if (expired) return true;
    if (!payload?.exp) return false;
    const expiresAtMs = payload.exp * 1000;
    return expiresAtMs - Date.now() <= tokenRefreshThresholdMs;
  };

  const refreshSessionToken = (res, identity) => {
    try {
      const nextToken = signSessionToken(identity);
      res.setHeader("x-session-token", nextToken);
    } catch (error) {
      console.warn("token refresh failed:", error?.message || error);
    }
  };

  const authenticateToken = (req, res, next) => {
    const headerToken = readBearerToken(req);
    const queryToken = typeof req.query?.token === "string" ? req.query.token : "";
    const token = headerToken || queryToken;
    if (!token) return res.sendStatus(401);
    try {
      const { payload, expired } = verifyTokenGracefully(token);
      const identity = resolveUserIdentity(payload || {});
      req.user = identity;
      req.identity = identity;
      if (shouldRefreshToken(payload, expired)) {
        refreshSessionToken(res, identity);
      }
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };

  const authenticateStream = (req, res, next) => {
    const directToken = req.query.token;
    const headerToken = readBearerToken(req);
    const token = directToken || headerToken;
    if (!token) return res.sendStatus(401);
    try {
      const { payload, expired } = verifyTokenGracefully(token);
      const identity = resolveUserIdentity(payload || {});
      req.user = identity;
      req.identity = identity;
      if (shouldRefreshToken(payload, expired)) {
        refreshSessionToken(res, identity);
      }
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };

  const authenticateBotInternal = (req, res, next) => {
    const headerToken = normalizeText(req.headers["x-bot-internal-token"]);
    const queryToken = normalizeText(req.query?.token);
    const token = headerToken || queryToken;
    if (!token) return res.sendStatus(401);
    if (token !== botInternalApiToken) return res.sendStatus(403);
    return next();
  };

  const signHomeSessionToken = (identity) =>
    jwt.sign(
      {
        userId: identity.userId,
        phone: identity.phone,
        displayName: identity.displayName,
        accountRole: identity.accountRole,
        barberId: identity.barberId,
        barberName: identity.barberName,
        isBarber: identity.isBarber === true,
        scope: "home_client",
      },
      homeJwtSecret,
      { expiresIn: homeTokenExpiresIn },
    );

  const verifyHomeTokenGracefully = (token) => {
    try {
      const payload = jwt.verify(token, homeJwtSecret);
      return { payload, expired: false };
    } catch (error) {
      if (error?.name !== "TokenExpiredError") throw error;
      const payload = jwt.verify(token, homeJwtSecret, { ignoreExpiration: true });
      return { payload, expired: true };
    }
  };

  const shouldRefreshHomeToken = (payload, expired) => {
    if (expired) return true;
    if (!payload?.exp) return false;
    const expiresAtMs = payload.exp * 1000;
    return expiresAtMs - Date.now() <= homeTokenRefreshThresholdMs;
  };

  const refreshHomeSessionToken = (res, identity) => {
    try {
      const nextToken = signHomeSessionToken(identity);
      res.setHeader("x-home-session-token", nextToken);
    } catch (error) {
      console.warn("home token refresh failed:", error?.message || error);
    }
  };

  const authenticateHomeToken = (req, res, next) => {
    const headerToken = readBearerToken(req);
    const queryToken = typeof req.query?.token === "string" ? req.query.token : "";
    const token = headerToken || queryToken;
    if (!token) return res.sendStatus(401);
    try {
      const { payload, expired } = verifyHomeTokenGracefully(token);
      if (payload?.scope !== "home_client") {
        return res.sendStatus(403);
      }
      const identity = buildHomeIdentity(payload || {});
      if (!identity.userId || !identity.phone) {
        return res.sendStatus(403);
      }
      req.homeUser = identity;
      if (shouldRefreshHomeToken(payload, expired)) {
        refreshHomeSessionToken(res, identity);
      }
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };

  const handleLoginOptions = async (req, res) => {
    try {
      const barbers = await prisma.barbers.findMany({
        where: { isActive: true, login: { not: null }, password: { not: null } },
        select: {
          id: true,
          name: true,
          login: true,
          phone: true,
          color: true,
          orderIndex: true,
          password: true,
        },
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });
      const options = [
        ...(creatorAccount?.enabled &&
        normalizeText(creatorAccount.password) &&
        normalizeText(creatorAccount.username || creatorAccount.phone)
          ? [
              {
                id: "creator",
                login: creatorAccount.username || null,
                phone: normalizePhone(creatorAccount.phone) || null,
                label:
                  normalizeText(creatorAccount.name) ||
                  normalizePhone(creatorAccount.phone) ||
                  normalizeLogin(creatorAccount.username),
                color: null,
              },
            ]
          : []),
        ...barbers
          .map((barber) => {
            const normalizedPhone = normalizePhone(barber.phone);
            const normalizedLogin = normalizeLogin(barber.login);
            if (!normalizeText(barber.password)) return null;
            if (!normalizedPhone && !normalizedLogin) return null;
            return {
              id: barber.id,
              login: barber.login,
              phone: normalizedPhone || null,
              label: barber.name || normalizedPhone || normalizedLogin,
              color: barber.color || null,
            };
          })
          .filter(Boolean),
      ];
      res.json(options);
    } catch (error) {
      console.error("Login options error:", error);
      if (isDatabaseCorruptionError(error)) {
        return res.status(500).json({
          error: buildDatabaseCorruptionMessage(),
        });
      }
      res
        .status(500)
        .json({ error: "Не удалось получить список барберов" });
    }
  };

  const handleLogin = async (req, res) => {
    try {
      const loginInput =
        normalizeText(req.body?.phone) ||
        normalizeText(req.body?.username) ||
        normalizeText(req.body?.login);
      const username = normalizeLogin(loginInput);
      const normalizedPhone = normalizePhone(loginInput);
      const password = normalizeText(req.body?.password);
      if ((!username && !normalizedPhone) || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Введите номер телефона и пароль." });
      }
      const creatorPhone = normalizePhone(creatorAccount?.phone);
      const creatorLogin = normalizeLogin(creatorAccount?.username);
      const isCreatorLogin =
        creatorAccount?.enabled === true &&
        normalizeText(creatorAccount.password) &&
        password === creatorAccount.password &&
        ((creatorPhone && normalizedPhone === creatorPhone) ||
          (creatorLogin && username === creatorLogin));
      if (isCreatorLogin) {
        const identity = resolveUserIdentity({
          username: creatorAccount.phone || creatorAccount.username,
          login: creatorAccount.username,
          barberName: creatorAccount.name,
          role: creatorRole,
        });
        const token = signSessionToken(identity);
        return res.json({
          success: true,
          token,
          username: identity.username,
          displayName: identity.barberName || identity.username,
          barberId: identity.barberId,
          role: identity.role,
          barberName: identity.barberName,
          phone: creatorAccount.phone,
        });
      }
      const barbers = await prisma.barbers.findMany({
        where: { isActive: true },
        select: {
          id: true,
          name: true,
          login: true,
          phone: true,
          password: true,
          role: true,
        },
      });
      const barber = barbers.find((candidate) => {
        const phoneMatches =
          normalizedPhone && normalizePhone(candidate.phone) === normalizedPhone;
        const loginMatches =
          username && normalizeLogin(candidate.login) === username;
        return phoneMatches || loginMatches;
      });
      if (!barber || !barber.password || barber.password !== password) {
        return res
          .status(401)
          .json({ success: false, message: "Неверный номер или пароль." });
      }
      const identity = resolveUserIdentity({
        username: barber.phone || barber.login || username,
        login: barber.login || username,
        barberId: barber.id,
        barberName: barber.name || barber.login || normalizedPhone || username,
        role: barber.role,
      });
      const token = signSessionToken(identity);
      return res.json({
        success: true,
        token,
        username: identity.username,
        displayName: identity.barberName || identity.username,
        barberId: identity.barberId,
        role: identity.role,
        barberName: identity.barberName,
        phone: barber.phone || null,
      });
    } catch (error) {
      console.error("Login error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Ошибка на сервере. Попробуйте позже." });
    }
  };

  return {
    signSessionToken,
    verifyTokenGracefully,
    authenticateToken,
    authenticateStream,
    authenticateBotInternal,
    signHomeSessionToken,
    authenticateHomeToken,
    handleLoginOptions,
    handleLogin,
  };
};

module.exports = {
  createAuthService,
};
