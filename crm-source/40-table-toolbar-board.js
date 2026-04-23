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

