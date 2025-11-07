
require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const path = require('path');
const { randomUUID } = require('crypto');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const fs = require('fs-extra');
const { spawn } = require('child_process');
const os = require('os');
const { ensureLicenseValid, licenseMiddleware, getLicenseStatus, startLicenseWatcher } = require('./services/licenseGuard');
const { checkForUpdates, applyUpdate } = require('./services/updateManager');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'change-me-secret';
const BACKUP_DIR = path.join(__dirname, 'backups');
const DB_PATH = path.join(__dirname, 'prisma', 'dev.db');
const BACKUP_RETENTION_DAYS = 30;
const DEFAULT_BOT_DESCRIPTION = 'Telegram-бот Brothers Shop записывает клиентов, напоминает о визите и синхронизируется с этой панелью.';
const DEFAULT_ABOUT_TEXT = 'Запишитесь на стрижку в пару кликов, выбирайте услуги и барбера, получайте напоминания и новости барбершопа.';

const FALLBACK_BARBERS = [
  {
    id: 'barber-alexey',
    name: 'Алексей🦐',
    nickname: 'Alex',
    description: 'Специалист по классическим мужским стрижкам и аккуратной бороде.',
    rating: '⭐⭐⭐⭐⭐',
    avatarUrl: '/Image/barber_alex.jpg',
    color: '#65a30d',
    orderIndex: 0,
  },
  {
    id: 'barber-alina',
    name: 'Алина💖',
    nickname: 'Alina',
    description: 'Топ-колорист и эксперт по сложным укладкам.',
    rating: '⭐⭐⭐⭐⭐',
    avatarUrl: '/Image/barber_alina.jpg',
    color: '#f472b6',
    orderIndex: 1,
  },
  {
    id: 'barber-vladimir',
    name: 'Владимир😎',
    nickname: 'Vlad',
    description: 'Делает сильные контрастные образы и работает с брутальными укладками.',
    rating: '⭐⭐⭐⭐',
    avatarUrl: '/Image/barber_vlad.jpg',
    color: '#fb923c',
    orderIndex: 2,
  },
  {
    id: 'barber-timur',
    name: 'Тимур🐼',
    nickname: 'Tim',
    description: 'Ведёт барбершоп и отвечает за мужские укладки и бритьё опаской.',
    rating: '⭐⭐⭐⭐⭐',
    avatarUrl: '/Image/barber_timur.jpg',
    color: '#06b6d4',
    orderIndex: 3,
  },
];

const COST_FIELD_TO_BARBER = {
  Timur: 'Тимур🐼',
  Vladimir: 'Владимир😎',
  Alina: 'Алина💖',
  Aleksey: 'Алексей🦐',
};

const CONFIRMED_STATUS_TOKENS = ['подтверж', 'done', 'выполн', 'заверш'];
const ACTIVE_STATUS_TOKENS = ['актив', 'active'];
const BLOCKED_STATUS_TOKENS = ['блок'];

const usersWithPasswords = {
  'Алексей🦐': 'alex_pass_123',
  'Алина💖': 'alina_pass_456',
  'Владимир😎': 'vladimir_pass_789',
  'Тимур🐼': 'timur_pass_000',
};

const tableToModelMap = {
  Appointments: 'appointments',
  Schedules: 'schedules',
  Users: 'users',
  Cost: 'cost',
  Barbers: 'barbers',
  Services: 'services',
  ServicePrices: 'servicePrices',
  BotSettings: 'botSettings',
  BotMessages: 'botMessages',
};

const numericFields = {
  Users: [],
  Appointments: [],
  Schedules: [],
  Cost: [],
  Barbers: ['orderIndex'],
  Services: ['duration', 'orderIndex'],
  ServicePrices: ['price'],
  BotSettings: ['bookingLimit', 'minLeadHours', 'maxDaysAhead'],
};

const booleanFields = {
  Barbers: ['isActive'],
  Services: ['isActive'],
  BotSettings: ['isBotEnabled'],
};

let botProcess = null;
const botRuntime = {
  running: false,
  since: null,
  lastExit: null,
  lastError: null,
};

