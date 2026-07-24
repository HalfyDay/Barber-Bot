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

test("owner assets routes require avatar upload payload", async () => {
  const { app } = createHarness();
  const handler = app.getRoute("POST", "/api/assets/avatars/upload");
  const res = createResponseMock();

  await handler({ body: {} }, res);

  assert.equal(res.statusCode, 400);
  assert.match(res.body.error, /изображения|image/i);
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
