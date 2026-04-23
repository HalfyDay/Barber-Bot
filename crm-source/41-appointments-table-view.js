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
  schedules = [],
  onOpen,
  onOpenProfile,
  onCreateAppointment,
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
  const renderAvailableSlot = useCallback(
    (slot, { compact = false, showBarber = false } = {}) => (
      <button
        key={slot.id || `${slot.Barber}-${slot.Date}-${slot.Time}`}
        type="button"
        onClick={() => onCreateAppointment?.({ Barber: slot.Barber, Date: slot.Date, Time: slot.Time })}
        className={classNames(
          'w-full rounded-2xl border border-dashed border-emerald-500/50 bg-emerald-500/10 text-left text-emerald-100 transition hover:border-emerald-400 hover:bg-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40',
          compact ? 'px-2 py-2' : 'p-3'
        )}
      >
        <p className={classNames('font-semibold', compact ? 'text-[11px]' : 'text-sm')}>{slot.Time || 'Свободное окно'}</p>
        {showBarber && slot.Barber && <p className={classNames('mt-1 text-emerald-200/80', compact ? 'text-[10px]' : 'text-xs')}>{slot.Barber}</p>}
      </button>
    ),
    [onCreateAppointment]
  );
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
  const viewDays = useMemo(() => {
    if (safeViewMode === 'day') return [anchorDate];
    if (safeViewMode === 'week') return weekDays;
    return monthGridDays;
  }, [anchorDate, monthGridDays, safeViewMode, weekDays]);
  const availableSlotsByDate = useMemo(() => {
    const buckets = new Map();
    const nowTs = Date.now();
    viewDays.forEach((day) => {
      const key = getLocalISODateString(day);
      buckets.set(
        key,
        buildAvailableAppointmentSlots({
          date: day,
          schedules,
          appointments: rows,
          nowTs,
        })
      );
    });
    return buckets;
  }, [rows, schedules, viewDays]);
  const anchorDayEntries = useMemo(
    () =>
      buildCalendarDayEntries(
        rowsByDate.get(getLocalISODateString(anchorDate)) || [],
        availableSlotsByDate.get(getLocalISODateString(anchorDate)) || []
      ),
    [anchorDate, availableSlotsByDate, rowsByDate]
  );
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
          {anchorDayEntries.map((entry) =>
            entry.kind === 'appointment' ? (
              <AppointmentCalendarCard
                key={entry.key}
                record={entry.record}
                onOpen={onOpen}
                onOpenProfile={onOpenProfile}
                compact={isMobileViewport && safeScaleMode === 'compact'}
              />
            ) : (
              renderAvailableSlot(entry.slot, {
                compact: isMobileViewport && safeScaleMode === 'compact',
                showBarber: Boolean(entry.slot.Barber),
              })
            )
          )}
          {!anchorDayEntries.length && (
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
            const freeSlots = availableSlotsByDate.get(dayKey) || [];
            const dayEntries = buildCalendarDayEntries(items, freeSlots);
            const isToday = isSameLocalDay(day, new Date());
            const showBarber = new Set(freeSlots.map((slot) => normalizeText(slot.Barber)).filter(Boolean)).size > 1;
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
                  {dayEntries.map((entry) =>
                    entry.kind === 'appointment' ? (
                      <AppointmentCalendarCard
                        key={entry.key}
                        record={entry.record}
                        onOpen={onOpen}
                        onOpenProfile={onOpenProfile}
                        compact={isMobileViewport && safeScaleMode === 'compact'}
                      />
                    ) : (
                      renderAvailableSlot(entry.slot, {
                        compact: isMobileViewport && safeScaleMode === 'compact',
                        showBarber,
                      })
                    )
                  )}
                  {!dayEntries.length && <div className="rounded-xl border border-dashed border-slate-800 px-3 py-4 text-center text-xs text-slate-500">Пусто</div>}
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
            const freeSlots = availableSlotsByDate.get(dayKey) || [];
            const dayEntries = buildCalendarDayEntries(items, freeSlots);
            const visibleEntries = dayEntries.slice(0, 3);
            const isToday = isSameLocalDay(day, new Date());
            const isCurrentMonth = isSameLocalMonth(day, anchorDate);
            const showBarber = new Set(freeSlots.map((slot) => normalizeText(slot.Barber)).filter(Boolean)).size > 1;
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
                  {!!dayEntries.length && <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">{dayEntries.length}</span>}
                </div>
                <div className="space-y-2">
                  {visibleEntries.map((entry) =>
                    entry.kind === 'appointment' ? (
                      <AppointmentCalendarCard
                        key={entry.key}
                        record={entry.record}
                        onOpen={onOpen}
                        onOpenProfile={onOpenProfile}
                        compact={isMobileViewport && safeScaleMode === 'compact'}
                      />
                    ) : (
                      renderAvailableSlot(entry.slot, {
                        compact: true,
                        showBarber,
                      })
                    )
                  )}
                  {dayEntries.length > 3 && (
                    <button
                      type="button"
                      onClick={() => {
                        setCalendarDate?.(dayKey);
                        setViewMode?.('day');
                      }}
                      className="text-xs text-indigo-300 hover:text-indigo-100"
                    >
                      + еще {dayEntries.length - 3}
                    </button>
                  )}
                  {!dayEntries.length && <div className="rounded-xl border border-dashed border-slate-800 px-3 py-4 text-center text-xs text-slate-600">-</div>}
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

