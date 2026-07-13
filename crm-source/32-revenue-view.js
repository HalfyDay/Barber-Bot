const ServiceMaxPricesEditor = ({ positionId, services = [], onGetMaxPrices, onCreateMaxPrice, onUpdateMaxPrice, onDeleteMaxPrice }) => {
  const [maxPrices, setMaxPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const [savingServiceId, setSavingServiceId] = useState(null);
  useEffect(() => {
    if (!positionId || !onGetMaxPrices) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await onGetMaxPrices(positionId);
        const map = {};
        if (Array.isArray(data)) {
          data.forEach((entry) => {
            map[entry.serviceId] = { id: entry.id, maxPrice: String(entry.maxPrice ?? '') };
          });
        }
        if (!cancelled) setMaxPrices(map);
      } catch {
        if (!cancelled) setMaxPrices({});
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [positionId, onGetMaxPrices]);
  const handlePriceChange = (serviceId, value) => {
    setMaxPrices((prev) => ({
      ...prev,
      [serviceId]: { ...(prev[serviceId] || {}), maxPrice: value },
    }));
  };
  const handleSavePrice = async (serviceId) => {
    if (!onCreateMaxPrice || !onUpdateMaxPrice) return;
    const entry = maxPrices[serviceId];
    const parsed = parseFloat(entry?.maxPrice);
    const maxPrice = Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
    setSavingServiceId(serviceId);
    try {
      if (entry?.id) {
        await onUpdateMaxPrice(entry.id, { maxPrice });
      } else {
        const created = await onCreateMaxPrice({ positionId, serviceId, maxPrice });
        if (created?.id) {
          setMaxPrices((prev) => ({
            ...prev,
            [serviceId]: { id: created.id, maxPrice: String(maxPrice) },
          }));
        }
      }
    } catch {
      // ignore
    } finally {
      setSavingServiceId(null);
    }
  };
  if (!services.length) return null;
  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Макс. стоимость услуг</label>
      {loading ? (
        <p className="text-xs text-[var(--crm-muted)]">Загрузка...</p>
      ) : (
        <div className="space-y-1.5">
          {services.map((service) => {
            const entry = maxPrices[service.id] || {};
            const isSaving = savingServiceId === service.id;
            return (
              <div key={service.id} className="flex items-center gap-2">
                <span className="flex-1 text-sm text-slate-300 truncate">{service.name}</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={entry.maxPrice ?? ''}
                  onChange={(event) => handlePriceChange(service.id, event.target.value)}
                  onBlur={() => handleSavePrice(service.id)}
                  placeholder="—"
                  className="w-24 px-2 py-1 text-white text-sm text-right"
                />
                {isSaving && <span className="text-[10px] text-white/50">...</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const PositionsView = ({ positions = [], services = [], onCreate, onUpdate, onDelete, onRefresh, requestConfirm, onGetPositionServiceMaxPrices, onCreatePositionServiceMaxPrice, onUpdatePositionServiceMaxPrice, onDeletePositionServiceMaxPrice, onReorder, reorderBusy = false, role = ROLE_OWNER }) => {
  const canManagePositions = role !== ROLE_STAFF;
  const initialDraftState = {
    name: '',
    masterSharePercent: '',
    requiredClientVolume: '',
    targetReturnPercent: '',
    specialConditions: '',
    privileges: '',
  };
  const [newPosition, setNewPosition] = useState({ ...initialDraftState });
  const [createSheetOpen, setCreateSheetOpen] = useState(false);
  const [drafts, setDrafts] = useState({});
  const [error, setError] = useState('');
  const [savingKey, setSavingKey] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  // Drag-and-drop state
  const [dragOrderIds, setDragOrderIds] = useState([]);
  const [dragState, setDragState] = useState(null);
  const positionItemRefs = useRef(new Map());
  const dragMetaRef = useRef(null);
  const layoutRectsRef = useRef(new Map());
  const suppressOpenUntilRef = useRef(0);
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
  // Visible positions: use drag order during drag, otherwise sorted
  const visiblePositions = useMemo(() => {
    if (dragOrderIds.length) {
      const posMap = new Map(positions.map((p) => [p.id, p]));
      return dragOrderIds.map((id) => posMap.get(id)).filter(Boolean);
    }
    return sortedPositions;
  }, [sortedPositions, dragOrderIds, positions]);
  const buildReorderedIds = useCallback((sourceIds, activeId, clientY) => {
    const idleIds = sourceIds.filter((id) => id !== activeId);
    let targetIndex = idleIds.length;
    for (let index = 0; index < idleIds.length; index += 1) {
      const element = positionItemRefs.current.get(idleIds[index]);
      if (!element) continue;
      const rect = element.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;
      if (clientY < middle) {
        targetIndex = index;
        break;
      }
    }
    const nextIds = [...idleIds];
    nextIds.splice(targetIndex, 0, activeId);
    return nextIds;
  }, []);
  const finishDrag = useCallback(async (shouldSave = true) => {
    const meta = dragMetaRef.current;
    dragMetaRef.current = null;
    setDragState(null);
    if (!meta?.started) {
      setDragOrderIds([]);
      return;
    }
    suppressOpenUntilRef.current = Date.now() + 260;
    const finalIds = dragOrderIds.length ? dragOrderIds : meta.sourceIds;
    setDragOrderIds([]);
    if (!shouldSave || !Array.isArray(finalIds) || !finalIds.length) return;
    const changed = finalIds.some((id, index) => id !== meta.sourceIds[index]);
    if (!changed) return;
    await onReorder?.(finalIds);
    await refreshPositionsList();
  }, [dragOrderIds, onReorder, refreshPositionsList]);
  // Pointer event listeners for drag
  useEffect(() => {
    if (!dragState) return undefined;
    const handlePointerMove = (event) => {
      const meta = dragMetaRef.current;
      if (!meta || event.pointerId !== meta.pointerId) return;
      const dx = event.clientX - meta.startX;
      const dy = event.clientY - meta.startY;
      const threshold = meta.pointerType === 'touch' ? 10 : 6;
      if (!meta.started && Math.hypot(dx, dy) < threshold) return;
      if (!meta.started) {
        meta.started = true;
        setDragOrderIds(meta.sourceIds);
        setDragState({ activeId: meta.activeId, pointerType: meta.pointerType });
      }
      const baseIds = meta.sourceIds;
      const nextIds = buildReorderedIds(baseIds, meta.activeId, event.clientY);
      setDragOrderIds((prev) => {
        if (prev.length === nextIds.length && prev.every((id, i) => id === nextIds[i])) return prev;
        return nextIds;
      });
    };
    const handlePointerUp = () => finishDrag(true);
    const handlePointerCancel = () => finishDrag(false);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerCancel);
    document.body.style.userSelect = 'none';
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerCancel);
      document.body.style.userSelect = '';
    };
  }, [dragState, buildReorderedIds, finishDrag]);
  // FLIP animation
  useLayoutEffect(() => {
    if (!dragState || !dragOrderIds.length) return;
    const prevRects = layoutRectsRef.current;
    const nextRects = new Map();
    for (const id of dragOrderIds) {
      const el = positionItemRefs.current.get(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      nextRects.set(id, rect);
      const prev = prevRects.get(id);
      if (!prev) continue;
      const dy = prev.top - rect.top;
      if (Math.abs(dy) < 1) continue;
      el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], { duration: 220, easing: 'cubic-bezier(0.2,0,0,1)' });
    }
    layoutRectsRef.current = nextRects;
  }, [dragState, dragOrderIds]);
  const handleReorderPointerDown = useCallback((event, positionId) => {
    if (!canManagePositions || reorderBusy) return;
    event.preventDefault();
    event.stopPropagation();
    dragMetaRef.current = {
      activeId: positionId,
      pointerId: event.pointerId,
      pointerType: event.pointerType || 'mouse',
      startX: event.clientX,
      startY: event.clientY,
      started: false,
      sourceIds: sortedPositions.map((s) => s.id),
    };
    setDragState({ activeId: positionId, pointerType: event.pointerType || 'mouse' });
  }, [canManagePositions, reorderBusy, sortedPositions]);
  const normalizePercentValue = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return null;
    return Math.min(Math.max(parsed, 0), 100);
  };
  const normalizeIntValue = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed)) return null;
    return Math.max(parsed, 0);
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
        masterSharePercent: normalizePercentValue(newPosition.masterSharePercent),
        orderIndex: sortedPositions.length,
        requiredClientVolume: normalizeIntValue(newPosition.requiredClientVolume),
        targetReturnPercent: normalizePercentValue(newPosition.targetReturnPercent),
        specialConditions: newPosition.specialConditions.trim() || null,
        privileges: newPosition.privileges.trim() || null,
      });
      setNewPosition({ ...initialDraftState });
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
    const draft = drafts[position.id] || {};
    return {
      name: draft.name ?? position.name ?? '',
      masterSharePercent: draft.masterSharePercent ?? position.masterSharePercent ?? '',
      requiredClientVolume: draft.requiredClientVolume ?? position.requiredClientVolume ?? '',
      targetReturnPercent: draft.targetReturnPercent ?? position.targetReturnPercent ?? '',
      specialConditions: draft.specialConditions ?? position.specialConditions ?? '',
      privileges: draft.privileges ?? position.privileges ?? '',
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
      masterSharePercent: normalizePercentValue(draft?.masterSharePercent),
      requiredClientVolume: normalizeIntValue(draft?.requiredClientVolume),
      targetReturnPercent: normalizePercentValue(draft?.targetReturnPercent),
      specialConditions: (draft?.specialConditions || '').trim() || null,
      privileges: (draft?.privileges || '').trim() || null,
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
          const currentName = (position.name || '').trim();
          const fieldsChanged = [
            'masterSharePercent', 'requiredClientVolume',
            'targetReturnPercent', 'specialConditions', 'privileges',
          ].some((field) => {
            const nextVal = draft[field];
            const curVal = position[field];
            return String(nextVal ?? '') !== String(curVal ?? '');
          });
          if (nextName === currentName && !fieldsChanged) {
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
  const toggleExpanded = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const activeServices = useMemo(() => {
    if (!Array.isArray(services)) return [];
    return services.filter((s) => s.isActive !== false);
  }, [services]);
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
              setNewPosition({ ...initialDraftState });
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
          {visiblePositions.map((position, positionIndex) => {
            const draft = getDraft(position);
            const isDirty = pendingChanges.some((change) => change.position.id === position.id);
            const isSaving = savingKey === position.id;
            const isExpanded = expandedCards[position.id] || false;
            const levelNumber = positionIndex + 1;
            const isDragging = dragState?.activeId === position.id;
            return (
              <div
                key={position.id}
                ref={(node) => {
                  if (node) {
                    positionItemRefs.current.set(position.id, node);
                  } else {
                    positionItemRefs.current.delete(position.id);
                  }
                }}
                className={classNames('crm-soft-card transition-opacity', isDragging && 'opacity-50')}
              >
                {/* Collapsed header */}
                <div
                  className="flex items-center gap-3 p-3.5 md:p-4 cursor-pointer select-none"
                  onClick={() => {
                    if (suppressOpenUntilRef.current > Date.now()) return;
                    toggleExpanded(position.id);
                  }}
                >
                  {canManagePositions && (
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white/5 text-[var(--crm-muted)] cursor-grab active:cursor-grabbing hover:bg-white/10 transition touch-none"
                      onPointerDown={(e) => handleReorderPointerDown(e, position.id)}
                      aria-label={`Переместить должность ${position.name}`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="9" cy="6" r="1.5" />
                        <circle cx="15" cy="6" r="1.5" />
                        <circle cx="9" cy="12" r="1.5" />
                        <circle cx="15" cy="12" r="1.5" />
                        <circle cx="9" cy="18" r="1.5" />
                        <circle cx="15" cy="18" r="1.5" />
                      </svg>
                    </div>
                  )}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-primary)]/15 text-xs font-bold text-[color:var(--crm-primary)]">
                    {levelNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <input
                      name={`positionName-${position.id}`}
                      aria-label="Название должности"
                      value={draft.name}
                      onChange={(event) => {
                        event.stopPropagation();
                        handleDraftChange(position.id, 'name', event.target.value);
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className="min-w-0 w-full px-3 py-1.5 text-white font-semibold md:min-w-[160px]"
                    />
                  </div>
                  <div className="hidden md:flex items-center gap-2">
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
                      onClick={(e) => { e.stopPropagation(); handleDelete(position); }}
                      disabled={isSaving || bulkSaving}
                      className="crm-danger-btn px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Удалить
                    </button>
                  </div>
                  <div className="flex items-center gap-2 md:hidden">
                    {isSaving && (
                      <span className="text-[10px] text-white/50">...</span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleDelete(position); }}
                      disabled={isSaving || bulkSaving}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--crm-error-container)]/18 text-[color:var(--crm-error)] transition hover:bg-[color:var(--crm-error-container)]/28 disabled:cursor-not-allowed disabled:opacity-50"
                      aria-label={`Удалить должность ${position.name}`}
                    >
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </div>
                  <svg className={`h-4 w-4 shrink-0 text-[var(--crm-muted)] transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {/* Expanded body */}
                {isExpanded && (
                  <div className="border-t border-white/5 p-4 md:p-5 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Доля мастера */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Доля мастера, %</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          value={draft.masterSharePercent}
                          onChange={(event) => handleDraftChange(position.id, 'masterSharePercent', event.target.value)}
                          placeholder="0"
                          className="w-full px-3 py-2 text-white text-sm"
                        />
                      </div>

                      {/* Целевой % возвращаемости */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Возвращаемость, %</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          value={draft.targetReturnPercent}
                          onChange={(event) => handleDraftChange(position.id, 'targetReturnPercent', event.target.value)}
                          placeholder="0"
                          className="w-full px-3 py-2 text-white text-sm"
                        />
                      </div>

                      {/* Объем клиентов */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Объем клиентов для уровня</label>
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={draft.requiredClientVolume}
                          onChange={(event) => handleDraftChange(position.id, 'requiredClientVolume', event.target.value)}
                          placeholder="0"
                          className="w-full px-3 py-2 text-white text-sm"
                        />
                      </div>
                    </div>

                    {/* Особые условия */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Особые условия</label>
                      <textarea
                        value={draft.specialConditions}
                        onChange={(event) => handleDraftChange(position.id, 'specialConditions', event.target.value)}
                        placeholder="Опишите особые условия для этой должности..."
                        rows={3}
                        className="w-full px-3 py-2 text-white text-sm resize-none"
                      />
                    </div>

                    {/* Привилегии */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Привилегии</label>
                      <textarea
                        value={draft.privileges}
                        onChange={(event) => handleDraftChange(position.id, 'privileges', event.target.value)}
                        placeholder="Опишите привилегии для этой должности..."
                        rows={3}
                        className="w-full px-3 py-2 text-white text-sm resize-none"
                      />
                    </div>

                    {/* Макс. стоимость услуг */}
                    <ServiceMaxPricesEditor
                      positionId={position.id}
                      services={activeServices}
                      onGetMaxPrices={onGetPositionServiceMaxPrices}
                      onCreateMaxPrice={onCreatePositionServiceMaxPrice}
                      onUpdateMaxPrice={onUpdatePositionServiceMaxPrice}
                      onDeleteMaxPrice={onDeletePositionServiceMaxPrice}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionCard>
      <Modal
        title="Новая должность"
        isOpen={createSheetOpen}
        onClose={() => setCreateSheetOpen(false)}
        maxWidthClass="max-w-lg"
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
        <form onSubmit={handleCreate} className="space-y-4">
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
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Доля мастера, %</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.masterSharePercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, masterSharePercent: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Возвращаемость, %</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.targetReturnPercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, targetReturnPercent: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Объем клиентов</label>
              <input
                type="number"
                min="0"
                step="1"
                value={newPosition.requiredClientVolume}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, requiredClientVolume: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-300">Особые условия</label>
            <textarea
              value={newPosition.specialConditions}
              onChange={(event) => setNewPosition((prev) => ({ ...prev, specialConditions: event.target.value }))}
              placeholder="Опишите особые условия..."
              rows={2}
              className="w-full px-4 py-2 text-white resize-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-300">Привилегии</label>
            <textarea
              value={newPosition.privileges}
              onChange={(event) => setNewPosition((prev) => ({ ...prev, privileges: event.target.value }))}
              placeholder="Опишите привилегии..."
              rows={2}
              className="w-full px-4 py-2 text-white resize-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

const LevelView = ({ positions = [], currentBarber = null, services = [], apiRequest = null }) => {
  const [maxPrices, setMaxPrices] = useState({});
  const [loadingPrices, setLoadingPrices] = useState(false);

  const position = useMemo(() => {
    if (!currentBarber?.positionId || !Array.isArray(positions)) return null;
    return positions.find((p) => p.id === currentBarber.positionId) || null;
  }, [positions, currentBarber]);

  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions].sort((a, b) => {
      const leftOrder = Number(a?.orderIndex) || 0;
      const rightOrder = Number(b?.orderIndex) || 0;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
    });
  }, [positions]);

  const levelNumber = position ? (Number(position.orderIndex) || 0) + 1 : null;

  // Fetch max prices for current position
  useEffect(() => {
    if (!position?.id || !apiRequest) return;
    let cancelled = false;
    (async () => {
      setLoadingPrices(true);
      try {
        const data = await apiRequest(`/PositionServiceMaxPrices?positionId=${encodeURIComponent(position.id)}`);
        const map = {};
        if (Array.isArray(data)) {
          data.forEach((entry) => {
            map[entry.serviceId] = entry.maxPrice;
          });
        }
        if (!cancelled) setMaxPrices(map);
      } catch {
        if (!cancelled) setMaxPrices({});
      } finally {
        if (!cancelled) setLoadingPrices(false);
      }
    })();
    return () => { cancelled = true; };
  }, [position?.id, apiRequest]);

  if (!position) {
    return (
      <div className="space-y-6">
        <SectionCard title="Мой уровень" hideTitleOnMobile>
          <div className="py-12 text-center">
            <p className="text-sm text-[var(--crm-muted)]">Должность не назначена. Обратитесь к администратору.</p>
          </div>
        </SectionCard>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionCard title="Мой уровень" hideTitleOnMobile>
        {/* Level badge */}
        <div className="flex items-center gap-4 p-4 md:p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-primary)]/15 text-xl font-bold text-[color:var(--crm-primary)]">
            {levelNumber}
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">{position.name}</h2>
            <p className="text-sm text-[var(--crm-muted)]">Уровень {levelNumber} из {sortedPositions.length}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-5 pt-0">
          <div className="crm-soft-card p-4">
            <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-1">Доля мастера</p>
            <p className="text-xl font-bold text-white">{position.masterSharePercent ?? 0}%</p>
          </div>
          <div className="crm-soft-card p-4">
            <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-1">Целевая возвращаемость</p>
            <p className="text-xl font-bold text-white">{position.targetReturnPercent ?? 0}%</p>
          </div>
          <div className="crm-soft-card p-4">
            <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-1">Объем клиентов</p>
            <p className="text-xl font-bold text-white">{position.requiredClientVolume ?? 0}</p>
          </div>
        </div>

        {/* Service max prices */}
        {Array.isArray(services) && services.length > 0 && (
          <div className="p-4 md:p-5 pt-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-3">Макс. стоимость услуг</p>
            {loadingPrices ? (
              <p className="text-xs text-[var(--crm-muted)]">Загрузка...</p>
            ) : (
              <div className="space-y-2">
                {services.filter((s) => s.isActive !== false).map((service) => {
                  const price = maxPrices[service.id];
                  return (
                    <div key={service.id} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-sm text-slate-300">{service.name}</span>
                      <span className="text-sm text-white font-medium">
                        {price != null ? `${formatCurrency(price)}` : '—'}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Levels overview */}
        {sortedPositions.length > 1 && (
          <div className="p-4 md:p-5 pt-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-3">Уровни</p>
            <div className="space-y-2">
              {sortedPositions.map((pos, idx) => {
                const num = idx + 1;
                const isCurrent = pos.id === position.id;
                return (
                  <div key={pos.id} className={`flex items-center gap-3 p-2.5 rounded-lg ${isCurrent ? 'bg-[color:var(--crm-primary)]/10 border border-[color:var(--crm-primary)]/30' : 'opacity-60'}`}>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${isCurrent ? 'bg-[color:var(--crm-primary)] text-zinc-950' : 'bg-white/10 text-white/50'}`}>
                      {num}
                    </span>
                    <span className={`text-sm ${isCurrent ? 'text-white font-semibold' : 'text-slate-400'}`}>{pos.name}</span>
                    {isCurrent && <span className="ml-auto text-[10px] uppercase tracking-wider text-[color:var(--crm-primary)] font-semibold">Текущий</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
};

const PRESETS = [
  { label: '1Д', value: '1D' },
  { label: '1Н', value: '1W' },
  { label: '1М', value: '1M' },
  { label: '3М', value: '3M' },
  { label: '6М', value: '6M' },
  { label: '1Г', value: '1Y' },
  { label: 'ВСЕ', value: 'ALL' },
];

const RevenueView = ({ apiRequest, barbers = [], role = ROLE_OWNER, staffBarberId = null, revenuePeriod = null }) => {
  const isStaffMode = role === ROLE_STAFF;
  const staffBarberFilterValue =
    staffBarberId !== null && staffBarberId !== undefined ? String(staffBarberId) : '';
  
  const defaultRange = useMemo(() => getCurrentMonthRange(), []);
  const defaultFilters = useMemo(
    () => ({
      start: toInputDate(defaultRange.start),
      end: toInputDate(defaultRange.end),
      barberId: isStaffMode && staffBarberFilterValue ? staffBarberFilterValue : 'all',
      preset: '1M'
    }),
    [defaultRange.start, defaultRange.end, isStaffMode, staffBarberFilterValue]
  );
  
  const [filters, setFilters] = useLocalStorage('revenue.filters.v2', defaultFilters);
  const [state, setState] = useState({ loading: true, error: '', data: null });
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const [activePoint, setActivePoint] = useState(null);
  const observerRef = useRef(null);
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(600);
  const [chartHeight, setChartHeight] = useState(380);
  
  const chartResizeRef = useCallback((node) => {
    chartContainerRef.current = node;
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    if (node !== null) {
      const rect = node.getBoundingClientRect();
      if (rect.width > 0) setChartWidth(rect.width);
      if (rect.height > 0) setChartHeight(rect.height);
      
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect.width > 0) {
            setChartWidth(entry.contentRect.width);
          }
          if (entry.contentRect.height > 0) {
            setChartHeight(entry.contentRect.height);
          }
        }
      });
      observer.observe(node);
      observerRef.current = observer;
    }
  }, []);
  
  const startDateId = useMemo(() => `revenue-start-${Math.random().toString(36).slice(2, 8)}`, []);
  const endDateId = useMemo(() => `revenue-end-${Math.random().toString(36).slice(2, 8)}`, []);
  
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if (revenuePeriod) applyPreset(revenuePeriod);
  }, [revenuePeriod]);
  
  useEffect(() => {
    if (!filters) {
      setFilters(defaultFilters);
      return;
    }
  }, [filters, defaultFilters, setFilters]);

  const applyPreset = useCallback((presetValue) => {
    if (presetValue === 'ALL') {
      setFilters(prev => ({ ...prev, preset: presetValue, start: '', end: '' }));
      return;
    }
    const endDt = new Date();
    const startDt = new Date();
    if (presetValue === '1D') { /* today only — start and end are both today */ }
    if (presetValue === '1W') startDt.setDate(startDt.getDate() - 7);
    if (presetValue === '1M') startDt.setMonth(startDt.getMonth() - 1);
    if (presetValue === '3M') startDt.setMonth(startDt.getMonth() - 3);
    if (presetValue === '6M') startDt.setMonth(startDt.getMonth() - 6);
    if (presetValue === '1Y') startDt.setFullYear(startDt.getFullYear() - 1);
    
    setFilters(prev => ({ 
      ...prev, 
      preset: presetValue, 
      start: toInputDate(startDt), 
      end: toInputDate(endDt) 
    }));
  }, [setFilters]);
  
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
  
  const startDate = filters?.start || '';
  const endDate = filters?.end || '';
  const selectedBarberId = filters?.barberId || 'all';
  const appliedBarberId = isStaffMode ? staffBarberFilterValue || 'all' : selectedBarberId;
  const currentPreset = filters?.preset || 'CUSTOM';
  
  const fetchRevenue = useCallback(async () => {
    if (isStaffMode && !staffBarberFilterValue) {
      setState({
        loading: false,
        error: 'Профиль сотрудника не привязан к сотруднику, доходы недоступны.',
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
    setFilters((prev) => ({ ...prev, [field]: value, preset: (field === 'start' || field === 'end') ? 'CUSTOM' : prev.preset }));
  };
  
  const summary = state.data;
  const items = summary?.items || [];
  
  const rawTimeline = useMemo(() => {
    if (Array.isArray(summary?.timeline)) return summary.timeline;
    if (summary?.timeline && typeof summary.timeline === 'object') {
      return Object.entries(summary.timeline).map(([key, value]) => {
        if (value && typeof value === 'object') return { date: key, ...value };
        return { date: key, gross: value };
      });
    }
    return [];
  }, [summary?.timeline]);
  
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
  
  const totalGross = summary?.totalGross ?? 0;
  const totalCommission = summary?.totalCommission ?? 0;
  const totalNet = summary?.totalNet ?? totalGross - totalCommission;
  
  const timelineLength = normalizedTimeline.length || 1;
  const avgDaily = totalGross / timelineLength;
  let trendPercent = 0;
  if (timelineLength > 1) {
    const half = Math.floor(timelineLength / 2);
    const firstHalfAvg = normalizedTimeline.slice(0, half).reduce((sum, p) => sum + p.grossValue, 0) / half;
    const secondHalfAvg = normalizedTimeline.slice(half).reduce((sum, p) => sum + p.grossValue, 0) / (timelineLength - half);
    if (firstHalfAvg > 0) {
      trendPercent = ((secondHalfAvg - firstHalfAvg) / firstHalfAvg) * 100;
    }
  }
  const trendColor = trendPercent >= 0 ? 'text-[#00e676]' : 'text-[#ff5252]';
  const trendIcon = trendPercent >= 0 ? '▲' : '▼';
  
  const chartMax = normalizedTimeline.reduce((max, point) => Math.max(max, point.grossValue), 0);
  const safeChartMax = chartMax > 0 ? chartMax : 1;
  const lineChartHeight = isMobile ? 220 : chartHeight;
  
  const lineChartPaddingX = isMobile ? 32 : 64;
  const lineChartPaddingY = 30;
  const lineChartInnerWidth = Math.max(chartWidth - lineChartPaddingX * 2, 1);
  const lineChartInnerHeight = Math.max(lineChartHeight - lineChartPaddingY * 2, 1);
  
  const lineChartPoints = normalizedTimeline.map((point, index) => {
    const safeValue = point.grossValue || 0;
    const ratio = normalizedTimeline.length > 1 ? index / (normalizedTimeline.length - 1) : 0.5;
    const x = lineChartPaddingX + ratio * lineChartInnerWidth;
    const y = lineChartPaddingY + (1 - (safeValue / safeChartMax)) * lineChartInnerHeight;
    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      value: safeValue,
      label: formatShortDateLabel(point.date || point.label),
      index
    };
  });
  
  const linePath = lineChartPoints.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const baseLineY = lineChartHeight - lineChartPaddingY;
  const areaPath =
    lineChartPoints.length > 0
      ? [
          `M${lineChartPoints[0].x},${baseLineY}`,
          ...lineChartPoints.map((p) => `L${p.x},${p.y}`),
          `L${lineChartPoints[lineChartPoints.length - 1].x},${baseLineY}`,
          'Z',
        ].join(' ')
      : '';
      
  const handleMouseMove = useCallback((e) => {
    if (!chartContainerRef.current || lineChartPoints.length === 0) return;
    const rect = chartContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    let closestPoint = lineChartPoints[0];
    let minDiff = Math.abs(mouseX - closestPoint.x);
    for (let i = 1; i < lineChartPoints.length; i++) {
      const diff = Math.abs(mouseX - lineChartPoints[i].x);
      if (diff < minDiff) {
        minDiff = diff;
        closestPoint = lineChartPoints[i];
      }
    }
    setActivePoint(closestPoint);
  }, [lineChartPoints]);

  const handleMouseLeave = useCallback(() => {
    setActivePoint(null);
  }, []);

  return (
    <div className="space-y-6 overflow-x-hidden">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="hidden xl:block">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Доходы</h1>
          <p className="text-sm text-[var(--crm-muted)]">Аналитика выручки и выплат</p>
        </div>
        
        <div className="flex flex-col gap-3 w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-start xl:flex-nowrap xl:justify-end xl:w-auto">
          {/* Preset Buttons */}
          <div className="flex crm-soft-panel p-1 w-full justify-between items-center h-9 sm:min-w-[240px] flex-grow xl:flex-none xl:w-auto xl:min-w-[240px]">
            {PRESETS.map(preset => (
              <button
                key={preset.value}
                onClick={() => applyPreset(preset.value)}
                className={classNames(
                  "flex-1 h-7 flex items-center justify-center text-xs font-semibold rounded-xl transition-all duration-200",
                  currentPreset === preset.value
                    ? "bg-[color:var(--crm-primary)] text-zinc-950 shadow-md"
                    : "text-[var(--crm-muted)] hover:text-white hover:bg-white/5"
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>
          
          {/* Date Picker Row */}
          <div className="flex items-center justify-between gap-2 crm-soft-panel px-3 h-9 w-full flex-grow xl:flex-none xl:w-auto">
            <input
              id={startDateId}
              type="date"
              value={startDate}
              onChange={(e) => handleFilterChange('start', e.target.value)}
              className="flex-1 w-24 sm:w-28 h-7 !bg-transparent !border-none !shadow-none !outline-none !ring-0 text-xs text-white text-center"
            />
            <span className="text-[var(--crm-muted)] text-xs">-</span>
            <input
              id={endDateId}
              type="date"
              value={endDate}
              onChange={(e) => handleFilterChange('end', e.target.value)}
              className="flex-1 w-24 sm:w-28 h-7 !bg-transparent !border-none !shadow-none !outline-none !ring-0 text-xs text-white text-center"
            />
          </div>
          
          {/* Barber Select */}
          {!isStaffMode && (
            <CustomSelect
              value={selectedBarberId}
              onChange={(v) => handleFilterChange('barberId', v)}
              options={[
                { value: 'all', label: 'Все сотрудники' },
                ...barberOptions.map((opt) => ({ value: opt.id, label: opt.name })),
              ]}
              className="w-full flex-grow xl:flex-none xl:w-48"
              buttonClassName="!h-9 !px-4 text-xs !border-none"
            />
          )}
        </div>
      </div>

      {state.error && <ErrorBanner message={state.error} />}
      
      {state.loading ? (
        <LoadingState label="Считаю доходы..." />
      ) : (
        <div className="space-y-6">
          <div className={classNames(
            "grid grid-cols-1 gap-6",
            !isStaffMode && "lg:grid-cols-12"
          )}>
            
            {/* STATS CARDS (right on PC, top on mobile) */}
            {!isStaffMode && (
              <div className="order-1 lg:order-2 lg:col-span-4 grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4 lg:flex lg:flex-col lg:justify-between">
                {/* Card 1 */}
                <div className="crm-soft-card p-4 sm:p-5 flex flex-col justify-center h-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-2 truncate">Общая выручка</p>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white truncate whitespace-nowrap">{formatCurrency(totalGross)}</h2>
                  </div>
                  {timelineLength > 1 && (
                    <p className={classNames("text-[10px] sm:text-xs font-semibold mt-2 flex items-center gap-1", trendColor)}>
                      <span>{trendIcon}</span> {Math.abs(trendPercent).toFixed(1)}% <span className="text-[var(--crm-muted)] font-normal ml-0.5 hidden sm:inline">тренд</span>
                    </p>
                  )}
                </div>

                {/* Card 2 */}
                <div className="crm-soft-card p-4 sm:p-5 flex flex-col justify-center h-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-2 truncate">Начислено сотрудникам</p>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[color:var(--crm-highlight)] truncate whitespace-nowrap">{formatCurrency(totalCommission)}</h2>
                  <p className="text-[10px] sm:text-xs text-[var(--crm-muted)] mt-2 truncate">
                    {totalGross > 0 ? ((totalCommission / totalGross) * 100).toFixed(1) : 0}% <span className="hidden sm:inline">от выручки</span>
                  </p>
                </div>

                {/* Card 3 */}
                <div className="crm-soft-card p-4 sm:p-5 flex flex-col justify-center h-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-2 truncate">В кассу</p>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[color:var(--crm-primary)] drop-shadow-[0_0_8px_rgba(0,191,175,0.4)] truncate whitespace-nowrap">{formatCurrency(totalNet)}</h2>
                  <p className="text-[10px] sm:text-xs text-[var(--crm-muted)] mt-2 truncate">
                    Чистая прибыль
                  </p>
                </div>

                {/* Card 4 */}
                <div className="crm-soft-card p-4 sm:p-5 flex flex-col justify-center h-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--crm-muted)] font-semibold mb-2 truncate">Средняя в день</p>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white truncate whitespace-nowrap">{formatCurrency(avgDaily)}</h2>
                  <p className="text-[10px] sm:text-xs text-[var(--crm-muted)] mt-2 truncate">
                    За {timelineLength} {timelineLength === 1 ? 'день' : 'дн.'}
                  </p>
                </div>
              </div>
            )}

            {/* CHART CARD (left on PC, bottom on mobile) */}
            <div className={classNames(
              "order-2 lg:order-1 flex flex-col",
              !isStaffMode ? "lg:col-span-8" : "w-full"
            )}>
              <SectionCard title="Динамика выручки" hideTitleOnMobile className="h-full flex flex-col">
                {normalizedTimeline.length === 0 ? (
                  <div className="py-12 text-center text-[var(--crm-muted)]">Нет данных за этот период</div>
                ) : (
                  <div 
                    ref={chartResizeRef}
                    className="relative w-full overflow-hidden rounded-lg mt-2 cursor-crosshair flex-grow"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onTouchMove={(e) => {
                      const touch = e.touches[0];
                      if(touch) handleMouseMove(touch);
                    }}
                    onTouchEnd={handleMouseLeave}
                  >
                    {activePoint && (
                      <div
                        className="pointer-events-none absolute z-20 flex flex-col items-center"
                        style={{ left: `${activePoint.x}px`, top: `0px`, height: `${lineChartHeight}px`, transform: 'translateX(-50%)' }}
                      >
                        <div className="absolute top-0 bottom-0 w-px border-l border-dashed border-[color:var(--crm-primary)]/50"></div>
                        
                        <div 
                          className="absolute w-screen border-t border-dashed border-[color:var(--crm-primary)]/30 left-1/2 -translate-x-1/2 pointer-events-none" 
                          style={{ top: `${activePoint.y}px` }}
                        ></div>
                        
                        <div 
                          className="absolute rounded-full bg-[color:var(--crm-primary)] shadow-[0_0_10px_2px_rgba(0,191,175,0.8)]"
                          style={{ width: '10px', height: '10px', top: `${activePoint.y - 5}px`, left: '50%', transform: 'translateX(-50%)' }}
                        ></div>
                        
                        <div 
                          className="absolute z-30 flex flex-col items-start justify-center rounded-lg border border-[color:var(--crm-primary)]/40 bg-[color:var(--crm-surface-1)]/95 px-3 py-2 shadow-2xl backdrop-blur-sm"
                          style={{
                            top: activePoint.y < lineChartHeight / 2 ? `${activePoint.y + 15}px` : `${activePoint.y - 65}px`,
                            left: activePoint.x < 120 ? '15px' : (activePoint.x > chartWidth - 120 ? '-15px' : '0px'),
                            transform: activePoint.x < 120 ? 'translateX(0)' : (activePoint.x > chartWidth - 120 ? 'translateX(-100%)' : 'translateX(-50%)')
                          }}
                        >
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--crm-muted)]">{activePoint.label}</p>
                          <p className="text-base font-bold text-white drop-shadow-md whitespace-nowrap">{formatCurrency(activePoint.value)}</p>
                        </div>
                      </div>
                    )}
                    
                    <svg
                      width={chartWidth}
                      height={lineChartHeight}
                      className="block"
                      style={{ touchAction: 'none' }}
                    >
                      <defs>
                        <linearGradient id="neonGradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(0, 191, 175, 0.4)" />
                          <stop offset="50%" stopColor="rgba(0, 191, 175, 0.1)" />
                          <stop offset="100%" stopColor="rgba(0, 191, 175, 0)" />
                        </linearGradient>
                        <linearGradient id="neonGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#29ffd4" />
                          <stop offset="50%" stopColor="#00bfaf" />
                          <stop offset="100%" stopColor="#009688" />
                        </linearGradient>
                      </defs>
                      
                      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                        const y = lineChartPaddingY + ratio * lineChartInnerHeight;
                        const value = safeChartMax * (1 - ratio);
                        return (
                          <g key={`grid-${ratio}`}>
                            <line x1={lineChartPaddingX} y1={y} x2={chartWidth} y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            {ratio < 1 && (
                              <text x={12} y={y - 4} fontSize="10" fill="#475569" className="select-none">
                                {formatCurrency(value)}
                              </text>
                            )}
                          </g>
                        );
                      })}
                      
                      {areaPath && <path d={areaPath} fill="url(#neonGradientArea)" />}
                      {linePath && (
                        <path
                          d={linePath}
                          fill="none"
                          stroke="url(#neonGradientLine)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      
                      {lineChartPoints.map((p, i) => (
                        <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="2" fill="#00bfaf" opacity="0.5" />
                      ))}
                      
                      {lineChartPoints.filter((_, i) => i % Math.ceil(lineChartPoints.length / (isMobile ? 4 : 8)) === 0).map((p, i) => (
                        <text key={`label-${i}`} x={p.x} y={lineChartHeight - 5} textAnchor="middle" fontSize="10" fill="#475569" className="select-none">
                          {p.label}
                        </text>
                      ))}
                    </svg>
                  </div>
                )}
              </SectionCard>
            </div>

          </div>

          {items.length > 0 && (
            <SectionCard title="Детализация по сотрудникам">
              {!isMobile ? (
                <div className="crm-table-shell overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Сотрудник</th>
                        <th className="px-4 py-3 text-right font-semibold">Записи</th>
                        <th className="px-4 py-3 text-right font-semibold">Выручка</th>
                        <th className="px-4 py-3 text-right font-semibold">Комиссия</th>
                        <th className="px-4 py-3 text-right font-semibold">Выплаты</th>
                        <th className="px-4 py-3 text-right font-semibold">В кассу</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-4 text-white font-medium">{item.name}</td>
                          <td className="px-4 py-4 text-right text-slate-400">{item.appointments}</td>
                          <td className="px-4 py-4 text-right text-slate-200 font-medium whitespace-nowrap">{formatCurrency(item.gross)}</td>
                          <td className="px-4 py-4 text-right text-slate-400">{formatPercent(item.masterSharePercent)}</td>
                          <td className="px-4 py-4 text-right text-[color:var(--crm-highlight)] font-semibold whitespace-nowrap">{formatCurrency(item.commission)}</td>
                          <td className="px-4 py-4 text-right text-[color:var(--crm-primary)] font-semibold whitespace-nowrap">{formatCurrency(item.net)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-4 w-full">
                  {items.map((item) => {
                    const mobileStats = [
                      { label: 'Выручка', value: formatCurrency(item.gross), accent: 'text-white' },
                      { label: 'Комиссия', value: formatPercent(item.masterSharePercent), accent: 'text-slate-400' },
                      { label: 'Выплаты', value: formatCurrency(item.commission), accent: 'text-[color:var(--crm-highlight)]' },
                      { label: 'В кассу', value: formatCurrency(item.net), accent: 'text-[color:var(--crm-primary)]' },
                    ];
                    return (
                      <div key={item.id} className="crm-soft-card p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                          <p className="text-base font-bold text-white">{item.name}</p>
                          <span className="text-xs uppercase tracking-wider text-[var(--crm-muted)] px-2 py-1 bg-white/5 rounded-full">{item.appointments} записей</span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                          {mobileStats.map((metric) => (
                            <div key={metric.label}>
                              <p className="text-[10px] uppercase tracking-wider text-[var(--crm-muted)]">{metric.label}</p>
                              <p className={`text-sm font-semibold mt-0.5 whitespace-nowrap ${metric.accent}`}>{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionCard>
          )}
        </div>
      )}
    </div>
  );
};
