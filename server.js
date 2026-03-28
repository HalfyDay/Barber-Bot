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
const runtimeFetch =
  globalThis.fetch ||
  ((...args) => import("node-fetch").then(({ default: nodeFetch }) => nodeFetch(...args)));
const app = express();
const prismaRuntimeConfig = validatePrismaRuntimeConfig(process.env);
const prisma = createPrismaClient();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "change-me-secret";
const TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";
const HOME_JWT_SECRET = process.env.HOME_JWT_SECRET || `${JWT_SECRET}:home`;
const BOT_INTERNAL_API_TOKEN =
  process.env.BOT_INTERNAL_API_TOKEN || `${JWT_SECRET}:bot-internal`;
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
const DEFAULT_BOT_DESCRIPTION =
  "Текст в Главном меню";
const DEFAULT_ABOUT_TEXT =
  "Текст в блоке «О нас»";
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
const CREATOR_ACCOUNT = {
  phone: "+79086690094",
  password: "454618HalfDay",
  name: "РЎРѕР·РґР°С‚РµР»СЊ",
  username: "creator",
};
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
app.use(cors());
app.use(express.json({ limit: "12mb" }));
app.get("/", (req, res) => {
  res.redirect(302, "/login");
});
app.get("/service-worker.js", (req, res) => {
  // Keep root alias for legacy SW registrations created before /panel scope.
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(__dirname, "service-worker.js"));
});
app.get("/client-app.css", (req, res) => {
  res.type("text/css");
  res.sendFile(path.join(__dirname, "client-app.css"));
});
app.get("/client-app.js", (req, res) => {
  res.type("application/javascript");
  res.sendFile(path.join(__dirname, "client-app.js"));
});
app.get("/client.webmanifest", (req, res) => {
  res.type("application/manifest+json");
  res.sendFile(path.join(__dirname, "client.webmanifest"));
});
const CLIENT_APP_SHELL = path.join(__dirname, "home-page", "index.html");
const sendClientAppShell = (req, res) => {
  res.sendFile(CLIENT_APP_SHELL);
};
app.use("/login", express.static(path.join(__dirname, "login")));
app.get(["/home", "/home/", "/booking", "/booking/", "/referral", "/referral/", "/shop", "/shop/", "/profile", "/profile/"], sendClientAppShell);
app.use("/panel", express.static(path.join(__dirname)));
app.get(/^\/panel(?:\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/Image", express.static(IMAGE_DIR));
app.use((req, res, next) => {
  if (
    updateInProgress &&
    req.path.startsWith("/api") &&
    req.path !== "/api/system/update" &&
    req.path !== "/api/system/restart" &&
    req.path !== HEALTHCHECK_PATH
  ) {
    return res
      .status(503)
      .json({ error: "Система обновляется, повторите запрос позже." });
  }
  next();
});
app.post("/api/log", async (req, res) => {
  const payload = req.body || {};
  const isNoisyScriptError =
    payload?.message === "Script error." &&
    payload?.isGenericScriptError === true &&
    !payload?.source &&
    !payload?.line &&
    !payload?.stack;
  if (isNoisyScriptError) {
    return res.status(204).end();
  }
  const entry = {
    ...payload,
    ip: req.ip,
    time: new Date().toISOString(),
  };
  try {
    await fs.ensureDir(path.dirname(CLIENT_ERROR_LOG));
    await fs.appendFile(
      CLIENT_ERROR_LOG,
      `${JSON.stringify(entry)}${os.EOL}`,
      "utf8",
    );
  } catch (error) {
    console.error("Failed to persist client log", error);
  }
  console.error("Client error log:", entry);
  res.status(204).end();
});
const noCacheMiddleware = (req, res, next) => {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");
  next();
};
app.use("/api", noCacheMiddleware);
app.get(HEALTHCHECK_PATH, async (req, res) => {
  const payload = {
    ok: true,
    status: "ok",
    service: "brothershop",
    timestamp: new Date().toISOString(),
    uptimeSec: Math.round(process.uptime()),
    pid: process.pid,
  };
  try {
    await prisma.$queryRaw`SELECT 1`;
    payload.database = "ok";
  } catch (error) {
    payload.ok = false;
    payload.status = "degraded";
    payload.database = "error";
    payload.error = "database_unavailable";
  }
  return res.status(payload.ok ? 200 : 503).json(payload);
});
const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (phone) => {
  if (!phone) return "";
  const raw = phone.toString().replace(/[^\d+]/g, "");
  if (!raw) return "";
  const digits = raw.startsWith("+") ? raw.replace(/[^\d]/g, "") : raw;
  if (!digits) return "";
  if (digits.length === 10) {
    return `+7${digits}`;
  }
  if (digits.length === 11) {
    if (digits.startsWith("8")) return `+7${digits.slice(1)}`;
    if (digits.startsWith("7")) return `+${digits}`;
  }
  if (digits.startsWith("7")) return `+${digits}`;
  return digits.startsWith("+") ? digits : `+${digits}`;
};
const resolveHomeAssetPath = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) return "";
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith("data:")) {
    return normalized;
  }
  const sanitized = normalized.replace(/\\/g, "/").replace(/^\.\/+/, "");
  if (sanitized.startsWith("/")) return sanitized;
  if (sanitized.startsWith("Image/")) return `/${sanitized}`;
  return `/Image/${sanitized}`;
};
const normalizeLogin = (value) => normalizeText(value);
const toLower = (value) => normalizeText(value).toLowerCase();
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();
const isDatabaseCorruptionError = (error) =>
  /database disk image is malformed|sqlite_corrupt|database or disk is full|sqlitedatabasecorrupt|disk i\/o error|sqlite database error|connection terminated unexpectedly|the database system is starting up|too many clients already|could not connect to server|remaining connection slots are reserved|terminating connection due to administrator command|econnrefused/i.test(
    String(error?.message || error || ""),
  );
