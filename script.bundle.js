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
    className: "fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-slate-950/95 px-4 py-3 backdrop-blur lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, VIEW_TABS.map(function (tab) {
    var IconComponent = VIEW_TAB_ICONS[tab.id] || IconDots;
    var isActive = activeTab === tab.id;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: function onClick() {
        return handleSelect(tab.id);
      },
      className: classNames('flex-1 rounded-3xl px-3 py-3 text-center text-sm font-semibold transition', isActive ? 'bg-indigo-600/20 text-indigo-200' : 'text-slate-400 hover:text-white'),
      "aria-label": tab.label
    }, /*#__PURE__*/React.createElement(IconComponent, {
      className: classNames('mx-auto h-7 w-7', isActive ? 'text-indigo-300' : 'text-slate-400')
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
    var isActiveService = service.isActive !== false;
    return /*#__PURE__*/React.createElement("button", {
      key: service.id,
      onClick: function onClick() {
        return openEditor('edit', service.id);
      },
      className: classNames('group flex w-full flex-col gap-3 rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-indigo-500', isActiveService ? 'border-slate-700/70 bg-slate-900/50 hover:border-indigo-500/70 hover:bg-slate-900' : 'border-slate-800 bg-slate-900/30 opacity-80 hover:border-amber-400/60')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: classNames('text-base font-semibold sm:text-lg', isActiveService ? 'text-white' : 'text-slate-400')
    }, service.name || 'Без названия'), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: classNames('rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide', isActiveService ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200' : 'border-slate-600 bg-slate-900/60 text-slate-400')
    }, isActiveService ? 'Активна' : 'Скрыта'), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300"
    }, service.duration ? "".concat(service.duration, " \u043C\u0438\u043D") : '—'))), /*#__PURE__*/React.createElement("div", {
      className: classNames('text-sm', isActiveService ? 'text-slate-100' : 'text-slate-500')
    }, summary.label), /*#__PURE__*/React.createElement("p", {
      className: classNames('text-xs', isActiveService ? 'text-slate-400' : 'text-slate-500')
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
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3.5a5.5 5.5 0 013.995 9.315l3.095 3.095a.75.75 0 11-1.06 1.06l-3.095-3.094A5.5 5.5 0 119 3.5zm0 1.5a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
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
    className: "flex h-11 w-full items-center justify-center rounded-xl border border-slate-600 px-3 text-sm text-white sm:w-auto"
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
    return classNames('inline-flex h-11 items-center justify-center rounded-xl border px-4 text-xs font-semibold uppercase tracking-wide transition whitespace-nowrap text-center', active ? 'border-indigo-400 bg-indigo-500/10 text-indigo-100' : 'border-slate-700 text-slate-300 hover:border-slate-500');
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
  var getBarberSelect = function getBarberSelect() {
    var extraClassName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return /*#__PURE__*/React.createElement("select", {
      value: selectedBarber,
      onChange: function onChange(event) {
        return setSelectedBarber(event.target.value);
      },
      className: classNames('h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 text-left text-sm text-white', tableId !== 'Appointments' && 'sm:w-48', extraClassName)
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "\u0412\u0441\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430"), barbers.map(function (barber) {
      return /*#__PURE__*/React.createElement("option", {
        key: barber,
        value: barber
      }, barber);
    }));
  };
  var controlOrder = tableId === 'Appointments' ? [{
    key: 'barber',
    node: supportsBarberFilter ? /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden"
    }, getBarberSelect()) : null
  }, {
    key: 'status',
    node: statusControl
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
    className: classNames('flex flex-col gap-2 sm:flex-row sm:items-center', tableId === 'Appointments' ? 'lg:flex-row lg:items-center lg:gap-3' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('flex w-full items-stretch gap-2', tableId === 'Appointments' ? 'lg:flex-[2] lg:gap-3' : '')
  }, /*#__PURE__*/React.createElement("label", {
    className: "relative flex-1 min-w-[200px] lg:min-w-[260px]"
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
    "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",
    className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-lg font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500 sm:hidden"
  }, "+")), supportsBarberFilter && tableId !== 'Appointments' && getBarberSelect(), tableId === 'Appointments' && supportsBarberFilter && /*#__PURE__*/React.createElement("div", {
    className: "hidden w-full items-stretch gap-3 lg:flex lg:flex-1"
  }, getBarberSelect('lg:flex-1'), canCreate && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCreate,
    className: "inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm shadow-emerald-900/20 hover:bg-emerald-500"
  }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))), /*#__PURE__*/React.createElement("div", {
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
    className: classNames('rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500', inlineCreateForMobile ? 'hidden sm:inline-flex' : '', tableId === 'Appointments' ? 'lg:hidden' : '')
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
        className: "text-xs font-semibold uppercase tracking-wide text-slate-400"
      }, formatDateBadgeLabel(record.Date)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-baseline gap-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-2xl font-semibold text-white sm:text-3xl"
      }, start || record.Time || '-'), end && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u0434\u043E ", end))), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-end gap-2 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide', getStatusBadgeClasses(statusLabel))
      }, statusLabel || 'Без статуса'), record.Barber && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u0411\u0430\u0440\u0431\u0435\u0440: ", /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-white"
      }, record.Barber)))), /*#__PURE__*/React.createElement("div", {
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
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    detailsOpen = _useState46[0],
    setDetailsOpen = _useState46[1];
  useEffect(function () {
    if (!open) return;
    setDraft(buildDraft(appointment));
    setDetailsOpen(false);
  }, [appointment, buildDraft, open]);
  if (!open || !draft) return null;
  var servicesSelection = parseMultiValue(draft.Services);
  var actionButtonClass = 'rounded-lg px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap sm:px-4 sm:py-2 sm:text-sm';
  var handleChange = function handleChange(field, value) {
    return setDraft(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var isReminderSent = function isReminderSent(value) {
    return value === true || value === 'true' || value === 1 || value === '1';
  };
  var getReminderLabel = function getReminderLabel(value) {
    return isReminderSent(value) ? 'Отправлено' : 'Не отправлено';
  };
  var getReminderAccent = function getReminderAccent(value) {
    return isReminderSent(value) ? 'text-emerald-300' : 'text-slate-500';
  };
  var recordDetails = [{
    key: 'user',
    label: 'UserID',
    value: draft.UserID || '—',
    accent: draft.UserID ? 'text-white' : 'text-slate-500'
  }, {
    key: 'clientReminder',
    label: 'Клиенту отправлено (2ч)',
    value: getReminderLabel(draft.Reminder2hClientSent),
    accent: getReminderAccent(draft.Reminder2hClientSent)
  }, {
    key: 'barberReminder',
    label: 'Мастеру отправлено (2ч)',
    value: getReminderLabel(draft.Reminder2hBarberSent),
    accent: getReminderAccent(draft.Reminder2hBarberSent)
  }];
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
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), !isNew && /*#__PURE__*/React.createElement("button", {
      onClick: handleMarkCompleted,
      className: classNames(actionButtonClass, 'border border-emerald-500 text-emerald-200 hover:bg-emerald-500/10')
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: classNames(actionButtonClass, 'border border-slate-600 text-white')
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
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
    placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F"
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
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-slate-800 bg-slate-950/60"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDetailsOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-white"
  }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0437\u0430\u043F\u0438\u0441\u0438"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className: classNames('h-4 w-4 text-slate-400 transition-transform', detailsOpen ? 'rotate-180' : 'rotate-0')
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 9l6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classNames('overflow-hidden transition-all duration-200', detailsOpen ? 'max-h-64 border-t border-slate-800' : 'max-h-0')
  }, /*#__PURE__*/React.createElement("dl", {
    className: "divide-y divide-slate-800 px-4 py-2 text-sm text-slate-300"
  }, recordDetails.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.key,
      className: "flex items-center justify-between gap-3 py-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-xs text-slate-400"
    }, item.label), /*#__PURE__*/React.createElement("dd", {
      className: classNames('text-right font-semibold', item.accent)
    }, item.value));
  })))));
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
  var _useState47 = useState(function () {
      return DATA_TABLES.reduce(function (acc, table) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, table, []));
      }, {});
    }),
    _useState48 = _slicedToArray(_useState47, 2),
    tables = _useState48[0],
    setTables = _useState48[1];
  var _useState49 = useState(sharedOptions || {
      barbers: [],
      services: [],
      statuses: []
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    dropdownOptions = _useState50[0],
    setDropdownOptions = _useState50[1];
  var _useState51 = useState(''),
    _useState52 = _slicedToArray(_useState51, 2),
    tableError = _useState52[0],
    setTableError = _useState52[1];
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    isFetching = _useState54[0],
    setIsFetching = _useState54[1];
  var _useState55 = useState(''),
    _useState56 = _slicedToArray(_useState55, 2),
    searchTerm = _useState56[0],
    setSearchTerm = _useState56[1];
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
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    createModalOpen = _useState58[0],
    setCreateModalOpen = _useState58[1];
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
  var _useState59 = useState((settings === null || settings === void 0 ? void 0 : settings.botDescription) || ''),
    _useState60 = _slicedToArray(_useState59, 2),
    description = _useState60[0],
    setDescription = _useState60[1];
  var _useState61 = useState((settings === null || settings === void 0 ? void 0 : settings.aboutText) || ''),
    _useState62 = _slicedToArray(_useState61, 2),
    about = _useState62[0],
    setAbout = _useState62[1];
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
  var _useState63 = useState(''),
    _useState64 = _slicedToArray(_useState63, 2),
    username = _useState64[0],
    setUsername = _useState64[1];
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    password = _useState66[0],
    setPassword = _useState66[1];
  var _useState67 = useState(''),
    _useState68 = _slicedToArray(_useState67, 2),
    validationError = _useState68[0],
    setValidationError = _useState68[1];
  var _useState69 = useState([]),
    _useState70 = _slicedToArray(_useState69, 2),
    loginOptions = _useState70[0],
    setLoginOptions = _useState70[1];
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    optionsError = _useState72[0],
    setOptionsError = _useState72[1];
  var _useState73 = useState(true),
    _useState74 = _slicedToArray(_useState73, 2),
    loadingOptions = _useState74[0],
    setLoadingOptions = _useState74[1];
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
  var _useState75 = useState(function () {
      try {
        var saved = localStorage.getItem('barber-session');
        return saved ? buildSessionPayload(JSON.parse(saved)) : null;
      } catch (error) {
        return null;
      }
    }),
    _useState76 = _slicedToArray(_useState75, 2),
    session = _useState76[0],
    setSession = _useState76[1];
  var _useLocalStorage13 = useLocalStorage('barber.activeTab', 'dashboard'),
    _useLocalStorage14 = _slicedToArray(_useLocalStorage13, 2),
    activeTab = _useLocalStorage14[0],
    setActiveTab = _useLocalStorage14[1];
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    pendingTableView = _useState78[0],
    setPendingTableView = _useState78[1];
  var _useState79 = useState(function () {
      try {
        var stored = localStorage.getItem('tables.active');
        return stored ? JSON.parse(stored) : 'Appointments';
      } catch (_unused4) {
        return 'Appointments';
      }
    }),
    _useState80 = _slicedToArray(_useState79, 2),
    activeDataTable = _useState80[0],
    setActiveDataTable = _useState80[1];
  var _useState81 = useState(null),
    _useState82 = _slicedToArray(_useState81, 2),
    dashboard = _useState82[0],
    setDashboard = _useState82[1];
  var _useState83 = useState([]),
    _useState84 = _slicedToArray(_useState83, 2),
    services = _useState84[0],
    setServices = _useState84[1];
  var _useState85 = useState([]),
    _useState86 = _slicedToArray(_useState85, 2),
    barbers = _useState86[0],
    setBarbers = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    botStatus = _useState88[0],
    setBotStatus = _useState88[1];
  var _useState89 = useState(null),
    _useState90 = _slicedToArray(_useState89, 2),
    botSettings = _useState90[0],
    setBotSettings = _useState90[1];
  var _useState91 = useState([]),
    _useState92 = _slicedToArray(_useState91, 2),
    botMessages = _useState92[0],
    setBotMessages = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    licenseStatus = _useState94[0],
    setLicenseStatus = _useState94[1];
  var _useState95 = useState(null),
    _useState96 = _slicedToArray(_useState95, 2),
    updateInfo = _useState96[0],
    setUpdateInfo = _useState96[1];
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    optionsCache = _useState98[0],
    setOptionsCache = _useState98[1];
  var _useState99 = useState({
      open: false,
      data: null,
      loading: false
    }),
    _useState100 = _slicedToArray(_useState99, 2),
    profileModal = _useState100[0],
    setProfileModal = _useState100[1];
  var _useState101 = useState({
      open: false,
      data: null,
      options: null,
      isNew: false,
      allowDelete: false
    }),
    _useState102 = _slicedToArray(_useState101, 2),
    appointmentModal = _useState102[0],
    setAppointmentModal = _useState102[1];
  var _useState103 = useState(false),
    _useState104 = _slicedToArray(_useState103, 2),
    loading = _useState104[0],
    setLoading = _useState104[1];
  var _useState105 = useState(''),
    _useState106 = _slicedToArray(_useState105, 2),
    globalError = _useState106[0],
    setGlobalError = _useState106[1];
  var _useState107 = useState(''),
    _useState108 = _slicedToArray(_useState107, 2),
    authError = _useState108[0],
    setAuthError = _useState108[1];
  var _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    systemBusy = _useState110[0],
    setSystemBusy = _useState110[1];
  var _useState111 = useState(window.innerWidth < 1024),
    _useState112 = _slicedToArray(_useState111, 2),
    isMobile = _useState112[0],
    setIsMobile = _useState112[1];
  var _useState113 = useState(null),
    _useState114 = _slicedToArray(_useState113, 2),
    realtimeSnapshot = _useState114[0],
    setRealtimeSnapshot = _useState114[1];
  var _useState115 = useState(null),
    _useState116 = _slicedToArray(_useState115, 2),
    fatalError = _useState116[0],
    setFatalError = _useState116[1];
  var _useState117 = useState(defaultConfirmState),
    _useState118 = _slicedToArray(_useState117, 2),
    confirmDialog = _useState118[0],
    setConfirmDialog = _useState118[1];
  var _useState119 = useState('unknown'),
    _useState120 = _slicedToArray(_useState119, 2),
    connectionStatus = _useState120[0],
    setConnectionStatus = _useState120[1];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX1JlYWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsIkZyYWdtZW50IiwiX1JlYWN0RE9NIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJjcmVhdGVSb290IiwicmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25jYXQiLCJERUZBVUxUX0FQSV9CQVNFX1VSTCIsIkFQSV9CQVNFX1VSTCIsIl9fQkFSQkVSX0FQSV9CQVNFX18iLCJWSUVXX1RBQlMiLCJpZCIsImxhYmVsIiwiVEFCTEVfT1JERVIiLCJWSVNJQkxFX1RBQkxFX09SREVSIiwidGFibGUiLCJEQVRBX1RBQkxFUyIsIlRBQkxFX0NPTkZJRyIsIkFwcG9pbnRtZW50cyIsIm1vZGUiLCJjYW5DcmVhdGUiLCJzdXBwb3J0c0JhcmJlckZpbHRlciIsInN1cHBvcnRzU3RhdHVzRmlsdGVyIiwiZGVmYXVsdFNvcnQiLCJrZXkiLCJkaXJlY3Rpb24iLCJTY2hlZHVsZXMiLCJVc2VycyIsIkJhcmJlcnMiLCJTZXJ2aWNlcyIsIkRBVEFfU0hPUlRDVVRTIiwibWFwIiwidGFibGVJZCIsIl9UQUJMRV9DT05GSUckdGFibGVJZCIsIlRBQkxFX0NPTFVNTlMiLCJlZGl0YWJsZSIsInR5cGUiLCJpc1Byb2ZpbGVMaW5rIiwibWluV2lkdGgiLCJvcHRpb25zS2V5Iiwibm9XcmFwIiwiYWxpZ24iLCJSQVRJTkdfTUlOIiwiUkFUSU5HX01BWCIsIlJBVElOR19TVEVQIiwiYXZhdGFyT3B0aW9uc0NhY2hlIiwiWUVBUl9JTl9NUyIsIkRBWV9JTl9NUyIsImJ1aWxkTmV3QmFyYmVyU3RhdGUiLCJwYXNzd29yZCIsInJhdGluZyIsImNvbG9yIiwiYXZhdGFyVXJsIiwiZGVzY3JpcHRpb24iLCJwaG9uZSIsInRlbGVncmFtSWQiLCJpc0FjdGl2ZSIsImJ1aWxkTmV3U2VydmljZVN0YXRlIiwiZHVyYXRpb24iLCJwcmljZXMiLCJBQ1RJVkVfQkFSQkVSX0xBQkVMIiwiZnJvbUNoYXJDb2RlIiwiSElEREVOX0JBUkJFUl9MQUJFTCIsIkFDVElWRV9TRVJWSUNFX0xBQkVMIiwiSElEREVOX1NFUlZJQ0VfTEFCRUwiLCJidWlsZFZpc2l0SGlzdG9yeSIsImFwcG9pbnRtZW50cyIsInVuZGVmaW5lZCIsImN1dG9mZiIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJhcHB0Iiwic3RhcnREYXRlIiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJUaW1lIiwic3RhcnREYXRlVGltZSIsImdldFRpbWUiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwiU3RhdHVzIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNvcnQiLCJiIiwiaW5kZXgiLCJvcmRlck51bWJlciIsImRhdGVMYWJlbCIsImZvcm1hdERhdGVUaW1lIiwiZGVmYXVsdENvbmZpcm1TdGF0ZSIsIm9wZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtTGFiZWwiLCJjYW5jZWxMYWJlbCIsInRvbmUiLCJnZXRSZWNvcmRJZCIsInJlY29yZCIsIklkIiwiSUQiLCJyZWNvcmRJZCIsIklEX1JlY29yZCIsImNsYXNzTmFtZXMiLCJfbGVuIiwiY2xhc3NlcyIsIl9rZXkiLCJCb29sZWFuIiwiam9pbiIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVyIiwicHJldiIsIm5leHRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VOb3dUaWNrIiwiaW50ZXJ2YWxNcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0Tm93IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEF2YXRhck9wdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwicGF5bG9hZCIsImltYWdlcyIsIl9jb250ZXh0IiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIm5vcm1hbGl6ZUltYWdlUGF0aCIsIlNldCIsIm5vcm1hbGl6ZVRleHQiLCJpc1ZhbGlkRGF0ZSIsImlzTmFOIiwicmVzb2x2ZUFzc2V0VXJsIiwibm9ybWFsaXplZCIsInRyaW0iLCJzdGFydHNXaXRoIiwic2FuaXRpemVkIiwicmVwbGFjZSIsInJlc29sdmVkIiwibnVtYmVyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdEN1cnJlbmN5IiwibnVtZXJpYyIsImlzRmluaXRlIiwiZm9ybWF0IiwicGx1cmFsaXplIiwiY291bnQiLCJfcmVmMiIsIl9yZWYzIiwib25lIiwiZmV3IiwibWFueSIsIm1vZDEwIiwibW9kMTAwIiwiY2Fub25pY2FsaXplTmFtZSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiYmFyYmVySWQiLCJwaWNrQmFyYmVyRm9yVXNlciIsInVzZXJTZXNzaW9uIiwiYXZhaWxhYmxlQmFyYmVycyIsImZhbGxiYWNrIiwiY2FuZGlkYXRlcyIsInByZWZlcnJlZE5hbWUiLCJjYW5kaWRhdGUiLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZWRPcHRpb25zIiwiYmFyYmVyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIl9sb29wIiwibWF0Y2hJbmRleCIsImZpbmRJbmRleCIsIm9wdGlvbiIsIl9yZXQiLCJzIiwiZXJyIiwiZm9ybWF0RGF0ZSIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0VGltZSIsInNhZmVWYWx1ZSIsImluY2x1ZGVzIiwic3BsaXQiLCJmb3JtYXRQaG9uZUlucHV0IiwiZGlnaXRzIiwiZm9ybWF0VGVsZWdyYW1IYW5kbGUiLCJoYW5kbGUiLCJidWlsZFRlbGVncmFtTGluayIsImRhdGUiLCJ0aW1lIiwiZGF0ZVBhcnQiLCJ0aW1lUGFydCIsImJhY2t1cERhdGVGb3JtYXR0ZXIiLCJob3VyIiwibWludXRlIiwicGFyc2VCYWNrdXBUaW1lc3RhbXAiLCJmaWxlbmFtZSIsIm1hdGNoIiwiX21hdGNoIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImlzb0NhbmRpZGF0ZSIsInBhcnNlZCIsImZvcm1hdEJhY2t1cExhYmVsIiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwicGFkU3RhcnQiLCJ0b0xvY2FsZVN0cmluZyIsIlNUQVRVU19UUkFOU0xBVElPTlMiLCJhY3RpdmUiLCJjb25maXJtIiwiY29uZmlybWVkIiwiY29tcGxldGUiLCJmaW5pc2hlZCIsImNhbmNlbCIsImNhbmNlbGVkIiwiY2FuY2VsbGVkIiwibm9zaG93IiwibWlzc2VkIiwicGVuZGluZyIsIndhaXQiLCJ3YWl0aW5nIiwicHJvY2Vzc2luZyIsIlNUQVRVU19CQURHRV9NQVAiLCLQkNC60YLQuNCy0L3QsNGPIiwi0J/QvtC00YLQstC10YDQttC00LXQvdCwIiwi0JfQsNCy0LXRgNGI0LXQvdCwIiwi0J7RgtC80LXQvdC10L3QsCIsImdldFN0YXR1c0JhZGdlQ2xhc3NlcyIsInN0YXR1cyIsIm5vcm1hbGl6ZVN0YXR1c1ZhbHVlIiwiSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyIsIkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQ09NUExFVEVEX1NUQVRVU19UT0tFTlMiLCJ0cmFuc2xhdGVkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVTdGF0dXNMaXN0Iiwic3RhdHVzZXMiLCJzZWVuIiwiaGFzIiwiYWRkIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJwYXJzZVRpbWVSYW5nZVZhbHVlIiwic2FmZSIsInN0YXJ0IiwiZW5kIiwiX3NhZmUkc3BsaXQkbWFwIiwicGFydCIsIl9zYWZlJHNwbGl0JG1hcDIiLCJyYXdTdGFydCIsIl9zYWZlJHNwbGl0JG1hcDIkIiwicmF3RW5kIiwicGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImJ1aWxkVGltZVJhbmdlVmFsdWUiLCJzYWZlU3RhcnQiLCJzYWZlRW5kIiwiX3JlZjQiLCJfcmVmNSIsInRvIiwiZXh0cmFjdFRpbWVTdGFydCIsImRhdGVWYWx1ZSIsInRpbWVWYWx1ZSIsImZhbGxiYWNrSXNvIiwicGFyc2VkRmFsbGJhY2siLCJnZXRBcHBvaW50bWVudEVuZERhdGUiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImVuZFRva2VuIiwiYmFzZURhdGVQYXJ0IiwidG9JU09TdHJpbmciLCJyZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUiLCJhcHBvaW50bWVudCIsInJlc29sdmVBcHBvaW50bWVudEVuZERhdGUiLCJlbmREYXRlIiwic2hvdWxkRGlzcGxheUFwcG9pbnRtZW50IiwiaXNBcHBvaW50bWVudE9uZ29pbmciLCJzdGFydFRzIiwiZW5kVHMiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjYiLCJfcmVmNiRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY3IiwiVmlzaXRIaXN0b3J5TGlzdCIsIl9yZWY4IiwiX3JlZjgkdmlzaXRzIiwidmlzaXRzIiwiX3JlZjgkbG9hZGluZyIsImxvYWRpbmciLCJfcmVmOCRlcnJvciIsIl9yZWY4JGVtcHR5TWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9yZWY4JG1heEhlaWdodENsYXNzIiwibWF4SGVpZ2h0Q2xhc3MiLCJfcmVmOCRzaG93U3VtbWFyeSIsInNob3dTdW1tYXJ5IiwidmlzaXQiLCJCYXJiZXIiLCJTZWN0aW9uQ2FyZCIsIl9yZWY5IiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiTGl2ZUJhZGdlIiwiX3JlZjAiLCJ0aW1lc3RhbXAiLCJfcmVmMCRzdGF0dXMiLCJ0aWNraW5nTm93IiwiaXNPZmZsaW5lIiwiaXNPbmxpbmUiLCJ0aW1lTGFiZWwiLCJJY29uVHJhc2giLCJfcmVmMSIsIl9yZWYxJGNsYXNzTmFtZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwiSWNvbkRhc2hib2FyZCIsIl9yZWYxMCIsIl9yZWYxMCRjbGFzc05hbWUiLCJJY29uRGF0YSIsIl9yZWYxMSIsIl9yZWYxMSRjbGFzc05hbWUiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJyeCIsIkljb25Cb3QiLCJfcmVmMTIiLCJfcmVmMTIkY2xhc3NOYW1lIiwiY3giLCJjeSIsIkljb25TeXN0ZW0iLCJfcmVmMTMiLCJfcmVmMTMkY2xhc3NOYW1lIiwiSWNvbkRvdHMiLCJfcmVmMTQiLCJfcmVmMTQkY2xhc3NOYW1lIiwiVklFV19UQUJfSUNPTlMiLCJkYXNoYm9hcmQiLCJ0YWJsZXMiLCJib3QiLCJzeXN0ZW0iLCJVSV9URVhUIiwiZnJlZXplIiwiYWNjb3VudFRpdGxlIiwibG9nb3V0IiwibmV3QXBwb2ludG1lbnRDdGEiLCJsaXZlRmFsbGJhY2siLCJNb2RhbCIsIl9yZWYxNSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb290ZXIiLCJfcmVmMTUkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiQ29uZmlybURpYWxvZyIsIl9yZWYxNiIsIl9yZWYxNiRjb25maXJtTGFiZWwiLCJfcmVmMTYkY2FuY2VsTGFiZWwiLCJfcmVmMTYkdG9uZSIsIm9uUmVzdWx0IiwiY29uZmlybVRvbmVDbGFzcyIsIlN0YXRDYXJkIiwiX3JlZjE3IiwiX3JlZjE3JGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMTgiLCJzZXNzaW9uIiwiYWN0aXZlVGFiIiwib25DaGFuZ2UiLCJvbkxvZ291dCIsImxpdmVVcGRhdGVkQXQiLCJfcmVmMTgkbGl2ZVN0YXR1cyIsImxpdmVTdGF0dXMiLCJfcmVmMTgkYWN0aXZlRGF0YVRhYmwiLCJhY3RpdmVEYXRhVGFibGUiLCJvblNlbGVjdFRhYmxlIiwidGFiIiwic2hvcnRjdXQiLCJpc1Nob3J0Y3V0QWN0aXZlIiwiZGlzYWJsZWQiLCJNb2JpbGVUYWJzIiwiX3JlZjE5IiwiX3JlZjE5JGxpdmVTdGF0dXMiLCJoYW5kbGVTZWxlY3QiLCJ0YWJJZCIsInJlbmRlckxpdmVJbmRpY2F0b3IiLCJJY29uQ29tcG9uZW50IiwiRGFzaGJvYXJkVmlldyIsIl9yZWYyMCIsIl9kYXRhJGFwcG9pbnRtZW50cyIsIl9zdGF0cyR0b3RhbFVzZXJzIiwiX3N0YXRzJGFjdGl2ZUFwcG9pbnRtIiwiX3N0YXRzJGNvbmZpcm1lZFllYXIiLCJfc3RhdHMkdG9kYXlzQXBwb2ludG0iLCJkYXRhIiwib25PcGVuQXBwb2ludG1lbnQiLCJvbk9wZW5Qcm9maWxlIiwib25DcmVhdGVBcHBvaW50bWVudCIsInN0YXRzIiwidXBjb21pbmdSYXciLCJ1cGNvbWluZyIsInVwY29taW5nTGlzdCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDIiLCJsZWZ0IiwiTUFYX1NBRkVfSU5URUdFUiIsInJpZ2h0IiwiZm9ybWF0R3JvdXBMYWJlbCIsIl91bnVzZWQiLCJncm91cGVkVXBjb21pbmciLCJncm91cHMiLCJNYXAiLCJidWNrZXQiLCJnZXQiLCJzZXQiLCJlbnRyaWVzIiwiX3JlZjIxIiwiX3JlZjIyIiwiaXRlbXMiLCJzb3J0VmFsdWUiLCJtaW4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQzIiwidXBjb21pbmdBY3Rpb25zIiwidG90YWxVc2VycyIsImFjdGl2ZUFwcG9pbnRtZW50cyIsImNvbmZpcm1lZFllYXIiLCJ0b2RheXNBcHBvaW50bWVudHMiLCJncm91cCIsImluUHJvZ3Jlc3MiLCJjYXJkUHJvcHMiLCJyb2xlIiwidGFiSW5kZXgiLCJhbGxvd0RlbGV0ZSIsIm9uS2V5RG93biIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzMiIsInN0YXR1c0xhYmVsIiwic2VydmljZXNMaXN0IiwiX2V4dGVuZHMiLCJDdXN0b21lck5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXJ2aWNlIiwiQmFyYmVyQXZhdGFyUGlja2VyIiwiX3JlZjIzIiwibG9hZE9wdGlvbnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImF2YXRhck9wdGlvbnMiLCJzZXRBdmF0YXJPcHRpb25zIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzaG93R2FsbGVyeSIsInNldFNob3dHYWxsZXJ5Iiwibm9ybWFsaXplZFZhbHVlIiwiYXZhaWxhYmxlT3B0aW9ucyIsImlzTW91bnRlZCIsImxvYWQiLCJfcmVmMjQiLCJfY2FsbGVlMiIsImxvYWRlciIsImFzc2V0c1BheWxvYWQiLCJhc3NldHMiLCJfdCIsIl9jb250ZXh0MiIsInByZXZpZXdTcmMiLCJzcmMiLCJhbHQiLCJwcmVzZXQiLCJpc1NlbGVjdGVkIiwiREFZX0lOREVYX0xPT0tVUCIsImZ1bGwiLCJzaG9ydCIsImdldERheUluZGV4IiwiZm9ybWF0U2NoZWR1bGVEYXlTaG9ydCIsImZhbGxiYWNrRGF5Iiwic2FmZURhdGUiLCJfdW51c2VkMiIsIm5vcm1hbGl6ZWRGYWxsYmFjayIsImZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsIiwiX3VudXNlZDMiLCJpc1RvZGF5RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwYXJzZVNsb3RUaW1lTWludXRlcyIsImdldFNjaGVkdWxlU29ydFZhbHVlIiwic2xvdCIsIldlZWsiLCJiYXNlIiwiZGF5SW5kZXgiLCJEYXlPZldlZWsiLCJSYXRpbmdTbGlkZXIiLCJfcmVmMjUiLCJfcmVmMjUkZGVuc2UiLCJkZW5zZSIsInJhdGluZ1ZhbHVlIiwidG9GaXhlZCIsIndyYXBwZXJDbGFzcyIsImxhYmVsQ2xhc3MiLCJzdGVwIiwiQmFyYmVyc1ZpZXciLCJfcmVmMjYiLCJfd29ya2luZ0JhcmJlciRuYW1lIiwiX3dvcmtpbmdCYXJiZXIkcGFzc3dvIiwiX3JlZjI2JGJhcmJlcnMiLCJiYXJiZXJzIiwiX3JlZjI2JHNjaGVkdWxlcyIsInNjaGVkdWxlcyIsImxvYWRBdmF0YXJPcHRpb25zIiwib25GaWVsZENoYW5nZSIsIm9uU2F2ZSIsIm9uQWRkIiwib25EZWxldGUiLCJvblNjaGVkdWxlVXBkYXRlIiwiX3VzZVN0YXRlMSIsInRhcmdldElkIiwiX3VzZVN0YXRlMTAiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImRyYWZ0QmFyYmVyIiwic2V0RHJhZnRCYXJiZXIiLCJvcGVuRWRpdG9yIiwiY2xvc2VFZGl0b3IiLCJpc0NyZWF0ZU1vZGUiLCJhY3RpdmVCYXJiZXIiLCJmaW5kIiwid29ya2luZ0JhcmJlciIsIndvcmtpbmdCYXJiZXJTY2hlZHVsZSIsImhhbmRsZUZpZWxkQ2hhbmdlIiwiZmllbGQiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGVsZXRlIiwicmVzdWx0IiwicmVuZGVyU3RhdHVzQmFkZ2UiLCJjYW5TdWJtaXQiLCJoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZSIsIl9yZWYyNyIsIl9jYWxsZWUzIiwic2xvdElkIiwiX2NvbnRleHQzIiwiX3giLCJfeDIiLCJhdmF0YXJTcmMiLCJwaG9uZUxhYmVsIiwicmF0aW5nTGFiZWwiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJkYXlMYWJlbCIsImlzVG9kYXlTbG90IiwiVGltZVJhbmdlUGlja2VyIiwiYnV0dG9uQ2xhc3NOYW1lIiwiU2VydmljZXNWaWV3IiwiX3JlZjI4IiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUyIiwiX3dvcmtpbmdTZXJ2aWNlJGR1cmF0IiwiX3JlZjI4JHNlcnZpY2VzIiwic2VydmljZXMiLCJfcmVmMjgkYmFyYmVycyIsIm9uUHJpY2VDaGFuZ2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImRyYWZ0U2VydmljZSIsInNldERyYWZ0U2VydmljZSIsImFjdGl2ZVNlcnZpY2UiLCJ3b3JraW5nU2VydmljZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUiLCJoYW5kbGVEZWxldGVMb2NhbCIsInNlcnZpY2VQcmljZVN1bW1hcnkiLCJkZXRhaWxzIiwidmFsdWVzIiwiX3NlcnZpY2UkcHJpY2VzIiwicHJpY2UiLCJzdW1tYXJ5IiwiaXNBY3RpdmVTZXJ2aWNlIiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlIiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlMiIsIk11bHRpU2VsZWN0Q2VsbCIsIl9yZWYyOSIsIl9yZWYyOSRvcHRpb25zIiwib25Db21taXQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJkcmFmdCIsInNldERyYWZ0IiwiYW5jaG9yUmVmIiwiX3VzZVN0YXRlMjEiLCJ0b3AiLCJfdXNlU3RhdGUyMiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVQb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJuZXh0TGVmdCIsImlubmVyV2lkdGgiLCJuZXh0VG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJ0b2dnbGVPcHRpb24iLCJzdHlsZSIsImNoZWNrZWQiLCJib2R5IiwiX3JlZjMwIiwiX3JlZjMwJHRpdGxlIiwiX3JlZjMwJHBsYWNlaG9sZGVyIiwiX3JlZjMwJGJ1dHRvbkNsYXNzTmFtIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJfdXNlU3RhdGUyNiQiLCJub3JtYWxpemVIb3VyVmFsdWUiLCJpbnB1dFZhbHVlIiwiX2lucHV0VmFsdWUkc3BsaXQiLCJfaW5wdXRWYWx1ZSRzcGxpdDIiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xlYXIiLCJFZGl0YWJsZUNlbGwiLCJfcmVmMzEiLCJjb2x1bW4iLCJvblVwZGF0ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJjb21taXQiLCJvcHRpb25MaXN0Iiwib25CbHVyIiwiQ29sdW1uTWVudSIsIl9yZWYzMiIsImNvbHVtbnMiLCJfcmVmMzIkaGlkZGVuQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJvblRvZ2dsZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJNdWx0aVNlbGVjdENoZWNrYm94ZXMiLCJfcmVmMzMiLCJfcmVmMzMkb3B0aW9ucyIsIl9yZWYzMyR2YWx1ZSIsIl9yZWYzMyRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VsZWN0ZWQiLCJub3JtYWxpemVkUXVlcnkiLCJmaWx0ZXJlZCIsInRvZ2dsZSIsImV4aXN0cyIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJDbGllbnRMb29rdXBJbnB1dCIsIl9yZWYzNCIsIl9yZWYzNCRsYWJlbCIsIl9yZWYzNCR2YWx1ZSIsIl9yZWYzNCRjbGllbnRzIiwiY2xpZW50cyIsIm9uU2VsZWN0Q2xpZW50IiwiX3JlZjM0JHBsYWNlaG9sZGVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJjb250YWluZXJSZWYiLCJtYXRjaGVzIiwic2hvcnRsaXN0IiwiY2xpZW50Iiwib25Gb2N1cyIsIm9uTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJTdGF0dXNNZW51IiwiX3JlZjM1IiwiX3JlZjM1JHN0YXR1c2VzIiwiX3JlZjM1JGhpZGRlblN0YXR1c2VzIiwiaGlkZGVuU3RhdHVzZXMiLCJvblJlc2V0IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIlRhYmxlVG9vbGJhciIsIl9yZWYzNiIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VsZWN0ZWRCYXJiZXIiLCJzZXRTZWxlY3RlZEJhcmJlciIsIl9yZWYzNiRiYXJiZXJzIiwiX3JlZjM2JHN0YXR1c2VzIiwiX3JlZjM2JGhpZGRlblN0YXR1c2VzIiwidG9nZ2xlU3RhdHVzIiwicmVzZXRTdGF0dXNlcyIsIl9yZWYzNiRjb2x1bW5zIiwiX3JlZjM2JGhpZGRlbkNvbHVtbnMiLCJ0b2dnbGVDb2x1bW4iLCJvbk9wZW5DcmVhdGUiLCJvblJlZnJlc2giLCJzaG93UGFzdEFwcG9pbnRtZW50cyIsInNldFNob3dQYXN0QXBwb2ludG1lbnRzIiwiX3JlZjM2JHN1cHBvcnRzR3JvdXBpIiwic3VwcG9ydHNHcm91cGluZyIsIl9yZWYzNiRncm91cEJ5RGF0ZSIsImdyb3VwQnlEYXRlIiwic2V0R3JvdXBCeURhdGUiLCJjaGlwQ2xhc3MiLCJhbGxvd01hbnVhbFJlZnJlc2giLCJpbmxpbmVDcmVhdGVGb3JNb2JpbGUiLCJzaG93Q29sdW1uTWVudSIsInN0YXR1c0NvbnRyb2wiLCJjb2x1bW5Db250cm9sIiwicGFzdENvbnRyb2wiLCJncm91cGluZ0NvbnRyb2wiLCJnZXRCYXJiZXJTZWxlY3QiLCJleHRyYUNsYXNzTmFtZSIsImNvbnRyb2xPcmRlciIsIm5vZGUiLCJjb250cm9sIiwiYnVpbGRBcHBvaW50bWVudEdyb3VwcyIsInJlY29yZHMiLCJzb3J0RGlyZWN0aW9uIiwiYnVja2V0cyIsImNvbXBhcmUiLCJfcmVmMzciLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ2IiwiX3JlZjM4Iiwic29ydGVkSXRlbXMiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ0IiwiX2dldEFwcG9pbnRtZW50U3RhcnRENSIsInJlZmVyZW5jZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJyYW5kb20iLCJyZXNvbHZlU29ydFZhbHVlIiwicm93IiwiX2dldEFwcG9pbnRtZW50U3RhcnRENyIsInRzIiwiU29ydEluZGljYXRvciIsIl9yZWYzOSIsIlNjaGVkdWxlc0JvYXJkIiwiX3JlZjQwIiwiX3JlZjQwJHJvd3MiLCJfcmVmNDAkY29sdW1ucyIsInZpc2libGVLZXlzIiwiZWRpdGFibGVDb2x1bW5zIiwiZ3JvdXBlZEJ5RGF0ZSIsIl9yZWY0MSIsIl9yZWY0MiIsInNsb3RzIiwic29ydGVkU2xvdHMiLCJsb2NhbGVDb21wYXJlIiwiTmFOIiwiYmFkZ2UiLCJBcHBvaW50bWVudHNMaXN0IiwiX3JlZjQzIiwiX3JlZjQzJGdyb3VwcyIsIm9uT3BlbiIsIl9yZWY0MyRjb2x1bW5zIiwiX3JlZjQzJGhpZGRlbkNvbHVtbnMiLCJ2aXNpYmxlQ29sdW1ucyIsInJlbmRlckNvbHVtblZhbHVlIiwiX3BhcnNlVGltZVJhbmdlUGFydHMzIiwiX3BhcnNlVGltZVJhbmdlUGFydHM0IiwiRGF0YVRhYmxlIiwiX3JlZjQ0Iiwic29ydENvbmZpZyIsIm9uU29ydCIsIl9yZWY0NCRncm91cEJ5RGF0ZSIsImlzQXBwb2ludG1lbnRzVGFibGUiLCJjYW5Hcm91cEFwcG9pbnRtZW50cyIsImdyb3VwZWRSb3dzIiwiX3Zpc2libGVDb2x1bW5zJCIsImNhcmRLZXkiLCJzb3J0YWJsZSIsImNvbFNwYW4iLCJDbGllbnRzTGlzdCIsIl9yZWY0NSIsIl9tb2RhbFN0YXRlJHJlY29yZCIsIl9yZWY0NSRjbGllbnRzIiwiX3JlZjQ1JGJhcmJlcnMiLCJmZXRjaEhpc3RvcnkiLCJvblJlcXVlc3RDb25maXJtIiwiX3VzZVN0YXRlMzkiLCJoaXN0b3J5IiwiX3VzZVN0YXRlNDAiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsImJhcmJlck9wdGlvbnMiLCJvcGVuQ2xpZW50TW9kYWwiLCJfcmVmNDYiLCJfY2FsbGVlNCIsInByb2ZpbGUiLCJfdDIiLCJfY29udGV4dDQiLCJOYW1lIiwiX3gzIiwiY2xvc2VDbGllbnRNb2RhbCIsIlBob25lIiwiVGVsZWdyYW1JRCIsIl9yZWY0NyIsIl9jYWxsZWU1IiwiX2NvbnRleHQ1Iiwic2tpcENvbmZpcm0iLCJjbGllbnROdW1iZXIiLCJwaG9uZURpc3BsYXkiLCJ0ZWxlZ3JhbUhhbmRsZSIsIkNyZWF0ZVJlY29yZE1vZGFsIiwiX3JlZjQ4IiwidGFibGVOYW1lIiwiX3JlZjQ4JGNsaWVudHMiLCJfcmVmNDgkaGlkZGVuRmllbGRzIiwiaGlkZGVuRmllbGRzIiwiaW5pdGlhbFN0YXRlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImlzQXBwb2ludG1lbnRzQ3JlYXRlIiwiaGFuZGxlU3VibWl0IiwiX3JlZjQ5IiwiX3JlZjUwIiwiaGFuZGxlQ2xpZW50QXV0b0ZpbGwiLCJwcmVmZXJyZWRCYXJiZXIiLCJVc2VySUQiLCJzZWxlY3RlZFZhbHVlcyIsIlByb2ZpbGVNb2RhbCIsIl9yZWY1MSIsIl9zdGF0ZSRkYXRhIiwiX3N0YXRlJGRhdGEyIiwiX3N0YXRlJGRhdGEzIiwiX3N0YXRlJGRhdGE0Iiwic3RhdGUiLCJ2aXNpdEhpc3RvcnkiLCJ1c2VyIiwicGhvbmVIcmVmIiwidGVsZWdyYW1IcmVmIiwiaHJlZiIsInJlbCIsIkJhY2t1cHNQYW5lbCIsIl9yZWY1MiIsIl9yZWY1MiRiYWNrdXBzIiwiYmFja3VwcyIsIm9uUmVzdG9yZSIsIm9uQ3JlYXRlIiwiYmFja3VwIiwiQXBwb2ludG1lbnRNb2RhbCIsIl9yZWY1MyIsIl9yZWY1MyRvcHRpb25zIiwiX3JlZjUzJGNhbkRlbGV0ZSIsImNhbkRlbGV0ZSIsIl9yZWY1MyRpc05ldyIsImlzTmV3IiwiX3JlZjUzJGNsaWVudHMiLCJidWlsZERyYWZ0IiwidXNlcklkIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJkZXRhaWxzT3BlbiIsInNldERldGFpbHNPcGVuIiwic2VydmljZXNTZWxlY3Rpb24iLCJhY3Rpb25CdXR0b25DbGFzcyIsImhhbmRsZUNoYW5nZSIsImlzUmVtaW5kZXJTZW50IiwiZ2V0UmVtaW5kZXJMYWJlbCIsImdldFJlbWluZGVyQWNjZW50IiwicmVjb3JkRGV0YWlscyIsIlJlbWluZGVyMmhDbGllbnRTZW50IiwiUmVtaW5kZXIyaEJhcmJlclNlbnQiLCJzdWJtaXREcmFmdCIsIm5leHREcmFmdCIsImhhbmRsZU1hcmtDb21wbGV0ZWQiLCJUYWJsZXNXb3Jrc3BhY2UiLCJfcmVmNTQiLCJfVEFCTEVfQ09ORklHJGFjdGl2ZVQiLCJhcGlSZXF1ZXN0Iiwic2hhcmVkT3B0aW9ucyIsIm9uT3B0aW9uc1VwZGF0ZSIsIm9uT3BlbkFwcG9pbnRtZW50UmVjb3JkIiwiX3JlZjU0JGNsaWVudHMiLCJfcmVmNTQkY3VycmVudFVzZXIiLCJjdXJyZW50VXNlciIsIl9yZWY1NCRsaXZlQXBwb2ludG1lbiIsImxpdmVBcHBvaW50bWVudHMiLCJfcmVmNTQkbGl2ZVVwZGF0ZWRBdCIsIl9yZWY1NCRiYXJiZXJzIiwiX3JlZjU0JHNlcnZpY2VzIiwib25CYXJiZXJGaWVsZENoYW5nZSIsIm9uU2F2ZUJhcmJlciIsIm9uQWRkQmFyYmVyIiwib25EZWxldGVCYXJiZXIiLCJvblNlcnZpY2VGaWVsZENoYW5nZSIsIm9uU2VydmljZVByaWNlQ2hhbmdlIiwib25EZWxldGVTZXJ2aWNlIiwib25BZGRTZXJ2aWNlIiwib25BY3RpdmVUYWJsZUNoYW5nZSIsIl9yZWY1NCRwcmVmZXJyZWRUYWJsZSIsInByZWZlcnJlZFRhYmxlIiwib25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkIiwiX3JlZjU0JG9uUmVxdWVzdENvbmZpIiwiX3VzZUxvY2FsU3RvcmFnZSIsIl91c2VMb2NhbFN0b3JhZ2UyIiwiYWN0aXZlVGFibGUiLCJzZXRBY3RpdmVUYWJsZSIsIl91c2VTdGF0ZTQ3IiwicmVkdWNlIiwiYWNjIiwiX3VzZVN0YXRlNDgiLCJzZXRUYWJsZXMiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwiZHJvcGRvd25PcHRpb25zIiwic2V0RHJvcGRvd25PcHRpb25zIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsInRhYmxlRXJyb3IiLCJzZXRUYWJsZUVycm9yIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsIl91c2VMb2NhbFN0b3JhZ2UzIiwiX3VzZUxvY2FsU3RvcmFnZTQiLCJfdXNlTG9jYWxTdG9yYWdlNSIsIl91c2VMb2NhbFN0b3JhZ2U2Iiwic2V0SGlkZGVuU3RhdHVzZXMiLCJfdXNlTG9jYWxTdG9yYWdlNyIsIl91c2VMb2NhbFN0b3JhZ2U4IiwiaGlkZGVuQ29sdW1uc01hcCIsInNldEhpZGRlbkNvbHVtbnNNYXAiLCJfdXNlTG9jYWxTdG9yYWdlOSIsIl9UQUJMRV9DT05GSUckdGFibGUiLCJfdXNlTG9jYWxTdG9yYWdlMCIsInNvcnRDb25maWdzIiwic2V0U29ydENvbmZpZ3MiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwiY3JlYXRlTW9kYWxPcGVuIiwic2V0Q3JlYXRlTW9kYWxPcGVuIiwiX3VzZUxvY2FsU3RvcmFnZTEiLCJfdXNlTG9jYWxTdG9yYWdlMTAiLCJfdXNlTG9jYWxTdG9yYWdlMTEiLCJfdXNlTG9jYWxTdG9yYWdlMTIiLCJncm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsInNldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIiwiYXBwb2ludG1lbnRUZW1wbGF0ZSIsIm5leHRUYWJsZSIsImV2ZXJ5IiwiZmV0Y2hUYWJsZXMiLCJfY2FsbGVlNiIsInJlc3BvbnNlcyIsIm5leHRUYWJsZXMiLCJyYXdPcHRpb25zIiwiX3QzIiwiX2NvbnRleHQ2IiwiYWxsIiwiY3VycmVudENvbHVtbnMiLCJwcm9jZXNzZWRSb3dzIiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUMiIsInNvdXJjZSIsImNvbHVtbkRlZiIsImhhbmRsZVNvcnQiLCJjb2x1bW5LZXkiLCJoaWRkZW4iLCJzaXplIiwiaGFuZGxlVXBkYXRlIiwiX3JlZjU2IiwiX2NhbGxlZTciLCJfcmVmNTciLCJvdmVycmlkZVRhYmxlSWQiLCJub3JtYWxpemVkRGF0YSIsIm9yaWdpbmFsIiwiX2FyZ3M3IiwiX3Q0IiwiX2NvbnRleHQ3IiwibGlzdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsIl94NCIsIl94NSIsIl9yZWY1OCIsIl9jYWxsZWU4IiwiX3JlZjU5IiwiX3JlZjU5JHNraXBDb25maXJtIiwiY29uZmlybUNvcHkiLCJfYXJnczgiLCJfdDUiLCJfdDYiLCJfY29udGV4dDgiLCJfeDYiLCJoYW5kbGVDcmVhdGVSZWNvcmQiLCJfcmVmNjAiLCJfY2FsbGVlOSIsIm5vcm1hbGl6ZWRQYXlsb2FkIiwiX3Q3IiwiX2NvbnRleHQ5IiwiaGVhZGVycyIsIl94NyIsImZldGNoQ2xpZW50UHJvZmlsZSIsInRhYmxlU2V0dGluZ3MiLCJpc0N1c3RvbVRhYmxlIiwiX1RBQkxFX0NPTkZJRyR0YWJsZTIiLCJfcmVmNjEiLCJCb3RDb250cm9sVmlldyIsIl9yZWY2MiIsInNldHRpbmdzIiwiX3JlZjYyJGJhY2t1cHMiLCJfcmVmNjIkbWVzc2FnZXMiLCJtZXNzYWdlcyIsIm9uVG9nZ2xlRW5hYmxlZCIsIm9uU3RhcnQiLCJvblN0b3AiLCJvblJlc3RhcnQiLCJvblNhdmVTZXR0aW5ncyIsIm9uU2F2ZU1lc3NhZ2UiLCJvblJlc3RvcmVCYWNrdXAiLCJvbkNyZWF0ZUJhY2t1cCIsIm9uRGVsZXRlQmFja3VwIiwibGljZW5zZVN0YXR1cyIsInVwZGF0ZUluZm8iLCJvblJlZnJlc2hVcGRhdGUiLCJvbkFwcGx5VXBkYXRlIiwic3lzdGVtQnVzeSIsIl9yZWY2MiR2aWV3TW9kZSIsInZpZXdNb2RlIiwiX3VzZVN0YXRlNTkiLCJib3REZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTYwIiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU2MSIsImFib3V0VGV4dCIsIl91c2VTdGF0ZTYyIiwiYWJvdXQiLCJzZXRBYm91dCIsIl9saWNlbnNlU3RhdHVzJGxpY2VucyIsIl9saWNlbnNlU3RhdHVzJGxpY2VuczIiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMzIiwidmFsaWQiLCJsaWNlbnNlIiwib3duZXIiLCJleHBpcmVzQXQiLCJudW1iZXIiLCJ2ZXJzaW9uIiwiY2hlY2tlZEF0IiwiYXZhaWxhYmxlIiwicnVubmluZyIsImlzQm90RW5hYmxlZCIsIkxvZ2luU2NyZWVuIiwiX3JlZjYzIiwib25Mb2dpbiIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwibG9naW5PcHRpb25zIiwic2V0TG9naW5PcHRpb25zIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsIm9wdGlvbnNFcnJvciIsInNldE9wdGlvbnNFcnJvciIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJsb2FkaW5nT3B0aW9ucyIsInNldExvYWRpbmdPcHRpb25zIiwiZmV0Y2hPcHRpb25zIiwiX3JlZjY0IiwiX2NhbGxlZTAiLCJfdDgiLCJfY29udGV4dDAiLCJzZWxlY3REaXNhYmxlZCIsIm9uU3VibWl0IiwiQXBwIiwiX3VzZVN0YXRlNzUiLCJzYXZlZCIsIl91c2VTdGF0ZTc2Iiwic2V0U2Vzc2lvbiIsIl91c2VMb2NhbFN0b3JhZ2UxMyIsIl91c2VMb2NhbFN0b3JhZ2UxNCIsInNldEFjdGl2ZVRhYiIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJwZW5kaW5nVGFibGVWaWV3Iiwic2V0UGVuZGluZ1RhYmxlVmlldyIsIl91c2VTdGF0ZTc5IiwiX3VudXNlZDQiLCJfdXNlU3RhdGU4MCIsInNldEFjdGl2ZURhdGFUYWJsZSIsIl91c2VTdGF0ZTgxIiwiX3VzZVN0YXRlODIiLCJzZXREYXNoYm9hcmQiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0Iiwic2V0U2VydmljZXMiLCJfdXNlU3RhdGU4NSIsIl91c2VTdGF0ZTg2Iiwic2V0QmFyYmVycyIsIl91c2VTdGF0ZTg3IiwiX3VzZVN0YXRlODgiLCJib3RTdGF0dXMiLCJzZXRCb3RTdGF0dXMiLCJfdXNlU3RhdGU4OSIsIl91c2VTdGF0ZTkwIiwiYm90U2V0dGluZ3MiLCJzZXRCb3RTZXR0aW5ncyIsIl91c2VTdGF0ZTkxIiwiX3VzZVN0YXRlOTIiLCJib3RNZXNzYWdlcyIsInNldEJvdE1lc3NhZ2VzIiwiX3VzZVN0YXRlOTMiLCJfdXNlU3RhdGU5NCIsInNldExpY2Vuc2VTdGF0dXMiLCJfdXNlU3RhdGU5NSIsIl91c2VTdGF0ZTk2Iiwic2V0VXBkYXRlSW5mbyIsIl91c2VTdGF0ZTk3IiwiX3VzZVN0YXRlOTgiLCJvcHRpb25zQ2FjaGUiLCJzZXRPcHRpb25zQ2FjaGUiLCJfdXNlU3RhdGU5OSIsIl91c2VTdGF0ZTEwMCIsInByb2ZpbGVNb2RhbCIsInNldFByb2ZpbGVNb2RhbCIsIl91c2VTdGF0ZTEwMSIsIl91c2VTdGF0ZTEwMiIsImFwcG9pbnRtZW50TW9kYWwiLCJzZXRBcHBvaW50bWVudE1vZGFsIiwiX3VzZVN0YXRlMTAzIiwiX3VzZVN0YXRlMTA0IiwiX3VzZVN0YXRlMTA1IiwiX3VzZVN0YXRlMTA2IiwiZ2xvYmFsRXJyb3IiLCJzZXRHbG9iYWxFcnJvciIsIl91c2VTdGF0ZTEwNyIsIl91c2VTdGF0ZTEwOCIsImF1dGhFcnJvciIsInNldEF1dGhFcnJvciIsIl91c2VTdGF0ZTEwOSIsIl91c2VTdGF0ZTExMCIsInNldFN5c3RlbUJ1c3kiLCJfdXNlU3RhdGUxMTEiLCJfdXNlU3RhdGUxMTIiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiX3VzZVN0YXRlMTEzIiwiX3VzZVN0YXRlMTE0IiwicmVhbHRpbWVTbmFwc2hvdCIsInNldFJlYWx0aW1lU25hcHNob3QiLCJfdXNlU3RhdGUxMTUiLCJfdXNlU3RhdGUxMTYiLCJmYXRhbEVycm9yIiwic2V0RmF0YWxFcnJvciIsIl91c2VTdGF0ZTExNyIsIl91c2VTdGF0ZTExOCIsImNvbmZpcm1EaWFsb2ciLCJzZXRDb25maXJtRGlhbG9nIiwiX3VzZVN0YXRlMTE5IiwiX3VzZVN0YXRlMTIwIiwiY29ubmVjdGlvblN0YXR1cyIsInNldENvbm5lY3Rpb25TdGF0dXMiLCJjb25maXJtUmVzb2x2ZXJSZWYiLCJyZXF1ZXN0Q29uZmlybSIsImhhbmRsZUNvbmZpcm1SZXN1bHQiLCJoYW5kbGVTaWRlYmFyVGFibGVDaGFuZ2UiLCJoYW5kbGVBY3RpdmVUYWJsZVN5bmMiLCJoYW5kbGVQcmVmZXJyZWRUYWJsZUNvbnN1bWVkIiwic2VydmljZVNhdmVUaW1lcnMiLCJjaGVja1NlcnZlciIsIl9yZWY2NSIsIl9jYWxsZWUxIiwiX3Q5IiwiX2NvbnRleHQxIiwiY2FjaGUiLCJpbnRlcnZhbCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfcmVmNjYiLCJfY2FsbGVlMTAiLCJlbmRwb2ludCIsIl9vcHRpb25zJGhlYWRlcnMiLCJfYXJnczEwIiwiX2NvbnRleHQxMCIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0ZXh0IiwiX3g4IiwiZmV0Y2hBbGwiLCJfY2FsbGVlMTEiLCJfb3ZlcnZpZXckYm90Iiwib3ZlcnZpZXciLCJ3aXRoRmFsbGJhY2siLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwic2VydmljZXNGdWxsIiwiYmFyYmVyc0Z1bGwiLCJib3RTdGF0ZSIsImJvdE1lc3NhZ2VzUGF5bG9hZCIsInVwZGF0ZSIsIl90MCIsIl9jb250ZXh0MTEiLCJyZXF1ZXN0IiwiRXZlbnRTb3VyY2UiLCJ0b2tlblBhcmFtIiwic3RyZWFtVXJsIiwiZXZlbnRTb3VyY2UiLCJvbm9wZW4iLCJoYW5kbGVFdmVudCIsInVwZGF0ZWRBdCIsIm9uZXJyb3IiLCJjbG9zZSIsIl9wcmV2JGFwcG9pbnRtZW50cyIsIm5leHRTdGF0cyIsIm5leHRBcHBvaW50bWVudHMiLCJoYW5kbGVHbG9iYWxFcnJvciIsImRldGFpbCIsInJlYXNvbiIsImNsZWFyVGltZW91dCIsImNsZWFyIiwiaGFuZGxlTG9naW4iLCJfcmVmNjgiLCJfY2FsbGVlMTIiLCJub3JtYWxpemVkVXNlcm5hbWUiLCJzZXNzaW9uUGF5bG9hZCIsIl90MSIsIl9jb250ZXh0MTIiLCJzdWNjZXNzIiwiX3g5IiwiX3gwIiwiaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UiLCJub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCIsImZyb21FbnRyaWVzIiwiX3JlZjY5IiwiX3JlZjcwIiwiZGVyaXZlQmFyYmVyTG9naW4iLCJiYXJiZXJEYXRhIiwiYnVpbGRCYXJiZXJQYXlsb2FkIiwiX2JhcmJlckRhdGEkb3JkZXJJbmRlIiwiZmFsbGJhY2tPcmRlciIsIm5pY2tuYW1lIiwib3JkZXJJbmRleCIsImhhbmRsZVNhdmVCYXJiZXIiLCJfcmVmNzEiLCJfY2FsbGVlMTMiLCJ1cGRhdGVkQmFyYmVyIiwiX3QxMCIsIl9jb250ZXh0MTMiLCJfeDEiLCJoYW5kbGVEZWxldGVCYXJiZXIiLCJfcmVmNzIiLCJfY2FsbGVlMTQiLCJfdDExIiwiX2NvbnRleHQxNCIsIl94MTAiLCJoYW5kbGVBZGRCYXJiZXIiLCJfcmVmNzMiLCJfY2FsbGVlMTUiLCJuZXdCYXJiZXJQYXlsb2FkIiwiX3QxMiIsIl9jb250ZXh0MTUiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfeDExIiwiaGFuZGxlU2F2ZVNlcnZpY2UiLCJfcmVmNzQiLCJfY2FsbGVlMTYiLCJfdDEzIiwiX2NvbnRleHQxNiIsIl94MTIiLCJzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSIsInRpbWVycyIsImV4aXN0aW5nVGltZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRGVsZXRlU2VydmljZSIsIl9yZWY3NSIsIl9jYWxsZWUxNyIsIl90MTQiLCJfY29udGV4dDE3IiwiX3gxMyIsImhhbmRsZUFkZFNlcnZpY2UiLCJfcmVmNzYiLCJfY2FsbGVlMTgiLCJfdDE1IiwiX2NvbnRleHQxOCIsIl94MTQiLCJoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UiLCJoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UiLCJzZXJ2aWNlSWQiLCJoYW5kbGVCb3RUb2dnbGUiLCJfcmVmNzciLCJfY2FsbGVlMTkiLCJlbmFibGVkIiwiX3QxNiIsIl9jb250ZXh0MTkiLCJfeDE1IiwiaGFuZGxlQm90QWN0aW9uIiwiX3JlZjc4IiwiX2NhbGxlZTIwIiwiYWN0aW9uIiwiX3QxNyIsIl9jb250ZXh0MjAiLCJfeDE2IiwiaGFuZGxlU2F2ZVNldHRpbmdzIiwiX3JlZjc5IiwiX2NhbGxlZTIxIiwiX3QxOCIsIl9jb250ZXh0MjEiLCJfeDE3IiwiaGFuZGxlU2F2ZU1lc3NhZ2UiLCJfcmVmODAiLCJfY2FsbGVlMjIiLCJwZXJzaXN0IiwiX3QxOSIsIl9jb250ZXh0MjIiLCJjb2RlIiwiX3gxOCIsIl94MTkiLCJfeDIwIiwiaGFuZGxlUmVzdG9yZUJhY2t1cCIsIl9yZWY4MSIsIl9jYWxsZWUyMyIsIl90MjAiLCJfY29udGV4dDIzIiwiX3gyMSIsImhhbmRsZUNyZWF0ZUJhY2t1cCIsIl9yZWY4MiIsIl9jYWxsZWUyNCIsIl90MjEiLCJfY29udGV4dDI0IiwiaGFuZGxlRGVsZXRlQmFja3VwIiwiX3JlZjgzIiwiX2NhbGxlZTI1IiwiX3QyMiIsIl9jb250ZXh0MjUiLCJfeDIyIiwiZmV0Y2hDbGllbnRIaXN0b3J5IiwiX3JlZjg0IiwiX2NhbGxlZTI2IiwiX2NvbnRleHQyNiIsIl94MjMiLCJvcGVuUHJvZmlsZSIsIl9yZWY4NSIsIl9jYWxsZWUyNyIsIl90MjMiLCJfY29udGV4dDI3IiwiX3gyNCIsImVuc3VyZU9wdGlvbnMiLCJfY2FsbGVlMjgiLCJfY29udGV4dDI4IiwiaGFuZGxlT3BlbkFwcG9pbnRtZW50IiwiX3JlZjg3IiwiX2NhbGxlZTI5Iiwib3B0aW9uc0NvbmZpZyIsIl9hcmdzMjkiLCJfY29udGV4dDI5IiwiX3gyNSIsImhhbmRsZUNyZWF0ZUFwcG9pbnRtZW50IiwiX2NhbGxlZTMwIiwiX29wdGlvbnMkc3RhdHVzZXMiLCJkZWZhdWx0U3RhdHVzIiwiZGVmYXVsdEJhcmJlciIsIl9jb250ZXh0MzAiLCJoYW5kbGVTYXZlQXBwb2ludG1lbnQiLCJfcmVmOTAiLCJfY2FsbGVlMzEiLCJfcmVmODkiLCJfdDI0IiwiX2NvbnRleHQzMSIsIl94MjYiLCJoYW5kbGVEZWxldGVBcHBvaW50bWVudCIsIl9yZWY5MSIsIl9jYWxsZWUzMiIsIl90MjUiLCJfY29udGV4dDMyIiwiX3gyNyIsImhhbmRsZVJlZnJlc2hVcGRhdGUiLCJfcmVmOTIiLCJfY2FsbGVlMzMiLCJpbmZvIiwiX3QyNiIsIl9jb250ZXh0MzMiLCJoYW5kbGVBcHBseVVwZGF0ZSIsIl9yZWY5MyIsIl9jYWxsZWUzNCIsIl90MjciLCJfY29udGV4dDM0IiwicHJlZmVycmVkVGFibGVUYXJnZXQiLCJtYWluQ2xhc3NOYW1lIiwicmVuZGVyQWN0aXZlIiwicmVsb2FkIiwicmVhY3RBcHBSb290IiwicmVuZGVyQXBwIiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImlubmVySFRNTCJdLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCwgRnJhZ21lbnQgfSA9IFJlYWN0O1xyXG5jb25zdCB7IGNyZWF0ZVBvcnRhbCwgY3JlYXRlUm9vdCB9ID0gUmVhY3RET007XHJcblxyXG5jb25zdCByZXNvbHZlRGVmYXVsdEFwaUJhc2VVcmwgPSAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpYDtcclxuICB9XHJcbiAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQVBJX0JBU0VfVVJMID0gcmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsKCk7XHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHdpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fIHx8IERFRkFVTFRfQVBJX0JBU0VfVVJMO1xyXG53aW5kb3cuX19CQVJCRVJfQVBJX0JBU0VfXyA9IEFQSV9CQVNFX1VSTDtcclxuXHJcbmNvbnN0IFZJRVdfVEFCUyA9IFtcclxuICB7IGlkOiAnZGFzaGJvYXJkJywgbGFiZWw6ICfQntCx0LfQvtGAJyB9LFxyXG4gIHsgaWQ6ICd0YWJsZXMnLCBsYWJlbDogJ9CU0LDQvdC90YvQtScgfSxcclxuICB7IGlkOiAnYm90JywgbGFiZWw6ICfQkdC+0YInIH0sXHJcbiAgeyBpZDogJ3N5c3RlbScsIGxhYmVsOiAn0KHQuNGB0YLQtdC80LAnIH0sXHJcbl07XHJcblxyXG5jb25zdCBUQUJMRV9PUkRFUiA9IFsnQXBwb2ludG1lbnRzJywgJ1NjaGVkdWxlcycsICdVc2VycycsICdCYXJiZXJzJywgJ1NlcnZpY2VzJ107XHJcbmNvbnN0IFZJU0lCTEVfVEFCTEVfT1JERVIgPSBUQUJMRV9PUkRFUi5maWx0ZXIoKHRhYmxlKSA9PiB0YWJsZSAhPT0gJ1NjaGVkdWxlcycpO1xyXG5jb25zdCBEQVRBX1RBQkxFUyA9IFsnQXBwb2ludG1lbnRzJywgJ1NjaGVkdWxlcycsICdVc2VycyddO1xyXG5cclxuY29uc3QgVEFCTEVfQ09ORklHID0ge1xyXG4gIEFwcG9pbnRtZW50czogeyBsYWJlbDogJ9CX0LDQv9C40YHQuCcsIG1vZGU6ICdkYXRhJywgY2FuQ3JlYXRlOiB0cnVlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgc3VwcG9ydHNTdGF0dXNGaWx0ZXI6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ0RhdGUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcclxuICBTY2hlZHVsZXM6IHsgbGFiZWw6ICfQoNCw0YHQv9C40YHQsNC90LjQtScsIG1vZGU6ICdkYXRhJywgY2FuQ3JlYXRlOiBmYWxzZSwgc3VwcG9ydHNCYXJiZXJGaWx0ZXI6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ0RhdGUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcclxuICBVc2VyczogeyBsYWJlbDogJ9Ca0LvQuNC10L3RgtGLJywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ05hbWUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcclxuICBCYXJiZXJzOiB7IGxhYmVsOiAn0JHQsNGA0LHQtdGA0YsnLCBtb2RlOiAnY3VzdG9tJyB9LFxyXG4gIFNlcnZpY2VzOiB7IGxhYmVsOiAn0KPRgdC70YPQs9C4JywgbW9kZTogJ2N1c3RvbScgfSxcclxufTtcclxuY29uc3QgREFUQV9TSE9SVENVVFMgPSBbJ0FwcG9pbnRtZW50cycsICdVc2VycycsICdCYXJiZXJzJywgJ1NlcnZpY2VzJ10ubWFwKCh0YWJsZUlkKSA9PiAoe1xyXG4gIGlkOiB0YWJsZUlkLFxyXG4gIGxhYmVsOiBUQUJMRV9DT05GSUdbdGFibGVJZF0/LmxhYmVsIHx8IHRhYmxlSWQsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFRBQkxFX0NPTFVNTlMgPSB7XHJcbiAgQXBwb2ludG1lbnRzOiBbXHJcbiAgICB7IGtleTogJ0N1c3RvbWVyTmFtZScsIGxhYmVsOiAn0JrQu9C40LXQvdGCJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgaXNQcm9maWxlTGluazogdHJ1ZSwgbWluV2lkdGg6ICd3LTQ4JyB9LFxyXG4gICAgeyBrZXk6ICdQaG9uZScsIGxhYmVsOiAn0KLQtdC70LXRhNC+0L0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzYnIH0sXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JHQsNGA0LHQtdGAJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnYmFyYmVycycsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnRGF0ZScsIGxhYmVsOiAn0JTQsNGC0LAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2RhdGUnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ1RpbWUnLCBsYWJlbDogJ9CS0YDQtdC80Y8nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMjgnLCBub1dyYXA6IHRydWUgfSxcclxuICAgIHsga2V5OiAnU3RhdHVzJywgbGFiZWw6ICfQodGC0LDRgtGD0YEnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdzdGF0dXNlcycsIGFsaWduOiAnY2VudGVyJywgbWluV2lkdGg6ICd3LTI4JyB9LFxyXG4gICAgeyBrZXk6ICdTZXJ2aWNlcycsIGxhYmVsOiAn0KPRgdC70YPQs9C4JywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdtdWx0aS1zZWxlY3QnLCBvcHRpb25zS2V5OiAnc2VydmljZXMnLCBtaW5XaWR0aDogJ3ctNTYnIH0sXHJcbiAgICB7IGtleTogJ1VzZXJJRCcsIGxhYmVsOiAnSUQg0LrQu9C40LXQvdGC0LAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMjQnIH0sXHJcbiAgICB7IGtleTogJ1JlbWluZGVyMmhDbGllbnRTZW50JywgbGFiZWw6ICfQndCw0L/QvtC80LjQvdCw0L3QuNC1INC60LvQuNC10L3RgtGDJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdib29sZWFuJywgYWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICB7IGtleTogJ1JlbWluZGVyMmhCYXJiZXJTZW50JywgbGFiZWw6ICfQndCw0L/QvtC80LjQvdCw0L3QuNC1INCx0LDRgNCx0LXRgNGDJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdib29sZWFuJywgYWxpZ246ICdjZW50ZXInIH0sXHJcbiAgXSxcclxuICBTY2hlZHVsZXM6IFtcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICAgIHsga2V5OiAnRGF5T2ZXZWVrJywgbGFiZWw6ICfQlNC10L3RjCDQvdC10LTQtdC70LgnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnRGF0ZScsIGxhYmVsOiAn0JTQsNGC0LAnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnV2VlaycsIGxhYmVsOiAn0KHQu9C+0YLRiycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJywgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gIF0sXHJcbiAgVXNlcnM6IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAn0JjQvNGPJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgaXNQcm9maWxlTGluazogdHJ1ZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdQaG9uZScsIGxhYmVsOiAn0KLQtdC70LXRhNC+0L0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzYnIH0sXHJcbiAgICB7IGtleTogJ1RlbGVncmFtSUQnLCBsYWJlbDogJ1RlbGVncmFtJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9Cb0Y7QsdC40LzRi9C5INC80LDRgdGC0LXRgCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ2JhcmJlcnMnLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IFJBVElOR19NSU4gPSAzO1xyXG5jb25zdCBSQVRJTkdfTUFYID0gNTtcclxuY29uc3QgUkFUSU5HX1NURVAgPSAwLjU7XHJcbmxldCBhdmF0YXJPcHRpb25zQ2FjaGUgPSBudWxsO1xyXG5jb25zdCBZRUFSX0lOX01TID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuY29uc3QgREFZX0lOX01TID0gMjQgKiA2MCAqIDYwICogMTAwMDtcclxuY29uc3QgYnVpbGROZXdCYXJiZXJTdGF0ZSA9ICgpID0+ICh7XHJcbiAgbmFtZTogJycsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIHJhdGluZzogJzUnLFxyXG4gIGNvbG9yOiAnIzZkMjhkOScsXHJcbiAgYXZhdGFyVXJsOiAnJyxcclxuICBkZXNjcmlwdGlvbjogJycsXHJcbiAgcGhvbmU6ICcnLFxyXG4gIHRlbGVncmFtSWQ6ICcnLFxyXG4gIGlzQWN0aXZlOiB0cnVlLFxyXG59KTtcclxuY29uc3QgYnVpbGROZXdTZXJ2aWNlU3RhdGUgPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICcnLFxyXG4gIGR1cmF0aW9uOiA2MCxcclxuICBpc0FjdGl2ZTogdHJ1ZSxcclxuICBwcmljZXM6IHt9LFxyXG59KTtcclxuY29uc3QgQUNUSVZFX0JBUkJFUl9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDEwLCAweDA0M2EsIDB4MDQ0MiwgMHgwNDM4LCAweDA0MzIsIDB4MDQzNSwgMHgwNDNkKTtcclxuY29uc3QgSElEREVOX0JBUkJFUl9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDIxLCAweDA0M2EsIDB4MDQ0MCwgMHgwNDRiLCAweDA0NDIpO1xyXG5jb25zdCBBQ1RJVkVfU0VSVklDRV9MQUJFTCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwNDEwLCAweDA0M2EsIDB4MDQ0MiwgMHgwNDM4LCAweDA0MzIsIDB4MDQzZCwgMHgwNDMwKTtcclxuY29uc3QgSElEREVOX1NFUlZJQ0VfTEFCRUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDQyMSwgMHgwNDNhLCAweDA0NDAsIDB4MDQ0YiwgMHgwNDQyLCAweDA0MzApO1xyXG5jb25zdCBidWlsZFZpc2l0SGlzdG9yeSA9IChhcHBvaW50bWVudHMgPSBbXSkgPT4ge1xyXG4gIGlmICghYXBwb2ludG1lbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGN1dG9mZiA9IERhdGUubm93KCkgLSBZRUFSX0lOX01TO1xyXG4gIGNvbnN0IGNvbXBsZXRlZCA9IGFwcG9pbnRtZW50c1xyXG4gICAgLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcclxuICAgICAgcmV0dXJuIHsgLi4uYXBwdCwgc3RhcnREYXRlIH07XHJcbiAgICB9KVxyXG4gICAgLmZpbHRlcihcclxuICAgICAgKGFwcHQpID0+XHJcbiAgICAgICAgYXBwdC5zdGFydERhdGUgJiZcclxuICAgICAgICBhcHB0LnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPj0gY3V0b2ZmICYmXHJcbiAgICAgICAgKGlzQ29tcGxldGVkQXBwb2ludG1lbnRTdGF0dXMoYXBwdC5TdGF0dXMpIHx8IGlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMoYXBwdC5TdGF0dXMpKVxyXG4gICAgKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc3RhcnREYXRlLmdldFRpbWUoKSAtIGEuc3RhcnREYXRlLmdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIGNvbXBsZXRlZC5tYXAoKGFwcHQsIGluZGV4KSA9PiAoe1xyXG4gICAgLi4uYXBwdCxcclxuICAgIG9yZGVyTnVtYmVyOiBjb21wbGV0ZWQubGVuZ3RoIC0gaW5kZXgsXHJcbiAgICBkYXRlTGFiZWw6IGZvcm1hdERhdGVUaW1lKGFwcHQuRGF0ZSwgYXBwdC5UaW1lKSxcclxuICB9KSk7XHJcbn07XHJcbmNvbnN0IGRlZmF1bHRDb25maXJtU3RhdGUgPSB7XHJcbiAgb3BlbjogZmFsc2UsXHJcbiAgdGl0bGU6ICcnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGNvbmZpcm1MYWJlbDogJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLFxyXG4gIGNhbmNlbExhYmVsOiAn0J7RgtC80LXQvdCwJyxcclxuICB0b25lOiAnbmV1dHJhbCcsXHJcbn07XHJcbmNvbnN0IGdldFJlY29yZElkID0gKHJlY29yZCA9IHt9KSA9PiByZWNvcmQuaWQgfHwgcmVjb3JkLklkIHx8IHJlY29yZC5JRCB8fCByZWNvcmQucmVjb3JkSWQgfHwgcmVjb3JkLklEX1JlY29yZCB8fCBudWxsO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcbmNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RvcmVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiBzdG9yZWQgPyBKU09OLnBhcnNlKHN0b3JlZCkgOiBpbml0aWFsVmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSByZWFkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVWYWx1ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHVwZGF0ZXIpID0+IHtcclxuICAgICAgc2V0VmFsdWUoKHByZXYpID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIocHJldikgOiB1cGRhdGVyO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXh0VmFsdWUpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2Ugd3JpdGUgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtrZXldXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFt2YWx1ZSwgdXBkYXRlVmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdXNlTm93VGljayA9IChpbnRlcnZhbE1zID0gMTAwMCkgPT4ge1xyXG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZSgoKSA9PiBEYXRlLm5vdygpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXROb3coRGF0ZS5ub3coKSksIGludGVydmFsTXMpO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtpbnRlcnZhbE1zXSk7XHJcbiAgcmV0dXJuIG5vdztcclxufTtcclxuXHJcbmNvbnN0IHVzZU91dHNpZGVDbGljayA9IChyZWYsIGhhbmRsZXIpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFoYW5kbGVyKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFyZWYuY3VycmVudCB8fCByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm47XHJcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGhhbmRsZXJdKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQXZhdGFyT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXNzZXRzL2F2YXRhcnNgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDRgdC/0LjRgdC+0Log0LDQstCw0YLQsNGA0L7QsicpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgaW1hZ2VzID0gQXJyYXkuaXNBcnJheShwYXlsb2FkLmltYWdlcykgPyBwYXlsb2FkLmltYWdlcy5maWx0ZXIoQm9vbGVhbikubWFwKG5vcm1hbGl6ZUltYWdlUGF0aCkgOiBbXTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGltYWdlcykpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplVGV4dCA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IFN0cmluZyh2YWx1ZSkpO1xyXG5jb25zdCBpc1ZhbGlkRGF0ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFOdW1iZXIuaXNOYU4odmFsdWUuZ2V0VGltZSgpKTtcclxuY29uc3QgcmVzb2x2ZUFzc2V0VXJsID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnRyaW0oKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChub3JtYWxpemVkKSB8fCBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHJldHVybiBub3JtYWxpemVkO1xyXG4gIGNvbnN0IHNhbml0aXplZCA9IG5vcm1hbGl6ZWQucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC5cXC8rLywgJycpO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gc2FuaXRpemVkO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnSW1hZ2UvJykpIHJldHVybiBgLyR7c2FuaXRpemVkfWA7XHJcbiAgcmV0dXJuIGAvSW1hZ2UvJHtzYW5pdGl6ZWR9YDtcclxufTtcclxuY29uc3Qgbm9ybWFsaXplSW1hZ2VQYXRoID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlQXNzZXRVcmwodmFsdWUpO1xyXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChyZXNvbHZlZCkgfHwgcmVzb2x2ZWQuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIHJlc29sdmVkO1xyXG4gIHJldHVybiByZXNvbHZlZC5zdGFydHNXaXRoKCcvJykgPyByZXNvbHZlZCA6IGAvJHtyZXNvbHZlZH1gO1xyXG59O1xyXG5jb25zdCBudW1iZXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJyk7XHJcbmNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbnVtZXJpYyA9IE51bWJlcih2YWx1ZSk7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHJldHVybiAnJztcclxuICByZXR1cm4gYCR7bnVtYmVyRm9ybWF0dGVyLmZvcm1hdChudW1lcmljKX0gXFx1MjBCRGA7XHJcbn07XHJcbmNvbnN0IHBsdXJhbGl6ZSA9IChjb3VudCwgW29uZSwgZmV3LCBtYW55XSkgPT4ge1xyXG4gIGNvbnN0IG1vZDEwID0gY291bnQgJSAxMDtcclxuICBjb25zdCBtb2QxMDAgPSBjb3VudCAlIDEwMDtcclxuICBpZiAobW9kMTAgPT09IDEgJiYgbW9kMTAwICE9PSAxMSkgcmV0dXJuIG9uZTtcclxuICBpZiAobW9kMTAgPj0gMiAmJiBtb2QxMCA8PSA0ICYmIChtb2QxMDAgPCAxMCB8fCBtb2QxMDAgPj0gMjApKSByZXR1cm4gZmV3O1xyXG4gIHJldHVybiBtYW55O1xyXG59O1xyXG5cclxuY29uc3QgY2Fub25pY2FsaXplTmFtZSA9ICh2YWx1ZSkgPT4gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvW15hLXowLTnQsC3Rj9GRXFxzXS9naSwgJycpLnRyaW0oKTtcclxuXHJcbmNvbnN0IHJlc29sdmVMb2dpbiA9ICh2YWx1ZSkgPT4gbm9ybWFsaXplVGV4dCh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFNlc3Npb25QYXlsb2FkID0gKHBheWxvYWQgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRMb2dpbiA9IHJlc29sdmVMb2dpbihwYXlsb2FkLnVzZXJuYW1lIHx8IHBheWxvYWQubG9naW4pO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wYXlsb2FkLFxyXG4gICAgdXNlcm5hbWU6IG5vcm1hbGl6ZWRMb2dpbixcclxuICAgIGRpc3BsYXlOYW1lOiBwYXlsb2FkLmRpc3BsYXlOYW1lIHx8IHBheWxvYWQubmFtZSB8fCBub3JtYWxpemVkTG9naW4sXHJcbiAgICBiYXJiZXJJZDogcGF5bG9hZC5iYXJiZXJJZCB8fCBwYXlsb2FkLmlkIHx8IG51bGwsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHBpY2tCYXJiZXJGb3JVc2VyID0gKHVzZXJTZXNzaW9uLCBhdmFpbGFibGVCYXJiZXJzID0gW10pID0+IHtcclxuICBjb25zdCBmYWxsYmFjayA9IGF2YWlsYWJsZUJhcmJlcnM/LlswXSB8fCAnJztcclxuICBpZiAoIXVzZXJTZXNzaW9uKSByZXR1cm4gZmFsbGJhY2s7XHJcbiAgY29uc3QgY2FuZGlkYXRlcyA9IFt1c2VyU2Vzc2lvbi5kaXNwbGF5TmFtZSwgdXNlclNlc3Npb24ucHJlZmVycmVkTmFtZSwgdXNlclNlc3Npb24udXNlcm5hbWVdXHJcbiAgICAubWFwKChjYW5kaWRhdGUpID0+IGNhbm9uaWNhbGl6ZU5hbWUoY2FuZGlkYXRlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuICBpZiAoIWNhbmRpZGF0ZXMubGVuZ3RoIHx8ICFhdmFpbGFibGVCYXJiZXJzPy5sZW5ndGgpIHJldHVybiBmYWxsYmFjaztcclxuICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IGF2YWlsYWJsZUJhcmJlcnMubWFwKChiYXJiZXIpID0+IGNhbm9uaWNhbGl6ZU5hbWUoYmFyYmVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XHJcbiAgICBjb25zdCBtYXRjaEluZGV4ID0gbm9ybWFsaXplZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbiA9PT0gY2FuZGlkYXRlKTtcclxuICAgIGlmIChtYXRjaEluZGV4ICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gYXZhaWxhYmxlQmFyYmVyc1ttYXRjaEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbGxiYWNrO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnLSc7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRheTogJzItZGlnaXQnLCBtb250aDogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0VGltZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVWYWx1ZSA9IG5vcm1hbGl6ZVRleHQodmFsdWUpO1xyXG4gIGlmICghc2FmZVZhbHVlKSByZXR1cm4gJy0nO1xyXG4gIGlmIChzYWZlVmFsdWUuaW5jbHVkZXMoJy0nKSkge1xyXG4gICAgcmV0dXJuIHNhZmVWYWx1ZS5zcGxpdCgnLScpWzBdLnRyaW0oKTtcclxuICB9XHJcbiAgcmV0dXJuIHNhZmVWYWx1ZTtcclxufTtcclxuY29uc3QgZm9ybWF0UGhvbmVJbnB1dCA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IGRpZ2l0cyA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuICAgIC5yZXBsYWNlKC9bXlxcZF0vZywgJycpXHJcbiAgICAudHJpbSgpO1xyXG4gIGlmICghZGlnaXRzKSByZXR1cm4gJyc7XHJcbiAgbGV0IG5vcm1hbGl6ZWQgPSBkaWdpdHM7XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMSAmJiBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzgnKSkge1xyXG4gICAgbm9ybWFsaXplZCA9IGA3JHtub3JtYWxpemVkLnNsaWNlKDEpfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTApIHtcclxuICAgIG5vcm1hbGl6ZWQgPSBgNyR7bm9ybWFsaXplZH1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDExICYmIG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnNycpKSB7XHJcbiAgICByZXR1cm4gYCs3ICgke25vcm1hbGl6ZWQuc2xpY2UoMSwgNCl9KSAke25vcm1hbGl6ZWQuc2xpY2UoNCwgNyl9LSR7bm9ybWFsaXplZC5zbGljZSg3LCA5KX0tJHtub3JtYWxpemVkLnNsaWNlKDksIDExKX1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5zdGFydHNXaXRoKCc3JykgJiYgbm9ybWFsaXplZC5sZW5ndGggPiAxMSkge1xyXG4gICAgcmV0dXJuIGArJHtub3JtYWxpemVkfWA7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoJysnKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG4gIHJldHVybiBgKyR7bm9ybWFsaXplZH1gO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0VGVsZWdyYW1IYW5kbGUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBoYW5kbGUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9eQCsvLCAnJykudHJpbSgpO1xyXG4gIHJldHVybiBoYW5kbGUgPyBgQCR7aGFuZGxlfWAgOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkVGVsZWdyYW1MaW5rID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvXkArLywgJycpLnRyaW0oKTtcclxuICByZXR1cm4gaGFuZGxlID8gYGh0dHBzOi8vdC5tZS8ke2hhbmRsZX1gIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChkYXRlLCB0aW1lKSA9PiB7XHJcbiAgY29uc3QgZGF0ZVBhcnQgPSBmb3JtYXREYXRlKGRhdGUpO1xyXG4gIGNvbnN0IHRpbWVQYXJ0ID0gZm9ybWF0VGltZSh0aW1lKTtcclxuICBpZiAoZGF0ZVBhcnQgPT09ICctJyAmJiB0aW1lUGFydCA9PT0gJy0nKSByZXR1cm4gJy0nO1xyXG4gIGlmIChkYXRlUGFydCA9PT0gJy0nKSByZXR1cm4gdGltZVBhcnQ7XHJcbiAgaWYgKHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiBkYXRlUGFydDtcclxuICByZXR1cm4gYCR7ZGF0ZVBhcnR9IHwgJHt0aW1lUGFydH1gO1xyXG59O1xyXG5cclxuY29uc3QgYmFja3VwRGF0ZUZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHtcclxuICBkYXk6ICdudW1lcmljJyxcclxuICBtb250aDogJ2xvbmcnLFxyXG4gIHllYXI6ICdudW1lcmljJyxcclxuICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgbWludXRlOiAnMi1kaWdpdCcsXHJcbn0pO1xyXG5cclxuY29uc3QgcGFyc2VCYWNrdXBUaW1lc3RhbXAgPSAoZmlsZW5hbWUgPSAnJykgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dChmaWxlbmFtZSkubWF0Y2goL2JhY2t1cC0oXFxkezR9LVxcZHsyfS1cXGR7Mn0pVChcXGR7Mn0pLShcXGR7Mn0pLShcXGR7Mn0pKD86LShcXGR7M30pKT8vaSk7XHJcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgWywgZGF0ZVBhcnQsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHNdID0gbWF0Y2g7XHJcbiAgY29uc3QgaXNvQ2FuZGlkYXRlID0gYCR7ZGF0ZVBhcnR9VCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfSR7bWlsbGlzZWNvbmRzID8gYC4ke21pbGxpc2Vjb25kc31gIDogJyd9WmA7XHJcbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcclxuICByZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpID8gbnVsbCA6IHBhcnNlZDtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdEJhY2t1cExhYmVsID0gKGZpbGVuYW1lID0gJycpID0+IHtcclxuICBjb25zdCBwYXJzZWQgPSBwYXJzZUJhY2t1cFRpbWVzdGFtcChmaWxlbmFtZSk7XHJcbiAgcmV0dXJuIHBhcnNlZCA/IGJhY2t1cERhdGVGb3JtYXR0ZXIuZm9ybWF0KHBhcnNlZCkgOiBmaWxlbmFtZTtcclxufTtcclxuY29uc3QgZm9ybWF0RGF0ZUhlYWRpbmcgPSAodmFsdWUsIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAn0JHQtdC3INC00LDRgtGLJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7dmFsdWV9VDAwOjAwOjAwYCk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gdmFsdWU7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgb3B0aW9ucykuZm9ybWF0KHBhcnNlZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGZvcm1hdERhdGVCYWRnZUxhYmVsID0gKHZhbHVlKSA9PlxyXG4gIGZvcm1hdERhdGVIZWFkaW5nKHZhbHVlLCB7IHdlZWtkYXk6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JyB9KTtcclxuY29uc3QgZm9ybWF0TGl2ZVRpbWVzdGFtcCA9ICh2YWx1ZSwgbm93VHMgPSBEYXRlLm5vdygpKSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gJyc7XHJcbiAgICBjb25zdCBkaWZmTXMgPSBNYXRoLm1heCgwLCBub3dUcyAtIHBhcnNlZC5nZXRUaW1lKCkpO1xyXG4gICAgaWYgKGRpZmZNcyA8IDEwMDApIHJldHVybiAn0YLQvtC70YzQutC+INGH0YLQvic7XHJcbiAgICBpZiAoZGlmZk1zIDwgNjBfMDAwKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmTXMgLyAxMDAwKX0g0YHQtdC6YDtcclxuICAgIGlmIChkaWZmTXMgPCAzXzYwMF8wMDApIHtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gNjBfMDAwKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDYwXzAwMCkgLyAxMDAwKTtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9INC80LjQvSAke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSDRgdC10LpgO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZmZNcyA8IDg2XzQwMF8wMDApIHtcclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRpZmZNcyAvIDNfNjAwXzAwMCk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmTXMgJSAzXzYwMF8wMDApIC8gNjBfMDAwKTtcclxuICAgICAgcmV0dXJuIGAke2hvdXJzfSDRhyAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSDQvNC40L1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZC50b0xvY2FsZVN0cmluZygncnUtUlUnLCB7XHJcbiAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTVEFUVVNfVFJBTlNMQVRJT05TID0ge1xyXG4gIGFjdGl2ZTogJ9CQ0LrRgtC40LLQvdCw0Y8nLFxyXG4gICfQsNC60YLQuNCy0L3QsNGPJzogJ9CQ0LrRgtC40LLQvdCw0Y8nLFxyXG4gIGNvbmZpcm06ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGNvbmZpcm1lZDogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3Qvic6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gICfQv9C+0LTRgtCy0LXRgNC20LTQtdC90LAnOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICBkb25lOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZTogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgY29tcGxldGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBmaW5pc2hlZDogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9Cy0YvQv9C+0LvQvdC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gICfQt9Cw0LLQtdGA0YjQtdC90LAnOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjYW5jZWw6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICBjYW5jZWxlZDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGxlZDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gICfQvtGC0LzQtdC90LAnOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QtdC90L4nOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ25vIHNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gICduby1zaG93JzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBub3Nob3c6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgbWlzc2VkOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIHBlbmRpbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHdhaXQ6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHdhaXRpbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHByb2Nlc3Npbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG59O1xyXG5jb25zdCBTVEFUVVNfQkFER0VfTUFQID0ge1xyXG4gINCQ0LrRgtC40LLQvdCw0Y86ICdib3JkZXIgYm9yZGVyLXNreS01MDAvMzAgYmctc2t5LTUwMC8xMCB0ZXh0LXNreS0xMDAnLFxyXG4gINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QsDogJ2JvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCcsXHJcbiAg0JfQsNCy0LXRgNGI0LXQvdCwOiAnYm9yZGVyIGJvcmRlci1pbmRpZ28tNTAwLzMwIGJnLWluZGlnby01MDAvMTAgdGV4dC1pbmRpZ28tMTAwJyxcclxuICDQntGC0LzQtdC90LXQvdCwOiAnYm9yZGVyIGJvcmRlci1yb3NlLTUwMC8zMCBiZy1yb3NlLTUwMC8xMCB0ZXh0LXJvc2UtMTAwJyxcclxuICAn0J3QtSDQv9GA0LjRiNGR0LsnOiAnYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgYmctYW1iZXItNTAwLzEwIHRleHQtYW1iZXItMTAwJyxcclxufTtcclxuY29uc3QgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICBTVEFUVVNfQkFER0VfTUFQW25vcm1hbGl6ZWRdIHx8ICdib3JkZXIgYm9yZGVyLXNsYXRlLTYwMC82MCBiZy1zbGF0ZS04MDAvNzAgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IElOQUNUSVZFX1NUQVRVU19UT0tFTlMgPSBbJ9Cy0YvQv9C+0LvQvScsICfQt9Cw0LLQtdGA0YgnLCAnZG9uZScsICdjYW5jZWwnLCAn0L7RgtC80LXQvScsICfQvdC1INC/0YDQuNGIJywgJ25vc2hvdycsICduby1zaG93JywgJ21pc3NlZCcsICfQv9GA0L7RgdGAJywgJ2V4cGlyZWQnXTtcclxuY29uc3QgQUNUSVZFX1NUQVRVU19UT0tFTlMgPSBbJ9Cw0LrRgtC40LInLCAnYWN0aXZlJywgJ9C/0L7QtNGC0LLQtdGA0LYnLCAnY29uZmlybScsICfQvtC20LjQtCcsICdwZW5kaW5nJywgJ3dhaXQnLCAn0LbQtNC10LwnLCAn0LbQtNGR0LwnLCAn0L3QvtCyJywgJ25ldyddO1xyXG5jb25zdCBDT01QTEVURURfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NvbXBsZXRlJywgJ9Cz0L7RgtC+0LInXTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVUZXh0KHN0YXR1cykudHJpbSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IHRyYW5zbGF0ZWQgPSBTVEFUVVNfVFJBTlNMQVRJT05TW25vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKV07XHJcbiAgaWYgKHRyYW5zbGF0ZWQpIHJldHVybiB0cmFuc2xhdGVkO1xyXG4gIHJldHVybiBub3JtYWxpemVkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbm9ybWFsaXplZC5zbGljZSgxKTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVN0YXR1c0xpc3QgPSAoc3RhdHVzZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XHJcbiAgcmV0dXJuIHN0YXR1c2VzXHJcbiAgICAubWFwKChzdGF0dXMpID0+IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykpXHJcbiAgICAuZmlsdGVyKChzdGF0dXMpID0+IHtcclxuICAgICAgaWYgKCFzdGF0dXMgfHwgc2Vlbi5oYXMoc3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBzZWVuLmFkZChzdGF0dXMpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaXNDb21wbGV0ZWRBcHBvaW50bWVudFN0YXR1cyA9IChzdGF0dXMpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiBDT01QTEVURURfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpO1xyXG59O1xyXG5cclxuY29uc3Qgc2FuaXRpemVUaW1lVG9rZW4gPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBtYXRjaCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLm1hdGNoKC8oXFxkezEsMn0pOihcXGR7Mn0pLyk7XHJcbiAgaWYgKCFtYXRjaCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGhvdXJzID0gbWF0Y2hbMV0ucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBtaW51dGVzID0gbWF0Y2hbMl07XHJcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlVGltZVJhbmdlVmFsdWUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvW+KAlOKAk10vZywgJy0nKTtcclxuICBpZiAoIXNhZmUpIHJldHVybiB7IHN0YXJ0OiAnJywgZW5kOiAnJyB9O1xyXG4gIGNvbnN0IFtyYXdTdGFydCwgcmF3RW5kID0gJyddID0gc2FmZS5zcGxpdCgnLScpLm1hcCgocGFydCkgPT4gcGFydC50cmltKCkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGFydDogc2FuaXRpemVUaW1lVG9rZW4ocmF3U3RhcnQpLFxyXG4gICAgZW5kOiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdFbmQpLFxyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnNlVGltZVJhbmdlUGFydHMgPSAodmFsdWUpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpO1xyXG5cclxuY29uc3QgYnVpbGRUaW1lUmFuZ2VWYWx1ZSA9IChzdGFydCwgZW5kKSA9PiB7XHJcbiAgY29uc3Qgc2FmZVN0YXJ0ID0gc2FuaXRpemVUaW1lVG9rZW4oc3RhcnQpO1xyXG4gIGNvbnN0IHNhZmVFbmQgPSBzYW5pdGl6ZVRpbWVUb2tlbihlbmQpO1xyXG4gIGlmIChzYWZlU3RhcnQgJiYgc2FmZUVuZCkge1xyXG4gICAgY29uc3QgW2Zyb20sIHRvXSA9IHNhZmVTdGFydCA8PSBzYWZlRW5kID8gW3NhZmVTdGFydCwgc2FmZUVuZF0gOiBbc2FmZUVuZCwgc2FmZVN0YXJ0XTtcclxuICAgIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcclxuICB9XHJcbiAgcmV0dXJuIHNhZmVTdGFydCB8fCAnJztcclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3RUaW1lU3RhcnQgPSAodmFsdWUpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpLnN0YXJ0O1xyXG5cclxuY29uc3QgZ2V0QXBwb2ludG1lbnRTdGFydERhdGUgPSAoZGF0ZVZhbHVlLCB0aW1lVmFsdWUsIGZhbGxiYWNrSXNvKSA9PiB7XHJcbiAgaWYgKGZhbGxiYWNrSXNvKSB7XHJcbiAgICBjb25zdCBwYXJzZWRGYWxsYmFjayA9IG5ldyBEYXRlKGZhbGxiYWNrSXNvKTtcclxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZEZhbGxiYWNrLmdldFRpbWUoKSkpIHJldHVybiBwYXJzZWRGYWxsYmFjaztcclxuICB9XHJcbiAgY29uc3QgZGF0ZVBhcnQgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSkuc2xpY2UoMCwgMTApO1xyXG4gIGlmICghZGF0ZVBhcnQpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHRpbWVQYXJ0ID0gZXh0cmFjdFRpbWVTdGFydCh0aW1lVmFsdWUpIHx8ICcwMDowMCc7XHJcbiAgY29uc3QgaXNvQ2FuZGlkYXRlID0gYCR7ZGF0ZVBhcnR9VCR7dGltZVBhcnR9OjAwYDtcclxuICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShpc29DYW5kaWRhdGUpO1xyXG4gIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXBwb2ludG1lbnRFbmREYXRlID0gKGRhdGVWYWx1ZSwgdGltZVZhbHVlLCBmYWxsYmFja0lzbykgPT4ge1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGRhdGVWYWx1ZSwgdGltZVZhbHVlLCBmYWxsYmFja0lzbyk7XHJcbiAgaWYgKCFzdGFydERhdGUpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyh0aW1lVmFsdWUpO1xyXG4gIGNvbnN0IGVuZFRva2VuID0gZW5kIHx8IHN0YXJ0O1xyXG4gIGlmICghZW5kVG9rZW4pIHJldHVybiBzdGFydERhdGU7XHJcbiAgY29uc3QgYmFzZURhdGVQYXJ0ID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpLnNsaWNlKDAsIDEwKSB8fCBzdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKCFiYXNlRGF0ZVBhcnQpIHJldHVybiBzdGFydERhdGU7XHJcbiAgY29uc3QgaXNvQ2FuZGlkYXRlID0gYCR7YmFzZURhdGVQYXJ0fVQke2VuZFRva2VufTowMGA7XHJcbiAgbGV0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XHJcbiAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuIHN0YXJ0RGF0ZTtcclxuICBpZiAoZW5kICYmIHN0YXJ0ICYmIGVuZCA8PSBzdGFydCkge1xyXG4gICAgcGFyc2VkID0gbmV3IERhdGUocGFyc2VkLmdldFRpbWUoKSArIERBWV9JTl9NUyk7XHJcbiAgfVxyXG4gIGlmIChwYXJzZWQuZ2V0VGltZSgpIDwgc3RhcnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgcmV0dXJuIHN0YXJ0RGF0ZTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZDtcclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZSA9IChhcHBvaW50bWVudCA9IHt9KSA9PiB7XHJcbiAgaWYgKGlzVmFsaWREYXRlKGFwcG9pbnRtZW50LnN0YXJ0RGF0ZSkpIHJldHVybiBhcHBvaW50bWVudC5zdGFydERhdGU7XHJcbiAgcmV0dXJuIGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZUFwcG9pbnRtZW50RW5kRGF0ZSA9IChhcHBvaW50bWVudCA9IHt9KSA9PiB7XHJcbiAgaWYgKGlzVmFsaWREYXRlKGFwcG9pbnRtZW50LmVuZERhdGUpKSByZXR1cm4gYXBwb2ludG1lbnQuZW5kRGF0ZTtcclxuICBjb25zdCBlbmREYXRlID0gZ2V0QXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gIGlmIChlbmREYXRlKSByZXR1cm4gZW5kRGF0ZTtcclxuICByZXR1cm4gcmVzb2x2ZUFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiBmYWxzZTtcclxuICBpZiAoSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKEFDVElWRV9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSkpIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50ID0gKGFwcG9pbnRtZW50LCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBpZiAoIWlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMobm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwb2ludG1lbnQuU3RhdHVzKSkpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCBzdGFydERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQpO1xyXG4gIGNvbnN0IGVuZERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50KTtcclxuICBpZiAoIXN0YXJ0RGF0ZSB8fCAhZW5kRGF0ZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiBlbmREYXRlLmdldFRpbWUoKSA+PSBub3dUcztcclxufTtcclxuXHJcbmNvbnN0IGlzQXBwb2ludG1lbnRPbmdvaW5nID0gKGFwcG9pbnRtZW50LCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBpZiAoIWlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMobm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwb2ludG1lbnQuU3RhdHVzKSkpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCBzdGFydERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQpO1xyXG4gIGNvbnN0IGVuZERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50KTtcclxuICBpZiAoIXN0YXJ0RGF0ZSB8fCAhZW5kRGF0ZSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHN0YXJ0VHMgPSBzdGFydERhdGUuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IGVuZFRzID0gZW5kRGF0ZS5nZXRUaW1lKCk7XHJcbiAgcmV0dXJuIHN0YXJ0VHMgPD0gbm93VHMgJiYgZW5kVHMgPiBub3dUcztcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlTXVsdGlWYWx1ZSA9ICh2YWx1ZSkgPT5cclxuICBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbmNvbnN0IExvYWRpbmdTdGF0ZSA9ICh7IGxhYmVsID0gJ9CX0LDQs9GA0YPQttCw0Y4g0LTQsNC90L3Ri9C1Li4uJyB9ID0ge30pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEyIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlXCI+e2xhYmVsfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEVycm9yQmFubmVyID0gKHsgbWVzc2FnZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXJvc2UtNjAwIHB4LTQgcHktMyB0ZXh0LXdoaXRlXCI+e21lc3NhZ2V9PC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBWaXNpdEhpc3RvcnlMaXN0ID0gKHtcclxuICB2aXNpdHMgPSBbXSxcclxuICBsb2FkaW5nID0gZmFsc2UsXHJcbiAgZXJyb3IgPSAnJyxcclxuICBlbXB0eU1lc3NhZ2UgPSAn0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LIg0L/Rg9GB0YLQsC4nLFxyXG4gIG1heEhlaWdodENsYXNzID0gJ21heC1oLTY0JyxcclxuICBzaG93U3VtbWFyeSA9IHRydWUsXHJcbn0pID0+IHtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7Ql9Cw0LPRgNGD0LbQsNC10Lwg0LjRgdGC0L7RgNC40Y4uLi48L3A+O1xyXG4gIH1cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17ZXJyb3J9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAge3Nob3dTdW1tYXJ5ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAg0JfQsNC/0LjRgdC10Lkg0LfQsCAxMiDQvNC10YHRj9GG0LXQsjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Zpc2l0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+0J/QvtGB0LvQtdC00L3QuNC1INCy0LjQt9C40YLRizwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NwYWNlLXktMiBvdmVyZmxvdy1hdXRvJywgbWF4SGVpZ2h0Q2xhc3MpfT5cclxuICAgICAgICB7dmlzaXRzLmxlbmd0aCA/IChcclxuICAgICAgICAgIHZpc2l0cy5tYXAoKHZpc2l0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyh2aXNpdC5TdGF0dXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17YCR7dmlzaXQuaWQgfHwgdmlzaXQuZGF0ZUxhYmVsfS0ke3Zpc2l0Lm9yZGVyTnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBwLTMgdGV4dC14cyB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYm9yZGVyLWVtZXJhbGQtNDAwLzYwIGJnLWVtZXJhbGQtNTAwLzEwIHNoYWRvdy1pbm5lciBzaGFkb3ctZW1lcmFsZC05MDAvMzAnIDogJ2JvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj7QktC40LfQuNGCIOKElnt2aXNpdC5vcmRlck51bWJlciB8fCAn4oCUJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt2aXNpdC5kYXRlTGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1zbGF0ZS0xMDBcIj57dmlzaXQuQmFyYmVyIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+e3Zpc2l0LlNlcnZpY2VzIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgIHt2aXNpdC5TdGF0dXMgJiYgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1zbGF0ZS01MDBcIj57dmlzaXQuU3RhdHVzfTwvcD59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e2VtcHR5TWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2VjdGlvbkNhcmQgPSAoeyB0aXRsZSwgYWN0aW9ucywgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTgwMC83MCBwLTYgc2hhZG93LWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAge2FjdGlvbnN9XHJcbiAgICA8L2Rpdj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTGl2ZUJhZGdlID0gKHsgdGltZXN0YW1wLCBzdGF0dXMgPSAndW5rbm93bicgfSkgPT4ge1xyXG4gIGNvbnN0IHRpY2tpbmdOb3cgPSB1c2VOb3dUaWNrKDEwMDApO1xyXG4gIGlmIChzdGF0dXMgPT09ICd1bmtub3duJyAmJiAhdGltZXN0YW1wKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBpc09mZmxpbmUgPSBzdGF0dXMgPT09ICdvZmZsaW5lJztcclxuICBjb25zdCBpc09ubGluZSA9IHN0YXR1cyA9PT0gJ29ubGluZSc7XHJcbiAgY29uc3QgbGFiZWwgPSBpc09mZmxpbmUgPyAnT0ZGTElORScgOiAnTElWRSc7XHJcbiAgY29uc3QgdGltZUxhYmVsID0gaXNPbmxpbmUgJiYgdGltZXN0YW1wID8gZm9ybWF0TGl2ZVRpbWVzdGFtcCh0aW1lc3RhbXAsIHRpY2tpbmdOb3cpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dJyxcclxuICAgICAgICBpc09mZmxpbmUgPyAnYm9yZGVyLXJvc2UtNTAwLzUwIGJnLXJvc2UtNTAwLzEwIHRleHQtcm9zZS0yMDAnIDogJ2JvcmRlci1lbWVyYWxkLTQwMC80MCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMjAwJ1xyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICdoLTIgdy0yIHJvdW5kZWQtZnVsbCcsXHJcbiAgICAgICAgICBpc09mZmxpbmUgPyAnYmctcm9zZS00MDAnIDogJ2FuaW1hdGUtcHVsc2UgYmctZW1lcmFsZC00MDAnXHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAge2xhYmVsfVxyXG4gICAgICB7dGltZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhpc09mZmxpbmUgPyAndGV4dC1yb3NlLTEwMC84MCcgOiAndGV4dC1lbWVyYWxkLTEwMC84MCcsICdub3JtYWwtY2FzZSB0cmFja2luZy1ub3JtYWwnKX0+e3RpbWVMYWJlbH08L3NwYW4+fVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJY29uVHJhc2ggPSAoeyBjbGFzc05hbWUgPSAnaC00IHctNCcgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCIgLz5cclxuICAgIDxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIiAvPlxyXG4gICAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uRGFzaGJvYXJkID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoIGQ9XCJNMy41IDExIDEyIDRsOC41IDdcIiAvPlxyXG4gICAgPHBhdGggZD1cIk02IDEwdjEwaDV2LTVoMnY1aDVWMTBcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvbkRhdGEgPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHJlY3QgeD1cIjMuNVwiIHk9XCI1XCIgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE0XCIgcng9XCIyLjVcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0zLjUgOWgxN00zLjUgMTNoMTdNOCA1djE0TTEzIDV2MTRcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvbkJvdCA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aCBkPVwiTTEyIDJ2M1wiIC8+XHJcbiAgICA8cmVjdCB4PVwiNVwiIHk9XCI3XCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjExXCIgcng9XCI0XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNNSAxMkgzbTE4IDBoLTJNOSAxOXYybTYtMnYyXCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTJcIiByPVwiMS4yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIiAvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0XCIgY3k9XCIxMlwiIHI9XCIxLjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTkuNSAxNWg1XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25TeXN0ZW0gPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIzXCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMTIgMi41djNNMTIgMTguNXYzTTQuMiA3LjVsMi42IDEuNU0xNy4yIDE1bDIuNiAxLjVNNC4yIDE2LjVsMi42LTEuNU0xNy4yIDlsMi42LTEuNU0yLjUgMTJoM00xOC41IDEyaDNcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvbkRvdHMgPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPGNpcmNsZSBjeD1cIjVcIiBjeT1cIjEyXCIgcj1cIjEuNVwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEuNVwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjEuNVwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBWSUVXX1RBQl9JQ09OUyA9IHtcclxuICBkYXNoYm9hcmQ6IEljb25EYXNoYm9hcmQsXHJcbiAgdGFibGVzOiBJY29uRGF0YSxcclxuICBib3Q6IEljb25Cb3QsXHJcbiAgc3lzdGVtOiBJY29uU3lzdGVtLFxyXG59O1xyXG5cclxuY29uc3QgVUlfVEVYVCA9IE9iamVjdC5mcmVlemUoe1xyXG4gIGFjY291bnRUaXRsZTogJ9CS0LDRiCDQsNC60LrQsNGD0L3RgicsXHJcbiAgbG9nb3V0OiAn0JLRi9C50YLQuCcsXHJcbiAgbmV3QXBwb2ludG1lbnRDdGE6ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcsXHJcbiAgbGl2ZUZhbGxiYWNrOiAnTElWRScsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IE1vZGFsID0gKHsgdGl0bGUsIGlzT3Blbiwgb25DbG9zZSwgY2hpbGRyZW4sIGZvb3RlciwgbWF4V2lkdGhDbGFzcyA9ICdtYXgtdy0zeGwnIH0pID0+IHtcclxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzYwIHB4LTQgcHktNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC1oLVs5MHZoXSB3LWZ1bGwgJHttYXhXaWR0aENsYXNzfSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHNoYWRvdy0yeGxgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj54PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bNzB2aF0gb3ZlcmZsb3cteS1hdXRvIHB4LTYgcHktNCBzcGFjZS15LTRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAge2Zvb3RlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBweC02IHB5LTRcIj57Zm9vdGVyfTwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29uZmlybURpYWxvZyA9ICh7IG9wZW4sIHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwgPSAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsIGNhbmNlbExhYmVsID0gJ9Ce0YLQvNC10L3QsCcsIHRvbmUgPSAnbmV1dHJhbCcsIG9uUmVzdWx0IH0pID0+IHtcclxuICBpZiAoIW9wZW4pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGNvbmZpcm1Ub25lQ2xhc3MgPSAoKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0b25lKSB7XHJcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XHJcbiAgICAgICAgcmV0dXJuICdiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTUwMCc7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHJldHVybiAnYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC01MDAnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNTAwJztcclxuICAgIH1cclxuICB9KSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICB0aXRsZT17dGl0bGUgfHwgJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0LUg0LTQtdC50YHRgtCy0LjQtSd9XHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IG9uUmVzdWx0KGZhbHNlKX1cclxuICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LW1kXCJcclxuICAgICAgZm9vdGVyPXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN1bHQoZmFsc2UpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgIHtjYW5jZWxMYWJlbH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlc3VsdCh0cnVlKX0gY2xhc3NOYW1lPXtgcm91bmRlZC1sZyBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgJHtjb25maXJtVG9uZUNsYXNzfWB9PlxyXG4gICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPnttZXNzYWdlIHx8ICfQktGLINGD0LLQtdGA0LXQvdGLLCDRh9GC0L4g0YXQvtGC0LjRgtC1INC/0YDQvtC00L7Qu9C20LjRgtGMPyd9PC9wPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdENhcmQgPSAoeyBsYWJlbCwgdmFsdWUsIGFjY2VudCA9ICd0ZXh0LWluZGlnby0zMDAnIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtMyBzbTpwLTRcIj5cclxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj57bGFiZWx9PC9wPlxyXG4gICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdC0xIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc206bXQtMiBzbTp0ZXh0LTN4bCcsIGFjY2VudCl9Pnt2YWx1ZX08L3A+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHtcclxuICBzZXNzaW9uLFxyXG4gIGFjdGl2ZVRhYixcclxuICBvbkNoYW5nZSxcclxuICBvbkxvZ291dCxcclxuICBsaXZlVXBkYXRlZEF0LFxyXG4gIGxpdmVTdGF0dXMgPSAndW5rbm93bicsXHJcbiAgYWN0aXZlRGF0YVRhYmxlID0gJ0FwcG9pbnRtZW50cycsXHJcbiAgb25TZWxlY3RUYWJsZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvbj8uZGlzcGxheU5hbWUgfHwgc2Vzc2lvbj8udXNlcm5hbWUgfHwgJy0nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImhpZGRlbiB3LTcyIGZsZXgtc2hyaW5rLTAgZmxleC1jb2wgYm9yZGVyLXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvOTAgcC01IGxnOnN0aWNreSBsZzp0b3AtMCBsZzpmbGV4IGxnOmgtc2NyZWVuIGxnOm92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNTAwXCI+e1VJX1RFWFQuYWNjb3VudFRpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0xMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1VJX1RFWFQubG9nb3V0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsobGl2ZVVwZGF0ZWRBdCB8fCBsaXZlU3RhdHVzICE9PSAndW5rbm93bicpICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICA8TGl2ZUJhZGdlIHRpbWVzdGFtcD17bGl2ZVVwZGF0ZWRBdH0gc3RhdHVzPXtsaXZlU3RhdHVzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4LTEgc3BhY2UteS0yIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgIHtWSUVXX1RBQlMubWFwKCh0YWIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlVGFiID09PSB0YWIuaWQ7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dGFiLmlkfSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZT8uKHRhYi5pZCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICd3LWZ1bGwgcm91bmRlZC14bCBweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tNjAwLzkwIHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1pbmRpZ28tOTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLXNsYXRlLTkwMC80MCB0ZXh0LXNsYXRlLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDAvNjAgaG92ZXI6dGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RhYi5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB7dGFiLmlkID09PSAndGFibGVzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBwbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtEQVRBX1NIT1JUQ1VUUy5tYXAoKHNob3J0Y3V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTaG9ydGN1dEFjdGl2ZSA9IGFjdGl2ZURhdGFUYWJsZSA9PT0gc2hvcnRjdXQuaWQgJiYgYWN0aXZlVGFiID09PSAndGFibGVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Nob3J0Y3V0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFRhYmxlPy4oc2hvcnRjdXQuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ctZnVsbCByb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvcnRjdXRBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAvMjAgdGV4dC1pbmRpZ28tMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwLzYwIGhvdmVyOnRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshb25TZWxlY3RUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3J0Y3V0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTW9iaWxlVGFicyA9ICh7IHNlc3Npb24sIGFjdGl2ZVRhYiwgb25DaGFuZ2UsIG9uTG9nb3V0LCBsaXZlVXBkYXRlZEF0LCBsaXZlU3RhdHVzID0gJ3Vua25vd24nIH0pID0+IHtcclxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICctJztcclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodGFiSWQpID0+IG9uQ2hhbmdlPy4odGFiSWQpO1xyXG4gIGNvbnN0IHJlbmRlckxpdmVJbmRpY2F0b3IgPSAoKSA9PlxyXG4gICAgbGl2ZVN0YXR1cyA9PT0gJ3Vua25vd24nICYmICFsaXZlVXBkYXRlZEF0ID8gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zNWVtXSB0ZXh0LXNsYXRlLTUwMFwiPntVSV9URVhULmxpdmVGYWxsYmFja308L3NwYW4+XHJcbiAgICApIDogKFxyXG4gICAgICA8TGl2ZUJhZGdlIHRpbWVzdGFtcD17bGl2ZVVwZGF0ZWRBdH0gc3RhdHVzPXtsaXZlU3RhdHVzfSAvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMzAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgYmFja2Ryb3AtYmx1ciBsZzpoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyBweC00IHB5LTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4tdy1bODhweF0ganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICB7cmVuZGVyTGl2ZUluZGljYXRvcigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbWF4LXctWzYwdnddIHRydW5jYXRlXCI+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi13LVs5NnB4XSBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtcm9zZS0yMDAgaG92ZXI6Ym9yZGVyLXJvc2UtNDAwIGhvdmVyOnRleHQtd2hpdGUgd2hpdGVzcGFjZS1ub3dyYXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1VJX1RFWFQubG9nb3V0fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC14LTAgYm90dG9tLTAgei0zMCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC85NSBweC00IHB5LTMgYmFja2Ryb3AtYmx1ciBsZzpoaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIHtWSUVXX1RBQlMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBWSUVXX1RBQl9JQ09OU1t0YWIuaWRdIHx8IEljb25Eb3RzO1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QodGFiLmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAnZmxleC0xIHJvdW5kZWQtM3hsIHB4LTMgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdiZy1pbmRpZ28tNjAwLzIwIHRleHQtaW5kaWdvLTIwMCcgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RhYi5sYWJlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXgtYXV0byBoLTcgdy03JywgaXNBY3RpdmUgPyAndGV4dC1pbmRpZ28tMzAwJyA6ICd0ZXh0LXNsYXRlLTQwMCcpfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57dGFiLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoeyBkYXRhLCBvbk9wZW5BcHBvaW50bWVudCwgb25PcGVuUHJvZmlsZSwgb25DcmVhdGVBcHBvaW50bWVudCB9KSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICBjb25zdCBzdGF0cyA9IGRhdGEuc3RhdHMgfHwge307XHJcblxyXG4gIGNvbnN0IHVwY29taW5nUmF3ID0gZGF0YS5hcHBvaW50bWVudHM/LnVwY29taW5nIHx8IFtdO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0xpc3QgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG5vd1RzID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiB1cGNvbWluZ1Jhd1xyXG4gICAgICAubWFwKChhcHB0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYXBwdC5EYXRlLCBhcHB0LlRpbWUsIGFwcHQuc3RhcnREYXRlVGltZSk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGdldEFwcG9pbnRtZW50RW5kRGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uYXBwdCxcclxuICAgICAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpLFxyXG4gICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChhcHB0KSA9PiBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQoYXBwdCwgbm93VHMpKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICB9KVxyXG4gICAgICAuc2xpY2UoMCwgMTIpO1xyXG4gIH0sIFt1cGNvbWluZ1Jhd10pO1xyXG5cclxuICBjb25zdCBmb3JtYXRHcm91cExhYmVsID0gdXNlQ2FsbGJhY2soKGRhdGVWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlVmFsdWUgfHwgZGF0ZVZhbHVlID09PSAn0JHQtdC3INC00LDRgtGLJykgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7ZGF0ZVZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gZGF0ZVZhbHVlO1xyXG4gICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBncm91cGVkVXBjb21pbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIHVwY29taW5nTGlzdC5mb3JFYWNoKChhcHB0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGFwcHQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgICAgY29uc3QgYnVja2V0ID0gZ3JvdXBzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBidWNrZXQucHVzaChhcHB0KTtcclxuICAgICAgZ3JvdXBzLnNldChrZXksIGJ1Y2tldCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3Vwcy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4gKHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgbGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwoa2V5KSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWU6IE1hdGgubWluKFxyXG4gICAgICAgICAgLi4uaXRlbXMubWFwKChpdGVtKSA9PiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShpdGVtLkRhdGUsIGl0ZW0uVGltZSwgaXRlbS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW2Zvcm1hdEdyb3VwTGFiZWwsIHVwY29taW5nTGlzdF0pO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0FjdGlvbnMgPSBvbkNyZWF0ZUFwcG9pbnRtZW50ID8gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZUFwcG9pbnRtZW50fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgKyB7VUlfVEVYVC5uZXdBcHBvaW50bWVudEN0YX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQu9GO0YfQtdCy0YvQtSDQv9C+0LrQsNC30LDRgtC10LvQuFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBzdGF0LWdyaWRcIj5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCS0YHQtdCz0L4g0LrQu9C40LXQvdGC0L7QslwiIHZhbHVlPXtzdGF0cy50b3RhbFVzZXJzID8/IDB9IC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQkNC60YLQuNCy0L3Ri9C1INC30LDQv9C40YHQuFwiIHZhbHVlPXtzdGF0cy5hY3RpdmVBcHBvaW50bWVudHMgPz8gMH0gYWNjZW50PVwidGV4dC1lbWVyYWxkLTMwMFwiIC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4g0LfQsCDQs9C+0LRcIiB2YWx1ZT17c3RhdHMuY29uZmlybWVkWWVhciA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCh0LXQs9C+0LTQvdGPXCIgdmFsdWU9e3N0YXRzLnRvZGF5c0FwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWN5YW4tMzAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCR0LvQuNC20LDQudGI0LjQtSDQt9Cw0L/QuNGB0LhcIiBhY3Rpb25zPXt1cGNvbWluZ0FjdGlvbnN9PlxyXG4gICAgICAgIHtncm91cGVkVXBjb21pbmcubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LHQu9C40LbQsNC50YjQuNGFINC30LDQv9C40YHQtdC5LjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAge2dyb3VwZWRVcGNvbWluZy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKChhcHB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5Qcm9ncmVzcyA9IGlzQXBwb2ludG1lbnRPbmdvaW5nKGFwcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBvbk9wZW5BcHBvaW50bWVudD8uKGFwcHQsIHsgYWxsb3dEZWxldGU6IHRydWUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd246IChldmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInICYmIG9uT3BlbkFwcG9pbnRtZW50Py4oYXBwdCwgeyBhbGxvd0RlbGV0ZTogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHVwY29taW5nLWNhcmQgcmVsYXRpdmUgdy1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC82MCBiZy1zbGF0ZS05MDAvNzAgcC00IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTpwLTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzICYmICdib3JkZXItZW1lcmFsZC00MDAvODAgc2hhZG93LVswXzBfMjVweF9yZ2JhKDE2LDE4NSwxMjksMC4yNSldJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyhhcHB0LlRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzTGlzdCA9IHBhcnNlTXVsdGlWYWx1ZShhcHB0LlNlcnZpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FwcHQuaWQgfHwgYCR7Z3JvdXAua2V5fS0ke2FwcHQuQ3VzdG9tZXJOYW1lfS0ke2FwcHQuVGltZX1gfSB7Li4uY2FyZFByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGVCYWRnZUxhYmVsKGFwcHQuRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIHNtOnRleHQtNHhsXCI+e3N0YXJ0IHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VuZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtYmFzZVwiPtC00L4ge2VuZH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBnYXAtMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgc206dGV4dC14cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzKHN0YXR1c0xhYmVsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0xhYmVsIHx8ICfQkdC10Lcg0YHRgtCw0YLRg9GB0LAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQmFyYmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JHQsNGA0LHQtdGAOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2FwcHQuQmFyYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgdGV4dC1bMTNweF0gdGV4dC1zbGF0ZS0zMDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkN1c3RvbWVyTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPy4oYXBwdC5DdXN0b21lck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1pbmRpZ28tMzAwIHNtOnRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQ3VzdG9tZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc206dGV4dC1sZ1wiPtCR0LXQtyDQuNC80LXQvdC4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VydmljZX0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTgwMC83MCBweC0zIHB5LTEgdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS0yMDAgc206dGV4dC14c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj7QndC10YIg0LLRi9Cx0YDQsNC90L3Ri9GFINGD0YHQu9GD0LM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhcmJlckF2YXRhclBpY2tlciA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgbG9hZE9wdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFthdmF0YXJPcHRpb25zLCBzZXRBdmF0YXJPcHRpb25zXSA9IHVzZVN0YXRlKCgpID0+IGF2YXRhck9wdGlvbnNDYWNoZSB8fCBbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93R2FsbGVyeSwgc2V0U2hvd0dhbGxlcnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBub3JtYWxpemVJbWFnZVBhdGgodmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2Ygb25DaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVJbWFnZVBhdGgodmFsdWUpO1xyXG4gICAgaWYgKG5vcm1hbGl6ZWQgJiYgbm9ybWFsaXplZCAhPT0gdmFsdWUpIHtcclxuICAgICAgb25DaGFuZ2Uobm9ybWFsaXplZCk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlLCBvbkNoYW5nZV0pO1xyXG5cclxuICBjb25zdCBhdmFpbGFibGVPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRWYWx1ZSB8fCBhdmF0YXJPcHRpb25zLmluY2x1ZGVzKG5vcm1hbGl6ZWRWYWx1ZSkpIHJldHVybiBhdmF0YXJPcHRpb25zO1xyXG4gICAgcmV0dXJuIFtub3JtYWxpemVkVmFsdWUsIC4uLmF2YXRhck9wdGlvbnNdO1xyXG4gIH0sIFthdmF0YXJPcHRpb25zLCBub3JtYWxpemVkVmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSB0eXBlb2YgbG9hZE9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBsb2FkT3B0aW9ucyA6IGZldGNoQXZhdGFyT3B0aW9ucztcclxuICAgICAgICBjb25zdCBhc3NldHNQYXlsb2FkID0gYXdhaXQgbG9hZGVyKCk7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBhc3NldHMgPSBBcnJheS5pc0FycmF5KGFzc2V0c1BheWxvYWQpXHJcbiAgICAgICAgICA/IGFzc2V0c1BheWxvYWRcclxuICAgICAgICAgIDogQXJyYXkuaXNBcnJheShhc3NldHNQYXlsb2FkPy5pbWFnZXMpXHJcbiAgICAgICAgICAgID8gYXNzZXRzUGF5bG9hZC5pbWFnZXNcclxuICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICBhdmF0YXJPcHRpb25zQ2FjaGUgPSBhc3NldHM7XHJcbiAgICAgICAgc2V0QXZhdGFyT3B0aW9ucyhhc3NldHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F2YXRhciBsb2FkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbG9hZCgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtsb2FkT3B0aW9uc10pO1xyXG5cclxuICBjb25zdCBwcmV2aWV3U3JjID0gcmVzb2x2ZUFzc2V0VXJsKG5vcm1hbGl6ZWRWYWx1ZSB8fCBhdmF0YXJPcHRpb25zWzBdIHx8ICcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC01MiB3LWZ1bGwgYmctc2xhdGUtOTAwXCI+XHJcbiAgICAgICAge3ByZXZpZXdTcmMgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJldmlld1NyY30gYWx0PVwiYXZhdGFyIHByZXZpZXdcIiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuNGVtXSB0ZXh0LXNsYXRlLTUwMFwiPtC90LXRgiDRhNC+0YLQvjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS05NTAvODAgdmlhLXNsYXRlLTk1MC8xMCB0by10cmFuc3BhcmVudFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPtCi0LXQutGD0YnQtdC1INGE0L7RgtC+PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRWYWx1ZSA/IG5vcm1hbGl6ZWRWYWx1ZS5yZXBsYWNlKCcvSW1hZ2UvJywgJycpIDogJ9Cd0LUg0LLRi9Cx0YDQsNC90L4nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0dhbGxlcnkoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0yMDAgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpib3JkZXItc2xhdGUtODAwIGRpc2FibGVkOnRleHQtc2xhdGUtNTAwXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgKCFhdmF0YXJPcHRpb25zLmxlbmd0aCAmJiAhbm9ybWFsaXplZFZhbHVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAn0KHQutCw0L3QuNGA0YPRji4uLicgOiBzaG93R2FsbGVyeSA/ICfQodC60YDRi9GC0Ywg0LPQsNC70LXRgNC10Y4nIDogJ9Ce0YLQutGA0YvRgtGMINCz0LDQu9C10YDQtdGOJ31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoJycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLXJvc2UtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQkdC10Lcg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dHYWxsZXJ5ICYmIGF2YXRhck9wdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAge2F2YXRhck9wdGlvbnMubWFwKChwcmVzZXQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gcHJlc2V0ID09PSBub3JtYWxpemVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShwcmVzZXQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtMnhsIGJvcmRlciBwLTEuNSB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOmJnLXNsYXRlLTgwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzE1JyA6ICdib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc29sdmVBc3NldFVybChwcmVzZXQpfSBhbHQ9XCJhdmF0YXIgcHJlc2V0XCIgY2xhc3NOYW1lPVwiaC0yMCB3LWZ1bGwgcm91bmRlZC14bCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshYXZhdGFyT3B0aW9ucy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7QsdCw0LLRjNGC0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9Cw0L/QutGDIC9JbWFnZSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDQsNCy0LDRgtCw0YAuPC9wPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgREFZX0lOREVYX0xPT0tVUCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZnVsbCA9IFsn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNCwJywgJ9GH0LXRgtCy0LXRgNCzJywgJ9C/0Y/RgtC90LjRhtCwJywgJ9GB0YPQsdCx0L7RgtCwJywgJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnXTtcclxuICBjb25zdCBzaG9ydCA9IFsn0L/QvScsICfQstGCJywgJ9GB0YAnLCAn0YfRgicsICfQv9GCJywgJ9GB0LEnLCAn0LLRgSddO1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGZ1bGwuZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcclxuICAgIG1hcFtuYW1lXSA9IGluZGV4O1xyXG4gIH0pO1xyXG4gIHNob3J0LmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICBtYXBbbmFtZV0gPSBpbmRleDtcclxuICB9KTtcclxuICByZXR1cm4gbWFwO1xyXG59KSgpO1xyXG5jb25zdCBnZXREYXlJbmRleCA9ICh2YWx1ZSA9ICcnKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShEQVlfSU5ERVhfTE9PS1VQW25vcm1hbGl6ZWRdKSA/IERBWV9JTkRFWF9MT09LVVBbbm9ybWFsaXplZF0gOiA3O1xyXG59O1xyXG5jb25zdCBmb3JtYXRTY2hlZHVsZURheVNob3J0ID0gKGRhdGVWYWx1ZSwgZmFsbGJhY2tEYXkgPSAnJykgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmIChzYWZlRGF0ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgd2Vla2RheTogJ3Nob3J0JyB9KS5mb3JtYXQocGFyc2VkKS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBub3JtYWxpemVkRmFsbGJhY2sgPSBub3JtYWxpemVUZXh0KGZhbGxiYWNrRGF5KTtcclxuICByZXR1cm4gbm9ybWFsaXplZEZhbGxiYWNrID8gbm9ybWFsaXplZEZhbGxiYWNrLnNsaWNlKDAsIDIpIDogJyc7XHJcbn07XHJcbmNvbnN0IGZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsID0gKGRhdGVWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmICghc2FmZURhdGUpIHJldHVybiAnJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyBkYXk6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcgfSkuZm9ybWF0KHBhcnNlZCkucmVwbGFjZSgnLicsICcnKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn07XHJcbmNvbnN0IGlzVG9kYXlEYXRlID0gKGRhdGVWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVEYXRlID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpO1xyXG4gIGlmICghc2FmZURhdGUpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoYCR7c2FmZURhdGV9VDAwOjAwOjAwYCk7XHJcbiAgaWYgKE51bWJlci5pc05hTih0YXJnZXQuZ2V0VGltZSgpKSkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiAoXHJcbiAgICB0b2RheS5nZXRGdWxsWWVhcigpID09PSB0YXJnZXQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgdG9kYXkuZ2V0TW9udGgoKSA9PT0gdGFyZ2V0LmdldE1vbnRoKCkgJiZcclxuICAgIHRvZGF5LmdldERhdGUoKSA9PT0gdGFyZ2V0LmdldERhdGUoKVxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHBhcnNlU2xvdFRpbWVNaW51dGVzID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2ggPSBub3JtYWxpemVUZXh0KHZhbHVlKS5tYXRjaCgvKFxcZHsxLDJ9KTooXFxkezJ9KS8pO1xyXG4gIGlmICghbWF0Y2gpIHJldHVybiAwO1xyXG4gIHJldHVybiBOdW1iZXIobWF0Y2hbMV0pICogNjAgKyBOdW1iZXIobWF0Y2hbMl0pO1xyXG59O1xyXG5jb25zdCBnZXRTY2hlZHVsZVNvcnRWYWx1ZSA9IChzbG90KSA9PiB7XHJcbiAgY29uc3Qgc2FmZURhdGUgPSBub3JtYWxpemVUZXh0KHNsb3QuRGF0ZSk7XHJcbiAgaWYgKHNhZmVEYXRlKSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtzYWZlRGF0ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZWQuZ2V0VGltZSgpICsgcGFyc2VTbG90VGltZU1pbnV0ZXMocGFyc2VUaW1lUmFuZ2VQYXJ0cyhzbG90LldlZWspLnN0YXJ0KSAqIDYwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBiYXNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxXzAwMF8wMDBfMDAwO1xyXG4gIGNvbnN0IGRheUluZGV4ID0gZ2V0RGF5SW5kZXgoc2xvdC5EYXlPZldlZWspO1xyXG4gIHJldHVybiBiYXNlICsgZGF5SW5kZXggKiAxMDAwMCArIHBhcnNlU2xvdFRpbWVNaW51dGVzKHBhcnNlVGltZVJhbmdlUGFydHMoc2xvdC5XZWVrKS5zdGFydCB8fCBzbG90LldlZWspICogMTA7XHJcbn07XHJcblxyXG5jb25zdCBSYXRpbmdTbGlkZXIgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRlbnNlID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJhdGluZ1ZhbHVlID0gTnVtYmVyKHZhbHVlIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgY29uc3Qgd3JhcHBlckNsYXNzID0gZGVuc2VcclxuICAgID8gJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTEuNSdcclxuICAgIDogJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTInO1xyXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBkZW5zZVxyXG4gICAgPyAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICA6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMCc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT5cclxuICAgICAgICA8c3Bhbj7QoNC10LnRgtC40L3Qszwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmF0aW5nVmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXtSQVRJTkdfTUlOfSBtYXg9e1JBVElOR19NQVh9IHN0ZXA9e1JBVElOR19TVEVQfSB2YWx1ZT17TnVtYmVyKHZhbHVlKSB8fCBSQVRJTkdfTUFYfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEJhcmJlcnNWaWV3ID0gKHtcclxuICBiYXJiZXJzID0gW10sXHJcbiAgc2NoZWR1bGVzID0gW10sXHJcbiAgbG9hZEF2YXRhck9wdGlvbnMsXHJcbiAgb25GaWVsZENoYW5nZSxcclxuICBvblNhdmUsXHJcbiAgb25BZGQsXHJcbiAgb25EZWxldGUsXHJcbiAgb25TY2hlZHVsZVVwZGF0ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuICBjb25zdCBbZHJhZnRCYXJiZXIsIHNldERyYWZ0QmFyYmVyXSA9IHVzZVN0YXRlKGJ1aWxkTmV3QmFyYmVyU3RhdGUpO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdG9yID0gKG1vZGUsIHRhcmdldElkID0gbnVsbCkgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKGJ1aWxkTmV3QmFyYmVyU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IHRydWUsIG1vZGUsIHRhcmdldElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdG9yID0gKCkgPT4gc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgaXNDcmVhdGVNb2RlID0gZWRpdG9yU3RhdGUubW9kZSA9PT0gJ2NyZWF0ZSc7XHJcbiAgY29uc3QgYWN0aXZlQmFyYmVyID0gYmFyYmVycy5maW5kKChiYXJiZXIpID0+IGJhcmJlci5pZCA9PT0gZWRpdG9yU3RhdGUudGFyZ2V0SWQpIHx8IG51bGw7XHJcbiAgY29uc3Qgd29ya2luZ0JhcmJlciA9IGlzQ3JlYXRlTW9kZSA/IGRyYWZ0QmFyYmVyIDogYWN0aXZlQmFyYmVyO1xyXG5cclxuICBjb25zdCB3b3JraW5nQmFyYmVyU2NoZWR1bGUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghd29ya2luZ0JhcmJlcj8ubmFtZSkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplVGV4dCh3b3JraW5nQmFyYmVyLm5hbWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVzXHJcbiAgICAgIC5maWx0ZXIoKHNsb3QpID0+IG5vcm1hbGl6ZVRleHQoc2xvdC5CYXJiZXIpLnRvTG93ZXJDYXNlKCkgPT09IHRhcmdldClcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGdldFNjaGVkdWxlU29ydFZhbHVlKGEpIC0gZ2V0U2NoZWR1bGVTb3J0VmFsdWUoYikpO1xyXG4gIH0sIFt3b3JraW5nQmFyYmVyLCBzY2hlZHVsZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB2YWx1ZSB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUJhcmJlcikge1xyXG4gICAgICBvbkZpZWxkQ2hhbmdlPy4oYWN0aXZlQmFyYmVyLmlkLCBmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIG9uQWRkPy4oZHJhZnRCYXJiZXIpO1xyXG4gICAgICBzZXREcmFmdEJhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVCYXJiZXIpIHtcclxuICAgICAgb25TYXZlPy4oYWN0aXZlQmFyYmVyKTtcclxuICAgIH1cclxuICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NyZWF0ZU1vZGUgJiYgYWN0aXZlQmFyYmVyKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG9uRGVsZXRlPy4oYWN0aXZlQmFyYmVyKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmZpbmFsbHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXN1bHQuZmluYWxseSgoKSA9PiBjbG9zZUVkaXRvcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU3RhdHVzQmFkZ2UgPSAoYmFyYmVyKSA9PlxyXG4gICAgYmFyYmVyID8gKFxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICdyb3VuZGVkLWZ1bGwgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZScsXHJcbiAgICAgICAgICBiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JnLWVtZXJhbGQtNTAwLzE1IHRleHQtZW1lcmFsZC0yMDAnIDogJ2JnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyBBQ1RJVkVfQkFSQkVSX0xBQkVMIDogSElEREVOX0JBUkJFUl9MQUJFTH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IGNhblN1Ym1pdCA9IGlzQ3JlYXRlTW9kZSA/IEJvb2xlYW4od29ya2luZ0JhcmJlcj8ubmFtZT8udHJpbSgpICYmIHdvcmtpbmdCYXJiZXI/LnBhc3N3b3JkPy50cmltKCkpIDogQm9vbGVhbih3b3JraW5nQmFyYmVyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2NoZWR1bGVQaWNrZXJDaGFuZ2UgPSBhc3luYyAoc2xvdCwgbmV4dFZhbHVlKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIG9uU2NoZWR1bGVVcGRhdGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIGNvbnN0IHNsb3RJZCA9IGdldFJlY29yZElkKHNsb3QpO1xyXG4gICAgaWYgKCFzbG90SWQpIHJldHVybjtcclxuICAgIGF3YWl0IG9uU2NoZWR1bGVVcGRhdGUoc2xvdElkLCB7XHJcbiAgICAgIEJhcmJlcjogc2xvdC5CYXJiZXIsXHJcbiAgICAgIERhdGU6IHNsb3QuRGF0ZSxcclxuICAgICAgRGF5T2ZXZWVrOiBzbG90LkRheU9mV2VlayxcclxuICAgICAgV2VlazogbmV4dFZhbHVlLFxyXG4gICAgICBUaW1lOiBuZXh0VmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQkdCw0YDQsdC10YDRi1wiXHJcbiAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2NyZWF0ZScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAvOTAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdyBzaGFkb3ctZW1lcmFsZC05MDAvNDAgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtiYXJiZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KHQv9C40YHQvtC6INCx0LDRgNCx0LXRgNC+0LIg0L/QvtC60LAg0L/Rg9GB0YIuINCU0L7QsdCw0LLRjNGC0LUg0L/QtdGA0LLQvtCz0L4g0YHQvtGC0YDRg9C00L3QuNC60LAuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhdmF0YXJTcmMgPSByZXNvbHZlQXNzZXRVcmwoYmFyYmVyLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGhvbmVMYWJlbCA9IGJhcmJlci5waG9uZSA/IGZvcm1hdFBob25lSW5wdXQoYmFyYmVyLnBob25lKSA6ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJhdGluZ0xhYmVsID0gTnVtYmVyKGJhcmJlci5yYXRpbmcgfHwgUkFUSU5HX01BWCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2JhcmJlci5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignZWRpdCcsIGJhcmJlci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS05MDAvNTAgcC00IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNiB3LTE2IGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFyU3JjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhclNyY30gYWx0PXtiYXJiZXIubmFtZSB8fCAnYXZhdGFyJ30gY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHJvdW5kZWQtMnhsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IHctMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtMnhsIGJnLXNsYXRlLTgwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhiYXJiZXIubmFtZSB8fCAnQicpLnNsaWNlKDAsIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWJzb2x1dGUgLWJvdHRvbS0xIC1yaWdodC0xIGgtMyB3LTMgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1zbGF0ZS05MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JnLWVtZXJhbGQtNDAwJyA6ICdiZy1zbGF0ZS02MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclN0YXR1c0JhZGdlKGJhcmJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBnYXAteS0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMTAgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWluZGlnby0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4piFIHtyYXRpbmdMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+e3Bob25lTGFiZWx9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtiYXJiZXIudGVsZWdyYW1JZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPkB7YmFyYmVyLnRlbGVncmFtSWR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YmFyYmVyLmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj57YmFyYmVyLmRlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwJyA6IHdvcmtpbmdCYXJiZXI/Lm5hbWUgfHwgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LHQsNGA0LHQtdGA0LAnfVxyXG4gICAgICAgIGlzT3Blbj17ZWRpdG9yU3RhdGUub3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUVkaXRvcn1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctNHhsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFpc0NyZWF0ZU1vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUVkaXRvcn0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA/ICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCcgOiAnYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNDcmVhdGVNb2RlID8gJ9CU0L7QsdCw0LLQuNGC0YwnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3dvcmtpbmdCYXJiZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICA8QmFyYmVyQXZhdGFyUGlja2VyIHZhbHVlPXt3b3JraW5nQmFyYmVyLmF2YXRhclVybH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2F2YXRhclVybCcsIHZhbHVlKX0gbG9hZE9wdGlvbnM9e2xvYWRBdmF0YXJPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgcC02IHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UmF0aW5nU2xpZGVyIGRlbnNlIHZhbHVlPXt3b3JraW5nQmFyYmVyLnJhdGluZ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3JhdGluZycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5wYXNzd29yZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3Bhc3N3b3JkJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAg0KbQstC10YJcclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17L14jLy50ZXN0KHdvcmtpbmdCYXJiZXIuY29sb3IgfHwgJycpID8gd29ya2luZ0JhcmJlci5jb2xvciA6ICcjNmQyOGQ5J31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnY29sb3InLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xNiBjdXJzb3ItcG9pbnRlciByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNTAwIGJnLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIuZGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdkZXNjcmlwdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgdy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLnBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIudGVsZWdyYW1JZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ3RlbGVncmFtSWQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2lzQWN0aXZlJywgISh3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSkpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLTJ4bCBib3JkZXIgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICB3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdib3JkZXItZW1lcmFsZC00MDAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTIwMCcgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjAgdGV4dC1zbGF0ZS00MDAnXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/IEFDVElWRV9CQVJCRVJfTEFCRUwgOiBISURERU5fQkFSQkVSX0xBQkVMfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmxleCBoLTUgdy01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTMwMCBiZy1lbWVyYWxkLTQwMC8yMCB0ZXh0LWVtZXJhbGQtMTAwJyA6ICdib3JkZXItc2xhdGUtNjAwIHRleHQtc2xhdGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7d29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAn4pyTJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCg0LDRgdC/0LjRgdCw0L3QuNC1PC9wPlxyXG4gICAgICAgICAgICAgICAge3dvcmtpbmdCYXJiZXJTY2hlZHVsZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCB4bDpncmlkLWNvbHMtNSAyeGw6Z3JpZC1jb2xzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d29ya2luZ0JhcmJlclNjaGVkdWxlLm1hcCgoc2xvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdElkID0gZ2V0UmVjb3JkSWQoc2xvdCkgfHwgYCR7c2xvdC5CYXJiZXJ9LSR7c2xvdC5EYXRlfS0ke3Nsb3QuV2Vla31gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVZhbHVlID0gc2xvdC5XZWVrIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5TGFiZWwgPSBmb3JtYXRTY2hlZHVsZURheVNob3J0KHNsb3QuRGF0ZSwgc2xvdC5EYXlPZldlZWspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZm9ybWF0U2NoZWR1bGVEYXRlTGFiZWwoc2xvdC5EYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVG9kYXlTbG90ID0gaXNUb2RheURhdGUoc2xvdC5EYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Nsb3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBiZy1zbGF0ZS05MDAvNjAgcC0zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXlTbG90ID8gJ2JvcmRlci1lbWVyYWxkLTQwMC83MCByaW5nLTEgcmluZy1lbWVyYWxkLTQwMC8zMCcgOiAnYm9yZGVyLXNsYXRlLTgwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSB0ZXh0LWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2RheUxhYmVsLCBkYXRlTGFiZWxdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgwrcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZShzbG90LCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC83MCBweC0zIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCy0YDQtdC80LXQvdC4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLRgNC10LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC70Y8g0Y3RgtC+0LPQviDQsdCw0YDQsdC10YDQsCDQvdC10YIg0LfQsNC/0LvQsNC90LjRgNC+0LLQsNC90L3Ri9GFINGB0LvQvtGC0L7Qsi48L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAsINGH0YLQvtCx0Ysg0LjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUuPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2VydmljZXNWaWV3ID0gKHsgc2VydmljZXMgPSBbXSwgYmFyYmVycyA9IFtdLCBvbkZpZWxkQ2hhbmdlLCBvblByaWNlQ2hhbmdlLCBvbkRlbGV0ZSwgb25BZGQgfSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuICBjb25zdCBbZHJhZnRTZXJ2aWNlLCBzZXREcmFmdFNlcnZpY2VdID0gdXNlU3RhdGUoYnVpbGROZXdTZXJ2aWNlU3RhdGUpO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdG9yID0gKG1vZGUsIHRhcmdldElkID0gbnVsbCkgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZShidWlsZE5ld1NlcnZpY2VTdGF0ZSgpKTtcclxuICAgIH1cclxuICAgIHNldEVkaXRvclN0YXRlKHsgb3BlbjogdHJ1ZSwgbW9kZSwgdGFyZ2V0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VFZGl0b3IgPSAoKSA9PiBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IGZhbHNlLCBtb2RlOiAnZWRpdCcsIHRhcmdldElkOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBpc0NyZWF0ZU1vZGUgPSBlZGl0b3JTdGF0ZS5tb2RlID09PSAnY3JlYXRlJztcclxuICBjb25zdCBhY3RpdmVTZXJ2aWNlID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gZWRpdG9yU3RhdGUudGFyZ2V0SWQpIHx8IG51bGw7XHJcbiAgY29uc3Qgd29ya2luZ1NlcnZpY2UgPSBpc0NyZWF0ZU1vZGUgPyBkcmFmdFNlcnZpY2UgOiBhY3RpdmVTZXJ2aWNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWVsZENoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB2YWx1ZSB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgb25GaWVsZENoYW5nZT8uKGFjdGl2ZVNlcnZpY2UuaWQsIGZpZWxkLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpY2VDaGFuZ2UgPSAoYmFyYmVySWQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZSgocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIHByaWNlczogeyAuLi4ocHJldi5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgb25QcmljZUNoYW5nZT8uKGFjdGl2ZVNlcnZpY2UuaWQsIGJhcmJlcklkLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgaWYgKCF3b3JraW5nU2VydmljZT8ubmFtZT8udHJpbSgpKSByZXR1cm47XHJcbiAgICAgIG9uQWRkPy4oZHJhZnRTZXJ2aWNlKTtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKGJ1aWxkTmV3U2VydmljZVN0YXRlKCkpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VFZGl0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVMb2NhbCA9ICgpID0+IHtcclxuICAgIGlmICghaXNDcmVhdGVNb2RlICYmIGFjdGl2ZVNlcnZpY2UpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gb25EZWxldGU/LihhY3RpdmVTZXJ2aWNlKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmZpbmFsbHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXN1bHQuZmluYWxseSgoKSA9PiBjbG9zZUVkaXRvcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VydmljZVByaWNlU3VtbWFyeSA9IChzZXJ2aWNlKSA9PiB7XHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgbGFiZWw6ICfigJQnLCBkZXRhaWxzOiAnJyB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWVzID0gYmFyYmVyc1xyXG4gICAgICAubWFwKChiYXJiZXIpID0+IE51bWJlcihzZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0pKVxyXG4gICAgICAuZmlsdGVyKChwcmljZSkgPT4gTnVtYmVyLmlzRmluaXRlKHByaWNlKSAmJiBwcmljZSA+PSAwKTtcclxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiAn0KbQtdC90Ysg0L3QtSDQt9Cw0LTQsNC90YsnLFxyXG4gICAgICAgIGRldGFpbHM6IGJhcmJlcnMubGVuZ3RoID8gJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINC00L7QsdCw0LLQuNGC0YwnIDogJ9Cd0LXRgiDQsdCw0YDQsdC10YDQvtCyINC00LvRjyDQvdCw0LfQvdCw0YfQtdC90LjRjycsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuICAgIGNvbnN0IGNvdW50ID0gdmFsdWVzLmxlbmd0aDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiBtaW4gPT09IG1heCA/IGZvcm1hdEN1cnJlbmN5KG1pbikgOiBgJHtmb3JtYXRDdXJyZW5jeShtaW4pfSDigJMgJHtmb3JtYXRDdXJyZW5jeShtYXgpfWAsXHJcbiAgICAgIGRldGFpbHM6IGDQlNC70Y8gJHtjb3VudH0gJHtwbHVyYWxpemUoY291bnQsIFsn0LHQsNGA0LHQtdGA0LAnLCAn0LHQsNGA0LHQtdGA0LAnLCAn0LHQsNGA0LHQtdGA0L7QsiddKX1gLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5TdWJtaXQgPSBpc0NyZWF0ZU1vZGUgPyBCb29sZWFuKHdvcmtpbmdTZXJ2aWNlPy5uYW1lPy50cmltKCkpIDogdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignY3JlYXRlJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTYwMC85MCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93IHNoYWRvdy1lbWVyYWxkLTkwMC80MCBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzZXJ2aWNlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDRg9GB0LvRg9CzINC/0YPRgdGCLiDQlNC+0LHQsNCy0YzRgtC1INC/0LXRgNCy0YPRjiDRg9GB0LvRg9Cz0YMuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHNlcnZpY2VQcmljZVN1bW1hcnkoc2VydmljZSk7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlU2VydmljZSA9IHNlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZS5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2VkaXQnLCBzZXJ2aWNlLmlkKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIGZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC0zIHJvdW5kZWQtMnhsIGJvcmRlciBwLTQgdGV4dC1sZWZ0IHRyYW5zaXRpb24gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAnLFxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTkwMC81MCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvMzAgb3BhY2l0eS04MCBob3Zlcjpib3JkZXItYW1iZXItNDAwLzYwJ1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBzbTp0ZXh0LWxnJywgaXNBY3RpdmVTZXJ2aWNlID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtc2xhdGUtNDAwJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLm5hbWUgfHwgJ9CR0LXQtyDQvdCw0LfQstCw0L3QuNGPJ31cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBib3JkZXIgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlU2VydmljZSA/ICdib3JkZXItZW1lcmFsZC01MDAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTIwMCcgOiAnYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAvNjAgdGV4dC1zbGF0ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZVNlcnZpY2UgPyAn0JDQutGC0LjQstC90LAnIDogJ9Ch0LrRgNGL0YLQsCd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1zbGF0ZS04MDAvODAgcHgtMiBweS0wLjUgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuZHVyYXRpb24gPyBgJHtzZXJ2aWNlLmR1cmF0aW9ufSDQvNC40L1gIDogJ+KAlCd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RleHQtc20nLCBpc0FjdGl2ZVNlcnZpY2UgPyAndGV4dC1zbGF0ZS0xMDAnIDogJ3RleHQtc2xhdGUtNTAwJyl9PntzdW1tYXJ5LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0ZXh0LXhzJywgaXNBY3RpdmVTZXJ2aWNlID8gJ3RleHQtc2xhdGUtNDAwJyA6ICd0ZXh0LXNsYXRlLTUwMCcpfT57c3VtbWFyeS5kZXRhaWxzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2lzQ3JlYXRlTW9kZSA/ICfQndC+0LLQsNGPINGD0YHQu9GD0LPQsCcgOiB3b3JraW5nU2VydmljZT8ubmFtZSB8fCAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRg9GB0LvRg9Cz0LgnfVxyXG4gICAgICAgIGlzT3Blbj17ZWRpdG9yU3RhdGUub3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUVkaXRvcn1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctM3hsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFpc0NyZWF0ZU1vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlTG9jYWx9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCI+XHJcbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlRWRpdG9yfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblN1Ym1pdH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAncm91bmRlZC1sZyBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID8gJ2JnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyA6ICdiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0NyZWF0ZU1vZGUgPyAn0JTQvtCx0LDQstC40YLRjCcgOiAn0JPQvtGC0L7QstC+J31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7d29ya2luZ1NlcnZpY2UgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QndCw0LfQstCw0L3QuNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UubmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YAsINGB0YLRgNC40LbQutCwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QlNC70LjRgtC10LvRjNC90L7RgdGC0YwsINC80LjQvTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbj17NX1cclxuICAgICAgICAgICAgICAgICAgc3RlcD17NX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdTZXJ2aWNlLmR1cmF0aW9uID8/ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpZWxkQ2hhbmdlKCdkdXJhdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycgPyAnJyA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnaXNBY3RpdmUnLCAhKHdvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtMnhsIGJvcmRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICB3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYm9yZGVyLWVtZXJhbGQtNDAwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0yMDAnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzYwIHRleHQtc2xhdGUtNDAwJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gQUNUSVZFX1NFUlZJQ0VfTEFCRUwgOiBISURERU5fU0VSVklDRV9MQUJFTH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaC01IHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTMwMCBiZy1lbWVyYWxkLTQwMC8yMCB0ZXh0LWVtZXJhbGQtMTAwJyA6ICdib3JkZXItc2xhdGUtNjAwIHRleHQtc2xhdGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7d29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gJ1xcdTI3MTMnIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QptC10L3RiyDQv9C+INCx0LDRgNCx0LXRgNCw0Lw8L3A+XHJcbiAgICAgICAgICAgICAge2JhcmJlcnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIHNtOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGtleT17YmFyYmVyLmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdTZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0gPz8gJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVByaWNlQ2hhbmdlKGJhcmJlci5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0JTQvtCx0LDQstGM0YLQtSDQsdCw0YDQsdC10YDQvtCyLCDRh9GC0L7QsdGLINC90LDQt9C90LDRh9Cw0YLRjCDRhtC10L3Riy48L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INGD0YHQu9GD0LPRgyDQtNC70Y8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjy48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdENlbGwgPSAoeyB2YWx1ZSwgb3B0aW9ucyA9IFtdLCBvbkNvbW1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB0b3A6IDAsIGxlZnQ6IDAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWFuY2hvclJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gYW5jaG9yUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBwYW5lbFdpZHRoID0gMzIwO1xyXG4gICAgY29uc3QgcGFuZWxIZWlnaHQgPSAzNjA7XHJcbiAgICBjb25zdCBuZXh0TGVmdCA9IE1hdGgubWluKHJlY3QubGVmdCwgd2luZG93LmlubmVyV2lkdGggLSBwYW5lbFdpZHRoIC0gMTYpO1xyXG4gICAgY29uc3QgbmV4dFRvcCA9IE1hdGgubWluKHJlY3QuYm90dG9tICsgOCwgd2luZG93LmlubmVySGVpZ2h0IC0gcGFuZWxIZWlnaHQgLSAxNik7XHJcbiAgICBzZXRQb3NpdGlvbih7XHJcbiAgICAgIHRvcDogTWF0aC5tYXgoMTYsIG5leHRUb3ApLFxyXG4gICAgICBsZWZ0OiBNYXRoLm1heCgxNiwgbmV4dExlZnQpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgdXBkYXRlUG9zaXRpb24oKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtvcGVuLCB1cGRhdGVQb3NpdGlvbl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcHRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHByZXYuaW5jbHVkZXMob3B0aW9uKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pIDogWy4uLnByZXYsIG9wdGlvbl0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgb25Db21taXQoZHJhZnQuam9pbignLCAnKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gZHJhZnQubGVuZ3RoID8gZHJhZnQuam9pbignLCAnKSA6ICfQktGL0LHRgNCw0YLRjCDRg9GB0LvRg9Cz0LgnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1heC1oLVs0MHB4XSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLXByZS13cmFwXCI+e3N1bW1hcnl9PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge29wZW4gJiZcclxuICAgICAgICBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MFwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBtYXgtdy14cyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvOTUgcC0zIHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke3Bvc2l0aW9uLnRvcH1weGAsIGxlZnQ6IGAke3Bvc2l0aW9uLmxlZnR9cHhgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+0KPRgdC70YPQs9C4PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMSB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZHJhZnQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMiBmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZHJhZnQubWFwKChzZXJ2aWNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8yMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3B0aW9uKHNlcnZpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj4/PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBzcGFjZS15LTEgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA9PT0gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQtNC+0YHRgtGD0L/QvdGL0YUg0YPRgdC70YPQszwvcD59XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGRyYWZ0LmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTIgdGV4dC1sZWZ0XCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNBY3RpdmV9IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVPcHRpb24ob3B0aW9uKX0gY2xhc3NOYW1lPVwiaC00IHctNCByb3VuZGVkIGJvcmRlci1zbGF0ZS01MDAgYWNjZW50LWluZGlnby01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXREcmFmdChbXSl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGltZVJhbmdlUGlja2VyID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICB0aXRsZSA9ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4JyxcclxuICBwbGFjZWhvbGRlciA9ICfQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCcsXHJcbiAgYnV0dG9uQ2xhc3NOYW1lID0gJ3ctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZSB3aGl0ZXNwYWNlLW5vd3JhcCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3sgc3RhcnQsIGVuZCB9LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSgoKSA9PiBwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZUhvdXJWYWx1ZSA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybiAnJztcclxuICAgIGNvbnN0IFtob3Vyc10gPSBpbnB1dFZhbHVlLnNwbGl0KCc6Jyk7XHJcbiAgICBpZiAoIWhvdXJzKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gYCR7aG91cnMucGFkU3RhcnQoMiwgJzAnKX06MDBgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGJ1aWxkVGltZVJhbmdlVmFsdWUoc3RhcnQsIGVuZCkpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKCcwJyk7XHJcbiAgICBzZXREcmFmdCh7IHN0YXJ0OiAnJywgZW5kOiAnJyB9KTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX0+XHJcbiAgICAgICAge3ZhbHVlID8gdmFsdWUgOiBwbGFjZWhvbGRlcn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBpc09wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LW1kXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQl9Cw0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQstGA0LXQvNGPINC00LvRjyDQvdCw0YfQsNC70LAg0Lgg0LfQsNCy0LXRgNGI0LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtMTAwXCI+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgZ2FwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNjAgcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMFwiPtCh0YLQsNGA0YI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjM2MDBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIHN0YXJ0OiBub3JtYWxpemVIb3VyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMzIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS01MDBcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj7QpNC40L3QuNGIPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIzNjAwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgZW5kOiBub3JtYWxpemVIb3VyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMzIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7IHJlY29yZCwgY29sdW1uLCBvcHRpb25zLCBvblVwZGF0ZSwgb25PcGVuUHJvZmlsZSwgdGFibGVJZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVjb3JkSWQgPSByZWNvcmQ/LmlkIHx8IHJlY29yZD8uSWQgfHwgcmVjb3JkPy5JRCB8fCByZWNvcmQ/LnJlY29yZElkO1xyXG4gIGNvbnN0IHZhbHVlID0gcmVjb3JkW2NvbHVtbi5rZXldO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUodmFsdWUgPz8gJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RHJhZnQodmFsdWUgPz8gJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBpZiAoIWNvbHVtbi5lZGl0YWJsZSkge1xyXG4gICAgaWYgKGNvbHVtbi5pc1Byb2ZpbGVMaW5rKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk9wZW5Qcm9maWxlPy4odmFsdWUpfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAge3ZhbHVlIHx8ICctJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCB3aGl0ZXNwYWNlLW5vcm1hbCBicmVhay13b3JkcyBsZWFkaW5nLXRpZ2h0XCI+e3ZhbHVlIHx8ICctJ308L3NwYW4+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWl0ID0gKG5leHRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IG5leHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFZhbHVlIDogZHJhZnQ7XHJcbiAgICBpZiAoKHZhbHVlID8/ICcnKSA9PT0gKHBheWxvYWQgPz8gJycpKSByZXR1cm47XHJcbiAgICBvblVwZGF0ZShyZWNvcmRJZCwgeyBbY29sdW1uLmtleV06IHBheWxvYWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKFxyXG4gICAgKHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGNvbHVtbi5rZXkgPT09ICdUaW1lJykgfHxcclxuICAgICh0YWJsZUlkID09PSAnU2NoZWR1bGVzJyAmJiBjb2x1bW4ua2V5ID09PSAnV2VlaycpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGltZVJhbmdlUGlja2VyXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBjb21taXQobmV4dFZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuKAlFwiXHJcbiAgICAgICAgdGl0bGU9e3RhYmxlSWQgPT09ICdTY2hlZHVsZXMnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICBidXR0b25DbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoY29sdW1uLnR5cGUpIHtcclxuICAgIGNhc2UgJ3NlbGVjdCc6IHtcclxuICAgICAgY29uc3Qgb3B0aW9uTGlzdCA9IGNvbHVtbi5vcHRpb25zS2V5ID8gb3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW10gOiBbXTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAge29wdGlvbkxpc3QubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09IDEgfHwgdmFsdWUgPT09ICcxJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC5jaGVja2VkID8gJ3RydWUnIDogJycpfSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICk7XHJcbiAgICBjYXNlICdtdWx0aS1zZWxlY3QnOlxyXG4gICAgICByZXR1cm4gPE11bHRpU2VsZWN0Q2VsbCB2YWx1ZT17dmFsdWV9IG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfSBvbkNvbW1pdD17Y29tbWl0fSAvPjtcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXt2YWx1ZSA/IFN0cmluZyh2YWx1ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkcmFmdCB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gb25CbHVyPXsoKSA9PiBjb21taXQoKX0gb25LZXlEb3duPXsoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBjb21taXQoKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbHVtbk1lbnUgPSAoeyBjb2x1bW5zLCBoaWRkZW5Db2x1bW5zID0gW10sIG9uVG9nZ2xlIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LWF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAg0J/QvtC70Y9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTMwIG10LTIgdy02NCBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwLTMgc2hhZG93LTJ4bCBzbTpsZWZ0LWF1dG8gc206cmlnaHQtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KX0gb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKGNvbHVtbi5rZXkpfSAvPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdENoZWNrYm94ZXMgPSAoeyBsYWJlbCwgb3B0aW9ucyA9IFtdLCB2YWx1ZSA9IFtdLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSAn0J3QtdGCINC00LDQvdC90YvRhScgfSkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlTWVtbygoKSA9PiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpLCBbdmFsdWVdKTtcclxuICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBxdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFub3JtYWxpemVkUXVlcnkpIHJldHVybiBvcHRpb25zO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkpO1xyXG4gIH0sIFtvcHRpb25zLCBub3JtYWxpemVkUXVlcnldKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKCFvbkNoYW5nZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZXhpc3RzID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgIGNvbnN0IG5leHQgPSBleGlzdHMgPyBzZWxlY3RlZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4uc2VsZWN0ZWQsIG9wdGlvbl07XHJcbiAgICBvbkNoYW5nZShuZXh0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57c2VsZWN0ZWQubGVuZ3RoID8gYCR7c2VsZWN0ZWQubGVuZ3RofSDQstGL0LHRgNCw0L3QvmAgOiAn0J3QtSDQstGL0LHRgNCw0L3Qvid9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAge3NlbGVjdGVkLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8xMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoc2VydmljZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZXJ2aWNlfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy1ub25lIHRleHQtc2xhdGUtNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtMyBweS0yXCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXNsYXRlLTQwMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTkgMy41YTUuNSA1LjUgMCAwMTMuOTk1IDkuMzE1bDMuMDk1IDMuMDk1YS43NS43NSAwIDExLTEuMDYgMS4wNmwtMy4wOTUtMy4wOTRBNS41IDUuNSAwIDExOSAzLjV6bTAgMS41YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04elwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDRg9GB0LvRg9Cz0LhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctdHJhbnNwYXJlbnQgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtxdWVyeSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KCcnKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBvdmVyZmxvdy15LWF1dG8gcC0yXCI+XHJcbiAgICAgICAgICB7ZmlsdGVyZWQubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0xIHB5LTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPntwbGFjZWhvbGRlcn08L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWQubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUob3B0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20nLFxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNDAnXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e29wdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTMwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2xpZW50TG9va3VwSW5wdXQgPSAoe1xyXG4gIGxhYmVsID0gJ9Ca0LvQuNC10L3RgicsXHJcbiAgdmFsdWUgPSAnJyxcclxuICBvbkNoYW5nZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgb25TZWxlY3RDbGllbnQsXHJcbiAgcGxhY2Vob2xkZXIgPSAn0J3QsNGH0L3QuNGC0LUg0LLQstC+0LTQuNGC0Ywg0LjQvNGPINC40LvQuCDRgtC10LvQtdGE0L7QvScsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UXVlcnkodmFsdWUgfHwgJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dChxdWVyeSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNob3J0bGlzdCA9IG5vcm1hbGl6ZWRcclxuICAgICAgPyBjbGllbnRzLmZpbHRlcihcclxuICAgICAgICAgIChjbGllbnQpID0+XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50Lm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZCkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplVGV4dChjbGllbnQucGhvbmUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZClcclxuICAgICAgICApXHJcbiAgICAgIDogY2xpZW50cztcclxuICAgIHJldHVybiBzaG9ydGxpc3Quc2xpY2UoMCwgNik7XHJcbiAgfSwgW2NsaWVudHMsIHF1ZXJ5XSk7XHJcblxyXG4gIHVzZU91dHNpZGVDbGljayhjb250YWluZXJSZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjbGllbnQ/Lm5hbWUgfHwgJyc7XHJcbiAgICBzZXRRdWVyeShuZXh0VmFsdWUpO1xyXG4gICAgb25DaGFuZ2U/LihuZXh0VmFsdWUpO1xyXG4gICAgb25TZWxlY3RDbGllbnQ/LihjbGllbnQpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0xXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2U/LihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtvcGVuICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIG10LTEgdy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzk1IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHttYXRjaGVzLm1hcCgoY2xpZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1zdGFydCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsYXN0OmJvcmRlci1ub25lIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoY2xpZW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2xpZW50Lm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntjbGllbnQucGhvbmUgfHwgJ9Ci0LXQu9C10YTQvtC9INC90LUg0YPQutCw0LfQsNC9J308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdHVzTWVudSA9ICh7IHN0YXR1c2VzID0gW10sIGhpZGRlblN0YXR1c2VzID0gW10sIG9uVG9nZ2xlLCBvblJlc2V0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTExIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHRleHQtc20gdGV4dC13aGl0ZSBzbTp3LWF1dG9cIlxuICAgICAgPlxuICAgICAgICDQodGC0LDRgtGD0YHRi1xuICAgICAgPC9idXR0b24+XG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgei0zMCBtdC0yIHctNjQgbWF4LXctW2NhbGMoMTAwdnctMnJlbSldIHNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcC0zIHNoYWRvdy0yeGwgc206bGVmdC1hdXRvIHNtOnJpZ2h0LTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzdGF0dXNlcy5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCd0LXRgiDRgdGC0LDRgtGD0YHQvtCyPC9wPn1cclxuICAgICAgICAgIHtzdGF0dXNlcy5tYXAoKHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtzdGF0dXN9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17IWhpZGRlblN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cyl9IG9uQ2hhbmdlPXsoKSA9PiBvblRvZ2dsZShzdGF0dXMpfSAvPlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25SZXNldH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgVGFibGVUb29sYmFyID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHNlYXJjaFRlcm0sXHJcbiAgc2V0U2VhcmNoVGVybSxcclxuICBzdXBwb3J0c0JhcmJlckZpbHRlcixcclxuICBzZWxlY3RlZEJhcmJlcixcclxuICBzZXRTZWxlY3RlZEJhcmJlcixcclxuICBiYXJiZXJzID0gW10sXHJcbiAgc3VwcG9ydHNTdGF0dXNGaWx0ZXIsXHJcbiAgc3RhdHVzZXMgPSBbXSxcclxuICBoaWRkZW5TdGF0dXNlcyA9IFtdLFxyXG4gIHRvZ2dsZVN0YXR1cyxcclxuICByZXNldFN0YXR1c2VzLFxyXG4gIGNvbHVtbnMgPSBbXSxcclxuICBoaWRkZW5Db2x1bW5zID0gW10sXHJcbiAgdG9nZ2xlQ29sdW1uLFxyXG4gIGNhbkNyZWF0ZSxcclxuICBvbk9wZW5DcmVhdGUsXHJcbiAgb25SZWZyZXNoLFxyXG4gIHNob3dQYXN0QXBwb2ludG1lbnRzLFxyXG4gIHNldFNob3dQYXN0QXBwb2ludG1lbnRzLFxyXG4gIHN1cHBvcnRzR3JvdXBpbmcgPSBmYWxzZSxcclxuICBncm91cEJ5RGF0ZSA9IGZhbHNlLFxyXG4gIHNldEdyb3VwQnlEYXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY2hpcENsYXNzID0gKGFjdGl2ZSkgPT5cbiAgICBjbGFzc05hbWVzKFxuICAgICAgJ2lubGluZS1mbGV4IGgtMTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQteGwgYm9yZGVyIHB4LTQgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRyYW5zaXRpb24gd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1jZW50ZXInLFxuICAgICAgYWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNDAwIGJnLWluZGlnby01MDAvMTAgdGV4dC1pbmRpZ28tMTAwJyA6ICdib3JkZXItc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJvcmRlci1zbGF0ZS01MDAnXG4gICAgKTtcbiAgY29uc3QgYWxsb3dNYW51YWxSZWZyZXNoID0gdHlwZW9mIG9uUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiAhWydBcHBvaW50bWVudHMnLCAnVXNlcnMnXS5pbmNsdWRlcyh0YWJsZUlkKTtcclxuICBjb25zdCBpbmxpbmVDcmVhdGVGb3JNb2JpbGUgPSBjYW5DcmVhdGUgJiYgdHlwZW9mIG9uT3BlbkNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBbJ0FwcG9pbnRtZW50cycsICdVc2VycyddLmluY2x1ZGVzKHRhYmxlSWQpO1xyXG4gIGNvbnN0IHNob3dDb2x1bW5NZW51ID0gY29sdW1ucy5sZW5ndGggPiAwICYmICFbJ1VzZXJzJywgJ0FwcG9pbnRtZW50cyddLmluY2x1ZGVzKHRhYmxlSWQpO1xuICBjb25zdCBzdGF0dXNDb250cm9sID1cclxuICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyID8gKFxyXG4gICAgICA8U3RhdHVzTWVudSBzdGF0dXNlcz17c3RhdHVzZXN9IGhpZGRlblN0YXR1c2VzPXtoaWRkZW5TdGF0dXNlc30gb25Ub2dnbGU9e3RvZ2dsZVN0YXR1c30gb25SZXNldD17cmVzZXRTdGF0dXNlc30gLz5cclxuICAgICkgOiBudWxsO1xyXG4gIGNvbnN0IGNvbHVtbkNvbnRyb2wgPSBzaG93Q29sdW1uTWVudSA/IDxDb2x1bW5NZW51IGNvbHVtbnM9e2NvbHVtbnN9IGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9IG9uVG9nZ2xlPXt0b2dnbGVDb2x1bW59IC8+IDogbnVsbDtcclxuICBjb25zdCBwYXN0Q29udHJvbCA9XHJcbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiB0eXBlb2Ygc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMgPT09ICdmdW5jdGlvbidcclxuICAgICAgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyghc2hvd1Bhc3RBcHBvaW50bWVudHMpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2hpcENsYXNzKHNob3dQYXN0QXBwb2ludG1lbnRzKSwgJ3ctZnVsbCBzbTp3LWF1dG8nKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J/RgNC+0YjQtdC00YjQuNC1XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICAgIDogbnVsbDtcclxuICBjb25zdCBncm91cGluZ0NvbnRyb2wgPVxyXG4gICAgc3VwcG9ydHNHcm91cGluZyAmJiB0eXBlb2Ygc2V0R3JvdXBCeURhdGUgPT09ICdmdW5jdGlvbidcclxuICAgICAgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRHcm91cEJ5RGF0ZSghZ3JvdXBCeURhdGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2hpcENsYXNzKGdyb3VwQnlEYXRlKSwgJ3ctZnVsbCBzbTp3LWF1dG8nKX0+XHJcbiAgICAgICAgICAgINCf0L4g0LTQvdGP0LxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgOiBudWxsO1xyXG4gIGNvbnN0IGdldEJhcmJlclNlbGVjdCA9IChleHRyYUNsYXNzTmFtZSA9ICcnKSA9PiAoXG4gICAgPHNlbGVjdFxuICAgICAgdmFsdWU9e3NlbGVjdGVkQmFyYmVyfVxuICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VsZWN0ZWRCYXJiZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgJ2gtMTEgdy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZScsXG4gICAgICAgIHRhYmxlSWQgIT09ICdBcHBvaW50bWVudHMnICYmICdzbTp3LTQ4JyxcbiAgICAgICAgZXh0cmFDbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPtCS0YHQtSDQvNCw0YHRgtC10YDQsDwvb3B0aW9uPlxuICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XG4gICAgICAgICAge2JhcmJlcn1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgKTtcbiAgY29uc3QgY29udHJvbE9yZGVyID1cbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJ1xuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnYmFyYmVyJyxcbiAgICAgICAgICAgIG5vZGU6IHN1cHBvcnRzQmFyYmVyRmlsdGVyID8gPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIj57Z2V0QmFyYmVyU2VsZWN0KCl9PC9kaXY+IDogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsga2V5OiAnc3RhdHVzJywgbm9kZTogc3RhdHVzQ29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAncGFzdCcsIG5vZGU6IHBhc3RDb250cm9sIH0sXG4gICAgICAgICAgeyBrZXk6ICdncm91cCcsIG5vZGU6IGdyb3VwaW5nQ29udHJvbCB9LFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB7IGtleTogJ3N0YXR1cycsIG5vZGU6IHN0YXR1c0NvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ3Bhc3QnLCBub2RlOiBwYXN0Q29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAnZ3JvdXAnLCBub2RlOiBncm91cGluZ0NvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ2NvbHVtbnMnLCBub2RlOiBjb2x1bW5Db250cm9sIH0sXG4gICAgICAgIF07XG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzMwIHAtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbGc6ZmxleC1yb3cgbGc6aXRlbXMtc3RhcnQgbGc6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXInLCB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyA/ICdsZzpmbGV4LXJvdyBsZzppdGVtcy1jZW50ZXIgbGc6Z2FwLTMnIDogJycpfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICdmbGV4IHctZnVsbCBpdGVtcy1zdHJldGNoIGdhcC0yJyxcbiAgICAgICAgICAgICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyA/ICdsZzpmbGV4LVsyXSBsZzpnYXAtMycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIG1pbi13LVsyMDBweF0gbGc6bWluLXctWzI2MHB4XVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC00IHctNFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgMy41YTUuNSA1LjUgMCAwMTMuOTk1IDkuMzE1bDMuMDk1IDMuMDk1YS43NS43NSAwIDExLTEuMDYgMS4wNmwtMy4wOTUtMy4wOTRBNS41IDUuNSAwIDExOSAzLjV6bTAgMS41YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQn9C+0LjRgdC6INC/0L4g0YLQsNCx0LvQuNGG0LVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwbC05IHByLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzQwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7aW5saW5lQ3JlYXRlRm9yTW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5DcmVhdGV9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0JTQvtCx0LDQstC40YLRjCDQt9Cw0L/QuNGB0YxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC0xMSB3LTExIHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXhsIGJnLWVtZXJhbGQtNjAwIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBzaGFkb3ctZW1lcmFsZC05MDAvMjAgaG92ZXI6YmctZW1lcmFsZC01MDAgc206aGlkZGVuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzdXBwb3J0c0JhcmJlckZpbHRlciAmJiB0YWJsZUlkICE9PSAnQXBwb2ludG1lbnRzJyAmJiBnZXRCYXJiZXJTZWxlY3QoKX1cbiAgICAgICAgICAgIHt0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBzdXBwb3J0c0JhcmJlckZpbHRlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHctZnVsbCBpdGVtcy1zdHJldGNoIGdhcC0zIGxnOmZsZXggbGc6ZmxleC0xXCI+XG4gICAgICAgICAgICAgICAge2dldEJhcmJlclNlbGVjdCgnbGc6ZmxleC0xJyl9XG4gICAgICAgICAgICAgICAge2NhbkNyZWF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC0xMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBiZy1lbWVyYWxkLTYwMCBweC02IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBzaGFkb3ctZW1lcmFsZC05MDAvMjAgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0YxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiBzbTpmbGV4IHNtOmZsZXgtd3JhcCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtjb250cm9sT3JkZXIubWFwKChjb250cm9sKSA9PlxyXG4gICAgICAgICAgICAgIGNvbnRyb2wubm9kZSA/IDxGcmFnbWVudCBrZXk9e2NvbnRyb2wua2V5fT57Y29udHJvbC5ub2RlfTwvRnJhZ21lbnQ+IDogbnVsbFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0yXCI+XHJcbiAgICAgICAgICB7YWxsb3dNYW51YWxSZWZyZXNoICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVmcmVzaH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAgc206cHgtNVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCLvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj7vv73vv73vv73vv73vv73vv73vv73vv708L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206aGlkZGVuXCI+Pzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NhbkNyZWF0ZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyxcbiAgICAgICAgICAgICAgICBpbmxpbmVDcmVhdGVGb3JNb2JpbGUgPyAnaGlkZGVuIHNtOmlubGluZS1mbGV4JyA6ICcnLFxuICAgICAgICAgICAgICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnID8gJ2xnOmhpZGRlbicgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+KyDQlNC+0LHQsNCy0LjRgtGMPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRBcHBvaW50bWVudEdyb3VwcyA9IChyZWNvcmRzID0gW10sIHNvcnREaXJlY3Rpb24gPSAnZGVzYycpID0+IHtcclxuICBjb25zdCBidWNrZXRzID0gbmV3IE1hcCgpO1xyXG4gIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSByZWNvcmQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgIGNvbnN0IGJ1Y2tldCA9IGJ1Y2tldHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICBidWNrZXQucHVzaChyZWNvcmQpO1xyXG4gICAgYnVja2V0cy5zZXQoa2V5LCBidWNrZXQpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbXBhcmUgPSBzb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/IChhLCBiKSA9PiBhIC0gYiA6IChhLCBiKSA9PiBiIC0gYTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShidWNrZXRzLmVudHJpZXMoKSlcclxuICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4ge1xyXG4gICAgICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gY29tcGFyZShsZWZ0LCByaWdodCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzb3J0ZWRJdGVtc1swXTtcclxuICAgICAgY29uc3Qgc29ydFZhbHVlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocmVmZXJlbmNlLkRhdGUsIHJlZmVyZW5jZS5UaW1lLCByZWZlcmVuY2Uuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCAoc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IGtleSB8fCBgbm8tZGF0ZS0ke3JlZmVyZW5jZT8uaWQgfHwgTWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlSGVhZGluZyhrZXkpLFxyXG4gICAgICAgIHJvd3M6IHNvcnRlZEl0ZW1zLFxyXG4gICAgICAgIHNvcnRWYWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pXHJcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLnNvcnRWYWx1ZSwgYi5zb3J0VmFsdWUpKTtcclxufTtcclxuY29uc3QgcmVzb2x2ZVNvcnRWYWx1ZSA9IChyb3csIGNvbHVtbiwgdGFibGVJZCkgPT4ge1xyXG4gIGlmICghY29sdW1uKSByZXR1cm4gbm9ybWFsaXplVGV4dChyb3dbY29sdW1uPy5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICh0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBjb2x1bW4ua2V5ID09PSAnRGF0ZScpIHtcclxuICAgIHJldHVybiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShyb3cuRGF0ZSwgcm93LlRpbWUsIHJvdy5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IDA7XHJcbiAgfVxyXG4gIGlmIChjb2x1bW4udHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICBjb25zdCB0cyA9IG5ldyBEYXRlKHJvd1tjb2x1bW4ua2V5XSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTih0cykgPyAwIDogdHM7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygcm93W2NvbHVtbi5rZXldID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHJvd1tjb2x1bW4ua2V5XTtcclxuICB9XHJcbiAgaWYgKGNvbHVtbi50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgIHJldHVybiByb3dbY29sdW1uLmtleV0gPyAxIDogMDtcclxuICB9XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbi5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG5jb25zdCBTb3J0SW5kaWNhdG9yID0gKHsgZGlyZWN0aW9uIH0pID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxlYWRpbmctWzZweF1cIj5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgdGV4dC1zbGF0ZS02MDAnLCBkaXJlY3Rpb24gPT09ICdhc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDEwbDQtNCA0IDRcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC0zIHctMyAtbXQtMC41IHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnZGVzYycgJiYgJ3RleHQtaW5kaWdvLTMwMCcpfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQgNmw0IDQgNC00XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBTY2hlZHVsZXNCb2FyZCA9ICh7IHJvd3MgPSBbXSwgY29sdW1ucyA9IFtdLCBvblVwZGF0ZSwgb3B0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3QgdmlzaWJsZUtleXMgPSB1c2VNZW1vKCgpID0+IG5ldyBTZXQoY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gY29sdW1uLmtleSkpLCBbY29sdW1uc10pO1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCBncm91cGVkQnlEYXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBidWNrZXRzID0gbmV3IE1hcCgpO1xyXG4gICAgcm93cy5mb3JFYWNoKChzbG90KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IHNsb3QuRGF0ZSB8fCBzbG90LkRheU9mV2VlayB8fCBgYmFyYmVyLSR7c2xvdC5CYXJiZXIgfHwgJ25vLWJhcmJlcid9YDtcclxuICAgICAgY29uc3QgbmV4dCA9IGJ1Y2tldHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICAgIG5leHQucHVzaChzbG90KTtcclxuICAgICAgYnVja2V0cy5zZXQoa2V5LCBuZXh0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnVja2V0cy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIHNsb3RzXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZFNsb3RzID0gWy4uLnNsb3RzXS5zb3J0KChhLCBiKSA9PiBub3JtYWxpemVUZXh0KGEuV2VlaykubG9jYWxlQ29tcGFyZShub3JtYWxpemVUZXh0KGIuV2VlaykpKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBzb3J0ZWRTbG90c1swXSB8fCB7fTtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBuZXcgRGF0ZShrZXkpLmdldFRpbWUoKSA6IE51bWJlci5OYU47XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleSxcclxuICAgICAgICAgIHRpdGxlOiBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBmb3JtYXREYXRlSGVhZGluZyhrZXkpIDogcmVmZXJlbmNlLkRheU9mV2VlayB8fCAn0JHQtdC3INC00LDRgtGLJyxcclxuICAgICAgICAgIGJhZGdlOiBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBmb3JtYXREYXRlQmFkZ2VMYWJlbChrZXkpIDogcmVmZXJlbmNlLkRheU9mV2VlayB8fCAn4oCUJyxcclxuICAgICAgICAgIHNvcnRWYWx1ZTogTnVtYmVyLmlzRmluaXRlKHRpbWVzdGFtcCkgPyB0aW1lc3RhbXAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgIHNsb3RzOiBzb3J0ZWRTbG90cyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW3Jvd3NdKTtcclxuXHJcbiAgaWYgKCFncm91cGVkQnlEYXRlLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KDQsNGB0L/QuNGB0LDQvdC40LUg0L/Rg9GB0YLQvi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIHtncm91cGVkQnlEYXRlLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICA8c2VjdGlvbiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzgwIGJnLXNsYXRlLTk1MC8zMCBwLTQgc2hhZG93LWlubmVyIHNoYWRvdy1ibGFjay8xMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjRlbV0gdGV4dC1zbGF0ZS01MDBcIj57Z3JvdXAuYmFkZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57Z3JvdXAudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTIuNSBweS0wLjUgdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICB7Z3JvdXAuc2xvdHMubGVuZ3RofSB7cGx1cmFsaXplKGdyb3VwLnNsb3RzLmxlbmd0aCwgWyfRgdC70L7RgicsICfRgdC70L7RgtCwJywgJ9GB0LvQvtGC0L7QsiddKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAge2dyb3VwLnNsb3RzLm1hcCgoc2xvdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Nsb3QuaWQgfHwgYCR7c2xvdC5CYXJiZXIgfHwgJ25vLWJhcmJlcid9LSR7c2xvdC5EYXRlIHx8IHNsb3QuRGF5T2ZXZWVrIHx8IHNsb3QuV2Vla31gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAgYmctc2xhdGUtOTUwLzUwIHAtMyB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+e3Nsb3QuRGF5T2ZXZWVrIHx8ICfQlNC10L3RjCDQvdC1INGD0LrQsNC30LDQvSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57c2xvdC5CYXJiZXIgfHwgJ9Cd0LUg0L3QsNC30L3QsNGH0LXQvSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Nsb3QuV2VlayB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNTAwXCI+e3Nsb3QuRGF0ZSA/IGZvcm1hdERhdGUoc2xvdC5EYXRlKSA6ICfQkdC10Lcg0LTQsNGC0YsnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlZGl0YWJsZUNvbHVtbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBncmlkIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdGFibGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7c2xvdC5pZCB8fCBzbG90LkRhdGV9LSR7Y29sdW1uLmtleX1gfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC82MCBiZy1zbGF0ZS05NTAvNjAgcHgtMiBweS0xLjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlQ2VsbCByZWNvcmQ9e3Nsb3R9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IHRhYmxlSWQ9XCJTY2hlZHVsZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHBvaW50bWVudHNMaXN0ID0gKHsgZ3JvdXBzID0gW10sIG9uT3BlbiwgY29sdW1ucyA9IFtdLCBoaWRkZW5Db2x1bW5zID0gW10gfSkgPT4ge1xyXG4gIGlmICghZ3JvdXBzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JfQsNC/0LjRgdC10Lkg0L/QvtC60LAg0L3QtdGCLjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpLCBbY29sdW1ucywgaGlkZGVuQ29sdW1uc10pO1xyXG4gIGNvbnN0IHJlbmRlckNvbHVtblZhbHVlID0gKHJlY29yZCwgY29sdW1uKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHJlY29yZFtjb2x1bW4ua2V5XTtcclxuICAgIHN3aXRjaCAoY29sdW1uLmtleSkge1xyXG4gICAgICBjYXNlICdEYXRlJzpcclxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSkgfHwgJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1RpbWUnOiB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gW3N0YXJ0IHx8IHZhbHVlIHx8ICctJywgZW5kID8gYNC00L4gJHtlbmR9YCA6ICcnXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHZhbHVlKSB8fCAn4oCUJztcclxuICAgICAgY2FzZSAnU2VydmljZXMnOiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwYXJzZU11bHRpVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5sZW5ndGggPyBpdGVtcy5qb2luKCcsICcpIDogJ+KAlCc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnUGhvbmUnOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IGZvcm1hdFBob25lSW5wdXQodmFsdWUpIDogJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1JlbWluZGVyMmhDbGllbnRTZW50JzpcclxuICAgICAgY2FzZSAnUmVtaW5kZXIyaEJhcmJlclNlbnQnOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAxID8gJ9Ce0YLQv9GA0LDQstC70LXQvdC+JyA6ICfigJQnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCAn4oCUJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgPHNlY3Rpb24ga2V5PXtncm91cC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIGxnOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZ2V0UmVjb3JkSWQocmVjb3JkKSB8fCBgJHtncm91cC5rZXl9LSR7cmVjb3JkLkN1c3RvbWVyTmFtZX0tJHtyZWNvcmQuVGltZX1gO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfHwgJy0nO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyhyZWNvcmQuVGltZSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXNMaXN0ID0gcGFyc2VNdWx0aVZhbHVlKHJlY29yZC5TZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk9wZW4/LihyZWNvcmQsIHsgYWxsb3dEZWxldGU6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGZsZXgtY29sIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC80MCBwLTMgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNzAgaG92ZXI6Ymctc2xhdGUtOTAwLzcwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzYwIHNtOnAtNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvNzAgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+e2Zvcm1hdERhdGVCYWRnZUxhYmVsKHJlY29yZC5EYXRlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LTN4bFwiPntzdGFydCB8fCByZWNvcmQuVGltZSB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW5kICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPtC00L4ge2VuZH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBnYXAtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlJywgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzKHN0YXR1c0xhYmVsKSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0xhYmVsIHx8ICfQkdC10Lcg0YHRgtCw0YLRg9GB0LAnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLkJhcmJlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg0JHQsNGA0LHQtdGAOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmVjb3JkLkJhcmJlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGZsZXgtY29sIGdhcC0zIHRleHQtWzEzcHhdIHRleHQtc2xhdGUtMzAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7a2V5fS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAgYmctc2xhdGUtOTUwLzUwIHB4LTIgcHktMS41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LXNsYXRlLTIwMFwiPntyZW5kZXJDb2x1bW5WYWx1ZShyZWNvcmQsIGNvbHVtbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj57cmVjb3JkLkN1c3RvbWVyTmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5zbGljZSgwLCAzKS5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YCR7c2VydmljZX0tJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtOTAwLzcwIHB4LTIgcHktMC41IHRleHQtWzExcHhdIHRleHQtc2xhdGUtMjAwIHNtOnRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lmxlbmd0aCA+IDMgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj4re3NlcnZpY2VzTGlzdC5sZW5ndGggLSAzfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPtCj0YHQu9GD0LPQuCDQvdC1INGD0LrQsNC30LDQvdGLPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRGF0YVRhYmxlID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHJvd3MsXHJcbiAgY29sdW1ucyxcclxuICBoaWRkZW5Db2x1bW5zLFxyXG4gIHNvcnRDb25maWcsXHJcbiAgb25Tb3J0LFxyXG4gIG9uVXBkYXRlLFxyXG4gIG9uRGVsZXRlLFxyXG4gIG9wdGlvbnMsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBvbk9wZW5BcHBvaW50bWVudCxcclxuICBncm91cEJ5RGF0ZSA9IHRydWUsXHJcbn0pID0+IHtcclxuICBpZiAoIXJvd3MubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LfQsNC/0LjRgdC10LkuPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZpc2libGVDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IGlzQXBwb2ludG1lbnRzVGFibGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuICBjb25zdCBjYW5Hcm91cEFwcG9pbnRtZW50cyA9IGlzQXBwb2ludG1lbnRzVGFibGUgJiYgZ3JvdXBCeURhdGUgJiYgKCFzb3J0Q29uZmlnIHx8IHNvcnRDb25maWcua2V5ID09PSAnRGF0ZScpO1xyXG4gIGNvbnN0IGdyb3VwZWRSb3dzID0gaXNBcHBvaW50bWVudHNUYWJsZVxyXG4gICAgPyBjYW5Hcm91cEFwcG9pbnRtZW50c1xyXG4gICAgICA/IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMocm93cywgc29ydENvbmZpZz8uZGlyZWN0aW9uIHx8ICdkZXNjJylcclxuICAgICAgOiBbeyBrZXk6ICdkZWZhdWx0JywgbGFiZWw6IG51bGwsIHJvd3MgfV1cclxuICAgIDogW3sga2V5OiAnZGVmYXVsdCcsIGxhYmVsOiBudWxsLCByb3dzIH1dO1xyXG5cclxuICBpZiAoaXNBcHBvaW50bWVudHNUYWJsZSkge1xyXG4gICAgcmV0dXJuIDxBcHBvaW50bWVudHNMaXN0IGdyb3Vwcz17Z3JvdXBlZFJvd3N9IG9uT3Blbj17b25PcGVuQXBwb2ludG1lbnR9IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnKSB7XHJcbiAgICByZXR1cm4gPFNjaGVkdWxlc0JvYXJkIHJvd3M9e3Jvd3N9IGNvbHVtbnM9e3Zpc2libGVDb2x1bW5zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9wdGlvbnM9e29wdGlvbnN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgIHtyb3dzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVjb3JkSWQgPSBnZXRSZWNvcmRJZChyZWNvcmQpO1xyXG4gICAgICAgICAgY29uc3QgY2FyZEtleSA9IHJlY29yZElkIHx8IGAke3RhYmxlSWR9LWNhcmQtJHtpbmRleH1gO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGFydGljbGUga2V5PXtjYXJkS2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzYwIHAtNCBzaGFkb3ctbGcgc2hhZG93LWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGFibGVJZCA9PT0gJ1VzZXJzJyA/ICfQmtC70LjQtdC90YInIDogdGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgPyAn0KDQsNGB0L/QuNGB0LDQvdC40LUnIDogJ9CX0LDQv9C40YHRjCd9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntyZWNvcmRbdmlzaWJsZUNvbHVtbnNbMF0/LmtleV0gfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItcm9zZS02MDAvNzAgcC0yIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtjYXJkS2V5fS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwic3BhY2UteS0xIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzgwIGJnLXNsYXRlLTk1MC81MCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtyZWNvcmR9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9uT3BlblByb2ZpbGU9e29uT3BlblByb2ZpbGV9IHRhYmxlSWQ9e3RhYmxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gMnhsOmJsb2NrIC1teC00IG92ZXJmbG93LXgtYXV0byBvdmVyZmxvdy15LXZpc2libGUgcGItMyBzbTpteC0wXCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LVs3NjBweF0gdy1mdWxsIHRhYmxlLWF1dG8gdGV4dC1bMTNweF0gbGVhZGluZy10aWdodCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3B4LTIgcHktMS41IHdoaXRlc3BhY2Utbm93cmFwJywgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInLCBjb2x1bW4ubWluV2lkdGgpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb2x1bW4uc29ydGFibGUgIT09IGZhbHNlICYmIG9uU29ydChjb2x1bW4ua2V5KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yJywgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAnanVzdGlmeS1jZW50ZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSAmJiA8U29ydEluZGljYXRvciBkaXJlY3Rpb249e3NvcnRDb25maWc/LmtleSA9PT0gY29sdW1uLmtleSA/IHNvcnRDb25maWcuZGlyZWN0aW9uIDogbnVsbH0gLz59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICB7b25EZWxldGUgJiYgPHRoIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHRleHQtcmlnaHRcIiBhcmlhLWxhYmVsPVwi0JTQtdC50YHRgtCy0LjRj1wiIC8+fVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2dyb3VwZWRSb3dzLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtncm91cC5rZXl9PlxyXG4gICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3Zpc2libGVDb2x1bW5zLmxlbmd0aCArIChvbkRlbGV0ZSA/IDEgOiAwKX0gY2xhc3NOYW1lPVwicHgtMiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtnZXRSZWNvcmRJZChyZWNvcmQpfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3B4LTIgcHktMS41IGFsaWduLXRvcCB0ZXh0LVsxM3B4XSBsZWFkaW5nLXNudWcgc206dGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5ub1dyYXAgPyAnd2hpdGVzcGFjZS1ub3dyYXAnIDogJ3doaXRlc3BhY2Utbm9ybWFsIGJyZWFrLXdvcmRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMCBweC0yIHB5LTEuNSB0ZXh0LXhzIHRleHQtcm9zZS0zMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQ2xpZW50c0xpc3QgPSAoeyBjbGllbnRzID0gW10sIGJhcmJlcnMgPSBbXSwgb25VcGRhdGUsIG9uRGVsZXRlLCBmZXRjaEhpc3RvcnksIG9uUmVxdWVzdENvbmZpcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIHJlY29yZDogbnVsbCwgaGlzdG9yeTogW10sIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycgfSk7XHJcbiAgY29uc3QgYmFyYmVyT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gKEFycmF5LmlzQXJyYXkoYmFyYmVycykgPyBiYXJiZXJzLmZpbHRlcihCb29sZWFuKSA6IFtdKSwgW2JhcmJlcnNdKTtcclxuXHJcbiAgY29uc3Qgb3BlbkNsaWVudE1vZGFsID0gYXN5bmMgKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldE1vZGFsU3RhdGUoeyBvcGVuOiB0cnVlLCByZWNvcmQ6IHsgLi4uY2xpZW50IH0sIGhpc3Rvcnk6IFtdLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogJycgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZmV0Y2hIaXN0b3J5ICYmIGNsaWVudC5OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGZldGNoSGlzdG9yeShjbGllbnQpO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBidWlsZFZpc2l0SGlzdG9yeShwcm9maWxlPy5hcHBvaW50bWVudHMgfHwgW10pO1xyXG4gICAgICAgIHNldE1vZGFsU3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGhpc3RvcnksIGxvYWRpbmc6IGZhbHNlIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSwgaGlzdG9yeTogW10gfSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC40YHRgtC+0YDQuNGOJyB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VDbGllbnRNb2RhbCA9ICgpID0+IHNldE1vZGFsU3RhdGUoeyBvcGVuOiBmYWxzZSwgcmVjb3JkOiBudWxsLCBoaXN0b3J5OiBbXSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiAnJyB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCByZWNvcmQ6IHsgLi4ucHJldi5yZWNvcmQsIFtmaWVsZF06IHZhbHVlIH0gfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIW1vZGFsU3RhdGUucmVjb3JkIHx8IHR5cGVvZiBvblVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjb3JkSWQgPSBnZXRSZWNvcmRJZChtb2RhbFN0YXRlLnJlY29yZCk7XHJcbiAgICBpZiAoIXJlY29yZElkKSByZXR1cm47XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBOYW1lOiBtb2RhbFN0YXRlLnJlY29yZC5OYW1lLFxyXG4gICAgICBQaG9uZTogbW9kYWxTdGF0ZS5yZWNvcmQuUGhvbmUsXHJcbiAgICAgIFRlbGVncmFtSUQ6IG1vZGFsU3RhdGUucmVjb3JkLlRlbGVncmFtSUQsXHJcbiAgICAgIEJhcmJlcjogbW9kYWxTdGF0ZS5yZWNvcmQuQmFyYmVyLFxyXG4gICAgfTtcclxuICAgIG9uVXBkYXRlKHJlY29yZElkLCBwYXlsb2FkKTtcclxuICAgIGNsb3NlQ2xpZW50TW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW1vZGFsU3RhdGUucmVjb3JkIHx8IHR5cGVvZiBvbkRlbGV0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgb25SZXF1ZXN0Q29uZmlybT8uKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQutC70LjQtdC90YLQsD8nLFxyXG4gICAgICBtZXNzYWdlOiBg0JrQu9C40LXQvdGCIMKrJHttb2RhbFN0YXRlLnJlY29yZC5OYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAob25SZXF1ZXN0Q29uZmlybSAmJiAhY29uZmlybWVkKSByZXR1cm47XHJcbiAgICBhd2FpdCBvbkRlbGV0ZShtb2RhbFN0YXRlLnJlY29yZCwgeyBza2lwQ29uZmlybTogdHJ1ZSB9KTtcclxuICAgIGNsb3NlQ2xpZW50TW9kYWwoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAge2NsaWVudHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KHQv9C40YHQvtC6INC60LvQuNC10L3RgtC+0LIg0L/Rg9GB0YIuPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzQwIHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTkwMFwiPlxyXG4gICAgICAgICAgICB7Y2xpZW50cy5tYXAoKGNsaWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjbGllbnROdW1iZXIgPSBTdHJpbmcoaW5kZXggKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBob25lRGlzcGxheSA9IGNsaWVudC5QaG9uZSA/IGZvcm1hdFBob25lSW5wdXQoY2xpZW50LlBob25lKSA6ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlbGVncmFtSGFuZGxlID0gZm9ybWF0VGVsZWdyYW1IYW5kbGUoY2xpZW50LlRlbGVncmFtSUQpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkNsaWVudE1vZGFsKGNsaWVudCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC0yIHB4LTQgcHktMyB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3ZlcjpiZy1zbGF0ZS05MDAvNjAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAvNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC04IHctOCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctc2xhdGUtOTAwIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjbGllbnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2NsaWVudC5OYW1lIHx8ICfQndC10YIg0LjQvNC10L3QuCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjbGllbnQuQmFyYmVyICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj7Qm9GO0LHQuNC80YvQuSDQsdCw0YDQsdC10YA6IHtjbGllbnQuQmFyYmVyfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LXJpZ2h0IHRleHQtc20gdGV4dC1zbGF0ZS0zMDAgc206YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGhvbmVEaXNwbGF5ICYmIDxwPntwaG9uZURpc3BsYXl9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPnt0ZWxlZ3JhbUhhbmRsZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bW9kYWxTdGF0ZS5yZWNvcmQ/Lk5hbWUgfHwgJ9Ca0LvQuNC10L3Rgid9XHJcbiAgICAgICAgaXNPcGVuPXttb2RhbFN0YXRlLm9wZW59XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VDbGllbnRNb2RhbH1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctM3hsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICB7bW9kYWxTdGF0ZS5yZWNvcmQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUNsaWVudE1vZGFsfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyFtb2RhbFN0YXRlLnJlY29yZCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQutC70LjQtdC90YLQsC48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAg0JjQvNGPXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLk5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdOYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCi0LXQu9C10YTQvtC9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnUGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgVGVsZWdyYW0gSURcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bW9kYWxTdGF0ZS5yZWNvcmQuVGVsZWdyYW1JRCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ1RlbGVncmFtSUQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAg0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5CYXJiZXIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0J3QtSDQstGL0LHRgNCw0L08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2JhcmJlck9wdGlvbnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YmFyYmVyfSB2YWx1ZT17YmFyYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyPC9wPlxyXG4gICAgICAgICAgICAgIDxWaXNpdEhpc3RvcnlMaXN0XHJcbiAgICAgICAgICAgICAgICB2aXNpdHM9e21vZGFsU3RhdGUuaGlzdG9yeX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e21vZGFsU3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGVycm9yPXttb2RhbFN0YXRlLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlPVwi0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LIg0L/Rg9GB0YLQsC5cIlxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0Q2xhc3M9XCJtYXgtaC01NlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENyZWF0ZVJlY29yZE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvblNhdmUsIGNvbHVtbnMsIHRhYmxlTmFtZSwgb3B0aW9ucywgdGFibGVJZCwgY2xpZW50cyA9IFtdLCBoaWRkZW5GaWVsZHMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgZWRpdGFibGVDb2x1bW5zID0gdXNlTWVtbygoKSA9PiBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4uZWRpdGFibGUgIT09IGZhbHNlKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBlZGl0YWJsZUNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5GaWVsZHMuaW5jbHVkZXMoY29sdW1uLmtleSkpLFxyXG4gICAgW2VkaXRhYmxlQ29sdW1ucywgaGlkZGVuRmllbGRzXVxyXG4gICk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge307XHJcbiAgICBlZGl0YWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIHBheWxvYWRbY29sdW1uLmtleV0gPSBjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgPyBbXSA6ICcnO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9LCBbZWRpdGFibGVDb2x1bW5zXSk7XHJcblxyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBpc0FwcG9pbnRtZW50c0NyZWF0ZSA9IHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzT3Blbikgc2V0RHJhZnQoaW5pdGlhbFN0YXRlKTtcclxuICB9LCBbaXNPcGVuLCBpbml0aWFsU3RhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgT2JqZWN0LmVudHJpZXMoZHJhZnQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBwYXlsb2FkW2tleV0gPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgb25TYXZlKHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICBQaG9uZTogY2xpZW50LnBob25lIHx8IHByZXYuUGhvbmUsXHJcbiAgICAgIEJhcmJlcjogcHJldi5CYXJiZXIgfHwgY2xpZW50LnByZWZlcnJlZEJhcmJlciB8fCAnJyxcclxuICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT17YNCd0L7QstCw0Y8g0LfQsNC/0LjRgdGMOiAke3RhYmxlTmFtZX1gfVxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXtcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBkcmFmdFtjb2x1bW4ua2V5XTtcclxuICAgICAgICAgIGlmIChpc0FwcG9pbnRtZW50c0NyZWF0ZSAmJiBjb2x1bW4ua2V5ID09PSAnQ3VzdG9tZXJOYW1lJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDbGllbnRMb29rdXBJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgQ3VzdG9tZXJOYW1lOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7KG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdKS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogcGFyc2VNdWx0aVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW119XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBzZWxlY3RlZCB9KSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LXRgiDQtNCw0L3QvdGL0YVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLmtleSA9PT0gJ1RpbWUnIHx8IGNvbHVtbi5rZXkgPT09ICdXZWVrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ+KAlCcgOiAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0YwnfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57Y29sdW1uLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e2NvbHVtbi50eXBlID09PSAnZGF0ZScgPyAnZGF0ZScgOiAndGV4dCd9IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcm9maWxlTW9kYWwgPSAoeyBzdGF0ZSwgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRzID0gc3RhdGUuZGF0YT8uYXBwb2ludG1lbnRzIHx8IFtdO1xyXG4gIGNvbnN0IHZpc2l0SGlzdG9yeSA9IHVzZU1lbW8oKCkgPT4gYnVpbGRWaXNpdEhpc3RvcnkoYXBwb2ludG1lbnRzKSwgW2FwcG9pbnRtZW50c10pO1xyXG4gIGNvbnN0IHVzZXIgPSBzdGF0ZS5kYXRhPy51c2VyIHx8IG51bGw7XHJcbiAgY29uc3QgcGhvbmVMYWJlbCA9IHVzZXI/LlBob25lID8gZm9ybWF0UGhvbmVJbnB1dCh1c2VyLlBob25lKSA6ICcnO1xyXG4gIGNvbnN0IHBob25lSHJlZiA9IHBob25lTGFiZWwgPyBgdGVsOiR7cGhvbmVMYWJlbC5yZXBsYWNlKC9bXlxcZCtdL2csICcnKX1gIDogJyc7XHJcbiAgY29uc3QgdGVsZWdyYW1IYW5kbGUgPSB1c2VyPy5UZWxlZ3JhbUlEID8gZm9ybWF0VGVsZWdyYW1IYW5kbGUodXNlci5UZWxlZ3JhbUlEKSA6ICcnO1xyXG4gIGNvbnN0IHRlbGVncmFtSHJlZiA9IHVzZXI/LlRlbGVncmFtSUQgPyBidWlsZFRlbGVncmFtTGluayh1c2VyLlRlbGVncmFtSUQpIDogJyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e3N0YXRlLmRhdGE/LnVzZXI/Lk5hbWUgfHwgJ9Cf0YDQvtGE0LjQu9GMINC60LvQuNC10L3RgtCwJ31cclxuICAgICAgaXNPcGVuPXtzdGF0ZS5vcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9ezxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+fVxyXG4gICAgPlxyXG4gICAgICB7c3RhdGUubG9hZGluZyAmJiA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0JfQsNCz0YDRg9C20LDRjiDQv9GA0L7RhNC40LvRjC4uLlwiIC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgc3RhdGUuZGF0YT8uZXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e3N0YXRlLmRhdGEuZXJyb3J9IC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgdXNlciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QotC10LvQtdGE0L7QvTo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICB7cGhvbmVMYWJlbCAmJiBwaG9uZUhyZWYgPyAoXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwaG9uZUhyZWZ9IGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3Bob25lTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICfigJQnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj5UZWxlZ3JhbTo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGUgJiYgdGVsZWdyYW1IcmVmID8gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dGVsZWdyYW1IcmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICfigJQnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7Qm9GO0LHQuNC80YvQuSDQsdCw0YDQsdC10YA6PC9zcGFuPiB7dXNlci5CYXJiZXIgfHwgJ+KAlCd9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPFZpc2l0SGlzdG9yeUxpc3QgdmlzaXRzPXt2aXNpdEhpc3Rvcnl9IGVtcHR5TWVzc2FnZT1cItCX0LDQv9C40YHQtdC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC5INCz0L7QtCDQvdC10YIuXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhY2t1cHNQYW5lbCA9ICh7IGJhY2t1cHMgPSBbXSwgb25SZXN0b3JlLCBvbkNyZWF0ZSwgb25EZWxldGUgfSkgPT4gKFxyXG4gIDxTZWN0aW9uQ2FyZFxyXG4gICAgdGl0bGU9XCLQoNC10LfQtdGA0LLQvdGL0LUg0LrQvtC/0LjQuFwiXHJcbiAgICBhY3Rpb25zPXtcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxuICA+XHJcbiAgICB7YmFja3Vwcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0L/Rg9GB0YLQsC48L3A+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgIHtiYWNrdXBzLm1hcCgoYmFja3VwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IGZvcm1hdEJhY2t1cExhYmVsKGJhY2t1cCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YmFja3VwfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntsYWJlbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+e2JhY2t1cH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN0b3JlKGJhY2t1cCl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGJhY2t1cCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCBjbGFzc05hbWU9XCJtci0xIGgtMy41IHctMy41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApfVxyXG4gIDwvU2VjdGlvbkNhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBBcHBvaW50bWVudE1vZGFsID0gKHsgb3BlbiwgYXBwb2ludG1lbnQsIG9wdGlvbnMgPSB7fSwgb25DbG9zZSwgb25TYXZlLCBvbkRlbGV0ZSwgY2FuRGVsZXRlID0gZmFsc2UsIGlzTmV3ID0gZmFsc2UsIGNsaWVudHMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgYnVpbGREcmFmdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHJlY29yZCkgPT4gKHJlY29yZCA/IHsgLi4ucmVjb3JkLCBVc2VySUQ6IHJlY29yZC5Vc2VySUQgfHwgcmVjb3JkLnVzZXJJZCB8fCAnJywgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyZWNvcmQuU3RhdHVzKSB9IDogbnVsbCksXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XG4gIGNvbnN0IFtkZXRhaWxzT3Blbiwgc2V0RGV0YWlsc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvcGVuKSByZXR1cm47XG4gICAgc2V0RHJhZnQoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xuICAgIHNldERldGFpbHNPcGVuKGZhbHNlKTtcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XG5cbiAgaWYgKCFvcGVuIHx8ICFkcmFmdCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc2VydmljZXNTZWxlY3Rpb24gPSBwYXJzZU11bHRpVmFsdWUoZHJhZnQuU2VydmljZXMpO1xuICBjb25zdCBhY3Rpb25CdXR0b25DbGFzcyA9ICdyb3VuZGVkLWxnIHB4LTIuNSBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIHNtOnB4LTQgc206cHktMiBzbTp0ZXh0LXNtJztcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcbiAgY29uc3QgaXNSZW1pbmRlclNlbnQgPSAodmFsdWUpID0+IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09IDEgfHwgdmFsdWUgPT09ICcxJztcbiAgY29uc3QgZ2V0UmVtaW5kZXJMYWJlbCA9ICh2YWx1ZSkgPT4gKGlzUmVtaW5kZXJTZW50KHZhbHVlKSA/ICfQntGC0L/RgNCw0LLQu9C10L3QvicgOiAn0J3QtSDQvtGC0L/RgNCw0LLQu9C10L3QvicpO1xuICBjb25zdCBnZXRSZW1pbmRlckFjY2VudCA9ICh2YWx1ZSkgPT4gKGlzUmVtaW5kZXJTZW50KHZhbHVlKSA/ICd0ZXh0LWVtZXJhbGQtMzAwJyA6ICd0ZXh0LXNsYXRlLTUwMCcpO1xuICBjb25zdCByZWNvcmREZXRhaWxzID0gW1xuICAgIHsga2V5OiAndXNlcicsIGxhYmVsOiAnVXNlcklEJywgdmFsdWU6IGRyYWZ0LlVzZXJJRCB8fCAn4oCUJywgYWNjZW50OiBkcmFmdC5Vc2VySUQgPyAndGV4dC13aGl0ZScgOiAndGV4dC1zbGF0ZS01MDAnIH0sXG4gICAge1xuICAgICAga2V5OiAnY2xpZW50UmVtaW5kZXInLFxuICAgICAgbGFiZWw6ICfQmtC70LjQtdC90YLRgyDQvtGC0L/RgNCw0LLQu9C10L3QviAoMtGHKScsXG4gICAgICB2YWx1ZTogZ2V0UmVtaW5kZXJMYWJlbChkcmFmdC5SZW1pbmRlcjJoQ2xpZW50U2VudCksXG4gICAgICBhY2NlbnQ6IGdldFJlbWluZGVyQWNjZW50KGRyYWZ0LlJlbWluZGVyMmhDbGllbnRTZW50KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2JhcmJlclJlbWluZGVyJyxcbiAgICAgIGxhYmVsOiAn0JzQsNGB0YLQtdGA0YMg0L7RgtC/0YDQsNCy0LvQtdC90L4gKDLRhyknLFxuICAgICAgdmFsdWU6IGdldFJlbWluZGVyTGFiZWwoZHJhZnQuUmVtaW5kZXIyaEJhcmJlclNlbnQpLFxuICAgICAgYWNjZW50OiBnZXRSZW1pbmRlckFjY2VudChkcmFmdC5SZW1pbmRlcjJoQmFyYmVyU2VudCksXG4gICAgfSxcbiAgXTtcblxyXG4gIGNvbnN0IHN1Ym1pdERyYWZ0ID0gKG5leHREcmFmdCkgPT4ge1xyXG4gICAgaWYgKCFuZXh0RHJhZnQpIHJldHVybjtcclxuICAgIG9uU2F2ZSh7XHJcbiAgICAgIGlkOiBuZXh0RHJhZnQuaWQsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBDdXN0b21lck5hbWU6IG5leHREcmFmdC5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IG5leHREcmFmdC5QaG9uZSxcclxuICAgICAgICBCYXJiZXI6IG5leHREcmFmdC5CYXJiZXIsXHJcbiAgICAgICAgRGF0ZTogbmV4dERyYWZ0LkRhdGUsXHJcbiAgICAgICAgVGltZTogbmV4dERyYWZ0LlRpbWUsXHJcbiAgICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShuZXh0RHJhZnQuU3RhdHVzKSxcclxuICAgICAgICBTZXJ2aWNlczogbmV4dERyYWZ0LlNlcnZpY2VzLFxyXG4gICAgICAgIFVzZXJJRDogbmV4dERyYWZ0LlVzZXJJRCB8fCAnJyxcclxuICAgICAgfSxcclxuICAgICAgaXNOZXcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiBzdWJtaXREcmFmdChkcmFmdCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1hcmtDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWRyYWZ0KSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0RHJhZnQgPSB7IC4uLmRyYWZ0LCBTdGF0dXM6ICfQktGL0L/QvtC70L3QtdC90LAnIH07XHJcbiAgICBzZXREcmFmdChuZXh0RHJhZnQpO1xyXG4gICAgc3VibWl0RHJhZnQobmV4dERyYWZ0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4ge1xyXG4gICAgICBpZiAoIXByZXYpIHJldHVybiBwcmV2O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgICBQaG9uZTogY2xpZW50LnBob25lIHx8IHByZXYuUGhvbmUsXHJcbiAgICAgICAgQmFyYmVyOiBwcmV2LkJhcmJlciB8fCBjbGllbnQucHJlZmVycmVkQmFyYmVyIHx8ICcnLFxyXG4gICAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT17aXNOZXcgPyAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnIDogYNCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LfQsNC/0LjRgdC4ICR7ZHJhZnQuQ3VzdG9tZXJOYW1lIHx8ICcnfWB9XHJcbiAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWVuZCBnYXAtMiBzbTpnYXAtM1wiPlxuICAgICAgICAgIHshaXNOZXcgJiYgY2FuRGVsZXRlICYmIChcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGU/LihkcmFmdCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhhY3Rpb25CdXR0b25DbGFzcywgJ2JvcmRlciBib3JkZXItcm9zZS02MDAgdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMCcpfT5cbiAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFpc05ldyAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1hcmtDb21wbGV0ZWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhhY3Rpb25CdXR0b25DbGFzcywgJ2JvcmRlciBib3JkZXItZW1lcmFsZC01MDAgdGV4dC1lbWVyYWxkLTIwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMC8xMCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQktGL0L/QvtC70L3QtdC90L5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aW9uQnV0dG9uQ2xhc3MsICdib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCB0ZXh0LXdoaXRlJyl9PlxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhhY3Rpb25CdXR0b25DbGFzcywgJ2JnLWVtZXJhbGQtNjAwIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDAnKX0+XG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcbiAgICAgICAgICBsYWJlbD1cItCY0LzRjyDQutC70LjQtdC90YLQsFwiXG4gICAgICAgICAgdmFsdWU9e2RyYWZ0LkN1c3RvbWVyTmFtZSB8fCAnJ31cbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxuICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XG4gICAgICAgICAgb25TZWxlY3RDbGllbnQ9e2hhbmRsZUNsaWVudEF1dG9GaWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0KLQtdC70LXRhNC+0L08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZHJhZnQuUGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnUGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis3Li4uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuQmFyYmVyIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ0JhcmJlcicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0JHQsNGA0LHQtdGAPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuYmFyYmVycyB8fCBbXSkubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAge2JhcmJlcn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17ZHJhZnQuRGF0ZSA/IFN0cmluZyhkcmFmdC5EYXRlKS5zbGljZSgwLCAxMCkgOiAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdEYXRlJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC0xMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDxUaW1lUmFuZ2VQaWNrZXIgdmFsdWU9e2RyYWZ0LlRpbWUgfHwgJyd9IG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ1RpbWUnLCBuZXh0VmFsdWUpfSBwbGFjZWhvbGRlcj1cItCS0YvQsdGA0LDRgtGMINCy0YDQtdC80Y9cIiAvPlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtkcmFmdC5TdGF0dXMgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnU3RhdHVzJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC0xMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7QodGC0LDRgtGD0YE8L29wdGlvbj5cclxuICAgICAgICAgIHsob3B0aW9ucy5zdGF0dXNlcyB8fCBbXSkubWFwKChzdGF0dXMpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N0YXR1c30gdmFsdWU9e3N0YXR1c30+XHJcbiAgICAgICAgICAgICAge3N0YXR1c31cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXG4gICAgICAgICAgICBsYWJlbD1cItCj0YHQu9GD0LPQuFwiXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zLnNlcnZpY2VzIHx8IFtdfVxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gaGFuZGxlQ2hhbmdlKCdTZXJ2aWNlcycsIHNlbGVjdGVkLmpvaW4oJywgJykpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINGD0YHQu9GD0LNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzYwXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREZXRhaWxzT3BlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcHgtNCBweS0yLjUgdGV4dC1sZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+0JTQsNC90L3Ri9C1INC+INC30LDQv9C40YHQuDwvcD5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC00IHctNCB0ZXh0LXNsYXRlLTQwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybScsIGRldGFpbHNPcGVuID8gJ3JvdGF0ZS0xODAnIDogJ3JvdGF0ZS0wJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiA5bDYgNiA2LTZcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ292ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAnLCBkZXRhaWxzT3BlbiA/ICdtYXgtaC02NCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwJyA6ICdtYXgtaC0wJyl9PlxuICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtc2xhdGUtODAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICB7cmVjb3JkRGV0YWlscy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ua2V5fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcHktMlwiPlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e2l0ZW0ubGFiZWx9PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0ZXh0LXJpZ2h0IGZvbnQtc2VtaWJvbGQnLCBpdGVtLmFjY2VudCl9PntpdGVtLnZhbHVlfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbmNvbnN0IFRhYmxlc1dvcmtzcGFjZSA9ICh7XHJcbiAgYXBpUmVxdWVzdCxcclxuICBzaGFyZWRPcHRpb25zLFxyXG4gIG9uT3B0aW9uc1VwZGF0ZSxcclxuICBvbk9wZW5Qcm9maWxlLFxyXG4gIG9uT3BlbkFwcG9pbnRtZW50UmVjb3JkLFxyXG4gIGNsaWVudHMgPSBbXSxcclxuICBjdXJyZW50VXNlciA9IG51bGwsXHJcbiAgbGl2ZUFwcG9pbnRtZW50cyA9IG51bGwsXHJcbiAgbGl2ZVVwZGF0ZWRBdCA9IG51bGwsXHJcbiAgYmFyYmVycyA9IFtdLFxyXG4gIHNlcnZpY2VzID0gW10sXHJcbiAgb25CYXJiZXJGaWVsZENoYW5nZSxcclxuICBvblNhdmVCYXJiZXIsXHJcbiAgb25BZGRCYXJiZXIsXHJcbiAgb25EZWxldGVCYXJiZXIsXHJcbiAgb25TZXJ2aWNlRmllbGRDaGFuZ2UsXHJcbiAgb25TZXJ2aWNlUHJpY2VDaGFuZ2UsXHJcbiAgb25EZWxldGVTZXJ2aWNlLFxyXG4gIG9uQWRkU2VydmljZSxcclxuICBvbkFjdGl2ZVRhYmxlQ2hhbmdlLFxyXG4gIHByZWZlcnJlZFRhYmxlID0gbnVsbCxcclxuICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQsXHJcbiAgb25SZXF1ZXN0Q29uZmlybSA9IG51bGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBbYWN0aXZlVGFibGUsIHNldEFjdGl2ZVRhYmxlXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmFjdGl2ZScsICdBcHBvaW50bWVudHMnKTtcclxuICBjb25zdCBbdGFibGVzLCBzZXRUYWJsZXNdID0gdXNlU3RhdGUoKCkgPT4gREFUQV9UQUJMRVMucmVkdWNlKChhY2MsIHRhYmxlKSA9PiAoeyAuLi5hY2MsIFt0YWJsZV06IFtdIH0pLCB7fSkpO1xyXG4gIGNvbnN0IFtkcm9wZG93bk9wdGlvbnMsIHNldERyb3Bkb3duT3B0aW9uc10gPSB1c2VTdGF0ZShzaGFyZWRPcHRpb25zIHx8IHsgYmFyYmVyczogW10sIHNlcnZpY2VzOiBbXSwgc3RhdHVzZXM6IFtdIH0pO1xyXG4gIGNvbnN0IFt0YWJsZUVycm9yLCBzZXRUYWJsZUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNGZXRjaGluZywgc2V0SXNGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJhcmJlciwgc2V0U2VsZWN0ZWRCYXJiZXJdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuYmFyYmVyRmlsdGVyJywgJ2FsbCcpO1xyXG4gIGNvbnN0IFtoaWRkZW5TdGF0dXNlcywgc2V0SGlkZGVuU3RhdHVzZXNdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuaGlkZGVuU3RhdHVzZXMnLCBbXSk7XHJcbiAgY29uc3QgW2hpZGRlbkNvbHVtbnNNYXAsIHNldEhpZGRlbkNvbHVtbnNNYXBdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuaGlkZGVuQ29sdW1ucycsIHtcclxuICAgIEFwcG9pbnRtZW50czogWydVc2VySUQnXSxcclxuICAgIFNjaGVkdWxlczogW10sXHJcbiAgICBVc2VyczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NvcnRDb25maWdzLCBzZXRTb3J0Q29uZmlnc10gPSB1c2VMb2NhbFN0b3JhZ2UoXHJcbiAgICAndGFibGVzLnNvcnRDb25maWdzJyxcclxuICAgIERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBUQUJMRV9DT05GSUdbdGFibGVdPy5kZWZhdWx0U29ydCB8fCBudWxsIH0pLCB7fSlcclxuICApO1xyXG4gIGNvbnN0IFtjcmVhdGVNb2RhbE9wZW4sIHNldENyZWF0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXN0QXBwb2ludG1lbnRzLCBzZXRTaG93UGFzdEFwcG9pbnRtZW50c10gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5zaG93UGFzdEFwcG9pbnRtZW50cycsIHRydWUpO1xyXG4gIGNvbnN0IFtncm91cEFwcG9pbnRtZW50c0J5RGF0ZSwgc2V0R3JvdXBBcHBvaW50bWVudHNCeURhdGVdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuZ3JvdXBBcHBvaW50bWVudHNCeURhdGUnLCB0cnVlKTtcclxuICBjb25zdCBhcHBvaW50bWVudFRlbXBsYXRlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICBDdXN0b21lck5hbWU6ICcnLFxyXG4gICAgICBQaG9uZTogJycsXHJcbiAgICAgIEJhcmJlcjogcGlja0JhcmJlckZvclVzZXIoY3VycmVudFVzZXIsIGRyb3Bkb3duT3B0aW9ucy5iYXJiZXJzIHx8IFtdKSxcclxuICAgICAgRGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcclxuICAgICAgVGltZTogJycsXHJcbiAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoKGRyb3Bkb3duT3B0aW9ucy5zdGF0dXNlcyAmJiBkcm9wZG93bk9wdGlvbnMuc3RhdHVzZXNbMF0pIHx8ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcpLFxyXG4gICAgICBTZXJ2aWNlczogJycsXHJcbiAgICAgIFVzZXJJRDogJycsXHJcbiAgICB9KSxcclxuICAgIFtkcm9wZG93bk9wdGlvbnMsIGN1cnJlbnRVc2VyPy5kaXNwbGF5TmFtZSwgY3VycmVudFVzZXI/LnVzZXJuYW1lXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hhcmVkT3B0aW9ucykge1xyXG4gICAgICBzZXREcm9wZG93bk9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnNoYXJlZE9wdGlvbnMsXHJcbiAgICAgICAgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3Qoc2hhcmVkT3B0aW9ucy5zdGF0dXNlcyB8fCBbXSksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzaGFyZWRPcHRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlVGFibGUgPT09ICdTY2hlZHVsZXMnKSB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYmxlKCdCYXJiZXJzJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXSkge1xyXG4gICAgICBzZXRBY3RpdmVUYWJsZSgnQXBwb2ludG1lbnRzJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25BY3RpdmVUYWJsZUNoYW5nZT8uKGFjdGl2ZVRhYmxlKTtcclxuICB9LCBbYWN0aXZlVGFibGUsIG9uQWN0aXZlVGFibGVDaGFuZ2VdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcHJlZmVycmVkVGFibGUpIHJldHVybjtcclxuICAgIGNvbnN0IG5leHRUYWJsZSA9IHByZWZlcnJlZFRhYmxlID09PSAnU2NoZWR1bGVzJyA/ICdCYXJiZXJzJyA6IHByZWZlcnJlZFRhYmxlO1xyXG4gICAgaWYgKFRBQkxFX09SREVSLmluY2x1ZGVzKG5leHRUYWJsZSkpIHtcclxuICAgICAgc2V0QWN0aXZlVGFibGUobmV4dFRhYmxlKTtcclxuICAgIH1cclxuICAgIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZD8uKCk7XHJcbiAgfSwgW3ByZWZlcnJlZFRhYmxlLCBzZXRBY3RpdmVUYWJsZSwgb25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRIaWRkZW5TdGF0dXNlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gQXJyYXkuZnJvbShuZXcgU2V0KHByZXYubWFwKChzdGF0dXMpID0+IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykpLmZpbHRlcihCb29sZWFuKSkpO1xyXG4gICAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IHByZXYubGVuZ3RoICYmIG5vcm1hbGl6ZWQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IHByZXZbaW5kZXhdKSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gICAgfSk7XHJcbiAgfSwgW3NldEhpZGRlblN0YXR1c2VzXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVGFibGVzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcclxuICAgIHNldFRhYmxlRXJyb3IoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIC4uLkRBVEFfVEFCTEVTLm1hcCgodGFibGUpID0+IGFwaVJlcXVlc3QoYC8ke3RhYmxlfWApKSxcclxuICAgICAgICBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHMnKSxcclxuICAgICAgXSk7XHJcbiAgICAgIGNvbnN0IG5leHRUYWJsZXMgPSB7fTtcclxuICAgICAgREFUQV9UQUJMRVMuZm9yRWFjaCgodGFibGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IHJlc3BvbnNlc1tpbmRleF0gfHwgW107XHJcbiAgICAgICAgbmV4dFRhYmxlc1t0YWJsZV0gPSB0YWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyByZWNvcmRzLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocm93LlN0YXR1cykgfSkpIDogcmVjb3JkcztcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJhd09wdGlvbnMgPSByZXNwb25zZXNbREFUQV9UQUJMRVMubGVuZ3RoXSB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9O1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHtcclxuICAgICAgICAuLi5yYXdPcHRpb25zLFxyXG4gICAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KHJhd09wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUYWJsZXMobmV4dFRhYmxlcyk7XHJcbiAgICAgIHNldERyb3Bkb3duT3B0aW9ucyhub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICAgIG9uT3B0aW9uc1VwZGF0ZT8uKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RhYmxlIGZldGNoIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgtCw0LHQu9C40YbRiycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaVJlcXVlc3QsIG9uT3B0aW9uc1VwZGF0ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUYWJsZXMoKTtcclxuICB9LCBbZmV0Y2hUYWJsZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXZlQXBwb2ludG1lbnRzKSkgcmV0dXJuO1xyXG4gICAgc2V0VGFibGVzKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBBcHBvaW50bWVudHM6IGxpdmVBcHBvaW50bWVudHMubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgLi4ucm93LFxyXG4gICAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocm93LlN0YXR1cyksXHJcbiAgICAgIH0pKSxcclxuICAgIH0pKTtcclxuICB9LCBbbGl2ZUFwcG9pbnRtZW50cywgbGl2ZVVwZGF0ZWRBdF0pO1xyXG5cclxuICBjb25zdCBjdXJyZW50Q29sdW1ucyA9IFRBQkxFX0NPTFVNTlNbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSBoaWRkZW5Db2x1bW5zTWFwW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IGN1cnJlbnRDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KSk7XHJcbiAgY29uc3Qgc29ydENvbmZpZyA9IHNvcnRDb25maWdzW2FjdGl2ZVRhYmxlXSB8fCBUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdPy5kZWZhdWx0U29ydCB8fCBudWxsO1xyXG5cclxuICBjb25zdCBwcm9jZXNzZWRSb3dzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBzb3VyY2UgPSB0YWJsZXNbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gICAgaWYgKCFzb3VyY2UubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBsZXQgcm93cyA9IFsuLi5zb3VyY2VdO1xyXG4gICAgaWYgKFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0/LnN1cHBvcnRzQmFyYmVyRmlsdGVyICYmIHNlbGVjdGVkQmFyYmVyICE9PSAnYWxsJykge1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4gbm9ybWFsaXplVGV4dChyb3cuQmFyYmVyKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVUZXh0KHNlbGVjdGVkQmFyYmVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycpIHtcclxuICAgICAgY29uc3Qgbm93VHMgPSBEYXRlLm5vdygpO1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICAgIGlmIChoaWRkZW5TdGF0dXNlcy5sZW5ndGggJiYgaGlkZGVuU3RhdHVzZXMuaW5jbHVkZXMocm93LlN0YXR1cykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoc2hvd1Bhc3RBcHBvaW50bWVudHMpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQocm93LCBub3dUcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaFRlcm0udHJpbSgpKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoVGVybS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IHZpc2libGVDb2x1bW5zLnNvbWUoKGNvbHVtbikgPT4gbm9ybWFsaXplVGV4dChyb3dbY29sdW1uLmtleV0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydENvbmZpZz8ua2V5KSB7XHJcbiAgICAgIGNvbnN0IGNvbHVtbkRlZiA9IGN1cnJlbnRDb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmtleSA9PT0gc29ydENvbmZpZy5rZXkpO1xyXG4gICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVzb2x2ZVNvcnRWYWx1ZShhLCBjb2x1bW5EZWYsIGFjdGl2ZVRhYmxlKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IHJlc29sdmVTb3J0VmFsdWUoYiwgY29sdW1uRGVmLCBhY3RpdmVUYWJsZSk7XHJcbiAgICAgICAgaWYgKGxlZnQgPT09IHJpZ2h0KSByZXR1cm4gMDtcclxuICAgICAgICBpZiAodHlwZW9mIGxlZnQgPT09ICdudW1iZXInICYmIHR5cGVvZiByaWdodCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyBsZWZ0IC0gcmlnaHQgOiByaWdodCAtIGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAobGVmdCA+IHJpZ2h0ID8gMSA6IC0xKSA6IGxlZnQgPiByaWdodCA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm93cztcclxuICB9LCBbdGFibGVzLCBhY3RpdmVUYWJsZSwgc2VsZWN0ZWRCYXJiZXIsIGhpZGRlblN0YXR1c2VzLCBzZWFyY2hUZXJtLCB2aXNpYmxlQ29sdW1ucywgc29ydENvbmZpZywgc2hvd1Bhc3RBcHBvaW50bWVudHNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU29ydCA9IChjb2x1bW5LZXkpID0+IHtcclxuICAgIHNldFNvcnRDb25maWdzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBwcmV2W2FjdGl2ZVRhYmxlXTtcclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gY3VycmVudD8ua2V5ID09PSBjb2x1bW5LZXkgJiYgY3VycmVudC5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFthY3RpdmVUYWJsZV06IHsga2V5OiBjb2x1bW5LZXksIGRpcmVjdGlvbiB9IH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb2x1bW4gPSAoY29sdW1uS2V5KSA9PiB7XHJcbiAgICBzZXRIaWRkZW5Db2x1bW5zTWFwKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQocHJldlthY3RpdmVUYWJsZV0gfHwgW10pO1xyXG4gICAgICBpZiAoaGlkZGVuLmhhcyhjb2x1bW5LZXkpKSB7XHJcbiAgICAgICAgaGlkZGVuLmRlbGV0ZShjb2x1bW5LZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGhpZGRlbi5zaXplIDwgY3VycmVudENvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGhpZGRlbi5hZGQoY29sdW1uS2V5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbYWN0aXZlVGFibGVdOiBBcnJheS5mcm9tKGhpZGRlbikgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVN0YXR1cyA9IChzdGF0dXMpID0+IHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpO1xyXG4gICAgc2V0SGlkZGVuU3RhdHVzZXMoKHByZXYpID0+IChwcmV2LmluY2x1ZGVzKG5vcm1hbGl6ZWQpID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG5vcm1hbGl6ZWQpIDogWy4uLnByZXYsIG5vcm1hbGl6ZWRdKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKHJlY29yZElkLCBkYXRhLCB7IHRhYmxlSWQ6IG92ZXJyaWRlVGFibGVJZCB9ID0ge30pID0+IHtcclxuICAgIGlmICghcmVjb3JkSWQpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBvdmVycmlkZVRhYmxlSWQgfHwgYWN0aXZlVGFibGU7XHJcbiAgICBjb25zdCBub3JtYWxpemVkRGF0YSA9XHJcbiAgICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGRhdGE/LlN0YXR1cyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB7IC4uLmRhdGEsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoZGF0YS5TdGF0dXMpIH1cclxuICAgICAgICA6IGRhdGE7XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHRhYmxlc1t0YWJsZUlkXSB8fCBbXTtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gcHJldlt0YWJsZUlkXSB8fCBbXTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIFt0YWJsZUlkXTogbGlzdC5tYXAoKHJvdykgPT4gKGdldFJlY29yZElkKHJvdykgPT09IHJlY29yZElkID8geyAuLi5yb3csIC4uLm5vcm1hbGl6ZWREYXRhIH0gOiByb3cpKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ1NjaGVkdWxlcydcclxuICAgICAgICAgID8geyAuLi4ob3JpZ2luYWwuZmluZCgocm93KSA9PiBnZXRSZWNvcmRJZChyb3cpID09PSByZWNvcmRJZCkgfHwge30pLCAuLi5ub3JtYWxpemVkRGF0YSB9XHJcbiAgICAgICAgICA6IG5vcm1hbGl6ZWREYXRhO1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvJHt0YWJsZUlkfS8ke2VuY29kZVVSSUNvbXBvbmVudChyZWNvcmRJZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0L3QvtCy0LjRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgICBzZXRUYWJsZXMoKHByZXYpID0+ICh7IC4uLnByZXYsIFt0YWJsZUlkXTogb3JpZ2luYWwgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChyZWNvcmQsIHsgc2tpcENvbmZpcm0gPSBmYWxzZSB9ID0ge30pID0+IHtcclxuICAgIGlmICghcmVjb3JkIHx8IGFjdGl2ZVRhYmxlID09PSAnU2NoZWR1bGVzJykgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3QgY29uZmlybUNvcHkgPSAoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRhYmxlSWQpIHtcclxuICAgICAgICBjYXNlICdVc2Vycyc6XHJcbiAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINC60LvQuNC10L3RgtCwPycsIG1lc3NhZ2U6ICfQmtC70LjQtdC90YIg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nIH07XHJcbiAgICAgICAgY2FzZSAnQXBwb2ludG1lbnRzJzpcclxuICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsIG1lc3NhZ2U6ICfQl9Cw0L/QuNGB0Ywg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsCDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLicgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Yw/JywgbWVzc2FnZTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwLicgfTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGlmICghc2tpcENvbmZpcm0pIHtcclxuICAgICAgY29uc3QgY29uZmlybWVkID0gb25SZXF1ZXN0Q29uZmlybVxyXG4gICAgICAgID8gYXdhaXQgb25SZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgICAgICAgIC4uLmNvbmZpcm1Db3B5LFxyXG4gICAgICAgICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgICAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IHRydWU7XHJcbiAgICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHRhYmxlc1t0YWJsZUlkXSB8fCBbXTtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gcHJldlt0YWJsZUlkXSB8fCBbXTtcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW3RhYmxlSWRdOiBsaXN0LmZpbHRlcigocm93KSA9PiBnZXRSZWNvcmRJZChyb3cpICE9PSBnZXRSZWNvcmRJZChyZWNvcmQpKSB9O1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvJHt0YWJsZUlkfS8ke2VuY29kZVVSSUNvbXBvbmVudChyZWNvcmQuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgICAgc2V0VGFibGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbdGFibGVJZF06IG9yaWdpbmFsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVSZWNvcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXlsb2FkID1cclxuICAgICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBwYXlsb2FkPy5TdGF0dXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyB7IC4uLnBheWxvYWQsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocGF5bG9hZC5TdGF0dXMpIH1cclxuICAgICAgICAgIDogcGF5bG9hZDtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplZFBheWxvYWQpLFxyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hUYWJsZXMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsaWVudFByb2ZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIChjbGllbnQpID0+IHtcclxuICAgICAgaWYgKCFjbGllbnQ/Lk5hbWUpIHJldHVybiBudWxsO1xyXG4gICAgICByZXR1cm4gYXBpUmVxdWVzdChgL3VzZXItcHJvZmlsZS8ke2VuY29kZVVSSUNvbXBvbmVudChjbGllbnQuTmFtZSl9YCk7XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdGFibGVTZXR0aW5ncyA9IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0gfHwge307XHJcbiAgY29uc3QgaXNDdXN0b21UYWJsZSA9IHRhYmxlU2V0dGluZ3M/Lm1vZGUgPT09ICdjdXN0b20nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgIHtWSVNJQkxFX1RBQkxFX09SREVSLm1hcCgodGFibGUpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt0YWJsZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFibGUodGFibGUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBweC00IHB5LTIgdGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgYWN0aXZlVGFibGUgPT09IHRhYmxlID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZScgOiAnYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VEFCTEVfQ09ORklHW3RhYmxlXT8ubGFiZWwgfHwgdGFibGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7aXNDdXN0b21UYWJsZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAge2FjdGl2ZVRhYmxlID09PSAnQmFyYmVycycgJiYgKFxyXG4gICAgICAgICAgICA8QmFyYmVyc1ZpZXdcclxuICAgICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlcz17dGFibGVzLlNjaGVkdWxlcyB8fCBbXX1cclxuICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvbkJhcmJlckZpZWxkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uU2F2ZT17b25TYXZlQmFyYmVyfVxyXG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZEJhcmJlcn1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVCYXJiZXJ9XHJcbiAgICAgICAgICAgICAgbG9hZEF2YXRhck9wdGlvbnM9eygpID0+IGFwaVJlcXVlc3QoJy9hc3NldHMvYXZhdGFycycpfVxyXG4gICAgICAgICAgICAgIG9uU2NoZWR1bGVVcGRhdGU9eyhyZWNvcmRJZCwgcGF5bG9hZCkgPT4gaGFuZGxlVXBkYXRlKHJlY29yZElkLCBwYXlsb2FkLCB7IHRhYmxlSWQ6ICdTY2hlZHVsZXMnIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthY3RpdmVUYWJsZSA9PT0gJ1NlcnZpY2VzJyAmJiAoXHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc1ZpZXdcclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XHJcbiAgICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvblNlcnZpY2VGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlPXtvblNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVTZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZFNlcnZpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7dGFibGVTZXR0aW5ncyAmJiAoXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPXt0YWJsZVNldHRpbmdzLmxhYmVsfT5cclxuICAgICAgICAgIHt0YWJsZUVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt0YWJsZUVycm9yfSAvPn1cclxuICAgICAgICAgIDxUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHN1cHBvcnRzQmFyYmVyRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzQmFyYmVyRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJhcmJlcj17c2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQmFyYmVyPXtzZXRTZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnN9XHJcbiAgICAgICAgICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17ZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHRvZ2dsZVN0YXR1cz17dG9nZ2xlU3RhdHVzfVxyXG4gICAgICAgICAgICByZXNldFN0YXR1c2VzPXsoKSA9PiBzZXRIaWRkZW5TdGF0dXNlcyhbXSl9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICB0b2dnbGVDb2x1bW49e3RvZ2dsZUNvbHVtbn1cclxuICAgICAgICAgICAgY2FuQ3JlYXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZX1cclxuICAgICAgICAgICAgb25PcGVuQ3JlYXRlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17ZmV0Y2hUYWJsZXN9XHJcbiAgICAgICAgICAgIHNob3dQYXN0QXBwb2ludG1lbnRzPXtzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHM9e3NldFNob3dQYXN0QXBwb2ludG1lbnRzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0dyb3VwaW5nPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cyd9XHJcbiAgICAgICAgICAgIGdyb3VwQnlEYXRlPXtncm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgICAgc2V0R3JvdXBCeURhdGU9e3NldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc0ZldGNoaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0J7QsdC90L7QstC70Y/RjiDRgtCw0LHQu9C40YbRiy4uLlwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICB7YWN0aXZlVGFibGUgPT09ICdVc2VycycgPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2xpZW50c0xpc3RcclxuICAgICAgICAgICAgICAgICAgY2xpZW50cz17cHJvY2Vzc2VkUm93c31cclxuICAgICAgICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnMgfHwgW119XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoSGlzdG9yeT17ZmV0Y2hDbGllbnRQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvblJlcXVlc3RDb25maXJtPXtvblJlcXVlc3RDb25maXJtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgcm93cz17cHJvY2Vzc2VkUm93c31cclxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRDb25maWc9e3NvcnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgIG9uU29ydD17aGFuZGxlU29ydH1cclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e3RhYmxlU2V0dGluZ3MuY2FuQ3JlYXRlID8gaGFuZGxlRGVsZXRlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbk9wZW5BcHBvaW50bWVudD17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gb25PcGVuQXBwb2ludG1lbnRSZWNvcmQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBncm91cEJ5RGF0ZT17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gZ3JvdXBBcHBvaW50bWVudHNCeURhdGUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICAgICAge3RhYmxlU2V0dGluZ3MuY2FuQ3JlYXRlICYmXHJcbiAgICAgICAgICAgIChhY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyAoXHJcbiAgICAgICAgICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e2NyZWF0ZU1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50PXthcHBvaW50bWVudFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17KHsgcGF5bG9hZCB9KSA9PiBoYW5kbGVDcmVhdGVSZWNvcmQocGF5bG9hZCl9XHJcbiAgICAgICAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxDcmVhdGVSZWNvcmRNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtjcmVhdGVNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25TYXZlPXtoYW5kbGVDcmVhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVTZXR0aW5ncy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlSWQ9e2FjdGl2ZVRhYmxlfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkZpZWxkcz17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gWydVc2VySUQnLCAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCAnUmVtaW5kZXIyaEJhcmJlclNlbnQnXSA6IFtdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQm90Q29udHJvbFZpZXcgPSAoe1xyXG4gIHN0YXR1cyxcclxuICBzZXR0aW5ncyxcclxuICBiYWNrdXBzID0gW10sXHJcbiAgbWVzc2FnZXMgPSBbXSxcclxuICBvblRvZ2dsZUVuYWJsZWQsXHJcbiAgb25TdGFydCxcclxuICBvblN0b3AsXHJcbiAgb25SZXN0YXJ0LFxyXG4gIG9uU2F2ZVNldHRpbmdzLFxyXG4gIG9uU2F2ZU1lc3NhZ2UsXHJcbiAgb25SZXN0b3JlQmFja3VwLFxyXG4gIG9uQ3JlYXRlQmFja3VwLFxyXG4gIG9uRGVsZXRlQmFja3VwLFxyXG4gIGxpY2Vuc2VTdGF0dXMsXHJcbiAgdXBkYXRlSW5mbyxcclxuICBvblJlZnJlc2hVcGRhdGUsXHJcbiAgb25BcHBseVVwZGF0ZSxcclxuICBzeXN0ZW1CdXN5LFxyXG4gIHZpZXdNb2RlID0gJ2JvdCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBzZXRBYm91dChzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuICB9LCBbc2V0dGluZ3NdKTtcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnc3lzdGVtJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICA8QmFja3Vwc1BhbmVsIGJhY2t1cHM9e2JhY2t1cHN9IG9uUmVzdG9yZT17b25SZXN0b3JlQmFja3VwfSBvbkNyZWF0ZT17b25DcmVhdGVCYWNrdXB9IG9uRGVsZXRlPXtvbkRlbGV0ZUJhY2t1cH0gLz5cclxuXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JvQuNGG0LXQvdC30LjRjyDQuCDQvtCx0L3QvtCy0LvQtdC90LjRj1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC00IHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+0JvQuNGG0LXQvdC30LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0KHRgtCw0YLRg9GBOiB7bGljZW5zZVN0YXR1cz8udmFsaWQgPyAn0JDQutGC0LjQstC90LAnIDogJ9Cd0LUg0L/QvtC00YLQstC10YDQttC00LXQvdCwJ308L3A+XHJcbiAgICAgICAgICAgICAgPHA+0JrQvtC80LzQtdC90YLQsNGA0LjQuToge2xpY2Vuc2VTdGF0dXM/Lm1lc3NhZ2UgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8ub3duZXIgJiYgPHA+0JLQu9Cw0LTQtdC70LXRhjoge2xpY2Vuc2VTdGF0dXMubGljZW5zZS5vd25lcn08L3A+fVxyXG4gICAgICAgICAgICAgIHtsaWNlbnNlU3RhdHVzPy5saWNlbnNlPy5leHBpcmVzQXQgJiYgPHA+0JTQtdC50YHRgtCy0YPQtdGCINC00L4ge2Zvcm1hdERhdGUobGljZW5zZVN0YXR1cy5saWNlbnNlLmV4cGlyZXNBdCl9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8ubnVtYmVyICYmIDxwPtCd0L7QvNC10YA6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2UubnVtYmVyfTwvcD59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCe0LHQvdC+0LLQu9C10L3QuNGPPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTFcIj7Qn9C+0YHQu9C10LTQvdGP0Y8g0LLQtdGA0YHQuNGPOiB7dXBkYXRlSW5mbz8udmVyc2lvbiB8fCAn4oCUJ308L3A+XHJcbiAgICAgICAgICAgICAgPHA+0J/RgNC+0LLQtdGA0LXQvdC+OiB7dXBkYXRlSW5mbz8uY2hlY2tlZEF0ID8gZm9ybWF0RGF0ZSh1cGRhdGVJbmZvLmNoZWNrZWRBdCkgOiAn4oCUJ308L3A+XHJcbiAgICAgICAgICAgICAgPHA+0KHRgtCw0YLRg9GBOiB7dXBkYXRlSW5mbz8uZGV0YWlscyB8fCAn0J3QtdGCINC00LDQvdC90YvRhSd9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg0J/RgNC+0LLQtdGA0LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25BcHBseVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N5c3RlbUJ1c3kgfHwgIXVwZGF0ZUluZm8/LmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N5c3RlbUJ1c3kgPyAn0J7QsdC90L7QstC70LXQvdC40LXigKYnIDogJ9Ce0LHQvdC+0LLQuNGC0YwnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8U2VjdGlvbkNhcmRcclxuICAgICAgICB0aXRsZT1cItCh0YLQsNGC0YPRgSDQsdC+0YLQsFwiXHJcbiAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RhcnR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQl9Cw0L/Rg9GB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TdG9wfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXJvc2UtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0J7RgdGC0LDQvdC+0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25SZXN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXNsYXRlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCf0LXRgNC10LfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj7QodC+0YHRgtC+0Y86IHtzdGF0dXM/LnJ1bm5pbmcgPyAn0YDQsNCx0L7RgtCw0LXRgicgOiAn0L7RgdGC0LDQvdC+0LLQu9C10L0nfTwvcD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZXR0aW5ncz8uaXNCb3RFbmFibGVkICE9PSBmYWxzZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gb25Ub2dnbGVFbmFibGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX0gLz5cclxuICAgICAgICAgINCQ0LLRgtC+0YHRgtCw0YDRgiDQstC80LXRgdGC0LUg0YEgQ1JNXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCi0LXQutGB0YLRiyDQsdC+0YLQsFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCe0L/QuNGB0LDQvdC40LUg0LvQtdC90LTQuNC90LPQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9IHJvd3M9ezN9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JHQu9C+0LogwqvQniDQvdCw0YHCuzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17YWJvdXR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFib3V0KGV2ZW50LnRhcmdldC52YWx1ZSl9IHJvd3M9ezR9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TYXZlU2V0dGluZ3MoeyBib3REZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGFib3V0VGV4dDogYWJvdXQgfSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDRgtC10LrRgdGC0YtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IExvZ2luU2NyZWVuID0gKHsgb25Mb2dpbiwgZXJyb3IgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvZ2luT3B0aW9ucywgc2V0TG9naW5PcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3B0aW9uc0Vycm9yLCBzZXRPcHRpb25zRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3B0aW9ucywgc2V0TG9hZGluZ09wdGlvbnNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGZldGNoT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZ09wdGlvbnModHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2xvZ2luL29wdGlvbnNgKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcclxuICAgICAgICBzZXRMb2dpbk9wdGlvbnMobm9ybWFsaXplZCk7XHJcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZShub3JtYWxpemVkWzBdLmxvZ2luKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFub3JtYWxpemVkLnNvbWUoKG9wdGlvbikgPT4gb3B0aW9uLmxvZ2luID09PSB1c2VybmFtZSkpIHtcclxuICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCcnKTtcclxuICAgICAgfSBjYXRjaCAoZmV0Y2hFcnJvcikge1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKFtdKTtcclxuICAgICAgICBzZXRPcHRpb25zRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGB0L/QuNGB0L7QuiDQsdCw0YDQsdC10YDQvtCyLicpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIHNldExvYWRpbmdPcHRpb25zKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaE9wdGlvbnMoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIH1cclxuICB9LCBbZXJyb3JdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICBzZXRWYWxpZGF0aW9uRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAg0LjQtyDRgdC/0LjRgdC60LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICBzZXRWYWxpZGF0aW9uRXJyb3IoJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3IoJycpO1xyXG4gICAgb25Mb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbGVjdERpc2FibGVkID0gbG9hZGluZ09wdGlvbnMgfHwgbG9naW5PcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNsYXRlLTkwMCBweC00XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBzcGFjZS15LTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwIHAtOCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPkJhcmJlciBCb3QgQ1JNPC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwICjQu9C+0LPQuNC9KTwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdERpc2FibGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgICAgICAgICAgICBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZSBkaXNhYmxlZDpvcGFjaXR5LTYwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPntsb2FkaW5nT3B0aW9ucyA/ICfQl9Cw0LPRgNGD0LfQutCwLi4uJyA6ICfQo9C60LDQttC40YLQtSDQsdCw0YDQsdC10YDQsCd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtsb2dpbk9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmlkIHx8IG9wdGlvbi5sb2dpbn0gdmFsdWU9e29wdGlvbi5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi5sb2dpbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7RgdGC0YPQv9C90Ysg0YLQvtC70YzQutC+INCw0LrRgtC40LLQvdGL0LUg0LDQutC60LDRg9C90YLRiyDQuNC3INGA0LDQt9C00LXQu9CwIMKr0JHQsNGA0LHQtdGA0YvCuy48L3A+XHJcbiAgICAgICAgICAgIHtvcHRpb25zRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJvc2UtNDAwXCI+e29wdGlvbnNFcnJvcn08L3A+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0J/QsNGA0L7Qu9GMPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTUwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7KHZhbGlkYXRpb25FcnJvciB8fCBlcnJvcikgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e3ZhbGlkYXRpb25FcnJvciB8fCBlcnJvcn0gLz59XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCIgZGlzYWJsZWQ9e3NlbGVjdERpc2FibGVkfT5cclxuICAgICAgICAgINCS0L7QudGC0LhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JhcmJlci1zZXNzaW9uJyk7XHJcbiAgICAgIHJldHVybiBzYXZlZCA/IGJ1aWxkU2Vzc2lvblBheWxvYWQoSlNPTi5wYXJzZShzYXZlZCkpIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2JhcmJlci5hY3RpdmVUYWInLCAnZGFzaGJvYXJkJyk7XHJcbiAgY29uc3QgW3BlbmRpbmdUYWJsZVZpZXcsIHNldFBlbmRpbmdUYWJsZVZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZURhdGFUYWJsZSwgc2V0QWN0aXZlRGF0YVRhYmxlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJsZXMuYWN0aXZlJyk7XHJcbiAgICAgIHJldHVybiBzdG9yZWQgPyBKU09OLnBhcnNlKHN0b3JlZCkgOiAnQXBwb2ludG1lbnRzJztcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gJ0FwcG9pbnRtZW50cyc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgW2Rhc2hib2FyZCwgc2V0RGFzaGJvYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiYXJiZXJzLCBzZXRCYXJiZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYm90U3RhdHVzLCBzZXRCb3RTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdFNldHRpbmdzLCBzZXRCb3RTZXR0aW5nc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYm90TWVzc2FnZXMsIHNldEJvdE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGljZW5zZVN0YXR1cywgc2V0TGljZW5zZVN0YXR1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdXBkYXRlSW5mbywgc2V0VXBkYXRlSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3B0aW9uc0NhY2hlLCBzZXRPcHRpb25zQ2FjaGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Byb2ZpbGVNb2RhbCwgc2V0UHJvZmlsZU1vZGFsXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IFthcHBvaW50bWVudE1vZGFsLCBzZXRBcHBvaW50bWVudE1vZGFsXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIG9wdGlvbnM6IG51bGwsIGlzTmV3OiBmYWxzZSwgYWxsb3dEZWxldGU6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ2xvYmFsRXJyb3IsIHNldEdsb2JhbEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzeXN0ZW1CdXN5LCBzZXRTeXN0ZW1CdXN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCk7XHJcbiAgY29uc3QgW3JlYWx0aW1lU25hcHNob3QsIHNldFJlYWx0aW1lU25hcHNob3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ZhdGFsRXJyb3IsIHNldEZhdGFsRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvbmZpcm1EaWFsb2csIHNldENvbmZpcm1EaWFsb2ddID0gdXNlU3RhdGUoZGVmYXVsdENvbmZpcm1TdGF0ZSk7XHJcbiAgY29uc3QgW2Nvbm5lY3Rpb25TdGF0dXMsIHNldENvbm5lY3Rpb25TdGF0dXNdID0gdXNlU3RhdGUoJ3Vua25vd24nKTtcclxuICBjb25zdCBjb25maXJtUmVzb2x2ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RDb25maXJtID0gdXNlQ2FsbGJhY2soXHJcbiAgICAob3B0aW9ucyA9IHt9KSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50ID0gcmVzb2x2ZTtcclxuICAgICAgICBzZXRDb25maXJtRGlhbG9nKHsgLi4uZGVmYXVsdENvbmZpcm1TdGF0ZSwgLi4ub3B0aW9ucywgb3BlbjogdHJ1ZSB9KTtcclxuICAgICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1SZXN1bHQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgc2V0Q29uZmlybURpYWxvZyhkZWZhdWx0Q29uZmlybVN0YXRlKTtcclxuICAgICAgaWYgKGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQocmVzdWx0KTtcclxuICAgICAgICBjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlVGFiID09PSAnYmFyYmVycycgfHwgYWN0aXZlVGFiID09PSAnc2VydmljZXMnKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnID8gJ0JhcmJlcnMnIDogJ1NlcnZpY2VzJztcclxuICAgICAgc2V0UGVuZGluZ1RhYmxlVmlldyh0YXJnZXQpO1xyXG4gICAgICBzZXRBY3RpdmVUYWIoJ3RhYmxlcycpO1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWRlYmFyVGFibGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgICh0YWJsZUlkKSA9PiB7XHJcbiAgICAgIGlmICghdGFibGVJZCkgcmV0dXJuO1xyXG4gICAgICBzZXRBY3RpdmVEYXRhVGFibGUodGFibGVJZCk7XHJcbiAgICAgIHNldFBlbmRpbmdUYWJsZVZpZXcodGFibGVJZCk7XHJcbiAgICAgIHNldEFjdGl2ZVRhYigndGFibGVzJyk7XHJcbiAgICB9LFxyXG4gICAgW3NldEFjdGl2ZVRhYiwgc2V0UGVuZGluZ1RhYmxlVmlld11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVBY3RpdmVUYWJsZVN5bmMgPSB1c2VDYWxsYmFjayhcclxuICAgICh0YWJsZUlkKSA9PiB7XHJcbiAgICAgIGlmICghdGFibGVJZCkgcmV0dXJuO1xyXG4gICAgICBzZXRBY3RpdmVEYXRhVGFibGUodGFibGVJZCk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmVmZXJyZWRUYWJsZUNvbnN1bWVkID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0UGVuZGluZ1RhYmxlVmlldyhudWxsKSwgW10pO1xyXG4gIGNvbnN0IHNlcnZpY2VTYXZlVGltZXJzID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPCAxMDI0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgICBzZXRDb25uZWN0aW9uU3RhdHVzKCd1bmtub3duJyk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrU2VydmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcclxuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XHJcbiAgICAgICAgc2V0Q29ubmVjdGlvblN0YXR1cyhyZXNwb25zZS5vayA/ICdvbmxpbmUnIDogJ29mZmxpbmUnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0Q29ubmVjdGlvblN0YXR1cygnb2ZmbGluZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoZWNrU2VydmVyKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNoZWNrU2VydmVyLCAxNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW3Nlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgc2V0U2Vzc2lvbihudWxsKTtcclxuICAgIHNldERhc2hib2FyZChudWxsKTtcclxuICAgIHNldEdsb2JhbEVycm9yKCcnKTtcclxuICAgIHNldFJlYWx0aW1lU25hcHNob3QobnVsbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhcGlSZXF1ZXN0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoZW5kcG9pbnQsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXRgiDQsNC60YLQuNCy0L3QvtC5INGB0LXRgdGB0LjQuCcpO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnRva2VufWAsXHJcbiAgICAgICAgLi4uKG9wdGlvbnMuYm9keSAmJiAhb3B0aW9ucy5oZWFkZXJzPy5bJ0NvbnRlbnQtVHlwZSddID8geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gOiB7fSksXHJcbiAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7ZW5kcG9pbnR9YCwgeyAuLi5vcHRpb25zLCBoZWFkZXJzIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBoYW5kbGVMb2dvdXQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ch0LXRgdGB0LjRjyDQuNGB0YLQtdC60LvQsCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICfQntGI0LjQsdC60LAg0LfQsNC/0YDQvtGB0LAnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHJldHVybiBudWxsO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSxcclxuICAgIFtzZXNzaW9uPy50b2tlbiwgaGFuZGxlTG9nb3V0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZldGNoQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZXNzaW9uPy50b2tlbikgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEdsb2JhbEVycm9yKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG92ZXJ2aWV3ID0gYXdhaXQgYXBpUmVxdWVzdCgnL2Rhc2hib2FyZC9vdmVydmlldycpO1xyXG4gICAgICBzZXREYXNoYm9hcmQob3ZlcnZpZXcpO1xyXG4gICAgICBjb25zdCB3aXRoRmFsbGJhY2sgPSAocmVxdWVzdCwgZmFsbGJhY2ssIGxhYmVsKSA9PlxyXG4gICAgICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bGFiZWx9IGZldGNoIHNraXBwZWQ6YCwgZXJyb3I/Lm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zdCBbXHJcbiAgICAgICAgc2VydmljZXNGdWxsLFxyXG4gICAgICAgIGJhcmJlcnNGdWxsLFxyXG4gICAgICAgIGJvdFN0YXRlLFxyXG4gICAgICAgIGJvdE1lc3NhZ2VzUGF5bG9hZCxcclxuICAgICAgICBsaWNlbnNlLFxyXG4gICAgICAgIHVwZGF0ZSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvc2VydmljZXMvZnVsbCcpLCB7IHNlcnZpY2VzOiBbXSB9LCAnU2VydmljZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JhcmJlcnMvZnVsbCcpLCBbXSwgJ0JhcmJlcnMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnKSwgeyBzdGF0dXM6IG51bGwsIHNldHRpbmdzOiBudWxsIH0sICdCb3Qgc3RhdHVzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9ib3QvbWVzc2FnZXMnKSwgW10sICdCb3QgbWVzc2FnZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2xpY2Vuc2Uvc3RhdHVzJyksIG51bGwsICdMaWNlbnNlJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9zeXN0ZW0vdXBkYXRlJyksIG51bGwsICdVcGRhdGVzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKFxyXG4gICAgICAgICAgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzJyksXHJcbiAgICAgICAgICB7IHN0YXR1c2VzOiBbXSwgYmFyYmVyczogW10sIHNlcnZpY2VzOiBbXSB9LFxyXG4gICAgICAgICAgJ09wdGlvbnMnLFxyXG4gICAgICAgICksXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRTZXJ2aWNlcyhzZXJ2aWNlc0Z1bGwuc2VydmljZXMgfHwgW10pO1xyXG4gICAgICBzZXRCYXJiZXJzKGJhcmJlcnNGdWxsIHx8IG92ZXJ2aWV3LmJhcmJlcnMgfHwgW10pO1xyXG4gICAgICBzZXRCb3RTZXR0aW5ncyhib3RTdGF0ZS5zZXR0aW5ncyB8fCBvdmVydmlldy5ib3Q/LnNldHRpbmdzIHx8IG51bGwpO1xyXG4gICAgICBzZXRCb3RTdGF0dXMoYm90U3RhdGUuc3RhdHVzKTtcclxuICAgICAgc2V0Qm90TWVzc2FnZXMoYm90TWVzc2FnZXNQYXlsb2FkIHx8IFtdKTtcclxuICAgICAgc2V0TGljZW5zZVN0YXR1cyhsaWNlbnNlKTtcclxuICAgICAgc2V0VXBkYXRlSW5mbyh1cGRhdGUpO1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3Qob3B0aW9ucy5zdGF0dXNlcyB8fCBbXSkgfTtcclxuICAgICAgc2V0T3B0aW9uc0NhY2hlKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNCw0L3QvdGL0LUnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGlSZXF1ZXN0LCBzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb24/LnRva2VuLCBmZXRjaEFsbF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgICBzZXRSZWFsdGltZVNuYXBzaG90KG51bGwpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBFdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCB0b2tlblBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb24udG9rZW4pO1xyXG4gICAgY29uc3Qgc3RyZWFtVXJsID0gYCR7QVBJX0JBU0VfVVJMfS9ldmVudHMvc3RyZWFtP3Rva2VuPSR7dG9rZW5QYXJhbX1gO1xyXG4gICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2Uoc3RyZWFtVXJsKTtcclxuICAgIGV2ZW50U291cmNlLm9ub3BlbiA9ICgpID0+IHNldENvbm5lY3Rpb25TdGF0dXMoJ29ubGluZScpO1xyXG4gICAgY29uc3QgaGFuZGxlRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBpZiAocGF5bG9hZD8udHlwZSAhPT0gJ2FwcG9pbnRtZW50czp1cGRhdGUnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHBheWxvYWQucGF5bG9hZCB8fCB7fTtcclxuICAgICAgICBzZXRSZWFsdGltZVNuYXBzaG90KHtcclxuICAgICAgICAgIHJvd3M6IEFycmF5LmlzQXJyYXkoZGV0YWlscy5yb3dzKSA/IGRldGFpbHMucm93cyA6IFtdLFxyXG4gICAgICAgICAgc3RhdHM6IGRldGFpbHMuc3RhdHMgfHwge30sXHJcbiAgICAgICAgICB1cGNvbWluZzogQXJyYXkuaXNBcnJheShkZXRhaWxzLnVwY29taW5nKSA/IGRldGFpbHMudXBjb21pbmcgOiBbXSxcclxuICAgICAgICAgIHVwZGF0ZWRBdDogZGV0YWlscy51cGRhdGVkQXQgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYWx0aW1lIGV2ZW50IHBhcnNlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGV2ZW50U291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2FwcG9pbnRtZW50cycsIGhhbmRsZUV2ZW50KTtcclxuICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHNldENvbm5lY3Rpb25TdGF0dXMoJ29mZmxpbmUnKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBldmVudFNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhcHBvaW50bWVudHMnLCBoYW5kbGVFdmVudCk7XHJcbiAgICAgIGV2ZW50U291cmNlLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZWFsdGltZVNuYXBzaG90KSByZXR1cm47XHJcbiAgICBzZXREYXNoYm9hcmQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbmV4dFN0YXRzID0geyAuLi4ocHJldj8uc3RhdHMgfHwge30pLCAuLi4ocmVhbHRpbWVTbmFwc2hvdC5zdGF0cyB8fCB7fSkgfTtcclxuICAgICAgY29uc3QgbmV4dEFwcG9pbnRtZW50cyA9IHtcclxuICAgICAgICAuLi4ocHJldj8uYXBwb2ludG1lbnRzIHx8IHt9KSxcclxuICAgICAgICB1cGNvbWluZzogcmVhbHRpbWVTbmFwc2hvdC51cGNvbWluZyB8fCBwcmV2Py5hcHBvaW50bWVudHM/LnVwY29taW5nIHx8IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXByZXYpIHtcclxuICAgICAgICByZXR1cm4geyBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgIH0pO1xyXG4gIH0sIFtyZWFsdGltZVNuYXBzaG90XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxFcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkZXRhaWwgPSBldmVudD8ucmVhc29uIHx8IGV2ZW50Py5lcnJvcjtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9XHJcbiAgICAgICAgZGV0YWlsPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgZXZlbnQ/Lm1lc3NhZ2UgfHxcclxuICAgICAgICAodHlwZW9mIGRldGFpbCA9PT0gJ3N0cmluZycgPyBkZXRhaWwgOiAn0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAnKTtcclxuICAgICAgY29uc29sZS5lcnJvcignR2xvYmFsIFVJIGVycm9yOicsIGRldGFpbCB8fCBldmVudCk7XHJcbiAgICAgIHNldEZhdGFsRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+ICgpID0+IHtcclxuICAgICAgc2VydmljZVNhdmVUaW1lcnMuY3VycmVudC5mb3JFYWNoKCh0aW1lcikgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKSk7XHJcbiAgICAgIHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgc2V0QXV0aEVycm9yKCcnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRVc2VybmFtZSA9IHJlc29sdmVMb2dpbih1c2VybmFtZSk7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRVc2VybmFtZSkge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAg0LjQtyDRgdC/0LjRgdC60LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IG5vcm1hbGl6ZWRVc2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRBdXRoRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICfQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZXNzaW9uUGF5bG9hZCA9IGJ1aWxkU2Vzc2lvblBheWxvYWQoeyAuLi5kYXRhLCB1c2VybmFtZTogbm9ybWFsaXplZFVzZXJuYW1lIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFyYmVyLXNlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uUGF5bG9hZCkpO1xyXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25QYXlsb2FkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcign0KHQtdGA0LLQtdGAINC90LXQtNC+0YHRgtGD0L/QtdC9Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UgPSAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGJhcmJlcikgPT4gKGJhcmJlci5pZCA9PT0gaWQgPyB7IC4uLmJhcmJlciwgW2ZpZWxkXTogdmFsdWUgfSA6IGJhcmJlcikpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCA9IChzZXJ2aWNlKSA9PiAoe1xyXG4gICAgLi4uc2VydmljZSxcclxuICAgIHByaWNlczogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhzZXJ2aWNlLnByaWNlcyB8fCB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSldKVxyXG4gICAgKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGVyaXZlQmFyYmVyTG9naW4gPSAoYmFyYmVyRGF0YSA9IHt9KSA9PiByZXNvbHZlTG9naW4oYmFyYmVyRGF0YS5sb2dpbiB8fCBiYXJiZXJEYXRhLm5hbWUgfHwgJycpO1xyXG5cclxuICBjb25zdCBidWlsZEJhcmJlclBheWxvYWQgPSAoYmFyYmVyRGF0YSA9IHt9LCBmYWxsYmFja09yZGVyID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbmFtZTogYmFyYmVyRGF0YS5uYW1lIHx8ICcnLFxyXG4gICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgZGVzY3JpcHRpb246IGJhcmJlckRhdGEuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIHJhdGluZzogYmFyYmVyRGF0YS5yYXRpbmcgfHwgJycsXHJcbiAgICAgIGF2YXRhclVybDogYmFyYmVyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbG9yOiBiYXJiZXJEYXRhLmNvbG9yIHx8ICcnLFxyXG4gICAgICBsb2dpbjogZGVyaXZlQmFyYmVyTG9naW4oYmFyYmVyRGF0YSksXHJcbiAgICAgIHBhc3N3b3JkOiBiYXJiZXJEYXRhLnBhc3N3b3JkIHx8ICcnLFxyXG4gICAgICBwaG9uZTogYmFyYmVyRGF0YS5waG9uZSB8fCAnJyxcclxuICAgICAgdGVsZWdyYW1JZDogYmFyYmVyRGF0YS50ZWxlZ3JhbUlkIHx8ICcnLFxyXG4gICAgICBpc0FjdGl2ZTogYmFyYmVyRGF0YS5pc0FjdGl2ZSAhPT0gZmFsc2UsXHJcbiAgICAgIG9yZGVySW5kZXg6IE51bWJlcihiYXJiZXJEYXRhLm9yZGVySW5kZXggPz8gZmFsbGJhY2tPcmRlcikgfHwgMCxcclxuICAgIH07XHJcbiAgICBpZiAoYmFyYmVyRGF0YS5pZCkge1xyXG4gICAgICBwYXlsb2FkLmlkID0gYmFyYmVyRGF0YS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVCYXJiZXIgPSBhc3luYyAoYmFyYmVyKSA9PiB7XHJcbiAgICBpZiAoIWJhcmJlcj8uaWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUmVxdWVzdChgL0JhcmJlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoYmFyYmVyLmlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1aWxkQmFyYmVyUGF5bG9hZChiYXJiZXIpKSB9KTtcclxuICAgICAgY29uc3QgdXBkYXRlZEJhcmJlciA9IHJlc3BvbnNlIHx8IGJhcmJlcjtcclxuICAgICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSB1cGRhdGVkQmFyYmVyLmlkID8geyAuLi5pdGVtLCAuLi51cGRhdGVkQmFyYmVyIH0gOiBpdGVtKSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQmFyYmVyID0gYXN5bmMgKGJhcmJlcikgPT4ge1xyXG4gICAgaWYgKCFiYXJiZXI/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LA/JyxcclxuICAgICAgbWVzc2FnZTogYNCR0LDRgNCx0LXRgCDCqyR7YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J33CuyDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLmAsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQmFyYmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChiYXJiZXIuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRCYXJiZXIgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUgfHwgIXBheWxvYWQucGFzc3dvcmQpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoJ9CX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y8sINC70L7Qs9C40L0g0Lgg0L/QsNGA0L7Qu9GMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5ld0JhcmJlclBheWxvYWQgPSBidWlsZEJhcmJlclBheWxvYWQoeyAuLi5wYXlsb2FkLCBpZDogdW5kZWZpbmVkIH0sIGJhcmJlcnMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgeyBpZCwgLi4uYm9keSB9ID0gbmV3QmFyYmVyUGF5bG9hZDtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0JhcmJlcnMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVTZXJ2aWNlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHNlcnZpY2UpKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNjaGVkdWxlU2VydmljZUF1dG9zYXZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRpbWVycyA9IHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGltZXIgPSB0aW1lcnMuZ2V0KHNlcnZpY2UuaWQpO1xyXG4gICAgICBpZiAoZXhpc3RpbmdUaW1lcikgY2xlYXJUaW1lb3V0KGV4aXN0aW5nVGltZXIpO1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVNhdmVTZXJ2aWNlKHNlcnZpY2UpO1xyXG4gICAgICAgIHRpbWVycy5kZWxldGUoc2VydmljZS5pZCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHRpbWVycy5zZXQoc2VydmljZS5pZCwgdGltZXIpO1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTYXZlU2VydmljZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVTZXJ2aWNlID0gYXN5bmMgKHNlcnZpY2UpID0+IHtcclxuICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YM/JyxcclxuICAgICAgbWVzc2FnZTogYNCj0YHQu9GD0LPQsCDCqyR7c2VydmljZS5uYW1lIHx8ICfQkdC10Lcg0L3QsNC30LLQsNC90LjRjyd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsC5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRTZXJ2aWNlID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghcGF5bG9hZC5uYW1lKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvc2VydmljZXMvZnVsbCcsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHBheWxvYWQpKSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFNlcnZpY2VzKChwcmV2KSA9PiBwcmV2Lm1hcCgoc2VydmljZSkgPT4gKHNlcnZpY2UuaWQgPT09IGlkID8geyAuLi5zZXJ2aWNlLCBbZmllbGRdOiB2YWx1ZSB9IDogc2VydmljZSkpKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUoeyAuLi50YXJnZXQsIFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NlcnZpY2VzLCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZXJ2aWNlSWQsIGJhcmJlcklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRTZXJ2aWNlcygocHJldikgPT5cclxuICAgICAgICBwcmV2Lm1hcCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlcnZpY2UuaWQgIT09IHNlcnZpY2VJZCkgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcmljZXM6IHsgLi4uKHNlcnZpY2UucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gc2VydmljZUlkKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlKHtcclxuICAgICAgICAgIC4uLnRhcmdldCxcclxuICAgICAgICAgIHByaWNlczogeyAuLi4odGFyZ2V0LnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VydmljZXMsIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdFRvZ2dsZSA9IGFzeW5jIChlbmFibGVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXNCb3RFbmFibGVkOiBlbmFibGVkIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0L3QvtCy0LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCDQsdC+0YLQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdEFjdGlvbiA9IGFzeW5jIChhY3Rpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24gfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0YvQv9C+0LvQvdC40YLRjCDQtNC10LnRgdGC0LLQuNC1Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZVNldHRpbmdzID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghYm90U2V0dGluZ3M/LmlkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQm90U2V0dGluZ3MvJHtlbmNvZGVVUklDb21wb25lbnQoYm90U2V0dGluZ3MuaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LgnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlTWVzc2FnZSA9IGFzeW5jIChpZCwgZHJhZnQsIHBlcnNpc3QpID0+IHtcclxuICAgIGlmICghcGVyc2lzdCkge1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcygocHJldikgPT4gcHJldi5tYXAoKG1lc3NhZ2UpID0+IChtZXNzYWdlLmlkID09PSBpZCA/IHsgLi4uZHJhZnQgfSA6IG1lc3NhZ2UpKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9ib3QvbWVzc2FnZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlOiBkcmFmdC5jb2RlLCB0aXRsZTogZHJhZnQudGl0bGUsIHRleHQ6IGRyYWZ0LnRleHQgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXN0b3JlQmFja3VwID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XHJcbiAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQotC10LrRg9GJ0LjQtSDQtNCw0L3QvdGL0LUg0LHRg9C00YPRgiDQt9Cw0LzQtdC90LXQvdGLINGB0L7QtNC10YDQttC40LzRi9C8ICR7ZmlsZW5hbWV9LiDQn9GA0L7QtNC+0LvQttC40YLRjD9gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL3Jlc3RvcmUnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlbmFtZSB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVCYWNrdXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KHQvtC30LTQsNGC0Ywg0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JyxcclxuICAgICAgbWVzc2FnZTogJ9CR0YPQtNC10YIg0YHQvtC30LTQsNC9INGE0LDQudC7INGA0LXQt9C10YDQstC90L7QuSDQutC+0L/QuNC4INGC0LXQutGD0YnQtdC5INCx0LDQt9GLINC00LDQvdC90YvRhS4nLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQodC+0LfQtNCw0YLRjCcsXHJcbiAgICAgIHRvbmU6ICdzdWNjZXNzJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL2NyZWF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7Qt9C00LDRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVCYWNrdXAgPSBhc3luYyAoZmlsZW5hbWUpID0+IHtcclxuICAgIGlmICghZmlsZW5hbWUpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDRgNC10LfQtdGA0LLQvdGD0Y4g0LrQvtC/0LjRjj8nLFxyXG4gICAgICBtZXNzYWdlOiBg0KTQsNC50LsgJHtmaWxlbmFtZX0g0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC30LLQvtC30LLRgNCw0YLQvdC+LmAsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9kZWxldGUnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlbmFtZSB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LHRjdC60LDQvycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoQ2xpZW50SGlzdG9yeSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGNsaWVudCkgPT4ge1xyXG4gICAgICBpZiAoIWNsaWVudD8uTmFtZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHJldHVybiBhcGlSZXF1ZXN0KGAvdXNlci1wcm9maWxlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudC5OYW1lKX1gKTtcclxuICAgIH0sXHJcbiAgICBbYXBpUmVxdWVzdF1cclxuICApO1xyXG5cclxuXHJcbiAgY29uc3Qgb3BlblByb2ZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xyXG4gICAgICBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiB0cnVlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlSZXF1ZXN0KGAvdXNlci1wcm9maWxlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHBheWxvYWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC/0YDQvtGE0LjQu9GMJyB9LCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVuc3VyZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAob3B0aW9uc0NhY2hlKSByZXR1cm4gb3B0aW9uc0NhY2hlO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cz9mb3JjZT0xJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgIH07XHJcbiAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZCk7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICB9LCBbYXBpUmVxdWVzdCwgb3B0aW9uc0NhY2hlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGFwcG9pbnRtZW50LCBvcHRpb25zQ29uZmlnID0ge30pID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7XHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhcHBvaW50bWVudCxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBhbGxvd0RlbGV0ZTogISFvcHRpb25zQ29uZmlnLmFsbG93RGVsZXRlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbZW5zdXJlT3B0aW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVBcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBlbnN1cmVPcHRpb25zKCk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbiAgICBjb25zdCBkZWZhdWx0U3RhdHVzID0gbm9ybWFsaXplU3RhdHVzVmFsdWUob3B0aW9ucy5zdGF0dXNlcz8uWzBdIHx8ICfQkNC60YLQuNCy0L3QsNGPJyk7XHJcbiAgICBjb25zdCBkZWZhdWx0QmFyYmVyID0gcGlja0JhcmJlckZvclVzZXIoc2Vzc2lvbiwgb3B0aW9ucy5iYXJiZXJzIHx8IFtdKTtcclxuICAgIHNldEFwcG9pbnRtZW50TW9kYWwoe1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgICBQaG9uZTogJycsXHJcbiAgICAgICAgQmFyYmVyOiBkZWZhdWx0QmFyYmVyLFxyXG4gICAgICAgIERhdGU6IHRvZGF5LFxyXG4gICAgICAgIFRpbWU6ICcnLFxyXG4gICAgICAgIFN0YXR1czogZGVmYXVsdFN0YXR1cyxcclxuICAgICAgICBTZXJ2aWNlczogJycsXHJcbiAgICAgICAgVXNlcklEOiAnJyxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgaXNOZXc6IHRydWUsXHJcbiAgICAgIGFsbG93RGVsZXRlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0sIFtlbnN1cmVPcHRpb25zLCBzZXNzaW9uPy5kaXNwbGF5TmFtZSwgc2Vzc2lvbj8udXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUFwcG9pbnRtZW50ID0gYXN5bmMgKHsgaWQsIHBheWxvYWQsIGlzTmV3IH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9BcHBvaW50bWVudHMnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQXBwb2ludG1lbnRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVBcHBvaW50bWVudCA9IGFzeW5jIChhcHBvaW50bWVudCkgPT4ge1xyXG4gICAgaWYgKCFhcHBvaW50bWVudD8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Yw/JyxcclxuICAgICAgbWVzc2FnZTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoYXBwb2ludG1lbnQuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGU/Zm9yY2U9MScpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKGluZm8pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQv9GA0L7QstC10YDQuNGC0Ywg0L7QsdC90L7QstC70LXQvdC40Y8nKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFN5c3RlbUJ1c3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFwcGx5VXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Ce0LHQvdC+0LLQuNGC0Ywg0YHQuNGB0YLQtdC80YM/JyxcclxuICAgICAgbWVzc2FnZTogJ0NSTSDQuCDQsdC+0YIg0LHRg9C00YPRgiDQvtCx0L3QvtCy0LvQtdC90Ysg0LTQviDQv9C+0YHQu9C10LTQvdC10Lkg0LLQtdGA0YHQuNC4LiDQn9C10YDQtdC30LDQv9GD0YHQuiDQvNC+0LbQtdGCINC30LDQvdGP0YLRjCDQvdC10YHQutC+0LvRjNC60L4g0LzQuNC90YPRgi4nLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQntCx0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICBzZXRTeXN0ZW1CdXN5KHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHJlc3VsdC5pbmZvIHx8IHJlc3VsdCk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQuNC80LXQvdC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgcmV0dXJuIDxMb2dpblNjcmVlbiBvbkxvZ2luPXtoYW5kbGVMb2dpbn0gZXJyb3I9e2F1dGhFcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVmZXJyZWRUYWJsZVRhcmdldCA9IGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnID8gJ0JhcmJlcnMnIDogYWN0aXZlVGFiID09PSAnc2VydmljZXMnID8gJ1NlcnZpY2VzJyA6IHBlbmRpbmdUYWJsZVZpZXc7XHJcbiAgY29uc3QgbGl2ZVVwZGF0ZWRBdCA9IHJlYWx0aW1lU25hcHNob3Q/LnVwZGF0ZWRBdCB8fCBudWxsO1xyXG4gIGNvbnN0IG1haW5DbGFzc05hbWUgPSBjbGFzc05hbWVzKCdmbGV4LTEgc3BhY2UteS00IHAtNCBtZDpwLTgnLCBpc01vYmlsZSA/ICdwYi0yNCcgOiAnJyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEYXNoYm9hcmRWaWV3XHJcbiAgICAgICAgICAgIGRhdGE9e2Rhc2hib2FyZH1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQXBwb2ludG1lbnQ9e2hhbmRsZUNyZWF0ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd0YWJsZXMnOlxyXG4gICAgICBjYXNlICdiYXJiZXJzJzpcclxuICAgICAgY2FzZSAnc2VydmljZXMnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFibGVzV29ya3NwYWNlXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3Q9e2FwaVJlcXVlc3R9XHJcbiAgICAgICAgICAgIHNoYXJlZE9wdGlvbnM9e29wdGlvbnNDYWNoZX1cclxuICAgICAgICAgICAgb25PcHRpb25zVXBkYXRlPXtzZXRPcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3BlblByb2ZpbGU9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICBvbk9wZW5BcHBvaW50bWVudFJlY29yZD17aGFuZGxlT3BlbkFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBjbGllbnRzPXtkYXNoYm9hcmQ/LmNsaWVudHMgfHwgW119XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyPXtzZXNzaW9uIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVBcHBvaW50bWVudHM9e3JlYWx0aW1lU25hcHNob3Q/LnJvd3MgfHwgbnVsbH1cclxuICAgICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17cmVhbHRpbWVTbmFwc2hvdD8udXBkYXRlZEF0IHx8IG51bGx9XHJcbiAgICAgICAgICAgIGJhcmJlcnM9e2JhcmJlcnN9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtzZXJ2aWNlc31cclxuICAgICAgICAgICAgb25CYXJiZXJGaWVsZENoYW5nZT17aGFuZGxlQmFyYmVyRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU2F2ZUJhcmJlcj17aGFuZGxlU2F2ZUJhcmJlcn1cclxuICAgICAgICAgICAgb25BZGRCYXJiZXI9e2hhbmRsZUFkZEJhcmJlcn1cclxuICAgICAgICAgICAgb25EZWxldGVCYXJiZXI9e2hhbmRsZURlbGV0ZUJhcmJlcn1cclxuICAgICAgICAgICAgb25TZXJ2aWNlRmllbGRDaGFuZ2U9e2hhbmRsZVNlcnZpY2VGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgb25TZXJ2aWNlUHJpY2VDaGFuZ2U9e2hhbmRsZVNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgb25EZWxldGVTZXJ2aWNlPXtoYW5kbGVEZWxldGVTZXJ2aWNlfVxyXG4gICAgICAgICAgICBvbkFkZFNlcnZpY2U9e2hhbmRsZUFkZFNlcnZpY2V9XHJcbiAgICAgICAgICAgIG9uQWN0aXZlVGFibGVDaGFuZ2U9e2hhbmRsZUFjdGl2ZVRhYmxlU3luY31cclxuICAgICAgICAgICAgcHJlZmVycmVkVGFibGU9e3ByZWZlcnJlZFRhYmxlVGFyZ2V0fVxyXG4gICAgICAgICAgICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQ9e2hhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWR9XHJcbiAgICAgICAgICAgIG9uUmVxdWVzdENvbmZpcm09e3JlcXVlc3RDb25maXJtfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdib3QnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcclxuICAgICAgICAgICAgc3RhdHVzPXtib3RTdGF0dXN9XHJcbiAgICAgICAgICAgIHNldHRpbmdzPXtib3RTZXR0aW5nc31cclxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxyXG4gICAgICAgICAgICBtZXNzYWdlcz17Ym90TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlZD17aGFuZGxlQm90VG9nZ2xlfVxyXG4gICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU3RvcD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdG9wJyl9XHJcbiAgICAgICAgICAgIG9uUmVzdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdyZXN0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU2F2ZVNldHRpbmdzPXtoYW5kbGVTYXZlU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uU2F2ZU1lc3NhZ2U9eyhpZCwgZHJhZnQsIHBlcnNpc3QpID0+IGhhbmRsZVNhdmVNZXNzYWdlKGlkLCBkcmFmdCwgcGVyc2lzdCl9XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZUJhY2t1cD17aGFuZGxlUmVzdG9yZUJhY2t1cH1cclxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cclxuICAgICAgICAgICAgb25EZWxldGVCYWNrdXA9e2hhbmRsZURlbGV0ZUJhY2t1cH1cclxuICAgICAgICAgICAgbGljZW5zZVN0YXR1cz17bGljZW5zZVN0YXR1c31cclxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cclxuICAgICAgICAgICAgb25SZWZyZXNoVXBkYXRlPXtoYW5kbGVSZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkFwcGx5VXBkYXRlPXtoYW5kbGVBcHBseVVwZGF0ZX1cclxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgdmlld01vZGU9XCJib3RcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdzeXN0ZW0nOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcclxuICAgICAgICAgICAgc3RhdHVzPXtib3RTdGF0dXN9XHJcbiAgICAgICAgICAgIHNldHRpbmdzPXtib3RTZXR0aW5nc31cclxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxyXG4gICAgICAgICAgICBtZXNzYWdlcz17Ym90TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlZD17aGFuZGxlQm90VG9nZ2xlfVxyXG4gICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU3RvcD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdG9wJyl9XHJcbiAgICAgICAgICAgIG9uUmVzdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdyZXN0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU2F2ZVNldHRpbmdzPXtoYW5kbGVTYXZlU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uU2F2ZU1lc3NhZ2U9eyhpZCwgZHJhZnQsIHBlcnNpc3QpID0+IGhhbmRsZVNhdmVNZXNzYWdlKGlkLCBkcmFmdCwgcGVyc2lzdCl9XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZUJhY2t1cD17aGFuZGxlUmVzdG9yZUJhY2t1cH1cclxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cclxuICAgICAgICAgICAgb25EZWxldGVCYWNrdXA9e2hhbmRsZURlbGV0ZUJhY2t1cH1cclxuICAgICAgICAgICAgbGljZW5zZVN0YXR1cz17bGljZW5zZVN0YXR1c31cclxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cclxuICAgICAgICAgICAgb25SZWZyZXNoVXBkYXRlPXtoYW5kbGVSZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkFwcGx5VXBkYXRlPXtoYW5kbGVBcHBseVVwZGF0ZX1cclxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgdmlld01vZGU9XCJzeXN0ZW1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcclxuICAgICAgICAgICAgc3RhdHVzPXtib3RTdGF0dXN9XHJcbiAgICAgICAgICAgIHNldHRpbmdzPXtib3RTZXR0aW5nc31cclxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxyXG4gICAgICAgICAgICBtZXNzYWdlcz17Ym90TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlZD17aGFuZGxlQm90VG9nZ2xlfVxyXG4gICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU3RvcD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdG9wJyl9XHJcbiAgICAgICAgICAgIG9uUmVzdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdyZXN0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU2F2ZVNldHRpbmdzPXtoYW5kbGVTYXZlU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uU2F2ZU1lc3NhZ2U9eyhpZCwgZHJhZnQsIHBlcnNpc3QpID0+IGhhbmRsZVNhdmVNZXNzYWdlKGlkLCBkcmFmdCwgcGVyc2lzdCl9XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZUJhY2t1cD17aGFuZGxlUmVzdG9yZUJhY2t1cH1cclxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cclxuICAgICAgICAgICAgb25EZWxldGVCYWNrdXA9e2hhbmRsZURlbGV0ZUJhY2t1cH1cclxuICAgICAgICAgICAgbGljZW5zZVN0YXR1cz17bGljZW5zZVN0YXR1c31cclxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cclxuICAgICAgICAgICAgb25SZWZyZXNoVXBkYXRlPXtoYW5kbGVSZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkFwcGx5VXBkYXRlPXtoYW5kbGVBcHBseVVwZGF0ZX1cclxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgdmlld01vZGU9XCJib3RcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChmYXRhbEVycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBiZy1zbGF0ZS05NTAgcC02IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIHNwYWNlLXktMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzUwIGJnLXNsYXRlLTkwMC84MCBwLTYgc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcm9zZS0yMDBcIj7QmtGA0LjRgtC40YfQtdGB0LrQsNGPINC+0YjQuNCx0LrQsCDQuNC90YLQtdGA0YTQtdC50YHQsDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAg0KHQvtC+0LHRidC10L3QuNC1INC90LjQttC1INC80L7QttC90L4g0L/QtdGA0LXRgdC70LDRgtGMINGA0LDQt9GA0LDQsdC+0YLRh9C40LrRgy4g0J/QvtGB0LvQtSDQuNGB0L/RgNCw0LLQu9C10L3QuNGPINC/0LXRgNC10LfQsNCz0YDRg9C30LjRgtC1INGB0YLRgNCw0L3QuNGG0YMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC84MCBwLTQgdGV4dC1sZWZ0IHRleHQteHMgdGV4dC1yb3NlLTIwMFwiPlxyXG4gICAgICAgICAgICB7ZmF0YWxFcnJvcn1cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgINCf0LXRgNC10LfQsNCz0YDRg9C30LjRgtGMINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPE1vYmlsZVRhYnNcclxuICAgICAgICAgIGFjdGl2ZVRhYj17YWN0aXZlVGFifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldEFjdGl2ZVRhYn1cclxuICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XHJcbiAgICAgICAgICBvbkxvZ291dD17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17bGl2ZVVwZGF0ZWRBdH1cclxuICAgICAgICAgIGxpdmVTdGF0dXM9e2Nvbm5lY3Rpb25TdGF0dXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XHJcbiAgICAgICAgICBhY3RpdmVUYWI9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XHJcbiAgICAgICAgICBvbkxvZ291dD17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17bGl2ZVVwZGF0ZWRBdH1cclxuICAgICAgICAgIGxpdmVTdGF0dXM9e2Nvbm5lY3Rpb25TdGF0dXN9XHJcbiAgICAgICAgICBhY3RpdmVEYXRhVGFibGU9e2FjdGl2ZURhdGFUYWJsZX1cclxuICAgICAgICAgIG9uU2VsZWN0VGFibGU9e2hhbmRsZVNpZGViYXJUYWJsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17bWFpbkNsYXNzTmFtZX0+XHJcbiAgICAgICAgICB7Z2xvYmFsRXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e2dsb2JhbEVycm9yfSAvPn1cclxuICAgICAgICAgIHtyZW5kZXJBY3RpdmUoKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZmlsZU1vZGFsIHN0YXRlPXtwcm9maWxlTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KX0gLz5cclxuICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICBvcGVuPXthcHBvaW50bWVudE1vZGFsLm9wZW59XHJcbiAgICAgICAgYXBwb2ludG1lbnQ9e2FwcG9pbnRtZW50TW9kYWwuZGF0YX1cclxuICAgICAgICBvcHRpb25zPXthcHBvaW50bWVudE1vZGFsLm9wdGlvbnMgfHwgb3B0aW9uc0NhY2hlIHx8IHt9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSl9XHJcbiAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlQXBwb2ludG1lbnR9XHJcbiAgICAgICAgaXNOZXc9e2FwcG9pbnRtZW50TW9kYWwuaXNOZXd9XHJcbiAgICAgICAgY2xpZW50cz17ZGFzaGJvYXJkPy5jbGllbnRzIHx8IFtdfVxyXG4gICAgICAgIGNhbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZX1cclxuICAgICAgICBvbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZSA/IGhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IDogbnVsbH1cclxuICAgICAgLz5cclxuICAgICAgPENvbmZpcm1EaWFsb2cgey4uLmNvbmZpcm1EaWFsb2d9IG9uUmVzdWx0PXtoYW5kbGVDb25maXJtUmVzdWx0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmxldCByZWFjdEFwcFJvb3QgPSBudWxsO1xyXG5jb25zdCByZW5kZXJBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXJvb3RFbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDQvdCw0LnQtNC10L0g0LrQvtC90YLQtdC50L3QtdGAICNyb290Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlYWN0QXBwUm9vdCkge1xyXG4gICAgICByZWFjdEFwcFJvb3QgPVxyXG4gICAgICAgIHR5cGVvZiBjcmVhdGVSb290ID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpXHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICByZW5kZXI6IChub2RlKSA9PiBSZWFjdERPTS5yZW5kZXIobm9kZSwgcm9vdEVsZW1lbnQpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVhY3RBcHBSb290LnJlbmRlcig8QXBwIC8+KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRmF0YWwgcmVuZGVyIGVycm9yOicsIGVycm9yKTtcclxuICAgIGlmIChyb290RWxlbWVudCkge1xyXG4gICAgICByb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIlxyXG4gICAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6MTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAyMDYxNztcclxuICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHBhZGRpbmc6MjRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDo0ODBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQ4LDExMywxMTMsMC40KTtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsMC44NSk7Ym9yZGVyLXJhZGl1czoxNnB4O3BhZGRpbmc6MjRweDtcIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6I2ZlY2FjYTttYXJnaW4tYm90dG9tOjEycHg7XCI+XHJcbiAgICAgICAgICAgICAg0J7RiNC40LHQutCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC40L3RgtC10YDRhNC10LnRgdCwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweDtjb2xvcjojY2JkNWY1O3doaXRlLXNwYWNlOnByZS13cmFwO1wiPlxyXG4gICAgICAgICAgICAgICR7ZXJyb3I/Lm1lc3NhZ2UgfHwgJ9Ch0LzQvtGC0YDQuNGC0LUg0LrQvtC90YHQvtC70Ywg0LHRgNCw0YPQt9C10YDQsCAoRjEyKSd9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIlxyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICM0YjU1NjM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OTk5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgXCIgb25jbGljaz1cIndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVwiPlxyXG4gICAgICAgICAgICDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyQXBwKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEs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QUFFNFIsZ0JBQWdCLENBQUM1UixLQUFNO0lBQzlCNUwsT0FBTyxFQUFFLENBQUE5VSxTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRThVLE9BQU8sS0FBSSxFQUFHO0lBQ2xDMEwsU0FBUyxFQUFFOFIsZ0JBQWdCLENBQUNwc0IsV0FBWTtJQUN4Q21GLFFBQVEsRUFBRWluQixnQkFBZ0IsQ0FBQ3BzQixXQUFXLEdBQUd1N0IsdUJBQXVCLEdBQUc7RUFBSyxDQUN6RSxDQUFDLGVBQ0ZsN0MsS0FBQSxDQUFBcVYsYUFBQSxDQUFDc0YsYUFBYSxFQUFBcUYsUUFBQSxLQUFLNHRCLGFBQWE7SUFBRTV5QixRQUFRLEVBQUVvekI7RUFBb0IsRUFBRSxDQUMvRCxDQUFDO0FBRVYsQ0FBQztBQUVELElBQUltTyxZQUFZLEdBQUcsSUFBSTtBQUN2QixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3RCLElBQU1DLFdBQVcsR0FBR2x6QyxRQUFRLENBQUNtekMsY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUNuRCxJQUFJO0lBQ0YsSUFBSSxDQUFDRCxXQUFXLEVBQUU7TUFDaEIsTUFBTSxJQUFJdHlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUM5QztJQUNBLElBQUksQ0FBQ295QyxZQUFZLEVBQUU7TUFDakJBLFlBQVksR0FDVixPQUFPNTdDLFVBQVUsS0FBSyxVQUFVLEdBQzVCQSxVQUFVLENBQUM4N0MsV0FBVyxDQUFDLEdBQ3ZCO1FBQ0VFLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHNXFCLElBQUk7VUFBQSxPQUFLdHhCLFFBQVEsQ0FBQ2s4QyxNQUFNLENBQUM1cUIsSUFBSSxFQUFFMHFCLFdBQVcsQ0FBQztRQUFBO01BQ3RELENBQUM7SUFDVDtJQUNBRixZQUFZLENBQUNJLE1BQU0sY0FBQzM4QyxLQUFBLENBQUFxVixhQUFBLENBQUNxekIsR0FBRyxNQUFFLENBQUMsQ0FBQztFQUM5QixDQUFDLENBQUMsT0FBTzlnQyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMscUJBQXFCLEVBQUVBLEtBQUssQ0FBQztJQUMzQyxJQUFJNjBDLFdBQVcsRUFBRTtNQUNmQSxXQUFXLENBQUNHLFNBQVMsdThCQUFBNTdDLE1BQUEsQ0FtQlgsQ0FBQTRHLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFeEIsT0FBTyxLQUFJLGlDQUFpQyxxY0FjNUQ7SUFDSDtFQUNGO0FBQ0YsQ0FBQztBQUVEbzJDLFNBQVMsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119