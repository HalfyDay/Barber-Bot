const BotControlView = ({
  status,
  settings,
  backups = [],
  messages = [],
  onToggleEnabled,
  onStart,
  onStop,
  onRestart,
  onSaveSettings,
  onSaveMessage,
  onRestoreBackup,
  onCreateBackup,
  onDeleteBackup,
  licenseStatus,
  updateInfo,
  onRefreshUpdate,
  onApplyUpdate,
  onRestartSystem,
  pendingReloadReason = null,
  systemBusy,
  onUpdateToken = null,
  viewMode = 'bot',
  token = null,
  siteConfig = null,
  siteSaving = false,
  onSaveSite = null,
  role = ROLE_OWNER,
  session = null,
}) => {
  const [description, setDescription] = useState(settings?.botDescription || '');
  const [about, setAbout] = useState(settings?.aboutText || '');
  const [tokenDraft, setTokenDraft] = useState(token || '');
  const [savingToken, setSavingToken] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const descriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const autosizeTextArea = useCallback((element) => {
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }, []);
  useEffect(() => {
    setDescription(settings?.botDescription || '');
    setAbout(settings?.aboutText || '');
  }, [settings]);
  useEffect(() => {
    setTokenDraft(token || '');
    setShowToken(false);
  }, [token]);
  useLayoutEffect(() => {
    if (viewMode !== 'bot') return undefined;
    const frame = requestAnimationFrame(() => {
      autosizeTextArea(descriptionRef.current);
      autosizeTextArea(aboutRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [viewMode, description, about, autosizeTextArea]);
  const handleTokenSave = useCallback(async () => {
    if (!onUpdateToken) return;
    const value = (tokenDraft || '').trim();
    if (!value) return;
    setSavingToken(true);
    try {
      await onUpdateToken(value);
    } catch (error) {
      console.warn('Bot token update failed', error);
    } finally {
      setSavingToken(false);
    }
  }, [onUpdateToken, tokenDraft]);
  const updateAvailable = Boolean(updateInfo?.available ?? updateInfo?.updateAvailable);
  const currentVersionLabel =
    updateInfo?.currentVersionLabel || updateInfo?.currentVersion || updateInfo?.version || '-';
  const latestVersionLabel =
    updateInfo?.latestVersionLabel || updateInfo?.latestVersion || updateInfo?.version || '-';
  const checkedAtLabel = updateInfo?.checkedAt ? formatDate(updateInfo.checkedAt) : '—';
  const publishedAtLabel = updateInfo?.publishedAt ? formatDate(updateInfo.publishedAt) : null;
  const updateStatusLabel =
    updateInfo?.details ||
    (updateAvailable ? 'Доступно обновление' : updateInfo ? 'Установлена актуальная версия' : 'Нет данных');
  const updateSourceLabel = updateInfo?.source || null;
  const updateSourceUrl = updateInfo?.sourceUrl || null;
  const botRunning = Boolean(status?.running);
  const normalizedTokenDraft = (tokenDraft || '').trim();
  const currentTokenValue = token || '';
  const canSaveToken = Boolean(onUpdateToken && normalizedTokenDraft && normalizedTokenDraft !== currentTokenValue);
  const restartDisabled = systemBusy || typeof onRestartSystem !== 'function';
  const updateButtonLabel = systemBusy && pendingReloadReason !== 'restart' ? 'Обновление…' : 'Обновить';
  const restartButtonLabel = systemBusy && pendingReloadReason === 'restart' ? 'Перезапуск…' : 'Перезапуск';
  const isCreator = role === ROLE_CREATOR;
  const showAdminSystemControls = isCreator || Boolean(session?.isImpersonated);
  const showTimeZoneSettings = role !== ROLE_CREATOR || Boolean(session?.isImpersonated);
  const licenseList = Array.isArray(licenseStatus?.licenses) ? licenseStatus.licenses : [];
  const hasLicenseList = showAdminSystemControls && licenseList.length > 0;
  const resolveSavedTimeZones = useCallback(
    () => ({
      crm: normalizeText(siteConfig?.timeZones?.crm) || 'Asia/Irkutsk',
      client: normalizeText(siteConfig?.timeZones?.client) || 'Asia/Irkutsk',
    }),
    [siteConfig]
  );
  const [timeZoneDraft, setTimeZoneDraft] = useState(() => resolveSavedTimeZones().crm);
  useEffect(() => {
    setTimeZoneDraft(resolveSavedTimeZones().crm);
  }, [resolveSavedTimeZones]);
  const formatTimeZonePreview = useCallback((timeZone) => {
    try {
      return new Intl.DateTimeFormat('ru-RU', {
        timeZone,
        dateStyle: 'medium',
        timeStyle: 'medium',
      }).format(new Date());
    } catch {
      return 'Не удалось определить время';
    }
  }, []);
  const timeZoneOptions = useMemo(
    () => [
      { value: 'Asia/Irkutsk', label: 'Иркутск' },
      { value: 'Europe/Moscow', label: 'Москва' },
      { value: 'Europe/Kaliningrad', label: 'Калининград' },
      { value: 'Asia/Yekaterinburg', label: 'Екатеринбург' },
      { value: 'Asia/Omsk', label: 'Омск' },
      { value: 'Asia/Novosibirsk', label: 'Новосибирск' },
      { value: 'Asia/Krasnoyarsk', label: 'Красноярск' },
      { value: 'Asia/Yakutsk', label: 'Якутск' },
      { value: 'Asia/Vladivostok', label: 'Владивосток' },
      { value: 'Asia/Kamchatka', label: 'Камчатка' },
      { value: 'UTC', label: 'UTC' },
    ],
    []
  );
  const savedTimeZones = resolveSavedTimeZones();
  const timeZoneDirty = savedTimeZones.crm !== timeZoneDraft || savedTimeZones.client !== timeZoneDraft;
  const handleSaveTimeZones = useCallback(async () => {
    if (!onSaveSite) return;
    await onSaveSite({ timeZones: { crm: timeZoneDraft, client: timeZoneDraft } });
  }, [onSaveSite, timeZoneDraft]);
  if (viewMode === 'system') {
    return (
      <div className="space-y-6">
        {showTimeZoneSettings && (
          <SectionCard title="Время и часовой пояс">
            <div className="crm-soft-card flex flex-col gap-3 p-4 sm:flex-row sm:items-end">
              <label className="min-w-0 flex-1 space-y-2">
                <span className="block text-sm text-[var(--crm-text)]">Часовой пояс</span>
                <select
                  value={timeZoneDraft}
                  onChange={(event) => setTimeZoneDraft(event.target.value)}
                  className="w-full px-4 py-3"
                >
                  {timeZoneOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.value})
                    </option>
                  ))}
                </select>
              </label>
              <div className="crm-inline-panel px-4 py-3 sm:min-w-[240px]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--crm-muted)]">Сейчас</p>
                <p className="mt-1 text-sm font-semibold text-white">{formatTimeZonePreview(timeZoneDraft)}</p>
              </div>
              <button
                type="button"
                onClick={handleSaveTimeZones}
                disabled={!timeZoneDirty || siteSaving || typeof onSaveSite !== 'function'}
                className="crm-action-btn px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {siteSaving ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </SectionCard>
        )}
        {showAdminSystemControls && (
          <>
            <BackupsPanel backups={backups} onRestore={onRestoreBackup} onCreate={onCreateBackup} onDelete={onDeleteBackup} />
            <SectionCard title="Лицензия и обновления">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="crm-soft-card p-4 text-sm text-[var(--crm-text)]">
                  <p className="font-semibold">Лицензия</p>
                  <p className="mt-1">Статус: {licenseStatus?.valid ? 'Активна' : 'Не подтверждена'}</p>
                  {licenseStatus?.license?.owner && <p>Владелец: {licenseStatus.license.owner}</p>}
                  {licenseStatus?.license?.expiresAt && <p>Действует до {formatDate(licenseStatus.license.expiresAt)}</p>}
                  {licenseStatus?.license?.number && <p>Номер: {licenseStatus.license.number}</p>}
                </div>
                <div className="crm-soft-card p-4 text-sm text-[var(--crm-text)]">
                  <p className="font-semibold">Обновления</p>
                  <p className="mt-1">Текущая версия: {currentVersionLabel}</p>
                  <p>Доступная версия: {latestVersionLabel}</p>
                  <p>Проверено: {checkedAtLabel}</p>
                  {publishedAtLabel && <p>Релиз: {publishedAtLabel}</p>}
                  <p>Статус: {updateStatusLabel}</p>
                  {updateSourceLabel && (
                    <p>
                      Источник:{' '}
                      {updateSourceUrl ? (
                        <a href={updateSourceUrl} className="text-[color:var(--crm-primary)] hover:text-white" target="_blank" rel="noreferrer">
                          {updateSourceLabel}
                        </a>
                      ) : (
                        updateSourceLabel
                      )}
                    </p>
                  )}
                  <div className="mt-3 flex flex-nowrap items-stretch gap-1.5 text-xs sm:flex-wrap sm:gap-2 sm:text-sm">
                    <button
                      onClick={onRefreshUpdate}
                      disabled={systemBusy}
                      className="crm-ghost-btn px-2.5 py-2 text-[11px] whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                    >
                      Проверить
                    </button>
                    <button
                      onClick={onApplyUpdate}
                      disabled={systemBusy || !updateAvailable}
                      className="crm-action-btn px-2.5 py-2 text-[11px] whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                    >
                      {updateButtonLabel}
                    </button>
                    <button
                      onClick={onRestartSystem}
                      disabled={restartDisabled}
                      className="crm-tonal-btn px-2.5 py-2 text-[11px] whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-sm"
                    >
                      {restartButtonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </SectionCard>
            {hasLicenseList && (
              <SectionCard title="Авторизованные организации">
                <div className="grid gap-3 md:grid-cols-2">
                  {licenseList.map((item, index) => {
                    const name = item.name || item.owner || 'Организация';
                    const key = item.key || item.number || '';
                    return (
                      <div key={item.key || item.owner || index} className="crm-soft-card p-4 text-sm text-[var(--crm-text)]">
                        <p className="font-semibold text-white">{name}</p>
                        {key && <p className="text-xs text-[var(--crm-muted)]">Ключ: {key}</p>}
                        {item.expiresAt && <p className="text-xs text-[var(--crm-muted)]">Действует до {formatDate(item.expiresAt)}</p>}
                      </div>
                    );
                  })}
                </div>
              </SectionCard>
            )}
          </>
        )}
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <SectionCard
        title="Статус бота"
        actions={
          <div className="flex gap-1.5 text-sm">
            {!botRunning && (
              <button
                type="button"
                onClick={onStart}
                aria-label="Запустить"
                className="crm-action-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center rounded-full p-0 sm:h-10 sm:w-auto sm:px-4 sm:py-2"
              >
                <span className="sm:hidden" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M6 4.75a.75.75 0 0 1 1.14-.64l7 4.25a.75.75 0 0 1 0 1.28l-7 4.25A.75.75 0 0 1 6 13.25v-8.5Z" />
                  </svg>
                </span>
                <span className="sr-only sm:hidden">Запустить</span>
                <span className="hidden sm:inline">Запустить</span>
              </button>
            )}
            {botRunning && (
              <button
                type="button"
                onClick={onStop}
                aria-label="Остановить"
                className="crm-danger-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center rounded-full p-0 sm:h-10 sm:w-auto sm:px-4 sm:py-2"
              >
                <span className="sm:hidden" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <rect x="4.25" y="4.25" width="11.5" height="11.5" rx="1.5" />
                  </svg>
                </span>
                <span className="sr-only sm:hidden">Остановить</span>
                <span className="hidden sm:inline">Остановить</span>
              </button>
            )}
            <button
              type="button"
              onClick={onRestart}
              aria-label="Перезапустить"
              className="crm-tonal-btn inline-flex h-11 w-11 min-h-0 shrink-0 items-center justify-center rounded-full p-0 sm:h-10 sm:w-auto sm:px-4 sm:py-2"
            >
              <span className="sm:hidden" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.5 7.5A6 6 0 0 0 5 5.5" />
                  <path d="M15.5 7.5v-3h-3" />
                  <path d="M4.5 12.5A6 6 0 0 0 15 14.5" />
                  <path d="M4.5 12.5v3h3" />
                </svg>
              </span>
              <span className="sr-only sm:hidden">Перезапустить</span>
              <span className="hidden sm:inline">Перезапустить</span>
            </button>
          </div>
        }
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-1">
            <p className="text-sm text-[var(--crm-text)]">
              Состояние: <span className="font-semibold text-white">{status?.running ? 'работает' : 'остановлен'}</span>
            </p>
            <label className="inline-flex items-center gap-2 text-sm text-[var(--crm-text)]">
              <input
                type="checkbox"
                name="botEnabled"
                aria-label="Автостарт вместе с CRM"
                checked={settings?.isBotEnabled !== false}
                onChange={(event) => onToggleEnabled(event.target.checked)}
                className="crm-toggle-check"
              />
              Автостарт вместе с CRM
            </label>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[var(--crm-text)]">Telegram-токен</label>
            <div className="flex items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <input
                name="botToken"
                aria-label="Telegram-токен"
                type={showToken ? 'text' : 'password'}
                value={tokenDraft}
                onChange={(event) => setTokenDraft(event.target.value)}
                className="w-full rounded-[20px] border-0 bg-[color:var(--crm-surface-2)] px-3 py-2 pr-16 font-mono text-sm text-white focus:outline-none"
                placeholder="1234567890:ABC-DEF"
                spellCheck={false}
                autoComplete="off"
              />
              <button
                type="button"
                aria-label={showToken ? 'Скрыть токен' : 'Показать токен'}
                onClick={() => setShowToken((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full text-[var(--crm-muted)] hover:text-white"
              >
                <EyeIcon open={showToken} />
              </button>
            </div>
            <button
              onClick={handleTokenSave}
              disabled={!canSaveToken || savingToken}
              className="crm-action-btn h-11 flex-none px-4 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              {savingToken ? 'Сохранение...' : 'Сохранить'}
            </button>
          </div>
          {!token && (
              <p className="text-xs text-[var(--crm-muted)]">
              Укажите токен и сохраните изменения — CRM сохранит этот ключ в базе и перезапустит/остановит бота автоматически.
            </p>
          )}
          </div>
        </div>
      </SectionCard>
      <SectionCard title="Тексты бота">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-[var(--crm-text)]">Описание лендинга</label>
            <textarea
              ref={descriptionRef}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={1}
              className="w-full resize-none rounded-[20px] border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-sm text-[var(--crm-text)]">Блок «О нас»</label>
            <textarea
              ref={aboutRef}
              value={about}
              onChange={(event) => setAbout(event.target.value)}
              rows={1}
              className="w-full resize-none rounded-[20px] border border-[color:var(--crm-outline)] bg-[color:var(--crm-surface-2)] px-3 py-2 text-white"
            />
          </div>
          <button onClick={() => onSaveSettings({ botDescription: description, aboutText: about })} className="crm-action-btn px-4 py-2">
            Сохранить тексты
          </button>
        </div>
      </SectionCard>
    </div>
  );
};
const CreatorBusinessesView = ({ apiRequest, onImpersonate, role }) => {
  const [businesses, setBusinesses] = useState([]);
  const [loadingBusinesses, setLoadingBusinesses] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState(null);
  
  const [barbers, setBarbers] = useState([]);
  const [loadingBarbers, setLoadingBarbers] = useState(false);
  const [error, setError] = useState(null);

  // Business form state
  const [showNewBusForm, setShowNewBusForm] = useState(false);
  const [newBusName, setNewBusName] = useState('');
  const [newBusSubdomain, setNewBusSubdomain] = useState('');
  const [newBusCustomDomain, setNewBusCustomDomain] = useState('');
  const [newBusCustomCrmDomain, setNewBusCustomCrmDomain] = useState('');
  const [creatingBusiness, setCreatingBusiness] = useState(false);

  // Edit Business state
  const [showEditBusForm, setShowEditBusForm] = useState(false);
  const [editBusName, setEditBusName] = useState('');
  const [editBusSubdomain, setEditBusSubdomain] = useState('');
  const [editBusCustomDomain, setEditBusCustomDomain] = useState('');
  const [editBusCustomCrmDomain, setEditBusCustomCrmDomain] = useState('');
  const [editBusActive, setEditBusActive] = useState(true);
  const [updatingBusiness, setUpdatingBusiness] = useState(false);

  // Delete Business state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deletingBusiness, setDeletingBusiness] = useState(false);

  // Employee form state
  const [showBarberForm, setShowBarberForm] = useState(false);
  const [editingBarber, setEditingBarber] = useState(null);
  const [barberFormName, setBarberFormName] = useState('');
  const [barberFormLogin, setBarberFormLogin] = useState('');
  const [barberFormPhone, setBarberFormPhone] = useState('');
  const [barberFormPassword, setBarberFormPassword] = useState('');
  const [barberFormRole, setBarberFormRole] = useState('staff');
  const [barberFormActive, setBarberFormActive] = useState(true);
  const [savingBarber, setSavingBarber] = useState(false);

  useEffect(() => {
    loadBusinesses();
  }, []);

  useEffect(() => {
    if (activeBusiness) {
      loadBarbers(activeBusiness.id);
    } else {
      setBarbers([]);
    }
    setShowBarberForm(false);
    setEditingBarber(null);
    setShowEditBusForm(false);
    setShowDeleteConfirm(false);
    setDeletePassword('');
  }, [activeBusiness]);

  const loadBusinesses = async () => {
    setLoadingBusinesses(true);
    setError(null);
    try {
      const data = await apiRequest('/creator/businesses');
      setBusinesses(data || []);
    } catch (err) {
      setError(err.message || 'Ошибка загрузки списка организаций');
    } finally {
      setLoadingBusinesses(false);
    }
  };

  const loadBarbers = async (busId) => {
    setLoadingBarbers(true);
    setError(null);
    try {
      const data = await apiRequest(`/creator/businesses/${busId}/barbers`);
      setBarbers(data || []);
    } catch (err) {
      setError(err.message || 'Ошибка загрузки сотрудников');
    } finally {
      setLoadingBarbers(false);
    }
  };

  const handleCreateBusiness = async (e) => {
    e.preventDefault();
    if (!newBusName.trim()) {
      setError('Название организации обязательно');
      return;
    }
    setCreatingBusiness(true);
    setError(null);
    try {
      const newBus = await apiRequest('/creator/businesses', {
        method: 'POST',
        body: JSON.stringify({
          name: newBusName.trim(),
          subdomain: newBusSubdomain.trim() || null,
          customDomain: newBusCustomDomain.trim() || null,
          customCrmDomain: newBusCustomCrmDomain.trim() || null,
        }),
      });
      setBusinesses((prev) => [...prev, newBus]);
      setActiveBusiness(newBus);
      setNewBusName('');
      setNewBusSubdomain('');
      setNewBusCustomDomain('');
      setNewBusCustomCrmDomain('');
      setShowNewBusForm(false);
    } catch (err) {
      setError(err.message || 'Ошибка создания организации');
    } finally {
      setCreatingBusiness(false);
    }
  };

  const openEditBusForm = () => {
    if (!activeBusiness) return;
    setEditBusName(activeBusiness.name || '');
    setEditBusSubdomain(activeBusiness.subdomain || '');
    setEditBusCustomDomain(activeBusiness.customDomain || '');
    setEditBusCustomCrmDomain(activeBusiness.customCrmDomain || '');
    setEditBusActive(activeBusiness.isActive !== false);
    setShowEditBusForm(true);
    setShowDeleteConfirm(false);
  };

  const handleUpdateBusiness = async (e) => {
    e.preventDefault();
    if (!editBusName.trim()) {
      setError('Название организации обязательно');
      return;
    }
    setUpdatingBusiness(true);
    setError(null);
    try {
      const updated = await apiRequest(`/creator/businesses/${activeBusiness.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: editBusName.trim(),
          subdomain: editBusSubdomain.trim() || undefined,
          customDomain: editBusCustomDomain.trim() || null,
          customCrmDomain: editBusCustomCrmDomain.trim() || null,
          isActive: editBusActive,
        }),
      });
      setBusinesses((prev) => prev.map((b) => (b.id === activeBusiness.id ? updated : b)));
      setActiveBusiness(updated);
      setShowEditBusForm(false);
    } catch (err) {
      setError(err.message || 'Ошибка обновления организации');
    } finally {
      setUpdatingBusiness(false);
    }
  };

  const handleDeleteBusiness = async (e) => {
    e.preventDefault();
    if (!deletePassword) {
      setError('Пароль обязателен для подтверждения удаления');
      return;
    }
    setDeletingBusiness(true);
    setError(null);
    try {
      await apiRequest(`/creator/businesses/${activeBusiness.id}/delete`, {
        method: 'POST',
        body: JSON.stringify({ password: deletePassword }),
      });
      setBusinesses((prev) => prev.filter((b) => b.id !== activeBusiness.id));
      setActiveBusiness(null);
      setShowDeleteConfirm(false);
      setDeletePassword('');
    } catch (err) {
      setError(err.message || 'Ошибка удаления организации');
    } finally {
      setDeletingBusiness(false);
    }
  };

  const openNewBarberForm = () => {
    setEditingBarber(null);
    setBarberFormName('');
    setBarberFormLogin('');
    setBarberFormPhone('');
    setBarberFormPassword('');
    setBarberFormRole('staff');
    setBarberFormActive(true);
    setShowBarberForm(true);
  };

  const openEditBarberForm = (barber) => {
    setEditingBarber(barber);
    setBarberFormName(barber.name || '');
    setBarberFormLogin(barber.login || '');
    setBarberFormPhone(formatPhoneDisplay(barber.phone || ''));
    setBarberFormPassword(barber.password || '');
    setBarberFormRole(barber.role || 'staff');
    setBarberFormActive(barber.isActive !== false);
    setShowBarberForm(true);
  };

  const handleSaveBarber = async (e) => {
    e.preventDefault();
    const phoneDigits = (barberFormPhone || '').replace(/\D/g, '');
    if (!barberFormName.trim() || phoneDigits.length < 11 || !barberFormPassword.trim()) {
      setError('Имя, полный номер телефона (11 цифр) и пароль обязательны');
      return;
    }
    setSavingBarber(true);
    setError(null);
    try {
      const payload = {
        name: barberFormName.trim(),
        login: phoneDigits,
        phone: barberFormPhone.trim(),
        password: barberFormPassword.trim(),
        role: barberFormRole,
        isActive: barberFormActive,
      };

      if (editingBarber) {
        const updated = await apiRequest(`/creator/businesses/${activeBusiness.id}/barbers/${editingBarber.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        setBarbers((prev) => prev.map((b) => (b.id === editingBarber.id ? updated : b)));
      } else {
        const created = await apiRequest(`/creator/businesses/${activeBusiness.id}/barbers`, {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setBarbers((prev) => [...prev, created]);
      }
      setShowBarberForm(false);
      setEditingBarber(null);
    } catch (err) {
      setError(err.message || 'Ошибка сохранения сотрудника');
    } finally {
      setSavingBarber(false);
    }
  };

  const handleDeleteBarber = async (barberId) => {
    if (!window.confirm('Вы уверены, что хотите удалить этого сотрудника?')) return;
    setError(null);
    try {
      await apiRequest(`/creator/businesses/${activeBusiness.id}/barbers/${barberId}`, {
        method: 'DELETE',
      });
      setBarbers((prev) => prev.filter((b) => b.id !== barberId));
    } catch (err) {
      setError(err.message || 'Ошибка удаления сотрудника');
    }
  };

  return (
    <div className="space-y-6 text-white w-full min-w-0">
      {error && (
        <div className="bg-rose-500/20 border border-rose-500/30 text-rose-200 px-4 py-3 rounded-2xl text-sm flex justify-between items-center">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-white hover:opacity-75">✕</button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-[320px_1fr] w-full min-w-0">
        {/* Left Column: Businesses List */}
        <div className={`space-y-4 w-full min-w-0 ${activeBusiness ? 'hidden md:block' : ''}`}>
          <SectionCard 
            title="Организации" 
            actions={
              <button 
                onClick={() => setShowNewBusForm(prev => !prev)} 
                className="crm-action-btn h-9 px-3 text-xs"
              >
                {showNewBusForm ? 'Отмена' : 'Добавить'}
              </button>
            }
          >
            {showNewBusForm && (
              <form onSubmit={handleCreateBusiness} className="crm-soft-card p-4 space-y-3">
                <p className="text-xs font-semibold text-[color:var(--crm-primary)]">Новая организация</p>
                <div className="space-y-2 text-xs">
                  <label className="block space-y-1">
                    <span className="text-[var(--crm-muted)]">Название</span>
                    <input 
                      value={newBusName} 
                      onChange={e => setNewBusName(e.target.value)} 
                      className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2 focus:ring-1 focus:ring-[color:var(--crm-primary)]" 
                      placeholder="Барбершоп 1"
                    />
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[var(--crm-muted)]">Поддомен</span>
                    <input 
                      value={newBusSubdomain} 
                      onChange={e => setNewBusSubdomain(e.target.value)} 
                      className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2 focus:ring-1 focus:ring-[color:var(--crm-primary)]" 
                      placeholder="shop1"
                    />
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[var(--crm-muted)]">Свой домен сайта (опционально)</span>
                    <input 
                      value={newBusCustomDomain} 
                      onChange={e => setNewBusCustomDomain(e.target.value)} 
                      className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2 focus:ring-1 focus:ring-[color:var(--crm-primary)]" 
                      placeholder="barber1.ru"
                    />
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[var(--crm-muted)]">Свой домен CRM (опционально)</span>
                    <input 
                      value={newBusCustomCrmDomain} 
                      onChange={e => setNewBusCustomCrmDomain(e.target.value)} 
                      className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2 focus:ring-1 focus:ring-[color:var(--crm-primary)]" 
                      placeholder="panel.barber1.ru"
                    />
                  </label>
                </div>
                <button 
                  type="submit" 
                  disabled={creatingBusiness} 
                  className="crm-action-btn w-full py-2 text-xs font-semibold"
                >
                  {creatingBusiness ? 'Создание...' : 'Создать'}
                </button>
              </form>
            )}

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {loadingBusinesses ? (
                <p className="text-xs text-[var(--crm-muted)] text-center py-4">Загрузка...</p>
              ) : businesses.length === 0 ? (
                <p className="text-xs text-[var(--crm-muted)] text-center py-4">Нет организаций</p>
              ) : (
                businesses.map((bus) => {
                  const isActive = activeBusiness?.id === bus.id;
                  return (
                    <button
                      key={bus.id}
                      onClick={() => setActiveBusiness(bus)}
                      className={`w-full text-left p-3 rounded-2xl transition ${
                        isActive 
                          ? 'bg-[color:var(--crm-primary-container)] border border-[color:var(--crm-primary)]/20' 
                          : 'bg-[color:var(--crm-surface-2)] hover:bg-[color:var(--crm-surface-3)]'
                      }`}
                    >
                      <p className="font-semibold text-sm text-white">{bus.name}</p>
                      <p className="text-xs text-[var(--crm-muted)] mt-0.5">
                        {bus.subdomain}.brothershop.website
                      </p>
                      {bus.customDomain && (
                        <p className="text-[10px] text-[color:var(--crm-primary)] mt-0.5">
                          Сайт: {bus.customDomain}
                        </p>
                      )}
                      {bus.customCrmDomain && (
                        <p className="text-[10px] text-[color:var(--crm-primary)] mt-0.5">
                          CRM: {bus.customCrmDomain}
                        </p>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </SectionCard>
        </div>

        {/* Right Column: Selected Business Details & Employees */}
        <div className={`space-y-4 w-full min-w-0 ${!activeBusiness ? 'hidden md:block' : ''}`}>
          {!activeBusiness ? (
            <div className="crm-soft-card p-12 text-center text-sm text-[var(--crm-muted)]">
              Выберите организацию в списке слева для управления сотрудниками и параметрами
            </div>
          ) : (
            <>
              {/* Back button for mobile */}
              <button
                onClick={() => setActiveBusiness(null)}
                className="md:hidden crm-ghost-btn inline-flex items-center gap-1.5 text-xs text-[color:var(--crm-primary)] px-3 py-2 mb-2 hover:bg-white/5 rounded-xl transition"
              >
                ← Назад к списку организаций
              </button>
              {/* Organization Details Card */}
              <SectionCard
                title={`Организация: ${activeBusiness.name}`}
                actions={
                  <div className="flex gap-2">
                    <button
                      onClick={openEditBusForm}
                      className="crm-tonal-btn h-9 w-9 p-0 flex items-center justify-center rounded-full"
                      style={{ minHeight: 0 }}
                      title="Редактировать"
                    >
                      <IconEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="crm-danger-btn h-9 w-9 p-0 flex items-center justify-center rounded-full"
                      style={{ minHeight: 0 }}
                      title="Удалить"
                    >
                      <IconTrash className="h-5 w-5" />
                    </button>
                  </div>
                }
              >
                {showEditBusForm && (
                  <form onSubmit={handleUpdateBusiness} className="crm-soft-card p-4 space-y-4">
                    <p className="text-sm font-semibold text-[color:var(--crm-primary)]">
                      Редактировать организацию
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 text-xs">
                      <label className="block space-y-1">
                        <span className="text-[var(--crm-muted)]">Название</span>
                        <input
                          value={editBusName}
                          onChange={(e) => setEditBusName(e.target.value)}
                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                          required
                        />
                      </label>
                      <label className="block space-y-1">
                        <span className="text-[var(--crm-muted)]">Поддомен</span>
                        <input
                          value={editBusSubdomain}
                          onChange={(e) => setEditBusSubdomain(e.target.value)}
                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                          placeholder="Необязательно"
                        />
                      </label>
                      <label className="block space-y-1">
                        <span className="text-[var(--crm-muted)]">Свой домен сайта</span>
                        <input
                          value={editBusCustomDomain}
                          onChange={(e) => setEditBusCustomDomain(e.target.value)}
                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                          placeholder="brothershop.website"
                        />
                      </label>
                      <label className="block space-y-1">
                        <span className="text-[var(--crm-muted)]">Свой домен CRM</span>
                        <input
                          value={editBusCustomCrmDomain}
                          onChange={(e) => setEditBusCustomCrmDomain(e.target.value)}
                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                          placeholder="panel.brothershop.website"
                        />
                      </label>
                      <div className="flex items-center gap-2 pt-6">
                        <input
                          type="checkbox"
                          id="editBusActive"
                          checked={editBusActive}
                          onChange={(e) => setEditBusActive(e.target.checked)}
                          className="crm-toggle-check"
                        />
                        <label htmlFor="editBusActive" className="text-xs text-[var(--crm-text)]">
                          Организация активна
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end text-xs">
                      <button
                        type="button"
                        onClick={() => setShowEditBusForm(false)}
                        className="crm-ghost-btn px-4 py-2 font-semibold"
                      >
                        Отмена
                      </button>
                      <button
                        type="submit"
                        disabled={updatingBusiness}
                        className="crm-action-btn px-4 py-2 font-semibold"
                      >
                        {updatingBusiness ? 'Сохранение...' : 'Сохранить'}
                      </button>
                    </div>
                  </form>
                )}

                {showDeleteConfirm && (
                  <form onSubmit={handleDeleteBusiness} className="crm-soft-card p-4 border border-rose-500/20 bg-rose-500/5 space-y-4">
                    <p className="text-sm font-semibold text-rose-300">
                      Подтверждение удаления организации
                    </p>
                    <p className="text-xs text-rose-200/80">
                      Внимание! Это действие безвозвратно удалит все данные организации (схему базы данных, записи, сотрудников и клиентов). Для подтверждения введите пароль Создателя:
                    </p>
                    <div className="text-xs">
                      <label className="block space-y-1">
                        <span className="text-rose-300">Пароль Создателя</span>
                        <input
                          type="password"
                          value={deletePassword}
                          onChange={(e) => setDeletePassword(e.target.value)}
                          className="w-full bg-[color:var(--crm-surface-2)] border border-rose-500/30 text-white rounded-xl px-3 py-2 focus:ring-1 focus:ring-rose-500"
                          placeholder="Пароль"
                          required
                        />
                      </label>
                    </div>
                    <div className="flex gap-2 justify-end text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setShowDeleteConfirm(false);
                          setDeletePassword('');
                        }}
                        className="crm-ghost-btn px-4 py-2 font-semibold text-white"
                      >
                        Отмена
                      </button>
                      <button
                        type="submit"
                        disabled={deletingBusiness}
                        className="crm-danger-btn px-4 py-2 font-semibold"
                      >
                        {deletingBusiness ? 'Удаление...' : 'Да, удалить организацию'}
                      </button>
                    </div>
                  </form>
                )}

                {!showEditBusForm && !showDeleteConfirm && (
                  <div className="crm-soft-card p-4 space-y-3 text-xs">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <span className="text-[var(--crm-muted)] block">Схема БД:</span>
                        <span className="font-mono text-white text-sm break-all">{activeBusiness.dbSchema}</span>
                      </div>
                      <div>
                        <span className="text-[var(--crm-muted)] block">Статус:</span>
                        {activeBusiness.isActive !== false ? (
                          <span className="text-emerald-400 font-semibold">Активна</span>
                        ) : (
                          <span className="text-rose-400 font-semibold">Отключена</span>
                        )}
                      </div>
                    </div>
                    <div className="border-t border-white/5 pt-3 space-y-3">
                      <p className="font-semibold text-white">Адреса для доступа:</p>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Production URLs */}
                        <div className="space-y-3">
                          <span className="text-[color:var(--crm-primary)] font-semibold block text-xs uppercase tracking-wider">В продакшене:</span>
                          <div className="text-xs space-y-2">
                            <div>
                              <span className="text-[var(--crm-muted)] block mb-0.5">Сайт (Клиенты): </span>
                              <a 
                                href={activeBusiness.customDomain ? `https://${activeBusiness.customDomain}/` : `https://${activeBusiness.subdomain}.brothershop.website/`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[color:var(--crm-primary)] break-all font-medium"
                              >
                                {activeBusiness.customDomain ? activeBusiness.customDomain : `${activeBusiness.subdomain}.brothershop.website`}
                              </a>
                            </div>
                            <div>
                              <span className="text-[var(--crm-muted)] block mb-0.5">CRM (Панель управления): </span>
                              <a 
                                href={activeBusiness.customCrmDomain ? `https://${activeBusiness.customCrmDomain}/` : (activeBusiness.customDomain ? `https://panel.${activeBusiness.customDomain}/` : `https://panel.${activeBusiness.subdomain}.brothershop.website/`)}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[color:var(--crm-primary)] break-all font-medium"
                              >
                                {activeBusiness.customCrmDomain ? activeBusiness.customCrmDomain : (activeBusiness.customDomain ? `panel.${activeBusiness.customDomain}` : `panel.${activeBusiness.subdomain}.brothershop.website`)}
                              </a>
                            </div>
                            <div className="pt-1 border-t border-white/5">
                              <span className="text-[var(--crm-muted)] block mb-0.5">Общая CRM (Авторизация): </span>
                              <a 
                                href="https://panel.brothershop.website/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[color:var(--crm-primary)] break-all font-medium"
                              >
                                panel.brothershop.website
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Local Testing URLs */}
                        <div className="space-y-3">
                          <span className="text-yellow-400 font-semibold block text-xs uppercase tracking-wider">Локально (тесты):</span>
                          <div className="text-xs space-y-3">
                            {/* Via Query Parameter */}
                            <div className="space-y-1">
                              <span className="text-[var(--crm-muted)] block text-[10px] uppercase tracking-wider text-yellow-500/80">Через query-параметры:</span>
                              <div>
                                <span className="text-[var(--crm-muted)]">Сайт: </span>
                                <a 
                                  href={`http://localhost:${window.location.port || '3000'}/?businessId=${activeBusiness.id}`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-white underline hover:text-yellow-400 break-all font-medium"
                                >
                                  localhost:{window.location.port || '3000'}/?businessId=...
                                </a>
                              </div>
                              <div>
                                <span className="text-[var(--crm-muted)]">CRM: </span>
                                <a 
                                  href={`http://localhost:${window.location.port || '3000'}/panel/?businessId=${activeBusiness.id}`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-white underline hover:text-yellow-400 break-all font-medium"
                                >
                                  localhost:{window.location.port || '3000'}/panel/?businessId=...
                                </a>
                              </div>
                              <div>
                                <span className="text-[var(--crm-muted)]">Общий вход CRM: </span>
                                <a 
                                  href={`http://localhost:${window.location.port || '3000'}/panel/`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-white underline hover:text-yellow-400 break-all font-medium"
                                >
                                  localhost:{window.location.port || '3000'}/panel/
                                </a>
                              </div>
                            </div>
                            
                            {/* Via Local Subdomain */}
                            <div className="space-y-1 pt-1 border-t border-white/5">
                              <span className="text-[var(--crm-muted)] block text-[10px] uppercase tracking-wider text-yellow-500/80">Через локальный поддомен:</span>
                              <div>
                                <span className="text-[var(--crm-muted)]">Сайт: </span>
                                <a 
                                  href={`http://${activeBusiness.subdomain}.localhost:${window.location.port || '3000'}/`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-white underline hover:text-yellow-400 break-all font-medium"
                                >
                                  {activeBusiness.subdomain}.localhost:{window.location.port || '3000'}/
                                </a>
                              </div>
                              <div>
                                <span className="text-[var(--crm-muted)]">CRM: </span>
                                <a 
                                  href={`http://${activeBusiness.subdomain}.localhost:${window.location.port || '3000'}/panel/`}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-white underline hover:text-yellow-400 break-all font-medium"
                                >
                                  {activeBusiness.subdomain}.localhost:{window.location.port || '3000'}/panel/
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SectionCard>

              <SectionCard 
                title={`Сотрудники: ${activeBusiness.name}`} 
                actions={
                  <button 
                    onClick={openNewBarberForm}
                    className="crm-action-btn h-9 w-9 p-0 flex items-center justify-center rounded-full"
                    style={{ minHeight: 0 }}
                    title="Добавить сотрудника"
                  >
                    <IconPlus className="h-5 w-5" />
                  </button>
                }
              >
              {showBarberForm && !editingBarber && (
                <form onSubmit={handleSaveBarber} className="crm-soft-card p-4 space-y-4 mb-4">
                  <p className="text-sm font-semibold text-[color:var(--crm-primary)]">
                    Добавить сотрудника
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <label className="block space-y-1">
                      <span className="text-[var(--crm-muted)]">ФИО сотрудника</span>
                      <input 
                        value={barberFormName} 
                        onChange={e => setBarberFormName(e.target.value)} 
                        className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                        placeholder="Иван Иванов"
                        required
                      />
                    </label>
                    <label className="block space-y-1">
                      <span className="text-[var(--crm-muted)]">Номер телефона (для входа/связи)</span>
                      <input 
                        value={barberFormPhone} 
                        onChange={e => setBarberFormPhone(formatPhoneDisplay(e.target.value))} 
                        className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                        placeholder="+7 999 888-77-66"
                        required
                      />
                    </label>
                    <label className="block space-y-1">
                      <span className="text-[var(--crm-muted)]">Пароль</span>
                      <input 
                        type="text"
                        value={barberFormPassword} 
                        onChange={e => setBarberFormPassword(e.target.value)} 
                        className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                        placeholder="Минимум 6 символов"
                        required
                      />
                    </label>
                    <label className="block space-y-1">
                      <span className="text-[var(--crm-muted)]">Роль</span>
                      <select 
                        value={barberFormRole}
                        onChange={e => setBarberFormRole(e.target.value)}
                        className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                      >
                        <option value="staff">Сотрудник</option>
                        <option value="owner">Владелец (Owner)</option>
                      </select>
                    </label>
                    <div className="flex items-center gap-2 pt-6">
                      <input 
                        type="checkbox"
                        id="barberFormActive"
                        checked={barberFormActive}
                        onChange={e => setBarberFormActive(e.target.checked)}
                        className="crm-toggle-check"
                      />
                      <label htmlFor="barberFormActive" className="text-xs text-[var(--crm-text)]">
                        Сотрудник активен
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end text-xs">
                    <button 
                      type="button"
                      onClick={() => {
                        setShowBarberForm(false);
                        setEditingBarber(null);
                      }} 
                      className="crm-ghost-btn px-4 py-2 font-semibold"
                    >
                      Отмена
                    </button>
                    <button 
                      type="submit" 
                      disabled={savingBarber}
                      className="crm-action-btn px-4 py-2 font-semibold"
                    >
                      {savingBarber ? 'Сохранение...' : 'Сохранить'}
                    </button>
                  </div>
                </form>
              )}

              <div className="crm-table-shell overflow-x-auto hidden md:block">
                <table className="min-w-full border-collapse text-xs text-[var(--crm-text)]">
                  <thead>
                    <tr className="bg-[color:var(--crm-surface-4)] text-left">
                      <th className="p-3 font-semibold border-b border-white/5">Имя</th>
                      <th className="p-3 font-semibold border-b border-white/5">Телефон</th>
                      <th className="p-3 font-semibold border-b border-white/5">Роль</th>
                      <th className="p-3 font-semibold border-b border-white/5">Статус</th>
                      <th className="p-3 font-semibold border-b border-white/5 text-right">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingBarbers ? (
                      <tr>
                        <td colSpan="5" className="p-4 text-center text-[var(--crm-muted)]">Загрузка сотрудников...</td>
                      </tr>
                    ) : barbers.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="p-4 text-center text-[var(--crm-muted)]">Сотрудники не добавлены</td>
                      </tr>
                    ) : (
                      barbers.map((barber) => {
                        const isEditingThisBarber = showBarberForm && editingBarber?.id === barber.id;
                        return (
                          <Fragment key={barber.id}>
                            <tr className="hover:bg-white/5 transition">
                              <td className="p-3 border-b border-white/5 font-semibold text-white">{barber.name}</td>
                              <td className="p-3 border-b border-white/5">{barber.phone || '—'}</td>
                              <td className="p-3 border-b border-white/5">
                                {barber.role === 'owner' ? (
                                  <span className="text-[color:var(--crm-primary)] font-semibold">Владелец</span>
                                ) : (
                                  <span>Сотрудник</span>
                                )}
                              </td>
                              <td className="p-3 border-b border-white/5">
                                {barber.isActive !== false ? (
                                  <span className="text-emerald-400">Активен</span>
                                ) : (
                                  <span className="text-rose-400">Заблокирован</span>
                                )}
                              </td>
                              <td className="p-3 border-b border-white/5 text-right space-x-1">
                                <button
                                  onClick={() => onImpersonate(activeBusiness.id, barber.id)}
                                  className="crm-tonal-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                  style={{ minHeight: 0 }}
                                  title="Войти под этим сотрудником"
                                >
                                  <IconLogin className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => openEditBarberForm(barber)}
                                  className="crm-ghost-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                  style={{ minHeight: 0 }}
                                  title="Редактировать"
                                >
                                  <IconEdit className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteBarber(barber.id)}
                                  className="crm-danger-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                  style={{ minHeight: 0 }}
                                  title="Удалить"
                                >
                                  <IconTrash className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                            {isEditingThisBarber && (
                              <tr>
                                <td colSpan="5" className="p-4 bg-[color:var(--crm-surface-3)] border-b border-white/5">
                                  <form onSubmit={handleSaveBarber} className="space-y-4">
                                    <p className="text-sm font-semibold text-[color:var(--crm-primary)]">
                                      Редактировать сотрудника: {barber.name}
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-2 text-xs">
                                      <label className="block space-y-1">
                                        <span className="text-[var(--crm-muted)]">ФИО сотрудника</span>
                                        <input 
                                          value={barberFormName} 
                                          onChange={e => setBarberFormName(e.target.value)} 
                                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                          placeholder="Иван Иванов"
                                          required
                                        />
                                      </label>
                                      <label className="block space-y-1">
                                        <span className="text-[var(--crm-muted)]">Номер телефона (для входа/связи)</span>
                                        <input 
                                          value={barberFormPhone} 
                                          onChange={e => setBarberFormPhone(formatPhoneDisplay(e.target.value))} 
                                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                          placeholder="+7 999 888-77-66"
                                          required
                                        />
                                      </label>
                                      <label className="block space-y-1">
                                        <span className="text-[var(--crm-muted)]">Пароль</span>
                                        <input 
                                          type="text"
                                          value={barberFormPassword} 
                                          onChange={e => setBarberFormPassword(e.target.value)} 
                                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                          placeholder="Минимум 6 символов"
                                          required
                                        />
                                      </label>
                                      <label className="block space-y-1">
                                        <span className="text-[var(--crm-muted)]">Роль</span>
                                        <select 
                                          value={barberFormRole}
                                          onChange={e => setBarberFormRole(e.target.value)}
                                          className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                        >
                                          <option value="staff">Сотрудник</option>
                                          <option value="owner">Владелец (Owner)</option>
                                        </select>
                                      </label>
                                      <div className="flex items-center gap-2 pt-6">
                                        <input 
                                          type="checkbox"
                                          id="barberFormActiveEdit"
                                          checked={barberFormActive}
                                          onChange={e => setBarberFormActive(e.target.checked)}
                                          className="crm-toggle-check"
                                        />
                                        <label htmlFor="barberFormActiveEdit" className="text-xs text-[var(--crm-text)]">
                                          Сотрудник активен
                                        </label>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 justify-end text-xs">
                                      <button 
                                        type="button"
                                        onClick={() => {
                                          setShowBarberForm(false);
                                          setEditingBarber(null);
                                        }} 
                                        className="crm-ghost-btn px-4 py-2 font-semibold"
                                      >
                                        Отмена
                                      </button>
                                      <button 
                                        type="submit" 
                                        disabled={savingBarber}
                                        className="crm-action-btn px-4 py-2 font-semibold"
                                      >
                                        {savingBarber ? 'Сохранение...' : 'Сохранить'}
                                      </button>
                                    </div>
                                  </form>
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile list view */}
              <div className="block md:hidden space-y-3">
                {loadingBarbers ? (
                  <div className="p-4 text-center text-[var(--crm-muted)] text-xs">Загрузка сотрудников...</div>
                ) : barbers.length === 0 ? (
                  <div className="p-4 text-center text-[var(--crm-muted)] text-xs">Сотрудники не добавлены</div>
                ) : (
                  barbers.map((barber) => {
                    const isEditingThisBarber = showBarberForm && editingBarber?.id === barber.id;
                    return (
                      <Fragment key={barber.id}>
                        <div className="crm-soft-card p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold text-white text-sm">{barber.name}</div>
                              <div className="text-xs text-[var(--crm-muted)] mt-0.5">{barber.phone || '—'}</div>
                            </div>
                            <div className="flex flex-col items-end text-xs">
                              {barber.role === 'owner' ? (
                                <span className="text-[color:var(--crm-primary)] font-semibold">Владелец</span>
                              ) : (
                                <span className="text-[var(--crm-muted)]">Сотрудник</span>
                              )}
                              <span className={`text-[10px] mt-1 ${barber.isActive !== false ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {barber.isActive !== false ? 'Активен' : 'Заблокирован'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2 border-t border-white/5">
                            <span className="text-xs text-[var(--crm-muted)] font-medium">Действия</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => onImpersonate(activeBusiness.id, barber.id)}
                                className="crm-tonal-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                style={{ minHeight: 0 }}
                                title="Войти под этим сотрудником"
                              >
                                <IconLogin className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => openEditBarberForm(barber)}
                                className="crm-ghost-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                style={{ minHeight: 0 }}
                                title="Редактировать"
                              >
                                <IconEdit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteBarber(barber.id)}
                                className="crm-danger-btn h-8 w-8 p-0 inline-flex items-center justify-center rounded-full"
                                style={{ minHeight: 0 }}
                                title="Удалить"
                              >
                                <IconTrash className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {isEditingThisBarber && (
                          <div className="p-4 bg-[color:var(--crm-surface-3)] border-b border-white/5 rounded-xl my-2">
                            <form onSubmit={handleSaveBarber} className="space-y-4">
                              <p className="text-sm font-semibold text-[color:var(--crm-primary)]">
                                Редактировать сотрудника: {barber.name}
                              </p>
                              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                                <label className="block space-y-1">
                                  <span className="text-[var(--crm-muted)]">ФИО сотрудника</span>
                                  <input 
                                    value={barberFormName} 
                                    onChange={e => setBarberFormName(e.target.value)} 
                                    className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                    placeholder="Иван Иванов"
                                    required
                                  />
                                </label>
                                <label className="block space-y-1">
                                  <span className="text-[var(--crm-muted)]">Номер телефона (для входа/связи)</span>
                                  <input 
                                    value={barberFormPhone} 
                                    onChange={e => setBarberFormPhone(formatPhoneDisplay(e.target.value))} 
                                    className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                    placeholder="+7 999 888-77-66"
                                    required
                                  />
                                </label>
                                <label className="block space-y-1">
                                  <span className="text-[var(--crm-muted)]">Пароль</span>
                                  <input 
                                    type="text"
                                    value={barberFormPassword} 
                                    onChange={e => setBarberFormPassword(e.target.value)} 
                                    className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                    placeholder="Минимум 6 символов"
                                    required
                                  />
                                </label>
                                <label className="block space-y-1">
                                  <span className="text-[var(--crm-muted)]">Роль</span>
                                  <select 
                                    value={barberFormRole}
                                    onChange={e => setBarberFormRole(e.target.value)}
                                    className="w-full bg-[color:var(--crm-surface-2)] border-0 text-white rounded-xl px-3 py-2"
                                  >
                                    <option value="staff">Сотрудник</option>
                                    <option value="owner">Владелец (Owner)</option>
                                  </select>
                                </label>
                                <div className="flex items-center gap-2 pt-6">
                                  <input 
                                    type="checkbox"
                                    id="barberFormActiveEditMob"
                                    checked={barberFormActive}
                                    onChange={e => setBarberFormActive(e.target.checked)}
                                    className="crm-toggle-check"
                                  />
                                  <label htmlFor="barberFormActiveEditMob" className="text-xs text-[var(--crm-text)]">
                                    Сотрудник активен
                                  </label>
                                </div>
                              </div>
                              <div className="flex gap-2 justify-end text-xs">
                                <button 
                                  type="button"
                                  onClick={() => {
                                    setShowBarberForm(false);
                                    setEditingBarber(null);
                                  }} 
                                  className="crm-ghost-btn px-4 py-2 font-semibold"
                                >
                                  Отмена
                                </button>
                                <button 
                                  type="submit" 
                                  disabled={savingBarber}
                                  className="crm-action-btn px-4 py-2 font-semibold"
                                >
                                  {savingBarber ? 'Сохранение...' : 'Сохранить'}
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </Fragment>
                    );
                  })
                )}
              </div>
            </SectionCard>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SystemSettingsView = ({ section = 'bot', onSectionChange, ...props }) => {
  const role = props.role || ROLE_OWNER;
  const sections = getSystemSubSections(role, props.session?.isImpersonated);
  const activeSection = sections.some((tab) => tab.id === section) ? section : (sections[0]?.id || 'bot');
  
  useEffect(() => {
    if (activeSection !== section) {
      onSectionChange?.(activeSection);
    }
  }, [activeSection, section, onSectionChange]);

  if (activeSection === 'businesses') {
    return <CreatorBusinessesView {...props} />;
  }

  return (
    <div className="space-y-4">
      {activeSection === 'site' ? (
        <SiteSettingsView {...props} />
      ) : (
        <BotControlView {...props} viewMode={activeSection === 'settings' ? 'system' : activeSection} />
      )}
    </div>
  );
};

const SITE_PAGE_TABS = Object.freeze([
  { id: 'home', label: 'Главная' },
  { id: 'referral', label: 'Рефералы' },
  { id: 'shop', label: 'Магазин' },
]);

const createSitePromoDraft = () => ({
  id: `promo-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
  title: '',
  subtitle: '',
  imageUrl: '',
  details: '',
  buttonLabel: '',
  buttonUrl: '',
});

const createReferralRewardDraft = () => ({
  id: `reward-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
  label: '',
  bsAmount: 0,
});

const createReferralLevelDraft = () => ({
  id: `level-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
  name: '',
  minReferrals: 0,
  maxReferrals: '',
  serviceRewards: [createReferralRewardDraft()],
});

const SiteImageUploadField = ({ label, value = '', onChange, onUploadImage = null, helperText = '' }) => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const preview = normalizeImagePath(value || '');

  const handleFileChange = useCallback(async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || typeof onUploadImage !== 'function') return;
    if (!file.type.startsWith('image/')) {
      setError('Нужен файл изображения.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const data = await readFileAsDataUrl(file);
      const optimizedUpload = await optimizeImageForUpload(data, {
        name: file.name,
        preserveAlpha: false,
      });
      const result = await onUploadImage({ name: optimizedUpload.name, data: optimizedUpload.dataUrl });
      const nextValue = normalizeImagePath(result?.path || result?.image || '');
      onChange?.(nextValue);
    } catch (uploadError) {
      setError(uploadError.message || 'Не удалось загрузить изображение.');
    } finally {
      setBusy(false);
    }
  }, [onUploadImage, onChange]);

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-[var(--crm-text)]">{label}</span>
      <div className="crm-inline-panel p-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="crm-soft-panel h-24 w-full max-w-[160px] overflow-hidden">
            {preview ? (
              <img src={preview} alt={label} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center px-3 text-center text-xs text-[var(--crm-muted)]">Изображение не загружено</div>
            )}
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap gap-2">
              <label className="crm-action-btn inline-flex cursor-pointer items-center px-3 py-2 text-sm">
                {busy ? 'Загрузка...' : preview ? 'Заменить изображение' : 'Загрузить изображение'}
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={busy || typeof onUploadImage !== 'function'} />
              </label>
              {preview ? (
                <button type="button" onClick={() => onChange?.('')} className="crm-ghost-btn px-3 py-2 text-sm font-medium">
                  Удалить
                </button>
              ) : null}
            </div>
            {helperText ? <p className="text-xs leading-5 text-[var(--crm-muted)]">{helperText}</p> : null}
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const SiteSettingsView = ({ siteConfig = null, onSaveSite = null, siteSaving = false, onUploadSiteImage = null, services = [], siteOnlineStats = null }) => {
  const [draft, setDraft] = useState(() => siteConfig || {});
  const [activeTab, setActiveTab] = useState('home');
  const { trackRef, setItemRef, indicatorStyle } = useMovingNavIndicator(activeTab);

  useEffect(() => {
    setDraft(siteConfig || {});
  }, [siteConfig]);

  const updateSectionField = (section, key, value) =>
    setDraft((prev) => ({ ...prev, [section]: { ...(prev?.[section] || {}), [key]: value } }));
  const updateHomeField = (key, value) => updateSectionField('home', key, value);
  const updateReferralField = (key, value) => updateSectionField('referral', key, value);
  const updateShopField = (key, value) => updateSectionField('shop', key, value);
  const updateAuthField = (key, value) => updateSectionField('auth', key, value);

  const promos = Array.isArray(draft?.home?.promos) ? draft.home.promos : [];
  const referralLevels = Array.isArray(draft?.referral?.levels) ? draft.referral.levels : [];
  const serviceOptions = useMemo(
    () => Array.from(new Set((Array.isArray(services) ? services : []).map((service) => normalizeText(service?.name)).filter(Boolean))),
    [services]
  );
  const derivedReferralRewardColumns = useMemo(() => {
    const labels = [];
    referralLevels.forEach((level) => {
      const rewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
      rewards.forEach((reward) => {
        const label = normalizeText(reward?.label);
        if (label && !labels.includes(label)) labels.push(label);
      });
    });
    return labels.map((label, index) => ({ id: `column-${index + 1}`, labels: [label] }));
  }, [referralLevels]);
  const referralRewardColumns = useMemo(() => {
    const configured = Array.isArray(draft?.referral?.rewardColumns) ? draft.referral.rewardColumns : [];
    const sanitized = configured
      .map((column, index) => ({
        id: column?.id || `column-${index + 1}`,
        labels: Array.from(new Set((Array.isArray(column?.labels) ? column.labels : []).map((item) => normalizeText(item)).filter(Boolean))),
      }))
      .filter((column) => column.labels.length > 0);
    return sanitized.length ? sanitized : derivedReferralRewardColumns;
  }, [draft?.referral?.rewardColumns, derivedReferralRewardColumns]);
  const onlineCount = Number.isFinite(Number(siteOnlineStats?.onlineCount)) ? Number(siteOnlineStats.onlineCount) : 0;
  const siteUpdatedAt = normalizeText(siteOnlineStats?.updatedAt);

  const updatePromos = (updater) =>
    setDraft((prev) => {
      const currentPromos = Array.isArray(prev?.home?.promos) ? prev.home.promos : [];
      const nextPromos = typeof updater === 'function' ? updater(currentPromos) : updater;
      return { ...prev, home: { ...(prev?.home || {}), promos: nextPromos } };
    });
  const updatePromoField = (index, key, value) =>
    updatePromos((current) => current.map((promo, promoIndex) => (promoIndex === index ? { ...promo, [key]: value } : promo)));
  const addPromo = () => updatePromos((current) => [...current, createSitePromoDraft()]);
  const removePromo = (index) => updatePromos((current) => current.filter((_, promoIndex) => promoIndex !== index));

  const updateReferralLevels = (updater) =>
    setDraft((prev) => {
      const currentLevels = Array.isArray(prev?.referral?.levels) ? prev.referral.levels : [];
      const nextLevels = typeof updater === 'function' ? updater(currentLevels) : updater;
      return { ...prev, referral: { ...(prev?.referral || {}), levels: nextLevels } };
    });
  const updateReferralLevelField = (index, key, value) =>
    updateReferralLevels((levels) => levels.map((level, levelIndex) => (levelIndex === index ? { ...level, [key]: value } : level)));
  const addReferralLevel = () => updateReferralLevels((levels) => [...levels, createReferralLevelDraft()]);
  const removeReferralLevel = (index) => updateReferralLevels((levels) => levels.filter((_, levelIndex) => levelIndex !== index));
  const moveReferralLevel = (index, direction) =>
    updateReferralLevels((levels) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= levels.length) return levels;
      const next = [...levels];
      const [item] = next.splice(index, 1);
      next.splice(nextIndex, 0, item);
      return next;
    });
  const updateReferralRewards = (levelIndex, updater) =>
    updateReferralLevels((levels) => levels.map((level, currentIndex) => {
      if (currentIndex !== levelIndex) return level;
      const currentRewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
      const nextRewards = typeof updater === 'function' ? updater(currentRewards) : updater;
      return { ...level, serviceRewards: nextRewards };
    }));
  const updateReferralRewardField = (levelIndex, rewardIndex, key, value) =>
    updateReferralRewards(levelIndex, (rewards) => rewards.map((reward, currentIndex) => (currentIndex === rewardIndex ? { ...reward, [key]: value } : reward)));
  const addReferralReward = (levelIndex) => updateReferralRewards(levelIndex, (rewards) => [...rewards, createReferralRewardDraft()]);
  const removeReferralReward = (levelIndex, rewardIndex) => updateReferralRewards(levelIndex, (rewards) => rewards.filter((_, currentIndex) => currentIndex !== rewardIndex));
  const setReferralRewardColumns = (updater) =>
    setDraft((prev) => {
      const currentColumns = Array.isArray(prev?.referral?.rewardColumns) ? prev.referral.rewardColumns : referralRewardColumns;
      const nextColumns = typeof updater === 'function' ? updater(currentColumns) : updater;
      return {
        ...prev,
        referral: {
          ...(prev?.referral || {}),
          rewardColumns: nextColumns,
        },
      };
    });
  const setReferralRewardAmount = (levelIndex, column, value) =>
    updateReferralLevels((levels) =>
      levels.map((level, currentIndex) => {
        if (currentIndex !== levelIndex) return level;
        const rewards = Array.isArray(level?.serviceRewards) ? [...level.serviceRewards] : [];
        const labels = Array.isArray(column?.labels) ? column.labels.map((item) => normalizeText(item)).filter(Boolean) : [];
        const nextRewards = rewards.filter((reward) => !labels.includes(normalizeText(reward?.label)));
        labels.forEach((label) => {
          nextRewards.push({ ...createReferralRewardDraft(), label, bsAmount: value });
        });
        return { ...level, serviceRewards: nextRewards };
      })
    );
  const updateReferralRewardColumnLabels = (columnId, nextLabels) => {
    const normalizedNext = Array.from(new Set((Array.isArray(nextLabels) ? nextLabels : []).map((item) => normalizeText(item)).filter(Boolean)));
    const currentColumn = referralRewardColumns.find((column) => column.id === columnId) || { id: columnId, labels: [] };
    const previousLabels = currentColumn.labels.map((item) => normalizeText(item)).filter(Boolean);
    setReferralRewardColumns((columns) =>
      columns.map((column) => (column.id === columnId ? { ...column, labels: normalizedNext } : column))
    );
    updateReferralLevels((levels) =>
      levels.map((level) => {
        const rewards = Array.isArray(level?.serviceRewards) ? [...level.serviceRewards] : [];
        const preservedAmount =
          rewards.find((reward) => previousLabels.includes(normalizeText(reward?.label)))?.bsAmount ?? 0;
        const filtered = rewards.filter((reward) => !previousLabels.includes(normalizeText(reward?.label)));
        normalizedNext.forEach((label) => {
          filtered.push({ ...createReferralRewardDraft(), label, bsAmount: preservedAmount });
        });
        return { ...level, serviceRewards: filtered };
      })
    );
  };
  const addReferralRewardColumn = () => {
    const nextLabel =
      serviceOptions.find((option) => !referralRewardColumns.some((column) => column.labels.includes(option))) ||
      `Услуга ${referralRewardColumns.length + 1}`;
    setReferralRewardColumns((columns) => [
      ...columns,
      { id: `column-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`, labels: [nextLabel] },
    ]);
  };
  const removeReferralRewardColumn = (columnId) => {
    const currentColumn = referralRewardColumns.find((column) => column.id === columnId);
    const labelsToRemove = Array.isArray(currentColumn?.labels) ? currentColumn.labels.map((item) => normalizeText(item)).filter(Boolean) : [];
    setReferralRewardColumns((columns) => columns.filter((column) => column.id !== columnId));
    if (!labelsToRemove.length) return;
    updateReferralLevels((levels) =>
      levels.map((level) => ({
        ...level,
        serviceRewards: (Array.isArray(level?.serviceRewards) ? level.serviceRewards : []).filter(
          (reward) => !labelsToRemove.includes(normalizeText(reward?.label))
        ),
      }))
    );
  };
  const getReferralRewardAmount = (level, column) => {
    const rewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
    const labels = Array.isArray(column?.labels) ? column.labels.map((item) => normalizeText(item)) : [];
    const match = rewards.find((reward) => labels.includes(normalizeText(reward?.label)));
    return match?.bsAmount ?? '';
  };

  const handleSave = async () => {
    if (!onSaveSite) return;
    await onSaveSite(draft);
  };

  const renderHomeTab = () => (
    <div className="space-y-5">
      <SectionCard title="Авторизация">
        <div className="crm-soft-card flex flex-col gap-3 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Вход через VK ID</p>
              <p className="mt-1 text-sm text-[var(--crm-muted)]">Показывать кнопку VK ID на клиентском сайте.</p>
            </div>
            <button
              type="button"
              onClick={() => updateAuthField('vkIdEnabled', !(draft?.auth?.vkIdEnabled === true))}
              className={classNames(
                'min-w-[112px] px-4 py-2 text-sm',
                draft?.auth?.vkIdEnabled === true ? 'crm-action-btn' : 'crm-ghost-btn'
              )}
            >
              {draft?.auth?.vkIdEnabled === true ? 'Включено' : 'Выключено'}
            </button>
          </div>
          <label className="space-y-2 text-sm text-[var(--crm-text)]">
            <span>VK App ID</span>
            <input
              value={draft?.auth?.vkIdAppId || ''}
              onChange={(event) => updateAuthField('vkIdAppId', event.target.value)}
              placeholder="Например, 12345678"
              className="w-full px-4 py-3"
            />
          </label>
        </div>
      </SectionCard>

      <SectionCard title="Главная страница">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Название в шапке</span>
                <input value={draft?.home?.logoText || ''} onChange={(event) => updateHomeField('logoText', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Текст кнопки записи</span>
                <input value={draft?.home?.bookingButtonText || ''} onChange={(event) => updateHomeField('bookingButtonText', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
                <span>Заголовок блока о бренде</span>
                <input value={draft?.home?.aboutTitle || ''} onChange={(event) => updateHomeField('aboutTitle', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
                <span>Текст блока о бренде</span>
                <textarea value={draft?.home?.aboutText || ''} onChange={(event) => updateHomeField('aboutText', event.target.value)} rows={5} className="w-full px-4 py-3" />
              </label>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Заголовок контактов</span>
                <input value={draft?.home?.contactsTitle || ''} onChange={(event) => updateHomeField('contactsTitle', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Телефон</span>
                <input value={draft?.home?.phone || ''} onChange={(event) => updateHomeField('phone', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Telegram</span>
                <input value={draft?.home?.telegramUrl || ''} onChange={(event) => updateHomeField('telegramUrl', event.target.value)} className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-[var(--crm-text)]">
                <span>Email</span>
                <input value={draft?.home?.email || ''} onChange={(event) => updateHomeField('email', event.target.value)} className="w-full px-4 py-3" />
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <SiteImageUploadField label="Изображение блока о бренде" value={draft?.home?.aboutImageUrl || ''} onChange={(value) => updateHomeField('aboutImageUrl', value)} onUploadImage={onUploadSiteImage} helperText="Изображение для блока о бренде на главной." />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Карта и контакты">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="space-y-2 text-sm text-[var(--crm-text)]">
              <span>Заголовок карты</span>
              <input value={draft?.home?.mapTitle || ''} onChange={(event) => updateHomeField('mapTitle', event.target.value)} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)]">
              <span>Ссылка на карту</span>
              <input value={draft?.home?.mapLink || ''} onChange={(event) => updateHomeField('mapLink', event.target.value)} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
              <span>Подпись под картой</span>
              <textarea value={draft?.home?.mapCaption || ''} onChange={(event) => updateHomeField('mapCaption', event.target.value)} rows={3} className="w-full px-4 py-3" />
            </label>
          </div>
          <SiteImageUploadField label="Изображение карты" value={draft?.home?.mapImageUrl || ''} onChange={(value) => updateHomeField('mapImageUrl', value)} onUploadImage={onUploadSiteImage} />
        </div>
      </SectionCard>

      <SectionCard title="Акции" actions={<button type="button" onClick={addPromo} className="crm-action-btn px-4 py-2 text-sm">Добавить акцию</button>}>
        <div className="space-y-4">
          {!promos.length ? (
            <div className="crm-inline-panel px-4 py-8 text-center text-sm text-[var(--crm-muted)]">
              Акции пока не добавлены.
            </div>
          ) : null}
          {promos.map((promo, index) => (
            <div key={promo.id || index} className="crm-soft-card p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">Акция {index + 1}</p>
                  <p className="text-xs text-[var(--crm-muted)]">Карточка промо-блока на главной.</p>
                </div>
                <button type="button" onClick={() => removePromo(index)} className="crm-danger-btn px-3 py-2 text-sm">
                  Удалить
                </button>
              </div>
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_240px]">
                <div className="grid gap-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="space-y-2 text-sm text-[var(--crm-text)]">
                      <span>Заголовок</span>
                      <input value={promo.title || ''} onChange={(event) => updatePromoField(index, 'title', event.target.value)} className="w-full px-4 py-3" />
                    </label>
                    <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
                      <span>Подзаголовок</span>
                      <input value={promo.subtitle || ''} onChange={(event) => updatePromoField(index, 'subtitle', event.target.value)} className="w-full px-4 py-3" />
                    </label>
                    <label className="space-y-2 text-sm text-[var(--crm-text)]">
                      <span>Текст кнопки</span>
                      <input value={promo.buttonLabel || ''} onChange={(event) => updatePromoField(index, 'buttonLabel', event.target.value)} placeholder="Подробнее" className="w-full px-4 py-3" />
                    </label>
                    <label className="space-y-2 text-sm text-[var(--crm-text)]">
                      <span>Ссылка кнопки</span>
                      <input value={promo.buttonUrl || ''} onChange={(event) => updatePromoField(index, 'buttonUrl', event.target.value)} placeholder="https://..." className="w-full px-4 py-3" />
                    </label>
                  </div>
                  <label className="space-y-2 text-sm text-[var(--crm-text)]">
                    <span>Описание акции</span>
                    <textarea value={promo.details || ''} onChange={(event) => updatePromoField(index, 'details', event.target.value)} rows={4} className="w-full px-4 py-3" />
                  </label>
                </div>
                <SiteImageUploadField label="Изображение акции" value={promo.imageUrl || ''} onChange={(value) => updatePromoField(index, 'imageUrl', value)} onUploadImage={onUploadSiteImage} />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );

  const renderReferralTab = () => (
    <div className="space-y-5">
      <SectionCard title="Реферальная программа">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_320px]">
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="space-y-2 text-sm text-[var(--crm-text)]">
              <span>Заголовок страницы</span>
              <input value={draft?.referral?.pageTitle || ''} onChange={(event) => updateReferralField('pageTitle', event.target.value)} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)]">
              <span>Бонус другу BS</span>
              <input type="number" min="0" value={draft?.referral?.friendDiscountRub ?? ''} onChange={(event) => updateReferralField('friendDiscountRub', event.target.value)} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
              <span>Основной текст программы</span>
              <textarea value={draft?.referral?.introText || ''} onChange={(event) => updateReferralField('introText', event.target.value)} rows={4} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)] lg:col-span-2">
              <span>Дополнительные условия</span>
              <textarea value={draft?.referral?.participationText || ''} onChange={(event) => updateReferralField('participationText', event.target.value)} rows={4} className="w-full px-4 py-3" />
            </label>
            <label className="space-y-2 text-sm text-[var(--crm-text)]">
              <span>Курс BS к рублю</span>
              <input type="number" min="1" value={draft?.referral?.bsToRubRate ?? ''} onChange={(event) => updateReferralField('bsToRubRate', event.target.value)} className="w-full px-4 py-3" />
            </label>
          </div>
          <div className="crm-soft-card p-4">
            <p className="text-sm font-semibold text-white">Сводка программы</p>
            <div className="mt-4 grid gap-3">
              <div className="crm-soft-panel p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--crm-muted)]">Друг получает</p>
                <p className="mt-2 text-2xl font-semibold text-white">{draft?.referral?.friendDiscountRub || 0} ₽</p>
              </div>
              <div className="crm-soft-panel p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--crm-muted)]">Курс</p>
                <p className="mt-2 text-2xl font-semibold text-white">{draft?.referral?.bsToRubRate || 0} BS</p>
                <p className="mt-1 text-sm text-[var(--crm-muted)]">за 1 рубль</p>
              </div>
              <div className="crm-soft-panel p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--crm-muted)]">Уровни</p>
                <p className="mt-2 text-2xl font-semibold text-white">{referralLevels.length}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Уровни и награды">
        <div className="space-y-4">
          <p className="text-sm text-[var(--crm-muted)]">Редактируйте уровни, диапазон рефералов и BS в одной таблице.</p>
          <div className="crm-table-shell overflow-x-auto">
            <table className="min-w-full border-collapse text-sm text-[var(--crm-text)]">
              <thead className="bg-[color:var(--crm-surface-4)]/90">
                <tr className="align-top">
                  <th className="crm-table-divider min-w-[220px] border-b border-r px-3 py-3 text-left font-semibold">Уровень</th>
                  <th className="crm-table-divider w-[136px] min-w-[136px] border-b border-r px-3 py-3 text-left font-semibold">Кол-во рефералов</th>
                  {referralRewardColumns.map((column, columnIndex) => (
                    <th key={`${column.id}-${columnIndex}`} className="crm-table-divider min-w-[220px] border-b border-r px-3 py-3 text-left font-semibold last:border-r-0">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="block text-xs uppercase tracking-wide text-[var(--crm-muted)]">Бонус за услугу</span>
                          <button
                            type="button"
                            onClick={() => removeReferralRewardColumn(column.id)}
                            className="crm-danger-btn h-9 w-9"
                            aria-label="Удалить колонку услуги"
                            title="Удалить колонку услуги"
                          >
                            <IconTrash className="h-4 w-4" />
                          </button>
                        </div>
                        <CustomSelect
                          value={column.labels[0] || ''}
                          onChange={(nextValue) => updateReferralRewardColumnLabels(column.id, nextValue ? [nextValue] : [])}
                          options={[{ value: '', label: 'Выберите услугу' }, ...serviceOptions.map((option) => ({ value: option, label: option }))]}
                          buttonClassName="h-10 px-4 text-sm"
                        />
                        <p className="text-[11px] leading-4 text-[var(--crm-muted)]">{column.labels[0] || 'Выберите услугу'}</p>
                      </div>
                    </th>
                  ))}
                  <th className="crm-table-divider w-[72px] min-w-[72px] border-b border-r px-2 py-3 text-center font-semibold">
                    <button
                      type="button"
                      onClick={addReferralRewardColumn}
                      className="crm-ghost-btn h-10 w-10"
                      aria-label="Добавить колонку услуги"
                      title="Добавить колонку услуги"
                    >
                      <IconPlus className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="crm-table-divider min-w-[120px] border-b px-3 py-3 text-left font-semibold">Действия</th>
                </tr>
              </thead>
              <tbody>
                {referralLevels.map((level, levelIndex) => (
                  <tr key={level.id || levelIndex} className="align-top">
                    <td className="crm-table-divider border-b border-r px-3 py-3">
                      <input
                        value={level.name || ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'name', event.target.value)}
                        placeholder={`Уровень ${levelIndex + 1}`}
                        className="w-full px-3 py-2"
                      />
                    </td>
                    <td className="crm-table-divider border-b border-r px-3 py-3">
                      <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        min="0"
                        value={level.minReferrals ?? ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'minReferrals', event.target.value)}
                        placeholder="От"
                        className="w-full px-2 py-2"
                      />
                      <input
                        type="number"
                        min="0"
                        value={level.maxReferrals ?? ''}
                        onChange={(event) => updateReferralLevelField(levelIndex, 'maxReferrals', event.target.value)}
                        placeholder="До"
                        className="w-full px-2 py-2"
                      />
                    </div>
                  </td>
                  {referralRewardColumns.map((column, columnIndex) => (
                    <td key={`${level.id || levelIndex}-${column.id}-${columnIndex}`} className="crm-table-divider border-b border-r px-3 py-3 last:border-r-0">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            value={getReferralRewardAmount(level, column)}
                            onChange={(event) => setReferralRewardAmount(levelIndex, column, event.target.value)}
                            placeholder="BS"
                            className="w-full px-3 py-2"
                          />
                          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--crm-muted)]">BS</span>
                        </div>
                      </td>
                    ))}
                    <td className="crm-table-divider border-b border-r px-2 py-3" />
                    <td className="crm-table-divider border-b px-3 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={() => moveReferralLevel(levelIndex, -1)} disabled={levelIndex === 0} className="crm-ghost-btn px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-40">
                          ↑
                        </button>
                        <button type="button" onClick={() => moveReferralLevel(levelIndex, 1)} disabled={levelIndex === referralLevels.length - 1} className="crm-ghost-btn px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-40">
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeReferralLevel(levelIndex)}
                          className="crm-danger-btn h-10 w-10"
                          aria-label="Удалить уровень"
                          title="Удалить уровень"
                        >
                          <IconTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={referralRewardColumns.length + 4} className="px-3 py-3">
                    <button
                      type="button"
                      onClick={addReferralLevel}
                      className="crm-ghost-btn w-full px-4 py-3 text-sm"
                    >
                      <IconPlus className="h-4 w-4" />
                      Добавить уровень
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderShopTab = () => (
    <SectionCard title="Страница магазина">
      <div className="grid gap-4">
        <label className="space-y-2 text-sm text-[var(--crm-text)]">
          <span>Заголовок тизера</span>
          <input value={draft?.shop?.teaserTitle || ''} onChange={(event) => updateShopField('teaserTitle', event.target.value)} className="w-full px-4 py-3" />
        </label>
        <label className="space-y-2 text-sm text-[var(--crm-text)]">
          <span>Текст тизера</span>
          <textarea value={draft?.shop?.teaserText || ''} onChange={(event) => updateShopField('teaserText', event.target.value)} rows={4} className="w-full px-4 py-3" />
        </label>
      </div>
    </SectionCard>
  );

  const renderTabContent = () => {
    if (activeTab === 'referral') return renderReferralTab();
    if (activeTab === 'shop') return renderShopTab();
    return renderHomeTab();
  };

  return (
    <div className="space-y-6">
      <div className="crm-inline-panel flex flex-col gap-3 p-2 sm:flex-row sm:items-center sm:justify-between">
        <div ref={trackRef} className="relative flex flex-wrap gap-2">
          <div aria-hidden="true" className="crm-nav-indicator" style={indicatorStyle} />
          {SITE_PAGE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                ref={setItemRef(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={classNames(
                  'crm-subnav-pill crm-nav-item px-4 py-2 text-sm font-semibold',
                  isActive && 'crm-subnav-pill-active'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 self-start rounded-2xl bg-[color:var(--crm-primary-container)] px-3 py-2 text-sm text-[color:var(--crm-primary)] sm:self-auto">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--crm-primary)]" />
          Онлайн: {onlineCount}
        </div>
      </div>
      {renderTabContent()}
        <div className="flex justify-end">
        <button onClick={handleSave} disabled={siteSaving || !onSaveSite} className="crm-action-btn px-5 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50">
          {siteSaving ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </div>
    </div>
  );
};
