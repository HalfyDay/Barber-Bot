require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const path = require("path");
const { randomUUID, createHash } = require("crypto");
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
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "change-me-secret";
const TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";
const TOKEN_REFRESH_THRESHOLD_MS =
  Number(process.env.JWT_REFRESH_THRESHOLD_MS) || 3 * 24 * 60 * 60 * 1000;
const WARNING_LOOKBACK_DAYS =
  Number(process.env.WARNING_LOOKBACK_DAYS || 90) || 90;
const WARNING_BLOCK_THRESHOLD =
  Number(process.env.WARNING_BLOCK_THRESHOLD || 3) || 3;
const BACKUP_DIR = path.join(__dirname, "backups");
const DB_PATH = path.join(__dirname, "prisma", "dev.db");
const BACKUP_RETENTION_DAYS = 30;
const CLIENT_ERROR_LOG = path.join(__dirname, "data", "client-error.log");
const DEFAULT_BOT_DESCRIPTION =
  "Текст в Главном меню";
const DEFAULT_ABOUT_TEXT =
  "Текст в блоке «О нас»";
const IMAGE_DIR = path.join(__dirname, "Image");
const MAX_AVATAR_FILE_SIZE = Number(
  process.env.MAX_AVATAR_FILE_SIZE || 5 * 1024 * 1024,
);
const BARBER_ALIAS_FILE = path.join(__dirname, "data", "barber-aliases.json");
const BOT_SUPPORTED_STATUS_OPTIONS = [
  "Активная",
  "Выполнена",
  "Отмена",
  "Неявка",
];
const SUPPORTED_APPOINTMENT_STATUSES = [...BOT_SUPPORTED_STATUS_OPTIONS];
const COMPLETED_STATUS_TOKENS = ["выполн", "заверш", "done", "completed", "исполн", "готов"];
const RESERVED_COST_FIELDS = new Set([
  "id",
  "Id",
  "ID",
  "Uslugi",
  "Dlitelnost",
]);
const CONFIRMED_STATUS_TOKENS = [
  "подтвержд",
  "выполн",
  "заверш",
  "done",
  "completed",
];
const ACTIVE_STATUS_TOKENS = ["active", "актив", "в работе"];
const BLOCKED_STATUS_TOKENS = ["block", "заблок", "отмен", "неяв", "noshow"];
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
  Barbers: ["isActive"],
  Services: ["isActive"],
  BotSettings: ["isBotEnabled"],
};
const ROLE_OWNER = "owner";
const ROLE_STAFF = "staff";
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
const botScriptPath = path.join(__dirname, "BotBarberShop.py");
const restartCommand = () => {
  const nodePath = process.execPath;
  const entry = path.join(__dirname, "server.js");
  return { command: nodePath, args: [entry] };
};
app.use(cors());
app.use(express.json({ limit: "12mb" }));
app.use(express.static(path.join(__dirname)));
app.use("/Image", express.static(IMAGE_DIR));
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
const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (phone) => {
  if (!phone) return "";
  const digits = phone.toString().replace(/[^\d+]/g, "");
  if (!digits) return "";
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("8")) return `+7${digits.slice(1)}`;
  if (digits.startsWith("7")) return `+7${digits.slice(1)}`;
  return digits;
};
const normalizeLogin = (value) => normalizeText(value);
const toLower = (value) => normalizeText(value).toLowerCase();
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();
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
    "активная",
    "актив",
    "active",
    "подтверждена",
    "подтверждено",
    "в работе",
    "в обработке",
    "новая запись",
    "pending",
    "wait",
    "waiting",
    "processing",
  ].map((key) => [key, "Активная"]),
);
[
  ["done", "Выполнена"],
  ["complete", "Выполнена"],
  ["completed", "Выполнена"],
  ["finished", "Выполнена"],
  ["выполнена", "Выполнена"],
  ["завершена", "Выполнена"],
  ["готово", "Выполнена"],
  ["cancel", "Отмена"],
  ["canceled", "Отмена"],
  ["cancelled", "Отмена"],
  ["отмена", "Отмена"],
  ["отменено", "Отмена"],
  ["отменена", "Отмена"],
  ["no show", "Неявка"],
  ["no-show", "Неявка"],
  ["noshow", "Неявка"],
  ["missed", "Неявка"],
  ["не пришёл", "Неявка"],
  ["не пришел", "Неявка"],
  ["неявка", "Неявка"],
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
const normalizeRole = (value) =>
  value === ROLE_STAFF ? ROLE_STAFF : ROLE_OWNER;
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
const isOwnerIdentity = (identity) => identity.role === ROLE_OWNER;
const isOwnerRequest = (req) => isOwnerIdentity(resolveRequestIdentity(req));
const staffOwnsValue = (identity, value) =>
  identity?.barberName &&
  canonicalizeKey(value) === canonicalizeKey(identity.barberName);
const requireOwner = (req, res, next) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для выполнения действия." });
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
    throw new Error("Пустые данные изображения.");
  }
  return Buffer.from(payload, "base64");
};