const pythonExecutable = process.env.BOT_PYTHON_PATH || (os.platform() === 'win32' ? 'python' : 'python3');
const botScriptPath = path.join(__dirname, 'BotBarberShop.py');

app.use(cors());
app.use(express.json({ limit: '4mb' }));
app.use(express.static(path.join(__dirname)));

const noCacheMiddleware = (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
};

app.use('/api', noCacheMiddleware);
app.use('/api', licenseMiddleware);
const normalizeText = (value) => (value ?? '').toString().trim();
const normalizePhone = (phone) => {
  if (!phone) return '';
  const digits = phone.toString().replace(/[^\d+]/g, '');
  if (!digits) return '';
  if (digits.startsWith('+')) return digits;
  if (digits.startsWith('8')) return `+7${digits.slice(1)}`;
  if (digits.startsWith('7')) return `+7${digits.slice(1)}`;
  return digits;
};

const toLower = (value) => normalizeText(value).toLowerCase();
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
  const timeStart = normalizeText(timeRange).split('-')[0]?.trim() || '00:00';
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
    if (payload[field] === null || payload[field] === '') {
      payload[field] = null;
      return;
    }
    const parsed = Number(payload[field]);
    payload[field] = Number.isNaN(parsed) ? null : parsed;
  });
  booleanList.forEach((field) => {
    if (payload[field] === undefined) return;
    const value = payload[field];
    payload[field] = value === true || value === 'true' || value === 1 || value === '1';
  });
  return payload;
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
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
  return files.filter((file) => file.endsWith('.db')).sort().reverse();
};

const createBackup = async () => {
  await fs.ensureDir(BACKUP_DIR);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const target = path.join(BACKUP_DIR, `backup-${timestamp}.db`);
  await fs.copyFile(DB_PATH, target);
  return target;
};

