const ServicesView = ({
  services = [],
  barbers = [],
  onFieldChange,
  onPriceChange,
  onDelete,
  onAdd,
  onReorder,
  reorderBusy = false,
  role = ROLE_OWNER,
}) => {
  const [editorState, setEditorState] = useState({ open: false, mode: 'edit', targetId: null });
  const [draftService, setDraftService] = useState(buildNewServiceState);
  const [dragOrderIds, setDragOrderIds] = useState([]);
  const [dragState, setDragState] = useState(null);
  const serviceItemRefs = useRef(new Map());
  const dragMetaRef = useRef(null);
  const isStaffMode = role === ROLE_STAFF;
  const canManageCatalog = !isStaffMode;
  const sortedServices = useMemo(() => sortServicesByOrder(services), [services]);
  const visibleServices = useMemo(() => {
    if (!dragOrderIds.length) return sortedServices;
    const serviceMap = new Map(sortedServices.map((service) => [service.id, service]));
    return dragOrderIds.map((id) => serviceMap.get(id)).filter(Boolean);
  }, [sortedServices, dragOrderIds]);
  const openEditor = (mode, targetId = null) => {
    if (mode === 'create' && !canManageCatalog) return;
    if (mode === 'create') {
      setDraftService(buildNewServiceState());
    }
    setEditorState({ open: true, mode, targetId });
  };
  const closeEditor = () => setEditorState({ open: false, mode: 'edit', targetId: null });
  const isCreateMode = editorState.mode === 'create';
  const activeService = sortedServices.find((service) => service.id === editorState.targetId) || null;
  const workingService = isCreateMode ? draftService : activeService;
  useEffect(() => {
    if (!dragState) {
      setDragOrderIds([]);
    }
  }, [dragState]);
  useEffect(() => {
    if (!dragState) return undefined;
    const previousUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';
    return () => {
      document.body.style.userSelect = previousUserSelect;
    };
  }, [dragState]);
  const buildReorderedIds = useCallback((sourceIds, activeId, clientY) => {
    const idleIds = sourceIds.filter((id) => id !== activeId);
    let targetIndex = idleIds.length;
    for (let index = 0; index < idleIds.length; index += 1) {
      const currentId = idleIds[index];
      const element = serviceItemRefs.current.get(currentId);
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
    const finalIds = dragOrderIds.length ? dragOrderIds : meta.sourceIds;
    setDragOrderIds([]);
    if (!shouldSave || !Array.isArray(finalIds) || !finalIds.length) return;
    const changed = finalIds.some((id, index) => id !== meta.sourceIds[index]);
    if (!changed) return;
    await onReorder?.(finalIds);
  }, [dragOrderIds, onReorder]);
  useEffect(() => {
    if (!dragState) return undefined;
    const handlePointerMove = (event) => {
      const meta = dragMetaRef.current;
      if (!meta || event.pointerId !== meta.pointerId) return;
      const dx = event.clientX - meta.startX;
      const dy = event.clientY - meta.startY;
      if (!meta.started) {
        const threshold = meta.pointerType === 'touch' ? 10 : 6;
        if (Math.hypot(dx, dy) < threshold) return;
        meta.started = true;
        setDragOrderIds(meta.sourceIds);
        setDragState({
          activeId: meta.activeId,
          pointerType: meta.pointerType,
        });
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      const baseIds = dragMetaRef.current?.started && dragOrderIds.length ? dragOrderIds : meta.sourceIds;
      const nextIds = buildReorderedIds(baseIds, meta.activeId, event.clientY);
      setDragOrderIds((prev) => {
        const prevIds = prev.length ? prev : meta.sourceIds;
        const unchanged = prevIds.length === nextIds.length && prevIds.every((id, index) => id === nextIds[index]);
        return unchanged ? prev : nextIds;
      });
    };
    const handlePointerUp = () => {
      finishDrag(true);
    };
    const handlePointerCancel = () => {
      finishDrag(false);
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: false });
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerCancel);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, [buildReorderedIds, dragOrderIds, dragState, finishDrag]);
  const handleReorderPointerDown = useCallback((event, serviceId) => {
    if (!canManageCatalog || reorderBusy) return;
    event.preventDefault();
    event.stopPropagation();
    dragMetaRef.current = {
      activeId: serviceId,
      pointerId: event.pointerId,
      pointerType: event.pointerType || 'mouse',
      startX: event.clientX,
      startY: event.clientY,
      started: false,
      sourceIds: sortedServices.map((service) => service.id),
    };
    setDragState({
      activeId: serviceId,
      pointerType: event.pointerType || 'mouse',
    });
  }, [canManageCatalog, reorderBusy, sortedServices]);
  const handleFieldChange = (field, value) => {
    if (!canManageCatalog && !isCreateMode) return;
    if (isCreateMode) {
      setDraftService((prev) => ({ ...prev, [field]: value }));
    } else if (activeService) {
      onFieldChange?.(activeService.id, field, value);
    }
  };
  const handlePriceChange = (barberId, value) => {
    if (isCreateMode) {
      setDraftService((prev) => ({
        ...prev,
        prices: { ...(prev.prices || {}), [barberId]: value },
      }));
    } else if (activeService) {
      onPriceChange?.(activeService.id, barberId, value);
    }
  };
  const handleSave = () => {
    if (!canManageCatalog && !isCreateMode) {
      closeEditor();
      return;
    }
    if (isCreateMode) {
      if (!workingService?.name?.trim()) return;
      onAdd?.(draftService);
      setDraftService(buildNewServiceState());
    }
    closeEditor();
  };
  const handleDeleteLocal = () => {
    if (!canManageCatalog || isCreateMode) return;
    if (activeService) {
      const result = onDelete?.(activeService);
      if (result && typeof result.finally === 'function') {
        result.finally(() => closeEditor());
      } else {
        closeEditor();
      }
    }
  };
  const servicePriceSummary = (service) => {
    if (!service) {
      return { label: '—', details: '' };
    }
    const values = barbers
      .map((barber) => Number(service.prices?.[barber.id]))
      .filter((price) => Number.isFinite(price) && price >= 0);
    if (!values.length) {
      return {
        label: 'Цены не заданы',
        details: barbers.length ? 'Нажмите, чтобы добавить' : 'Нет мастеров для назначения',
      };
    }
    const min = Math.min(...values);
    const max = Math.max(...values);
    const count = values.length;
    return {
      label: min === max ? formatCurrency(min) : `${formatCurrency(min)} – ${formatCurrency(max)}`,
      details: `Для ${count} ${pluralize(count, ['барбера', 'барбера', 'барберов'])}`,
    };
  };
  const canSubmit = isCreateMode ? Boolean(workingService?.name?.trim()) : true;
  return (
    <div className="space-y-6">
      <SectionCard
        title="Услуги"
        actions={
          canManageCatalog ? (
            <button
              onClick={() => openEditor('create')}
              className="rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
            >
              + Добавить услугу
            </button>
          ) : null
        }
      >
        {sortedServices.length === 0 ? (
          <p className="text-slate-400">
            {canManageCatalog ? 'Список услуг пуст. Добавьте первую услугу.' : 'Каталог услуг пока недоступен.'}
          </p>
        ) : (
          <div className="space-y-3">
            {visibleServices.map((service, index) => {
              const summary = servicePriceSummary(service);
              const isActiveService = service.isActive !== false;
              const isDragging = dragState?.activeId === service.id;
              return (
                <div
                  key={service.id}
                  ref={(node) => {
                    if (node) {
                      serviceItemRefs.current.set(service.id, node);
                    } else {
                      serviceItemRefs.current.delete(service.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEditor('edit', service.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openEditor('edit', service.id);
                    }
                  }}
                  className={classNames(
                    'group grid w-full grid-cols-[auto,minmax(0,1fr)] items-start gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/45 px-4 py-3 text-left transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:grid-cols-[auto,minmax(0,1fr),auto] sm:items-center',
                    isActiveService
                      ? 'hover:border-indigo-500/70 hover:bg-slate-900/70'
                      : 'opacity-80 hover:border-amber-400/60',
                    isDragging && 'border-indigo-400/80 bg-slate-900 shadow-[0_18px_40px_rgba(49,46,129,0.22)]'
                  )}
                >
                  {canManageCatalog ? (
                    <button
                      type="button"
                      aria-label={`Переместить услугу ${service.name || index + 1}`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onPointerDown={(event) => handleReorderPointerDown(event, service.id)}
                      className={classNames(
                        'flex h-11 w-11 flex-shrink-0 touch-none items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/80 text-slate-500 transition',
                        reorderBusy ? 'cursor-wait opacity-60' : 'cursor-grab hover:border-indigo-400 hover:bg-slate-900 hover:text-white active:cursor-grabbing'
                      )}
                      disabled={reorderBusy}
                    >
                      <span className="grid grid-cols-2 gap-1">
                        {Array.from({ length: 6 }).map((_, dotIndex) => (
                          <span key={dotIndex} className="h-1 w-1 rounded-full bg-current" />
                        ))}
                      </span>
                    </button>
                  ) : (
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 text-xs font-semibold text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 flex-col gap-1.5">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex h-7 min-w-[1.9rem] items-center justify-center rounded-full bg-indigo-500/15 px-2 text-[11px] font-semibold text-indigo-100">
                          {index + 1}
                        </span>
                        <p
                          className={classNames(
                            'min-w-0 text-[15px] font-semibold leading-tight tracking-tight break-words sm:truncate sm:text-base',
                            isActiveService ? 'text-white' : 'text-slate-400'
                          )}
                        >
                          {service.name || 'Без названия'}
                        </p>
                      </div>
                      <div className="flex min-w-0 flex-col gap-0.5 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
                        <span className={classNames('font-semibold', isActiveService ? 'text-slate-100' : 'text-slate-500')}>
                          {summary.label}
                        </span>
                        <span className={classNames('text-xs', isActiveService ? 'text-slate-400' : 'text-slate-500')}>
                          {summary.details}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 flex flex-wrap items-center justify-start gap-2 pt-1 sm:col-start-auto sm:justify-end sm:pt-0">
                    <span
                      className={classNames(
                        'rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]',
                        isActiveService ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200' : 'border-slate-600 bg-slate-900/60 text-slate-400'
                      )}
                    >
                      {isActiveService ? 'Активна' : 'Скрыта'}
                    </span>
                    <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                      {service.duration ? `${service.duration} мин` : '—'}
                    </span>
                    {reorderBusy && isDragging ? (
                      <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">
                        Сохраняем
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>
      <Modal
        title={isCreateMode ? 'Новая услуга' : workingService?.name || 'Редактирование услуги'}
        isOpen={editorState.open}
        onClose={closeEditor}
        maxWidthClass="max-w-3xl"
        footer={
          <>
            {!isCreateMode && canManageCatalog && (
              <button onClick={handleDeleteLocal} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10">
                Удалить
              </button>
            )}
            <button onClick={closeEditor} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
              Отмена
            </button>
            <button
              onClick={handleSave}
              disabled={!canSubmit}
              className={classNames(
                'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                canSubmit ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300'
              )}
            >
              {isCreateMode ? 'Добавить' : isStaffMode ? 'Закрыть' : 'Готово'}
            </button>
          </>
        }
      >
        {workingService ? (
          <div className="w-full space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-800 bg-slate-950/55 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-7 min-w-[1.9rem] items-center justify-center rounded-full bg-indigo-500/15 px-2 text-[11px] font-semibold text-indigo-100">
                  {isCreateMode ? 'Н' : Number((visibleServices.findIndex((service) => service.id === workingService.id) || 0) + 1)}
                </span>
                <span className="truncate text-sm font-semibold text-white">
                  {workingService.name || 'Без названия'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={classNames(
                    'rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]',
                    workingService.isActive !== false ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200' : 'border-slate-600 bg-slate-900/60 text-slate-400'
                  )}
                >
                  {workingService.isActive !== false ? 'Активна' : 'Скрыта'}
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                  {workingService.duration ? `${workingService.duration} мин` : '—'}
                </span>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-300">Название</label>
                <input
                  name="serviceName"
                  aria-label="Название услуги"
                  value={workingService.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Например, стрижка"
                  disabled={!canManageCatalog}
                  className={classNames(
                    'w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white shadow-inner shadow-black/20',
                    !canManageCatalog && 'cursor-not-allowed opacity-70'
                  )}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-300">Длительность, мин</label>
                <input
                  name="serviceDuration"
                  aria-label="Длительность услуги"
                  type="number"
                  min={5}
                  step={5}
                  value={workingService.duration ?? ''}
                  onChange={(event) =>
                    handleFieldChange('duration', event.target.value === '' ? '' : Number(event.target.value))
                  }
                  disabled={!canManageCatalog}
                  className={classNames(
                    'w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white shadow-inner shadow-black/20',
                    !canManageCatalog && 'cursor-not-allowed opacity-70'
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {canManageCatalog ? (
                <button
                  type="button"
                  onClick={() => handleFieldChange('isActive', !(workingService.isActive !== false))}
                  className={classNames(
                    'inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition',
                    workingService.isActive !== false ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-900/60 text-slate-400'
                  )}
                >
                  <span>{workingService.isActive !== false ? ACTIVE_SERVICE_LABEL : HIDDEN_SERVICE_LABEL}</span>
                  <span
                    className={classNames(
                      'flex h-5 w-5 items-center justify-center rounded-full border',
                      workingService.isActive !== false ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100' : 'border-slate-600 text-slate-500'
                    )}
                  >
                    {workingService.isActive !== false ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
                  </span>
                </button>
              ) : (
                <div
                  className={classNames(
                    'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold',
                    workingService.isActive !== false ? 'border-emerald-400/60 text-emerald-200' : 'border-slate-700 text-slate-400'
                  )}
                >
                  <span>{workingService.isActive !== false ? ACTIVE_SERVICE_LABEL : HIDDEN_SERVICE_LABEL}</span>
                </div>
              )}
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-200">Цены по барберам</p>
                  <p className="text-xs text-slate-500">Индивидуальные цены для каждого мастера.</p>
                </div>
                {isStaffMode && (
                  <p className="text-xs text-slate-500">Вы можете редактировать только свою стоимость.</p>
                )}
              </div>
              {barbers.length ? (
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {barbers.map((barber) => (
                    <label key={barber.id} className="grid grid-cols-[minmax(0,1fr),112px] items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2.5 text-sm text-white transition hover:border-slate-500">
                      <div className="min-w-0">
                        <span className="block truncate font-medium">{barber.name || 'Без имени'}</span>
                      </div>
                      <input
                        name={`servicePrice-${barber.id}`}
                        aria-label={`Цена для ${barber.name || 'барбера'}`}
                        type="number"
                        min={0}
                        value={workingService.prices?.[barber.id] ?? ''}
                        onChange={(event) => handlePriceChange(barber.id, event.target.value)}
                        className="w-full rounded-xl border border-slate-600 bg-slate-950 px-3 py-2 text-right text-sm font-semibold text-white"
                        placeholder="0"
                      />
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  {isStaffMode ? 'Ваш профиль не привязан к барберу. Обратитесь к администратору.' : 'Добавьте барберов, чтобы назначать цены.'}
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-slate-300">Выберите услугу для редактирования.</p>
        )}
      </Modal>
    </div>
  );
};

