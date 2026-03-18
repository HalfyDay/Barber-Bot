const test = require("node:test");
const assert = require("node:assert/strict");

const { buildAppRuntimeSmokeSummaryMarkdown } = require("../scripts/lib/appRuntimeSmokeSummary");

test("app runtime smoke summary renders report details", () => {
  const markdown = buildAppRuntimeSmokeSummaryMarkdown({
    generatedAt: "2026-03-17T12:00:00.000Z",
    baseUrl: "http://127.0.0.1:3000",
    ok: true,
    checks: [
      {
        name: "health",
        ok: true,
        status: 200,
        durationMs: 12,
      },
      {
        name: "owner-login",
        ok: false,
        status: 401,
        durationMs: 18,
      },
    ],
  });

  assert.match(markdown, /Overall result: ok/);
  assert.match(markdown, /health: ok, status=200, durationMs=12/);
  assert.match(markdown, /owner-login: failed, status=401, durationMs=18/);
});
