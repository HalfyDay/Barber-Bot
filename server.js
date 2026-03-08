require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const path = require("path");
const { randomUUID, createHash, randomBytes, scryptSync, timingSafeEqual } = require("crypto");
const jwt = require("jsonwebtoken");
const cron = require("node-cron");
const fs = require("fs-extra");
const SqliteDatabase = require("better-sqlite3");
const { spawn } = require("child_process");
const os = require("os");
const {
  ensureLicenseValid,
  licenseMiddleware,
  getLicenseStatus,
  startLicenseWatcher,
} = require("./services/licenseGuard");
const { checkForUpdates, applyUpdate } = require("./services/updateManager");
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
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "change-me-secret";
const TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";
const HOME_JWT_SECRET = process.env.HOME_JWT_SECRET || `${JWT_SECRET}:home`;
const HOME_TOKEN_EXPIRES_IN = process.env.HOME_JWT_EXPIRES_IN || "30d";
const TOKEN_REFRESH_THRESHOLD_MS =
  Number(process.env.JWT_REFRESH_THRESHOLD_MS) || 3 * 24 * 60 * 60 * 1000;
const HOME_TOKEN_REFRESH_THRESHOLD_MS =
  Number(process.env.HOME_JWT_REFRESH_THRESHOLD_MS) || 3 * 24 * 60 * 60 * 1000;
const WARNING_LOOKBACK_DAYS =
  Number(process.env.WARNING_LOOKBACK_DAYS || 90) || 90;
const WARNING_BLOCK_THRESHOLD =
  Number(process.env.WARNING_BLOCK_THRESHOLD || 3) || 3;
const BACKUP_DIR = path.join(__dirname, "backups");
const DB_PATH = path.join(__dirname, "prisma", "dev.db");
const LEGACY_HOME_USERS_DB_PATH =
  process.env.HOME_USERS_DB_PATH || path.join(__dirname, "data", "home-users.db");
const BACKUP_RETENTION_DAYS = 30;
const BACKUP_CRON_EXPRESSION =
  (process.env.BACKUP_CRON_EXPRESSION || "0 3 * * *").toString().trim() ||
  "0 3 * * *";
const BACKUP_CRON_TIMEZONE = (process.env.BACKUP_CRON_TIMEZONE || process.env.TZ || "")
  .toString()
  .trim();
const CLIENT_ERROR_LOG = path.join(__dirname, "data", "client-error.log");
const UPDATE_ALERT_LOG = path.join(__dirname, "data", "update-alert.log");
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
  "РўРµРєСЃС‚ РІ Р“Р»Р°РІРЅРѕРј РјРµРЅСЋ";
const DEFAULT_ABOUT_TEXT =
  "РўРµРєСЃС‚ РІ Р±Р»РѕРєРµ В«Рћ РЅР°СЃВ»";
const IMAGE_DIR = path.join(__dirname, "Image");
const CARD_IMAGE_DIR = path.join(IMAGE_DIR, "tgbot");
const MENU_IMAGE_DIR = path.join(IMAGE_DIR, "menu_bots");
const MAX_AVATAR_FILE_SIZE = Number(
  process.env.MAX_AVATAR_FILE_SIZE || 5 * 1024 * 1024,
);
const BARBER_ALIAS_FILE = path.join(__dirname, "data", "barber-aliases.json");
const BOT_SUPPORTED_STATUS_OPTIONS = [
  "РђРєС‚РёРІРЅР°СЏ",
  "Р’С‹РїРѕР»РЅРµРЅР°",
  "РћС‚РјРµРЅР°",
  "РќРµСЏРІРєР°",
];
const SUPPORTED_APPOINTMENT_STATUSES = [...BOT_SUPPORTED_STATUS_OPTIONS];
const COMPLETED_STATUS_TOKENS = ["РІС‹РїРѕР»РЅ", "Р·Р°РІРµСЂС€", "done", "completed", "РёСЃРїРѕР»РЅ", "РіРѕС‚РѕРІ"];
const RESERVED_COST_FIELDS = new Set([
  "id",
  "Id",
  "ID",
  "Uslugi",
  "Dlitelnost",
]);
const CONFIRMED_STATUS_TOKENS = [
  "РїРѕРґС‚РІРµСЂР¶Рґ",
  "РІС‹РїРѕР»РЅ",
  "Р·Р°РІРµСЂС€",
  "done",
  "completed",
];
const ACTIVE_STATUS_TOKENS = ["active", "Р°РєС‚РёРІ", "РІ СЂР°Р±РѕС‚Рµ"];
const BLOCKED_STATUS_TOKENS = ["block", "Р·Р°Р±Р»РѕРє", "РѕС‚РјРµРЅ", "РЅРµСЏРІ", "noshow"];
const SLOT_BLOCK_TOKENS = ["block", "Р±Р»РѕРє"];
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
let botProcess = null;
const botRuntime = {
  running: false,
  since: null,
  lastExit: null,
  lastError: null,
};
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
app.use("/login", express.static(path.join(__dirname, "login")));
app.use("/booking", express.static(path.join(__dirname, "home")));
app.use("/home", express.static(path.join(__dirname, "home-page")));
app.use("/referral", express.static(path.join(__dirname, "referral")));
app.use("/shop", express.static(path.join(__dirname, "shop")));
app.use("/profile", express.static(path.join(__dirname, "profile")));
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
      .json({ error: "РЎРёСЃС‚РµРјР° РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ, РїРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ." });
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
const BOT_MENU_BUTTON_TYPES = Object.freeze([
  { id: "screen", label: "РџРµСЂРµС…РѕРґ РЅР° СЌРєСЂР°РЅ", description: "РћС‚РєСЂС‹РІР°РµС‚ РґСЂСѓРіРѕР№ СЌРєСЂР°РЅ РјРµРЅСЋ" },
  { id: "staff", label: "Р’С‹Р±РѕСЂ СЃРѕС‚СЂСѓРґРЅРёРєР°", description: "РџРѕРєР°Р·С‹РІР°РµС‚ СЃРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ" },
  { id: "service", label: "Р’С‹Р±РѕСЂ СѓСЃР»СѓРіРё", description: "РџРѕРєР°Р·С‹РІР°РµС‚ СѓСЃР»СѓРіРё" },
  { id: "date", label: "Р’С‹Р±РѕСЂ РґР°С‚С‹", description: "Р—Р°РїСЂР°С€РёРІР°РµС‚ РґР°С‚Сѓ" },
  { id: "time", label: "Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё", description: "Р—Р°РїСЂР°С€РёРІР°РµС‚ РІСЂРµРјСЏ" },
  { id: "description", label: "РћРїРёСЃР°РЅРёРµ", description: "РџРѕРєР°Р·С‹РІР°РµС‚ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ Р±Р»РѕРє" },
  { id: "profile", label: "РџСЂРѕС„РёР»СЊ", description: "РћС‚РєСЂС‹РІР°РµС‚ РїСЂРѕС„РёР»СЊ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ" },
  { id: "userAppointments", label: "РњРѕРё Р·Р°РїРёСЃРё", description: "РџРѕРєР°Р·С‹РІР°РµС‚ Р·Р°РїРёСЃРё РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ" },
  { id: "custom", label: "РЎРІРѕСЏ РєРЅРѕРїРєР°", description: "РџСЂРѕРёР·РІРѕР»СЊРЅРѕРµ РґРµР№СЃС‚РІРёРµ/РёРЅС‚РµРЅС‚" },
]);
const BOT_MENU_TYPE_SET = new Set(BOT_MENU_BUTTON_TYPES.map((item) => item.id));
const buildDefaultBotMenu = () => ({
  version: 1,
  updatedAt: new Date().toISOString(),
  screens: [
    {
      id: "main",
      title: "Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ",
      message: "Р”РѕР±СЂРѕ РїРѕР¶Р°Р»РѕРІР°С‚СЊ! Р’С‹Р±РµСЂРёС‚Рµ РґРµР№СЃС‚РІРёРµ.",
      imageUrl: "",
      buttons: [
        { id: "book", label: "вњ‚пёЏ Р—Р°РїРёСЃР°С‚СЊСЃСЏ", type: "service", targetScreenId: "services", row: 0, order: 0 },
        { id: "myAppointments", label: "рџ“… РњРѕРё Р·Р°РїРёСЃРё", type: "userAppointments", targetScreenId: "appointments", row: 0, order: 1 },
        { id: "profile", label: "рџ‘¤ РџСЂРѕС„РёР»СЊ", type: "profile", targetScreenId: "profile", row: 1, order: 0 },
        { id: "about", label: "в„№пёЏ Рћ РЅР°СЃ", type: "description", targetScreenId: "about", row: 1, order: 1 },
      ],
    },
    {
      id: "services",
      title: "Р’С‹Р±РѕСЂ СѓСЃР»СѓРіРё",
      message: "Р’С‹Р±РµСЂРёС‚Рµ СѓСЃР»СѓРіСѓ РґР»СЏ Р·Р°РїРёСЃРё.",
      imageUrl: "",
      buttons: [
        { id: "chooseService", label: "Р’С‹Р±РѕСЂ СѓСЃР»СѓРіРё", type: "service", targetScreenId: null, row: 0, order: 0 },
        { id: "chooseBarber", label: "Р’С‹Р±РѕСЂ СЃРѕС‚СЂСѓРґРЅРёРєР°", type: "staff", targetScreenId: "staff", row: 0, order: 1 },
        { id: "chooseDate", label: "Р’С‹Р±РѕСЂ РґР°С‚С‹", type: "date", targetScreenId: "dates", row: 1, order: 0 },
        { id: "chooseTime", label: "Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё", type: "time", targetScreenId: "time", row: 1, order: 1 },
        { id: "backToMainFromServices", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 2, order: 0 },
      ],
    },
    {
      id: "staff",
      title: "РЎРѕС‚СЂСѓРґРЅРёРєРё",
      message: "РљРѕРіРѕ Р·Р°РїРёСЃС‹РІР°РµРј?",
      imageUrl: "",
      buttons: [
        { id: "staffDate", label: "Р’С‹Р±РѕСЂ РґР°С‚С‹", type: "date", targetScreenId: "dates", row: 0, order: 0 },
        { id: "backToServices", label: "РќР°Р·Р°Рґ Рє СѓСЃР»СѓРіР°Рј", type: "screen", targetScreenId: "services", row: 1, order: 0 },
        { id: "backToMainFromStaff", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 1, order: 1 },
      ],
    },
    {
      id: "dates",
      title: "Р’С‹Р±РѕСЂ РґР°С‚С‹",
      message: "Р’С‹Р±РµСЂРёС‚Рµ РґР°С‚Сѓ Р·Р°РїРёСЃРё.",
      imageUrl: "",
      buttons: [
        { id: "dateTime", label: "Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё", type: "time", targetScreenId: "time", row: 0, order: 0 },
        { id: "backToServicesFromDates", label: "РќР°Р·Р°Рґ Рє СѓСЃР»СѓРіР°Рј", type: "screen", targetScreenId: "services", row: 1, order: 0 },
      ],
    },
    {
      id: "time",
      title: "Р’СЂРµРјСЏ",
      message: "Р’С‹Р±РµСЂРёС‚Рµ РІСЂРµРјСЏ Рё РїРѕРґС‚РІРµСЂРґРёС‚Рµ.",
      imageUrl: "",
      buttons: [
        { id: "confirmBooking", label: "РџРѕРґС‚РІРµСЂРґРёС‚СЊ Р·Р°РїРёСЃСЊ", type: "custom", targetScreenId: null, row: 0, order: 0 },
        { id: "backToDates", label: "РќР°Р·Р°Рґ Рє РґР°С‚Рµ", type: "screen", targetScreenId: "dates", row: 0, order: 1 },
        { id: "backToMainFromTime", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 1, order: 0 },
      ],
    },
    {
      id: "about",
      title: "Рћ РЅР°СЃ",
      message: "РљРѕСЂРѕС‚РєРѕРµ РѕРїРёСЃР°РЅРёРµ СЃР°Р»РѕРЅР°.",
      imageUrl: "",
      buttons: [
        { id: "backToMainFromAbout", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 0, order: 0 },
      ],
    },
    {
      id: "profile",
      title: "РџСЂРѕС„РёР»СЊ",
      message: "Р’Р°С€Рё РєРѕРЅС‚Р°РєС‚С‹ Рё РёР·Р±СЂР°РЅРЅС‹Р№ Р±Р°СЂР±РµСЂ.",
      imageUrl: "",
      buttons: [
        { id: "showAppointmentsFromProfile", label: "рџ“… РњРѕРё Р·Р°РїРёСЃРё", type: "userAppointments", targetScreenId: "appointments", row: 0, order: 0 },
        { id: "backToMainFromProfile", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 1, order: 0 },
      ],
    },
    {
      id: "appointments",
      title: "РњРѕРё Р·Р°РїРёСЃРё",
      message: "РЎРїРёСЃРѕРє РІР°С€РёС… Р·Р°РїРёСЃРµР№.",
      imageUrl: "",
      buttons: [
        { id: "backToMainFromAppointments", label: "рџЏ  Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", type: "screen", targetScreenId: "main", row: 0, order: 0 },
      ],
    },
  ],
});
const sanitizeBotMenuButton = (button, index = 0, screenId = "screen") => {
  const fallbackLabel = `РљРЅРѕРїРєР° ${index + 1}`;
  const id =
    normalizeText(button?.id) ||
    `btn_${canonicalizeKey(screenId) || "screen"}_${index + 1}`;
  const typeRaw = normalizeText(button?.type || "screen");
  const type = BOT_MENU_TYPE_SET.has(typeRaw) ? typeRaw : "screen";
  const label =
    normalizeText(button?.label || button?.text || fallbackLabel) ||
    fallbackLabel;
  const targetScreenId = normalizeText(
    button?.targetScreenId || button?.target || "",
  );
  const payload =
    button?.payload !== undefined && button?.payload !== null
      ? String(button.payload)
      : "";
  const row =
    Number.isFinite(button?.row) && button.row >= 0
      ? Number(button.row)
      : Math.floor(index / 2);
  const order =
    Number.isFinite(button?.order) && button.order >= 0
      ? Number(button.order)
      : index;
  return {
    id,
    type,
    label,
    targetScreenId: targetScreenId || null,
    payload,
    row,
    order,
  };
};
const sanitizeBotMenuScreen = (screen, index = 0) => {
  if (!screen || typeof screen !== "object") return null;
  const id = normalizeText(screen.id) || `screen_${index + 1}`;
  const title =
    normalizeText(screen.title || screen.name || screen.caption) ||
    `Р­РєСЂР°РЅ ${index + 1}`;
  const message = screen.message ?? screen.text ?? "";
  const imageUrl = normalizeText(screen.imageUrl || screen.image || "");
  const buttons = Array.isArray(screen.buttons)
    ? screen.buttons.map((btn, btnIndex) =>
        sanitizeBotMenuButton(btn, btnIndex, id),
      )
    : [];
  return {
    id,
    title,
    message,
    imageUrl,
    buttons,
  };
};
const sanitizeBotMenuPayload = (payload, { stampUpdate = false } = {}) => {
  const base = buildDefaultBotMenu();
  const rawScreens =
    Array.isArray(payload?.screens) && payload.screens.length
      ? payload.screens
      : base.screens;
  const screens = rawScreens
    .map((screen, index) => sanitizeBotMenuScreen(screen, index))
    .filter(Boolean);
  const uniqueScreens = [];
  const seen = new Set();
  for (const screen of screens) {
    if (seen.has(screen.id)) continue;
    seen.add(screen.id);
    uniqueScreens.push(screen);
  }
  const version = Number(payload?.version) || 1;
  const normalized = {
    version,
    updatedAt: stampUpdate
      ? new Date().toISOString()
      : payload?.updatedAt || base.updatedAt,
    screens: uniqueScreens,
  };
  return { ...normalized, buttonTypes: BOT_MENU_BUTTON_TYPES };
};
const loadBotMenu = async () => {
  await fs.ensureDir(path.dirname(BOT_MENU_PATH));
  try {
    if (!(await fs.pathExists(BOT_MENU_PATH))) {
      const defaults = buildDefaultBotMenu();
      await fs.writeJson(BOT_MENU_PATH, defaults, { spaces: 2 });
      return { ...defaults, buttonTypes: BOT_MENU_BUTTON_TYPES };
    }
    const data = await fs.readJson(BOT_MENU_PATH);
    return sanitizeBotMenuPayload(data);
  } catch (error) {
    console.error("Bot menu load failed, using defaults:", error.message);
    const defaults = buildDefaultBotMenu();
    return { ...defaults, buttonTypes: BOT_MENU_BUTTON_TYPES };
  }
};
const saveBotMenu = async (payload) => {
  const normalized = sanitizeBotMenuPayload(payload, { stampUpdate: true });
  const persistable = {
    version: normalized.version,
    updatedAt: normalized.updatedAt,
    screens: normalized.screens,
  };
  await fs.ensureDir(path.dirname(BOT_MENU_PATH));
  await fs.writeJson(BOT_MENU_PATH, persistable, { spaces: 2 });
  return { ...normalized, buttonTypes: BOT_MENU_BUTTON_TYPES };
};
let barberAliases = new Map();
let barberAliasLookup = new Map();
const loadBarberAliasesFromDisk = () => {
  try {
    const payload = fs.readJsonSync(BARBER_ALIAS_FILE);
    if (payload && typeof payload === "object") {
      barberAliases = new Map(
        Object.entries(payload).map(([barberId, aliases]) => [
          barberId,
          Array.isArray(aliases)
            ? aliases.filter((alias) => canonicalizeKey(alias))
            : [],
        ]),
      );
    }
  } catch {
    barberAliases = new Map();
  }
};
const persistBarberAliases = async () => {
  const serializable = {};
  barberAliases.forEach((aliases, barberId) => {
    if (aliases && aliases.length) {
      serializable[barberId] = aliases;
    }
  });
  await fs.ensureDir(path.dirname(BARBER_ALIAS_FILE));
  await fs.writeJson(BARBER_ALIAS_FILE, serializable, { spaces: 2 });
};
const registerBarberAlias = async (barberId, alias) => {
  const normalized = canonicalizeKey(alias);
  if (!barberId || !normalized) return;
  const existing = barberAliases.get(barberId) || [];
  const hasAlias = existing.some(
    (entry) => canonicalizeKey(entry) === normalized,
  );
  if (hasAlias) {
    barberAliasLookup.set(normalized, barberId);
    return;
  }
  const next = [...existing, alias];
  barberAliases.set(barberId, next);
  barberAliasLookup.set(normalized, barberId);
  await persistBarberAliases();
};
loadBarberAliasesFromDisk();
const STATUS_CANONICAL_MAP = new Map(
  [
    "Р°РєС‚РёРІРЅР°СЏ",
    "Р°РєС‚РёРІ",
    "active",
    "РїРѕРґС‚РІРµСЂР¶РґРµРЅР°",
    "РїРѕРґС‚РІРµСЂР¶РґРµРЅРѕ",
    "РІ СЂР°Р±РѕС‚Рµ",
    "РІ РѕР±СЂР°Р±РѕС‚РєРµ",
    "РЅРѕРІР°СЏ Р·Р°РїРёСЃСЊ",
    "pending",
    "wait",
    "waiting",
    "processing",
  ].map((key) => [key, "РђРєС‚РёРІРЅР°СЏ"]),
);
[
  ["done", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["complete", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["completed", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["finished", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["РІС‹РїРѕР»РЅРµРЅР°", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["Р·Р°РІРµСЂС€РµРЅР°", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["РіРѕС‚РѕРІРѕ", "Р’С‹РїРѕР»РЅРµРЅР°"],
  ["cancel", "РћС‚РјРµРЅР°"],
  ["canceled", "РћС‚РјРµРЅР°"],
  ["cancelled", "РћС‚РјРµРЅР°"],
  ["РѕС‚РјРµРЅР°", "РћС‚РјРµРЅР°"],
  ["РѕС‚РјРµРЅРµРЅРѕ", "РћС‚РјРµРЅР°"],
  ["РѕС‚РјРµРЅРµРЅР°", "РћС‚РјРµРЅР°"],
  ["no show", "РќРµСЏРІРєР°"],
  ["no-show", "РќРµСЏРІРєР°"],
  ["noshow", "РќРµСЏРІРєР°"],
  ["missed", "РќРµСЏРІРєР°"],
  ["РЅРµ РїСЂРёС€С‘Р»", "РќРµСЏРІРєР°"],
  ["РЅРµ РїСЂРёС€РµР»", "РќРµСЏРІРєР°"],
  ["РЅРµСЏРІРєР°", "РќРµСЏРІРєР°"],
].forEach(([key, value]) => {
  STATUS_CANONICAL_MAP.set(key, value);
});
const normalizeAppointmentStatus = (status) => {
  const normalized = canonicalizeKey(status);
  if (!normalized) {
    return BOT_SUPPORTED_STATUS_OPTIONS[0];
  }
  if (STATUS_CANONICAL_MAP.has(normalized)) {
    return STATUS_CANONICAL_MAP.get(normalized);
  }
  const candidate = BOT_SUPPORTED_STATUS_OPTIONS.find(
    (value) => canonicalizeKey(value) === normalized,
  );
  return candidate || BOT_SUPPORTED_STATUS_OPTIONS[0];
};
const normalizeRole = (value) => {
  if (value === ROLE_CREATOR) return ROLE_CREATOR;
  if (value === ROLE_STAFF) return ROLE_STAFF;
  return ROLE_OWNER;
};
const resolveUserIdentity = (payload = {}) => ({
  username: payload.username || payload.login || null,
  role: normalizeRole(payload.role),
  barberId: payload.barberId || payload.id || null,
  barberName: normalizeText(
    payload.barberName || payload.displayName || payload.name || "",
  ),
});
const resolveRequestIdentity = (req) =>
  req?.identity ? req.identity : resolveUserIdentity(req?.user || {});
const isOwnerIdentity = (identity) => identity?.role === ROLE_OWNER;
const isCreatorIdentity = (identity) => identity?.role === ROLE_CREATOR;
const hasOwnerAccess = (identity) =>
  isOwnerIdentity(identity) || isCreatorIdentity(identity);
const isOwnerRequest = (req) => hasOwnerAccess(resolveRequestIdentity(req));
const staffOwnsValue = (identity, value) =>
  identity?.barberName &&
  canonicalizeKey(value) === canonicalizeKey(identity.barberName);
const requireOwner = (req, res, next) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РІС‹РїРѕР»РЅРµРЅРёСЏ РґРµР№СЃС‚РІРёСЏ." });
  }
  return next();
};
const isStaffIdentity = (identity) => identity?.role === ROLE_STAFF;
const getIdentityBarberName = (identity) =>
  normalizeText(identity?.barberName || identity?.username || "");
const getIdentityBarberKey = (identity) =>
  canonicalizeKey(getIdentityBarberName(identity));
const matchesIdentityBarber = (value, identity) => {
  if (!isStaffIdentity(identity)) return true;
  const normalizedValue = canonicalizeKey(value);
  const target = getIdentityBarberKey(identity);
  if (target && normalizedValue && normalizedValue === target) {
    return true;
  }
  if (identity?.barberId && normalizedValue) {
    const resolvedId = resolveBarberIdFromLookup(
      barberAliasLookup,
      normalizedValue,
    );
    if (resolvedId && resolvedId === identity.barberId) {
      return true;
    }
  }
  return false;
};
const filterAppointmentsForIdentity = (rows = [], identity) => {
  if (!isStaffIdentity(identity)) return rows;
  return rows.filter((row) => matchesIdentityBarber(row.Barber, identity));
};
const filterBarbersForIdentity = (barbers = [], identity) => {
  if (!isStaffIdentity(identity)) return barbers;
  if (!identity?.barberId) return [];
  return barbers.filter((barber) => barber.id === identity.barberId);
};
const filterServicesForIdentity = (services = [], identity) => {
  if (!isStaffIdentity(identity) || !identity?.barberId) return services;
  const staffBarberId = identity.barberId;
  return services.map((service) => ({
    ...service,
    prices: { [staffBarberId]: service.prices?.[staffBarberId] ?? null },
  }));
};
const STAFF_READ_TABLES = new Set(["Appointments", "Schedules", "Services"]);
const STAFF_WRITE_TABLES = new Set(["Appointments"]);
const STAFF_DELETE_TABLES = new Set(["Appointments"]);
const buildBarberLookup = (records = []) => {
  const lookup = new Map();
  records.forEach((barber) => {
    [barber.name, barber.login, barber.nickname].forEach((key) => {
      const normalized = canonicalizeKey(key);
      if (normalized && barber.id && !lookup.has(normalized)) {
        lookup.set(normalized, barber.id);
      }
    });
    const aliasList = barberAliases.get(barber.id) || [];
    aliasList.forEach((alias) => {
      const normalizedAlias = canonicalizeKey(alias);
      if (normalizedAlias && barber.id && !lookup.has(normalizedAlias)) {
        lookup.set(normalizedAlias, barber.id);
      }
    });
  });
  return lookup;
};
const resolveBarberIdFromLookup = (lookup, key) => {
  const normalized = canonicalizeKey(key);
  return normalized ? lookup.get(normalized) : null;
};
const resolveSupportedStatus = (status) => {
  const normalized = canonicalizeKey(status);
  if (!normalized) return null;
  return (
    SUPPORTED_APPOINTMENT_STATUSES.find(
      (candidate) => canonicalizeKey(candidate) === normalized,
    ) || null
  );
};
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
]);
const buildSafeImageFilename = (input = "", fallbackExt = ".png") => {
  const normalized = normalizeText(input).replace(/\\/g, "/");
  const candidate = path.basename(normalized) || `avatar-${Date.now()}`;
  const extCandidate = path.extname(candidate);
  const ext = (extCandidate || fallbackExt).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) {
    return null;
  }
  const baseName =
    (extCandidate ? candidate.slice(0, -extCandidate.length) : candidate) || `avatar-${Date.now()}`;
  const safeBase = baseName
    .normalize("NFKD")
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}0-9._-]/gu, "")
    .replace(/-+/g, "-")
    .replace(/^[-_.]+|[-_.]+$/g, "");
  return `${safeBase || `avatar-${Date.now()}`}${ext}`;
};

