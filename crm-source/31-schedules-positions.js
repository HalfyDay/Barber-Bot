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
const SchedulesView = ({
  schedules = [],
  barbers = [],
  currentUser = null,
  scheduleFillDays = 14,
  onScheduleFillDaysChange,
  onScheduleUpdate,
}) => {
  const isStaffUser = currentUser?.role === ROLE_STAFF;
  const datePickerInputRef = useRef(null);
  const [scheduleSheetDate, setScheduleSheetDate] = useState('');
  const [directScheduleEditSlot, setDirectScheduleEditSlot] = useState(null);
  const [directScheduleDraft, setDirectScheduleDraft] = useState({ start: '', end: '' });
  const [directSchedulePristine, setDirectSchedulePristine] = useState({ start: true, end: true });
  const [scheduleFillMenuOpen, setScheduleFillMenuOpen] = useState(false);
  const scheduleFillMenuRef = useRef(null);
  const directScheduleStartInputId = useMemo(() => `schedule-start-${Math.random().toString(36).slice(2, 8)}`, []);
  const directScheduleEndInputId = useMemo(() => `schedule-end-${Math.random().toString(36).slice(2, 8)}`, []);
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobileViewport(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  useEffect(() => {
    if (!scheduleFillMenuOpen) return undefined;
    const handlePointerDown = (event) => {
      if (scheduleFillMenuRef.current?.contains(event.target)) return;
      setScheduleFillMenuOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [scheduleFillMenuOpen]);
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
  const [calendarDate, setCalendarDate] = useLocalStorage(
    'tables.schedulesCalendarDate',
    getLocalISODateString(),
  );
  useEffect(() => {
    setBarberFilter(defaultBarberFilter);
  }, [defaultBarberFilter]);
  const anchorDate = useMemo(
    () => parseInputDate(calendarDate) || startOfLocalDay(new Date()),
    [calendarDate],
  );
  const monthStart = useMemo(() => getMonthStartDate(anchorDate), [anchorDate]);
  const gridStart = useMemo(() => getWeekStartDate(monthStart), [monthStart]);
  const monthDays = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => {
        const date = addDays(gridStart, index);
        return {
          key: getLocalISODateString(date),
          date,
          inCurrentMonth: isSameLocalMonth(date, monthStart),
        };
      }),
    [gridStart, monthStart],
  );
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
  const activeBarberFilter = useMemo(
    () => (isStaffUser ? staffPreferredBarber || defaultBarberFilter || 'all' : barberFilter),
    [isStaffUser, staffPreferredBarber, defaultBarberFilter, barberFilter],
  );
  const barberOptions = useMemo(
    () =>
      sortServicesByOrder(Array.isArray(barbers) ? barbers : [])
        .map((barber) => ({
          id: normalizeText(barber?.id),
          name: normalizeText(barber?.name),
          orderIndex: Number(barber?.orderIndex) || 0,
        }))
        .filter((barber) => barber.name),
    [barbers],
  );
  const barberOrderLookup = useMemo(() => {
    const lookup = new Map();
    barberOptions.forEach((barber, index) => {
      lookup.set(barber.name.toLowerCase(), Number(barber.orderIndex) || index);
    });
    return lookup;
  }, [barberOptions]);
  const filteredSchedules = useMemo(() => {
    if (!activeBarberFilter || activeBarberFilter === 'all') return normalizedSchedules;
    const target = normalizeText(activeBarberFilter).toLowerCase();
    return normalizedSchedules.filter((slot) => normalizeText(slot.Barber).toLowerCase() === target);
  }, [normalizedSchedules, activeBarberFilter]);
  const slotsByDate = useMemo(() => {
    const buckets = new Map();
    filteredSchedules.forEach((slot) => {
      const key = normalizeText(slot.Date);
      if (!key) return;
      const next = buckets.get(key) || [];
      next.push(slot);
      buckets.set(key, next);
    });
    buckets.forEach((slots, key) => {
      slots.sort((a, b) => {
        const leftBarber = normalizeText(a?.Barber).toLowerCase();
        const rightBarber = normalizeText(b?.Barber).toLowerCase();
        const leftOrder = barberOrderLookup.get(leftBarber) ?? Number.MAX_SAFE_INTEGER;
        const rightOrder = barberOrderLookup.get(rightBarber) ?? Number.MAX_SAFE_INTEGER;
        if (leftOrder !== rightOrder) return leftOrder - rightOrder;
        return getScheduleSortValue(a) - getScheduleSortValue(b);
      });
      buckets.set(key, slots);
    });
    return buckets;
  }, [barberOrderLookup, filteredSchedules]);
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
  const monthLabel = useMemo(
    () => new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(monthStart),
    [monthStart],
  );
  const mobileMonthName = useMemo(
    () => new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(monthStart),
    [monthStart],
  );
  const mobileYearLabel = useMemo(() => String(monthStart.getFullYear()), [monthStart]);
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
  const shiftMonth = useCallback(
    (direction) => {
      const nextDate = new Date(monthStart.getFullYear(), monthStart.getMonth() + direction, 1);
      setCalendarDate(getLocalISODateString(nextDate));
    },
    [monthStart, setCalendarDate],
  );
  const jumpToToday = useCallback(() => {
    setCalendarDate(getLocalISODateString(new Date()));
  }, [setCalendarDate]);
  const weekdayLabels = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const showBarberInChip = !isStaffUser && (!activeBarberFilter || activeBarberFilter === 'all');
  const visibleBarberNames = useMemo(() => {
    if (activeBarberFilter && activeBarberFilter !== 'all') {
      return [activeBarberFilter];
    }
    if (barberOptions.length) {
      return barberOptions.map((barber) => barber.name).filter(Boolean);
    }
    return Array.from(new Set(filteredSchedules.map((slot) => normalizeText(slot.Barber)).filter(Boolean)));
  }, [activeBarberFilter, barberOptions, filteredSchedules]);
  const singleVisibleBarberMode = visibleBarberNames.length === 1;
  const buildScheduleSheetSlot = useCallback((dateKey, barberName) => {
    const slots = slotsByDate.get(dateKey) || [];
    const existing = slots.find((slot) => normalizeText(slot.Barber) === normalizeText(barberName));
    if (existing) return existing;
    return {
      id: `${barberName}-${dateKey}`,
      Barber: barberName,
      Date: dateKey,
      DayOfWeek: formatScheduleDayShort(dateKey, '') || '',
      Week: '',
    };
  }, [slotsByDate]);
  const scheduleSheetRows = useMemo(() => {
    if (!scheduleSheetDate) return [];
    return visibleBarberNames.map((barberName) => buildScheduleSheetSlot(scheduleSheetDate, barberName));
  }, [buildScheduleSheetSlot, scheduleSheetDate, visibleBarberNames]);
  const singleScheduleSheetSlot = scheduleSheetRows.length === 1 ? scheduleSheetRows[0] : null;
  const scheduleSheetMaxWidthClass = singleScheduleSheetSlot ? 'max-w-md' : 'max-w-3xl';
  const openScheduleSheet = useCallback((dateKey) => {
    setCalendarDate(dateKey);
    if (singleVisibleBarberMode && visibleBarberNames[0]) {
      setDirectScheduleEditSlot(buildScheduleSheetSlot(dateKey, visibleBarberNames[0]));
      setScheduleSheetDate('');
      return;
    }
    setScheduleSheetDate(dateKey);
  }, [buildScheduleSheetSlot, setCalendarDate, singleVisibleBarberMode, visibleBarberNames]);
  const closeScheduleSheet = useCallback(() => {
    setScheduleSheetDate('');
  }, []);
  const closeDirectScheduleEditor = useCallback(() => {
    setDirectScheduleEditSlot(null);
  }, []);
  useEffect(() => {
    if (!directScheduleEditSlot) return;
    const nextRange = parseTimeRangeValue(directScheduleEditSlot.Week === '0' ? '' : directScheduleEditSlot.Week || '');
    setDirectScheduleDraft(nextRange);
    setDirectSchedulePristine({
      start: !nextRange.start,
      end: !nextRange.end,
    });
  }, [directScheduleEditSlot]);
  const resolveScheduleTone = useCallback((slot) => {
    const hasWorkingHours = normalizeText(slot?.Week).trim() && normalizeText(slot?.Week).trim() !== '0';
    return hasWorkingHours
      ? {
          dot: 'bg-[color:var(--crm-primary)]',
          chip: 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]',
          sheet: 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]',
        }
      : {
          dot: 'bg-rose-300',
          chip: 'bg-rose-500/18 text-rose-100',
          sheet: 'bg-rose-500/15 text-rose-100',
        };
  }, []);
  const scheduleGridStyle = useMemo(
    () => ({
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      gridAutoRows: isMobileViewport ? '84px' : '120px',
      alignItems: 'stretch',
    }),
    [isMobileViewport]
  );
  const calendarBlock = (
    <div
      className="w-full"
      style={
        isMobileViewport
          ? {
              width: '100vw',
              maxWidth: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
              paddingLeft: '16px',
              paddingRight: '16px',
            }
          : undefined
      }
    >
      <div className="space-y-3">
        {!isStaffUser && isMobileViewport && (
          <CustomSelect
            value={barberFilter}
            onChange={setBarberFilter}
            options={[
              { value: 'all', label: 'Все мастера' },
              ...barberOptions.map((barber) => ({ value: barber.name, label: barber.name })),
            ]}
            className="w-full"
            buttonClassName="h-10 w-full px-4 text-sm"
            menuClassName="w-full"
          />
        )}
        <div className={classNames('flex items-center justify-between gap-3', isMobileViewport && 'gap-1.5')}>
          <div className={classNames('flex items-center gap-1 min-w-0', isMobileViewport && 'flex-1 gap-0.5')}>
            <button
              type="button"
              onClick={openDatePicker}
              className={classNames(
                'inline-flex items-center gap-2 rounded-full px-3 py-2 text-left text-2xl font-semibold capitalize text-white transition hover:bg-[color:var(--crm-surface-4)]',
                isMobileViewport && 'min-w-0 flex-1 gap-1 px-1.5 py-1.5 text-[18px] leading-none'
              )}
            >
              {isMobileViewport ? (
                <span className="min-w-0 leading-[1.05]">
                  <span className="block capitalize">{mobileMonthName}</span>
                  <span className="block">{mobileYearLabel}</span>
                </span>
              ) : (
                <span>{monthLabel}</span>
              )}
              <svg className={classNames('h-4 w-4 text-[var(--crm-muted)]', isMobileViewport && 'flex-shrink-0')} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <input
              ref={datePickerInputRef}
              type="date"
              value={getLocalISODateString(anchorDate)}
              onChange={(event) => setCalendarDate(event.target.value || getLocalISODateString(new Date()))}
              className="pointer-events-none absolute h-0 w-0 opacity-0"
              tabIndex={-1}
            />
          </div>
          <div className={classNames('flex items-center gap-1', isMobileViewport && 'gap-0.5 flex-shrink-0')}>
            {typeof onScheduleFillDaysChange === 'function' && (
              <div className="relative" ref={scheduleFillMenuRef}>
                <button
                  type="button"
                  onClick={() => setScheduleFillMenuOpen((prev) => !prev)}
                  className={classNames(
                    'inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white',
                    isMobileViewport && 'h-9 px-2 text-[11px]'
                  )}
                  aria-haspopup="menu"
                  aria-expanded={scheduleFillMenuOpen}
                  aria-label="На сколько дней заполнять расписание"
                >
                  <span>{normalizeScheduleFillDays(scheduleFillDays)} дн.</span>
                  <svg className="h-4 w-4 text-[var(--crm-muted)]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {scheduleFillMenuOpen && (
                  <div className="crm-soft-card absolute right-0 top-[calc(100%+0.5rem)] z-30 min-w-[110px] overflow-hidden p-1 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                    {SCHEDULE_FILL_DAYS_OPTIONS.map((days) => {
                      const isActive = normalizeScheduleFillDays(scheduleFillDays) === days;
                      return (
                        <button
                          key={days}
                          type="button"
                          onClick={() => {
                            onScheduleFillDaysChange(days);
                            setScheduleFillMenuOpen(false);
                          }}
                          className={classNames(
                            'flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-semibold transition',
                            isActive
                              ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]'
                              : 'text-white hover:bg-[color:var(--crm-surface-4)]'
                          )}
                        >
                          <span>{days} дн.</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              className={classNames(
                'inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white',
                isMobileViewport && 'h-9 w-9'
              )}
              aria-label="Предыдущий месяц"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={jumpToToday}
              className={classNames(
                'inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white',
                isMobileViewport && 'h-9 px-2.5 text-[11px]'
              )}
            >
              Сегодня
            </button>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              className={classNames(
                'inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white',
                isMobileViewport && 'h-9 w-9'
              )}
              aria-label="Следующий месяц"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          className={classNames('grid w-full px-1', isMobileViewport ? 'gap-0.5' : 'gap-1')}
          style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}
        >
          {weekdayLabels.map((label) => (
            <div
              key={label}
              className={classNames(
                'flex h-8 items-center justify-center font-semibold uppercase tracking-wide text-[var(--crm-muted)]',
                isMobileViewport ? 'text-xs' : 'text-sm'
              )}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div
        className={classNames('grid w-full', isMobileViewport ? 'gap-0.5' : 'gap-1')}
        style={scheduleGridStyle}
      >
        {monthDays.map((day) => {
          const daySlots = slotsByDate.get(day.key) || [];
          const isSelected = day.key === getLocalISODateString(anchorDate);
          const isToday = isSameLocalDay(day.date, new Date());
          return (
            <button
              key={day.key}
              type="button"
              onClick={() => openScheduleSheet(day.key)}
              className={classNames(
                'crm-soft-panel min-w-0 h-full flex flex-col text-left transition hover:bg-[color:var(--crm-surface-dim)] focus:outline-none focus:ring-2 focus:ring-[color:var(--crm-primary)]/40',
                isMobileViewport ? 'rounded-[18px] px-1 py-1.5' : 'p-2',
                day.inCurrentMonth ? 'text-white' : 'text-slate-500',
              )}
            >
              <div className={classNames(
                isMobileViewport ? 'mb-1 flex items-start justify-center' : 'mb-2 flex items-start justify-center'
              )}>
                <span
                  className={classNames(
                    'inline-flex min-w-[28px] items-center justify-center rounded-full px-2 font-semibold sm:h-9 sm:min-w-[36px] sm:text-base',
                    isMobileViewport ? 'h-6 text-[11px]' : 'h-8 text-sm',
                    isSelected
                      ? 'bg-[color:var(--crm-primary)] text-[color:var(--crm-primary-on)]'
                      : isToday
                        ? 'bg-[color:var(--crm-surface-5)] text-white'
                        : 'text-inherit',
                  )}
                >
                  {day.date.getDate()}
                </span>
              </div>
              <div className={classNames(isMobileViewport ? 'mt-0 flex flex-1 items-center' : 'flex flex-1 items-center')}>
                {isMobileViewport ? (
                  <div className="flex w-full flex-col justify-center space-y-0.5 text-center">
                    {daySlots.slice(0, 2).map((slot, index) => {
                      const tone = resolveScheduleTone(slot);
                      const { start, end } = parseTimeRangeParts(slot.Week || '');
                      const barberMarker = showBarberInChip
                        ? `${normalizeText(slot.Barber).trim().slice(0, 1).toUpperCase()} `
                        : '';
                      const compactStart = start ? start.slice(0, 2) : '';
                      const compactEnd = end ? end.slice(0, 2) : '';
                      const mobileLabel = start
                        ? `${barberMarker}${compactStart}${compactEnd ? `-${compactEnd}` : ''}`
                        : `${barberMarker}вых`;
                      return (
                        <div
                          key={getRecordId(slot) || `${day.key}-${index}`}
                          className={classNames(
                            'w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md px-0.5 py-0.5 text-center text-[8.5px] font-semibold leading-tight',
                            tone.chip,
                          )}
                        >
                          {mobileLabel}
                        </div>
                      );
                    })}
                    {daySlots.length > 2 ? (
                      <div className="w-full px-0.5 text-center text-[9px] font-medium text-slate-500">+{daySlots.length - 2}</div>
                    ) : null}
                  </div>
                ) : (
                  <div className="w-full space-y-1 text-center">
                    {daySlots.slice(0, 3).map((slot) => {
                      const tone = resolveScheduleTone(slot);
                      return (
                        <div
                          key={getRecordId(slot) || `${slot.Barber}-${slot.Date}-${slot.Week || 'empty'}`}
                          className={classNames(
                            'w-full truncate rounded-lg px-2 py-1 text-center text-[11px] font-medium',
                            tone.chip,
                          )}
                        >
                          {showBarberInChip
                            ? `${normalizeText(slot.Barber)} ${slot.Week && slot.Week !== '0' ? slot.Week : ''}`.trim() || 'Выходной'
                            : slot.Week && slot.Week !== '0'
                              ? slot.Week
                              : 'Выходной'}
                        </div>
                      );
                    })}
                    {daySlots.length > 3 && (
                      <div className="px-1 text-[11px] font-medium text-slate-500">+{daySlots.length - 3}</div>
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className="space-y-4">
      {isMobileViewport ? (
        <div className="space-y-3">{calendarBlock}</div>
      ) : (
        <SectionCard
          title="Расписание"
          actions={
            <div className="flex items-center gap-2">
              {!isStaffUser && (
                <CustomSelect
                  value={barberFilter}
                  onChange={setBarberFilter}
                  options={[
                    { value: 'all', label: 'Все мастера' },
                    ...barberOptions.map((barber) => ({ value: barber.name, label: barber.name })),
                  ]}
                  className="min-w-[150px]"
                  buttonClassName="h-10 min-w-[150px] px-4 text-sm"
                />
              )}
            </div>
          }
        >
          <div className="space-y-3">{calendarBlock}</div>
        </SectionCard>
      )}
      <Modal
        title={scheduleSheetDate ? formatDateHeading(scheduleSheetDate) : 'Расписание'}
        isOpen={Boolean(scheduleSheetDate)}
        onClose={closeScheduleSheet}
        maxWidthClass={scheduleSheetMaxWidthClass}
        footer={
          <button
            type="button"
            onClick={closeScheduleSheet}
            className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}
          >
            Закрыть
          </button>
        }
      >
        <div className="space-y-3">
          {scheduleSheetRows.length ? (
            singleScheduleSheetSlot ? (
              <div className="crm-soft-card space-y-3 p-4">
                {!isStaffUser && activeBarberFilter === 'all' && singleScheduleSheetSlot.Barber ? (
                  <p className="text-sm font-semibold text-white">{singleScheduleSheetSlot.Barber}</p>
                ) : null}
                {canEditSlot(singleScheduleSheetSlot) ? (
                  <TimeRangePicker
                    value={singleScheduleSheetSlot.Week === '0' ? '' : singleScheduleSheetSlot.Week || ''}
                    onChange={(nextValue) => handleTimeChange(singleScheduleSheetSlot, nextValue)}
                    title={singleScheduleSheetSlot.Barber || 'Слот'}
                    placeholder="Выходной"
                    buttonClassName={classNames(
                      'crm-inline-panel w-full px-3 py-3 text-center text-base',
                      resolveScheduleTone(singleScheduleSheetSlot).sheet
                    )}
                  />
                ) : (
                  <div className="crm-inline-panel w-full px-3 py-3 text-center text-base text-[var(--crm-text)]">
                    {singleScheduleSheetSlot.Week && singleScheduleSheetSlot.Week !== '0' ? singleScheduleSheetSlot.Week : 'Слоты не указаны'}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {scheduleSheetRows.map((slot) => (
                  <div
                    key={getRecordId(slot) || `${slot.Barber}-${slot.Date}`}
                    className="crm-soft-card space-y-2 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="min-w-0 truncate text-sm font-semibold text-white">{slot.Barber || 'Без мастера'}</p>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--crm-muted)]">
                        {slot.DayOfWeek || formatScheduleDayShort(slot.Date, slot.DayOfWeek) || 'День'}
                      </span>
                    </div>
                    {canEditSlot(slot) ? (
                      (() => {
                        const tone = resolveScheduleTone(slot);
                        return (
                          <TimeRangePicker
                            value={slot.Week === '0' ? '' : slot.Week || ''}
                            onChange={(nextValue) => handleTimeChange(slot, nextValue)}
                            title={slot.Barber || 'Слот'}
                            placeholder="Выходной"
                            buttonClassName={classNames(
                              'crm-inline-panel w-full px-3 py-2 text-left text-sm',
                              tone.sheet
                            )}
                          />
                        );
                      })()
                    ) : (
                      <div className="crm-inline-panel w-full px-3 py-2 text-left text-sm text-[var(--crm-text)]">
                        {slot.Week && slot.Week !== '0' ? slot.Week : 'Слоты не указаны'}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
            <p className="text-sm text-[var(--crm-muted)]">Для этого дня расписание не найдено.</p>
          )}
        </div>
      </Modal>
      <Modal
        title={directScheduleEditSlot?.Barber || 'Слот'}
        isOpen={Boolean(directScheduleEditSlot)}
        onClose={closeDirectScheduleEditor}
        maxWidthClass="max-w-md"
        footer={
          <>
            <button type="button" onClick={closeDirectScheduleEditor} className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}>
              Отмена
            </button>
            <button
              type="button"
              onClick={() => {
                if (!directScheduleEditSlot) return;
                handleTimeChange(directScheduleEditSlot, buildTimeRangeValue(directScheduleDraft.start, directScheduleDraft.end));
                closeDirectScheduleEditor();
              }}
              className={classNames('crm-action-btn', SHEET_FOOTER_BUTTON_CLASS)}
            >
              Сохранить
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Выберите время начала и окончания</p>
            <button
              type="button"
              onClick={() => {
                if (!directScheduleEditSlot) return;
                handleTimeChange(directScheduleEditSlot, '0');
                closeDirectScheduleEditor();
              }}
              className="text-xs text-[var(--crm-muted)] hover:text-white"
            >
              Очистить
            </button>
          </div>
          <div className="crm-inline-panel flex flex-wrap items-center justify-around gap-4 p-4">
            <div className="text-center">
              <label className="block text-sm font-medium text-[var(--crm-muted)]" htmlFor={directScheduleStartInputId}>Начало</label>
              <input
                id={directScheduleStartInputId}
                name="directScheduleStartTime"
                aria-label="Начало"
                type="time"
                step="60"
                value={directSchedulePristine.start ? '00:00' : directScheduleDraft.start || '00:00'}
                onChange={(event) => {
                  const nextStart = normalizeTimeInputValue(event.target.value);
                  setDirectScheduleDraft((prev) => ({ ...prev, start: nextStart }));
                  setDirectSchedulePristine((prev) => ({ ...prev, start: !nextStart }));
                }}
                className="mt-2 w-32 px-2 py-2 text-center text-lg text-white"
              />
            </div>
            <span className="text-2xl font-light text-[var(--crm-muted)]">-</span>
            <div className="text-center">
              <label className="block text-sm font-medium text-[var(--crm-muted)]" htmlFor={directScheduleEndInputId}>Окончание</label>
              <input
                id={directScheduleEndInputId}
                name="directScheduleEndTime"
                aria-label="Окончание"
                type="time"
                step="60"
                value={directSchedulePristine.end ? '00:00' : directScheduleDraft.end || '00:00'}
                onChange={(event) => {
                  const nextEnd = normalizeTimeInputValue(event.target.value);
                  setDirectScheduleDraft((prev) => ({ ...prev, end: nextEnd }));
                  setDirectSchedulePristine((prev) => ({ ...prev, end: !nextEnd }));
                }}
                className="mt-2 w-32 px-2 py-2 text-center text-lg text-white"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

