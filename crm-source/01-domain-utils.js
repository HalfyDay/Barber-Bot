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
TABLE_CONFIG.Appointments.label = 'Записи';
TABLE_CONFIG.Schedules.label = 'Расписание';
TABLE_CONFIG.Users.label = 'Клиенты';
TABLE_CONFIG.Barbers.label = 'Барберы';
TABLE_CONFIG.Services.label = 'Услуги';
TABLE_CONFIG.Positions.label = 'Должности';
TABLE_CONFIG.Revenue.label = 'Доходы';
TABLE_COLUMNS.Appointments[0].label = 'Клиент';
TABLE_COLUMNS.Appointments[1].label = 'Телефон';
TABLE_COLUMNS.Appointments[2].label = 'Барбер';
TABLE_COLUMNS.Appointments[3].label = 'Дата';
TABLE_COLUMNS.Appointments[4].label = 'Время';
TABLE_COLUMNS.Appointments[5].label = 'Статус';
TABLE_COLUMNS.Appointments[6].label = 'Услуги';
TABLE_COLUMNS.Appointments[7].label = 'ID клиента';
TABLE_COLUMNS.Appointments[8].label = 'Напоминание клиенту';
TABLE_COLUMNS.Appointments[9].label = 'Напоминание барберу';
TABLE_COLUMNS.Schedules[0].label = 'Барбер';
TABLE_COLUMNS.Schedules[1].label = 'День недели';
TABLE_COLUMNS.Schedules[2].label = 'Дата';
TABLE_COLUMNS.Schedules[3].label = 'Слоты';
TABLE_COLUMNS.Users[0].label = 'Имя';
TABLE_COLUMNS.Users[1].label = 'Телефон';
TABLE_COLUMNS.Users[3].label = 'Любимый мастер';
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
const sortServicesByOrder = (services = []) =>
  [...(Array.isArray(services) ? services : [])].sort((a, b) => {
    const leftOrder = Number(a?.orderIndex) || 0;
    const rightOrder = Number(b?.orderIndex) || 0;
    if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
  });
