#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { buildAppRuntimeSmokeSummaryMarkdown } = require("./lib/appRuntimeSmokeSummary");

const runtimeFetch =
  globalThis.fetch ||
  ((...args) => import("node-fetch").then(({ default: nodeFetch }) => nodeFetch(...args)));

const normalizeText = (value) => (value ?? "").toString().trim();
const normalizeBaseUrl = (value) => normalizeText(value).replace(/\/+$/, "");

const parseArgs = (argv = process.argv.slice(2), env = process.env) => {
  const args = {
    baseUrl: normalizeBaseUrl(env.APP_SMOKE_BASE_URL || ""),
    healthPath: normalizeText(env.APP_SMOKE_HEALTH_PATH || "/api/health") || "/api/health",
    ownerLogin: normalizeText(env.APP_SMOKE_OWNER_LOGIN || ""),
    ownerPassword: normalizeText(env.APP_SMOKE_OWNER_PASSWORD || ""),
    homePhone: normalizeText(env.APP_SMOKE_HOME_PHONE || ""),
    homePassword: normalizeText(env.APP_SMOKE_HOME_PASSWORD || ""),
    writePath: "docs/reports/app-runtime-smoke.json",
    writeSummaryPath: "docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--base-url") {
      args.baseUrl = normalizeBaseUrl(argv[index + 1] || args.baseUrl);
      index += 1;
      continue;
    }
    if (token === "--health-path") {
      args.healthPath = normalizeText(argv[index + 1] || args.healthPath) || args.healthPath;
      index += 1;
      continue;
    }
    if (token === "--owner-login") {
      args.ownerLogin = normalizeText(argv[index + 1] || args.ownerLogin);
      index += 1;
      continue;
    }
    if (token === "--owner-password") {
      args.ownerPassword = normalizeText(argv[index + 1] || args.ownerPassword);
      index += 1;
      continue;
    }
    if (token === "--home-phone") {
      args.homePhone = normalizeText(argv[index + 1] || args.homePhone);
      index += 1;
      continue;
    }
    if (token === "--home-password") {
      args.homePassword = normalizeText(argv[index + 1] || args.homePassword);
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || args.writePath;
      index += 1;
      continue;
    }
    if (token === "--write-summary") {
      args.writeSummaryPath = argv[index + 1] || args.writeSummaryPath;
      index += 1;
    }
  }

  return args;
};

const buildUrl = (baseUrl, routePath) => {
  const safeBase = normalizeBaseUrl(baseUrl);
  const safePath = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return `${safeBase}${safePath}`;
};

const fetchJson = async (url, options = {}) => {
  const response = await runtimeFetch(url, options);
  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }
  return {
    ok: response.ok,
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    json,
    text,
  };
};

const performCheck = async (name, task) => {
  const startedAt = Date.now();
  try {
    const result = await task();
    return {
      name,
      ok: result.ok,
      status: result.status ?? null,
      durationMs: Date.now() - startedAt,
      details: result.details || null,
    };
  } catch (error) {
    return {
      name,
      ok: false,
      status: null,
      durationMs: Date.now() - startedAt,
      details: {
        error: error?.message || String(error),
      },
    };
  }
};

