const TableToolbar = ({
  tableId,
  searchTerm,
  setSearchTerm,
  searchSuggestions = [],
  supportsBarberFilter,
  selectedBarber,
  setSelectedBarber,
  barbers = [],
  supportsStatusFilter,
  statuses = [],
  hiddenStatuses = [],
  toggleStatus,
  resetStatuses,
  appointmentStatusMode = 'active',
  setAppointmentStatusMode,
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
  appointmentCalendarDate = '',
  setAppointmentCalendarDate,
  onAppointmentTodayJump,
  appointmentRows = [],
  appointmentScheduleSlot = null,
  onSaveAppointmentScheduleDay,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const appointmentDateInputRef = useRef(null);
  const scheduleDayEditorRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobileViewport(window.innerWidth < 768);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const chipClass = (active) =>
    classNames(
      'crm-ghost-btn inline-flex h-11 items-center justify-center px-4 text-xs font-semibold uppercase tracking-wide whitespace-nowrap text-center',
      active
        ? 'bg-[color:var(--crm-primary-container)] text-[#eafffb]'
        : 'text-[var(--crm-text)] hover:bg-[color:var(--crm-surface-4)]'
    );
  const cycleOptionValue = (items, currentValue) => {
    const currentIndex = items.findIndex((item) => item.id === currentValue);
    const resolvedIndex = currentIndex >= 0 ? currentIndex : 0;
    return items[(resolvedIndex + 1) % items.length]?.id || items[0]?.id;
  };
  const renderCycleGroupButton = (items, value, onChange, iconsMap, label) => {
    const currentItem = items.find((item) => item.id === value) || items[0];
    return (
      <button
        type="button"
        onClick={() => onChange?.(cycleOptionValue(items, value))}
        className="crm-soft-panel flex h-11 w-full items-center justify-between gap-3 px-4 text-left text-white transition hover:bg-[color:var(--crm-surface-5)] focus:outline-none focus:ring-0 focus-visible:ring-0"
        title={`${label}: ${currentItem?.label || ''}`}
        aria-label={`${label}: ${currentItem?.label || ''}`}
      >
        <div className="min-w-0 flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--crm-muted)]">{label}</span>
          <span className="truncate text-xs font-semibold text-white">{currentItem?.label || '-'}</span>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <span
                key={item.id}
                className={classNames(
                  'h-1.5 w-1.5 rounded-full transition',
                  item.id === currentItem?.id ? 'bg-[color:var(--crm-primary)]' : 'bg-[color:var(--crm-outline-strong)]'
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
      <StatusMenu
        statuses={statuses}
        hiddenStatuses={hiddenStatuses}
        onToggle={toggleStatus}
        onReset={resetStatuses}
        mode={appointmentStatusMode}
        onModeChange={setAppointmentStatusMode}
        compactAppointments={tableId === 'Appointments'}
      />
    ) : null;
  const statusControl = renderStatusControl();
  const columnControl = showColumnMenu ? <ColumnMenu columns={columns} hiddenColumns={hiddenColumns} onToggle={toggleColumn} /> : null;
  const pastControl = null;
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
  const calendarScaleControl = null;
  const safeAppointmentView = APPOINTMENT_CALENDAR_VIEW_OPTIONS.some((option) => option.id === appointmentCalendarView) ? appointmentCalendarView : 'week';
  const canEditScheduleDay = tableId === 'Appointments' && safeAppointmentView === 'day';
  const canEditSelectedBarberScheduleDay =
    canEditScheduleDay &&
    selectedBarber !== 'all' &&
    appointmentScheduleSlot &&
    typeof onSaveAppointmentScheduleDay === 'function';
  const [scheduleDayEditorOpen, setScheduleDayEditorOpen] = useState(false);
  const [scheduleDayDraft, setScheduleDayDraft] = useState({ start: '', end: '' });
  const [scheduleDayPristine, setScheduleDayPristine] = useState({ start: true, end: true });
  const appointmentAnchorDate = useMemo(
    () => parseInputDate(appointmentCalendarDate) || startOfLocalDay(),
    [appointmentCalendarDate]
  );
  const appointmentTodayKey = useMemo(() => getLocalISODateString(), []);
  const appointmentDatedRows = useMemo(
    () =>
      (Array.isArray(appointmentRows) ? appointmentRows : [])
        .map((record) => ({
          ...record,
          _startDate: getAppointmentStartDate(record.Date, record.Time, record.startDateTime) || parseInputDate(record.Date),
        }))
        .filter((record) => record._startDate)
        .sort((a, b) => a._startDate.getTime() - b._startDate.getTime()),
    [appointmentRows]
  );
  const appointmentRowsByDate = useMemo(() => {
    const buckets = new Map();
    appointmentDatedRows.forEach((record) => {
      const key = getLocalISODateString(record._startDate);
      const next = buckets.get(key) || [];
      next.push(record);
      buckets.set(key, next);
    });
    return buckets;
  }, [appointmentDatedRows]);
  const appointmentWeekStart = useMemo(() => getWeekStartDate(appointmentAnchorDate), [appointmentAnchorDate]);
  const appointmentWeekDays = useMemo(
    () => Array.from({ length: 7 }, (_, index) => addDays(appointmentWeekStart, index)),
    [appointmentWeekStart]
  );
  const appointmentHeaderTitle = useMemo(() => {
    if (safeAppointmentView === 'day') {
      return new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })
        .format(appointmentAnchorDate)
        .replace('.', '');
    }
    if (safeAppointmentView === 'week') {
      const weekEnd = addDays(appointmentWeekStart, 6);
      const sameMonth =
        appointmentWeekStart.getMonth() === weekEnd.getMonth() &&
        appointmentWeekStart.getFullYear() === weekEnd.getFullYear();
      if (sameMonth) {
        const leftDay = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(appointmentWeekStart);
        const rightWithMonth = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekEnd).replace('.', '');
        return `${leftDay} - ${rightWithMonth}`;
      }
      const left = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(appointmentWeekStart).replace('.', '');
      const right = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekEnd).replace('.', '');
      return `${left} - ${right}`;
    }
    return new Intl.DateTimeFormat('ru-RU', { month: 'short', year: 'numeric' }).format(appointmentAnchorDate).replace('.', '');
  }, [appointmentAnchorDate, appointmentWeekStart, safeAppointmentView]);
  const appointmentHeaderMeta = useMemo(() => {
    if (safeAppointmentView === 'day') {
      return `${appointmentRowsByDate.get(getLocalISODateString(appointmentAnchorDate))?.length || 0} записей`;
    }
    if (safeAppointmentView === 'week') {
      return `${appointmentWeekDays.reduce((sum, day) => sum + (appointmentRowsByDate.get(getLocalISODateString(day))?.length || 0), 0)} записей`;
    }
    return `${appointmentDatedRows.filter((record) => isSameLocalMonth(record._startDate, appointmentAnchorDate)).length} записей`;
  }, [appointmentAnchorDate, appointmentDatedRows, appointmentRowsByDate, appointmentWeekDays, safeAppointmentView]);
  const shiftAppointmentCalendar = useCallback((direction) => {
    const multiplier = direction === 'next' ? 1 : -1;
    const nextDate = safeAppointmentView === 'day'
      ? addDays(appointmentAnchorDate, multiplier)
      : safeAppointmentView === 'week'
        ? addDays(appointmentAnchorDate, multiplier * 7)
        : new Date(appointmentAnchorDate.getFullYear(), appointmentAnchorDate.getMonth() + multiplier, 1);
    setAppointmentCalendarDate?.(getLocalISODateString(nextDate));
  }, [appointmentAnchorDate, safeAppointmentView, setAppointmentCalendarDate]);
  const jumpAppointmentCalendarToToday = useCallback(() => {
    onAppointmentTodayJump?.();
    setAppointmentCalendarDate?.(appointmentTodayKey);
  }, [appointmentTodayKey, onAppointmentTodayJump, setAppointmentCalendarDate]);
  const currentScheduleDayRange = useMemo(
    () => parseTimeRangeValue(appointmentScheduleSlot?.Week === '0' ? '' : appointmentScheduleSlot?.Week || ''),
    [appointmentScheduleSlot]
  );
  useEffect(() => {
    setScheduleDayDraft(currentScheduleDayRange);
    setScheduleDayPristine({
      start: !currentScheduleDayRange.start,
      end: !currentScheduleDayRange.end,
    });
  }, [currentScheduleDayRange]);
  useEffect(() => {
    if (!canEditScheduleDay) {
      setScheduleDayEditorOpen(false);
    }
  }, [canEditScheduleDay]);
  useEffect(() => {
    if (selectedBarber === 'all') {
      setScheduleDayEditorOpen(false);
    }
  }, [selectedBarber]);
  useEffect(() => {
    if (!scheduleDayEditorOpen || isMobileViewport) return undefined;
    const handlePointerDown = (event) => {
      if (scheduleDayEditorRef.current?.contains(event.target)) return;
      setScheduleDayEditorOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isMobileViewport, scheduleDayEditorOpen]);
  const saveScheduleDayDraft = useCallback(() => {
    if (!canEditSelectedBarberScheduleDay || !appointmentScheduleSlot) return;
    onSaveAppointmentScheduleDay?.(
      appointmentScheduleSlot,
      buildTimeRangeValue(scheduleDayDraft.start, scheduleDayDraft.end)
    );
  }, [appointmentScheduleSlot, canEditSelectedBarberScheduleDay, onSaveAppointmentScheduleDay, scheduleDayDraft.end, scheduleDayDraft.start]);
  const clearScheduleDayDraft = useCallback(() => {
    if (!canEditSelectedBarberScheduleDay || !appointmentScheduleSlot) return;
    onSaveAppointmentScheduleDay?.(appointmentScheduleSlot, '0');
  }, [appointmentScheduleSlot, canEditSelectedBarberScheduleDay, onSaveAppointmentScheduleDay]);
  const renderScheduleDayEditor = (mobile = false) => {
    if (!canEditScheduleDay) return null;
    const currentScheduleLabel =
      appointmentScheduleSlot?.Week && appointmentScheduleSlot.Week !== '0'
        ? appointmentScheduleSlot.Week
        : 'Выходной';
    if (!canEditSelectedBarberScheduleDay) {
      return (
        <div
          className={classNames(
            'crm-soft-panel flex h-11 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-[var(--crm-muted)]',
            mobile ? 'w-full' : 'min-w-[180px]'
          )}
        >
          Выберите мастера
        </div>
      );
    }
    const inputClassName = classNames(
      'crm-inline-panel h-11 min-h-0 rounded-full px-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-0 focus-visible:ring-0',
      mobile ? 'w-full' : 'min-w-0 flex-1'
    );
    if (mobile) {
      return (
        <div className="w-full">
          <button
            type="button"
            onClick={() => setScheduleDayEditorOpen((prev) => !prev)}
            className="crm-soft-panel flex h-11 w-full items-center justify-between rounded-full px-4 text-left text-white transition hover:bg-[color:var(--crm-surface-5)] focus:outline-none focus:ring-0 focus-visible:ring-0"
          >
            <span className="min-w-0 truncate text-sm font-semibold">{currentScheduleLabel}</span>
            <svg
              className={classNames('h-4 w-4 shrink-0 text-[var(--crm-muted)] transition-transform', scheduleDayEditorOpen && 'rotate-180')}
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      );
    }
    return (
      <div ref={scheduleDayEditorRef} className="relative shrink-0">
        <button
          type="button"
          onClick={() => setScheduleDayEditorOpen((prev) => !prev)}
          className="crm-soft-panel flex h-11 min-w-[190px] items-center justify-between rounded-full px-4 text-left text-white transition hover:bg-[color:var(--crm-surface-5)] focus:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <span className="min-w-0 truncate text-sm font-semibold">{currentScheduleLabel}</span>
          <svg
            className={classNames('h-4 w-4 shrink-0 text-[var(--crm-muted)] transition-transform', scheduleDayEditorOpen && 'rotate-180')}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {scheduleDayEditorOpen ? (
          <div className="crm-soft-card crm-float-reveal absolute right-0 top-[calc(100%+0.5rem)] z-[90] w-[320px] space-y-2 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
              <input
                name="appointmentScheduleDayStartDesktop"
                aria-label="Начало смены"
                type="time"
                step="60"
                value={scheduleDayPristine.start ? '00:00' : scheduleDayDraft.start || '00:00'}
                onChange={(event) => {
                  const nextStart = normalizeTimeInputValue(event.target.value);
                  setScheduleDayDraft((prev) => ({ ...prev, start: nextStart }));
                  setScheduleDayPristine((prev) => ({ ...prev, start: !nextStart }));
                }}
                className={inputClassName}
              />
              <span className="shrink-0 text-sm font-semibold text-[var(--crm-muted)]">-</span>
              <input
                name="appointmentScheduleDayEndDesktop"
                aria-label="Окончание смены"
                type="time"
                step="60"
                value={scheduleDayPristine.end ? '00:00' : scheduleDayDraft.end || '00:00'}
                onChange={(event) => {
                  const nextEnd = normalizeTimeInputValue(event.target.value);
                  setScheduleDayDraft((prev) => ({ ...prev, end: nextEnd }));
                  setScheduleDayPristine((prev) => ({ ...prev, end: !nextEnd }));
                }}
                className={inputClassName}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <button
                type="button"
                onClick={saveScheduleDayDraft}
                className="crm-action-btn inline-flex h-11 min-h-0 flex-1 items-center justify-center rounded-full px-4 text-sm"
              >
                OK
              </button>
              <button
                type="button"
                onClick={clearScheduleDayDraft}
                className="crm-ghost-btn inline-flex h-11 min-h-0 flex-1 items-center justify-center rounded-full px-4 text-sm text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none focus:ring-0 focus-visible:ring-0"
              >
                Выходной
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  const openAppointmentDatePicker = useCallback(() => {
    const input = appointmentDateInputRef.current;
    if (!input) return;
    if (typeof input.showPicker === 'function') {
      input.showPicker();
      return;
    }
    input.focus();
    input.click();
  }, []);
  const getBarberSelect = (extraClassName = '') => (
    <CustomSelect
      value={selectedBarber}
      onChange={setSelectedBarber}
      options={[
        ...(allowAllBarbersOption ? [{ value: 'all', label: 'Все мастера' }] : []),
        ...barbers.map((barber) => ({ value: barber, label: barber })),
      ]}
      placeholder="Выберите мастера"
      className={classNames(
        'w-full',
        tableId !== 'Appointments' && 'sm:w-48',
        extraClassName
      )}
      buttonClassName="h-11 px-4 text-sm"
      menuClassName="w-full"
    />
  );
  if (tableId === 'Appointments') {
    return (
      <>
        {isMobileViewport && <div className="h-[144px]" aria-hidden="true" />}
        <div
          className={classNames(
            'crm-soft-card p-3 sm:p-4',
            'space-y-0 md:space-y-3',
            isMobileViewport ? 'fixed inset-x-4 z-20 overflow-visible transition-[top] duration-200 ease-out' : ''
          )}
          style={isMobileViewport ? { top: 'var(--crm-mobile-header-offset, 68px)' } : undefined}
        >
          <div className="flex items-stretch gap-2 md:flex-row md:items-stretch">
          <SearchSuggestInput
            value={searchTerm}
            onChange={setSearchTerm}
            suggestions={searchSuggestions}
            placeholder="Поиск..."
            ariaLabel="Поиск по таблице"
          />
          {supportsBarberFilter && (
            <div className="hidden md:block">
              {getBarberSelect('md:w-auto md:min-w-[180px]')}
            </div>
          )}
          {canEditScheduleDay ? <div className="hidden md:flex">{renderScheduleDayEditor(false)}</div> : null}
          <div className="hidden md:block">
            {calendarViewControl}
          </div>
          <div className="hidden md:block">
            {renderStatusControl()}
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="crm-ghost-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center p-0 text-white shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 active:shadow-none md:hidden"
            aria-label={mobileFiltersOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
            title={mobileFiltersOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
          >
            <IconFilter className="h-5 w-5" />
          </button>
          {canCreate && (
            <button
              onClick={onOpenCreate}
              className="crm-action-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center p-0 text-sm sm:h-11 sm:w-auto sm:px-5"
              aria-label="Добавить запись"
            >
              <span className="hidden sm:inline">+ Добавить</span>
              <span className="sm:hidden text-lg leading-none">+</span>
            </button>
          )}
        </div>
          <div className="md:hidden">
            <div className="flex items-center justify-between gap-3 px-1 pt-3">
              <div className="min-w-0 flex-1">
                <button type="button" onClick={openAppointmentDatePicker} className="min-w-0 text-left focus:outline-none">
                  <p className="truncate text-base font-semibold leading-tight text-white">{appointmentHeaderTitle}</p>
                  <p className="text-xs text-[var(--crm-muted)]">{appointmentHeaderMeta}</p>
                </button>
                <input
                  ref={appointmentDateInputRef}
                  name="appointmentCalendarDate"
                  aria-label="Выбрать дату календаря"
                  type="date"
                  value={getLocalISODateString(appointmentAnchorDate)}
                  onChange={(event) => setAppointmentCalendarDate?.(event.target.value || appointmentTodayKey)}
                  className="pointer-events-none absolute left-0 top-0 h-0 w-0 opacity-0"
                  tabIndex={-1}
                />
              </div>
              <div className="crm-inline-panel inline-flex shrink-0 items-center gap-1 p-1">
                <button
                  type="button"
                  onClick={() => shiftAppointmentCalendar('prev')}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none"
                  aria-label="Назад"
                  title="Назад"
                >
                  <IconChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={jumpAppointmentCalendarToToday}
                  className="inline-flex h-10 min-w-0 items-center justify-center rounded-full px-3 text-sm font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none"
                >
                  Сегодня
                </button>
                <button
                  type="button"
                  onClick={() => shiftAppointmentCalendar('next')}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none"
                  aria-label="Вперед"
                  title="Вперед"
                >
                  <IconChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              'absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 md:hidden',
              'transition-[opacity,transform] duration-200 ease-out',
              mobileFiltersOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
            )}
          >
            <div className="crm-soft-card space-y-2 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              {supportsBarberFilter || supportsStatusFilter ? (
                <div className="grid grid-cols-2 items-start gap-2">
                  {supportsBarberFilter ? <div className="relative z-[80] min-w-0">{getBarberSelect('z-[80]')}</div> : <div />}
                  {supportsStatusFilter ? <div className="min-w-0">{renderStatusControl()}</div> : <div />}
                </div>
              ) : null}
              {canEditScheduleDay ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 items-start gap-2">
                    <div className="min-w-0">{renderScheduleDayEditor(true)}</div>
                    <div className="min-w-0">{calendarViewControl}</div>
                  </div>
                  <div
                    className={classNames(
                      'grid transition-[grid-template-rows,opacity,transform] duration-200 ease-out',
                      scheduleDayEditorOpen ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-1 pointer-events-none'
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="w-full pt-2">
                        <div className="w-full space-y-2">
                            <div className="flex w-full min-w-0 items-center gap-2">
                              <input
                                name="appointmentScheduleDayStartMobileExpanded"
                                aria-label="Начало смены"
                                type="time"
                                step="60"
                                value={scheduleDayPristine.start ? '00:00' : scheduleDayDraft.start || '00:00'}
                                onChange={(event) => {
                                  const nextStart = normalizeTimeInputValue(event.target.value);
                                  setScheduleDayDraft((prev) => ({ ...prev, start: nextStart }));
                                  setScheduleDayPristine((prev) => ({ ...prev, start: !nextStart }));
                                }}
                                className={classNames(
                                  'crm-inline-panel h-11 min-h-0 min-w-0 flex-1 rounded-full px-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-0 focus-visible:ring-0'
                                )}
                              />
                              <span className="shrink-0 text-sm font-semibold text-[var(--crm-muted)]">-</span>
                              <input
                                name="appointmentScheduleDayEndMobileExpanded"
                                aria-label="Окончание смены"
                                type="time"
                                step="60"
                                value={scheduleDayPristine.end ? '00:00' : scheduleDayDraft.end || '00:00'}
                                onChange={(event) => {
                                  const nextEnd = normalizeTimeInputValue(event.target.value);
                                  setScheduleDayDraft((prev) => ({ ...prev, end: nextEnd }));
                                  setScheduleDayPristine((prev) => ({ ...prev, end: !nextEnd }));
                                }}
                                className={classNames(
                                  'crm-inline-panel h-11 min-h-0 min-w-0 flex-1 rounded-full px-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-0 focus-visible:ring-0'
                                )}
                              />
                            </div>
                            <div className="grid w-full min-w-0 grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={saveScheduleDayDraft}
                                className="crm-action-btn inline-flex h-10 min-h-0 min-w-0 w-full items-center justify-center rounded-full px-2 text-xs font-semibold sm:h-11 sm:px-3 sm:text-sm"
                              >
                                OK
                              </button>
                              <button
                                type="button"
                                onClick={clearScheduleDayDraft}
                                className="crm-ghost-btn inline-flex h-10 min-h-0 min-w-0 w-full items-center justify-center rounded-full px-2 text-xs font-semibold text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none focus:ring-0 focus-visible:ring-0 sm:h-11 sm:px-3 sm:text-sm"
                              >
                                Выходной
                              </button>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  {calendarViewControl}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  if (tableId === 'Users') {
    return (
      <>
        {isMobileViewport && <div className="h-[76px]" aria-hidden="true" />}
        <div
          className={classNames('crm-soft-card space-y-3 p-3 sm:space-y-3 sm:p-4', isMobileViewport ? 'fixed inset-x-4 z-20 transition-[top] duration-200 ease-out' : '')}
          style={isMobileViewport ? { top: 'var(--crm-mobile-header-offset, 68px)' } : undefined}
        >
          <div className="flex items-stretch gap-2 md:flex-row md:items-stretch">
          <SearchSuggestInput
            value={searchTerm}
            onChange={setSearchTerm}
            suggestions={searchSuggestions}
            placeholder="Поиск..."
            ariaLabel="Поиск по клиентам"
          />
          {canCreate && typeof onOpenCreate === 'function' ? (
            <button
              onClick={onOpenCreate}
              className="crm-action-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center p-0 text-sm sm:h-11 sm:w-auto sm:px-5"
              aria-label="Добавить клиента"
            >
              <span className="hidden sm:inline">+ Добавить</span>
              <span className="sm:hidden text-lg leading-none">+</span>
            </button>
          ) : null}
          </div>
        </div>
      </>
    );
  }
  const controlOrder =
    [
      { key: 'status', node: statusControl },
      { key: 'past', node: pastControl },
      { key: 'group', node: groupingControl },
      { key: 'columns', node: columnControl },
    ];
  const visibleControls = controlOrder.filter((control) => Boolean(control.node));
  const hasSecondaryToolbarRow = visibleControls.length > 0;
  return (
    <div className={classNames('crm-soft-card p-3 sm:p-4', hasSecondaryToolbarRow ? 'space-y-2 sm:space-y-3' : 'space-y-0')}>
      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between">
        <div className={classNames('flex-1', hasSecondaryToolbarRow ? 'space-y-2.5 sm:space-y-3' : 'space-y-0')}>
          <div
            className={classNames(
              tableId === 'Appointments'
                ? 'flex flex-col gap-2 sm:flex-row sm:items-center lg:flex-row lg:items-center lg:gap-3'
                : 'flex min-h-[44px] items-center gap-2'
            )}
          >
            <div
              className={classNames(
                'flex w-full items-stretch gap-2',
                tableId === 'Appointments' ? 'lg:flex-[2] lg:gap-3' : ''
              )}
            >
              <label className="relative min-w-0 flex-1 lg:min-w-[260px]">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--crm-muted)]">
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
                  className="h-10 w-full pl-9 pr-3 text-sm text-white placeholder:text-[var(--crm-muted)] focus:outline-none"
                />
              </label>
              {inlineCreateForMobile && (
                <button
                  onClick={onOpenCreate}
                  aria-label="Добавить запись"
                  className="crm-action-btn inline-flex h-10 w-10 min-h-0 shrink-0 items-center justify-center self-center p-0 text-lg font-semibold sm:hidden"
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
                    className="crm-action-btn inline-flex h-11 items-center justify-center px-6 text-sm"
                  >
                    + Добавить
                  </button>
                )}
              </div>
            )}
          </div>
          {visibleControls.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {visibleControls.map((control) =>
              control.node ? <Fragment key={control.key}>{control.node}</Fragment> : null
              )}
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {allowManualRefresh && (
            <button
              onClick={onRefresh}
              className="crm-ghost-btn px-4 py-2 text-sm sm:px-5"
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
                'crm-action-btn px-4 py-2 text-sm',
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
      className={classNames('h-3 w-3 text-[var(--crm-muted)]', direction === 'asc' && 'text-[color:var(--crm-primary)]')}
    >
      <path d="M4 10l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={classNames('h-3 w-3 -mt-0.5 text-[var(--crm-muted)]', direction === 'desc' && 'text-[color:var(--crm-primary)]')}
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
    return <p className="text-[var(--crm-muted)]">Расписание пусто.</p>;
  }
  return (
    <div className="space-y-4">
      {groupedByDate.map((group) => (
        <section key={group.key} className="crm-soft-card space-y-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--crm-muted)]">{group.badge}</p>
              <p className="text-base font-semibold text-white">{group.title}</p>
            </div>
            <span className="rounded-full bg-[color:var(--crm-surface-4)] px-2.5 py-0.5 text-[11px] text-[var(--crm-text)]">
              {group.slots.length} {pluralize(group.slots.length, ['слот', 'слота', 'слотов'])}
            </span>
          </div>
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {group.slots.map((slot) => (
              <article
                key={slot.id || `${slot.Barber || 'no-barber'}-${slot.Date || slot.DayOfWeek || slot.Week}`}
                className="crm-soft-panel p-3 text-sm text-[var(--crm-text)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--crm-muted)]">{slot.DayOfWeek || 'День не указан'}</p>
                    <p className="text-base font-semibold text-white">{slot.Barber || 'Не назначен'}</p>
                  </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-white">{slot.Week || 'Слоты не указаны'}</p>
                    <p className="text-[11px] uppercase tracking-wide text-[var(--crm-muted)]">{slot.Date ? formatDate(slot.Date) : 'Без даты'}</p>
                  </div>
                </div>
                {editableColumns.length > 0 && (
                  <div className="mt-2 grid gap-2 text-xs text-[var(--crm-text)]">
                    {editableColumns.map((column) => (
                      <div key={`${slot.id || slot.Date}-${column.key}`} className="crm-inline-panel flex items-center justify-between px-2 py-1.5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--crm-muted)]">{column.label}</p>
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

