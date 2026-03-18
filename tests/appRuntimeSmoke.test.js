const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildUrl,
  parseArgs,
} = require("../scripts/appRuntimeSmoke");

test("app runtime smoke parses cli args and env fallbacks", () => {
  const args = parseArgs(
    [
      "--base-url",
      "http://127.0.0.1:3000/",
      "--health-path",
      "/api/health",
      "--owner-login",
      "owner",
      "--owner-password",
      "secret",
      "--home-phone",
      "+79990000000",
      "--home-password",
      "home-secret",
      "--write",
      "docs/reports/app-runtime-smoke.json",
    ],
    {},
  );

  assert.deepEqual(args, {
    baseUrl: "http://127.0.0.1:3000",
    healthPath: "/api/health",
    ownerLogin: "owner",
    ownerPassword: "secret",
    homePhone: "+79990000000",
    homePassword: "home-secret",
    writePath: "docs/reports/app-runtime-smoke.json",
    writeSummaryPath: "docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md",
  });
});

test("app runtime smoke builds normalized urls", () => {
  assert.equal(
    buildUrl("http://127.0.0.1:3000/", "/api/health"),
    "http://127.0.0.1:3000/api/health",
  );
  assert.equal(
    buildUrl("http://127.0.0.1:3000", "api/login"),
    "http://127.0.0.1:3000/api/login",
  );
});
