const { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect, Fragment } = React;
const { createPortal, createRoot } = ReactDOM;

const resolveDefaultApiBaseUrl = () => {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return `${window.location.origin}/api`;
  }
  return 'http://localhost:3000/api';
};

const DEFAULT_API_BASE_URL = resolveDefaultApiBaseUrl();
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;

const VIEW_TABS = [
  { id: 'dashboard', label: 'Обзор' },
  { id: 'tables', label: 'Данные' },
  { id: 'bot', label: 'Бот' },
  { id: 'system', label: 'Система' },
];

const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Barbers', 'Services'];
const DATA_TABLES = ['Appointments', 'Schedules', 'Users'];

const TABLE_CONFIG = {
  Appointments: { label: 'Записи', mode: 'data', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'desc' } },
  Schedules: { label: 'Расписание', mode: 'data', canCreate: false, supportsBarberFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Users: { label: 'Клиенты', mode: 'data', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Barbers: { label: 'Барберы', mode: 'custom' },
  Services: { label: 'Услуги', mode: 'custom' },
};

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

const RATING_MIN = 3;
const RATING_MAX = 5;
const RATING_STEP = 0.5;
let avatarOptionsCache = null;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
const buildNewBarberState = () => ({
  name: '',
  password: '',
  rating: '5',
  color: '#6d28d9',
  avatarUrl: '',
  description: '',
  phone: '',
  telegramId: '',
  isActive: true,
});
const buildNewServiceState = () => ({
  name: '',
  duration: 60,
  prices: {},
});
const defaultConfirmState = {
  open: false,
  title: '',
  message: '',
  confirmLabel: 'Подтвердить',
  cancelLabel: 'Отмена',
  tone: 'neutral',
};
const getRecordId = (record = {}) => record.id || record.Id || record.ID || record.recordId || record.ID_Record || null;

const classNames = (...classes) => classes.filter(Boolean).join(' ');
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
  return `${numberFormatter.format(numeric)} ₽`;
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

const buildSessionPayload = (payload = {}) => {
  const normalizedLogin = resolveLogin(payload.username || payload.login);
  return {
    ...payload,
    username: normalizedLogin,
    displayName: payload.displayName || payload.name || normalizedLogin,
    barberId: payload.barberId || payload.id || null,
  };
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

const formatDateTime = (date, time) => {
  const datePart = formatDate(date);
  const timePart = formatTime(time);
  if (datePart === '-' && timePart === '-') return '-';
  if (datePart === '-') return timePart;
  if (timePart === '-') return datePart;
  return `${datePart} | ${timePart}`;
};
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

const STATUS_TRANSLATIONS = {
  active: 'Активная',
  'активная': 'Активная',
  confirm: 'Подтверждена',
  confirmed: 'Подтверждена',
  'подтверждено': 'Подтверждена',
  'подтверждена': 'Подтверждена',
  done: 'Выполнена',
  complete: 'Выполнена',
  completed: 'Выполнена',
  finished: 'Выполнена',
  'выполнена': 'Выполнена',
  'завершена': 'Выполнена',
  cancel: 'Отменено',
  canceled: 'Отменено',
  cancelled: 'Отменено',
  'отмена': 'Отменено',
  'отменено': 'Отменено',
  'no show': 'Не пришёл',
  'no-show': 'Не пришёл',
  noshow: 'Не пришёл',
  missed: 'Не пришёл',
  pending: 'В обработке',
  wait: 'В обработке',
  waiting: 'В обработке',
  processing: 'В обработке',
};
const STATUS_BADGE_MAP = {
  Активная: 'border border-sky-500/30 bg-sky-500/10 text-sky-100',
  Подтверждена: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-100',
  Завершена: 'border border-indigo-500/30 bg-indigo-500/10 text-indigo-100',
  Отменена: 'border border-rose-500/30 bg-rose-500/10 text-rose-100',
  'Не пришёл': 'border border-amber-500/30 bg-amber-500/10 text-amber-100',
};
const getStatusBadgeClasses = (status) => {
  const normalized = normalizeStatusValue(status);
  return (
    STATUS_BADGE_MAP[normalized] || 'border border-slate-600/60 bg-slate-800/70 text-slate-200'
  );
};

const INACTIVE_STATUS_TOKENS = ['выполн', 'заверш', 'done', 'cancel', 'отмен', 'не приш', 'noshow', 'no-show', 'missed', 'проср', 'expired'];
const ACTIVE_STATUS_TOKENS = ['актив', 'active', 'подтверж', 'confirm', 'ожид', 'pending', 'wait', 'ждем', 'ждём', 'нов', 'new'];
const COMPLETED_STATUS_TOKENS = ['выполн', 'заверш', 'done', 'complete', 'готов'];

const normalizeStatusValue = (status) => {
  const normalized = normalizeText(status).trim();
  if (!normalized) return '';
  const translated = STATUS_TRANSLATIONS[normalized.toLowerCase()];
  if (translated) return translated;
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};

const normalizeStatusList = (statuses = []) => {
  const seen = new Set();
  return statuses
    .map((status) => normalizeStatusValue(status))
    .filter((status) => {
      if (!status || seen.has(status)) return false;
      seen.add(status);
      return true;
    });
};

const isCompletedAppointmentStatus = (status) => {
  const normalized = normalizeStatusValue(status).toLowerCase();
  if (!normalized) return false;
  return COMPLETED_STATUS_TOKENS.some((token) => normalized.includes(token));
};

const sanitizeTimeToken = (value) => {
  const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return '';
  const hours = match[1].padStart(2, '0');
  const minutes = match[2];
  return `${hours}:${minutes}`;
};

const parseTimeRangeValue = (value) => {
  const safe = normalizeText(value).replace(/[—–]/g, '-');
  if (!safe) return { start: '', end: '' };
  const [rawStart, rawEnd = ''] = safe.split('-').map((part) => part.trim());
  return {
    start: sanitizeTimeToken(rawStart),
    end: sanitizeTimeToken(rawEnd),
  };
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

const isActiveAppointmentStatus = (status) => {
  const normalized = normalizeStatusValue(status).toLowerCase();
  if (!normalized) return false;
  if (INACTIVE_STATUS_TOKENS.some((token) => normalized.includes(token))) return false;
  if (ACTIVE_STATUS_TOKENS.some((token) => normalized.includes(token))) return true;
  return true;
};

const shouldDisplayAppointment = (appointment, nowTs = Date.now()) => {
  const status = normalizeStatusValue(appointment.Status);
  if (!isActiveAppointmentStatus(status)) return false;
  const startDate = getAppointmentStartDate(appointment.Date, appointment.Time, appointment.startDateTime);
  if (!startDate) return false;
  return startDate.getTime() >= nowTs;
};

const parseMultiValue = (value) =>
  normalizeText(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const LoadingState = ({ label = 'Загружаю данные...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-slate-300">
    <span className="animate-pulse">{label}</span>
  </div>
);

const ErrorBanner = ({ message }) => (
  <div className="rounded-lg bg-rose-600 px-4 py-3 text-white">{message}</div>
);

const SectionCard = ({ title, actions, children }) => (
  <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {actions}
    </div>
    {children}
  </div>
);
const LiveBadge = ({ timestamp, label = 'LIVE' }) => {
  const tickingNow = useNowTick(1000);
  if (!timestamp) return null;
  const timeLabel = formatLiveTimestamp(timestamp, tickingNow);
  return (
    <span className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      {label}
      {timeLabel && <span className="text-emerald-100/80 normal-case tracking-normal">{timeLabel}</span>}
    </span>
  );
};

const IconTrash = ({ className = 'h-4 w-4' }) => (
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

const Modal = ({ title, isOpen, onClose, children, footer, maxWidthClass = 'max-w-3xl' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
      <div className={`max-h-[90vh] w-full ${maxWidthClass} overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl`}>
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">x</button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-4 space-y-4">{children}</div>
        {footer && <div className="flex justify-end gap-3 border-t border-slate-800 px-6 py-4">{footer}</div>}
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

const StatCard = ({ label, value, accent = 'text-indigo-300' }) => (
  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-4">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <p className={classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)}>{value}</p>
  </div>
);

const Sidebar = ({ session, activeTab, onChange, onLogout }) => {
  const username = session?.displayName || session?.username || '—';

  return (
    <aside className="hidden w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto">
      <div className="space-y-1 border-b border-slate-800 pb-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">Вы вошли как</p>
        <p className="text-lg font-semibold text-white">{username}</p>
        <button
          onClick={onLogout}
          className="mt-2 w-full rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-500 hover:text-white"
        >
          Выйти
        </button>
      </div>
      <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
        {VIEW_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
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
          );
        })}
      </nav>
    </aside>
  );
};

const MobileTabs = ({ session, activeTab, onChange, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = session?.displayName || session?.username || '—';
  const handleSelect = (tabId) => {
    onChange?.(tabId);
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-indigo-500 hover:text-white"
          aria-label="Открыть меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-wide text-slate-400">Вы вошли как</p>
          <p className="text-base font-semibold text-white">{username}</p>
        </div>
        <button
          onClick={onLogout}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-rose-200 hover:border-rose-400 hover:text-white"
        >
          Выйти
        </button>
      </div>
      <div className="flex overflow-x-auto border-t border-slate-800">
        {VIEW_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={classNames(
              'flex-1 whitespace-nowrap px-3 py-2 text-xs font-semibold',
              activeTab === tab.id ? 'text-indigo-300' : 'text-slate-400'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {menuOpen && (
        <div className="space-y-3 border-t border-slate-800 bg-slate-900/90 px-4 py-4">
          <p className="text-sm text-slate-300">Разделы</p>
          <div className="grid grid-cols-2 gap-2">
            {VIEW_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={classNames(
                  'rounded-lg px-3 py-2 text-left text-sm font-semibold',
                  activeTab === tab.id ? 'bg-indigo-600/80 text-white' : 'bg-slate-800/70 text-slate-200'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={onLogout}
            className="w-full rounded-lg border border-rose-500 px-3 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/10"
          >
            Выйти из аккаунта
          </button>
        </div>
      )}
    </div>
  );
};
const DashboardView = ({ data, onOpenAppointment, onOpenProfile, onCreateAppointment, liveMeta = null }) => {
  if (!data) return <LoadingState />;
  const stats = data.stats || {};

  const upcomingRaw = data.appointments?.upcoming || [];

  const upcomingList = useMemo(() => {
    const nowTs = Date.now();
    return upcomingRaw
      .map((appt) => ({ ...appt, Status: normalizeStatusValue(appt.Status) }))
      .filter((appt) => shouldDisplayAppointment(appt, nowTs))
      .sort((a, b) => {
        const left = getAppointmentStartDate(a.Date, a.Time, a.startDateTime)?.getTime() || Number.MAX_SAFE_INTEGER;
        const right = getAppointmentStartDate(b.Date, b.Time, b.startDateTime)?.getTime() || Number.MAX_SAFE_INTEGER;
        return left - right;
      })
      .slice(0, 12);
  }, [upcomingRaw]);

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

  const upcomingActions =
    liveMeta?.updatedAt || onCreateAppointment
      ? (
          <div className="flex flex-wrap items-center gap-3">
            {liveMeta?.updatedAt && <LiveBadge timestamp={liveMeta.updatedAt} />}
            {onCreateAppointment && (
              <button onClick={onCreateAppointment} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
                + Создать запись
              </button>
            )}
          </div>
        )
      : null;

  return (
    <div className="space-y-6">
      <SectionCard title="Ключевые показатели">
        <div className="grid gap-4 stat-grid">
          <StatCard label="Всего клиентов" value={stats.totalUsers ?? 0} />
          <StatCard label="Активные записи" value={stats.activeAppointments ?? 0} accent="text-emerald-300" />
          <StatCard label="Подтверждено за год" value={stats.confirmedYear ?? 0} accent="text-fuchsia-300" />
          <StatCard label="Сегодня" value={stats.todaysAppointments ?? 0} accent="text-cyan-300" />
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
                <div className="space-y-3">
                  {group.items.map((appt) => {
                    const cardProps = {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => onOpenAppointment?.(appt, { allowDelete: true }),
                      onKeyDown: (event) => event.key === 'Enter' && onOpenAppointment?.(appt, { allowDelete: true }),
                      className:
                        'group upcoming-card relative w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-5',
                    };
                    const { start, end } = parseTimeRangeParts(appt.Time);
                    const statusLabel = normalizeStatusValue(appt.Status);
                    const servicesList = parseMultiValue(appt.Services);
                    const phoneLabel = appt.Phone ? formatPhoneInput(appt.Phone) : '';
                    const phoneHref = phoneLabel ? phoneLabel.replace(/[^\d+]/g, '') : '';
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
                        <div className="mt-4 grid gap-3 text-[13px] text-slate-300 upcoming-card-grid sm:text-sm">
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
                          <div className="space-y-3 min-w-0">
                            {phoneLabel && phoneHref && (
                              <a
                                href={`tel:${phoneHref}`}
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600/60 px-3 py-1 text-xs text-slate-200 hover:border-indigo-500 hover:text-white sm:w-auto sm:justify-start sm:text-sm"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.26a1.5 1.5 0 00-1.093-1.44l-4.443-1.27a1.5 1.5 0 00-1.726.752l-.79 1.58a1.5 1.5 0 01-2.278.536A15.052 15.052 0 018.352 14.4a1.5 1.5 0 01.536-2.278l1.58-.79a1.5 1.5 0 00.752-1.726l-1.27-4.443A1.5 1.5 0 009.51 4.07H8.25A2.25 2.25 0 006 6.32z"
                                  />
                                </svg>
                                {phoneLabel}
                              </a>
                            )}
                            {appt.UserID && (
                              <p className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
                                ID клиента:{' '}
                                <span className="font-semibold text-slate-200">{appt.UserID}</span>
                              </p>
                            )}
                          </div>
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
    </div>
  );
};
const BarberAvatarPicker = ({ value, onChange }) => {
  const [avatarOptions, setAvatarOptions] = useState(() => avatarOptionsCache || []);
  const [loading, setLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const normalizedValue = normalizeImagePath(value);

  useEffect(() => {
    if (!value || typeof onChange !== 'function') return;
    const normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      onChange(normalized);
    }
  }, [value, onChange]);

  const availableOptions = useMemo(() => {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue, ...avatarOptions];
  }, [avatarOptions, normalizedValue]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const assets = await fetchAvatarOptions();
        if (!isMounted) return;
        avatarOptionsCache = assets;
        setAvatarOptions(assets);
      } catch (error) {
        console.error('Avatar load error', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const previewSrc = resolveAssetUrl(normalizedValue || avatarOptions[0] || '');

  return (
    <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {previewSrc ? (
          <img src={previewSrc} alt="avatar" className="h-16 w-16 rounded-full border border-slate-700 object-cover" />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-slate-700 text-[10px] uppercase text-slate-500">
            нет фото
          </div>
        )}
        <div className="flex-1 space-y-2">
          <label className="text-xs uppercase tracking-wide text-slate-400">Изображение из папки “Image”</label>
          <select
            value={normalizedValue || ''}
            onChange={(event) => onChange(normalizeImagePath(event.target.value))}
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
          >
            <option value="">Без изображения</option>
            {availableOptions.map((option) => (
              <option key={option} value={option}>
                {option.replace('/Image/', '')}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setShowGallery((prev) => !prev)}
            className="text-left text-sm text-indigo-300 hover:text-indigo-100 disabled:text-slate-500"
            disabled={loading}
          >
            {loading
              ? 'Загружаем список'
              : avatarOptions.length
                ? showGallery
                  ? 'Скрыть галерею'
                  : 'Показать галерею'
                : 'Нет файлов в папке Image'}
          </button>
        </div>
      </div>
      {showGallery && avatarOptions.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {avatarOptions.map((preset) => {
            const isSelected = preset === normalizedValue;
            return (
              <button
                type="button"
                key={preset}
                onClick={() => onChange(preset)}
                className={`rounded-lg border p-1 transition hover:border-indigo-400 hover:bg-slate-800 ${
                  isSelected ? 'border-indigo-500 bg-indigo-500/20' : 'border-slate-700 bg-slate-900'
                }`}
              >
                <img src={resolveAssetUrl(preset)} alt="avatar preset" className="h-16 w-full rounded-md object-cover" />
              </button>
            );
          })}
        </div>
      )}
      {!avatarOptions.length && !loading && <p className="text-sm text-slate-500">Добавьте изображения в папку /Image, чтобы выбрать аватар.</p>}
    </div>
  );
};

const RatingSlider = ({ value, onChange, dense = false }) => {
  const ratingValue = Number(value || RATING_MAX).toFixed(1);
  const wrapperClass = dense
    ? 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5'
    : 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2';
  const labelClass = dense
    ? 'flex items-center justify-between text-xs text-slate-300'
    : 'flex items-center justify-between text-sm text-slate-300';
  return (
    <div className={wrapperClass}>
      <label className={labelClass}>
        <span>Рейтинг</span>
        <span className="font-semibold text-white">{ratingValue}</span>
      </label>
      <input type="range" min={RATING_MIN} max={RATING_MAX} step={RATING_STEP} value={Number(value) || RATING_MAX} onChange={onChange} className="w-full accent-indigo-500" />
    </div>
  );
};

const BarbersView = ({ barbers = [], onFieldChange, onSave, onAdd, onDelete }) => {
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

  const handleFieldChange = (field, value) => {
    if (isCreateMode) {
      setDraftBarber((prev) => ({ ...prev, [field]: value }));
    } else if (activeBarber) {
      onFieldChange?.(activeBarber.id, field, value);
    }
  };

  const handleSave = () => {
    if (isCreateMode) {
      onAdd?.(draftBarber);
      setDraftBarber(buildNewBarberState());
    } else if (activeBarber) {
      onSave?.(activeBarber);
    }
    closeEditor();
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
        {barber.isActive !== false ? 'Активен' : 'Скрыт'}
      </span>
    ) : null;

  const canSubmit = isCreateMode ? Boolean(workingBarber?.name?.trim() && workingBarber?.password?.trim()) : Boolean(workingBarber);

  return (
    <div className="space-y-6">
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
              const ratingLabel = Number(barber.rating || RATING_MAX).toFixed(1);
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
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-lg font-semibold text-slate-200">
                        {(barber.name || 'B').slice(0, 1)}
                      </div>
                    )}
                    <span
                      className={classNames(
                        'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900',
                        barber.isActive !== false ? 'bg-emerald-400' : 'bg-slate-600'
                      )}
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold text-white sm:text-lg">{barber.name || 'Без имени'}</p>
                      {renderStatusBadge(barber)}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 sm:text-sm">
                      <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-200">
                        ★ {ratingLabel}
                      </span>
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
        maxWidthClass="max-w-3xl"
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
              disabled={!canSubmit}
              className={classNames(
                'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                canSubmit ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300'
              )}
            >
              {isCreateMode ? 'Добавить' : 'Сохранить'}
            </button>
          </>
        }
      >
        {workingBarber ? (
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <input
                value={workingBarber.name || ''}
                onChange={(event) => handleFieldChange('name', event.target.value)}
                placeholder="Имя"
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
              />
              <RatingSlider dense value={workingBarber.rating} onChange={(event) => handleFieldChange('rating', event.target.value)} />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="password"
                value={workingBarber.password || ''}
                onChange={(event) => handleFieldChange('password', event.target.value)}
                placeholder="Пароль"
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
              />
              <label className="flex items-center justify-between gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
                Цвет
                <input
                  type="color"
                  value={/^#/.test(workingBarber.color || '') ? workingBarber.color : '#6d28d9'}
                  onChange={(event) => handleFieldChange('color', event.target.value)}
                  className="h-10 w-16 cursor-pointer rounded border border-slate-500 bg-transparent"
                />
              </label>
            </div>
            <textarea
              value={workingBarber.description || ''}
              onChange={(event) => handleFieldChange('description', event.target.value)}
              placeholder="Описание"
              rows={4}
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
            />
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="tel"
                value={workingBarber.phone || ''}
                onChange={(event) => handleFieldChange('phone', event.target.value)}
                placeholder="Телефон"
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
              />
              <input
                value={workingBarber.telegramId || ''}
                onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                placeholder="Telegram ID"
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
              />
            </div>
            <BarberAvatarPicker value={workingBarber.avatarUrl} onChange={(value) => handleFieldChange('avatarUrl', value)} />
            <label className="inline-flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" checked={workingBarber.isActive !== false} onChange={(event) => handleFieldChange('isActive', event.target.checked)} />
              Активен
            </label>
          </div>
        ) : (
          <p className="text-slate-300">Выберите барбера, чтобы изменить данные.</p>
        )}
      </Modal>
    </div>
  );
};

const ServicesView = ({ services = [], barbers = [], onFieldChange, onPriceChange, onDelete, onAdd }) => {
  const [editorState, setEditorState] = useState({ open: false, mode: 'edit', targetId: null });
  const [draftService, setDraftService] = useState(buildNewServiceState);

  const openEditor = (mode, targetId = null) => {
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
    if (isCreateMode) {
      if (!workingService?.name?.trim()) return;
      onAdd?.(draftService);
      setDraftService(buildNewServiceState());
    }
    closeEditor();
  };

  const handleDeleteLocal = () => {
    if (!isCreateMode && activeService) {
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
        details: barbers.length ? 'Нажмите, чтобы добавить' : 'Нет барберов для назначения',
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
          <button
            onClick={() => openEditor('create')}
            className="rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
          >
            + Добавить услугу
          </button>
        }
      >
        {services.length === 0 ? (
          <p className="text-slate-400">Список услуг пуст. Добавьте первую услугу.</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {services.map((service) => {
              const summary = servicePriceSummary(service);
              return (
                <button
                  key={service.id}
                  onClick={() => openEditor('edit', service.id)}
                  className="group flex w-full flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-white sm:text-lg">{service.name || 'Без названия'}</p>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                      {service.duration ? `${service.duration} мин` : '—'}
                    </span>
                  </div>
                  <div className="text-sm text-slate-100">{summary.label}</div>
                  <p className="text-xs text-slate-400">{summary.details}</p>
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
            {!isCreateMode && (
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
              {isCreateMode ? 'Добавить' : 'Готово'}
            </button>
          </>
        }
      >
        {workingService ? (
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-sm text-slate-300">Название</label>
                <input
                  value={workingService.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Например, стрижка"
                  className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm text-slate-300">Длительность, мин</label>
                <input
                  type="number"
                  min={5}
                  step={5}
                  value={workingService.duration ?? ''}
                  onChange={(event) =>
                    handleFieldChange('duration', event.target.value === '' ? '' : Number(event.target.value))
                  }
                  className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Цены по барберам</p>
              {barbers.length ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {barbers.map((barber) => (
                    <label key={barber.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-white">
                      <span className="truncate">{barber.name || 'Без имени'}</span>
                      <input
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
                <p className="text-sm text-slate-500">Добавьте барберов, чтобы назначать цены.</p>
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

const MultiSelectCell = ({ value, options = [], onCommit }) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(parseMultiValue(value));
  const anchorRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setDraft(parseMultiValue(value));
  }, [value]);

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
    setDraft((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
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
                    setDraft(parseMultiValue(value));
                    setOpen(false);
                  }}
                >
                  ✕
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
                      <span className="text-slate-400">×</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="max-h-56 space-y-1 overflow-y-auto pr-1">
                {options.length === 0 && <p className="text-slate-400">Нет доступных услуг</p>}
                {options.map((option) => {
                  const isActive = draft.includes(option);
                  return (
                    <label
                      key={option}
                      className={classNames(
                        'flex items-center justify-between rounded-xl border px-3 py-2',
                        isActive ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 text-slate-200 hover:border-indigo-500/60'
                      )}
                    >
                      <span className="pr-2 text-left">{option}</span>
                      <input type="checkbox" checked={isActive} onChange={() => toggleOption(option)} className="h-4 w-4 rounded border-slate-500 accent-indigo-500" />
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
  placeholder = 'Нажмите, чтобы выбрать',
  buttonClassName = 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white whitespace-nowrap',
}) => {
  const [open, setOpen] = useState(false);
  const [{ start, end }, setDraft] = useState(() => parseTimeRangeValue(value));

  const normalizeHourValue = (inputValue) => {
    if (!inputValue) return '';
    const [hours] = inputValue.split(':');
    if (!hours) return '';
    return `${hours.padStart(2, '0')}:00`;
  };

  const handleOpen = () => {
    setDraft(parseTimeRangeValue(value));
    setOpen(true);
  };

  const handleSave = () => {
    onChange?.(buildTimeRangeValue(start, end));
    setOpen(false);
  };

  const handleClear = () => {
    onChange?.('');
    setDraft({ start: '', end: '' });
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen} className={buttonClassName}>
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
              Закрыть
            </button>
            <button type="button" onClick={handleSave} className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">
              Сохранить
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Выберите время для начала и завершения</p>
            <button type="button" onClick={handleClear} className="text-xs text-slate-400 hover:text-slate-100">
              Очистить
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400">Старт</label>
              <input
                type="time"
                step="3600"
                value={start}
                onChange={(event) => setDraft((prev) => ({ ...prev, start: normalizeHourValue(event.target.value) }))}
                className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
              />
            </div>
            <span className="text-2xl font-light text-slate-500">-</span>
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400">Финиш</label>
              <input
                type="time"
                step="3600"
                value={end}
                onChange={(event) => setDraft((prev) => ({ ...prev, end: normalizeHourValue(event.target.value) }))}
                className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
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
        placeholder="—"
        title={tableId === 'Schedules' ? 'Редактирование слотов' : 'Выбор времени'}
        buttonClassName="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white"
      />
    );
  }

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
          <input type="checkbox" checked={value === true || value === 'true' || value === 1 || value === '1'} onChange={(event) => commit(event.target.checked ? 'true' : '')} />
        </label>
      );
    case 'multi-select':
      return <MultiSelectCell value={value} options={options[column.optionsKey] || []} onCommit={commit} />;
    case 'date':
      return (
        <input type="date" value={value ? String(value).slice(0, 10) : ''} onChange={(event) => commit(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white" />
      );
    default:
      return (
        <input type="text" value={draft || ''} onChange={(event) => setDraft(event.target.value)} onBlur={() => commit()} onKeyDown={(event) => event.key === 'Enter' && commit()} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white" />
      );
  }
};

const ColumnMenu = ({ columns, hiddenColumns = [], onToggle }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, open ? () => setOpen(false) : null);

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white">
        Поля
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
          {columns.map((column) => (
            <label key={column.key} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" checked={!hiddenColumns.includes(column.key)} onChange={() => onToggle(column.key)} />
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
  const selected = useMemo(() => (Array.isArray(value) ? value : parseMultiValue(value)), [value]);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return options;
    return options.filter((option) => option.toLowerCase().includes(normalizedQuery));
  }, [options, normalizedQuery]);

  const toggle = (option) => {
    if (!onChange) return;
    const exists = selected.includes(option);
    const next = exists ? selected.filter((item) => item !== option) : [...selected, option];
    onChange(next);
  };

  return (
    <div className="space-y-3">
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
              <span className="text-slate-400">×</span>
            </button>
          ))}
        </div>
      )}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/60">
        <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z" />
          </svg>
          <input
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
                const isActive = selected.includes(option);
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
                    {isActive && <span className="text-xs text-indigo-300">✓</span>}
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
      {label && <label className="text-sm text-slate-300">{label}</label>}
      <input
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
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white">
        Статусы
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
          {statuses.length === 0 && <p className="text-sm text-slate-500">Нет статусов</p>}
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" checked={!hiddenStatuses.includes(status)} onChange={() => onToggle(status)} />
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
  barbers,
  supportsStatusFilter,
  statuses,
  hiddenStatuses,
  toggleStatus,
  resetStatuses,
  columns,
  hiddenColumns,
  toggleColumn,
  canCreate,
  onOpenCreate,
  onRefresh,
  showPastAppointments,
  setShowPastAppointments,
  supportsGrouping = false,
  groupByDate = false,
  setGroupByDate,
  lastUpdatedAt = null,
}) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex flex-1 flex-wrap gap-3">
      <label className="relative w-full sm:w-64">
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
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Поиск..."
          aria-label="Поиск по таблице"
          className="w-full rounded-lg border border-slate-600 bg-slate-900 py-2 pl-9 pr-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        />
      </label>
      {supportsBarberFilter && (
        <select value={selectedBarber} onChange={(event) => setSelectedBarber(event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="all">Все барберы</option>
          {barbers.map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>
      )}
      {supportsStatusFilter && (
        <StatusMenu statuses={statuses} hiddenStatuses={hiddenStatuses} onToggle={toggleStatus} onReset={resetStatuses} />
      )}
      {tableId === 'Appointments' && typeof setShowPastAppointments === 'function' && (
        <label className="flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-white">
          <input
            type="checkbox"
            className="accent-indigo-500"
            checked={!!showPastAppointments}
            onChange={(event) => setShowPastAppointments(event.target.checked)}
          />
          Показать прошедшие
        </label>
      )}
      {supportsGrouping && typeof setGroupByDate === 'function' && (
        <label className="flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-white">
          <input
            type="checkbox"
            className="accent-indigo-500"
            checked={!!groupByDate}
            onChange={(event) => setGroupByDate(event.target.checked)}
          />
          Группировать по дням
        </label>
      )}
      <ColumnMenu columns={columns} hiddenColumns={hiddenColumns} onToggle={toggleColumn} />
    </div>
    <div className="flex flex-wrap items-center gap-2">
      {lastUpdatedAt && <LiveBadge timestamp={lastUpdatedAt} />}
      <button onClick={onRefresh} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800">
        Обновить
      </button>
      {canCreate && (
        <button onClick={onOpenCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
          + Добавить
        </button>
      )}
    </div>
  </div>
);
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
  groupByDate = true,
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
      <div className="space-y-6">
        {groupedRows.map((group) => (
          <div key={group.key} className="space-y-3">
            {group.label && (
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                <span className="h-px flex-1 bg-slate-700" />
                {group.label}
                <span className="h-px flex-1 bg-slate-700" />
              </div>
            )}
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {group.rows.map((record) => {
                const recordId = getRecordId(record);
                const statusLabel = normalizeStatusValue(record.Status) || '—';
                return (
                  <article key={recordId} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-black/10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Запись</p>
                        <p className="text-base font-semibold text-white">{record.CustomerName || 'Без имени'}</p>
                        <p className="text-xs text-slate-400">{formatDateTime(record.Date, record.Time)}</p>
                      </div>
                      <span className={classNames('text-xs font-semibold', getStatusBadgeClasses(record.Status))}>{statusLabel}</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {visibleColumns.map((column) => (
                        <div key={`${recordId}-${column.key}`} className="space-y-1">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{column.label}</p>
                          <div className="rounded-lg border border-slate-700 bg-slate-950/40 px-2 py-1.5">
                            <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                          </div>
                        </div>
                      ))}
                    </div>
                    {onDelete && (
                      <button
                        onClick={() => onDelete(record)}
                        className="w-full rounded-lg border border-rose-500 px-3 py-2 text-sm text-rose-200 hover:bg-rose-500/10"
                        aria-label="Удалить запись"
                      >
                        Удалить запись
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
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
                  <p className="text-base font-semibold text-white">{record[visibleColumns[0]?.key] || '—'}</p>
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
                    <EditableCell
                      record={record}
                      column={column}
                      options={options}
                      onUpdate={onUpdate}
                      onOpenProfile={onOpenProfile}
                      tableId={tableId}
                    />
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
                    {column.sortable !== false && (
                      <SortIndicator direction={sortConfig?.key === column.key ? sortConfig.direction : null} />
                    )}
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
        <>
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
            Отмена
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
            Сохранить
          </button>
        </>
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
              <input type={column.type === 'date' ? 'date' : 'text'} value={value || ''} onChange={(event) => setDraft((prev) => ({ ...prev, [column.key]: event.target.value }))} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
            </div>
          );
        })}
      </form>
    </Modal>
  );
};

const ProfileModal = ({ state, onClose }) => {
  const appointments = state.data?.appointments || [];
  const visitHistory = useMemo(() => {
    if (!appointments.length) return [];
    const cutoff = Date.now() - YEAR_IN_MS;
    const completed = appointments
      .map((appt) => {
        const startDate = getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime);
        return { ...appt, startDate };
      })
      .filter((appt) => appt.startDate && appt.startDate.getTime() >= cutoff && isCompletedAppointmentStatus(appt.Status))
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    return completed.map((appt, index) => ({
      ...appt,
      orderNumber: completed.length - index,
      dateLabel: formatDateTime(appt.Date, appt.Time),
    }));
  }, [appointments]);

  return (
    <Modal
      title={state.data?.user?.Name || 'Профиль клиента'}
      isOpen={state.open}
      onClose={onClose}
      footer={<button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">Закрыть</button>}
    >
      {state.loading && <LoadingState label="Загружаю профиль..." />}
      {!state.loading && state.data?.error && <ErrorBanner message={state.data.error} />}
      {!state.loading && state.data?.user && (
        <div className="space-y-4">
          <div className="grid gap-2 text-sm text-slate-200">
            <div><span className="text-slate-400">Телефон:</span> {state.data.user.Phone || '-'}</div>
            <div><span className="text-slate-400">Telegram:</span> {state.data.user.TelegramID || '-'}</div>
            <div><span className="text-slate-400">Барбер:</span> {state.data.user.Barber || '-'}</div>
          </div>
          <div>
            <p className="text-sm text-slate-400">История визитов</p>
            <div className="mt-2 max-h-64 space-y-2 overflow-auto">
              {visitHistory.length ? (
                <>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Выполнено за 12 месяцев: <span className="font-semibold text-white">{visitHistory.length}</span></span>
                    <span>Только завершённые записи</span>
                  </div>
                  {visitHistory.map((appt, index) => {
                    const isLatest = index === 0;
                    return (
                      <div
                        key={`${appt.id || appt.dateLabel}-${appt.orderNumber}`}
                        className={classNames(
                          'rounded-lg border p-3 text-xs transition',
                          isLatest ? 'border-emerald-400/60 bg-emerald-500/10 shadow-inner shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/40'
                        )}
                      >
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-slate-400">
                          <span className="font-semibold text-white">Стрижка №{appt.orderNumber}</span>
                          <span>{appt.dateLabel}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-100">{appt.Barber || '—'}</p>
                        <p className="text-slate-400">{appt.Services || '—'}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <p className="text-sm text-slate-500">Выполненных записей за последний год нет.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

const BackupsPanel = ({ backups = [], onRestore, onCreate }) => (
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
        {backups.map((backup) => (
          <div key={backup} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
            <span>{backup}</span>
            <button onClick={() => onRestore(backup)} className="text-indigo-300 hover:text-indigo-100">
              Восстановить
            </button>
          </div>
        ))}
      </div>
    )}
  </SectionCard>
);

const AppointmentModal = ({ open, appointment, options = {}, onClose, onSave, onDelete, canDelete = false, isNew = false, clients = [] }) => {
  const buildDraft = useCallback(
    (record) => (record ? { ...record, UserID: record.UserID || record.userId || '', Status: normalizeStatusValue(record.Status) } : null),
    []
  );
  const [draft, setDraft] = useState(buildDraft(appointment));

  useEffect(() => {
    if (!open) return;
    setDraft(buildDraft(appointment));
  }, [appointment, buildDraft, open]);

  if (!open || !draft) return null;

  const servicesSelection = parseMultiValue(draft.Services);
  const handleChange = (field, value) => setDraft((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    onSave({
      id: draft.id,
      payload: {
        CustomerName: draft.CustomerName,
        Phone: draft.Phone,
        Barber: draft.Barber,
        Date: draft.Date,
        Time: draft.Time,
        Status: normalizeStatusValue(draft.Status),
        Services: draft.Services,
        UserID: draft.UserID || '',
      },
      isNew,
    });
  };

  const handleClientAutoFill = (client) => {
    if (!client) return;
    setDraft((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        CustomerName: client.name || prev.CustomerName,
        Phone: client.phone || prev.Phone,
        Barber: prev.Barber || client.preferredBarber || '',
        UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || '',
      };
    });
  };

  return (
    <Modal
      title={isNew ? 'Новая запись' : `Редактирование записи ${draft.CustomerName || ''}`}
      isOpen={open}
      onClose={onClose}
      footer={
        <div className="flex flex-wrap justify-end gap-3">
          {!isNew && canDelete && (
            <button onClick={() => onDelete?.(draft)} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10">
              Удалить
            </button>
          )}
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
            Отмена
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
            Сохранить
          </button>
        </div>
      }
    >
      <div className="grid gap-3 mobile-grid-2 md:grid-cols-2">
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
        <input type="date" value={draft.Date ? String(draft.Date).slice(0, 10) : ''} onChange={(event) => handleChange('Date', event.target.value)} className="h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white" />
        <TimeRangePicker value={draft.Time || ''} onChange={(nextValue) => handleChange('Time', nextValue)} placeholder="Нажмите, чтобы выбрать" />
        <select value={draft.Status || ''} onChange={(event) => handleChange('Status', event.target.value)} className="h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white">
          <option value="">Статус</option>
          {(options.statuses || []).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className="col-span-2">
          <MultiSelectCheckboxes
            label="Услуги"
            options={options.services || []}
            value={servicesSelection}
            onChange={(selected) => handleChange('Services', selected.join(', '))}
            placeholder="Нет доступных услуг"
          />
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
  clients = [],
  currentUser = null,
  liveAppointments = null,
  liveUpdatedAt = null,
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
  preferredTable = null,
  onPreferredTableConsumed,
  onRequestConfirm = null,
}) => {
  const [activeTable, setActiveTable] = useLocalStorage('tables.active', 'Appointments');
  const [tables, setTables] = useState(() => DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: [] }), {}));
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
  });
  const [sortConfigs, setSortConfigs] = useLocalStorage(
    'tables.sortConfigs',
    DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: TABLE_CONFIG[table]?.defaultSort || null }), {})
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [showPastAppointments, setShowPastAppointments] = useLocalStorage('tables.showPastAppointments', true);
  const [groupAppointmentsByDate, setGroupAppointmentsByDate] = useLocalStorage('tables.groupAppointmentsByDate', true);
  const appointmentTemplate = useMemo(
    () => ({
      id: null,
      CustomerName: '',
      Phone: '',
      Barber: pickBarberForUser(currentUser, dropdownOptions.barbers || []),
      Date: new Date().toISOString().slice(0, 10),
      Time: '',
      Status: normalizeStatusValue((dropdownOptions.statuses && dropdownOptions.statuses[0]) || 'Новая запись'),
      Services: '',
      UserID: '',
    }),
    [dropdownOptions, currentUser?.displayName, currentUser?.username]
  );

  useEffect(() => {
    if (sharedOptions) {
      setDropdownOptions({
        ...sharedOptions,
        statuses: normalizeStatusList(sharedOptions.statuses || []),
      });
    }
  }, [sharedOptions]);

  useEffect(() => {
    if (!TABLE_CONFIG[activeTable]) {
      setActiveTable('Appointments');
    }
  }, [activeTable, setActiveTable]);

  useEffect(() => {
    if (!preferredTable) return;
    if (TABLE_ORDER.includes(preferredTable)) {
      setActiveTable(preferredTable);
    }
    onPreferredTableConsumed?.();
  }, [preferredTable, setActiveTable, onPreferredTableConsumed]);

  useEffect(() => {
    setHiddenStatuses((prev) => {
      const normalized = Array.from(new Set(prev.map((status) => normalizeStatusValue(status)).filter(Boolean)));
      if (normalized.length === prev.length && normalized.every((value, index) => value === prev[index])) {
        return prev;
      }
      return normalized;
    });
  }, [setHiddenStatuses]);

  const fetchTables = useCallback(async () => {
    setIsFetching(true);
    setTableError('');
    try {
      const responses = await Promise.all([
        ...DATA_TABLES.map((table) => apiRequest(`/${table}`)),
        apiRequest('/options/appointments'),
      ]);
      const nextTables = {};
      DATA_TABLES.forEach((table, index) => {
        const records = responses[index] || [];
        nextTables[table] = table === 'Appointments' ? records.map((row) => ({ ...row, Status: normalizeStatusValue(row.Status) })) : records;
      });
      const rawOptions = responses[DATA_TABLES.length] || { barbers: [], services: [], statuses: [] };
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
  }, [apiRequest, onOptionsUpdate]);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

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

  const handleUpdate = async (recordId, data) => {
    if (!recordId) return;
    const tableId = activeTable;
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
      await apiRequest(`/${tableId}/${encodeURIComponent(recordId)}`, { method: 'PUT', body: JSON.stringify(payload) });
    } catch (error) {
      console.error('Update failed', error);
      setTableError(error.message || 'Не удалось обновить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };

  const handleDelete = async (record) => {
    if (!record || activeTable === 'Schedules') return;
    const confirmed = onRequestConfirm
      ? await onRequestConfirm({
          title: 'Удалить запись?',
          message: 'Запись будет удалена без возможности восстановления.',
          confirmLabel: 'Удалить',
          tone: 'danger',
        })
      : true;
    if (!confirmed) return;
    const tableId = activeTable;
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return { ...prev, [tableId]: list.filter((row) => getRecordId(row) !== getRecordId(record)) };
    });
    try {
      await apiRequest(`/${tableId}/${encodeURIComponent(record.id)}`, { method: 'DELETE' });
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
      await apiRequest(`/${tableId}`, {
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

  const tableSettings = TABLE_CONFIG[activeTable] || {};
  const isCustomTable = tableSettings?.mode === 'custom';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {TABLE_ORDER.map((table) => (
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
              onFieldChange={onBarberFieldChange}
              onSave={onSaveBarber}
              onAdd={onAddBarber}
              onDelete={onDeleteBarber}
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
            />
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
            lastUpdatedAt={liveUpdatedAt}
          />
          {isFetching ? (
            <LoadingState label="Обновляю таблицы..." />
          ) : (
            <div className="mt-4">
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
                groupByDate={activeTable === 'Appointments' ? groupAppointmentsByDate : false}
              />
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
  licenseStatus,
  updateInfo,
  onRefreshUpdate,
  onApplyUpdate,
  systemBusy,
  viewMode = 'bot',
}) => {
  const [description, setDescription] = useState(settings?.botDescription || '');
  const [about, setAbout] = useState(settings?.aboutText || '');

  useEffect(() => {
    setDescription(settings?.botDescription || '');
    setAbout(settings?.aboutText || '');
  }, [settings]);

  if (viewMode === 'system') {
    return (
      <div className="space-y-6">
        <BackupsPanel backups={backups} onRestore={onRestoreBackup} onCreate={onCreateBackup} />

        <SectionCard title="Лицензия и обновления">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Лицензия</p>
              <p className="mt-1">Статус: {licenseStatus?.valid ? 'Активна' : 'Не подтверждена'}</p>
              <p>Комментарий: {licenseStatus?.message || 'Нет данных'}</p>
              {licenseStatus?.license?.owner && <p>Владелец: {licenseStatus.license.owner}</p>}
              {licenseStatus?.license?.expiresAt && <p>Действует до {formatDate(licenseStatus.license.expiresAt)}</p>}
              {licenseStatus?.license?.number && <p>Номер: {licenseStatus.license.number}</p>}
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Обновления</p>
              <p className="mt-1">Последняя версия: {updateInfo?.version || '—'}</p>
              <p>Проверено: {updateInfo?.checkedAt ? formatDate(updateInfo.checkedAt) : '—'}</p>
              <p>Статус: {updateInfo?.details || 'Нет данных'}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={onRefreshUpdate}
                  disabled={systemBusy}
                  className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Проверить
                </button>
                <button
                  onClick={onApplyUpdate}
                  disabled={systemBusy || !updateInfo?.available}
                  className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {systemBusy ? 'Обновление…' : 'Обновить'}
                </button>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <SectionCard
        title="Статус бота"
        actions={
          <div className="flex gap-2 text-sm">
            <button onClick={onStart} className="rounded-lg bg-emerald-600 px-3 py-1 text-white">
              Запустить
            </button>
            <button onClick={onStop} className="rounded-lg bg-rose-600 px-3 py-1 text-white">
              Остановить
            </button>
            <button onClick={onRestart} className="rounded-lg bg-slate-600 px-3 py-1 text-white">
              Перезапустить
            </button>
          </div>
        }
      >
        <p className="text-slate-300">Состоя: {status?.running ? 'работает' : 'остановлен'}</p>
        <label className="mt-3 inline-flex items-center gap-2 text-slate-300">
          <input type="checkbox" checked={settings?.isBotEnabled !== false} onChange={(event) => onToggleEnabled(event.target.checked)} />
          Автостарт вместе с CRM
        </label>
      </SectionCard>

      <SectionCard title="Тексты бота">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Описание лендинга</label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={3} className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Блок «О нас»</label>
            <textarea value={about} onChange={(event) => setAbout(event.target.value)} rows={4} className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          </div>
          <button onClick={() => onSaveSettings({ botDescription: description, aboutText: about })} className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
            Сохранить тексты
          </button>
        </div>
      </SectionCard>

    </div>
  );
};
const LoginScreen = ({ onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [loginOptions, setLoginOptions] = useState([]);
  const [optionsError, setOptionsError] = useState('');
  const [loadingOptions, setLoadingOptions] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchOptions = async () => {
      setLoadingOptions(true);
      try {
        const response = await fetch(`${API_BASE_URL}/login/options`);
        if (!response.ok) throw new Error('failed');
        const data = await response.json();
        if (!isMounted) return;
        const normalized = Array.isArray(data) ? data : [];
        setLoginOptions(normalized);
        if (normalized.length === 1) {
          setUsername(normalized[0].login);
        } else if (!normalized.some((option) => option.login === username)) {
          setUsername('');
        }
        setOptionsError('');
      } catch (fetchError) {
        if (!isMounted) return;
        setLoginOptions([]);
        setOptionsError('Не удалось загрузить список барберов.');
      } finally {
        if (isMounted) {
          setLoadingOptions(false);
        }
      }
    };
    fetchOptions();
    return () => {
      isMounted = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (error) {
      setValidationError('');
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setValidationError('Выберите барбера из списка');
      return;
    }
    if (!password) {
      setValidationError('Введите пароль');
      return;
    }
    setValidationError('');
    onLogin(username, password);
  };

  const selectDisabled = loadingOptions || loginOptions.length === 0;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="text-center text-2xl font-semibold text-white">Barber Bot CRM</h1>
        <div>
          <label className="text-sm text-slate-300">Выберите барбера (логин)</label>
          <select
            value={username}
            disabled={selectDisabled}
            onChange={(event) => {
              setValidationError('');
              setUsername(event.target.value);
            }}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white disabled:opacity-60"
          >
            <option value="">{loadingOptions ? 'Загрузка...' : 'Укажите барбера'}</option>
            {loginOptions.map((option) => (
              <option key={option.id || option.login} value={option.login}>
                {option.label || option.login}
              </option>
            ))}
          </select>
          <div className="mt-1 space-y-1">
            <p className="text-xs text-slate-500">Доступны только активные аккаунты из раздела «Барберы».</p>
            {optionsError && <p className="text-xs text-rose-400">{optionsError}</p>}
          </div>
        </div>
        <div>
          <label className="text-sm text-slate-300">Пароль</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
        </div>
        {(validationError || error) && <ErrorBanner message={validationError || error} />}
        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-500" disabled={selectDisabled}>
          Войти
        </button>
      </form>
    </div>
  );
};
const App = () => {
  const [session, setSession] = useState(() => {
    try {
      const saved = localStorage.getItem('barber-session');
      return saved ? buildSessionPayload(JSON.parse(saved)) : null;
    } catch (error) {
      return null;
    }
  });
  const [activeTab, setActiveTab] = useLocalStorage('barber.activeTab', 'dashboard');
  const [pendingTableView, setPendingTableView] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [botStatus, setBotStatus] = useState(null);
  const [botSettings, setBotSettings] = useState(null);
  const [botMessages, setBotMessages] = useState([]);
  const [licenseStatus, setLicenseStatus] = useState(null);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [optionsCache, setOptionsCache] = useState(null);
  const [profileModal, setProfileModal] = useState({ open: false, data: null, loading: false });
  const [appointmentModal, setAppointmentModal] = useState({ open: false, data: null, options: null, isNew: false, allowDelete: false });
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [authError, setAuthError] = useState('');
  const [systemBusy, setSystemBusy] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [realtimeSnapshot, setRealtimeSnapshot] = useState(null);
  const [fatalError, setFatalError] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(defaultConfirmState);
  const confirmResolverRef = useRef(null);

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
    if (activeTab === 'barbers' || activeTab === 'services') {
      const target = activeTab === 'barbers' ? 'Barbers' : 'Services';
      setPendingTableView(target);
      setActiveTab('tables');
    }
  }, [activeTab, setActiveTab]);

  const handlePreferredTableConsumed = useCallback(() => setPendingTableView(null), []);
  const serviceSaveTimers = useRef(new Map());

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('barber-session');
    setSession(null);
    setDashboard(null);
    setGlobalError('');
    setRealtimeSnapshot(null);
  }, []);

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
      if (response.status === 401 || response.status === 403) {
        handleLogout();
        throw new Error('Сессия истекла');
      }
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Ошибка запроса');
      }
      if (response.status === 204) return null;
      return response.json();
    },
    [session?.token, handleLogout]
  );

  const fetchAll = useCallback(async () => {
    if (!session?.token) return;
    setLoading(true);
    setGlobalError('');
    try {
      const overview = await apiRequest('/dashboard/overview');
      setDashboard(overview);
      const withFallback = (request, fallback, label) =>
        request.catch((error) => {
          console.warn(`${label} fetch skipped:`, error?.message || error);
          return fallback;
        });
      const [
        servicesFull,
        barbersFull,
        botState,
        botMessagesPayload,
        license,
        update,
        options,
      ] = await Promise.all([
        withFallback(apiRequest('/services/full'), { services: [] }, 'Services'),
        withFallback(apiRequest('/barbers/full'), [], 'Barbers'),
        withFallback(apiRequest('/bot/status'), { status: null, settings: null }, 'Bot status'),
        withFallback(apiRequest('/bot/messages'), [], 'Bot messages'),
        withFallback(apiRequest('/license/status'), null, 'License'),
        withFallback(apiRequest('/system/update'), null, 'Updates'),
        withFallback(
          apiRequest('/options/appointments'),
          { statuses: [], barbers: [], services: [] },
          'Options',
        ),
      ]);
      setServices(servicesFull.services || []);
      setBarbers(barbersFull || overview.barbers || []);
      setBotSettings(botState.settings || overview.bot?.settings || null);
      setBotStatus(botState.status);
      setBotMessages(botMessagesPayload || []);
      setLicenseStatus(license);
      setUpdateInfo(update);
      const normalizedOptions = { ...options, statuses: normalizeStatusList(options.statuses || []) };
      setOptionsCache(normalizedOptions);
    } catch (error) {
      console.error(error);
      setGlobalError(error.message || 'Не удалось загрузить данные');
    } finally {
      setLoading(false);
    }
  }, [apiRequest, session?.token]);

  useEffect(() => {
    if (session?.token) {
      fetchAll();
    }
  }, [session?.token, fetchAll]);

  useEffect(() => {
    if (!session?.token) {
      setRealtimeSnapshot(null);
      return undefined;
    }
    if (typeof EventSource === 'undefined') return undefined;
    const tokenParam = encodeURIComponent(session.token);
    const streamUrl = `${API_BASE_URL}/events/stream?token=${tokenParam}`;
    const eventSource = new EventSource(streamUrl);
    const handleEvent = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload?.type !== 'appointments:update') return;
        const details = payload.payload || {};
        setRealtimeSnapshot({
          rows: Array.isArray(details.rows) ? details.rows : [],
          stats: details.stats || {},
          upcoming: Array.isArray(details.upcoming) ? details.upcoming : [],
          updatedAt: details.updatedAt || new Date().toISOString(),
        });
      } catch (error) {
        console.error('Realtime event parse error:', error);
      }
    };
    eventSource.addEventListener('appointments', handleEvent);
    eventSource.onerror = () => {};
    return () => {
      eventSource.removeEventListener('appointments', handleEvent);
      eventSource.close();
    };
  }, [session?.token]);

  useEffect(() => {
    if (!realtimeSnapshot) return;
    setDashboard((prev) => {
      const nextStats = { ...(prev?.stats || {}), ...(realtimeSnapshot.stats || {}) };
      const nextAppointments = {
        ...(prev?.appointments || {}),
        upcoming: realtimeSnapshot.upcoming || prev?.appointments?.upcoming || [],
      };
      if (!prev) {
        return { stats: nextStats, appointments: nextAppointments };
      }
      return { ...prev, stats: nextStats, appointments: nextAppointments };
    });
  }, [realtimeSnapshot]);

  useEffect(() => {
    const handleGlobalError = (event) => {
      const detail = event?.reason || event?.error;
      const message =
        detail?.message ||
        event?.message ||
        (typeof detail === 'string' ? detail : 'Неизвестная ошибка');
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

  const handleLogin = async (username, password) => {
    setAuthError('');
    const normalizedUsername = resolveLogin(username);
    if (!normalizedUsername) {
      setAuthError('Выберите барбера из списка');
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: normalizedUsername, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setAuthError(data.message || 'Неверный логин или пароль');
        return;
      }
      const sessionPayload = buildSessionPayload({ ...data, username: normalizedUsername });
      localStorage.setItem('barber-session', JSON.stringify(sessionPayload));
      setSession(sessionPayload);
    } catch (error) {
      setAuthError('Сервер недоступен');
    }
  };

  const handleBarberFieldChange = (id, field, value) => {
    setBarbers((prev) => prev.map((barber) => (barber.id === id ? { ...barber, [field]: value } : barber)));
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
      rating: barberData.rating || '',
      avatarUrl: barberData.avatarUrl || '',
      color: barberData.color || '',
      login: deriveBarberLogin(barberData),
      password: barberData.password || '',
      phone: barberData.phone || '',
      telegramId: barberData.telegramId || '',
      isActive: barberData.isActive !== false,
      orderIndex: Number(barberData.orderIndex ?? fallbackOrder) || 0,
    };
    if (barberData.id) {
      payload.id = barberData.id;
    }
    return payload;
  };

  const handleSaveBarber = async (barber) => {
    if (!barber?.id) return;
    try {
      const response = await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'PUT', body: JSON.stringify(buildBarberPayload(barber)) });
      const updatedBarber = response || barber;
      setBarbers((prev) => prev.map((item) => (item.id === updatedBarber.id ? { ...item, ...updatedBarber } : item)));
    } catch (error) {
      setGlobalError(error.message);
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
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить барбера');
    }
  };

  const handleAddBarber = async (payload) => {
    if (!payload.name || !payload.password) {
      setGlobalError('Заполните имя, логин и пароль барбера');
      return;
    }
    try {
      const newBarberPayload = buildBarberPayload({ ...payload, id: undefined }, barbers.length);
      const { id, ...body } = newBarberPayload;
      await apiRequest('/Barbers', { method: 'POST', body: JSON.stringify(body) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить барбера');
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
    (service) => {
      if (!service?.id) return;
      const timers = serviceSaveTimers.current;
      const existingTimer = timers.get(service.id);
      if (existingTimer) clearTimeout(existingTimer);
      const timer = setTimeout(() => {
        handleSaveService(service);
        timers.delete(service.id);
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
        scheduleServiceAutosave({
          ...target,
          prices: { ...(target.prices || {}), [barberId]: value },
        });
      }
    },
    [services, scheduleServiceAutosave]
  );

  const handleBotToggle = async (enabled) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ isBotEnabled: enabled }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось обновить настройки бота');
    }
  };

  const handleBotAction = async (action) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ action }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось выполнить действие');
    }
  };

  const handleSaveSettings = async (payload) => {
    if (!botSettings?.id) return;
    try {
      await apiRequest(`/BotSettings/${encodeURIComponent(botSettings.id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить настройки');
    }
  };

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

  const openProfile = useCallback(
    async (name) => {
      if (!name) return;
      setProfileModal({ open: true, data: null, loading: true });
      try {
        const payload = await apiRequest(`/user-profile/${encodeURIComponent(name)}`);
        setProfileModal({ open: true, data: payload, loading: false });
      } catch (error) {
        setProfileModal({ open: true, data: { error: error.message || 'Не удалось загрузить профиль' }, loading: false });
      }
    },
    [apiRequest]
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

  const handleOpenAppointment = useCallback(
    async (appointment, optionsConfig = {}) => {
      const options = await ensureOptions();
      setAppointmentModal({
        open: true,
        data: appointment,
        options,
        isNew: false,
        allowDelete: !!optionsConfig.allowDelete,
      });
    },
    [ensureOptions]
  );

  const handleCreateAppointment = useCallback(async () => {
    const options = await ensureOptions();
    const today = new Date().toISOString().slice(0, 10);
    const defaultStatus = normalizeStatusValue(options.statuses?.[0] || 'Активная');
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
      isNew: true,
      allowDelete: false,
    });
  }, [ensureOptions, session?.displayName, session?.username]);

  const handleSaveAppointment = async ({ id, payload, isNew }) => {
    try {
      if (isNew) {
        await apiRequest('/Appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      } else if (id) {
        await apiRequest(`/Appointments/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      }
      setAppointmentModal((prev) => ({ ...prev, open: false, data: null, isNew: false, allowDelete: false }));
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить запись');
    }
  };

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
      await apiRequest(`/Appointments/${encodeURIComponent(appointment.id)}`, { method: 'DELETE' });
      setAppointmentModal({ open: false, data: null, options: null, isNew: false, allowDelete: false });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить запись');
    }
  };

  const handleRefreshUpdate = async () => {
    setSystemBusy(true);
    try {
      const info = await apiRequest('/system/update?force=1');
      setUpdateInfo(info);
    } catch (error) {
      setGlobalError(error.message || 'Не удалось проверить обновления');
    } finally {
      setSystemBusy(false);
    }
  };

  const handleApplyUpdate = async () => {
    const confirmed = await requestConfirm({
      title: 'Обновить систему?',
      message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
      confirmLabel: 'Обновить',
      tone: 'danger',
    });
    if (!confirmed) return;
    setSystemBusy(true);
    try {
      const result = await apiRequest('/system/update', { method: 'POST' });
      setUpdateInfo(result.info || result);
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось применить обновление');
    } finally {
      setSystemBusy(false);
    }
  };

  if (!session?.token) {
    return <LoginScreen onLogin={handleLogin} error={authError} />;
  }

  const preferredTableTarget = activeTab === 'barbers' ? 'Barbers' : activeTab === 'services' ? 'Services' : pendingTableView;

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
            liveMeta={realtimeSnapshot}
          />
        );
      case 'tables':
      case 'barbers':
      case 'services':
        return (
          <TablesWorkspace
            apiRequest={apiRequest}
            sharedOptions={optionsCache}
            onOptionsUpdate={setOptionsCache}
            onOpenProfile={openProfile}
            clients={dashboard?.clients || []}
            currentUser={session || null}
            liveAppointments={realtimeSnapshot?.rows || null}
            liveUpdatedAt={realtimeSnapshot?.updatedAt || null}
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
            preferredTable={preferredTableTarget}
            onPreferredTableConsumed={handlePreferredTableConsumed}
            onRequestConfirm={requestConfirm}
          />
        );
      case 'bot':
        return (
          <BotControlView
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
            licenseStatus={licenseStatus}
            updateInfo={updateInfo}
            onRefreshUpdate={handleRefreshUpdate}
            onApplyUpdate={handleApplyUpdate}
            systemBusy={systemBusy}
            viewMode="bot"
          />
        );
      case 'system':
        return (
          <BotControlView
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
            licenseStatus={licenseStatus}
            updateInfo={updateInfo}
            onRefreshUpdate={handleRefreshUpdate}
            onApplyUpdate={handleApplyUpdate}
            systemBusy={systemBusy}
            viewMode="system"
          />
        );
      default:
        return (
          <BotControlView
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
            licenseStatus={licenseStatus}
            updateInfo={updateInfo}
            onRefreshUpdate={handleRefreshUpdate}
            onApplyUpdate={handleApplyUpdate}
            systemBusy={systemBusy}
            viewMode="bot"
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
      {isMobile && <MobileTabs activeTab={activeTab} onChange={setActiveTab} session={session} onLogout={handleLogout} />}
      <div className="flex">
        <Sidebar session={session} activeTab={activeTab} onChange={setActiveTab} onLogout={handleLogout} />
        <main className="flex-1 space-y-4 p-4 md:p-8">
          {globalError && <ErrorBanner message={globalError} />}
          {renderActive()}
        </main>
      </div>
      <ProfileModal state={profileModal} onClose={() => setProfileModal({ open: false, data: null, loading: false })} />
      <AppointmentModal
        open={appointmentModal.open}
        appointment={appointmentModal.data}
        options={appointmentModal.options || optionsCache || {}}
        onClose={() => setAppointmentModal((prev) => ({ ...prev, open: false, data: null, isNew: false, allowDelete: false }))}
        onSave={handleSaveAppointment}
        isNew={appointmentModal.isNew}
        clients={dashboard?.clients || []}
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
  } catch (error) {
    console.error('Fatal render error:', error);
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




