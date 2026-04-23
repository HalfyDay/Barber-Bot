const BarbersView = ({
  barbers = [],
  positions = [],
  loadAvatarOptions,
  uploadAvatar,
  uploadCard,
  deleteAvatar,
  onFieldChange,
  onSave,
  onAdd,
  onDelete,
  onReorder,
  reorderBusy = false,
  role = ROLE_OWNER,
}) => {
  const [editorState, setEditorState] = useState({ open: false, mode: 'edit', targetId: null });
  const [draftBarber, setDraftBarber] = useState(buildNewBarberState);
  const [dragOrderIds, setDragOrderIds] = useState([]);
  const [dragState, setDragState] = useState(null);
  const barberItemRefs = useRef(new Map());
  const dragMetaRef = useRef(null);
  const canManageBarbers = role !== ROLE_STAFF;
  const sortedBarbers = useMemo(() => sortServicesByOrder(barbers), [barbers]);
  const visibleBarbers = useMemo(() => {
    if (!dragOrderIds.length) return sortedBarbers;
    const barberMap = new Map(sortedBarbers.map((barber) => [barber.id, barber]));
    return dragOrderIds.map((id) => barberMap.get(id)).filter(Boolean);
  }, [sortedBarbers, dragOrderIds]);
  const openEditor = (mode, targetId = null) => {
    if (mode === 'create') {
      setDraftBarber(buildNewBarberState());
    }
    setEditorState({ open: true, mode, targetId });
  };
  const closeEditor = () => setEditorState({ open: false, mode: 'edit', targetId: null });
  const isCreateMode = editorState.mode === 'create';
  const activeBarber = sortedBarbers.find((barber) => barber.id === editorState.targetId) || null;
  const workingBarber = isCreateMode ? draftBarber : activeBarber;
  const [pendingAvatar, setPendingAvatar] = useState('');
  const cardSaverRef = useRef(null);
  const [savingBarber, setSavingBarber] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions].sort((a, b) => {
      const leftOrder = Number(a?.orderIndex) || 0;
      const rightOrder = Number(b?.orderIndex) || 0;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
    });
  }, [positions]);
  const activePosition = useMemo(
    () => sortedPositions.find((item) => item.id === workingBarber?.positionId) || null,
    [sortedPositions, workingBarber?.positionId]
  );
  const avatarSyncRef = useRef({ id: null, avatar: '' });
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
  useEffect(() => {
    if (!editorState.open) {
      setPendingAvatar('');
      cardSaverRef.current = null;
      avatarSyncRef.current = { id: null, avatar: '' };
      return;
    }
    if (isCreateMode) {
      const next = draftBarber.avatarUrl || '';
      avatarSyncRef.current = { id: 'create', avatar: next };
      setPendingAvatar(next);
      return;
    }
    const targetId = activeBarber?.id || null;
    const nextAvatar = activeBarber?.avatarUrl || '';
    const { id: syncedId, avatar: syncedAvatar } = avatarSyncRef.current;
    const normalizedNext = normalizeImagePath(nextAvatar);
    const normalizedSynced = normalizeImagePath(syncedAvatar || '');
    const barberChanged = syncedId !== targetId;
    const avatarChanged = normalizedNext !== normalizedSynced;
    if (!barberChanged && !avatarChanged) return;
    setPendingAvatar((prev) => {
      const normalizedPrev = normalizeImagePath(prev || '');
      const allowSync = barberChanged || (avatarChanged && normalizedPrev === normalizedSynced);
      if (!allowSync) return prev;
      avatarSyncRef.current = { id: targetId, avatar: nextAvatar };
      return nextAvatar;
    });
  }, [editorState.open, isCreateMode, draftBarber.avatarUrl, activeBarber?.id, activeBarber?.avatarUrl]);
  useEffect(() => {
    setShowPassword(false);
  }, [editorState.open, editorState.mode, editorState.targetId]);
  const buildReorderedIds = useCallback((sourceIds, activeId, clientY) => {
    const idleIds = sourceIds.filter((id) => id !== activeId);
    let targetIndex = idleIds.length;
    for (let index = 0; index < idleIds.length; index += 1) {
      const currentId = idleIds[index];
      const element = barberItemRefs.current.get(currentId);
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
  const handleReorderPointerDown = useCallback((event, barberId) => {
    if (!canManageBarbers || reorderBusy) return;
    event.preventDefault();
    event.stopPropagation();
    dragMetaRef.current = {
      activeId: barberId,
      pointerId: event.pointerId,
      pointerType: event.pointerType || 'mouse',
      startX: event.clientX,
      startY: event.clientY,
      started: false,
      sourceIds: sortedBarbers.map((barber) => barber.id),
    };
    setDragState({
      activeId: barberId,
      pointerType: event.pointerType || 'mouse',
    });
  }, [canManageBarbers, reorderBusy, sortedBarbers]);
  const handleFieldChange = (field, value) => {
    const nextValue = field === 'rating' ? formatRatingValue(value) : value;
    if (field === 'avatarUrl') {
      const normalized = nextValue || '';
      setPendingAvatar(normalized);
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, avatarUrl: normalized }));
      }
      return;
    }
    if (isCreateMode) {
      setDraftBarber((prev) => ({ ...prev, [field]: nextValue }));
    } else if (activeBarber) {
      onFieldChange?.(activeBarber.id, field, nextValue);
    }
  };
  const handlePhoneChange = (rawValue) => {
    const digits = (rawValue || '').replace(/\D/g, '');
    const formatted = digits ? formatPhoneDisplay(rawValue) : '';
    handleFieldChange('phone', formatted);
  };
  const registerCardSaver = useCallback((fn) => {
    cardSaverRef.current = typeof fn === 'function' ? fn : null;
  }, []);
  const handleAvatarChange = useCallback(
    (value) => {
      handleFieldChange('avatarUrl', value);
    },
    [handleFieldChange]
  );
  const handleCardFieldsChange = useCallback(
    (fields) => {
      if (!fields) return;
      const nextFields = {
        cardTitle: fields.cardTitle ?? fields.name ?? '',
        cardDescription: fields.cardDescription ?? fields.description ?? '',
        cardPhrase: fields.cardPhrase ?? fields.phrase ?? '',
        cardPhotoGrayscale: fields.cardPhotoGrayscale !== false,
        cardPhotoOutline: fields.cardPhotoOutline !== false,
      };
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, ...nextFields }));
      } else if (activeBarber) {
        Object.entries(nextFields).forEach(([key, value]) => onFieldChange?.(activeBarber.id, key, value));
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleCardModeChange = useCallback(
    (mode) => {
      const normalized = normalizeCardMode(mode);
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, cardMode: normalized }));
      } else if (activeBarber) {
        onFieldChange?.(activeBarber.id, 'cardMode', normalized);
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleCardImageChange = useCallback(
    (path) => {
      const normalized = normalizeImagePath(path || '');
      if (isCreateMode) {
        setDraftBarber((prev) => ({ ...prev, cardImageUrl: normalized }));
      } else if (activeBarber) {
        onFieldChange?.(activeBarber.id, 'cardImageUrl', normalized);
      }
    },
    [isCreateMode, activeBarber, onFieldChange],
  );
  const handleSave = async () => {
    if (!workingBarber) return;
    setSavingBarber(true);
    try {
      let savedRecord = null;
      if (isCreateMode) {
        savedRecord = (await onAdd?.({ ...draftBarber, avatarUrl: pendingAvatar || '' })) || null;
        setDraftBarber(buildNewBarberState());
      } else if (activeBarber) {
        const nextBarber = pendingAvatar !== undefined ? { ...activeBarber, avatarUrl: pendingAvatar || '' } : activeBarber;
        savedRecord = (await onSave?.(nextBarber)) || nextBarber;
      }
      const targetBarber = savedRecord || (!isCreateMode ? activeBarber : null);
      if (cardSaverRef.current && targetBarber?.id) {
        try {
          await cardSaverRef.current(targetBarber.id);
        } catch (error) {
          console.error('Card upload failed:', error);
        }
      }
      closeEditor();
    } catch (error) {
      console.error('Barber save failed:', error);
    } finally {
      setSavingBarber(false);
    }
  };
  const handleDelete = () => {
    if (!isCreateMode && activeBarber) {
      const result = onDelete?.(activeBarber);
      if (result && typeof result.finally === 'function') {
        result.finally(() => closeEditor());
      } else {
        closeEditor();
      }
    }
  };
  const renderStatusBadge = (barber) =>
    barber ? (
      <span
        className={classNames(
          'rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
          barber.isActive !== false ? 'bg-emerald-500/15 text-emerald-200' : 'bg-slate-700 text-slate-300'
        )}
      >
        {barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}
      </span>
    ) : null;
  const canSubmit = isCreateMode ? Boolean(workingBarber?.name?.trim() && workingBarber?.password?.trim()) : Boolean(workingBarber);
  return (
    <div className="space-y-6 overflow-x-hidden">
      <SectionCard
        title="Барберы"
        actions={
          canManageBarbers ? (
            <button
              onClick={() => openEditor('create')}
              className="rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
            >
              + Добавить барбера
            </button>
          ) : null
        }
      >
        {sortedBarbers.length === 0 ? (
          <p className="text-slate-400">Список барберов пока пуст. Добавьте первого сотрудника.</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {visibleBarbers.map((barber, index) => {
              const avatarSrc = resolveAssetUrl(barber.avatarUrl);
              const phoneLabel = barber.phone ? formatPhoneInput(barber.phone) : '';
              const ratingLabel = clampRatingValue(barber.rating || RATING_MAX);
              const positionName = normalizeText(barber.position?.name);
              const commissionRate =
                typeof barber.position?.commissionRate === 'number' ? barber.position.commissionRate : null;
              const commissionLabel = commissionRate !== null ? formatPercent(commissionRate) : null;
              const isDragging = dragState?.activeId === barber.id;
              return (
                <div
                  key={barber.id}
                  ref={(node) => {
                    if (node) {
                      barberItemRefs.current.set(barber.id, node);
                    } else {
                      barberItemRefs.current.delete(barber.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEditor('edit', barber.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openEditor('edit', barber.id);
                    }
                  }}
                  className={classNames(
                    'group flex w-full items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    isDragging && 'border-indigo-400/80 bg-slate-900 shadow-[0_18px_40px_rgba(49,46,129,0.22)]'
                  )}
                >
                  {canManageBarbers ? (
                    <button
                      type="button"
                      aria-label={`Переместить барбера ${barber.name || index + 1}`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onPointerDown={(event) => handleReorderPointerDown(event, barber.id)}
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
                  ) : null}
                  <div className="relative h-16 w-16 flex-shrink-0">
                    {avatarSrc ? (
                      <img src={avatarSrc} alt={barber.name || 'avatar'} className="h-16 w-16 rounded-2xl object-cover" />
                    ) : (
                      <DefaultProfileIcon className="h-16 w-16 rounded-2xl border border-slate-700/70 text-slate-400" iconClassName="h-8 w-8" />
                    )}
                    <span
                      className={classNames(
                        'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900',
                        barber.isActive !== false ? 'bg-emerald-400' : 'bg-slate-600'
                      )}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-7 min-w-[1.9rem] items-center justify-center rounded-full bg-indigo-500/15 px-2 text-[11px] font-semibold text-indigo-100">
                        {index + 1}
                      </span>
                      <p className="text-base font-semibold text-white sm:text-lg">{barber.name || 'Без имени'}</p>
                      {renderStatusBadge(barber)}
                      {reorderBusy && isDragging ? (
                        <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">
                          Сохраняем
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 sm:text-sm">
                      <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-200">
                        <IconStar className="mr-1 inline h-3.5 w-3.5 text-amber-300" /> {ratingLabel}
                      </span>
                      {positionName && (
                        <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                          {positionName}
                          {commissionLabel ? ` · ${commissionLabel}` : ''}
                        </span>
                      )}
                      {phoneLabel && <span className="text-slate-300">{phoneLabel}</span>}
                      {barber.telegramId && <span className="text-slate-400">@{barber.telegramId}</span>}
                    </div>
                    {barber.description && <p className="text-sm text-slate-400">{barber.description}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>
      <Modal
        title={isCreateMode ? 'Добавить барбера' : workingBarber?.name || 'Редактирование барбера'}
        isOpen={editorState.open}
        onClose={closeEditor}
        maxWidthClass="max-w-4xl"
        footer={
          <>
            {!isCreateMode && (
              <button onClick={handleDelete} className="rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10">
                Удалить
              </button>
            )}
            <button onClick={closeEditor} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
              Отмена
            </button>
            <button
              onClick={handleSave}
              disabled={!canSubmit || savingBarber}
              className={classNames(
                'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                canSubmit && !savingBarber ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300'
              )}
            >
              {savingBarber ? 'Сохранение...' : isCreateMode ? 'Добавить' : 'Сохранить'}
            </button>
          </>
        }
      >
        {workingBarber ? (
          <div className="space-y-6">
            <BarberAvatarPicker
              value={pendingAvatar || ''}
              onChange={handleAvatarChange}
              loadOptions={loadAvatarOptions}
              onUpload={uploadAvatar}
              onCardUpload={uploadCard}
              onDelete={deleteAvatar}
              onRegisterCardSaver={registerCardSaver}
              initialName={workingBarber?.name || ''}
              initialDescription={workingBarber?.description || ''}
              initialCardTitle={workingBarber?.cardTitle || workingBarber?.name || ''}
              initialCardDescription={workingBarber?.cardDescription || workingBarber?.description || ''}
              initialCardPhrase={workingBarber?.cardPhrase || ''}
              initialPhotoGrayscale={workingBarber?.cardPhotoGrayscale !== false}
              initialPhotoOutline={workingBarber?.cardPhotoOutline !== false}
              cardMode={workingBarber?.cardMode || CARD_MODE_GENERATED}
              cardImageUrl={workingBarber?.cardImageUrl || ''}
              onCardFieldsChange={handleCardFieldsChange}
              onCardModeChange={handleCardModeChange}
              onCardImageChange={handleCardImageChange}
            />
            <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-inner shadow-black/10">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="barberName"
                  aria-label="Имя"
                  value={workingBarber.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Имя"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <div className="w-full">
                  <FixedRatingSlider dense value={workingBarber.rating} onChange={(event) => handleFieldChange('rating', event.target.value)} />
                </div>
                <div className="relative w-full">
                  <input
                    name="barberPassword"
                    aria-label="Пароль"
                    type={showPassword ? 'text' : 'password'}
                    value={workingBarber.password || ""}
                    onChange={(event) => handleFieldChange('password', event.target.value)}
                    placeholder="Пароль"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 pr-12 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-md p-0 text-slate-300 leading-none hover:text-white"
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleFieldChange('isActive', !(workingBarber.isActive !== false))}
                  className={classNames(
                    'flex h-[52px] items-center justify-between rounded-2xl border px-4 text-sm font-semibold transition',
                    workingBarber.isActive !== false
                      ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                      : 'border-slate-700 bg-slate-900/60 text-slate-400'
                  )}
                >
                  <span>{workingBarber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                  <span
                    className={classNames(
                      'flex h-5 w-5 items-center justify-center rounded-full border',
                      workingBarber.isActive !== false
                        ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100'
                        : 'border-slate-600 text-slate-500'
                    )}
                  >
                    {workingBarber.isActive !== false ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div className="col-span-2 grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Права доступа</label>
                    <select
                      value={normalizeRoleValue(workingBarber.role)}
                      onChange={(event) => handleFieldChange('role', normalizeRoleValue(event.target.value))}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
                    >
                      {ROLE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Должность</label>
                    <select
                      value={workingBarber.positionId || ''}
                      onChange={(event) => handleFieldChange('positionId', event.target.value || null)}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
                    >
                      <option value="">Без должности</option>
                      {sortedPositions.map((position) => (
                        <option key={position.id} value={position.id}>
                          {position.name}
                          {typeof position.commissionRate === 'number' ? ` · ${formatPercent(position.commissionRate)}` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <textarea
                  value={workingBarber.description || ''}
                  onChange={(event) => handleFieldChange('description', event.target.value)}
                  placeholder="Описание"
                  rows={4}
                  className="col-span-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <input
                  name="barberPhone"
                  aria-label="Телефон"
                  type="tel"
                  value={formatPhoneDisplay(workingBarber.phone || '')}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  placeholder="Телефон"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <input
                  name="barberTelegram"
                  aria-label="Telegram ID"
                  value={workingBarber.telegramId || ''}
                  onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                  placeholder="Telegram ID"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-300">Выберите барбера, чтобы отредактировать данные.</p>
        )}
      </Modal>
    </div>
  );
};
const BarberProfileView = ({
  barber = null,
  loadAvatarOptions,
  uploadAvatar,
  deleteAvatar,
  onFieldChange,
  onSave,
  allowRatingEdit = false,
}) => {
  const [pendingAvatar, setPendingAvatar] = useState(barber?.avatarUrl || "");
  const [showPassword, setShowPassword] = useState(false);
  const profileSnapshot = useMemo(
    () => (barber ? JSON.stringify({ ...barber, avatarUrl: pendingAvatar || '' }) : null),
    [barber, pendingAvatar],
  );
  const savedSnapshotRef = useRef(null);
  const saveResetRef = useRef(null);
  const [saveState, setSaveState] = useState('idle');
  useEffect(() => {
    setPendingAvatar(barber?.avatarUrl || '');
  }, [barber?.avatarUrl]);
  useEffect(() => {
    setShowPassword(false);
  }, [barber?.id]);
  useEffect(() => {
    savedSnapshotRef.current = null;
    setSaveState('idle');
  }, [barber?.id]);
  useEffect(() => {
    // once snapshot готов, фиксируем как baseline
    if (!barber || !profileSnapshot || savedSnapshotRef.current) return;
    savedSnapshotRef.current = profileSnapshot;
  }, [barber, profileSnapshot]);
  useEffect(
    () => () => {
      if (saveResetRef.current) {
        clearTimeout(saveResetRef.current);
        saveResetRef.current = null;
      }
    },
    [],
  );
  if (!barber) {
    return (
      <SectionCard title="Профиль сотрудника">
        <p className="text-sm text-slate-400">Данные профиля недоступны. Обратитесь к администратору.</p>
      </SectionCard>
    );
  }
  const handleFieldChange = (field, value) => {
    if (field === 'rating' && !allowRatingEdit) {
      return;
    }
    const nextValue = field === 'rating' ? formatRatingValue(value) : value;
    onFieldChange?.(barber.id, field, nextValue);
  };
  const handlePhoneChange = (rawValue) => {
    const digits = (rawValue || '').replace(/\D/g, '');
    const formatted = digits ? formatPhoneDisplay(rawValue) : '';
    handleFieldChange('phone', formatted);
  };
  const hasChanges = Boolean(profileSnapshot && savedSnapshotRef.current && profileSnapshot !== savedSnapshotRef.current);
  const handleSaveProfile = async () => {
    if (!barber || typeof onSave !== 'function' || saveState === 'saving' || !profileSnapshot) return;
    setSaveState('saving');
    if (saveResetRef.current) {
      clearTimeout(saveResetRef.current);
      saveResetRef.current = null;
    }
    try {
      await onSave({ ...barber, avatarUrl: pendingAvatar || '' });
      savedSnapshotRef.current = profileSnapshot;
      setSaveState('saved');
      saveResetRef.current = setTimeout(() => setSaveState('idle'), 2000);
    } catch (error) {
      console.error('Barber profile save error:', error);
      setSaveState('error');
      saveResetRef.current = setTimeout(() => setSaveState('idle'), 3000);
    }
  };
  return (
    <div className="space-y-6">
      <SectionCard title="Мой профиль">
        <div className="space-y-6">
          <BarberAvatarPicker
            value={pendingAvatar || ''}
            onChange={setPendingAvatar}
            loadOptions={loadAvatarOptions}
            onUpload={uploadAvatar}
            onDelete={deleteAvatar}
            initialName={barber?.name || ''}
            initialDescription={barber?.description || ''}
            initialCardTitle={barber?.cardTitle || barber?.name || ''}
            initialCardDescription={barber?.cardDescription || barber?.description || ''}
            initialCardPhrase={barber?.cardPhrase || ''}
            initialPhotoGrayscale={barber?.cardPhotoGrayscale !== false}
            initialPhotoOutline={barber?.cardPhotoOutline !== false}
            cardMode={barber?.cardMode || CARD_MODE_GENERATED}
            cardImageUrl={barber?.cardImageUrl || ''}
            onCardFieldsChange={(fields) => {
              if (!fields || !barber?.id) return;
              onFieldChange?.(barber.id, 'cardTitle', fields.cardTitle ?? fields.name ?? '');
              onFieldChange?.(barber.id, 'cardDescription', fields.cardDescription ?? fields.description ?? '');
              onFieldChange?.(barber.id, 'cardPhrase', fields.cardPhrase ?? fields.phrase ?? '');
              onFieldChange?.(barber.id, 'cardPhotoGrayscale', fields.cardPhotoGrayscale !== false);
              onFieldChange?.(barber.id, 'cardPhotoOutline', fields.cardPhotoOutline !== false);
            }}
            onCardModeChange={(mode) => handleFieldChange('cardMode', normalizeCardMode(mode))}
            onCardImageChange={(path) => handleFieldChange('cardImageUrl', normalizeImagePath(path || ''))}
          />
          <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-inner shadow-black/10">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="barberName"
                aria-label="Имя"
                value={barber.name || ''}
                onChange={(event) => handleFieldChange('name', event.target.value)}
                placeholder="Имя"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <div className="w-full">
                <FixedRatingSlider
                  dense
                  value={barber.rating}
                  onChange={allowRatingEdit ? (event) => handleFieldChange('rating', event.target.value) : undefined}
                  disabled={!allowRatingEdit}
                />
              </div>
              <div className="relative w-full">
                <input
                  name="barberPassword"
                  aria-label="Пароль"
                  type={showPassword ? 'text' : 'password'}
                  value={barber.password || ""}
                  onChange={(event) => handleFieldChange('password', event.target.value)}
                  placeholder="Пароль"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 pr-12 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-md p-0 text-slate-300 leading-none hover:text-white"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleFieldChange('isActive', !(barber.isActive !== false))}
                className={classNames(
                  'flex h-[52px] items-center justify-between rounded-2xl border px-4 text-sm font-semibold transition',
                  barber.isActive !== false
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                    : 'border-slate-700 bg-slate-900/60 text-slate-400'
                )}
              >
                <span>{barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                <span
                  className={classNames(
                    'flex h-5 w-5 items-center justify-center rounded-full border',
                    barber.isActive !== false
                      ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100'
                      : 'border-slate-600 text-slate-500'
                  )}
                >
                  {barber.isActive !== false ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
                </span>
              </button>
              <div className="col-span-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3">
                <p className="text-sm text-slate-300">Должность</p>
                <p className="text-base font-semibold text-white">{normalizeText(barber.position?.name) || 'Не назначена'}</p>
                {typeof barber.position?.commissionRate === 'number'}
              </div>
              <textarea
                value={barber.description || ''}
                onChange={(event) => handleFieldChange('description', event.target.value)}
                placeholder="Описание"
                rows={4}
                className="col-span-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <input
                name="barberPhone"
                aria-label="Телефон"
                type="tel"
                value={formatPhoneDisplay(barber.phone || '')}
                onChange={(event) => handlePhoneChange(event.target.value)}
                placeholder="Телефон"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
              <input
                name="barberTelegram"
                aria-label="Telegram"
                value={barber.telegramId || ''}
                onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                placeholder="Telegram"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span>
                {saveState === 'saving'
                  ? 'Сохраняем изменения...'
                  : saveState === 'error'
                    ? 'Не удалось сохранить изменения'
                    : saveState === 'saved'
                      ? 'Сохранено'
                      : hasChanges
                        ? 'Есть несохраненные изменения'
                        : 'Изменений нет'}
              </span>
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={!hasChanges || saveState === 'saving'}
                className="rounded-lg border border-slate-600 px-4 py-2 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500 hover:border-emerald-400 hover:text-emerald-50"
              >
                {saveState === 'saving' ? 'Сохраняю...' : 'Сохранить'}
              </button>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

