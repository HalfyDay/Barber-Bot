const test = require("node:test");
const assert = require("node:assert/strict");

const { createBarberAliasService } = require("../services/barberAliasService");

const createHarness = (payload = null) => {
  const writes = [];
  const service = createBarberAliasService({
    fs: {
      readJsonSync() {
        if (payload instanceof Error) throw payload;
        return payload;
      },
      async ensureDir() {},
      async writeJson(file, data) {
        writes.push({ file, data });
      },
    },
    path: {
      dirname(file) {
        return file.split(/[/\\]/).slice(0, -1).join("/") || ".";
      },
    },
    barberAliasFile: "data/barber-aliases.json",
    canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
  });
  return { service, writes };
};

test("barber alias service loads aliases from disk payload", () => {
  const { service } = createHarness({
    "barber-1": ["Tim", "", "Тима"],
  });

  service.loadBarberAliasesFromDisk();

  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["Tim", "Тима"]);
});

test("barber alias service falls back to empty map on read error", () => {
  const { service } = createHarness(new Error("read failed"));

  service.loadBarberAliasesFromDisk();

  assert.equal(service.getBarberAliases().size, 0);
});

test("barber alias service registers alias and persists it", async () => {
  const { service, writes } = createHarness({});

  await service.registerBarberAlias("barber-1", "Tim");
  await service.registerBarberAlias("barber-1", "tim");

  assert.deepEqual(service.getBarberAliases().get("barber-1"), ["Tim"]);
  assert.equal(service.getBarberAliasLookup().get("tim"), "barber-1");
  assert.equal(writes.length, 1);
  assert.deepEqual(writes[0].data, { "barber-1": ["Tim"] });
});

test("barber alias service allows replacing current lookup map", () => {
  const { service } = createHarness({});

  service.setBarberAliasLookup(new Map([["tim", "barber-1"]]));

  assert.equal(service.getBarberAliasLookup().get("tim"), "barber-1");
});
