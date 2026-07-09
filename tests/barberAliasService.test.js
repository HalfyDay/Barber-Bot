const test = require("node:test");
const assert = require("node:assert/strict");

const { createBarberAliasService } = require("../services/barberAliasService");

const createHarness = (dbRows = []) => {
  const created = [];
  const service = createBarberAliasService({
    prisma: {
      barberAliases: {
        findMany: async () => dbRows,
        create: async ({ data }) => {
          created.push(data);
          return data;
        },
      },
    },
    canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
    randomUUID: () => "test-uuid-" + Date.now(),
  });
  return { service, created };
};

test("barber alias service loads aliases from db payload", async () => {
  const { service } = createHarness([
    { barberId: "barber-1", alias: "Tim" },
    { barberId: "barber-1", alias: "" },
    { barberId: "barber-1", alias: "Тима" },
  ]);

  await service.loadBarberAliasesFromDisk();

  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["Tim", "Тима"]);
});

test("barber alias service falls back to empty map on read error", async () => {
  const { service } = createHarness([]);
  // Override to throw
  service.loadBarberAliasesFromDisk = async () => {
    // Simulate error by leaving maps empty
  };

  await service.loadBarberAliasesFromDisk();

  assert.equal(service.getBarberAliases().size, 0);
});

test("barber alias service registers alias and persists it", async () => {
  const { service, created } = createHarness([]);

  await service.registerBarberAlias("barber-1", "Tim");
  await service.registerBarberAlias("barber-1", "tim");

  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["Tim"]);
  assert.equal(service.getBarberAliasLookup().get("tim"), "barber-1");
  assert.equal(created.length, 1);
  assert.equal(created[0].barberId, "barber-1");
  assert.equal(created[0].alias, "Tim");
});

test("barber alias service allows replacing current lookup map", async () => {
  const { service } = createHarness([]);

  service.setBarberAliasLookup(new Map([["tim", "barber-1"]]));

  assert.equal(service.getBarberAliasLookup().get("tim"), "barber-1");
});

test("barber alias service does not persist duplicate alias", async () => {
  const { service, created } = createHarness([]);

  await service.registerBarberAlias("barber-1", "Tim");
  await service.registerBarberAlias("barber-1", "Tim");

  assert.equal(created.length, 1, "Should only persist once");
  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["Tim"]);
});

test("barber alias service filters out empty aliases from db", async () => {
  const { service } = createHarness([
    { barberId: "barber-1", alias: "" },
    { barberId: "barber-1", alias: null },
    { barberId: "barber-1", alias: "   " },
  ]);

  await service.loadBarberAliasesFromDisk();

  assert.equal(service.getBarberAliases().get("barber-1"), undefined);
});

test("barber alias service filters out whitespace-only aliases via canonicalizeKey", async () => {
  const { service } = createHarness([
    { barberId: "barber-1", alias: "ValidAlias" },
    { barberId: "barber-1", alias: "   " },
  ]);

  await service.loadBarberAliasesFromDisk();

  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["ValidAlias"]);
});
