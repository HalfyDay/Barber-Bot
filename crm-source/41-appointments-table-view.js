const AppointmentsList = ({ groups = [], onOpen, columns = [], hiddenColumns = [], onOpenProfile }) => {
  if (!groups.length) {
    return <p className="text-[var(--crm-muted)]">Записей пока нет.</p>;
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
            className="text-[color:var(--crm-primary)] hover:text-white"
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
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--crm-muted)]">
              <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
              {group.label}
              <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
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
                  className="crm-soft-card flex h-full cursor-pointer flex-col p-3 text-left transition hover:-translate-y-0.5 focus:outline-none sm:p-4"
                >
                  <div className="flex flex-col gap-2 border-b crm-table-divider pb-3 xl:flex-row xl:items-start xl:justify-between xl:gap-3">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--crm-muted)]">{formatDateBadgeLabel(record.Date)}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-white sm:text-3xl">{start || record.Time || '-'}</p>
                        {end && <p className="text-xs text-[var(--crm-muted)] sm:text-sm">до {end}</p>}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-left xl:items-end xl:text-right">
                      <span className={classNames('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide', getStatusBadgeClasses(statusLabel))}>
                        {statusLabel || 'Без статуса'}
                      </span>
                      {record.Barber && (
                        <p className="text-xs text-[var(--crm-muted)] sm:text-sm">
                          Барбер: <span className="font-semibold text-white">{record.Barber}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-3 text-[13px] text-[var(--crm-text)] sm:text-sm">
                    {visibleColumns.length > 0 ? (
                      <div className="grid gap-2">
                        {visibleColumns.map((column) => (
                          <div key={`${key}-${column.key}`} className="crm-soft-panel flex items-center justify-between px-2 py-1.5">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--crm-muted)]">{column.label}</p>
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
                              className="text-left text-base font-semibold text-white hover:text-[color:var(--crm-primary)] sm:text-lg"
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
                              <span key={`${service}-${index}`} className="rounded-full border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-2 py-0.5 text-[11px] text-[var(--crm-text)] sm:text-xs">
                                {service}
                              </span>
                            ))}
                            {servicesList.length > 3 && <span className="text-[11px] text-[var(--crm-muted)]">+{servicesList.length - 3}</span>}
                          </div>
                        ) : (
                          <p className="text-xs text-[var(--crm-muted)]">Услуги не указаны</p>
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
        className={classNames('block w-full min-w-0 text-left font-semibold text-white hover:text-[color:var(--crm-primary)]', effectiveCompact ? 'truncate text-sm' : 'truncate')}
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
    'crm-soft-panel flex h-full cursor-pointer flex-col text-left transition hover:-translate-y-0.5 hover:bg-[color:var(--crm-surface-5)] focus:outline-none',
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
            {end && <p className="text-[11px] text-[var(--crm-muted)]">до {end}</p>}
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
              <span key={`${service}-${index}`} className="rounded-full border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-1.5 py-0.5 text-[10px] text-[var(--crm-text)]">
                {service}
              </span>
            ))}
            {servicesList.length > 2 && <span className="text-[10px] text-[var(--crm-muted)]">+{servicesList.length - 2}</span>}
          </div>
        ) : (
          <p className="mt-2 text-[11px] text-[var(--crm-muted)]">Услуги не указаны</p>
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
      <div className={classNames('border-b crm-table-divider', compact ? 'pb-2' : 'pb-3')}>
        <div
          className={classNames(
            'flex',
            compact
              ? 'flex-col gap-2'
              : 'items-start justify-between gap-3 xl:gap-3'
          )}
        >
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <p className={classNames('font-semibold text-white', compact ? 'text-lg' : 'text-2xl sm:text-3xl')}>{start || record.Time || '-'}</p>
              {end && <p className={classNames('text-[var(--crm-muted)]', compact ? 'text-[11px]' : 'text-xs sm:text-sm')}>до {end}</p>}
            </div>
          </div>
          <div
            className={classNames(
              'flex gap-2',
              compact ? 'flex-wrap items-center' : 'flex-col items-end text-right'
            )}
          >
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
              <p className={classNames('text-[var(--crm-muted)]', compact ? 'min-w-0 text-[11px]' : 'text-xs sm:text-sm')}>
                Барбер: <span className="font-semibold text-white">{record.Barber}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex min-w-0 flex-col gap-3 text-[13px] text-[var(--crm-text)] sm:text-sm">
        {customerNode}
        {servicesList.length ? (
          <div className="flex flex-wrap gap-2">
            {servicesList.slice(0, 3).map((service, index) => (
              <span
                key={`${service}-${index}`}
                className="rounded-full border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-2 py-0.5 text-[11px] text-[var(--crm-text)] sm:text-xs"
              >
                {service}
              </span>
            ))}
            {servicesList.length > 3 && <span className="text-[11px] text-[var(--crm-muted)]">+{servicesList.length - 3}</span>}
          </div>
        ) : (
          <p className="text-xs text-[var(--crm-muted)]">Услуги не указаны</p>
        )}
      </div>
    </div>
  );
};
const AppointmentsCalendarView = ({
  rows = [],
  searchTerm = '',
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
  const trimmedSearchTerm = normalizeText(searchTerm).trim();
  const isSearchMode = Boolean(trimmedSearchTerm);
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
  const headerRowRef = useRef(null);
  const headerInfoRef = useRef(null);
  const headerNavRef = useRef(null);
  const [isHeaderWrapped, setIsHeaderWrapped] = useState(false);
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
          'w-full rounded-[22px] bg-[rgba(0,191,175,0.26)] text-center text-[#eafffb] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_22px_rgba(0,0,0,0.18)] transition hover:bg-[rgba(0,191,175,0.32)] focus:outline-none',
          compact ? 'px-2 py-2' : 'p-3'
        )}
      >
        <p className={classNames('font-semibold text-[#f4fffd]', compact ? 'text-[11px]' : 'text-sm')}>{slot.Time || 'Свободное окно'}</p>
        {showBarber && slot.Barber && <p className={classNames('mt-1 text-[#c7f8f2]', compact ? 'text-[10px]' : 'text-xs')}>{slot.Barber}</p>}
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
  const searchResultDays = useMemo(() => {
    if (!isSearchMode) return [];
    return Array.from(
      new Map(
        datedRows.map((record) => {
          const key = getLocalISODateString(record._startDate);
          return [key, startOfLocalDay(record._startDate)];
        })
      ).values()
    ).sort((a, b) => a.getTime() - b.getTime());
  }, [datedRows, isSearchMode]);
  const availableSlotsByDate = useMemo(() => {
    const buckets = new Map();
    if (isSearchMode) return buckets;
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
  }, [isSearchMode, rows, schedules, viewDays]);
  const anchorDayEntries = useMemo(
    () =>
      buildCalendarDayEntries(
        rowsByDate.get(getLocalISODateString(anchorDate)) || [],
        availableSlotsByDate.get(getLocalISODateString(anchorDate)) || []
      ),
    [anchorDate, availableSlotsByDate, rowsByDate]
  );
  const headerTitle = useMemo(() => {
    if (isSearchMode) return 'Результаты поиска';
    if (safeViewMode === 'day') {
      if (isMobileViewport) {
        return new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })
          .format(anchorDate)
          .replace('.', '');
      }
      return new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(anchorDate);
    }
    if (safeViewMode === 'week') {
      const weekEnd = addDays(weekStart, 6);
      const sameMonth = weekStart.getMonth() === weekEnd.getMonth() && weekStart.getFullYear() === weekEnd.getFullYear();
      if (sameMonth) {
        const leftDay = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(weekStart);
        const rightWithMonth = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekEnd).replace('.', '');
        return `${leftDay} - ${rightWithMonth}`;
      }
      const left = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekStart).replace('.', '');
      const right = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(weekEnd).replace('.', '');
      return `${left} - ${right}`;
    }
    if (isMobileViewport) {
      return new Intl.DateTimeFormat('ru-RU', { month: 'short', year: 'numeric' }).format(anchorDate).replace('.', '');
    }
      return new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(anchorDate);
  }, [anchorDate, isMobileViewport, isSearchMode, safeViewMode, weekStart]);
  const headerMeta = useMemo(() => {
    if (isSearchMode) {
      const dayLabel = searchResultDays.length === 1 ? 'день' : searchResultDays.length >= 2 && searchResultDays.length <= 4 ? 'дня' : 'дней';
      return `${datedRows.length} записей • ${searchResultDays.length} ${dayLabel}`;
    }
    if (safeViewMode === 'day') {
      return `${rowsByDate.get(getLocalISODateString(anchorDate))?.length || 0} записей`;
    }
    if (safeViewMode === 'week') {
      return `${weekDays.reduce((sum, day) => sum + (rowsByDate.get(getLocalISODateString(day))?.length || 0), 0)} записей`;
    }
      return `${datedRows.filter((record) => isSameLocalMonth(record._startDate, anchorDate)).length} записей`;
  }, [anchorDate, datedRows, isSearchMode, rowsByDate, safeViewMode, searchResultDays.length, weekDays]);
  const mobileHeaderSummary = useMemo(
    () => (isMobileViewport ? { title: headerTitle, meta: headerMeta } : null),
    [headerMeta, headerTitle, isMobileViewport]
  );
  useLayoutEffect(() => {
    if (!isMobileViewport || typeof ResizeObserver === 'undefined') {
      setIsHeaderWrapped(false);
      return undefined;
    }
    const rowNode = headerRowRef.current;
    const infoNode = headerInfoRef.current;
    const navNode = headerNavRef.current;
    if (!rowNode || !infoNode || !navNode) return undefined;
    const measureWrap = () => {
      const infoTop = Math.round(infoNode.getBoundingClientRect().top);
      const navTop = Math.round(navNode.getBoundingClientRect().top);
      setIsHeaderWrapped(navTop > infoTop + 2);
    };
    const observer = new ResizeObserver(() => measureWrap());
    observer.observe(rowNode);
    observer.observe(infoNode);
    observer.observe(navNode);
    const frameId = requestAnimationFrame(measureWrap);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [headerMeta, headerTitle, isMobileViewport]);
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
      <div className="crm-soft-card p-3 sm:p-4">
        <div
          ref={headerRowRef}
          className={classNames(
            'flex gap-3',
            isMobileViewport ? 'flex-wrap items-center justify-between gap-y-2' : 'items-center justify-between'
          )}
        >
          <div ref={headerInfoRef} className={classNames('relative min-w-0', isMobileViewport ? 'flex-[1_1_auto]' : '')}>
            <button type="button" onClick={openDatePicker} className={classNames(isMobileViewport && isHeaderWrapped ? 'block w-full text-center' : 'text-left')}>
              {isMobileViewport && isHeaderWrapped ? (
                <p className="text-center text-sm text-white">
                  <span className="font-semibold">{mobileHeaderSummary?.title || ''}</span>{' '}
                  <span className="font-normal text-[var(--crm-muted)]">{mobileHeaderSummary?.meta || ''}</span>
                </p>
              ) : (
                <>
                  <p className={classNames('font-semibold text-white', isMobileViewport ? 'text-base leading-tight' : 'text-lg sm:text-xl')}>{headerTitle}</p>
                  <p className="text-xs text-[var(--crm-muted)] sm:text-sm">{headerMeta}</p>
                </>
              )}
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
          <div
            ref={headerNavRef}
            className={classNames(
              'crm-inline-panel inline-flex items-center gap-1 p-1',
              isMobileViewport
                ? isHeaderWrapped
                  ? 'w-full justify-between'
                  : 'ml-auto flex-none'
                : 'flex-shrink-0'
            )}
          >
            <button
              type="button"
              onClick={() => shiftCalendar('prev')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none"
              aria-label="Назад"
              title="Назад"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={jumpToToday}
              className={classNames(
                'inline-flex h-10 items-center justify-center rounded-full text-sm font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none',
                isMobileViewport ? 'min-w-0 px-3' : 'px-4'
              )}
            >
              Сегодня
            </button>
            <button
              type="button"
              onClick={() => shiftCalendar('next')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--crm-muted)] transition hover:bg-[color:var(--crm-surface-4)] hover:text-white focus:outline-none"
              aria-label="Вперед"
              title="Вперед"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {isSearchMode && (
        <div className={classNames('pb-2', isMobileViewport && 'overflow-x-auto')}>
          {searchResultDays.length ? (
            <div
              className={classNames(
                'grid gap-3',
                isMobileViewport ? 'grid-cols-1' : 'md:grid-cols-2 xl:grid-cols-3'
              )}
            >
              {searchResultDays.map((day) => {
                const dayKey = getLocalISODateString(day);
                const items = rowsByDate.get(dayKey) || [];
                return (
                  <section key={dayKey} className="crm-soft-card space-y-3 p-3 sm:p-4">
                    <button
                      type="button"
                      onClick={() => {
                        setCalendarDate?.(dayKey);
                        setViewMode?.('day');
                      }}
                      className="w-full text-center"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                        {`${new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(day).replace('.', '')} ${new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(day).replace('.', '')}`}
                      </p>
                    </button>
                    <div className="space-y-2">
                      {items.map((record) => (
                        <AppointmentCalendarCard
                          key={getRecordId(record) || `${dayKey}-${record.CustomerName}-${record.Time}`}
                          record={record}
                          onOpen={onOpen}
                          onOpenProfile={onOpenProfile}
                          compact={isMobileViewport && safeScaleMode === 'compact'}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="crm-inline-panel p-6 text-sm text-[var(--crm-muted)]">Ничего не найдено.</div>
          )}
        </div>
      )}
      {!isSearchMode && safeViewMode === 'day' && (
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
            <div className="crm-inline-panel p-6 text-sm text-[var(--crm-muted)]">На этот день записей нет.</div>
          )}
        </div>
      )}
      {!isSearchMode && safeViewMode === 'week' && (
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
                className={classNames(
                  scaleConfig.weekSectionMinHeight,
                  scaleConfig.weekSectionPadding,
                  'crm-soft-card space-y-3',
                  isToday
                    ? 'bg-[rgba(0,191,175,0.16)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_44px_rgba(4,7,21,0.26)]'
                    : ''
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCalendarDate?.(dayKey);
                    setViewMode?.('day');
                  }}
                  className="w-full text-center"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {`${new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(day).replace('.', '')} ${new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(day).replace('.', '')}`}
                  </p>
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
                  {!dayEntries.length && <div className="crm-inline-panel px-3 py-4 text-center text-xs text-[var(--crm-muted)]">Пусто</div>}
                </div>
              </section>
            );
          })}
          </div>
        </div>
      )}
      {!isSearchMode && safeViewMode === 'month' && (
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
                className={classNames(
                  scaleConfig.monthSectionMinHeight,
                  scaleConfig.monthSectionPadding,
                  'crm-soft-card space-y-2',
                  isToday
                    ? 'bg-[rgba(0,191,175,0.16)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_44px_rgba(4,7,21,0.26)]'
                    : ''
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCalendarDate?.(dayKey);
                      setViewMode?.('day');
                    }}
                    className="text-left transition hover:text-[color:var(--crm-primary)]"
                  >
                    <p className={classNames('text-sm font-semibold', isCurrentMonth ? 'text-white' : 'text-[var(--crm-muted)]')}>{day.getDate()}</p>
                  </button>
                  {!!dayEntries.length && <span className="rounded-full bg-[color:var(--crm-surface-5)] px-2 py-0.5 text-[10px] text-[var(--crm-text)]">{dayEntries.length}</span>}
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
                      className="text-xs text-[color:var(--crm-primary)] hover:text-white"
                    >
                      + еще {dayEntries.length - 3}
                    </button>
                  )}
                  {!dayEntries.length && <div className="crm-inline-panel px-3 py-4 text-center text-xs text-[var(--crm-muted)]">-</div>}
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

