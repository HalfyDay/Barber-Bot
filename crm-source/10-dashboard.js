const DashboardView = ({
  data,
  onOpenAppointment,
  onOpenProfile,
  onCreateAppointment,
  onNavigateTable,
  onQuickUpdateStatus,
  onDeleteAppointment,
  availableTables = [],
  currentUser = null,
  currentBarber = null,
  liveUpdatedAt = null,
  liveStatus = 'unknown',
}) => {
  if (!data) return <LoadingState />;
  const [pendingStatusId, setPendingStatusId] = useState(null);
  const nowTs = useNowTick(30000);
  const stats = data.stats || {};
  const hasExplicitUpcoming = Array.isArray(data.appointments?.upcoming);
  const hasExplicitOverdue = Array.isArray(data.appointments?.overdue);
  const useExplicitOverdue = hasExplicitOverdue;
  const activeRaw = Array.isArray(data.appointments?.active) ? data.appointments.active : [];
  const upcomingRaw = hasExplicitUpcoming ? data.appointments.upcoming : activeRaw;
  const overdueRaw = useExplicitOverdue ? data.appointments.overdue : activeRaw;
  const isStaffView = currentUser?.role === ROLE_STAFF;
  const restrictUpcomingToStaff = isStaffView;
  const staffNameSet = useMemo(() => {
    if (!restrictUpcomingToStaff) return null;
    const pool = [
      currentUser?.barberName,
      currentUser?.displayName,
      currentUser?.username,
      currentBarber?.name,
      currentBarber?.nickname,
      currentBarber?.login,
    ];
    const normalized = pool
      .map((value) => canonicalizeName(value).toLowerCase())
      .filter(Boolean);
    return normalized.length ? new Set(normalized) : null;
  }, [
    restrictUpcomingToStaff,
    currentUser?.barberName,
    currentUser?.displayName,
    currentUser?.username,
    currentBarber?.name,
    currentBarber?.nickname,
    currentBarber?.login,
  ]);
  const filterAppointmentsForStaff = useCallback((appointments = []) => {
    if (!restrictUpcomingToStaff || !staffNameSet) return appointments;
    return appointments.filter((appt) => {
      const candidate = canonicalizeName(appt.Barber).toLowerCase();
      return candidate && staffNameSet.has(candidate);
    });
  }, [restrictUpcomingToStaff, staffNameSet]);
  const upcomingSource = useMemo(
    () => filterAppointmentsForStaff(upcomingRaw),
    [filterAppointmentsForStaff, upcomingRaw]
  );
  const overdueSource = useMemo(
    () => filterAppointmentsForStaff(overdueRaw),
    [filterAppointmentsForStaff, overdueRaw]
  );
  const normalizedUpcoming = useMemo(
    () =>
      upcomingSource.map((appt) => ({
        ...appt,
        Status: normalizeStatusValue(appt.Status),
        startDate: getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime),
        endDate: getAppointmentEndDate(appt.Date, appt.Time, appt.startDateTime),
      })),
    [upcomingSource]
  );
  const normalizedOverdue = useMemo(
    () =>
      overdueSource.map((appt) => ({
        ...appt,
        Status: normalizeStatusValue(appt.Status),
        startDate: getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime),
        endDate: getAppointmentEndDate(appt.Date, appt.Time, appt.startDateTime),
      })),
    [overdueSource]
  );
  const upcomingList = useMemo(() => {
    return normalizedUpcoming
      .filter((appt) => shouldDisplayAppointment(appt, nowTs))
      .sort((a, b) => {
        const left = a.startDate?.getTime() || Number.MAX_SAFE_INTEGER;
        const right = b.startDate?.getTime() || Number.MAX_SAFE_INTEGER;
        return left - right;
      })
      .slice(0, 12);
  }, [normalizedUpcoming, nowTs]);
  const overdueList = useMemo(() => {
    if (useExplicitOverdue) {
      return normalizedOverdue
        .sort((a, b) => (b.endDate?.getTime() || 0) - (a.endDate?.getTime() || 0))
        .slice(0, 12);
    }
    return normalizedOverdue
      .map((appt) => {
        const startTs = appt.startDate?.getTime() || null;
        const endTs = appt.endDate?.getTime() || startTs;
        return { ...appt, startTs, endTs };
      })
      .filter((appt) => isActiveAppointmentStatus(appt.Status) && appt.endTs && appt.endTs < nowTs)
      .sort((a, b) => (b.endTs || 0) - (a.endTs || 0))
      .slice(0, 12)
      .map(({ startTs, endTs, ...rest }) => rest);
  }, [useExplicitOverdue, normalizedOverdue, nowTs]);
  const handleStatusShortcut = useCallback(
    async (appointment, status) => {
      if (!appointment || !status) return;
      const apptId = getRecordId(appointment);
      if (!apptId) return;
      const pendingKey = String(apptId);
      if (typeof onQuickUpdateStatus !== 'function') {
        onOpenAppointment?.(appointment, { allowDelete: true });
        return;
      }
      setPendingStatusId(pendingKey);
      try {
        await onQuickUpdateStatus(appointment, status);
      } catch (error) {
        console.error('Quick status update failed', error);
      } finally {
        setPendingStatusId(null);
      }
    },
    [onQuickUpdateStatus, onOpenAppointment]
  );
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
  const showUpcomingBarber = useMemo(() => {
    const uniqueBarbers = new Set(
      upcomingList
        .map((appt) => canonicalizeName(appt.Barber))
        .filter(Boolean)
    );
    return uniqueBarbers.size > 1;
  }, [upcomingList]);
  const showOverdueBarber = useMemo(() => {
    const uniqueBarbers = new Set(
      overdueList
        .map((appt) => canonicalizeName(appt.Barber))
        .filter(Boolean)
    );
    return uniqueBarbers.size > 1;
  }, [overdueList]);
  const upcomingActions = onCreateAppointment ? (
    <button
      onClick={onCreateAppointment}
      className="crm-action-btn px-3 py-2 text-sm whitespace-nowrap sm:px-4"
    >
      <span className="sm:hidden">+ Запись</span>
      <span className="hidden sm:inline">+ Новая запись</span>
    </button>
  ) : null;
  const handleStatNavigate = useCallback(
    (target) => {
      if (typeof onNavigateTable !== 'function' || !target) return;
      const allowedTables = Array.isArray(availableTables) ? availableTables.filter(Boolean) : [];
      const preferredTable = typeof target === 'string' ? target : target.tableId;
      if (!preferredTable) return;
      if (allowedTables.length && !allowedTables.includes(preferredTable)) {
        onNavigateTable(allowedTables[0]);
        return;
      }
      onNavigateTable(target);
    },
    [onNavigateTable, availableTables]
  );
  const resolveStatHandler = (tableId) =>
    typeof onNavigateTable === 'function' ? () => handleStatNavigate(tableId) : undefined;
  const getDashboardStatusDotClass = useCallback((status) => {
    switch (normalizeStatusValue(status)) {
      case STATUS_ACTIVE:
        return 'bg-[color:var(--crm-primary)]';
      case STATUS_DONE:
        return 'bg-[color:var(--crm-muted)]';
      case STATUS_CANCELLED:
        return 'bg-[color:var(--crm-error-container)]';
      case STATUS_NO_SHOW:
        return 'bg-[color:var(--crm-highlight)]';
      default:
        return 'bg-[var(--crm-muted)]';
    }
  }, []);
  return (
    <div className="space-y-6 overflow-x-hidden">
      <div className="crm-section-card p-3 sm:p-4">
        <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
          {isStaffView ? (
            <>
              <StatCard compact label="Всего клиентов" value={stats.totalUsers ?? 0} onClick={resolveStatHandler('Users')} />
              <StatCard
                compact
                label="Активных записей"
                value={stats.activeAppointments ?? 0}
                accent="text-[color:var(--crm-primary)]"
                onClick={resolveStatHandler('Appointments')}
              />
              <StatCard
                compact
                label="Заработано за месяц"
                value={stats.earningsMonth == null ? '—' : formatCurrencyValue(stats.earningsMonth)}
                accent="text-[color:var(--crm-highlight)]"
                onClick={resolveStatHandler('Revenue')}
              />
              <StatCard
                compact
                label="Мой уровень"
                value={stats.positionName || '—'}
                accent="text-[var(--crm-text)]"
              />
            </>
          ) : (
            <>
              <StatCard
                compact
                label="Постоянные клиенты"
                value={stats.recurringClients ?? 0}
                onClick={resolveStatHandler('Users')}
              />
              <StatCard
                compact
                label="Подтверждено за месяц"
                value={stats.confirmedMonth ?? 0}
                accent="text-[color:var(--crm-highlight)]"
                onClick={
                  typeof onNavigateTable === 'function'
                    ? () =>
                        handleStatNavigate({
                          tableId: 'Appointments',
                          calendarView: 'month',
                          appointmentStatusMode: 'past',
                        })
                    : undefined
                }
              />
              <StatCard
                compact
                label="На сегодня"
                value={stats.todaysAppointments ?? 0}
                accent="text-[#ff617f]"
                onClick={resolveStatHandler('Appointments')}
              />
              <StatCard
                compact
                label="Доход за месяц"
                value={stats.incomeMonth == null ? '—' : formatCurrencyValue(stats.incomeMonth)}
                accent="text-[color:var(--crm-highlight)]"
                onClick={resolveStatHandler('Revenue')}
              />
            </>
          )}
        </div>
      </div>
      <SectionCard title="Ближайшие записи" actions={upcomingActions}>
        {groupedUpcoming.length === 0 ? (
          <p className="text-[var(--crm-muted)]">Нет ближайших записей.</p>
        ) : (
          <div className="space-y-5">
            {groupedUpcoming.map((group) => (
              <div key={group.key} className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--crm-muted)]">
                  <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                  {group.label}
                  <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                </div>
                <div className="grid gap-3 xl:grid-cols-2">
                  {group.items.map((appt) => {
                    const inProgress = isAppointmentOngoing(appt, nowTs);
                    const cardProps = {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => onOpenAppointment?.(appt, { allowDelete: true }),
                      onKeyDown: (event) => event.key === 'Enter' && onOpenAppointment?.(appt, { allowDelete: true }),
                      className: classNames(
                        'group upcoming-card crm-soft-card relative w-full cursor-pointer overflow-hidden p-3.5 text-left transition hover:-translate-y-0.5 hover:border-[color:var(--crm-primary)]/70 focus:outline-none focus:ring-2 focus:ring-[color:var(--crm-primary)] sm:p-4',
                        inProgress && 'border-[color:var(--crm-primary)]/80 !bg-[color:var(--crm-primary-container)] shadow-[0_0_25px_rgba(0,191,175,0.18)] hover:!bg-[color:var(--crm-primary-container)]'
                      ),
                    };
                    const { start, end } = parseTimeRangeParts(appt.Time);
                    const statusLabel = normalizeStatusValue(appt.Status);
                    const servicesList = parseMultiValue(appt.Services);
                    const apptId = String(
                      getRecordId(appt) || `${group.key || appt.Date || 'no-date'}-${appt.Time || 'no-time'}-${appt.CustomerName || 'no-name'}`
                    );
                    const isPending = pendingStatusId === apptId;
                    return (
                      <div key={appt.id || `${group.key}-${appt.CustomerName}-${appt.Time}`} {...cardProps}>
                        <span className={classNames('absolute right-4 top-4 h-2.5 w-2.5 rounded-full sm:hidden', getDashboardStatusDotClass(statusLabel))} />
                        <div className="flex flex-wrap items-start justify-between gap-2.5">
                          <div className="space-y-1.5 pr-4 sm:pr-0">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--crm-muted)]">
                              {formatDateBadgeLabel(appt.Date)}
                            </p>
                            <div className="flex items-baseline gap-2.5">
                              <p className="text-[2rem] font-bold leading-none text-white sm:text-[2.35rem]">{start || '—'}</p>
                              {end && <p className="text-sm text-[var(--crm-muted)] sm:text-base">до {end}</p>}
                            </div>
                          </div>
                          <div className="hidden flex-col items-end gap-2 text-right sm:flex">
                            <span
                              className={classNames(
                                'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs',
                                getStatusBadgeClasses(statusLabel),
                              )}
                            >
                              {statusLabel || 'Без статуса'}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 space-y-3 text-[13px] text-[var(--crm-text)] sm:mt-3.5 sm:space-y-3.5 sm:text-sm">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-2 min-w-0">
                              {appt.CustomerName ? (
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    onOpenProfile?.(appt.CustomerName);
                                  }}
                                  className="text-left text-[1.05rem] font-semibold leading-tight text-white hover:text-[color:var(--crm-primary)] sm:text-[1.15rem]"
                                >
                                  {appt.CustomerName}
                                </button>
                              ) : (
                                <p className="text-[1.05rem] font-semibold leading-tight text-white sm:text-[1.15rem]">Без имени</p>
                              )}
                              {showUpcomingBarber && appt.Barber ? (
                                <p className="text-[13px] leading-tight text-[var(--crm-muted)] sm:text-sm">
                                  <span className="font-semibold text-white">{appt.Barber}</span>
                                </p>
                              ) : null}
                              {inProgress && servicesList.length ? (
                                <div className="flex flex-wrap gap-1.5 sm:hidden">
                                  {servicesList.map((service, index) => (
                                    <span
                                      key={`${service}-${index}`}
                                      className="rounded-full border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-2.5 py-0.5 text-[10px] text-[var(--crm-text)]"
                                    >
                                      {service}
                                    </span>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                            {inProgress ? (
                              <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-2 sm:flex sm:w-auto sm:flex-nowrap sm:items-center sm:justify-end sm:gap-2.5">
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    handleStatusShortcut(appt, STATUS_DONE);
                                  }}
                                  onKeyDown={(event) => event.stopPropagation()}
                                  disabled={isPending}
                                  className={classNames(
                                    'crm-action-btn w-full justify-center px-3.5 py-2.5 text-sm sm:w-auto sm:min-w-[112px] sm:px-4 sm:py-2 sm:text-sm',
                                    isPending && 'cursor-wait opacity-70'
                                  )}
                                >
                                  {isPending ? 'Сохраняю...' : 'Выполнена'}
                                </button>
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    handleStatusShortcut(appt, STATUS_NO_SHOW);
                                  }}
                                  onKeyDown={(event) => event.stopPropagation()}
                                  disabled={isPending}
                                  className={classNames(
                                    'crm-tonal-btn w-full justify-center px-3.5 py-2.5 text-sm text-rose-200 sm:w-auto sm:min-w-[112px] sm:px-4 sm:py-2 sm:text-sm',
                                    isPending && 'cursor-wait opacity-70'
                                  )}
                                >
                                  {isPending ? 'Сохраняю...' : 'Неявка'}
                                </button>
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    onDeleteAppointment?.(appt);
                                  }}
                                  onKeyDown={(event) => event.stopPropagation()}
                                  className="crm-ghost-btn inline-flex h-[46px] w-[46px] min-h-0 items-center justify-center rounded-full p-0 text-rose-200 transition hover:bg-[rgba(96,34,46,0.74)] hover:text-white focus:outline-none focus:ring-0 focus-visible:ring-0 sm:h-[42px] sm:w-[42px]"
                                  aria-label="Удалить запись"
                                  title="Удалить запись"
                                >
                                  <IconTrash className="h-4 w-4" />
                                </button>
                              </div>
                            ) : null}
                          </div>
                          {servicesList.length ? (
                            <div className={classNames('flex flex-wrap gap-1.5', inProgress && 'hidden sm:flex')}>
                              {servicesList.map((service, index) => (
                                <span
                                  key={`${service}-${index}`}
                                className="rounded-full border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-2.5 py-0.5 text-[10px] text-[var(--crm-text)] sm:px-3 sm:py-1 sm:text-[11px]"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-[var(--crm-muted)] sm:text-sm">Нет выбранных услуг</p>
                        )}
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
      <SectionCard title="Прошедшие">
        {overdueList.length === 0 ? (
          <p className="text-[var(--crm-muted)]">Нет активных записей, время которых уже прошло.</p>
        ) : (
          <div className="grid gap-3 xl:grid-cols-2">
            {overdueList.map((appt) => {
              const apptId = String(
                getRecordId(appt) || `${appt.Date || 'no-date'}-${appt.Time || 'no-time'}-${appt.CustomerName || 'no-name'}`
              );
              const { start, end } = parseTimeRangeParts(appt.Time);
              const timeLabel = [start || '—', end ? `до ${end}` : ''].filter(Boolean).join(' ');
              const statusLabel = normalizeStatusValue(appt.Status);
              const isPending = pendingStatusId === apptId;
              const handleOpen = () => onOpenAppointment?.(appt, { allowDelete: true });
              return (
                <div
                  key={apptId}
                  role="button"
                  tabIndex={0}
                  onClick={handleOpen}
                  onKeyDown={(event) => event.key === 'Enter' && handleOpen()}
                  className="crm-soft-card relative rounded-[24px] bg-[rgba(78,28,38,0.6)] p-4 transition hover:-translate-y-0.5 hover:bg-[rgba(96,34,46,0.74)] focus:outline-none focus:ring-2 focus:ring-[rgba(132,48,64,0.22)]"
                >
                  <span className={classNames('absolute right-4 top-4 h-2.5 w-2.5 rounded-full sm:hidden', getDashboardStatusDotClass(statusLabel))} />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 pr-4 sm:pr-0">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[#f0c8ce]/80">{formatDateBadgeLabel(appt.Date)}</p>
                      <p className="text-xl font-semibold text-white sm:text-2xl">{timeLabel || 'Время не указано'}</p>
                    </div>
                    <span
                      className={classNames(
                        'hidden items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:inline-flex sm:text-xs',
                        getStatusBadgeClasses(statusLabel)
                      )}
                    >
                      {statusLabel || 'Без статуса'}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-white">{appt.CustomerName || 'Без имени'}</p>
                      {showOverdueBarber && appt.Barber ? (
                      <p className="text-sm text-[var(--crm-text)]">
                          <span className="font-semibold text-white">{appt.Barber}</span>
                        </p>
                      ) : null}
                    </div>
                    <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-2 sm:flex sm:w-auto sm:flex-nowrap sm:items-center sm:justify-end sm:gap-3">
                      <button
	                        type="button"
	                        onClick={(event) => {
	                          event.preventDefault();
	                          event.stopPropagation();
	                          handleStatusShortcut(appt, STATUS_DONE);
	                        }}
	                        onKeyDown={(event) => event.stopPropagation()}
	                        disabled={isPending}
	                        className={classNames(
	                          'crm-action-btn w-full justify-center px-4 py-3 text-sm sm:w-auto sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm',
	                          isPending && 'cursor-wait opacity-70'
	                        )}
                      >
                        {isPending ? 'Сохраняю...' : 'Выполнена'}
                      </button>
	                      <button
	                        type="button"
	                        onClick={(event) => {
	                          event.preventDefault();
	                          event.stopPropagation();
	                          handleStatusShortcut(appt, STATUS_NO_SHOW);
	                        }}
	                        onKeyDown={(event) => event.stopPropagation()}
	                        disabled={isPending}
	                        className={classNames(
	                          'crm-tonal-btn w-full justify-center px-4 py-3 text-sm text-rose-200 sm:w-auto sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm',
	                          isPending && 'cursor-wait opacity-70'
	                        )}
                      >
                        {isPending ? 'Сохраняю...' : 'Неявка'}
                      </button>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          onDeleteAppointment?.(appt);
                        }}
                        onKeyDown={(event) => event.stopPropagation()}
                        className="crm-ghost-btn inline-flex h-[46px] w-[46px] min-h-0 items-center justify-center rounded-full p-0 text-rose-200 transition hover:bg-[rgba(96,34,46,0.74)] hover:text-white focus:outline-none focus:ring-0 focus-visible:ring-0 sm:h-[42px] sm:w-[42px]"
                        aria-label="Удалить запись"
                        title="Удалить запись"
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>
    </div>
  );
};
const MAX_AVATAR_UPLOAD_BYTES = 5 * 1024 * 1024;
const TARGET_IMAGE_UPLOAD_BYTES = 700 * 1024;
const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
    reader.readAsDataURL(file);
  });
const estimateDataUrlBytes = (dataUrl) => {
  const normalized = typeof dataUrl === 'string' ? dataUrl : '';
  const [, base64Payload = ''] = normalized.split(',', 2);
  if (!base64Payload) return 0;
  const padding = (base64Payload.match(/=+$/) || [''])[0].length;
  return Math.max(0, Math.floor((base64Payload.length * 3) / 4) - padding);
};
const getDataUrlMimeType = (dataUrl) => {
  const normalized = typeof dataUrl === 'string' ? dataUrl : '';
  const match = normalized.match(/^data:([^;,]+)[;,]/i);
  return match?.[1]?.toLowerCase() || '';
};
const replaceFileExtension = (name, extension) => {
  const normalizedName = normalizeText(name || '');
  const safeExtension = extension.startsWith('.') ? extension : `.${extension}`;
  if (!normalizedName) return `image-${Date.now()}${safeExtension}`;
  const nextName = normalizedName.replace(/\.[^./\\]+$/, '');
  return `${nextName || `image-${Date.now()}`}${safeExtension}`;
};
const createCanvasDataUrl = (canvas, mimeType, quality) =>
  new Promise((resolve, reject) => {
    if (!canvas?.toBlob) {
      try {
        resolve(canvas.toDataURL(mimeType, quality));
      } catch (error) {
        reject(error);
      }
      return;
    }
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Не удалось подготовить изображение.'));
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Не удалось прочитать оптимизированное изображение.'));
        reader.readAsDataURL(blob);
      },
      mimeType,
      quality,
    );
  });
const CARD_CANVAS_WIDTH = 1360;
const CARD_CANVAS_HEIGHT = 768;
const CARD_BACKGROUND_IMAGE = resolveAssetUrl('card/background.jpg');
const CARD_NAME_COLOR = '#009b9f';
const CARD_TEXT_COLOR = '#1f1b16';
const TITLE_FONT_SIZE = 200;
const TITLE_FONT_WEIGHT = 900;
const TITLE_FONT_FAMILY = '\"Manrope\", \"Inter\", sans-serif';
const TITLE_FONT = `${TITLE_FONT_WEIGHT} ${TITLE_FONT_SIZE}px ${TITLE_FONT_FAMILY}`;
const TITLE_STROKE_WIDTH = 6;
const TITLE_BASE_Y = 194; // tweak to move the big name vertically
const TITLE_CENTER_OFFSET = 40; // tweak to shift the center horizontally
const CARD_PHRASE_BG = resolveAssetUrl('card/Favorite_phrase.png');
const CARD_PHOTO_BG = resolveAssetUrl('card/Barber_photo.png');
const CARD_MODE_GENERATED = 'generated';
const CARD_MODE_CUSTOM_IMAGE = 'custom-image';
const stripEmoji = (value) => normalizeText(value).replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\u200d\ufe0f]/gu, '');
const sanitizeCardText = (value) => stripEmoji(value).replace(/\r\n/g, '\n');
const normalizeCardMode = (value) => (value === CARD_MODE_CUSTOM_IMAGE ? CARD_MODE_CUSTOM_IMAGE : CARD_MODE_GENERATED);
const loadImageElement = (src) =>
  new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('Путь до изображения не указан.'));
      return;
    }
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Не удалось загрузить изображение.'));
    image.src = src;
  });