const ensureBootstrapData = async () => {
  const [settingsCount, barbersCount, messagesCount] = await Promise.all([
    prisma.botSettings.count(),
    prisma.barbers.count(),
    prisma.botMessages.count(),
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
        lastSyncSource: 'bootstrap',
      },
    });
  }

  if (!barbersCount) {
    await prisma.barbers.createMany({
      data: FALLBACK_BARBERS.map((barber, index) => ({
        id: barber.id,
        name: barber.name,
        nickname: barber.nickname,
        description: barber.description,
        rating: barber.rating,
        avatarUrl: barber.avatarUrl,
        color: barber.color,
        orderIndex: barber.orderIndex ?? index,
        isActive: true,
      })),
    });
  }

  if (!messagesCount) {
    await prisma.botMessages.createMany({
      data: [
        {
          id: randomUUID(),
          code: 'menu_about',
          title: 'О салоне (бот)',
          text: DEFAULT_ABOUT_TEXT,
        },
        {
          id: randomUUID(),
          code: 'menu_help',
          title: 'Поддержка',
          text: 'Напишите нам в Telegram @brothershop_support или позвоните +7 (900) 000-00-00.',
        },
      ],
    });
  }
};
const seedServicesFromCost = async () => {
  const servicesCount = await prisma.services.count();
  if (servicesCount) return;
  const costRows = await prisma.cost.findMany();
  if (!costRows.length) return;
  const barbers = await prisma.barbers.findMany();
  const barberMap = new Map(barbers.map((barber) => [barber.name, barber.id]));

  await prisma.$transaction(async (tx) => {
    for (const [index, row] of costRows.entries()) {
      const durationMatch = normalizeText(row.Dlitelnost).match(/(\d+)/);
      const duration = durationMatch ? Number(durationMatch[1]) : 0;
      const service = await tx.services.create({
        data: {
          id: randomUUID(),
          name: row.Uslugi || `Услуга #${index + 1}`,
          description: '',
          category: null,
          duration,
          orderIndex: index,
          isActive: true,
        },
      });

      const priceEntries = Object.entries(COST_FIELD_TO_BARBER);
      const priceRecords = [];
      for (const [fieldName, barberName] of priceEntries) {
        const priceValue = row[fieldName];
        if (priceValue === null || priceValue === undefined || priceValue === '') continue;
        const barberId = barberMap.get(barberName);
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
    orderBy: [{ orderIndex: 'asc' }, { name: 'asc' }],
  });
  if (barbers.length) return barbers;
  return FALLBACK_BARBERS;
};

const getBotSettings = async () => {
  const record = await prisma.botSettings.findFirst();
  return record;
};

const getServiceCatalog = async (includeInactive = true) => {
  const where = includeInactive ? {} : { isActive: true };
  let services = await prisma.services.findMany({
    where,
    orderBy: [{ orderIndex: 'asc' }, { name: 'asc' }],
  });
  if (!services.length) {
    services = (await prisma.cost.findMany()).map((row, index) => ({
      id: row.id,
      name: row.Uslugi || `Услуга #${index + 1}`,
      description: '',
      category: null,
      duration: Number(normalizeText(row.Dlitelnost).match(/(\d+)/)?.[1] ?? 0),
      isActive: true,
      orderIndex: index,
      legacy: true,
    }));
  }
  const prices = await prisma.servicePrices.findMany();
  const priceMap = new Map(prices.map((price) => [`${price.serviceId}:${price.barberId}`, price.price]));
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
        if (normalizedPhone && appt.normalizedPhone === normalizedPhone) return true;
        if (user.Name && appt.CustomerName && normalizeText(user.Name) === normalizeText(appt.CustomerName)) return true;
        return false;
      }),
    );

    const active = relatedAppointments.filter((appt) => appt.isActive);
    const confirmed = relatedAppointments.filter((appt) => appt.isConfirmed);
    const confirmedYear = confirmed.filter((appt) => appt.startDateTime && new Date(appt.startDateTime) >= yearAgo);
    const lastConfirmed = confirmed.sort((a, b) => b.sortKey - a.sortKey)[0];

    clients.push({
      id: user.id,
      name: user.Name || 'Без имени',
      phone: user.Phone || '',
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
    const exists = clients.some((client) => client.id === clientId
      || (client.normalizedPhone && client.normalizedPhone === appt.normalizedPhone
        && client.name === (appt.CustomerName || client.name)));
    if (exists) return;
    const confirmedYear = appt.isConfirmed && appt.startDateTime && new Date(appt.startDateTime) >= yearAgo ? 1 : 0;
    clients.push({
      id: clientId,
      name: appt.CustomerName || 'Гость',
      phone: appt.Phone || '',
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
    const aDate = a.lastHaircutDate ? new Date(`${a.lastHaircutDate}T${(a.lastHaircutTime || '00:00').slice(0, 5)}:00`).getTime() : 0;
    const bDate = b.lastHaircutDate ? new Date(`${b.lastHaircutDate}T${(b.lastHaircutTime || '00:00').slice(0, 5)}:00`).getTime() : 0;
    return bDate - aDate;
  });
};

const buildDashboardSnapshot = async () => {
  const [appointmentsRaw, users, barbers, services, settings, messages, backups] = await Promise.all([
    prisma.appointments.findMany(),
    prisma.users.findMany(),
    getBarbers({ includeInactive: true }),
    getServiceCatalog(true),
    getBotSettings(),
    prisma.botMessages.findMany({ orderBy: { code: 'asc' } }),
    listBackups(),
  ]);

  const appointments = appointmentsRaw.map(mapAppointment);
  const now = new Date();
  const todayKey = now.toISOString().slice(0, 10);
  const yearAgo = new Date(now);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);

  const upcoming = appointments.filter((appt) => appt.isActive).sort((a, b) => a.sortKey - b.sortKey);
  const history = appointments
    .filter((appt) => !appt.isActive && appt.sortKey)
    .sort((a, b) => b.sortKey - a.sortKey)
    .slice(0, 400);

  const confirmedYear = appointments.filter((appt) => appt.isConfirmed && appt.startDateTime && new Date(appt.startDateTime) >= yearAgo).length;
  const todaysAppointments = upcoming.filter((appt) => appt.Date === todayKey).length;
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
      messages,
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

const startBotProcess = async () => {
  if (botProcess || !fs.existsSync(botScriptPath)) {
    if (!fs.existsSync(botScriptPath)) {
      botRuntime.lastError = 'BotBarberShop.py not found';
    }
    return serializeBotRuntime();
  }
  botProcess = spawn(process.env.BOT_COMMAND || pythonExecutable, [botScriptPath], {
    cwd: __dirname,
    env: { ...process.env },
  });
  botRuntime.running = true;
  botRuntime.since = new Date().toISOString();
  botRuntime.lastError = null;

  botProcess.stdout.on('data', (chunk) => {
    console.log(`[BOT]: ${chunk.toString().trim()}`);
  });
  botProcess.stderr.on('data', (chunk) => {
    const message = chunk.toString();
    console.error(`[BOT:ERR]: ${message.trim()}`);
    botRuntime.lastError = message.trim();
  });
  botProcess.on('close', (code) => {
    botRuntime.running = false;
    botRuntime.lastExit = { code, at: new Date().toISOString() };
    botProcess = null;
  });

  return serializeBotRuntime();
};

const stopBotProcess = async () => {
  if (!botProcess) return serializeBotRuntime();
  return new Promise((resolve) => {
    botProcess.on('close', () => resolve(serializeBotRuntime()));
    botProcess.kill('SIGTERM');
    setTimeout(() => {
      if (botProcess) {
        botProcess.kill('SIGKILL');
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

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (usersWithPasswords[username] && usersWithPasswords[username] === password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ success: true, token, username });
  }
  return res.status(401).json({ success: false, message: 'Неверный логин или пароль.' });
});

app.get('/api/license/status', authenticateToken, async (req, res) => {
  try {
    const status = await ensureLicenseValid();
    res.json(status);
  } catch (error) {
    res.status(403).json({ error: 'Лицензия недействительна', details: error.message, status: getLicenseStatus() });
  }
});

app.get('/api/bot/status', authenticateToken, async (req, res) => {
  const settings = await getBotSettings();
  res.json({ status: serializeBotRuntime(), settings });
});

app.post('/api/bot/status', authenticateToken, async (req, res) => {
  const { action, isBotEnabled } = req.body || {};
  try {
    if (typeof isBotEnabled === 'boolean') {
      await prisma.botSettings.updateMany({ data: { isBotEnabled, lastSyncSource: 'site' } });
    }
    if (action === 'start') await startBotProcess();
    if (action === 'stop') await stopBotProcess();
    if (action === 'restart') {
      await stopBotProcess();
      await startBotProcess();
    }
    await ensureBotProcessState();
    const settings = await getBotSettings();
    res.json({ status: serializeBotRuntime(), settings });
  } catch (error) {
    console.error('Bot status update failed:', error);
    res.status(500).json({ error: 'Не удалось изменить состояние бота.' });
  }
});

app.get('/api/system/update', authenticateToken, async (req, res) => {
  try {
    const force = req.query.force === '1' || req.query.force === 'true';
    const info = await checkForUpdates(force);
    res.json(info);
  } catch (error) {
    console.error('Update check error:', error);
    res.status(500).json({ error: 'Не удалось проверить обновления', details: error.message });
  }
});

app.post('/api/system/update', authenticateToken, async (req, res) => {
  try {
    const result = await applyUpdate();
    await ensureBotProcessState();
    const info = await checkForUpdates(true);
    res.json({ ...result, info });
  } catch (error) {
    console.error('Update apply error:', error);
    res.status(500).json({ error: 'Не удалось применить обновление', details: error.message });
  }
});

app.get('/api/dashboard/overview', authenticateToken, async (req, res) => {
  try {
    const snapshot = await buildDashboardSnapshot();
    res.json(snapshot);
  } catch (error) {
    console.error('Dashboard snapshot error:', error);
    res.status(500).json({ error: 'Не удалось собрать сводку.' });
  }
});

app.get('/api/services/full', authenticateToken, async (req, res) => {
  try {
    const services = await getServiceCatalog(true);
    const barbers = await getBarbers({ includeInactive: true });
    res.json({ services, barbers });
  } catch (error) {
    console.error('Services fetch error:', error);
    res.status(500).json({ error: 'Не удалось получить услуги.' });
  }
});
const upsertServiceWithPrices = async (serviceId, payload) => {
  const { prices = {}, ...serviceData } = payload;
  let savedService;
  await prisma.$transaction(async (tx) => {
    const baseData = {
      name: serviceData.name,
      description: serviceData.description || '',
      category: serviceData.category || null,
      duration: Number(serviceData.duration) || 0,
      isActive: serviceData.isActive !== false,
      orderIndex: Number(serviceData.orderIndex) || 0,
    };
    if (serviceId) {
      savedService = await tx.services.update({ where: { id: serviceId }, data: baseData });
    } else {
      savedService = await tx.services.create({ data: { id: randomUUID(), ...baseData } });
    }
    await tx.servicePrices.deleteMany({ where: { serviceId: savedService.id } });
    const entries = Object.entries(prices)
      .filter(([_, value]) => value !== null && value !== '' && !Number.isNaN(Number(value)))
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

app.post('/api/services/full', authenticateToken, async (req, res) => {
  try {
    await upsertServiceWithPrices(null, req.body || {});
    const services = await getServiceCatalog(true);
    res.status(201).json({ services });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ error: 'Не удалось создать услугу.' });
  }
});

app.put('/api/services/full/:id', authenticateToken, async (req, res) => {
  try {
    await upsertServiceWithPrices(req.params.id, req.body || {});
    const services = await getServiceCatalog(true);
    res.json({ services });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ error: 'Не удалось обновить услугу.' });
  }
});

app.delete('/api/services/full/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.$transaction([
      prisma.servicePrices.deleteMany({ where: { serviceId: req.params.id } }),
      prisma.services.delete({ where: { id: req.params.id } }),
    ]);
    const services = await getServiceCatalog(true);
    res.json({ services });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ error: 'Не удалось удалить услугу.' });
  }
});

