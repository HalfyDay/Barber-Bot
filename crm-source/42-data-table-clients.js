const DataTable = ({
  tableId,
  rows,
  searchTerm = '',
  columns,
  hiddenColumns,
  sortConfig,
  onSort,
  onUpdate,
  onDelete,
  options,
  onOpenProfile,
  onOpenAppointment,
  groupByDate = true,
  appointmentCalendarView = 'week',
  appointmentCalendarScale = 'normal',
  appointmentCalendarDate = '',
  setAppointmentCalendarDate,
  setAppointmentCalendarView,
  appointmentTodayJumpSignal = 0,
  appointmentSchedules = [],
  onCreateAppointment,
  selectedBarber = 'all',
}) => {
  if (!rows.length) {
    return <p className="text-[var(--crm-muted)]">Нет записей.</p>;
  }
  const visibleColumns = columns.filter((column) => !hiddenColumns.includes(column.key));
  const isAppointmentsTable = tableId === 'Appointments';
  const canGroupAppointments = isAppointmentsTable && groupByDate && (!sortConfig || sortConfig.key === 'Date');
  const groupedRows = isAppointmentsTable
    ? canGroupAppointments
      ? buildAppointmentGroups(rows, sortConfig?.direction || 'desc')
      : [{ key: 'default', label: null, rows }]
    : [{ key: 'default', label: null, rows }];
  if (isAppointmentsTable) {
    return (
      <AppointmentsCalendarView
        rows={rows}
        searchTerm={searchTerm}
        schedules={appointmentSchedules}
        onOpen={onOpenAppointment}
        onOpenProfile={onOpenProfile}
        onCreateAppointment={onCreateAppointment}
        viewMode={appointmentCalendarView}
        scaleMode={appointmentCalendarScale}
        calendarDate={appointmentCalendarDate}
        setCalendarDate={setAppointmentCalendarDate}
        setViewMode={setAppointmentCalendarView}
        todayJumpSignal={appointmentTodayJumpSignal}
        selectedBarber={selectedBarber}
      />
    );
  }
  if (tableId === 'Schedules') {
    return <SchedulesBoard rows={rows} columns={visibleColumns} onUpdate={onUpdate} options={options} />;
  }
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((record, index) => {
          const recordId = getRecordId(record);
          const cardKey = recordId || `${tableId}-card-${index}`;
          return (
            <article key={cardKey} className="crm-soft-card space-y-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--crm-muted)]">
                    {tableId === 'Users' ? 'Клиент' : tableId === 'Schedules' ? 'Расписание' : 'Запись'}
                  </p>
                  <p className="text-base font-semibold text-white">{record[visibleColumns[0]?.key] || '-'}</p>
                </div>
                {onDelete && (
                  <button
                    onClick={() => onDelete(record)}
                    className="crm-danger-btn rounded-full p-2"
                    aria-label="Удалить запись"
                  >
                    <IconTrash className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="grid gap-3">
                {visibleColumns.map((column) => (
                  <div key={`${cardKey}-${column.key}`} className="crm-soft-panel space-y-1 p-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--crm-muted)]">{column.label}</p>
                    <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="hidden 2xl:block -mx-4 overflow-x-auto overflow-y-visible pb-3 sm:mx-0">
        <table className="crm-table-shell min-w-[760px] w-full table-auto text-[13px] leading-tight sm:text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.25em] text-[var(--crm-muted)]">
              {visibleColumns.map((column) => (
                <th
                  key={column.key}
                  className={classNames('px-2 py-1.5 whitespace-nowrap', column.align === 'center' && 'text-center', column.minWidth)}
                  onClick={() => column.sortable !== false && onSort(column.key)}
                >
                  <div className={classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')}>
                    {column.label}
                    {column.sortable !== false && <SortIndicator direction={sortConfig?.key === column.key ? sortConfig.direction : null} />}
                  </div>
                </th>
              ))}
              {onDelete && <th className="px-2 py-1.5 text-right" aria-label="Действия" />}
            </tr>
          </thead>
          <tbody>
            {groupedRows.map((group) => (
              <Fragment key={group.key}>
                {group.label && (
                  <tr className="bg-transparent">
                    <td colSpan={visibleColumns.length + (onDelete ? 1 : 0)} className="px-2 py-2">
                      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--crm-muted)]">
                        <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                        {group.label}
                        <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                      </div>
                    </td>
                  </tr>
                )}
                {group.rows.map((record) => (
                  <tr key={getRecordId(record)} className="border-t crm-table-divider">
                    {visibleColumns.map((column) => (
                      <td
                        key={column.key}
                        className={classNames(
                          'px-2 py-1.5 align-top text-[13px] leading-snug sm:text-sm',
                          column.align === 'center' && 'text-center',
                          column.noWrap ? 'whitespace-nowrap' : 'whitespace-normal break-words'
                        )}
                      >
                        <EditableCell record={record} column={column} options={options} onUpdate={onUpdate} onOpenProfile={onOpenProfile} tableId={tableId} />
                      </td>
                    ))}
                    {onDelete && (
                      <td className="px-2 py-1.5 text-right">
                        <button
                          onClick={() => onDelete(record)}
                          className="crm-danger-btn inline-flex items-center rounded-full px-2 py-1.5 text-xs"
                          aria-label="Удалить запись"
                        >
                          <IconTrash />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const ClientsList = ({
  clients = [],
  barbers = [],
  onUpdate,
  onAdjustBs,
  onDelete,
  fetchHistory,
  onRequestConfirm,
  onBlockClient,
  onAddWarning,
}) => {
  const [showArchivedClients, setShowArchivedClients] = useState(false);
  const [bsPanelOpen, setBsPanelOpen] = useState(false);
  const [warningPanelOpen, setWarningPanelOpen] = useState(false);
  const [modalState, setModalState] = useState({
    open: false,
    record: null,
    history: [],
    loading: false,
    error: '',
    blockBusy: false,
    saveBusy: false,
    bsMode: 'add',
    bsInput: '',
    bsComment: '',
    bsError: '',
    warningComment: '',
    warningBusy: false,
    warningError: '',
  });
  const barberOptions = useMemo(() => (Array.isArray(barbers) ? barbers.filter(Boolean) : []), [barbers]);
  const getClientLastVisitDate = useCallback((client) => {
    if (!client?.lastHaircutDate) return null;
    return (
      getAppointmentStartDate(
        client.lastHaircutDate,
        client.lastHaircutTime || '00:00',
        client.lastHaircutStartDateTime || null,
      ) || null
    );
  }, []);
  const classifyClientActivity = useCallback((client) => {
    const totalConfirmed = Number(client?.totalConfirmed || 0);
    const lastVisit = getClientLastVisitDate(client);
    if (totalConfirmed <= 0 || !lastVisit) {
      return {
        key: 'never',
        label: 'Ни разу не посещал',
        accent: 'text-slate-200',
        nameClassName: 'text-slate-300',
      };
    }
    const now = new Date();
    const threeMonthsAgo = new Date(now);
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    if (lastVisit >= threeMonthsAgo) {
      return {
        key: 'regular',
        label: 'Постоянный',
        accent: 'text-[color:var(--crm-primary)]',
        nameClassName: 'text-[color:var(--crm-primary)]',
      };
    }
    if (lastVisit >= sixMonthsAgo) {
      return {
        key: 'rare',
        label: 'Редкий',
        accent: 'text-[color:var(--crm-highlight-text)]',
        nameClassName: 'text-[color:var(--crm-highlight-text)]',
      };
    }
    return {
      key: 'inactive',
      label: 'Не ходит',
      accent: 'text-rose-200',
      nameClassName: 'text-rose-300',
    };
  }, [getClientLastVisitDate]);
  const categorizedClients = useMemo(() => {
    const visible = [];
    const hidden = [];
    (Array.isArray(clients) ? clients : []).forEach((client) => {
      const activity = classifyClientActivity(client);
      const enriched = { ...client, activity };
      if (activity.key === 'regular' || activity.key === 'rare') {
        visible.push(enriched);
      } else {
        hidden.push(enriched);
      }
    });
    return { visible, hidden };
  }, [clients, classifyClientActivity]);
  const openClientModal = async (client) => {
    if (!client) return;
    setModalState({
      open: true,
      record: { ...client },
      history: [],
      loading: true,
      error: '',
      blockBusy: false,
      saveBusy: false,
      bsMode: 'add',
      bsInput: '',
      bsComment: '',
      bsError: '',
      warningComment: '',
      warningBusy: false,
      warningError: '',
    });
    try {
      if (fetchHistory && client.Name) {
        const profile = await fetchHistory(client);
        const history = buildVisitHistory(profile?.appointments || []);
        setModalState((prev) => ({
          ...prev,
          history,
          loading: false,
          record: profile?.user ? { ...prev.record, ...profile.user } : prev.record,
        }));
      } else {
        setModalState((prev) => ({ ...prev, loading: false, history: [] }));
      }
    } catch (error) {
      setModalState((prev) => ({ ...prev, loading: false, error: error.message || 'Не удалось загрузить историю' }));
    }
  };
  const closeClientModal = () =>
    setModalState({
      open: false,
      record: null,
      history: [],
      loading: false,
      error: '',
      blockBusy: false,
      saveBusy: false,
      bsMode: 'add',
      bsInput: '',
      bsComment: '',
      bsError: '',
      warningComment: '',
      warningBusy: false,
      warningError: '',
    });
  const warningCount = Number(modalState.record?.warningCount ?? 0);
  const manualBlocked = Boolean(modalState.record?.manualBlocked);
  const isBlocked =
    (modalState.record?.isBlocked ?? manualBlocked) ||
    warningCount >= CLIENT_BLOCK_THRESHOLD;
  const handleFieldChange = (field, value) => {
    setModalState((prev) => ({ ...prev, record: { ...prev.record, [field]: value } }));
  };
  const handleBsFieldChange = (field, value) => {
    setModalState((prev) => ({ ...prev, [field]: value, bsError: field === 'bsInput' || field === 'bsMode' ? '' : prev.bsError }));
  };
  useEffect(() => {
    if (!modalState.open) {
      setBsPanelOpen(false);
      setWarningPanelOpen(false);
    }
  }, [modalState.open]);
  const currentBsBalance = Math.max(0, Math.trunc(Number(modalState.record?.bsBalance) || 0));
  const parsedBsAmount = parseBsEditorAmount(modalState.bsInput);
  const hasBsDraft = String(modalState.bsInput || '').trim().length > 0;
  const normalizedBsAmount = Number.isFinite(parsedBsAmount) ? Math.abs(parsedBsAmount) : parsedBsAmount;
  const signedBsAmount = !Number.isFinite(normalizedBsAmount)
    ? normalizedBsAmount
    : modalState.bsMode === 'subtract'
      ? -normalizedBsAmount
      : normalizedBsAmount;
  const projectedBsBalance = !hasBsDraft || Number.isNaN(normalizedBsAmount)
    ? currentBsBalance
    : modalState.bsMode === 'set'
      ? normalizedBsAmount
      : currentBsBalance + signedBsAmount;
  const handleSave = async () => {
    if (!modalState.record || typeof onUpdate !== 'function') return;
    const recordId = getRecordId(modalState.record);
    if (!recordId) return;
    if (modalState.saveBusy) return;
    const payload = {
      Name: modalState.record.Name,
      Phone: modalState.record.Phone,
      TelegramID: modalState.record.TelegramID,
      Barber: modalState.record.Barber,
    };
    if (hasBsDraft) {
      if (Number.isNaN(normalizedBsAmount)) {
        setModalState((prev) => ({ ...prev, bsError: 'Введите целое число. Например: 120 или 15.' }));
        return;
      }
      if (modalState.bsMode === 'set' && normalizedBsAmount < 0) {
        setModalState((prev) => ({ ...prev, bsError: 'Баланс BS не может быть отрицательным.' }));
        return;
      }
      if (projectedBsBalance < 0) {
        setModalState((prev) => ({ ...prev, bsError: 'После списания баланс не может уйти в минус.' }));
        return;
      }
    }
    setModalState((prev) => ({ ...prev, saveBusy: true, bsError: '', error: '' }));
    try {
      if (hasBsDraft && typeof onAdjustBs === 'function') {
        await onAdjustBs(recordId, {
          mode: modalState.bsMode === 'set' ? 'set' : 'adjust',
          amountBs: modalState.bsMode === 'set' ? normalizedBsAmount : signedBsAmount,
          comment: modalState.bsComment,
        });
      }
      onUpdate(recordId, payload);
      closeClientModal();
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        saveBusy: false,
        bsError: error.message || 'Не удалось изменить баланс BS.',
      }));
    }
  };
  const handleBlockToggle = async () => {
    if (!modalState.record?.id || typeof onBlockClient !== 'function') return;
    setModalState((prev) => ({ ...prev, blockBusy: true, error: '' }));
    const nextBlocked = !isBlocked;
    try {
      const result = await onBlockClient(modalState.record.id, nextBlocked);
      setModalState((prev) => ({
        ...prev,
        blockBusy: false,
        record: {
          ...prev.record,
          isBlocked: result?.blocked ?? nextBlocked,
          manualBlocked: result?.manualBlocked ?? nextBlocked,
          warningCount: result?.warnings ?? prev.record?.warningCount ?? warningCount,
        },
      }));
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        blockBusy: false,
        error: error.message || 'Не удалось изменить блокировку клиента',
      }));
    }
  };
  const handleWarningCommentChange = (value) => {
    setModalState((prev) => ({ ...prev, warningComment: value, warningError: '' }));
  };
  const handleAddWarning = async () => {
    const comment = String(modalState.warningComment || '').trim();
    if (!modalState.record?.id || typeof onAddWarning !== 'function') return;
    if (!comment) {
      setModalState((prev) => ({ ...prev, warningError: 'Введите комментарий к предупреждению.' }));
      return;
    }
    setModalState((prev) => ({ ...prev, warningBusy: true, warningError: '' }));
    try {
      const result = await onAddWarning(modalState.record.id, { comment });
      setModalState((prev) => ({
        ...prev,
        warningBusy: false,
        warningComment: '',
        record: {
          ...prev.record,
          warningCount: Number(prev.record?.warningCount || 0) + 1,
          noticeCount: Number(prev.record?.noticeCount || 0) + 1,
        },
      }));
      if (result?.warning) {
        setModalState((prev) => ({
          ...prev,
          history: [
            {
              id: result.warning.id,
              Date: result.warning.createdAt,
              Time: '',
              Status: 'warning',
              Barber: 'Предупреждение',
              Services: result.warning.description || comment,
              startDate: new Date(result.warning.createdAt),
              dateLabel: formatDateTime(result.warning.createdAt, ''),
              orderNumber: prev.history.length + 1,
            },
            ...prev.history,
          ],
        }));
      }
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        warningBusy: false,
        warningError: error.message || 'Не удалось добавить предупреждение.',
      }));
    }
  };
  const handleDelete = async () => {
    if (!modalState.record || typeof onDelete !== 'function') return;
    const confirmed = await onRequestConfirm?.({
      title: 'Удалить клиента?',
      message: `Клиент «${modalState.record.Name || 'Без имени'}» будет удален без возможности восстановления.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (onRequestConfirm && !confirmed) return;
    await onDelete(modalState.record, { skipConfirm: true });
    closeClientModal();
  };
  const renderClientsSection = (items, emptyMessage, sectionTone = 'default') => {
    if (!items.length) {
      return <p className="text-[var(--crm-muted)]">{emptyMessage}</p>;
    }
    return (
      <div
        className={classNames(
          'crm-soft-card',
          sectionTone === 'archived' && 'opacity-90',
        )}
      >
        <div className="space-y-1 p-1">
          {items.map((client, index) => {
            const clientNumber = String(index + 1).padStart(2, '0');
            const phoneDisplay = client.Phone ? formatPhoneInput(client.Phone) : '';
            const lastVisitLabel = client.lastHaircutDate
              ? formatDate(client.lastHaircutDate)
              : 'Не был ни разу';
            return (
              <button
                type="button"
                key={client.id}
                onClick={() => openClientModal(client)}
                className="flex w-full cursor-pointer flex-col gap-2 rounded-[22px] px-4 py-3 text-left transition hover:bg-[color:var(--crm-surface-4)] focus:outline-none"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-primary-container)] text-sm font-semibold text-[color:var(--crm-primary)]">
                    {clientNumber}
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className={classNames('text-base font-semibold', client.activity?.nameClassName || 'text-white')}>
                          {client.Name || 'Нет имени'}
                        </p>
                        {client.Barber && <p className="text-xs text-[var(--crm-muted)]">Любимый барбер: {client.Barber}</p>}
                        <p className="text-xs text-[var(--crm-muted)]">
                          Последний визит:{' '}
                          <span className="font-medium text-slate-300">
                            {lastVisitLabel}
                          </span>
                        </p>
                      </div>
                      <div className="hidden text-right text-sm text-slate-300 sm:block">
                        {phoneDisplay && <p>{phoneDisplay}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="space-y-6">
      {clients.length === 0 ? (
        <p className="text-[var(--crm-muted)]">Список клиентов пуст.</p>
      ) : (
        <>
          {renderClientsSection(
            categorizedClients.visible,
            'Нет клиентов, которые посещали салон за последние 6 месяцев.',
          )}
          <div className="crm-soft-card space-y-3 p-4">
            <button
              type="button"
              onClick={() => setShowArchivedClients((prev) => !prev)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <div>
                <p className="text-sm font-semibold text-white">Скрытые категории клиентов</p>
                <p className="text-xs text-[var(--crm-muted)]">
                  Не ходят и ни разу не посещали: {categorizedClients.hidden.length}
                </p>
              </div>
              <span className="rounded-full bg-[color:var(--crm-surface-5)] px-3 py-1 text-xs font-semibold text-[var(--crm-text)]">
                {showArchivedClients ? 'Скрыть' : 'Показать'}
              </span>
            </button>
            {showArchivedClients &&
              renderClientsSection(
                categorizedClients.hidden,
                'Скрытых клиентов нет.',
                'archived',
              )}
          </div>
        </>
      )}
      <Modal
        title={modalState.record?.Name || 'Клиент'}
        isOpen={modalState.open}
        onClose={closeClientModal}
        maxWidthClass="max-w-3xl"
        footer={
          <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3">
            {modalState.record && (
              <button
                onClick={handleDelete}
                className={classNames(
                  RESPONSIVE_ACTION_BUTTON_CLASS,
                  'border border-rose-600 text-rose-200 hover:bg-rose-500/10'
                )}
                aria-label="Удалить"
                title="Удалить"
              >
                <IconTrash className="h-5 w-5" aria-hidden="true" />
                <span className="hidden sm:inline">Удалить</span>
              </button>
            )}
            <button
              onClick={handleBlockToggle}
              disabled={modalState.blockBusy || !onBlockClient || !modalState.record?.id}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                SHEET_FOOTER_BUTTON_CLASS,
                isBlocked
                  ? 'crm-tonal-btn text-[color:var(--crm-highlight-text)]'
                  : 'crm-danger-btn',
                (modalState.blockBusy || !onBlockClient || !modalState.record?.id) && 'cursor-not-allowed opacity-60'
              )}
              aria-label={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
              title={isBlocked ? 'Разблокировать клиента' : 'Заблокировать клиента'}
            >
              <IconBan className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{isBlocked ? 'Разблокировать' : 'Заблокировать'}</span>
            </button>
            <button
              onClick={closeClientModal}
              disabled={modalState.saveBusy}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                SHEET_FOOTER_BUTTON_CLASS,
                'crm-ghost-btn',
                modalState.saveBusy && 'cursor-not-allowed opacity-60'
              )}
              aria-label="Отмена"
              title="Отмена"
            >
              <IconClose className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Отмена</span>
            </button>
            <button
              onClick={handleSave}
              disabled={modalState.saveBusy}
              className={classNames(
                RESPONSIVE_ACTION_BUTTON_CLASS,
                SHEET_FOOTER_BUTTON_CLASS,
                'crm-action-btn',
                modalState.saveBusy && 'cursor-not-allowed opacity-60'
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
        {!modalState.record ? (
          <p className="text-[var(--crm-muted)]">Выберите клиента.</p>
        ) : (
          <div className="space-y-4">
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
                  {modalState.error && <p className="text-xs text-rose-300">{modalState.error}</p>}
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
                      value={modalState.warningComment}
                      onChange={(event) => handleWarningCommentChange(event.target.value)}
                      placeholder="Например, грубое опоздание или нарушение правил"
                      className="h-10 w-full px-3 text-white"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleAddWarning}
                    disabled={modalState.warningBusy || !onAddWarning}
                    className={classNames(
                      'crm-action-btn h-10 min-h-0 px-4 text-sm',
                      (modalState.warningBusy || !onAddWarning) && 'cursor-not-allowed opacity-60'
                    )}
                  >
                    Добавить
                  </button>
                  {modalState.warningError && <p className="text-sm text-rose-300 sm:col-span-2">{modalState.warningError}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="col-span-2 space-y-1 text-sm text-slate-300 md:col-span-1">
                Имя
                <input
                  name="clientName"
                  aria-label="Имя клиента"
                  value={modalState.record.Name || ''}
                  onChange={(event) => handleFieldChange('Name', event.target.value)}
                  className="h-10 w-full px-3 text-white"
                />
              </label>
              <label className="col-span-2 space-y-1 text-sm text-slate-300 md:col-span-1">
                Телефон
                <input
                  name="clientPhone"
                  aria-label="Телефон клиента"
                  value={modalState.record.Phone || ''}
                  onChange={(event) => handleFieldChange('Phone', event.target.value)}
                  className="h-10 w-full px-3 text-white"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-300">
                Telegram ID
                <input
                  name="clientTelegram"
                  aria-label="Telegram ID"
                  value={modalState.record.TelegramID || ''}
                  onChange={(event) => handleFieldChange('TelegramID', event.target.value)}
                  className="h-10 w-full px-3 text-white"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-300">
                {"Любимый барбер"}
                <CustomSelect
                  value={modalState.record.Barber || ''}
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
                        value={modalState.bsMode}
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
                      {modalState.bsMode === 'set'
                        ? "Новый баланс"
                        : modalState.bsMode === 'subtract'
                          ? "Сумма списания"
                          : "Сумма начисления"}
                      <input
                        name="clientBs"
                        aria-label={"Баланс BS"}
                        value={modalState.bsInput}
                        onChange={(event) => handleBsFieldChange('bsInput', event.target.value)}
                        placeholder={modalState.bsMode === 'set' ? "Например, 120" : "Например, 15"}
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
                      value={modalState.bsComment}
                      onChange={(event) => handleBsFieldChange('bsComment', event.target.value)}
                      placeholder={"Например, ручная корректировка или списание за услугу"}
                      className="h-10 w-full px-3 text-white"
                    />
                  </label>
                  {modalState.bsError && <p className="text-sm text-rose-300">{modalState.bsError}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[var(--crm-muted)]">История визитов</p>
              <VisitHistoryList
                visits={modalState.history}
                loading={modalState.loading}
                error={modalState.error}
                emptyMessage="История визитов пуста."
                maxHeightClass="max-h-56"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