const optimizeImageForUpload = async (
  dataUrl,
  {
    name = '',
    maxBytes = TARGET_IMAGE_UPLOAD_BYTES,
    maxDimension = 1600,
    preserveAlpha = true,
  } = {},
) => {
  if (!dataUrl || typeof document === 'undefined') {
    return { dataUrl, name };
  }
  try {
    if (estimateDataUrlBytes(dataUrl) <= maxBytes) {
      const mimeType = getDataUrlMimeType(dataUrl) || 'image/png';
      const extension =
        mimeType === 'image/webp' ? '.webp' : mimeType === 'image/jpeg' ? '.jpg' : '.png';
      return { dataUrl, name: replaceFileExtension(name, extension) };
    }
    const image = await loadImageElement(dataUrl);
    const canvas = document.createElement('canvas');
    const ratio = Math.min(1, maxDimension / Math.max(image.width || 1, image.height || 1));
    let width = Math.max(1, Math.round((image.width || 1) * ratio));
    let height = Math.max(1, Math.round((image.height || 1) * ratio));
    let quality = 0.9;
    let attempts = 0;
    const preferredMime = preserveAlpha ? 'image/webp' : 'image/jpeg';
    let best = dataUrl;
    while (attempts < 7) {
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);
      const candidate = await createCanvasDataUrl(canvas, preferredMime, quality);
      best = candidate;
      if (estimateDataUrlBytes(candidate) <= maxBytes) {
        return {
          dataUrl: candidate,
          name: replaceFileExtension(name, preferredMime === 'image/jpeg' ? '.jpg' : '.webp'),
        };
      }
      quality = Math.max(0.55, quality - 0.1);
      width = Math.max(480, Math.round(width * 0.85));
      height = Math.max(480, Math.round(height * 0.85));
      attempts += 1;
    }
    return {
      dataUrl: best,
      name: replaceFileExtension(name, preferredMime === 'image/jpeg' ? '.jpg' : '.webp'),
    };
  } catch (error) {
    console.warn('Image upload optimization skipped', error);
    return { dataUrl, name };
  }
};
const drawCoverImage = (ctx, image, x, y, width, height) => {
  if (!image || !width || !height) return;
  const ratio = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * ratio;
  const drawHeight = image.height * ratio;
  const offsetX = x + (width - drawWidth) / 2;
  const offsetY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};