const getExistingImageFilename = (input = "") => {
  const normalized = normalizeText(input).replace(/\\/g, "/");
  const candidate = path.basename(normalized);
  if (!candidate) return null;
  const ext = path.extname(candidate).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return null;
  return candidate;
};

const decodeBase64Image = (input = "") => {
  const normalized = normalizeText(input);
  const payload = normalized.includes("base64,") ? normalized.split("base64,").pop() : normalized;
  if (!payload) {
    throw new Error("РџСѓСЃС‚С‹Рµ РґР°РЅРЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ.");
  }
  return Buffer.from(payload, "base64");
};

const ensureUniqueImageName = async (filename, targetDir = IMAGE_DIR) => {
  let attempt = 0;
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  let candidate = filename;
  while (await fs.pathExists(path.join(targetDir, candidate))) {
    attempt += 1;
    candidate = `${base}-${attempt}${ext}`;
  }
  return candidate;
};

const listAvatarImages = async () => {
  try {
    if (!(await fs.pathExists(IMAGE_DIR))) return [];
    const entries = await fs.readdir(IMAGE_DIR, { withFileTypes: true });
    const images = entries
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => `/Image/${entry.name.replace(/\\/g, "/")}`);
    return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
  } catch (error) {
    console.error("Avatar scan error:", error);
    return [];
  }
};

