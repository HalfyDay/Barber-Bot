
const { useState, useEffect, useMemo, useCallback, useRef } = React;

const BOT_BUTTON_TYPES = [
  { id: "screen", label: "Переход на экран", emoji: "🧭" },
  { id: "book", label: "Записаться", emoji: "🗓️" },
  { id: "description", label: "Описание", emoji: "📝" },
  { id: "profile", label: "Профиль", emoji: "👤" },
  { id: "userAppointments", label: "Мои записи", emoji: "📔" },
  { id: "custom", label: "Своя кнопка", emoji: "✨" },
];
const BOT_BUTTON_TYPE_SET = new Set(BOT_BUTTON_TYPES.map((item) => item.id));

const createDragPreview = (node, startEvent) => {
  if (!node) return null;
  const rect = startEvent?.currentTarget?.getBoundingClientRect?.();
  const clone = node.cloneNode(true);
  const width = rect?.width || node.getBoundingClientRect?.()?.width || node.offsetWidth;
  const height = rect?.height || node.getBoundingClientRect?.()?.height || node.offsetHeight;
  if (width) clone.style.width = `${width}px`;
  if (height) clone.style.height = `${height}px`;
  clone.style.position = "fixed";
  clone.style.top = "0";
  clone.style.left = "0";
  clone.style.transform = "translate(-9999px,-9999px) scale(1)";
  clone.style.pointerEvents = "none";
  clone.style.transition = "none";
  clone.style.willChange = "transform";
  clone.style.boxShadow = "0 18px 45px rgba(99, 102, 241, 0.35)";
  clone.style.zIndex = "9999";
  clone.style.opacity = "0.95";
  clone.classList?.add("drag-shadow");
  document.body.appendChild(clone);
  const offsetX = rect ? startEvent.clientX - rect.left : clone.offsetWidth / 2;
  const offsetY = rect ? startEvent.clientY - rect.top : clone.offsetHeight / 2;
  return {
    clone,
    offsetX,
    offsetY,
    update: (x, y) => {
      clone.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
      clone.style.visibility = "visible";
    },
    cleanup: () => {
      if (clone.parentNode) clone.parentNode.removeChild(clone);
    },
  };
};

const destroyDragPreview = (clone) => {
  if (!clone) return;
  clone.cleanup?.();
  const node = clone.clone || clone;
  if (node?.parentNode) node.parentNode.removeChild(node);
};

const sanitizeId = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/(^-|-$)/g, "")
    || "item";

const sortButtons = (buttons = []) =>
  [...buttons].sort((a, b) => (a.row ?? 0) - (b.row ?? 0) || (a.order ?? 0) - (b.order ?? 0));

const normalizeButtonOrder = (buttons = []) => {
  const sorted = sortButtons([...buttons]);
  let currentRow = null;
  let normalizedRow = -1;
  let order = 0;
  return sorted.map((btn) => {
    if (currentRow === null || btn.row !== currentRow) {
      currentRow = btn.row;
      normalizedRow += 1;
      order = 0;
    }
    const next = { ...btn, row: normalizedRow, order };
    order += 1;
    return next;
  });
};


const insertButtonAtPosition = (buttons = [], button, targetRow = 0, targetOrder = 0, options = {}) => {
  if (!button) return buttons;
  const { createNewRow = false } = options;
  const filtered = buttons.filter((btn) => btn.id !== button.id);
  const rowsMap = new Map();
  sortButtons(filtered).forEach((btn) => {
    const rowId = Number.isFinite(btn.row) ? Number(btn.row) : 0;
    if (!rowsMap.has(rowId)) rowsMap.set(rowId, []);
    rowsMap.get(rowId).push(btn);
  });

  let rowEntries = Array.from(rowsMap.entries()).sort((a, b) => a[0] - b[0]);
  if (createNewRow) {
    rowEntries = rowEntries
      .map(([rowId, list]) => [rowId >= targetRow ? rowId + 1 : rowId, list])
      .sort((a, b) => a[0] - b[0]);
  }

  const rows = new Map(rowEntries);
  const rowList = rows.get(targetRow) ? [...rows.get(targetRow)] : [];
  const insertIndex = Math.min(Math.max(targetOrder, 0), rowList.length);
  rowList.splice(insertIndex, 0, { ...button, row: targetRow, order: insertIndex });
  rows.set(targetRow, rowList);

  const rebuilt = [];
  Array.from(rows.entries())
    .sort((a, b) => a[0] - b[0])
    .forEach(([rowId, list]) => {
      sortButtons(list).forEach((btn, idx) => {
        rebuilt.push({ ...btn, row: rowId, order: idx });
      });
    });
  return normalizeButtonOrder(rebuilt);
};

const normalizeButton = (btn, idx = 0, screenId = "screen") => {
  const id = sanitizeId(btn?.id || `btn-${screenId}-${idx + 1}`);
  const label = (btn?.label || btn?.text || `Кнопка ${idx + 1}`).toString();
  const type = BOT_BUTTON_TYPE_SET.has(btn?.type)
    ? btn.type
    : ["staff", "service", "date", "time"].includes(btn?.type)
      ? "book"
      : "screen";
  const targetScreenId = btn?.targetScreenId || btn?.target || null;
  const payload = btn?.payload ?? "";
  const row = Number.isFinite(btn?.row) ? Number(btn.row) : Math.floor(idx / 2);
  const order = Number.isFinite(btn?.order) ? Number(btn.order) : idx;
  return { id, label, type, targetScreenId, payload, row, order };
};

const normalizeScreen = (screen, idx = 0) => {
  const id = sanitizeId(screen?.id || `screen-${idx + 1}`);
  const title = (screen?.title || screen?.name || `Экран ${idx + 1}`).toString();
  const message = screen?.message ?? screen?.text ?? "";
  const imageUrl = screen?.imageUrl || screen?.image || "";
  const buttons = Array.isArray(screen?.buttons)
    ? normalizeButtonOrder(screen.buttons.map((btn, i) => normalizeButton(btn, i, id)))
    : [];
  return { id, title, message, imageUrl, buttons };
};

