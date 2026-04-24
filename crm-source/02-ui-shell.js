const LoadingState = ({ label = 'Загружаю данные...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-[var(--crm-muted)]">
    <span className="animate-pulse">{label}</span>
  </div>
);
const ErrorBanner = ({ message }) => (
  <div className="crm-error-banner px-4 py-3 text-sm font-medium">{message}</div>
);
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
const SectionCard = ({ title, actions, children, hideTitleOnMobile = false }) => (
  <div className="crm-section-card space-y-5 p-5 sm:p-6">
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
  if (status === 'unknown' && !timestamp) return null;
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
    if (isUpdating) return 'bg-amber-500/14 text-amber-50';
    return 'bg-[color:var(--crm-primary-container)] text-[#eafffb]';
  })();
  const dotToneClass = isOffline ? 'bg-rose-400' : isUpdating ? 'animate-pulse bg-amber-300' : 'animate-pulse bg-[color:var(--crm-primary)]';
  const timeToneClass = isOffline ? 'text-rose-100/80' : isUpdating ? 'text-amber-100/80' : 'text-[#eafffb]/82';
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
const VIEW_TAB_ICONS = {
  dashboard: IconDashboard,
  tables: IconData,
  system: IconSystem,
  profile: IconProfile,
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
const Modal = ({ title, isOpen, onClose, children, footer, maxWidthClass = 'max-w-3xl' }) => {
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
  if (!isOpen) return null;
  const modalNode = (
    <div
      className="crm-app-shell fixed inset-0 z-50 overflow-hidden bg-black/60 text-[var(--crm-text)]"
    >
      <div
        className="flex h-full w-full items-stretch justify-stretch sm:items-center sm:justify-center sm:px-4 sm:py-6"
        onMouseDown={(event) => {
          if (event.target !== event.currentTarget) return;
          onClose?.();
        }}
      >
        <div
          className={`crm-modal-surface flex h-full max-h-full min-h-0 w-full ${maxWidthClass} flex-col overflow-hidden rounded-none sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:rounded-[32px]`}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="flex min-w-0 items-center justify-between gap-3 border-b border-white/5 px-4 pb-3 pt-[max(env(safe-area-inset-top),0.75rem)] sm:px-6 sm:py-4">
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
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-4 sm:px-6">{children}</div>
          {footer && (
            <div className="flex flex-wrap justify-end gap-2 border-t border-white/5 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 sm:gap-3 sm:px-6 sm:py-4">
              {footer}
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
const StatCard = ({ label, value, accent = 'text-[color:var(--crm-primary)]', onClick }) => {
  const interactive = typeof onClick === 'function';
  const Wrapper = interactive ? 'button' : 'div';
  return (
      <Wrapper
        type={interactive ? 'button' : undefined}
        onClick={onClick}
        className={classNames(
          'crm-stat-card p-4 text-left sm:p-5',
          interactive &&
            'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00bfaf]/30'
        )}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--crm-muted)]">{label}</p>
        <p className={classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)}>{value}</p>
      </Wrapper>
  );
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
}) => {
  const username = session?.displayName || session?.username || '-';
  const sidebarTabs = Array.isArray(tabs) && tabs.length ? tabs : VIEW_TABS_BY_ROLE[ROLE_OWNER];
  const sidebarShortcuts =
    Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS;
  return (
    <aside className="crm-sidebar hidden w-72 flex-shrink-0 flex-col p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto">
      <div className="border-b border-white/5 pb-5">
        <div className="space-y-3 px-1">
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--crm-muted)]/90">{UI_TEXT.accountTitle}</p>
            <p className="text-[1.7rem] font-semibold tracking-[-0.04em] text-white">{username}</p>
          </div>
        <button
          onClick={onLogout}
            className="crm-inline-panel flex h-11 w-full items-center justify-center px-4 text-sm font-semibold text-[var(--crm-text)] transition hover:bg-[color:var(--crm-surface-5)] hover:text-white"
        >
          {UI_TEXT.logout}
        </button>
        {(liveUpdatedAt || liveStatus !== 'unknown') && (
            <div>
            <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
          </div>
        )}
        </div>
      </div>
      <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
        {sidebarTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
          return (
            <div key={tab.id} className="space-y-1">
                <button
                  onClick={() => onChange?.(tab.id)}
                  className={classNames(
                    'crm-sidebar-tab flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold',
                    isActive && 'crm-sidebar-tab-active'
                  )}
                >
                  <IconComponent className="h-5 w-5 shrink-0" />
                  {tab.label}
              </button>
              {tab.id === 'tables' && (
                <div className="space-y-1 pl-4">
                  {sidebarShortcuts.map((shortcut) => {
                    const isShortcutActive = activeDataTable === shortcut.id && activeTab === 'tables';
                    return (
                      <button
                        key={shortcut.id}
                        onClick={() => onSelectTable?.(shortcut.id)}
                        className={classNames(
                          'crm-subnav-pill w-full px-3 py-2 text-left text-xs font-semibold',
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
                <div className="space-y-1 pl-4">
                  {SYSTEM_SUB_SECTIONS.map((section) => {
                    const isSectionActive = isActive && systemSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onChange?.('system');
                          onSelectSystemSection?.(section.id);
                        }}
                        className={classNames(
                          'crm-subnav-pill w-full px-3 py-2 text-left text-xs font-semibold',
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
}) => {
  const username = session?.displayName || session?.username || '-';
  const userAvatarSrc = resolveAssetUrl(currentBarber?.avatarUrl);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [showSubmenus, setShowSubmenus] = useState(true);
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
  const handleToggleLogoutMenu = () => setShowLogoutMenu((prev) => !prev);
  const handleLogoutClick = () => {
    setShowLogoutMenu(false);
    onLogout?.();
  };
  useEffect(() => {
    setShowLogoutMenu(false);
  }, [activeTab]);
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
  const resolvedShortcuts = useMemo(
    () => (Array.isArray(tableShortcuts) && tableShortcuts.length ? tableShortcuts : DEFAULT_TABLE_SHORTCUTS),
    [tableShortcuts]
  );
  const canRenderTableSubmenu = activeTab === 'tables' && resolvedShortcuts.length > 0;
  const canRenderSystemSubmenu = activeTab === 'system' && SYSTEM_SUB_SECTIONS.length > 0;
  const hasVisibleSubmenus = showSubmenus && (canRenderTableSubmenu || canRenderSystemSubmenu);
  const activeTopTabLabel =
    availableTabs.find((tab) => tab.id === activeTab)?.label ||
    UI_TEXT.accountTitle;
  const activeTableLabel =
    resolvedShortcuts.find((shortcut) => shortcut.id === activeDataTable)?.label || activeTopTabLabel;
  const activeSystemLabel =
    SYSTEM_SUB_SECTIONS.find((section) => section.id === systemSection)?.label || activeTopTabLabel;
  const mobileHeaderTitle =
    activeTab === 'tables' ? activeTableLabel : activeTab === 'system' ? activeSystemLabel : activeTopTabLabel;
  const renderLiveIndicator = () =>
    liveStatus === 'unknown' && !liveUpdatedAt ? (
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--crm-muted)]">{UI_TEXT.liveFallback}</span>
    ) : (
      <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
    );
  return (
    <>
      <header className="crm-mobile-header sticky top-0 z-30 lg:hidden">
        <div className="relative px-4 py-3">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-16">
            <p className="truncate text-center text-base font-semibold tracking-[-0.03em] text-white">{mobileHeaderTitle}</p>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex min-w-[92px] justify-start">
              {renderLiveIndicator()}
            </div>
            <div className="flex items-center justify-end">
              <div className="relative inline-flex">
                <button
                  type="button"
                  onClick={handleToggleLogoutMenu}
                  aria-expanded={showLogoutMenu}
                  aria-label={username}
                  className="crm-ghost-btn h-11 w-11 min-h-0 p-0"
                >
                  {userAvatarSrc ? (
                    <img src={userAvatarSrc} alt={username} className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <DefaultProfileIcon className="h-8 w-8 rounded-full" iconClassName="h-4.5 w-4.5 text-[var(--crm-muted)]" />
                  )}
                </button>
                <div
                  className={classNames(
                    'absolute right-0 top-full z-40 mt-1 w-40 translate-y-0 transition-all duration-150',
                    showLogoutMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                  )}
                >
                  <button
                    type="button"
                    onClick={handleLogoutClick}
                      className="crm-danger-btn w-full px-4 py-2 text-base"
                  >
                    {UI_TEXT.logout}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                      'no-scrollbar flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                  >
                    {resolvedShortcuts.map((shortcut) => {
                      const isShortcutActive = activeDataTable === shortcut.id;
                      const canSelectTable = typeof onSelectTable === 'function';
                      return (
                        <button
                          key={shortcut.id}
                          type="button"
                          onClick={() => {
                            handleSelect('tables', { preserveSubmenus: true });
                            onSelectTable?.(shortcut.id);
                          }}
                          disabled={!canSelectTable}
                          className={classNames(
                            'crm-subnav-pill flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
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
                      'no-scrollbar flex gap-2 overflow-x-auto px-1.5 py-1 transition-all duration-300',
                      showSubmenus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    )}
                  >
                    {SYSTEM_SUB_SECTIONS.map((section) => {
                      const isSectionActive = systemSection === section.id;
                      const canSelect = typeof onSelectSystemSection === 'function';
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => {
                            handleSelect('system', { preserveSubmenus: true });
                            onSelectSystemSection?.(section.id);
                          }}
                          disabled={!canSelect}
                          className={classNames(
                            'crm-subnav-pill flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
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
              <div className="flex w-full items-center gap-3 px-2 py-1 transition-all duration-300">
                {availableTabs.map((tab) => {
                  const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className={classNames(
                        'crm-mobile-tab flex-1 px-3 py-2 text-center text-sm font-semibold',
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
    </>
  );
};

