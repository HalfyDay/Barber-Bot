const PositionsView = ({ positions = [], onCreate, onUpdate, onDelete, onRefresh, requestConfirm }) => {
  const [newPosition, setNewPosition] = useState({ name: '', rate: '' });
  const [createSheetOpen, setCreateSheetOpen] = useState(false);
  const [drafts, setDrafts] = useState({});
  const [error, setError] = useState('');
  const [savingKey, setSavingKey] = useState(null);
  const refreshPositionsList = useCallback(async () => {
    if (typeof onRefresh !== 'function') return;
    try {
      await onRefresh();
    } catch (refreshError) {
      console.error('Positions refresh failed', refreshError);
    }
  }, [onRefresh]);
  useEffect(() => {
    setDrafts({});
  }, [positions]);
  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions].sort((a, b) => {
      const leftOrder = Number(a?.orderIndex) || 0;
      const rightOrder = Number(b?.orderIndex) || 0;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
    });
  }, [positions]);
  const normalizeCommissionValue = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return null;
    const clamped = Math.min(Math.max(parsed, 0), 100);
    return clamped;
  };
  const handleCreate = async (event) => {
    event?.preventDefault?.();
    if (!newPosition.name.trim()) {
      setError('Введите название должности.');
      return;
    }
    try {
      setSavingKey('new');
      setError('');
      await onCreate?.({
        name: newPosition.name.trim(),
        commissionRate: normalizeCommissionValue(newPosition.rate),
        orderIndex: sortedPositions.length,
      });
      setNewPosition({ name: '', rate: '' });
      setCreateSheetOpen(false);
      await refreshPositionsList();
    } catch (createError) {
      setError(createError.message || 'Не удалось создать должность.');
    } finally {
      setSavingKey(null);
    }
  };
  const handleDraftChange = (id, field, value) => {
    setDrafts((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: value },
    }));
  };
  const getDraft = (position) => {
    const draft = drafts[position.id];
    const resolvedRate =
      draft?.rate ?? draft?.commissionRate ?? position.commissionRate;
    return {
      name: draft?.name ?? position.name ?? '',
      rate: resolvedRate === undefined || resolvedRate === null ? '' : String(resolvedRate),
    };
  };
  const commitPositionUpdate = useCallback(async (position, draft) => {
    if (!position?.id) return;
    const nextName = (draft?.name || '').trim();
    if (!nextName) {
      throw new Error('Название должности не может быть пустым.');
    }
    await onUpdate?.(position.id, {
      name: nextName,
      commissionRate: normalizeCommissionValue(draft?.rate),
    });
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[position.id];
      return next;
    });
  }, [onUpdate]);
  const pendingChanges = useMemo(
    () =>
      sortedPositions
        .map((position) => {
          const draft = getDraft(position);
          const nextName = draft.name.trim();
          const nextRate = normalizeCommissionValue(draft.rate);
          const currentName = (position.name || '').trim();
          const currentRate = normalizeCommissionValue(position.commissionRate);
          if (nextName === currentName && nextRate === currentRate) {
            return null;
          }
          return { position, draft };
        })
        .filter(Boolean),
    [sortedPositions, drafts]
  );
  const bulkSaving = savingKey === 'bulk';
  const saveablePendingChanges = useMemo(
    () => pendingChanges.filter((change) => change.draft?.name?.trim()),
    [pendingChanges]
  );
  useEffect(() => {
    if (!saveablePendingChanges.length || savingKey) return undefined;
    const autosaveTimer = setTimeout(async () => {
      try {
        setError('');
        for (const change of saveablePendingChanges) {
          setSavingKey(change.position.id);
          await commitPositionUpdate(change.position, change.draft);
        }
        await refreshPositionsList();
      } catch (autosaveError) {
        setError(autosaveError.message || 'Не удалось сохранить изменения.');
      } finally {
        setSavingKey(null);
      }
    }, 450);
    return () => clearTimeout(autosaveTimer);
  }, [commitPositionUpdate, refreshPositionsList, saveablePendingChanges, savingKey]);
  const handleDelete = async (position) => {
    if (!position?.id) return;
    const confirmed = requestConfirm
      ? await requestConfirm({
          title: 'Удалить должность?',
          message: `«${position.name}» будет удалена без возможности восстановления.`,
          confirmLabel: 'Удалить',
          tone: 'danger',
        })
      : true;
    if (!confirmed) return;
    try {
      setSavingKey(position.id);
      setError('');
      await onDelete?.(position.id);
      await refreshPositionsList();
    } catch (deleteError) {
      setError(deleteError.message || 'Не удалось удалить должность.');
    } finally {
      setSavingKey(null);
    }
  };
  return (
    <div className="space-y-6">
      <SectionCard
        title="Должности"
        hideTitleOnMobile
        actions={(
          <button
            type="button"
            onClick={() => {
              setError('');
              setNewPosition({ name: '', rate: '' });
              setCreateSheetOpen(true);
            }}
            className="crm-action-btn w-full px-4 py-2 text-sm sm:w-auto"
          >
            Добавить
          </button>
        )}
      >
        {error && (
          <div className="mt-4">
            <ErrorBanner message={error} />
          </div>
        )}
        <div className="mt-6 space-y-3">
          {sortedPositions.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Должности еще не созданы.</p>}
          {sortedPositions.map((position) => {
            const draft = getDraft(position);
            const isDirty = pendingChanges.some((change) => change.position.id === position.id);
            const isSaving = savingKey === position.id;
            return (
              <div
                key={position.id}
                className="crm-soft-card p-3.5 md:p-4"
              >
                <div className="grid grid-cols-[minmax(0,1fr),4.75rem,2.5rem] items-center gap-2.5 md:flex md:items-center md:gap-4">
                  <div className="min-w-0 md:flex-1">
                      <input
                        name={`positionName-${position.id}`}
                        aria-label="Название должности"
                        value={draft.name}
                        onChange={(event) => handleDraftChange(position.id, 'name', event.target.value)}
                        className="min-w-0 w-full px-4 py-2 text-white md:min-w-[160px]"
                      />
                  </div>
                  <input
                    name={`positionRateMobile-${position.id}`}
                    aria-label="Процент"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={draft.rate}
                    onChange={(event) => handleDraftChange(position.id, 'rate', event.target.value)}
                    placeholder="—"
                    className="w-full px-3 py-2 text-center text-white md:hidden"
                  />
                  <button
                    type="button"
                    onClick={() => handleDelete(position)}
                    disabled={isSaving || bulkSaving}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--crm-error-container)]/18 text-[color:var(--crm-error)] transition hover:bg-[color:var(--crm-error-container)]/28 disabled:cursor-not-allowed disabled:opacity-50 md:hidden"
                    aria-label={`Удалить должность ${position.name}`}
                  >
                    <IconTrash className="h-4 w-4" />
                  </button>
                  <div className="hidden md:block">
                    <input
                      name={`positionRate-${position.id}`}
                      aria-label="Процент"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={draft.rate}
                      onChange={(event) => handleDraftChange(position.id, 'rate', event.target.value)}
                      placeholder="Комиссия, %"
                      className="w-32 px-4 py-2 text-white"
                    />
                  </div>
                  <div className="hidden w-full flex-wrap items-center justify-end gap-3 md:flex md:w-auto md:flex-nowrap">
                    {isSaving && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                        Сохраняем...
                      </span>
                    )}
                    {isDirty && (
                      <span className="rounded-full bg-[color:var(--crm-highlight-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--crm-highlight-text)]">
                        Есть изменения
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(position)}
                      disabled={isSaving || bulkSaving}
                      className="crm-danger-btn flex-1 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 md:flex-none"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>
      <Modal
        title="Новая должность"
        isOpen={createSheetOpen}
        onClose={() => setCreateSheetOpen(false)}
        maxWidthClass="max-w-md"
        footer={(
          <>
            <button
              type="button"
              onClick={() => setCreateSheetOpen(false)}
              className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}
            >
              Отмена
            </button>
            <button
              type="button"
              onClick={handleCreate}
              disabled={savingKey === 'new'}
              className={classNames('crm-action-btn disabled:cursor-not-allowed disabled:opacity-50', SHEET_FOOTER_BUTTON_CLASS)}
            >
              {savingKey === 'new' ? 'Добавляем...' : 'Добавить'}
            </button>
          </>
        )}
      >
        <form onSubmit={handleCreate} className="space-y-3">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-300">Название</label>
            <input
              name="positionName"
              aria-label="Название должности"
              value={newPosition.name}
              onChange={(event) => setNewPosition((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Название должности"
              className="w-full px-4 py-2 text-white"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-300">Процент</label>
            <input
              name="positionRate"
              aria-label="Процент"
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={newPosition.rate}
              onChange={(event) => setNewPosition((prev) => ({ ...prev, rate: event.target.value }))}
              placeholder="Процент, %"
              className="w-full px-4 py-2 text-white"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
const RevenueView = ({ apiRequest, barbers = [], role = ROLE_OWNER, staffBarberId = null }) => {
  const isStaffMode = role === ROLE_STAFF;
  const staffBarberFilterValue =
    staffBarberId !== null && staffBarberId !== undefined ? String(staffBarberId) : '';
  const defaultRange = useMemo(() => getCurrentMonthRange(), []);
  const defaultFilters = useMemo(
    () => ({
      start: toInputDate(defaultRange.start),
      end: toInputDate(defaultRange.end),
      barberId: isStaffMode && staffBarberFilterValue ? staffBarberFilterValue : 'all',
    }),
    [defaultRange.start, defaultRange.end, isStaffMode, staffBarberFilterValue]
  );
  const [filters, setFilters] = useLocalStorage('revenue.filters', defaultFilters);
  const [state, setState] = useState({ loading: true, error: '', data: null });
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const [activePoint, setActivePoint] = useState(null);
  const startDateId = useMemo(() => `revenue-start-${Math.random().toString(36).slice(2, 8)}`, []);
  const endDateId = useMemo(() => `revenue-end-${Math.random().toString(36).slice(2, 8)}`, []);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  useEffect(() => {
    if (!filters) {
      setFilters(defaultFilters);
      return;
    }
    if (!filters.start || !filters.end) {
      setFilters((prev) => ({
        start: prev?.start || defaultFilters.start,
        end: prev?.end || defaultFilters.end,
        barberId: prev?.barberId || defaultFilters.barberId,
      }));
    }
  }, [filters, defaultFilters, setFilters]);
  const barberOptions = useMemo(
    () =>
      barbers
        .map((barber) => {
          const normalizedId = barber?.id ?? barber?.Id ?? barber?.ID ?? barber?.barberId ?? null;
          if (!normalizedId || !barber?.name) return null;
          return { id: String(normalizedId), name: barber.name };
        })
        .filter(Boolean),
    [barbers]
  );
  const staffBarberName = useMemo(() => {
    if (!isStaffMode || !staffBarberFilterValue) return '';
    const match = barberOptions.find((option) => option.id === staffBarberFilterValue);
    return match?.name || '';
  }, [isStaffMode, barberOptions, staffBarberFilterValue]);
  useEffect(() => {
    if (!filters || filters.barberId === 'all' || isStaffMode) return;
    if (!barberOptions.some((option) => option.id === filters.barberId)) {
      setFilters((prev) => ({ ...prev, barberId: 'all' }));
    }
  }, [filters, barberOptions, setFilters, isStaffMode]);
  useEffect(() => {
    if (!isStaffMode || !filters) return;
    const nextValue = staffBarberFilterValue || 'all';
    if (filters.barberId !== nextValue) {
      setFilters((prev) => ({ ...prev, barberId: nextValue }));
    }
  }, [isStaffMode, filters, staffBarberFilterValue, setFilters]);
  const startDate = filters?.start || '';
  const endDate = filters?.end || '';
  const selectedBarberId = filters?.barberId || 'all';
  const appliedBarberId = isStaffMode ? staffBarberFilterValue || 'all' : selectedBarberId;
  const fetchRevenue = useCallback(async () => {
    if (isStaffMode && !staffBarberFilterValue) {
      setState({
        loading: false,
        error: 'Профиль сотрудника не привязан к барберу, доходы недоступны.',
        data: null,
      });
      return;
    }
    setState((prev) => ({ ...prev, loading: true, error: '' }));
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('start', startDate);
      if (endDate) params.append('end', endDate);
      if (appliedBarberId && appliedBarberId !== 'all') params.append('barberId', appliedBarberId);
      const query = params.toString();
      const payload = await apiRequest(`/revenue/summary${query ? `?${query}` : ''}`);
      setState({ loading: false, error: '', data: payload });
    } catch (error) {
      setState({
        loading: false,
        error: error.message || 'Не удалось загрузить доходы.',
        data: null,
      });
    }
  }, [apiRequest, startDate, endDate, appliedBarberId, isStaffMode, staffBarberFilterValue]);
  useEffect(() => {
    fetchRevenue();
  }, [fetchRevenue]);
  const handleFilterChange = (field, value) => {
    if (isStaffMode && field === 'barberId') return;
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const summary = state.data;
  const items = summary?.items || [];
  const rawTimeline = useMemo(() => {
    if (Array.isArray(summary?.timeline)) return summary.timeline;
    if (summary?.timeline && typeof summary.timeline === 'object') {
      return Object.entries(summary.timeline).map(([key, value]) => {
        if (value && typeof value === 'object') {
          return { date: key, ...value };
        }
        return { date: key, gross: value };
      });
    }
    return [];
  }, [summary?.timeline]);
  const totalGross = summary?.totalGross ?? 0;
  const totalCommission = summary?.totalCommission ?? 0;
  const totalNet = summary?.totalNet ?? totalGross - totalCommission;
  const parseGrossValue = useCallback((value) => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (value == null) return 0;
    const normalized = String(value).replace(/[^0-9.,-]/g, '').replace(',', '.');
    const numeric = Number(normalized);
    return Number.isFinite(numeric) ? numeric : 0;
  }, []);
  const normalizedTimeline = useMemo(
    () =>
      rawTimeline.map((point) => ({
        ...point,
        grossValue:
          parseGrossValue(point?.gross) ||
          parseGrossValue(point?.Gross) ||
          parseGrossValue(point?.total) ||
          parseGrossValue(point?.totalGross) ||
          parseGrossValue(point?.net),
      })),
    [rawTimeline, parseGrossValue]
  );
  useEffect(() => {
    setActivePoint(null);
  }, [normalizedTimeline, isMobile]);
  const chartMax = normalizedTimeline.reduce((max, point) => Math.max(max, point.grossValue), 0);
  const safeChartMax = chartMax > 0 ? chartMax : 1;
  const lineChartHeight = isMobile ? 220 : 260;
  const lineChartWidth = Math.max(normalizedTimeline.length * (isMobile ? 64 : 88), isMobile ? 280 : 520);
  const lineChartPaddingX = 24;
  const lineChartPaddingY = 24;
  const lineChartInnerWidth = Math.max(lineChartWidth - lineChartPaddingX * 2, 1);
  const lineChartInnerHeight = Math.max(lineChartHeight - lineChartPaddingY * 2, 1);
  const lineChartPoints = normalizedTimeline.map((point, index) => {
    const safeValue = point.grossValue || 0;
    const ratio = normalizedTimeline.length > 1 ? index / (normalizedTimeline.length - 1) : 0.5;
    const x = lineChartPaddingX + ratio * lineChartInnerWidth;
    const y = lineChartPaddingY + (1 - (safeChartMax ? safeValue / safeChartMax : 0)) * lineChartInnerHeight;
    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      value: safeValue,
      label: formatShortDateLabel(point.date || point.label),
    };
  });
  const linePath = lineChartPoints.map((point, idx) => `${idx === 0 ? 'M' : 'L'}${point.x},${point.y}`).join(' ');
  const baseLineY = lineChartHeight - lineChartPaddingY;
  const areaPath =
    lineChartPoints.length > 0
      ? [
          `M${lineChartPoints[0].x},${baseLineY}`,
          ...lineChartPoints.map((point) => `L${point.x},${point.y}`),
          `L${lineChartPoints[lineChartPoints.length - 1].x},${baseLineY}`,
          'Z',
        ].join(' ')
      : '';
  const handlePointHover = useCallback(
    (point, index) => {
      if (isMobile) return;
      setActivePoint({ ...point, index });
    },
    [isMobile]
  );
  const handlePointLeave = useCallback(() => {
    if (isMobile) return;
    setActivePoint(null);
  }, [isMobile]);
  const handlePointClick = useCallback(
    (point, index) => {
      if (!isMobile) return;
      setActivePoint((prev) => (prev?.index === index ? null : { ...point, index }));
    },
    [isMobile]
  );
  return (
    <div className="space-y-6 overflow-x-hidden">
      <SectionCard title="Доходы барберов" hideTitleOnMobile>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-3 sm:col-span-2 lg:col-span-2">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor={startDateId}>
                Дата с
              </label>
              <input
                id={startDateId}
                name="revenueStartDate"
                aria-label="Дата с"
                type="date"
                value={startDate}
                onChange={(event) => handleFilterChange('start', event.target.value)}
                className="revenue-date-input w-full px-3 py-2 text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor={endDateId}>
                Дата по
              </label>
              <input
                id={endDateId}
                name="revenueEndDate"
                aria-label="Дата по"
                type="date"
                value={endDate}
                onChange={(event) => handleFilterChange('end', event.target.value)}
                className="revenue-date-input w-full px-3 py-2 text-white"
              />
            </div>
          </div>
          {isStaffMode ? (
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <label className="text-xs uppercase tracking-wide text-slate-400">Барбер</label>
              <div className="crm-inline-panel flex h-11 items-center px-3 text-sm text-white">
                {staffBarberName || 'Не указан'}
              </div>
            </div>
          ) : (
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <label className="text-xs uppercase tracking-wide text-slate-400">Барбер</label>
              <CustomSelect
                value={selectedBarberId}
                onChange={(nextValue) => handleFilterChange('barberId', nextValue)}
                options={[
                  { value: 'all', label: 'Все барберы' },
                  ...barberOptions.map((option) => ({ value: option.id, label: option.name })),
                ]}
                buttonClassName="h-11 px-4"
              />
            </div>
          )}
          <div className="flex items-stretch sm:col-span-2 sm:items-end sm:justify-end lg:col-span-1">
            <button
              type="button"
              onClick={fetchRevenue}
              className="crm-ghost-btn w-full px-4 py-2 text-sm font-semibold sm:w-auto sm:px-6"
            >
              Обновить
            </button>
          </div>
        </div>
        {state.error && <ErrorBanner message={state.error} />}
        {state.loading ? (
          <LoadingState label="Считаю доходы..." />
        ) : (
          <>
            {!isStaffMode && (
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatCard label="Общая выручка" value={formatCurrency(totalGross)} />
                <StatCard label="Начислено сотрудникам" value={formatCurrency(totalCommission)} accent="text-[color:var(--crm-highlight)]" />
                <StatCard label="В кассу" value={formatCurrency(totalNet)} accent="text-[color:var(--crm-primary)]" />
              </div>
            )}
            <div className="mt-6">
              {items.length === 0 ? (
                <p className="crm-inline-panel p-4 text-sm text-[var(--crm-muted)]">Нет выполненных услуг за выбранный период.</p>
              ) : (
                <>
                  {!isMobile && (
                    <div className="crm-table-shell overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead className="bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Барбер</th>
                            <th className="px-4 py-3 text-right font-semibold">Записи</th>
                            <th className="px-4 py-3 text-right font-semibold">Выручка</th>
                            <th className="px-4 py-3 text-right font-semibold">Комиссия</th>
                            <th className="px-4 py-3 text-right font-semibold">Выплаты</th>
                            <th className="px-4 py-3 text-right font-semibold">В кассу</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((item) => (
                            <tr key={item.id} className="hover:bg-[color:var(--crm-surface-4)]">
                              <td className="px-4 py-3 text-white">{item.name}</td>
                              <td className="px-4 py-3 text-right text-slate-300">{item.appointments}</td>
                              <td className="px-4 py-3 text-right text-slate-100">{formatCurrency(item.gross)}</td>
                              <td className="px-4 py-3 text-right text-slate-300">{formatPercent(item.commissionRate)}</td>
                              <td className="px-4 py-3 text-right text-[color:var(--crm-highlight)]">{formatCurrency(item.commission)}</td>
                              <td className="px-4 py-3 text-right text-[color:var(--crm-primary)]">{formatCurrency(item.net)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {isMobile && (
                    <div className="space-y-4 w-full">
                      {items.map((item) => {
                        const mobileStats = [
                          { label: 'Выручка', value: formatCurrency(item.gross), accent: 'text-white', wrapper: 'crm-soft-panel' },
                          { label: 'Комиссия', value: formatPercent(item.commissionRate), accent: 'text-[var(--crm-text)]', wrapper: 'crm-soft-panel' },
                          { label: 'Выплаты', value: formatCurrency(item.commission), accent: 'text-[color:var(--crm-highlight)]', wrapper: 'crm-soft-panel' },
                          { label: 'В кассу', value: formatCurrency(item.net), accent: 'text-[color:var(--crm-primary)]', wrapper: 'crm-soft-panel' },
                        ];
                        return (
                          <div key={item.id} className="crm-soft-card p-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="text-base font-semibold text-white">{item.name}</p>
                              <span className="text-xs uppercase tracking-wide text-[var(--crm-muted)]">{item.appointments} записей</span>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                              {mobileStats.map((metric) => (
                                <div
                                  key={metric.label}
                                  className={`rounded-xl px-3 py-2 ${metric.wrapper}`}
                                >
                                  <p className="text-xs uppercase tracking-wide text-[var(--crm-muted)]">{metric.label}</p>
                                  <p className={`text-lg font-semibold ${metric.accent}`}>{metric.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </SectionCard>
      <SectionCard title="Динамика выручки">
        {state.loading ? (
          <LoadingState label="Загрузка данных..." />
        ) : normalizedTimeline.length === 0 ? (
          <p className="text-sm text-[var(--crm-muted)]">Нет данных для выбранного периода.</p>
        ) : (
          <div className="mt-2">
            <div className="crm-soft-card p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-wide text-[var(--crm-muted)]">Линейный график</p>
                <p className="text-xs text-[var(--crm-text)]">
                  Пиковое значение:{' '}
                  <span className="font-semibold text-white">{formatCurrency(chartMax)}</span>
                </p>
              </div>
              <div className="mt-4 overflow-x-auto pb-1">
                <div className="relative inline-block" style={{ minWidth: `${lineChartWidth}px` }}>
                  {activePoint && (
                    <div
                      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-3/4 whitespace-nowrap rounded-xl bg-[color:var(--crm-surface-5)] px-3 py-2 text-xs shadow-2xl shadow-black/40"
                      style={{ left: `${activePoint.x}px`, top: `${activePoint.y}px` }}
                    >
                      <p className="font-semibold text-white">{formatCurrency(activePoint.value)}</p>
                      <p className="text-[11px] uppercase tracking-wide text-[var(--crm-muted)]">{activePoint.label}</p>
                    </div>
                  )}
                  <svg
                    width={lineChartWidth}
                    height={lineChartHeight}
                    viewBox={`0 0 ${lineChartWidth} ${lineChartHeight}`}
                    role="img"
                    aria-label="Линейный график динамики выручки"
                    onMouseLeave={handlePointLeave}
                  >
                    <defs>
                      <linearGradient id="revenueLineFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 191, 175, 0.3)" />
                        <stop offset="100%" stopColor="rgba(0, 191, 175, 0)" />
                      </linearGradient>
                      <linearGradient id="revenueLineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7be8dc" />
                        <stop offset="100%" stopColor="#00bfaf" />
                      </linearGradient>
                    </defs>
                    {areaPath && <path d={areaPath} fill="url(#revenueLineFill)" stroke="none" />}
                    {linePath && (
                      <path
                        d={linePath}
                        fill="none"
                        stroke="url(#revenueLineStroke)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {lineChartPoints.map((point, index) => {
                      const isActive = activePoint?.index === index;
                      return (
                        <g key={`line-point-${index}-${point.label}`}>
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={isActive ? 5.5 : 4}
                            fill={isActive ? '#f8fafc' : '#7be8dc'}
                            stroke={isActive ? '#00bfaf' : '#0a3a35'}
                            strokeWidth={isActive ? 3 : 2}
                            className={isMobile ? 'cursor-pointer' : 'cursor-default'}
                            onMouseEnter={() => handlePointHover(point, index)}
                            onMouseLeave={handlePointLeave}
                            onFocus={() => handlePointHover(point, index)}
                            onBlur={handlePointLeave}
                            onClick={() => handlePointClick(point, index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`${point.label}: ${formatCurrency(point.value)}`}
                          >
                            <title>{`${point.label}: ${formatCurrency(point.value)}`}</title>
                          </circle>
                          <text
                            x={point.x}
                            y={lineChartHeight - 6}
                            textAnchor="middle"
                            fontSize="10"
                            fill={isActive ? '#ebfffb' : '#94a3b8'}
                          >
                            {point.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
};