app.get('/api/barbers/full', authenticateToken, async (req, res) => {
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
      const related = appointments.filter((appt) => normalizeText(appt.Barber) === normalizeText(barber.name));
      return {
        ...barber,
        stats: {
          total: related.length,
          upcoming: related.filter((appt) => appt.isActive).length,
          confirmedYear: related.filter((appt) => appt.isConfirmed && appt.startDateTime && new Date(appt.startDateTime) >= yearAgo).length,
        },
      };
    });
    res.json(hydrated);
  } catch (error) {
    console.error('Barbers list error:', error);
    res.status(500).json({ error: 'Не удалось получить список барберов.' });
  }
});

app.get('/api/bot/messages', authenticateToken, async (req, res) => {
  const messages = await prisma.botMessages.findMany({ orderBy: { code: 'asc' } });
  res.json(messages);
});

app.post('/api/bot/messages', authenticateToken, async (req, res) => {
  try {
    const record = await prisma.botMessages.create({
      data: {
        id: randomUUID(),
        code: req.body?.code || `message_${Date.now()}`,
        title: req.body?.title || '',
        text: req.body?.text || '',
      },
    });
    res.status(201).json(record);
  } catch (error) {
    console.error('Create message error:', error);
    res.status(500).json({ error: 'Не удалось создать сообщение.' });
  }
});

