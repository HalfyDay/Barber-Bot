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
const BACKUP_DIR = path.join(__dirname, "backups");
const DB_PATH = path.join(__dirname, "prisma", "dev.db");
const BACKUP_RETENTION_DAYS = 30;
const DEFAULT_BOT_DESCRIPTION = "Telegram-       CRM-.";
const DEFAULT_ABOUT_TEXT = "      CRM,      .";
const IMAGE_DIR = path.join(__dirname, "Image");
const MAX_AVATAR_FILE_SIZE = Number(process.env.MAX_AVATAR_FILE_SIZE || 5 * 1024 * 1024);
const SUPPORTED_APPOINTMENT_STATUSES = [
  "Активная",
  "Завершена",
  "Неявка",
  "Отменена",
];
const RESERVED_COST_FIELDS = new Set([
  "id",
  "Id",
  "ID",
  "Uslugi",
  "Dlitelnost",
]);
const CONFIRMED_STATUS_TOKENS = [
  "подтверждена",
  "подтвержден",
  "done",
  "завершена",
  "отменена",
];
const ACTIVE_STATUS_TOKENS = ["актив", "active"];
const BLOCKED_STATUS_TOKENS = ["блок", "block"];
const tableToModelMap = {
  Appointments: "appointments",
  Schedules: "schedules",
  Users: "users",
  Cost: "cost",
  Barbers: "barbers",
  Services: "services",
  ServicePrices: "servicePrices",
  BotSettings: "botSettings",
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
};
const booleanFields = {
  Barbers: ["isActive"],
  Services: ["isActive"],
  BotSettings: ["isBotEnabled"],
};
let botProcess = null;
const botRuntime = {
  running: false,
  since: null,
  lastExit: null,
  lastError: null,
};
const pythonExecutable =
  process.env.BOT_PYTHON_PATH ||
  (os.platform() === "win32" ? "python" : "python3");
