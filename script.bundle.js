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
    _ref0$label = _ref0.label,
    label = _ref0$label === void 0 ? 'LIVE' : _ref0$label;
  var tickingNow = useNowTick(1000);
  if (!timestamp) return null;
  var timeLabel = formatLiveTimestamp(timestamp, tickingNow);
  return /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400"
  }), label, timeLabel && /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-100/80 normal-case tracking-normal"
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
  }, UI_TEXT.logout), liveUpdatedAt && /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(LiveBadge, {
    timestamp: liveUpdatedAt
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
    liveUpdatedAt = _ref19.liveUpdatedAt;
  var username = (session === null || session === void 0 ? void 0 : session.displayName) || (session === null || session === void 0 ? void 0 : session.username) || '-';
  var handleSelect = function handleSelect(tabId) {
    return onChange === null || onChange === void 0 ? void 0 : onChange(tabId);
  };
  var renderLiveIndicator = function renderLiveIndicator() {
    return liveUpdatedAt ? /*#__PURE__*/React.createElement(LiveBadge, {
      timestamp: liveUpdatedAt
    }) : /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500"
    }, UI_TEXT.liveFallback);
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
      className: "text-slate-400"
    }, "?"));
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
      className: "text-xs text-indigo-300"
    }, "?"));
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
  var showColumnMenu = columns.length > 0 && tableId !== 'Users';
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
  }, "\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0434\u043D\u044F\u043C") : null;
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
    className: "w-full rounded-xl border border-slate-700 bg-slate-900 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
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
    className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
  }, controlOrder.map(function (control) {
    return control.node && /*#__PURE__*/React.createElement(Fragment, {
      key: control.key
    }, control.node);
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
      className: "flex flex-wrap justify-end gap-3"
    }, !isNew && canDelete && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete === null || onDelete === void 0 ? void 0 : onDelete(draft);
      },
      className: "rounded-lg border border-rose-600 px-4 py-2 text-sm text-rose-200 hover:bg-rose-500/10"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-white"
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), !isNew && /*#__PURE__*/React.createElement("button", {
      onClick: handleMarkCompleted,
      className: "rounded-lg border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/10"
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("button", {
      onClick: handleSubmit,
      className: "rounded-lg bg-emerald-600 px-4 py-2 text-white"
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
  var handleLogout = useCallback(function () {
    localStorage.removeItem('barber-session');
    setSession(null);
    setDashboard(null);
    setGlobalError('');
    setRealtimeSnapshot(null);
  }, []);
  var apiRequest = useCallback(/*#__PURE__*/function () {
    var _ref65 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(endpoint) {
      var _options$headers;
      var options,
        headers,
        response,
        message,
        _args1 = arguments;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            options = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : {};
            if (session !== null && session !== void 0 && session.token) {
              _context1.n = 1;
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
            _context1.n = 2;
            return fetch("".concat(API_BASE_URL).concat(endpoint), _objectSpread(_objectSpread({}, options), {}, {
              headers: headers
            }));
          case 2:
            response = _context1.v;
            if (!(response.status === 401 || response.status === 403)) {
              _context1.n = 3;
              break;
            }
            handleLogout();
            throw new Error('Сессия истекла');
          case 3:
            if (response.ok) {
              _context1.n = 5;
              break;
            }
            _context1.n = 4;
            return response.text();
          case 4:
            message = _context1.v;
            throw new Error(message || 'Ошибка запроса');
          case 5:
            if (!(response.status === 204)) {
              _context1.n = 6;
              break;
            }
            return _context1.a(2, null);
          case 6:
            return _context1.a(2, response.json());
        }
      }, _callee1);
    }));
    return function (_x8) {
      return _ref65.apply(this, arguments);
    };
  }(), [session === null || session === void 0 ? void 0 : session.token, handleLogout]);
  var fetchAll = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    var _overview$bot, overview, withFallback, _yield$Promise$all, _yield$Promise$all2, servicesFull, barbersFull, botState, botMessagesPayload, license, update, options, normalizedOptions, _t9;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          if (session !== null && session !== void 0 && session.token) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2);
        case 1:
          setLoading(true);
          setGlobalError('');
          _context10.p = 2;
          _context10.n = 3;
          return apiRequest('/dashboard/overview');
        case 3:
          overview = _context10.v;
          setDashboard(overview);
          withFallback = function withFallback(request, fallback, label) {
            return request["catch"](function (error) {
              console.warn("".concat(label, " fetch skipped:"), (error === null || error === void 0 ? void 0 : error.message) || error);
              return fallback;
            });
          };
          _context10.n = 4;
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
          _yield$Promise$all = _context10.v;
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
          _context10.n = 6;
          break;
        case 5:
          _context10.p = 5;
          _t9 = _context10.v;
          console.error(_t9);
          setGlobalError(_t9.message || 'Не удалось загрузить данные');
        case 6:
          _context10.p = 6;
          setLoading(false);
          return _context10.f(6);
        case 7:
          return _context10.a(2);
      }
    }, _callee10, null, [[2, 5, 6, 7]]);
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
    eventSource.onerror = function () {};
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
    var _ref67 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(username, password) {
      var normalizedUsername, response, data, sessionPayload, _t0;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            setAuthError('');
            normalizedUsername = resolveLogin(username);
            if (normalizedUsername) {
              _context11.n = 1;
              break;
            }
            setAuthError('Выберите барбера из списка');
            return _context11.a(2);
          case 1:
            _context11.p = 1;
            _context11.n = 2;
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
            response = _context11.v;
            _context11.n = 3;
            return response.json();
          case 3:
            data = _context11.v;
            if (!(!response.ok || !data.success)) {
              _context11.n = 4;
              break;
            }
            setAuthError(data.message || 'Неверный логин или пароль');
            return _context11.a(2);
          case 4:
            sessionPayload = buildSessionPayload(_objectSpread(_objectSpread({}, data), {}, {
              username: normalizedUsername
            }));
            localStorage.setItem('barber-session', JSON.stringify(sessionPayload));
            setSession(sessionPayload);
            _context11.n = 6;
            break;
          case 5:
            _context11.p = 5;
            _t0 = _context11.v;
            setAuthError('Сервер недоступен');
          case 6:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 5]]);
    }));
    return function handleLogin(_x9, _x0) {
      return _ref67.apply(this, arguments);
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
      prices: Object.fromEntries(Object.entries(service.prices || {}).map(function (_ref68) {
        var _ref69 = _slicedToArray(_ref68, 2),
          key = _ref69[0],
          value = _ref69[1];
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
    var _ref70 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(barber) {
      var response, updatedBarber, _t1;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            _context12.p = 1;
            _context12.n = 2;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'PUT',
              body: JSON.stringify(buildBarberPayload(barber))
            });
          case 2:
            response = _context12.v;
            updatedBarber = response || barber;
            setBarbers(function (prev) {
              return prev.map(function (item) {
                return item.id === updatedBarber.id ? _objectSpread(_objectSpread({}, item), updatedBarber) : item;
              });
            });
            _context12.n = 4;
            break;
          case 3:
            _context12.p = 3;
            _t1 = _context12.v;
            setGlobalError(_t1.message);
          case 4:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 3]]);
    }));
    return function handleSaveBarber(_x1) {
      return _ref70.apply(this, arguments);
    };
  }();
  var handleDeleteBarber = /*#__PURE__*/function () {
    var _ref71 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(barber) {
      var confirmed, _t10;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            _context13.n = 2;
            return requestConfirm({
              title: 'Удалить барбера?',
              message: "\u0411\u0430\u0440\u0431\u0435\u0440 \xAB".concat(barber.name || 'Без имени', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context13.v;
            if (confirmed) {
              _context13.n = 3;
              break;
            }
            return _context13.a(2);
          case 3:
            _context13.p = 3;
            _context13.n = 4;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context13.n = 6;
            break;
          case 5:
            _context13.p = 5;
            _t10 = _context13.v;
            setGlobalError(_t10.message || 'Не удалось удалить барбера');
          case 6:
            return _context13.a(2);
        }
      }, _callee13, null, [[3, 5]]);
    }));
    return function handleDeleteBarber(_x10) {
      return _ref71.apply(this, arguments);
    };
  }();
  var handleAddBarber = /*#__PURE__*/function () {
    var _ref72 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(payload) {
      var newBarberPayload, id, body, _t11;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (!(!payload.name || !payload.password)) {
              _context14.n = 1;
              break;
            }
            setGlobalError('Заполните имя, логин и пароль барбера');
            return _context14.a(2);
          case 1:
            _context14.p = 1;
            newBarberPayload = buildBarberPayload(_objectSpread(_objectSpread({}, payload), {}, {
              id: undefined
            }), barbers.length);
            id = newBarberPayload.id, body = _objectWithoutProperties(newBarberPayload, _excluded);
            _context14.n = 2;
            return apiRequest('/Barbers', {
              method: 'POST',
              body: JSON.stringify(body)
            });
          case 2:
            fetchAll();
            _context14.n = 4;
            break;
          case 3:
            _context14.p = 3;
            _t11 = _context14.v;
            setGlobalError(_t11.message || 'Не удалось добавить барбера');
          case 4:
            return _context14.a(2);
        }
      }, _callee14, null, [[1, 3]]);
    }));
    return function handleAddBarber(_x11) {
      return _ref72.apply(this, arguments);
    };
  }();
  var handleSaveService = useCallback(/*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(service) {
      var _t12;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            _context15.p = 1;
            _context15.n = 2;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'PUT',
              body: JSON.stringify(normalizeServicePayload(service))
            });
          case 2:
            _context15.n = 4;
            break;
          case 3:
            _context15.p = 3;
            _t12 = _context15.v;
            setGlobalError(_t12.message || 'Не удалось сохранить услугу');
          case 4:
            return _context15.a(2);
        }
      }, _callee15, null, [[1, 3]]);
    }));
    return function (_x12) {
      return _ref73.apply(this, arguments);
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
    var _ref74 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(service) {
      var confirmed, _t13;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            _context16.n = 2;
            return requestConfirm({
              title: 'Удалить услугу?',
              message: "\u0423\u0441\u043B\u0443\u0433\u0430 \xAB".concat(service.name || 'Без названия', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context16.v;
            if (confirmed) {
              _context16.n = 3;
              break;
            }
            return _context16.a(2);
          case 3:
            _context16.p = 3;
            _context16.n = 4;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context16.n = 6;
            break;
          case 5:
            _context16.p = 5;
            _t13 = _context16.v;
            setGlobalError(_t13.message || 'Не удалось удалить услугу');
          case 6:
            return _context16.a(2);
        }
      }, _callee16, null, [[3, 5]]);
    }));
    return function handleDeleteService(_x13) {
      return _ref74.apply(this, arguments);
    };
  }();
  var handleAddService = /*#__PURE__*/function () {
    var _ref75 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(payload) {
      var _t14;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (payload.name) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            _context17.p = 1;
            _context17.n = 2;
            return apiRequest('/services/full', {
              method: 'POST',
              body: JSON.stringify(normalizeServicePayload(payload))
            });
          case 2:
            fetchAll();
            _context17.n = 4;
            break;
          case 3:
            _context17.p = 3;
            _t14 = _context17.v;
            setGlobalError(_t14.message || 'Не удалось добавить услугу');
          case 4:
            return _context17.a(2);
        }
      }, _callee17, null, [[1, 3]]);
    }));
    return function handleAddService(_x14) {
      return _ref75.apply(this, arguments);
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
    var _ref76 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(enabled) {
      var _t15;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            _context18.p = 0;
            _context18.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                isBotEnabled: enabled
              })
            });
          case 1:
            fetchAll();
            _context18.n = 3;
            break;
          case 2:
            _context18.p = 2;
            _t15 = _context18.v;
            setGlobalError(_t15.message || 'Не удалось обновить настройки бота');
          case 3:
            return _context18.a(2);
        }
      }, _callee18, null, [[0, 2]]);
    }));
    return function handleBotToggle(_x15) {
      return _ref76.apply(this, arguments);
    };
  }();
  var handleBotAction = /*#__PURE__*/function () {
    var _ref77 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(action) {
      var _t16;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            _context19.p = 0;
            _context19.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                action: action
              })
            });
          case 1:
            fetchAll();
            _context19.n = 3;
            break;
          case 2:
            _context19.p = 2;
            _t16 = _context19.v;
            setGlobalError(_t16.message || 'Не удалось выполнить действие');
          case 3:
            return _context19.a(2);
        }
      }, _callee19, null, [[0, 2]]);
    }));
    return function handleBotAction(_x16) {
      return _ref77.apply(this, arguments);
    };
  }();
  var handleSaveSettings = /*#__PURE__*/function () {
    var _ref78 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(payload) {
      var _t17;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            if (botSettings !== null && botSettings !== void 0 && botSettings.id) {
              _context20.n = 1;
              break;
            }
            return _context20.a(2);
          case 1:
            _context20.p = 1;
            _context20.n = 2;
            return apiRequest("/BotSettings/".concat(encodeURIComponent(botSettings.id)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 2:
            fetchAll();
            _context20.n = 4;
            break;
          case 3:
            _context20.p = 3;
            _t17 = _context20.v;
            setGlobalError(_t17.message || 'Не удалось сохранить настройки');
          case 4:
            return _context20.a(2);
        }
      }, _callee20, null, [[1, 3]]);
    }));
    return function handleSaveSettings(_x17) {
      return _ref78.apply(this, arguments);
    };
  }();
  var handleSaveMessage = /*#__PURE__*/function () {
    var _ref79 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(id, draft, persist) {
      var _t18;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (persist) {
              _context21.n = 1;
              break;
            }
            setBotMessages(function (prev) {
              return prev.map(function (message) {
                return message.id === id ? _objectSpread({}, draft) : message;
              });
            });
            return _context21.a(2);
          case 1:
            _context21.p = 1;
            _context21.n = 2;
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
            _context21.n = 4;
            break;
          case 3:
            _context21.p = 3;
            _t18 = _context21.v;
            setGlobalError(_t18.message || 'Не удалось сохранить сообщение');
          case 4:
            return _context21.a(2);
        }
      }, _callee21, null, [[1, 3]]);
    }));
    return function handleSaveMessage(_x18, _x19, _x20) {
      return _ref79.apply(this, arguments);
    };
  }();
  var handleRestoreBackup = /*#__PURE__*/function () {
    var _ref80 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(filename) {
      var confirmed, _t19;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            if (filename) {
              _context22.n = 1;
              break;
            }
            return _context22.a(2);
          case 1:
            _context22.n = 2;
            return requestConfirm({
              title: 'Восстановить резервную копию?',
              message: "\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C ".concat(filename, ". \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?"),
              confirmLabel: 'Восстановить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context22.v;
            if (confirmed) {
              _context22.n = 3;
              break;
            }
            return _context22.a(2);
          case 3:
            _context22.p = 3;
            _context22.n = 4;
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
            _context22.n = 6;
            break;
          case 5:
            _context22.p = 5;
            _t19 = _context22.v;
            setGlobalError(_t19.message || 'Не удалось восстановить бэкап');
          case 6:
            return _context22.a(2);
        }
      }, _callee22, null, [[3, 5]]);
    }));
    return function handleRestoreBackup(_x21) {
      return _ref80.apply(this, arguments);
    };
  }();
  var handleCreateBackup = /*#__PURE__*/function () {
    var _ref81 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
      var confirmed, _t20;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            _context23.n = 1;
            return requestConfirm({
              title: 'Создать резервную копию?',
              message: 'Будет создан файл резервной копии текущей базы данных.',
              confirmLabel: 'Создать',
              tone: 'success'
            });
          case 1:
            confirmed = _context23.v;
            if (confirmed) {
              _context23.n = 2;
              break;
            }
            return _context23.a(2);
          case 2:
            _context23.p = 2;
            _context23.n = 3;
            return apiRequest('/backups/create', {
              method: 'POST'
            });
          case 3:
            fetchAll();
            _context23.n = 5;
            break;
          case 4:
            _context23.p = 4;
            _t20 = _context23.v;
            setGlobalError(_t20.message || 'Не удалось создать бэкап');
          case 5:
            return _context23.a(2);
        }
      }, _callee23, null, [[2, 4]]);
    }));
    return function handleCreateBackup() {
      return _ref81.apply(this, arguments);
    };
  }();
  var handleDeleteBackup = /*#__PURE__*/function () {
    var _ref82 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(filename) {
      var confirmed, _t21;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            if (filename) {
              _context24.n = 1;
              break;
            }
            return _context24.a(2);
          case 1:
            _context24.n = 2;
            return requestConfirm({
              title: 'Удалить резервную копию?',
              message: "\u0424\u0430\u0439\u043B ".concat(filename, " \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context24.v;
            if (confirmed) {
              _context24.n = 3;
              break;
            }
            return _context24.a(2);
          case 3:
            _context24.p = 3;
            _context24.n = 4;
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
            _context24.n = 6;
            break;
          case 5:
            _context24.p = 5;
            _t21 = _context24.v;
            setGlobalError(_t21.message || 'Не удалось удалить бэкап');
          case 6:
            return _context24.a(2);
        }
      }, _callee24, null, [[3, 5]]);
    }));
    return function handleDeleteBackup(_x22) {
      return _ref82.apply(this, arguments);
    };
  }();
  var fetchClientHistory = useCallback(/*#__PURE__*/function () {
    var _ref83 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(client) {
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.n) {
          case 0:
            if (client !== null && client !== void 0 && client.Name) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2, null);
          case 1:
            return _context25.a(2, apiRequest("/user-profile/".concat(encodeURIComponent(client.Name))));
        }
      }, _callee25);
    }));
    return function (_x23) {
      return _ref83.apply(this, arguments);
    };
  }(), [apiRequest]);
  var openProfile = useCallback(/*#__PURE__*/function () {
    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(name) {
      var payload, _t22;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            if (name) {
              _context26.n = 1;
              break;
            }
            return _context26.a(2);
          case 1:
            setProfileModal({
              open: true,
              data: null,
              loading: true
            });
            _context26.p = 2;
            _context26.n = 3;
            return apiRequest("/user-profile/".concat(encodeURIComponent(name)));
          case 3:
            payload = _context26.v;
            setProfileModal({
              open: true,
              data: payload,
              loading: false
            });
            _context26.n = 5;
            break;
          case 4:
            _context26.p = 4;
            _t22 = _context26.v;
            setProfileModal({
              open: true,
              data: {
                error: _t22.message || 'Не удалось загрузить профиль'
              },
              loading: false
            });
          case 5:
            return _context26.a(2);
        }
      }, _callee26, null, [[2, 4]]);
    }));
    return function (_x24) {
      return _ref84.apply(this, arguments);
    };
  }(), [apiRequest]);
  var ensureOptions = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
    var options, normalized;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          if (!optionsCache) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2, optionsCache);
        case 1:
          _context27.n = 2;
          return apiRequest('/options/appointments?force=1');
        case 2:
          options = _context27.v;
          normalized = _objectSpread(_objectSpread({}, options), {}, {
            statuses: normalizeStatusList(options.statuses || [])
          });
          setOptionsCache(normalized);
          return _context27.a(2, normalized);
      }
    }, _callee27);
  })), [apiRequest, optionsCache]);
  var handleOpenAppointment = useCallback(/*#__PURE__*/function () {
    var _ref86 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(appointment) {
      var optionsConfig,
        options,
        _args28 = arguments;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.n) {
          case 0:
            optionsConfig = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : {};
            _context28.n = 1;
            return ensureOptions();
          case 1:
            options = _context28.v;
            setAppointmentModal({
              open: true,
              data: appointment,
              options: options,
              isNew: false,
              allowDelete: !!optionsConfig.allowDelete
            });
          case 2:
            return _context28.a(2);
        }
      }, _callee28);
    }));
    return function (_x25) {
      return _ref86.apply(this, arguments);
    };
  }(), [ensureOptions]);
  var handleCreateAppointment = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29() {
    var _options$statuses;
    var options, today, defaultStatus, defaultBarber;
    return _regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          _context29.n = 1;
          return ensureOptions();
        case 1:
          options = _context29.v;
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
          return _context29.a(2);
      }
    }, _callee29);
  })), [ensureOptions, session === null || session === void 0 ? void 0 : session.displayName, session === null || session === void 0 ? void 0 : session.username]);
  var handleSaveAppointment = /*#__PURE__*/function () {
    var _ref89 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(_ref88) {
      var id, payload, isNew, _t23;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            id = _ref88.id, payload = _ref88.payload, isNew = _ref88.isNew;
            _context30.p = 1;
            if (!isNew) {
              _context30.n = 3;
              break;
            }
            _context30.n = 2;
            return apiRequest('/Appointments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 2:
            _context30.n = 4;
            break;
          case 3:
            if (!id) {
              _context30.n = 4;
              break;
            }
            _context30.n = 4;
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
            _context30.n = 6;
            break;
          case 5:
            _context30.p = 5;
            _t23 = _context30.v;
            setGlobalError(_t23.message || 'Не удалось сохранить запись');
          case 6:
            return _context30.a(2);
        }
      }, _callee30, null, [[1, 5]]);
    }));
    return function handleSaveAppointment(_x26) {
      return _ref89.apply(this, arguments);
    };
  }();
  var handleDeleteAppointment = /*#__PURE__*/function () {
    var _ref90 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(appointment) {
      var confirmed, _t24;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            if (appointment !== null && appointment !== void 0 && appointment.id) {
              _context31.n = 1;
              break;
            }
            return _context31.a(2);
          case 1:
            _context31.n = 2;
            return requestConfirm({
              title: 'Удалить запись?',
              message: 'Запись будет удалена без возможности восстановления.',
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context31.v;
            if (confirmed) {
              _context31.n = 3;
              break;
            }
            return _context31.a(2);
          case 3:
            _context31.p = 3;
            _context31.n = 4;
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
            _context31.n = 6;
            break;
          case 5:
            _context31.p = 5;
            _t24 = _context31.v;
            setGlobalError(_t24.message || 'Не удалось удалить запись');
          case 6:
            return _context31.a(2);
        }
      }, _callee31, null, [[3, 5]]);
    }));
    return function handleDeleteAppointment(_x27) {
      return _ref90.apply(this, arguments);
    };
  }();
  var handleRefreshUpdate = /*#__PURE__*/function () {
    var _ref91 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32() {
      var info, _t25;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            setSystemBusy(true);
            _context32.p = 1;
            _context32.n = 2;
            return apiRequest('/system/update?force=1');
          case 2:
            info = _context32.v;
            setUpdateInfo(info);
            _context32.n = 4;
            break;
          case 3:
            _context32.p = 3;
            _t25 = _context32.v;
            setGlobalError(_t25.message || 'Не удалось проверить обновления');
          case 4:
            _context32.p = 4;
            setSystemBusy(false);
            return _context32.f(4);
          case 5:
            return _context32.a(2);
        }
      }, _callee32, null, [[1, 3, 4, 5]]);
    }));
    return function handleRefreshUpdate() {
      return _ref91.apply(this, arguments);
    };
  }();
  var handleApplyUpdate = /*#__PURE__*/function () {
    var _ref92 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33() {
      var confirmed, result, _t26;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            _context33.n = 1;
            return requestConfirm({
              title: 'Обновить систему?',
              message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
              confirmLabel: 'Обновить',
              tone: 'danger'
            });
          case 1:
            confirmed = _context33.v;
            if (confirmed) {
              _context33.n = 2;
              break;
            }
            return _context33.a(2);
          case 2:
            setSystemBusy(true);
            _context33.p = 3;
            _context33.n = 4;
            return apiRequest('/system/update', {
              method: 'POST'
            });
          case 4:
            result = _context33.v;
            setUpdateInfo(result.info || result);
            fetchAll();
            _context33.n = 6;
            break;
          case 5:
            _context33.p = 5;
            _t26 = _context33.v;
            setGlobalError(_t26.message || 'Не удалось применить обновление');
          case 6:
            _context33.p = 6;
            setSystemBusy(false);
            return _context33.f(6);
          case 7:
            return _context33.a(2);
        }
      }, _callee33, null, [[3, 5, 6, 7]]);
    }));
    return function handleApplyUpdate() {
      return _ref92.apply(this, arguments);
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
    liveUpdatedAt: liveUpdatedAt
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    session: session,
    activeTab: activeTab,
    onChange: setActiveTab,
    onLogout: handleLogout,
    liveUpdatedAt: liveUpdatedAt,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX1JlYWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsIkZyYWdtZW50IiwiX1JlYWN0RE9NIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJjcmVhdGVSb290IiwicmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25jYXQiLCJERUZBVUxUX0FQSV9CQVNFX1VSTCIsIkFQSV9CQVNFX1VSTCIsIl9fQkFSQkVSX0FQSV9CQVNFX18iLCJWSUVXX1RBQlMiLCJpZCIsImxhYmVsIiwiVEFCTEVfT1JERVIiLCJWSVNJQkxFX1RBQkxFX09SREVSIiwidGFibGUiLCJEQVRBX1RBQkxFUyIsIlRBQkxFX0NPTkZJRyIsIkFwcG9pbnRtZW50cyIsIm1vZGUiLCJjYW5DcmVhdGUiLCJzdXBwb3J0c0JhcmJlckZpbHRlciIsInN1cHBvcnRzU3RhdHVzRmlsdGVyIiwiZGVmYXVsdFNvcnQiLCJrZXkiLCJkaXJlY3Rpb24iLCJTY2hlZHVsZXMiLCJVc2VycyIsIkJhcmJlcnMiLCJTZXJ2aWNlcyIsIkRBVEFfU0hPUlRDVVRTIiwibWFwIiwidGFibGVJZCIsIl9UQUJMRV9DT05GSUckdGFibGVJZCIsIlRBQkxFX0NPTFVNTlMiLCJlZGl0YWJsZSIsInR5cGUiLCJpc1Byb2ZpbGVMaW5rIiwibWluV2lkdGgiLCJvcHRpb25zS2V5Iiwibm9XcmFwIiwiYWxpZ24iLCJSQVRJTkdfTUlOIiwiUkFUSU5HX01BWCIsIlJBVElOR19TVEVQIiwiYXZhdGFyT3B0aW9uc0NhY2hlIiwiWUVBUl9JTl9NUyIsIkRBWV9JTl9NUyIsImJ1aWxkTmV3QmFyYmVyU3RhdGUiLCJwYXNzd29yZCIsInJhdGluZyIsImNvbG9yIiwiYXZhdGFyVXJsIiwiZGVzY3JpcHRpb24iLCJwaG9uZSIsInRlbGVncmFtSWQiLCJpc0FjdGl2ZSIsImJ1aWxkTmV3U2VydmljZVN0YXRlIiwiZHVyYXRpb24iLCJwcmljZXMiLCJBQ1RJVkVfQkFSQkVSX0xBQkVMIiwiZnJvbUNoYXJDb2RlIiwiSElEREVOX0JBUkJFUl9MQUJFTCIsIkFDVElWRV9TRVJWSUNFX0xBQkVMIiwiSElEREVOX1NFUlZJQ0VfTEFCRUwiLCJidWlsZFZpc2l0SGlzdG9yeSIsImFwcG9pbnRtZW50cyIsInVuZGVmaW5lZCIsImN1dG9mZiIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJhcHB0Iiwic3RhcnREYXRlIiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJUaW1lIiwic3RhcnREYXRlVGltZSIsImdldFRpbWUiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwiU3RhdHVzIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNvcnQiLCJiIiwiaW5kZXgiLCJvcmRlck51bWJlciIsImRhdGVMYWJlbCIsImZvcm1hdERhdGVUaW1lIiwiZGVmYXVsdENvbmZpcm1TdGF0ZSIsIm9wZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtTGFiZWwiLCJjYW5jZWxMYWJlbCIsInRvbmUiLCJnZXRSZWNvcmRJZCIsInJlY29yZCIsIklkIiwiSUQiLCJyZWNvcmRJZCIsIklEX1JlY29yZCIsImNsYXNzTmFtZXMiLCJfbGVuIiwiY2xhc3NlcyIsIl9rZXkiLCJCb29sZWFuIiwiam9pbiIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVyIiwicHJldiIsIm5leHRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VOb3dUaWNrIiwiaW50ZXJ2YWxNcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0Tm93IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEF2YXRhck9wdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwicGF5bG9hZCIsImltYWdlcyIsIl9jb250ZXh0IiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIm5vcm1hbGl6ZUltYWdlUGF0aCIsIlNldCIsIm5vcm1hbGl6ZVRleHQiLCJpc1ZhbGlkRGF0ZSIsImlzTmFOIiwicmVzb2x2ZUFzc2V0VXJsIiwibm9ybWFsaXplZCIsInRyaW0iLCJzdGFydHNXaXRoIiwic2FuaXRpemVkIiwicmVwbGFjZSIsInJlc29sdmVkIiwibnVtYmVyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdEN1cnJlbmN5IiwibnVtZXJpYyIsImlzRmluaXRlIiwiZm9ybWF0IiwicGx1cmFsaXplIiwiY291bnQiLCJfcmVmMiIsIl9yZWYzIiwib25lIiwiZmV3IiwibWFueSIsIm1vZDEwIiwibW9kMTAwIiwiY2Fub25pY2FsaXplTmFtZSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiYmFyYmVySWQiLCJwaWNrQmFyYmVyRm9yVXNlciIsInVzZXJTZXNzaW9uIiwiYXZhaWxhYmxlQmFyYmVycyIsImZhbGxiYWNrIiwiY2FuZGlkYXRlcyIsInByZWZlcnJlZE5hbWUiLCJjYW5kaWRhdGUiLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZWRPcHRpb25zIiwiYmFyYmVyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIl9sb29wIiwibWF0Y2hJbmRleCIsImZpbmRJbmRleCIsIm9wdGlvbiIsIl9yZXQiLCJzIiwiZXJyIiwiZm9ybWF0RGF0ZSIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0VGltZSIsInNhZmVWYWx1ZSIsImluY2x1ZGVzIiwic3BsaXQiLCJmb3JtYXRQaG9uZUlucHV0IiwiZGlnaXRzIiwiZm9ybWF0VGVsZWdyYW1IYW5kbGUiLCJoYW5kbGUiLCJidWlsZFRlbGVncmFtTGluayIsImRhdGUiLCJ0aW1lIiwiZGF0ZVBhcnQiLCJ0aW1lUGFydCIsImJhY2t1cERhdGVGb3JtYXR0ZXIiLCJob3VyIiwibWludXRlIiwicGFyc2VCYWNrdXBUaW1lc3RhbXAiLCJmaWxlbmFtZSIsIm1hdGNoIiwiX21hdGNoIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImlzb0NhbmRpZGF0ZSIsInBhcnNlZCIsImZvcm1hdEJhY2t1cExhYmVsIiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwicGFkU3RhcnQiLCJ0b0xvY2FsZVN0cmluZyIsIlNUQVRVU19UUkFOU0xBVElPTlMiLCJhY3RpdmUiLCJjb25maXJtIiwiY29uZmlybWVkIiwiY29tcGxldGUiLCJmaW5pc2hlZCIsImNhbmNlbCIsImNhbmNlbGVkIiwiY2FuY2VsbGVkIiwibm9zaG93IiwibWlzc2VkIiwicGVuZGluZyIsIndhaXQiLCJ3YWl0aW5nIiwicHJvY2Vzc2luZyIsIlNUQVRVU19CQURHRV9NQVAiLCLQkNC60YLQuNCy0L3QsNGPIiwi0J/QvtC00YLQstC10YDQttC00LXQvdCwIiwi0JfQsNCy0LXRgNGI0LXQvdCwIiwi0J7RgtC80LXQvdC10L3QsCIsImdldFN0YXR1c0JhZGdlQ2xhc3NlcyIsInN0YXR1cyIsIm5vcm1hbGl6ZVN0YXR1c1ZhbHVlIiwiSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyIsIkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQ09NUExFVEVEX1NUQVRVU19UT0tFTlMiLCJ0cmFuc2xhdGVkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVTdGF0dXNMaXN0Iiwic3RhdHVzZXMiLCJzZWVuIiwiaGFzIiwiYWRkIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJwYXJzZVRpbWVSYW5nZVZhbHVlIiwic2FmZSIsInN0YXJ0IiwiZW5kIiwiX3NhZmUkc3BsaXQkbWFwIiwicGFydCIsIl9zYWZlJHNwbGl0JG1hcDIiLCJyYXdTdGFydCIsIl9zYWZlJHNwbGl0JG1hcDIkIiwicmF3RW5kIiwicGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImJ1aWxkVGltZVJhbmdlVmFsdWUiLCJzYWZlU3RhcnQiLCJzYWZlRW5kIiwiX3JlZjQiLCJfcmVmNSIsInRvIiwiZXh0cmFjdFRpbWVTdGFydCIsImRhdGVWYWx1ZSIsInRpbWVWYWx1ZSIsImZhbGxiYWNrSXNvIiwicGFyc2VkRmFsbGJhY2siLCJnZXRBcHBvaW50bWVudEVuZERhdGUiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImVuZFRva2VuIiwiYmFzZURhdGVQYXJ0IiwidG9JU09TdHJpbmciLCJyZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUiLCJhcHBvaW50bWVudCIsInJlc29sdmVBcHBvaW50bWVudEVuZERhdGUiLCJlbmREYXRlIiwic2hvdWxkRGlzcGxheUFwcG9pbnRtZW50IiwiaXNBcHBvaW50bWVudE9uZ29pbmciLCJzdGFydFRzIiwiZW5kVHMiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjYiLCJfcmVmNiRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY3IiwiVmlzaXRIaXN0b3J5TGlzdCIsIl9yZWY4IiwiX3JlZjgkdmlzaXRzIiwidmlzaXRzIiwiX3JlZjgkbG9hZGluZyIsImxvYWRpbmciLCJfcmVmOCRlcnJvciIsIl9yZWY4JGVtcHR5TWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9yZWY4JG1heEhlaWdodENsYXNzIiwibWF4SGVpZ2h0Q2xhc3MiLCJfcmVmOCRzaG93U3VtbWFyeSIsInNob3dTdW1tYXJ5IiwidmlzaXQiLCJCYXJiZXIiLCJTZWN0aW9uQ2FyZCIsIl9yZWY5IiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiTGl2ZUJhZGdlIiwiX3JlZjAiLCJ0aW1lc3RhbXAiLCJfcmVmMCRsYWJlbCIsInRpY2tpbmdOb3ciLCJ0aW1lTGFiZWwiLCJJY29uVHJhc2giLCJfcmVmMSIsIl9yZWYxJGNsYXNzTmFtZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwiSWNvbkRhc2hib2FyZCIsIl9yZWYxMCIsIl9yZWYxMCRjbGFzc05hbWUiLCJJY29uRGF0YSIsIl9yZWYxMSIsIl9yZWYxMSRjbGFzc05hbWUiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJyeCIsIkljb25Cb3QiLCJfcmVmMTIiLCJfcmVmMTIkY2xhc3NOYW1lIiwiY3giLCJjeSIsIkljb25TeXN0ZW0iLCJfcmVmMTMiLCJfcmVmMTMkY2xhc3NOYW1lIiwiSWNvbkRvdHMiLCJfcmVmMTQiLCJfcmVmMTQkY2xhc3NOYW1lIiwiVklFV19UQUJfSUNPTlMiLCJkYXNoYm9hcmQiLCJ0YWJsZXMiLCJib3QiLCJzeXN0ZW0iLCJVSV9URVhUIiwiZnJlZXplIiwiYWNjb3VudFRpdGxlIiwibG9nb3V0IiwibmV3QXBwb2ludG1lbnRDdGEiLCJsaXZlRmFsbGJhY2siLCJNb2RhbCIsIl9yZWYxNSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb290ZXIiLCJfcmVmMTUkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiQ29uZmlybURpYWxvZyIsIl9yZWYxNiIsIl9yZWYxNiRjb25maXJtTGFiZWwiLCJfcmVmMTYkY2FuY2VsTGFiZWwiLCJfcmVmMTYkdG9uZSIsIm9uUmVzdWx0IiwiY29uZmlybVRvbmVDbGFzcyIsIlN0YXRDYXJkIiwiX3JlZjE3IiwiX3JlZjE3JGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMTgiLCJzZXNzaW9uIiwiYWN0aXZlVGFiIiwib25DaGFuZ2UiLCJvbkxvZ291dCIsImxpdmVVcGRhdGVkQXQiLCJfcmVmMTgkYWN0aXZlRGF0YVRhYmwiLCJhY3RpdmVEYXRhVGFibGUiLCJvblNlbGVjdFRhYmxlIiwidGFiIiwic2hvcnRjdXQiLCJpc1Nob3J0Y3V0QWN0aXZlIiwiZGlzYWJsZWQiLCJNb2JpbGVUYWJzIiwiX3JlZjE5IiwiaGFuZGxlU2VsZWN0IiwidGFiSWQiLCJyZW5kZXJMaXZlSW5kaWNhdG9yIiwiSWNvbkNvbXBvbmVudCIsIkRhc2hib2FyZFZpZXciLCJfcmVmMjAiLCJfZGF0YSRhcHBvaW50bWVudHMiLCJfc3RhdHMkdG90YWxVc2VycyIsIl9zdGF0cyRhY3RpdmVBcHBvaW50bSIsIl9zdGF0cyRjb25maXJtZWRZZWFyIiwiX3N0YXRzJHRvZGF5c0FwcG9pbnRtIiwiZGF0YSIsIm9uT3BlbkFwcG9pbnRtZW50Iiwib25PcGVuUHJvZmlsZSIsIm9uQ3JlYXRlQXBwb2ludG1lbnQiLCJzdGF0cyIsInVwY29taW5nUmF3IiwidXBjb21pbmciLCJ1cGNvbWluZ0xpc3QiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQyIiwibGVmdCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyaWdodCIsImZvcm1hdEdyb3VwTGFiZWwiLCJfdW51c2VkIiwiZ3JvdXBlZFVwY29taW5nIiwiZ3JvdXBzIiwiTWFwIiwiYnVja2V0IiwiZ2V0Iiwic2V0IiwiZW50cmllcyIsIl9yZWYyMSIsIl9yZWYyMiIsIml0ZW1zIiwic29ydFZhbHVlIiwibWluIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dldEFwcG9pbnRtZW50U3RhcnREMyIsInVwY29taW5nQWN0aW9ucyIsInRvdGFsVXNlcnMiLCJhY3RpdmVBcHBvaW50bWVudHMiLCJjb25maXJtZWRZZWFyIiwidG9kYXlzQXBwb2ludG1lbnRzIiwiZ3JvdXAiLCJpblByb2dyZXNzIiwiY2FyZFByb3BzIiwicm9sZSIsInRhYkluZGV4IiwiYWxsb3dEZWxldGUiLCJvbktleURvd24iLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0czIiLCJzdGF0dXNMYWJlbCIsInNlcnZpY2VzTGlzdCIsIl9leHRlbmRzIiwiQ3VzdG9tZXJOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwic2VydmljZSIsIkJhcmJlckF2YXRhclBpY2tlciIsIl9yZWYyMyIsImxvYWRPcHRpb25zIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJhdmF0YXJPcHRpb25zIiwic2V0QXZhdGFyT3B0aW9ucyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2hvd0dhbGxlcnkiLCJzZXRTaG93R2FsbGVyeSIsIm5vcm1hbGl6ZWRWYWx1ZSIsImF2YWlsYWJsZU9wdGlvbnMiLCJpc01vdW50ZWQiLCJsb2FkIiwiX3JlZjI0IiwiX2NhbGxlZTIiLCJsb2FkZXIiLCJhc3NldHNQYXlsb2FkIiwiYXNzZXRzIiwiX3QiLCJfY29udGV4dDIiLCJwcmV2aWV3U3JjIiwic3JjIiwiYWx0IiwicHJlc2V0IiwiaXNTZWxlY3RlZCIsIkRBWV9JTkRFWF9MT09LVVAiLCJmdWxsIiwic2hvcnQiLCJnZXREYXlJbmRleCIsImZvcm1hdFNjaGVkdWxlRGF5U2hvcnQiLCJmYWxsYmFja0RheSIsInNhZmVEYXRlIiwiX3VudXNlZDIiLCJub3JtYWxpemVkRmFsbGJhY2siLCJmb3JtYXRTY2hlZHVsZURhdGVMYWJlbCIsIl91bnVzZWQzIiwiaXNUb2RheURhdGUiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwicGFyc2VTbG90VGltZU1pbnV0ZXMiLCJnZXRTY2hlZHVsZVNvcnRWYWx1ZSIsInNsb3QiLCJXZWVrIiwiYmFzZSIsImRheUluZGV4IiwiRGF5T2ZXZWVrIiwiUmF0aW5nU2xpZGVyIiwiX3JlZjI1IiwiX3JlZjI1JGRlbnNlIiwiZGVuc2UiLCJyYXRpbmdWYWx1ZSIsInRvRml4ZWQiLCJ3cmFwcGVyQ2xhc3MiLCJsYWJlbENsYXNzIiwic3RlcCIsIkJhcmJlcnNWaWV3IiwiX3JlZjI2IiwiX3dvcmtpbmdCYXJiZXIkbmFtZSIsIl93b3JraW5nQmFyYmVyJHBhc3N3byIsIl9yZWYyNiRiYXJiZXJzIiwiYmFyYmVycyIsIl9yZWYyNiRzY2hlZHVsZXMiLCJzY2hlZHVsZXMiLCJsb2FkQXZhdGFyT3B0aW9ucyIsIm9uRmllbGRDaGFuZ2UiLCJvblNhdmUiLCJvbkFkZCIsIm9uRGVsZXRlIiwib25TY2hlZHVsZVVwZGF0ZSIsIl91c2VTdGF0ZTEiLCJ0YXJnZXRJZCIsIl91c2VTdGF0ZTEwIiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJkcmFmdEJhcmJlciIsInNldERyYWZ0QmFyYmVyIiwib3BlbkVkaXRvciIsImNsb3NlRWRpdG9yIiwiaXNDcmVhdGVNb2RlIiwiYWN0aXZlQmFyYmVyIiwiZmluZCIsIndvcmtpbmdCYXJiZXIiLCJ3b3JraW5nQmFyYmVyU2NoZWR1bGUiLCJoYW5kbGVGaWVsZENoYW5nZSIsImZpZWxkIiwiaGFuZGxlU2F2ZSIsImhhbmRsZURlbGV0ZSIsInJlc3VsdCIsInJlbmRlclN0YXR1c0JhZGdlIiwiY2FuU3VibWl0IiwiaGFuZGxlU2NoZWR1bGVQaWNrZXJDaGFuZ2UiLCJfcmVmMjciLCJfY2FsbGVlMyIsInNsb3RJZCIsIl9jb250ZXh0MyIsIl94IiwiX3gyIiwiYXZhdGFyU3JjIiwicGhvbmVMYWJlbCIsInJhdGluZ0xhYmVsIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwiZGF5TGFiZWwiLCJpc1RvZGF5U2xvdCIsIlRpbWVSYW5nZVBpY2tlciIsImJ1dHRvbkNsYXNzTmFtZSIsIlNlcnZpY2VzVmlldyIsIl9yZWYyOCIsIl93b3JraW5nU2VydmljZSRuYW1lMiIsIl93b3JraW5nU2VydmljZSRkdXJhdCIsIl9yZWYyOCRzZXJ2aWNlcyIsInNlcnZpY2VzIiwiX3JlZjI4JGJhcmJlcnMiLCJvblByaWNlQ2hhbmdlIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJkcmFmdFNlcnZpY2UiLCJzZXREcmFmdFNlcnZpY2UiLCJhY3RpdmVTZXJ2aWNlIiwid29ya2luZ1NlcnZpY2UiLCJoYW5kbGVQcmljZUNoYW5nZSIsIl93b3JraW5nU2VydmljZSRuYW1lIiwiaGFuZGxlRGVsZXRlTG9jYWwiLCJzZXJ2aWNlUHJpY2VTdW1tYXJ5IiwiZGV0YWlscyIsInZhbHVlcyIsIl9zZXJ2aWNlJHByaWNlcyIsInByaWNlIiwic3VtbWFyeSIsIl93b3JraW5nU2VydmljZSRwcmljZSIsIl93b3JraW5nU2VydmljZSRwcmljZTIiLCJNdWx0aVNlbGVjdENlbGwiLCJfcmVmMjkiLCJfcmVmMjkkb3B0aW9ucyIsIm9uQ29tbWl0IiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInNldE9wZW4iLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiZHJhZnQiLCJzZXREcmFmdCIsImFuY2hvclJlZiIsIl91c2VTdGF0ZTIxIiwidG9wIiwiX3VzZVN0YXRlMjIiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwidXBkYXRlUG9zaXRpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFuZWxXaWR0aCIsInBhbmVsSGVpZ2h0IiwibmV4dExlZnQiLCJpbm5lcldpZHRoIiwibmV4dFRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwidG9nZ2xlT3B0aW9uIiwic3R5bGUiLCJjaGVja2VkIiwiYm9keSIsIl9yZWYzMCIsIl9yZWYzMCR0aXRsZSIsIl9yZWYzMCRwbGFjZWhvbGRlciIsIl9yZWYzMCRidXR0b25DbGFzc05hbSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiX3VzZVN0YXRlMjYkIiwibm9ybWFsaXplSG91clZhbHVlIiwiaW5wdXRWYWx1ZSIsIl9pbnB1dFZhbHVlJHNwbGl0IiwiX2lucHV0VmFsdWUkc3BsaXQyIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsZWFyIiwiRWRpdGFibGVDZWxsIiwiX3JlZjMxIiwiY29sdW1uIiwib25VcGRhdGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiY29tbWl0Iiwib3B0aW9uTGlzdCIsIm9uQmx1ciIsIkNvbHVtbk1lbnUiLCJfcmVmMzIiLCJjb2x1bW5zIiwiX3JlZjMyJGhpZGRlbkNvbHVtbnMiLCJoaWRkZW5Db2x1bW5zIiwib25Ub2dnbGUiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiTXVsdGlTZWxlY3RDaGVja2JveGVzIiwiX3JlZjMzIiwiX3JlZjMzJG9wdGlvbnMiLCJfcmVmMzMkdmFsdWUiLCJfcmVmMzMkcGxhY2Vob2xkZXIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlbGVjdGVkIiwibm9ybWFsaXplZFF1ZXJ5IiwiZmlsdGVyZWQiLCJ0b2dnbGUiLCJleGlzdHMiLCJDbGllbnRMb29rdXBJbnB1dCIsIl9yZWYzNCIsIl9yZWYzNCRsYWJlbCIsIl9yZWYzNCR2YWx1ZSIsIl9yZWYzNCRjbGllbnRzIiwiY2xpZW50cyIsIm9uU2VsZWN0Q2xpZW50IiwiX3JlZjM0JHBsYWNlaG9sZGVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJjb250YWluZXJSZWYiLCJtYXRjaGVzIiwic2hvcnRsaXN0IiwiY2xpZW50Iiwib25Gb2N1cyIsIm9uTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJTdGF0dXNNZW51IiwiX3JlZjM1IiwiX3JlZjM1JHN0YXR1c2VzIiwiX3JlZjM1JGhpZGRlblN0YXR1c2VzIiwiaGlkZGVuU3RhdHVzZXMiLCJvblJlc2V0IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIlRhYmxlVG9vbGJhciIsIl9yZWYzNiIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VsZWN0ZWRCYXJiZXIiLCJzZXRTZWxlY3RlZEJhcmJlciIsIl9yZWYzNiRiYXJiZXJzIiwiX3JlZjM2JHN0YXR1c2VzIiwiX3JlZjM2JGhpZGRlblN0YXR1c2VzIiwidG9nZ2xlU3RhdHVzIiwicmVzZXRTdGF0dXNlcyIsIl9yZWYzNiRjb2x1bW5zIiwiX3JlZjM2JGhpZGRlbkNvbHVtbnMiLCJ0b2dnbGVDb2x1bW4iLCJvbk9wZW5DcmVhdGUiLCJvblJlZnJlc2giLCJzaG93UGFzdEFwcG9pbnRtZW50cyIsInNldFNob3dQYXN0QXBwb2ludG1lbnRzIiwiX3JlZjM2JHN1cHBvcnRzR3JvdXBpIiwic3VwcG9ydHNHcm91cGluZyIsIl9yZWYzNiRncm91cEJ5RGF0ZSIsImdyb3VwQnlEYXRlIiwic2V0R3JvdXBCeURhdGUiLCJjaGlwQ2xhc3MiLCJhbGxvd01hbnVhbFJlZnJlc2giLCJpbmxpbmVDcmVhdGVGb3JNb2JpbGUiLCJzaG93Q29sdW1uTWVudSIsInN0YXR1c0NvbnRyb2wiLCJjb2x1bW5Db250cm9sIiwicGFzdENvbnRyb2wiLCJncm91cGluZ0NvbnRyb2wiLCJjb250cm9sT3JkZXIiLCJub2RlIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImNvbnRyb2wiLCJidWlsZEFwcG9pbnRtZW50R3JvdXBzIiwicmVjb3JkcyIsInNvcnREaXJlY3Rpb24iLCJidWNrZXRzIiwiY29tcGFyZSIsIl9yZWYzNyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDYiLCJfcmVmMzgiLCJzb3J0ZWRJdGVtcyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDQiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ1IiwicmVmZXJlbmNlIiwiTUlOX1NBRkVfSU5URUdFUiIsInJhbmRvbSIsInJlc29sdmVTb3J0VmFsdWUiLCJyb3ciLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ3IiwidHMiLCJTb3J0SW5kaWNhdG9yIiwiX3JlZjM5IiwiU2NoZWR1bGVzQm9hcmQiLCJfcmVmNDAiLCJfcmVmNDAkcm93cyIsIl9yZWY0MCRjb2x1bW5zIiwidmlzaWJsZUtleXMiLCJlZGl0YWJsZUNvbHVtbnMiLCJncm91cGVkQnlEYXRlIiwiX3JlZjQxIiwiX3JlZjQyIiwic2xvdHMiLCJzb3J0ZWRTbG90cyIsImxvY2FsZUNvbXBhcmUiLCJOYU4iLCJiYWRnZSIsIkFwcG9pbnRtZW50c0xpc3QiLCJfcmVmNDMiLCJfcmVmNDMkZ3JvdXBzIiwib25PcGVuIiwiX3JlZjQzJGNvbHVtbnMiLCJfcmVmNDMkaGlkZGVuQ29sdW1ucyIsInZpc2libGVDb2x1bW5zIiwicmVuZGVyQ29sdW1uVmFsdWUiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0czMiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0czQiLCJEYXRhVGFibGUiLCJfcmVmNDQiLCJzb3J0Q29uZmlnIiwib25Tb3J0IiwiX3JlZjQ0JGdyb3VwQnlEYXRlIiwiaXNBcHBvaW50bWVudHNUYWJsZSIsImNhbkdyb3VwQXBwb2ludG1lbnRzIiwiZ3JvdXBlZFJvd3MiLCJfdmlzaWJsZUNvbHVtbnMkIiwiY2FyZEtleSIsInNvcnRhYmxlIiwiY29sU3BhbiIsIkNsaWVudHNMaXN0IiwiX3JlZjQ1IiwiX21vZGFsU3RhdGUkcmVjb3JkIiwiX3JlZjQ1JGNsaWVudHMiLCJfcmVmNDUkYmFyYmVycyIsImZldGNoSGlzdG9yeSIsIm9uUmVxdWVzdENvbmZpcm0iLCJfdXNlU3RhdGUzOSIsImhpc3RvcnkiLCJfdXNlU3RhdGU0MCIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwiYmFyYmVyT3B0aW9ucyIsIm9wZW5DbGllbnRNb2RhbCIsIl9yZWY0NiIsIl9jYWxsZWU0IiwicHJvZmlsZSIsIl90MiIsIl9jb250ZXh0NCIsIk5hbWUiLCJfeDMiLCJjbG9zZUNsaWVudE1vZGFsIiwiUGhvbmUiLCJUZWxlZ3JhbUlEIiwiX3JlZjQ3IiwiX2NhbGxlZTUiLCJfY29udGV4dDUiLCJza2lwQ29uZmlybSIsImNsaWVudE51bWJlciIsInBob25lRGlzcGxheSIsInRlbGVncmFtSGFuZGxlIiwiQ3JlYXRlUmVjb3JkTW9kYWwiLCJfcmVmNDgiLCJ0YWJsZU5hbWUiLCJfcmVmNDgkY2xpZW50cyIsIl9yZWY0OCRoaWRkZW5GaWVsZHMiLCJoaWRkZW5GaWVsZHMiLCJpbml0aWFsU3RhdGUiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiaXNBcHBvaW50bWVudHNDcmVhdGUiLCJoYW5kbGVTdWJtaXQiLCJfcmVmNDkiLCJfcmVmNTAiLCJoYW5kbGVDbGllbnRBdXRvRmlsbCIsInByZWZlcnJlZEJhcmJlciIsIlVzZXJJRCIsInNlbGVjdGVkVmFsdWVzIiwiUHJvZmlsZU1vZGFsIiwiX3JlZjUxIiwiX3N0YXRlJGRhdGEiLCJfc3RhdGUkZGF0YTIiLCJfc3RhdGUkZGF0YTMiLCJfc3RhdGUkZGF0YTQiLCJzdGF0ZSIsInZpc2l0SGlzdG9yeSIsInVzZXIiLCJwaG9uZUhyZWYiLCJ0ZWxlZ3JhbUhyZWYiLCJocmVmIiwicmVsIiwiQmFja3Vwc1BhbmVsIiwiX3JlZjUyIiwiX3JlZjUyJGJhY2t1cHMiLCJiYWNrdXBzIiwib25SZXN0b3JlIiwib25DcmVhdGUiLCJiYWNrdXAiLCJBcHBvaW50bWVudE1vZGFsIiwiX3JlZjUzIiwiX3JlZjUzJG9wdGlvbnMiLCJfcmVmNTMkY2FuRGVsZXRlIiwiY2FuRGVsZXRlIiwiX3JlZjUzJGlzTmV3IiwiaXNOZXciLCJfcmVmNTMkY2xpZW50cyIsImJ1aWxkRHJhZnQiLCJ1c2VySWQiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwic2VydmljZXNTZWxlY3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJzdWJtaXREcmFmdCIsIm5leHREcmFmdCIsImhhbmRsZU1hcmtDb21wbGV0ZWQiLCJUYWJsZXNXb3Jrc3BhY2UiLCJfcmVmNTQiLCJfVEFCTEVfQ09ORklHJGFjdGl2ZVQiLCJhcGlSZXF1ZXN0Iiwic2hhcmVkT3B0aW9ucyIsIm9uT3B0aW9uc1VwZGF0ZSIsIm9uT3BlbkFwcG9pbnRtZW50UmVjb3JkIiwiX3JlZjU0JGNsaWVudHMiLCJfcmVmNTQkY3VycmVudFVzZXIiLCJjdXJyZW50VXNlciIsIl9yZWY1NCRsaXZlQXBwb2ludG1lbiIsImxpdmVBcHBvaW50bWVudHMiLCJfcmVmNTQkbGl2ZVVwZGF0ZWRBdCIsIl9yZWY1NCRiYXJiZXJzIiwiX3JlZjU0JHNlcnZpY2VzIiwib25CYXJiZXJGaWVsZENoYW5nZSIsIm9uU2F2ZUJhcmJlciIsIm9uQWRkQmFyYmVyIiwib25EZWxldGVCYXJiZXIiLCJvblNlcnZpY2VGaWVsZENoYW5nZSIsIm9uU2VydmljZVByaWNlQ2hhbmdlIiwib25EZWxldGVTZXJ2aWNlIiwib25BZGRTZXJ2aWNlIiwib25BY3RpdmVUYWJsZUNoYW5nZSIsIl9yZWY1NCRwcmVmZXJyZWRUYWJsZSIsInByZWZlcnJlZFRhYmxlIiwib25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkIiwiX3JlZjU0JG9uUmVxdWVzdENvbmZpIiwiX3VzZUxvY2FsU3RvcmFnZSIsIl91c2VMb2NhbFN0b3JhZ2UyIiwiYWN0aXZlVGFibGUiLCJzZXRBY3RpdmVUYWJsZSIsIl91c2VTdGF0ZTQ1IiwicmVkdWNlIiwiYWNjIiwiX3VzZVN0YXRlNDYiLCJzZXRUYWJsZXMiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiZHJvcGRvd25PcHRpb25zIiwic2V0RHJvcGRvd25PcHRpb25zIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsInRhYmxlRXJyb3IiLCJzZXRUYWJsZUVycm9yIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsIl91c2VMb2NhbFN0b3JhZ2UzIiwiX3VzZUxvY2FsU3RvcmFnZTQiLCJfdXNlTG9jYWxTdG9yYWdlNSIsIl91c2VMb2NhbFN0b3JhZ2U2Iiwic2V0SGlkZGVuU3RhdHVzZXMiLCJfdXNlTG9jYWxTdG9yYWdlNyIsIl91c2VMb2NhbFN0b3JhZ2U4IiwiaGlkZGVuQ29sdW1uc01hcCIsInNldEhpZGRlbkNvbHVtbnNNYXAiLCJfdXNlTG9jYWxTdG9yYWdlOSIsIl9UQUJMRV9DT05GSUckdGFibGUiLCJfdXNlTG9jYWxTdG9yYWdlMCIsInNvcnRDb25maWdzIiwic2V0U29ydENvbmZpZ3MiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwiY3JlYXRlTW9kYWxPcGVuIiwic2V0Q3JlYXRlTW9kYWxPcGVuIiwiX3VzZUxvY2FsU3RvcmFnZTEiLCJfdXNlTG9jYWxTdG9yYWdlMTAiLCJfdXNlTG9jYWxTdG9yYWdlMTEiLCJfdXNlTG9jYWxTdG9yYWdlMTIiLCJncm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsInNldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIiwiYXBwb2ludG1lbnRUZW1wbGF0ZSIsIm5leHRUYWJsZSIsImV2ZXJ5IiwiZmV0Y2hUYWJsZXMiLCJfY2FsbGVlNiIsInJlc3BvbnNlcyIsIm5leHRUYWJsZXMiLCJyYXdPcHRpb25zIiwiX3QzIiwiX2NvbnRleHQ2IiwiYWxsIiwiY3VycmVudENvbHVtbnMiLCJwcm9jZXNzZWRSb3dzIiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUMiIsInNvdXJjZSIsImNvbHVtbkRlZiIsImhhbmRsZVNvcnQiLCJjb2x1bW5LZXkiLCJoaWRkZW4iLCJzaXplIiwiaGFuZGxlVXBkYXRlIiwiX3JlZjU2IiwiX2NhbGxlZTciLCJfcmVmNTciLCJvdmVycmlkZVRhYmxlSWQiLCJub3JtYWxpemVkRGF0YSIsIm9yaWdpbmFsIiwiX2FyZ3M3IiwiX3Q0IiwiX2NvbnRleHQ3IiwibGlzdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsIl94NCIsIl94NSIsIl9yZWY1OCIsIl9jYWxsZWU4IiwiX3JlZjU5IiwiX3JlZjU5JHNraXBDb25maXJtIiwiY29uZmlybUNvcHkiLCJfYXJnczgiLCJfdDUiLCJfdDYiLCJfY29udGV4dDgiLCJfeDYiLCJoYW5kbGVDcmVhdGVSZWNvcmQiLCJfcmVmNjAiLCJfY2FsbGVlOSIsIm5vcm1hbGl6ZWRQYXlsb2FkIiwiX3Q3IiwiX2NvbnRleHQ5IiwiaGVhZGVycyIsIl94NyIsImZldGNoQ2xpZW50UHJvZmlsZSIsInRhYmxlU2V0dGluZ3MiLCJpc0N1c3RvbVRhYmxlIiwiX1RBQkxFX0NPTkZJRyR0YWJsZTIiLCJfcmVmNjEiLCJCb3RDb250cm9sVmlldyIsIl9yZWY2MiIsInNldHRpbmdzIiwiX3JlZjYyJGJhY2t1cHMiLCJfcmVmNjIkbWVzc2FnZXMiLCJtZXNzYWdlcyIsIm9uVG9nZ2xlRW5hYmxlZCIsIm9uU3RhcnQiLCJvblN0b3AiLCJvblJlc3RhcnQiLCJvblNhdmVTZXR0aW5ncyIsIm9uU2F2ZU1lc3NhZ2UiLCJvblJlc3RvcmVCYWNrdXAiLCJvbkNyZWF0ZUJhY2t1cCIsIm9uRGVsZXRlQmFja3VwIiwibGljZW5zZVN0YXR1cyIsInVwZGF0ZUluZm8iLCJvblJlZnJlc2hVcGRhdGUiLCJvbkFwcGx5VXBkYXRlIiwic3lzdGVtQnVzeSIsIl9yZWY2MiR2aWV3TW9kZSIsInZpZXdNb2RlIiwiX3VzZVN0YXRlNTciLCJib3REZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTU4Iiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU1OSIsImFib3V0VGV4dCIsIl91c2VTdGF0ZTYwIiwiYWJvdXQiLCJzZXRBYm91dCIsIl9saWNlbnNlU3RhdHVzJGxpY2VucyIsIl9saWNlbnNlU3RhdHVzJGxpY2VuczIiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMzIiwidmFsaWQiLCJsaWNlbnNlIiwib3duZXIiLCJleHBpcmVzQXQiLCJudW1iZXIiLCJ2ZXJzaW9uIiwiY2hlY2tlZEF0IiwiYXZhaWxhYmxlIiwicnVubmluZyIsImlzQm90RW5hYmxlZCIsIkxvZ2luU2NyZWVuIiwiX3JlZjYzIiwib25Mb2dpbiIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwibG9naW5PcHRpb25zIiwic2V0TG9naW5PcHRpb25zIiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsIm9wdGlvbnNFcnJvciIsInNldE9wdGlvbnNFcnJvciIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJsb2FkaW5nT3B0aW9ucyIsInNldExvYWRpbmdPcHRpb25zIiwiZmV0Y2hPcHRpb25zIiwiX3JlZjY0IiwiX2NhbGxlZTAiLCJfdDgiLCJfY29udGV4dDAiLCJzZWxlY3REaXNhYmxlZCIsIm9uU3VibWl0IiwiQXBwIiwiX3VzZVN0YXRlNzMiLCJzYXZlZCIsIl91c2VTdGF0ZTc0Iiwic2V0U2Vzc2lvbiIsIl91c2VMb2NhbFN0b3JhZ2UxMyIsIl91c2VMb2NhbFN0b3JhZ2UxNCIsInNldEFjdGl2ZVRhYiIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJwZW5kaW5nVGFibGVWaWV3Iiwic2V0UGVuZGluZ1RhYmxlVmlldyIsIl91c2VTdGF0ZTc3IiwiX3VudXNlZDQiLCJfdXNlU3RhdGU3OCIsInNldEFjdGl2ZURhdGFUYWJsZSIsIl91c2VTdGF0ZTc5IiwiX3VzZVN0YXRlODAiLCJzZXREYXNoYm9hcmQiLCJfdXNlU3RhdGU4MSIsIl91c2VTdGF0ZTgyIiwic2V0U2VydmljZXMiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0Iiwic2V0QmFyYmVycyIsIl91c2VTdGF0ZTg1IiwiX3VzZVN0YXRlODYiLCJib3RTdGF0dXMiLCJzZXRCb3RTdGF0dXMiLCJfdXNlU3RhdGU4NyIsIl91c2VTdGF0ZTg4IiwiYm90U2V0dGluZ3MiLCJzZXRCb3RTZXR0aW5ncyIsIl91c2VTdGF0ZTg5IiwiX3VzZVN0YXRlOTAiLCJib3RNZXNzYWdlcyIsInNldEJvdE1lc3NhZ2VzIiwiX3VzZVN0YXRlOTEiLCJfdXNlU3RhdGU5MiIsInNldExpY2Vuc2VTdGF0dXMiLCJfdXNlU3RhdGU5MyIsIl91c2VTdGF0ZTk0Iiwic2V0VXBkYXRlSW5mbyIsIl91c2VTdGF0ZTk1IiwiX3VzZVN0YXRlOTYiLCJvcHRpb25zQ2FjaGUiLCJzZXRPcHRpb25zQ2FjaGUiLCJfdXNlU3RhdGU5NyIsIl91c2VTdGF0ZTk4IiwicHJvZmlsZU1vZGFsIiwic2V0UHJvZmlsZU1vZGFsIiwiX3VzZVN0YXRlOTkiLCJfdXNlU3RhdGUxMDAiLCJhcHBvaW50bWVudE1vZGFsIiwic2V0QXBwb2ludG1lbnRNb2RhbCIsIl91c2VTdGF0ZTEwMSIsIl91c2VTdGF0ZTEwMiIsIl91c2VTdGF0ZTEwMyIsIl91c2VTdGF0ZTEwNCIsImdsb2JhbEVycm9yIiwic2V0R2xvYmFsRXJyb3IiLCJfdXNlU3RhdGUxMDUiLCJfdXNlU3RhdGUxMDYiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJfdXNlU3RhdGUxMDciLCJfdXNlU3RhdGUxMDgiLCJzZXRTeXN0ZW1CdXN5IiwiX3VzZVN0YXRlMTA5IiwiX3VzZVN0YXRlMTEwIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIl91c2VTdGF0ZTExMSIsIl91c2VTdGF0ZTExMiIsInJlYWx0aW1lU25hcHNob3QiLCJzZXRSZWFsdGltZVNuYXBzaG90IiwiX3VzZVN0YXRlMTEzIiwiX3VzZVN0YXRlMTE0IiwiZmF0YWxFcnJvciIsInNldEZhdGFsRXJyb3IiLCJfdXNlU3RhdGUxMTUiLCJfdXNlU3RhdGUxMTYiLCJjb25maXJtRGlhbG9nIiwic2V0Q29uZmlybURpYWxvZyIsImNvbmZpcm1SZXNvbHZlclJlZiIsInJlcXVlc3RDb25maXJtIiwiaGFuZGxlQ29uZmlybVJlc3VsdCIsImhhbmRsZVNpZGViYXJUYWJsZUNoYW5nZSIsImhhbmRsZUFjdGl2ZVRhYmxlU3luYyIsImhhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWQiLCJzZXJ2aWNlU2F2ZVRpbWVycyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfcmVmNjUiLCJfY2FsbGVlMSIsImVuZHBvaW50IiwiX29wdGlvbnMkaGVhZGVycyIsIl9hcmdzMSIsIl9jb250ZXh0MSIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0ZXh0IiwiX3g4IiwiZmV0Y2hBbGwiLCJfY2FsbGVlMTAiLCJfb3ZlcnZpZXckYm90Iiwib3ZlcnZpZXciLCJ3aXRoRmFsbGJhY2siLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwic2VydmljZXNGdWxsIiwiYmFyYmVyc0Z1bGwiLCJib3RTdGF0ZSIsImJvdE1lc3NhZ2VzUGF5bG9hZCIsInVwZGF0ZSIsIl90OSIsIl9jb250ZXh0MTAiLCJyZXF1ZXN0IiwiRXZlbnRTb3VyY2UiLCJ0b2tlblBhcmFtIiwic3RyZWFtVXJsIiwiZXZlbnRTb3VyY2UiLCJoYW5kbGVFdmVudCIsInVwZGF0ZWRBdCIsIm9uZXJyb3IiLCJjbG9zZSIsIl9wcmV2JGFwcG9pbnRtZW50cyIsIm5leHRTdGF0cyIsIm5leHRBcHBvaW50bWVudHMiLCJoYW5kbGVHbG9iYWxFcnJvciIsImRldGFpbCIsInJlYXNvbiIsImNsZWFyVGltZW91dCIsImNsZWFyIiwiaGFuZGxlTG9naW4iLCJfcmVmNjciLCJfY2FsbGVlMTEiLCJub3JtYWxpemVkVXNlcm5hbWUiLCJzZXNzaW9uUGF5bG9hZCIsIl90MCIsIl9jb250ZXh0MTEiLCJzdWNjZXNzIiwiX3g5IiwiX3gwIiwiaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UiLCJub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCIsImZyb21FbnRyaWVzIiwiX3JlZjY4IiwiX3JlZjY5IiwiZGVyaXZlQmFyYmVyTG9naW4iLCJiYXJiZXJEYXRhIiwiYnVpbGRCYXJiZXJQYXlsb2FkIiwiX2JhcmJlckRhdGEkb3JkZXJJbmRlIiwiZmFsbGJhY2tPcmRlciIsIm5pY2tuYW1lIiwib3JkZXJJbmRleCIsImhhbmRsZVNhdmVCYXJiZXIiLCJfcmVmNzAiLCJfY2FsbGVlMTIiLCJ1cGRhdGVkQmFyYmVyIiwiX3QxIiwiX2NvbnRleHQxMiIsIl94MSIsImhhbmRsZURlbGV0ZUJhcmJlciIsIl9yZWY3MSIsIl9jYWxsZWUxMyIsIl90MTAiLCJfY29udGV4dDEzIiwiX3gxMCIsImhhbmRsZUFkZEJhcmJlciIsIl9yZWY3MiIsIl9jYWxsZWUxNCIsIm5ld0JhcmJlclBheWxvYWQiLCJfdDExIiwiX2NvbnRleHQxNCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl94MTEiLCJoYW5kbGVTYXZlU2VydmljZSIsIl9yZWY3MyIsIl9jYWxsZWUxNSIsIl90MTIiLCJfY29udGV4dDE1IiwiX3gxMiIsInNjaGVkdWxlU2VydmljZUF1dG9zYXZlIiwidGltZXJzIiwiZXhpc3RpbmdUaW1lciIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGVTZXJ2aWNlIiwiX3JlZjc0IiwiX2NhbGxlZTE2IiwiX3QxMyIsIl9jb250ZXh0MTYiLCJfeDEzIiwiaGFuZGxlQWRkU2VydmljZSIsIl9yZWY3NSIsIl9jYWxsZWUxNyIsIl90MTQiLCJfY29udGV4dDE3IiwiX3gxNCIsImhhbmRsZVNlcnZpY2VGaWVsZENoYW5nZSIsImhhbmRsZVNlcnZpY2VQcmljZUNoYW5nZSIsInNlcnZpY2VJZCIsImhhbmRsZUJvdFRvZ2dsZSIsIl9yZWY3NiIsIl9jYWxsZWUxOCIsImVuYWJsZWQiLCJfdDE1IiwiX2NvbnRleHQxOCIsIl94MTUiLCJoYW5kbGVCb3RBY3Rpb24iLCJfcmVmNzciLCJfY2FsbGVlMTkiLCJhY3Rpb24iLCJfdDE2IiwiX2NvbnRleHQxOSIsIl94MTYiLCJoYW5kbGVTYXZlU2V0dGluZ3MiLCJfcmVmNzgiLCJfY2FsbGVlMjAiLCJfdDE3IiwiX2NvbnRleHQyMCIsIl94MTciLCJoYW5kbGVTYXZlTWVzc2FnZSIsIl9yZWY3OSIsIl9jYWxsZWUyMSIsInBlcnNpc3QiLCJfdDE4IiwiX2NvbnRleHQyMSIsImNvZGUiLCJfeDE4IiwiX3gxOSIsIl94MjAiLCJoYW5kbGVSZXN0b3JlQmFja3VwIiwiX3JlZjgwIiwiX2NhbGxlZTIyIiwiX3QxOSIsIl9jb250ZXh0MjIiLCJfeDIxIiwiaGFuZGxlQ3JlYXRlQmFja3VwIiwiX3JlZjgxIiwiX2NhbGxlZTIzIiwiX3QyMCIsIl9jb250ZXh0MjMiLCJoYW5kbGVEZWxldGVCYWNrdXAiLCJfcmVmODIiLCJfY2FsbGVlMjQiLCJfdDIxIiwiX2NvbnRleHQyNCIsIl94MjIiLCJmZXRjaENsaWVudEhpc3RvcnkiLCJfcmVmODMiLCJfY2FsbGVlMjUiLCJfY29udGV4dDI1IiwiX3gyMyIsIm9wZW5Qcm9maWxlIiwiX3JlZjg0IiwiX2NhbGxlZTI2IiwiX3QyMiIsIl9jb250ZXh0MjYiLCJfeDI0IiwiZW5zdXJlT3B0aW9ucyIsIl9jYWxsZWUyNyIsIl9jb250ZXh0MjciLCJoYW5kbGVPcGVuQXBwb2ludG1lbnQiLCJfcmVmODYiLCJfY2FsbGVlMjgiLCJvcHRpb25zQ29uZmlnIiwiX2FyZ3MyOCIsIl9jb250ZXh0MjgiLCJfeDI1IiwiaGFuZGxlQ3JlYXRlQXBwb2ludG1lbnQiLCJfY2FsbGVlMjkiLCJfb3B0aW9ucyRzdGF0dXNlcyIsImRlZmF1bHRTdGF0dXMiLCJkZWZhdWx0QmFyYmVyIiwiX2NvbnRleHQyOSIsImhhbmRsZVNhdmVBcHBvaW50bWVudCIsIl9yZWY4OSIsIl9jYWxsZWUzMCIsIl9yZWY4OCIsIl90MjMiLCJfY29udGV4dDMwIiwiX3gyNiIsImhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IiwiX3JlZjkwIiwiX2NhbGxlZTMxIiwiX3QyNCIsIl9jb250ZXh0MzEiLCJfeDI3IiwiaGFuZGxlUmVmcmVzaFVwZGF0ZSIsIl9yZWY5MSIsIl9jYWxsZWUzMiIsImluZm8iLCJfdDI1IiwiX2NvbnRleHQzMiIsImhhbmRsZUFwcGx5VXBkYXRlIiwiX3JlZjkyIiwiX2NhbGxlZTMzIiwiX3QyNiIsIl9jb250ZXh0MzMiLCJwcmVmZXJyZWRUYWJsZVRhcmdldCIsIm1haW5DbGFzc05hbWUiLCJyZW5kZXJBY3RpdmUiLCJyZWxvYWQiLCJyZWFjdEFwcFJvb3QiLCJyZW5kZXJBcHAiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsic2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIu+7v2NvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0LCBGcmFnbWVudCB9ID0gUmVhY3Q7XHJcbmNvbnN0IHsgY3JlYXRlUG9ydGFsLCBjcmVhdGVSb290IH0gPSBSZWFjdERPTTtcclxuXHJcbmNvbnN0IHJlc29sdmVEZWZhdWx0QXBpQmFzZVVybCA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGlgO1xyXG4gIH1cclxuICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknO1xyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfQkFTRV9VUkwgPSByZXNvbHZlRGVmYXVsdEFwaUJhc2VVcmwoKTtcclxuY29uc3QgQVBJX0JBU0VfVVJMID0gd2luZG93Ll9fQkFSQkVSX0FQSV9CQVNFX18gfHwgREVGQVVMVF9BUElfQkFTRV9VUkw7XHJcbndpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fID0gQVBJX0JBU0VfVVJMO1xyXG5cclxuY29uc3QgVklFV19UQUJTID0gW1xyXG4gIHsgaWQ6ICdkYXNoYm9hcmQnLCBsYWJlbDogJ9Ce0LHQt9C+0YAnIH0sXHJcbiAgeyBpZDogJ3RhYmxlcycsIGxhYmVsOiAn0JTQsNC90L3Ri9C1JyB9LFxyXG4gIHsgaWQ6ICdib3QnLCBsYWJlbDogJ9CR0L7RgicgfSxcclxuICB7IGlkOiAnc3lzdGVtJywgbGFiZWw6ICfQodC40YHRgtC10LzQsCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRBQkxFX09SREVSID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJywgJ0JhcmJlcnMnLCAnU2VydmljZXMnXTtcclxuY29uc3QgVklTSUJMRV9UQUJMRV9PUkRFUiA9IFRBQkxFX09SREVSLmZpbHRlcigodGFibGUpID0+IHRhYmxlICE9PSAnU2NoZWR1bGVzJyk7XHJcbmNvbnN0IERBVEFfVEFCTEVTID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJ107XHJcblxyXG5jb25zdCBUQUJMRV9DT05GSUcgPSB7XG4gIEFwcG9pbnRtZW50czogeyBsYWJlbDogJ9CX0LDQv9C40YHQuCcsIG1vZGU6ICdkYXRhJywgY2FuQ3JlYXRlOiB0cnVlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgc3VwcG9ydHNTdGF0dXNGaWx0ZXI6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ0RhdGUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcbiAgU2NoZWR1bGVzOiB7IGxhYmVsOiAn0KDQsNGB0L/QuNGB0LDQvdC40LUnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogZmFsc2UsIHN1cHBvcnRzQmFyYmVyRmlsdGVyOiB0cnVlLCBkZWZhdWx0U29ydDogeyBrZXk6ICdEYXRlJywgZGlyZWN0aW9uOiAnYXNjJyB9IH0sXG4gIFVzZXJzOiB7IGxhYmVsOiAn0JrQu9C40LXQvdGC0YsnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnTmFtZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxuICBCYXJiZXJzOiB7IGxhYmVsOiAn0JHQsNGA0LHQtdGA0YsnLCBtb2RlOiAnY3VzdG9tJyB9LFxuICBTZXJ2aWNlczogeyBsYWJlbDogJ9Cj0YHQu9GD0LPQuCcsIG1vZGU6ICdjdXN0b20nIH0sXG59O1xuY29uc3QgREFUQV9TSE9SVENVVFMgPSBbJ0FwcG9pbnRtZW50cycsICdVc2VycycsICdCYXJiZXJzJywgJ1NlcnZpY2VzJ10ubWFwKCh0YWJsZUlkKSA9PiAoe1xuICBpZDogdGFibGVJZCxcbiAgbGFiZWw6IFRBQkxFX0NPTkZJR1t0YWJsZUlkXT8ubGFiZWwgfHwgdGFibGVJZCxcbn0pKTtcblxyXG5jb25zdCBUQUJMRV9DT0xVTU5TID0ge1xyXG4gIEFwcG9pbnRtZW50czogW1xyXG4gICAgeyBrZXk6ICdDdXN0b21lck5hbWUnLCBsYWJlbDogJ9Ca0LvQuNC10L3RgicsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGlzUHJvZmlsZUxpbms6IHRydWUsIG1pbldpZHRoOiAndy00OCcgfSxcclxuICAgIHsga2V5OiAnUGhvbmUnLCBsYWJlbDogJ9Ci0LXQu9C10YTQvtC9JywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTM2JyB9LFxyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ2JhcmJlcnMnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0RhdGUnLCBsYWJlbDogJ9CU0LDRgtCwJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdkYXRlJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdUaW1lJywgbGFiZWw6ICfQktGA0LXQvNGPJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTI4Jywgbm9XcmFwOiB0cnVlIH0sXHJcbiAgICB7IGtleTogJ1N0YXR1cycsIGxhYmVsOiAn0KHRgtCw0YLRg9GBJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnc3RhdHVzZXMnLCBhbGlnbjogJ2NlbnRlcicsIG1pbldpZHRoOiAndy0yOCcgfSxcclxuICAgIHsga2V5OiAnU2VydmljZXMnLCBsYWJlbDogJ9Cj0YHQu9GD0LPQuCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnbXVsdGktc2VsZWN0Jywgb3B0aW9uc0tleTogJ3NlcnZpY2VzJywgbWluV2lkdGg6ICd3LTU2JyB9LFxyXG4gICAgeyBrZXk6ICdVc2VySUQnLCBsYWJlbDogJ0lEINC60LvQuNC10L3RgtCwJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTI0JyB9LFxyXG4gICAgeyBrZXk6ICdSZW1pbmRlcjJoQ2xpZW50U2VudCcsIGxhYmVsOiAn0J3QsNC/0L7QvNC40L3QsNC90LjQtSDQutC70LjQtdC90YLRgycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnYm9vbGVhbicsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgeyBrZXk6ICdSZW1pbmRlcjJoQmFyYmVyU2VudCcsIGxhYmVsOiAn0J3QsNC/0L7QvNC40L3QsNC90LjQtSDQsdCw0YDQsdC10YDRgycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnYm9vbGVhbicsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gIF0sXHJcbiAgU2NoZWR1bGVzOiBbXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JHQsNGA0LHQtdGAJywgZWRpdGFibGU6IGZhbHNlLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgICB7IGtleTogJ0RheU9mV2VlaycsIGxhYmVsOiAn0JTQtdC90Ywg0L3QtdC00LXQu9C4JywgZWRpdGFibGU6IGZhbHNlLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0RhdGUnLCBsYWJlbDogJ9CU0LDRgtCwJywgZWRpdGFibGU6IGZhbHNlLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ1dlZWsnLCBsYWJlbDogJ9Ch0LvQvtGC0YsnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBhbGlnbjogJ2NlbnRlcicsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICBdLFxyXG4gIFVzZXJzOiBbXHJcbiAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ9CY0LzRjycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGlzUHJvZmlsZUxpbms6IHRydWUsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICAgIHsga2V5OiAnUGhvbmUnLCBsYWJlbDogJ9Ci0LXQu9C10YTQvtC9JywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTM2JyB9LFxyXG4gICAgeyBrZXk6ICdUZWxlZ3JhbUlEJywgbGFiZWw6ICdUZWxlZ3JhbScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQm9GO0LHQuNC80YvQuSDQvNCw0YHRgtC10YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdiYXJiZXJzJywgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBSQVRJTkdfTUlOID0gMztcclxuY29uc3QgUkFUSU5HX01BWCA9IDU7XHJcbmNvbnN0IFJBVElOR19TVEVQID0gMC41O1xyXG5sZXQgYXZhdGFyT3B0aW9uc0NhY2hlID0gbnVsbDtcclxuY29uc3QgWUVBUl9JTl9NUyA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5jb25zdCBEQVlfSU5fTVMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuY29uc3QgYnVpbGROZXdCYXJiZXJTdGF0ZSA9ICgpID0+ICh7XHJcbiAgbmFtZTogJycsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIHJhdGluZzogJzUnLFxyXG4gIGNvbG9yOiAnIzZkMjhkOScsXHJcbiAgYXZhdGFyVXJsOiAnJyxcclxuICBkZXNjcmlwdGlvbjogJycsXHJcbiAgcGhvbmU6ICcnLFxyXG4gIHRlbGVncmFtSWQ6ICcnLFxyXG4gIGlzQWN0aXZlOiB0cnVlLFxyXG59KTtcclxuY29uc3QgYnVpbGROZXdTZXJ2aWNlU3RhdGUgPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICcnLFxyXG4gIGR1cmF0aW9uOiA2MCxcclxuICBpc0FjdGl2ZTogdHJ1ZSxcclxuICBwcmljZXM6IHt9LFxyXG59KTtcclxuY29uc3QgQUNUSVZFX0JBUkJFUl9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDEwLCAweDA0M2EsIDB4MDQ0MiwgMHgwNDM4LCAweDA0MzIsIDB4MDQzNSwgMHgwNDNkKTtcclxuY29uc3QgSElEREVOX0JBUkJFUl9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDIxLCAweDA0M2EsIDB4MDQ0MCwgMHgwNDRiLCAweDA0NDIpO1xyXG5jb25zdCBBQ1RJVkVfU0VSVklDRV9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDEwLCAweDA0M2EsIDB4MDQ0MiwgMHgwNDM4LCAweDA0MzIsIDB4MDQzZCwgMHgwNDMwKTtcclxuY29uc3QgSElEREVOX1NFUlZJQ0VfTEFCRUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDQyMSwgMHgwNDNhLCAweDA0NDAsIDB4MDQ0YiwgMHgwNDQyLCAweDA0MzApO1xyXG5jb25zdCBidWlsZFZpc2l0SGlzdG9yeSA9IChhcHBvaW50bWVudHMgPSBbXSkgPT4ge1xyXG4gIGlmICghYXBwb2ludG1lbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGN1dG9mZiA9IERhdGUubm93KCkgLSBZRUFSX0lOX01TO1xyXG4gIGNvbnN0IGNvbXBsZXRlZCA9IGFwcG9pbnRtZW50c1xyXG4gICAgLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcclxuICAgICAgcmV0dXJuIHsgLi4uYXBwdCwgc3RhcnREYXRlIH07XHJcbiAgICB9KVxyXG4gICAgLmZpbHRlcihcclxuICAgICAgKGFwcHQpID0+XHJcbiAgICAgICAgYXBwdC5zdGFydERhdGUgJiZcclxuICAgICAgICBhcHB0LnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPj0gY3V0b2ZmICYmXHJcbiAgICAgICAgKGlzQ29tcGxldGVkQXBwb2ludG1lbnRTdGF0dXMoYXBwdC5TdGF0dXMpIHx8IGlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMoYXBwdC5TdGF0dXMpKVxyXG4gICAgKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc3RhcnREYXRlLmdldFRpbWUoKSAtIGEuc3RhcnREYXRlLmdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIGNvbXBsZXRlZC5tYXAoKGFwcHQsIGluZGV4KSA9PiAoe1xyXG4gICAgLi4uYXBwdCxcclxuICAgIG9yZGVyTnVtYmVyOiBjb21wbGV0ZWQubGVuZ3RoIC0gaW5kZXgsXHJcbiAgICBkYXRlTGFiZWw6IGZvcm1hdERhdGVUaW1lKGFwcHQuRGF0ZSwgYXBwdC5UaW1lKSxcclxuICB9KSk7XHJcbn07XHJcbmNvbnN0IGRlZmF1bHRDb25maXJtU3RhdGUgPSB7XHJcbiAgb3BlbjogZmFsc2UsXHJcbiAgdGl0bGU6ICcnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGNvbmZpcm1MYWJlbDogJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLFxyXG4gIGNhbmNlbExhYmVsOiAn0J7RgtC80LXQvdCwJyxcclxuICB0b25lOiAnbmV1dHJhbCcsXHJcbn07XHJcbmNvbnN0IGdldFJlY29yZElkID0gKHJlY29yZCA9IHt9KSA9PiByZWNvcmQuaWQgfHwgcmVjb3JkLklkIHx8IHJlY29yZC5JRCB8fCByZWNvcmQucmVjb3JkSWQgfHwgcmVjb3JkLklEX1JlY29yZCB8fCBudWxsO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcbmNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RvcmVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiBzdG9yZWQgPyBKU09OLnBhcnNlKHN0b3JlZCkgOiBpbml0aWFsVmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSByZWFkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVWYWx1ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHVwZGF0ZXIpID0+IHtcclxuICAgICAgc2V0VmFsdWUoKHByZXYpID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIocHJldikgOiB1cGRhdGVyO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXh0VmFsdWUpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2Ugd3JpdGUgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtrZXldXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFt2YWx1ZSwgdXBkYXRlVmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdXNlTm93VGljayA9IChpbnRlcnZhbE1zID0gMTAwMCkgPT4ge1xyXG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZSgoKSA9PiBEYXRlLm5vdygpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXROb3coRGF0ZS5ub3coKSksIGludGVydmFsTXMpO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtpbnRlcnZhbE1zXSk7XHJcbiAgcmV0dXJuIG5vdztcclxufTtcclxuXHJcbmNvbnN0IHVzZU91dHNpZGVDbGljayA9IChyZWYsIGhhbmRsZXIpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFoYW5kbGVyKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFyZWYuY3VycmVudCB8fCByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm47XHJcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGhhbmRsZXJdKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQXZhdGFyT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXNzZXRzL2F2YXRhcnNgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDRgdC/0LjRgdC+0Log0LDQstCw0YLQsNGA0L7QsicpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgaW1hZ2VzID0gQXJyYXkuaXNBcnJheShwYXlsb2FkLmltYWdlcykgPyBwYXlsb2FkLmltYWdlcy5maWx0ZXIoQm9vbGVhbikubWFwKG5vcm1hbGl6ZUltYWdlUGF0aCkgOiBbXTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGltYWdlcykpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplVGV4dCA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IFN0cmluZyh2YWx1ZSkpO1xuY29uc3QgaXNWYWxpZERhdGUgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSk7XG5jb25zdCByZXNvbHZlQXNzZXRVcmwgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkudHJpbSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuICcnO1xyXG4gIGlmICgvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KG5vcm1hbGl6ZWQpIHx8IG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgY29uc3Qgc2FuaXRpemVkID0gbm9ybWFsaXplZC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLlxcLysvLCAnJyk7XHJcbiAgaWYgKHNhbml0aXplZC5zdGFydHNXaXRoKCcvJykpIHJldHVybiBzYW5pdGl6ZWQ7XHJcbiAgaWYgKHNhbml0aXplZC5zdGFydHNXaXRoKCdJbWFnZS8nKSkgcmV0dXJuIGAvJHtzYW5pdGl6ZWR9YDtcclxuICByZXR1cm4gYC9JbWFnZS8ke3Nhbml0aXplZH1gO1xyXG59O1xyXG5jb25zdCBub3JtYWxpemVJbWFnZVBhdGggPSAodmFsdWUpID0+IHtcclxuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVBc3NldFVybCh2YWx1ZSk7XHJcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuICcnO1xyXG4gIGlmICgvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KHJlc29sdmVkKSB8fCByZXNvbHZlZC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gcmVzb2x2ZWQ7XHJcbiAgcmV0dXJuIHJlc29sdmVkLnN0YXJ0c1dpdGgoJy8nKSA/IHJlc29sdmVkIDogYC8ke3Jlc29sdmVkfWA7XHJcbn07XHJcbmNvbnN0IG51bWJlckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKTtcclxuY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBudW1lcmljID0gTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW1lcmljKSkgcmV0dXJuICcnO1xyXG4gIHJldHVybiBgJHtudW1iZXJGb3JtYXR0ZXIuZm9ybWF0KG51bWVyaWMpfSBcXHUyMEJEYDtcclxufTtcclxuY29uc3QgcGx1cmFsaXplID0gKGNvdW50LCBbb25lLCBmZXcsIG1hbnldKSA9PiB7XHJcbiAgY29uc3QgbW9kMTAgPSBjb3VudCAlIDEwO1xyXG4gIGNvbnN0IG1vZDEwMCA9IGNvdW50ICUgMTAwO1xyXG4gIGlmIChtb2QxMCA9PT0gMSAmJiBtb2QxMDAgIT09IDExKSByZXR1cm4gb25lO1xyXG4gIGlmIChtb2QxMCA+PSAyICYmIG1vZDEwIDw9IDQgJiYgKG1vZDEwMCA8IDEwIHx8IG1vZDEwMCA+PSAyMCkpIHJldHVybiBmZXc7XHJcbiAgcmV0dXJuIG1hbnk7XHJcbn07XHJcblxyXG5jb25zdCBjYW5vbmljYWxpemVOYW1lID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9bXmEtejAtOdCwLdGP0ZFcXHNdL2dpLCAnJykudHJpbSgpO1xyXG5cclxuY29uc3QgcmVzb2x2ZUxvZ2luID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGJ1aWxkU2Vzc2lvblBheWxvYWQgPSAocGF5bG9hZCA9IHt9KSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZExvZ2luID0gcmVzb2x2ZUxvZ2luKHBheWxvYWQudXNlcm5hbWUgfHwgcGF5bG9hZC5sb2dpbik7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBheWxvYWQsXHJcbiAgICB1c2VybmFtZTogbm9ybWFsaXplZExvZ2luLFxyXG4gICAgZGlzcGxheU5hbWU6IHBheWxvYWQuZGlzcGxheU5hbWUgfHwgcGF5bG9hZC5uYW1lIHx8IG5vcm1hbGl6ZWRMb2dpbixcclxuICAgIGJhcmJlcklkOiBwYXlsb2FkLmJhcmJlcklkIHx8IHBheWxvYWQuaWQgfHwgbnVsbCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcGlja0JhcmJlckZvclVzZXIgPSAodXNlclNlc3Npb24sIGF2YWlsYWJsZUJhcmJlcnMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGZhbGxiYWNrID0gYXZhaWxhYmxlQmFyYmVycz8uWzBdIHx8ICcnO1xyXG4gIGlmICghdXNlclNlc3Npb24pIHJldHVybiBmYWxsYmFjaztcclxuICBjb25zdCBjYW5kaWRhdGVzID0gW3VzZXJTZXNzaW9uLmRpc3BsYXlOYW1lLCB1c2VyU2Vzc2lvbi5wcmVmZXJyZWROYW1lLCB1c2VyU2Vzc2lvbi51c2VybmFtZV1cclxuICAgIC5tYXAoKGNhbmRpZGF0ZSkgPT4gY2Fub25pY2FsaXplTmFtZShjYW5kaWRhdGUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIGlmICghY2FuZGlkYXRlcy5sZW5ndGggfHwgIWF2YWlsYWJsZUJhcmJlcnM/Lmxlbmd0aCkgcmV0dXJuIGZhbGxiYWNrO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gYXZhaWxhYmxlQmFyYmVycy5tYXAoKGJhcmJlcikgPT4gY2Fub25pY2FsaXplTmFtZShiYXJiZXIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcclxuICAgIGNvbnN0IG1hdGNoSW5kZXggPSBub3JtYWxpemVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uID09PSBjYW5kaWRhdGUpO1xyXG4gICAgaWYgKG1hdGNoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVCYXJiZXJzW21hdGNoSW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsbGJhY2s7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICctJztcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUaW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZVZhbHVlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSk7XHJcbiAgaWYgKCFzYWZlVmFsdWUpIHJldHVybiAnLSc7XHJcbiAgaWYgKHNhZmVWYWx1ZS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICByZXR1cm4gc2FmZVZhbHVlLnNwbGl0KCctJylbMF0udHJpbSgpO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVZhbHVlO1xyXG59O1xyXG5jb25zdCBmb3JtYXRQaG9uZUlucHV0ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgZGlnaXRzID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG4gICAgLnJlcGxhY2UoL1teXFxkXS9nLCAnJylcclxuICAgIC50cmltKCk7XHJcbiAgaWYgKCFkaWdpdHMpIHJldHVybiAnJztcclxuICBsZXQgbm9ybWFsaXplZCA9IGRpZ2l0cztcclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDExICYmIG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnOCcpKSB7XHJcbiAgICBub3JtYWxpemVkID0gYDcke25vcm1hbGl6ZWQuc2xpY2UoMSl9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgbm9ybWFsaXplZCA9IGA3JHtub3JtYWxpemVkfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTEgJiYgbm9ybWFsaXplZC5zdGFydHNXaXRoKCc3JykpIHtcclxuICAgIHJldHVybiBgKzcgKCR7bm9ybWFsaXplZC5zbGljZSgxLCA0KX0pICR7bm9ybWFsaXplZC5zbGljZSg0LCA3KX0tJHtub3JtYWxpemVkLnNsaWNlKDcsIDkpfS0ke25vcm1hbGl6ZWQuc2xpY2UoOSwgMTEpfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzcnKSAmJiBub3JtYWxpemVkLmxlbmd0aCA+IDExKSB7XHJcbiAgICByZXR1cm4gYCske25vcm1hbGl6ZWR9YDtcclxuICB9XHJcbiAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnKycpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgcmV0dXJuIGArJHtub3JtYWxpemVkfWA7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUZWxlZ3JhbUhhbmRsZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZSA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnJlcGxhY2UoL15AKy8sICcnKS50cmltKCk7XHJcbiAgcmV0dXJuIGhhbmRsZSA/IGBAJHtoYW5kbGV9YCA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRUZWxlZ3JhbUxpbmsgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBoYW5kbGUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9eQCsvLCAnJykudHJpbSgpO1xyXG4gIHJldHVybiBoYW5kbGUgPyBgaHR0cHM6Ly90Lm1lLyR7aGFuZGxlfWAgOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gKGRhdGUsIHRpbWUpID0+IHtcbiAgY29uc3QgZGF0ZVBhcnQgPSBmb3JtYXREYXRlKGRhdGUpO1xuICBjb25zdCB0aW1lUGFydCA9IGZvcm1hdFRpbWUodGltZSk7XG4gIGlmIChkYXRlUGFydCA9PT0gJy0nICYmIHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiAnLSc7XG4gIGlmIChkYXRlUGFydCA9PT0gJy0nKSByZXR1cm4gdGltZVBhcnQ7XG4gIGlmICh0aW1lUGFydCA9PT0gJy0nKSByZXR1cm4gZGF0ZVBhcnQ7XG4gIHJldHVybiBgJHtkYXRlUGFydH0gfCAke3RpbWVQYXJ0fWA7XG59O1xuXG5jb25zdCBiYWNrdXBEYXRlRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywge1xuICBkYXk6ICdudW1lcmljJyxcbiAgbW9udGg6ICdsb25nJyxcbiAgeWVhcjogJ251bWVyaWMnLFxuICBob3VyOiAnMi1kaWdpdCcsXG4gIG1pbnV0ZTogJzItZGlnaXQnLFxufSk7XG5cbmNvbnN0IHBhcnNlQmFja3VwVGltZXN0YW1wID0gKGZpbGVuYW1lID0gJycpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSBub3JtYWxpemVUZXh0KGZpbGVuYW1lKS5tYXRjaCgvYmFja3VwLShcXGR7NH0tXFxkezJ9LVxcZHsyfSlUKFxcZHsyfSktKFxcZHsyfSktKFxcZHsyfSkoPzotKFxcZHszfSkpPy9pKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IFssIGRhdGVQYXJ0LCBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzXSA9IG1hdGNoO1xuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9JHttaWxsaXNlY29uZHMgPyBgLiR7bWlsbGlzZWNvbmRzfWAgOiAnJ31aYDtcbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcbiAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWQ7XG59O1xuXG5jb25zdCBmb3JtYXRCYWNrdXBMYWJlbCA9IChmaWxlbmFtZSA9ICcnKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlQmFja3VwVGltZXN0YW1wKGZpbGVuYW1lKTtcbiAgcmV0dXJuIHBhcnNlZCA/IGJhY2t1cERhdGVGb3JtYXR0ZXIuZm9ybWF0KHBhcnNlZCkgOiBmaWxlbmFtZTtcbn07XG5jb25zdCBmb3JtYXREYXRlSGVhZGluZyA9ICh2YWx1ZSwgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9KSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHt2YWx1ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiB2YWx1ZTtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCBvcHRpb25zKS5mb3JtYXQocGFyc2VkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufTtcclxuY29uc3QgZm9ybWF0RGF0ZUJhZGdlTGFiZWwgPSAodmFsdWUpID0+XHJcbiAgZm9ybWF0RGF0ZUhlYWRpbmcodmFsdWUsIHsgd2Vla2RheTogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnIH0pO1xyXG5jb25zdCBmb3JtYXRMaXZlVGltZXN0YW1wID0gKHZhbHVlLCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiAnJztcclxuICAgIGNvbnN0IGRpZmZNcyA9IE1hdGgubWF4KDAsIG5vd1RzIC0gcGFyc2VkLmdldFRpbWUoKSk7XHJcbiAgICBpZiAoZGlmZk1zIDwgMTAwMCkgcmV0dXJuICfRgtC+0LvRjNC60L4g0YfRgtC+JztcclxuICAgIGlmIChkaWZmTXMgPCA2MF8wMDApIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmZNcyAvIDEwMDApfSDRgdC10LpgO1xyXG4gICAgaWYgKGRpZmZNcyA8IDNfNjAwXzAwMCkge1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmTXMgLyA2MF8wMDApO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZk1zICUgNjBfMDAwKSAvIDEwMDApO1xyXG4gICAgICByZXR1cm4gYCR7bWludXRlc30g0LzQuNC9ICR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INGB0LXQumA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlmZk1zIDwgODZfNDAwXzAwMCkge1xyXG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gM182MDBfMDAwKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDNfNjAwXzAwMCkgLyA2MF8wMDApO1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9INGHICR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INC80LjQvWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkLnRvTG9jYWxlU3RyaW5nKCdydS1SVScsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNUQVRVU19UUkFOU0xBVElPTlMgPSB7XHJcbiAgYWN0aXZlOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgJ9Cw0LrRgtC40LLQvdCw0Y8nOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgY29uZmlybTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgY29uZmlybWVkOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICAn0L/QvtC00YLQstC10YDQttC00LXQvdC+JzogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCc6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGRvbmU6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNvbXBsZXRlOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZWQ6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGZpbmlzaGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICAn0LLRi9C/0L7Qu9C90LXQvdCwJzogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9C30LDQstC10YDRiNC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNhbmNlbDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgY2FuY2VsbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QsCc6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAn0L7RgtC80LXQvdC10L3Qvic6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAnbm8gc2hvdyc6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgJ25vLXNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIG5vc2hvdzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBtaXNzZWQ6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgcGVuZGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdDogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgcHJvY2Vzc2luZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbn07XHJcbmNvbnN0IFNUQVRVU19CQURHRV9NQVAgPSB7XHJcbiAg0JDQutGC0LjQstC90LDRjzogJ2JvcmRlciBib3JkZXItc2t5LTUwMC8zMCBiZy1za3ktNTAwLzEwIHRleHQtc2t5LTEwMCcsXHJcbiAg0J/QvtC00YLQstC10YDQttC00LXQvdCwOiAnYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMTAwJyxcclxuICDQl9Cw0LLQtdGA0YjQtdC90LA6ICdib3JkZXIgYm9yZGVyLWluZGlnby01MDAvMzAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnLFxyXG4gINCe0YLQvNC10L3QtdC90LA6ICdib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzMwIGJnLXJvc2UtNTAwLzEwIHRleHQtcm9zZS0xMDAnLFxyXG4gICfQndC1INC/0YDQuNGI0ZHQuyc6ICdib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCBiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0xMDAnLFxyXG59O1xyXG5jb25zdCBnZXRTdGF0dXNCYWRnZUNsYXNzZXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIFNUQVRVU19CQURHRV9NQVBbbm9ybWFsaXplZF0gfHwgJ2JvcmRlciBib3JkZXItc2xhdGUtNjAwLzYwIGJnLXNsYXRlLTgwMC83MCB0ZXh0LXNsYXRlLTIwMCdcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NhbmNlbCcsICfQvtGC0LzQtdC9JywgJ9C90LUg0L/RgNC40YgnLCAnbm9zaG93JywgJ25vLXNob3cnLCAnbWlzc2VkJywgJ9C/0YDQvtGB0YAnLCAnZXhwaXJlZCddO1xyXG5jb25zdCBBQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LDQutGC0LjQsicsICdhY3RpdmUnLCAn0L/QvtC00YLQstC10YDQticsICdjb25maXJtJywgJ9C+0LbQuNC0JywgJ3BlbmRpbmcnLCAnd2FpdCcsICfQttC00LXQvCcsICfQttC00ZHQvCcsICfQvdC+0LInLCAnbmV3J107XHJcbmNvbnN0IENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TID0gWyfQstGL0L/QvtC70L0nLCAn0LfQsNCy0LXRgNGIJywgJ2RvbmUnLCAnY29tcGxldGUnLCAn0LPQvtGC0L7QsiddO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzVmFsdWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQoc3RhdHVzKS50cmltKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgdHJhbnNsYXRlZCA9IFNUQVRVU19UUkFOU0xBVElPTlNbbm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpXTtcclxuICBpZiAodHJhbnNsYXRlZCkgcmV0dXJuIHRyYW5zbGF0ZWQ7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3JtYWxpemVkLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzTGlzdCA9IChzdGF0dXNlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcclxuICByZXR1cm4gc3RhdHVzZXNcclxuICAgIC5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSlcclxuICAgIC5maWx0ZXIoKHN0YXR1cykgPT4ge1xyXG4gICAgICBpZiAoIXN0YXR1cyB8fCBzZWVuLmhhcyhzdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHNlZW4uYWRkKHN0YXR1cyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSk7XHJcbn07XHJcblxyXG5jb25zdCBzYW5pdGl6ZVRpbWVUb2tlbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkubWF0Y2goLyhcXGR7MSwyfSk6KFxcZHsyfSkvKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaG91cnMgPSBtYXRjaFsxXS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBtYXRjaFsyXTtcclxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9b4oCU4oCTXS9nLCAnLScpO1xyXG4gIGlmICghc2FmZSkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcbiAgY29uc3QgW3Jhd1N0YXJ0LCByYXdFbmQgPSAnJ10gPSBzYWZlLnNwbGl0KCctJykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0OiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdTdGFydCksXHJcbiAgICBlbmQ6IHNhbml0aXplVGltZVRva2VuKHJhd0VuZCksXHJcbiAgfTtcclxufTtcclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VQYXJ0cyA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFRpbWVSYW5nZVZhbHVlID0gKHN0YXJ0LCBlbmQpID0+IHtcclxuICBjb25zdCBzYWZlU3RhcnQgPSBzYW5pdGl6ZVRpbWVUb2tlbihzdGFydCk7XHJcbiAgY29uc3Qgc2FmZUVuZCA9IHNhbml0aXplVGltZVRva2VuKGVuZCk7XHJcbiAgaWYgKHNhZmVTdGFydCAmJiBzYWZlRW5kKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gc2FmZVN0YXJ0IDw9IHNhZmVFbmQgPyBbc2FmZVN0YXJ0LCBzYWZlRW5kXSA6IFtzYWZlRW5kLCBzYWZlU3RhcnRdO1xyXG4gICAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVN0YXJ0IHx8ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRpbWVTdGFydCA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkuc3RhcnQ7XHJcblxyXG5jb25zdCBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZSA9IChkYXRlVmFsdWUsIHRpbWVWYWx1ZSwgZmFsbGJhY2tJc28pID0+IHtcbiAgaWYgKGZhbGxiYWNrSXNvKSB7XG4gICAgY29uc3QgcGFyc2VkRmFsbGJhY2sgPSBuZXcgRGF0ZShmYWxsYmFja0lzbyk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkRmFsbGJhY2suZ2V0VGltZSgpKSkgcmV0dXJuIHBhcnNlZEZhbGxiYWNrO1xuICB9XG4gIGNvbnN0IGRhdGVQYXJ0ID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpLnNsaWNlKDAsIDEwKTtcclxuICBpZiAoIWRhdGVQYXJ0KSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB0aW1lUGFydCA9IGV4dHJhY3RUaW1lU3RhcnQodGltZVZhbHVlKSB8fCAnMDA6MDAnO1xyXG4gIGNvbnN0IGlzb0NhbmRpZGF0ZSA9IGAke2RhdGVQYXJ0fVQke3RpbWVQYXJ0fTowMGA7XHJcbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcbiAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWQ7XG59O1xuXG5jb25zdCBnZXRBcHBvaW50bWVudEVuZERhdGUgPSAoZGF0ZVZhbHVlLCB0aW1lVmFsdWUsIGZhbGxiYWNrSXNvKSA9PiB7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGRhdGVWYWx1ZSwgdGltZVZhbHVlLCBmYWxsYmFja0lzbyk7XG4gIGlmICghc3RhcnREYXRlKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKHRpbWVWYWx1ZSk7XG4gIGNvbnN0IGVuZFRva2VuID0gZW5kIHx8IHN0YXJ0O1xuICBpZiAoIWVuZFRva2VuKSByZXR1cm4gc3RhcnREYXRlO1xuICBjb25zdCBiYXNlRGF0ZVBhcnQgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSkuc2xpY2UoMCwgMTApIHx8IHN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgaWYgKCFiYXNlRGF0ZVBhcnQpIHJldHVybiBzdGFydERhdGU7XG4gIGNvbnN0IGlzb0NhbmRpZGF0ZSA9IGAke2Jhc2VEYXRlUGFydH1UJHtlbmRUb2tlbn06MDBgO1xuICBsZXQgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcbiAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgaWYgKGVuZCAmJiBzdGFydCAmJiBlbmQgPD0gc3RhcnQpIHtcbiAgICBwYXJzZWQgPSBuZXcgRGF0ZShwYXJzZWQuZ2V0VGltZSgpICsgREFZX0lOX01TKTtcbiAgfVxuICBpZiAocGFyc2VkLmdldFRpbWUoKSA8IHN0YXJ0RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9XG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5jb25zdCByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUgPSAoYXBwb2ludG1lbnQgPSB7fSkgPT4ge1xuICBpZiAoaXNWYWxpZERhdGUoYXBwb2ludG1lbnQuc3RhcnREYXRlKSkgcmV0dXJuIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZTtcbiAgcmV0dXJuIGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xufTtcblxuY29uc3QgcmVzb2x2ZUFwcG9pbnRtZW50RW5kRGF0ZSA9IChhcHBvaW50bWVudCA9IHt9KSA9PiB7XG4gIGlmIChpc1ZhbGlkRGF0ZShhcHBvaW50bWVudC5lbmREYXRlKSkgcmV0dXJuIGFwcG9pbnRtZW50LmVuZERhdGU7XG4gIGNvbnN0IGVuZERhdGUgPSBnZXRBcHBvaW50bWVudEVuZERhdGUoYXBwb2ludG1lbnQuRGF0ZSwgYXBwb2ludG1lbnQuVGltZSwgYXBwb2ludG1lbnQuc3RhcnREYXRlVGltZSk7XG4gIGlmIChlbmREYXRlKSByZXR1cm4gZW5kRGF0ZTtcbiAgcmV0dXJuIHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudCk7XG59O1xuXHJcbmNvbnN0IGlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiBmYWxzZTtcclxuICBpZiAoSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKEFDVElWRV9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSkpIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50ID0gKGFwcG9pbnRtZW50LCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcbiAgaWYgKCFpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzKG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGFwcG9pbnRtZW50LlN0YXR1cykpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudCk7XG4gIGNvbnN0IGVuZERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50KTtcbiAgaWYgKCFzdGFydERhdGUgfHwgIWVuZERhdGUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVuZERhdGUuZ2V0VGltZSgpID49IG5vd1RzO1xufTtcblxuY29uc3QgaXNBcHBvaW50bWVudE9uZ29pbmcgPSAoYXBwb2ludG1lbnQsIG5vd1RzID0gRGF0ZS5ub3coKSkgPT4ge1xuICBpZiAoIWlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMobm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwb2ludG1lbnQuU3RhdHVzKSkpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3RhcnREYXRlID0gcmVzb2x2ZUFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50KTtcbiAgY29uc3QgZW5kRGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudEVuZERhdGUoYXBwb2ludG1lbnQpO1xuICBpZiAoIXN0YXJ0RGF0ZSB8fCAhZW5kRGF0ZSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzdGFydFRzID0gc3RhcnREYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgZW5kVHMgPSBlbmREYXRlLmdldFRpbWUoKTtcbiAgcmV0dXJuIHN0YXJ0VHMgPD0gbm93VHMgJiYgZW5kVHMgPiBub3dUcztcbn07XG5cclxuY29uc3QgcGFyc2VNdWx0aVZhbHVlID0gKHZhbHVlKSA9PlxyXG4gIG5vcm1hbGl6ZVRleHQodmFsdWUpXHJcbiAgICAuc3BsaXQoJywnKVxyXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuY29uc3QgTG9hZGluZ1N0YXRlID0gKHsgbGFiZWwgPSAn0JfQsNCz0YDRg9C20LDRjiDQtNCw0L3QvdGL0LUuLi4nIH0gPSB7fSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIj57bGFiZWx9PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgRXJyb3JCYW5uZXIgPSAoeyBtZXNzYWdlIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctcm9zZS02MDAgcHgtNCBweS0zIHRleHQtd2hpdGVcIj57bWVzc2FnZX08L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFZpc2l0SGlzdG9yeUxpc3QgPSAoe1xyXG4gIHZpc2l0cyA9IFtdLFxyXG4gIGxvYWRpbmcgPSBmYWxzZSxcclxuICBlcnJvciA9ICcnLFxyXG4gIGVtcHR5TWVzc2FnZSA9ICfQmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsiDQv9GD0YHRgtCwLicsXHJcbiAgbWF4SGVpZ2h0Q2xhc3MgPSAnbWF4LWgtNjQnLFxyXG4gIHNob3dTdW1tYXJ5ID0gdHJ1ZSxcclxufSkgPT4ge1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCX0LDQs9GA0YPQttCw0LXQvCDQuNGB0YLQvtGA0LjRji4uLjwvcD47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckJhbm5lciBtZXNzYWdlPXtlcnJvcn0gLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICB7c2hvd1N1bW1hcnkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDQl9Cw0L/QuNGB0LXQuSDQt9CwIDEyINC80LXRgdGP0YbQtdCyOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dmlzaXRzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7Qn9C+0YHQu9C10LTQvdC40LUg0LLQuNC30LjRgtGLPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3BhY2UteS0yIG92ZXJmbG93LWF1dG8nLCBtYXhIZWlnaHRDbGFzcyl9PlxyXG4gICAgICAgIHt2aXNpdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgdmlzaXRzLm1hcCgodmlzaXQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzKHZpc2l0LlN0YXR1cyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHt2aXNpdC5pZCB8fCB2aXNpdC5kYXRlTGFiZWx9LSR7dmlzaXQub3JkZXJOdW1iZXJ9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgYm9yZGVyIHAtMyB0ZXh0LXhzIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItZW1lcmFsZC00MDAvNjAgYmctZW1lcmFsZC01MDAvMTAgc2hhZG93LWlubmVyIHNoYWRvdy1lbWVyYWxkLTkwMC8zMCcgOiAnYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNDAnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCS0LjQt9C40YIg4oSWe3Zpc2l0Lm9yZGVyTnVtYmVyIHx8ICfigJQnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Zpc2l0LmRhdGVMYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTEwMFwiPnt2aXNpdC5CYXJiZXIgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj57dmlzaXQuU2VydmljZXMgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAge3Zpc2l0LlN0YXR1cyAmJiA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTUwMFwiPnt2aXNpdC5TdGF0dXN9PC9wPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj57ZW1wdHlNZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTZWN0aW9uQ2FyZCA9ICh7IHRpdGxlLCBhY3Rpb25zLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtODAwLzcwIHAtNiBzaGFkb3ctbGdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICB7YWN0aW9uc31cclxuICAgIDwvZGl2PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBMaXZlQmFkZ2UgPSAoeyB0aW1lc3RhbXAsIGxhYmVsID0gJ0xJVkUnIH0pID0+IHtcclxuICBjb25zdCB0aWNraW5nTm93ID0gdXNlTm93VGljaygxMDAwKTtcclxuICBpZiAoIXRpbWVzdGFtcCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZUxhYmVsID0gZm9ybWF0TGl2ZVRpbWVzdGFtcCh0aW1lc3RhbXAsIHRpY2tpbmdOb3cpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTQwMC80MCBiZy1lbWVyYWxkLTUwMC8xMCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWVtZXJhbGQtMjAwXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMiB3LTIgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC00MDBcIiAvPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICAgIHt0aW1lTGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTEwMC84MCBub3JtYWwtY2FzZSB0cmFja2luZy1ub3JtYWxcIj57dGltZUxhYmVsfTwvc3Bhbj59XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEljb25UcmFzaCA9ICh7IGNsYXNzTmFtZSA9ICdoLTQgdy00JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIiAvPlxyXG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiIC8+XHJcbiAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25EYXNoYm9hcmQgPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGggZD1cIk0zLjUgMTEgMTIgNGw4LjUgN1wiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTYgMTB2MTBoNXYtNWgydjVoNVYxMFwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uRGF0YSA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cmVjdCB4PVwiMy41XCIgeT1cIjVcIiB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTRcIiByeD1cIjIuNVwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTMuNSA5aDE3TTMuNSAxM2gxN004IDV2MTRNMTMgNXYxNFwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uQm90ID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoIGQ9XCJNMTIgMnYzXCIgLz5cclxuICAgIDxyZWN0IHg9XCI1XCIgeT1cIjdcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTFcIiByeD1cIjRcIiAvPlxyXG4gICAgPHBhdGggZD1cIk01IDEySDNtMTggMGgtMk05IDE5djJtNi0ydjJcIiAvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMlwiIHI9XCIxLjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTRcIiBjeT1cIjEyXCIgcj1cIjEuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNOS41IDE1aDVcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvblN5c3RlbSA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0xMiAyLjV2M00xMiAxOC41djNNNC4yIDcuNWwyLjYgMS41TTE3LjIgMTVsMi42IDEuNU00LjIgMTYuNWwyLjYtMS41TTE3LjIgOWwyLjYtMS41TTIuNSAxMmgzTTE4LjUgMTJoM1wiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uRG90cyA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMS41XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFZJRVdfVEFCX0lDT05TID0ge1xyXG4gIGRhc2hib2FyZDogSWNvbkRhc2hib2FyZCxcclxuICB0YWJsZXM6IEljb25EYXRhLFxyXG4gIGJvdDogSWNvbkJvdCxcclxuICBzeXN0ZW06IEljb25TeXN0ZW0sXHJcbn07XHJcblxyXG5jb25zdCBVSV9URVhUID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgYWNjb3VudFRpdGxlOiAn0JLQsNGIINCw0LrQutCw0YPQvdGCJyxcclxuICBsb2dvdXQ6ICfQktGL0LnRgtC4JyxcclxuICBuZXdBcHBvaW50bWVudEN0YTogJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyxcclxuICBsaXZlRmFsbGJhY2s6ICdMSVZFJyxcclxufSk7XHJcblxyXG5cclxuY29uc3QgTW9kYWwgPSAoeyB0aXRsZSwgaXNPcGVuLCBvbkNsb3NlLCBjaGlsZHJlbiwgZm9vdGVyLCBtYXhXaWR0aENsYXNzID0gJ21heC13LTN4bCcgfSkgPT4ge1xyXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svNjAgcHgtNCBweS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LWgtWzkwdmhdIHctZnVsbCAke21heFdpZHRoQ2xhc3N9IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgc2hhZG93LTJ4bGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS00XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPng8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs3MHZoXSBvdmVyZmxvdy15LWF1dG8gcHgtNiBweS00IHNwYWNlLXktNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICB7Zm9vdGVyICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtMyBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNFwiPntmb290ZXJ9PC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb25maXJtRGlhbG9nID0gKHsgb3BlbiwgdGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCA9ICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMJywgY2FuY2VsTGFiZWwgPSAn0J7RgtC80LXQvdCwJywgdG9uZSA9ICduZXV0cmFsJywgb25SZXN1bHQgfSkgPT4ge1xyXG4gIGlmICghb3BlbikgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgY29uZmlybVRvbmVDbGFzcyA9ICgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRvbmUpIHtcclxuICAgICAgY2FzZSAnZGFuZ2VyJzpcclxuICAgICAgICByZXR1cm4gJ2JnLXJvc2UtNjAwIGhvdmVyOmJnLXJvc2UtNTAwJztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby01MDAnO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e29wZW59XHJcbiAgICAgIHRpdGxlPXt0aXRsZSB8fCAn0J/QvtC00YLQstC10YDQtNC40YLQtSDQtNC10LnRgdGC0LLQuNC1J31cclxuICAgICAgb25DbG9zZT17KCkgPT4gb25SZXN1bHQoZmFsc2UpfVxyXG4gICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctbWRcIlxyXG4gICAgICBmb290ZXI9e1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlc3VsdChmYWxzZSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAge2NhbmNlbExhYmVsfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdWx0KHRydWUpfSBjbGFzc05hbWU9e2Byb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSAke2NvbmZpcm1Ub25lQ2xhc3N9YH0+XHJcbiAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+e21lc3NhZ2UgfHwgJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0L/RgNC+0LTQvtC70LbQuNGC0Yw/J308L3A+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGxhYmVsLCB2YWx1ZSwgYWNjZW50ID0gJ3RleHQtaW5kaWdvLTMwMCcgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC0zIHNtOnAtNFwiPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPntsYWJlbH08L3A+XHJcbiAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ210LTEgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBzbTptdC0yIHNtOnRleHQtM3hsJywgYWNjZW50KX0+e3ZhbHVlfTwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBzZXNzaW9uLCBhY3RpdmVUYWIsIG9uQ2hhbmdlLCBvbkxvZ291dCwgbGl2ZVVwZGF0ZWRBdCwgYWN0aXZlRGF0YVRhYmxlID0gJ0FwcG9pbnRtZW50cycsIG9uU2VsZWN0VGFibGUgfSkgPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICctJztcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoaWRkZW4gdy03MiBmbGV4LXNocmluay0wIGZsZXgtY29sIGJvcmRlci1yIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzkwIHAtNSBsZzpzdGlja3kgbGc6dG9wLTAgbGc6ZmxleCBsZzpoLXNjcmVlbiBsZzpvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcGItNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS01MDBcIj57VUlfVEVYVC5hY2NvdW50VGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTEwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7VUlfVEVYVC5sb2dvdXR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2xpdmVVcGRhdGVkQXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgIDxMaXZlQmFkZ2UgdGltZXN0YW1wPXtsaXZlVXBkYXRlZEF0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4LTEgc3BhY2UteS0yIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICB7VklFV19UQUJTLm1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3RhYi5pZH0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZT8uKHRhYi5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgJ3ctZnVsbCByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctaW5kaWdvLTYwMC85MCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctaW5kaWdvLTkwMC80MCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwLzQwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMC82MCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge3RhYi5pZCA9PT0gJ3RhYmxlcycgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIHBsLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtEQVRBX1NIT1JUQ1VUUy5tYXAoKHNob3J0Y3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2hvcnRjdXRBY3RpdmUgPSBhY3RpdmVEYXRhVGFibGUgPT09IHNob3J0Y3V0LmlkICYmIGFjdGl2ZVRhYiA9PT0gJ3RhYmxlcyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzaG9ydGN1dC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0VGFibGU/LihzaG9ydGN1dC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd3LWZ1bGwgcm91bmRlZC1sZyBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG9ydGN1dEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAvMjAgdGV4dC1pbmRpZ28tMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMC82MCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshb25TZWxlY3RUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvcnRjdXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9uYXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn07XG5cclxuY29uc3QgTW9iaWxlVGFicyA9ICh7IHNlc3Npb24sIGFjdGl2ZVRhYiwgb25DaGFuZ2UsIG9uTG9nb3V0LCBsaXZlVXBkYXRlZEF0IH0pID0+IHtcclxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICctJztcclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodGFiSWQpID0+IG9uQ2hhbmdlPy4odGFiSWQpO1xyXG4gIGNvbnN0IHJlbmRlckxpdmVJbmRpY2F0b3IgPSAoKSA9PlxyXG4gICAgbGl2ZVVwZGF0ZWRBdCA/IChcclxuICAgICAgPExpdmVCYWRnZSB0aW1lc3RhbXA9e2xpdmVVcGRhdGVkQXR9IC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zNWVtXSB0ZXh0LXNsYXRlLTUwMFwiPntVSV9URVhULmxpdmVGYWxsYmFja308L3NwYW4+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0zMCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC84MCBiYWNrZHJvcC1ibHVyIGxnOmhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIHB4LTQgcHktM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi13LVs4OHB4XSBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtyZW5kZXJMaXZlSW5kaWNhdG9yKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYXgtdy1bNjB2d10gdHJ1bmNhdGVcIj57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctWzk2cHhdIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3Zlcjpib3JkZXItcm9zZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7VUlfVEVYVC5sb2dvdXR9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCBib3R0b20tMCB6LTMwIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzk1IHB4LTQgcHktMiBiYWNrZHJvcC1ibHVyIGxnOmhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgIHtWSUVXX1RBQlMubWFwKCh0YWIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IFZJRVdfVEFCX0lDT05TW3RhYi5pZF0gfHwgSWNvbkRvdHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlVGFiID09PSB0YWIuaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QodGFiLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ2ZsZXgtMSByb3VuZGVkLTJ4bCBweC0zIHB5LTIgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JnLWluZGlnby02MDAvMjAgdGV4dC1pbmRpZ28tMjAwJyA6ICd0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RhYi5sYWJlbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkNvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ214LWF1dG8gaC02IHctNicsIGlzQWN0aXZlID8gJ3RleHQtaW5kaWdvLTMwMCcgOiAndGV4dC1zbGF0ZS00MDAnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57dGFiLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBEYXNoYm9hcmRWaWV3ID0gKHsgZGF0YSwgb25PcGVuQXBwb2ludG1lbnQsIG9uT3BlblByb2ZpbGUsIG9uQ3JlYXRlQXBwb2ludG1lbnQgfSkgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nU3RhdGUgLz47XHJcbiAgY29uc3Qgc3RhdHMgPSBkYXRhLnN0YXRzIHx8IHt9O1xyXG5cclxuICBjb25zdCB1cGNvbWluZ1JhdyA9IGRhdGEuYXBwb2ludG1lbnRzPy51cGNvbWluZyB8fCBbXTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdMaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgbm93VHMgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiB1cGNvbWluZ1Jhd1xuICAgICAgLm1hcCgoYXBwdCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGdldEFwcG9pbnRtZW50RW5kRGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5hcHB0LFxuICAgICAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGFwcHQpID0+IHNob3VsZERpc3BsYXlBcHBvaW50bWVudChhcHB0LCBub3dUcykpXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICB9KVxyXG4gICAgICAuc2xpY2UoMCwgMTIpO1xyXG4gIH0sIFt1cGNvbWluZ1Jhd10pO1xyXG5cclxuICBjb25zdCBmb3JtYXRHcm91cExhYmVsID0gdXNlQ2FsbGJhY2soKGRhdGVWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlVmFsdWUgfHwgZGF0ZVZhbHVlID09PSAn0JHQtdC3INC00LDRgtGLJykgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7ZGF0ZVZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gZGF0ZVZhbHVlO1xyXG4gICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBncm91cGVkVXBjb21pbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIHVwY29taW5nTGlzdC5mb3JFYWNoKChhcHB0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGFwcHQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgICAgY29uc3QgYnVja2V0ID0gZ3JvdXBzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBidWNrZXQucHVzaChhcHB0KTtcclxuICAgICAgZ3JvdXBzLnNldChrZXksIGJ1Y2tldCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3Vwcy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4gKHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgbGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwoa2V5KSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWU6IE1hdGgubWluKFxyXG4gICAgICAgICAgLi4uaXRlbXMubWFwKChpdGVtKSA9PiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShpdGVtLkRhdGUsIGl0ZW0uVGltZSwgaXRlbS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW2Zvcm1hdEdyb3VwTGFiZWwsIHVwY29taW5nTGlzdF0pO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0FjdGlvbnMgPSBvbkNyZWF0ZUFwcG9pbnRtZW50ID8gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZUFwcG9pbnRtZW50fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgKyB7VUlfVEVYVC5uZXdBcHBvaW50bWVudEN0YX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQu9GO0YfQtdCy0YvQtSDQv9C+0LrQsNC30LDRgtC10LvQuFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBzdGF0LWdyaWRcIj5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCS0YHQtdCz0L4g0LrQu9C40LXQvdGC0L7QslwiIHZhbHVlPXtzdGF0cy50b3RhbFVzZXJzID8/IDB9IC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQkNC60YLQuNCy0L3Ri9C1INC30LDQv9C40YHQuFwiIHZhbHVlPXtzdGF0cy5hY3RpdmVBcHBvaW50bWVudHMgPz8gMH0gYWNjZW50PVwidGV4dC1lbWVyYWxkLTMwMFwiIC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4g0LfQsCDQs9C+0LRcIiB2YWx1ZT17c3RhdHMuY29uZmlybWVkWWVhciA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCh0LXQs9C+0LTQvdGPXCIgdmFsdWU9e3N0YXRzLnRvZGF5c0FwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWN5YW4tMzAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCR0LvQuNC20LDQudGI0LjQtSDQt9Cw0L/QuNGB0LhcIiBhY3Rpb25zPXt1cGNvbWluZ0FjdGlvbnN9PlxyXG4gICAgICAgIHtncm91cGVkVXBjb21pbmcubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LHQu9C40LbQsNC50YjQuNGFINC30LDQv9C40YHQtdC5LjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAge2dyb3VwZWRVcGNvbWluZy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKChhcHB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluUHJvZ3Jlc3MgPSBpc0FwcG9pbnRtZW50T25nb2luZyhhcHB0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZFByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IG9uT3BlbkFwcG9pbnRtZW50Py4oYXBwdCwgeyBhbGxvd0RlbGV0ZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd246IChldmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInICYmIG9uT3BlbkFwcG9pbnRtZW50Py4oYXBwdCwgeyBhbGxvd0RlbGV0ZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgdXBjb21pbmctY2FyZCByZWxhdGl2ZSB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzYwIGJnLXNsYXRlLTkwMC83MCBwLTQgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNzAgaG92ZXI6Ymctc2xhdGUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnAtNScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzICYmICdib3JkZXItZW1lcmFsZC00MDAvODAgc2hhZG93LVswXzBfMjVweF9yZ2JhKDE2LDE4NSwxMjksMC4yNSldJ1xuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyhhcHB0LlRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzTGlzdCA9IHBhcnNlTXVsdGlWYWx1ZShhcHB0LlNlcnZpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FwcHQuaWQgfHwgYCR7Z3JvdXAua2V5fS0ke2FwcHQuQ3VzdG9tZXJOYW1lfS0ke2FwcHQuVGltZX1gfSB7Li4uY2FyZFByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGVCYWRnZUxhYmVsKGFwcHQuRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIHNtOnRleHQtNHhsXCI+e3N0YXJ0IHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VuZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtYmFzZVwiPtC00L4ge2VuZH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBnYXAtMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgc206dGV4dC14cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzKHN0YXR1c0xhYmVsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0xhYmVsIHx8ICfQkdC10Lcg0YHRgtCw0YLRg9GB0LAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQmFyYmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JHQsNGA0LHQtdGAOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2FwcHQuQmFyYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgdGV4dC1bMTNweF0gdGV4dC1zbGF0ZS0zMDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkN1c3RvbWVyTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPy4oYXBwdC5DdXN0b21lck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1pbmRpZ28tMzAwIHNtOnRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQ3VzdG9tZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC1sZ1wiPtCR0LXQtyDQuNC80LXQvdC4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VydmljZX0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTgwMC83MCBweC0zIHB5LTEgdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS0yMDAgc206dGV4dC14c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj7QndC10YIg0LLRi9Cx0YDQsNC90L3Ri9GFINGD0YHQu9GD0LM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhcmJlckF2YXRhclBpY2tlciA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgbG9hZE9wdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFthdmF0YXJPcHRpb25zLCBzZXRBdmF0YXJPcHRpb25zXSA9IHVzZVN0YXRlKCgpID0+IGF2YXRhck9wdGlvbnNDYWNoZSB8fCBbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93R2FsbGVyeSwgc2V0U2hvd0dhbGxlcnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBub3JtYWxpemVJbWFnZVBhdGgodmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2Ygb25DaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVJbWFnZVBhdGgodmFsdWUpO1xyXG4gICAgaWYgKG5vcm1hbGl6ZWQgJiYgbm9ybWFsaXplZCAhPT0gdmFsdWUpIHtcclxuICAgICAgb25DaGFuZ2Uobm9ybWFsaXplZCk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlLCBvbkNoYW5nZV0pO1xyXG5cclxuICBjb25zdCBhdmFpbGFibGVPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRWYWx1ZSB8fCBhdmF0YXJPcHRpb25zLmluY2x1ZGVzKG5vcm1hbGl6ZWRWYWx1ZSkpIHJldHVybiBhdmF0YXJPcHRpb25zO1xyXG4gICAgcmV0dXJuIFtub3JtYWxpemVkVmFsdWUsIC4uLmF2YXRhck9wdGlvbnNdO1xyXG4gIH0sIFthdmF0YXJPcHRpb25zLCBub3JtYWxpemVkVmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSB0eXBlb2YgbG9hZE9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBsb2FkT3B0aW9ucyA6IGZldGNoQXZhdGFyT3B0aW9ucztcclxuICAgICAgICBjb25zdCBhc3NldHNQYXlsb2FkID0gYXdhaXQgbG9hZGVyKCk7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBhc3NldHMgPSBBcnJheS5pc0FycmF5KGFzc2V0c1BheWxvYWQpXHJcbiAgICAgICAgICA/IGFzc2V0c1BheWxvYWRcclxuICAgICAgICAgIDogQXJyYXkuaXNBcnJheShhc3NldHNQYXlsb2FkPy5pbWFnZXMpXHJcbiAgICAgICAgICAgID8gYXNzZXRzUGF5bG9hZC5pbWFnZXNcclxuICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICBhdmF0YXJPcHRpb25zQ2FjaGUgPSBhc3NldHM7XHJcbiAgICAgICAgc2V0QXZhdGFyT3B0aW9ucyhhc3NldHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F2YXRhciBsb2FkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbG9hZCgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtsb2FkT3B0aW9uc10pO1xyXG5cclxuICBjb25zdCBwcmV2aWV3U3JjID0gcmVzb2x2ZUFzc2V0VXJsKG5vcm1hbGl6ZWRWYWx1ZSB8fCBhdmF0YXJPcHRpb25zWzBdIHx8ICcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC01MiB3LWZ1bGwgYmctc2xhdGUtOTAwXCI+XHJcbiAgICAgICAge3ByZXZpZXdTcmMgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJldmlld1NyY30gYWx0PVwiYXZhdGFyIHByZXZpZXdcIiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuNGVtXSB0ZXh0LXNsYXRlLTUwMFwiPtC90LXRgiDRhNC+0YLQvjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS05NTAvODAgdmlhLXNsYXRlLTk1MC8xMCB0by10cmFuc3BhcmVudFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPtCi0LXQutGD0YnQtdC1INGE0L7RgtC+PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRWYWx1ZSA/IG5vcm1hbGl6ZWRWYWx1ZS5yZXBsYWNlKCcvSW1hZ2UvJywgJycpIDogJ9Cd0LUg0LLRi9Cx0YDQsNC90L4nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0dhbGxlcnkoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0yMDAgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpib3JkZXItc2xhdGUtODAwIGRpc2FibGVkOnRleHQtc2xhdGUtNTAwXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgKCFhdmF0YXJPcHRpb25zLmxlbmd0aCAmJiAhbm9ybWFsaXplZFZhbHVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAn0KHQutCw0L3QuNGA0YPRji4uLicgOiBzaG93R2FsbGVyeSA/ICfQodC60YDRi9GC0Ywg0LPQsNC70LXRgNC10Y4nIDogJ9Ce0YLQutGA0YvRgtGMINCz0LDQu9C10YDQtdGOJ31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoJycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLXJvc2UtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQkdC10Lcg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dHYWxsZXJ5ICYmIGF2YXRhck9wdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAge2F2YXRhck9wdGlvbnMubWFwKChwcmVzZXQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gcHJlc2V0ID09PSBub3JtYWxpemVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShwcmVzZXQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtMnhsIGJvcmRlciBwLTEuNSB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOmJnLXNsYXRlLTgwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzE1JyA6ICdib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc29sdmVBc3NldFVybChwcmVzZXQpfSBhbHQ9XCJhdmF0YXIgcHJlc2V0XCIgY2xhc3NOYW1lPVwiaC0yMCB3LWZ1bGwgcm91bmRlZC14bCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshYXZhdGFyT3B0aW9ucy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7QsdCw0LLRjNGC0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9Cw0L/QutGDIC9JbWFnZSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDQsNCy0LDRgtCw0YAuPC9wPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgREFZX0lOREVYX0xPT0tVUCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZnVsbCA9IFsn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNCwJywgJ9GH0LXRgtCy0LXRgNCzJywgJ9C/0Y/RgtC90LjRhtCwJywgJ9GB0YPQsdCx0L7RgtCwJywgJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnXTtcclxuICBjb25zdCBzaG9ydCA9IFsn0L/QvScsICfQstGCJywgJ9GB0YAnLCAn0YfRgicsICfQv9GCJywgJ9GB0LEnLCAn0LLRgSddO1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGZ1bGwuZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcclxuICAgIG1hcFtuYW1lXSA9IGluZGV4O1xyXG4gIH0pO1xyXG4gIHNob3J0LmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICBtYXBbbmFtZV0gPSBpbmRleDtcclxuICB9KTtcclxuICByZXR1cm4gbWFwO1xyXG59KSgpO1xyXG5jb25zdCBnZXREYXlJbmRleCA9ICh2YWx1ZSA9ICcnKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShEQVlfSU5ERVhfTE9PS1VQW25vcm1hbGl6ZWRdKSA/IERBWV9JTkRFWF9MT09LVVBbbm9ybWFsaXplZF0gOiA3O1xyXG59O1xyXG5jb25zdCBmb3JtYXRTY2hlZHVsZURheVNob3J0ID0gKGRhdGVWYWx1ZSwgZmFsbGJhY2tEYXkgPSAnJykgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmIChzYWZlRGF0ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgd2Vla2RheTogJ3Nob3J0JyB9KS5mb3JtYXQocGFyc2VkKS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBub3JtYWxpemVkRmFsbGJhY2sgPSBub3JtYWxpemVUZXh0KGZhbGxiYWNrRGF5KTtcclxuICByZXR1cm4gbm9ybWFsaXplZEZhbGxiYWNrID8gbm9ybWFsaXplZEZhbGxiYWNrLnNsaWNlKDAsIDIpIDogJyc7XHJcbn07XHJcbmNvbnN0IGZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsID0gKGRhdGVWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmICghc2FmZURhdGUpIHJldHVybiAnJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyBkYXk6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcgfSkuZm9ybWF0KHBhcnNlZCkucmVwbGFjZSgnLicsICcnKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn07XHJcbmNvbnN0IGlzVG9kYXlEYXRlID0gKGRhdGVWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmICghc2FmZURhdGUpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgaWYgKE51bWJlci5pc05hTih0YXJnZXQuZ2V0VGltZSgpKSkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiAoXHJcbiAgICB0b2RheS5nZXRGdWxsWWVhcigpID09PSB0YXJnZXQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgdG9kYXkuZ2V0TW9udGgoKSA9PT0gdGFyZ2V0LmdldE1vbnRoKCkgJiZcclxuICAgIHRvZGF5LmdldERhdGUoKSA9PT0gdGFyZ2V0LmdldERhdGUoKVxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHBhcnNlU2xvdFRpbWVNaW51dGVzID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2ggPSBub3JtYWxpemVUZXh0KHZhbHVlKS5tYXRjaCgvKFxcZHsxLDJ9KTooXFxkezJ9KS8pO1xyXG4gIGlmICghbWF0Y2gpIHJldHVybiAwO1xyXG4gIHJldHVybiBOdW1iZXIobWF0Y2hbMV0pICogNjAgKyBOdW1iZXIobWF0Y2hbMl0pO1xyXG59O1xyXG5jb25zdCBnZXRTY2hlZHVsZVNvcnRWYWx1ZSA9IChzbG90KSA9PiB7XHJcbiAgY29uc3Qgc2FmZURhdGUgPSBub3JtYWxpemVUZXh0KHNsb3QuRGF0ZSk7XHJcbiAgaWYgKHNhZmVEYXRlKSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtzYWZlRGF0ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZWQuZ2V0VGltZSgpICsgcGFyc2VTbG90VGltZU1pbnV0ZXMocGFyc2VUaW1lUmFuZ2VQYXJ0cyhzbG90LldlZWspLnN0YXJ0KSAqIDYwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBiYXNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxXzAwMF8wMDBfMDAwO1xyXG4gIGNvbnN0IGRheUluZGV4ID0gZ2V0RGF5SW5kZXgoc2xvdC5EYXlPZldlZWspO1xyXG4gIHJldHVybiBiYXNlICsgZGF5SW5kZXggKiAxMDAwMCArIHBhcnNlU2xvdFRpbWVNaW51dGVzKHBhcnNlVGltZVJhbmdlUGFydHMoc2xvdC5XZWVrKS5zdGFydCB8fCBzbG90LldlZWspICogMTA7XHJcbn07XHJcblxyXG5jb25zdCBSYXRpbmdTbGlkZXIgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRlbnNlID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJhdGluZ1ZhbHVlID0gTnVtYmVyKHZhbHVlIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgY29uc3Qgd3JhcHBlckNsYXNzID0gZGVuc2VcclxuICAgID8gJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTEuNSdcclxuICAgIDogJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTInO1xyXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBkZW5zZVxyXG4gICAgPyAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICA6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMCc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT5cclxuICAgICAgICA8c3Bhbj7QoNC10LnRgtC40L3Qszwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmF0aW5nVmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXtSQVRJTkdfTUlOfSBtYXg9e1JBVElOR19NQVh9IHN0ZXA9e1JBVElOR19TVEVQfSB2YWx1ZT17TnVtYmVyKHZhbHVlKSB8fCBSQVRJTkdfTUFYfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEJhcmJlcnNWaWV3ID0gKHtcclxuICBiYXJiZXJzID0gW10sXHJcbiAgc2NoZWR1bGVzID0gW10sXHJcbiAgbG9hZEF2YXRhck9wdGlvbnMsXHJcbiAgb25GaWVsZENoYW5nZSxcclxuICBvblNhdmUsXHJcbiAgb25BZGQsXHJcbiAgb25EZWxldGUsXHJcbiAgb25TY2hlZHVsZVVwZGF0ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuICBjb25zdCBbZHJhZnRCYXJiZXIsIHNldERyYWZ0QmFyYmVyXSA9IHVzZVN0YXRlKGJ1aWxkTmV3QmFyYmVyU3RhdGUpO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdG9yID0gKG1vZGUsIHRhcmdldElkID0gbnVsbCkgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKGJ1aWxkTmV3QmFyYmVyU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IHRydWUsIG1vZGUsIHRhcmdldElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdG9yID0gKCkgPT4gc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgaXNDcmVhdGVNb2RlID0gZWRpdG9yU3RhdGUubW9kZSA9PT0gJ2NyZWF0ZSc7XHJcbiAgY29uc3QgYWN0aXZlQmFyYmVyID0gYmFyYmVycy5maW5kKChiYXJiZXIpID0+IGJhcmJlci5pZCA9PT0gZWRpdG9yU3RhdGUudGFyZ2V0SWQpIHx8IG51bGw7XHJcbiAgY29uc3Qgd29ya2luZ0JhcmJlciA9IGlzQ3JlYXRlTW9kZSA/IGRyYWZ0QmFyYmVyIDogYWN0aXZlQmFyYmVyO1xyXG5cclxuICBjb25zdCB3b3JraW5nQmFyYmVyU2NoZWR1bGUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghd29ya2luZ0JhcmJlcj8ubmFtZSkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplVGV4dCh3b3JraW5nQmFyYmVyLm5hbWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVzXHJcbiAgICAgIC5maWx0ZXIoKHNsb3QpID0+IG5vcm1hbGl6ZVRleHQoc2xvdC5CYXJiZXIpLnRvTG93ZXJDYXNlKCkgPT09IHRhcmdldClcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGdldFNjaGVkdWxlU29ydFZhbHVlKGEpIC0gZ2V0U2NoZWR1bGVTb3J0VmFsdWUoYikpO1xyXG4gIH0sIFt3b3JraW5nQmFyYmVyLCBzY2hlZHVsZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB2YWx1ZSB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUJhcmJlcikge1xyXG4gICAgICBvbkZpZWxkQ2hhbmdlPy4oYWN0aXZlQmFyYmVyLmlkLCBmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIG9uQWRkPy4oZHJhZnRCYXJiZXIpO1xyXG4gICAgICBzZXREcmFmdEJhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVCYXJiZXIpIHtcclxuICAgICAgb25TYXZlPy4oYWN0aXZlQmFyYmVyKTtcclxuICAgIH1cclxuICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NyZWF0ZU1vZGUgJiYgYWN0aXZlQmFyYmVyKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG9uRGVsZXRlPy4oYWN0aXZlQmFyYmVyKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmZpbmFsbHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXN1bHQuZmluYWxseSgoKSA9PiBjbG9zZUVkaXRvcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU3RhdHVzQmFkZ2UgPSAoYmFyYmVyKSA9PlxyXG4gICAgYmFyYmVyID8gKFxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICdyb3VuZGVkLWZ1bGwgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZScsXHJcbiAgICAgICAgICBiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JnLWVtZXJhbGQtNTAwLzE1IHRleHQtZW1lcmFsZC0yMDAnIDogJ2JnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyBBQ1RJVkVfQkFSQkVSX0xBQkVMIDogSElEREVOX0JBUkJFUl9MQUJFTH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IGNhblN1Ym1pdCA9IGlzQ3JlYXRlTW9kZSA/IEJvb2xlYW4od29ya2luZ0JhcmJlcj8ubmFtZT8udHJpbSgpICYmIHdvcmtpbmdCYXJiZXI/LnBhc3N3b3JkPy50cmltKCkpIDogQm9vbGVhbih3b3JraW5nQmFyYmVyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2NoZWR1bGVQaWNrZXJDaGFuZ2UgPSBhc3luYyAoc2xvdCwgbmV4dFZhbHVlKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIG9uU2NoZWR1bGVVcGRhdGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IHNsb3RJZCA9IGdldFJlY29yZElkKHNsb3QpO1xyXG4gICAgaWYgKCFzbG90SWQpIHJldHVybjtcclxuICAgIGF3YWl0IG9uU2NoZWR1bGVVcGRhdGUoc2xvdElkLCB7XHJcbiAgICAgIEJhcmJlcjogc2xvdC5CYXJiZXIsXHJcbiAgICAgIERhdGU6IHNsb3QuRGF0ZSxcclxuICAgICAgRGF5T2ZXZWVrOiBzbG90LkRheU9mV2VlayxcclxuICAgICAgV2VlazogbmV4dFZhbHVlLFxyXG4gICAgICBUaW1lOiBuZXh0VmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQkdCw0YDQsdC10YDRi1wiXHJcbiAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2NyZWF0ZScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAvOTAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdyBzaGFkb3ctZW1lcmFsZC05MDAvNDAgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtiYXJiZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KHQv9C40YHQvtC6INCx0LDRgNCx0LXRgNC+0LIg0L/QvtC60LAg0L/Rg9GB0YIuINCU0L7QsdCw0LLRjNGC0LUg0L/QtdGA0LLQvtCz0L4g0YHQvtGC0YDRg9C00L3QuNC60LAuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhdmF0YXJTcmMgPSByZXNvbHZlQXNzZXRVcmwoYmFyYmVyLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGhvbmVMYWJlbCA9IGJhcmJlci5waG9uZSA/IGZvcm1hdFBob25lSW5wdXQoYmFyYmVyLnBob25lKSA6ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJhdGluZ0xhYmVsID0gTnVtYmVyKGJhcmJlci5yYXRpbmcgfHwgUkFUSU5HX01BWCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2JhcmJlci5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignZWRpdCcsIGJhcmJlci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS05MDAvNTAgcC00IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNiB3LTE2IGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFyU3JjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhclNyY30gYWx0PXtiYXJiZXIubmFtZSB8fCAnYXZhdGFyJ30gY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHJvdW5kZWQtMnhsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IHctMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtMnhsIGJnLXNsYXRlLTgwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhiYXJiZXIubmFtZSB8fCAnQicpLnNsaWNlKDAsIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWJzb2x1dGUgLWJvdHRvbS0xIC1yaWdodC0xIGgtMyB3LTMgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1zbGF0ZS05MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JnLWVtZXJhbGQtNDAwJyA6ICdiZy1zbGF0ZS02MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclN0YXR1c0JhZGdlKGJhcmJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBnYXAteS0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMTAgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWluZGlnby0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4piFIHtyYXRpbmdMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+e3Bob25lTGFiZWx9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtiYXJiZXIudGVsZWdyYW1JZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPkB7YmFyYmVyLnRlbGVncmFtSWR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YmFyYmVyLmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj57YmFyYmVyLmRlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwJyA6IHdvcmtpbmdCYXJiZXI/Lm5hbWUgfHwgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LHQsNGA0LHQtdGA0LAnfVxyXG4gICAgICAgIGlzT3Blbj17ZWRpdG9yU3RhdGUub3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUVkaXRvcn1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctNHhsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFpc0NyZWF0ZU1vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUVkaXRvcn0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA/ICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCcgOiAnYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNDcmVhdGVNb2RlID8gJ9CU0L7QsdCw0LLQuNGC0YwnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3dvcmtpbmdCYXJiZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICA8QmFyYmVyQXZhdGFyUGlja2VyIHZhbHVlPXt3b3JraW5nQmFyYmVyLmF2YXRhclVybH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2F2YXRhclVybCcsIHZhbHVlKX0gbG9hZE9wdGlvbnM9e2xvYWRBdmF0YXJPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgcC02IHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UmF0aW5nU2xpZGVyIGRlbnNlIHZhbHVlPXt3b3JraW5nQmFyYmVyLnJhdGluZ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3JhdGluZycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5wYXNzd29yZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3Bhc3N3b3JkJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAg0KbQstC10YJcclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17L14jLy50ZXN0KHdvcmtpbmdCYXJiZXIuY29sb3IgfHwgJycpID8gd29ya2luZ0JhcmJlci5jb2xvciA6ICcjNmQyOGQ5J31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnY29sb3InLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xNiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNTAwIGJnLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIuZGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdkZXNjcmlwdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgdy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLnBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIudGVsZWdyYW1JZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3RlbGVncmFtSWQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2lzQWN0aXZlJywgISh3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSkpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLTJ4bCBib3JkZXIgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICB3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdib3JkZXItZW1lcmFsZC00MDAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTIwMCcgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjAgdGV4dC1zbGF0ZS00MDAnXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/IEFDVElWRV9CQVJCRVJfTEFCRUwgOiBISURERU5fQkFSQkVSX0xBQkVMfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmxleCBoLTUgdy01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTMwMCBiZy1lbWVyYWxkLTQwMC8yMCB0ZXh0LWVtZXJhbGQtMTAwJyA6ICdib3JkZXItc2xhdGUtNjAwIHRleHQtc2xhdGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7d29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAn4pyTJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCg0LDRgdC/0LjRgdCw0L3QuNC1PC9wPlxyXG4gICAgICAgICAgICAgICAge3dvcmtpbmdCYXJiZXJTY2hlZHVsZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCB4bDpncmlkLWNvbHMtNSAyeGw6Z3JpZC1jb2xzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d29ya2luZ0JhcmJlclNjaGVkdWxlLm1hcCgoc2xvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdElkID0gZ2V0UmVjb3JkSWQoc2xvdCkgfHwgYCR7c2xvdC5CYXJiZXJ9LSR7c2xvdC5EYXRlfS0ke3Nsb3QuV2Vla31gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVZhbHVlID0gc2xvdC5XZWVrIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5TGFiZWwgPSBmb3JtYXRTY2hlZHVsZURheVNob3J0KHNsb3QuRGF0ZSwgc2xvdC5EYXlPZldlZWspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZm9ybWF0U2NoZWR1bGVEYXRlTGFiZWwoc2xvdC5EYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVG9kYXlTbG90ID0gaXNUb2RheURhdGUoc2xvdC5EYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Nsb3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBiZy1zbGF0ZS05MDAvNjAgcC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXlTbG90ID8gJ2JvcmRlci1lbWVyYWxkLTQwMC83MCByaW5nLTEgcmluZy1lbWVyYWxkLTQwMC8zMCcgOiAnYm9yZGVyLXNsYXRlLTgwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSB0ZXh0LWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2RheUxhYmVsLCBkYXRlTGFiZWxdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgwrcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZShzbG90LCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC0zIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCy0YDQtdC80LXQvdC4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLRgNC10LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC70Y8g0Y3RgtC+0LPQviDQsdCw0YDQsdC10YDQsCDQvdC10YIg0LfQsNC/0LvQsNC90LjRgNC+0LLQsNC90L3Ri9GFINGB0LvQvtGC0L7Qsi48L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAsINGH0YLQvtCx0Ysg0LjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUuPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2VydmljZXNWaWV3ID0gKHsgc2VydmljZXMgPSBbXSwgYmFyYmVycyA9IFtdLCBvbkZpZWxkQ2hhbmdlLCBvblByaWNlQ2hhbmdlLCBvbkRlbGV0ZSwgb25BZGQgfSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuICBjb25zdCBbZHJhZnRTZXJ2aWNlLCBzZXREcmFmdFNlcnZpY2VdID0gdXNlU3RhdGUoYnVpbGROZXdTZXJ2aWNlU3RhdGUpO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdG9yID0gKG1vZGUsIHRhcmdldElkID0gbnVsbCkgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZShidWlsZE5ld1NlcnZpY2VTdGF0ZSgpKTtcclxuICAgIH1cclxuICAgIHNldEVkaXRvclN0YXRlKHsgb3BlbjogdHJ1ZSwgbW9kZSwgdGFyZ2V0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VFZGl0b3IgPSAoKSA9PiBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IGZhbHNlLCBtb2RlOiAnZWRpdCcsIHRhcmdldElkOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBpc0NyZWF0ZU1vZGUgPSBlZGl0b3JTdGF0ZS5tb2RlID09PSAnY3JlYXRlJztcclxuICBjb25zdCBhY3RpdmVTZXJ2aWNlID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gZWRpdG9yU3RhdGUudGFyZ2V0SWQpIHx8IG51bGw7XHJcbiAgY29uc3Qgd29ya2luZ1NlcnZpY2UgPSBpc0NyZWF0ZU1vZGUgPyBkcmFmdFNlcnZpY2UgOiBhY3RpdmVTZXJ2aWNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWVsZENoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB2YWx1ZSB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgb25GaWVsZENoYW5nZT8uKGFjdGl2ZVNlcnZpY2UuaWQsIGZpZWxkLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpY2VDaGFuZ2UgPSAoYmFyYmVySWQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZSgocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIHByaWNlczogeyAuLi4ocHJldi5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgb25QcmljZUNoYW5nZT8uKGFjdGl2ZVNlcnZpY2UuaWQsIGJhcmJlcklkLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgaWYgKCF3b3JraW5nU2VydmljZT8ubmFtZT8udHJpbSgpKSByZXR1cm47XHJcbiAgICAgIG9uQWRkPy4oZHJhZnRTZXJ2aWNlKTtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKGJ1aWxkTmV3U2VydmljZVN0YXRlKCkpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VFZGl0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVMb2NhbCA9ICgpID0+IHtcclxuICAgIGlmICghaXNDcmVhdGVNb2RlICYmIGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gb25EZWxldGU/LihhY3RpdmVTZXJ2aWNlKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmZpbmFsbHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXN1bHQuZmluYWxseSgoKSA9PiBjbG9zZUVkaXRvcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VydmljZVByaWNlU3VtbWFyeSA9IChzZXJ2aWNlKSA9PiB7XHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgbGFiZWw6ICfigJQnLCBkZXRhaWxzOiAnJyB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWVzID0gYmFyYmVyc1xyXG4gICAgICAubWFwKChiYXJiZXIpID0+IE51bWJlcihzZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0pKVxyXG4gICAgICAuZmlsdGVyKChwcmljZSkgPT4gTnVtYmVyLmlzRmluaXRlKHByaWNlKSAmJiBwcmljZSA+PSAwKTtcclxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiAn0KbQtdC90Ysg0L3QtSDQt9Cw0LTQsNC90YsnLFxyXG4gICAgICAgIGRldGFpbHM6IGJhcmJlcnMubGVuZ3RoID8gJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINC00L7QsdCw0LLQuNGC0YwnIDogJ9Cd0LXRgiDQsdCw0YDQsdC10YDQvtCyINC00LvRjyDQvdCw0LfQvdCw0YfQtdC90LjRjycsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuICAgIGNvbnN0IGNvdW50ID0gdmFsdWVzLmxlbmd0aDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiBtaW4gPT09IG1heCA/IGZvcm1hdEN1cnJlbmN5KG1pbikgOiBgJHtmb3JtYXRDdXJyZW5jeShtaW4pfSDigJMgJHtmb3JtYXRDdXJyZW5jeShtYXgpfWAsXHJcbiAgICAgIGRldGFpbHM6IGDQlNC70Y8gJHtjb3VudH0gJHtwbHVyYWxpemUoY291bnQsIFsn0LHQsNGA0LHQtdGA0LAnLCAn0LHQsNGA0LHQtdGA0LAnLCAn0LHQsNGA0LHQtdGA0L7QsiddKX1gLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5TdWJtaXQgPSBpc0NyZWF0ZU1vZGUgPyBCb29sZWFuKHdvcmtpbmdTZXJ2aWNlPy5uYW1lPy50cmltKCkpIDogdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignY3JlYXRlJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTYwMC85MCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93IHNoYWRvdy1lbWVyYWxkLTkwMC80MCBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzZXJ2aWNlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDRg9GB0LvRg9CzINC/0YPRgdGCLiDQlNC+0LHQsNCy0YzRgtC1INC/0LXRgNCy0YPRjiDRg9GB0LvRg9Cz0YMuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBzZXJ2aWNlUHJpY2VTdW1tYXJ5KHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignZWRpdCcsIHNlcnZpY2UuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS05MDAvNTAgcC00IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e3NlcnZpY2UubmFtZSB8fCAn0JHQtdC3INC90LDQt9Cy0LDQvdC40Y8nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctc2xhdGUtODAwIHB4LTIgcHktMC41IHRleHQteHMgdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmR1cmF0aW9uID8gYCR7c2VydmljZS5kdXJhdGlvbn0g0LzQuNC9YCA6ICfigJQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTEwMFwiPntzdW1tYXJ5LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3N1bW1hcnkuZGV0YWlsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17aXNDcmVhdGVNb2RlID8gJ9Cd0L7QstCw0Y8g0YPRgdC70YPQs9CwJyA6IHdvcmtpbmdTZXJ2aWNlPy5uYW1lIHx8ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGD0YHQu9GD0LPQuCd9XHJcbiAgICAgICAgaXNPcGVuPXtlZGl0b3JTdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlRWRpdG9yfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy0zeGxcIlxyXG4gICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7IWlzQ3JlYXRlTW9kZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVMb2NhbH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VFZGl0b3J9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBjYW5TdWJtaXQgPyAnYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC01MDAnIDogJ2JnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMJyA6ICfQk9C+0YLQvtCy0L4nfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHt3b3JraW5nU2VydmljZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nU2VydmljZS5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC/0YDQuNC80LXRgCwg0YHRgtGA0LjQttC60LBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjCwg0LzQuNC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbWluPXs1fVxyXG4gICAgICAgICAgICAgICAgICBzdGVwPXs1fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UuZHVyYXRpb24gPz8gJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmllbGRDaGFuZ2UoJ2R1cmF0aW9uJywgZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJyA/ICcnIDogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdpc0FjdGl2ZScsICEod29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlKSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC0yeGwgYm9yZGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIHdvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdib3JkZXItZW1lcmFsZC00MDAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTIwMCcgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjAgdGV4dC1zbGF0ZS00MDAnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UgPyBBQ1RJVkVfU0VSVklDRV9MQUJFTCA6IEhJRERFTl9TRVJWSUNFX0xBQkVMfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAnZmxleCBoLTUgdy01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYm9yZGVyLWVtZXJhbGQtMzAwIGJnLWVtZXJhbGQtNDAwLzIwIHRleHQtZW1lcmFsZC0xMDAnIDogJ2JvcmRlci1zbGF0ZS02MDAgdGV4dC1zbGF0ZS01MDAnXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnXFx1MjcxMycgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCm0LXQvdGLINC/0L4g0LHQsNGA0LHQtdGA0LDQvDwvcD5cclxuICAgICAgICAgICAgICB7YmFyYmVycy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtiYXJiZXIuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntiYXJiZXIubmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UucHJpY2VzPy5bYmFyYmVyLmlkXSA/PyAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlUHJpY2VDaGFuZ2UoYmFyYmVyLmlkLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXJpZ2h0IHRleHQtc20gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QlNC+0LHQsNCy0YzRgtC1INCx0LDRgNCx0LXRgNC+0LIsINGH0YLQvtCx0Ysg0L3QsNC30L3QsNGH0LDRgtGMINGG0LXQvdGLLjwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0YPRgdC70YPQs9GDINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0Q2VsbCA9ICh7IHZhbHVlLCBvcHRpb25zID0gW10sIG9uQ29tbWl0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHRvcDogMCwgbGVmdDogMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghYW5jaG9yUmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3QgPSBhbmNob3JSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHBhbmVsV2lkdGggPSAzMjA7XHJcbiAgICBjb25zdCBwYW5lbEhlaWdodCA9IDM2MDtcclxuICAgIGNvbnN0IG5leHRMZWZ0ID0gTWF0aC5taW4ocmVjdC5sZWZ0LCB3aW5kb3cuaW5uZXJXaWR0aCAtIHBhbmVsV2lkdGggLSAxNik7XHJcbiAgICBjb25zdCBuZXh0VG9wID0gTWF0aC5taW4ocmVjdC5ib3R0b20gKyA4LCB3aW5kb3cuaW5uZXJIZWlnaHQgLSBwYW5lbEhlaWdodCAtIDE2KTtcclxuICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgdG9wOiBNYXRoLm1heCgxNiwgbmV4dFRvcCksXHJcbiAgICAgIGxlZnQ6IE1hdGgubWF4KDE2LCBuZXh0TGVmdCksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIH07XHJcbiAgfSwgW29wZW4sIHVwZGF0ZVBvc2l0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhvcHRpb24pID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4ucHJldiwgb3B0aW9uXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNvbW1pdChkcmFmdC5qb2luKCcsICcpKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSBkcmFmdC5sZW5ndGggPyBkcmFmdC5qb2luKCcsICcpIDogJ9CS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPQuCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWF4LWgtWzQwcHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2UtcHJlLXdyYXBcIj57c3VtbWFyeX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJlxyXG4gICAgICAgIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIG1heC13LXhzIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC85NSBwLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogYCR7cG9zaXRpb24udG9wfXB4YCwgbGVmdDogYCR7cG9zaXRpb24ubGVmdH1weGAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7Qo9GB0LvRg9Cz0Lg8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0xIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJhZnQocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtkcmFmdC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yIGZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkcmFmdC5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNTAwLzIwIHB4LTIgcHktMSB0ZXh0LXhzIHRleHQtaW5kaWdvLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcHRpb24oc2VydmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPj88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IHNwYWNlLXktMSBvdmVyZmxvdy15LWF1dG8gcHItMVwiPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzPC9wPn1cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZHJhZnQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIHB4LTMgcHktMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC82MCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMiB0ZXh0LWxlZnRcIj57b3B0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0FjdGl2ZX0gb25DaGFuZ2U9eygpID0+IHRvZ2dsZU9wdGlvbihvcHRpb24pfSBjbGFzc05hbWU9XCJoLTQgdy00IHJvdW5kZWQgYm9yZGVyLXNsYXRlLTUwMCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldERyYWZ0KFtdKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaW1lUmFuZ2VQaWNrZXIgPSAoe1xyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHRpdGxlID0gJ9CS0YvQsdC+0YAg0LLRgNC10LzQtdC90LgnLFxyXG4gIHBsYWNlaG9sZGVyID0gJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJyxcclxuICBidXR0b25DbGFzc05hbWUgPSAndy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlIHdoaXRlc3BhY2Utbm93cmFwJyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbeyBzdGFydCwgZW5kIH0sIHNldERyYWZ0XSA9IHVzZVN0YXRlKCgpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplSG91clZhbHVlID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgW2hvdXJzXSA9IGlucHV0VmFsdWUuc3BsaXQoJzonKTtcclxuICAgIGlmICghaG91cnMpIHJldHVybiAnJztcclxuICAgIHJldHVybiBgJHtob3Vycy5wYWRTdGFydCgyLCAnMCcpfTowMGA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oYnVpbGRUaW1lUmFuZ2VWYWx1ZShzdGFydCwgZW5kKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oJzAnKTtcclxuICAgIHNldERyYWZ0KHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH0pO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfT5cclxuICAgICAgICB7dmFsdWUgPyB2YWx1ZSA6IHBsYWNlaG9sZGVyfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctbWRcIlxyXG4gICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCX0LDQutGA0YvRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INCy0YDQtdC80Y8g0LTQu9GPINC90LDRh9Cw0LvQsCDQuCDQt9Cw0LLQtdGA0YjQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xlYXJ9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDBcIj5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBnYXAtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC82MCBwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwXCI+0KHRgtCw0YDRgjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMzYwMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgc3RhcnQ6IG5vcm1hbGl6ZUhvdXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0zMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMFwiPtCk0LjQvdC40Yg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjM2MDBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VuZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlbmQ6IG5vcm1hbGl6ZUhvdXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0zMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgRWRpdGFibGVDZWxsID0gKHsgcmVjb3JkLCBjb2x1bW4sIG9wdGlvbnMsIG9uVXBkYXRlLCBvbk9wZW5Qcm9maWxlLCB0YWJsZUlkIH0pID0+IHtcclxuICBjb25zdCByZWNvcmRJZCA9IHJlY29yZD8uaWQgfHwgcmVjb3JkPy5JZCB8fCByZWNvcmQ/LklEIHx8IHJlY29yZD8ucmVjb3JkSWQ7XHJcbiAgY29uc3QgdmFsdWUgPSByZWNvcmRbY29sdW1uLmtleV07XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSh2YWx1ZSA/PyAnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREcmFmdCh2YWx1ZSA/PyAnJyk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGlmICghY29sdW1uLmVkaXRhYmxlKSB7XHJcbiAgICBpZiAoY29sdW1uLmlzUHJvZmlsZUxpbmspIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uT3BlblByb2ZpbGU/Lih2YWx1ZSl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICB7dmFsdWUgfHwgJy0nfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMjAwIHdoaXRlc3BhY2Utbm9ybWFsIGJyZWFrLXdvcmRzIGxlYWRpbmctdGlnaHRcIj57dmFsdWUgfHwgJy0nfTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21taXQgPSAobmV4dFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0gbmV4dFZhbHVlICE9PSB1bmRlZmluZWQgPyBuZXh0VmFsdWUgOiBkcmFmdDtcclxuICAgIGlmICgodmFsdWUgPz8gJycpID09PSAocGF5bG9hZCA/PyAnJykpIHJldHVybjtcclxuICAgIG9uVXBkYXRlKHJlY29yZElkLCB7IFtjb2x1bW4ua2V5XTogcGF5bG9hZCB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoXHJcbiAgICAodGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgY29sdW1uLmtleSA9PT0gJ1RpbWUnKSB8fFxyXG4gICAgKHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnICYmIGNvbHVtbi5rZXkgPT09ICdXZWVrJylcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhuZXh0VmFsdWUpID0+IGNvbW1pdChuZXh0VmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4oCUXCJcclxuICAgICAgICB0aXRsZT17dGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgdC70L7RgtC+0LInIDogJ9CS0YvQsdC+0YAg0LLRgNC10LzQtdC90LgnfVxyXG4gICAgICAgIGJ1dHRvbkNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChjb2x1bW4udHlwZSkge1xyXG4gICAgY2FzZSAnc2VsZWN0Jzoge1xyXG4gICAgICBjb25zdCBvcHRpb25MaXN0ID0gY29sdW1uLm9wdGlvbnNLZXkgPyBvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXSA6IFtdO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb21taXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tPC9vcHRpb24+XHJcbiAgICAgICAgICB7b3B0aW9uTGlzdC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gJzEnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb21taXQoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPyAndHJ1ZScgOiAnJyl9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgKTtcclxuICAgIGNhc2UgJ211bHRpLXNlbGVjdCc6XHJcbiAgICAgIHJldHVybiA8TXVsdGlTZWxlY3RDZWxsIHZhbHVlPXt2YWx1ZX0gb3B0aW9ucz17b3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW119IG9uQ29tbWl0PXtjb21taXR9IC8+O1xyXG4gICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e3ZhbHVlID8gU3RyaW5nKHZhbHVlKS5zbGljZSgwLCAxMCkgOiAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RyYWZ0IHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdChldmVudC50YXJnZXQudmFsdWUpfSBvbkJsdXI9eygpID0+IGNvbW1pdCgpfSBvbktleURvd249eyhldmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGNvbW1pdCgpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ29sdW1uTWVudSA9ICh7IGNvbHVtbnMsIGhpZGRlbkNvbHVtbnMgPSBbXSwgb25Ub2dnbGUgfSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT3V0c2lkZUNsaWNrKHJlZiwgb3BlbiA/ICgpID0+IHNldE9wZW4oZmFsc2UpIDogbnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIHNtOnctYXV0b1wiXG4gICAgICA+XG4gICAgICAgINCf0L7Qu9GPXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTMwIG10LTIgdy02NCBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwLTMgc2hhZG93LTJ4bCBzbTpsZWZ0LWF1dG8gc206cmlnaHQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17IWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSl9IG9uQ2hhbmdlPXsoKSA9PiBvblRvZ2dsZShjb2x1bW4ua2V5KX0gLz5cbiAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cclxuY29uc3QgTXVsdGlTZWxlY3RDaGVja2JveGVzID0gKHsgbGFiZWwsIG9wdGlvbnMgPSBbXSwgdmFsdWUgPSBbXSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnIH0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBwYXJzZU11bHRpVmFsdWUodmFsdWUpKSwgW3ZhbHVlXSk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gcXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghbm9ybWFsaXplZFF1ZXJ5KSByZXR1cm4gb3B0aW9ucztcclxuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnkpKTtcclxuICB9LCBbb3B0aW9ucywgbm9ybWFsaXplZFF1ZXJ5XSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9IChvcHRpb24pID0+IHtcclxuICAgIGlmICghb25DaGFuZ2UpIHJldHVybjtcclxuICAgIGNvbnN0IGV4aXN0cyA9IHNlbGVjdGVkLmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICBjb25zdCBuZXh0ID0gZXhpc3RzID8gc2VsZWN0ZWQuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pIDogWy4uLnNlbGVjdGVkLCBvcHRpb25dO1xyXG4gICAgb25DaGFuZ2UobmV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3NlbGVjdGVkLmxlbmd0aCA/IGAke3NlbGVjdGVkLmxlbmd0aH0g0LLRi9Cx0YDQsNC90L5gIDogJ9Cd0LUg0LLRi9Cx0YDQsNC90L4nfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgIHtzZWxlY3RlZC5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGtleT17c2VydmljZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8xMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShzZXJ2aWNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+Pzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtMyBweS0yXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtc2xhdGUtNDAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17MS41fSBkPVwiTTIxIDIxbC00LjM1LTQuMzVtMCAwQTcuNSA3LjUgMCAxMDE2LjY1IDE2LjY1elwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDRg9GB0LvRg9Cz0LhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctdHJhbnNwYXJlbnQgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtxdWVyeSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KCcnKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBvdmVyZmxvdy15LWF1dG8gcC0yXCI+XHJcbiAgICAgICAgICB7ZmlsdGVyZWQubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0xIHB5LTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPntwbGFjZWhvbGRlcn08L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWQubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUob3B0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHRleHQtc2xhdGUtMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntvcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMFwiPj88L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2xpZW50TG9va3VwSW5wdXQgPSAoe1xyXG4gIGxhYmVsID0gJ9Ca0LvQuNC10L3RgicsXHJcbiAgdmFsdWUgPSAnJyxcclxuICBvbkNoYW5nZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgb25TZWxlY3RDbGllbnQsXHJcbiAgcGxhY2Vob2xkZXIgPSAn0J3QsNGH0L3QuNGC0LUg0LLQstC+0LTQuNGC0Ywg0LjQvNGPINC40LvQuCDRgtC10LvQtdGE0L7QvScsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UXVlcnkodmFsdWUgfHwgJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dChxdWVyeSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNob3J0bGlzdCA9IG5vcm1hbGl6ZWRcclxuICAgICAgPyBjbGllbnRzLmZpbHRlcihcclxuICAgICAgICAgIChjbGllbnQpID0+XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50Lm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZCkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplVGV4dChjbGllbnQucGhvbmUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZClcclxuICAgICAgICApXHJcbiAgICAgIDogY2xpZW50cztcclxuICAgIHJldHVybiBzaG9ydGxpc3Quc2xpY2UoMCwgNik7XHJcbiAgfSwgW2NsaWVudHMsIHF1ZXJ5XSk7XHJcblxyXG4gIHVzZU91dHNpZGVDbGljayhjb250YWluZXJSZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjbGllbnQ/Lm5hbWUgfHwgJyc7XHJcbiAgICBzZXRRdWVyeShuZXh0VmFsdWUpO1xyXG4gICAgb25DaGFuZ2U/LihuZXh0VmFsdWUpO1xyXG4gICAgb25TZWxlY3RDbGllbnQ/LihjbGllbnQpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0xXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2U/LihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtvcGVuICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIG10LTEgdy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzk1IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHttYXRjaGVzLm1hcCgoY2xpZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1zdGFydCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsYXN0OmJvcmRlci1ub25lIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoY2xpZW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2xpZW50Lm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntjbGllbnQucGhvbmUgfHwgJ9Ci0LXQu9C10YTQvtC9INC90LUg0YPQutCw0LfQsNC9J308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdHVzTWVudSA9ICh7IHN0YXR1c2VzID0gW10sIGhpZGRlblN0YXR1c2VzID0gW10sIG9uVG9nZ2xlLCBvblJlc2V0IH0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LWF1dG9cIlxuICAgICAgPlxuICAgICAgICDQodGC0LDRgtGD0YHRi1xuICAgICAgPC9idXR0b24+XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgei0zMCBtdC0yIHctNjQgbWF4LXctW2NhbGMoMTAwdnctMnJlbSldIHNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcC0zIHNoYWRvdy0yeGwgc206bGVmdC1hdXRvIHNtOnJpZ2h0LTBcIlxuICAgICAgICA+XG4gICAgICAgICAge3N0YXR1c2VzLmxlbmd0aCA9PT0gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0J3QtdGCINGB0YLQsNGC0YPRgdC+0LI8L3A+fVxuICAgICAgICAgIHtzdGF0dXNlcy5tYXAoKHN0YXR1cykgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17c3RhdHVzfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshaGlkZGVuU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKX0gb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKHN0YXR1cyl9IC8+XG4gICAgICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25SZXNldH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XG4gICAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXHJcblxyXG5jb25zdCBUYWJsZVRvb2xiYXIgPSAoe1xyXG4gIHRhYmxlSWQsXHJcbiAgc2VhcmNoVGVybSxcclxuICBzZXRTZWFyY2hUZXJtLFxyXG4gIHN1cHBvcnRzQmFyYmVyRmlsdGVyLFxyXG4gIHNlbGVjdGVkQmFyYmVyLFxyXG4gIHNldFNlbGVjdGVkQmFyYmVyLFxyXG4gIGJhcmJlcnMgPSBbXSxcclxuICBzdXBwb3J0c1N0YXR1c0ZpbHRlcixcclxuICBzdGF0dXNlcyA9IFtdLFxyXG4gIGhpZGRlblN0YXR1c2VzID0gW10sXHJcbiAgdG9nZ2xlU3RhdHVzLFxyXG4gIHJlc2V0U3RhdHVzZXMsXHJcbiAgY29sdW1ucyA9IFtdLFxyXG4gIGhpZGRlbkNvbHVtbnMgPSBbXSxcclxuICB0b2dnbGVDb2x1bW4sXHJcbiAgY2FuQ3JlYXRlLFxyXG4gIG9uT3BlbkNyZWF0ZSxcclxuICBvblJlZnJlc2gsXHJcbiAgc2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc3VwcG9ydHNHcm91cGluZyA9IGZhbHNlLFxyXG4gIGdyb3VwQnlEYXRlID0gZmFsc2UsXHJcbiAgc2V0R3JvdXBCeURhdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBjaGlwQ2xhc3MgPSAoYWN0aXZlKSA9PlxuICAgIGNsYXNzTmFtZXMoXG4gICAgICAncm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdHJhbnNpdGlvbiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LWNlbnRlcicsXG4gICAgICBhY3RpdmUgPyAnYm9yZGVyLWluZGlnby00MDAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnIDogJ2JvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTUwMCdcbiAgICApO1xuICBjb25zdCBhbGxvd01hbnVhbFJlZnJlc2ggPSB0eXBlb2Ygb25SZWZyZXNoID09PSAnZnVuY3Rpb24nICYmICFbJ0FwcG9pbnRtZW50cycsICdVc2VycyddLmluY2x1ZGVzKHRhYmxlSWQpO1xuICBjb25zdCBpbmxpbmVDcmVhdGVGb3JNb2JpbGUgPSBjYW5DcmVhdGUgJiYgdHlwZW9mIG9uT3BlbkNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBbJ0FwcG9pbnRtZW50cycsICdVc2VycyddLmluY2x1ZGVzKHRhYmxlSWQpO1xuICBjb25zdCBzaG93Q29sdW1uTWVudSA9IGNvbHVtbnMubGVuZ3RoID4gMCAmJiB0YWJsZUlkICE9PSAnVXNlcnMnO1xuICBjb25zdCBzdGF0dXNDb250cm9sID1cbiAgICBzdXBwb3J0c1N0YXR1c0ZpbHRlciA/IChcbiAgICAgIDxTdGF0dXNNZW51IHN0YXR1c2VzPXtzdGF0dXNlc30gaGlkZGVuU3RhdHVzZXM9e2hpZGRlblN0YXR1c2VzfSBvblRvZ2dsZT17dG9nZ2xlU3RhdHVzfSBvblJlc2V0PXtyZXNldFN0YXR1c2VzfSAvPlxuICAgICkgOiBudWxsO1xuICBjb25zdCBjb2x1bW5Db250cm9sID0gc2hvd0NvbHVtbk1lbnUgPyA8Q29sdW1uTWVudSBjb2x1bW5zPXtjb2x1bW5zfSBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfSBvblRvZ2dsZT17dG9nZ2xlQ29sdW1ufSAvPiA6IG51bGw7XG4gIGNvbnN0IHBhc3RDb250cm9sID1cbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiB0eXBlb2Ygc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMoIXNob3dQYXN0QXBwb2ludG1lbnRzKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjaGlwQ2xhc3Moc2hvd1Bhc3RBcHBvaW50bWVudHMpLCAndy1mdWxsIHNtOnctYXV0bycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCf0YDQvtGI0LXQtNGI0LjQtVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gIGNvbnN0IGdyb3VwaW5nQ29udHJvbCA9XG4gICAgc3VwcG9ydHNHcm91cGluZyAmJiB0eXBlb2Ygc2V0R3JvdXBCeURhdGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gKFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEdyb3VwQnlEYXRlKCFncm91cEJ5RGF0ZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjaGlwQ2xhc3MoZ3JvdXBCeURhdGUpLCAndy1mdWxsIHNtOnctYXV0bycpfT5cbiAgICAgICAgICAgINCT0YDRg9C/0L/QuNGA0L7QstCw0YLRjCDQv9C+INC00L3Rj9C8XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcbiAgY29uc3QgY29udHJvbE9yZGVyID1cbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJ1xuICAgICAgPyBbXG4gICAgICAgICAgeyBrZXk6ICdzdGF0dXMnLCBub2RlOiBzdGF0dXNDb250cm9sIH0sXG4gICAgICAgICAgeyBrZXk6ICdjb2x1bW5zJywgbm9kZTogY29sdW1uQ29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAncGFzdCcsIG5vZGU6IHBhc3RDb250cm9sIH0sXG4gICAgICAgICAgeyBrZXk6ICdncm91cCcsIG5vZGU6IGdyb3VwaW5nQ29udHJvbCB9LFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB7IGtleTogJ3N0YXR1cycsIG5vZGU6IHN0YXR1c0NvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ3Bhc3QnLCBub2RlOiBwYXN0Q29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAnZ3JvdXAnLCBub2RlOiBncm91cGluZ0NvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ2NvbHVtbnMnLCBub2RlOiBjb2x1bW5Db250cm9sIH0sXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvMzAgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbGc6ZmxleC1yb3cgbGc6aXRlbXMtc3RhcnQgbGc6anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtc3RyZXRjaCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIG1pbi13LVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTRcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDMuNWE1LjUgNS41IDAgMDEzLjk5NSA5LjMxNWwzLjA5NSAzLjA5NWEuNzUuNzUgMCAxMS0xLjA2IDEuMDZsLTMuMDk1LTMuMDk0QTUuNSA1LjUgMCAxMTkgMy41em0wIDEuNWE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0J/QvtC40YHQuiDQv9C+INGC0LDQsdC70LjRhtC1XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBweS0yIHBsLTkgcHItMyB0ZXh0LXNtIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAvNDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHtpbmxpbmVDcmVhdGVGb3JNb2JpbGUgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtMTEgc2hyaW5rLTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQteGwgYmctZW1lcmFsZC02MDAgcHgtNCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gc2hhZG93LWVtZXJhbGQtOTAwLzIwIGhvdmVyOmJnLWVtZXJhbGQtNTAwIHNtOmhpZGRlblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzdXBwb3J0c0JhcmJlckZpbHRlciAmJiAoXG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRCYXJiZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VsZWN0ZWRCYXJiZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LTQ4XCJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPtCS0YHQtSDQvNCw0YHRgtC10YDQsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhcmJlcn1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpmbGV4LXJvdyBzbTpmbGV4LXdyYXAgc206aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7Y29udHJvbE9yZGVyLm1hcChcbiAgICAgICAgICAgICAgKGNvbnRyb2wpID0+IGNvbnRyb2wubm9kZSAmJiA8RnJhZ21lbnQga2V5PXtjb250cm9sLmtleX0+e2NvbnRyb2wubm9kZX08L0ZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0yXCI+XHJcbiAgICAgICAgICB7YWxsb3dNYW51YWxSZWZyZXNoICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVmcmVzaH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAgc206cHgtNVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCLvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj7vv73vv73vv73vv73vv73vv73vv73vv708L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206aGlkZGVuXCI+Pzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NhbkNyZWF0ZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyxcbiAgICAgICAgICAgICAgICBpbmxpbmVDcmVhdGVGb3JNb2JpbGUgPyAnaGlkZGVuIHNtOmlubGluZS1mbGV4JyA6ICcnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj4rINCU0L7QsdCw0LLQuNGC0Yw8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPis8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMgPSAocmVjb3JkcyA9IFtdLCBzb3J0RGlyZWN0aW9uID0gJ2Rlc2MnKSA9PiB7XHJcbiAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICByZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gcmVjb3JkLkRhdGUgfHwgJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgYnVja2V0LnB1c2gocmVjb3JkKTtcclxuICAgIGJ1Y2tldHMuc2V0KGtleSwgYnVja2V0KTtcclxuICB9KTtcclxuICBjb25zdCBjb21wYXJlID0gc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAoYSwgYikgPT4gYSAtIGIgOiAoYSwgYikgPT4gYiAtIGE7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oYnVja2V0cy5lbnRyaWVzKCkpXHJcbiAgICAubWFwKChba2V5LCBpdGVtc10pID0+IHtcclxuICAgICAgY29uc3Qgc29ydGVkSXRlbXMgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYS5EYXRlLCBhLlRpbWUsIGEuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBjb25zdCByaWdodCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGIuRGF0ZSwgYi5UaW1lLCBiLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUobGVmdCwgcmlnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkSXRlbXNbMF07XHJcbiAgICAgIGNvbnN0IHNvcnRWYWx1ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKHJlZmVyZW5jZS5EYXRlLCByZWZlcmVuY2UuVGltZSwgcmVmZXJlbmNlLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBrZXkgfHwgYG5vLWRhdGUtJHtyZWZlcmVuY2U/LmlkIHx8IE1hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSxcclxuICAgICAgICByb3dzOiBzb3J0ZWRJdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5zb3J0VmFsdWUsIGIuc29ydFZhbHVlKSk7XHJcbn07XHJcbmNvbnN0IHJlc29sdmVTb3J0VmFsdWUgPSAocm93LCBjb2x1bW4sIHRhYmxlSWQpID0+IHtcclxuICBpZiAoIWNvbHVtbikgcmV0dXJuIG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbj8ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxuICBpZiAodGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgY29sdW1uLmtleSA9PT0gJ0RhdGUnKSB7XHJcbiAgICByZXR1cm4gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocm93LkRhdGUsIHJvdy5UaW1lLCByb3cuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCAwO1xyXG4gIH1cclxuICBpZiAoY29sdW1uLnR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgY29uc3QgdHMgPSBuZXcgRGF0ZShyb3dbY29sdW1uLmtleV0pLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odHMpID8gMCA6IHRzO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHJvd1tjb2x1bW4ua2V5XSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiByb3dbY29sdW1uLmtleV07XHJcbiAgfVxyXG4gIGlmIChjb2x1bW4udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICByZXR1cm4gcm93W2NvbHVtbi5rZXldID8gMSA6IDA7XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxpemVUZXh0KHJvd1tjb2x1bW4ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxufTtcclxuY29uc3QgU29ydEluZGljYXRvciA9ICh7IGRpcmVjdGlvbiB9KSA9PiAoXHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZWFkaW5nLVs2cHhdXCI+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTMgdy0zIHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnYXNjJyAmJiAndGV4dC1pbmRpZ28tMzAwJyl9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNCAxMGw0LTQgNCA0XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgLW10LTAuNSB0ZXh0LXNsYXRlLTYwMCcsIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDZsNCA0IDQtNFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9zcGFuPlxyXG4pO1xyXG5cclxuY29uc3QgU2NoZWR1bGVzQm9hcmQgPSAoeyByb3dzID0gW10sIGNvbHVtbnMgPSBbXSwgb25VcGRhdGUsIG9wdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IHZpc2libGVLZXlzID0gdXNlTWVtbygoKSA9PiBuZXcgU2V0KGNvbHVtbnMubWFwKChjb2x1bW4pID0+IGNvbHVtbi5rZXkpKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCBlZGl0YWJsZUNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5lZGl0YWJsZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICAgIHJvd3MuZm9yRWFjaCgoc2xvdCkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBzbG90LkRhdGUgfHwgc2xvdC5EYXlPZldlZWsgfHwgYGJhcmJlci0ke3Nsb3QuQmFyYmVyIHx8ICduby1iYXJiZXInfWA7XHJcbiAgICAgIGNvbnN0IG5leHQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBuZXh0LnB1c2goc2xvdCk7XHJcbiAgICAgIGJ1Y2tldHMuc2V0KGtleSwgbmV4dCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ1Y2tldHMuZW50cmllcygpKVxyXG4gICAgICAubWFwKChba2V5LCBzbG90c10pID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0ZWRTbG90cyA9IFsuLi5zbG90c10uc29ydCgoYSwgYikgPT4gbm9ybWFsaXplVGV4dChhLldlZWspLmxvY2FsZUNvbXBhcmUobm9ybWFsaXplVGV4dChiLldlZWspKSk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkU2xvdHNbMF0gfHwge307XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0ga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gbmV3IERhdGUoa2V5KS5nZXRUaW1lKCkgOiBOdW1iZXIuTmFOO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICB0aXRsZToga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSA6IHJlZmVyZW5jZS5EYXlPZldlZWsgfHwgJ9CR0LXQtyDQtNCw0YLRiycsXHJcbiAgICAgICAgICBiYWRnZToga2V5ICYmICFrZXkuc3RhcnRzV2l0aCgnYmFyYmVyLScpID8gZm9ybWF0RGF0ZUJhZGdlTGFiZWwoa2V5KSA6IHJlZmVyZW5jZS5EYXlPZldlZWsgfHwgJ+KAlCcsXHJcbiAgICAgICAgICBzb3J0VmFsdWU6IE51bWJlci5pc0Zpbml0ZSh0aW1lc3RhbXApID8gdGltZXN0YW1wIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICBzbG90czogc29ydGVkU2xvdHMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydFZhbHVlIC0gYi5zb3J0VmFsdWUpO1xyXG4gIH0sIFtyb3dzXSk7XHJcblxyXG4gIGlmICghZ3JvdXBlZEJ5RGF0ZS5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCg0LDRgdC/0LjRgdCw0L3QuNC1INC/0YPRgdGC0L4uPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICB7Z3JvdXBlZEJ5RGF0ZS5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgPHNlY3Rpb24ga2V5PXtncm91cC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05NTAvMzAgcC00IHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC40ZW1dIHRleHQtc2xhdGUtNTAwXCI+e2dyb3VwLmJhZGdlfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2dyb3VwLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC0yLjUgcHktMC41IHRleHQtWzExcHhdIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnNsb3RzLmxlbmd0aH0ge3BsdXJhbGl6ZShncm91cC5zbG90cy5sZW5ndGgsIFsn0YHQu9C+0YInLCAn0YHQu9C+0YLQsCcsICfRgdC70L7RgtC+0LInXSl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgIHtncm91cC5zbG90cy5tYXAoKHNsb3QpID0+IChcclxuICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAga2V5PXtzbG90LmlkIHx8IGAke3Nsb3QuQmFyYmVyIHx8ICduby1iYXJiZXInfS0ke3Nsb3QuRGF0ZSB8fCBzbG90LkRheU9mV2VlayB8fCBzbG90LldlZWt9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzcwIGJnLXNsYXRlLTk1MC81MCBwLTMgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPntzbG90LkRheU9mV2VlayB8fCAn0JTQtdC90Ywg0L3QtSDRg9C60LDQt9Cw0L0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Nsb3QuQmFyYmVyIHx8ICfQndC1INC90LDQt9C90LDRh9C10L0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntzbG90LldlZWsgfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTUwMFwiPntzbG90LkRhdGUgPyBmb3JtYXREYXRlKHNsb3QuRGF0ZSkgOiAn0JHQtdC3INC00LDRgtGLJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZWRpdGFibGVDb2x1bW5zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZ3JpZCBnYXAtMiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Nsb3QuaWQgfHwgc2xvdC5EYXRlfS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNjAgYmctc2xhdGUtOTUwLzYwIHB4LTIgcHktMS41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+e2NvbHVtbi5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtzbG90fSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSB0YWJsZUlkPVwiU2NoZWR1bGVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwb2ludG1lbnRzTGlzdCA9ICh7IGdyb3VwcyA9IFtdLCBvbk9wZW4sIGNvbHVtbnMgPSBbXSwgaGlkZGVuQ29sdW1ucyA9IFtdIH0pID0+IHtcclxuICBpZiAoIWdyb3Vwcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCX0LDQv9C40YHQtdC5INC/0L7QutCwINC90LXRgi48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSwgW2NvbHVtbnMsIGhpZGRlbkNvbHVtbnNdKTtcclxuICBjb25zdCByZW5kZXJDb2x1bW5WYWx1ZSA9IChyZWNvcmQsIGNvbHVtbikgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmRbY29sdW1uLmtleV07XHJcbiAgICBzd2l0Y2ggKGNvbHVtbi5rZXkpIHtcclxuICAgICAgY2FzZSAnRGF0ZSc6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUpIHx8ICfigJQnO1xyXG4gICAgICBjYXNlICdUaW1lJzoge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIFtzdGFydCB8fCB2YWx1ZSB8fCAnLScsIGVuZCA/IGDQtNC+ICR7ZW5kfWAgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgIHJldHVybiBub3JtYWxpemVTdGF0dXNWYWx1ZSh2YWx1ZSkgfHwgJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1NlcnZpY2VzJzoge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcGFyc2VNdWx0aVZhbHVlKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gaXRlbXMubGVuZ3RoID8gaXRlbXMuam9pbignLCAnKSA6ICfigJQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ1Bob25lJzpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyBmb3JtYXRQaG9uZUlucHV0KHZhbHVlKSA6ICfigJQnO1xyXG4gICAgICBjYXNlICdSZW1pbmRlcjJoQ2xpZW50U2VudCc6XHJcbiAgICAgIGNhc2UgJ1JlbWluZGVyMmhCYXJiZXJTZW50JzpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gMSA/ICfQntGC0L/RgNCw0LLQu9C10L3QvicgOiAn4oCUJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ+KAlCc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XHJcbiAgICAgIHtncm91cHMubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGdldFJlY29yZElkKHJlY29yZCkgfHwgYCR7Z3JvdXAua2V5fS0ke3JlY29yZC5DdXN0b21lck5hbWV9LSR7cmVjb3JkLlRpbWV9YDtcclxuICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJlY29yZC5TdGF0dXMpIHx8ICctJztcclxuICAgICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHBhcnNlVGltZVJhbmdlUGFydHMocmVjb3JkLlRpbWUpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzTGlzdCA9IHBhcnNlTXVsdGlWYWx1ZShyZWNvcmQuU2VydmljZXMpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25PcGVuPy4ocmVjb3JkLCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvNDAgcC0zIHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMC83MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMC82MCBzbTpwLTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMyBib3JkZXItYiBib3JkZXItc2xhdGUtODAwLzcwIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Zm9ybWF0RGF0ZUJhZGdlTGFiZWwocmVjb3JkLkRhdGUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC0zeGxcIj57c3RhcnQgfHwgcmVjb3JkLlRpbWUgfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VuZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj7QtNC+IHtlbmR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZScsIGdldFN0YXR1c0JhZGdlQ2xhc3NlcyhzdGF0dXNMYWJlbCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5CYXJiZXIgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntyZWNvcmQuQmFyYmVyfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LWNvbCBnYXAtMyB0ZXh0LVsxM3B4XSB0ZXh0LXNsYXRlLTMwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2tleX0tJHtjb2x1bW4ua2V5fWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzcwIGJnLXNsYXRlLTk1MC81MCBweC0yIHB5LTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgdGV4dC1zbGF0ZS0yMDBcIj57cmVuZGVyQ29sdW1uVmFsdWUocmVjb3JkLCBjb2x1bW4pfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e3JlY29yZC5DdXN0b21lck5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3Quc2xpY2UoMCwgMykubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2Ake3NlcnZpY2V9LSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTkwMC83MCBweC0yIHB5LTAuNSB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTIwMCBzbTp0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPiAzICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNTAwXCI+K3tzZXJ2aWNlc0xpc3QubGVuZ3RoIC0gM308L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7Qo9GB0LvRg9Cz0Lgg0L3QtSDRg9C60LDQt9Cw0L3RizwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IERhdGFUYWJsZSA9ICh7XHJcbiAgdGFibGVJZCxcclxuICByb3dzLFxyXG4gIGNvbHVtbnMsXHJcbiAgaGlkZGVuQ29sdW1ucyxcclxuICBzb3J0Q29uZmlnLFxyXG4gIG9uU29ydCxcclxuICBvblVwZGF0ZSxcclxuICBvbkRlbGV0ZSxcclxuICBvcHRpb25zLFxyXG4gIG9uT3BlblByb2ZpbGUsXHJcbiAgb25PcGVuQXBwb2ludG1lbnQsXHJcbiAgZ3JvdXBCeURhdGUgPSB0cnVlLFxyXG59KSA9PiB7XHJcbiAgaWYgKCFyb3dzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC30LDQv9C40YHQtdC5LjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKTtcclxuICBjb25zdCBpc0FwcG9pbnRtZW50c1RhYmxlID0gdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cyc7XHJcbiAgY29uc3QgY2FuR3JvdXBBcHBvaW50bWVudHMgPSBpc0FwcG9pbnRtZW50c1RhYmxlICYmIGdyb3VwQnlEYXRlICYmICghc29ydENvbmZpZyB8fCBzb3J0Q29uZmlnLmtleSA9PT0gJ0RhdGUnKTtcclxuICBjb25zdCBncm91cGVkUm93cyA9IGlzQXBwb2ludG1lbnRzVGFibGVcclxuICAgID8gY2FuR3JvdXBBcHBvaW50bWVudHNcclxuICAgICAgPyBidWlsZEFwcG9pbnRtZW50R3JvdXBzKHJvd3MsIHNvcnRDb25maWc/LmRpcmVjdGlvbiB8fCAnZGVzYycpXHJcbiAgICAgIDogW3sga2V5OiAnZGVmYXVsdCcsIGxhYmVsOiBudWxsLCByb3dzIH1dXHJcbiAgICA6IFt7IGtleTogJ2RlZmF1bHQnLCBsYWJlbDogbnVsbCwgcm93cyB9XTtcclxuXHJcbiAgaWYgKGlzQXBwb2ludG1lbnRzVGFibGUpIHtcclxuICAgIHJldHVybiA8QXBwb2ludG1lbnRzTGlzdCBncm91cHM9e2dyb3VwZWRSb3dzfSBvbk9wZW49e29uT3BlbkFwcG9pbnRtZW50fSAvPjtcclxuICB9XHJcblxyXG4gIGlmICh0YWJsZUlkID09PSAnU2NoZWR1bGVzJykge1xyXG4gICAgcmV0dXJuIDxTY2hlZHVsZXNCb2FyZCByb3dzPXtyb3dzfSBjb2x1bW5zPXt2aXNpYmxlQ29sdW1uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvcHRpb25zPXtvcHRpb25zfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICB7cm93cy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlY29yZElkID0gZ2V0UmVjb3JkSWQocmVjb3JkKTtcclxuICAgICAgICAgIGNvbnN0IGNhcmRLZXkgPSByZWNvcmRJZCB8fCBgJHt0YWJsZUlkfS1jYXJkLSR7aW5kZXh9YDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2FyZEtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC82MCBwLTQgc2hhZG93LWxnIHNoYWRvdy1ibGFjay8xMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYmxlSWQgPT09ICdVc2VycycgPyAn0JrQu9C40LXQvdGCJyA6IHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnID8gJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JyA6ICfQl9Cw0L/QuNGB0YwnfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmVjb3JkW3Zpc2libGVDb2x1bW5zWzBdPy5rZXldIHx8ICctJ308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXJvc2UtNjAwLzcwIHAtMiB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Y2FyZEtleX0tJHtjb2x1bW4ua2V5fWB9IGNsYXNzTmFtZT1cInNwYWNlLXktMSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05NTAvNTAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIDJ4bDpibG9jayAtbXgtNCBvdmVyZmxvdy14LWF1dG8gb3ZlcmZsb3cteS12aXNpYmxlIHBiLTMgc206bXgtMFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1bNzYwcHhdIHctZnVsbCB0YWJsZS1hdXRvIHRleHQtWzEzcHhdIGxlYWRpbmctdGlnaHQgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdweC0yIHB5LTEuNSB3aGl0ZXNwYWNlLW5vd3JhcCcsIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ3RleHQtY2VudGVyJywgY29sdW1uLm1pbldpZHRoKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSAmJiBvblNvcnQoY29sdW1uLmtleSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMicsIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ2p1c3RpZnktY2VudGVyJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5zb3J0YWJsZSAhPT0gZmFsc2UgJiYgPFNvcnRJbmRpY2F0b3IgZGlyZWN0aW9uPXtzb3J0Q29uZmlnPy5rZXkgPT09IGNvbHVtbi5rZXkgPyBzb3J0Q29uZmlnLmRpcmVjdGlvbiA6IG51bGx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAge29uRGVsZXRlICYmIDx0aCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB0ZXh0LXJpZ2h0XCIgYXJpYS1sYWJlbD1cItCU0LXQudGB0YLQstC40Y9cIiAvPn1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtncm91cGVkUm93cy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17Z3JvdXAua2V5fT5cclxuICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXt2aXNpYmxlQ29sdW1ucy5sZW5ndGggKyAob25EZWxldGUgPyAxIDogMCl9IGNsYXNzTmFtZT1cInB4LTIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyZWNvcmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17Z2V0UmVjb3JkSWQocmVjb3JkKX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweC0yIHB5LTEuNSBhbGlnbi10b3AgdGV4dC1bMTNweF0gbGVhZGluZy1zbnVnIHNtOnRleHQtc20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ3RleHQtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubm9XcmFwID8gJ3doaXRlc3BhY2Utbm93cmFwJyA6ICd3aGl0ZXNwYWNlLW5vcm1hbCBicmVhay13b3JkcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlQ2VsbCByZWNvcmQ9e3JlY29yZH0gY29sdW1uPXtjb2x1bW59IG9wdGlvbnM9e29wdGlvbnN9IG9uVXBkYXRlPXtvblVwZGF0ZX0gb25PcGVuUHJvZmlsZT17b25PcGVuUHJvZmlsZX0gdGFibGVJZD17dGFibGVJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAgcHgtMiBweS0xLjUgdGV4dC14cyB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IENsaWVudHNMaXN0ID0gKHsgY2xpZW50cyA9IFtdLCBiYXJiZXJzID0gW10sIG9uVXBkYXRlLCBvbkRlbGV0ZSwgZmV0Y2hIaXN0b3J5LCBvblJlcXVlc3RDb25maXJtIH0pID0+IHtcclxuICBjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCByZWNvcmQ6IG51bGwsIGhpc3Rvcnk6IFtdLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6ICcnIH0pO1xyXG4gIGNvbnN0IGJhcmJlck9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IChBcnJheS5pc0FycmF5KGJhcmJlcnMpID8gYmFyYmVycy5maWx0ZXIoQm9vbGVhbikgOiBbXSksIFtiYXJiZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5DbGllbnRNb2RhbCA9IGFzeW5jIChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXRNb2RhbFN0YXRlKHsgb3BlbjogdHJ1ZSwgcmVjb3JkOiB7IC4uLmNsaWVudCB9LCBoaXN0b3J5OiBbXSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6ICcnIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGZldGNoSGlzdG9yeSAmJiBjbGllbnQuTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBmZXRjaEhpc3RvcnkoY2xpZW50KTtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYnVpbGRWaXNpdEhpc3RvcnkocHJvZmlsZT8uYXBwb2ludG1lbnRzIHx8IFtdKTtcclxuICAgICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBoaXN0b3J5LCBsb2FkaW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogZmFsc2UsIGhpc3Rvcnk6IFtdIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQuNGB0YLQvtGA0LjRjicgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlQ2xpZW50TW9kYWwgPSAoKSA9PiBzZXRNb2RhbFN0YXRlKHsgb3BlbjogZmFsc2UsIHJlY29yZDogbnVsbCwgaGlzdG9yeTogW10sIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpZWxkQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgcmVjb3JkOiB7IC4uLnByZXYucmVjb3JkLCBbZmllbGRdOiB2YWx1ZSB9IH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFtb2RhbFN0YXRlLnJlY29yZCB8fCB0eXBlb2Ygb25VcGRhdGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY29yZElkID0gZ2V0UmVjb3JkSWQobW9kYWxTdGF0ZS5yZWNvcmQpO1xyXG4gICAgaWYgKCFyZWNvcmRJZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgTmFtZTogbW9kYWxTdGF0ZS5yZWNvcmQuTmFtZSxcclxuICAgICAgUGhvbmU6IG1vZGFsU3RhdGUucmVjb3JkLlBob25lLFxyXG4gICAgICBUZWxlZ3JhbUlEOiBtb2RhbFN0YXRlLnJlY29yZC5UZWxlZ3JhbUlELFxyXG4gICAgICBCYXJiZXI6IG1vZGFsU3RhdGUucmVjb3JkLkJhcmJlcixcclxuICAgIH07XHJcbiAgICBvblVwZGF0ZShyZWNvcmRJZCwgcGF5bG9hZCk7XHJcbiAgICBjbG9zZUNsaWVudE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFtb2RhbFN0YXRlLnJlY29yZCB8fCB0eXBlb2Ygb25EZWxldGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IG9uUmVxdWVzdENvbmZpcm0/Lih7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LrQu9C40LXQvdGC0LA/JyxcclxuICAgICAgbWVzc2FnZTogYNCa0LvQuNC10L3RgiDCqyR7bW9kYWxTdGF0ZS5yZWNvcmQuTmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfcK7INCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uYCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKG9uUmVxdWVzdENvbmZpcm0gJiYgIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgYXdhaXQgb25EZWxldGUobW9kYWxTdGF0ZS5yZWNvcmQsIHsgc2tpcENvbmZpcm06IHRydWUgfSk7XHJcbiAgICBjbG9zZUNsaWVudE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIHtjbGllbnRzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyINC/0YPRgdGCLjwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC80MCBzaGFkb3ctaW5uZXIgc2hhZG93LWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1zbGF0ZS05MDBcIj5cclxuICAgICAgICAgICAge2NsaWVudHMubWFwKChjbGllbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY2xpZW50TnVtYmVyID0gU3RyaW5nKGluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICBjb25zdCBwaG9uZURpc3BsYXkgPSBjbGllbnQuUGhvbmUgPyBmb3JtYXRQaG9uZUlucHV0KGNsaWVudC5QaG9uZSkgOiAnJztcclxuICAgICAgICAgICAgICBjb25zdCB0ZWxlZ3JhbUhhbmRsZSA9IGZvcm1hdFRlbGVncmFtSGFuZGxlKGNsaWVudC5UZWxlZ3JhbUlEKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtjbGllbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5DbGllbnRNb2RhbChjbGllbnQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMiBweC00IHB5LTMgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ymctc2xhdGUtOTAwLzYwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtOCB3LTggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntjbGllbnQuTmFtZSB8fCAn0J3QtdGCINC40LzQtdC90LgnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50LkJhcmJlciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAOiB7Y2xpZW50LkJhcmJlcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bob25lRGlzcGxheSAmJiA8cD57cGhvbmVEaXNwbGF5fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57dGVsZWdyYW1IYW5kbGV9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e21vZGFsU3RhdGUucmVjb3JkPy5OYW1lIHx8ICfQmtC70LjQtdC90YInfVxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxTdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlQ2xpZW50TW9kYWx9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LTN4bFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1lbmQgZ2FwLTNcIj5cclxuICAgICAgICAgICAge21vZGFsU3RhdGUucmVjb3JkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VDbGllbnRNb2RhbH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHshbW9kYWxTdGF0ZS5yZWNvcmQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LrQu9C40LXQvdGC0LAuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCY0LzRj1xyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5OYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnTmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICDQotC10LvQtdGE0L7QvVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5QaG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIFRlbGVncmFtIElEXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLlRlbGVncmFtSUQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdUZWxlZ3JhbUlEJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCb0Y7QsdC40LzRi9C5INCx0LDRgNCx0LXRgFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bW9kYWxTdGF0ZS5yZWNvcmQuQmFyYmVyIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnQmFyYmVyJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCd0LUg0LLRi9Cx0YDQsNC9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJPcHRpb25zLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YmFyYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsjwvcD5cclxuICAgICAgICAgICAgICA8VmlzaXRIaXN0b3J5TGlzdFxyXG4gICAgICAgICAgICAgICAgdmlzaXRzPXttb2RhbFN0YXRlLmhpc3Rvcnl9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXttb2RhbFN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17bW9kYWxTdGF0ZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT1cItCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyINC/0YPRgdGC0LAuXCJcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodENsYXNzPVwibWF4LWgtNTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVSZWNvcmRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25TYXZlLCBjb2x1bW5zLCB0YWJsZU5hbWUsIG9wdGlvbnMsIHRhYmxlSWQsIGNsaWVudHMgPSBbXSwgaGlkZGVuRmllbGRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlICE9PSBmYWxzZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZWRpdGFibGVDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuRmllbGRzLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSxcclxuICAgIFtlZGl0YWJsZUNvbHVtbnMsIGhpZGRlbkZpZWxkc11cclxuICApO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgZWRpdGFibGVDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICBwYXlsb2FkW2NvbHVtbi5rZXldID0gY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnID8gW10gOiAnJztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfSwgW2VkaXRhYmxlQ29sdW1uc10pO1xyXG5cclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaXNBcHBvaW50bWVudHNDcmVhdGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc09wZW4pIHNldERyYWZ0KGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2lzT3BlbiwgaW5pdGlhbFN0YXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGRyYWZ0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgcGF5bG9hZFtrZXldID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIG9uU2F2ZShwYXlsb2FkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2DQndC+0LLQsNGPINC30LDQv9C40YHRjDogJHt0YWJsZU5hbWV9YH1cclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZHJhZnRbY29sdW1uLmtleV07XHJcbiAgICAgICAgICBpZiAoaXNBcHBvaW50bWVudHNDcmVhdGUgJiYgY29sdW1uLmtleSA9PT0gJ0N1c3RvbWVyTmFtZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIEN1c3RvbWVyTmFtZTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdENsaWVudD17aGFuZGxlQ2xpZW50QXV0b0ZpbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBldmVudC50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgeyhvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXSkubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0Q2hlY2tib3hlc1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogc2VsZWN0ZWQgfSkpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQsNC90L3Ri9GFXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT09ICdUaW1lJyB8fCBjb2x1bW4ua2V5ID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfigJQnIDogJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJ31cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtjb2x1bW4udHlwZSA9PT0gJ2RhdGUnID8gJ2RhdGUnIDogJ3RleHQnfSB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZmlsZU1vZGFsID0gKHsgc3RhdGUsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGFwcG9pbnRtZW50cyA9IHN0YXRlLmRhdGE/LmFwcG9pbnRtZW50cyB8fCBbXTtcclxuICBjb25zdCB2aXNpdEhpc3RvcnkgPSB1c2VNZW1vKCgpID0+IGJ1aWxkVmlzaXRIaXN0b3J5KGFwcG9pbnRtZW50cyksIFthcHBvaW50bWVudHNdKTtcclxuICBjb25zdCB1c2VyID0gc3RhdGUuZGF0YT8udXNlciB8fCBudWxsO1xyXG4gIGNvbnN0IHBob25lTGFiZWwgPSB1c2VyPy5QaG9uZSA/IGZvcm1hdFBob25lSW5wdXQodXNlci5QaG9uZSkgOiAnJztcclxuICBjb25zdCBwaG9uZUhyZWYgPSBwaG9uZUxhYmVsID8gYHRlbDoke3Bob25lTGFiZWwucmVwbGFjZSgvW15cXGQrXS9nLCAnJyl9YCA6ICcnO1xyXG4gIGNvbnN0IHRlbGVncmFtSGFuZGxlID0gdXNlcj8uVGVsZWdyYW1JRCA/IGZvcm1hdFRlbGVncmFtSGFuZGxlKHVzZXIuVGVsZWdyYW1JRCkgOiAnJztcclxuICBjb25zdCB0ZWxlZ3JhbUhyZWYgPSB1c2VyPy5UZWxlZ3JhbUlEID8gYnVpbGRUZWxlZ3JhbUxpbmsodXNlci5UZWxlZ3JhbUlEKSA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtzdGF0ZS5kYXRhPy51c2VyPy5OYW1lIHx8ICfQn9GA0L7RhNC40LvRjCDQutC70LjQtdC90YLQsCd9XHJcbiAgICAgIGlzT3Blbj17c3RhdGUub3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXs8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cclxuICAgID5cclxuICAgICAge3N0YXRlLmxvYWRpbmcgJiYgPExvYWRpbmdTdGF0ZSBsYWJlbD1cItCX0LDQs9GA0YPQttCw0Y4g0L/RgNC+0YTQuNC70YwuLi5cIiAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHN0YXRlLmRhdGE/LmVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXtzdGF0ZS5kYXRhLmVycm9yfSAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHVzZXIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KLQtdC70LXRhNC+0L06PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAge3Bob25lTGFiZWwgJiYgcGhvbmVIcmVmID8gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cGhvbmVIcmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAn4oCUJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+VGVsZWdyYW06PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlICYmIHRlbGVncmFtSHJlZiA/IChcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RlbGVncmFtSHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3RlbGVncmFtSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAn4oCUJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAOjwvc3Bhbj4ge3VzZXIuQmFyYmVyIHx8ICfigJQnfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LI8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxWaXNpdEhpc3RvcnlMaXN0IHZpc2l0cz17dmlzaXRIaXN0b3J5fSBlbXB0eU1lc3NhZ2U9XCLQl9Cw0L/QuNGB0LXQuSDQt9CwINC/0L7RgdC70LXQtNC90LjQuSDQs9C+0LQg0L3QtdGCLlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCYWNrdXBzUGFuZWwgPSAoeyBiYWNrdXBzID0gW10sIG9uUmVzdG9yZSwgb25DcmVhdGUsIG9uRGVsZXRlIH0pID0+IChcbiAgPFNlY3Rpb25DYXJkXG4gICAgdGl0bGU9XCLQoNC10LfQtdGA0LLQvdGL0LUg0LrQvtC/0LjQuFwiXG4gICAgYWN0aW9ucz17XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cbiAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjlxuICAgICAgPC9idXR0b24+XHJcbiAgICB9XHJcbiAgPlxyXG4gICAge2JhY2t1cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QmNGB0YLQvtGA0LjRjyDQv9GD0YHRgtCwLjwvcD5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAge2JhY2t1cHMubWFwKChiYWNrdXApID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IGZvcm1hdEJhY2t1cExhYmVsKGJhY2t1cCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtiYWNrdXB9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57bGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57YmFja3VwfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlc3RvcmUoYmFja3VwKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShiYWNrdXApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggY2xhc3NOYW1lPVwibXItMSBoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9TZWN0aW9uQ2FyZD5cbik7XG5cclxuY29uc3QgQXBwb2ludG1lbnRNb2RhbCA9ICh7IG9wZW4sIGFwcG9pbnRtZW50LCBvcHRpb25zID0ge30sIG9uQ2xvc2UsIG9uU2F2ZSwgb25EZWxldGUsIGNhbkRlbGV0ZSA9IGZhbHNlLCBpc05ldyA9IGZhbHNlLCBjbGllbnRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGJ1aWxkRHJhZnQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWNvcmQpID0+IChyZWNvcmQgPyB7IC4uLnJlY29yZCwgVXNlcklEOiByZWNvcmQuVXNlcklEIHx8IHJlY29yZC51c2VySWQgfHwgJycsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfSA6IG51bGwpLFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm47XHJcbiAgICBzZXREcmFmdChidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XHJcblxyXG4gIGlmICghb3BlbiB8fCAhZHJhZnQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlc1NlbGVjdGlvbiA9IHBhcnNlTXVsdGlWYWx1ZShkcmFmdC5TZXJ2aWNlcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0RHJhZnQgPSAobmV4dERyYWZ0KSA9PiB7XG4gICAgaWYgKCFuZXh0RHJhZnQpIHJldHVybjtcbiAgICBvblNhdmUoe1xuICAgICAgaWQ6IG5leHREcmFmdC5pZCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBuZXh0RHJhZnQuQ3VzdG9tZXJOYW1lLFxuICAgICAgICBQaG9uZTogbmV4dERyYWZ0LlBob25lLFxuICAgICAgICBCYXJiZXI6IG5leHREcmFmdC5CYXJiZXIsXG4gICAgICAgIERhdGU6IG5leHREcmFmdC5EYXRlLFxuICAgICAgICBUaW1lOiBuZXh0RHJhZnQuVGltZSxcbiAgICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShuZXh0RHJhZnQuU3RhdHVzKSxcbiAgICAgICAgU2VydmljZXM6IG5leHREcmFmdC5TZXJ2aWNlcyxcbiAgICAgICAgVXNlcklEOiBuZXh0RHJhZnQuVXNlcklEIHx8ICcnLFxuICAgICAgfSxcbiAgICAgIGlzTmV3LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHN1Ym1pdERyYWZ0KGRyYWZ0KTtcblxuICBjb25zdCBoYW5kbGVNYXJrQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGlmICghZHJhZnQpIHJldHVybjtcbiAgICBjb25zdCBuZXh0RHJhZnQgPSB7IC4uLmRyYWZ0LCBTdGF0dXM6ICfQktGL0L/QvtC70L3QtdC90LAnIH07XG4gICAgc2V0RHJhZnQobmV4dERyYWZ0KTtcbiAgICBzdWJtaXREcmFmdChuZXh0RHJhZnQpO1xuICB9O1xuXHJcbiAgY29uc3QgaGFuZGxlQ2xpZW50QXV0b0ZpbGwgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudCkgcmV0dXJuO1xyXG4gICAgc2V0RHJhZnQoKHByZXYpID0+IHtcclxuICAgICAgaWYgKCFwcmV2KSByZXR1cm4gcHJldjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIEN1c3RvbWVyTmFtZTogY2xpZW50Lm5hbWUgfHwgcHJldi5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICAgIEJhcmJlcjogcHJldi5CYXJiZXIgfHwgY2xpZW50LnByZWZlcnJlZEJhcmJlciB8fCAnJyxcclxuICAgICAgICBVc2VySUQ6IGNsaWVudC50ZWxlZ3JhbUlkIHx8IGNsaWVudC5UZWxlZ3JhbUlEIHx8IGNsaWVudC5pZCB8fCBwcmV2LlVzZXJJRCB8fCAnJyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2lzTmV3ID8gJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyA6IGDQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC30LDQv9C40YHQuCAke2RyYWZ0LkN1c3RvbWVyTmFtZSB8fCAnJ31gfVxyXG4gICAgICBpc09wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgeyFpc05ldyAmJiBjYW5EZWxldGUgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZT8uKGRyYWZ0KX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cbiAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICDQntGC0LzQtdC90LBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7IWlzTmV3ICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWFya0NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1lbWVyYWxkLTIwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMC8xMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCS0YvQv9C+0LvQvdC10L3QvlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPINC60LvQuNC10L3RgtCwXCJcclxuICAgICAgICAgIHZhbHVlPXtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCi0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RyYWZ0LlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e2RyYWZ0LkJhcmJlciB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTExIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LDRgNCx0LXRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgeyhvcHRpb25zLmJhcmJlcnMgfHwgW10pLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RyYWZ0LkRhdGUgPyBTdHJpbmcoZHJhZnQuRGF0ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnRGF0ZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8VGltZVJhbmdlUGlja2VyIHZhbHVlPXtkcmFmdC5UaW1lIHx8ICcnfSBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdUaW1lJywgbmV4dFZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjFwiIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuU3RhdHVzIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1N0YXR1cycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHRgtCw0YLRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXN9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5zZXJ2aWNlcyB8fCBbXX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBoYW5kbGVDaGFuZ2UoJ1NlcnZpY2VzJywgc2VsZWN0ZWQuam9pbignLCAnKSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5jb25zdCBUYWJsZXNXb3Jrc3BhY2UgPSAoe1xuICBhcGlSZXF1ZXN0LFxuICBzaGFyZWRPcHRpb25zLFxuICBvbk9wdGlvbnNVcGRhdGUsXG4gIG9uT3BlblByb2ZpbGUsXG4gIG9uT3BlbkFwcG9pbnRtZW50UmVjb3JkLFxyXG4gIGNsaWVudHMgPSBbXSxcclxuICBjdXJyZW50VXNlciA9IG51bGwsXHJcbiAgbGl2ZUFwcG9pbnRtZW50cyA9IG51bGwsXHJcbiAgbGl2ZVVwZGF0ZWRBdCA9IG51bGwsXHJcbiAgYmFyYmVycyA9IFtdLFxyXG4gIHNlcnZpY2VzID0gW10sXHJcbiAgb25CYXJiZXJGaWVsZENoYW5nZSxcclxuICBvblNhdmVCYXJiZXIsXHJcbiAgb25BZGRCYXJiZXIsXHJcbiAgb25EZWxldGVCYXJiZXIsXHJcbiAgb25TZXJ2aWNlRmllbGRDaGFuZ2UsXHJcbiAgb25TZXJ2aWNlUHJpY2VDaGFuZ2UsXG4gIG9uRGVsZXRlU2VydmljZSxcbiAgb25BZGRTZXJ2aWNlLFxuICBvbkFjdGl2ZVRhYmxlQ2hhbmdlLFxuICBwcmVmZXJyZWRUYWJsZSA9IG51bGwsXG4gIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZCxcbiAgb25SZXF1ZXN0Q29uZmlybSA9IG51bGwsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuYWN0aXZlJywgJ0FwcG9pbnRtZW50cycpO1xyXG4gIGNvbnN0IFt0YWJsZXMsIHNldFRhYmxlc10gPSB1c2VTdGF0ZSgoKSA9PiBEQVRBX1RBQkxFUy5yZWR1Y2UoKGFjYywgdGFibGUpID0+ICh7IC4uLmFjYywgW3RhYmxlXTogW10gfSksIHt9KSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duT3B0aW9ucywgc2V0RHJvcGRvd25PcHRpb25zXSA9IHVzZVN0YXRlKHNoYXJlZE9wdGlvbnMgfHwgeyBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdLCBzdGF0dXNlczogW10gfSk7XHJcbiAgY29uc3QgW3RhYmxlRXJyb3IsIHNldFRhYmxlRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmFyYmVyLCBzZXRTZWxlY3RlZEJhcmJlcl0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5iYXJiZXJGaWx0ZXInLCAnYWxsJyk7XHJcbiAgY29uc3QgW2hpZGRlblN0YXR1c2VzLCBzZXRIaWRkZW5TdGF0dXNlc10gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5oaWRkZW5TdGF0dXNlcycsIFtdKTtcclxuICBjb25zdCBbaGlkZGVuQ29sdW1uc01hcCwgc2V0SGlkZGVuQ29sdW1uc01hcF0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5oaWRkZW5Db2x1bW5zJywge1xyXG4gICAgQXBwb2ludG1lbnRzOiBbJ1VzZXJJRCddLFxyXG4gICAgU2NoZWR1bGVzOiBbXSxcclxuICAgIFVzZXJzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbc29ydENvbmZpZ3MsIHNldFNvcnRDb25maWdzXSA9IHVzZUxvY2FsU3RvcmFnZShcclxuICAgICd0YWJsZXMuc29ydENvbmZpZ3MnLFxyXG4gICAgREFUQV9UQUJMRVMucmVkdWNlKChhY2MsIHRhYmxlKSA9PiAoeyAuLi5hY2MsIFt0YWJsZV06IFRBQkxFX0NPTkZJR1t0YWJsZV0/LmRlZmF1bHRTb3J0IHx8IG51bGwgfSksIHt9KVxyXG4gICk7XHJcbiAgY29uc3QgW2NyZWF0ZU1vZGFsT3Blbiwgc2V0Q3JlYXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3RBcHBvaW50bWVudHMsIHNldFNob3dQYXN0QXBwb2ludG1lbnRzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLnNob3dQYXN0QXBwb2ludG1lbnRzJywgdHJ1ZSk7XHJcbiAgY29uc3QgW2dyb3VwQXBwb2ludG1lbnRzQnlEYXRlLCBzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5ncm91cEFwcG9pbnRtZW50c0J5RGF0ZScsIHRydWUpO1xyXG4gIGNvbnN0IGFwcG9pbnRtZW50VGVtcGxhdGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIEN1c3RvbWVyTmFtZTogJycsXHJcbiAgICAgIFBob25lOiAnJyxcclxuICAgICAgQmFyYmVyOiBwaWNrQmFyYmVyRm9yVXNlcihjdXJyZW50VXNlciwgZHJvcGRvd25PcHRpb25zLmJhcmJlcnMgfHwgW10pLFxyXG4gICAgICBEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxyXG4gICAgICBUaW1lOiAnJyxcclxuICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZSgoZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzICYmIGRyb3Bkb3duT3B0aW9ucy5zdGF0dXNlc1swXSkgfHwgJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyksXHJcbiAgICAgIFNlcnZpY2VzOiAnJyxcclxuICAgICAgVXNlcklEOiAnJyxcclxuICAgIH0pLFxyXG4gICAgW2Ryb3Bkb3duT3B0aW9ucywgY3VycmVudFVzZXI/LmRpc3BsYXlOYW1lLCBjdXJyZW50VXNlcj8udXNlcm5hbWVdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaGFyZWRPcHRpb25zKSB7XHJcbiAgICAgIHNldERyb3Bkb3duT3B0aW9ucyh7XHJcbiAgICAgICAgLi4uc2hhcmVkT3B0aW9ucyxcclxuICAgICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChzaGFyZWRPcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3NoYXJlZE9wdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlVGFibGUgPT09ICdTY2hlZHVsZXMnKSB7XG4gICAgICBzZXRBY3RpdmVUYWJsZSgnQmFyYmVycycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIVRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0pIHtcbiAgICAgIHNldEFjdGl2ZVRhYmxlKCdBcHBvaW50bWVudHMnKTtcbiAgICB9XG4gIH0sIFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uQWN0aXZlVGFibGVDaGFuZ2U/LihhY3RpdmVUYWJsZSk7XG4gIH0sIFthY3RpdmVUYWJsZSwgb25BY3RpdmVUYWJsZUNoYW5nZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcmVmZXJyZWRUYWJsZSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRUYWJsZSA9IHByZWZlcnJlZFRhYmxlID09PSAnU2NoZWR1bGVzJyA/ICdCYXJiZXJzJyA6IHByZWZlcnJlZFRhYmxlO1xuICAgIGlmIChUQUJMRV9PUkRFUi5pbmNsdWRlcyhuZXh0VGFibGUpKSB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYmxlKG5leHRUYWJsZSk7XHJcbiAgICB9XHJcbiAgICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQ/LigpO1xyXG4gIH0sIFtwcmVmZXJyZWRUYWJsZSwgc2V0QWN0aXZlVGFibGUsIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SGlkZGVuU3RhdHVzZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmZyb20obmV3IFNldChwcmV2Lm1hcCgoc3RhdHVzKSA9PiBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpKS5maWx0ZXIoQm9vbGVhbikpKTtcclxuICAgICAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSBwcmV2Lmxlbmd0aCAmJiBub3JtYWxpemVkLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBwcmV2W2luZGV4XSkpIHtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICAgIH0pO1xyXG4gIH0sIFtzZXRIaWRkZW5TdGF0dXNlc10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRhYmxlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICBzZXRUYWJsZUVycm9yKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAuLi5EQVRBX1RBQkxFUy5tYXAoKHRhYmxlKSA9PiBhcGlSZXF1ZXN0KGAvJHt0YWJsZX1gKSksXHJcbiAgICAgICAgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzJyksXHJcbiAgICAgIF0pO1xyXG4gICAgICBjb25zdCBuZXh0VGFibGVzID0ge307XHJcbiAgICAgIERBVEFfVEFCTEVTLmZvckVhY2goKHRhYmxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSByZXNwb25zZXNbaW5kZXhdIHx8IFtdO1xyXG4gICAgICAgIG5leHRUYWJsZXNbdGFibGVdID0gdGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gcmVjb3Jkcy5tYXAoKHJvdykgPT4gKHsgLi4ucm93LCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpIH0pKSA6IHJlY29yZHM7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByYXdPcHRpb25zID0gcmVzcG9uc2VzW0RBVEFfVEFCTEVTLmxlbmd0aF0gfHwgeyBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdLCBzdGF0dXNlczogW10gfTtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgLi4ucmF3T3B0aW9ucyxcclxuICAgICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChyYXdPcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGFibGVzKG5leHRUYWJsZXMpO1xyXG4gICAgICBzZXREcm9wZG93bk9wdGlvbnMobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgICBvbk9wdGlvbnNVcGRhdGU/Lihub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUYWJsZSBmZXRjaCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0YLQsNCx0LvQuNGG0YsnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGlSZXF1ZXN0LCBvbk9wdGlvbnNVcGRhdGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVGFibGVzKCk7XHJcbiAgfSwgW2ZldGNoVGFibGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGl2ZUFwcG9pbnRtZW50cykpIHJldHVybjtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQXBwb2ludG1lbnRzOiBsaXZlQXBwb2ludG1lbnRzLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgIC4uLnJvdyxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpLFxyXG4gICAgICB9KSksXHJcbiAgICB9KSk7XHJcbiAgfSwgW2xpdmVBcHBvaW50bWVudHMsIGxpdmVVcGRhdGVkQXRdKTtcclxuXHJcbiAgY29uc3QgY3VycmVudENvbHVtbnMgPSBUQUJMRV9DT0xVTU5TW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICBjb25zdCBoaWRkZW5Db2x1bW5zID0gaGlkZGVuQ29sdW1uc01hcFthY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSBjdXJyZW50Q29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IHNvcnRDb25maWcgPSBzb3J0Q29uZmlnc1thY3RpdmVUYWJsZV0gfHwgVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXT8uZGVmYXVsdFNvcnQgfHwgbnVsbDtcclxuXHJcbiAgY29uc3QgcHJvY2Vzc2VkUm93cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgc291cmNlID0gdGFibGVzW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICAgIGlmICghc291cmNlLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgbGV0IHJvd3MgPSBbLi4uc291cmNlXTtcclxuICAgIGlmIChUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdPy5zdXBwb3J0c0JhcmJlckZpbHRlciAmJiBzZWxlY3RlZEJhcmJlciAhPT0gJ2FsbCcpIHtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IG5vcm1hbGl6ZVRleHQocm93LkJhcmJlcikudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplVGV4dChzZWxlY3RlZEJhcmJlcikudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnKSB7XHJcbiAgICAgIGNvbnN0IG5vd1RzID0gRGF0ZS5ub3coKTtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgICBpZiAoaGlkZGVuU3RhdHVzZXMubGVuZ3RoICYmIGhpZGRlblN0YXR1c2VzLmluY2x1ZGVzKHJvdy5TdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNob3dQYXN0QXBwb2ludG1lbnRzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50KHJvdywgbm93VHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzZWFyY2hUZXJtLnRyaW0oKSkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFRlcm0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiB2aXNpYmxlQ29sdW1ucy5zb21lKChjb2x1bW4pID0+IG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbi5rZXldKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRDb25maWc/LmtleSkge1xyXG4gICAgICBjb25zdCBjb2x1bW5EZWYgPSBjdXJyZW50Q29sdW1ucy5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5rZXkgPT09IHNvcnRDb25maWcua2V5KTtcclxuICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHJlc29sdmVTb3J0VmFsdWUoYSwgY29sdW1uRGVmLCBhY3RpdmVUYWJsZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByZXNvbHZlU29ydFZhbHVlKGIsIGNvbHVtbkRlZiwgYWN0aXZlVGFibGUpO1xyXG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmlnaHQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gbGVmdCAtIHJpZ2h0IDogcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gKGxlZnQgPiByaWdodCA/IDEgOiAtMSkgOiBsZWZ0ID4gcmlnaHQgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfSwgW3RhYmxlcywgYWN0aXZlVGFibGUsIHNlbGVjdGVkQmFyYmVyLCBoaWRkZW5TdGF0dXNlcywgc2VhcmNoVGVybSwgdmlzaWJsZUNvbHVtbnMsIHNvcnRDb25maWcsIHNob3dQYXN0QXBwb2ludG1lbnRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoY29sdW1uS2V5KSA9PiB7XHJcbiAgICBzZXRTb3J0Q29uZmlncygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gcHJldlthY3RpdmVUYWJsZV07XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGN1cnJlbnQ/LmtleSA9PT0gY29sdW1uS2V5ICYmIGN1cnJlbnQuZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbYWN0aXZlVGFibGVdOiB7IGtleTogY29sdW1uS2V5LCBkaXJlY3Rpb24gfSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29sdW1uID0gKGNvbHVtbktleSkgPT4ge1xyXG4gICAgc2V0SGlkZGVuQ29sdW1uc01hcCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHByZXZbYWN0aXZlVGFibGVdIHx8IFtdKTtcclxuICAgICAgaWYgKGhpZGRlbi5oYXMoY29sdW1uS2V5KSkge1xyXG4gICAgICAgIGhpZGRlbi5kZWxldGUoY29sdW1uS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChoaWRkZW4uc2l6ZSA8IGN1cnJlbnRDb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBoaWRkZW4uYWRkKGNvbHVtbktleSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2FjdGl2ZVRhYmxlXTogQXJyYXkuZnJvbShoaWRkZW4pIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKTtcclxuICAgIHNldEhpZGRlblN0YXR1c2VzKChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhub3JtYWxpemVkKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBub3JtYWxpemVkKSA6IFsuLi5wcmV2LCBub3JtYWxpemVkXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChyZWNvcmRJZCwgZGF0YSwgeyB0YWJsZUlkOiBvdmVycmlkZVRhYmxlSWQgfSA9IHt9KSA9PiB7XHJcbiAgICBpZiAoIXJlY29yZElkKSByZXR1cm47XHJcbiAgICBjb25zdCB0YWJsZUlkID0gb3ZlcnJpZGVUYWJsZUlkIHx8IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPVxyXG4gICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBkYXRhPy5TdGF0dXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8geyAuLi5kYXRhLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRhdGEuU3RhdHVzKSB9XHJcbiAgICAgICAgOiBkYXRhO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBbdGFibGVJZF06IGxpc3QubWFwKChyb3cpID0+IChnZXRSZWNvcmRJZChyb3cpID09PSByZWNvcmRJZCA/IHsgLi4ucm93LCAuLi5ub3JtYWxpemVkRGF0YSB9IDogcm93KSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPVxyXG4gICAgICAgIHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnXHJcbiAgICAgICAgICA/IHsgLi4uKG9yaWdpbmFsLmZpbmQoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSA9PT0gcmVjb3JkSWQpIHx8IHt9KSwgLi4ubm9ybWFsaXplZERhdGEgfVxyXG4gICAgICAgICAgOiBub3JtYWxpemVkRGF0YTtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkSWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7QsdC90L7QstC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgICAgc2V0VGFibGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbdGFibGVJZF06IG9yaWdpbmFsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocmVjb3JkLCB7IHNraXBDb25maXJtID0gZmFsc2UgfSA9IHt9KSA9PiB7XHJcbiAgICBpZiAoIXJlY29yZCB8fCBhY3RpdmVUYWJsZSA9PT0gJ1NjaGVkdWxlcycpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIGNvbnN0IGNvbmZpcm1Db3B5ID0gKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0YWJsZUlkKSB7XHJcbiAgICAgICAgY2FzZSAnVXNlcnMnOlxyXG4gICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQutC70LjQtdC90YLQsD8nLCBtZXNzYWdlOiAn0JrQu9C40LXQvdGCINCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uJyB9O1xyXG4gICAgICAgIGNhc2UgJ0FwcG9pbnRtZW50cyc6XHJcbiAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjD8nLCBtZXNzYWdlOiAn0JfQsNC/0LjRgdGMINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsIG1lc3NhZ2U6ICfQl9Cw0L/QuNGB0Ywg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsC4nIH07XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBpZiAoIXNraXBDb25maXJtKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IG9uUmVxdWVzdENvbmZpcm1cclxuICAgICAgICA/IGF3YWl0IG9uUmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICAgICAgICAuLi5jb25maXJtQ29weSxcclxuICAgICAgICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICAgICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFt0YWJsZUlkXTogbGlzdC5maWx0ZXIoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSAhPT0gZ2V0UmVjb3JkSWQocmVjb3JkKSkgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUmVjb3JkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgcGF5bG9hZD8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8geyAuLi5wYXlsb2FkLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHBheWxvYWQuU3RhdHVzKSB9XHJcbiAgICAgICAgICA6IHBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZWRQYXlsb2FkKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoVGFibGVzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDbGllbnRQcm9maWxlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoY2xpZW50KSA9PiB7XHJcbiAgICAgIGlmICghY2xpZW50Py5OYW1lKSByZXR1cm4gbnVsbDtcclxuICAgICAgcmV0dXJuIGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQoY2xpZW50Lk5hbWUpfWApO1xyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRhYmxlU2V0dGluZ3MgPSBUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdIHx8IHt9O1xyXG4gIGNvbnN0IGlzQ3VzdG9tVGFibGUgPSB0YWJsZVNldHRpbmdzPy5tb2RlID09PSAnY3VzdG9tJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICB7VklTSUJMRV9UQUJMRV9PUkRFUi5tYXAoKHRhYmxlKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dGFibGV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYmxlKHRhYmxlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwgcHgtNCBweS0yIHRleHQtc20nLFxyXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYmxlID09PSB0YWJsZSA/ICdiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUnIDogJ2JnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1RBQkxFX0NPTkZJR1t0YWJsZV0/LmxhYmVsIHx8IHRhYmxlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2lzQ3VzdG9tVGFibGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgIHthY3RpdmVUYWJsZSA9PT0gJ0JhcmJlcnMnICYmIChcclxuICAgICAgICAgICAgPEJhcmJlcnNWaWV3XHJcbiAgICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgICBzY2hlZHVsZXM9e3RhYmxlcy5TY2hlZHVsZXMgfHwgW119XHJcbiAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25CYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZUJhcmJlcn1cclxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRCYXJiZXJ9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgICAgIGxvYWRBdmF0YXJPcHRpb25zPXsoKSA9PiBhcGlSZXF1ZXN0KCcvYXNzZXRzL2F2YXRhcnMnKX1cclxuICAgICAgICAgICAgICBvblNjaGVkdWxlVXBkYXRlPXsocmVjb3JkSWQsIHBheWxvYWQpID0+IGhhbmRsZVVwZGF0ZShyZWNvcmRJZCwgcGF5bG9hZCwgeyB0YWJsZUlkOiAnU2NoZWR1bGVzJyB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YWN0aXZlVGFibGUgPT09ICdTZXJ2aWNlcycgJiYgKFxyXG4gICAgICAgICAgICA8U2VydmljZXNWaWV3XHJcbiAgICAgICAgICAgICAgc2VydmljZXM9e3NlcnZpY2VzfVxyXG4gICAgICAgICAgICAgIGJhcmJlcnM9e2JhcmJlcnN9XHJcbiAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25TZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25QcmljZUNoYW5nZT17b25TZXJ2aWNlUHJpY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlU2VydmljZX1cclxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3RhYmxlU2V0dGluZ3MgJiYgKFxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT17dGFibGVTZXR0aW5ncy5sYWJlbH0+XHJcbiAgICAgICAgICB7dGFibGVFcnJvciAmJiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17dGFibGVFcnJvcn0gLz59XHJcbiAgICAgICAgICA8VGFibGVUb29sYmFyXHJcbiAgICAgICAgICAgIHRhYmxlSWQ9e2FjdGl2ZVRhYmxlfVxyXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBzZXRTZWFyY2hUZXJtPXtzZXRTZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0JhcmJlckZpbHRlcj17dGFibGVTZXR0aW5ncy5zdXBwb3J0c0JhcmJlckZpbHRlcn1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCYXJiZXI9e3NlbGVjdGVkQmFyYmVyfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJhcmJlcj17c2V0U2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIGJhcmJlcnM9e2Ryb3Bkb3duT3B0aW9ucy5iYXJiZXJzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c1N0YXR1c0ZpbHRlcj17dGFibGVTZXR0aW5ncy5zdXBwb3J0c1N0YXR1c0ZpbHRlcn1cclxuICAgICAgICAgICAgc3RhdHVzZXM9e2Ryb3Bkb3duT3B0aW9ucy5zdGF0dXNlc31cclxuICAgICAgICAgICAgaGlkZGVuU3RhdHVzZXM9e2hpZGRlblN0YXR1c2VzfVxyXG4gICAgICAgICAgICB0b2dnbGVTdGF0dXM9e3RvZ2dsZVN0YXR1c31cclxuICAgICAgICAgICAgcmVzZXRTdGF0dXNlcz17KCkgPT4gc2V0SGlkZGVuU3RhdHVzZXMoW10pfVxyXG4gICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgaGlkZGVuQ29sdW1ucz17aGlkZGVuQ29sdW1uc31cclxuICAgICAgICAgICAgdG9nZ2xlQ29sdW1uPXt0b2dnbGVDb2x1bW59XHJcbiAgICAgICAgICAgIGNhbkNyZWF0ZT17dGFibGVTZXR0aW5ncy5jYW5DcmVhdGV9XHJcbiAgICAgICAgICAgIG9uT3BlbkNyZWF0ZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBvblJlZnJlc2g9e2ZldGNoVGFibGVzfVxyXG4gICAgICAgICAgICBzaG93UGFzdEFwcG9pbnRtZW50cz17c2hvd1Bhc3RBcHBvaW50bWVudHN9XHJcbiAgICAgICAgICAgIHNldFNob3dQYXN0QXBwb2ludG1lbnRzPXtzZXRTaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc3VwcG9ydHNHcm91cGluZz17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnfVxyXG4gICAgICAgICAgICBncm91cEJ5RGF0ZT17Z3JvdXBBcHBvaW50bWVudHNCeURhdGV9XHJcbiAgICAgICAgICAgIHNldEdyb3VwQnlEYXRlPXtzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aXNGZXRjaGluZyA/IChcclxuICAgICAgICAgICAgPExvYWRpbmdTdGF0ZSBsYWJlbD1cItCe0LHQvdC+0LLQu9GP0Y4g0YLQsNCx0LvQuNGG0YsuLi5cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAge2FjdGl2ZVRhYmxlID09PSAnVXNlcnMnID8gKFxyXG4gICAgICAgICAgICAgICAgPENsaWVudHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGNsaWVudHM9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGJhcmJlcnM9e2Ryb3Bkb3duT3B0aW9ucy5iYXJiZXJzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICBmZXRjaEhpc3Rvcnk9e2ZldGNoQ2xpZW50UHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q29uZmlybT17b25SZXF1ZXN0Q29uZmlybX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0Q29uZmlnPXtzb3J0Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICBvblNvcnQ9e2hhbmRsZVNvcnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSA/IGhhbmRsZURlbGV0ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b25PcGVuUHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IG9uT3BlbkFwcG9pbnRtZW50UmVjb3JkIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgZ3JvdXBCeURhdGU9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IGdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgICAgIHt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSAmJlxyXG4gICAgICAgICAgICAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gKFxyXG4gICAgICAgICAgICAgIDxBcHBvaW50bWVudE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtjcmVhdGVNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICBhcHBvaW50bWVudD17YXBwb2ludG1lbnRUZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvblNhdmU9eyh7IHBheWxvYWQgfSkgPT4gaGFuZGxlQ3JlYXRlUmVjb3JkKHBheWxvYWQpfVxyXG4gICAgICAgICAgICAgICAgaXNOZXdcclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Q3JlYXRlUmVjb3JkTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17aGFuZGxlQ3JlYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICB0YWJsZU5hbWU9e3RhYmxlU2V0dGluZ3MubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBoaWRkZW5GaWVsZHM9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IFsnVXNlcklEJywgJ1JlbWluZGVyMmhDbGllbnRTZW50JywgJ1JlbWluZGVyMmhCYXJiZXJTZW50J10gOiBbXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEJvdENvbnRyb2xWaWV3ID0gKHtcbiAgc3RhdHVzLFxuICBzZXR0aW5ncyxcbiAgYmFja3VwcyA9IFtdLFxuICBtZXNzYWdlcyA9IFtdLFxuICBvblRvZ2dsZUVuYWJsZWQsXHJcbiAgb25TdGFydCxcclxuICBvblN0b3AsXHJcbiAgb25SZXN0YXJ0LFxyXG4gIG9uU2F2ZVNldHRpbmdzLFxyXG4gIG9uU2F2ZU1lc3NhZ2UsXG4gIG9uUmVzdG9yZUJhY2t1cCxcbiAgb25DcmVhdGVCYWNrdXAsXG4gIG9uRGVsZXRlQmFja3VwLFxuICBsaWNlbnNlU3RhdHVzLFxuICB1cGRhdGVJbmZvLFxuICBvblJlZnJlc2hVcGRhdGUsXG4gIG9uQXBwbHlVcGRhdGUsXHJcbiAgc3lzdGVtQnVzeSxcclxuICB2aWV3TW9kZSA9ICdib3QnLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYm90RGVzY3JpcHRpb24gfHwgJycpO1xyXG4gIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoc2V0dGluZ3M/LmFib3V0VGV4dCB8fCAnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREZXNjcmlwdGlvbihzZXR0aW5ncz8uYm90RGVzY3JpcHRpb24gfHwgJycpO1xyXG4gICAgc2V0QWJvdXQoc2V0dGluZ3M/LmFib3V0VGV4dCB8fCAnJyk7XHJcbiAgfSwgW3NldHRpbmdzXSk7XHJcblxyXG4gIGlmICh2aWV3TW9kZSA9PT0gJ3N5c3RlbScpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgPEJhY2t1cHNQYW5lbCBiYWNrdXBzPXtiYWNrdXBzfSBvblJlc3RvcmU9e29uUmVzdG9yZUJhY2t1cH0gb25DcmVhdGU9e29uQ3JlYXRlQmFja3VwfSBvbkRlbGV0ZT17b25EZWxldGVCYWNrdXB9IC8+XG5cclxuICAgICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQm9C40YbQtdC90LfQuNGPINC4INC+0LHQvdC+0LLQu9C10L3QuNGPXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7Qm9C40YbQtdC90LfQuNGPPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTFcIj7QodGC0LDRgtGD0YE6IHtsaWNlbnNlU3RhdHVzPy52YWxpZCA/ICfQkNC60YLQuNCy0L3QsCcgOiAn0J3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LAnfTwvcD5cclxuICAgICAgICAgICAgICA8cD7QmtC+0LzQvNC10L3RgtCw0YDQuNC5OiB7bGljZW5zZVN0YXR1cz8ubWVzc2FnZSB8fCAn0J3QtdGCINC00LDQvdC90YvRhSd9PC9wPlxyXG4gICAgICAgICAgICAgIHtsaWNlbnNlU3RhdHVzPy5saWNlbnNlPy5vd25lciAmJiA8cD7QktC70LDQtNC10LvQtdGGOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm93bmVyfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/LmV4cGlyZXNBdCAmJiA8cD7QlNC10LnRgdGC0LLRg9C10YIg0LTQviB7Zm9ybWF0RGF0ZShsaWNlbnNlU3RhdHVzLmxpY2Vuc2UuZXhwaXJlc0F0KX08L3A+fVxyXG4gICAgICAgICAgICAgIHtsaWNlbnNlU3RhdHVzPy5saWNlbnNlPy5udW1iZXIgJiYgPHA+0J3QvtC80LXRgDoge2xpY2Vuc2VTdGF0dXMubGljZW5zZS5udW1iZXJ9PC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC00IHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+0J7QsdC90L7QstC70LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCf0L7RgdC70LXQtNC90Y/RjyDQstC10YDRgdC40Y86IHt1cGRhdGVJbmZvPy52ZXJzaW9uIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICA8cD7Qn9GA0L7QstC10YDQtdC90L46IHt1cGRhdGVJbmZvPy5jaGVja2VkQXQgPyBmb3JtYXREYXRlKHVwZGF0ZUluZm8uY2hlY2tlZEF0KSA6ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICA8cD7QodGC0LDRgtGD0YE6IHt1cGRhdGVJbmZvPy5kZXRhaWxzIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVmcmVzaFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N5c3RlbUJ1c3l9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQn9GA0L7QstC10YDQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeSB8fCAhdXBkYXRlSW5mbz8uYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7c3lzdGVtQnVzeSA/ICfQntCx0L3QvtCy0LvQtdC90LjQteKApicgOiAn0J7QsdC90L7QstC40YLRjCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0KHRgtCw0YLRg9GBINCx0L7RgtCwXCJcclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCX0LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0b3B9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctcm9zZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQntGB0YLQsNC90L7QstC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblJlc3RhcnR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctc2xhdGUtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0J/QtdGA0LXQt9Cw0L/Rg9GB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPtCh0L7RgdGC0L7Rjzoge3N0YXR1cz8ucnVubmluZyA/ICfRgNCw0LHQvtGC0LDQtdGCJyA6ICfQvtGB0YLQsNC90L7QstC70LXQvSd9PC9wPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NldHRpbmdzPy5pc0JvdEVuYWJsZWQgIT09IGZhbHNlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvblRvZ2dsZUVuYWJsZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAg0JDQstGC0L7RgdGC0LDRgNGCINCy0LzQtdGB0YLQtSDRgSBDUk1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0KLQtdC60YHRgtGLINCx0L7RgtCwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0J7Qv9C40YHQsNC90LjQtSDQu9C10L3QtNC40L3Qs9CwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX0gcm93cz17M30gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QkdC70L7QuiDCq9CeINC90LDRgcK7PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXthYm91dH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0QWJvdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcm93cz17NH0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmVTZXR0aW5ncyh7IGJvdERlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgYWJvdXRUZXh0OiBhYm91dCB9KX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINGC0LXQutGB0YLRi1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgTG9naW5TY3JlZW4gPSAoeyBvbkxvZ2luLCBlcnJvciB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9naW5PcHRpb25zLCBzZXRMb2dpbk9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcHRpb25zRXJyb3IsIHNldE9wdGlvbnNFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcHRpb25zLCBzZXRMb2FkaW5nT3B0aW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgZmV0Y2hPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nT3B0aW9ucyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vbG9naW4vb3B0aW9uc2ApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhub3JtYWxpemVkKTtcclxuICAgICAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHNldFVzZXJuYW1lKG5vcm1hbGl6ZWRbMF0ubG9naW4pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIW5vcm1hbGl6ZWQuc29tZSgob3B0aW9uKSA9PiBvcHRpb24ubG9naW4gPT09IHVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPcHRpb25zRXJyb3IoJycpO1xyXG4gICAgICB9IGNhdGNoIChmZXRjaEVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBzZXRMb2dpbk9wdGlvbnMoW10pO1xyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHQv9C40YHQvtC6INCx0LDRgNCx0LXRgNC+0LIuJyk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgc2V0TG9hZGluZ09wdGlvbnMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoT3B0aW9ucygpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRWYWxpZGF0aW9uRXJyb3IoJycpO1xyXG4gICAgfVxyXG4gIH0sIFtlcnJvcl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcign0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCDQuNC3INGB0L/QuNGB0LrQsCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcign0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICBvbkxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0RGlzYWJsZWQgPSBsb2FkaW5nT3B0aW9ucyB8fCBsb2dpbk9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2xhdGUtOTAwIHB4LTRcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHNwYWNlLXktNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAgcC04IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+QmFyYmVyIEJvdCBDUk08L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAgKNC70L7Qs9C40L0pPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0RGlzYWJsZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRWYWxpZGF0aW9uRXJyb3IoJycpO1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTUwIHB4LTMgcHktMiB0ZXh0LXdoaXRlIGRpc2FibGVkOm9wYWNpdHktNjBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+e2xvYWRpbmdPcHRpb25zID8gJ9CX0LDQs9GA0YPQt9C60LAuLi4nIDogJ9Cj0LrQsNC20LjRgtC1INCx0LDRgNCx0LXRgNCwJ308L29wdGlvbj5cclxuICAgICAgICAgICAge2xvZ2luT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24uaWQgfHwgb3B0aW9uLmxvZ2lufSB2YWx1ZT17b3B0aW9uLmxvZ2lufT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWwgfHwgb3B0aW9uLmxvZ2lufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+0JTQvtGB0YLRg9C/0L3RiyDRgtC+0LvRjNC60L4g0LDQutGC0LjQstC90YvQtSDQsNC60LrQsNGD0L3RgtGLINC40Lcg0YDQsNC30LTQtdC70LAgwqvQkdCw0YDQsdC10YDRi8K7LjwvcD5cclxuICAgICAgICAgICAge29wdGlvbnNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcm9zZS00MDBcIj57b3B0aW9uc0Vycm9yfTwvcD59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsodmFsaWRhdGlvbkVycm9yIHx8IGVycm9yKSAmJiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17dmFsaWRhdGlvbkVycm9yIHx8IGVycm9yfSAvPn1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIiBkaXNhYmxlZD17c2VsZWN0RGlzYWJsZWR9PlxyXG4gICAgICAgICAg0JLQvtC50YLQuFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmFyYmVyLXNlc3Npb24nKTtcclxuICAgICAgcmV0dXJuIHNhdmVkID8gYnVpbGRTZXNzaW9uUGF5bG9hZChKU09OLnBhcnNlKHNhdmVkKSkgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZUxvY2FsU3RvcmFnZSgnYmFyYmVyLmFjdGl2ZVRhYicsICdkYXNoYm9hcmQnKTtcclxuICBjb25zdCBbcGVuZGluZ1RhYmxlVmlldywgc2V0UGVuZGluZ1RhYmxlVmlld10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjdGl2ZURhdGFUYWJsZSwgc2V0QWN0aXZlRGF0YVRhYmxlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYmxlcy5hY3RpdmUnKTtcbiAgICAgIHJldHVybiBzdG9yZWQgPyBKU09OLnBhcnNlKHN0b3JlZCkgOiAnQXBwb2ludG1lbnRzJztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiAnQXBwb2ludG1lbnRzJztcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbZGFzaGJvYXJkLCBzZXREYXNoYm9hcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JhcmJlcnMsIHNldEJhcmJlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtib3RTdGF0dXMsIHNldEJvdFN0YXR1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYm90U2V0dGluZ3MsIHNldEJvdFNldHRpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RNZXNzYWdlcywgc2V0Qm90TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaWNlbnNlU3RhdHVzLCBzZXRMaWNlbnNlU3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1cGRhdGVJbmZvLCBzZXRVcGRhdGVJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcHRpb25zQ2FjaGUsIHNldE9wdGlvbnNDYWNoZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJvZmlsZU1vZGFsLCBzZXRQcm9maWxlTW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgY29uc3QgW2FwcG9pbnRtZW50TW9kYWwsIHNldEFwcG9pbnRtZW50TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgb3B0aW9uczogbnVsbCwgaXNOZXc6IGZhbHNlLCBhbGxvd0RlbGV0ZTogZmFsc2UgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnbG9iYWxFcnJvciwgc2V0R2xvYmFsRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N5c3RlbUJ1c3ksIHNldFN5c3RlbUJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGggPCAxMDI0KTtcclxuICBjb25zdCBbcmVhbHRpbWVTbmFwc2hvdCwgc2V0UmVhbHRpbWVTbmFwc2hvdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZmF0YWxFcnJvciwgc2V0RmF0YWxFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY29uZmlybURpYWxvZywgc2V0Q29uZmlybURpYWxvZ10gPSB1c2VTdGF0ZShkZWZhdWx0Q29uZmlybVN0YXRlKTtcclxuICBjb25zdCBjb25maXJtUmVzb2x2ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RDb25maXJtID0gdXNlQ2FsbGJhY2soXHJcbiAgICAob3B0aW9ucyA9IHt9KSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50ID0gcmVzb2x2ZTtcclxuICAgICAgICBzZXRDb25maXJtRGlhbG9nKHsgLi4uZGVmYXVsdENvbmZpcm1TdGF0ZSwgLi4ub3B0aW9ucywgb3BlbjogdHJ1ZSB9KTtcclxuICAgICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1SZXN1bHQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgc2V0Q29uZmlybURpYWxvZyhkZWZhdWx0Q29uZmlybVN0YXRlKTtcclxuICAgICAgaWYgKGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQocmVzdWx0KTtcclxuICAgICAgICBjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnIHx8IGFjdGl2ZVRhYiA9PT0gJ3NlcnZpY2VzJykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gYWN0aXZlVGFiID09PSAnYmFyYmVycycgPyAnQmFyYmVycycgOiAnU2VydmljZXMnO1xuICAgICAgc2V0UGVuZGluZ1RhYmxlVmlldyh0YXJnZXQpO1xuICAgICAgc2V0QWN0aXZlVGFiKCd0YWJsZXMnKTtcbiAgICB9XG4gIH0sIFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJUYWJsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICh0YWJsZUlkKSA9PiB7XG4gICAgICBpZiAoIXRhYmxlSWQpIHJldHVybjtcbiAgICAgIHNldEFjdGl2ZURhdGFUYWJsZSh0YWJsZUlkKTtcbiAgICAgIHNldFBlbmRpbmdUYWJsZVZpZXcodGFibGVJZCk7XG4gICAgICBzZXRBY3RpdmVUYWIoJ3RhYmxlcycpO1xuICAgIH0sXG4gICAgW3NldEFjdGl2ZVRhYiwgc2V0UGVuZGluZ1RhYmxlVmlld11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVBY3RpdmVUYWJsZVN5bmMgPSB1c2VDYWxsYmFjayhcbiAgICAodGFibGVJZCkgPT4ge1xuICAgICAgaWYgKCF0YWJsZUlkKSByZXR1cm47XG4gICAgICBzZXRBY3RpdmVEYXRhVGFibGUodGFibGVJZCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRQZW5kaW5nVGFibGVWaWV3KG51bGwpLCBbXSk7XG4gIGNvbnN0IHNlcnZpY2VTYXZlVGltZXJzID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPCAxMDI0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmFyYmVyLXNlc3Npb24nKTtcclxuICAgIHNldFNlc3Npb24obnVsbCk7XHJcbiAgICBzZXREYXNoYm9hcmQobnVsbCk7XHJcbiAgICBzZXRHbG9iYWxFcnJvcignJyk7XHJcbiAgICBzZXRSZWFsdGltZVNuYXBzaG90KG51bGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYXBpUmVxdWVzdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGVuZHBvaW50LCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uPy50b2tlbikgdGhyb3cgbmV3IEVycm9yKCfQndC10YIg0LDQutGC0LjQstC90L7QuSDRgdC10YHRgdC40LgnKTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbi50b2tlbn1gLFxyXG4gICAgICAgIC4uLihvcHRpb25zLmJvZHkgJiYgIW9wdGlvbnMuaGVhZGVycz8uWydDb250ZW50LVR5cGUnXSA/IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IDoge30pLFxyXG4gICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke2VuZHBvaW50fWAsIHsgLi4ub3B0aW9ucywgaGVhZGVycyB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgaGFuZGxlTG9nb3V0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQodC10YHRgdC40Y8g0LjRgdGC0LXQutC70LAnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC30LDQv9GA0L7RgdCwJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSByZXR1cm4gbnVsbDtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0sXHJcbiAgICBbc2Vzc2lvbj8udG9rZW4sIGhhbmRsZUxvZ291dF1cclxuICApO1xyXG5cclxuICBjb25zdCBmZXRjaEFsbCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHJldHVybjtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRHbG9iYWxFcnJvcignJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvdmVydmlldyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9kYXNoYm9hcmQvb3ZlcnZpZXcnKTtcclxuICAgICAgc2V0RGFzaGJvYXJkKG92ZXJ2aWV3KTtcclxuICAgICAgY29uc3Qgd2l0aEZhbGxiYWNrID0gKHJlcXVlc3QsIGZhbGxiYWNrLCBsYWJlbCkgPT5cclxuICAgICAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGAke2xhYmVsfSBmZXRjaCBza2lwcGVkOmAsIGVycm9yPy5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICAgIHJldHVybiBmYWxsYmFjaztcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgW1xyXG4gICAgICAgIHNlcnZpY2VzRnVsbCxcclxuICAgICAgICBiYXJiZXJzRnVsbCxcclxuICAgICAgICBib3RTdGF0ZSxcclxuICAgICAgICBib3RNZXNzYWdlc1BheWxvYWQsXHJcbiAgICAgICAgbGljZW5zZSxcclxuICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL3NlcnZpY2VzL2Z1bGwnKSwgeyBzZXJ2aWNlczogW10gfSwgJ1NlcnZpY2VzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9iYXJiZXJzL2Z1bGwnKSwgW10sICdCYXJiZXJzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJyksIHsgc3RhdHVzOiBudWxsLCBzZXR0aW5nczogbnVsbCB9LCAnQm90IHN0YXR1cycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYm90L21lc3NhZ2VzJyksIFtdLCAnQm90IG1lc3NhZ2VzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9saWNlbnNlL3N0YXR1cycpLCBudWxsLCAnTGljZW5zZScpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZScpLCBudWxsLCAnVXBkYXRlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhcclxuICAgICAgICAgIGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cycpLFxyXG4gICAgICAgICAgeyBzdGF0dXNlczogW10sIGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10gfSxcclxuICAgICAgICAgICdPcHRpb25zJyxcclxuICAgICAgICApLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0U2VydmljZXMoc2VydmljZXNGdWxsLnNlcnZpY2VzIHx8IFtdKTtcclxuICAgICAgc2V0QmFyYmVycyhiYXJiZXJzRnVsbCB8fCBvdmVydmlldy5iYXJiZXJzIHx8IFtdKTtcclxuICAgICAgc2V0Qm90U2V0dGluZ3MoYm90U3RhdGUuc2V0dGluZ3MgfHwgb3ZlcnZpZXcuYm90Py5zZXR0aW5ncyB8fCBudWxsKTtcclxuICAgICAgc2V0Qm90U3RhdHVzKGJvdFN0YXRlLnN0YXR1cyk7XHJcbiAgICAgIHNldEJvdE1lc3NhZ2VzKGJvdE1lc3NhZ2VzUGF5bG9hZCB8fCBbXSk7XHJcbiAgICAgIHNldExpY2Vuc2VTdGF0dXMobGljZW5zZSk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8odXBkYXRlKTtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pIH07XHJcbiAgICAgIHNldE9wdGlvbnNDYWNoZShub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbYXBpUmVxdWVzdCwgc2Vzc2lvbj8udG9rZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uPy50b2tlbikge1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uPy50b2tlbiwgZmV0Y2hBbGxdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgc2V0UmVhbHRpbWVTbmFwc2hvdChudWxsKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgRXZlbnRTb3VyY2UgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgdG9rZW5QYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChzZXNzaW9uLnRva2VuKTtcclxuICAgIGNvbnN0IHN0cmVhbVVybCA9IGAke0FQSV9CQVNFX1VSTH0vZXZlbnRzL3N0cmVhbT90b2tlbj0ke3Rva2VuUGFyYW19YDtcclxuICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHN0cmVhbVVybCk7XHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGlmIChwYXlsb2FkPy50eXBlICE9PSAnYXBwb2ludG1lbnRzOnVwZGF0ZScpIHJldHVybjtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0gcGF5bG9hZC5wYXlsb2FkIHx8IHt9O1xyXG4gICAgICAgIHNldFJlYWx0aW1lU25hcHNob3Qoe1xyXG4gICAgICAgICAgcm93czogQXJyYXkuaXNBcnJheShkZXRhaWxzLnJvd3MpID8gZGV0YWlscy5yb3dzIDogW10sXHJcbiAgICAgICAgICBzdGF0czogZGV0YWlscy5zdGF0cyB8fCB7fSxcclxuICAgICAgICAgIHVwY29taW5nOiBBcnJheS5pc0FycmF5KGRldGFpbHMudXBjb21pbmcpID8gZGV0YWlscy51cGNvbWluZyA6IFtdLFxyXG4gICAgICAgICAgdXBkYXRlZEF0OiBkZXRhaWxzLnVwZGF0ZWRBdCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVhbHRpbWUgZXZlbnQgcGFyc2UgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZXZlbnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYXBwb2ludG1lbnRzJywgaGFuZGxlRXZlbnQpO1xyXG4gICAgZXZlbnRTb3VyY2Uub25lcnJvciA9ICgpID0+IHt9O1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZXZlbnRTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignYXBwb2ludG1lbnRzJywgaGFuZGxlRXZlbnQpO1xyXG4gICAgICBldmVudFNvdXJjZS5jbG9zZSgpO1xyXG4gICAgfTtcclxuICB9LCBbc2Vzc2lvbj8udG9rZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcmVhbHRpbWVTbmFwc2hvdCkgcmV0dXJuO1xyXG4gICAgc2V0RGFzaGJvYXJkKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5leHRTdGF0cyA9IHsgLi4uKHByZXY/LnN0YXRzIHx8IHt9KSwgLi4uKHJlYWx0aW1lU25hcHNob3Quc3RhdHMgfHwge30pIH07XHJcbiAgICAgIGNvbnN0IG5leHRBcHBvaW50bWVudHMgPSB7XHJcbiAgICAgICAgLi4uKHByZXY/LmFwcG9pbnRtZW50cyB8fCB7fSksXHJcbiAgICAgICAgdXBjb21pbmc6IHJlYWx0aW1lU25hcHNob3QudXBjb21pbmcgfHwgcHJldj8uYXBwb2ludG1lbnRzPy51cGNvbWluZyB8fCBbXSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFwcmV2KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHM6IG5leHRTdGF0cywgYXBwb2ludG1lbnRzOiBuZXh0QXBwb2ludG1lbnRzIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgc3RhdHM6IG5leHRTdGF0cywgYXBwb2ludG1lbnRzOiBuZXh0QXBwb2ludG1lbnRzIH07XHJcbiAgICB9KTtcclxuICB9LCBbcmVhbHRpbWVTbmFwc2hvdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsRXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZGV0YWlsID0gZXZlbnQ/LnJlYXNvbiB8fCBldmVudD8uZXJyb3I7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICAgIGRldGFpbD8ubWVzc2FnZSB8fFxyXG4gICAgICAgIGV2ZW50Py5tZXNzYWdlIHx8XHJcbiAgICAgICAgKHR5cGVvZiBkZXRhaWwgPT09ICdzdHJpbmcnID8gZGV0YWlsIDogJ9Cd0LXQuNC30LLQtdGB0YLQvdCw0Y8g0L7RiNC40LHQutCwJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dsb2JhbCBVSSBlcnJvcjonLCBkZXRhaWwgfHwgZXZlbnQpO1xyXG4gICAgICBzZXRGYXRhbEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiAoKSA9PiB7XHJcbiAgICAgIHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQuZm9yRWFjaCgodGltZXIpID0+IGNsZWFyVGltZW91dCh0aW1lcikpO1xyXG4gICAgICBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50LmNsZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHNldEF1dGhFcnJvcignJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkVXNlcm5hbWUgPSByZXNvbHZlTG9naW4odXNlcm5hbWUpO1xyXG4gICAgaWYgKCFub3JtYWxpemVkVXNlcm5hbWUpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBub3JtYWxpemVkVXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCAhZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0QXV0aEVycm9yKGRhdGEubWVzc2FnZSB8fCAn0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2Vzc2lvblBheWxvYWQgPSBidWlsZFNlc3Npb25QYXlsb2FkKHsgLi4uZGF0YSwgdXNlcm5hbWU6IG5vcm1hbGl6ZWRVc2VybmFtZSB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JhcmJlci1zZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvblBheWxvYWQpKTtcclxuICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uUGF5bG9hZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoJ9Ch0LXRgNCy0LXRgCDQvdC10LTQvtGB0YLRg9C/0LXQvScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhcmJlckZpZWxkQ2hhbmdlID0gKGlkLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIHNldEJhcmJlcnMoKHByZXYpID0+IHByZXYubWFwKChiYXJiZXIpID0+IChiYXJiZXIuaWQgPT09IGlkID8geyAuLi5iYXJiZXIsIFtmaWVsZF06IHZhbHVlIH0gOiBiYXJiZXIpKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplU2VydmljZVBheWxvYWQgPSAoc2VydmljZSkgPT4gKHtcclxuICAgIC4uLnNlcnZpY2UsXHJcbiAgICBwcmljZXM6IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoc2VydmljZS5wcmljZXMgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpXSlcclxuICAgICksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRlcml2ZUJhcmJlckxvZ2luID0gKGJhcmJlckRhdGEgPSB7fSkgPT4gcmVzb2x2ZUxvZ2luKGJhcmJlckRhdGEubG9naW4gfHwgYmFyYmVyRGF0YS5uYW1lIHx8ICcnKTtcclxuXHJcbiAgY29uc3QgYnVpbGRCYXJiZXJQYXlsb2FkID0gKGJhcmJlckRhdGEgPSB7fSwgZmFsbGJhY2tPcmRlciA9IDApID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIG5hbWU6IGJhcmJlckRhdGEubmFtZSB8fCAnJyxcclxuICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiYXJiZXJEYXRhLmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICByYXRpbmc6IGJhcmJlckRhdGEucmF0aW5nIHx8ICcnLFxyXG4gICAgICBhdmF0YXJVcmw6IGJhcmJlckRhdGEuYXZhdGFyVXJsIHx8ICcnLFxyXG4gICAgICBjb2xvcjogYmFyYmVyRGF0YS5jb2xvciB8fCAnJyxcclxuICAgICAgbG9naW46IGRlcml2ZUJhcmJlckxvZ2luKGJhcmJlckRhdGEpLFxyXG4gICAgICBwYXNzd29yZDogYmFyYmVyRGF0YS5wYXNzd29yZCB8fCAnJyxcclxuICAgICAgcGhvbmU6IGJhcmJlckRhdGEucGhvbmUgfHwgJycsXHJcbiAgICAgIHRlbGVncmFtSWQ6IGJhcmJlckRhdGEudGVsZWdyYW1JZCB8fCAnJyxcclxuICAgICAgaXNBY3RpdmU6IGJhcmJlckRhdGEuaXNBY3RpdmUgIT09IGZhbHNlLFxyXG4gICAgICBvcmRlckluZGV4OiBOdW1iZXIoYmFyYmVyRGF0YS5vcmRlckluZGV4ID8/IGZhbGxiYWNrT3JkZXIpIHx8IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGJhcmJlckRhdGEuaWQpIHtcclxuICAgICAgcGF5bG9hZC5pZCA9IGJhcmJlckRhdGEuaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQmFyYmVyID0gYXN5bmMgKGJhcmJlcikgPT4ge1xyXG4gICAgaWYgKCFiYXJiZXI/LmlkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVJlcXVlc3QoYC9CYXJiZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhcmJlci5pZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShidWlsZEJhcmJlclBheWxvYWQoYmFyYmVyKSkgfSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRCYXJiZXIgPSByZXNwb25zZSB8fCBiYXJiZXI7XHJcbiAgICAgIHNldEJhcmJlcnMoKHByZXYpID0+IHByZXYubWFwKChpdGVtKSA9PiAoaXRlbS5pZCA9PT0gdXBkYXRlZEJhcmJlci5pZCA/IHsgLi4uaXRlbSwgLi4udXBkYXRlZEJhcmJlciB9IDogaXRlbSkpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJhcmJlciA9IGFzeW5jIChiYXJiZXIpID0+IHtcclxuICAgIGlmICghYmFyYmVyPy5pZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQkdCw0YDQsdC10YAgwqske2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0JhcmJlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoYmFyYmVyLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkQmFyYmVyID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghcGF5bG9hZC5uYW1lIHx8ICFwYXlsb2FkLnBhc3N3b3JkKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKCfQl9Cw0L/QvtC70L3QuNGC0LUg0LjQvNGPLCDQu9C+0LPQuNC9INC4INC/0LDRgNC+0LvRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBuZXdCYXJiZXJQYXlsb2FkID0gYnVpbGRCYXJiZXJQYXlsb2FkKHsgLi4ucGF5bG9hZCwgaWQ6IHVuZGVmaW5lZCB9LCBiYXJiZXJzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IHsgaWQsIC4uLmJvZHkgfSA9IG5ld0JhcmJlclBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9CYXJiZXJzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC00L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlU2VydmljZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKHNlcnZpY2UpID0+IHtcclxuICAgICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9zZXJ2aWNlcy9mdWxsLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZpY2UuaWQpfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShub3JtYWxpemVTZXJ2aWNlUGF5bG9hZChzZXJ2aWNlKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbYXBpUmVxdWVzdF1cclxuICApO1xyXG5cclxuICBjb25zdCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlcnZpY2UpID0+IHtcclxuICAgICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0aW1lcnMgPSBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50O1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RpbWVyID0gdGltZXJzLmdldChzZXJ2aWNlLmlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nVGltZXIpIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKTtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBoYW5kbGVTYXZlU2VydmljZShzZXJ2aWNlKTtcclxuICAgICAgICB0aW1lcnMuZGVsZXRlKHNlcnZpY2UuaWQpO1xyXG4gICAgICB9LCA0MDApO1xyXG4gICAgICB0aW1lcnMuc2V0KHNlcnZpY2UuaWQsIHRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBbaGFuZGxlU2F2ZVNlcnZpY2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlU2VydmljZSA9IGFzeW5jIChzZXJ2aWNlKSA9PiB7XHJcbiAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQo9GB0LvRg9Cz0LAgwqske3NlcnZpY2UubmFtZSB8fCAn0JHQtdC3INC90LDQt9Cy0LDQvdC40Y8nfcK7INCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAuYCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9zZXJ2aWNlcy9mdWxsLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZpY2UuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkU2VydmljZSA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQubmFtZSkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL3NlcnZpY2VzL2Z1bGwnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShub3JtYWxpemVTZXJ2aWNlUGF5bG9hZChwYXlsb2FkKSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC00L7QsdCw0LLQuNGC0Ywg0YPRgdC70YPQs9GDJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VydmljZUZpZWxkQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRTZXJ2aWNlcygocHJldikgPT4gcHJldi5tYXAoKHNlcnZpY2UpID0+IChzZXJ2aWNlLmlkID09PSBpZCA/IHsgLi4uc2VydmljZSwgW2ZpZWxkXTogdmFsdWUgfSA6IHNlcnZpY2UpKSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlKHsgLi4udGFyZ2V0LCBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzZXJ2aWNlcywgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VydmljZVByaWNlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VydmljZUlkLCBiYXJiZXJJZCwgdmFsdWUpID0+IHtcclxuICAgICAgc2V0U2VydmljZXMoKHByZXYpID0+XHJcbiAgICAgICAgcHJldi5tYXAoKHNlcnZpY2UpID0+IHtcclxuICAgICAgICAgIGlmIChzZXJ2aWNlLmlkICE9PSBzZXJ2aWNlSWQpIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc2VydmljZSxcclxuICAgICAgICAgICAgcHJpY2VzOiB7IC4uLihzZXJ2aWNlLnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IHNlcnZpY2VJZCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSh7XHJcbiAgICAgICAgICAuLi50YXJnZXQsXHJcbiAgICAgICAgICBwcmljZXM6IHsgLi4uKHRhcmdldC5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NlcnZpY2VzLCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVCb3RUb2dnbGUgPSBhc3luYyAoZW5hYmxlZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlzQm90RW5hYmxlZDogZW5hYmxlZCB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7QsdC90L7QstC40YLRjCDQvdCw0YHRgtGA0L7QudC60Lgg0LHQvtGC0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCb3RBY3Rpb24gPSBhc3luYyAoYWN0aW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQstGL0L/QvtC70L3QuNGC0Ywg0LTQtdC50YHRgtCy0LjQtScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVTZXR0aW5ncyA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIWJvdFNldHRpbmdzPy5pZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0JvdFNldHRpbmdzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJvdFNldHRpbmdzLmlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZU1lc3NhZ2UgPSBhc3luYyAoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiB7XHJcbiAgICBpZiAoIXBlcnNpc3QpIHtcclxuICAgICAgc2V0Qm90TWVzc2FnZXMoKHByZXYpID0+IHByZXYubWFwKChtZXNzYWdlKSA9PiAobWVzc2FnZS5pZCA9PT0gaWQgPyB7IC4uLmRyYWZ0IH0gOiBtZXNzYWdlKSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvYm90L21lc3NhZ2VzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZTogZHJhZnQuY29kZSwgdGl0bGU6IGRyYWZ0LnRpdGxlLCB0ZXh0OiBkcmFmdC50ZXh0IH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzdG9yZUJhY2t1cCA9IGFzeW5jIChmaWxlbmFtZSkgPT4ge1xyXG4gICAgaWYgKCFmaWxlbmFtZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9CS0L7RgdGB0YLQsNC90L7QstC40YLRjCDRgNC10LfQtdGA0LLQvdGD0Y4g0LrQvtC/0LjRjj8nLFxyXG4gICAgICBtZXNzYWdlOiBg0KLQtdC60YPRidC40LUg0LTQsNC90L3Ri9C1INCx0YPQtNGD0YIg0LfQsNC80LXQvdC10L3RiyDRgdC+0LTQtdGA0LbQuNC80YvQvCAke2ZpbGVuYW1lfS4g0J/RgNC+0LTQvtC70LbQuNGC0Yw/YCxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9yZXN0b3JlJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZW5hbWUgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQsdGN0LrQsNC/Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQmFja3VwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcbiAgICAgIHRpdGxlOiAn0KHQvtC30LTQsNGC0Ywg0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JyxcbiAgICAgIG1lc3NhZ2U6ICfQkdGD0LTQtdGCINGB0L7Qt9C00LDQvSDRhNCw0LnQuyDRgNC10LfQtdGA0LLQvdC+0Lkg0LrQvtC/0LjQuCDRgtC10LrRg9GJ0LXQuSDQsdCw0LfRiyDQtNCw0L3QvdGL0YUuJyxcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Ch0L7Qt9C00LDRgtGMJyxcbiAgICAgIHRvbmU6ICdzdWNjZXNzJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL2NyZWF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQsdGN0LrQsNC/Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJhY2t1cCA9IGFzeW5jIChmaWxlbmFtZSkgPT4ge1xuICAgIGlmICghZmlsZW5hbWUpIHJldHVybjtcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XG4gICAgICB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXG4gICAgICBtZXNzYWdlOiBg0KTQsNC50LsgJHtmaWxlbmFtZX0g0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC30LLQvtC30LLRgNCw0YLQvdC+LmAsXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcbiAgICB9KTtcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9kZWxldGUnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlbmFtZSB9KSB9KTtcbiAgICAgIGZldGNoQWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LHRjdC60LDQvycpO1xuICAgIH1cbiAgfTtcblxyXG4gIGNvbnN0IGZldGNoQ2xpZW50SGlzdG9yeSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGNsaWVudCkgPT4ge1xyXG4gICAgICBpZiAoIWNsaWVudD8uTmFtZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHJldHVybiBhcGlSZXF1ZXN0KGAvdXNlci1wcm9maWxlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudC5OYW1lKX1gKTtcclxuICAgIH0sXHJcbiAgICBbYXBpUmVxdWVzdF1cclxuICApO1xyXG5cclxuXHJcbiAgY29uc3Qgb3BlblByb2ZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xyXG4gICAgICBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiB0cnVlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlSZXF1ZXN0KGAvdXNlci1wcm9maWxlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHBheWxvYWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC/0YDQvtGE0LjQu9GMJyB9LCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVuc3VyZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAob3B0aW9uc0NhY2hlKSByZXR1cm4gb3B0aW9uc0NhY2hlO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cz9mb3JjZT0xJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgIH07XHJcbiAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZCk7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICB9LCBbYXBpUmVxdWVzdCwgb3B0aW9uc0NhY2hlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGFwcG9pbnRtZW50LCBvcHRpb25zQ29uZmlnID0ge30pID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7XHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhcHBvaW50bWVudCxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBhbGxvd0RlbGV0ZTogISFvcHRpb25zQ29uZmlnLmFsbG93RGVsZXRlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbZW5zdXJlT3B0aW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVBcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBlbnN1cmVPcHRpb25zKCk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbiAgICBjb25zdCBkZWZhdWx0U3RhdHVzID0gbm9ybWFsaXplU3RhdHVzVmFsdWUob3B0aW9ucy5zdGF0dXNlcz8uWzBdIHx8ICfQkNC60YLQuNCy0L3QsNGPJyk7XHJcbiAgICBjb25zdCBkZWZhdWx0QmFyYmVyID0gcGlja0JhcmJlckZvclVzZXIoc2Vzc2lvbiwgb3B0aW9ucy5iYXJiZXJzIHx8IFtdKTtcclxuICAgIHNldEFwcG9pbnRtZW50TW9kYWwoe1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgICBQaG9uZTogJycsXHJcbiAgICAgICAgQmFyYmVyOiBkZWZhdWx0QmFyYmVyLFxyXG4gICAgICAgIERhdGU6IHRvZGF5LFxyXG4gICAgICAgIFRpbWU6ICcnLFxyXG4gICAgICAgIFN0YXR1czogZGVmYXVsdFN0YXR1cyxcclxuICAgICAgICBTZXJ2aWNlczogJycsXHJcbiAgICAgICAgVXNlcklEOiAnJyxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgaXNOZXc6IHRydWUsXHJcbiAgICAgIGFsbG93RGVsZXRlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0sIFtlbnN1cmVPcHRpb25zLCBzZXNzaW9uPy5kaXNwbGF5TmFtZSwgc2Vzc2lvbj8udXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUFwcG9pbnRtZW50ID0gYXN5bmMgKHsgaWQsIHBheWxvYWQsIGlzTmV3IH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9BcHBvaW50bWVudHMnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQXBwb2ludG1lbnRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVBcHBvaW50bWVudCA9IGFzeW5jIChhcHBvaW50bWVudCkgPT4ge1xyXG4gICAgaWYgKCFhcHBvaW50bWVudD8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Yw/JyxcclxuICAgICAgbWVzc2FnZTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoYXBwb2ludG1lbnQuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGU/Zm9yY2U9MScpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKGluZm8pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQv9GA0L7QstC10YDQuNGC0Ywg0L7QsdC90L7QstC70LXQvdC40Y8nKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFN5c3RlbUJ1c3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFwcGx5VXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Ce0LHQvdC+0LLQuNGC0Ywg0YHQuNGB0YLQtdC80YM/JyxcclxuICAgICAgbWVzc2FnZTogJ0NSTSDQuCDQsdC+0YIg0LHRg9C00YPRgiDQvtCx0L3QvtCy0LvQtdC90Ysg0LTQviDQv9C+0YHQu9C10LTQvdC10Lkg0LLQtdGA0YHQuNC4LiDQn9C10YDQtdC30LDQv9GD0YHQuiDQvNC+0LbQtdGCINC30LDQvdGP0YLRjCDQvdC10YHQutC+0LvRjNC60L4g0LzQuNC90YPRgi4nLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQntCx0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICBzZXRTeXN0ZW1CdXN5KHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHJlc3VsdC5pbmZvIHx8IHJlc3VsdCk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQuNC80LXQvdC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgcmV0dXJuIDxMb2dpblNjcmVlbiBvbkxvZ2luPXtoYW5kbGVMb2dpbn0gZXJyb3I9e2F1dGhFcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVmZXJyZWRUYWJsZVRhcmdldCA9IGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnID8gJ0JhcmJlcnMnIDogYWN0aXZlVGFiID09PSAnc2VydmljZXMnID8gJ1NlcnZpY2VzJyA6IHBlbmRpbmdUYWJsZVZpZXc7XHJcbiAgY29uc3QgbGl2ZVVwZGF0ZWRBdCA9IHJlYWx0aW1lU25hcHNob3Q/LnVwZGF0ZWRBdCB8fCBudWxsO1xyXG4gIGNvbnN0IG1haW5DbGFzc05hbWUgPSBjbGFzc05hbWVzKCdmbGV4LTEgc3BhY2UteS00IHAtNCBtZDpwLTgnLCBpc01vYmlsZSA/ICdwYi0yNCcgOiAnJyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEYXNoYm9hcmRWaWV3XHJcbiAgICAgICAgICAgIGRhdGE9e2Rhc2hib2FyZH1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQXBwb2ludG1lbnQ9e2hhbmRsZUNyZWF0ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd0YWJsZXMnOlxyXG4gICAgICBjYXNlICdiYXJiZXJzJzpcclxuICAgICAgY2FzZSAnc2VydmljZXMnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFibGVzV29ya3NwYWNlXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3Q9e2FwaVJlcXVlc3R9XHJcbiAgICAgICAgICAgIHNoYXJlZE9wdGlvbnM9e29wdGlvbnNDYWNoZX1cclxuICAgICAgICAgICAgb25PcHRpb25zVXBkYXRlPXtzZXRPcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3BlblByb2ZpbGU9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICBvbk9wZW5BcHBvaW50bWVudFJlY29yZD17aGFuZGxlT3BlbkFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBjbGllbnRzPXtkYXNoYm9hcmQ/LmNsaWVudHMgfHwgW119XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyPXtzZXNzaW9uIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVBcHBvaW50bWVudHM9e3JlYWx0aW1lU25hcHNob3Q/LnJvd3MgfHwgbnVsbH1cclxuICAgICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17cmVhbHRpbWVTbmFwc2hvdD8udXBkYXRlZEF0IHx8IG51bGx9XHJcbiAgICAgICAgICAgIGJhcmJlcnM9e2JhcmJlcnN9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtzZXJ2aWNlc31cclxuICAgICAgICAgICAgb25CYXJiZXJGaWVsZENoYW5nZT17aGFuZGxlQmFyYmVyRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU2F2ZUJhcmJlcj17aGFuZGxlU2F2ZUJhcmJlcn1cclxuICAgICAgICAgICAgb25BZGRCYXJiZXI9e2hhbmRsZUFkZEJhcmJlcn1cclxuICAgICAgICAgICAgb25EZWxldGVCYXJiZXI9e2hhbmRsZURlbGV0ZUJhcmJlcn1cclxuICAgICAgICAgICAgb25TZXJ2aWNlRmllbGRDaGFuZ2U9e2hhbmRsZVNlcnZpY2VGaWVsZENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VydmljZVByaWNlQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2V9XG4gICAgICAgICAgICBvbkRlbGV0ZVNlcnZpY2U9e2hhbmRsZURlbGV0ZVNlcnZpY2V9XG4gICAgICAgICAgICBvbkFkZFNlcnZpY2U9e2hhbmRsZUFkZFNlcnZpY2V9XG4gICAgICAgICAgICBvbkFjdGl2ZVRhYmxlQ2hhbmdlPXtoYW5kbGVBY3RpdmVUYWJsZVN5bmN9XG4gICAgICAgICAgICBwcmVmZXJyZWRUYWJsZT17cHJlZmVycmVkVGFibGVUYXJnZXR9XG4gICAgICAgICAgICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQ9e2hhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWR9XG4gICAgICAgICAgICBvblJlcXVlc3RDb25maXJtPXtyZXF1ZXN0Q29uZmlybX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdib3QnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cbiAgICAgICAgICAgIHZpZXdNb2RlPVwiYm90XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnc3lzdGVtJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJvdENvbnRyb2xWaWV3XG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cbiAgICAgICAgICAgIHNldHRpbmdzPXtib3RTZXR0aW5nc31cbiAgICAgICAgICAgIGJhY2t1cHM9e2Rhc2hib2FyZD8uYmFja3VwcyB8fCBbXX1cbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlZD17aGFuZGxlQm90VG9nZ2xlfVxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cbiAgICAgICAgICAgIG9uUmVzdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdyZXN0YXJ0Jyl9XG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cbiAgICAgICAgICAgIG9uUmVzdG9yZUJhY2t1cD17aGFuZGxlUmVzdG9yZUJhY2t1cH1cbiAgICAgICAgICAgIG9uQ3JlYXRlQmFja3VwPXtoYW5kbGVDcmVhdGVCYWNrdXB9XG4gICAgICAgICAgICBvbkRlbGV0ZUJhY2t1cD17aGFuZGxlRGVsZXRlQmFja3VwfVxuICAgICAgICAgICAgbGljZW5zZVN0YXR1cz17bGljZW5zZVN0YXR1c31cbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XG4gICAgICAgICAgICBvbkFwcGx5VXBkYXRlPXtoYW5kbGVBcHBseVVwZGF0ZX1cbiAgICAgICAgICAgIHN5c3RlbUJ1c3k9e3N5c3RlbUJ1c3l9XG4gICAgICAgICAgICB2aWV3TW9kZT1cInN5c3RlbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJvdENvbnRyb2xWaWV3XHJcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxyXG4gICAgICAgICAgICBzZXR0aW5ncz17Ym90U2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGJhY2t1cHM9e2Rhc2hib2FyZD8uYmFja3VwcyB8fCBbXX1cclxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZWQ9e2hhbmRsZUJvdFRvZ2dsZX1cclxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxyXG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxyXG4gICAgICAgICAgICBvblJlc3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbigncmVzdGFydCcpfVxyXG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cbiAgICAgICAgICAgIG9uUmVzdG9yZUJhY2t1cD17aGFuZGxlUmVzdG9yZUJhY2t1cH1cbiAgICAgICAgICAgIG9uQ3JlYXRlQmFja3VwPXtoYW5kbGVDcmVhdGVCYWNrdXB9XG4gICAgICAgICAgICBvbkRlbGV0ZUJhY2t1cD17aGFuZGxlRGVsZXRlQmFja3VwfVxuICAgICAgICAgICAgbGljZW5zZVN0YXR1cz17bGljZW5zZVN0YXR1c31cbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XG4gICAgICAgICAgICBvbkFwcGx5VXBkYXRlPXtoYW5kbGVBcHBseVVwZGF0ZX1cbiAgICAgICAgICAgIHN5c3RlbUJ1c3k9e3N5c3RlbUJ1c3l9XG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZhdGFsRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGJnLXNsYXRlLTk1MCBwLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0zIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcm9zZS01MDAvNTAgYmctc2xhdGUtOTAwLzgwIHAtNiBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMFwiPtCa0YDQuNGC0LjRh9C10YHQutCw0Y8g0L7RiNC40LHQutCwINC40L3RgtC10YDRhNC10LnRgdCwPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICDQodC+0L7QsdGJ0LXQvdC40LUg0L3QuNC20LUg0LzQvtC20L3QviDQv9C10YDQtdGB0LvQsNGC0Ywg0YDQsNC30YDQsNCx0L7RgtGH0LjQutGDLiDQn9C+0YHQu9C1INC40YHQv9GA0LDQstC70LXQvdC40Y8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIHAtNCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LXJvc2UtMjAwXCI+XHJcbiAgICAgICAgICAgIHtmYXRhbEVycm9yfVxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8TW9iaWxlVGFicyBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0gb25DaGFuZ2U9e3NldEFjdGl2ZVRhYn0gc2Vzc2lvbj17c2Vzc2lvbn0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gbGl2ZVVwZGF0ZWRBdD17bGl2ZVVwZGF0ZWRBdH0gLz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxuICAgICAgICAgIGFjdGl2ZVRhYj17YWN0aXZlVGFifVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICBsaXZlVXBkYXRlZEF0PXtsaXZlVXBkYXRlZEF0fVxuICAgICAgICAgIGFjdGl2ZURhdGFUYWJsZT17YWN0aXZlRGF0YVRhYmxlfVxuICAgICAgICAgIG9uU2VsZWN0VGFibGU9e2hhbmRsZVNpZGViYXJUYWJsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXttYWluQ2xhc3NOYW1lfT5cclxuICAgICAgICAgIHtnbG9iYWxFcnJvciAmJiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17Z2xvYmFsRXJyb3J9IC8+fVxyXG4gICAgICAgICAge3JlbmRlckFjdGl2ZSgpfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQcm9maWxlTW9kYWwgc3RhdGU9e3Byb2ZpbGVNb2RhbH0gb25DbG9zZT17KCkgPT4gc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pfSAvPlxyXG4gICAgICA8QXBwb2ludG1lbnRNb2RhbFxyXG4gICAgICAgIG9wZW49e2FwcG9pbnRtZW50TW9kYWwub3Blbn1cclxuICAgICAgICBhcHBvaW50bWVudD17YXBwb2ludG1lbnRNb2RhbC5kYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e2FwcG9pbnRtZW50TW9kYWwub3B0aW9ucyB8fCBvcHRpb25zQ2FjaGUgfHwge319XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0QXBwb2ludG1lbnRNb2RhbCgocHJldikgPT4gKHsgLi4ucHJldiwgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGlzTmV3OiBmYWxzZSwgYWxsb3dEZWxldGU6IGZhbHNlIH0pKX1cclxuICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmVBcHBvaW50bWVudH1cclxuICAgICAgICBpc05ldz17YXBwb2ludG1lbnRNb2RhbC5pc05ld31cclxuICAgICAgICBjbGllbnRzPXtkYXNoYm9hcmQ/LmNsaWVudHMgfHwgW119XHJcbiAgICAgICAgY2FuRGVsZXRlPXthcHBvaW50bWVudE1vZGFsLmFsbG93RGVsZXRlfVxyXG4gICAgICAgIG9uRGVsZXRlPXthcHBvaW50bWVudE1vZGFsLmFsbG93RGVsZXRlID8gaGFuZGxlRGVsZXRlQXBwb2ludG1lbnQgOiBudWxsfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q29uZmlybURpYWxvZyB7Li4uY29uZmlybURpYWxvZ30gb25SZXN1bHQ9e2hhbmRsZUNvbmZpcm1SZXN1bHR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxubGV0IHJlYWN0QXBwUm9vdCA9IG51bGw7XHJcbmNvbnN0IHJlbmRlckFwcCA9ICgpID0+IHtcclxuICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcm9vdEVsZW1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INC90LDQudC00LXQvSDQutC+0L3RgtC10LnQvdC10YAgI3Jvb3QnKTtcclxuICAgIH1cclxuICAgIGlmICghcmVhY3RBcHBSb290KSB7XHJcbiAgICAgIHJlYWN0QXBwUm9vdCA9XHJcbiAgICAgICAgdHlwZW9mIGNyZWF0ZVJvb3QgPT09ICdmdW5jdGlvbidcclxuICAgICAgICAgID8gY3JlYXRlUm9vdChyb290RWxlbWVudClcclxuICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIHJlbmRlcjogKG5vZGUpID0+IFJlYWN0RE9NLnJlbmRlcihub2RlLCByb290RWxlbWVudCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZWFjdEFwcFJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYXRhbCByZW5kZXIgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICAgIHJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiXHJcbiAgICAgICAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGdhcDoxNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDIwNjE3O1xyXG4gICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgcGFkZGluZzoyNHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOjQ4MHB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgyNDgsMTEzLDExMywwLjQpO2JhY2tncm91bmQ6cmdiYSgxNSwyMyw0MiwwLjg1KTtib3JkZXItcmFkaXVzOjE2cHg7cGFkZGluZzoyNHB4O1wiPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojZmVjYWNhO21hcmdpbi1ib3R0b206MTJweDtcIj5cclxuICAgICAgICAgICAgICDQntGI0LjQsdC60LAg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LjQvdGC0LXRgNGE0LXQudGB0LBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2NvbG9yOiNjYmQ1ZjU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XCI+XHJcbiAgICAgICAgICAgICAgJHtlcnJvcj8ubWVzc2FnZSB8fCAn0KHQvNC+0YLRgNC40YLQtSDQutC+0L3RgdC+0LvRjCDQsdGA0LDRg9C30LXRgNCwIChGMTIpJ31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiXHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzRiNTU2MztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo5OTlweDtcclxuICAgICAgICAgICAgcGFkZGluZzo4cHggMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBcIiBvbmNsaWNrPVwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXCI+XHJcbiAgICAgICAgICAgINCf0LXRgNC10LfQsNCz0YDRg9C30LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5yZW5kZXJBcHAoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENB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