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
  const layoutRectsRef = useRef(new Map());
  const suppressOpenUntilRef = useRef(0);
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
  const buildReorderedIds = useCallback((sourceIds, activeId, clientX, clientY) => {
    const idleIds = sourceIds.filter((id) => id !== activeId);
    let targetIndex = -1;
    let insertAfter = false;
    for (let index = 0; index < idleIds.length; index += 1) {
      const currentId = idleIds[index];
      const element = barberItemRefs.current.get(currentId);
      if (!element) continue;
      const rect = element.getBoundingClientRect();
      const insetX = Math.min(18, rect.width * 0.18);
      const insetY = Math.min(18, rect.height * 0.18);
      const containsPointer =
        clientX >= rect.left + insetX &&
        clientX <= rect.right - insetX &&
        clientY >= rect.top + insetY &&
        clientY <= rect.bottom - insetY;
      if (containsPointer) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const horizontalDominant = Math.abs(clientX - centerX) > Math.abs(clientY - centerY);
        insertAfter = horizontalDominant ? clientX >= centerX : clientY >= centerY;
        targetIndex = index;
        break;
      }
    }
    if (targetIndex === -1) return sourceIds;
    const nextIds = [...idleIds];
    nextIds.splice(targetIndex + (insertAfter ? 1 : 0), 0, activeId);
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
      const nextIds = buildReorderedIds(baseIds, meta.activeId, event.clientX, event.clientY);
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
  useLayoutEffect(() => {
    const nextRects = new Map();
    visibleBarbers.forEach((barber) => {
      const node = barberItemRefs.current.get(barber.id);
      if (!node) return;
      const nextRect = node.getBoundingClientRect();
      nextRects.set(barber.id, nextRect);
      const prevRect = layoutRectsRef.current.get(barber.id);
      if (!prevRect) return;
      const deltaX = prevRect.left - nextRect.left;
      const deltaY = prevRect.top - nextRect.top;
      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;
      node.animate(
        [
          { transform: `translate(${deltaX}px, ${deltaY}px)` },
          { transform: 'translate(0, 0)' },
        ],
        {
          duration: 220,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }
      );
    });
    layoutRectsRef.current = nextRects;
  }, [visibleBarbers]);
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
          barber.isActive !== false ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]' : 'bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]'
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
        hideTitleOnMobile
        actions={
          canManageBarbers ? (
            <button
              onClick={() => openEditor('create')}
              className="crm-action-btn w-full px-4 py-2 text-sm sm:w-auto"
            >
              + Добавить барбера
            </button>
          ) : null
        }
      >
        {sortedBarbers.length === 0 ? (
          <p className="text-[var(--crm-muted)]">Список барберов пока пуст. Добавьте первого сотрудника.</p>
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
                  onClick={() => {
                    if (Date.now() < suppressOpenUntilRef.current) return;
                    openEditor('edit', barber.id);
                  }}
                  onKeyDown={(event) => {
                    if (Date.now() < suppressOpenUntilRef.current) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openEditor('edit', barber.id);
                    }
                  }}
                    className={classNames(
                    'group crm-soft-card crm-reorder-item flex w-full items-center gap-4 p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[color:var(--crm-primary)]',
                    isDragging && 'crm-reorder-dragging bg-[color:var(--crm-surface-4)] shadow-[0_18px_40px_rgba(4,7,21,0.24)]'
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
                        'crm-soft-panel flex h-11 w-11 flex-shrink-0 touch-none items-center justify-center text-[var(--crm-muted)] transition',
                        reorderBusy ? 'cursor-wait opacity-60' : 'cursor-grab hover:bg-[color:var(--crm-surface-4)] hover:text-white active:cursor-grabbing'
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
                      <img
                        src={avatarSrc}
                        alt={barber.name || 'avatar'}
                        className={classNames(
                          'h-16 w-16 rounded-2xl object-cover transition',
                          barber.isActive !== false ? '' : 'grayscale opacity-80'
                        )}
                      />
                    ) : (
                      <DefaultProfileIcon
                        className={classNames(
                          'h-16 w-16 rounded-2xl text-[var(--crm-muted)] transition',
                          barber.isActive !== false ? '' : 'grayscale opacity-80'
                        )}
                        iconClassName="h-8 w-8"
                      />
                    )}
                    <span
                      className={classNames(
                        'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[color:var(--crm-surface)]',
                        barber.isActive !== false ? 'bg-[color:var(--crm-primary)]' : 'bg-[color:var(--crm-muted)]'
                      )}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-7 min-w-[1.9rem] items-center justify-center rounded-full bg-[color:var(--crm-primary-container)] px-2 text-[11px] font-semibold text-[color:var(--crm-primary)]">
                        {index + 1}
                      </span>
                      <p className="text-base font-semibold text-white sm:text-lg">{barber.name || 'Без имени'}</p>
                      {reorderBusy && isDragging ? (
                        <span className="rounded-full bg-[color:var(--crm-highlight-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--crm-highlight-text)]">
                          Сохраняем
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--crm-muted)] sm:text-sm">
                      <span className="px-0 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--crm-primary)]">
                        <IconStar className="mr-1 inline h-3.5 w-3.5 text-[color:var(--crm-highlight)]" /> {ratingLabel}
                      </span>
                      {positionName && (
                        <span className="px-0 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--crm-highlight-text)]">
                          {positionName}
                          {commissionLabel ? ` · ${commissionLabel}` : ''}
                        </span>
                      )}
                      {phoneLabel && <span className="text-slate-300">{phoneLabel}</span>}
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
              <button onClick={handleDelete} className={classNames('crm-danger-btn', SHEET_FOOTER_BUTTON_CLASS)}>
                Удалить
              </button>
            )}
            <button onClick={closeEditor} className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}>
              Отмена
            </button>
            <button
              onClick={handleSave}
              disabled={!canSubmit || savingBarber}
              className={classNames(
                SHEET_FOOTER_BUTTON_CLASS,
                canSubmit && !savingBarber ? 'crm-action-btn' : 'crm-ghost-btn opacity-60'
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
            <div className="crm-soft-card space-y-5 p-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="barberName"
                  aria-label="Имя"
                  value={workingBarber.name || ''}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Имя"
                  className="w-full px-4 py-3 text-white placeholder:text-slate-500"
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
                    className="w-full px-4 py-3 pr-12 text-white placeholder:text-slate-500"
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
                    'crm-inline-panel flex h-[52px] items-center justify-between px-4 text-sm font-semibold transition',
                    workingBarber.isActive !== false
                      ? 'text-[color:var(--crm-primary)]'
                      : 'text-[var(--crm-muted)]'
                  )}
                >
                  <span>{workingBarber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                  <span
                    className={classNames(
                      'flex h-5 w-5 items-center justify-center rounded-full',
                      workingBarber.isActive !== false
                        ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]'
                        : 'bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]'
                    )}
                  >
                    {workingBarber.isActive !== false ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Права доступа</label>
                    <CustomSelect
                      value={normalizeRoleValue(workingBarber.role)}
                      onChange={(nextValue) => handleFieldChange('role', normalizeRoleValue(nextValue))}
                      options={ROLE_OPTIONS}
                      buttonClassName="h-12 px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Должность</label>
                    <CustomSelect
                      value={workingBarber.positionId || ''}
                      onChange={(nextValue) => handleFieldChange('positionId', nextValue || null)}
                      options={[
                        { value: '', label: 'Без должности' },
                        ...sortedPositions.map((position) => ({
                          value: position.id,
                          label: `${position.name}${typeof position.commissionRate === 'number' ? ` · ${formatPercent(position.commissionRate)}` : ''}`,
                        })),
                      ]}
                      buttonClassName="h-12 px-4"
                    />
                  </div>
                </div>
                <input
                  name="barberPhone"
                  aria-label="Телефон"
                  type="tel"
                  value={formatPhoneDisplay(workingBarber.phone || '')}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  placeholder="Телефон"
                  className="w-full px-4 py-3 text-white placeholder:text-slate-500"
                />
                <input
                  name="barberTelegram"
                  aria-label="Telegram ID"
                  value={workingBarber.telegramId || ''}
                  onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                  placeholder="Telegram ID"
                  className="w-full px-4 py-3 text-white placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-[var(--crm-text)]">Выберите барбера, чтобы отредактировать данные.</p>
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
      <SectionCard title="Профиль сотрудника" hideTitleOnMobile>
        <p className="text-sm text-[var(--crm-muted)]">Данные профиля недоступны. Обратитесь к администратору.</p>
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
      <SectionCard title="Мой профиль" hideTitleOnMobile>
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
          <div className="crm-soft-card space-y-5 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="barberName"
                aria-label="Имя"
                value={barber.name || ''}
                onChange={(event) => handleFieldChange('name', event.target.value)}
                placeholder="Имя"
                className="w-full px-4 py-3 text-white placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 pr-12 text-white placeholder:text-slate-500"
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
                  'crm-inline-panel flex h-[52px] items-center justify-between px-4 text-sm font-semibold transition',
                  barber.isActive !== false
                    ? 'text-[color:var(--crm-primary)]'
                    : 'text-[var(--crm-muted)]'
                )}
              >
                <span>{barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL}</span>
                <span
                  className={classNames(
                    'flex h-5 w-5 items-center justify-center rounded-full',
                    barber.isActive !== false
                      ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]'
                      : 'bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]'
                  )}
                >
                  {barber.isActive !== false ? <IconCheck className="h-3.5 w-3.5" /> : <IconX className="h-3.5 w-3.5" />}
                </span>
              </button>
              <div className="crm-inline-panel col-span-2 px-4 py-3">
                <p className="text-sm text-[var(--crm-muted)]">Должность</p>
                <p className="text-base font-semibold text-white">{normalizeText(barber.position?.name) || 'Не назначена'}</p>
                {typeof barber.position?.commissionRate === 'number'}
              </div>
              <textarea
                value={barber.description || ''}
                onChange={(event) => handleFieldChange('description', event.target.value)}
                placeholder="Описание"
                rows={4}
                className="col-span-2 w-full px-4 py-3 text-white placeholder:text-slate-500"
              />
              <input
                name="barberPhone"
                aria-label="Телефон"
                type="tel"
                value={formatPhoneDisplay(barber.phone || '')}
                onChange={(event) => handlePhoneChange(event.target.value)}
                placeholder="Телефон"
                className="w-full px-4 py-3 text-white placeholder:text-slate-500"
              />
              <input
                name="barberTelegram"
                aria-label="Telegram"
                value={barber.telegramId || ''}
                onChange={(event) => handleFieldChange('telegramId', event.target.value)}
                placeholder="Telegram"
                className="w-full px-4 py-3 text-white placeholder:text-slate-500"
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
                className="crm-action-btn px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
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