const listMenuImages = async () => {
  try {
    if (!(await fs.pathExists(MENU_IMAGE_DIR))) return [];
    const entries = await fs.readdir(MENU_IMAGE_DIR, { withFileTypes: true });
    const images = entries
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => `/Image/menu_bots/${entry.name.replace(/\\/g, "/")}`);
    return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
  } catch (error) {
    console.error("Menu image scan error:", error);
    return [];
  }
};
const isConfirmedStatus = (status) => {
  const lowered = toLower(status);
  return CONFIRMED_STATUS_TOKENS.some((token) => lowered.includes(token));
};
const isActiveStatus = (status) => {
  const lowered = toLower(status);
  return ACTIVE_STATUS_TOKENS.some((token) => lowered.includes(token));
};
const isBlockedStatus = (status) => {
  const lowered = toLower(status);
  return BLOCKED_STATUS_TOKENS.some((token) => lowered.includes(token));
};
const isCompletedStatus = (status) => {
  const lowered = toLower(status);
  return COMPLETED_STATUS_TOKENS.some((token) => lowered.includes(token));
};
const parseDateTime = (dateStr, timeRange) => {
  if (!dateStr) return null;
  const timeStart = normalizeText(timeRange).split("-")[0]?.trim() || "00:00";
  const isoCandidate = `${dateStr}T${timeStart}:00`;
  const parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const formatDateOnly = (dateObj) => {
  if (!(dateObj instanceof Date)) return "";
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const parseDateFilter = (value, fallbackDate) => {
  const normalized = normalizeText(value);
  if (!normalized) return new Date(fallbackDate);
  const parsed = new Date(`${normalized}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return new Date(fallbackDate);
  return parsed;
};
const getDefaultRevenueRange = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now);
  return { start, end };
};
const splitServiceList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return normalizeText(item);
        if (item && typeof item === "object") {
          return normalizeText(item.name || item.title || item.Service || "");
        }
        return "";
      })
      .filter(Boolean);
  }
  const normalized = normalizeText(value);
  if (!normalized) return [];
  if (normalized.startsWith("[") && normalized.endsWith("]")) {
    try {
      const parsed = JSON.parse(normalized);
      if (Array.isArray(parsed)) {
        return splitServiceList(parsed);
      }
    } catch (error) {
      // ignore malformed JSON
    }
  }
  return normalized
    .split(/[,;\n]/)
    .map((item) => normalizeText(item))
    .filter(Boolean);
};
const buildServiceLookup = (services = []) => {
  const map = new Map();
  services.forEach((service) => {
    const key = canonicalizeKey(service.name);
    if (key && !map.has(key)) {
      map.set(key, service);
    }
  });
  return map;
};
const getServicePriceForBarber = (service, barberId) => {
  if (!service || !barberId) return null;
  const prices = service.prices || {};
  const direct = prices[barberId] ?? prices[String(barberId)];
  return direct ?? null;
};
const buildBarberNameLookup = (barbers = []) => {
  const map = new Map();
  barbers.forEach((barber) => {
    [barber.name, barber.login, barber.nickname].forEach((name) => {
      const key = canonicalizeKey(name);
      if (key && barber && !map.has(key)) {
        map.set(key, barber);
      }
    });
  });
  return map;
};
const mapAppointment = (record) => {
  const startDate = parseDateTime(record.Date, record.Time);
  const canonicalStatus = normalizeAppointmentStatus(record.Status);
  return {
    ...record,
    Status: canonicalStatus,
    startDateTime: startDate ? startDate.toISOString() : null,
    sortKey: startDate ? startDate.getTime() : 0,
    isConfirmed: isConfirmedStatus(canonicalStatus),
    isActive: isActiveStatus(canonicalStatus),
    isBlocked: isBlockedStatus(canonicalStatus),
    normalizedPhone: normalizePhone(record.Phone),
  };
};
const getWarningCutoffDate = () => {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - WARNING_LOOKBACK_DAYS);
  return cutoff;
};
const getAppointmentDate = (appt) => {
  if (appt?.startDateTime) {
    const parsed = new Date(appt.startDateTime);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  if (appt?.Date) {
    const parsed = new Date(`${appt.Date}T00:00:00`);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return null;
};
const countAppointmentWarnings = (appointments = [], cutoff = null) => {
  const threshold = cutoff || getWarningCutoffDate();
  return appointments.reduce((total, appt) => {
    if (!appt?.isBlocked) return total;
    const apptDate = getAppointmentDate(appt);
    if (apptDate && apptDate < threshold) return total;
    return total + 1;
  }, 0);
};
const countBlockedClientsFromAppointments = (
  appointments = [],
  manualBlockedSet = new Set(),
) => {
  const cutoff = getWarningCutoffDate();
  const warningTotals = new Map();
  appointments.forEach((appt) => {
    if (!appt) return;
    const key =
      appt.UserID ||
      appt.normalizedPhone ||
      normalizeText(appt.CustomerName || "") ||
      appt.id;
    if (!key) return;
    if (!appt.isBlocked) return;
    const apptDate = getAppointmentDate(appt);
    if (apptDate && apptDate < cutoff) return;
    const prev = warningTotals.get(key) || 0;
    warningTotals.set(key, prev + 1);
  });
  manualBlockedSet.forEach((key) => {
    if (!key) return;
    warningTotals.set(String(key), WARNING_BLOCK_THRESHOLD);
  });
  let blocked = 0;
  warningTotals.forEach((count) => {
    if (count >= WARNING_BLOCK_THRESHOLD) blocked += 1;
  });
  return blocked;
};
const BLOCKLIST_FILE = path.join(__dirname, "data", "blocked-users.json");
const HOME_AUTH_COLUMNS = [
  { name: "LastNameChanged", ddl: 'ALTER TABLE "Users" ADD COLUMN "LastNameChanged" TEXT' },
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
const withTelegramAuthDb = (runner) => {
  let db = null;
  try {
    db = new SqliteDatabase(DB_PATH);
    return runner(db);
  } finally {
    if (db) {
      try {
        db.close();
      } catch {
        // ignore
      }
    }
  }
};
const ensureTelegramAuthRequestsTable = () => {
  try {
    withTelegramAuthDb((db) => {
      db.exec(
        `CREATE TABLE IF NOT EXISTS "${TELEGRAM_AUTH_REQUESTS_TABLE}" (
          id TEXT PRIMARY KEY,
          code TEXT NOT NULL UNIQUE,
          status TEXT NOT NULL,
          flow TEXT NOT NULL DEFAULT '${TELEGRAM_AUTH_FLOW_LOGIN}',
          targetUserId TEXT,
          telegramId TEXT,
          phone TEXT,
          displayName TEXT,
          userId TEXT,
          errorMessage TEXT,
          createdAt TEXT NOT NULL,
          expiresAt TEXT NOT NULL,
          updatedAt TEXT NOT NULL
        )`,
      );
      db.exec(
        `CREATE INDEX IF NOT EXISTS "idx_${TELEGRAM_AUTH_REQUESTS_TABLE}_status_expires"
         ON "${TELEGRAM_AUTH_REQUESTS_TABLE}" (status, expiresAt)`,
      );
      db.exec(
        `CREATE INDEX IF NOT EXISTS "idx_${TELEGRAM_AUTH_REQUESTS_TABLE}_code"
         ON "${TELEGRAM_AUTH_REQUESTS_TABLE}" (code)`,
      );
      const columns = db.prepare(`PRAGMA table_info("${TELEGRAM_AUTH_REQUESTS_TABLE}")`).all();
      const existing = new Set(columns.map((row) => normalizeText(row?.name)));
      if (!existing.has("flow")) {
        db.prepare(
          `ALTER TABLE "${TELEGRAM_AUTH_REQUESTS_TABLE}" ADD COLUMN flow TEXT NOT NULL DEFAULT '${TELEGRAM_AUTH_FLOW_LOGIN}'`,
        ).run();
      }
      if (!existing.has("targetUserId")) {
        db.prepare(
          `ALTER TABLE "${TELEGRAM_AUTH_REQUESTS_TABLE}" ADD COLUMN targetUserId TEXT`,
        ).run();
      }
      db.exec(
        `CREATE INDEX IF NOT EXISTS "idx_${TELEGRAM_AUTH_REQUESTS_TABLE}_flow_target"
         ON "${TELEGRAM_AUTH_REQUESTS_TABLE}" (flow, targetUserId)`,
      );
    });
  } catch (error) {
    console.warn(
      "Telegram auth schema reconcile warning:",
      error?.message || error,
    );
  }
};
const markExpiredTelegramAuthRequests = () => {
  const nowIso = new Date().toISOString();
  const staleBefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  try {
    withTelegramAuthDb((db) => {
      db.prepare(
        `UPDATE "${TELEGRAM_AUTH_REQUESTS_TABLE}"
         SET status = ?, updatedAt = ?
         WHERE status = ? AND expiresAt <= ?`,
      ).run(
        TELEGRAM_AUTH_STATUS_EXPIRED,
        nowIso,
        TELEGRAM_AUTH_STATUS_PENDING,
        nowIso,
      );
      db.prepare(
        `DELETE FROM "${TELEGRAM_AUTH_REQUESTS_TABLE}"
         WHERE status IN (?, ?, ?) AND updatedAt <= ?`,
      ).run(
        TELEGRAM_AUTH_STATUS_COMPLETED,
        TELEGRAM_AUTH_STATUS_FAILED,
        TELEGRAM_AUTH_STATUS_EXPIRED,
        staleBefore,
      );
    });
  } catch (error) {
    console.warn(
      "Telegram auth expiry reconcile warning:",
      error?.message || error,
    );
  }
};
const createTelegramAuthCode = () =>
  String((randomBytes(4).readUInt32BE(0) % 900000) + 100000);
const createTelegramAuthRequest = ({ flow = TELEGRAM_AUTH_FLOW_LOGIN, targetUserId = null } = {}) => {
  const nowIso = new Date().toISOString();
  const expiresAt = new Date(Date.now() + HOME_TELEGRAM_AUTH_TTL_MS).toISOString();
  return withTelegramAuthDb((db) => {
    const insert = db.prepare(
      `INSERT INTO "${TELEGRAM_AUTH_REQUESTS_TABLE}"
        (id, code, status, flow, targetUserId, telegramId, phone, displayName, userId, errorMessage, createdAt, expiresAt, updatedAt)
       VALUES
        (@id, @code, @status, @flow, @targetUserId, NULL, NULL, NULL, NULL, NULL, @createdAt, @expiresAt, @updatedAt)`,
    );
    const maxAttempts = 8;
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const candidate = {
        id: randomUUID(),
        code: createTelegramAuthCode(),
        status: TELEGRAM_AUTH_STATUS_PENDING,
        flow: normalizeText(flow) || TELEGRAM_AUTH_FLOW_LOGIN,
        targetUserId: normalizeText(targetUserId) || null,
        createdAt: nowIso,
        expiresAt,
        updatedAt: nowIso,
      };
      try {
        insert.run(candidate);
        return candidate;
      } catch (error) {
        const isUniqueCodeConflict =
          normalizeText(error?.code) === "SQLITE_CONSTRAINT_UNIQUE" ||
          normalizeText(error?.message).includes("UNIQUE constraint failed");
        if (isUniqueCodeConflict) continue;
        throw error;
      }
    }
    throw new Error("РќРµ СѓРґР°Р»РѕСЃСЊ СЃРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РѕРґРЅРѕСЂР°Р·РѕРІС‹Р№ РєРѕРґ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёРё.");
  });
};
const getTelegramAuthRequestById = (requestId) =>
  withTelegramAuthDb((db) =>
    db
      .prepare(
        `SELECT id, code, status, flow, targetUserId, telegramId, phone, displayName, userId, errorMessage, createdAt, expiresAt, updatedAt
         FROM "${TELEGRAM_AUTH_REQUESTS_TABLE}"
         WHERE id = ? LIMIT 1`,
      )
      .get(requestId),
  );
const updateTelegramAuthRequestById = (requestId, patch = {}) => {
  const fields = [];
  const values = [];
  const assignTextField = (column, rawValue) => {
    if (rawValue === undefined) return;
    fields.push(`${column} = ?`);
    values.push(rawValue == null ? null : String(rawValue));
  };
  assignTextField("status", patch.status);
  assignTextField("flow", patch.flow);
  assignTextField("targetUserId", patch.targetUserId);
  assignTextField("telegramId", patch.telegramId);
  assignTextField("phone", patch.phone);
  assignTextField("displayName", patch.displayName);
  assignTextField("userId", patch.userId);
  assignTextField("errorMessage", patch.errorMessage);
  fields.push("updatedAt = ?");
  values.push(new Date().toISOString());
  if (!fields.length) return;
  withTelegramAuthDb((db) => {
    db.prepare(
      `UPDATE "${TELEGRAM_AUTH_REQUESTS_TABLE}"
       SET ${fields.join(", ")}
       WHERE id = ?`,
    ).run(...values, requestId);
  });
};
const deleteTelegramAuthRequestById = (requestId) =>
  withTelegramAuthDb((db) =>
    db
      .prepare(`DELETE FROM "${TELEGRAM_AUTH_REQUESTS_TABLE}" WHERE id = ?`)
      .run(requestId),
  );
const toTelegramIdNumber = (value) => {
  const text = normalizeText(value);
  if (!text) return null;
  const parsed = Number(text);
  if (!Number.isFinite(parsed)) return null;
  return parsed;
};
const ensureUsersHomeAuthColumns = () => {
  let db = null;
  try {
    db = new SqliteDatabase(DB_PATH);
    const tableExists = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'Users' LIMIT 1",
      )
      .get();
    if (!tableExists) return;
    const columns = db.prepare('PRAGMA table_info("Users")').all();
    const existing = new Set(columns.map((row) => normalizeText(row?.name)));
    const added = [];
    HOME_AUTH_COLUMNS.forEach(({ name, ddl }) => {
      if (existing.has(name)) return;
      db.prepare(ddl).run();
      added.push(name);
    });
    if (added.length) {
      console.log(
        `[db] Added missing Users columns: ${added.join(", ")}`,
      );
    }
  } catch (error) {
    console.warn(
      "Users schema reconcile warning:",
      error?.message || error,
    );
  } finally {
    if (db) {
      try {
        db.close();
      } catch {
        // ignore
      }
    }
  }
};
const readBlockedUsers = async () => {
  try {
    const payload = await fs.readJson(BLOCKLIST_FILE);
    const list = Array.isArray(payload) ? payload : payload?.blocked || [];
    return new Set(list.filter(Boolean).map(String));
  } catch {
    return new Set();
  }
};
const writeBlockedUsers = async (blockedSet) => {
  const list = Array.from(blockedSet);
  await fs.ensureDir(path.dirname(BLOCKLIST_FILE));
  await fs.writeJson(BLOCKLIST_FILE, list, { spaces: 2 });
};
const coercePayload = (tableName, payload) => {
  const numericList = numericFields[tableName] || [];
  const booleanList = booleanFields[tableName] || [];
  numericList.forEach((field) => {
    if (payload[field] === undefined) return;
    if (payload[field] === null || payload[field] === "") {
      payload[field] = null;
      return;
    }
    const parsed = Number(payload[field]);
    payload[field] = Number.isNaN(parsed) ? null : parsed;
  });
  booleanList.forEach((field) => {
    if (payload[field] === undefined) return;
    const value = payload[field];
    payload[field] =
      value === true || value === "true" || value === 1 || value === "1";
  });
  return payload;
};
const signSessionToken = (identity) =>
  jwt.sign(identity, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  });
const verifyTokenGracefully = (token) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return { payload, expired: false };
  } catch (error) {
    if (error?.name !== "TokenExpiredError") throw error;
    const payload = jwt.verify(token, JWT_SECRET, { ignoreExpiration: true });
    return { payload, expired: true };
  }
};
const shouldRefreshToken = (payload, expired) => {
  if (expired) return true;
  if (!payload?.exp) return false;
  const expiresAtMs = payload.exp * 1000;
  return expiresAtMs - Date.now() <= TOKEN_REFRESH_THRESHOLD_MS;
};
const refreshSessionToken = (res, identity) => {
  try {
    const nextToken = signSessionToken(identity);
    res.setHeader("x-session-token", nextToken);
  } catch (error) {
    console.warn("token refresh failed:", error?.message || error);
  }
};
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const { payload, expired } = verifyTokenGracefully(token);
    const identity = resolveUserIdentity(payload || {});
    req.user = identity;
    req.identity = identity;
    if (shouldRefreshToken(payload, expired)) {
      refreshSessionToken(res, identity);
    }
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};
const authenticateStream = (req, res, next) => {
  const directToken = req.query.token;
  const authHeader = req.headers.authorization;
  const headerToken = authHeader && authHeader.split(" ")[1];
  const token = directToken || headerToken;
  if (!token) return res.sendStatus(401);
  try {
    const { payload, expired } = verifyTokenGracefully(token);
    const identity = resolveUserIdentity(payload || {});
    req.user = identity;
    req.identity = identity;
    if (shouldRefreshToken(payload, expired)) {
      refreshSessionToken(res, identity);
    }
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};
const buildHomeIdentity = (payload = {}) => ({
  userId: normalizeText(payload.userId || payload.id),
  phone: normalizePhone(payload.phone || payload.username || ""),
  displayName: normalizeText(payload.displayName || payload.name || payload.phone || ""),
  scope: "home_client",
});
const signHomeSessionToken = (identity) =>
  jwt.sign(
    {
      userId: identity.userId,
      phone: identity.phone,
      displayName: identity.displayName,
      scope: "home_client",
    },
    HOME_JWT_SECRET,
    { expiresIn: HOME_TOKEN_EXPIRES_IN },
  );
const verifyHomeTokenGracefully = (token) => {
  try {
    const payload = jwt.verify(token, HOME_JWT_SECRET);
    return { payload, expired: false };
  } catch (error) {
    if (error?.name !== "TokenExpiredError") throw error;
    const payload = jwt.verify(token, HOME_JWT_SECRET, { ignoreExpiration: true });
    return { payload, expired: true };
  }
};
const shouldRefreshHomeToken = (payload, expired) => {
  if (expired) return true;
  if (!payload?.exp) return false;
  const expiresAtMs = payload.exp * 1000;
  return expiresAtMs - Date.now() <= HOME_TOKEN_REFRESH_THRESHOLD_MS;
};
const refreshHomeSessionToken = (res, identity) => {
  try {
    const nextToken = signHomeSessionToken(identity);
    res.setHeader("x-home-session-token", nextToken);
  } catch (error) {
    console.warn("home token refresh failed:", error?.message || error);
  }
};
const authenticateHomeToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const { payload, expired } = verifyHomeTokenGracefully(token);
    if (payload?.scope !== "home_client") {
      return res.sendStatus(403);
    }
    const identity = buildHomeIdentity(payload || {});
    if (!identity.userId || !identity.phone) {
      return res.sendStatus(403);
    }
    req.homeUser = identity;
    if (shouldRefreshHomeToken(payload, expired)) {
      refreshHomeSessionToken(res, identity);
    }
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};
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
const HOME_PROFILE_SELECT = {
  ...HOME_USER_SELECT,
  LastNameChanged: true,
  homePhoneChangedAt: true,
  homeTelegramChangedAt: true,
  TelegramID: true,
};
const buildHomeAuthError = (message, code) => {
  const error = new Error(message);
  error.code = code;
  return error;
};
const hashHomePassword = (password, saltHex = "") => {
  const safePassword = normalizeText(password);
  if (!safePassword) {
    throw buildHomeAuthError("РџР°СЂРѕР»СЊ РЅРµ РјРѕР¶РµС‚ Р±С‹С‚СЊ РїСѓСЃС‚С‹Рј.", "INVALID_PASSWORD");
  }
  if (safePassword.length < HOME_MIN_PASSWORD_LENGTH) {
    throw buildHomeAuthError(
      `РџР°СЂРѕР»СЊ РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РЅРµ РєРѕСЂРѕС‡Рµ ${HOME_MIN_PASSWORD_LENGTH} СЃРёРјРІРѕР»РѕРІ.`,
      "WEAK_PASSWORD",
    );
  }
  const salt = saltHex ? Buffer.from(saltHex, "hex") : randomBytes(16);
  const hash = scryptSync(safePassword, salt, HOME_PASSWORD_HASH_LENGTH);
  return {
    saltHex: salt.toString("hex"),
    hashHex: hash.toString("hex"),
  };
};
const verifyHomePassword = (password, hashHex, saltHex) => {
  if (!password || !hashHex || !saltHex) return false;
  try {
    const computed = scryptSync(password, Buffer.from(saltHex, "hex"), HOME_PASSWORD_HASH_LENGTH);
    const stored = Buffer.from(hashHex, "hex");
    if (computed.length !== stored.length) return false;
    return timingSafeEqual(computed, stored);
  } catch {
    return false;
  }
};
const toPublicHomeUser = (row = {}) => {
  const phone = normalizePhone(row.Phone || "");
  const displayName = normalizeText(row.Name || row.Phone || "");
  return {
    id: row.id || null,
    phone: phone || null,
    displayName: displayName || phone || null,
    createdAt: row.homeCreatedAt || null,
    lastLoginAt: row.homeLastLoginAt || null,
  };
};
const toDateMs = (value) => {
  const safeValue = normalizeText(value);
  if (!safeValue) return null;
  const parsed = Date.parse(safeValue);
  if (!Number.isFinite(parsed)) return null;
  return parsed;
};
const toIsoFromMs = (ms) => {
  if (!Number.isFinite(ms)) return null;
  try {
    return new Date(ms).toISOString();
  } catch {
    return null;
  }
};
const buildMonthlyLimit = (lastChangedAtRaw) => {
  const lastChangedAt = normalizeText(lastChangedAtRaw) || null;
  const lastMs = toDateMs(lastChangedAt);
  if (!lastMs) {
    return {
      lastChangedAt: null,
      nextAllowedAt: null,
      isLocked: false,
    };
  }
  const nextAllowedMs = lastMs + HOME_PROFILE_CHANGE_COOLDOWN_MS;
  return {
    lastChangedAt,
    nextAllowedAt: toIsoFromMs(nextAllowedMs),
    isLocked: nextAllowedMs > Date.now(),
  };
};
const formatLimitDateRu = (isoDate) => {
  const ms = toDateMs(isoDate);
  if (!ms) return "";
  return new Date(ms).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
const buildLimitBlockedMessage = (fieldLabel, limitState) => {
  const dateLabel = formatLimitDateRu(limitState?.nextAllowedAt);
  if (!dateLabel) {
    return `Поле «${fieldLabel}» можно менять не чаще одного раза в 30 дней.`;
  }
  return `Поле «${fieldLabel}» можно менять не чаще одного раза в 30 дней. Доступно после ${dateLabel}.`;
};
const toPublicHomeProfile = (row = {}) => {
  const user = toPublicHomeUser(row);
  const telegramId = normalizeText(row.TelegramID);
  const telegramLastChangedAt = normalizeText(row.homeTelegramChangedAt) || null;
  return {
    ...user,
    telegramId: telegramId || null,
    telegramLinked: Boolean(telegramId),
    limits: {
      name: buildMonthlyLimit(row.LastNameChanged),
      phone: buildMonthlyLimit(row.homePhoneChangedAt),
      telegram: {
        lastChangedAt: telegramLastChangedAt,
        nextAllowedAt: null,
        isLocked: false,
      },
    },
  };
};
const shouldHydrateUserNameFromHome = (name, phone) => {
  const safeName = normalizeText(name);
  if (!safeName) return true;
  const safePhone = normalizePhone(phone);
  if (!safePhone) return false;
  return canonicalizeKey(safeName) === canonicalizeKey(safePhone);
};
const findHomeUserByTelegramId = async (telegramId) => {
  const safeTelegramId = normalizeText(telegramId);
  if (!safeTelegramId) return null;
  const users = await prisma.users.findMany({
    where: { TelegramID: { not: null } },
    select: {
      ...HOME_USER_SELECT,
      TelegramID: true,
    },
  });
  return (
    users.find((row) => normalizeText(row?.TelegramID) === safeTelegramId) || null
  );
};
const findHomeUserByPhone = async (phone) => {
  const safePhone = normalizePhone(phone);
  if (!safePhone) return null;
  const users = await prisma.users.findMany({
    where: { Phone: { not: null } },
    select: HOME_USER_SELECT,
  });
  const matches = users.filter((row) => normalizePhone(row.Phone || "") === safePhone);
  if (!matches.length) return null;
  return (
    matches.find(
      (row) =>
        row.homeIsActive !== false &&
        normalizeText(row.homePasswordHash) &&
        normalizeText(row.homePasswordSalt),
    ) || matches[0]
  );
};
const findHomeUserById = async (userId) => {
  const safeUserId = normalizeText(userId);
  if (!safeUserId) return null;
  const row = await prisma.users.findUnique({
    where: { id: safeUserId },
    select: HOME_USER_SELECT,
  });
  if (!row) return null;
  if (row.homeIsActive === false) return null;
  if (!normalizeText(row.homePasswordHash) || !normalizeText(row.homePasswordSalt)) {
    return null;
  }
  return row;
};
const readLegacyHomeUsers = () => {
  if (!fs.existsSync(LEGACY_HOME_USERS_DB_PATH)) return [];
  let db = null;
  try {
    db = new SqliteDatabase(LEGACY_HOME_USERS_DB_PATH, {
      readonly: true,
      fileMustExist: true,
    });
    const tableExists = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'home_users' LIMIT 1",
      )
      .get();
    if (!tableExists) return [];
    return db
      .prepare(
        `SELECT id, phone, display_name, password_hash, password_salt, is_active, created_at, updated_at, last_login_at
         FROM home_users`,
      )
      .all();
  } catch (error) {
    console.warn("Legacy home users read warning:", error?.message || error);
    return [];
  } finally {
    if (db) {
      try {
        db.close();
      } catch {
        // ignore
      }
    }
  }
};
const migrateLegacyHomeUsersToUsers = async () => {
  const legacyUsers = readLegacyHomeUsers();
  if (!legacyUsers.length) {
    return { created: 0, updated: 0, total: 0 };
  }
  const users = await prisma.users.findMany({ select: HOME_USER_SELECT });
  const usersById = new Map();
  const usersByPhone = new Map();
  users.forEach((row) => {
    const safeId = normalizeText(row.id);
    if (safeId) usersById.set(safeId, row);
    const safePhone = normalizePhone(row.Phone || "");
    if (safePhone && !usersByPhone.has(safePhone)) {
      usersByPhone.set(safePhone, row);
    }
  });
  let created = 0;
  let updated = 0;
  for (const legacy of legacyUsers) {
    const legacyId = normalizeText(legacy?.id);
    const legacyPhone = normalizePhone(legacy?.phone || "");
    const legacyHash = normalizeText(legacy?.password_hash);
    const legacySalt = normalizeText(legacy?.password_salt);
    if (!legacyId || !legacyPhone || !legacyHash || !legacySalt) continue;
    const legacyDisplayName =
      normalizeText(legacy?.display_name) || legacyPhone;
    const legacyActive = Number(legacy?.is_active) === 1;
    const existing = usersById.get(legacyId) || usersByPhone.get(legacyPhone);
    if (existing) {
      const patch = {};
      if (!normalizePhone(existing.Phone || "")) patch.Phone = legacyPhone;
      if (
        legacyDisplayName &&
        shouldHydrateUserNameFromHome(existing.Name, existing.Phone)
      ) {
        patch.Name = legacyDisplayName;
      }
      if (!normalizeText(existing.homePasswordHash)) {
        patch.homePasswordHash = legacyHash;
      }
      if (!normalizeText(existing.homePasswordSalt)) {
        patch.homePasswordSalt = legacySalt;
      }
      if (!normalizeText(existing.homeCreatedAt) && normalizeText(legacy?.created_at)) {
        patch.homeCreatedAt = normalizeText(legacy.created_at);
      }
      if (
        normalizeText(legacy?.updated_at) &&
        (!normalizeText(existing.homeUpdatedAt) ||
          normalizeText(legacy.updated_at) > normalizeText(existing.homeUpdatedAt))
      ) {
        patch.homeUpdatedAt = normalizeText(legacy.updated_at);
      }
      if (
        normalizeText(legacy?.last_login_at) &&
        (!normalizeText(existing.homeLastLoginAt) ||
          normalizeText(legacy.last_login_at) > normalizeText(existing.homeLastLoginAt))
      ) {
        patch.homeLastLoginAt = normalizeText(legacy.last_login_at);
      }
      if (existing.homeIsActive !== legacyActive) {
        patch.homeIsActive = legacyActive;
      }
      if (Object.keys(patch).length) {
        const next = await prisma.users.update({
          where: { id: existing.id },
          data: patch,
          select: HOME_USER_SELECT,
        });
        updated += 1;
        usersById.set(normalizeText(next.id), next);
        const nextPhone = normalizePhone(next.Phone || "");
        if (nextPhone) usersByPhone.set(nextPhone, next);
      }
      continue;
    }
    const createdUser = await prisma.users.create({
      data: {
        id: legacyId,
        Name: legacyDisplayName,
        Phone: legacyPhone,
        TelegramID: null,
        Barber: null,
        homePasswordHash: legacyHash,
        homePasswordSalt: legacySalt,
        homeIsActive: legacyActive,
        homeCreatedAt: normalizeText(legacy?.created_at) || new Date().toISOString(),
        homeUpdatedAt: normalizeText(legacy?.updated_at) || new Date().toISOString(),
        homeLastLoginAt: normalizeText(legacy?.last_login_at) || null,
      },
      select: HOME_USER_SELECT,
    });
    created += 1;
    usersById.set(normalizeText(createdUser.id), createdUser);
    usersByPhone.set(legacyPhone, createdUser);
  }
  return { created, updated, total: legacyUsers.length };
};
const listBackups = async () => {
  await fs.ensureDir(BACKUP_DIR);
  const files = await fs.readdir(BACKUP_DIR);
  return files
    .filter((file) => file.endsWith(".db"))
    .sort()
    .reverse();
};
const createBackup = async () => {
  await fs.ensureDir(BACKUP_DIR);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const target = path.join(BACKUP_DIR, `backup-${timestamp}.db`);
  await fs.copyFile(DB_PATH, target);
  return target;
};
const ensureBootstrapData = async () => {
  const [settingsCount, barbersCount] = await Promise.all([
    prisma.botSettings.count(),
    prisma.barbers.count(),
  ]);
  if (!settingsCount) {
    await prisma.botSettings.create({
      data: {
        id: randomUUID(),
        botDescription: DEFAULT_BOT_DESCRIPTION,
        aboutText: DEFAULT_ABOUT_TEXT,
        isBotEnabled: true,
        bookingLimit: 2,
        minLeadHours: 2,
        maxDaysAhead: 14,
        lastSyncSource: "bootstrap",
        botToken: "",
      },
    });
  }
};

const seedServicesFromCost = async () => {
  const servicesCount = await prisma.services.count();
  if (servicesCount) return;
  const costRows = await prisma.cost.findMany();
  if (!costRows.length) return;
  const barbers = await prisma.barbers.findMany();
  const barberLookup = buildBarberLookup(barbers);
  await prisma.$transaction(async (tx) => {
    for (const [index, row] of costRows.entries()) {
      const durationMatch = normalizeText(row.Dlitelnost).match(/(\d+)/);
      const duration = durationMatch ? Number(durationMatch[1]) : 0;
      const service = await tx.services.create({
        data: {
          id: randomUUID(),
          name: row.Uslugi || `РЈСЃР»СѓРіР° #${index + 1}`,
          description: "",
          category: null,
          duration,
          orderIndex: index,
          isActive: true,
        },
      });
      const priceRecords = [];
      for (const [fieldName, priceValue] of Object.entries(row)) {
        if (RESERVED_COST_FIELDS.has(fieldName)) continue;
        if (
          priceValue === null ||
          priceValue === undefined ||
          priceValue === ""
        )
          continue;
        const barberId = resolveBarberIdFromLookup(barberLookup, fieldName);
        const parsedPrice = Number(priceValue);
        if (!barberId || Number.isNaN(parsedPrice)) continue;
        priceRecords.push({
          id: randomUUID(),
          serviceId: service.id,
          barberId,
          price: parsedPrice,
        });
      }
      if (priceRecords.length) {
        await tx.servicePrices.createMany({ data: priceRecords });
      }
    }
  });
};
const getBarbers = async ({ includeInactive = false } = {}) => {
  const where = includeInactive ? {} : { isActive: true };
  const barbers = await prisma.barbers.findMany({
    where,
    orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
    include: { position: true },
  });
  barberAliasLookup = buildBarberLookup(barbers);
  return barbers;
};
const propagateBarberRename = async ({ barberId, oldName, newName }) => {
  if (!oldName || !newName) return;
  if (canonicalizeKey(oldName) === canonicalizeKey(newName)) return;
  try {
    await prisma.$transaction([
      prisma.appointments.updateMany({
        where: { Barber: oldName },
        data: { Barber: newName },
      }),
      prisma.users.updateMany({
        where: { Barber: oldName },
        data: { Barber: newName },
      }),
    ]);
  } catch (error) {
    console.error("Barber rename propagation failed:", error);
  }
  try {
    await registerBarberAlias(barberId, oldName);
  } catch (aliasError) {
    console.error("Barber alias store update failed:", aliasError);
  }
  try {
    await getBarbers({ includeInactive: true });
  } catch (refreshError) {
    console.error("Barber lookup refresh failed:", refreshError);
  }
};
getBarbers({ includeInactive: true }).catch((error) =>
  console.warn("Initial barbers preload failed:", error.message),
);
const ensureBotSettingsRecord = async () => {
  let record = await prisma.botSettings.findFirst();
  if (record) return record;
  await ensureBootstrapData();
  await sanitizeCommissionRates();
  record = await prisma.botSettings.findFirst();
  if (record) return record;
  record = await prisma.botSettings.create({
    data: {
      id: randomUUID(),
      botDescription: DEFAULT_BOT_DESCRIPTION,
      aboutText: DEFAULT_ABOUT_TEXT,
      isBotEnabled: true,
      bookingLimit: 2,
      minLeadHours: 2,
      maxDaysAhead: 14,
      lastSyncSource: "site",
      botToken: "",
    },
  });
  return record;
};
const getBotSettings = async () => ensureBotSettingsRecord();
ensureBotSettingsRecord().catch((error) =>
  console.warn("Initial bot settings preload failed:", error.message),
);
const getServiceCatalog = async (includeInactive = true, identity = null) => {
  const where = includeInactive ? {} : { isActive: true };
  let services = await prisma.services.findMany({
    where,
    orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
  });
  if (!services.length) {
    services = (await prisma.cost.findMany()).map((row, index) => ({
      id: row.id,
      name: row.Uslugi || `РЈСЃР»СѓРіР° #${index + 1}`,
      description: "",
      category: null,
      duration: Number(normalizeText(row.Dlitelnost).match(/(\d+)/)?.[1] ?? 0),
      isActive: true,
      orderIndex: index,
      legacy: true,
    }));
  }
  const prices = await prisma.servicePrices.findMany();
  const priceMap = new Map(
    prices.map((price) => [
      `${price.serviceId}:${price.barberId}`,
      price.price,
    ]),
  );
  const barbers = await getBarbers({ includeInactive: true });
  const mapped = services.map((service) => ({
    ...service,
    prices: barbers.reduce((acc, barber) => {
      const key = `${service.id}:${barber.id}`;
      acc[barber.id] = priceMap.has(key) ? priceMap.get(key) : null;
      return acc;
    }, {}),
  }));
  return filterServicesForIdentity(mapped, identity);
};
const getHomeBookingSettings = async () => {
  const settings = await getBotSettings();
  const bookingLimit = Math.max(1, Number(settings?.bookingLimit) || 2);
  const minLeadHours = Math.max(1, Number(settings?.minLeadHours) || 2);
  const maxDaysAhead = Math.max(1, Math.min(30, Number(settings?.maxDaysAhead) || 14));
  return { bookingLimit, minLeadHours, maxDaysAhead };
};
const parseTimeLabelToMinutes = (value) => {
  const text = normalizeText(value);
  const match = text.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  return hours * 60 + minutes;
};
const parseWorkingRange = (value) => {
  const text = normalizeText(value);
  if (!text || text === "0" || !text.includes("-")) return null;
  const [startRaw, endRaw] = text.split("-", 2);
  const start = parseTimeLabelToMinutes(startRaw);
  const end = parseTimeLabelToMinutes(endRaw);
  if (start == null || end == null || end <= start) return null;
  return [start, end];
};
const formatMinutesAsClock = (minutes) => {
  const safeMinutes = Number(minutes);
  if (!Number.isFinite(safeMinutes) || safeMinutes < 0) return "00:00";
  const normalized = Math.floor(safeMinutes);
  const hours = Math.floor(normalized / 60);
  const mins = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};