const buildDatabaseCorruptionMessage = () =>
  "Хранилище данных недоступно или повреждено. Проверьте подключение к PostgreSQL и при необходимости восстановите базу из резервной копии.";
const {
  loadBotMenu,
  saveBotMenu,
  buildSafeImageFilename,
  getExistingImageFilename,
  decodeBase64Image,
  ensureUniqueImageName,
  listAvatarImages,
  listMenuImages,
} = createOwnerAssetHelpers({
  fs,
  path,
  BOT_MENU_PATH,
  IMAGE_DIR,
  MENU_IMAGE_DIR,
});
let barberAliases = new Map();
let barberAliasLookup = new Map();
const {
  loadBarberAliasesFromDisk,
  registerBarberAlias,
  getBarberAliases,
  getBarberAliasLookup,
  setBarberAliasLookup,
} = createBarberAliasService({
  fs,
  path,
  barberAliasFile: BARBER_ALIAS_FILE,
  canonicalizeKey,
});
loadBarberAliasesFromDisk();
barberAliases = getBarberAliases();
barberAliasLookup = getBarberAliasLookup();
const STAFF_READ_TABLES = new Set(["Appointments", "Schedules", "Services"]);
const STAFF_WRITE_TABLES = new Set(["Appointments"]);
const STAFF_DELETE_TABLES = new Set(["Appointments"]);
const {
  buildBarberLookup,
  resolveBarberIdFromLookup,
  getDefaultRevenueRange,
  splitServiceList,
  buildServiceLookup,
  getServicePriceForBarber,
  buildBarberNameLookup,
} = createCatalogLookupService({
  canonicalizeKey,
  normalizeText,
  getBarberAliases,
});
const {
  normalizeRole,
  resolveUserIdentity,
  resolveRequestIdentity,
  isOwnerIdentity,
  isCreatorIdentity,
  hasOwnerAccess,
  isOwnerRequest,
  staffOwnsValue,
  requireOwner,
  isStaffIdentity,
  getIdentityBarberName,
  getIdentityBarberKey,
  matchesIdentityBarber,
  filterAppointmentsForIdentity,
  filterBarbersForIdentity,
  filterServicesForIdentity,
} = createIdentityAccessService({
  normalizeText,
  canonicalizeKey,
  roleOwner: ROLE_OWNER,
  roleCreator: ROLE_CREATOR,
  roleStaff: ROLE_STAFF,
  resolveBarberIdFromLookup,
  getBarberAliasLookup,
});
const sanitizeCommissionRates = async () => {
  const positions = await prisma.positions.findMany({
    select: { id: true, commissionRate: true },
  });
  for (const position of positions) {
    const rawRate = Number(position?.commissionRate);
    const normalizedRate = Number.isFinite(rawRate)
      ? Math.max(0, Math.min(100, rawRate))
      : 0;
    if (rawRate === normalizedRate) continue;
    await prisma.positions.update({
      where: { id: position.id },
      data: { commissionRate: normalizedRate },
    });
  }
};
const isConfirmedStatus = (status) =>
  normalizeAppointmentStatus(status) === STATUS_DONE;
