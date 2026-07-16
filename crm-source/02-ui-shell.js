const LoadingState = ({ label = 'Загружаю данные...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-[var(--crm-muted)]">
    <span className="animate-pulse">{label}</span>
  </div>
);
const ErrorBanner = ({ message }) => (
  <div className="crm-error-banner px-4 py-3 text-sm font-medium">{message}</div>
);

// ── Toast notification system ──
const playNotificationSound = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch {}
};

const getNotificationPrefs = () => {
  try {
    return JSON.parse(localStorage.getItem('crm.notifications') || '{}');
  } catch { return {}; }
};

// ── Native browser notifications (OS-level) ──
const requestNotificationPermission = async () => {
  if (typeof Notification === 'undefined') return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  try { return await Notification.requestPermission(); } catch { return 'denied'; }
};

const showNativeNotification = (title, body, options = {}) => {
  const prefs = getNotificationPrefs();
  if (prefs.browserNotify === false) return;
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  try {
    const n = new Notification(title, { body, tag: options.tag || 'crm-notification', ...options });
    setTimeout(() => { try { n.close(); } catch {} }, 6000);
  } catch {}
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const ToastContext = React.createContext(null);
const useToast = () => React.useContext(ToastContext);

const ToastContainer = ({ toasts, onDismiss }) => {
  if (!toasts.length) return null;
  return (
    <div className="crm-toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`crm-toast crm-toast-${t.type}`} onClick={() => onDismiss(t.id)}>
          <span className="crm-toast-icon">{t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : 'ℹ'}</span>
          <span className="crm-toast-message">{t.message}</span>
        </div>
      ))}
    </div>
  );
};
const VisitHistoryList = ({
  visits = [],
  loading = false,
  error = '',
  emptyMessage = 'История визитов пуста.',
  maxHeightClass = 'max-h-64',
  showSummary = true,
}) => {
  if (loading) {
    return <p className="text-sm text-[var(--crm-muted)]">Загружаем историю...</p>;
  }
  if (error) {
    return <ErrorBanner message={error} />;
  }
  return (
    <div className="space-y-2">
      {showSummary && (
        <div className="flex items-center justify-between text-xs text-[var(--crm-muted)]">
          <span>
            Записей за 12 месяцев: <span className="font-semibold text-white">{visits.length}</span>
          </span>
          <span>Последние визиты</span>
        </div>
      )}
      <div className={classNames('space-y-2 overflow-auto', maxHeightClass)}>
        {visits.length ? (
          visits.map((visit) => {
            const isActive = isActiveAppointmentStatus(visit.Status);
            return (
              <div
                key={`${visit.id || visit.dateLabel}-${visit.orderNumber}`}
                className={classNames(
                  'crm-inline-panel p-3 text-xs transition',
                  isActive ? 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]' : 'text-[var(--crm-text)]'
                )}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-[var(--crm-muted)]">
                  <span className="font-semibold text-white">Визит №{visit.orderNumber || '—'}</span>
                  <span>{visit.dateLabel}</span>
                </div>
                <p className="mt-1 text-sm text-white">{visit.Barber || '—'}</p>
                <p className="text-[var(--crm-muted)]">{visit.Services || '—'}</p>
                {visit.Status && <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--crm-muted)]">{visit.Status}</p>}
              </div>
            );
          })
        ) : (
          <p className="text-sm text-[var(--crm-muted)]">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
};
const SectionCard = ({ title, actions, children, hideTitleOnMobile = false, className = '' }) => (
  <div className={classNames('crm-section-card space-y-5 p-5 sm:p-6', className)}>
    <div
      className={classNames(
        'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
        hideTitleOnMobile && !actions && 'hidden sm:flex',
        hideTitleOnMobile && actions && 'sm:flex'
      )}
    >
      <div
        className={classNames(
          'flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-1 sm:min-w-0',
          hideTitleOnMobile && 'sm:flex',
          hideTitleOnMobile && actions && 'hidden sm:flex'
        )}
      >
        <h2 className={classNames('crm-section-title', hideTitleOnMobile && 'hidden sm:block')}>{title}</h2>
        {actions && <div className="ml-auto sm:hidden">{actions}</div>}
      </div>
      {actions && (
        <div className={classNames('sm:block sm:flex-shrink-0', hideTitleOnMobile ? 'block' : 'hidden sm:block')}>
          {actions}
        </div>
      )}
    </div>
    {children}
  </div>
);
const DefaultProfileIcon = ({ className = '', iconClassName = 'h-10 w-10 text-[var(--crm-muted)]' }) => (
  <div className={classNames('crm-soft-panel flex items-center justify-center text-[var(--crm-muted)]', className)}>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={classNames('h-10 w-10', iconClassName)}
    >
      <path d="M12 12.75a4.5 4.5 0 10-4.5-4.5 4.5 4.5 0 004.5 4.5zM5.25 20.25a6.75 6.75 0 0113.5 0v.75a.75.75 0 01-.75.75h-12a.75.75 0 01-.75-.75z" />
    </svg>
  </div>
);
const formatCompactLiveTimestamp = (value, nowTs = Date.now()) => {
  if (!value) return '';
  try {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '';
    const diffMs = Math.max(0, nowTs - parsed.getTime());
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } catch {
    return '';
  }
};
const LiveBadge = ({ timestamp, status = 'unknown' }) => {
  const tickingNow = useNowTick(1000);
  const [isPhoneViewport, setIsPhoneViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
  const [mobileTimeVisible, setMobileTimeVisible] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handleResize = () => setIsPhoneViewport(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (!mobileTimeVisible) return undefined;
    const timer = setTimeout(() => setMobileTimeVisible(false), 2200);
    return () => clearTimeout(timer);
  }, [mobileTimeVisible]);
  if (status === 'unknown') return null;
  const isOffline = status === 'offline';
  const isOnline = status === 'online';
  const isUpdating = status === 'updating';
  const label = isOffline ? 'OFFLINE' : isUpdating ? 'UPDATING' : 'LIVE';
  const resolvedTimeLabel = isOnline && timestamp
    ? (isPhoneViewport ? formatCompactLiveTimestamp(timestamp, tickingNow) : formatLiveTimestamp(timestamp, tickingNow))
    : null;
  const timeLabel = isPhoneViewport ? (mobileTimeVisible ? resolvedTimeLabel : null) : resolvedTimeLabel;
  const badgeToneClass = (() => {
    if (isOffline) return 'bg-rose-500/12 text-rose-100';
    if (isUpdating) return 'bg-[color:var(--crm-highlight-soft)] text-[color:var(--crm-highlight-text)]';
    return 'bg-[color:var(--crm-primary-container)] text-[#eafffb]';
  })();
  const dotToneClass = isOffline ? 'bg-rose-400' : isUpdating ? 'animate-pulse bg-[color:var(--crm-highlight)]' : 'animate-pulse bg-[color:var(--crm-primary)]';
  const timeToneClass = isOffline ? 'text-rose-100/80' : isUpdating ? 'text-[color:var(--crm-highlight-text)]/90' : 'text-[#eafffb]/82';
  const handleMobileToggle = () => {
    if (!isPhoneViewport || !resolvedTimeLabel) return;
    setMobileTimeVisible(true);
  };
  return (
    <button
      type="button"
      onClick={handleMobileToggle}
      disabled={!isPhoneViewport || !resolvedTimeLabel}
      className={classNames(
        'flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]',
        isPhoneViewport && resolvedTimeLabel ? 'cursor-pointer' : 'cursor-default',
        badgeToneClass
      )}
    >
      <span className={classNames('h-2 w-2 rounded-full', dotToneClass)} />
      {label}
      {timeLabel && <span className={classNames(timeToneClass, 'normal-case tracking-normal')}>{timeLabel}</span>}
    </button>
  );
};
const IconTrash = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const IconPlus = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);
const IconEdit = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconLogin = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);
const IconCheck = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconClose = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSave = ({ className = 'h-5 w-5' }) => <MaterialNavIcon name="save" className={className} />;
const IconBan = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="7" y1="17" x2="17" y2="7" />
  </svg>
);
const RESPONSIVE_ACTION_BUTTON_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00bfaf]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-4 sm:py-2.5 sm:text-sm';
const SHEET_FOOTER_BUTTON_CLASS = 'crm-sheet-footer-btn';
const MaterialNavIcon = ({ name, className = 'h-5 w-5' }) => {
  const fontSize = className.includes('h-6')
    ? 24
    : className.includes('h-4')
      ? 16
      : className.includes('h-3.5')
        ? 14
        : 20;
  return (
    <span className={classNames('crm-material-symbol shrink-0', className)} style={{ fontSize: `${fontSize}px` }} aria-hidden="true">
      {name}
    </span>
  );
};
const IconDashboard = ({ className = 'h-5 w-5' }) => (
  <MaterialNavIcon name="home" className={className} />
);
const IconData = ({ className = 'h-5 w-5' }) => (
  <MaterialNavIcon name="table_chart" className={className} />
);
const IconBot = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v3" />
    <rect x="5" y="7" width="14" height="11" rx="4" />
    <path d="M5 12H3m18 0h-2M9 19v2m6-2v2" />
    <circle cx="10" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="14" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9.5 15h5" />
  </svg>
);
const IconSystem = ({ className = 'h-5 w-5' }) => (
  <MaterialNavIcon name="settings" className={className} />
);
const IconProfile = ({ className = 'h-5 w-5' }) => (
  <MaterialNavIcon name="person" className={className} />
);
const IconSettings = ({ className = 'h-5 w-5' }) => (
  <MaterialNavIcon name="settings" className={className} />
);
const IconCalendarDay = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6" />
  </svg>
);
const IconCalendarWeek = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 13.5h9M7.5 16.5h9M8 11h.01M12 11h.01M16 11h.01" />
  </svg>
);
const IconCalendarMonth = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8M8 16h8" />
  </svg>
);
const IconScaleCompact = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="6" width="4" height="4" rx="1" />
    <rect x="10" y="6" width="4" height="4" rx="1" />
    <rect x="16" y="6" width="4" height="4" rx="1" />
    <rect x="4" y="14" width="4" height="4" rx="1" />
    <rect x="10" y="14" width="4" height="4" rx="1" />
    <rect x="16" y="14" width="4" height="4" rx="1" />
  </svg>
);
const IconScaleNormal = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="7" width="6" height="10" rx="1.5" />
    <rect x="14" y="7" width="6" height="10" rx="1.5" />
  </svg>
);
const IconScaleLarge = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="6" width="16" height="12" rx="2" />
  </svg>
);
const IconChevronLeft = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
  </svg>
);
const IconChevronRight = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
  </svg>
);
const IconFilter = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);
const APPOINTMENT_CALENDAR_VIEW_ICONS = {
  day: IconCalendarDay,
  week: IconCalendarWeek,
  month: IconCalendarMonth,
};
const APPOINTMENT_CALENDAR_SCALE_ICONS = {
  compact: IconScaleCompact,
  normal: IconScaleNormal,
  large: IconScaleLarge,
};
const IconDots = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
);
const IconBell = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const VIEW_TAB_ICONS = {
  dashboard: IconDashboard,
  tables: IconData,
  system: IconSystem,
  profile: IconProfile,
  settings: IconSettings,
};
const SYSTEM_SUB_SECTIONS = Object.freeze([
  { id: 'bot', label: 'Бот' },
  { id: 'site', label: 'Сайт' },
  { id: 'system', label: 'Система' },
]);
const UI_TEXT = Object.freeze({
  accountTitle: 'Ваш аккаунт',
  logout: 'Выйти',
  newAppointmentCta: 'Новая запись',
  liveFallback: 'LIVE',
});
const Modal = ({ title, isOpen, onClose, children, footer, maxWidthClass = 'max-w-3xl', sheetOnMobile = true }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return undefined;
    }
    if (!shouldRender) return undefined;
    const timer = setTimeout(() => setShouldRender(false), 220);
    return () => clearTimeout(timer);
  }, [isOpen, shouldRender]);
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return undefined;
    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyTouchAction = body.style.touchAction;
    const prevHtmlOverflow = documentElement.style.overflow;
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    documentElement.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevBodyTouchAction;
      documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isOpen]);
  if (!shouldRender) return null;
  const modalNode = (
    <div
      className={classNames(
        'crm-app-shell fixed inset-0 z-[100] overflow-hidden bg-black/60 text-[var(--crm-text)]',
        isOpen ? 'crm-modal-overlay-open' : 'crm-modal-overlay-close'
      )}
    >
      <div
        className={classNames(
          'flex h-full w-full',
          sheetOnMobile
            ? 'items-stretch justify-stretch sm:items-center sm:justify-center sm:px-4 sm:py-6'
            : 'items-center justify-center px-4 py-4 sm:px-4 sm:py-6'
        )}
        onMouseDown={(event) => {
          if (event.target !== event.currentTarget) return;
          onClose?.();
        }}
      >
        <div
          className={classNames(
            'crm-modal-surface flex min-h-0 w-full flex-col overflow-hidden',
            isOpen ? 'crm-modal-surface-open' : 'crm-modal-surface-close',
            maxWidthClass,
            sheetOnMobile
              ? 'h-full max-h-full rounded-none sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:rounded-[32px]'
              : 'h-auto max-h-[calc(100dvh-2rem)] rounded-[28px] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[32px]'
          )}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div
            className={classNames(
              sheetOnMobile
                ? 'pointer-events-none absolute inset-x-3 top-[max(env(safe-area-inset-top),0.5rem)] z-30 sm:pointer-events-auto sm:static sm:inset-auto sm:px-0 sm:pt-0'
                : 'pointer-events-auto static inset-auto z-30 px-0 pt-0'
            )}
          >
            <div
              className={classNames(
                'pointer-events-auto flex min-w-0 items-center justify-between gap-3',
                sheetOnMobile
                  ? 'rounded-[26px] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.24)] sm:rounded-none sm:bg-transparent sm:px-6 sm:py-4 sm:shadow-none'
                  : 'px-4 py-4 sm:px-6 sm:py-4'
              )}
              style={sheetOnMobile ? { background: 'color-mix(in srgb, var(--crm-surface-4) 94%, rgba(14,18,18,0.98))' } : undefined}
            >
              <h3 className="min-w-0 flex-1 truncate text-lg font-extrabold tracking-[-0.03em] text-white">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="crm-ghost-btn h-10 w-10 min-h-0 flex-shrink-0 p-0 text-[var(--crm-muted)] hover:text-white"
                aria-label="Закрыть"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'relative z-0 min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 space-y-4 sm:px-6 sm:py-4',
              sheetOnMobile ? 'pb-[8.25rem] pt-[5.75rem]' : 'py-4'
            )}
          >
            {children}
          </div>
          {footer && (
            <div
              className={classNames(
                sheetOnMobile
                  ? 'pointer-events-none absolute inset-x-3 bottom-[max(env(safe-area-inset-bottom),0.5rem)] z-30 sm:pointer-events-auto sm:static sm:inset-auto sm:px-0 sm:pb-0 sm:pt-0'
                  : 'pointer-events-auto static inset-auto z-30 px-0 pb-0 pt-0'
              )}
            >
              <div
                className={classNames(
                  'pointer-events-auto flex flex-wrap justify-end gap-2 sm:gap-3',
                  sheetOnMobile
                    ? 'rounded-[26px] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.24)] sm:rounded-none sm:bg-transparent sm:px-6 sm:py-4 sm:shadow-none'
                    : 'px-4 pb-4 pt-3 sm:px-6 sm:py-4'
                )}
                style={sheetOnMobile ? { background: 'color-mix(in srgb, var(--crm-surface-4) 94%, rgba(14,18,18,0.98))' } : undefined}
              >
                {footer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  if (typeof document !== 'undefined' && document.body) {
    return createPortal(modalNode, document.body);
  }
  return modalNode;
};
const ConfirmDialog = ({ open, title, message, confirmLabel = 'Подтвердить', cancelLabel = 'Отмена', tone = 'neutral', onResult }) => {
  if (!open) return null;
  return (
    <Modal
      isOpen={open}
      title={title || 'Подтвердите действие'}
      onClose={() => onResult(false)}
      maxWidthClass="max-w-md"
      sheetOnMobile={false}
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={() => onResult(false)} className={classNames('crm-ghost-btn', SHEET_FOOTER_BUTTON_CLASS)}>
            {cancelLabel}
          </button>
          <button
            onClick={() => onResult(true)}
            className={classNames(
              SHEET_FOOTER_BUTTON_CLASS,
              tone === 'danger' ? 'crm-danger-btn' : tone === 'success' ? 'crm-action-btn' : 'crm-tonal-btn'
            )}
          >
            {confirmLabel}
          </button>
        </div>
      }
    >
      <p className="text-sm text-[var(--crm-text)]">{message || 'Вы уверены, что хотите продолжить?'}</p>
    </Modal>
  );
};
const formatRelativeTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  if (diffMin < 1) return 'только что';
  if (diffMin < 60) return `${diffMin} мин назад`;
  if (diffHour < 24) return `${diffHour} ч назад`;
  if (diffDay < 7) return `${diffDay} дн назад`;
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};
const NotificationHistorySheet = ({ isOpen, onClose, notifications = [], onLogout, onClearHistory, onNavigate, showLogout = true }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Уведомления"
      onClose={onClose}
      maxWidthClass="max-w-md"
      sheetOnMobile={true}
      footer={
        <div className="flex w-full gap-2">
          {notifications.length > 0 && (
            <button
              onClick={onClearHistory}
              className={classNames('crm-ghost-btn crm-sheet-footer-btn', showLogout ? 'flex-1' : 'w-full')}
            >
              Очистить
            </button>
          )}
          {showLogout && (
            <button
              onClick={onLogout}
              className="crm-danger-btn crm-sheet-footer-btn flex-1"
            >
              {UI_TEXT.logout}
            </button>
          )}
        </div>
      }
    >
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-[var(--crm-muted)]">
          <IconBell className="h-12 w-12 mb-3 opacity-40" />
          <p className="text-sm">Нет уведомлений</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifications.map((notif) => {
            const iconClass = notif.type === 'success' ? 'text-emerald-400' : notif.type === 'error' ? 'text-rose-400' : 'text-blue-400';
            const bgClass = notif.type === 'success' ? 'bg-emerald-500/10' : notif.type === 'error' ? 'bg-rose-500/10' : 'bg-blue-500/10';
            const icon = notif.type === 'success' ? '✓' : notif.type === 'error' ? '✕' : 'ℹ';
            const hasAction = notif.action && notif.target;
            return (
              <button
                key={notif.id}
                type="button"
                onClick={() => {
                  if (hasAction) {
                    onNavigate?.(notif.target, notif.targetTable, notif.recordId, notif.action);
                    onClose?.();
                  }
                }}
                className={classNames(
                  'crm-inline-panel flex w-full items-start gap-3 p-3 text-left',
                  hasAction && 'cursor-pointer transition hover:bg-[color:var(--crm-surface-5)]'
                )}
              >
                <div className={classNames('flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold', bgClass, iconClass)}>
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-white">{notif.message}</p>
                  <p className="mt-0.5 text-[11px] text-[var(--crm-muted)]">{formatRelativeTime(notif.createdAt)}</p>
                </div>
                {hasAction && (
                  <IconChevronRight className="h-4 w-4 shrink-0 text-[var(--crm-muted)]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </Modal>
  );
};
const StatCard = ({ label, value, accent = 'text-[color:var(--crm-primary)]', onClick, compact = false }) => {
  const interactive = typeof onClick === 'function';
  const Wrapper = interactive ? 'button' : 'div';
  return (
      <Wrapper
        type={interactive ? 'button' : undefined}
        onClick={onClick}
        className={classNames(
          compact ? 'crm-stat-card rounded-[26px] px-4 py-3 text-left sm:px-5 sm:py-3.5' : 'crm-stat-card p-4 text-left sm:p-5',
          interactive &&
            'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00bfaf]/30'
        )}
      >
        <p className={classNames('uppercase text-[var(--crm-muted)]', compact ? 'max-w-[11ch] text-[10px] leading-[1.25] tracking-[0.16em] sm:max-w-none' : 'text-xs tracking-[0.18em]')}>{label}</p>
        <p className={classNames(compact ? 'mt-2 text-[28px] font-semibold leading-none sm:text-[30px]' : 'mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)}>{value}</p>
      </Wrapper>
  );
};
const useMovingNavIndicator = (activeId) => {
  const trackRef = useRef(null);
  const itemRefs = useRef(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0,
    transform: 'translate3d(0, 0, 0)',
    width: 0,
    height: 0,
  });
  const setItemRef = useCallback((itemId) => (node) => {
    if (node) {
      itemRefs.current.set(itemId, node);
    } else {
      itemRefs.current.delete(itemId);
    }
  }, []);
  useLayoutEffect(() => {
    const trackEl = trackRef.current;
    const activeEl = activeId ? itemRefs.current.get(activeId) : null;
    if (!trackEl || !activeEl) {
      setIndicatorStyle((prev) => (prev.opacity === 0 ? prev : { ...prev, opacity: 0 }));
      return undefined;
    }
    const update = () => {
      const trackRect = trackEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        opacity: 1,
        transform: `translate3d(${activeRect.left - trackRect.left + trackEl.scrollLeft}px, ${activeRect.top - trackRect.top + trackEl.scrollTop}px, 0)`,
        width: activeRect.width,
        height: activeRect.height,
      });
    };
    update();
    const raf = window.requestAnimationFrame(update);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    resizeObserver?.observe(trackEl);
    resizeObserver?.observe(activeEl);
    trackEl.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
      trackEl.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [activeId]);
  return { trackRef, setItemRef, indicatorStyle };
};
const Sidebar = ({
  session,
  activeTab,
  onChange,
  onLogout,
  liveUpdatedAt,
  liveStatus = 'unknown',
  activeDataTable = 'Appointments',
  onSelectTable,
  tabs,
  tableShortcuts,
  systemSection = 'bot',
  onSelectSystemSection,
  systemSubSections,
  settingsSection = 'profile',
  onSelectSettingsSection,
  settingsSubSections,
  currentBarber = null,
  notificationHistory = [],
  onClearNotificationHistory,
  onRefreshNotificationHistory,
  unreadCount = 0,
  onMarkNotificationsRead,
  onNavigate,
}) => {
  const username = session?.displayName || session?.username || '-';
  const userAvatarSrc = resolveAssetUrl(currentBarber?.avatarUrl);
  const [showNotificationsSheet, setShowNotificationsSheet] = useState(false);
  const sidebarTabs = Array.isArray(tabs) && tabs.length ? tabs : VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const sidebarShortcuts =
    Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS;
  const subSections = Array.isArray(systemSubSections) && systemSubSections.length ? systemSubSections : SYSTEM_SUB_SECTIONS;
  const settingsSubs = Array.isArray(settingsSubSections) && settingsSubSections.length ? settingsSubSections : [];
  const { trackRef, setItemRef, indicatorStyle } = useMovingNavIndicator(activeTab);
  const {
    trackRef: tableTrackRef,
    setItemRef: setTableItemRef,
    indicatorStyle: tableIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'tables' ? activeDataTable : null);
  const {
    trackRef: systemTrackRef,
    setItemRef: setSystemItemRef,
    indicatorStyle: systemIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'system' ? systemSection : null);
  const {
    trackRef: settingsTrackRef,
    setItemRef: setSettingsItemRef,
    indicatorStyle: settingsIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'settings' ? settingsSection : null);
  const handleOpenNotifications = () => {
    setShowNotificationsSheet(true);
    onRefreshNotificationHistory?.();
    onMarkNotificationsRead?.();
  };
  const handleCloseNotifications = () => setShowNotificationsSheet(false);
  const handleLogoutFromSheet = () => {
    setShowNotificationsSheet(false);
    onLogout?.();
  };
  return (
    <aside className="crm-sidebar hidden w-72 flex-shrink-0 flex-col p-5 lg:sticky lg:top-0 lg:z-10 lg:flex lg:h-screen lg:overflow-y-auto">
      <div className="border-b border-white/5 pb-5">
        <div className="flex items-center gap-3 px-1">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[color:var(--crm-surface-4)]">
            {userAvatarSrc ? (
              <img src={userAvatarSrc} alt={username} className="h-11 w-11 rounded-full object-cover" />
            ) : (
              <DefaultProfileIcon className="h-11 w-11" iconClassName="h-6 w-6 text-[var(--crm-muted)]" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{username}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--crm-muted)]">{UI_TEXT.accountTitle}</p>
          </div>
          <button
            type="button"
            onClick={handleOpenNotifications}
            aria-label="Уведомления"
            className="crm-ghost-btn relative h-9 w-9 min-h-0 shrink-0 p-0 text-[var(--crm-muted)] hover:text-white"
          >
            <IconBell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[color:var(--crm-primary)] px-1 text-[9px] font-bold text-white">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>
        </div>
        {(liveUpdatedAt || liveStatus !== 'unknown') && (
          <div className="mt-3 flex justify-center">
            <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
          </div>
        )}
        <button
          onClick={onLogout}
          className="crm-inline-panel mt-3 flex h-9 w-full items-center justify-center px-4 text-xs font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-5)] hover:text-white"
        >
          {UI_TEXT.logout}
        </button>
      </div>
      <nav ref={trackRef} className="relative mt-6 flex-1 space-y-2 overflow-y-auto">
        <div aria-hidden="true" className="crm-nav-indicator" style={indicatorStyle} />
        {sidebarTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
          return (
            <div key={tab.id} className="space-y-1">
                <button
                  ref={setItemRef(tab.id)}
                  onClick={() => onChange?.(tab.id)}
                  className={classNames(
                    'crm-sidebar-tab crm-nav-item flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold',
                    isActive && 'crm-sidebar-tab-active'
                  )}
                >
                  <IconComponent className="h-5 w-5 shrink-0" />
                  {tab.label}
              </button>
              {tab.id === 'tables' && (
                <div ref={tableTrackRef} className="relative space-y-1 pl-4">
                  <div aria-hidden="true" className="crm-nav-indicator" style={tableIndicatorStyle} />
                  {sidebarShortcuts.map((shortcut) => {
                    const isShortcutActive = activeDataTable === shortcut.id && activeTab === 'tables';
                    return (
                      <button
                        key={shortcut.id}
                        ref={setTableItemRef(shortcut.id)}
                        onClick={() => onSelectTable?.(shortcut.id)}
                        className={classNames(
                          'crm-subnav-pill crm-nav-item w-full px-3 py-2 text-left text-xs font-semibold',
                          isShortcutActive && 'crm-subnav-pill-active'
                        )}
                        disabled={!onSelectTable}
                      >
                        {shortcut.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {tab.id === 'system' && (
                <div ref={systemTrackRef} className="relative space-y-1 pl-4">
                  <div aria-hidden="true" className="crm-nav-indicator" style={systemIndicatorStyle} />
                  {subSections.map((section) => {
                    const isSectionActive = isActive && systemSection === section.id;
                    return (
                      <button
                        key={section.id}
                        ref={setSystemItemRef(section.id)}
                        onClick={() => {
                          onChange?.('system');
                          onSelectSystemSection?.(section.id);
                        }}
                        className={classNames(
                          'crm-subnav-pill crm-nav-item w-full px-3 py-2 text-left text-xs font-semibold',
                          isSectionActive && 'crm-subnav-pill-active'
                        )}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {tab.id === 'settings' && settingsSubs.length > 0 && (
                <div ref={settingsTrackRef} className="relative space-y-1 pl-4">
                  <div aria-hidden="true" className="crm-nav-indicator" style={settingsIndicatorStyle} />
                  {settingsSubs.map((section) => {
                    const isSectionActive = isActive && settingsSection === section.id;
                    return (
                      <button
                        key={section.id}
                        ref={setSettingsItemRef(section.id)}
                        onClick={() => {
                          onChange?.('settings');
                          onSelectSettingsSection?.(section.id);
                        }}
                        className={classNames(
                          'crm-subnav-pill crm-nav-item w-full px-3 py-2 text-left text-xs font-semibold',
                          isSectionActive && 'crm-subnav-pill-active'
                        )}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <NotificationHistorySheet
        isOpen={showNotificationsSheet}
        onClose={handleCloseNotifications}
        notifications={notificationHistory}
        onLogout={handleLogoutFromSheet}
        onClearHistory={onClearNotificationHistory}
        onNavigate={onNavigate}
        showLogout={false}
      />
    </aside>
  );
};
const MobileTabs = ({
  session,
  activeTab,
  onChange,
  onLogout,
  liveUpdatedAt,
  liveStatus = 'unknown',
  tabs,
  currentBarber = null,
  activeDataTable,
  onSelectTable,
  tableShortcuts,
  systemSection,
  onSelectSystemSection,
  systemSubSections,
  settingsSection,
  onSelectSettingsSection,
  settingsSubSections,
  notificationHistory = [],
  onClearNotificationHistory,
  onRefreshNotificationHistory,
  unreadCount = 0,
  onMarkNotificationsRead,
  onNavigate,
}) => {
  const username = session?.displayName || session?.username || '-';
  const userAvatarSrc = resolveAssetUrl(currentBarber?.avatarUrl);
  const [showNotificationsSheet, setShowNotificationsSheet] = useState(false);
  const [showSubmenus, setShowSubmenus] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const submenusVisibleRef = useRef(showSubmenus);
  const lastScrollRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const handleSelect = (tabId, options = {}) => {
    const { preserveSubmenus = false } = options;
    if (tabId === activeTab) {
      if (preserveSubmenus) {
        submenusVisibleRef.current = true;
        setShowSubmenus(true);
        return;
      }
      const next = !submenusVisibleRef.current;
      submenusVisibleRef.current = next;
      setShowSubmenus(next);
      return;
    }
    submenusVisibleRef.current = true;
    setShowSubmenus(true);
    onChange?.(tabId);
  };
  const availableTabs = Array.isArray(tabs) && tabs.length ? tabs : VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const { trackRef, setItemRef, indicatorStyle } = useMovingNavIndicator(activeTab);
  const {
    trackRef: tableTrackRef,
    setItemRef: setTableItemRef,
    indicatorStyle: tableIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'tables' ? activeDataTable : null);
  const {
    trackRef: systemTrackRef,
    setItemRef: setSystemItemRef,
    indicatorStyle: systemIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'system' ? systemSection : null);
  const {
    trackRef: settingsTrackRef,
    setItemRef: setSettingsItemRef,
    indicatorStyle: settingsIndicatorStyle,
  } = useMovingNavIndicator(activeTab === 'settings' ? settingsSection : null);
  const handleOpenNotifications = () => {
    setShowNotificationsSheet(true);
    onRefreshNotificationHistory?.();
    onMarkNotificationsRead?.();
  };
  const handleCloseNotifications = () => setShowNotificationsSheet(false);
  const handleLogoutFromSheet = () => {
    setShowNotificationsSheet(false);
    onLogout?.();
  };
  useEffect(() => {
    submenusVisibleRef.current = showSubmenus;
  }, [showSubmenus]);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY || 0;
      const last = lastScrollRef.current || 0;
      const scrollingDown = current > last + 4;
      const scrollingUp = current < last - 4;
      const nearTop = current < 16;
      if (scrollingDown && current > 24) {
        setShowHeader(false);
      } else if (scrollingUp || nearTop) {
        setShowHeader(true);
      }
      if (scrollingDown && current > 4 && submenusVisibleRef.current) {
        setShowSubmenus(false);
      } else if ((scrollingUp || nearTop) && !submenusVisibleRef.current) {
        setShowSubmenus(true);
      }
      lastScrollRef.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const root = document.documentElement;
    root.style.setProperty('--crm-mobile-header-offset', showHeader ? '68px' : '0px');
    root.style.setProperty('--crm-mobile-secondary-offset', showHeader ? '144px' : '76px');
    return () => {
      root.style.removeProperty('--crm-mobile-header-offset');
      root.style.removeProperty('--crm-mobile-secondary-offset');
    };
  }, [showHeader]);
  const resolvedShortcuts = useMemo(
    () => (Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS),
    [tableShortcuts]
  );
  const subSections = Array.isArray(systemSubSections) && systemSubSections.length ? systemSubSections : SYSTEM_SUB_SECTIONS;
  const settingsSubs = Array.isArray(settingsSubSections) && settingsSubSections.length ? settingsSubSections : [];
  const canRenderTableSubmenu = activeTab === 'tables' && resolvedShortcuts.length > 0;
  const canRenderSystemSubmenu = activeTab === 'system' && subSections.length > 0;
  const canRenderSettingsSubmenu = activeTab === 'settings' && settingsSubs.length > 0;
  const hasVisibleSubmenus = showSubmenus && (canRenderTableSubmenu || canRenderSystemSubmenu || canRenderSettingsSubmenu);
  const activeTopTabLabel =
    availableTabs.find((tab) => tab.id === activeTab)?.label ||
    UI_TEXT.accountTitle;
  const activeTableLabel =
    resolvedShortcuts.find((shortcut) => shortcut.id === activeDataTable)?.label || activeTopTabLabel;
  const activeSystemLabel =
    subSections.find((section) => section.id === systemSection)?.label || activeTopTabLabel;
  const activeSettingsLabel =
    settingsSubs.find((section) => section.id === settingsSection)?.label || activeTopTabLabel;
  const mobileHeaderTitle =
    activeTab === 'tables' ? activeTableLabel : activeTab === 'system' ? activeSystemLabel : activeTab === 'settings' ? activeSettingsLabel : activeTopTabLabel;
  const renderLiveIndicator = () =>
    liveStatus === 'unknown' && !liveUpdatedAt ? (
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--crm-muted)]">{UI_TEXT.liveFallback}</span>
    ) : (
      <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
    );
  return (
    <>
      <header
        className={classNames(
          'crm-mobile-header fixed inset-x-0 top-0 z-30 transition-transform duration-200 ease-out lg:hidden',
          showHeader ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="relative px-4 py-3">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-16">
            <p className="truncate text-center text-base font-semibold tracking-[-0.03em] text-white">{mobileHeaderTitle}</p>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex min-w-[92px] justify-start">
              {renderLiveIndicator()}
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={handleOpenNotifications}
                aria-label="Уведомления"
                className="crm-ghost-btn relative h-11 w-11 min-h-0 p-0"
              >
                {userAvatarSrc ? (
                  <img src={userAvatarSrc} alt={username} className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <DefaultProfileIcon className="h-8 w-8 rounded-full" iconClassName="h-4.5 w-4.5 text-[var(--crm-muted)]" />
                )}
                {unreadCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[color:var(--crm-primary)] px-1 text-[9px] font-bold text-white">
                    {unreadCount > 99 ? '99+' : unreadCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[68px] lg:hidden" />
      <nav className="fixed inset-x-0 bottom-0 z-30 px-4 pb-6 pt-4 lg:hidden">
        <div className="mx-auto max-w-md">
          <div className="relative">
            <div
              className={classNames(
                'pointer-events-none absolute inset-x-3 bottom-0 rounded-[32px] bg-gradient-to-b from-transparent via-[#0a1120]/85 to-[#02040c]/95 shadow-[0_-14px_40px_rgba(0,0,0,0.65)] transition-all duration-300',
                hasVisibleSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}
              aria-hidden="true"
            />
            <div className="crm-mobile-nav-shell relative px-4 py-3">
              <div
                className={classNames(
                  'space-y-2 overflow-hidden transition-[max-height,opacity,transform,padding] duration-300 ease-out',
                  hasVisibleSubmenus
                    ? 'max-h-32 pb-2 opacity-100 translate-y-0'
                    : 'max-h-0 pb-0 opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                {canRenderTableSubmenu && (
                  <div
                    className={classNames(
                      'no-scrollbar relative flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                    ref={tableTrackRef}
                  >
                    <div aria-hidden="true" className="crm-nav-indicator" style={tableIndicatorStyle} />
                    {resolvedShortcuts.map((shortcut) => {
                      const isShortcutActive = activeDataTable === shortcut.id;
                      const canSelectTable = typeof onSelectTable === 'function';
                      return (
                        <button
                          key={shortcut.id}
                          ref={setTableItemRef(shortcut.id)}
                          type="button"
                          onClick={() => {
                            handleSelect('tables', { preserveSubmenus: true });
                            onSelectTable?.(shortcut.id);
                          }}
                          disabled={!canSelectTable}
                          className={classNames(
                            'crm-subnav-pill crm-nav-item flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
                            isShortcutActive && 'crm-subnav-pill-active',
                            !canSelectTable && 'opacity-50'
                          )}
                        >
                          {shortcut.label}
                        </button>
                      );
                    })}
                  </div>
                )}
                {canRenderSystemSubmenu && (
                  <div
                    className={classNames(
                      'no-scrollbar relative flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                    ref={systemTrackRef}
                  >
                    <div aria-hidden="true" className="crm-nav-indicator" style={systemIndicatorStyle} />
                    {subSections.map((section) => {
                      const isSectionActive = systemSection === section.id;
                      const canSelect = typeof onSelectSystemSection === 'function';
                      return (
                        <button
                          key={section.id}
                          ref={setSystemItemRef(section.id)}
                          type="button"
                          onClick={() => {
                            handleSelect('system', { preserveSubmenus: true });
                            onSelectSystemSection?.(section.id);
                          }}
                          disabled={!canSelect}
                          className={classNames(
                            'crm-subnav-pill crm-nav-item flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
                            isSectionActive && 'crm-subnav-pill-active',
                            !canSelect && 'opacity-50'
                          )}
                        >
                          {section.label}
                        </button>
                      );
                    })}
                  </div>
                )}
                {canRenderSettingsSubmenu && (
                  <div
                    className={classNames(
                      'no-scrollbar relative flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                    ref={settingsTrackRef}
                  >
                    <div aria-hidden="true" className="crm-nav-indicator" style={settingsIndicatorStyle} />
                    {settingsSubs.map((section) => {
                      const isSectionActive = settingsSection === section.id;
                      const canSelect = typeof onSelectSettingsSection === 'function';
                      return (
                        <button
                          key={section.id}
                          ref={setSettingsItemRef(section.id)}
                          type="button"
                          onClick={() => {
                            handleSelect('settings', { preserveSubmenus: true });
                            onSelectSettingsSection?.(section.id);
                          }}
                          disabled={!canSelect}
                          className={classNames(
                            'crm-subnav-pill crm-nav-item flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
                            isSectionActive && 'crm-subnav-pill-active',
                            !canSelect && 'opacity-50'
                          )}
                        >
                          {section.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div ref={trackRef} className="relative flex w-full items-center gap-3 px-2 py-1 transition-all duration-300">
                <div aria-hidden="true" className="crm-nav-indicator" style={indicatorStyle} />
                {availableTabs.map((tab) => {
                  const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      ref={setItemRef(tab.id)}
                      key={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className={classNames(
                        'crm-mobile-tab crm-nav-item flex-1 px-3 py-2 text-center text-sm font-semibold',
                        isActive && 'crm-mobile-tab-active'
                      )}
                      aria-label={tab.label}
                    >
                      <IconComponent className="mx-auto h-6 w-6" />
                      <span className="sr-only">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NotificationHistorySheet
        isOpen={showNotificationsSheet}
        onClose={handleCloseNotifications}
        notifications={notificationHistory}
        onLogout={handleLogoutFromSheet}
        onClearHistory={onClearNotificationHistory}
        onNavigate={onNavigate}
      />
    </>
  );
};