const canFitTimeRange = (startMinute, duration, busyIntervals = []) => {
  const endMinute = startMinute + duration;
  if (endMinute > 24 * 60) return false;
  for (const [busyStart, busyEnd] of busyIntervals) {
    if (startMinute < busyEnd && endMinute > busyStart) {
      return false;
    }
  }
  return true;
};
const isSlotBlockingStatus = (status) => {
  const lowered = toLower(status);
  return isActiveStatus(status) || SLOT_BLOCK_TOKENS.some((token) => lowered.includes(token));
};
const isIsoDateKey = (value) => /^\d{4}-\d{2}-\d{2}$/.test(normalizeText(value));
const parseServiceIdsInput = (value) => {
  if (Array.isArray(value)) {
    return Array.from(
      new Set(
        value
          .map((item) => normalizeText(item))
          .filter(Boolean),
      ),
    );
  }
  const text = normalizeText(value);
  if (!text) return [];
  return Array.from(
    new Set(
      text
        .split(",")
        .map((item) => normalizeText(item))
        .filter(Boolean),
    ),
  );
};
const resolveBookableServicesForBarber = (services = [], barberId) => {
  const safeBarberId = normalizeText(barberId);
  return services
    .map((service) => {
      const priceRaw = service?.prices?.[safeBarberId] ?? service?.prices?.[String(safeBarberId)];
      const price = Number(priceRaw);
      if (!Number.isFinite(price) || price <= 0) return null;
      return {
        id: normalizeText(service?.id),
        name: normalizeText(service?.name),
        description: normalizeText(service?.description),
        duration: Math.max(0, Number(service?.duration) || 0),
        price,
      };
    })
    .filter((item) => item && item.id && item.name);
};
const getWorkingHoursForBarberDate = async (db, barberName, dateKey) => {
  const schedule = await db.schedules.findFirst({
    where: { Barber: barberName, Date: dateKey },
    select: { Week: true },
  });
  return parseWorkingRange(schedule?.Week);
};
const getBusyIntervalsForBarberDate = async (db, barberName, dateKey) => {
  const rows = await db.appointments.findMany({
    where: { Barber: barberName, Date: dateKey },
    select: { Time: true, Status: true },
  });
  return rows.reduce((acc, row) => {
    if (!isSlotBlockingStatus(row?.Status)) return acc;
    const parsed = parseWorkingRange(row?.Time);
    if (parsed) acc.push(parsed);
    return acc;
  }, []);
};
const buildTimeSlotsForDate = ({
  dateKey,
  workingHours,
  busyIntervals,
  totalDuration,
  minAllowedDate,
}) => {
  if (!workingHours) return [];
  const [startDay, endDay] = workingHours;
  if (endDay - startDay < totalDuration) return [];
  const slots = [];
  for (let minute = startDay; minute <= endDay - totalDuration; minute += 60) {
    const startLabel = formatMinutesAsClock(minute);
    const endLabel = formatMinutesAsClock(minute + totalDuration);
    const slotDate = new Date(`${dateKey}T${startLabel}:00`);
    if (Number.isNaN(slotDate.getTime())) continue;
    if (slotDate < minAllowedDate) continue;
    if (!canFitTimeRange(minute, totalDuration, busyIntervals)) continue;
    slots.push({
      start: startLabel,
      end: endLabel,
      label: `${startLabel} - ${endLabel}`,
    });
  }
  return slots;
};
const countHomeUserActiveAppointments = async (userId) => {
  const safeUserId = normalizeText(userId);
  if (!safeUserId) return 0;
  const rows = await prisma.appointments.findMany({
    where: { UserID: safeUserId },
    select: { Status: true },
  });
  return rows.reduce((acc, row) => (isActiveStatus(row?.Status) ? acc + 1 : acc), 0);
};
const resolveHomeBookingUser = async (req) => {
  const identity = req.homeUser || {};
  const userId = normalizeText(identity.userId);
  if (!userId) return null;
  const stored = await findHomeUserById(userId);
  if (!stored) return null;
  return {
    id: stored.id,
    phone: normalizePhone(stored.Phone || identity.phone || ""),
    displayName: normalizeText(
      stored.Name || identity.displayName || stored.Phone || identity.phone,
    ),
  };
};
const buildDateWindow = (maxDaysAhead) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({ length: maxDaysAhead }).map((_, offset) => {
    const current = new Date(today);
    current.setDate(today.getDate() + offset);
    const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}-${String(
      current.getDate(),
    ).padStart(2, "0")}`;
    return { date: current, key };
  });
};
const buildClientRows = (users, appointments, manualBlockedSet = new Set()) => {
  const now = new Date();
  const yearAgo = new Date(now);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  const warningCutoff = getWarningCutoffDate();
  const clients = [];
  const appointmentsByUser = new Map();
  appointments.forEach((appt) => {
    if (appt.UserID) {
      const list = appointmentsByUser.get(appt.UserID) || [];
      list.push(appt);
      appointmentsByUser.set(appt.UserID, list);
    }
  });
  users.forEach((user) => {
    const normalizedPhone = normalizePhone(user.Phone);
    const relatedAppointments = (appointmentsByUser.get(user.id) || []).concat(
      appointments.filter((appt) => {
        if (appt.UserID && appt.UserID === user.id) return false;
        if (normalizedPhone && appt.normalizedPhone === normalizedPhone) return true;
        if (user.Name && appt.CustomerName && normalizeText(user.Name) === normalizeText(appt.CustomerName)) return true;
        return false;
      }),
    );
    const active = relatedAppointments.filter((appt) => appt.isActive);
    const confirmed = relatedAppointments.filter((appt) => appt.isConfirmed);
    const confirmedYear = confirmed.filter(
      (appt) => appt.startDateTime && new Date(appt.startDateTime) >= yearAgo,
    );
    const lastConfirmed = confirmed.sort((a, b) => b.sortKey - a.sortKey)[0];
    const warningCount = countAppointmentWarnings(relatedAppointments, warningCutoff);
    const manualBlocked = manualBlockedSet.has(user.id);
    const isBlocked = manualBlocked || warningCount >= WARNING_BLOCK_THRESHOLD;
    clients.push({
      id: user.id,
      name: user.Name || "Р‘РµР· РёРјРµРЅРё",
      phone: user.Phone || "",
      normalizedPhone,
      telegramId: user.TelegramID || null,
      preferredBarber: user.Barber || null,
      warningCount,
      manualBlocked,
      isBlocked,
      activeAppointments: active.length,
      confirmedHaircutsYear: confirmedYear.length,
      totalConfirmed: confirmed.length,
      lastHaircutDate: lastConfirmed?.Date || null,
      lastHaircutTime: lastConfirmed?.Time || null,
      lastHaircutBarber: lastConfirmed?.Barber || null,
      activeRecords: active.slice(0, 5),
      historyRecords: confirmed.slice(0, 25),
    });
  });
  const orphanAppointments = appointments.filter((appt) => !appt.UserID);
  orphanAppointments.forEach((appt) => {
    const clientId = `appt-${appt.id}`;
    const exists = clients.some(
      (client) =>
        client.id === clientId ||
        (client.normalizedPhone && client.normalizedPhone === appt.normalizedPhone && client.name === (appt.CustomerName || client.name)),
    );
    if (exists) return;
    const confirmedYear =
      appt.isConfirmed &&
      appt.startDateTime &&
      new Date(appt.startDateTime) >= yearAgo
        ? 1
        : 0;
    const warningCount = countAppointmentWarnings([appt], warningCutoff);
    const isBlocked = warningCount >= WARNING_BLOCK_THRESHOLD || appt.isBlocked;
    clients.push({
      id: clientId,
      name: appt.CustomerName || "Р‘РµР· РёРјРµРЅРё",
      phone: appt.Phone || "",
      normalizedPhone: appt.normalizedPhone,
      telegramId: null,
      preferredBarber: appt.Barber || null,
      warningCount,
      manualBlocked: false,
      isBlocked,
      activeAppointments: appt.isActive ? 1 : 0,
      confirmedHaircutsYear: confirmedYear,
      totalConfirmed: appt.isConfirmed ? 1 : 0,
      lastHaircutDate: appt.isConfirmed ? appt.Date : null,
      lastHaircutTime: appt.isConfirmed ? appt.Time : null,
      lastHaircutBarber: appt.isConfirmed ? appt.Barber : null,
      activeRecords: appt.isActive ? [appt] : [],
      historyRecords: appt.isConfirmed ? [appt] : [],
    });
  });
  return clients.sort((a, b) => {
    const aDate = a.lastHaircutDate
      ? new Date(`${a.lastHaircutDate}T${(a.lastHaircutTime || "00:00").slice(0, 5)}:00`).getTime()
      : 0;
    const bDate = b.lastHaircutDate
      ? new Date(`${b.lastHaircutDate}T${(b.lastHaircutTime || "00:00").slice(0, 5)}:00`).getTime()
      : 0;
    return bDate - aDate;
  });
};
const buildDashboardSnapshot = async (identity = null) => {
  const [
    appointmentsRaw,
    users,
    barbers,
    services,
    settings,
    backups,
    blockedUsers,
  ] = await Promise.all([
    prisma.appointments.findMany(),
    prisma.users.findMany(),
    getBarbers({ includeInactive: true }),
    getServiceCatalog(true, identity),
    getBotSettings(),
    listBackups(),
    readBlockedUsers(),
  ]);
  const appointments = appointmentsRaw.map(mapAppointment);
  const now = new Date();
  const todayKey = formatDateOnly(now);
  const yearAgo = new Date(now);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  const upcoming = appointments
    .filter((appt) => appt.isActive)
    .sort((a, b) => a.sortKey - b.sortKey);
  const history = appointments
    .filter((appt) => !appt.isActive && appt.sortKey)
    .sort((a, b) => b.sortKey - a.sortKey)
    .slice(0, 400);
  const confirmedYear = appointments.filter(
    (appt) =>
      appt.isConfirmed &&
      appt.startDateTime &&
      new Date(appt.startDateTime) >= yearAgo,
  ).length;
  const todaysAppointments = upcoming.filter(
    (appt) => appt.Date === todayKey,
  ).length;
  const clients = buildClientRows(users, appointments, blockedUsers);
  const blockedClients = clients.filter((client) => client.isBlocked).length;
  const stats = {
    totalUsers: users.length,
    activeAppointments: upcoming.length,
    todaysAppointments,
    confirmedYear,
    blockedClients,
    earningsMonth: null,
    positionName: null,
  };
  const snapshot = {
    stats,
    appointments: { upcoming, history },
    clients,
    barbers,
    services,
    bot: {
      settings,
      status: botRuntime,
    },
    backups: backups.slice(0, 20),
  };
  if (isStaffIdentity(identity)) {
    const staffAppointments = filterAppointmentsForIdentity(
      appointments,
      identity,
    );
    const staffUpcoming = staffAppointments
      .filter((appt) => appt.isActive)
      .sort((a, b) => a.sortKey - b.sortKey);
    const staffHistory = staffAppointments
      .filter((appt) => !appt.isActive && appt.sortKey)
      .sort((a, b) => b.sortKey - a.sortKey)
      .slice(0, 400);
    const staffConfirmedYear = staffAppointments.filter(
      (appt) =>
        appt.isConfirmed &&
        appt.startDateTime &&
        new Date(appt.startDateTime) >= yearAgo,
    ).length;
    const staffTodays = staffUpcoming.filter(
      (appt) => appt.Date === todayKey,
    ).length;
    const staffBlocked = countBlockedClientsFromAppointments(
      staffAppointments,
      blockedUsers,
    );
    const staffUsers = users.filter((user) =>
      matchesIdentityBarber(user.Barber, identity),
    );
    const staffBarber =
      barbers.find(
        (barber) =>
          barber.id &&
          identity?.barberId &&
          String(barber.id) === String(identity.barberId),
      ) || null;
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthStartKey = formatDateOnly(monthStart);
    const serviceLookup = buildServiceLookup(services);
    let staffMonthlyGross = 0;
    let staffMonthlyCommission = 0;
    staffAppointments.forEach((appt) => {
      if (!isCompletedStatus(appt.Status)) return;
      if (!appt.Date || appt.Date < monthStartKey) return;
      const serviceNames = splitServiceList(appt.Services);
      if (!serviceNames.length) return;
      let appointmentGross = 0;
      serviceNames.forEach((serviceName) => {
        const service = serviceLookup.get(canonicalizeKey(serviceName));
        if (!service) return;
        const price = getServicePriceForBarber(
          service,
          staffBarber?.id || identity?.barberId,
        );
        const numericPrice = Number(price);
        if (!Number.isFinite(numericPrice) || numericPrice <= 0) return;
        appointmentGross += numericPrice;
      });
      if (!appointmentGross) return;
      const commissionRate = Number(
        staffBarber?.position?.commissionRate ?? 0,
      );
      const commissionValue = appointmentGross * (commissionRate / 100);
      staffMonthlyGross += appointmentGross;
      staffMonthlyCommission += commissionValue;
    });
    const staffPositionName = normalizeText(
      staffBarber?.position?.name || staffBarber?.position?.title || "",
    );
    return {
      stats: {
        totalUsers: staffUsers.length,
        activeAppointments: staffUpcoming.length,
        todaysAppointments: staffTodays,
        confirmedYear: staffConfirmedYear,
        blockedClients: staffBlocked,
        earningsMonth: Math.round(
          staffMonthlyGross - staffMonthlyCommission,
        ),
        positionName: staffPositionName || null,
      },
      appointments: { upcoming: staffUpcoming, history: staffHistory },
      clients,
      barbers: filterBarbersForIdentity(barbers, identity),
      services,
      bot: {
        settings,
        status: botRuntime,
      },
      backups: [],
    };
  }
  return snapshot;
};
const serializeBotRuntime = () => ({
  running: botRuntime.running,
  since: botRuntime.since,
  lastExit: botRuntime.lastExit,
  lastError: botRuntime.lastError,
});
const REALTIME_POLL_INTERVAL_MS = Math.max(
  2000,
  Number(process.env.REALTIME_POLL_INTERVAL_MS || "5000") || 5000,
);
const REALTIME_KEEPALIVE_MS = 15000;
const realtimeClients = new Set();
let realtimeInterval = null;
let realtimeHash = null;
let realtimeBusy = false;
let realtimePendingForce = false;
let lastRealtimeEventString = null;
const hashAppointmentsSnapshot = (rows = []) => {
  const sorted = [...rows].sort((a, b) => {
    if (a.id && b.id) return String(a.id).localeCompare(String(b.id));
    if (a.id) return -1;
    if (b.id) return 1;
    return 0;
  });
  return createHash("sha1").update(JSON.stringify(sorted)).digest("hex");
};
const buildRealtimeAppointmentsPayload = async () => {
  const [appointmentsRaw, usersCount, blockedUsers] = await Promise.all([
    prisma.appointments.findMany(),
    prisma.users.count(),
    readBlockedUsers(),
  ]);
  const mapped = appointmentsRaw.map(mapAppointment);
  const now = new Date();
  const todayKey = formatDateOnly(now);
  const yearAgo = new Date(now);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  const upcoming = mapped
    .filter((appt) => appt.isActive)
    .sort((a, b) => a.sortKey - b.sortKey)
    .slice(0, 60);
  const confirmedYear = mapped.filter(
    (appt) =>
      appt.isConfirmed &&
      appt.startDateTime &&
      new Date(appt.startDateTime) >= yearAgo,
  ).length;
  const todaysAppointments = upcoming.filter(
    (appt) => appt.Date === todayKey,
  ).length;
  const blockedClients = countBlockedClientsFromAppointments(
    mapped,
    blockedUsers,
  );
  return {
    appointmentsRaw,
    upcoming,
    stats: {
      totalUsers: usersCount,
      activeAppointments: upcoming.length,
      todaysAppointments,
      confirmedYear,
      blockedClients,
    },
    updatedAt: new Date().toISOString(),
  };
};
const formatSseEventString = (eventName, payload) =>
  `event: ${eventName}\ndata: ${JSON.stringify(payload)}\n\n`;
const broadcastRealtimePayload = (payload) => {
  const eventString = formatSseEventString("appointments", payload);
  lastRealtimeEventString = eventString;
  realtimeClients.forEach((client) => {
    try {
      client.res.write(eventString);
    } catch (error) {
      realtimeClients.delete(client);
      try {
        client.res.end();
      } catch (closeError) {
        // ignore downstream disconnects
      }
    }
  });
};
const runRealtimePush = async (force = false) => {
  if (realtimeBusy) {
    realtimePendingForce = realtimePendingForce || force;
    return;
  }
  realtimeBusy = true;
  try {
    const snapshot = await buildRealtimeAppointmentsPayload();
    const nextHash = hashAppointmentsSnapshot(snapshot.appointmentsRaw);
    if (!force && nextHash === realtimeHash) return;
    realtimeHash = nextHash;
    const envelope = {
      type: "appointments:update",
      payload: {
        rows: snapshot.appointmentsRaw,
        upcoming: snapshot.upcoming,
        stats: snapshot.stats,
        updatedAt: snapshot.updatedAt,
      },
    };
    broadcastRealtimePayload(envelope);
  } catch (error) {
    console.error("Realtime snapshot error:", error);
  } finally {
    realtimeBusy = false;
    if (realtimePendingForce) {
      const shouldForce = realtimePendingForce;
      realtimePendingForce = false;
      runRealtimePush(shouldForce);
    }
  }
};
const ensureRealtimeLoop = () => {
  if (realtimeInterval) return;
  realtimeInterval = setInterval(() => {
    if (realtimeClients.size === 0) return;
    runRealtimePush(false);
  }, REALTIME_POLL_INTERVAL_MS);
};
const stopRealtimeLoop = () => {
  if (realtimeInterval) {
    clearInterval(realtimeInterval);
    realtimeInterval = null;
  }
};
const shutdownRealtimeClients = () => {
  realtimeClients.forEach((client) => {
    try {
      client.res.end();
    } catch (error) {
      // ignore
    }
  });
  realtimeClients.clear();
};
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
const requestRealtimePush = (force = false) =>
  runRealtimePush(force).catch((error) =>
    console.error("Realtime push failed:", error),
  );
const startBotProcess = async () => {
  if (botProcess || !fs.existsSync(botScriptPath)) {
    if (!fs.existsSync(botScriptPath)) {
      botRuntime.lastError = "BotBrotherShop.py not found";
    }
    return serializeBotRuntime();
  }
  const botToken = await readBotToken();
  if (!botToken) {
    botRuntime.lastError = "Bot token is not configured";
    return serializeBotRuntime();
  }
  botProcess = spawn(
    process.env.BOT_COMMAND || pythonExecutable,
    [botScriptPath],
    {
      cwd: __dirname,
      env: {
        ...process.env,
        TELEGRAM_BOT_TOKEN: botToken,
        TOKEN: botToken,
      },
    },
  );
  botRuntime.running = true;
  botRuntime.since = new Date().toISOString();
  botRuntime.lastError = null;
  botProcess.stdout.on("data", (chunk) => {
    console.log(`[BOT]: ${chunk.toString().trim()}`);
  });
  botProcess.stderr.on("data", (chunk) => {
    const message = chunk.toString();
    console.error(`[BOT:ERR]: ${message.trim()}`);
    botRuntime.lastError = message.trim();
  });
  botProcess.on("close", (code) => {
    botRuntime.running = false;
    botRuntime.lastExit = { code, at: new Date().toISOString() };
    botProcess = null;
  });
  return serializeBotRuntime();
};
const stopBotProcess = async () => {
  if (!botProcess) return serializeBotRuntime();
  return new Promise((resolve) => {
    botProcess.on("close", () => resolve(serializeBotRuntime()));
    botProcess.kill("SIGTERM");
    setTimeout(() => {
      if (botProcess) {
        botProcess.kill("SIGKILL");
      }
    }, 3000);
  });
};
const performSystemUpdate = async () => {
  if (updateInProgress) {
    throw new Error("System update is already running");
  }
  updateInProgress = true;
  const realtimeWasRunning = Boolean(realtimeInterval);
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
      await ensureBotProcessState();
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
const wait = (delayMs) =>
  new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });
const buildPostRestartHealthUrl = () => {
  if (POST_RESTART_HEALTHCHECK_URL) {
    return POST_RESTART_HEALTHCHECK_URL;
  }
  const rawPort = Number(process.env.POST_RESTART_HEALTHCHECK_PORT || PORT);
  const safePort = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : 3000;
  return `http://${POST_RESTART_HEALTHCHECK_HOST}:${safePort}${HEALTHCHECK_PATH}`;
};
const appendUpdateAlert = async (message, details = {}) => {
  const entry = {
    level: "error",
    source: "update",
    message,
    details,
    time: new Date().toISOString(),
  };
  try {
    await fs.ensureDir(path.dirname(UPDATE_ALERT_LOG));
    await fs.appendFile(UPDATE_ALERT_LOG, `${JSON.stringify(entry)}${os.EOL}`, "utf8");
  } catch (error) {
    console.error("[update] Failed to persist alert:", error?.message || error);
  }
};
const waitForPostRestartHealth = async () => {
  if (!POST_RESTART_HEALTHCHECK_ENABLED) {
    return { ok: true, skipped: true, reason: "disabled" };
  }
  const url = buildPostRestartHealthUrl();
  const startedAt = Date.now();
  const deadline = startedAt + POST_RESTART_HEALTHCHECK_TIMEOUT_MS;
  let lastError = "timeout";
  while (Date.now() < deadline) {
    try {
      const response = await runtimeFetch(url, {
        method: "GET",
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        return {
          ok: true,
          url,
          status: response.status,
          elapsedMs: Date.now() - startedAt,
        };
      }
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error?.message || "network_error";
    }
    await wait(POST_RESTART_HEALTHCHECK_INTERVAL_MS);
  }
  return {
    ok: false,
    url,
    error: lastError,
    elapsedMs: Date.now() - startedAt,
  };
};
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
      await appendUpdateAlert("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РїСѓСЃС‚РёС‚СЊ РЅРѕРІС‹Р№ РїСЂРѕС†РµСЃСЃ РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ.", {
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
const ensureBotProcessState = async () => {
  const settings = await getBotSettings();
  if (settings?.isBotEnabled) {
    await startBotProcess();
  } else if (botProcess) {
    await stopBotProcess();
  }
};
const readBotToken = async () => {
  const settings = await getBotSettings();
  const token = settings?.botToken ? normalizeText(settings.botToken) : "";
  if (token) return token;
  const envToken = normalizeText(
    process.env.TELEGRAM_BOT_TOKEN || process.env.TOKEN || "",
  );
  return envToken || null;
};
const writeBotToken = async (nextToken) => {
  const sanitized = normalizeText(nextToken || "");
  if (!sanitized) {
    throw new Error("Bot token is required");
  }
  if (/[\r\n]/.test(sanitized)) {
    throw new Error("Bot token contains invalid characters");
  }
  const settings = await ensureBotSettingsRecord();
  await prisma.botSettings.update({
    where: { id: settings.id },
    data: { botToken: sanitized, lastSyncSource: "site" },
  });
  return sanitized;
};
const handleLoginOptions = async (req, res) => {
  try {
    const barbers = await prisma.barbers.findMany({
      where: { isActive: true, login: { not: null }, password: { not: null } },
      select: {
        id: true,
        name: true,
        login: true,
        phone: true,
        color: true,
        orderIndex: true,
        password: true,
      },
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
    });
    const options = [
      {
        id: "creator",
        login: CREATOR_ACCOUNT.username,
        phone: CREATOR_ACCOUNT.phone,
        label: CREATOR_ACCOUNT.name,
        color: null,
      },
      ...barbers
        .map((barber) => {
          const normalizedPhone = normalizePhone(barber.phone);
          const normalizedLogin = normalizeLogin(barber.login);
          if (!normalizeText(barber.password)) return null;
          if (!normalizedPhone && !normalizedLogin) return null;
          return {
            id: barber.id,
            login: barber.login,
            phone: normalizedPhone || null,
            label: barber.name || normalizedPhone || normalizedLogin,
            color: barber.color || null,
          };
        })
        .filter(Boolean),
    ];
    res.json(options);
  } catch (error) {
    console.error("Login options error:", error);
    res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ СЃРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ" });
  }
};
const handleLogin = async (req, res) => {
  try {
    const loginInput =
      normalizeText(req.body?.phone) ||
      normalizeText(req.body?.username) ||
      normalizeText(req.body?.login);
    const username = normalizeLogin(loginInput);
    const normalizedPhone = normalizePhone(loginInput);
    const password = normalizeText(req.body?.password);
    if ((!username && !normalizedPhone) || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° Рё РїР°СЂРѕР»СЊ." });
    }
    const creatorPhone = normalizePhone(CREATOR_ACCOUNT.phone);
    const creatorLogin = normalizeLogin(CREATOR_ACCOUNT.username);
    const isCreatorLogin =
      password === CREATOR_ACCOUNT.password &&
      ((creatorPhone && normalizedPhone === creatorPhone) ||
        (creatorLogin && username === creatorLogin));
    if (isCreatorLogin) {
      const identity = resolveUserIdentity({
        username: CREATOR_ACCOUNT.phone || CREATOR_ACCOUNT.username,
        login: CREATOR_ACCOUNT.username,
        barberName: CREATOR_ACCOUNT.name,
        role: ROLE_CREATOR,
      });
      const token = signSessionToken(identity);
      return res.json({
        success: true,
        token,
        username: identity.username,
        displayName: identity.barberName || identity.username,
        barberId: identity.barberId,
        role: identity.role,
        barberName: identity.barberName,
        phone: CREATOR_ACCOUNT.phone,
      });
    }
    const barbers = await prisma.barbers.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        login: true,
        phone: true,
        password: true,
        role: true,
      },
    });
    const barber = barbers.find((candidate) => {
      const phoneMatches =
        normalizedPhone && normalizePhone(candidate.phone) === normalizedPhone;
      const loginMatches =
        username && normalizeLogin(candidate.login) === username;
      return phoneMatches || loginMatches;
    });
    if (!barber || !barber.password || barber.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "РќРµРІРµСЂРЅС‹Р№ РЅРѕРјРµСЂ РёР»Рё РїР°СЂРѕР»СЊ." });
    }
    const identity = resolveUserIdentity({
      username: barber.phone || barber.login || username,
      login: barber.login || username,
      barberId: barber.id,
      barberName: barber.name || barber.login || normalizedPhone || username,
      role: barber.role,
    });
    const token = signSessionToken(identity);
    return res.json({
      success: true,
      token,
      username: identity.username,
      displayName: identity.barberName || identity.username,
      barberId: identity.barberId,
      role: identity.role,
      barberName: identity.barberName,
      phone: barber.phone || null,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ success: false, message: "РћС€РёР±РєР° РЅР° СЃРµСЂРІРµСЂРµ. РџРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ." });
  }
};
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
app.post("/api/home/auth/register", async (req, res) => {
  try {
    const phoneInput = normalizeText(req.body?.phone);
    const safePhone = normalizePhone(phoneInput);
    const password = normalizeText(req.body?.password);
    if (!safePhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° Рё РїР°СЂРѕР»СЊ.",
      });
    }
    const displayName = normalizeText(req.body?.displayName) || safePhone;
    const { hashHex, saltHex } = hashHomePassword(password);
    const now = new Date().toISOString();
    const existing = await findHomeUserByPhone(safePhone);
    let row;
    if (existing && normalizeText(existing.homePasswordHash)) {
      return res.status(409).json({
        success: false,
        message: "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ СЃ С‚Р°РєРёРј РЅРѕРјРµСЂРѕРј СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ.",
      });
    }
    if (existing) {
      const patch = {
        Phone: safePhone,
        homePasswordHash: hashHex,
        homePasswordSalt: saltHex,
        homeIsActive: true,
        homeCreatedAt: existing.homeCreatedAt || now,
        homeUpdatedAt: now,
      };
      if (shouldHydrateUserNameFromHome(existing.Name, existing.Phone)) {
        patch.Name = displayName;
      }
      row = await prisma.users.update({
        where: { id: existing.id },
        data: patch,
        select: HOME_USER_SELECT,
      });
    } else {
      row = await prisma.users.create({
        data: {
          id: randomUUID(),
          Name: displayName,
          Phone: safePhone,
          TelegramID: null,
          Barber: null,
          homePasswordHash: hashHex,
          homePasswordSalt: saltHex,
          homeIsActive: true,
          homeCreatedAt: now,
          homeUpdatedAt: now,
          homeLastLoginAt: null,
        },
        select: HOME_USER_SELECT,
      });
    }
    const user = toPublicHomeUser(row);
    const identity = buildHomeIdentity({
      userId: user.id,
      phone: user.phone,
      displayName: user.displayName,
    });
    const token = signHomeSessionToken(identity);
    return res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    if (
      error?.code === "INVALID_PASSWORD" ||
      error?.code === "INVALID_PHONE" ||
      error?.code === "WEAK_PASSWORD"
    ) {
      return res.status(400).json({ success: false, message: error.message });
    }
    console.error("Home register error:", error);
    return res
      .status(500)
      .json({ success: false, message: "РћС€РёР±РєР° СЂРµРіРёСЃС‚СЂР°С†РёРё. РџРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ." });
  }
});
app.post("/api/home/auth/login", async (req, res) => {
  try {
    const phoneInput = normalizeText(req.body?.phone);
    const safePhone = normalizePhone(phoneInput);
    const password = normalizeText(req.body?.password);
    if (!safePhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° Рё РїР°СЂРѕР»СЊ.",
      });
    }
    const existing = await findHomeUserByPhone(safePhone);
    if (
      !existing ||
      existing.homeIsActive === false ||
      !normalizeText(existing.homePasswordHash) ||
      !normalizeText(existing.homePasswordSalt) ||
      !verifyHomePassword(password, existing.homePasswordHash, existing.homePasswordSalt)
    ) {
      return res.status(401).json({
        success: false,
        message: "РќРµРІРµСЂРЅС‹Р№ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° РёР»Рё РїР°СЂРѕР»СЊ.",
      });
    }
    const now = new Date().toISOString();
    const updated = await prisma.users.update({
      where: { id: existing.id },
      data: {
        homeIsActive: true,
        homeLastLoginAt: now,
        homeUpdatedAt: now,
      },
      select: HOME_USER_SELECT,
    });
    const user = toPublicHomeUser(updated);
    const identity = buildHomeIdentity({
      userId: user.id,
      phone: user.phone,
      displayName: user.displayName,
    });
    const token = signHomeSessionToken(identity);
    return res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error("Home login error:", error);
    return res
      .status(500)
      .json({ success: false, message: "РћС€РёР±РєР° РІС…РѕРґР°. РџРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ." });
  }
});
app.post("/api/home/auth/telegram/start", async (req, res) => {
  try {
    markExpiredTelegramAuthRequests();
    const request = createTelegramAuthRequest({
      flow: TELEGRAM_AUTH_FLOW_LOGIN,
    });
    const botLink = TELEGRAM_BOT_USERNAME
      ? `https://t.me/${encodeURIComponent(
          TELEGRAM_BOT_USERNAME,
        )}?start=${encodeURIComponent(`site_login_${request.code}`)}`
      : null;
    return res.status(201).json({
      success: true,
      requestId: request.id,
      code: request.code,
      command: `/site_login ${request.code}`,
      expiresAt: request.expiresAt,
      botLink,
      botUsername: TELEGRAM_BOT_USERNAME || null,
    });
  } catch (error) {
    console.error("Home telegram auth start error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РїСѓСЃС‚РёС‚СЊ Р°РІС‚РѕСЂРёР·Р°С†РёСЋ С‡РµСЂРµР· Telegram.",
    });
  }
});
app.get("/api/home/auth/telegram/status", async (req, res) => {
  const requestId = normalizeText(req.query?.requestId);
  if (!requestId) {
    return res.status(400).json({
      success: false,
      done: true,
      message: "РЈРєР°Р¶РёС‚Рµ requestId.",
    });
  }
  try {
    markExpiredTelegramAuthRequests();
    const row = getTelegramAuthRequestById(requestId);
    if (!row) {
      return res.status(404).json({
        success: false,
        done: true,
        message: "РЎРµСЃСЃРёСЏ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёРё РЅРµ РЅР°Р№РґРµРЅР° РёР»Рё СѓР¶Рµ Р·Р°РІРµСЂС€РµРЅР°.",
      });
    }
    if (
      normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
      TELEGRAM_AUTH_FLOW_LOGIN
    ) {
      return res.status(409).json({
        success: false,
        done: true,
        message: "Р­С‚РѕС‚ Р·Р°РїСЂРѕСЃ РїСЂРµРґРЅР°Р·РЅР°С‡РµРЅ РґР»СЏ РґСЂСѓРіРѕРіРѕ СЃС†РµРЅР°СЂРёСЏ Telegram.",
      });
    }
    if (row.status === TELEGRAM_AUTH_STATUS_COMPLETED) {
      const rowUserId = normalizeText(row.userId);
      let userRow = rowUserId
        ? await prisma.users.findUnique({
            where: { id: rowUserId },
            select: { ...HOME_USER_SELECT, TelegramID: true },
          })
        : null;
      const safeTelegramId = normalizeText(row.telegramId);
      if (!userRow && safeTelegramId) {
        userRow = await findHomeUserByTelegramId(safeTelegramId);
      }
      const safePhone = normalizePhone(row.phone || userRow?.Phone || "");
      if (!userRow && safePhone) {
        userRow = await findHomeUserByPhone(safePhone);
      }
      const resolvedUserId = normalizeText(userRow?.id);
      const resolvedDisplayName =
        normalizeText(row.displayName || userRow?.Name || "") || null;
      if (
        resolvedUserId &&
        (resolvedUserId !== rowUserId ||
          safePhone !== normalizePhone(row.phone || "") ||
          resolvedDisplayName !== normalizeText(row.displayName || ""))
      ) {
        updateTelegramAuthRequestById(requestId, {
          userId: resolvedUserId,
          phone: safePhone || null,
          displayName: resolvedDisplayName,
          errorMessage: null,
        });
      }
      const hasPassword = Boolean(
        userRow &&
          normalizeText(userRow.homePasswordHash) &&
          normalizeText(userRow.homePasswordSalt),
      );
      if (userRow && userRow.homeIsActive !== false && hasPassword && safePhone) {
        const now = new Date().toISOString();
        const patch = {
          Phone: safePhone,
          homeIsActive: true,
          homeLastLoginAt: now,
          homeUpdatedAt: now,
        };
        const telegramIdAsNumber = toTelegramIdNumber(row.telegramId);
        if (telegramIdAsNumber !== null) {
          patch.TelegramID = telegramIdAsNumber;
        }
        if (
          resolvedDisplayName &&
          shouldHydrateUserNameFromHome(userRow.Name, userRow.Phone)
        ) {
          patch.Name = resolvedDisplayName;
        }
        const updated = await prisma.users.update({
          where: { id: userRow.id },
          data: patch,
          select: HOME_USER_SELECT,
        });
        const user = toPublicHomeUser(updated);
        const identity = buildHomeIdentity({
          userId: user.id,
          phone: user.phone,
          displayName: user.displayName,
        });
        const token = signHomeSessionToken(identity);
        try {
          deleteTelegramAuthRequestById(requestId);
        } catch (cleanupError) {
          console.warn(
            "Telegram auth request cleanup warning:",
            cleanupError?.message || cleanupError,
          );
        }
        return res.json({
          success: true,
          done: true,
          token,
          user,
        });
      }
      if (!safePhone) {
        return res.status(409).json({
          success: false,
          done: true,
          message:
            "Р”Р»СЏ РІС…РѕРґР° РЅСѓР¶РµРЅ РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅС‹Р№ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° РІ Telegram. РќР°Р¶РјРёС‚Рµ РІС…РѕРґ С‡РµСЂРµР· Telegram СЃРЅРѕРІР°.",
        });
      }
      return res.json({
        success: true,
        done: true,
        needsSetup: true,
        requestId,
        setupMode: userRow ? "set_password" : "register",
        phone: safePhone,
        displayName: resolvedDisplayName,
      });
    }
    if (
      row.status === TELEGRAM_AUTH_STATUS_FAILED ||
      row.status === TELEGRAM_AUTH_STATUS_EXPIRED
    ) {
      return res.json({
        success: false,
        done: true,
        status: row.status,
        message:
          normalizeText(row.errorMessage) ||
          (row.status === TELEGRAM_AUTH_STATUS_EXPIRED
            ? "РљРѕРґ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёРё РёСЃС‚РµРє. Р—Р°РїСЂРѕСЃРёС‚Рµ РЅРѕРІС‹Р№."
            : "Telegram Р°РІС‚РѕСЂРёР·Р°С†РёСЏ Р·Р°РІРµСЂС€РёР»Р°СЃСЊ СЃ РѕС€РёР±РєРѕР№."),
      });
    }
    return res.json({
      success: true,
      done: false,
      status: row.status,
      expiresAt: row.expiresAt || null,
      updatedAt: row.updatedAt || null,
    });
  } catch (error) {
    console.error("Home telegram auth status error:", error);
    return res.status(500).json({
      success: false,
      done: true,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРѕРІРµСЂРёС‚СЊ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёСЋ.",
    });
  }
});
app.post("/api/home/auth/telegram/complete", async (req, res) => {
  const requestId = normalizeText(req.body?.requestId);
  const displayNameInput = normalizeText(req.body?.displayName);
  const phoneInput = normalizeText(req.body?.phone);
  const password = normalizeText(req.body?.password);
  if (!requestId || !password) {
    return res.status(400).json({
      success: false,
      message: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РґР°РЅРЅС‹С… РґР»СЏ Р·Р°РІРµСЂС€РµРЅРёСЏ Telegram-РІС…РѕРґР°.",
    });
  }
  try {
    markExpiredTelegramAuthRequests();
    const row = getTelegramAuthRequestById(requestId);
    if (!row) {
      return res.status(404).json({
        success: false,
        message: "РЎРµСЃСЃРёСЏ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёРё РЅРµ РЅР°Р№РґРµРЅР°.",
      });
    }
    if (
      normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
      TELEGRAM_AUTH_FLOW_LOGIN
    ) {
      return res.status(409).json({
        success: false,
        message: "Р­С‚РѕС‚ Р·Р°РїСЂРѕСЃ Telegram РЅРµ РїСЂРµРґРЅР°Р·РЅР°С‡РµРЅ РґР»СЏ Р·Р°РІРµСЂС€РµРЅРёСЏ РІС…РѕРґР°.",
      });
    }
    if (row.status !== TELEGRAM_AUTH_STATUS_COMPLETED) {
      return res.status(409).json({
        success: false,
        message:
          row.status === TELEGRAM_AUTH_STATUS_EXPIRED
            ? "РљРѕРґ Telegram Р°РІС‚РѕСЂРёР·Р°С†РёРё РёСЃС‚РµРє. Р—Р°РїСЂРѕСЃРёС‚Рµ РЅРѕРІС‹Р№."
            : "Telegram Р°РІС‚РѕСЂРёР·Р°С†РёСЏ РµС‰Рµ РЅРµ Р·Р°РІРµСЂС€РµРЅР°.",
      });
    }
    const safeTelegramId = normalizeText(row.telegramId);
    const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);
    let userRow = null;
    const rowUserId = normalizeText(row.userId);
    if (rowUserId) {
      userRow = await prisma.users.findUnique({
        where: { id: rowUserId },
        select: { ...HOME_USER_SELECT, TelegramID: true },
      });
    }
    if (!userRow && safeTelegramId) {
      userRow = await findHomeUserByTelegramId(safeTelegramId);
    }
    const safePhone = normalizePhone(phoneInput || row.phone || userRow?.Phone || "");
    if (!safePhone) {
      return res.status(409).json({
        success: false,
        message:
          "РўРµР»РµС„РѕРЅ РЅРµ РїРѕРґС‚РІРµСЂР¶РґРµРЅ. РќР°Р¶РјРёС‚Рµ РІС…РѕРґ С‡РµСЂРµР· Telegram СЃРЅРѕРІР° Рё РѕС‚РїСЂР°РІСЊС‚Рµ РєРѕРЅС‚Р°РєС‚.",
      });
    }
    const phoneMatches = await prisma.users.findMany({
      where: { Phone: { not: null } },
      select: {
        id: true,
        Phone: true,
        homePasswordHash: true,
        homePasswordSalt: true,
        homeIsActive: true,
      },
    });
    const conflict = phoneMatches.find(
      (row) =>
        row.id !== userRow?.id &&
        normalizePhone(row.Phone || "") === safePhone &&
        row.homeIsActive !== false &&
        normalizeText(row.homePasswordHash) &&
        normalizeText(row.homePasswordSalt),
    );
    if (conflict) {
      return res.status(409).json({
        success: false,
        message: "Р­С‚РѕС‚ РЅРѕРјРµСЂ СѓР¶Рµ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґСЂСѓРіРёРј Р°РєРєР°СѓРЅС‚РѕРј.",
      });
    }
    const { hashHex, saltHex } = hashHomePassword(password);
    const now = new Date().toISOString();
    let persisted;
    if (userRow) {
      const nextDisplayName =
        displayNameInput || normalizeText(row.displayName || userRow.Name || "");
      const patch = {
        Phone: safePhone,
        homePasswordHash: hashHex,
        homePasswordSalt: saltHex,
        homeIsActive: true,
        homeCreatedAt: userRow.homeCreatedAt || now,
        homeUpdatedAt: now,
        homeLastLoginAt: now,
      };
      if (telegramIdAsNumber !== null) {
        patch.TelegramID = telegramIdAsNumber;
      }
      if (
        nextDisplayName &&
        shouldHydrateUserNameFromHome(userRow.Name, userRow.Phone)
      ) {
        patch.Name = nextDisplayName;
      }
      persisted = await prisma.users.update({
        where: { id: userRow.id },
        data: patch,
        select: HOME_USER_SELECT,
      });
      updateTelegramAuthRequestById(requestId, {
        userId: userRow.id,
        phone: safePhone,
        displayName: nextDisplayName || null,
        errorMessage: null,
      });
    } else {
      const nextDisplayName = displayNameInput;
      if (!nextDisplayName) {
        return res.status(400).json({
          success: false,
          message: "Р’РІРµРґРёС‚Рµ Р¤РРћ РґР»СЏ РЅРѕРІРѕРіРѕ Р°РєРєР°СѓРЅС‚Р°.",
        });
      }
      persisted = await prisma.users.create({
        data: {
          id: randomUUID(),
          Name: nextDisplayName,
          Phone: safePhone,
          TelegramID: telegramIdAsNumber,
          Barber: null,
          homePasswordHash: hashHex,
          homePasswordSalt: saltHex,
          homeIsActive: true,
          homeCreatedAt: now,
          homeUpdatedAt: now,
          homeLastLoginAt: now,
        },
        select: HOME_USER_SELECT,
      });
      updateTelegramAuthRequestById(requestId, {
        userId: persisted.id,
        phone: safePhone,
        displayName: nextDisplayName,
        errorMessage: null,
      });
    }
    const user = toPublicHomeUser(persisted);
    const identity = buildHomeIdentity({
      userId: user.id,
      phone: user.phone,
      displayName: user.displayName,
    });
    const token = signHomeSessionToken(identity);
    try {
      deleteTelegramAuthRequestById(requestId);
    } catch (cleanupError) {
      console.warn(
        "Telegram auth request cleanup warning:",
        cleanupError?.message || cleanupError,
      );
    }
    return res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    if (
      error?.code === "INVALID_PASSWORD" ||
      error?.code === "WEAK_PASSWORD" ||
      error?.code === "INVALID_PHONE"
    ) {
      return res.status(400).json({ success: false, message: error.message });
    }
    console.error("Home telegram auth complete error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РІРµСЂС€РёС‚СЊ РІС…РѕРґ С‡РµСЂРµР· Telegram.",
    });
  }
});
app.get("/api/home/auth/me", authenticateHomeToken, async (req, res) => {
  const identity = req.homeUser || {};
  const stored = await findHomeUserById(identity.userId);
  if (!stored) return res.sendStatus(401);
  const user = toPublicHomeUser(stored);
  return res.json({
    authenticated: true,
    user,
  });
});
app.get("/api/home/profile", authenticateHomeToken, async (req, res) => {
  try {
    const userId = normalizeText(req.homeUser?.userId);
    if (!userId) return res.sendStatus(401);
    const stored = await prisma.users.findUnique({
      where: { id: userId },
      select: HOME_PROFILE_SELECT,
    });
    if (
      !stored ||
      stored.homeIsActive === false ||
      !normalizeText(stored.homePasswordHash) ||
      !normalizeText(stored.homePasswordSalt)
    ) {
      return res.sendStatus(401);
    }
    return res.json({
      success: true,
      user: toPublicHomeProfile(stored),
      botUsername: TELEGRAM_BOT_USERNAME || null,
    });
  } catch (error) {
    console.error("Home profile read error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РїСЂРѕС„РёР»СЊ.",
    });
  }
});
app.put("/api/home/profile", authenticateHomeToken, async (req, res) => {
  try {
    const userId = normalizeText(req.homeUser?.userId);
    if (!userId) return res.sendStatus(401);
    const current = await prisma.users.findUnique({
      where: { id: userId },
      select: HOME_PROFILE_SELECT,
    });
    if (
      !current ||
      current.homeIsActive === false ||
      !normalizeText(current.homePasswordHash) ||
      !normalizeText(current.homePasswordSalt)
    ) {
      return res.sendStatus(401);
    }

    const displayNameInput = normalizeText(req.body?.displayName);
    const phoneInput = normalizeText(req.body?.phone);
    const passwordInput = normalizeText(req.body?.password);
    const safePhone = normalizePhone(phoneInput || current.Phone || "");
    if (!safePhone) {
      return res.status(400).json({
        success: false,
        message: "Р’РІРµРґРёС‚Рµ РєРѕСЂСЂРµРєС‚РЅС‹Р№ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР°.",
      });
    }

    const currentPhone = normalizePhone(current.Phone || "");
    if (safePhone !== currentPhone) {
      const phoneMatches = await prisma.users.findMany({
        where: { Phone: { not: null } },
        select: {
          id: true,
          Phone: true,
          homePasswordHash: true,
          homePasswordSalt: true,
          homeIsActive: true,
        },
      });
      const conflict = phoneMatches.find(
        (row) =>
          row.id !== userId &&
          normalizePhone(row.Phone || "") === safePhone &&
          row.homeIsActive !== false &&
          normalizeText(row.homePasswordHash) &&
          normalizeText(row.homePasswordSalt),
      );
      if (conflict) {
        return res.status(409).json({
          success: false,
          message: "Р­С‚РѕС‚ РЅРѕРјРµСЂ СѓР¶Рµ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґСЂСѓРіРёРј Р°РєРєР°СѓРЅС‚РѕРј.",
        });
      }
    }

    const currentDisplayName = normalizeText(
      current.Name || current.Phone || safePhone,
    );
    const nextDisplayName = displayNameInput || currentDisplayName;
    const nameChanged = nextDisplayName !== currentDisplayName;
    const phoneChanged = safePhone !== currentPhone;
    const limits = toPublicHomeProfile(current)?.limits || {};
    if (nameChanged && limits?.name?.isLocked) {
      return res.status(429).json({
        success: false,
        message: buildLimitBlockedMessage("Р¤РРћ", limits.name),
      });
    }
    if (phoneChanged && limits?.phone?.isLocked) {
      return res.status(429).json({
        success: false,
        message: buildLimitBlockedMessage("РўРµР»РµС„РѕРЅ", limits.phone),
      });
    }

    const now = new Date().toISOString();
    const patch = {
      Name: nextDisplayName,
      Phone: safePhone,
      homeIsActive: true,
      homeCreatedAt: current.homeCreatedAt || now,
      homeUpdatedAt: now,
    };
    if (nameChanged) {
      patch.LastNameChanged = now;
    }
    if (phoneChanged) {
      patch.homePhoneChangedAt = now;
    }
    if (passwordInput) {
      const { hashHex, saltHex } = hashHomePassword(passwordInput);
      patch.homePasswordHash = hashHex;
      patch.homePasswordSalt = saltHex;
    }

    const updated = await prisma.users.update({
      where: { id: userId },
      data: patch,
      select: HOME_PROFILE_SELECT,
    });
    const user = toPublicHomeProfile(updated);
    const identity = buildHomeIdentity({
      userId: user.id,
      phone: user.phone,
      displayName: user.displayName,
    });
    const token = signHomeSessionToken(identity);
    res.setHeader("x-home-session-token", token);
    return res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    if (
      error?.code === "INVALID_PASSWORD" ||
      error?.code === "INVALID_PHONE" ||
      error?.code === "WEAK_PASSWORD"
    ) {
      return res.status(400).json({ success: false, message: error.message });
    }
    console.error("Home profile update error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ РїСЂРѕС„РёР»СЏ.",
    });
  }
});
app.post("/api/home/profile/telegram/start", authenticateHomeToken, async (req, res) => {
  try {
    const userId = normalizeText(req.homeUser?.userId);
    if (!userId) return res.sendStatus(401);
    const current = await prisma.users.findUnique({
      where: { id: userId },
      select: HOME_PROFILE_SELECT,
    });
    if (
      !current ||
      current.homeIsActive === false ||
      !normalizeText(current.homePasswordHash) ||
      !normalizeText(current.homePasswordSalt)
    ) {
      return res.sendStatus(401);
    }
    if (normalizeText(current.TelegramID)) {
      return res.status(409).json({
        success: false,
        message: "Telegram СѓР¶Рµ РїСЂРёРІСЏР·Р°РЅ Рє СЌС‚РѕРјСѓ Р°РєРєР°СѓРЅС‚Сѓ.",
      });
    }
    markExpiredTelegramAuthRequests();
    const request = createTelegramAuthRequest({
      flow: TELEGRAM_AUTH_FLOW_PROFILE_LINK,
      targetUserId: userId,
    });
    const botLink = TELEGRAM_BOT_USERNAME
      ? `https://t.me/${encodeURIComponent(
          TELEGRAM_BOT_USERNAME,
        )}?start=${encodeURIComponent(`site_login_${request.code}`)}`
      : null;
    return res.status(201).json({
      success: true,
      requestId: request.id,
      code: request.code,
      command: `/site_login ${request.code}`,
      expiresAt: request.expiresAt,
      botLink,
      botUsername: TELEGRAM_BOT_USERNAME || null,
    });
  } catch (error) {
    console.error("Home profile telegram start error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РїСѓСЃС‚РёС‚СЊ РїСЂРёРІСЏР·РєСѓ Telegram.",
    });
  }
});
app.get("/api/home/profile/telegram/status", authenticateHomeToken, async (req, res) => {
  const requestId = normalizeText(req.query?.requestId);
  if (!requestId) {
    return res.status(400).json({
      success: false,
      done: true,
      message: "РЈРєР°Р¶РёС‚Рµ requestId.",
    });
  }
  try {
    const userId = normalizeText(req.homeUser?.userId);
    if (!userId) return res.sendStatus(401);
    markExpiredTelegramAuthRequests();
    const row = getTelegramAuthRequestById(requestId);
    if (!row) {
      return res.status(404).json({
        success: false,
        done: true,
        message: "РЎРµСЃСЃРёСЏ РїСЂРёРІСЏР·РєРё Telegram РЅРµ РЅР°Р№РґРµРЅР°.",
      });
    }
    if (
      normalizeText(row.flow || TELEGRAM_AUTH_FLOW_LOGIN) !==
      TELEGRAM_AUTH_FLOW_PROFILE_LINK
    ) {
      return res.status(409).json({
        success: false,
        done: true,
        message: "Р­С‚РѕС‚ Р·Р°РїСЂРѕСЃ Telegram РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє РґСЂСѓРіРѕРјСѓ СЃС†РµРЅР°СЂРёСЋ.",
      });
    }
    if (normalizeText(row.targetUserId) !== userId) {
      return res.status(403).json({
        success: false,
        done: true,
        message: "Р­С‚РѕС‚ Р·Р°РїСЂРѕСЃ РїСЂРёРІСЏР·РєРё СЃРѕР·РґР°РЅ РґР»СЏ РґСЂСѓРіРѕРіРѕ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ.",
      });
    }
    if (row.status === TELEGRAM_AUTH_STATUS_COMPLETED) {
      const safeTelegramId = normalizeText(row.telegramId);
      if (!safeTelegramId) {
        updateTelegramAuthRequestById(requestId, {
          status: TELEGRAM_AUTH_STATUS_FAILED,
          errorMessage: "Telegram ID РЅРµ РїРѕР»СѓС‡РµРЅ. Р—Р°РїСѓСЃС‚РёС‚Рµ РїСЂРёРІСЏР·РєСѓ Р·Р°РЅРѕРІРѕ.",
        });
        return res.status(409).json({
          success: false,
          done: true,
          message: "Telegram ID РЅРµ РїРѕР»СѓС‡РµРЅ. Р—Р°РїСѓСЃС‚РёС‚Рµ РїСЂРёРІСЏР·РєСѓ Р·Р°РЅРѕРІРѕ.",
        });
      }
      const telegramIdAsNumber = toTelegramIdNumber(safeTelegramId);
      if (telegramIdAsNumber === null) {
        updateTelegramAuthRequestById(requestId, {
          status: TELEGRAM_AUTH_STATUS_FAILED,
          errorMessage: "РќРµРєРѕСЂСЂРµРєС‚РЅС‹Р№ Telegram ID.",
        });
        return res.status(409).json({
          success: false,
          done: true,
          message: "РќРµРєРѕСЂСЂРµРєС‚РЅС‹Р№ Telegram ID. Р—Р°РїСѓСЃС‚РёС‚Рµ РїСЂРёРІСЏР·РєСѓ Р·Р°РЅРѕРІРѕ.",
        });
      }
      const current = await prisma.users.findUnique({
        where: { id: userId },
        select: HOME_PROFILE_SELECT,
      });
      if (
        !current ||
        current.homeIsActive === false ||
        !normalizeText(current.homePasswordHash) ||
        !normalizeText(current.homePasswordSalt)
      ) {
        return res.sendStatus(401);
      }
      const linkedUser = await findHomeUserByTelegramId(safeTelegramId);
      if (linkedUser && linkedUser.id !== userId) {
        updateTelegramAuthRequestById(requestId, {
          status: TELEGRAM_AUTH_STATUS_FAILED,
          errorMessage: "Р­С‚РѕС‚ Telegram СѓР¶Рµ РїСЂРёРІСЏР·Р°РЅ Рє РґСЂСѓРіРѕРјСѓ Р°РєРєР°СѓРЅС‚Сѓ.",
        });
        return res.json({
          success: false,
          done: true,
          message: "Р­С‚РѕС‚ Telegram СѓР¶Рµ РїСЂРёРІСЏР·Р°РЅ Рє РґСЂСѓРіРѕРјСѓ Р°РєРєР°СѓРЅС‚Сѓ.",
        });
      }
      const updated = await prisma.users.update({
        where: { id: userId },
        data: {
          TelegramID: telegramIdAsNumber,
          homeUpdatedAt: new Date().toISOString(),
          homeTelegramChangedAt: new Date().toISOString(),
        },
        select: HOME_PROFILE_SELECT,
      });
      try {
        deleteTelegramAuthRequestById(requestId);
      } catch (cleanupError) {
        console.warn(
          "Telegram profile link request cleanup warning:",
          cleanupError?.message || cleanupError,
        );
      }
      return res.json({
        success: true,
        done: true,
        user: toPublicHomeProfile(updated),
      });
    }
    if (
      row.status === TELEGRAM_AUTH_STATUS_FAILED ||
      row.status === TELEGRAM_AUTH_STATUS_EXPIRED
    ) {
      return res.json({
        success: false,
        done: true,
        status: row.status,
        message:
          normalizeText(row.errorMessage) ||
          (row.status === TELEGRAM_AUTH_STATUS_EXPIRED
            ? "РљРѕРґ РїСЂРёРІСЏР·РєРё Telegram РёСЃС‚РµРє. Р—Р°РїСЂРѕСЃРёС‚Рµ РЅРѕРІС‹Р№."
            : "РџСЂРёРІСЏР·РєР° Telegram Р·Р°РІРµСЂС€РёР»Р°СЃСЊ СЃ РѕС€РёР±РєРѕР№."),
      });
    }
    return res.json({
      success: true,
      done: false,
      status: row.status,
      expiresAt: row.expiresAt || null,
      updatedAt: row.updatedAt || null,
    });
  } catch (error) {
    console.error("Home profile telegram status error:", error);
    return res.status(500).json({
      success: false,
      done: true,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРѕРІРµСЂРёС‚СЊ РїСЂРёРІСЏР·РєСѓ Telegram.",
    });
  }
});
app.post("/api/home/profile/telegram/unlink", authenticateHomeToken, async (req, res) => {
  try {
    const userId = normalizeText(req.homeUser?.userId);
    if (!userId) return res.sendStatus(401);
    const current = await prisma.users.findUnique({
      where: { id: userId },
      select: HOME_PROFILE_SELECT,
    });
    if (
      !current ||
      current.homeIsActive === false ||
      !normalizeText(current.homePasswordHash) ||
      !normalizeText(current.homePasswordSalt)
    ) {
      return res.sendStatus(401);
    }
    const updated = await prisma.users.update({
      where: { id: userId },
      data: {
        TelegramID: null,
        homeUpdatedAt: new Date().toISOString(),
        homeTelegramChangedAt: null,
      },
      select: HOME_PROFILE_SELECT,
    });
    return res.json({
      success: true,
      user: toPublicHomeProfile(updated),
    });
  } catch (error) {
    console.error("Home profile telegram unlink error:", error);
    return res.status(500).json({
      success: false,
      message: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РІСЏР·Р°С‚СЊ Telegram.",
    });
  }
});
app.get("/api/home/barbers", authenticateHomeToken, async (req, res) => {
  try {
    const [barbers, servicesCatalog] = await Promise.all([
      prisma.barbers.findMany({
        where: { isActive: true },
        select: {
          id: true,
          name: true,
          nickname: true,
          description: true,
          color: true,
          rating: true,
          orderIndex: true,
          avatarUrl: true,
          cardImageUrl: true,
          cardTitle: true,
          cardPhrase: true,
        },
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      }),
      getServiceCatalog(false),
    ]);
    const getBarberServicesCount = (barberId) =>
      servicesCatalog.reduce((count, service) => {
        const rawPrice = service?.prices?.[barberId] ?? service?.prices?.[String(barberId)];
        const price = Number(rawPrice);
        return Number.isFinite(price) && price > 0 ? count + 1 : count;
      }, 0);
    const barbersWithServices = barbers
      .map((barber) => ({
        ...barber,
        servicesCount: getBarberServicesCount(barber.id),
      }))
      .filter((barber) => barber.servicesCount > 0);
    const fallbackImage = "/Image/card/Barber_photo.png";
    const payload = barbersWithServices.map((barber) => {
      const displayName =
        normalizeText(barber.cardTitle) ||
        normalizeText(barber.nickname) ||
        normalizeText(barber.name) ||
        "Р‘Р°СЂР±РµСЂ";
      const cardImage = resolveHomeAssetPath(barber.cardImageUrl);
      const avatarImage = resolveHomeAssetPath(barber.avatarUrl);
      return {
        id: barber.id,
        name: displayName,
        fullName: normalizeText(barber.name) || displayName,
        description: normalizeText(barber.description),
        color: normalizeText(barber.color) || "#17c8c0",
        rating: normalizeText(barber.rating),
        originalImageUrl: avatarImage || cardImage || fallbackImage,
        imageUrl: cardImage || avatarImage || fallbackImage,
        thumbnailUrl: avatarImage || cardImage || fallbackImage,
        phrase: normalizeText(barber.cardPhrase) || normalizeText(barber.description),
        servicesCount: barber.servicesCount,
      };
    });
    return res.json({ barbers: payload });
  } catch (error) {
    console.error("Home barbers load error:", error);
    return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ." });
  }
});
app.get("/api/home/booking/services", authenticateHomeToken, async (req, res) => {
  try {
    const homeUser = await resolveHomeBookingUser(req);
    if (!homeUser) return res.sendStatus(401);
    const barberId = normalizeText(req.query?.barberId);
    if (!barberId) {
      return res.status(400).json({ error: "РЈРєР°Р¶РёС‚Рµ barberId РІС‹Р±СЂР°РЅРЅРѕРіРѕ Р±Р°СЂР±РµСЂР°." });
    }

    const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
      getHomeBookingSettings(),
      countHomeUserActiveAppointments(homeUser.id),
      getBarbers({ includeInactive: false }),
      getServiceCatalog(false),
    ]);
    const barber = barbers.find((item) => normalizeText(item.id) === barberId);
    if (!barber) {
      return res.status(404).json({ error: "Р‘Р°СЂР±РµСЂ РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const services = resolveBookableServicesForBarber(servicesCatalog, barber.id);
    const canBook = activeAppointments < settings.bookingLimit;
    const message = canBook
      ? ""
      : `РЈ РІР°СЃ СѓР¶Рµ РµСЃС‚СЊ ${settings.bookingLimit} Р°РєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№.`;

    return res.json({
      canBook,
      message,
      bookingLimit: settings.bookingLimit,
      activeAppointments,
      barber: {
        id: barber.id,
        name: normalizeText(barber.name),
        phrase: normalizeText(barber.cardPhrase) || normalizeText(barber.description),
      },
      services,
    });
  } catch (error) {
    console.error("Home booking services error:", error);
    return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СѓСЃР»СѓРіРё РґР»СЏ Р·Р°РїРёСЃРё." });
  }
});
app.get("/api/home/booking/dates", authenticateHomeToken, async (req, res) => {
  try {
    const homeUser = await resolveHomeBookingUser(req);
    if (!homeUser) return res.sendStatus(401);
    const barberId = normalizeText(req.query?.barberId);
    const serviceIds = parseServiceIdsInput(req.query?.serviceIds);
    if (!barberId || !serviceIds.length) {
      return res.status(400).json({ error: "Р’С‹Р±РµСЂРёС‚Рµ Р±Р°СЂР±РµСЂР° Рё СѓСЃР»СѓРіСѓ." });
    }

    const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
      getHomeBookingSettings(),
      countHomeUserActiveAppointments(homeUser.id),
      getBarbers({ includeInactive: false }),
      getServiceCatalog(false),
    ]);
    if (activeAppointments >= settings.bookingLimit) {
      return res.status(409).json({
        error: `РЈ РІР°СЃ СѓР¶Рµ РµСЃС‚СЊ ${settings.bookingLimit} Р°РєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№.`,
      });
    }
    const barber = barbers.find((item) => normalizeText(item.id) === barberId);
    if (!barber) {
      return res.status(404).json({ error: "Р‘Р°СЂР±РµСЂ РЅРµ РЅР°Р№РґРµРЅ." });
    }

    const bookableServices = resolveBookableServicesForBarber(servicesCatalog, barber.id);
    const selectedServices = serviceIds
      .map((id) => bookableServices.find((service) => service.id === id))
      .filter(Boolean);
    if (!selectedServices.length) {
      return res.status(400).json({ error: "РЈ РІС‹Р±СЂР°РЅРЅРѕРіРѕ Р±Р°СЂР±РµСЂР° РЅРµС‚ С‚Р°РєРѕР№ СѓСЃР»СѓРіРё." });
    }

    const totalDuration = Math.max(
      selectedServices.reduce((sum, service) => sum + Math.max(0, Number(service.duration) || 0), 0),
      15,
    );
    const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
    const dateWindow = buildDateWindow(settings.maxDaysAhead);
    const dates = [];

    for (const entry of dateWindow) {
      const workingHours = await getWorkingHoursForBarberDate(prisma, barber.name, entry.key);
      if (!workingHours) continue;
      const busyIntervals = await getBusyIntervalsForBarberDate(prisma, barber.name, entry.key);
      const slots = buildTimeSlotsForDate({
        dateKey: entry.key,
        workingHours,
        busyIntervals,
        totalDuration,
        minAllowedDate,
      });
      if (slots.length) dates.push(entry.key);
    }

    return res.json({
      dateCount: dates.length,
      dates,
      totalDuration,
      services: selectedServices,
    });
  } catch (error) {
    console.error("Home booking dates error:", error);
    return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ РґРѕСЃС‚СѓРїРЅС‹Рµ РґР°С‚С‹." });
  }
});
app.get("/api/home/booking/times", authenticateHomeToken, async (req, res) => {
  try {
    const homeUser = await resolveHomeBookingUser(req);
    if (!homeUser) return res.sendStatus(401);
    const barberId = normalizeText(req.query?.barberId);
    const serviceIds = parseServiceIdsInput(req.query?.serviceIds);
    const dateKey = normalizeText(req.query?.date);
    if (!barberId || !serviceIds.length || !dateKey) {
      return res.status(400).json({ error: "Р’С‹Р±РµСЂРёС‚Рµ СѓСЃР»СѓРіСѓ Рё РґР°С‚Сѓ." });
    }
    if (!isIsoDateKey(dateKey)) {
      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅР°СЏ РґР°С‚Р°." });
    }

    const [settings, activeAppointments, barbers, servicesCatalog] = await Promise.all([
      getHomeBookingSettings(),
      countHomeUserActiveAppointments(homeUser.id),
      getBarbers({ includeInactive: false }),
      getServiceCatalog(false),
    ]);
    if (activeAppointments >= settings.bookingLimit) {
      return res.status(409).json({
        error: `РЈ РІР°СЃ СѓР¶Рµ РµСЃС‚СЊ ${settings.bookingLimit} Р°РєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№.`,
      });
    }
    const barber = barbers.find((item) => normalizeText(item.id) === barberId);
    if (!barber) {
      return res.status(404).json({ error: "Р‘Р°СЂР±РµСЂ РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const bookableServices = resolveBookableServicesForBarber(servicesCatalog, barber.id);
    const selectedServices = serviceIds
      .map((id) => bookableServices.find((service) => service.id === id))
      .filter(Boolean);
    if (!selectedServices.length) {
      return res.status(400).json({ error: "РЈ РІС‹Р±СЂР°РЅРЅРѕРіРѕ Р±Р°СЂР±РµСЂР° РЅРµС‚ С‚Р°РєРѕР№ СѓСЃР»СѓРіРё." });
    }

    const totalDuration = Math.max(
      selectedServices.reduce((sum, service) => sum + Math.max(0, Number(service.duration) || 0), 0),
      15,
    );
    const workingHours = await getWorkingHoursForBarberDate(prisma, barber.name, dateKey);
    if (!workingHours) {
      return res.json({ date: dateKey, totalDuration, times: [] });
    }
    const busyIntervals = await getBusyIntervalsForBarberDate(prisma, barber.name, dateKey);
    const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);
    const times = buildTimeSlotsForDate({
      dateKey,
      workingHours,
      busyIntervals,
      totalDuration,
      minAllowedDate,
    });

    return res.json({
      date: dateKey,
      totalDuration,
      times,
    });
  } catch (error) {
    console.error("Home booking times error:", error);
    return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ РґРѕСЃС‚СѓРїРЅРѕРµ РІСЂРµРјСЏ." });
  }
});
app.post("/api/home/booking/appointments", authenticateHomeToken, async (req, res) => {
  try {
    const homeUser = await resolveHomeBookingUser(req);
    if (!homeUser) return res.sendStatus(401);

    const barberId = normalizeText(req.body?.barberId);
    const serviceIds = parseServiceIdsInput(req.body?.serviceIds);
    const dateKey = normalizeText(req.body?.date);
    const startTime = normalizeText(req.body?.startTime);
    if (!barberId || !serviceIds.length || !dateKey || !startTime) {
      return res.status(400).json({ error: "Р—Р°РїРѕР»РЅРёС‚Рµ Р±Р°СЂР±РµСЂР°, СѓСЃР»СѓРіСѓ, РґР°С‚Сѓ Рё РІСЂРµРјСЏ." });
    }
    if (!isIsoDateKey(dateKey)) {
      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅР°СЏ РґР°С‚Р°." });
    }
    const startMinute = parseTimeLabelToMinutes(startTime);
    if (startMinute == null) {
      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅРѕРµ РІСЂРµРјСЏ." });
    }

    const [settings, barbers, servicesCatalog] = await Promise.all([
      getHomeBookingSettings(),
      getBarbers({ includeInactive: false }),
      getServiceCatalog(false),
    ]);
    const barber = barbers.find((item) => normalizeText(item.id) === barberId);
    if (!barber) {
      return res.status(404).json({ error: "Р‘Р°СЂР±РµСЂ РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const bookableServices = resolveBookableServicesForBarber(servicesCatalog, barber.id);
    const selectedServices = serviceIds
      .map((id) => bookableServices.find((service) => service.id === id))
      .filter(Boolean);
    if (!selectedServices.length) {
      return res.status(400).json({ error: "РЈ РІС‹Р±СЂР°РЅРЅРѕРіРѕ Р±Р°СЂР±РµСЂР° РЅРµС‚ С‚Р°РєРѕР№ СѓСЃР»СѓРіРё." });
    }
    const totalDuration = Math.max(
      selectedServices.reduce((sum, service) => sum + Math.max(0, Number(service.duration) || 0), 0),
      15,
    );
    const minAllowedDate = new Date(Date.now() + settings.minLeadHours * 60 * 60 * 1000);

    let createdAppointment = null;
    try {
      createdAppointment = await prisma.$transaction(async (tx) => {
        const activeRows = await tx.appointments.findMany({
          where: { UserID: homeUser.id },
          select: { Status: true },
        });
        const activeCount = activeRows.reduce(
          (acc, row) => (isActiveStatus(row?.Status) ? acc + 1 : acc),
          0,
        );
        if (activeCount >= settings.bookingLimit) {
          throw new Error("LIMIT_REACHED");
        }

        const workingHours = await getWorkingHoursForBarberDate(tx, barber.name, dateKey);
        if (!workingHours) {
          throw new Error("NO_SCHEDULE");
        }
        const [startDay, endDay] = workingHours;
        if (startMinute < startDay || startMinute + totalDuration > endDay) {
          throw new Error("OUTSIDE_WORKING_HOURS");
        }

        const startLabel = formatMinutesAsClock(startMinute);
        const endLabel = formatMinutesAsClock(startMinute + totalDuration);
        const startDate = new Date(`${dateKey}T${startLabel}:00`);
        if (Number.isNaN(startDate.getTime()) || startDate < minAllowedDate) {
          throw new Error("LEAD_TIME");
        }

        const busyIntervals = await getBusyIntervalsForBarberDate(tx, barber.name, dateKey);
        if (!canFitTimeRange(startMinute, totalDuration, busyIntervals)) {
          throw new Error("SLOT_TAKEN");
        }

        return tx.appointments.create({
          data: {
            id: randomUUID(),
            UserID: homeUser.id,
            CustomerName: homeUser.displayName || homeUser.phone || "РљР»РёРµРЅС‚",
            Phone: homeUser.phone || null,
            Barber: barber.name,
            Date: dateKey,
            Time: `${startLabel} - ${endLabel}`,
            Status: "РђРєС‚РёРІРЅР°СЏ",
            Services: selectedServices.map((service) => service.name).join(", "),
            Reminder2hClientSent: false,
            Reminder2hBarberSent: false,
          },
        });
      });
    } catch (error) {
      if (error?.message === "LIMIT_REACHED") {
        return res
          .status(409)
          .json({ error: `РЈ РІР°СЃ СѓР¶Рµ РµСЃС‚СЊ ${settings.bookingLimit} Р°РєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№.` });
      }
      if (error?.message === "NO_SCHEDULE") {
        return res.status(409).json({ error: "РќР° РІС‹Р±СЂР°РЅРЅСѓСЋ РґР°С‚Сѓ Сѓ Р±Р°СЂР±РµСЂР° РЅРµС‚ СЂР°СЃРїРёСЃР°РЅРёСЏ." });
      }
      if (error?.message === "OUTSIDE_WORKING_HOURS") {
        return res.status(409).json({ error: "Р’СЂРµРјСЏ РІС‹С…РѕРґРёС‚ Р·Р° СЂР°Р±РѕС‡РёР№ РґРёР°РїР°Р·РѕРЅ Р±Р°СЂР±РµСЂР°." });
      }
      if (error?.message === "LEAD_TIME") {
        return res.status(409).json({ error: "Р­С‚Рѕ РІСЂРµРјСЏ РЅРµРґРѕСЃС‚СѓРїРЅРѕ РёР·-Р·Р° РѕРіСЂР°РЅРёС‡РµРЅРёСЏ minLeadHours." });
      }
      if (error?.message === "SLOT_TAKEN") {
        return res.status(409).json({ error: "РЎР»РѕС‚ СѓР¶Рµ Р·Р°РЅСЏС‚. Р’С‹Р±РµСЂРёС‚Рµ РґСЂСѓРіРѕРµ РІСЂРµРјСЏ." });
      }
      throw error;
    }

    return res.status(201).json({
      appointment: {
        id: createdAppointment.id,
        barberName: createdAppointment.Barber,
        date: createdAppointment.Date,
        time: createdAppointment.Time,
        services: createdAppointment.Services,
      },
    });
  } catch (error) {
    console.error("Home booking create error:", error);
    return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ Р·Р°РїРёСЃСЊ." });
  }
});
app.use("/api", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
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

app.get("/api/license/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РґРѕСЃС‚СѓРїР° Рє Р»РёС†РµРЅР·РёРё." });
  }
  try {
    const status = await ensureLicenseValid();
    res.json(status);
  } catch (error) {
    res.status(403).json({
      error: "Р›РёС†РµРЅР·РёСЏ РЅРµРґРµР№СЃС‚РІРёС‚РµР»СЊРЅР°. РџСЂРѕРІРµСЂСЊС‚Рµ РєР»СЋС‡ Рё РїРѕРІС‚РѕСЂРёС‚Рµ РїРѕРїС‹С‚РєСѓ.",
      details: error.message,
      status: getLicenseStatus(),
    });
  }
});
app.get("/api/bot/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРїСЂР°РІР»РµРЅРёСЏ Р±РѕС‚РѕРј." });
  }
  const settings = await getBotSettings();
  const token = await readBotToken();
  res.json({ status: serializeBotRuntime(), settings, token });
});
app.post("/api/bot/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРїСЂР°РІР»РµРЅРёСЏ Р±РѕС‚РѕРј." });
  }
  const { action, isBotEnabled } = req.body || {};
  try {
    const currentSettings = await ensureBotSettingsRecord();
    if (typeof isBotEnabled === "boolean") {
      await prisma.botSettings.update({
        where: { id: currentSettings.id },
        data: { isBotEnabled, lastSyncSource: "site" },
      });
    }
    let actionHandled = false;
    if (action === "start") {
      await startBotProcess();
      actionHandled = true;
    } else if (action === "stop") {
      await stopBotProcess();
      actionHandled = true;
    } else if (action === "restart") {
      await stopBotProcess();
      await startBotProcess();
      actionHandled = true;
    }
    if (!actionHandled) {
      await ensureBotProcessState();
    }
    const settings = await getBotSettings();
    res.json({ status: serializeBotRuntime(), settings });
  } catch (error) {
    console.error("Bot status update failed:", error);
    res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РёР·РјРµРЅРёС‚СЊ СЃС‚Р°С‚СѓСЃ Р±РѕС‚Р°." });
  }
});

