const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

const { registerOwnerAssetsRoutes } = require("../routes/ownerAssetsRoutes");
const { createAppMock, createResponseMock } = require("./routeTestUtils");

const normalizeText = (value) => (value ?? "").toString().trim();

const createHarness = (overrides = {}) => {
  const app = createAppMock();
  const prisma = {
    botMessages: {
      async findMany() {
        return [];
      },
      async update({ where, data }) {
        return { id: where.id, ...data };
      },
    },
    ...(overrides.prisma || {}),
  };

  registerOwnerAssetsRoutes({
    app,
    authenticateToken: (_req, _res, next) => next && next(),
    isOwnerRequest: () => true,
    listAvatarImages: async () => [],
    buildSafeImageFilename: (name) => name,
    IMAGE_DIR: "D:\\images",
    decodeBase64Image: () => Buffer.from("123"),
    MAX_AVATAR_FILE_SIZE: 1024 * 1024,
    ensureUniqueImageName: async (name) => name,
    fs: {
      async ensureDir() {},
      async writeFile() {},
      async pathExists() {
        return false;
      },
      async remove() {},
    },
    path,
    CARD_IMAGE_DIR: "D:\\cards",
    normalizeText,
    getExistingImageFilename: (filename) => filename,
    listMenuImages: async () => [],
    MENU_IMAGE_DIR: "D:\\menu",
    loadBotMenu: async () => ({ sections: [] }),
    saveBotMenu: async (payload) => payload,
    prisma,
    ...overrides,
    prisma,
  });

  return { app };
};

test("owner assets routes block bot menu images for non-owner", async () => {
  const { app } = createHarness({
    isOwnerRequest: () => false,
  });
  const handler = app.getRoute("GET", "/api/bot/menu/images");
  const res = createResponseMock();

  await handler({}, res);

  assert.equal(res.statusCode, 403);
});

test("owner assets routes require avatar upload payload", async () => {
  const { app } = createHarness();
  const handler = app.getRoute("POST", "/api/assets/avatars/upload");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /изображения|image/i);
});

test("owner assets routes require non-empty bot message text", async () => {
  const { app } = createHarness();
  const handler = app.getRoute("PUT", "/api/bot/messages/:id");
  const res = createResponseMock();

  await handler(
    {
      params: { id: "msg-1" },
      body: { text: "   " },
    },
    res,
  );

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /Текст сообщения|message text/i);
});

test("owner assets routes return avatar list", async () => {
  const images = ["a.png", "b.png"];
  const { app } = createHarness({
    listAvatarImages: async () => images,
  });
  const handler = app.getRoute("GET", "/api/assets/avatars");
  const res = createResponseMock();

  await handler({}, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { images });
});

