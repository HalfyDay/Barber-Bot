require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { randomUUID, createHash, randomBytes, scryptSync, timingSafeEqual } = require("crypto");
const jwt = require("jsonwebtoken");
const cron = require("node-cron");
const fs = require("fs-extra");
const { spawn } = require("child_process");
const os = require("os");
const {
  ensureLicenseValid,
  licenseMiddleware,
  getLicenseStatus,
  startLicenseWatcher,
} = require("./services/licenseGuard");
const { checkForUpdates, applyUpdate } = require("./services/updateManager");
const { createAppointmentService } = require("./services/appointmentService");
const { createTelegramAuthService } = require("./services/telegramAuthService");
const { createLegacyCrudGuard } = require("./services/legacyCrudGuard");
const { createOwnerAssetHelpers } = require("./services/ownerAssetHelpers");
const { createBackupService } = require("./services/backupService");
const { createUpdateMonitorService } = require("./services/updateMonitorService");
const { createBotRuntimeService } = require("./services/botRuntimeService");
const { createRealtimeService } = require("./services/realtimeService");
const { createDashboardSnapshotService } = require("./services/dashboardSnapshotService");
const { createAdminInsightsService } = require("./services/adminInsightsService");
const { createAuthService } = require("./services/authService");
const { createServerLifecycleService } = require("./services/serverLifecycleService");
const { createHomeDataService } = require("./services/homeDataService");
const { createLegacyHomeUsersMigrationService } = require("./services/legacyHomeUsersMigrationService");
const { createCatalogConfigService } = require("./services/catalogConfigService");
const { createNotificationReminderService } = require("./services/notificationReminderService");
const { createBotUserService } = require("./services/botUserService");
const { createHomeProfileService } = require("./services/homeProfileService");
const { createHomeClientStoreService } = require("./services/homeClientStoreService");
const { createDateTimeService } = require("./services/dateTimeService");
const { createAppointmentPresentationService } = require("./services/appointmentPresentationService");
const { createIdentityAccessService } = require("./services/identityAccessService");
const { createCatalogLookupService } = require("./services/catalogLookupService");
const { createBookingUtilityService } = require("./services/bookingUtilityService");
const { createBarberAliasService } = require("./services/barberAliasService");
const { createSitePresenceService } = require("./services/sitePresenceService");
const { createHomeRealtimeService } = require("./services/homeRealtimeService");
const { createPrismaClient, getPrismaRuntimeConfig, validatePrismaRuntimeConfig } = require("./services/prismaRuntime");
const { registerAdminCrudRoutes } = require("./routes/adminCrudRoutes");
const { registerHomeRoutes } = require("./routes/homeRoutes");
const { registerBotInternalRoutes } = require("./routes/botInternalRoutes");
const { registerOwnerSystemRoutes } = require("./routes/ownerSystemRoutes");
const { registerOwnerAssetsRoutes } = require("./routes/ownerAssetsRoutes");
const { registerServiceCatalogRoutes } = require("./routes/serviceCatalogRoutes");
const parseEnvBoolean = (value, fallback = false) => {
  if (value === undefined || value === null || value === "") return fallback;
  const normalized = value.toString().trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return fallback;
};
const parseEnvList = (value) =>
  (value || "")
    .toString()
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
const isProductionRuntime =
  (process.env.NODE_ENV || "").toString().trim().toLowerCase() === "production";
const createRuntimeSecret = (envName, label) => {
  const configured = (process.env[envName] || "").toString().trim();
  if (configured) return configured;
  if (isProductionRuntime) {
    throw new Error(`${envName} must be configured in production environment.`);
  }
  const generated = randomBytes(32).toString("hex");
  console.warn(
    `[security] ${envName} is not configured; using ephemeral ${label} for current process only.`,
  );
  return generated;
};
const runtimeFetch =
  globalThis.fetch ||
  ((...args) => import("node-fetch").then(({ default: nodeFetch }) => nodeFetch(...args)));
const app = express();
app.set("trust proxy", true);
app.disable("x-powered-by");
const prismaRuntimeConfig = validatePrismaRuntimeConfig(process.env);
const prisma = createPrismaClient();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = createRuntimeSecret("JWT_SECRET", "JWT secret");
const TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";
const HOME_JWT_SECRET = createRuntimeSecret("HOME_JWT_SECRET", "home JWT secret");
const BOT_INTERNAL_API_TOKEN = createRuntimeSecret(
  "BOT_INTERNAL_API_TOKEN",
  "bot internal API token",
);
const HOME_TOKEN_EXPIRES_IN = process.env.HOME_JWT_EXPIRES_IN || "30d";
const TOKEN_REFRESH_THRESHOLD_MS =
  Number(process.env.JWT_REFRESH_THRESHOLD_MS) || 3 * 24 * 60 * 60 * 1000;
const HOME_TOKEN_REFRESH_THRESHOLD_MS =
  Number(process.env.HOME_JWT_REFRESH_THRESHOLD_MS) || 3 * 24 * 60 * 60 * 1000;