const normalizeMenuDraft = (menu) => {
  const screens = Array.isArray(menu?.screens) && menu.screens.length
    ? menu.screens.map((scr, idx) => normalizeScreen(scr, idx))
    : [normalizeScreen({ id: "main", title: "Главное меню", message: "Добро пожаловать!", buttons: [] }, 0)];
  const buttonTypes = Array.isArray(menu?.buttonTypes) && menu.buttonTypes.length ? menu.buttonTypes : BOT_BUTTON_TYPES;
  const version = Number(menu?.version) || 1;
  const updatedAt = menu?.updatedAt || new Date().toISOString();
  return { version, updatedAt, screens, buttonTypes };
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result || "");
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

const ButtonTypeBadge = ({ type }) => {
  const item = BOT_BUTTON_TYPES.find((entry) => entry.id === type);
  if (!item) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/10">
      <span>{item.emoji || "⚡"}</span>
      <span className="text-[10px]">{item.label}</span>
    </span>
  );
};

const ButtonEditPanel = ({
  button,
  screens,
  onChange,
  onRemove,
  onDropSelect,
  isEditing,
  isDropTargetActive,
  isDragging,
  panelRef = null,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const dragActiveRef = useRef(false);
  const dropHandlers = {
    onDragOver: (e) => {
      e.preventDefault();
      if (!dragActiveRef.current) {
        dragActiveRef.current = true;
        setIsDragActive(true);
      }
    },
    onDrop: (e) => {
      onDropSelect?.(e);
      if (dragActiveRef.current) {
        dragActiveRef.current = false;
        setIsDragActive(false);
      }
    },
    onDragLeave: () => {
      if (dragActiveRef.current) {
        dragActiveRef.current = false;
        setIsDragActive(false);
      }
    },
  };

  if (!button) {
    return (
      <div
        {...dropHandlers}
        className={`rounded-3xl border border-dashed border-indigo-500/40 bg-slate-900/70 p-3 text-slate-300 shadow-inner transition-all duration-300 ${
          isDragActive ? "scale-[1.01] ring-2 ring-indigo-400/60 shadow-[0_15px_40px_rgba(99,102,241,0.25)]" : ""
        }`}
      >
        <p className="text-sm font-medium text-white/80">Перетащите кнопку сюда, чтобы открыть её настройки</p>
        <p className="text-xs text-slate-400">Секция подсветится и притянет элемент.</p>
      </div>
    );
  }

  return (
    <div
      {...dropHandlers}
      ref={panelRef}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-900/70 p-2.5 shadow-2xl ring-1 ring-indigo-800/50 transition-all duration-300 sm:p-3 ${
        isDragActive ? "scale-[1.01] ring-2 ring-indigo-400/70 shadow-[0_20px_70px_rgba(99,102,241,0.35)]" : ""
      } ${
        isDragging
          ? "ring-2 ring-indigo-400/70 scale-[1.01] animate-[magnetPull_0.9s_ease-in-out_infinite]"
          : ""
      } ${isDropTargetActive ? "ring-2 ring-emerald-400/70 scale-[1.01]" : ""}`}
    >
      {isDragging && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 shadow-lg">
            <span className="text-lg">✏️</span>
            <span className="text-lg">🗑️</span>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_30%)]" />
      <div className="relative space-y-2.5 sm:space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">Настройки кнопки</p>
            <p className="text-base font-semibold text-white">{button.label}</p>
          </div>
          <ButtonTypeBadge type={button.type} />
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          <div>
            <label className="text-xs text-slate-400">Текст</label>
            <input
              value={button.label}
              onChange={(e) => onChange({ ...button, label: e.target.value })}
              disabled={!isEditing}
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400">Тип</label>
            <select
              value={button.type}
              onChange={(e) => onChange({ ...button, type: e.target.value })}
              disabled={!isEditing}
              className="mt-1 w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
            >
              {BOT_BUTTON_TYPES.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="text-xs text-slate-400">Переход на экран</label>
            <select
              value={button.targetScreenId || ""}
              onChange={(e) => onChange({ ...button, targetScreenId: e.target.value || null })}
              disabled={!isEditing}
              className="mt-1 w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
            >
              <option value="">—</option>
              {screens.map((screen) => (
                <option key={screen.id} value={screen.id}>
                  {screen.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatPreview = ({
  screen,
  screens,
  onSelectButton,
  onNavigate,
  onMoveButton,
  onAddFromPalette,
  onRemoveButton,
  onImageChange,
  onMessageChange,
  onTitleChange,
  dropZones,
  isEditing,
  onDropZoneHoverChange,
  onDragStateChange,
  galleryImages,
  onSelectGalleryImage,
  onUploadImage,
  isGalleryLoading = false,
  onToggleEditing,
  onSave,
  isSaving = false,
  isLoading = false,
}) => {
  const fileInputRef = useRef(null);
  const [draggingId, setDraggingId] = useState(null);
  const dragPreviewRef = useRef(null);
  const dragPayloadRef = useRef(null);
  const dragMoveFrameRef = useRef(null);
  const dragMoveCoordsRef = useRef(null);
  const [dropRowHighlight, setDropRowHighlight] = useState(null);
  const [dropOrderHighlight, setDropOrderHighlight] = useState(null);
  const [dragState, setDragState] = useState(null);
  const rowsContainerRef = useRef(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageError, setImageError] = useState("");
  const messageRef = useRef(null);
  const rows = useMemo(() => {
    const rowsMap = new Map();
    (screen?.buttons || []).forEach((btn) => {
      const rowIndex = Number(btn.row || 0);
      if (!rowsMap.has(rowIndex)) rowsMap.set(rowIndex, []);
      rowsMap.get(rowIndex).push(btn);
    });
    return Array.from(rowsMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([rowId, btns]) => ({
        rowId,
        buttons: btns.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
      }));
  }, [screen]);

  const galleryList = useMemo(() => (Array.isArray(galleryImages) ? galleryImages : []), [galleryImages]);
  const topRowValue = useMemo(() => (rows[0]?.rowId ?? 0) - 0.5, [rows]);
  const bottomRowValue = useMemo(() => (rows[rows.length - 1]?.rowId ?? 0) + 0.5, [rows]);
  const autosizeTextarea = useCallback((node) => {
    if (!node) return;
    node.style.height = "auto";
    node.style.height = `${node.scrollHeight}px`;
  }, []);

  const isInsideDropZone = useCallback((event, ref) => {
    if (!event || !ref?.current) return false;
    const rect = ref.current.getBoundingClientRect();
    const { clientX, clientY } = event;
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  }, []);

  useEffect(() => () => destroyDragPreview(dragPreviewRef.current), []);

  useEffect(() => {
    window.__botMenuBeginDrag = beginDrag;
    return () => {
      if (window.__botMenuBeginDrag === beginDrag) {
        delete window.__botMenuBeginDrag;
      }
    };
  }, [beginDrag]);

  const clearPreview = () => {
    destroyDragPreview(dragPreviewRef.current);
    dragPreviewRef.current = null;
  };

  const placePayload = (payload, rowIndex, orderIndex = 0, createNewRow = false) => {
    if (!payload) return;
    if (payload.source === "palette" && payload.type) {
      onAddFromPalette?.(payload.type, rowIndex, orderIndex, createNewRow);
      return;
    }
    if (payload.id) {
      onMoveButton?.(payload.id, rowIndex, orderIndex, createNewRow);
    }
  };

  const handleImageFile = useCallback(
    async (file) => {
      if (!file || !isEditing) return;
      if (!file.type?.startsWith?.("image/")) {
        setImageError("Загрузите файл изображения.");
        return;
      }
      setImageError("");
      if (typeof onUploadImage === "function") {
        setUploadingImage(true);
        try {
          await onUploadImage(file);
        } catch (error) {
          console.error("Menu image upload error", error);
          setImageError(error?.message || "Не удалось загрузить изображение");
        } finally {
          setUploadingImage(false);
        }
        return;
      }
      if (typeof onImageChange === "function") {
        onImageChange(file);
      }
    },
    [isEditing, onImageChange, onUploadImage],
  );

  const handleGalleryPick = useCallback(
    (src) => {
      if (!isEditing || !src) return;
      onSelectGalleryImage?.(src);
    },
    [isEditing, onSelectGalleryImage],
  );

  const handleMessageInput = useCallback(
    (event) => {
      autosizeTextarea(event?.target);
      onMessageChange?.(event?.target?.value || "");
    },
    [autosizeTextarea, onMessageChange],
  );

  useEffect(() => {
    if (!dragState) return;
    const bodyStyle = typeof document !== "undefined" ? document.body?.style : null;
    const previousBodyStyles = bodyStyle
      ? {
          overflow: bodyStyle.overflow,
          touchAction: bodyStyle.touchAction,
          overscrollBehavior: bodyStyle.overscrollBehavior,
        }
      : null;

    if (bodyStyle) {
      bodyStyle.overflow = "hidden";
      bodyStyle.touchAction = "none";
      bodyStyle.overscrollBehavior = "none";
    }

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const handleMove = (event) => {
      event.preventDefault();
      dragMoveCoordsRef.current = { x: event.clientX, y: event.clientY };
      if (!dragMoveFrameRef.current) {
        dragMoveFrameRef.current = requestAnimationFrame(() => {
          dragMoveFrameRef.current = null;
          const coords = dragMoveCoordsRef.current;
          if (coords) {
            dragPreviewRef.current?.update?.(coords.x, coords.y);
          }
        });
      }
      const nextZone = isInsideDropZone(event, dropZones?.settingsRef)
        ? "settings"
        : isInsideDropZone(event, dropZones?.paletteRef)
          ? "palette"
          : null;
      onDropZoneHoverChange?.(nextZone);
      const containerRect = rowsContainerRef.current?.getBoundingClientRect?.();
      if (containerRect) {
        if (event.clientY < containerRect.top - 12) {
          setDropRowHighlight(topRowValue);
          setDropOrderHighlight(0);
          return;
        }
        if (event.clientY > containerRect.bottom + 12) {
          setDropRowHighlight(bottomRowValue);
          setDropOrderHighlight(0);
          return;
        }
      }
      const newRowTarget = event.target?.closest?.("[data-new-row-target]");
      const rowNode = event.target?.closest?.("[data-row-id]");
      if (!rowNode && !newRowTarget) {
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
      }
    };
    const handleUp = (event) => {
      event.preventDefault();
      commitDrop(event);
    };
    const handleCancel = (event) => {
      event?.preventDefault?.();
      clearPreview();
      setDraggingId(null);
      dragPayloadRef.current = null;
      setDragState(null);
      setDropRowHighlight(null);
      setDropOrderHighlight(null);
      onDropZoneHoverChange?.(null);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
      }
    };
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("pointermove", handleMove, { passive: false });
    document.addEventListener("pointerup", handleUp, { passive: false });
    document.addEventListener("pointercancel", handleCancel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      if (dragMoveFrameRef.current) {
        cancelAnimationFrame(dragMoveFrameRef.current);
        dragMoveFrameRef.current = null;
      }
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
      document.removeEventListener("pointercancel", handleCancel);
      document.removeEventListener("keydown", handleKeyDown);
      onDropZoneHoverChange?.(null);

      if (bodyStyle && previousBodyStyles) {
        bodyStyle.overflow = previousBodyStyles.overflow;
        bodyStyle.touchAction = previousBodyStyles.touchAction;
        bodyStyle.overscrollBehavior = previousBodyStyles.overscrollBehavior;
      }
    };
  }, [bottomRowValue, dragState, dropZones, isInsideDropZone, onDropZoneHoverChange, topRowValue]);

  useEffect(() => {
    autosizeTextarea(messageRef.current);
  }, [autosizeTextarea, screen?.message]);

  useEffect(() => {
    onDragStateChange?.(!!dragState);
  }, [dragState, onDragStateChange]);

  const beginDrag = useCallback(
    (payload, originNode, event) => {
      if (!event || !isEditing) return;
      event.preventDefault();
      event.stopPropagation();
      try {
        if (typeof event.pointerId === "number") {
          originNode?.setPointerCapture?.(event.pointerId);
        }
      } catch {
        // ignore pointer capture failures
      }
      dragPayloadRef.current = payload;
      setDropRowHighlight(payload.fromRow ?? null);
      setDropOrderHighlight(payload.fromOrder ?? null);
      setDragState(payload);
      setDraggingId(payload.id || null);
      const preview = createDragPreview(originNode, event);
      dragPreviewRef.current = preview;
      preview?.update?.(event.clientX, event.clientY);
    },
    [isEditing],
  );

  const commitDrop = (event) => {
    if (!dragState) return;
    if (event) {
      if (isInsideDropZone(event, dropZones?.settingsRef) && dragState.id) {
        onSelectButton?.(dragState.id);
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
        onDropZoneHoverChange?.(null);
        return;
      }
      if (isInsideDropZone(event, dropZones?.paletteRef) && dragState.id) {
        onRemoveButton?.(dragState.id);
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
        onDropZoneHoverChange?.(null);
        return;
      }
    }
    const rawRow = dropRowHighlight ?? dragState.fromRow ?? 0;
    const isBetweenRows = Number.isFinite(rawRow) && Math.abs(rawRow % 1) === 0.5;
    const targetRow = Number.isFinite(rawRow) ? (isBetweenRows ? Math.ceil(rawRow) : Math.round(rawRow)) : 0;
    const targetOrder = dropOrderHighlight ?? dragState.fromOrder ?? 0;
    placePayload(dragState, targetRow, targetOrder, isBetweenRows);
    clearPreview();
    setDraggingId(null);
    dragPayloadRef.current = null;
    setDragState(null);
    setDropRowHighlight(null);
    setDropOrderHighlight(null);
    onDropZoneHoverChange?.(null);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-950/70 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.45)] ring-1 ring-indigo-900/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_35%)]" />
      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
          <div className="min-w-0 flex-1">
            <input
              value={screen?.title || ""}
              onChange={(e) => onTitleChange?.(e.target.value)}
              disabled={!isEditing}
              placeholder="Введите заголовок экрана"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
            />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleEditing?.()}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold shadow-sm transition ${
                isEditing
                  ? "border-emerald-400/70 bg-emerald-500/20 text-emerald-100"
                  : "border-white/15 bg-white/5 text-slate-100 hover:border-indigo-400 hover:text-white"
              }`}
            >
              <span aria-hidden="true">✏️</span>
              <span className="hidden sm:inline">{isEditing ? "Покинуть редактирование" : "Редактор"}</span>
            </button>
            <button
              type="button"
              onClick={() => onSave?.()}
              className="rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:brightness-110 disabled:opacity-50"
              disabled={isLoading || isSaving}
            >
              {isLoading || isSaving ? "Сохраняем..." : "Сохранить"}
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-inner">
          <label
            className={`group relative block overflow-hidden ${isEditing ? "cursor-pointer" : "cursor-default"}`}
            onClick={(e) => {
              if (!isEditing) return;
              if (e.target?.closest?.("[data-gallery-zone]")) return;
              fileInputRef.current?.click();
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (!isEditing) return;
              const file = e.dataTransfer.files?.[0];
              if (file) handleImageFile(file);
            }}
          >
            {screen?.imageUrl ? (
              <img
                src={screen.imageUrl}
                alt=""
                className="h-64 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-slate-800/70 via-indigo-900/60 to-slate-950 text-center text-base font-semibold text-indigo-100 ring-1 ring-indigo-500/30">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">🖼️</span>
                  <span>Загрузить изображение</span>
                  <span className="text-xs font-normal text-slate-300">Кликните или перетащите файл</span>
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (file) handleImageFile(file);
              }}
            />
            {uploadingImage && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/70 text-sm font-semibold text-white backdrop-blur-sm">
                Загружаем...
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div
              className={`absolute inset-x-0 bottom-0 space-y-2 bg-slate-950/80 p-3 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.35)] ring-1 ring-indigo-500/30 backdrop-blur-sm ${
                isEditing ? "pointer-events-auto" : "pointer-events-none opacity-60"
              }`}
              data-gallery-zone="true"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-indigo-100">
                  <span className="text-lg">🖼️</span>
                  <span>Галерея изображений</span>
                </div>
                <button
                  type="button"
                  onClick={() => isEditing && fileInputRef.current?.click()}
                  className="rounded-lg border border-indigo-400/60 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-100 transition hover:border-indigo-300 hover:text-white disabled:opacity-50"
                  disabled={!isEditing}
                >
                  Загрузить
                </button>
              </div>
              {imageError && <p className="text-xs text-rose-300">{imageError}</p>}
              {isGalleryLoading ? (
                <p className="text-xs text-slate-300">Загружаем изображения...</p>
              ) : galleryList.length ? (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {galleryList.map((src) => {
                    const isActive = (screen?.imageUrl || "") === src;
                    return (
                      <button
                        type="button"
                        key={src}
                        onClick={() => handleGalleryPick(src)}
                        disabled={!isEditing}
                        className={`group relative overflow-hidden rounded-xl border text-left transition ${
                          isActive
                            ? "border-emerald-400/80 bg-emerald-500/10"
                            : "border-white/10 bg-slate-900/70 hover:border-indigo-300 hover:bg-slate-800"
                        } ${!isEditing ? "opacity-60" : ""}`}
                      >
                        <img src={src} alt="" className="h-16 w-full object-cover" />
                        {isActive && (
                          <span className="pointer-events-none absolute right-1 top-1 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                            Выбрано
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  Пока нет загруженных изображений. Добавьте файл, чтобы он появился в галерее.
                </p>
              )}
            </div>
          </label>
          <div className="space-y-3 bg-slate-900/80 px-4 py-4 text-white">
            <textarea
              ref={messageRef}
              value={screen?.message || ""}
              onChange={handleMessageInput}
              onInput={handleMessageInput}
              disabled={!isEditing}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
              placeholder="Сообщение для клиента, описание экрана"
              rows={2}
            />
          </div>
          <div className="relative space-y-3 bg-slate-900/70 px-4 pb-5 pt-3" ref={rowsContainerRef}>
            {rows.length ? (
              <>
                <div
                  className={`absolute left-0 right-0 ${dragState ? "z-10" : "pointer-events-none"} flex items-center justify-center transition-all duration-150`}
                  style={{
                    top: dragState ? "-10px" : "-6px",
                    height: dragState ? 32 : 0,
                    opacity: dragState ? 1 : 0,
                    pointerEvents: dragState ? "auto" : "none",
                  }}
                  data-new-row-target="top"
                  onPointerEnter={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(topRowValue);
                    setDropOrderHighlight(0);
                  }}
                  onPointerMove={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(topRowValue);
                    setDropOrderHighlight(0);
                  }}
                  onPointerUp={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(topRowValue);
                    setDropOrderHighlight(0);
                    commitDrop(e);
                  }}
                >
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] transition ${
                      dropRowHighlight === topRowValue && dragState
                        ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60"
                        : "border-white/20 bg-slate-800/70 text-slate-200"
                    }`}
                  >
                    Новая строка сверху
                  </span>
                </div>
                {rows.map((row, index) => {
                  const rowId = Number(row.rowId ?? 0);
                  const beforeRow = rowId - 0.5;
                  const showBefore = index !== 0 && !!dragState;
                  return (
                    <div key={rowId} className="relative space-y-2">
                      {showBefore && (
                        <div
                          className={`absolute left-0 right-0 -top-3 flex items-center justify-center transition-all duration-150 ${
                            dropRowHighlight === beforeRow ? "opacity-100" : "opacity-60"
                          }`}
                          style={{
                            height: 24,
                            pointerEvents: dragState ? "auto" : "none",
                          }}
                          data-new-row-target={`before-${rowId}`}
                          onPointerEnter={(e) => {
                            if (!dragState) return;
                            e.preventDefault();
                            setDropRowHighlight(beforeRow);
                            setDropOrderHighlight(0);
                          }}
                          onPointerMove={(e) => {
                            if (!dragState) return;
                            e.preventDefault();
                            setDropRowHighlight(beforeRow);
                            setDropOrderHighlight(0);
                          }}
                          onPointerUp={(e) => {
                            if (!dragState) return;
                            e.preventDefault();
                            setDropRowHighlight(beforeRow);
                            setDropOrderHighlight(0);
                            commitDrop(e);
                          }}
                        >
                          <span
                            className={`pointer-events-auto rounded-full border px-2 py-1 text-[10px] transition ${
                              dropRowHighlight === beforeRow
                                ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60"
                                : "border-white/15 bg-slate-900/70 text-slate-200"
                            }`}
                          >
                            Новая строка
                          </span>
                        </div>
                      )}
                      <div
                        className={`relative grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition-all duration-200 lg:flex lg:flex-wrap ${
                          dropRowHighlight === rowId ? "ring-2 ring-emerald-400/70 bg-emerald-500/10 scale-[1.01]" : ""
                        }`}
                        data-row-id={rowId}
                        onPointerMove={(e) => {
                          if (!dragState) return;
                          e.preventDefault();
                          const target = e.currentTarget;
                          setDropRowHighlight(rowId);
                          const btnNodes = Array.from(target.querySelectorAll("button[data-drag-id]")).filter(
                            (node) => node.dataset.dragId !== draggingId,
                          );
                          let order = btnNodes.length;
                          for (let i = 0; i < btnNodes.length; i += 1) {
                            const rect = btnNodes[i].getBoundingClientRect();
                            const midpoint = rect.left + rect.width / 2;
                            if (e.clientX < midpoint) {
                              order = i;
                              break;
                            }
                            if (i === btnNodes.length - 1) {
                              order = i + 1;
                            }
                          }
                          setDropOrderHighlight(order);
                        }}
                        onPointerLeave={() => {
                          setDropRowHighlight(null);
                          setDropOrderHighlight(null);
                        }}
                        onPointerUp={(e) => {
                          if (!dragState) return;
                          e.preventDefault();
                          commitDrop(e);
                        }}
                      >
                        {(() => {
                          const insertionIndex =
                            dragState &&
                            dropRowHighlight === rowId &&
                            dropOrderHighlight !== null
                              ? Math.min(Math.max(dropOrderHighlight, 0), row.buttons.length)
                              : null;
                          const renderPlaceholder = (key) => (
                            <div
                              key={key}
                              className="pointer-events-none h-[44px] w-full min-w-0 rounded-xl border border-dashed border-emerald-300/70 bg-emerald-200/10 lg:min-w-[140px] lg:flex-1"
                            />
                          );
                          const visibleButtons = row.buttons.filter((btn) => btn.id !== draggingId);
                          const items = [...visibleButtons];
                          if (insertionIndex !== null) {
                            items.splice(
                              Math.min(Math.max(insertionIndex, 0), items.length),
                              0,
                              renderPlaceholder(`placeholder-${rowId}-${insertionIndex}`),
                            );
                          }
                          return items.map((btnOrPlaceholder, index) => {
                            if (!btnOrPlaceholder) return null;
                            if (React.isValidElement(btnOrPlaceholder)) return btnOrPlaceholder;
                            const btn = btnOrPlaceholder;
                            return (
                              <button
                                key={btn.id}
                                type="button"
                                data-drag-id={btn.id}
                                data-order={btn.order ?? index}
                                draggable={false}
                                style={isEditing ? { touchAction: "none" } : undefined}
                                onPointerDown={(e) => {
                                  if (!isEditing) return;
                                  beginDrag(
                                    {
                                      id: btn.id,
                                      fromRow: Number(btn.row || 0),
                                      fromOrder: Number(btn.order ?? index),
                                      source: "menu",
                                      type: btn.type,
                                    },
                                    e.currentTarget,
                                    e,
                                  );
                                }}
                                className={`group relative flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.35)] lg:min-w-[140px] lg:flex-1 ${
                                  isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                                } ${
                                  draggingId === btn.id ? "opacity-40 border-white/20 bg-white/10" : "border-white/10 bg-white/5"
                                }`}
                                onClick={() =>
                                  btn.targetScreenId ? onNavigate?.(btn.targetScreenId) : onSelectButton?.(btn.id)
                                }
                              >
                                <div className="flex items-center gap-2">
                                  <span className="truncate">{btn.label}</span>
                                </div>
                              </button>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  );
                })}
                <div
                  className={`absolute left-0 right-0 ${dragState ? "z-10" : "pointer-events-none"} flex items-center justify-center transition-all duration-150`}
                  style={{
                    bottom: dragState ? "-10px" : "-6px",
                    height: dragState ? 32 : 0,
                    opacity: dragState ? 1 : 0,
                    pointerEvents: dragState ? "auto" : "none",
                  }}
                  data-new-row-target="bottom"
                  onPointerEnter={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(bottomRowValue);
                    setDropOrderHighlight(0);
                  }}
                  onPointerMove={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(bottomRowValue);
                    setDropOrderHighlight(0);
                  }}
                  onPointerUp={(e) => {
                    if (!dragState) return;
                    e.preventDefault();
                    setDropRowHighlight(bottomRowValue);
                    setDropOrderHighlight(0);
                    commitDrop(e);
                  }}
                >
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] transition ${
                      dropRowHighlight === bottomRowValue && dragState
                        ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60"
                        : "border-white/20 bg-slate-800/70 text-slate-200"
                    }`}
                  >
                    Новая строка снизу
                  </span>
                </div>
              </>
            ) : (
              <div
                className="flex h-24 w-full items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/5 text-sm text-slate-300"
                onPointerMove={(e) => {
                  if (!dragState) return;
                  e.preventDefault();
                  setDropRowHighlight(0);
                  setDropOrderHighlight(0);
                }}
                onPointerUp={(e) => {
                  if (!dragState) return;
                  e.preventDefault();
                  setDropRowHighlight(0);
                  setDropOrderHighlight(0);
                  commitDrop(e);
                }}
                onPointerLeave={() => {
                  setDropRowHighlight(null);
                  setDropOrderHighlight(null);
                }}
              >
                Drop a button here to place the very first row
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const BotMenuBuilder = ({ menu, onSave, onReload, isSaving, loadMenuImages, onUploadMenuImage }) => {
  const [draft, setDraft] = useState(() => normalizeMenuDraft(menu));
  const [activeScreenId, setActiveScreenId] = useState(() =>
    normalizeMenuDraft(menu).screens[0]?.id || "main",
  );
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(true);
  const [paletteHover, setPaletteHover] = useState(false);
  const [dropZoneHover, setDropZoneHover] = useState(null);
  const [menuImages, setMenuImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const buttonSettingsRef = useRef(null);
  const paletteRef = useRef(null);

  useEffect(() => {
    const styleId = "bot-constructor-animations";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0px); } }
      @keyframes glowPulse { 0% { box-shadow: 0 10px 30px rgba(99,102,241,0.25); } 50% { box-shadow: 0 20px 50px rgba(99,102,241,0.35); } 100% { box-shadow: 0 10px 30px rgba(99,102,241,0.25); } }
      @keyframes magnetPull { 0% { transform: scale(1); } 50% { transform: scale(1.02) translateY(-2px); } 100% { transform: scale(1); } }
      @keyframes shimmerSlide { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      .drag-shadow { filter: drop-shadow(0 18px 45px rgba(99, 102, 241, 0.35)); }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (!isEditing) {
      setDropZoneHover(null);
    }
  }, [isEditing]);

  useEffect(() => () => {
    isMountedRef.current = false;
  }, []);

  useEffect(() => {
    const normalized = normalizeMenuDraft(menu);
    setDraft(normalized);
    if (!normalized.screens.find((s) => s.id === activeScreenId)) {
      setActiveScreenId(normalized.screens[0]?.id || "main");
    }
    setSelectedButtonId(null);
    setDirty(false);
  }, [menu]);

  const refreshGallery = useCallback(async () => {
    if (!loadMenuImages && typeof fetch !== "function") return [];
    setGalleryLoading(true);
    try {
      const payload = await (typeof loadMenuImages === "function"
        ? loadMenuImages()
        : fetch("/api/bot/menu/images").then((res) => res.json()));
      const list = Array.isArray(payload?.images) ? payload.images : Array.isArray(payload) ? payload : [];
      setMenuImages(list);
      return list;
    } catch (error) {
      console.error("Menu images load error", error);
      return [];
    } finally {
      setGalleryLoading(false);
    }
  }, [loadMenuImages]);

  useEffect(() => {
    refreshGallery();
  }, [refreshGallery]);

  const activeScreen = useMemo(
    () => draft.screens.find((screen) => screen.id === activeScreenId) || draft.screens[0],
    [draft.screens, activeScreenId],
  );
  const activeTitle = activeScreen?.title || draft.screens[0]?.title || "Меню";

  const updateScreen = useCallback(
    (screenId, updater) => {
      setDraft((prev) => {
        const screens = prev.screens.map((screen) =>
          screen.id === screenId ? { ...screen, ...updater(screen) } : screen,
        );
        return { ...prev, screens };
      });
      setDirty(true);
    },
    [],
  );

  const addScreen = useCallback(() => {
    setDraft((prev) => {
      const index = prev.screens.length + 1;
      const id = sanitizeId(`screen-${index}`);
      const screen = normalizeScreen(
        { id, title: `Экран ${index}`, message: '', buttons: [] },
        index - 1,
      );
      return { ...prev, screens: [...prev.screens, screen] };
    });
    setDirty(true);
  }, []);

  const removeScreen = useCallback(
    (screenId) => {
      setDraft((prev) => {
        if (prev.screens.length <= 1) return prev;
        const filtered = prev.screens.filter((screen) => screen.id !== screenId);
        const nextActive = filtered[0]?.id || null;
        setActiveScreenId((current) => (current === screenId ? nextActive : current));
        return { ...prev, screens: filtered };
      });
      setDirty(true);
    },
    [],
  );

  const moveScreen = useCallback(
    (screenId, delta) => {
      setDraft((prev) => {
        const idx = prev.screens.findIndex((screen) => screen.id === screenId);
        if (idx < 0) return prev;
        const nextIndex = idx + delta;
        if (nextIndex < 0 || nextIndex >= prev.screens.length) return prev;
        const screens = [...prev.screens];
        const [item] = screens.splice(idx, 1);
        screens.splice(nextIndex, 0, item);
        return { ...prev, screens };
      });
      setDirty(true);
    },
    [],
  );

  const updateButton = useCallback(
    (buttonId, nextButton) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const buttons = (screen.buttons || []).map((btn) =>
          btn.id === buttonId ? normalizeButton(nextButton, 0, screen.id) : btn,
        );
        return { buttons: normalizeButtonOrder(buttons) };
      });
    },
    [activeScreen, updateScreen],
  );

  const moveButton = useCallback(
    (buttonId, targetRow, targetOrder = 0, createNewRow = false) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const buttons = screen.buttons || [];
        const item = buttons.find((btn) => btn.id === buttonId);
        if (!item) return {};
        const placed = insertButtonAtPosition(buttons, { ...item }, targetRow, targetOrder, { createNewRow });
        return { buttons: placed };
      });
    },
    [activeScreen, updateScreen],
  );

  const addButtonFromPalette = useCallback(
    (type, row = 0, order = 0, createNewRow = false) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const buttons = screen.buttons ? [...screen.buttons] : [];
        const nextIndex = buttons.length + 1;
        const newBtn = normalizeButton(
          {
            id: `btn-${screen.id}-${nextIndex}`,
            label: `${BOT_BUTTON_TYPES.find((t) => t.id === type)?.label || "Кнопка"}`,
            type,
            targetScreenId: null,
            row,
            order,
          },
          nextIndex - 1,
          screen.id,
        );
        const placed = insertButtonAtPosition(buttons, newBtn, row, order, { createNewRow });
        setSelectedButtonId(newBtn.id);
        return { buttons: placed };
      });
    },
    [activeScreen, updateScreen],
  );

  const removeButton = useCallback(
    (buttonId) => {
      if (!activeScreen || !buttonId) return;
      updateScreen(activeScreen.id, (screen) => ({
        buttons: (screen.buttons || []).filter((btn) => btn.id !== buttonId),
      }));
      setSelectedButtonId((prev) => (prev === buttonId ? null : prev));
    },
    [activeScreen, updateScreen],
  );

  const handleSelectGalleryImage = useCallback(
    (src) => {
      if (!activeScreen || !src) return;
      updateScreen(activeScreen.id, () => ({ imageUrl: src }));
    },
    [activeScreen, updateScreen],
  );

  const handleUploadMenuImage = useCallback(
    async (file) => {
      if (!file || !activeScreen) return null;
      try {
        if (typeof onUploadMenuImage === "function") {
          const result = await onUploadMenuImage(file);
          const uploadedPath = result?.path || result?.url || result?.image || "";
          if (uploadedPath) {
            updateScreen(activeScreen.id, () => ({ imageUrl: uploadedPath }));
          }
          if (Array.isArray(result?.images)) {
            setMenuImages(result.images);
          } else {
            await refreshGallery();
          }
          return uploadedPath;
        }
        const dataUrl = await readFileAsDataUrl(file);
        updateScreen(activeScreen.id, () => ({ imageUrl: dataUrl }));
        return dataUrl;
      } catch (error) {
        console.error("Menu image upload error", error);
        throw error;
      }
    },
    [activeScreen, onUploadMenuImage, refreshGallery, updateScreen],
  );

  const handleSave = useCallback(async () => {
    if (!onSave) return;
    setLoading(true);
    try {
      const result = await onSave(draft);
      if (isMountedRef.current) {
        setDirty(false);
        return result;
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [draft, onSave]);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5">
      <div className="space-y-4">
        <ChatPreview
          screen={activeScreen}
          screens={draft.screens}
          onSelectButton={(id) => setSelectedButtonId(id)}
          onNavigate={(targetId) => setActiveScreenId(targetId)}
          onMoveButton={(id, row, order, createNewRow) => moveButton(id, row, order, createNewRow)}
          onAddFromPalette={(type, row, order, createNewRow) => addButtonFromPalette(type, row, order, createNewRow)}
          onRemoveButton={removeButton}
          onUploadImage={handleUploadMenuImage}
          galleryImages={menuImages}
          onSelectGalleryImage={handleSelectGalleryImage}
          onMessageChange={(value) => updateScreen(activeScreen.id, () => ({ message: value }))}
          onTitleChange={(value) => updateScreen(activeScreen.id, () => ({ title: value }))}
          dropZones={{ settingsRef: buttonSettingsRef, paletteRef }}
          isEditing={isEditing}
          onDropZoneHoverChange={setDropZoneHover}
          onDragStateChange={setIsDragging}
          isGalleryLoading={galleryLoading}
          onToggleEditing={() => setIsEditing((prev) => !prev)}
          onSave={handleSave}
          isSaving={isSaving}
          isLoading={loading}
        />

        {isEditing && (
          <ButtonEditPanel
            panelRef={buttonSettingsRef}
            button={activeScreen.buttons.find((btn) => btn.id === selectedButtonId) || activeScreen.buttons[0]}
            screens={draft.screens}
            onChange={(next) => updateButton(next.id || selectedButtonId, next)}
            onRemove={() => {
              if (selectedButtonId) {
                removeButton(selectedButtonId);
                setSelectedButtonId(null);
              }
            }}
            onDropSelect={(event) => {
              event.preventDefault();
              try {
                const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
                if (payload?.id) {
                  setSelectedButtonId(payload.id);
                }
              } catch {
                // ignore
              }
            }}
            isEditing={isEditing}
            isDropTargetActive={dropZoneHover === "settings"}
            isDragging={isDragging}
          />
        )}

        {isEditing && (
          <div
            className={`rounded-3xl transition-all duration-200 ${
              paletteHover
                ? "scale-[1.01] ring-2 ring-rose-400/60 shadow-[0_14px_50px_rgba(244,63,94,0.35)]"
                : "ring-1 ring-white/5"
              }`}
            ref={paletteRef}
          >
            <ButtonPalette
              onAdd={(type) =>
                addButtonFromPalette(type, activeScreen?.buttons?.[0]?.row ?? 0, activeScreen?.buttons?.length || 0)
              }
              onRemove={removeButton}
              onHoverChange={setPaletteHover}
              isEditing={isEditing}
              isHighlighted={dropZoneHover === "palette"}
              isDragging={isDragging}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ButtonPalette = ({ onAdd, onRemove, onHoverChange, isEditing, isHighlighted, isDragging }) => {
  const [isDropping, setIsDropping] = useState(false);
  const dropActiveRef = useRef(false);
  const dragPreviewRef = useRef(null);

  const startPaletteDrag = (item, event) => {
    if (!isEditing) return;
    if (!event || (typeof event.button === "number" && event.button !== 0)) return;
    event.preventDefault();
    event.stopPropagation?.();
    onHoverChange?.(true);
    const starter = window.__botMenuBeginDrag;
    if (typeof starter === "function") {
      starter(
        {
          id: null,
          fromRow: 0,
          fromOrder: 0,
          source: "palette",
          type: item.id,
        },
        event.currentTarget,
        event,
      );
      return;
    }
    const ghost = createDragPreview(event.currentTarget, event);
    dragPreviewRef.current = ghost;
    ghost?.update?.(event.clientX, event.clientY);
    const handleMove = (e) => ghost?.update?.(e.clientX, e.clientY);
    const handleUp = () => {
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange?.(false);
      destroyDragPreview(dragPreviewRef.current);
      dragPreviewRef.current = null;
      document.removeEventListener("pointermove", handleMove);
    };
    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp, { once: true });
  };

  const activeHighlight = isDropping || isHighlighted || isDragging;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-900/40 via-indigo-900/50 to-rose-900/40 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 ${
        activeHighlight ? "ring-2 ring-rose-400/70 scale-[1.01] animate-[magnetPull_0.9s_ease-in-out_infinite]" : "ring-1 ring-white/10"
      }`}
      onPointerEnter={() => {
        if (!isDragging) return;
        if (!dropActiveRef.current) {
          dropActiveRef.current = true;
          setIsDropping(true);
          onHoverChange?.(true);
        }
      }}
      onPointerMove={() => {
        if (!isDragging) return;
        if (!dropActiveRef.current) {
          dropActiveRef.current = true;
          setIsDropping(true);
          onHoverChange?.(true);
        }
      }}
      onPointerLeave={() => {
        dropActiveRef.current = false;
        setIsDropping(false);
        onHoverChange?.(false);
      }}
      onPointerUp={() => {
        dropActiveRef.current = false;
        setIsDropping(false);
        onHoverChange?.(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!dropActiveRef.current) {
          dropActiveRef.current = true;
          setIsDropping(true);
          onHoverChange?.(true);
        }
      }}
      onDragEnter={() => {
        if (!dropActiveRef.current) {
          dropActiveRef.current = true;
          setIsDropping(true);
          onHoverChange?.(true);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        dropActiveRef.current = false;
        setIsDropping(false);
        onHoverChange?.(false);
        try {
          const payload = JSON.parse(e.dataTransfer.getData("application/json") || "{}");
          if (payload?.id) {
            onRemove?.(payload.id);
          }
        } catch {
          // ignore
        }
        destroyDragPreview(dragPreviewRef.current);
        dragPreviewRef.current = null;
      }}
      onDragLeave={() => {
        dropActiveRef.current = false;
        setIsDropping(false);
        onHoverChange?.(false);
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-indigo-100">Еще кнопки</p>
          <p className="text-[11px] text-slate-300">Листайте горизонтально и перетаскивайте на экран</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {BOT_BUTTON_TYPES.map((item) => (
          <div
            key={item.id}
            draggable={false}
            style={isEditing ? { touchAction: "none" } : undefined}
            onPointerDown={(e) => startPaletteDrag(item, e)}
            onPointerUp={(e) => {
              e.preventDefault();
              setIsDropping(false);
              onHoverChange?.(false);
              destroyDragPreview(dragPreviewRef.current);
              dragPreviewRef.current = null;
            }}
            onPointerLeave={() => {
              setIsDropping(false);
              onHoverChange?.(false);
            }}
            onClick={() => {
              if (!isEditing) return;
              onAdd?.(item.id);
            }}
            className={`group relative flex min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] lg:min-w-[140px] ${
              isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-not-allowed opacity-60"
            }`}
          >
            <span className="text-lg">{item.emoji || "✨"}</span>
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

window.BotMenuBuilder = BotMenuBuilder;
