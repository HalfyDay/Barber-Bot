const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

const { createOwnerAssetHelpers } = require("../services/ownerAssetHelpers");

const createDirent = (name, isFile = true) => ({
  name,
  isFile: () => isFile,
});

test("owner asset helpers sanitize image filename and reject invalid extension", async () => {
  const helpers = createOwnerAssetHelpers({
    fs: {},
    path,
    BOT_MENU_PATH: "D:\\tmp\\bot-menu.json",
    IMAGE_DIR: "D:\\images",
    MENU_IMAGE_DIR: "D:\\menu",
  });

  assert.equal(
    helpers.buildSafeImageFilename("..\\unsafe dir\\avatar test.PNG"),
    "avatar-test.png",
  );
  assert.equal(helpers.buildSafeImageFilename("avatar.exe"), null);
});

test("owner asset helpers generate unique image names against existing files", async () => {
  const helpers = createOwnerAssetHelpers({
    fs: {
      async pathExists(target) {
        return /avatar(?:-1)?\.png$/i.test(target);
      },
    },
    path,
    BOT_MENU_PATH: "D:\\tmp\\bot-menu.json",
    IMAGE_DIR: "D:\\images",
    MENU_IMAGE_DIR: "D:\\menu",
  });

  const result = await helpers.ensureUniqueImageName("avatar.png");

  assert.equal(result, "avatar-2.png");
});

test("owner asset helpers list only menu image files", async () => {
  const helpers = createOwnerAssetHelpers({
    fs: {
      async pathExists() {
        return true;
      },
      async readdir() {
        return [
          createDirent("two.webp"),
          createDirent("notes.txt"),
          createDirent("one.png"),
          createDirent("folder", false),
        ];
      },
    },
    path,
    BOT_MENU_PATH: "D:\\tmp\\bot-menu.json",
    IMAGE_DIR: "D:\\images",
    MENU_IMAGE_DIR: "D:\\menu",
  });

  const result = await helpers.listMenuImages();

  assert.deepEqual(result, [
    "/Image/menu_bots/one.png",
    "/Image/menu_bots/two.webp",
  ]);
});

test("owner asset helpers create default bot menu when file is missing", async () => {
  const writes = [];
  const helpers = createOwnerAssetHelpers({
    fs: {
      async ensureDir() {},
      async pathExists() {
        return false;
      },
      async writeJson(target, payload) {
        writes.push({ target, payload });
      },
    },
    path,
    BOT_MENU_PATH: "D:\\tmp\\bot-menu.json",
    IMAGE_DIR: "D:\\images",
    MENU_IMAGE_DIR: "D:\\menu",
  });

  const result = await helpers.loadBotMenu();

  assert.equal(result.version, 1);
  assert.ok(Array.isArray(result.screens));
  assert.ok(result.screens.length > 0);
  assert.equal(result.screens[0].id, "main");
  assert.equal(result.screens[0].title, "Главное меню");
  assert.equal(result.screens[0].buttons[0].label, "Записаться");
  assert.ok(Array.isArray(result.buttonTypes));
  assert.ok(result.buttonTypes.some((item) => item.id === "screen"));
  assert.equal(result.buttonTypes.find((item) => item.id === "screen")?.label, "Переход на экран");
  assert.equal(writes.length, 1);
  assert.equal(writes[0].payload.version, 1);
  assert.equal(writes[0].payload.screens[0].id, "main");
});

test("owner asset helpers normalize and persist bot menu payload", async () => {
  const writes = [];
  const helpers = createOwnerAssetHelpers({
    fs: {
      async ensureDir() {},
      async writeJson(target, payload) {
        writes.push({ target, payload });
      },
    },
    path,
    BOT_MENU_PATH: "D:\\tmp\\bot-menu.json",
    IMAGE_DIR: "D:\\images",
    MENU_IMAGE_DIR: "D:\\menu",
  });

  const result = await helpers.saveBotMenu({
    version: 5,
    screens: [
      {
        id: " custom ",
        title: "  Custom  ",
        buttons: [{ id: "go", type: "unknown", label: "Open" }],
      },
      {
        id: "custom",
        title: "Duplicate",
        buttons: [],
      },
    ],
  });

  assert.equal(result.version, 5);
  assert.equal(result.screens.length, 1);
  assert.equal(result.screens[0].id, "custom");
  assert.equal(result.screens[0].buttons[0].type, "screen");
  assert.ok(Array.isArray(result.buttonTypes));
  assert.equal(writes.length, 1);
  assert.equal(writes[0].payload.version, 5);
  assert.equal(writes[0].payload.screens.length, 1);
});