const ensureUniqueImageName = async (filename) => {
  let attempt = 0;
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  let candidate = filename;
  while (await fs.pathExists(path.join(IMAGE_DIR, candidate))) {
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
          name: row.Uslugi || `Услуга #${index + 1}`,
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
      name: row.Uslugi || `Услуга #${index + 1}`,
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
      name: user.Name || "Без имени",
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
      name: appt.CustomerName || "Без имени",
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
  const todayKey = now.toISOString().slice(0, 10);
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
  const todayKey = now.toISOString().slice(0, 10);
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
      botRuntime.lastError = "BotBarberShop.py not found";
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
  try {
    console.log("[update] performSystemUpdate: stopping services...");
    stopRealtimeLoop();
    shutdownRealtimeClients();
    await stopBotProcess();
    console.log("[update] performSystemUpdate: applying update...");
    const result = await applyUpdate();
    console.log("[update] performSystemUpdate: update applied");
    return result;
  } catch (error) {
    if (!restartScheduled) {
      if (realtimeWasRunning) {
        ensureRealtimeLoop();
      }
      await ensureBotProcessState();
    }
    throw error;
  } finally {
    updateInProgress = false;
  }
};
const scheduleSelfRestart = (delayMs = 500) => {
  if (restartScheduled) return;
  restartScheduled = true;
  updateInProgress = true;
  const { command, args } = restartCommand();
  console.log(
    `[update] Scheduling self-restart in ${delayMs}ms with: ${command} ${args.join(
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
      ensureRealtimeLoop();
      ensureBotProcessState();
    }
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
        color: true,
        orderIndex: true,
        password: true,
      },
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
    });
    const options = barbers
      .filter(
        (barber) =>
          normalizeLogin(barber.login) && normalizeText(barber.password),
      )
      .map((barber) => ({
        id: barber.id,
        login: barber.login,
        label: barber.name || barber.login,
        color: barber.color || null,
      }));
    res.json(options);
  } catch (error) {
    console.error("Login options error:", error);
    res.status(500).json({ error: "Не удалось получить список барберов" });
  }
};
const handleLogin = async (req, res) => {
  try {
    const username = normalizeLogin(req.body?.username);
    const password = normalizeText(req.body?.password);
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Укажите логин и пароль." });
    }
    const barber = await prisma.barbers.findFirst({
      where: { login: username, isActive: true },
      select: {
        id: true,
        name: true,
        login: true,
        password: true,
        role: true,
      },
    });
    if (!barber || !barber.password || barber.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Неверный логин или пароль." });
    }
    const identity = resolveUserIdentity({
      username: barber.login,
      barberId: barber.id,
      barberName: barber.name || barber.login,
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
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Ошибка входа. Попробуйте позже." });
  }
};
app.get("/api/login/options", handleLoginOptions);
app.post("/api/login", handleLogin);
app.use("/api", licenseMiddleware);

app.get("/api/license/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для доступа к лицензии." });
  }
  try {
    const status = await ensureLicenseValid();
    res.json(status);
  } catch (error) {
    res.status(403).json({
      error: "Лицензия недействительна. Проверьте ключ и повторите попытку.",
      details: error.message,
      status: getLicenseStatus(),
    });
  }
});
app.get("/api/bot/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для управления ботом." });
  }
  const settings = await getBotSettings();
  const token = await readBotToken();
  res.json({ status: serializeBotRuntime(), settings, token });
});
app.post("/api/bot/status", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для управления ботом." });
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
    res.status(500).json({ error: "Не удалось изменить статус бота." });
  }
});

app.put("/api/bot/token", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для изменения токена." });
  }
  const candidate = normalizeText(req.body?.token);
  if (!candidate) {
    return res.status(400).json({ error: "Укажите токен бота." });
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
      .json({ error: "Не удалось обновить токен бота." });
  }
});

app.get("/api/system/update", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для проверки обновлений." });
  }
  try {
    const force = req.query.force === "1" || req.query.force === "true";
    const info = await checkForUpdates(force);
    res.json(info);
  } catch (error) {
    console.error("Update check error:", error);
    res.status(500).json({
      error: "Не удалось проверить обновления.",
      details: error.message,
    });
  }
});
app.post("/api/system/update", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для установки обновлений." });
  }
  if (updateInProgress) {
    return res
      .status(429)
      .json({ error: "Обновление уже выполняется." });
  }
  try {
    console.log("[update] /api/system/update: user", req.identity?.username || "unknown");
    const result = await performSystemUpdate();
    const info = await checkForUpdates(true);
    res.json({ ...result, info, restarting: true });
    scheduleSelfRestart();
  } catch (error) {
    console.error("Update apply error:", error);
    res.status(500).json({
      error: "Не удалось применить обновление.",
      details: error.message,
    });
  }
});
app.post("/api/system/restart", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для перезапуска системы." });
  }
  if (updateInProgress || restartScheduled) {
    return res
      .status(429)
      .json({ error: "Перезапуск или обновление уже выполняется." });
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
      error: "Не удалось запланировать перезапуск.",
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
      .json({ error: "Не удалось загрузить обзор дашборда." });
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
      .json({ error: "Не удалось получить список услуг." });
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
      .json({ error: "Не удалось получить список изображений." });
  }
});

app.post("/api/assets/avatars/upload", authenticateToken, async (req, res) => {
  try {
    const { name, data } = req.body || {};
    if (!data) {
      return res
        .status(400)
        .json({ error: "Не переданы данные изображения." });
    }
    const sanitizedName = buildSafeImageFilename(name || `avatar-${Date.now()}.png`);
    if (!sanitizedName) {
      return res.status(400).json({ error: "Некорректное имя файла." });
    }
    await fs.ensureDir(IMAGE_DIR);
    const buffer = decodeBase64Image(data);
    if (!buffer.length) {
      return res.status(400).json({ error: "Файл пуст." });
    }
    if (buffer.length > MAX_AVATAR_FILE_SIZE) {
      return res
        .status(400)
        .json({
          error: `Файл слишком большой (до ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} МБ).`,
        });
    }
    const filename = await ensureUniqueImageName(sanitizedName);
    await fs.writeFile(path.join(IMAGE_DIR, filename), buffer);
    const images = await listAvatarImages();
    res.json({ success: true, path: `/Image/${filename}`, images });
  } catch (error) {
    console.error("Avatar upload error:", error);
    res.status(500).json({
      error: "Не удалось загрузить изображение.",
      details: error.message,
    });
  }
});

app.delete("/api/assets/avatars", authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body || {};
    if (!filename) {
      return res.status(400).json({ error: "Не указано имя файла." });
    }
    const sanitizedName = getExistingImageFilename(filename);
    if (!sanitizedName) {
      return res.status(400).json({ error: "Файл не найден." });
    }
    const targetPath = path.join(IMAGE_DIR, sanitizedName);
    if (!(await fs.pathExists(targetPath))) {
      return res.status(404).json({ error: "Файл отсутствует на сервере." });
    }
    await fs.remove(targetPath);
    const images = await listAvatarImages();
    res.json({ success: true, images });
  } catch (error) {
    console.error("Avatar delete error:", error);
    res.status(500).json({
      error: "Не удалось удалить изображение.",
      details: error.message,
    });
  }
});

app.get("/api/bot/messages", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для изменения сообщений бота." });
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
      .json({ error: "Не удалось загрузить сообщения бота." });
  }
});

app.put("/api/bot/messages/:id", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для изменения сообщений бота." });
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
        .json({ error: "Текст сообщения не может быть пустым." });
    }
    const updated = await prisma.botMessages.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error("Bot message update error:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Сообщение не найдено." });
    }
    res
      .status(500)
      .json({ error: "Не удалось обновить сообщение." });
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
      .json({ error: "Недостаточно прав для создания услуг." });
  }
  try {
    await upsertServiceWithPrices(null, req.body || {});
    const services = await getServiceCatalog(true);
    res.status(201).json({ services });
  } catch (error) {
    console.error("Create service error:", error);
    res
      .status(500)
      .json({ error: "Не удалось создать услугу." });
  }
});
app.put("/api/services/full/:id", authenticateToken, async (req, res) => {

  const isOwner = isOwnerRequest(req);

  const isStaff = isStaffIdentity(req.identity);

  if (!isOwner && !isStaff) {

    return res

      .status(403)

      .json({ error: "Недостаточно прав для изменения услуг." });

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

        .json({ error: "Не удалось обновить услугу." });

    }

  }

  const staffBarberId = req.identity?.barberId;

  if (!staffBarberId) {

    return res

      .status(403)

      .json({ error: "Профиль сотрудника не привязан к барберу." });

  }

  const payload = req.body || {};

  const pricesInput = payload.prices || {};

  const hasOwnPrice =

    Object.prototype.hasOwnProperty.call(pricesInput, staffBarberId) ||

    Object.prototype.hasOwnProperty.call(pricesInput, String(staffBarberId));

  if (!hasOwnPrice) {

    return res.status(400).json({ error: "Передайте цену для своего профиля." });

  }

  const rawValue =

    pricesInput[staffBarberId] ?? pricesInput[String(staffBarberId)];

  let normalizedPrice = null;

  if (!(rawValue === "" || rawValue === null)) {

    const numeric = Number(rawValue);

    if (!Number.isFinite(numeric) || numeric < 0) {

      return res.status(400).json({ error: "Некорректное значение цены." });

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

      return res.status(404).json({ error: "Услуга не найдена." });

    }

    console.error("Staff service price update error:", error);

    return res

      .status(500)

      .json({ error: "Не удалось обновить услугу." });

  }

});

app.delete("/api/services/full/:id", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для удаления услуг." });
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
      .json({ error: "Не удалось удалить услугу." });
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
      .json({ error: "Не удалось загрузить список барберов." });
  }
});
app.get("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Запрошенная таблица не найдена." });
  if (isStaffIdentity(req.identity) && !STAFF_READ_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для доступа к этому разделу." });
  }

  if (tableName === "Schedules") {
    try {
      const barbersList = await getBarbers({ includeInactive: true });
      const daysOfWeek = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
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
        .json({ error: "Не удалось загрузить расписание." });
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
      .json({ error: "Не удалось загрузить данные." });
  }
});
app.put("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Запрошенная таблица не найдена." });
  const isStaff = isStaffIdentity(req.identity);
  if (isStaff) {
    const allowedTables = new Set(["Appointments", "Barbers", "Schedules"]);
    if (!allowedTables.has(tableName)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для доступа к этому разделу." });
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
          .json({ error: "В профиле сотрудника не указано имя барбера." });
      }
    }
    if (tableName === "Appointments") {
      const existing = await prisma[modelName].findUnique({ where: { id } });
      if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "Недостаточно прав для изменения этой записи." });
      }
      data.Barber = staffBarberName;
    } else if (tableName === "Barbers") {
      if (id !== req.identity.barberId) {
        return res
          .status(403)
          .json({ error: "Можно редактировать только свой профиль." });
      }
    } else if (tableName === "Schedules") {
      if (data.Barber && !matchesIdentityBarber(data.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "Можно редактировать только своё расписание." });
      }
      data.Barber = staffBarberName;
    }
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
        .json({ error: "Не удалось обновить расписание." });
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
      .json({ error: "Не удалось обновить запись." });
  }
});
app.post("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Запрошенная таблица не найдена." });
  if (isStaffIdentity(req.identity) && !STAFF_WRITE_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для создания записей в этом разделе." });
  }
  const payload = coercePayload(tableName, { ...req.body });
  if (isStaffIdentity(req.identity) && tableName === "Appointments") {
    const staffBarber = getIdentityBarberName(req.identity);
    if (!staffBarber) {
      return res
        .status(400)
        .json({ error: "В профиле сотрудника не указано имя барбера." });
    }
    payload.Barber = staffBarber;
  }
  if (tableName === "Appointments") {
    payload.Status = normalizeAppointmentStatus(payload.Status);
  }
  if (tableName === "Appointments" && !normalizeText(payload.Barber)) {
    return res
      .status(400)
      .json({ error: "Для записи нужно указать барбера." });
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
      .json({ error: "Не удалось создать запись." });
  }
});
app.delete("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Запрошенная таблица не найдена." });
  if (isStaffIdentity(req.identity) && !STAFF_DELETE_TABLES.has(tableName)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для удаления этого раздела." });
  }
  try {
    if (isStaffIdentity(req.identity) && tableName === "Appointments") {
      const existing = await prisma[modelName].findUnique({ where: { id } });
      if (!existing || !matchesIdentityBarber(existing.Barber, req.identity)) {
        return res
          .status(403)
          .json({ error: "Недостаточно прав для удаления этой записи." });
      }
    }

    await prisma[modelName].delete({ where: { id } });
    res.status(204).send();
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record delete error:", error);
    res
      .status(500)
      .json({ error: "Не удалось удалить запись." });
  }
});
app.post("/api/backups/create", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для создания бэкапов." });
  }
  try {
    await createBackup();
    res.json({ success: true, message: "Резервная копия создана." });
  } catch (error) {
    console.error("Backup create error:", error);
    res
      .status(500)
      .json({ error: "Не удалось создать бэкап." });
  }
});
app.get("/api/backups/list", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для просмотра бэкапов." });
  }
  try {
    const files = await listBackups();
    res.json(files);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Не удалось получить список бэкапов." });
  }
});
app.post("/api/backups/restore", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для восстановления из бэкапа." });
  }
  try {
    const { filename } = req.body || {};
    if (!filename)
      return res.status(400).json({ error: "Не указано имя файла бэкапа." });
    const backupPath = path.join(BACKUP_DIR, filename);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: "Бэкап не найден." });
    }
    await prisma.$disconnect();
    await fs.copyFile(backupPath, DB_PATH);
    res.json({
      success: true,
      message: `Бэкап ${filename} восстановлен.`,
    });
  } catch (error) {
    console.error("Backup restore error:", error);
    res
      .status(500)
      .json({ error: "Не удалось восстановить бэкап." });
  }
});
app.post("/api/backups/delete", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для удаления бэкапов." });
  }
  try {
    const { filename } = req.body || {};
    if (!filename) {
      return res
        .status(400)
        .json({ error: "Не указано имя файла бэкапа." });
    }
    const safeName = path.basename(filename);
    const backupPath = path.join(BACKUP_DIR, safeName);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: "Бэкап не найден." });
    }
    await fs.remove(backupPath);
    res.json({
      success: true,
      message: `Бэкап ${safeName} удален.`,
    });
  } catch (error) {
    console.error("Backup delete error:", error);
    res
      .status(500)
      .json({ error: "Не удалось удалить бэкап." });
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
      .json({ error: "Не удалось получить справочные данные." });
  }
});
app.get("/api/revenue/summary", authenticateToken, async (req, res) => {
  const identity = resolveRequestIdentity(req);
  const isOwner = isOwnerIdentity(identity);
  const isStaff = isStaffIdentity(identity);
  const normalizedIdentityBarberId = identity?.barberId
    ? normalizeText(identity.barberId)
    : null;
  let requestedBarberId = normalizeText(req.query.barberId);
  if (isStaff) {
    if (!normalizedIdentityBarberId) {
      return res
        .status(403)
        .json({ error: "Профиль сотрудника не привязан к барберу." });
    }
    if (requestedBarberId && requestedBarberId !== normalizedIdentityBarberId) {
      return res.status(403).json({ error: "Недостаточно прав для просмотра доходов." });
    }
    requestedBarberId = normalizedIdentityBarberId;
  } else if (!isOwner) {
    return res
      .status(403)
      .json({ error: "Недостаточно прав для просмотра доходов." });
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
      return res.status(404).json({ error: "Барбер не найден." });
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
      error: "Не удалось рассчитать доходы.",
      details: error.message,
    });
  }
});
app.get("/api/user-profile/:name", authenticateToken, async (req, res) => {
  try {
    const { name } = req.params;
    const user = await prisma.users.findFirst({ where: { Name: name } });
    if (!user)
      return res.status(404).json({ error: "Пользователь не найден." });
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
      .json({ error: "Не удалось загрузить профиль пользователя." });
  }
});
app.post("/api/users/:id/block", authenticateToken, async (req, res) => {
  if (!isOwnerRequest(req)) {
    return res
      .status(403)
      .json({ error: "Доступ запрещен: требуется владелец." });
  }
  const { id } = req.params;
  const shouldBlock = req.body?.blocked !== false;
  try {
    const user = await prisma.users.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден." });
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
      .json({ error: "Не удалось обновить статус блокировки.", details: error.message });
  }
});
cron.schedule("0 3 * * *", async () => {
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
});
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
    await ensureLicenseValid(true);
    startLicenseWatcher();
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
















