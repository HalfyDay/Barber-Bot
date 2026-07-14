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
                <span className="w-44 text-sm text-slate-300 truncate">{service.name}</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={entry.maxPrice ?? ''}
                  onChange={(event) => handlePriceChange(service.id, event.target.value)}
                  onBlur={() => handleSavePrice(service.id)}
                  onFocus={(e) => e.target.select()}
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

const SubLevelConfigFields = ({ subLevel, onUpdate, refreshPositionsList }) => {
  const [localValues, setLocalValues] = useState({
    requiredClientVolume: String(subLevel.requiredClientVolume ?? ''),
    targetReturnPercent: String(subLevel.targetReturnPercent ?? ''),
    masterSharePercent: String(subLevel.masterSharePercent ?? ''),
  });
  const [saving, setSaving] = useState(false);
  const handleBlur = async (field) => {
    const value = localValues[field];
    const originalValue = String(subLevel[field] ?? '');
    if (value === originalValue) return;
    setSaving(true);
    try {
      await onUpdate?.(subLevel.id, {
        name: subLevel.name,
        masterSharePercent: field === 'masterSharePercent' ? (parseFloat(value) || 0) : (parseFloat(subLevel.masterSharePercent) || 0),
        requiredClientVolume: field === 'requiredClientVolume' ? (parseInt(value, 10) || 0) : (parseInt(subLevel.requiredClientVolume, 10) || 0),
        targetReturnPercent: field === 'targetReturnPercent' ? (parseFloat(value) || 0) : (parseFloat(subLevel.targetReturnPercent) || 0),
        specialConditions: subLevel.specialConditions || null,
        privileges: subLevel.privileges || null,
      });
      await refreshPositionsList?.();
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="border-t border-white/5 p-3 space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs text-slate-300">Количество клиентов</span>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            step="1"
            value={localValues.requiredClientVolume}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, requiredClientVolume: e.target.value }))}
            onBlur={() => handleBlur('requiredClientVolume')}
            onFocus={(e) => e.target.select()}
            placeholder="0"
            className="w-20 px-2 py-1 text-white text-sm text-right"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs text-slate-300">Возвратность клиентов</span>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={localValues.targetReturnPercent}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, targetReturnPercent: e.target.value }))}
            onBlur={() => handleBlur('targetReturnPercent')}
            onFocus={(e) => e.target.select()}
            placeholder="0"
            className="w-20 px-2 py-1 text-white text-sm text-right"
          />
          <span className="ml-1 text-xs text-[var(--crm-muted)]">%</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs text-slate-300">Процент барбера</span>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={localValues.masterSharePercent}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, masterSharePercent: e.target.value }))}
            onBlur={() => handleBlur('masterSharePercent')}
            onFocus={(e) => e.target.select()}
            placeholder="0"
            className="w-20 px-2 py-1 text-white text-sm text-right"
          />
          <span className="ml-1 text-xs text-[var(--crm-muted)]">%</span>
        </div>
      </div>
      {saving && <span className="text-[10px] text-white/50">...</span>}
    </div>
  );
};