const runAppRuntimeSmoke = async ({
  baseUrl,
  healthPath = "/api/health",
  ownerLogin = "",
  ownerPassword = "",
  homePhone = "",
  homePassword = "",
}) => {
  if (!baseUrl) {
    throw new Error("APP_SMOKE_BASE_URL or --base-url is required.");
  }

  const checks = [];

  checks.push(
    await performCheck("health", async () => {
      const response = await fetchJson(buildUrl(baseUrl, healthPath));
      return {
        ok: response.ok,
        status: response.status,
        details: response.json || response.text,
      };
    }),
  );

  checks.push(
    await performCheck("login-options", async () => {
      const response = await fetchJson(buildUrl(baseUrl, "/api/login/options"));
      return {
        ok: response.ok && Array.isArray(response.json),
        status: response.status,
        details: {
          optionsCount: Array.isArray(response.json) ? response.json.length : null,
        },
      };
    }),
  );

  if (ownerLogin && ownerPassword) {
    let ownerToken = "";

    checks.push(
      await performCheck("owner-login", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/login"), {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            login: ownerLogin,
            password: ownerPassword,
          }),
        });
        ownerToken = normalizeText(response.json?.token);
        return {
          ok: response.ok && Boolean(ownerToken),
          status: response.status,
          details: {
            role: response.json?.role || null,
            username: response.json?.username || null,
          },
        };
      }),
    );

    checks.push(
      await performCheck("owner-auth-me", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/auth/me"), {
          headers: { authorization: `Bearer ${ownerToken}` },
        });
        return {
          ok: response.ok && response.json?.authenticated === true,
          status: response.status,
          details: response.json,
        };
      }),
    );

    checks.push(
      await performCheck("owner-barbers", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/barbers"), {
          headers: { authorization: `Bearer ${ownerToken}` },
        });
        return {
          ok: response.ok && Array.isArray(response.json),
          status: response.status,
          details: {
            count: Array.isArray(response.json) ? response.json.length : null,
          },
        };
      }),
    );
  } else {
    checks.push({
      name: "owner-login",
      ok: true,
      status: null,
      durationMs: 0,
      details: { skipped: true, reason: "owner credentials not provided" },
    });
  }

  if (homePhone && homePassword) {
    let homeToken = "";

    checks.push(
      await performCheck("home-login", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/home/auth/login"), {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            phone: homePhone,
            password: homePassword,
          }),
        });
        homeToken = normalizeText(response.json?.token);
        return {
          ok: response.ok && Boolean(homeToken),
          status: response.status,
          details: {
            userId: response.json?.user?.id || null,
            displayName: response.json?.user?.displayName || null,
          },
        };
      }),
    );

    checks.push(
      await performCheck("home-auth-me", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/home/auth/me"), {
          headers: { authorization: `Bearer ${homeToken}` },
        });
        return {
          ok: response.ok && response.json?.authenticated === true,
          status: response.status,
          details: response.json,
        };
      }),
    );

    checks.push(
      await performCheck("home-barbers", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/home/barbers"), {
          headers: { authorization: `Bearer ${homeToken}` },
        });
        return {
          ok: response.ok && Array.isArray(response.json),
          status: response.status,
          details: {
            count: Array.isArray(response.json) ? response.json.length : null,
          },
        };
      }),
    );

    checks.push(
      await performCheck("home-booking-services", async () => {
        const response = await fetchJson(buildUrl(baseUrl, "/api/home/booking/services"), {
          headers: { authorization: `Bearer ${homeToken}` },
        });
        return {
          ok: response.ok && response.json && typeof response.json === "object",
          status: response.status,
          details: {
            servicesCount: Array.isArray(response.json?.services)
              ? response.json.services.length
              : null,
          },
        };
      }),
    );
  } else {
    checks.push({
      name: "home-login",
      ok: true,
      status: null,
      durationMs: 0,
      details: { skipped: true, reason: "home credentials not provided" },
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    baseUrl,
    ok: checks.every((entry) => entry.ok),
    checks,
  };
};

const writeJson = (targetPath, payload) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return resolved;
};

const writeSummary = (targetPath, report) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, buildAppRuntimeSmokeSummaryMarkdown(report), "utf8");
  return resolved;
};

const main = async () => {
  const args = parseArgs();
  const report = await runAppRuntimeSmoke(args);
  const resolvedJson = writeJson(args.writePath, report);
  const resolvedSummary = writeSummary(args.writeSummaryPath, report);
  console.log(`App runtime smoke report written to ${resolvedJson}`);
  console.log(`App runtime smoke summary written to ${resolvedSummary}`);
  console.log(`ok=${report.ok ? "yes" : "no"}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  buildUrl,
  parseArgs,
  runAppRuntimeSmoke,
  writeSummary,
};