app.put("/api/bot/token", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ С‚РѕРєРµРЅР°." });
  }
  const candidate = normalizeText(req.body?.token);
  if (!candidate) {
    return res.status(400).json({ error: "РЈРєР°Р¶РёС‚Рµ С‚РѕРєРµРЅ Р±РѕС‚Р°." });
  }
  try {
    const token = await writeBotToken(candidate);
    if (botRuntime.running) {
      await stopBotProcess();
      await startBotProcess();
    }
    res.json({ token });
  } catch (error) {
    console.error("Bot token update failed:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ С‚РѕРєРµРЅ Р±РѕС‚Р°." });
  }
});

app.get("/api/system/update", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РїСЂРѕРІРµСЂРєРё РѕР±РЅРѕРІР»РµРЅРёР№." });
  }
  try {
    const force = req.query.force === "1" || req.query.force === "true";
    const info = await checkForUpdates(force);
    res.json(info);
  } catch (error) {
    console.error("Update check error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРѕРІРµСЂРёС‚СЊ РѕР±РЅРѕРІР»РµРЅРёСЏ.",
      details: error.message,
    });
  }
});
app.post("/api/system/update", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓСЃС‚Р°РЅРѕРІРєРё РѕР±РЅРѕРІР»РµРЅРёР№." });
  }
  if (updateInProgress) {
    return res
      .status(429)
      .json({ error: "РћР±РЅРѕРІР»РµРЅРёРµ СѓР¶Рµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ." });
  }
  try {
    console.log("[update] /api/system/update: user", req.identity?.username || "unknown");
    const result = await performSystemUpdate();
    const info = await checkForUpdates(true);
    res.json({ ...result, info, restarting: true });
    scheduleSelfRestart();
  } catch (error) {
    console.error("Update apply error:", error);
    await appendUpdateAlert("System update failed", {
      user: req.identity?.username || "unknown",
      error: error?.message || String(error),
    });
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРёРјРµРЅРёС‚СЊ РѕР±РЅРѕРІР»РµРЅРёРµ.",
      details: error.message,
    });
  }
});
app.post("/api/system/restart", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РїРµСЂРµР·Р°РїСѓСЃРєР° СЃРёСЃС‚РµРјС‹." });
  }
  if (updateInProgress || restartScheduled) {
    return res
      .status(429)
      .json({ error: "РџРµСЂРµР·Р°РїСѓСЃРє РёР»Рё РѕР±РЅРѕРІР»РµРЅРёРµ СѓР¶Рµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ." });
  }
  try {
    console.log(
      "[restart] /api/system/restart: user",
      req.identity?.username || "unknown",
    );
    scheduleSelfRestart(400);
    res.json({ restarting: true });
  } catch (error) {
    console.error("[restart] Failed to schedule restart:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РїР»Р°РЅРёСЂРѕРІР°С‚СЊ РїРµСЂРµР·Р°РїСѓСЃРє.",
      details: error.message,
    });
  }
});
app.get("/api/dashboard/overview", authenticateToken, async (req, res) => {
  try {
    const snapshot = await buildDashboardSnapshot(req.identity);
    res.json(snapshot);
  } catch (error) {
    console.error("Dashboard snapshot error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РѕР±Р·РѕСЂ РґР°С€Р±РѕСЂРґР°." });
  }
});
app.get("/api/services/full", authenticateToken, async (req, res) => {
  try {
    const services = await getServiceCatalog(true, req.identity);
    const barbers = filterBarbersForIdentity(
      await getBarbers({ includeInactive: true }),
      req.identity,
    );
    res.json({ services, barbers });
  } catch (error) {
    console.error("Services fetch error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ СЃРїРёСЃРѕРє СѓСЃР»СѓРі." });
  }
});
app.get("/api/assets/avatars", authenticateToken, async (req, res) => {
  try {
    const images = await listAvatarImages();
    res.json({ images });
  } catch (error) {
    console.error("Avatar assets error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ СЃРїРёСЃРѕРє РёР·РѕР±СЂР°Р¶РµРЅРёР№." });
  }
});

