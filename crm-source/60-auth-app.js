const LoginScreen = ({ onLogin, error }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');
  const shellStyle = {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at 12% -4%, rgba(0, 191, 175, 0.16), transparent 24%), radial-gradient(circle at 88% 10%, rgba(0, 191, 175, 0.08), transparent 18%), linear-gradient(180deg, #070909 0%, #0a0d0d 34%, #0b0e0e 100%)',
  };
  const frameStyle = {
    maxWidth: '28rem',
  };
  const logoStyle = {
    height: '14rem',
    width: 'auto',
    maxWidth: '500px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.32))',
  };
  const formStyle = {
    marginTop: '-3rem',
    borderRadius: '32px',
    background: 'rgba(15,18,18,0.98)',
    boxShadow: '0 24px 60px rgba(0,0,0,0.42)',
    backdropFilter: 'blur(20px)',
  };
  const inputStyle = {
    width: '100%',
    borderRadius: '1rem',
    background: 'rgba(7,9,10,0.96)',
    color: '#ffffff',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), inset 0 0 0 1px rgba(15,23,42,0.08)',
  };
  const submitStyle = {
    width: '100%',
    borderRadius: '1rem',
    background: '#00bfaf',
    color: '#031211',
    boxShadow: '0 16px 34px rgba(0,191,175,0.22)',
  };
  useEffect(() => {
    if (error) {
      setValidationError('');
    }
  }, [error]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedPhone = normalizePhoneValue(phone);
    const normalizedLogin = resolveLogin(phone);
    const isAppSiteShell = isAppSiteRuntime();
    if (!normalizedPhone && !normalizedLogin) {
      setValidationError('Укажите номер телефона или логин');
      return;
    }
    if (!password) {
      setValidationError('Введите пароль');
      return;
    }
    setValidationError('');
    onLogin({
      phone: normalizedPhone,
      login: normalizedLogin,
      password,
      remember: isAppSiteShell,
    });
  };
  const formatPhoneDisplay = (value) => {
    const digits = (value || '').replace(/\D/g, '');
    if (!digits) return '';
    let normalized = digits;
    if (normalized.startsWith('8')) {
      normalized = `7${normalized.slice(1)}`;
    } else if (!normalized.startsWith('7')) {
      normalized = `7${normalized}`;
    }
    normalized = normalized.slice(0, 11);
    if (normalized === '7') return digits === '7' ? '' : '+7';
    const core = normalized.slice(1);
    const parts = [core.slice(0, 3), core.slice(3, 6), core.slice(6, 8), core.slice(8, 10)];
    const [p1 = '', p2 = '', p3 = '', p4 = ''] = parts;
    let result = '+7';
    if (p1) result += ` ${p1}`;
    if (p2) result += ` ${p2}`;
    if (p3) result += `-${p3}`;
    if (p4) result += `-${p4}`;
    return result.trim();
  };
  const handlePhoneInput = (raw) => {
    const digits = (raw || '').replace(/\D/g, '');
    if (!digits) {
      setPhone('');
      return;
    }
    setValidationError('');
    setPhone(formatPhoneDisplay(raw));
  };
  const loginLogoSrc = '/Image/site/login/logo.svg';
  return (
    <div className="crm-app-shell relative min-h-screen overflow-hidden text-[var(--crm-text)]" style={shellStyle}>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6">
        <div className="w-full max-w-md" style={frameStyle}>
          <div className="relative z-0 flex justify-center">
            <img
              src={loginLogoSrc}
              alt="BrotherShop"
              className="h-56 w-auto max-w-[500px] object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.32)] sm:h-64 sm:max-w-[560px]"
              style={logoStyle}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="crm-modal-surface relative z-10 -mt-12 w-full space-y-5 rounded-[32px] p-7 pt-7 sm:-mt-16 sm:pt-9"
            style={formStyle}
          >
            <div className="space-y-1 text-center">
              <h1 className="text-[2rem] font-extrabold tracking-tight text-white sm:text-3xl">Вход в CRM</h1>
              <p className="text-sm text-[var(--crm-muted)]">Авторизация для команды BrotherShop</p>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--crm-text)]">Номер телефона</span>
                <span className="relative block">
                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[color:var(--crm-primary)]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.6 2h3.2l1.2 4.7-2 1.6a15.1 15.1 0 0 0 6.7 6.7l1.6-2 4.7 1.2v3.2a2 2 0 0 1-2.2 2A18.2 18.2 0 0 1 4.6 4.2 2 2 0 0 1 6.6 2Z"/>
                    </svg>
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => handlePhoneInput(event.target.value)}
                    placeholder="Телефон"
                    className="crm-login-input w-full py-3.5 pl-12 pr-4 text-white focus:outline-none"
                    style={inputStyle}
                  />
                </span>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--crm-text)]">Пароль</span>
                <span className="relative block">
                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[color:var(--crm-primary)]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 10V7a5 5 0 1 1 10 0v3M6 10h12a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1Zm6 4v3"/>
                    </svg>
                  </span>
                  <input
                    name="sessionPassword"
                    aria-label="Пароль"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Пароль"
                    className="crm-login-input w-full py-3.5 pl-12 pr-12 text-white focus:outline-none"
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--crm-muted)] transition hover:text-white"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="m4 20 16-16"/>
                      </svg>
                    )}
                  </button>
                </span>
              </label>
            </div>
            {(validationError || error) && <ErrorBanner message={validationError || error} />}
            <button
              type="submit"
              className="crm-action-btn w-full py-3.5 font-semibold transition duration-200 hover:scale-[1.01] focus:outline-none"
              style={submitStyle}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const isAppSiteShell = isAppSiteRuntime();
  const persistedAuth = useMemo(() => loadPersistedSession(), []);
  const [session, setSession] = useState(persistedAuth.session);
  const [rememberSession, setRememberSession] = useState(persistedAuth.remember || isAppSiteShell);
  const [activeTab, setActiveTab] = useLocalStorage('barber.activeTab', 'dashboard');
  const [systemSection, setSystemSection] = useLocalStorage('system.section', 'bot');
  const [pendingTableView, setPendingTableView] = useState(null);
  const [activeDataTable, setActiveDataTable] = useState(() => {
    try {
      const stored = localStorage.getItem('tables.active');
      return stored ? JSON.parse(stored) : 'Appointments';
    } catch {
      return 'Appointments';
    }
  });
  const [dashboard, setDashboard] = useState(null);
  const [services, setServices] = useState([]);
  const [serviceReorderBusy, setServiceReorderBusy] = useState(false);
  const [barbers, setBarbers] = useState([]);
  const [barberReorderBusy, setBarberReorderBusy] = useState(false);
  const [botStatus, setBotStatus] = useState(null);
  const [botSettings, setBotSettings] = useState(null);
  const [botMessages, setBotMessages] = useState([]);
  const [botToken, setBotToken] = useState(null);
  const [siteConfig, setSiteConfig] = useState(null);
  const [siteConfigSaving, setSiteConfigSaving] = useState(false);
  const [siteOnlineStats, setSiteOnlineStats] = useState(null);
  const [licenseStatus, setLicenseStatus] = useState(null);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [optionsCache, setOptionsCache] = useState(null);
  const [profileModal, setProfileModal] = useState({ open: false, data: null, loading: false });
  const [appointmentModal, setAppointmentModal] = useState(buildAppointmentModalState);
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [authError, setAuthError] = useState('');
  const [systemBusy, setSystemBusy] = useState(false);
  const [pendingReloadReason, setPendingReloadReason] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [realtimeSnapshot, setRealtimeSnapshot] = useState(null);
  const [fatalError, setFatalError] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(defaultConfirmState);
  const [connectionStatus, setConnectionStatus] = useState('unknown');
  const confirmResolverRef = useRef(null);
  const fetchAllRef = useRef(null);
  const systemDataLoadedRef = useRef(false);
  const role = normalizeRoleValue(session?.role);
  const isCreator = role === ROLE_CREATOR;
  const isOwner = role === ROLE_OWNER;
  const hasOwnerAccess = isOwner || isCreator;
  const staffBarberId = session?.barberId || null;
  const viewTabs = VIEW_TABS_BY_ROLE[role] || VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const dataTables = DATA_TABLES_BY_ROLE[role] || DEFAULT_DATA_TABLES;
  const visibleTableOrder = VISIBLE_TABLE_ORDER_BY_ROLE[role] || DEFAULT_VISIBLE_TABLE_ORDER;
  const sidebarShortcuts = DATA_SHORTCUTS_BY_ROLE[role] || DEFAULT_TABLE_SHORTCUTS;
  const canUseRealtime = hasOwnerAccess || role === ROLE_STAFF;
  const canAccessBot = hasOwnerAccess;
  const canAccessSystem = hasOwnerAccess;
  const resolvedSystemSection = SYSTEM_SUB_SECTIONS.some((tab) => tab.id === systemSection) ? systemSection : 'bot';
  const requestConfirm = useCallback(
    (options = {}) =>
      new Promise((resolve) => {
        confirmResolverRef.current = resolve;
        setConfirmDialog({ ...defaultConfirmState, ...options, open: true });
      }),
    []
  );
  const handleConfirmResult = useCallback(
    (result) => {
      setConfirmDialog(defaultConfirmState);
      if (confirmResolverRef.current) {
        confirmResolverRef.current(result);
        confirmResolverRef.current = null;
      }
    },
    []
  );
  useEffect(() => {
    if (!viewTabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(viewTabs[0]?.id || 'dashboard');
    }
  }, [viewTabs, activeTab, setActiveTab]);
  const currentBarber = useMemo(() => {
    if (!barbers?.length) return null;
    if (session?.barberId) {
      const match = barbers.find((item) => item.id === session.barberId);
      if (match) return match;
    }
    return barbers[0] || null;
  }, [barbers, session?.barberId]);
  useEffect(() => {
    if (!session?.barberId) return;
    const linkedBarber = barbers.find((item) => item.id === session.barberId);
    if (!linkedBarber) return;
    const nextName = linkedBarber.name || '';
    if (!nextName || nextName === session.barberName) return;
    setSession((prev) => {
      if (!prev) return prev;
      const updated = buildSessionPayload({
        ...prev,
        barberName: nextName,
        displayName: nextName,
      });
      persistSessionPayload(updated, rememberSession);
      return updated;
    });
  }, [barbers, session?.barberId, session?.barberName, setSession, rememberSession]);
  const handleSidebarTableChange = useCallback(
    (tableId) => {
      if (!tableId) return;
      setActiveDataTable(tableId);
      setPendingTableView(tableId);
      setActiveTab('tables');
    },
    [setActiveTab, setPendingTableView]
  );
  const handleActiveTableSync = useCallback(
    (tableId) => {
      if (!tableId) return;
      setActiveDataTable(tableId);
    },
    []
  );
  const handlePreferredTableConsumed = useCallback(() => setPendingTableView(null), []);
  const serviceSaveTimers = useRef(new Map());
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  useEffect(() => {
    let cancelled = false;
    if (!session?.token) {
      setConnectionStatus('unknown');
      return () => {
        cancelled = true;
      };
    }
    const checkServer = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/login/options`, { cache: 'no-store' });
        if (cancelled) return;
        setConnectionStatus(response.ok ? 'online' : 'offline');
      } catch (error) {
        if (!cancelled) {
          setConnectionStatus('offline');
        }
      }
    };
    checkServer();
    const interval = setInterval(checkServer, 15000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [session?.token, canUseRealtime]);
  const handleLogout = useCallback(() => {
    clearStoredSession();
    setSession(null);
    setDashboard(null);
    setGlobalError('');
    setRealtimeSnapshot(null);
    setServices([]);
    setBarbers([]);
    setBotStatus(null);
    setBotSettings(null);
    setBotMessages([]);
    setBotToken(null);
    setSiteConfig(null);
    setSiteConfigSaving(false);
    setLicenseStatus(null);
    setUpdateInfo(null);
    setOptionsCache(null);
    setPendingTableView(null);
    setActiveDataTable('Appointments');
    setConnectionStatus('unknown');
    setPendingReloadReason(null);
    setSystemBusy(false);
  }, []);
  const handleRememberChange = useCallback((value) => {
    const nextValue = Boolean(value);
    setRememberSession(nextValue);
    persistRememberChoice(nextValue);
  }, []);
  const handleSessionTokenRefresh = useCallback(
    (nextToken) => {
      if (!nextToken) return;
      setSession((prev) => {
        if (!prev || prev.token === nextToken) return prev;
        const updated = buildSessionPayload({ ...prev, token: nextToken });
        persistSessionPayload(updated, rememberSession);
        return updated;
      });
    },
    [setSession, rememberSession]
  );
const apiRequest = useCallback(
    async (endpoint, options = {}) => {
      if (!session?.token) throw new Error('Нет активной сессии');
      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${session.token}`,
        ...(options.body && !options.headers?.['Content-Type'] ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      };
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      handleSessionTokenRefresh(response.headers.get('x-session-token'));
      if (response.status === 401) {
        handleLogout();
        throw new Error('Сессия завершена, войдите снова');
      }
      if (!response.ok) {
        const message = await response.text();
        const fallback = response.status === 403 ? 'Недостаточно прав для операции' : 'Ошибка запроса';
        throw new Error(message || fallback);
      }
      if (response.status === 204) return null;
      return response.json();
    },
    [session?.token, handleLogout, handleSessionTokenRefresh]
  );
  const applyFavoriteBarberRule = useCallback(
    async (profilePayload) => {
      if (!profilePayload || !Array.isArray(profilePayload.appointments) || !profilePayload.user) {
        return profilePayload;
      }
      const canAutoAssignFavorite = session?.role === ROLE_OWNER || session?.role === ROLE_CREATOR;
      const favoriteBarber = resolveFavoriteBarberFromAppointments(profilePayload.appointments);
      const normalizedFavorite = normalizeText(favoriteBarber).toLowerCase();
      if (!normalizedFavorite) return profilePayload;
      const normalizedCurrent = normalizeText(profilePayload.user.Barber).toLowerCase();
      if (normalizedFavorite === normalizedCurrent) return profilePayload;
      const updatedPayload = { ...profilePayload, user: { ...profilePayload.user, Barber: favoriteBarber } };
      if (!canAutoAssignFavorite) {
        return updatedPayload;
      }
      const userId = getRecordId(profilePayload.user);
      if (userId) {
        try {
          await apiRequest(`/Users/${encodeURIComponent(userId)}`, {
            method: 'PUT',
            body: JSON.stringify({ Barber: favoriteBarber }),
          });
        } catch (error) {
          console.warn('Favorite barber auto-assign failed:', error);
        }
      }
      return updatedPayload;
    },
    [apiRequest, session?.role]
  );
  const handleLoadAvatarOptions = useCallback(
    () => apiRequest('/assets/avatars'),
    [apiRequest]
  );
  const fetchSystemResources = useCallback(
    async ({ force = false } = {}) => {
      if (!session?.token) return null;
      if (!canAccessSystem && !canAccessBot) return null;
      if (!force && systemDataLoadedRef.current) return null;
      const withFallback = (request, fallback, label) =>
        request.catch((error) => {
          console.warn(`${label} fetch skipped:`, error?.message || error);
          return fallback;
        });
      const botStatusPromise = canAccessBot
        ? withFallback(apiRequest('/bot/status'), { status: null, settings: null, token: null }, 'Bot status')
        : Promise.resolve({ status: null, settings: null, token: null });
      const botMessagesPromise = canAccessBot
        ? withFallback(apiRequest('/bot/messages'), [], 'Bot messages')
        : Promise.resolve([]);
      const siteConfigPromise = canAccessSystem
        ? withFallback(apiRequest('/system/site'), null, 'Site config')
        : Promise.resolve(null);
      const siteOnlinePromise = canAccessSystem
        ? withFallback(apiRequest('/system/site/online'), null, 'Site online')
        : Promise.resolve(null);
      const licensePromise = canAccessSystem
        ? withFallback(apiRequest('/license/status'), null, 'License')
        : Promise.resolve(null);
      const updatePromise = canAccessSystem
        ? withFallback(apiRequest('/system/update'), null, 'Updates')
        : Promise.resolve(null);
      const [botState, botMessagesPayload, sitePayload, siteOnlinePayload, license, update] =
        await Promise.all([
          botStatusPromise,
          botMessagesPromise,
          siteConfigPromise,
          siteOnlinePromise,
          licensePromise,
          updatePromise,
        ]);
      setBotSettings(botState.settings || null);
      setBotStatus(botState.status);
      setBotToken(botState.token || null);
      setBotMessages(canAccessBot ? botMessagesPayload || [] : []);
      setSiteConfig(canAccessSystem ? sitePayload : null);
      setSiteConfigSaving(false);
      setSiteOnlineStats(canAccessSystem ? siteOnlinePayload : null);
      setLicenseStatus(canAccessSystem ? license : null);
      setUpdateInfo(canAccessSystem ? normalizeUpdateInfo(update) : null);
      systemDataLoadedRef.current = true;
      return {
        botState,
        botMessagesPayload,
        sitePayload,
        siteOnlinePayload,
        license,
        update,
      };
    },
    [apiRequest, canAccessBot, canAccessSystem, session?.token]
  );
  const fetchAll = useCallback(async ({ silent = false } = {}) => {
	    if (!session?.token) return;
	    if (!silent) {
	      setLoading(true);
	      setGlobalError('');
	    }
	    try {
	      const overview = await apiRequest('/dashboard/overview');
	      setDashboard(overview);
      setServices(Array.isArray(overview?.services) ? overview.services : []);
      setBarbers(Array.isArray(overview?.barbers) ? overview.barbers : []);
      setBotSettings(overview?.bot?.settings || null);
      if (activeTab === 'system') {
        await fetchSystemResources();
      }
	    } catch (error) {
	      console.error(error);
	      if (!silent) {
	        setGlobalError(error.message || 'Не удалось загрузить данные.');
	      }
	    } finally {
	      if (!silent) {
	        setLoading(false);
	      }
	    }
	  }, [activeTab, apiRequest, fetchSystemResources, session?.token]);
  useEffect(() => {
    fetchAllRef.current = fetchAll;
  }, [fetchAll]);
  useEffect(() => {
    if (session?.token) return;
    systemDataLoadedRef.current = false;
  }, [session?.token]);
  useEffect(() => {
    if (!session?.token || activeTab !== 'system') return;
    fetchSystemResources();
  }, [activeTab, fetchSystemResources, session?.token]);
  useEffect(() => {
    if (!canAccessSystem || !session?.token || activeTab !== 'system') return undefined;
    const intervalId = window.setInterval(async () => {
      try {
        const payload = await apiRequest('/system/site/online');
        setSiteOnlineStats(payload || null);
      } catch (error) {
        console.warn('Site online poll skipped:', error?.message || error);
      }
    }, 30000);
    return () => window.clearInterval(intervalId);
  }, [activeTab, apiRequest, canAccessSystem, session?.token]);
  const handleBlockClient = useCallback(
    async (clientId, blocked = true) => {
      if (!clientId) throw new Error('No client id');
      const result = await apiRequest(`/users/${encodeURIComponent(clientId)}/block`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocked }),
      });
      fetchAll();
      return result;
    },
    [apiRequest, fetchAll]
  );
  const handleAdjustClientBs = useCallback(
    async (clientId, payload) => {
      if (!clientId) throw new Error('Не выбран клиент');
      const result = await apiRequest(`/users/${encodeURIComponent(clientId)}/bs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || {}),
      });
      fetchAll({ silent: true });
      return result;
    },
    [apiRequest, fetchAll]
  );
  const handleAddClientWarning = useCallback(
    async (clientId, payload) => {
      if (!clientId) throw new Error('Не выбран клиент');
      const result = await apiRequest(`/users/${encodeURIComponent(clientId)}/warnings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || {}),
      });
      fetchAll({ silent: true });
      return result;
    },
    [apiRequest, fetchAll]
  );
  useEffect(() => {
    if (session?.token) {
      fetchAllRef.current?.();
    }
  }, [Boolean(session?.token)]);
  useEffect(() => {
    if (!session?.token || !canUseRealtime) {
      setRealtimeSnapshot(null);
      return undefined;
    }
    if (typeof EventSource === 'undefined') return undefined;
    const tokenParam = encodeURIComponent(session.token);
    const streamUrl = `${API_BASE_URL}/events/stream?token=${tokenParam}`;
    const eventSource = new EventSource(streamUrl);
    eventSource.onopen = () => setConnectionStatus('online');
    const handleEvent = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload?.type !== 'appointments:update') return;
        const details = payload.payload || {};
        setRealtimeSnapshot({
          rows: Array.isArray(details.rows) ? details.rows : [],
          active: Array.isArray(details.active) ? details.active : [],
          stats: details.stats || {},
          upcoming: Array.isArray(details.upcoming) ? details.upcoming : [],
          overdue: Array.isArray(details.overdue) ? details.overdue : [],
          updatedAt: details.updatedAt || new Date().toISOString(),
        });
      } catch (error) {
        console.error('Realtime event parse error:', error);
      }
    };
    eventSource.addEventListener('appointments', handleEvent);
    eventSource.onerror = () => {
      setConnectionStatus('offline');
    };
    return () => {
      eventSource.removeEventListener('appointments', handleEvent);
      eventSource.close();
    };
  }, [session?.token, canUseRealtime]);
  const refreshRealtimeViews = useCallback(async () => {
    if (!session?.token) return;
    try {
      const [overview, appointments] = await Promise.all([
        apiRequest('/dashboard/overview'),
        apiRequest('/appointments'),
      ]);
      setDashboard((prev) => {
        if (!overview) return prev;
        if (!prev) return overview;
        return {
          ...prev,
          ...overview,
          stats: overview.stats || prev.stats || {},
          appointments: overview.appointments || prev.appointments || {},
        };
      });
      setRealtimeSnapshot((prev) => ({
        rows: Array.isArray(appointments) ? appointments : [],
        active: Array.isArray(overview?.appointments?.active)
          ? overview.appointments.active
          : prev?.active || [],
        stats: overview?.stats || prev?.stats || {},
        upcoming: Array.isArray(overview?.appointments?.upcoming)
          ? overview.appointments.upcoming
          : prev?.upcoming || [],
        overdue: Array.isArray(overview?.appointments?.overdue)
          ? overview.appointments.overdue
          : prev?.overdue || [],
        updatedAt: new Date().toISOString(),
      }));
      setConnectionStatus('online');
    } catch (error) {
      console.warn('Realtime refresh failed:', error?.message || error);
    }
  }, [apiRequest, session?.token]);
  useEffect(() => {
    if (!session?.token) return undefined;
    const shouldRefreshViews =
      activeTab === 'dashboard' ||
      (activeTab === 'tables' && activeDataTable === 'Appointments');
    const shouldUsePolling = !canUseRealtime || connectionStatus !== 'online' || !realtimeSnapshot;
    if (!shouldRefreshViews || !shouldUsePolling) return undefined;
    let cancelled = false;
    let inFlight = false;
    const runRefresh = async () => {
      if (cancelled || inFlight) return;
      inFlight = true;
      try {
        await refreshRealtimeViews();
      } finally {
        inFlight = false;
      }
    };
    runRefresh();
    const interval = setInterval(runRefresh, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [activeDataTable, activeTab, canUseRealtime, connectionStatus, realtimeSnapshot, refreshRealtimeViews, session?.token]);
  const handleCreatePosition = useCallback(
    (payload) => apiRequest('/Positions', { method: 'POST', body: JSON.stringify(payload) }),
    [apiRequest]
  );
  const handleUpdatePosition = useCallback(
    (id, payload) =>
      apiRequest(`/Positions/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      }),
    [apiRequest]
  );
  const handleDeletePosition = useCallback(
    (id) => apiRequest(`/Positions/${encodeURIComponent(id)}`, { method: 'DELETE' }),
    [apiRequest]
  );
  useEffect(() => {
    if (!realtimeSnapshot) return;
    const isStaffMode = role === ROLE_STAFF;
    const staffNameSet = (() => {
      if (!isStaffMode) return null;
      const pool = [
        session?.barberName,
        session?.displayName,
        session?.username,
        currentBarber?.name,
        currentBarber?.nickname,
        currentBarber?.login,
      ];
      const normalized = pool
        .map((value) => canonicalizeName(value).toLowerCase())
        .filter(Boolean);
      return normalized.length ? new Set(normalized) : null;
    })();
    setDashboard((prev) => {
      const nextStats = { ...(prev?.stats || {}), ...(realtimeSnapshot.stats || {}) };
      const nextActive = realtimeSnapshot.active || prev?.appointments?.active || [];
      let nextUpcoming = realtimeSnapshot.upcoming || prev?.appointments?.upcoming || nextActive;
      let nextOverdue = realtimeSnapshot.overdue || prev?.appointments?.overdue || nextActive;
      if (isStaffMode && staffNameSet && nextUpcoming?.length) {
        nextUpcoming = nextUpcoming.filter((appt) => {
          const candidate = canonicalizeName(appt.Barber).toLowerCase();
          return candidate && staffNameSet.has(candidate);
        });
      }
      if (isStaffMode && staffNameSet && nextOverdue?.length) {
        nextOverdue = nextOverdue.filter((appt) => {
          const candidate = canonicalizeName(appt.Barber).toLowerCase();
          return candidate && staffNameSet.has(candidate);
        });
      }
      if (isStaffMode && staffNameSet) {
        nextStats.upcomingAppointments = nextUpcoming.length;
        nextStats.overdueAppointments = nextOverdue.length;
        nextStats.activeAppointments = nextUpcoming.length + nextOverdue.length;
      }
      const nextAppointments = {
        ...(prev?.appointments || {}),
        active: nextActive,
        upcoming: nextUpcoming,
        overdue: nextOverdue,
      };
      if (!prev) {
        return { stats: nextStats, appointments: nextAppointments };
      }
      return { ...prev, stats: nextStats, appointments: nextAppointments };
    });
  }, [realtimeSnapshot, role, session?.barberName, session?.displayName, session?.username, currentBarber?.name, currentBarber?.nickname, currentBarber?.login]);
  useEffect(() => {
    const handleGlobalError = (event) => {
      const detail = event?.reason || event?.error;
      const message =
        detail?.message ||
        event?.message ||
        (typeof detail === 'string' ? detail : 'Неизвестная ошибка');
      const isGenericScriptError =
        (message || '').trim() === 'Script error.' &&
        !event?.filename &&
        !event?.lineno &&
        !detail?.stack;
      sendClientLog({
        level: 'error',
        stage: 'global-handler',
        message,
        stack: detail?.stack || '',
        source: event?.filename || '',
        line: event?.lineno || 0,
        col: event?.colno || 0,
        type: event?.type || '',
        isGenericScriptError,
      });
      if (isGenericScriptError) {
        return;
      }
      console.error('Global UI error:', detail || event);
      setFatalError(message);
    };
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleGlobalError);
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleGlobalError);
    };
  }, []);
  useEffect(
    () => () => {
      serviceSaveTimers.current.forEach((timer) => clearTimeout(timer));
      serviceSaveTimers.current.clear();
    },
    []
  );
  const handleLogin = async ({ phone, login, password, remember } = {}) => {
    setAuthError('');
    const normalizedPhone = normalizePhoneValue(phone || login);
    const normalizedLogin = resolveLogin(login || phone);
    const rememberChoice = remember ?? rememberSession;
    if (!normalizedPhone && !normalizedLogin) {
      setAuthError('Укажите номер телефона или логин');
      return;
    }
    if (!password) {
      setAuthError('Введите пароль');
      return;
    }
    persistRememberChoice(rememberChoice);
    setRememberSession(rememberChoice);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: normalizedPhone, username: normalizedLogin, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setAuthError(data.message || 'Неизвестная ошибка при входе');
        return;
      }
      const sessionPayload = buildSessionPayload({ ...data, username: normalizedPhone || normalizedLogin });
      persistSessionPayload(sessionPayload, rememberChoice);
      setSession(sessionPayload);
    } catch (error) {
      setAuthError('Не удалось подключиться к серверу');
    }
  };
const handleBarberFieldChange = (id, field, value) => {
    setBarbers((prev) =>
      prev.map((barber) => {
        if (barber.id !== id) return barber;
        const nextValue = field === 'rating' ? formatRatingValue(value) : value;
        return { ...barber, [field]: nextValue };
      }),
    );
  };
  const normalizeServicePayload = (service) => ({
    ...service,
    prices: Object.fromEntries(
      Object.entries(service.prices || {}).map(([key, value]) => [key, value === '' || value == null ? null : Number(value)])
    ),
  });
  const applyServiceOrder = useCallback((serviceList, orderedIds) => {
    const safeServices = Array.isArray(serviceList) ? serviceList : [];
    const safeOrderedIds = Array.isArray(orderedIds) ? orderedIds : [];
    const orderMap = new Map(safeOrderedIds.map((id, index) => [id, index]));
    const fallbackStart = safeOrderedIds.length;
    return sortServicesByOrder(
      safeServices.map((service, index) => ({
        ...service,
        orderIndex: orderMap.has(service.id) ? orderMap.get(service.id) : fallbackStart + index,
      })),
    );
  }, []);
  const applyBarberOrder = useCallback((barberList, orderedIds) => {
    const safeBarbers = Array.isArray(barberList) ? barberList : [];
    const safeOrderedIds = Array.isArray(orderedIds) ? orderedIds : [];
    const orderMap = new Map(safeOrderedIds.map((id, index) => [id, index]));
    const fallbackStart = safeOrderedIds.length;
    return sortServicesByOrder(
      safeBarbers.map((barber, index) => ({
        ...barber,
        orderIndex: orderMap.has(barber.id) ? orderMap.get(barber.id) : fallbackStart + index,
      })),
    );
  }, []);
  const deriveBarberLogin = (barberData = {}) => resolveLogin(barberData.login || barberData.name || '');
  const buildBarberPayload = (barberData = {}, fallbackOrder = 0) => {
    const payload = {
      name: barberData.name || '',
      nickname: null,
      description: barberData.description || '',
      rating: formatRatingValue(barberData.rating),
      avatarUrl: barberData.avatarUrl || '',
      cardTitle: sanitizeCardText(barberData.cardTitle || barberData.name || ''),
      cardDescription: sanitizeCardText(barberData.cardDescription || ''),
      cardPhrase: sanitizeCardText(barberData.cardPhrase || ''),
      cardMode: normalizeCardMode(barberData.cardMode),
      cardImageUrl: normalizeImagePath(barberData.cardImageUrl || ''),
      cardPhotoGrayscale: barberData.cardPhotoGrayscale !== false,
      cardPhotoOutline: barberData.cardPhotoOutline !== false,
      color: barberData.color || '',
      login: deriveBarberLogin(barberData),
      password: barberData.password || '',
      phone: barberData.phone || '',
      telegramId: barberData.telegramId || '',
      isActive: barberData.isActive !== false,
      orderIndex: Number(barberData.orderIndex ?? fallbackOrder) || 0,
      role: normalizeRoleValue(barberData.role),
      positionId: barberData.positionId || null,
    };
    if (barberData.id) {
      payload.id = barberData.id;
    }
    return payload;
  };
  const handleSaveBarber = async (barber) => {
    if (!barber?.id) return null;
    try {
      const response = await apiRequest(`/barbers/${encodeURIComponent(barber.id)}`, { method: 'PUT', body: JSON.stringify(buildBarberPayload(barber)) });
      const updatedBarber = { ...barber, ...(response || {}) }; // сохраняем локально выбранный avatarUrl, если сервер его не вернул
      setBarbers((prev) => prev.map((item) => (item.id === updatedBarber.id ? { ...item, ...updatedBarber } : item)));
      return updatedBarber;
    } catch (error) {
      setGlobalError(error.message);
      throw error;
    }
  };
  const handleDeleteBarber = async (barber) => {
    if (!barber?.id) return;
    const confirmed = await requestConfirm({
      title: 'Удалить барбера?',
      message: `Барбер «${barber.name || 'Без имени'}» будет удален без возможности восстановления.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/barbers/${encodeURIComponent(barber.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить барбера');
    }
  };
  const handleAddBarber = async (payload) => {
    if (!payload.name || !payload.password) {
      setGlobalError('Заполните имя, логин и пароль барбера');
      return null;
    }
    try {
      const newBarberPayload = buildBarberPayload({ ...payload, id: undefined }, barbers.length);
      const { id, ...body } = newBarberPayload;
      const created = await apiRequest('/barbers', { method: 'POST', body: JSON.stringify(body) });
      fetchAll();
      return created || null;
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить барбера');
      throw error;
    }
  };
  const handleSaveService = useCallback(
    async (service) => {
      if (!service?.id) return;
      try {
        await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, {
          method: 'PUT',
          body: JSON.stringify(normalizeServicePayload(service)),
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить услугу');
      }
    },
    [apiRequest]
  );
  const scheduleServiceAutosave = useCallback(
    (service, customSaver) => {
      if (!service?.id) return;
      const timers = serviceSaveTimers.current;
      const existingTimer = timers.get(service.id);
      if (existingTimer) clearTimeout(existingTimer);
      const timer = setTimeout(async () => {
        try {
          if (typeof customSaver === 'function') {
            await customSaver(service);
          } else {
            await handleSaveService(service);
          }
        } finally {
          timers.delete(service.id);
        }
      }, 400);
      timers.set(service.id, timer);
    },
    [handleSaveService]
  );
  const handleDeleteService = async (service) => {
    if (!service?.id) return;
    const confirmed = await requestConfirm({
      title: 'Удалить услугу?',
      message: `Услуга «${service.name || 'Без названия'}» будет удалена.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, { method: 'DELETE' });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить услугу');
    }
  };
  const saveStaffServicePrice = useCallback(
    async (service) => {
      if (!service?.id || !staffBarberId) return;
      const nextPrice = service.prices?.[staffBarberId];
      try {
        await apiRequest(`/services/full/${encodeURIComponent(service.id)}`, {
          method: 'PUT',
          body: JSON.stringify({ prices: { [staffBarberId]: nextPrice ?? null } }),
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить цену услуги.');
      }
    },
    [apiRequest, staffBarberId]
  );
  const handleAddService = async (payload) => {
    if (!payload.name) return;
    try {
      await apiRequest('/services/full', { method: 'POST', body: JSON.stringify(normalizeServicePayload(payload)) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось добавить услугу');
    }
  };
  const handleServiceFieldChange = useCallback(
    (id, field, value) => {
      setServices((prev) => prev.map((service) => (service.id === id ? { ...service, [field]: value } : service)));
      const target = services.find((service) => service.id === id);
      if (target) {
        scheduleServiceAutosave({ ...target, [field]: value });
      }
    },
    [services, scheduleServiceAutosave]
  );
  const handleServicePriceChange = useCallback(
    (serviceId, barberId, value) => {
      setServices((prev) =>
        prev.map((service) => {
          if (service.id !== serviceId) return service;
          return {
            ...service,
            prices: { ...(service.prices || {}), [barberId]: value },
          };
        })
      );
      const target = services.find((service) => service.id === serviceId);
      if (target) {
        const nextService = {
          ...target,
          prices: { ...(target.prices || {}), [barberId]: value },
        };
        const saver = role === ROLE_STAFF ? saveStaffServicePrice : undefined;
        scheduleServiceAutosave(nextService, saver);
      }
    },
    [role, saveStaffServicePrice, scheduleServiceAutosave, services]
  );
  const handleReorderServices = useCallback(
    async (orderedIds) => {
      if (role === ROLE_STAFF || serviceReorderBusy || !Array.isArray(orderedIds) || !orderedIds.length) return;
      serviceSaveTimers.current.forEach((timer) => clearTimeout(timer));
      serviceSaveTimers.current.clear();
      const previousServices = services;
      const nextServices = applyServiceOrder(previousServices, orderedIds);
      setServices(nextServices);
      try {
        setServiceReorderBusy(true);
        const response = await apiRequest('/services/full/reorder', {
          method: 'POST',
          body: JSON.stringify({ orderedIds }),
        });
        if (Array.isArray(response?.services)) {
          setServices(sortServicesByOrder(response.services));
        }
      } catch (error) {
        setServices(previousServices);
        setGlobalError(error.message || 'Не удалось сохранить порядок услуг');
      } finally {
        setServiceReorderBusy(false);
      }
    },
    [apiRequest, applyServiceOrder, role, serviceReorderBusy, services]
  );
  const handleReorderBarbers = useCallback(
    async (orderedIds) => {
      if (role === ROLE_STAFF || barberReorderBusy || !Array.isArray(orderedIds) || !orderedIds.length) return;
      const previousBarbers = barbers;
      const nextBarbers = applyBarberOrder(previousBarbers, orderedIds);
      setBarbers(nextBarbers);
      try {
        setBarberReorderBusy(true);
        const response = await apiRequest('/barbers/reorder', {
          method: 'POST',
          body: JSON.stringify({ orderedIds }),
        });
        if (Array.isArray(response)) {
          setBarbers(sortServicesByOrder(response));
        }
      } catch (error) {
        setBarbers(previousBarbers);
        setGlobalError(error.message || 'Не удалось сохранить порядок барберов');
      } finally {
        setBarberReorderBusy(false);
      }
    },
    [apiRequest, applyBarberOrder, barberReorderBusy, barbers, role]
  );
  const handleUploadAvatar = useCallback(
    async ({ name, data }) => {
      if (!name || !data) {
        throw new Error('Укажите имя и данные изображения.');
      }
      return apiRequest('/assets/avatars/upload', {
        method: 'POST',
        body: JSON.stringify({ name, data }),
      });
    },
    [apiRequest]
  );
  const handleUploadCard = useCallback(
    async ({ barberId, name, data }) => {
      if (!barberId || !data) {
        throw new Error('Нужны id барбера и данные карточки.');
      }
      return apiRequest('/assets/cards/upload', {
        method: 'POST',
        body: JSON.stringify({ barberId, name, data }),
      });
    },
    [apiRequest]
  );
  const handleDeleteAvatar = useCallback(
    async (filename) => {
      if (!filename) {
        throw new Error('Не передан файл для удаления.');
      }
      return apiRequest('/assets/avatars', {
        method: 'DELETE',
        body: JSON.stringify({ filename }),
      });
    },
    [apiRequest]
  );
  const fetchBotRuntime = useCallback(async () => {
    if (!canAccessBot) return null;
    const botState = await apiRequest('/bot/status');
    setBotSettings(botState?.settings || null);
    setBotStatus(botState?.status || null);
    setBotToken(botState?.token || null);
    setDashboard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        bot: {
          ...(prev.bot || {}),
          status: botState?.status || null,
          settings: botState?.settings || null,
        },
      };
    });
    return botState;
  }, [apiRequest, canAccessBot]);
  const handleBotToggle = async (enabled) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ isBotEnabled: enabled }) });
      await fetchBotRuntime();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось обновить настройки бота');
    }
  };
  const handleBotAction = async (action) => {
    try {
      await apiRequest('/bot/status', { method: 'POST', body: JSON.stringify({ action }) });
      await fetchBotRuntime();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось выполнить действие');
    }
  };
  const handleUpdateBotToken = useCallback(
    async (nextToken) => {
      try {
        const response = await apiRequest('/bot/token', { method: 'PUT', body: JSON.stringify({ token: nextToken }) });
        const normalized = response?.token || nextToken;
        setBotToken(normalized);
        await fetchAll();
        return normalized;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось обновить токен бота');
        throw error;
      }
    },
    [apiRequest, fetchAll]
  );
  const handleSaveSettings = async (payload) => {
    if (!botSettings?.id) return;
    try {
      await apiRequest(`/BotSettings/${encodeURIComponent(botSettings.id)}`, { method: 'PUT', body: JSON.stringify(payload) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить настройки');
    }
  };
  const handleSaveSiteConfig = useCallback(
    async (draft) => {
      if (!canAccessSystem) return null;
      setSiteConfigSaving(true);
      try {
        const saved = await apiRequest('/system/site', {
          method: 'PUT',
          body: JSON.stringify(draft || {}),
        });
        setSiteConfig(saved);
        return saved;
      } catch (error) {
        setGlobalError(error.message || 'Не удалось сохранить настройки сайта');
        throw error;
      } finally {
        setSiteConfigSaving(false);
      }
    },
    [apiRequest, canAccessSystem]
  );
  const handleSaveMessage = async (id, draft, persist) => {
    if (!persist) {
      setBotMessages((prev) => prev.map((message) => (message.id === id ? { ...draft } : message)));
      return;
    }
    try {
      await apiRequest(`/bot/messages/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify({ code: draft.code, title: draft.title, text: draft.text }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось сохранить сообщение');
    }
  };
  const handleRestoreBackup = async (filename) => {
    if (!filename) return;
    const confirmed = await requestConfirm({
      title: 'Восстановить резервную копию?',
      message: `Текущие данные будут заменены содержимым ${filename}. Продолжить?`,
      confirmLabel: 'Восстановить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      fetchAll();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось восстановить бэкап');
    }
  };
  const refreshBackupsList = useCallback(async () => {
    const backups = await apiRequest('/backups/list');
    setDashboard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        backups: Array.isArray(backups) ? backups : [],
      };
    });
  }, [apiRequest]);
  const handleCreateBackup = async () => {
    const confirmed = await requestConfirm({
      title: 'Создать резервную копию?',
      message: 'Будет создан файл резервной копии текущей базы данных.',
      confirmLabel: 'Создать',
      tone: 'success',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/create', { method: 'POST' });
      await refreshBackupsList();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось создать бэкап');
    }
  };
  const handleDeleteBackup = async (filename) => {
    if (!filename) return;
    const confirmed = await requestConfirm({
      title: 'Удалить резервную копию?',
      message: `Файл ${filename} будет удален безвозвратно.`,
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest('/backups/delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) });
      await refreshBackupsList();
    } catch (error) {
      setGlobalError(error.message || 'Не удалось удалить бэкап');
    }
  };
  const fetchClientHistory = useCallback(
    async (client) => {
      if (!client?.Name) return null;
      return apiRequest(`/user-profile/${encodeURIComponent(client.Name)}`);
    },
    [apiRequest]
  );
  const openProfile = useCallback(
    async (name) => {
      if (!name) return;
      setProfileModal({ open: true, data: null, loading: true });
      try {
        const payload = await apiRequest(`/user-profile/${encodeURIComponent(name)}`);
        const processed = await applyFavoriteBarberRule(payload);
        setProfileModal({ open: true, data: processed, loading: false });
      } catch (error) {
        setProfileModal({ open: true, data: { error: error.message || 'Не удалось загрузить профиль клиента' }, loading: false });
      }
    },
    [apiRequest, applyFavoriteBarberRule]
  );
  const ensureOptions = useCallback(async () => {
    if (optionsCache) return optionsCache;
    const options = await apiRequest('/options/appointments?force=1');
    const normalized = {
      ...options,
      statuses: normalizeStatusList(options.statuses || []),
    };
    setOptionsCache(normalized);
    return normalized;
  }, [apiRequest, optionsCache]);
  const fetchAppointmentContext = useCallback(async () => {
    const [appointmentsList, schedulesList] = await Promise.all([
      apiRequest('/appointments'),
      apiRequest('/schedules'),
    ]);
    return {
      appointments: Array.isArray(appointmentsList) ? appointmentsList : [],
      schedules: Array.isArray(schedulesList) ? schedulesList : [],
    };
  }, [apiRequest]);
  const handleOpenAppointment = useCallback(
    async (appointment, optionsConfig = {}) => {
      try {
        const [options, context] = await Promise.all([ensureOptions(), fetchAppointmentContext()]);
        setAppointmentModal({
          open: true,
          data: appointment,
          options,
          context,
          isNew: false,
          allowDelete: !!optionsConfig.allowDelete,
        });
      } catch (error) {
        setGlobalError(error.message || 'Не удалось открыть запись');
      }
    },
    [ensureOptions, fetchAppointmentContext, setGlobalError]
  );
  const handleCreateAppointment = useCallback(async (preset = {}) => {
    try {
      const [options, context] = await Promise.all([ensureOptions(), fetchAppointmentContext()]);
      const today = preset.Date || getLocalISODateString();
      const defaultStatus = normalizeStatusValue(options.statuses?.[0] || BOT_SUPPORTED_STATUS_OPTIONS[0] || 'Активная');
      const defaultBarber = pickBarberForUser(session, options.barbers || []);
      setAppointmentModal({
        open: true,
        data: {
          id: null,
          CustomerName: '',
          Phone: '',
          Barber: preset.Barber || defaultBarber,
          Date: today,
          Time: preset.Time || '',
          Status: defaultStatus,
          Services: '',
          UserID: '',
        },
        options,
        context,
        isNew: true,
        allowDelete: false,
      });
    } catch (error) {
      setGlobalError(error.message || 'Не удалось начать создание записи');
    }
  }, [ensureOptions, fetchAppointmentContext, session, setGlobalError]);
  const applyAppointmentStatusLocally = useCallback((appointment, nextStatus) => {
    const appointmentId = getRecordId(appointment);
    const normalizedStatus = normalizeStatusValue(nextStatus);
    if (!appointmentId || !normalizedStatus) return;
    const isStillActive = isActiveAppointmentStatus(normalizedStatus);
    const mapRows = (rows = []) =>
      rows.map((row) =>
        getRecordId(row) === appointmentId ? { ...row, Status: normalizedStatus } : row
      );
    const mapActiveBuckets = (rows = []) =>
      rows
        .map((row) =>
          getRecordId(row) === appointmentId ? { ...row, Status: normalizedStatus } : row
        )
        .filter((row) => isStillActive || getRecordId(row) !== appointmentId);
    setDashboard((prev) => {
      if (!prev) return prev;
      const nextAppointments = prev.appointments || {};
      const nextActive = mapActiveBuckets(nextAppointments.active || []);
      const nextUpcoming = mapActiveBuckets(nextAppointments.upcoming || []);
      const nextOverdue = mapActiveBuckets(nextAppointments.overdue || []);
      return {
        ...prev,
        appointments: {
          ...nextAppointments,
          active: nextActive,
          upcoming: nextUpcoming,
          overdue: nextOverdue,
        },
        stats: {
          ...(prev.stats || {}),
          activeAppointments: nextActive.length,
          upcomingAppointments: nextUpcoming.length,
          overdueAppointments: nextOverdue.length,
        },
      };
    });
    setRealtimeSnapshot((prev) => {
      if (!prev) return prev;
      const nextActive = mapActiveBuckets(prev.active || []);
      const nextUpcoming = mapActiveBuckets(prev.upcoming || []);
      const nextOverdue = mapActiveBuckets(prev.overdue || []);
      return {
        ...prev,
        rows: mapRows(prev.rows || []),
        active: nextActive,
        upcoming: nextUpcoming,
        overdue: nextOverdue,
        stats: {
          ...(prev.stats || {}),
          activeAppointments: nextActive.length,
          upcomingAppointments: nextUpcoming.length,
          overdueAppointments: nextOverdue.length,
        },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);
	  const handleSaveAppointment = async ({ id, payload, isNew }) => {
	    try {
	      if (isNew) {
	        await apiRequest('/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
	      } else if (id) {
	        await apiRequest(`/appointments/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
	      }
	      setAppointmentModal(buildAppointmentModalState());
	      fetchAll({ silent: true });
	    } catch (error) {
	      throw error;
	    }
	  };
	  const handleQuickUpdateAppointmentStatus = useCallback(
	    async (appointment, nextStatus) => {
	      const id = getRecordId(appointment);
	      if (!id || !nextStatus) return;
        applyAppointmentStatusLocally(appointment, nextStatus);
	      try {
	        await apiRequest(`/appointments/${encodeURIComponent(id)}`, {
	          method: 'PUT',
	          body: JSON.stringify({ Status: normalizeStatusValue(nextStatus) }),
	        });
	        fetchAll({ silent: true });
	      } catch (error) {
          fetchAll({ silent: true });
	        setGlobalError(error.message || 'Не удалось обновить статус записи');
	        throw error;
	      }
	    },
	    [apiRequest, applyAppointmentStatusLocally, fetchAll, setGlobalError]
	  );
	  const handleDeleteAppointment = async (appointment) => {
	    if (!appointment?.id) return;
	    const confirmed = await requestConfirm({
	      title: 'Удалить запись?',
	      message: 'Запись будет удалена без возможности восстановления.',
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
	    try {
	      await apiRequest(`/appointments/${encodeURIComponent(appointment.id)}`, { method: 'DELETE' });
	      setAppointmentModal(buildAppointmentModalState());
	      fetchAll({ silent: true });
	    } catch (error) {
	      setGlobalError(error.message || 'Не удалось удалить запись');
	    }
	  };
  const triggerAppReload = useCallback(() => {
    const reloadWithBypass = () => {
      const url = new URL(window.location.href);
      url.searchParams.set('_upd', Date.now().toString());
      window.location.replace(url.toString());
    };
    setTimeout(() => {
      try {
        if (navigator?.serviceWorker?.getRegistrations) {
          navigator.serviceWorker
            .getRegistrations()
            .then((registrations) =>
              Promise.all(
                registrations.map((reg) =>
                  Promise.resolve(reg.update()).catch((error) => {
                    console.warn("[update] SW registration update failed:", error);
                    return null;
                  }),
                ),
              ),
            )
            .catch((error) => {
              console.warn("[update] Failed to refresh SW registrations:", error);
            })
            .finally(reloadWithBypass);
          return;
        }
      } catch (error) {
        console.warn('[update] SW reload helper failed:', error);
      }
      reloadWithBypass();
    }, 3500);
  }, []);
  const handleRefreshUpdate = async () => {
    setSystemBusy(true);
    try {
      const info = await apiRequest('/system/update?force=1');
      setUpdateInfo(normalizeUpdateInfo(info));
    } catch (error) {
      setGlobalError(error.message || 'Не удалось проверить обновления');
    } finally {
      setSystemBusy(false);
    }
  };
  const handleApplyUpdate = async () => {
    console.log('[update] User requested apply update');
    const confirmed = await requestConfirm({
      title: 'Обновить систему?',
      message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
      confirmLabel: 'Обновить',
      tone: 'danger',
    });
    if (!confirmed) return;
    setSystemBusy(true);
    setPendingReloadReason('update');
    console.log('[update] Starting apply...');
    let restartPlanned = false;
    try {
      const result = await apiRequest('/system/update', { method: 'POST' });
      console.log('[update] Apply result:', result);
      if (result?.info || result?.available !== undefined || result?.updateAvailable !== undefined) {
        setUpdateInfo(normalizeUpdateInfo(result.info || result));
      }
      restartPlanned = Boolean(result?.restarting);
      if (restartPlanned) {
        console.log('[update] Restart flagged, reloading page soon...');
        triggerAppReload();
      } else {
        setPendingReloadReason(null);
      }
    } catch (error) {
      console.error('[update] Apply failed:', error);
      setGlobalError(error.message || 'Не удалось применить обновление');
      setPendingReloadReason(null);
    } finally {
      setSystemBusy(restartPlanned);
      console.log('[update] Apply finished');
    }
  };
  const handleRestartSystem = async () => {
    console.log('[restart] User requested restart');
    const confirmed = await requestConfirm({
      title: 'Перезапустить систему?',
      message: 'Сайт и бот будут остановлены и запущены заново. Это может занять до нескольких минут.',
      confirmLabel: 'Перезапуск',
      tone: 'danger',
    });
    if (!confirmed) return;
    setSystemBusy(true);
    setPendingReloadReason('restart');
    let restartPlanned = false;
    try {
      const result = await apiRequest('/system/restart', { method: 'POST' });
      restartPlanned = Boolean(result?.restarting);
      if (restartPlanned) {
        console.log('[restart] Restart scheduled, reloading page soon...');
        triggerAppReload();
      } else {
        setPendingReloadReason(null);
      }
    } catch (error) {
      console.error('[restart] Failed:', error);
      setGlobalError(error.message || 'Не удалось выполнить перезапуск');
      setPendingReloadReason(null);
    } finally {
      setSystemBusy(restartPlanned);
    }
  };
  if (!session?.token) {
    return <LoginScreen onLogin={handleLogin} error={authError} />;
  }
  const preferredTableTarget = pendingTableView;
  const liveUpdatedAt = realtimeSnapshot?.updatedAt || null;
  const effectiveLiveStatus = pendingReloadReason ? 'updating' : connectionStatus;
  const isMobileFlatTablePage =
    isMobile &&
    activeTab === 'tables' &&
    (activeDataTable === 'Appointments' || activeDataTable === 'Users');
  const mainClassName = classNames(
    'flex-1 min-w-0 w-full overflow-visible md:overflow-x-hidden',
    isMobileFlatTablePage
      ? 'space-y-0 px-0 pt-0 pb-24'
      : 'space-y-4 p-4 md:p-8 md:pt-6',
    isMobile && !isMobileFlatTablePage ? 'pb-24' : ''
  );
  const renderActive = () => {
    if (loading) return <LoadingState />;
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView
            data={dashboard}
            onOpenAppointment={handleOpenAppointment}
            onOpenProfile={openProfile}
            onCreateAppointment={handleCreateAppointment}
            onNavigateTable={handleSidebarTableChange}
            onQuickUpdateStatus={handleQuickUpdateAppointmentStatus}
            availableTables={visibleTableOrder}
            currentUser={session || null}
            currentBarber={currentBarber}
            liveUpdatedAt={liveUpdatedAt}
            liveStatus={effectiveLiveStatus}
          />
        );
      case 'tables':
        return (
          <TablesWorkspace
            apiRequest={apiRequest}
            sharedOptions={optionsCache}
            onOptionsUpdate={setOptionsCache}
            onOpenProfile={openProfile}
            onOpenAppointmentRecord={handleOpenAppointment}
            onCreateAppointment={handleCreateAppointment}
            clients={dashboard?.clients || []}
            currentUser={session || null}
            liveAppointments={realtimeSnapshot?.rows || null}
            liveUpdatedAt={realtimeSnapshot?.updatedAt || null}
            liveStatus={effectiveLiveStatus}
            barbers={barbers}
            services={services}
            onBarberFieldChange={handleBarberFieldChange}
            onSaveBarber={handleSaveBarber}
            onAddBarber={handleAddBarber}
            onDeleteBarber={handleDeleteBarber}
            onReorderBarbers={handleReorderBarbers}
            barberReorderBusy={barberReorderBusy}
            onServiceFieldChange={handleServiceFieldChange}
            onServicePriceChange={handleServicePriceChange}
            onDeleteService={handleDeleteService}
            onAddService={handleAddService}
            onReorderServices={handleReorderServices}
            serviceReorderBusy={serviceReorderBusy}
            onCreatePosition={handleCreatePosition}
            onUpdatePosition={handleUpdatePosition}
            onDeletePosition={handleDeletePosition}
            onActiveTableChange={handleActiveTableSync}
            preferredTable={preferredTableTarget}
            onPreferredTableConsumed={handlePreferredTableConsumed}
            onRequestConfirm={requestConfirm}
            onBlockClient={handleBlockClient}
            onAdjustClientBs={handleAdjustClientBs}
            onAddClientWarning={handleAddClientWarning}
            uploadAvatar={handleUploadAvatar}
            uploadCard={handleUploadCard}
            deleteAvatar={handleDeleteAvatar}
            loadAvatarOptions={handleLoadAvatarOptions}
            dataTables={dataTables}
            visibleTableOrder={visibleTableOrder}
            role={role}
            applyFavoriteBarberRule={applyFavoriteBarberRule}
          />
        );
      case 'profile':
        return (
          <BarberProfileView
            barber={currentBarber}
            loadAvatarOptions={handleLoadAvatarOptions}
            uploadAvatar={handleUploadAvatar}
            deleteAvatar={handleDeleteAvatar}
            onFieldChange={handleBarberFieldChange}
            onSave={handleSaveBarber}
            allowRatingEdit={role === ROLE_OWNER || role === ROLE_CREATOR}
          />
        );
      case 'system':
        if (!canAccessSystem) {
          return (
            <SectionCard title="Недостаточно прав">
              <p className="text-sm text-[var(--crm-muted)]">Раздел доступен только владельцу.</p>
            </SectionCard>
          );
        }
        return (
          <SystemSettingsView
            status={botStatus}
            settings={botSettings}
            backups={dashboard?.backups || []}
            messages={botMessages}
            onToggleEnabled={handleBotToggle}
            onStart={() => handleBotAction('start')}
            onStop={() => handleBotAction('stop')}
            onRestart={() => handleBotAction('restart')}
            onSaveSettings={handleSaveSettings}
            onSaveMessage={(id, draft, persist) => handleSaveMessage(id, draft, persist)}
            onRestoreBackup={handleRestoreBackup}
            onCreateBackup={handleCreateBackup}
            onDeleteBackup={handleDeleteBackup}
            licenseStatus={licenseStatus}
            updateInfo={updateInfo}
            onRefreshUpdate={handleRefreshUpdate}
            onApplyUpdate={handleApplyUpdate}
            siteConfig={siteConfig}
            siteSaving={siteConfigSaving}
            siteOnlineStats={siteOnlineStats}
            onSaveSite={handleSaveSiteConfig}
            onUploadSiteImage={handleUploadAvatar}
            services={services}
            onRestartSystem={handleRestartSystem}
            pendingReloadReason={pendingReloadReason}
            systemBusy={systemBusy}
            token={botToken}
            onUpdateToken={handleUpdateBotToken}
            section={resolvedSystemSection}
            onSectionChange={setSystemSection}
            role={role}
          />
        );
      default:
        return (
          <DashboardView
            data={dashboard}
            onOpenAppointment={handleOpenAppointment}
            onOpenProfile={openProfile}
            onCreateAppointment={handleCreateAppointment}
            onNavigateTable={handleSidebarTableChange}
            onQuickUpdateStatus={handleQuickUpdateAppointmentStatus}
            availableTables={visibleTableOrder}
            currentUser={session || null}
            currentBarber={currentBarber}
            liveUpdatedAt={liveUpdatedAt}
            liveStatus={effectiveLiveStatus}
          />
        );
    }
  };
  if (fatalError) {
    return (
      <div className="crm-app-shell flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center text-white">
        <div className="crm-modal-surface max-w-lg space-y-3 p-6">
          <p className="text-lg font-semibold text-rose-200">Критическая ошибка интерфейса</p>
          <p className="text-sm text-[var(--crm-text)]">
            Сообщение ниже можно переслать разработчику. После исправления перезагрузите страницу.
          </p>
          <pre className="crm-inline-panel overflow-x-auto rounded-xl p-4 text-left text-xs text-rose-200">
            {fatalError}
          </pre>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="crm-ghost-btn px-4 py-2 text-sm"
        >
          Перезагрузить страницу
        </button>
      </div>
    );
  }
  return (
    <div className="crm-app-shell min-h-screen text-white">
      {isMobile && (
        <MobileTabs
          activeTab={activeTab}
          onChange={setActiveTab}
          session={session}
          currentBarber={currentBarber}
          onLogout={handleLogout}
          liveUpdatedAt={liveUpdatedAt}
          liveStatus={effectiveLiveStatus}
          tabs={viewTabs}
          activeDataTable={activeDataTable}
          onSelectTable={handleSidebarTableChange}
          tableShortcuts={sidebarShortcuts}
          systemSection={resolvedSystemSection}
          onSelectSystemSection={setSystemSection}
        />
      )}
      <div className="flex">
        <Sidebar
          session={session}
          activeTab={activeTab}
          onChange={setActiveTab}
          onLogout={handleLogout}
          liveUpdatedAt={liveUpdatedAt}
          liveStatus={effectiveLiveStatus}
          activeDataTable={activeDataTable}
          onSelectTable={handleSidebarTableChange}
          tabs={viewTabs}
          tableShortcuts={sidebarShortcuts}
          systemSection={resolvedSystemSection}
          onSelectSystemSection={setSystemSection}
        />
        <main className={mainClassName}>
          {globalError && <ErrorBanner message={globalError} />}
          <div className="crm-page-switch">
            {renderActive()}
          </div>
        </main>
      </div>
      <ProfileModal
        state={profileModal}
        onClose={() => setProfileModal({ open: false, data: null, loading: false })}
        onBlockClient={handleBlockClient}
      />
      <AppointmentModal
        open={appointmentModal.open}
        appointment={appointmentModal.data}
        options={appointmentModal.options || optionsCache || {}}
        appointments={appointmentModal.context?.appointments || []}
        schedules={appointmentModal.context?.schedules || []}
        onClose={() => setAppointmentModal(buildAppointmentModalState())}
        onSave={handleSaveAppointment}
        isNew={appointmentModal.isNew}
        clients={dashboard?.clients || []}
        serviceCatalog={services}
        canDelete={appointmentModal.allowDelete}
        onDelete={appointmentModal.allowDelete ? handleDeleteAppointment : null}
      />
      <ConfirmDialog {...confirmDialog} onResult={handleConfirmResult} />
    </div>
  );
};
let reactAppRoot = null;
const renderApp = () => {
  const rootElement = document.getElementById('root');
  try {
    if (!rootElement) {
      throw new Error('Не найден контейнер #root');
    }
    if (!reactAppRoot) {
      reactAppRoot =
        typeof createRoot === 'function'
          ? createRoot(rootElement)
          : {
              render: (node) => ReactDOM.render(node, rootElement),
            };
    }
    reactAppRoot.render(<App />);
    sendClientLog({ level: 'info', stage: 'render-success' });
  } catch (error) {
    console.error('Fatal render error:', error);
    sendClientLog({
      level: 'error',
      stage: 'render-fatal',
      message: error?.message || '',
      stack: error?.stack || '',
    });
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="
          min-height:100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:16px;
          background-color:#020617;
          color:#fff;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding:24px;
          text-align:center;
        ">
          <div style="max-width:480px;border:1px solid rgba(248,113,113,0.4);background:rgba(15,23,42,0.85);border-radius:16px;padding:24px;">
            <p style="font-size:18px;font-weight:600;color:#fecaca;margin-bottom:12px;">
              Ошибка инициализации интерфейса
            </p>
            <p style="font-size:14px;color:#cbd5f5;white-space:pre-wrap;">
              ${error?.message || 'Смотрите консоль браузера (F12)'}
            </p>
          </div>
          <button style="
            border:1px solid #4b5563;
            background:transparent;
            color:#fff;
            border-radius:999px;
            padding:8px 20px;
            cursor:pointer;
          " onclick="window.location.reload()">
            Перезагрузить
          </button>
        </div>
      `;
    }
  }
};
renderApp();