test("owner assets routes upload avatar image successfully", async () => {
  const calls = [];
  const images = ["avatar.png"];
  const { app } = createHarness({
    ensureUniqueImageName: async (name) => {
      calls.push(["ensureUniqueImageName", name]);
      return "avatar.png";
    },
    fs: {
      async ensureDir(target) {
        calls.push(["ensureDir", target]);
      },
      async writeFile(target, buffer) {
        calls.push(["writeFile", target, buffer.toString()]);
      },
      async pathExists() {
        return false;
      },
      async remove() {},
    },
    listAvatarImages: async () => images,
  });
  const handler = app.getRoute("POST", "/api/assets/avatars/upload");
  const res = createResponseMock();

  await handler({ body: { name: "avatar.png", data: "base64:data" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    success: true,
    path: "/Image/avatar.png",
    images,
  });
  assert.deepEqual(calls, [
    ["ensureDir", "D:\\images"],
    ["ensureUniqueImageName", "avatar.png"],
    ["writeFile", path.join("D:\\images", "avatar.png"), "123"],
  ]);
});

test("owner assets routes delete avatar successfully", async () => {
  const calls = [];
  const images = ["remaining.png"];
  const { app } = createHarness({
    fs: {
      async ensureDir() {},
      async writeFile() {},
      async pathExists(target) {
        calls.push(["pathExists", target]);
        return true;
      },
      async remove(target) {
        calls.push(["remove", target]);
      },
    },
    listAvatarImages: async () => images,
  });
  const handler = app.getRoute("DELETE", "/api/assets/avatars");
  const res = createResponseMock();

  await handler({ body: { filename: "avatar.png" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { success: true, images });
  assert.deepEqual(calls, [
    ["pathExists", path.join("D:\\images", "avatar.png")],
    ["remove", path.join("D:\\images", "avatar.png")],
  ]);
});

test("owner assets routes upload barber card successfully", async () => {
  const calls = [];
  const { app } = createHarness({
    fs: {
      async ensureDir(target) {
        calls.push(["ensureDir", target]);
      },
      async writeFile(target, buffer) {
        calls.push(["writeFile", target, buffer.toString()]);
      },
      async pathExists() {
        return false;
      },
      async remove() {},
    },
  });
  const handler = app.getRoute("POST", "/api/assets/cards/upload");
  const res = createResponseMock();

  await handler(
    { body: { barberId: "timur_1", name: "card.png", data: "base64:data" } },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    success: true,
    path: "/Image/tgbot/card-timur_1.png",
  });
  assert.deepEqual(calls, [
    ["ensureDir", "D:\\cards"],
    ["writeFile", path.join("D:\\cards", "card-timur_1.png"), "123"],
  ]);
});

test("owner assets routes return bot menu image gallery", async () => {
  const images = ["/Image/menu_bots/one.png"];
  const { app } = createHarness({
    listMenuImages: async () => images,
  });
  const handler = app.getRoute("GET", "/api/bot/menu/images");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { images });
});

test("owner assets routes upload bot menu image successfully", async () => {
  const calls = [];
  const images = ["/Image/menu_bots/menu.png"];
  const { app } = createHarness({
    ensureUniqueImageName: async (name, targetDir) => {
      calls.push(["ensureUniqueImageName", name, targetDir]);
      return "menu.png";
    },
    fs: {
      async ensureDir(target) {
        calls.push(["ensureDir", target]);
      },
      async writeFile(target, buffer) {
        calls.push(["writeFile", target, buffer.toString()]);
      },
      async pathExists() {
        return false;
      },
      async remove() {},
    },
    listMenuImages: async () => images,
  });
  const handler = app.getRoute("POST", "/api/bot/menu/images");
  const res = createResponseMock();

  await handler(
    { identity: { username: "owner" }, body: { name: "menu.png", data: "base64:data" } },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    success: true,
    path: "/Image/menu_bots/menu.png",
    images,
  });
  assert.deepEqual(calls, [
    ["ensureDir", "D:\\menu"],
    ["ensureUniqueImageName", "menu.png", "D:\\menu"],
    ["writeFile", path.join("D:\\menu", "menu.png"), "123"],
  ]);
});

test("owner assets routes return bot menu", async () => {
  const menu = { sections: [{ id: "main" }] };
  const { app } = createHarness({
    loadBotMenu: async () => menu,
  });
  const handler = app.getRoute("GET", "/api/bot/menu");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, menu);
});

test("owner assets routes save bot menu", async () => {
  const calls = [];
  const payload = { sections: [{ id: "updated" }] };
  const { app } = createHarness({
    saveBotMenu: async (input) => {
      calls.push(input);
      return { ...input, normalized: true };
    },
  });
  const handler = app.getRoute("PUT", "/api/bot/menu");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" }, body: payload }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ...payload, normalized: true });
  assert.deepEqual(calls, [payload]);
});

test("owner assets routes return bot messages", async () => {
  const messages = [{ id: "msg-1", code: "welcome", title: "Welcome" }];
  const { app } = createHarness({
    prisma: {
      botMessages: {
        async findMany(query) {
          assert.deepEqual(query.orderBy, [{ code: "asc" }, { title: "asc" }]);
          return messages;
        },
        async update({ where, data }) {
          return { id: where.id, ...data };
        },
      },
    },
  });
  const handler = app.getRoute("GET", "/api/bot/messages");
  const res = createResponseMock();

  await handler({ identity: { username: "owner" } }, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, messages);
});

test("owner assets routes update bot message", async () => {
  const calls = [];
  const { app } = createHarness({
    prisma: {
      botMessages: {
        async findMany() {
          return [];
        },
        async update({ where, data }) {
          calls.push({ where, data });
          return { id: where.id, ...data };
        },
      },
    },
  });
  const handler = app.getRoute("PUT", "/api/bot/messages/:id");
  const res = createResponseMock();

  await handler(
    {
      identity: { username: "owner" },
      params: { id: "msg-1" },
      body: { code: " welcome ", title: "Title", text: "Message" },
    },
    res,
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    id: "msg-1",
    code: "welcome",
    title: "Title",
    text: "Message",
  });
  assert.deepEqual(calls, [
    {
      where: { id: "msg-1" },
      data: { code: "welcome", title: "Title", text: "Message" },
    },
  ]);
});
