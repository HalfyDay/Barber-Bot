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
      UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || '',
    }));
  };
  return (
    <Modal
      title={`Новая запись: ${tableName}`}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className={classNames(RESPONSIVE_ACTION_BUTTON_CLASS, SHEET_FOOTER_BUTTON_CLASS, 'crm-ghost-btn')}
            aria-label="Отмена"
            title="Отмена"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Отмена</span>
          </button>
          <button
            onClick={handleSubmit}
            className={classNames(RESPONSIVE_ACTION_BUTTON_CLASS, SHEET_FOOTER_BUTTON_CLASS, 'crm-action-btn')}
            aria-label="Сохранить"
            title="Сохранить"
          >
            <IconSave className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Сохранить</span>
          </button>
        </div>
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
                <CustomSelect
                  value={value || ''}
                  onChange={(nextValue) => setDraft((prev) => ({ ...prev, [column.key]: nextValue }))}
                  options={[{ value: '', label: '-' }, ...((options[column.optionsKey] || []).map((option) => ({ value: option, label: option })))]}
                  placeholder="-"
                  buttonClassName="h-10 px-4"
                />
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
                  placeholder={column.key === 'Week' ? '—' : 'Нажмите, чтобы выбрать'}
                  title={column.key === 'Week' ? 'Редактирование слотов' : 'Выбор времени'}
                />
              </div>
            );
          }
          return (
            <div key={column.key} className="space-y-1">
              <label className="text-sm text-slate-300">{column.label}</label>
              <input
                name={column.key}
                aria-label={column.label || column.key}
                type={column.type === 'date' ? 'date' : 'text'}
                value={value || ''}
                onChange={(event) => setDraft((prev) => ({ ...prev, [column.key]: event.target.value }))}
                className="w-full px-3 py-2 text-white"
              />
            </div>
          );
        })}
      </form>
    </Modal>
  );
};
const ProfileModal = ({ state, onClose, onBlockClient }) => {
  const appointments = state.data?.appointments || [];
  const visitHistory = useMemo(() => buildVisitHistory(appointments), [appointments]);
  const user = state.data?.user || null;
  const [blockState, setBlockState] = useState(null);
  const [blockBusy, setBlockBusy] = useState(false);
  const [blockError, setBlockError] = useState('');
  useEffect(() => {
    setBlockState(null);
    setBlockError('');
  }, [state?.open, user?.id]);
  const warningCount = blockState?.warningCount ?? state.data?.warningCount ?? user?.warningCount ?? 0;
  const manualBlocked = blockState?.manualBlocked ?? state.data?.manualBlocked ?? user?.manualBlocked ?? false;
  const isBlocked =
    (blockState?.isBlocked ??
      blockState?.blocked ??
      state.data?.isBlocked ??
      user?.isBlocked ??
      manualBlocked) ||
    warningCount >= CLIENT_BLOCK_THRESHOLD;
  const handleToggleBlock = async () => {
    if (!onBlockClient || !user?.id) return;
    setBlockBusy(true);
    setBlockError('');
    const nextBlocked = !isBlocked;
    try {
      const result = await onBlockClient(user.id, nextBlocked);
      setBlockState({
        warningCount: result?.warnings ?? warningCount,
        manualBlocked: result?.manualBlocked ?? nextBlocked,
        isBlocked: result?.blocked ?? nextBlocked,
      });
    } catch (error) {
      setBlockError(error.message || 'Failed to update block status');
    } finally {
      setBlockBusy(false);
    }
  };
  const phoneLabel = user?.Phone ? formatPhoneInput(user.Phone) : '';
  const phoneHref = phoneLabel ? `tel:${phoneLabel.replace(/[^\d+]/g, '')}` : '';
  const telegramHandle = user?.TelegramID ? formatTelegramHandle(user.TelegramID) : '';
  const telegramHref = user?.TelegramID ? buildTelegramLink(user.TelegramID) : '';
  const telegramTarget = telegramHref?.startsWith('tg://') ? '_self' : '_blank';
  const telegramRel = telegramHref?.startsWith('tg://') ? undefined : 'noopener noreferrer';
  return (
    <Modal
      title={state.data?.user?.Name || 'Client profile'}
      isOpen={state.open}
      onClose={onClose}
      footer={
        <div className="flex flex-wrap items-center justify-end gap-2">
          {onBlockClient && user?.id && (
            <button
              onClick={handleToggleBlock}
              disabled={blockBusy}
            className={classNames(
              RESPONSIVE_ACTION_BUTTON_CLASS,
              SHEET_FOOTER_BUTTON_CLASS,
              isBlocked
                ? 'crm-tonal-btn text-[color:var(--crm-highlight-text)]'
                : 'crm-danger-btn',
              blockBusy && 'cursor-not-allowed opacity-60'
            )}
          >
              <IconBan className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{isBlocked ? 'Разблокировать' : 'Заблокировать'}</span>
            </button>
          )}
          <button onClick={onClose} className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}>Закрыть</button>
        </div>
      }
    >
      {state.loading && <LoadingState label="Loading profile..." />}
      {!state.loading && state.data?.error && <ErrorBanner message={state.data.error} />}
      {!state.loading && user && (
        <div className="space-y-4">
          <div className="crm-inline-panel flex flex-wrap items-center justify-between gap-3 px-3 py-2">
            <div className="text-sm text-white">
              <p className="font-semibold">Предупреждения: {warningCount}</p>
              {blockError && <p className="text-xs text-rose-300">{blockError}</p>}
            </div>
            {isBlocked && (
              <span className="rounded-full bg-[color:var(--crm-highlight-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--crm-highlight-text)]">Заблокирован</span>
            )}
          </div>
          <div className="grid gap-2 text-sm text-slate-200">
            <div>
              <span className="text-[var(--crm-muted)]">Телефон:</span>{" "}
              {phoneLabel && phoneHref ? (
                <a href={phoneHref} className="text-[color:var(--crm-primary)] hover:text-white">
                  {phoneLabel}
                </a>
              ) : (
                "-"
              )}
            </div>
            <div>
              <span className="text-[var(--crm-muted)]">Телеграм:</span>{" "}
              {telegramHandle && telegramHref ? (
                <a href={telegramHref} target={telegramTarget} rel={telegramRel} className="text-[color:var(--crm-primary)] hover:text-white">
                  {telegramHandle}
                </a>
              ) : (
                "-"
              )}
            </div>
            <div><span className="text-[var(--crm-muted)]">Любимый барбер:</span> {user.Barber || "-"}</div>
          </div>
          <div>
            <p className="text-sm text-[var(--crm-muted)]">История визитов</p>
            <div className="mt-2">
              <VisitHistoryList visits={visitHistory} emptyMessage="История пуста." />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
const BackupsPanel = ({ backups = [], onRestore, onCreate, onDelete }) => (
  <SectionCard
    title="Резервные копии"
    actions={
      <button onClick={onCreate} className="crm-action-btn px-3 py-2 text-sm">
        Создать копию
      </button>
    }
  >
    {backups.length === 0 ? (
      <p className="text-[var(--crm-muted)]">История пуста.</p>
    ) : (
      <div className="space-y-2">
        {backups.map((backup) => {
          const label = formatBackupLabel(backup);
          const meta = formatBackupMeta(backup);
          return (
            <div key={backup} className="crm-inline-panel flex flex-wrap items-center justify-between gap-3 px-3 py-2 text-sm text-[var(--crm-text)]">
              <div>
                <p className="font-semibold text-white">{label}</p>
                <p className="text-xs text-[var(--crm-muted)]">{meta}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => onRestore(backup)} className="crm-ghost-btn px-3 py-1 text-xs font-semibold">
                  Восстановить
                </button>
                {onDelete && (
                  <button
                    onClick={() => onDelete(backup)}
                    className="crm-danger-btn inline-flex items-center px-3 py-1 text-xs font-semibold"
                  >
                    <IconTrash className="mr-1 h-3.5 w-3.5" />
                    Удалить
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )}
  </SectionCard>
);
const AppointmentModal = ({
  open,
  appointment,
  options = {},
  appointments = [],
  schedules = [],
  onClose,
  onSave,
  onDelete,
  canDelete = false,
  isNew = false,
  clients = [],
  serviceCatalog = [],
  onQuickCreateClient = null,
}) => {
  const buildDraft = useCallback(
    (record) => (record ? { ...record, UserID: record.UserID || record.userId || '', Status: normalizeStatusValue(record.Status) } : null),
    []
  );
  const [draft, setDraft] = useState(buildDraft(appointment));
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [validationWarning, setValidationWarning] = useState('');
  const [manualEndOverride, setManualEndOverride] = useState(false);
  const [saveWarningConfirmArmed, setSaveWarningConfirmArmed] = useState(false);
  const [dismissedNoticeKeys, setDismissedNoticeKeys] = useState([]);
  const [quickCreateBusy, setQuickCreateBusy] = useState(false);
  useEffect(() => {
    if (!open) return;
    setDraft(buildDraft(appointment));
    setDetailsOpen(false);
    setValidationError('');
    setValidationWarning('');
    setManualEndOverride(false);
    setSaveWarningConfirmArmed(false);
    setDismissedNoticeKeys([]);
    setQuickCreateBusy(false);
  }, [appointment, buildDraft, open]);
  useEffect(() => {
    setDismissedNoticeKeys([]);
  }, [validationError, validationWarning]);
  const currentAppointmentId = appointment ? getRecordId(appointment) : null;
  const validateDraft = useCallback(
    (nextDraft) => {
      if (!nextDraft) {
        return { error: 'Данные записи недоступны.', warning: '' };
      }
      const errors = [];
      const warnings = [];
      const missingFields = [];
      const timeParts = parseTimeRangeParts(nextDraft.Time || '');
      const hasTime = Boolean(timeParts.start);
      const selectedServices = parseMultiValue(nextDraft.Services);
      if (!normalizeText(nextDraft.CustomerName)) missingFields.push('клиент');
      if (!normalizeText(nextDraft.Barber)) missingFields.push('барбер');
      if (!getDateOnlyValue(nextDraft.Date)) missingFields.push('дата');
      if (!hasTime) missingFields.push('время');
      if (!normalizeStatusValue(nextDraft.Status)) missingFields.push('статус');
      if (!selectedServices.length) missingFields.push('услуга');
      if (missingFields.length) {
        errors.push(`Заполните поля: ${missingFields.join(', ')}.`);
      }
      const normalizedBarber = normalizeText(nextDraft.Barber).toLowerCase();
      const dateOnly = getDateOnlyValue(nextDraft.Date);
      let draftRange = null;
      if (normalizedBarber && dateOnly && hasTime) {
        const start = getAppointmentStartDate(nextDraft.Date, nextDraft.Time, nextDraft.startDateTime);
        if (start) {
          const end = ensureRangeEnd(start, getAppointmentEndDate(nextDraft.Date, nextDraft.Time, nextDraft.startDateTime));
          if (end) {
            draftRange = { start, end };
          }
        }
      }
      if (draftRange) {
        const currentId = getRecordId(nextDraft) || currentAppointmentId;
        const conflictExists = (appointments || []).some((record) => {
          if (!record) return false;
          const recordId = getRecordId(record);
          if (currentId && recordId && String(currentId) === String(recordId)) return false;
          const recordBarber = normalizeText(record.Barber).toLowerCase();
          if (recordBarber && normalizedBarber && recordBarber !== normalizedBarber) return false;
          if (getDateOnlyValue(record.Date) !== dateOnly) return false;
          if (!isActiveAppointmentStatus(record.Status)) return false;
          const start = resolveAppointmentStartDate(record);
          if (!start) return false;
          const end = ensureRangeEnd(start, resolveAppointmentEndDate(record));
          if (!end) return false;
          return rangesOverlap(draftRange, { start, end });
        });
        if (conflictExists) {
          warnings.push('У барбера уже есть запись на это время.');
        }
      }
      if (draftRange && (schedules || []).length && normalizedBarber && dateOnly) {
        const relevantSlots = schedules.filter((slot) => normalizeText(slot.Barber).toLowerCase() === normalizedBarber);
        if (relevantSlots.length) {
          const dayIndex = getDateWeekdayIndex(dateOnly);
          const daySlots = relevantSlots.filter((slot) => {
            const slotDate = getDateOnlyValue(slot.Date);
            if (slotDate) return slotDate === dateOnly;
            return getDayIndex(slot.DayOfWeek) === dayIndex;
          });
          if (!daySlots.length) {
            warnings.push('Барбер не работает в этот день.');
          } else {
            const fitsSchedule = daySlots.some((slot) => {
              const slotTime = slot.Week || slot.Time || '';
              if (!slotTime) return false;
              const slotStart = getAppointmentStartDate(slot.Date || dateOnly, slotTime, slot.startDateTime);
              if (!slotStart) return false;
              const slotEnd = ensureRangeEnd(slotStart, getAppointmentEndDate(slot.Date || dateOnly, slotTime, slot.startDateTime));
              if (!slotEnd) return false;
              return draftRange.start >= slotStart && draftRange.end <= slotEnd;
            });
            if (!fitsSchedule) {
              warnings.push('Время вне смены барбера.');
            }
          }
        }
      }
      return {
        error: errors.join(' ').trim(),
        warning: warnings.join(' ').trim(),
      };
    },
    [appointments, schedules, currentAppointmentId]
  );
  const updateWarningForDraft = useCallback(
    (nextDraft) => {
      if (!nextDraft) {
        setValidationWarning('');
        return;
      }
      const hasBarber = Boolean(normalizeText(nextDraft.Barber));
      const hasDate = Boolean(getDateOnlyValue(nextDraft.Date));
      const hasTime = Boolean(parseTimeRangeParts(nextDraft.Time || '').start);
      if (!hasBarber || !hasDate || !hasTime) {
        setValidationWarning('');
        return;
      }
      const { warning } = validateDraft(nextDraft);
      setValidationWarning(warning || '');
    },
    [validateDraft]
  );
  useEffect(() => {
    if (!open) return;
    const frameId = requestAnimationFrame(() => updateWarningForDraft(draft));
    return () => cancelAnimationFrame(frameId);
  }, [
    open,
    draft?.Barber,
    draft?.Date,
    draft?.Time,
    schedules,
    appointments,
    updateWarningForDraft,
  ]);
  const servicesSelection = parseMultiValue(draft?.Services);
  const appointmentServiceOptions = useMemo(
    () => dedupeOptionList(options.services || []),
    [options.services]
  );
  const serviceDurationLookup = useMemo(
    () =>
      new Map(
        (serviceCatalog || []).map((service) => [
          canonicalizeName(service?.name || '').toLowerCase(),
          Math.max(0, Number(service?.duration) || 0),
        ]),
      ),
    [serviceCatalog]
  );
  const getServicesDuration = useCallback(
    (servicesValue) =>
      normalizeMultiValueList(servicesValue).reduce((sum, serviceName) => {
        const key = canonicalizeName(serviceName).toLowerCase();
        return sum + (serviceDurationLookup.get(key) || 0);
      }, 0),
    [serviceDurationLookup]
  );
  const selectedServicesDuration = useMemo(
    () => getServicesDuration(draft?.Services),
    [draft?.Services, getServicesDuration]
  );
  const draftTimeParts = useMemo(() => parseTimeRangeParts(draft?.Time || ''), [draft?.Time]);
  const appointmentStartTime = draftTimeParts.start;
  const autoAppointmentEndTime = useMemo(
    () => (appointmentStartTime && selectedServicesDuration > 0
      ? addMinutesToTimeToken(appointmentStartTime, selectedServicesDuration)
      : ''),
    [appointmentStartTime, selectedServicesDuration]
  );
  const appointmentEndTime = useMemo(
    () => (draftTimeParts.end || autoAppointmentEndTime || ''),
    [draftTimeParts.end, autoAppointmentEndTime]
  );
  const syncDraftTimeWithServices = useCallback(
    (nextDraft, { preserveManualEnd = false } = {}) => {
      if (!nextDraft) return nextDraft;
      const start = extractTimeStart(nextDraft.Time || '');
      if (!start) return nextDraft;
      const duration = getServicesDuration(nextDraft.Services);
      const currentEnd = parseTimeRangeParts(nextDraft.Time || '').end || '';
      const nextEnd = !preserveManualEnd && duration > 0
        ? addMinutesToTimeToken(start, duration)
        : currentEnd;
      const nextTime = preserveManualEnd
        ? buildManualTimeRangeValue(start, nextEnd)
        : buildTimeRangeValue(start, nextEnd);
      if (nextTime === (nextDraft.Time || '')) return nextDraft;
      return { ...nextDraft, Time: nextTime };
    },
    [getServicesDuration]
  );
  useEffect(() => {
    if (!open) return;
    setDraft((prev) => {
      if (!prev) return prev;
      return syncDraftTimeWithServices(prev, { preserveManualEnd: manualEndOverride });
    });
  }, [open, selectedServicesDuration, syncDraftTimeWithServices, manualEndOverride]);
  const linkedClient = useMemo(() => {
    const safeUserId = normalizeText(draft?.UserID);
    const safePhone = normalizePhoneValue(draft?.Phone);
    const safeName = normalizeText(draft?.CustomerName);
    return (Array.isArray(clients) ? clients : []).find((client) => {
      const clientId = normalizeText(client?.id);
      const clientTelegramId = normalizeText(client?.telegramId || client?.TelegramID);
      const clientPhone = normalizePhoneValue(client?.phone || client?.Phone);
      const clientName = normalizeText(client?.name || client?.Name);
      if (safeUserId && (clientTelegramId === safeUserId || clientId === safeUserId)) return true;
      if (safePhone && clientPhone === safePhone) return true;
      if (safeName && clientName === safeName) return true;
      return false;
    }) || null;
  }, [clients, draft?.CustomerName, draft?.Phone, draft?.UserID]);
  const appointmentDateInputRef = useRef(null);
  const openAppointmentDatePicker = () => {
    const input = appointmentDateInputRef.current;
    if (!input) return;
    if (typeof input.showPicker === 'function') {
      input.showPicker();
      return;
    }
    input.focus();
    input.click?.();
  };
  if (!open || !draft) return null;
  const actionButtonClass = RESPONSIVE_ACTION_BUTTON_CLASS;
  const handleChange = (field, value) => {
    setValidationError('');
    setSaveWarningConfirmArmed(false);
    if (field === 'Services') {
      setManualEndOverride(false);
    }
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = field === 'Services' || field === 'Time'
        ? syncDraftTimeWithServices({ ...prev, [field]: value }, { preserveManualEnd: field !== 'Services' && manualEndOverride })
        : { ...prev, [field]: value };
      updateWarningForDraft(nextDraft);
      return nextDraft;
    });
  };
  const handleStartTimeChange = (nextStart) => {
    const autoEnd = nextStart && selectedServicesDuration > 0 ? addMinutesToTimeToken(nextStart, selectedServicesDuration) : '';
    const nextTime = nextStart
      ? (manualEndOverride
          ? buildManualTimeRangeValue(nextStart, appointmentEndTime)
          : buildTimeRangeValue(nextStart, autoEnd || appointmentEndTime))
      : '';
    if (autoEnd) {
      setManualEndOverride(false);
    }
    handleChange('Time', nextTime);
  };
  const handleEndTimeChange = (nextEnd) => {
    setValidationError('');
    setSaveWarningConfirmArmed(false);
    setManualEndOverride(true);
    const nextTime = appointmentStartTime ? buildManualTimeRangeValue(appointmentStartTime, nextEnd) : '';
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = { ...prev, Time: nextTime };
      updateWarningForDraft(nextDraft);
      return nextDraft;
    });
  };
  const isReminderSent = (value) => value === true || value === 'true' || value === 1 || value === '1';
  const getReminderLabel = (value) => (isReminderSent(value) ? 'Напомнено' : 'Не напомнено');
  const getReminderAccent = (value) => (isReminderSent(value) ? 'text-[color:var(--crm-primary)]' : 'text-[var(--crm-muted)]');
  const resolvedTelegramUserId = normalizeText(linkedClient?.telegramId || linkedClient?.TelegramID);
  const storedUserId = normalizeText(draft?.UserID);
  const recordDetails = [
    {
      key: 'user',
      label: 'UserID',
      value: resolvedTelegramUserId || storedUserId || '-',
      accent: resolvedTelegramUserId || storedUserId ? 'text-white' : 'text-slate-500',
    },
    ...(resolvedTelegramUserId && storedUserId && resolvedTelegramUserId !== storedUserId
      ? [{
          key: 'siteUser',
          label: 'ID сайта',
          value: storedUserId,
          accent: 'text-slate-400',
        }]
      : []),
    {
      key: 'clientReminder',
      label: 'Напоминание клиенту (2ч)',
      value: getReminderLabel(draft.Reminder2hClientSent),
      accent: getReminderAccent(draft.Reminder2hClientSent),
    },
    {
      key: 'barberReminder',
      label: 'Напоминание барберу (2ч)',
      value: getReminderLabel(draft.Reminder2hBarberSent),
      accent: getReminderAccent(draft.Reminder2hBarberSent),
    },
  ];
  const submitDraft = async (nextDraft) => {
    if (!nextDraft) return;
    return onSave({
      id: nextDraft.id,
      payload: {
        CustomerName: nextDraft.CustomerName,
        Phone: nextDraft.Phone,
        Barber: nextDraft.Barber,
        Date: nextDraft.Date,
        Time: nextDraft.Time,
        Status: normalizeStatusValue(nextDraft.Status),
        Services: nextDraft.Services,
        UserID: nextDraft.UserID || '',
      },
      isNew,
    });
  };
  const handleSubmit = async () => {
    const { error, warning } = validateDraft(draft);
    if (error) {
      setValidationError(error);
      return;
    }
    if (warning) {
      if (!saveWarningConfirmArmed) {
        setSaveWarningConfirmArmed(true);
        setValidationError('Нажмите «Сохранить» ещё раз, чтобы подтвердить запись с предупреждением по времени.');
        return;
      }
    }
    setValidationError('');
    try {
      await submitDraft(draft);
    } catch (submitError) {
      setValidationError(submitError?.message || 'Не удалось сохранить запись.');
    }
  };
  const handleMarkCompleted = async () => {
    if (!draft) return;
    setValidationError('');
    setValidationWarning('');
    setSaveWarningConfirmArmed(false);
    const nextDraft = { ...draft, Status: 'Выполнена' };
    setDraft(nextDraft);
    try {
      await submitDraft(nextDraft);
    } catch (submitError) {
      setValidationError(submitError?.message || 'Не удалось сохранить запись.');
    }
  };
  const handleClientAutoFill = (client) => {
    if (!client) return;
    setValidationError('');
    setSaveWarningConfirmArmed(false);
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = {
        ...prev,
        CustomerName: client.name || prev.CustomerName,
        Phone: client.phone || prev.Phone,
        Barber: prev.Barber || client.preferredBarber || '',
        UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || '',
      };
      updateWarningForDraft(nextDraft);
      return nextDraft;
    });
  };
  const quickCreateAvailable = Boolean(
    onQuickCreateClient &&
    normalizeText(draft?.CustomerName) &&
    normalizePhoneValue(draft?.Phone) &&
    !linkedClient
  );
  const handleQuickCreateClient = async () => {
    if (!quickCreateAvailable || quickCreateBusy) return;
    setQuickCreateBusy(true);
    setValidationError('');
    try {
      const createdClient = await onQuickCreateClient({
        Name: normalizeText(draft?.CustomerName),
        Phone: normalizePhoneValue(draft?.Phone),
        Barber: draft?.Barber || '',
      });
      if (createdClient) {
        handleClientAutoFill({
          id: createdClient.id,
          name: createdClient.Name || createdClient.name || draft?.CustomerName,
          phone: createdClient.Phone || createdClient.phone || draft?.Phone,
          preferredBarber: createdClient.Barber || createdClient.barber || draft?.Barber || '',
          telegramId: createdClient.TelegramID || createdClient.telegramId || '',
          TelegramID: createdClient.TelegramID || createdClient.telegramId || '',
        });
      }
    } catch (error) {
      setValidationError(error?.message || 'Не удалось быстро добавить клиента.');
    } finally {
      setQuickCreateBusy(false);
    }
  };
  const sheetNotices = [
    validationError ? { key: 'error', tone: 'error', message: validationError } : null,
    validationWarning ? { key: 'warning', tone: 'warning', message: validationWarning } : null,
  ].filter(Boolean).filter((notice) => !dismissedNoticeKeys.includes(notice.key));
  return (
    <Modal
	      title={isNew ? 'Новая запись' : (draft.CustomerName || 'Без имени')}
	      isOpen={open}
	      onClose={onClose}
	      footer={
	        <div className="flex flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:gap-3">
	          {!isNew && canDelete && (
	            <button
	              onClick={() => onDelete?.(draft)}
	              className={classNames(actionButtonClass, SHEET_FOOTER_BUTTON_CLASS, 'crm-danger-btn')}
              aria-label="Удалить"
              title="Удалить"
            >
              <IconTrash className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Удалить</span>
            </button>
          )}
          {!isNew && (
            <button
              onClick={handleMarkCompleted}
              className={classNames(actionButtonClass, SHEET_FOOTER_BUTTON_CLASS, 'crm-tonal-btn text-[color:var(--crm-primary)]')}
              aria-label="Выполнено"
              title="Выполнено"
            >
              <IconCheck className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Выполнено</span>
            </button>
          )}
          <button
            onClick={onClose}
            className={classNames(actionButtonClass, SHEET_FOOTER_BUTTON_CLASS, 'crm-ghost-btn')}
            aria-label="Отмена"
            title="Отмена"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Отмена</span>
          </button>
          <button
            onClick={handleSubmit}
            className={classNames(actionButtonClass, SHEET_FOOTER_BUTTON_CLASS, 'bg-[color:var(--crm-primary)] text-[color:var(--crm-primary-on)] hover:brightness-110')}
            aria-label="Сохранить"
            title="Сохранить"
          >
            <IconSave className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Сохранить</span>
          </button>
        </div>
      }
    >
      {sheetNotices.length > 0 && (
        <>
          <div className="hidden space-y-2 md:block">
            {sheetNotices.map((notice) => (
              <div
                key={`desktop-${notice.key}`}
                className={classNames(
                  'crm-sheet-notice-pop flex items-start justify-between gap-3 rounded-[18px] px-4 py-3 text-sm shadow-2xl',
                  notice.tone === 'error'
                    ? 'bg-rose-500/95 text-white'
                    : 'bg-[color:var(--crm-highlight)] text-[color:var(--crm-primary-on)]'
                )}
              >
                <span>{notice.message}</span>
                <button
                  type="button"
                  onClick={() => setDismissedNoticeKeys((prev) => [...prev, notice.key])}
                  className="pointer-events-auto mt-0.5 shrink-0 opacity-80 transition hover:opacity-100"
                  aria-label="Закрыть уведомление"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="pointer-events-none fixed inset-x-4 bottom-[calc(max(env(safe-area-inset-bottom),0.75rem)+4.95rem)] z-[90] flex flex-col gap-2 md:hidden">
            {sheetNotices.map((notice) => (
              <div
                key={`mobile-${notice.key}`}
                className={classNames(
                  'crm-sheet-notice-pop pointer-events-auto flex items-start justify-between gap-3 rounded-[18px] px-4 py-3 text-sm shadow-2xl',
                  notice.tone === 'error'
                    ? 'bg-rose-500/95 text-white'
                    : 'bg-[color:var(--crm-highlight)] text-[color:var(--crm-primary-on)]'
                )}
              >
                <span>{notice.message}</span>
                <button
                  type="button"
                  onClick={() => setDismissedNoticeKeys((prev) => [...prev, notice.key])}
                  className="mt-0.5 shrink-0 opacity-80 transition hover:opacity-100"
                  aria-label="Закрыть уведомление"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
	        <ClientLookupInput
	          label="Имя клиента"
	          value={draft.CustomerName || ''}
	          onChange={(nextValue) => handleChange('CustomerName', nextValue)}
          clients={clients}
          onSelectClient={handleClientAutoFill}
        />
        <div className="space-y-1">
          <label className="text-sm text-slate-300">Телефон</label>
          <input
            name="appointmentPhone"
            aria-label="Телефон клиента"
            type="tel"
            value={draft.Phone || ''}
            onChange={(event) => handleChange('Phone', event.target.value)}
            placeholder="+7..."
            className="h-11 w-full px-3 text-white"
          />
        </div>
        {quickCreateAvailable && (
          <div className="col-span-full">
            <button
              type="button"
              onClick={handleQuickCreateClient}
              disabled={quickCreateBusy}
              className={classNames(
                'crm-tonal-btn h-10 min-h-0 px-4 text-sm text-white',
                quickCreateBusy && 'cursor-not-allowed opacity-60'
              )}
            >
              {quickCreateBusy ? 'Добавляю клиента...' : 'Быстро добавить нового клиента'}
            </button>
          </div>
        )}
        <CustomSelect
          value={draft.Barber || ''}
          onChange={(nextValue) => handleChange('Barber', nextValue)}
          options={[{ value: '', label: 'Барбер' }, ...((options.barbers || []).map((barber) => ({ value: barber, label: barber })))]}
          placeholder="Барбер"
          buttonClassName="h-11 px-4"
        />
        <div className="relative">
          <input
            ref={appointmentDateInputRef}
            name="appointmentDate"
            aria-label="Дата"
            type="date"
            value={draft.Date ? String(draft.Date).slice(0, 10) : ''}
            onChange={(event) => handleChange('Date', event.target.value)}
            className="crm-sheet-control crm-sheet-date h-11 w-full px-3 pr-10 text-white"
          />
          <button
            type="button"
            onClick={openAppointmentDatePicker}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
            aria-label="Показать окно выбора даты"
            title="Показать окно выбора даты"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 3.5V7M16 3.5V7M4 9.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="space-y-2">
          <AppointmentTimeField
            startValue={appointmentStartTime}
            endValue={appointmentEndTime}
            onChange={handleStartTimeChange}
            onEndChange={handleEndTimeChange}
            manualEndEnabled
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-slate-300">Статус</label>
          <CustomSelect
            value={draft.Status || ''}
            onChange={(nextValue) => handleChange('Status', nextValue)}
            options={[...((options.statuses || []).map((status) => ({ value: status, label: status })))]}
            placeholder="Статус"
            buttonClassName="h-11 px-4"
          />
        </div>
	        <div className="col-span-full w-full min-w-0">
	          <MultiSelectCheckboxes
	            label="Услуги"
	            options={appointmentServiceOptions}
	            value={servicesSelection}
	            onChange={(selected) => handleChange('Services', selected.join(', '))}
            placeholder="Нет доступных услуг"
          />
        </div>
      </div>
      <div className="crm-inline-panel mt-4">
        <button
          type="button"
          onClick={() => setDetailsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left"
        >
          <p className="text-sm font-semibold text-white">Данные о записи</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={classNames('h-4 w-4 text-slate-400 transition-transform', detailsOpen ? 'rotate-180' : 'rotate-0')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={classNames('overflow-hidden transition-all duration-200', detailsOpen ? 'max-h-64' : 'max-h-0')}>
          <dl className="px-4 py-2 text-sm text-slate-300">
            {recordDetails.map((item) => (
              <div key={item.key} className="flex items-center justify-between gap-3 py-2">
                <dt className="text-xs text-slate-400">{item.label}</dt>
                <dd className={classNames('text-right font-semibold', item.accent)}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Modal>
  );
};