const ParentPositionConfigFields = ({ position, onUpdate, refreshPositionsList }) => {
  const [localValues, setLocalValues] = useState({
    requiredClientVolume: String(position.requiredClientVolume ?? ''),
    targetReturnPercent: String(position.targetReturnPercent ?? ''),
    masterSharePercent: String(position.masterSharePercent ?? ''),
  });
  const [saving, setSaving] = useState(false);
  const handleBlur = async (field) => {
    const value = localValues[field];
    const originalValue = String(position[field] ?? '');
    if (value === originalValue) return;
    setSaving(true);
    try {
      await onUpdate?.(position.id, {
        name: position.name,
        masterSharePercent: field === 'masterSharePercent' ? (parseFloat(value) || 0) : (parseFloat(position.masterSharePercent) || 0),
        requiredClientVolume: field === 'requiredClientVolume' ? (parseInt(value, 10) || 0) : (parseInt(position.requiredClientVolume, 10) || 0),
        targetReturnPercent: field === 'targetReturnPercent' ? (parseFloat(value) || 0) : (parseFloat(position.targetReturnPercent) || 0),
        specialConditions: position.specialConditions || null,
        privileges: position.privileges || null,
      });
      await refreshPositionsList?.();
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Количество клиентов</span>
        <input
          type="number"
          min="0"
          step="1"
          value={localValues.requiredClientVolume}
          onChange={(e) => setLocalValues((prev) => ({ ...prev, requiredClientVolume: e.target.value }))}
          onBlur={() => handleBlur('requiredClientVolume')}
          onFocus={(e) => e.target.select()}
          placeholder="0"
          className="w-24 px-2 py-1 text-white text-sm text-right"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Возвратность клиентов</span>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={localValues.targetReturnPercent}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, targetReturnPercent: e.target.value }))}
            onBlur={() => handleBlur('targetReturnPercent')}
            onFocus={(e) => e.target.select()}
            placeholder="0"
            className="w-24 px-2 py-1 text-white text-sm text-right"
          />
          <span className="ml-1 text-xs text-[var(--crm-muted)]">%</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Процент барбера</span>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={localValues.masterSharePercent}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, masterSharePercent: e.target.value }))}
            onBlur={() => handleBlur('masterSharePercent')}
            onFocus={(e) => e.target.select()}
            placeholder="0"
            className="w-24 px-2 py-1 text-white text-sm text-right"
          />
          <span className="ml-1 text-xs text-[var(--crm-muted)]">%</span>
        </div>
      </div>
      {saving && <span className="text-[10px] text-white/50">...</span>}
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
  const [expandedSubLevels, setExpandedSubLevels] = useState({});
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
    return [...positions]
      .filter((p) => !p.parentId)
      .sort((a, b) => {
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
  const handleCreateSubLevel = async (parentId) => {
    const parentPos = positions.find((p) => p.id === parentId);
    if (!parentPos) return;
    const childCount = (parentPos.children || []).length;
    const existingNames = new Set(positions.map((p) => (p.name || '').toLowerCase()));
    let candidateName = `${parentPos.name} ${childCount + 1}`;
    let counter = childCount + 1;
    while (existingNames.has(candidateName.toLowerCase())) {
      counter += 1;
      candidateName = `${parentPos.name} ${counter}`;
    }
    try {
      setSavingKey(`sub-${parentId}`);
      setError('');
      await onCreate?.({
        name: candidateName,
        masterSharePercent: 0,
        orderIndex: childCount,
        requiredClientVolume: 0,
        targetReturnPercent: 0,
        specialConditions: null,
        privileges: null,
        parentId,
      });
      await refreshPositionsList();
    } catch (err) {
      setError(err.message || 'Не удалось создать подуровень.');
    } finally {
      setSavingKey(null);
    }
  };
  const handleDeleteSubLevel = async (subLevel) => {
    if (!subLevel?.id) return;
    const confirmed = requestConfirm
      ? await requestConfirm({
          title: 'Удалить подуровень?',
          message: `«${subLevel.name}» будет удалён.`,
          confirmLabel: 'Удалить',
          tone: 'danger',
        })
      : true;
    if (!confirmed) return;
    try {
      setSavingKey(subLevel.id);
      setError('');
      await onDelete?.(subLevel.id);
      await refreshPositionsList();
    } catch (err) {
      setError(err.message || 'Не удалось удалить подуровень.');
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
  const toggleSubLevel = (id) => {
    setExpandedSubLevels((prev) => ({ ...prev, [id]: !prev[id] }));
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
                    {canManagePositions && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleDelete(position); }}
                        disabled={isSaving || bulkSaving}
                        className="crm-danger-btn px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Удалить
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2 md:hidden">
                    {isSaving && (
                      <span className="text-[10px] text-white/50">...</span>
                    )}
                    {canManagePositions && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleDelete(position); }}
                        disabled={isSaving || bulkSaving}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--crm-error-container)]/18 text-[color:var(--crm-error)] transition hover:bg-[color:var(--crm-error-container)]/28 disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label={`Удалить должность ${position.name}`}
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <svg className={`h-4 w-4 shrink-0 text-[var(--crm-muted)] transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {/* Expanded body */}
                {isExpanded && (
                  <div className="border-t border-white/5 p-4 md:p-5 space-y-5">
                    {position.children && position.children.length > 0 ? (
                      /* Позиция с подуровнями — показываем только подуровни */
                      <div className="space-y-3">
                        <p className="text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Подуровни</p>
                        {[...position.children]
                          .sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0))
                          .map((child, childIndex) => (
                          <div key={child.id} className="crm-soft-card overflow-hidden">
                            <div
                              className="flex items-center gap-2 p-3 cursor-pointer select-none"
                              onClick={() => toggleSubLevel(child.id)}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-primary)]/10 text-[10px] font-bold text-[color:var(--crm-primary)]">
                                {childIndex + 1}
                              </span>
                              <span className="min-w-0 flex-1 text-sm font-semibold text-white truncate">{child.name}</span>
                              <span className="text-[10px] text-[var(--crm-muted)]">{child.requiredClientVolume ?? 0} кл. · {child.targetReturnPercent ?? 0}% · {child.masterSharePercent ?? 0}%</span>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDeleteSubLevel(child); }}
                                disabled={savingKey === child.id}
                                className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--crm-error-container)]/18 text-[color:var(--crm-error)] transition hover:bg-[color:var(--crm-error-container)]/28 disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label={`Удалить подуровень ${child.name}`}
                              >
                                <IconTrash className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDeleteSubLevel(child); }}
                                disabled={savingKey === child.id}
                                className="hidden md:inline-flex crm-danger-btn px-3 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                Удалить
                              </button>
                              <svg className={`h-4 w-4 shrink-0 text-[var(--crm-muted)] transition-transform ${expandedSubLevels[child.id] ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </div>
                            {expandedSubLevels[child.id] && (
                              <>
                                <SubLevelConfigFields
                                  subLevel={child}
                                  onUpdate={onUpdate}
                                  refreshPositionsList={refreshPositionsList}
                                />
                                {/* Макс. стоимость услуг для подуровня */}
                                <div className="px-3 pt-1 pb-1">
                                  <ServiceMaxPricesEditor
                                    positionId={child.id}
                                    services={activeServices}
                                    onGetMaxPrices={onGetPositionServiceMaxPrices}
                                    onCreateMaxPrice={onCreatePositionServiceMaxPrice}
                                    onUpdateMaxPrice={onUpdatePositionServiceMaxPrice}
                                    onDeleteMaxPrice={onDeletePositionServiceMaxPrice}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => handleCreateSubLevel(position.id)}
                          disabled={savingKey === `sub-${position.id}`}
                          className="crm-ghost-btn w-full px-4 py-2 text-sm"
                        >
                          {savingKey === `sub-${position.id}` ? 'Добавляем...' : '+ Добавить подуровень'}
                        </button>

                        {/* Особые условия и Привилегии для родительского уровня */}
                        <div className="border-t border-white/5 pt-4 mt-2 space-y-4">
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
                        </div>
                      </div>
                    ) : (
                      /* Позиция без подуровней — показываем все поля как раньше */
                      <>
                        <ParentPositionConfigFields
                          position={position}
                          onUpdate={onUpdate}
                          refreshPositionsList={refreshPositionsList}
                        />

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

                        {/* Кнопка добавления подуровня */}
                        <button
                          type="button"
                          onClick={() => handleCreateSubLevel(position.id)}
                          disabled={savingKey === `sub-${position.id}`}
                          className="crm-ghost-btn w-full px-4 py-2 text-sm"
                        >
                          {savingKey === `sub-${position.id}` ? 'Добавляем...' : '+ Добавить подуровень'}
                        </button>
                      </>
                    )}
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
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Количество клиентов</span>
              <input
                type="number"
                min="0"
                step="1"
                value={newPosition.requiredClientVolume}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, requiredClientVolume: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Возвратность клиентов</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={newPosition.targetReturnPercent}
                  onChange={(event) => setNewPosition((prev) => ({ ...prev, targetReturnPercent: event.target.value }))}
                  onFocus={(e) => e.target.select()}
                  placeholder="0"
                  className="w-24 px-2 py-1 text-white text-sm text-right"
                />
                <span className="ml-1 text-sm text-[var(--crm-muted)]">%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Процент барбера</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={newPosition.masterSharePercent}
                  onChange={(event) => setNewPosition((prev) => ({ ...prev, masterSharePercent: event.target.value }))}
                  onFocus={(e) => e.target.select()}
                  placeholder="0"
                  className="w-24 px-2 py-1 text-white text-sm text-right"
                />
                <span className="ml-1 text-sm text-[var(--crm-muted)]">%</span>
              </div>
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


/* ═══ ZZZ-STYLE HELPERS ═══ */

const ZzzGlowBar = ({ value, max, color = 'var(--crm-primary)', height = 6, label, showPercent = false }) => {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">{label}</span>
          {showPercent && <span className="text-[10px] font-bold" style={{ color }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="relative w-full overflow-hidden" style={{ height, borderRadius: 2, background: 'rgba(255,255,255,0.04)' }}>
        <div className="absolute inset-y-0 left-0 transition-all duration-700 ease-out" style={{
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 12px ${color}66, 0 0 4px ${color}44`,
          borderRadius: 2,
        }} />
        <div className="absolute inset-y-0 left-0 opacity-40" style={{
          width: `${pct}%`,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
          borderRadius: 2,
        }} />
      </div>
    </div>
  );
};

const ZzzStatBlock = ({ label, value, unit = '', color = 'var(--crm-primary)', small = false }) => (
  <div className={`relative overflow-hidden ${small ? 'p-2.5' : 'p-3.5'}`} style={{
    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
    border: `1px solid ${color}22`,
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  }}>
    <div className="absolute top-0 right-0 w-8 h-8 opacity-20" style={{
      background: `linear-gradient(135deg, transparent 50%, ${color} 50%)`,
      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
    }} />
    <p className={`${small ? 'text-[9px]' : 'text-[10px]'} uppercase tracking-widest font-semibold mb-1`} style={{ color: `${color}aa` }}>{label}</p>
    <p className={`${small ? 'text-lg' : 'text-2xl'} font-black text-white`} style={{ textShadow: `0 0 20px ${color}33` }}>
      {value}<span className={`${small ? 'text-xs' : 'text-sm'} font-semibold ml-0.5 opacity-60`}>{unit}</span>
    </p>
  </div>
);

const ZzzRadarChart = ({ stats = [], size = 180 }) => {
  if (!stats.length) return null;
  const cx = size / 2, cy = size / 2, r = size * 0.38;
  const angleStep = (2 * Math.PI) / stats.length;
  const getPoint = (i, val) => {
    const angle = angleStep * i - Math.PI / 2;
    return { x: cx + r * val * Math.cos(angle), y: cy + r * val * Math.sin(angle) };
  };
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const dataPoints = stats.map((s, i) => getPoint(i, Math.min(1, s.value)));
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {gridLevels.map((level) => {
        const pts = stats.map((_, i) => getPoint(i, level));
        return <polygon key={level} points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
      })}
      {stats.map((_, i) => {
        const p = getPoint(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />;
      })}
      <polygon points={dataPoints.map((p) => `${p.x},${p.y}`).join(' ')} fill="var(--crm-primary)" fillOpacity="0.12" stroke="var(--crm-primary)" strokeWidth="2" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="var(--crm-primary)" stroke="var(--crm-surface)" strokeWidth="1.5" />
      ))}
      {stats.map((s, i) => {
        const p = getPoint(i, 1.18);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="var(--crm-muted)" fontSize="8" fontWeight="600" letterSpacing="0.05em">{s.label}</text>;
      })}
    </svg>
  );
};

const ZzzHexBadge = ({ number, size = 56, color = 'var(--crm-primary)', label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 56 56">
        <polygon points="28,2 52,15 52,41 28,54 4,41 4,15" fill="none" stroke={color} strokeWidth="2" opacity="0.4" />
        <polygon points="28,6 48,17 48,39 28,50 8,39 8,17" fill={`${color}11`} stroke={color} strokeWidth="1" opacity="0.6" />
      </svg>
      <span className="absolute text-lg font-black" style={{ color, textShadow: `0 0 16px ${color}55` }}>{number}</span>
    </div>
    {label && <span className="text-[9px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">{label}</span>}
  </div>
);

const ZzzTrendChart = ({ history = [] }) => {
  if (history.length < 2) return <p className="text-xs text-[var(--crm-muted)] text-center py-4">Недостаточно данных</p>;
  const w = 320, h = 120, pad = 24;
  const maxVal = Math.max(...history.map((h) => Math.max(h.actualClientVolume || 0, h.actualRetainedClients || 0)), 1);
  const getX = (i) => pad + (i / (history.length - 1)) * (w - pad * 2);
  const getY = (val) => h - pad - (val / maxVal) * (h - pad * 2);
  const clientPath = history.map((item, i) => `${i === 0 ? 'M' : 'L'}${getX(i)},${getY(item.actualClientVolume || 0)}`).join(' ');
  const retainedPath = history.map((item, i) => `${i === 0 ? 'M' : 'L'}${getX(i)},${getY(item.actualRetainedClients || 0)}`).join(' ');
  const returnPath = history.map((item, i) => `${i === 0 ? 'M' : 'L'}${getX(i)},${getY((item.actualReturnPercent || 0) * 0.5)}`).join(' ');
  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line key={pct} x1={pad} y1={h - pad - pct * (h - pad * 2)} x2={w - pad} y2={h - pad - pct * (h - pad * 2)} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        <path d={clientPath + ` L${getX(history.length - 1)},${h - pad} L${getX(0)},${h - pad} Z`} fill="url(#zzzCGrad)" opacity="0.3" />
        <path d={retainedPath + ` L${getX(history.length - 1)},${h - pad} L${getX(0)},${h - pad} Z`} fill="url(#zzzRGrad)" opacity="0.2" />
        <path d={clientPath} fill="none" stroke="var(--crm-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={retainedPath} fill="none" stroke="#7c6fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={returnPath} fill="none" stroke="#d6b36a" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        {history.map((item, i) => (
          <g key={i}>
            <circle cx={getX(i)} cy={getY(item.actualClientVolume || 0)} r="3" fill="var(--crm-primary)" stroke="var(--crm-surface)" strokeWidth="1.5" />
            <circle cx={getX(i)} cy={getY(item.actualRetainedClients || 0)} r="3" fill="#7c6fff" stroke="var(--crm-surface)" strokeWidth="1.5" />
          </g>
        ))}
        {history.map((item, i) => (
          <text key={i} x={getX(i)} y={h - 4} textAnchor="middle" fill="var(--crm-muted)" fontSize="8" fontWeight="600">{item.month?.slice(5)}</text>
        ))}
        <defs>
          <linearGradient id="zzzCGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--crm-primary)" stopOpacity="0.4" /><stop offset="100%" stopColor="var(--crm-primary)" stopOpacity="0" /></linearGradient>
          <linearGradient id="zzzRGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c6fff" stopOpacity="0.3" /><stop offset="100%" stopColor="#7c6fff" stopOpacity="0" /></linearGradient>
        </defs>
      </svg>
      <div className="flex justify-center gap-4 mt-2">
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: 'var(--crm-primary)' }} /><span className="text-[9px] text-[var(--crm-muted)]">Клиенты</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: '#7c6fff' }} /><span className="text-[9px] text-[var(--crm-muted)]">Постоянные</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: '#d6b36a' }} /><span className="text-[9px] text-[var(--crm-muted)]">Возврат %</span></div>
      </div>
    </div>
  );
};

const LevelView = ({ positions = [], currentBarber = null, services = [], apiRequest = null }) => {
  const [maxPrices, setMaxPrices] = useState({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [levelProgress, setLevelProgress] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const position = useMemo(() => {
    if (!currentBarber?.positionId || !Array.isArray(positions)) return null;
    return positions.find((p) => p.id === currentBarber.positionId) || null;
  }, [positions, currentBarber]);

  const parentPosition = useMemo(() => {
    if (!position?.parentId || !Array.isArray(positions)) return null;
    return positions.find((p) => p.id === position.parentId) || null;
  }, [positions, position]);

  const isSubLevel = Boolean(position?.parentId);
  const displayPosition = isSubLevel ? parentPosition : position;

  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions]
      .filter((p) => !p.parentId)
      .sort((a, b) => {
        const leftOrder = Number(a?.orderIndex) || 0;
        const rightOrder = Number(b?.orderIndex) || 0;
        if (leftOrder !== rightOrder) return leftOrder - rightOrder;
        return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
      });
  }, [positions]);

  const levelNumber = displayPosition ? (Number(displayPosition.orderIndex) || 0) + 1 : null;

  const subLevels = useMemo(() => {
    if (!displayPosition?.children || !displayPosition.children.length) return [];
    return [...displayPosition.children].sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0));
  }, [displayPosition]);

  const flatProgression = useMemo(() => {
    const flat = [];
    for (const root of sortedPositions) {
      flat.push(root);
      if (root.children && root.children.length > 0) {
        flat.push(...[...root.children].sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0)));
      }
    }
    return flat;
  }, [sortedPositions]);

  const currentFlatIdx = flatProgression.findIndex((p) => p.id === displayPosition?.id || p.id === position?.id);
  const nextLevelPos = currentFlatIdx >= 0 && currentFlatIdx < flatProgression.length - 1 ? flatProgression[currentFlatIdx + 1] : null;

  const radarStats = useMemo(() => {
    const m = levelProgress?.liveMetrics;
    if (!m || !position) return [];
    const reqVol = Number(position.requiredClientVolume) || 1;
    const reqRet = Number(position.requiredRetainedClients) || 1;
    const reqRetPct = Number(position.targetReturnPercent) || 1;
    return [
      { label: 'КЛИЕНТЫ', value: Math.min(1, (m.actualClientVolume || 0) / reqVol) },
      { label: 'ПОСТОЯНН.', value: Math.min(1, (m.actualRetainedClients || 0) / reqRet) },
      { label: 'ВОЗВРАТН.', value: Math.min(1, (m.actualReturnPercent || 0) / reqRetPct) },
      { label: 'ПРОЦЕНТ', value: Math.min(1, (Number(position.masterSharePercent) || 0) / 100) },
    ];
  }, [levelProgress?.liveMetrics, position]);

  useEffect(() => {
    if (!position?.id || !apiRequest) return;
    let cancelled = false;
    (async () => {
      setLoadingPrices(true);
      try {
        const data = await apiRequest(`/PositionServiceMaxPrices?positionId=${encodeURIComponent(position.id)}`);
        const map = {};
        if (Array.isArray(data)) data.forEach((e) => { map[e.serviceId] = e.maxPrice; });
        if (!cancelled) setMaxPrices(map);
      } catch { if (!cancelled) setMaxPrices({}); }
      finally { if (!cancelled) setLoadingPrices(false); }
    })();
    return () => { cancelled = true; };
  }, [position?.id, apiRequest]);

  useEffect(() => {
    if (!currentBarber?.id || !apiRequest) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await apiRequest(`/level-history?barberId=${encodeURIComponent(currentBarber.id)}`);
        if (!cancelled) setLevelProgress(data);
      } catch { if (!cancelled) setLevelProgress(null); }
    })();
    return () => { cancelled = true; };
  }, [currentBarber?.id, apiRequest]);

  if (!position) {
    return (
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/5 p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))' }}>
          <div className="absolute inset-0 opacity-5" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)' }} />
          <p className="relative text-sm text-[var(--crm-muted)]">Должность не назначена. Обратитесь к администратору.</p>
        </div>
      </div>
    );
  }

  const promoPct = levelProgress?.promotionProgress ? Math.min(100, (levelProgress.promotionProgress.monthsMet / levelProgress.promotionProgress.monthsRequired) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* ═══ HERO HEADER ═══ */}
      <div className="relative overflow-hidden rounded-2xl" style={{
        background: 'linear-gradient(135deg, var(--crm-surface-2) 0%, var(--crm-surface) 50%, var(--crm-surface-2) 100%)',
        border: '1px solid rgba(0,191,175,0.15)',
      }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0,191,175,0.5) 8px, rgba(0,191,175,0.5) 9px)' }} />
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10" style={{ background: 'radial-gradient(circle, var(--crm-primary), transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, var(--crm-primary), transparent)' }} />
          <div className="absolute top-0 left-0 h-full w-[2px]" style={{ background: 'linear-gradient(180deg, var(--crm-primary), transparent)' }} />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-0 right-0 w-full h-[2px]" style={{ background: 'linear-gradient(270deg, var(--crm-primary), transparent)' }} />
          <div className="absolute bottom-0 right-0 h-full w-[2px]" style={{ background: 'linear-gradient(0deg, var(--crm-primary), transparent)' }} />
        </div>
        <div className="relative p-5 md:p-7">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <ZzzHexBadge number={levelNumber} size={72} color="var(--crm-primary)" label="УРОВЕНЬ" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight" style={{ textShadow: '0 0 30px rgba(0,191,175,0.2)' }}>
                  {displayPosition.name}
                </h1>
                {isSubLevel && (
                  <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{
                    background: 'linear-gradient(135deg, var(--crm-primary), var(--crm-primary-strong))',
                    color: 'var(--crm-primary-on)',
                  }}>{position.name}</span>
                )}
              </div>
              <p className="text-sm text-[var(--crm-muted)]">
                Уровень {levelNumber} из {sortedPositions.length}
                {subLevels.length > 0 && ` · ${subLevels.length} подуровней`}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--crm-primary)', boxShadow: '0 0 8px var(--crm-primary)' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Доля:</span>
                  <span className="text-xs font-bold text-white">{position.masterSharePercent ?? 0}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#d6b36a', boxShadow: '0 0 8px #d6b36a' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Возвратность:</span>
                  <span className="text-xs font-bold text-white">{position.targetReturnPercent ?? 0}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ff617f', boxShadow: '0 0 8px #ff617f' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Объем:</span>
                  <span className="text-xs font-bold text-white">{position.requiredClientVolume ?? 0}</span>
                </div>
              </div>
              {levelProgress?.countdown && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {levelProgress.promotionProgress?.ready ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#fff', boxShadow: '0 0 16px rgba(34,197,94,0.3)' }}>
                      Готов к повышению
                    </span>
                  ) : levelProgress.promotionProgress?.monthsMet > 0 && levelProgress.countdown.promotionDaysLeft != null ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(0,191,175,0.12)', color: 'var(--crm-primary)', border: '1px solid rgba(0,191,175,0.25)' }}>
                      Повышение через {levelProgress.countdown.promotionDaysLeft} дн.
                    </span>
                  ) : null}
                  {levelProgress.demotionRisk?.atRisk && levelProgress.countdown.demotionDaysLeft != null && !levelProgress.demotionRisk?.ready ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(255,97,127,0.12)', color: '#ff617f', border: '1px solid rgba(255,97,127,0.25)' }}>
                      Понижение через {levelProgress.countdown.demotionDaysLeft} дн.
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--crm-muted)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    Оценка через {levelProgress.countdown.daysUntilEvaluation} дн.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB NAV ═══ */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--crm-surface-2)', border: '1px solid rgba(255,255,255,0.04)' }}>
        {[{ id: 'overview', label: 'ОБЗОР' }, { id: 'progress', label: 'ПРОГРЕСС' }, { id: 'services', label: 'УСЛУГИ' }].map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-2 text-[10px] uppercase tracking-widest font-bold rounded-lg transition-all duration-200"
            style={activeTab === tab.id ? { background: 'linear-gradient(135deg, var(--crm-primary), var(--crm-primary-strong))', color: 'var(--crm-primary-on)', boxShadow: '0 0 20px rgba(0,191,175,0.2)' } : { color: 'var(--crm-muted)' }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══ TAB: OVERVIEW ═══ */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <ZzzStatBlock label="Процент барбера" value={position.masterSharePercent ?? 0} unit="%" color="var(--crm-primary)" />
            <ZzzStatBlock label="Возвратность клиентов" value={position.targetReturnPercent ?? 0} unit="%" color="#d6b36a" />
            <ZzzStatBlock label="Количество клиентов" value={position.requiredClientVolume ?? 0} color="#ff617f" />
            <ZzzStatBlock label="Постоянные" value={position.requiredRetainedClients ?? 0} color="#7c6fff" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-3">ПРОФИЛЬ ПЕРСОНАЖА</p>
              <div className="flex justify-center"><ZzzRadarChart stats={radarStats} size={200} /></div>
            </div>
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">ТЕКУЩИЙ МЕСЯЦ</p>
                {levelProgress?.liveMetrics && <span className="flex items-center gap-1.5 text-[9px] text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />LIVE</span>}
              </div>
              {levelProgress?.liveMetrics ? (
                <div className="space-y-3">
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualClientVolume || 0} max={position.requiredClientVolume || 1} color={levelProgress.liveMetrics.meetsNextNow ? '#22c55e' : 'var(--crm-primary)'} height={8} label="Кол-во клиентов" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {levelProgress.liveMetrics.actualClientVolume || 0}</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.requiredClientVolume || 0}</span></div>
                  </div>
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualRetainedClients || 0} max={position.requiredRetainedClients || 1} color="#7c6fff" height={8} label="Постоянные" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {levelProgress.liveMetrics.actualRetainedClients || 0}</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.requiredRetainedClients || 0}</span></div>
                  </div>
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualReturnPercent || 0} max={position.targetReturnPercent || 1} color="#d6b36a" height={8} label="Возвратность" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {(levelProgress.liveMetrics.actualReturnPercent || 0).toFixed(1)}%</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.targetReturnPercent || 0}%</span></div>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-white/5">
                    <span className={`px-2 py-0.5 text-[9px] rounded-sm font-bold ${levelProgress.liveMetrics.meetsCurrentNow ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                      {levelProgress.liveMetrics.meetsCurrentNow ? 'ТЕКУШИЙ OK' : 'ТЕКУШИЙ X'}
                    </span>
                    {nextLevelPos && <span className={`px-2 py-0.5 text-[9px] rounded-sm font-bold ${levelProgress.liveMetrics.meetsNextNow ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-[var(--crm-muted)]'}`}>
                      {levelProgress.liveMetrics.meetsNextNow ? 'СЛЕДУЮЩИЙ OK' : 'СЛЕДУЮЩИЙ X'}
                    </span>}
                  </div>
                </div>
              ) : <div className="flex items-center justify-center h-32 text-xs text-[var(--crm-muted)]">Загрузка...</div>}
            </div>
          </div>
          {subLevels.length > 0 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ПОДУРОВНИ</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subLevels.map((sub) => {
                  const isCurrent = sub.id === position.id;
                  return (
                    <div key={sub.id} className="relative p-3.5 rounded-lg" style={{
                      background: isCurrent ? 'linear-gradient(135deg, rgba(0,191,175,0.1), rgba(0,191,175,0.03))' : 'rgba(255,255,255,0.02)',
                      border: isCurrent ? '1px solid rgba(0,191,175,0.3)' : '1px solid rgba(255,255,255,0.04)',
                    }}>
                      {isCurrent && <div className="absolute top-0 right-0 px-2 py-0.5 text-[8px] uppercase tracking-widest font-bold" style={{ background: 'var(--crm-primary)', color: 'var(--crm-primary-on)' }}>ТЕКУЩИЙ</div>}
                      <p className={`text-sm font-bold ${isCurrent ? 'text-white' : 'text-slate-400'}`}>{sub.name}</p>
                      <div className="flex gap-3 mt-2">
                        <span className="text-[10px] text-[var(--crm-muted)]">{sub.masterSharePercent ?? 0}%</span>
                        <span className="text-[10px] text-[var(--crm-muted)]">Объем: {sub.requiredClientVolume ?? 0}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══ TAB: PROGRESS ═══ */}
      {activeTab === 'progress' && (
        <div className="space-y-4">
          {levelProgress?.countdown && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(0,191,175,0.12)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ background: 'radial-gradient(circle, var(--crm-primary), transparent)' }} />
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ОБРАТНЫЙ ОТСЧЁТ</p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black" style={{
                    color: levelProgress.promotionProgress?.ready ? '#22c55e' : levelProgress.demotionRisk?.atRisk ? '#ff617f' : 'var(--crm-primary)',
                    textShadow: `0 0 40px ${levelProgress.promotionProgress?.ready ? 'rgba(34,197,94,0.3)' : levelProgress.demotionRisk?.atRisk ? 'rgba(255,97,127,0.3)' : 'rgba(0,191,175,0.3)'}`,
                  }}>{levelProgress.countdown.daysUntilEvaluation}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">ДНЕЙ ДО ОЦЕНКИ</span>
                  <span className="text-[9px] text-[var(--crm-muted)] mt-1">{levelProgress.countdown.nextEvaluationDate}</span>
                </div>
                <div className="flex-1 space-y-3">
                  {levelProgress.promotionProgress?.ready ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                      <p className="text-sm font-bold text-green-400">Повышение готово!</p>
                      <p className="text-[10px] text-green-400/70 mt-0.5">Вы выполнили требования 2 мес. подряд.</p>
                    </div>
                  ) : levelProgress.promotionProgress?.monthsMet > 0 ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(0,191,175,0.05)', border: '1px solid rgba(0,191,175,0.12)' }}>
                      <p className="text-sm font-bold text-white">Повышение: {levelProgress.promotionProgress.monthsMet}/2 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Выполняйте требования {levelProgress.countdown.daysUntilEvaluation} дн.</p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <p className="text-sm font-bold text-white">Повышение: 0/2 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Начните выполнять требования следующего уровня.</p>
                    </div>
                  )}
                  {levelProgress.demotionRisk?.ready ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,97,127,0.08)', border: '1px solid rgba(255,97,127,0.2)' }}>
                      <p className="text-sm font-bold text-red-400">Уровень понижен!</p>
                    </div>
                  ) : levelProgress.demotionRisk?.atRisk ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,97,127,0.05)', border: '1px solid rgba(255,97,127,0.12)' }}>
                      <p className="text-sm font-bold text-amber-400">Внимание: {levelProgress.demotionRisk.monthsFailed}/3 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Выполните требования {levelProgress.countdown.daysUntilEvaluation} дн.</p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)' }}>
                      <p className="text-sm font-bold text-green-400">Текущий уровень: OK</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {nextLevelPos && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(0,191,175,0.12)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-3">ТРЕБОВАНИЯ: {nextLevelPos.name}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Кол-во клиентов', actual: levelProgress?.liveMetrics?.actualClientVolume ?? 0, req: nextLevelPos.requiredClientVolume ?? 0, color: 'var(--crm-primary)' },
                  { label: 'Постоянные', actual: levelProgress?.liveMetrics?.actualRetainedClients ?? 0, req: nextLevelPos.requiredRetainedClients ?? 0, color: '#7c6fff' },
                  { label: 'Возвратность', actual: levelProgress?.liveMetrics?.actualReturnPercent ?? 0, req: nextLevelPos.targetReturnPercent ?? 0, color: '#d6b36a', isPercent: true },
                ].map((item, i) => {
                  const met = item.actual >= item.req;
                  return (
                    <div key={i} className="p-3 rounded-lg" style={{ background: met ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${met ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.04)'}` }}>
                      <p className="text-[9px] uppercase tracking-widest text-[var(--crm-muted)] mb-1">{item.label}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black" style={{ color: met ? '#4ade80' : item.color }}>{item.isPercent ? (item.actual || 0).toFixed(1) : item.actual}</span>
                        <span className="text-xs text-[var(--crm-muted)]">/ {item.isPercent ? `${item.req}%` : item.req}</span>
                      </div>
                      <ZzzGlowBar value={item.actual} max={item.req || 1} color={met ? '#22c55e' : item.color} height={3} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {levelProgress?.history?.length > 0 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ИСТОРИЯ ОЦЕНОК</p>
              <div className="space-y-2">
                {levelProgress.history.map((h, i) => (
                  <div key={h.month} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: i === 0 ? 'rgba(0,191,175,0.05)' : 'transparent', border: i === 0 ? '1px solid rgba(0,191,175,0.12)' : '1px solid transparent' }}>
                    <span className="text-xs font-mono text-[var(--crm-muted)] w-16">{h.month}</span>
                    <div className="flex gap-2 flex-1">
                      <span className={`px-1.5 py-0.5 text-[9px] rounded-sm font-bold ${h.meetsCurrentRequirements ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                        {h.meetsCurrentRequirements ? 'ТЕКУЩИЙ OK' : 'ТЕКУШИЙ X'}
                      </span>
                      {h.nextPositionId && <span className={`px-1.5 py-0.5 text-[9px] rounded-sm font-bold ${h.meetsNextRequirements ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-[var(--crm-muted)]'}`}>
                        {h.meetsNextRequirements ? 'СЛЕДУЮЩИЙ OK' : 'СЛЕДУЮЩИЙ X'}
                      </span>}
                    </div>
                    <span className="text-[10px] text-[var(--crm-muted)]">{h.actualClientVolume} кл. / {h.actualRetainedClients} пост. / {(h.actualReturnPercent || 0).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level tree in Progress tab */}
          {flatProgression.length > 1 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ДЕРЕВО УРОВНЕЙ</p>
              <div className="space-y-1.5">
                {flatProgression.map((pos, idx) => {
                  const isCurrent = pos.id === position?.id;
                  const isParent = pos.id === displayPosition?.id && isSubLevel;
                  const isPast = idx < currentFlatIdx;
                  return (
                    <div key={pos.id} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: isCurrent ? 'rgba(0,191,175,0.08)' : isParent ? 'rgba(0,191,175,0.04)' : 'transparent', border: isCurrent ? '1px solid rgba(0,191,175,0.2)' : '1px solid transparent' }}>
                      <div className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: isCurrent ? 'var(--crm-primary)' : isParent ? 'rgba(0,191,175,0.25)' : isPast ? 'rgba(0,191,175,0.15)' : 'rgba(255,255,255,0.04)', color: isCurrent ? 'var(--crm-primary-on)' : isPast || isParent ? 'var(--crm-primary)' : 'var(--crm-muted)' }}>{idx + 1}</div>
                      <span className={`text-sm ${isCurrent ? 'text-white font-bold' : isParent ? 'text-white/70 font-semibold' : isPast ? 'text-slate-300' : 'text-slate-500'}`}>{pos.name}</span>
                      <span className="text-[10px] text-[var(--crm-muted)] ml-auto">{pos.masterSharePercent ?? 0}%</span>
                      {isCurrent && <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--crm-primary)' }}>ТЕКУЩИЙ</span>}
                      {isParent && !isCurrent && <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--crm-primary)', opacity: 0.6 }}>УРОВЕНЬ</span>}
                      {isPast && <span className="text-[9px] text-green-400/60">✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══ TAB: SERVICES ═══ */}
      {activeTab === 'services' && (
        <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">МАКС. СТОИМОСТЬ УСЛУГ</p>
          {loadingPrices ? (
            <div className="flex items-center justify-center py-8"><div className="w-6 h-6 border-2 border-[var(--crm-primary)] border-t-transparent rounded-full animate-spin" /></div>
          ) : (
            <div className="space-y-2">
              {services.filter((s) => s.isActive !== false).map((service) => {
                const price = maxPrices[service.id];
                return (
                  <div key={service.id} className="flex items-center justify-between py-2.5 px-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <span className="text-sm text-slate-300">{service.name}</span>
                    <span className="text-sm font-bold text-white">{price != null ? formatCurrency(price) : '—'}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
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
