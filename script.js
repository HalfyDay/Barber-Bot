const { useState, useEffect, useCallback, useMemo, useRef } = React;

const DEFAULT_API_BASE_URL = 'http://192.168.1.55:3000/api';
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;

const VIEW_TABS = [
  { id: 'dashboard', label: 'Обзор' },
  { id: 'barbers', label: 'Барберы' },
  { id: 'services', label: 'Услуги' },
  { id: 'tables', label: 'Таблицы' },
  { id: 'bot', label: 'Бот и система' },
];

const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Cost', 'Backups'];
const DATA_TABLES = ['Appointments', 'Schedules', 'Users', 'Cost'];

const TABLE_CONFIG = {
  Appointments: { label: 'Записи', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Schedules: { label: 'Расписание', canCreate: false, supportsBarberFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Users: { label: 'Клиенты', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Cost: { label: 'Каталог услуг', canCreate: true, defaultSort: { key: 'Uslugi', direction: 'asc' } },
  Backups: { label: 'Бэкапы', canCreate: false },
};

const TABLE_COLUMNS = {
  Appointments: [
    { key: 'CustomerName', label: 'Клиент', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-48' },
    { key: 'Phone', label: 'Телефон', editable: true, type: 'text', minWidth: 'w-36' },
    { key: 'Barber', label: 'Барбер', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-32' },
    { key: 'Date', label: 'Дата', editable: true, type: 'date', minWidth: 'w-32' },
    { key: 'Time', label: 'Время', editable: true, type: 'text', minWidth: 'w-28' },
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
  Cost: [
    { key: 'Uslugi', label: 'Услуга', editable: true, type: 'text', minWidth: 'w-56' },
    { key: 'Timur', label: 'Тимур', editable: true, type: 'text', align: 'center' },
    { key: 'Vladimir', label: 'Владимир', editable: true, type: 'text', align: 'center' },
    { key: 'Alina', label: 'Алина', editable: true, type: 'text', align: 'center' },
    { key: 'Aleksey', label: 'Алексей', editable: true, type: 'text', align: 'center' },
    { key: 'Dlitelnost', label: 'Длительность', editable: true, type: 'text', minWidth: 'w-32' },
  ],
};

const RATING_OPTIONS = ['5', '4.5', '4', '3.5', '3'];
const AVATAR_PRESETS = ['/Image/barber_alex.jpg', '/Image/barber_alina.jpg', '/Image/barber_vlad.jpg', '/Image/barber_timur.jpg'];
const KNOWN_USERS = ['Aleksey', 'Alina', 'Vladimir', 'Timur'];
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
  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <p className={classNames('mt-2 text-3xl font-semibold', accent)}>{value}</p>
  </div>
);
const DashboardView = ({ data, onOpenAppointment, onOpenProfile }) => {
  if (!data) return <LoadingState />;
  const upcoming = data.appointments?.upcoming?.slice(0, 8) || [];
  const stats = data.stats || {};

  return (
    <div className="space-y-6">
      <SectionCard title="Ключевые показатели">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Всего клиентов" value={stats.totalUsers ?? 0} />
          <StatCard label="Активные записи" value={stats.activeAppointments ?? 0} accent="text-emerald-300" />
          <StatCard label="Подтверждено за год" value={stats.confirmedYear ?? 0} accent="text-fuchsia-300" />
          <StatCard label="Сегодня" value={stats.todaysAppointments ?? 0} accent="text-cyan-300" />
        </div>
      </SectionCard>

      <SectionCard title="Ближайшие записи">
        {upcoming.length === 0 ? (
          <p className="text-slate-400">Нет ближайших записей.</p>
        ) : (
          <div className="space-y-3">
            {upcoming.map((appt) => (
              <button
                key={appt.id}
                onClick={() => onOpenAppointment?.(appt)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-left transition hover:border-indigo-500"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{appt.CustomerName || '-'}</p>
                    <p className="text-sm text-slate-400">{appt.Barber}</p>
                  </div>
                  <div className="text-sm text-slate-300 text-right">
                    <p>{formatDate(appt.Date)}</p>
                    <p>{appt.Time}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-400">{appt.Services || 'Без услуг'}</p>
                <div className="mt-3 text-xs text-indigo-300">Нажмите, чтобы открыть карточку записи</div>
                <div className="mt-2 text-xs text-slate-500">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      onOpenProfile?.(appt.CustomerName);
                    }}
                    className="text-indigo-300 hover:text-indigo-100"
                  >
                    Открыть профиль клиента
                  </button>
                </div>
              </button>
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
      <input value={value || ''} onChange={(event) => onChange(event.target.value)} placeholder="URL или путь к файлу" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white" />
    </div>
    <select value="" onChange={(event) => onChange(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
      <option value="">Выбрать из шаблонов</option>
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
      <SectionCard title="Команда">
        {barbers.length === 0 ? (
          <p className="text-slate-400">Список барберов пуст.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {barbers.map((barber) => {
              const colorValue = /^#/.test(barber.color || '') ? barber.color : '#6d28d9';
              return (
                <div key={barber.id} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
                  <input value={barber.name || ''} onChange={(event) => onFieldChange(barber.id, 'name', event.target.value)} placeholder="Имя" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input value={barber.nickname || ''} onChange={(event) => onFieldChange(barber.id, 'nickname', event.target.value)} placeholder="Ник" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                    <select value={barber.rating || ''} onChange={(event) => onFieldChange(barber.id, 'rating', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
                      <option value="">Рейтинг</option>
                      {RATING_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input value={barber.description || ''} onChange={(event) => onFieldChange(barber.id, 'description', event.target.value)} placeholder="Описание" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
                    <label className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
                      Цвет
                      <input type="color" value={colorValue} onChange={(event) => onFieldChange(barber.id, 'color', event.target.value)} className="h-8 w-16 cursor-pointer rounded border border-slate-500 bg-transparent" />
                    </label>
                  </div>
                  <BarberAvatarPicker value={barber.avatarUrl} onChange={(value) => onFieldChange(barber.id, 'avatarUrl', value)} />
                  <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                    <input type="checkbox" checked={barber.isActive !== false} onChange={(event) => onFieldChange(barber.id, 'isActive', event.target.checked)} />
                    Активен
                  </label>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => onSave(barber)} className="flex-1 rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                      Сохранить
                    </button>
                    <button onClick={() => onDelete(barber)} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-400">
                      Удалить
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>

      <SectionCard title="Добавить барбера">
        <div className="grid gap-3 md:grid-cols-2">
          <input value={newBarber.name} onChange={(event) => updateNewBarber('name', event.target.value)} placeholder="Имя" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          <input value={newBarber.nickname} onChange={(event) => updateNewBarber('nickname', event.target.value)} placeholder="Ник" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          <select value={newBarber.rating} onChange={(event) => updateNewBarber('rating', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
            {RATING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
            Цвет
            <input type="color" value={newBarber.color} onChange={(event) => updateNewBarber('color', event.target.value)} className="h-8 w-16 cursor-pointer rounded border border-slate-500 bg-transparent" />
          </label>
          <BarberAvatarPicker value={newBarber.avatarUrl} onChange={(value) => updateNewBarber('avatarUrl', value)} />
          <label className="inline-flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={newBarber.isActive} onChange={(event) => updateNewBarber('isActive', event.target.checked)} />
            Активен
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
          Добавить
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
      <SectionCard title="Каталог">
        {services.length === 0 ? (
          <p className="text-slate-400">Пока нет ни одной услуги.</p>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full table-fixed text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="p-2">Название</th>
                  <th className="p-2 w-32">Длительность</th>
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
                        <input type="number" value={service.prices?.[barber.id] ?? ''} onChange={(event) => onPriceChange(service.id, barber.id, event.target.value)} className="w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white" placeholder="Цена" />
                      </td>
                    ))}
                    <td className="p-2 align-top">
                      <div className="flex gap-2">
                        <button onClick={() => onSave(service)} className="rounded-lg bg-indigo-600 px-3 py-1 text-xs text-white">
                          Сохранить
                        </button>
                        <button onClick={() => onDelete(service)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-400">
                          Удалить
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

      <SectionCard title="Новая услуга">
        <div className="grid gap-3 md:grid-cols-2">
          <input value={newService.name} onChange={(event) => updateNewService('name', event.target.value)} placeholder="Название" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
          <input type="number" value={newService.duration} onChange={(event) => updateNewService('duration', Number(event.target.value))} placeholder="Длительность, мин" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {barbers.map((barber) => (
            <input
              key={barber.id}
              type="number"
              value={newService.prices?.[barber.id] ?? ''}
              onChange={(event) => updateNewServicePrice(barber.id, event.target.value)}
              placeholder={`Цена для ${barber.name}`}
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
          Добавить услугу
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
        {draft.length ? draft.join(', ') : 'Выбрать'}
      </button>
      {open && (
        <div ref={popoverRef} className="absolute right-0 z-30 mt-2 w-64 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
          <div className="max-h-60 space-y-2 overflow-auto">
            {options.length === 0 && <p className="text-sm text-slate-500">Нет данных</p>}
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-slate-200">
                <input type="checkbox" checked={draft.includes(option)} onChange={() => toggleOption(option)} />
                {option}
              </label>
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2 text-sm">
            <button onClick={() => setDraft(parseMultiValue(value))} className="text-slate-400 hover:text-white">
              Сбросить
            </button>
            <button onClick={handleSave} className="rounded-lg bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500">
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const EditableCell = ({ record, column, options, onUpdate, onOpenProfile }) => {
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
}) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex flex-1 flex-wrap gap-3">
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Поиск" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white sm:w-64" />
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
      <ColumnMenu columns={columns} hiddenColumns={hiddenColumns} onToggle={toggleColumn} />
    </div>
    <div className="flex gap-2">
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
const DataTable = ({ rows, columns, hiddenColumns, sortConfig, onSort, onUpdate, onDelete, options, onOpenProfile }) => {
  if (!rows.length) {
    return <p className="text-slate-400">Нет записей.</p>;
  }

  const visibleColumns = columns.filter((column) => !hiddenColumns.includes(column.key));

  return (
    <div className="overflow-auto">
      <table className="min-w-full table-fixed text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
            {visibleColumns.map((column) => (
              <th key={column.key} className={classNames('p-2', column.align === 'center' && 'text-center', column.minWidth)} onClick={() => column.sortable !== false && onSort(column.key)}>
                <div className={classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')}>
                  {column.label}
                  {column.sortable !== false && sortConfig?.key === column.key && <span className="text-xs">{sortConfig.direction === 'asc' ? '^' : 'Ў'}</span>}
                </div>
              </th>
            ))}
            {onDelete && <th className="p-2 text-right">Действия</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((record) => (
            <tr key={getRecordId(record)} className="border-t border-slate-800">
              {visibleColumns.map((column) => (
                <td key={column.key} className={classNames('p-2 align-top whitespace-pre-wrap break-words', column.align === 'center' && 'text-center')}>
                  <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} />
                </td>
              ))}
              {onDelete && (
                <td className="p-2 text-right">
                  <button onClick={() => onDelete(record)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-400">
                    Удалить
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

const CreateRecordModal = ({ isOpen, onClose, onSave, columns, tableName, options }) => {
  const editableColumns = columns.filter((column) => column.editable !== false);
  const initialState = useMemo(() => {
    const payload = {};
    editableColumns.forEach((column) => {
      payload[column.key] = column.type === 'multi-select' ? [] : '';
    });
    return payload;
  }, [editableColumns]);

  const [draft, setDraft] = useState(initialState);

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
        {editableColumns.map((column) => {
          const value = draft[column.key];
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
            return (
              <div key={column.key} className="space-y-1">
                <label className="text-sm text-slate-300">{column.label}</label>
                <select
                  multiple
                  value={value}
                  onChange={(event) => {
                    const selected = Array.from(event.target.selectedOptions).map((option) => option.value);
                    setDraft((prev) => ({ ...prev, [column.key]: selected }));
                  }}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
                >
                  {(options[column.optionsKey] || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
            {state.data.appointments?.length ? (
              state.data.appointments.map((appt) => (
                <div key={appt.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-2 text-xs text-slate-200">
                  <p className="font-semibold">{formatDateTime(appt.Date, appt.Time)}</p>
                  <p>{appt.Barber}</p>
                  <p className="text-slate-400">{appt.Services}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Записей нет.</p>
            )}
          </div>
        </div>
      </div>
    )}
  </Modal>
);

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

const AppointmentModal = ({ open, appointment, options = {}, onClose, onSave }) => {
  const [draft, setDraft] = useState(appointment || null);

  useEffect(() => {
    setDraft(appointment || null);
  }, [appointment]);

  if (!open || !draft) return null;

  const servicesSelection = parseMultiValue(draft.Services);
  const handleChange = (field, value) => setDraft((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    onSave(draft.id, {
      CustomerName: draft.CustomerName,
      Phone: draft.Phone,
      Barber: draft.Barber,
      Date: draft.Date,
      Time: draft.Time,
      Status: draft.Status,
      Services: draft.Services,
    });
  };

  return (
    <Modal
      title={`Редактирование записи ${draft.CustomerName || ''}`}
      isOpen={open}
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
      <div className="grid gap-3 md:grid-cols-2">
        <input value={draft.CustomerName || ''} onChange={(event) => handleChange('CustomerName', event.target.value)} placeholder="Имя" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <input value={draft.Phone || ''} onChange={(event) => handleChange('Phone', event.target.value)} placeholder="Телефон" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <select value={draft.Barber || ''} onChange={(event) => handleChange('Barber', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="">Барбер</option>
          {(options.barbers || []).map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>
        <input type="date" value={draft.Date ? String(draft.Date).slice(0, 10) : ''} onChange={(event) => handleChange('Date', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <input value={draft.Time || ''} onChange={(event) => handleChange('Time', event.target.value)} placeholder="10:00 - 11:00" className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
        <select value={draft.Status || ''} onChange={(event) => handleChange('Status', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="">Статус</option>
          {(options.statuses || []).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300">Услуги</label>
          <select
            multiple
            value={servicesSelection}
            onChange={(event) => {
              const selected = Array.from(event.target.selectedOptions).map((option) => option.value);
              handleChange('Services', selected.join(', '));
            }}
            className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
          >
            {(options.services || []).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Modal>
  );
};
const TablesWorkspace = ({ apiRequest, sharedOptions, onOptionsUpdate, onOpenProfile }) => {
  const [activeTable, setActiveTable] = useLocalStorage('tables.active', 'Appointments');
  const [tables, setTables] = useState(() => DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: [] }), {}));
  const [dropdownOptions, setDropdownOptions] = useState(sharedOptions || { barbers: [], services: [], statuses: [] });
  const [backups, setBackups] = useState([]);
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

  useEffect(() => {
    if (sharedOptions) {
      setDropdownOptions(sharedOptions);
    }
  }, [sharedOptions]);

  const fetchTables = useCallback(async () => {
    setIsFetching(true);
    setTableError('');
    try {
      const responses = await Promise.all([
        ...DATA_TABLES.map((table) => apiRequest(`/${table}`)),
        apiRequest('/options/appointments'),
        apiRequest('/backups/list'),
      ]);
      const nextTables = {};
      DATA_TABLES.forEach((table, index) => {
        nextTables[table] = responses[index] || [];
      });
      const options = responses[DATA_TABLES.length] || { barbers: [], services: [], statuses: [] };
      const backupsList = responses[DATA_TABLES.length + 1] || [];
      setTables(nextTables);
      setDropdownOptions(options);
      setBackups(backupsList);
      onOptionsUpdate?.(options);
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
    if (activeTable === 'Appointments' && hiddenStatuses.length) {
      rows = rows.filter((row) => !hiddenStatuses.includes(row.Status));
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
    setHiddenStatuses((prev) => (prev.includes(status) ? prev.filter((item) => item !== status) : [...prev, status]));
  };

  const handleUpdate = async (recordId, data) => {
    if (!recordId || activeTable === 'Backups') return;
    const tableId = activeTable;
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return {
        ...prev,
        [tableId]: list.map((row) => (getRecordId(row) === recordId ? { ...row, ...data } : row)),
      };
    });
    try {
      const payload =
        tableId === 'Schedules'
          ? { ...(original.find((row) => getRecordId(row) === recordId) || {}), ...data }
          : data;
      await apiRequest(`/${tableId}/${encodeURIComponent(recordId)}`, { method: 'PUT', body: JSON.stringify(payload) });
    } catch (error) {
      console.error('Update failed', error);
      setTableError(error.message || 'Не удалось обновить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };

  const handleDelete = async (record) => {
    if (!record || activeTable === 'Backups' || activeTable === 'Schedules') return;
    if (!window.confirm('Удалить запись без возможности восстановления?')) return;
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
      await apiRequest(`/${tableId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      fetchTables();
    } catch (error) {
      console.error('Create failed', error);
      setTableError(error.message || 'Не удалось создать запись');
    }
  };

  const handleRestoreBackup = async (filename) => {
    if (!window.confirm(`Восстановить данные из ${filename}?`)) return;
    try {
      await apiRequest('/backups/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchTables();
    } catch (error) {
      setTableError(error.message || 'Не удалось восстановить бэкап');
    }
  };

  const handleCreateBackup = async () => {
    if (!window.confirm('Создать новую резервную копию сейчас?')) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      fetchTables();
    } catch (error) {
      setTableError(error.message || 'Не удалось создать бэкап');
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

      {tableSettings && activeTable !== 'Backups' && (
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
            <LoadingState label="Обновляю таблицы..." />
          ) : (
            <div className="mt-4">
              <DataTable
                rows={processedRows}
                columns={currentColumns}
                hiddenColumns={hiddenColumns}
                sortConfig={sortConfig}
                onSort={handleSort}
                onUpdate={handleUpdate}
                onDelete={tableSettings.canCreate ? handleDelete : null}
                options={dropdownOptions}
                onOpenProfile={onOpenProfile}
              />
            </div>
          )}
        </SectionCard>
      )}

      {activeTable === 'Backups' && (
        <BackupsPanel backups={backups} onRestore={handleRestoreBackup} onCreate={handleCreateBackup} />
      )}

      {tableSettings.canCreate && activeTable !== 'Backups' && (
        <CreateRecordModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSave={handleCreateRecord}
          columns={currentColumns}
          tableName={tableSettings.label}
          options={dropdownOptions}
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
}) => {
  const [description, setDescription] = useState(settings?.botDescription || '');
  const [about, setAbout] = useState(settings?.aboutText || '');

  useEffect(() => {
    setDescription(settings?.botDescription || '');
    setAbout(settings?.aboutText || '');
  }, [settings]);

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
        <p className="text-slate-300">Состояние: {status?.running ? 'работает' : 'остановлен'}</p>
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

      <SectionCard title="Автоответы">
        {messages.length === 0 && <p className="text-slate-500">Нет загруженных сообщений.</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {messages.map((message) => (
            <div key={message.id} className="space-y-3 rounded-xl border border-slate-700 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{message.code}</p>
              <input value={message.title || ''} onChange={(event) => onSaveMessage(message.id, { ...message, title: event.target.value }, false)} placeholder="Заголовок" className="w-full rounded border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
              <textarea value={message.text || ''} onChange={(event) => onSaveMessage(message.id, { ...message, text: event.target.value }, false)} rows={3} className="w-full rounded border border-slate-600 bg-slate-900 px-3 py-2 text-white" />
              <button onClick={() => onSaveMessage(message.id, message, true)} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white">
                Сохранить
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Бэкапы"
        actions={
          <button onClick={onCreateBackup} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white">
            Создать бэкап
          </button>
        }
      >
        {backups.length === 0 ? (
          <p className="text-slate-500">Копий пока нет.</p>
        ) : (
          <div className="space-y-2">
            {backups.map((backup) => (
              <div key={backup} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
                <span>{backup}</span>
                <button onClick={() => onRestoreBackup(backup)} className="text-indigo-300 hover:text-indigo-100">
                  Восстановить
                </button>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard
        title="Лицензия и обновления"
        actions={
          <button onClick={onRefreshUpdate} disabled={systemBusy} className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
            Проверить
          </button>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
            <p className="font-semibold">Лицензия</p>
            <p className="mt-1">Статус: {licenseStatus?.valid ? 'активна' : 'не подтверждена'}</p>
            <p>Сообщение: {licenseStatus?.message || 'нет данных'}</p>
            {licenseStatus?.license?.owner && <p>Владелец: {licenseStatus.license.owner}</p>}
            {licenseStatus?.license?.expiresAt && <p>Действует до: {formatDate(licenseStatus.license.expiresAt)}</p>}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200">
            <p className="font-semibold">Версия</p>
            <p>Текущая: {updateInfo?.currentVersion || '—'}</p>
            <p>Доступная: {updateInfo?.latestVersion || '—'}</p>
            <p>Проверено: {updateInfo?.checkedAt ? formatDate(updateInfo.checkedAt) : '—'}</p>
            {updateInfo?.updateAvailable ? (
              <button onClick={onApplyUpdate} disabled={systemBusy} className="mt-3 w-full rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50">
                Обновить сейчас
              </button>
            ) : (
              <p className="mt-3 text-emerald-300">Установлена последняя версия</p>
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  );
};
const Sidebar = ({ session, activeTab, onChange, onLogout }) => (
  <aside className="hidden lg:flex lg:min-h-screen lg:w-72 flex-col gap-6 border-r border-slate-800 bg-slate-900 p-6">
    <div>
      <p className="text-sm text-slate-500">Вы вошли как</p>
      <p className="text-lg font-semibold text-white">{session?.username}</p>
      <button onClick={onLogout} className="text-sm text-rose-400 hover:text-rose-200">
        Выйти
      </button>
    </div>
    <nav className="flex-1 space-y-2">
      {VIEW_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={classNames(
            'w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition',
            activeTab === tab.id ? 'bg-indigo-600/20 text-white border border-indigo-500' : 'text-slate-400 hover:text-white'
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </aside>
);

const MobileTabs = ({ activeTab, onChange }) => (
  <div className="sticky top-0 z-20 flex gap-2 border-b border-slate-800 bg-slate-900/95 px-3 py-2 lg:hidden">
    {VIEW_TABS.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={classNames(
          'flex-1 rounded-full px-3 py-2 text-xs font-semibold',
          activeTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
        )}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

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
          <label className="text-sm text-slate-300">Пользователь</label>
          <input list="crm-user-suggestions" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Введите имя" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
          <datalist id="crm-user-suggestions">
            {KNOWN_USERS.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="text-sm text-slate-300">Пароль</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
        </div>
        {error && <ErrorBanner message={error} />}
        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-500">
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
  const [appointmentModal, setAppointmentModal] = useState({ open: false, data: null, options: null });
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
      setOptionsCache(options);
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
        setAuthError(data.message || 'Неверный логин или пароль');
        return;
      }
      localStorage.setItem('barber-session', JSON.stringify(data));
      setSession(data);
    } catch (error) {
      setAuthError('Сервер недоступен');
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

  const handleSaveBarber = async (barber) => {
    if (!barber?.id) return;
    try {
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'PUT', body: JSON.stringify(barber) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message);
    }
  };

  const handleDeleteBarber = async (barber) => {
    if (!barber?.id) return;
    if (!window.confirm('Удалить барбера без возможности восстановления?')) return;
    try {
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить барбера');
    }
  };

  const handleAddBarber = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/Barbers', { method: 'POST', body: JSON.stringify(payload) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить барбера');
    }
  };

  const handleSaveService = async (service) => {
    if (!service?.id) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'PUT', body: JSON.stringify(normalizeServicePayload(service)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить услугу');
    }
  };

  const handleDeleteService = async (service) => {
    if (!service?.id) return;
    if (!window.confirm('Удалить услугу?')) return;
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
    if (!window.confirm(`Восстановить данные из ${filename}?`)) return;
    try {
      await apiRequest('/backups/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось восстановить бэкап');
    }
  };

  const handleCreateBackup = async () => {
    if (!window.confirm('Создать новую резервную копию?')) return;
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
    setOptionsCache(options);
    return options;
  }, [apiRequest, optionsCache]);

  const handleOpenAppointment = useCallback(
    async (appointment) => {
      const options = await ensureOptions();
      setAppointmentModal({ open: true, data: appointment, options });
    },
    [ensureOptions]
  );

  const handleSaveAppointment = async (id, payload) => {
    try {
      await apiRequest(`/Appointments/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      setAppointmentModal((prev) => ({ ...prev, open: false, data: null }));
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить запись');
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
    if (!window.confirm('Обновить CRM и бота до последней версии?')) return;
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

  const renderActive = () => {
    if (loading) return <LoadingState />;
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView data={dashboard} onOpenAppointment={handleOpenAppointment} onOpenProfile={openProfile} />;
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
        return <TablesWorkspace apiRequest={apiRequest} sharedOptions={optionsCache} onOptionsUpdate={setOptionsCache} onOpenProfile={openProfile} />;
      case 'bot':
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
        onClose={() => setAppointmentModal((prev) => ({ ...prev, open: false, data: null }))}
        onSave={handleSaveAppointment}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
