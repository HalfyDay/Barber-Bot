const test = require("node:test");
const assert = require("node:assert/strict");

const { createTelegramAuthService } = require("../services/telegramAuthService");

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (value) => normalizeText(value);
const buildError = (message, code) => {
  const error = new Error(message);
  error.code = code;
  return error;
};

const createHarness = ({
  requests = [],
  usersByTelegram = {},
  usersByPhone = {},
} = {}) => {
  const requestStore = new Map(
    requests.map((row) => [normalizeText(row.id), { ...row }]),
  );
  const prismaCalls = [];
  const service = createTelegramAuthService({
    prisma: {
      users: {
        async updateMany(payload) {
          prismaCalls.push({ type: "updateMany", payload });
          return { count: 1 };
        },
        async update(payload) {
          prismaCalls.push({ type: "update", payload });
          return payload;
        },
      },
    },
    normalizeText,
    normalizePhone,
    getRequestById: (requestId) => requestStore.get(normalizeText(requestId)) || null,
    getRequestByCode: (code) =>
      Array.from(requestStore.values()).find((row) => normalizeText(row.code) === normalizeText(code)) ||
      null,
    updateRequestById: (requestId, patch) => {
      const key = normalizeText(requestId);
      const current = requestStore.get(key);
      if (!current) return;
      requestStore.set(key, { ...current, ...patch });
    },
    markExpiredRequests: () => {},
    findUserByTelegramId: async (telegramId) =>
      usersByTelegram[normalizeText(telegramId)] || null,
    findUserByPhone: async (phone) =>
      usersByPhone[normalizePhone(phone)] || null,
    toTelegramIdNumber: (value) => {
      const parsed = Number(normalizeText(value));
      return Number.isFinite(parsed) ? parsed : null;
    },
    buildError,
  });
  return {
    service,
    requestStore,
    prismaCalls,
  };
};

test("telegram auth start marks expired requests", async () => {
  const { service, requestStore } = createHarness({
    requests: [
      {
        id: "req-1",
        code: "123456",
        status: "pending",
        flow: "login",
        expiresAt: "2000-01-01T00:00:00.000Z",
      },
    ],
  });

  await assert.rejects(
    service.processBotInternalTelegramAuthStart({
      code: "123456",
      telegramId: "777",
    }),
    (error) => error?.code === "REQUEST_EXPIRED",
  );

  assert.equal(requestStore.get("req-1")?.status, "expired");
  assert.equal(requestStore.get("req-1")?.errorMessage, "Код авторизации истек.");
});

test("telegram auth start rejects requests bound to another Telegram account", async () => {
  const { service } = createHarness({
    requests: [
      {
        id: "req-2",
        code: "222222",
        status: "pending",
        flow: "login",
        telegramId: "999",
        expiresAt: "2999-01-01T00:00:00.000Z",
      },
    ],
  });

  await assert.rejects(
    service.processBotInternalTelegramAuthStart({
      code: "222222",
      telegramId: "777",
    }),
    (error) => error?.code === "TELEGRAM_MISMATCH",
  );
});

test("telegram auth start completes profile link", async () => {
  const { service, requestStore } = createHarness({
    requests: [
      {
        id: "req-3",
        code: "333333",
        status: "pending",
        flow: "profile_link",
        targetUserId: "user-1",
        expiresAt: "2999-01-01T00:00:00.000Z",
      },
    ],
    usersByTelegram: {
      "777": { id: "user-1", Name: "Ivan" },
    },
  });

  const result = await service.processBotInternalTelegramAuthStart({
    code: "333333",
    telegramId: "777",
  });

  assert.deepEqual(result, {
    status: "completed_profile_link",
    requestId: "req-3",
    flow: "profile_link",
  });
  assert.equal(requestStore.get("req-3")?.status, "completed");
  assert.equal(requestStore.get("req-3")?.userId, "user-1");
});

test("telegram auth start requests contact when user has no phone", async () => {
  const { service, requestStore } = createHarness({
    requests: [
      {
        id: "req-4",
        code: "444444",
        status: "pending",
        flow: "login",
        expiresAt: "2999-01-01T00:00:00.000Z",
      },
    ],
    usersByTelegram: {
      "777": { id: "user-2", Name: "Petr", Phone: "" },
    },
  });

  const result = await service.processBotInternalTelegramAuthStart({
    code: "444444",
    telegramId: "777",
  });

  assert.deepEqual(result, {
    status: "need_contact",
    requestId: "req-4",
    flow: "login",
  });
  assert.equal(requestStore.get("req-4")?.userId, "user-2");
  assert.equal(requestStore.get("req-4")?.displayName, "Petr");
});

test("telegram auth phone links existing user by phone and completes request", async () => {
  const { service, requestStore, prismaCalls } = createHarness({
    requests: [
      {
        id: "req-5",
        code: "555555",
        status: "pending",
        flow: "login",
        telegramId: "777",
        expiresAt: "2999-01-01T00:00:00.000Z",
      },
    ],
    usersByPhone: {
      "+79990000000": { id: "user-3", Name: "Alex", Phone: "+79990000000" },
    },
  });

  const result = await service.processBotInternalTelegramAuthPhone({
    requestId: "req-5",
    telegramId: "777",
    phone: "+79990000000",
  });

  assert.deepEqual(result, {
    status: "completed_login",
    requestId: "req-5",
    flow: "login",
    phone: "+79990000000",
    userId: "user-3",
  });
  assert.equal(requestStore.get("req-5")?.status, "completed");
  assert.equal(requestStore.get("req-5")?.userId, "user-3");
  assert.equal(prismaCalls.length, 2);
  assert.deepEqual(prismaCalls[0], {
    type: "updateMany",
    payload: {
      where: {
        TelegramID: 777,
        id: { not: "user-3" },
      },
      data: { TelegramID: null },
    },
  });
  assert.deepEqual(prismaCalls[1], {
    type: "update",
    payload: {
      where: { id: "user-3" },
      data: {
        Phone: "+79990000000",
        TelegramID: 777,
      },
    },
  });
});