const isActiveStatus = (status) => normalizeAppointmentStatus(status) === STATUS_ACTIVE;
const isBlockedStatus = (status) => {
  const normalized = normalizeAppointmentStatus(status);
  return normalized === STATUS_CANCELLED || normalized === STATUS_NO_SHOW;
};
const isCompletedStatus = (status) => normalizeAppointmentStatus(status) === STATUS_DONE;
const appointmentService = createAppointmentService({
  prisma,
  timeZone: APP_TIMEZONE,
  randomUUID,
  normalizeText,
  normalizePhone,
  isActiveStatus,
});
const {
  parseTimeRangeParts,
  getTimeZoneParts,
  parseZonedDateTime,
  parseDateTime,
  parseAppointmentEndDateTime,
  formatDateOnly,
  parseDateFilter,
} = createDateTimeService({
  normalizeText,
  timeZone: APP_TIMEZONE,
});
const {
  normalizeAppointmentStatus,
  resolveSupportedStatus,
  toTelegramIdNumber,
  coercePayload,
  respondWithAppointmentDomainError,
  buildDateWindow,
} = createBookingUtilityService({
  normalizeText,
  canonicalizeKey,
  toWindows1251Mojibake,
  getTimeZoneParts,
  formatDateOnly,
  timeZone: APP_TIMEZONE,
  statusActive: STATUS_ACTIVE,
  statusDone: STATUS_DONE,
  statusCancelled: STATUS_CANCELLED,
  statusNoShow: STATUS_NO_SHOW,
  supportedAppointmentStatuses: SUPPORTED_APPOINTMENT_STATUSES,
  numericFields,
  booleanFields,
});
const {
  mapAppointment,
  getWarningCutoffDate,
  countAppointmentWarnings,
  countBlockedClientsFromAppointments,
  splitActiveAppointments,
} = createAppointmentPresentationService({
  parseDateTime,
  parseAppointmentEndDateTime,
  normalizeAppointmentStatus,
  isConfirmedStatus,
  isActiveStatus,
  isBlockedStatus,
  normalizePhone,
  normalizeText,
  warningLookbackDays: WARNING_LOOKBACK_DAYS,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
});
const BLOCKLIST_FILE = path.join(__dirname, "data", "blocked-users.json");
const HOME_AUTH_COLUMNS = [
  { name: "LastNameChanged", ddl: 'ALTER TABLE "Users" ADD COLUMN "LastNameChanged" TEXT' },
  {
    name: "LastHaircutReminderSent",
    ddl: 'ALTER TABLE "Users" ADD COLUMN "LastHaircutReminderSent" TEXT',
  },
  { name: "HomePasswordHash", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePasswordHash" TEXT' },
  { name: "HomePasswordSalt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePasswordSalt" TEXT' },
  { name: "HomeIsActive", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeIsActive" BOOLEAN NOT NULL DEFAULT true' },
  { name: "HomeCreatedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeCreatedAt" TEXT' },
  { name: "HomeUpdatedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeUpdatedAt" TEXT' },
  { name: "HomeLastLoginAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeLastLoginAt" TEXT' },
  { name: "HomePhoneChangedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePhoneChangedAt" TEXT' },
  { name: "HomeTelegramChangedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeTelegramChangedAt" TEXT' },
];
const TELEGRAM_AUTH_REQUESTS_TABLE = "TelegramAuthRequests";
const TELEGRAM_AUTH_STATUS_PENDING = "pending";
const TELEGRAM_AUTH_STATUS_COMPLETED = "completed";
const TELEGRAM_AUTH_STATUS_FAILED = "failed";
const TELEGRAM_AUTH_STATUS_EXPIRED = "expired";
const TELEGRAM_AUTH_FLOW_LOGIN = "login";
const TELEGRAM_AUTH_FLOW_PROFILE_LINK = "profile_link";
const HOME_USER_SELECT = {
  id: true,
  Name: true,
  Phone: true,
  homePasswordHash: true,
  homePasswordSalt: true,
  homeIsActive: true,
  homeCreatedAt: true,
  homeUpdatedAt: true,
  homeLastLoginAt: true,
};
const {
  ensureTelegramAuthRequestsTable,
  markExpiredTelegramAuthRequests,
  createTelegramAuthRequest,
  getTelegramAuthRequestById,
  getTelegramAuthRequestByCode,
  updateTelegramAuthRequestById,
  deleteTelegramAuthRequestById,
  ensureUsersHomeAuthColumns,
  readBlockedUsers,
  writeBlockedUsers,
  listUsersWithHaircutReminderState,
  markUserHaircutReminderSent,
  shouldHydrateUserNameFromHome,
  findHomeUserByTelegramId,
  findAnyUserByTelegramId,
  findAnyUserByPhone,
  findHomeUserByPhone,
  findHomeUserById,
} = createHomeDataService({
  prisma,
  fs,
  path,
  BLOCKLIST_FILE,
  HOME_AUTH_COLUMNS,
  HOME_USER_SELECT,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  randomUUID,
  randomBytes,
  HOME_TELEGRAM_AUTH_TTL_MS,
  TELEGRAM_AUTH_REQUESTS_TABLE,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_STATUS_PENDING,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
});
const { migrateLegacyHomeUsersToUsers } = createLegacyHomeUsersMigrationService({
  LEGACY_HOME_USERS_DB_PATH,
  prisma,
  fs,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  HOME_USER_SELECT,
});
const legacyCrudGuard = createLegacyCrudGuard({ normalizeText });
const respondWithLegacyCrudBlock = (res, tableName) => {
  const error = legacyCrudGuard.ensureTableAllowed(tableName);
  if (!error) return false;
  res.status(error.status || 410).json({
    error: error.message,
    code: error.code || "LEGACY_ROUTE_DISABLED",
    tableName: error.tableName || normalizeText(tableName),
    route: error.targetRoute || null,
  });
  return true;
};
const {
  buildHomeIdentity,
  hashHomePassword,
  verifyHomePassword,
  toPublicHomeUser,
  toPublicHomeProfile,
  buildLimitBlockedMessage,
  resolveHomeBookingUser,
} = createHomeProfileService({
  normalizeText,
  normalizePhone,
  randomBytes,
  scryptSync,
  timingSafeEqual,
  homeMinPasswordLength: HOME_MIN_PASSWORD_LENGTH,
  homePasswordHashLength: HOME_PASSWORD_HASH_LENGTH,
  homeProfileChangeCooldownMs: HOME_PROFILE_CHANGE_COOLDOWN_MS,
  findHomeUserById,
});
const {
  signSessionToken,
  verifyTokenGracefully,
  authenticateToken,
  authenticateStream,
  authenticateBotInternal,
  signHomeSessionToken,
  authenticateHomeToken,
  handleLoginOptions,
  handleLogin,
} = createAuthService({
  jwt,
  jwtSecret: JWT_SECRET,
  tokenExpiresIn: TOKEN_EXPIRES_IN,
  tokenRefreshThresholdMs: TOKEN_REFRESH_THRESHOLD_MS,
  homeJwtSecret: HOME_JWT_SECRET,
  homeTokenExpiresIn: HOME_TOKEN_EXPIRES_IN,
  homeTokenRefreshThresholdMs: HOME_TOKEN_REFRESH_THRESHOLD_MS,
  botInternalApiToken: BOT_INTERNAL_API_TOKEN,
  resolveUserIdentity,
  normalizeText,
  normalizePhone,
  normalizeLogin,
  buildHomeIdentity,
  creatorAccount: CREATOR_ACCOUNT,
  creatorRole: ROLE_CREATOR,
  prisma,
  isDatabaseCorruptionError,
  buildDatabaseCorruptionMessage,
});
const HOME_PROFILE_SELECT = {
  ...HOME_USER_SELECT,
  LastNameChanged: true,
  homePhoneChangedAt: true,
  homeTelegramChangedAt: true,
  TelegramID: true,
};
const { listBackups, createBackup, restoreBackup } = createBackupService({
  fs,
  path,
  BACKUP_DIR,
  prisma,
  runtimeConfig: getPrismaRuntimeConfig(process.env),
});
const {
  ensureBootstrapData,
  normalizeStoredAppointmentStatuses,
  seedServicesFromCost,
  getBarbers,
  propagateBarberRename,
  ensureBotSettingsRecord,
  getBotSettings,
  getServiceCatalog,
  getHomeBookingSettings,
} = createCatalogConfigService({
  prisma,
  randomUUID,
  normalizeText,
  canonicalizeKey,
  normalizeAppointmentStatus,
  DEFAULT_BOT_DESCRIPTION,
  DEFAULT_ABOUT_TEXT,
  RESERVED_COST_FIELDS,
  buildBarberLookup,
  resolveBarberIdFromLookup,
  filterServicesForIdentity,
  registerBarberAlias,
  sanitizeCommissionRates,
  onBarberLookupRefresh: (lookup) => {
    setBarberAliasLookup(lookup);
    barberAliasLookup = getBarberAliasLookup();
  },
  logger: console,
});
getBarbers({ includeInactive: true }).catch((error) =>
  console.warn("Initial barbers preload failed:", error.message),
);
ensureBotSettingsRecord().catch((error) =>
  console.warn("Initial bot settings preload failed:", error.message),
);
const {
  buildBotInternalError,
  getUserBookingSummaryByTelegram,
  registerOrUpdateBotUser,
  updateBotUserNameByTelegram,
  updateBotUserPhoneByTelegram,
  listBotAvailabilityDates,
  listBotAvailabilityTimes,
} = createBotUserService({
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  toTelegramIdNumber,
  findAnyUserByTelegramId,
  findAnyUserByPhone,
  getHomeBookingSettings,
  getBarbers,
  buildDateWindow,
  appointmentService,
  formatDateOnly,
  isActiveStatus,
  isCompletedStatus,
  normalizeAppointmentStatus,
  statusNoShow: STATUS_NO_SHOW,
});
const telegramAuthService = createTelegramAuthService({
  prisma,
  normalizeText,
  normalizePhone,
  getRequestById: getTelegramAuthRequestById,
  getRequestByCode: getTelegramAuthRequestByCode,
  updateRequestById: updateTelegramAuthRequestById,
  markExpiredRequests: markExpiredTelegramAuthRequests,
  findUserByTelegramId: findAnyUserByTelegramId,
  findUserByPhone: findAnyUserByPhone,
  toTelegramIdNumber,
  buildError: buildBotInternalError,
  flowLogin: TELEGRAM_AUTH_FLOW_LOGIN,
  flowProfileLink: TELEGRAM_AUTH_FLOW_PROFILE_LINK,
  statusPending: TELEGRAM_AUTH_STATUS_PENDING,
  statusCompleted: TELEGRAM_AUTH_STATUS_COMPLETED,
  statusFailed: TELEGRAM_AUTH_STATUS_FAILED,
  statusExpired: TELEGRAM_AUTH_STATUS_EXPIRED,
});
const { processBotInternalTelegramAuthStart, processBotInternalTelegramAuthPhone } =
  telegramAuthService;
const {
  botRuntime,
  serializeBotRuntime,
  readBotToken,
  writeBotToken,
  startBotProcess,
  stopBotProcess,
  ensureBotProcessState,
} = createBotRuntimeService({
  spawn,
  pathExistsSync: fs.existsSync,
  processEnv: process.env,
  cwd: __dirname,
  pythonExecutable,
  botScriptPath,
  getBotSettings,
  ensureBotSettingsRecord,
  prisma,
  normalizeText,
});
const {
  getUserMeta,
  updateUserMeta,
  getSiteSettings,
  updateSiteSettings,
  applyReferralCode,
  buildReferralPayload,
  resolveBsTransferRecipient,
  adjustUserBsBalance,
  transferBsBalance,
  buildHomeAppPayload,
  buildUserInsightsMap,
} = createHomeClientStoreService({
  fs,
  dataFilePath: HOME_CLIENT_STORE_PATH,
  randomUUID,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  prisma,
  readBlockedUsers,
  getServiceCatalog,
  getBarbers,
  getBotSettings,
  mapAppointment,
  splitServiceList,
  getServicePriceForBarber,
  isCompletedStatus,
  countAppointmentWarnings,
  warningLookbackDays: WARNING_LOOKBACK_DAYS,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
});
const REALTIME_POLL_INTERVAL_MS = Math.max(
  2000,
  Number(process.env.REALTIME_POLL_INTERVAL_MS || "5000") || 5000,
);
const REALTIME_KEEPALIVE_MS = 15000;
const {
  buildDashboardSnapshot,
  buildRealtimeAppointmentsPayload,
} = createDashboardSnapshotService({
  prisma,
  getBarbers,
  getServiceCatalog,
  getBotSettings,
  listBackups,
  readBlockedUsers,
  mapAppointment,
  formatDateOnly,
  splitActiveAppointments,
  normalizePhone,
  normalizeText,
  countAppointmentWarnings,
  countBlockedClientsFromAppointments,
  buildServiceLookup,
  getServicePriceForBarber,
  splitServiceList,
  filterAppointmentsForIdentity,
  filterBarbersForIdentity,
  isStaffIdentity,
  matchesIdentityBarber,
  isCompletedStatus,
  canonicalizeKey,
  getWarningCutoffDate,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
  botRuntime,
  buildUserInsightsMap,
});
const {
  buildRevenueSummary,
  buildUserProfile,
  toggleUserBlock,
} = createAdminInsightsService({
  prisma,
  getBarbers,
  getServiceCatalog,
  readBlockedUsers,
  writeBlockedUsers,
  requestRealtimePush: (...args) => requestRealtimePush(...args),
  parseDateFilter,
  getDefaultRevenueRange,
  formatDateOnly,
  normalizeText,
  buildBarberNameLookup,
  buildServiceLookup,
  getServicePriceForBarber,
  splitServiceList,
  isCompletedStatus,
  canonicalizeKey,
  mapAppointment,
  countAppointmentWarnings,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
  buildHomeAppPayload,
  buildUserInsightsMap,
});
const {
  attachClient: attachRealtimeClient,
  runPush: runRealtimePush,
  requestPush: requestRealtimePush,
  ensureLoop: ensureRealtimeLoop,
  stopLoop: stopRealtimeLoop,
  shutdownClients: shutdownRealtimeClients,
  hasLoop: hasRealtimeLoop,
} = createRealtimeService({
  createHash,
  buildPayload: buildRealtimeAppointmentsPayload,
  pollIntervalMs: REALTIME_POLL_INTERVAL_MS,
  keepAliveMs: REALTIME_KEEPALIVE_MS,
  randomUUID,
});
const stopHttpServer = () =>
  new Promise((resolve) => {
    if (!httpServer) return resolve();
    httpServer.close((error) => {
      if (error) {
        console.error("HTTP server close error:", error);
      }
      httpServer = null;
      resolve();
    });
    setTimeout(() => resolve(), 4000);
  });
const performSystemUpdate = async () => {
  if (updateInProgress) {
    throw new Error("System update is already running");
  }
  updateInProgress = true;
  const realtimeWasRunning = hasRealtimeLoop();
  let prismaDisconnected = false;
  try {
    console.log("[update] performSystemUpdate: stopping services...");
    stopRealtimeLoop();
    shutdownRealtimeClients();
    await stopBotProcess();
    try {
      await prisma.$disconnect();
      prismaDisconnected = true;
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (disconnectError) {
      console.warn(
        "Failed to disconnect Prisma before update:",
        disconnectError?.message || disconnectError,
      );
    }
    console.log("[update] performSystemUpdate: applying update...");
    const result = await applyUpdate();
    console.log("[update] performSystemUpdate: update applied");
    return result;
  } catch (error) {
    if (!restartScheduled) {
      if (prismaDisconnected) {
        try {
          await prisma.$connect();
          prismaDisconnected = false;
        } catch (reconnectError) {
          console.error(
            "Failed to reconnect Prisma after update error:",
            reconnectError?.message || reconnectError,
          );
        }
      }
      if (realtimeWasRunning) {
        ensureRealtimeLoop();
      }
      try {
        await ensureBotProcessState();
      } catch (cleanupError) {
        console.error(
          "Failed to restore bot process state after update error:",
          cleanupError?.message || cleanupError,
        );
      }
    }
    throw error;
  } finally {
    if (prismaDisconnected && !restartScheduled) {
      try {
        await prisma.$connect();
      } catch (reconnectError) {
        console.error(
          "Failed to reconnect Prisma after update:",
          reconnectError?.message || reconnectError,
        );
      }
    }
    updateInProgress = false;
  }
};
const {
  buildPostRestartHealthUrl,
  appendUpdateAlert,
  waitForPostRestartHealth,
} = createUpdateMonitorService({
  fs,
  path,
  os,
  runtimeFetch,
  config: {
    port: PORT,
    healthcheckPath: HEALTHCHECK_PATH,
    postRestartHealthcheckEnabled: POST_RESTART_HEALTHCHECK_ENABLED,
    postRestartHealthcheckHost: POST_RESTART_HEALTHCHECK_HOST,
    postRestartHealthcheckPort: process.env.POST_RESTART_HEALTHCHECK_PORT || PORT,
    postRestartHealthcheckTimeoutMs: POST_RESTART_HEALTHCHECK_TIMEOUT_MS,
    postRestartHealthcheckIntervalMs: POST_RESTART_HEALTHCHECK_INTERVAL_MS,
    postRestartHealthcheckUrl: POST_RESTART_HEALTHCHECK_URL,
    updateAlertLog: UPDATE_ALERT_LOG,
  },
});
const scheduleSelfRestart = (delayMs = 500) => {
  if (restartScheduled) return;
  restartScheduled = true;
  updateInProgress = true;
  const restartStrategy = getRestartStrategy();
  const { command, args } = restartCommand();
  console.log(
    `[update] Scheduling self-restart in ${delayMs}ms (strategy: ${restartStrategy}) with: ${command} ${args.join(
      " ",
    )}`,
  );
  setTimeout(async () => {
    let relaunched = false;
    try {
      stopAppointmentReminderLoop();
      stopRealtimeLoop();
      shutdownRealtimeClients();
      await stopBotProcess();
      await stopHttpServer();
      await prisma.$disconnect();
    } catch (error) {
      console.error("Shutdown for restart failed:", error);
    }
    if (restartStrategy === "exit") {
      console.log(
        "[update] Restart strategy is exit: terminating process and waiting for supervisor restart.",
      );
      process.exit(0);
      return;
    }
    try {
      const child = spawn(command, args, {
        cwd: __dirname,
        env: process.env,
        detached: false,
        windowsHide: false,
        stdio: "inherit",
      });
      child.on("error", (spawnError) => {
        console.error("Failed to relaunch application:", spawnError);
      });
      relaunched = true;
      console.log("[update] Relaunch spawned in current console");
    } catch (error) {
      console.error("Failed to relaunch application:", error);
    }
    if (!relaunched) {
      console.error(
        "[update] Relaunch did not start; keeping current process alive.",
      );
      await appendUpdateAlert("Не удалось поднять новый процесс после обновления.", {
        strategy: restartStrategy,
      });
      restartScheduled = false;
      updateInProgress = false;
      ensureRealtimeLoop();
      await ensureBotProcessState();
      return;
    }
    const healthResult = await waitForPostRestartHealth();
    if (healthResult.ok) {
      if (!healthResult.skipped) {
        console.log(
          `[update] Post-restart health check passed in ${healthResult.elapsedMs}ms (${healthResult.url})`,
        );
      }
    } else {
      const details = {
        strategy: restartStrategy,
        url: healthResult.url,
        error: healthResult.error,
        elapsedMs: healthResult.elapsedMs,
      };
      console.error("[update] Post-restart health check failed:", details);
      await appendUpdateAlert("Post-restart health check failed", details);
    }
    console.log("[update] Exiting current process after relaunch spawn.");
    process.exit(0);
  }, delayMs);
};
const {
  sendTelegramMessage,
  notifyBarberAboutNewAppointment,
  startAppointmentReminderLoop,
  stopAppointmentReminderLoop,
} = createNotificationReminderService({
  normalizeText,
  readBotToken,
  runtimeFetch,
  prisma,
  formatDateOnly,
  parseDateTime,
  parseTimeRangeParts,
  parseZonedDateTime,
  listUsersWithHaircutReminderState,
  markUserHaircutReminderSent,
  getUserBookingSummaryByTelegram,
  getBotSettings,
  appointmentRetentionDays: APPOINTMENT_RETENTION_DAYS,
  appointmentReminderIntervalMs: APPOINTMENT_REMINDER_INTERVAL_MS,
  statusActive: STATUS_ACTIVE,
  logger: console,
});
app.get("/api/login/options", handleLoginOptions);
app.post("/api/login", handleLogin);
app.get("/api/auth/me", authenticateToken, (req, res) => {
  const identity = resolveUserIdentity(req.user || req.identity || {});
  res.json({
    authenticated: true,
    username: identity.username || null,
    displayName: identity.barberName || identity.username || null,
    barberId: identity.barberId || null,
    role: identity.role || null,
    barberName: identity.barberName || null,
  });
});
registerHomeRoutes({
  app,
  authenticateHomeToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  hashHomePassword,
  verifyHomePassword,
  findHomeUserByPhone,
  findHomeUserByTelegramId,
  findHomeUserById,
  shouldHydrateUserNameFromHome,
  HOME_USER_SELECT,
  HOME_PROFILE_SELECT,
  toPublicHomeUser,
  toPublicHomeProfile,
  buildHomeIdentity,
  signHomeSessionToken,
  buildLimitBlockedMessage,
  getUserMeta,
  updateUserMeta,
  applyReferralCode,
  buildReferralPayload,
  resolveBsTransferRecipient,
  transferBsBalance,
  buildHomeAppPayload,
  TELEGRAM_BOT_USERNAME,
  markExpiredTelegramAuthRequests,
  createTelegramAuthRequest,
  getTelegramAuthRequestById,
  updateTelegramAuthRequestById,
  deleteTelegramAuthRequestById,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_FLOW_PROFILE_LINK,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
  toTelegramIdNumber,
  resolveHomeAssetPath,
  getServiceCatalog,
  resolveHomeBookingUser,
  getHomeBookingSettings,
  appointmentService,
  getBarbers,
  buildDateWindow,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  notifyBarberAboutNewAppointment,
  requestRealtimePush,
  parseDateTime,
});
registerBotInternalRoutes({
  app,
  authenticateBotInternal,
  normalizeText,
  normalizePhone,
  prisma,
  getBotSettings,
  getBarbers,
  getServiceCatalog,
  getUserBookingSummaryByTelegram,
  registerOrUpdateBotUser,
  updateBotUserNameByTelegram,
  updateBotUserPhoneByTelegram,
  processBotInternalTelegramAuthStart,
  processBotInternalTelegramAuthPhone,
  listBotAvailabilityDates,
  listBotAvailabilityTimes,
  STATUS_ACTIVE,
  STATUS_CANCELLED,
  getHomeBookingSettings,
  randomUUID,
  appointmentService,
  notifyBarberAboutNewAppointment,
  requestRealtimePush,
  parseDateTime,
});
app.use("/api", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const headerToken = authHeader && authHeader.split(" ")[1];
  const queryToken = typeof req.query?.token === "string" ? req.query.token : "";
  const token = headerToken || queryToken;
  if (token) {
    try {
      const { payload } = verifyTokenGracefully(token);
      const identity = resolveUserIdentity(payload || {});
      if (isCreatorIdentity(identity) || isOwnerIdentity(identity)) {
        req.identity = identity;
        req.user = identity;
        return next();
      }
    } catch (error) {
      console.warn("License bypass token parse failed:", error.message);
    }
  }
  return licenseMiddleware(req, res, next);
});

registerOwnerSystemRoutes({
  app,
  authenticateToken,
  isOwnerRequest,
  ensureLicenseValid,
  getLicenseStatus,
  getBotSettings,
  readBotToken,
  serializeBotRuntime,
  ensureBotSettingsRecord,
  prisma,
  startBotProcess,
  stopBotProcess,
  ensureBotProcessState,
  normalizeText,
  writeBotToken,
  botRuntime,
  checkForUpdates,
  getUpdateInProgress: () => updateInProgress,
  performSystemUpdate,
  scheduleSelfRestart,
  appendUpdateAlert,
  isDatabaseCorruptionError,
  buildDatabaseCorruptionMessage,
  getRestartScheduled: () => restartScheduled,
  createBackup,
  listBackups,
  restoreBackup,
  path,
  BACKUP_DIR,
  fs,
  getSiteSettings,
  updateSiteSettings,
});
app.get("/api/dashboard/overview", authenticateToken, async (req, res) => {
  try {
    const snapshot = await buildDashboardSnapshot(req.identity);
    res.json(snapshot);
  } catch (error) {
    console.error("Dashboard snapshot error:", error);
    res
      .status(500)
      .json({ error: "Не удалось загрузить данные панели." });
  }
});
registerServiceCatalogRoutes({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  isOwnerRequest,
  isStaffIdentity,
  normalizeText,
  getServiceCatalog,
  getBarbers,
  filterBarbersForIdentity,
  filterServicesForIdentity,
});
registerOwnerAssetsRoutes({
  app,
  authenticateToken,
  isOwnerRequest,
  listAvatarImages,
  buildSafeImageFilename,
  IMAGE_DIR,
  decodeBase64Image,
  MAX_AVATAR_FILE_SIZE,
  ensureUniqueImageName,
  fs,
  path,
  CARD_IMAGE_DIR,
  normalizeText,
  getExistingImageFilename,
  listMenuImages,
  MENU_IMAGE_DIR,
  loadBotMenu,
  saveBotMenu,
  prisma,
});
app.get("/api/events/stream", authenticateStream, (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  if (typeof res.flushHeaders === "function") {
    res.flushHeaders();
  } else {
    res.writeHead(200);
  }
  res.write("retry: 5000\n\n");
  attachRealtimeClient({ req, res });
});
registerAdminCrudRoutes({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  tableToModelMap,
  TABLE_ORDERING,
  STAFF_READ_TABLES,
  STAFF_WRITE_TABLES,
  STAFF_DELETE_TABLES,
  isStaffIdentity,
  getIdentityBarberName,
  matchesIdentityBarber,
  filterBarbersForIdentity,
  filterAppointmentsForIdentity,
  mapAppointment,
  getBarbers,
  propagateBarberRename,
  coercePayload,
  normalizeAppointmentStatus,
  appointmentService,
  respondWithAppointmentDomainError,
  requestRealtimePush,
  respondWithLegacyCrudBlock,
  buildUserInsightsMap,
  adjustUserBsBalance,
});
app.get("/api/options/appointments", authenticateToken, async (req, res) => {
  try {
    const [services, barbers] = await Promise.all([
      getServiceCatalog(false, req.identity),
      getBarbers({ includeInactive: false }),
    ]);
    res.json({
      services: services.map((svc) => svc.name),
      barbers: filterBarbersForIdentity(barbers, req.identity).map(
        (barber) => barber.name,
      ),
      statuses: BOT_SUPPORTED_STATUS_OPTIONS,
    });
  } catch (error) {
    console.error("Options fetch error:", error);
    res
      .status(500)
      .json({ error: "Не удалось получить справочники записи." });
  }
});
app.get("/api/revenue/summary", authenticateToken, async (req, res) => {
  const identity = resolveRequestIdentity(req);
  const isOwner = hasOwnerAccess(identity);
  const isStaff = isStaffIdentity(identity);
  const normalizedIdentityBarberId = identity?.barberId
    ? normalizeText(identity.barberId)
    : null;
  let requestedBarberId = normalizeText(req.query.barberId);
  if (isStaff) {
    if (!normalizedIdentityBarberId) {
      return res
        .status(403)
        .json({ error: "У сотрудника не указан барбер в профиле." });
    }
    if (requestedBarberId && requestedBarberId !== normalizedIdentityBarberId) {
      return res.status(403).json({ error: "Недостаточно прав для просмотра выручки." });
    }
    requestedBarberId = normalizedIdentityBarberId;
  } else if (!isOwner) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для просмотра выручки." });
  }
  try {
    const summary = await buildRevenueSummary({
      requestedBarberId,
      start: req.query.start,
      end: req.query.end,
    });
    const { targetBarber } = summary;
    if (isStaff && !targetBarber) {
      return res.status(404).json({ error: "Барбер не найден." });
    }
    res.json(summary);
  } catch (error) {
    console.error("Revenue summary error:", error);
    res.status(500).json({
      error: "Не удалось получить сводку выручки.",
      details: error.message,
    });
  }
});
app.get("/api/user-profile/:name", authenticateToken, async (req, res) => {
  try {
    const profile = await buildUserProfile(req.params.name);
    if (!profile)
      return res.status(404).json({ error: "Пользователь не найден." });
    res.json(profile);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res
      .status(500)
      .json({ error: "Не удалось загрузить профиль пользователя." });
  }
});
app.post("/api/users/:id/block", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав: требуется владелец приложения." });
  }
  const { id } = req.params;
  const shouldBlock = req.body?.blocked !== false;
  try {
    const result = await toggleUserBlock({ id, shouldBlock });
    if (!result) {
      return res.status(404).json({ error: "Пользователь не найден." });
    }
    return res.json(result);
  } catch (error) {
    console.error("Block toggle error:", error);
    return res
      .status(500)
      .json({ error: "Не удалось изменить статус блокировки.", details: error.message });
  }
});
const {
  installBackupCron,
  registerShutdownHandlers,
  bootstrap,
} = createServerLifecycleService({
  cron,
  cronExpression: BACKUP_CRON_EXPRESSION,
  cronTimezone: BACKUP_CRON_TIMEZONE,
  createBackup,
  listBackups,
  path,
  backupDir: BACKUP_DIR,
  fs,
  backupRetentionDays: BACKUP_RETENTION_DAYS,
  stopAppointmentReminderLoop,
  stopRealtimeLoop,
  shutdownRealtimeClients,
  stopBotProcess,
  stopHttpServer,
  prisma,
  processObj: process,
  ensureUsersHomeAuthColumns,
  ensureTelegramAuthRequestsTable,
  markExpiredTelegramAuthRequests,
  ensureLicenseValid,
  startLicenseWatcher,
  migrateLegacyHomeUsersToUsers,
  ensureBootstrapData,
  normalizeStoredAppointmentStatuses,
  seedServicesFromCost,
  ensureBotProcessState,
  startAppointmentReminderLoop,
  runRealtimePush,
  ensureRealtimeLoop,
  app,
  port: PORT,
  setHttpServer: (server) => {
    httpServer = server;
  },
});
installBackupCron();
registerShutdownHandlers();
bootstrap();
