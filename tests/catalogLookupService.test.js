const test = require("node:test");
const assert = require("node:assert/strict");

const { createCatalogLookupService } = require("../services/catalogLookupService");

const service = createCatalogLookupService({
  canonicalizeKey: (value) => (value ?? "").toString().trim().toLowerCase(),
  normalizeText: (value) => (value ?? "").toString().trim(),
  getBarberAliases: () => new Map([["barber-1", ["Тима", "tim"]]]),
});

test("catalog lookup service builds barber lookup with aliases", () => {
  const lookup = service.buildBarberLookup([
    { id: "barber-1", name: "Timur", login: "timur", nickname: "tim" },
  ]);

  assert.equal(service.resolveBarberIdFromLookup(lookup, "Тима"), "barber-1");
  assert.equal(service.resolveBarberIdFromLookup(lookup, "timur"), "barber-1");
});

test("catalog lookup service splits service list from json and text", () => {
  assert.deepEqual(service.splitServiceList('["Стрижка", {"name":"Бритье"}]'), [
    "Стрижка",
    "Бритье",
  ]);
  assert.deepEqual(service.splitServiceList("Стрижка, Бритье"), [
    "Стрижка",
    "Бритье",
  ]);
});

test("catalog lookup service resolves service lookup and barber price", () => {
  const services = [
    { id: "svc-1", name: "Стрижка", prices: { "barber-1": 1500 } },
  ];
  const lookup = service.buildServiceLookup(services);

  assert.equal(lookup.get("стрижка").id, "svc-1");
  assert.equal(service.getServicePriceForBarber(services[0], "barber-1"), 1500);
  assert.equal(service.getServicePriceForBarber(services[0], "barber-2"), null);
});

test("catalog lookup service builds barber name lookup and default revenue range", () => {
  const lookup = service.buildBarberNameLookup([
    { id: "barber-1", name: "Timur", login: "timur", nickname: "tim" },
  ]);
  const range = service.getDefaultRevenueRange();

  assert.equal(lookup.get("timur").id, "barber-1");
  assert.equal(range.start.getDate(), 1);
  assert.ok(range.end instanceof Date);
});
