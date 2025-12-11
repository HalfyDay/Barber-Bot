const { useState, useEffect, useMemo, useCallback, useRef } = React;

const BOT_BUTTON_TYPES = [
  { id: "screen", label: "Переход на экран", emoji: "➡️" },
  { id: "staff", label: "Выбор сотрудника", emoji: "💈" },
  { id: "service", label: "Выбор услуги", emoji: "✂️" },
  { id: "date", label: "Выбор даты", emoji: "📅" },
  { id: "time", label: "Выбор времени", emoji: "⏰" },
  { id: "description", label: "Описание", emoji: "ℹ️" },
  { id: "profile", label: "Профиль", emoji: "👤" },
  { id: "userAppointments", label: "Мои записи", emoji: "📖" },
  { id: "custom", label: "Своя кнопка", emoji: "✨" },
];
const BOT_BUTTON_TYPE_SET = new Set(BOT_BUTTON_TYPES.map((item) => item.id));

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

const normalizeButton = (btn, idx = 0, screenId = "screen") => {
  const id = sanitizeId(btn?.id || `btn-${screenId}-${idx + 1}`);
  const label = (btn?.label || btn?.text || `Кнопка ${idx + 1}`).toString();
  const type = BOT_BUTTON_TYPE_SET.has(btn?.type) ? btn.type : "screen";
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
    ? sortButtons(screen.buttons.map((btn, i) => normalizeButton(btn, i, id)))
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

const ButtonTypeBadge = ({ type }) => {
  const item = BOT_BUTTON_TYPES.find((entry) => entry.id === type);
  if (!item) return null;
  return (
    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200 inline-flex items-center gap-1">
      {item.emoji || "•"} {item.label}
    </span>
  );
};

const ButtonEditPanel = ({ button, screens, onChange, onRemove, onDropSelect }) => {
  if (!button) {
    return (
      <div
        className="rounded-2xl border border-slate-700 bg-slate-900 p-4 text-slate-400 transition-transform duration-300"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDropSelect}
      >
        Перетащите кнопку для редактирования или выберите её в превью.
      </div>
    );
  }
  return (
    <div
      className="rounded-2xl border border-indigo-700/60 bg-slate-900/80 p-4 shadow-lg space-y-3 transition-transform duration-300"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropSelect}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-white">Настройки кнопки</p>
        <ButtonTypeBadge type={button.type} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs text-slate-400">Текст</label>
          <input
            value={button.label}
            onChange={(e) => onChange({ ...button, label: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400">Тип</label>
          <select
            value={button.type}
            onChange={(e) => onChange({ ...button, type: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
          >
            {BOT_BUTTON_TYPES.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <div>
          <label className="text-xs text-slate-400">Экран назначения</label>
          <select
            value={button.targetScreenId || ''}
            onChange={(e) => onChange({ ...button, targetScreenId: e.target.value || null })}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
          >
            <option value="">—</option>
            {screens.map((screen) => (
              <option key={screen.id} value={screen.id}>
                {screen.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Ряд</label>
          <input
            type="number"
            value={button.row ?? 0}
            onChange={(e) => onChange({ ...button, row: Number(e.target.value) || 0 })}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400">Порядок в ряду</label>
          <input
            type="number"
            value={button.order ?? 0}
            onChange={(e) => onChange({ ...button, order: Number(e.target.value) || 0 })}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-400">ID: {button.id}</div>
        <button
          type="button"
          className="rounded-lg bg-rose-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-600"
          onClick={onRemove}
        >
          Удалить кнопку
        </button>
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
  onDropToEdit,
  onImageChange,
  onMessageChange,
  onTitleChange,
  onEditHover,
  onPaletteHover,
}) => {
  const fileInputRef = useRef(null);
  const [dropPaletteActive, setDropPaletteActive] = useState(false);
  const [dropEditActive, setDropEditActive] = useState(false);
  const [draggingId, setDraggingId] = useState(null);
  const grouped = useMemo(() => {
    const rows = new Map();
    (screen?.buttons || []).forEach((btn) => {
      const rowIndex = Number(btn.row || 0);
      if (!rows.has(rowIndex)) rows.set(rowIndex, []);
      rows.get(rowIndex).push(btn);
    });
    return Array.from(rows.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([, btns]) => btns.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)));
  }, [screen]);

  const handleDragStart = (btn, source = "menu") => (event) => {
    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({ id: btn.id, fromRow: Number(btn.row || 0), source, type: btn.type }),
    );
    event.dataTransfer.effectAllowed = "move";
    setDraggingId(btn.id);
  };
  const handleDropOnButton = (targetBtn) => (event) => {
    event.preventDefault();
    try {
      const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
      if (payload?.source === "palette" && payload?.type) {
        onAddFromPalette?.(payload.type, Number(targetBtn.row || 0), targetBtn.order || 0);
        return;
      }
      if (payload?.id) {
        onMoveButton?.(payload.id, Number(targetBtn.row || 0), targetBtn.order || 0);
      }
    } catch {
      // ignore
    }
    setDraggingId(null);
  };
  const handleDropOnRowEnd = (rowIndex) => (event) => {
    event.preventDefault();
    try {
      const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
      const targetOrder = (screen?.buttons || []).filter((btn) => Number(btn.row || 0) === rowIndex).length;
      if (payload?.source === "palette" && payload?.type) {
        onAddFromPalette?.(payload.type, rowIndex, targetOrder);
        return;
      }
      if (payload?.id) {
        onMoveButton?.(payload.id, rowIndex, targetOrder);
      }
    } catch {
      // ignore
    }
    setDraggingId(null);
  };

  return (
    <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-2xl ring-1 ring-slate-900">
      <div className="text-center text-sm font-semibold text-slate-200">
        <input
          value={screen?.title || ""}
          onChange={(e) => onTitleChange?.(e.target.value)}
          placeholder="Название меню"
          className="w-full rounded-xl border border-slate-800 bg-transparent px-3 py-1 text-center text-sm text-white focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-inner ring-1 ring-slate-800">
        <label
          className="relative block cursor-pointer bg-slate-900/70"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) onImageChange?.(file);
          }}
        >
          {screen?.imageUrl ? (
            <img src={screen.imageUrl} alt="" className="h-64 w-full object-cover" />
          ) : (
            <div className="flex h-64 w-full items-center justify-center bg-amber-50 text-center text-lg font-semibold text-slate-900">
              Загрузить изображение
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImageChange?.(file);
            }}
          />
        </label>
        <div className="bg-slate-900 px-4 py-3 text-white">
          <textarea
            value={screen?.message || ""}
            onChange={(e) => onMessageChange?.(e.target.value)}
            className="w-full resize-none rounded-2xl bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            placeholder="Введите текст"
            rows={2}
          />
        </div>
        <div className="space-y-3 bg-slate-900 px-4 pb-5 pt-2">
          {grouped.length ? (
            grouped.map((row, idx) => (
              <div
                key={idx}
                className="flex flex-wrap gap-2 rounded-2xl bg-slate-800/60 p-2"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDropOnRowEnd(Number(row?.[0]?.row ?? idx))}
              >
                {row.map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    draggable
                    onDragStart={handleDragStart(btn)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDropOnButton(btn)}
                    onDragEnd={() => setDraggingId(null)}
                    className={`flex-1 min-w-[120px] rounded-2xl border px-3 py-2 text-sm text-white shadow-lg transition-all duration-200 hover:-translate-y-[1px] active:scale-95 ${
                      draggingId === btn.id
                        ? "border-indigo-400 bg-indigo-900/80 ring-2 ring-indigo-400/50 scale-105"
                        : "border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-indigo-500 hover:text-indigo-100"
                    }`}
                    onClick={() =>
                      btn.targetScreenId ? onNavigate?.(btn.targetScreenId) : onSelectButton?.(btn.id)
                    }
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{BOT_BUTTON_TYPES.find((t) => t.id === btn.type)?.emoji || "🔘"}</span>
                      <span className="truncate">{btn.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            ))
          ) : (
            <div
              className="flex h-20 w-full items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 text-sm text-slate-400"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDropOnRowEnd(0)}
            >
              Перетащите кнопку сюда или возьмите из блока «Еще кнопки»
            </div>
          )}
        </div>
      </div>
      <div
        className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-amber-200"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropOnButton({ row: 0, order: 0, targetScreenId: null })}
      >
        Подсказка: перетащите кнопку сюда, чтобы быстро изменить её позицию.
      </div>
      <div
        className={`rounded-2xl border border-rose-800/50 bg-rose-900/30 px-3 py-2 text-xs text-rose-100 transition-all duration-200 ${dropPaletteActive ? 'ring-2 ring-rose-500/50 scale-[1.01]' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDropPaletteActive(true);
          onPaletteHover?.(true);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDropPaletteActive(false);
          onPaletteHover?.(false);
          try {
            const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
            if (payload?.id) {
              onRemoveButton?.(payload.id);
            }
          } catch {
            // ignore
          }
        }}
        onDragLeave={() => {
          setDropPaletteActive(false);
          onPaletteHover?.(false);
        }}
      >
        Перетащите сюда, чтобы удалить из меню
      </div>
      <div
        className={`rounded-2xl border border-indigo-700/60 bg-slate-900/80 px-3 py-3 text-xs text-slate-200 transition-transform duration-200 ${dropEditActive ? 'ring-2 ring-indigo-500/50 scale-[1.01]' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDropEditActive(true);
          onEditHover?.(true);
        }}
        onDrop={(event) => {
          setDropEditActive(false);
          onEditHover?.(false);
          onDropToEdit?.(event);
        }}
        onDragLeave={() => {
          setDropEditActive(false);
          onEditHover?.(false);
        }}
      >
        Редактирование: перетащите кнопку сюда, чтобы открыть в панели справа
      </div>
    </div>
  );
};

const BotMenuBuilder = ({ menu, onSave, onReload, isSaving }) => {
  const [draft, setDraft] = useState(() => normalizeMenuDraft(menu));
  const [activeScreenId, setActiveScreenId] = useState(() =>
    normalizeMenuDraft(menu).screens[0]?.id || "main",
  );
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(true);
  const [paletteHover, setPaletteHover] = useState(false);
  const [editHover, setEditHover] = useState(false);
  useEffect(() => {
    const styleId = "bot-constructor-animations";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-4px); } 100% { transform: translateY(0px); } }
      @keyframes snapPulse { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99,102,241,0.25);} 50% { transform: scale(1.02); box-shadow: 0 10px 30px rgba(99,102,241,0.15);} 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99,102,241,0.25);} }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => () => { isMountedRef.current = false; }, []);

  useEffect(() => {
    const normalized = normalizeMenuDraft(menu);
    setDraft(normalized);
    if (!normalized.screens.find((s) => s.id === activeScreenId)) {
      setActiveScreenId(normalized.screens[0]?.id || "main");
    }
    setSelectedButtonId(null);
    setDirty(false);
  }, [menu]);

  const activeScreen = useMemo(
    () => draft.screens.find((screen) => screen.id === activeScreenId) || draft.screens[0],
    [draft.screens, activeScreenId],
  );

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
      const screen = normalizeScreen({
        id,
        title: `Экран ${index}`,
        message: '',
        buttons: [],
      }, index - 1);
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

  const addButton = useCallback(() => {
    if (!activeScreen) return;
    updateScreen(activeScreen.id, (screen) => {
      const buttons = screen.buttons ? [...screen.buttons] : [];
      const newBtn = normalizeButton(
        {
          id: `btn-${screen.id}-${buttons.length + 1}`,
          label: 'Новая кнопка',
          type: 'screen',
          targetScreenId: null,
          row: buttons.length,
          order: 0,
        },
        buttons.length,
        screen.id,
      );
      buttons.push(newBtn);
      return { buttons: sortButtons(buttons) };
    });
    setTimeout(() => {
      setSelectedButtonId((prev) => prev || (activeScreen?.buttons?.[0]?.id ?? null));
    }, 0);
  }, [activeScreen, updateScreen]);

  const updateButton = useCallback(
    (buttonId, nextButton) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const buttons = (screen.buttons || []).map((btn) => (btn.id === buttonId ? normalizeButton(nextButton, 0, screen.id) : btn));
        return { buttons: sortButtons(buttons) };
      });
    },
    [activeScreen, updateScreen],
  );

  const moveButton = useCallback(
    (buttonId, deltaOrRow, orderOverride = null) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const idx = (screen.buttons || []).findIndex((btn) => btn.id === buttonId);
        if (idx < 0) return {};
        const buttons = [...screen.buttons];
        const [item] = buttons.splice(idx, 1);
        if (typeof deltaOrRow === "number" && orderOverride === null) {
          const nextIndex = idx + deltaOrRow;
          if (nextIndex < 0 || nextIndex > buttons.length) return {};
          buttons.splice(nextIndex, 0, item);
        } else if (typeof deltaOrRow === "number" && orderOverride !== null) {
          item.row = deltaOrRow;
          item.order = orderOverride;
          buttons.push(item);
        } else {
          buttons.push(item);
        }
        return { buttons: sortButtons(buttons) };
      });
    },
    [activeScreen, updateScreen],
  );

  const addButtonFromPalette = useCallback(
    (type, row = 0, order = 0) => {
      if (!activeScreen) return;
      updateScreen(activeScreen.id, (screen) => {
        const buttons = screen.buttons ? [...screen.buttons] : [];
        const nextIndex = buttons.length + 1;
        const newBtn = normalizeButton(
          {
            id: `btn-${screen.id}-${nextIndex}`,
            label: `${BOT_BUTTON_TYPES.find((t) => t.id === type)?.emoji || "🔘"} ${BOT_BUTTON_TYPES.find((t) => t.id === type)?.label || "Кнопка"}`,
            type,
            targetScreenId: null,
            row,
            order,
          },
          nextIndex - 1,
          screen.id,
        );
        buttons.push(newBtn);
        setSelectedButtonId(newBtn.id);
        return { buttons: sortButtons(buttons) };
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

  const handleReload = useCallback(async () => {
    if (!onReload) return;
    setLoading(true);
    try {
      const menuData = await onReload();
      if (menuData && isMountedRef.current) {
        const normalized = normalizeMenuDraft(menuData);
        setDraft(normalized);
        setActiveScreenId(normalized.screens[0]?.id || "main");
        setDirty(false);
        setSelectedButtonId(null);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [onReload]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400">Версия: {draft.version}</span>
        <span className="text-xs text-slate-400">Обновлено: {draft.updatedAt ? new Date(draft.updatedAt).toLocaleString() : '-'}</span>
        {dirty && <span className="rounded-full bg-amber-600/30 px-2 py-1 text-xs text-amber-200">Есть несохраненные изменения</span>}
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={handleReload}
            className="rounded-lg border border-slate-600 px-3 py-2 text-xs text-slate-200 hover:bg-slate-800 disabled:opacity-50"
            disabled={loading}
          >
            Обновить
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
            disabled={loading || isSaving}
          >
            {loading || isSaving ? "Сохранение..." : "Сохранить меню"}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {activeScreen ? (
          <div className="space-y-4">
            <div className="space-y-4 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-3 ring-1 ring-slate-800 shadow-2xl">
              <ChatPreview
                screen={activeScreen}
                screens={draft.screens}
                onSelectButton={(id) => setSelectedButtonId(id)}
                onNavigate={(targetId) => setActiveScreenId(targetId)}
                onMoveButton={(id, row, order) => moveButton(id, row, order)}
                onAddFromPalette={addButtonFromPalette}
                onRemoveButton={removeButton}
                onDropToEdit={(event) => {
                  event.preventDefault();
                  setEditHover(false);
                  try {
                    const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
                    if (payload?.id) {
                      setSelectedButtonId(payload.id);
                    }
                  } catch {
                    // ignore
                  }
                }}
                onImageChange={(file) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    updateScreen(activeScreen.id, () => ({ imageUrl: e.target?.result || '' }));
                  };
                  reader.readAsDataURL(file);
                }}
                onMessageChange={(value) => updateScreen(activeScreen.id, () => ({ message: value }))}
                onTitleChange={(value) => updateScreen(activeScreen.id, () => ({ title: value }))}
                onEditHover={(state) => setEditHover(state)}
                onPaletteHover={(state) => setPaletteHover(state)}
              />
              <div className={editHover ? "transition-transform duration-200 scale-[1.01] ring-2 ring-indigo-500/50 rounded-2xl" : "transition-transform duration-200"}>
                <ButtonEditPanel
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
                    setEditHover(false);
                    try {
                      const payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
                      if (payload?.id) {
                        setSelectedButtonId(payload.id);
                      }
                    } catch {
                      // ignore
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-300">
            Выберите экран слева, чтобы редактировать.
          </div>
        )}
      </div>
      <div className={paletteHover ? "transition-transform duration-200 scale-[1.01] ring-2 ring-rose-500/40 rounded-2xl" : "transition-transform duration-200"}>
        <ButtonPalette
          onAdd={(type) => addButtonFromPalette(type, (activeScreen?.buttons?.[0]?.row ?? 0), (activeScreen?.buttons?.length || 0))}
          onRemove={removeButton}
        />
      </div>
    </div>
  );
};

const ButtonPalette = ({ onAdd, onRemove }) => {
  return (
    <div className="mt-6 space-y-2 rounded-3xl bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/80 px-4 py-4 shadow-2xl ring-1 ring-slate-800 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-300">Еще кнопки</span>
        <span className="text-[10px] text-slate-500">Перетаскивайте, чтобы добавить или удалить</span>
      </div>
      <div
        className="flex max-h-32 flex-wrap gap-3 overflow-y-auto pb-2"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          try {
            const payload = JSON.parse(e.dataTransfer.getData("application/json") || "{}");
            if (payload?.id) {
              onRemove?.(payload.id);
            }
          } catch {
            // ignore
          }
        }}
      >
        {BOT_BUTTON_TYPES.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("application/json", JSON.stringify({ source: "palette", type: item.id }));
              e.dataTransfer.effectAllowed = "copyMove";
            }}
            onClick={() => onAdd?.(item.id)}
            className="flex cursor-grab items-center gap-2 rounded-full border border-slate-700 bg-gradient-to-r from-indigo-900/70 via-slate-800 to-indigo-900/70 px-3 py-1.5 text-xs text-white shadow-lg transition-all duration-200 hover:border-indigo-400 hover:text-indigo-100 active:cursor-grabbing"
            style={{ animation: 'floaty 4s ease-in-out infinite alternate' }}
          >
            <span>{item.emoji || "🔘"}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

window.BotMenuBuilder = BotMenuBuilder;
