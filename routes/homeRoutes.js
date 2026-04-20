const DEFAULT_REFERRAL_QR_SIZE = 320;
const EXPRESSIVE_QR_PADDING = 18;

const loadQrCodeModule = () => {
  try {
    return require("qrcode");
  } catch {
    return null;
  }
};

const buildReferralQrDeepLink = ({ referralCode = "", phone = "", displayName = "" } = {}) => {
  const inviteUrl = new URL("/login/", process.env.APP_BASE_URL || "https://brothershop.website");
  if (referralCode) inviteUrl.searchParams.set("ref", referralCode);
  if (phone) inviteUrl.searchParams.set("phone", phone);
  if (displayName) inviteUrl.searchParams.set("name", displayName);
  return inviteUrl.toString();
};

const parseConsentAccepted = (value) => {
  if (value === true) return true;
  if (typeof value === "number") return value === 1;
  const normalized = String(value ?? "").trim().toLowerCase();
  return ["true", "1", "yes", "on"].includes(normalized);
};

const buildExpressiveQrSvg = (qrCode, options = {}) => {
  const moduleCount = Math.max(1, Number(qrCode?.modules?.size) || 1);
  const requestedSize = Math.max(220, Math.floor(Number(options.size) || DEFAULT_REFERRAL_QR_SIZE));
  const padding = Math.max(12, Math.floor(Number(options.padding) || EXPRESSIVE_QR_PADDING));
  const drawingSize = requestedSize - padding * 2;
  const moduleSize = drawingSize / moduleCount;
  const darkColor = "#173e3c";
  const midColor = "#1f6a63";
  const backgroundColor = "#f6fffc";
  const surfaceColor = "#e4f4ef";
  const getModuleValue = (x, y) => {
    if (!qrCode?.modules) return false;
    if (typeof qrCode.modules.get === "function") return qrCode.modules.get(x, y);
    const index = y * moduleCount + x;
    return Array.isArray(qrCode.modules.data) ? qrCode.modules.data[index] : false;
  };
  const countNeighbours = (x, y) => {
    let total = 0;
    for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
      for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
        if (!offsetX && !offsetY) continue;
        const nextX = x + offsetX;
        const nextY = y + offsetY;
        if (nextX < 0 || nextY < 0 || nextX >= moduleCount || nextY >= moduleCount) continue;
        if (getModuleValue(nextX, nextY)) total += 1;
      }
    }
    return total;
  };
  const isInsideFinder = (x, y, left, top) => x >= left && x < left + 7 && y >= top && y < top + 7;
  const isFinderModule = (x, y) =>
    isInsideFinder(x, y, 0, 0) ||
    isInsideFinder(x, y, moduleCount - 7, 0) ||
    isInsideFinder(x, y, 0, moduleCount - 7);
  const consumedModules = new Set();
  const moduleKey = (x, y) => `${x}:${y}`;
  const pickModuleColor = (x, y, density = 0) => ((x * 7 + y * 11 + density) % 5 === 0 ? midColor : darkColor);
  const renderFinder = (left, top) => {
    const x = padding + left * moduleSize;
    const y = padding + top * moduleSize;
    const outerSize = moduleSize * 7;
    const ringInset = moduleSize * 1.04;
    const ringSize = moduleSize * 4.92;
    const coreInset = moduleSize * 2.04;
    const coreSize = moduleSize * 2.92;
    return `
      <rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${outerSize.toFixed(2)}" height="${outerSize.toFixed(2)}" rx="${(moduleSize * 1.88).toFixed(2)}" fill="${midColor}" />
      <rect x="${(x + ringInset).toFixed(2)}" y="${(y + ringInset).toFixed(2)}" width="${ringSize.toFixed(2)}" height="${ringSize.toFixed(2)}" rx="${(moduleSize * 1.4).toFixed(2)}" fill="${backgroundColor}" />
      <rect x="${(x + coreInset).toFixed(2)}" y="${(y + coreInset).toFixed(2)}" width="${coreSize.toFixed(2)}" height="${coreSize.toFixed(2)}" rx="${(moduleSize * 1.04).toFixed(2)}" fill="${midColor}" />
    `;
  };

  const expressiveModules = [];
  const markConsumed = (x, y, widthModules, heightModules) => {
    for (let offsetY = 0; offsetY < heightModules; offsetY += 1) {
      for (let offsetX = 0; offsetX < widthModules; offsetX += 1) {
        consumedModules.add(moduleKey(x + offsetX, y + offsetY));
      }
    }
  };
  const drawRoundedModule = (x, y, density = 0) => {
    const inset = moduleSize * 0.1;
    const size = moduleSize - inset * 2;
    const left = padding + x * moduleSize + inset;
    const top = padding + y * moduleSize + inset;
    const radius = Math.max(size * 0.26, 3.2);
    expressiveModules.push(
      `<rect x="${left.toFixed(2)}" y="${top.toFixed(2)}" width="${size.toFixed(2)}" height="${size.toFixed(2)}" rx="${radius.toFixed(2)}" fill="${pickModuleColor(x, y, density)}" />`,
    );
    markConsumed(x, y, 1, 1);
  };
  const drawDotModule = (x, y, density = 0) => {
    const cx = padding + x * moduleSize + moduleSize / 2;
    const cy = padding + y * moduleSize + moduleSize / 2;
    const radius = moduleSize * (density >= 5 ? 0.28 : 0.24);
    expressiveModules.push(
      `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${radius.toFixed(2)}" fill="${pickModuleColor(x, y, density)}" />`,
    );
    markConsumed(x, y, 1, 1);
  };
  const drawRoundedBlock = (x, y, widthModules, heightModules, density = 0) => {
    const inset = moduleSize * 0.1;
    const left = padding + x * moduleSize + inset;
    const top = padding + y * moduleSize + inset;
    const width = widthModules * moduleSize - inset * 2;
    const height = heightModules * moduleSize - inset * 2;
    const radius = Math.max(Math.min(width, height) * 0.28, 3.2);
    expressiveModules.push(
      `<rect x="${left.toFixed(2)}" y="${top.toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" rx="${radius.toFixed(2)}" fill="${pickModuleColor(x, y, density + widthModules + heightModules)}" />`,
    );
    markConsumed(x, y, widthModules, heightModules);
  };
  const drawHorizontalRun = (x, y, runLength, density = 0) => {
    const left = padding + x * moduleSize + moduleSize * 0.06;
    const top = padding + y * moduleSize + moduleSize * (density >= 4 ? 0.22 : 0.18);
    const width = runLength * moduleSize - moduleSize * 0.12;
    const height = moduleSize * (density >= 4 ? 0.52 : 0.62);
    expressiveModules.push(
      `<rect x="${left.toFixed(2)}" y="${top.toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" rx="${(height / 2).toFixed(2)}" fill="${pickModuleColor(x, y, density + runLength)}" />`,
    );
    markConsumed(x, y, runLength, 1);
  };
  const drawVerticalRun = (x, y, runLength, density = 0) => {
    const left = padding + x * moduleSize + moduleSize * (density >= 4 ? 0.22 : 0.18);
    const top = padding + y * moduleSize + moduleSize * 0.06;
    const width = moduleSize * (density >= 4 ? 0.52 : 0.62);
    const height = runLength * moduleSize - moduleSize * 0.12;
    expressiveModules.push(
      `<rect x="${left.toFixed(2)}" y="${top.toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" rx="${(width / 2).toFixed(2)}" fill="${pickModuleColor(x, y, density + runLength)}" />`,
    );
    markConsumed(x, y, 1, runLength);
  };

  for (let y = 0; y < moduleCount; y += 1) {
    for (let x = 0; x < moduleCount; x += 1) {
      const key = moduleKey(x, y);
      if (consumedModules.has(key) || !getModuleValue(x, y) || isFinderModule(x, y)) continue;
      const density = countNeighbours(x, y);
      const right = x + 1 < moduleCount && getModuleValue(x + 1, y) && !isFinderModule(x + 1, y);
      const down = y + 1 < moduleCount && getModuleValue(x, y + 1) && !isFinderModule(x, y + 1);
      const diagonal = x + 1 < moduleCount && y + 1 < moduleCount && getModuleValue(x + 1, y + 1) && !isFinderModule(x + 1, y + 1);
      if (
        right &&
        down &&
        diagonal &&
        !consumedModules.has(moduleKey(x + 1, y)) &&
        !consumedModules.has(moduleKey(x, y + 1)) &&
        !consumedModules.has(moduleKey(x + 1, y + 1)) &&
        density >= 3
      ) {
        drawRoundedBlock(x, y, 2, 2, density);
        continue;
      }
      let horizontalRun = 1;
      while (
        x + horizontalRun < moduleCount &&
        getModuleValue(x + horizontalRun, y) &&
        !isFinderModule(x + horizontalRun, y) &&
        !consumedModules.has(moduleKey(x + horizontalRun, y))
      ) {
        horizontalRun += 1;
      }
      let verticalRun = 1;
      while (
        y + verticalRun < moduleCount &&
        getModuleValue(x, y + verticalRun) &&
        !isFinderModule(x, y + verticalRun) &&
        !consumedModules.has(moduleKey(x, y + verticalRun))
      ) {
        verticalRun += 1;
      }
      if (horizontalRun >= 4) {
        drawHorizontalRun(x, y, Math.min(horizontalRun, 4), density);
        continue;
      }
      if (verticalRun >= 4) {
        drawVerticalRun(x, y, Math.min(verticalRun, 4), density);
        continue;
      }
      if (horizontalRun === 3) {
        drawHorizontalRun(x, y, 3, density);
        continue;
      }
      if (verticalRun === 3) {
        drawVerticalRun(x, y, 3, density);
        continue;
      }
      if (horizontalRun === 2 && density >= 2) {
        drawRoundedBlock(x, y, 2, 1, density);
        continue;
      }
      if (verticalRun === 2 && density >= 2) {
        drawRoundedBlock(x, y, 1, 2, density);
        continue;
      }
      if ((x + y + density) % 5 === 0) {
        drawDotModule(x, y, density);
        continue;
      }
      drawRoundedModule(x, y, density);
    }
  }

  const surfaceSize = drawingSize + padding * 0.34;
  const surfaceOffset = (requestedSize - surfaceSize) / 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${requestedSize} ${requestedSize}" role="img" aria-label="QR code">
  <rect width="${requestedSize}" height="${requestedSize}" rx="34" fill="${backgroundColor}" />
  <rect x="${surfaceOffset.toFixed(2)}" y="${surfaceOffset.toFixed(2)}" width="${surfaceSize.toFixed(2)}" height="${surfaceSize.toFixed(2)}" rx="28" fill="${surfaceColor}" opacity="0.68" />
  <rect x="${padding - 4}" y="${padding - 4}" width="${drawingSize + 8}" height="${drawingSize + 8}" rx="26" fill="${backgroundColor}" />
  ${renderFinder(0, 0)}
  ${renderFinder(moduleCount - 7, 0)}
  ${renderFinder(0, moduleCount - 7)}
  ${expressiveModules.join("")}
