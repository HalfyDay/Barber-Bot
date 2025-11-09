"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["id"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback,
  useMemo = _React.useMemo,
  useRef = _React.useRef,
  useLayoutEffect = _React.useLayoutEffect,
  Fragment = _React.Fragment;
var _ReactDOM = ReactDOM,
  createPortal = _ReactDOM.createPortal,
  createRoot = _ReactDOM.createRoot;
var resolveDefaultApiBaseUrl = function resolveDefaultApiBaseUrl() {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return "".concat(window.location.origin, "/api");
  }
  return 'http://localhost:3000/api';
};
var DEFAULT_API_BASE_URL = resolveDefaultApiBaseUrl();
var API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;
var VIEW_TABS = [{
  id: 'dashboard',
  label: 'Обзор'
}, {
  id: 'tables',
  label: 'Данные'
}, {
  id: 'bot',
  label: 'Бот'
}, {
  id: 'system',
  label: 'Система'
}];
var TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Barbers', 'Services'];
var VISIBLE_TABLE_ORDER = TABLE_ORDER.filter(function (table) {
  return table !== 'Schedules';
});
var DATA_TABLES = ['Appointments', 'Schedules', 'Users'];
var TABLE_CONFIG = {
  Appointments: {
    label: 'Записи',
    mode: 'data',
    canCreate: true,
    supportsBarberFilter: true,
    supportsStatusFilter: true,
    defaultSort: {
      key: 'Date',
      direction: 'asc'
    }
  },
  Schedules: {
    label: 'Расписание',
    mode: 'data',
    canCreate: false,
    supportsBarberFilter: true,
    defaultSort: {
      key: 'Date',
      direction: 'asc'
    }
  },
  Users: {
    label: 'Клиенты',
    mode: 'data',
    canCreate: true,
    defaultSort: {
      key: 'Name',
      direction: 'asc'
    }
  },
  Barbers: {
    label: 'Барберы',
    mode: 'custom'
  },
  Services: {
    label: 'Услуги',
    mode: 'custom'
  }
};
var DATA_SHORTCUTS = ['Appointments', 'Users', 'Barbers', 'Services'].map(function (tableId) {
  var _TABLE_CONFIG$tableId;
  return {
    id: tableId,
    label: ((_TABLE_CONFIG$tableId = TABLE_CONFIG[tableId]) === null || _TABLE_CONFIG$tableId === void 0 ? void 0 : _TABLE_CONFIG$tableId.label) || tableId
  };
});
var TABLE_COLUMNS = {
  Appointments: [{
    key: 'CustomerName',
    label: 'Клиент',
    editable: true,
    type: 'text',
    isProfileLink: true,
    minWidth: 'w-48'
  }, {
    key: 'Phone',
    label: 'Телефон',
    editable: true,
    type: 'text',
    minWidth: 'w-36'
  }, {
    key: 'Barber',
    label: 'Барбер',
    editable: true,
    type: 'select',
    optionsKey: 'barbers',
    minWidth: 'w-32'
  }, {
    key: 'Date',
    label: 'Дата',
    editable: true,
    type: 'date',
    minWidth: 'w-32'
  }, {
    key: 'Time',
    label: 'Время',
    editable: true,
    type: 'text',
    minWidth: 'w-28',
    noWrap: true
  }, {
    key: 'Status',
    label: 'Статус',
    editable: true,
    type: 'select',
    optionsKey: 'statuses',
    align: 'center',
    minWidth: 'w-28'
  }, {
    key: 'Services',
    label: 'Услуги',
    editable: true,
    type: 'multi-select',
    optionsKey: 'services',
    minWidth: 'w-56'
  }, {
    key: 'UserID',
    label: 'ID клиента',
    editable: true,
    type: 'text',
    minWidth: 'w-24'
  }, {
    key: 'Reminder2hClientSent',
    label: 'Напоминание клиенту',
    editable: true,
    type: 'boolean',
    align: 'center'
  }, {
    key: 'Reminder2hBarberSent',
    label: 'Напоминание барберу',
    editable: true,
    type: 'boolean',
    align: 'center'
  }],
  Schedules: [{
    key: 'Barber',
    label: 'Барбер',
    editable: false,
    minWidth: 'w-40'
  }, {
    key: 'DayOfWeek',
    label: 'День недели',
    editable: false,
    minWidth: 'w-32'
  }, {
    key: 'Date',
    label: 'Дата',
    editable: false,
    minWidth: 'w-32'
  }, {
    key: 'Week',
    label: 'Слоты',
    editable: true,
    type: 'text',
    align: 'center',
    minWidth: 'w-40'
  }],
  Users: [{
    key: 'Name',
    label: 'Имя',
    editable: true,
    type: 'text',
    isProfileLink: true,
    minWidth: 'w-40'
  }, {
    key: 'Phone',
    label: 'Телефон',
    editable: true,
    type: 'text',
    minWidth: 'w-36'
  }, {
    key: 'TelegramID',
    label: 'Telegram',
    editable: true,
    type: 'text',
    minWidth: 'w-32'
  }, {
    key: 'Barber',
    label: 'Любимый мастер',
    editable: true,
    type: 'select',
    optionsKey: 'barbers',
    minWidth: 'w-40'
  }]
};
var RATING_MIN = 3;
var RATING_MAX = 5;
var RATING_STEP = 0.5;
var avatarOptionsCache = null;
var YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
var DAY_IN_MS = 24 * 60 * 60 * 1000;
var buildNewBarberState = function buildNewBarberState() {
  return {
    name: '',
    password: '',
    rating: '5',
    color: '#6d28d9',
    avatarUrl: '',
    description: '',
    phone: '',
    telegramId: '',
    isActive: true
  };
};
var buildNewServiceState = function buildNewServiceState() {
  return {
    name: '',
    duration: 60,
    isActive: true,
    prices: {}
  };
};
var ACTIVE_BARBER_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x0435, 0x043d);
var HIDDEN_BARBER_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442);
var ACTIVE_SERVICE_LABEL = String.fromCharCode(0x0410, 0x043a, 0x0442, 0x0438, 0x0432, 0x043d, 0x0430);
var HIDDEN_SERVICE_LABEL = String.fromCharCode(0x0421, 0x043a, 0x0440, 0x044b, 0x0442, 0x0430);
var buildVisitHistory = function buildVisitHistory() {
  var appointments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!appointments.length) return [];
  var cutoff = Date.now() - YEAR_IN_MS;
  var completed = appointments.map(function (appt) {
    var startDate = getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime);
    return _objectSpread(_objectSpread({}, appt), {}, {
      startDate: startDate
    });
  }).filter(function (appt) {
    return appt.startDate && appt.startDate.getTime() >= cutoff && (isCompletedAppointmentStatus(appt.Status) || isActiveAppointmentStatus(appt.Status));
  }).sort(function (a, b) {
    return b.startDate.getTime() - a.startDate.getTime();
  });
  return completed.map(function (appt, index) {
    return _objectSpread(_objectSpread({}, appt), {}, {
      orderNumber: completed.length - index,
      dateLabel: formatDateTime(appt.Date, appt.Time)
    });
  });
};
var defaultConfirmState = {
  open: false,
  title: '',
  message: '',
  confirmLabel: 'Подтвердить',
  cancelLabel: 'Отмена',
  tone: 'neutral'
};
var getRecordId = function getRecordId() {
  var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return record.id || record.Id || record.ID || record.recordId || record.ID_Record || null;
};
var classNames = function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
};
var useLocalStorage = function useLocalStorage(key, initialValue) {
  var _useState = useState(function () {
      try {
        var stored = window.localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
      } catch (error) {
        console.warn('localStorage read error', error);
        return initialValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var updateValue = useCallback(function (updater) {
    setValue(function (prev) {
      var nextValue = typeof updater === 'function' ? updater(prev) : updater;
      try {
        window.localStorage.setItem(key, JSON.stringify(nextValue));
      } catch (error) {
        console.warn('localStorage write error', error);
      }
      return nextValue;
    });
  }, [key]);
  return [value, updateValue];
};
var useNowTick = function useNowTick() {
  var intervalMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var _useState3 = useState(function () {
      return Date.now();
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    now = _useState4[0],
    setNow = _useState4[1];
  useEffect(function () {
    var timer = setInterval(function () {
      return setNow(Date.now());
    }, intervalMs);
    return function () {
      return clearInterval(timer);
    };
  }, [intervalMs]);
  return now;
};
var useOutsideClick = function useOutsideClick(ref, handler) {
  useEffect(function () {
    if (!handler) return undefined;
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
var fetchAvatarOptions = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var response, payload, images;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return fetch("".concat(API_BASE_URL, "/assets/avatars"));
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error('Не удалось получить список аватаров');
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          payload = _context.v;
          images = Array.isArray(payload.images) ? payload.images.filter(Boolean).map(normalizeImagePath) : [];
          return _context.a(2, Array.from(new Set(images)));
      }
    }, _callee);
  }));
  return function fetchAvatarOptions() {
    return _ref.apply(this, arguments);
  };
}();
var normalizeText = function normalizeText(value) {
  return value == null ? '' : String(value);
};
var isValidDate = function isValidDate(value) {
  return value instanceof Date && !Number.isNaN(value.getTime());
};
var resolveAssetUrl = function resolveAssetUrl(value) {
  var normalized = normalizeText(value).trim();
  if (!normalized) return '';
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
  var sanitized = normalized.replace(/\\/g, '/').replace(/^\.\/+/, '');
  if (sanitized.startsWith('/')) return sanitized;
  if (sanitized.startsWith('Image/')) return "/".concat(sanitized);
  return "/Image/".concat(sanitized);
};
var normalizeImagePath = function normalizeImagePath(value) {
  var resolved = resolveAssetUrl(value);
  if (!resolved) return '';
  if (/^(https?:)?\/\//i.test(resolved) || resolved.startsWith('data:')) return resolved;
  return resolved.startsWith('/') ? resolved : "/".concat(resolved);
};
var numberFormatter = new Intl.NumberFormat('ru-RU');
var formatCurrency = function formatCurrency(value) {
  var numeric = Number(value);
  if (!Number.isFinite(numeric)) return '';
  return "".concat(numberFormatter.format(numeric), " \u20BD");
};
var pluralize = function pluralize(count, _ref2) {
  var _ref3 = _slicedToArray(_ref2, 3),
    one = _ref3[0],
    few = _ref3[1],
    many = _ref3[2];
  var mod10 = count % 10;
  var mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
};
var canonicalizeName = function canonicalizeName(value) {
  return normalizeText(value).replace(/[^a-z0-9а-яё\s]/gi, '').trim();
};
var resolveLogin = function resolveLogin(value) {
  return normalizeText(value);
};
var buildSessionPayload = function buildSessionPayload() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var normalizedLogin = resolveLogin(payload.username || payload.login);
  return _objectSpread(_objectSpread({}, payload), {}, {
    username: normalizedLogin,
    displayName: payload.displayName || payload.name || normalizedLogin,
    barberId: payload.barberId || payload.id || null
  });
};
var pickBarberForUser = function pickBarberForUser(userSession) {
  var availableBarbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fallback = (availableBarbers === null || availableBarbers === void 0 ? void 0 : availableBarbers[0]) || '';
  if (!userSession) return fallback;
  var candidates = [userSession.displayName, userSession.preferredName, userSession.username].map(function (candidate) {
    return canonicalizeName(candidate).toLowerCase();
  }).filter(Boolean);
  if (!candidates.length || !(availableBarbers !== null && availableBarbers !== void 0 && availableBarbers.length)) return fallback;
  var normalizedOptions = availableBarbers.map(function (barber) {
    return canonicalizeName(barber).toLowerCase();
  });
  var _iterator = _createForOfIteratorHelper(candidates),
    _step;
  try {
    var _loop = function _loop() {
        var candidate = _step.value;
        var matchIndex = normalizedOptions.findIndex(function (option) {
          return option === candidate;
        });
        if (matchIndex !== -1) {
          return {
            v: availableBarbers[matchIndex]
          };
        }
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return fallback;
};
var formatDate = function formatDate(value) {
  if (!value) return '-';
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
};
var formatTime = function formatTime(value) {
  var safeValue = normalizeText(value);
  if (!safeValue) return '-';
  if (safeValue.includes('-')) {
    return safeValue.split('-')[0].trim();
  }
  return safeValue;
};
var formatPhoneInput = function formatPhoneInput(value) {
  var digits = String(value || '').replace(/[^\d]/g, '').trim();
  if (!digits) return '';
  var normalized = digits;
  if (normalized.length === 11 && normalized.startsWith('8')) {
    normalized = "7".concat(normalized.slice(1));
  }
  if (normalized.length === 10) {
    normalized = "7".concat(normalized);
  }
  if (normalized.length === 11 && normalized.startsWith('7')) {
    return "+7 (".concat(normalized.slice(1, 4), ") ").concat(normalized.slice(4, 7), "-").concat(normalized.slice(7, 9), "-").concat(normalized.slice(9, 11));
  }
  if (normalized.startsWith('7') && normalized.length > 11) {
    return "+".concat(normalized);
  }
  if (value.toString().startsWith('+')) {
    return value.toString();
  }
  return "+".concat(normalized);
};
var formatTelegramHandle = function formatTelegramHandle(value) {
  var handle = normalizeText(value).replace(/^@+/, '').trim();
  return handle ? "@".concat(handle) : '';
};
var buildTelegramLink = function buildTelegramLink(value) {
  var handle = normalizeText(value).replace(/^@+/, '').trim();
  return handle ? "https://t.me/".concat(handle) : '';
};
var formatDateTime = function formatDateTime(date, time) {
  var datePart = formatDate(date);
  var timePart = formatTime(time);
  if (datePart === '-' && timePart === '-') return '-';
  if (datePart === '-') return timePart;
  if (timePart === '-') return datePart;
  return "".concat(datePart, " | ").concat(timePart);
};
var backupDateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
var parseBackupTimestamp = function parseBackupTimestamp() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = normalizeText(filename).match(/backup-(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})(?:-(\d{3}))?/i);
  if (!match) return null;
  var _match = _slicedToArray(match, 6),
    datePart = _match[1],
    hours = _match[2],
    minutes = _match[3],
    seconds = _match[4],
    milliseconds = _match[5];
  var isoCandidate = "".concat(datePart, "T").concat(hours, ":").concat(minutes, ":").concat(seconds).concat(milliseconds ? ".".concat(milliseconds) : '', "Z");
  var parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
var formatBackupLabel = function formatBackupLabel() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var parsed = parseBackupTimestamp(filename);
  return parsed ? backupDateFormatter.format(parsed) : filename;
};
var formatDateHeading = function formatDateHeading(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  if (!value) return 'Без даты';
  try {
    var parsed = new Date("".concat(value, "T00:00:00"));
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat('ru-RU', options).format(parsed);
  } catch (error) {
    return value;
  }
};
var formatDateBadgeLabel = function formatDateBadgeLabel(value) {
  return formatDateHeading(value, {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
};
var formatLiveTimestamp = function formatLiveTimestamp(value) {
  var nowTs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  if (!value) return '';
  try {
    var parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '';
    var diffMs = Math.max(0, nowTs - parsed.getTime());
    if (diffMs < 1000) return 'только что';
    if (diffMs < 60000) return "".concat(Math.floor(diffMs / 1000), " \u0441\u0435\u043A");
    if (diffMs < 3600000) {
      var minutes = Math.floor(diffMs / 60000);
      var seconds = Math.floor(diffMs % 60000 / 1000);
      return "".concat(minutes, " \u043C\u0438\u043D ").concat(seconds.toString().padStart(2, '0'), " \u0441\u0435\u043A");
    }
    if (diffMs < 86400000) {
      var hours = Math.floor(diffMs / 3600000);
      var _minutes = Math.floor(diffMs % 3600000 / 60000);
      return "".concat(hours, " \u0447 ").concat(_minutes.toString().padStart(2, '0'), " \u043C\u0438\u043D");
    }
    return parsed.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    return '';
  }
};
var STATUS_TRANSLATIONS = {
  active: 'Активная',
  'активная': 'Активная',
  confirm: 'Подтверждена',
  confirmed: 'Подтверждена',
  'подтверждено': 'Подтверждена',
  'подтверждена': 'Подтверждена',
  done: 'Выполнена',
  complete: 'Выполнена',
  completed: 'Выполнена',
  finished: 'Выполнена',
  'выполнена': 'Выполнена',
  'завершена': 'Выполнена',
  cancel: 'Отменено',
  canceled: 'Отменено',
  cancelled: 'Отменено',
  'отмена': 'Отменено',
  'отменено': 'Отменено',
  'no show': 'Не пришёл',
  'no-show': 'Не пришёл',
  noshow: 'Не пришёл',
  missed: 'Не пришёл',
  pending: 'В обработке',
  wait: 'В обработке',
  waiting: 'В обработке',
  processing: 'В обработке'
};
var STATUS_BADGE_MAP = {
  Активная: 'border border-sky-500/30 bg-sky-500/10 text-sky-100',
  Подтверждена: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-100',
  Завершена: 'border border-indigo-500/30 bg-indigo-500/10 text-indigo-100',
  Отменена: 'border border-rose-500/30 bg-rose-500/10 text-rose-100',
  'Не пришёл': 'border border-amber-500/30 bg-amber-500/10 text-amber-100'
};
var getStatusBadgeClasses = function getStatusBadgeClasses(status) {
  var normalized = normalizeStatusValue(status);
  return STATUS_BADGE_MAP[normalized] || 'border border-slate-600/60 bg-slate-800/70 text-slate-200';
};
var INACTIVE_STATUS_TOKENS = ['выполн', 'заверш', 'done', 'cancel', 'отмен', 'не приш', 'noshow', 'no-show', 'missed', 'проср', 'expired'];
var ACTIVE_STATUS_TOKENS = ['актив', 'active', 'подтверж', 'confirm', 'ожид', 'pending', 'wait', 'ждем', 'ждём', 'нов', 'new'];
var COMPLETED_STATUS_TOKENS = ['выполн', 'заверш', 'done', 'complete', 'готов'];
var normalizeStatusValue = function normalizeStatusValue(status) {
  var normalized = normalizeText(status).trim();
  if (!normalized) return '';
  var translated = STATUS_TRANSLATIONS[normalized.toLowerCase()];
  if (translated) return translated;
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};
var normalizeStatusList = function normalizeStatusList() {
  var statuses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var seen = new Set();
  return statuses.map(function (status) {
    return normalizeStatusValue(status);
  }).filter(function (status) {
    if (!status || seen.has(status)) return false;
    seen.add(status);
    return true;
  });
};
var isCompletedAppointmentStatus = function isCompletedAppointmentStatus(status) {
  var normalized = normalizeStatusValue(status).toLowerCase();
  if (!normalized) return false;
  return COMPLETED_STATUS_TOKENS.some(function (token) {
    return normalized.includes(token);
  });
};
var sanitizeTimeToken = function sanitizeTimeToken(value) {
  var match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return '';
  var hours = match[1].padStart(2, '0');
  var minutes = match[2];
  return "".concat(hours, ":").concat(minutes);
};
var parseTimeRangeValue = function parseTimeRangeValue(value) {
  var safe = normalizeText(value).replace(/[—–]/g, '-');
  if (!safe) return {
    start: '',
    end: ''
  };
  var _safe$split$map = safe.split('-').map(function (part) {
      return part.trim();
    }),
    _safe$split$map2 = _slicedToArray(_safe$split$map, 2),
    rawStart = _safe$split$map2[0],
    _safe$split$map2$ = _safe$split$map2[1],
    rawEnd = _safe$split$map2$ === void 0 ? '' : _safe$split$map2$;
  return {
    start: sanitizeTimeToken(rawStart),
    end: sanitizeTimeToken(rawEnd)
  };
};
var parseTimeRangeParts = function parseTimeRangeParts(value) {
  return parseTimeRangeValue(value);
};
var buildTimeRangeValue = function buildTimeRangeValue(start, end) {
  var safeStart = sanitizeTimeToken(start);
  var safeEnd = sanitizeTimeToken(end);
  if (safeStart && safeEnd) {
    var _ref4 = safeStart <= safeEnd ? [safeStart, safeEnd] : [safeEnd, safeStart],
      _ref5 = _slicedToArray(_ref4, 2),
      from = _ref5[0],
      to = _ref5[1];
    return "".concat(from, " - ").concat(to);
  }
  return safeStart || '';
};
var extractTimeStart = function extractTimeStart(value) {
  return parseTimeRangeValue(value).start;
};
var getAppointmentStartDate = function getAppointmentStartDate(dateValue, timeValue, fallbackIso) {
  if (fallbackIso) {
    var parsedFallback = new Date(fallbackIso);
    if (!Number.isNaN(parsedFallback.getTime())) return parsedFallback;
  }
  var datePart = normalizeText(dateValue).slice(0, 10);
  if (!datePart) return null;
  var timePart = extractTimeStart(timeValue) || '00:00';
  var isoCandidate = "".concat(datePart, "T").concat(timePart, ":00");
  var parsed = new Date(isoCandidate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
var getAppointmentEndDate = function getAppointmentEndDate(dateValue, timeValue, fallbackIso) {
  var startDate = getAppointmentStartDate(dateValue, timeValue, fallbackIso);
  if (!startDate) return null;
  var _parseTimeRangeParts = parseTimeRangeParts(timeValue),
    start = _parseTimeRangeParts.start,
    end = _parseTimeRangeParts.end;
  var endToken = end || start;
  if (!endToken) return startDate;
  var baseDatePart = normalizeText(dateValue).slice(0, 10) || startDate.toISOString().slice(0, 10);
  if (!baseDatePart) return startDate;
  var isoCandidate = "".concat(baseDatePart, "T").concat(endToken, ":00");
  var parsed = new Date(isoCandidate);
  if (Number.isNaN(parsed.getTime())) return startDate;
  if (end && start && end <= start) {
    parsed = new Date(parsed.getTime() + DAY_IN_MS);
  }
  if (parsed.getTime() < startDate.getTime()) {
    return startDate;
  }
  return parsed;
};
var resolveAppointmentStartDate = function resolveAppointmentStartDate() {
  var appointment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (isValidDate(appointment.startDate)) return appointment.startDate;
  return getAppointmentStartDate(appointment.Date, appointment.Time, appointment.startDateTime);
};
var resolveAppointmentEndDate = function resolveAppointmentEndDate() {
  var appointment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (isValidDate(appointment.endDate)) return appointment.endDate;
  var endDate = getAppointmentEndDate(appointment.Date, appointment.Time, appointment.startDateTime);
  if (endDate) return endDate;
  return resolveAppointmentStartDate(appointment);
};
var isActiveAppointmentStatus = function isActiveAppointmentStatus(status) {
  var normalized = normalizeStatusValue(status).toLowerCase();
  if (!normalized) return false;
  if (INACTIVE_STATUS_TOKENS.some(function (token) {
    return normalized.includes(token);
  })) return false;
  if (ACTIVE_STATUS_TOKENS.some(function (token) {
    return normalized.includes(token);
  })) return true;
  return true;
};
var shouldDisplayAppointment = function shouldDisplayAppointment(appointment) {
  var nowTs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  if (!isActiveAppointmentStatus(normalizeStatusValue(appointment.Status))) return false;
  var startDate = resolveAppointmentStartDate(appointment);
  var endDate = resolveAppointmentEndDate(appointment);
  if (!startDate || !endDate) return false;
  return endDate.getTime() >= nowTs;
};
var isAppointmentOngoing = function isAppointmentOngoing(appointment) {
  var nowTs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  if (!isActiveAppointmentStatus(normalizeStatusValue(appointment.Status))) return false;
  var startDate = resolveAppointmentStartDate(appointment);
  var endDate = resolveAppointmentEndDate(appointment);
  if (!startDate || !endDate) return false;
  var startTs = startDate.getTime();
  var endTs = endDate.getTime();
  return startTs <= nowTs && endTs > nowTs;
};
var parseMultiValue = function parseMultiValue(value) {
  return normalizeText(value).split(',').map(function (item) {
    return item.trim();
  }).filter(Boolean);
};
var LoadingState = function LoadingState() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref6$label = _ref6.label,
    label = _ref6$label === void 0 ? 'Загружаю данные...' : _ref6$label;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center py-12 text-slate-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-pulse"
  }, label));
};
var ErrorBanner = function ErrorBanner(_ref7) {
  var message = _ref7.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg bg-rose-600 px-4 py-3 text-white"
  }, message);
};
var VisitHistoryList = function VisitHistoryList(_ref8) {
  var _ref8$visits = _ref8.visits,
    visits = _ref8$visits === void 0 ? [] : _ref8$visits,
    _ref8$loading = _ref8.loading,
    loading = _ref8$loading === void 0 ? false : _ref8$loading,
    _ref8$error = _ref8.error,
    error = _ref8$error === void 0 ? '' : _ref8$error,
    _ref8$emptyMessage = _ref8.emptyMessage,
    emptyMessage = _ref8$emptyMessage === void 0 ? 'История визитов пуста.' : _ref8$emptyMessage,
    _ref8$maxHeightClass = _ref8.maxHeightClass,
    maxHeightClass = _ref8$maxHeightClass === void 0 ? 'max-h-64' : _ref8$maxHeightClass,
    _ref8$showSummary = _ref8.showSummary,
    showSummary = _ref8$showSummary === void 0 ? true : _ref8$showSummary;
  if (loading) {
    return /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500"
    }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0438\u0441\u0442\u043E\u0440\u0438\u044E...");
  }
  if (error) {
    return /*#__PURE__*/React.createElement(ErrorBanner, {
      message: error
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, showSummary && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-white"
  }, visits.length)), /*#__PURE__*/React.createElement("span", null, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    className: classNames('space-y-2 overflow-auto', maxHeightClass)
  }, visits.length ? visits.map(function (visit) {
    var isActive = isActiveAppointmentStatus(visit.Status);
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(visit.id || visit.dateLabel, "-").concat(visit.orderNumber),
      className: classNames('rounded-lg border p-3 text-xs transition', isActive ? 'border-emerald-400/60 bg-emerald-500/10 shadow-inner shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/40')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[11px] uppercase tracking-wide text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-white"
    }, "\u0412\u0438\u0437\u0438\u0442 \u2116", visit.orderNumber || '—'), /*#__PURE__*/React.createElement("span", null, visit.dateLabel)), /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-sm text-slate-100"
    }, visit.Barber || '—'), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, visit.Services || '—'), visit.Status && /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500"
    }, visit.Status));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, emptyMessage)));
};
var SectionCard = function SectionCard(_ref9) {
  var title = _ref9.title,
    actions = _ref9.actions,
    children = _ref9.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold text-white"
  }, title), actions), children);
};
var LiveBadge = function LiveBadge(_ref0) {
  var timestamp = _ref0.timestamp,
    _ref0$status = _ref0.status,
    status = _ref0$status === void 0 ? 'unknown' : _ref0$status;
  var tickingNow = useNowTick(1000);
  if (status === 'unknown' && !timestamp) return null;
  var isOffline = status === 'offline';
  var isOnline = status === 'online';
  var label = isOffline ? 'OFFLINE' : 'LIVE';
  var timeLabel = isOnline && timestamp ? formatLiveTimestamp(timestamp, tickingNow) : null;
  return /*#__PURE__*/React.createElement("span", {
    className: classNames('flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]', isOffline ? 'border-rose-500/50 bg-rose-500/10 text-rose-200' : 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200')
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames('h-2 w-2 rounded-full', isOffline ? 'bg-rose-400' : 'animate-pulse bg-emerald-400')
  }), label, timeLabel && /*#__PURE__*/React.createElement("span", {
    className: classNames(isOffline ? 'text-rose-100/80' : 'text-emerald-100/80', 'normal-case tracking-normal')
  }, timeLabel));
};
var IconTrash = function IconTrash(_ref1) {
  var _ref1$className = _ref1.className,
    className = _ref1$className === void 0 ? 'h-4 w-4' : _ref1$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
};
var IconDashboard = function IconDashboard(_ref10) {
  var _ref10$className = _ref10.className,
    className = _ref10$className === void 0 ? 'h-5 w-5' : _ref10$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11 12 4l8.5 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v10h5v-5h2v5h5V10"
  }));
};
var IconData = function IconData(_ref11) {
  var _ref11$className = _ref11.className,
    className = _ref11$className === void 0 ? 'h-5 w-5' : _ref11$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "5",
    width: "17",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 9h17M3.5 13h17M8 5v14M13 5v14"
  }));
};
var IconBot = function IconBot(_ref12) {
  var _ref12$className = _ref12.className,
    className = _ref12$className === void 0 ? 'h-5 w-5' : _ref12$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "7",
    width: "14",
    height: "11",
    rx: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12H3m18 0h-2M9 19v2m6-2v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "12",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15h5"
  }));
};
var IconSystem = function IconSystem(_ref13) {
  var _ref13$className = _ref13.className,
    className = _ref13$className === void 0 ? 'h-5 w-5' : _ref13$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5v3M12 18.5v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M2.5 12h3M18.5 12h3"
  }));
};
var IconDots = function IconDots(_ref14) {
  var _ref14$className = _ref14.className,
    className = _ref14$className === void 0 ? 'h-5 w-5' : _ref14$className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5"
  }));
};
var VIEW_TAB_ICONS = {
  dashboard: IconDashboard,
  tables: IconData,
  bot: IconBot,
  system: IconSystem
};
var UI_TEXT = Object.freeze({
  accountTitle: 'Ваш аккаунт',
  logout: 'Выйти',
  newAppointmentCta: 'Новая запись',
  liveFallback: 'LIVE'
});
var Modal = function Modal(_ref15) {
  var title = _ref15.title,
    isOpen = _ref15.isOpen,
    onClose = _ref15.onClose,
    children = _ref15.children,
    footer = _ref15.footer,
    _ref15$maxWidthClass = _ref15.maxWidthClass,
    maxWidthClass = _ref15$maxWidthClass === void 0 ? 'max-w-3xl' : _ref15$maxWidthClass;
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-h-[90vh] w-full ".concat(maxWidthClass, " overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-800 px-6 py-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-white"
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-slate-400 hover:text-white"
  }, "x")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[70vh] overflow-y-auto px-6 py-4 space-y-4"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-3 border-t border-slate-800 px-6 py-4"
  }, footer)));
};
var ConfirmDialog = function ConfirmDialog(_ref16) {
  var open = _ref16.open,
    title = _ref16.title,
    message = _ref16.message,
    _ref16$confirmLabel = _ref16.confirmLabel,
    confirmLabel = _ref16$confirmLabel === void 0 ? 'Подтвердить' : _ref16$confirmLabel,
    _ref16$cancelLabel = _ref16.cancelLabel,
    cancelLabel = _ref16$cancelLabel === void 0 ? 'Отмена' : _ref16$cancelLabel,
    _ref16$tone = _ref16.tone,
    tone = _ref16$tone === void 0 ? 'neutral' : _ref16$tone,
    onResult = _ref16.onResult;
  if (!open) return null;
  var confirmToneClass = function () {
    switch (tone) {
      case 'danger':
        return 'bg-rose-600 hover:bg-rose-500';
      case 'success':
        return 'bg-emerald-600 hover:bg-emerald-500';
      default:
        return 'bg-indigo-600 hover:bg-indigo-500';
    }
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    isOpen: open,
    title: title || 'Подтвердите действие',
    onClose: function onClose() {
      return onResult(false);
    },
    maxWidthClass: "max-w-md",
    footer: /*#__PURE__*/React.createElement("div", {
      className: "flex justify-end gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onResult(false);
      },
      className: "rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
    }, cancelLabel), ")}", /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onResult(true);
      },
      className: "rounded-lg px-4 py-2 text-sm font-semibold text-white ".concat(confirmToneClass)
    }, confirmLabel))
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-200"
  }, message || 'Вы уверены, что хотите продолжить?'));
};
var StatCard = function StatCard(_ref17) {
  var label = _ref17.label,
    value = _ref17.value,
    _ref17$accent = _ref17.accent,
    accent = _ref17$accent === void 0 ? 'text-indigo-300' : _ref17$accent;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)
  }, value));
};
var Sidebar = function Sidebar(_ref18) {
  var session = _ref18.session,
    activeTab = _ref18.activeTab,
    onChange = _ref18.onChange,
    onLogout = _ref18.onLogout,
    liveUpdatedAt = _ref18.liveUpdatedAt,
    _ref18$liveStatus = _ref18.liveStatus,
    liveStatus = _ref18$liveStatus === void 0 ? 'unknown' : _ref18$liveStatus,
    _ref18$activeDataTabl = _ref18.activeDataTable,
    activeDataTable = _ref18$activeDataTabl === void 0 ? 'Appointments' : _ref18$activeDataTabl,
    onSelectTable = _ref18.onSelectTable;
  var username = (session === null || session === void 0 ? void 0 : session.displayName) || (session === null || session === void 0 ? void 0 : session.username) || '-';
  return /*#__PURE__*/React.createElement("aside", {
    className: "hidden w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 border-b border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-wide text-slate-500"
  }, UI_TEXT.accountTitle), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-semibold text-white"
  }, username), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "mt-2 w-full rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-500 hover:text-white"
  }, UI_TEXT.logout), (liveUpdatedAt || liveStatus !== 'unknown') && /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(LiveBadge, {
    timestamp: liveUpdatedAt,
    status: liveStatus
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "mt-6 flex-1 space-y-2 overflow-y-auto"
  }, VIEW_TABS.map(function (tab) {
    var isActive = activeTab === tab.id;
    return /*#__PURE__*/React.createElement("div", {
      key: tab.id,
      className: "space-y-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(tab.id);
      },
      className: classNames('w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition', isActive ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-900/40' : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800/60 hover:text-white')
    }, tab.label), tab.id === 'tables' && /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 pl-4"
    }, DATA_SHORTCUTS.map(function (shortcut) {
      var isShortcutActive = activeDataTable === shortcut.id && activeTab === 'tables';
      return /*#__PURE__*/React.createElement("button", {
        key: shortcut.id,
        onClick: function onClick() {
          return onSelectTable === null || onSelectTable === void 0 ? void 0 : onSelectTable(shortcut.id);
        },
        className: classNames('w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition', isShortcutActive ? 'bg-indigo-600/20 text-indigo-100' : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'),
        disabled: !onSelectTable
      }, shortcut.label);
    })));
  })));
};
var MobileTabs = function MobileTabs(_ref19) {
  var session = _ref19.session,
    activeTab = _ref19.activeTab,
    onChange = _ref19.onChange,
    onLogout = _ref19.onLogout,
    liveUpdatedAt = _ref19.liveUpdatedAt,
    _ref19$liveStatus = _ref19.liveStatus,
    liveStatus = _ref19$liveStatus === void 0 ? 'unknown' : _ref19$liveStatus;
  var username = (session === null || session === void 0 ? void 0 : session.displayName) || (session === null || session === void 0 ? void 0 : session.username) || '-';
  var handleSelect = function handleSelect(tabId) {
    return onChange === null || onChange === void 0 ? void 0 : onChange(tabId);
  };
  var renderLiveIndicator = function renderLiveIndicator() {
    return liveStatus === 'unknown' && !liveUpdatedAt ? /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500"
    }, UI_TEXT.liveFallback) : /*#__PURE__*/React.createElement(LiveBadge, {
      timestamp: liveUpdatedAt,
      status: liveStatus
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex min-w-[88px] justify-start"
  }, renderLiveIndicator()), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 items-center justify-end text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-white max-w-[60vw] truncate"
  }, username)), /*#__PURE__*/React.createElement("div", {
    className: "flex min-w-[96px] justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-rose-200 hover:border-rose-400 hover:text-white whitespace-nowrap"
  }, UI_TEXT.logout)))), /*#__PURE__*/React.createElement("nav", {
    className: "fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-slate-950/95 px-4 py-2 backdrop-blur lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, VIEW_TABS.map(function (tab) {
    var IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
    var isActive = activeTab === tab.id;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: function onClick() {
        return handleSelect(tab.id);
      },
      className: classNames('flex-1 rounded-2xl px-3 py-2 text-center transition', isActive ? 'bg-indigo-600/20 text-indigo-200' : 'text-slate-400 hover:text-white'),
      "aria-label": tab.label
    }, /*#__PURE__*/React.createElement(IconComponent, {
      className: classNames('mx-auto h-6 w-6', isActive ? 'text-indigo-300' : 'text-slate-400')
    }), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, tab.label));
  }))));
};
var DashboardView = function DashboardView(_ref20) {
  var _data$appointments, _stats$totalUsers, _stats$activeAppointm, _stats$confirmedYear, _stats$todaysAppointm;
  var data = _ref20.data,
    onOpenAppointment = _ref20.onOpenAppointment,
    onOpenProfile = _ref20.onOpenProfile,
    onCreateAppointment = _ref20.onCreateAppointment;
  if (!data) return /*#__PURE__*/React.createElement(LoadingState, null);
  var stats = data.stats || {};
  var upcomingRaw = ((_data$appointments = data.appointments) === null || _data$appointments === void 0 ? void 0 : _data$appointments.upcoming) || [];
  var upcomingList = useMemo(function () {
    var nowTs = Date.now();
    return upcomingRaw.map(function (appt) {
      var startDate = getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime);
      var endDate = getAppointmentEndDate(appt.Date, appt.Time, appt.startDateTime);
      return _objectSpread(_objectSpread({}, appt), {}, {
        Status: normalizeStatusValue(appt.Status),
        startDate: startDate,
        endDate: endDate
      });
    }).filter(function (appt) {
      return shouldDisplayAppointment(appt, nowTs);
    }).sort(function (a, b) {
      var _getAppointmentStartD, _getAppointmentStartD2;
      var left = ((_getAppointmentStartD = getAppointmentStartDate(a.Date, a.Time, a.startDateTime)) === null || _getAppointmentStartD === void 0 ? void 0 : _getAppointmentStartD.getTime()) || Number.MAX_SAFE_INTEGER;
      var right = ((_getAppointmentStartD2 = getAppointmentStartDate(b.Date, b.Time, b.startDateTime)) === null || _getAppointmentStartD2 === void 0 ? void 0 : _getAppointmentStartD2.getTime()) || Number.MAX_SAFE_INTEGER;
      return left - right;
    }).slice(0, 12);
  }, [upcomingRaw]);
  var formatGroupLabel = useCallback(function (dateValue) {
    if (!dateValue || dateValue === 'Без даты') return 'Без даты';
    try {
      var parsed = new Date("".concat(dateValue, "T00:00:00"));
      if (Number.isNaN(parsed.getTime())) return dateValue;
      return new Intl.DateTimeFormat('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }).format(parsed);
    } catch (_unused) {
      return dateValue;
    }
  }, []);
  var groupedUpcoming = useMemo(function () {
    var groups = new Map();
    upcomingList.forEach(function (appt) {
      var key = appt.Date || 'Без даты';
      var bucket = groups.get(key) || [];
      bucket.push(appt);
      groups.set(key, bucket);
    });
    return Array.from(groups.entries()).map(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
        key = _ref22[0],
        items = _ref22[1];
      return {
        key: key,
        label: formatGroupLabel(key),
        items: items,
        sortValue: Math.min.apply(Math, _toConsumableArray(items.map(function (item) {
          var _getAppointmentStartD3;
          return ((_getAppointmentStartD3 = getAppointmentStartDate(item.Date, item.Time, item.startDateTime)) === null || _getAppointmentStartD3 === void 0 ? void 0 : _getAppointmentStartD3.getTime()) || Number.MAX_SAFE_INTEGER;
        })))
      };
    }).sort(function (a, b) {
      return a.sortValue - b.sortValue;
    });
  }, [formatGroupLabel, upcomingList]);
  var upcomingActions = onCreateAppointment ? /*#__PURE__*/React.createElement("button", {
    onClick: onCreateAppointment,
    className: "rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500"
  }, "+ ", UI_TEXT.newAppointmentCta) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 stat-grid"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0412\u0441\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
    value: (_stats$totalUsers = stats.totalUsers) !== null && _stats$totalUsers !== void 0 ? _stats$totalUsers : 0
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438",
    value: (_stats$activeAppointm = stats.activeAppointments) !== null && _stats$activeAppointm !== void 0 ? _stats$activeAppointm : 0,
    accent: "text-emerald-300"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E \u0437\u0430 \u0433\u043E\u0434",
    value: (_stats$confirmedYear = stats.confirmedYear) !== null && _stats$confirmedYear !== void 0 ? _stats$confirmedYear : 0,
    accent: "text-fuchsia-300"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
    value: (_stats$todaysAppointm = stats.todaysAppointments) !== null && _stats$todaysAppointm !== void 0 ? _stats$todaysAppointm : 0,
    accent: "text-cyan-300"
  }))), /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438",
    actions: upcomingActions
  }, groupedUpcoming.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u041D\u0435\u0442 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, groupedUpcoming.map(function (group) {
    return /*#__PURE__*/React.createElement("div", {
      key: group.key,
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    }), group.label, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-3 lg:grid-cols-2"
    }, group.items.map(function (appt) {
      var inProgress = isAppointmentOngoing(appt);
      var cardProps = {
        role: 'button',
        tabIndex: 0,
        onClick: function onClick() {
          return onOpenAppointment === null || onOpenAppointment === void 0 ? void 0 : onOpenAppointment(appt, {
            allowDelete: true
          });
        },
        onKeyDown: function onKeyDown(event) {
          return event.key === 'Enter' && (onOpenAppointment === null || onOpenAppointment === void 0 ? void 0 : onOpenAppointment(appt, {
            allowDelete: true
          }));
        },
        className: classNames('group upcoming-card relative w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-5', inProgress && 'border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.25)]')
      };
      var _parseTimeRangeParts2 = parseTimeRangeParts(appt.Time),
        start = _parseTimeRangeParts2.start,
        end = _parseTimeRangeParts2.end;
      var statusLabel = normalizeStatusValue(appt.Status);
      var servicesList = parseMultiValue(appt.Services);
      return /*#__PURE__*/React.createElement("div", _extends({
        key: appt.id || "".concat(group.key, "-").concat(appt.CustomerName, "-").concat(appt.Time)
      }, cardProps), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold uppercase tracking-wide text-slate-400"
      }, formatDateBadgeLabel(appt.Date)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-baseline gap-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-3xl font-bold leading-none text-white sm:text-4xl"
      }, start || '—'), end && /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-slate-400 sm:text-base"
      }, "\u0434\u043E ", end))), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-end gap-2 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs', getStatusBadgeClasses(statusLabel))
      }, statusLabel || 'Без статуса'), appt.Barber && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u0411\u0430\u0440\u0431\u0435\u0440:", ' ', /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-white"
      }, appt.Barber)))), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 space-y-4 text-[13px] text-slate-300 sm:text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 min-w-0"
      }, appt.CustomerName ? /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: function onClick(event) {
          event.stopPropagation();
          onOpenProfile === null || onOpenProfile === void 0 || onOpenProfile(appt.CustomerName);
        },
        className: "text-left text-base font-semibold text-white hover:text-indigo-300 sm:text-lg"
      }, appt.CustomerName) : /*#__PURE__*/React.createElement("p", {
        className: "text-base font-semibold text-white sm:text-lg"
      }, "\u0411\u0435\u0437 \u0438\u043C\u0435\u043D\u0438")), servicesList.length ? /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-2"
      }, servicesList.map(function (service, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: "".concat(service, "-").concat(index),
          className: "rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-1 text-[11px] text-slate-200 sm:text-xs"
        }, service);
      })) : /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u041D\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433")));
    })));
  }))));
};
var BarberAvatarPicker = function BarberAvatarPicker(_ref23) {
  var value = _ref23.value,
    onChange = _ref23.onChange,
    loadOptions = _ref23.loadOptions;
  var _useState5 = useState(function () {
      return avatarOptionsCache || [];
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    avatarOptions = _useState6[0],
    setAvatarOptions = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showGallery = _useState0[0],
    setShowGallery = _useState0[1];
  var normalizedValue = normalizeImagePath(value);
  useEffect(function () {
    if (!value || typeof onChange !== 'function') return;
    var normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      onChange(normalized);
    }
  }, [value, onChange]);
  var availableOptions = useMemo(function () {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue].concat(_toConsumableArray(avatarOptions));
  }, [avatarOptions, normalizedValue]);
  useEffect(function () {
    var isMounted = true;
    var load = /*#__PURE__*/function () {
      var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var loader, assetsPayload, assets, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              setLoading(true);
              _context2.p = 1;
              loader = typeof loadOptions === 'function' ? loadOptions : fetchAvatarOptions;
              _context2.n = 2;
              return loader();
            case 2:
              assetsPayload = _context2.v;
              if (isMounted) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              assets = Array.isArray(assetsPayload) ? assetsPayload : Array.isArray(assetsPayload === null || assetsPayload === void 0 ? void 0 : assetsPayload.images) ? assetsPayload.images : [];
              avatarOptionsCache = assets;
              setAvatarOptions(assets);
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.error('Avatar load error', _t);
            case 5:
              _context2.p = 5;
              if (isMounted) setLoading(false);
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 4, 5, 6]]);
      }));
      return function load() {
        return _ref24.apply(this, arguments);
      };
    }();
    load();
    return function () {
      isMounted = false;
    };
  }, [loadOptions]);
  var previewSrc = resolveAssetUrl(normalizedValue || avatarOptions[0] || '');
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-52 w-full bg-slate-900"
  }, previewSrc ? /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: "avatar preview",
    className: "h-full w-full object-cover"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.4em] text-slate-500"
  }, "\u043D\u0435\u0442 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em] text-slate-500"
  }, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
  }, normalizedValue ? normalizedValue.replace('/Image/', '') : 'Не выбрано')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setShowGallery(function (prev) {
        return !prev;
      });
    },
    className: "rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500",
    disabled: loading || !avatarOptions.length && !normalizedValue
  }, loading ? 'Сканирую...' : showGallery ? 'Скрыть галерею' : 'Открыть галерею'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onChange('');
    },
    className: "rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-rose-400 hover:text-white"
  }, "\u0411\u0435\u0437 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")), showGallery && avatarOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 sm:grid-cols-4"
  }, avatarOptions.map(function (preset) {
    var isSelected = preset === normalizedValue;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: preset,
      onClick: function onClick() {
        return onChange(preset);
      },
      className: classNames('rounded-2xl border p-1.5 transition hover:border-indigo-400 hover:bg-slate-800', isSelected ? 'border-indigo-500 bg-indigo-500/15' : 'border-slate-700 bg-slate-900')
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveAssetUrl(preset),
      alt: "avatar preset",
      className: "h-20 w-full rounded-xl object-cover"
    }));
  })), !avatarOptions.length && !loading && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u043F\u0430\u043F\u043A\u0443 /Image, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440.")));
};
var DAY_INDEX_LOOKUP = function () {
  var full = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  var _short = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  var map = {};
  full.forEach(function (name, index) {
    map[name] = index;
  });
  _short.forEach(function (name, index) {
    map[name] = index;
  });
  return map;
}();
var getDayIndex = function getDayIndex() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var normalized = normalizeText(value).toLowerCase();
  return Number.isFinite(DAY_INDEX_LOOKUP[normalized]) ? DAY_INDEX_LOOKUP[normalized] : 7;
};
var formatScheduleDayShort = function formatScheduleDayShort(dateValue) {
  var fallbackDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var safeDate = normalizeText(dateValue);
  if (safeDate) {
    try {
      var parsed = new Date("".concat(safeDate, "T00:00:00"));
      if (!Number.isNaN(parsed.getTime())) {
        return new Intl.DateTimeFormat('ru-RU', {
          weekday: 'short'
        }).format(parsed).replace('.', '');
      }
    } catch (_unused2) {
      // noop
    }
  }
  var normalizedFallback = normalizeText(fallbackDay);
  return normalizedFallback ? normalizedFallback.slice(0, 2) : '';
};
var formatScheduleDateLabel = function formatScheduleDateLabel(dateValue) {
  var safeDate = normalizeText(dateValue);
  if (!safeDate) return '';
  try {
    var parsed = new Date("".concat(safeDate, "T00:00:00"));
    if (Number.isNaN(parsed.getTime())) return '';
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'short'
    }).format(parsed).replace('.', '');
  } catch (_unused3) {
    return '';
  }
};
var isTodayDate = function isTodayDate(dateValue) {
  var safeDate = normalizeText(dateValue);
  if (!safeDate) return false;
  var today = new Date();
  var target = new Date("".concat(safeDate, "T00:00:00"));
  if (Number.isNaN(target.getTime())) return false;
  return today.getFullYear() === target.getFullYear() && today.getMonth() === target.getMonth() && today.getDate() === target.getDate();
};
var parseSlotTimeMinutes = function parseSlotTimeMinutes(value) {
  var match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return 0;
  return Number(match[1]) * 60 + Number(match[2]);
};
var getScheduleSortValue = function getScheduleSortValue(slot) {
  var safeDate = normalizeText(slot.Date);
  if (safeDate) {
    var parsed = new Date("".concat(safeDate, "T00:00:00"));
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.getTime() + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start) * 60000;
    }
  }
  var base = Number.MAX_SAFE_INTEGER - 1000000000;
  var dayIndex = getDayIndex(slot.DayOfWeek);
  return base + dayIndex * 10000 + parseSlotTimeMinutes(parseTimeRangeParts(slot.Week).start || slot.Week) * 10;
};
var RatingSlider = function RatingSlider(_ref25) {
  var value = _ref25.value,
    onChange = _ref25.onChange,
    _ref25$dense = _ref25.dense,
    dense = _ref25$dense === void 0 ? false : _ref25$dense;
  var ratingValue = Number(value || RATING_MAX).toFixed(1);
  var wrapperClass = dense ? 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5' : 'space-y-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2';
  var labelClass = dense ? 'flex items-center justify-between text-xs text-slate-300' : 'flex items-center justify-between text-sm text-slate-300';
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/React.createElement("label", {
    className: labelClass
  }, /*#__PURE__*/React.createElement("span", null, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-white"
  }, ratingValue)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: RATING_MIN,
    max: RATING_MAX,
    step: RATING_STEP,
    value: Number(value) || RATING_MAX,
    onChange: onChange,
    className: "w-full accent-indigo-500"
  }));
};
var BarbersView = function BarbersView(_ref26) {
  var _workingBarber$name, _workingBarber$passwo;
  var _ref26$barbers = _ref26.barbers,
    barbers = _ref26$barbers === void 0 ? [] : _ref26$barbers,
    _ref26$schedules = _ref26.schedules,
    schedules = _ref26$schedules === void 0 ? [] : _ref26$schedules,
    loadAvatarOptions = _ref26.loadAvatarOptions,
    onFieldChange = _ref26.onFieldChange,
    onSave = _ref26.onSave,
    onAdd = _ref26.onAdd,
    onDelete = _ref26.onDelete,
    onScheduleUpdate = _ref26.onScheduleUpdate;
  var _useState1 = useState({
      open: false,
      mode: 'edit',
      targetId: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    editorState = _useState10[0],
    setEditorState = _useState10[1];
  var _useState11 = useState(buildNewBarberState),
    _useState12 = _slicedToArray(_useState11, 2),
    draftBarber = _useState12[0],
    setDraftBarber = _useState12[1];
  var openEditor = function openEditor(mode) {
    var targetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (mode === 'create') {
      setDraftBarber(buildNewBarberState());
    }
    setEditorState({
      open: true,
      mode: mode,
      targetId: targetId
    });
  };
  var closeEditor = function closeEditor() {
    return setEditorState({
      open: false,
      mode: 'edit',
      targetId: null
    });
  };
  var isCreateMode = editorState.mode === 'create';
  var activeBarber = barbers.find(function (barber) {
    return barber.id === editorState.targetId;
  }) || null;
  var workingBarber = isCreateMode ? draftBarber : activeBarber;
  var workingBarberSchedule = useMemo(function () {
    if (!(workingBarber !== null && workingBarber !== void 0 && workingBarber.name)) return [];
    var target = normalizeText(workingBarber.name).toLowerCase();
    return schedules.filter(function (slot) {
      return normalizeText(slot.Barber).toLowerCase() === target;
    }).sort(function (a, b) {
      return getScheduleSortValue(a) - getScheduleSortValue(b);
    });
  }, [workingBarber, schedules]);
  var handleFieldChange = function handleFieldChange(field, value) {
    if (isCreateMode) {
      setDraftBarber(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      });
    } else if (activeBarber) {
      onFieldChange === null || onFieldChange === void 0 || onFieldChange(activeBarber.id, field, value);
    }
  };
  var handleSave = function handleSave() {
    if (isCreateMode) {
      onAdd === null || onAdd === void 0 || onAdd(draftBarber);
      setDraftBarber(buildNewBarberState());
    } else if (activeBarber) {
      onSave === null || onSave === void 0 || onSave(activeBarber);
    }
    closeEditor();
  };
  var handleDelete = function handleDelete() {
    if (!isCreateMode && activeBarber) {
      var result = onDelete === null || onDelete === void 0 ? void 0 : onDelete(activeBarber);
      if (result && typeof result["finally"] === 'function') {
        result["finally"](function () {
          return closeEditor();
        });
      } else {
        closeEditor();
      }
    }
  };
  var renderStatusBadge = function renderStatusBadge(barber) {
    return barber ? /*#__PURE__*/React.createElement("span", {
      className: classNames('rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide', barber.isActive !== false ? 'bg-emerald-500/15 text-emerald-200' : 'bg-slate-700 text-slate-300')
    }, barber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL) : null;
  };
  var canSubmit = isCreateMode ? Boolean((workingBarber === null || workingBarber === void 0 || (_workingBarber$name = workingBarber.name) === null || _workingBarber$name === void 0 ? void 0 : _workingBarber$name.trim()) && (workingBarber === null || workingBarber === void 0 || (_workingBarber$passwo = workingBarber.password) === null || _workingBarber$passwo === void 0 ? void 0 : _workingBarber$passwo.trim())) : Boolean(workingBarber);
  var handleSchedulePickerChange = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(slot, nextValue) {
      var slotId;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!(typeof onScheduleUpdate !== 'function')) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            slotId = getRecordId(slot);
            if (slotId) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            _context3.n = 3;
            return onScheduleUpdate(slotId, {
              Barber: slot.Barber,
              Date: slot.Date,
              DayOfWeek: slot.DayOfWeek,
              Week: nextValue,
              Time: nextValue
            });
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function handleSchedulePickerChange(_x, _x2) {
      return _ref27.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0411\u0430\u0440\u0431\u0435\u0440\u044B",
    actions: /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return openEditor('create');
      },
      className: "rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u0430\u0440\u0431\u0435\u0440\u0430")
  }, barbers.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0431\u0430\u0440\u0431\u0435\u0440\u043E\u0432 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430.") : /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, barbers.map(function (barber) {
    var avatarSrc = resolveAssetUrl(barber.avatarUrl);
    var phoneLabel = barber.phone ? formatPhoneInput(barber.phone) : '';
    var ratingLabel = Number(barber.rating || RATING_MAX).toFixed(1);
    return /*#__PURE__*/React.createElement("button", {
      key: barber.id,
      onClick: function onClick() {
        return openEditor('edit', barber.id);
      },
      className: "group flex w-full items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative h-16 w-16 flex-shrink-0"
    }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
      src: avatarSrc,
      alt: barber.name || 'avatar',
      className: "h-16 w-16 rounded-2xl object-cover"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-lg font-semibold text-slate-200"
    }, (barber.name || 'B').slice(0, 1)), /*#__PURE__*/React.createElement("span", {
      className: classNames('absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900', barber.isActive !== false ? 'bg-emerald-400' : 'bg-slate-600')
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 space-y-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-base font-semibold text-white sm:text-lg"
    }, barber.name || 'Без имени'), renderStatusBadge(barber)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 sm:text-sm"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-indigo-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-200"
    }, "\u2605 ", ratingLabel), phoneLabel && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, phoneLabel), barber.telegramId && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "@", barber.telegramId)), barber.description && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-400"
    }, barber.description)));
  }))), /*#__PURE__*/React.createElement(Modal, {
    title: isCreateMode ? 'Добавить барбера' : (workingBarber === null || workingBarber === void 0 ? void 0 : workingBarber.name) || 'Редактирование барбера',
    isOpen: editorState.open,
    onClose: closeEditor,
    maxWidthClass: "max-w-4xl",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, !isCreateMode && /*#__PURE__*/React.createElement("button", {
      onClick: handleDelete,
      className: "rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: closeEditor,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSave,
      disabled: !canSubmit,
      className: classNames('rounded-lg px-4 py-2 text-sm font-semibold text-white', canSubmit ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300')
    }, isCreateMode ? 'Добавить' : 'Сохранить'))
  }, workingBarber ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(BarberAvatarPicker, {
    value: workingBarber.avatarUrl,
    onChange: function onChange(value) {
      return handleFieldChange('avatarUrl', value);
    },
    loadOptions: loadAvatarOptions
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-inner shadow-black/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("input", {
    value: workingBarber.name || '',
    onChange: function onChange(event) {
      return handleFieldChange('name', event.target.value);
    },
    placeholder: "\u0418\u043C\u044F",
    className: "w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement(RatingSlider, {
    dense: true,
    value: workingBarber.rating,
    onChange: function onChange(event) {
      return handleFieldChange('rating', event.target.value);
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: workingBarber.password || '',
    onChange: function onChange(event) {
      return handleFieldChange('password', event.target.value);
    },
    placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
    className: "w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
  }), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white"
  }, "\u0426\u0432\u0435\u0442", /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: /^#/.test(workingBarber.color || '') ? workingBarber.color : '#6d28d9',
    onChange: function onChange(event) {
      return handleFieldChange('color', event.target.value);
    },
    className: "h-10 w-16 cursor-pointer rounded-xl border border-slate-500 bg-transparent"
  })), /*#__PURE__*/React.createElement("textarea", {
    value: workingBarber.description || '',
    onChange: function onChange(event) {
      return handleFieldChange('description', event.target.value);
    },
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    rows: 4,
    className: "col-span-2 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
  }), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: workingBarber.phone || '',
    onChange: function onChange(event) {
      return handleFieldChange('phone', event.target.value);
    },
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    className: "w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
  }), /*#__PURE__*/React.createElement("input", {
    value: workingBarber.telegramId || '',
    onChange: function onChange(event) {
      return handleFieldChange('telegramId', event.target.value);
    },
    placeholder: "Telegram ID",
    className: "w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleFieldChange('isActive', !(workingBarber.isActive !== false));
    },
    className: classNames('inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition', workingBarber.isActive !== false ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-900/60 text-slate-400')
  }, /*#__PURE__*/React.createElement("span", null, workingBarber.isActive !== false ? ACTIVE_BARBER_LABEL : HIDDEN_BARBER_LABEL), /*#__PURE__*/React.createElement("span", {
    className: classNames('flex h-5 w-5 items-center justify-center rounded-full border', workingBarber.isActive !== false ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100' : 'border-slate-600 text-slate-500')
  }, workingBarber.isActive !== false ? '✓' : ''))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-400"
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), workingBarberSchedule.length ? /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  }, workingBarberSchedule.map(function (slot) {
    var slotId = getRecordId(slot) || "".concat(slot.Barber, "-").concat(slot.Date, "-").concat(slot.Week);
    var timeValue = slot.Week || '';
    var dayLabel = formatScheduleDayShort(slot.Date, slot.DayOfWeek);
    var dateLabel = formatScheduleDateLabel(slot.Date);
    var isTodaySlot = isTodayDate(slot.Date);
    return /*#__PURE__*/React.createElement("div", {
      key: slotId,
      className: classNames('space-y-2 rounded-2xl border bg-slate-900/60 p-3', isTodaySlot ? 'border-emerald-400/70 ring-1 ring-emerald-400/30' : 'border-slate-800')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center gap-1 text-center text-xs uppercase tracking-[0.3em] text-slate-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-sm font-semibold tracking-wide"
    }, [dayLabel, dateLabel].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement(TimeRangePicker, {
      value: timeValue,
      onChange: function onChange(nextValue) {
        return handleSchedulePickerChange(slot, nextValue);
      },
      buttonClassName: "w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-center text-sm text-white focus:ring-2 focus:ring-indigo-500",
      title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
      placeholder: "\u0412\u0440\u0435\u043C\u044F"
    }));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0431\u0430\u0440\u0431\u0435\u0440\u0430 \u043D\u0435\u0442 \u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0442\u043E\u0432.")))) : /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u0440\u0431\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435.")));
};
var ServicesView = function ServicesView(_ref28) {
  var _workingService$name2, _workingService$durat;
  var _ref28$services = _ref28.services,
    services = _ref28$services === void 0 ? [] : _ref28$services,
    _ref28$barbers = _ref28.barbers,
    barbers = _ref28$barbers === void 0 ? [] : _ref28$barbers,
    onFieldChange = _ref28.onFieldChange,
    onPriceChange = _ref28.onPriceChange,
    onDelete = _ref28.onDelete,
    onAdd = _ref28.onAdd;
  var _useState13 = useState({
      open: false,
      mode: 'edit',
      targetId: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    editorState = _useState14[0],
    setEditorState = _useState14[1];
  var _useState15 = useState(buildNewServiceState),
    _useState16 = _slicedToArray(_useState15, 2),
    draftService = _useState16[0],
    setDraftService = _useState16[1];
  var openEditor = function openEditor(mode) {
    var targetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (mode === 'create') {
      setDraftService(buildNewServiceState());
    }
    setEditorState({
      open: true,
      mode: mode,
      targetId: targetId
    });
  };
  var closeEditor = function closeEditor() {
    return setEditorState({
      open: false,
      mode: 'edit',
      targetId: null
    });
  };
  var isCreateMode = editorState.mode === 'create';
  var activeService = services.find(function (service) {
    return service.id === editorState.targetId;
  }) || null;
  var workingService = isCreateMode ? draftService : activeService;
  var handleFieldChange = function handleFieldChange(field, value) {
    if (isCreateMode) {
      setDraftService(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      });
    } else if (activeService) {
      onFieldChange === null || onFieldChange === void 0 || onFieldChange(activeService.id, field, value);
    }
  };
  var handlePriceChange = function handlePriceChange(barberId, value) {
    if (isCreateMode) {
      setDraftService(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          prices: _objectSpread(_objectSpread({}, prev.prices || {}), {}, _defineProperty({}, barberId, value))
        });
      });
    } else if (activeService) {
      onPriceChange === null || onPriceChange === void 0 || onPriceChange(activeService.id, barberId, value);
    }
  };
  var handleSave = function handleSave() {
    if (isCreateMode) {
      var _workingService$name;
      if (!(workingService !== null && workingService !== void 0 && (_workingService$name = workingService.name) !== null && _workingService$name !== void 0 && _workingService$name.trim())) return;
      onAdd === null || onAdd === void 0 || onAdd(draftService);
      setDraftService(buildNewServiceState());
    }
    closeEditor();
  };
  var handleDeleteLocal = function handleDeleteLocal() {
    if (!isCreateMode && activeService) {
      var result = onDelete === null || onDelete === void 0 ? void 0 : onDelete(activeService);
      if (result && typeof result["finally"] === 'function') {
        result["finally"](function () {
          return closeEditor();
        });
      } else {
        closeEditor();
      }
    }
  };
  var servicePriceSummary = function servicePriceSummary(service) {
    if (!service) {
      return {
        label: '—',
        details: ''
      };
    }
    var values = barbers.map(function (barber) {
      var _service$prices;
      return Number((_service$prices = service.prices) === null || _service$prices === void 0 ? void 0 : _service$prices[barber.id]);
    }).filter(function (price) {
      return Number.isFinite(price) && price >= 0;
    });
    if (!values.length) {
      return {
        label: 'Цены не заданы',
        details: barbers.length ? 'Нажмите, чтобы добавить' : 'Нет барберов для назначения'
      };
    }
    var min = Math.min.apply(Math, _toConsumableArray(values));
    var max = Math.max.apply(Math, _toConsumableArray(values));
    var count = values.length;
    return {
      label: min === max ? formatCurrency(min) : "".concat(formatCurrency(min), " \u2013 ").concat(formatCurrency(max)),
      details: "\u0414\u043B\u044F ".concat(count, " ").concat(pluralize(count, ['барбера', 'барбера', 'барберов']))
    };
  };
  var canSubmit = isCreateMode ? Boolean(workingService === null || workingService === void 0 || (_workingService$name2 = workingService.name) === null || _workingService$name2 === void 0 ? void 0 : _workingService$name2.trim()) : true;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0423\u0441\u043B\u0443\u0433\u0438",
    actions: /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return openEditor('create');
      },
      className: "rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-900/40 hover:bg-emerald-500"
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443")
  }, services.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u043B\u0443\u0433 \u043F\u0443\u0441\u0442. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0443\u0441\u043B\u0443\u0433\u0443.") : /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, services.map(function (service) {
    var summary = servicePriceSummary(service);
    return /*#__PURE__*/React.createElement("button", {
      key: service.id,
      onClick: function onClick() {
        return openEditor('edit', service.id);
      },
      className: "group flex w-full flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-base font-semibold text-white sm:text-lg"
    }, service.name || 'Без названия'), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
    }, service.duration ? "".concat(service.duration, " \u043C\u0438\u043D") : '—')), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-slate-100"
    }, summary.label), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400"
    }, summary.details));
  }))), /*#__PURE__*/React.createElement(Modal, {
    title: isCreateMode ? 'Новая услуга' : (workingService === null || workingService === void 0 ? void 0 : workingService.name) || 'Редактирование услуги',
    isOpen: editorState.open,
    onClose: closeEditor,
    maxWidthClass: "max-w-3xl",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, !isCreateMode && /*#__PURE__*/React.createElement("button", {
      onClick: handleDeleteLocal,
      className: "rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: closeEditor,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSave,
      disabled: !canSubmit,
      className: classNames('rounded-lg px-4 py-2 text-sm font-semibold text-white', canSubmit ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-300')
    }, isCreateMode ? 'Добавить' : 'Готово'))
  }, workingService ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-slate-300"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("input", {
    value: workingService.name || '',
    onChange: function onChange(event) {
      return handleFieldChange('name', event.target.value);
    },
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u0442\u0440\u0438\u0436\u043A\u0430",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm text-slate-300"
  }, "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043C\u0438\u043D"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 5,
    step: 5,
    value: (_workingService$durat = workingService.duration) !== null && _workingService$durat !== void 0 ? _workingService$durat : '',
    onChange: function onChange(event) {
      return handleFieldChange('duration', event.target.value === '' ? '' : Number(event.target.value));
    },
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleFieldChange('isActive', !(workingService.isActive !== false));
    },
    className: classNames('inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition', workingService.isActive !== false ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-900/60 text-slate-400')
  }, /*#__PURE__*/React.createElement("span", null, workingService.isActive !== false ? ACTIVE_SERVICE_LABEL : HIDDEN_SERVICE_LABEL), /*#__PURE__*/React.createElement("span", {
    className: classNames('flex h-5 w-5 items-center justify-center rounded-full border', workingService.isActive !== false ? 'border-emerald-300 bg-emerald-400/20 text-emerald-100' : 'border-slate-600 text-slate-500')
  }, workingService.isActive !== false ? "\u2713" : ''))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-300"
  }, "\u0426\u0435\u043D\u044B \u043F\u043E \u0431\u0430\u0440\u0431\u0435\u0440\u0430\u043C"), barbers.length ? /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 sm:grid-cols-2"
  }, barbers.map(function (barber) {
    var _workingService$price, _workingService$price2;
    return /*#__PURE__*/React.createElement("label", {
      key: barber.id,
      className: "flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-white"
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, barber.name || 'Без имени'), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: 0,
      value: (_workingService$price = (_workingService$price2 = workingService.prices) === null || _workingService$price2 === void 0 ? void 0 : _workingService$price2[barber.id]) !== null && _workingService$price !== void 0 ? _workingService$price : '',
      onChange: function onChange(event) {
        return handlePriceChange(barber.id, event.target.value);
      },
      className: "w-28 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-right text-sm text-white",
      placeholder: "0"
    }));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0431\u0430\u0440\u0431\u0435\u0440\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0442\u044C \u0446\u0435\u043D\u044B."))) : /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.")));
};
var MultiSelectCell = function MultiSelectCell(_ref29) {
  var value = _ref29.value,
    _ref29$options = _ref29.options,
    options = _ref29$options === void 0 ? [] : _ref29$options,
    onCommit = _ref29.onCommit;
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open = _useState18[0],
    setOpen = _useState18[1];
  var _useState19 = useState(parseMultiValue(value)),
    _useState20 = _slicedToArray(_useState19, 2),
    draft = _useState20[0],
    setDraft = _useState20[1];
  var anchorRef = useRef(null);
  var _useState21 = useState({
      top: 0,
      left: 0
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    position = _useState22[0],
    setPosition = _useState22[1];
  useEffect(function () {
    setDraft(parseMultiValue(value));
  }, [value]);
  var updatePosition = useCallback(function () {
    if (!anchorRef.current) return;
    var rect = anchorRef.current.getBoundingClientRect();
    var panelWidth = 320;
    var panelHeight = 360;
    var nextLeft = Math.min(rect.left, window.innerWidth - panelWidth - 16);
    var nextTop = Math.min(rect.bottom + 8, window.innerHeight - panelHeight - 16);
    setPosition({
      top: Math.max(16, nextTop),
      left: Math.max(16, nextLeft)
    });
  }, []);
  useLayoutEffect(function () {
    if (!open) return undefined;
    updatePosition();
    var handler = function handler() {
      return updatePosition();
    };
    window.addEventListener('resize', handler);
    window.addEventListener('scroll', handler, true);
    return function () {
      window.removeEventListener('resize', handler);
      window.removeEventListener('scroll', handler, true);
    };
  }, [open, updatePosition]);
  var toggleOption = function toggleOption(option) {
    setDraft(function (prev) {
      return prev.includes(option) ? prev.filter(function (item) {
        return item !== option;
      }) : [].concat(_toConsumableArray(prev), [option]);
    });
  };
  var handleSave = function handleSave() {
    onCommit(draft.join(', '));
    setOpen(false);
  };
  var summary = draft.length ? draft.join(', ') : 'Выбрать услуги';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: anchorRef,
    onClick: function onClick() {
      return setOpen(true);
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white hover:border-indigo-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block max-h-[40px] overflow-hidden text-ellipsis whitespace-pre-wrap"
  }, summary)), open && createPortal(/*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-full max-w-xs rounded-2xl border border-slate-700 bg-slate-900/95 p-3 text-sm text-white shadow-2xl",
    style: {
      top: "".concat(position.top, "px"),
      left: "".concat(position.left, "px")
    },
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rounded-full p-1 text-slate-400 hover:text-white",
    onClick: function onClick() {
      setDraft(parseMultiValue(value));
      setOpen(false);
    }
  }, "?")), draft.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-2 mb-2 flex flex-wrap gap-2"
  }, draft.map(function (service) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: service,
      className: "flex items-center gap-1 rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200",
      onClick: function onClick() {
        return toggleOption(service);
      }
    }, service, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "?"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-h-56 space-y-1 overflow-y-auto pr-1"
  }, options.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433"), options.map(function (option) {
    var isActive = draft.includes(option);
    return /*#__PURE__*/React.createElement("label", {
      key: option,
      className: classNames('flex items-center justify-between rounded-xl border px-3 py-2', isActive ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 text-slate-200 hover:border-indigo-500/60')
    }, /*#__PURE__*/React.createElement("span", {
      className: "pr-2 text-left"
    }, option), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isActive,
      onChange: function onChange() {
        return toggleOption(option);
      },
      className: "h-4 w-4 rounded border-slate-500 accent-indigo-500"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDraft([]);
    },
    className: "text-xs text-slate-400 hover:text-white"
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleSave,
    className: "rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500"
  }, "\u0413\u043E\u0442\u043E\u0432\u043E")))), document.body));
};
var TimeRangePicker = function TimeRangePicker(_ref30) {
  var value = _ref30.value,
    onChange = _ref30.onChange,
    _ref30$title = _ref30.title,
    title = _ref30$title === void 0 ? 'Выбор времени' : _ref30$title,
    _ref30$placeholder = _ref30.placeholder,
    placeholder = _ref30$placeholder === void 0 ? 'Нажмите, чтобы выбрать' : _ref30$placeholder,
    _ref30$buttonClassNam = _ref30.buttonClassName,
    buttonClassName = _ref30$buttonClassNam === void 0 ? 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white whitespace-nowrap' : _ref30$buttonClassNam;
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    open = _useState24[0],
    setOpen = _useState24[1];
  var _useState25 = useState(function () {
      return parseTimeRangeValue(value);
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    _useState26$ = _useState26[0],
    start = _useState26$.start,
    end = _useState26$.end,
    setDraft = _useState26[1];
  var normalizeHourValue = function normalizeHourValue(inputValue) {
    if (!inputValue) return '';
    var _inputValue$split = inputValue.split(':'),
      _inputValue$split2 = _slicedToArray(_inputValue$split, 1),
      hours = _inputValue$split2[0];
    if (!hours) return '';
    return "".concat(hours.padStart(2, '0'), ":00");
  };
  var handleOpen = function handleOpen() {
    setDraft(parseTimeRangeValue(value));
    setOpen(true);
  };
  var handleSave = function handleSave() {
    onChange === null || onChange === void 0 || onChange(buildTimeRangeValue(start, end));
    setOpen(false);
  };
  var handleClear = function handleClear() {
    onChange === null || onChange === void 0 || onChange('0');
    setDraft({
      start: '',
      end: ''
    });
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleOpen,
    className: buttonClassName
  }, value ? value : placeholder), /*#__PURE__*/React.createElement(Modal, {
    title: title,
    isOpen: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    maxWidthClass: "max-w-md",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setOpen(false);
      },
      className: "rounded-lg border border-slate-600 px-4 py-2 text-white"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleSave,
      className: "rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-300"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleClear,
    className: "text-xs text-slate-400 hover:text-slate-100"
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-around gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-slate-400"
  }, "\u0421\u0442\u0430\u0440\u0442"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    step: "3600",
    value: start,
    onChange: function onChange(event) {
      return setDraft(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          start: normalizeHourValue(event.target.value)
        });
      });
    },
    className: "mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-light text-slate-500"
  }, "-"), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-slate-400"
  }, "\u0424\u0438\u043D\u0438\u0448"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    step: "3600",
    value: end,
    onChange: function onChange(event) {
      return setDraft(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          end: normalizeHourValue(event.target.value)
        });
      });
    },
    className: "mt-2 w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-2 text-center text-lg text-white"
  }))))));
};
var EditableCell = function EditableCell(_ref31) {
  var record = _ref31.record,
    column = _ref31.column,
    options = _ref31.options,
    onUpdate = _ref31.onUpdate,
    onOpenProfile = _ref31.onOpenProfile,
    tableId = _ref31.tableId;
  var recordId = (record === null || record === void 0 ? void 0 : record.id) || (record === null || record === void 0 ? void 0 : record.Id) || (record === null || record === void 0 ? void 0 : record.ID) || (record === null || record === void 0 ? void 0 : record.recordId);
  var value = record[column.key];
  var _useState27 = useState(value !== null && value !== void 0 ? value : ''),
    _useState28 = _slicedToArray(_useState27, 2),
    draft = _useState28[0],
    setDraft = _useState28[1];
  useEffect(function () {
    setDraft(value !== null && value !== void 0 ? value : '');
  }, [value]);
  if (!column.editable) {
    if (column.isProfileLink) {
      return /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return onOpenProfile === null || onOpenProfile === void 0 ? void 0 : onOpenProfile(value);
        },
        className: "text-left text-indigo-300 hover:text-indigo-100"
      }, value || '-');
    }
    return /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 whitespace-normal break-words leading-tight"
    }, value || '-');
  }
  var commit = function commit(nextValue) {
    var payload = nextValue !== undefined ? nextValue : draft;
    if ((value !== null && value !== void 0 ? value : '') === (payload !== null && payload !== void 0 ? payload : '')) return;
    onUpdate(recordId, _defineProperty({}, column.key, payload));
  };
  if (tableId === 'Appointments' && column.key === 'Time' || tableId === 'Schedules' && column.key === 'Week') {
    return /*#__PURE__*/React.createElement(TimeRangePicker, {
      value: value || '',
      onChange: function onChange(nextValue) {
        return commit(nextValue);
      },
      placeholder: "\u2014",
      title: tableId === 'Schedules' ? 'Редактирование слотов' : 'Выбор времени',
      buttonClassName: "w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white"
    });
  }
  switch (column.type) {
    case 'select':
      {
        var optionList = column.optionsKey ? options[column.optionsKey] || [] : [];
        return /*#__PURE__*/React.createElement("select", {
          value: value || '',
          onChange: function onChange(event) {
            return commit(event.target.value);
          },
          className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white"
        }, /*#__PURE__*/React.createElement("option", {
          value: ""
        }, "-"), optionList.map(function (option) {
          return /*#__PURE__*/React.createElement("option", {
            key: option,
            value: option
          }, option);
        }));
      }
    case 'boolean':
      return /*#__PURE__*/React.createElement("label", {
        className: "flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: value === true || value === 'true' || value === 1 || value === '1',
        onChange: function onChange(event) {
          return commit(event.target.checked ? 'true' : '');
        }
      }));
    case 'multi-select':
      return /*#__PURE__*/React.createElement(MultiSelectCell, {
        value: value,
        options: options[column.optionsKey] || [],
        onCommit: commit
      });
    case 'date':
      return /*#__PURE__*/React.createElement("input", {
        type: "date",
        value: value ? String(value).slice(0, 10) : '',
        onChange: function onChange(event) {
          return commit(event.target.value);
        },
        className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white"
      });
    default:
      return /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: draft || '',
        onChange: function onChange(event) {
          return setDraft(event.target.value);
        },
        onBlur: function onBlur() {
          return commit();
        },
        onKeyDown: function onKeyDown(event) {
          return event.key === 'Enter' && commit();
        },
        className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-sm text-white"
      });
  }
};
var ColumnMenu = function ColumnMenu(_ref32) {
  var columns = _ref32.columns,
    _ref32$hiddenColumns = _ref32.hiddenColumns,
    hiddenColumns = _ref32$hiddenColumns === void 0 ? [] : _ref32$hiddenColumns,
    onToggle = _ref32.onToggle;
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open = _useState30[0],
    setOpen = _useState30[1];
  var ref = useRef(null);
  useOutsideClick(ref, open ? function () {
    return setOpen(false);
  } : null);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-center rounded-lg border border-slate-600 px-3 py-2 text-sm text-white sm:w-auto"
  }, "\u041F\u043E\u043B\u044F"), open && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "absolute left-0 z-30 mt-2 w-64 max-w-[calc(100vw-2rem)] space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl sm:left-auto sm:right-0"
  }, columns.map(function (column) {
    return /*#__PURE__*/React.createElement("label", {
      key: column.key,
      className: "flex items-center gap-2 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !hiddenColumns.includes(column.key),
      onChange: function onChange() {
        return onToggle(column.key);
      }
    }), column.label);
  })));
};
var MultiSelectCheckboxes = function MultiSelectCheckboxes(_ref33) {
  var label = _ref33.label,
    _ref33$options = _ref33.options,
    options = _ref33$options === void 0 ? [] : _ref33$options,
    _ref33$value = _ref33.value,
    value = _ref33$value === void 0 ? [] : _ref33$value,
    onChange = _ref33.onChange,
    _ref33$placeholder = _ref33.placeholder,
    placeholder = _ref33$placeholder === void 0 ? 'Нет данных' : _ref33$placeholder;
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    query = _useState32[0],
    setQuery = _useState32[1];
  var selected = useMemo(function () {
    return Array.isArray(value) ? value : parseMultiValue(value);
  }, [value]);
  var normalizedQuery = query.trim().toLowerCase();
  var filtered = useMemo(function () {
    if (!normalizedQuery) return options;
    return options.filter(function (option) {
      return option.toLowerCase().includes(normalizedQuery);
    });
  }, [options, normalizedQuery]);
  var toggle = function toggle(option) {
    if (!onChange) return;
    var exists = selected.includes(option);
    var next = exists ? selected.filter(function (item) {
      return item !== option;
    }) : [].concat(_toConsumableArray(selected), [option]);
    onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-sm"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-slate-300"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-400"
  }, selected.length ? "".concat(selected.length, " \u0432\u044B\u0431\u0440\u0430\u043D\u043E") : 'Не выбрано')), selected.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, selected.map(function (service) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: service,
      className: "flex items-center gap-1 rounded-full bg-indigo-500/10 px-2 py-1 text-xs text-indigo-200",
      onClick: function onClick() {
        return toggle(service);
      }
    }, service, /*#__PURE__*/React.createElement("span", {
      className: "text-base leading-none text-slate-400",
      "aria-hidden": "true"
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-slate-700 bg-slate-900/60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-b border-slate-800 px-3 py-2"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 text-slate-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
  })), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0443\u0441\u043B\u0443\u0433\u0438",
    className: "flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
  }), query && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setQuery('');
    },
    className: "text-xs text-slate-400 hover:text-white"
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-56 overflow-y-auto p-2"
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "px-1 py-2 text-sm text-slate-500"
  }, placeholder) : /*#__PURE__*/React.createElement("div", {
    className: "grid gap-1 sm:grid-cols-2"
  }, filtered.map(function (option) {
    var isActive = selected.includes(option);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: option,
      onClick: function onClick() {
        return toggle(option);
      },
      className: classNames('flex items-center justify-between rounded-xl border px-3 py-2 text-left text-sm', isActive ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 bg-slate-900/40 text-slate-200 hover:border-indigo-500/40')
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, option), isActive && /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-semibold text-indigo-300",
      "aria-hidden": "true"
    }, "\u2713"));
  })))));
};
var ClientLookupInput = function ClientLookupInput(_ref34) {
  var _ref34$label = _ref34.label,
    label = _ref34$label === void 0 ? 'Клиент' : _ref34$label,
    _ref34$value = _ref34.value,
    value = _ref34$value === void 0 ? '' : _ref34$value,
    _onChange = _ref34.onChange,
    _ref34$clients = _ref34.clients,
    clients = _ref34$clients === void 0 ? [] : _ref34$clients,
    onSelectClient = _ref34.onSelectClient,
    _ref34$placeholder = _ref34.placeholder,
    placeholder = _ref34$placeholder === void 0 ? 'Начните вводить имя или телефон' : _ref34$placeholder;
  var _useState33 = useState(value || ''),
    _useState34 = _slicedToArray(_useState33, 2),
    query = _useState34[0],
    setQuery = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    open = _useState36[0],
    setOpen = _useState36[1];
  var containerRef = useRef(null);
  useEffect(function () {
    setQuery(value || '');
  }, [value]);
  var matches = useMemo(function () {
    if (!clients.length) return [];
    var normalized = normalizeText(query).toLowerCase();
    var shortlist = normalized ? clients.filter(function (client) {
      return normalizeText(client.name).toLowerCase().includes(normalized) || normalizeText(client.phone).toLowerCase().includes(normalized);
    }) : clients;
    return shortlist.slice(0, 6);
  }, [clients, query]);
  useOutsideClick(containerRef, open ? function () {
    return setOpen(false);
  } : null);
  var handleSelect = function handleSelect(client) {
    var nextValue = (client === null || client === void 0 ? void 0 : client.name) || '';
    setQuery(nextValue);
    _onChange === null || _onChange === void 0 || _onChange(nextValue);
    onSelectClient === null || onSelectClient === void 0 || onSelectClient(client);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative space-y-1",
    ref: containerRef
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, label), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: function onChange(event) {
      setQuery(event.target.value);
      _onChange === null || _onChange === void 0 || _onChange(event.target.value);
      setOpen(true);
    },
    onFocus: function onFocus() {
      return setOpen(true);
    },
    placeholder: placeholder,
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), open && matches.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "absolute z-30 mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl"
  }, matches.map(function (client) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: client.id,
      className: "flex w-full flex-col items-start border-b border-slate-800 px-3 py-2 text-left text-sm text-slate-200 last:border-none hover:bg-slate-800",
      onMouseDown: function onMouseDown(event) {
        return event.preventDefault();
      },
      onClick: function onClick() {
        return handleSelect(client);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, client.name || 'Без имени'), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400"
    }, client.phone || 'Телефон не указан'));
  })));
};
var StatusMenu = function StatusMenu(_ref35) {
  var _ref35$statuses = _ref35.statuses,
    statuses = _ref35$statuses === void 0 ? [] : _ref35$statuses,
    _ref35$hiddenStatuses = _ref35.hiddenStatuses,
    hiddenStatuses = _ref35$hiddenStatuses === void 0 ? [] : _ref35$hiddenStatuses,
    onToggle = _ref35.onToggle,
    onReset = _ref35.onReset;
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open = _useState38[0],
    setOpen = _useState38[1];
  var ref = useRef(null);
  useOutsideClick(ref, open ? function () {
    return setOpen(false);
  } : null);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-center rounded-lg border border-slate-600 px-3 py-2 text-sm text-white sm:w-auto"
  }, "\u0421\u0442\u0430\u0442\u0443\u0441\u044B"), open && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "absolute left-0 z-30 mt-2 w-64 max-w-[calc(100vw-2rem)] space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl sm:left-auto sm:right-0"
  }, statuses.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432"), statuses.map(function (status) {
    return /*#__PURE__*/React.createElement("label", {
      key: status,
      className: "flex items-center gap-2 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !hiddenStatuses.includes(status),
      onChange: function onChange() {
        return onToggle(status);
      }
    }), status);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "text-sm text-indigo-300 hover:text-indigo-100"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435")));
};
var TableToolbar = function TableToolbar(_ref36) {
  var tableId = _ref36.tableId,
    searchTerm = _ref36.searchTerm,
    setSearchTerm = _ref36.setSearchTerm,
    supportsBarberFilter = _ref36.supportsBarberFilter,
    selectedBarber = _ref36.selectedBarber,
    setSelectedBarber = _ref36.setSelectedBarber,
    _ref36$barbers = _ref36.barbers,
    barbers = _ref36$barbers === void 0 ? [] : _ref36$barbers,
    supportsStatusFilter = _ref36.supportsStatusFilter,
    _ref36$statuses = _ref36.statuses,
    statuses = _ref36$statuses === void 0 ? [] : _ref36$statuses,
    _ref36$hiddenStatuses = _ref36.hiddenStatuses,
    hiddenStatuses = _ref36$hiddenStatuses === void 0 ? [] : _ref36$hiddenStatuses,
    toggleStatus = _ref36.toggleStatus,
    resetStatuses = _ref36.resetStatuses,
    _ref36$columns = _ref36.columns,
    columns = _ref36$columns === void 0 ? [] : _ref36$columns,
    _ref36$hiddenColumns = _ref36.hiddenColumns,
    hiddenColumns = _ref36$hiddenColumns === void 0 ? [] : _ref36$hiddenColumns,
    toggleColumn = _ref36.toggleColumn,
    canCreate = _ref36.canCreate,
    onOpenCreate = _ref36.onOpenCreate,
    onRefresh = _ref36.onRefresh,
    showPastAppointments = _ref36.showPastAppointments,
    setShowPastAppointments = _ref36.setShowPastAppointments,
    _ref36$supportsGroupi = _ref36.supportsGrouping,
    supportsGrouping = _ref36$supportsGroupi === void 0 ? false : _ref36$supportsGroupi,
    _ref36$groupByDate = _ref36.groupByDate,
    groupByDate = _ref36$groupByDate === void 0 ? false : _ref36$groupByDate,
    setGroupByDate = _ref36.setGroupByDate;
  var chipClass = function chipClass(active) {
    return classNames('rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition whitespace-nowrap text-center', active ? 'border-indigo-400 bg-indigo-500/10 text-indigo-100' : 'border-slate-700 text-slate-300 hover:border-slate-500');
  };
  var allowManualRefresh = typeof onRefresh === 'function' && !['Appointments', 'Users'].includes(tableId);
  var inlineCreateForMobile = canCreate && typeof onOpenCreate === 'function' && ['Appointments', 'Users'].includes(tableId);
  var showColumnMenu = columns.length > 0 && !['Users', 'Appointments'].includes(tableId);
  var statusControl = supportsStatusFilter ? /*#__PURE__*/React.createElement(StatusMenu, {
    statuses: statuses,
    hiddenStatuses: hiddenStatuses,
    onToggle: toggleStatus,
    onReset: resetStatuses
  }) : null;
  var columnControl = showColumnMenu ? /*#__PURE__*/React.createElement(ColumnMenu, {
    columns: columns,
    hiddenColumns: hiddenColumns,
    onToggle: toggleColumn
  }) : null;
  var pastControl = tableId === 'Appointments' && typeof setShowPastAppointments === 'function' ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setShowPastAppointments(!showPastAppointments);
    },
    className: classNames(chipClass(showPastAppointments), 'w-full sm:w-auto')
  }, "\u041F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435") : null;
  var groupingControl = supportsGrouping && typeof setGroupByDate === 'function' ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setGroupByDate(!groupByDate);
    },
    className: classNames(chipClass(groupByDate), 'w-full sm:w-auto')
  }, "\u041F\u043E \u0434\u043D\u044F\u043C") : null;
  var controlOrder = tableId === 'Appointments' ? [{
    key: 'status',
    node: statusControl
  }, {
    key: 'columns',
    node: columnControl
  }, {
    key: 'past',
    node: pastControl
  }, {
    key: 'group',
    node: groupingControl
  }] : [{
    key: 'status',
    node: statusControl
  }, {
    key: 'past',
    node: pastControl
  }, {
    key: 'group',
    node: groupingControl
  }, {
    key: 'columns',
    node: columnControl
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 rounded-3xl border border-slate-800 bg-slate-950/30 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 sm:flex-row sm:items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full items-stretch gap-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "relative flex-1 min-w-[200px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3.5a5.5 5.5 0 013.995 9.315l3.095 3.095a.75.75 0 11-1.06 1.06l-3.095-3.094A5.5 5.5 0 119 3.5zm0 1.5a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("input", {
    value: searchTerm,
    onChange: function onChange(event) {
      return setSearchTerm(event.target.value);
    },
    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
    "aria-label": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0430\u0431\u043B\u0438\u0446\u0435",
    className: "h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
  })), inlineCreateForMobile && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCreate,
    className: "inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500 sm:hidden"
  }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), supportsBarberFilter && /*#__PURE__*/React.createElement("select", {
    value: selectedBarber,
    onChange: function onChange(event) {
      return setSelectedBarber(event.target.value);
    },
    className: "w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white sm:w-48"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u0412\u0441\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430"), barbers.map(function (barber) {
    return /*#__PURE__*/React.createElement("option", {
      key: barber,
      value: barber
    }, barber);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center"
  }, controlOrder.map(function (control) {
    return control.node ? /*#__PURE__*/React.createElement(Fragment, {
      key: control.key
    }, control.node) : null;
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-end gap-2"
  }, allowManualRefresh && /*#__PURE__*/React.createElement("button", {
    onClick: onRefresh,
    className: "rounded-full border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800 sm:px-5",
    title: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("span", {
    className: "sm:hidden"
  }, "?")), canCreate && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCreate,
    className: classNames('rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500', inlineCreateForMobile ? 'hidden sm:inline-flex' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    className: "sm:hidden"
  }, "+")))));
};
var buildAppointmentGroups = function buildAppointmentGroups() {
  var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sortDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
  var buckets = new Map();
  records.forEach(function (record) {
    var key = record.Date || 'Без даты';
    var bucket = buckets.get(key) || [];
    bucket.push(record);
    buckets.set(key, bucket);
  });
  var compare = sortDirection === 'asc' ? function (a, b) {
    return a - b;
  } : function (a, b) {
    return b - a;
  };
  return Array.from(buckets.entries()).map(function (_ref37) {
    var _getAppointmentStartD6;
    var _ref38 = _slicedToArray(_ref37, 2),
      key = _ref38[0],
      items = _ref38[1];
    var sortedItems = _toConsumableArray(items).sort(function (a, b) {
      var _getAppointmentStartD4, _getAppointmentStartD5;
      var left = ((_getAppointmentStartD4 = getAppointmentStartDate(a.Date, a.Time, a.startDateTime)) === null || _getAppointmentStartD4 === void 0 ? void 0 : _getAppointmentStartD4.getTime()) || Number.MAX_SAFE_INTEGER;
      var right = ((_getAppointmentStartD5 = getAppointmentStartDate(b.Date, b.Time, b.startDateTime)) === null || _getAppointmentStartD5 === void 0 ? void 0 : _getAppointmentStartD5.getTime()) || Number.MAX_SAFE_INTEGER;
      return compare(left, right);
    });
    var reference = sortedItems[0];
    var sortValue = ((_getAppointmentStartD6 = getAppointmentStartDate(reference.Date, reference.Time, reference.startDateTime)) === null || _getAppointmentStartD6 === void 0 ? void 0 : _getAppointmentStartD6.getTime()) || (sortDirection === 'asc' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
    return {
      key: key || "no-date-".concat((reference === null || reference === void 0 ? void 0 : reference.id) || Math.random()),
      label: formatDateHeading(key),
      rows: sortedItems,
      sortValue: sortValue
    };
  }).sort(function (a, b) {
    return compare(a.sortValue, b.sortValue);
  });
};
var resolveSortValue = function resolveSortValue(row, column, tableId) {
  if (!column) return normalizeText(row[column === null || column === void 0 ? void 0 : column.key]).toLowerCase();
  if (tableId === 'Appointments' && column.key === 'Date') {
    var _getAppointmentStartD7;
    return ((_getAppointmentStartD7 = getAppointmentStartDate(row.Date, row.Time, row.startDateTime)) === null || _getAppointmentStartD7 === void 0 ? void 0 : _getAppointmentStartD7.getTime()) || 0;
  }
  if (column.type === 'date') {
    var ts = new Date(row[column.key]).getTime();
    return Number.isNaN(ts) ? 0 : ts;
  }
  if (typeof row[column.key] === 'number') {
    return row[column.key];
  }
  if (column.type === 'boolean') {
    return row[column.key] ? 1 : 0;
  }
  return normalizeText(row[column.key]).toLowerCase();
};
var SortIndicator = function SortIndicator(_ref39) {
  var direction = _ref39.direction;
  return /*#__PURE__*/React.createElement("span", {
    className: "flex flex-col leading-[6px]"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className: classNames('h-3 w-3 text-slate-600', direction === 'asc' && 'text-indigo-300')
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10l4-4 4 4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className: classNames('h-3 w-3 -mt-0.5 text-slate-600', direction === 'desc' && 'text-indigo-300')
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var SchedulesBoard = function SchedulesBoard(_ref40) {
  var _ref40$rows = _ref40.rows,
    rows = _ref40$rows === void 0 ? [] : _ref40$rows,
    _ref40$columns = _ref40.columns,
    columns = _ref40$columns === void 0 ? [] : _ref40$columns,
    onUpdate = _ref40.onUpdate,
    options = _ref40.options;
  var visibleKeys = useMemo(function () {
    return new Set(columns.map(function (column) {
      return column.key;
    }));
  }, [columns]);
  var editableColumns = useMemo(function () {
    return columns.filter(function (column) {
      return column.editable;
    });
  }, [columns]);
  var groupedByDate = useMemo(function () {
    if (!rows.length) return [];
    var buckets = new Map();
    rows.forEach(function (slot) {
      var key = slot.Date || slot.DayOfWeek || "barber-".concat(slot.Barber || 'no-barber');
      var next = buckets.get(key) || [];
      next.push(slot);
      buckets.set(key, next);
    });
    return Array.from(buckets.entries()).map(function (_ref41) {
      var _ref42 = _slicedToArray(_ref41, 2),
        key = _ref42[0],
        slots = _ref42[1];
      var sortedSlots = _toConsumableArray(slots).sort(function (a, b) {
        return normalizeText(a.Week).localeCompare(normalizeText(b.Week));
      });
      var reference = sortedSlots[0] || {};
      var timestamp = key && !key.startsWith('barber-') ? new Date(key).getTime() : Number.NaN;
      return {
        key: key,
        title: key && !key.startsWith('barber-') ? formatDateHeading(key) : reference.DayOfWeek || 'Без даты',
        badge: key && !key.startsWith('barber-') ? formatDateBadgeLabel(key) : reference.DayOfWeek || '—',
        sortValue: Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER,
        slots: sortedSlots
      };
    }).sort(function (a, b) {
      return a.sortValue - b.sortValue;
    });
  }, [rows]);
  if (!groupedByDate.length) {
    return /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0443\u0441\u0442\u043E.");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, groupedByDate.map(function (group) {
    return /*#__PURE__*/React.createElement("section", {
      key: group.key,
      className: "space-y-2 rounded-2xl border border-slate-800/80 bg-slate-950/30 p-4 shadow-inner shadow-black/10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] uppercase tracking-[0.4em] text-slate-500"
    }, group.badge), /*#__PURE__*/React.createElement("p", {
      className: "text-base font-semibold text-white"
    }, group.title)), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-300"
    }, group.slots.length, " ", pluralize(group.slots.length, ['слот', 'слота', 'слотов']))), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-2 md:grid-cols-2 xl:grid-cols-3"
    }, group.slots.map(function (slot) {
      return /*#__PURE__*/React.createElement("article", {
        key: slot.id || "".concat(slot.Barber || 'no-barber', "-").concat(slot.Date || slot.DayOfWeek || slot.Week),
        className: "rounded-2xl border border-slate-800/70 bg-slate-950/50 p-3 text-sm text-slate-200"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between gap-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-[11px] uppercase tracking-[0.3em] text-slate-500"
      }, slot.DayOfWeek || 'День не указан'), /*#__PURE__*/React.createElement("p", {
        className: "text-base font-semibold text-white"
      }, slot.Barber || 'Не назначен')), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-lg font-semibold text-white"
      }, slot.Week || '-'), /*#__PURE__*/React.createElement("p", {
        className: "text-[11px] uppercase tracking-wide text-slate-500"
      }, slot.Date ? formatDate(slot.Date) : 'Без даты'))), editableColumns.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 grid gap-2 text-xs text-slate-400"
      }, editableColumns.map(function (column) {
        return /*#__PURE__*/React.createElement("div", {
          key: "".concat(slot.id || slot.Date, "-").concat(column.key),
          className: "flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/60 px-2 py-1.5"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-[10px] uppercase tracking-[0.3em] text-slate-500"
        }, column.label), /*#__PURE__*/React.createElement(EditableCell, {
          record: slot,
          column: column,
          options: options,
          onUpdate: onUpdate,
          tableId: "Schedules"
        }));
      })));
    })));
  }));
};
var AppointmentsList = function AppointmentsList(_ref43) {
  var _ref43$groups = _ref43.groups,
    groups = _ref43$groups === void 0 ? [] : _ref43$groups,
    onOpen = _ref43.onOpen,
    _ref43$columns = _ref43.columns,
    columns = _ref43$columns === void 0 ? [] : _ref43$columns,
    _ref43$hiddenColumns = _ref43.hiddenColumns,
    hiddenColumns = _ref43$hiddenColumns === void 0 ? [] : _ref43$hiddenColumns;
  if (!groups.length) {
    return /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.");
  }
  var visibleColumns = useMemo(function () {
    return columns.filter(function (column) {
      return !hiddenColumns.includes(column.key);
    });
  }, [columns, hiddenColumns]);
  var renderColumnValue = function renderColumnValue(record, column) {
    var value = record[column.key];
    switch (column.key) {
      case 'Date':
        return formatDate(value) || '—';
      case 'Time':
        {
          var _parseTimeRangeParts3 = parseTimeRangeParts(value),
            start = _parseTimeRangeParts3.start,
            end = _parseTimeRangeParts3.end;
          return [start || value || '-', end ? "\u0434\u043E ".concat(end) : ''].filter(Boolean).join(' ');
        }
      case 'Status':
        return normalizeStatusValue(value) || '—';
      case 'Services':
        {
          var items = parseMultiValue(value);
          return items.length ? items.join(', ') : '—';
        }
      case 'Phone':
        return value ? formatPhoneInput(value) : '—';
      case 'Reminder2hClientSent':
      case 'Reminder2hBarberSent':
        return value === 'true' || value === true || value === 1 ? 'Отправлено' : '—';
      default:
        return value || '—';
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, groups.map(function (group) {
    return /*#__PURE__*/React.createElement("section", {
      key: group.key,
      className: "space-y-3"
    }, group.label && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    }), group.label, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-3 lg:grid-cols-2"
    }, group.rows.map(function (record) {
      var key = getRecordId(record) || "".concat(group.key, "-").concat(record.CustomerName, "-").concat(record.Time);
      var statusLabel = normalizeStatusValue(record.Status) || '-';
      var _parseTimeRangeParts4 = parseTimeRangeParts(record.Time),
        start = _parseTimeRangeParts4.start,
        end = _parseTimeRangeParts4.end;
      var servicesList = parseMultiValue(record.Services);
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        key: key,
        onClick: function onClick() {
          return onOpen === null || onOpen === void 0 ? void 0 : onOpen(record, {
            allowDelete: true
          });
        },
        className: "flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-3 text-left transition hover:border-indigo-500/70 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 sm:p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/70 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-[11px] uppercase tracking-[0.3em] text-slate-500"
      }, formatDateBadgeLabel(record.Date)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-baseline gap-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-2xl font-semibold text-white sm:text-3xl"
      }, start || record.Time || '-'), end && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u0434\u043E ", end))), /*#__PURE__*/React.createElement("div", {
        className: "text-right space-y-1"
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide', getStatusBadgeClasses(statusLabel))
      }, statusLabel), record.Barber && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400"
      }, record.Barber))), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 flex flex-col gap-3 text-[13px] text-slate-300 sm:text-sm"
      }, visibleColumns.length > 0 ? /*#__PURE__*/React.createElement("div", {
        className: "grid gap-2"
      }, visibleColumns.map(function (column) {
        return /*#__PURE__*/React.createElement("div", {
          key: "".concat(key, "-").concat(column.key),
          className: "flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-950/50 px-2 py-1.5"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-[10px] uppercase tracking-[0.3em] text-slate-500"
        }, column.label), /*#__PURE__*/React.createElement("p", {
          className: "text-right text-slate-200"
        }, renderColumnValue(record, column)));
      })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        className: "text-base font-semibold text-white sm:text-lg"
      }, record.CustomerName || 'Без имени'), servicesList.length ? /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-2"
      }, servicesList.slice(0, 3).map(function (service, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: "".concat(service, "-").concat(index),
          className: "rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5 text-[11px] text-slate-200 sm:text-xs"
        }, service);
      }), servicesList.length > 3 && /*#__PURE__*/React.createElement("span", {
        className: "text-[11px] text-slate-500"
      }, "+", servicesList.length - 3)) : /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-500"
      }, "\u0423\u0441\u043B\u0443\u0433\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u044B"))));
    })));
  }));
};
var DataTable = function DataTable(_ref44) {
  var tableId = _ref44.tableId,
    rows = _ref44.rows,
    columns = _ref44.columns,
    hiddenColumns = _ref44.hiddenColumns,
    sortConfig = _ref44.sortConfig,
    onSort = _ref44.onSort,
    onUpdate = _ref44.onUpdate,
    onDelete = _ref44.onDelete,
    options = _ref44.options,
    onOpenProfile = _ref44.onOpenProfile,
    onOpenAppointment = _ref44.onOpenAppointment,
    _ref44$groupByDate = _ref44.groupByDate,
    groupByDate = _ref44$groupByDate === void 0 ? true : _ref44$groupByDate;
  if (!rows.length) {
    return /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439.");
  }
  var visibleColumns = columns.filter(function (column) {
    return !hiddenColumns.includes(column.key);
  });
  var isAppointmentsTable = tableId === 'Appointments';
  var canGroupAppointments = isAppointmentsTable && groupByDate && (!sortConfig || sortConfig.key === 'Date');
  var groupedRows = isAppointmentsTable ? canGroupAppointments ? buildAppointmentGroups(rows, (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.direction) || 'desc') : [{
    key: 'default',
    label: null,
    rows: rows
  }] : [{
    key: 'default',
    label: null,
    rows: rows
  }];
  if (isAppointmentsTable) {
    return /*#__PURE__*/React.createElement(AppointmentsList, {
      groups: groupedRows,
      onOpen: onOpenAppointment
    });
  }
  if (tableId === 'Schedules') {
    return /*#__PURE__*/React.createElement(SchedulesBoard, {
      rows: rows,
      columns: visibleColumns,
      onUpdate: onUpdate,
      options: options
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
  }, rows.map(function (record, index) {
    var _visibleColumns$;
    var recordId = getRecordId(record);
    var cardKey = recordId || "".concat(tableId, "-card-").concat(index);
    return /*#__PURE__*/React.createElement("article", {
      key: cardKey,
      className: "space-y-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-black/10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] uppercase tracking-[0.2em] text-slate-500"
    }, tableId === 'Users' ? 'Клиент' : tableId === 'Schedules' ? 'Расписание' : 'Запись'), /*#__PURE__*/React.createElement("p", {
      className: "text-base font-semibold text-white"
    }, record[(_visibleColumns$ = visibleColumns[0]) === null || _visibleColumns$ === void 0 ? void 0 : _visibleColumns$.key] || '-')), onDelete && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(record);
      },
      className: "rounded-full border border-rose-600/70 p-2 text-rose-200 hover:bg-rose-500/10",
      "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"
    }, /*#__PURE__*/React.createElement(IconTrash, {
      className: "h-4 w-4"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-3"
    }, visibleColumns.map(function (column) {
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(cardKey, "-").concat(column.key),
        className: "space-y-1 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-[11px] uppercase tracking-[0.2em] text-slate-500"
      }, column.label), /*#__PURE__*/React.createElement(EditableCell, {
        record: record,
        column: column,
        options: options,
        onUpdate: onUpdate,
        onOpenProfile: onOpenProfile,
        tableId: tableId
      }));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden 2xl:block -mx-4 overflow-x-auto overflow-y-visible pb-3 sm:mx-0"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-[760px] w-full table-auto text-[13px] leading-tight sm:text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "text-left text-[11px] uppercase tracking-[0.25em] text-slate-400"
  }, visibleColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      key: column.key,
      className: classNames('px-2 py-1.5 whitespace-nowrap', column.align === 'center' && 'text-center', column.minWidth),
      onClick: function onClick() {
        return column.sortable !== false && onSort(column.key);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')
    }, column.label, column.sortable !== false && /*#__PURE__*/React.createElement(SortIndicator, {
      direction: (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.key) === column.key ? sortConfig.direction : null
    })));
  }), onDelete && /*#__PURE__*/React.createElement("th", {
    className: "px-2 py-1.5 text-right",
    "aria-label": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
  }))), /*#__PURE__*/React.createElement("tbody", null, groupedRows.map(function (group) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: group.key
    }, group.label && /*#__PURE__*/React.createElement("tr", {
      className: "bg-transparent"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: visibleColumns.length + (onDelete ? 1 : 0),
      className: "px-2 py-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    }), group.label, /*#__PURE__*/React.createElement("span", {
      className: "h-px flex-1 bg-slate-700"
    })))), group.rows.map(function (record) {
      return /*#__PURE__*/React.createElement("tr", {
        key: getRecordId(record),
        className: "border-t border-slate-800"
      }, visibleColumns.map(function (column) {
        return /*#__PURE__*/React.createElement("td", {
          key: column.key,
          className: classNames('px-2 py-1.5 align-top text-[13px] leading-snug sm:text-sm', column.align === 'center' && 'text-center', column.noWrap ? 'whitespace-nowrap' : 'whitespace-normal break-words')
        }, /*#__PURE__*/React.createElement(EditableCell, {
          record: record,
          column: column,
          options: options,
          onUpdate: onUpdate,
          onOpenProfile: onOpenProfile,
          tableId: tableId
        }));
      }), onDelete && /*#__PURE__*/React.createElement("td", {
        className: "px-2 py-1.5 text-right"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return onDelete(record);
        },
        className: "inline-flex items-center rounded-lg border border-rose-500 px-2 py-1.5 text-xs text-rose-300 hover:bg-rose-500/10",
        "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"
      }, /*#__PURE__*/React.createElement(IconTrash, null))));
    }));
  })))));
};
var ClientsList = function ClientsList(_ref45) {
  var _modalState$record;
  var _ref45$clients = _ref45.clients,
    clients = _ref45$clients === void 0 ? [] : _ref45$clients,
    _ref45$barbers = _ref45.barbers,
    barbers = _ref45$barbers === void 0 ? [] : _ref45$barbers,
    onUpdate = _ref45.onUpdate,
    onDelete = _ref45.onDelete,
    fetchHistory = _ref45.fetchHistory,
    onRequestConfirm = _ref45.onRequestConfirm;
  var _useState39 = useState({
      open: false,
      record: null,
      history: [],
      loading: false,
      error: ''
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    modalState = _useState40[0],
    setModalState = _useState40[1];
  var barberOptions = useMemo(function () {
    return Array.isArray(barbers) ? barbers.filter(Boolean) : [];
  }, [barbers]);
  var openClientModal = /*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(client) {
      var profile, history, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (client) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setModalState({
              open: true,
              record: _objectSpread({}, client),
              history: [],
              loading: true,
              error: ''
            });
            _context4.p = 2;
            if (!(fetchHistory && client.Name)) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return fetchHistory(client);
          case 3:
            profile = _context4.v;
            history = buildVisitHistory((profile === null || profile === void 0 ? void 0 : profile.appointments) || []);
            setModalState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                history: history,
                loading: false
              });
            });
            _context4.n = 5;
            break;
          case 4:
            setModalState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                loading: false,
                history: []
              });
            });
          case 5:
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t2 = _context4.v;
            setModalState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                loading: false,
                error: _t2.message || 'Не удалось загрузить историю'
              });
            });
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 6]]);
    }));
    return function openClientModal(_x3) {
      return _ref46.apply(this, arguments);
    };
  }();
  var closeClientModal = function closeClientModal() {
    return setModalState({
      open: false,
      record: null,
      history: [],
      loading: false,
      error: ''
    });
  };
  var handleFieldChange = function handleFieldChange(field, value) {
    setModalState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        record: _objectSpread(_objectSpread({}, prev.record), {}, _defineProperty({}, field, value))
      });
    });
  };
  var handleSave = function handleSave() {
    if (!modalState.record || typeof onUpdate !== 'function') return;
    var recordId = getRecordId(modalState.record);
    if (!recordId) return;
    var payload = {
      Name: modalState.record.Name,
      Phone: modalState.record.Phone,
      TelegramID: modalState.record.TelegramID,
      Barber: modalState.record.Barber
    };
    onUpdate(recordId, payload);
    closeClientModal();
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var confirmed;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!(!modalState.record || typeof onDelete !== 'function')) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            _context5.n = 2;
            return onRequestConfirm === null || onRequestConfirm === void 0 ? void 0 : onRequestConfirm({
              title: 'Удалить клиента?',
              message: "\u041A\u043B\u0438\u0435\u043D\u0442 \xAB".concat(modalState.record.Name || 'Без имени', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context5.v;
            if (!(onRequestConfirm && !confirmed)) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2);
          case 3:
            _context5.n = 4;
            return onDelete(modalState.record, {
              skipConfirm: true
            });
          case 4:
            closeClientModal();
          case 5:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function handleDelete() {
      return _ref47.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, clients.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u0443\u0441\u0442.") : /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border border-slate-800 bg-slate-950/40 shadow-inner shadow-black/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-slate-900"
  }, clients.map(function (client, index) {
    var clientNumber = String(index + 1).padStart(2, '0');
    var phoneDisplay = client.Phone ? formatPhoneInput(client.Phone) : '';
    var telegramHandle = formatTelegramHandle(client.TelegramID);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: client.id,
      onClick: function onClick() {
        return openClientModal(client);
      },
      className: "flex w-full flex-col gap-2 px-4 py-3 text-left transition hover:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-indigo-300"
    }, clientNumber), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-1 flex-col gap-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-start justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-base font-semibold text-white"
    }, client.Name || 'Нет имени'), client.Barber && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400"
    }, "\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0431\u0430\u0440\u0431\u0435\u0440: ", client.Barber)), /*#__PURE__*/React.createElement("div", {
      className: "hidden text-right text-sm text-slate-300 sm:block"
    }, phoneDisplay && /*#__PURE__*/React.createElement("p", null, phoneDisplay), telegramHandle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, telegramHandle))))));
  }))), /*#__PURE__*/React.createElement(Modal, {
    title: ((_modalState$record = modalState.record) === null || _modalState$record === void 0 ? void 0 : _modalState$record.Name) || 'Клиент',
    isOpen: modalState.open,
    onClose: closeClientModal,
    maxWidthClass: "max-w-3xl",
    footer: /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap justify-end gap-3"
    }, modalState.record && /*#__PURE__*/React.createElement("button", {
      onClick: handleDelete,
      className: "rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: closeClientModal,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSave,
      className: "rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))
  }, !modalState.record ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "space-y-1 text-sm text-slate-300"
  }, "\u0418\u043C\u044F", /*#__PURE__*/React.createElement("input", {
    value: modalState.record.Name || '',
    onChange: function onChange(event) {
      return handleFieldChange('Name', event.target.value);
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("label", {
    className: "space-y-1 text-sm text-slate-300"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", /*#__PURE__*/React.createElement("input", {
    value: modalState.record.Phone || '',
    onChange: function onChange(event) {
      return handleFieldChange('Phone', event.target.value);
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("label", {
    className: "space-y-1 text-sm text-slate-300"
  }, "Telegram ID", /*#__PURE__*/React.createElement("input", {
    value: modalState.record.TelegramID || '',
    onChange: function onChange(event) {
      return handleFieldChange('TelegramID', event.target.value);
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("label", {
    className: "space-y-1 text-sm text-slate-300"
  }, "\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0431\u0430\u0440\u0431\u0435\u0440", /*#__PURE__*/React.createElement("select", {
    value: modalState.record.Barber || '',
    onChange: function onChange(event) {
      return handleFieldChange('Barber', event.target.value);
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"), barberOptions.map(function (barber) {
    return /*#__PURE__*/React.createElement("option", {
      key: barber,
      value: barber
    }, barber);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-400"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0437\u0438\u0442\u043E\u0432"), /*#__PURE__*/React.createElement(VisitHistoryList, {
    visits: modalState.history,
    loading: modalState.loading,
    error: modalState.error,
    emptyMessage: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u043F\u0443\u0441\u0442\u0430.",
    maxHeightClass: "max-h-56"
  })))));
};
var CreateRecordModal = function CreateRecordModal(_ref48) {
  var isOpen = _ref48.isOpen,
    onClose = _ref48.onClose,
    onSave = _ref48.onSave,
    columns = _ref48.columns,
    tableName = _ref48.tableName,
    options = _ref48.options,
    tableId = _ref48.tableId,
    _ref48$clients = _ref48.clients,
    clients = _ref48$clients === void 0 ? [] : _ref48$clients,
    _ref48$hiddenFields = _ref48.hiddenFields,
    hiddenFields = _ref48$hiddenFields === void 0 ? [] : _ref48$hiddenFields;
  var editableColumns = useMemo(function () {
    return columns.filter(function (column) {
      return column.editable !== false;
    });
  }, [columns]);
  var visibleColumns = useMemo(function () {
    return editableColumns.filter(function (column) {
      return !hiddenFields.includes(column.key);
    });
  }, [editableColumns, hiddenFields]);
  var initialState = useMemo(function () {
    var payload = {};
    editableColumns.forEach(function (column) {
      payload[column.key] = column.type === 'multi-select' ? [] : '';
    });
    return payload;
  }, [editableColumns]);
  var _useState41 = useState(initialState),
    _useState42 = _slicedToArray(_useState41, 2),
    draft = _useState42[0],
    setDraft = _useState42[1];
  var isAppointmentsCreate = tableId === 'Appointments';
  useEffect(function () {
    if (isOpen) setDraft(initialState);
  }, [isOpen, initialState]);
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var payload = {};
    Object.entries(draft).forEach(function (_ref49) {
      var _ref50 = _slicedToArray(_ref49, 2),
        key = _ref50[0],
        value = _ref50[1];
      payload[key] = Array.isArray(value) ? value.join(', ') : value;
    });
    onSave(payload);
  };
  var handleClientAutoFill = function handleClientAutoFill(client) {
    if (!client) return;
    setDraft(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        CustomerName: client.name || prev.CustomerName,
        Phone: client.phone || prev.Phone,
        Barber: prev.Barber || client.preferredBarber || '',
        UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || ''
      });
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C: ".concat(tableName),
    isOpen: isOpen,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-white"
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSubmit,
      className: "rounded-lg bg-emerald-600 px-4 py-2 text-white"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))
  }, /*#__PURE__*/React.createElement("form", {
    className: "space-y-4"
  }, visibleColumns.map(function (column) {
    var value = draft[column.key];
    if (isAppointmentsCreate && column.key === 'CustomerName') {
      return /*#__PURE__*/React.createElement(ClientLookupInput, {
        key: column.key,
        label: column.label,
        value: value || '',
        onChange: function onChange(nextValue) {
          return setDraft(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              CustomerName: nextValue
            });
          });
        },
        clients: clients,
        onSelectClient: handleClientAutoFill
      });
    }
    if (column.type === 'select') {
      return /*#__PURE__*/React.createElement("div", {
        key: column.key,
        className: "space-y-1"
      }, /*#__PURE__*/React.createElement("label", {
        className: "text-sm text-slate-300"
      }, column.label), /*#__PURE__*/React.createElement("select", {
        value: value || '',
        onChange: function onChange(event) {
          return setDraft(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, column.key, event.target.value));
          });
        },
        className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "-"), (options[column.optionsKey] || []).map(function (option) {
        return /*#__PURE__*/React.createElement("option", {
          key: option,
          value: option
        }, option);
      })));
    }
    if (column.type === 'multi-select') {
      var selectedValues = Array.isArray(value) ? value : parseMultiValue(value);
      return /*#__PURE__*/React.createElement(MultiSelectCheckboxes, {
        key: column.key,
        label: column.label,
        options: options[column.optionsKey] || [],
        value: selectedValues,
        onChange: function onChange(selected) {
          return setDraft(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, column.key, selected));
          });
        },
        placeholder: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
      });
    }
    if (column.key === 'Time' || column.key === 'Week') {
      return /*#__PURE__*/React.createElement("div", {
        key: column.key,
        className: "space-y-1"
      }, /*#__PURE__*/React.createElement("label", {
        className: "text-sm text-slate-300"
      }, column.label), /*#__PURE__*/React.createElement(TimeRangePicker, {
        value: value || '',
        onChange: function onChange(nextValue) {
          return setDraft(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, column.key, nextValue));
          });
        },
        placeholder: column.key === 'Week' ? '—' : 'Нажмите, чтобы выбрать',
        title: column.key === 'Week' ? 'Редактирование слотов' : 'Выбор времени'
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: column.key,
      className: "space-y-1"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-sm text-slate-300"
    }, column.label), /*#__PURE__*/React.createElement("input", {
      type: column.type === 'date' ? 'date' : 'text',
      value: value || '',
      onChange: function onChange(event) {
        return setDraft(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, column.key, event.target.value));
        });
      },
      className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    }));
  })));
};
var ProfileModal = function ProfileModal(_ref51) {
  var _state$data, _state$data2, _state$data3, _state$data4;
  var state = _ref51.state,
    onClose = _ref51.onClose;
  var appointments = ((_state$data = state.data) === null || _state$data === void 0 ? void 0 : _state$data.appointments) || [];
  var visitHistory = useMemo(function () {
    return buildVisitHistory(appointments);
  }, [appointments]);
  var user = ((_state$data2 = state.data) === null || _state$data2 === void 0 ? void 0 : _state$data2.user) || null;
  var phoneLabel = user !== null && user !== void 0 && user.Phone ? formatPhoneInput(user.Phone) : '';
  var phoneHref = phoneLabel ? "tel:".concat(phoneLabel.replace(/[^\d+]/g, '')) : '';
  var telegramHandle = user !== null && user !== void 0 && user.TelegramID ? formatTelegramHandle(user.TelegramID) : '';
  var telegramHref = user !== null && user !== void 0 && user.TelegramID ? buildTelegramLink(user.TelegramID) : '';
  return /*#__PURE__*/React.createElement(Modal, {
    title: ((_state$data3 = state.data) === null || _state$data3 === void 0 || (_state$data3 = _state$data3.user) === null || _state$data3 === void 0 ? void 0 : _state$data3.Name) || 'Профиль клиента',
    isOpen: state.open,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-white"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
  }, state.loading && /*#__PURE__*/React.createElement(LoadingState, {
    label: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044C..."
  }), !state.loading && ((_state$data4 = state.data) === null || _state$data4 === void 0 ? void 0 : _state$data4.error) && /*#__PURE__*/React.createElement(ErrorBanner, {
    message: state.data.error
  }), !state.loading && user && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 text-sm text-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"), ' ', phoneLabel && phoneHref ? /*#__PURE__*/React.createElement("a", {
    href: phoneHref,
    className: "text-indigo-300 hover:text-indigo-100"
  }, phoneLabel) : '—'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "Telegram:"), ' ', telegramHandle && telegramHref ? /*#__PURE__*/React.createElement("a", {
    href: telegramHref,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-300 hover:text-indigo-100"
  }, telegramHandle) : '—'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0431\u0430\u0440\u0431\u0435\u0440:"), " ", user.Barber || '—')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-400"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0437\u0438\u0442\u043E\u0432"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(VisitHistoryList, {
    visits: visitHistory,
    emptyMessage: "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u043E\u0434 \u043D\u0435\u0442."
  })))));
};
var BackupsPanel = function BackupsPanel(_ref52) {
  var _ref52$backups = _ref52.backups,
    backups = _ref52$backups === void 0 ? [] : _ref52$backups,
    onRestore = _ref52.onRestore,
    onCreate = _ref52.onCreate,
    onDelete = _ref52.onDelete;
  return /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0435 \u043A\u043E\u043F\u0438\u0438",
    actions: /*#__PURE__*/React.createElement("button", {
      onClick: onCreate,
      className: "rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500"
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E")
  }, backups.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0443\u0441\u0442\u0430.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, backups.map(function (backup) {
    var label = formatBackupLabel(backup);
    return /*#__PURE__*/React.createElement("div", {
      key: backup,
      className: "flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-white"
    }, label), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, backup)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onRestore(backup);
      },
      className: "rounded-lg border border-slate-600 px-3 py-1 text-xs font-semibold text-indigo-200 hover:border-indigo-400 hover:text-white"
    }, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"), onDelete && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(backup);
      },
      className: "inline-flex items-center rounded-lg border border-rose-600 px-3 py-1 text-xs font-semibold text-rose-200 hover:bg-rose-500/10"
    }, /*#__PURE__*/React.createElement(IconTrash, {
      className: "mr-1 h-3.5 w-3.5"
    }), "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
  })));
};
var AppointmentModal = function AppointmentModal(_ref53) {
  var open = _ref53.open,
    appointment = _ref53.appointment,
    _ref53$options = _ref53.options,
    options = _ref53$options === void 0 ? {} : _ref53$options,
    onClose = _ref53.onClose,
    onSave = _ref53.onSave,
    onDelete = _ref53.onDelete,
    _ref53$canDelete = _ref53.canDelete,
    canDelete = _ref53$canDelete === void 0 ? false : _ref53$canDelete,
    _ref53$isNew = _ref53.isNew,
    isNew = _ref53$isNew === void 0 ? false : _ref53$isNew,
    _ref53$clients = _ref53.clients,
    clients = _ref53$clients === void 0 ? [] : _ref53$clients;
  var buildDraft = useCallback(function (record) {
    return record ? _objectSpread(_objectSpread({}, record), {}, {
      UserID: record.UserID || record.userId || '',
      Status: normalizeStatusValue(record.Status)
    }) : null;
  }, []);
  var _useState43 = useState(buildDraft(appointment)),
    _useState44 = _slicedToArray(_useState43, 2),
    draft = _useState44[0],
    setDraft = _useState44[1];
  useEffect(function () {
    if (!open) return;
    setDraft(buildDraft(appointment));
  }, [appointment, buildDraft, open]);
  if (!open || !draft) return null;
  var servicesSelection = parseMultiValue(draft.Services);
  var actionButtonClass = 'rounded-lg px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap sm:px-4 sm:py-2 sm:text-sm';
  var handleChange = function handleChange(field, value) {
    return setDraft(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var submitDraft = function submitDraft(nextDraft) {
    if (!nextDraft) return;
    onSave({
      id: nextDraft.id,
      payload: {
        CustomerName: nextDraft.CustomerName,
        Phone: nextDraft.Phone,
        Barber: nextDraft.Barber,
        Date: nextDraft.Date,
        Time: nextDraft.Time,
        Status: normalizeStatusValue(nextDraft.Status),
        Services: nextDraft.Services,
        UserID: nextDraft.UserID || ''
      },
      isNew: isNew
    });
  };
  var handleSubmit = function handleSubmit() {
    return submitDraft(draft);
  };
  var handleMarkCompleted = function handleMarkCompleted() {
    if (!draft) return;
    var nextDraft = _objectSpread(_objectSpread({}, draft), {}, {
      Status: 'Выполнена'
    });
    setDraft(nextDraft);
    submitDraft(nextDraft);
  };
  var handleClientAutoFill = function handleClientAutoFill(client) {
    if (!client) return;
    setDraft(function (prev) {
      if (!prev) return prev;
      return _objectSpread(_objectSpread({}, prev), {}, {
        CustomerName: client.name || prev.CustomerName,
        Phone: client.phone || prev.Phone,
        Barber: prev.Barber || client.preferredBarber || '',
        UserID: client.telegramId || client.TelegramID || client.id || prev.UserID || ''
      });
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: isNew ? 'Новая запись' : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 ".concat(draft.CustomerName || ''),
    isOpen: open,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap justify-end gap-2 sm:gap-3"
    }, !isNew && canDelete && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete === null || onDelete === void 0 ? void 0 : onDelete(draft);
      },
      className: classNames(actionButtonClass, 'border border-rose-600 text-rose-200 hover:bg-rose-500/10')
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: classNames(actionButtonClass, 'border border-slate-600 text-white')
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), !isNew && /*#__PURE__*/React.createElement("button", {
      onClick: handleMarkCompleted,
      className: classNames(actionButtonClass, 'border border-emerald-500 text-emerald-200 hover:bg-emerald-500/10')
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSubmit,
      className: classNames(actionButtonClass, 'bg-emerald-600 text-white hover:bg-emerald-500')
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 mobile-grid-2 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement(ClientLookupInput, {
    label: "\u0418\u043C\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
    value: draft.CustomerName || '',
    onChange: function onChange(nextValue) {
      return handleChange('CustomerName', nextValue);
    },
    clients: clients,
    onSelectClient: handleClientAutoFill
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: draft.Phone || '',
    onChange: function onChange(event) {
      return handleChange('Phone', event.target.value);
    },
    placeholder: "+7...",
    className: "h-11 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
  })), /*#__PURE__*/React.createElement("select", {
    value: draft.Barber || '',
    onChange: function onChange(event) {
      return handleChange('Barber', event.target.value);
    },
    className: "h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0411\u0430\u0440\u0431\u0435\u0440"), (options.barbers || []).map(function (barber) {
    return /*#__PURE__*/React.createElement("option", {
      key: barber,
      value: barber
    }, barber);
  })), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: draft.Date ? String(draft.Date).slice(0, 10) : '',
    onChange: function onChange(event) {
      return handleChange('Date', event.target.value);
    },
    className: "h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
  }), /*#__PURE__*/React.createElement(TimeRangePicker, {
    value: draft.Time || '',
    onChange: function onChange(nextValue) {
      return handleChange('Time', nextValue);
    },
    placeholder: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C"
  }), /*#__PURE__*/React.createElement("select", {
    value: draft.Status || '',
    onChange: function onChange(event) {
      return handleChange('Status', event.target.value);
    },
    className: "h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0421\u0442\u0430\u0442\u0443\u0441"), (options.statuses || []).map(function (status) {
    return /*#__PURE__*/React.createElement("option", {
      key: status,
      value: status
    }, status);
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement(MultiSelectCheckboxes, {
    label: "\u0423\u0441\u043B\u0443\u0433\u0438",
    options: options.services || [],
    value: servicesSelection,
    onChange: function onChange(selected) {
      return handleChange('Services', selected.join(', '));
    },
    placeholder: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433"
  }))));
};
var TablesWorkspace = function TablesWorkspace(_ref54) {
  var _TABLE_CONFIG$activeT;
  var apiRequest = _ref54.apiRequest,
    sharedOptions = _ref54.sharedOptions,
    onOptionsUpdate = _ref54.onOptionsUpdate,
    onOpenProfile = _ref54.onOpenProfile,
    onOpenAppointmentRecord = _ref54.onOpenAppointmentRecord,
    _ref54$clients = _ref54.clients,
    clients = _ref54$clients === void 0 ? [] : _ref54$clients,
    _ref54$currentUser = _ref54.currentUser,
    currentUser = _ref54$currentUser === void 0 ? null : _ref54$currentUser,
    _ref54$liveAppointmen = _ref54.liveAppointments,
    liveAppointments = _ref54$liveAppointmen === void 0 ? null : _ref54$liveAppointmen,
    _ref54$liveUpdatedAt = _ref54.liveUpdatedAt,
    liveUpdatedAt = _ref54$liveUpdatedAt === void 0 ? null : _ref54$liveUpdatedAt,
    _ref54$barbers = _ref54.barbers,
    barbers = _ref54$barbers === void 0 ? [] : _ref54$barbers,
    _ref54$services = _ref54.services,
    services = _ref54$services === void 0 ? [] : _ref54$services,
    onBarberFieldChange = _ref54.onBarberFieldChange,
    onSaveBarber = _ref54.onSaveBarber,
    onAddBarber = _ref54.onAddBarber,
    onDeleteBarber = _ref54.onDeleteBarber,
    onServiceFieldChange = _ref54.onServiceFieldChange,
    onServicePriceChange = _ref54.onServicePriceChange,
    onDeleteService = _ref54.onDeleteService,
    onAddService = _ref54.onAddService,
    onActiveTableChange = _ref54.onActiveTableChange,
    _ref54$preferredTable = _ref54.preferredTable,
    preferredTable = _ref54$preferredTable === void 0 ? null : _ref54$preferredTable,
    onPreferredTableConsumed = _ref54.onPreferredTableConsumed,
    _ref54$onRequestConfi = _ref54.onRequestConfirm,
    onRequestConfirm = _ref54$onRequestConfi === void 0 ? null : _ref54$onRequestConfi;
  var _useLocalStorage = useLocalStorage('tables.active', 'Appointments'),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    activeTable = _useLocalStorage2[0],
    setActiveTable = _useLocalStorage2[1];
  var _useState45 = useState(function () {
      return DATA_TABLES.reduce(function (acc, table) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, table, []));
      }, {});
    }),
    _useState46 = _slicedToArray(_useState45, 2),
    tables = _useState46[0],
    setTables = _useState46[1];
  var _useState47 = useState(sharedOptions || {
      barbers: [],
      services: [],
      statuses: []
    }),
    _useState48 = _slicedToArray(_useState47, 2),
    dropdownOptions = _useState48[0],
    setDropdownOptions = _useState48[1];
  var _useState49 = useState(''),
    _useState50 = _slicedToArray(_useState49, 2),
    tableError = _useState50[0],
    setTableError = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    isFetching = _useState52[0],
    setIsFetching = _useState52[1];
  var _useState53 = useState(''),
    _useState54 = _slicedToArray(_useState53, 2),
    searchTerm = _useState54[0],
    setSearchTerm = _useState54[1];
  var _useLocalStorage3 = useLocalStorage('tables.barberFilter', 'all'),
    _useLocalStorage4 = _slicedToArray(_useLocalStorage3, 2),
    selectedBarber = _useLocalStorage4[0],
    setSelectedBarber = _useLocalStorage4[1];
  var _useLocalStorage5 = useLocalStorage('tables.hiddenStatuses', []),
    _useLocalStorage6 = _slicedToArray(_useLocalStorage5, 2),
    hiddenStatuses = _useLocalStorage6[0],
    setHiddenStatuses = _useLocalStorage6[1];
  var _useLocalStorage7 = useLocalStorage('tables.hiddenColumns', {
      Appointments: ['UserID'],
      Schedules: [],
      Users: []
    }),
    _useLocalStorage8 = _slicedToArray(_useLocalStorage7, 2),
    hiddenColumnsMap = _useLocalStorage8[0],
    setHiddenColumnsMap = _useLocalStorage8[1];
  var _useLocalStorage9 = useLocalStorage('tables.sortConfigs', DATA_TABLES.reduce(function (acc, table) {
      var _TABLE_CONFIG$table;
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, table, ((_TABLE_CONFIG$table = TABLE_CONFIG[table]) === null || _TABLE_CONFIG$table === void 0 ? void 0 : _TABLE_CONFIG$table.defaultSort) || null));
    }, {})),
    _useLocalStorage0 = _slicedToArray(_useLocalStorage9, 2),
    sortConfigs = _useLocalStorage0[0],
    setSortConfigs = _useLocalStorage0[1];
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    createModalOpen = _useState56[0],
    setCreateModalOpen = _useState56[1];
  var _useLocalStorage1 = useLocalStorage('tables.showPastAppointments', true),
    _useLocalStorage10 = _slicedToArray(_useLocalStorage1, 2),
    showPastAppointments = _useLocalStorage10[0],
    setShowPastAppointments = _useLocalStorage10[1];
  var _useLocalStorage11 = useLocalStorage('tables.groupAppointmentsByDate', true),
    _useLocalStorage12 = _slicedToArray(_useLocalStorage11, 2),
    groupAppointmentsByDate = _useLocalStorage12[0],
    setGroupAppointmentsByDate = _useLocalStorage12[1];
  var appointmentTemplate = useMemo(function () {
    return {
      id: null,
      CustomerName: '',
      Phone: '',
      Barber: pickBarberForUser(currentUser, dropdownOptions.barbers || []),
      Date: new Date().toISOString().slice(0, 10),
      Time: '',
      Status: normalizeStatusValue(dropdownOptions.statuses && dropdownOptions.statuses[0] || 'Новая запись'),
      Services: '',
      UserID: ''
    };
  }, [dropdownOptions, currentUser === null || currentUser === void 0 ? void 0 : currentUser.displayName, currentUser === null || currentUser === void 0 ? void 0 : currentUser.username]);
  useEffect(function () {
    if (sharedOptions) {
      setDropdownOptions(_objectSpread(_objectSpread({}, sharedOptions), {}, {
        statuses: normalizeStatusList(sharedOptions.statuses || [])
      }));
    }
  }, [sharedOptions]);
  useEffect(function () {
    if (activeTable === 'Schedules') {
      setActiveTable('Barbers');
      return;
    }
    if (!TABLE_CONFIG[activeTable]) {
      setActiveTable('Appointments');
    }
  }, [activeTable, setActiveTable]);
  useEffect(function () {
    onActiveTableChange === null || onActiveTableChange === void 0 || onActiveTableChange(activeTable);
  }, [activeTable, onActiveTableChange]);
  useEffect(function () {
    if (!preferredTable) return;
    var nextTable = preferredTable === 'Schedules' ? 'Barbers' : preferredTable;
    if (TABLE_ORDER.includes(nextTable)) {
      setActiveTable(nextTable);
    }
    onPreferredTableConsumed === null || onPreferredTableConsumed === void 0 || onPreferredTableConsumed();
  }, [preferredTable, setActiveTable, onPreferredTableConsumed]);
  useEffect(function () {
    setHiddenStatuses(function (prev) {
      var normalized = Array.from(new Set(prev.map(function (status) {
        return normalizeStatusValue(status);
      }).filter(Boolean)));
      if (normalized.length === prev.length && normalized.every(function (value, index) {
        return value === prev[index];
      })) {
        return prev;
      }
      return normalized;
    });
  }, [setHiddenStatuses]);
  var fetchTables = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var responses, nextTables, rawOptions, normalizedOptions, _t3;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          setIsFetching(true);
          setTableError('');
          _context6.p = 1;
          _context6.n = 2;
          return Promise.all([].concat(_toConsumableArray(DATA_TABLES.map(function (table) {
            return apiRequest("/".concat(table));
          })), [apiRequest('/options/appointments')]));
        case 2:
          responses = _context6.v;
          nextTables = {};
          DATA_TABLES.forEach(function (table, index) {
            var records = responses[index] || [];
            nextTables[table] = table === 'Appointments' ? records.map(function (row) {
              return _objectSpread(_objectSpread({}, row), {}, {
                Status: normalizeStatusValue(row.Status)
              });
            }) : records;
          });
          rawOptions = responses[DATA_TABLES.length] || {
            barbers: [],
            services: [],
            statuses: []
          };
          normalizedOptions = _objectSpread(_objectSpread({}, rawOptions), {}, {
            statuses: normalizeStatusList(rawOptions.statuses || [])
          });
          setTables(nextTables);
          setDropdownOptions(normalizedOptions);
          onOptionsUpdate === null || onOptionsUpdate === void 0 || onOptionsUpdate(normalizedOptions);
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t3 = _context6.v;
          console.error('Table fetch failed', _t3);
          setTableError(_t3.message || 'Не удалось загрузить таблицы');
        case 4:
          _context6.p = 4;
          setIsFetching(false);
          return _context6.f(4);
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3, 4, 5]]);
  })), [apiRequest, onOptionsUpdate]);
  useEffect(function () {
    fetchTables();
  }, [fetchTables]);
  useEffect(function () {
    if (!Array.isArray(liveAppointments)) return;
    setTables(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        Appointments: liveAppointments.map(function (row) {
          return _objectSpread(_objectSpread({}, row), {}, {
            Status: normalizeStatusValue(row.Status)
          });
        })
      });
    });
  }, [liveAppointments, liveUpdatedAt]);
  var currentColumns = TABLE_COLUMNS[activeTable] || [];
  var hiddenColumns = hiddenColumnsMap[activeTable] || [];
  var visibleColumns = currentColumns.filter(function (column) {
    return !hiddenColumns.includes(column.key);
  });
  var sortConfig = sortConfigs[activeTable] || ((_TABLE_CONFIG$activeT = TABLE_CONFIG[activeTable]) === null || _TABLE_CONFIG$activeT === void 0 ? void 0 : _TABLE_CONFIG$activeT.defaultSort) || null;
  var processedRows = useMemo(function () {
    var _TABLE_CONFIG$activeT2;
    var source = tables[activeTable] || [];
    if (!source.length) return [];
    var rows = _toConsumableArray(source);
    if ((_TABLE_CONFIG$activeT2 = TABLE_CONFIG[activeTable]) !== null && _TABLE_CONFIG$activeT2 !== void 0 && _TABLE_CONFIG$activeT2.supportsBarberFilter && selectedBarber !== 'all') {
      rows = rows.filter(function (row) {
        return normalizeText(row.Barber).toLowerCase() === normalizeText(selectedBarber).toLowerCase();
      });
    }
    if (activeTable === 'Appointments') {
      var nowTs = Date.now();
      rows = rows.filter(function (row) {
        if (hiddenStatuses.length && hiddenStatuses.includes(row.Status)) return false;
        if (showPastAppointments) return true;
        return shouldDisplayAppointment(row, nowTs);
      });
    }
    if (searchTerm.trim()) {
      var query = searchTerm.trim().toLowerCase();
      rows = rows.filter(function (row) {
        return visibleColumns.some(function (column) {
          return normalizeText(row[column.key]).toLowerCase().includes(query);
        });
      });
    }
    if (sortConfig !== null && sortConfig !== void 0 && sortConfig.key) {
      var columnDef = currentColumns.find(function (column) {
        return column.key === sortConfig.key;
      });
      rows.sort(function (a, b) {
        var left = resolveSortValue(a, columnDef, activeTable);
        var right = resolveSortValue(b, columnDef, activeTable);
        if (left === right) return 0;
        if (typeof left === 'number' && typeof right === 'number') {
          return sortConfig.direction === 'asc' ? left - right : right - left;
        }
        return sortConfig.direction === 'asc' ? left > right ? 1 : -1 : left > right ? -1 : 1;
      });
    }
    return rows;
  }, [tables, activeTable, selectedBarber, hiddenStatuses, searchTerm, visibleColumns, sortConfig, showPastAppointments]);
  var handleSort = function handleSort(columnKey) {
    setSortConfigs(function (prev) {
      var current = prev[activeTable];
      var direction = (current === null || current === void 0 ? void 0 : current.key) === columnKey && current.direction === 'asc' ? 'desc' : 'asc';
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, activeTable, {
        key: columnKey,
        direction: direction
      }));
    });
  };
  var toggleColumn = function toggleColumn(columnKey) {
    setHiddenColumnsMap(function (prev) {
      var hidden = new Set(prev[activeTable] || []);
      if (hidden.has(columnKey)) {
        hidden["delete"](columnKey);
      } else if (hidden.size < currentColumns.length - 1) {
        hidden.add(columnKey);
      }
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, activeTable, Array.from(hidden)));
    });
  };
  var toggleStatus = function toggleStatus(status) {
    var normalized = normalizeStatusValue(status);
    setHiddenStatuses(function (prev) {
      return prev.includes(normalized) ? prev.filter(function (item) {
        return item !== normalized;
      }) : [].concat(_toConsumableArray(prev), [normalized]);
    });
  };
  var handleUpdate = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(recordId, data) {
      var _ref57,
        overrideTableId,
        tableId,
        normalizedData,
        original,
        payload,
        _args7 = arguments,
        _t4;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _ref57 = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {}, overrideTableId = _ref57.tableId;
            if (recordId) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            tableId = overrideTableId || activeTable;
            normalizedData = tableId === 'Appointments' && (data === null || data === void 0 ? void 0 : data.Status) !== undefined ? _objectSpread(_objectSpread({}, data), {}, {
              Status: normalizeStatusValue(data.Status)
            }) : data;
            original = tables[tableId] || [];
            setTables(function (prev) {
              var list = prev[tableId] || [];
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, list.map(function (row) {
                return getRecordId(row) === recordId ? _objectSpread(_objectSpread({}, row), normalizedData) : row;
              })));
            });
            _context7.p = 2;
            payload = tableId === 'Schedules' ? _objectSpread(_objectSpread({}, original.find(function (row) {
              return getRecordId(row) === recordId;
            }) || {}), normalizedData) : normalizedData;
            _context7.n = 3;
            return apiRequest("/".concat(tableId, "/").concat(encodeURIComponent(recordId)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 3:
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t4 = _context7.v;
            console.error('Update failed', _t4);
            setTableError(_t4.message || 'Не удалось обновить запись');
            setTables(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, original));
            });
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 4]]);
    }));
    return function handleUpdate(_x4, _x5) {
      return _ref56.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(record) {
      var _ref59,
        _ref59$skipConfirm,
        skipConfirm,
        tableId,
        confirmCopy,
        confirmed,
        original,
        _args8 = arguments,
        _t5,
        _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _ref59 = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {}, _ref59$skipConfirm = _ref59.skipConfirm, skipConfirm = _ref59$skipConfirm === void 0 ? false : _ref59$skipConfirm;
            if (!(!record || activeTable === 'Schedules')) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            tableId = activeTable;
            confirmCopy = function () {
              switch (tableId) {
                case 'Users':
                  return {
                    title: 'Удалить клиента?',
                    message: 'Клиент будет удален без возможности восстановления.'
                  };
                case 'Appointments':
                  return {
                    title: 'Удалить запись?',
                    message: 'Запись будет удалена без возможности восстановления.'
                  };
                default:
                  return {
                    title: 'Удалить запись?',
                    message: 'Запись будет удалена.'
                  };
              }
            }();
            if (skipConfirm) {
              _context8.n = 5;
              break;
            }
            if (!onRequestConfirm) {
              _context8.n = 3;
              break;
            }
            _context8.n = 2;
            return onRequestConfirm(_objectSpread(_objectSpread({}, confirmCopy), {}, {
              confirmLabel: 'Удалить',
              tone: 'danger'
            }));
          case 2:
            _t5 = _context8.v;
            _context8.n = 4;
            break;
          case 3:
            _t5 = true;
          case 4:
            confirmed = _t5;
            if (confirmed) {
              _context8.n = 5;
              break;
            }
            return _context8.a(2);
          case 5:
            original = tables[tableId] || [];
            setTables(function (prev) {
              var list = prev[tableId] || [];
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, list.filter(function (row) {
                return getRecordId(row) !== getRecordId(record);
              })));
            });
            _context8.p = 6;
            _context8.n = 7;
            return apiRequest("/".concat(tableId, "/").concat(encodeURIComponent(record.id)), {
              method: 'DELETE'
            });
          case 7:
            _context8.n = 9;
            break;
          case 8:
            _context8.p = 8;
            _t6 = _context8.v;
            console.error('Delete failed', _t6);
            setTableError(_t6.message || 'Не удалось удалить запись');
            setTables(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, original));
            });
          case 9:
            return _context8.a(2);
        }
      }, _callee8, null, [[6, 8]]);
    }));
    return function handleDelete(_x6) {
      return _ref58.apply(this, arguments);
    };
  }();
  var handleCreateRecord = /*#__PURE__*/function () {
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(payload) {
      var tableId, normalizedPayload, _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            tableId = activeTable;
            setCreateModalOpen(false);
            _context9.p = 1;
            normalizedPayload = tableId === 'Appointments' && (payload === null || payload === void 0 ? void 0 : payload.Status) !== undefined ? _objectSpread(_objectSpread({}, payload), {}, {
              Status: normalizeStatusValue(payload.Status)
            }) : payload;
            _context9.n = 2;
            return apiRequest("/".concat(tableId), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(normalizedPayload)
            });
          case 2:
            fetchTables();
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t7 = _context9.v;
            console.error('Create failed', _t7);
            setTableError(_t7.message || 'Не удалось создать запись');
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function handleCreateRecord(_x7) {
      return _ref60.apply(this, arguments);
    };
  }();
  var fetchClientProfile = useCallback(function (client) {
    if (!(client !== null && client !== void 0 && client.Name)) return null;
    return apiRequest("/user-profile/".concat(encodeURIComponent(client.Name)));
  }, [apiRequest]);
  var tableSettings = TABLE_CONFIG[activeTable] || {};
  var isCustomTable = (tableSettings === null || tableSettings === void 0 ? void 0 : tableSettings.mode) === 'custom';
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, VISIBLE_TABLE_ORDER.map(function (table) {
    var _TABLE_CONFIG$table2;
    return /*#__PURE__*/React.createElement("button", {
      key: table,
      onClick: function onClick() {
        return setActiveTable(table);
      },
      className: classNames('rounded-full px-4 py-2 text-sm', activeTable === table ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300')
    }, ((_TABLE_CONFIG$table2 = TABLE_CONFIG[table]) === null || _TABLE_CONFIG$table2 === void 0 ? void 0 : _TABLE_CONFIG$table2.label) || table);
  })), isCustomTable ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, activeTable === 'Barbers' && /*#__PURE__*/React.createElement(BarbersView, {
    barbers: barbers,
    schedules: tables.Schedules || [],
    onFieldChange: onBarberFieldChange,
    onSave: onSaveBarber,
    onAdd: onAddBarber,
    onDelete: onDeleteBarber,
    loadAvatarOptions: function loadAvatarOptions() {
      return apiRequest('/assets/avatars');
    },
    onScheduleUpdate: function onScheduleUpdate(recordId, payload) {
      return handleUpdate(recordId, payload, {
        tableId: 'Schedules'
      });
    }
  }), activeTable === 'Services' && /*#__PURE__*/React.createElement(ServicesView, {
    services: services,
    barbers: barbers,
    onFieldChange: onServiceFieldChange,
    onPriceChange: onServicePriceChange,
    onDelete: onDeleteService,
    onAdd: onAddService
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, tableSettings && /*#__PURE__*/React.createElement(SectionCard, {
    title: tableSettings.label
  }, tableError && /*#__PURE__*/React.createElement(ErrorBanner, {
    message: tableError
  }), /*#__PURE__*/React.createElement(TableToolbar, {
    tableId: activeTable,
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    supportsBarberFilter: tableSettings.supportsBarberFilter,
    selectedBarber: selectedBarber,
    setSelectedBarber: setSelectedBarber,
    barbers: dropdownOptions.barbers,
    supportsStatusFilter: tableSettings.supportsStatusFilter,
    statuses: dropdownOptions.statuses,
    hiddenStatuses: hiddenStatuses,
    toggleStatus: toggleStatus,
    resetStatuses: function resetStatuses() {
      return setHiddenStatuses([]);
    },
    columns: currentColumns,
    hiddenColumns: hiddenColumns,
    toggleColumn: toggleColumn,
    canCreate: tableSettings.canCreate,
    onOpenCreate: function onOpenCreate() {
      return setCreateModalOpen(true);
    },
    onRefresh: fetchTables,
    showPastAppointments: showPastAppointments,
    setShowPastAppointments: setShowPastAppointments,
    supportsGrouping: activeTable === 'Appointments',
    groupByDate: groupAppointmentsByDate,
    setGroupByDate: setGroupAppointmentsByDate
  }), isFetching ? /*#__PURE__*/React.createElement(LoadingState, {
    label: "\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u044E \u0442\u0430\u0431\u043B\u0438\u0446\u044B..."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, activeTable === 'Users' ? /*#__PURE__*/React.createElement(ClientsList, {
    clients: processedRows,
    barbers: dropdownOptions.barbers || [],
    onUpdate: handleUpdate,
    onDelete: handleDelete,
    fetchHistory: fetchClientProfile,
    onRequestConfirm: onRequestConfirm
  }) : /*#__PURE__*/React.createElement(DataTable, {
    tableId: activeTable,
    rows: processedRows,
    columns: currentColumns,
    hiddenColumns: hiddenColumns,
    sortConfig: sortConfig,
    onSort: handleSort,
    onUpdate: handleUpdate,
    onDelete: tableSettings.canCreate ? handleDelete : null,
    options: dropdownOptions,
    onOpenProfile: onOpenProfile,
    onOpenAppointment: activeTable === 'Appointments' ? onOpenAppointmentRecord : null,
    groupByDate: activeTable === 'Appointments' ? groupAppointmentsByDate : false
  }))), tableSettings.canCreate && (activeTable === 'Appointments' ? /*#__PURE__*/React.createElement(AppointmentModal, {
    open: createModalOpen,
    appointment: appointmentTemplate,
    options: dropdownOptions,
    onClose: function onClose() {
      return setCreateModalOpen(false);
    },
    onSave: function onSave(_ref61) {
      var payload = _ref61.payload;
      return handleCreateRecord(payload);
    },
    isNew: true,
    clients: clients
  }) : /*#__PURE__*/React.createElement(CreateRecordModal, {
    isOpen: createModalOpen,
    onClose: function onClose() {
      return setCreateModalOpen(false);
    },
    onSave: handleCreateRecord,
    columns: currentColumns,
    tableName: tableSettings.label,
    options: dropdownOptions,
    tableId: activeTable,
    clients: clients,
    hiddenFields: activeTable === 'Appointments' ? ['UserID', 'Reminder2hClientSent', 'Reminder2hBarberSent'] : []
  }))));
};
var BotControlView = function BotControlView(_ref62) {
  var status = _ref62.status,
    settings = _ref62.settings,
    _ref62$backups = _ref62.backups,
    backups = _ref62$backups === void 0 ? [] : _ref62$backups,
    _ref62$messages = _ref62.messages,
    messages = _ref62$messages === void 0 ? [] : _ref62$messages,
    onToggleEnabled = _ref62.onToggleEnabled,
    onStart = _ref62.onStart,
    onStop = _ref62.onStop,
    onRestart = _ref62.onRestart,
    onSaveSettings = _ref62.onSaveSettings,
    onSaveMessage = _ref62.onSaveMessage,
    onRestoreBackup = _ref62.onRestoreBackup,
    onCreateBackup = _ref62.onCreateBackup,
    onDeleteBackup = _ref62.onDeleteBackup,
    licenseStatus = _ref62.licenseStatus,
    updateInfo = _ref62.updateInfo,
    onRefreshUpdate = _ref62.onRefreshUpdate,
    onApplyUpdate = _ref62.onApplyUpdate,
    systemBusy = _ref62.systemBusy,
    _ref62$viewMode = _ref62.viewMode,
    viewMode = _ref62$viewMode === void 0 ? 'bot' : _ref62$viewMode;
  var _useState57 = useState((settings === null || settings === void 0 ? void 0 : settings.botDescription) || ''),
    _useState58 = _slicedToArray(_useState57, 2),
    description = _useState58[0],
    setDescription = _useState58[1];
  var _useState59 = useState((settings === null || settings === void 0 ? void 0 : settings.aboutText) || ''),
    _useState60 = _slicedToArray(_useState59, 2),
    about = _useState60[0],
    setAbout = _useState60[1];
  useEffect(function () {
    setDescription((settings === null || settings === void 0 ? void 0 : settings.botDescription) || '');
    setAbout((settings === null || settings === void 0 ? void 0 : settings.aboutText) || '');
  }, [settings]);
  if (viewMode === 'system') {
    var _licenseStatus$licens, _licenseStatus$licens2, _licenseStatus$licens3;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement(BackupsPanel, {
      backups: backups,
      onRestore: onRestoreBackup,
      onCreate: onCreateBackup,
      onDelete: onDeleteBackup
    }), /*#__PURE__*/React.createElement(SectionCard, {
      title: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid gap-4 md:grid-cols-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold"
    }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
      className: "mt-1"
    }, "\u0421\u0442\u0430\u0442\u0443\u0441: ", licenseStatus !== null && licenseStatus !== void 0 && licenseStatus.valid ? 'Активна' : 'Не подтверждена'), /*#__PURE__*/React.createElement("p", null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ", (licenseStatus === null || licenseStatus === void 0 ? void 0 : licenseStatus.message) || 'Нет данных'), (licenseStatus === null || licenseStatus === void 0 || (_licenseStatus$licens = licenseStatus.license) === null || _licenseStatus$licens === void 0 ? void 0 : _licenseStatus$licens.owner) && /*#__PURE__*/React.createElement("p", null, "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ", licenseStatus.license.owner), (licenseStatus === null || licenseStatus === void 0 || (_licenseStatus$licens2 = licenseStatus.license) === null || _licenseStatus$licens2 === void 0 ? void 0 : _licenseStatus$licens2.expiresAt) && /*#__PURE__*/React.createElement("p", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E ", formatDate(licenseStatus.license.expiresAt)), (licenseStatus === null || licenseStatus === void 0 || (_licenseStatus$licens3 = licenseStatus.license) === null || _licenseStatus$licens3 === void 0 ? void 0 : _licenseStatus$licens3.number) && /*#__PURE__*/React.createElement("p", null, "\u041D\u043E\u043C\u0435\u0440: ", licenseStatus.license.number)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold"
    }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
      className: "mt-1"
    }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: ", (updateInfo === null || updateInfo === void 0 ? void 0 : updateInfo.version) || '—'), /*#__PURE__*/React.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E: ", updateInfo !== null && updateInfo !== void 0 && updateInfo.checkedAt ? formatDate(updateInfo.checkedAt) : '—'), /*#__PURE__*/React.createElement("p", null, "\u0421\u0442\u0430\u0442\u0443\u0441: ", (updateInfo === null || updateInfo === void 0 ? void 0 : updateInfo.details) || 'Нет данных'), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex flex-wrap gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onRefreshUpdate,
      disabled: systemBusy,
      className: "rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
    }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: onApplyUpdate,
      disabled: systemBusy || !(updateInfo !== null && updateInfo !== void 0 && updateInfo.available),
      className: "rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
    }, systemBusy ? 'Обновление…' : 'Обновить'))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0431\u043E\u0442\u0430",
    actions: /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onStart,
      className: "rounded-lg bg-emerald-600 px-3 py-1 text-white"
    }, "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: onStop,
      className: "rounded-lg bg-rose-600 px-3 py-1 text-white"
    }, "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: onRestart,
      className: "rounded-lg bg-slate-600 px-3 py-1 text-white"
    }, "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"))
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300"
  }, "\u0421\u043E\u0441\u0442\u043E\u044F: ", status !== null && status !== void 0 && status.running ? 'работает' : 'остановлен'), /*#__PURE__*/React.createElement("label", {
    className: "mt-3 inline-flex items-center gap-2 text-slate-300"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: (settings === null || settings === void 0 ? void 0 : settings.isBotEnabled) !== false,
    onChange: function onChange(event) {
      return onToggleEnabled(event.target.checked);
    }
  }), "\u0410\u0432\u0442\u043E\u0441\u0442\u0430\u0440\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 CRM")), /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0422\u0435\u043A\u0441\u0442\u044B \u0431\u043E\u0442\u0430"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430"), /*#__PURE__*/React.createElement("textarea", {
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    },
    rows: 3,
    className: "w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, "\u0411\u043B\u043E\u043A \xAB\u041E \u043D\u0430\u0441\xBB"), /*#__PURE__*/React.createElement("textarea", {
    value: about,
    onChange: function onChange(event) {
      return setAbout(event.target.value);
    },
    rows: 4,
    className: "w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSaveSettings({
        botDescription: description,
        aboutText: about
      });
    },
    className: "rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u044B"))));
};
var LoginScreen = function LoginScreen(_ref63) {
  var onLogin = _ref63.onLogin,
    error = _ref63.error;
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    username = _useState62[0],
    setUsername = _useState62[1];
  var _useState63 = useState(''),
    _useState64 = _slicedToArray(_useState63, 2),
    password = _useState64[0],
    setPassword = _useState64[1];
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    validationError = _useState66[0],
    setValidationError = _useState66[1];
  var _useState67 = useState([]),
    _useState68 = _slicedToArray(_useState67, 2),
    loginOptions = _useState68[0],
    setLoginOptions = _useState68[1];
  var _useState69 = useState(''),
    _useState70 = _slicedToArray(_useState69, 2),
    optionsError = _useState70[0],
    setOptionsError = _useState70[1];
  var _useState71 = useState(true),
    _useState72 = _slicedToArray(_useState71, 2),
    loadingOptions = _useState72[0],
    setLoadingOptions = _useState72[1];
  useEffect(function () {
    var isMounted = true;
    var fetchOptions = /*#__PURE__*/function () {
      var _ref64 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var response, data, normalized, _t8;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              setLoadingOptions(true);
              _context0.p = 1;
              _context0.n = 2;
              return fetch("".concat(API_BASE_URL, "/login/options"));
            case 2:
              response = _context0.v;
              if (response.ok) {
                _context0.n = 3;
                break;
              }
              throw new Error('failed');
            case 3:
              _context0.n = 4;
              return response.json();
            case 4:
              data = _context0.v;
              if (isMounted) {
                _context0.n = 5;
                break;
              }
              return _context0.a(2);
            case 5:
              normalized = Array.isArray(data) ? data : [];
              setLoginOptions(normalized);
              if (normalized.length === 1) {
                setUsername(normalized[0].login);
              } else if (!normalized.some(function (option) {
                return option.login === username;
              })) {
                setUsername('');
              }
              setOptionsError('');
              _context0.n = 8;
              break;
            case 6:
              _context0.p = 6;
              _t8 = _context0.v;
              if (isMounted) {
                _context0.n = 7;
                break;
              }
              return _context0.a(2);
            case 7:
              setLoginOptions([]);
              setOptionsError('Не удалось загрузить список барберов.');
            case 8:
              _context0.p = 8;
              if (isMounted) {
                setLoadingOptions(false);
              }
              return _context0.f(8);
            case 9:
              return _context0.a(2);
          }
        }, _callee0, null, [[1, 6, 8, 9]]);
      }));
      return function fetchOptions() {
        return _ref64.apply(this, arguments);
      };
    }();
    fetchOptions();
    return function () {
      isMounted = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(function () {
    if (error) {
      setValidationError('');
    }
  }, [error]);
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (!username) {
      setValidationError('Выберите барбера из списка');
      return;
    }
    if (!password) {
      setValidationError('Введите пароль');
      return;
    }
    setValidationError('');
    onLogin(username, password);
  };
  var selectDisabled = loadingOptions || loginOptions.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-screen items-center justify-center bg-slate-900 px-4"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-center text-2xl font-semibold text-white"
  }, "Barber Bot CRM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u0440\u0431\u0435\u0440\u0430 (\u043B\u043E\u0433\u0438\u043D)"), /*#__PURE__*/React.createElement("select", {
    value: username,
    disabled: selectDisabled,
    onChange: function onChange(event) {
      setValidationError('');
      setUsername(event.target.value);
    },
    className: "mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white disabled:opacity-60"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, loadingOptions ? 'Загрузка...' : 'Укажите барбера'), loginOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.id || option.login,
      value: option.login
    }, option.label || option.login);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \xAB\u0411\u0430\u0440\u0431\u0435\u0440\u044B\xBB."), optionsError && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-400"
  }, optionsError))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-slate-300"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    className: "mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white"
  })), (validationError || error) && /*#__PURE__*/React.createElement(ErrorBanner, {
    message: validationError || error
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-500",
    disabled: selectDisabled
  }, "\u0412\u043E\u0439\u0442\u0438")));
};
var App = function App() {
  var _useState73 = useState(function () {
      try {
        var saved = localStorage.getItem('barber-session');
        return saved ? buildSessionPayload(JSON.parse(saved)) : null;
      } catch (error) {
        return null;
      }
    }),
    _useState74 = _slicedToArray(_useState73, 2),
    session = _useState74[0],
    setSession = _useState74[1];
  var _useLocalStorage13 = useLocalStorage('barber.activeTab', 'dashboard'),
    _useLocalStorage14 = _slicedToArray(_useLocalStorage13, 2),
    activeTab = _useLocalStorage14[0],
    setActiveTab = _useLocalStorage14[1];
  var _useState75 = useState(null),
    _useState76 = _slicedToArray(_useState75, 2),
    pendingTableView = _useState76[0],
    setPendingTableView = _useState76[1];
  var _useState77 = useState(function () {
      try {
        var stored = localStorage.getItem('tables.active');
        return stored ? JSON.parse(stored) : 'Appointments';
      } catch (_unused4) {
        return 'Appointments';
      }
    }),
    _useState78 = _slicedToArray(_useState77, 2),
    activeDataTable = _useState78[0],
    setActiveDataTable = _useState78[1];
  var _useState79 = useState(null),
    _useState80 = _slicedToArray(_useState79, 2),
    dashboard = _useState80[0],
    setDashboard = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    services = _useState82[0],
    setServices = _useState82[1];
  var _useState83 = useState([]),
    _useState84 = _slicedToArray(_useState83, 2),
    barbers = _useState84[0],
    setBarbers = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    botStatus = _useState86[0],
    setBotStatus = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    botSettings = _useState88[0],
    setBotSettings = _useState88[1];
  var _useState89 = useState([]),
    _useState90 = _slicedToArray(_useState89, 2),
    botMessages = _useState90[0],
    setBotMessages = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    licenseStatus = _useState92[0],
    setLicenseStatus = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    updateInfo = _useState94[0],
    setUpdateInfo = _useState94[1];
  var _useState95 = useState(null),
    _useState96 = _slicedToArray(_useState95, 2),
    optionsCache = _useState96[0],
    setOptionsCache = _useState96[1];
  var _useState97 = useState({
      open: false,
      data: null,
      loading: false
    }),
    _useState98 = _slicedToArray(_useState97, 2),
    profileModal = _useState98[0],
    setProfileModal = _useState98[1];
  var _useState99 = useState({
      open: false,
      data: null,
      options: null,
      isNew: false,
      allowDelete: false
    }),
    _useState100 = _slicedToArray(_useState99, 2),
    appointmentModal = _useState100[0],
    setAppointmentModal = _useState100[1];
  var _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    loading = _useState102[0],
    setLoading = _useState102[1];
  var _useState103 = useState(''),
    _useState104 = _slicedToArray(_useState103, 2),
    globalError = _useState104[0],
    setGlobalError = _useState104[1];
  var _useState105 = useState(''),
    _useState106 = _slicedToArray(_useState105, 2),
    authError = _useState106[0],
    setAuthError = _useState106[1];
  var _useState107 = useState(false),
    _useState108 = _slicedToArray(_useState107, 2),
    systemBusy = _useState108[0],
    setSystemBusy = _useState108[1];
  var _useState109 = useState(window.innerWidth < 1024),
    _useState110 = _slicedToArray(_useState109, 2),
    isMobile = _useState110[0],
    setIsMobile = _useState110[1];
  var _useState111 = useState(null),
    _useState112 = _slicedToArray(_useState111, 2),
    realtimeSnapshot = _useState112[0],
    setRealtimeSnapshot = _useState112[1];
  var _useState113 = useState(null),
    _useState114 = _slicedToArray(_useState113, 2),
    fatalError = _useState114[0],
    setFatalError = _useState114[1];
  var _useState115 = useState(defaultConfirmState),
    _useState116 = _slicedToArray(_useState115, 2),
    confirmDialog = _useState116[0],
    setConfirmDialog = _useState116[1];
  var _useState117 = useState('unknown'),
    _useState118 = _slicedToArray(_useState117, 2),
    connectionStatus = _useState118[0],
    setConnectionStatus = _useState118[1];
  var confirmResolverRef = useRef(null);
  var requestConfirm = useCallback(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve) {
      confirmResolverRef.current = resolve;
      setConfirmDialog(_objectSpread(_objectSpread(_objectSpread({}, defaultConfirmState), options), {}, {
        open: true
      }));
    });
  }, []);
  var handleConfirmResult = useCallback(function (result) {
    setConfirmDialog(defaultConfirmState);
    if (confirmResolverRef.current) {
      confirmResolverRef.current(result);
      confirmResolverRef.current = null;
    }
  }, []);
  useEffect(function () {
    if (activeTab === 'barbers' || activeTab === 'services') {
      var target = activeTab === 'barbers' ? 'Barbers' : 'Services';
      setPendingTableView(target);
      setActiveTab('tables');
    }
  }, [activeTab, setActiveTab]);
  var handleSidebarTableChange = useCallback(function (tableId) {
    if (!tableId) return;
    setActiveDataTable(tableId);
    setPendingTableView(tableId);
    setActiveTab('tables');
  }, [setActiveTab, setPendingTableView]);
  var handleActiveTableSync = useCallback(function (tableId) {
    if (!tableId) return;
    setActiveDataTable(tableId);
  }, []);
  var handlePreferredTableConsumed = useCallback(function () {
    return setPendingTableView(null);
  }, []);
  var serviceSaveTimers = useRef(new Map());
  useEffect(function () {
    var handler = function handler() {
      return setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handler);
    return function () {
      return window.removeEventListener('resize', handler);
    };
  }, []);
  useEffect(function () {
    var cancelled = false;
    if (!(session !== null && session !== void 0 && session.token)) {
      setConnectionStatus('unknown');
      return function () {
        cancelled = true;
      };
    }
    var checkServer = /*#__PURE__*/function () {
      var _ref65 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var response, _t9;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              _context1.p = 0;
              _context1.n = 1;
              return fetch("".concat(API_BASE_URL, "/login/options"), {
                cache: 'no-store'
              });
            case 1:
              response = _context1.v;
              if (!cancelled) {
                _context1.n = 2;
                break;
              }
              return _context1.a(2);
            case 2:
              setConnectionStatus(response.ok ? 'online' : 'offline');
              _context1.n = 4;
              break;
            case 3:
              _context1.p = 3;
              _t9 = _context1.v;
              if (!cancelled) {
                setConnectionStatus('offline');
              }
            case 4:
              return _context1.a(2);
          }
        }, _callee1, null, [[0, 3]]);
      }));
      return function checkServer() {
        return _ref65.apply(this, arguments);
      };
    }();
    checkServer();
    var interval = setInterval(checkServer, 15000);
    return function () {
      cancelled = true;
      clearInterval(interval);
    };
  }, [session === null || session === void 0 ? void 0 : session.token]);
  var handleLogout = useCallback(function () {
    localStorage.removeItem('barber-session');
    setSession(null);
    setDashboard(null);
    setGlobalError('');
    setRealtimeSnapshot(null);
  }, []);
  var apiRequest = useCallback(/*#__PURE__*/function () {
    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(endpoint) {
      var _options$headers;
      var options,
        headers,
        response,
        message,
        _args10 = arguments;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            options = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
            if (session !== null && session !== void 0 && session.token) {
              _context10.n = 1;
              break;
            }
            throw new Error('Нет активной сессии');
          case 1:
            headers = _objectSpread(_objectSpread({
              Accept: 'application/json',
              Authorization: "Bearer ".concat(session.token)
            }, options.body && !((_options$headers = options.headers) !== null && _options$headers !== void 0 && _options$headers['Content-Type']) ? {
              'Content-Type': 'application/json'
            } : {}), options.headers || {});
            _context10.n = 2;
            return fetch("".concat(API_BASE_URL).concat(endpoint), _objectSpread(_objectSpread({}, options), {}, {
              headers: headers
            }));
          case 2:
            response = _context10.v;
            if (!(response.status === 401 || response.status === 403)) {
              _context10.n = 3;
              break;
            }
            handleLogout();
            throw new Error('Сессия истекла');
          case 3:
            if (response.ok) {
              _context10.n = 5;
              break;
            }
            _context10.n = 4;
            return response.text();
          case 4:
            message = _context10.v;
            throw new Error(message || 'Ошибка запроса');
          case 5:
            if (!(response.status === 204)) {
              _context10.n = 6;
              break;
            }
            return _context10.a(2, null);
          case 6:
            return _context10.a(2, response.json());
        }
      }, _callee10);
    }));
    return function (_x8) {
      return _ref66.apply(this, arguments);
    };
  }(), [session === null || session === void 0 ? void 0 : session.token, handleLogout]);
  var fetchAll = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
    var _overview$bot, overview, withFallback, _yield$Promise$all, _yield$Promise$all2, servicesFull, barbersFull, botState, botMessagesPayload, license, update, options, normalizedOptions, _t0;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          if (session !== null && session !== void 0 && session.token) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          setLoading(true);
          setGlobalError('');
          _context11.p = 2;
          _context11.n = 3;
          return apiRequest('/dashboard/overview');
        case 3:
          overview = _context11.v;
          setDashboard(overview);
          withFallback = function withFallback(request, fallback, label) {
            return request["catch"](function (error) {
              console.warn("".concat(label, " fetch skipped:"), (error === null || error === void 0 ? void 0 : error.message) || error);
              return fallback;
            });
          };
          _context11.n = 4;
          return Promise.all([withFallback(apiRequest('/services/full'), {
            services: []
          }, 'Services'), withFallback(apiRequest('/barbers/full'), [], 'Barbers'), withFallback(apiRequest('/bot/status'), {
            status: null,
            settings: null
          }, 'Bot status'), withFallback(apiRequest('/bot/messages'), [], 'Bot messages'), withFallback(apiRequest('/license/status'), null, 'License'), withFallback(apiRequest('/system/update'), null, 'Updates'), withFallback(apiRequest('/options/appointments'), {
            statuses: [],
            barbers: [],
            services: []
          }, 'Options')]);
        case 4:
          _yield$Promise$all = _context11.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 7);
          servicesFull = _yield$Promise$all2[0];
          barbersFull = _yield$Promise$all2[1];
          botState = _yield$Promise$all2[2];
          botMessagesPayload = _yield$Promise$all2[3];
          license = _yield$Promise$all2[4];
          update = _yield$Promise$all2[5];
          options = _yield$Promise$all2[6];
          setServices(servicesFull.services || []);
          setBarbers(barbersFull || overview.barbers || []);
          setBotSettings(botState.settings || ((_overview$bot = overview.bot) === null || _overview$bot === void 0 ? void 0 : _overview$bot.settings) || null);
          setBotStatus(botState.status);
          setBotMessages(botMessagesPayload || []);
          setLicenseStatus(license);
          setUpdateInfo(update);
          normalizedOptions = _objectSpread(_objectSpread({}, options), {}, {
            statuses: normalizeStatusList(options.statuses || [])
          });
          setOptionsCache(normalizedOptions);
          _context11.n = 6;
          break;
        case 5:
          _context11.p = 5;
          _t0 = _context11.v;
          console.error(_t0);
          setGlobalError(_t0.message || 'Не удалось загрузить данные');
        case 6:
          _context11.p = 6;
          setLoading(false);
          return _context11.f(6);
        case 7:
          return _context11.a(2);
      }
    }, _callee11, null, [[2, 5, 6, 7]]);
  })), [apiRequest, session === null || session === void 0 ? void 0 : session.token]);
  useEffect(function () {
    if (session !== null && session !== void 0 && session.token) {
      fetchAll();
    }
  }, [session === null || session === void 0 ? void 0 : session.token, fetchAll]);
  useEffect(function () {
    if (!(session !== null && session !== void 0 && session.token)) {
      setRealtimeSnapshot(null);
      return undefined;
    }
    if (typeof EventSource === 'undefined') return undefined;
    var tokenParam = encodeURIComponent(session.token);
    var streamUrl = "".concat(API_BASE_URL, "/events/stream?token=").concat(tokenParam);
    var eventSource = new EventSource(streamUrl);
    eventSource.onopen = function () {
      return setConnectionStatus('online');
    };
    var handleEvent = function handleEvent(event) {
      try {
        var payload = JSON.parse(event.data);
        if ((payload === null || payload === void 0 ? void 0 : payload.type) !== 'appointments:update') return;
        var details = payload.payload || {};
        setRealtimeSnapshot({
          rows: Array.isArray(details.rows) ? details.rows : [],
          stats: details.stats || {},
          upcoming: Array.isArray(details.upcoming) ? details.upcoming : [],
          updatedAt: details.updatedAt || new Date().toISOString()
        });
      } catch (error) {
        console.error('Realtime event parse error:', error);
      }
    };
    eventSource.addEventListener('appointments', handleEvent);
    eventSource.onerror = function () {
      setConnectionStatus('offline');
    };
    return function () {
      eventSource.removeEventListener('appointments', handleEvent);
      eventSource.close();
    };
  }, [session === null || session === void 0 ? void 0 : session.token]);
  useEffect(function () {
    if (!realtimeSnapshot) return;
    setDashboard(function (prev) {
      var _prev$appointments;
      var nextStats = _objectSpread(_objectSpread({}, (prev === null || prev === void 0 ? void 0 : prev.stats) || {}), realtimeSnapshot.stats || {});
      var nextAppointments = _objectSpread(_objectSpread({}, (prev === null || prev === void 0 ? void 0 : prev.appointments) || {}), {}, {
        upcoming: realtimeSnapshot.upcoming || (prev === null || prev === void 0 || (_prev$appointments = prev.appointments) === null || _prev$appointments === void 0 ? void 0 : _prev$appointments.upcoming) || []
      });
      if (!prev) {
        return {
          stats: nextStats,
          appointments: nextAppointments
        };
      }
      return _objectSpread(_objectSpread({}, prev), {}, {
        stats: nextStats,
        appointments: nextAppointments
      });
    });
  }, [realtimeSnapshot]);
  useEffect(function () {
    var handleGlobalError = function handleGlobalError(event) {
      var detail = (event === null || event === void 0 ? void 0 : event.reason) || (event === null || event === void 0 ? void 0 : event.error);
      var message = (detail === null || detail === void 0 ? void 0 : detail.message) || (event === null || event === void 0 ? void 0 : event.message) || (typeof detail === 'string' ? detail : 'Неизвестная ошибка');
      console.error('Global UI error:', detail || event);
      setFatalError(message);
    };
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleGlobalError);
    return function () {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleGlobalError);
    };
  }, []);
  useEffect(function () {
    return function () {
      serviceSaveTimers.current.forEach(function (timer) {
        return clearTimeout(timer);
      });
      serviceSaveTimers.current.clear();
    };
  }, []);
  var handleLogin = /*#__PURE__*/function () {
    var _ref68 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(username, password) {
      var normalizedUsername, response, data, sessionPayload, _t1;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            setAuthError('');
            normalizedUsername = resolveLogin(username);
            if (normalizedUsername) {
              _context12.n = 1;
              break;
            }
            setAuthError('Выберите барбера из списка');
            return _context12.a(2);
          case 1:
            _context12.p = 1;
            _context12.n = 2;
            return fetch("".concat(API_BASE_URL, "/login"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: normalizedUsername,
                password: password
              })
            });
          case 2:
            response = _context12.v;
            _context12.n = 3;
            return response.json();
          case 3:
            data = _context12.v;
            if (!(!response.ok || !data.success)) {
              _context12.n = 4;
              break;
            }
            setAuthError(data.message || 'Неверный логин или пароль');
            return _context12.a(2);
          case 4:
            sessionPayload = buildSessionPayload(_objectSpread(_objectSpread({}, data), {}, {
              username: normalizedUsername
            }));
            localStorage.setItem('barber-session', JSON.stringify(sessionPayload));
            setSession(sessionPayload);
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t1 = _context12.v;
            setAuthError('Сервер недоступен');
          case 6:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 5]]);
    }));
    return function handleLogin(_x9, _x0) {
      return _ref68.apply(this, arguments);
    };
  }();
  var handleBarberFieldChange = function handleBarberFieldChange(id, field, value) {
    setBarbers(function (prev) {
      return prev.map(function (barber) {
        return barber.id === id ? _objectSpread(_objectSpread({}, barber), {}, _defineProperty({}, field, value)) : barber;
      });
    });
  };
  var normalizeServicePayload = function normalizeServicePayload(service) {
    return _objectSpread(_objectSpread({}, service), {}, {
      prices: Object.fromEntries(Object.entries(service.prices || {}).map(function (_ref69) {
        var _ref70 = _slicedToArray(_ref69, 2),
          key = _ref70[0],
          value = _ref70[1];
        return [key, value === '' || value == null ? null : Number(value)];
      }))
    });
  };
  var deriveBarberLogin = function deriveBarberLogin() {
    var barberData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return resolveLogin(barberData.login || barberData.name || '');
  };
  var buildBarberPayload = function buildBarberPayload() {
    var _barberData$orderInde;
    var barberData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fallbackOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var payload = {
      name: barberData.name || '',
      nickname: null,
      description: barberData.description || '',
      rating: barberData.rating || '',
      avatarUrl: barberData.avatarUrl || '',
      color: barberData.color || '',
      login: deriveBarberLogin(barberData),
      password: barberData.password || '',
      phone: barberData.phone || '',
      telegramId: barberData.telegramId || '',
      isActive: barberData.isActive !== false,
      orderIndex: Number((_barberData$orderInde = barberData.orderIndex) !== null && _barberData$orderInde !== void 0 ? _barberData$orderInde : fallbackOrder) || 0
    };
    if (barberData.id) {
      payload.id = barberData.id;
    }
    return payload;
  };
  var handleSaveBarber = /*#__PURE__*/function () {
    var _ref71 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(barber) {
      var response, updatedBarber, _t10;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            _context13.p = 1;
            _context13.n = 2;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'PUT',
              body: JSON.stringify(buildBarberPayload(barber))
            });
          case 2:
            response = _context13.v;
            updatedBarber = response || barber;
            setBarbers(function (prev) {
              return prev.map(function (item) {
                return item.id === updatedBarber.id ? _objectSpread(_objectSpread({}, item), updatedBarber) : item;
              });
            });
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t10 = _context13.v;
            setGlobalError(_t10.message);
          case 4:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 3]]);
    }));
    return function handleSaveBarber(_x1) {
      return _ref71.apply(this, arguments);
    };
  }();
  var handleDeleteBarber = /*#__PURE__*/function () {
    var _ref72 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(barber) {
      var confirmed, _t11;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            _context14.n = 2;
            return requestConfirm({
              title: 'Удалить барбера?',
              message: "\u0411\u0430\u0440\u0431\u0435\u0440 \xAB".concat(barber.name || 'Без имени', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context14.v;
            if (confirmed) {
              _context14.n = 3;
              break;
            }
            return _context14.a(2);
          case 3:
            _context14.p = 3;
            _context14.n = 4;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context14.n = 6;
            break;
          case 5:
            _context14.p = 5;
            _t11 = _context14.v;
            setGlobalError(_t11.message || 'Не удалось удалить барбера');
          case 6:
            return _context14.a(2);
        }
      }, _callee14, null, [[3, 5]]);
    }));
    return function handleDeleteBarber(_x10) {
      return _ref72.apply(this, arguments);
    };
  }();
  var handleAddBarber = /*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(payload) {
      var newBarberPayload, id, body, _t12;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (!(!payload.name || !payload.password)) {
              _context15.n = 1;
              break;
            }
            setGlobalError('Заполните имя, логин и пароль барбера');
            return _context15.a(2);
          case 1:
            _context15.p = 1;
            newBarberPayload = buildBarberPayload(_objectSpread(_objectSpread({}, payload), {}, {
              id: undefined
            }), barbers.length);
            id = newBarberPayload.id, body = _objectWithoutProperties(newBarberPayload, _excluded);
            _context15.n = 2;
            return apiRequest('/Barbers', {
              method: 'POST',
              body: JSON.stringify(body)
            });
          case 2:
            fetchAll();
            _context15.n = 4;
            break;
          case 3:
            _context15.p = 3;
            _t12 = _context15.v;
            setGlobalError(_t12.message || 'Не удалось добавить барбера');
          case 4:
            return _context15.a(2);
        }
      }, _callee15, null, [[1, 3]]);
    }));
    return function handleAddBarber(_x11) {
      return _ref73.apply(this, arguments);
    };
  }();
  var handleSaveService = useCallback(/*#__PURE__*/function () {
    var _ref74 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(service) {
      var _t13;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            _context16.p = 1;
            _context16.n = 2;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'PUT',
              body: JSON.stringify(normalizeServicePayload(service))
            });
          case 2:
            _context16.n = 4;
            break;
          case 3:
            _context16.p = 3;
            _t13 = _context16.v;
            setGlobalError(_t13.message || 'Не удалось сохранить услугу');
          case 4:
            return _context16.a(2);
        }
      }, _callee16, null, [[1, 3]]);
    }));
    return function (_x12) {
      return _ref74.apply(this, arguments);
    };
  }(), [apiRequest]);
  var scheduleServiceAutosave = useCallback(function (service) {
    if (!(service !== null && service !== void 0 && service.id)) return;
    var timers = serviceSaveTimers.current;
    var existingTimer = timers.get(service.id);
    if (existingTimer) clearTimeout(existingTimer);
    var timer = setTimeout(function () {
      handleSaveService(service);
      timers["delete"](service.id);
    }, 400);
    timers.set(service.id, timer);
  }, [handleSaveService]);
  var handleDeleteService = /*#__PURE__*/function () {
    var _ref75 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(service) {
      var confirmed, _t14;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            _context17.n = 2;
            return requestConfirm({
              title: 'Удалить услугу?',
              message: "\u0423\u0441\u043B\u0443\u0433\u0430 \xAB".concat(service.name || 'Без названия', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context17.v;
            if (confirmed) {
              _context17.n = 3;
              break;
            }
            return _context17.a(2);
          case 3:
            _context17.p = 3;
            _context17.n = 4;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context17.n = 6;
            break;
          case 5:
            _context17.p = 5;
            _t14 = _context17.v;
            setGlobalError(_t14.message || 'Не удалось удалить услугу');
          case 6:
            return _context17.a(2);
        }
      }, _callee17, null, [[3, 5]]);
    }));
    return function handleDeleteService(_x13) {
      return _ref75.apply(this, arguments);
    };
  }();
  var handleAddService = /*#__PURE__*/function () {
    var _ref76 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(payload) {
      var _t15;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (payload.name) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            _context18.p = 1;
            _context18.n = 2;
            return apiRequest('/services/full', {
              method: 'POST',
              body: JSON.stringify(normalizeServicePayload(payload))
            });
          case 2:
            fetchAll();
            _context18.n = 4;
            break;
          case 3:
            _context18.p = 3;
            _t15 = _context18.v;
            setGlobalError(_t15.message || 'Не удалось добавить услугу');
          case 4:
            return _context18.a(2);
        }
      }, _callee18, null, [[1, 3]]);
    }));
    return function handleAddService(_x14) {
      return _ref76.apply(this, arguments);
    };
  }();
  var handleServiceFieldChange = useCallback(function (id, field, value) {
    setServices(function (prev) {
      return prev.map(function (service) {
        return service.id === id ? _objectSpread(_objectSpread({}, service), {}, _defineProperty({}, field, value)) : service;
      });
    });
    var target = services.find(function (service) {
      return service.id === id;
    });
    if (target) {
      scheduleServiceAutosave(_objectSpread(_objectSpread({}, target), {}, _defineProperty({}, field, value)));
    }
  }, [services, scheduleServiceAutosave]);
  var handleServicePriceChange = useCallback(function (serviceId, barberId, value) {
    setServices(function (prev) {
      return prev.map(function (service) {
        if (service.id !== serviceId) return service;
        return _objectSpread(_objectSpread({}, service), {}, {
          prices: _objectSpread(_objectSpread({}, service.prices || {}), {}, _defineProperty({}, barberId, value))
        });
      });
    });
    var target = services.find(function (service) {
      return service.id === serviceId;
    });
    if (target) {
      scheduleServiceAutosave(_objectSpread(_objectSpread({}, target), {}, {
        prices: _objectSpread(_objectSpread({}, target.prices || {}), {}, _defineProperty({}, barberId, value))
      }));
    }
  }, [services, scheduleServiceAutosave]);
  var handleBotToggle = /*#__PURE__*/function () {
    var _ref77 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(enabled) {
      var _t16;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            _context19.p = 0;
            _context19.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                isBotEnabled: enabled
              })
            });
          case 1:
            fetchAll();
            _context19.n = 3;
            break;
          case 2:
            _context19.p = 2;
            _t16 = _context19.v;
            setGlobalError(_t16.message || 'Не удалось обновить настройки бота');
          case 3:
            return _context19.a(2);
        }
      }, _callee19, null, [[0, 2]]);
    }));
    return function handleBotToggle(_x15) {
      return _ref77.apply(this, arguments);
    };
  }();
  var handleBotAction = /*#__PURE__*/function () {
    var _ref78 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(action) {
      var _t17;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            _context20.p = 0;
            _context20.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                action: action
              })
            });
          case 1:
            fetchAll();
            _context20.n = 3;
            break;
          case 2:
            _context20.p = 2;
            _t17 = _context20.v;
            setGlobalError(_t17.message || 'Не удалось выполнить действие');
          case 3:
            return _context20.a(2);
        }
      }, _callee20, null, [[0, 2]]);
    }));
    return function handleBotAction(_x16) {
      return _ref78.apply(this, arguments);
    };
  }();
  var handleSaveSettings = /*#__PURE__*/function () {
    var _ref79 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(payload) {
      var _t18;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (botSettings !== null && botSettings !== void 0 && botSettings.id) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            _context21.p = 1;
            _context21.n = 2;
            return apiRequest("/BotSettings/".concat(encodeURIComponent(botSettings.id)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 2:
            fetchAll();
            _context21.n = 4;
            break;
          case 3:
            _context21.p = 3;
            _t18 = _context21.v;
            setGlobalError(_t18.message || 'Не удалось сохранить настройки');
          case 4:
            return _context21.a(2);
        }
      }, _callee21, null, [[1, 3]]);
    }));
    return function handleSaveSettings(_x17) {
      return _ref79.apply(this, arguments);
    };
  }();
  var handleSaveMessage = /*#__PURE__*/function () {
    var _ref80 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(id, draft, persist) {
      var _t19;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            if (persist) {
              _context22.n = 1;
              break;
            }
            setBotMessages(function (prev) {
              return prev.map(function (message) {
                return message.id === id ? _objectSpread({}, draft) : message;
              });
            });
            return _context22.a(2);
          case 1:
            _context22.p = 1;
            _context22.n = 2;
            return apiRequest("/bot/messages/".concat(encodeURIComponent(id)), {
              method: 'PUT',
              body: JSON.stringify({
                code: draft.code,
                title: draft.title,
                text: draft.text
              })
            });
          case 2:
            fetchAll();
            _context22.n = 4;
            break;
          case 3:
            _context22.p = 3;
            _t19 = _context22.v;
            setGlobalError(_t19.message || 'Не удалось сохранить сообщение');
          case 4:
            return _context22.a(2);
        }
      }, _callee22, null, [[1, 3]]);
    }));
    return function handleSaveMessage(_x18, _x19, _x20) {
      return _ref80.apply(this, arguments);
    };
  }();
  var handleRestoreBackup = /*#__PURE__*/function () {
    var _ref81 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(filename) {
      var confirmed, _t20;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            if (filename) {
              _context23.n = 1;
              break;
            }
            return _context23.a(2);
          case 1:
            _context23.n = 2;
            return requestConfirm({
              title: 'Восстановить резервную копию?',
              message: "\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C ".concat(filename, ". \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?"),
              confirmLabel: 'Восстановить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context23.v;
            if (confirmed) {
              _context23.n = 3;
              break;
            }
            return _context23.a(2);
          case 3:
            _context23.p = 3;
            _context23.n = 4;
            return apiRequest('/backups/restore', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filename: filename
              })
            });
          case 4:
            fetchAll();
            _context23.n = 6;
            break;
          case 5:
            _context23.p = 5;
            _t20 = _context23.v;
            setGlobalError(_t20.message || 'Не удалось восстановить бэкап');
          case 6:
            return _context23.a(2);
        }
      }, _callee23, null, [[3, 5]]);
    }));
    return function handleRestoreBackup(_x21) {
      return _ref81.apply(this, arguments);
    };
  }();
  var handleCreateBackup = /*#__PURE__*/function () {
    var _ref82 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
      var confirmed, _t21;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            _context24.n = 1;
            return requestConfirm({
              title: 'Создать резервную копию?',
              message: 'Будет создан файл резервной копии текущей базы данных.',
              confirmLabel: 'Создать',
              tone: 'success'
            });
          case 1:
            confirmed = _context24.v;
            if (confirmed) {
              _context24.n = 2;
              break;
            }
            return _context24.a(2);
          case 2:
            _context24.p = 2;
            _context24.n = 3;
            return apiRequest('/backups/create', {
              method: 'POST'
            });
          case 3:
            fetchAll();
            _context24.n = 5;
            break;
          case 4:
            _context24.p = 4;
            _t21 = _context24.v;
            setGlobalError(_t21.message || 'Не удалось создать бэкап');
          case 5:
            return _context24.a(2);
        }
      }, _callee24, null, [[2, 4]]);
    }));
    return function handleCreateBackup() {
      return _ref82.apply(this, arguments);
    };
  }();
  var handleDeleteBackup = /*#__PURE__*/function () {
    var _ref83 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(filename) {
      var confirmed, _t22;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            if (filename) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2);
          case 1:
            _context25.n = 2;
            return requestConfirm({
              title: 'Удалить резервную копию?',
              message: "\u0424\u0430\u0439\u043B ".concat(filename, " \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context25.v;
            if (confirmed) {
              _context25.n = 3;
              break;
            }
            return _context25.a(2);
          case 3:
            _context25.p = 3;
            _context25.n = 4;
            return apiRequest('/backups/delete', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filename: filename
              })
            });
          case 4:
            fetchAll();
            _context25.n = 6;
            break;
          case 5:
            _context25.p = 5;
            _t22 = _context25.v;
            setGlobalError(_t22.message || 'Не удалось удалить бэкап');
          case 6:
            return _context25.a(2);
        }
      }, _callee25, null, [[3, 5]]);
    }));
    return function handleDeleteBackup(_x22) {
      return _ref83.apply(this, arguments);
    };
  }();
  var fetchClientHistory = useCallback(/*#__PURE__*/function () {
    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(client) {
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            if (client !== null && client !== void 0 && client.Name) {
              _context26.n = 1;
              break;
            }
            return _context26.a(2, null);
          case 1:
            return _context26.a(2, apiRequest("/user-profile/".concat(encodeURIComponent(client.Name))));
        }
      }, _callee26);
    }));
    return function (_x23) {
      return _ref84.apply(this, arguments);
    };
  }(), [apiRequest]);
  var openProfile = useCallback(/*#__PURE__*/function () {
    var _ref85 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(name) {
      var payload, _t23;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            if (name) {
              _context27.n = 1;
              break;
            }
            return _context27.a(2);
          case 1:
            setProfileModal({
              open: true,
              data: null,
              loading: true
            });
            _context27.p = 2;
            _context27.n = 3;
            return apiRequest("/user-profile/".concat(encodeURIComponent(name)));
          case 3:
            payload = _context27.v;
            setProfileModal({
              open: true,
              data: payload,
              loading: false
            });
            _context27.n = 5;
            break;
          case 4:
            _context27.p = 4;
            _t23 = _context27.v;
            setProfileModal({
              open: true,
              data: {
                error: _t23.message || 'Не удалось загрузить профиль'
              },
              loading: false
            });
          case 5:
            return _context27.a(2);
        }
      }, _callee27, null, [[2, 4]]);
    }));
    return function (_x24) {
      return _ref85.apply(this, arguments);
    };
  }(), [apiRequest]);
  var ensureOptions = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
    var options, normalized;
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (!optionsCache) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2, optionsCache);
        case 1:
          _context28.n = 2;
          return apiRequest('/options/appointments?force=1');
        case 2:
          options = _context28.v;
          normalized = _objectSpread(_objectSpread({}, options), {}, {
            statuses: normalizeStatusList(options.statuses || [])
          });
          setOptionsCache(normalized);
          return _context28.a(2, normalized);
      }
    }, _callee28);
  })), [apiRequest, optionsCache]);
  var handleOpenAppointment = useCallback(/*#__PURE__*/function () {
    var _ref87 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(appointment) {
      var optionsConfig,
        options,
        _args29 = arguments;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.n) {
          case 0:
            optionsConfig = _args29.length > 1 && _args29[1] !== undefined ? _args29[1] : {};
            _context29.n = 1;
            return ensureOptions();
          case 1:
            options = _context29.v;
            setAppointmentModal({
              open: true,
              data: appointment,
              options: options,
              isNew: false,
              allowDelete: !!optionsConfig.allowDelete
            });
          case 2:
            return _context29.a(2);
        }
      }, _callee29);
    }));
    return function (_x25) {
      return _ref87.apply(this, arguments);
    };
  }(), [ensureOptions]);
  var handleCreateAppointment = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30() {
    var _options$statuses;
    var options, today, defaultStatus, defaultBarber;
    return _regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          _context30.n = 1;
          return ensureOptions();
        case 1:
          options = _context30.v;
          today = new Date().toISOString().slice(0, 10);
          defaultStatus = normalizeStatusValue(((_options$statuses = options.statuses) === null || _options$statuses === void 0 ? void 0 : _options$statuses[0]) || 'Активная');
          defaultBarber = pickBarberForUser(session, options.barbers || []);
          setAppointmentModal({
            open: true,
            data: {
              id: null,
              CustomerName: '',
              Phone: '',
              Barber: defaultBarber,
              Date: today,
              Time: '',
              Status: defaultStatus,
              Services: '',
              UserID: ''
            },
            options: options,
            isNew: true,
            allowDelete: false
          });
        case 2:
          return _context30.a(2);
      }
    }, _callee30);
  })), [ensureOptions, session === null || session === void 0 ? void 0 : session.displayName, session === null || session === void 0 ? void 0 : session.username]);
  var handleSaveAppointment = /*#__PURE__*/function () {
    var _ref90 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(_ref89) {
      var id, payload, isNew, _t24;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            id = _ref89.id, payload = _ref89.payload, isNew = _ref89.isNew;
            _context31.p = 1;
            if (!isNew) {
              _context31.n = 3;
              break;
            }
            _context31.n = 2;
            return apiRequest('/Appointments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 2:
            _context31.n = 4;
            break;
          case 3:
            if (!id) {
              _context31.n = 4;
              break;
            }
            _context31.n = 4;
            return apiRequest("/Appointments/".concat(encodeURIComponent(id)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 4:
            setAppointmentModal(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                open: false,
                data: null,
                isNew: false,
                allowDelete: false
              });
            });
            fetchAll();
            _context31.n = 6;
            break;
          case 5:
            _context31.p = 5;
            _t24 = _context31.v;
            setGlobalError(_t24.message || 'Не удалось сохранить запись');
          case 6:
            return _context31.a(2);
        }
      }, _callee31, null, [[1, 5]]);
    }));
    return function handleSaveAppointment(_x26) {
      return _ref90.apply(this, arguments);
    };
  }();
  var handleDeleteAppointment = /*#__PURE__*/function () {
    var _ref91 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(appointment) {
      var confirmed, _t25;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            if (appointment !== null && appointment !== void 0 && appointment.id) {
              _context32.n = 1;
              break;
            }
            return _context32.a(2);
          case 1:
            _context32.n = 2;
            return requestConfirm({
              title: 'Удалить запись?',
              message: 'Запись будет удалена без возможности восстановления.',
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context32.v;
            if (confirmed) {
              _context32.n = 3;
              break;
            }
            return _context32.a(2);
          case 3:
            _context32.p = 3;
            _context32.n = 4;
            return apiRequest("/Appointments/".concat(encodeURIComponent(appointment.id)), {
              method: 'DELETE'
            });
          case 4:
            setAppointmentModal({
              open: false,
              data: null,
              options: null,
              isNew: false,
              allowDelete: false
            });
            fetchAll();
            _context32.n = 6;
            break;
          case 5:
            _context32.p = 5;
            _t25 = _context32.v;
            setGlobalError(_t25.message || 'Не удалось удалить запись');
          case 6:
            return _context32.a(2);
        }
      }, _callee32, null, [[3, 5]]);
    }));
    return function handleDeleteAppointment(_x27) {
      return _ref91.apply(this, arguments);
    };
  }();
  var handleRefreshUpdate = /*#__PURE__*/function () {
    var _ref92 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33() {
      var info, _t26;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            setSystemBusy(true);
            _context33.p = 1;
            _context33.n = 2;
            return apiRequest('/system/update?force=1');
          case 2:
            info = _context33.v;
            setUpdateInfo(info);
            _context33.n = 4;
            break;
          case 3:
            _context33.p = 3;
            _t26 = _context33.v;
            setGlobalError(_t26.message || 'Не удалось проверить обновления');
          case 4:
            _context33.p = 4;
            setSystemBusy(false);
            return _context33.f(4);
          case 5:
            return _context33.a(2);
        }
      }, _callee33, null, [[1, 3, 4, 5]]);
    }));
    return function handleRefreshUpdate() {
      return _ref92.apply(this, arguments);
    };
  }();
  var handleApplyUpdate = /*#__PURE__*/function () {
    var _ref93 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34() {
      var confirmed, result, _t27;
      return _regenerator().w(function (_context34) {
        while (1) switch (_context34.p = _context34.n) {
          case 0:
            _context34.n = 1;
            return requestConfirm({
              title: 'Обновить систему?',
              message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
              confirmLabel: 'Обновить',
              tone: 'danger'
            });
          case 1:
            confirmed = _context34.v;
            if (confirmed) {
              _context34.n = 2;
              break;
            }
            return _context34.a(2);
          case 2:
            setSystemBusy(true);
            _context34.p = 3;
            _context34.n = 4;
            return apiRequest('/system/update', {
              method: 'POST'
            });
          case 4:
            result = _context34.v;
            setUpdateInfo(result.info || result);
            fetchAll();
            _context34.n = 6;
            break;
          case 5:
            _context34.p = 5;
            _t27 = _context34.v;
            setGlobalError(_t27.message || 'Не удалось применить обновление');
          case 6:
            _context34.p = 6;
            setSystemBusy(false);
            return _context34.f(6);
          case 7:
            return _context34.a(2);
        }
      }, _callee34, null, [[3, 5, 6, 7]]);
    }));
    return function handleApplyUpdate() {
      return _ref93.apply(this, arguments);
    };
  }();
  if (!(session !== null && session !== void 0 && session.token)) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: handleLogin,
      error: authError
    });
  }
  var preferredTableTarget = activeTab === 'barbers' ? 'Barbers' : activeTab === 'services' ? 'Services' : pendingTableView;
  var liveUpdatedAt = (realtimeSnapshot === null || realtimeSnapshot === void 0 ? void 0 : realtimeSnapshot.updatedAt) || null;
  var mainClassName = classNames('flex-1 space-y-4 p-4 md:p-8', isMobile ? 'pb-24' : '');
  var renderActive = function renderActive() {
    if (loading) return /*#__PURE__*/React.createElement(LoadingState, null);
    switch (activeTab) {
      case 'dashboard':
        return /*#__PURE__*/React.createElement(DashboardView, {
          data: dashboard,
          onOpenAppointment: handleOpenAppointment,
          onOpenProfile: openProfile,
          onCreateAppointment: handleCreateAppointment
        });
      case 'tables':
      case 'barbers':
      case 'services':
        return /*#__PURE__*/React.createElement(TablesWorkspace, {
          apiRequest: apiRequest,
          sharedOptions: optionsCache,
          onOptionsUpdate: setOptionsCache,
          onOpenProfile: openProfile,
          onOpenAppointmentRecord: handleOpenAppointment,
          clients: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.clients) || [],
          currentUser: session || null,
          liveAppointments: (realtimeSnapshot === null || realtimeSnapshot === void 0 ? void 0 : realtimeSnapshot.rows) || null,
          liveUpdatedAt: (realtimeSnapshot === null || realtimeSnapshot === void 0 ? void 0 : realtimeSnapshot.updatedAt) || null,
          barbers: barbers,
          services: services,
          onBarberFieldChange: handleBarberFieldChange,
          onSaveBarber: handleSaveBarber,
          onAddBarber: handleAddBarber,
          onDeleteBarber: handleDeleteBarber,
          onServiceFieldChange: handleServiceFieldChange,
          onServicePriceChange: handleServicePriceChange,
          onDeleteService: handleDeleteService,
          onAddService: handleAddService,
          onActiveTableChange: handleActiveTableSync,
          preferredTable: preferredTableTarget,
          onPreferredTableConsumed: handlePreferredTableConsumed,
          onRequestConfirm: requestConfirm
        });
      case 'bot':
        return /*#__PURE__*/React.createElement(BotControlView, {
          status: botStatus,
          settings: botSettings,
          backups: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.backups) || [],
          messages: botMessages,
          onToggleEnabled: handleBotToggle,
          onStart: function onStart() {
            return handleBotAction('start');
          },
          onStop: function onStop() {
            return handleBotAction('stop');
          },
          onRestart: function onRestart() {
            return handleBotAction('restart');
          },
          onSaveSettings: handleSaveSettings,
          onSaveMessage: function onSaveMessage(id, draft, persist) {
            return handleSaveMessage(id, draft, persist);
          },
          onRestoreBackup: handleRestoreBackup,
          onCreateBackup: handleCreateBackup,
          onDeleteBackup: handleDeleteBackup,
          licenseStatus: licenseStatus,
          updateInfo: updateInfo,
          onRefreshUpdate: handleRefreshUpdate,
          onApplyUpdate: handleApplyUpdate,
          systemBusy: systemBusy,
          viewMode: "bot"
        });
      case 'system':
        return /*#__PURE__*/React.createElement(BotControlView, {
          status: botStatus,
          settings: botSettings,
          backups: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.backups) || [],
          messages: botMessages,
          onToggleEnabled: handleBotToggle,
          onStart: function onStart() {
            return handleBotAction('start');
          },
          onStop: function onStop() {
            return handleBotAction('stop');
          },
          onRestart: function onRestart() {
            return handleBotAction('restart');
          },
          onSaveSettings: handleSaveSettings,
          onSaveMessage: function onSaveMessage(id, draft, persist) {
            return handleSaveMessage(id, draft, persist);
          },
          onRestoreBackup: handleRestoreBackup,
          onCreateBackup: handleCreateBackup,
          onDeleteBackup: handleDeleteBackup,
          licenseStatus: licenseStatus,
          updateInfo: updateInfo,
          onRefreshUpdate: handleRefreshUpdate,
          onApplyUpdate: handleApplyUpdate,
          systemBusy: systemBusy,
          viewMode: "system"
        });
      default:
        return /*#__PURE__*/React.createElement(BotControlView, {
          status: botStatus,
          settings: botSettings,
          backups: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.backups) || [],
          messages: botMessages,
          onToggleEnabled: handleBotToggle,
          onStart: function onStart() {
            return handleBotAction('start');
          },
          onStop: function onStop() {
            return handleBotAction('stop');
          },
          onRestart: function onRestart() {
            return handleBotAction('restart');
          },
          onSaveSettings: handleSaveSettings,
          onSaveMessage: function onSaveMessage(id, draft, persist) {
            return handleSaveMessage(id, draft, persist);
          },
          onRestoreBackup: handleRestoreBackup,
          onCreateBackup: handleCreateBackup,
          onDeleteBackup: handleDeleteBackup,
          licenseStatus: licenseStatus,
          updateInfo: updateInfo,
          onRefreshUpdate: handleRefreshUpdate,
          onApplyUpdate: handleApplyUpdate,
          systemBusy: systemBusy,
          viewMode: "bot"
        });
    }
  };
  if (fatalError) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 p-6 text-center text-white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg space-y-3 rounded-2xl border border-rose-500/50 bg-slate-900/80 p-6 shadow-2xl"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-semibold text-rose-200"
    }, "\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-300"
    }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0443. \u041F\u043E\u0441\u043B\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."), /*#__PURE__*/React.createElement("pre", {
      className: "overflow-x-auto rounded-xl bg-slate-950/80 p-4 text-left text-xs text-rose-200"
    }, fatalError)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return window.location.reload();
      },
      className: "rounded-lg border border-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-800"
    }, "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-slate-900 text-white"
  }, isMobile && /*#__PURE__*/React.createElement(MobileTabs, {
    activeTab: activeTab,
    onChange: setActiveTab,
    session: session,
    onLogout: handleLogout,
    liveUpdatedAt: liveUpdatedAt,
    liveStatus: connectionStatus
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    session: session,
    activeTab: activeTab,
    onChange: setActiveTab,
    onLogout: handleLogout,
    liveUpdatedAt: liveUpdatedAt,
    liveStatus: connectionStatus,
    activeDataTable: activeDataTable,
    onSelectTable: handleSidebarTableChange
  }), /*#__PURE__*/React.createElement("main", {
    className: mainClassName
  }, globalError && /*#__PURE__*/React.createElement(ErrorBanner, {
    message: globalError
  }), renderActive())), /*#__PURE__*/React.createElement(ProfileModal, {
    state: profileModal,
    onClose: function onClose() {
      return setProfileModal({
        open: false,
        data: null,
        loading: false
      });
    }
  }), /*#__PURE__*/React.createElement(AppointmentModal, {
    open: appointmentModal.open,
    appointment: appointmentModal.data,
    options: appointmentModal.options || optionsCache || {},
    onClose: function onClose() {
      return setAppointmentModal(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          open: false,
          data: null,
          isNew: false,
          allowDelete: false
        });
      });
    },
    onSave: handleSaveAppointment,
    isNew: appointmentModal.isNew,
    clients: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.clients) || [],
    canDelete: appointmentModal.allowDelete,
    onDelete: appointmentModal.allowDelete ? handleDeleteAppointment : null
  }), /*#__PURE__*/React.createElement(ConfirmDialog, _extends({}, confirmDialog, {
    onResult: handleConfirmResult
  })));
};
var reactAppRoot = null;
var renderApp = function renderApp() {
  var rootElement = document.getElementById('root');
  try {
    if (!rootElement) {
      throw new Error('Не найден контейнер #root');
    }
    if (!reactAppRoot) {
      reactAppRoot = typeof createRoot === 'function' ? createRoot(rootElement) : {
        render: function render(node) {
          return ReactDOM.render(node, rootElement);
        }
      };
    }
    reactAppRoot.render(/*#__PURE__*/React.createElement(App, null));
  } catch (error) {
    console.error('Fatal render error:', error);
    if (rootElement) {
      rootElement.innerHTML = "\n        <div style=\"\n          min-height:100vh;\n          display:flex;\n          flex-direction:column;\n          align-items:center;\n          justify-content:center;\n          gap:16px;\n          background-color:#020617;\n          color:#fff;\n          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n          padding:24px;\n          text-align:center;\n        \">\n          <div style=\"max-width:480px;border:1px solid rgba(248,113,113,0.4);background:rgba(15,23,42,0.85);border-radius:16px;padding:24px;\">\n            <p style=\"font-size:18px;font-weight:600;color:#fecaca;margin-bottom:12px;\">\n              \u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\n            </p>\n            <p style=\"font-size:14px;color:#cbd5f5;white-space:pre-wrap;\">\n              ".concat((error === null || error === void 0 ? void 0 : error.message) || 'Смотрите консоль браузера (F12)', "\n            </p>\n          </div>\n          <button style=\"\n            border:1px solid #4b5563;\n            background:transparent;\n            color:#fff;\n            border-radius:999px;\n            padding:8px 20px;\n            cursor:pointer;\n          \" onclick=\"window.location.reload()\">\n            \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\n          </button>\n        </div>\n      ");
    }
  }
};
renderApp();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX1JlYWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsIkZyYWdtZW50IiwiX1JlYWN0RE9NIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJjcmVhdGVSb290IiwicmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25jYXQiLCJERUZBVUxUX0FQSV9CQVNFX1VSTCIsIkFQSV9CQVNFX1VSTCIsIl9fQkFSQkVSX0FQSV9CQVNFX18iLCJWSUVXX1RBQlMiLCJpZCIsImxhYmVsIiwiVEFCTEVfT1JERVIiLCJWSVNJQkxFX1RBQkxFX09SREVSIiwidGFibGUiLCJEQVRBX1RBQkxFUyIsIlRBQkxFX0NPTkZJRyIsIkFwcG9pbnRtZW50cyIsIm1vZGUiLCJjYW5DcmVhdGUiLCJzdXBwb3J0c0JhcmJlckZpbHRlciIsInN1cHBvcnRzU3RhdHVzRmlsdGVyIiwiZGVmYXVsdFNvcnQiLCJrZXkiLCJkaXJlY3Rpb24iLCJTY2hlZHVsZXMiLCJVc2VycyIsIkJhcmJlcnMiLCJTZXJ2aWNlcyIsIkRBVEFfU0hPUlRDVVRTIiwibWFwIiwidGFibGVJZCIsIl9UQUJMRV9DT05GSUckdGFibGVJZCIsIlRBQkxFX0NPTFVNTlMiLCJlZGl0YWJsZSIsInR5cGUiLCJpc1Byb2ZpbGVMaW5rIiwibWluV2lkdGgiLCJvcHRpb25zS2V5Iiwibm9XcmFwIiwiYWxpZ24iLCJSQVRJTkdfTUlOIiwiUkFUSU5HX01BWCIsIlJBVElOR19TVEVQIiwiYXZhdGFyT3B0aW9uc0NhY2hlIiwiWUVBUl9JTl9NUyIsIkRBWV9JTl9NUyIsImJ1aWxkTmV3QmFyYmVyU3RhdGUiLCJwYXNzd29yZCIsInJhdGluZyIsImNvbG9yIiwiYXZhdGFyVXJsIiwiZGVzY3JpcHRpb24iLCJwaG9uZSIsInRlbGVncmFtSWQiLCJpc0FjdGl2ZSIsImJ1aWxkTmV3U2VydmljZVN0YXRlIiwiZHVyYXRpb24iLCJwcmljZXMiLCJBQ1RJVkVfQkFSQkVSX0xBQkVMIiwiZnJvbUNoYXJDb2RlIiwiSElEREVOX0JBUkJFUl9MQUJFTCIsIkFDVElWRV9TRVJWSUNFX0xBQkVMIiwiSElEREVOX1NFUlZJQ0VfTEFCRUwiLCJidWlsZFZpc2l0SGlzdG9yeSIsImFwcG9pbnRtZW50cyIsInVuZGVmaW5lZCIsImN1dG9mZiIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJhcHB0Iiwic3RhcnREYXRlIiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJUaW1lIiwic3RhcnREYXRlVGltZSIsImdldFRpbWUiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwiU3RhdHVzIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNvcnQiLCJiIiwiaW5kZXgiLCJvcmRlck51bWJlciIsImRhdGVMYWJlbCIsImZvcm1hdERhdGVUaW1lIiwiZGVmYXVsdENvbmZpcm1TdGF0ZSIsIm9wZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtTGFiZWwiLCJjYW5jZWxMYWJlbCIsInRvbmUiLCJnZXRSZWNvcmRJZCIsInJlY29yZCIsIklkIiwiSUQiLCJyZWNvcmRJZCIsIklEX1JlY29yZCIsImNsYXNzTmFtZXMiLCJfbGVuIiwiY2xhc3NlcyIsIl9rZXkiLCJCb29sZWFuIiwiam9pbiIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVyIiwicHJldiIsIm5leHRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VOb3dUaWNrIiwiaW50ZXJ2YWxNcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0Tm93IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEF2YXRhck9wdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwicGF5bG9hZCIsImltYWdlcyIsIl9jb250ZXh0IiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIm5vcm1hbGl6ZUltYWdlUGF0aCIsIlNldCIsIm5vcm1hbGl6ZVRleHQiLCJpc1ZhbGlkRGF0ZSIsImlzTmFOIiwicmVzb2x2ZUFzc2V0VXJsIiwibm9ybWFsaXplZCIsInRyaW0iLCJzdGFydHNXaXRoIiwic2FuaXRpemVkIiwicmVwbGFjZSIsInJlc29sdmVkIiwibnVtYmVyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdEN1cnJlbmN5IiwibnVtZXJpYyIsImlzRmluaXRlIiwiZm9ybWF0IiwicGx1cmFsaXplIiwiY291bnQiLCJfcmVmMiIsIl9yZWYzIiwib25lIiwiZmV3IiwibWFueSIsIm1vZDEwIiwibW9kMTAwIiwiY2Fub25pY2FsaXplTmFtZSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiYmFyYmVySWQiLCJwaWNrQmFyYmVyRm9yVXNlciIsInVzZXJTZXNzaW9uIiwiYXZhaWxhYmxlQmFyYmVycyIsImZhbGxiYWNrIiwiY2FuZGlkYXRlcyIsInByZWZlcnJlZE5hbWUiLCJjYW5kaWRhdGUiLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZWRPcHRpb25zIiwiYmFyYmVyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIl9sb29wIiwibWF0Y2hJbmRleCIsImZpbmRJbmRleCIsIm9wdGlvbiIsIl9yZXQiLCJzIiwiZXJyIiwiZm9ybWF0RGF0ZSIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0VGltZSIsInNhZmVWYWx1ZSIsImluY2x1ZGVzIiwic3BsaXQiLCJmb3JtYXRQaG9uZUlucHV0IiwiZGlnaXRzIiwiZm9ybWF0VGVsZWdyYW1IYW5kbGUiLCJoYW5kbGUiLCJidWlsZFRlbGVncmFtTGluayIsImRhdGUiLCJ0aW1lIiwiZGF0ZVBhcnQiLCJ0aW1lUGFydCIsImJhY2t1cERhdGVGb3JtYXR0ZXIiLCJob3VyIiwibWludXRlIiwicGFyc2VCYWNrdXBUaW1lc3RhbXAiLCJmaWxlbmFtZSIsIm1hdGNoIiwiX21hdGNoIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImlzb0NhbmRpZGF0ZSIsInBhcnNlZCIsImZvcm1hdEJhY2t1cExhYmVsIiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwicGFkU3RhcnQiLCJ0b0xvY2FsZVN0cmluZyIsIlNUQVRVU19UUkFOU0xBVElPTlMiLCJhY3RpdmUiLCJjb25maXJtIiwiY29uZmlybWVkIiwiY29tcGxldGUiLCJmaW5pc2hlZCIsImNhbmNlbCIsImNhbmNlbGVkIiwiY2FuY2VsbGVkIiwibm9zaG93IiwibWlzc2VkIiwicGVuZGluZyIsIndhaXQiLCJ3YWl0aW5nIiwicHJvY2Vzc2luZyIsIlNUQVRVU19CQURHRV9NQVAiLCLQkNC60YLQuNCy0L3QsNGPIiwi0J/QvtC00YLQstC10YDQttC00LXQvdCwIiwi0JfQsNCy0LXRgNGI0LXQvdCwIiwi0J7RgtC80LXQvdC10L3QsCIsImdldFN0YXR1c0JhZGdlQ2xhc3NlcyIsInN0YXR1cyIsIm5vcm1hbGl6ZVN0YXR1c1ZhbHVlIiwiSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyIsIkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQ09NUExFVEVEX1NUQVRVU19UT0tFTlMiLCJ0cmFuc2xhdGVkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVTdGF0dXNMaXN0Iiwic3RhdHVzZXMiLCJzZWVuIiwiaGFzIiwiYWRkIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJwYXJzZVRpbWVSYW5nZVZhbHVlIiwic2FmZSIsInN0YXJ0IiwiZW5kIiwiX3NhZmUkc3BsaXQkbWFwIiwicGFydCIsIl9zYWZlJHNwbGl0JG1hcDIiLCJyYXdTdGFydCIsIl9zYWZlJHNwbGl0JG1hcDIkIiwicmF3RW5kIiwicGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImJ1aWxkVGltZVJhbmdlVmFsdWUiLCJzYWZlU3RhcnQiLCJzYWZlRW5kIiwiX3JlZjQiLCJfcmVmNSIsInRvIiwiZXh0cmFjdFRpbWVTdGFydCIsImRhdGVWYWx1ZSIsInRpbWVWYWx1ZSIsImZhbGxiYWNrSXNvIiwicGFyc2VkRmFsbGJhY2siLCJnZXRBcHBvaW50bWVudEVuZERhdGUiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImVuZFRva2VuIiwiYmFzZURhdGVQYXJ0IiwidG9JU09TdHJpbmciLCJyZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUiLCJhcHBvaW50bWVudCIsInJlc29sdmVBcHBvaW50bWVudEVuZERhdGUiLCJlbmREYXRlIiwic2hvdWxkRGlzcGxheUFwcG9pbnRtZW50IiwiaXNBcHBvaW50bWVudE9uZ29pbmciLCJzdGFydFRzIiwiZW5kVHMiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjYiLCJfcmVmNiRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY3IiwiVmlzaXRIaXN0b3J5TGlzdCIsIl9yZWY4IiwiX3JlZjgkdmlzaXRzIiwidmlzaXRzIiwiX3JlZjgkbG9hZGluZyIsImxvYWRpbmciLCJfcmVmOCRlcnJvciIsIl9yZWY4JGVtcHR5TWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9yZWY4JG1heEhlaWdodENsYXNzIiwibWF4SGVpZ2h0Q2xhc3MiLCJfcmVmOCRzaG93U3VtbWFyeSIsInNob3dTdW1tYXJ5IiwidmlzaXQiLCJCYXJiZXIiLCJTZWN0aW9uQ2FyZCIsIl9yZWY5IiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiTGl2ZUJhZGdlIiwiX3JlZjAiLCJ0aW1lc3RhbXAiLCJfcmVmMCRzdGF0dXMiLCJ0aWNraW5nTm93IiwiaXNPZmZsaW5lIiwiaXNPbmxpbmUiLCJ0aW1lTGFiZWwiLCJJY29uVHJhc2giLCJfcmVmMSIsIl9yZWYxJGNsYXNzTmFtZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwiSWNvbkRhc2hib2FyZCIsIl9yZWYxMCIsIl9yZWYxMCRjbGFzc05hbWUiLCJJY29uRGF0YSIsIl9yZWYxMSIsIl9yZWYxMSRjbGFzc05hbWUiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJyeCIsIkljb25Cb3QiLCJfcmVmMTIiLCJfcmVmMTIkY2xhc3NOYW1lIiwiY3giLCJjeSIsIkljb25TeXN0ZW0iLCJfcmVmMTMiLCJfcmVmMTMkY2xhc3NOYW1lIiwiSWNvbkRvdHMiLCJfcmVmMTQiLCJfcmVmMTQkY2xhc3NOYW1lIiwiVklFV19UQUJfSUNPTlMiLCJkYXNoYm9hcmQiLCJ0YWJsZXMiLCJib3QiLCJzeXN0ZW0iLCJVSV9URVhUIiwiZnJlZXplIiwiYWNjb3VudFRpdGxlIiwibG9nb3V0IiwibmV3QXBwb2ludG1lbnRDdGEiLCJsaXZlRmFsbGJhY2siLCJNb2RhbCIsIl9yZWYxNSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb290ZXIiLCJfcmVmMTUkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiQ29uZmlybURpYWxvZyIsIl9yZWYxNiIsIl9yZWYxNiRjb25maXJtTGFiZWwiLCJfcmVmMTYkY2FuY2VsTGFiZWwiLCJfcmVmMTYkdG9uZSIsIm9uUmVzdWx0IiwiY29uZmlybVRvbmVDbGFzcyIsIlN0YXRDYXJkIiwiX3JlZjE3IiwiX3JlZjE3JGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMTgiLCJzZXNzaW9uIiwiYWN0aXZlVGFiIiwib25DaGFuZ2UiLCJvbkxvZ291dCIsImxpdmVVcGRhdGVkQXQiLCJfcmVmMTgkbGl2ZVN0YXR1cyIsImxpdmVTdGF0dXMiLCJfcmVmMTgkYWN0aXZlRGF0YVRhYmwiLCJhY3RpdmVEYXRhVGFibGUiLCJvblNlbGVjdFRhYmxlIiwidGFiIiwic2hvcnRjdXQiLCJpc1Nob3J0Y3V0QWN0aXZlIiwiZGlzYWJsZWQiLCJNb2JpbGVUYWJzIiwiX3JlZjE5IiwiX3JlZjE5JGxpdmVTdGF0dXMiLCJoYW5kbGVTZWxlY3QiLCJ0YWJJZCIsInJlbmRlckxpdmVJbmRpY2F0b3IiLCJJY29uQ29tcG9uZW50IiwiRGFzaGJvYXJkVmlldyIsIl9yZWYyMCIsIl9kYXRhJGFwcG9pbnRtZW50cyIsIl9zdGF0cyR0b3RhbFVzZXJzIiwiX3N0YXRzJGFjdGl2ZUFwcG9pbnRtIiwiX3N0YXRzJGNvbmZpcm1lZFllYXIiLCJfc3RhdHMkdG9kYXlzQXBwb2ludG0iLCJkYXRhIiwib25PcGVuQXBwb2ludG1lbnQiLCJvbk9wZW5Qcm9maWxlIiwib25DcmVhdGVBcHBvaW50bWVudCIsInN0YXRzIiwidXBjb21pbmdSYXciLCJ1cGNvbWluZyIsInVwY29taW5nTGlzdCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDIiLCJsZWZ0IiwiTUFYX1NBRkVfSU5URUdFUiIsInJpZ2h0IiwiZm9ybWF0R3JvdXBMYWJlbCIsIl91bnVzZWQiLCJncm91cGVkVXBjb21pbmciLCJncm91cHMiLCJNYXAiLCJidWNrZXQiLCJnZXQiLCJzZXQiLCJlbnRyaWVzIiwiX3JlZjIxIiwiX3JlZjIyIiwiaXRlbXMiLCJzb3J0VmFsdWUiLCJtaW4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQzIiwidXBjb21pbmdBY3Rpb25zIiwidG90YWxVc2VycyIsImFjdGl2ZUFwcG9pbnRtZW50cyIsImNvbmZpcm1lZFllYXIiLCJ0b2RheXNBcHBvaW50bWVudHMiLCJncm91cCIsImluUHJvZ3Jlc3MiLCJjYXJkUHJvcHMiLCJyb2xlIiwidGFiSW5kZXgiLCJhbGxvd0RlbGV0ZSIsIm9uS2V5RG93biIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzMiIsInN0YXR1c0xhYmVsIiwic2VydmljZXNMaXN0IiwiX2V4dGVuZHMiLCJDdXN0b21lck5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXJ2aWNlIiwiQmFyYmVyQXZhdGFyUGlja2VyIiwiX3JlZjIzIiwibG9hZE9wdGlvbnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImF2YXRhck9wdGlvbnMiLCJzZXRBdmF0YXJPcHRpb25zIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzaG93R2FsbGVyeSIsInNldFNob3dHYWxsZXJ5Iiwibm9ybWFsaXplZFZhbHVlIiwiYXZhaWxhYmxlT3B0aW9ucyIsImlzTW91bnRlZCIsImxvYWQiLCJfcmVmMjQiLCJfY2FsbGVlMiIsImxvYWRlciIsImFzc2V0c1BheWxvYWQiLCJhc3NldHMiLCJfdCIsIl9jb250ZXh0MiIsInByZXZpZXdTcmMiLCJzcmMiLCJhbHQiLCJwcmVzZXQiLCJpc1NlbGVjdGVkIiwiREFZX0lOREVYX0xPT0tVUCIsImZ1bGwiLCJzaG9ydCIsImdldERheUluZGV4IiwiZm9ybWF0U2NoZWR1bGVEYXlTaG9ydCIsImZhbGxiYWNrRGF5Iiwic2FmZURhdGUiLCJfdW51c2VkMiIsIm5vcm1hbGl6ZWRGYWxsYmFjayIsImZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsIiwiX3VudXNlZDMiLCJpc1RvZGF5RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwYXJzZVNsb3RUaW1lTWludXRlcyIsImdldFNjaGVkdWxlU29ydFZhbHVlIiwic2xvdCIsIldlZWsiLCJiYXNlIiwiZGF5SW5kZXgiLCJEYXlPZldlZWsiLCJSYXRpbmdTbGlkZXIiLCJfcmVmMjUiLCJfcmVmMjUkZGVuc2UiLCJkZW5zZSIsInJhdGluZ1ZhbHVlIiwidG9GaXhlZCIsIndyYXBwZXJDbGFzcyIsImxhYmVsQ2xhc3MiLCJzdGVwIiwiQmFyYmVyc1ZpZXciLCJfcmVmMjYiLCJfd29ya2luZ0JhcmJlciRuYW1lIiwiX3dvcmtpbmdCYXJiZXIkcGFzc3dvIiwiX3JlZjI2JGJhcmJlcnMiLCJiYXJiZXJzIiwiX3JlZjI2JHNjaGVkdWxlcyIsInNjaGVkdWxlcyIsImxvYWRBdmF0YXJPcHRpb25zIiwib25GaWVsZENoYW5nZSIsIm9uU2F2ZSIsIm9uQWRkIiwib25EZWxldGUiLCJvblNjaGVkdWxlVXBkYXRlIiwiX3VzZVN0YXRlMSIsInRhcmdldElkIiwiX3VzZVN0YXRlMTAiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImRyYWZ0QmFyYmVyIiwic2V0RHJhZnRCYXJiZXIiLCJvcGVuRWRpdG9yIiwiY2xvc2VFZGl0b3IiLCJpc0NyZWF0ZU1vZGUiLCJhY3RpdmVCYXJiZXIiLCJmaW5kIiwid29ya2luZ0JhcmJlciIsIndvcmtpbmdCYXJiZXJTY2hlZHVsZSIsImhhbmRsZUZpZWxkQ2hhbmdlIiwiZmllbGQiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGVsZXRlIiwicmVzdWx0IiwicmVuZGVyU3RhdHVzQmFkZ2UiLCJjYW5TdWJtaXQiLCJoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZSIsIl9yZWYyNyIsIl9jYWxsZWUzIiwic2xvdElkIiwiX2NvbnRleHQzIiwiX3giLCJfeDIiLCJhdmF0YXJTcmMiLCJwaG9uZUxhYmVsIiwicmF0aW5nTGFiZWwiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJkYXlMYWJlbCIsImlzVG9kYXlTbG90IiwiVGltZVJhbmdlUGlja2VyIiwiYnV0dG9uQ2xhc3NOYW1lIiwiU2VydmljZXNWaWV3IiwiX3JlZjI4IiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUyIiwiX3dvcmtpbmdTZXJ2aWNlJGR1cmF0IiwiX3JlZjI4JHNlcnZpY2VzIiwic2VydmljZXMiLCJfcmVmMjgkYmFyYmVycyIsIm9uUHJpY2VDaGFuZ2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImRyYWZ0U2VydmljZSIsInNldERyYWZ0U2VydmljZSIsImFjdGl2ZVNlcnZpY2UiLCJ3b3JraW5nU2VydmljZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUiLCJoYW5kbGVEZWxldGVMb2NhbCIsInNlcnZpY2VQcmljZVN1bW1hcnkiLCJkZXRhaWxzIiwidmFsdWVzIiwiX3NlcnZpY2UkcHJpY2VzIiwicHJpY2UiLCJzdW1tYXJ5IiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlIiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlMiIsIk11bHRpU2VsZWN0Q2VsbCIsIl9yZWYyOSIsIl9yZWYyOSRvcHRpb25zIiwib25Db21taXQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJkcmFmdCIsInNldERyYWZ0IiwiYW5jaG9yUmVmIiwiX3VzZVN0YXRlMjEiLCJ0b3AiLCJfdXNlU3RhdGUyMiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVQb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJuZXh0TGVmdCIsImlubmVyV2lkdGgiLCJuZXh0VG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJ0b2dnbGVPcHRpb24iLCJzdHlsZSIsImNoZWNrZWQiLCJib2R5IiwiX3JlZjMwIiwiX3JlZjMwJHRpdGxlIiwiX3JlZjMwJHBsYWNlaG9sZGVyIiwiX3JlZjMwJGJ1dHRvbkNsYXNzTmFtIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJfdXNlU3RhdGUyNiQiLCJub3JtYWxpemVIb3VyVmFsdWUiLCJpbnB1dFZhbHVlIiwiX2lucHV0VmFsdWUkc3BsaXQiLCJfaW5wdXRWYWx1ZSRzcGxpdDIiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xlYXIiLCJFZGl0YWJsZUNlbGwiLCJfcmVmMzEiLCJjb2x1bW4iLCJvblVwZGF0ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJjb21taXQiLCJvcHRpb25MaXN0Iiwib25CbHVyIiwiQ29sdW1uTWVudSIsIl9yZWYzMiIsImNvbHVtbnMiLCJfcmVmMzIkaGlkZGVuQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJvblRvZ2dsZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJNdWx0aVNlbGVjdENoZWNrYm94ZXMiLCJfcmVmMzMiLCJfcmVmMzMkb3B0aW9ucyIsIl9yZWYzMyR2YWx1ZSIsIl9yZWYzMyRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VsZWN0ZWQiLCJub3JtYWxpemVkUXVlcnkiLCJmaWx0ZXJlZCIsInRvZ2dsZSIsImV4aXN0cyIsIkNsaWVudExvb2t1cElucHV0IiwiX3JlZjM0IiwiX3JlZjM0JGxhYmVsIiwiX3JlZjM0JHZhbHVlIiwiX3JlZjM0JGNsaWVudHMiLCJjbGllbnRzIiwib25TZWxlY3RDbGllbnQiLCJfcmVmMzQkcGxhY2Vob2xkZXIiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImNvbnRhaW5lclJlZiIsIm1hdGNoZXMiLCJzaG9ydGxpc3QiLCJjbGllbnQiLCJvbkZvY3VzIiwib25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0YXR1c01lbnUiLCJfcmVmMzUiLCJfcmVmMzUkc3RhdHVzZXMiLCJfcmVmMzUkaGlkZGVuU3RhdHVzZXMiLCJoaWRkZW5TdGF0dXNlcyIsIm9uUmVzZXQiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiVGFibGVUb29sYmFyIiwiX3JlZjM2Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZEJhcmJlciIsInNldFNlbGVjdGVkQmFyYmVyIiwiX3JlZjM2JGJhcmJlcnMiLCJfcmVmMzYkc3RhdHVzZXMiLCJfcmVmMzYkaGlkZGVuU3RhdHVzZXMiLCJ0b2dnbGVTdGF0dXMiLCJyZXNldFN0YXR1c2VzIiwiX3JlZjM2JGNvbHVtbnMiLCJfcmVmMzYkaGlkZGVuQ29sdW1ucyIsInRvZ2dsZUNvbHVtbiIsIm9uT3BlbkNyZWF0ZSIsIm9uUmVmcmVzaCIsInNob3dQYXN0QXBwb2ludG1lbnRzIiwic2V0U2hvd1Bhc3RBcHBvaW50bWVudHMiLCJfcmVmMzYkc3VwcG9ydHNHcm91cGkiLCJzdXBwb3J0c0dyb3VwaW5nIiwiX3JlZjM2JGdyb3VwQnlEYXRlIiwiZ3JvdXBCeURhdGUiLCJzZXRHcm91cEJ5RGF0ZSIsImNoaXBDbGFzcyIsImFsbG93TWFudWFsUmVmcmVzaCIsImlubGluZUNyZWF0ZUZvck1vYmlsZSIsInNob3dDb2x1bW5NZW51Iiwic3RhdHVzQ29udHJvbCIsImNvbHVtbkNvbnRyb2wiLCJwYXN0Q29udHJvbCIsImdyb3VwaW5nQ29udHJvbCIsImNvbnRyb2xPcmRlciIsIm5vZGUiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiY29udHJvbCIsImJ1aWxkQXBwb2ludG1lbnRHcm91cHMiLCJyZWNvcmRzIiwic29ydERpcmVjdGlvbiIsImJ1Y2tldHMiLCJjb21wYXJlIiwiX3JlZjM3IiwiX2dldEFwcG9pbnRtZW50U3RhcnRENiIsIl9yZWYzOCIsInNvcnRlZEl0ZW1zIiwiX2dldEFwcG9pbnRtZW50U3RhcnRENCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDUiLCJyZWZlcmVuY2UiLCJNSU5fU0FGRV9JTlRFR0VSIiwicmFuZG9tIiwicmVzb2x2ZVNvcnRWYWx1ZSIsInJvdyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDciLCJ0cyIsIlNvcnRJbmRpY2F0b3IiLCJfcmVmMzkiLCJTY2hlZHVsZXNCb2FyZCIsIl9yZWY0MCIsIl9yZWY0MCRyb3dzIiwiX3JlZjQwJGNvbHVtbnMiLCJ2aXNpYmxlS2V5cyIsImVkaXRhYmxlQ29sdW1ucyIsImdyb3VwZWRCeURhdGUiLCJfcmVmNDEiLCJfcmVmNDIiLCJzbG90cyIsInNvcnRlZFNsb3RzIiwibG9jYWxlQ29tcGFyZSIsIk5hTiIsImJhZGdlIiwiQXBwb2ludG1lbnRzTGlzdCIsIl9yZWY0MyIsIl9yZWY0MyRncm91cHMiLCJvbk9wZW4iLCJfcmVmNDMkY29sdW1ucyIsIl9yZWY0MyRoaWRkZW5Db2x1bW5zIiwidmlzaWJsZUNvbHVtbnMiLCJyZW5kZXJDb2x1bW5WYWx1ZSIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzMyIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzNCIsIkRhdGFUYWJsZSIsIl9yZWY0NCIsInNvcnRDb25maWciLCJvblNvcnQiLCJfcmVmNDQkZ3JvdXBCeURhdGUiLCJpc0FwcG9pbnRtZW50c1RhYmxlIiwiY2FuR3JvdXBBcHBvaW50bWVudHMiLCJncm91cGVkUm93cyIsIl92aXNpYmxlQ29sdW1ucyQiLCJjYXJkS2V5Iiwic29ydGFibGUiLCJjb2xTcGFuIiwiQ2xpZW50c0xpc3QiLCJfcmVmNDUiLCJfbW9kYWxTdGF0ZSRyZWNvcmQiLCJfcmVmNDUkY2xpZW50cyIsIl9yZWY0NSRiYXJiZXJzIiwiZmV0Y2hIaXN0b3J5Iiwib25SZXF1ZXN0Q29uZmlybSIsIl91c2VTdGF0ZTM5IiwiaGlzdG9yeSIsIl91c2VTdGF0ZTQwIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJiYXJiZXJPcHRpb25zIiwib3BlbkNsaWVudE1vZGFsIiwiX3JlZjQ2IiwiX2NhbGxlZTQiLCJwcm9maWxlIiwiX3QyIiwiX2NvbnRleHQ0IiwiTmFtZSIsIl94MyIsImNsb3NlQ2xpZW50TW9kYWwiLCJQaG9uZSIsIlRlbGVncmFtSUQiLCJfcmVmNDciLCJfY2FsbGVlNSIsIl9jb250ZXh0NSIsInNraXBDb25maXJtIiwiY2xpZW50TnVtYmVyIiwicGhvbmVEaXNwbGF5IiwidGVsZWdyYW1IYW5kbGUiLCJDcmVhdGVSZWNvcmRNb2RhbCIsIl9yZWY0OCIsInRhYmxlTmFtZSIsIl9yZWY0OCRjbGllbnRzIiwiX3JlZjQ4JGhpZGRlbkZpZWxkcyIsImhpZGRlbkZpZWxkcyIsImluaXRpYWxTdGF0ZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJpc0FwcG9pbnRtZW50c0NyZWF0ZSIsImhhbmRsZVN1Ym1pdCIsIl9yZWY0OSIsIl9yZWY1MCIsImhhbmRsZUNsaWVudEF1dG9GaWxsIiwicHJlZmVycmVkQmFyYmVyIiwiVXNlcklEIiwic2VsZWN0ZWRWYWx1ZXMiLCJQcm9maWxlTW9kYWwiLCJfcmVmNTEiLCJfc3RhdGUkZGF0YSIsIl9zdGF0ZSRkYXRhMiIsIl9zdGF0ZSRkYXRhMyIsIl9zdGF0ZSRkYXRhNCIsInN0YXRlIiwidmlzaXRIaXN0b3J5IiwidXNlciIsInBob25lSHJlZiIsInRlbGVncmFtSHJlZiIsImhyZWYiLCJyZWwiLCJCYWNrdXBzUGFuZWwiLCJfcmVmNTIiLCJfcmVmNTIkYmFja3VwcyIsImJhY2t1cHMiLCJvblJlc3RvcmUiLCJvbkNyZWF0ZSIsImJhY2t1cCIsIkFwcG9pbnRtZW50TW9kYWwiLCJfcmVmNTMiLCJfcmVmNTMkb3B0aW9ucyIsIl9yZWY1MyRjYW5EZWxldGUiLCJjYW5EZWxldGUiLCJfcmVmNTMkaXNOZXciLCJpc05ldyIsIl9yZWY1MyRjbGllbnRzIiwiYnVpbGREcmFmdCIsInVzZXJJZCIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJzZXJ2aWNlc1NlbGVjdGlvbiIsImFjdGlvbkJ1dHRvbkNsYXNzIiwiaGFuZGxlQ2hhbmdlIiwic3VibWl0RHJhZnQiLCJuZXh0RHJhZnQiLCJoYW5kbGVNYXJrQ29tcGxldGVkIiwiVGFibGVzV29ya3NwYWNlIiwiX3JlZjU0IiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUIiwiYXBpUmVxdWVzdCIsInNoYXJlZE9wdGlvbnMiLCJvbk9wdGlvbnNVcGRhdGUiLCJvbk9wZW5BcHBvaW50bWVudFJlY29yZCIsIl9yZWY1NCRjbGllbnRzIiwiX3JlZjU0JGN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXIiLCJfcmVmNTQkbGl2ZUFwcG9pbnRtZW4iLCJsaXZlQXBwb2ludG1lbnRzIiwiX3JlZjU0JGxpdmVVcGRhdGVkQXQiLCJfcmVmNTQkYmFyYmVycyIsIl9yZWY1NCRzZXJ2aWNlcyIsIm9uQmFyYmVyRmllbGRDaGFuZ2UiLCJvblNhdmVCYXJiZXIiLCJvbkFkZEJhcmJlciIsIm9uRGVsZXRlQmFyYmVyIiwib25TZXJ2aWNlRmllbGRDaGFuZ2UiLCJvblNlcnZpY2VQcmljZUNoYW5nZSIsIm9uRGVsZXRlU2VydmljZSIsIm9uQWRkU2VydmljZSIsIm9uQWN0aXZlVGFibGVDaGFuZ2UiLCJfcmVmNTQkcHJlZmVycmVkVGFibGUiLCJwcmVmZXJyZWRUYWJsZSIsIm9uUHJlZmVycmVkVGFibGVDb25zdW1lZCIsIl9yZWY1NCRvblJlcXVlc3RDb25maSIsIl91c2VMb2NhbFN0b3JhZ2UiLCJfdXNlTG9jYWxTdG9yYWdlMiIsImFjdGl2ZVRhYmxlIiwic2V0QWN0aXZlVGFibGUiLCJfdXNlU3RhdGU0NSIsInJlZHVjZSIsImFjYyIsIl91c2VTdGF0ZTQ2Iiwic2V0VGFibGVzIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImRyb3Bkb3duT3B0aW9ucyIsInNldERyb3Bkb3duT3B0aW9ucyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJ0YWJsZUVycm9yIiwic2V0VGFibGVFcnJvciIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJfdXNlTG9jYWxTdG9yYWdlMyIsIl91c2VMb2NhbFN0b3JhZ2U0IiwiX3VzZUxvY2FsU3RvcmFnZTUiLCJfdXNlTG9jYWxTdG9yYWdlNiIsInNldEhpZGRlblN0YXR1c2VzIiwiX3VzZUxvY2FsU3RvcmFnZTciLCJfdXNlTG9jYWxTdG9yYWdlOCIsImhpZGRlbkNvbHVtbnNNYXAiLCJzZXRIaWRkZW5Db2x1bW5zTWFwIiwiX3VzZUxvY2FsU3RvcmFnZTkiLCJfVEFCTEVfQ09ORklHJHRhYmxlIiwiX3VzZUxvY2FsU3RvcmFnZTAiLCJzb3J0Q29uZmlncyIsInNldFNvcnRDb25maWdzIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImNyZWF0ZU1vZGFsT3BlbiIsInNldENyZWF0ZU1vZGFsT3BlbiIsIl91c2VMb2NhbFN0b3JhZ2UxIiwiX3VzZUxvY2FsU3RvcmFnZTEwIiwiX3VzZUxvY2FsU3RvcmFnZTExIiwiX3VzZUxvY2FsU3RvcmFnZTEyIiwiZ3JvdXBBcHBvaW50bWVudHNCeURhdGUiLCJzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsImFwcG9pbnRtZW50VGVtcGxhdGUiLCJuZXh0VGFibGUiLCJldmVyeSIsImZldGNoVGFibGVzIiwiX2NhbGxlZTYiLCJyZXNwb25zZXMiLCJuZXh0VGFibGVzIiwicmF3T3B0aW9ucyIsIl90MyIsIl9jb250ZXh0NiIsImFsbCIsImN1cnJlbnRDb2x1bW5zIiwicHJvY2Vzc2VkUm93cyIsIl9UQUJMRV9DT05GSUckYWN0aXZlVDIiLCJzb3VyY2UiLCJjb2x1bW5EZWYiLCJoYW5kbGVTb3J0IiwiY29sdW1uS2V5IiwiaGlkZGVuIiwic2l6ZSIsImhhbmRsZVVwZGF0ZSIsIl9yZWY1NiIsIl9jYWxsZWU3IiwiX3JlZjU3Iiwib3ZlcnJpZGVUYWJsZUlkIiwibm9ybWFsaXplZERhdGEiLCJvcmlnaW5hbCIsIl9hcmdzNyIsIl90NCIsIl9jb250ZXh0NyIsImxpc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJfeDQiLCJfeDUiLCJfcmVmNTgiLCJfY2FsbGVlOCIsIl9yZWY1OSIsIl9yZWY1OSRza2lwQ29uZmlybSIsImNvbmZpcm1Db3B5IiwiX2FyZ3M4IiwiX3Q1IiwiX3Q2IiwiX2NvbnRleHQ4IiwiX3g2IiwiaGFuZGxlQ3JlYXRlUmVjb3JkIiwiX3JlZjYwIiwiX2NhbGxlZTkiLCJub3JtYWxpemVkUGF5bG9hZCIsIl90NyIsIl9jb250ZXh0OSIsImhlYWRlcnMiLCJfeDciLCJmZXRjaENsaWVudFByb2ZpbGUiLCJ0YWJsZVNldHRpbmdzIiwiaXNDdXN0b21UYWJsZSIsIl9UQUJMRV9DT05GSUckdGFibGUyIiwiX3JlZjYxIiwiQm90Q29udHJvbFZpZXciLCJfcmVmNjIiLCJzZXR0aW5ncyIsIl9yZWY2MiRiYWNrdXBzIiwiX3JlZjYyJG1lc3NhZ2VzIiwibWVzc2FnZXMiLCJvblRvZ2dsZUVuYWJsZWQiLCJvblN0YXJ0Iiwib25TdG9wIiwib25SZXN0YXJ0Iiwib25TYXZlU2V0dGluZ3MiLCJvblNhdmVNZXNzYWdlIiwib25SZXN0b3JlQmFja3VwIiwib25DcmVhdGVCYWNrdXAiLCJvbkRlbGV0ZUJhY2t1cCIsImxpY2Vuc2VTdGF0dXMiLCJ1cGRhdGVJbmZvIiwib25SZWZyZXNoVXBkYXRlIiwib25BcHBseVVwZGF0ZSIsInN5c3RlbUJ1c3kiLCJfcmVmNjIkdmlld01vZGUiLCJ2aWV3TW9kZSIsIl91c2VTdGF0ZTU3IiwiYm90RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU1OCIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNTkiLCJhYm91dFRleHQiLCJfdXNlU3RhdGU2MCIsImFib3V0Iiwic2V0QWJvdXQiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMyIiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zMyIsInZhbGlkIiwibGljZW5zZSIsIm93bmVyIiwiZXhwaXJlc0F0IiwibnVtYmVyIiwidmVyc2lvbiIsImNoZWNrZWRBdCIsImF2YWlsYWJsZSIsInJ1bm5pbmciLCJpc0JvdEVuYWJsZWQiLCJMb2dpblNjcmVlbiIsIl9yZWY2MyIsIm9uTG9naW4iLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwidmFsaWRhdGlvbkVycm9yIiwic2V0VmFsaWRhdGlvbkVycm9yIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsImxvZ2luT3B0aW9ucyIsInNldExvZ2luT3B0aW9ucyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJvcHRpb25zRXJyb3IiLCJzZXRPcHRpb25zRXJyb3IiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwibG9hZGluZ09wdGlvbnMiLCJzZXRMb2FkaW5nT3B0aW9ucyIsImZldGNoT3B0aW9ucyIsIl9yZWY2NCIsIl9jYWxsZWUwIiwiX3Q4IiwiX2NvbnRleHQwIiwic2VsZWN0RGlzYWJsZWQiLCJvblN1Ym1pdCIsIkFwcCIsIl91c2VTdGF0ZTczIiwic2F2ZWQiLCJfdXNlU3RhdGU3NCIsInNldFNlc3Npb24iLCJfdXNlTG9jYWxTdG9yYWdlMTMiLCJfdXNlTG9jYWxTdG9yYWdlMTQiLCJzZXRBY3RpdmVUYWIiLCJfdXNlU3RhdGU3NSIsIl91c2VTdGF0ZTc2IiwicGVuZGluZ1RhYmxlVmlldyIsInNldFBlbmRpbmdUYWJsZVZpZXciLCJfdXNlU3RhdGU3NyIsIl91bnVzZWQ0IiwiX3VzZVN0YXRlNzgiLCJzZXRBY3RpdmVEYXRhVGFibGUiLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwic2V0RGFzaGJvYXJkIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsInNldFNlcnZpY2VzIiwiX3VzZVN0YXRlODMiLCJfdXNlU3RhdGU4NCIsInNldEJhcmJlcnMiLCJfdXNlU3RhdGU4NSIsIl91c2VTdGF0ZTg2IiwiYm90U3RhdHVzIiwic2V0Qm90U3RhdHVzIiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsImJvdFNldHRpbmdzIiwic2V0Qm90U2V0dGluZ3MiLCJfdXNlU3RhdGU4OSIsIl91c2VTdGF0ZTkwIiwiYm90TWVzc2FnZXMiLCJzZXRCb3RNZXNzYWdlcyIsIl91c2VTdGF0ZTkxIiwiX3VzZVN0YXRlOTIiLCJzZXRMaWNlbnNlU3RhdHVzIiwiX3VzZVN0YXRlOTMiLCJfdXNlU3RhdGU5NCIsInNldFVwZGF0ZUluZm8iLCJfdXNlU3RhdGU5NSIsIl91c2VTdGF0ZTk2Iiwib3B0aW9uc0NhY2hlIiwic2V0T3B0aW9uc0NhY2hlIiwiX3VzZVN0YXRlOTciLCJfdXNlU3RhdGU5OCIsInByb2ZpbGVNb2RhbCIsInNldFByb2ZpbGVNb2RhbCIsIl91c2VTdGF0ZTk5IiwiX3VzZVN0YXRlMTAwIiwiYXBwb2ludG1lbnRNb2RhbCIsInNldEFwcG9pbnRtZW50TW9kYWwiLCJfdXNlU3RhdGUxMDEiLCJfdXNlU3RhdGUxMDIiLCJfdXNlU3RhdGUxMDMiLCJfdXNlU3RhdGUxMDQiLCJnbG9iYWxFcnJvciIsInNldEdsb2JhbEVycm9yIiwiX3VzZVN0YXRlMTA1IiwiX3VzZVN0YXRlMTA2IiwiYXV0aEVycm9yIiwic2V0QXV0aEVycm9yIiwiX3VzZVN0YXRlMTA3IiwiX3VzZVN0YXRlMTA4Iiwic2V0U3lzdGVtQnVzeSIsIl91c2VTdGF0ZTEwOSIsIl91c2VTdGF0ZTExMCIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJfdXNlU3RhdGUxMTEiLCJfdXNlU3RhdGUxMTIiLCJyZWFsdGltZVNuYXBzaG90Iiwic2V0UmVhbHRpbWVTbmFwc2hvdCIsIl91c2VTdGF0ZTExMyIsIl91c2VTdGF0ZTExNCIsImZhdGFsRXJyb3IiLCJzZXRGYXRhbEVycm9yIiwiX3VzZVN0YXRlMTE1IiwiX3VzZVN0YXRlMTE2IiwiY29uZmlybURpYWxvZyIsInNldENvbmZpcm1EaWFsb2ciLCJfdXNlU3RhdGUxMTciLCJfdXNlU3RhdGUxMTgiLCJjb25uZWN0aW9uU3RhdHVzIiwic2V0Q29ubmVjdGlvblN0YXR1cyIsImNvbmZpcm1SZXNvbHZlclJlZiIsInJlcXVlc3RDb25maXJtIiwiaGFuZGxlQ29uZmlybVJlc3VsdCIsImhhbmRsZVNpZGViYXJUYWJsZUNoYW5nZSIsImhhbmRsZUFjdGl2ZVRhYmxlU3luYyIsImhhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWQiLCJzZXJ2aWNlU2F2ZVRpbWVycyIsImNoZWNrU2VydmVyIiwiX3JlZjY1IiwiX2NhbGxlZTEiLCJfdDkiLCJfY29udGV4dDEiLCJjYWNoZSIsImludGVydmFsIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9yZWY2NiIsIl9jYWxsZWUxMCIsImVuZHBvaW50IiwiX29wdGlvbnMkaGVhZGVycyIsIl9hcmdzMTAiLCJfY29udGV4dDEwIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRleHQiLCJfeDgiLCJmZXRjaEFsbCIsIl9jYWxsZWUxMSIsIl9vdmVydmlldyRib3QiLCJvdmVydmlldyIsIndpdGhGYWxsYmFjayIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJzZXJ2aWNlc0Z1bGwiLCJiYXJiZXJzRnVsbCIsImJvdFN0YXRlIiwiYm90TWVzc2FnZXNQYXlsb2FkIiwidXBkYXRlIiwiX3QwIiwiX2NvbnRleHQxMSIsInJlcXVlc3QiLCJFdmVudFNvdXJjZSIsInRva2VuUGFyYW0iLCJzdHJlYW1VcmwiLCJldmVudFNvdXJjZSIsIm9ub3BlbiIsImhhbmRsZUV2ZW50IiwidXBkYXRlZEF0Iiwib25lcnJvciIsImNsb3NlIiwiX3ByZXYkYXBwb2ludG1lbnRzIiwibmV4dFN0YXRzIiwibmV4dEFwcG9pbnRtZW50cyIsImhhbmRsZUdsb2JhbEVycm9yIiwiZGV0YWlsIiwicmVhc29uIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXIiLCJoYW5kbGVMb2dpbiIsIl9yZWY2OCIsIl9jYWxsZWUxMiIsIm5vcm1hbGl6ZWRVc2VybmFtZSIsInNlc3Npb25QYXlsb2FkIiwiX3QxIiwiX2NvbnRleHQxMiIsInN1Y2Nlc3MiLCJfeDkiLCJfeDAiLCJoYW5kbGVCYXJiZXJGaWVsZENoYW5nZSIsIm5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkIiwiZnJvbUVudHJpZXMiLCJfcmVmNjkiLCJfcmVmNzAiLCJkZXJpdmVCYXJiZXJMb2dpbiIsImJhcmJlckRhdGEiLCJidWlsZEJhcmJlclBheWxvYWQiLCJfYmFyYmVyRGF0YSRvcmRlckluZGUiLCJmYWxsYmFja09yZGVyIiwibmlja25hbWUiLCJvcmRlckluZGV4IiwiaGFuZGxlU2F2ZUJhcmJlciIsIl9yZWY3MSIsIl9jYWxsZWUxMyIsInVwZGF0ZWRCYXJiZXIiLCJfdDEwIiwiX2NvbnRleHQxMyIsIl94MSIsImhhbmRsZURlbGV0ZUJhcmJlciIsIl9yZWY3MiIsIl9jYWxsZWUxNCIsIl90MTEiLCJfY29udGV4dDE0IiwiX3gxMCIsImhhbmRsZUFkZEJhcmJlciIsIl9yZWY3MyIsIl9jYWxsZWUxNSIsIm5ld0JhcmJlclBheWxvYWQiLCJfdDEyIiwiX2NvbnRleHQxNSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl94MTEiLCJoYW5kbGVTYXZlU2VydmljZSIsIl9yZWY3NCIsIl9jYWxsZWUxNiIsIl90MTMiLCJfY29udGV4dDE2IiwiX3gxMiIsInNjaGVkdWxlU2VydmljZUF1dG9zYXZlIiwidGltZXJzIiwiZXhpc3RpbmdUaW1lciIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGVTZXJ2aWNlIiwiX3JlZjc1IiwiX2NhbGxlZTE3IiwiX3QxNCIsIl9jb250ZXh0MTciLCJfeDEzIiwiaGFuZGxlQWRkU2VydmljZSIsIl9yZWY3NiIsIl9jYWxsZWUxOCIsIl90MTUiLCJfY29udGV4dDE4IiwiX3gxNCIsImhhbmRsZVNlcnZpY2VGaWVsZENoYW5nZSIsImhhbmRsZVNlcnZpY2VQcmljZUNoYW5nZSIsInNlcnZpY2VJZCIsImhhbmRsZUJvdFRvZ2dsZSIsIl9yZWY3NyIsIl9jYWxsZWUxOSIsImVuYWJsZWQiLCJfdDE2IiwiX2NvbnRleHQxOSIsIl94MTUiLCJoYW5kbGVCb3RBY3Rpb24iLCJfcmVmNzgiLCJfY2FsbGVlMjAiLCJhY3Rpb24iLCJfdDE3IiwiX2NvbnRleHQyMCIsIl94MTYiLCJoYW5kbGVTYXZlU2V0dGluZ3MiLCJfcmVmNzkiLCJfY2FsbGVlMjEiLCJfdDE4IiwiX2NvbnRleHQyMSIsIl94MTciLCJoYW5kbGVTYXZlTWVzc2FnZSIsIl9yZWY4MCIsIl9jYWxsZWUyMiIsInBlcnNpc3QiLCJfdDE5IiwiX2NvbnRleHQyMiIsImNvZGUiLCJfeDE4IiwiX3gxOSIsIl94MjAiLCJoYW5kbGVSZXN0b3JlQmFja3VwIiwiX3JlZjgxIiwiX2NhbGxlZTIzIiwiX3QyMCIsIl9jb250ZXh0MjMiLCJfeDIxIiwiaGFuZGxlQ3JlYXRlQmFja3VwIiwiX3JlZjgyIiwiX2NhbGxlZTI0IiwiX3QyMSIsIl9jb250ZXh0MjQiLCJoYW5kbGVEZWxldGVCYWNrdXAiLCJfcmVmODMiLCJfY2FsbGVlMjUiLCJfdDIyIiwiX2NvbnRleHQyNSIsIl94MjIiLCJmZXRjaENsaWVudEhpc3RvcnkiLCJfcmVmODQiLCJfY2FsbGVlMjYiLCJfY29udGV4dDI2IiwiX3gyMyIsIm9wZW5Qcm9maWxlIiwiX3JlZjg1IiwiX2NhbGxlZTI3IiwiX3QyMyIsIl9jb250ZXh0MjciLCJfeDI0IiwiZW5zdXJlT3B0aW9ucyIsIl9jYWxsZWUyOCIsIl9jb250ZXh0MjgiLCJoYW5kbGVPcGVuQXBwb2ludG1lbnQiLCJfcmVmODciLCJfY2FsbGVlMjkiLCJvcHRpb25zQ29uZmlnIiwiX2FyZ3MyOSIsIl9jb250ZXh0MjkiLCJfeDI1IiwiaGFuZGxlQ3JlYXRlQXBwb2ludG1lbnQiLCJfY2FsbGVlMzAiLCJfb3B0aW9ucyRzdGF0dXNlcyIsImRlZmF1bHRTdGF0dXMiLCJkZWZhdWx0QmFyYmVyIiwiX2NvbnRleHQzMCIsImhhbmRsZVNhdmVBcHBvaW50bWVudCIsIl9yZWY5MCIsIl9jYWxsZWUzMSIsIl9yZWY4OSIsIl90MjQiLCJfY29udGV4dDMxIiwiX3gyNiIsImhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IiwiX3JlZjkxIiwiX2NhbGxlZTMyIiwiX3QyNSIsIl9jb250ZXh0MzIiLCJfeDI3IiwiaGFuZGxlUmVmcmVzaFVwZGF0ZSIsIl9yZWY5MiIsIl9jYWxsZWUzMyIsImluZm8iLCJfdDI2IiwiX2NvbnRleHQzMyIsImhhbmRsZUFwcGx5VXBkYXRlIiwiX3JlZjkzIiwiX2NhbGxlZTM0IiwiX3QyNyIsIl9jb250ZXh0MzQiLCJwcmVmZXJyZWRUYWJsZVRhcmdldCIsIm1haW5DbGFzc05hbWUiLCJyZW5kZXJBY3RpdmUiLCJyZWxvYWQiLCJyZWFjdEFwcFJvb3QiLCJyZW5kZXJBcHAiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsic2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIu+7v2NvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0LCBGcmFnbWVudCB9ID0gUmVhY3Q7XHJcbmNvbnN0IHsgY3JlYXRlUG9ydGFsLCBjcmVhdGVSb290IH0gPSBSZWFjdERPTTtcclxuXHJcbmNvbnN0IHJlc29sdmVEZWZhdWx0QXBpQmFzZVVybCA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGlgO1xyXG4gIH1cclxuICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknO1xyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfQkFTRV9VUkwgPSByZXNvbHZlRGVmYXVsdEFwaUJhc2VVcmwoKTtcclxuY29uc3QgQVBJX0JBU0VfVVJMID0gd2luZG93Ll9fQkFSQkVSX0FQSV9CQVNFX18gfHwgREVGQVVMVF9BUElfQkFTRV9VUkw7XHJcbndpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fID0gQVBJX0JBU0VfVVJMO1xyXG5cclxuY29uc3QgVklFV19UQUJTID0gW1xyXG4gIHsgaWQ6ICdkYXNoYm9hcmQnLCBsYWJlbDogJ9Ce0LHQt9C+0YAnIH0sXHJcbiAgeyBpZDogJ3RhYmxlcycsIGxhYmVsOiAn0JTQsNC90L3Ri9C1JyB9LFxyXG4gIHsgaWQ6ICdib3QnLCBsYWJlbDogJ9CR0L7RgicgfSxcclxuICB7IGlkOiAnc3lzdGVtJywgbGFiZWw6ICfQodC40YHRgtC10LzQsCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRBQkxFX09SREVSID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJywgJ0JhcmJlcnMnLCAnU2VydmljZXMnXTtcclxuY29uc3QgVklTSUJMRV9UQUJMRV9PUkRFUiA9IFRBQkxFX09SREVSLmZpbHRlcigodGFibGUpID0+IHRhYmxlICE9PSAnU2NoZWR1bGVzJyk7XHJcbmNvbnN0IERBVEFfVEFCTEVTID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJ107XHJcblxyXG5jb25zdCBUQUJMRV9DT05GSUcgPSB7XHJcbiAgQXBwb2ludG1lbnRzOiB7IGxhYmVsOiAn0JfQsNC/0LjRgdC4JywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IHRydWUsIHN1cHBvcnRzQmFyYmVyRmlsdGVyOiB0cnVlLCBzdXBwb3J0c1N0YXR1c0ZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIFNjaGVkdWxlczogeyBsYWJlbDogJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IGZhbHNlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIFVzZXJzOiB7IGxhYmVsOiAn0JrQu9C40LXQvdGC0YsnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnTmFtZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIEJhcmJlcnM6IHsgbGFiZWw6ICfQkdCw0YDQsdC10YDRiycsIG1vZGU6ICdjdXN0b20nIH0sXHJcbiAgU2VydmljZXM6IHsgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBtb2RlOiAnY3VzdG9tJyB9LFxyXG59O1xyXG5jb25zdCBEQVRBX1NIT1JUQ1VUUyA9IFsnQXBwb2ludG1lbnRzJywgJ1VzZXJzJywgJ0JhcmJlcnMnLCAnU2VydmljZXMnXS5tYXAoKHRhYmxlSWQpID0+ICh7XHJcbiAgaWQ6IHRhYmxlSWQsXHJcbiAgbGFiZWw6IFRBQkxFX0NPTkZJR1t0YWJsZUlkXT8ubGFiZWwgfHwgdGFibGVJZCxcclxufSkpO1xyXG5cclxuY29uc3QgVEFCTEVfQ09MVU1OUyA9IHtcclxuICBBcHBvaW50bWVudHM6IFtcclxuICAgIHsga2V5OiAnQ3VzdG9tZXJOYW1lJywgbGFiZWw6ICfQmtC70LjQtdC90YInLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDgnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdiYXJiZXJzJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnZGF0ZScsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnVGltZScsIGxhYmVsOiAn0JLRgNC10LzRjycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yOCcsIG5vV3JhcDogdHJ1ZSB9LFxyXG4gICAgeyBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ9Ch0YLQsNGC0YPRgScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ3N0YXR1c2VzJywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctMjgnIH0sXHJcbiAgICB7IGtleTogJ1NlcnZpY2VzJywgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ211bHRpLXNlbGVjdCcsIG9wdGlvbnNLZXk6ICdzZXJ2aWNlcycsIG1pbldpZHRoOiAndy01NicgfSxcclxuICAgIHsga2V5OiAnVXNlcklEJywgbGFiZWw6ICdJRCDQutC70LjQtdC90YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yNCcgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LrQu9C40LXQvdGC0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaEJhcmJlclNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LHQsNGA0LHQtdGA0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICBdLFxyXG4gIFNjaGVkdWxlczogW1xyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdEYXlPZldlZWsnLCBsYWJlbDogJ9CU0LXQvdGMINC90LXQtNC10LvQuCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdXZWVrJywgbGFiZWw6ICfQodC70L7RgtGLJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxuICBVc2VyczogW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICfQmNC80Y8nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnVGVsZWdyYW1JRCcsIGxhYmVsOiAnVGVsZWdyYW0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JvRjtCx0LjQvNGL0Lkg0LzQsNGB0YLQtdGAJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnYmFyYmVycycsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUkFUSU5HX01JTiA9IDM7XHJcbmNvbnN0IFJBVElOR19NQVggPSA1O1xyXG5jb25zdCBSQVRJTkdfU1RFUCA9IDAuNTtcclxubGV0IGF2YXRhck9wdGlvbnNDYWNoZSA9IG51bGw7XHJcbmNvbnN0IFlFQVJfSU5fTVMgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5jb25zdCBEQVlfSU5fTVMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5jb25zdCBidWlsZE5ld0JhcmJlclN0YXRlID0gKCkgPT4gKHtcclxuICBuYW1lOiAnJyxcclxuICBwYXNzd29yZDogJycsXHJcbiAgcmF0aW5nOiAnNScsXHJcbiAgY29sb3I6ICcjNmQyOGQ5JyxcclxuICBhdmF0YXJVcmw6ICcnLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBwaG9uZTogJycsXHJcbiAgdGVsZWdyYW1JZDogJycsXHJcbiAgaXNBY3RpdmU6IHRydWUsXHJcbn0pO1xyXG5jb25zdCBidWlsZE5ld1NlcnZpY2VTdGF0ZSA9ICgpID0+ICh7XHJcbiAgbmFtZTogJycsXHJcbiAgZHVyYXRpb246IDYwLFxyXG4gIGlzQWN0aXZlOiB0cnVlLFxyXG4gIHByaWNlczoge30sXHJcbn0pO1xyXG5jb25zdCBBQ1RJVkVfQkFSQkVSX0xBQkVMID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDA0MTAsIDB4MDQzYSwgMHgwNDQyLCAweDA0MzgsIDB4MDQzMiwgMHgwNDM1LCAweDA0M2QpO1xyXG5jb25zdCBISURERU5fQkFSQkVSX0xBQkVMID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDA0MjEsIDB4MDQzYSwgMHgwNDQwLCAweDA0NGIsIDB4MDQ0Mik7XHJcbmNvbnN0IEFDVElWRV9TRVJWSUNFX0xBQkVMID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDA0MTAsIDB4MDQzYSwgMHgwNDQyLCAweDA0MzgsIDB4MDQzMiwgMHgwNDNkLCAweDA0MzApO1xyXG5jb25zdCBISURERU5fU0VSVklDRV9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDIxLCAweDA0M2EsIDB4MDQ0MCwgMHgwNDRiLCAweDA0NDIsIDB4MDQzMCk7XHJcbmNvbnN0IGJ1aWxkVmlzaXRIaXN0b3J5ID0gKGFwcG9pbnRtZW50cyA9IFtdKSA9PiB7XHJcbiAgaWYgKCFhcHBvaW50bWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgY29uc3QgY3V0b2ZmID0gRGF0ZS5ub3coKSAtIFlFQVJfSU5fTVM7XHJcbiAgY29uc3QgY29tcGxldGVkID0gYXBwb2ludG1lbnRzXHJcbiAgICAubWFwKChhcHB0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcHQuRGF0ZSwgYXBwdC5UaW1lLCBhcHB0LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gICAgICByZXR1cm4geyAuLi5hcHB0LCBzdGFydERhdGUgfTtcclxuICAgIH0pXHJcbiAgICAuZmlsdGVyKFxyXG4gICAgICAoYXBwdCkgPT5cclxuICAgICAgICBhcHB0LnN0YXJ0RGF0ZSAmJlxyXG4gICAgICAgIGFwcHQuc3RhcnREYXRlLmdldFRpbWUoKSA+PSBjdXRvZmYgJiZcclxuICAgICAgICAoaXNDb21wbGV0ZWRBcHBvaW50bWVudFN0YXR1cyhhcHB0LlN0YXR1cykgfHwgaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyhhcHB0LlN0YXR1cykpXHJcbiAgICApXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zdGFydERhdGUuZ2V0VGltZSgpIC0gYS5zdGFydERhdGUuZ2V0VGltZSgpKTtcclxuICByZXR1cm4gY29tcGxldGVkLm1hcCgoYXBwdCwgaW5kZXgpID0+ICh7XHJcbiAgICAuLi5hcHB0LFxyXG4gICAgb3JkZXJOdW1iZXI6IGNvbXBsZXRlZC5sZW5ndGggLSBpbmRleCxcclxuICAgIGRhdGVMYWJlbDogZm9ybWF0RGF0ZVRpbWUoYXBwdC5EYXRlLCBhcHB0LlRpbWUpLFxyXG4gIH0pKTtcclxufTtcclxuY29uc3QgZGVmYXVsdENvbmZpcm1TdGF0ZSA9IHtcclxuICBvcGVuOiBmYWxzZSxcclxuICB0aXRsZTogJycsXHJcbiAgbWVzc2FnZTogJycsXHJcbiAgY29uZmlybUxhYmVsOiAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsXHJcbiAgY2FuY2VsTGFiZWw6ICfQntGC0LzQtdC90LAnLFxyXG4gIHRvbmU6ICduZXV0cmFsJyxcclxufTtcclxuY29uc3QgZ2V0UmVjb3JkSWQgPSAocmVjb3JkID0ge30pID0+IHJlY29yZC5pZCB8fCByZWNvcmQuSWQgfHwgcmVjb3JkLklEIHx8IHJlY29yZC5yZWNvcmRJZCB8fCByZWNvcmQuSURfUmVjb3JkIHx8IG51bGw7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0gKC4uLmNsYXNzZXMpID0+IGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gKGtleSwgaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgcmV0dXJuIHN0b3JlZCA/IEpTT04ucGFyc2Uoc3RvcmVkKSA6IGluaXRpYWxWYWx1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIHJlYWQgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodXBkYXRlcikgPT4ge1xyXG4gICAgICBzZXRWYWx1ZSgocHJldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHR5cGVvZiB1cGRhdGVyID09PSAnZnVuY3Rpb24nID8gdXBkYXRlcihwcmV2KSA6IHVwZGF0ZXI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG5leHRWYWx1ZSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSB3cml0ZSBlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW2tleV1cclxuICApO1xyXG5cclxuICByZXR1cm4gW3ZhbHVlLCB1cGRhdGVWYWx1ZV07XHJcbn07XHJcblxyXG5jb25zdCB1c2VOb3dUaWNrID0gKGludGVydmFsTXMgPSAxMDAwKSA9PiB7XHJcbiAgY29uc3QgW25vdywgc2V0Tm93XSA9IHVzZVN0YXRlKCgpID0+IERhdGUubm93KCkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHNldE5vdyhEYXRlLm5vdygpKSwgaW50ZXJ2YWxNcyk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSwgW2ludGVydmFsTXNdKTtcclxuICByZXR1cm4gbm93O1xyXG59O1xyXG5cclxuY29uc3QgdXNlT3V0c2lkZUNsaWNrID0gKHJlZiwgaGFuZGxlcikgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWhhbmRsZXIpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoIXJlZi5jdXJyZW50IHx8IHJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHJldHVybjtcclxuICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW3JlZiwgaGFuZGxlcl0pO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hBdmF0YXJPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9hc3NldHMvYXZhdGFyc2ApO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINGB0L/QuNGB0L7QuiDQsNCy0LDRgtCw0YDQvtCyJyk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBpbWFnZXMgPSBBcnJheS5pc0FycmF5KHBheWxvYWQuaW1hZ2VzKSA/IHBheWxvYWQuaW1hZ2VzLmZpbHRlcihCb29sZWFuKS5tYXAobm9ybWFsaXplSW1hZ2VQYXRoKSA6IFtdO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoaW1hZ2VzKSk7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVUZXh0ID0gKHZhbHVlKSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogU3RyaW5nKHZhbHVlKSk7XHJcbmNvbnN0IGlzVmFsaWREYXRlID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xyXG5jb25zdCByZXNvbHZlQXNzZXRVcmwgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkudHJpbSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuICcnO1xyXG4gIGlmICgvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KG5vcm1hbGl6ZWQpIHx8IG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgY29uc3Qgc2FuaXRpemVkID0gbm9ybWFsaXplZC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLlxcLysvLCAnJyk7XHJcbiAgaWYgKHNhbml0aXplZC5zdGFydHNXaXRoKCcvJykpIHJldHVybiBzYW5pdGl6ZWQ7XHJcbiAgaWYgKHNhbml0aXplZC5zdGFydHNXaXRoKCdJbWFnZS8nKSkgcmV0dXJuIGAvJHtzYW5pdGl6ZWR9YDtcclxuICByZXR1cm4gYC9JbWFnZS8ke3Nhbml0aXplZH1gO1xyXG59O1xyXG5jb25zdCBub3JtYWxpemVJbWFnZVBhdGggPSAodmFsdWUpID0+IHtcclxuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVBc3NldFVybCh2YWx1ZSk7XHJcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuICcnO1xyXG4gIGlmICgvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KHJlc29sdmVkKSB8fCByZXNvbHZlZC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gcmVzb2x2ZWQ7XHJcbiAgcmV0dXJuIHJlc29sdmVkLnN0YXJ0c1dpdGgoJy8nKSA/IHJlc29sdmVkIDogYC8ke3Jlc29sdmVkfWA7XHJcbn07XHJcbmNvbnN0IG51bWJlckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKTtcclxuY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBudW1lcmljID0gTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW1lcmljKSkgcmV0dXJuICcnO1xyXG4gIHJldHVybiBgJHtudW1iZXJGb3JtYXR0ZXIuZm9ybWF0KG51bWVyaWMpfSBcXHUyMEJEYDtcclxufTtcclxuY29uc3QgcGx1cmFsaXplID0gKGNvdW50LCBbb25lLCBmZXcsIG1hbnldKSA9PiB7XHJcbiAgY29uc3QgbW9kMTAgPSBjb3VudCAlIDEwO1xyXG4gIGNvbnN0IG1vZDEwMCA9IGNvdW50ICUgMTAwO1xyXG4gIGlmIChtb2QxMCA9PT0gMSAmJiBtb2QxMDAgIT09IDExKSByZXR1cm4gb25lO1xyXG4gIGlmIChtb2QxMCA+PSAyICYmIG1vZDEwIDw9IDQgJiYgKG1vZDEwMCA8IDEwIHx8IG1vZDEwMCA+PSAyMCkpIHJldHVybiBmZXc7XHJcbiAgcmV0dXJuIG1hbnk7XHJcbn07XHJcblxyXG5jb25zdCBjYW5vbmljYWxpemVOYW1lID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9bXmEtejAtOdCwLdGP0ZFcXHNdL2dpLCAnJykudHJpbSgpO1xyXG5cclxuY29uc3QgcmVzb2x2ZUxvZ2luID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGJ1aWxkU2Vzc2lvblBheWxvYWQgPSAocGF5bG9hZCA9IHt9KSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZExvZ2luID0gcmVzb2x2ZUxvZ2luKHBheWxvYWQudXNlcm5hbWUgfHwgcGF5bG9hZC5sb2dpbik7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBheWxvYWQsXHJcbiAgICB1c2VybmFtZTogbm9ybWFsaXplZExvZ2luLFxyXG4gICAgZGlzcGxheU5hbWU6IHBheWxvYWQuZGlzcGxheU5hbWUgfHwgcGF5bG9hZC5uYW1lIHx8IG5vcm1hbGl6ZWRMb2dpbixcclxuICAgIGJhcmJlcklkOiBwYXlsb2FkLmJhcmJlcklkIHx8IHBheWxvYWQuaWQgfHwgbnVsbCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcGlja0JhcmJlckZvclVzZXIgPSAodXNlclNlc3Npb24sIGF2YWlsYWJsZUJhcmJlcnMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGZhbGxiYWNrID0gYXZhaWxhYmxlQmFyYmVycz8uWzBdIHx8ICcnO1xyXG4gIGlmICghdXNlclNlc3Npb24pIHJldHVybiBmYWxsYmFjaztcclxuICBjb25zdCBjYW5kaWRhdGVzID0gW3VzZXJTZXNzaW9uLmRpc3BsYXlOYW1lLCB1c2VyU2Vzc2lvbi5wcmVmZXJyZWROYW1lLCB1c2VyU2Vzc2lvbi51c2VybmFtZV1cclxuICAgIC5tYXAoKGNhbmRpZGF0ZSkgPT4gY2Fub25pY2FsaXplTmFtZShjYW5kaWRhdGUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIGlmICghY2FuZGlkYXRlcy5sZW5ndGggfHwgIWF2YWlsYWJsZUJhcmJlcnM/Lmxlbmd0aCkgcmV0dXJuIGZhbGxiYWNrO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gYXZhaWxhYmxlQmFyYmVycy5tYXAoKGJhcmJlcikgPT4gY2Fub25pY2FsaXplTmFtZShiYXJiZXIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcclxuICAgIGNvbnN0IG1hdGNoSW5kZXggPSBub3JtYWxpemVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uID09PSBjYW5kaWRhdGUpO1xyXG4gICAgaWYgKG1hdGNoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVCYXJiZXJzW21hdGNoSW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsbGJhY2s7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICctJztcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUaW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZVZhbHVlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSk7XHJcbiAgaWYgKCFzYWZlVmFsdWUpIHJldHVybiAnLSc7XHJcbiAgaWYgKHNhZmVWYWx1ZS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICByZXR1cm4gc2FmZVZhbHVlLnNwbGl0KCctJylbMF0udHJpbSgpO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVZhbHVlO1xyXG59O1xyXG5jb25zdCBmb3JtYXRQaG9uZUlucHV0ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgZGlnaXRzID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG4gICAgLnJlcGxhY2UoL1teXFxkXS9nLCAnJylcclxuICAgIC50cmltKCk7XHJcbiAgaWYgKCFkaWdpdHMpIHJldHVybiAnJztcclxuICBsZXQgbm9ybWFsaXplZCA9IGRpZ2l0cztcclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDExICYmIG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnOCcpKSB7XHJcbiAgICBub3JtYWxpemVkID0gYDcke25vcm1hbGl6ZWQuc2xpY2UoMSl9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgbm9ybWFsaXplZCA9IGA3JHtub3JtYWxpemVkfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTEgJiYgbm9ybWFsaXplZC5zdGFydHNXaXRoKCc3JykpIHtcclxuICAgIHJldHVybiBgKzcgKCR7bm9ybWFsaXplZC5zbGljZSgxLCA0KX0pICR7bm9ybWFsaXplZC5zbGljZSg0LCA3KX0tJHtub3JtYWxpemVkLnNsaWNlKDcsIDkpfS0ke25vcm1hbGl6ZWQuc2xpY2UoOSwgMTEpfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzcnKSAmJiBub3JtYWxpemVkLmxlbmd0aCA+IDExKSB7XHJcbiAgICByZXR1cm4gYCske25vcm1hbGl6ZWR9YDtcclxuICB9XHJcbiAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnKycpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgcmV0dXJuIGArJHtub3JtYWxpemVkfWA7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUZWxlZ3JhbUhhbmRsZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZSA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnJlcGxhY2UoL15AKy8sICcnKS50cmltKCk7XHJcbiAgcmV0dXJuIGhhbmRsZSA/IGBAJHtoYW5kbGV9YCA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRUZWxlZ3JhbUxpbmsgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBoYW5kbGUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9eQCsvLCAnJykudHJpbSgpO1xyXG4gIHJldHVybiBoYW5kbGUgPyBgaHR0cHM6Ly90Lm1lLyR7aGFuZGxlfWAgOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gKGRhdGUsIHRpbWUpID0+IHtcclxuICBjb25zdCBkYXRlUGFydCA9IGZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBmb3JtYXRUaW1lKHRpbWUpO1xyXG4gIGlmIChkYXRlUGFydCA9PT0gJy0nICYmIHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiAnLSc7XHJcbiAgaWYgKGRhdGVQYXJ0ID09PSAnLScpIHJldHVybiB0aW1lUGFydDtcclxuICBpZiAodGltZVBhcnQgPT09ICctJykgcmV0dXJuIGRhdGVQYXJ0O1xyXG4gIHJldHVybiBgJHtkYXRlUGFydH0gfCAke3RpbWVQYXJ0fWA7XHJcbn07XHJcblxyXG5jb25zdCBiYWNrdXBEYXRlRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywge1xyXG4gIGRheTogJ251bWVyaWMnLFxyXG4gIG1vbnRoOiAnbG9uZycsXHJcbiAgeWVhcjogJ251bWVyaWMnLFxyXG4gIGhvdXI6ICcyLWRpZ2l0JyxcclxuICBtaW51dGU6ICcyLWRpZ2l0JyxcclxufSk7XHJcblxyXG5jb25zdCBwYXJzZUJhY2t1cFRpbWVzdGFtcCA9IChmaWxlbmFtZSA9ICcnKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2ggPSBub3JtYWxpemVUZXh0KGZpbGVuYW1lKS5tYXRjaCgvYmFja3VwLShcXGR7NH0tXFxkezJ9LVxcZHsyfSlUKFxcZHsyfSktKFxcZHsyfSktKFxcZHsyfSkoPzotKFxcZHszfSkpPy9pKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBbLCBkYXRlUGFydCwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kc10gPSBtYXRjaDtcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9JHttaWxsaXNlY29uZHMgPyBgLiR7bWlsbGlzZWNvbmRzfWAgOiAnJ31aYDtcclxuICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShpc29DYW5kaWRhdGUpO1xyXG4gIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0QmFja3VwTGFiZWwgPSAoZmlsZW5hbWUgPSAnJykgPT4ge1xyXG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlQmFja3VwVGltZXN0YW1wKGZpbGVuYW1lKTtcclxuICByZXR1cm4gcGFyc2VkID8gYmFja3VwRGF0ZUZvcm1hdHRlci5mb3JtYXQocGFyc2VkKSA6IGZpbGVuYW1lO1xyXG59O1xyXG5jb25zdCBmb3JtYXREYXRlSGVhZGluZyA9ICh2YWx1ZSwgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9KSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHt2YWx1ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiB2YWx1ZTtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCBvcHRpb25zKS5mb3JtYXQocGFyc2VkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufTtcclxuY29uc3QgZm9ybWF0RGF0ZUJhZGdlTGFiZWwgPSAodmFsdWUpID0+XHJcbiAgZm9ybWF0RGF0ZUhlYWRpbmcodmFsdWUsIHsgd2Vla2RheTogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnIH0pO1xyXG5jb25zdCBmb3JtYXRMaXZlVGltZXN0YW1wID0gKHZhbHVlLCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiAnJztcclxuICAgIGNvbnN0IGRpZmZNcyA9IE1hdGgubWF4KDAsIG5vd1RzIC0gcGFyc2VkLmdldFRpbWUoKSk7XHJcbiAgICBpZiAoZGlmZk1zIDwgMTAwMCkgcmV0dXJuICfRgtC+0LvRjNC60L4g0YfRgtC+JztcclxuICAgIGlmIChkaWZmTXMgPCA2MF8wMDApIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmZNcyAvIDEwMDApfSDRgdC10LpgO1xyXG4gICAgaWYgKGRpZmZNcyA8IDNfNjAwXzAwMCkge1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmTXMgLyA2MF8wMDApO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZk1zICUgNjBfMDAwKSAvIDEwMDApO1xyXG4gICAgICByZXR1cm4gYCR7bWludXRlc30g0LzQuNC9ICR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INGB0LXQumA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlmZk1zIDwgODZfNDAwXzAwMCkge1xyXG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gM182MDBfMDAwKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDNfNjAwXzAwMCkgLyA2MF8wMDApO1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9INGHICR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INC80LjQvWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkLnRvTG9jYWxlU3RyaW5nKCdydS1SVScsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNUQVRVU19UUkFOU0xBVElPTlMgPSB7XHJcbiAgYWN0aXZlOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgJ9Cw0LrRgtC40LLQvdCw0Y8nOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgY29uZmlybTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgY29uZmlybWVkOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICAn0L/QvtC00YLQstC10YDQttC00LXQvdC+JzogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCc6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGRvbmU6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNvbXBsZXRlOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZWQ6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGZpbmlzaGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICAn0LLRi9C/0L7Qu9C90LXQvdCwJzogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9C30LDQstC10YDRiNC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNhbmNlbDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgY2FuY2VsbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QsCc6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAn0L7RgtC80LXQvdC10L3Qvic6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAnbm8gc2hvdyc6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgJ25vLXNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIG5vc2hvdzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBtaXNzZWQ6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgcGVuZGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdDogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgcHJvY2Vzc2luZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbn07XHJcbmNvbnN0IFNUQVRVU19CQURHRV9NQVAgPSB7XHJcbiAg0JDQutGC0LjQstC90LDRjzogJ2JvcmRlciBib3JkZXItc2t5LTUwMC8zMCBiZy1za3ktNTAwLzEwIHRleHQtc2t5LTEwMCcsXHJcbiAg0J/QvtC00YLQstC10YDQttC00LXQvdCwOiAnYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMTAwJyxcclxuICDQl9Cw0LLQtdGA0YjQtdC90LA6ICdib3JkZXIgYm9yZGVyLWluZGlnby01MDAvMzAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnLFxyXG4gINCe0YLQvNC10L3QtdC90LA6ICdib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzMwIGJnLXJvc2UtNTAwLzEwIHRleHQtcm9zZS0xMDAnLFxyXG4gICfQndC1INC/0YDQuNGI0ZHQuyc6ICdib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCBiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0xMDAnLFxyXG59O1xyXG5jb25zdCBnZXRTdGF0dXNCYWRnZUNsYXNzZXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIFNUQVRVU19CQURHRV9NQVBbbm9ybWFsaXplZF0gfHwgJ2JvcmRlciBib3JkZXItc2xhdGUtNjAwLzYwIGJnLXNsYXRlLTgwMC83MCB0ZXh0LXNsYXRlLTIwMCdcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NhbmNlbCcsICfQvtGC0LzQtdC9JywgJ9C90LUg0L/RgNC40YgnLCAnbm9zaG93JywgJ25vLXNob3cnLCAnbWlzc2VkJywgJ9C/0YDQvtGB0YAnLCAnZXhwaXJlZCddO1xyXG5jb25zdCBBQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LDQutGC0LjQsicsICdhY3RpdmUnLCAn0L/QvtC00YLQstC10YDQticsICdjb25maXJtJywgJ9C+0LbQuNC0JywgJ3BlbmRpbmcnLCAnd2FpdCcsICfQttC00LXQvCcsICfQttC00ZHQvCcsICfQvdC+0LInLCAnbmV3J107XHJcbmNvbnN0IENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TID0gWyfQstGL0L/QvtC70L0nLCAn0LfQsNCy0LXRgNGIJywgJ2RvbmUnLCAnY29tcGxldGUnLCAn0LPQvtGC0L7QsiddO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzVmFsdWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQoc3RhdHVzKS50cmltKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgdHJhbnNsYXRlZCA9IFNUQVRVU19UUkFOU0xBVElPTlNbbm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpXTtcclxuICBpZiAodHJhbnNsYXRlZCkgcmV0dXJuIHRyYW5zbGF0ZWQ7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3JtYWxpemVkLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzTGlzdCA9IChzdGF0dXNlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcclxuICByZXR1cm4gc3RhdHVzZXNcclxuICAgIC5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSlcclxuICAgIC5maWx0ZXIoKHN0YXR1cykgPT4ge1xyXG4gICAgICBpZiAoIXN0YXR1cyB8fCBzZWVuLmhhcyhzdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHNlZW4uYWRkKHN0YXR1cyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSk7XHJcbn07XHJcblxyXG5jb25zdCBzYW5pdGl6ZVRpbWVUb2tlbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkubWF0Y2goLyhcXGR7MSwyfSk6KFxcZHsyfSkvKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaG91cnMgPSBtYXRjaFsxXS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBtYXRjaFsyXTtcclxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9b4oCU4oCTXS9nLCAnLScpO1xyXG4gIGlmICghc2FmZSkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcbiAgY29uc3QgW3Jhd1N0YXJ0LCByYXdFbmQgPSAnJ10gPSBzYWZlLnNwbGl0KCctJykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0OiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdTdGFydCksXHJcbiAgICBlbmQ6IHNhbml0aXplVGltZVRva2VuKHJhd0VuZCksXHJcbiAgfTtcclxufTtcclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VQYXJ0cyA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFRpbWVSYW5nZVZhbHVlID0gKHN0YXJ0LCBlbmQpID0+IHtcclxuICBjb25zdCBzYWZlU3RhcnQgPSBzYW5pdGl6ZVRpbWVUb2tlbihzdGFydCk7XHJcbiAgY29uc3Qgc2FmZUVuZCA9IHNhbml0aXplVGltZVRva2VuKGVuZCk7XHJcbiAgaWYgKHNhZmVTdGFydCAmJiBzYWZlRW5kKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gc2FmZVN0YXJ0IDw9IHNhZmVFbmQgPyBbc2FmZVN0YXJ0LCBzYWZlRW5kXSA6IFtzYWZlRW5kLCBzYWZlU3RhcnRdO1xyXG4gICAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVN0YXJ0IHx8ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRpbWVTdGFydCA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkuc3RhcnQ7XHJcblxyXG5jb25zdCBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZSA9IChkYXRlVmFsdWUsIHRpbWVWYWx1ZSwgZmFsbGJhY2tJc28pID0+IHtcclxuICBpZiAoZmFsbGJhY2tJc28pIHtcclxuICAgIGNvbnN0IHBhcnNlZEZhbGxiYWNrID0gbmV3IERhdGUoZmFsbGJhY2tJc28pO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkRmFsbGJhY2suZ2V0VGltZSgpKSkgcmV0dXJuIHBhcnNlZEZhbGxiYWNrO1xyXG4gIH1cclxuICBjb25zdCBkYXRlUGFydCA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKCFkYXRlUGFydCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBleHRyYWN0VGltZVN0YXJ0KHRpbWVWYWx1ZSkgfHwgJzAwOjAwJztcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHt0aW1lUGFydH06MDBgO1xyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XHJcbiAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWQ7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBcHBvaW50bWVudEVuZERhdGUgPSAoZGF0ZVZhbHVlLCB0aW1lVmFsdWUsIGZhbGxiYWNrSXNvKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoZGF0ZVZhbHVlLCB0aW1lVmFsdWUsIGZhbGxiYWNrSXNvKTtcclxuICBpZiAoIXN0YXJ0RGF0ZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKHRpbWVWYWx1ZSk7XHJcbiAgY29uc3QgZW5kVG9rZW4gPSBlbmQgfHwgc3RhcnQ7XHJcbiAgaWYgKCFlbmRUb2tlbikgcmV0dXJuIHN0YXJ0RGF0ZTtcclxuICBjb25zdCBiYXNlRGF0ZVBhcnQgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSkuc2xpY2UoMCwgMTApIHx8IHN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuICBpZiAoIWJhc2VEYXRlUGFydCkgcmV0dXJuIHN0YXJ0RGF0ZTtcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtiYXNlRGF0ZVBhcnR9VCR7ZW5kVG9rZW59OjAwYDtcclxuICBsZXQgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcclxuICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gc3RhcnREYXRlO1xyXG4gIGlmIChlbmQgJiYgc3RhcnQgJiYgZW5kIDw9IHN0YXJ0KSB7XHJcbiAgICBwYXJzZWQgPSBuZXcgRGF0ZShwYXJzZWQuZ2V0VGltZSgpICsgREFZX0lOX01TKTtcclxuICB9XHJcbiAgaWYgKHBhcnNlZC5nZXRUaW1lKCkgPCBzdGFydERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICByZXR1cm4gc3RhcnREYXRlO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZUFwcG9pbnRtZW50U3RhcnREYXRlID0gKGFwcG9pbnRtZW50ID0ge30pID0+IHtcclxuICBpZiAoaXNWYWxpZERhdGUoYXBwb2ludG1lbnQuc3RhcnREYXRlKSkgcmV0dXJuIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZTtcclxuICByZXR1cm4gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQuRGF0ZSwgYXBwb2ludG1lbnQuVGltZSwgYXBwb2ludG1lbnQuc3RhcnREYXRlVGltZSk7XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlQXBwb2ludG1lbnRFbmREYXRlID0gKGFwcG9pbnRtZW50ID0ge30pID0+IHtcclxuICBpZiAoaXNWYWxpZERhdGUoYXBwb2ludG1lbnQuZW5kRGF0ZSkpIHJldHVybiBhcHBvaW50bWVudC5lbmREYXRlO1xyXG4gIGNvbnN0IGVuZERhdGUgPSBnZXRBcHBvaW50bWVudEVuZERhdGUoYXBwb2ludG1lbnQuRGF0ZSwgYXBwb2ludG1lbnQuVGltZSwgYXBwb2ludG1lbnQuc3RhcnREYXRlVGltZSk7XHJcbiAgaWYgKGVuZERhdGUpIHJldHVybiBlbmREYXRlO1xyXG4gIHJldHVybiByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyA9IChzdGF0dXMpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChJTkFDVElWRV9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSkpIHJldHVybiBmYWxzZTtcclxuICBpZiAoQUNUSVZFX1NUQVRVU19UT0tFTlMuc29tZSgodG9rZW4pID0+IG5vcm1hbGl6ZWQuaW5jbHVkZXModG9rZW4pKSkgcmV0dXJuIHRydWU7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQgPSAoYXBwb2ludG1lbnQsIG5vd1RzID0gRGF0ZS5ub3coKSkgPT4ge1xyXG4gIGlmICghaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyhub3JtYWxpemVTdGF0dXNWYWx1ZShhcHBvaW50bWVudC5TdGF0dXMpKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudCk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudEVuZERhdGUoYXBwb2ludG1lbnQpO1xyXG4gIGlmICghc3RhcnREYXRlIHx8ICFlbmREYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIGVuZERhdGUuZ2V0VGltZSgpID49IG5vd1RzO1xyXG59O1xyXG5cclxuY29uc3QgaXNBcHBvaW50bWVudE9uZ29pbmcgPSAoYXBwb2ludG1lbnQsIG5vd1RzID0gRGF0ZS5ub3coKSkgPT4ge1xyXG4gIGlmICghaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyhub3JtYWxpemVTdGF0dXNWYWx1ZShhcHBvaW50bWVudC5TdGF0dXMpKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudCk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudEVuZERhdGUoYXBwb2ludG1lbnQpO1xyXG4gIGlmICghc3RhcnREYXRlIHx8ICFlbmREYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3Qgc3RhcnRUcyA9IHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgZW5kVHMgPSBlbmREYXRlLmdldFRpbWUoKTtcclxuICByZXR1cm4gc3RhcnRUcyA8PSBub3dUcyAmJiBlbmRUcyA+IG5vd1RzO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VNdWx0aVZhbHVlID0gKHZhbHVlKSA9PlxyXG4gIG5vcm1hbGl6ZVRleHQodmFsdWUpXHJcbiAgICAuc3BsaXQoJywnKVxyXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuY29uc3QgTG9hZGluZ1N0YXRlID0gKHsgbGFiZWwgPSAn0JfQsNCz0YDRg9C20LDRjiDQtNCw0L3QvdGL0LUuLi4nIH0gPSB7fSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIj57bGFiZWx9PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgRXJyb3JCYW5uZXIgPSAoeyBtZXNzYWdlIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctcm9zZS02MDAgcHgtNCBweS0zIHRleHQtd2hpdGVcIj57bWVzc2FnZX08L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFZpc2l0SGlzdG9yeUxpc3QgPSAoe1xyXG4gIHZpc2l0cyA9IFtdLFxyXG4gIGxvYWRpbmcgPSBmYWxzZSxcclxuICBlcnJvciA9ICcnLFxyXG4gIGVtcHR5TWVzc2FnZSA9ICfQmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsiDQv9GD0YHRgtCwLicsXHJcbiAgbWF4SGVpZ2h0Q2xhc3MgPSAnbWF4LWgtNjQnLFxyXG4gIHNob3dTdW1tYXJ5ID0gdHJ1ZSxcclxufSkgPT4ge1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCX0LDQs9GA0YPQttCw0LXQvCDQuNGB0YLQvtGA0LjRji4uLjwvcD47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckJhbm5lciBtZXNzYWdlPXtlcnJvcn0gLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICB7c2hvd1N1bW1hcnkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDQl9Cw0L/QuNGB0LXQuSDQt9CwIDEyINC80LXRgdGP0YbQtdCyOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dmlzaXRzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7Qn9C+0YHQu9C10LTQvdC40LUg0LLQuNC30LjRgtGLPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3BhY2UteS0yIG92ZXJmbG93LWF1dG8nLCBtYXhIZWlnaHRDbGFzcyl9PlxyXG4gICAgICAgIHt2aXNpdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgdmlzaXRzLm1hcCgodmlzaXQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzKHZpc2l0LlN0YXR1cyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHt2aXNpdC5pZCB8fCB2aXNpdC5kYXRlTGFiZWx9LSR7dmlzaXQub3JkZXJOdW1iZXJ9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgYm9yZGVyIHAtMyB0ZXh0LXhzIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItZW1lcmFsZC00MDAvNjAgYmctZW1lcmFsZC01MDAvMTAgc2hhZG93LWlubmVyIHNoYWRvdy1lbWVyYWxkLTkwMC8zMCcgOiAnYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNDAnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCS0LjQt9C40YIg4oSWe3Zpc2l0Lm9yZGVyTnVtYmVyIHx8ICfigJQnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Zpc2l0LmRhdGVMYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTEwMFwiPnt2aXNpdC5CYXJiZXIgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj57dmlzaXQuU2VydmljZXMgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAge3Zpc2l0LlN0YXR1cyAmJiA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTUwMFwiPnt2aXNpdC5TdGF0dXN9PC9wPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj57ZW1wdHlNZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTZWN0aW9uQ2FyZCA9ICh7IHRpdGxlLCBhY3Rpb25zLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtODAwLzcwIHAtNiBzaGFkb3ctbGdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICB7YWN0aW9uc31cclxuICAgIDwvZGl2PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBMaXZlQmFkZ2UgPSAoeyB0aW1lc3RhbXAsIHN0YXR1cyA9ICd1bmtub3duJyB9KSA9PiB7XHJcbiAgY29uc3QgdGlja2luZ05vdyA9IHVzZU5vd1RpY2soMTAwMCk7XHJcbiAgaWYgKHN0YXR1cyA9PT0gJ3Vua25vd24nICYmICF0aW1lc3RhbXApIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGlzT2ZmbGluZSA9IHN0YXR1cyA9PT0gJ29mZmxpbmUnO1xyXG4gIGNvbnN0IGlzT25saW5lID0gc3RhdHVzID09PSAnb25saW5lJztcclxuICBjb25zdCBsYWJlbCA9IGlzT2ZmbGluZSA/ICdPRkZMSU5FJyA6ICdMSVZFJztcclxuICBjb25zdCB0aW1lTGFiZWwgPSBpc09ubGluZSAmJiB0aW1lc3RhbXAgPyBmb3JtYXRMaXZlVGltZXN0YW1wKHRpbWVzdGFtcCwgdGlja2luZ05vdykgOiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgcHgtMyBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0nLFxyXG4gICAgICAgIGlzT2ZmbGluZSA/ICdib3JkZXItcm9zZS01MDAvNTAgYmctcm9zZS01MDAvMTAgdGV4dC1yb3NlLTIwMCcgOiAnYm9yZGVyLWVtZXJhbGQtNDAwLzQwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0yMDAnXHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgJ2gtMiB3LTIgcm91bmRlZC1mdWxsJyxcclxuICAgICAgICAgIGlzT2ZmbGluZSA/ICdiZy1yb3NlLTQwMCcgOiAnYW5pbWF0ZS1wdWxzZSBiZy1lbWVyYWxkLTQwMCdcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICAgIHt0aW1lTGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGlzT2ZmbGluZSA/ICd0ZXh0LXJvc2UtMTAwLzgwJyA6ICd0ZXh0LWVtZXJhbGQtMTAwLzgwJywgJ25vcm1hbC1jYXNlIHRyYWNraW5nLW5vcm1hbCcpfT57dGltZUxhYmVsfTwvc3Bhbj59XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEljb25UcmFzaCA9ICh7IGNsYXNzTmFtZSA9ICdoLTQgdy00JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIiAvPlxyXG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiIC8+XHJcbiAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25EYXNoYm9hcmQgPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGggZD1cIk0zLjUgMTEgMTIgNGw4LjUgN1wiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTYgMTB2MTBoNXYtNWgydjVoNVYxMFwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uRGF0YSA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cmVjdCB4PVwiMy41XCIgeT1cIjVcIiB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTRcIiByeD1cIjIuNVwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTMuNSA5aDE3TTMuNSAxM2gxN004IDV2MTRNMTMgNXYxNFwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uQm90ID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoIGQ9XCJNMTIgMnYzXCIgLz5cclxuICAgIDxyZWN0IHg9XCI1XCIgeT1cIjdcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTFcIiByeD1cIjRcIiAvPlxyXG4gICAgPHBhdGggZD1cIk01IDEySDNtMTggMGgtMk05IDE5djJtNi0ydjJcIiAvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMlwiIHI9XCIxLjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTRcIiBjeT1cIjEyXCIgcj1cIjEuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNOS41IDE1aDVcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvblN5c3RlbSA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0xMiAyLjV2M00xMiAxOC41djNNNC4yIDcuNWwyLjYgMS41TTE3LjIgMTVsMi42IDEuNU00LjIgMTYuNWwyLjYtMS41TTE3LjIgOWwyLjYtMS41TTIuNSAxMmgzTTE4LjUgMTJoM1wiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uRG90cyA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFZJRVdfVEFCX0lDT05TID0ge1xyXG4gIGRhc2hib2FyZDogSWNvbkRhc2hib2FyZCxcclxuICB0YWJsZXM6IEljb25EYXRhLFxyXG4gIGJvdDogSWNvbkJvdCxcclxuICBzeXN0ZW06IEljb25TeXN0ZW0sXHJcbn07XHJcblxyXG5jb25zdCBVSV9URVhUID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgYWNjb3VudFRpdGxlOiAn0JLQsNGIINCw0LrQutCw0YPQvdGCJyxcclxuICBsb2dvdXQ6ICfQktGL0LnRgtC4JyxcclxuICBuZXdBcHBvaW50bWVudEN0YTogJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyxcclxuICBsaXZlRmFsbGJhY2s6ICdMSVZFJyxcclxufSk7XHJcblxyXG5cclxuY29uc3QgTW9kYWwgPSAoeyB0aXRsZSwgaXNPcGVuLCBvbkNsb3NlLCBjaGlsZHJlbiwgZm9vdGVyLCBtYXhXaWR0aENsYXNzID0gJ21heC13LTN4bCcgfSkgPT4ge1xyXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svNjAgcHgtNCBweS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LWgtWzkwdmhdIHctZnVsbCAke21heFdpZHRoQ2xhc3N9IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgc2hhZG93LTJ4bGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS00XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPng8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs3MHZoXSBvdmVyZmxvdy15LWF1dG8gcHgtNiBweS00IHNwYWNlLXktNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICB7Zm9vdGVyICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtMyBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNFwiPntmb290ZXJ9PC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb25maXJtRGlhbG9nID0gKHsgb3BlbiwgdGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCA9ICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMJywgY2FuY2VsTGFiZWwgPSAn0J7RgtC80LXQvdCwJywgdG9uZSA9ICduZXV0cmFsJywgb25SZXN1bHQgfSkgPT4ge1xyXG4gIGlmICghb3BlbikgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgY29uZmlybVRvbmVDbGFzcyA9ICgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRvbmUpIHtcclxuICAgICAgY2FzZSAnZGFuZ2VyJzpcclxuICAgICAgICByZXR1cm4gJ2JnLXJvc2UtNjAwIGhvdmVyOmJnLXJvc2UtNTAwJztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby01MDAnO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e29wZW59XHJcbiAgICAgIHRpdGxlPXt0aXRsZSB8fCAn0J/QvtC00YLQstC10YDQtNC40YLQtSDQtNC10LnRgdGC0LLQuNC1J31cclxuICAgICAgb25DbG9zZT17KCkgPT4gb25SZXN1bHQoZmFsc2UpfVxyXG4gICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctbWRcIlxyXG4gICAgICBmb290ZXI9e1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlc3VsdChmYWxzZSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAge2NhbmNlbExhYmVsfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdWx0KHRydWUpfSBjbGFzc05hbWU9e2Byb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSAke2NvbmZpcm1Ub25lQ2xhc3N9YH0+XHJcbiAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+e21lc3NhZ2UgfHwgJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0L/RgNC+0LTQvtC70LbQuNGC0Yw/J308L3A+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGxhYmVsLCB2YWx1ZSwgYWNjZW50ID0gJ3RleHQtaW5kaWdvLTMwMCcgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC0zIHNtOnAtNFwiPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPntsYWJlbH08L3A+XHJcbiAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ210LTEgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBzbTptdC0yIHNtOnRleHQtM3hsJywgYWNjZW50KX0+e3ZhbHVlfTwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoe1xyXG4gIHNlc3Npb24sXHJcbiAgYWN0aXZlVGFiLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uTG9nb3V0LFxyXG4gIGxpdmVVcGRhdGVkQXQsXHJcbiAgbGl2ZVN0YXR1cyA9ICd1bmtub3duJyxcclxuICBhY3RpdmVEYXRhVGFibGUgPSAnQXBwb2ludG1lbnRzJyxcclxuICBvblNlbGVjdFRhYmxlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBzZXNzaW9uPy5kaXNwbGF5TmFtZSB8fCBzZXNzaW9uPy51c2VybmFtZSB8fCAnLSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaGlkZGVuIHctNzIgZmxleC1zaHJpbmstMCBmbGV4LWNvbCBib3JkZXItciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC85MCBwLTUgbGc6c3RpY2t5IGxnOnRvcC0wIGxnOmZsZXggbGc6aC1zY3JlZW4gbGc6b3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcGItNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS01MDBcIj57VUlfVEVYVC5hY2NvdW50VGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTEwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7VUlfVEVYVC5sb2dvdXR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgeyhsaXZlVXBkYXRlZEF0IHx8IGxpdmVTdGF0dXMgIT09ICd1bmtub3duJykgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgIDxMaXZlQmFkZ2UgdGltZXN0YW1wPXtsaXZlVXBkYXRlZEF0fSBzdGF0dXM9e2xpdmVTdGF0dXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02IGZsZXgtMSBzcGFjZS15LTIgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt0YWIuaWR9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlPy4odGFiLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ3ctZnVsbCByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAvOTAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWluZGlnby05MDAvNDAnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwLzQwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMC82MCBob3Zlcjp0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIHt0YWIuaWQgPT09ICd0YWJsZXMnICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIHBsLTRcIj5cclxuICAgICAgICAgICAgICAgICAge0RBVEFfU0hPUlRDVVRTLm1hcCgoc2hvcnRjdXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1Nob3J0Y3V0QWN0aXZlID0gYWN0aXZlRGF0YVRhYmxlID09PSBzaG9ydGN1dC5pZCAmJiBhY3RpdmVUYWIgPT09ICd0YWJsZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2hvcnRjdXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0VGFibGU/LihzaG9ydGN1dC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAndy1mdWxsIHJvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG9ydGN1dEFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctaW5kaWdvLTYwMC8yMCB0ZXh0LWluZGlnby0xMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAvNjAgaG92ZXI6dGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFvblNlbGVjdFRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvcnRjdXQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNb2JpbGVUYWJzID0gKHsgc2Vzc2lvbiwgYWN0aXZlVGFiLCBvbkNoYW5nZSwgb25Mb2dvdXQsIGxpdmVVcGRhdGVkQXQsIGxpdmVTdGF0dXMgPSAndW5rbm93bicgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvbj8uZGlzcGxheU5hbWUgfHwgc2Vzc2lvbj8udXNlcm5hbWUgfHwgJy0nO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0YWJJZCkgPT4gb25DaGFuZ2U/Lih0YWJJZCk7XHJcbiAgY29uc3QgcmVuZGVyTGl2ZUluZGljYXRvciA9ICgpID0+XHJcbiAgICBsaXZlU3RhdHVzID09PSAndW5rbm93bicgJiYgIWxpdmVVcGRhdGVkQXQgPyAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjM1ZW1dIHRleHQtc2xhdGUtNTAwXCI+e1VJX1RFWFQubGl2ZUZhbGxiYWNrfTwvc3Bhbj5cclxuICAgICkgOiAoXHJcbiAgICAgIDxMaXZlQmFkZ2UgdGltZXN0YW1wPXtsaXZlVXBkYXRlZEF0fSBzdGF0dXM9e2xpdmVTdGF0dXN9IC8+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0zMCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC84MCBiYWNrZHJvcC1ibHVyIGxnOmhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIHB4LTQgcHktM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi13LVs4OHB4XSBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtyZW5kZXJMaXZlSW5kaWNhdG9yKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYXgtdy1bNjB2d10gdHJ1bmNhdGVcIj57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctWzk2cHhdIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3Zlcjpib3JkZXItcm9zZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7VUlfVEVYVC5sb2dvdXR9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCBib3R0b20tMCB6LTMwIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzk1IHB4LTQgcHktMiBiYWNrZHJvcC1ibHVyIGxnOmhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgIHtWSUVXX1RBQlMubWFwKCh0YWIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IFZJRVdfVEFCX0lDT05TW3RhYi5pZF0gfHwgSWNvbkRvdHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlVGFiID09PSB0YWIuaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QodGFiLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ2ZsZXgtMSByb3VuZGVkLTJ4bCBweC0zIHB5LTIgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JnLWluZGlnby02MDAvMjAgdGV4dC1pbmRpZ28tMjAwJyA6ICd0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RhYi5sYWJlbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkNvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ214LWF1dG8gaC02IHctNicsIGlzQWN0aXZlID8gJ3RleHQtaW5kaWdvLTMwMCcgOiAndGV4dC1zbGF0ZS00MDAnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57dGFiLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBEYXNoYm9hcmRWaWV3ID0gKHsgZGF0YSwgb25PcGVuQXBwb2ludG1lbnQsIG9uT3BlblByb2ZpbGUsIG9uQ3JlYXRlQXBwb2ludG1lbnQgfSkgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nU3RhdGUgLz47XHJcbiAgY29uc3Qgc3RhdHMgPSBkYXRhLnN0YXRzIHx8IHt9O1xyXG5cclxuICBjb25zdCB1cGNvbWluZ1JhdyA9IGRhdGEuYXBwb2ludG1lbnRzPy51cGNvbWluZyB8fCBbXTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdMaXN0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBub3dUcyA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gdXBjb21pbmdSYXdcclxuICAgICAgLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcHQuRGF0ZSwgYXBwdC5UaW1lLCBhcHB0LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBnZXRBcHBvaW50bWVudEVuZERhdGUoYXBwdC5EYXRlLCBhcHB0LlRpbWUsIGFwcHQuc3RhcnREYXRlVGltZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmFwcHQsXHJcbiAgICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGFwcHQuU3RhdHVzKSxcclxuICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigoYXBwdCkgPT4gc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50KGFwcHQsIG5vd1RzKSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYS5EYXRlLCBhLlRpbWUsIGEuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBjb25zdCByaWdodCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGIuRGF0ZSwgYi5UaW1lLCBiLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgcmV0dXJuIGxlZnQgLSByaWdodDtcclxuICAgICAgfSlcclxuICAgICAgLnNsaWNlKDAsIDEyKTtcclxuICB9LCBbdXBjb21pbmdSYXddKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0R3JvdXBMYWJlbCA9IHVzZUNhbGxiYWNrKChkYXRlVmFsdWUpID0+IHtcclxuICAgIGlmICghZGF0ZVZhbHVlIHx8IGRhdGVWYWx1ZSA9PT0gJ9CR0LXQtyDQtNCw0YLRiycpIHJldHVybiAn0JHQtdC3INC00LDRgtGLJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke2RhdGVWYWx1ZX1UMDA6MDA6MDBgKTtcclxuICAgICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuIGRhdGVWYWx1ZTtcclxuICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgd2Vla2RheTogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9KS5mb3JtYXQocGFyc2VkKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZGF0ZVZhbHVlO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ3JvdXBlZFVwY29taW5nID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICB1cGNvbWluZ0xpc3QuZm9yRWFjaCgoYXBwdCkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBhcHB0LkRhdGUgfHwgJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICAgIGNvbnN0IGJ1Y2tldCA9IGdyb3Vwcy5nZXQoa2V5KSB8fCBbXTtcclxuICAgICAgYnVja2V0LnB1c2goYXBwdCk7XHJcbiAgICAgIGdyb3Vwcy5zZXQoa2V5LCBidWNrZXQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShncm91cHMuZW50cmllcygpKVxyXG4gICAgICAubWFwKChba2V5LCBpdGVtc10pID0+ICh7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGxhYmVsOiBmb3JtYXRHcm91cExhYmVsKGtleSksXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgc29ydFZhbHVlOiBNYXRoLm1pbihcclxuICAgICAgICAgIC4uLml0ZW1zLm1hcCgoaXRlbSkgPT4gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoaXRlbS5EYXRlLCBpdGVtLlRpbWUsIGl0ZW0uc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcclxuICAgICAgICApLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydFZhbHVlIC0gYi5zb3J0VmFsdWUpO1xyXG4gIH0sIFtmb3JtYXRHcm91cExhYmVsLCB1cGNvbWluZ0xpc3RdKTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdBY3Rpb25zID0gb25DcmVhdGVBcHBvaW50bWVudCA/IChcclxuICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGVBcHBvaW50bWVudH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICsge1VJX1RFWFQubmV3QXBwb2ludG1lbnRDdGF9XHJcbiAgICA8L2J1dHRvbj5cclxuICApIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCa0LvRjtGH0LXQstGL0LUg0L/QvtC60LDQt9Cw0YLQtdC70LhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgc3RhdC1ncmlkXCI+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQktGB0LXQs9C+INC60LvQuNC10L3RgtC+0LJcIiB2YWx1ZT17c3RhdHMudG90YWxVc2VycyA/PyAwfSAvPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0JDQutGC0LjQstC90YvQtSDQt9Cw0L/QuNGB0LhcIiB2YWx1ZT17c3RhdHMuYWN0aXZlQXBwb2ludG1lbnRzID8/IDB9IGFjY2VudD1cInRleHQtZW1lcmFsZC0zMDBcIiAvPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0J/QvtC00YLQstC10YDQttC00LXQvdC+INC30LAg0LPQvtC0XCIgdmFsdWU9e3N0YXRzLmNvbmZpcm1lZFllYXIgPz8gMH0gYWNjZW50PVwidGV4dC1mdWNoc2lhLTMwMFwiIC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQodC10LPQvtC00L3Rj1wiIHZhbHVlPXtzdGF0cy50b2RheXNBcHBvaW50bWVudHMgPz8gMH0gYWNjZW50PVwidGV4dC1jeWFuLTMwMFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQkdC70LjQttCw0LnRiNC40LUg0LfQsNC/0LjRgdC4XCIgYWN0aW9ucz17dXBjb21pbmdBY3Rpb25zfT5cclxuICAgICAgICB7Z3JvdXBlZFVwY29taW5nLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINCx0LvQuNC20LDQudGI0LjRhSDQt9Cw0L/QuNGB0LXQuS48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XHJcbiAgICAgICAgICAgIHtncm91cGVkVXBjb21pbmcubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtncm91cC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbGc6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2dyb3VwLml0ZW1zLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluUHJvZ3Jlc3MgPSBpc0FwcG9pbnRtZW50T25nb2luZyhhcHB0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0LCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiAoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBvbk9wZW5BcHBvaW50bWVudD8uKGFwcHQsIHsgYWxsb3dEZWxldGU6IHRydWUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdncm91cCB1cGNvbWluZy1jYXJkIHJlbGF0aXZlIHctZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNjAgYmctc2xhdGUtOTAwLzcwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206cC01JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcyAmJiAnYm9yZGVyLWVtZXJhbGQtNDAwLzgwIHNoYWRvdy1bMF8wXzI1cHhfcmdiYSgxNiwxODUsMTI5LDAuMjUpXSdcclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHBhcnNlVGltZVJhbmdlUGFydHMoYXBwdC5UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGFwcHQuU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlc0xpc3QgPSBwYXJzZU11bHRpVmFsdWUoYXBwdC5TZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcHB0LmlkIHx8IGAke2dyb3VwLmtleX0tJHthcHB0LkN1c3RvbWVyTmFtZX0tJHthcHB0LlRpbWV9YH0gey4uLmNhcmRQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwLzgwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlQmFkZ2VMYWJlbChhcHB0LkRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSBzbTp0ZXh0LTR4bFwiPntzdGFydCB8fCAn4oCUJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbmQgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMCBzbTp0ZXh0LWJhc2VcIj7QtNC+IHtlbmR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgZ2FwLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHNtOnRleHQteHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0YXR1c0JhZGdlQ2xhc3NlcyhzdGF0dXNMYWJlbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNMYWJlbCB8fCAn0JHQtdC3INGB0YLQsNGC0YPRgdCwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkJhcmJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCR0LDRgNCx0LXRgDp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnthcHB0LkJhcmJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS00IHRleHQtWzEzcHhdIHRleHQtc2xhdGUtMzAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtaW4tdy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5DdXN0b21lck5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT8uKGFwcHQuQ3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBzbTp0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkN1c3RvbWVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj7QkdC10Lcg0LjQvNC10L3QuDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3NlcnZpY2V9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS04MDAvNzAgcHgtMyBweS0xIHRleHQtWzExcHhdIHRleHQtc2xhdGUtMjAwIHNtOnRleHQteHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBzbTp0ZXh0LXNtXCI+0J3QtdGCINCy0YvQsdGA0LDQvdC90YvRhSDRg9GB0LvRg9CzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCYXJiZXJBdmF0YXJQaWNrZXIgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGxvYWRPcHRpb25zIH0pID0+IHtcclxuICBjb25zdCBbYXZhdGFyT3B0aW9ucywgc2V0QXZhdGFyT3B0aW9uc10gPSB1c2VTdGF0ZSgoKSA9PiBhdmF0YXJPcHRpb25zQ2FjaGUgfHwgW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0dhbGxlcnksIHNldFNob3dHYWxsZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gbm9ybWFsaXplSW1hZ2VQYXRoKHZhbHVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIG9uQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSW1hZ2VQYXRoKHZhbHVlKTtcclxuICAgIGlmIChub3JtYWxpemVkICYmIG5vcm1hbGl6ZWQgIT09IHZhbHVlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKG5vcm1hbGl6ZWQpO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZSwgb25DaGFuZ2VdKTtcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFub3JtYWxpemVkVmFsdWUgfHwgYXZhdGFyT3B0aW9ucy5pbmNsdWRlcyhub3JtYWxpemVkVmFsdWUpKSByZXR1cm4gYXZhdGFyT3B0aW9ucztcclxuICAgIHJldHVybiBbbm9ybWFsaXplZFZhbHVlLCAuLi5hdmF0YXJPcHRpb25zXTtcclxuICB9LCBbYXZhdGFyT3B0aW9ucywgbm9ybWFsaXplZFZhbHVlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gdHlwZW9mIGxvYWRPcHRpb25zID09PSAnZnVuY3Rpb24nID8gbG9hZE9wdGlvbnMgOiBmZXRjaEF2YXRhck9wdGlvbnM7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzUGF5bG9hZCA9IGF3YWl0IGxvYWRlcigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0gQXJyYXkuaXNBcnJheShhc3NldHNQYXlsb2FkKVxyXG4gICAgICAgICAgPyBhc3NldHNQYXlsb2FkXHJcbiAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoYXNzZXRzUGF5bG9hZD8uaW1hZ2VzKVxyXG4gICAgICAgICAgICA/IGFzc2V0c1BheWxvYWQuaW1hZ2VzXHJcbiAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgYXZhdGFyT3B0aW9uc0NhY2hlID0gYXNzZXRzO1xyXG4gICAgICAgIHNldEF2YXRhck9wdGlvbnMoYXNzZXRzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBdmF0YXIgbG9hZCBlcnJvcicsIGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxvYWQoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbbG9hZE9wdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgcHJldmlld1NyYyA9IHJlc29sdmVBc3NldFVybChub3JtYWxpemVkVmFsdWUgfHwgYXZhdGFyT3B0aW9uc1swXSB8fCAnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAgc2hhZG93LTJ4bFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNTIgdy1mdWxsIGJnLXNsYXRlLTkwMFwiPlxyXG4gICAgICAgIHtwcmV2aWV3U3JjID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9e3ByZXZpZXdTcmN9IGFsdD1cImF2YXRhciBwcmV2aWV3XCIgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjRlbV0gdGV4dC1zbGF0ZS01MDBcIj7QvdC10YIg0YTQvtGC0L48L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tc2xhdGUtOTUwLzgwIHZpYS1zbGF0ZS05NTAvMTAgdG8tdHJhbnNwYXJlbnRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj7QotC10LrRg9GJ0LXQtSDRhNC+0YLQvjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgIHtub3JtYWxpemVkVmFsdWUgPyBub3JtYWxpemVkVmFsdWUucmVwbGFjZSgnL0ltYWdlLycsICcnKSA6ICfQndC1INCy0YvQsdGA0LDQvdC+J31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dHYWxsZXJ5KChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tMjAwIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby00MDAgaG92ZXI6dGV4dC13aGl0ZSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6Ym9yZGVyLXNsYXRlLTgwMCBkaXNhYmxlZDp0ZXh0LXNsYXRlLTUwMFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8ICghYXZhdGFyT3B0aW9ucy5sZW5ndGggJiYgIW5vcm1hbGl6ZWRWYWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ9Ch0LrQsNC90LjRgNGD0Y4uLi4nIDogc2hvd0dhbGxlcnkgPyAn0KHQutGA0YvRgtGMINCz0LDQu9C10YDQtdGOJyA6ICfQntGC0LrRgNGL0YLRjCDQs9Cw0LvQtdGA0LXRjid9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKCcnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1yb3NlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0JHQtdC3INC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93R2FsbGVyeSAmJiBhdmF0YXJPcHRpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zIHNtOmdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICAgIHthdmF0YXJPcHRpb25zLm1hcCgocHJlc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHByZXNldCA9PT0gbm9ybWFsaXplZFZhbHVlO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UocHJlc2V0KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLTJ4bCBib3JkZXIgcC0xLjUgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3ZlcjpiZy1zbGF0ZS04MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAnYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMC8xNScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAnXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXNvbHZlQXNzZXRVcmwocHJlc2V0KX0gYWx0PVwiYXZhdGFyIHByZXNldFwiIGNsYXNzTmFtZT1cImgtMjAgdy1mdWxsIHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWF2YXRhck9wdGlvbnMubGVuZ3RoICYmICFsb2FkaW5nICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QlNC+0LHQsNCy0YzRgtC1INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LIg0L/QsNC/0LrRgyAvSW1hZ2UsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0Ywg0LDQstCw0YLQsNGALjwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IERBWV9JTkRFWF9MT09LVVAgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGZ1bGwgPSBbJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstC10YDQsycsICfQv9GP0YLQvdC40YbQsCcsICfRgdGD0LHQsdC+0YLQsCcsICfQstC+0YHQutGA0LXRgdC10L3RjNC1J107XHJcbiAgY29uc3Qgc2hvcnQgPSBbJ9C/0L0nLCAn0LLRgicsICfRgdGAJywgJ9GH0YInLCAn0L/RgicsICfRgdCxJywgJ9Cy0YEnXTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBmdWxsLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICBtYXBbbmFtZV0gPSBpbmRleDtcclxuICB9KTtcclxuICBzaG9ydC5mb3JFYWNoKChuYW1lLCBpbmRleCkgPT4ge1xyXG4gICAgbWFwW25hbWVdID0gaW5kZXg7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1hcDtcclxufSkoKTtcclxuY29uc3QgZ2V0RGF5SW5kZXggPSAodmFsdWUgPSAnJykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVUZXh0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoREFZX0lOREVYX0xPT0tVUFtub3JtYWxpemVkXSkgPyBEQVlfSU5ERVhfTE9PS1VQW25vcm1hbGl6ZWRdIDogNztcclxufTtcclxuY29uc3QgZm9ybWF0U2NoZWR1bGVEYXlTaG9ydCA9IChkYXRlVmFsdWUsIGZhbGxiYWNrRGF5ID0gJycpID0+IHtcclxuICBjb25zdCBzYWZlRGF0ZSA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKTtcclxuICBpZiAoc2FmZURhdGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke3NhZmVEYXRlfVQwMDowMDowMGApO1xyXG4gICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IHdlZWtkYXk6ICdzaG9ydCcgfSkuZm9ybWF0KHBhcnNlZCkucmVwbGFjZSgnLicsICcnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIC8vIG5vb3BcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgbm9ybWFsaXplZEZhbGxiYWNrID0gbm9ybWFsaXplVGV4dChmYWxsYmFja0RheSk7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWRGYWxsYmFjayA/IG5vcm1hbGl6ZWRGYWxsYmFjay5zbGljZSgwLCAyKSA6ICcnO1xyXG59O1xyXG5jb25zdCBmb3JtYXRTY2hlZHVsZURhdGVMYWJlbCA9IChkYXRlVmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlRGF0ZSA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKTtcclxuICBpZiAoIXNhZmVEYXRlKSByZXR1cm4gJyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke3NhZmVEYXRlfVQwMDowMDowMGApO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnIH0pLmZvcm1hdChwYXJzZWQpLnJlcGxhY2UoJy4nLCAnJyk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBpc1RvZGF5RGF0ZSA9IChkYXRlVmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlRGF0ZSA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKTtcclxuICBpZiAoIXNhZmVEYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHRhcmdldCA9IG5ldyBEYXRlKGAke3NhZmVEYXRlfVQwMDowMDowMGApO1xyXG4gIGlmIChOdW1iZXIuaXNOYU4odGFyZ2V0LmdldFRpbWUoKSkpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gKFxyXG4gICAgdG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gdGFyZ2V0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgIHRvZGF5LmdldE1vbnRoKCkgPT09IHRhcmdldC5nZXRNb250aCgpICYmXHJcbiAgICB0b2RheS5nZXREYXRlKCkgPT09IHRhcmdldC5nZXREYXRlKClcclxuICApO1xyXG59O1xyXG5jb25zdCBwYXJzZVNsb3RUaW1lTWludXRlcyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkubWF0Y2goLyhcXGR7MSwyfSk6KFxcZHsyfSkvKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gMDtcclxuICByZXR1cm4gTnVtYmVyKG1hdGNoWzFdKSAqIDYwICsgTnVtYmVyKG1hdGNoWzJdKTtcclxufTtcclxuY29uc3QgZ2V0U2NoZWR1bGVTb3J0VmFsdWUgPSAoc2xvdCkgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChzbG90LkRhdGUpO1xyXG4gIGlmIChzYWZlRGF0ZSkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VkLmdldFRpbWUoKSArIHBhcnNlU2xvdFRpbWVNaW51dGVzKHBhcnNlVGltZVJhbmdlUGFydHMoc2xvdC5XZWVrKS5zdGFydCkgKiA2MDAwMDtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYmFzZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMV8wMDBfMDAwXzAwMDtcclxuICBjb25zdCBkYXlJbmRleCA9IGdldERheUluZGV4KHNsb3QuRGF5T2ZXZWVrKTtcclxuICByZXR1cm4gYmFzZSArIGRheUluZGV4ICogMTAwMDAgKyBwYXJzZVNsb3RUaW1lTWludXRlcyhwYXJzZVRpbWVSYW5nZVBhcnRzKHNsb3QuV2Vlaykuc3RhcnQgfHwgc2xvdC5XZWVrKSAqIDEwO1xyXG59O1xyXG5cclxuY29uc3QgUmF0aW5nU2xpZGVyID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBkZW5zZSA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCByYXRpbmdWYWx1ZSA9IE51bWJlcih2YWx1ZSB8fCBSQVRJTkdfTUFYKS50b0ZpeGVkKDEpO1xyXG4gIGNvbnN0IHdyYXBwZXJDbGFzcyA9IGRlbnNlXHJcbiAgICA/ICdzcGFjZS15LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0xLjUnXHJcbiAgICA6ICdzcGFjZS15LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yJztcclxuICBjb25zdCBsYWJlbENsYXNzID0gZGVuc2VcclxuICAgID8gJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgOiAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1zbGF0ZS0zMDAnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc30+XHJcbiAgICAgICAgPHNwYW4+0KDQtdC50YLQuNC90LM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3JhdGluZ1ZhbHVlfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17UkFUSU5HX01JTn0gbWF4PXtSQVRJTkdfTUFYfSBzdGVwPXtSQVRJTkdfU1RFUH0gdmFsdWU9e051bWJlcih2YWx1ZSkgfHwgUkFUSU5HX01BWH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LWluZGlnby01MDBcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBCYXJiZXJzVmlldyA9ICh7XHJcbiAgYmFyYmVycyA9IFtdLFxyXG4gIHNjaGVkdWxlcyA9IFtdLFxyXG4gIGxvYWRBdmF0YXJPcHRpb25zLFxyXG4gIG9uRmllbGRDaGFuZ2UsXHJcbiAgb25TYXZlLFxyXG4gIG9uQWRkLFxyXG4gIG9uRGVsZXRlLFxyXG4gIG9uU2NoZWR1bGVVcGRhdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcbiAgY29uc3QgW2RyYWZ0QmFyYmVyLCBzZXREcmFmdEJhcmJlcl0gPSB1c2VTdGF0ZShidWlsZE5ld0JhcmJlclN0YXRlKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRvciA9IChtb2RlLCB0YXJnZXRJZCA9IG51bGwpID0+IHtcclxuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICBzZXREcmFmdEJhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiB0cnVlLCBtb2RlLCB0YXJnZXRJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUVkaXRvciA9ICgpID0+IHNldEVkaXRvclN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcblxyXG4gIGNvbnN0IGlzQ3JlYXRlTW9kZSA9IGVkaXRvclN0YXRlLm1vZGUgPT09ICdjcmVhdGUnO1xyXG4gIGNvbnN0IGFjdGl2ZUJhcmJlciA9IGJhcmJlcnMuZmluZCgoYmFyYmVyKSA9PiBiYXJiZXIuaWQgPT09IGVkaXRvclN0YXRlLnRhcmdldElkKSB8fCBudWxsO1xyXG4gIGNvbnN0IHdvcmtpbmdCYXJiZXIgPSBpc0NyZWF0ZU1vZGUgPyBkcmFmdEJhcmJlciA6IGFjdGl2ZUJhcmJlcjtcclxuXHJcbiAgY29uc3Qgd29ya2luZ0JhcmJlclNjaGVkdWxlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIXdvcmtpbmdCYXJiZXI/Lm5hbWUpIHJldHVybiBbXTtcclxuICAgIGNvbnN0IHRhcmdldCA9IG5vcm1hbGl6ZVRleHQod29ya2luZ0JhcmJlci5uYW1lKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlc1xyXG4gICAgICAuZmlsdGVyKChzbG90KSA9PiBub3JtYWxpemVUZXh0KHNsb3QuQmFyYmVyKS50b0xvd2VyQ2FzZSgpID09PSB0YXJnZXQpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBnZXRTY2hlZHVsZVNvcnRWYWx1ZShhKSAtIGdldFNjaGVkdWxlU29ydFZhbHVlKGIpKTtcclxuICB9LCBbd29ya2luZ0JhcmJlciwgc2NoZWR1bGVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpZWxkQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBzZXREcmFmdEJhcmJlcigocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVCYXJiZXIpIHtcclxuICAgICAgb25GaWVsZENoYW5nZT8uKGFjdGl2ZUJhcmJlci5pZCwgZmllbGQsIHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBvbkFkZD8uKGRyYWZ0QmFyYmVyKTtcclxuICAgICAgc2V0RHJhZnRCYXJiZXIoYnVpbGROZXdCYXJiZXJTdGF0ZSgpKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlQmFyYmVyKSB7XHJcbiAgICAgIG9uU2F2ZT8uKGFjdGl2ZUJhcmJlcik7XHJcbiAgICB9XHJcbiAgICBjbG9zZUVkaXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmICghaXNDcmVhdGVNb2RlICYmIGFjdGl2ZUJhcmJlcikge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBvbkRlbGV0ZT8uKGFjdGl2ZUJhcmJlcik7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC5maW5hbGx5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzdWx0LmZpbmFsbHkoKCkgPT4gY2xvc2VFZGl0b3IoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvc2VFZGl0b3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclN0YXR1c0JhZGdlID0gKGJhcmJlcikgPT5cclxuICAgIGJhcmJlciA/IChcclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAncm91bmRlZC1mdWxsIHB4LTIgcHktMC41IHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUnLFxyXG4gICAgICAgICAgYmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdiZy1lbWVyYWxkLTUwMC8xNSB0ZXh0LWVtZXJhbGQtMjAwJyA6ICdiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gQUNUSVZFX0JBUkJFUl9MQUJFTCA6IEhJRERFTl9CQVJCRVJfTEFCRUx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkgOiBudWxsO1xyXG5cclxuICBjb25zdCBjYW5TdWJtaXQgPSBpc0NyZWF0ZU1vZGUgPyBCb29sZWFuKHdvcmtpbmdCYXJiZXI/Lm5hbWU/LnRyaW0oKSAmJiB3b3JraW5nQmFyYmVyPy5wYXNzd29yZD8udHJpbSgpKSA6IEJvb2xlYW4od29ya2luZ0JhcmJlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjaGVkdWxlUGlja2VyQ2hhbmdlID0gYXN5bmMgKHNsb3QsIG5leHRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBvblNjaGVkdWxlVXBkYXRlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcbiAgICBjb25zdCBzbG90SWQgPSBnZXRSZWNvcmRJZChzbG90KTtcclxuICAgIGlmICghc2xvdElkKSByZXR1cm47XHJcbiAgICBhd2FpdCBvblNjaGVkdWxlVXBkYXRlKHNsb3RJZCwge1xyXG4gICAgICBCYXJiZXI6IHNsb3QuQmFyYmVyLFxyXG4gICAgICBEYXRlOiBzbG90LkRhdGUsXHJcbiAgICAgIERheU9mV2Vlazogc2xvdC5EYXlPZldlZWssXHJcbiAgICAgIFdlZWs6IG5leHRWYWx1ZSxcclxuICAgICAgVGltZTogbmV4dFZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0JHQsNGA0LHQtdGA0YtcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdG9yKCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNjAwLzkwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3cgc2hhZG93LWVtZXJhbGQtOTAwLzQwIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7YmFyYmVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDQsdCw0YDQsdC10YDQvtCyINC/0L7QutCwINC/0YPRgdGCLiDQlNC+0LHQsNCy0YzRgtC1INC/0LXRgNCy0L7Qs9C+INGB0L7RgtGA0YPQtNC90LjQutCwLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXZhdGFyU3JjID0gcmVzb2x2ZUFzc2V0VXJsKGJhcmJlci5hdmF0YXJVcmwpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBob25lTGFiZWwgPSBiYXJiZXIucGhvbmUgPyBmb3JtYXRQaG9uZUlucHV0KGJhcmJlci5waG9uZSkgOiAnJztcclxuICAgICAgICAgICAgICBjb25zdCByYXRpbmdMYWJlbCA9IE51bWJlcihiYXJiZXIucmF0aW5nIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtiYXJiZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2VkaXQnLCBiYXJiZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtOTAwLzUwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTYgdy0xNiBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YXRhclNyYyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJTcmN9IGFsdD17YmFyYmVyLm5hbWUgfHwgJ2F2YXRhcid9IGNsYXNzTmFtZT1cImgtMTYgdy0xNiByb3VuZGVkLTJ4bCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiB3LTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLTJ4bCBiZy1zbGF0ZS04MDAgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoYmFyYmVyLm5hbWUgfHwgJ0InKS5zbGljZSgwLCAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIC1ib3R0b20tMSAtcmlnaHQtMSBoLTMgdy0zIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItc2xhdGUtOTAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdiZy1lbWVyYWxkLTQwMCcgOiAnYmctc2xhdGUtNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC1sZ1wiPntiYXJiZXIubmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTdGF0dXNCYWRnZShiYXJiZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC14LTQgZ2FwLXktMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNTAwLzEwIHB4LTIgcHktMC41IHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1pbmRpZ28tMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKYhSB7cmF0aW5nTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGhvbmVMYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPntwaG9uZUxhYmVsfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YmFyYmVyLnRlbGVncmFtSWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj5Ae2JhcmJlci50ZWxlZ3JhbUlkfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhcmJlci5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+e2JhcmJlci5kZXNjcmlwdGlvbn08L3A+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtpc0NyZWF0ZU1vZGUgPyAn0JTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsCcgOiB3b3JraW5nQmFyYmVyPy5uYW1lIHx8ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCx0LDRgNCx0LXRgNCwJ31cclxuICAgICAgICBpc09wZW49e2VkaXRvclN0YXRlLm9wZW59XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VFZGl0b3J9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LTR4bFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHshaXNDcmVhdGVNb2RlICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VFZGl0b3J9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBjYW5TdWJtaXQgPyAnYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC01MDAnIDogJ2JnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMJyA6ICfQodC+0YXRgNCw0L3QuNGC0YwnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHt3b3JraW5nQmFyYmVyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgPEJhcmJlckF2YXRhclBpY2tlciB2YWx1ZT17d29ya2luZ0JhcmJlci5hdmF0YXJVcmx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdhdmF0YXJVcmwnLCB2YWx1ZSl9IGxvYWRPcHRpb25zPXtsb2FkQXZhdGFyT3B0aW9uc30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzgwIHAtNiBzaGFkb3ctaW5uZXIgc2hhZG93LWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIubmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPFJhdGluZ1NsaWRlciBkZW5zZSB2YWx1ZT17d29ya2luZ0JhcmJlci5yYXRpbmd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdyYXRpbmcnLCBldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIucGFzc3dvcmQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgINCm0LLQtdGCXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9ey9eIy8udGVzdCh3b3JraW5nQmFyYmVyLmNvbG9yIHx8ICcnKSA/IHdvcmtpbmdCYXJiZXIuY29sb3IgOiAnIzZkMjhkOSd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2NvbG9yJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTYgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBiZy10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLmRlc2NyaXB0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnZGVzY3JpcHRpb24nLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5waG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQotC10LvQtdGE0L7QvVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLnRlbGVncmFtSWQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCd0ZWxlZ3JhbUlkJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlZ3JhbSBJRFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdpc0FjdGl2ZScsICEod29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UpKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC0yeGwgYm9yZGVyIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYm9yZGVyLWVtZXJhbGQtNDAwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0yMDAnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzYwIHRleHQtc2xhdGUtNDAwJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57d29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyBBQ1RJVkVfQkFSQkVSX0xBQkVMIDogSElEREVOX0JBUkJFUl9MQUJFTH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaC01IHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdib3JkZXItZW1lcmFsZC0zMDAgYmctZW1lcmFsZC00MDAvMjAgdGV4dC1lbWVyYWxkLTEwMCcgOiAnYm9yZGVyLXNsYXRlLTYwMCB0ZXh0LXNsYXRlLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ+KckycgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QoNCw0YHQv9C40YHQsNC90LjQtTwvcD5cclxuICAgICAgICAgICAgICAgIHt3b3JraW5nQmFyYmVyU2NoZWR1bGUubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTUgMnhsOmdyaWQtY29scy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmtpbmdCYXJiZXJTY2hlZHVsZS5tYXAoKHNsb3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RJZCA9IGdldFJlY29yZElkKHNsb3QpIHx8IGAke3Nsb3QuQmFyYmVyfS0ke3Nsb3QuRGF0ZX0tJHtzbG90LldlZWt9YDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVWYWx1ZSA9IHNsb3QuV2VlayB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheUxhYmVsID0gZm9ybWF0U2NoZWR1bGVEYXlTaG9ydChzbG90LkRhdGUsIHNsb3QuRGF5T2ZXZWVrKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsKHNsb3QuRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZGF5U2xvdCA9IGlzVG9kYXlEYXRlKHNsb3QuRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzbG90SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYmctc2xhdGUtOTAwLzYwIHAtMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZGF5U2xvdCA/ICdib3JkZXItZW1lcmFsZC00MDAvNzAgcmluZy0xIHJpbmctZW1lcmFsZC00MDAvMzAnIDogJ2JvcmRlci1zbGF0ZS04MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEgdGV4dC1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tkYXlMYWJlbCwgZGF0ZUxhYmVsXS5maWx0ZXIoQm9vbGVhbikuam9pbignIMK3ICcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlU2NoZWR1bGVQaWNrZXJDaGFuZ2Uoc2xvdCwgbmV4dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtMyBweS0yIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQstGA0LXQvNC10L3QuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0YDQtdC80Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+0JTQu9GPINGN0YLQvtCz0L4g0LHQsNGA0LHQtdGA0LAg0L3QtdGCINC30LDQv9C70LDQvdC40YDQvtCy0LDQvdC90YvRhSDRgdC70L7RgtC+0LIuPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwLCDRh9GC0L7QsdGLINC40LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1LjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzVmlldyA9ICh7IHNlcnZpY2VzID0gW10sIGJhcmJlcnMgPSBbXSwgb25GaWVsZENoYW5nZSwgb25QcmljZUNoYW5nZSwgb25EZWxldGUsIG9uQWRkIH0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcbiAgY29uc3QgW2RyYWZ0U2VydmljZSwgc2V0RHJhZnRTZXJ2aWNlXSA9IHVzZVN0YXRlKGJ1aWxkTmV3U2VydmljZVN0YXRlKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRvciA9IChtb2RlLCB0YXJnZXRJZCA9IG51bGwpID0+IHtcclxuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoYnVpbGROZXdTZXJ2aWNlU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IHRydWUsIG1vZGUsIHRhcmdldElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdG9yID0gKCkgPT4gc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgaXNDcmVhdGVNb2RlID0gZWRpdG9yU3RhdGUubW9kZSA9PT0gJ2NyZWF0ZSc7XHJcbiAgY29uc3QgYWN0aXZlU2VydmljZSA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IGVkaXRvclN0YXRlLnRhcmdldElkKSB8fCBudWxsO1xyXG4gIGNvbnN0IHdvcmtpbmdTZXJ2aWNlID0gaXNDcmVhdGVNb2RlID8gZHJhZnRTZXJ2aWNlIDogYWN0aXZlU2VydmljZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZSgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVTZXJ2aWNlKSB7XHJcbiAgICAgIG9uRmllbGRDaGFuZ2U/LihhY3RpdmVTZXJ2aWNlLmlkLCBmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaWNlQ2hhbmdlID0gKGJhcmJlcklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoKHByZXYpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBwcmljZXM6IHsgLi4uKHByZXYucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVTZXJ2aWNlKSB7XHJcbiAgICAgIG9uUHJpY2VDaGFuZ2U/LihhY3RpdmVTZXJ2aWNlLmlkLCBiYXJiZXJJZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIGlmICghd29ya2luZ1NlcnZpY2U/Lm5hbWU/LnRyaW0oKSkgcmV0dXJuO1xyXG4gICAgICBvbkFkZD8uKGRyYWZ0U2VydmljZSk7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZShidWlsZE5ld1NlcnZpY2VTdGF0ZSgpKTtcclxuICAgIH1cclxuICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTG9jYWwgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ3JlYXRlTW9kZSAmJiBhY3RpdmVTZXJ2aWNlKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG9uRGVsZXRlPy4oYWN0aXZlU2VydmljZSk7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC5maW5hbGx5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzdWx0LmZpbmFsbHkoKCkgPT4gY2xvc2VFZGl0b3IoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvc2VFZGl0b3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlcnZpY2VQcmljZVN1bW1hcnkgPSAoc2VydmljZSkgPT4ge1xyXG4gICAgaWYgKCFzZXJ2aWNlKSB7XHJcbiAgICAgIHJldHVybiB7IGxhYmVsOiAn4oCUJywgZGV0YWlsczogJycgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbHVlcyA9IGJhcmJlcnNcclxuICAgICAgLm1hcCgoYmFyYmVyKSA9PiBOdW1iZXIoc2VydmljZS5wcmljZXM/LltiYXJiZXIuaWRdKSlcclxuICAgICAgLmZpbHRlcigocHJpY2UpID0+IE51bWJlci5pc0Zpbml0ZShwcmljZSkgJiYgcHJpY2UgPj0gMCk7XHJcbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogJ9Cm0LXQvdGLINC90LUg0LfQsNC00LDQvdGLJyxcclxuICAgICAgICBkZXRhaWxzOiBiYXJiZXJzLmxlbmd0aCA/ICfQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQtNC+0LHQsNCy0LjRgtGMJyA6ICfQndC10YIg0LHQsNGA0LHQtdGA0L7QsiDQtNC70Y8g0L3QsNC30L3QsNGH0LXQvdC40Y8nLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udmFsdWVzKTtcclxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XHJcbiAgICBjb25zdCBjb3VudCA9IHZhbHVlcy5sZW5ndGg7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogbWluID09PSBtYXggPyBmb3JtYXRDdXJyZW5jeShtaW4pIDogYCR7Zm9ybWF0Q3VycmVuY3kobWluKX0g4oCTICR7Zm9ybWF0Q3VycmVuY3kobWF4KX1gLFxyXG4gICAgICBkZXRhaWxzOiBg0JTQu9GPICR7Y291bnR9ICR7cGx1cmFsaXplKGNvdW50LCBbJ9Cx0LDRgNCx0LXRgNCwJywgJ9Cx0LDRgNCx0LXRgNCwJywgJ9Cx0LDRgNCx0LXRgNC+0LInXSl9YCxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuU3VibWl0ID0gaXNDcmVhdGVNb2RlID8gQm9vbGVhbih3b3JraW5nU2VydmljZT8ubmFtZT8udHJpbSgpKSA6IHRydWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8U2VjdGlvbkNhcmRcclxuICAgICAgICB0aXRsZT1cItCj0YHQu9GD0LPQuFwiXHJcbiAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2NyZWF0ZScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAvOTAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdyBzaGFkb3ctZW1lcmFsZC05MDAvNDAgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0YPRgdC70YPQs9GDXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7c2VydmljZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QodC/0LjRgdC+0Log0YPRgdC70YPQsyDQv9GD0YHRgi4g0JTQvtCx0LDQstGM0YLQtSDQv9C10YDQstGD0Y4g0YPRgdC70YPQs9GDLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gc2VydmljZVByaWNlU3VtbWFyeShzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2VkaXQnLCBzZXJ2aWNlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCB3LWZ1bGwgZmxleC1jb2wgZ2FwLTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtOTAwLzUwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC1sZ1wiPntzZXJ2aWNlLm5hbWUgfHwgJ9CR0LXQtyDQvdCw0LfQstCw0L3QuNGPJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXNsYXRlLTgwMCBweC0yIHB5LTAuNSB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5kdXJhdGlvbiA/IGAke3NlcnZpY2UuZHVyYXRpb259INC80LjQvWAgOiAn4oCUJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0xMDBcIj57c3VtbWFyeS5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntzdW1tYXJ5LmRldGFpbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2lzQ3JlYXRlTW9kZSA/ICfQndC+0LLQsNGPINGD0YHQu9GD0LPQsCcgOiB3b3JraW5nU2VydmljZT8ubmFtZSB8fCAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRg9GB0LvRg9Cz0LgnfVxyXG4gICAgICAgIGlzT3Blbj17ZWRpdG9yU3RhdGUub3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUVkaXRvcn1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctM3hsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFpc0NyZWF0ZU1vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlTG9jYWx9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCI+XHJcbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlRWRpdG9yfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblN1Ym1pdH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAncm91bmRlZC1sZyBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID8gJ2JnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyA6ICdiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0NyZWF0ZU1vZGUgPyAn0JTQvtCx0LDQstC40YLRjCcgOiAn0JPQvtGC0L7QstC+J31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7d29ya2luZ1NlcnZpY2UgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QndCw0LfQstCw0L3QuNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UubmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YAsINGB0YLRgNC40LbQutCwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QlNC70LjRgtC10LvRjNC90L7RgdGC0YwsINC80LjQvTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbj17NX1cclxuICAgICAgICAgICAgICAgICAgc3RlcD17NX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdTZXJ2aWNlLmR1cmF0aW9uID8/ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpZWxkQ2hhbmdlKCdkdXJhdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycgPyAnJyA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnaXNBY3RpdmUnLCAhKHdvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtMnhsIGJvcmRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICB3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYm9yZGVyLWVtZXJhbGQtNDAwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0yMDAnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzYwIHRleHQtc2xhdGUtNDAwJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gQUNUSVZFX1NFUlZJQ0VfTEFCRUwgOiBISURERU5fU0VSVklDRV9MQUJFTH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaC01IHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTMwMCBiZy1lbWVyYWxkLTQwMC8yMCB0ZXh0LWVtZXJhbGQtMTAwJyA6ICdib3JkZXItc2xhdGUtNjAwIHRleHQtc2xhdGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7d29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gJ1xcdTI3MTMnIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QptC10L3RiyDQv9C+INCx0LDRgNCx0LXRgNCw0Lw8L3A+XHJcbiAgICAgICAgICAgICAge2JhcmJlcnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIHNtOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGtleT17YmFyYmVyLmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdTZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0gPz8gJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVByaWNlQ2hhbmdlKGJhcmJlci5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0JTQvtCx0LDQstGM0YLQtSDQsdCw0YDQsdC10YDQvtCyLCDRh9GC0L7QsdGLINC90LDQt9C90LDRh9Cw0YLRjCDRhtC10L3Riy48L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INGD0YHQu9GD0LPRgyDQtNC70Y8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjy48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdENlbGwgPSAoeyB2YWx1ZSwgb3B0aW9ucyA9IFtdLCBvbkNvbW1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB0b3A6IDAsIGxlZnQ6IDAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWFuY2hvclJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gYW5jaG9yUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBwYW5lbFdpZHRoID0gMzIwO1xyXG4gICAgY29uc3QgcGFuZWxIZWlnaHQgPSAzNjA7XHJcbiAgICBjb25zdCBuZXh0TGVmdCA9IE1hdGgubWluKHJlY3QubGVmdCwgd2luZG93LmlubmVyV2lkdGggLSBwYW5lbFdpZHRoIC0gMTYpO1xyXG4gICAgY29uc3QgbmV4dFRvcCA9IE1hdGgubWluKHJlY3QuYm90dG9tICsgOCwgd2luZG93LmlubmVySGVpZ2h0IC0gcGFuZWxIZWlnaHQgLSAxNik7XHJcbiAgICBzZXRQb3NpdGlvbih7XHJcbiAgICAgIHRvcDogTWF0aC5tYXgoMTYsIG5leHRUb3ApLFxyXG4gICAgICBsZWZ0OiBNYXRoLm1heCgxNiwgbmV4dExlZnQpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgdXBkYXRlUG9zaXRpb24oKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtvcGVuLCB1cGRhdGVQb3NpdGlvbl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcHRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHByZXYuaW5jbHVkZXMob3B0aW9uKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pIDogWy4uLnByZXYsIG9wdGlvbl0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgb25Db21taXQoZHJhZnQuam9pbignLCAnKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gZHJhZnQubGVuZ3RoID8gZHJhZnQuam9pbignLCAnKSA6ICfQktGL0LHRgNCw0YLRjCDRg9GB0LvRg9Cz0LgnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1heC1oLVs0MHB4XSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLXByZS13cmFwXCI+e3N1bW1hcnl9PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge29wZW4gJiZcclxuICAgICAgICBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MFwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBtYXgtdy14cyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvOTUgcC0zIHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke3Bvc2l0aW9uLnRvcH1weGAsIGxlZnQ6IGAke3Bvc2l0aW9uLmxlZnR9cHhgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+0KPRgdC70YPQs9C4PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMSB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZHJhZnQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMiBmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZHJhZnQubWFwKChzZXJ2aWNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8yMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3B0aW9uKHNlcnZpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj4/PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBzcGFjZS15LTEgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA9PT0gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQtNC+0YHRgtGD0L/QvdGL0YUg0YPRgdC70YPQszwvcD59XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGRyYWZ0LmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTIgdGV4dC1sZWZ0XCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNBY3RpdmV9IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVPcHRpb24ob3B0aW9uKX0gY2xhc3NOYW1lPVwiaC00IHctNCByb3VuZGVkIGJvcmRlci1zbGF0ZS01MDAgYWNjZW50LWluZGlnby01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXREcmFmdChbXSl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGltZVJhbmdlUGlja2VyID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICB0aXRsZSA9ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4JyxcclxuICBwbGFjZWhvbGRlciA9ICfQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCcsXHJcbiAgYnV0dG9uQ2xhc3NOYW1lID0gJ3ctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZSB3aGl0ZXNwYWNlLW5vd3JhcCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3sgc3RhcnQsIGVuZCB9LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSgoKSA9PiBwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZUhvdXJWYWx1ZSA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybiAnJztcclxuICAgIGNvbnN0IFtob3Vyc10gPSBpbnB1dFZhbHVlLnNwbGl0KCc6Jyk7XHJcbiAgICBpZiAoIWhvdXJzKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gYCR7aG91cnMucGFkU3RhcnQoMiwgJzAnKX06MDBgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGJ1aWxkVGltZVJhbmdlVmFsdWUoc3RhcnQsIGVuZCkpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKCcwJyk7XHJcbiAgICBzZXREcmFmdCh7IHN0YXJ0OiAnJywgZW5kOiAnJyB9KTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX0+XHJcbiAgICAgICAge3ZhbHVlID8gdmFsdWUgOiBwbGFjZWhvbGRlcn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBpc09wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LW1kXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQl9Cw0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQstGA0LXQvNGPINC00LvRjyDQvdCw0YfQsNC70LAg0Lgg0LfQsNCy0LXRgNGI0LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtMTAwXCI+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgZ2FwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNjAgcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMFwiPtCh0YLQsNGA0YI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjM2MDBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIHN0YXJ0OiBub3JtYWxpemVIb3VyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMzIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS01MDBcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj7QpNC40L3QuNGIPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIzNjAwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgZW5kOiBub3JtYWxpemVIb3VyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMzIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7IHJlY29yZCwgY29sdW1uLCBvcHRpb25zLCBvblVwZGF0ZSwgb25PcGVuUHJvZmlsZSwgdGFibGVJZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVjb3JkSWQgPSByZWNvcmQ/LmlkIHx8IHJlY29yZD8uSWQgfHwgcmVjb3JkPy5JRCB8fCByZWNvcmQ/LnJlY29yZElkO1xyXG4gIGNvbnN0IHZhbHVlID0gcmVjb3JkW2NvbHVtbi5rZXldO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUodmFsdWUgPz8gJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RHJhZnQodmFsdWUgPz8gJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBpZiAoIWNvbHVtbi5lZGl0YWJsZSkge1xyXG4gICAgaWYgKGNvbHVtbi5pc1Byb2ZpbGVMaW5rKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk9wZW5Qcm9maWxlPy4odmFsdWUpfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAge3ZhbHVlIHx8ICctJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCB3aGl0ZXNwYWNlLW5vcm1hbCBicmVhay13b3JkcyBsZWFkaW5nLXRpZ2h0XCI+e3ZhbHVlIHx8ICctJ308L3NwYW4+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWl0ID0gKG5leHRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IG5leHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFZhbHVlIDogZHJhZnQ7XHJcbiAgICBpZiAoKHZhbHVlID8/ICcnKSA9PT0gKHBheWxvYWQgPz8gJycpKSByZXR1cm47XHJcbiAgICBvblVwZGF0ZShyZWNvcmRJZCwgeyBbY29sdW1uLmtleV06IHBheWxvYWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKFxyXG4gICAgKHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGNvbHVtbi5rZXkgPT09ICdUaW1lJykgfHxcclxuICAgICh0YWJsZUlkID09PSAnU2NoZWR1bGVzJyAmJiBjb2x1bW4ua2V5ID09PSAnV2VlaycpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGltZVJhbmdlUGlja2VyXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBjb21taXQobmV4dFZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuKAlFwiXHJcbiAgICAgICAgdGl0bGU9e3RhYmxlSWQgPT09ICdTY2hlZHVsZXMnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICBidXR0b25DbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoY29sdW1uLnR5cGUpIHtcclxuICAgIGNhc2UgJ3NlbGVjdCc6IHtcclxuICAgICAgY29uc3Qgb3B0aW9uTGlzdCA9IGNvbHVtbi5vcHRpb25zS2V5ID8gb3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW10gOiBbXTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAge29wdGlvbkxpc3QubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09IDEgfHwgdmFsdWUgPT09ICcxJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC5jaGVja2VkID8gJ3RydWUnIDogJycpfSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICk7XHJcbiAgICBjYXNlICdtdWx0aS1zZWxlY3QnOlxyXG4gICAgICByZXR1cm4gPE11bHRpU2VsZWN0Q2VsbCB2YWx1ZT17dmFsdWV9IG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfSBvbkNvbW1pdD17Y29tbWl0fSAvPjtcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXt2YWx1ZSA/IFN0cmluZyh2YWx1ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkcmFmdCB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gb25CbHVyPXsoKSA9PiBjb21taXQoKX0gb25LZXlEb3duPXsoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBjb21taXQoKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbHVtbk1lbnUgPSAoeyBjb2x1bW5zLCBoaWRkZW5Db2x1bW5zID0gW10sIG9uVG9nZ2xlIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LWF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAg0J/QvtC70Y9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTMwIG10LTIgdy02NCBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwLTMgc2hhZG93LTJ4bCBzbTpsZWZ0LWF1dG8gc206cmlnaHQtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KX0gb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKGNvbHVtbi5rZXkpfSAvPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdENoZWNrYm94ZXMgPSAoeyBsYWJlbCwgb3B0aW9ucyA9IFtdLCB2YWx1ZSA9IFtdLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSAn0J3QtdGCINC00LDQvdC90YvRhScgfSkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlTWVtbygoKSA9PiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpLCBbdmFsdWVdKTtcclxuICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBxdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFub3JtYWxpemVkUXVlcnkpIHJldHVybiBvcHRpb25zO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkpO1xyXG4gIH0sIFtvcHRpb25zLCBub3JtYWxpemVkUXVlcnldKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKCFvbkNoYW5nZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZXhpc3RzID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgIGNvbnN0IG5leHQgPSBleGlzdHMgPyBzZWxlY3RlZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4uc2VsZWN0ZWQsIG9wdGlvbl07XHJcbiAgICBvbkNoYW5nZShuZXh0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57c2VsZWN0ZWQubGVuZ3RoID8gYCR7c2VsZWN0ZWQubGVuZ3RofSDQstGL0LHRgNCw0L3QvmAgOiAn0J3QtSDQstGL0LHRgNCw0L3Qvid9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAge3NlbGVjdGVkLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8xMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoc2VydmljZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZXJ2aWNlfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy1ub25lIHRleHQtc2xhdGUtNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtMyBweS0yXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtc2xhdGUtNDAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17MS41fSBkPVwiTTIxIDIxbC00LjM1LTQuMzVtMCAwQTcuNSA3LjUgMCAxMDE2LjY1IDE2LjY1elwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDRg9GB0LvRg9Cz0LhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctdHJhbnNwYXJlbnQgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtxdWVyeSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KCcnKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBvdmVyZmxvdy15LWF1dG8gcC0yXCI+XHJcbiAgICAgICAgICB7ZmlsdGVyZWQubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0xIHB5LTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPntwbGFjZWhvbGRlcn08L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWQubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUob3B0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20nLFxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNDAnXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e29wdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTMwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2xpZW50TG9va3VwSW5wdXQgPSAoe1xyXG4gIGxhYmVsID0gJ9Ca0LvQuNC10L3RgicsXHJcbiAgdmFsdWUgPSAnJyxcclxuICBvbkNoYW5nZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgb25TZWxlY3RDbGllbnQsXHJcbiAgcGxhY2Vob2xkZXIgPSAn0J3QsNGH0L3QuNGC0LUg0LLQstC+0LTQuNGC0Ywg0LjQvNGPINC40LvQuCDRgtC10LvQtdGE0L7QvScsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UXVlcnkodmFsdWUgfHwgJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dChxdWVyeSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNob3J0bGlzdCA9IG5vcm1hbGl6ZWRcclxuICAgICAgPyBjbGllbnRzLmZpbHRlcihcclxuICAgICAgICAgIChjbGllbnQpID0+XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50Lm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZCkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplVGV4dChjbGllbnQucGhvbmUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZClcclxuICAgICAgICApXHJcbiAgICAgIDogY2xpZW50cztcclxuICAgIHJldHVybiBzaG9ydGxpc3Quc2xpY2UoMCwgNik7XHJcbiAgfSwgW2NsaWVudHMsIHF1ZXJ5XSk7XHJcblxyXG4gIHVzZU91dHNpZGVDbGljayhjb250YWluZXJSZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjbGllbnQ/Lm5hbWUgfHwgJyc7XHJcbiAgICBzZXRRdWVyeShuZXh0VmFsdWUpO1xyXG4gICAgb25DaGFuZ2U/LihuZXh0VmFsdWUpO1xyXG4gICAgb25TZWxlY3RDbGllbnQ/LihjbGllbnQpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0xXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2U/LihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtvcGVuICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIG10LTEgdy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzk1IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHttYXRjaGVzLm1hcCgoY2xpZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1zdGFydCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsYXN0OmJvcmRlci1ub25lIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoY2xpZW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2xpZW50Lm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntjbGllbnQucGhvbmUgfHwgJ9Ci0LXQu9C10YTQvtC9INC90LUg0YPQutCw0LfQsNC9J308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdHVzTWVudSA9ICh7IHN0YXR1c2VzID0gW10sIGhpZGRlblN0YXR1c2VzID0gW10sIG9uVG9nZ2xlLCBvblJlc2V0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LWF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAg0KHRgtCw0YLRg9GB0YtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTMwIG10LTIgdy02NCBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwLTMgc2hhZG93LTJ4bCBzbTpsZWZ0LWF1dG8gc206cmlnaHQtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3N0YXR1c2VzLmxlbmd0aCA9PT0gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0J3QtdGCINGB0YLQsNGC0YPRgdC+0LI8L3A+fVxyXG4gICAgICAgICAge3N0YXR1c2VzLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e3N0YXR1c30gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshaGlkZGVuU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKX0gb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKHN0YXR1cyl9IC8+XHJcbiAgICAgICAgICAgICAge3N0YXR1c31cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblJlc2V0fSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAg0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBUYWJsZVRvb2xiYXIgPSAoe1xyXG4gIHRhYmxlSWQsXHJcbiAgc2VhcmNoVGVybSxcclxuICBzZXRTZWFyY2hUZXJtLFxyXG4gIHN1cHBvcnRzQmFyYmVyRmlsdGVyLFxyXG4gIHNlbGVjdGVkQmFyYmVyLFxyXG4gIHNldFNlbGVjdGVkQmFyYmVyLFxyXG4gIGJhcmJlcnMgPSBbXSxcclxuICBzdXBwb3J0c1N0YXR1c0ZpbHRlcixcclxuICBzdGF0dXNlcyA9IFtdLFxyXG4gIGhpZGRlblN0YXR1c2VzID0gW10sXHJcbiAgdG9nZ2xlU3RhdHVzLFxyXG4gIHJlc2V0U3RhdHVzZXMsXHJcbiAgY29sdW1ucyA9IFtdLFxyXG4gIGhpZGRlbkNvbHVtbnMgPSBbXSxcclxuICB0b2dnbGVDb2x1bW4sXHJcbiAgY2FuQ3JlYXRlLFxyXG4gIG9uT3BlbkNyZWF0ZSxcclxuICBvblJlZnJlc2gsXHJcbiAgc2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc3VwcG9ydHNHcm91cGluZyA9IGZhbHNlLFxyXG4gIGdyb3VwQnlEYXRlID0gZmFsc2UsXHJcbiAgc2V0R3JvdXBCeURhdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBjaGlwQ2xhc3MgPSAoYWN0aXZlKSA9PlxyXG4gICAgY2xhc3NOYW1lcyhcclxuICAgICAgJ3JvdW5kZWQtZnVsbCBib3JkZXIgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRyYW5zaXRpb24gd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1jZW50ZXInLFxyXG4gICAgICBhY3RpdmUgPyAnYm9yZGVyLWluZGlnby00MDAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnIDogJ2JvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTUwMCdcclxuICAgICk7XHJcbiAgY29uc3QgYWxsb3dNYW51YWxSZWZyZXNoID0gdHlwZW9mIG9uUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiAhWydBcHBvaW50bWVudHMnLCAnVXNlcnMnXS5pbmNsdWRlcyh0YWJsZUlkKTtcclxuICBjb25zdCBpbmxpbmVDcmVhdGVGb3JNb2JpbGUgPSBjYW5DcmVhdGUgJiYgdHlwZW9mIG9uT3BlbkNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBbJ0FwcG9pbnRtZW50cycsICdVc2VycyddLmluY2x1ZGVzKHRhYmxlSWQpO1xyXG4gIGNvbnN0IHNob3dDb2x1bW5NZW51ID0gY29sdW1ucy5sZW5ndGggPiAwICYmICFbJ1VzZXJzJywgJ0FwcG9pbnRtZW50cyddLmluY2x1ZGVzKHRhYmxlSWQpO1xuICBjb25zdCBzdGF0dXNDb250cm9sID1cclxuICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyID8gKFxyXG4gICAgICA8U3RhdHVzTWVudSBzdGF0dXNlcz17c3RhdHVzZXN9IGhpZGRlblN0YXR1c2VzPXtoaWRkZW5TdGF0dXNlc30gb25Ub2dnbGU9e3RvZ2dsZVN0YXR1c30gb25SZXNldD17cmVzZXRTdGF0dXNlc30gLz5cclxuICAgICkgOiBudWxsO1xyXG4gIGNvbnN0IGNvbHVtbkNvbnRyb2wgPSBzaG93Q29sdW1uTWVudSA/IDxDb2x1bW5NZW51IGNvbHVtbnM9e2NvbHVtbnN9IGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9IG9uVG9nZ2xlPXt0b2dnbGVDb2x1bW59IC8+IDogbnVsbDtcclxuICBjb25zdCBwYXN0Q29udHJvbCA9XHJcbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiB0eXBlb2Ygc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMgPT09ICdmdW5jdGlvbidcclxuICAgICAgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyghc2hvd1Bhc3RBcHBvaW50bWVudHMpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2hpcENsYXNzKHNob3dQYXN0QXBwb2ludG1lbnRzKSwgJ3ctZnVsbCBzbTp3LWF1dG8nKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J/RgNC+0YjQtdC00YjQuNC1XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICAgIDogbnVsbDtcclxuICBjb25zdCBncm91cGluZ0NvbnRyb2wgPVxyXG4gICAgc3VwcG9ydHNHcm91cGluZyAmJiB0eXBlb2Ygc2V0R3JvdXBCeURhdGUgPT09ICdmdW5jdGlvbidcclxuICAgICAgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRHcm91cEJ5RGF0ZSghZ3JvdXBCeURhdGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2hpcENsYXNzKGdyb3VwQnlEYXRlKSwgJ3ctZnVsbCBzbTp3LWF1dG8nKX0+XHJcbiAgICAgICAgICAgINCf0L4g0LTQvdGP0LxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgOiBudWxsO1xyXG4gIGNvbnN0IGNvbnRyb2xPcmRlciA9XHJcbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJ1xyXG4gICAgICA/IFtcclxuICAgICAgICAgIHsga2V5OiAnc3RhdHVzJywgbm9kZTogc3RhdHVzQ29udHJvbCB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdjb2x1bW5zJywgbm9kZTogY29sdW1uQ29udHJvbCB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdwYXN0Jywgbm9kZTogcGFzdENvbnRyb2wgfSxcclxuICAgICAgICAgIHsga2V5OiAnZ3JvdXAnLCBub2RlOiBncm91cGluZ0NvbnRyb2wgfSxcclxuICAgICAgICBdXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgeyBrZXk6ICdzdGF0dXMnLCBub2RlOiBzdGF0dXNDb250cm9sIH0sXHJcbiAgICAgICAgICB7IGtleTogJ3Bhc3QnLCBub2RlOiBwYXN0Q29udHJvbCB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdncm91cCcsIG5vZGU6IGdyb3VwaW5nQ29udHJvbCB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdjb2x1bW5zJywgbm9kZTogY29sdW1uQ29udHJvbCB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvMzAgcC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBsZzpmbGV4LXJvdyBsZzppdGVtcy1zdGFydCBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1zdHJldGNoIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBtaW4tdy1bMjAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC00IHctNFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgMy41YTUuNSA1LjUgMCAwMTMuOTk1IDkuMzE1bDMuMDk1IDMuMDk1YS43NS43NSAwIDExLTEuMDYgMS4wNmwtMy4wOTUtMy4wOTRBNS41IDUuNSAwIDExOSAzLjV6bTAgMS41YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQn9C+0LjRgdC6INC/0L4g0YLQsNCx0LvQuNGG0LVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwbC05IHByLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzQwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7aW5saW5lQ3JlYXRlRm9yTW9iaWxlICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTExIHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXhsIGJnLWVtZXJhbGQtNjAwIHB4LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIHNoYWRvdy1lbWVyYWxkLTkwMC8yMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCBzbTpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c3VwcG9ydHNCYXJiZXJGaWx0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlbGVjdGVkQmFyYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LTQ4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+0JLRgdC1INC80LDRgdGC0LXRgNCwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7YmFyYmVycy5tYXAoKGJhcmJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YmFyYmVyfSB2YWx1ZT17YmFyYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7YmFyYmVyfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yIHNtOmZsZXggc206ZmxleC13cmFwIHNtOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7Y29udHJvbE9yZGVyLm1hcCgoY29udHJvbCkgPT5cclxuICAgICAgICAgICAgICBjb250cm9sLm5vZGUgPyA8RnJhZ21lbnQga2V5PXtjb250cm9sLmtleX0+e2NvbnRyb2wubm9kZX08L0ZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtMlwiPlxyXG4gICAgICAgICAge2FsbG93TWFudWFsUmVmcmVzaCAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlZnJlc2h9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwIHNtOnB4LTVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi77+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/vVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+77+977+977+977+977+977+977+977+9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPj88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjYW5DcmVhdGUgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuQ3JlYXRlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyxcclxuICAgICAgICAgICAgICAgIGlubGluZUNyZWF0ZUZvck1vYmlsZSA/ICdoaWRkZW4gc206aW5saW5lLWZsZXgnIDogJydcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPisg0JTQvtCx0LDQstC40YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMgPSAocmVjb3JkcyA9IFtdLCBzb3J0RGlyZWN0aW9uID0gJ2Rlc2MnKSA9PiB7XHJcbiAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICByZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gcmVjb3JkLkRhdGUgfHwgJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgYnVja2V0LnB1c2gocmVjb3JkKTtcclxuICAgIGJ1Y2tldHMuc2V0KGtleSwgYnVja2V0KTtcclxuICB9KTtcclxuICBjb25zdCBjb21wYXJlID0gc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAoYSwgYikgPT4gYSAtIGIgOiAoYSwgYikgPT4gYiAtIGE7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oYnVja2V0cy5lbnRyaWVzKCkpXHJcbiAgICAubWFwKChba2V5LCBpdGVtc10pID0+IHtcclxuICAgICAgY29uc3Qgc29ydGVkSXRlbXMgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYS5EYXRlLCBhLlRpbWUsIGEuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBjb25zdCByaWdodCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGIuRGF0ZSwgYi5UaW1lLCBiLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUobGVmdCwgcmlnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkSXRlbXNbMF07XHJcbiAgICAgIGNvbnN0IHNvcnRWYWx1ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKHJlZmVyZW5jZS5EYXRlLCByZWZlcmVuY2UuVGltZSwgcmVmZXJlbmNlLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBrZXkgfHwgYG5vLWRhdGUtJHtyZWZlcmVuY2U/LmlkIHx8IE1hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSxcclxuICAgICAgICByb3dzOiBzb3J0ZWRJdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5zb3J0VmFsdWUsIGIuc29ydFZhbHVlKSk7XHJcbn07XHJcbmNvbnN0IHJlc29sdmVTb3J0VmFsdWUgPSAocm93LCBjb2x1bW4sIHRhYmxlSWQpID0+IHtcclxuICBpZiAoIWNvbHVtbikgcmV0dXJuIG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbj8ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxuICBpZiAodGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgY29sdW1uLmtleSA9PT0gJ0RhdGUnKSB7XHJcbiAgICByZXR1cm4gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocm93LkRhdGUsIHJvdy5UaW1lLCByb3cuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCAwO1xyXG4gIH1cclxuICBpZiAoY29sdW1uLnR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgY29uc3QgdHMgPSBuZXcgRGF0ZShyb3dbY29sdW1uLmtleV0pLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odHMpID8gMCA6IHRzO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHJvd1tjb2x1bW4ua2V5XSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiByb3dbY29sdW1uLmtleV07XHJcbiAgfVxyXG4gIGlmIChjb2x1bW4udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICByZXR1cm4gcm93W2NvbHVtbi5rZXldID8gMSA6IDA7XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxpemVUZXh0KHJvd1tjb2x1bW4ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxufTtcclxuY29uc3QgU29ydEluZGljYXRvciA9ICh7IGRpcmVjdGlvbiB9KSA9PiAoXHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZWFkaW5nLVs2cHhdXCI+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTMgdy0zIHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnYXNjJyAmJiAndGV4dC1pbmRpZ28tMzAwJyl9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNCAxMGw0LTQgNCA0XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgLW10LTAuNSB0ZXh0LXNsYXRlLTYwMCcsIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDZsNCA0IDQtNFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9zcGFuPlxyXG4pO1xyXG5cclxuY29uc3QgU2NoZWR1bGVzQm9hcmQgPSAoeyByb3dzID0gW10sIGNvbHVtbnMgPSBbXSwgb25VcGRhdGUsIG9wdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IHZpc2libGVLZXlzID0gdXNlTWVtbygoKSA9PiBuZXcgU2V0KGNvbHVtbnMubWFwKChjb2x1bW4pID0+IGNvbHVtbi5rZXkpKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCBlZGl0YWJsZUNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5lZGl0YWJsZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICAgIHJvd3MuZm9yRWFjaCgoc2xvdCkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBzbG90LkRhdGUgfHwgc2xvdC5EYXlPZldlZWsgfHwgYGJhcmJlci0ke3Nsb3QuQmFyYmVyIHx8ICduby1iYXJiZXInfWA7XHJcbiAgICAgIGNvbnN0IG5leHQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBuZXh0LnB1c2goc2xvdCk7XHJcbiAgICAgIGJ1Y2tldHMuc2V0KGtleSwgbmV4dCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ1Y2tldHMuZW50cmllcygpKVxyXG4gICAgICAubWFwKChba2V5LCBzbG90c10pID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0ZWRTbG90cyA9IFsuLi5zbG90c10uc29ydCgoYSwgYikgPT4gbm9ybWFsaXplVGV4dChhLldlZWspLmxvY2FsZUNvbXBhcmUobm9ybWFsaXplVGV4dChiLldlZWspKSk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkU2xvdHNbMF0gfHwge307XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0ga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gbmV3IERhdGUoa2V5KS5nZXRUaW1lKCkgOiBOdW1iZXIuTmFOO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICB0aXRsZToga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSA6IHJlZmVyZW5jZS5EYXlPZldlZWsgfHwgJ9CR0LXQtyDQtNCw0YLRiycsXHJcbiAgICAgICAgICBiYWRnZToga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gZm9ybWF0RGF0ZUJhZGdlTGFiZWwoa2V5KSA6IHJlZmVyZW5jZS5EYXlPZldlZWsgfHwgJ+KAlCcsXHJcbiAgICAgICAgICBzb3J0VmFsdWU6IE51bWJlci5pc0Zpbml0ZSh0aW1lc3RhbXApID8gdGltZXN0YW1wIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICBzbG90czogc29ydGVkU2xvdHMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydFZhbHVlIC0gYi5zb3J0VmFsdWUpO1xyXG4gIH0sIFtyb3dzXSk7XHJcblxyXG4gIGlmICghZ3JvdXBlZEJ5RGF0ZS5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCg0LDRgdC/0LjRgdCw0L3QuNC1INC/0YPRgdGC0L4uPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICB7Z3JvdXBlZEJ5RGF0ZS5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgPHNlY3Rpb24ga2V5PXtncm91cC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05NTAvMzAgcC00IHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC40ZW1dIHRleHQtc2xhdGUtNTAwXCI+e2dyb3VwLmJhZGdlfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2dyb3VwLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC0yLjUgcHktMC41IHRleHQtWzExcHhdIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnNsb3RzLmxlbmd0aH0ge3BsdXJhbGl6ZShncm91cC5zbG90cy5sZW5ndGgsIFsn0YHQu9C+0YInLCAn0YHQu9C+0YLQsCcsICfRgdC70L7RgtC+0LInXSl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgIHtncm91cC5zbG90cy5tYXAoKHNsb3QpID0+IChcclxuICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAga2V5PXtzbG90LmlkIHx8IGAke3Nsb3QuQmFyYmVyIHx8ICduby1iYXJiZXInfS0ke3Nsb3QuRGF0ZSB8fCBzbG90LkRheU9mV2VlayB8fCBzbG90LldlZWt9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzcwIGJnLXNsYXRlLTk1MC81MCBwLTMgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPntzbG90LkRheU9mV2VlayB8fCAn0JTQtdC90Ywg0L3QtSDRg9C60LDQt9Cw0L0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Nsb3QuQmFyYmVyIHx8ICfQndC1INC90LDQt9C90LDRh9C10L0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntzbG90LldlZWsgfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTUwMFwiPntzbG90LkRhdGUgPyBmb3JtYXREYXRlKHNsb3QuRGF0ZSkgOiAn0JHQtdC3INC00LDRgtGLJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZWRpdGFibGVDb2x1bW5zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZ3JpZCBnYXAtMiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Nsb3QuaWQgfHwgc2xvdC5EYXRlfS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNjAgYmctc2xhdGUtOTUwLzYwIHB4LTIgcHktMS41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+e2NvbHVtbi5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtzbG90fSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSB0YWJsZUlkPVwiU2NoZWR1bGVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwb2ludG1lbnRzTGlzdCA9ICh7IGdyb3VwcyA9IFtdLCBvbk9wZW4sIGNvbHVtbnMgPSBbXSwgaGlkZGVuQ29sdW1ucyA9IFtdIH0pID0+IHtcclxuICBpZiAoIWdyb3Vwcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCX0LDQv9C40YHQtdC5INC/0L7QutCwINC90LXRgi48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSwgW2NvbHVtbnMsIGhpZGRlbkNvbHVtbnNdKTtcclxuICBjb25zdCByZW5kZXJDb2x1bW5WYWx1ZSA9IChyZWNvcmQsIGNvbHVtbikgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmRbY29sdW1uLmtleV07XHJcbiAgICBzd2l0Y2ggKGNvbHVtbi5rZXkpIHtcclxuICAgICAgY2FzZSAnRGF0ZSc6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUpIHx8ICfigJQnO1xyXG4gICAgICBjYXNlICdUaW1lJzoge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIFtzdGFydCB8fCB2YWx1ZSB8fCAnLScsIGVuZCA/IGDQtNC+ICR7ZW5kfWAgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgIHJldHVybiBub3JtYWxpemVTdGF0dXNWYWx1ZSh2YWx1ZSkgfHwgJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1NlcnZpY2VzJzoge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcGFyc2VNdWx0aVZhbHVlKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gaXRlbXMubGVuZ3RoID8gaXRlbXMuam9pbignLCAnKSA6ICfigJQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ1Bob25lJzpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyBmb3JtYXRQaG9uZUlucHV0KHZhbHVlKSA6ICfigJQnO1xyXG4gICAgICBjYXNlICdSZW1pbmRlcjJoQ2xpZW50U2VudCc6XHJcbiAgICAgIGNhc2UgJ1JlbWluZGVyMmhCYXJiZXJTZW50JzpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gMSA/ICfQntGC0L/RgNCw0LLQu9C10L3QvicgOiAn4oCUJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ+KAlCc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XHJcbiAgICAgIHtncm91cHMubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGdldFJlY29yZElkKHJlY29yZCkgfHwgYCR7Z3JvdXAua2V5fS0ke3JlY29yZC5DdXN0b21lck5hbWV9LSR7cmVjb3JkLlRpbWV9YDtcclxuICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJlY29yZC5TdGF0dXMpIHx8ICctJztcclxuICAgICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHBhcnNlVGltZVJhbmdlUGFydHMocmVjb3JkLlRpbWUpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzTGlzdCA9IHBhcnNlTXVsdGlWYWx1ZShyZWNvcmQuU2VydmljZXMpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25PcGVuPy4ocmVjb3JkLCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvNDAgcC0zIHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMC83MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMC82MCBzbTpwLTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMyBib3JkZXItYiBib3JkZXItc2xhdGUtODAwLzcwIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Zm9ybWF0RGF0ZUJhZGdlTGFiZWwocmVjb3JkLkRhdGUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC0zeGxcIj57c3RhcnQgfHwgcmVjb3JkLlRpbWUgfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VuZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj7QtNC+IHtlbmR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZScsIGdldFN0YXR1c0JhZGdlQ2xhc3NlcyhzdGF0dXNMYWJlbCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5CYXJiZXIgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntyZWNvcmQuQmFyYmVyfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LWNvbCBnYXAtMyB0ZXh0LVsxM3B4XSB0ZXh0LXNsYXRlLTMwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2tleX0tJHtjb2x1bW4ua2V5fWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzcwIGJnLXNsYXRlLTk1MC81MCBweC0yIHB5LTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgdGV4dC1zbGF0ZS0yMDBcIj57cmVuZGVyQ29sdW1uVmFsdWUocmVjb3JkLCBjb2x1bW4pfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e3JlY29yZC5DdXN0b21lck5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3Quc2xpY2UoMCwgMykubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2Ake3NlcnZpY2V9LSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTkwMC83MCBweC0yIHB5LTAuNSB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTIwMCBzbTp0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPiAzICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNTAwXCI+K3tzZXJ2aWNlc0xpc3QubGVuZ3RoIC0gM308L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7Qo9GB0LvRg9Cz0Lgg0L3QtSDRg9C60LDQt9Cw0L3RizwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IERhdGFUYWJsZSA9ICh7XHJcbiAgdGFibGVJZCxcclxuICByb3dzLFxyXG4gIGNvbHVtbnMsXHJcbiAgaGlkZGVuQ29sdW1ucyxcclxuICBzb3J0Q29uZmlnLFxyXG4gIG9uU29ydCxcclxuICBvblVwZGF0ZSxcclxuICBvbkRlbGV0ZSxcclxuICBvcHRpb25zLFxyXG4gIG9uT3BlblByb2ZpbGUsXHJcbiAgb25PcGVuQXBwb2ludG1lbnQsXHJcbiAgZ3JvdXBCeURhdGUgPSB0cnVlLFxyXG59KSA9PiB7XHJcbiAgaWYgKCFyb3dzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC30LDQv9C40YHQtdC5LjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKTtcclxuICBjb25zdCBpc0FwcG9pbnRtZW50c1RhYmxlID0gdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cyc7XHJcbiAgY29uc3QgY2FuR3JvdXBBcHBvaW50bWVudHMgPSBpc0FwcG9pbnRtZW50c1RhYmxlICYmIGdyb3VwQnlEYXRlICYmICghc29ydENvbmZpZyB8fCBzb3J0Q29uZmlnLmtleSA9PT0gJ0RhdGUnKTtcclxuICBjb25zdCBncm91cGVkUm93cyA9IGlzQXBwb2ludG1lbnRzVGFibGVcclxuICAgID8gY2FuR3JvdXBBcHBvaW50bWVudHNcclxuICAgICAgPyBidWlsZEFwcG9pbnRtZW50R3JvdXBzKHJvd3MsIHNvcnRDb25maWc/LmRpcmVjdGlvbiB8fCAnZGVzYycpXHJcbiAgICAgIDogW3sga2V5OiAnZGVmYXVsdCcsIGxhYmVsOiBudWxsLCByb3dzIH1dXHJcbiAgICA6IFt7IGtleTogJ2RlZmF1bHQnLCBsYWJlbDogbnVsbCwgcm93cyB9XTtcclxuXHJcbiAgaWYgKGlzQXBwb2ludG1lbnRzVGFibGUpIHtcclxuICAgIHJldHVybiA8QXBwb2ludG1lbnRzTGlzdCBncm91cHM9e2dyb3VwZWRSb3dzfSBvbk9wZW49e29uT3BlbkFwcG9pbnRtZW50fSAvPjtcclxuICB9XHJcblxyXG4gIGlmICh0YWJsZUlkID09PSAnU2NoZWR1bGVzJykge1xyXG4gICAgcmV0dXJuIDxTY2hlZHVsZXNCb2FyZCByb3dzPXtyb3dzfSBjb2x1bW5zPXt2aXNpYmxlQ29sdW1uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvcHRpb25zPXtvcHRpb25zfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICB7cm93cy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlY29yZElkID0gZ2V0UmVjb3JkSWQocmVjb3JkKTtcclxuICAgICAgICAgIGNvbnN0IGNhcmRLZXkgPSByZWNvcmRJZCB8fCBgJHt0YWJsZUlkfS1jYXJkLSR7aW5kZXh9YDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2FyZEtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC82MCBwLTQgc2hhZG93LWxnIHNoYWRvdy1ibGFjay8xMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYmxlSWQgPT09ICdVc2VycycgPyAn0JrQu9C40LXQvdGCJyA6IHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnID8gJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JyA6ICfQl9Cw0L/QuNGB0YwnfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmVjb3JkW3Zpc2libGVDb2x1bW5zWzBdPy5rZXldIHx8ICctJ308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXJvc2UtNjAwLzcwIHAtMiB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Y2FyZEtleX0tJHtjb2x1bW4ua2V5fWB9IGNsYXNzTmFtZT1cInNwYWNlLXktMSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05NTAvNTAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIDJ4bDpibG9jayAtbXgtNCBvdmVyZmxvdy14LWF1dG8gb3ZlcmZsb3cteS12aXNpYmxlIHBiLTMgc206bXgtMFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1bNzYwcHhdIHctZnVsbCB0YWJsZS1hdXRvIHRleHQtWzEzcHhdIGxlYWRpbmctdGlnaHQgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdweC0yIHB5LTEuNSB3aGl0ZXNwYWNlLW5vd3JhcCcsIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ3RleHQtY2VudGVyJywgY29sdW1uLm1pbldpZHRoKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSAmJiBvblNvcnQoY29sdW1uLmtleSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMicsIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ2p1c3RpZnktY2VudGVyJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5zb3J0YWJsZSAhPT0gZmFsc2UgJiYgPFNvcnRJbmRpY2F0b3IgZGlyZWN0aW9uPXtzb3J0Q29uZmlnPy5rZXkgPT09IGNvbHVtbi5rZXkgPyBzb3J0Q29uZmlnLmRpcmVjdGlvbiA6IG51bGx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAge29uRGVsZXRlICYmIDx0aCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB0ZXh0LXJpZ2h0XCIgYXJpYS1sYWJlbD1cItCU0LXQudGB0YLQstC40Y9cIiAvPn1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtncm91cGVkUm93cy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17Z3JvdXAua2V5fT5cclxuICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXt2aXNpYmxlQ29sdW1ucy5sZW5ndGggKyAob25EZWxldGUgPyAxIDogMCl9IGNsYXNzTmFtZT1cInB4LTIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyZWNvcmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17Z2V0UmVjb3JkSWQocmVjb3JkKX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweC0yIHB5LTEuNSBhbGlnbi10b3AgdGV4dC1bMTNweF0gbGVhZGluZy1zbnVnIHNtOnRleHQtc20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ3RleHQtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubm9XcmFwID8gJ3doaXRlc3BhY2Utbm93cmFwJyA6ICd3aGl0ZXNwYWNlLW5vcm1hbCBicmVhay13b3JkcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlQ2VsbCByZWNvcmQ9e3JlY29yZH0gY29sdW1uPXtjb2x1bW59IG9wdGlvbnM9e29wdGlvbnN9IG9uVXBkYXRlPXtvblVwZGF0ZX0gb25PcGVuUHJvZmlsZT17b25PcGVuUHJvZmlsZX0gdGFibGVJZD17dGFibGVJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAgcHgtMiBweS0xLjUgdGV4dC14cyB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IENsaWVudHNMaXN0ID0gKHsgY2xpZW50cyA9IFtdLCBiYXJiZXJzID0gW10sIG9uVXBkYXRlLCBvbkRlbGV0ZSwgZmV0Y2hIaXN0b3J5LCBvblJlcXVlc3RDb25maXJtIH0pID0+IHtcclxuICBjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCByZWNvcmQ6IG51bGwsIGhpc3Rvcnk6IFtdLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6ICcnIH0pO1xyXG4gIGNvbnN0IGJhcmJlck9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IChBcnJheS5pc0FycmF5KGJhcmJlcnMpID8gYmFyYmVycy5maWx0ZXIoQm9vbGVhbikgOiBbXSksIFtiYXJiZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5DbGllbnRNb2RhbCA9IGFzeW5jIChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXRNb2RhbFN0YXRlKHsgb3BlbjogdHJ1ZSwgcmVjb3JkOiB7IC4uLmNsaWVudCB9LCBoaXN0b3J5OiBbXSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6ICcnIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGZldGNoSGlzdG9yeSAmJiBjbGllbnQuTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBmZXRjaEhpc3RvcnkoY2xpZW50KTtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYnVpbGRWaXNpdEhpc3RvcnkocHJvZmlsZT8uYXBwb2ludG1lbnRzIHx8IFtdKTtcclxuICAgICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBoaXN0b3J5LCBsb2FkaW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogZmFsc2UsIGhpc3Rvcnk6IFtdIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQuNGB0YLQvtGA0LjRjicgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlQ2xpZW50TW9kYWwgPSAoKSA9PiBzZXRNb2RhbFN0YXRlKHsgb3BlbjogZmFsc2UsIHJlY29yZDogbnVsbCwgaGlzdG9yeTogW10sIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpZWxkQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgcmVjb3JkOiB7IC4uLnByZXYucmVjb3JkLCBbZmllbGRdOiB2YWx1ZSB9IH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFtb2RhbFN0YXRlLnJlY29yZCB8fCB0eXBlb2Ygb25VcGRhdGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY29yZElkID0gZ2V0UmVjb3JkSWQobW9kYWxTdGF0ZS5yZWNvcmQpO1xyXG4gICAgaWYgKCFyZWNvcmRJZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgTmFtZTogbW9kYWxTdGF0ZS5yZWNvcmQuTmFtZSxcclxuICAgICAgUGhvbmU6IG1vZGFsU3RhdGUucmVjb3JkLlBob25lLFxyXG4gICAgICBUZWxlZ3JhbUlEOiBtb2RhbFN0YXRlLnJlY29yZC5UZWxlZ3JhbUlELFxyXG4gICAgICBCYXJiZXI6IG1vZGFsU3RhdGUucmVjb3JkLkJhcmJlcixcclxuICAgIH07XHJcbiAgICBvblVwZGF0ZShyZWNvcmRJZCwgcGF5bG9hZCk7XHJcbiAgICBjbG9zZUNsaWVudE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFtb2RhbFN0YXRlLnJlY29yZCB8fCB0eXBlb2Ygb25EZWxldGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IG9uUmVxdWVzdENvbmZpcm0/Lih7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LrQu9C40LXQvdGC0LA/JyxcclxuICAgICAgbWVzc2FnZTogYNCa0LvQuNC10L3RgiDCqyR7bW9kYWxTdGF0ZS5yZWNvcmQuTmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfcK7INCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uYCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKG9uUmVxdWVzdENvbmZpcm0gJiYgIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgYXdhaXQgb25EZWxldGUobW9kYWxTdGF0ZS5yZWNvcmQsIHsgc2tpcENvbmZpcm06IHRydWUgfSk7XHJcbiAgICBjbG9zZUNsaWVudE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIHtjbGllbnRzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyINC/0YPRgdGCLjwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC80MCBzaGFkb3ctaW5uZXIgc2hhZG93LWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1zbGF0ZS05MDBcIj5cclxuICAgICAgICAgICAge2NsaWVudHMubWFwKChjbGllbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY2xpZW50TnVtYmVyID0gU3RyaW5nKGluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICBjb25zdCBwaG9uZURpc3BsYXkgPSBjbGllbnQuUGhvbmUgPyBmb3JtYXRQaG9uZUlucHV0KGNsaWVudC5QaG9uZSkgOiAnJztcclxuICAgICAgICAgICAgICBjb25zdCB0ZWxlZ3JhbUhhbmRsZSA9IGZvcm1hdFRlbGVncmFtSGFuZGxlKGNsaWVudC5UZWxlZ3JhbUlEKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtjbGllbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5DbGllbnRNb2RhbChjbGllbnQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMiBweC00IHB5LTMgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ymctc2xhdGUtOTAwLzYwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtOCB3LTggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntjbGllbnQuTmFtZSB8fCAn0J3QtdGCINC40LzQtdC90LgnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50LkJhcmJlciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAOiB7Y2xpZW50LkJhcmJlcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bob25lRGlzcGxheSAmJiA8cD57cGhvbmVEaXNwbGF5fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57dGVsZWdyYW1IYW5kbGV9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e21vZGFsU3RhdGUucmVjb3JkPy5OYW1lIHx8ICfQmtC70LjQtdC90YInfVxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxTdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlQ2xpZW50TW9kYWx9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LTN4bFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1lbmQgZ2FwLTNcIj5cclxuICAgICAgICAgICAge21vZGFsU3RhdGUucmVjb3JkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VDbGllbnRNb2RhbH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHshbW9kYWxTdGF0ZS5yZWNvcmQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LrQu9C40LXQvdGC0LAuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCY0LzRj1xyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5OYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnTmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICDQotC10LvQtdGE0L7QvVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5QaG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIFRlbGVncmFtIElEXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLlRlbGVncmFtSUQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdUZWxlZ3JhbUlEJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCb0Y7QsdC40LzRi9C5INCx0LDRgNCx0LXRgFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bW9kYWxTdGF0ZS5yZWNvcmQuQmFyYmVyIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnQmFyYmVyJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCd0LUg0LLRi9Cx0YDQsNC9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJPcHRpb25zLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YmFyYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsjwvcD5cclxuICAgICAgICAgICAgICA8VmlzaXRIaXN0b3J5TGlzdFxyXG4gICAgICAgICAgICAgICAgdmlzaXRzPXttb2RhbFN0YXRlLmhpc3Rvcnl9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXttb2RhbFN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17bW9kYWxTdGF0ZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT1cItCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyINC/0YPRgdGC0LAuXCJcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodENsYXNzPVwibWF4LWgtNTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVSZWNvcmRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25TYXZlLCBjb2x1bW5zLCB0YWJsZU5hbWUsIG9wdGlvbnMsIHRhYmxlSWQsIGNsaWVudHMgPSBbXSwgaGlkZGVuRmllbGRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlICE9PSBmYWxzZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZWRpdGFibGVDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuRmllbGRzLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSxcclxuICAgIFtlZGl0YWJsZUNvbHVtbnMsIGhpZGRlbkZpZWxkc11cclxuICApO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgZWRpdGFibGVDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICBwYXlsb2FkW2NvbHVtbi5rZXldID0gY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnID8gW10gOiAnJztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfSwgW2VkaXRhYmxlQ29sdW1uc10pO1xyXG5cclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaXNBcHBvaW50bWVudHNDcmVhdGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc09wZW4pIHNldERyYWZ0KGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2lzT3BlbiwgaW5pdGlhbFN0YXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGRyYWZ0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgcGF5bG9hZFtrZXldID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIG9uU2F2ZShwYXlsb2FkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2DQndC+0LLQsNGPINC30LDQv9C40YHRjDogJHt0YWJsZU5hbWV9YH1cclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZHJhZnRbY29sdW1uLmtleV07XHJcbiAgICAgICAgICBpZiAoaXNBcHBvaW50bWVudHNDcmVhdGUgJiYgY29sdW1uLmtleSA9PT0gJ0N1c3RvbWVyTmFtZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIEN1c3RvbWVyTmFtZTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdENsaWVudD17aGFuZGxlQ2xpZW50QXV0b0ZpbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBldmVudC50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgeyhvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXSkubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0Q2hlY2tib3hlc1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogc2VsZWN0ZWQgfSkpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQsNC90L3Ri9GFXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT09ICdUaW1lJyB8fCBjb2x1bW4ua2V5ID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfigJQnIDogJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJ31cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtjb2x1bW4udHlwZSA9PT0gJ2RhdGUnID8gJ2RhdGUnIDogJ3RleHQnfSB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZmlsZU1vZGFsID0gKHsgc3RhdGUsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGFwcG9pbnRtZW50cyA9IHN0YXRlLmRhdGE/LmFwcG9pbnRtZW50cyB8fCBbXTtcclxuICBjb25zdCB2aXNpdEhpc3RvcnkgPSB1c2VNZW1vKCgpID0+IGJ1aWxkVmlzaXRIaXN0b3J5KGFwcG9pbnRtZW50cyksIFthcHBvaW50bWVudHNdKTtcclxuICBjb25zdCB1c2VyID0gc3RhdGUuZGF0YT8udXNlciB8fCBudWxsO1xyXG4gIGNvbnN0IHBob25lTGFiZWwgPSB1c2VyPy5QaG9uZSA/IGZvcm1hdFBob25lSW5wdXQodXNlci5QaG9uZSkgOiAnJztcclxuICBjb25zdCBwaG9uZUhyZWYgPSBwaG9uZUxhYmVsID8gYHRlbDoke3Bob25lTGFiZWwucmVwbGFjZSgvW15cXGQrXS9nLCAnJyl9YCA6ICcnO1xyXG4gIGNvbnN0IHRlbGVncmFtSGFuZGxlID0gdXNlcj8uVGVsZWdyYW1JRCA/IGZvcm1hdFRlbGVncmFtSGFuZGxlKHVzZXIuVGVsZWdyYW1JRCkgOiAnJztcclxuICBjb25zdCB0ZWxlZ3JhbUhyZWYgPSB1c2VyPy5UZWxlZ3JhbUlEID8gYnVpbGRUZWxlZ3JhbUxpbmsodXNlci5UZWxlZ3JhbUlEKSA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtzdGF0ZS5kYXRhPy51c2VyPy5OYW1lIHx8ICfQn9GA0L7RhNC40LvRjCDQutC70LjQtdC90YLQsCd9XHJcbiAgICAgIGlzT3Blbj17c3RhdGUub3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXs8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cclxuICAgID5cclxuICAgICAge3N0YXRlLmxvYWRpbmcgJiYgPExvYWRpbmdTdGF0ZSBsYWJlbD1cItCX0LDQs9GA0YPQttCw0Y4g0L/RgNC+0YTQuNC70YwuLi5cIiAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHN0YXRlLmRhdGE/LmVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXtzdGF0ZS5kYXRhLmVycm9yfSAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHVzZXIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KLQtdC70LXRhNC+0L06PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAge3Bob25lTGFiZWwgJiYgcGhvbmVIcmVmID8gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cGhvbmVIcmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAn4oCUJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+VGVsZWdyYW06PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlICYmIHRlbGVncmFtSHJlZiA/IChcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RlbGVncmFtSHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAn4oCUJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAOjwvc3Bhbj4ge3VzZXIuQmFyYmVyIHx8ICfigJQnfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LI8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxWaXNpdEhpc3RvcnlMaXN0IHZpc2l0cz17dmlzaXRIaXN0b3J5fSBlbXB0eU1lc3NhZ2U9XCLQl9Cw0L/QuNGB0LXQuSDQt9CwINC/0L7RgdC70LXQtNC90LjQuSDQs9C+0LQg0L3QtdGCLlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCYWNrdXBzUGFuZWwgPSAoeyBiYWNrdXBzID0gW10sIG9uUmVzdG9yZSwgb25DcmVhdGUsIG9uRGVsZXRlIH0pID0+IChcclxuICA8U2VjdGlvbkNhcmRcclxuICAgIHRpdGxlPVwi0KDQtdC30LXRgNCy0L3Ri9C1INC60L7Qv9C40LhcIlxyXG4gICAgYWN0aW9ucz17XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7Qv9C40Y5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICB9XHJcbiAgPlxyXG4gICAge2JhY2t1cHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINC/0YPRgdGC0LAuPC9wPlxyXG4gICAgKSA6IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICB7YmFja3Vwcy5tYXAoKGJhY2t1cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBmb3JtYXRCYWNrdXBMYWJlbChiYWNrdXApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2JhY2t1cH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPntiYWNrdXB9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdG9yZShiYWNrdXApfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShiYWNrdXApfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtMyBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggY2xhc3NOYW1lPVwibXItMSBoLTMuNSB3LTMuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L1NlY3Rpb25DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgQXBwb2ludG1lbnRNb2RhbCA9ICh7IG9wZW4sIGFwcG9pbnRtZW50LCBvcHRpb25zID0ge30sIG9uQ2xvc2UsIG9uU2F2ZSwgb25EZWxldGUsIGNhbkRlbGV0ZSA9IGZhbHNlLCBpc05ldyA9IGZhbHNlLCBjbGllbnRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGJ1aWxkRHJhZnQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWNvcmQpID0+IChyZWNvcmQgPyB7IC4uLnJlY29yZCwgVXNlcklEOiByZWNvcmQuVXNlcklEIHx8IHJlY29yZC51c2VySWQgfHwgJycsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfSA6IG51bGwpLFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm47XHJcbiAgICBzZXREcmFmdChidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XHJcblxyXG4gIGlmICghb3BlbiB8fCAhZHJhZnQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlc1NlbGVjdGlvbiA9IHBhcnNlTXVsdGlWYWx1ZShkcmFmdC5TZXJ2aWNlcyk7XG4gIGNvbnN0IGFjdGlvbkJ1dHRvbkNsYXNzID0gJ3JvdW5kZWQtbGcgcHgtMi41IHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgc206cHgtNCBzbTpweS0yIHNtOnRleHQtc20nO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG5cclxuICBjb25zdCBzdWJtaXREcmFmdCA9IChuZXh0RHJhZnQpID0+IHtcclxuICAgIGlmICghbmV4dERyYWZ0KSByZXR1cm47XHJcbiAgICBvblNhdmUoe1xyXG4gICAgICBpZDogbmV4dERyYWZ0LmlkLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBuZXh0RHJhZnQuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICAgIFBob25lOiBuZXh0RHJhZnQuUGhvbmUsXHJcbiAgICAgICAgQmFyYmVyOiBuZXh0RHJhZnQuQmFyYmVyLFxyXG4gICAgICAgIERhdGU6IG5leHREcmFmdC5EYXRlLFxyXG4gICAgICAgIFRpbWU6IG5leHREcmFmdC5UaW1lLFxyXG4gICAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUobmV4dERyYWZ0LlN0YXR1cyksXHJcbiAgICAgICAgU2VydmljZXM6IG5leHREcmFmdC5TZXJ2aWNlcyxcclxuICAgICAgICBVc2VySUQ6IG5leHREcmFmdC5Vc2VySUQgfHwgJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGlzTmV3LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4gc3VibWl0RHJhZnQoZHJhZnQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNYXJrQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkcmFmdCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dERyYWZ0ID0geyAuLi5kcmFmdCwgU3RhdHVzOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyB9O1xyXG4gICAgc2V0RHJhZnQobmV4dERyYWZ0KTtcclxuICAgIHN1Ym1pdERyYWZ0KG5leHREcmFmdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpZW50QXV0b0ZpbGwgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudCkgcmV0dXJuO1xyXG4gICAgc2V0RHJhZnQoKHByZXYpID0+IHtcclxuICAgICAgaWYgKCFwcmV2KSByZXR1cm4gcHJldjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIEN1c3RvbWVyTmFtZTogY2xpZW50Lm5hbWUgfHwgcHJldi5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICAgIEJhcmJlcjogcHJldi5CYXJiZXIgfHwgY2xpZW50LnByZWZlcnJlZEJhcmJlciB8fCAnJyxcclxuICAgICAgICBVc2VySUQ6IGNsaWVudC50ZWxlZ3JhbUlkIHx8IGNsaWVudC5UZWxlZ3JhbUlEIHx8IGNsaWVudC5pZCB8fCBwcmV2LlVzZXJJRCB8fCAnJyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2lzTmV3ID8gJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyA6IGDQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC30LDQv9C40YHQuCAke2RyYWZ0LkN1c3RvbWVyTmFtZSB8fCAnJ31gfVxyXG4gICAgICBpc09wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1lbmQgZ2FwLTIgc206Z2FwLTNcIj5cbiAgICAgICAgICB7IWlzTmV3ICYmIGNhbkRlbGV0ZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlPy4oZHJhZnQpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aW9uQnV0dG9uQ2xhc3MsICdib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTAnKX0+XG4gICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGFjdGlvbkJ1dHRvbkNsYXNzLCAnYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgdGV4dC13aGl0ZScpfT5cbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHshaXNOZXcgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNYXJrQ29tcGxldGVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aW9uQnV0dG9uQ2xhc3MsICdib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwIHRleHQtZW1lcmFsZC0yMDAgaG92ZXI6YmctZW1lcmFsZC01MDAvMTAnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg0JLRi9C/0L7Qu9C90LXQvdC+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aW9uQnV0dG9uQ2xhc3MsICdiZy1lbWVyYWxkLTYwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyl9PlxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPINC60LvQuNC10L3RgtCwXCJcclxuICAgICAgICAgIHZhbHVlPXtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCi0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RyYWZ0LlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e2RyYWZ0LkJhcmJlciB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTExIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LDRgNCx0LXRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgeyhvcHRpb25zLmJhcmJlcnMgfHwgW10pLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RyYWZ0LkRhdGUgPyBTdHJpbmcoZHJhZnQuRGF0ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnRGF0ZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8VGltZVJhbmdlUGlja2VyIHZhbHVlPXtkcmFmdC5UaW1lIHx8ICcnfSBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdUaW1lJywgbmV4dFZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjFwiIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuU3RhdHVzIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1N0YXR1cycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHRgtCw0YLRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXN9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5zZXJ2aWNlcyB8fCBbXX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBoYW5kbGVDaGFuZ2UoJ1NlcnZpY2VzJywgc2VsZWN0ZWQuam9pbignLCAnKSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5jb25zdCBUYWJsZXNXb3Jrc3BhY2UgPSAoe1xyXG4gIGFwaVJlcXVlc3QsXHJcbiAgc2hhcmVkT3B0aW9ucyxcclxuICBvbk9wdGlvbnNVcGRhdGUsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBvbk9wZW5BcHBvaW50bWVudFJlY29yZCxcclxuICBjbGllbnRzID0gW10sXHJcbiAgY3VycmVudFVzZXIgPSBudWxsLFxyXG4gIGxpdmVBcHBvaW50bWVudHMgPSBudWxsLFxyXG4gIGxpdmVVcGRhdGVkQXQgPSBudWxsLFxyXG4gIGJhcmJlcnMgPSBbXSxcclxuICBzZXJ2aWNlcyA9IFtdLFxyXG4gIG9uQmFyYmVyRmllbGRDaGFuZ2UsXHJcbiAgb25TYXZlQmFyYmVyLFxyXG4gIG9uQWRkQmFyYmVyLFxyXG4gIG9uRGVsZXRlQmFyYmVyLFxyXG4gIG9uU2VydmljZUZpZWxkQ2hhbmdlLFxyXG4gIG9uU2VydmljZVByaWNlQ2hhbmdlLFxyXG4gIG9uRGVsZXRlU2VydmljZSxcclxuICBvbkFkZFNlcnZpY2UsXHJcbiAgb25BY3RpdmVUYWJsZUNoYW5nZSxcclxuICBwcmVmZXJyZWRUYWJsZSA9IG51bGwsXHJcbiAgb25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkLFxyXG4gIG9uUmVxdWVzdENvbmZpcm0gPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5hY3RpdmUnLCAnQXBwb2ludG1lbnRzJyk7XHJcbiAgY29uc3QgW3RhYmxlcywgc2V0VGFibGVzXSA9IHVzZVN0YXRlKCgpID0+IERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBbXSB9KSwge30pKTtcclxuICBjb25zdCBbZHJvcGRvd25PcHRpb25zLCBzZXREcm9wZG93bk9wdGlvbnNdID0gdXNlU3RhdGUoc2hhcmVkT3B0aW9ucyB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9KTtcclxuICBjb25zdCBbdGFibGVFcnJvciwgc2V0VGFibGVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJiZXIsIHNldFNlbGVjdGVkQmFyYmVyXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmJhcmJlckZpbHRlcicsICdhbGwnKTtcclxuICBjb25zdCBbaGlkZGVuU3RhdHVzZXMsIHNldEhpZGRlblN0YXR1c2VzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlblN0YXR1c2VzJywgW10pO1xyXG4gIGNvbnN0IFtoaWRkZW5Db2x1bW5zTWFwLCBzZXRIaWRkZW5Db2x1bW5zTWFwXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlbkNvbHVtbnMnLCB7XHJcbiAgICBBcHBvaW50bWVudHM6IFsnVXNlcklEJ10sXHJcbiAgICBTY2hlZHVsZXM6IFtdLFxyXG4gICAgVXNlcnM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzb3J0Q29uZmlncywgc2V0U29ydENvbmZpZ3NdID0gdXNlTG9jYWxTdG9yYWdlKFxyXG4gICAgJ3RhYmxlcy5zb3J0Q29uZmlncycsXHJcbiAgICBEQVRBX1RBQkxFUy5yZWR1Y2UoKGFjYywgdGFibGUpID0+ICh7IC4uLmFjYywgW3RhYmxlXTogVEFCTEVfQ09ORklHW3RhYmxlXT8uZGVmYXVsdFNvcnQgfHwgbnVsbCB9KSwge30pXHJcbiAgKTtcclxuICBjb25zdCBbY3JlYXRlTW9kYWxPcGVuLCBzZXRDcmVhdGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGFzdEFwcG9pbnRtZW50cywgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHNdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuc2hvd1Bhc3RBcHBvaW50bWVudHMnLCB0cnVlKTtcclxuICBjb25zdCBbZ3JvdXBBcHBvaW50bWVudHNCeURhdGUsIHNldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmdyb3VwQXBwb2ludG1lbnRzQnlEYXRlJywgdHJ1ZSk7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRUZW1wbGF0ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICBCYXJiZXI6IHBpY2tCYXJiZXJGb3JVc2VyKGN1cnJlbnRVc2VyLCBkcm9wZG93bk9wdGlvbnMuYmFyYmVycyB8fCBbXSksXHJcbiAgICAgIERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXHJcbiAgICAgIFRpbWU6ICcnLFxyXG4gICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKChkcm9wZG93bk9wdGlvbnMuc3RhdHVzZXMgJiYgZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzWzBdKSB8fCAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnKSxcclxuICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICBVc2VySUQ6ICcnLFxyXG4gICAgfSksXHJcbiAgICBbZHJvcGRvd25PcHRpb25zLCBjdXJyZW50VXNlcj8uZGlzcGxheU5hbWUsIGN1cnJlbnRVc2VyPy51c2VybmFtZV1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNoYXJlZE9wdGlvbnMpIHtcclxuICAgICAgc2V0RHJvcGRvd25PcHRpb25zKHtcclxuICAgICAgICAuLi5zaGFyZWRPcHRpb25zLFxyXG4gICAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KHNoYXJlZE9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2hhcmVkT3B0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZVRhYmxlID09PSAnU2NoZWR1bGVzJykge1xyXG4gICAgICBzZXRBY3RpdmVUYWJsZSgnQmFyYmVycycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIVRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0pIHtcclxuICAgICAgc2V0QWN0aXZlVGFibGUoJ0FwcG9pbnRtZW50cycpO1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uQWN0aXZlVGFibGVDaGFuZ2U/LihhY3RpdmVUYWJsZSk7XHJcbiAgfSwgW2FjdGl2ZVRhYmxlLCBvbkFjdGl2ZVRhYmxlQ2hhbmdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXByZWZlcnJlZFRhYmxlKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0VGFibGUgPSBwcmVmZXJyZWRUYWJsZSA9PT0gJ1NjaGVkdWxlcycgPyAnQmFyYmVycycgOiBwcmVmZXJyZWRUYWJsZTtcclxuICAgIGlmIChUQUJMRV9PUkRFUi5pbmNsdWRlcyhuZXh0VGFibGUpKSB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYmxlKG5leHRUYWJsZSk7XHJcbiAgICB9XHJcbiAgICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQ/LigpO1xyXG4gIH0sIFtwcmVmZXJyZWRUYWJsZSwgc2V0QWN0aXZlVGFibGUsIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SGlkZGVuU3RhdHVzZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmZyb20obmV3IFNldChwcmV2Lm1hcCgoc3RhdHVzKSA9PiBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpKS5maWx0ZXIoQm9vbGVhbikpKTtcclxuICAgICAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSBwcmV2Lmxlbmd0aCAmJiBub3JtYWxpemVkLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBwcmV2W2luZGV4XSkpIHtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICAgIH0pO1xyXG4gIH0sIFtzZXRIaWRkZW5TdGF0dXNlc10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRhYmxlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICBzZXRUYWJsZUVycm9yKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAuLi5EQVRBX1RBQkxFUy5tYXAoKHRhYmxlKSA9PiBhcGlSZXF1ZXN0KGAvJHt0YWJsZX1gKSksXHJcbiAgICAgICAgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzJyksXHJcbiAgICAgIF0pO1xyXG4gICAgICBjb25zdCBuZXh0VGFibGVzID0ge307XHJcbiAgICAgIERBVEFfVEFCTEVTLmZvckVhY2goKHRhYmxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSByZXNwb25zZXNbaW5kZXhdIHx8IFtdO1xyXG4gICAgICAgIG5leHRUYWJsZXNbdGFibGVdID0gdGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gcmVjb3Jkcy5tYXAoKHJvdykgPT4gKHsgLi4ucm93LCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpIH0pKSA6IHJlY29yZHM7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByYXdPcHRpb25zID0gcmVzcG9uc2VzW0RBVEFfVEFCTEVTLmxlbmd0aF0gfHwgeyBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdLCBzdGF0dXNlczogW10gfTtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgLi4ucmF3T3B0aW9ucyxcclxuICAgICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChyYXdPcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGFibGVzKG5leHRUYWJsZXMpO1xyXG4gICAgICBzZXREcm9wZG93bk9wdGlvbnMobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgICBvbk9wdGlvbnNVcGRhdGU/Lihub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUYWJsZSBmZXRjaCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0YLQsNCx0LvQuNGG0YsnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGlSZXF1ZXN0LCBvbk9wdGlvbnNVcGRhdGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVGFibGVzKCk7XHJcbiAgfSwgW2ZldGNoVGFibGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGl2ZUFwcG9pbnRtZW50cykpIHJldHVybjtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQXBwb2ludG1lbnRzOiBsaXZlQXBwb2ludG1lbnRzLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgIC4uLnJvdyxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpLFxyXG4gICAgICB9KSksXHJcbiAgICB9KSk7XHJcbiAgfSwgW2xpdmVBcHBvaW50bWVudHMsIGxpdmVVcGRhdGVkQXRdKTtcclxuXHJcbiAgY29uc3QgY3VycmVudENvbHVtbnMgPSBUQUJMRV9DT0xVTU5TW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICBjb25zdCBoaWRkZW5Db2x1bW5zID0gaGlkZGVuQ29sdW1uc01hcFthY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSBjdXJyZW50Q29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IHNvcnRDb25maWcgPSBzb3J0Q29uZmlnc1thY3RpdmVUYWJsZV0gfHwgVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXT8uZGVmYXVsdFNvcnQgfHwgbnVsbDtcclxuXHJcbiAgY29uc3QgcHJvY2Vzc2VkUm93cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgc291cmNlID0gdGFibGVzW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICAgIGlmICghc291cmNlLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgbGV0IHJvd3MgPSBbLi4uc291cmNlXTtcclxuICAgIGlmIChUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdPy5zdXBwb3J0c0JhcmJlckZpbHRlciAmJiBzZWxlY3RlZEJhcmJlciAhPT0gJ2FsbCcpIHtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IG5vcm1hbGl6ZVRleHQocm93LkJhcmJlcikudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplVGV4dChzZWxlY3RlZEJhcmJlcikudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnKSB7XHJcbiAgICAgIGNvbnN0IG5vd1RzID0gRGF0ZS5ub3coKTtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgICBpZiAoaGlkZGVuU3RhdHVzZXMubGVuZ3RoICYmIGhpZGRlblN0YXR1c2VzLmluY2x1ZGVzKHJvdy5TdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNob3dQYXN0QXBwb2ludG1lbnRzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50KHJvdywgbm93VHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzZWFyY2hUZXJtLnRyaW0oKSkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFRlcm0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiB2aXNpYmxlQ29sdW1ucy5zb21lKChjb2x1bW4pID0+IG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbi5rZXldKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRDb25maWc/LmtleSkge1xyXG4gICAgICBjb25zdCBjb2x1bW5EZWYgPSBjdXJyZW50Q29sdW1ucy5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5rZXkgPT09IHNvcnRDb25maWcua2V5KTtcclxuICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHJlc29sdmVTb3J0VmFsdWUoYSwgY29sdW1uRGVmLCBhY3RpdmVUYWJsZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByZXNvbHZlU29ydFZhbHVlKGIsIGNvbHVtbkRlZiwgYWN0aXZlVGFibGUpO1xyXG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmlnaHQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gbGVmdCAtIHJpZ2h0IDogcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gKGxlZnQgPiByaWdodCA/IDEgOiAtMSkgOiBsZWZ0ID4gcmlnaHQgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfSwgW3RhYmxlcywgYWN0aXZlVGFibGUsIHNlbGVjdGVkQmFyYmVyLCBoaWRkZW5TdGF0dXNlcywgc2VhcmNoVGVybSwgdmlzaWJsZUNvbHVtbnMsIHNvcnRDb25maWcsIHNob3dQYXN0QXBwb2ludG1lbnRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoY29sdW1uS2V5KSA9PiB7XHJcbiAgICBzZXRTb3J0Q29uZmlncygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gcHJldlthY3RpdmVUYWJsZV07XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGN1cnJlbnQ/LmtleSA9PT0gY29sdW1uS2V5ICYmIGN1cnJlbnQuZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbYWN0aXZlVGFibGVdOiB7IGtleTogY29sdW1uS2V5LCBkaXJlY3Rpb24gfSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29sdW1uID0gKGNvbHVtbktleSkgPT4ge1xyXG4gICAgc2V0SGlkZGVuQ29sdW1uc01hcCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHByZXZbYWN0aXZlVGFibGVdIHx8IFtdKTtcclxuICAgICAgaWYgKGhpZGRlbi5oYXMoY29sdW1uS2V5KSkge1xyXG4gICAgICAgIGhpZGRlbi5kZWxldGUoY29sdW1uS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChoaWRkZW4uc2l6ZSA8IGN1cnJlbnRDb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBoaWRkZW4uYWRkKGNvbHVtbktleSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2FjdGl2ZVRhYmxlXTogQXJyYXkuZnJvbShoaWRkZW4pIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKTtcclxuICAgIHNldEhpZGRlblN0YXR1c2VzKChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhub3JtYWxpemVkKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBub3JtYWxpemVkKSA6IFsuLi5wcmV2LCBub3JtYWxpemVkXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChyZWNvcmRJZCwgZGF0YSwgeyB0YWJsZUlkOiBvdmVycmlkZVRhYmxlSWQgfSA9IHt9KSA9PiB7XHJcbiAgICBpZiAoIXJlY29yZElkKSByZXR1cm47XHJcbiAgICBjb25zdCB0YWJsZUlkID0gb3ZlcnJpZGVUYWJsZUlkIHx8IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPVxyXG4gICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBkYXRhPy5TdGF0dXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8geyAuLi5kYXRhLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRhdGEuU3RhdHVzKSB9XHJcbiAgICAgICAgOiBkYXRhO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBbdGFibGVJZF06IGxpc3QubWFwKChyb3cpID0+IChnZXRSZWNvcmRJZChyb3cpID09PSByZWNvcmRJZCA/IHsgLi4ucm93LCAuLi5ub3JtYWxpemVkRGF0YSB9IDogcm93KSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPVxyXG4gICAgICAgIHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnXHJcbiAgICAgICAgICA/IHsgLi4uKG9yaWdpbmFsLmZpbmQoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSA9PT0gcmVjb3JkSWQpIHx8IHt9KSwgLi4ubm9ybWFsaXplZERhdGEgfVxyXG4gICAgICAgICAgOiBub3JtYWxpemVkRGF0YTtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkSWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7QsdC90L7QstC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgICAgc2V0VGFibGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbdGFibGVJZF06IG9yaWdpbmFsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocmVjb3JkLCB7IHNraXBDb25maXJtID0gZmFsc2UgfSA9IHt9KSA9PiB7XHJcbiAgICBpZiAoIXJlY29yZCB8fCBhY3RpdmVUYWJsZSA9PT0gJ1NjaGVkdWxlcycpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIGNvbnN0IGNvbmZpcm1Db3B5ID0gKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0YWJsZUlkKSB7XHJcbiAgICAgICAgY2FzZSAnVXNlcnMnOlxyXG4gICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQutC70LjQtdC90YLQsD8nLCBtZXNzYWdlOiAn0JrQu9C40LXQvdGCINCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uJyB9O1xyXG4gICAgICAgIGNhc2UgJ0FwcG9pbnRtZW50cyc6XHJcbiAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjD8nLCBtZXNzYWdlOiAn0JfQsNC/0LjRgdGMINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsIG1lc3NhZ2U6ICfQl9Cw0L/QuNGB0Ywg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsC4nIH07XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBpZiAoIXNraXBDb25maXJtKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IG9uUmVxdWVzdENvbmZpcm1cclxuICAgICAgICA/IGF3YWl0IG9uUmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICAgICAgICAuLi5jb25maXJtQ29weSxcclxuICAgICAgICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICAgICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFt0YWJsZUlkXTogbGlzdC5maWx0ZXIoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSAhPT0gZ2V0UmVjb3JkSWQocmVjb3JkKSkgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUmVjb3JkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgcGF5bG9hZD8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8geyAuLi5wYXlsb2FkLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHBheWxvYWQuU3RhdHVzKSB9XHJcbiAgICAgICAgICA6IHBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZWRQYXlsb2FkKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoVGFibGVzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDbGllbnRQcm9maWxlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoY2xpZW50KSA9PiB7XHJcbiAgICAgIGlmICghY2xpZW50Py5OYW1lKSByZXR1cm4gbnVsbDtcclxuICAgICAgcmV0dXJuIGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQoY2xpZW50Lk5hbWUpfWApO1xyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRhYmxlU2V0dGluZ3MgPSBUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdIHx8IHt9O1xyXG4gIGNvbnN0IGlzQ3VzdG9tVGFibGUgPSB0YWJsZVNldHRpbmdzPy5tb2RlID09PSAnY3VzdG9tJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICB7VklTSUJMRV9UQUJMRV9PUkRFUi5tYXAoKHRhYmxlKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dGFibGV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYmxlKHRhYmxlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwgcHgtNCBweS0yIHRleHQtc20nLFxyXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYmxlID09PSB0YWJsZSA/ICdiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUnIDogJ2JnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1RBQkxFX0NPTkZJR1t0YWJsZV0/LmxhYmVsIHx8IHRhYmxlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2lzQ3VzdG9tVGFibGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgIHthY3RpdmVUYWJsZSA9PT0gJ0JhcmJlcnMnICYmIChcclxuICAgICAgICAgICAgPEJhcmJlcnNWaWV3XHJcbiAgICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgICBzY2hlZHVsZXM9e3RhYmxlcy5TY2hlZHVsZXMgfHwgW119XHJcbiAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25CYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZUJhcmJlcn1cclxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRCYXJiZXJ9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgICAgIGxvYWRBdmF0YXJPcHRpb25zPXsoKSA9PiBhcGlSZXF1ZXN0KCcvYXNzZXRzL2F2YXRhcnMnKX1cclxuICAgICAgICAgICAgICBvblNjaGVkdWxlVXBkYXRlPXsocmVjb3JkSWQsIHBheWxvYWQpID0+IGhhbmRsZVVwZGF0ZShyZWNvcmRJZCwgcGF5bG9hZCwgeyB0YWJsZUlkOiAnU2NoZWR1bGVzJyB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YWN0aXZlVGFibGUgPT09ICdTZXJ2aWNlcycgJiYgKFxyXG4gICAgICAgICAgICA8U2VydmljZXNWaWV3XHJcbiAgICAgICAgICAgICAgc2VydmljZXM9e3NlcnZpY2VzfVxyXG4gICAgICAgICAgICAgIGJhcmJlcnM9e2JhcmJlcnN9XHJcbiAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25TZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25QcmljZUNoYW5nZT17b25TZXJ2aWNlUHJpY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlU2VydmljZX1cclxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3RhYmxlU2V0dGluZ3MgJiYgKFxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT17dGFibGVTZXR0aW5ncy5sYWJlbH0+XHJcbiAgICAgICAgICB7dGFibGVFcnJvciAmJiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17dGFibGVFcnJvcn0gLz59XHJcbiAgICAgICAgICA8VGFibGVUb29sYmFyXHJcbiAgICAgICAgICAgIHRhYmxlSWQ9e2FjdGl2ZVRhYmxlfVxyXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBzZXRTZWFyY2hUZXJtPXtzZXRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0JhcmJlckZpbHRlcj17dGFibGVTZXR0aW5ncy5zdXBwb3J0c0JhcmJlckZpbHRlcn1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCYXJiZXI9e3NlbGVjdGVkQmFyYmVyfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJhcmJlcj17c2V0U2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIGJhcmJlcnM9e2Ryb3Bkb3duT3B0aW9ucy5iYXJiZXJzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c1N0YXR1c0ZpbHRlcj17dGFibGVTZXR0aW5ncy5zdXBwb3J0c1N0YXR1c0ZpbHRlcn1cclxuICAgICAgICAgICAgc3RhdHVzZXM9e2Ryb3Bkb3duT3B0aW9ucy5zdGF0dXNlc31cclxuICAgICAgICAgICAgaGlkZGVuU3RhdHVzZXM9e2hpZGRlblN0YXR1c2VzfVxyXG4gICAgICAgICAgICB0b2dnbGVTdGF0dXM9e3RvZ2dsZVN0YXR1c31cclxuICAgICAgICAgICAgcmVzZXRTdGF0dXNlcz17KCkgPT4gc2V0SGlkZGVuU3RhdHVzZXMoW10pfVxyXG4gICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgaGlkZGVuQ29sdW1ucz17aGlkZGVuQ29sdW1uc31cclxuICAgICAgICAgICAgdG9nZ2xlQ29sdW1uPXt0b2dnbGVDb2x1bW59XHJcbiAgICAgICAgICAgIGNhbkNyZWF0ZT17dGFibGVTZXR0aW5ncy5jYW5DcmVhdGV9XHJcbiAgICAgICAgICAgIG9uT3BlbkNyZWF0ZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBvblJlZnJlc2g9e2ZldGNoVGFibGVzfVxyXG4gICAgICAgICAgICBzaG93UGFzdEFwcG9pbnRtZW50cz17c2hvd1Bhc3RBcHBvaW50bWVudHN9XHJcbiAgICAgICAgICAgIHNldFNob3dQYXN0QXBwb2ludG1lbnRzPXtzZXRTaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc3VwcG9ydHNHcm91cGluZz17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnfVxyXG4gICAgICAgICAgICBncm91cEJ5RGF0ZT17Z3JvdXBBcHBvaW50bWVudHNCeURhdGV9XHJcbiAgICAgICAgICAgIHNldEdyb3VwQnlEYXRlPXtzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aXNGZXRjaGluZyA/IChcclxuICAgICAgICAgICAgPExvYWRpbmdTdGF0ZSBsYWJlbD1cItCe0LHQvdC+0LLQu9GP0Y4g0YLQsNCx0LvQuNGG0YsuLi5cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAge2FjdGl2ZVRhYmxlID09PSAnVXNlcnMnID8gKFxyXG4gICAgICAgICAgICAgICAgPENsaWVudHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGNsaWVudHM9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGJhcmJlcnM9e2Ryb3Bkb3duT3B0aW9ucy5iYXJiZXJzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICBmZXRjaEhpc3Rvcnk9e2ZldGNoQ2xpZW50UHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q29uZmlybT17b25SZXF1ZXN0Q29uZmlybX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0Q29uZmlnPXtzb3J0Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICBvblNvcnQ9e2hhbmRsZVNvcnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSA/IGhhbmRsZURlbGV0ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b25PcGVuUHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IG9uT3BlbkFwcG9pbnRtZW50UmVjb3JkIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgZ3JvdXBCeURhdGU9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IGdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgICAgIHt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSAmJlxyXG4gICAgICAgICAgICAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gKFxyXG4gICAgICAgICAgICAgIDxBcHBvaW50bWVudE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtjcmVhdGVNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICBhcHBvaW50bWVudD17YXBwb2ludG1lbnRUZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvblNhdmU9eyh7IHBheWxvYWQgfSkgPT4gaGFuZGxlQ3JlYXRlUmVjb3JkKHBheWxvYWQpfVxyXG4gICAgICAgICAgICAgICAgaXNOZXdcclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Q3JlYXRlUmVjb3JkTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17aGFuZGxlQ3JlYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICB0YWJsZU5hbWU9e3RhYmxlU2V0dGluZ3MubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBoaWRkZW5GaWVsZHM9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IFsnVXNlcklEJywgJ1JlbWluZGVyMmhDbGllbnRTZW50JywgJ1JlbWluZGVyMmhCYXJiZXJTZW50J10gOiBbXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEJvdENvbnRyb2xWaWV3ID0gKHtcclxuICBzdGF0dXMsXHJcbiAgc2V0dGluZ3MsXHJcbiAgYmFja3VwcyA9IFtdLFxyXG4gIG1lc3NhZ2VzID0gW10sXHJcbiAgb25Ub2dnbGVFbmFibGVkLFxyXG4gIG9uU3RhcnQsXHJcbiAgb25TdG9wLFxyXG4gIG9uUmVzdGFydCxcclxuICBvblNhdmVTZXR0aW5ncyxcclxuICBvblNhdmVNZXNzYWdlLFxyXG4gIG9uUmVzdG9yZUJhY2t1cCxcclxuICBvbkNyZWF0ZUJhY2t1cCxcclxuICBvbkRlbGV0ZUJhY2t1cCxcclxuICBsaWNlbnNlU3RhdHVzLFxyXG4gIHVwZGF0ZUluZm8sXHJcbiAgb25SZWZyZXNoVXBkYXRlLFxyXG4gIG9uQXBwbHlVcGRhdGUsXHJcbiAgc3lzdGVtQnVzeSxcclxuICB2aWV3TW9kZSA9ICdib3QnLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYm90RGVzY3JpcHRpb24gfHwgJycpO1xyXG4gIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoc2V0dGluZ3M/LmFib3V0VGV4dCB8fCAnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREZXNjcmlwdGlvbihzZXR0aW5ncz8uYm90RGVzY3JpcHRpb24gfHwgJycpO1xyXG4gICAgc2V0QWJvdXQoc2V0dGluZ3M/LmFib3V0VGV4dCB8fCAnJyk7XHJcbiAgfSwgW3NldHRpbmdzXSk7XHJcblxyXG4gIGlmICh2aWV3TW9kZSA9PT0gJ3N5c3RlbScpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgPEJhY2t1cHNQYW5lbCBiYWNrdXBzPXtiYWNrdXBzfSBvblJlc3RvcmU9e29uUmVzdG9yZUJhY2t1cH0gb25DcmVhdGU9e29uQ3JlYXRlQmFja3VwfSBvbkRlbGV0ZT17b25EZWxldGVCYWNrdXB9IC8+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCb0LjRhtC10L3Qt9C40Y8g0Lgg0L7QsdC90L7QstC70LXQvdC40Y9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCb0LjRhtC10L3Qt9C40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCh0YLQsNGC0YPRgToge2xpY2Vuc2VTdGF0dXM/LnZhbGlkID8gJ9CQ0LrRgtC40LLQvdCwJyA6ICfQndC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk6IHtsaWNlbnNlU3RhdHVzPy5tZXNzYWdlIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm93bmVyICYmIDxwPtCS0LvQsNC00LXQu9C10YY6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2Uub3duZXJ9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8uZXhwaXJlc0F0ICYmIDxwPtCU0LXQudGB0YLQstGD0LXRgiDQtNC+IHtmb3JtYXREYXRlKGxpY2Vuc2VTdGF0dXMubGljZW5zZS5leHBpcmVzQXQpfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm51bWJlciAmJiA8cD7QndC+0LzQtdGAOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm51bWJlcn08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7QntCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0J/QvtGB0LvQtdC00L3Rj9GPINCy0LXRgNGB0LjRjzoge3VwZGF0ZUluZm8/LnZlcnNpb24gfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQvtCy0LXRgNC10L3Qvjoge3VwZGF0ZUluZm8/LmNoZWNrZWRBdCA/IGZvcm1hdERhdGUodXBkYXRlSW5mby5jaGVja2VkQXQpIDogJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCh0YLQsNGC0YPRgToge3VwZGF0ZUluZm8/LmRldGFpbHMgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCf0YDQvtCy0LXRgNC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5IHx8ICF1cGRhdGVJbmZvPy5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzeXN0ZW1CdXN5ID8gJ9Ce0LHQvdC+0LLQu9C10L3QuNC14oCmJyA6ICfQntCx0L3QvtCy0LjRgtGMJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQodGC0LDRgtGD0YEg0LHQvtGC0LBcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0KHQvtGB0YLQvtGPOiB7c3RhdHVzPy5ydW5uaW5nID8gJ9GA0LDQsdC+0YLQsNC10YInIDogJ9C+0YHRgtCw0L3QvtCy0LvQtdC9J308L3A+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2V0dGluZ3M/LmlzQm90RW5hYmxlZCAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uVG9nZ2xlRW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNCy0YLQvtGB0YLQsNGA0YIg0LLQvNC10YHRgtC1INGBIENSTVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQotC10LrRgdGC0Ysg0LHQvtGC0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QntC/0LjRgdCw0L3QuNC1INC70LXQvdC00LjQvdCz0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXszfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCR0LvQvtC6IMKr0J4g0L3QsNGBwrs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBYm91dChldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXs0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZVNldHRpbmdzKHsgYm90RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhYm91dFRleHQ6IGFib3V0IH0pfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YHRgtGLXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMb2dpblNjcmVlbiA9ICh7IG9uTG9naW4sIGVycm9yIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbk9wdGlvbnMsIHNldExvZ2luT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdGlvbnNFcnJvciwgc2V0T3B0aW9uc0Vycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZ09wdGlvbnMsIHNldExvYWRpbmdPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdPcHRpb25zKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUobm9ybWFsaXplZFswXS5sb2dpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm9ybWFsaXplZC5zb21lKChvcHRpb24pID0+IG9wdGlvbi5sb2dpbiA9PT0gdXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcignJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhbXSk7XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7Qsi4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hPcHRpb25zKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIG9uTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3REaXNhYmxlZCA9IGxvYWRpbmdPcHRpb25zIHx8IGxvZ2luT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAgcHgtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMCBwLTggc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5CYXJiZXIgQm90IENSTTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCAo0LvQvtCz0LjQvSk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS02MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57bG9hZGluZ09wdGlvbnMgPyAn0JfQsNCz0YDRg9C30LrQsC4uLicgOiAn0KPQutCw0LbQuNGC0LUg0LHQsNGA0LHQtdGA0LAnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bG9naW5PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubG9naW59IHZhbHVlPXtvcHRpb24ubG9naW59PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbCB8fCBvcHRpb24ubG9naW59XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQsNC60YLQuNCy0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ysg0LjQtyDRgNCw0LfQtNC10LvQsCDCq9CR0LDRgNCx0LXRgNGLwrsuPC9wPlxyXG4gICAgICAgICAgICB7b3B0aW9uc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTQwMFwiPntvcHRpb25zRXJyb3J9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyh2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3IpICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3J9IC8+fVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH0+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgICByZXR1cm4gc2F2ZWQgPyBidWlsZFNlc3Npb25QYXlsb2FkKEpTT04ucGFyc2Uoc2F2ZWQpKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlTG9jYWxTdG9yYWdlKCdiYXJiZXIuYWN0aXZlVGFiJywgJ2Rhc2hib2FyZCcpO1xyXG4gIGNvbnN0IFtwZW5kaW5nVGFibGVWaWV3LCBzZXRQZW5kaW5nVGFibGVWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVEYXRhVGFibGUsIHNldEFjdGl2ZURhdGFUYWJsZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFibGVzLmFjdGl2ZScpO1xyXG4gICAgICByZXR1cm4gc3RvcmVkID8gSlNPTi5wYXJzZShzdG9yZWQpIDogJ0FwcG9pbnRtZW50cyc7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuICdBcHBvaW50bWVudHMnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFyYmVycywgc2V0QmFyYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JvdFN0YXR1cywgc2V0Qm90U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RTZXR0aW5ncywgc2V0Qm90U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdE1lc3NhZ2VzLCBzZXRCb3RNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpY2Vuc2VTdGF0dXMsIHNldExpY2Vuc2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwZGF0ZUluZm8sIHNldFVwZGF0ZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnNDYWNoZSwgc2V0T3B0aW9uc0NhY2hlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICBjb25zdCBbYXBwb2ludG1lbnRNb2RhbCwgc2V0QXBwb2ludG1lbnRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dsb2JhbEVycm9yLCBzZXRHbG9iYWxFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgc2V0QXV0aEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3lzdGVtQnVzeSwgc2V0U3lzdGVtQnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpO1xyXG4gIGNvbnN0IFtyZWFsdGltZVNuYXBzaG90LCBzZXRSZWFsdGltZVNuYXBzaG90XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmYXRhbEVycm9yLCBzZXRGYXRhbEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb25maXJtRGlhbG9nLCBzZXRDb25maXJtRGlhbG9nXSA9IHVzZVN0YXRlKGRlZmF1bHRDb25maXJtU3RhdGUpO1xyXG4gIGNvbnN0IFtjb25uZWN0aW9uU3RhdHVzLCBzZXRDb25uZWN0aW9uU3RhdHVzXSA9IHVzZVN0YXRlKCd1bmtub3duJyk7XHJcbiAgY29uc3QgY29uZmlybVJlc29sdmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCByZXF1ZXN0Q29uZmlybSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKG9wdGlvbnMgPSB7fSkgPT5cclxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudCA9IHJlc29sdmU7XHJcbiAgICAgICAgc2V0Q29uZmlybURpYWxvZyh7IC4uLmRlZmF1bHRDb25maXJtU3RhdGUsIC4uLm9wdGlvbnMsIG9wZW46IHRydWUgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb25maXJtUmVzdWx0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgIHNldENvbmZpcm1EaWFsb2coZGVmYXVsdENvbmZpcm1TdGF0ZSk7XHJcbiAgICAgIGlmIChjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50KHJlc3VsdCk7XHJcbiAgICAgICAgY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnIHx8IGFjdGl2ZVRhYiA9PT0gJ3NlcnZpY2VzJykge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBhY3RpdmVUYWIgPT09ICdiYXJiZXJzJyA/ICdCYXJiZXJzJyA6ICdTZXJ2aWNlcyc7XHJcbiAgICAgIHNldFBlbmRpbmdUYWJsZVZpZXcodGFyZ2V0KTtcclxuICAgICAgc2V0QWN0aXZlVGFiKCd0YWJsZXMnKTtcclxuICAgIH1cclxuICB9LCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lkZWJhclRhYmxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodGFibGVJZCkgPT4ge1xyXG4gICAgICBpZiAoIXRhYmxlSWQpIHJldHVybjtcclxuICAgICAgc2V0QWN0aXZlRGF0YVRhYmxlKHRhYmxlSWQpO1xyXG4gICAgICBzZXRQZW5kaW5nVGFibGVWaWV3KHRhYmxlSWQpO1xyXG4gICAgICBzZXRBY3RpdmVUYWIoJ3RhYmxlcycpO1xyXG4gICAgfSxcclxuICAgIFtzZXRBY3RpdmVUYWIsIHNldFBlbmRpbmdUYWJsZVZpZXddXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWN0aXZlVGFibGVTeW5jID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodGFibGVJZCkgPT4ge1xyXG4gICAgICBpZiAoIXRhYmxlSWQpIHJldHVybjtcclxuICAgICAgc2V0QWN0aXZlRGF0YVRhYmxlKHRhYmxlSWQpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJlZmVycmVkVGFibGVDb25zdW1lZCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFBlbmRpbmdUYWJsZVZpZXcobnVsbCksIFtdKTtcclxuICBjb25zdCBzZXJ2aWNlU2F2ZVRpbWVycyA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgc2V0Q29ubmVjdGlvblN0YXR1cygndW5rbm93bicpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja1NlcnZlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vbG9naW4vb3B0aW9uc2AsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XHJcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldENvbm5lY3Rpb25TdGF0dXMocmVzcG9uc2Uub2sgPyAnb25saW5lJyA6ICdvZmZsaW5lJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIHNldENvbm5lY3Rpb25TdGF0dXMoJ29mZmxpbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGVja1NlcnZlcigpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGVja1NlcnZlciwgMTUwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmFyYmVyLXNlc3Npb24nKTtcclxuICAgIHNldFNlc3Npb24obnVsbCk7XHJcbiAgICBzZXREYXNoYm9hcmQobnVsbCk7XHJcbiAgICBzZXRHbG9iYWxFcnJvcignJyk7XHJcbiAgICBzZXRSZWFsdGltZVNuYXBzaG90KG51bGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYXBpUmVxdWVzdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGVuZHBvaW50LCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uPy50b2tlbikgdGhyb3cgbmV3IEVycm9yKCfQndC10YIg0LDQutGC0LjQstC90L7QuSDRgdC10YHRgdC40LgnKTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbi50b2tlbn1gLFxyXG4gICAgICAgIC4uLihvcHRpb25zLmJvZHkgJiYgIW9wdGlvbnMuaGVhZGVycz8uWydDb250ZW50LVR5cGUnXSA/IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IDoge30pLFxyXG4gICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke2VuZHBvaW50fWAsIHsgLi4ub3B0aW9ucywgaGVhZGVycyB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgaGFuZGxlTG9nb3V0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQodC10YHRgdC40Y8g0LjRgdGC0LXQutC70LAnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC30LDQv9GA0L7RgdCwJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSByZXR1cm4gbnVsbDtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0sXHJcbiAgICBbc2Vzc2lvbj8udG9rZW4sIGhhbmRsZUxvZ291dF1cclxuICApO1xyXG5cclxuICBjb25zdCBmZXRjaEFsbCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHJldHVybjtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRHbG9iYWxFcnJvcignJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvdmVydmlldyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9kYXNoYm9hcmQvb3ZlcnZpZXcnKTtcclxuICAgICAgc2V0RGFzaGJvYXJkKG92ZXJ2aWV3KTtcclxuICAgICAgY29uc3Qgd2l0aEZhbGxiYWNrID0gKHJlcXVlc3QsIGZhbGxiYWNrLCBsYWJlbCkgPT5cclxuICAgICAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGAke2xhYmVsfSBmZXRjaCBza2lwcGVkOmAsIGVycm9yPy5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICAgIHJldHVybiBmYWxsYmFjaztcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgW1xyXG4gICAgICAgIHNlcnZpY2VzRnVsbCxcclxuICAgICAgICBiYXJiZXJzRnVsbCxcclxuICAgICAgICBib3RTdGF0ZSxcclxuICAgICAgICBib3RNZXNzYWdlc1BheWxvYWQsXHJcbiAgICAgICAgbGljZW5zZSxcclxuICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL3NlcnZpY2VzL2Z1bGwnKSwgeyBzZXJ2aWNlczogW10gfSwgJ1NlcnZpY2VzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9iYXJiZXJzL2Z1bGwnKSwgW10sICdCYXJiZXJzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJyksIHsgc3RhdHVzOiBudWxsLCBzZXR0aW5nczogbnVsbCB9LCAnQm90IHN0YXR1cycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYm90L21lc3NhZ2VzJyksIFtdLCAnQm90IG1lc3NhZ2VzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9saWNlbnNlL3N0YXR1cycpLCBudWxsLCAnTGljZW5zZScpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZScpLCBudWxsLCAnVXBkYXRlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhcclxuICAgICAgICAgIGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cycpLFxyXG4gICAgICAgICAgeyBzdGF0dXNlczogW10sIGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10gfSxcclxuICAgICAgICAgICdPcHRpb25zJyxcclxuICAgICAgICApLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0U2VydmljZXMoc2VydmljZXNGdWxsLnNlcnZpY2VzIHx8IFtdKTtcclxuICAgICAgc2V0QmFyYmVycyhiYXJiZXJzRnVsbCB8fCBvdmVydmlldy5iYXJiZXJzIHx8IFtdKTtcclxuICAgICAgc2V0Qm90U2V0dGluZ3MoYm90U3RhdGUuc2V0dGluZ3MgfHwgb3ZlcnZpZXcuYm90Py5zZXR0aW5ncyB8fCBudWxsKTtcclxuICAgICAgc2V0Qm90U3RhdHVzKGJvdFN0YXRlLnN0YXR1cyk7XHJcbiAgICAgIHNldEJvdE1lc3NhZ2VzKGJvdE1lc3NhZ2VzUGF5bG9hZCB8fCBbXSk7XHJcbiAgICAgIHNldExpY2Vuc2VTdGF0dXMobGljZW5zZSk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8odXBkYXRlKTtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pIH07XHJcbiAgICAgIHNldE9wdGlvbnNDYWNoZShub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbYXBpUmVxdWVzdCwgc2Vzc2lvbj8udG9rZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uPy50b2tlbikge1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uPy50b2tlbiwgZmV0Y2hBbGxdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgc2V0UmVhbHRpbWVTbmFwc2hvdChudWxsKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgRXZlbnRTb3VyY2UgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgdG9rZW5QYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChzZXNzaW9uLnRva2VuKTtcclxuICAgIGNvbnN0IHN0cmVhbVVybCA9IGAke0FQSV9CQVNFX1VSTH0vZXZlbnRzL3N0cmVhbT90b2tlbj0ke3Rva2VuUGFyYW19YDtcclxuICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHN0cmVhbVVybCk7XHJcbiAgICBldmVudFNvdXJjZS5vbm9wZW4gPSAoKSA9PiBzZXRDb25uZWN0aW9uU3RhdHVzKCdvbmxpbmUnKTtcclxuICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgaWYgKHBheWxvYWQ/LnR5cGUgIT09ICdhcHBvaW50bWVudHM6dXBkYXRlJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBwYXlsb2FkLnBheWxvYWQgfHwge307XHJcbiAgICAgICAgc2V0UmVhbHRpbWVTbmFwc2hvdCh7XHJcbiAgICAgICAgICByb3dzOiBBcnJheS5pc0FycmF5KGRldGFpbHMucm93cykgPyBkZXRhaWxzLnJvd3MgOiBbXSxcclxuICAgICAgICAgIHN0YXRzOiBkZXRhaWxzLnN0YXRzIHx8IHt9LFxyXG4gICAgICAgICAgdXBjb21pbmc6IEFycmF5LmlzQXJyYXkoZGV0YWlscy51cGNvbWluZykgPyBkZXRhaWxzLnVwY29taW5nIDogW10sXHJcbiAgICAgICAgICB1cGRhdGVkQXQ6IGRldGFpbHMudXBkYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFsdGltZSBldmVudCBwYXJzZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBldmVudFNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdhcHBvaW50bWVudHMnLCBoYW5kbGVFdmVudCk7XHJcbiAgICBldmVudFNvdXJjZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICBzZXRDb25uZWN0aW9uU3RhdHVzKCdvZmZsaW5lJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZXZlbnRTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignYXBwb2ludG1lbnRzJywgaGFuZGxlRXZlbnQpO1xyXG4gICAgICBldmVudFNvdXJjZS5jbG9zZSgpO1xyXG4gICAgfTtcclxuICB9LCBbc2Vzc2lvbj8udG9rZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcmVhbHRpbWVTbmFwc2hvdCkgcmV0dXJuO1xyXG4gICAgc2V0RGFzaGJvYXJkKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5leHRTdGF0cyA9IHsgLi4uKHByZXY/LnN0YXRzIHx8IHt9KSwgLi4uKHJlYWx0aW1lU25hcHNob3Quc3RhdHMgfHwge30pIH07XHJcbiAgICAgIGNvbnN0IG5leHRBcHBvaW50bWVudHMgPSB7XHJcbiAgICAgICAgLi4uKHByZXY/LmFwcG9pbnRtZW50cyB8fCB7fSksXHJcbiAgICAgICAgdXBjb21pbmc6IHJlYWx0aW1lU25hcHNob3QudXBjb21pbmcgfHwgcHJldj8uYXBwb2ludG1lbnRzPy51cGNvbWluZyB8fCBbXSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFwcmV2KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHM6IG5leHRTdGF0cywgYXBwb2ludG1lbnRzOiBuZXh0QXBwb2ludG1lbnRzIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgc3RhdHM6IG5leHRTdGF0cywgYXBwb2ludG1lbnRzOiBuZXh0QXBwb2ludG1lbnRzIH07XHJcbiAgICB9KTtcclxuICB9LCBbcmVhbHRpbWVTbmFwc2hvdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsRXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZGV0YWlsID0gZXZlbnQ/LnJlYXNvbiB8fCBldmVudD8uZXJyb3I7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICAgIGRldGFpbD8ubWVzc2FnZSB8fFxyXG4gICAgICAgIGV2ZW50Py5tZXNzYWdlIHx8XHJcbiAgICAgICAgKHR5cGVvZiBkZXRhaWwgPT09ICdzdHJpbmcnID8gZGV0YWlsIDogJ9Cd0LXQuNC30LLQtdGB0YLQvdCw0Y8g0L7RiNC40LHQutCwJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dsb2JhbCBVSSBlcnJvcjonLCBkZXRhaWwgfHwgZXZlbnQpO1xyXG4gICAgICBzZXRGYXRhbEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiAoKSA9PiB7XHJcbiAgICAgIHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQuZm9yRWFjaCgodGltZXIpID0+IGNsZWFyVGltZW91dCh0aW1lcikpO1xyXG4gICAgICBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50LmNsZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHNldEF1dGhFcnJvcignJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkVXNlcm5hbWUgPSByZXNvbHZlTG9naW4odXNlcm5hbWUpO1xyXG4gICAgaWYgKCFub3JtYWxpemVkVXNlcm5hbWUpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBub3JtYWxpemVkVXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCAhZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0QXV0aEVycm9yKGRhdGEubWVzc2FnZSB8fCAn0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2Vzc2lvblBheWxvYWQgPSBidWlsZFNlc3Npb25QYXlsb2FkKHsgLi4uZGF0YSwgdXNlcm5hbWU6IG5vcm1hbGl6ZWRVc2VybmFtZSB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JhcmJlci1zZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvblBheWxvYWQpKTtcclxuICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uUGF5bG9hZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoJ9Ch0LXRgNCy0LXRgCDQvdC10LTQvtGB0YLRg9C/0LXQvScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhcmJlckZpZWxkQ2hhbmdlID0gKGlkLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIHNldEJhcmJlcnMoKHByZXYpID0+IHByZXYubWFwKChiYXJiZXIpID0+IChiYXJiZXIuaWQgPT09IGlkID8geyAuLi5iYXJiZXIsIFtmaWVsZF06IHZhbHVlIH0gOiBiYXJiZXIpKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplU2VydmljZVBheWxvYWQgPSAoc2VydmljZSkgPT4gKHtcclxuICAgIC4uLnNlcnZpY2UsXHJcbiAgICBwcmljZXM6IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoc2VydmljZS5wcmljZXMgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpXSlcclxuICAgICksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRlcml2ZUJhcmJlckxvZ2luID0gKGJhcmJlckRhdGEgPSB7fSkgPT4gcmVzb2x2ZUxvZ2luKGJhcmJlckRhdGEubG9naW4gfHwgYmFyYmVyRGF0YS5uYW1lIHx8ICcnKTtcclxuXHJcbiAgY29uc3QgYnVpbGRCYXJiZXJQYXlsb2FkID0gKGJhcmJlckRhdGEgPSB7fSwgZmFsbGJhY2tPcmRlciA9IDApID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIG5hbWU6IGJhcmJlckRhdGEubmFtZSB8fCAnJyxcclxuICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiYXJiZXJEYXRhLmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICByYXRpbmc6IGJhcmJlckRhdGEucmF0aW5nIHx8ICcnLFxyXG4gICAgICBhdmF0YXJVcmw6IGJhcmJlckRhdGEuYXZhdGFyVXJsIHx8ICcnLFxyXG4gICAgICBjb2xvcjogYmFyYmVyRGF0YS5jb2xvciB8fCAnJyxcclxuICAgICAgbG9naW46IGRlcml2ZUJhcmJlckxvZ2luKGJhcmJlckRhdGEpLFxyXG4gICAgICBwYXNzd29yZDogYmFyYmVyRGF0YS5wYXNzd29yZCB8fCAnJyxcclxuICAgICAgcGhvbmU6IGJhcmJlckRhdGEucGhvbmUgfHwgJycsXHJcbiAgICAgIHRlbGVncmFtSWQ6IGJhcmJlckRhdGEudGVsZWdyYW1JZCB8fCAnJyxcclxuICAgICAgaXNBY3RpdmU6IGJhcmJlckRhdGEuaXNBY3RpdmUgIT09IGZhbHNlLFxyXG4gICAgICBvcmRlckluZGV4OiBOdW1iZXIoYmFyYmVyRGF0YS5vcmRlckluZGV4ID8/IGZhbGxiYWNrT3JkZXIpIHx8IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGJhcmJlckRhdGEuaWQpIHtcclxuICAgICAgcGF5bG9hZC5pZCA9IGJhcmJlckRhdGEuaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQmFyYmVyID0gYXN5bmMgKGJhcmJlcikgPT4ge1xyXG4gICAgaWYgKCFiYXJiZXI/LmlkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVJlcXVlc3QoYC9CYXJiZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhcmJlci5pZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShidWlsZEJhcmJlclBheWxvYWQoYmFyYmVyKSkgfSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRCYXJiZXIgPSByZXNwb25zZSB8fCBiYXJiZXI7XHJcbiAgICAgIHNldEJhcmJlcnMoKHByZXYpID0+IHByZXYubWFwKChpdGVtKSA9PiAoaXRlbS5pZCA9PT0gdXBkYXRlZEJhcmJlci5pZCA/IHsgLi4uaXRlbSwgLi4udXBkYXRlZEJhcmJlciB9IDogaXRlbSkpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJhcmJlciA9IGFzeW5jIChiYXJiZXIpID0+IHtcclxuICAgIGlmICghYmFyYmVyPy5pZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQkdCw0YDQsdC10YAgwqske2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0JhcmJlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoYmFyYmVyLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkQmFyYmVyID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghcGF5bG9hZC5uYW1lIHx8ICFwYXlsb2FkLnBhc3N3b3JkKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKCfQl9Cw0L/QvtC70L3QuNGC0LUg0LjQvNGPLCDQu9C+0LPQuNC9INC4INC/0LDRgNC+0LvRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBuZXdCYXJiZXJQYXlsb2FkID0gYnVpbGRCYXJiZXJQYXlsb2FkKHsgLi4ucGF5bG9hZCwgaWQ6IHVuZGVmaW5lZCB9LCBiYXJiZXJzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IHsgaWQsIC4uLmJvZHkgfSA9IG5ld0JhcmJlclBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9CYXJiZXJzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC00L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlU2VydmljZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKHNlcnZpY2UpID0+IHtcclxuICAgICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9zZXJ2aWNlcy9mdWxsLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZpY2UuaWQpfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShub3JtYWxpemVTZXJ2aWNlUGF5bG9hZChzZXJ2aWNlKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbYXBpUmVxdWVzdF1cclxuICApO1xyXG5cclxuICBjb25zdCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlcnZpY2UpID0+IHtcclxuICAgICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0aW1lcnMgPSBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50O1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RpbWVyID0gdGltZXJzLmdldChzZXJ2aWNlLmlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nVGltZXIpIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKTtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBoYW5kbGVTYXZlU2VydmljZShzZXJ2aWNlKTtcclxuICAgICAgICB0aW1lcnMuZGVsZXRlKHNlcnZpY2UuaWQpO1xyXG4gICAgICB9LCA0MDApO1xyXG4gICAgICB0aW1lcnMuc2V0KHNlcnZpY2UuaWQsIHRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBbaGFuZGxlU2F2ZVNlcnZpY2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlU2VydmljZSA9IGFzeW5jIChzZXJ2aWNlKSA9PiB7XHJcbiAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQo9GB0LvRg9Cz0LAgwqske3NlcnZpY2UubmFtZSB8fCAn0JHQtdC3INC90LDQt9Cy0LDQvdC40Y8nfcK7INCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAuYCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9zZXJ2aWNlcy9mdWxsLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZpY2UuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkU2VydmljZSA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQubmFtZSkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL3NlcnZpY2VzL2Z1bGwnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShub3JtYWxpemVTZXJ2aWNlUGF5bG9hZChwYXlsb2FkKSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC00L7QsdCw0LLQuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VydmljZUZpZWxkQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRTZXJ2aWNlcygocHJldikgPT4gcHJldi5tYXAoKHNlcnZpY2UpID0+IChzZXJ2aWNlLmlkID09PSBpZCA/IHsgLi4uc2VydmljZSwgW2ZpZWxkXTogdmFsdWUgfSA6IHNlcnZpY2UpKSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlKHsgLi4udGFyZ2V0LCBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzZXJ2aWNlcywgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VydmljZVByaWNlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VydmljZUlkLCBiYXJiZXJJZCwgdmFsdWUpID0+IHtcclxuICAgICAgc2V0U2VydmljZXMoKHByZXYpID0+XHJcbiAgICAgICAgcHJldi5tYXAoKHNlcnZpY2UpID0+IHtcclxuICAgICAgICAgIGlmIChzZXJ2aWNlLmlkICE9PSBzZXJ2aWNlSWQpIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc2VydmljZSxcclxuICAgICAgICAgICAgcHJpY2VzOiB7IC4uLihzZXJ2aWNlLnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IHNlcnZpY2VJZCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSh7XHJcbiAgICAgICAgICAuLi50YXJnZXQsXHJcbiAgICAgICAgICBwcmljZXM6IHsgLi4uKHRhcmdldC5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NlcnZpY2VzLCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVCb3RUb2dnbGUgPSBhc3luYyAoZW5hYmxlZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlzQm90RW5hYmxlZDogZW5hYmxlZCB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7QsdC90L7QstC40YLRjCDQvdCw0YHRgtGA0L7QudC60Lgg0LHQvtGC0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCb3RBY3Rpb24gPSBhc3luYyAoYWN0aW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQstGL0L/QvtC70L3QuNGC0Ywg0LTQtdC50YHRgtCy0LjQtScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVTZXR0aW5ncyA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIWJvdFNldHRpbmdzPy5pZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0JvdFNldHRpbmdzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJvdFNldHRpbmdzLmlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZU1lc3NhZ2UgPSBhc3luYyAoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiB7XHJcbiAgICBpZiAoIXBlcnNpc3QpIHtcclxuICAgICAgc2V0Qm90TWVzc2FnZXMoKHByZXYpID0+IHByZXYubWFwKChtZXNzYWdlKSA9PiAobWVzc2FnZS5pZCA9PT0gaWQgPyB7IC4uLmRyYWZ0IH0gOiBtZXNzYWdlKSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvYm90L21lc3NhZ2VzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZTogZHJhZnQuY29kZSwgdGl0bGU6IGRyYWZ0LnRpdGxlLCB0ZXh0OiBkcmFmdC50ZXh0IH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzdG9yZUJhY2t1cCA9IGFzeW5jIChmaWxlbmFtZSkgPT4ge1xyXG4gICAgaWYgKCFmaWxlbmFtZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9CS0L7RgdGB0YLQsNC90L7QstC40YLRjCDRgNC10LfQtdGA0LLQvdGD0Y4g0LrQvtC/0LjRjj8nLFxyXG4gICAgICBtZXNzYWdlOiBg0KLQtdC60YPRidC40LUg0LTQsNC90L3Ri9C1INCx0YPQtNGD0YIg0LfQsNC80LXQvdC10L3RiyDRgdC+0LTQtdGA0LbQuNC80YvQvCAke2ZpbGVuYW1lfS4g0J/RgNC+0LTQvtC70LbQuNGC0Yw/YCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9yZXN0b3JlJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZW5hbWUgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQsdGN0LrQsNC/Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQmFja3VwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Ch0L7Qt9C00LDRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXHJcbiAgICAgIG1lc3NhZ2U6ICfQkdGD0LTQtdGCINGB0L7Qt9C00LDQvSDRhNCw0LnQuyDRgNC10LfQtdGA0LLQvdC+0Lkg0LrQvtC/0LjQuCDRgtC10LrRg9GJ0LXQuSDQsdCw0LfRiyDQtNCw0L3QvdGL0YUuJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KHQvtC30LTQsNGC0YwnLFxyXG4gICAgICB0b25lOiAnc3VjY2VzcycsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9jcmVhdGUnLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQsdGN0LrQsNC/Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQmFja3VwID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XHJcbiAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JyxcclxuICAgICAgbWVzc2FnZTogYNCk0LDQudC7ICR7ZmlsZW5hbWV9INCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCx0LXQt9Cy0L7Qt9Cy0YDQsNGC0L3Qvi5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JhY2t1cHMvZGVsZXRlJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZW5hbWUgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsaWVudEhpc3RvcnkgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChjbGllbnQpID0+IHtcclxuICAgICAgaWYgKCFjbGllbnQ/Lk5hbWUpIHJldHVybiBudWxsO1xyXG4gICAgICByZXR1cm4gYXBpUmVxdWVzdChgL3VzZXItcHJvZmlsZS8ke2VuY29kZVVSSUNvbXBvbmVudChjbGllbnQuTmFtZSl9YCk7XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcblxyXG4gIGNvbnN0IG9wZW5Qcm9maWxlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAobmFtZSkgPT4ge1xyXG4gICAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogbnVsbCwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXBpUmVxdWVzdChgL3VzZXItcHJvZmlsZS8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcclxuICAgICAgICBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiB0cnVlLCBkYXRhOiBwYXlsb2FkLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiB0cnVlLCBkYXRhOiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQv9GA0L7RhNC40LvRjCcgfSwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbYXBpUmVxdWVzdF1cclxuICApO1xyXG5cclxuICBjb25zdCBlbnN1cmVPcHRpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG9wdGlvbnNDYWNoZSkgcmV0dXJuIG9wdGlvbnNDYWNoZTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHM/Zm9yY2U9MScpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3Qob3B0aW9ucy5zdGF0dXNlcyB8fCBbXSksXHJcbiAgICB9O1xyXG4gICAgc2V0T3B0aW9uc0NhY2hlKG5vcm1hbGl6ZWQpO1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgfSwgW2FwaVJlcXVlc3QsIG9wdGlvbnNDYWNoZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQXBwb2ludG1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChhcHBvaW50bWVudCwgb3B0aW9uc0NvbmZpZyA9IHt9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBlbnN1cmVPcHRpb25zKCk7XHJcbiAgICAgIHNldEFwcG9pbnRtZW50TW9kYWwoe1xyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgZGF0YTogYXBwb2ludG1lbnQsXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICBpc05ldzogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dEZWxldGU6ICEhb3B0aW9uc0NvbmZpZy5hbGxvd0RlbGV0ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Vuc3VyZU9wdGlvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQXBwb2ludG1lbnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgZW5zdXJlT3B0aW9ucygpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgY29uc3QgZGVmYXVsdFN0YXR1cyA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKG9wdGlvbnMuc3RhdHVzZXM/LlswXSB8fCAn0JDQutGC0LjQstC90LDRjycpO1xyXG4gICAgY29uc3QgZGVmYXVsdEJhcmJlciA9IHBpY2tCYXJiZXJGb3JVc2VyKHNlc3Npb24sIG9wdGlvbnMuYmFyYmVycyB8fCBbXSk7XHJcbiAgICBzZXRBcHBvaW50bWVudE1vZGFsKHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIEN1c3RvbWVyTmFtZTogJycsXHJcbiAgICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICAgIEJhcmJlcjogZGVmYXVsdEJhcmJlcixcclxuICAgICAgICBEYXRlOiB0b2RheSxcclxuICAgICAgICBUaW1lOiAnJyxcclxuICAgICAgICBTdGF0dXM6IGRlZmF1bHRTdGF0dXMsXHJcbiAgICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICAgIFVzZXJJRDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIGlzTmV3OiB0cnVlLFxyXG4gICAgICBhbGxvd0RlbGV0ZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9LCBbZW5zdXJlT3B0aW9ucywgc2Vzc2lvbj8uZGlzcGxheU5hbWUsIHNlc3Npb24/LnVzZXJuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVBcHBvaW50bWVudCA9IGFzeW5jICh7IGlkLCBwYXlsb2FkLCBpc05ldyB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoaXNOZXcpIHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvQXBwb2ludG1lbnRzJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGlkKSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0FwcG9pbnRtZW50cy8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRBcHBvaW50bWVudE1vZGFsKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgaXNOZXc6IGZhbHNlLCBhbGxvd0RlbGV0ZTogZmFsc2UgfSkpO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQXBwb2ludG1lbnQgPSBhc3luYyAoYXBwb2ludG1lbnQpID0+IHtcclxuICAgIGlmICghYXBwb2ludG1lbnQ/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsXHJcbiAgICAgIG1lc3NhZ2U6ICfQl9Cw0L/QuNGB0Ywg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsCDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLicsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQXBwb2ludG1lbnRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFwcG9pbnRtZW50LmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICAgIHNldEFwcG9pbnRtZW50TW9kYWwoeyBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgb3B0aW9uczogbnVsbCwgaXNOZXc6IGZhbHNlLCBhbGxvd0RlbGV0ZTogZmFsc2UgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTeXN0ZW1CdXN5KHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9zeXN0ZW0vdXBkYXRlP2ZvcmNlPTEnKTtcclxuICAgICAgc2V0VXBkYXRlSW5mbyhpbmZvKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/RgNC+0LLQtdGA0LjRgtGMINC+0LHQvdC+0LLQu9C10L3QuNGPJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTeXN0ZW1CdXN5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQntCx0L3QvtCy0LjRgtGMINGB0LjRgdGC0LXQvNGDPycsXHJcbiAgICAgIG1lc3NhZ2U6ICdDUk0g0Lgg0LHQvtGCINCx0YPQtNGD0YIg0L7QsdC90L7QstC70LXQvdGLINC00L4g0L/QvtGB0LvQtdC00L3QtdC5INCy0LXRgNGB0LjQuC4g0J/QtdGA0LXQt9Cw0L/Rg9GB0Log0LzQvtC20LXRgiDQt9Cw0L3Rj9GC0Ywg0L3QtdGB0LrQvtC70YzQutC+INC80LjQvdGD0YIuJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0J7QsdC90L7QstC40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgc2V0U3lzdGVtQnVzeSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaVJlcXVlc3QoJy9zeXN0ZW0vdXBkYXRlJywgeyBtZXRob2Q6ICdQT1NUJyB9KTtcclxuICAgICAgc2V0VXBkYXRlSW5mbyhyZXN1bHQuaW5mbyB8fCByZXN1bHQpO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQv9GA0LjQvNC10L3QuNGC0Ywg0L7QsdC90L7QstC70LXQvdC40LUnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFN5c3RlbUJ1c3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICghc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgIHJldHVybiA8TG9naW5TY3JlZW4gb25Mb2dpbj17aGFuZGxlTG9naW59IGVycm9yPXthdXRoRXJyb3J9IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJlZmVycmVkVGFibGVUYXJnZXQgPSBhY3RpdmVUYWIgPT09ICdiYXJiZXJzJyA/ICdCYXJiZXJzJyA6IGFjdGl2ZVRhYiA9PT0gJ3NlcnZpY2VzJyA/ICdTZXJ2aWNlcycgOiBwZW5kaW5nVGFibGVWaWV3O1xyXG4gIGNvbnN0IGxpdmVVcGRhdGVkQXQgPSByZWFsdGltZVNuYXBzaG90Py51cGRhdGVkQXQgfHwgbnVsbDtcclxuICBjb25zdCBtYWluQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygnZmxleC0xIHNwYWNlLXktNCBwLTQgbWQ6cC04JywgaXNNb2JpbGUgPyAncGItMjQnIDogJycpO1xyXG5cclxuICBjb25zdCByZW5kZXJBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nU3RhdGUgLz47XHJcbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYikge1xyXG4gICAgICBjYXNlICdkYXNoYm9hcmQnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RGFzaGJvYXJkVmlld1xyXG4gICAgICAgICAgICBkYXRhPXtkYXNoYm9hcmR9XHJcbiAgICAgICAgICAgIG9uT3BlbkFwcG9pbnRtZW50PXtoYW5kbGVPcGVuQXBwb2ludG1lbnR9XHJcbiAgICAgICAgICAgIG9uT3BlblByb2ZpbGU9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUFwcG9pbnRtZW50PXtoYW5kbGVDcmVhdGVBcHBvaW50bWVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAndGFibGVzJzpcclxuICAgICAgY2FzZSAnYmFyYmVycyc6XHJcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRhYmxlc1dvcmtzcGFjZVxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0PXthcGlSZXF1ZXN0fVxyXG4gICAgICAgICAgICBzaGFyZWRPcHRpb25zPXtvcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3B0aW9uc1VwZGF0ZT17c2V0T3B0aW9uc0NhY2hlfVxyXG4gICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvcGVuUHJvZmlsZX1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnRSZWNvcmQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgY2xpZW50cz17ZGFzaGJvYXJkPy5jbGllbnRzIHx8IFtdfVxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcj17c2Vzc2lvbiB8fCBudWxsfVxyXG4gICAgICAgICAgICBsaXZlQXBwb2ludG1lbnRzPXtyZWFsdGltZVNuYXBzaG90Py5yb3dzIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e3JlYWx0aW1lU25hcHNob3Q/LnVwZGF0ZWRBdCB8fCBudWxsfVxyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XHJcbiAgICAgICAgICAgIG9uQmFyYmVyRmllbGRDaGFuZ2U9e2hhbmRsZUJhcmJlckZpZWxkQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblNhdmVCYXJiZXI9e2hhbmRsZVNhdmVCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uQWRkQmFyYmVyPXtoYW5kbGVBZGRCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlQmFyYmVyPXtoYW5kbGVEZWxldGVCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uU2VydmljZUZpZWxkQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU2VydmljZVByaWNlQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlU2VydmljZT17aGFuZGxlRGVsZXRlU2VydmljZX1cclxuICAgICAgICAgICAgb25BZGRTZXJ2aWNlPXtoYW5kbGVBZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgICBvbkFjdGl2ZVRhYmxlQ2hhbmdlPXtoYW5kbGVBY3RpdmVUYWJsZVN5bmN9XHJcbiAgICAgICAgICAgIHByZWZlcnJlZFRhYmxlPXtwcmVmZXJyZWRUYWJsZVRhcmdldH1cclxuICAgICAgICAgICAgb25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkPXtoYW5kbGVQcmVmZXJyZWRUYWJsZUNvbnN1bWVkfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDb25maXJtPXtyZXF1ZXN0Q29uZmlybX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnYm90JzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJvdENvbnRyb2xWaWV3XHJcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxyXG4gICAgICAgICAgICBzZXR0aW5ncz17Ym90U2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGJhY2t1cHM9e2Rhc2hib2FyZD8uYmFja3VwcyB8fCBbXX1cclxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZWQ9e2hhbmRsZUJvdFRvZ2dsZX1cclxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxyXG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxyXG4gICAgICAgICAgICBvblJlc3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbigncmVzdGFydCcpfVxyXG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxyXG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxyXG4gICAgICAgICAgICBvblJlc3RvcmVCYWNrdXA9e2hhbmRsZVJlc3RvcmVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQmFja3VwPXtoYW5kbGVDcmVhdGVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XHJcbiAgICAgICAgICAgIGxpY2Vuc2VTdGF0dXM9e2xpY2Vuc2VTdGF0dXN9XHJcbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cclxuICAgICAgICAgICAgb25BcHBseVVwZGF0ZT17aGFuZGxlQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgIHN5c3RlbUJ1c3k9e3N5c3RlbUJ1c3l9XHJcbiAgICAgICAgICAgIHZpZXdNb2RlPVwiYm90XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnc3lzdGVtJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJvdENvbnRyb2xWaWV3XHJcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxyXG4gICAgICAgICAgICBzZXR0aW5ncz17Ym90U2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGJhY2t1cHM9e2Rhc2hib2FyZD8uYmFja3VwcyB8fCBbXX1cclxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZWQ9e2hhbmRsZUJvdFRvZ2dsZX1cclxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxyXG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxyXG4gICAgICAgICAgICBvblJlc3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbigncmVzdGFydCcpfVxyXG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxyXG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxyXG4gICAgICAgICAgICBvblJlc3RvcmVCYWNrdXA9e2hhbmRsZVJlc3RvcmVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQmFja3VwPXtoYW5kbGVDcmVhdGVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XHJcbiAgICAgICAgICAgIGxpY2Vuc2VTdGF0dXM9e2xpY2Vuc2VTdGF0dXN9XHJcbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cclxuICAgICAgICAgICAgb25BcHBseVVwZGF0ZT17aGFuZGxlQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgIHN5c3RlbUJ1c3k9e3N5c3RlbUJ1c3l9XHJcbiAgICAgICAgICAgIHZpZXdNb2RlPVwic3lzdGVtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJvdENvbnRyb2xWaWV3XHJcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxyXG4gICAgICAgICAgICBzZXR0aW5ncz17Ym90U2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGJhY2t1cHM9e2Rhc2hib2FyZD8uYmFja3VwcyB8fCBbXX1cclxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZWQ9e2hhbmRsZUJvdFRvZ2dsZX1cclxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxyXG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxyXG4gICAgICAgICAgICBvblJlc3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbigncmVzdGFydCcpfVxyXG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxyXG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxyXG4gICAgICAgICAgICBvblJlc3RvcmVCYWNrdXA9e2hhbmRsZVJlc3RvcmVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQmFja3VwPXtoYW5kbGVDcmVhdGVCYWNrdXB9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XHJcbiAgICAgICAgICAgIGxpY2Vuc2VTdGF0dXM9e2xpY2Vuc2VTdGF0dXN9XHJcbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cclxuICAgICAgICAgICAgb25BcHBseVVwZGF0ZT17aGFuZGxlQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgIHN5c3RlbUJ1c3k9e3N5c3RlbUJ1c3l9XHJcbiAgICAgICAgICAgIHZpZXdNb2RlPVwiYm90XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZmF0YWxFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgYmctc2xhdGUtOTUwIHAtNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC81MCBiZy1zbGF0ZS05MDAvODAgcC02IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwXCI+0JrRgNC40YLQuNGH0LXRgdC60LDRjyDQvtGI0LjQsdC60LAg0LjQvdGC0LXRgNGE0LXQudGB0LA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgINCh0L7QvtCx0YnQtdC90LjQtSDQvdC40LbQtSDQvNC+0LbQvdC+INC/0LXRgNC10YHQu9Cw0YLRjCDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60YMuINCf0L7RgdC70LUg0LjRgdC/0YDQsNCy0LvQtdC90LjRjyDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLQtSDRgdGC0YDQsNC90LjRhtGDLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvODAgcC00IHRleHQtbGVmdCB0ZXh0LXhzIHRleHQtcm9zZS0yMDBcIj5cclxuICAgICAgICAgICAge2ZhdGFsRXJyb3J9XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxNb2JpbGVUYWJzXHJcbiAgICAgICAgICBhY3RpdmVUYWI9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XHJcbiAgICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxyXG4gICAgICAgICAgb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e2xpdmVVcGRhdGVkQXR9XHJcbiAgICAgICAgICBsaXZlU3RhdHVzPXtjb25uZWN0aW9uU3RhdHVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxyXG4gICAgICAgICAgYWN0aXZlVGFiPXthY3RpdmVUYWJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0QWN0aXZlVGFifVxyXG4gICAgICAgICAgb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e2xpdmVVcGRhdGVkQXR9XHJcbiAgICAgICAgICBsaXZlU3RhdHVzPXtjb25uZWN0aW9uU3RhdHVzfVxyXG4gICAgICAgICAgYWN0aXZlRGF0YVRhYmxlPXthY3RpdmVEYXRhVGFibGV9XHJcbiAgICAgICAgICBvblNlbGVjdFRhYmxlPXtoYW5kbGVTaWRlYmFyVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e21haW5DbGFzc05hbWV9PlxyXG4gICAgICAgICAge2dsb2JhbEVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXtnbG9iYWxFcnJvcn0gLz59XHJcbiAgICAgICAgICB7cmVuZGVyQWN0aXZlKCl9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFByb2ZpbGVNb2RhbCBzdGF0ZT17cHJvZmlsZU1vZGFsfSBvbkNsb3NlPXsoKSA9PiBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgbG9hZGluZzogZmFsc2UgfSl9IC8+XHJcbiAgICAgIDxBcHBvaW50bWVudE1vZGFsXHJcbiAgICAgICAgb3Blbj17YXBwb2ludG1lbnRNb2RhbC5vcGVufVxyXG4gICAgICAgIGFwcG9pbnRtZW50PXthcHBvaW50bWVudE1vZGFsLmRhdGF9XHJcbiAgICAgICAgb3B0aW9ucz17YXBwb2ludG1lbnRNb2RhbC5vcHRpb25zIHx8IG9wdGlvbnNDYWNoZSB8fCB7fX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRBcHBvaW50bWVudE1vZGFsKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgaXNOZXc6IGZhbHNlLCBhbGxvd0RlbGV0ZTogZmFsc2UgfSkpfVxyXG4gICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgIGlzTmV3PXthcHBvaW50bWVudE1vZGFsLmlzTmV3fVxyXG4gICAgICAgIGNsaWVudHM9e2Rhc2hib2FyZD8uY2xpZW50cyB8fCBbXX1cclxuICAgICAgICBjYW5EZWxldGU9e2FwcG9pbnRtZW50TW9kYWwuYWxsb3dEZWxldGV9XHJcbiAgICAgICAgb25EZWxldGU9e2FwcG9pbnRtZW50TW9kYWwuYWxsb3dEZWxldGUgPyBoYW5kbGVEZWxldGVBcHBvaW50bWVudCA6IG51bGx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb25maXJtRGlhbG9nIHsuLi5jb25maXJtRGlhbG9nfSBvblJlc3VsdD17aGFuZGxlQ29uZmlybVJlc3VsdH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5sZXQgcmVhY3RBcHBSb290ID0gbnVsbDtcclxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICB0cnkge1xyXG4gICAgaWYgKCFyb290RWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0L3QsNC50LTQtdC9INC60L7QvdGC0LXQudC90LXRgCAjcm9vdCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZWFjdEFwcFJvb3QpIHtcclxuICAgICAgcmVhY3RBcHBSb290ID1cclxuICAgICAgICB0eXBlb2YgY3JlYXRlUm9vdCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyBjcmVhdGVSb290KHJvb3RFbGVtZW50KVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgcmVuZGVyOiAobm9kZSkgPT4gUmVhY3RET00ucmVuZGVyKG5vZGUsIHJvb3RFbGVtZW50KSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlYWN0QXBwUm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhdGFsIHJlbmRlciBlcnJvcjonLCBlcnJvcik7XHJcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcclxuICAgICAgcm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgZ2FwOjE2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjA2MTc7XHJcbiAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6NDgwcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0OCwxMTMsMTEzLDAuNCk7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuODUpO2JvcmRlci1yYWRpdXM6MTZweDtwYWRkaW5nOjI0cHg7XCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZWNhY2E7bWFyZ2luLWJvdHRvbToxMnB4O1wiPlxyXG4gICAgICAgICAgICAgINCe0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQuNC90YLQtdGA0YTQtdC50YHQsFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Y29sb3I6I2NiZDVmNTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcIj5cclxuICAgICAgICAgICAgICAke2Vycm9yPy5tZXNzYWdlIHx8ICfQodC80L7RgtGA0LjRgtC1INC60L7QvdGB0L7Qu9GMINCx0YDQsNGD0LfQtdGA0LAgKEYxMiknfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjNGI1NTYzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjk5OXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjhweCAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIFwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcIj5cclxuICAgICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnJlbmRlckFwcCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFD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