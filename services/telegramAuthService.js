const createTelegramAuthService = ({
  prisma,
  normalizeText = (value) => (value ?? "").toString().trim(),
  normalizePhone = (value) => normalizeText(value),
  getRequestById,
  getRequestByCode,
  updateRequestById,
  markExpiredRequests = () => {},
  findUserByTelegramId,
  findUserByPhone,
  toTelegramIdNumber = () => null,
  buildError = (message, code) => {
    const error = new Error(message);
    error.code = code;
    return error;
  },
  flowLogin = "login",
  flowProfileLink = "profile_link",
  statusPending = "pending",
  statusCompleted = "completed",
  statusFailed = "failed",
  statusExpired = "expired",
}) => {
  const expiredMessage = "Код авторизации истек.";
  const corruptMessage = "Запрос привязки Telegram не содержит targetUserId.";
  const alreadyLinkedMessage = "Этот Telegram уже привязан к другому аккаунту.";

  const normalizeFlow = (value) => normalizeText(value) || flowLogin;

  const ensureActiveRequest = async (requestId, row, safeTelegramId) => {
    if (!row) {
      throw buildError("Telegram auth request not found.", "REQUEST_NOT_FOUND");
    }
    const flow = normalizeFlow(row.flow);
    const status = normalizeText(row.status);
    if (
      status === statusCompleted ||
      status === statusFailed ||
      status === statusExpired
    ) {
      throw buildError("Telegram auth request is not active.", "REQUEST_NOT_ACTIVE");
    }
    const currentTime = new Date().toISOString();
    if (normalizeText(row.expiresAt) && row.expiresAt <= currentTime) {
      await updateRequestById(requestId, {
        status: statusExpired,
        errorMessage: expiredMessage,
      });
      throw buildError("Telegram auth request expired.", "REQUEST_EXPIRED");
    }
    const requestTelegramId = normalizeText(row.telegramId);
    if (requestTelegramId && requestTelegramId !== safeTelegramId) {
      throw buildError(
        "Telegram auth request belongs to another Telegram account.",
        "TELEGRAM_MISMATCH",
      );
    }
    return flow;
  };

  const processBotInternalTelegramAuthStart = async ({ code, telegramId }) => {
    const safeCode = normalizeText(code);
    const safeTelegramId = normalizeText(telegramId);
    if (!/^\d{6}$/.test(safeCode || "")) {
      throw buildError("Invalid code.", "INVALID_CODE");
    }
    if (!safeTelegramId) {
      throw buildError("telegramId is required.", "INVALID_USER_DATA");
    }
    await markExpiredRequests();
    const row = await getRequestByCode(safeCode);
    const requestId = normalizeText(row?.id);
    const flow = await ensureActiveRequest(requestId, row, safeTelegramId);
    const targetUserId = normalizeText(row?.targetUserId);

    await updateRequestById(requestId, {
      status: statusPending,
      telegramId: safeTelegramId,
      errorMessage: null,
    });

    if (flow === flowProfileLink) {
      if (!targetUserId) {
        await updateRequestById(requestId, {
          status: statusFailed,
          telegramId: safeTelegramId,
          errorMessage: corruptMessage,
        });
        throw buildError("Telegram auth request is corrupt.", "REQUEST_CORRUPT");
      }
      const linked = await findUserByTelegramId(safeTelegramId);
      const linkedUserId = normalizeText(linked?.id);
      if (linkedUserId && linkedUserId !== targetUserId) {
        await updateRequestById(requestId, {
          status: statusFailed,
          telegramId: safeTelegramId,
          userId: linkedUserId,
          errorMessage: alreadyLinkedMessage,
        });
        throw buildError("Telegram already linked.", "TELEGRAM_ALREADY_LINKED");
      }
      await updateRequestById(requestId, {
        status: statusCompleted,
        telegramId: safeTelegramId,
        displayName: normalizeText(linked?.Name) || null,
        userId: targetUserId,
        errorMessage: null,
      });
      return {
        status: "completed_profile_link",
        requestId,
        flow,
      };
    }

    const linked = await findUserByTelegramId(safeTelegramId);
    const linkedPhone = normalizePhone(linked?.Phone || "");
    if (linked?.id && linkedPhone) {
      await updateRequestById(requestId, {
        status: statusCompleted,
        telegramId: safeTelegramId,
        phone: linkedPhone,
        displayName: normalizeText(linked?.Name) || linkedPhone,
        userId: normalizeText(linked.id),
        errorMessage: null,
      });
      return {
        status: "completed_login",
        requestId,
        flow,
        phone: linkedPhone,
        userId: normalizeText(linked.id),
      };
    }

    if (linked?.id) {
      await updateRequestById(requestId, {
        status: statusPending,
        telegramId: safeTelegramId,
        userId: normalizeText(linked.id),
        displayName: normalizeText(linked.Name) || null,
        errorMessage: null,
      });
    }

    return {
      status: "need_contact",
      requestId,
      flow,
    };
  };

  const processBotInternalTelegramAuthPhone = async ({ requestId, telegramId, phone }) => {
    const safeRequestId = normalizeText(requestId);
    const safeTelegramId = normalizeText(telegramId);
    const safePhone = normalizePhone(phone);
    if (!safeRequestId || !safeTelegramId) {
      throw buildError("requestId and telegramId are required.", "INVALID_USER_DATA");
    }
    if (!safePhone) {
      throw buildError("Invalid phone.", "INVALID_PHONE");
    }
    await markExpiredRequests();
    const row = await getRequestById(safeRequestId);
    const flow = await ensureActiveRequest(safeRequestId, row, safeTelegramId);
    if (flow !== flowLogin) {
      throw buildError("Telegram auth flow mismatch.", "REQUEST_FLOW_MISMATCH");
    }

    const linked = await findUserByTelegramId(safeTelegramId);
    const existing = linked || (await findUserByPhone(safePhone));
    const existingId = normalizeText(existing?.id);
    const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);

    if (existingId) {
      if (telegramIdAsNumber !== null) {
        await prisma.users.updateMany({
          where: {
            TelegramID: telegramIdAsNumber,
            id: { not: existingId },
          },
          data: { TelegramID: null },
        });
      }
      const patch = { Phone: safePhone };
      if (telegramIdAsNumber !== null) {
        patch.TelegramID = telegramIdAsNumber;
      }
      await prisma.users.update({
        where: { id: existingId },
        data: patch,
      });
    }

    await updateRequestById(safeRequestId, {
      status: statusCompleted,
      telegramId: safeTelegramId,
      phone: safePhone,
      displayName: existingId ? normalizeText(existing?.Name) || safePhone : null,
      userId: existingId || null,
      errorMessage: null,
    });

    return {
      status: "completed_login",
      requestId: safeRequestId,
      flow,
      phone: safePhone,
      userId: existingId || null,
    };
  };

  return {
    processBotInternalTelegramAuthStart,
    processBotInternalTelegramAuthPhone,
  };
};

module.exports = {
  createTelegramAuthService,
};