app.post("/api/assets/avatars/upload", authenticateToken, async (req, res) => {
  try {
    const { name, data } = req.body || {};
    if (!data) {
      return res
        .status(400)
        .json({ error: "РќРµ РїРµСЂРµРґР°РЅС‹ РґР°РЅРЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ." });
    }
    const sanitizedName = buildSafeImageFilename(name || `avatar-${Date.now()}.png`);
    if (!sanitizedName) {
      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅРѕРµ РёРјСЏ С„Р°Р№Р»Р°." });
    }
    await fs.ensureDir(IMAGE_DIR);
    const buffer = decodeBase64Image(data);
    if (!buffer.length) {
      return res.status(400).json({ error: "Р¤Р°Р№Р» РїСѓСЃС‚." });
    }
    if (buffer.length > MAX_AVATAR_FILE_SIZE) {
      return res
        .status(400)
        .json({
          error: `Р¤Р°Р№Р» СЃР»РёС€РєРѕРј Р±РѕР»СЊС€РѕР№ (РґРѕ ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} РњР‘).`,
        });
    }
    const filename = await ensureUniqueImageName(sanitizedName);
    await fs.writeFile(path.join(IMAGE_DIR, filename), buffer);
    const images = await listAvatarImages();
    res.json({ success: true, path: `/Image/${filename}`, images });
  } catch (error) {
    console.error("Avatar upload error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РёР·РѕР±СЂР°Р¶РµРЅРёРµ.",
      details: error.message,
    });
  }
});



