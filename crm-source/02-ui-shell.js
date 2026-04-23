const LoadingState = ({ label = 'Загружаю данные...' } = {}) => (
  <div className="flex items-center justify-center py-12 text-slate-300">
    <span className="animate-pulse">{label}</span>
  </div>
);
const ErrorBanner = ({ message }) => (
  <div className="rounded-lg bg-rose-600 px-4 py-3 text-white">{message}</div>
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
    return <p className="text-sm text-slate-500">Загружаем историю...</p>;
  }
  if (error) {
    return <ErrorBanner message={error} />;
  }
  return (
    <div className="space-y-2">
      {showSummary && (
        <div className="flex items-center justify-between text-xs text-slate-400">
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
                  'rounded-lg border p-3 text-xs transition',
                  isActive ? 'border-emerald-400/60 bg-emerald-500/10 shadow-inner shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/40'
                )}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-slate-400">
                  <span className="font-semibold text-white">Визит №{visit.orderNumber || '—'}</span>
                  <span>{visit.dateLabel}</span>
                </div>
                <p className="mt-1 text-sm text-slate-100">{visit.Barber || '—'}</p>
                <p className="text-slate-400">{visit.Services || '—'}</p>
                {visit.Status && <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">{visit.Status}</p>}
              </div>
            );
          })
        ) : (
          <p className="text-sm text-slate-500">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
};
const SectionCard = ({ title, actions, children }) => (
  <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-1 sm:min-w-0">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {actions && <div className="ml-auto sm:hidden">{actions}</div>}
      </div>
      {actions && <div className="hidden sm:block sm:flex-shrink-0">{actions}</div>}
    </div>
    {children}
  </div>
);
const DefaultProfileIcon = ({ className = '', iconClassName = 'h-10 w-10 text-slate-500' }) => (
  <div className={classNames('flex items-center justify-center bg-slate-800 text-slate-500', className)}>
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
const LiveBadge = ({ timestamp, status = 'unknown' }) => {
  const tickingNow = useNowTick(1000);
  if (status === 'unknown' && !timestamp) return null;
  const isOffline = status === 'offline';
  const isOnline = status === 'online';
  const isUpdating = status === 'updating';
  const label = isOffline ? 'OFFLINE' : isUpdating ? 'UPDATING' : 'LIVE';
  const timeLabel = isOnline && timestamp ? formatLiveTimestamp(timestamp, tickingNow) : null;
  const badgeToneClass = (() => {
    if (isOffline) return 'border-rose-500/50 bg-rose-500/10 text-rose-200';
    if (isUpdating) return 'border-amber-400/60 bg-amber-500/10 text-amber-50';
    return 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200';
  })();
  const dotToneClass = isOffline ? 'bg-rose-400' : isUpdating ? 'animate-pulse bg-amber-300' : 'animate-pulse bg-emerald-400';
  const timeToneClass = isOffline ? 'text-rose-100/80' : isUpdating ? 'text-amber-100/80' : 'text-emerald-100/80';
  return (
    <span
      className={classNames(
        'flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]',
        badgeToneClass
      )}
    >
      <span className={classNames('h-2 w-2 rounded-full', dotToneClass)} />
      {label}
      {timeLabel && <span className={classNames(timeToneClass, 'normal-case tracking-normal')}>{timeLabel}</span>}
    </span>
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
const IconSave = ({ className = 'h-5 w-5' }) => (
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
    <path d="M5 3h11l3 3v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5H6V3" />
    <path d="M6 17h12" />
    <path d="M12 11v6" />
  </svg>
);
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
  'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:px-4 sm:py-2 sm:text-sm';
const IconDashboard = ({ className = 'h-5 w-5' }) => (
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
    <path d="M3.5 11 12 4l8.5 7" />
    <path d="M6 10v10h5v-5h2v5h5V10" />
  </svg>
);
const IconData = ({ className = 'h-5 w-5' }) => (
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
    <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
    <path d="M3.5 9h17M3.5 13h17M8 5v14M13 5v14" />
  </svg>
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
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M2.5 12h3M18.5 12h3" />
  </svg>
);
const IconProfile = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-3.866 0-7 1.791-7 4v1h14v-1c0-2.209-3.134-4-7-4Zm0-2a4 4 0 1 0-0.001-8.001A4 4 0 0 0 12 12Z" />
  </svg>
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
const BOT_SUB_SECTIONS = Object.freeze([
  { id: 'status', label: 'Бот' },
  { id: 'constructor', label: 'Конструктор меню' },
]);
const UI_TEXT = Object.freeze({
  accountTitle: 'Ваш аккаунт',
  logout: 'Выйти',
  newAppointmentCta: 'Новая запись',
  liveFallback: 'LIVE',
});
const BotMenuBuilder = (typeof window !== 'undefined' && window.BotMenuBuilder) || (() => (
  <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-200">
    Конструктор меню временно недоступен.
  </div>
));
const Modal = ({ title, isOpen, onClose, children, footer, maxWidthClass = 'max-w-3xl' }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-stretch overflow-y-auto bg-black/60 p-0 sm:items-center sm:justify-center sm:px-4 sm:py-6"
      onMouseDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (typeof window !== 'undefined' && window.innerWidth >= 640) {
          onClose?.();
        }
      }}
    >
      <div
        className={`flex h-full max-h-[100dvh] min-h-0 w-full ${maxWidthClass} flex-col overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl rounded-none sm:h-auto sm:rounded-2xl`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex min-w-0 items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
          <h3 className="min-w-0 flex-1 truncate text-lg font-semibold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="flex-shrink-0 text-slate-400 hover:text-white" aria-label="Закрыть">
            x
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 space-y-4 sm:px-6">{children}</div>
        {footer && (
          <div className="flex flex-wrap justify-end gap-2 border-t border-slate-800 px-4 py-3 pb-[env(safe-area-inset-bottom)] sm:gap-3 sm:px-6 sm:py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
const ConfirmDialog = ({ open, title, message, confirmLabel = 'Подтвердить', cancelLabel = 'Отмена', tone = 'neutral', onResult }) => {
  if (!open) return null;
  const confirmToneClass = (() => {
    switch (tone) {
      case 'danger':
        return 'bg-rose-600 hover:bg-rose-500';
      case 'success':
        return 'bg-emerald-600 hover:bg-emerald-500';
      default:
        return 'bg-indigo-600 hover:bg-indigo-500';
    }
  })();
  return (
    <Modal
      isOpen={open}
      title={title || 'Подтвердите действие'}
      onClose={() => onResult(false)}
      maxWidthClass="max-w-md"
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={() => onResult(false)} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800">
            {cancelLabel}
          </button>
          <button onClick={() => onResult(true)} className={`rounded-lg px-4 py-2 text-sm font-semibold text-white ${confirmToneClass}`}>
            {confirmLabel}
          </button>
        </div>
      }
    >
      <p className="text-sm text-slate-200">{message || 'Вы уверены, что хотите продолжить?'}</p>
    </Modal>
  );
};
const StatCard = ({ label, value, accent = 'text-indigo-300', onClick }) => {
  const interactive = typeof onClick === 'function';
  const Wrapper = interactive ? 'button' : 'div';
  return (
    <Wrapper
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      className={classNames(
        'rounded-xl border border-slate-700 bg-slate-900/40 p-3 text-left sm:p-4',
        interactive &&
          'cursor-pointer transition hover:border-indigo-400/70 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/60'
      )}
    >
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
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
    <aside className="hidden w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto">
      <div className="space-y-2 border-b border-slate-800 pb-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">{UI_TEXT.accountTitle}</p>
        <p className="text-lg font-semibold text-white">{username}</p>
        <button
          onClick={onLogout}
          className="mt-2 w-full rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-500 hover:text-white"
        >
          {UI_TEXT.logout}
        </button>
        {(liveUpdatedAt || liveStatus !== 'unknown') && (
          <div className="pt-2">
            <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
          </div>
        )}
      </div>
      <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
        {sidebarTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div key={tab.id} className="space-y-1">
              <button
                onClick={() => onChange?.(tab.id)}
                className={classNames(
                  'w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition',
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-900/40'
                    : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                )}
              >
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
                          'w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition',
                          isShortcutActive
                            ? 'bg-indigo-600/20 text-indigo-100'
                            : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
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
                          'w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition',
                          isSectionActive
                            ? 'bg-indigo-600/20 text-indigo-100'
                            : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
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
  activeDataTable,
  onSelectTable,
  tableShortcuts,
  systemSection,
  onSelectSystemSection,
}) => {
  const username = session?.displayName || session?.username || '-';
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
  const renderLiveIndicator = () =>
    liveStatus === 'unknown' && !liveUpdatedAt ? (
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">{UI_TEXT.liveFallback}</span>
    ) : (
      <LiveBadge timestamp={liveUpdatedAt} status={liveStatus} />
    );
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur lg:hidden">
        <div className="relative px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-[88px] justify-start">
              {renderLiveIndicator()}
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="relative inline-flex">
                <button
                  type="button"
                  onClick={handleToggleLogoutMenu}
                  aria-expanded={showLogoutMenu}
                  className="flex items-center gap-2 rounded-2xl border border-slate-800/0 px-4 py-2 text-base font-semibold text-white transition hover:border-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <span className="max-w-[60vw] truncate text-right">{username}</span>
                  <svg
                    className={classNames(
                      'h-4 w-4 text-slate-400 transition-transform',
                      showLogoutMenu ? 'rotate-180' : 'rotate-0'
                    )}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={classNames(
                    'absolute left-0 right-0 top-full z-40 mt-1 translate-y-0 transition-all duration-150',
                    showLogoutMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                  )}
                >
                  <button
                    type="button"
                    onClick={handleLogoutClick}
                    className="w-full rounded-2xl border border-slate-600/80 bg-slate-900/95 px-4 py-2 text-base font-semibold text-rose-200 shadow-lg shadow-black/30 transition hover:border-rose-400 hover:text-white"
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
            <div className="relative rounded-[32px] bg-[#050916] px-4 py-3">
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
                            'flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                            isShortcutActive
                              ? 'bg-[#5a57ff] text-white'
                              : 'bg-white/10 text-slate-200/80 hover:bg-white/15 hover:text-white',
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
                            'flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                            isSectionActive
                              ? 'bg-[#5a57ff] text-white'
                              : 'bg-white/10 text-slate-200/80 hover:bg-white/15 hover:text-white',
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
              <div className="flex w-full items-center gap-3 rounded-[32px] bg-[#050916] px-4 py-3 transition-all duration-300">
                {availableTabs.map((tab) => {
                  const IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className={classNames(
                        'flex-1 rounded-full px-3 py-2 text-center text-sm font-semibold transition-colors',
                        isActive ? 'bg-[#37267a] text-[#ebe9ff]' : 'text-slate-500/80 hover:text-white'
                      )}
                      aria-label={tab.label}
                    >
                      <IconComponent
                        className={classNames('mx-auto h-6 w-6', isActive ? 'text-[#ebe9ff]' : 'text-slate-500/80')}
                      />
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