const WARNING_LOOKBACK_DAYS =
  Number(process.env.WARNING_LOOKBACK_DAYS || 90) || 90;
const APPOINTMENT_RETENTION_DAYS =
  Math.max(Number(process.env.APPOINTMENT_RETENTION_DAYS || 90) || 90, 1);
const APPOINTMENT_REMINDER_INTERVAL_MS = Math.max(
  Number(process.env.APPOINTMENT_REMINDER_INTERVAL_MS) || 10 * 60 * 1000,
  60 * 1000,
);
const WARNING_BLOCK_THRESHOLD =
  Number(process.env.WARNING_BLOCK_THRESHOLD || 3) || 3;
const BACKUP_DIR = path.join(__dirname, "backups");
const LEGACY_HOME_USERS_DB_PATH =
  process.env.HOME_USERS_DB_PATH || path.join(__dirname, "data", "home-users.db");
const BACKUP_RETENTION_DAYS = 30;
const BACKUP_CRON_EXPRESSION =
  (process.env.BACKUP_CRON_EXPRESSION || "0 3 * * *").toString().trim() ||
  "0 3 * * *";
const APP_TIMEZONE = (
  process.env.APP_TIMEZONE ||
  process.env.BACKUP_CRON_TIMEZONE ||
  process.env.TZ ||
  "Europe/Moscow"
)
  .toString()
  .trim() || "Europe/Moscow";
const BACKUP_CRON_TIMEZONE = (process.env.BACKUP_CRON_TIMEZONE || process.env.TZ || "")
  .toString()
  .trim();
console.log(
  `[runtime] Prisma runtime=${prismaRuntimeConfig.runtime}, schema=${path.relative(__dirname, prismaRuntimeConfig.schemaPath)}, env=${prismaRuntimeConfig.databaseUrlEnv}`,
);
const CLIENT_ERROR_LOG = path.join(__dirname, "data", "client-error.log");
const UPDATE_ALERT_LOG = path.join(__dirname, "data", "update-alert.log");
const HOME_CLIENT_STORE_PATH = path.join(__dirname, "data", "home-client-store.json");
const HEALTHCHECK_PATH_RAW = (process.env.HEALTHCHECK_PATH || "/api/health")
  .toString()
  .trim();
const HEALTHCHECK_PATH = HEALTHCHECK_PATH_RAW.startsWith("/")
  ? HEALTHCHECK_PATH_RAW
  : `/${HEALTHCHECK_PATH_RAW}`;
const POST_RESTART_HEALTHCHECK_ENABLED = parseEnvBoolean(
  process.env.POST_RESTART_HEALTHCHECK_ENABLED,
  true,
);
const POST_RESTART_HEALTHCHECK_HOST = (
  process.env.POST_RESTART_HEALTHCHECK_HOST || "127.0.0.1"
)
  .toString()
  .trim();
const POST_RESTART_HEALTHCHECK_TIMEOUT_MS = Math.max(
  Number(process.env.POST_RESTART_HEALTHCHECK_TIMEOUT_MS) || 45000,
  5000,
);
const POST_RESTART_HEALTHCHECK_INTERVAL_MS = Math.max(
  Number(process.env.POST_RESTART_HEALTHCHECK_INTERVAL_MS) || 1500,
  500,
);
const POST_RESTART_HEALTHCHECK_URL = (process.env.POST_RESTART_HEALTHCHECK_URL || "")
  .toString()
  .trim();
