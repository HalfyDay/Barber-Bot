const { useState, useEffect, useCallback, useMemo, useRef } = React;

const DEFAULT_API_BASE_URL = 'http://192.168.1.55:3000/api';
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;

const VIEW_TABS = [
  { id: 'dashboard', label: 'Обзор' },
  { id: 'barbers', label: 'Барберы' },
  { id: 'services', label: 'Услуги' },
  { id: 'tables', label: 'Таблицы' },
  { id: 'bot', label: 'Бот' },
  { id: 'system', label: 'Система' },
];

const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Cost'];
const DATA_TABLES = ['Appointments', 'Schedules', 'Users', 'Cost'];

const TABLE_CONFIG = {
  Appointments: { label: 'Р—Р°РїРёСЃРё', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Schedules: { label: 'Р Р°СЃРїРёСЃР°РЅРёРµ', canCreate: false, supportsBarberFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Users: { label: 'РљР»РёРµРЅС‚С‹', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Cost: { label: 'РљР°С‚Р°Р»РѕРі СѓСЃР»СѓРі', canCreate: true, defaultSort: { key: 'Uslugi', direction: 'asc' } },
};

const TABLE_COLUMNS = {
  Appointments: [
    { key: 'CustomerName', label: 'РљР»РёРµРЅС‚', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-48' },
    { key: 'Phone', label: 'РўРµР»РµС„РѕРЅ', editable: true, type: 'text', minWidth: 'w-36' },
    { key: 'Barber', label: 'Р‘Р°СЂР±РµСЂ', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-32' },
    { key: 'Date', label: 'Р”Р°С‚Р°', editable: true, type: 'date', minWidth: 'w-32' },
    { key: 'Time', label: 'Р’СЂРµРјСЏ', editable: true, type: 'text', minWidth: 'w-28' },
    { key: 'Status', label: 'РЎС‚Р°С‚СѓСЃ', editable: true, type: 'select', optionsKey: 'statuses', align: 'center', minWidth: 'w-28' },
    { key: 'Services', label: 'РЈСЃР»СѓРіРё', editable: true, type: 'multi-select', optionsKey: 'services', minWidth: 'w-56' },
    { key: 'UserID', label: 'ID РєР»РёРµРЅС‚Р°', editable: true, type: 'text', minWidth: 'w-24' },
    { key: 'Reminder2hClientSent', label: 'РќР°РїРѕРјРёРЅР°РЅРёРµ РєР»РёРµРЅС‚Сѓ', editable: true, type: 'boolean', align: 'center' },
    { key: 'Reminder2hBarberSent', label: 'РќР°РїРѕРјРёРЅР°РЅРёРµ Р±Р°СЂР±РµСЂСѓ', editable: true, type: 'boolean', align: 'center' },
  ],
  Schedules: [
    { key: 'Barber', label: 'Р‘Р°СЂР±РµСЂ', editable: false, minWidth: 'w-40' },
    { key: 'DayOfWeek', label: 'Р”РµРЅСЊ РЅРµРґРµР»Рё', editable: false, minWidth: 'w-32' },
    { key: 'Date', label: 'Р”Р°С‚Р°', editable: false, minWidth: 'w-32' },
    { key: 'Week', label: 'РЎР»РѕС‚С‹', editable: true, type: 'text', align: 'center', minWidth: 'w-40' },
  ],
  Users: [
    { key: 'Name', label: 'РРјСЏ', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-40' },
    { key: 'Phone', label: 'РўРµР»РµС„РѕРЅ', editable: true, type: 'text', minWidth: 'w-36' },
    { key: 'TelegramID', label: 'Telegram', editable: true, type: 'text', minWidth: 'w-32' },
    { key: 'Barber', label: 'Р›СЋР±РёРјС‹Р№ РјР°СЃС‚РµСЂ', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-40' },
  ],
  Cost: [
    { key: 'Uslugi', label: 'РЈСЃР»СѓРіР°', editable: true, type: 'text', minWidth: 'w-56' },
    { key: 'Timur', label: 'РўРёРјСѓСЂ', editable: true, type: 'text', align: 'center' },
    { key: 'Vladimir', label: 'Р’Р»Р°РґРёРјРёСЂ', editable: true, type: 'text', align: 'center' },
    { key: 'Alina', label: 'РђР»РёРЅР°', editable: true, type: 'text', align: 'center' },
    { key: 'Aleksey', label: 'РђР»РµРєСЃРµР№', editable: true, type: 'text', align: 'center' },
    { key: 'Dlitelnost', label: 'Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ', editable: true, type: 'text', minWidth: 'w-32' },
  ],
};

const RATING_MIN = 3;
const RATING_MAX = 5;
const RATING_STEP = 0.5;
const AVATAR_PRESETS = ['/Image/barber_alex.jpg', '/Image/barber_alina.jpg', '/Image/barber_vlad.jpg', '/Image/barber_timur.jpg'];
const KNOWN_USERS = [
  { label: 'Алексей', login: 'Aleksey' },
  { label: 'Алина', login: 'Alina' },
  { label: 'Владимир', login: 'Vladimir' },
  { label: 'Тимур', login: 'Timur' },
];
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

const normalizeText = (value) => (value == null ? '' : String(value));

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

const formatDateTime = (date, time) => {
  const datePart = formatDate(date);
  const timePart = formatTime(time);
  if (datePart === '-' && timePart === '-') return '-';
  if (datePart === '-') return timePart;
  if (timePart === '-') return datePart;
  return `${datePart} | ${timePart}`;
};

const STATUS_TRANSLATIONS = {
  active: 'РђРєС‚РёРІРЅР°СЏ',
  'Р°РєС‚РёРІРЅР°СЏ': 'РђРєС‚РёРІРЅР°СЏ',
  confirm: 'РџРѕРґС‚РІРµСЂР¶РґРµРЅР°',
  confirmed: 'РџРѕРґС‚РІРµСЂР¶РґРµРЅР°',
  'РїРѕРґС‚РІРµСЂР¶РґРµРЅРѕ': 'РџРѕРґС‚РІРµСЂР¶РґРµРЅР°',
  'РїРѕРґС‚РІРµСЂР¶РґРµРЅР°': 'РџРѕРґС‚РІРµСЂР¶РґРµРЅР°',
  done: 'Р’С‹РїРѕР»РЅРµРЅР°',
  complete: 'Р’С‹РїРѕР»РЅРµРЅР°',
  completed: 'Р’С‹РїРѕР»РЅРµРЅР°',
  finished: 'Р’С‹РїРѕР»РЅРµРЅР°',
  'РІС‹РїРѕР»РЅРµРЅР°': 'Р’С‹РїРѕР»РЅРµРЅР°',
  'Р·Р°РІРµСЂС€РµРЅР°': 'Р’С‹РїРѕР»РЅРµРЅР°',
  cancel: 'РћС‚РјРµРЅРµРЅРѕ',
  canceled: 'РћС‚РјРµРЅРµРЅРѕ',
  cancelled: 'РћС‚РјРµРЅРµРЅРѕ',
  'РѕС‚РјРµРЅР°': 'РћС‚РјРµРЅРµРЅРѕ',
  'РѕС‚РјРµРЅРµРЅРѕ': 'РћС‚РјРµРЅРµРЅРѕ',
  'no show': 'РќРµ РїСЂРёС€С‘Р»',
  'no-show': 'РќРµ РїСЂРёС€С‘Р»',
  noshow: 'РќРµ РїСЂРёС€С‘Р»',
  missed: 'РќРµ РїСЂРёС€С‘Р»',
  pending: 'Р’ РѕР±СЂР°Р±РѕС‚РєРµ',
  wait: 'Р’ РѕР±СЂР°Р±РѕС‚РєРµ',
  waiting: 'Р’ РѕР±СЂР°Р±РѕС‚РєРµ',
  processing: 'Р’ РѕР±СЂР°Р±РѕС‚РєРµ',
};

const INACTIVE_STATUS_TOKENS = ['РІС‹РїРѕР»РЅ', 'Р·Р°РІРµСЂС€', 'done', 'cancel', 'РѕС‚РјРµРЅ', 'РЅРµ РїСЂРёС€', 'noshow', 'no-show', 'missed', 'РїСЂРѕСЃСЂ', 'expired'];
const ACTIVE_STATUS_TOKENS = ['Р°РєС‚РёРІ', 'active', 'РїРѕРґС‚РІРµСЂР¶', 'confirm', 'РѕР¶РёРґ', 'pending', 'wait', 'Р¶РґРµРј', 'Р¶РґС‘Рј', 'РЅРѕРІ', 'new'];

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

const sanitizeTimeToken = (value) => {
  const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return '';
  const hours = match[1].padStart(2, '0');
  const minutes = match[2];
  return `${hours}:${minutes}`;
};

const parseTimeRangeValue = (value) => {
  const safe = normalizeText(value).replace(/[вЂ”вЂ“]/g, '-');
  if (!safe) return { start: '', end: '' };
  const [rawStart, rawEnd = ''] = safe.split('-').map((part) => part.trim());
  return {
    start: sanitizeTimeToken(rawStart),
    end: sanitizeTimeToken(rawEnd),
  };
};

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

const LoadingState = ({ label = 'Р—Р°РіСЂСѓР¶Р°СЋ РґР°РЅРЅС‹Рµ...' } = {}) => (
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

const Modal = ({ title, isOpen, onClose, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
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

const StatCard = ({ label, value, accent = 'text-indigo-300' }) => (
  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-4">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <p className={classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)}>{value}</p>
  </div>
);
const DashboardView = ({ data, onOpenAppointment, onOpenProfile, onCreateAppointment }) => {
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
    if (!dateValue || dateValue === 'Р‘РµР· РґР°С‚С‹') return 'Р‘РµР· РґР°С‚С‹';
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
      const key = appt.Date || 'Р‘РµР· РґР°С‚С‹';
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

  return (
    <div className="space-y-6">
      <SectionCard title="РљР»СЋС‡РµРІС‹Рµ РїРѕРєР°Р·Р°С‚РµР»Рё">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Р’СЃРµРіРѕ РєР»РёРµРЅС‚РѕРІ" value={stats.totalUsers ?? 0} />
          <StatCard label="РђРєС‚РёРІРЅС‹Рµ Р·Р°РїРёСЃРё" value={stats.activeAppointments ?? 0} accent="text-emerald-300" />
          <StatCard label="РџРѕРґС‚РІРµСЂР¶РґРµРЅРѕ Р·Р° РіРѕРґ" value={stats.confirmedYear ?? 0} accent="text-fuchsia-300" />
          <StatCard label="РЎРµРіРѕРґРЅСЏ" value={stats.todaysAppointments ?? 0} accent="text-cyan-300" />
        </div>
      </SectionCard>

      <SectionCard
        title="Р‘Р»РёР¶Р°Р№С€РёРµ Р·Р°РїРёСЃРё"
        actions={
          onCreateAppointment && (
            <button onClick={onCreateAppointment} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
              + РЎРѕР·РґР°С‚СЊ Р·Р°РїРёСЃСЊ
            </button>
          )
        }
      >
        {groupedUpcoming.length === 0 ? (
          <p className="text-slate-400">РќРµС‚ Р±Р»РёР¶Р°Р№С€РёС… Р·Р°РїРёСЃРµР№.</p>
        ) : (
          <div className="space-y-5">
            {groupedUpcoming.map((group) => (
              <div key={group.key} className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">{group.label}</p>
                <div className="space-y-3">
                  {group.items.map((appt) => {
                    const cardProps = {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => onOpenAppointment?.(appt),
                      onKeyDown: (event) => event.key === 'Enter' && onOpenAppointment?.(appt),
                      className:
                        'w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-left transition hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    };
                    return (
                      <div key={appt.id || `${group.key}-${appt.CustomerName}-${appt.Time}`} {...cardProps}>
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                          <div>
                            {appt.CustomerName ? (
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  onOpenProfile?.(appt.CustomerName);
                                }}
                                className="text-left text-lg font-semibold text-white hover:text-indigo-300"
                              >
                                {appt.CustomerName}
                              </button>
                            ) : (
                              <p className="text-lg font-semibold text-white">Р‘РµР· РёРјРµРЅРё</p>
                            )}
                            <p className="text-sm text-slate-400">{appt.Barber}</p>
                          </div>
                          <div className="text-right text-sm text-slate-300">
                            <p>{formatDate(appt.Date)}</p>
                            <p>{appt.Time || 'вЂ”'}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-slate-400">{appt.Services || 'Р‘РµР· СѓСЃР»СѓРі'}</p>
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
const BarberAvatarPicker = ({ value, onChange }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-3">
      <img src={value || AVATAR_PRESETS[0]} alt="avatar" className="h-12 w-12 rounded-full border border-slate-700 object-cover" />
      <input value={value || ''} onChange={(event) => onChange(event.target.value)} placeholder="URL РёР»Рё РїСѓС‚СЊ Рє С„Р°Р№Р»Сѓ" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white" />
    </div>
    <select value="" onChange={(event) => onChange(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
      <option value="">Р’С‹Р±СЂР°С‚СЊ РёР· С€Р°Р±Р»РѕРЅРѕРІ</option>
      {AVATAR_PRESETS.map((preset) => (
        <option key={preset} value={preset}>
          {preset}
        </option>
      ))}
    </select>
  </div>
);

const BarbersView = ({ barbers = [], onFieldChange, onSave, onAdd, onDelete }) => {
  const [newBarber, setNewBarber] = useState({ name: '', nickname: '', rating: '5', color: '#6d28d9', avatarUrl: AVATAR_PRESETS[0], isActive: true });

  const updateNewBarber = (field, value) => setNewBarber((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-6">
      <SectionCard title="РљРѕРјР°РЅРґР°">
        {barbers.length === 0 ? (
          <p className="text-slate-400">РЎРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ РїСѓСЃС‚.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {barbers.map((barber) => {
              const colorValue = /^#/.test(barber.color || '') ? barber.color : '#6d28d9';
              return (
                <div key={barber.id} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
                  <input value={barber.name || ''} onChange={(event) => onFieldChange(barber.id, 'name', event.target.value)} placeholder="РРјСЏ" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input value={barber.nickname || ''} onChange={(event) => onFieldChange(barber.id, 'nickname', event.target.value)} placeholder="РќРёРє" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                    <div className="space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2">
                      <label className="flex items-center justify-between text-sm text-slate-300">
                        <span>Р В Р ВµР в„–РЎвЂљР С‘Р Р…Р С–</span>
                        <span className="font-semibold text-white">{barber.rating || RATING_MAX}</span>
                      </label>
                      <input
                        type="range"
                        min={RATING_MIN}
                        max={RATING_MAX}
                        step={RATING_STEP}
                        value={Number(barber.rating) || RATING_MAX}
                        onChange={(event) => onFieldChange(barber.id, 'rating', event.target.value)}
                        className="w-full accent-indigo-500"
                      />
                    </div>                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input value={barber.description || ''} onChange={(event) => onFieldChange(barber.id, 'description', event.target.value)} placeholder="РћРїРёСЃР°РЅРёРµ" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                    <label className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
                      Р¦РІРµС‚
                      <input type="color" value={colorValue} onChange={(event) => onFieldChange(barber.id, 'color', event.target.value)} className="h-8 w-16 cursor-pointer rounded border border-slate-500 bg-transparent" />
                    </label>
                  </div>
                  <BarberAvatarPicker value={barber.avatarUrl} onChange={(value) => onFieldChange(barber.id, 'avatarUrl', value)} />
                  <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                    <input type="checkbox" checked={barber.isActive !== false} onChange={(event) => onFieldChange(barber.id, 'isActive', event.target.checked)} />
                    РђРєС‚РёРІРµРЅ
                  </label>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => onSave(barber)} className="flex-1 rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                      РЎРѕС…СЂР°РЅРёС‚СЊ
                    </button>
                    <button onClick={() => onDelete(barber)} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-400">
                      РЈРґР°Р»РёС‚СЊ
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>

      <SectionCard title="Р”РѕР±Р°РІРёС‚СЊ Р±Р°СЂР±РµСЂР°">
        <div className="grid gap-3 md:grid-cols-2">
          <input value={newBarber.name} onChange={(event) => updateNewBarber('name', event.target.value)} placeholder="РРјСЏ" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                    <input value={newBarber.nickname} onChange={(event) => updateNewBarber('nickname', event.target.value)} placeholder="Ник" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          <div className="space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2">
            <label className="flex items-center justify-between text-sm text-slate-300">
              <span>Рейтинг</span>
              <span className="font-semibold text-white">{newBarber.rating || RATING_MAX}</span>
            </label>
            <input
              type="range"
              min={RATING_MIN}
              max={RATING_MAX}
              step={RATING_STEP}
              value={Number(newBarber.rating) || RATING_MAX}
              onChange={(event) => updateNewBarber('rating', event.target.value)}
              className="w-full accent-indigo-500"
            />
          </div>
          <label className="inline-flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={newBarber.isActive} onChange={(event) => updateNewBarber('isActive', event.target.checked)} />
            РђРєС‚РёРІРµРЅ
          </label>
        </div>
        <button
          onClick={() => {
            if (!newBarber.name) return;
            onAdd(newBarber);
            setNewBarber({ name: '', nickname: '', rating: '5', color: '#6d28d9', avatarUrl: AVATAR_PRESETS[0], isActive: true });
          }}
          className="mt-4 w-full rounded-lg bg-emerald-600 py-2 font-semibold text-white hover:bg-emerald-500"
        >
          Р”РѕР±Р°РІРёС‚СЊ
        </button>
      </SectionCard>
    </div>
  );
};
const ServicesView = ({ services = [], barbers = [], onFieldChange, onPriceChange, onSave, onDelete, onAdd }) => {
  const [newService, setNewService] = useState({ name: '', duration: 60, prices: {} });

  const updateNewService = (field, value) => setNewService((prev) => ({ ...prev, [field]: value }));
  const updateNewServicePrice = (barberId, value) =>
    setNewService((prev) => ({
      ...prev,
      prices: {
        ...(prev.prices || {}),
        [barberId]: value,
      },
    }));

  return (
    <div className="space-y-6">
      <SectionCard title="РљР°С‚Р°Р»РѕРі">
        {services.length === 0 ? (
          <p className="text-slate-400">РџРѕРєР° РЅРµС‚ РЅРё РѕРґРЅРѕР№ СѓСЃР»СѓРіРё.</p>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full table-fixed text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="p-2">РќР°Р·РІР°РЅРёРµ</th>
                  <th className="p-2 w-32">Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ</th>
                  {barbers.map((barber) => (
                    <th key={barber.id} className="p-2 text-center">{barber.name}</th>
                  ))}
                  <th className="p-2 w-32" />
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-t border-slate-800">
                    <td className="p-2 align-top">
                      <input value={service.name || ''} onChange={(event) => onFieldChange(service.id, 'name', event.target.value)} className="w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white" />
                    </td>
                    <td className="p-2 align-top">
                      <input type="number" value={service.duration || 0} onChange={(event) => onFieldChange(service.id, 'duration', Number(event.target.value))} className="w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white" />
                    </td>
                    {barbers.map((barber) => (
                      <td key={barber.id} className="p-2 align-top">
                        <input type="number" value={service.prices?.[barber.id] ?? ''} onChange={(event) => onPriceChange(service.id, barber.id, event.target.value)} className="w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white" placeholder="Р¦РµРЅР°" />
                      </td>
                    ))}
                    <td className="p-2 align-top">
                      <div className="flex gap-2">
                        <button onClick={() => onSave(service)} className="rounded-lg bg-indigo-600 px-3 py-1 text-xs text-white">
                          РЎРѕС…СЂР°РЅРёС‚СЊ
                        </button>
                        <button onClick={() => onDelete(service)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-400">
                          РЈРґР°Р»РёС‚СЊ
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionCard>

      <SectionCard title="РќРѕРІР°СЏ СѓСЃР»СѓРіР°">
        <div className="grid gap-3 md:grid-cols-2">
          <input value={newService.name} onChange={(event) => updateNewService('name', event.target.value)} placeholder="РќР°Р·РІР°РЅРёРµ" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          <input type="number" value={newService.duration} onChange={(event) => updateNewService('duration', Number(event.target.value))} placeholder="Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ, РјРёРЅ" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {barbers.map((barber) => (
            <input
              key={barber.id}
              type="number"
              value={newService.prices?.[barber.id] ?? ''}
              onChange={(event) => updateNewServicePrice(barber.id, event.target.value)}
              placeholder={`Р¦РµРЅР° РґР»СЏ ${barber.name}`}
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (!newService.name) return;
            onAdd(newService);
            setNewService({ name: '', duration: 60, prices: {} });
          }}
          className="mt-4 w-full rounded-lg bg-emerald-600 py-2 font-semibold text-white hover:bg-emerald-500"
        >
          Р”РѕР±Р°РІРёС‚СЊ СѓСЃР»СѓРіСѓ
        </button>
      </SectionCard>
    </div>
  );
};
const MultiSelectCell = ({ value, options = [], onCommit }) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(parseMultiValue(value));
  const popoverRef = useRef(null);

  useEffect(() => {
    setDraft(parseMultiValue(value));
  }, [value]);

  useOutsideClick(popoverRef, open ? () => setOpen(false) : null);

  const toggleOption = (option) => {
    setDraft((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
  };

  const handleSave = () => {
    onCommit(draft.join(', '));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white">
        {draft.length ? draft.join(', ') : 'Р’С‹Р±СЂР°С‚СЊ'}
      </button>
      {open && (
        <div ref={popoverRef} className="absolute right-0 z-30 mt-2 w-64 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
          <div className="max-h-60 space-y-2 overflow-auto">
            {options.length === 0 && <p className="text-sm text-slate-500">РќРµС‚ РґР°РЅРЅС‹С…</p>}
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-slate-200">
                <input type="checkbox" checked={draft.includes(option)} onChange={() => toggleOption(option)} />
                {option}
              </label>
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2 text-sm">
            <button onClick={() => setDraft(parseMultiValue(value))} className="text-slate-400 hover:text-white">
              РЎР±СЂРѕСЃРёС‚СЊ
            </button>
            <button onClick={handleSave} className="rounded-lg bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500">
              РЎРѕС…СЂР°РЅРёС‚СЊ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const TimeRangePicker = ({
  value,
  onChange,
  title = 'Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё',
  placeholder = 'РќР°Р¶РјРёС‚Рµ, С‡С‚РѕР±С‹ РІС‹Р±СЂР°С‚СЊ',
  buttonClassName = 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white',
}) => {
  const [open, setOpen] = useState(false);
  const [{ start, end }, setDraft] = useState(() => parseTimeRangeValue(value));

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
        footer={
          <>
            <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
              РћС‚РјРµРЅР°
            </button>
            <button type="button" onClick={handleSave} className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">
              РЎРѕС…СЂР°РЅРёС‚СЊ
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Р’С‹Р±РµСЂРёС‚Рµ РІСЂРµРјСЏ РЅР°С‡Р°Р»Р° Рё РєРѕРЅС†Р° РІРёР·РёС‚Р°</p>
            <button type="button" onClick={handleClear} className="text-xs text-slate-400 hover:text-slate-100">
              РћС‡РёСЃС‚РёС‚СЊ
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400">РќР°С‡Р°Р»Рѕ</label>
              <input type="time" value={start} onChange={(event) => setDraft((prev) => ({ ...prev, start: event.target.value }))} className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white" />
            </div>
            <span className="text-2xl font-light text-slate-500">вЂ”</span>
            <div className="text-center">
              <label className="block text-sm font-medium text-slate-400">РљРѕРЅРµС†</label>
              <input type="time" value={end} onChange={(event) => setDraft((prev) => ({ ...prev, end: event.target.value }))} className="mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white" />
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
    return <span className="text-slate-200 whitespace-pre-wrap break-words leading-tight">{value || '-'}</span>;
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
        placeholder="вЂ”"
        title={tableId === 'Schedules' ? 'Р РµРґР°РєС‚РёСЂРѕРІР°РЅРёРµ СЃР»РѕС‚РѕРІ' : 'Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё'}
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
        РџРѕР»СЏ
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
  const selected = useMemo(() => (Array.isArray(value) ? value : parseMultiValue(value)), [value]);
  const toggle = (option) => {
    if (!onChange) return;
    const exists = selected.includes(option);
    const next = exists ? selected.filter((item) => item !== option) : [...selected, option];
    onChange(next);
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm text-slate-300">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {options.length === 0 && <p className="text-sm text-slate-500">{placeholder}</p>}
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <label
              key={option}
              className={classNames(
                'cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition',
                isActive ? 'border-indigo-400 bg-indigo-500/20 text-white' : 'border-slate-600 text-slate-200 hover:border-indigo-400'
              )}
            >
              <input type="checkbox" className="sr-only" checked={isActive} onChange={() => toggle(option)} />
              {option}
            </label>
          );
        })}
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
        РЎС‚Р°С‚СѓСЃС‹
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
          {statuses.length === 0 && <p className="text-sm text-slate-500">РќРµС‚ СЃС‚Р°С‚СѓСЃРѕРІ</p>}
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" checked={!hiddenStatuses.includes(status)} onChange={() => onToggle(status)} />
              {status}
            </label>
          ))}
          <button onClick={onReset} className="text-sm text-indigo-300 hover:text-indigo-100">
            РџРѕРєР°Р·Р°С‚СЊ РІСЃРµ
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
}) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex flex-1 flex-wrap gap-3">
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="РџРѕРёСЃРє" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white sm:w-64" />
      {supportsBarberFilter && (
        <select value={selectedBarber} onChange={(event) => setSelectedBarber(event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="all">Р’СЃРµ Р±Р°СЂР±РµСЂС‹</option>
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
      <ColumnMenu columns={columns} hiddenColumns={hiddenColumns} onToggle={toggleColumn} />
    </div>
    <div className="flex gap-2">
      <button onClick={onRefresh} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800">
        РћР±РЅРѕРІРёС‚СЊ
      </button>
      {canCreate && (
        <button onClick={onOpenCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
          + Р”РѕР±Р°РІРёС‚СЊ
        </button>
      )}
    </div>
  </div>
);
const DataTable = ({ tableId, rows, columns, hiddenColumns, sortConfig, onSort, onUpdate, onDelete, options, onOpenProfile, isCompact = false }) => {
  if (!rows.length) {
    return <p className="text-slate-400">Нет записей.</p>;
  }

  const visibleColumns = columns.filter((column) => !hiddenColumns.includes(column.key));

  if (isCompact) {
    return (
      <div className="space-y-3 md:hidden">
        {rows.map((record) => (
          <div key={getRecordId(record)} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
            {visibleColumns.map((column) => (
              <div key={column.key} className="text-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">{column.label}</p>
                <div className="mt-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-1">
                  <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                </div>
              </div>
            ))}
            {onDelete && (
              <button onClick={() => onDelete(record)} className="w-full rounded-lg border border-rose-500 py-2 text-sm font-semibold text-rose-300">
                Удалить
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="-mx-4 overflow-x-auto md:mx-0">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
            {visibleColumns.map((column) => (
              <th key={column.key} className={classNames('p-2', column.align === 'center' && 'text-center', column.minWidth)} onClick={() => column.sortable !== false && onSort(column.key)}>
                <div className={classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')}>
                  {column.label}
                  {column.sortable !== false && sortConfig?.key === column.key && <span className="text-xs">{sortConfig.direction === 'asc' ? '^' : 'РЋ'}</span>}
                </div>
              </th>
            ))}
            {onDelete && <th className="p-2 text-right">Р”РµР№СЃС‚РІРёСЏ</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((record) => (
            <tr key={getRecordId(record)} className="border-t border-slate-800">
              {visibleColumns.map((column) => (
                <td key={column.key} className={classNames('p-2 align-top whitespace-pre-wrap break-words', column.align === 'center' && 'text-center')}>
                  <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                </td>
              ))}
              {onDelete && (
                <td className="p-2 text-right">
                  <button onClick={() => onDelete(record)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-400">
                    РЈРґР°Р»РёС‚СЊ
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
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
      UserID: client.id || prev.UserID || '',
    }));
  };

  return (
    <Modal
      title={`РќРѕРІР°СЏ Р·Р°РїРёСЃСЊ: ${tableName}`}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
            РћС‚РјРµРЅР°
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
            РЎРѕС…СЂР°РЅРёС‚СЊ
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
                  placeholder={column.key === 'Week' ? 'вЂ”' : 'РќР°Р¶РјРёС‚Рµ, С‡С‚РѕР±С‹ РІС‹Р±СЂР°С‚СЊ'}
                  title={column.key === 'Week' ? 'Р РµРґР°РєС‚РёСЂРѕРІР°РЅРёРµ СЃР»РѕС‚РѕРІ' : 'Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё'}
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

const ProfileModal = ({ state, onClose }) => (
  <Modal
    title={state.data?.user?.Name || 'РџСЂРѕС„РёР»СЊ РєР»РёРµРЅС‚Р°'}
    isOpen={state.open}
    onClose={onClose}
    footer={<button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">Р—Р°РєСЂС‹С‚СЊ</button>}
  >
    {state.loading && <LoadingState label="Р—Р°РіСЂСѓР¶Р°СЋ РїСЂРѕС„РёР»СЊ..." />}
    {!state.loading && state.data?.error && <ErrorBanner message={state.data.error} />}
    {!state.loading && state.data?.user && (
      <div className="space-y-4">
        <div className="grid gap-2 text-sm text-slate-200">
          <div><span className="text-slate-400">РўРµР»РµС„РѕРЅ:</span> {state.data.user.Phone || '-'}</div>
          <div><span className="text-slate-400">Telegram:</span> {state.data.user.TelegramID || '-'}</div>
          <div><span className="text-slate-400">Р‘Р°СЂР±РµСЂ:</span> {state.data.user.Barber || '-'}</div>
        </div>
        <div>
          <p className="text-sm text-slate-400">РСЃС‚РѕСЂРёСЏ РІРёР·РёС‚РѕРІ</p>
          <div className="mt-2 max-h-64 space-y-2 overflow-auto">
            {state.data.appointments?.length ? (
              state.data.appointments.map((appt) => (
                <div key={appt.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-2 text-xs text-slate-200">
                  <p className="font-semibold">{formatDateTime(appt.Date, appt.Time)}</p>
                  <p>{appt.Barber}</p>
                  <p className="text-slate-400">{appt.Services}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Р—Р°РїРёСЃРµР№ РЅРµС‚.</p>
            )}
          </div>
        </div>
      </div>
    )}
  </Modal>
);

const BackupsPanel = ({ backups = [], onRestore, onCreate }) => (
  <SectionCard
    title="Р РµР·РµСЂРІРЅС‹Рµ РєРѕРїРёРё"
    actions={
      <button onClick={onCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
        РЎРѕР·РґР°С‚СЊ РєРѕРїРёСЋ
      </button>
    }
  >
    {backups.length === 0 ? (
      <p className="text-slate-400">РСЃС‚РѕСЂРёСЏ РїСѓСЃС‚Р°.</p>
    ) : (
      <div className="space-y-2">
        {backups.map((backup) => (
          <div key={backup} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
            <span>{backup}</span>
            <button onClick={() => onRestore(backup)} className="text-indigo-300 hover:text-indigo-100">
              Р’РѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ
            </button>
          </div>
        ))}
      </div>
    )}
  </SectionCard>
);

const AppointmentModal = ({ open, appointment, options = {}, onClose, onSave, isNew = false, clients = [] }) => {
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
        UserID: client.id || prev.UserID || '',
      };
    });
  };

  return (
    <Modal
      title={isNew ? 'РќРѕРІР°СЏ Р·Р°РїРёСЃСЊ' : `Р РµРґР°РєС‚РёСЂРѕРІР°РЅРёРµ Р·Р°РїРёСЃРё ${draft.CustomerName || ''}`}
      isOpen={open}
      onClose={onClose}
      footer={
        <>
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">
            РћС‚РјРµРЅР°
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
            РЎРѕС…СЂР°РЅРёС‚СЊ
          </button>
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-2">
        <ClientLookupInput
          label="Клиент"
          value={draft.CustomerName || ''}
          onChange={(nextValue) => handleChange('CustomerName', nextValue)}
          clients={clients}
          onSelectClient={handleClientAutoFill}
        />
        <input value={draft.Phone || ''} onChange={(event) => handleChange('Phone', event.target.value)} placeholder="РўРµР»РµС„РѕРЅ" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <select value={draft.Barber || ''} onChange={(event) => handleChange('Barber', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="">Р‘Р°СЂР±РµСЂ</option>
          {(options.barbers || []).map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>
        <input type="date" value={draft.Date ? String(draft.Date).slice(0, 10) : ''} onChange={(event) => handleChange('Date', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <TimeRangePicker value={draft.Time || ''} onChange={(nextValue) => handleChange('Time', nextValue)} placeholder="РќР°Р¶РјРёС‚Рµ, С‡С‚РѕР±С‹ РІС‹Р±СЂР°С‚СЊ" />
        <select value={draft.Status || ''} onChange={(event) => handleChange('Status', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="">РЎС‚Р°С‚СѓСЃ</option>
          {(options.statuses || []).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className="md:col-span-2">
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
const TablesWorkspace = ({ apiRequest, sharedOptions, onOptionsUpdate, onOpenProfile, clients = [] }) => {
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
    Cost: [],
  });
  const [sortConfigs, setSortConfigs] = useLocalStorage(
    'tables.sortConfigs',
    DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: TABLE_CONFIG[table]?.defaultSort || null }), {})
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [compactTableView, setCompactTableView] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (sharedOptions) {
      setDropdownOptions({
        ...sharedOptions,
        statuses: normalizeStatusList(sharedOptions.statuses || []),
      });
    }
  }, [sharedOptions]);

  useEffect(() => {
    const handleResize = () => setCompactTableView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!TABLE_CONFIG[activeTable]) {
      setActiveTable('Appointments');
    }
  }, [activeTable, setActiveTable]);

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
      setTableError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚Р°Р±Р»РёС†С‹');
    } finally {
      setIsFetching(false);
    }
  }, [apiRequest, onOptionsUpdate]);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

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
        return shouldDisplayAppointment(row, nowTs);
      });
    }
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      rows = rows.filter((row) => visibleColumns.some((column) => normalizeText(row[column.key]).toLowerCase().includes(query)));
    }
    if (sortConfig?.key) {
      rows.sort((a, b) => {
        const left = normalizeText(a[sortConfig.key]).toLowerCase();
        const right = normalizeText(b[sortConfig.key]).toLowerCase();
        if (left === right) return 0;
        return sortConfig.direction === 'asc' ? (left > right ? 1 : -1) : left > right ? -1 : 1;
      });
    }
    return rows;
  }, [tables, activeTable, selectedBarber, hiddenStatuses, searchTerm, visibleColumns, sortConfig]);

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
      setTableError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ Р·Р°РїРёСЃСЊ');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };

  const handleDelete = async (record) => {
    if (!record || activeTable === 'Schedules') return;
    if (!window.confirm('РЈРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ Р±РµР· РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ?')) return;
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
      setTableError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ');
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
      setTableError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ Р·Р°РїРёСЃСЊ');
    }
  };

  const tableSettings = TABLE_CONFIG[activeTable] || {};

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
          />
          {isFetching ? (
            <LoadingState label="РћР±РЅРѕРІР»СЏСЋ С‚Р°Р±Р»РёС†С‹..." />
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
                isCompact={compactTableView}
              />
            </div>
          )}
        </SectionCard>
      )}

      {tableSettings.canCreate && (
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

        <SectionCard title="Р вЂєР С‘РЎвЂ Р ВµР Р…Р В·Р С‘РЎРЏ Р С‘ Р С•Р В±Р Р…Р С•Р Р†Р В»Р ВµР Р…Р С‘РЎРЏ">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Р вЂєР С‘РЎвЂ Р ВµР Р…Р В·Р С‘РЎРЏ</p>
              <p className="mt-1">Р РЋРЎвЂљР В°РЎвЂљРЎС“РЎРѓ: {licenseStatus?.valid ? 'Р В°Р С”РЎвЂљР С‘Р Р†Р Р…Р В°' : 'Р Р…Р Вµ Р С—Р С•Р Т‘РЎвЂљР Р†Р ВµРЎР‚Р В¶Р Т‘Р ВµР Р…Р В°'}</p>
              <p>Р РЋР С•Р С•Р В±РЎвЂ°Р ВµР Р…Р С‘Р Вµ: {licenseStatus?.message || 'Р Р…Р ВµРЎвЂљ Р Т‘Р В°Р Р…Р Р…РЎвЂ№РЎвЂ¦'}</p>
              {licenseStatus?.license?.owner && <p>Р вЂ™Р В»Р В°Р Т‘Р ВµР В»Р ВµРЎвЂ : {licenseStatus.license.owner}</p>}
              {licenseStatus?.license?.expiresAt && <p>Р вЂќР ВµР в„–РЎРѓРЎвЂљР Р†РЎС“Р ВµРЎвЂљ Р Р…Р ВµРЎР‚Р Вµ Р Р…Р ВµР Т‘ {formatDate(licenseStatus.license.expiresAt)}</p>}
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Р вЂ¦Р С•Р Т‘Р В¾Р С‘Р Т‘Р В°Р в„–РЎвЂљР С‘ РЎРѓР В¸Р Т‘Р ВµРЎР‚Р ВµР Р…Р С‘</p>
              <p className="mt-1">{licenseStatus?.license?.number || 'Р Р…Р Вµ Р С—Р С•Р Т‘РЎвЂљР Р†Р ВµРЎР‚Р В¶Р Т‘Р ВµР Р…Р В°'}</p>
              <p>Р СњР В°Р В°Р С‘Р С”Р С‘: {licenseStatus?.license?.issuer || '—'}</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Р вЂ™РЎвЂљР Р…Р В°Р ВµРЎвЂљР Вµ РЎРѓР В¸Р Т‘Р ВµРЎР‚Р ВµР Р…Р С‘"
          actions={
            <button onClick={onRefreshUpdate} disabled={systemBusy} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
              Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚Р С‘РЎвЂљРЎРЉ
            </button>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Р СћР ВµР С”РЎРѓРЎвЂљРЎвЂ№</p>
              <p className="mt-1">Р РЋРЎвЂљР ВµРЎР‚Р ВµР Р…: {updateInfo?.version || '—'}</p>
              <p>Р СџР ВµРЎР‚Р ВµР Р…: {updateInfo?.checkedAt ? formatDate(updateInfo.checkedAt) : '—'}</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold">Р вЂ™РСКР Т‘Р ВµРЎР‚Р Вµ</p>
              <p className="mt-1">{updateInfo?.details || 'Р Р…Р Вµ Р С—Р С•Р Т‘РЎвЂљР Р†Р ВµРЎР‚Р В¶Р Т‘Р ВµР Р…Р В°'}</p>
              <button onClick={onApplyUpdate} disabled={systemBusy || !updateInfo?.available} className="mt-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50">
                {systemBusy ? 'Р РЋРЎвЂљР В°РС•РЎвЂљР С•Р Вµ...' : 'Р С›РЎвЂљРЎР‚Р ВµРЎР‚Р С‘РЎвЂљРЎРЉ Р Р…Р ВµРЎР‚Р Вµ'}
              </button>
            </div>
          </div>
        </SectionCard>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionCard
        title="Р РЋРЎвЂљР В°РЎвЂљРЎС“РЎРѓ Р В±Р С•РЎвЂљР В°"
        actions={
          <div className="flex gap-2 text-sm">
            <button onClick={onStart} className="rounded-lg bg-emerald-600 px-3 py-1 text-white">
              Р вЂ”Р В°Р С—РЎС“РЎРѓРЎвЂљР С‘РЎвЂљРЎРЉ
            </button>
            <button onClick={onStop} className="rounded-lg bg-rose-600 px-3 py-1 text-white">
              Р С›РЎРѓРЎвЂљР В°Р Р…Р С•Р Р†Р С‘РЎвЂљРЎРЉ
            </button>
            <button onClick={onRestart} className="rounded-lg bg-slate-600 px-3 py-1 text-white">
              Р СџР ВµРЎР‚Р ВµР В·Р В°Р С—РЎС“РЎРѓРЎвЂљР С‘РЎвЂљРЎРЉ
            </button>
          </div>
        }
      >
        <p className="text-slate-300">Р РЋР С•РЎРѓРЎвЂљР С•РЎРЏ: {status?.running ? 'РЎР‚Р В°Р В±Р С•РЎвЂљР В°Р ВµРЎвЂљ' : 'Р С•РЎРѓРЎвЂљР В°Р Р…Р С•Р Р†Р В»Р ВµР Р…'}</p>
        <label className="mt-3 inline-flex items-center gap-2 text-slate-300">
          <input type="checkbox" checked={settings?.isBotEnabled !== false} onChange={(event) => onToggleEnabled(event.target.checked)} />
          Р С’Р Р†РЎвЂљР С•РЎРѓРЎвЂљР В°РЎР†РЎвЂљ Р Р†Р СР ВµРЎРѓРЎвЂљР Вµ РЎРѓ CRM
        </label>
      </SectionCard>

      <SectionCard title="Р СћР ВµР С”РЎРѓРЎвЂљРЎвЂ№ Р В±Р С•РЎвЂљР В°">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Р С›Р С—Р С‘РЎРѓР В°Р Р…Р С‘Р Вµ Р В»Р ВµР Р…Р Т‘Р С‘Р Р…Р С–Р В°</label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={3} className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Р вЂР В»Р С•Р С” Р’В«Р С› Р Р…Р В°РЎРѓР’В»</label>
            <textarea value={about} onChange={(event) => setAbout(event.target.value)} rows={4} className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          </div>
          <button onClick={() => onSaveSettings({ botDescription: description, aboutText: about })} className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
            Р РЋР С•РЎвЂ¦РЎР‚Р В°Р Р…Р С‘РЎвЂљРЎРЉ РЎвЂљР ВµР С”РЎРѓРЎвЂљРЎвЂ№
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Р С’Р Р†РЎвЂљР С•Р С•РЎвЂљР Р†Р ВµРЎвЂљРЎвЂ№">
        {messages.length === 0 && <p className="text-slate-500">Р СњР ВµРЎвЂљ Р В·Р В°Р С–РЎР‚РЎС“Р В¶Р ВµР Р…Р Р…РЎвЂ№РЎвЂ¦ РЎРѓР С•Р С•Р В±РЎвЂ°Р ВµР Р…Р С‘Р в„–.</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {messages.map((message) => (
            <div key={message.id} className="space-y-3 rounded-xl border border-slate-700 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{message.code}</p>
              <input value={message.title || ''} onChange={(event) => onSaveMessage(message.id, { ...message, title: event.target.value }, false)} placeholder="Р вЂ”Р В°Р С–Р С•Р В»Р С•Р Р†Р С•Р С”" className="w-full rounded border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
              <textarea value={message.text || ''} onChange={(event) => onSaveMessage(message.id, { ...message, text: event.target.value }, false)} rows={3} className="w-full rounded border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
              <button onClick={() => onSaveMessage(message.id, message, true)} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white">
                Р РЋР С•РЎвЂ¦РЎР‚Р В°Р Р…Р С‘РЎвЂљРЎРЉ
              </button>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};
const LoginScreen = ({ onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="text-center text-2xl font-semibold text-white">Barber Bot CRM</h1>
        <div>
          <label className="text-sm text-slate-300">Выберите барбера</label>
          <select
            value={KNOWN_USERS.some((user) => user.login === username) ? username : ''}
            onChange={(event) => setUsername(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white"
          >
            <option value="">—</option>
            {KNOWN_USERS.map((user) => (
              <option key={user.login} value={user.login}>
                {user.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-slate-300">Пользователь</label>
          <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Введите имя" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
        </div>
        <div>
          <label className="text-sm text-slate-300">РџР°СЂРѕР»СЊ</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
        </div>
        {error && <ErrorBanner message={error} />}
        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-500">
          Р’РѕР№С‚Рё
        </button>
      </form>
    </div>
  );
};
const App = () => {
  const [session, setSession] = useState(() => {
    try {
      const saved = localStorage.getItem('barber-session');
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      return null;
    }
  });
  const [activeTab, setActiveTab] = useLocalStorage('barber.activeTab', 'dashboard');
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
  const [appointmentModal, setAppointmentModal] = useState({ open: false, data: null, options: null, isNew: false });
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [authError, setAuthError] = useState('');
  const [systemBusy, setSystemBusy] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
  }, []);

  const apiRequest = useCallback(
    async (endpoint, options = {}) => {
      if (!session?.token) throw new Error('РќРµС‚ Р°РєС‚РёРІРЅРѕР№ СЃРµСЃСЃРёРё');
      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
        ...(options.body && !options.headers?.['Content-Type'] ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      };
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      if (response.status === 401 || response.status === 403) {
        handleLogout();
        throw new Error('РЎРµСЃСЃРёСЏ РёСЃС‚РµРєР»Р°');
      }
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'РћС€РёР±РєР° Р·Р°РїСЂРѕСЃР°');
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
      const [overview, servicesFull, barbersFull, botState, messages, license, update, options] = await Promise.all([
        apiRequest('/dashboard/overview'),
        apiRequest('/services/full'),
        apiRequest('/barbers/full'),
        apiRequest('/bot/status'),
        apiRequest('/bot/messages'),
        apiRequest('/license/status'),
        apiRequest('/system/update'),
        apiRequest('/options/appointments'),
      ]);
      setDashboard(overview);
      setServices(servicesFull.services || []);
      setBarbers(barbersFull || overview.barbers || []);
      setBotSettings(botState.settings || overview.bot?.settings || null);
      setBotStatus(botState.status);
      setBotMessages(messages || []);
      setLicenseStatus(license);
      setUpdateInfo(update);
      const normalizedOptions = { ...options, statuses: normalizeStatusList(options.statuses || []) };
      setOptionsCache(normalizedOptions);
    } catch (error) {
      console.error(error);
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РґР°РЅРЅС‹Рµ');
    } finally {
      setLoading(false);
    }
  }, [apiRequest, session?.token]);

  useEffect(() => {
    if (session?.token) {
      fetchAll();
    }
  }, [session?.token, fetchAll]);

  const handleLogin = async (username, password) => {
    setAuthError('');
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setAuthError(data.message || 'РќРµРІРµСЂРЅС‹Р№ Р»РѕРіРёРЅ РёР»Рё РїР°СЂРѕР»СЊ');
        return;
      }
      localStorage.setItem('barber-session', JSON.stringify(data));
      setSession(data);
    } catch (error) {
      setAuthError('РЎРµСЂРІРµСЂ РЅРµРґРѕСЃС‚СѓРїРµРЅ');
    }
  };

  const handleBarberFieldChange = (id, field, value) => {
    setBarbers((prev) => prev.map((barber) => (barber.id === id ? { ...barber, [field]: value } : barber)));
  };

  const handleServiceFieldChange = (id, field, value) => {
    setServices((prev) => prev.map((service) => (service.id === id ? { ...service, [field]: value } : service)));
  };

  const handleServicePriceChange = (serviceId, barberId, value) => {
    setServices((prev) => prev.map((service) => {
      if (service.id !== serviceId) return service;
      return {
        ...service,
        prices: { ...(service.prices || {}), [barberId]: value },
      };
    }));
  };

  const normalizeServicePayload = (service) => ({
    ...service,
    prices: Object.fromEntries(
      Object.entries(service.prices || {}).map(([key, value]) => [key, value === '' || value == null ? null : Number(value)])
    ),
  });

  const buildBarberPayload = (barberData = {}, fallbackOrder = 0) => {
    const payload = {
      name: barberData.name || '',
      nickname: barberData.nickname || '',
      description: barberData.description || '',
      rating: barberData.rating || '',
      avatarUrl: barberData.avatarUrl || '',
      color: barberData.color || '',
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
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'PUT', body: JSON.stringify(buildBarberPayload(barber)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message);
    }
  };

  const handleDeleteBarber = async (barber) => {
    if (!barber?.id) return;
    if (!window.confirm('РЈРґР°Р»РёС‚СЊ Р±Р°СЂР±РµСЂР° Р±РµР· РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ?')) return;
    try {
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ Р±Р°СЂР±РµСЂР°');
    }
  };

  const handleAddBarber = async (payload) => {
    if (!payload.name) return;
    try {
      const newBarberPayload = buildBarberPayload({ ...payload, id: undefined }, barbers.length);
      const { id, ...body } = newBarberPayload;
      await apiRequest('/Barbers', { method: 'POST', body: JSON.stringify(body) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РґРѕР±Р°РІРёС‚СЊ Р±Р°СЂР±РµСЂР°');
    }
  };

  const handleSaveService = async (service) => {
    if (!service?.id) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'PUT', body: JSON.stringify(normalizeServicePayload(service)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ СѓСЃР»СѓРіСѓ');
    }
  };

  const handleDeleteService = async (service) => {
    if (!service?.id) return;
    if (!window.confirm('РЈРґР°Р»РёС‚СЊ СѓСЃР»СѓРіСѓ?')) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СѓРґР°Р»РёС‚СЊ СѓСЃР»СѓРіСѓ');
    }
  };

  const handleAddService = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/services/full', { method: 'POST', body: JSON.stringify(normalizeServicePayload(payload)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РґРѕР±Р°РІРёС‚СЊ СѓСЃР»СѓРіСѓ');
    }
  };

  const handleBotToggle = async (enabled) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ isBotEnabled: enabled }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РѕР±РЅРѕРІРёС‚СЊ РЅР°СЃС‚СЂРѕР№РєРё Р±РѕС‚Р°');
    }
  };

  const handleBotAction = async (action) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ action }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РІС‹РїРѕР»РЅРёС‚СЊ РґРµР№СЃС‚РІРёРµ');
    }
  };

  const handleSaveSettings = async (payload) => {
    if (!botSettings?.id) return;
    try {
      await apiRequest(`/BotSettings/${encodeURIComponent(botSettings.id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ РЅР°СЃС‚СЂРѕР№РєРё');
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
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ СЃРѕРѕР±С‰РµРЅРёРµ');
    }
  };

  const handleRestoreBackup = async (filename) => {
    if (!filename) return;
    if (!window.confirm(`Р’РѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ РґР°РЅРЅС‹Рµ РёР· ${filename}?`)) return;
    try {
      await apiRequest('/backups/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ Р±СЌРєР°Рї');
    }
  };

  const handleCreateBackup = async () => {
    if (!window.confirm('РЎРѕР·РґР°С‚СЊ РЅРѕРІСѓСЋ СЂРµР·РµСЂРІРЅСѓСЋ РєРѕРїРёСЋ?')) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕР·РґР°С‚СЊ Р±СЌРєР°Рї');
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
        setProfileModal({ open: true, data: { error: error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РїСЂРѕС„РёР»СЊ' }, loading: false });
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
    async (appointment) => {
      const options = await ensureOptions();
      setAppointmentModal({ open: true, data: appointment, options, isNew: false });
    },
    [ensureOptions]
  );

  const handleCreateAppointment = useCallback(async () => {
    const options = await ensureOptions();
    const today = new Date().toISOString().slice(0, 10);
    const defaultStatus = normalizeStatusValue(options.statuses?.[0] || 'РђРєС‚РёРІРЅР°СЏ');
    setAppointmentModal({
      open: true,
      data: {
        id: null,
        CustomerName: '',
        Phone: '',
        Barber: options.barbers?.[0] || '',
        Date: today,
        Time: '',
        Status: defaultStatus,
        Services: '',
        UserID: '',
      },
      options,
      isNew: true,
    });
  }, [ensureOptions]);

  const handleSaveAppointment = async ({ id, payload, isNew }) => {
    try {
      if (isNew) {
        await apiRequest('/Appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      } else if (id) {
        await apiRequest(`/Appointments/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      }
      setAppointmentModal((prev) => ({ ...prev, open: false, data: null, isNew: false }));
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ СЃРѕС…СЂР°РЅРёС‚СЊ Р·Р°РїРёСЃСЊ');
    }
  };

  const handleRefreshUpdate = async () => {
    setSystemBusy(true);
    try {
      const info = await apiRequest('/system/update?force=1');
      setUpdateInfo(info);
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРѕРІРµСЂРёС‚СЊ РѕР±РЅРѕРІР»РµРЅРёСЏ');
    } finally {
      setSystemBusy(false);
    }
  };

  const handleApplyUpdate = async () => {
    if (!window.confirm('РћР±РЅРѕРІРёС‚СЊ CRM Рё Р±РѕС‚Р° РґРѕ РїРѕСЃР»РµРґРЅРµР№ РІРµСЂСЃРёРё?')) return;
    setSystemBusy(true);
    try {
      const result = await apiRequest('/system/update', { method: 'POST' });
      setUpdateInfo(result.info || result);
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРёРјРµРЅРёС‚СЊ РѕР±РЅРѕРІР»РµРЅРёРµ');
    } finally {
      setSystemBusy(false);
    }
  };

  if (!session?.token) {
    return <LoginScreen onLogin={handleLogin} error={authError} />;
  }

  const renderActive = () => {
    if (loading) return <LoadingState />;
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView data={dashboard} onOpenAppointment={handleOpenAppointment} onOpenProfile={openProfile} onCreateAppointment={handleCreateAppointment} />;
      case 'barbers':
        return (
          <BarbersView
            barbers={barbers}
            onFieldChange={handleBarberFieldChange}
            onSave={handleSaveBarber}
            onAdd={handleAddBarber}
            onDelete={handleDeleteBarber}
          />
        );
      case 'services':
        return (
          <ServicesView
            services={services}
            barbers={barbers}
            onFieldChange={handleServiceFieldChange}
            onPriceChange={handleServicePriceChange}
            onSave={handleSaveService}
            onDelete={handleDeleteService}
            onAdd={handleAddService}
          />
        );
      case 'tables':
        return <TablesWorkspace apiRequest={apiRequest} sharedOptions={optionsCache} onOptionsUpdate={setOptionsCache} onOpenProfile={openProfile} clients={dashboard?.clients || []} />;
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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {isMobile && <MobileTabs activeTab={activeTab} onChange={setActiveTab} />}
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
        onClose={() => setAppointmentModal((prev) => ({ ...prev, open: false, data: null, isNew: false }))}
        onSave={handleSaveAppointment}
        isNew={appointmentModal.isNew}
        clients={dashboard?.clients || []}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));