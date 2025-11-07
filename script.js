
const { useState, useEffect, useCallback, useMemo, useRef, Fragment } = React;

const DEFAULT_API_BASE_URL = 'http://192.168.1.55:3000/api';
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;

const VIEW_TABS = [
  { id: 'dashboard', label: 'Overview' },
  { id: 'clients', label: 'Clients' },
  { id: 'barbers', label: 'Barbers' },
  { id: 'services', label: 'Services' },
  { id: 'tables', label: 'Data tables' },
  { id: 'bot', label: 'Bot' },
];

const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Cost', 'Backups'];
const DATA_TABLES = TABLE_ORDER.filter((name) => name !== 'Backups');

const TABLE_CONFIG = {
  Appointments: { label: 'Appointments', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Schedules: { label: 'Schedules', canCreate: false, supportsBarberFilter: true, defaultSort: { key: 'Date', direction: 'asc' } },
  Users: { label: 'Clients table', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Cost: { label: 'Service catalog', canCreate: true, defaultSort: { key: 'Uslugi', direction: 'asc' } },
  Backups: { label: 'Backups', canCreate: false },
};

const TABLE_COLUMNS = {
  Appointments: [
    { key: 'CustomerName', label: 'Client', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-48' },
    { key: 'Phone', label: 'Phone', editable: true, type: 'text', minWidth: 'w-40' },
    { key: 'Barber', label: 'Barber', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-32' },
    { key: 'Date', label: 'Date', editable: true, type: 'date', minWidth: 'w-32' },
    { key: 'Time', label: 'Time', editable: true, type: 'timeRange', minWidth: 'w-32' },
    { key: 'Status', label: 'Status', editable: true, type: 'select', optionsKey: 'statuses', align: 'center', minWidth: 'w-32' },
    { key: 'Services', label: 'Services', editable: true, type: 'multi-select', optionsKey: 'services', minWidth: 'w-56' },
    { key: 'UserID', label: 'User ID', editable: true, type: 'text', minWidth: 'w-32' },
    { key: 'Reminder2hClientSent', label: 'Client notified (2h)', editable: true, type: 'boolean', align: 'center' },
    { key: 'Reminder2hBarberSent', label: 'Barber notified (2h)', editable: true, type: 'boolean', align: 'center' },
  ],
  Schedules: [
    { key: 'Barber', label: 'Barber', editable: false, minWidth: 'w-40' },
    { key: 'DayOfWeek', label: 'Day of week', editable: false, minWidth: 'w-32' },
    { key: 'Date', label: 'Date', editable: false, minWidth: 'w-32' },
    { key: 'Week', label: 'Slots', editable: true, type: 'text', placeholder: '10:00 - 19:00', align: 'center', minWidth: 'w-40' },
  ],
  Users: [
    { key: 'Name', label: 'Name', editable: true, type: 'text', isProfileLink: true, minWidth: 'w-40' },
    { key: 'Phone', label: 'Phone', editable: true, type: 'text', minWidth: 'w-40' },
    { key: 'TelegramID', label: 'Telegram ID', editable: true, type: 'text', minWidth: 'w-32' },
    { key: 'Barber', label: 'Preferred barber', editable: true, type: 'select', optionsKey: 'barbers', minWidth: 'w-40' },
  ],
  Cost: [
    { key: 'Uslugi', label: 'Service', editable: true, type: 'text', minWidth: 'w-56' },
    { key: 'Timur', label: 'Timur', editable: true, type: 'text', align: 'center' },
    { key: 'Vladimir', label: 'Vladimir', editable: true, type: 'text', align: 'center' },
    { key: 'Alina', label: 'Alina', editable: true, type: 'text', align: 'center' },
    { key: 'Aleksey', label: 'Aleksey', editable: true, type: 'text', align: 'center' },
    { key: 'Dlitelnost', label: 'Duration', editable: true, type: 'text', minWidth: 'w-32' },
  ],
};

const INITIAL_HIDDEN_COLUMNS = {
  Appointments: ['UserID'],
  Schedules: [],
  Users: [],
  Cost: [],
};

const classNames = (...classes) => classes.filter(Boolean).join(' ');
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn('Failed to parse localStorage', error);
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
          console.warn('Failed to persist localStorage', error);
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

const normalizeBoolean = (value) => value === true || value === 'true' || value === 1 || value === '1';
const serializeBoolean = (value) => (value ? 'true' : '');
const getRecordId = (record) => record?.id ?? record?.Id ?? record?.ID ?? record?.recordId ?? record?.ID_Record ?? '';

const formatDate = (value) => {
  if (!value) return '-';
  try {
    return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(value));
  } catch (error) {
    return value;
  }
};

const formatTime = (value) => {
  if (!value) return '-';
  const safeValue = String(value);
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
const LoadingState = ({ label = 'Loading data...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-slate-300">
    <span className="animate-pulse">{label}</span>
  </div>
);

const ErrorBanner = ({ message }) => (
  <div className="bg-rose-600 text-white px-4 py-3 rounded-lg">{message}</div>
);

const StatCard = ({ label, value, accent = 'text-indigo-300' }) => (
  <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <p className={classNames('text-3xl font-semibold mt-2', accent)}>{value}</p>
  </div>
);

const SectionCard = ({ title, actions, children }) => (
  <div className="bg-slate-800/70 border border-slate-700 rounded-2xl shadow-lg p-6 space-y-4">
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
      <div className="w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">x</button>
        </div>
        <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">{children}</div>
        {footer && <div className="flex justify-end gap-3 border-t border-slate-800 px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
};

const SortIcon = ({ direction }) => {
  if (!direction) return null;
  return <span className="text-xs text-slate-400">{direction === 'asc' ? '^' : 'Ў'}</span>;
};
const DashboardView = ({ data }) => {
  if (!data) return <LoadingState />;
  const upcoming = data.appointments?.upcoming?.slice(0, 8) || [];
  const stats = data.stats || {};

  return (
    <div className="space-y-6">
      <SectionCard title="KPIs">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total clients" value={stats.totalUsers ?? 0} />
          <StatCard label="Active bookings" value={stats.activeAppointments ?? 0} accent="text-emerald-300" />
          <StatCard label="Cuts this year" value={stats.confirmedYear ?? 0} accent="text-fuchsia-300" />
          <StatCard label="Today" value={stats.todaysAppointments ?? 0} accent="text-cyan-300" />
        </div>
      </SectionCard>

      <SectionCard title="Upcoming appointments">
        {upcoming.length === 0 ? (
          <p className="text-slate-400">No upcoming appointments.</p>
        ) : (
          <div className="space-y-3">
            {upcoming.map((appt) => (
              <div key={appt.id} className="flex flex-col gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-white font-semibold">{appt.CustomerName || '-'}</p>
                  <p className="text-slate-400 text-sm">{appt.Barber}</p>
                </div>
                <div className="text-right text-sm text-slate-300">
                  <p>{formatDate(appt.Date)}</p>
                  <p>{appt.Time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
};

const ClientsView = ({ clients }) => {
  if (!clients) return <LoadingState />;
  return (
    <SectionCard title="Clients">
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id || client.name} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{client.name}</p>
                <p className="text-sm text-slate-400">{client.phone || '-'}</p>
              </div>
              <div className="flex gap-4 text-sm text-slate-300">
                <span>Active: {client.activeAppointments ?? 0}</span>
                <span>Yearly cuts: {client.confirmedHaircutsYear ?? 0}</span>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-slate-800/60 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Active booking</p>
                {client.activeRecords?.length ? (
                  <div className="mt-2 text-sm text-slate-200">
                    <p>{client.activeRecords[0].Barber}</p>
                    <p>{formatDateTime(client.activeRecords[0].Date, client.activeRecords[0].Time)}</p>
                    <p className="text-slate-400">{client.activeRecords[0].Services}</p>
                  </div>
                ) : (
                  <p className="mt-2 text-slate-500">No active bookings</p>
                )}
              </div>
              <div className="rounded-xl bg-slate-800/40 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">History</p>
                <div className="mt-2 max-h-32 space-y-1 overflow-auto pr-1 text-sm">
                  {client.historyRecords?.length ? (
                    client.historyRecords.map((record) => (
                      <p key={record.id} className="text-slate-300">
                        {formatDate(record.Date)} | {record.Barber}
                      </p>
                    ))
                  ) : (
                    <p className="text-slate-500">Empty</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

const BarbersView = ({ barbers = [], onFieldChange, onSave, onAdd, onDelete }) => {
  const [newBarber, setNewBarber] = useState({ name: '', nickname: '', rating: '5/5', color: '#6d28d9', avatarUrl: '' });

  return (
    <div className="space-y-6">
      <SectionCard title="Active barbers">
        {barbers.length === 0 ? (
          <p className="text-slate-400">No barbers loaded.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {barbers.map((barber) => (
              <div key={barber.id} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
                <input value={barber.name || ''} onChange={(event) => onFieldChange(barber.id, 'name', event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <input value={barber.nickname || ''} onChange={(event) => onFieldChange(barber.id, 'nickname', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" placeholder="Nick" />
                  <input value={barber.rating || ''} onChange={(event) => onFieldChange(barber.id, 'rating', event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" placeholder="Rating" />
                </div>
                <input value={barber.avatarUrl || ''} onChange={(event) => onFieldChange(barber.id, 'avatarUrl', event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 p-2 text-sm text-white" placeholder="Image path" />
                <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={barber.isActive !== false} onChange={(event) => onFieldChange(barber.id, 'isActive', event.target.checked)} />
                  Active
                </label>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => onSave(barber)} className="flex-1 rounded-lg bg-indigo-600 py-2 text-sm text-white hover:bg-indigo-500">Save</button>
                  <button onClick={() => onDelete(barber)} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard title="Add barber">
        <div className="grid gap-3 md:grid-cols-3">
          <input value={newBarber.name} onChange={(event) => setNewBarber((prev) => ({ ...prev, name: event.target.value }))} placeholder="Name" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <input value={newBarber.nickname} onChange={(event) => setNewBarber((prev) => ({ ...prev, nickname: event.target.value }))} placeholder="Nick" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <input value={newBarber.rating} onChange={(event) => setNewBarber((prev) => ({ ...prev, rating: event.target.value }))} placeholder="Rating" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <input value={newBarber.color} onChange={(event) => setNewBarber((prev) => ({ ...prev, color: event.target.value }))} placeholder="Color" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <input value={newBarber.avatarUrl} onChange={(event) => setNewBarber((prev) => ({ ...prev, avatarUrl: event.target.value }))} placeholder="Avatar" className="md:col-span-2 rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <button onClick={() => {
            onAdd(newBarber);
            setNewBarber({ name: '', nickname: '', rating: '5/5', color: '#6d28d9', avatarUrl: '' });
          }} className="rounded-lg bg-emerald-600 py-2 text-white hover:bg-emerald-500">
            Add
          </button>
        </div>
      </SectionCard>
    </div>
  );
};

const ServicesView = ({ services = [], barbers = [], onFieldChange, onPriceChange, onSave, onDelete, onAdd }) => {
  const [newService, setNewService] = useState({ name: '', duration: 60, prices: {} });

  return (
    <div className="space-y-6">
      <SectionCard title="Services">
        {services.length === 0 ? (
          <p className="text-slate-400">No services loaded.</p>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="p-2">Name</th>
                  <th className="p-2 w-32">Duration</th>
                  {barbers.map((barber) => (
                    <th key={barber.id} className="p-2 text-center">{barber.name}</th>
                  ))}
                  <th className="p-2" />
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-t border-slate-700">
                    <td className="p-2">
                      <input value={service.name || ''} onChange={(event) => onFieldChange(service.id, 'name', event.target.value)} className="w-full rounded border border-slate-600 bg-slate-900 p-2 text-white" />
                    </td>
                    <td className="p-2">
                      <input type="number" value={service.duration || 0} onChange={(event) => onFieldChange(service.id, 'duration', Number(event.target.value))} className="w-full rounded border border-slate-600 bg-slate-900 p-2 text-white" />
                    </td>
                    {barbers.map((barber) => (
                      <td key={barber.id} className="p-2">
                        <input type="number" value={service.prices?.[barber.id] ?? ''} onChange={(event) => onPriceChange(service.id, barber.id, event.target.value)} className="w-full rounded border border-slate-600 bg-slate-900 p-2 text-white" placeholder="Price" />
                      </td>
                    ))}
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button onClick={() => onSave(service)} className="rounded-lg bg-indigo-600 px-3 py-1 text-xs text-white">Save</button>
                        <button onClick={() => onDelete(service)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-400">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionCard>

      <SectionCard title="Add service">
        <div className="grid gap-3 md:grid-cols-4">
          <input value={newService.name} onChange={(event) => setNewService((prev) => ({ ...prev, name: event.target.value }))} placeholder="Name" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          <input type="number" value={newService.duration} onChange={(event) => setNewService((prev) => ({ ...prev, duration: Number(event.target.value) }))} placeholder="Minutes" className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          {barbers.length > 0 && (
            <input value={newService.prices?.[barbers[0].id] ?? ''} onChange={(event) => setNewService((prev) => ({ ...prev, prices: { ...(prev.prices || {}), [barbers[0].id]: event.target.value } }))} placeholder={`${barbers[0].name || 'Price'}`} className="rounded-lg border border-slate-600 bg-slate-900 p-2 text-white" />
          )}
          <button onClick={() => {
            onAdd(newService);
            setNewService({ name: '', duration: 60, prices: {} });
          }} className="rounded-lg bg-emerald-600 py-2 text-white hover:bg-emerald-500">
            Add
          </button>
        </div>
      </SectionCard>
    </div>
  );
};
const parseMultiValue = (value) =>
  !value
    ? []
    : String(value)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

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
        {draft.length ? draft.join(', ') : 'Select'}
      </button>
      {open && (
        <div ref={popoverRef} className="absolute right-0 z-20 mt-2 w-64 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl">
          <div className="max-h-56 overflow-y-auto space-y-2">
            {options.length === 0 && <p className="text-sm text-slate-500">No options</p>}
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-slate-200">
                <input type="checkbox" checked={draft.includes(option)} onChange={() => toggleOption(option)} />
                {option}
              </label>
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2 text-sm">
            <button onClick={() => setDraft(parseMultiValue(value))} className="text-slate-400 hover:text-white">Reset</button>
            <button onClick={handleSave} className="rounded-lg bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

const EditableCell = ({ record, column, options, onUpdate, onOpenProfile }) => {
  const recordId = getRecordId(record);
  const value = record[column.key];
  const [draft, setDraft] = useState(value ?? '');

  useEffect(() => {
    setDraft(value ?? '');
  }, [value]);

  if (!column.editable) {
    if (column.isProfileLink) {
      return (
        <button onClick={() => onOpenProfile?.(value)} className="text-left text-indigo-400 hover:text-indigo-200">
          {value || '-'}
        </button>
      );
    }
    return <span className="text-slate-200">{value || '-'}</span>;
  }

  const commitChange = (nextValue) => {
    const payload = nextValue !== undefined ? nextValue : draft;
    if ((value ?? '') === (payload ?? '')) return;
    onUpdate(recordId, { [column.key]: payload });
  };

  switch (column.type) {
    case 'select': {
      const optionList = column.optionsKey ? options[column.optionsKey] || [] : [];
      return (
        <select value={value || ''} onChange={(event) => commitChange(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white">
          <option value="">-</option>
          {optionList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    case 'boolean': {
      const checked = normalizeBoolean(value);
      return (
        <label className="flex items-center justify-center gap-2 text-sm text-slate-200">
          <input type="checkbox" checked={checked} onChange={(event) => commitChange(serializeBoolean(event.target.checked))} />
        </label>
      );
    }
    case 'multi-select':
      return <MultiSelectCell value={value} options={options[column.optionsKey] || []} onCommit={commitChange} />;
    case 'date':
      return (
        <input type="date" value={value ? String(value).slice(0, 10) : ''} onChange={(event) => commitChange(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white" />
      );
    case 'timeRange':
      return (
        <input type="text" value={draft || ''} onChange={(event) => setDraft(event.target.value)} onBlur={() => commitChange()} onKeyDown={(event) => event.key === 'Enter' && commitChange()} placeholder={column.placeholder || '10:00 - 11:00'} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white" />
      );
    default:
      return (
        <input type="text" value={draft || ''} onChange={(event) => setDraft(event.target.value)} onBlur={() => commitChange()} onKeyDown={(event) => event.key === 'Enter' && commitChange()} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white" />
      );
  }
};

const ColumnMenu = ({ columns, hiddenColumns = [], onToggle }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, open ? () => setOpen(false) : null);

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg border border-slate-600 px-3 py-1 text-sm text-white">
        Columns
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl">
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
      <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg border border-slate-600 px-3 py-1 text-sm text-white">
        Statuses
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-30 mt-2 w-64 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl">
          {statuses.length === 0 && <p className="text-sm text-slate-500">No statuses loaded</p>}
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" checked={!hiddenStatuses.includes(status)} onChange={() => onToggle(status)} />
              {status}
            </label>
          ))}
          <button onClick={onReset} className="text-sm text-indigo-400 hover:text-indigo-200">Show all</button>
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
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white sm:w-64" />
      {supportsBarberFilter && (
        <select value={selectedBarber} onChange={(event) => setSelectedBarber(event.target.value)} className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
          <option value="all">All barbers</option>
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
        Refresh
      </button>
      {canCreate && (
        <button onClick={onOpenCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
          + Create
        </button>
      )}
    </div>
  </div>
);

const DataTable = ({ tableId, rows, columns, hiddenColumns, sortConfig, onSort, onUpdate, onDelete, options, onOpenProfile }) => {
  if (!rows.length) {
    return <p className="text-slate-400">No records yet.</p>;
  }

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
            {columns.map((column) => (
              <th key={column.key} className={classNames('cursor-pointer p-2', column.align === 'center' && 'text-center')} onClick={() => column.sortable !== false && onSort(column.key)}>
                <div className={classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')}>
                  {column.label}
                  {column.sortable !== false && sortConfig?.key === column.key && <SortIcon direction={sortConfig.direction} />}
                </div>
              </th>
            ))}
            {onDelete && <th className="p-2 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((record) => (
            <tr key={getRecordId(record)} className="border-t border-slate-800">
              {columns.map((column) => (
                <td key={column.key} className={classNames('p-2 align-middle', column.align === 'center' && 'text-center')}>
                  <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} />
                </td>
              ))}
              {onDelete && (
                <td className="p-2 text-right">
                  <button onClick={() => onDelete(record)} className="rounded-lg border border-rose-500 px-3 py-1 text-xs text-rose-300">
                    Delete
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
    const shape = {};
    editableColumns.forEach((column) => {
      shape[column.key] = column.type === 'multi-select' ? [] : '';
    });
    return shape;
  }, [editableColumns]);

  const [draft, setDraft] = useState(initialState);

  useEffect(() => {
    if (isOpen) {
      setDraft(initialState);
    }
  }, [isOpen, initialState]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {};
    Object.entries(draft).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        payload[key] = value.join(', ');
      } else {
        payload[key] = value;
      }
    });
    onSave(payload);
  };

  return (
    <Modal
      title={`New record in ${tableName}`}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">Cancel</button>
          <button onClick={handleSubmit} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">Save</button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
                <select multiple value={value} onChange={(event) => {
                  const selected = Array.from(event.target.selectedOptions).map((option) => option.value);
                  setDraft((prev) => ({ ...prev, [column.key]: selected }));
                }} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white">
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
    title={state.data?.user?.Name || 'Client profile'}
    isOpen={state.open}
    onClose={onClose}
    footer={<button onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-white">Close</button>}
  >
    {state.loading && <LoadingState label="Loading profile..." />}
    {!state.loading && state.data?.error && <ErrorBanner message={state.data.error} />}
    {!state.loading && state.data?.user && (
      <div className="space-y-4">
        <div className="grid gap-2 text-sm text-slate-200">
          <div><span className="text-slate-400">Phone:</span> {state.data.user.Phone || '-'}</div>
          <div><span className="text-slate-400">Telegram:</span> {state.data.user.TelegramID || '-'}</div>
          <div><span className="text-slate-400">Barber:</span> {state.data.user.Barber || '-'}</div>
        </div>
        <div>
          <p className="text-sm text-slate-400">Appointments</p>
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
              <p className="text-sm text-slate-500">No appointments yet.</p>
            )}
          </div>
        </div>
      </div>
    )}
  </Modal>
);

const BackupsPanel = ({ backups = [], onRestore, onCreate }) => (
  <SectionCard
    title="Backups"
    actions={
      <button onClick={onCreate} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500">
        Create backup
      </button>
    }
  >
    {backups.length === 0 ? (
      <p className="text-slate-400">No backups yet.</p>
    ) : (
      <div className="space-y-2">
        {backups.map((backup) => (
          <div key={backup} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
            <span>{backup}</span>
            <button onClick={() => onRestore(backup)} className="text-indigo-400 hover:text-indigo-200">
              Restore
            </button>
          </div>
        ))}
      </div>
    )}
  </SectionCard>
);
const TablesWorkspace = ({ apiRequest }) => {
  const [activeTable, setActiveTable] = useLocalStorage('tables.active', 'Appointments');
  const [tables, setTables] = useState(() => DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: [] }), {}));
  const [dropdownOptions, setDropdownOptions] = useState({ barbers: [], services: [], statuses: [] });
  const [backups, setBackups] = useState([]);
  const [tableError, setTableError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBarber, setSelectedBarber] = useLocalStorage('tables.barberFilter', 'all');
  const [hiddenStatuses, setHiddenStatuses] = useLocalStorage('tables.hiddenStatuses', []);
  const [hiddenColumnsMap, setHiddenColumnsMap] = useLocalStorage('tables.hiddenColumns', INITIAL_HIDDEN_COLUMNS);
  const [sortConfigs, setSortConfigs] = useLocalStorage(
    'tables.sortConfigs',
    DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: TABLE_CONFIG[table]?.defaultSort || null }), {})
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [profileModal, setProfileModal] = useState({ open: false, data: null, loading: false });

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
      setTables(nextTables);
      setDropdownOptions(responses[DATA_TABLES.length] || { barbers: [], services: [], statuses: [] });
      setBackups(responses[DATA_TABLES.length + 1] || []);
    } catch (error) {
      console.error('Table fetch failed', error);
      setTableError(error.message || 'Failed to load tables');
    } finally {
      setIsFetching(false);
    }
  }, [apiRequest]);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  const currentColumns = TABLE_COLUMNS[activeTable] || [];
  const hiddenColumns = hiddenColumnsMap[activeTable] || [];
  const visibleColumns = useMemo(() => currentColumns.filter((column) => !hiddenColumns.includes(column.key)), [currentColumns, hiddenColumns]);
  const sortConfig = sortConfigs[activeTable] || TABLE_CONFIG[activeTable]?.defaultSort || null;

  const processedRows = useMemo(() => {
    const baseRows = tables[activeTable] || [];
    if (!baseRows.length) return [];
    let rows = [...baseRows];

    if (TABLE_CONFIG[activeTable]?.supportsBarberFilter && selectedBarber !== 'all') {
      rows = rows.filter((row) => (row.Barber || '').toLowerCase() === selectedBarber.toLowerCase());
    }

    if (activeTable === 'Appointments' && hiddenStatuses.length) {
      rows = rows.filter((row) => !hiddenStatuses.includes(row.Status));
    }

    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      rows = rows.filter((row) =>
        visibleColumns.some((column) => {
          const raw = row[column.key];
          return raw && String(raw).toLowerCase().includes(query);
        })
      );
    }

    if (sortConfig?.key) {
      rows.sort((a, b) => {
        const left = a[sortConfig.key];
        const right = b[sortConfig.key];
        if (left === right) return 0;
        if (left === undefined || left === null) return 1;
        if (right === undefined || right === null) return -1;
        const comparison = String(left).localeCompare(String(right), 'ru', { numeric: true, sensitivity: 'base' });
        return sortConfig.direction === 'asc' ? comparison : -comparison;
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
      } else {
        if (currentColumns.length - hidden.size <= 1) {
          return prev;
        }
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
    const previousRows = tables[tableId];
    setTables((prev) => ({
      ...prev,
      [tableId]: prev[tableId].map((row) => (getRecordId(row) === recordId ? { ...row, ...data } : row)),
    }));
    try {
      const payload = tableId === 'Schedules' ? { ...(previousRows.find((row) => getRecordId(row) === recordId) || {}), ...data } : data;
      await apiRequest(`/${tableId}/${encodeURIComponent(recordId)}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Update failed', error);
      setTableError(error.message || 'Failed to update record');
      setTables((prev) => ({ ...prev, [tableId]: previousRows }));
    }
  };

  const handleDelete = async (record) => {
    if (!record || activeTable === 'Backups' || activeTable === 'Schedules') return;
    const recordId = getRecordId(record);
    if (!recordId) return;
    if (!window.confirm('Delete this record?')) return;
    const tableId = activeTable;
    const previousRows = tables[tableId];
    setTables((prev) => ({ ...prev, [tableId]: prev[tableId].filter((row) => getRecordId(row) !== recordId) }));
    try {
      await apiRequest(`/${tableId}/${encodeURIComponent(recordId)}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Delete failed', error);
      setTableError(error.message || 'Failed to delete record');
      setTables((prev) => ({ ...prev, [tableId]: previousRows }));
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
      setTableError(error.message || 'Failed to create record');
    }
  };

  const handleOpenProfile = useCallback(
    async (name) => {
      if (!name) return;
      setProfileModal({ open: true, data: null, loading: true });
      try {
        const payload = await apiRequest(`/user-profile/${encodeURIComponent(name)}`);
        setProfileModal({ open: true, data: payload, loading: false });
      } catch (error) {
        setProfileModal({ open: true, data: { error: error.message || 'Failed to load profile' }, loading: false });
      }
    },
    [apiRequest]
  );

  const handleRestoreBackup = async (filename) => {
    if (!filename) return;
    if (!window.confirm(`Restore ${filename}? Current data will be overwritten.`)) return;
    try {
      await apiRequest('/backups/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      fetchTables();
    } catch (error) {
      setTableError(error.message || 'Failed to restore backup');
    }
  };

  const handleCreateBackup = async () => {
    if (!window.confirm('Create a new backup now?')) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      fetchTables();
    } catch (error) {
      setTableError(error.message || 'Failed to create backup');
    }
  };

  const tableSettings = TABLE_CONFIG[activeTable] || {};

  if (activeTable === 'Backups') {
    return (
      <div className="space-y-4">
        {tableError && <ErrorBanner message={tableError} />}
        <BackupsPanel backups={backups} onRestore={handleRestoreBackup} onCreate={handleCreateBackup} />
      </div>
    );
  }

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
      <SectionCard
        title={TABLE_CONFIG[activeTable]?.label || activeTable}
        actions={null}
      >
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
          <LoadingState label="Refreshing tables..." />
        ) : (
          <div className="mt-4">
            <DataTable
              tableId={activeTable}
              rows={processedRows}
              columns={visibleColumns}
              hiddenColumns={hiddenColumns}
              sortConfig={sortConfig}
              onSort={handleSort}
              onUpdate={handleUpdate}
              onDelete={tableSettings.canCreate ? handleDelete : null}
              options={dropdownOptions}
              onOpenProfile={handleOpenProfile}
            />
          </div>
        )}
      </SectionCard>
      <CreateRecordModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSave={handleCreateRecord}
        columns={currentColumns}
        tableName={TABLE_CONFIG[activeTable]?.label || activeTable}
        options={dropdownOptions}
      />
      <ProfileModal state={profileModal} onClose={() => setProfileModal({ open: false, data: null, loading: false })} />
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
        title="Bot status"
        actions={(
          <div className="flex gap-2 text-sm">
            <button onClick={onStart} className="rounded-lg bg-emerald-600 px-3 py-1 text-white">Start</button>
            <button onClick={onStop} className="rounded-lg bg-rose-600 px-3 py-1 text-white">Stop</button>
            <button onClick={onRestart} className="rounded-lg bg-slate-600 px-3 py-1 text-white">Restart</button>
          </div>
        )}
      >
        <p className="text-slate-300">Status: {status?.running ? 'Running' : 'Stopped'}</p>
        <label className="mt-3 inline-flex items-center gap-2 text-slate-300">
          <input type="checkbox" checked={settings?.isBotEnabled !== false} onChange={(event) => onToggleEnabled(event.target.checked)} />
          Auto start with dashboard
        </label>
      </SectionCard>

      <SectionCard title="Texts">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Landing description</label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={3} className="w-full rounded-xl border border-slate-600 bg-slate-900 p-3 text-white" />
          </div>
          <div>
            <label className="text-sm text-slate-300">About block</label>
            <textarea value={about} onChange={(event) => setAbout(event.target.value)} rows={4} className="w-full rounded-xl border border-slate-600 bg-slate-900 p-3 text-white" />
          </div>
          <button onClick={() => onSaveSettings({ botDescription: description, aboutText: about })} className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
            Save texts
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Bot messages">
        {messages.length === 0 && <p className="text-slate-500">No messages loaded.</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {messages.map((message) => (
            <div key={message.id} className="space-y-3 rounded-xl border border-slate-700 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{message.code}</p>
              <input value={message.title || ''} onChange={(event) => onSaveMessage(message.id, { ...message, title: event.target.value }, false)} className="w-full rounded border border-slate-600 bg-slate-900 p-2 text-white" placeholder="Title" />
              <textarea value={message.text || ''} onChange={(event) => onSaveMessage(message.id, { ...message, text: event.target.value }, false)} rows={3} className="w-full rounded border border-slate-600 bg-slate-900 p-3 text-white" />
              <button onClick={() => onSaveMessage(message.id, message, true)} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white">
                Save message
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Backups"
        actions={
          onCreateBackup ? (
            <button onClick={onCreateBackup} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white">
              Create backup
            </button>
          ) : null
        }
      >
        {backups.length === 0 ? (
          <p className="text-slate-500">No backups yet.</p>
        ) : (
          <div className="space-y-2">
            {backups.map((backup) => (
              <div key={backup} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200">
                <span>{backup}</span>
                <button onClick={() => onRestoreBackup(backup)} className="text-indigo-400 hover:text-indigo-200">
                  Restore
                </button>
              </div>
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
};
const Sidebar = ({ session, activeTab, onChange, onLogout }) => (
  <aside className="hidden lg:flex lg:min-h-screen lg:w-72 flex-col gap-6 border-r border-slate-800 bg-slate-900 p-6">
    <div>
      <p className="text-sm text-slate-500">Signed in as</p>
      <p className="text-lg font-semibold text-white">{session?.username}</p>
      <button onClick={onLogout} className="text-sm text-rose-400 hover:text-rose-200">Logout</button>
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
  <div className="sticky top-0 z-20 flex gap-1 border-b border-slate-800 bg-slate-900/95 px-2 py-2 lg:hidden">
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
          <label className="text-sm text-slate-300">User</label>
          <select value={username} onChange={(event) => setUsername(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white">
            <option value="">-</option>
            <option value="Aleksey">Aleksey</option>
            <option value="Alina">Alina</option>
            <option value="Vladimir">Vladimir</option>
            <option value="Timur">Timur</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-slate-300">Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
        </div>
        {error && <ErrorBanner message={error} />}
        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-500">
          Login
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
      console.warn('Failed to parse session', error);
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
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [authError, setAuthError] = useState('');
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
      if (!session?.token) throw new Error('No active session');
      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
        ...(options.body && !options.headers?.['Content-Type'] ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      };
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      if (response.status === 401 || response.status === 403) {
        handleLogout();
        throw new Error('Session expired');
      }
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Request failed');
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
      const [overview, servicesFull, barbersFull, botState, messages] = await Promise.all([
        apiRequest('/dashboard/overview'),
        apiRequest('/services/full'),
        apiRequest('/barbers/full'),
        apiRequest('/bot/status'),
        apiRequest('/bot/messages'),
      ]);
      setDashboard(overview);
      setServices(servicesFull.services || []);
      setBarbers(barbersFull || overview.barbers || []);
      setBotSettings(botState.settings || overview.bot?.settings || null);
      setBotStatus(botState.status);
      setBotMessages(messages || []);
    } catch (error) {
      console.error(error);
      setGlobalError(error.message || 'Failed to load data');
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
        setAuthError(data.message || 'Login failed');
        return;
      }
      localStorage.setItem('barber-session', JSON.stringify(data));
      setSession(data);
    } catch (error) {
      setAuthError('Server unavailable');
    }
  };

  const handleBarberFieldChange = (id, field, value) => {
    setBarbers((prev) => prev.map((barber) => (barber.id === id ? { ...barber, [field]: value } : barber)));
  };

  const handleServiceFieldChange = (id, field, value) => {
    setServices((prev) => prev.map((service) => (service.id === id ? { ...service, [field]: value } : service)));
  };

  const handleServicePriceChange = (serviceId, barberId, value) => {
    setServices((prev) =>
      prev.map((service) => {
        if (service.id !== serviceId) return service;
        return {
          ...service,
          prices: {
            ...(service.prices || {}),
            [barberId]: value,
          },
        };
      })
    );
  };

  const normalizeServicePayload = (service) => ({
    ...service,
    prices: Object.fromEntries(
      Object.entries(service.prices || {}).map(([key, value]) => [key, value === '' || value === null ? null : Number(value)])
    ),
  });

  const handleSaveBarber = async (barber) => {
    if (!barber.id) return;
    try {
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, {
        method: 'PUT',
        body: JSON.stringify(barber),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message);
    }
  };

  const handleDeleteBarber = async (barber) => {
    if (!barber?.id) return;
    if (!window.confirm(`Delete ${barber.name || 'barber'}?`)) return;
    try {
      await apiRequest(`/Barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to delete barber');
    }
  };

  const handleAddBarber = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/Barbers', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to create barber');
    }
  };

  const handleSaveService = async (service) => {
    if (!service?.id) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, {
        method: 'PUT',
        body: JSON.stringify(normalizeServicePayload(service)),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to save service');
    }
  };

  const handleDeleteService = async (service) => {
    if (!service?.id) return;
    if (!window.confirm(`Delete ${service.name || 'service'}?`)) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to delete service');
    }
  };

  const handleAddService = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/services/full', {
        method: 'POST',
        body: JSON.stringify(normalizeServicePayload(payload)),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to create service');
    }
  };

  const handleBotToggle = async (enabled) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ isBotEnabled: enabled }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to update bot status');
    }
  };

  const handleBotAction = async (action) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ action }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Bot action failed');
    }
  };

  const handleSaveSettings = async (payload) => {
    if (!botSettings?.id) return;
    try {
      await apiRequest(`/BotSettings/${encodeURIComponent(botSettings.id)}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to save bot settings');
    }
  };

  const handleSaveMessage = async (id, draft, persist) => {
    if (!persist) {
      setBotMessages((prev) => prev.map((message) => (message.id === id ? { ...draft } : message)));
      return;
    }
    try {
      await apiRequest(`/bot/messages/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify({ code: draft.code, title: draft.title, text: draft.text }),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to save message');
    }
  };

  const handleRestoreBackup = async (filename) => {
    if (!filename) return;
    if (!window.confirm(`Restore ${filename}? Current data will be overwritten.`)) return;
    try {
      await apiRequest('/backups/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to restore backup');
    }
  };

  const handleCreateBackup = async () => {
    if (!window.confirm('Create a new backup now?')) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Failed to create backup');
    }
  };

  if (!session?.token) {
    return <LoginScreen onLogin={handleLogin} error={authError} />;
  }

  const renderActive = () => {
    if (loading) return <LoadingState />;
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView data={dashboard} />;
      case 'clients':
        return <ClientsView clients={dashboard?.clients || []} />;
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
        return <TablesWorkspace apiRequest={apiRequest} />;
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
