const fs = require('fs');
const path = require('path');

const fetch = globalThis.fetch || ((...args) => import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args)));

const LICENSE_SOURCE = process.env.LICENSE_SOURCE || 'https://raw.githubusercontent.com/HalfyDay/Barber-Bot/main/licenses.json';
const LICENSE_REFRESH_SECONDS = Number(process.env.LICENSE_REFRESH_SECONDS || 3600);
const LOCAL_LICENSE_FILE = path.join(__dirname, '..', 'data', 'licenses.json');

let cachedStatus = {
  valid: false,
  message: 'Лицензия не проверена',
  license: null,
  lastChecked: null,
};
let inflightCheck = null;

const readLocalLicenses = () => {
  if (!fs.existsSync(LOCAL_LICENSE_FILE)) return null;
  try {
    const payload = JSON.parse(fs.readFileSync(LOCAL_LICENSE_FILE, 'utf-8'));
    return payload.licenses || payload;
  } catch (error) {
    console.warn('Не удалось прочитать локальный список лицензий:', error.message);
    return null;
  }
};

const fetchRemoteLicenses = async () => {
  try {
    const response = await fetch(`${LICENSE_SOURCE}?${Date.now()}`, {
      headers: { 'User-Agent': 'BarberBot-License-Checker' },
    });
    if (!response.ok) throw new Error(`Код ответа ${response.status}`);
    const payload = await response.json();
    return payload.licenses || payload;
  } catch (error) {
    console.warn('Не удалось получить список лицензий с GitHub:', error.message);
    return readLocalLicenses();
  }
};

const normalizeKey = (value = '') => value.toString().trim();

const validateLicenseRecord = (record, key) => {
  if (!record) {
    throw new Error('Лицензия не найдена');
  }
  if (record.key && normalizeKey(record.key) !== key) {
    throw new Error('Ключ лицензии не совпадает');
  }
  if (record.expiresAt && new Date(record.expiresAt).getTime() < Date.now()) {
    throw new Error('Срок действия лицензии истёк');
  }
  return record;
};

const ensureLicenseValid = async (force = false) => {
  const licenseKey = normalizeKey(process.env.BARBER_LICENSE_KEY);
  if (!licenseKey) {
    cachedStatus = {
      valid: false,
      message: 'Переменная BARBER_LICENSE_KEY не задана',
      license: null,
      lastChecked: new Date().toISOString(),
    };
    throw new Error(cachedStatus.message);
  }

  const isCacheFresh = cachedStatus.lastChecked && Date.now() - new Date(cachedStatus.lastChecked).getTime() < LICENSE_REFRESH_SECONDS * 1000;
  if (!force && isCacheFresh && cachedStatus.valid) {
    return cachedStatus;
  }
  if (!force && inflightCheck) return inflightCheck;

  inflightCheck = (async () => {
    const licenses = await fetchRemoteLicenses();
    if (!licenses || !licenses.length) {
      throw new Error('Не удалось получить список лицензий');
    }
    const record = licenses.find((entry) => normalizeKey(entry.key) === licenseKey);
    validateLicenseRecord(record, licenseKey);
    cachedStatus = {
      valid: true,
      message: 'Лицензия подтверждена',
      license: record,
      lastChecked: new Date().toISOString(),
    };
    return cachedStatus;
  })();

  try {
    return await inflightCheck;
  } catch (error) {
    cachedStatus = {
      valid: false,
      message: error.message,
      license: null,
      lastChecked: new Date().toISOString(),
    };
    throw error;
  } finally {
    inflightCheck = null;
  }
};

const getLicenseStatus = () => cachedStatus;

const licenseMiddleware = async (req, res, next) => {
  if (req.path === '/license/status') {
    try {
      await ensureLicenseValid();
      return next();
    } catch (error) {
      cachedStatus = { ...cachedStatus, message: error.message };
      return next();
    }
  }
  try {
    await ensureLicenseValid();
    next();
  } catch (error) {
    res.status(403).json({ error: 'Лицензия недействительна', details: error.message, status: getLicenseStatus() });
  }
};

const startLicenseWatcher = () => {
  setInterval(() => {
    ensureLicenseValid().catch((error) => console.warn('Проверка лицензии не удалась:', error.message));
  }, Math.max(60, LICENSE_REFRESH_SECONDS) * 1000);
};

module.exports = {
  ensureLicenseValid,
  getLicenseStatus,
  licenseMiddleware,
  startLicenseWatcher,
};