app.post("/api/assets/cards/upload", authenticateToken, async (req, res) => {
  try {
    const { barberId, name, data } = req.body || {};
    if (!barberId || !data) {
      return res.status(400).json({ error: "РќРµ С…РІР°С‚Р°РµС‚ id Р±Р°СЂР±РµСЂР° РёР»Рё С„Р°Р№Р»Р° РєР°СЂС‚РѕС‡РєРё." });
    }
    const safeExtName = buildSafeImageFilename(name || `card-${barberId}.png`) || null;
    const baseSafeId = normalizeText(String(barberId)).replace(/[^a-z0-9_-]/gi, "") || "card";
    const ext = safeExtName ? path.extname(safeExtName) || ".png" : ".png";
    const filename = `card-${baseSafeId}${ext.toLowerCase()}`;
    await fs.ensureDir(CARD_IMAGE_DIR);
    const buffer = decodeBase64Image(data);
    if (!buffer.length) {
      return res.status(400).json({ error: "Р¤Р°Р№Р» РїСѓСЃС‚." });
    }
    const targetPath = path.join(CARD_IMAGE_DIR, filename);
    await fs.writeFile(targetPath, buffer);
    res.json({ success: true, path: `/Image/tgbot/${filename}` });
  } catch (error) {
    console.error("Card upload error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ РєР°СЂС‚РѕС‡РєСѓ Р±Р°СЂР±РµСЂР°.",
      details: error.message,
    });
  }
});

app.delete("/api/assets/avatars", authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body || {};
    if (!filename) {
      return res.status(400).json({ error: "РќРµ СѓРєР°Р·Р°РЅРѕ РёРјСЏ С„Р°Р№Р»Р°." });
    }
    const sanitizedName = getExistingImageFilename(filename);
    if (!sanitizedName) {
      return res.status(400).json({ error: "Р¤Р°Р№Р» РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const targetPath = path.join(IMAGE_DIR, sanitizedName);
    if (!(await fs.pathExists(targetPath))) {
      return res.status(404).json({ error: "Р¤Р°Р№Р» РѕС‚СЃСѓС‚СЃС‚РІСѓРµС‚ РЅР° СЃРµСЂРІРµСЂРµ." });
    }
    await fs.remove(targetPath);
    const images = await listAvatarImages();
    res.json({ success: true, images });
  } catch (error) {
    console.error("Avatar delete error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ РёР·РѕР±СЂР°Р¶РµРЅРёРµ.",
      details: error.message,
    });
  }
});

app.get("/api/bot/menu/images", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
  try {
    const images = await listMenuImages();
    res.json({ images });
  } catch (error) {
    console.error("Bot menu images fetch error:", error);
    res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РіР°Р»РµСЂРµСЋ РјРµРЅСЋ." });
  }
});

app.post("/api/bot/menu/images", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
  try {
    const { name, data } = req.body || {};
    if (!data) {
      return res
        .status(400)
        .json({ error: "РќРµ РїРµСЂРµРґР°РЅС‹ РґР°РЅРЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ." });
    }
    const sanitizedName = buildSafeImageFilename(name || `menu-${Date.now()}.png`);
    if (!sanitizedName) {
      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅРѕРµ РёРјСЏ С„Р°Р№Р»Р°." });
    }
    await fs.ensureDir(MENU_IMAGE_DIR);
    const buffer = decodeBase64Image(data);
    if (!buffer.length) {
      return res.status(400).json({ error: "Р¤Р°Р№Р» РїСѓСЃС‚." });
    }
    if (buffer.length > MAX_AVATAR_FILE_SIZE) {
      return res.status(400).json({
        error: `Р¤Р°Р№Р» СЃР»РёС€РєРѕРј Р±РѕР»СЊС€РѕР№ (РґРѕ ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} РњР‘).`,
      });
    }
    const filename = await ensureUniqueImageName(sanitizedName, MENU_IMAGE_DIR);
    await fs.writeFile(path.join(MENU_IMAGE_DIR, filename), buffer);
    const images = await listMenuImages();
    res.json({ success: true, path: `/Image/menu_bots/${filename}`, images });
  } catch (error) {
    console.error("Bot menu image upload error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РјРµРЅСЋ.",
      details: error.message,
    });
  }
});

app.get("/api/bot/menu", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
  try {
    const menu = await loadBotMenu();
    res.json(menu);
  } catch (error) {
    console.error("Bot menu fetch error:", error);
    res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
});

app.put("/api/bot/menu", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
  const payload = req.body || {};
  try {
    const normalized = await saveBotMenu(payload);
    res.json(normalized);
  } catch (error) {
    console.error("Bot menu save error:", error);
    res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ РјРµРЅСЋ Р±РѕС‚Р°." });
  }
});

app.get("/api/bot/messages", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ СЃРѕРѕР±С‰РµРЅРёР№ Р±РѕС‚Р°." });
  }
  try {
    const messages = await prisma.botMessages.findMany({
      orderBy: [{ code: "asc" }, { title: "asc" }],
    });
    res.json(messages);
  } catch (error) {
    console.error("Bot messages fetch error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃРѕРѕР±С‰РµРЅРёСЏ Р±РѕС‚Р°." });
  }
});

app.put("/api/bot/messages/:id", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ СЃРѕРѕР±С‰РµРЅРёР№ Р±РѕС‚Р°." });
  }
  const { id } = req.params;
  const payload = req.body || {};
  try {
    const data = {
      code: payload.code ? normalizeText(payload.code) : undefined,
      title: payload.title ?? undefined,
      text: payload.text ?? "",
    };
    if (!data.text.trim()) {
      return res
        .status(400)
        .json({ error: "РўРµРєСЃС‚ СЃРѕРѕР±С‰РµРЅРёСЏ РЅРµ РјРѕР¶РµС‚ Р±С‹С‚СЊ РїСѓСЃС‚С‹Рј." });
    }
    const updated = await prisma.botMessages.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error("Bot message update error:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РЅР°Р№РґРµРЅРѕ." });
    }
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ СЃРѕРѕР±С‰РµРЅРёРµ." });
  }
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
  const clientId = randomUUID();
  const client = { id: clientId, res };
  realtimeClients.add(client);
  if (lastRealtimeEventString) {
    res.write(lastRealtimeEventString);
  } else {
    requestRealtimePush(true);
  }
  const keepAlive = setInterval(() => {
    try {
      res.write(":keep-alive\n\n");
    } catch (error) {
      clearInterval(keepAlive);
      realtimeClients.delete(client);
    }
  }, REALTIME_KEEPALIVE_MS);
  req.on("close", () => {
    clearInterval(keepAlive);
    realtimeClients.delete(client);
  });
});
const upsertServiceWithPrices = async (serviceId, payload) => {
  const { prices = {}, ...serviceData } = payload;
  let savedService;
  await prisma.$transaction(async (tx) => {
    const baseData = {
      name: serviceData.name,
      description: serviceData.description || "",
      category: serviceData.category || null,
      duration: Number(serviceData.duration) || 0,
      isActive: serviceData.isActive !== false,
      orderIndex: Number(serviceData.orderIndex) || 0,
    };
    if (serviceId) {
      savedService = await tx.services.update({
        where: { id: serviceId },
        data: baseData,
      });
    } else {
      savedService = await tx.services.create({
        data: { id: randomUUID(), ...baseData },
      });
    }
    await tx.servicePrices.deleteMany({
      where: { serviceId: savedService.id },
    });
    const entries = Object.entries(prices)
      .filter(
        ([_, value]) =>
          value !== null && value !== "" && !Number.isNaN(Number(value)),
      )
      .map(([barberId, value]) => ({
        id: randomUUID(),
        serviceId: savedService.id,
        barberId,
        price: Number(value),
      }));
    if (entries.length) {
      await tx.servicePrices.createMany({ data: entries });
    }
  });
  return savedService;
};
app.post("/api/services/full", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ СѓСЃР»СѓРі." });
  }
  try {
    await upsertServiceWithPrices(null, req.body || {});
    const services = await getServiceCatalog(true);
    res.status(201).json({ services });
  } catch (error) {
    console.error("Create service error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ СѓСЃР»СѓРіСѓ." });
  }
});
app.put("/api/services/full/:id", authenticateToken, async (req, res) => {

  const isOwner = isOwnerRequest(req);

  const isStaff = isStaffIdentity(req.identity);

  if (!isOwner && !isStaff) {

    return res

      .status(403)

      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ СѓСЃР»СѓРі." });

  }

  if (isOwner) {

    try {

      await upsertServiceWithPrices(req.params.id, req.body || {});

      const services = await getServiceCatalog(true);

      return res.json({ services });

    } catch (error) {

      console.error("Update service error:", error);

      return res

        .status(500)

        .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ СѓСЃР»СѓРіСѓ." });

    }

  }

  const staffBarberId = req.identity?.barberId;

  if (!staffBarberId) {

    return res

      .status(403)

      .json({ error: "РџСЂРѕС„РёР»СЊ СЃРѕС‚СЂСѓРґРЅРёРєР° РЅРµ РїСЂРёРІСЏР·Р°РЅ Рє Р±Р°СЂР±РµСЂСѓ." });

  }

  const payload = req.body || {};

  const pricesInput = payload.prices || {};

  const hasOwnPrice =

    Object.prototype.hasOwnProperty.call(pricesInput, staffBarberId) ||

    Object.prototype.hasOwnProperty.call(pricesInput, String(staffBarberId));

  if (!hasOwnPrice) {

    return res.status(400).json({ error: "РџРµСЂРµРґР°Р№С‚Рµ С†РµРЅСѓ РґР»СЏ СЃРІРѕРµРіРѕ РїСЂРѕС„РёР»СЏ." });

  }

  const rawValue =

    pricesInput[staffBarberId] ?? pricesInput[String(staffBarberId)];

  let normalizedPrice = null;

  if (!(rawValue === "" || rawValue === null)) {

    const numeric = Number(rawValue);

    if (!Number.isFinite(numeric) || numeric < 0) {

      return res.status(400).json({ error: "РќРµРєРѕСЂСЂРµРєС‚РЅРѕРµ Р·РЅР°С‡РµРЅРёРµ С†РµРЅС‹." });

    }

    normalizedPrice = numeric;

  }

  try {

    await prisma.$transaction(async (tx) => {

      const existingService = await tx.services.findUnique({

        where: { id: req.params.id },

        select: { id: true },

      });

      if (!existingService) {

        throw new Error("SERVICE_NOT_FOUND");

      }

      if (normalizedPrice === null) {

        await tx.servicePrices.deleteMany({

          where: { serviceId: existingService.id, barberId: staffBarberId },

        });

      } else {

        await tx.servicePrices.upsert({

          where: {

            serviceId_barberId: {

              serviceId: existingService.id,

              barberId: staffBarberId,

            },

          },

          update: { price: normalizedPrice },

          create: {

            id: randomUUID(),

            serviceId: existingService.id,

            barberId: staffBarberId,

            price: normalizedPrice,

          },

        });

      }

    });

    const services = filterServicesForIdentity(

      await getServiceCatalog(true),

      req.identity,

    );

    return res.json({ services });

  } catch (error) {

    if (error.message === "SERVICE_NOT_FOUND") {

      return res.status(404).json({ error: "РЈСЃР»СѓРіР° РЅРµ РЅР°Р№РґРµРЅР°." });

    }

    console.error("Staff service price update error:", error);

    return res

      .status(500)

      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ СѓСЃР»СѓРіСѓ." });

  }

});