const BOT_MENU_PATH = path.join(__dirname, "data", "bot-menu.json");
const DEFAULT_BOT_DESCRIPTION = "Текст в Главном меню";
const DEFAULT_ABOUT_TEXT = "Текст в блоке «О нас»";
const IMAGE_DIR = path.join(__dirname, "Image");
const CARD_IMAGE_DIR = path.join(IMAGE_DIR, "tgbot");
const MENU_IMAGE_DIR = path.join(IMAGE_DIR, "menu_bots");
const MAX_AVATAR_FILE_SIZE = Number(
  process.env.MAX_AVATAR_FILE_SIZE || 5 * 1024 * 1024,
);
const BARBER_ALIAS_FILE = path.join(__dirname, "data", "barber-aliases.json");
const BOT_SUPPORTED_STATUS_OPTIONS = [
  "\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f",
  "\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",
  "\u041e\u0442\u043c\u0435\u043d\u0430",
  "\u041d\u0435\u044f\u0432\u043a\u0430",
];
const SUPPORTED_APPOINTMENT_STATUSES = [...BOT_SUPPORTED_STATUS_OPTIONS];
const [STATUS_ACTIVE, STATUS_DONE, STATUS_CANCELLED, STATUS_NO_SHOW] = BOT_SUPPORTED_STATUS_OPTIONS;
const toWindows1251Mojibake = (value = "") => {
  try {
    return new TextDecoder("windows-1251").decode(new TextEncoder().encode(value));
  } catch {
    return value;
  }
};
const RESERVED_COST_FIELDS = new Set([
  "id",
  "Id",
  "ID",
  "Uslugi",
  "Dlitelnost",
]);
const SLOT_BLOCK_TOKENS = ["block", "\u0431\u043b\u043e\u043a"];
const tableToModelMap = {
  Appointments: "appointments",
  Schedules: "schedules",
  Users: "users",
  Cost: "cost",
  Barbers: "barbers",
  Services: "services",
  ServicePrices: "servicePrices",
  BotSettings: "botSettings",
  Positions: "positions",
};
const TABLE_ORDERING = {
  Positions: [{ orderIndex: "asc" }, { name: "asc" }],
};
const numericFields = {
  Users: [],
  Appointments: [],
  Schedules: [],
  Cost: [],
  Barbers: ["orderIndex"],
  Services: ["duration", "orderIndex"],
  ServicePrices: ["price"],
  BotSettings: ["bookingLimit", "minLeadHours", "maxDaysAhead"],
  Positions: ["commissionRate", "orderIndex"],
};
const booleanFields = {
  Barbers: ["isActive", "cardPhotoGrayscale", "cardPhotoOutline"],
  Services: ["isActive"],
  BotSettings: ["isBotEnabled"],
};
const ROLE_OWNER = "owner";
const ROLE_STAFF = "staff";
const ROLE_CREATOR = "creator";
const CREATOR_ACCOUNT_ENABLED = parseEnvBoolean(process.env.CREATOR_ENABLED, false);
const CREATOR_ACCOUNT = CREATOR_ACCOUNT_ENABLED
  ? {
      enabled: true,
      phone: (process.env.CREATOR_PHONE || "").toString().trim(),
      password: (process.env.CREATOR_PASSWORD || "").toString().trim(),
      name: (process.env.CREATOR_NAME || "Создатель").toString().trim() || "Создатель",
      username: (process.env.CREATOR_LOGIN || "creator").toString().trim() || "creator",
    }
  : null;
const HOME_PASSWORD_HASH_LENGTH = 64;
const HOME_MIN_PASSWORD_LENGTH = 4;
const HOME_TELEGRAM_AUTH_TTL_MS =
  Number(process.env.HOME_TELEGRAM_AUTH_TTL_MS) || 10 * 60 * 1000;
const HOME_PROFILE_CHANGE_COOLDOWN_MS =
  Number(process.env.HOME_PROFILE_CHANGE_COOLDOWN_MS) || 30 * 24 * 60 * 60 * 1000;
const TELEGRAM_BOT_USERNAME = (process.env.TELEGRAM_BOT_USERNAME || "")
  .toString()
  .trim()
  .replace(/^@+/, "");
let httpServer = null;
let updateInProgress = false;
let restartScheduled = false;
const pythonExecutable =
  process.env.BOT_PYTHON_PATH ||
  (os.platform() === "win32" ? "python" : "python3");
const botScriptPath = path.join(__dirname, "BotBrotherShop.py");
const restartCommand = () => {
  const nodePath = process.execPath;
  const entry = path.join(__dirname, "server.js");
  return { command: nodePath, args: [entry] };
};
const getRestartStrategy = () => {
  const configured = (process.env.APP_RESTART_MODE || "auto")
    .toString()
    .trim()
    .toLowerCase();
  if (configured === "spawn" || configured === "exit") {
    return configured;
  }
  const hasPm2Context =
    Object.prototype.hasOwnProperty.call(process.env, "pm_id") ||
    Boolean(process.env.PM2_HOME);
  const hasSystemdContext = Boolean(
    process.env.INVOCATION_ID ||
      process.env.JOURNAL_STREAM ||
      process.env.SYSTEMD_EXEC_PID,
  );
  return hasPm2Context || hasSystemdContext ? "exit" : "spawn";
};
const DEFAULT_ALLOWED_ORIGINS = [
  "https://brothershop.website",
  "https://www.brothershop.website",
  "https://panel.brothershop.website",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];
const allowedCorsOrigins = new Set([
  ...DEFAULT_ALLOWED_ORIGINS,
  ...parseEnvList(process.env.ALLOWED_ORIGINS),
]);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedCorsOrigins.has(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Bot-Internal-Token"],
    optionsSuccessStatus: 204,
  }),
);
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  );
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "manifest-src 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "script-src 'self' 'unsafe-inline'",
      "connect-src 'self'",
      "worker-src 'self' blob:",
    ].join("; "),
  );
  const forwardedProto = (req.headers["x-forwarded-proto"] || "").toString().toLowerCase();
  if (req.secure || forwardedProto === "https") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }
  next();
});
app.use(express.json({ limit: "12mb" }));
const setNoStoreHeaders = (res) => {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");
};
const PUBLIC_HOME_LANDING = path.join(__dirname, "home-page", "index.html");
const LEGAL_DIR = path.join(__dirname, "legal");

