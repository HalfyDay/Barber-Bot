const createHomeDataService = ({
  prisma,
  fs,
  path,
  BLOCKLIST_FILE,
  HOME_AUTH_COLUMNS,
  HOME_USER_SELECT,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  randomUUID,
  randomBytes,
  HOME_TELEGRAM_AUTH_TTL_MS,
  TELEGRAM_AUTH_REQUESTS_TABLE,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_STATUS_PENDING,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
}) => {
  void HOME_AUTH_COLUMNS;
  void TELEGRAM_AUTH_REQUESTS_TABLE;

  const ensureTelegramAuthRequestsTable = async () => true;

  const markExpiredTelegramAuthRequests = async () => {
    const nowIso = new Date().toISOString();
    const staleBefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    await prisma.telegramAuthRequests.updateMany({
      where: {
        status: TELEGRAM_AUTH_STATUS_PENDING,
        expiresAt: { lte: nowIso },
      },
      data: {
        status: TELEGRAM_AUTH_STATUS_EXPIRED,
        updatedAt: nowIso,
      },
    });
    await prisma.telegramAuthRequests.deleteMany({
      where: {
        status: {
          in: [
            TELEGRAM_AUTH_STATUS_COMPLETED,
            TELEGRAM_AUTH_STATUS_FAILED,
            TELEGRAM_AUTH_STATUS_EXPIRED,
          ],
        },
        updatedAt: { lte: staleBefore },
      },
    });
  };

  const createTelegramAuthCode = () =>
    String((randomBytes(4).readUInt32BE(0) % 900000) + 100000);

  const createTelegramAuthRequest = async ({
    flow = TELEGRAM_AUTH_FLOW_LOGIN,
    targetUserId = null,
  } = {}) => {
    const nowIso = new Date().toISOString();
    const expiresAt = new Date(Date.now() + HOME_TELEGRAM_AUTH_TTL_MS).toISOString();
    const maxAttempts = 8;
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const candidate = {
        id: randomUUID(),
        code: createTelegramAuthCode(),
        status: TELEGRAM_AUTH_STATUS_PENDING,
        flow: normalizeText(flow) || TELEGRAM_AUTH_FLOW_LOGIN,
        targetUserId: normalizeText(targetUserId) || null,
        telegramId: null,
        phone: null,
        displayName: null,
        userId: null,
        errorMessage: null,
        createdAt: nowIso,
        expiresAt,
        updatedAt: nowIso,
      };
      try {
        await prisma.telegramAuthRequests.create({ data: candidate });
        return candidate;
      } catch (error) {
        if (error?.code === "P2002") continue;
        throw error;
      }
    }
    throw new Error("Failed to generate Telegram auth code.");
  };

  const getTelegramAuthRequestById = async (requestId) =>
    prisma.telegramAuthRequests.findUnique({
      where: { id: requestId },
    });

  const getTelegramAuthRequestByCode = async (code) =>
    prisma.telegramAuthRequests.findUnique({
      where: { code },
    });

  const updateTelegramAuthRequestById = async (requestId, patch = {}) => {
    const data = {};
    const assignTextField = (column, rawValue) => {
      if (rawValue === undefined) return;
      data[column] = rawValue == null ? null : String(rawValue);
    };
    assignTextField("status", patch.status);
    assignTextField("flow", patch.flow);
    assignTextField("targetUserId", patch.targetUserId);
    assignTextField("telegramId", patch.telegramId);
    assignTextField("phone", patch.phone);
    assignTextField("displayName", patch.displayName);
    assignTextField("userId", patch.userId);
    assignTextField("errorMessage", patch.errorMessage);
    data.updatedAt = new Date().toISOString();
    await prisma.telegramAuthRequests.updateMany({
      where: { id: requestId },
      data,
    });
  };

  const deleteTelegramAuthRequestById = async (requestId) =>
    prisma.telegramAuthRequests.deleteMany({
      where: { id: requestId },
    });

  const ensureUsersHomeAuthColumns = async () => true;

  const readBlockedUsers = async () => {
    try {
      const payload = await fs.readJson(BLOCKLIST_FILE);
      const list = Array.isArray(payload) ? payload : payload?.blocked || [];
      return new Set(list.filter(Boolean).map(String));
    } catch {
      return new Set();
    }
  };

  const writeBlockedUsers = async (blockedSet) => {
    const list = Array.from(blockedSet);
    await fs.ensureDir(path.dirname(BLOCKLIST_FILE));
    await fs.writeJson(BLOCKLIST_FILE, list, { spaces: 2 });
  };

  const listUsersWithHaircutReminderState = async () => {
    const rows = await prisma.users.findMany({
      where: { TelegramID: { not: null } },
      select: {
        id: true,
        TelegramID: true,
        LastHaircutReminderSent: true,
      },
    });
    return rows.map((row) => ({
      id: normalizeText(row?.id),
      TelegramID: normalizeText(row?.TelegramID),
      LastHaircutReminderSent: normalizeText(row?.LastHaircutReminderSent),
    }));
  };

  const markUserHaircutReminderSent = async (telegramId, lastHaircutDate) => {
    const safeTelegramId = normalizeText(telegramId);
    const safeDate = normalizeText(lastHaircutDate);
    if (!safeTelegramId || !safeDate) return;
    const users = await prisma.users.findMany({
      where: { TelegramID: { not: null } },
      select: { id: true, TelegramID: true },
    });
    const matchedIds = users
      .filter((row) => normalizeText(row?.TelegramID) === safeTelegramId)
      .map((row) => normalizeText(row?.id))
      .filter(Boolean);
    if (!matchedIds.length) return;
    await prisma.users.updateMany({
      where: { id: { in: matchedIds } },
      data: { LastHaircutReminderSent: safeDate },
    });
  };

  const shouldHydrateUserNameFromHome = (name, phone) => {
    const safeName = normalizeText(name);
    if (!safeName) return true;
    const safePhone = normalizePhone(phone);
    if (!safePhone) return false;
    return canonicalizeKey(safeName) === canonicalizeKey(safePhone);
  };

  const findHomeUserByTelegramId = async (telegramId) => {
    const safeTelegramId = normalizeText(telegramId);
    if (!safeTelegramId) return null;
    const users = await prisma.users.findMany({
      where: { TelegramID: { not: null } },
      select: {
        ...HOME_USER_SELECT,
        TelegramID: true,
      },
    });
    return users.find((row) => normalizeText(row?.TelegramID) === safeTelegramId) || null;
  };

  const findAnyUserByTelegramId = async (telegramId) => {
    const safeTelegramId = normalizeText(telegramId);
    if (!safeTelegramId) return null;
    const users = await prisma.users.findMany({
      where: { TelegramID: { not: null } },
      select: {
        id: true,
        Name: true,
        Phone: true,
        TelegramID: true,
      },
    });
    return users.find((row) => normalizeText(row?.TelegramID) === safeTelegramId) || null;
  };

  const findAnyUserByPhone = async (phone) => {
    const safePhone = normalizePhone(phone);
    if (!safePhone) return null;
    const users = await prisma.users.findMany({
      where: { Phone: { not: null } },
      select: {
        id: true,
        Name: true,
        Phone: true,
        TelegramID: true,
        LastNameChanged: true,
        homePhoneChangedAt: true,
      },
    });
    return users.find((row) => normalizePhone(row?.Phone || "") === safePhone) || null;
  };

  const findHomeUserByPhone = async (phone) => {
    const safePhone = normalizePhone(phone);
    if (!safePhone) return null;
    const users = await prisma.users.findMany({
      where: { Phone: { not: null } },
      select: HOME_USER_SELECT,
    });
    const matches = users.filter((row) => normalizePhone(row.Phone || "") === safePhone);
    if (!matches.length) return null;
    return (
      matches.find(
        (row) =>
          row.homeIsActive !== false &&
          normalizeText(row.homePasswordHash) &&
          normalizeText(row.homePasswordSalt),
      ) || matches[0]
    );
  };

  const findHomeUserById = async (userId) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return null;
    const row = await prisma.users.findUnique({
      where: { id: safeUserId },
      select: HOME_USER_SELECT,
    });
    if (!row) return null;
    if (row.homeIsActive === false) return null;
    if (!normalizeText(row.homePasswordHash) || !normalizeText(row.homePasswordSalt)) {
      return null;
    }
    return row;
  };

  return {
    ensureTelegramAuthRequestsTable,
    markExpiredTelegramAuthRequests,
    createTelegramAuthRequest,
    getTelegramAuthRequestById,
    getTelegramAuthRequestByCode,
    updateTelegramAuthRequestById,
    deleteTelegramAuthRequestById,
    ensureUsersHomeAuthColumns,
    readBlockedUsers,
    writeBlockedUsers,
    listUsersWithHaircutReminderState,
    markUserHaircutReminderSent,
    shouldHydrateUserNameFromHome,
    findHomeUserByTelegramId,
    findAnyUserByTelegramId,
    findAnyUserByPhone,
    findHomeUserByPhone,
    findHomeUserById,
  };
};

module.exports = {
  createHomeDataService,
};
