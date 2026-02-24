const path = require("path");
const { randomBytes, randomUUID, scryptSync, timingSafeEqual } = require("crypto");
const fs = require("fs-extra");
const Database = require("better-sqlite3");

const DEFAULT_DB_PATH = path.join(__dirname, "..", "data", "home-users.db");
const HASH_LENGTH = 64;

const normalizeText = (value) => (value == null ? "" : String(value).trim());

const normalizePhone = (value) => {
  const raw = normalizeText(value).replace(/[^\d+]/g, "");
  if (!raw) return "";
  const digits = raw.startsWith("+") ? raw.slice(1) : raw;
  if (digits.length === 10) return `+7${digits}`;
  if (digits.length === 11 && digits.startsWith("8")) return `+7${digits.slice(1)}`;
  if (digits.length === 11 && digits.startsWith("7")) return `+${digits}`;
  if (raw.startsWith("+")) return `+${digits}`;
  return `+${digits}`;
};

const withCode = (message, code) => {
  const error = new Error(message);
  error.code = code;
  return error;
};

const hashPassword = (password, saltHex) => {
  const safePassword = normalizeText(password);
  if (!safePassword) throw withCode("Пароль не может быть пустым.", "INVALID_PASSWORD");
  const salt = saltHex ? Buffer.from(saltHex, "hex") : randomBytes(16);
  const hash = scryptSync(safePassword, salt, HASH_LENGTH);
  return {
    saltHex: salt.toString("hex"),
    hashHex: hash.toString("hex"),
  };
};

const verifyPassword = (password, hashHex, saltHex) => {
  if (!password || !hashHex || !saltHex) return false;
  const computed = scryptSync(password, Buffer.from(saltHex, "hex"), HASH_LENGTH);
  const stored = Buffer.from(hashHex, "hex");
  if (computed.length !== stored.length) return false;
  return timingSafeEqual(computed, stored);
};

const toPublicUser = (row = {}) => ({
  id: row.id || null,
  phone: row.phone || null,
  displayName: row.display_name || row.phone || null,
  createdAt: row.created_at || null,
  lastLoginAt: row.last_login_at || null,
});

const createHomeUsersStore = (dbPath = DEFAULT_DB_PATH) => {
  const resolved = path.resolve(dbPath || DEFAULT_DB_PATH);
  fs.ensureDirSync(path.dirname(resolved));
  const db = new Database(resolved);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.exec(`
    CREATE TABLE IF NOT EXISTS home_users (
      id TEXT PRIMARY KEY,
      phone TEXT NOT NULL UNIQUE,
      display_name TEXT,
      password_hash TEXT NOT NULL,
      password_salt TEXT NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      last_login_at TEXT
    );

    CREATE UNIQUE INDEX IF NOT EXISTS idx_home_users_phone
      ON home_users(phone);
  `);

  const selectByPhone = db.prepare(`
    SELECT id, phone, display_name, password_hash, password_salt, is_active, created_at, updated_at, last_login_at
    FROM home_users
    WHERE phone = ?
    LIMIT 1
  `);
  const selectById = db.prepare(`
    SELECT id, phone, display_name, password_hash, password_salt, is_active, created_at, updated_at, last_login_at
    FROM home_users
    WHERE id = ?
    LIMIT 1
  `);
  const insertUser = db.prepare(`
    INSERT INTO home_users (
      id, phone, display_name, password_hash, password_salt, is_active, created_at, updated_at, last_login_at
    ) VALUES (
      @id, @phone, @display_name, @password_hash, @password_salt, 1, @created_at, @updated_at, NULL
    )
  `);
  const touchLogin = db.prepare(`
    UPDATE home_users
    SET last_login_at = @last_login_at, updated_at = @updated_at
    WHERE id = @id
  `);

  const registerUser = ({ phone, password, displayName }) => {
    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone) {
      throw withCode("Введите корректный номер телефона.", "INVALID_PHONE");
    }
    if (normalizeText(password).length < 4) {
      throw withCode("Пароль должен быть не короче 4 символов.", "WEAK_PASSWORD");
    }
    const existing = selectByPhone.get(normalizedPhone);
    if (existing) {
      throw withCode("Пользователь с таким номером уже зарегистрирован.", "USER_EXISTS");
    }
    const now = new Date().toISOString();
    const { hashHex, saltHex } = hashPassword(password);
    const payload = {
      id: randomUUID(),
      phone: normalizedPhone,
      display_name: normalizeText(displayName) || normalizedPhone,
      password_hash: hashHex,
      password_salt: saltHex,
      created_at: now,
      updated_at: now,
    };
    insertUser.run(payload);
    return toPublicUser({
      id: payload.id,
      phone: payload.phone,
      display_name: payload.display_name,
      created_at: payload.created_at,
      last_login_at: null,
    });
  };

  const authenticateUser = ({ phone, password }) => {
    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone || !normalizeText(password)) {
      return null;
    }
    const row = selectByPhone.get(normalizedPhone);
    if (!row || row.is_active !== 1) return null;
    const valid = verifyPassword(password, row.password_hash, row.password_salt);
    if (!valid) return null;
    const now = new Date().toISOString();
    touchLogin.run({ id: row.id, last_login_at: now, updated_at: now });
    return toPublicUser({ ...row, last_login_at: now });
  };

  const getById = (id) => {
    const safeId = normalizeText(id);
    if (!safeId) return null;
    const row = selectById.get(safeId);
    if (!row || row.is_active !== 1) return null;
    return toPublicUser(row);
  };

  const close = () => {
    try {
      db.close();
    } catch (error) {
      // ignore close errors during shutdown
    }
  };

  return {
    dbPath: resolved,
    registerUser,
    authenticateUser,
    getById,
    close,
  };
};

module.exports = {
  createHomeUsersStore,
  normalizeHomePhone: normalizePhone,
};