const botScriptPath = path.join(__dirname, "BotBarberShop.py");
app.use(cors());
app.use(express.json({ limit: "12mb" }));
app.use(express.static(path.join(__dirname)));
app.use("/Image", express.static(IMAGE_DIR));
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
const buildBarberLookup = (records = []) => {
  const lookup = new Map();
  records.forEach((barber) => {
    [barber.name, barber.login, barber.nickname].forEach((key) => {
      const normalized = canonicalizeKey(key);
      if (normalized && barber.id && !lookup.has(normalized)) {
        lookup.set(normalized, barber.id);
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
    throw new Error("Пустое изображение");
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
const parseDateTime = (dateStr, timeRange) => {
  if (!dateStr) return null;
  const timeStart = normalizeText(timeRange).split("-")[0]?.trim() || "00:00";
  const isoCandidate = `${dateStr}T${timeStart}:00`;
  const parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const mapAppointment = (record) => {
  const startDate = parseDateTime(record.Date, record.Time);
  return {
    ...record,
    startDateTime: startDate ? startDate.toISOString() : null,
    sortKey: startDate ? startDate.getTime() : 0,
    isConfirmed: isConfirmedStatus(record.Status),
    isActive: isActiveStatus(record.Status),
    isBlocked: isBlockedStatus(record.Status),
    normalizedPhone: normalizePhone(record.Phone),
  };
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
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  return jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    return next();
  });
};
const authenticateStream = (req, res, next) => {
  const directToken = req.query.token;
  const authHeader = req.headers.authorization;
  const headerToken = authHeader && authHeader.split(" ")[1];
  const token = directToken || headerToken;
  if (!token) return res.sendStatus(401);
  return jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    return next();
  });
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
  });
  return barbers;
};
const getBotSettings = async () => {
  const record = await prisma.botSettings.findFirst();
  return record;
};
const getServiceCatalog = async (includeInactive = true) => {
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
  return services.map((service) => ({
    ...service,
    prices: barbers.reduce((acc, barber) => {
      const key = `${service.id}:${barber.id}`;
      acc[barber.id] = priceMap.has(key) ? priceMap.get(key) : null;
      return acc;
    }, {}),
  }));
};
const buildClientRows = (users, appointments) => {
  const now = new Date();
  const yearAgo = new Date(now);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
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
        if (normalizedPhone && appt.normalizedPhone === normalizedPhone)
          return true;
        if (
          user.Name &&
          appt.CustomerName &&
          normalizeText(user.Name) === normalizeText(appt.CustomerName)
        )
          return true;
        return false;
      }),
    );
    const active = relatedAppointments.filter((appt) => appt.isActive);
    const confirmed = relatedAppointments.filter((appt) => appt.isConfirmed);
    const confirmedYear = confirmed.filter(
      (appt) => appt.startDateTime && new Date(appt.startDateTime) >= yearAgo,
    );
    const lastConfirmed = confirmed.sort((a, b) => b.sortKey - a.sortKey)[0];
    clients.push({
      id: user.id,
      name: user.Name || "Без имени",
      phone: user.Phone || "",
      normalizedPhone,
      telegramId: user.TelegramID || null,
      preferredBarber: user.Barber || null,
      activeAppointments: active.length,
      confirmedHaircutsYear: confirmedYear.length,
      totalConfirmed: confirmed.length,
      lastHaircutDate: lastConfirmed?.Date || null,
      lastHaircutTime: lastConfirmed?.Time || null,
      lastHaircutBarber: lastConfirmed?.Barber || null,
      isBlocked: relatedAppointments.some((appt) => appt.isBlocked),
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
        (client.normalizedPhone &&
          client.normalizedPhone === appt.normalizedPhone &&
          client.name === (appt.CustomerName || client.name)),
    );
    if (exists) return;
    const confirmedYear =
      appt.isConfirmed &&
      appt.startDateTime &&
      new Date(appt.startDateTime) >= yearAgo
        ? 1
        : 0;
    clients.push({
      id: clientId,
      name: appt.CustomerName || "Гость",
      phone: appt.Phone || "",
      normalizedPhone: appt.normalizedPhone,
      telegramId: null,
      preferredBarber: appt.Barber || null,
      activeAppointments: appt.isActive ? 1 : 0,
      confirmedHaircutsYear: confirmedYear,
      totalConfirmed: appt.isConfirmed ? 1 : 0,
      lastHaircutDate: appt.isConfirmed ? appt.Date : null,
      lastHaircutTime: appt.isConfirmed ? appt.Time : null,
      lastHaircutBarber: appt.isConfirmed ? appt.Barber : null,
      isBlocked: appt.isBlocked,
      activeRecords: appt.isActive ? [appt] : [],
      historyRecords: appt.isConfirmed ? [appt] : [],
    });
  });
  return clients.sort((a, b) => {
    const aDate = a.lastHaircutDate
      ? new Date(
          `${a.lastHaircutDate}T${(a.lastHaircutTime || "00:00").slice(0, 5)}:00`,
        ).getTime()
      : 0;
    const bDate = b.lastHaircutDate
      ? new Date(
          `${b.lastHaircutDate}T${(b.lastHaircutTime || "00:00").slice(0, 5)}:00`,
        ).getTime()
      : 0;
    return bDate - aDate;
  });
};
const buildDashboardSnapshot = async () => {
  const [
    appointmentsRaw,
    users,
    barbers,
    services,
    settings,
    backups,
  ] = await Promise.all([
    prisma.appointments.findMany(),
    prisma.users.findMany(),
    getBarbers({ includeInactive: true }),
    getServiceCatalog(true),
    getBotSettings(),
    listBackups(),
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
  const blockedClients = appointments.filter((appt) => appt.isBlocked).length;
  const clients = buildClientRows(users, appointments);
  const stats = {
    totalUsers: users.length,
    activeAppointments: upcoming.length,
    todaysAppointments,
    confirmedYear,
    blockedClients,
  };
  return {
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
  const [appointmentsRaw, usersCount] = await Promise.all([
    prisma.appointments.findMany(),
    prisma.users.count(),
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
  const blockedClients = mapped.filter((appt) => appt.isBlocked).length;
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
  botProcess = spawn(
    process.env.BOT_COMMAND || pythonExecutable,
    [botScriptPath],
    {
      cwd: __dirname,
      env: { ...process.env },
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
const ensureBotProcessState = async () => {
  const settings = await getBotSettings();
  if (settings?.isBotEnabled) {
    await startBotProcess();
  } else if (botProcess) {
    await stopBotProcess();
  }
};
app.get("/api/login/options", async (req, res) => {
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
});
app.post("/api/login", async (req, res) => {
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
      select: { id: true, name: true, login: true, password: true },
    });
    if (!barber || !barber.password || barber.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Неверный логин или пароль." });
    }
    const token = jwt.sign({ username: barber.login }, JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json({
      success: true,
      token,
      username: barber.login,
      displayName: barber.name || barber.login,
      barberId: barber.id,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Ошибка входа. Попробуйте позже." });
  }
});
app.use("/api", licenseMiddleware);
app.get("/api/login/options", async (req, res) => {
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
});
app.post("/api/login", async (req, res) => {
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
      select: { id: true, name: true, login: true, password: true },
    });
    if (!barber || !barber.password || barber.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Неверный логин или пароль." });
    }
    const token = jwt.sign({ username: barber.login }, JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json({
      success: true,
      token,
      username: barber.login,
      displayName: barber.name || barber.login,
      barberId: barber.id,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Ошибка входа. Попробуйте позже." });
  }
});
app.get("/api/license/status", authenticateToken, async (req, res) => {
  try {
    const status = await ensureLicenseValid();
    res.json(status);
  } catch (error) {
    res.status(403).json({
      error: "Лицензия недействительна",
      details: error.message,
      status: getLicenseStatus(),
    });
  }
});
app.get("/api/bot/status", authenticateToken, async (req, res) => {
  const settings = await getBotSettings();
  res.json({ status: serializeBotRuntime(), settings });
});
app.post("/api/bot/status", authenticateToken, async (req, res) => {
  const { action, isBotEnabled } = req.body || {};
  try {
    if (typeof isBotEnabled === "boolean") {
      await prisma.botSettings.updateMany({
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
    res.status(500).json({ error: "�� ������� �������� ��������� ����." });
  }
});

app.get("/api/system/update", authenticateToken, async (req, res) => {
  try {
    const force = req.query.force === "1" || req.query.force === "true";
    const info = await checkForUpdates(force);
    res.json(info);
  } catch (error) {
    console.error("Update check error:", error);
    res.status(500).json({
      error: "Не удалось проверить обновления",
      details: error.message,
    });
  }
});
app.post("/api/system/update", authenticateToken, async (req, res) => {
  try {
    const result = await applyUpdate();
    await ensureBotProcessState();
    const info = await checkForUpdates(true);
    res.json({ ...result, info });
  } catch (error) {
    console.error("Update apply error:", error);
    res.status(500).json({
      error: "Не удалось применить обновление",
      details: error.message,
    });
  }
});
app.get("/api/dashboard/overview", authenticateToken, async (req, res) => {
  try {
    const snapshot = await buildDashboardSnapshot();
    res.json(snapshot);
  } catch (error) {
    console.error("Dashboard snapshot error:", error);
    res.status(500).json({ error: "Не удалось собрать сводку." });
  }
});
app.get("/api/services/full", authenticateToken, async (req, res) => {
  try {
    const services = await getServiceCatalog(true);
    const barbers = await getBarbers({ includeInactive: true });
    res.json({ services, barbers });
  } catch (error) {
    console.error("Services fetch error:", error);
    res.status(500).json({ error: "Не удалось получить список услуг." });
  }
});
app.get("/api/assets/avatars", authenticateToken, async (req, res) => {
  try {
    const images = await listAvatarImages();
    res.json({ images });
  } catch (error) {
    console.error("Avatar assets error:", error);
    res.status(500).json({ error: "    ." });
  }
});

app.post("/api/assets/avatars/upload", authenticateToken, async (req, res) => {
  try {
    const { name, data } = req.body || {};
    if (!data) {
      return res.status(400).json({ error: "Не передано изображение" });
    }
    const sanitizedName = buildSafeImageFilename(name || `avatar-${Date.now()}.png`);
    if (!sanitizedName) {
      return res.status(400).json({ error: "Неподдерживаемый формат файла" });
    }
    await fs.ensureDir(IMAGE_DIR);
    const buffer = decodeBase64Image(data);
    if (!buffer.length) {
      return res.status(400).json({ error: "Пустой файл" });
    }
    if (buffer.length > MAX_AVATAR_FILE_SIZE) {
      return res
        .status(400)
        .json({ error: `Файл слишком большой (до ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} МБ)` });
    }
    const filename = await ensureUniqueImageName(sanitizedName);
    await fs.writeFile(path.join(IMAGE_DIR, filename), buffer);
    const images = await listAvatarImages();
    res.json({ success: true, path: `/Image/${filename}`, images });
  } catch (error) {
    console.error("Avatar upload error:", error);
    res.status(500).json({ error: "Не удалось загрузить изображение", details: error.message });
  }
});

app.delete("/api/assets/avatars", authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body || {};
    if (!filename) {
      return res.status(400).json({ error: "Не указано имя файла" });
    }
    const sanitizedName = getExistingImageFilename(filename);
    if (!sanitizedName) {
      return res.status(400).json({ error: "Неверное имя файла" });
    }
    const targetPath = path.join(IMAGE_DIR, sanitizedName);
    if (!(await fs.pathExists(targetPath))) {
      return res.status(404).json({ error: "Файл не найден" });
    }
    await fs.remove(targetPath);
    const images = await listAvatarImages();
    res.json({ success: true, images });
  } catch (error) {
    console.error("Avatar delete error:", error);
    res.status(500).json({ error: "Не удалось удалить изображение", details: error.message });
  }
});

app.get("/api/bot/messages", authenticateToken, async (req, res) => {
  try {
    const messages = await prisma.botMessages.findMany({
      orderBy: [{ code: "asc" }, { title: "asc" }],
    });
    res.json(messages);
  } catch (error) {
    console.error("Bot messages fetch error:", error);
    res.status(500).json({ error: "Не удалось загрузить сообщения бота." });
  }
});

app.put("/api/bot/messages/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const payload = req.body || {};
  try {
    const data = {
      code: payload.code ? normalizeText(payload.code) : undefined,
      title: payload.title ?? undefined,
      text: payload.text ?? "",
    };
    if (!data.text.trim()) {
      return res.status(400).json({ error: "Текст сообщения не может быть пустым." });
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
    res.status(500).json({ error: "Не удалось сохранить сообщение." });
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
  try {
    await upsertServiceWithPrices(null, req.body || {});
    const services = await getServiceCatalog(true);
    res.status(201).json({ services });
  } catch (error) {
    console.error("Create service error:", error);
    res.status(500).json({ error: "Не удалось создать услугу." });
  }
});
app.put("/api/services/full/:id", authenticateToken, async (req, res) => {
  try {
    await upsertServiceWithPrices(req.params.id, req.body || {});
    const services = await getServiceCatalog(true);
    res.json({ services });
  } catch (error) {
    console.error("Update service error:", error);
    res.status(500).json({ error: "Не удалось обновить услугу." });
  }
});
app.delete("/api/services/full/:id", authenticateToken, async (req, res) => {
  try {
    await prisma.$transaction([
      prisma.servicePrices.deleteMany({ where: { serviceId: req.params.id } }),
      prisma.services.delete({ where: { id: req.params.id } }),
    ]);
    const services = await getServiceCatalog(true);
    res.json({ services });
  } catch (error) {
    console.error("Delete service error:", error);
    res.status(500).json({ error: "Не удалось удалить услугу." });
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
    res.json(hydrated);
  } catch (error) {
    console.error("Barbers list error:", error);
    res.status(500).json({ error: "Не удалось получить список барберов." });
  }
});
app.get("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Неизвестная таблица." });
  if (tableName === "Schedules") {
    try {
      const barbersList = await getBarbers({ includeInactive: true });
      const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
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
      return res.status(500).json({ error: "Не удалось получить расписание." });
    }
  }
  try {
    const records = await prisma[modelName].findMany();
    return res.json(records);
  } catch (error) {
    console.error("Generic fetch error:", error);
    return res.status(500).json({ error: "Ошибка при получении данных." });
  }
});
app.put("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Неизвестная таблица." });
  const data = coercePayload(tableName, { ...req.body });
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
      return res.status(500).json({ error: "Не удалось обновить смену." });
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
    res.json(updated);
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record update error:", error);
    res.status(500).json({ error: "Не удалось сохранить запись." });
  }
});
app.post("/api/:tableName", authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Неизвестная таблица." });
  const payload = coercePayload(tableName, { ...req.body });
  if (tableName === "Appointments" && !normalizeText(payload.Barber)) {
    return res
      .status(400)
      .json({ error: "Нельзя создать запись без выбора барбера." });
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
    res.status(500).json({ error: "Не удалось создать запись." });
  }
});
app.delete("/api/:tableName/:id", authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName])
    return res.status(404).json({ error: "Неизвестная таблица." });
  try {
    await prisma[modelName].delete({ where: { id } });
    res.status(204).send();
    requestRealtimePush(true);
  } catch (error) {
    console.error("Record delete error:", error);
    res.status(500).json({ error: "Не удалось удалить запись." });
  }
});
app.post("/api/backups/create", authenticateToken, async (req, res) => {
  try {
    await createBackup();
    res.json({ success: true, message: "Бэкап создан." });
  } catch (error) {
    console.error("Backup create error:", error);
    res.status(500).json({ error: "Не удалось создать бэкап." });
  }
});
app.get("/api/backups/list", authenticateToken, async (req, res) => {
  try {
    const files = await listBackups();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Не удалось получить список бэкапов." });
  }
});
app.post("/api/backups/restore", authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body || {};
    if (!filename)
      return res.status(400).json({ error: "Не указано имя файла." });
    const backupPath = path.join(BACKUP_DIR, filename);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: "Бэкап не найден." });
    }
    await prisma.$disconnect();
    await fs.copyFile(backupPath, DB_PATH);
    res.json({ success: true, message: `Восстановлено из ${filename}` });
  } catch (error) {
    console.error("Backup restore error:", error);
    res.status(500).json({ error: "Не удалось восстановить базу." });
  }
});
app.get("/api/options/appointments", authenticateToken, async (req, res) => {
  try {
    const [services, barbers, appointments] = await Promise.all([
      getServiceCatalog(false),
      getBarbers({ includeInactive: false }),
      prisma.appointments.findMany({ select: { Status: true } }),
    ]);
    const statuses = new Set(SUPPORTED_APPOINTMENT_STATUSES);
    appointments.forEach((appt) => {
      const resolved = resolveSupportedStatus(appt.Status);
      if (resolved) statuses.add(resolved);
    });
    res.json({
      services: services.map((svc) => svc.name),
      barbers: barbers.map((barber) => barber.name),
      statuses: Array.from(statuses),
    });
  } catch (error) {
    console.error("Options fetch error:", error);
    res.status(500).json({ error: "Не удалось получить опции." });
  }
});
app.get("/api/user-profile/:name", authenticateToken, async (req, res) => {
  try {
    const { name } = req.params;
    const user = await prisma.users.findFirst({ where: { Name: name } });
    if (!user) return res.status(404).json({ error: "Клиент не найден." });
    const appointmentsRaw = await prisma.appointments.findMany({
      where: { CustomerName: name },
    });
    const appointments = appointmentsRaw
      .map(mapAppointment)
      .sort((a, b) => b.sortKey - a.sortKey);
    res.json({ user, appointments });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ error: "Не удалось загрузить профиль." });
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
    app.listen(PORT, () => {
      console.log(`CRM server ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Bootstrap error:", error);
    process.exit(1);
  }
};
bootstrap();