app.delete("/api/services/full/:id", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ СѓСЃР»СѓРі." });
  }
  try {
    await prisma.$transaction([
      prisma.servicePrices.deleteMany({ where: { serviceId: req.params.id } }),
      prisma.services.delete({ where: { id: req.params.id } }),
    ]);
    const services = await getServiceCatalog(true);
    res.json({ services });
  } catch (error) {
    console.error("Delete service error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ СѓСЃР»СѓРіСѓ." });
  }
});
app.get("/api/barbers/full", authenticateToken, async (req, res) => {
  try {
    const [barbers, appointmentsRaw] = await Promise.all([
      getBarbers({ includeInactive: true }),
      prisma.appointments.findMany(),
    ]);
    const appointments = appointmentsRaw.map(mapAppointment);
    const now = new Date();
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    const hydrated = barbers.map((barber) => {
      const related = appointments.filter(
        (appt) => normalizeText(appt.Barber) === normalizeText(barber.name),
      );
      return {
        ...barber,
        stats: {
          total: related.length,
          upcoming: related.filter((appt) => appt.isActive).length,
          confirmedYear: related.filter(
            (appt) =>
              appt.isConfirmed &&
              appt.startDateTime &&
              new Date(appt.startDateTime) >= yearAgo,
          ).length,
        },
      };
    });
    res.json(filterBarbersForIdentity(hydrated, req.identity));
  } catch (error) {
    console.error("Barbers list error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ." });
  }
});
app.get("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Р—Р°РїСЂРѕС€РµРЅРЅР°СЏ С‚Р°Р±Р»РёС†Р° РЅРµ РЅР°Р№РґРµРЅР°." });
  if (isStaffIdentity(req.identity) && !STAFF_READ_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РґРѕСЃС‚СѓРїР° Рє СЌС‚РѕРјСѓ СЂР°Р·РґРµР»Сѓ." });
  }

  if (tableName === "Schedules") {
    try {
      const barbersList = await getBarbers({ includeInactive: true });
      const daysOfWeek = [
        "РџРѕРЅРµРґРµР»СЊРЅРёРє",
        "Р’С‚РѕСЂРЅРёРє",
        "РЎСЂРµРґР°",
        "Р§РµС‚РІРµСЂРі",
        "РџСЏС‚РЅРёС†Р°",
        "РЎСѓР±Р±РѕС‚Р°",
        "Р’РѕСЃРєСЂРµСЃРµРЅСЊРµ",
      ];
      const windowDays = 14;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const formatDateKey = (dateObj) => {
        const yyyy = dateObj.getFullYear();
        const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
        const dd = String(dateObj.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
      };
      const todayKey = formatDateKey(today);
      const expiredSchedules = await prisma.schedules.findMany({
        where: { Date: { lt: todayKey } },
      });
      for (const schedule of expiredSchedules) {
        if (!schedule?.Barber || !schedule?.Date) continue;
        const baseDate = new Date(`${schedule.Date}T00:00:00`);
        if (Number.isNaN(baseDate.getTime())) continue;
        let rollingDate = new Date(baseDate);
        while (rollingDate < today) {
          rollingDate.setDate(rollingDate.getDate() + windowDays);
        }
        const nextDateKey = formatDateKey(rollingDate);
        const targetDayIndex = (rollingDate.getDay() + 6) % 7;
        const existingTarget = await prisma.schedules.findFirst({
          where: { Barber: schedule.Barber, Date: nextDateKey },
        });
        if (existingTarget) {
          await prisma.schedules.delete({ where: { id: schedule.id } });
        } else {
          await prisma.schedules.update({
            where: { id: schedule.id },
            data: { Date: nextDateKey, DayOfWeek: daysOfWeek[targetDayIndex] },
          });
        }
      }
      await prisma.schedules.deleteMany({
        where: {
          Date: { lt: todayKey },
        },
      });
      const allSchedules = await prisma.schedules.findMany();
      const schedulesMap = allSchedules.reduce((acc, schedule) => {
        if (schedule.Barber && schedule.Date) {
          acc.set(`${schedule.Barber}-${schedule.Date}`, schedule);
        }
        return acc;
      }, new Map());
      const fallbackNames = Array.from(new Set(allSchedules.map((item) => item.Barber).filter(Boolean)));
      const barberNames = (barbersList.map((barber) => barber.name).filter(Boolean).length ? barbersList.map((barber) => barber.name).filter(Boolean) : fallbackNames).sort((a, b) =>
        a.localeCompare(b, "ru")
      );
      const fullSchedule = [];
      barberNames.forEach((name) => {
        for (let offset = 0; offset < windowDays; offset += 1) {
          const date = new Date(today);
          date.setDate(today.getDate() + offset);
          const dateKey = formatDateKey(date);
          const dayIndex = (date.getDay() + 6) % 7;
          const mapKey = `${name}-${dateKey}`;
          const existing = schedulesMap.get(mapKey);
          fullSchedule.push({
            id: mapKey,
            Barber: name,
            DayOfWeek: daysOfWeek[dayIndex],
            Date: dateKey,
            Week: existing?.Week || "",
            originalId: existing?.id || null,
          });
        }
      });
      return res.json(fullSchedule);
    } catch (error) {
      console.error("Schedules fetch error:", error);
      return res
        .status(500)
        .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЂР°СЃРїРёСЃР°РЅРёРµ." });
    }
  }
  try {
    const queryOptions = {};
    if (TABLE_ORDERING[tableName]) {
      queryOptions.orderBy = TABLE_ORDERING[tableName];
    }
    const records = await prisma[modelName].findMany(queryOptions);
    const filteredRecords =
      tableName === "Appointments"
        ? filterAppointmentsForIdentity(records, req.identity)
        : records;
    return res.json(filteredRecords);
  } catch (error) {
    console.error("Generic fetch error:", error);
    return res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РґР°РЅРЅС‹Рµ." });
  }
});
app.put("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Р—Р°РїСЂРѕС€РµРЅРЅР°СЏ С‚Р°Р±Р»РёС†Р° РЅРµ РЅР°Р№РґРµРЅР°." });
  const isStaff = isStaffIdentity(req.identity);
  if (isStaff) {
    const allowedTables = new Set(["Appointments", "Barbers", "Schedules"]);
    if (!allowedTables.has(tableName)) {
      return res
        .status(403)
        .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РґРѕСЃС‚СѓРїР° Рє СЌС‚РѕРјСѓ СЂР°Р·РґРµР»Сѓ." });
    }
  }
  const data = coercePayload(tableName, { ...req.body });
  let barberRenameContext = null;
  if (tableName === "Users" && data.TelegramID !== undefined) {
    if (data.TelegramID === null || data.TelegramID === "") {
      data.TelegramID = null;
    } else {
      const parsed = Number(data.TelegramID);
      data.TelegramID = Number.isNaN(parsed) ? null : parsed;
    }
  }
  if (tableName === "Appointments" && data.UserID !== undefined) {
    if (data.UserID === null || data.UserID === "") {
      data.UserID = null;
    } else {
      data.UserID = String(data.UserID);
    }
  }
  if (tableName === "Appointments" && data.Status !== undefined) {
    data.Status = normalizeAppointmentStatus(data.Status);
  }
  let staffBarberName = null;
  if (isStaff) {
    if (tableName === "Appointments" || tableName === "Schedules") {
      staffBarberName = getIdentityBarberName(req.identity);
      if (!staffBarberName) {
        return res
          .status(400)
          .json({ error: "Р’ РїСЂРѕС„РёР»Рµ СЃРѕС‚СЂСѓРґРЅРёРєР° РЅРµ СѓРєР°Р·Р°РЅРѕ РёРјСЏ Р±Р°СЂР±РµСЂР°." });
      }
    }
    if (tableName === "Appointments") {
      const existing = await prisma[modelName].findUnique({ where: { id } });
      if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ СЌС‚РѕР№ Р·Р°РїРёСЃРё." });
      }
      data.Barber = staffBarberName;
    } else if (tableName === "Barbers") {
      if (id !== req.identity.barberId) {
        return res
          .status(403)
          .json({ error: "РњРѕР¶РЅРѕ СЂРµРґР°РєС‚РёСЂРѕРІР°С‚СЊ С‚РѕР»СЊРєРѕ СЃРІРѕР№ РїСЂРѕС„РёР»СЊ." });
      }
    } else if (tableName === "Schedules") {
      if (data.Barber && !matchesIdentityBarber(data.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "РњРѕР¶РЅРѕ СЂРµРґР°РєС‚РёСЂРѕРІР°С‚СЊ С‚РѕР»СЊРєРѕ СЃРІРѕС‘ СЂР°СЃРїРёСЃР°РЅРёРµ." });
      }
      data.Barber = staffBarberName;
    }
  }
  if (tableName === "Barbers" && data.phone !== undefined) {
    data.phone = normalizePhone(data.phone);
  }
  if (tableName === "Barbers" && data.name !== undefined) {
    const existingBarber = await prisma.barbers.findUnique({
      where: { id },
      select: { name: true },
    });
    if (
      existingBarber?.name &&
      canonicalizeKey(existingBarber.name) !== canonicalizeKey(data.name)
    ) {
      barberRenameContext = {
        barberId: id,
        oldName: existingBarber.name,
        newName: data.name,
      };
    }
  }
  if (tableName === "Schedules") {
    try {
      const { Barber, Week = "", Date: date } = data;
      const existing = await prisma.schedules.findFirst({
        where: { Barber, Date: date },
      });
      let result;
      if (existing) {
        result = await prisma.schedules.update({
          where: { id: existing.id },
          data: { Week },
        });
      } else {
        result = await prisma.schedules.create({
          data: {
            id: randomUUID(),
            Barber,
            Week,
            DayOfWeek: data.DayOfWeek,
            Date: date,
          },
        });
      }
      return res.json(result);
    } catch (error) {
      console.error("Schedule update error:", error);
      return res
        .status(500)
        .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ СЂР°СЃРїРёСЃР°РЅРёРµ." });
    }
  }
  if (tableName === "Cost") {
    ["Timur", "Vladimir", "Alina", "Aleksey", "Dlitelnost"].forEach((field) => {
      if (data[field] === undefined) return;
      if (data[field] === null || data[field] === "") {
        data[field] = null;
        return;
      }
      const parsed = Number(data[field]);
      data[field] = Number.isNaN(parsed) ? null : parsed;
    });
  }
  try {
    const updated = await prisma[modelName].update({ where: { id }, data });
    if (tableName === "Barbers" && barberRenameContext) {
      await propagateBarberRename(barberRenameContext);
    }
    res.json(updated);
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record update error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ Р·Р°РїРёСЃСЊ." });
  }
});
app.post("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Р—Р°РїСЂРѕС€РµРЅРЅР°СЏ С‚Р°Р±Р»РёС†Р° РЅРµ РЅР°Р№РґРµРЅР°." });
  if (isStaffIdentity(req.identity) && !STAFF_WRITE_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ Р·Р°РїРёСЃРµР№ РІ СЌС‚РѕРј СЂР°Р·РґРµР»Рµ." });
  }
  const payload = coercePayload(tableName, { ...req.body });
  if (isStaffIdentity(req.identity) && tableName === "Appointments") {
    const staffBarber = getIdentityBarberName(req.identity);
    if (!staffBarber) {
      return res
        .status(400)
        .json({ error: "Р’ РїСЂРѕС„РёР»Рµ СЃРѕС‚СЂСѓРґРЅРёРєР° РЅРµ СѓРєР°Р·Р°РЅРѕ РёРјСЏ Р±Р°СЂР±РµСЂР°." });
    }
    payload.Barber = staffBarber;
  }
  if (tableName === "Appointments") {
    payload.Status = normalizeAppointmentStatus(payload.Status);
  }
  if (tableName === "Appointments" && !normalizeText(payload.Barber)) {
    return res
      .status(400)
      .json({ error: "Р”Р»СЏ Р·Р°РїРёСЃРё РЅСѓР¶РЅРѕ СѓРєР°Р·Р°С‚СЊ Р±Р°СЂР±РµСЂР°." });
  }
  if (tableName === "Appointments" && payload.UserID !== undefined) {
    if (payload.UserID === null || payload.UserID === "") {
      payload.UserID = null;
    } else {
      payload.UserID = String(payload.UserID);
    }
  }
  if (tableName === "Users") {
    if (payload.TelegramID) {
      const parsed = Number(payload.TelegramID);
      payload.TelegramID = Number.isNaN(parsed) ? null : parsed;
    } else {
      payload.TelegramID = null;
    }
  }
  if (tableName === "Barbers" && payload.phone !== undefined) {
    payload.phone = normalizePhone(payload.phone);
  }
  try {
    const record = await prisma[modelName].create({
      data: { id: randomUUID(), ...payload },
    });
    res.status(201).json(record);
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record create error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ Р·Р°РїРёСЃСЊ." });
  }
});
app.delete("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Р—Р°РїСЂРѕС€РµРЅРЅР°СЏ С‚Р°Р±Р»РёС†Р° РЅРµ РЅР°Р№РґРµРЅР°." });
  if (isStaffIdentity(req.identity) && !STAFF_DELETE_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ СЌС‚РѕРіРѕ СЂР°Р·РґРµР»Р°." });
  }
  try {
    if (isStaffIdentity(req.identity) && tableName === "Appointments") {
      const existing = await prisma[modelName].findUnique({ where: { id } });
      if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ СЌС‚РѕР№ Р·Р°РїРёСЃРё." });
      }
    }

    await prisma[modelName].delete({ where: { id } });
    res.status(204).send();
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record delete error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ." });
  }
});
app.post("/api/backups/create", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ Р±СЌРєР°РїРѕРІ." });
  }
  try {
    await createBackup();
    res.json({ success: true, message: "Р РµР·РµСЂРІРЅР°СЏ РєРѕРїРёСЏ СЃРѕР·РґР°РЅР°." });
  } catch (error) {
    console.error("Backup create error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ Р±СЌРєР°Рї." });
  }
});
app.get("/api/backups/list", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° Р±СЌРєР°РїРѕРІ." });
  }
  try {
    const files = await listBackups();
    res.json(files);
  } catch (error) {
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ СЃРїРёСЃРѕРє Р±СЌРєР°РїРѕРІ." });
  }
});
app.post("/api/backups/restore", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ РёР· Р±СЌРєР°РїР°." });
  }
  try {
    const { filename } = req.body || {};
    if (!filename)
      return res.status(400).json({ error: "РќРµ СѓРєР°Р·Р°РЅРѕ РёРјСЏ С„Р°Р№Р»Р° Р±СЌРєР°РїР°." });
    const backupPath = path.join(BACKUP_DIR, filename);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: "Р‘СЌРєР°Рї РЅРµ РЅР°Р№РґРµРЅ." });
    }
    await prisma.$disconnect();
    await fs.copyFile(backupPath, DB_PATH);
    res.json({
      success: true,
      message: `Р‘СЌРєР°Рї ${filename} РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅ.`,
    });
  } catch (error) {
    console.error("Backup restore error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ Р±СЌРєР°Рї." });
  }
});
app.post("/api/backups/delete", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ Р±СЌРєР°РїРѕРІ." });
  }
  try {
    const { filename } = req.body || {};
    if (!filename) {
      return res
        .status(400)
        .json({ error: "РќРµ СѓРєР°Р·Р°РЅРѕ РёРјСЏ С„Р°Р№Р»Р° Р±СЌРєР°РїР°." });
    }
    const safeName = path.basename(filename);
    const backupPath = path.join(BACKUP_DIR, safeName);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: "Р‘СЌРєР°Рї РЅРµ РЅР°Р№РґРµРЅ." });
    }
    await fs.remove(backupPath);
    res.json({
      success: true,
      message: `Р‘СЌРєР°Рї ${safeName} СѓРґР°Р»РµРЅ.`,
    });
  } catch (error) {
    console.error("Backup delete error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ Р±СЌРєР°Рї." });
  }
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
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ СЃРїСЂР°РІРѕС‡РЅС‹Рµ РґР°РЅРЅС‹Рµ." });
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
        .json({ error: "РџСЂРѕС„РёР»СЊ СЃРѕС‚СЂСѓРґРЅРёРєР° РЅРµ РїСЂРёРІСЏР·Р°РЅ Рє Р±Р°СЂР±РµСЂСѓ." });
    }
    if (requestedBarberId && requestedBarberId !== normalizedIdentityBarberId) {
      return res.status(403).json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° РґРѕС…РѕРґРѕРІ." });
    }
    requestedBarberId = normalizedIdentityBarberId;
  } else if (!isOwner) {
    return res
      .status(403)
      .json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° РґРѕС…РѕРґРѕРІ." });
  }
  try {
    const defaultRange = getDefaultRevenueRange();
    let startDate = parseDateFilter(req.query.start, defaultRange.start);
    let endDate = parseDateFilter(req.query.end, defaultRange.end);
    if (startDate.getTime() > endDate.getTime()) {
      [startDate, endDate] = [endDate, startDate];
    }
    const startKey = formatDateOnly(startDate);
    const endKey = formatDateOnly(endDate);
    const [barbersList, servicesCatalog, appointments] = await Promise.all([
      getBarbers({ includeInactive: true }),
      getServiceCatalog(true),
      prisma.appointments.findMany({
        where: {
          Date: {
            gte: startKey,
            lte: endKey,
          },
        },
      }),
    ]);
    const targetBarber =
      requestedBarberId &&
      barbersList.find((barber) => normalizeText(barber.id) === requestedBarberId);
    if (isStaff && !targetBarber) {
      return res.status(404).json({ error: "Р‘Р°СЂР±РµСЂ РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const barberFilterId = targetBarber ? targetBarber.id : null;
    const barberLookup = buildBarberNameLookup(barbersList);
    const serviceLookup = buildServiceLookup(servicesCatalog);
    const summaryMap = new Map();
    const timelineMap = new Map();
    let totalGross = 0;
    let totalCommission = 0;
    appointments.forEach((appointment) => {
      if (!isCompletedStatus(appointment.Status)) return;
      const barber = barberLookup.get(
        canonicalizeKey(appointment.Barber),
      );
      if (!barber) return;
      if (barberFilterId && barber.id !== barberFilterId) return;
      const serviceNames = splitServiceList(appointment.Services);
      if (!serviceNames.length) return;
      let appointmentGross = 0;
      serviceNames.forEach((serviceName) => {
        const service = serviceLookup.get(canonicalizeKey(serviceName));
        const price = getServicePriceForBarber(service, barber.id);
        if (price === null || price === undefined) return;
        const numericPrice = Number(price);
        if (!Number.isFinite(numericPrice) || numericPrice <= 0) return;
        appointmentGross += numericPrice;
      });
      if (!appointmentGross) return;
      const commissionRate = Number(barber.position?.commissionRate ?? 0);
      const commissionValue = appointmentGross * (commissionRate / 100);
      totalGross += appointmentGross;
      totalCommission += commissionValue;
      const existing = summaryMap.get(barber.id) || {
        id: barber.id,
        name: barber.name,
        color: barber.color,
        commissionRate,
        appointments: 0,
        gross: 0,
        commission: 0,
      };
      existing.appointments += 1;
      existing.gross += appointmentGross;
      existing.commission += commissionValue;
      summaryMap.set(barber.id, existing);
      const dateKey = appointment.Date || startKey;
      const timelineEntry = timelineMap.get(dateKey) || {
        date: dateKey,
        gross: 0,
        commission: 0,
      };
      timelineEntry.gross += appointmentGross;
      timelineEntry.commission += commissionValue;
      timelineMap.set(dateKey, timelineEntry);
    });
    const items = Array.from(summaryMap.values())
      .map((item) => ({
        ...item,
        net: item.gross - item.commission,
      }))
      .sort((a, b) => b.gross - a.gross);
    const timeline = Array.from(timelineMap.values()).sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    res.json({
      start: startKey,
      end: endKey,
      barberId: barberFilterId,
      totalGross,
      totalCommission,
      totalNet: totalGross - totalCommission,
      items,
      timeline,
    });
  } catch (error) {
    console.error("Revenue summary error:", error);
    res.status(500).json({
      error: "РќРµ СѓРґР°Р»РѕСЃСЊ СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґРѕС…РѕРґС‹.",
      details: error.message,
    });
  }
});
app.get("/api/user-profile/:name", authenticateToken, async (req, res) => {
  try {
    const { name } = req.params;
    const user = await prisma.users.findFirst({ where: { Name: name } });
    if (!user)
      return res.status(404).json({ error: "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ РЅР°Р№РґРµРЅ." });
    const blockedUsers = await readBlockedUsers();
    const appointmentsRaw = await prisma.appointments.findMany({
      where: { CustomerName: name },
    });
    const appointments = appointmentsRaw
      .map(mapAppointment)
      .sort((a, b) => b.sortKey - a.sortKey);
    const warningCount = countAppointmentWarnings(appointments);
    const manualBlocked = blockedUsers.has(user.id);
    const isBlocked = manualBlocked || warningCount >= WARNING_BLOCK_THRESHOLD;
    res.json({
      user: { ...user, warningCount, manualBlocked, isBlocked },
      appointments,
      warningCount,
      manualBlocked,
      isBlocked,
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РїСЂРѕС„РёР»СЊ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ." });
  }
});
app.post("/api/users/:id/block", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Р”РѕСЃС‚СѓРї Р·Р°РїСЂРµС‰РµРЅ: С‚СЂРµР±СѓРµС‚СЃСЏ РІР»Р°РґРµР»РµС†." });
  }
  const { id } = req.params;
  const shouldBlock = req.body?.blocked !== false;
  try {
    const user = await prisma.users.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ error: "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ РЅР°Р№РґРµРЅ." });
    }
    const blockedUsers = await readBlockedUsers();
    if (shouldBlock) {
      blockedUsers.add(id);
    } else {
      blockedUsers.delete(id);
    }
    await writeBlockedUsers(blockedUsers);
    const relatedAppointments = await prisma.appointments.findMany({
      where: {
        OR: [
          { UserID: id },
          { CustomerName: user.Name || undefined },
          { Phone: user.Phone || undefined },
        ],
      },
    });
    const warnings = countAppointmentWarnings(
      relatedAppointments.map(mapAppointment),
    );
    const manualBlocked = blockedUsers.has(id);
    const blocked = manualBlocked || warnings >= WARNING_BLOCK_THRESHOLD;
    requestRealtimePush(true);
    return res.json({
      success: true,
      blocked,
      manualBlocked,
      warnings,
    });
  } catch (error) {
    console.error("Block toggle error:", error);
    return res
      .status(500)
      .json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ СЃС‚Р°С‚СѓСЃ Р±Р»РѕРєРёСЂРѕРІРєРё.", details: error.message });
  }
});
const runBackupCronTask = async () => {
  try {
    await createBackup();
    const files = await listBackups();
    const now = Date.now();
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(BACKUP_DIR, file);
        const stats = await fs.stat(filePath);
        const ageDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
        if (ageDays > BACKUP_RETENTION_DAYS) {
          await fs.remove(filePath);
        }
      }),
    );
  } catch (error) {
    console.error("Backup cron error:", error);
  }
};
const backupCronOptions = BACKUP_CRON_TIMEZONE
  ? { timezone: BACKUP_CRON_TIMEZONE }
  : undefined;
try {
  cron.schedule(BACKUP_CRON_EXPRESSION, runBackupCronTask, backupCronOptions);
  console.log(
    `[backup] Cron scheduled: ${BACKUP_CRON_EXPRESSION}${
      BACKUP_CRON_TIMEZONE ? ` (${BACKUP_CRON_TIMEZONE})` : " (server timezone)"
    }`,
  );
} catch (error) {
  console.error(
    `[backup] Invalid cron config "${BACKUP_CRON_EXPRESSION}"${
      BACKUP_CRON_TIMEZONE ? ` (${BACKUP_CRON_TIMEZONE})` : ""
    }, using fallback "0 3 * * *".`,
    error,
  );
  cron.schedule("0 3 * * *", runBackupCronTask);
}
const gracefulShutdown = async () => {
  try {
    stopRealtimeLoop();
    shutdownRealtimeClients();
    await stopBotProcess();
    await stopHttpServer();
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Shutdown error:", error);
    process.exit(1);
  }
};
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
const bootstrap = async () => {
  try {
    ensureUsersHomeAuthColumns();
    ensureTelegramAuthRequestsTable();
    markExpiredTelegramAuthRequests();
    try {
      await ensureLicenseValid(true);
    } catch (licenseError) {
      console.warn(
        "License validation failed during bootstrap, server will continue in restricted mode:",
        licenseError?.message || licenseError,
      );
    }
    startLicenseWatcher();
    const legacyMigration = await migrateLegacyHomeUsersToUsers();
    if (legacyMigration.created || legacyMigration.updated) {
      console.log(
        `Legacy home users migrated: created=${legacyMigration.created}, updated=${legacyMigration.updated}, total=${legacyMigration.total}`,
      );
    }
    await ensureBootstrapData();
    await seedServicesFromCost();
    await ensureBotProcessState();
    await runRealtimePush(true);
    ensureRealtimeLoop();
    httpServer = app.listen(PORT, () => {
      console.log(`CRM server ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Bootstrap error:", error);
    process.exit(1);
  }
};
bootstrap();
















