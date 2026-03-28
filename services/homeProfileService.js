const createHomeProfileService = ({
  normalizeText,
  normalizePhone,
  randomBytes,
  scryptSync,
  timingSafeEqual,
  homeMinPasswordLength,
  homePasswordHashLength,
  homeProfileChangeCooldownMs,
  findHomeUserById,
}) => {
  const buildHomeIdentity = (payload = {}) => ({
    userId: normalizeText(payload.userId || payload.id),
    phone: normalizePhone(payload.phone || payload.username || ""),
    displayName: normalizeText(payload.displayName || payload.name || payload.phone || ""),
    accountRole: normalizeText(payload.accountRole || payload.role || ""),
    barberId: normalizeText(payload.barberId || ""),
    barberName: normalizeText(payload.barberName || ""),
    isBarber: payload.isBarber === true || normalizeText(payload.accountRole || payload.role || "") === "barber",
    scope: "home_client",
  });

  const buildHomeAuthError = (message, code) => {
    const error = new Error(message);
    error.code = code;
    return error;
  };

  const hashHomePassword = (password, saltHex = "") => {
    const safePassword = normalizeText(password);
    if (!safePassword) {
      throw buildHomeAuthError("Пароль не может быть пустым.", "INVALID_PASSWORD");
    }
    if (safePassword.length < homeMinPasswordLength) {
      throw buildHomeAuthError(
        `Пароль должен быть не короче ${homeMinPasswordLength} символов.`,
        "WEAK_PASSWORD",
      );
    }
    const salt = saltHex ? Buffer.from(saltHex, "hex") : randomBytes(16);
    const hash = scryptSync(safePassword, salt, homePasswordHashLength);
    return {
      saltHex: salt.toString("hex"),
      hashHex: hash.toString("hex"),
    };
  };

  const verifyHomePassword = (password, hashHex, saltHex) => {
    if (!password || !hashHex || !saltHex) return false;
    try {
      const computed = scryptSync(password, Buffer.from(saltHex, "hex"), homePasswordHashLength);
      const stored = Buffer.from(hashHex, "hex");
      if (computed.length !== stored.length) return false;
      return timingSafeEqual(computed, stored);
    } catch {
      return false;
    }
  };

  const toPublicHomeUser = (row = {}) => {
    const phone = normalizePhone(row.Phone || "");
    const displayName = normalizeText(row.Name || row.Phone || "");
    return {
      id: row.id || null,
      phone: phone || null,
      displayName: displayName || phone || null,
      createdAt: row.homeCreatedAt || null,
      lastLoginAt: row.homeLastLoginAt || null,
    };
  };

  const toDateMs = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return null;
    const parsed = Date.parse(safeValue);
    if (!Number.isFinite(parsed)) return null;
    return parsed;
  };

  const toIsoFromMs = (ms) => {
    if (!Number.isFinite(ms)) return null;
    try {
      return new Date(ms).toISOString();
    } catch {
      return null;
    }
  };

  const buildMonthlyLimit = (lastChangedAtRaw) => {
    const lastChangedAt = normalizeText(lastChangedAtRaw) || null;
    const lastMs = toDateMs(lastChangedAt);
    if (!lastMs) {
      return {
        lastChangedAt: null,
        nextAllowedAt: null,
        isLocked: false,
      };
    }
    const nextAllowedMs = lastMs + homeProfileChangeCooldownMs;
    return {
      lastChangedAt,
      nextAllowedAt: toIsoFromMs(nextAllowedMs),
      isLocked: nextAllowedMs > Date.now(),
    };
  };

  const formatLimitDateRu = (isoDate) => {
    const ms = toDateMs(isoDate);
    if (!ms) return "";
    return new Date(ms).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const buildLimitBlockedMessage = (fieldLabel, limitState) => {
    const dateLabel = formatLimitDateRu(limitState?.nextAllowedAt);
    if (!dateLabel) {
      return `Поле «${fieldLabel}» можно менять не чаще одного раза в 30 дней.`;
    }
    return `Поле «${fieldLabel}» можно менять не чаще одного раза в 30 дней. Доступно после ${dateLabel}.`;
  };

  const toPublicHomeProfile = (row = {}) => {
    const user = toPublicHomeUser(row);
    const telegramId = normalizeText(row.TelegramID);
    const telegramLastChangedAt = normalizeText(row.homeTelegramChangedAt) || null;
    return {
      ...user,
      telegramId: telegramId || null,
      telegramLinked: Boolean(telegramId),
      limits: {
        name: buildMonthlyLimit(row.LastNameChanged),
        phone: buildMonthlyLimit(row.homePhoneChangedAt),
        telegram: {
          lastChangedAt: telegramLastChangedAt,
          nextAllowedAt: null,
          isLocked: false,
        },
      },
    };
  };

  const resolveHomeBookingUser = async (req) => {
    const identity = req.homeUser || {};
    const userId = normalizeText(identity.userId);
    if (!userId) return null;
    const stored = await findHomeUserById(userId);
    if (!stored) return null;
    return {
      id: stored.id,
      phone: normalizePhone(stored.Phone || identity.phone || ""),
      displayName: normalizeText(
        stored.Name || identity.displayName || stored.Phone || identity.phone,
      ),
    };
  };

  return {
    buildHomeIdentity,
    buildHomeAuthError,
    hashHomePassword,
    verifyHomePassword,
    toPublicHomeUser,
    toPublicHomeProfile,
    buildLimitBlockedMessage,
    resolveHomeBookingUser,
  };
};

module.exports = {
  createHomeProfileService,
};