app.put('/api/bot/messages/:id', authenticateToken, async (req, res) => {
  try {
    const record = await prisma.botMessages.update({
      where: { id: req.params.id },
      data: {
        code: req.body?.code,
        title: req.body?.title,
        text: req.body?.text,
      },
    });
    res.json(record);
  } catch (error) {
    console.error('Update message error:', error);
    res.status(500).json({ error: 'Не удалось обновить сообщение.' });
  }
});

app.delete('/api/bot/messages/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.botMessages.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    console.error('Delete message error:', error);
    res.status(500).json({ error: 'Не удалось удалить сообщение.' });
  }
});
app.get('/api/:tableName', authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName]) return res.status(404).json({ error: 'Неизвестная таблица.' });

  if (tableName === 'Schedules') {
    try {
      const barbers = await getBarbers({ includeInactive: true });
      const allSchedules = await prisma.schedules.findMany();
      const schedulesMap = allSchedules.reduce((acc, schedule) => {
        if (schedule.Barber && schedule.Date) {
          acc.set(`${schedule.Barber}-${schedule.Date}`, schedule);
        }
        return acc;
      }, new Map());

      const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
      const today = new Date();
      const fullSchedule = [];
      for (const barber of barbers) {
        for (let offset = 0; offset < 14; offset += 1) {
          const date = new Date(today);
          date.setDate(today.getDate() + offset);
          const yyyy = date.getFullYear();
          const mm = String(date.getMonth() + 1).padStart(2, '0');
          const dd = String(date.getDate()).padStart(2, '0');
          const dateKey = `${yyyy}-${mm}-${dd}`;
          const dayIndex = (date.getDay() + 6) % 7;
          const existing = schedulesMap.get(`${barber.name}-${dateKey}`);
          fullSchedule.push({
            id: `${barber.id}-${dateKey}`,
            Barber: barber.name,
            DayOfWeek: daysOfWeek[dayIndex],
            Date: dateKey,
            Week: existing?.Week || '—',
            originalId: existing?.id || null,
          });
        }
      }
      return res.json(fullSchedule);
    } catch (error) {
      console.error('Schedules fetch error:', error);
      return res.status(500).json({ error: 'Не удалось получить расписание.' });
    }
  }

  try {
    const records = await prisma[modelName].findMany();
    return res.json(records);
  } catch (error) {
    console.error('Generic fetch error:', error);
    return res.status(500).json({ error: 'Ошибка при получении данных.' });
  }
});

