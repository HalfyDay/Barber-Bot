const { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect, Fragment } = React;
const { createPortal, createRoot } = ReactDOM;
const sendClientLog = (data) => {
  try {
    const payload = {
      ...data,
      ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      ts: new Date().toISOString(),
    };
    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch (error) {
    // ignore logging failures
  }
};
sendClientLog({ level: 'info', stage: 'bundle-start' });
const originalConsoleError = console.error;
console.error = (...args) => {
  try {
    const [first] = args;
    const payload =
      first instanceof Error
        ? { message: first.message, stack: first.stack }
        : { message: typeof first === 'string' ? first : JSON.stringify(first) };
    sendClientLog({ level: 'error', stage: 'console-error', ...payload });
  } catch {
    // ignore logger failure
  }
  return originalConsoleError.apply(console, args);
};
const resolveDefaultApiBaseUrl = () => {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return `${window.location.origin}/api`;
  }
  return 'http://localhost:3000/api';
};
const DEFAULT_API_BASE_URL = resolveDefaultApiBaseUrl();
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;
const ROLE_OWNER = 'owner';
const ROLE_STAFF = 'staff';
const ROLE_CREATOR = 'creator';
const ROLE_OPTIONS = [
  { value: ROLE_OWNER, label: 'Владелец' },
  { value: ROLE_STAFF, label: 'Сотрудник' },
];
const VIEW_TABS_BY_ROLE = {
  [ROLE_OWNER]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'system', label: 'Система' },
  ],
  [ROLE_STAFF]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'profile', label: 'Профиль' },
  ],
  [ROLE_CREATOR]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'system', label: 'Система' },
  ],
};
const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Barbers', 'Services', 'Positions', 'Revenue'];
const DATA_TABLES_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Schedules', 'Users', 'Positions'],
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services'],
  [ROLE_CREATOR]: ['Appointments', 'Schedules', 'Users', 'Positions'],
};
const VISIBLE_TABLE_ORDER_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Users', 'Barbers', 'Schedules', 'Services', 'Positions', 'Revenue'],
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services', 'Revenue'],
};
const TABLE_CONFIG = {
  Appointments: { label: 'Записи', mode: 'data', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'desc' } },
  Schedules: { label: 'Расписание', mode: 'custom' },
  Users: { label: 'Клиенты', mode: 'data', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Barbers: { label: 'Барберы', mode: 'custom' },
  Services: { label: 'Услуги', mode: 'custom' },
  Positions: { label: 'Должности', mode: 'custom' },
  Revenue: { label: 'Доходы', mode: 'custom' },
};
const DATA_SHORTCUTS_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Users', 'Barbers', 'Schedules', 'Services', 'Positions', 'Revenue'].map((tableId) => ({
    id: tableId,
    label: TABLE_CONFIG[tableId]?.label || tableId,
  })),
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services', 'Revenue'].map((tableId) => ({
    id: tableId,
    label: TABLE_CONFIG[tableId]?.label || tableId,
  })),
};
const DEFAULT_DATA_TABLES = DATA_TABLES_BY_ROLE[ROLE_OWNER];
const DEFAULT_TABLE_SHORTCUTS = DATA_SHORTCUTS_BY_ROLE[ROLE_OWNER];
const DEFAULT_VISIBLE_TABLE_ORDER = VISIBLE_TABLE_ORDER_BY_ROLE[ROLE_OWNER];
const TABLE_COLUMNS = {
  Appointments: [
    { key: 'CustomerName', label: 'Клиент', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-48' },
    { key: 'Phone', label: 'Телефон', editable: true, type: 'text', minWidth: 'w-36' },
    { key: 'Barber', label: 'Барбер', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-32' },
    { key: 'Date', label: 'Дата', editable: true, type: 'date', minWidth: 'w-32' },
    { key: 'Time', label: 'Время', editable: true, type: 'text', minWidth: 'w-28', noWrap: true },
    { key: 'Status', label: 'Статус', editable: true, type: 'select', optionsKey: 'statuses', align: 'center', minWidth: 'w-28' },
    { key: 'Services', label: 'Услуги', editable: true, type: 'multi-select', optionsKey: 'services', minWidth: 'w-56' },
    { key: 'UserID', label: 'ID клиента', editable: true, type: 'text', minWidth: 'w-24' },
    { key: 'Reminder2hClientSent', label: 'Напоминание клиенту', editable: true, type: 'boolean', align: 'center' },
    { key: 'Reminder2hBarberSent', label: 'Напоминание барберу', editable: true, type: 'boolean', align: 'center' },
  ],
  Schedules: [
    { key: 'Barber', label: 'Барбер', editable: false, minWidth: 'w-40' },
    { key: 'DayOfWeek', label: 'День недели', editable: false, minWidth: 'w-32' },
    { key: 'Date', label: 'Дата', editable: false, minWidth: 'w-32' },
    { key: 'Week', label: 'Слоты', editable: true, type: 'text', align: 'center', minWidth: 'w-40' },
  ],
  Users: [
    { key: 'Name', label: 'Имя', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-40' },
    { key: 'Phone', label: 'Телефон', editable: true, type: 'text', minWidth: 'w-36' },
    { key: 'TelegramID', label: 'Telegram', editable: true, type: 'text', minWidth: 'w-32' },
    { key: 'Barber', label: 'Любимый мастер', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-40' },
  ],
};
const BOT_SUPPORTED_STATUS_OPTIONS = ['\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f', '\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430', '\u041e\u0442\u043c\u0435\u043d\u0430', '\u041d\u0435\u044f\u0432\u043a\u0430'];
const [STATUS_ACTIVE, STATUS_DONE, STATUS_CANCELLED, STATUS_NO_SHOW] = BOT_SUPPORTED_STATUS_OPTIONS;
const CLIENT_BLOCK_THRESHOLD = 3;
const RATING_MIN = 1;
const RATING_MAX = 5;
const RATING_STEP = 1;
const clampRatingValue = (value) => {
  if (value === '' || value == null) return RATING_MAX;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return RATING_MAX;
  return Math.min(RATING_MAX, Math.max(RATING_MIN, Math.round(numeric)));
};
const formatRatingValue = (value) => String(clampRatingValue(value));
let avatarOptionsCache = null;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
const DAY_IN_MS = 24 * 60 * 60 * 1000;
const formatCurrencyValue = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return value ?? '—';
  return numeric.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
};
const parseBsEditorAmount = (value) => {
  const normalized = String(value ?? '').trim().replace(',', '.');
  if (!normalized) return null;
  if (!/^[+-]?\d+(?:\.\d+)?$/.test(normalized)) return Number.NaN;
  const numeric = Number(normalized);
  if (!Number.isFinite(numeric)) return Number.NaN;
  return Math.trunc(numeric);
};
const getLocalISODateString = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  if (!date || Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const buildNewBarberState = () => ({
  name: '',
  password: '',
  rating: '5',
  color: '#6d28d9',
  avatarUrl: '',
  cardTitle: '',
  cardDescription: '',
  cardPhrase: '',
  cardMode: CARD_MODE_GENERATED,
  cardImageUrl: '',
  cardPhotoGrayscale: true,
  cardPhotoOutline: true,
  description: '',
  phone: '',
  telegramId: '',
  isActive: true,
  role: ROLE_OWNER,
  positionId: null,
});
const buildNewServiceState = () => ({
  name: '',
  duration: 60,
  isActive: true,
  prices: {},
});
const ACTIVE_BARBER_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x0435, 0x043d);
const HIDDEN_BARBER_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442);
const ACTIVE_SERVICE_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x043d, 0x0430);
const HIDDEN_SERVICE_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442, 0x0430);
const buildVisitHistory = (appointments = []) => {
  if (!appointments.length) return [];
  const cutoff = Date.now() - YEAR_IN_MS;
  const completed = appointments
    .map((appt) => {
      const startDate = getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime);
      return { ...appt, startDate };
    })
    .filter(
      (appt) =>
        appt.startDate &&
        appt.startDate.getTime() >= cutoff &&
        (isCompletedAppointmentStatus(appt.Status) || isActiveAppointmentStatus(appt.Status))
    )
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  return completed.map((appt, index) => ({
    ...appt,
    orderNumber: completed.length - index,
    dateLabel: formatDateTime(appt.Date, appt.Time),
  }));
};
const FAVORITE_BARBER_RECENT_LIMIT = 3;
const resolveFavoriteBarberFromAppointments = (appointments = [], limit = FAVORITE_BARBER_RECENT_LIMIT) => {
  if (!Array.isArray(appointments) || !appointments.length || limit <= 0) return '';
  const ranked = appointments
    .map((appointment) => {
      const startDate = getAppointmentStartDate(appointment.Date, appointment.Time, appointment.startDateTime);
      const rawBarber = normalizeText(appointment.Barber).trim();
      return {
        startDate,
        barberLabel: rawBarber ? appointment.Barber?.trim() || rawBarber : '',
        normalizedBarber: rawBarber.toLowerCase(),
      };
    })
    .filter((item) => item.startDate && item.barberLabel && item.normalizedBarber);
  if (!ranked.length) return '';
  ranked.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  const recent = ranked.slice(0, limit);
  const counts = new Map();
  let favorite = { label: '', count: 0, index: Number.POSITIVE_INFINITY };
  recent.forEach((entry, index) => {
    const nextCount = (counts.get(entry.normalizedBarber) || 0) + 1;
    counts.set(entry.normalizedBarber, nextCount);
    if (nextCount > favorite.count || (nextCount === favorite.count && index < favorite.index)) {
      favorite = { label: entry.barberLabel, count: nextCount, index };
    }
  });
  return favorite.label;
};
const defaultConfirmState = {
  open: false,
  title: '',
  message: '',
  confirmLabel: 'Подтвердить',
  cancelLabel: 'Отмена',
  tone: 'neutral',
};
const buildAppointmentModalState = () => ({
  open: false,
  data: null,
  options: null,
  isNew: false,
  allowDelete: false,
  context: { appointments: [], schedules: [] },
});
const getRecordId = (record = {}) => record.id || record.Id || record.ID || record.recordId || record.ID_Record || null;
const classNames = (...classes) => classes.filter(Boolean).join(' ');
const EyeIcon = ({ open = false, className = "h-5 w-5" }) =>
  open ? (
    <svg
      className={`${className} block`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.25 12c1.5-3.25 4.75-6 9.75-6s8.25 2.75 9.75 6c-1.5 3.25-4.75 6-9.75 6s-8.25-2.75-9.75-6Z" />
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  ) : (
    <svg
      className={`${className} block`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.98 8.22A11 11 0 0 0 1.86 12C3.73 16.06 7.52 19 12 19c.99 0 1.95-.15 2.86-.42" />
      <path d="M6.23 6.23A11.1 11.1 0 0 1 12 5c4.48 0 8.27 2.94 10.14 7.0a11 11 0 0 1-4.44 5.18" />
      <path d="M9.88 9.88a3 3 0 0 1 4.24 4.24" />
      <path d="m3 3 18 18" />
    </svg>
  );
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn('localStorage read error', error);
      return initialValue;
    }
  });
  const updateValue = useCallback(
    (updater) => {
      setValue((prev) => {
        const nextValue = typeof updater === 'function' ? updater(prev) : updater;
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch (error) {
          console.warn('localStorage write error', error);
        }
        return nextValue;
      });
    },
    [key]
  );
  return [value, updateValue];
};
const useNowTick = (intervalMs = 1000) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);
  return now;
};
const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    if (!handler) return undefined;
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
const fetchAvatarOptions = async () => {
  const response = await fetch(`${API_BASE_URL}/assets/avatars`);
  if (!response.ok) throw new Error('Не удалось получить список аватаров');
  const payload = await response.json();
  const images = Array.isArray(payload.images) ? payload.images.filter(Boolean).map(normalizeImagePath) : [];
  return Array.from(new Set(images));
};
const normalizeText = (value) => (value == null ? '' : String(value));
const isValidDate = (value) => value instanceof Date && !Number.isNaN(value.getTime());
const resolveAssetUrl = (value) => {
  const normalized = normalizeText(value).trim();
  if (!normalized) return '';
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
  const sanitized = normalized.replace(/\\/g, '/').replace(/^\.\/+/, '');
  if (sanitized.startsWith('/')) return sanitized;
  if (sanitized.startsWith('Image/')) return `/${sanitized}`;
  return `/Image/${sanitized}`;
};
const normalizeImagePath = (value) => {
  const resolved = resolveAssetUrl(value);
  if (!resolved) return '';
  if (/^(https?:)?\/\//i.test(resolved) || resolved.startsWith('data:')) return resolved;
  return resolved.startsWith('/') ? resolved : `/${resolved}`;
};
const numberFormatter = new Intl.NumberFormat('ru-RU');
const formatCurrency = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return '';
  return `${numberFormatter.format(numeric)} \u20BD`;
};
const formatPercent = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return '0%';
  const digits = Number.isInteger(numeric) ? 0 : 1;
  return `${numeric.toFixed(digits)}%`;
};
const toInputDate = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const parseInputDate = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) return null;
  const parsed = new Date(`${normalized}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const APPOINTMENT_CALENDAR_VIEW_OPTIONS = [
  { id: 'day', label: 'День', iconId: 'day' },
  { id: 'week', label: 'Неделя', iconId: 'week' },
  { id: 'month', label: 'Месяц', iconId: 'month' },
];
const APPOINTMENT_CALENDAR_SCALE_OPTIONS = [
  { id: 'compact', label: 'Мелко', iconId: 'compact' },
  { id: 'normal', label: 'Обычно', iconId: 'normal' },
  { id: 'large', label: 'Крупно', iconId: 'large' },
];
const APPOINTMENT_CALENDAR_SCALE_CONFIG = {
  compact: {
    dayGrid: 'lg:grid-cols-3 2xl:grid-cols-4',
    weekMobileColumnWidth: 220,
    weekGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7',
    weekColumnWidth: 220,
    weekGap: 'gap-2',
    weekSectionMinHeight: 'min-h-[220px]',
    weekSectionPadding: 'p-2.5',
    monthMobileColumnWidth: 190,
    monthGrid: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7',
    monthColumnWidth: 190,
    monthGap: 'gap-2',
    monthSectionMinHeight: 'min-h-[150px]',
    monthSectionPadding: 'p-2.5',
  },
  normal: {
    dayGrid: 'lg:grid-cols-2',
    weekMobileColumnWidth: 300,
    weekGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    weekColumnWidth: 300,
    weekGap: 'gap-3',
    weekSectionMinHeight: 'min-h-[240px]',
    weekSectionPadding: 'p-3',
    monthMobileColumnWidth: 260,
    monthGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5',
    monthColumnWidth: 260,
    monthGap: 'gap-3',
    monthSectionMinHeight: 'min-h-[180px]',
    monthSectionPadding: 'p-3',
  },
  large: {
    dayGrid: 'lg:grid-cols-1',
    weekMobileColumnWidth: 380,
    weekGrid: 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
    weekColumnWidth: 380,
    weekGap: 'gap-4',
    weekSectionMinHeight: 'min-h-[290px]',
    weekSectionPadding: 'p-4',
    monthMobileColumnWidth: 340,
    monthGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    monthColumnWidth: 340,
    monthGap: 'gap-4',
    monthSectionMinHeight: 'min-h-[220px]',
    monthSectionPadding: 'p-4',
  },
};
const startOfLocalDay = (value = new Date()) => {
  const base = value instanceof Date ? new Date(value) : parseInputDate(value) || new Date();
  base.setHours(0, 0, 0, 0);
  return base;
};
const addDays = (value, amount) => {
  const base = startOfLocalDay(value);
  base.setDate(base.getDate() + Number(amount || 0));
  return base;
};
const getWeekStartDate = (value) => {
  const base = startOfLocalDay(value);
  const offset = (base.getDay() + 6) % 7;
  return addDays(base, -offset);
};
const getMonthStartDate = (value) => {
  const base = startOfLocalDay(value);
  return new Date(base.getFullYear(), base.getMonth(), 1);
};
const getMonthEndDate = (value) => {
  const base = startOfLocalDay(value);
  return new Date(base.getFullYear(), base.getMonth() + 1, 0);
};
const isSameLocalDay = (left, right) => getLocalISODateString(left) === getLocalISODateString(right);
const isSameLocalMonth = (left, right) => {
  const safeLeft = startOfLocalDay(left);
  const safeRight = startOfLocalDay(right);
  return safeLeft.getFullYear() === safeRight.getFullYear() && safeLeft.getMonth() === safeRight.getMonth();
};
const getCurrentMonthRange = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return { start, end };
};
const formatShortDateLabel = (value) => {
  const parsed = parseInputDate(value);
  if (!parsed) return value || '';
  const day = String(parsed.getDate()).padStart(2, '0');
  const month = String(parsed.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}`;
};
const pluralize = (count, [one, few, many]) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
};
const canonicalizeName = (value) => normalizeText(value).replace(/[^a-z0-9а-яё\s]/gi, '').trim();
const resolveLogin = (value) => normalizeText(value);
const normalizeRoleValue = (value) => {
  if (value === ROLE_CREATOR) return ROLE_CREATOR;
  if (value === ROLE_STAFF) return ROLE_STAFF;
  return ROLE_OWNER;
};
const buildSessionPayload = (payload = {}) => {
  const normalizedLogin = resolveLogin(payload.username || payload.login);
  return {
    ...payload,
    username: normalizedLogin,
    displayName: payload.displayName || payload.name || normalizedLogin,
    barberId: payload.barberId || payload.id || null,
    role: normalizeRoleValue(payload.role),
    barberName: payload.barberName || payload.displayName || payload.name || normalizedLogin,
  };
};
const SESSION_STORAGE_KEY = 'barber-session';
const REMEMBER_STORAGE_KEY = 'barber-session-remember';
const getStorageArea = (type) => {
  if (typeof window === 'undefined') return null;
  try {
    return type === 'session' ? window.sessionStorage : window.localStorage;
  } catch (error) {
    return null;
  }
};
const safeStorageGet = (storage, key) => {
  try {
    return storage?.getItem ? storage.getItem(key) : null;
  } catch (error) {
    return null;
  }
};
const safeStorageSet = (storage, key, value) => {
  try {
    if (storage?.setItem) {
      storage.setItem(key, value);
    }
  } catch (error) {
    console.warn('storage set error', error);
  }
};
const safeStorageRemove = (storage, key) => {
  try {
    if (storage?.removeItem) {
      storage.removeItem(key);
    }
  } catch (error) {
    // ignore
  }
};
const loadPersistedSession = () => {
  const localValue = safeStorageGet(getStorageArea('local'), SESSION_STORAGE_KEY);
  if (localValue) {
    try {
      return { session: buildSessionPayload(JSON.parse(localValue)), remember: true };
    } catch (error) {
      console.warn('session restore error', error);
    }
  }
  const sessionValue = safeStorageGet(getStorageArea('session'), SESSION_STORAGE_KEY);
  if (sessionValue) {
    try {
      return { session: buildSessionPayload(JSON.parse(sessionValue)), remember: false };
    } catch (error) {
      console.warn('session restore error', error);
    }
  }
  const remember = safeStorageGet(getStorageArea('local'), REMEMBER_STORAGE_KEY) === '1';
  return { session: null, remember };
};
const persistRememberChoice = (remember) => {
  safeStorageSet(getStorageArea('local'), REMEMBER_STORAGE_KEY, remember ? '1' : '0');
};
const persistSessionPayload = (payload, remember) => {
  const serialized = JSON.stringify(payload);
  const localStore = getStorageArea('local');
  const sessionStore = getStorageArea('session');
  if (remember) {
    safeStorageSet(localStore, SESSION_STORAGE_KEY, serialized);
    safeStorageRemove(sessionStore, SESSION_STORAGE_KEY);
    persistRememberChoice(true);
  } else {
    safeStorageSet(sessionStore, SESSION_STORAGE_KEY, serialized);
    safeStorageRemove(localStore, SESSION_STORAGE_KEY);
    persistRememberChoice(false);
  }
};
const clearStoredSession = () => {
  safeStorageRemove(getStorageArea('local'), SESSION_STORAGE_KEY);
  safeStorageRemove(getStorageArea('session'), SESSION_STORAGE_KEY);
};
const pickBarberForUser = (userSession, availableBarbers = []) => {
  const fallback = availableBarbers?.[0] || '';
  if (!userSession) return fallback;
  const candidates = [userSession.displayName, userSession.preferredName, userSession.username]
    .map((candidate) => canonicalizeName(candidate).toLowerCase())
    .filter(Boolean);
  if (!candidates.length || !availableBarbers?.length) return fallback;
  const normalizedOptions = availableBarbers.map((barber) => canonicalizeName(barber).toLowerCase());
  for (const candidate of candidates) {
    const matchIndex = normalizedOptions.findIndex((option) => option === candidate);
    if (matchIndex !== -1) {
      return availableBarbers[matchIndex];
    }
  }
  return fallback;
};
const formatDate = (value) => {
  if (!value) return '-';
  try {
    return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(value));
  } catch (error) {
    return value;
  }
};
const formatTime = (value) => {
  const safeValue = normalizeText(value);
  if (!safeValue) return '-';
  if (safeValue.includes('-')) {
    return safeValue.split('-')[0].trim();
  }
  return safeValue;
};
const formatPhoneInput = (value) => {
  const digits = String(value || '')
    .replace(/[^\d]/g, '')
    .trim();
  if (!digits) return '';
  let normalized = digits;
  if (normalized.length === 11 && normalized.startsWith('8')) {
    normalized = `7${normalized.slice(1)}`;
  }
  if (normalized.length === 10) {
    normalized = `7${normalized}`;
  }
  if (normalized.length === 11 && normalized.startsWith('7')) {
    return `+7 (${normalized.slice(1, 4)}) ${normalized.slice(4, 7)}-${normalized.slice(7, 9)}-${normalized.slice(9, 11)}`;
  }
  if (normalized.startsWith('7') && normalized.length > 11) {
    return `+${normalized}`;
  }
  if (value.toString().startsWith('+')) {
    return value.toString();
  }
  return `+${normalized}`;
};
const formatPhoneDisplay = (value) => {
  const digits = String(value || '').replace(/\D/g, '');
  if (!digits) return '';
  let normalized = digits;
  if (normalized.startsWith('8')) {
    normalized = `7${normalized.slice(1)}`;
  } else if (!normalized.startsWith('7')) {
    normalized = `7${normalized}`;
  }
  normalized = normalized.slice(0, 11);
  if (normalized === '7') return digits === '7' ? '' : '+7';
  const core = normalized.slice(1);
  const parts = [core.slice(0, 3), core.slice(3, 6), core.slice(6, 8), core.slice(8, 10)];
  const [p1 = '', p2 = '', p3 = '', p4 = ''] = parts;
  let result = '+7';
  if (p1) result += ` ${p1}`;
  if (p2) result += ` ${p2}`;
  if (p3) result += `-${p3}`;
  if (p4) result += `-${p4}`;
  return result.trim();
};
const normalizePhoneValue = (value) => {
  const digits = String(value || '')
    .replace(/[^\d+]/g, '')
    .trim();
  if (!digits) return '';
  if (digits.startsWith('+')) return digits;
  if (digits.startsWith('8')) return `+7${digits.slice(1)}`;
  if (digits.startsWith('7')) return `+7${digits.slice(1)}`;
  return `+${digits}`;
};
const formatTelegramHandle = (value) => {
  const handle = normalizeText(value).replace(/^@+/, '').trim();
  return handle ? `@${handle}` : '';
};
const buildTelegramLink = (value) => {
  const handle = normalizeText(value).replace(/^@+/, '').trim();
  if (!handle) return '';
  if (/^\d+$/.test(handle)) {
    return `tg://openmessage?user_id=${handle}`;
  }
  return `https://t.me/${handle}`;
};
const formatDateTime = (date, time) => {
  const datePart = formatDate(date);
  const timePart = formatTime(time);
  if (datePart === '-' && timePart === '-') return '-';
  if (datePart === '-') return timePart;
  if (timePart === '-') return datePart;
  return `${datePart} | ${timePart}`;
};
const backupDateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});
const isPreUpdateBackup = (filename = '') => /backup-pre-update-/i.test(normalizeText(filename));
const parseBackupTimestamp = (filename = '') => {
  const match = normalizeText(filename).match(/backup(?:-pre-update)?-(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})(?:-(\d{3}))?/i);
  if (!match) return null;
  const [, datePart, hours, minutes, seconds, milliseconds] = match;
  const isoCandidate = `${datePart}T${hours}:${minutes}:${seconds}${milliseconds ? `.${milliseconds}` : ''}Z`;
  const parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const formatBackupLabel = (filename = '') => {
  const parsed = parseBackupTimestamp(filename);
  return parsed ? backupDateFormatter.format(parsed) : filename;
};
const formatBackupMeta = (filename = '') =>
  isPreUpdateBackup(filename) ? 'Автоматическая копия перед обновлением' : 'Ручная или плановая резервная копия';
const formatDateHeading = (value, options = { weekday: 'long', day: 'numeric', month: 'long' }) => {
  if (!value) return 'Без даты';
  try {
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat('ru-RU', options).format(parsed);
  } catch (error) {
    return value;
  }
};
const formatDateBadgeLabel = (value) =>
  formatDateHeading(value, { weekday: 'short', day: 'numeric', month: 'short' });
const formatLiveTimestamp = (value, nowTs = Date.now()) => {
  if (!value) return '';
  try {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '';
    const diffMs = Math.max(0, nowTs - parsed.getTime());
    if (diffMs < 1000) return 'только что';
    if (diffMs < 60_000) return `${Math.floor(diffMs / 1000)} сек`;
    if (diffMs < 3_600_000) {
      const minutes = Math.floor(diffMs / 60_000);
      const seconds = Math.floor((diffMs % 60_000) / 1000);
      return `${minutes} мин ${seconds.toString().padStart(2, '0')} сек`;
    }
    if (diffMs < 86_400_000) {
      const hours = Math.floor(diffMs / 3_600_000);
      const minutes = Math.floor((diffMs % 3_600_000) / 60_000);
      return `${hours} ч ${minutes.toString().padStart(2, '0')} мин`;
    }
    return parsed.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return '';
  }
};
const normalizeUpdateInfo = (payload) => {
  if (!payload) return null;
  const available = payload.available ?? payload.updateAvailable ?? false;
  const latestVersion = payload.latestVersion || payload.version || payload.targetVersion || null;
  const currentVersion = payload.currentVersion || payload.version || null;
  const details =
    payload.details ||
    payload.note ||
    (available ? 'Доступно обновление' : 'Установлена актуальная версия');
  return {
    ...payload,
    available,
    updateAvailable: available,
    version: latestVersion || currentVersion,
    latestVersion: latestVersion || currentVersion,
    currentVersion,
    checkedAt: payload.checkedAt || payload.checked_at || null,
    publishedAt: payload.publishedAt || null,
    sourceUrl: payload.sourceUrl || payload.url || null,
    details,
    note: payload.note || null,
  };
};
const STATUS_BADGE_MAP = {
  [STATUS_ACTIVE]: 'border border-sky-500/30 bg-sky-500/10 text-sky-100',
  [STATUS_DONE]: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-100',
  [STATUS_CANCELLED]: 'border border-rose-500/30 bg-rose-500/10 text-rose-100',
  [STATUS_NO_SHOW]: 'border border-amber-500/30 bg-amber-500/10 text-amber-100',
};
const getStatusBadgeClasses = (status) => {
  const normalized = normalizeStatusValue(status);
  return (
    STATUS_BADGE_MAP[normalized] || 'border border-slate-600/60 bg-slate-800/70 text-slate-200'
  );
};
const getCompactStatusLabel = (status) => {
  switch (normalizeStatusValue(status)) {
    case STATUS_ACTIVE:
      return 'Актив';
    case STATUS_DONE:
      return 'Готово';
    case STATUS_CANCELLED:
      return 'Отмена';
    case STATUS_NO_SHOW:
      return 'Неявка';
    default:
      return normalizeStatusValue(status) || 'Статус';
  }
};
const toWindows1251Mojibake = (value = '') => {
  try {
    return new TextDecoder('windows-1251').decode(new TextEncoder().encode(value));
  } catch {
    return value;
  }
};
const STATUS_ALIAS_MAP = new Map();
const registerStatusAlias = (alias, canonical) => {
  [alias, toWindows1251Mojibake(alias)].forEach((candidate) => {
    const normalized = normalizeText(candidate).trim().toLowerCase();
    if (normalized) {
      STATUS_ALIAS_MAP.set(normalized, canonical);
    }
  });
};
[
  [
    STATUS_ACTIVE,
    ['\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f', '\u0410\u043a\u0442\u0438\u0432', 'active', '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430', '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e', '\u0412 \u0440\u0430\u0431\u043e\u0442\u0435', '\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435', '\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c', 'pending', 'wait', 'waiting', 'processing'],
  ],
  [
    STATUS_DONE,
    ['\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430', 'done', 'complete', 'completed', 'finished', '\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430', '\u0413\u043e\u0442\u043e\u0432\u043e'],
  ],
  [
    STATUS_CANCELLED,
    ['\u041e\u0442\u043c\u0435\u043d\u0430', 'cancel', 'canceled', 'cancelled', '\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u043e', '\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u0430'],
  ],
  [
    STATUS_NO_SHOW,
    ['\u041d\u0435\u044f\u0432\u043a\u0430', 'no show', 'no-show', 'noshow', 'missed', '\u041d\u0435 \u043f\u0440\u0438\u0448\u0451\u043b', '\u041d\u0435 \u043f\u0440\u0438\u0448\u0435\u043b'],
  ],
].forEach(([canonical, aliases]) => {
  aliases.forEach((alias) => registerStatusAlias(alias, canonical));
});
const normalizeStatusValue = (status) => {
  const normalized = normalizeText(status).trim().toLowerCase();
  if (!normalized) return STATUS_ACTIVE;
  return STATUS_ALIAS_MAP.get(normalized) || STATUS_ACTIVE;
};
const normalizeStatusList = (statuses = []) => {
  const seen = new Set();
  const allowed = [];
  statuses
    .map((status) => normalizeStatusValue(status))
    .forEach((status) => {
      if (!status) return;
      if (!BOT_SUPPORTED_STATUS_OPTIONS.includes(status)) return;
      if (seen.has(status)) return;
      seen.add(status);
      allowed.push(status);
    });
  if (!allowed.length) {
    return [...BOT_SUPPORTED_STATUS_OPTIONS];
  }
  return allowed;
};
const isCompletedAppointmentStatus = (status) => normalizeStatusValue(status) === STATUS_DONE;
const sanitizeTimeToken = (value) => {
  const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return '';
  const hours = match[1].padStart(2, '0');
  const minutes = match[2];
  return `${hours}:${minutes}`;
};
const normalizeTimeInputValue = (inputValue) => {
  if (!inputValue) return '';
  const sanitized = sanitizeTimeToken(inputValue);
  if (sanitized) return sanitized;
  const [hours] = String(inputValue).split(':');
  if (!hours) return '';
  return `${hours.padStart(2, '0')}:00`;
};
const parseTimeRangeValue = (value) => {
  const safe = normalizeText(value).replace(/[\u2014\u2013]/g, '-');
  if (!safe) return { start: '', end: '' };
  const [startRaw, endRaw = ''] = safe.split('-').map((part) => sanitizeTimeToken(part));
  return { start: startRaw, end: endRaw };
};
const parseTimeRangeParts = (value) => parseTimeRangeValue(value);
const buildTimeRangeValue = (start, end) => {
  const safeStart = sanitizeTimeToken(start);
  const safeEnd = sanitizeTimeToken(end);
  if (safeStart && safeEnd) {
    const [from, to] = safeStart <= safeEnd ? [safeStart, safeEnd] : [safeEnd, safeStart];
    return `${from} - ${to}`;
  }
  return safeStart || '';
};
const addMinutesToTimeToken = (timeValue, minutesToAdd) => {
  const safeTime = sanitizeTimeToken(timeValue);
  if (!safeTime) return '';
  const baseMinutes = parseSlotTimeMinutes(safeTime);
  const extraMinutes = Math.max(0, Number(minutesToAdd) || 0);
  const totalMinutes = (baseMinutes + extraMinutes) % (24 * 60);
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const minutes = String(totalMinutes % 60).padStart(2, '0');
  return `${hours}:${minutes}`;
};
const extractTimeStart = (value) => parseTimeRangeValue(value).start;
const getAppointmentStartDate = (dateValue, timeValue, fallbackIso) => {
  if (fallbackIso) {
    const parsedFallback = new Date(fallbackIso);
    if (!Number.isNaN(parsedFallback.getTime())) return parsedFallback;
  }
  const datePart = normalizeText(dateValue).slice(0, 10);
  if (!datePart) return null;
  const timePart = extractTimeStart(timeValue) || '00:00';
  const isoCandidate = `${datePart}T${timePart}:00`;
  const parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const getAppointmentEndDate = (dateValue, timeValue, fallbackIso) => {
  const startDate = getAppointmentStartDate(dateValue, timeValue, fallbackIso);
  if (!startDate) return null;
  const { start, end } = parseTimeRangeParts(timeValue);
  const endToken = end || start;
  if (!endToken) return startDate;
  const baseDatePart = normalizeText(dateValue).slice(0, 10) || getLocalISODateString(startDate);
  if (!baseDatePart) return startDate;
  const isoCandidate = `${baseDatePart}T${endToken}:00`;
  let parsed = new Date(isoCandidate);
  if (Number.isNaN(parsed.getTime())) return startDate;
  if (end && start && end <= start) {
    parsed = new Date(parsed.getTime() + DAY_IN_MS);
  }
  if (parsed.getTime() < startDate.getTime()) {
    return startDate;
  }
  return parsed;
};
const resolveAppointmentStartDate = (appointment = {}) => {
  if (isValidDate(appointment.startDate)) return appointment.startDate;
  return getAppointmentStartDate(appointment.Date, appointment.Time, appointment.startDateTime);
};
const resolveAppointmentEndDate = (appointment = {}) => {
  if (isValidDate(appointment.endDate)) return appointment.endDate;
  const endDate = getAppointmentEndDate(appointment.Date, appointment.Time, appointment.startDateTime);
  if (endDate) return endDate;
  return resolveAppointmentStartDate(appointment);
};
const ensureRangeEnd = (startDate, endDate, fallbackMinutes = 30) => {
  if (!startDate) return null;
  if (endDate && endDate.getTime() > startDate.getTime()) {
    return endDate;
  }
  return new Date(startDate.getTime() + fallbackMinutes * 60000);
};
const rangesOverlap = (left, right) => {
  if (!left?.start || !left?.end || !right?.start || !right?.end) return false;
  return left.start < right.end && right.start < left.end;
};
const getDateOnlyValue = (value) => normalizeText(value).slice(0, 10);
const getDateWeekdayIndex = (value) => {
  const safeDate = getDateOnlyValue(value);
  if (!safeDate) return 7;
  try {
    const parsed = new Date(`${safeDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return 7;
    const label = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(parsed);
    return getDayIndex(label);
  } catch {
    return 7;
  }
};
const isActiveAppointmentStatus = (status) => normalizeStatusValue(status) === STATUS_ACTIVE;
const shouldDisplayAppointment = (appointment, nowTs = Date.now()) => {
  if (!isActiveAppointmentStatus(normalizeStatusValue(appointment.Status))) return false;
  const startDate = resolveAppointmentStartDate(appointment);
  const endDate = resolveAppointmentEndDate(appointment);
  if (!startDate || !endDate) return false;
  return endDate.getTime() >= nowTs;
};
const isAppointmentOngoing = (appointment, nowTs = Date.now()) => {
  if (!isActiveAppointmentStatus(normalizeStatusValue(appointment.Status))) return false;
  const startDate = resolveAppointmentStartDate(appointment);
  const endDate = resolveAppointmentEndDate(appointment);
  if (!startDate || !endDate) return false;
  const startTs = startDate.getTime();
  const endTs = endDate.getTime();
  return startTs <= nowTs && endTs > nowTs;
};
const parseMultiValue = (value) =>
  Array.from(
    normalizeText(value)
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .reduce((acc, item) => {
        const normalizedKey = canonicalizeName(item).toLowerCase() || normalizeText(item).trim().toLowerCase();
        if (!normalizedKey || acc.seen.has(normalizedKey)) return acc;
        acc.seen.add(normalizedKey);
        acc.items.push(item);
        return acc;
      }, { seen: new Set(), items: [] }).items
  );
const normalizeMultiValueList = (value) => {
  const list = Array.isArray(value) ? value : parseMultiValue(value);
  return list.reduce((acc, item) => {
    const normalizedItem = normalizeText(item).trim();
    const normalizedKey = canonicalizeName(normalizedItem).toLowerCase() || normalizedItem.toLowerCase();
    if (!normalizedKey || acc.seen.has(normalizedKey)) return acc;
    acc.seen.add(normalizedKey);
    acc.items.push(normalizedItem);
    return acc;
  }, { seen: new Set(), items: [] }).items;
};
const hasMultiValueItem = (items, option) => {
  const optionKey = canonicalizeName(option).toLowerCase() || normalizeText(option).trim().toLowerCase();
  if (!optionKey) return false;
  return normalizeMultiValueList(items).some(
    (item) => (canonicalizeName(item).toLowerCase() || normalizeText(item).trim().toLowerCase()) === optionKey
  );
};
const toggleMultiValueItem = (items, option) => {
  const normalizedItems = normalizeMultiValueList(items);
  const optionKey = canonicalizeName(option).toLowerCase() || normalizeText(option).trim().toLowerCase();
  if (!optionKey) return normalizedItems;
  const exists = normalizedItems.some(
    (item) => (canonicalizeName(item).toLowerCase() || normalizeText(item).trim().toLowerCase()) === optionKey
  );
  if (exists) {
    return normalizedItems.filter(
      (item) => (canonicalizeName(item).toLowerCase() || normalizeText(item).trim().toLowerCase()) !== optionKey
    );
  }
  return [...normalizedItems, normalizeText(option).trim()];
};
const dedupeOptionList = (options = []) =>
  normalizeMultiValueList(Array.isArray(options) ? options : []);
const LoadingState = ({ label = 'Загружаю данные...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-slate-300">
    <span className="animate-pulse">{label}</span>
  </div>
);
const ErrorBanner = ({ message }) => (
  <div className="rounded-lg bg-rose-600 px-4 py-3 text-white">{message}</div>
);
const VisitHistoryList = ({
  visits = [],
  loading = false,
  error = '',
  emptyMessage = 'История визитов пуста.',
  maxHeightClass = 'max-h-64',
  showSummary = true,
}) => {
  if (loading) {
    return <p className="text-sm text-slate-500">Загружаем историю...</p>;
  }
  if (error) {
    return <ErrorBanner message={error} />;
  }
  return (
    <div className="space-y-2">
      {showSummary && (
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            Записей за 12 месяцев: <span className="font-semibold text-white">{visits.length}</span>
          </span>
          <span>Последние визиты</span>
        </div>
      )}
      <div className={classNames('space-y-2 overflow-auto', maxHeightClass)}>
        {visits.length ? (
          visits.map((visit) => {
            const isActive = isActiveAppointmentStatus(visit.Status);
            return (
              <div
                key={`${visit.id || visit.dateLabel}-${visit.orderNumber}`}
                className={classNames(
                  'rounded-lg border p-3 text-xs transition',
                  isActive ? 'border-emerald-400/60 bg-emerald-500/10 shadow-inner shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/40'
                )}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-slate-400">
                  <span className="font-semibold text-white">Визит №{visit.orderNumber || '—'}</span>
                  <span>{visit.dateLabel}</span>
                </div>
                <p className="mt-1 text-sm text-slate-100">{visit.Barber || '—'}</p>
                <p className="text-slate-400">{visit.Services || '—'}</p>
                {visit.Status && <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">{visit.Status}</p>}
              </div>
            );
          })
        ) : (
          <p className="text-sm text-slate-500">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
};
const SectionCard = ({ title, actions, children }) => (
  <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-1 sm:min-w-0">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {actions && <div className="ml-auto sm:hidden">{actions}</div>}
      </div>
      {actions && <div className="hidden sm:block sm:flex-shrink-0">{actions}</div>}
    </div>
    {children}
  </div>
);
const DefaultProfileIcon = ({ className = '', iconClassName = 'h-10 w-10 text-slate-500' }) => (
  <div className={classNames('flex items-center justify-center bg-slate-800 text-slate-500', className)}>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={classNames('h-10 w-10', iconClassName)}
    >
      <path d="M12 12.75a4.5 4.5 0 10-4.5-4.5 4.5 4.5 0 004.5 4.5zM5.25 20.25a6.75 6.75 0 0113.5 0v.75a.75.75 0 01-.75.75h-12a.75.75 0 01-.75-.75z" />
    </svg>
  </div>
);
const LiveBadge = ({ timestamp, status = 'unknown' }) => {
  const tickingNow = useNowTick(1000);
  if (status === 'unknown' && !timestamp) return null;
  const isOffline = status === 'offline';
  const isOnline = status === 'online';
  const isUpdating = status === 'updating';
  const label = isOffline ? 'OFFLINE' : isUpdating ? 'UPDATING' : 'LIVE';
  const timeLabel = isOnline && timestamp ? formatLiveTimestamp(timestamp, tickingNow) : null;
  const badgeToneClass = (() => {
    if (isOffline) return 'border-rose-500/50 bg-rose-500/10 text-rose-200';
    if (isUpdating) return 'border-amber-400/60 bg-amber-500/10 text-amber-50';
    return 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200';
  })();
  const dotToneClass = isOffline ? 'bg-rose-400' : isUpdating ? 'animate-pulse bg-amber-300' : 'animate-pulse bg-emerald-400';
  const timeToneClass = isOffline ? 'text-rose-100/80' : isUpdating ? 'text-amber-100/80' : 'text-emerald-100/80';
  return (
    <span
      className={classNames(
        'flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]',
        badgeToneClass
      )}
    >
      <span className={classNames('h-2 w-2 rounded-full', dotToneClass)} />
      {label}
      {timeLabel && <span className={classNames(timeToneClass, 'normal-case tracking-normal')}>{timeLabel}</span>}
    </span>
  );
};
const IconTrash = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const IconPlus = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);
const IconCheck = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconClose = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSave = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 3h11l3 3v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5H6V3" />
    <path d="M6 17h12" />
    <path d="M12 11v6" />
  </svg>
);
const IconBan = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="7" y1="17" x2="17" y2="7" />
  </svg>
);
const RESPONSIVE_ACTION_BUTTON_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:px-4 sm:py-2 sm:text-sm';
const IconDashboard = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3.5 11 12 4l8.5 7" />
    <path d="M6 10v10h5v-5h2v5h5V10" />
  </svg>
);
const IconData = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
    <path d="M3.5 9h17M3.5 13h17M8 5v14M13 5v14" />
  </svg>
);
const IconBot = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v3" />
    <rect x="5" y="7" width="14" height="11" rx="4" />
    <path d="M5 12H3m18 0h-2M9 19v2m6-2v2" />
    <circle cx="10" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="14" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9.5 15h5" />
  </svg>
);
const IconSystem = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M2.5 12h3M18.5 12h3" />
  </svg>
);
const IconProfile = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-3.866 0-7 1.791-7 4v1h14v-1c0-2.209-3.134-4-7-4Zm0-2a4 4 0 1 0-0.001-8.001A4 4 0 0 0 12 12Z" />
  </svg>
);
const IconCalendarDay = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6" />
  </svg>
);
const IconCalendarWeek = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 13.5h9M7.5 16.5h9M8 11h.01M12 11h.01M16 11h.01" />
  </svg>
);
const IconCalendarMonth = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8M8 16h8" />
  </svg>
);
const IconScaleCompact = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="6" width="4" height="4" rx="1" />
    <rect x="10" y="6" width="4" height="4" rx="1" />
    <rect x="16" y="6" width="4" height="4" rx="1" />
    <rect x="4" y="14" width="4" height="4" rx="1" />
    <rect x="10" y="14" width="4" height="4" rx="1" />
    <rect x="16" y="14" width="4" height="4" rx="1" />
  </svg>
);
const IconScaleNormal = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="7" width="6" height="10" rx="1.5" />
    <rect x="14" y="7" width="6" height="10" rx="1.5" />
  </svg>
);
const IconScaleLarge = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="6" width="16" height="12" rx="2" />
  </svg>
);
const IconChevronLeft = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
  </svg>
);
const IconChevronRight = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
  </svg>
);
const IconFilter = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);
const APPOINTMENT_CALENDAR_VIEW_ICONS = {
  day: IconCalendarDay,
  week: IconCalendarWeek,
  month: IconCalendarMonth,
};
const APPOINTMENT_CALENDAR_SCALE_ICONS = {
  compact: IconScaleCompact,
  normal: IconScaleNormal,
  large: IconScaleLarge,
};
const IconDots = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
);
const VIEW_TAB_ICONS = {
  dashboard: IconDashboard,
  tables: IconData,
  system: IconSystem,
  profile: IconProfile,
};
const SYSTEM_SUB_SECTIONS = Object.freeze([
  { id: 'bot', label: 'Бот' },
  { id: 'constructor', label: 'Конструктор меню' },
  { id: 'site', label: 'Сайт' },
  { id: 'system', label: 'Система' },
]);
const UI_TEXT = Object.freeze({
  accountTitle: 'Ваш аккаунт',
  logout: 'Выйти',
  newAppointmentCta: 'Новая запись',
  liveFallback: 'LIVE',
});
const BotMenuBuilder = (typeof window !== 'undefined' && window.BotMenuBuilder) || (() => (
  <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-200">
    Конструктор меню временно недоступен.
  </div>
));
const Modal = ({ title, isOpen, onClose, children, footer, maxWidthClass = 'max-w-3xl' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-stretch overflow-y-auto bg-black/60 p-0 sm:items-center sm:justify-center sm:px-4 sm:py-6">
      <div
        className={`flex h-full max-h-[100dvh] min-h-0 w-full ${maxWidthClass} flex-col overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl rounded-none sm:h-auto sm:rounded-2xl`}
      >
        <div className="flex min-w-0 items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
          <h3 className="min-w-0 flex-1 truncate text-lg font-semibold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="flex-shrink-0 text-slate-400 hover:text-white" aria-label="Закрыть">
            x
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 space-y-4 sm:px-6">{children}</div>
        {footer && (
          <div className="flex flex-wrap justify-end gap-2 border-t border-slate-800 px-4 py-3 pb-[env(safe-area-inset-bottom)] sm:gap-3 sm:px-6 sm:py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
const ConfirmDialog = ({ open, title, message, confirmLabel = 'Подтвердить', cancelLabel = 'Отмена', tone = 'neutral', onResult }) => {
  if (!open) return null;
  const confirmToneClass = (() => {
    switch (tone) {
      case 'danger':
        return 'bg-rose-600 hover:bg-rose-500';
      case 'success':
        return 'bg-emerald-600 hover:bg-emerald-500';
      default:
        return 'bg-indigo-600 hover:bg-indigo-500';
    }
  })();
  return (
    <Modal
      isOpen={open}
      title={title || 'Подтвердите действие'}
      onClose={() => onResult(false)}
      maxWidthClass="max-w-md"
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={() => onResult(false)} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
            {cancelLabel}
          </button>
          <button onClick={() => onResult(true)} className={`rounded-lg px-4 py-2 text-sm font-semibold text-white ${confirmToneClass}`}>
            {confirmLabel}
          </button>
        </div>
      }
    >
      <p className="text-sm text-slate-200">{message || 'Вы уверены, что хотите продолжить?'}</p>
    </Modal>
  );
};
const StatCard = ({ label, value, accent = 'text-indigo-300', onClick }) => {
  const interactive = typeof onClick === 'function';
  const Wrapper = interactive ? 'button' : 'div';
  return (
    <Wrapper
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      className={classNames(
        'rounded-xl border border-slate-700 bg-slate-900/40 p-3 text-left sm:p-4',
        interactive &&
          'cursor-pointer transition hover:border-indigo-400/70 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/60'
      )}
    >
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className={classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)}>{value}</p>
    </Wrapper>
  );
};
const Sidebar = ({
  session,
  activeTab,
  onChange,
  onLogout,
  liveUpdatedAt,
  liveStatus = 'unknown',
  activeDataTable = 'Appointments',
  onSelectTable,
  tabs,
  tableShortcuts,
  systemSection = 'bot',
  onSelectSystemSection,
}) => {
  const username = session?.displayName || session?.username || '-';
  const sidebarTabs = Array.isArray(tabs) && tabs.length ? tabs : VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const sidebarShortcuts =
    Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS;
  return (
    <aside className="hidden w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto">
      <div className="space-y-2 border-b border-slate-800 pb-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">{UI_TEXT.accountTitle}</p>
        <p className="text-lg font-semibold text-white">{username}</p>
        <button
          onClick={onLogout}
          className="mt-2 w-full rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-500 hover:text-white"
        >
          {UI_TEXT.logout}
        </button>
        {(liveUpdatedAt || liveStatus !== 'unknown') && (
          <div className="pt-2">
            <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
          </div>
        )}
      </div>
      <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
        {sidebarTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div key={tab.id} className="space-y-1">
              <button
                onClick={() => onChange?.(tab.id)}
                className={classNames(
                  'w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition',
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-900/40'
                    : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                )}
              >
                {tab.label}
              </button>
              {tab.id === 'tables' && (
                <div className="space-y-1 pl-4">
                  {sidebarShortcuts.map((shortcut) => {
                    const isShortcutActive = activeDataTable === shortcut.id && activeTab === 'tables';
                    return (
                      <button
                        key={shortcut.id}
                        onClick={() => onSelectTable?.(shortcut.id)}
                        className={classNames(
                          'w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition',
                          isShortcutActive
                            ? 'bg-indigo-600/20 text-indigo-100'
                            : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
                        )}
                        disabled={!onSelectTable}
                      >
                        {shortcut.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {tab.id === 'system' && (
                <div className="space-y-1 pl-4">
                  {SYSTEM_SUB_SECTIONS.map((section) => {
                    const isSectionActive = isActive && systemSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onChange?.('system');
                          onSelectSystemSection?.(section.id);
                        }}
                        className={classNames(
                          'w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition',
                          isSectionActive
                            ? 'bg-indigo-600/20 text-indigo-100'
                            : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
                        )}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
const MobileTabs = ({
  session,
  activeTab,
  onChange,
  onLogout,
  liveUpdatedAt,
  liveStatus = 'unknown',
  tabs,
  activeDataTable,
  onSelectTable,
  tableShortcuts,
  systemSection,
  onSelectSystemSection,
}) => {
  const username = session?.displayName || session?.username || '-';
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [showSubmenus, setShowSubmenus] = useState(true);
  const submenusVisibleRef = useRef(showSubmenus);
  const lastScrollRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const handleSelect = (tabId, options = {}) => {
    const { preserveSubmenus = false } = options;
    if (tabId === activeTab) {
      if (preserveSubmenus) {
        submenusVisibleRef.current = true;
        setShowSubmenus(true);
        return;
      }
      const next = !submenusVisibleRef.current;
      submenusVisibleRef.current = next;
      setShowSubmenus(next);
      return;
    }
    submenusVisibleRef.current = true;
    setShowSubmenus(true);
    onChange?.(tabId);
  };
  const availableTabs = Array.isArray(tabs) && tabs.length ? tabs : VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const handleToggleLogoutMenu = () => setShowLogoutMenu((prev) => !prev);
  const handleLogoutClick = () => {
    setShowLogoutMenu(false);
    onLogout?.();
  };
  useEffect(() => {
    setShowLogoutMenu(false);
  }, [activeTab]);
  useEffect(() => {
    submenusVisibleRef.current = showSubmenus;
  }, [showSubmenus]);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY || 0;
      const last = lastScrollRef.current || 0;
      const scrollingDown = current > last + 4;
      const scrollingUp = current < last - 4;
      const nearTop = current < 16;
      if (scrollingDown && current > 4 && submenusVisibleRef.current) {
        setShowSubmenus(false);
      } else if ((scrollingUp || nearTop) && !submenusVisibleRef.current) {
        setShowSubmenus(true);
      }
      lastScrollRef.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const resolvedShortcuts = useMemo(
    () => (Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS),
    [tableShortcuts]
  );
  const canRenderTableSubmenu = activeTab === 'tables' && resolvedShortcuts.length > 0;
  const canRenderSystemSubmenu = activeTab === 'system' && SYSTEM_SUB_SECTIONS.length > 0;
  const hasVisibleSubmenus = showSubmenus && (canRenderTableSubmenu || canRenderSystemSubmenu);
  const renderLiveIndicator = () =>
    liveStatus === 'unknown' && !liveUpdatedAt ? (
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">{UI_TEXT.liveFallback}</span>
    ) : (
      <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
    );
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur lg:hidden">
        <div className="relative px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-[88px] justify-start">
              {renderLiveIndicator()}
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="relative inline-flex">
                <button
                  type="button"
                  onClick={handleToggleLogoutMenu}
                  aria-expanded={showLogoutMenu}
                  className="flex items-center gap-2 rounded-2xl border border-slate-800/0 px-4 py-2 text-base font-semibold text-white transition hover:border-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <span className="max-w-[60vw] truncate text-right">{username}</span>
                  <svg
                    className={classNames(
                      'h-4 w-4 text-slate-400 transition-transform',
                      showLogoutMenu ? 'rotate-180' : 'rotate-0'
                    )}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={classNames(
                    'absolute left-0 right-0 top-full z-40 mt-1 translate-y-0 transition-all duration-150',
                    showLogoutMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                  )}
                >
                  <button
                    type="button"
                    onClick={handleLogoutClick}
                    className="w-full rounded-2xl border border-slate-600/80 bg-slate-900/95 px-4 py-2 text-base font-semibold text-rose-200 shadow-lg shadow-black/30 transition hover:border-rose-400 hover:text-white"
                  >
                    {UI_TEXT.logout}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="fixed inset-x-0 bottom-0 z-30 px-4 pb-6 pt-4 lg:hidden">
        <div className="mx-auto max-w-md">
          <div className="relative">
            <div
              className={classNames(
                'pointer-events-none absolute inset-x-3 bottom-0 rounded-[32px] bg-gradient-to-b from-transparent via-[#0a1120]/85 to-[#02040c]/95 shadow-[0_-14px_40px_rgba(0,0,0,0.65)] transition-all duration-300',
                hasVisibleSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}
              aria-hidden="true"
            />
            <div className="relative rounded-[32px] bg-[#050916] px-4 py-3">
              <div
                className={classNames(
                  'space-y-2 overflow-hidden transition-[max-height,opacity,transform,padding] duration-300 ease-out',
                  hasVisibleSubmenus
                    ? 'max-h-32 pb-2 opacity-100 translate-y-0'
                    : 'max-h-0 pb-0 opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                {canRenderTableSubmenu && (
                  <div
                    className={classNames(
                      'no-scrollbar flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                  >
                    {resolvedShortcuts.map((shortcut) => {
                      const isShortcutActive = activeDataTable === shortcut.id;
                      const canSelectTable = typeof onSelectTable === 'function';
                      return (
                        <button
                          key={shortcut.id}
                          type="button"
                          onClick={() => {
                            handleSelect('tables', { preserveSubmenus: true });
                            onSelectTable?.(shortcut.id);
                          }}
                          disabled={!canSelectTable}
                          className={classNames(
                            'flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                            isShortcutActive
                              ? 'bg-[#5a57ff] text-white'
                              : 'bg-white/10 text-slate-200/80 hover:bg-white/15 hover:text-white',
                            !canSelectTable && 'opacity-50'
                          )}
                        >
                          {shortcut.label}
                        </button>
                      );
                    })}
                  </div>
                )}
                {canRenderSystemSubmenu && (
                  <div
                    className={classNames(
                      'no-scrollbar flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                  >
                    {SYSTEM_SUB_SECTIONS.map((section) => {
                      const isSectionActive = systemSection === section.id;
                      const canSelect = typeof onSelectSystemSection === 'function';
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => {
                            handleSelect('system', { preserveSubmenus: true });
                            onSelectSystemSection?.(section.id);
                          }}
                          disabled={!canSelect}
                          className={classNames(
                            'flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                            isSectionActive
                              ? 'bg-[#5a57ff] text-white'
                              : 'bg-white/10 text-slate-200/80 hover:bg-white/15 hover:text-white',
                            !canSelect && 'opacity-50'
                          )}
                        >
                          {section.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="flex w-full items-center gap-3 rounded-[32px] bg-[#050916] px-4 py-3 transition-all duration-300">
                {availableTabs.map((tab) => {
                  const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className={classNames(
                        'flex-1 rounded-full px-3 py-2 text-center text-sm font-semibold transition-colors',
                        isActive ? 'bg-[#37267a] text-[#ebe9ff]' : 'text-slate-500/80 hover:text-white'
                      )}
                      aria-label={tab.label}
                    >
                      <IconComponent
                        className={classNames('mx-auto h-6 w-6', isActive ? 'text-[#ebe9ff]' : 'text-slate-500/80')}
                      />
                      <span className="sr-only">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
const DashboardView = ({
  data,
  onOpenAppointment,
  onOpenProfile,
  onCreateAppointment,
  onNavigateTable,
  onQuickUpdateStatus,
  availableTables = [],
  currentUser = null,
  currentBarber = null,
  liveUpdatedAt = null,
  liveStatus = 'unknown',
}) => {
  if (!data) return <LoadingState />;
  const [pendingStatusId, setPendingStatusId] = useState(null);
  const nowTs = useNowTick(30000);
  const stats = data.stats || {};
  const hasExplicitUpcoming = Array.isArray(data.appointments?.upcoming);
  const hasExplicitOverdue = Array.isArray(data.appointments?.overdue);
  const useExplicitOverdue = hasExplicitOverdue && data.appointments.overdue.length > 0;
  const activeRaw = Array.isArray(data.appointments?.active) ? data.appointments.active : [];
  const upcomingRaw = hasExplicitUpcoming ? data.appointments.upcoming : activeRaw;
  const overdueRaw = useExplicitOverdue ? data.appointments.overdue : activeRaw;
  const isStaffView = currentUser?.role === ROLE_STAFF;
  const restrictUpcomingToStaff = isStaffView;
  const staffNameSet = useMemo(() => {
    if (!restrictUpcomingToStaff) return null;
    const pool = [
      currentUser?.barberName,
      currentUser?.displayName,
      currentUser?.username,
      currentBarber?.name,
      currentBarber?.nickname,
      currentBarber?.login,
    ];
    const normalized = pool
      .map((value) => canonicalizeName(value).toLowerCase())
      .filter(Boolean);
    return normalized.length ? new Set(normalized) : null;
  }, [
    restrictUpcomingToStaff,
    currentUser?.barberName,
    currentUser?.displayName,
    currentUser?.username,
    currentBarber?.name,
    currentBarber?.nickname,
    currentBarber?.login,
  ]);
  const filterAppointmentsForStaff = useCallback((appointments = []) => {
    if (!restrictUpcomingToStaff || !staffNameSet) return appointments;
    return appointments.filter((appt) => {
      const candidate = canonicalizeName(appt.Barber).toLowerCase();
      return candidate && staffNameSet.has(candidate);
    });
  }, [restrictUpcomingToStaff, staffNameSet]);
  const upcomingSource = useMemo(
    () => filterAppointmentsForStaff(upcomingRaw),
    [filterAppointmentsForStaff, upcomingRaw]
  );
  const overdueSource = useMemo(
    () => filterAppointmentsForStaff(overdueRaw),
    [filterAppointmentsForStaff, overdueRaw]
  );
  const normalizedUpcoming = useMemo(
    () =>
      upcomingSource.map((appt) => ({
        ...appt,
        Status: normalizeStatusValue(appt.Status),
        startDate: getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime),
        endDate: getAppointmentEndDate(appt.Date, appt.Time, appt.startDateTime),
      })),
    [upcomingSource]
  );
  const normalizedOverdue = useMemo(
    () =>
      overdueSource.map((appt) => ({
        ...appt,
        Status: normalizeStatusValue(appt.Status),
        startDate: getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime),
        endDate: getAppointmentEndDate(appt.Date, appt.Time, appt.startDateTime),
      })),
    [overdueSource]
  );
  const upcomingList = useMemo(() => {
    return normalizedUpcoming
      .filter((appt) => shouldDisplayAppointment(appt, nowTs))
      .sort((a, b) => {
        const left = a.startDate?.getTime() || Number.MAX_SAFE_INTEGER;
        const right = b.startDate?.getTime() || Number.MAX_SAFE_INTEGER;
        return left - right;
      })
      .slice(0, 12);
  }, [normalizedUpcoming, nowTs]);
  const overdueList = useMemo(() => {
    if (useExplicitOverdue) {
      return normalizedOverdue
        .sort((a, b) => (b.endDate?.getTime() || 0) - (a.endDate?.getTime() || 0))
        .slice(0, 12);
    }
    return normalizedOverdue
      .map((appt) => {
        const startTs = appt.startDate?.getTime() || null;
        const endTs = appt.endDate?.getTime() || startTs;
        return { ...appt, startTs, endTs };
      })
      .filter((appt) => isActiveAppointmentStatus(appt.Status) && appt.endTs && appt.endTs < nowTs)
      .sort((a, b) => (b.endTs || 0) - (a.endTs || 0))
      .slice(0, 12)
      .map(({ startTs, endTs, ...rest }) => rest);
  }, [useExplicitOverdue, normalizedOverdue, nowTs]);
  const handleStatusShortcut = useCallback(
    async (appointment, status) => {
      if (!appointment || !status) return;
      const apptId = getRecordId(appointment);
      if (!apptId) return;
      const pendingKey = String(apptId);
      if (typeof onQuickUpdateStatus !== 'function') {
        onOpenAppointment?.(appointment, { allowDelete: true });
        return;
      }
      setPendingStatusId(pendingKey);
      try {
        await onQuickUpdateStatus(appointment, status);
      } catch (error) {
        console.error('Quick status update failed', error);
      } finally {
        setPendingStatusId(null);
      }
    },
    [onQuickUpdateStatus, onOpenAppointment]
  );
  const formatGroupLabel = useCallback((dateValue) => {
    if (!dateValue || dateValue === 'Без даты') return 'Без даты';
    try {
      const parsed = new Date(`${dateValue}T00:00:00`);
      if (Number.isNaN(parsed.getTime())) return dateValue;
      return new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(parsed);
    } catch {
      return dateValue;
    }
  }, []);
  const groupedUpcoming = useMemo(() => {
    const groups = new Map();
    upcomingList.forEach((appt) => {
      const key = appt.Date || 'Без даты';
      const bucket = groups.get(key) || [];
      bucket.push(appt);
      groups.set(key, bucket);
    });
    return Array.from(groups.entries())
      .map(([key, items]) => ({
        key,
        label: formatGroupLabel(key),
        items,
        sortValue: Math.min(
          ...items.map((item) => getAppointmentStartDate(item.Date, item.Time, item.startDateTime)?.getTime() || Number.MAX_SAFE_INTEGER)
        ),
      }))
      .sort((a, b) => a.sortValue - b.sortValue);
  }, [formatGroupLabel, upcomingList]);
  const upcomingActions = onCreateAppointment ? (
    <button
      onClick={onCreateAppointment}
      className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500 sm:px-4 whitespace-nowrap"
    >
      <span className="sm:hidden">+ Запись</span>
      <span className="hidden sm:inline">+ Новая запись</span>
    </button>
  ) : null;
  const handleStatNavigate = useCallback(
    (preferredTable) => {
      if (typeof onNavigateTable !== 'function' || !preferredTable) return;
      const allowedTables = Array.isArray(availableTables) ? availableTables.filter(Boolean) : [];
      if (allowedTables.length && !allowedTables.includes(preferredTable)) {
        onNavigateTable(allowedTables[0]);
        return;
      }
      onNavigateTable(preferredTable);
    },
    [onNavigateTable, availableTables]
  );
  const resolveStatHandler = (tableId) =>
    typeof onNavigateTable === 'function' ? () => handleStatNavigate(tableId) : undefined;
  return (
    <div className="space-y-6 overflow-x-hidden">
      <SectionCard title="Ключевые показатели">
        <div className="grid gap-4 stat-grid">
          <StatCard label="Всего клиентов" value={stats.totalUsers ?? 0} onClick={resolveStatHandler('Users')} />
          <StatCard
            label="Активных записей"
            value={stats.activeAppointments ?? 0}
            accent="text-emerald-300"
            onClick={resolveStatHandler('Appointments')}
          />
          {isStaffView ? (
            <>
              <StatCard
                label="Заработано за месяц"
                value={stats.earningsMonth == null ? '—' : formatCurrencyValue(stats.earningsMonth)}
                accent="text-amber-200"
                onClick={resolveStatHandler('Revenue')}
              />
              <StatCard
                label="Мой уровень"
                value={stats.positionName || '—'}
                accent="text-indigo-200"
              />
            </>
          ) : (
            <>
              <StatCard
                label="Подтверждено за год"
                value={stats.confirmedYear ?? 0}
                accent="text-fuchsia-300"
                onClick={resolveStatHandler('Appointments')}
              />
              <StatCard
                label="На сегодня"
                value={stats.todaysAppointments ?? 0}
                accent="text-cyan-300"
                onClick={resolveStatHandler('Appointments')}
              />
            </>
          )}
        </div>
      </SectionCard>
      <SectionCard title="Ближайшие записи" actions={upcomingActions}>
        {groupedUpcoming.length === 0 ? (
          <p className="text-slate-400">Нет ближайших записей.</p>
        ) : (
          <div className="space-y-5">
            {groupedUpcoming.map((group) => (
              <div key={group.key} className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px flex-1 bg-slate-700" />
                  {group.label}
                  <span className="h-px flex-1 bg-slate-700" />
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {group.items.map((appt) => {
                    const inProgress = isAppointmentOngoing(appt, nowTs);
                    const cardProps = {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => onOpenAppointment?.(appt, { allowDelete: true }),
                      onKeyDown: (event) => event.key === 'Enter' && onOpenAppointment?.(appt, { allowDelete: true }),
                      className: classNames(
                        'group upcoming-card relative w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-5',
                        inProgress && 'border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                      ),
                    };
                    const { start, end } = parseTimeRangeParts(appt.Time);
                    const statusLabel = normalizeStatusValue(appt.Status);
                    const servicesList = parseMultiValue(appt.Services);
                    return (
                      <div key={appt.id || `${group.key}-${appt.CustomerName}-${appt.Time}`} {...cardProps}>
                        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
                          <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                              {formatDateBadgeLabel(appt.Date)}
                            </p>
                            <div className="flex items-baseline gap-3">
                              <p className="text-3xl font-bold leading-none text-white sm:text-4xl">{start || '—'}</p>
                              {end && <p className="text-sm text-slate-400 sm:text-base">до {end}</p>}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 text-right">
                            <span
                              className={classNames(
                                'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs',
                                getStatusBadgeClasses(statusLabel),
                              )}
                            >
                              {statusLabel || 'Без статуса'}
                            </span>
                            {appt.Barber && (
                              <p className="text-xs text-slate-400 sm:text-sm">
                                Барбер:{' '}
                                <span className="font-semibold text-white">{appt.Barber}</span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 space-y-4 text-[13px] text-slate-300 sm:text-sm">
                          <div className="space-y-3 min-w-0">
                            {appt.CustomerName ? (
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  onOpenProfile?.(appt.CustomerName);
                                }}
                                className="text-left text-base font-semibold text-white hover:text-indigo-300 sm:text-lg"
                              >
                                {appt.CustomerName}
                              </button>
                            ) : (
                              <p className="text-base font-semibold text-white sm:text-lg">Без имени</p>
                            )}
                          </div>
                          {servicesList.length ? (
                            <div className="flex flex-wrap gap-2">
                              {servicesList.map((service, index) => (
                                <span
                                  key={`${service}-${index}`}
                                  className="rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-1 text-[11px] text-slate-200 sm:text-xs"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs text-slate-400 sm:text-sm">Нет выбранных услуг</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>
      <SectionCard title="Прошедшие">
        {overdueList.length === 0 ? (
          <p className="text-slate-400">Нет активных записей, время которых уже прошло.</p>
        ) : (
          <div className="space-y-3">
            {overdueList.map((appt) => {
              const apptId = String(
                getRecordId(appt) || `${appt.Date || 'no-date'}-${appt.Time || 'no-time'}-${appt.CustomerName || 'no-name'}`
              );
              const { start, end } = parseTimeRangeParts(appt.Time);
              const timeLabel = [start || '—', end ? `до ${end}` : ''].filter(Boolean).join(' ');
              const statusLabel = normalizeStatusValue(appt.Status);
              const isPending = pendingStatusId === apptId;
              const handleOpen = () => onOpenAppointment?.(appt, { allowDelete: true });
              return (
                <div
                  key={apptId}
                  role="button"
                  tabIndex={0}
                  onClick={handleOpen}
                  onKeyDown={(event) => event.key === 'Enter' && handleOpen()}
                  className="rounded-2xl border border-amber-500/50 bg-amber-500/5 p-4 shadow-inner shadow-amber-900/20 transition hover:border-amber-400/80 hover:bg-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-amber-200/80">{formatDateBadgeLabel(appt.Date)}</p>
                      <p className="text-xl font-semibold text-white sm:text-2xl">{timeLabel || 'Время не указано'}</p>
                    </div>
                    <span
                      className={classNames(
                        'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs',
                        getStatusBadgeClasses(statusLabel)
                      )}
                    >
                      {statusLabel || 'Без статуса'}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-white">{appt.CustomerName || 'Без имени'}</p>
                      {appt.Barber ? (
                        <p className="text-sm text-slate-300">
                          Барбер: <span className="font-semibold text-white">{appt.Barber}</span>
                        </p>
                      ) : null}
                    </div>
                    <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-nowrap sm:items-center sm:justify-end sm:gap-3">
	                      <button
	                        type="button"
	                        onClick={(event) => {
	                          event.preventDefault();
	                          event.stopPropagation();
	                          handleStatusShortcut(appt, STATUS_DONE);
	                        }}
	                        onKeyDown={(event) => event.stopPropagation()}
	                        disabled={isPending}
	                        className={classNames(
	                          'w-full justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white transition sm:w-auto sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm',
	                          isPending ? 'cursor-wait bg-emerald-700/50' : 'bg-emerald-600 hover:bg-emerald-500'
	                        )}
                      >
                        {isPending ? 'Сохраняю...' : 'Выполнена'}
                      </button>
	                      <button
	                        type="button"
	                        onClick={(event) => {
	                          event.preventDefault();
	                          event.stopPropagation();
	                          handleStatusShortcut(appt, STATUS_NO_SHOW);
	                        }}
	                        onKeyDown={(event) => event.stopPropagation()}
	                        disabled={isPending}
	                        className={classNames(
	                          'w-full justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white transition sm:w-auto sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm',
	                          isPending ? 'cursor-wait bg-amber-700/60' : 'bg-amber-600 hover:bg-amber-500'
	                        )}
                      >
                        {isPending ? 'Сохраняю...' : 'Неявка'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>
    </div>
  );
};
const MAX_AVATAR_UPLOAD_BYTES = 5 * 1024 * 1024;
const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
    reader.readAsDataURL(file);
  });
const rgbToHsl = (r, g, b) => {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / delta + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
        break;
    }
    h *= 60;
  }
  return { h, s, l };
};
const stripGreenBackground = async (dataUrl, options = {}) => {
  if (!dataUrl || typeof document === 'undefined') return dataUrl;
  const {
    keyHue,
    hueTolerance = 24,
    feather = 12,
    satThreshold = 0.25,
    greenBias = 16,
    edgeBandRatio = 0.08,
    sampleStep = 4,
  } = options;
  try {
    const image = await loadImageElement(dataUrl);
    const canvas = document.createElement('canvas');
    canvas.width = image.width || 1;
    canvas.height = image.height || 1;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;
    const w = canvas.width;
    const h = canvas.height;
    const band = Math.max(1, Math.round(Math.min(w, h) * edgeBandRatio));
    const step = Math.max(1, sampleStep);
    const greenHues = [];
    const pushSample = (x, y) => {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      if (g <= Math.max(r, b) + greenBias) return;
      const { h: sampleHue, s } = rgbToHsl(r, g, b);
      if (s < satThreshold) return;
      greenHues.push(sampleHue);
    };
    if (!Number.isFinite(keyHue)) {
      for (let y = 0; y < band; y += step) {
        for (let x = 0; x < w; x += step) pushSample(x, y);
      }
      for (let y = h - band; y < h; y += step) {
        for (let x = 0; x < w; x += step) pushSample(x, y);
      }
      for (let x = 0; x < band; x += step) {
        for (let y = 0; y < h; y += step) pushSample(x, y);
      }
      for (let x = w - band; x < w; x += step) {
        for (let y = 0; y < h; y += step) pushSample(x, y);
      }
    }
    const detectedHue =
      Number.isFinite(keyHue) || !greenHues.length
        ? Number.isFinite(keyHue) ? keyHue : 110
        : greenHues.reduce((sum, hue) => sum + hue, 0) / greenHues.length;
    const hueFeatherStart = Math.max(0, hueTolerance - feather);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (g <= Math.max(r, b) + greenBias) continue;
      const { h: pixelHue, s } = rgbToHsl(r, g, b);
      if (s < satThreshold) continue;
      const hueDiff = Math.min(Math.abs(pixelHue - detectedHue), 360 - Math.abs(pixelHue - detectedHue));
      if (hueDiff > hueTolerance + feather) continue;
      if (hueDiff <= hueFeatherStart) {
        data[i + 3] = 0;
      } else {
        const factor = Math.min(1, (hueDiff - hueFeatherStart) / Math.max(feather, 1));
        data[i + 3] = Math.round(a * factor);
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.warn('Chroma removal failed', error);
    return dataUrl;
  }
};
const CARD_CANVAS_WIDTH = 1360;
const CARD_CANVAS_HEIGHT = 768;
const CARD_BACKGROUND_IMAGE = resolveAssetUrl('card/background.jpg');
const CARD_NAME_COLOR = '#009b9f';
const CARD_TEXT_COLOR = '#1f1b16';
const TITLE_FONT_SIZE = 200;
const TITLE_FONT_WEIGHT = 900;
const TITLE_FONT_FAMILY = '\"Manrope\", \"Inter\", sans-serif';
const TITLE_FONT = `${TITLE_FONT_WEIGHT} ${TITLE_FONT_SIZE}px ${TITLE_FONT_FAMILY}`;
const TITLE_STROKE_WIDTH = 6;
const TITLE_BASE_Y = 194; // tweak to move the big name vertically
const TITLE_CENTER_OFFSET = 40; // tweak to shift the center horizontally
const CARD_PHRASE_BG = resolveAssetUrl('card/Favorite_phrase.png');
const CARD_PHOTO_BG = resolveAssetUrl('card/Barber_photo.png');
const CARD_MODE_GENERATED = 'generated';
const CARD_MODE_CUSTOM_IMAGE = 'custom-image';
const stripEmoji = (value) => normalizeText(value).replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\u200d\ufe0f]/gu, '');
const sanitizeCardText = (value) => stripEmoji(value).replace(/\r\n/g, '\n');
const normalizeCardMode = (value) => (value === CARD_MODE_CUSTOM_IMAGE ? CARD_MODE_CUSTOM_IMAGE : CARD_MODE_GENERATED);
const loadImageElement = (src) =>
  new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('Путь до изображения не указан.'));
      return;
    }
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Не удалось загрузить изображение.'));
    image.src = src;
  });
const drawCoverImage = (ctx, image, x, y, width, height) => {
  if (!image || !width || !height) return;
  const ratio = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * ratio;
  const drawHeight = image.height * ratio;
  const offsetX = x + (width - drawWidth) / 2;
  const offsetY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};
const drawRoundedRectPath = (ctx, x, y, width, height, radius = 24) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r);
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
  ctx.arcTo(x, y + height, x, y + height - r, r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
};
const createRoughOutlineFilter = (color = '', size = 6, jitter = 1.1) => {
  if (!color || size <= 0) return '';
  const offsets = [
    { x: 0, y: 0, blur: 0.65 },
    { x: 0.9, y: 0.4, blur: 0.85 },
    { x: -0.8, y: 0.7, blur: 0.75 },
    { x: 1, y: -0.6, blur: 0.8 },
    { x: -1, y: -0.5, blur: 0.7 },
    { x: 0.6, y: -1, blur: 0.9 },
  ];
  const unit = Math.max(size * 0.32, 0.5);
  const blurBase = Math.max(size * 0.22, 0.5);
  return offsets
    .map(({ x, y, blur }) => {
      const ox = (x * unit * jitter).toFixed(2);
      const oy = (y * unit * jitter).toFixed(2);
      const ob = Math.max(blur * blurBase, 0.4).toFixed(2);
      return `drop-shadow(${ox}px ${oy}px ${ob}px ${color})`;
    })
    .join(' ');
};
const drawRoundedImage = (
  ctx,
  image,
  x,
  y,
  width,
  height,
  radius = 32,
  filter = 'saturate(1.05) contrast(1.05)',
  options = {},
) => {
  if (!image) return;
  const { outlineColor = '', outlineSize = 6, outlineRoughness = 1.1 } = options;
  const outlineFilter = outlineColor ? createRoughOutlineFilter(outlineColor, outlineSize, outlineRoughness) : '';
  ctx.save();
  drawRoundedRectPath(ctx, x, y, width, height, radius);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
  ctx.shadowBlur = 26;
  ctx.shadowOffsetY = 18;
  ctx.clip();
  const composedFilter = [outlineFilter, filter].filter(Boolean).join(' ');
  ctx.filter = composedFilter || 'none';
  drawCoverImage(ctx, image, x, y, width, height);
  ctx.restore();
};
const wrapTextLines = (ctx, text, maxWidth) => {
  const source = normalizeText(text).replace(/\r\n/g, '\n').replace(/\t/g, '    ');
  if (!source) return [];
  const lines = [];
  const paragraphs = source.split('\n');
  paragraphs.forEach((paragraph, index) => {
    const tokens = paragraph.match(/\s+|\S+/g) || [''];
    let current = '';
    tokens.forEach((token) => {
      const next = current + token;
      if (ctx.measureText(next).width <= maxWidth || !current.trim()) {
        current = next;
        return;
      }
      if (ctx.measureText(token).width > maxWidth && !current.trim()) {
        let chunk = '';
        for (const char of token) {
          const candidate = chunk + char;
          if (ctx.measureText(candidate).width <= maxWidth || !chunk) {
            chunk = candidate;
          } else {
            lines.push(chunk);
            chunk = char;
          }
        }
        current = chunk;
        return;
      }
      if (current) lines.push(current);
      current = token.trimStart();
    });
    lines.push(current);
    if (index < paragraphs.length - 1) {
      lines.push('');
    }
  });
  return lines;
};
const ensureDisplayFonts = async () => {
  if (!document?.fonts?.load) return;
  try {
    await Promise.all([
      document.fonts.load(TITLE_FONT),
      document.fonts.load(`${TITLE_FONT_WEIGHT} ${TITLE_FONT_SIZE}px \"Manrope\"`),
      document.fonts.load('800 34px \"Manrope\"'),
      document.fonts.load('700 32px \"Manrope\"'),
      document.fonts.load('600 30px \"Manrope\"'),
    ]);
    await document.fonts.ready;
  } catch (error) {
    console.warn('Font load skipped:', error);
  }
};
const buildCardFileName = (name = '') => {
  const normalized = normalizeText(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  const base = normalized || 'barber-card';
  return `${base}-${Date.now()}.jpg`;
};
const BarberAvatarPicker = ({
  value,
  onChange,
  loadOptions,
  onUpload,
  onCardUpload,
  onDelete,
  onRegisterCardSaver,
  initialName = '',
  initialDescription = '',
  initialCardTitle = '',
  initialCardDescription = '',
  initialCardPhrase = '',
  initialPhotoGrayscale = true,
  initialPhotoOutline = true,
  cardMode = CARD_MODE_GENERATED,
  cardImageUrl = '',
  onCardFieldsChange,
  onCardModeChange,
  onCardImageChange,
}) => {
  const [avatarOptions, setAvatarOptions] = useState(() => avatarOptionsCache || []);
  const [loading, setLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState('');
  const lastSavedPreviewRef = useRef(null);
  const [cardFields, setCardFields] = useState(() => ({
    name: sanitizeCardText(initialCardTitle || initialName),
    description: sanitizeCardText(initialCardDescription || initialDescription),
    phrase: sanitizeCardText(initialCardPhrase || ''),
  }));
  const [selectedCardMode, setSelectedCardMode] = useState(() => normalizeCardMode(cardMode));
  const [cardPhoto, setCardPhoto] = useState('');
  const [cardPreview, setCardPreview] = useState('');
  const cardPreviewRef = useRef('');
  const customCardInputRef = useRef(null);
  const [customCardImage, setCustomCardImage] = useState(() => normalizeImagePath(cardImageUrl || ''));
  const [photoGrayscale, setPhotoGrayscale] = useState(() => initialPhotoGrayscale !== false);
  const [photoOutlineEnabled, setPhotoOutlineEnabled] = useState(() => initialPhotoOutline !== false);
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState('');
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const canvasRef = useRef(null);
  const normalizedValue = useMemo(() => normalizeImagePath(value), [value]);
  useEffect(() => {
    if (!value || typeof onChange !== 'function') return;
    const normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      onChange(normalized);
    }
  }, [value, onChange]);
  useEffect(() => {
    setCardFields({
      name: sanitizeCardText(initialCardTitle || initialName),
      description: sanitizeCardText(initialCardDescription || initialDescription),
      phrase: sanitizeCardText(initialCardPhrase || ''),
    });
    setPhotoGrayscale(initialPhotoGrayscale !== false);
    setPhotoOutlineEnabled(initialPhotoOutline !== false);
  }, [
    initialName,
    initialDescription,
    initialCardTitle,
    initialCardDescription,
    initialCardPhrase,
    initialPhotoGrayscale,
    initialPhotoOutline,
  ]);
  useEffect(() => {
    onCardFieldsChange?.({
      cardTitle: cardFields.name,
      cardDescription: cardFields.description,
      cardPhrase: cardFields.phrase,
      cardPhotoGrayscale: photoGrayscale,
      cardPhotoOutline: photoOutlineEnabled,
    });
  }, [cardFields, photoGrayscale, photoOutlineEnabled, onCardFieldsChange]);
  useEffect(() => {
    setSelectedCardMode(normalizeCardMode(cardMode));
  }, [cardMode]);
  useEffect(() => {
    const normalized = normalizeImagePath(cardImageUrl || '');
    setCustomCardImage(normalized);
    if (normalized && selectedCardMode === CARD_MODE_CUSTOM_IMAGE) {
      cardPreviewRef.current = normalized;
      setCardPreview(normalized);
      lastSavedPreviewRef.current = normalized;
    }
  }, [cardImageUrl, selectedCardMode]);
  useEffect(() => {
    setCardPhoto((prev) => {
      const nextPhoto = normalizedValue && !normalizedValue.endsWith('background.jpg') ? normalizedValue : '';
      return nextPhoto === prev ? prev : nextPhoto;
    });
  }, [normalizedValue]);
  const availableOptions = useMemo(() => {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue, ...avatarOptions];
  }, [avatarOptions, normalizedValue]);
  const requestAvatarOptions = useCallback(async () => {
    const loader = typeof loadOptions === 'function' ? loadOptions : fetchAvatarOptions;
    const assetsPayload = await loader();
    const assets = Array.isArray(assetsPayload)
      ? assetsPayload
      : Array.isArray(assetsPayload?.images)
        ? assetsPayload.images
        : [];
    return Array.from(new Set(assets.map((asset) => normalizeImagePath(asset)).filter(Boolean)));
  }, [loadOptions]);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    requestAvatarOptions()
      .then((assets) => {
        if (!isMounted) return;
        avatarOptionsCache = assets;
        setAvatarOptions(assets);
      })
      .catch((error) => {
        if (!isMounted) return;
        console.error('Avatar load error', error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [requestAvatarOptions]);
  const refreshAvatarOptions = useCallback(async () => {
    setLoading(true);
    try {
      const assets = await requestAvatarOptions();
      avatarOptionsCache = assets;
      setAvatarOptions(assets);
      return assets;
    } finally {
      setLoading(false);
    }
  }, [requestAvatarOptions]);
  const applyAvatarValue = useCallback(
    (nextValue) => {
      const normalized = normalizeImagePath(nextValue || '');
      const safePhoto = normalized && !normalized.endsWith('background.jpg') ? normalized : '';
      setCardPhoto(safePhoto);
      onChange?.(normalized);
    },
    [onChange],
  );
  const handleUploadFile = useCallback(
    async (file) => {
      if (!file || typeof onUpload !== 'function') return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Файл должен быть изображением.');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setActionError('Файл больше 5 МБ.');
        return;
      }
      setActionError('');
      setActionBusy(true);
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const cleanedDataUrl = await stripGreenBackground(dataUrl);
        const result = await onUpload({ name: file.name, data: cleanedDataUrl });
        await refreshAvatarOptions();
        const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
        applyAvatarValue(uploadedPath);
        setShowGallery(true);
      } catch (error) {
        console.error('Avatar upload error', error);
        setActionError(error.message || 'Не удалось загрузить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onUpload, refreshAvatarOptions, applyAvatarValue],
  );
  const handleFileInputChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (file) {
        handleUploadFile(file);
      }
    },
    [handleUploadFile],
  );
  const handlePhotoFileChange = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Файл должен быть изображением.');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setRenderError('Максимальный размер: 5 МБ, выберите файл поменьше.');
        return;
      }
      setRenderError('');
      setActionError('');
      let busy = false;
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const cleanedDataUrl = await stripGreenBackground(dataUrl);
        let normalized = normalizeImagePath(cleanedDataUrl);
        if (typeof onUpload === 'function') {
          setActionBusy(true);
          busy = true;
          const result = await onUpload({ name: file.name, data: cleanedDataUrl });
          const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
          if (uploadedPath) {
            normalized = uploadedPath;
          }
        }
        applyAvatarValue(normalized);
        setAvatarOptions((prev) => [normalized, ...prev.filter((item) => item !== normalized)]);
        setShowGallery(true);
      } catch (error) {
        console.error('Avatar photo upload error', error);
        setActionError(error.message || 'Не удалось сохранить фото.');
        setRenderError(error.message || 'Не удалось сформировать превью карточки.');
      } finally {
        if (busy) {
          setActionBusy(false);
        }
      }
    },
    [onUpload, applyAvatarValue],
  );
  const handleDeleteImage = useCallback(
    async (target) => {
      if (!target || typeof onDelete !== 'function') return;
      setActionError('');
      setActionBusy(true);
      try {
        await onDelete(target);
        await refreshAvatarOptions();
        const normalizedTarget = normalizeImagePath(target);
        if (normalizedTarget === normalizedValue) {
          applyAvatarValue('');
        }
      } catch (error) {
        console.error('Avatar delete error', error);
        setActionError(error.message || 'Не удалось удалить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onDelete, refreshAvatarOptions, normalizedValue, applyAvatarValue],
  );
  const previewSrc = normalizedValue ? resolveAssetUrl(normalizedValue) : '';
  const photoPreview = cardPhoto ? resolveAssetUrl(cardPhoto) : '';
  const isGeneratedMode = selectedCardMode === CARD_MODE_GENERATED;
  const isCustomMode = selectedCardMode === CARD_MODE_CUSTOM_IMAGE;
  useEffect(() => {
    let cancelled = false;
    const renderCard = async () => {
      if (!canvasRef.current) return;
      if (selectedCardMode === CARD_MODE_CUSTOM_IMAGE) {
        const resolved = normalizeImagePath(customCardImage || cardImageUrl || '');
        cardPreviewRef.current = resolved;
        setCardPreview(resolved);
        return;
      }
      setRendering(true);
      setRenderError('');
      try {
        await ensureDisplayFonts();
        const ctx = canvasRef.current.getContext('2d');
        const [background, profilePhoto, phraseBg, photoBg] = await Promise.all([
          loadImageElement(CARD_BACKGROUND_IMAGE).catch(() => null),
          cardPhoto ? loadImageElement(resolveAssetUrl(cardPhoto)).catch(() => null) : Promise.resolve(null),
          CARD_PHRASE_BG ? loadImageElement(CARD_PHRASE_BG).catch(() => null) : Promise.resolve(null),
          CARD_PHOTO_BG ? loadImageElement(CARD_PHOTO_BG).catch(() => null) : Promise.resolve(null),
        ]);
        if (cancelled) return;
        canvasRef.current.width = CARD_CANVAS_WIDTH;
        canvasRef.current.height = CARD_CANVAS_HEIGHT;
        ctx.clearRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        if (background) {
          drawCoverImage(ctx, background, 0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        } else {
          const gradient = ctx.createLinearGradient(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
          gradient.addColorStop(0, '#f3e7d3');
          gradient.addColorStop(1, '#c8e7dd');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        }
        const title = sanitizeCardText(cardFields.name || 'BARBER').toUpperCase();
        ctx.fillStyle = CARD_NAME_COLOR;
        ctx.save();
        ctx.font = TITLE_FONT;
        ctx.textBaseline = 'top';
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.lineWidth = TITLE_STROKE_WIDTH;
        const titleCenterX = CARD_CANVAS_WIDTH * 0.5 + TITLE_CENTER_OFFSET;
        const titleWidth = ctx.measureText(title).width;
        const titleX = titleCenterX - titleWidth / 2;
        ctx.strokeStyle = CARD_NAME_COLOR;
        ctx.strokeText(title, titleX, TITLE_BASE_Y);
        ctx.fillStyle = CARD_NAME_COLOR;
        ctx.fillText(title, titleX, TITLE_BASE_Y);
        ctx.restore();
        const phraseBgX = CARD_CANVAS_WIDTH * 0.4; // keep favorite phrase background anchored
        const phraseTextX = phraseBgX + 20; // nudge phrase content slightly right
        const descX = CARD_CANVAS_WIDTH * 0.5; // shift description block slightly left
        const descWidth = CARD_CANVAS_WIDTH - descX - 60;
        const phraseWidth = CARD_CANVAS_WIDTH - phraseBgX - 80; // phrase area matches background anchor
        const descStartY = 400; // move description block slightly lower
        const bulletX = descX - 18; // keep bullets offset with new position
        let lineIndex = 0;
        ctx.font = '600 30px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = CARD_TEXT_COLOR;
        const rawDescription = sanitizeCardText(cardFields.description || '');
        const descriptionLines = rawDescription.split('\n');
        const payload = descriptionLines.some((line) => line.trim())
          ? descriptionLines
          : ['Аккуратен в деталях и доводит стрижку до идеала.'];
        ctx.textBaseline = 'top';
        payload.forEach((chunk) => {
          const wrapped = wrapTextLines(ctx, chunk, descWidth).slice(0, 6);
          if (!wrapped.length) {
            lineIndex += 1;
            return;
          }
          wrapped.forEach((line, localIndex) => {
            const y = descStartY + lineIndex * 38;
            const isFirstLine = localIndex === 0;
            if (isFirstLine) {
              ctx.beginPath();
              ctx.fillStyle = CARD_NAME_COLOR;
              ctx.arc(bulletX, y + 12, 7, 0, Math.PI * 2); // shift bullet left
              ctx.fill();
            }
            ctx.fillStyle = CARD_TEXT_COLOR;
            ctx.fillText(line, descX, y); // keep text position
            lineIndex += 1;
          });
        });
        const photoWidth = 380;
        const photoHeight = 470;
        const photoX = CARD_CANVAS_WIDTH * 0.18;
        const photoBaseY = 220;
        const photoY = photoBaseY - 30; // lift only the uploaded photo
        if (photoBg) {
          const bgWidth = photoWidth * 1.12;
          const bgHeight = photoHeight * 0.62;
          const bgX = photoX + (photoWidth - bgWidth) / 2 - 18;
          const bgY = photoBaseY + photoHeight - bgHeight + 28; // keep background in place
          drawCoverImage(ctx, photoBg, bgX, bgY, bgWidth, bgHeight);
        }
        if (profilePhoto) {
          const photoFilter = photoGrayscale ? 'grayscale(100%)' : 'saturate(1.05) contrast(1.05)';
          drawRoundedImage(ctx, profilePhoto, photoX, photoY, photoWidth, photoHeight, 38, photoFilter, photoOutlineEnabled
            ? {
                outlineColor: 'rgba(148, 163, 184, 0.95)',
                outlineSize: 10,
                outlineRoughness: 1.2,
              }
            : {});
        } else {
          ctx.save();
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          drawRoundedRectPath(ctx, photoX, photoY, photoWidth, photoHeight, 38);
          ctx.fill();
          ctx.restore();
        }
        const phraseLabel = 'Любимая фраза:';
        const phraseText = sanitizeCardText(cardFields.phrase || 'Комфорт клиента превыше всего');
        const phraseY = CARD_CANVAS_HEIGHT - 190; // adjust this to move the quote block
        const phraseBlockHeight = 160;
        if (phraseBg) {
          const phraseBgShift = 20; // slightly smaller background footprint
          const phraseBgYOffset = 10; // move background down a bit
          drawCoverImage(ctx, phraseBg, phraseBgX - 6 - phraseBgShift, phraseY - 2 + phraseBgYOffset, phraseWidth + 10 + phraseBgShift, phraseBlockHeight + 8);
        } else {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
          drawRoundedRectPath(ctx, phraseBgX, phraseY, phraseWidth, phraseBlockHeight, 18);
          ctx.fill();
        }
        ctx.font = '700 28px "Manrope", "Inter", sans-serif';
        const labelWidth = ctx.measureText(phraseLabel).width;
        const labelPaddingX = 14;
        const labelHeight = 40;
        const labelY = phraseY + 20;
        ctx.fillStyle = CARD_NAME_COLOR; // match name color for label background
        drawRoundedRectPath(ctx, phraseTextX + 12, labelY, labelWidth + labelPaddingX * 2, labelHeight, 16);
        ctx.fill();
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(phraseLabel, phraseTextX + 12 + labelPaddingX, labelY + 8);
        ctx.font = '800 30px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = '#0f172a'; // darker text for phrase
        wrapTextLines(ctx, phraseText, phraseWidth - 20)
          .slice(0, 3)
          .forEach((line, idx) => {
            ctx.fillText(line, phraseTextX + 16, phraseY + 70 + idx * 36); // move phrase text down
          });
        const previewUrl = canvasRef.current.toDataURL('image/jpeg', 0.94);
        if (!cancelled) {
          setCardPreview(previewUrl);
        }
      } catch (error) {
        if (!cancelled) {
          setRenderError(error.message || 'Не удалось сформировать превью карточки.');
        }
      } finally {
        if (!cancelled) {
          setRendering(false);
        }
      }
    };
    renderCard();
    return () => {
      cancelled = true;
    };
  }, [
    cardFields.name,
    cardFields.description,
    cardFields.phrase,
    cardPhoto,
    photoGrayscale,
    customCardImage,
    photoOutlineEnabled,
    selectedCardMode,
    cardImageUrl,
  ]);
  useEffect(() => {
    cardPreviewRef.current = cardPreview;
  }, [cardPreview]);
  const cardSaveHandler = useCallback(
    async (barberId) => {
      if (!barberId || !cardPreviewRef.current || typeof onCardUpload !== 'function') return null;
      const previewData = cardPreviewRef.current;
      if (lastSavedPreviewRef.current === previewData) return null;
      if (!previewData.startsWith('data:image')) {
        lastSavedPreviewRef.current = previewData;
        if (previewData) {
          onCardImageChange?.(previewData);
        }
        return { path: previewData };
      }
      const result = await onCardUpload({
        barberId,
        name: buildCardFileName(cardFields.name || 'barber-card'),
        data: previewData,
      });
      lastSavedPreviewRef.current = previewData;
      const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
      if (uploadedPath) {
        onCardImageChange?.(uploadedPath);
      }
      return result;
    },
    [onCardUpload, cardFields.name, onCardImageChange],
  );
  const handleCardModeSelect = useCallback(
    (mode) => {
      const normalized = normalizeCardMode(mode);
      setSelectedCardMode(normalized);
      onCardModeChange?.(normalized);
      if (normalized === CARD_MODE_GENERATED) {
        lastSavedPreviewRef.current = null;
      }
    },
    [onCardModeChange],
  );
  const handleResetDesign = useCallback(() => {
    setCustomCardImage('');
    onCardImageChange?.('');
    handleCardModeSelect(CARD_MODE_GENERATED);
    setCardPreview('');
    cardPreviewRef.current = '';
    lastSavedPreviewRef.current = null;
  }, [handleCardModeSelect, onCardImageChange]);
  useEffect(() => {
    if (typeof onRegisterCardSaver === 'function') {
      lastSavedPreviewRef.current = null;
      onRegisterCardSaver(cardSaveHandler);
    }
  }, [cardSaveHandler, onRegisterCardSaver]);
  const handleDownloadCard = useCallback(() => {
    if (!cardPreview) return;
    const link = document.createElement('a');
    link.href = cardPreview;
    link.download = buildCardFileName(cardFields.name || 'barber-card').replace(/\.jpg$/, '.png');
    link.click();
  }, [cardPreview, cardFields.name]);
  const handleCustomCardFile = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Можно загружать только изображения.');
        return;
      }
      try {
        const dataUrl = await readFileAsDataUrl(file);
        setCustomCardImage(dataUrl);
        setSelectedCardMode(CARD_MODE_CUSTOM_IMAGE);
        onCardModeChange?.(CARD_MODE_CUSTOM_IMAGE);
        onCardImageChange?.('');
        lastSavedPreviewRef.current = null;
        setRenderError('');
      } catch (error) {
        setRenderError(error.message || 'Не получилось прочитать файл карточки.');
      }
    },
    [onCardModeChange, onCardImageChange],
  );
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
      <input
        ref={photoInputRef}
        type="file"
        name="barberPhoto"
        aria-label="Фото барбера"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoFileChange}
      />
      <input
        ref={fileInputRef}
        type="file"
        name="avatarFile"
        aria-label="Импорт готовой карточки"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <input
        ref={customCardInputRef}
        type="file"
        name="customCard"
        aria-label="Готовая карточка"
        accept="image/*"
        className="hidden"
        onChange={handleCustomCardFile}
      />
      <div className="space-y-4 p-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Источник:</span>
              <button
                type="button"
                onClick={() => handleCardModeSelect(CARD_MODE_GENERATED)}
                className={classNames(
                  'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
                  isGeneratedMode
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-100'
                    : 'border-slate-700 text-slate-300 hover:border-slate-500',
                )}
              >
                Редактор
              </button>
              <button
                type="button"
                onClick={() => {
                  handleCardModeSelect(CARD_MODE_CUSTOM_IMAGE);
                  customCardInputRef.current?.click();
                }}
                className={classNames(
                  'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
                  isCustomMode
                    ? 'border-amber-400 bg-amber-500/10 text-amber-100'
                    : 'border-slate-700 text-slate-300 hover:border-slate-500',
                )}
              >
                Свое изобр.
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <canvas
              ref={canvasRef}
              className="block h-full w-full max-w-full bg-slate-900/60"
              style={{ aspectRatio: '16 / 9' }}
            />
            {!cardPreview && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 p-6 text-center text-sm text-slate-300">
                <p>Загрузите фото барбера и заполните поля — карточка соберется автоматически.</p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadCard}
                disabled={!cardPreview}
                className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
              >
                Скачать
              </button>
              {isCustomMode && (
                <button
                  type="button"
                  onClick={() => {
                    handleCardModeSelect(CARD_MODE_CUSTOM_IMAGE);
                    customCardInputRef.current?.click();
                  }}
                  className="rounded-2xl border border-emerald-500/70 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400 hover:text-white"
                >
                  +
                </button>
              )}
              {isCustomMode && (customCardImage || cardImageUrl) && (
                <button
                  type="button"
                  onClick={handleResetDesign}
                  className="rounded-2xl border border-slate-600 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-400"
                >
                  Вернуться к редактору
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setCardDetailsOpen((prev) => !prev)}
              className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-indigo-400 hover:text-white"
            >
              {cardDetailsOpen ? 'Скрыть' : 'Раскрыть'}
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 transition-all duration-200',
            cardDetailsOpen ? 'max-h-[2200px] opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
          )}
        >
          {cardDetailsOpen && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Имя сотрудника</label>
                <input
                  value={cardFields.name}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="BARBER"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Описание</label>
                <textarea
                  rows={4}
                  value={cardFields.description}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, description: event.target.value }))}
                  placeholder="Аккуратен в деталях и доводит стрижку до идеала"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <p className="text-xs text-slate-500">Каждая строка станет пунктом списка.</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Любимая фраза</label>
                <input
                  value={cardFields.phrase}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, phrase: event.target.value }))}
                  placeholder="Комфорт клиента превыше всего"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Фото барбера</p>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
                  <div className="h-16 w-16 overflow-hidden rounded-xl border border-slate-800 bg-slate-800">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Фото барбера" className="h-full w-full object-cover" />
                    ) : (
                      <DefaultProfileIcon className="h-full w-full bg-slate-900/60 text-slate-500" iconClassName="h-10 w-10" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-xs text-slate-400">
                      Портретное фото.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => photoInputRef.current?.click()}
                        className="rounded-xl border border-emerald-500/70 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:border-emerald-400 hover:text-white"
                      >
                        Загрузить фото
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhotoGrayscale((prev) => !prev)}
                        className={classNames(
                          'rounded-xl px-3 py-1.5 text-xs font-semibold transition',
                          photoGrayscale
                            ? 'border border-slate-600 bg-slate-800/70 text-slate-100 hover:border-slate-400'
                            : 'border border-emerald-500/70 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400 hover:text-white',
                        )}
                      >
                        {photoGrayscale ? 'Ч/Б эффект' : 'Цветное фото'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhotoOutlineEnabled((prev) => !prev)}
                        className={classNames(
                          'rounded-xl px-3 py-1.5 text-xs font-semibold transition',
                          photoOutlineEnabled
                            ? 'border border-slate-500 bg-slate-800/70 text-slate-100 hover:border-slate-300'
                            : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
                        )}
                      >
                        {photoOutlineEnabled ? 'С рамкой' : 'Без рамки'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowGallery((prev) => !prev)}
                        className="rounded-xl border border-slate-700 px-3 py-1.5 text-xs font-semibold text-indigo-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
                        disabled={loading || (!avatarOptions.length && !normalizedValue)}
                      >
                        {loading ? 'Загрузка...' : showGallery ? 'Скрыть галерею' : 'Показать галерею'}
                      </button>
                    </div>
                  </div>
                </div>
                {showGallery && availableOptions.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {availableOptions.map((preset) => {
                      const normalizedPreset = normalizeImagePath(preset);
                      const isSelected = normalizedPreset === normalizedValue;
                      return (
                        <button
                          type="button"
                          key={preset}
                          onClick={() => applyAvatarValue(normalizedPreset)}
                          className={classNames(
                            'group relative overflow-hidden rounded-2xl border p-1.5 transition hover:border-indigo-400 hover:bg-slate-800',
                            isSelected ? 'border-indigo-500 bg-indigo-500/15' : 'border-slate-700 bg-slate-900',
                          )}
                        >
                          <img src={resolveAssetUrl(normalizedPreset)} alt="card preset" className="h-20 w-full rounded-xl object-cover" />
                          {typeof onDelete === 'function' && (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                handleDeleteImage(normalizedPreset);
                              }}
                              className="absolute right-1 top-1 rounded-full bg-slate-900/70 p-1 text-slate-200 opacity-0 transition hover:bg-rose-600/80 hover:text-white group-hover:opacity-100 disabled:cursor-not-allowed"
                              disabled={actionBusy}
                            >
                              <IconTrash className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                {!avatarOptions.length && !loading && (
                  <p className="text-sm text-slate-500">Карточек пока нет. Сохраните одну, чтобы увидеть здесь.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const DAY_INDEX_LOOKUP = (() => {
  const full = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  const short = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const map = {};
  full.forEach((name, index) => {
    map[name] = index;
  });
  short.forEach((name, index) => {
    map[name] = index;
  });
  return map;
})();
const getDayIndex = (value = '') => {
  const normalized = normalizeText(value).toLowerCase();
  return Number.isFinite(DAY_INDEX_LOOKUP[normalized]) ? DAY_INDEX_LOOKUP[normalized] : 7;
};
const formatScheduleDayShort = (dateValue, fallbackDay = '') => {
  const safeDate = normalizeText(dateValue);
  if (safeDate) {
    try {
      const parsed = new Date(`${safeDate}T00:00:00`);
      if (!Number.isNaN(parsed.getTime())) {
        return new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(parsed).replace('.', '');
      }
    } catch {
      // noop
    }
  }
  const normalizedFallback = normalizeText(fallbackDay);
  return normalizedFallback ? normalizedFallback.slice(0, 2) : '';
};
const formatScheduleDateLabel = (dateValue) => {
  const safeDate = normalizeText(dateValue);
  if (!safeDate) return '';
  try {
    const parsed = new Date(`${safeDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return '';
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(parsed).replace('.', '');
  } catch {
    return '';
  }
};
const isTodayDate = (dateValue) => {
  const safeDate = normalizeText(dateValue);
  if (!safeDate) return false;
  const today = new Date();
  const target = new Date(`${safeDate}T00:00:00`);
  if (Number.isNaN(target.getTime())) return false;
  return (
    today.getFullYear() === target.getFullYear() &&
    today.getMonth() === target.getMonth() &&
    today.getDate() === target.getDate()
  );
};
const parseSlotTimeMinutes = (value) => {
  const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return 0;
  return Number(match[1]) * 60 + Number(match[2]);
};
const getScheduleSortValue = (slot) => {
  const safeDate = normalizeText(slot.Date);
  if (safeDate) {
    const parsed = new Date(`${safeDate}T00:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.getTime() + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start) * 60000;
    }
  }
  const base = Number.MAX_SAFE_INTEGER - 1_000_000_000;
  const dayIndex = getDayIndex(slot.DayOfWeek);
  return base + dayIndex * 10000 + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start || slot.Week) * 10;
};
const RatingSlider = ({ value, onChange, dense = false, disabled = false }) => {
  const ratingValue = clampRatingValue(value ?? RATING_MAX);
  const sliderId = useMemo(() => `rating-slider-${Math.random().toString(36).slice(2, 8)}`, []);
  const wrapperClass = dense
    ? 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5'
    : 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2';
  const labelClass = dense
    ? 'flex items-center justify-between text-xs text-slate-300'
    : 'flex items-center justify-between text-sm text-slate-300';
  return (
    <div className={classNames(wrapperClass, disabled ? 'opacity-60' : '')}>
      <label className={labelClass} htmlFor={sliderId}>
        <span>Рейтинг</span>
        <span className="font-semibold text-white">{ratingValue}</span>
      </label>
      <input
        id={sliderId}
        name="rating"
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        step={RATING_STEP}
        value={ratingValue}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        aria-label="Рейтинг"
        className={classNames('w-full accent-indigo-500', disabled ? 'cursor-not-allowed' : '')}
      />
    </div>
  );
};
const BarbersView = ({
  barbers = [],
  positions = [],
  loadAvatarOptions,
  uploadAvatar,
  uploadCard,
  deleteAvatar,
  onFieldChange,
  onSave,
  onAdd,
  onDelete,
}) => {
  const [editorState, setEditorState] = useState({ open: false, mode: 'edit', targetId: null });
  const [draftBarber, setDraftBarber] = useState(buildNewBarberState);
  const openEditor = (mode, targetId = null) => {
    if (mode === 'create') {
      setDraftBarber(buildNewBarberState());
    }
    setEditorState({ open: true, mode, targetId });
  };
  const closeEditor = () => setEditorState({ open: false, mode: 'edit', targetId: null });
  const isCreateMode = editorState.mode === 'create';
  const activeBarber = barbers.find((barber) => barber.id === editorState.targetId) || null;
  const workingBarber = isCreateMode ? draftBarber : activeBarber;
  const [pendingAvatar, setPendingAvatar] = useState('');
  const cardSaverRef = useRef(null);
  const [savingBarber, setSavingBarber] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions].sort((a, b) => {
      const leftOrder = Number(a?.orderIndex) || 0;
      const rightOrder = Number(b?.orderIndex) || 0;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
    });
  }, [positions]);
  const activePosition = useMemo(
    () => sortedPositions.find((item) => item.id === workingBarber?.positionId) || null,
    [sortedPositions, workingBarber?.positionId]
  );
  const avatarSyncRef = useRef({ id: null, avatar: '' });
  useEffect(() => {
    if (!editorState.open) {
      setPendingAvatar('');
      cardSaverRef.current = null;
      avatarSyncRef.current = { id: null, avatar: '' };
      return;
    }
    if (isCreateMode) {
      const next = draftBarber.avatarUrl || '';
      avatarSyncRef.current = { id: 'create', avatar: next };
      setPendingAvatar(next);
      return;
    }
    const targetId = activeBarber?.id || null;
    const nextAvatar = activeBarber?.avatarUrl || '';
    const { id: syncedId, avatar: syncedAvatar } = avatarSyncRef.current;
    const normalizedNext = normalizeImagePath(nextAvatar);
    const normalizedSynced = normalizeImagePath(syncedAvatar || '');
    const barberChanged = syncedId !== targetId;
    const avatarChanged = normalizedNext !== normalizedSynced;
    if (!barberChanged && !avatarChanged) return;
    setPendingAvatar((prev) => {
      const normalizedPrev = normalizeImagePath(prev || '');
      const allowSync = barberChanged || (avatarChanged && normalizedPrev === normalizedSynced);
      if (!allowSync) return prev;
      avatarSyncRef.current = { id: targetId, avatar: nextAvatar };
      return nextAvatar;
    });
  }, [editorState.open, isCreateMode, draftBarber.avatarUrl, activeBarber?.id, activeBarber?.avatarUrl]);
  useEffect(() => {
    setShowPassword(false);
  }, [editorState.open, editorState.mode, editorState.targetId]);
  const handleFieldChange = (field, value) => {
    const nextValue = field === 'rating' ? formatRatingValue(value) : value;
    if (field === 'avatarUrl') {
      const normalized = nextValue || '';
      setPendingAvatar(normalized);
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, avatarUrl: normalized }));
      }
      return;
    }
    if (isCreateMode) {
      setDraftBarber((prev) => ({ ...prev, [field]: nextValue }));
    } else if (activeBarber) {
      onFieldChange?.(activeBarber.id, field, nextValue);
    }
  };
  const handlePhoneChange = (rawValue) => {
    const digits = (rawValue || '').replace(/\D/g, '');
    const formatted = digits ? formatPhoneDisplay(rawValue) : '';
    handleFieldChange('phone', formatted);
  };
  const registerCardSaver = useCallback((fn) => {
    cardSaverRef.current = typeof fn === 'function' ? fn : null;
  }, []);
  const handleAvatarChange = useCallback(
    (value) => {
      handleFieldChange('avatarUrl', value);
    },
    [handleFieldChange]
  );
  const handleCardFieldsChange = useCallback(
    (fields) => {
      if (!fields) return;
      const nextFields = {
        cardTitle: fields.cardTitle ?? fields.name ?? '',
        cardDescription: fields.cardDescription ?? fields.description ?? '',
        cardPhrase: fields.cardPhrase ?? fields.phrase ?? '',
        cardPhotoGrayscale: fields.cardPhotoGrayscale !== false,
        cardPhotoOutline: fields.cardPhotoOutline !== false,
      };
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, ...nextFields }));
      } else if (activeBarber) {
        Object.entries(nextFields).forEach(([key, value]) => onFieldChange?.(activeBarber.id, key, value));
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleCardModeChange = useCallback(
    (mode) => {
      const normalized = normalizeCardMode(mode);
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, cardMode: normalized }));
      } else if (activeBarber) {
        onFieldChange?.(activeBarber.id, 'cardMode', normalized);
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleCardImageChange = useCallback(
    (path) => {
      const normalized = normalizeImagePath(path || '');
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, cardImageUrl: normalized }));
      } else if (activeBarber) {
        onFieldChange?.(activeBarber.id, 'cardImageUrl', normalized);
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleSave = async () => {
    if (!workingBarber) return;
    setSavingBarber(true);
    try {
      let savedRecord = null;
      if (isCreateMode) {
        savedRecord = (await onAdd?.({ ...draftBarber, avatarUrl: pendingAvatar || '' })) || null;
        setDraftBarber(buildNewBarberState());
      } else if (activeBarber) {
        const nextBarber = pendingAvatar !== undefined ? { ...activeBarber, avatarUrl: pendingAvatar || '' } : activeBarber;
        savedRecord = (await onSave?.(nextBarber)) || nextBarber;
      }
      const targetBarber = savedRecord || (!isCreateMode ? activeBarber : null);
      if (cardSaverRef.current && targetBarber?.id) {
        try {
          await cardSaverRef.current(targetBarber.id);
        } catch (error) {
          console.error('Card upload failed:', error);
        }
      }
      closeEditor();
    } catch (error) {
      console.error('Barber save failed:', error);
    } finally {
      setSavingBarber(false);
    }
  };
  const handleDelete = () => {
    if (!isCreateMode && activeBarber) {
      const result = onDelete?.(activeBarber);
      if (result && typeof result.finally === 'function') {
        result.finally(() => closeEditor());
      } else {
        closeEditor();
      }
    }
  };
  const renderStatusBadge = (barber) =>
    barber ? (
      <span
        className={classNames(
          'rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
          barber.isActive !== false ? 'bg-emerald-500/15 text-emerald-200' : 'bg-slate-700 text-slate-300'
        )}
      >
        {barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}
      </span>
    ) : null;
  const canSubmit = isCreateMode ? Boolean(workingBarber?.name?.trim() && workingBarber?.password?.trim()) : Boolean(workingBarber);
  return (
    <div className="space-y-6 overflow-x-hidden">
      <SectionCard
        title="Барберы"
        actions={
          <button
            onClick={() => openEditor('create')}
            className="rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
          >
            + Добавить барбера
          </button>
        }
      >
        {barbers.length === 0 ? (
          <p className="text-slate-400">Список барберов пока пуст. Добавьте первого сотрудника.</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {barbers.map((barber) => {
              const avatarSrc = resolveAssetUrl(barber.avatarUrl);
              const phoneLabel = barber.phone ? formatPhoneInput(barber.phone) : '';
              const ratingLabel = clampRatingValue(barber.rating || RATING_MAX);
              const positionName = normalizeText(barber.position?.name);
              const commissionRate =
                typeof barber.position?.commissionRate === 'number' ? barber.position.commissionRate : null;
              const commissionLabel = commissionRate !== null ? formatPercent(commissionRate) : null;
              return (
                <button
                  key={barber.id}
                  onClick={() => openEditor('edit', barber.id)}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <div className="relative h-16 w-16 flex-shrink-0">
                    {avatarSrc ? (
                      <img src={avatarSrc} alt={barber.name || 'avatar'} className="h-16 w-16 rounded-2xl object-cover" />
                    ) : (
                      <DefaultProfileIcon className="h-16 w-16 rounded-2xl border border-slate-700/70 text-slate-400" iconClassName="h-8 w-8" />
                    )}
                    <span
                      className={classNames(
                        'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900',
                        barber.isActive !== false ? 'bg-emerald-400' : 'bg-slate-600'
                      )}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold text-white sm:text-lg">{barber.name || 'Без имени'}</p>
                      {renderStatusBadge(barber)}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 sm:text-sm">
                      <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-200">
                        ? {ratingLabel}
                      </span>
                      {positionName && (
                        <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                          {positionName}
                          {commissionLabel ? ` · ${commissionLabel}` : ''}
                        </span>
                      )}
                      {phoneLabel && <span className="text-slate-300">{phoneLabel}</span>}
                      {barber.telegramId && <span className="text-slate-400">@{barber.telegramId}</span>}
                    </div>
                    {barber.description && <p className="text-sm text-slate-400">{barber.description}</p>}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </SectionCard>
      <Modal
        title={isCreateMode ? 'Добавить барбера' : workingBarber?.name || 'Редактирование барбера'}
        isOpen={editorState.open}
        onClose={closeEditor}
        maxWidthClass="max-w-4xl"
        footer={
          <>
            {!isCreateMode && (
              <button onClick={handleDelete} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10">
                Удалить
              </button>
            )}
            <button onClick={closeEditor} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
              Отмена
            </button>
            <button
              onClick={handleSave}
              disabled={!canSubmit || savingBarber}
              className={classNames(
                'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                canSubmit && !savingBarber ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300'
              )}
            >
              {savingBarber ? 'Сохранение...' : isCreateMode ? 'Добавить' : 'Сохранить'}
            </button>
          </>
        }
      >
        {workingBarber ? (
          <div className="space-y-6">
            <BarberAvatarPicker
              value={pendingAvatar || ''}
              onChange={handleAvatarChange}
              loadOptions={loadAvatarOptions}
              onUpload={uploadAvatar}
              onCardUpload={uploadCard}
              onDelete={deleteAvatar}
              onRegisterCardSaver={registerCardSaver}
              initialName={workingBarber?.name || ''}
              initialDescription={workingBarber?.description || ''}
              initialCardTitle={workingBarber?.cardTitle || workingBarber?.name || ''}
              initialCardDescription={workingBarber?.cardDescription || workingBarber?.description || ''}
              initialCardPhrase={workingBarber?.cardPhrase || ''}
              initialPhotoGrayscale={workingBarber?.cardPhotoGrayscale !== false}
              initialPhotoOutline={workingBarber?.cardPhotoOutline !== false}
              cardMode={workingBarber?.cardMode || CARD_MODE_GENERATED}
              cardImageUrl={workingBarber?.cardImageUrl || ''}
              onCardFieldsChange={handleCardFieldsChange}
              onCardModeChange={handleCardModeChange}
              onCardImageChange={handleCardImageChange}
            />
            <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-inner shadow-black/10">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="barberName"
                  aria-label="Имя"
                  value={workingBarber.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Имя"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <div className="w-full">
                  <RatingSlider dense value={workingBarber.rating} onChange={(event) => handleFieldChange('rating', event.target.value)} />
                </div>
                <div className="relative w-full">
                  <input
                    name="barberPassword"
                    aria-label="Пароль"
                    type={showPassword ? 'text' : 'password'}
                    value={workingBarber.password || ""}
                    onChange={(event) => handleFieldChange('password', event.target.value)}
                    placeholder="Пароль"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 pr-12 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-md p-0 text-slate-300 leading-none hover:text-white"
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleFieldChange('isActive', !(workingBarber.isActive !== false))}
                  className={classNames(
                    'flex h-[52px] items-center justify-between rounded-2xl border px-4 text-sm font-semibold transition',
                    workingBarber.isActive !== false
                      ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                      : 'border-slate-700 bg-slate-900/60 text-slate-400'
                  )}
                >
                  <span>{workingBarber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                  <span
                    className={classNames(
                      'flex h-5 w-5 items-center justify-center rounded-full border',
                      workingBarber.isActive !== false
                        ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100'
                        : 'border-slate-600 text-slate-500'
                    )}
                  >
                    {workingBarber.isActive !== false ? '\u2713' : '\u2715'}
                  </span>
                </button>
                <div className="col-span-2 grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Права доступа</label>
                    <select
                      value={normalizeRoleValue(workingBarber.role)}
                      onChange={(event) => handleFieldChange('role', normalizeRoleValue(event.target.value))}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
                    >
                      {ROLE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Должность</label>
                    <select
                      value={workingBarber.positionId || ''}
                      onChange={(event) => handleFieldChange('positionId', event.target.value || null)}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
                    >
                      <option value="">Без должности</option>
                      {sortedPositions.map((position) => (
                        <option key={position.id} value={position.id}>
                          {position.name}
                          {typeof position.commissionRate === 'number' ? ` · ${formatPercent(position.commissionRate)}` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <textarea
                  value={workingBarber.description || ''}
                  onChange={(event) => handleFieldChange('description', event.target.value)}
                  placeholder="Описание"
                  rows={4}
                  className="col-span-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <input
                  name="barberPhone"
                  aria-label="Телефон"
                  type="tel"
                  value={formatPhoneDisplay(workingBarber.phone || '')}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  placeholder="Телефон"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <input
                  name="barberTelegram"
                  aria-label="Telegram ID"
                  value={workingBarber.telegramId || ''}
                  onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                  placeholder="Telegram ID"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-300">Выберите барбера, чтобы отредактировать данные.</p>
        )}
      </Modal>
    </div>
  );
};
const BarberProfileView = ({
  barber = null,
  loadAvatarOptions,
  uploadAvatar,
  deleteAvatar,
  onFieldChange,
  onSave,
  allowRatingEdit = false,
}) => {
  const [pendingAvatar, setPendingAvatar] = useState(barber?.avatarUrl || "");
  const [showPassword, setShowPassword] = useState(false);
  const profileSnapshot = useMemo(
    () => (barber ? JSON.stringify({ ...barber, avatarUrl: pendingAvatar || '' }) : null),
    [barber, pendingAvatar],
  );
  const savedSnapshotRef = useRef(null);
  const saveResetRef = useRef(null);
  const [saveState, setSaveState] = useState('idle');
  useEffect(() => {
    setPendingAvatar(barber?.avatarUrl || '');
  }, [barber?.avatarUrl]);
  useEffect(() => {
    setShowPassword(false);
  }, [barber?.id]);
  useEffect(() => {
    savedSnapshotRef.current = null;
    setSaveState('idle');
  }, [barber?.id]);
  useEffect(() => {
    // once snapshot готов, фиксируем как baseline
    if (!barber || !profileSnapshot || savedSnapshotRef.current) return;
    savedSnapshotRef.current = profileSnapshot;
  }, [barber, profileSnapshot]);
  useEffect(
    () => () => {
      if (saveResetRef.current) {
        clearTimeout(saveResetRef.current);
        saveResetRef.current = null;
      }
    },
    [],
  );
  if (!barber) {
    return (
      <SectionCard title="Профиль сотрудника">
        <p className="text-sm text-slate-400">Данные профиля недоступны. Обратитесь к администратору.</p>
      </SectionCard>
    );
  }
  const handleFieldChange = (field, value) => {
    if (field === 'rating' && !allowRatingEdit) {
      return;
    }
    const nextValue = field === 'rating' ? formatRatingValue(value) : value;
    onFieldChange?.(barber.id, field, nextValue);
  };
  const handlePhoneChange = (rawValue) => {
    const digits = (rawValue || '').replace(/\D/g, '');
    const formatted = digits ? formatPhoneDisplay(rawValue) : '';
    handleFieldChange('phone', formatted);
  };
  const hasChanges = Boolean(profileSnapshot && savedSnapshotRef.current && profileSnapshot !== savedSnapshotRef.current);
  const handleSaveProfile = async () => {
    if (!barber || typeof onSave !== 'function' || saveState === 'saving' || !profileSnapshot) return;
    setSaveState('saving');
    if (saveResetRef.current) {
      clearTimeout(saveResetRef.current);
      saveResetRef.current = null;
    }
    try {
      await onSave({ ...barber, avatarUrl: pendingAvatar || '' });
      savedSnapshotRef.current = profileSnapshot;
      setSaveState('saved');
      saveResetRef.current = setTimeout(() => setSaveState('idle'), 2000);
    } catch (error) {
      console.error('Barber profile save error:', error);
      setSaveState('error');
      saveResetRef.current = setTimeout(() => setSaveState('idle'), 3000);
    }
  };
  return (
    <div className="space-y-6">
      <SectionCard title="Мой профиль">
        <div className="space-y-6">
          <BarberAvatarPicker
            value={pendingAvatar || ''}
            onChange={setPendingAvatar}
            loadOptions={loadAvatarOptions}
            onUpload={uploadAvatar}
            onDelete={deleteAvatar}
            initialName={barber?.name || ''}
            initialDescription={barber?.description || ''}
            initialCardTitle={barber?.cardTitle || barber?.name || ''}
            initialCardDescription={barber?.cardDescription || barber?.description || ''}
            initialCardPhrase={barber?.cardPhrase || ''}
            initialPhotoGrayscale={barber?.cardPhotoGrayscale !== false}
            initialPhotoOutline={barber?.cardPhotoOutline !== false}
            cardMode={barber?.cardMode || CARD_MODE_GENERATED}
            cardImageUrl={barber?.cardImageUrl || ''}
            onCardFieldsChange={(fields) => {
              if (!fields || !barber?.id) return;
              onFieldChange?.(barber.id, 'cardTitle', fields.cardTitle ?? fields.name ?? '');
              onFieldChange?.(barber.id, 'cardDescription', fields.cardDescription ?? fields.description ?? '');
              onFieldChange?.(barber.id, 'cardPhrase', fields.cardPhrase ?? fields.phrase ?? '');
              onFieldChange?.(barber.id, 'cardPhotoGrayscale', fields.cardPhotoGrayscale !== false);
              onFieldChange?.(barber.id, 'cardPhotoOutline', fields.cardPhotoOutline !== false);
            }}
            onCardModeChange={(mode) => handleFieldChange('cardMode', normalizeCardMode(mode))}
            onCardImageChange={(path) => handleFieldChange('cardImageUrl', normalizeImagePath(path || ''))}
          />
          <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-inner shadow-black/10">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="barberName"
                aria-label="Имя"
                value={barber.name || ''}
                onChange={(event) => handleFieldChange('name', event.target.value)}
                placeholder="Имя"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <div className="w-full">
                <RatingSlider
                  dense
                  value={barber.rating}
                  onChange={allowRatingEdit ? (event) => handleFieldChange('rating', event.target.value) : undefined}
                  disabled={!allowRatingEdit}
                />
              </div>
              <div className="relative w-full">
                <input
                  name="barberPassword"
                  aria-label="Пароль"
                  type={showPassword ? 'text' : 'password'}
                  value={barber.password || ""}
                  onChange={(event) => handleFieldChange('password', event.target.value)}
                  placeholder="Пароль"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 pr-12 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-md p-0 text-slate-300 leading-none hover:text-white"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleFieldChange('isActive', !(barber.isActive !== false))}
                className={classNames(
                  'flex h-[52px] items-center justify-between rounded-2xl border px-4 text-sm font-semibold transition',
                  barber.isActive !== false
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                    : 'border-slate-700 bg-slate-900/60 text-slate-400'
                )}
              >
                <span>{barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                <span
                  className={classNames(
                    'flex h-5 w-5 items-center justify-center rounded-full border',
                    barber.isActive !== false
                      ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100'
                      : 'border-slate-600 text-slate-500'
                  )}
                >
                  {barber.isActive !== false ? '\u2713' : '\u2715'}
                </span>
              </button>
              <div className="col-span-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3">
                <p className="text-sm text-slate-300">Должность</p>
                <p className="text-base font-semibold text-white">{normalizeText(barber.position?.name) || 'Не назначена'}</p>
                {typeof barber.position?.commissionRate === 'number'}
              </div>
              <textarea
                value={barber.description || ''}
                onChange={(event) => handleFieldChange('description', event.target.value)}
                placeholder="Описание"
                rows={4}
                className="col-span-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <input
                name="barberPhone"
                aria-label="Телефон"
                type="tel"
                value={formatPhoneDisplay(barber.phone || '')}
                onChange={(event) => handlePhoneChange(event.target.value)}
                placeholder="Телефон"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <input
                name="barberTelegram"
                aria-label="Telegram"
                value={barber.telegramId || ''}
                onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                placeholder="Telegram"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span>
                {saveState === 'saving'
                  ? 'Сохраняем изменения...'
                  : saveState === 'error'
                    ? 'Не удалось сохранить изменения'
                    : saveState === 'saved'
                      ? 'Сохранено'
                      : hasChanges
                        ? 'Есть несохраненные изменения'
                        : 'Изменений нет'}
              </span>
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={!hasChanges || saveState === 'saving'}
                className="rounded-lg border border-slate-600 px-4 py-2 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500 hover:border-emerald-400 hover:text-emerald-50"
              >
                {saveState === 'saving' ? 'Сохраняю...' : 'Сохранить'}
              </button>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};
const ServicesView = ({
  services = [],
  barbers = [],
  onFieldChange,
  onPriceChange,
  onDelete,
  onAdd,
  role = ROLE_OWNER,
}) => {
  const [editorState, setEditorState] = useState({ open: false, mode: 'edit', targetId: null });
  const [draftService, setDraftService] = useState(buildNewServiceState);
  const isStaffMode = role === ROLE_STAFF;
  const canManageCatalog = !isStaffMode;
  const openEditor = (mode, targetId = null) => {
    if (mode === 'create' && !canManageCatalog) return;
    if (mode === 'create') {
      setDraftService(buildNewServiceState());
    }
    setEditorState({ open: true, mode, targetId });
  };
  const closeEditor = () => setEditorState({ open: false, mode: 'edit', targetId: null });
  const isCreateMode = editorState.mode === 'create';
  const activeService = services.find((service) => service.id === editorState.targetId) || null;
  const workingService = isCreateMode ? draftService : activeService;
  const handleFieldChange = (field, value) => {
    if (!canManageCatalog && !isCreateMode) return;
    if (isCreateMode) {
      setDraftService((prev) => ({ ...prev, [field]: value }));
    } else if (activeService) {
      onFieldChange?.(activeService.id, field, value);
    }
  };
  const handlePriceChange = (barberId, value) => {
    if (isCreateMode) {
      setDraftService((prev) => ({
        ...prev,
        prices: { ...(prev.prices || {}), [barberId]: value },
      }));
    } else if (activeService) {
      onPriceChange?.(activeService.id, barberId, value);
    }
  };
  const handleSave = () => {
    if (!canManageCatalog && !isCreateMode) {
      closeEditor();
      return;
    }
    if (isCreateMode) {
      if (!workingService?.name?.trim()) return;
      onAdd?.(draftService);
      setDraftService(buildNewServiceState());
    }
    closeEditor();
  };
  const handleDeleteLocal = () => {
    if (!canManageCatalog || isCreateMode) return;
    if (activeService) {
      const result = onDelete?.(activeService);
      if (result && typeof result.finally === 'function') {
        result.finally(() => closeEditor());
      } else {
        closeEditor();
      }
    }
  };
  const servicePriceSummary = (service) => {
    if (!service) {
      return { label: '—', details: '' };
    }
    const values = barbers
      .map((barber) => Number(service.prices?.[barber.id]))
      .filter((price) => Number.isFinite(price) && price >= 0);
    if (!values.length) {
      return {
        label: 'Цены не заданы',
        details: barbers.length ? 'Нажмите, чтобы добавить' : 'Нет мастеров для назначения',
      };
    }
    const min = Math.min(...values);
    const max = Math.max(...values);
    const count = values.length;
    return {
      label: min === max ? formatCurrency(min) : `${formatCurrency(min)} – ${formatCurrency(max)}`,
      details: `Для ${count} ${pluralize(count, ['барбера', 'барбера', 'барберов'])}`,
    };
  };
  const canSubmit = isCreateMode ? Boolean(workingService?.name?.trim()) : true;
  return (
    <div className="space-y-6">
      <SectionCard
        title="Услуги"
        actions={
          canManageCatalog ? (
            <button
              onClick={() => openEditor('create')}
              className="rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
            >
              + Добавить услугу
            </button>
          ) : null
        }
      >
        {services.length === 0 ? (
          <p className="text-slate-400">
            {canManageCatalog ? 'Список услуг пуст. Добавьте первую услугу.' : 'Каталог услуг пока недоступен.'}
          </p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {services.map((service) => {
              const summary = servicePriceSummary(service);
              const isActiveService = service.isActive !== false;
              return (
                <button
                  key={service.id}
                  onClick={() => openEditor('edit', service.id)}
                  className={classNames(
                    'group flex w-full flex-col gap-3 rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    isActiveService
                      ? 'border-slate-700/70 bg-slate-900/50 hover:border-indigo-500/70 hover:bg-slate-900'
                      : 'border-slate-800 bg-slate-900/30 opacity-80 hover:border-amber-400/60'
                  )}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <p
                      className={classNames(
                        'text-base font-semibold sm:text-lg',
                        isActiveService ? 'text-white' : 'text-slate-400'
                      )}
                    >
                      {service.name || 'Без названия'}
                    </p>
                    <div className="flex w-full flex-wrap items-center gap-2 text-sm sm:w-auto sm:justify-end">
                      <span
                        className={classNames(
                          'rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
                          isActiveService ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200' : 'border-slate-600 bg-slate-900/60 text-slate-400'
                        )}
                      >
                        {isActiveService ? 'Активна' : 'Скрыта'}
                      </span>
                      <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300">
                        {service.duration ? `${service.duration} мин` : '—'}
                      </span>
                    </div>
                  </div>
                  <div className={classNames('text-sm', isActiveService ? 'text-slate-100' : 'text-slate-500')}>{summary.label}</div>
                  <p className={classNames('text-xs', isActiveService ? 'text-slate-400' : 'text-slate-500')}>{summary.details}</p>
                </button>
              );
            })}
          </div>
        )}
      </SectionCard>
      <Modal
        title={isCreateMode ? 'Новая услуга' : workingService?.name || 'Редактирование услуги'}
        isOpen={editorState.open}
        onClose={closeEditor}
        maxWidthClass="max-w-3xl"
        footer={
          <>
            {!isCreateMode && canManageCatalog && (
              <button onClick={handleDeleteLocal} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10">
                Удалить
              </button>
            )}
            <button onClick={closeEditor} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
              Отмена
            </button>
            <button
              onClick={handleSave}
              disabled={!canSubmit}
              className={classNames(
                'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                canSubmit ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300'
              )}
            >
              {isCreateMode ? 'Добавить' : isStaffMode ? 'Закрыть' : 'Готово'}
            </button>
          </>
        }
      >
        {workingService ? (
                  <div className="space-y-4 w-full">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-sm text-slate-300">Название</label>
                <input
                  name="serviceName"
                  aria-label="Название услуги"
                  value={workingService.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Например, стрижка"
                  disabled={!canManageCatalog}
                  className={classNames(
                    'rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white',
                    !canManageCatalog && 'cursor-not-allowed opacity-70'
                  )}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm text-slate-300">Длительность, мин</label>
                <input
                  name="serviceDuration"
                  aria-label="Длительность услуги"
                  type="number"
                  min={5}
                  step={5}
                  value={workingService.duration ?? ''}
                  onChange={(event) =>
                    handleFieldChange('duration', event.target.value === '' ? '' : Number(event.target.value))
                  }
                  disabled={!canManageCatalog}
                  className={classNames(
                    'rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white',
                    !canManageCatalog && 'cursor-not-allowed opacity-70'
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {canManageCatalog ? (
                <button
                  type="button"
                  onClick={() => handleFieldChange('isActive', !(workingService.isActive !== false))}
                  className={classNames(
                    'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition',
                    workingService.isActive !== false ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-900/60 text-slate-400'
                  )}
                >
                  <span>{workingService.isActive !== false ? ACTIVE_SERVICE_LABEL : HIDDEN_SERVICE_LABEL}</span>
                  <span
                    className={classNames(
                      'flex h-5 w-5 items-center justify-center rounded-full border',
                      workingService.isActive !== false ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100' : 'border-slate-600 text-slate-500'
                    )}
                  >
                    {workingService.isActive !== false ? '\u2713' : ''}
                  </span>
                </button>
              ) : (
                <div
                  className={classNames(
                    'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold',
                    workingService.isActive !== false ? 'border-emerald-400/60 text-emerald-200' : 'border-slate-700 text-slate-400'
                  )}
                >
                  <span>{workingService.isActive !== false ? ACTIVE_SERVICE_LABEL : HIDDEN_SERVICE_LABEL}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Цены по барберам</p>
              {isStaffMode && (
                <p className="text-xs text-slate-500">Вы можете редактировать только свою стоимость.</p>
              )}
              {barbers.length ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {barbers.map((barber) => (
                    <label key={barber.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-white">
                      <span className="truncate">{barber.name || 'Без имени'}</span>
                      <input
                        name={`servicePrice-${barber.id}`}
                        aria-label={`Цена для ${barber.name || 'барбера'}`}
                        type="number"
                        min={0}
                        value={workingService.prices?.[barber.id] ?? ''}
                        onChange={(event) => handlePriceChange(barber.id, event.target.value)}
                        className="w-28 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-right text-sm text-white"
                        placeholder="0"
                      />
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  {isStaffMode ? 'Ваш профиль не привязан к барберу. Обратитесь к администратору.' : 'Добавьте барберов, чтобы назначать цены.'}
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-slate-300">Выберите услугу для редактирования.</p>
        )}
      </Modal>
    </div>
  );
};
const parseScheduleDate = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) return null;
  const parsed = new Date(`${normalized}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const resolveWeekBucket = (dateValue) => {
  const parsed = parseScheduleDate(dateValue);
  if (!parsed) return null;
  const start = new Date(parsed);
  const offset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - offset);
  return { key: getLocalISODateString(start), start };
};
const formatWeekRangeLabel = (startDate) => {
  const formatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' });
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  const startLabel = formatter.format(startDate).replace('.', '');
  const endLabel = formatter.format(endDate).replace('.', '');
  return `${startLabel} – ${endLabel}`;
};
const groupSchedulesByWeek = (slots = []) => {
  const buckets = new Map();
  slots.forEach((slot) => {
    const bucket = resolveWeekBucket(slot.Date);
    if (!bucket) return;
    const current = buckets.get(bucket.key) || { key: bucket.key, start: bucket.start, slots: [] };
    current.slots.push(slot);
    buckets.set(bucket.key, current);
  });
  return Array.from(buckets.values()).sort((a, b) => a.start.getTime() - b.start.getTime());
};
const SchedulesView = ({ schedules = [], barbers = [], currentUser = null, onScheduleUpdate }) => {
  const isStaffUser = currentUser?.role === ROLE_STAFF;
  const normalizedUserKey = useMemo(() => {
    const baseName = canonicalizeName(
      currentUser?.barberName || currentUser?.displayName || currentUser?.username || '',
    );
    return baseName.toLowerCase();
  }, [currentUser?.barberName, currentUser?.displayName, currentUser?.username]);
  const defaultBarberFilter = useMemo(() => {
    if (!normalizedUserKey) return 'all';
    const match = barbers.find(
      (barber) => canonicalizeName(barber.name || '').toLowerCase() === normalizedUserKey,
    );
    return match?.name || 'all';
  }, [barbers, normalizedUserKey]);
  const [barberFilter, setBarberFilter] = useState(defaultBarberFilter);
  useEffect(() => {
    setBarberFilter(defaultBarberFilter);
  }, [defaultBarberFilter]);
  const normalizedSchedules = Array.isArray(schedules) ? schedules : [];
  const staffPreferredBarber = useMemo(() => {
    if (!isStaffUser) return null;
    if (defaultBarberFilter && defaultBarberFilter !== 'all') return defaultBarberFilter;
    const fallback = normalizeText(
      currentUser?.barberName || currentUser?.displayName || currentUser?.username || '',
    );
    return fallback || null;
  }, [
    isStaffUser,
    defaultBarberFilter,
    currentUser?.barberName,
    currentUser?.displayName,
    currentUser?.username,
  ]);
  const staffDisplayName =
    staffPreferredBarber ||
    normalizeText(currentUser?.barberName || currentUser?.displayName || currentUser?.username || '') ||
    '—';
  const activeBarberFilter = useMemo(
    () => (isStaffUser ? staffPreferredBarber || defaultBarberFilter || 'all' : barberFilter),
    [isStaffUser, staffPreferredBarber, defaultBarberFilter, barberFilter],
  );
  const filteredSchedules = useMemo(() => {
    if (!activeBarberFilter || activeBarberFilter === 'all') return normalizedSchedules;
    const target = normalizeText(activeBarberFilter).toLowerCase();
    return normalizedSchedules.filter((slot) => normalizeText(slot.Barber).toLowerCase() === target);
  }, [normalizedSchedules, activeBarberFilter]);
  const groupedWeeks = useMemo(() => groupSchedulesByWeek(filteredSchedules), [filteredSchedules]);
  const barberOptions = useMemo(
    () =>
      (Array.isArray(barbers) ? barbers : [])
        .map((barber) => normalizeText(barber.name))
        .filter(Boolean),
    [barbers],
  );
  const canEditSchedules = typeof onScheduleUpdate === 'function';
  const canEditSlot = useCallback(
    (slot) => {
      if (!canEditSchedules) return false;
      if (!isStaffUser) return true;
      if (!normalizedUserKey) return false;
      const slotKey = canonicalizeName(slot?.Barber || '').toLowerCase();
      return Boolean(slotKey) && slotKey === normalizedUserKey;
    },
    [canEditSchedules, isStaffUser, normalizedUserKey]
  );
  const handleTimeChange = useCallback(
    (slot, nextValue) => {
      if (!canEditSlot(slot) || typeof onScheduleUpdate !== 'function') return;
      const recordId = getRecordId(slot) || `${slot.Barber}-${slot.Date}`;
      onScheduleUpdate(recordId, {
        Barber: slot.Barber,
        Date: slot.Date,
        DayOfWeek: slot.DayOfWeek,
        Week: nextValue,
        Time: nextValue,
      });
    },
    [canEditSlot, onScheduleUpdate]
  );
  return (
    <div className="space-y-6">
      <SectionCard title="Расписание">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {isStaffUser ? (
            <div className="space-y-1">
              <label className="text-sm text-slate-400">Мастер</label>
              <div className="w-64 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-white">
                {staffDisplayName}
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <label className="text-sm text-slate-400">Мастер</label>
              <select
                value={barberFilter}
                onChange={(event) => setBarberFilter(event.target.value)}
                className="w-64 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
              >
                <option value="all">Все мастера</option>
                {barberOptions.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {groupedWeeks.length ? (
          <div className="mt-4 space-y-4">
            {groupedWeeks.map((group) => {
              const slots = [...group.slots].sort((a, b) => getScheduleSortValue(a) - getScheduleSortValue(b));
              return (
                <div
                  key={group.key}
                  className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-100">{formatWeekRangeLabel(group.start)}</p>
                    <span className="text-xs text-slate-500">
                      {!activeBarberFilter || activeBarberFilter === 'all'
                        ? 'Все мастера'
                        : `Мастер: ${activeBarberFilter}`}
                    </span>
                  </div>
                  <div
                    className="grid gap-3"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
                  >
                    {slots.map((slot) => {
                      const slotId = getRecordId(slot) || `${slot.Barber}-${slot.Date}`;
                      const dayLabel = formatScheduleDayShort(slot.Date, slot.DayOfWeek);
                      const dateLabel = formatScheduleDateLabel(slot.Date);
                      const isTodaySlot = isTodayDate(slot.Date);
                      const showBarberName = !isStaffUser && (!activeBarberFilter || activeBarberFilter === 'all');
                      const slotEditable = canEditSlot(slot);
                      return (
                        <div
                          key={slotId}
                          className={classNames(
                            'space-y-3 rounded-2xl border bg-slate-900/60 p-3',
                            isTodaySlot ? 'border-emerald-400/70 ring-1 ring-emerald-400/30' : 'border-slate-800'
                          )}
                        >
                          <div className="flex flex-col items-center text-center text-xs uppercase tracking-[0.25em] text-slate-500">
                            <span className="text-sm font-semibold tracking-normal text-white">
                              {[dayLabel, dateLabel].filter(Boolean).join(' · ')}
                            </span>
                            {showBarberName && (
                              <span className="text-[11px] font-medium text-slate-400">{slot.Barber || '—'}</span>
                            )}
                          </div>
                          {slotEditable ? (
                            <TimeRangePicker
                              value={slot.Week === '0' ? '' : slot.Week || ''}
                              onChange={(nextValue) => handleTimeChange(slot, nextValue)}
                              buttonClassName="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-center text-sm text-white whitespace-nowrap focus:ring-2 focus:ring-indigo-500"
                              title="Редактировать время"
                              placeholder="Выходной"
                            />
                          ) : (
                            <div className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-center text-sm text-slate-200">
                              {slot.Week && slot.Week !== '0' ? slot.Week : 'Слоты не указаны'}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-400">Нет расписания для выбранных условий.</p>
        )}
      </SectionCard>
    </div>
  );
};
const PositionsView = ({ positions = [], onCreate, onUpdate, onDelete, onRefresh, requestConfirm }) => {
  const [newPosition, setNewPosition] = useState({ name: '', rate: '' });
  const [drafts, setDrafts] = useState({});
  const [error, setError] = useState('');
  const [savingKey, setSavingKey] = useState(null);
  const refreshPositionsList = useCallback(async () => {
    if (typeof onRefresh !== 'function') return;
    try {
      await onRefresh();
    } catch (refreshError) {
      console.error('Positions refresh failed', refreshError);
    }
  }, [onRefresh]);
  useEffect(() => {
    setDrafts({});
  }, [positions]);
  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions].sort((a, b) => {
      const leftOrder = Number(a?.orderIndex) || 0;
      const rightOrder = Number(b?.orderIndex) || 0;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
    });
  }, [positions]);
  const normalizeCommissionValue = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return null;
    const clamped = Math.min(Math.max(parsed, 0), 100);
    return clamped;
  };
  const handleCreate = async (event) => {
    event.preventDefault();
    if (!newPosition.name.trim()) {
      setError('Введите название должности.');
      return;
    }
    try {
      setSavingKey('new');
      setError('');
      await onCreate?.({
        name: newPosition.name.trim(),
        commissionRate: normalizeCommissionValue(newPosition.rate),
        orderIndex: sortedPositions.length,
      });
      setNewPosition({ name: '', rate: '' });
      await refreshPositionsList();
    } catch (createError) {
      setError(createError.message || 'Не удалось создать должность.');
    } finally {
      setSavingKey(null);
    }
  };
  const handleDraftChange = (id, field, value) => {
    setDrafts((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: value },
    }));
  };
  const getDraft = (position) => {
    const draft = drafts[position.id];
    const resolvedRate =
      draft?.rate ?? draft?.commissionRate ?? position.commissionRate;
    return {
      name: draft?.name ?? position.name ?? '',
      rate: resolvedRate === undefined || resolvedRate === null ? '' : String(resolvedRate),
    };
  };
  const commitPositionUpdate = async (position, draft) => {
    if (!position?.id) return;
    const nextName = (draft?.name || '').trim();
    if (!nextName) {
      throw new Error('Название должности не может быть пустым.');
    }
    await onUpdate?.(position.id, {
      name: nextName,
      commissionRate: normalizeCommissionValue(draft?.rate),
    });
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[position.id];
      return next;
    });
  };
  const pendingChanges = useMemo(
    () =>
      sortedPositions
        .map((position) => {
          const draft = getDraft(position);
          const nextName = draft.name.trim();
          const nextRate = normalizeCommissionValue(draft.rate);
          const currentName = (position.name || '').trim();
          const currentRate = normalizeCommissionValue(position.commissionRate);
          if (nextName === currentName && nextRate === currentRate) {
            return null;
          }
          return { position, draft };
        })
        .filter(Boolean),
    [sortedPositions, drafts]
  );
  const pendingCount = pendingChanges.length;
  const bulkSaving = savingKey === 'bulk';
  const hasPendingChanges = pendingCount > 0;
  const handleDelete = async (position) => {
    if (!position?.id) return;
    const confirmed = requestConfirm
      ? await requestConfirm({
          title: 'Удалить должность?',
          message: `«${position.name}» будет удалена без возможности восстановления.`,
          confirmLabel: 'Удалить',
          tone: 'danger',
        })
      : true;
    if (!confirmed) return;
    try {
      setSavingKey(position.id);
      setError('');
      await onDelete?.(position.id);
      await refreshPositionsList();
    } catch (deleteError) {
      setError(deleteError.message || 'Не удалось удалить должность.');
    } finally {
      setSavingKey(null);
    }
  };
  const handleBulkSave = async () => {
    if (!hasPendingChanges) return;
    try {
      setSavingKey('bulk');
      setError('');
      for (const change of pendingChanges) {
        await commitPositionUpdate(change.position, change.draft);
      }
      await refreshPositionsList();
    } catch (bulkError) {
      setError(bulkError.message || 'Не удалось сохранить изменения.');
    } finally {
      setSavingKey(null);
    }
  };
  return (
    <div className="space-y-6">
      <SectionCard title="Должности">
        <form onSubmit={handleCreate} className="grid gap-3 md:grid-cols-3">
          <input
            name="positionName"
            aria-label="Название должности"
            value={newPosition.name}
            onChange={(event) => setNewPosition((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Название должности"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-white focus:border-indigo-400 focus:outline-none"
          />
          <input
            name="positionRate"
            aria-label="Процент"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={newPosition.rate}
            onChange={(event) => setNewPosition((prev) => ({ ...prev, rate: event.target.value }))}
            placeholder="Процент, %"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-white focus:border-indigo-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={savingKey === 'new'}
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/30 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Добавить
          </button>
        </form>
        <p className="mt-2 text-xs text-slate-500">
          Процент применяется к стоимости услуг выбранного барбера и определяет его выплату.
        </p>
        {error && (
          <div className="mt-4">
            <ErrorBanner message={error} />
          </div>
        )}
        <div className="mt-6 space-y-3">
          {sortedPositions.length === 0 && <p className="text-sm text-slate-400">Должности еще не созданы.</p>}
          {sortedPositions.map((position) => {
            const draft = getDraft(position);
            const isDirty = pendingChanges.some((change) => change.position.id === position.id);
            return (
              <div
                key={position.id}
                className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                  <div className="flex w-full flex-wrap gap-3 md:flex-1">
                    <input
                      name={`positionName-${position.id}`}
                      aria-label="Название должности"
                      value={draft.name}
                      onChange={(event) => handleDraftChange(position.id, 'name', event.target.value)}
                      className="min-w-[160px] flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-2 text-white focus:border-indigo-400 focus:outline-none"
                    />
                    <input
                      name={`positionRate-${position.id}`}
                      aria-label="Процент"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={draft.rate}
                      onChange={(event) => handleDraftChange(position.id, 'rate', event.target.value)}
                      placeholder="Комиссия, %"
                      className="w-32 flex-none rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-2 text-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="hidden w-full flex-wrap items-center justify-end gap-3 md:flex md:w-auto md:flex-nowrap">
                    {isDirty && (
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                        Есть изменения
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(position)}
                      disabled={savingKey === position.id || bulkSaving}
                      className="flex-1 rounded-2xl border border-rose-600 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-600/10 disabled:cursor-not-allowed disabled:opacity-50 md:flex-none"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-center gap-2 md:hidden">
                  {isDirty && (
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                      Есть изменения
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDelete(position)}
                    disabled={savingKey === position.id || bulkSaving}
                    className="min-w-0 flex-1 rounded-2xl border border-rose-600 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-600/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Несохраненные изменения</p>
              <p className="text-xs text-slate-400">
                {hasPendingChanges ? `Ожидает сохранения: ${pendingCount}` : 'Нет несохраненных изменений'}
              </p>
            </div>
            <button
              type="button"
              onClick={handleBulkSave}
              disabled={!hasPendingChanges || bulkSaving}
              className="flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {bulkSaving ? 'Сохраняем...' : 'Сохранить изменения'}
              {hasPendingChanges && !bulkSaving && (
                <span className="ml-2 rounded-full bg-white/15 px-2 py-0.5 text-xs font-semibold">{pendingCount}</span>
              )}
            </button>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};
const RevenueView = ({ apiRequest, barbers = [], role = ROLE_OWNER, staffBarberId = null }) => {
  const isStaffMode = role === ROLE_STAFF;
  const staffBarberFilterValue =
    staffBarberId !== null && staffBarberId !== undefined ? String(staffBarberId) : '';
  const defaultRange = useMemo(() => getCurrentMonthRange(), []);
  const defaultFilters = useMemo(
    () => ({
      start: toInputDate(defaultRange.start),
      end: toInputDate(defaultRange.end),
      barberId: isStaffMode && staffBarberFilterValue ? staffBarberFilterValue : 'all',
    }),
    [defaultRange.start, defaultRange.end, isStaffMode, staffBarberFilterValue]
  );
  const [filters, setFilters] = useLocalStorage('revenue.filters', defaultFilters);
  const [state, setState] = useState({ loading: true, error: '', data: null });
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const [activePoint, setActivePoint] = useState(null);
  const startDateId = useMemo(() => `revenue-start-${Math.random().toString(36).slice(2, 8)}`, []);
  const endDateId = useMemo(() => `revenue-end-${Math.random().toString(36).slice(2, 8)}`, []);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  useEffect(() => {
    if (!filters) {
      setFilters(defaultFilters);
      return;
    }
    if (!filters.start || !filters.end) {
      setFilters((prev) => ({
        start: prev?.start || defaultFilters.start,
        end: prev?.end || defaultFilters.end,
        barberId: prev?.barberId || defaultFilters.barberId,
      }));
    }
  }, [filters, defaultFilters, setFilters]);
  const barberOptions = useMemo(
    () =>
      barbers
        .map((barber) => {
          const normalizedId = barber?.id ?? barber?.Id ?? barber?.ID ?? barber?.barberId ?? null;
          if (!normalizedId || !barber?.name) return null;
          return { id: String(normalizedId), name: barber.name };
        })
        .filter(Boolean),
    [barbers]
  );
  const staffBarberName = useMemo(() => {
    if (!isStaffMode || !staffBarberFilterValue) return '';
    const match = barberOptions.find((option) => option.id === staffBarberFilterValue);
    return match?.name || '';
  }, [isStaffMode, barberOptions, staffBarberFilterValue]);
  useEffect(() => {
    if (!filters || filters.barberId === 'all' || isStaffMode) return;
    if (!barberOptions.some((option) => option.id === filters.barberId)) {
      setFilters((prev) => ({ ...prev, barberId: 'all' }));
    }
  }, [filters, barberOptions, setFilters, isStaffMode]);
  useEffect(() => {
    if (!isStaffMode || !filters) return;
    const nextValue = staffBarberFilterValue || 'all';
    if (filters.barberId !== nextValue) {
      setFilters((prev) => ({ ...prev, barberId: nextValue }));
    }
  }, [isStaffMode, filters, staffBarberFilterValue, setFilters]);
  const startDate = filters?.start || '';
  const endDate = filters?.end || '';
  const selectedBarberId = filters?.barberId || 'all';
  const appliedBarberId = isStaffMode ? staffBarberFilterValue || 'all' : selectedBarberId;
  const fetchRevenue = useCallback(async () => {
    if (isStaffMode && !staffBarberFilterValue) {
      setState({
        loading: false,
        error: 'Профиль сотрудника не привязан к барберу, доходы недоступны.',
        data: null,
      });
      return;
    }
    setState((prev) => ({ ...prev, loading: true, error: '' }));
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('start', startDate);
      if (endDate) params.append('end', endDate);
      if (appliedBarberId && appliedBarberId !== 'all') params.append('barberId', appliedBarberId);
      const query = params.toString();
      const payload = await apiRequest(`/revenue/summary${query ? `?${query}` : ''}`);
      setState({ loading: false, error: '', data: payload });
    } catch (error) {
      setState({
        loading: false,
        error: error.message || 'Не удалось загрузить доходы.',
        data: null,
      });
    }
  }, [apiRequest, startDate, endDate, appliedBarberId, isStaffMode, staffBarberFilterValue]);
  useEffect(() => {
    fetchRevenue();
  }, [fetchRevenue]);
  const handleFilterChange = (field, value) => {
    if (isStaffMode && field === 'barberId') return;
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const summary = state.data;
  const items = summary?.items || [];
  const rawTimeline = useMemo(() => {
    if (Array.isArray(summary?.timeline)) return summary.timeline;
    if (summary?.timeline && typeof summary.timeline === 'object') {
      return Object.entries(summary.timeline).map(([key, value]) => {
        if (value && typeof value === 'object') {
          return { date: key, ...value };
        }
        return { date: key, gross: value };
      });
    }
    return [];
  }, [summary?.timeline]);
  const totalGross = summary?.totalGross ?? 0;
  const totalCommission = summary?.totalCommission ?? 0;
  const totalNet = summary?.totalNet ?? totalGross - totalCommission;
  const parseGrossValue = useCallback((value) => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (value == null) return 0;
    const normalized = String(value).replace(/[^0-9.,-]/g, '').replace(',', '.');
    const numeric = Number(normalized);
    return Number.isFinite(numeric) ? numeric : 0;
  }, []);
  const normalizedTimeline = useMemo(
    () =>
      rawTimeline.map((point) => ({
        ...point,
        grossValue:
          parseGrossValue(point?.gross) ||
          parseGrossValue(point?.Gross) ||
          parseGrossValue(point?.total) ||
          parseGrossValue(point?.totalGross) ||
          parseGrossValue(point?.net),
      })),
    [rawTimeline, parseGrossValue]
  );
  useEffect(() => {
    setActivePoint(null);
  }, [normalizedTimeline, isMobile]);
  const chartMax = normalizedTimeline.reduce((max, point) => Math.max(max, point.grossValue), 0);
  const safeChartMax = chartMax > 0 ? chartMax : 1;
  const lineChartHeight = isMobile ? 220 : 260;
  const lineChartWidth = Math.max(normalizedTimeline.length * (isMobile ? 64 : 88), isMobile ? 280 : 520);
  const lineChartPaddingX = 24;
  const lineChartPaddingY = 24;
  const lineChartInnerWidth = Math.max(lineChartWidth - lineChartPaddingX * 2, 1);
  const lineChartInnerHeight = Math.max(lineChartHeight - lineChartPaddingY * 2, 1);
  const lineChartPoints = normalizedTimeline.map((point, index) => {
    const safeValue = point.grossValue || 0;
    const ratio = normalizedTimeline.length > 1 ? index / (normalizedTimeline.length - 1) : 0.5;
    const x = lineChartPaddingX + ratio * lineChartInnerWidth;
    const y = lineChartPaddingY + (1 - (safeChartMax ? safeValue / safeChartMax : 0)) * lineChartInnerHeight;
    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      value: safeValue,
      label: formatShortDateLabel(point.date || point.label),
    };
  });
  const linePath = lineChartPoints.map((point, idx) => `${idx === 0 ? 'M' : 'L'}${point.x},${point.y}`).join(' ');
  const baseLineY = lineChartHeight - lineChartPaddingY;
  const areaPath =
    lineChartPoints.length > 0
      ? [
          `M${lineChartPoints[0].x},${baseLineY}`,
          ...lineChartPoints.map((point) => `L${point.x},${point.y}`),
          `L${lineChartPoints[lineChartPoints.length - 1].x},${baseLineY}`,
          'Z',
        ].join(' ')
      : '';
  const handlePointHover = useCallback(
    (point, index) => {
      if (isMobile) return;
      setActivePoint({ ...point, index });
    },
    [isMobile]
  );
  const handlePointLeave = useCallback(() => {
    if (isMobile) return;
    setActivePoint(null);
  }, [isMobile]);
  const handlePointClick = useCallback(
    (point, index) => {
      if (!isMobile) return;
      setActivePoint((prev) => (prev?.index === index ? null : { ...point, index }));
    },
    [isMobile]
  );
  return (
    <div className="space-y-6 overflow-x-hidden">
      <SectionCard title="Доходы барберов">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-3 sm:col-span-2 lg:col-span-2">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor={startDateId}>
                Дата с
              </label>
              <input
                id={startDateId}
                name="revenueStartDate"
                aria-label="Дата с"
                type="date"
                value={startDate}
                onChange={(event) => handleFilterChange('start', event.target.value)}
                className="revenue-date-input w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor={endDateId}>
                Дата по
              </label>
              <input
                id={endDateId}
                name="revenueEndDate"
                aria-label="Дата по"
                type="date"
                value={endDate}
                onChange={(event) => handleFilterChange('end', event.target.value)}
                className="revenue-date-input w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          {isStaffMode ? (
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <label className="text-xs uppercase tracking-wide text-slate-400">Барбер</label>
              <div className="flex h-11 items-center rounded-2xl border border-slate-700 bg-slate-900/70 px-3 text-sm text-white">
                {staffBarberName || 'Не указан'}
              </div>
            </div>
          ) : (
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <label className="text-xs uppercase tracking-wide text-slate-400">Барбер</label>
              <select
                value={selectedBarberId}
                onChange={(event) => handleFilterChange('barberId', event.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="all">Все барберы</option>
                {barberOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-stretch sm:col-span-2 sm:items-end sm:justify-end lg:col-span-1">
            <button
              type="button"
              onClick={fetchRevenue}
              className="w-full rounded-2xl border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-400 hover:text-white sm:w-auto sm:px-6"
            >
              Обновить
            </button>
          </div>
        </div>
        {state.error && <ErrorBanner message={state.error} />}
        {state.loading ? (
          <LoadingState label="Считаю доходы..." />
        ) : (
          <>
            {!isStaffMode && (
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatCard label="Общая выручка" value={formatCurrency(totalGross)} />
                <StatCard label="Начислено сотрудникам" value={formatCurrency(totalCommission)} accent="text-rose-300" />
                <StatCard label="В кассу" value={formatCurrency(totalNet)} accent="text-emerald-300" />
              </div>
            )}
            <div className="mt-6">
              {items.length === 0 ? (
                <p className="rounded-2xl border border-slate-800 p-4 text-sm text-slate-400">Нет выполненных услуг за выбранный период.</p>
              ) : (
                <>
                  {!isMobile && (
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                      <table className="min-w-full divide-y divide-slate-800 text-sm">
                        <thead className="bg-slate-900/40 text-slate-400">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Барбер</th>
                            <th className="px-4 py-3 text-right font-semibold">Записи</th>
                            <th className="px-4 py-3 text-right font-semibold">Выручка</th>
                            <th className="px-4 py-3 text-right font-semibold">Комиссия</th>
                            <th className="px-4 py-3 text-right font-semibold">Выплаты</th>
                            <th className="px-4 py-3 text-right font-semibold">В кассу</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {items.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-900/40">
                              <td className="px-4 py-3 text-white">{item.name}</td>
                              <td className="px-4 py-3 text-right text-slate-300">{item.appointments}</td>
                              <td className="px-4 py-3 text-right text-slate-100">{formatCurrency(item.gross)}</td>
                              <td className="px-4 py-3 text-right text-slate-300">{formatPercent(item.commissionRate)}</td>
                              <td className="px-4 py-3 text-right text-emerald-300">{formatCurrency(item.commission)}</td>
                              <td className="px-4 py-3 text-right text-indigo-300">{formatCurrency(item.net)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {isMobile && (
                    <div className="space-y-4 w-full">
                      {items.map((item) => {
                        const mobileStats = [
                          { label: 'Выручка', value: formatCurrency(item.gross), accent: 'text-white', wrapper: 'border-slate-800/70 bg-slate-950/40' },
                          { label: 'Комиссия', value: formatPercent(item.commissionRate), accent: 'text-slate-100', wrapper: 'border-slate-800/70 bg-slate-950/40' },
                          { label: 'Выплаты', value: formatCurrency(item.commission), accent: 'text-emerald-300', wrapper: 'border-emerald-900/80 bg-emerald-500/5' },
                          { label: 'В кассу', value: formatCurrency(item.net), accent: 'text-indigo-200', wrapper: 'border-indigo-900/80 bg-indigo-500/5' },
                        ];
                        return (
                          <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-inner shadow-black/20">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="text-base font-semibold text-white">{item.name}</p>
                              <span className="text-xs uppercase tracking-wide text-slate-400">{item.appointments} записей</span>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                              {mobileStats.map((metric) => (
                                <div
                                  key={metric.label}
                                  className={`rounded-xl border px-3 py-2 ${metric.wrapper}`}
                                >
                                  <p className="text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                                  <p className={`text-lg font-semibold ${metric.accent}`}>{metric.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </SectionCard>
      <SectionCard title="Динамика выручки">
        {state.loading ? (
          <LoadingState label="Загрузка данных..." />
        ) : normalizedTimeline.length === 0 ? (
          <p className="text-sm text-slate-400">Нет данных для выбранного периода.</p>
        ) : (
          <div className="mt-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-wide text-slate-400">Линейный график</p>
                <p className="text-xs text-slate-300">
                  Пиковое значение:{' '}
                  <span className="font-semibold text-white">{formatCurrency(chartMax)}</span>
                </p>
              </div>
              <div className="mt-4 overflow-x-auto pb-1">
                <div className="relative inline-block" style={{ minWidth: `${lineChartWidth}px` }}>
                  {activePoint && (
                    <div
                      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-3/4 whitespace-nowrap rounded-xl border border-indigo-500/40 bg-slate-900/95 px-3 py-2 text-xs shadow-2xl shadow-black/40"
                      style={{ left: `${activePoint.x}px`, top: `${activePoint.y}px` }}
                    >
                      <p className="font-semibold text-white">{formatCurrency(activePoint.value)}</p>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">{activePoint.label}</p>
                    </div>
                  )}
                  <svg
                    width={lineChartWidth}
                    height={lineChartHeight}
                    viewBox={`0 0 ${lineChartWidth} ${lineChartHeight}`}
                    role="img"
                    aria-label="Линейный график динамики выручки"
                    onMouseLeave={handlePointLeave}
                  >
                    <defs>
                      <linearGradient id="revenueLineFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(129, 140, 248, 0.35)" />
                        <stop offset="100%" stopColor="rgba(129, 140, 248, 0)" />
                      </linearGradient>
                      <linearGradient id="revenueLineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c4b5fd" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    {areaPath && <path d={areaPath} fill="url(#revenueLineFill)" stroke="none" />}
                    {linePath && (
                      <path
                        d={linePath}
                        fill="none"
                        stroke="url(#revenueLineStroke)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {lineChartPoints.map((point, index) => {
                      const isActive = activePoint?.index === index;
                      return (
                        <g key={`line-point-${index}-${point.label}`}>
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={isActive ? 5.5 : 4}
                            fill={isActive ? '#f8fafc' : '#c4b5fd'}
                            stroke={isActive ? '#6366f1' : '#312e81'}
                            strokeWidth={isActive ? 3 : 2}
                            className={isMobile ? 'cursor-pointer' : 'cursor-default'}
                            onMouseEnter={() => handlePointHover(point, index)}
                            onMouseLeave={handlePointLeave}
                            onFocus={() => handlePointHover(point, index)}
                            onBlur={handlePointLeave}
                            onClick={() => handlePointClick(point, index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`${point.label}: ${formatCurrency(point.value)}`}
                          >
                            <title>{`${point.label}: ${formatCurrency(point.value)}`}</title>
                          </circle>
                          <text
                            x={point.x}
                            y={lineChartHeight - 6}
                            textAnchor="middle"
                            fontSize="10"
                            fill={isActive ? '#e0e7ff' : '#94a3b8'}
                          >
                            {point.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
};
const MultiSelectCell = ({ value, options = [], onCommit }) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(normalizeMultiValueList(value));
  const anchorRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    setDraft(normalizeMultiValueList(value));
  }, [value]);
  const normalizedOptions = useMemo(() => dedupeOptionList(options), [options]);
  const updatePosition = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const panelWidth = 320;
    const panelHeight = 360;
    const nextLeft = Math.min(rect.left, window.innerWidth - panelWidth - 16);
    const nextTop = Math.min(rect.bottom + 8, window.innerHeight - panelHeight - 16);
    setPosition({
      top: Math.max(16, nextTop),
      left: Math.max(16, nextLeft),
    });
  }, []);
  useLayoutEffect(() => {
    if (!open) return undefined;
    updatePosition();
    const handler = () => updatePosition();
    window.addEventListener('resize', handler);
    window.addEventListener('scroll', handler, true);
    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('scroll', handler, true);
    };
  }, [open, updatePosition]);
  const toggleOption = (option) => {
    setDraft((prev) => toggleMultiValueItem(prev, option));
  };
  const handleSave = () => {
    onCommit(draft.join(', '));
    setOpen(false);
  };
  const summary = draft.length ? draft.join(', ') : 'Выбрать услуги';
  return (
    <>
      <button
        ref={anchorRef}
        onClick={() => setOpen(true)}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white hover:border-indigo-500"
      >
        <span className="block max-h-[40px] overflow-hidden text-ellipsis whitespace-pre-wrap">{summary}</span>
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
            <div
              className="absolute w-full max-w-xs rounded-2xl border border-slate-700 bg-slate-900/95 p-3 text-sm text-white shadow-2xl"
              style={{ top: `${position.top}px`, left: `${position.left}px` }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">Услуги</p>
                <button
                  type="button"
                  className="rounded-full p-1 text-slate-400 hover:text-white"
                  onClick={() => {
                    setDraft(normalizeMultiValueList(value));
                    setOpen(false);
                  }}
                >
                  ?
                </button>
              </div>
              {draft.length > 0 && (
                <div className="mt-2 mb-2 flex flex-wrap gap-2">
                  {draft.map((service) => (
                    <button
                      type="button"
                      key={service}
                      className="flex items-center gap-1 rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200"
                      onClick={() => toggleOption(service)}
                    >
                      {service}
                      <span className="text-slate-400">?</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="max-h-56 space-y-1 overflow-y-auto pr-1">
                {normalizedOptions.length === 0 && <p className="text-slate-400">Нет доступных услуг</p>}
                {normalizedOptions.map((option) => {
                  const isActive = hasMultiValueItem(draft, option);
                  return (
                    <label
                      key={option}
                      className={classNames(
                        'flex items-center justify-between rounded-xl border px-3 py-2',
                        isActive ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 text-slate-200 hover:border-indigo-500/60'
                      )}
                    >
                      <span className="pr-2 text-left">{option}</span>
                      <input
                        name={`option-${option}`}
                        aria-label={option}
                        type="checkbox"
                        checked={isActive}
                        onChange={() => toggleOption(option)}
                        className="h-4 w-4 rounded border-slate-500 accent-indigo-500"
                      />
                    </label>
                  );
                })}
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <button type="button" onClick={() => setDraft([])} className="text-xs text-slate-400 hover:text-white">
                  Очистить
                </button>
                <button type="button" onClick={handleSave} className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500">
                  Готово
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
const TimeRangePicker = ({
  value,
  onChange,
  title = 'Выбор времени',
  placeholder = 'Выберите интервал',
  buttonClassName = 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white whitespace-nowrap',
  autoDurationMinutes = null,
}) => {
  const [open, setOpen] = useState(false);
  const [{ start, end }, setDraft] = useState(() => ({ start: '', end: '' }));
  const [pristineState, setPristineState] = useState({ start: true, end: true });
  const startInputId = useMemo(() => `start-time-${Math.random().toString(36).slice(2, 8)}`, []);
  const endInputId = useMemo(() => `end-time-${Math.random().toString(36).slice(2, 8)}`, []);
  const autoEndEnabled = Number.isFinite(autoDurationMinutes) && autoDurationMinutes > 0;
  const resolvedEnd = autoEndEnabled ? addMinutesToTimeToken(start, autoDurationMinutes) : end;
  const buttonStyle = useMemo(() => {
    const label = value || placeholder || '';
    const length = label.length;
    const style = {};
    if (length > 9 && length <= 14) {
      style.fontSize = '0.8rem';
    } else if (length > 14) {
      style.fontSize = '0.7rem';
      style.letterSpacing = '-0.01em';
    }
    if (buttonClassName.includes('text-center')) {
      style.textAlign = 'center';
    }
    return Object.keys(style).length ? style : undefined;
  }, [value, placeholder, buttonClassName]);
  const handleOpen = () => {
    const nextRange = parseTimeRangeValue(value);
    setDraft(nextRange);
    setPristineState({
      start: !nextRange.start,
      end: autoEndEnabled ? !nextRange.start : !nextRange.end,
    });
    setOpen(true);
  };
  const handleSave = () => {
    onChange?.(buildTimeRangeValue(start, resolvedEnd));
    setOpen(false);
  };
  const handleClear = () => {
    onChange?.('0');
    setDraft({ start: '', end: '' });
    setPristineState({ start: true, end: true });
    setOpen(false);
  };
  const handleTimeInputChange = (field) => (event) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      setDraft((prev) => ({ ...prev, [field]: '' }));
      setPristineState((prev) => ({ ...prev, [field]: true }));
      return;
    }
    setDraft((prev) => ({ ...prev, [field]: normalizeTimeInputValue(inputValue) }));
    setPristineState((prev) => ({ ...prev, [field]: false }));
  };
  const startInputValue = pristineState.start ? '00:00' : start || '00:00';
  const endInputValue = autoEndEnabled
    ? pristineState.start
      ? '00:00'
      : resolvedEnd || '00:00'
    : pristineState.end
      ? '00:00'
      : end || '00:00';
  return (
    <>
      <button type="button" onClick={handleOpen} className={buttonClassName} style={buttonStyle}>
        {value ? value : placeholder}
      </button>
      <Modal
        title={title}
        isOpen={open}
        onClose={() => setOpen(false)}
        maxWidthClass="max-w-md"
        footer={
          <>
            <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
              Отмена
            </button>
            <button type="button" onClick={handleSave} className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">
              Сохранить
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Выберите время начала и окончания</p>
            <button type="button" onClick={handleClear} className="text-xs text-slate-400 hover:text-slate-100">
              Очистить
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400" htmlFor={startInputId}>Начало</label>
              <input
                id={startInputId}
                name="startTime"
                aria-label="Начало"
                type="time"
                step="60"
                value={startInputValue}
                onChange={handleTimeInputChange('start')}
                className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
              />
            </div>
            <span className="text-2xl font-light text-slate-500">-</span>
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400" htmlFor={endInputId}>Окончание</label>
              <input
                id={endInputId}
                name="endTime"
                aria-label="Окончание"
                type="time"
                step="60"
                value={endInputValue}
                onChange={autoEndEnabled ? undefined : handleTimeInputChange('end')}
                readOnly={autoEndEnabled}
                disabled={autoEndEnabled}
                className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const AppointmentTimeField = ({
  startValue,
  endValue,
  onChange,
}) => {
  const [startPristine, setStartPristine] = useState(() => !startValue);
  useEffect(() => {
    setStartPristine(!startValue);
  }, [startValue]);
  const handleStartChange = (event) => {
    const nextStart = normalizeTimeInputValue(event.target.value);
    setStartPristine(!nextStart);
    onChange?.(nextStart);
  };
  return (
    <div className="space-y-1">
      <label className="text-sm text-slate-300">Время</label>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
        <input
          name="appointmentStartTime"
          aria-label="Время начала"
          type="time"
          step="60"
          value={startPristine ? '00:00' : startValue || '00:00'}
          onChange={handleStartChange}
          className="h-11 min-w-0 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
        />
        <span className="text-slate-500">-</span>
        <input
          name="appointmentEndTime"
          aria-label="Время окончания"
          type="time"
          step="60"
          value={endValue || '00:00'}
          readOnly
          tabIndex={-1}
          className="h-11 min-w-0 rounded-lg border border-slate-600 bg-slate-900 px-3 text-center text-white"
        />
      </div>
    </div>
  );
};
const EditableCell = ({ record, column, options, onUpdate, onOpenProfile, tableId }) => {
  const recordId = record?.id || record?.Id || record?.ID || record?.recordId;
  const value = record[column.key];
  const [draft, setDraft] = useState(value ?? '');
  useEffect(() => {
    setDraft(value ?? '');
  }, [value]);
  if (!column.editable) {
    if (column.isProfileLink) {
      return (
        <button onClick={() => onOpenProfile?.(value)} className="text-left text-indigo-300 hover:text-indigo-100">
          {value || '-'}
        </button>
      );
    }
    return <span className="text-slate-200 whitespace-normal break-words leading-tight">{value || '-'}</span>;
  }
  const commit = (nextValue) => {
    const payload = nextValue !== undefined ? nextValue : draft;
    if ((value ?? '') === (payload ?? '')) return;
    onUpdate(recordId, { [column.key]: payload });
  };
  if (
    (tableId === 'Appointments' && column.key === 'Time') ||
    (tableId === 'Schedules' && column.key === 'Week')
  ) {
    return (
      <TimeRangePicker
        value={value || ''}
        onChange={(nextValue) => commit(nextValue)}
        placeholder={tableId === 'Schedules' ? 'Слоты не указаны' : 'Выберите время'}
        title={tableId === 'Schedules' ? 'Редактирование слотов' : 'Выбор времени'}
        buttonClassName="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white"
      />
    );
  }
  const fieldLabel = column.label || column.key;
  switch (column.type) {
    case 'select': {
      const optionList = column.optionsKey ? options[column.optionsKey] || [] : [];
      return (
        <select value={value || ''} onChange={(event) => commit(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white">
          <option value="">-</option>
          {optionList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    case 'boolean':
      return (
        <label className="flex items-center justify-center">
          <input
            name={column.key}
            aria-label={fieldLabel}
            type="checkbox"
            checked={value === true || value === 'true' || value === 1 || value === '1'}
            onChange={(event) => commit(event.target.checked ? 'true' : '')}
          />
        </label>
      );
    case 'multi-select':
      return <MultiSelectCell value={value} options={options[column.optionsKey] || []} onCommit={commit} />;
    case 'date':
      return (
        <input
          name={column.key}
          aria-label={fieldLabel}
          type="date"
          value={value ? String(value).slice(0, 10) : ''}
          onChange={(event) => commit(event.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white"
        />
      );
    default:
      return (
        <input
          name={column.key}
          aria-label={fieldLabel}
          type="text"
          value={draft || ''}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={() => commit()}
          onKeyDown={(event) => event.key === 'Enter' && commit()}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white"
        />
      );
  }
};
const ColumnMenu = ({ columns, hiddenColumns = [], onToggle }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, open ? () => setOpen(false) : null);
  return (
    <div className="relative z-40 w-full sm:w-auto">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-center rounded-lg border border-slate-600 px-3 py-2 text-sm text-white sm:w-auto"
      >
        Поля
      </button>
      {open && (
        <div
          ref={ref}
          className="absolute left-0 z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl sm:left-auto sm:right-0"
        >
          {columns.map((column) => (
            <label key={column.key} className="flex items-center gap-2 text-sm text-slate-200">
            <input
              type="checkbox"
              name={`column-${column.key}`}
              aria-label={column.label || column.key}
              checked={!hiddenColumns.includes(column.key)}
              onChange={() => onToggle(column.key)}
            />
              {column.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
const MultiSelectCheckboxes = ({ label, options = [], value = [], onChange, placeholder = 'Нет данных' }) => {
  const [query, setQuery] = useState('');
  const selected = useMemo(() => normalizeMultiValueList(value), [value]);
  const normalizedOptions = useMemo(() => dedupeOptionList(options), [options]);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return normalizedOptions;
    return normalizedOptions.filter((option) => option.toLowerCase().includes(normalizedQuery));
  }, [normalizedOptions, normalizedQuery]);
  const toggle = (option) => {
    if (!onChange) return;
    const next = toggleMultiValueItem(selected, option);
    onChange(next);
  };
  return (
    <div className="w-full min-w-0 space-y-3">
      {label && (
        <div className="flex items-center justify-between text-sm">
          <label className="text-slate-300">{label}</label>
          <span className="text-xs text-slate-400">{selected.length ? `${selected.length} выбрано` : 'Не выбрано'}</span>
        </div>
      )}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((service) => (
            <button
              type="button"
              key={service}
              className="flex items-center gap-1 rounded-full bg-indigo-500/10 px-2 py-1 text-xs text-indigo-200"
              onClick={() => toggle(service)}
            >
              {service}
              <span className="text-base leading-none text-slate-400" aria-hidden="true">
                &times;
              </span>
            </button>
          ))}
        </div>
      )}
      <div className="w-full min-w-0 rounded-2xl border border-slate-700 bg-slate-900/60">
        <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 013.995 9.315l3.095 3.095a.75.75 0 11-1.06 1.06l-3.095-3.094A5.5 5.5 0 119 3.5zm0 1.5a4 4 0 100 8 4 4 0 000-8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            name="serviceSearch"
            aria-label="Поиск услуги"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск услуги"
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="text-xs text-slate-400 hover:text-white">
              Очистить
            </button>
          )}
        </div>
        <div className="max-h-56 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-1 py-2 text-sm text-slate-500">{placeholder}</p>
          ) : (
            <div className="grid gap-1 sm:grid-cols-2">
              {filtered.map((option) => {
                const isActive = hasMultiValueItem(selected, option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => toggle(option)}
                    className={classNames(
                      'flex items-center justify-between rounded-xl border px-3 py-2 text-left text-sm',
                      isActive ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 bg-slate-900/40 text-slate-200 hover:border-indigo-500/40'
                    )}
                  >
                    <span className="truncate">{option}</span>
                    {isActive && (
                      <span className="text-xs font-semibold text-indigo-300" aria-hidden="true">
                        ?
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const ClientLookupInput = ({
  label = 'Клиент',
  value = '',
  onChange,
  clients = [],
  onSelectClient,
  placeholder = 'Начните вводить имя или телефон',
}) => {
  const [query, setQuery] = useState(value || '');
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const inputId = useMemo(() => `client-search-${Math.random().toString(36).slice(2, 8)}`, []);
  useEffect(() => {
    setQuery(value || '');
  }, [value]);
  const matches = useMemo(() => {
    if (!clients.length) return [];
    const normalized = normalizeText(query).toLowerCase();
    const shortlist = normalized
      ? clients.filter(
          (client) =>
            normalizeText(client.name).toLowerCase().includes(normalized) ||
            normalizeText(client.phone).toLowerCase().includes(normalized)
        )
      : clients;
    return shortlist.slice(0, 6);
  }, [clients, query]);
  useOutsideClick(containerRef, open ? () => setOpen(false) : null);
  const handleSelect = (client) => {
    const nextValue = client?.name || '';
    setQuery(nextValue);
    onChange?.(nextValue);
    onSelectClient?.(client);
    setOpen(false);
  };
  return (
    <div className="relative space-y-1" ref={containerRef}>
      {label && (
        <label className="text-sm text-slate-300" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        name="clientSearch"
        aria-label={label || 'Поиск клиента'}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          onChange?.(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
      />
      {open && matches.length > 0 && (
        <div className="absolute z-30 mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl">
          {matches.map((client) => (
            <button
              type="button"
              key={client.id}
              className="flex w-full flex-col items-start border-b border-slate-800 px-3 py-2 text-left text-sm text-slate-200 last:border-none hover:bg-slate-800"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleSelect(client)}
            >
              <span className="font-semibold">{client.name || 'Без имени'}</span>
              <span className="text-xs text-slate-400">{client.phone || 'Телефон не указан'}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
const StatusMenu = ({ statuses = [], hiddenStatuses = [], onToggle, onReset }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, open ? () => setOpen(false) : null);
  return (
    <div className="relative z-40 w-full sm:w-auto">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-600 px-3 text-sm text-white sm:w-auto"
      >
        Статусы
      </button>
      {open && (
        <div
          ref={ref}
          className="absolute left-0 z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl"
        >
          {statuses.length === 0 && <p className="text-sm text-slate-500">Нет статусов</p>}
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-2 text-sm text-slate-200">
            <input
              type="checkbox"
              name={`status-${status}`}
              aria-label={status}
              checked={!hiddenStatuses.includes(status)}
              onChange={() => onToggle(status)}
            />
              {status}
            </label>
          ))}
          <button onClick={onReset} className="text-sm text-indigo-300 hover:text-indigo-100">
            Показать все
          </button>
        </div>
      )}
    </div>
  );
};
const TableToolbar = ({
  tableId,
  searchTerm,
  setSearchTerm,
  supportsBarberFilter,
  selectedBarber,
  setSelectedBarber,
  barbers = [],
  supportsStatusFilter,
  statuses = [],
  hiddenStatuses = [],
  toggleStatus,
  resetStatuses,
  columns = [],
  hiddenColumns = [],
  toggleColumn,
  canCreate,
  onOpenCreate,
  onRefresh,
  showPastAppointments,
  setShowPastAppointments,
  supportsGrouping = false,
  groupByDate = false,
  setGroupByDate,
  allowAllBarbersOption = true,
  appointmentCalendarView = 'week',
  setAppointmentCalendarView,
  appointmentCalendarScale = 'normal',
  setAppointmentCalendarScale,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobileViewport(window.innerWidth < 768);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const mobileScaleOptions = useMemo(
    () => APPOINTMENT_CALENDAR_SCALE_OPTIONS.filter((option) => option.id !== 'large'),
    []
  );
  const effectiveScaleValue = isMobileViewport && appointmentCalendarScale === 'large' ? 'normal' : appointmentCalendarScale;
  const chipClass = (active) =>
    classNames(
      'inline-flex h-11 items-center justify-center rounded-xl border px-4 text-xs font-semibold uppercase tracking-wide transition whitespace-nowrap text-center',
      active ? 'border-indigo-400 bg-indigo-500/10 text-indigo-100' : 'border-slate-700 text-slate-300 hover:border-slate-500'
    );
  const cycleOptionValue = (items, currentValue) => {
    const currentIndex = items.findIndex((item) => item.id === currentValue);
    const resolvedIndex = currentIndex >= 0 ? currentIndex : 0;
    return items[(resolvedIndex + 1) % items.length]?.id || items[0]?.id;
  };
  const renderCycleGroupButton = (items, value, onChange, iconsMap, label) => {
    const currentItem = items.find((item) => item.id === value) || items[0];
    const IconComponent = currentItem ? iconsMap[currentItem.iconId] : null;
    return (
      <button
        type="button"
        onClick={() => onChange?.(cycleOptionValue(items, value))}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900 px-3 text-left text-white transition hover:border-indigo-500/60 hover:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        title={`${label}: ${currentItem?.label || ''}`}
        aria-label={`${label}: ${currentItem?.label || ''}`}
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</span>
          <span className="text-xs font-semibold text-slate-200">{currentItem?.label || '-'}</span>
        </div>
        <div className="flex items-center gap-2">
          {IconComponent ? <IconComponent className="h-5 w-5 text-white" /> : null}
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <span
                key={item.id}
                className={classNames(
                  'h-1.5 w-1.5 rounded-full transition',
                  item.id === currentItem?.id ? 'bg-indigo-300' : 'bg-slate-700'
                )}
              />
            ))}
          </div>
        </div>
      </button>
    );
  };
  const allowManualRefresh = typeof onRefresh === 'function' && !['Appointments', 'Users'].includes(tableId);
  const inlineCreateForMobile = canCreate && typeof onOpenCreate === 'function' && ['Appointments', 'Users'].includes(tableId);
  const showColumnMenu = columns.length > 0 && !['Users', 'Appointments'].includes(tableId);
  const renderStatusControl = () =>
    supportsStatusFilter ? (
      <StatusMenu statuses={statuses} hiddenStatuses={hiddenStatuses} onToggle={toggleStatus} onReset={resetStatuses} />
    ) : null;
  const statusControl = renderStatusControl();
  const columnControl = showColumnMenu ? <ColumnMenu columns={columns} hiddenColumns={hiddenColumns} onToggle={toggleColumn} /> : null;
  const pastControl =
    tableId === 'Appointments' && typeof setShowPastAppointments === 'function'
      ? (
        <button
          type="button"
          onClick={() => setShowPastAppointments(!showPastAppointments)}
          className={classNames(chipClass(showPastAppointments), 'w-full sm:w-auto md:justify-self-start')}
        >
          Прошедшие
        </button>
        )
      : null;
  const groupingControl =
    supportsGrouping && typeof setGroupByDate === 'function'
      ? (
          <button type="button" onClick={() => setGroupByDate(!groupByDate)} className={classNames(chipClass(groupByDate), 'w-full sm:w-auto')}>
            По дням
          </button>
        )
      : null;
  const calendarViewControl =
    tableId === 'Appointments' && typeof setAppointmentCalendarView === 'function'
      ? renderCycleGroupButton(
          APPOINTMENT_CALENDAR_VIEW_OPTIONS,
          appointmentCalendarView,
          setAppointmentCalendarView,
          APPOINTMENT_CALENDAR_VIEW_ICONS,
          'Вид'
        )
      : null;
  const calendarScaleControl =
    tableId === 'Appointments' && typeof setAppointmentCalendarScale === 'function'
      ? renderCycleGroupButton(
          isMobileViewport ? mobileScaleOptions : APPOINTMENT_CALENDAR_SCALE_OPTIONS,
          effectiveScaleValue,
          setAppointmentCalendarScale,
          APPOINTMENT_CALENDAR_SCALE_ICONS,
          'Масштаб'
        )
      : null;
  const getBarberSelect = (extraClassName = '') => (
    <select
      value={selectedBarber}
      onChange={(event) => setSelectedBarber(event.target.value)}
      className={classNames(
        'h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 text-left text-sm text-white',
        tableId !== 'Appointments' && 'sm:w-48',
        extraClassName
      )}
    >
      {allowAllBarbersOption && <option value="all">Все мастера</option>}
      {barbers.map((barber) => (
        <option key={barber} value={barber}>
          {barber}
        </option>
      ))}
    </select>
  );
  if (tableId === 'Appointments') {
    return (
      <div className="space-y-3 rounded-2xl bg-slate-950/30 p-3 sm:space-y-3 sm:rounded-3xl sm:p-4">
        <div className="flex items-stretch gap-2 md:flex-row md:items-stretch">
          <label className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 013.995 9.315l3.095 3.095a.75.75 0 11-1.06 1.06l-3.095-3.094A5.5 5.5 0 119 3.5zm0 1.5a4 4 0 100 8 4 4 0 000-8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              name="optionsSearch"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Поиск..."
              aria-label="Поиск по таблице"
              className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </label>
          {supportsBarberFilter && (
            <div className="hidden md:block">
              {getBarberSelect('md:w-auto md:min-w-[180px]')}
            </div>
          )}
          <div className="hidden md:block">
            {renderStatusControl()}
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white transition hover:border-indigo-500/60 hover:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 md:hidden"
            aria-label={mobileFiltersOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
            title={mobileFiltersOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
          >
            <IconFilter className="h-5 w-5" />
          </button>
          {canCreate && (
            <button
              onClick={onOpenCreate}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500 sm:px-5"
              aria-label="Добавить запись"
            >
              <span className="hidden sm:inline">+ Добавить</span>
              <span className="sm:hidden">+</span>
            </button>
          )}
        </div>
        <div className={classNames('grid gap-2 sm:grid-cols-2 md:grid-cols-[auto_minmax(0,360px)] xl:items-center', !mobileFiltersOpen && 'hidden md:grid')}>
          {supportsBarberFilter ? <div className="md:hidden">{getBarberSelect()}</div> : null}
          {(supportsStatusFilter || pastControl) ? (
            <div className="grid grid-cols-2 gap-2 md:hidden">
              <div>{renderStatusControl()}</div>
              <div>{pastControl}</div>
            </div>
          ) : null}
          <div className="hidden md:block">{pastControl}</div>
          <div className="grid grid-cols-2 gap-2 sm:col-span-2 md:col-span-1 xl:w-full">
            {calendarViewControl}
            {calendarScaleControl}
          </div>
        </div>
      </div>
    );
  }
  const controlOrder =
    [
      { key: 'status', node: statusControl },
      { key: 'past', node: pastControl },
      { key: 'group', node: groupingControl },
      { key: 'columns', node: columnControl },
    ];
  return (
    <div className="space-y-2 rounded-2xl bg-slate-950/30 p-3 sm:space-y-3 sm:rounded-3xl sm:p-4">
      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1 space-y-2.5 sm:space-y-3">
          <div className={classNames('flex flex-col gap-2 sm:flex-row sm:items-center', tableId === 'Appointments' ? 'lg:flex-row lg:items-center lg:gap-3' : '')}>
            <div
              className={classNames(
                'flex w-full items-stretch gap-2',
                tableId === 'Appointments' ? 'lg:flex-[2] lg:gap-3' : ''
              )}
            >
              <label className="relative flex-1 min-w-[200px] lg:min-w-[260px]">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 013.995 9.315l3.095 3.095a.75.75 0 11-1.06 1.06l-3.095-3.094A5.5 5.5 0 119 3.5zm0 1.5a4 4 0 100 8 4 4 0 000-8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              <input
                name="optionsSearch"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Поиск..."
                aria-label="Поиск по таблице"
                  className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </label>
              {inlineCreateForMobile && (
                <button
                  onClick={onOpenCreate}
                  aria-label="Добавить запись"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-lg font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500 sm:hidden"
                >
                  +
                </button>
              )}
            </div>
            {supportsBarberFilter && tableId !== 'Appointments' && getBarberSelect()}
            {tableId === 'Appointments' && supportsBarberFilter && (
              <div className="hidden w-full items-stretch gap-3 lg:flex lg:flex-1">
                {getBarberSelect('lg:flex-1')}
                {canCreate && (
                  <button
                    onClick={onOpenCreate}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500"
                  >
                    + Добавить
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {controlOrder.map((control) =>
              control.node ? <Fragment key={control.key}>{control.node}</Fragment> : null
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {allowManualRefresh && (
            <button
              onClick={onRefresh}
              className="rounded-full border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800 sm:px-5"
              title="Обновить данные"
            >
              <span className="hidden sm:inline">Обновить</span>
              <span className="sm:hidden">?</span>
            </button>
          )}
          {canCreate && (
            <button
              onClick={onOpenCreate}
              className={classNames(
                'rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500',
                inlineCreateForMobile ? 'hidden sm:inline-flex' : '',
                tableId === 'Appointments' ? 'lg:hidden' : ''
              )}
            >
              <span className="hidden sm:inline">+ Добавить</span>
              <span className="sm:hidden">+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
const buildAppointmentGroups = (records = [], sortDirection = 'desc') => {
  const buckets = new Map();
  records.forEach((record) => {
    const key = record.Date || 'Без даты';
    const bucket = buckets.get(key) || [];
    bucket.push(record);
    buckets.set(key, bucket);
  });
  const compare = sortDirection === 'asc' ? (a, b) => a - b : (a, b) => b - a;
  return Array.from(buckets.entries())
    .map(([key, items]) => {
      const sortedItems = [...items].sort((a, b) => {
        const left = getAppointmentStartDate(a.Date, a.Time, a.startDateTime)?.getTime() || Number.MAX_SAFE_INTEGER;
        const right = getAppointmentStartDate(b.Date, b.Time, b.startDateTime)?.getTime() || Number.MAX_SAFE_INTEGER;
        return compare(left, right);
      });
      const reference = sortedItems[0];
      const sortValue = getAppointmentStartDate(reference.Date, reference.Time, reference.startDateTime)?.getTime() || (sortDirection === 'asc' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
      return {
        key: key || `no-date-${reference?.id || Math.random()}`,
        label: formatDateHeading(key),
        rows: sortedItems,
        sortValue,
      };
    })
    .sort((a, b) => compare(a.sortValue, b.sortValue));
};
const resolveSortValue = (row, column, tableId) => {
  if (!column) return normalizeText(row[column?.key]).toLowerCase();
  if (tableId === 'Appointments' && column.key === 'Date') {
    return getAppointmentStartDate(row.Date, row.Time, row.startDateTime)?.getTime() || 0;
  }
  if (column.type === 'date') {
    const ts = new Date(row[column.key]).getTime();
    return Number.isNaN(ts) ? 0 : ts;
  }
  if (typeof row[column.key] === 'number') {
    return row[column.key];
  }
  if (column.type === 'boolean') {
    return row[column.key] ? 1 : 0;
  }
  return normalizeText(row[column.key]).toLowerCase();
};
const SortIndicator = ({ direction }) => (
  <span className="flex flex-col leading-[6px]">
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={classNames('h-3 w-3 text-slate-600', direction === 'asc' && 'text-indigo-300')}
    >
      <path d="M4 10l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={classNames('h-3 w-3 -mt-0.5 text-slate-600', direction === 'desc' && 'text-indigo-300')}
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);
const SchedulesBoard = ({ rows = [], columns = [], onUpdate, options }) => {
  const visibleKeys = useMemo(() => new Set(columns.map((column) => column.key)), [columns]);
  const editableColumns = useMemo(() => columns.filter((column) => column.editable), [columns]);
  const groupedByDate = useMemo(() => {
    if (!rows.length) return [];
    const buckets = new Map();
    rows.forEach((slot) => {
      const key = slot.Date || slot.DayOfWeek || `barber-${slot.Barber || 'no-barber'}`;
      const next = buckets.get(key) || [];
      next.push(slot);
      buckets.set(key, next);
    });
    return Array.from(buckets.entries())
      .map(([key, slots]) => {
        const sortedSlots = [...slots].sort((a, b) => normalizeText(a.Week).localeCompare(normalizeText(b.Week)));
        const reference = sortedSlots[0] || {};
        const timestamp = key && !key.startsWith('barber-') ? new Date(key).getTime() : Number.NaN;
        return {
          key,
          title: key && !key.startsWith('barber-') ? formatDateHeading(key) : reference.DayOfWeek || 'Без даты',
          badge: key && !key.startsWith('barber-') ? formatDateBadgeLabel(key) : reference.DayOfWeek || '—',
          sortValue: Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER,
          slots: sortedSlots,
        };
      })
      .sort((a, b) => a.sortValue - b.sortValue);
  }, [rows]);
  if (!groupedByDate.length) {
    return <p className="text-slate-400">Расписание пусто.</p>;
  }
  return (
    <div className="space-y-4">
      {groupedByDate.map((group) => (
        <section key={group.key} className="space-y-2 rounded-2xl border border-slate-800/80 bg-slate-950/30 p-4 shadow-inner shadow-black/10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">{group.badge}</p>
              <p className="text-base font-semibold text-white">{group.title}</p>
            </div>
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-300">
              {group.slots.length} {pluralize(group.slots.length, ['слот', 'слота', 'слотов'])}
            </span>
          </div>
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {group.slots.map((slot) => (
              <article
                key={slot.id || `${slot.Barber || 'no-barber'}-${slot.Date || slot.DayOfWeek || slot.Week}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/50 p-3 text-sm text-slate-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{slot.DayOfWeek || 'День не указан'}</p>
                    <p className="text-base font-semibold text-white">{slot.Barber || 'Не назначен'}</p>
                  </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-white">{slot.Week || 'Слоты не указаны'}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">{slot.Date ? formatDate(slot.Date) : 'Без даты'}</p>
                  </div>
                </div>
                {editableColumns.length > 0 && (
                  <div className="mt-2 grid gap-2 text-xs text-slate-400">
                    {editableColumns.map((column) => (
                      <div key={`${slot.id || slot.Date}-${column.key}`} className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/60 px-2 py-1.5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{column.label}</p>
                        <EditableCell record={slot} column={column} options={options} onUpdate={onUpdate} tableId="Schedules" />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
const AppointmentsList = ({ groups = [], onOpen, columns = [], hiddenColumns = [], onOpenProfile }) => {
  if (!groups.length) {
    return <p className="text-slate-400">Записей пока нет.</p>;
  }
  const visibleColumns = useMemo(() => columns.filter((column) => !hiddenColumns.includes(column.key)), [columns, hiddenColumns]);
  const renderColumnValue = (record, column) => {
    const value = record[column.key];
    if (column.key === 'CustomerName') {
      if (!value) return '—';
      if (typeof onOpenProfile === 'function') {
        return (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onOpenProfile(value);
            }}
            className="text-indigo-300 hover:text-indigo-100"
          >
            {value}
          </button>
        );
      }
      return value;
    }
    switch (column.key) {
      case 'Date':
        return formatDate(value) || '—';
      case 'Time': {
        const { start, end } = parseTimeRangeParts(value);
        return [start || value || '-', end ? `до ${end}` : ''].filter(Boolean).join(' ');
      }
      case 'Status':
        return normalizeStatusValue(value) || '—';
      case 'Services': {
        const items = parseMultiValue(value);
        return items.length ? items.join(', ') : '—';
      }
      case 'Phone':
        return value ? formatPhoneInput(value) : '—';
      case 'Reminder2hClientSent':
      case 'Reminder2hBarberSent':
        return value === 'true' || value === true || value === 1 ? 'Отправлено' : '—';
      default:
        return value || '—';
    }
  };
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <section key={group.key} className="space-y-3">
          {group.label && (
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px flex-1 bg-slate-700" />
              {group.label}
              <span className="h-px flex-1 bg-slate-700" />
            </div>
          )}
          <div className="grid gap-3 lg:grid-cols-2">
            {group.rows.map((record) => {
              const key = getRecordId(record) || `${group.key}-${record.CustomerName}-${record.Time}`;
              const statusLabel = normalizeStatusValue(record.Status) || '-';
              const { start, end } = parseTimeRangeParts(record.Time);
              const servicesList = parseMultiValue(record.Services);
              return (
                <div
                  role="button"
                  tabIndex={0}
                  key={key}
                  onClick={() => onOpen?.(record, { allowDelete: true })}
                  onKeyDown={(event) => event.key === 'Enter' && onOpen?.(record, { allowDelete: true })}
                  className="flex h-full cursor-pointer flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-3 text-left transition hover:border-indigo-500/70 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 sm:p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/70 pb-3">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{formatDateBadgeLabel(record.Date)}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-white sm:text-3xl">{start || record.Time || '-'}</p>
                        {end && <p className="text-xs text-slate-400 sm:text-sm">до {end}</p>}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className={classNames('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide', getStatusBadgeClasses(statusLabel))}>
                        {statusLabel || 'Без статуса'}
                      </span>
                      {record.Barber && (
                        <p className="text-xs text-slate-400 sm:text-sm">
                          Барбер: <span className="font-semibold text-white">{record.Barber}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-3 text-[13px] text-slate-300 sm:text-sm">
                    {visibleColumns.length > 0 ? (
                      <div className="grid gap-2">
                        {visibleColumns.map((column) => (
                          <div key={`${key}-${column.key}`} className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-950/50 px-2 py-1.5">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{column.label}</p>
                            <p className="text-right text-slate-200">{renderColumnValue(record, column)}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {record.CustomerName ? (
                          typeof onOpenProfile === 'function' ? (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                onOpenProfile(record.CustomerName);
                              }}
                              className="text-left text-base font-semibold text-white hover:text-indigo-300 sm:text-lg"
                            >
                              {record.CustomerName}
                            </button>
                          ) : (
                            <p className="text-base font-semibold text-white sm:text-lg">{record.CustomerName}</p>
                          )
                        ) : (
                          <p className="text-base font-semibold text-white sm:text-lg">Без имени</p>
                        )}
                        {servicesList.length ? (
                          <div className="flex flex-wrap gap-2">
                            {servicesList.slice(0, 3).map((service, index) => (
                              <span key={`${service}-${index}`} className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5 text-[11px] text-slate-200 sm:text-xs">
                                {service}
                              </span>
                            ))}
                            {servicesList.length > 3 && <span className="text-[11px] text-slate-500">+{servicesList.length - 3}</span>}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500">Услуги не указаны</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};
const AppointmentCalendarCard = ({ record, onOpen, onOpenProfile, compact = false, showDateBadge = false }) => {
  const statusLabel = normalizeStatusValue(record.Status) || '-';
  const compactStatusLabel = getCompactStatusLabel(record.Status);
  const { start, end } = parseTimeRangeParts(record.Time);
  const servicesList = parseMultiValue(record.Services);
  const cardRef = useRef(null);
  const [autoCompact, setAutoCompact] = useState(false);
  const AUTO_COMPACT_ENTER_WIDTH = 250;
  const AUTO_COMPACT_EXIT_WIDTH = 285;
  useLayoutEffect(() => {
    const node = cardRef.current;
    if (!node || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect?.width || 0;
      setAutoCompact((prev) => {
        if (nextWidth <= 0) return prev;
        if (prev) {
          return nextWidth < AUTO_COMPACT_EXIT_WIDTH;
        }
        return nextWidth < AUTO_COMPACT_ENTER_WIDTH;
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const effectiveCompact = compact || autoCompact;
  const customerNode = record.CustomerName ? (
    typeof onOpenProfile === 'function' ? (
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onOpenProfile(record.CustomerName);
        }}
        className={classNames('block w-full min-w-0 text-left font-semibold text-white hover:text-indigo-300', effectiveCompact ? 'truncate text-sm' : 'truncate')}
      >
        {record.CustomerName}
      </button>
    ) : (
      <p className={classNames('font-semibold text-white', effectiveCompact ? 'truncate text-sm' : 'text-base sm:text-lg')}>{record.CustomerName}</p>
    )
  ) : (
    <p className={classNames('font-semibold text-white', effectiveCompact ? 'text-sm' : 'text-base sm:text-lg')}>Без имени</p>
  );
  const cardClassName = classNames(
    'flex h-full cursor-pointer flex-col rounded-2xl border border-slate-800 bg-slate-950/40 text-left transition hover:border-indigo-500/70 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/60',
    effectiveCompact ? 'p-2.5' : 'p-3 sm:p-4'
  );
  if (effectiveCompact) {
    return (
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        onClick={() => onOpen?.(record, { allowDelete: true })}
        onKeyDown={(event) => event.key === 'Enter' && onOpen?.(record, { allowDelete: true })}
        className={cardClassName}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-lg font-semibold text-white">{start || record.Time || '-'}</p>
            {end && <p className="text-[11px] text-slate-400">до {end}</p>}
          </div>
          <span
            className={classNames(
              'inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
              getStatusBadgeClasses(statusLabel)
            )}
          >
            {compactStatusLabel}
          </span>
        </div>
      <div className="mt-2 min-w-0">{customerNode}</div>
        {record.Barber && (
          <p className="mt-1 truncate text-[11px] font-semibold text-white">
            {record.Barber}
          </p>
        )}
        {servicesList.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {servicesList.slice(0, 2).map((service, index) => (
              <span key={`${service}-${index}`} className="rounded-full border border-slate-700/70 bg-slate-900/70 px-1.5 py-0.5 text-[10px] text-slate-200">
                {service}
              </span>
            ))}
            {servicesList.length > 2 && <span className="text-[10px] text-slate-500">+{servicesList.length - 2}</span>}
          </div>
        ) : (
          <p className="mt-2 text-[11px] text-slate-500">Услуги не указаны</p>
        )}
      </div>
    );
  }
  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(record, { allowDelete: true })}
      onKeyDown={(event) => event.key === 'Enter' && onOpen?.(record, { allowDelete: true })}
      className={cardClassName}
    >
      <div className={classNames('border-b border-slate-800/70', compact ? 'pb-2' : 'pb-3')}>
        <div className={classNames('flex', compact ? 'flex-col gap-2' : 'flex-wrap items-start justify-between gap-3')}>
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <p className={classNames('font-semibold text-white', compact ? 'text-lg' : 'text-2xl sm:text-3xl')}>{start || record.Time || '-'}</p>
              {end && <p className={classNames('text-slate-400', compact ? 'text-[11px]' : 'text-xs sm:text-sm')}>до {end}</p>}
            </div>
          </div>
          <div className={classNames('flex gap-2', compact ? 'flex-wrap items-center' : 'flex-col items-end text-right')}>
            <span
              className={classNames(
                'inline-flex items-center rounded-full font-semibold uppercase tracking-wide',
                compact ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-[11px]',
                getStatusBadgeClasses(statusLabel)
              )}
            >
              {statusLabel || 'Без статуса'}
            </span>
            {record.Barber && (
              <p className={classNames('text-slate-400', compact ? 'min-w-0 text-[11px]' : 'text-xs sm:text-sm')}>
                Барбер: <span className="font-semibold text-white">{record.Barber}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex min-w-0 flex-col gap-3 text-[13px] text-slate-300 sm:text-sm">
        {customerNode}
        {servicesList.length ? (
          <div className="flex flex-wrap gap-2">
            {servicesList.slice(0, 3).map((service, index) => (
              <span
                key={`${service}-${index}`}
                className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5 text-[11px] text-slate-200 sm:text-xs"
              >
                {service}
              </span>
            ))}
            {servicesList.length > 3 && <span className="text-[11px] text-slate-500">+{servicesList.length - 3}</span>}
          </div>
        ) : (
          <p className="text-xs text-slate-500">Услуги не указаны</p>
        )}
      </div>
    </div>
  );
};
const AppointmentsCalendarView = ({
  rows = [],
  onOpen,
  onOpenProfile,
  viewMode = 'week',
  scaleMode = 'normal',
  calendarDate = '',
  setCalendarDate,
  setViewMode,
}) => {
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const safeViewMode = APPOINTMENT_CALENDAR_VIEW_OPTIONS.some((option) => option.id === viewMode) ? viewMode : 'week';
  const resolvedScaleMode = isMobileViewport && scaleMode === 'large' ? 'normal' : scaleMode;
  const safeScaleMode = APPOINTMENT_CALENDAR_SCALE_OPTIONS.some((option) => option.id === resolvedScaleMode) ? resolvedScaleMode : 'normal';
  const scaleConfig = APPOINTMENT_CALENDAR_SCALE_CONFIG[safeScaleMode] || APPOINTMENT_CALENDAR_SCALE_CONFIG.normal;
  const mobileVisibleDayCount = safeScaleMode === 'compact' ? 2 : 1;
  const anchorDate = useMemo(() => parseInputDate(calendarDate) || startOfLocalDay(), [calendarDate]);
  const todayKey = getLocalISODateString();
  const todayScrollPendingRef = useRef(false);
  const todayMarkerRef = useRef(null);
  const dayViewRef = useRef(null);
  const datePickerInputRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobileViewport(window.innerWidth < 768);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const mobileGridWidthPercent = `${(7 / mobileVisibleDayCount) * 100}%`;
  const mobileWeekGridStyle = useMemo(
    () =>
      isMobileViewport
        ? {
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            width: mobileGridWidthPercent,
          }
        : undefined,
    [isMobileViewport, mobileGridWidthPercent]
  );
  const mobileMonthGridStyle = useMemo(
    () =>
      isMobileViewport
        ? {
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            width: mobileGridWidthPercent,
          }
        : undefined,
    [isMobileViewport, mobileGridWidthPercent]
  );
  const weekGridStyle = useMemo(
    () => ({
      gridTemplateColumns: `repeat(7, minmax(${scaleConfig.weekColumnWidth}px, ${scaleConfig.weekColumnWidth}px))`,
      width: 'max-content',
    }),
    [scaleConfig.weekColumnWidth]
  );
  const monthGridStyle = useMemo(
    () => ({
      gridTemplateColumns: `repeat(7, minmax(${scaleConfig.monthColumnWidth}px, ${scaleConfig.monthColumnWidth}px))`,
      width: 'max-content',
    }),
    [scaleConfig.monthColumnWidth]
  );
  const datedRows = useMemo(
    () =>
      rows
        .map((record) => ({
          ...record,
          _startDate: getAppointmentStartDate(record.Date, record.Time, record.startDateTime) || parseInputDate(record.Date),
        }))
        .filter((record) => record._startDate)
        .sort((a, b) => a._startDate.getTime() - b._startDate.getTime()),
    [rows]
  );
  const rowsByDate = useMemo(() => {
    const buckets = new Map();
    datedRows.forEach((record) => {
      const key = getLocalISODateString(record._startDate);
      const next = buckets.get(key) || [];
      next.push(record);
      buckets.set(key, next);
    });
    return buckets;
  }, [datedRows]);
  const scrollCalendarToToday = useCallback(() => {
    const target = safeViewMode === 'day' ? dayViewRef.current : todayMarkerRef.current;
    if (target && typeof target.scrollIntoView === 'function') {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [safeViewMode]);
  const shiftCalendar = (direction) => {
    const multiplier = direction === 'next' ? 1 : -1;
    const nextDate = safeViewMode === 'day'
      ? addDays(anchorDate, multiplier)
      : safeViewMode === 'week'
        ? addDays(anchorDate, multiplier * 7)
        : new Date(anchorDate.getFullYear(), anchorDate.getMonth() + multiplier, 1);
    setCalendarDate?.(getLocalISODateString(nextDate));
  };
  const jumpToToday = () => {
    todayScrollPendingRef.current = true;
    if (getLocalISODateString(anchorDate) === todayKey) {
      requestAnimationFrame(() => {
        scrollCalendarToToday();
        todayScrollPendingRef.current = false;
      });
      return;
    }
    setCalendarDate?.(todayKey);
  };
  const openDatePicker = () => {
    const input = datePickerInputRef.current;
    if (!input) return;
    if (typeof input.showPicker === 'function') {
      input.showPicker();
      return;
    }
    input.focus();
    input.click();
  };
  const weekStart = useMemo(() => getWeekStartDate(anchorDate), [anchorDate]);
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, index) => addDays(weekStart, index)), [weekStart]);
  const monthStart = useMemo(() => getMonthStartDate(anchorDate), [anchorDate]);
  const monthGridDays = useMemo(() => {
    const gridStart = getWeekStartDate(monthStart);
    return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index));
  }, [monthStart]);
  const headerTitle = useMemo(() => {
    if (safeViewMode === 'day') {
      return new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(anchorDate);
    }
    if (safeViewMode === 'week') {
      const weekEnd = addDays(weekStart, 6);
      const left = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekStart).replace('.', '');
      const right = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekEnd).replace('.', '');
      return `${left} - ${right}`;
    }
    return new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(anchorDate);
  }, [anchorDate, safeViewMode, weekStart]);
  const headerMeta = useMemo(() => {
    if (safeViewMode === 'day') {
      return `${rowsByDate.get(getLocalISODateString(anchorDate))?.length || 0} записей`;
    }
    if (safeViewMode === 'week') {
      return `${weekDays.reduce((sum, day) => sum + (rowsByDate.get(getLocalISODateString(day))?.length || 0), 0)} записей`;
    }
      return `${datedRows.filter((record) => isSameLocalMonth(record._startDate, anchorDate)).length} записей`;
  }, [anchorDate, datedRows, rowsByDate, safeViewMode, weekDays]);
  useEffect(() => {
    if (!todayScrollPendingRef.current) return;
    const frameId = requestAnimationFrame(() => {
      scrollCalendarToToday();
      todayScrollPendingRef.current = false;
    });
    return () => cancelAnimationFrame(frameId);
  }, [calendarDate, safeViewMode, safeScaleMode, scrollCalendarToToday]);
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-slate-950/30 p-3 sm:rounded-3xl sm:p-4">
        <div className="flex flex-col gap-2.5 sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative">
            <button type="button" onClick={openDatePicker} className="text-left">
              <p className="text-lg font-semibold text-white sm:text-xl">{headerTitle}</p>
              <p className="text-xs text-slate-400 sm:text-sm">{headerMeta}</p>
            </button>
            <input
              ref={datePickerInputRef}
              name="appointmentCalendarDate"
              aria-label="Выбрать дату календаря"
              type="date"
              value={getLocalISODateString(anchorDate)}
              onChange={(event) => setCalendarDate?.(event.target.value || todayKey)}
              className="pointer-events-none absolute left-0 top-0 h-0 w-0 opacity-0"
              tabIndex={-1}
            />
          </div>
          <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-900/85 p-1">
            <button
              type="button"
              onClick={() => shiftCalendar('prev')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              aria-label="Назад"
              title="Назад"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={jumpToToday}
              className="inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 sm:px-5"
            >
              Сегодня
            </button>
            <button
              type="button"
              onClick={() => shiftCalendar('next')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              aria-label="Вперед"
              title="Вперед"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {safeViewMode === 'day' && (
        <div
          ref={dayViewRef}
          className={classNames(
            'grid gap-3',
            isMobileViewport
              ? safeScaleMode === 'compact'
                ? 'grid-cols-2'
                : 'grid-cols-1'
              : scaleConfig.dayGrid
          )}
        >
          {(rowsByDate.get(getLocalISODateString(anchorDate)) || []).map((record) => (
            <AppointmentCalendarCard
              key={record.id || `${record.CustomerName}-${record.Time}`}
              record={record}
              onOpen={onOpen}
              onOpenProfile={onOpenProfile}
              compact={isMobileViewport && safeScaleMode === 'compact'}
            />
          ))}
          {!(rowsByDate.get(getLocalISODateString(anchorDate)) || []).length && (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/30 p-6 text-sm text-slate-400">На этот день записей нет.</div>
          )}
        </div>
      )}
      {safeViewMode === 'week' && (
        <div className={classNames('pb-2', isMobileViewport && 'overflow-x-auto')}>
          <div className={classNames('grid', isMobileViewport ? scaleConfig.weekGap : scaleConfig.weekGrid, scaleConfig.weekGap)} style={isMobileViewport ? mobileWeekGridStyle : undefined}>
          {weekDays.map((day) => {
            const dayKey = getLocalISODateString(day);
            const items = rowsByDate.get(dayKey) || [];
            const isToday = isSameLocalDay(day, new Date());
            return (
              <section
                key={dayKey}
                ref={isToday ? todayMarkerRef : null}
                className={classNames(scaleConfig.weekSectionMinHeight, scaleConfig.weekSectionPadding, 'space-y-3 rounded-2xl border border-slate-800 bg-slate-950/30', isToday && 'ring-1 ring-indigo-500/50')}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCalendarDate?.(dayKey);
                    setViewMode?.('day');
                  }}
                  className="w-full text-left"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(day).replace('.', '')}</p>
                  <p className="text-lg font-semibold text-white">{new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(day).replace('.', '')}</p>
                </button>
                <div className="space-y-2">
                  {items.map((record) => (
                    <AppointmentCalendarCard
                      key={record.id || `${record.CustomerName}-${record.Time}`}
                      record={record}
                      onOpen={onOpen}
                      onOpenProfile={onOpenProfile}
                      compact={isMobileViewport && safeScaleMode === 'compact'}
                    />
                  ))}
                  {!items.length && <div className="rounded-xl border border-dashed border-slate-800 px-3 py-4 text-center text-xs text-slate-500">Пусто</div>}
                </div>
              </section>
            );
          })}
          </div>
        </div>
      )}
      {safeViewMode === 'month' && (
        <div className={classNames('pb-2', isMobileViewport && 'overflow-x-auto')}>
          <div className={classNames('grid', isMobileViewport ? scaleConfig.monthGap : scaleConfig.monthGrid, scaleConfig.monthGap)} style={isMobileViewport ? mobileMonthGridStyle : undefined}>
          {monthGridDays.map((day) => {
            const dayKey = getLocalISODateString(day);
            const items = rowsByDate.get(dayKey) || [];
            const isToday = isSameLocalDay(day, new Date());
            const isCurrentMonth = isSameLocalMonth(day, anchorDate);
            return (
              <section
                key={dayKey}
                ref={isToday ? todayMarkerRef : null}
                className={classNames(scaleConfig.monthSectionMinHeight, scaleConfig.monthSectionPadding, 'space-y-2 rounded-2xl border border-slate-800 bg-slate-950/30', isToday && 'ring-1 ring-indigo-500/50')}
              >
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCalendarDate?.(dayKey);
                      setViewMode?.('day');
                    }}
                    className="text-left"
                  >
                    <p className={classNames('text-sm font-semibold', isCurrentMonth ? 'text-white' : 'text-slate-500')}>{day.getDate()}</p>
                  </button>
                  {!!items.length && <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">{items.length}</span>}
                </div>
                <div className="space-y-2">
                  {items.slice(0, 3).map((record) => (
                    <AppointmentCalendarCard
                      key={record.id || `${record.CustomerName}-${record.Time}`}
                      record={record}
                      onOpen={onOpen}
                      onOpenProfile={onOpenProfile}
                      compact={isMobileViewport && safeScaleMode === 'compact'}
                    />
                  ))}
                  {items.length > 3 && (
                    <button
                      type="button"
                      onClick={() => {
                        setCalendarDate?.(dayKey);
                        setViewMode?.('day');
                      }}
                      className="text-xs text-indigo-300 hover:text-indigo-100"
                    >
                      + еще {items.length - 3}
                    </button>
                  )}
                  {!items.length && <div className="rounded-xl border border-dashed border-slate-800 px-3 py-4 text-center text-xs text-slate-600">-</div>}
                </div>
              </section>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
};
const DataTable = ({
  tableId,
  rows,
  columns,
  hiddenColumns,
  sortConfig,
  onSort,
  onUpdate,
  onDelete,
  options,
  onOpenProfile,
  onOpenAppointment,
  groupByDate = true,
  appointmentCalendarView = 'week',
  appointmentCalendarScale = 'normal',
  appointmentCalendarDate = '',
  setAppointmentCalendarDate,
  setAppointmentCalendarView,
}) => {
  if (!rows.length) {
    return <p className="text-slate-400">Нет записей.</p>;
  }
  const visibleColumns = columns.filter((column) => !hiddenColumns.includes(column.key));
  const isAppointmentsTable = tableId === 'Appointments';
  const canGroupAppointments = isAppointmentsTable && groupByDate && (!sortConfig || sortConfig.key === 'Date');
  const groupedRows = isAppointmentsTable
    ? canGroupAppointments
      ? buildAppointmentGroups(rows, sortConfig?.direction || 'desc')
      : [{ key: 'default', label: null, rows }]
    : [{ key: 'default', label: null, rows }];
  if (isAppointmentsTable) {
    return (
      <AppointmentsCalendarView
        rows={rows}
        onOpen={onOpenAppointment}
        onOpenProfile={onOpenProfile}
        viewMode={appointmentCalendarView}
        scaleMode={appointmentCalendarScale}
        calendarDate={appointmentCalendarDate}
        setCalendarDate={setAppointmentCalendarDate}
        setViewMode={setAppointmentCalendarView}
      />
    );
  }
  if (tableId === 'Schedules') {
    return <SchedulesBoard rows={rows} columns={visibleColumns} onUpdate={onUpdate} options={options} />;
  }
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((record, index) => {
          const recordId = getRecordId(record);
          const cardKey = recordId || `${tableId}-card-${index}`;
          return (
            <article key={cardKey} className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-black/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {tableId === 'Users' ? 'Клиент' : tableId === 'Schedules' ? 'Расписание' : 'Запись'}
                  </p>
                  <p className="text-base font-semibold text-white">{record[visibleColumns[0]?.key] || '-'}</p>
                </div>
                {onDelete && (
                  <button
                    onClick={() => onDelete(record)}
                    className="rounded-full border border-rose-600/70 p-2 text-rose-200 hover:bg-rose-500/10"
                    aria-label="Удалить запись"
                  >
                    <IconTrash className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="grid gap-3">
                {visibleColumns.map((column) => (
                  <div key={`${cardKey}-${column.key}`} className="space-y-1 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{column.label}</p>
                    <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="hidden 2xl:block -mx-4 overflow-x-auto overflow-y-visible pb-3 sm:mx-0">
        <table className="min-w-[760px] w-full table-auto text-[13px] leading-tight sm:text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.25em] text-slate-400">
              {visibleColumns.map((column) => (
                <th
                  key={column.key}
                  className={classNames('px-2 py-1.5 whitespace-nowrap', column.align === 'center' && 'text-center', column.minWidth)}
                  onClick={() => column.sortable !== false && onSort(column.key)}
                >
                  <div className={classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')}>
                    {column.label}
                    {column.sortable !== false && <SortIndicator direction={sortConfig?.key === column.key ? sortConfig.direction : null} />}
                  </div>
                </th>
              ))}
              {onDelete && <th className="px-2 py-1.5 text-right" aria-label="Действия" />}
            </tr>
          </thead>
          <tbody>
            {groupedRows.map((group) => (
              <Fragment key={group.key}>
                {group.label && (
                  <tr className="bg-transparent">
                    <td colSpan={visibleColumns.length + (onDelete ? 1 : 0)} className="px-2 py-2">
                      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                        <span className="h-px flex-1 bg-slate-700" />
                        {group.label}
                        <span className="h-px flex-1 bg-slate-700" />
                      </div>
                    </td>
                  </tr>
                )}
                {group.rows.map((record) => (
                  <tr key={getRecordId(record)} className="border-t border-slate-800">
                    {visibleColumns.map((column) => (
                      <td
                        key={column.key}
                        className={classNames(
                          'px-2 py-1.5 align-top text-[13px] leading-snug sm:text-sm',
                          column.align === 'center' && 'text-center',
                          column.noWrap ? 'whitespace-nowrap' : 'whitespace-normal break-words'
                        )}
                      >
                        <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                      </td>
                    ))}
                    {onDelete && (
                      <td className="px-2 py-1.5 text-right">
                        <button
                          onClick={() => onDelete(record)}
                          className="inline-flex items-center rounded-lg border border-rose-500 px-2 py-1.5 text-xs text-rose-300 hover:bg-rose-500/10"
                          aria-label="Удалить запись"
                        >
                          <IconTrash />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const ClientsList = ({
  clients = [],
  barbers = [],
  onUpdate,
  onAdjustBs,
  onDelete,
  fetchHistory,
  onRequestConfirm,
  onBlockClient,
}) => {
  const [modalState, setModalState] = useState({
    open: false,
    record: null,
    history: [],
    loading: false,
    error: '',
    blockBusy: false,
    saveBusy: false,
    bsMode: 'adjust',
    bsInput: '',
    bsComment: '',
    bsError: '',
  });
  const barberOptions = useMemo(() => (Array.isArray(barbers) ? barbers.filter(Boolean) : []), [barbers]);
  const openClientModal = async (client) => {
    if (!client) return;
    setModalState({
      open: true,
      record: { ...client },
      history: [],
      loading: true,
      error: '',
      blockBusy: false,
      saveBusy: false,
      bsMode: 'adjust',
      bsInput: '',
      bsComment: '',
      bsError: '',
    });
    try {
      if (fetchHistory && client.Name) {
        const profile = await fetchHistory(client);
        const history = buildVisitHistory(profile?.appointments || []);
        setModalState((prev) => ({
          ...prev,
          history,
          loading: false,
          record: profile?.user ? { ...prev.record, ...profile.user } : prev.record,
        }));
      } else {
        setModalState((prev) => ({ ...prev, loading: false, history: [] }));
      }
    } catch (error) {
      setModalState((prev) => ({ ...prev, loading: false, error: error.message || 'Не удалось загрузить историю' }));
    }
  };
  const closeClientModal = () =>
    setModalState({
      open: false,
      record: null,
      history: [],
      loading: false,
      error: '',
      blockBusy: false,
      saveBusy: false,
      bsMode: 'adjust',
      bsInput: '',
      bsComment: '',
      bsError: '',
    });
  const warningCount = Number(modalState.record?.warningCount ?? 0);
  const manualBlocked = Boolean(modalState.record?.manualBlocked);
  const isBlocked =
    (modalState.record?.isBlocked ?? manualBlocked) ||
    warningCount >= CLIENT_BLOCK_THRESHOLD;
  const handleFieldChange = (field, value) => {
    setModalState((prev) => ({ ...prev, record: { ...prev.record, [field]: value } }));
  };
  const handleBsFieldChange = (field, value) => {
    setModalState((prev) => ({ ...prev, [field]: value, bsError: field === 'bsInput' || field === 'bsMode' ? '' : prev.bsError }));
  };
  const handleBsQuickFill = (value) => {
    setModalState((prev) => ({ ...prev, bsInput: value, bsError: '' }));
  };
  const currentBsBalance = Math.max(0, Math.trunc(Number(modalState.record?.bsBalance) || 0));
  const parsedBsAmount = parseBsEditorAmount(modalState.bsInput);
  const hasBsDraft = String(modalState.bsInput || '').trim().length > 0;
  const projectedBsBalance = !hasBsDraft || Number.isNaN(parsedBsAmount)
    ? currentBsBalance
    : modalState.bsMode === 'set'
      ? parsedBsAmount
      : currentBsBalance + parsedBsAmount;
  const handleSave = async () => {
    if (!modalState.record || typeof onUpdate !== 'function') return;
    const recordId = getRecordId(modalState.record);
    if (!recordId) return;
    if (modalState.saveBusy) return;
    const payload = {
      Name: modalState.record.Name,
      Phone: modalState.record.Phone,
      TelegramID: modalState.record.TelegramID,
      Barber: modalState.record.Barber,
    };
    if (hasBsDraft) {
      if (Number.isNaN(parsedBsAmount)) {
        setModalState((prev) => ({ ...prev, bsError: 'Введите целое число. Например: 120, +15 или -10.' }));
        return;
      }
      if (modalState.bsMode === 'set' && parsedBsAmount < 0) {
        setModalState((prev) => ({ ...prev, bsError: 'Баланс BS не может быть отрицательным.' }));
        return;
      }
      if (projectedBsBalance < 0) {
        setModalState((prev) => ({ ...prev, bsError: 'После списания баланс не может уйти в минус.' }));
        return;
      }
    }
    setModalState((prev) => ({ ...prev, saveBusy: true, bsError: '', error: '' }));
    try {
      if (hasBsDraft && typeof onAdjustBs === 'function') {
        await onAdjustBs(recordId, {
          mode: modalState.bsMode,
          amountBs: parsedBsAmount,
          comment: modalState.bsComment,
        });
      }
      onUpdate(recordId, payload);
      closeClientModal();
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        saveBusy: false,
        bsError: error.message || 'Не удалось изменить баланс BS.',
      }));
    }
  };
  const handleBlockToggle = async () => {
    if (!modalState.record?.id || typeof onBlockClient !== 'function') return;
    setModalState((prev) => ({ ...prev, blockBusy: true, error: '' }));
    const nextBlocked = !isBlocked;
    try {
      const result = await onBlockClient(modalState.record.id, nextBlocked);
      setModalState((prev) => ({
        ...prev,
        blockBusy: false,
        record: {
          ...prev.record,
          isBlocked: result?.blocked ?? nextBlocked,
          manualBlocked: result?.manualBlocked ?? nextBlocked,
          warningCount: result?.warnings ?? prev.record?.warningCount ?? warningCount,
        },
      }));
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        blockBusy: false,
        error: error.message || 'Не удалось изменить блокировку клиента',
      }));
    }
  };
  const handleDelete = async () => {
    if (!modalState.record || typeof onDelete !== 'function') return;
    const confirmed = await onRequestConfirm?.({
      title: 'Удалить клиента?',
      message: `Клиент «${modalState.record.Name || 'Без имени'}» будет удален без возможности восстановления.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (onRequestConfirm && !confirmed) return;
    await onDelete(modalState.record, { skipConfirm: true });
    closeClientModal();
  };
  return (
    <div className="space-y-6">
      {clients.length === 0 ? (
        <p className="text-slate-400">Список клиентов пуст.</p>
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-950/40 shadow-inner shadow-black/10">
          <div className="divide-y divide-slate-900">
            {clients.map((client, index) => {
              const clientNumber = String(index + 1).padStart(2, '0');
              const phoneDisplay = client.Phone ? formatPhoneInput(client.Phone) : '';
              const telegramHandle = formatTelegramHandle(client.TelegramID);
              return (
                <button
                  type="button"
                  key={client.id}
                  onClick={() => openClientModal(client)}
                  className="flex w-full flex-col gap-2 px-4 py-3 text-left transition hover:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-indigo-300">
                      {clientNumber}
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-white">{client.Name || 'Нет имени'}</p>
                          {client.Barber && <p className="text-xs text-slate-400">Любимый барбер: {client.Barber}</p>}
                        </div>
                        <div className="hidden text-right text-sm text-slate-300 sm:block">
                          {phoneDisplay && <p>{phoneDisplay}</p>}
                          {telegramHandle && <p className="text-xs text-slate-500">{telegramHandle}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <Modal
        title={modalState.record?.Name || 'Клиент'}
        isOpen={modalState.open}
        onClose={closeClientModal}
        maxWidthClass="max-w-3xl"
        footer={
          <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3">
            {modalState.record && (
              <button
                onClick={handleDelete}
                className={classNames(
                  RESPONSIVE_ACTION_BUTTON_CLASS,
                  'border border-rose-600 text-rose-200 hover:bg-rose-500/10'
                )}
                aria-label="Удалить"
                title="Удалить"
              >
                <IconTrash className="h-5 w-5" aria-hidden="true" />
                <span className="hidden sm:inline">Удалить</span>
              </button>
            )}
            <button
              onClick={handleBlockToggle}
              disabled={modalState.blockBusy || !onBlockClient || !modalState.record?.id}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                isBlocked
                  ? 'border border-amber-500 text-amber-200 hover:bg-amber-500/10'
                  : 'border border-rose-500 text-rose-200 hover:bg-rose-500/10',
                (modalState.blockBusy || !onBlockClient || !modalState.record?.id) && 'cursor-not-allowed opacity-60'
              )}
              aria-label={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
              title={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
            >
              <IconBan className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{isBlocked ? 'Разблокировать' : 'Заблокировать'}</span>
            </button>
            <button
              onClick={closeClientModal}
              disabled={modalState.saveBusy}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                'border border-slate-600 text-white hover:bg-slate-800',
                modalState.saveBusy && 'cursor-not-allowed opacity-60'
              )}
              aria-label="Отмена"
              title="Отмена"
            >
              <IconClose className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Отмена</span>
            </button>
            <button
              onClick={handleSave}
              disabled={modalState.saveBusy}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                'bg-emerald-600 text-white hover:bg-emerald-500',
                modalState.saveBusy && 'cursor-not-allowed opacity-60'
              )}
              aria-label="Сохранить"
              title="Сохранить"
            >
              <IconSave className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Сохранить</span>
            </button>
          </div>
        }
      >
        {!modalState.record ? (
          <p className="text-slate-400">Выберите клиента.</p>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  Предупреждения: {warningCount}{isBlocked ? ' (Заблокирован)' : ''}
                </p>
                {modalState.error && <p className="text-xs text-rose-300">{modalState.error}</p>}
              </div>
              {isBlocked && <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-200">Заблокирован</span>}
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-300">
                Имя
                <input
                  name="clientName"
                  aria-label="Имя клиента"
                  value={modalState.record.Name || ''}
                  onChange={(event) => handleFieldChange('Name', event.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-300">
                Телефон
                <input
                  name="clientPhone"
                  aria-label="Телефон клиента"
                  value={modalState.record.Phone || ''}
                  onChange={(event) => handleFieldChange('Phone', event.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-300">
                Telegram ID
                <input
                  name="clientTelegram"
                  aria-label="Telegram ID"
                  value={modalState.record.TelegramID || ''}
                  onChange={(event) => handleFieldChange('TelegramID', event.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-300">
                Любимый барбер
                <select
                  value={modalState.record.Barber || ''}
                  onChange={(event) => handleFieldChange('Barber', event.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                >
                  <option value="">Не выбран</option>
                  {barberOptions.map((barber) => (
                    <option key={barber} value={barber}>
                      {barber}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">Баланс BS</p>
                  <p className="text-xs text-slate-400">Можно установить новое значение или быстро прибавить/списать BS.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Сейчас</p>
                  <p className="text-2xl font-semibold text-white">{currentBsBalance} BS</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-[minmax(0,170px)_minmax(0,1fr)]">
                <label className="space-y-1 text-sm text-slate-300">
                  Режим
                  <select
                    value={modalState.bsMode}
                    onChange={(event) => handleBsFieldChange('bsMode', event.target.value)}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                  >
                    <option value="adjust">Прибавить / списать</option>
                    <option value="set">Установить вручную</option>
                  </select>
                </label>
                <label className="space-y-1 text-sm text-slate-300">
                  {modalState.bsMode === 'set' ? 'Новый баланс' : 'Изменение баланса'}
                  <input
                    name="clientBs"
                    aria-label="Баланс BS"
                    value={modalState.bsInput}
                    onChange={(event) => handleBsFieldChange('bsInput', event.target.value)}
                    placeholder={modalState.bsMode === 'set' ? 'Например, 120' : 'Например, +15 или -10'}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                  />
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {['+5', '+10', '-5', '-10'].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleBsQuickFill(value)}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                  >
                    {value} BS
                  </button>
                ))}
              </div>
              <label className="space-y-1 text-sm text-slate-300">
                Комментарий
                <input
                  name="clientBsComment"
                  aria-label="Комментарий к изменению BS"
                  value={modalState.bsComment}
                  onChange={(event) => handleBsFieldChange('bsComment', event.target.value)}
                  placeholder="Например, ручная корректировка или списание за услугу"
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <p className="text-slate-400">
                  После сохранения будет: <span className={classNames('font-semibold', projectedBsBalance < 0 ? 'text-rose-300' : 'text-white')}>{Number.isNaN(projectedBsBalance) ? '—' : `${projectedBsBalance} BS`}</span>
                </p>
                {modalState.bsError && <p className="text-rose-300">{modalState.bsError}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">История визитов</p>
              <VisitHistoryList
                visits={modalState.history}
                loading={modalState.loading}
                error={modalState.error}
                emptyMessage="История визитов пуста."
                maxHeightClass="max-h-56"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
const CreateRecordModal = ({ isOpen, onClose, onSave, columns, tableName, options, tableId, clients = [], hiddenFields = [] }) => {
  const editableColumns = useMemo(() => columns.filter((column) => column.editable !== false), [columns]);
  const visibleColumns = useMemo(
    () => editableColumns.filter((column) => !hiddenFields.includes(column.key)),
    [editableColumns, hiddenFields]
  );
  const initialState = useMemo(() => {
    const payload = {};
    editableColumns.forEach((column) => {
      payload[column.key] = column.type === 'multi-select' ? [] : '';
    });
    return payload;
  }, [editableColumns]);
  const [draft, setDraft] = useState(initialState);
  const isAppointmentsCreate = tableId === 'Appointments';
  useEffect(() => {
    if (isOpen) setDraft(initialState);
  }, [isOpen, initialState]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {};
    Object.entries(draft).forEach(([key, value]) => {
      payload[key] = Array.isArray(value) ? value.join(', ') : value;
    });
    onSave(payload);
  };
  const handleClientAutoFill = (client) => {
    if (!client) return;
    setDraft((prev) => ({
      ...prev,
      CustomerName: client.name || prev.CustomerName,
      Phone: client.phone || prev.Phone,
      Barber: prev.Barber || client.preferredBarber || '',
      UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || '',
    }));
  };
  return (
    <Modal
      title={`Новая запись: ${tableName}`}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className={classNames(RESPONSIVE_ACTION_BUTTON_CLASS, 'border border-slate-600 text-white hover:bg-slate-800')}
            aria-label="Отмена"
            title="Отмена"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Отмена</span>
          </button>
          <button
            onClick={handleSubmit}
            className={classNames(RESPONSIVE_ACTION_BUTTON_CLASS, 'bg-emerald-600 text-white hover:bg-emerald-500')}
            aria-label="Сохранить"
            title="Сохранить"
          >
            <IconSave className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Сохранить</span>
          </button>
        </div>
      }
    >
      <form className="space-y-4">
        {visibleColumns.map((column) => {
          const value = draft[column.key];
          if (isAppointmentsCreate && column.key === 'CustomerName') {
            return (
              <ClientLookupInput
                key={column.key}
                label={column.label}
                value={value || ''}
                onChange={(nextValue) => setDraft((prev) => ({ ...prev, CustomerName: nextValue }))}
                clients={clients}
                onSelectClient={handleClientAutoFill}
              />
            );
          }
          if (column.type === 'select') {
            return (
              <div key={column.key} className="space-y-1">
                <label className="text-sm text-slate-300">{column.label}</label>
                <select value={value || ''} onChange={(event) => setDraft((prev) => ({ ...prev, [column.key]: event.target.value }))} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
                  <option value="">-</option>
                  {(options[column.optionsKey] || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          if (column.type === 'multi-select') {
            const selectedValues = Array.isArray(value) ? value : parseMultiValue(value);
            return (
              <MultiSelectCheckboxes
                key={column.key}
                label={column.label}
                options={options[column.optionsKey] || []}
                value={selectedValues}
                onChange={(selected) => setDraft((prev) => ({ ...prev, [column.key]: selected }))}
                placeholder="Нет данных"
              />
            );
          }
          if (column.key === 'Time' || column.key === 'Week') {
            return (
              <div key={column.key} className="space-y-1">
                <label className="text-sm text-slate-300">{column.label}</label>
                <TimeRangePicker
                  value={value || ''}
                  onChange={(nextValue) => setDraft((prev) => ({ ...prev, [column.key]: nextValue }))}
                  placeholder={column.key === 'Week' ? '—' : 'Нажмите, чтобы выбрать'}
                  title={column.key === 'Week' ? 'Редактирование слотов' : 'Выбор времени'}
                />
              </div>
            );
          }
          return (
            <div key={column.key} className="space-y-1">
              <label className="text-sm text-slate-300">{column.label}</label>
              <input
                name={column.key}
                aria-label={column.label || column.key}
                type={column.type === 'date' ? 'date' : 'text'}
                value={value || ''}
                onChange={(event) => setDraft((prev) => ({ ...prev, [column.key]: event.target.value }))}
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
              />
            </div>
          );
        })}
      </form>
    </Modal>
  );
};
const ProfileModal = ({ state, onClose, onBlockClient }) => {
  const appointments = state.data?.appointments || [];
  const visitHistory = useMemo(() => buildVisitHistory(appointments), [appointments]);
  const user = state.data?.user || null;
  const [blockState, setBlockState] = useState(null);
  const [blockBusy, setBlockBusy] = useState(false);
  const [blockError, setBlockError] = useState('');
  useEffect(() => {
    setBlockState(null);
    setBlockError('');
  }, [state?.open, user?.id]);
  const warningCount = blockState?.warningCount ?? state.data?.warningCount ?? user?.warningCount ?? 0;
  const manualBlocked = blockState?.manualBlocked ?? state.data?.manualBlocked ?? user?.manualBlocked ?? false;
  const isBlocked =
    (blockState?.isBlocked ??
      blockState?.blocked ??
      state.data?.isBlocked ??
      user?.isBlocked ??
      manualBlocked) ||
    warningCount >= CLIENT_BLOCK_THRESHOLD;
  const handleToggleBlock = async () => {
    if (!onBlockClient || !user?.id) return;
    setBlockBusy(true);
    setBlockError('');
    const nextBlocked = !isBlocked;
    try {
      const result = await onBlockClient(user.id, nextBlocked);
      setBlockState({
        warningCount: result?.warnings ?? warningCount,
        manualBlocked: result?.manualBlocked ?? nextBlocked,
        isBlocked: result?.blocked ?? nextBlocked,
      });
    } catch (error) {
      setBlockError(error.message || 'Failed to update block status');
    } finally {
      setBlockBusy(false);
    }
  };
  const phoneLabel = user?.Phone ? formatPhoneInput(user.Phone) : '';
  const phoneHref = phoneLabel ? `tel:${phoneLabel.replace(/[^\d+]/g, '')}` : '';
  const telegramHandle = user?.TelegramID ? formatTelegramHandle(user.TelegramID) : '';
  const telegramHref = user?.TelegramID ? buildTelegramLink(user.TelegramID) : '';
  const telegramTarget = telegramHref?.startsWith('tg://') ? '_self' : '_blank';
  const telegramRel = telegramHref?.startsWith('tg://') ? undefined : 'noopener noreferrer';
  return (
    <Modal
      title={state.data?.user?.Name || 'Client profile'}
      isOpen={state.open}
      onClose={onClose}
      footer={
        <div className="flex flex-wrap items-center justify-end gap-2">
          {onBlockClient && user?.id && (
            <button
              onClick={handleToggleBlock}
              disabled={blockBusy}
            className={classNames(
              RESPONSIVE_ACTION_BUTTON_CLASS,
              isBlocked
                ? 'border border-amber-500 text-amber-200 hover:bg-amber-500/10'
                : 'border border-rose-500 text-rose-200 hover:bg-rose-500/10',
              blockBusy && 'cursor-not-allowed opacity-60'
            )}
          >
              <IconBan className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{isBlocked ? 'Разблокировать' : 'Заблокировать'}</span>
            </button>
          )}
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">Закрыть</button>
        </div>
      }
    >
      {state.loading && <LoadingState label="Loading profile..." />}
      {!state.loading && state.data?.error && <ErrorBanner message={state.data.error} />}
      {!state.loading && user && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
            <div className="text-sm text-white">
              <p className="font-semibold">Предупреждения: {warningCount}</p>
              {blockError && <p className="text-xs text-rose-300">{blockError}</p>}
            </div>
            {isBlocked && (
              <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200">Заблокирован</span>
            )}
          </div>
          <div className="grid gap-2 text-sm text-slate-200">
            <div>
              <span className="text-slate-400">Телефон:</span>{" "}
              {phoneLabel && phoneHref ? (
                <a href={phoneHref} className="text-indigo-300 hover:text-indigo-100">
                  {phoneLabel}
                </a>
              ) : (
                "-"
              )}
            </div>
            <div>
              <span className="text-slate-400">Телеграм:</span>{" "}
              {telegramHandle && telegramHref ? (
                <a href={telegramHref} target={telegramTarget} rel={telegramRel} className="text-indigo-300 hover:text-indigo-100">
                  {telegramHandle}
                </a>
              ) : (
                "-"
              )}
            </div>
            <div><span className="text-slate-400">Любимый барбер:</span> {user.Barber || "-"}</div>
          </div>
          <div>
            <p className="text-sm text-slate-400">История визитов</p>
            <div className="mt-2">
              <VisitHistoryList visits={visitHistory} emptyMessage="История пуста." />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
const BackupsPanel = ({ backups = [], onRestore, onCreate, onDelete }) => (
  <SectionCard
    title="Резервные копии"
    actions={
      <button onClick={onCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
        Создать копию
      </button>
    }
  >
    {backups.length === 0 ? (
      <p className="text-slate-400">История пуста.</p>
    ) : (
      <div className="space-y-2">
        {backups.map((backup) => {
          const label = formatBackupLabel(backup);
          const meta = formatBackupMeta(backup);
          return (
            <div key={backup} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
              <div>
                <p className="font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-500">{meta}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => onRestore(backup)} className="rounded-lg border border-slate-600 px-3 py-1 text-xs font-semibold text-indigo-200 hover:border-indigo-400 hover:text-white">
                  Восстановить
                </button>
                {onDelete && (
                  <button
                    onClick={() => onDelete(backup)}
                    className="inline-flex items-center rounded-lg border border-rose-600 px-3 py-1 text-xs font-semibold text-rose-200 hover:bg-rose-500/10"
                  >
                    <IconTrash className="mr-1 h-3.5 w-3.5" />
                    Удалить
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )}
  </SectionCard>
);
const AppointmentModal = ({
  open,
  appointment,
  options = {},
  appointments = [],
  schedules = [],
  onClose,
  onSave,
  onDelete,
  canDelete = false,
  isNew = false,
  clients = [],
  serviceCatalog = [],
}) => {
  const buildDraft = useCallback(
    (record) => (record ? { ...record, UserID: record.UserID || record.userId || '', Status: normalizeStatusValue(record.Status) } : null),
    []
  );
  const [draft, setDraft] = useState(buildDraft(appointment));
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [validationWarning, setValidationWarning] = useState('');
  useEffect(() => {
    if (!open) return;
    setDraft(buildDraft(appointment));
    setDetailsOpen(false);
    setValidationError('');
    setValidationWarning('');
  }, [appointment, buildDraft, open]);
  const currentAppointmentId = appointment ? getRecordId(appointment) : null;
  const updateWarningForDraft = useCallback(
    (nextDraft) => {
      if (!nextDraft) {
        setValidationWarning('');
        return;
      }
      const hasBarber = Boolean(normalizeText(nextDraft.Barber));
      const hasDate = Boolean(getDateOnlyValue(nextDraft.Date));
      const hasTime = Boolean(parseTimeRangeParts(nextDraft.Time || '').start);
      if (!hasBarber || !hasDate || !hasTime) {
        setValidationWarning('');
        return;
      }
      const { warning } = validateDraft(nextDraft);
      setValidationWarning(warning || '');
    },
    [validateDraft],
  );
  useEffect(() => {
    if (!open) return;
    updateWarningForDraft(draft);
  }, [
    open,
    draft?.Barber,
    draft?.Date,
    draft?.Time,
    schedules,
    appointments,
    updateWarningForDraft,
  ]);
  const validateDraft = useCallback(
    (nextDraft) => {
      if (!nextDraft) {
        return { error: 'Данные записи недоступны.', warning: '' };
      }
      const errors = [];
      const warnings = [];
      const missingFields = [];
      const timeParts = parseTimeRangeParts(nextDraft.Time || '');
      const hasTime = Boolean(timeParts.start);
      const selectedServices = parseMultiValue(nextDraft.Services);
      if (!normalizeText(nextDraft.CustomerName)) missingFields.push('клиент');
      if (!normalizeText(nextDraft.Barber)) missingFields.push('барбер');
      if (!getDateOnlyValue(nextDraft.Date)) missingFields.push('дата');
      if (!hasTime) missingFields.push('время');
      if (!normalizeStatusValue(nextDraft.Status)) missingFields.push('статус');
      if (!selectedServices.length) missingFields.push('услуга');
      if (missingFields.length) {
        errors.push(`Заполните поля: ${missingFields.join(', ')}.`);
      }
      const normalizedBarber = normalizeText(nextDraft.Barber).toLowerCase();
      const dateOnly = getDateOnlyValue(nextDraft.Date);
      let draftRange = null;
      if (normalizedBarber && dateOnly && hasTime) {
        const start = getAppointmentStartDate(nextDraft.Date, nextDraft.Time, nextDraft.startDateTime);
        if (start) {
          const end = ensureRangeEnd(start, getAppointmentEndDate(nextDraft.Date, nextDraft.Time, nextDraft.startDateTime));
          if (end) {
            draftRange = { start, end };
          }
        }
      }
      if (draftRange) {
        const currentId = getRecordId(nextDraft) || currentAppointmentId;
        const conflictExists = (appointments || []).some((record) => {
          if (!record) return false;
          const recordId = getRecordId(record);
          if (currentId && recordId && String(currentId) === String(recordId)) return false;
          const recordBarber = normalizeText(record.Barber).toLowerCase();
          if (recordBarber && normalizedBarber && recordBarber !== normalizedBarber) return false;
          if (getDateOnlyValue(record.Date) !== dateOnly) return false;
          if (!isActiveAppointmentStatus(record.Status)) return false;
          const start = resolveAppointmentStartDate(record);
          if (!start) return false;
          const end = ensureRangeEnd(start, resolveAppointmentEndDate(record));
          if (!end) return false;
          return rangesOverlap(draftRange, { start, end });
        });
        if (conflictExists) {
          errors.push('На это время уже есть другая запись для выбранного барбера.');
        }
      }
      if (draftRange && (schedules || []).length && normalizedBarber && dateOnly) {
        const relevantSlots = schedules.filter((slot) => normalizeText(slot.Barber).toLowerCase() === normalizedBarber);
        if (relevantSlots.length) {
          const dayIndex = getDateWeekdayIndex(dateOnly);
          const daySlots = relevantSlots.filter((slot) => {
            const slotDate = getDateOnlyValue(slot.Date);
            if (slotDate) return slotDate === dateOnly;
            return getDayIndex(slot.DayOfWeek) === dayIndex;
          });
          if (!daySlots.length) {
            warnings.push('Барбер не работает в выбранный день. Запись будет вне графика.');
          } else {
            const fitsSchedule = daySlots.some((slot) => {
              const slotTime = slot.Week || slot.Time || '';
              if (!slotTime) return false;
              const slotStart = getAppointmentStartDate(slot.Date || dateOnly, slotTime, slot.startDateTime);
              if (!slotStart) return false;
              const slotEnd = ensureRangeEnd(slotStart, getAppointmentEndDate(slot.Date || dateOnly, slotTime, slot.startDateTime));
              if (!slotEnd) return false;
              return draftRange.start >= slotStart && draftRange.end <= slotEnd;
            });
            if (!fitsSchedule) {
              warnings.push('Выбранное время не входит в рабочую смену барбера. Запись будет создана вне графика.');
            }
          }
        }
      }
      return {
        error: errors.join(' ').trim(),
        warning: warnings.join(' ').trim(),
      };
    },
    [appointments, schedules, currentAppointmentId]
  );
  const servicesSelection = parseMultiValue(draft?.Services);
  const serviceDurationLookup = useMemo(
    () =>
      new Map(
        (serviceCatalog || []).map((service) => [
          canonicalizeName(service?.name || '').toLowerCase(),
          Math.max(0, Number(service?.duration) || 0),
        ]),
      ),
    [serviceCatalog]
  );
  const getServicesDuration = useCallback(
    (servicesValue) =>
      normalizeMultiValueList(servicesValue).reduce((sum, serviceName) => {
        const key = canonicalizeName(serviceName).toLowerCase();
        return sum + (serviceDurationLookup.get(key) || 0);
      }, 0),
    [serviceDurationLookup]
  );
  const selectedServicesDuration = useMemo(
    () => getServicesDuration(draft?.Services),
    [draft?.Services, getServicesDuration]
  );
  const draftTimeParts = useMemo(() => parseTimeRangeParts(draft?.Time || ''), [draft?.Time]);
  const appointmentStartTime = draftTimeParts.start;
  const appointmentEndTime = useMemo(
    () => (
      (appointmentStartTime && selectedServicesDuration > 0
        ? addMinutesToTimeToken(appointmentStartTime, selectedServicesDuration)
        : '') || draftTimeParts.end || ''
    ),
    [appointmentStartTime, selectedServicesDuration, draftTimeParts.end]
  );
  const syncDraftTimeWithServices = useCallback(
    (nextDraft) => {
      if (!nextDraft || !isNew) return nextDraft;
      const start = extractTimeStart(nextDraft.Time || '');
      if (!start) return nextDraft;
      const duration = getServicesDuration(nextDraft.Services);
      const nextTime = duration > 0
        ? buildTimeRangeValue(start, addMinutesToTimeToken(start, duration))
        : buildTimeRangeValue(start, '');
      if (nextTime === (nextDraft.Time || '')) return nextDraft;
      return { ...nextDraft, Time: nextTime };
    },
    [getServicesDuration, isNew]
  );
  useEffect(() => {
    if (!open || !isNew) return;
    setDraft((prev) => {
      if (!prev) return prev;
      return syncDraftTimeWithServices(prev);
    });
  }, [open, isNew, selectedServicesDuration, syncDraftTimeWithServices]);
  if (!open || !draft) return null;
  const actionButtonClass = RESPONSIVE_ACTION_BUTTON_CLASS;
  const handleChange = (field, value) => {
    setValidationError('');
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = field === 'Services' || field === 'Time'
        ? syncDraftTimeWithServices({ ...prev, [field]: value })
        : { ...prev, [field]: value };
      updateWarningForDraft(nextDraft);
      return nextDraft;
    });
  };
  const handleStartTimeChange = (nextStart) => {
    const nextTime = nextStart ? buildTimeRangeValue(nextStart, '') : '';
    handleChange('Time', nextTime);
  };
  const isReminderSent = (value) => value === true || value === 'true' || value === 1 || value === '1';
  const getReminderLabel = (value) => (isReminderSent(value) ? 'Напомнено' : 'Не напомнено');
  const getReminderAccent = (value) => (isReminderSent(value) ? 'text-emerald-300' : 'text-slate-500');
  const recordDetails = [
    { key: 'user', label: 'UserID', value: draft.UserID || '-', accent: draft.UserID ? 'text-white' : 'text-slate-500' },
    {
      key: 'clientReminder',
      label: 'Напоминание клиенту (2ч)',
      value: getReminderLabel(draft.Reminder2hClientSent),
      accent: getReminderAccent(draft.Reminder2hClientSent),
    },
    {
      key: 'barberReminder',
      label: 'Напоминание барберу (2ч)',
      value: getReminderLabel(draft.Reminder2hBarberSent),
      accent: getReminderAccent(draft.Reminder2hBarberSent),
    },
  ];
  const submitDraft = (nextDraft) => {
    if (!nextDraft) return;
    onSave({
      id: nextDraft.id,
      payload: {
        CustomerName: nextDraft.CustomerName,
        Phone: nextDraft.Phone,
        Barber: nextDraft.Barber,
        Date: nextDraft.Date,
        Time: nextDraft.Time,
        Status: normalizeStatusValue(nextDraft.Status),
        Services: nextDraft.Services,
        UserID: nextDraft.UserID || '',
      },
      isNew,
    });
  };
  const handleSubmit = () => {
    const { error, warning } = validateDraft(draft);
    setValidationWarning(warning || '');
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError('');
    submitDraft(draft);
  };
  const handleMarkCompleted = () => {
    if (!draft) return;
    setValidationError('');
    setValidationWarning('');
    const nextDraft = { ...draft, Status: 'Выполнена' };
    setDraft(nextDraft);
    submitDraft(nextDraft);
  };
  const handleClientAutoFill = (client) => {
    if (!client) return;
    setValidationError('');
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = {
        ...prev,
        CustomerName: client.name || prev.CustomerName,
        Phone: client.phone || prev.Phone,
        Barber: prev.Barber || client.preferredBarber || '',
        UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || '',
      };
      updateWarningForDraft(nextDraft);
      return nextDraft;
    });
  };
  return (
    <Modal
	      title={isNew ? 'Новая запись' : (draft.CustomerName || 'Без имени')}
	      isOpen={open}
	      onClose={onClose}
	      footer={
	        <div className="flex flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:gap-3">
	          {!isNew && canDelete && (
	            <button
	              onClick={() => onDelete?.(draft)}
	              className={classNames(actionButtonClass, 'border border-rose-600 text-rose-200 hover:bg-rose-500/10')}
              aria-label="Удалить"
              title="Удалить"
            >
              <IconTrash className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Удалить</span>
            </button>
          )}
          {!isNew && (
            <button
              onClick={handleMarkCompleted}
              className={classNames(actionButtonClass, 'border border-emerald-500 text-emerald-200 hover:bg-emerald-500/10')}
              aria-label="Выполнено"
              title="Выполнено"
            >
              <IconCheck className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Выполнено</span>
            </button>
          )}
          <button
            onClick={onClose}
            className={classNames(actionButtonClass, 'border border-slate-600 text-white hover:bg-slate-800')}
            aria-label="Отмена"
            title="Отмена"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Отмена</span>
          </button>
          <button
            onClick={handleSubmit}
            className={classNames(actionButtonClass, 'bg-emerald-600 text-white hover:bg-emerald-500')}
            aria-label="Сохранить"
            title="Сохранить"
          >
            <IconSave className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Сохранить</span>
          </button>
        </div>
      }
    >
      {validationError && (
        <div className="mb-4 rounded-xl border border-rose-600 bg-rose-500/10 px-4 py-2 text-sm text-rose-200">{validationError}</div>
      )}
      {validationWarning && (
        <div className="mb-4 rounded-xl border border-amber-500/40 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">{validationWarning}</div>
      )}
	      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
	        <ClientLookupInput
	          label="Имя клиента"
	          value={draft.CustomerName || ''}
	          onChange={(nextValue) => handleChange('CustomerName', nextValue)}
          clients={clients}
          onSelectClient={handleClientAutoFill}
        />
        <div className="space-y-1">
          <label className="text-sm text-slate-300">Телефон</label>
          <input
            name="appointmentPhone"
            aria-label="Телефон клиента"
            type="tel"
            value={draft.Phone || ''}
            onChange={(event) => handleChange('Phone', event.target.value)}
            placeholder="+7..."
            className="h-11 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
          />
        </div>
        <select value={draft.Barber || ''} onChange={(event) => handleChange('Barber', event.target.value)} className="h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white">
          <option value="">Барбер</option>
          {(options.barbers || []).map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>
        <input
          name="appointmentDate"
          aria-label="Дата"
          type="date"
          value={draft.Date ? String(draft.Date).slice(0, 10) : ''}
          onChange={(event) => handleChange('Date', event.target.value)}
          className="h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
        />
        {isNew ? (
          <AppointmentTimeField
            startValue={appointmentStartTime}
            endValue={appointmentEndTime}
            onChange={handleStartTimeChange}
          />
        ) : (
          <TimeRangePicker
            value={draft.Time || ''}
            onChange={(nextValue) => handleChange('Time', nextValue)}
            placeholder="Выбрать время"
          />
        )}
        <div className="space-y-1">
          <label className="text-sm text-slate-300">Статус</label>
          <select value={draft.Status || ''} onChange={(event) => handleChange('Status', event.target.value)} className="h-11 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 text-white">
            <option value="">Статус</option>
            {(options.statuses || []).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
	        </select>
        </div>
	        <div className="col-span-full w-full min-w-0">
	          <MultiSelectCheckboxes
	            label="Услуги"
	            options={options.services || []}
	            value={servicesSelection}
	            onChange={(selected) => handleChange('Services', selected.join(', '))}
            placeholder="Нет доступных услуг"
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60">
        <button
          type="button"
          onClick={() => setDetailsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left"
        >
          <p className="text-sm font-semibold text-white">Данные о записи</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={classNames('h-4 w-4 text-slate-400 transition-transform', detailsOpen ? 'rotate-180' : 'rotate-0')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={classNames('overflow-hidden transition-all duration-200', detailsOpen ? 'max-h-64 border-t border-slate-800' : 'max-h-0')}>
          <dl className="divide-y divide-slate-800 px-4 py-2 text-sm text-slate-300">
            {recordDetails.map((item) => (
              <div key={item.key} className="flex items-center justify-between gap-3 py-2">
                <dt className="text-xs text-slate-400">{item.label}</dt>
                <dd className={classNames('text-right font-semibold', item.accent)}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Modal>
  );
};
const TablesWorkspace = ({
  apiRequest,
  sharedOptions,
  onOptionsUpdate,
  onOpenProfile,
  onOpenAppointmentRecord,
  clients = [],
  currentUser = null,
  liveAppointments = null,
  liveUpdatedAt = null,
  liveStatus = 'unknown',
  barbers = [],
  services = [],
  onBarberFieldChange,
  onSaveBarber,
  onAddBarber,
  onDeleteBarber,
  onServiceFieldChange,
  onServicePriceChange,
  onDeleteService,
  onAddService,
  onCreatePosition,
  onUpdatePosition,
  onDeletePosition,
  onActiveTableChange,
  preferredTable = null,
  onPreferredTableConsumed,
  onRequestConfirm = null,
  uploadAvatar,
  uploadCard,
  deleteAvatar,
  loadAvatarOptions,
  onBlockClient,
  onAdjustClientBs,
  dataTables = DEFAULT_DATA_TABLES,
  visibleTableOrder = DEFAULT_VISIBLE_TABLE_ORDER,
  role = ROLE_OWNER,
  applyFavoriteBarberRule = null,
}) => {
  const resolvedDataTables = useMemo(
    () => (Array.isArray(dataTables) && dataTables.length ? dataTables : DEFAULT_DATA_TABLES),
    [dataTables]
  );
  const resolvedVisibleTables = useMemo(
    () =>
      Array.isArray(visibleTableOrder) && visibleTableOrder.length
        ? visibleTableOrder
        : DEFAULT_VISIBLE_TABLE_ORDER,
    [visibleTableOrder]
  );
  const [activeTable, setActiveTable] = useLocalStorage('tables.active', 'Appointments');
  const [tables, setTables] = useState(() => resolvedDataTables.reduce((acc, table) => ({ ...acc, [table]: [] }), {}));
  const [dropdownOptions, setDropdownOptions] = useState(sharedOptions || { barbers: [], services: [], statuses: [] });
  const [tableError, setTableError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBarber, setSelectedBarber] = useLocalStorage('tables.barberFilter', 'all');
  const [hiddenStatuses, setHiddenStatuses] = useLocalStorage('tables.hiddenStatuses', []);
  const [hiddenColumnsMap, setHiddenColumnsMap] = useLocalStorage('tables.hiddenColumns', {
    Appointments: ['UserID'],
    Schedules: [],
    Users: [],
    Positions: [],
  });
  const [sortConfigs, setSortConfigs] = useLocalStorage(
    'tables.sortConfigs',
    DEFAULT_DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: TABLE_CONFIG[table]?.defaultSort || null }), {})
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [showPastAppointments, setShowPastAppointments] = useLocalStorage('tables.showPastAppointments', true);
  const [groupAppointmentsByDate, setGroupAppointmentsByDate] = useLocalStorage('tables.groupAppointmentsByDate', true);
  const [appointmentCalendarView, setAppointmentCalendarView] = useLocalStorage('tables.appointmentsCalendarView', 'week');
  const [appointmentCalendarScale, setAppointmentCalendarScale] = useLocalStorage('tables.appointmentsCalendarScale', 'normal');
  const [appointmentCalendarDate, setAppointmentCalendarDate] = useLocalStorage('tables.appointmentsCalendarDate', getLocalISODateString());
  const restrictStaffBarberFilter = role === ROLE_STAFF && activeTable === 'Appointments';
  const staffBarberId = currentUser?.barberId || null;
  const appointmentTemplate = useMemo(
    () => ({
      id: null,
      CustomerName: '',
      Phone: '',
      Barber: pickBarberForUser(currentUser, dropdownOptions.barbers || []),
      Date: getLocalISODateString(),
      Time: '',
      Status: normalizeStatusValue((dropdownOptions.statuses && dropdownOptions.statuses[0]) || 'Активная'),
      Services: '',
      UserID: '',
    }),
    [dropdownOptions, currentUser?.displayName, currentUser?.username]
  );
  const staffBarberChoice = useMemo(
    () => pickBarberForUser(currentUser, dropdownOptions.barbers || []),
    [currentUser, dropdownOptions.barbers],
  );
  useEffect(() => {
    setTables((prev) =>
      resolvedDataTables.reduce((acc, table) => ({ ...acc, [table]: prev[table] || [] }), {})
    );
  }, [resolvedDataTables]);
  useEffect(() => {
    if (sharedOptions) {
      setDropdownOptions({
        ...sharedOptions,
        statuses: normalizeStatusList(sharedOptions.statuses || []),
      });
    }
  }, [sharedOptions]);
  useEffect(() => {
    if (!TABLE_CONFIG[activeTable] || !resolvedVisibleTables.includes(activeTable)) {
      setActiveTable(resolvedVisibleTables[0] || 'Appointments');
    }
  }, [activeTable, resolvedVisibleTables, setActiveTable]);
  useEffect(() => {
    onActiveTableChange?.(activeTable);
  }, [activeTable, onActiveTableChange]);
  useEffect(() => {
    if (!preferredTable) return;
    const nextTable = preferredTable;
    if (resolvedVisibleTables.includes(nextTable)) {
      setActiveTable(nextTable);
    }
    onPreferredTableConsumed?.();
  }, [preferredTable, resolvedVisibleTables, setActiveTable, onPreferredTableConsumed]);
  useEffect(() => {
    if (!restrictStaffBarberFilter) return;
    const fallback =
      staffBarberChoice ||
      (Array.isArray(dropdownOptions.barbers) && dropdownOptions.barbers.length ? dropdownOptions.barbers[0] : '');
    if (!fallback) return;
    if (selectedBarber === fallback) return;
    setSelectedBarber(fallback);
  }, [restrictStaffBarberFilter, selectedBarber, staffBarberChoice, dropdownOptions.barbers, setSelectedBarber]);
  useEffect(() => {
    setHiddenStatuses((prev) => {
      const allowedStatuses = normalizeStatusList(dropdownOptions.statuses || BOT_SUPPORTED_STATUS_OPTIONS);
      const normalized = Array.from(
        new Set(prev.map((status) => normalizeStatusValue(status)).filter((status) => allowedStatuses.includes(status)))
      );
      if (allowedStatuses.length && normalized.length >= allowedStatuses.length) {
        return [];
      }
      if (normalized.length === prev.length && normalized.every((value, index) => value === prev[index])) {
        return prev;
      }
      return normalized;
    });
  }, [dropdownOptions.statuses, setHiddenStatuses]);
  useEffect(() => {
    setSortConfigs((prev) => {
      const current = prev?.Appointments;
      if (current?.key === 'Date' && current?.direction === 'asc') {
        return { ...prev, Appointments: { ...current, direction: 'desc' } };
      }
      if (current == null) {
        return { ...prev, Appointments: { key: 'Date', direction: 'desc' } };
      }
      return prev;
    });
  }, [setSortConfigs]);
  const fetchTables = useCallback(async () => {
    setIsFetching(true);
    setTableError('');
    try {
      const responses = await Promise.all([
        ...resolvedDataTables.map((table) =>
          apiRequest(
            table === 'Appointments'
              ? '/appointments'
              : table === 'Barbers'
                ? '/barbers'
              : table === 'Services'
                ? '/services/full'
              : table === 'Schedules'
                ? '/schedules'
                : `/${table}`
          )
        ),
        apiRequest('/options/appointments'),
      ]);
      const nextTables = {};
      resolvedDataTables.forEach((table, index) => {
        const responsePayload = responses[index] || [];
        const records =
          table === 'Services'
            ? Array.isArray(responsePayload?.services)
              ? responsePayload.services
              : []
            : responsePayload;
        nextTables[table] = table === 'Appointments' ? records.map((row) => ({ ...row, Status: normalizeStatusValue(row.Status) })) : records;
      });
      const rawOptions = responses[resolvedDataTables.length] || { barbers: [], services: [], statuses: [] };
      const normalizedOptions = {
        ...rawOptions,
        statuses: normalizeStatusList(rawOptions.statuses || []),
      };
      setTables(nextTables);
      setDropdownOptions(normalizedOptions);
      onOptionsUpdate?.(normalizedOptions);
    } catch (error) {
      console.error('Table fetch failed', error);
      setTableError(error.message || 'Не удалось загрузить таблицы');
    } finally {
      setIsFetching(false);
    }
  }, [apiRequest, onOptionsUpdate, resolvedDataTables]);
  useEffect(() => {
    fetchTables();
  }, [fetchTables]);
  const refreshPositions = useCallback(async () => {
    try {
      const records = await apiRequest('/Positions');
      setTables((prev) => ({ ...prev, Positions: Array.isArray(records) ? records : [] }));
    } catch (error) {
      console.error('Positions refresh failed', error);
      throw error;
    }
  }, [apiRequest]);
  useEffect(() => {
    if (!Array.isArray(liveAppointments)) return;
    setTables((prev) => ({
      ...prev,
      Appointments: liveAppointments.map((row) => ({
        ...row,
        Status: normalizeStatusValue(row.Status),
      })),
    }));
  }, [liveAppointments, liveUpdatedAt]);
  const currentColumns = TABLE_COLUMNS[activeTable] || [];
  const hiddenColumns = hiddenColumnsMap[activeTable] || [];
  const visibleColumns = currentColumns.filter((column) => !hiddenColumns.includes(column.key));
  const sortConfig = sortConfigs[activeTable] || TABLE_CONFIG[activeTable]?.defaultSort || null;
  const positions = tables.Positions || [];
  const processedRows = useMemo(() => {
    const source = tables[activeTable] || [];
    if (!source.length) return [];
    let rows = [...source];
    if (TABLE_CONFIG[activeTable]?.supportsBarberFilter && selectedBarber !== 'all') {
      rows = rows.filter((row) => normalizeText(row.Barber).toLowerCase() === normalizeText(selectedBarber).toLowerCase());
    }
    if (activeTable === 'Appointments') {
      const nowTs = Date.now();
      rows = rows.filter((row) => {
        if (hiddenStatuses.length && hiddenStatuses.includes(row.Status)) return false;
        if (showPastAppointments) return true;
        return shouldDisplayAppointment(row, nowTs);
      });
    }
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      rows = rows.filter((row) => visibleColumns.some((column) => normalizeText(row[column.key]).toLowerCase().includes(query)));
    }
    if (sortConfig?.key) {
      const columnDef = currentColumns.find((column) => column.key === sortConfig.key);
      rows.sort((a, b) => {
        const left = resolveSortValue(a, columnDef, activeTable);
        const right = resolveSortValue(b, columnDef, activeTable);
        if (left === right) return 0;
        if (typeof left === 'number' && typeof right === 'number') {
          return sortConfig.direction === 'asc' ? left - right : right - left;
        }
        return sortConfig.direction === 'asc' ? (left > right ? 1 : -1) : left > right ? -1 : 1;
      });
    }
    return rows;
  }, [tables, activeTable, selectedBarber, hiddenStatuses, searchTerm, visibleColumns, sortConfig, showPastAppointments]);
  const handleSort = (columnKey) => {
    setSortConfigs((prev) => {
      const current = prev[activeTable];
      const direction = current?.key === columnKey && current.direction === 'asc' ? 'desc' : 'asc';
      return { ...prev, [activeTable]: { key: columnKey, direction } };
    });
  };
  const toggleColumn = (columnKey) => {
    setHiddenColumnsMap((prev) => {
      const hidden = new Set(prev[activeTable] || []);
      if (hidden.has(columnKey)) {
        hidden.delete(columnKey);
      } else if (hidden.size < currentColumns.length - 1) {
        hidden.add(columnKey);
      }
      return { ...prev, [activeTable]: Array.from(hidden) };
    });
  };
  const toggleStatus = (status) => {
    const normalized = normalizeStatusValue(status);
    setHiddenStatuses((prev) => (prev.includes(normalized) ? prev.filter((item) => item !== normalized) : [...prev, normalized]));
  };
  const handleUpdate = async (recordId, data, { tableId: overrideTableId } = {}) => {
    if (!recordId) return;
    const tableId = overrideTableId || activeTable;
    const normalizedData =
      tableId === 'Appointments' && data?.Status !== undefined
        ? { ...data, Status: normalizeStatusValue(data.Status) }
        : data;
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return {
        ...prev,
        [tableId]: list.map((row) => (getRecordId(row) === recordId ? { ...row, ...normalizedData } : row)),
      };
    });
    try {
      const payload =
        tableId === 'Schedules'
          ? { ...(original.find((row) => getRecordId(row) === recordId) || {}), ...normalizedData }
          : normalizedData;
      const endpoint =
        tableId === 'Appointments'
          ? `/appointments/${encodeURIComponent(recordId)}`
          : tableId === 'Barbers'
            ? `/barbers/${encodeURIComponent(recordId)}`
          : tableId === 'Services'
            ? `/services/full/${encodeURIComponent(recordId)}`
          : tableId === 'Schedules'
            ? `/schedules/${encodeURIComponent(recordId)}`
            : `/${tableId}/${encodeURIComponent(recordId)}`;
      await apiRequest(endpoint, { method: 'PUT', body: JSON.stringify(payload) });
    } catch (error) {
      console.error('Update failed', error);
      setTableError(error.message || 'Не удалось обновить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };
  const handleDelete = async (record, { skipConfirm = false } = {}) => {
    if (!record || activeTable === 'Schedules') return;
    const tableId = activeTable;
    const confirmCopy = (() => {
      switch (tableId) {
        case 'Users':
          return { title: 'Удалить клиента?', message: 'Клиент будет удален без возможности восстановления.' };
        case 'Appointments':
          return { title: 'Удалить запись?', message: 'Запись будет удалена без возможности восстановления.' };
        default:
          return { title: 'Удалить запись?', message: 'Запись будет удалена.' };
      }
    })();
    if (!skipConfirm) {
      const confirmed = onRequestConfirm
        ? await onRequestConfirm({
            ...confirmCopy,
            confirmLabel: 'Удалить',
            tone: 'danger',
          })
        : true;
      if (!confirmed) return;
    }
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return { ...prev, [tableId]: list.filter((row) => getRecordId(row) !== getRecordId(record)) };
    });
    try {
      const endpoint =
        tableId === 'Appointments'
          ? `/appointments/${encodeURIComponent(record.id)}`
          : `/${tableId}/${encodeURIComponent(record.id)}`;
      await apiRequest(endpoint, { method: 'DELETE' });
    } catch (error) {
      console.error('Delete failed', error);
      setTableError(error.message || 'Не удалось удалить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };
  const handleCreateRecord = async (payload) => {
    const tableId = activeTable;
    setCreateModalOpen(false);
    try {
      const normalizedPayload =
        tableId === 'Appointments' && payload?.Status !== undefined
          ? { ...payload, Status: normalizeStatusValue(payload.Status) }
          : payload;
      const endpoint = tableId === 'Appointments' ? '/appointments' : `/${tableId}`;
      await apiRequest(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalizedPayload),
      });
      fetchTables();
    } catch (error) {
      console.error('Create failed', error);
      setTableError(error.message || 'Не удалось создать запись');
    }
  };
  const fetchClientProfile = useCallback(
    async (client) => {
      if (!client?.Name) return null;
      const payload = await apiRequest(`/user-profile/${encodeURIComponent(client.Name)}`);
      if (typeof applyFavoriteBarberRule === 'function') {
        return applyFavoriteBarberRule(payload);
      }
      return payload;
    },
    [apiRequest, applyFavoriteBarberRule]
  );
  const loadAvatarAssets = useCallback(
    () => (typeof loadAvatarOptions === 'function' ? loadAvatarOptions() : apiRequest('/assets/avatars')),
    [apiRequest, loadAvatarOptions]
  );
  const tableSettings = TABLE_CONFIG[activeTable] || {};
  const isCustomTable = tableSettings?.mode === 'custom';
  return (
    <div className="space-y-4">
      <div className="hidden flex-wrap gap-2 lg:flex">
        {resolvedVisibleTables.map((table) => (
          <button
            key={table}
            onClick={() => setActiveTable(table)}
            className={classNames(
              'rounded-full px-4 py-2 text-sm',
              activeTable === table ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            )}
          >
            {TABLE_CONFIG[table]?.label || table}
          </button>
        ))}
      </div>
      {isCustomTable ? (
        <div className="space-y-6">
          {activeTable === 'Barbers' && (
            <BarbersView
              barbers={barbers}
              positions={positions}
              onFieldChange={onBarberFieldChange}
              onSave={onSaveBarber}
              onAdd={onAddBarber}
              onDelete={onDeleteBarber}
              loadAvatarOptions={loadAvatarAssets}
              uploadAvatar={uploadAvatar}
              uploadCard={uploadCard}
              deleteAvatar={deleteAvatar}
            />
          )}
          {activeTable === 'Schedules' && (
            <SchedulesView
              schedules={tables.Schedules || []}
              barbers={barbers}
              currentUser={currentUser}
              onScheduleUpdate={
                role === ROLE_OWNER || role === ROLE_STAFF || role === ROLE_CREATOR
                  ? (recordId, payload) => handleUpdate(recordId, payload, { tableId: 'Schedules' })
                  : null
              }
            />
          )}
          {activeTable === 'Services' && (
            <ServicesView
              services={services}
              barbers={barbers}
              onFieldChange={onServiceFieldChange}
              onPriceChange={onServicePriceChange}
              onDelete={onDeleteService}
              onAdd={onAddService}
              role={role}
            />
          )}
          {activeTable === 'Positions' && (
            <PositionsView
              positions={positions}
              onCreate={onCreatePosition}
              onUpdate={onUpdatePosition}
              onDelete={onDeletePosition}
              onRefresh={refreshPositions}
              requestConfirm={onRequestConfirm}
            />
          )}
          {activeTable === 'Revenue' && (
            <RevenueView apiRequest={apiRequest} barbers={barbers} role={role} staffBarberId={staffBarberId} />
          )}
        </div>
      ) : (
        <>
          {tableSettings && (
        <SectionCard title={tableSettings.label}>
          {tableError && <ErrorBanner message={tableError} />}
          <TableToolbar
            tableId={activeTable}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            supportsBarberFilter={tableSettings.supportsBarberFilter}
            selectedBarber={selectedBarber}
            setSelectedBarber={setSelectedBarber}
            barbers={dropdownOptions.barbers}
            supportsStatusFilter={tableSettings.supportsStatusFilter}
            statuses={dropdownOptions.statuses}
            hiddenStatuses={hiddenStatuses}
            toggleStatus={toggleStatus}
            resetStatuses={() => setHiddenStatuses([])}
            columns={currentColumns}
            hiddenColumns={hiddenColumns}
            toggleColumn={toggleColumn}
            canCreate={tableSettings.canCreate}
            onOpenCreate={() => setCreateModalOpen(true)}
            onRefresh={fetchTables}
            showPastAppointments={showPastAppointments}
            setShowPastAppointments={setShowPastAppointments}
            supportsGrouping={activeTable === 'Appointments'}
            groupByDate={groupAppointmentsByDate}
            setGroupByDate={setGroupAppointmentsByDate}
            allowAllBarbersOption={!restrictStaffBarberFilter}
            appointmentCalendarView={activeTable === 'Appointments' ? appointmentCalendarView : 'week'}
            setAppointmentCalendarView={activeTable === 'Appointments' ? setAppointmentCalendarView : null}
            appointmentCalendarScale={activeTable === 'Appointments' ? appointmentCalendarScale : 'normal'}
            setAppointmentCalendarScale={activeTable === 'Appointments' ? setAppointmentCalendarScale : null}
          />
          {isFetching ? (
            <LoadingState label="Обновляю таблицы..." />
          ) : (
            <div className="mt-4">
              {activeTable === 'Users' ? (
                <ClientsList
                  clients={processedRows}
                  barbers={dropdownOptions.barbers || []}
                  onUpdate={handleUpdate}
                  onAdjustBs={onAdjustClientBs}
                  onDelete={handleDelete}
                  fetchHistory={fetchClientProfile}
                  onRequestConfirm={onRequestConfirm}
                  onBlockClient={onBlockClient}
                />
              ) : (
                <DataTable
                  tableId={activeTable}
                  rows={processedRows}
                  columns={currentColumns}
                  hiddenColumns={hiddenColumns}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                  onUpdate={handleUpdate}
                  onDelete={tableSettings.canCreate ? handleDelete : null}
                  options={dropdownOptions}
                  onOpenProfile={onOpenProfile}
                  onOpenAppointment={activeTable === 'Appointments' ? onOpenAppointmentRecord : null}
                  groupByDate={activeTable === 'Appointments' ? groupAppointmentsByDate : false}
                  appointmentCalendarView={activeTable === 'Appointments' ? appointmentCalendarView : 'week'}
                  appointmentCalendarScale={activeTable === 'Appointments' ? appointmentCalendarScale : 'normal'}
                  appointmentCalendarDate={activeTable === 'Appointments' ? appointmentCalendarDate : ''}
                  setAppointmentCalendarDate={activeTable === 'Appointments' ? setAppointmentCalendarDate : null}
                  setAppointmentCalendarView={activeTable === 'Appointments' ? setAppointmentCalendarView : null}
                />
              )}
            </div>
          )}
        </SectionCard>
      )}
          {tableSettings.canCreate &&
            (activeTable === 'Appointments' ? (
              <AppointmentModal
                open={createModalOpen}
                appointment={appointmentTemplate}
                options={dropdownOptions}
                onClose={() => setCreateModalOpen(false)}
                onSave={({ payload }) => handleCreateRecord(payload)}
                isNew
                clients={clients}
                serviceCatalog={services}
              />
            ) : (
              <CreateRecordModal
                isOpen={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSave={handleCreateRecord}
                columns={currentColumns}
                tableName={tableSettings.label}
                options={dropdownOptions}
                tableId={activeTable}
                clients={clients}
                hiddenFields={activeTable === 'Appointments' ? ['UserID', 'Reminder2hClientSent', 'Reminder2hBarberSent'] : []}
              />
            ))}
        </>
      )}
    </div>
  );
};
const BotControlView = ({
  status,
  settings,
  backups = [],
  messages = [],
  onToggleEnabled,
  onStart,
  onStop,
  onRestart,
  onSaveSettings,
  onSaveMessage,
  onRestoreBackup,
  onCreateBackup,
  onDeleteBackup,
  licenseStatus,
  updateInfo,
  onRefreshUpdate,
  onApplyUpdate,
  onRestartSystem,
  pendingReloadReason = null,
  systemBusy,
  onUpdateToken = null,
  viewMode = 'bot',
  token = null,
  menu = null,
  onSaveMenu = null,
  onReloadMenu = null,
  menuSaving = false,
  loadMenuImages = null,
  uploadMenuImage = null,
  role = ROLE_OWNER,
}) => {
  const [description, setDescription] = useState(settings?.botDescription || '');
  const [about, setAbout] = useState(settings?.aboutText || '');
  const [tokenDraft, setTokenDraft] = useState(token || '');
  const [savingToken, setSavingToken] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const descriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const autosizeTextArea = useCallback((element) => {
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }, []);
  useEffect(() => {
    setDescription(settings?.botDescription || '');
    setAbout(settings?.aboutText || '');
  }, [settings]);
  useEffect(() => {
    setTokenDraft(token || '');
    setShowToken(false);
  }, [token]);
  useLayoutEffect(() => {
    if (viewMode !== 'bot') return undefined;
    const frame = requestAnimationFrame(() => {
      autosizeTextArea(descriptionRef.current);
      autosizeTextArea(aboutRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [viewMode, description, about, autosizeTextArea]);
  const handleTokenSave = useCallback(async () => {
    if (!onUpdateToken) return;
    const value = (tokenDraft || '').trim();
    if (!value) return;
    setSavingToken(true);
    try {
      await onUpdateToken(value);
    } catch (error) {
      console.warn('Bot token update failed', error);
    } finally {
      setSavingToken(false);
    }
  }, [onUpdateToken, tokenDraft]);
  const updateAvailable = Boolean(updateInfo?.available ?? updateInfo?.updateAvailable);
  const currentVersionLabel =
    updateInfo?.currentVersionLabel || updateInfo?.currentVersion || updateInfo?.version || '-';
  const latestVersionLabel =
    updateInfo?.latestVersionLabel || updateInfo?.latestVersion || updateInfo?.version || '-';
  const checkedAtLabel = updateInfo?.checkedAt ? formatDate(updateInfo.checkedAt) : '—';
  const publishedAtLabel = updateInfo?.publishedAt ? formatDate(updateInfo.publishedAt) : null;
  const updateStatusLabel =
    updateInfo?.details ||
    (updateAvailable ? 'Доступно обновление' : updateInfo ? 'Установлена актуальная версия' : 'Нет данных');
  const updateSourceLabel = updateInfo?.source || null;
  const updateSourceUrl = updateInfo?.sourceUrl || null;
  const botRunning = Boolean(status?.running);
  const normalizedTokenDraft = (tokenDraft || '').trim();
  const currentTokenValue = token || '';
  const canSaveToken = Boolean(onUpdateToken && normalizedTokenDraft && normalizedTokenDraft !== currentTokenValue);
  const restartDisabled = systemBusy || typeof onRestartSystem !== 'function';
  const updateButtonLabel = systemBusy && pendingReloadReason !== 'restart' ? 'Обновление…' : 'Обновить';
  const restartButtonLabel = systemBusy && pendingReloadReason === 'restart' ? 'Перезапуск…' : 'Перезапуск';
  const isCreator = role === ROLE_CREATOR;
  const licenseList = Array.isArray(licenseStatus?.licenses) ? licenseStatus.licenses : [];
  const hasLicenseList = isCreator && licenseList.length > 0;
  if (viewMode === 'constructor') {
    return (
      <BotMenuBuilder
        menu={menu}
        onSave={onSaveMenu}
        onReload={onReloadMenu}
        isSaving={menuSaving}
        loadMenuImages={loadMenuImages}
        onUploadMenuImage={uploadMenuImage}
      />
    );
  }
  if (viewMode === 'system') {
    return (
      <div className="space-y-6">
        <BackupsPanel backups={backups} onRestore={onRestoreBackup} onCreate={onCreateBackup} onDelete={onDeleteBackup} />
        <SectionCard title="Лицензия и обновления">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Лицензия</p>
              <p className="mt-1">Статус: {licenseStatus?.valid ? 'Активна' : 'Не подтверждена'}</p>
              {licenseStatus?.license?.owner && <p>Владелец: {licenseStatus.license.owner}</p>}
              {licenseStatus?.license?.expiresAt && <p>Действует до {formatDate(licenseStatus.license.expiresAt)}</p>}
              {licenseStatus?.license?.number && <p>Номер: {licenseStatus.license.number}</p>}
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Обновления</p>
              <p className="mt-1">Текущая версия: {currentVersionLabel}</p>
              <p>Доступная версия: {latestVersionLabel}</p>
              <p>Проверено: {checkedAtLabel}</p>
              {publishedAtLabel && <p>Релиз: {publishedAtLabel}</p>}
              <p>Статус: {updateStatusLabel}</p>
              {updateSourceLabel && (
                <p>
                  Источник:{' '}
                  {updateSourceUrl ? (
                    <a href={updateSourceUrl} className="text-indigo-300 hover:text-indigo-100" target="_blank" rel="noreferrer">
                      {updateSourceLabel}
                    </a>
                  ) : (
                    updateSourceLabel
                  )}
                </p>
              )}
              <div className="mt-3 flex flex-nowrap items-stretch gap-1.5 text-xs sm:flex-wrap sm:gap-2 sm:text-sm">
                <button
                  onClick={onRefreshUpdate}
                  disabled={systemBusy}
                  className="rounded-lg border border-slate-600 px-2.5 py-2 text-[11px] text-white whitespace-nowrap hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                >
                  Проверить
                </button>
                <button
                  onClick={onApplyUpdate}
                  disabled={systemBusy || !updateAvailable}
                  className="rounded-lg bg-emerald-600 px-2.5 py-2 text-[11px] text-white whitespace-nowrap hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                >
                  {updateButtonLabel}
                </button>
                <button
                  onClick={onRestartSystem}
                  disabled={restartDisabled}
                  className="rounded-lg bg-amber-600 px-2.5 py-2 text-[11px] text-white whitespace-nowrap hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                >
                  {restartButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </SectionCard>
        {hasLicenseList && (
          <SectionCard title="Авторизованные организации">
            <div className="grid gap-3 md:grid-cols-2">
              {licenseList.map((item, index) => {
                const name = item.name || item.owner || 'Организация';
                const key = item.key || item.number || '';
                return (
                  <div key={item.key || item.owner || index} className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
                    <p className="font-semibold text-white">{name}</p>
                    {key && <p className="text-xs text-slate-400">Ключ: {key}</p>}
                    {item.expiresAt && <p className="text-xs text-slate-400">Действует до {formatDate(item.expiresAt)}</p>}
                  </div>
                );
              })}
            </div>
          </SectionCard>
        )}
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <SectionCard
        title="Статус бота"
        actions={
          <div className="flex gap-2 text-sm">
            {!botRunning && (
              <button
                type="button"
                onClick={onStart}
                aria-label="Запустить"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 p-0 text-white sm:h-10 sm:w-auto sm:px-4 sm:py-2"
              >
                <span className="sm:hidden" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M6 4.75a.75.75 0 0 1 1.14-.64l7 4.25a.75.75 0 0 1 0 1.28l-7 4.25A.75.75 0 0 1 6 13.25v-8.5Z" />
                  </svg>
                </span>
                <span className="sr-only sm:hidden">Запустить</span>
                <span className="hidden sm:inline">Запустить</span>
              </button>
            )}
            {botRunning && (
              <button
                type="button"
                onClick={onStop}
                aria-label="Остановить"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-600 p-0 text-white sm:h-10 sm:w-auto sm:px-4 sm:py-2"
              >
                <span className="sm:hidden" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <rect x="4.25" y="4.25" width="11.5" height="11.5" rx="1.5" />
                  </svg>
                </span>
                <span className="sr-only sm:hidden">Остановить</span>
                <span className="hidden sm:inline">Остановить</span>
              </button>
            )}
            <button
              type="button"
              onClick={onRestart}
              aria-label="Перезапустить"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-600 p-0 text-white sm:h-10 sm:w-auto sm:px-4 sm:py-2"
            >
              <span className="sm:hidden" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.5 7.5A6 6 0 0 0 5 5.5" />
                  <path d="M15.5 7.5v-3h-3" />
                  <path d="M4.5 12.5A6 6 0 0 0 15 14.5" />
                  <path d="M4.5 12.5v3h3" />
                </svg>
              </span>
              <span className="sr-only sm:hidden">Перезапустить</span>
              <span className="hidden sm:inline">Перезапустить</span>
            </button>
          </div>
        }
      >
        <p className="text-slate-300">Состояние: {status?.running ? 'работает' : 'остановлен'}</p>
        <label className="mt-3 inline-flex items-center gap-2 text-slate-300">
          <input
            type="checkbox"
            name="botEnabled"
            aria-label="Автостарт вместе с CRM"
            checked={settings?.isBotEnabled !== false}
            onChange={(event) => onToggleEnabled(event.target.checked)}
          />
          Автостарт вместе с CRM
        </label>
        <div className="mt-4">
          <label className="text-sm text-slate-300">Telegram-токен</label>
          <div className="mt-1 flex items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <input
                name="botToken"
                aria-label="Telegram-токен"
                type={showToken ? 'text' : 'password'}
                value={tokenDraft}
                onChange={(event) => setTokenDraft(event.target.value)}
                className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 pr-16 font-mono text-sm text-white"
                placeholder="1234567890:ABC-DEF"
                spellCheck={false}
                autoComplete="off"
              />
              <button
                type="button"
                aria-label={showToken ? 'Скрыть токен' : 'Показать токен'}
                onClick={() => setShowToken((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 hover:text-white"
              >
                <EyeIcon open={showToken} />
              </button>
            </div>
            <button
              onClick={handleTokenSave}
              disabled={!canSaveToken || savingToken}
              className="flex-none rounded-lg border border-indigo-500 bg-indigo-600/30 px-4 py-2 text-sm font-semibold text-indigo-100 hover:bg-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {savingToken ? 'Сохранение...' : 'Сохранить'}
            </button>
          </div>
          {!token && (
            <p className="mt-2 text-xs text-slate-400">
              Укажите токен и сохраните изменения — CRM сохранит этот ключ в базе и перезапустит/остановит бота автоматически.
            </p>
          )}
        </div>
      </SectionCard>
      <SectionCard title="Тексты бота">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Описание лендинга</label>
            <textarea
              ref={descriptionRef}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={1}
              className="w-full resize-none rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Блок «О нас»</label>
            <textarea
              ref={aboutRef}
              value={about}
              onChange={(event) => setAbout(event.target.value)}
              rows={1}
              className="w-full resize-none rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white"
            />
          </div>
          <button onClick={() => onSaveSettings({ botDescription: description, aboutText: about })} className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
            Сохранить тексты
          </button>
        </div>
      </SectionCard>
    </div>
  );
};
const SystemSettingsView = ({ section = 'bot', onSectionChange, ...props }) => {
  const activeSection = SYSTEM_SUB_SECTIONS.some((tab) => tab.id === section) ? section : 'bot';
  useEffect(() => {
    if (activeSection !== section) {
      onSectionChange?.('bot');
    }
  }, [activeSection, section, onSectionChange]);
  return (
    <div className="space-y-4">
      <div className="hidden flex-wrap gap-2 lg:flex">
        {SYSTEM_SUB_SECTIONS.map((tab) => {
          const isActive = tab.id === activeSection;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSectionChange?.(tab.id)}
              className={classNames(
                'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                isActive ? 'bg-indigo-600 text-white shadow shadow-indigo-900/40' : 'bg-slate-800/70 text-slate-300 hover:text-white'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {activeSection === 'site' ? <SiteSettingsView {...props} /> : <BotControlView {...props} viewMode={activeSection} />}
    </div>
  );
};

const SITE_PAGE_TABS = Object.freeze([
  { id: 'home', label: 'Главная' },
  { id: 'referral', label: 'Рефералы' },
  { id: 'shop', label: 'Магазин' },
]);

const createSitePromoDraft = () => ({
  title: '',
  subtitle: '',
  imageUrl: '',
  details: '',
});

const createReferralRewardDraft = () => ({
  id: `reward-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
  label: '',
  bsAmount: 0,
});

const createReferralLevelDraft = () => ({
  id: `level-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
  name: '',
  minReferrals: 0,
  maxReferrals: '',
  serviceRewards: [createReferralRewardDraft()],
});

const SiteImageUploadField = ({ label, value = '', onChange, onUploadImage = null, helperText = '' }) => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const preview = normalizeImagePath(value || '');

  const handleFileChange = useCallback(async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || typeof onUploadImage !== 'function') return;
    if (!file.type.startsWith('image/')) {
      setError('Нужен файл изображения.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const data = await readFileAsDataUrl(file);
      const result = await onUploadImage({ name: file.name, data });
      const nextValue = normalizeImagePath(result?.path || result?.image || '');
      onChange?.(nextValue);
    } catch (uploadError) {
      setError(uploadError.message || 'Не удалось загрузить изображение.');
    } finally {
      setBusy(false);
    }
  }, [onUploadImage, onChange]);

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="h-24 w-full max-w-[160px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {preview ? (
              <img src={preview} alt={label} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center px-3 text-center text-xs text-slate-500">Изображение не загружено</div>
            )}
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap gap-2">
              <label className="inline-flex cursor-pointer items-center rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                {busy ? 'Загрузка...' : preview ? 'Заменить изображение' : 'Загрузить изображение'}
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={busy || typeof onUploadImage !== 'function'} />
              </label>
              {preview ? (
                <button type="button" onClick={() => onChange?.('')} className="rounded-xl border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
                  Удалить
                </button>
              ) : null}
            </div>
            {helperText ? <p className="text-xs leading-5 text-slate-500">{helperText}</p> : null}
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const SiteSettingsView = ({ siteConfig = null, onSaveSite = null, siteSaving = false, onUploadSiteImage = null, services = [], siteOnlineStats = null }) => {
  const [draft, setDraft] = useState(() => siteConfig || {});
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    setDraft(siteConfig || {});
  }, [siteConfig]);

  const updateSectionField = (section, key, value) =>
    setDraft((prev) => ({ ...prev, [section]: { ...(prev?.[section] || {}), [key]: value } }));
  const updateHomeField = (key, value) => updateSectionField('home', key, value);
  const updateReferralField = (key, value) => updateSectionField('referral', key, value);
  const updateShopField = (key, value) => updateSectionField('shop', key, value);

  const promos = Array.isArray(draft?.home?.promos) ? draft.home.promos : [];
  const referralLevels = Array.isArray(draft?.referral?.levels) ? draft.referral.levels : [];
  const serviceOptions = useMemo(
    () => Array.from(new Set((Array.isArray(services) ? services : []).map((service) => normalizeText(service?.name)).filter(Boolean))),
    [services]
  );
  const derivedReferralRewardColumns = useMemo(() => {
    const labels = [];
    referralLevels.forEach((level) => {
      const rewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
      rewards.forEach((reward) => {
        const label = normalizeText(reward?.label);
        if (label && !labels.includes(label)) labels.push(label);
      });
    });
    return labels.map((label, index) => ({ id: `column-${index + 1}`, labels: [label] }));
  }, [referralLevels]);
  const referralRewardColumns = useMemo(() => {
    const configured = Array.isArray(draft?.referral?.rewardColumns) ? draft.referral.rewardColumns : [];
    const sanitized = configured
      .map((column, index) => ({
        id: column?.id || `column-${index + 1}`,
        labels: Array.from(new Set((Array.isArray(column?.labels) ? column.labels : []).map((item) => normalizeText(item)).filter(Boolean))),
      }))
      .filter((column) => column.labels.length > 0);
    return sanitized.length ? sanitized : derivedReferralRewardColumns;
  }, [draft?.referral?.rewardColumns, derivedReferralRewardColumns]);
  const onlineCount = Number.isFinite(Number(siteOnlineStats?.onlineCount)) ? Number(siteOnlineStats.onlineCount) : 0;
  const siteUpdatedAt = normalizeText(siteOnlineStats?.updatedAt);

  const updatePromos = (updater) =>
    setDraft((prev) => {
      const currentPromos = Array.isArray(prev?.home?.promos) ? prev.home.promos : [];
      const nextPromos = typeof updater === 'function' ? updater(currentPromos) : updater;
      return { ...prev, home: { ...(prev?.home || {}), promos: nextPromos } };
    });
  const updatePromoField = (index, key, value) =>
    updatePromos((current) => current.map((promo, promoIndex) => (promoIndex === index ? { ...promo, [key]: value } : promo)));
  const addPromo = () => updatePromos((current) => [...current, createSitePromoDraft()]);
  const removePromo = (index) => updatePromos((current) => current.filter((_, promoIndex) => promoIndex !== index));

  const updateReferralLevels = (updater) =>
    setDraft((prev) => {
      const currentLevels = Array.isArray(prev?.referral?.levels) ? prev.referral.levels : [];
      const nextLevels = typeof updater === 'function' ? updater(currentLevels) : updater;
      return { ...prev, referral: { ...(prev?.referral || {}), levels: nextLevels } };
    });
  const updateReferralLevelField = (index, key, value) =>
    updateReferralLevels((levels) => levels.map((level, levelIndex) => (levelIndex === index ? { ...level, [key]: value } : level)));
  const addReferralLevel = () => updateReferralLevels((levels) => [...levels, createReferralLevelDraft()]);
  const removeReferralLevel = (index) => updateReferralLevels((levels) => levels.filter((_, levelIndex) => levelIndex !== index));
  const moveReferralLevel = (index, direction) =>
    updateReferralLevels((levels) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= levels.length) return levels;
      const next = [...levels];
      const [item] = next.splice(index, 1);
      next.splice(nextIndex, 0, item);
      return next;
    });
  const updateReferralRewards = (levelIndex, updater) =>
    updateReferralLevels((levels) => levels.map((level, currentIndex) => {
      if (currentIndex !== levelIndex) return level;
      const currentRewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
      const nextRewards = typeof updater === 'function' ? updater(currentRewards) : updater;
      return { ...level, serviceRewards: nextRewards };
    }));
  const updateReferralRewardField = (levelIndex, rewardIndex, key, value) =>
    updateReferralRewards(levelIndex, (rewards) => rewards.map((reward, currentIndex) => (currentIndex === rewardIndex ? { ...reward, [key]: value } : reward)));
  const addReferralReward = (levelIndex) => updateReferralRewards(levelIndex, (rewards) => [...rewards, createReferralRewardDraft()]);
  const removeReferralReward = (levelIndex, rewardIndex) => updateReferralRewards(levelIndex, (rewards) => rewards.filter((_, currentIndex) => currentIndex !== rewardIndex));
  const setReferralRewardColumns = (updater) =>
    setDraft((prev) => {
      const currentColumns = Array.isArray(prev?.referral?.rewardColumns) ? prev.referral.rewardColumns : referralRewardColumns;
      const nextColumns = typeof updater === 'function' ? updater(currentColumns) : updater;
      return {
        ...prev,
        referral: {
          ...(prev?.referral || {}),
          rewardColumns: nextColumns,
        },
      };
    });
  const setReferralRewardAmount = (levelIndex, column, value) =>
    updateReferralLevels((levels) =>
      levels.map((level, currentIndex) => {
        if (currentIndex !== levelIndex) return level;
        const rewards = Array.isArray(level?.serviceRewards) ? [...level.serviceRewards] : [];
        const labels = Array.isArray(column?.labels) ? column.labels.map((item) => normalizeText(item)).filter(Boolean) : [];
        const nextRewards = rewards.filter((reward) => !labels.includes(normalizeText(reward?.label)));
        labels.forEach((label) => {
          nextRewards.push({ ...createReferralRewardDraft(), label, bsAmount: value });
        });
        return { ...level, serviceRewards: nextRewards };
      })
    );
  const updateReferralRewardColumnLabels = (columnId, nextLabels) => {
    const normalizedNext = Array.from(new Set((Array.isArray(nextLabels) ? nextLabels : []).map((item) => normalizeText(item)).filter(Boolean)));
    const currentColumn = referralRewardColumns.find((column) => column.id === columnId) || { id: columnId, labels: [] };
    const previousLabels = currentColumn.labels.map((item) => normalizeText(item)).filter(Boolean);
    setReferralRewardColumns((columns) =>
      columns.map((column) => (column.id === columnId ? { ...column, labels: normalizedNext } : column))
    );
    updateReferralLevels((levels) =>
      levels.map((level) => {
        const rewards = Array.isArray(level?.serviceRewards) ? [...level.serviceRewards] : [];
        const preservedAmount =
          rewards.find((reward) => previousLabels.includes(normalizeText(reward?.label)))?.bsAmount ?? 0;
        const filtered = rewards.filter((reward) => !previousLabels.includes(normalizeText(reward?.label)));
        normalizedNext.forEach((label) => {
          filtered.push({ ...createReferralRewardDraft(), label, bsAmount: preservedAmount });
        });
        return { ...level, serviceRewards: filtered };
      })
    );
  };
  const addReferralRewardColumn = () => {
    const nextLabel =
      serviceOptions.find((option) => !referralRewardColumns.some((column) => column.labels.includes(option))) ||
      `Услуга ${referralRewardColumns.length + 1}`;
    setReferralRewardColumns((columns) => [
      ...columns,
      { id: `column-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`, labels: [nextLabel] },
    ]);
  };
  const removeReferralRewardColumn = (columnId) => {
    const currentColumn = referralRewardColumns.find((column) => column.id === columnId);
    const labelsToRemove = Array.isArray(currentColumn?.labels) ? currentColumn.labels.map((item) => normalizeText(item)).filter(Boolean) : [];
    setReferralRewardColumns((columns) => columns.filter((column) => column.id !== columnId));
    if (!labelsToRemove.length) return;
    updateReferralLevels((levels) =>
      levels.map((level) => ({
        ...level,
        serviceRewards: (Array.isArray(level?.serviceRewards) ? level.serviceRewards : []).filter(
          (reward) => !labelsToRemove.includes(normalizeText(reward?.label))
        ),
      }))
    );
  };
  const getReferralRewardAmount = (level, column) => {
    const rewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
    const labels = Array.isArray(column?.labels) ? column.labels.map((item) => normalizeText(item)) : [];
    const match = rewards.find((reward) => labels.includes(normalizeText(reward?.label)));
    return match?.bsAmount ?? '';
  };

  const handleSave = async () => {
    if (!onSaveSite) return;
    await onSaveSite(draft);
  };

  const renderHomeTab = () => (
    <div className="space-y-5">
      <SectionCard title="Главная страница">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Название в шапке</span>
                <input value={draft?.home?.logoText || ''} onChange={(event) => updateHomeField('logoText', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Текст кнопки записи</span>
                <input value={draft?.home?.bookingButtonText || ''} onChange={(event) => updateHomeField('bookingButtonText', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
                <span>Заголовок блока о бренде</span>
                <input value={draft?.home?.aboutTitle || ''} onChange={(event) => updateHomeField('aboutTitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
                <span>Текст блока о бренде</span>
                <textarea value={draft?.home?.aboutText || ''} onChange={(event) => updateHomeField('aboutText', event.target.value)} rows={5} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Заголовок контактов</span>
                <input value={draft?.home?.contactsTitle || ''} onChange={(event) => updateHomeField('contactsTitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Телефон</span>
                <input value={draft?.home?.phone || ''} onChange={(event) => updateHomeField('phone', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Telegram</span>
                <input value={draft?.home?.telegramUrl || ''} onChange={(event) => updateHomeField('telegramUrl', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input value={draft?.home?.email || ''} onChange={(event) => updateHomeField('email', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <SiteImageUploadField label="Изображение блока о бренде" value={draft?.home?.aboutImageUrl || ''} onChange={(value) => updateHomeField('aboutImageUrl', value)} onUploadImage={onUploadSiteImage} helperText="Изображение для блока о бренде на главной." />
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-white">Быстрый просмотр</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Шапка</p>
                  <p className="mt-2 text-lg font-semibold text-white">{draft?.home?.logoText || 'BrotherShop'}</p>
                  <p className="mt-1 text-sm text-emerald-300">{draft?.home?.bookingButtonText || 'Записаться'}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Контакты</p>
                  <div className="mt-3 space-y-2 text-sm text-slate-300">
                    <p>{draft?.home?.phone || 'Телефон не заполнен'}</p>
                    <p>{draft?.home?.telegramUrl || 'Telegram не заполнен'}</p>
                    <p>{draft?.home?.email || 'Email не заполнен'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Карта и контакты">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Заголовок карты</span>
              <input value={draft?.home?.mapTitle || ''} onChange={(event) => updateHomeField('mapTitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Ссылка на карту</span>
              <input value={draft?.home?.mapLink || ''} onChange={(event) => updateHomeField('mapLink', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
              <span>Подпись под картой</span>
              <textarea value={draft?.home?.mapCaption || ''} onChange={(event) => updateHomeField('mapCaption', event.target.value)} rows={3} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
          </div>
          <SiteImageUploadField label="Изображение карты" value={draft?.home?.mapImageUrl || ''} onChange={(value) => updateHomeField('mapImageUrl', value)} onUploadImage={onUploadSiteImage} />
        </div>
      </SectionCard>

      <SectionCard title="Акции" actions={<button type="button" onClick={addPromo} className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">Добавить акцию</button>}>
        <div className="space-y-4">
          {!promos.length ? (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-950/50 px-4 py-8 text-center text-sm text-slate-400">
              Акции пока не добавлены.
            </div>
          ) : null}
          {promos.map((promo, index) => (
            <div key={promo.id || index} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">Акция {index + 1}</p>
                  <p className="text-xs text-slate-500">Карточка промо-блока на главной.</p>
                </div>
                <button type="button" onClick={() => removePromo(index)} className="rounded-xl border border-rose-500/30 px-3 py-2 text-sm font-medium text-rose-300 transition hover:bg-rose-500/10">
                  Удалить
                </button>
              </div>
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_240px]">
                <div className="grid gap-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-300">
                      <span>Заголовок</span>
                      <input value={promo.title || ''} onChange={(event) => updatePromoField(index, 'title', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
                      <span>Подзаголовок</span>
                      <input value={promo.subtitle || ''} onChange={(event) => updatePromoField(index, 'subtitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                  </div>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Описание акции</span>
                    <textarea value={promo.details || ''} onChange={(event) => updatePromoField(index, 'details', event.target.value)} rows={4} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                </div>
                <SiteImageUploadField label="Изображение акции" value={promo.imageUrl || ''} onChange={(value) => updatePromoField(index, 'imageUrl', value)} onUploadImage={onUploadSiteImage} />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );

  const renderReferralTab = () => (
    <div className="space-y-5">
      <SectionCard title="Реферальная программа">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_320px]">
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Заголовок страницы</span>
              <input value={draft?.referral?.pageTitle || ''} onChange={(event) => updateReferralField('pageTitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Скидка другу, ₽</span>
              <input type="number" min="0" value={draft?.referral?.friendDiscountRub ?? ''} onChange={(event) => updateReferralField('friendDiscountRub', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
              <span>Основной текст программы</span>
              <textarea value={draft?.referral?.introText || ''} onChange={(event) => updateReferralField('introText', event.target.value)} rows={4} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 lg:col-span-2">
              <span>Дополнительные условия</span>
              <textarea value={draft?.referral?.participationText || ''} onChange={(event) => updateReferralField('participationText', event.target.value)} rows={4} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Курс BS к рублю</span>
              <input type="number" min="1" value={draft?.referral?.bsToRubRate ?? ''} onChange={(event) => updateReferralField('bsToRubRate', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
            </label>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-sm font-semibold text-white">Сводка программы</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Друг получает</p>
                <p className="mt-2 text-2xl font-semibold text-white">{draft?.referral?.friendDiscountRub || 0} ₽</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Курс</p>
                <p className="mt-2 text-2xl font-semibold text-white">{draft?.referral?.bsToRubRate || 0} BS</p>
                <p className="mt-1 text-sm text-slate-400">за 1 рубль</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Уровни</p>
                <p className="mt-2 text-2xl font-semibold text-white">{referralLevels.length}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Уровни и награды">
        <div className="space-y-4">
          <p className="text-sm text-slate-400">Редактируйте уровни, диапазон рефералов и BS в одной таблице.</p>
          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950/70">
            <table className="min-w-full border-collapse text-sm text-slate-200">
              <thead className="bg-slate-900/90">
                <tr className="align-top">
                  <th className="min-w-[220px] border-b border-r border-slate-800 px-3 py-3 text-left font-semibold">Уровень</th>
                  <th className="w-[136px] min-w-[136px] border-b border-r border-slate-800 px-3 py-3 text-left font-semibold">Кол-во рефералов</th>
                  {referralRewardColumns.map((column, columnIndex) => (
                    <th key={`${column.id}-${columnIndex}`} className="min-w-[220px] border-b border-r border-slate-800 px-3 py-3 text-left font-semibold last:border-r-0">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="block text-xs uppercase tracking-wide text-slate-400">Бонус за услугу</span>
                          <button
                            type="button"
                            onClick={() => removeReferralRewardColumn(column.id)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/30 text-rose-300 transition hover:bg-rose-500/10"
                            aria-label="Удалить колонку услуги"
                            title="Удалить колонку услуги"
                          >
                            <IconTrash className="h-4 w-4" />
                          </button>
                        </div>
                        <select
                          value={column.labels[0] || ''}
                          onChange={(event) => updateReferralRewardColumnLabels(column.id, event.target.value ? [event.target.value] : [])}
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                        >
                          <option value="">Выберите услугу</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <p className="text-[11px] leading-4 text-slate-500">{column.labels[0] || 'Выберите услугу'}</p>
                      </div>
                    </th>
                  ))}
                  <th className="w-[72px] min-w-[72px] border-b border-r border-slate-800 px-2 py-3 text-center font-semibold">
                    <button
                      type="button"
                      onClick={addReferralRewardColumn}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-600 text-slate-200 transition hover:bg-slate-800"
                      aria-label="Добавить колонку услуги"
                      title="Добавить колонку услуги"
                    >
                      <IconPlus className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="min-w-[120px] border-b border-slate-800 px-3 py-3 text-left font-semibold">Действия</th>
                </tr>
              </thead>
              <tbody>
                {referralLevels.map((level, levelIndex) => (
                  <tr key={level.id || levelIndex} className="align-top">
                    <td className="border-b border-r border-slate-800 px-3 py-3">
                      <input
                        value={level.name || ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'name', event.target.value)}
                        placeholder={`Уровень ${levelIndex + 1}`}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                      />
                    </td>
                    <td className="border-b border-r border-slate-800 px-3 py-3">
                      <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        min="0"
                        value={level.minReferrals ?? ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'minReferrals', event.target.value)}
                        placeholder="От"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-2 py-2 text-white"
                      />
                      <input
                        type="number"
                        min="0"
                        value={level.maxReferrals ?? ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'maxReferrals', event.target.value)}
                        placeholder="До"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-2 py-2 text-white"
                      />
                    </div>
                  </td>
                  {referralRewardColumns.map((column, columnIndex) => (
                    <td key={`${level.id || levelIndex}-${column.id}-${columnIndex}`} className="border-b border-r border-slate-800 px-3 py-3 last:border-r-0">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            value={getReferralRewardAmount(level, column)}
                            onChange={(event) => setReferralRewardAmount(levelIndex, column, event.target.value)}
                            placeholder="BS"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                          />
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">BS</span>
                        </div>
                      </td>
                    ))}
                    <td className="border-b border-r border-slate-800 px-2 py-3" />
                    <td className="border-b border-slate-800 px-3 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={() => moveReferralLevel(levelIndex, -1)} disabled={levelIndex === 0} className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40">
                          ↑
                        </button>
                        <button type="button" onClick={() => moveReferralLevel(levelIndex, 1)} disabled={levelIndex === referralLevels.length - 1} className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40">
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeReferralLevel(levelIndex)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/30 text-rose-300 transition hover:bg-rose-500/10"
                          aria-label="Удалить уровень"
                          title="Удалить уровень"
                        >
                          <IconTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={referralRewardColumns.length + 4} className="px-3 py-3">
                    <button
                      type="button"
                      onClick={addReferralLevel}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                    >
                      <IconPlus className="h-4 w-4" />
                      Добавить уровень
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderShopTab = () => (
    <SectionCard title="Страница магазина">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-4">
          <label className="space-y-2 text-sm text-slate-300">
            <span>Заголовок тизера</span>
            <input value={draft?.shop?.teaserTitle || ''} onChange={(event) => updateShopField('teaserTitle', event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Текст тизера</span>
            <textarea value={draft?.shop?.teaserText || ''} onChange={(event) => updateShopField('teaserText', event.target.value)} rows={4} className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
          </label>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm font-semibold text-white">Предпросмотр</p>
          <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Тизер магазина</p>
            <p className="mt-3 text-xl font-semibold text-white">{draft?.shop?.teaserTitle || 'Скоро в магазине'}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{draft?.shop?.teaserText || 'Добавьте короткий анонс, чтобы клиент понимал, что скоро появится.'}</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );

  const renderTabContent = () => {
    if (activeTab === 'referral') return renderReferralTab();
    if (activeTab === 'shop') return renderShopTab();
    return renderHomeTab();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {SITE_PAGE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={classNames(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  isActive ? 'bg-emerald-500 text-slate-950 shadow shadow-emerald-950/40' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 self-start rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200 sm:self-auto">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Онлайн: {onlineCount}
        </div>
      </div>
      {renderTabContent()}
      <div className="flex justify-end">
        <button onClick={handleSave} disabled={siteSaving || !onSaveSite} className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50">
          {siteSaving ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </div>
    </div>
  );
};
const LoginScreen = ({ onLogin, error, defaultRemember = false, onRememberChange = null }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(defaultRemember);
  const [validationError, setValidationError] = useState('');
  useEffect(() => {
    setRememberMe(defaultRemember);
  }, [defaultRemember]);
  useEffect(() => {
    if (error) {
      setValidationError('');
    }
  }, [error]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedPhone = normalizePhoneValue(phone);
    const normalizedLogin = resolveLogin(phone);
    if (!normalizedPhone && !normalizedLogin) {
      setValidationError('Укажите номер телефона или логин');
      return;
    }
    if (!password) {
      setValidationError('Введите пароль');
      return;
    }
    setValidationError('');
    onLogin({
      phone: normalizedPhone,
      login: normalizedLogin,
      password,
      remember: rememberMe,
    });
  };
  const handleRememberToggle = (value) => {
    setRememberMe(value);
    onRememberChange?.(value);
  };
  const formatPhoneDisplay = (value) => {
    const digits = (value || '').replace(/\D/g, '');
    if (!digits) return '';
    let normalized = digits;
    if (normalized.startsWith('8')) {
      normalized = `7${normalized.slice(1)}`;
    } else if (!normalized.startsWith('7')) {
      normalized = `7${normalized}`;
    }
    normalized = normalized.slice(0, 11);
    if (normalized === '7') return digits === '7' ? '' : '+7';
    const core = normalized.slice(1);
    const parts = [core.slice(0, 3), core.slice(3, 6), core.slice(6, 8), core.slice(8, 10)];
    const [p1 = '', p2 = '', p3 = '', p4 = ''] = parts;
    let result = '+7';
    if (p1) result += ` ${p1}`;
    if (p2) result += ` ${p2}`;
    if (p3) result += `-${p3}`;
    if (p4) result += `-${p4}`;
    return result.trim();
  };
  const handlePhoneInput = (raw) => {
    const digits = (raw || '').replace(/\D/g, '');
    if (!digits) {
      setPhone('');
      return;
    }
    setValidationError('');
    setPhone(formatPhoneDisplay(raw));
  };
  const suggestionPlaceholder = 'Например: +7 999 123-45-67';
  return (
    <div className="login-hero relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="login-aurora login-aurora-emerald" />
      <div className="login-aurora login-aurora-amber" />
      <div className="login-aurora login-aurora-indigo" />
      <div className="login-grid" />
      <div className="login-fog" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
            <span>Внутренняя панель</span>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-extrabold text-white">BrotherShop</h1>
            <p className="text-sm text-slate-400">Авторизация для команды барбершопа</p>
          </div>
          <div>
            <label className="text-sm text-slate-300">Номер телефона</label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => handlePhoneInput(event.target.value)}
              placeholder={suggestionPlaceholder}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner shadow-black/10 backdrop-blur focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
            />
            <div className="mt-2 space-y-1 text-xs text-slate-400">
              <p>Номер подтверждает, что вы из команды.</p>
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">Пароль</label>
            <input
              name="sessionPassword"
              aria-label="Пароль"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner shadow-black/10 backdrop-blur focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-slate-200">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => handleRememberToggle(event.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-indigo-400 focus:ring-indigo-400"
              />
              <span>Запомнить меня</span>
            </label>
          </div>
          {(validationError || error) && <ErrorBanner message={validationError || error} />}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-emerald-400 to-amber-400 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition duration-200 hover:scale-[1.01] hover:shadow-amber-400/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
const App = () => {
  const persistedAuth = useMemo(() => loadPersistedSession(), []);
  const [session, setSession] = useState(persistedAuth.session);
  const [rememberSession, setRememberSession] = useState(persistedAuth.remember);
  const [activeTab, setActiveTab] = useLocalStorage('barber.activeTab', 'dashboard');
  const [systemSection, setSystemSection] = useLocalStorage('system.section', 'bot');
  const [pendingTableView, setPendingTableView] = useState(null);
  const [activeDataTable, setActiveDataTable] = useState(() => {
    try {
      const stored = localStorage.getItem('tables.active');
      return stored ? JSON.parse(stored) : 'Appointments';
    } catch {
      return 'Appointments';
    }
  });
  const [dashboard, setDashboard] = useState(null);
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [botStatus, setBotStatus] = useState(null);
  const [botSettings, setBotSettings] = useState(null);
  const [botMessages, setBotMessages] = useState([]);
  const [botToken, setBotToken] = useState(null);
  const [botMenu, setBotMenu] = useState(null);
  const [botMenuSaving, setBotMenuSaving] = useState(false);
  const [siteConfig, setSiteConfig] = useState(null);
  const [siteConfigSaving, setSiteConfigSaving] = useState(false);
  const [siteOnlineStats, setSiteOnlineStats] = useState(null);
  const [licenseStatus, setLicenseStatus] = useState(null);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [optionsCache, setOptionsCache] = useState(null);
  const [profileModal, setProfileModal] = useState({ open: false, data: null, loading: false });
  const [appointmentModal, setAppointmentModal] = useState(buildAppointmentModalState);
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [authError, setAuthError] = useState('');
  const [systemBusy, setSystemBusy] = useState(false);
  const [pendingReloadReason, setPendingReloadReason] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [realtimeSnapshot, setRealtimeSnapshot] = useState(null);
  const [fatalError, setFatalError] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(defaultConfirmState);
  const [connectionStatus, setConnectionStatus] = useState('unknown');
  const confirmResolverRef = useRef(null);
  const role = normalizeRoleValue(session?.role);
  const isCreator = role === ROLE_CREATOR;
  const isOwner = role === ROLE_OWNER;
  const hasOwnerAccess = isOwner || isCreator;
  const staffBarberId = session?.barberId || null;
  const viewTabs = VIEW_TABS_BY_ROLE[role] || VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const dataTables = DATA_TABLES_BY_ROLE[role] || DEFAULT_DATA_TABLES;
  const visibleTableOrder = VISIBLE_TABLE_ORDER_BY_ROLE[role] || DEFAULT_VISIBLE_TABLE_ORDER;
  const sidebarShortcuts = DATA_SHORTCUTS_BY_ROLE[role] || DEFAULT_TABLE_SHORTCUTS;
  const canUseRealtime = hasOwnerAccess || role === ROLE_STAFF;
  const canAccessBot = hasOwnerAccess;
  const canAccessSystem = hasOwnerAccess;
  const resolvedSystemSection = SYSTEM_SUB_SECTIONS.some((tab) => tab.id === systemSection) ? systemSection : 'bot';
  const requestConfirm = useCallback(
    (options = {}) =>
      new Promise((resolve) => {
        confirmResolverRef.current = resolve;
        setConfirmDialog({ ...defaultConfirmState, ...options, open: true });
      }),
    []
  );
  const handleConfirmResult = useCallback(
    (result) => {
      setConfirmDialog(defaultConfirmState);
      if (confirmResolverRef.current) {
        confirmResolverRef.current(result);
        confirmResolverRef.current = null;
      }
    },
    []
  );
  useEffect(() => {
    if (!viewTabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(viewTabs[0]?.id || 'dashboard');
    }
  }, [viewTabs, activeTab, setActiveTab]);
  const currentBarber = useMemo(() => {
    if (!barbers?.length) return null;
    if (session?.barberId) {
      const match = barbers.find((item) => item.id === session.barberId);
      if (match) return match;
    }
    return barbers[0] || null;
  }, [barbers, session?.barberId]);
  useEffect(() => {
    if (!session?.barberId) return;
    const linkedBarber = barbers.find((item) => item.id === session.barberId);
    if (!linkedBarber) return;
    const nextName = linkedBarber.name || '';
    if (!nextName || nextName === session.barberName) return;
    setSession((prev) => {
      if (!prev) return prev;
      const updated = buildSessionPayload({
        ...prev,
        barberName: nextName,
        displayName: nextName,
      });
      persistSessionPayload(updated, rememberSession);
      return updated;
    });
  }, [barbers, session?.barberId, session?.barberName, setSession, rememberSession]);
  const handleSidebarTableChange = useCallback(
    (tableId) => {
      if (!tableId) return;
      setActiveDataTable(tableId);
      setPendingTableView(tableId);
      setActiveTab('tables');
    },
    [setActiveTab, setPendingTableView]
  );
  const handleActiveTableSync = useCallback(
    (tableId) => {
      if (!tableId) return;
      setActiveDataTable(tableId);
    },
    []
  );
  const handlePreferredTableConsumed = useCallback(() => setPendingTableView(null), []);
  const serviceSaveTimers = useRef(new Map());
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  useEffect(() => {
    let cancelled = false;
    if (!session?.token) {
      setConnectionStatus('unknown');
      return () => {
        cancelled = true;
      };
    }
    const checkServer = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/login/options`, { cache: 'no-store' });
        if (cancelled) return;
        setConnectionStatus(response.ok ? 'online' : 'offline');
      } catch (error) {
        if (!cancelled) {
          setConnectionStatus('offline');
        }
      }
    };
    checkServer();
    const interval = setInterval(checkServer, 15000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [session?.token, canUseRealtime]);
  const handleLogout = useCallback(() => {
    clearStoredSession();
    setSession(null);
    setDashboard(null);
    setGlobalError('');
    setRealtimeSnapshot(null);
    setServices([]);
    setBarbers([]);
    setBotStatus(null);
    setBotSettings(null);
    setBotMessages([]);
    setBotToken(null);
    setBotMenu(null);
    setBotMenuSaving(false);
    setSiteConfig(null);
    setSiteConfigSaving(false);
    setLicenseStatus(null);
    setUpdateInfo(null);
    setOptionsCache(null);
    setPendingTableView(null);
    setActiveDataTable('Appointments');
    setConnectionStatus('unknown');
    setPendingReloadReason(null);
    setSystemBusy(false);
  }, []);
  const handleRememberChange = useCallback((value) => {
    const nextValue = Boolean(value);
    setRememberSession(nextValue);
    persistRememberChoice(nextValue);
  }, []);
  const handleSessionTokenRefresh = useCallback(
    (nextToken) => {
      if (!nextToken) return;
      setSession((prev) => {
        if (!prev || prev.token === nextToken) return prev;
        const updated = buildSessionPayload({ ...prev, token: nextToken });
        persistSessionPayload(updated, rememberSession);
        return updated;
      });
    },
    [setSession, rememberSession]
  );
const apiRequest = useCallback(
    async (endpoint, options = {}) => {
      if (!session?.token) throw new Error('Нет активной сессии');
      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
        ...(options.body && !options.headers?.['Content-Type'] ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      };
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      handleSessionTokenRefresh(response.headers.get('x-session-token'));
      if (response.status === 401) {
        handleLogout();
        throw new Error('Сессия завершена, войдите снова');
      }
      if (!response.ok) {
        const message = await response.text();
        const fallback = response.status === 403 ? 'Недостаточно прав для операции' : 'Ошибка запроса';
        throw new Error(message || fallback);
      }
      if (response.status === 204) return null;
      return response.json();
    },
    [session?.token, handleLogout, handleSessionTokenRefresh]
  );
  const applyFavoriteBarberRule = useCallback(
    async (profilePayload) => {
      if (!profilePayload || !Array.isArray(profilePayload.appointments) || !profilePayload.user) {
        return profilePayload;
      }
      const canAutoAssignFavorite = session?.role === ROLE_OWNER || session?.role === ROLE_CREATOR;
      const favoriteBarber = resolveFavoriteBarberFromAppointments(profilePayload.appointments);
      const normalizedFavorite = normalizeText(favoriteBarber).toLowerCase();
      if (!normalizedFavorite) return profilePayload;
      const normalizedCurrent = normalizeText(profilePayload.user.Barber).toLowerCase();
      if (normalizedFavorite === normalizedCurrent) return profilePayload;
      const updatedPayload = { ...profilePayload, user: { ...profilePayload.user, Barber: favoriteBarber } };
      if (!canAutoAssignFavorite) {
        return updatedPayload;
      }
      const userId = getRecordId(profilePayload.user);
      if (userId) {
        try {
          await apiRequest(`/Users/${encodeURIComponent(userId)}`, {
            method: 'PUT',
            body: JSON.stringify({ Barber: favoriteBarber }),
          });
        } catch (error) {
          console.warn('Favorite barber auto-assign failed:', error);
        }
      }
      return updatedPayload;
    },
    [apiRequest, session?.role]
  );
  const handleLoadAvatarOptions = useCallback(
    () => apiRequest('/assets/avatars'),
    [apiRequest]
  );
  const fetchAll = useCallback(async ({ silent = false } = {}) => {
	    if (!session?.token) return;
	    if (!silent) {
	      setLoading(true);
	      setGlobalError('');
	    }
	    try {
	      const overview = await apiRequest('/dashboard/overview');
	      setDashboard(overview);
      const withFallback = (request, fallback, label) =>
        request.catch((error) => {
          console.warn(`${label} fetch skipped:`, error?.message || error);
          return fallback;
        });
      const servicesPromise = withFallback(apiRequest('/services/full'), { services: [] }, 'Services');
      const barbersPromise = withFallback(apiRequest('/barbers/full'), [], 'Barbers');
      const botStatusPromise = canAccessBot
        ? withFallback(apiRequest('/bot/status'), { status: null, settings: null, token: null }, 'Bot status')
        : Promise.resolve({ status: null, settings: null, token: null });
      const botMessagesPromise = canAccessBot
        ? withFallback(apiRequest('/bot/messages'), [], 'Bot messages')
        : Promise.resolve([]);
      const botMenuPromise = canAccessBot
        ? withFallback(apiRequest('/bot/menu'), null, 'Bot menu')
        : Promise.resolve(null);
      const siteConfigPromise = canAccessSystem
        ? withFallback(apiRequest('/system/site'), null, 'Site config')
        : Promise.resolve(null);
      const siteOnlinePromise = canAccessSystem
        ? withFallback(apiRequest('/system/site/online'), null, 'Site online')
        : Promise.resolve(null);
      const licensePromise = canAccessSystem
        ? withFallback(apiRequest('/license/status'), null, 'License')
        : Promise.resolve(null);
      const updatePromise = canAccessSystem
        ? withFallback(apiRequest('/system/update'), null, 'Updates')
        : Promise.resolve(null);
      const optionsPromise = withFallback(
        apiRequest('/options/appointments'),
        { statuses: [], barbers: [], services: [] },
        'Options',
      );
      const [
        servicesFull,
        barbersFull,
        botState,
        botMessagesPayload,
        botMenuPayload,
        sitePayload,
        siteOnlinePayload,
        license,
        update,
        options,
      ] = await Promise.all([
        servicesPromise,
        barbersPromise,
        botStatusPromise,
        botMessagesPromise,
        botMenuPromise,
        siteConfigPromise,
        siteOnlinePromise,
        licensePromise,
        updatePromise,
        optionsPromise,
      ]);
      const resolvedServices = Array.isArray(servicesFull)
        ? servicesFull
        : Array.isArray(servicesFull?.services)
          ? servicesFull.services
          : [];
      const serviceBarbers = Array.isArray(servicesFull?.barbers) ? servicesFull.barbers : [];
      setServices(resolvedServices);
      const resolvedBarbers =
        Array.isArray(barbersFull) && barbersFull.length
          ? barbersFull
          : serviceBarbers.length
            ? serviceBarbers
            : Array.isArray(overview.barbers)
              ? overview.barbers
              : [];
      setBarbers(resolvedBarbers);
      setBotSettings(botState.settings || overview.bot?.settings || null);
      setBotStatus(botState.status);
      setBotToken(botState.token || null);
      setBotMessages(canAccessBot ? botMessagesPayload || [] : []);
      setBotMenu(canAccessBot ? botMenuPayload : null);
      setBotMenuSaving(false);
      setSiteConfig(canAccessSystem ? sitePayload : null);
      setSiteConfigSaving(false);
      setSiteOnlineStats(canAccessSystem ? siteOnlinePayload : null);
      setLicenseStatus(canAccessSystem ? license : null);
      setUpdateInfo(canAccessSystem ? normalizeUpdateInfo(update) : null);
      const normalizedOptions = { ...options, statuses: normalizeStatusList(options.statuses || []) };
      setOptionsCache(normalizedOptions);
	    } catch (error) {
	      console.error(error);
	      if (!silent) {
	        setGlobalError(error.message || 'Не удалось загрузить данные.');
	      }
	    } finally {
	      if (!silent) {
	        setLoading(false);
	      }
	    }
	  }, [apiRequest, canAccessBot, canAccessSystem, session?.token]);
  useEffect(() => {
    if (!canAccessSystem || !session?.token) return undefined;
    const intervalId = window.setInterval(async () => {
      try {
        const payload = await apiRequest('/system/site/online');
        setSiteOnlineStats(payload || null);
      } catch (error) {
        console.warn('Site online poll skipped:', error?.message || error);
      }
    }, 30000);
    return () => window.clearInterval(intervalId);
  }, [apiRequest, canAccessSystem, session?.token]);
  const handleBlockClient = useCallback(
    async (clientId, blocked = true) => {
      if (!clientId) throw new Error('No client id');
      const result = await apiRequest(`/users/${encodeURIComponent(clientId)}/block`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocked }),
      });
      fetchAll();
      return result;
    },
    [apiRequest, fetchAll]
  );
  const handleAdjustClientBs = useCallback(
    async (clientId, payload) => {
      if (!clientId) throw new Error('Не выбран клиент');
      const result = await apiRequest(`/users/${encodeURIComponent(clientId)}/bs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || {}),
      });
      fetchAll({ silent: true });
      return result;
    },
    [apiRequest, fetchAll]
  );
  useEffect(() => {
    if (session?.token) {
      fetchAll();
    }
  }, [session?.token, fetchAll]);
  useEffect(() => {
    if (!session?.token || !canUseRealtime) {
      setRealtimeSnapshot(null);
      return undefined;
    }
    if (typeof EventSource === 'undefined') return undefined;
    const tokenParam = encodeURIComponent(session.token);
    const streamUrl = `${API_BASE_URL}/events/stream?token=${tokenParam}`;
    const eventSource = new EventSource(streamUrl);
    eventSource.onopen = () => setConnectionStatus('online');
    const handleEvent = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload?.type !== 'appointments:update') return;
        const details = payload.payload || {};
        setRealtimeSnapshot({
          rows: Array.isArray(details.rows) ? details.rows : [],
          active: Array.isArray(details.active) ? details.active : [],
          stats: details.stats || {},
          upcoming: Array.isArray(details.upcoming) ? details.upcoming : [],
          overdue: Array.isArray(details.overdue) ? details.overdue : [],
          updatedAt: details.updatedAt || new Date().toISOString(),
        });
      } catch (error) {
        console.error('Realtime event parse error:', error);
      }
    };
    eventSource.addEventListener('appointments', handleEvent);
    eventSource.onerror = () => {
      setConnectionStatus('offline');
    };
    return () => {
      eventSource.removeEventListener('appointments', handleEvent);
      eventSource.close();
    };
  }, [session?.token, canUseRealtime]);
  const refreshRealtimeViews = useCallback(async () => {
    if (!session?.token) return;
    try {
      const [overview, appointments] = await Promise.all([
        apiRequest('/dashboard/overview'),
        apiRequest('/appointments'),
      ]);
      setDashboard((prev) => {
        if (!overview) return prev;
        if (!prev) return overview;
        return {
          ...prev,
          ...overview,
          stats: overview.stats || prev.stats || {},
          appointments: overview.appointments || prev.appointments || {},
        };
      });
      setRealtimeSnapshot((prev) => ({
        rows: Array.isArray(appointments) ? appointments : [],
        active: Array.isArray(overview?.appointments?.active)
          ? overview.appointments.active
          : prev?.active || [],
        stats: overview?.stats || prev?.stats || {},
        upcoming: Array.isArray(overview?.appointments?.upcoming)
          ? overview.appointments.upcoming
          : prev?.upcoming || [],
        overdue: Array.isArray(overview?.appointments?.overdue)
          ? overview.appointments.overdue
          : prev?.overdue || [],
        updatedAt: new Date().toISOString(),
      }));
      setConnectionStatus('online');
    } catch (error) {
      console.warn('Realtime refresh failed:', error?.message || error);
    }
  }, [apiRequest, session?.token]);
  useEffect(() => {
    if (!session?.token) return undefined;
    const shouldRefreshViews =
      activeTab === 'dashboard' ||
      (activeTab === 'tables' && activeDataTable === 'Appointments');
    if (!shouldRefreshViews) return undefined;
    let cancelled = false;
    let inFlight = false;
    const runRefresh = async () => {
      if (cancelled || inFlight) return;
      inFlight = true;
      try {
        await refreshRealtimeViews();
      } finally {
        inFlight = false;
      }
    };
    runRefresh();
    const interval = setInterval(runRefresh, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [activeDataTable, activeTab, refreshRealtimeViews, session?.token]);
  const handleCreatePosition = useCallback(
    (payload) => apiRequest('/Positions', { method: 'POST', body: JSON.stringify(payload) }),
    [apiRequest]
  );
  const handleUpdatePosition = useCallback(
    (id, payload) =>
      apiRequest(`/Positions/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      }),
    [apiRequest]
  );
  const handleDeletePosition = useCallback(
    (id) => apiRequest(`/Positions/${encodeURIComponent(id)}`, { method: 'DELETE' }),
    [apiRequest]
  );
  useEffect(() => {
    if (!realtimeSnapshot) return;
    const isStaffMode = role === ROLE_STAFF;
    const staffNameSet = (() => {
      if (!isStaffMode) return null;
      const pool = [
        session?.barberName,
        session?.displayName,
        session?.username,
        currentBarber?.name,
        currentBarber?.nickname,
        currentBarber?.login,
      ];
      const normalized = pool
        .map((value) => canonicalizeName(value).toLowerCase())
        .filter(Boolean);
      return normalized.length ? new Set(normalized) : null;
    })();
    setDashboard((prev) => {
      const nextStats = { ...(prev?.stats || {}), ...(realtimeSnapshot.stats || {}) };
      const nextActive = realtimeSnapshot.active || prev?.appointments?.active || [];
      let nextUpcoming = realtimeSnapshot.upcoming || prev?.appointments?.upcoming || nextActive;
      let nextOverdue = realtimeSnapshot.overdue || prev?.appointments?.overdue || nextActive;
      if (isStaffMode && staffNameSet && nextUpcoming?.length) {
        nextUpcoming = nextUpcoming.filter((appt) => {
          const candidate = canonicalizeName(appt.Barber).toLowerCase();
          return candidate && staffNameSet.has(candidate);
        });
      }
      if (isStaffMode && staffNameSet && nextOverdue?.length) {
        nextOverdue = nextOverdue.filter((appt) => {
          const candidate = canonicalizeName(appt.Barber).toLowerCase();
          return candidate && staffNameSet.has(candidate);
        });
      }
      if (isStaffMode && staffNameSet) {
        nextStats.upcomingAppointments = nextUpcoming.length;
        nextStats.overdueAppointments = nextOverdue.length;
        nextStats.activeAppointments = nextUpcoming.length + nextOverdue.length;
      }
      const nextAppointments = {
        ...(prev?.appointments || {}),
        active: nextActive,
        upcoming: nextUpcoming,
        overdue: nextOverdue,
      };
      if (!prev) {
        return { stats: nextStats, appointments: nextAppointments };
      }
      return { ...prev, stats: nextStats, appointments: nextAppointments };
    });
  }, [realtimeSnapshot, role, session?.barberName, session?.displayName, session?.username, currentBarber?.name, currentBarber?.nickname, currentBarber?.login]);
  useEffect(() => {
    const handleGlobalError = (event) => {
      const detail = event?.reason || event?.error;
      const message =
        detail?.message ||
        event?.message ||
        (typeof detail === 'string' ? detail : 'Неизвестная ошибка');
      const isGenericScriptError =
        (message || '').trim() === 'Script error.' &&
        !event?.filename &&
        !event?.lineno &&
        !detail?.stack;
      sendClientLog({
        level: 'error',
        stage: 'global-handler',
        message,
        stack: detail?.stack || '',
        source: event?.filename || '',
        line: event?.lineno || 0,
        col: event?.colno || 0,
        type: event?.type || '',
        isGenericScriptError,
      });
      if (isGenericScriptError) {
        return;
      }
      console.error('Global UI error:', detail || event);
      setFatalError(message);
    };
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleGlobalError);
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleGlobalError);
    };
  }, []);
  useEffect(
    () => () => {
      serviceSaveTimers.current.forEach((timer) => clearTimeout(timer));
      serviceSaveTimers.current.clear();
    },
    []
  );
  const handleLogin = async ({ phone, login, password, remember } = {}) => {
    setAuthError('');
    const normalizedPhone = normalizePhoneValue(phone || login);
    const normalizedLogin = resolveLogin(login || phone);
    const rememberChoice = remember ?? rememberSession;
    if (!normalizedPhone && !normalizedLogin) {
      setAuthError('Укажите номер телефона или логин');
      return;
    }
    if (!password) {
      setAuthError('Введите пароль');
      return;
    }
    persistRememberChoice(rememberChoice);
    setRememberSession(rememberChoice);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: normalizedPhone, username: normalizedLogin, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setAuthError(data.message || 'Неизвестная ошибка при входе');
        return;
      }
      const sessionPayload = buildSessionPayload({ ...data, username: normalizedPhone || normalizedLogin });
      persistSessionPayload(sessionPayload, rememberChoice);
      setSession(sessionPayload);
    } catch (error) {
      setAuthError('Не удалось подключиться к серверу');
    }
  };
const handleBarberFieldChange = (id, field, value) => {
    setBarbers((prev) =>
      prev.map((barber) => {
        if (barber.id !== id) return barber;
        const nextValue = field === 'rating' ? formatRatingValue(value) : value;
        return { ...barber, [field]: nextValue };
      }),
    );
  };
  const normalizeServicePayload = (service) => ({
    ...service,
    prices: Object.fromEntries(
      Object.entries(service.prices || {}).map(([key, value]) => [key, value === '' || value == null ? null : Number(value)])
    ),
  });
  const deriveBarberLogin = (barberData = {}) => resolveLogin(barberData.login || barberData.name || '');
  const buildBarberPayload = (barberData = {}, fallbackOrder = 0) => {
    const payload = {
      name: barberData.name || '',
      nickname: null,
      description: barberData.description || '',
      rating: formatRatingValue(barberData.rating),
      avatarUrl: barberData.avatarUrl || '',
      cardTitle: sanitizeCardText(barberData.cardTitle || barberData.name || ''),
      cardDescription: sanitizeCardText(barberData.cardDescription || ''),
      cardPhrase: sanitizeCardText(barberData.cardPhrase || ''),
      cardMode: normalizeCardMode(barberData.cardMode),
      cardImageUrl: normalizeImagePath(barberData.cardImageUrl || ''),
      cardPhotoGrayscale: barberData.cardPhotoGrayscale !== false,
      cardPhotoOutline: barberData.cardPhotoOutline !== false,
      color: barberData.color || '',
      login: deriveBarberLogin(barberData),
      password: barberData.password || '',
      phone: barberData.phone || '',
      telegramId: barberData.telegramId || '',
      isActive: barberData.isActive !== false,
      orderIndex: Number(barberData.orderIndex ?? fallbackOrder) || 0,
      role: normalizeRoleValue(barberData.role),
      positionId: barberData.positionId || null,
    };
    if (barberData.id) {
      payload.id = barberData.id;
    }
    return payload;
  };
  const handleSaveBarber = async (barber) => {
    if (!barber?.id) return null;
    try {
      const response = await apiRequest(`/barbers/${encodeURIComponent(barber.id)}`, { method: 'PUT', body: JSON.stringify(buildBarberPayload(barber)) });
      const updatedBarber = { ...barber, ...(response || {}) }; // сохраняем локально выбранный avatarUrl, если сервер его не вернул
      setBarbers((prev) => prev.map((item) => (item.id === updatedBarber.id ? { ...item, ...updatedBarber } : item)));
      return updatedBarber;
    } catch (error) {
      setGlobalError(error.message);
      throw error;
    }
  };
  const handleDeleteBarber = async (barber) => {
    if (!barber?.id) return;
    const confirmed = await requestConfirm({
      title: 'Удалить барбера?',
      message: `Барбер «${barber.name || 'Без имени'}» будет удален без возможности восстановления.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить барбера');
    }
  };
  const handleAddBarber = async (payload) => {
    if (!payload.name || !payload.password) {
      setGlobalError('Заполните имя, логин и пароль барбера');
      return null;
    }
    try {
      const newBarberPayload = buildBarberPayload({ ...payload, id: undefined }, barbers.length);
      const { id, ...body } = newBarberPayload;
      const created = await apiRequest('/barbers', { method: 'POST', body: JSON.stringify(body) });
      fetchAll();
      return created || null;
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить барбера');
      throw error;
    }
  };
  const handleSaveService = useCallback(
    async (service) => {
      if (!service?.id) return;
      try {
        await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, {
          method: 'PUT',
          body: JSON.stringify(normalizeServicePayload(service)),
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить услугу');
      }
    },
    [apiRequest]
  );
  const scheduleServiceAutosave = useCallback(
    (service, customSaver) => {
      if (!service?.id) return;
      const timers = serviceSaveTimers.current;
      const existingTimer = timers.get(service.id);
      if (existingTimer) clearTimeout(existingTimer);
      const timer = setTimeout(async () => {
        try {
          if (typeof customSaver === 'function') {
            await customSaver(service);
          } else {
            await handleSaveService(service);
          }
        } finally {
          timers.delete(service.id);
        }
      }, 400);
      timers.set(service.id, timer);
    },
    [handleSaveService]
  );
  const handleDeleteService = async (service) => {
    if (!service?.id) return;
    const confirmed = await requestConfirm({
      title: 'Удалить услугу?',
      message: `Услуга «${service.name || 'Без названия'}» будет удалена.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить услугу');
    }
  };
  const saveStaffServicePrice = useCallback(
    async (service) => {
      if (!service?.id || !staffBarberId) return;
      const nextPrice = service.prices?.[staffBarberId];
      try {
        await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, {
          method: 'PUT',
          body: JSON.stringify({ prices: { [staffBarberId]: nextPrice ?? null } }),
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить цену услуги.');
      }
    },
    [apiRequest, staffBarberId]
  );
  const handleAddService = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/services/full', { method: 'POST', body: JSON.stringify(normalizeServicePayload(payload)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить услугу');
    }
  };
  const handleServiceFieldChange = useCallback(
    (id, field, value) => {
      setServices((prev) => prev.map((service) => (service.id === id ? { ...service, [field]: value } : service)));
      const target = services.find((service) => service.id === id);
      if (target) {
        scheduleServiceAutosave({ ...target, [field]: value });
      }
    },
    [services, scheduleServiceAutosave]
  );
  const handleServicePriceChange = useCallback(
    (serviceId, barberId, value) => {
      setServices((prev) =>
        prev.map((service) => {
          if (service.id !== serviceId) return service;
          return {
            ...service,
            prices: { ...(service.prices || {}), [barberId]: value },
          };
        })
      );
      const target = services.find((service) => service.id === serviceId);
      if (target) {
        const nextService = {
          ...target,
          prices: { ...(target.prices || {}), [barberId]: value },
        };
        const saver = role === ROLE_STAFF ? saveStaffServicePrice : undefined;
        scheduleServiceAutosave(nextService, saver);
      }
    },
    [role, saveStaffServicePrice, scheduleServiceAutosave, services]
  );
  const handleUploadAvatar = useCallback(
    async ({ name, data }) => {
      if (!name || !data) {
        throw new Error('Укажите имя и данные изображения.');
      }
      return apiRequest('/assets/avatars/upload', {
        method: 'POST',
        body: JSON.stringify({ name, data }),
      });
    },
    [apiRequest]
  );
  const handleUploadCard = useCallback(
    async ({ barberId, name, data }) => {
      if (!barberId || !data) {
        throw new Error('Нужны id барбера и данные карточки.');
      }
      return apiRequest('/assets/cards/upload', {
        method: 'POST',
        body: JSON.stringify({ barberId, name, data }),
      });
    },
    [apiRequest]
  );
  const handleDeleteAvatar = useCallback(
    async (filename) => {
      if (!filename) {
        throw new Error('Не передан файл для удаления.');
      }
      return apiRequest('/assets/avatars', {
        method: 'DELETE',
        body: JSON.stringify({ filename }),
      });
    },
    [apiRequest]
  );
  const fetchBotRuntime = useCallback(async () => {
    if (!canAccessBot) return null;
    const botState = await apiRequest('/bot/status');
    setBotSettings(botState?.settings || null);
    setBotStatus(botState?.status || null);
    setBotToken(botState?.token || null);
    setDashboard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        bot: {
          ...(prev.bot || {}),
          status: botState?.status || null,
          settings: botState?.settings || null,
        },
      };
    });
    return botState;
  }, [apiRequest, canAccessBot]);
  const handleBotToggle = async (enabled) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ isBotEnabled: enabled }) });
      await fetchBotRuntime();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось обновить настройки бота');
    }
  };
  const handleBotAction = async (action) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ action }) });
      await fetchBotRuntime();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось выполнить действие');
    }
  };
  const handleUpdateBotToken = useCallback(
    async (nextToken) => {
      try {
        const response = await apiRequest('/bot/token', { method: 'PUT', body: JSON.stringify({ token: nextToken }) });
        const normalized = response?.token || nextToken;
        setBotToken(normalized);
        await fetchAll();
        return normalized;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось обновить токен бота');
        throw error;
      }
    },
    [apiRequest, fetchAll]
  );
  const handleSaveSettings = async (payload) => {
    if (!botSettings?.id) return;
    try {
      await apiRequest(`/BotSettings/${encodeURIComponent(botSettings.id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить настройки');
    }
  };
  const handleReloadBotMenu = useCallback(
    async () => {
      if (!canAccessBot) return null;
      try {
        const menu = await apiRequest('/bot/menu');
        setBotMenu(menu);
        return menu;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось загрузить меню бота');
        throw error;
      }
    },
    [apiRequest, canAccessBot]
  );
  const handleLoadMenuImages = useCallback(
    async () => {
      if (!canAccessBot) return [];
      try {
        const response = await apiRequest('/bot/menu/images');
        return Array.isArray(response?.images) ? response.images : [];
      } catch (error) {
        // При отсутствии эндпоинта/404 просто возвращаем пустую галерею без глобальной ошибки
        console.warn('Menu images load skipped', error);
        return [];
      }
    },
    [apiRequest, canAccessBot]
  );
  const handleUploadMenuImage = useCallback(
    async (file) => {
      if (!canAccessBot || !file) return null;
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const response = await apiRequest('/bot/menu/images', {
          method: 'POST',
          body: JSON.stringify({ name: file.name, data: dataUrl }),
        });
        return response || null;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось загрузить изображение меню');
        throw error;
      }
    },
    [apiRequest, canAccessBot]
  );
  const handleSaveBotMenu = useCallback(
    async (menuDraft) => {
      if (!canAccessBot) return null;
      setBotMenuSaving(true);
      try {
        const saved = await apiRequest('/bot/menu', {
          method: 'PUT',
          body: JSON.stringify(menuDraft || {}),
        });
        setBotMenu(saved);
        return saved;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить меню бота');
        throw error;
      } finally {
        setBotMenuSaving(false);
      }
    },
    [apiRequest, canAccessBot]
  );
  const handleSaveSiteConfig = useCallback(
    async (draft) => {
      if (!canAccessSystem) return null;
      setSiteConfigSaving(true);
      try {
        const saved = await apiRequest('/system/site', {
          method: 'PUT',
          body: JSON.stringify(draft || {}),
        });
        setSiteConfig(saved);
        return saved;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить настройки сайта');
        throw error;
      } finally {
        setSiteConfigSaving(false);
      }
    },
    [apiRequest, canAccessSystem]
  );
  const handleSaveMessage = async (id, draft, persist) => {
    if (!persist) {
      setBotMessages((prev) => prev.map((message) => (message.id === id ? { ...draft } : message)));
      return;
    }
    try {
      await apiRequest(`/bot/messages/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify({ code: draft.code, title: draft.title, text: draft.text }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить сообщение');
    }
  };
  const handleRestoreBackup = async (filename) => {
    if (!filename) return;
    const confirmed = await requestConfirm({
      title: 'Восстановить резервную копию?',
      message: `Текущие данные будут заменены содержимым ${filename}. Продолжить?`,
      confirmLabel: 'Восстановить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось восстановить бэкап');
    }
  };
  const handleCreateBackup = async () => {
    const confirmed = await requestConfirm({
      title: 'Создать резервную копию?',
      message: 'Будет создан файл резервной копии текущей базы данных.',
      confirmLabel: 'Создать',
      tone: 'success',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось создать бэкап');
    }
  };
  const handleDeleteBackup = async (filename) => {
    if (!filename) return;
    const confirmed = await requestConfirm({
      title: 'Удалить резервную копию?',
      message: `Файл ${filename} будет удален безвозвратно.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить бэкап');
    }
  };
  const fetchClientHistory = useCallback(
    async (client) => {
      if (!client?.Name) return null;
      return apiRequest(`/user-profile/${encodeURIComponent(client.Name)}`);
    },
    [apiRequest]
  );
  const openProfile = useCallback(
    async (name) => {
      if (!name) return;
      setProfileModal({ open: true, data: null, loading: true });
      try {
        const payload = await apiRequest(`/user-profile/${encodeURIComponent(name)}`);
        const processed = await applyFavoriteBarberRule(payload);
        setProfileModal({ open: true, data: processed, loading: false });
      } catch (error) {
        setProfileModal({ open: true, data: { error: error.message || 'Не удалось загрузить профиль клиента' }, loading: false });
      }
    },
    [apiRequest, applyFavoriteBarberRule]
  );
  const ensureOptions = useCallback(async () => {
    if (optionsCache) return optionsCache;
    const options = await apiRequest('/options/appointments?force=1');
    const normalized = {
      ...options,
      statuses: normalizeStatusList(options.statuses || []),
    };
    setOptionsCache(normalized);
    return normalized;
  }, [apiRequest, optionsCache]);
  const fetchAppointmentContext = useCallback(async () => {
    const [appointmentsList, schedulesList] = await Promise.all([
      apiRequest('/appointments'),
      apiRequest('/schedules'),
    ]);
    return {
      appointments: Array.isArray(appointmentsList) ? appointmentsList : [],
      schedules: Array.isArray(schedulesList) ? schedulesList : [],
    };
  }, [apiRequest]);
  const handleOpenAppointment = useCallback(
    async (appointment, optionsConfig = {}) => {
      try {
        const [options, context] = await Promise.all([ensureOptions(), fetchAppointmentContext()]);
        setAppointmentModal({
          open: true,
          data: appointment,
          options,
          context,
          isNew: false,
          allowDelete: !!optionsConfig.allowDelete,
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось открыть запись');
      }
    },
    [ensureOptions, fetchAppointmentContext, setGlobalError]
  );
  const handleCreateAppointment = useCallback(async () => {
    try {
      const [options, context] = await Promise.all([ensureOptions(), fetchAppointmentContext()]);
      const today = getLocalISODateString();
      const defaultStatus = normalizeStatusValue(options.statuses?.[0] || BOT_SUPPORTED_STATUS_OPTIONS[0] || 'Активная');
      const defaultBarber = pickBarberForUser(session, options.barbers || []);
      setAppointmentModal({
        open: true,
        data: {
          id: null,
          CustomerName: '',
          Phone: '',
          Barber: defaultBarber,
          Date: today,
          Time: '',
          Status: defaultStatus,
          Services: '',
          UserID: '',
        },
        options,
        context,
        isNew: true,
        allowDelete: false,
      });
    } catch (error) {
      setGlobalError(error.message || 'Не удалось начать создание записи');
    }
  }, [ensureOptions, fetchAppointmentContext, session, setGlobalError]);
	  const handleSaveAppointment = async ({ id, payload, isNew }) => {
	    try {
	      if (isNew) {
	        await apiRequest('/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
	      } else if (id) {
	        await apiRequest(`/appointments/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
	      }
	      setAppointmentModal(buildAppointmentModalState());
	      fetchAll({ silent: true });
	    } catch (error) {
	      setGlobalError(error.message || 'Не удалось сохранить запись');
	    }
	  };
	  const handleQuickUpdateAppointmentStatus = useCallback(
	    async (appointment, nextStatus) => {
	      const id = getRecordId(appointment);
	      if (!id || !nextStatus) return;
	      try {
	        await apiRequest(`/appointments/${encodeURIComponent(id)}`, {
	          method: 'PUT',
	          body: JSON.stringify({ Status: normalizeStatusValue(nextStatus) }),
	        });
	        fetchAll({ silent: true });
	      } catch (error) {
	        setGlobalError(error.message || 'Не удалось обновить статус записи');
	        throw error;
	      }
	    },
	    [apiRequest, fetchAll, setGlobalError]
	  );
	  const handleDeleteAppointment = async (appointment) => {
	    if (!appointment?.id) return;
	    const confirmed = await requestConfirm({
	      title: 'Удалить запись?',
	      message: 'Запись будет удалена без возможности восстановления.',
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
	    try {
	      await apiRequest(`/appointments/${encodeURIComponent(appointment.id)}`, { method: 'DELETE' });
	      setAppointmentModal(buildAppointmentModalState());
	      fetchAll({ silent: true });
	    } catch (error) {
	      setGlobalError(error.message || 'Не удалось удалить запись');
	    }
	  };
  const triggerAppReload = useCallback(() => {
    const reloadWithBypass = () => {
      const url = new URL(window.location.href);
      url.searchParams.set('_upd', Date.now().toString());
      window.location.replace(url.toString());
    };
    setTimeout(() => {
      try {
        if (navigator?.serviceWorker?.getRegistrations) {
          navigator.serviceWorker
            .getRegistrations()
            .then((registrations) =>
              Promise.all(
                registrations.map((reg) =>
                  Promise.resolve(reg.update()).catch((error) => {
                    console.warn("[update] SW registration update failed:", error);
                    return null;
                  }),
                ),
              ),
            )
            .catch((error) => {
              console.warn("[update] Failed to refresh SW registrations:", error);
            })
            .finally(reloadWithBypass);
          return;
        }
      } catch (error) {
        console.warn('[update] SW reload helper failed:', error);
      }
      reloadWithBypass();
    }, 3500);
  }, []);
  const handleRefreshUpdate = async () => {
    setSystemBusy(true);
    try {
      const info = await apiRequest('/system/update?force=1');
      setUpdateInfo(normalizeUpdateInfo(info));
    } catch (error) {
      setGlobalError(error.message || 'Не удалось проверить обновления');
    } finally {
      setSystemBusy(false);
    }
  };
  const handleApplyUpdate = async () => {
    console.log('[update] User requested apply update');
    const confirmed = await requestConfirm({
      title: 'Обновить систему?',
      message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
      confirmLabel: 'Обновить',
      tone: 'danger',
    });
    if (!confirmed) return;
    setSystemBusy(true);
    setPendingReloadReason('update');
    console.log('[update] Starting apply...');
    let restartPlanned = false;
    try {
      const result = await apiRequest('/system/update', { method: 'POST' });
      console.log('[update] Apply result:', result);
      setUpdateInfo(normalizeUpdateInfo(result.info || result));
      fetchAll();
      restartPlanned = Boolean(result?.restarting);
      if (restartPlanned) {
        console.log('[update] Restart flagged, reloading page soon...');
        triggerAppReload();
      } else {
        setPendingReloadReason(null);
      }
    } catch (error) {
      console.error('[update] Apply failed:', error);
      setGlobalError(error.message || 'Не удалось применить обновление');
      setPendingReloadReason(null);
    } finally {
      setSystemBusy(restartPlanned);
      console.log('[update] Apply finished');
    }
  };
  const handleRestartSystem = async () => {
    console.log('[restart] User requested restart');
    const confirmed = await requestConfirm({
      title: 'Перезапустить систему?',
      message: 'Сайт и бот будут остановлены и запущены заново. Это может занять до нескольких минут.',
      confirmLabel: 'Перезапуск',
      tone: 'danger',
    });
    if (!confirmed) return;
    setSystemBusy(true);
    setPendingReloadReason('restart');
    let restartPlanned = false;
    try {
      const result = await apiRequest('/system/restart', { method: 'POST' });
      restartPlanned = Boolean(result?.restarting);
      if (restartPlanned) {
        console.log('[restart] Restart scheduled, reloading page soon...');
        triggerAppReload();
      } else {
        setPendingReloadReason(null);
      }
    } catch (error) {
      console.error('[restart] Failed:', error);
      setGlobalError(error.message || 'Не удалось выполнить перезапуск');
      setPendingReloadReason(null);
    } finally {
      setSystemBusy(restartPlanned);
    }
  };
  if (!session?.token) {
    return <LoginScreen onLogin={handleLogin} error={authError} defaultRemember={rememberSession} onRememberChange={handleRememberChange} />;
  }
  const preferredTableTarget = pendingTableView;
  const liveUpdatedAt = realtimeSnapshot?.updatedAt || null;
  const effectiveLiveStatus = pendingReloadReason ? 'updating' : connectionStatus;
  const mainClassName = classNames(
    'flex-1 min-w-0 w-full space-y-4 overflow-x-hidden p-4 md:p-8',
    isMobile ? 'pb-24' : ''
  );
  const renderActive = () => {
    if (loading) return <LoadingState />;
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView
            data={dashboard}
            onOpenAppointment={handleOpenAppointment}
            onOpenProfile={openProfile}
            onCreateAppointment={handleCreateAppointment}
            onNavigateTable={handleSidebarTableChange}
            onQuickUpdateStatus={handleQuickUpdateAppointmentStatus}
            availableTables={visibleTableOrder}
            currentUser={session || null}
            currentBarber={currentBarber}
            liveUpdatedAt={liveUpdatedAt}
            liveStatus={effectiveLiveStatus}
          />
        );
      case 'tables':
        return (
          <TablesWorkspace
            apiRequest={apiRequest}
            sharedOptions={optionsCache}
            onOptionsUpdate={setOptionsCache}
            onOpenProfile={openProfile}
            onOpenAppointmentRecord={handleOpenAppointment}
            clients={dashboard?.clients || []}
            currentUser={session || null}
            liveAppointments={realtimeSnapshot?.rows || null}
            liveUpdatedAt={realtimeSnapshot?.updatedAt || null}
            liveStatus={effectiveLiveStatus}
            barbers={barbers}
            services={services}
            onBarberFieldChange={handleBarberFieldChange}
            onSaveBarber={handleSaveBarber}
            onAddBarber={handleAddBarber}
            onDeleteBarber={handleDeleteBarber}
            onServiceFieldChange={handleServiceFieldChange}
            onServicePriceChange={handleServicePriceChange}
            onDeleteService={handleDeleteService}
            onAddService={handleAddService}
            onCreatePosition={handleCreatePosition}
            onUpdatePosition={handleUpdatePosition}
            onDeletePosition={handleDeletePosition}
            onActiveTableChange={handleActiveTableSync}
            preferredTable={preferredTableTarget}
            onPreferredTableConsumed={handlePreferredTableConsumed}
            onRequestConfirm={requestConfirm}
            onBlockClient={handleBlockClient}
            onAdjustClientBs={handleAdjustClientBs}
            uploadAvatar={handleUploadAvatar}
            uploadCard={handleUploadCard}
            deleteAvatar={handleDeleteAvatar}
            loadAvatarOptions={handleLoadAvatarOptions}
            dataTables={dataTables}
            visibleTableOrder={visibleTableOrder}
            role={role}
            applyFavoriteBarberRule={applyFavoriteBarberRule}
          />
        );
      case 'profile':
        return (
          <BarberProfileView
            barber={currentBarber}
            loadAvatarOptions={handleLoadAvatarOptions}
            uploadAvatar={handleUploadAvatar}
            deleteAvatar={handleDeleteAvatar}
            onFieldChange={handleBarberFieldChange}
            onSave={handleSaveBarber}
            allowRatingEdit={role === ROLE_OWNER || role === ROLE_CREATOR}
          />
        );
      case 'system':
        if (!canAccessSystem) {
          return (
            <SectionCard title="Недостаточно прав">
              <p className="text-sm text-slate-400">Раздел доступен только владельцу.</p>
            </SectionCard>
          );
        }
        return (
          <SystemSettingsView
            status={botStatus}
            settings={botSettings}
            backups={dashboard?.backups || []}
            messages={botMessages}
            onToggleEnabled={handleBotToggle}
            onStart={() => handleBotAction('start')}
            onStop={() => handleBotAction('stop')}
            onRestart={() => handleBotAction('restart')}
            onSaveSettings={handleSaveSettings}
            onSaveMessage={(id, draft, persist) => handleSaveMessage(id, draft, persist)}
            onRestoreBackup={handleRestoreBackup}
            onCreateBackup={handleCreateBackup}
            onDeleteBackup={handleDeleteBackup}
            licenseStatus={licenseStatus}
            updateInfo={updateInfo}
            onRefreshUpdate={handleRefreshUpdate}
            onApplyUpdate={handleApplyUpdate}
            menu={botMenu}
            onSaveMenu={handleSaveBotMenu}
            onReloadMenu={handleReloadBotMenu}
            loadMenuImages={handleLoadMenuImages}
            uploadMenuImage={handleUploadMenuImage}
            menuSaving={botMenuSaving}
            siteConfig={siteConfig}
            siteSaving={siteConfigSaving}
            siteOnlineStats={siteOnlineStats}
            onSaveSite={handleSaveSiteConfig}
            onUploadSiteImage={handleUploadAvatar}
            services={services}
            onRestartSystem={handleRestartSystem}
            pendingReloadReason={pendingReloadReason}
            systemBusy={systemBusy}
            token={botToken}
            onUpdateToken={handleUpdateBotToken}
            section={resolvedSystemSection}
            onSectionChange={setSystemSection}
            role={role}
          />
        );
      default:
        return (
          <DashboardView
            data={dashboard}
            onOpenAppointment={handleOpenAppointment}
            onOpenProfile={openProfile}
            onCreateAppointment={handleCreateAppointment}
            onNavigateTable={handleSidebarTableChange}
            onQuickUpdateStatus={handleQuickUpdateAppointmentStatus}
            availableTables={visibleTableOrder}
            currentUser={session || null}
            currentBarber={currentBarber}
            liveUpdatedAt={liveUpdatedAt}
            liveStatus={effectiveLiveStatus}
          />
        );
    }
  };
  if (fatalError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 p-6 text-center text-white">
        <div className="max-w-lg space-y-3 rounded-2xl border border-rose-500/50 bg-slate-900/80 p-6 shadow-2xl">
          <p className="text-lg font-semibold text-rose-200">Критическая ошибка интерфейса</p>
          <p className="text-sm text-slate-300">
            Сообщение ниже можно переслать разработчику. После исправления перезагрузите страницу.
          </p>
          <pre className="overflow-x-auto rounded-xl bg-slate-950/80 p-4 text-left text-xs text-rose-200">
            {fatalError}
          </pre>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
        >
          Перезагрузить страницу
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {isMobile && (
        <MobileTabs
          activeTab={activeTab}
          onChange={setActiveTab}
          session={session}
          onLogout={handleLogout}
          liveUpdatedAt={liveUpdatedAt}
          liveStatus={effectiveLiveStatus}
          tabs={viewTabs}
          activeDataTable={activeDataTable}
          onSelectTable={handleSidebarTableChange}
          tableShortcuts={sidebarShortcuts}
          systemSection={resolvedSystemSection}
          onSelectSystemSection={setSystemSection}
        />
      )}
      <div className="flex">
        <Sidebar
          session={session}
          activeTab={activeTab}
          onChange={setActiveTab}
          onLogout={handleLogout}
          liveUpdatedAt={liveUpdatedAt}
          liveStatus={effectiveLiveStatus}
          activeDataTable={activeDataTable}
          onSelectTable={handleSidebarTableChange}
          tabs={viewTabs}
          tableShortcuts={sidebarShortcuts}
          systemSection={resolvedSystemSection}
          onSelectSystemSection={setSystemSection}
        />
        <main className={mainClassName}>
          {globalError && <ErrorBanner message={globalError} />}
          {renderActive()}
        </main>
      </div>
      <ProfileModal
        state={profileModal}
        onClose={() => setProfileModal({ open: false, data: null, loading: false })}
        onBlockClient={handleBlockClient}
      />
      <AppointmentModal
        open={appointmentModal.open}
        appointment={appointmentModal.data}
        options={appointmentModal.options || optionsCache || {}}
        appointments={appointmentModal.context?.appointments || []}
        schedules={appointmentModal.context?.schedules || []}
        onClose={() => setAppointmentModal(buildAppointmentModalState())}
        onSave={handleSaveAppointment}
        isNew={appointmentModal.isNew}
        clients={dashboard?.clients || []}
        serviceCatalog={services}
        canDelete={appointmentModal.allowDelete}
        onDelete={appointmentModal.allowDelete ? handleDeleteAppointment : null}
      />
      <ConfirmDialog {...confirmDialog} onResult={handleConfirmResult} />
    </div>
  );
};
let reactAppRoot = null;
const renderApp = () => {
  const rootElement = document.getElementById('root');
  try {
    if (!rootElement) {
      throw new Error('Не найден контейнер #root');
    }
    if (!reactAppRoot) {
      reactAppRoot =
        typeof createRoot === 'function'
          ? createRoot(rootElement)
          : {
              render: (node) => ReactDOM.render(node, rootElement),
            };
    }
    reactAppRoot.render(<App />);
    sendClientLog({ level: 'info', stage: 'render-success' });
  } catch (error) {
    console.error('Fatal render error:', error);
    sendClientLog({
      level: 'error',
      stage: 'render-fatal',
      message: error?.message || '',
      stack: error?.stack || '',
    });
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="
          min-height:100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:16px;
          background-color:#020617;
          color:#fff;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding:24px;
          text-align:center;
        ">
          <div style="max-width:480px;border:1px solid rgba(248,113,113,0.4);background:rgba(15,23,42,0.85);border-radius:16px;padding:24px;">
            <p style="font-size:18px;font-weight:600;color:#fecaca;margin-bottom:12px;">
              Ошибка инициализации интерфейса
            </p>
            <p style="font-size:14px;color:#cbd5f5;white-space:pre-wrap;">
              ${error?.message || 'Смотрите консоль браузера (F12)'}
            </p>
          </div>
          <button style="
            border:1px solid #4b5563;
            background:transparent;
            color:#fff;
            border-radius:999px;
            padding:8px 20px;
            cursor:pointer;
          " onclick="window.location.reload()">
            Перезагрузить
          </button>
        </div>
      `;
    }
  }
};
renderApp();


