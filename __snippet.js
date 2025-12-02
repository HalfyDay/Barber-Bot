const buildCardFileName = (name = '') => {
  const normalized = normalizeText(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  const base = normalized || 'barber-card';
  return `${base}-${Date.now()}.jpg`;
};
const BarberAvatarPicker = ({
  value,
  onChange,
  loadOptions,
  onUpload,
  onDelete,
  initialName = '',
  initialDescription = '',
}) => {
  const [avatarOptions, setAvatarOptions] = useState(() => avatarOptionsCache || []);
  const [loading, setLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState('');
  const [cardFields, setCardFields] = useState({
    name: normalizeText(initialName),
    description: normalizeText(initialDescription),
    phrase: 'Главное клиенту комфортно',
  });
  const [cardPhoto, setCardPhoto] = useState('');
  const [cardPreview, setCardPreview] = useState('');
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState('');
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const canvasRef = useRef(null);
  const normalizedValue = normalizeImagePath(value);
  useEffect(() => {
    if (!value || typeof onChange !== 'function') return;
    const normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      onChange(normalized);
    }
  }, [value, onChange]);
  useEffect(() => {
    setCardFields((prev) => ({
      ...prev,
      name: prev.name || normalizeText(initialName),
      description: prev.description || normalizeText(initialDescription),
    }));
  }, [initialName, initialDescription]);
  useEffect(() => {
    if (!cardPhoto && normalizedValue && !normalizedValue.endsWith('background.jpg')) {
      setCardPhoto(normalizedValue);
    }
  }, [normalizedValue, cardPhoto]);
  const availableOptions = useMemo(() => {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue, ...avatarOptions];
  }, [avatarOptions, normalizedValue]);
  const requestAvatarOptions = useCallback(async () => {
    const loader = typeof loadOptions === 'function' ? loadOptions : fetchAvatarOptions;
    const assetsPayload = await loader();
    const assets = Array.isArray(assetsPayload)
      ? assetsPayload
      : Array.isArray(assetsPayload?.images)
        ? assetsPayload.images
        : [];
    return Array.from(new Set(assets.map((asset) => normalizeImagePath(asset)).filter(Boolean)));
  }, [loadOptions]);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    requestAvatarOptions()
      .then((assets) => {
        if (!isMounted) return;
        avatarOptionsCache = assets;
        setAvatarOptions(assets);
      })
      .catch((error) => {
        if (!isMounted) return;
        console.error('Avatar load error', error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [requestAvatarOptions]);
  const refreshAvatarOptions = useCallback(async () => {
    setLoading(true);
    try {
      const assets = await requestAvatarOptions();
      avatarOptionsCache = assets;
      setAvatarOptions(assets);
      return assets;
    } finally {
      setLoading(false);
    }
  }, [requestAvatarOptions]);
  const handleUploadFile = useCallback(
    async (file) => {
      if (!file || typeof onUpload !== 'function') return;
      if (!file.type.startsWith('image/')) {
        setActionError('Нужен файл изображения (готовая карточка).');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setActionError('Файл больше 5 МБ.');
        return;
      }
      setActionError('');
      setActionBusy(true);
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const result = await onUpload({ name: file.name, data: dataUrl });
        await refreshAvatarOptions();
        const uploadedPath = result?.path || result?.image || null;
        if (uploadedPath) {
          onChange?.(normalizeImagePath(uploadedPath));
        }
        setShowGallery(true);
      } catch (error) {
        console.error('Avatar upload error', error);
        setActionError(error.message || 'Не удалось загрузить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onUpload, onChange, refreshAvatarOptions],
  );
  const handleFileInputChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (file) {
        handleUploadFile(file);
      }
    },
    [handleUploadFile],
  );
  const handlePhotoFileChange = useCallback(
    async (event) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setRenderError('Загрузите файл изображения.');
        return;
      }
      if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
        setRenderError('Фото больше 5 МБ — выберите файл поменьше.');
        return;
      }
      setRenderError('');
      try {
        const dataUrl = await readFileAsDataUrl(file);
        setCardPhoto(dataUrl);
      } catch (error) {
          setRenderError(error.message || '?? ????????? ?????? ????????.');
      }
    },
    [],
  );
  const handleDeleteImage = useCallback(
    async (target) => {
      if (!target || typeof onDelete !== 'function') return;
      setActionError('');
      setActionBusy(true);
      try {
        await onDelete(target);
        await refreshAvatarOptions();
        if (normalizeImagePath(target) === normalizedValue) {
          onChange?.('');
        }
      } catch (error) {
        console.error('Avatar delete error', error);
        setActionError(error.message || 'Не удалось удалить изображение.');
      } finally {
        setActionBusy(false);
      }
    },
    [onDelete, refreshAvatarOptions, normalizedValue, onChange],
  );
  const previewSrc = normalizedValue ? resolveAssetUrl(normalizedValue) : '';
  const photoPreview = cardPhoto ? resolveAssetUrl(cardPhoto) : '';
  useEffect(() => {
    let cancelled = false;
    const renderCard = async () => {
      if (!canvasRef.current) return;
      setRendering(true);
      setRenderError('');
      try {
        await ensureDisplayFonts();
        const ctx = canvasRef.current.getContext('2d');
        const [background, profilePhoto] = await Promise.all([
          loadImageElement(CARD_BACKGROUND_IMAGE).catch(() => null),
          cardPhoto ? loadImageElement(resolveAssetUrl(cardPhoto)).catch(() => null) : Promise.resolve(null),
        ]);
        if (cancelled) return;
        canvasRef.current.width = CARD_CANVAS_WIDTH;
        canvasRef.current.height = CARD_CANVAS_HEIGHT;
        ctx.clearRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        if (background) {
          drawCoverImage(ctx, background, 0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        } else {
          const gradient = ctx.createLinearGradient(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
          gradient.addColorStop(0, '#f3e7d3');
          gradient.addColorStop(1, '#c8e7dd');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT);
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        drawRoundedRectPath(ctx, 110, CARD_CANVAS_HEIGHT - 240, 340, 180, 26);
        const title = (cardFields.name || 'BARBER').toUpperCase();
        ctx.fillStyle = CARD_NAME_COLOR;
        ctx.font = '900 180px "Bebas Neue", "Inter", sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText(title, 80, 80);
        ctx.fillStyle = CARD_STRIPE_COLOR;
        ctx.globalAlpha = 0.94;
        ctx.fillRect(70, 270, CARD_CANVAS_WIDTH - 140, 30);
        ctx.globalAlpha = 1;
        const descX = CARD_CANVAS_WIDTH * 0.54;
        const descWidth = CARD_CANVAS_WIDTH - descX - 70;
        let lineIndex = 0;
        ctx.font = '600 30px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = CARD_TEXT_COLOR;
        const chunks = normalizeText(cardFields.description || '').split(/\n+/).map((line) => line.trim()).filter(Boolean);
        const payload = chunks.length ? chunks : ['Careful with details and loves to polish haircuts to perfect.'];
        payload.forEach((chunk) => {
          wrapTextLines(ctx, chunk, descWidth)
            .slice(0, 6)
            .forEach((line) => {
              const y = 320 + lineIndex * 42;
              ctx.beginPath();
              ctx.fillStyle = CARD_NAME_COLOR;
              ctx.arc(descX, y + 18, 7, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = CARD_TEXT_COLOR;
              ctx.fillText(line, descX + 24, y);
              lineIndex += 1;
            });
        });
        const phraseLabel = 'Favorite quote:';
        const phraseText = cardFields.phrase || 'Client comfort first';
        ctx.font = '700 32px "Manrope", "Inter", sans-serif';
        ctx.fillStyle = CARD_TEXT_COLOR;
        const labelWidth = ctx.measureText(phraseLabel).width;
        const phraseWidth = ctx.measureText(phraseText).width;
        const blockWidth = Math.min(descWidth, Math.max(labelWidth, phraseWidth) + 60);
        const blockHeight = 110;
        const blockX = descX;
        const blockY = CARD_CANVAS_HEIGHT - blockHeight - 90;
        ctx.fillStyle = CARD_PHRASE_COLOR;
        drawRoundedRectPath(ctx, blockX, blockY, blockWidth, blockHeight, 26);
        ctx.fill();
        ctx.fillStyle = '#f9fbfa';
        ctx.fillText(phraseLabel, blockX + 26, blockY + 28);
        ctx.font = '800 34px "Manrope", "Inter", sans-serif';
        ctx.fillText(phraseText, blockX + 26, blockY + 66);
        const photoWidth = 430;
        const photoHeight = 520;
        const photoX = CARD_CANVAS_WIDTH * 0.18;
        const photoY = 180;
        if (profilePhoto) {
          drawRoundedImage(ctx, profilePhoto, photoX, photoY, photoWidth, photoHeight, 38);
        } else {
          ctx.save();
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          drawRoundedRectPath(ctx, photoX, photoY, photoWidth, photoHeight, 38);
          ctx.fill();
          ctx.restore();
        }
        ctx.fillStyle = 'rgba(0, 155, 159, 0.16)';
        ctx.fillRect(photoX + 30, photoY + photoHeight * 0.32, 260, 16);
        ctx.fillRect(photoX + 60, photoY + photoHeight * 0.6, 220, 16);
        const previewUrl = canvasRef.current.toDataURL('image/jpeg', 0.94);
        if (!cancelled) {
          setCardPreview(previewUrl);
        }
      } catch (error) {
        if (!cancelled) {
          setRenderError(error.message || '?? ????????? ?????? ????????.');
        }
      } finally {
        if (!cancelled) {
          setRendering(false);
        }
      }
    };
    renderCard();
    return () => {
      cancelled = true;
    };
  }, [cardFields.name, cardFields.description, cardFields.phrase, cardPhoto]);
  const handleSaveCard = useCallback(async () => {
    if (!cardPreview) {
      setRenderError('Сначала добавьте фото и текст, чтобы собрать карточку.');
      return;
    }
    setActionBusy(true);
    setActionError('');
    try {
      const payload = { name: buildCardFileName(cardFields.name || 'barber-card'), data: cardPreview };
      let nextValue = cardPreview;
      if (typeof onUpload === 'function') {
        const result = await onUpload(payload);
        const uploadedPath = result?.path || result?.image || null;
        if (uploadedPath) {
          nextValue = normalizeImagePath(uploadedPath);
          await refreshAvatarOptions();
        }
      }
      onChange?.(nextValue);
    } catch (error) {
      console.error('Card save error', error);
      setActionError(error.message || 'Не удалось сохранить карточку.');
    } finally {
      setActionBusy(false);
    }
  }, [cardPreview, cardFields.name, onUpload, onChange, refreshAvatarOptions]);
  const handleDownloadCard = useCallback(() => {
    if (!cardPreview) return;
    const link = document.createElement('a');
    link.href = cardPreview;
    link.download = buildCardFileName(cardFields.name || 'barber-card').replace(/\.jpg$/, '.png');
    link.click();
  }, [cardPreview, cardFields.name]);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
      <input
        ref={photoInputRef}
        type="file"
        name="barberPhoto"
        aria-label="Фото барбера"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoFileChange}
      />
      <input
        ref={fileInputRef}
        type="file"
        name="avatarFile"
        aria-label="Импорт готовой карточки"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <div className="grid gap-6 p-5 lg:grid-cols-3">
      <div className="grid gap-6 p-5 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <canvas
              ref={canvasRef}
              className="block h-full w-full max-w-full bg-slate-900/60"
              style={{ aspectRatio: '16 / 9' }}
            />
            {!cardPreview && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 p-6 text-center text-sm text-slate-300">
                <p>
                  Upload a barber photo, enter name/description/favorite phrase ? the card will be auto-built on background.jpg.
                </p>
              </div>
            )}
            {rendering && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 text-sm text-indigo-100">
                Building card preview...
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSaveCard}
              disabled={actionBusy || !cardPreview}
              className={classNames(
                'rounded-2xl px-4 py-2 text-sm font-semibold text-white transition',
                actionBusy || !cardPreview ? 'bg-slate-700 text-slate-400' : 'bg-emerald-600 hover:bg-emerald-500',
              )}
            >
              {actionBusy ? 'Saving...' : 'Save card'}
            </button>
            <button
              type="button"
              onClick={handleDownloadCard}
              disabled={!cardPreview}
              className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
            >
              Download PNG
            </button>
            {previewSrc && <span className="text-xs text-slate-400">Current avatar already saved</span>}
          </div>
          {(renderError || actionError) && <p className="text-sm text-rose-400">{renderError || actionError}</p>}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Card name</label>
            <input
              value={cardFields.name}
              onChange={(event) => setCardFields((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="BARBER"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Description (by lines)</label>
            <textarea
              rows={4}
              value={cardFields.description}
              onChange={(event) => setCardFields((prev) => ({ ...prev, description: event.target.value }))}
              placeholder="Careful with details and brings haircuts to ideal"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
            />
            <p className="text-xs text-slate-500">Each line becomes a bullet with the reference font.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Favorite phrase</label>
            <input
              value={cardFields.phrase}
              onChange={(event) => setCardFields((prev) => ({ ...prev, phrase: event.target.value }))}
              placeholder="Client comfort first"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Barber photo</p>
              {photoPreview && (
                <button type="button" onClick={() => setCardPhoto('')} className="text-xs text-rose-300 hover:text-rose-200">
                  Reset
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
              <div className="h-16 w-16 overflow-hidden rounded-xl border border-slate-800 bg-slate-800">
                {photoPreview ? (
                  <img src={photoPreview} alt="Barber photo" className="h-full w-full object-cover" />
                ) : (
                  <DefaultProfileIcon className="h-full w-full bg-slate-900/60 text-slate-500" iconClassName="h-10 w-10" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs text-slate-400">
                  Photo sits on the left like the reference; portrait shots work best.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => photoInputRef.current?.click()}
                    className="rounded-xl border border-emerald-500/70 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:border-emerald-400 hover:text-white"
                  >
                    Upload photo
                  </button>
                  {normalizedValue && (
                    <button
                      type="button"
                      onClick={() => setCardPhoto(normalizedValue)}
                      className="rounded-xl border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-indigo-400 hover:text-white"
                    >
                      Use current
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 border-t border-slate-800 bg-slate-900/60 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">Card gallery</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowGallery((prev) => !prev)}
              className="rounded-xl border border-slate-700 px-3 py-1.5 text-xs font-semibold text-indigo-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
              disabled={loading || (!avatarOptions.length && !normalizedValue)}
            >
              {loading ? 'Loading...' : showGallery ? 'Hide' : 'Show'}
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl border border-emerald-500/70 px-3 py-1.5 text-xs font-semibold text-emerald-200 transition hover:border-emerald-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
              disabled={actionBusy}
            >
              Import ready card
            </button>
          </div>
        </div>
        {showGallery && availableOptions.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {availableOptions.map((preset) => {
              const isSelected = preset === normalizedValue;
              return (
                <button
                  type="button"
                  key={preset}
                  onClick={() => onChange(preset)}
                  className={classNames(
                    'group relative overflow-hidden rounded-2xl border p-1.5 transition hover:border-indigo-400 hover:bg-slate-800',
                    isSelected ? 'border-indigo-500 bg-indigo-500/15' : 'border-slate-700 bg-slate-900',
                  )}
                >
                  <img src={resolveAssetUrl(preset)} alt="card preset" className="h-20 w-full rounded-xl object-cover" />
                  {typeof onDelete === 'function' && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteImage(preset);
                      }}
                      className="absolute right-1 top-1 rounded-full bg-slate-900/70 p-1 text-slate-200 opacity-0 transition hover:bg-rose-600/80 hover:text-white group-hover:opacity-100 disabled:cursor-not-allowed"
                      disabled={actionBusy}
                    >
                      <IconTrash className="h-3.5 w-3.5" />
                    </button>
                  )}
                </button>
              );
            })}
          </div>
        )}
        {!avatarOptions.length && !loading && (
          <p className="text-sm text-slate-500">No cards yet. Save one to see it here.</p>
        )}
      </div>
    </div>
  );
};
const DAY_INDEX_LOOKUP = (() => {
  const full = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  const short = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const map = {};
  full.forEach((name, index) => {
    map[name] = index;
  });
  short.forEach((name, index) => {
    map[name] = index;