app.put('/api/:tableName/:id', authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName]) return res.status(404).json({ error: 'Неизвестная таблица.' });
  const data = coercePayload(tableName, { ...req.body });

  if (tableName === 'Users' && data.TelegramID !== undefined) {
    if (data.TelegramID === null || data.TelegramID === '') {
      data.TelegramID = null;
    } else {
      const parsed = Number(data.TelegramID);
      data.TelegramID = Number.isNaN(parsed) ? null : parsed;
    }
  }

  if (tableName === 'Schedules') {
    try {
      const { Barber, Week, Date: date } = data;
      const existing = await prisma.schedules.findFirst({ where: { Barber, Date: date } });
      let result;
      if (existing) {
        result = await prisma.schedules.update({ where: { id: existing.id }, data: { Week } });
      } else {
        result = await prisma.schedules.create({ data: { id: randomUUID(), Barber, Week, DayOfWeek: data.DayOfWeek, Date: date } });
      }
      return res.json(result);
    } catch (error) {
      console.error('Schedule update error:', error);
      return res.status(500).json({ error: 'Не удалось обновить смену.' });
    }
  }

  if (tableName === 'Cost') {
    ['Timur', 'Vladimir', 'Alina', 'Aleksey', 'Dlitelnost'].forEach((field) => {
      if (data[field] === undefined) return;
      if (data[field] === null || data[field] === '') {
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
  } catch (error) {
    console.error('Record update error:', error);
    res.status(500).json({ error: 'Не удалось сохранить запись.' });
  }
});

app.post('/api/:tableName', authenticateToken, async (req, res) => {
  const { tableName } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName]) return res.status(404).json({ error: 'Неизвестная таблица.' });
  const payload = coercePayload(tableName, { ...req.body });

  if (tableName === 'Appointments' && !normalizeText(payload.Barber)) {
    return res.status(400).json({ error: 'Нельзя создать запись без выбора барбера.' });
  }

  if (tableName === 'Users') {
    if (payload.TelegramID) {
      const parsed = Number(payload.TelegramID);
      payload.TelegramID = Number.isNaN(parsed) ? null : parsed;
    } else {
      payload.TelegramID = null;
    }
  }

  try {
    const record = await prisma[modelName].create({ data: { id: randomUUID(), ...payload } });
    res.status(201).json(record);
  } catch (error) {
    console.error('Record create error:', error);
    res.status(500).json({ error: 'Не удалось создать запись.' });
  }
});