</svg>`;
};

const registerHomeRoutes = ({
  app,
  authenticateHomeToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  hashHomePassword,
  verifyHomePassword,
  findHomeUserByPhone,
  findHomeUserByTelegramId,
  findHomeUserById,
  shouldHydrateUserNameFromHome,
  HOME_USER_SELECT,
  HOME_PROFILE_SELECT,
  toPublicHomeUser,
  toPublicHomeProfile,
  buildHomeIdentity,
  signHomeSessionToken,
  buildLimitBlockedMessage,
  getBotSettings,
  getUserMeta,
  updateUserMeta,
  applyReferralCode,
  buildReferralPayload,
  resolveBsTransferRecipient,
  transferBsBalance,
  applyBsToBookingAppointment,
  refundBsForCancelledAppointment,
  buildHomeAppPayload,
  buildPublicHomePayload,
  TELEGRAM_BOT_USERNAME,
  markExpiredTelegramAuthRequests,
  createTelegramAuthRequest,
  getTelegramAuthRequestById,
  updateTelegramAuthRequestById,
  deleteTelegramAuthRequestById,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_FLOW_PROFILE_LINK,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
  toTelegramIdNumber,
  resolveHomeAssetPath,
  getServiceCatalog,
  resolveHomeBookingUser,
  getHomeBookingSettings,
  appointmentService,
  getBarbers,
  buildDateWindow,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  notifyBarberAboutNewAppointment,
  requestRealtimePush,
  parseDateTime,
  touchSitePresenceSession,
  removeSitePresenceSession,
  attachHomeRealtimeClient,
}) => {
  const buildClientAccessPayload = async (phone) => {
    const safePhone = normalizePhone(phone);
    if (!safePhone) {
      return {
        isBarber: false,
        role: "client",
        barberId: "",
        barberName: "",
      };
    }

    const barbers = await prisma.barbers.findMany({
      where: { isActive: true, phone: { not: null } },
      select: { id: true, name: true, phone: true, role: true },
    });

    const matchedBarber =
      barbers.find((candidate) => normalizePhone(candidate.phone || "") === safePhone) || null;

    if (!matchedBarber) {
      return {
        isBarber: false,
        role: "client",
        barberId: "",
        barberName: "",
      };
    }

    return {
      isBarber: true,
      role: normalizeText(matchedBarber.role) || "barber",
      barberId: normalizeText(matchedBarber.id),
      barberName: normalizeText(matchedBarber.name),
    };
  };

  app.post("/api/home/auth/register", async (req, res) => {
    try {
      const phoneInput = normalizeText(req.body?.phone);
      const safePhone = normalizePhone(phoneInput);
      const password = normalizeText(req.body?.password);
      const privacyConsentAccepted = parseConsentAccepted(req.body?.privacyConsentAccepted);
      if (!safePhone || !password) {
        return res.status(400).json({
          success: false,
          message: "Введите номер телефона и пароль.",
        });
      }
      if (!privacyConsentAccepted) {
        return res.status(400).json({
          success: false,
          message: "Подтвердите согласие на обработку персональных данных.",
        });
      }
      const displayName = normalizeText(req.body?.displayName) || safePhone;
      const { hashHex, saltHex } = hashHomePassword(password);
      const now = new Date().toISOString();
      const existing = await findHomeUserByPhone(safePhone);
      let row;
      if (existing && normalizeText(existing.homePasswordHash)) {
        return res.status(409).json({
          success: false,
          message: "Пользователь с таким номером уже зарегистрирован.",
        });
      }
      if (existing) {
        const patch = {
          Phone: safePhone,
          homePasswordHash: hashHex,
          homePasswordSalt: saltHex,
          homeIsActive: true,
          homeCreatedAt: existing.homeCreatedAt || now,
          homeUpdatedAt: now,
        };
        if (shouldHydrateUserNameFromHome(existing.Name, existing.Phone)) {
          patch.Name = displayName;
        }
        row = await prisma.users.update({
          where: { id: existing.id },
          data: patch,
          select: HOME_USER_SELECT,
        });
      } else {
        row = await prisma.users.create({
          data: {
            id: randomUUID(),
            Name: displayName,
            Phone: safePhone,
            TelegramID: null,
            Barber: null,
            homePasswordHash: hashHex,
            homePasswordSalt: saltHex,
            homeIsActive: true,
            homeCreatedAt: now,
            homeUpdatedAt: now,
            homeLastLoginAt: null,
          },
          select: HOME_USER_SELECT,
        });
      }
      const user = toPublicHomeUser(row);
      await applyReferralCode({
        userId: user.id,
        referralCode: req.body?.referralCode,
      });
      await updateUserMeta(user.id, {
        privacyConsentAcceptedAt: now,
        privacyConsentIp: normalizeText(req.ip),
        privacyConsentSource: "home-register",
        privacyConsentVersion: "2026-04-02",
      });
      const identity = buildHomeIdentity({
        userId: user.id,
        phone: user.phone,
        displayName: user.displayName,
      });
      const token = signHomeSessionToken(identity);
      return res.status(201).json({
        success: true,
        token,
        user,
      });
    } catch (error) {
      if (
        error?.code === "INVALID_PASSWORD" ||
        error?.code === "INVALID_PHONE" ||
        error?.code === "WEAK_PASSWORD"
      ) {
        return res.status(400).json({ success: false, message: error.message });
      }
      console.error("Home register error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Ошибка регистрации. Попробуйте позже." });
    }
  });

  app.post("/api/home/auth/login", async (req, res) => {
    try {
      const phoneInput = normalizeText(req.body?.phone);
      const safePhone = normalizePhone(phoneInput);
      const password = normalizeText(req.body?.password);
      if (!safePhone || !password) {
        return res.status(400).json({
          success: false,
          message: "Введите номер телефона и пароль.",
        });
      }
      let existing = await findHomeUserByPhone(safePhone);
      let authenticatedViaBarberAccess = false;
      if (
        !existing ||
        existing.homeIsActive === false ||
        !normalizeText(existing.homePasswordHash) ||
        !normalizeText(existing.homePasswordSalt) ||
        !verifyHomePassword(password, existing.homePasswordHash, existing.homePasswordSalt)
      ) {
        const barbers = await prisma.barbers.findMany({
          where: { isActive: true, phone: { not: null } },
          select: { phone: true, password: true },
        });
        const matchingBarber =
          barbers.find((candidate) => normalizePhone(candidate.phone || "") === safePhone) || null;

        if (!matchingBarber || normalizeText(matchingBarber.password) !== password) {
          return res.status(401).json({
            success: false,
            message: "Неверный номер телефона или пароль.",
          });
        }

        const users = await prisma.users.findMany({
          where: { Phone: { not: null } },
          select: HOME_USER_SELECT,
        });
        existing = users.find((entry) => normalizePhone(entry.Phone || "") === safePhone) || null;

        if (!existing) {
          return res.status(409).json({
            success: false,
            message: "Для этого барбера не найден клиентский аккаунт с тем же номером телефона.",
          });
        }

        authenticatedViaBarberAccess = true;
      }
      const now = new Date().toISOString();
      const updated = await prisma.users.update({
        where: { id: existing.id },
        data: {
          homeIsActive: true,
          homeLastLoginAt: now,
          homeUpdatedAt: now,
        },
        select: HOME_USER_SELECT,
      });
      const user = toPublicHomeUser(updated);
      const access = await buildClientAccessPayload(user.phone);
      const identity = buildHomeIdentity({
        userId: user.id,
        phone: user.phone,
        displayName: user.displayName,
        accountRole: access.role,
        barberId: access.barberId,
        barberName: access.barberName,
        isBarber: access.isBarber,
      });
      const token = signHomeSessionToken(identity);
      return res.json({
        success: true,
        token,
        user: {
          ...user,
          access,
          authenticatedViaBarberAccess,
        },
      });
    } catch (error) {
      console.error("Home login error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Ошибка входа. Попробуйте позже." });
    }
  });

  app.post("/api/home/auth/telegram/start", async (req, res) => {
    try {
      const botSettings = await getBotSettings();
      if (botSettings?.isBotEnabled === false) {
        return res.status(503).json({
          success: false,
          message: "Вход через Telegram сейчас недоступен.",
        });
      }
      await markExpiredTelegramAuthRequests();
      const request = await createTelegramAuthRequest({
        flow: TELEGRAM_AUTH_FLOW_LOGIN,
      });
      const botLink = TELEGRAM_BOT_USERNAME
        ? `https://t.me/${encodeURIComponent(
            TELEGRAM_BOT_USERNAME,
          )}?start=${encodeURIComponent(`site_login_${request.code}`)}`
        : null;
      return res.status(201).json({
        success: true,
        requestId: request.id,
        code: request.code,
        command: `/site_login ${request.code}`,
        expiresAt: request.expiresAt,
        botLink,
        botUsername: TELEGRAM_BOT_USERNAME || null,
      });
    } catch (error) {
      console.error("Home telegram auth start error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось запустить авторизацию через Telegram.",
      });
    }
  });

  app.get("/api/home/auth/telegram/status", async (req, res) => {
    const requestId = normalizeText(req.query?.requestId);
    if (!requestId) {
      return res.status(400).json({
        success: false,
        done: true,
        message: "Укажите requestId.",
      });
    }
    try {
      await markExpiredTelegramAuthRequests();
      const row = await getTelegramAuthRequestById(requestId);
      if (!row) {
        return res.status(404).json({
          success: false,
          done: true,
          message: "Сессия Telegram авторизации не найдена или уже завершена.",
        });
      }
      if (
        normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
        TELEGRAM_AUTH_FLOW_LOGIN
      ) {
        return res.status(409).json({
          success: false,
          done: true,
          message: "Этот запрос предназначен для другого сценария Telegram.",
        });
      }
      if (row.status === TELEGRAM_AUTH_STATUS_COMPLETED) {
        const rowUserId = normalizeText(row.userId);
        let userRow = rowUserId
          ? await prisma.users.findUnique({
              where: { id: rowUserId },
              select: { ...HOME_USER_SELECT, TelegramID: true },
            })
          : null;
        const safeTelegramId = normalizeText(row.telegramId);
        if (!userRow && safeTelegramId) {
          userRow = await findHomeUserByTelegramId(safeTelegramId);
        }
        const safePhone = normalizePhone(row.phone || userRow?.Phone || "");
        if (!userRow && safePhone) {
          userRow = await findHomeUserByPhone(safePhone);
        }
        const resolvedUserId = normalizeText(userRow?.id);
        const resolvedDisplayName =
          normalizeText(row.displayName || userRow?.Name || "") || null;
        if (
          resolvedUserId &&
          (resolvedUserId !== rowUserId ||
            safePhone !== normalizePhone(row.phone || "") ||
            resolvedDisplayName !== normalizeText(row.displayName || ""))
        ) {
          await updateTelegramAuthRequestById(requestId, {
            userId: resolvedUserId,
            phone: safePhone || null,
            displayName: resolvedDisplayName,
            errorMessage: null,
          });
        }
        const hasPassword = Boolean(
          userRow &&
            normalizeText(userRow.homePasswordHash) &&
            normalizeText(userRow.homePasswordSalt),
        );
        if (userRow && userRow.homeIsActive !== false && hasPassword && safePhone) {
          const now = new Date().toISOString();
          const patch = {
            Phone: safePhone,
            homeIsActive: true,
            homeLastLoginAt: now,
            homeUpdatedAt: now,
          };
          const telegramIdAsNumber = toTelegramIdNumber(row.telegramId);
          if (telegramIdAsNumber !== null) {
            patch.TelegramID = telegramIdAsNumber;
          }
          if (
            resolvedDisplayName &&
            shouldHydrateUserNameFromHome(userRow.Name, userRow.Phone)
          ) {
            patch.Name = resolvedDisplayName;
          }
          const updated = await prisma.users.update({
            where: { id: userRow.id },
            data: patch,
            select: HOME_USER_SELECT,
          });
          const user = toPublicHomeUser(updated);
          const identity = buildHomeIdentity({
            userId: user.id,
            phone: user.phone,
            displayName: user.displayName,
          });
          const token = signHomeSessionToken(identity);
          try {
            await deleteTelegramAuthRequestById(requestId);
          } catch (cleanupError) {
            console.warn(
              "Telegram auth request cleanup warning:",
              cleanupError?.message || cleanupError,
            );
          }
          return res.json({
            success: true,
            done: true,
            token,
            user,
          });
        }
        if (!safePhone) {
          return res.status(409).json({
            success: false,
            done: true,
            message:
              "Для входа нужен подтвержденный номер телефона в Telegram. Нажмите вход через Telegram снова.",
          });
        }
        return res.json({
          success: true,
          done: true,
          needsSetup: true,
          requestId,
          setupMode: userRow ? "set_password" : "register",
          phone: safePhone,
          displayName: resolvedDisplayName,
        });
      }
      if (
        row.status === TELEGRAM_AUTH_STATUS_FAILED ||
        row.status === TELEGRAM_AUTH_STATUS_EXPIRED
      ) {
        return res.json({
          success: false,
          done: true,
          status: row.status,
          message:
            normalizeText(row.errorMessage) ||
            (row.status === TELEGRAM_AUTH_STATUS_EXPIRED
              ? "Код Telegram авторизации истек. Запросите новый."
              : "Telegram авторизация завершилась с ошибкой."),
        });
      }
      return res.json({
        success: true,
        done: false,
        status: row.status,
        expiresAt: row.expiresAt || null,
        updatedAt: row.updatedAt || null,
      });
    } catch (error) {
      console.error("Home telegram auth status error:", error);
      return res.status(500).json({
        success: false,
        done: true,
        message: "Не удалось проверить Telegram авторизацию.",
      });
    }
  });

  app.post("/api/home/auth/telegram/complete", async (req, res) => {
    const requestId = normalizeText(req.body?.requestId);
    const displayNameInput = normalizeText(req.body?.displayName);
    const phoneInput = normalizeText(req.body?.phone);
    const password = normalizeText(req.body?.password);
    const privacyConsentAccepted = parseConsentAccepted(req.body?.privacyConsentAccepted);
    if (!requestId || !password) {
      return res.status(400).json({
        success: false,
        message: "Недостаточно данных для завершения Telegram-входа.",
      });
    }
    try {
      await markExpiredTelegramAuthRequests();
      const row = await getTelegramAuthRequestById(requestId);
      if (!row) {
        return res.status(404).json({
          success: false,
          message: "Сессия Telegram авторизации не найдена.",
        });
      }
      if (
        normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
        TELEGRAM_AUTH_FLOW_LOGIN
      ) {
        return res.status(409).json({
          success: false,
          message: "Этот запрос Telegram не предназначен для завершения входа.",
        });
      }
      if (row.status !== TELEGRAM_AUTH_STATUS_COMPLETED) {
        return res.status(409).json({
          success: false,
          message:
            row.status === TELEGRAM_AUTH_STATUS_EXPIRED
              ? "Код Telegram авторизации истек. Запросите новый."
              : "Telegram авторизация еще не завершена.",
        });
      }
      const safeTelegramId = normalizeText(row.telegramId);
      const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);
      let userRow = null;
      const rowUserId = normalizeText(row.userId);
      if (rowUserId) {
        userRow = await prisma.users.findUnique({
          where: { id: rowUserId },
          select: { ...HOME_USER_SELECT, TelegramID: true },
        });
      }
      if (!userRow && safeTelegramId) {
        userRow = await findHomeUserByTelegramId(safeTelegramId);
      }
      const safePhone = normalizePhone(phoneInput || row.phone || userRow?.Phone || "");
      if (!safePhone) {
        return res.status(409).json({
          success: false,
          message:
            "Телефон не подтвержден. Нажмите вход через Telegram снова и отправьте контакт.",
        });
      }
      const phoneMatches = await prisma.users.findMany({
        where: { Phone: { not: null } },
        select: {
          id: true,
          Phone: true,
          homePasswordHash: true,
          homePasswordSalt: true,
          homeIsActive: true,
        },
      });
      const conflict = phoneMatches.find(
        (entry) =>
          entry.id !== userRow?.id &&
          normalizePhone(entry.Phone || "") === safePhone &&
          entry.homeIsActive !== false &&
          normalizeText(entry.homePasswordHash) &&
          normalizeText(entry.homePasswordSalt),
      );
      if (conflict) {
        return res.status(409).json({
          success: false,
          message: "Этот номер уже используется другим аккаунтом.",
        });
      }
      if (!privacyConsentAccepted) {
        const existingConsentMeta = userRow?.id ? await getUserMeta(userRow.id) : null;
        if (!normalizeText(existingConsentMeta?.privacyConsentAcceptedAt)) {
          return res.status(400).json({
            success: false,
            message: "Подтвердите согласие на обработку персональных данных.",
          });
        }
      }
      const { hashHex, saltHex } = hashHomePassword(password);
      const now = new Date().toISOString();
      let persisted;
      if (userRow) {
        const nextDisplayName =
          displayNameInput || normalizeText(row.displayName || userRow.Name || "");
        const patch = {
          Phone: safePhone,
          homePasswordHash: hashHex,
          homePasswordSalt: saltHex,
          homeIsActive: true,
          homeCreatedAt: userRow.homeCreatedAt || now,
          homeUpdatedAt: now,
          homeLastLoginAt: now,
        };
        if (telegramIdAsNumber !== null) {
          patch.TelegramID = telegramIdAsNumber;
        }
        if (
          nextDisplayName &&
          shouldHydrateUserNameFromHome(userRow.Name, userRow.Phone)
        ) {
          patch.Name = nextDisplayName;
        }
        persisted = await prisma.users.update({
          where: { id: userRow.id },
          data: patch,
          select: HOME_USER_SELECT,
        });
        await updateTelegramAuthRequestById(requestId, {
          userId: userRow.id,
          phone: safePhone,
          displayName: nextDisplayName || null,
          errorMessage: null,
        });
      } else {
        const nextDisplayName = displayNameInput;
        if (!nextDisplayName) {
          return res.status(400).json({
            success: false,
            message: "Введите ФИО для нового аккаунта.",
          });
        }
        persisted = await prisma.users.create({
          data: {
            id: randomUUID(),
            Name: nextDisplayName,
            Phone: safePhone,
            TelegramID: telegramIdAsNumber,
            Barber: null,
            homePasswordHash: hashHex,
            homePasswordSalt: saltHex,
            homeIsActive: true,
            homeCreatedAt: now,
            homeUpdatedAt: now,
            homeLastLoginAt: now,
          },
          select: HOME_USER_SELECT,
        });
        await updateTelegramAuthRequestById(requestId, {
          userId: persisted.id,
          phone: safePhone,
          displayName: nextDisplayName,
          errorMessage: null,
        });
      }
      const user = toPublicHomeUser(persisted);
      await applyReferralCode({
        userId: user.id,
        referralCode: req.body?.referralCode,
      });
      const existingConsentMeta = await getUserMeta(user.id);
      await updateUserMeta(user.id, {
        privacyConsentAcceptedAt:
          normalizeText(existingConsentMeta?.privacyConsentAcceptedAt) || now,
        privacyConsentIp:
          normalizeText(existingConsentMeta?.privacyConsentIp) || normalizeText(req.ip),
        privacyConsentSource:
          normalizeText(existingConsentMeta?.privacyConsentSource) || "home-telegram-register",
        privacyConsentVersion:
          normalizeText(existingConsentMeta?.privacyConsentVersion) || "2026-04-02",
      });
      const identity = buildHomeIdentity({
        userId: user.id,
        phone: user.phone,
        displayName: user.displayName,
      });
      const token = signHomeSessionToken(identity);
      try {
        await deleteTelegramAuthRequestById(requestId);
      } catch (cleanupError) {
        console.warn(
          "Telegram auth request cleanup warning:",
          cleanupError?.message || cleanupError,
        );
      }
      return res.json({
        success: true,
        token,
        user,
      });
    } catch (error) {
      if (
        error?.code === "INVALID_PASSWORD" ||
        error?.code === "WEAK_PASSWORD" ||
        error?.code === "INVALID_PHONE"
      ) {
        return res.status(400).json({ success: false, message: error.message });
      }
      console.error("Home telegram auth complete error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось завершить вход через Telegram.",
      });
    }
  });

  app.get("/api/home/auth/me", authenticateHomeToken, async (req, res) => {
    const identity = req.homeUser || {};
    const stored = await findHomeUserById(identity.userId);
    if (!stored) return res.sendStatus(401);
    const user = toPublicHomeUser(stored);
    return res.json({
      authenticated: true,
      user: {
        ...user,
        access: {
          isBarber: identity.isBarber === true,
          role: normalizeText(identity.accountRole) || "client",
          barberId: normalizeText(identity.barberId),
          barberName: normalizeText(identity.barberName),
        },
      },
    });
  });

  app.get("/api/home/profile", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const stored = await prisma.users.findUnique({
        where: { id: userId },
        select: HOME_PROFILE_SELECT,
      });
      if (
        !stored ||
        stored.homeIsActive === false ||
        !normalizeText(stored.homePasswordHash) ||
        !normalizeText(stored.homePasswordSalt)
      ) {
        return res.sendStatus(401);
      }
      const meta = await getUserMeta(userId);
      return res.json({
        success: true,
        user: {
          ...toPublicHomeProfile(stored),
          birthDate: meta?.birthDate || null,
          gender: meta?.gender || "",
          avatarUrl: meta?.avatarUrl || "",
          bookingNotificationsEnabled: meta?.bookingNotificationsEnabled !== false,
          balanceNotificationsEnabled: meta?.balanceNotificationsEnabled !== false,
          referralCode: meta?.referralCode || "",
        },
        botUsername: TELEGRAM_BOT_USERNAME || null,
      });
    } catch (error) {
      console.error("Home profile read error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось загрузить профиль.",
      });
    }
  });

  app.put("/api/home/profile", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const current = await prisma.users.findUnique({
        where: { id: userId },
        select: HOME_PROFILE_SELECT,
      });
      if (
        !current ||
        current.homeIsActive === false ||
        !normalizeText(current.homePasswordHash) ||
        !normalizeText(current.homePasswordSalt)
      ) {
        return res.sendStatus(401);
      }

      const displayNameInput = normalizeText(req.body?.displayName);
      const phoneInput = normalizeText(req.body?.phone);
      const passwordInput = normalizeText(req.body?.password);
      const safePhone = normalizePhone(phoneInput || current.Phone || "");
      if (!safePhone) {
        return res.status(400).json({
          success: false,
          message: "Введите корректный номер телефона.",
        });
      }

      const currentPhone = normalizePhone(current.Phone || "");
      if (safePhone !== currentPhone) {
        const phoneMatches = await prisma.users.findMany({
          where: { Phone: { not: null } },
          select: {
            id: true,
            Phone: true,
            homePasswordHash: true,
            homePasswordSalt: true,
            homeIsActive: true,
          },
        });
        const conflict = phoneMatches.find(
          (entry) =>
            entry.id !== userId &&
            normalizePhone(entry.Phone || "") === safePhone &&
            entry.homeIsActive !== false &&
            normalizeText(entry.homePasswordHash) &&
            normalizeText(entry.homePasswordSalt),
        );
        if (conflict) {
          return res.status(409).json({
            success: false,
            message: "Этот номер уже используется другим аккаунтом.",
          });
        }
      }

      const currentDisplayName = normalizeText(current.Name || current.Phone || safePhone);
      const nextDisplayName = displayNameInput || currentDisplayName;
      const nameChanged = nextDisplayName !== currentDisplayName;
      const phoneChanged = safePhone !== currentPhone;
      const limits = toPublicHomeProfile(current)?.limits || {};
      if (nameChanged && limits?.name?.isLocked) {
        return res.status(429).json({
          success: false,
          message: buildLimitBlockedMessage("ФИО", limits.name),
        });
      }
      if (phoneChanged && limits?.phone?.isLocked) {
        return res.status(429).json({
          success: false,
          message: buildLimitBlockedMessage("Телефон", limits.phone),
        });
      }

      const now = new Date().toISOString();
      const patch = {
        Name: nextDisplayName,
        Phone: safePhone,
        homeIsActive: true,
        homeCreatedAt: current.homeCreatedAt || now,
        homeUpdatedAt: now,
      };
      if (nameChanged) {
        patch.LastNameChanged = now;
      }
      if (phoneChanged) {
        patch.homePhoneChangedAt = now;
      }
      if (passwordInput) {
        const { hashHex, saltHex } = hashHomePassword(passwordInput);
        patch.homePasswordHash = hashHex;
        patch.homePasswordSalt = saltHex;
      }
      const hasBirthDate = Object.prototype.hasOwnProperty.call(req.body || {}, "birthDate");
      const hasGender = Object.prototype.hasOwnProperty.call(req.body || {}, "gender");
      const hasAvatarUrl = Object.prototype.hasOwnProperty.call(req.body || {}, "avatarUrl");
      const birthDate = normalizeText(req.body?.birthDate);
      const gender = normalizeText(req.body?.gender);
      const avatarUrl = normalizeText(req.body?.avatarUrl);
      const bookingNotificationsEnabledRaw = req.body?.bookingNotificationsEnabled;
      const bookingNotificationsEnabled =
        bookingNotificationsEnabledRaw === undefined
          ? undefined
          : !["false", "0", "off", ""].includes(
              String(bookingNotificationsEnabledRaw).trim().toLowerCase(),
            );
      const balanceNotificationsEnabledRaw = req.body?.balanceNotificationsEnabled;
      const balanceNotificationsEnabled =
        balanceNotificationsEnabledRaw === undefined
          ? undefined
          : !["false", "0", "off", ""].includes(
              String(balanceNotificationsEnabledRaw).trim().toLowerCase(),
            );

      const updated = await prisma.users.update({
        where: { id: userId },
        data: patch,
        select: HOME_PROFILE_SELECT,
      });
      const currentMeta = await getUserMeta(userId);
      const meta = await updateUserMeta(userId, {
        birthDate: hasBirthDate ? birthDate || null : currentMeta?.birthDate || null,
        gender: hasGender ? gender || "" : currentMeta?.gender || "",
        avatarUrl: hasAvatarUrl ? avatarUrl : currentMeta?.avatarUrl || "",
        ...(bookingNotificationsEnabled === undefined ? {} : { bookingNotificationsEnabled }),
        ...(balanceNotificationsEnabled === undefined ? {} : { balanceNotificationsEnabled }),
      });
      const user = toPublicHomeProfile(updated);
      const identity = buildHomeIdentity({
        userId: user.id,
        phone: user.phone,
        displayName: user.displayName,
      });
      const token = signHomeSessionToken(identity);
      res.setHeader("x-home-session-token", token);
      return res.json({
        success: true,
        token,
        user: {
          ...user,
          birthDate: meta?.birthDate || null,
          gender: meta?.gender || "",
          avatarUrl: meta?.avatarUrl || "",
          bookingNotificationsEnabled: meta?.bookingNotificationsEnabled !== false,
          balanceNotificationsEnabled: meta?.balanceNotificationsEnabled !== false,
          referralCode: meta?.referralCode || "",
        },
      });
    } catch (error) {
      if (
        error?.code === "INVALID_PASSWORD" ||
        error?.code === "INVALID_PHONE" ||
        error?.code === "WEAK_PASSWORD"
      ) {
        return res.status(400).json({ success: false, message: error.message });
      }
      console.error("Home profile update error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось сохранить изменения профиля.",
      });
    }
  });

  app.get("/api/home/app", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const payload = await buildHomeAppPayload(userId);
      if (!payload) return res.sendStatus(401);
      return res.json({
        success: true,
        ...payload,
        botUsername: TELEGRAM_BOT_USERNAME || null,
      });
    } catch (error) {
      console.error("Home app payload error:", {
        userId: normalizeText(req.homeUser?.userId),
        phone: normalizeText(req.homeUser?.phone),
        message: error?.message || error,
        stack: error?.stack || null,
      });
      return res.status(500).json({
        success: false,
        message: "Не удалось загрузить данные приложения.",
      });
    }
  });

  app.get("/api/home/public", async (req, res) => {
    try {
      const payload = await buildPublicHomePayload();
      return res.json({
        success: true,
        ...payload,
      });
    } catch (error) {
      console.error("Public home payload error:", {
        message: error?.message || error,
        stack: error?.stack || null,
      });
      return res.status(500).json({
        success: false,
        message: "Не удалось загрузить публичную страницу.",
      });
    }
  });

  app.post("/api/home/presence", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const sessionId = normalizeText(req.body?.sessionId);
      const result = touchSitePresenceSession({
        sessionId,
        userId,
        userAgent: req.get("user-agent") || "",
      });
      return res.json({
        success: true,
        onlineCount: result.onlineCount,
      });
    } catch (error) {
      console.error("Home presence touch error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось обновить онлайн-статус.",
      });
    }
  });

  app.post("/api/home/presence/offline", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const sessionId = normalizeText(req.body?.sessionId);
      const result = removeSitePresenceSession(sessionId);
      return res.json({
        success: true,
        onlineCount: result.onlineCount,
      });
    } catch (error) {
      console.error("Home presence remove error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось снять онлайн-статус.",
      });
    }
  });

  app.get("/api/home/events/stream", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      res.set({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      });
      req.socket?.setKeepAlive?.(true);
      if (typeof res.flushHeaders === "function") {
        res.flushHeaders();
      } else {
        res.writeHead(200);
      }
      res.write("retry: 5000\n\n");
      attachHomeRealtimeClient?.({ req, res, userId });
    } catch (error) {
      console.error("Home events stream error:", error);
      try {
        res.end();
      } catch {
        // ignore downstream disconnects
      }
    }
  });

  app.get("/api/home/referral", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const stored = await prisma.users.findUnique({ where: { id: userId } });
      if (!stored) return res.sendStatus(401);
      const referral = await buildReferralPayload(stored);
      return res.json({
        success: true,
        referral,
      });
    } catch (error) {
      console.error("Home referral payload error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось загрузить реферальную систему.",
      });
    }
  });

  app.get("/api/home/referral/qr", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const stored = await findHomeUserById(userId);
      if (!stored) return res.sendStatus(401);
      const meta = await getUserMeta(userId);
      const phone = normalizePhone(stored.Phone || stored.phone || req.homeUser?.phone || "");
      const displayName = normalizeText(stored.Name || stored.displayName || req.homeUser?.displayName || "");
      const referralCode = normalizeText(meta?.referralCode || "");
      if (!phone) {
        return res.status(400).json({
          success: false,
          message: "Для QR-кода в профиле должен быть указан телефон.",
        });
      }

      const qrPayload = buildReferralQrDeepLink({ referralCode, phone, displayName });
      const requestedSize = Math.max(220, Math.min(640, Number(req.query?.size) || DEFAULT_REFERRAL_QR_SIZE));
      const qrCodeModule = loadQrCodeModule();
      if (!qrCodeModule?.create) {
        return res.status(503).json({
          success: false,
          message: "QR generator is unavailable.",
        });
      }

      const qrCode = qrCodeModule.create(qrPayload, {
        errorCorrectionLevel: "M",
        margin: 0,
      });
      const svg = buildExpressiveQrSvg(qrCode, { size: requestedSize });
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      res.setHeader("Cache-Control", "private, max-age=300");
      return res.send(svg);
    } catch (error) {
      console.error("Home referral qr error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось подготовить QR-код.",
      });
    }
  });

  app.post("/api/home/referral/transfer/preview", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const recipient = await resolveBsTransferRecipient({
        fromUserId: userId,
        targetPhone: req.body?.targetPhone,
      });
      return res.json({
        success: true,
        recipient,
      });
    } catch (error) {
      const messageMap = {
        TARGET_REQUIRED: "Укажите телефон получателя.",
        TARGET_NOT_FOUND: "Получатель не найден.",
        SELF_TRANSFER: "Нельзя переводить BS самому себе.",
        UNAUTHORIZED: "Не удалось подтвердить пользователя.",
      };
      const code = normalizeText(error?.message);
      return res.status(400).json({
        success: false,
        message: messageMap[code] || "Не удалось проверить получателя.",
      });
    }
  });

  app.post("/api/home/referral/transfer", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const stored = await prisma.users.findUnique({ where: { id: userId } });
      if (!stored) return res.sendStatus(401);

      const result = await transferBsBalance({
        fromUserId: userId,
        targetPhone: req.body?.targetPhone,
        amountBs: req.body?.amountBs,
        comment: req.body?.comment,
      });
      const referral = await buildReferralPayload(stored);
      requestRealtimePush(true);
      return res.json({
        success: true,
        referral,
        transfer: result,
      });
    } catch (error) {
      const messageMap = {
        TARGET_REQUIRED: "Укажите телефон получателя.",
        INVALID_AMOUNT: "Укажите корректную сумму перевода.",
        TARGET_NOT_FOUND: "Получатель не найден.",
        SELF_TRANSFER: "Нельзя переводить BS самому себе.",
        INSUFFICIENT_BS: "Недостаточно BS для перевода.",
        UNAUTHORIZED: "Не удалось подтвердить пользователя.",
      };
      const code = normalizeText(error?.message);
      return res.status(400).json({
        success: false,
        message: messageMap[code] || "Не удалось выполнить перевод BS.",
      });
    }
  });

  app.post("/api/home/profile/telegram/start", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const current = await prisma.users.findUnique({
        where: { id: userId },
        select: HOME_PROFILE_SELECT,
      });
      if (
        !current ||
        current.homeIsActive === false ||
        !normalizeText(current.homePasswordHash) ||
        !normalizeText(current.homePasswordSalt)
      ) {
        return res.sendStatus(401);
      }
      if (normalizeText(current.TelegramID)) {
        return res.status(409).json({
          success: false,
          message: "Telegram уже привязан к этому аккаунту.",
        });
      }
      await markExpiredTelegramAuthRequests();
      const request = await createTelegramAuthRequest({
        flow: TELEGRAM_AUTH_FLOW_PROFILE_LINK,
        targetUserId: userId,
      });
      const botLink = TELEGRAM_BOT_USERNAME
        ? `https://t.me/${encodeURIComponent(
            TELEGRAM_BOT_USERNAME,
          )}?start=${encodeURIComponent(`site_login_${request.code}`)}`
        : null;
      return res.status(201).json({
        success: true,
        requestId: request.id,
        code: request.code,
        command: `/site_login ${request.code}`,
        expiresAt: request.expiresAt,
        botLink,
        botUsername: TELEGRAM_BOT_USERNAME || null,
      });
    } catch (error) {
      console.error("Home profile telegram start error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось запустить привязку Telegram.",
      });
    }
  });

  app.get("/api/home/profile/telegram/status", authenticateHomeToken, async (req, res) => {
    const requestId = normalizeText(req.query?.requestId);
    if (!requestId) {
      return res.status(400).json({
        success: false,
        done: true,
        message: "Укажите requestId.",
      });
    }
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      await markExpiredTelegramAuthRequests();
      const row = await getTelegramAuthRequestById(requestId);
      if (!row) {
        return res.status(404).json({
          success: false,
          done: true,
          message: "Сессия привязки Telegram не найдена.",
        });
      }
      if (
        normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
        TELEGRAM_AUTH_FLOW_PROFILE_LINK
      ) {
        return res.status(409).json({
          success: false,
          done: true,
          message: "Этот запрос Telegram относится к другому сценарию.",
        });
      }
      if (normalizeText(row.targetUserId) !== userId) {
        return res.status(403).json({
          success: false,
          done: true,
          message: "Этот запрос привязки создан для другого пользователя.",
        });
      }
      if (row.status === TELEGRAM_AUTH_STATUS_COMPLETED) {
        const safeTelegramId = normalizeText(row.telegramId);
        if (!safeTelegramId) {
          await updateTelegramAuthRequestById(requestId, {
            status: TELEGRAM_AUTH_STATUS_FAILED,
            errorMessage: "Telegram ID не получен. Запустите привязку заново.",
          });
          return res.status(409).json({
            success: false,
            done: true,
            message: "Telegram ID не получен. Запустите привязку заново.",
          });
        }
        const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);
        if (telegramIdAsNumber === null) {
          await updateTelegramAuthRequestById(requestId, {
            status: TELEGRAM_AUTH_STATUS_FAILED,
            errorMessage: "Некорректный Telegram ID.",
          });
          return res.status(409).json({
            success: false,
            done: true,
            message: "Некорректный Telegram ID. Запустите привязку заново.",
          });
        }
        const current = await prisma.users.findUnique({
          where: { id: userId },
          select: HOME_PROFILE_SELECT,
        });
        if (
          !current ||
          current.homeIsActive === false ||
          !normalizeText(current.homePasswordHash) ||
          !normalizeText(current.homePasswordSalt)
        ) {
          return res.sendStatus(401);
        }
        const linkedUser = await findHomeUserByTelegramId(safeTelegramId);
        if (linkedUser && linkedUser.id !== userId) {
          await updateTelegramAuthRequestById(requestId, {
            status: TELEGRAM_AUTH_STATUS_FAILED,
            errorMessage: "Этот Telegram уже привязан к другому аккаунту.",
          });
          return res.json({
            success: false,
            done: true,
            message: "Этот Telegram уже привязан к другому аккаунту.",
          });
        }
        const updated = await prisma.users.update({
          where: { id: userId },
          data: {
            TelegramID: telegramIdAsNumber,
            homeUpdatedAt: new Date().toISOString(),
            homeTelegramChangedAt: new Date().toISOString(),
          },
          select: HOME_PROFILE_SELECT,
        });
        try {
            await deleteTelegramAuthRequestById(requestId);
        } catch (cleanupError) {
          console.warn(
            "Telegram profile link request cleanup warning:",
            cleanupError?.message || cleanupError,
          );
        }
        return res.json({
          success: true,
          done: true,
          user: toPublicHomeProfile(updated),
        });
      }
      if (
        row.status === TELEGRAM_AUTH_STATUS_FAILED ||
        row.status === TELEGRAM_AUTH_STATUS_EXPIRED
      ) {
        return res.json({
          success: false,
          done: true,
          status: row.status,
          message:
            normalizeText(row.errorMessage) ||
            (row.status === TELEGRAM_AUTH_STATUS_EXPIRED
              ? "Код привязки Telegram истек. Запросите новый."
              : "Привязка Telegram завершилась с ошибкой."),
        });
      }
      return res.json({
        success: true,
        done: false,
        status: row.status,
        expiresAt: row.expiresAt || null,
        updatedAt: row.updatedAt || null,
      });
    } catch (error) {
      console.error("Home profile telegram status error:", error);
      return res.status(500).json({
        success: false,
        done: true,
        message: "Не удалось проверить привязку Telegram.",
      });
    }
  });

  app.post("/api/home/profile/telegram/unlink", authenticateHomeToken, async (req, res) => {
    try {
      const userId = normalizeText(req.homeUser?.userId);
      if (!userId) return res.sendStatus(401);
      const current = await prisma.users.findUnique({
        where: { id: userId },
        select: HOME_PROFILE_SELECT,
      });
      if (
        !current ||
        current.homeIsActive === false ||
        !normalizeText(current.homePasswordHash) ||
        !normalizeText(current.homePasswordSalt)
      ) {
        return res.sendStatus(401);
      }
      const updated = await prisma.users.update({
        where: { id: userId },
        data: {
          TelegramID: null,
          homeUpdatedAt: new Date().toISOString(),
          homeTelegramChangedAt: null,
        },
        select: HOME_PROFILE_SELECT,
      });
      return res.json({
        success: true,
        user: toPublicHomeProfile(updated),
      });
    } catch (error) {
      console.error("Home profile telegram unlink error:", error);
      return res.status(500).json({
        success: false,
        message: "Не удалось отвязать Telegram.",
      });
    }
  });

  app.get("/api/home/barbers", authenticateHomeToken, async (req, res) => {
    try {
      const [barbers, servicesCatalog] = await Promise.all([
        prisma.barbers.findMany({
          where: { isActive: true },
          select: {
            id: true,
            name: true,
            nickname: true,
            description: true,
            color: true,
            rating: true,
            orderIndex: true,
            avatarUrl: true,
            cardImageUrl: true,
            cardTitle: true,
            cardPhrase: true,
          },
          orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
        }),
        getServiceCatalog(false),
      ]);
      const getBarberServicesCount = (barberId) =>
        servicesCatalog.reduce((count, service) => {
          const rawPrice = service?.prices?.[barberId] ?? service?.prices?.[String(barberId)];
          const price = Number(rawPrice);
          return Number.isFinite(price) && price > 0 ? count + 1 : count;
        }, 0);
      const barbersWithServices = barbers
        .map((barber) => ({
          ...barber,
          servicesCount: getBarberServicesCount(barber.id),
        }))
        .filter((barber) => barber.servicesCount > 0);
      const fallbackImage = "/Image/card/Barber_photo.png";
      const payload = barbersWithServices.map((barber) => {
        const displayName =
          normalizeText(barber.cardTitle) ||
          normalizeText(barber.nickname) ||
          normalizeText(barber.name) ||
          "Барбер";
        const cardImage = resolveHomeAssetPath(barber.cardImageUrl);
        const avatarImage = resolveHomeAssetPath(barber.avatarUrl);
        return {
          id: barber.id,
          name: displayName,
          fullName: normalizeText(barber.name) || displayName,
          description: normalizeText(barber.description),
          color: normalizeText(barber.color) || "#17c8c0",
          rating: normalizeText(barber.rating),
          originalImageUrl: avatarImage || cardImage || fallbackImage,
          imageUrl: cardImage || avatarImage || fallbackImage,
          thumbnailUrl: avatarImage || cardImage || fallbackImage,
          phrase: normalizeText(barber.cardPhrase) || normalizeText(barber.description),
          servicesCount: barber.servicesCount,
        };
      });
      return res.json({ barbers: payload });
    } catch (error) {
      console.error("Home barbers load error:", error);
      return res.status(500).json({ error: "Не удалось загрузить список барберов." });
    }
  });

  app.get("/api/home/booking/services", authenticateHomeToken, async (req, res) => {
    try {
      const homeUser = await resolveHomeBookingUser(req);
      if (!homeUser) return res.sendStatus(401);
      const barberId = normalizeText(req.query?.barberId);
      if (!barberId) {
        return res.status(400).json({ error: "Укажите barberId выбранного барбера." });
      }

      const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
        getHomeBookingSettings(),
        appointmentService.countHomeUserActiveAppointments(homeUser.id),
        getBarbers({ includeInactive: false }),
        getServiceCatalog(false),
      ]);
      const barber = barbers.find((item) => normalizeText(item.id) === barberId);
      if (!barber) {
        return res.status(404).json({ error: "Барбер не найден." });
      }
      const services = appointmentService.resolveBookableServicesForBarber(
        servicesCatalog,
        barber.id,
      );
      const canBook = activeAppointments < settings.bookingLimit;
      const message = canBook
        ? ""
        : `У вас уже есть ${settings.bookingLimit} активных записей.`;

      return res.json({
        canBook,
        message,
        bookingLimit: settings.bookingLimit,
        activeAppointments,
        barber: {
          id: barber.id,
          name: normalizeText(barber.name),
          phrase: normalizeText(barber.cardPhrase) || normalizeText(barber.description),
        },
        services,
      });
    } catch (error) {
      console.error("Home booking services error:", error);
      return res.status(500).json({ error: "Не удалось загрузить услуги для записи." });
    }
  });

  app.get("/api/home/booking/dates", authenticateHomeToken, async (req, res) => {
    try {
      const homeUser = await resolveHomeBookingUser(req);
      if (!homeUser) return res.sendStatus(401);
      const barberId = normalizeText(req.query?.barberId);
      const serviceIds = appointmentService.parseServiceIdsInput(req.query?.serviceIds);
      if (!barberId || !serviceIds.length) {
        return res.status(400).json({ error: "Выберите барбера и услугу." });
      }

      const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
        getHomeBookingSettings(),
        appointmentService.countHomeUserActiveAppointments(homeUser.id),
        getBarbers({ includeInactive: false }),
        getServiceCatalog(false),
      ]);
      if (activeAppointments >= settings.bookingLimit) {
        return res.status(409).json({
          error: `У вас уже есть ${settings.bookingLimit} активных записей.`,
        });
      }
      const barber = barbers.find((item) => normalizeText(item.id) === barberId);
      if (!barber) {
        return res.status(404).json({ error: "Барбер не найден." });
      }

      const bookableServices = appointmentService.resolveBookableServicesForBarber(
        servicesCatalog,
        barber.id,
      );
      const selectedServices = serviceIds
        .map((id) => bookableServices.find((service) => service.id === id))
        .filter(Boolean);
      if (!selectedServices.length) {
        return res.status(400).json({ error: "У выбранного барбера нет такой услуги." });
      }

      const totalDuration = Math.max(
        selectedServices.reduce(
          (sum, service) => sum + Math.max(0, Number(service.duration) || 0),
          0,
        ),
        15,
      );
      const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
      const dateWindow = buildDateWindow(settings.maxDaysAhead);
      const dates = [];

      for (const entry of dateWindow) {
        const workingHours = await appointmentService.getWorkingHoursForBarberDate(
          barber.name,
          entry.key,
        );
        if (!workingHours) continue;
        const busyIntervals = await appointmentService.getBusyIntervalsForBarberDate(
          barber.name,
          entry.key,
        );
        const slots = appointmentService.buildTimeSlotsForDate({
          dateKey: entry.key,
          workingHours,
          busyIntervals,
          totalDuration,
          minAllowedDate,
        });
        if (slots.length) dates.push(entry.key);
      }

      return res.json({
        dateCount: dates.length,
        dates,
        totalDuration,
        services: selectedServices,
      });
    } catch (error) {
      console.error("Home booking dates error:", error);
      return res.status(500).json({ error: "Не удалось получить доступные даты." });
    }
  });

  app.get("/api/home/booking/times", authenticateHomeToken, async (req, res) => {
    try {
      const homeUser = await resolveHomeBookingUser(req);
      if (!homeUser) return res.sendStatus(401);
      const barberId = normalizeText(req.query?.barberId);
      const serviceIds = appointmentService.parseServiceIdsInput(req.query?.serviceIds);
      const dateKey = normalizeText(req.query?.date);
      if (!barberId || !serviceIds.length || !dateKey) {
        return res.status(400).json({ error: "Выберите услугу и дату." });
      }
      if (!appointmentService.isIsoDateKey(dateKey)) {
        return res.status(400).json({ error: "Некорректная дата." });
      }

      const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
        getHomeBookingSettings(),
        appointmentService.countHomeUserActiveAppointments(homeUser.id),
        getBarbers({ includeInactive: false }),
        getServiceCatalog(false),
      ]);
      if (activeAppointments >= settings.bookingLimit) {
        return res.status(409).json({
          error: `У вас уже есть ${settings.bookingLimit} активных записей.`,
        });
      }
      const barber = barbers.find((item) => normalizeText(item.id) === barberId);
      if (!barber) {
        return res.status(404).json({ error: "Барбер не найден." });
      }
      const bookableServices = appointmentService.resolveBookableServicesForBarber(
        servicesCatalog,
        barber.id,
      );
      const selectedServices = serviceIds
        .map((id) => bookableServices.find((service) => service.id === id))
        .filter(Boolean);
      if (!selectedServices.length) {
        return res.status(400).json({ error: "У выбранного барбера нет такой услуги." });
      }

      const totalDuration = Math.max(
        selectedServices.reduce(
          (sum, service) => sum + Math.max(0, Number(service.duration) || 0),
          0,
        ),
        15,
      );
      const workingHours = await appointmentService.getWorkingHoursForBarberDate(
        barber.name,
        dateKey,
      );
      if (!workingHours) {
        return res.json({ date: dateKey, totalDuration, times: [] });
      }
      const busyIntervals = await appointmentService.getBusyIntervalsForBarberDate(
        barber.name,
        dateKey,
      );
      const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
      const times = appointmentService.buildTimeSlotsForDate({
        dateKey,
        workingHours,
        busyIntervals,
        totalDuration,
        minAllowedDate,
      });

      return res.json({
        date: dateKey,
        totalDuration,
        times,
      });
    } catch (error) {
      console.error("Home booking times error:", error);
      return res.status(500).json({ error: "Не удалось получить доступное время." });
    }
  });

  app.post("/api/home/booking/appointments", authenticateHomeToken, async (req, res) => {
    try {
      const homeUser = await resolveHomeBookingUser(req);
      if (!homeUser) return res.sendStatus(401);

      const barberId = normalizeText(req.body?.barberId);
      const serviceIds = appointmentService.parseServiceIdsInput(req.body?.serviceIds);
      const dateKey = normalizeText(req.body?.date);
      const startTime = normalizeText(req.body?.startTime);
      if (!barberId || !serviceIds.length || !dateKey || !startTime) {
        return res
          .status(400)
          .json({ error: "Заполните барбера, услугу, дату и время." });
      }
      if (!appointmentService.isIsoDateKey(dateKey)) {
        return res.status(400).json({ error: "Некорректная дата." });
      }
      const startMinute = appointmentService.parseTimeLabelToMinutes(startTime);
      if (startMinute == null) {
        return res.status(400).json({ error: "Некорректное время." });
      }

      const [settings, barbers, servicesCatalog] = await Promise.all([
        getHomeBookingSettings(),
        getBarbers({ includeInactive: false }),
        getServiceCatalog(false),
      ]);
      const barber = barbers.find((item) => normalizeText(item.id) === barberId);
      if (!barber) {
        return res.status(404).json({ error: "Барбер не найден." });
      }
      const bookableServices = appointmentService.resolveBookableServicesForBarber(
        servicesCatalog,
        barber.id,
      );
      const selectedServices = serviceIds
        .map((id) => bookableServices.find((service) => service.id === id))
        .filter(Boolean);
      if (!selectedServices.length) {
        return res.status(400).json({ error: "У выбранного барбера нет такой услуги." });
      }
      const totalPriceRub = Math.max(
        0,
        Math.round(
          selectedServices.reduce(
            (sum, service) => sum + Math.max(0, Number(service.price) || 0),
            0,
          ),
        ),
      );
      const requestedCoverBs = Math.max(0, Math.trunc(Number(req.body?.coverBsAmount) || 0));
      const referralPayload = requestedCoverBs > 0 ? await buildReferralPayload(homeUser) : null;
      const bsToRubRate = Math.max(1, Number(referralPayload?.program?.bsToRubRate) || 1);
      const maxCoverByPrice = Math.max(0, Math.floor(totalPriceRub / bsToRubRate));
      const availableBalanceBs = Math.max(0, Math.trunc(Number(referralPayload?.bsBalance) || 0));
      const maxAllowedCoverBs = Math.min(maxCoverByPrice, availableBalanceBs);
      if (requestedCoverBs > maxAllowedCoverBs) {
        return res.status(400).json({
          error:
            maxAllowedCoverBs > 0
              ? `Можно списать не больше ${maxAllowedCoverBs} BS для этой записи.`
              : "Для этой записи баллы BS сейчас недоступны.",
        });
      }
      const totalDuration = Math.max(
        selectedServices.reduce(
          (sum, service) => sum + Math.max(0, Number(service.duration) || 0),
          0,
        ),
        15,
      );
      let createdAppointment = null;
      try {
        createdAppointment = await appointmentService.createHomeAppointment({
          homeUser,
          barber,
          dateKey,
          startMinute,
          totalDuration,
          selectedServices,
          settings,
          activeStatus: STATUS_ACTIVE,
        });
      } catch (error) {
        if (error?.message === "LIMIT_REACHED") {
          return res.status(409).json({
            error: `У вас уже есть ${settings.bookingLimit} активных записей.`,
          });
        }
        if (error?.message === "NO_SCHEDULE") {
          return res
            .status(409)
            .json({ error: "На выбранную дату у барбера нет расписания." });
        }
        if (error?.message === "OUTSIDE_WORKING_HOURS") {
          return res
            .status(409)
            .json({ error: "Время выходит за рабочий диапазон барбера." });
        }
        if (error?.message === "LEAD_TIME") {
          return res
            .status(409)
            .json({ error: "Это время недоступно из-за ограничения minLeadHours." });
        }
        if (error?.message === "SLOT_TAKEN") {
          return res
            .status(409)
            .json({ error: "Слот уже занят. Выберите другое время." });
        }
        throw error;
      }
      try {
        if (requestedCoverBs > 0) {
          await applyBsToBookingAppointment({
            userId: homeUser.id,
            appointmentId: createdAppointment.id,
            amountBs: requestedCoverBs,
            amountRub: requestedCoverBs * bsToRubRate,
            serviceTotalRub: totalPriceRub,
            bsToRubRate,
            barberName: barber.name,
            dateKey,
            timeRange: createdAppointment.Time,
          });
        }
      } catch (error) {
        await prisma.appointments.delete({ where: { id: createdAppointment.id } }).catch((cleanupError) => {
          console.error("Home booking rollback error:", cleanupError);
        });
        if (error?.message === "INSUFFICIENT_BS") {
          return res.status(409).json({
            error: "На балансе недостаточно BS. Проверьте сумму списания и попробуйте снова.",
          });
        }
        if (error?.message === "BOOKING_BS_ALREADY_APPLIED") {
          return res.status(409).json({
            error: "BS для этой записи уже были применены. Обновите страницу и попробуйте снова.",
          });
        }
        throw error;
      }
      await notifyBarberAboutNewAppointment({
        appointment: createdAppointment,
        barber,
        homeUser,
      });
      requestRealtimePush(true);

      return res.status(201).json({
        appointment: {
          id: createdAppointment.id,
          barberName: createdAppointment.Barber,
          date: createdAppointment.Date,
          time: createdAppointment.Time,
          services: createdAppointment.Services,
        },
      });
    } catch (error) {
      console.error("Home booking create error:", error);
      return res.status(500).json({ error: "Не удалось создать запись." });
    }
  });

  app.post("/api/home/booking/appointments/:id/cancel", authenticateHomeToken, async (req, res) => {
    try {
      const homeUser = await resolveHomeBookingUser(req);
      if (!homeUser) return res.sendStatus(401);
      const appointmentId = normalizeText(req.params.id);
      if (!appointmentId) {
        return res.status(400).json({ error: "Не указана запись." });
      }
      const existing = await prisma.appointments.findUnique({ where: { id: appointmentId } });
      if (!existing) {
        return res.status(404).json({ error: "Запись не найдена." });
      }
      if (normalizeText(existing.UserID) !== normalizeText(homeUser.id)) {
        return res.status(403).json({ error: "Нельзя отменить чужую запись." });
      }
      if (normalizeText(existing.Status) !== normalizeText(STATUS_ACTIVE)) {
        return res.status(409).json({ error: "Эту запись уже нельзя отменить." });
      }
      const appointmentStart = parseDateTime(existing.Date, existing.Time);
      if (appointmentStart && appointmentStart.getTime() - Date.now() < 2 * 60 * 60 * 1000) {
        return res.status(409).json({
          code: "TOO_LATE_TO_CANCEL",
          error: "Запись нельзя отменить менее чем за 2 часа до начала.",
        });
      }
      const updated = await prisma.appointments.update({
        where: { id: appointmentId },
        data: { Status: STATUS_CANCELLED },
      });
      try {
        await refundBsForCancelledAppointment({
          userId: homeUser.id,
          appointmentId,
          barberName: existing.Barber,
          dateKey: existing.Date,
          timeRange: existing.Time,
        });
      } catch (error) {
        await prisma.appointments
          .update({
            where: { id: appointmentId },
            data: { Status: STATUS_ACTIVE },
          })
          .catch((rollbackError) => {
            console.error("Home booking cancel rollback error:", rollbackError);
          });
        throw error;
      }
      requestRealtimePush(true);
      return res.json({ appointment: updated });
    } catch (error) {
      console.error("Home booking cancel error:", error);
      return res.status(500).json({ error: "Не удалось отменить запись." });
    }
  });
};

module.exports = {
  registerHomeRoutes,
};
