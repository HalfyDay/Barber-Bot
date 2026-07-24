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

