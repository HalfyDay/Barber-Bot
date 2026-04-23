const { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect, Fragment } = React;
const { createPortal, createRoot } = ReactDOM;
const sendClientLog = (data) => {
  try {
    const payload = {
      ...data,
      ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      ts: new Date().toISOString(),
    };
    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch (error) {
    // ignore logging failures
  }
};
sendClientLog({ level: 'info', stage: 'bundle-start' });
const originalConsoleError = console.error;
console.error = (...args) => {
  try {
    const [first] = args;
    const payload =
      first instanceof Error
        ? { message: first.message, stack: first.stack }
        : { message: typeof first === 'string' ? first : JSON.stringify(first) };
    sendClientLog({ level: 'error', stage: 'console-error', ...payload });
  } catch {
    // ignore logger failure
  }
  return originalConsoleError.apply(console, args);
};
const resolveDefaultApiBaseUrl = () => {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return `${window.location.origin}/api`;
  }
  return 'http://localhost:3000/api';
};
const DEFAULT_API_BASE_URL = resolveDefaultApiBaseUrl();
const API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;
const ROLE_OWNER = 'owner';
const ROLE_STAFF = 'staff';
const ROLE_CREATOR = 'creator';
const ROLE_OPTIONS = [
  { value: ROLE_OWNER, label: 'Владелец' },
  { value: ROLE_STAFF, label: 'Сотрудник' },
];
const VIEW_TABS_BY_ROLE = {
  [ROLE_OWNER]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'system', label: 'Система' },
  ],
  [ROLE_STAFF]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'profile', label: 'Профиль' },
  ],
  [ROLE_CREATOR]: [
    { id: 'dashboard', label: 'Главная' },
    { id: 'tables', label: 'Данные' },
    { id: 'system', label: 'Система' },
  ],
};
ROLE_OPTIONS.splice(0, ROLE_OPTIONS.length, {
  value: ROLE_OWNER,
  label: 'Владелец',
}, {
  value: ROLE_STAFF,
  label: 'Сотрудник',
});
VIEW_TABS_BY_ROLE[ROLE_OWNER] = [
  { id: 'dashboard', label: 'Главная' },
  { id: 'tables', label: 'Данные' },
  { id: 'system', label: 'Система' },
];
VIEW_TABS_BY_ROLE[ROLE_STAFF] = [
  { id: 'dashboard', label: 'Главная' },
  { id: 'tables', label: 'Данные' },
  { id: 'profile', label: 'Профиль' },
];
VIEW_TABS_BY_ROLE[ROLE_CREATOR] = [
  { id: 'dashboard', label: 'Главная' },
  { id: 'tables', label: 'Данные' },
  { id: 'system', label: 'Система' },
];
const TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Barbers', 'Services', 'Positions', 'Revenue'];
const DATA_TABLES_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Schedules', 'Users', 'Positions'],
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services'],
  [ROLE_CREATOR]: ['Appointments', 'Schedules', 'Users', 'Positions'],
};
const VISIBLE_TABLE_ORDER_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Users', 'Barbers', 'Schedules', 'Services', 'Positions', 'Revenue'],
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services', 'Revenue'],
};
const TABLE_CONFIG = {
  Appointments: { label: 'Записи', mode: 'data', canCreate: true, supportsBarberFilter: true, supportsStatusFilter: true, defaultSort: { key: 'Date', direction: 'desc' } },
  Schedules: { label: 'Расписание', mode: 'custom' },
  Users: { label: 'Клиенты', mode: 'data', canCreate: true, defaultSort: { key: 'Name', direction: 'asc' } },
  Barbers: { label: 'Барберы', mode: 'custom' },
  Services: { label: 'Услуги', mode: 'custom' },
  Positions: { label: 'Должности', mode: 'custom' },
  Revenue: { label: 'Доходы', mode: 'custom' },
};
const DATA_SHORTCUTS_BY_ROLE = {
  [ROLE_OWNER]: ['Appointments', 'Users', 'Barbers', 'Schedules', 'Services', 'Positions', 'Revenue'].map((tableId) => ({
    id: tableId,
    label: TABLE_CONFIG[tableId]?.label || tableId,
  })),
  [ROLE_STAFF]: ['Appointments', 'Schedules', 'Services', 'Revenue'].map((tableId) => ({
    id: tableId,
    label: TABLE_CONFIG[tableId]?.label || tableId,
  })),
};
const DEFAULT_DATA_TABLES = DATA_TABLES_BY_ROLE[ROLE_OWNER];
const DEFAULT_TABLE_SHORTCUTS = DATA_SHORTCUTS_BY_ROLE[ROLE_OWNER];
const DEFAULT_VISIBLE_TABLE_ORDER = VISIBLE_TABLE_ORDER_BY_ROLE[ROLE_OWNER];

