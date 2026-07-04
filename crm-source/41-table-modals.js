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
                onChange={(event) => {
                  const val = event.target.value;
                  const isPhoneField = column.key.toLowerCase() === 'phone';
                  const formattedVal = isPhoneField ? formatPhoneDisplay(val) : val;
                  setDraft((prev) => ({ ...prev, [column.key]: formattedVal }));
                }}
                className="w-full px-3 py-2 text-white"
              />
            </div>
          );
        })}
      </form>
    </Modal>
  );
};
const ProfileModal = ({
  state,
  isOpen,
  open: openProp,
  client: clientProp,
  onClose,
  barbers = [],
  role = ROLE_OWNER,
  onUpdate = null,
  onAdjustBs = null,
  onAddWarning = null,
  onBlockClient = null,
  onDelete = null,
  onRequestConfirm = null,
  fetchHistory = null,
}) => {
  const effectiveOpen = Boolean(state ? state.open : (isOpen !== undefined ? isOpen : openProp));
  const externalLoading = state ? state.loading : false;
  const externalData = state ? state.data : null;

  const [modalRecord, setModalRecord] = useState(null);
  const [history, setHistory] = useState([]);
  const [internalLoading, setInternalLoading] = useState(false);
  const [error, setError] = useState('');
  const [blockState, setBlockState] = useState(null);
  const [blockBusy, setBlockBusy] = useState(false);
  const [saveBusy, setSaveBusy] = useState(false);

  const [bsMode, setBsMode] = useState('add');
  const [bsInput, setBsInput] = useState('');
  const [bsComment, setBsComment] = useState('');
  const [bsError, setBsError] = useState('');
  const [bsPanelOpen, setBsPanelOpen] = useState(false);

  const [warningComment, setWarningComment] = useState('');
  const [warningBusy, setWarningBusy] = useState(false);
  const [warningError, setWarningError] = useState('');
  const [warningPanelOpen, setWarningPanelOpen] = useState(false);

  useEffect(() => {
    if (!effectiveOpen) {
      setModalRecord(null);
      setHistory([]);
      setError('');
      setBlockState(null);
      setBsInput('');
      setBsComment('');
      setBsError('');
      setWarningComment('');
      setWarningError('');
      setBsPanelOpen(false);
      setWarningPanelOpen(false);
      setBlockBusy(false);
      setSaveBusy(false);
      setWarningBusy(false);
      setInternalLoading(false);
      return;
    }

    const sourceUser = externalData?.user || clientProp || externalData || null;
    const sourceAppts = externalData?.appointments || [];

    if (sourceUser) {
      setModalRecord({
        ...sourceUser,
        Name: sourceUser.Name || sourceUser.name || '',
        Phone: sourceUser.Phone || sourceUser.phone || '',
        TelegramID: sourceUser.TelegramID || sourceUser.telegramId || '',
        Barber: sourceUser.Barber || sourceUser.barber || '',
      });
      setHistory(buildVisitHistory(sourceAppts));
    }

    if (externalData?.error) {
      setError(externalData.error);
    } else {
      setError('');
    }

    if (fetchHistory && sourceUser && (sourceUser.Name || sourceUser.name)) {
      setInternalLoading(true);
      Promise.resolve(fetchHistory(sourceUser))
        .then((profile) => {
          if (profile?.user) {
            setModalRecord((prev) => ({
              ...(prev || {}),
              ...profile.user,
              Name: profile.user.Name || profile.user.name || prev?.Name || '',
              Phone: profile.user.Phone || profile.user.phone || prev?.Phone || '',
              TelegramID: profile.user.TelegramID || profile.user.telegramId || prev?.TelegramID || '',
              Barber: profile.user.Barber || profile.user.barber || prev?.Barber || '',
            }));
          }
          if (profile?.appointments) {
            setHistory(buildVisitHistory(profile.appointments));
          }
        })
        .catch((err) => setError(err?.message || 'Не удалось загрузить историю'))
        .finally(() => setInternalLoading(false));
    }
  }, [effectiveOpen, externalData, clientProp, fetchHistory]);

  const barberOptions = useMemo(() => {
    if (Array.isArray(barbers) && barbers.length) {
      return barbers.map((b) => (typeof b === 'string' ? b : b.name || b.Name || '')).filter(Boolean);
    }
    return [];
  }, [barbers]);

  const warningCount = Number(blockState?.warningCount ?? modalRecord?.warningCount ?? externalData?.warningCount ?? externalData?.user?.warningCount ?? 0);
  const manualBlocked = Boolean(blockState?.manualBlocked ?? modalRecord?.manualBlocked ?? externalData?.manualBlocked ?? externalData?.user?.manualBlocked);
  const isBlocked = blockState?.isBlocked ?? blockState?.blocked ?? modalRecord?.isBlocked ?? externalData?.isBlocked ?? externalData?.user?.isBlocked ?? manualBlocked;
  const isOwner = role === ROLE_OWNER || role === ROLE_CREATOR;

  const clientAvatarSrc = resolveAssetUrl(
    normalizeImagePath(modalRecord?.avatarUrl || modalRecord?.AvatarURL || externalData?.user?.avatarUrl || externalData?.user?.AvatarURL || '')
  );

  const currentBsBalance = Math.max(0, Math.trunc(Number(modalRecord?.bsBalance ?? externalData?.user?.bsBalance ?? 0) || 0));
  const parsedBsAmount = parseBsEditorAmount(bsInput);
  const hasBsDraft = String(bsInput || '').trim().length > 0;
  const signedBsAmount = bsMode === 'subtract' ? -parsedBsAmount : parsedBsAmount;
  const projectedBsBalance = bsMode === 'set' ? parsedBsAmount : currentBsBalance + signedBsAmount;

  const handleFieldChange = (field, value) => {
    setModalRecord((prev) => ({ ...prev, [field]: value }));
  };

  const handleBsFieldChange = (field, value) => {
    if (field === 'bsInput') setBsInput(value);
    if (field === 'bsMode') setBsMode(value);
    if (field === 'bsComment') setBsComment(value);
    if (field === 'bsInput' || field === 'bsMode') setBsError('');
  };

  const handleWarningCommentChange = (value) => {
    setWarningComment(value);
    setWarningError('');
  };

  const handleSave = async () => {
    if (!modalRecord) return;
    const recordId = getRecordId(modalRecord) || modalRecord.id || modalRecord.telegramId;
    if (saveBusy) return;

    let normalizedBsAmount = parsedBsAmount;
    if (hasBsDraft) {
      if (Number.isNaN(parsedBsAmount)) {
        setBsError('Введите целое число. Например: 120 или 15.');
        return;
      }
      if (bsMode === 'set' && normalizedBsAmount < 0) {
        setBsError('Баланс BS не может быть отрицательным.');
        return;
      }
      if (bsMode !== 'set' && projectedBsBalance < 0) {
        setBsError('После списания баланс не может уйти в минус.');
        return;
      }
    }

    setSaveBusy(true);
    setBsError('');
    setError('');

    try {
      if (typeof onUpdate === 'function' && recordId) {
        await onUpdate(recordId, {
          Name: modalRecord.Name,
          Phone: modalRecord.Phone,
          TelegramID: modalRecord.TelegramID,
          Barber: modalRecord.Barber,
        }, { tableId: 'Users' });
      }
      if (hasBsDraft && typeof onAdjustBs === 'function' && recordId) {
        const result = await onAdjustBs(recordId, {
          mode: bsMode === 'set' ? 'set' : 'adjust',
          amountBs: bsMode === 'set' ? normalizedBsAmount : signedBsAmount,
          comment: bsComment,
        });
        if (result?.bsBalance !== undefined) {
          setModalRecord((prev) => ({ ...prev, bsBalance: result.bsBalance }));
        }
      }
      onClose?.();
    } catch (err) {
      setError(err?.message || 'Не удалось сохранить изменения.');
    } finally {
      setSaveBusy(false);
    }
  };

  const handleBlockToggle = async () => {
    const recordId = getRecordId(modalRecord) || modalRecord?.id;
    if (!onBlockClient || !recordId) return;
    setBlockBusy(true);
    setError('');
    const nextBlocked = !isBlocked;
    try {
      const result = await onBlockClient(recordId, nextBlocked);
      setBlockState({
        warningCount: result?.warnings ?? warningCount,
        manualBlocked: result?.manualBlocked ?? nextBlocked,
        isBlocked: result?.blocked ?? nextBlocked,
      });
      setModalRecord((prev) => ({ ...prev, isBlocked: result?.blocked ?? nextBlocked, manualBlocked: result?.manualBlocked ?? nextBlocked }));
    } catch (err) {
      setError(err?.message || 'Не удалось обновить статус блокировки');
    } finally {
      setBlockBusy(false);
    }
  };

  const handleAddWarning = async () => {
    const recordId = getRecordId(modalRecord) || modalRecord?.id;
    const comment = String(warningComment || '').trim();
    if (!recordId || typeof onAddWarning !== 'function') return;
    if (!comment) {
      setWarningError('Введите комментарий к предупреждению.');
      return;
    }
    setWarningBusy(true);
    setWarningError('');
    try {
      const result = await onAddWarning(recordId, { comment });
      setWarningComment('');
      setWarningBusy(false);
      setBlockState((prev) => ({
        ...prev,
        warningCount: result?.warnings ?? warningCount + 1,
        isBlocked: result?.blocked ?? isBlocked,
        manualBlocked: result?.manualBlocked ?? manualBlocked,
      }));
      setModalRecord((prev) => ({
        ...prev,
        warningCount: result?.warnings ?? warningCount + 1,
        isBlocked: result?.blocked ?? isBlocked,
      }));
      if (result?.warning) {
        setHistory((prev) => [
          {
            id: result.warning.id,
            Date: result.warning.createdAt,
            Time: '',
            Status: 'warning',
            Barber: 'Предупреждение',
            Services: result.warning.description || comment,
            startDate: new Date(result.warning.createdAt),
            dateLabel: formatDateTime(result.warning.createdAt, ''),
            orderNumber: prev.length + 1,
          },
          ...prev,
        ]);
      }
    } catch (err) {
      setWarningBusy(false);
      setWarningError(err?.message || 'Не удалось добавить предупреждение.');
    }
  };

  const handleDelete = async () => {
    if (!modalRecord) return;
    const confirmed = onRequestConfirm
      ? await onRequestConfirm({
          title: 'Удалить клиента?',
          message: `Клиент «${modalRecord.Name || 'Без имени'}» будет удален без возможности восстановления.`,
          confirmLabel: 'Удалить',
          tone: 'danger',
        })
      : true;
    if (!confirmed) return;
    if (typeof onDelete === 'function') {
      await onDelete(modalRecord, { skipConfirm: true });
    }
    onClose?.();
  };

  const isLoading = externalLoading || internalLoading;

  return (
    <Modal
      title={modalRecord?.Name || 'Клиент'}
      isOpen={effectiveOpen}
      onClose={onClose}
      maxWidthClass="max-w-3xl"
      footer={
        <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3">
          {isOwner && modalRecord && onDelete && (
            <button
              onClick={handleDelete}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                SHEET_FOOTER_BUTTON_CLASS,
                'crm-danger-btn'
              )}
              aria-label="Удалить"
              title="Удалить"
            >
              <IconTrash className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Удалить</span>
            </button>
          )}
          {isOwner && (
          <button
            onClick={handleBlockToggle}
            disabled={blockBusy || !onBlockClient || !modalRecord}
            className={classNames(
              RESPONSIVE_ACTION_BUTTON_CLASS,
              SHEET_FOOTER_BUTTON_CLASS,
              isBlocked
                ? 'crm-tonal-btn text-[color:var(--crm-highlight-text)]'
                : 'crm-danger-btn',
              (blockBusy || !onBlockClient || !modalRecord) && 'cursor-not-allowed opacity-60'
            )}
            aria-label={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
            title={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
          >
            <IconBan className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">{isBlocked ? 'Разблокировать' : 'Заблокировать'}</span>
          </button>
          )}
          <button
            onClick={onClose}
            disabled={saveBusy}
            className={classNames(
              RESPONSIVE_ACTION_BUTTON_CLASS,
              SHEET_FOOTER_BUTTON_CLASS,
              'crm-ghost-btn',
              saveBusy && 'cursor-not-allowed opacity-60'
            )}
            aria-label="Отмена"
            title="Отмена"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Отмена</span>
          </button>
          <button
            onClick={handleSave}
            disabled={saveBusy}
            className={classNames(
              RESPONSIVE_ACTION_BUTTON_CLASS,
              SHEET_FOOTER_BUTTON_CLASS,
              'crm-action-btn',
              saveBusy && 'cursor-not-allowed opacity-60'
            )}
            aria-label="Сохранить"
            title="Сохранить"
          >
            <IconSave className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Сохранить</span>
          </button>
        </div>
      }
    >
      {isLoading && <LoadingState label="Загрузка профиля..." />}
      {!isLoading && error && <ErrorBanner message={error} />}
      {!isLoading && modalRecord && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {clientAvatarSrc ? (
              <img
                src={clientAvatarSrc}
                alt={modalRecord?.Name || 'Клиент'}
                className="h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]"
                aria-hidden="true"
              >
                <IconCalendarDay className="h-6 w-6" />
              </span>
            )}
            <div className="min-w-0">
              <p className="text-lg font-semibold text-white">{modalRecord?.Name || 'Без имени'}</p>
              {modalRecord?.Phone && (
                <button
                  type="button"
                  onClick={() => {
                    const digits = modalRecord.Phone.replace(/\D/g, '');
                    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                      window.location.href = `tel:${digits}`;
                    } else {
                      navigator.clipboard.writeText(digits).catch(() => {});
                    }
                  }}
                  className="text-sm text-[color:var(--crm-primary)] hover:underline cursor-pointer text-left"
                >
                  {formatPhoneInput(modalRecord.Phone)}
                </button>
              )}
            </div>
          </div>
          {isOwner && (
          <div className="crm-inline-panel px-4 py-3">
            <button
              type="button"
              onClick={() => setWarningPanelOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  Предупреждения: {warningCount}{isBlocked ? ' (Заблокирован)' : ''}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {isBlocked && <span className="rounded-full bg-[color:var(--crm-highlight-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--crm-highlight-text)]">Заблокирован</span>}
                <svg className={classNames('h-4 w-4 text-[var(--crm-muted)] transition-transform', warningPanelOpen && 'rotate-180')} viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
            <div className={classNames('crm-sheet-disclosure', warningPanelOpen && 'crm-sheet-disclosure-open')}>
              <div className="crm-sheet-disclosure-inner">
                <div className="grid gap-2 pt-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <label className="space-y-1 text-sm text-slate-300">
                  Комментарий
                  <input
                    value={warningComment}
                    onChange={(event) => handleWarningCommentChange(event.target.value)}
                    placeholder="Например, грубое опоздание или нарушение правил"
                    className="h-10 w-full px-3 text-white"
                  />
                </label>
                <button
                  type="button"
                  onClick={handleAddWarning}
                  disabled={warningBusy || !onAddWarning}
                  className={classNames(
                    'crm-action-btn h-10 min-h-0 px-4 text-sm',
                    (warningBusy || !onAddWarning) && 'cursor-not-allowed opacity-60'
                  )}
                >
                  Добавить
                </button>
                {warningError && <p className="text-sm text-rose-300 sm:col-span-2">{warningError}</p>}
                </div>
              </div>
            </div>
          </div>
          )}
          {isOwner && (
          <div className="grid grid-cols-2 gap-3">
            <label className="col-span-2 space-y-1 text-sm text-slate-300 md:col-span-1">
              Имя
              <input
                name="clientName"
                aria-label="Имя клиента"
                value={modalRecord.Name || ''}
                onChange={(event) => handleFieldChange('Name', event.target.value)}
                className="h-10 w-full px-3 text-white"
              />
            </label>
            <label className="col-span-2 space-y-1 text-sm text-slate-300 md:col-span-1">
              Телефон
              <input
                name="clientPhone"
                aria-label="Телефон клиента"
                value={modalRecord.Phone || ''}
                onChange={(event) => handleFieldChange('Phone', event.target.value)}
                className="h-10 w-full px-3 text-white"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-300">
              Telegram ID
              <input
                name="clientTelegram"
                aria-label="Telegram ID"
                value={modalRecord.TelegramID || ''}
                onChange={(event) => handleFieldChange('TelegramID', event.target.value)}
                className="h-10 w-full px-3 text-white"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-300">
              {"Любимый барбер"}
              <CustomSelect
                value={modalRecord.Barber || ''}
                onChange={(value) => handleFieldChange('Barber', value)}
                buttonClassName="!h-10 min-h-0 px-3"
                portalMenu
                placeholder="Не выбран"
                options={[
                  { value: '', label: 'Не выбран' },
                  ...barberOptions.map((barber) => ({ value: barber, label: barber })),
                ]}
              />
            </label>
          </div>
          )}
          {isOwner && (
          <div className="crm-soft-card p-3">
            <button
              type="button"
              onClick={() => setBsPanelOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-3 rounded-[22px] text-left"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{"Баланс BS"}</p>
              </div>
              <div className="flex items-center gap-3 text-right">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--crm-muted)]">{"Сейчас BS"}</p>
                  <p className="text-sm font-semibold text-white">{currentBsBalance} BS</p>
                </div>
                <svg className={classNames('h-4 w-4 text-[var(--crm-muted)] transition-transform', bsPanelOpen && 'rotate-180')} viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
            <div className={classNames('crm-sheet-disclosure', bsPanelOpen && 'crm-sheet-disclosure-open')}>
              <div className="crm-sheet-disclosure-inner">
                <div className="space-y-3 pt-1">
                <div className="grid grid-cols-2 gap-2">
                  <label className="space-y-1 text-sm text-slate-300">
                    {"Режим"}
                    <CustomSelect
                      value={bsMode}
                      onChange={(value) => handleBsFieldChange('bsMode', value)}
                      buttonClassName="!h-10 min-h-0 px-3"
                      portalMenu
                      options={[
                        { value: 'add', label: 'Прибавить' },
                        { value: 'subtract', label: 'Списать' },
                        { value: 'set', label: 'Установить вручную' },
                      ]}
                    />
                  </label>
                  <label className="space-y-1 text-sm text-slate-300">
                    {bsMode === 'set'
                      ? "Новый баланс"
                      : bsMode === 'subtract'
                        ? "Сумма списания"
                        : "Сумма начисления"}
                    <input
                      name="clientBs"
                      aria-label={"Баланс BS"}
                      value={bsInput}
                      onChange={(event) => handleBsFieldChange('bsInput', event.target.value)}
                      placeholder={bsMode === 'set' ? "Например, 120" : "Например, 15"}
                      className="h-10 w-full px-3 text-white"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] bg-[color:var(--crm-surface-4)]/70 px-3 py-2 text-sm">
                  <span className="text-[var(--crm-muted)]">{"Будет"}</span>
                  <span className={classNames('font-semibold', projectedBsBalance < 0 ? 'text-rose-300' : 'text-white')}>{Number.isNaN(projectedBsBalance) ? '?' : `${projectedBsBalance} BS`}</span>
                </div>
                <label className="space-y-1 text-sm text-slate-300">
                  {"Комментарий"}
                  <input
                    name="clientBsComment"
                    aria-label={"Комментарий к изменению BS"}
                    value={bsComment}
                    onChange={(event) => handleBsFieldChange('bsComment', event.target.value)}
                    placeholder={"Например, ручная корректировка или списание за услугу"}
                    className="h-10 w-full px-3 text-white"
                  />
                </label>
                {bsError && <p className="text-sm text-rose-300">{bsError}</p>}
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="space-y-2">
            <p className="text-sm text-[var(--crm-muted)]">История визитов</p>
            <VisitHistoryList
              visits={history}
              loading={isLoading}
              error={error}
              emptyMessage="История визитов пуста."
              maxHeightClass="max-h-56"
            />
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
  barbers = [],
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
    setManualEndOverride(Boolean(parseTimeRangeParts(appointment?.Time || '').end));
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
  const getServicesPrice = useCallback(
    (servicesValue, barberName) => {
      const selectedBarber = (barbers || []).find(
        (b) => normalizeText(b.name).toLowerCase() === normalizeText(barberName || '').toLowerCase()
      );
      const barberId = selectedBarber?.id;
      return parseMultiValue(servicesValue).reduce((sum, serviceName) => {
        const key = canonicalizeName(serviceName).toLowerCase();
        const service = (serviceCatalog || []).find(
          (s) => canonicalizeName(s?.name || '').toLowerCase() === key
        );
        if (!service) return sum;
        const prices = service.prices || {};
        const price = barberId ? (prices[barberId] ?? prices[selectedBarber?.name]) : null;
        return sum + (Number(price) || 0);
      }, 0);
    },
    [barbers, serviceCatalog]
  );

  const totalPrice = useMemo(
    () => getServicesPrice(draft?.Services, draft?.Barber),
    [draft?.Services, draft?.Barber, getServicesPrice]
  );
  const coverBs = draft?.CoverBs || 0;
  const discountRub = draft?.DiscountRub || 0;
  const amountToPay = Math.max(0, totalPrice - discountRub);

  const servicesSelection = parseMultiValue(draft?.Services);
  const appointmentServiceOptions = useMemo(() => {
    const list = dedupeOptionList(options.services || []);
    if (!list.includes('Прочее')) {
      list.push('Прочее');
    }
    return list;
  }, [options.services]);
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
      const nextServices = parseMultiValue(nextDraft.Services);
      if (nextServices.includes('Прочее')) {
        return nextDraft;
      }
      const start = extractTimeStart(nextDraft.Time || '');
      if (!start) return nextDraft;
      const duration = getServicesDuration(nextDraft.Services);
      const currentEnd = parseTimeRangeParts(nextDraft.Time || '').end || '';
      const isManual = preserveManualEnd || manualEndOverride;

      let nextEnd = currentEnd;
      let isStillManual = isManual;

      if (isManual && currentEnd) {
        const startMins = parseSlotTimeMinutes(start);
        const endMins = parseSlotTimeMinutes(currentEnd);
        const manualDuration = (endMins - startMins + 1440) % 1440;
        if (duration > manualDuration) {
          nextEnd = duration > 0 ? addMinutesToTimeToken(start, duration) : currentEnd;
          isStillManual = false;
          setManualEndOverride(false);
        } else {
          nextEnd = currentEnd;
        }
      } else {
        nextEnd = duration > 0 ? addMinutesToTimeToken(start, duration) : currentEnd;
      }

      const nextTime = isStillManual
        ? buildManualTimeRangeValue(start, nextEnd)
        : buildTimeRangeValue(start, nextEnd);
      if (nextTime === (nextDraft.Time || '')) return nextDraft;
      return { ...nextDraft, Time: nextTime };
    },
    [getServicesDuration, manualEndOverride]
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
    setDraft((prev) => {
      if (!prev) return prev;
      const nextDraft = field === 'Services' || field === 'Time'
        ? syncDraftTimeWithServices({ ...prev, [field]: value }, { preserveManualEnd: manualEndOverride })
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
        Comment: nextDraft.Comment || '',
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
	        <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:gap-3">
	          <div className="mr-auto flex items-center gap-3 text-sm">
	            <div className="flex flex-col items-start leading-tight">
	              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--crm-muted)]">К оплате</span>
	              <span className="text-lg font-extrabold text-[color:var(--crm-primary)]">{amountToPay} ₽</span>
	            </div>
	            {coverBs > 0 && (
	              <div className="h-6 w-px bg-white/10" />
	            )}
	            {coverBs > 0 && (
	              <div className="flex flex-col items-start leading-tight text-xs text-amber-400">
	                <span className="text-[9px] uppercase font-semibold tracking-wider text-[var(--crm-muted)]">Списано</span>
	                <span>-{coverBs} BS ({discountRub} ₽)</span>
	              </div>
	            )}
	          </div>
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
            onChange={(event) => handleChange('Phone', formatPhoneDisplay(event.target.value))}
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
	            onChange={(selected) => {
                let nextSelected = selected;
                if (selected.includes('Прочее')) {
                  const wasProcheeSelected = servicesSelection.includes('Прочее');
                  if (wasProcheeSelected) {
                    nextSelected = selected.filter(x => x !== 'Прочее');
                  } else {
                    nextSelected = ['Прочее'];
                  }
                }
                handleChange('Services', nextSelected.join(', '));
              }}
            placeholder="Нет доступных услуг"
          />
        </div>
      </div>

      <div className="crm-inline-panel mt-4 p-4 space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--crm-muted)]">Комментарий</label>
        <textarea
          name="appointmentComment"
          aria-label="Комментарий"
          value={draft.Comment || ''}
          onChange={(event) => handleChange('Comment', event.target.value)}
          placeholder="Комментарий к записи..."
          rows={3}
          className="w-full text-sm text-white bg-white/5 rounded-xl p-3 border border-white/5 focus:outline-none focus:ring-1 focus:ring-[color:var(--crm-primary)] resize-none"
        />
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