const ACTIVE_BARBER_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x0435, 0x043d);
const HIDDEN_BARBER_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442);
const ACTIVE_SERVICE_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x043d, 0x0430);
const HIDDEN_SERVICE_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442, 0x0430);
const buildVisitHistory = (appointments = []) => {
  if (!appointments.length) return [];
  const cutoff = Date.now() - YEAR_IN_MS;
  const history = appointments
    .map((appt) => {
      const dateValue = normalizeText(appt?.Date || appt?.date);
      const timeValue = normalizeText(appt?.Time || appt?.time);
      const statusValue = normalizeText(appt?.Status || appt?.status);
      const barberValue = normalizeText(appt?.Barber || appt?.barber);
      const servicesValue = Array.isArray(appt?.services)
        ? appt.services.filter(Boolean).join(', ')
        : normalizeText(appt?.Services);
      const startDate = getAppointmentStartDate(dateValue, timeValue, appt?.startDateTime || appt?.when);
      return {
        ...appt,
        Date: dateValue,
        Time: timeValue,
        Status: statusValue,
        Barber: barberValue,
        Services: servicesValue,
        startDate,
      };
    })
    .filter(
      (appt) =>
        appt.startDate &&
        appt.startDate.getTime() >= cutoff
    )
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  return history.map((appt, index) => ({
    ...appt,
    orderNumber: history.length - index,
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
defaultConfirmState.confirmLabel = 'Подтвердить';
defaultConfirmState.cancelLabel = 'Отмена';
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
const IconCheckSmall = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 10 3.5 3.5L15.5 6" />
  </svg>
);
const IconX = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
  </svg>
);
const IconStar = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="m10 2.2 2.4 4.86 5.36.78-3.88 3.78.92 5.34L10 14.48 5.2 17l.92-5.34-3.88-3.78 5.36-.78L10 2.2Z" />
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
const getNativeSessionBridge = () => {
  if (typeof window === 'undefined') return null;
  try {
    return window.BrotherShopSessionBridge || null;
  } catch (error) {
    return null;
  }
};
const isAppSiteRuntime = () => {
  if (typeof window === 'undefined') return false;
  try {
    const queryFlag = new URLSearchParams(window.location.search || '').get('appsite');
    return (
      /BrotherShopAppSite/i.test(window.navigator?.userAgent || '') ||
      queryFlag === '1' ||
      Boolean(getNativeSessionBridge())
    );
  } catch (error) {
    return /BrotherShopAppSite/i.test(window.navigator?.userAgent || '') || Boolean(getNativeSessionBridge());
  }
};
const readNativeSessionPayload = () => {
  const bridge = getNativeSessionBridge();
  if (!bridge || typeof bridge.getSessionPayload !== 'function') return null;
  try {
    const value = bridge.getSessionPayload();
    return typeof value === 'string' && value.trim() ? value : null;
  } catch (error) {
    console.warn('native session read error', error);
    return null;
  }
};
const readNativeRememberChoice = () => {
  const bridge = getNativeSessionBridge();
  if (!bridge || typeof bridge.getRememberChoice !== 'function') return null;
  try {
    const value = bridge.getRememberChoice();
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      if (normalized === 'true' || normalized === '1') return true;
      if (normalized === 'false' || normalized === '0') return false;
    }
    return null;
  } catch (error) {
    console.warn('native remember read error', error);
    return null;
  }
};
const persistNativeRememberChoice = (remember) => {
  const bridge = getNativeSessionBridge();
  if (!bridge || typeof bridge.saveRememberChoice !== 'function') return;
  try {
    bridge.saveRememberChoice(Boolean(remember));
  } catch (error) {
    console.warn('native remember save error', error);
  }
};
const persistNativeSessionPayload = (payload, remember) => {
  const bridge = getNativeSessionBridge();
  if (!bridge || typeof bridge.saveSessionPayload !== 'function') return;
  try {
    bridge.saveSessionPayload(payload, Boolean(remember));
  } catch (error) {
    console.warn('native session save error', error);
  }
};
const clearNativeSessionPayload = () => {
  const bridge = getNativeSessionBridge();
  if (!bridge || typeof bridge.clearSessionPayload !== 'function') return;
  try {
    bridge.clearSessionPayload();
  } catch (error) {
    console.warn('native session clear error', error);
  }
};
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
  const nativeSessionValue = readNativeSessionPayload();
  if (nativeSessionValue) {
    try {
      const remember =
        readNativeRememberChoice() ??
        safeStorageGet(getStorageArea('local'), REMEMBER_STORAGE_KEY) === '1';
      return { session: buildSessionPayload(JSON.parse(nativeSessionValue)), remember: Boolean(remember) };
    } catch (error) {
      console.warn('native session restore error', error);
    }
  }
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
  persistNativeRememberChoice(remember);
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
  persistNativeSessionPayload(serialized, remember);
};
const clearStoredSession = () => {
  safeStorageRemove(getStorageArea('local'), SESSION_STORAGE_KEY);
  safeStorageRemove(getStorageArea('session'), SESSION_STORAGE_KEY);
  clearNativeSessionPayload();
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
  [STATUS_ACTIVE]: 'bg-[color:var(--crm-primary-container)] text-[#eafffb]',
  [STATUS_DONE]: 'bg-[color:var(--crm-surface-4)] text-[var(--crm-text)]',
  [STATUS_CANCELLED]: 'bg-[rgba(127,29,29,0.62)] text-[#fff1f1]',
  [STATUS_NO_SHOW]: 'bg-[color:var(--crm-highlight)] text-[color:var(--crm-primary-on)]',
};
const getStatusBadgeClasses = (status) => {
  const normalized = normalizeStatusValue(status);
  return (
    STATUS_BADGE_MAP[normalized] || 'bg-[color:var(--crm-surface-4)] text-[var(--crm-text)]'
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
const buildManualTimeRangeValue = (start, end) => {
  const safeStart = sanitizeTimeToken(start);
  const safeEnd = sanitizeTimeToken(end);
  if (safeStart && safeEnd) {
    return `${safeStart} - ${safeEnd}`;
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
const MIN_AVAILABLE_APPOINTMENT_SLOT_MINUTES = 15;
const formatTimeTokenFromDate = (value) => {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) return '';
  return `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`;
};
const roundDateUpToMinutes = (value, stepMinutes = 5) => {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) return null;
  const next = new Date(value);
  next.setSeconds(0, 0);
  const minutes = next.getMinutes();
  const remainder = minutes % stepMinutes;
  if (remainder) {
    next.setMinutes(minutes + (stepMinutes - remainder));
  }
  if (next.getTime() < value.getTime()) {
    next.setMinutes(next.getMinutes() + stepMinutes);
  }
  return next;
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
const buildAvailableAppointmentSlots = ({ date, schedules = [], appointments = [], nowTs = Date.now() }) => {
  const safeDate = startOfLocalDay(date);
  if (!isValidDate(safeDate)) return [];
  const today = startOfLocalDay();
  if (safeDate.getTime() < today.getTime()) return [];
  const dateKey = getLocalISODateString(safeDate);
  const dayIndex = getDateWeekdayIndex(dateKey);
  const normalizedSchedules = (Array.isArray(schedules) ? schedules : []).filter((slot) => {
    const slotDate = getDateOnlyValue(slot?.Date);
    if (slotDate) return slotDate === dateKey;
    return getDayIndex(slot?.DayOfWeek) === dayIndex;
  });
  if (!normalizedSchedules.length) return [];
  const normalizedAppointments = (Array.isArray(appointments) ? appointments : [])
    .filter((record) => isActiveAppointmentStatus(record?.Status))
    .map((record) => {
      const start = resolveAppointmentStartDate(record);
      const end = ensureRangeEnd(start, resolveAppointmentEndDate(record));
      return {
        ...record,
        _startDate: start,
        _endDate: end,
        _barberKey: normalizeText(record?.Barber).trim().toLowerCase(),
      };
    })
    .filter((record) => record._startDate && record._endDate && getLocalISODateString(record._startDate) === dateKey);
  const now = new Date(nowTs);
  const minSlotMs = MIN_AVAILABLE_APPOINTMENT_SLOT_MINUTES * 60000;
  return normalizedSchedules.flatMap((slot, slotIndex) => {
    const barberLabel = normalizeText(slot?.Barber).trim();
    const barberKey = barberLabel.toLowerCase();
    const startDate = getAppointmentStartDate(dateKey, slot?.Week, slot?.startDateTime || slot?.when);
    const endDate = getAppointmentEndDate(dateKey, slot?.Week, slot?.startDateTime || slot?.when);
    if (!startDate || !endDate || endDate.getTime() <= startDate.getTime()) return [];
    let cursor = new Date(startDate);
    if (isSameLocalDay(safeDate, today)) {
      const roundedNow = roundDateUpToMinutes(now, 5);
      if (roundedNow && roundedNow.getTime() > cursor.getTime()) {
        cursor = roundedNow;
      }
    }
    if (cursor.getTime() >= endDate.getTime()) return [];
    const blockers = normalizedAppointments
      .filter((record) => record._barberKey === barberKey)
      .map((record) => ({ start: record._startDate, end: record._endDate }))
      .sort((left, right) => left.start.getTime() - right.start.getTime());
    const freeWindows = [];
    blockers.forEach((blocker) => {
      if (blocker.end.getTime() <= cursor.getTime()) return;
      if (blocker.start.getTime() > cursor.getTime()) {
        freeWindows.push({ start: new Date(cursor), end: new Date(Math.min(blocker.start.getTime(), endDate.getTime())) });
      }
      if (blocker.end.getTime() > cursor.getTime()) {
        cursor = new Date(Math.min(blocker.end.getTime(), endDate.getTime()));
      }
    });
    if (cursor.getTime() < endDate.getTime()) {
      freeWindows.push({ start: new Date(cursor), end: new Date(endDate) });
    }
    return freeWindows
      .filter((window) => window.end.getTime() - window.start.getTime() >= minSlotMs)
      .map((window, windowIndex) => ({
        id: `free-${dateKey}-${barberKey || 'barber'}-${slotIndex}-${windowIndex}`,
        Barber: barberLabel,
        Date: dateKey,
        Time: buildTimeRangeValue(formatTimeTokenFromDate(window.start), formatTimeTokenFromDate(window.end)),
        startDate: window.start,
        endDate: window.end,
      }));
  });
};
const buildCalendarDayEntries = (appointments = [], freeSlots = []) =>
  [
    ...appointments.map((record, index) => ({
      kind: 'appointment',
      key: getRecordId(record) || `appointment-${index}-${record.Date}-${record.Time}`,
      startTs: resolveAppointmentStartDate(record)?.getTime() || 0,
      record,
    })),
    ...freeSlots.map((slot, index) => ({
      kind: 'slot',
      key: slot.id || `slot-${index}-${slot.Date}-${slot.Time}`,
      startTs: slot.startDate?.getTime?.() || 0,
      slot,
    })),
  ].sort((left, right) => left.startTs - right.startTs);
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