app.delete('/api/:tableName/:id', authenticateToken, async (req, res) => {
  const { tableName, id } = req.params;
  const modelName = tableToModelMap[tableName];
  if (!modelName || !prisma[modelName]) return res.status(404).json({ error: 'Неизвестная таблица.' });
  try {
    await prisma[modelName].delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Record delete error:', error);
    res.status(500).json({ error: 'Не удалось удалить запись.' });
  }
});
app.post('/api/backups/create', authenticateToken, async (req, res) => {
  try {
    await createBackup();
    res.json({ success: true, message: 'Бэкап создан.' });
  } catch (error) {
    console.error('Backup create error:', error);
    res.status(500).json({ error: 'Не удалось создать бэкап.' });
  }
});

app.get('/api/backups/list', authenticateToken, async (req, res) => {
  try {
    const files = await listBackups();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось получить список бэкапов.' });
  }
});

app.post('/api/backups/restore', authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body || {};
    if (!filename) return res.status(400).json({ error: 'Не указано имя файла.' });
    const backupPath = path.join(BACKUP_DIR, filename);
    if (!(await fs.pathExists(backupPath))) {
      return res.status(404).json({ error: 'Бэкап не найден.' });
    }
    await prisma.$disconnect();
    await fs.copyFile(backupPath, DB_PATH);
    res.json({ success: true, message: `Восстановлено из ${filename}` });
  } catch (error) {
    console.error('Backup restore error:', error);
    res.status(500).json({ error: 'Не удалось восстановить базу.' });
  }
});

app.get('/api/options/appointments', authenticateToken, async (req, res) => {
  try {
    const [services, barbers, appointments] = await Promise.all([
      getServiceCatalog(false),
      getBarbers({ includeInactive: false }),
      prisma.appointments.findMany({ select: { Status: true } }),
    ]);
    const statuses = new Set(['Активная', 'Выполнена', 'Отменено']);
    appointments.forEach((appt) => {
      if (appt.Status) statuses.add(appt.Status);
    });
    res.json({
      services: services.map((svc) => svc.name),
      barbers: barbers.map((barber) => barber.name),
      statuses: Array.from(statuses),
    });
  } catch (error) {
    console.error('Options fetch error:', error);
    res.status(500).json({ error: 'Не удалось получить опции.' });
  }
});

app.get('/api/user-profile/:name', authenticateToken, async (req, res) => {
  try {
    const { name } = req.params;
    const user = await prisma.users.findFirst({ where: { Name: name } });
    if (!user) return res.status(404).json({ error: 'Клиент не найден.' });
    const appointmentsRaw = await prisma.appointments.findMany({ where: { CustomerName: name } });
    const appointments = appointmentsRaw.map(mapAppointment).sort((a, b) => b.sortKey - a.sortKey);
    res.json({ user, appointments });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Не удалось загрузить профиль.' });
  }
});

cron.schedule('0 3 * * *', async () => {
  try {
    await createBackup();
    const files = await listBackups();
    const now = Date.now();
    await Promise.all(files.map(async (file) => {
      const filePath = path.join(BACKUP_DIR, file);
      const stats = await fs.stat(filePath);
      const ageDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
      if (ageDays > BACKUP_RETENTION_DAYS) {
        await fs.remove(filePath);
      }
    }));
  } catch (error) {
    console.error('Backup cron error:', error);
  }
});

const gracefulShutdown = async () => {
  try {
    await stopBotProcess();
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Shutdown error:', error);
    process.exit(1);
  }
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

const bootstrap = async () => {
  try {
    await ensureLicenseValid(true);
    startLicenseWatcher();
    await ensureBootstrapData();
    await seedServicesFromCost();
    await ensureBotProcessState();
    app.listen(PORT, () => {
      console.log(`CRM server ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Bootstrap error:', error);
    process.exit(1);
  }
};

bootstrap();