const drawRoundedRectPath = (ctx, x, y, width, height, radius = 24) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r);
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
  ctx.arcTo(x, y + height, x, y + height - r, r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
};
const createRoughOutlineFilter = (color = '', size = 6, jitter = 1.1) => {
  if (!color || size <= 0) return '';
  const offsets = [
    { x: 0, y: 0, blur: 0.65 },
    { x: 0.9, y: 0.4, blur: 0.85 },
    { x: -0.8, y: 0.7, blur: 0.75 },
    { x: 1, y: -0.6, blur: 0.8 },
    { x: -1, y: -0.5, blur: 0.7 },
    { x: 0.6, y: -1, blur: 0.9 },
  ];
  const unit = Math.max(size * 0.32, 0.5);
  const blurBase = Math.max(size * 0.22, 0.5);
  return offsets
    .map(({ x, y, blur }) => {
      const ox = (x * unit * jitter).toFixed(2);
      const oy = (y * unit * jitter).toFixed(2);
      const ob = Math.max(blur * blurBase, 0.4).toFixed(2);
      return `drop-shadow(${ox}px ${oy}px ${ob}px ${color})`;
    })
    .join(' ');
};
const drawRoundedImage = (
  ctx,
  image,
  x,
  y,
  width,
  height,
  radius = 32,
  filter = 'saturate(1.05) contrast(1.05)',
  options = {},
) => {
  if (!image) return;
  const { outlineColor = '', outlineSize = 6, outlineRoughness = 1.1 } = options;
  const outlineFilter = outlineColor ? createRoughOutlineFilter(outlineColor, outlineSize, outlineRoughness) : '';
  ctx.save();
  drawRoundedRectPath(ctx, x, y, width, height, radius);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
  ctx.shadowBlur = 26;
  ctx.shadowOffsetY = 18;
  ctx.clip();
  const composedFilter = [outlineFilter, filter].filter(Boolean).join(' ');
  ctx.filter = composedFilter || 'none';
  drawCoverImage(ctx, image, x, y, width, height);
  ctx.restore();
};
const wrapTextLines = (ctx, text, maxWidth) => {
  const source = normalizeText(text).replace(/\r\n/g, '\n').replace(/\t/g, '    ');
  if (!source) return [];
  const lines = [];
  const paragraphs = source.split('\n');
  paragraphs.forEach((paragraph, index) => {
    const tokens = paragraph.match(/\s+|\S+/g) || [''];
    let current = '';
    tokens.forEach((token) => {
      const next = current + token;
      if (ctx.measureText(next).width <= maxWidth || !current.trim()) {
        current = next;
        return;
      }
      if (ctx.measureText(token).width > maxWidth && !current.trim()) {
        let chunk = '';
        for (const char of token) {
          const candidate = chunk + char;
          if (ctx.measureText(candidate).width <= maxWidth || !chunk) {
            chunk = candidate;
          } else {
            lines.push(chunk);
            chunk = char;
          }
        }
        current = chunk;
        return;
      }
      if (current) lines.push(current);
      current = token.trimStart();
    });
    lines.push(current);
    if (index < paragraphs.length - 1) {
      lines.push('');
    }
  });
  return lines;
};
const ensureDisplayFonts = async () => {
  if (!document?.fonts?.load) return;
  try {
    await Promise.all([
      document.fonts.load(TITLE_FONT),
      document.fonts.load(`${TITLE_FONT_WEIGHT} ${TITLE_FONT_SIZE}px \"Manrope\"`),
      document.fonts.load('800 34px \"Manrope\"'),
      document.fonts.load('700 32px \"Manrope\"'),
      document.fonts.load('600 30px \"Manrope\"'),
    ]);
    await document.fonts.ready;
  } catch (error) {
    console.warn('Font load skipped:', error);
  }
};
const buildCardFileName = (name = '') => {
  const normalized = normalizeText(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  const base = normalized || 'barber-card';
  return `${base}-${Date.now()}.jpg`;
};
const BarberAvatarPicker = ({
  value,
  onChange,
  loadOptions,
  onUpload,
  onCardUpload,
  onDelete,
  onRegisterCardSaver,
  initialName = '',
  initialDescription = '',
  initialCardTitle = '',
  initialCardDescription = '',
  initialCardPhrase = '',
  initialPhotoGrayscale = true,
  initialPhotoOutline = true,
  cardMode = CARD_MODE_GENERATED,
  cardImageUrl = '',
  onCardFieldsChange,
  onCardModeChange,
  onCardImageChange,
}) => {
  const [avatarOptions, setAvatarOptions] = useState(() => avatarOptionsCache || []);
  const [loading, setLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState('');
  const lastSavedPreviewRef = useRef(null);
  const [cardFields, setCardFields] = useState(() => ({
    name: sanitizeCardText(initialCardTitle || initialName),
    description: sanitizeCardText(initialCardDescription || initialDescription),
    phrase: sanitizeCardText(initialCardPhrase || ''),
  }));
  const [selectedCardMode, setSelectedCardMode] = useState(() => normalizeCardMode(cardMode));
  const [cardPhoto, setCardPhoto] = useState('');
  const [cardPreview, setCardPreview] = useState('');
  const cardPreviewRef = useRef('');
  const customCardInputRef = useRef(null);
  const [customCardImage, setCustomCardImage] = useState(() => normalizeImagePath(cardImageUrl || ''));
  const [photoGrayscale, setPhotoGrayscale] = useState(() => initialPhotoGrayscale !== false);
  const [photoOutlineEnabled, setPhotoOutlineEnabled] = useState(() => initialPhotoOutline !== false);
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState('');
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const canvasRef = useRef(null);
  const normalizedValue = useMemo(() => normalizeImagePath(value), [value]);
  useEffect(() => {
    if (!value || typeof onChange !== 'function') return;
    const normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      onChange(normalized);
    }
  }, [value, onChange]);
  useEffect(() => {
    setCardFields({
      name: sanitizeCardText(initialCardTitle || initialName),
      description: sanitizeCardText(initialCardDescription || initialDescription),
      phrase: sanitizeCardText(initialCardPhrase || ''),
    });
    setPhotoGrayscale(initialPhotoGrayscale !== false);
    setPhotoOutlineEnabled(initialPhotoOutline !== false);
  }, [
    initialName,
    initialDescription,
    initialCardTitle,
    initialCardDescription,
    initialCardPhrase,
    initialPhotoGrayscale,
    initialPhotoOutline,
  ]);
  useEffect(() => {
    onCardFieldsChange?.({
      cardTitle: cardFields.name,
      cardDescription: cardFields.description,
      cardPhrase: cardFields.phrase,
      cardPhotoGrayscale: photoGrayscale,
      cardPhotoOutline: photoOutlineEnabled,
    });
  }, [cardFields, photoGrayscale, photoOutlineEnabled, onCardFieldsChange]);
  useEffect(() => {
    setSelectedCardMode(normalizeCardMode(cardMode));
  }, [cardMode]);
  useEffect(() => {
    const normalized = normalizeImagePath(cardImageUrl || '');
    setCustomCardImage(normalized);
    if (normalized && selectedCardMode === CARD_MODE_CUSTOM_IMAGE) {
      cardPreviewRef.current = normalized;
      setCardPreview(normalized);
      lastSavedPreviewRef.current = normalized;
    }
  }, [cardImageUrl, selectedCardMode]);
  useEffect(() => {
    setCardPhoto((prev) => {
      const nextPhoto = normalizedValue && !normalizedValue.endsWith('background.jpg') ? normalizedValue : '';
      return nextPhoto === prev ? prev : nextPhoto;
    });
  }, [normalizedValue]);
  const availableOptions = useMemo(() => {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue, ...avatarOptions];
  }, [avatarOptions, normalizedValue]);
  const requestAvatarOptions = useCallback(async () => {
    const loader = typeof loadOptions === 'function' ? loadOptions : fetchAvatarOptions;
    const assetsPayload = await loader();
    const assets = Array.isArray(assetsPayload)
      ? assetsPayload
      : Array.isArray(assetsPayload?.images)
        ? assetsPayload.images
        : [];
    return Array.from(new Set(assets.map((asset) => normalizeImagePath(asset)).filter(Boolean)));
  }, [loadOptions]);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    requestAvatarOptions()
      .then((assets) => {
        if (!isMounted) return;
        avatarOptionsCache = assets;
        setAvatarOptions(assets);
      })
      .catch((error) => {
        if (!isMounted) return;
        console.error('Avatar load error', error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [requestAvatarOptions]);
  const refreshAvatarOptions = useCallback(async () => {
    setLoading(true);
    try {
      const assets = await requestAvatarOptions();
      avatarOptionsCache = assets;
      setAvatarOptions(assets);
      return assets;
    } finally {
      setLoading(false);
    }
  }, [requestAvatarOptions]);
  const applyAvatarValue = useCallback(
    (nextValue) => {
      const normalized = normalizeImagePath(nextValue || '');
      const safePhoto = normalized && !normalized.endsWith('background.jpg') ? normalized : '';
      setCardPhoto(safePhoto);
      onChange?.(normalized);
    },
    [onChange],
  );
  const handleUploadFile = useCallback(
    async (file) => {
      if (!file || typeof onUpload !== 'function') return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Файл должен быть изображением.');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setActionError('Файл больше 5 МБ.');
        return;
      }
      setActionError('');
      setActionBusy(true);
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const optimizedUpload = await optimizeImageForUpload(dataUrl, {
          name: file.name,
          preserveAlpha: true,
        });
        const result = await onUpload({ name: optimizedUpload.name, data: optimizedUpload.dataUrl });
        await refreshAvatarOptions();
        const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
        applyAvatarValue(uploadedPath);
        setShowGallery(true);
      } catch (error) {
        console.error('Avatar upload error', error);
        setActionError(error.message || 'Не удалось загрузить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onUpload, refreshAvatarOptions, applyAvatarValue],
  );
  const handleFileInputChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (file) {
        handleUploadFile(file);
      }
    },
    [handleUploadFile],
  );
  const handlePhotoFileChange = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Файл должен быть изображением.');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setRenderError('Максимальный размер: 5 МБ, выберите файл поменьше.');
        return;
      }
      setRenderError('');
      setActionError('');
      let busy = false;
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const optimizedUpload = await optimizeImageForUpload(dataUrl, {
          name: file.name,
          preserveAlpha: true,
        });
        let normalized = normalizeImagePath(optimizedUpload.dataUrl);
        if (typeof onUpload === 'function') {
          setActionBusy(true);
          busy = true;
          const result = await onUpload({ name: optimizedUpload.name, data: optimizedUpload.dataUrl });
          const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
          if (uploadedPath) {
            normalized = uploadedPath;
          }
        }
        applyAvatarValue(normalized);
        setAvatarOptions((prev) => [normalized, ...prev.filter((item) => item !== normalized)]);
        setShowGallery(true);
      } catch (error) {
        console.error('Avatar photo upload error', error);
        setActionError(error.message || 'Не удалось сохранить фото.');
        setRenderError(error.message || 'Не удалось сформировать превью карточки.');
      } finally {
        if (busy) {
          setActionBusy(false);
        }
      }
    },
    [onUpload, applyAvatarValue],
  );
  const handleDeleteImage = useCallback(
    async (target) => {
      if (!target || typeof onDelete !== 'function') return;
      setActionError('');
      setActionBusy(true);
      try {
        await onDelete(target);
        await refreshAvatarOptions();
        const normalizedTarget = normalizeImagePath(target);
        if (normalizedTarget === normalizedValue) {
          applyAvatarValue('');
        }
      } catch (error) {
        console.error('Avatar delete error', error);
        setActionError(error.message || 'Не удалось удалить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onDelete, refreshAvatarOptions, normalizedValue, applyAvatarValue],
  );
  const previewSrc = normalizedValue ? resolveAssetUrl(normalizedValue) : '';
  const photoPreview = cardPhoto ? resolveAssetUrl(cardPhoto) : '';
  const isGeneratedMode = selectedCardMode === CARD_MODE_GENERATED;
  const isCustomMode = selectedCardMode === CARD_MODE_CUSTOM_IMAGE;
  useEffect(() => {
    let cancelled = false;
    const renderCard = async () => {
      if (!canvasRef.current) return;
      if (selectedCardMode === CARD_MODE_CUSTOM_IMAGE) {
        const resolved = normalizeImagePath(customCardImage || cardImageUrl || '');
        cardPreviewRef.current = resolved;
        setCardPreview(resolved);
        return;
      }
      setRendering(true);
      setRenderError('');
      try {
        await ensureDisplayFonts();
        const ctx = canvasRef.current.getContext('2d');
        const [background, profilePhoto, phraseBg, photoBg] = await Promise.all([
          loadImageElement(CARD_BACKGROUND_IMAGE).catch(() => null),
          cardPhoto ? loadImageElement(resolveAssetUrl(cardPhoto)).catch(() => null) : Promise.resolve(null),
          CARD_PHRASE_BG ? loadImageElement(CARD_PHRASE_BG).catch(() => null) : Promise.resolve(null),
          CARD_PHOTO_BG ? loadImageElement(CARD_PHOTO_BG).catch(() => null) : Promise.resolve(null),
        ]);
        if (cancelled) return;
        canvasRef.current.width = CARD_CANVAS_WIDTH;
        canvasRef.current.height = CARD_CANVAS_HEIGHT;
        ctx.clearRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        if (background) {
          drawCoverImage(ctx, background, 0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        } else {
          const gradient = ctx.createLinearGradient(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
          gradient.addColorStop(0, '#f3e7d3');
          gradient.addColorStop(1, '#c8e7dd');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        }
        const title = sanitizeCardText(cardFields.name || 'BARBER').toUpperCase();
        ctx.fillStyle = CARD_NAME_COLOR;
        ctx.save();
        ctx.font = TITLE_FONT;
        ctx.textBaseline = 'top';
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.lineWidth = TITLE_STROKE_WIDTH;
        const titleCenterX = CARD_CANVAS_WIDTH * 0.5 + TITLE_CENTER_OFFSET;
        const titleWidth = ctx.measureText(title).width;
        const titleX = titleCenterX - titleWidth / 2;
        ctx.strokeStyle = CARD_NAME_COLOR;
        ctx.strokeText(title, titleX, TITLE_BASE_Y);
        ctx.fillStyle = CARD_NAME_COLOR;
        ctx.fillText(title, titleX, TITLE_BASE_Y);
        ctx.restore();
        const phraseBgX = CARD_CANVAS_WIDTH * 0.4; // keep favorite phrase background anchored
        const phraseTextX = phraseBgX + 20; // nudge phrase content slightly right
        const descX = CARD_CANVAS_WIDTH * 0.5; // shift description block slightly left
        const descWidth = CARD_CANVAS_WIDTH - descX - 60;
        const phraseWidth = CARD_CANVAS_WIDTH - phraseBgX - 80; // phrase area matches background anchor
        const descStartY = 400; // move description block slightly lower
        const bulletX = descX - 18; // keep bullets offset with new position
        let lineIndex = 0;
        ctx.font = '600 30px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = CARD_TEXT_COLOR;
        const rawDescription = sanitizeCardText(cardFields.description || '');
        const descriptionLines = rawDescription.split('\n');
        const payload = descriptionLines.some((line) => line.trim())
          ? descriptionLines
          : ['Аккуратен в деталях и доводит стрижку до идеала.'];
        ctx.textBaseline = 'top';
        payload.forEach((chunk) => {
          const wrapped = wrapTextLines(ctx, chunk, descWidth).slice(0, 6);
          if (!wrapped.length) {
            lineIndex += 1;
            return;
          }
          wrapped.forEach((line, localIndex) => {
            const y = descStartY + lineIndex * 38;
            const isFirstLine = localIndex === 0;
            if (isFirstLine) {
              ctx.beginPath();
              ctx.fillStyle = CARD_NAME_COLOR;
              ctx.arc(bulletX, y + 12, 7, 0, Math.PI * 2); // shift bullet left
              ctx.fill();
            }
            ctx.fillStyle = CARD_TEXT_COLOR;
            ctx.fillText(line, descX, y); // keep text position
            lineIndex += 1;
          });
        });
        const photoWidth = 380;
        const photoHeight = 470;
        const photoX = CARD_CANVAS_WIDTH * 0.18;
        const photoBaseY = 220;
        const photoY = photoBaseY - 30; // lift only the uploaded photo
        if (photoBg) {
          const bgWidth = photoWidth * 1.12;
          const bgHeight = photoHeight * 0.62;
          const bgX = photoX + (photoWidth - bgWidth) / 2 - 18;
          const bgY = photoBaseY + photoHeight - bgHeight + 28; // keep background in place
          drawCoverImage(ctx, photoBg, bgX, bgY, bgWidth, bgHeight);
        }
        if (profilePhoto) {
          const photoFilter = photoGrayscale ? 'grayscale(100%)' : 'saturate(1.05) contrast(1.05)';
          drawRoundedImage(ctx, profilePhoto, photoX, photoY, photoWidth, photoHeight, 38, photoFilter, photoOutlineEnabled
            ? {
                outlineColor: 'rgba(148, 163, 184, 0.95)',
                outlineSize: 10,
                outlineRoughness: 1.2,
              }
            : {});
        } else {
          ctx.save();
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          drawRoundedRectPath(ctx, photoX, photoY, photoWidth, photoHeight, 38);
          ctx.fill();
          ctx.restore();
        }
        const phraseLabel = 'Любимая фраза:';
        const phraseText = sanitizeCardText(cardFields.phrase || 'Комфорт клиента превыше всего');
        const phraseY = CARD_CANVAS_HEIGHT - 190; // adjust this to move the quote block
        const phraseBlockHeight = 160;
        if (phraseBg) {
          const phraseBgShift = 20; // slightly smaller background footprint
          const phraseBgYOffset = 10; // move background down a bit
          drawCoverImage(ctx, phraseBg, phraseBgX - 6 - phraseBgShift, phraseY - 2 + phraseBgYOffset, phraseWidth + 10 + phraseBgShift, phraseBlockHeight + 8);
        } else {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
          drawRoundedRectPath(ctx, phraseBgX, phraseY, phraseWidth, phraseBlockHeight, 18);
          ctx.fill();
        }
        ctx.font = '700 28px "Manrope", "Inter", sans-serif';
        const labelWidth = ctx.measureText(phraseLabel).width;
        const labelPaddingX = 14;
        const labelHeight = 40;
        const labelY = phraseY + 20;
        ctx.fillStyle = CARD_NAME_COLOR; // match name color for label background
        drawRoundedRectPath(ctx, phraseTextX + 12, labelY, labelWidth + labelPaddingX * 2, labelHeight, 16);
        ctx.fill();
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(phraseLabel, phraseTextX + 12 + labelPaddingX, labelY + 8);
        ctx.font = '800 30px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = '#0f172a'; // darker text for phrase
        wrapTextLines(ctx, phraseText, phraseWidth - 20)
          .slice(0, 3)
          .forEach((line, idx) => {
            ctx.fillText(line, phraseTextX + 16, phraseY + 70 + idx * 36); // move phrase text down
          });
        const previewUrl = canvasRef.current.toDataURL('image/jpeg', 0.94);
        if (!cancelled) {
          setCardPreview(previewUrl);
        }
      } catch (error) {
        if (!cancelled) {
          setRenderError(error.message || 'Не удалось сформировать превью карточки.');
        }
      } finally {
        if (!cancelled) {
          setRendering(false);
        }
      }
    };
    renderCard();
    return () => {
      cancelled = true;
    };
  }, [
    cardFields.name,
    cardFields.description,
    cardFields.phrase,
    cardPhoto,
    photoGrayscale,
    customCardImage,
    photoOutlineEnabled,
    selectedCardMode,
    cardImageUrl,
  ]);
  useEffect(() => {
    cardPreviewRef.current = cardPreview;
  }, [cardPreview]);
  const cardSaveHandler = useCallback(
    async (barberId) => {
      if (!barberId || !cardPreviewRef.current || typeof onCardUpload !== 'function') return null;
      const previewData = cardPreviewRef.current;
      if (lastSavedPreviewRef.current === previewData) return null;
      if (!previewData.startsWith('data:image')) {
        lastSavedPreviewRef.current = previewData;
        if (previewData) {
          onCardImageChange?.(previewData);
        }
        return { path: previewData };
      }
      const result = await onCardUpload({
        barberId,
        name: buildCardFileName(cardFields.name || 'barber-card'),
        data: previewData,
      });
      lastSavedPreviewRef.current = previewData;
      const uploadedPath = normalizeImagePath(result?.path || result?.image || '');
      if (uploadedPath) {
        onCardImageChange?.(uploadedPath);
      }
      return result;
    },
    [onCardUpload, cardFields.name, onCardImageChange],
  );
  const handleCardModeSelect = useCallback(
    (mode) => {
      const normalized = normalizeCardMode(mode);
      setSelectedCardMode(normalized);
      onCardModeChange?.(normalized);
      if (normalized === CARD_MODE_GENERATED) {
        lastSavedPreviewRef.current = null;
      }
    },
    [onCardModeChange],
  );
  const handleResetDesign = useCallback(() => {
    setCustomCardImage('');
    onCardImageChange?.('');
    handleCardModeSelect(CARD_MODE_GENERATED);
    setCardPreview('');
    cardPreviewRef.current = '';
    lastSavedPreviewRef.current = null;
  }, [handleCardModeSelect, onCardImageChange]);
  useEffect(() => {
    if (typeof onRegisterCardSaver === 'function') {
      lastSavedPreviewRef.current = null;
      onRegisterCardSaver(cardSaveHandler);
    }
  }, [cardSaveHandler, onRegisterCardSaver]);
  const handleDownloadCard = useCallback(() => {
    if (!cardPreview) return;
    const link = document.createElement('a');
    link.href = cardPreview;
    link.download = buildCardFileName(cardFields.name || 'barber-card').replace(/\.jpg$/, '.png');
    link.click();
  }, [cardPreview, cardFields.name]);
  const handleCustomCardFile = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Можно загружать только изображения.');
        return;
      }
      try {
        const dataUrl = await readFileAsDataUrl(file);
        setCustomCardImage(dataUrl);
        setSelectedCardMode(CARD_MODE_CUSTOM_IMAGE);
        onCardModeChange?.(CARD_MODE_CUSTOM_IMAGE);
        onCardImageChange?.('');
        lastSavedPreviewRef.current = null;
        setRenderError('');
      } catch (error) {
        setRenderError(error.message || 'Не получилось прочитать файл карточки.');
      }
    },
    [onCardModeChange, onCardImageChange],
  );
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  return (
    <div className="crm-soft-card overflow-hidden">
      <input
        ref={photoInputRef}
        type="file"
        name="barberPhoto"
        aria-label="Фото барбера"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoFileChange}
      />
      <input
        ref={fileInputRef}
        type="file"
        name="avatarFile"
        aria-label="Импорт готовой карточки"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <input
        ref={customCardInputRef}
        type="file"
        name="customCard"
        aria-label="Готовая карточка"
        accept="image/*"
        className="hidden"
        onChange={handleCustomCardFile}
      />
      <div className="space-y-4 p-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--crm-muted)]">Источник:</span>
              <button
                type="button"
                onClick={() => handleCardModeSelect(CARD_MODE_GENERATED)}
                className={classNames(
                  'crm-ghost-btn px-3 py-1.5 text-xs',
                  isGeneratedMode
                    ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]'
                    : '',
                )}
              >
                Редактор
              </button>
              <button
                type="button"
                onClick={() => {
                  handleCardModeSelect(CARD_MODE_CUSTOM_IMAGE);
                  customCardInputRef.current?.click();
                }}
                className={classNames(
                  'crm-ghost-btn px-3 py-1.5 text-xs',
                  isCustomMode
                    ? 'bg-[color:var(--crm-highlight-soft)] text-[color:var(--crm-highlight-text)]'
                    : '',
                )}
              >
                Свое изобр.
              </button>
            </div>
          </div>
          <div className="crm-inline-panel relative overflow-hidden">
            <canvas
              ref={canvasRef}
              className="block h-full w-full max-w-full bg-[color:var(--crm-surface-4)]/60"
              style={{ aspectRatio: '16 / 9' }}
            />
            {!cardPreview && (
              <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--crm-surface-4)]/70 p-6 text-center text-sm text-[var(--crm-text)]">
                <p>Загрузите фото барбера и заполните поля — карточка соберется автоматически.</p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadCard}
                disabled={!cardPreview}
                className="crm-ghost-btn px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                Скачать
              </button>
              {isCustomMode && (
                <button
                  type="button"
                  onClick={() => {
                    handleCardModeSelect(CARD_MODE_CUSTOM_IMAGE);
                    customCardInputRef.current?.click();
                  }}
                  className="crm-action-btn px-4 py-2 text-sm"
                >
                  +
                </button>
              )}
              {isCustomMode && (customCardImage || cardImageUrl) && (
                <button
                  type="button"
                  onClick={handleResetDesign}
                  className="crm-ghost-btn px-3 py-2 text-xs font-semibold"
                >
                  Вернуться к редактору
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setCardDetailsOpen((prev) => !prev)}
              className="crm-ghost-btn px-3 py-2 text-xs font-semibold uppercase tracking-wide"
            >
              {cardDetailsOpen ? 'Скрыть' : 'Раскрыть'}
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'crm-inline-panel overflow-hidden transition-all duration-200',
            cardDetailsOpen ? 'max-h-[2200px] opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
          )}
        >
          {cardDetailsOpen && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Имя сотрудника</label>
                <input
                  value={cardFields.name}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="BARBER"
                  className="w-full px-4 py-3 text-white placeholder:text-[var(--crm-muted)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Описание</label>
                <textarea
                  rows={4}
                  value={cardFields.description}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, description: event.target.value }))}
                  placeholder="Аккуратен в деталях и доводит стрижку до идеала"
                  className="w-full px-4 py-3 text-white placeholder:text-[var(--crm-muted)]"
                />
                <p className="text-xs text-[var(--crm-muted)]">Каждая строка станет пунктом списка.</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Любимая фраза</label>
                <input
                  value={cardFields.phrase}
                  onChange={(event) => setCardFields((prev) => ({ ...prev, phrase: event.target.value }))}
                  placeholder="Комфорт клиента превыше всего"
                  className="w-full px-4 py-3 text-white placeholder:text-[var(--crm-muted)]"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Фото барбера</p>
                <div className="crm-inline-panel flex items-center gap-3 p-3">
                  <div className="crm-soft-panel h-16 w-16 overflow-hidden rounded-xl">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Фото барбера" className="h-full w-full object-cover" />
                    ) : (
                      <DefaultProfileIcon className="h-full w-full bg-[color:var(--crm-surface-4)]/60" iconClassName="h-10 w-10" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-xs text-[var(--crm-muted)]">
                      Портретное фото.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => photoInputRef.current?.click()}
                        className="crm-action-btn px-3 py-1.5 text-xs"
                      >
                        Загрузить фото
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhotoGrayscale((prev) => !prev)}
                        className={classNames(
                          'rounded-full px-3 py-1.5 text-xs font-semibold transition',
                          photoGrayscale
                            ? 'crm-ghost-btn'
                            : 'crm-action-btn',
                        )}
                      >
                        {photoGrayscale ? 'Ч/Б эффект' : 'Цветное фото'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhotoOutlineEnabled((prev) => !prev)}
                        className={classNames(
                          'rounded-full px-3 py-1.5 text-xs font-semibold transition',
                          photoOutlineEnabled
                            ? 'crm-tonal-btn'
                            : 'crm-ghost-btn'
                        )}
                      >
                        {photoOutlineEnabled ? 'С рамкой' : 'Без рамки'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowGallery((prev) => !prev)}
                        className="crm-ghost-btn px-3 py-1.5 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={loading || (!avatarOptions.length && !normalizedValue)}
                      >
                        {loading ? 'Загрузка...' : showGallery ? 'Скрыть галерею' : 'Показать галерею'}
                      </button>
                    </div>
                  </div>
                </div>
                {showGallery && availableOptions.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {availableOptions.map((preset) => {
                      const normalizedPreset = normalizeImagePath(preset);
                      const isSelected = normalizedPreset === normalizedValue;
                      return (
                        <button
                          type="button"
                          key={preset}
                          onClick={() => applyAvatarValue(normalizedPreset)}
                          className={classNames(
                            'group crm-soft-panel relative overflow-hidden p-1.5 transition hover:bg-[color:var(--crm-surface-4)]',
                            isSelected ? 'bg-[color:var(--crm-primary-container)]' : 'bg-[color:var(--crm-surface-3)]',
                          )}
                        >
                          <img src={resolveAssetUrl(normalizedPreset)} alt="card preset" className="h-20 w-full rounded-xl object-cover" />
                          {typeof onDelete === 'function' && (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                handleDeleteImage(normalizedPreset);
                              }}
                              className="absolute right-1 top-1 rounded-full bg-[color:var(--crm-surface-4)]/80 p-1 text-[var(--crm-text)] opacity-0 transition hover:bg-rose-600/80 hover:text-white group-hover:opacity-100 disabled:cursor-not-allowed"
                              disabled={actionBusy}
                            >
                              <IconTrash className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                {!avatarOptions.length && !loading && (
                  <p className="text-sm text-[var(--crm-muted)]">Карточек пока нет. Сохраните одну, чтобы увидеть здесь.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const DAY_INDEX_LOOKUP = (() => {
  const full = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  const short = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const map = {};
  full.forEach((name, index) => {
    map[name] = index;
  });
  short.forEach((name, index) => {
    map[name] = index;
  });
  return map;
})();
const getDayIndex = (value = '') => {
  const normalized = normalizeText(value).toLowerCase();
  return Number.isFinite(DAY_INDEX_LOOKUP[normalized]) ? DAY_INDEX_LOOKUP[normalized] : 7;
};
const formatScheduleDayShort = (dateValue, fallbackDay = '') => {
  const safeDate = normalizeText(dateValue);
  if (safeDate) {
    try {
      const parsed = new Date(`${safeDate}T00:00:00`);
      if (!Number.isNaN(parsed.getTime())) {
        return new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(parsed).replace('.', '');
      }
    } catch {
      // noop
    }
  }
  const normalizedFallback = normalizeText(fallbackDay);
  return normalizedFallback ? normalizedFallback.slice(0, 2) : '';
};
const formatScheduleDateLabel = (dateValue) => {
  const safeDate = normalizeText(dateValue);
  if (!safeDate) return '';
  try {
    const parsed = new Date(`${safeDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return '';
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(parsed).replace('.', '');
  } catch {
    return '';
  }
};
const SCHEDULE_FILL_DAYS_OPTIONS = [7, 14, 21, 30, 42];
const normalizeScheduleFillDays = (value) => {
  const numeric = Number(value);
  return SCHEDULE_FILL_DAYS_OPTIONS.includes(numeric) ? numeric : 14;
};
const isTodayDate = (dateValue) => {
  const safeDate = normalizeText(dateValue);
  if (!safeDate) return false;
  const today = new Date();
  const target = new Date(`${safeDate}T00:00:00`);
  if (Number.isNaN(target.getTime())) return false;
  return (
    today.getFullYear() === target.getFullYear() &&
    today.getMonth() === target.getMonth() &&
    today.getDate() === target.getDate()
  );
};
const parseSlotTimeMinutes = (value) => {
  const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return 0;
  return Number(match[1]) * 60 + Number(match[2]);
};
const getScheduleSortValue = (slot) => {
  const safeDate = normalizeText(slot.Date);
  if (safeDate) {
    const parsed = new Date(`${safeDate}T00:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.getTime() + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start) * 60000;
    }
  }
  const base = Number.MAX_SAFE_INTEGER - 1_000_000_000;
  const dayIndex = getDayIndex(slot.DayOfWeek);
  return base + dayIndex * 10000 + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start || slot.Week) * 10;
};
const RatingSlider = ({ value, onChange, dense = false, disabled = false }) => {
  const ratingValue = clampRatingValue(value ?? RATING_MAX);
  const sliderId = useMemo(() => `rating-slider-${Math.random().toString(36).slice(2, 8)}`, []);
  const wrapperClass = dense
    ? 'crm-inline-panel space-y-1 px-3 py-1.5'
    : 'crm-inline-panel space-y-1 px-3 py-2';
  const labelClass = dense
    ? 'flex items-center justify-between text-xs text-[var(--crm-text)]'
    : 'flex items-center justify-between text-sm text-[var(--crm-text)]';
  return (
    <div className={classNames(wrapperClass, disabled ? 'opacity-60' : '')}>
      <label className={labelClass} htmlFor={sliderId}>
        <span>Рейтинг</span>
        <span className="font-semibold text-white">{ratingValue}</span>
      </label>
      <input
        id={sliderId}
        name="rating"
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        step={RATING_STEP}
        value={ratingValue}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        aria-label="Рейтинг"
        className={classNames('w-full accent-[color:var(--crm-primary)]', disabled ? 'cursor-not-allowed' : '')}
      />
    </div>
  );
};
const FixedRatingSlider = ({ value, onChange, dense = false, disabled = false }) => {
  const ratingValue = clampRatingValue(value ?? RATING_MAX);
  const sliderId = useMemo(() => `rating-slider-fixed-${Math.random().toString(36).slice(2, 8)}`, []);
  const wrapperClass = dense
    ? 'crm-inline-panel space-y-1 px-3 py-1.5'
    : 'crm-inline-panel space-y-1 px-3 py-2';
  const labelClass = dense
    ? 'flex items-center justify-between text-xs text-[var(--crm-text)]'
    : 'flex items-center justify-between text-sm text-[var(--crm-text)]';
  return (
    <div className={classNames(wrapperClass, disabled ? 'opacity-60' : '')}>
      <label className={labelClass} htmlFor={sliderId}>
        <span className="inline-flex items-center gap-1.5">
          <IconStar className="h-4 w-4 text-[color:var(--crm-highlight)]" />
          <span>Рейтинг</span>
        </span>
        <span className="font-semibold text-white">{ratingValue}</span>
      </label>
      <input
        id={sliderId}
        name="rating"
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        step={RATING_STEP}
        value={ratingValue}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        aria-label="Рейтинг"
        className={classNames('w-full accent-[color:var(--crm-primary)]', disabled ? 'cursor-not-allowed' : '')}
      />
    </div>
  );
};

