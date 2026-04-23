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
  onEndChange,
  manualEndEnabled = false,
}) => {
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
  const openPicker = (inputRef) => {
    const input = inputRef?.current;
    if (!input) return;
    if (typeof input.showPicker === 'function') {
      input.showPicker();
      return;
    }
    input.focus();
    input.click?.();
  };
  const handleStartChange = (event) => {
    const nextStart = normalizeTimeInputValue(event.target.value);
    onChange?.(nextStart);
  };
  const handleEndChange = (event) => {
    const nextEnd = normalizeTimeInputValue(event.target.value);
    onEndChange?.(nextEnd);
  };
  return (
    <div className="space-y-1">
      <label className="text-sm text-slate-300">Время</label>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
        <div className="relative min-w-0">
          <input
            ref={startInputRef}
            name="appointmentStartTime"
            aria-label="Время начала"
            type="time"
            step="60"
            value={startValue || '00:00'}
            onChange={handleStartChange}
            className="crm-sheet-control crm-sheet-time h-11 min-w-0 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 pr-10 text-white"
          />
          <button
            type="button"
            onClick={() => openPicker(startInputRef)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
            aria-label="Показать окно выбора времени"
            title="Показать окно выбора времени"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 8v4l2.8 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <span className="text-slate-500">-</span>
        <div className="relative min-w-0">
          <input
            ref={endInputRef}
            name="appointmentEndTime"
            aria-label="Время окончания"
            type="time"
            step="60"
            value={endValue || '00:00'}
            onChange={manualEndEnabled ? handleEndChange : undefined}
            readOnly={!manualEndEnabled}
            tabIndex={manualEndEnabled ? 0 : -1}
            className="crm-sheet-control crm-sheet-time h-11 min-w-0 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 pr-10 text-center text-white"
          />
          <button
            type="button"
            onClick={() => manualEndEnabled && openPicker(endInputRef)}
            disabled={!manualEndEnabled}
            className={classNames(
              'absolute right-3 top-1/2 -translate-y-1/2',
              manualEndEnabled ? 'text-white/90 hover:text-white' : 'cursor-default text-slate-600'
            )}
            aria-label="Показать окно выбора времени"
            title="Показать окно выбора времени"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 8v4l2.8 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
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

