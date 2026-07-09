const test = require("node:test");
const assert = require("node:assert/strict");

const { createBotMenuService } = require("../services/botMenuService");

const createHarness = (overrides = {}) => {
  const created = [];
  const upserted = [];
  const findUniqueFn = overrides.findUnique || (async () => null);
  const service = createBotMenuService({
    prisma: {
      botMenu: {
        findUnique: findUniqueFn,
        create: async ({ data }) => {
          created.push(data);
          return data;
        },
        upsert: async ({ create }) => {
          upserted.push(create);
          return create;
        },
      },
    },
    randomUUID: () => "test-uuid",
  });
  return { service, created, upserted };
};

test("botMenuService loadBotMenu creates default when no record exists", async () => {
  const { service, created } = createHarness();

  const menu = await service.loadBotMenu();

  assert.ok(menu);
  assert.equal(menu.version, 1);
  assert.ok(Array.isArray(menu.screens));
  assert.ok(menu.screens.length > 0);
  assert.equal(menu.screens[0].id, "main");
  assert.equal(created.length, 1);
  assert.equal(created[0].id, "default");
});

test("botMenuService loadBotMenu reads existing menu", async () => {
  const customPayload = {
    version: 2,
    screens: [{ id: "custom", title: "Custom", message: "Test", imageUrl: "", buttons: [] }],
  };
  const { service } = createHarness({
    findUnique: async () => ({ id: "default", payload: customPayload }),
  });

  const menu = await service.loadBotMenu();

  assert.deepEqual(menu, customPayload);
});

test("botMenuService loadBotMenu falls back to default on error", async () => {
  const { service } = createHarness({
    findUnique: async () => {
      throw new Error("DB connection failed");
    },
  });

  const menu = await service.loadBotMenu();

  assert.ok(menu);
  assert.equal(menu.version, 1);
  assert.ok(Array.isArray(menu.screens));
});

test("botMenuService saveBotMenu upserts to database", async () => {
  const { service, upserted } = createHarness();
  const payload = {
    version: 1,
    screens: [{ id: "test", title: "Test", message: "Test", imageUrl: "", buttons: [] }],
  };

  const result = await service.saveBotMenu(payload);

  assert.equal(upserted.length, 1);
  assert.equal(upserted[0].id, "default");
  assert.equal(result.version, 1);
  assert.ok(result.updatedAt);
});

test("botMenuService saveBotMenu throws on database error", async () => {
  const { service } = createHarness({
    findUnique: async () => null,
  });
  // Override upsert to throw
  service.saveBotMenu = async () => {
    const prisma = {
      botMenu: {
        upsert: async () => {
          throw new Error("Constraint violation");
        },
      },
    };
    const svc = createBotMenuService({ prisma, randomUUID: () => "uuid" });
    return svc.saveBotMenu({ screens: [] });
  };

  await assert.rejects(
    () => service.saveBotMenu({ screens: [] }),
    { message: "Constraint violation" }
  );
});
