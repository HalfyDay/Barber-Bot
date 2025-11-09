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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX1JlYWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsIkZyYWdtZW50IiwiX1JlYWN0RE9NIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJjcmVhdGVSb290IiwicmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25jYXQiLCJERUZBVUxUX0FQSV9CQVNFX1VSTCIsIkFQSV9CQVNFX1VSTCIsIl9fQkFSQkVSX0FQSV9CQVNFX18iLCJWSUVXX1RBQlMiLCJpZCIsImxhYmVsIiwiVEFCTEVfT1JERVIiLCJWSVNJQkxFX1RBQkxFX09SREVSIiwidGFibGUiLCJEQVRBX1RBQkxFUyIsIlRBQkxFX0NPTkZJRyIsIkFwcG9pbnRtZW50cyIsIm1vZGUiLCJjYW5DcmVhdGUiLCJzdXBwb3J0c0JhcmJlckZpbHRlciIsInN1cHBvcnRzU3RhdHVzRmlsdGVyIiwiZGVmYXVsdFNvcnQiLCJrZXkiLCJkaXJlY3Rpb24iLCJTY2hlZHVsZXMiLCJVc2VycyIsIkJhcmJlcnMiLCJTZXJ2aWNlcyIsIkRBVEFfU0hPUlRDVVRTIiwibWFwIiwidGFibGVJZCIsIl9UQUJMRV9DT05GSUckdGFibGVJZCIsIlRBQkxFX0NPTFVNTlMiLCJlZGl0YWJsZSIsInR5cGUiLCJpc1Byb2ZpbGVMaW5rIiwibWluV2lkdGgiLCJvcHRpb25zS2V5Iiwibm9XcmFwIiwiYWxpZ24iLCJSQVRJTkdfTUlOIiwiUkFUSU5HX01BWCIsIlJBVElOR19TVEVQIiwiYXZhdGFyT3B0aW9uc0NhY2hlIiwiWUVBUl9JTl9NUyIsIkRBWV9JTl9NUyIsImJ1aWxkTmV3QmFyYmVyU3RhdGUiLCJwYXNzd29yZCIsInJhdGluZyIsImNvbG9yIiwiYXZhdGFyVXJsIiwiZGVzY3JpcHRpb24iLCJwaG9uZSIsInRlbGVncmFtSWQiLCJpc0FjdGl2ZSIsImJ1aWxkTmV3U2VydmljZVN0YXRlIiwiZHVyYXRpb24iLCJwcmljZXMiLCJBQ1RJVkVfQkFSQkVSX0xBQkVMIiwiZnJvbUNoYXJDb2RlIiwiSElEREVOX0JBUkJFUl9MQUJFTCIsIkFDVElWRV9TRVJWSUNFX0xBQkVMIiwiSElEREVOX1NFUlZJQ0VfTEFCRUwiLCJidWlsZFZpc2l0SGlzdG9yeSIsImFwcG9pbnRtZW50cyIsInVuZGVmaW5lZCIsImN1dG9mZiIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJhcHB0Iiwic3RhcnREYXRlIiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJUaW1lIiwic3RhcnREYXRlVGltZSIsImdldFRpbWUiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwiU3RhdHVzIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNvcnQiLCJiIiwiaW5kZXgiLCJvcmRlck51bWJlciIsImRhdGVMYWJlbCIsImZvcm1hdERhdGVUaW1lIiwiZGVmYXVsdENvbmZpcm1TdGF0ZSIsIm9wZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtTGFiZWwiLCJjYW5jZWxMYWJlbCIsInRvbmUiLCJnZXRSZWNvcmRJZCIsInJlY29yZCIsIklkIiwiSUQiLCJyZWNvcmRJZCIsIklEX1JlY29yZCIsImNsYXNzTmFtZXMiLCJfbGVuIiwiY2xhc3NlcyIsIl9rZXkiLCJCb29sZWFuIiwiam9pbiIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVyIiwicHJldiIsIm5leHRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VOb3dUaWNrIiwiaW50ZXJ2YWxNcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0Tm93IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEF2YXRhck9wdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwicGF5bG9hZCIsImltYWdlcyIsIl9jb250ZXh0IiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIm5vcm1hbGl6ZUltYWdlUGF0aCIsIlNldCIsIm5vcm1hbGl6ZVRleHQiLCJpc1ZhbGlkRGF0ZSIsImlzTmFOIiwicmVzb2x2ZUFzc2V0VXJsIiwibm9ybWFsaXplZCIsInRyaW0iLCJzdGFydHNXaXRoIiwic2FuaXRpemVkIiwicmVwbGFjZSIsInJlc29sdmVkIiwibnVtYmVyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdEN1cnJlbmN5IiwibnVtZXJpYyIsImlzRmluaXRlIiwiZm9ybWF0IiwicGx1cmFsaXplIiwiY291bnQiLCJfcmVmMiIsIl9yZWYzIiwib25lIiwiZmV3IiwibWFueSIsIm1vZDEwIiwibW9kMTAwIiwiY2Fub25pY2FsaXplTmFtZSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiYmFyYmVySWQiLCJwaWNrQmFyYmVyRm9yVXNlciIsInVzZXJTZXNzaW9uIiwiYXZhaWxhYmxlQmFyYmVycyIsImZhbGxiYWNrIiwiY2FuZGlkYXRlcyIsInByZWZlcnJlZE5hbWUiLCJjYW5kaWRhdGUiLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZWRPcHRpb25zIiwiYmFyYmVyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIl9sb29wIiwibWF0Y2hJbmRleCIsImZpbmRJbmRleCIsIm9wdGlvbiIsIl9yZXQiLCJzIiwiZXJyIiwiZm9ybWF0RGF0ZSIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0VGltZSIsInNhZmVWYWx1ZSIsImluY2x1ZGVzIiwic3BsaXQiLCJmb3JtYXRQaG9uZUlucHV0IiwiZGlnaXRzIiwiZm9ybWF0VGVsZWdyYW1IYW5kbGUiLCJoYW5kbGUiLCJidWlsZFRlbGVncmFtTGluayIsImRhdGUiLCJ0aW1lIiwiZGF0ZVBhcnQiLCJ0aW1lUGFydCIsImJhY2t1cERhdGVGb3JtYXR0ZXIiLCJob3VyIiwibWludXRlIiwicGFyc2VCYWNrdXBUaW1lc3RhbXAiLCJmaWxlbmFtZSIsIm1hdGNoIiwiX21hdGNoIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImlzb0NhbmRpZGF0ZSIsInBhcnNlZCIsImZvcm1hdEJhY2t1cExhYmVsIiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwicGFkU3RhcnQiLCJ0b0xvY2FsZVN0cmluZyIsIlNUQVRVU19UUkFOU0xBVElPTlMiLCJhY3RpdmUiLCJjb25maXJtIiwiY29uZmlybWVkIiwiY29tcGxldGUiLCJmaW5pc2hlZCIsImNhbmNlbCIsImNhbmNlbGVkIiwiY2FuY2VsbGVkIiwibm9zaG93IiwibWlzc2VkIiwicGVuZGluZyIsIndhaXQiLCJ3YWl0aW5nIiwicHJvY2Vzc2luZyIsIlNUQVRVU19CQURHRV9NQVAiLCLQkNC60YLQuNCy0L3QsNGPIiwi0J/QvtC00YLQstC10YDQttC00LXQvdCwIiwi0JfQsNCy0LXRgNGI0LXQvdCwIiwi0J7RgtC80LXQvdC10L3QsCIsImdldFN0YXR1c0JhZGdlQ2xhc3NlcyIsInN0YXR1cyIsIm5vcm1hbGl6ZVN0YXR1c1ZhbHVlIiwiSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyIsIkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQ09NUExFVEVEX1NUQVRVU19UT0tFTlMiLCJ0cmFuc2xhdGVkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVTdGF0dXNMaXN0Iiwic3RhdHVzZXMiLCJzZWVuIiwiaGFzIiwiYWRkIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJwYXJzZVRpbWVSYW5nZVZhbHVlIiwic2FmZSIsInN0YXJ0IiwiZW5kIiwiX3NhZmUkc3BsaXQkbWFwIiwicGFydCIsIl9zYWZlJHNwbGl0JG1hcDIiLCJyYXdTdGFydCIsIl9zYWZlJHNwbGl0JG1hcDIkIiwicmF3RW5kIiwicGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImJ1aWxkVGltZVJhbmdlVmFsdWUiLCJzYWZlU3RhcnQiLCJzYWZlRW5kIiwiX3JlZjQiLCJfcmVmNSIsInRvIiwiZXh0cmFjdFRpbWVTdGFydCIsImRhdGVWYWx1ZSIsInRpbWVWYWx1ZSIsImZhbGxiYWNrSXNvIiwicGFyc2VkRmFsbGJhY2siLCJnZXRBcHBvaW50bWVudEVuZERhdGUiLCJfcGFyc2VUaW1lUmFuZ2VQYXJ0cyIsImVuZFRva2VuIiwiYmFzZURhdGVQYXJ0IiwidG9JU09TdHJpbmciLCJyZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUiLCJhcHBvaW50bWVudCIsInJlc29sdmVBcHBvaW50bWVudEVuZERhdGUiLCJlbmREYXRlIiwic2hvdWxkRGlzcGxheUFwcG9pbnRtZW50IiwiaXNBcHBvaW50bWVudE9uZ29pbmciLCJzdGFydFRzIiwiZW5kVHMiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjYiLCJfcmVmNiRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY3IiwiVmlzaXRIaXN0b3J5TGlzdCIsIl9yZWY4IiwiX3JlZjgkdmlzaXRzIiwidmlzaXRzIiwiX3JlZjgkbG9hZGluZyIsImxvYWRpbmciLCJfcmVmOCRlcnJvciIsIl9yZWY4JGVtcHR5TWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9yZWY4JG1heEhlaWdodENsYXNzIiwibWF4SGVpZ2h0Q2xhc3MiLCJfcmVmOCRzaG93U3VtbWFyeSIsInNob3dTdW1tYXJ5IiwidmlzaXQiLCJCYXJiZXIiLCJTZWN0aW9uQ2FyZCIsIl9yZWY5IiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiTGl2ZUJhZGdlIiwiX3JlZjAiLCJ0aW1lc3RhbXAiLCJfcmVmMCRzdGF0dXMiLCJ0aWNraW5nTm93IiwiaXNPZmZsaW5lIiwiaXNPbmxpbmUiLCJ0aW1lTGFiZWwiLCJJY29uVHJhc2giLCJfcmVmMSIsIl9yZWYxJGNsYXNzTmFtZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwiSWNvbkRhc2hib2FyZCIsIl9yZWYxMCIsIl9yZWYxMCRjbGFzc05hbWUiLCJJY29uRGF0YSIsIl9yZWYxMSIsIl9yZWYxMSRjbGFzc05hbWUiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJyeCIsIkljb25Cb3QiLCJfcmVmMTIiLCJfcmVmMTIkY2xhc3NOYW1lIiwiY3giLCJjeSIsIkljb25TeXN0ZW0iLCJfcmVmMTMiLCJfcmVmMTMkY2xhc3NOYW1lIiwiSWNvbkRvdHMiLCJfcmVmMTQiLCJfcmVmMTQkY2xhc3NOYW1lIiwiVklFV19UQUJfSUNPTlMiLCJkYXNoYm9hcmQiLCJ0YWJsZXMiLCJib3QiLCJzeXN0ZW0iLCJVSV9URVhUIiwiZnJlZXplIiwiYWNjb3VudFRpdGxlIiwibG9nb3V0IiwibmV3QXBwb2ludG1lbnRDdGEiLCJsaXZlRmFsbGJhY2siLCJNb2RhbCIsIl9yZWYxNSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb290ZXIiLCJfcmVmMTUkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiQ29uZmlybURpYWxvZyIsIl9yZWYxNiIsIl9yZWYxNiRjb25maXJtTGFiZWwiLCJfcmVmMTYkY2FuY2VsTGFiZWwiLCJfcmVmMTYkdG9uZSIsIm9uUmVzdWx0IiwiY29uZmlybVRvbmVDbGFzcyIsIlN0YXRDYXJkIiwiX3JlZjE3IiwiX3JlZjE3JGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMTgiLCJzZXNzaW9uIiwiYWN0aXZlVGFiIiwib25DaGFuZ2UiLCJvbkxvZ291dCIsImxpdmVVcGRhdGVkQXQiLCJfcmVmMTgkbGl2ZVN0YXR1cyIsImxpdmVTdGF0dXMiLCJfcmVmMTgkYWN0aXZlRGF0YVRhYmwiLCJhY3RpdmVEYXRhVGFibGUiLCJvblNlbGVjdFRhYmxlIiwidGFiIiwic2hvcnRjdXQiLCJpc1Nob3J0Y3V0QWN0aXZlIiwiZGlzYWJsZWQiLCJNb2JpbGVUYWJzIiwiX3JlZjE5IiwiX3JlZjE5JGxpdmVTdGF0dXMiLCJoYW5kbGVTZWxlY3QiLCJ0YWJJZCIsInJlbmRlckxpdmVJbmRpY2F0b3IiLCJJY29uQ29tcG9uZW50IiwiRGFzaGJvYXJkVmlldyIsIl9yZWYyMCIsIl9kYXRhJGFwcG9pbnRtZW50cyIsIl9zdGF0cyR0b3RhbFVzZXJzIiwiX3N0YXRzJGFjdGl2ZUFwcG9pbnRtIiwiX3N0YXRzJGNvbmZpcm1lZFllYXIiLCJfc3RhdHMkdG9kYXlzQXBwb2ludG0iLCJkYXRhIiwib25PcGVuQXBwb2ludG1lbnQiLCJvbk9wZW5Qcm9maWxlIiwib25DcmVhdGVBcHBvaW50bWVudCIsInN0YXRzIiwidXBjb21pbmdSYXciLCJ1cGNvbWluZyIsInVwY29taW5nTGlzdCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDIiLCJsZWZ0IiwiTUFYX1NBRkVfSU5URUdFUiIsInJpZ2h0IiwiZm9ybWF0R3JvdXBMYWJlbCIsIl91bnVzZWQiLCJncm91cGVkVXBjb21pbmciLCJncm91cHMiLCJNYXAiLCJidWNrZXQiLCJnZXQiLCJzZXQiLCJlbnRyaWVzIiwiX3JlZjIxIiwiX3JlZjIyIiwiaXRlbXMiLCJzb3J0VmFsdWUiLCJtaW4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQzIiwidXBjb21pbmdBY3Rpb25zIiwidG90YWxVc2VycyIsImFjdGl2ZUFwcG9pbnRtZW50cyIsImNvbmZpcm1lZFllYXIiLCJ0b2RheXNBcHBvaW50bWVudHMiLCJncm91cCIsImluUHJvZ3Jlc3MiLCJjYXJkUHJvcHMiLCJyb2xlIiwidGFiSW5kZXgiLCJhbGxvd0RlbGV0ZSIsIm9uS2V5RG93biIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzMiIsInN0YXR1c0xhYmVsIiwic2VydmljZXNMaXN0IiwiX2V4dGVuZHMiLCJDdXN0b21lck5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXJ2aWNlIiwiQmFyYmVyQXZhdGFyUGlja2VyIiwiX3JlZjIzIiwibG9hZE9wdGlvbnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImF2YXRhck9wdGlvbnMiLCJzZXRBdmF0YXJPcHRpb25zIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzaG93R2FsbGVyeSIsInNldFNob3dHYWxsZXJ5Iiwibm9ybWFsaXplZFZhbHVlIiwiYXZhaWxhYmxlT3B0aW9ucyIsImlzTW91bnRlZCIsImxvYWQiLCJfcmVmMjQiLCJfY2FsbGVlMiIsImxvYWRlciIsImFzc2V0c1BheWxvYWQiLCJhc3NldHMiLCJfdCIsIl9jb250ZXh0MiIsInByZXZpZXdTcmMiLCJzcmMiLCJhbHQiLCJwcmVzZXQiLCJpc1NlbGVjdGVkIiwiREFZX0lOREVYX0xPT0tVUCIsImZ1bGwiLCJzaG9ydCIsImdldERheUluZGV4IiwiZm9ybWF0U2NoZWR1bGVEYXlTaG9ydCIsImZhbGxiYWNrRGF5Iiwic2FmZURhdGUiLCJfdW51c2VkMiIsIm5vcm1hbGl6ZWRGYWxsYmFjayIsImZvcm1hdFNjaGVkdWxlRGF0ZUxhYmVsIiwiX3VudXNlZDMiLCJpc1RvZGF5RGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwYXJzZVNsb3RUaW1lTWludXRlcyIsImdldFNjaGVkdWxlU29ydFZhbHVlIiwic2xvdCIsIldlZWsiLCJiYXNlIiwiZGF5SW5kZXgiLCJEYXlPZldlZWsiLCJSYXRpbmdTbGlkZXIiLCJfcmVmMjUiLCJfcmVmMjUkZGVuc2UiLCJkZW5zZSIsInJhdGluZ1ZhbHVlIiwidG9GaXhlZCIsIndyYXBwZXJDbGFzcyIsImxhYmVsQ2xhc3MiLCJzdGVwIiwiQmFyYmVyc1ZpZXciLCJfcmVmMjYiLCJfd29ya2luZ0JhcmJlciRuYW1lIiwiX3dvcmtpbmdCYXJiZXIkcGFzc3dvIiwiX3JlZjI2JGJhcmJlcnMiLCJiYXJiZXJzIiwiX3JlZjI2JHNjaGVkdWxlcyIsInNjaGVkdWxlcyIsImxvYWRBdmF0YXJPcHRpb25zIiwib25GaWVsZENoYW5nZSIsIm9uU2F2ZSIsIm9uQWRkIiwib25EZWxldGUiLCJvblNjaGVkdWxlVXBkYXRlIiwiX3VzZVN0YXRlMSIsInRhcmdldElkIiwiX3VzZVN0YXRlMTAiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImRyYWZ0QmFyYmVyIiwic2V0RHJhZnRCYXJiZXIiLCJvcGVuRWRpdG9yIiwiY2xvc2VFZGl0b3IiLCJpc0NyZWF0ZU1vZGUiLCJhY3RpdmVCYXJiZXIiLCJmaW5kIiwid29ya2luZ0JhcmJlciIsIndvcmtpbmdCYXJiZXJTY2hlZHVsZSIsImhhbmRsZUZpZWxkQ2hhbmdlIiwiZmllbGQiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGVsZXRlIiwicmVzdWx0IiwicmVuZGVyU3RhdHVzQmFkZ2UiLCJjYW5TdWJtaXQiLCJoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZSIsIl9yZWYyNyIsIl9jYWxsZWUzIiwic2xvdElkIiwiX2NvbnRleHQzIiwiX3giLCJfeDIiLCJhdmF0YXJTcmMiLCJwaG9uZUxhYmVsIiwicmF0aW5nTGFiZWwiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJkYXlMYWJlbCIsImlzVG9kYXlTbG90IiwiVGltZVJhbmdlUGlja2VyIiwiYnV0dG9uQ2xhc3NOYW1lIiwiU2VydmljZXNWaWV3IiwiX3JlZjI4IiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUyIiwiX3dvcmtpbmdTZXJ2aWNlJGR1cmF0IiwiX3JlZjI4JHNlcnZpY2VzIiwic2VydmljZXMiLCJfcmVmMjgkYmFyYmVycyIsIm9uUHJpY2VDaGFuZ2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImRyYWZ0U2VydmljZSIsInNldERyYWZ0U2VydmljZSIsImFjdGl2ZVNlcnZpY2UiLCJ3b3JraW5nU2VydmljZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUiLCJoYW5kbGVEZWxldGVMb2NhbCIsInNlcnZpY2VQcmljZVN1bW1hcnkiLCJkZXRhaWxzIiwidmFsdWVzIiwiX3NlcnZpY2UkcHJpY2VzIiwicHJpY2UiLCJzdW1tYXJ5IiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlIiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlMiIsIk11bHRpU2VsZWN0Q2VsbCIsIl9yZWYyOSIsIl9yZWYyOSRvcHRpb25zIiwib25Db21taXQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJkcmFmdCIsInNldERyYWZ0IiwiYW5jaG9yUmVmIiwiX3VzZVN0YXRlMjEiLCJ0b3AiLCJfdXNlU3RhdGUyMiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVQb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJuZXh0TGVmdCIsImlubmVyV2lkdGgiLCJuZXh0VG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJ0b2dnbGVPcHRpb24iLCJzdHlsZSIsImNoZWNrZWQiLCJib2R5IiwiX3JlZjMwIiwiX3JlZjMwJHRpdGxlIiwiX3JlZjMwJHBsYWNlaG9sZGVyIiwiX3JlZjMwJGJ1dHRvbkNsYXNzTmFtIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJfdXNlU3RhdGUyNiQiLCJub3JtYWxpemVIb3VyVmFsdWUiLCJpbnB1dFZhbHVlIiwiX2lucHV0VmFsdWUkc3BsaXQiLCJfaW5wdXRWYWx1ZSRzcGxpdDIiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xlYXIiLCJFZGl0YWJsZUNlbGwiLCJfcmVmMzEiLCJjb2x1bW4iLCJvblVwZGF0ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJjb21taXQiLCJvcHRpb25MaXN0Iiwib25CbHVyIiwiQ29sdW1uTWVudSIsIl9yZWYzMiIsImNvbHVtbnMiLCJfcmVmMzIkaGlkZGVuQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJvblRvZ2dsZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJNdWx0aVNlbGVjdENoZWNrYm94ZXMiLCJfcmVmMzMiLCJfcmVmMzMkb3B0aW9ucyIsIl9yZWYzMyR2YWx1ZSIsIl9yZWYzMyRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VsZWN0ZWQiLCJub3JtYWxpemVkUXVlcnkiLCJmaWx0ZXJlZCIsInRvZ2dsZSIsImV4aXN0cyIsIkNsaWVudExvb2t1cElucHV0IiwiX3JlZjM0IiwiX3JlZjM0JGxhYmVsIiwiX3JlZjM0JHZhbHVlIiwiX3JlZjM0JGNsaWVudHMiLCJjbGllbnRzIiwib25TZWxlY3RDbGllbnQiLCJfcmVmMzQkcGxhY2Vob2xkZXIiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImNvbnRhaW5lclJlZiIsIm1hdGNoZXMiLCJzaG9ydGxpc3QiLCJjbGllbnQiLCJvbkZvY3VzIiwib25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0YXR1c01lbnUiLCJfcmVmMzUiLCJfcmVmMzUkc3RhdHVzZXMiLCJfcmVmMzUkaGlkZGVuU3RhdHVzZXMiLCJoaWRkZW5TdGF0dXNlcyIsIm9uUmVzZXQiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiVGFibGVUb29sYmFyIiwiX3JlZjM2Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZEJhcmJlciIsInNldFNlbGVjdGVkQmFyYmVyIiwiX3JlZjM2JGJhcmJlcnMiLCJfcmVmMzYkc3RhdHVzZXMiLCJfcmVmMzYkaGlkZGVuU3RhdHVzZXMiLCJ0b2dnbGVTdGF0dXMiLCJyZXNldFN0YXR1c2VzIiwiX3JlZjM2JGNvbHVtbnMiLCJfcmVmMzYkaGlkZGVuQ29sdW1ucyIsInRvZ2dsZUNvbHVtbiIsIm9uT3BlbkNyZWF0ZSIsIm9uUmVmcmVzaCIsInNob3dQYXN0QXBwb2ludG1lbnRzIiwic2V0U2hvd1Bhc3RBcHBvaW50bWVudHMiLCJfcmVmMzYkc3VwcG9ydHNHcm91cGkiLCJzdXBwb3J0c0dyb3VwaW5nIiwiX3JlZjM2JGdyb3VwQnlEYXRlIiwiZ3JvdXBCeURhdGUiLCJzZXRHcm91cEJ5RGF0ZSIsImNoaXBDbGFzcyIsImFsbG93TWFudWFsUmVmcmVzaCIsImlubGluZUNyZWF0ZUZvck1vYmlsZSIsInNob3dDb2x1bW5NZW51Iiwic3RhdHVzQ29udHJvbCIsImNvbHVtbkNvbnRyb2wiLCJwYXN0Q29udHJvbCIsImdyb3VwaW5nQ29udHJvbCIsImNvbnRyb2xPcmRlciIsIm5vZGUiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiY29udHJvbCIsImJ1aWxkQXBwb2ludG1lbnRHcm91cHMiLCJyZWNvcmRzIiwic29ydERpcmVjdGlvbiIsImJ1Y2tldHMiLCJjb21wYXJlIiwiX3JlZjM3IiwiX2dldEFwcG9pbnRtZW50U3RhcnRENiIsIl9yZWYzOCIsInNvcnRlZEl0ZW1zIiwiX2dldEFwcG9pbnRtZW50U3RhcnRENCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDUiLCJyZWZlcmVuY2UiLCJNSU5fU0FGRV9JTlRFR0VSIiwicmFuZG9tIiwicmVzb2x2ZVNvcnRWYWx1ZSIsInJvdyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDciLCJ0cyIsIlNvcnRJbmRpY2F0b3IiLCJfcmVmMzkiLCJTY2hlZHVsZXNCb2FyZCIsIl9yZWY0MCIsIl9yZWY0MCRyb3dzIiwiX3JlZjQwJGNvbHVtbnMiLCJ2aXNpYmxlS2V5cyIsImVkaXRhYmxlQ29sdW1ucyIsImdyb3VwZWRCeURhdGUiLCJfcmVmNDEiLCJfcmVmNDIiLCJzbG90cyIsInNvcnRlZFNsb3RzIiwibG9jYWxlQ29tcGFyZSIsIk5hTiIsImJhZGdlIiwiQXBwb2ludG1lbnRzTGlzdCIsIl9yZWY0MyIsIl9yZWY0MyRncm91cHMiLCJvbk9wZW4iLCJfcmVmNDMkY29sdW1ucyIsIl9yZWY0MyRoaWRkZW5Db2x1bW5zIiwidmlzaWJsZUNvbHVtbnMiLCJyZW5kZXJDb2x1bW5WYWx1ZSIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzMyIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzNCIsIkRhdGFUYWJsZSIsIl9yZWY0NCIsInNvcnRDb25maWciLCJvblNvcnQiLCJfcmVmNDQkZ3JvdXBCeURhdGUiLCJpc0FwcG9pbnRtZW50c1RhYmxlIiwiY2FuR3JvdXBBcHBvaW50bWVudHMiLCJncm91cGVkUm93cyIsIl92aXNpYmxlQ29sdW1ucyQiLCJjYXJkS2V5Iiwic29ydGFibGUiLCJjb2xTcGFuIiwiQ2xpZW50c0xpc3QiLCJfcmVmNDUiLCJfbW9kYWxTdGF0ZSRyZWNvcmQiLCJfcmVmNDUkY2xpZW50cyIsIl9yZWY0NSRiYXJiZXJzIiwiZmV0Y2hIaXN0b3J5Iiwib25SZXF1ZXN0Q29uZmlybSIsIl91c2VTdGF0ZTM5IiwiaGlzdG9yeSIsIl91c2VTdGF0ZTQwIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJiYXJiZXJPcHRpb25zIiwib3BlbkNsaWVudE1vZGFsIiwiX3JlZjQ2IiwiX2NhbGxlZTQiLCJwcm9maWxlIiwiX3QyIiwiX2NvbnRleHQ0IiwiTmFtZSIsIl94MyIsImNsb3NlQ2xpZW50TW9kYWwiLCJQaG9uZSIsIlRlbGVncmFtSUQiLCJfcmVmNDciLCJfY2FsbGVlNSIsIl9jb250ZXh0NSIsInNraXBDb25maXJtIiwiY2xpZW50TnVtYmVyIiwicGhvbmVEaXNwbGF5IiwidGVsZWdyYW1IYW5kbGUiLCJDcmVhdGVSZWNvcmRNb2RhbCIsIl9yZWY0OCIsInRhYmxlTmFtZSIsIl9yZWY0OCRjbGllbnRzIiwiX3JlZjQ4JGhpZGRlbkZpZWxkcyIsImhpZGRlbkZpZWxkcyIsImluaXRpYWxTdGF0ZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJpc0FwcG9pbnRtZW50c0NyZWF0ZSIsImhhbmRsZVN1Ym1pdCIsIl9yZWY0OSIsIl9yZWY1MCIsImhhbmRsZUNsaWVudEF1dG9GaWxsIiwicHJlZmVycmVkQmFyYmVyIiwiVXNlcklEIiwic2VsZWN0ZWRWYWx1ZXMiLCJQcm9maWxlTW9kYWwiLCJfcmVmNTEiLCJfc3RhdGUkZGF0YSIsIl9zdGF0ZSRkYXRhMiIsIl9zdGF0ZSRkYXRhMyIsIl9zdGF0ZSRkYXRhNCIsInN0YXRlIiwidmlzaXRIaXN0b3J5IiwidXNlciIsInBob25lSHJlZiIsInRlbGVncmFtSHJlZiIsImhyZWYiLCJyZWwiLCJCYWNrdXBzUGFuZWwiLCJfcmVmNTIiLCJfcmVmNTIkYmFja3VwcyIsImJhY2t1cHMiLCJvblJlc3RvcmUiLCJvbkNyZWF0ZSIsImJhY2t1cCIsIkFwcG9pbnRtZW50TW9kYWwiLCJfcmVmNTMiLCJfcmVmNTMkb3B0aW9ucyIsIl9yZWY1MyRjYW5EZWxldGUiLCJjYW5EZWxldGUiLCJfcmVmNTMkaXNOZXciLCJpc05ldyIsIl9yZWY1MyRjbGllbnRzIiwiYnVpbGREcmFmdCIsInVzZXJJZCIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJzZXJ2aWNlc1NlbGVjdGlvbiIsImhhbmRsZUNoYW5nZSIsInN1Ym1pdERyYWZ0IiwibmV4dERyYWZ0IiwiaGFuZGxlTWFya0NvbXBsZXRlZCIsIlRhYmxlc1dvcmtzcGFjZSIsIl9yZWY1NCIsIl9UQUJMRV9DT05GSUckYWN0aXZlVCIsImFwaVJlcXVlc3QiLCJzaGFyZWRPcHRpb25zIiwib25PcHRpb25zVXBkYXRlIiwib25PcGVuQXBwb2ludG1lbnRSZWNvcmQiLCJfcmVmNTQkY2xpZW50cyIsIl9yZWY1NCRjdXJyZW50VXNlciIsImN1cnJlbnRVc2VyIiwiX3JlZjU0JGxpdmVBcHBvaW50bWVuIiwibGl2ZUFwcG9pbnRtZW50cyIsIl9yZWY1NCRsaXZlVXBkYXRlZEF0IiwiX3JlZjU0JGJhcmJlcnMiLCJfcmVmNTQkc2VydmljZXMiLCJvbkJhcmJlckZpZWxkQ2hhbmdlIiwib25TYXZlQmFyYmVyIiwib25BZGRCYXJiZXIiLCJvbkRlbGV0ZUJhcmJlciIsIm9uU2VydmljZUZpZWxkQ2hhbmdlIiwib25TZXJ2aWNlUHJpY2VDaGFuZ2UiLCJvbkRlbGV0ZVNlcnZpY2UiLCJvbkFkZFNlcnZpY2UiLCJvbkFjdGl2ZVRhYmxlQ2hhbmdlIiwiX3JlZjU0JHByZWZlcnJlZFRhYmxlIiwicHJlZmVycmVkVGFibGUiLCJvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQiLCJfcmVmNTQkb25SZXF1ZXN0Q29uZmkiLCJfdXNlTG9jYWxTdG9yYWdlIiwiX3VzZUxvY2FsU3RvcmFnZTIiLCJhY3RpdmVUYWJsZSIsInNldEFjdGl2ZVRhYmxlIiwiX3VzZVN0YXRlNDUiLCJyZWR1Y2UiLCJhY2MiLCJfdXNlU3RhdGU0NiIsInNldFRhYmxlcyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJkcm9wZG93bk9wdGlvbnMiLCJzZXREcm9wZG93bk9wdGlvbnMiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwidGFibGVFcnJvciIsInNldFRhYmxlRXJyb3IiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiX3VzZUxvY2FsU3RvcmFnZTMiLCJfdXNlTG9jYWxTdG9yYWdlNCIsIl91c2VMb2NhbFN0b3JhZ2U1IiwiX3VzZUxvY2FsU3RvcmFnZTYiLCJzZXRIaWRkZW5TdGF0dXNlcyIsIl91c2VMb2NhbFN0b3JhZ2U3IiwiX3VzZUxvY2FsU3RvcmFnZTgiLCJoaWRkZW5Db2x1bW5zTWFwIiwic2V0SGlkZGVuQ29sdW1uc01hcCIsIl91c2VMb2NhbFN0b3JhZ2U5IiwiX1RBQkxFX0NPTkZJRyR0YWJsZSIsIl91c2VMb2NhbFN0b3JhZ2UwIiwic29ydENvbmZpZ3MiLCJzZXRTb3J0Q29uZmlncyIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJjcmVhdGVNb2RhbE9wZW4iLCJzZXRDcmVhdGVNb2RhbE9wZW4iLCJfdXNlTG9jYWxTdG9yYWdlMSIsIl91c2VMb2NhbFN0b3JhZ2UxMCIsIl91c2VMb2NhbFN0b3JhZ2UxMSIsIl91c2VMb2NhbFN0b3JhZ2UxMiIsImdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIiwic2V0R3JvdXBBcHBvaW50bWVudHNCeURhdGUiLCJhcHBvaW50bWVudFRlbXBsYXRlIiwibmV4dFRhYmxlIiwiZXZlcnkiLCJmZXRjaFRhYmxlcyIsIl9jYWxsZWU2IiwicmVzcG9uc2VzIiwibmV4dFRhYmxlcyIsInJhd09wdGlvbnMiLCJfdDMiLCJfY29udGV4dDYiLCJhbGwiLCJjdXJyZW50Q29sdW1ucyIsInByb2Nlc3NlZFJvd3MiLCJfVEFCTEVfQ09ORklHJGFjdGl2ZVQyIiwic291cmNlIiwiY29sdW1uRGVmIiwiaGFuZGxlU29ydCIsImNvbHVtbktleSIsImhpZGRlbiIsInNpemUiLCJoYW5kbGVVcGRhdGUiLCJfcmVmNTYiLCJfY2FsbGVlNyIsIl9yZWY1NyIsIm92ZXJyaWRlVGFibGVJZCIsIm5vcm1hbGl6ZWREYXRhIiwib3JpZ2luYWwiLCJfYXJnczciLCJfdDQiLCJfY29udGV4dDciLCJsaXN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWV0aG9kIiwiX3g0IiwiX3g1IiwiX3JlZjU4IiwiX2NhbGxlZTgiLCJfcmVmNTkiLCJfcmVmNTkkc2tpcENvbmZpcm0iLCJjb25maXJtQ29weSIsIl9hcmdzOCIsIl90NSIsIl90NiIsIl9jb250ZXh0OCIsIl94NiIsImhhbmRsZUNyZWF0ZVJlY29yZCIsIl9yZWY2MCIsIl9jYWxsZWU5Iiwibm9ybWFsaXplZFBheWxvYWQiLCJfdDciLCJfY29udGV4dDkiLCJoZWFkZXJzIiwiX3g3IiwiZmV0Y2hDbGllbnRQcm9maWxlIiwidGFibGVTZXR0aW5ncyIsImlzQ3VzdG9tVGFibGUiLCJfVEFCTEVfQ09ORklHJHRhYmxlMiIsIl9yZWY2MSIsIkJvdENvbnRyb2xWaWV3IiwiX3JlZjYyIiwic2V0dGluZ3MiLCJfcmVmNjIkYmFja3VwcyIsIl9yZWY2MiRtZXNzYWdlcyIsIm1lc3NhZ2VzIiwib25Ub2dnbGVFbmFibGVkIiwib25TdGFydCIsIm9uU3RvcCIsIm9uUmVzdGFydCIsIm9uU2F2ZVNldHRpbmdzIiwib25TYXZlTWVzc2FnZSIsIm9uUmVzdG9yZUJhY2t1cCIsIm9uQ3JlYXRlQmFja3VwIiwib25EZWxldGVCYWNrdXAiLCJsaWNlbnNlU3RhdHVzIiwidXBkYXRlSW5mbyIsIm9uUmVmcmVzaFVwZGF0ZSIsIm9uQXBwbHlVcGRhdGUiLCJzeXN0ZW1CdXN5IiwiX3JlZjYyJHZpZXdNb2RlIiwidmlld01vZGUiLCJfdXNlU3RhdGU1NyIsImJvdERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNTgiLCJzZXREZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTU5IiwiYWJvdXRUZXh0IiwiX3VzZVN0YXRlNjAiLCJhYm91dCIsInNldEFib3V0IiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zIiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zMiIsIl9saWNlbnNlU3RhdHVzJGxpY2VuczMiLCJ2YWxpZCIsImxpY2Vuc2UiLCJvd25lciIsImV4cGlyZXNBdCIsIm51bWJlciIsInZlcnNpb24iLCJjaGVja2VkQXQiLCJhdmFpbGFibGUiLCJydW5uaW5nIiwiaXNCb3RFbmFibGVkIiwiTG9naW5TY3JlZW4iLCJfcmVmNjMiLCJvbkxvZ2luIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJsb2dpbk9wdGlvbnMiLCJzZXRMb2dpbk9wdGlvbnMiLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwib3B0aW9uc0Vycm9yIiwic2V0T3B0aW9uc0Vycm9yIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsImxvYWRpbmdPcHRpb25zIiwic2V0TG9hZGluZ09wdGlvbnMiLCJmZXRjaE9wdGlvbnMiLCJfcmVmNjQiLCJfY2FsbGVlMCIsIl90OCIsIl9jb250ZXh0MCIsInNlbGVjdERpc2FibGVkIiwib25TdWJtaXQiLCJBcHAiLCJfdXNlU3RhdGU3MyIsInNhdmVkIiwiX3VzZVN0YXRlNzQiLCJzZXRTZXNzaW9uIiwiX3VzZUxvY2FsU3RvcmFnZTEzIiwiX3VzZUxvY2FsU3RvcmFnZTE0Iiwic2V0QWN0aXZlVGFiIiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsInBlbmRpbmdUYWJsZVZpZXciLCJzZXRQZW5kaW5nVGFibGVWaWV3IiwiX3VzZVN0YXRlNzciLCJfdW51c2VkNCIsIl91c2VTdGF0ZTc4Iiwic2V0QWN0aXZlRGF0YVRhYmxlIiwiX3VzZVN0YXRlNzkiLCJfdXNlU3RhdGU4MCIsInNldERhc2hib2FyZCIsIl91c2VTdGF0ZTgxIiwiX3VzZVN0YXRlODIiLCJzZXRTZXJ2aWNlcyIsIl91c2VTdGF0ZTgzIiwiX3VzZVN0YXRlODQiLCJzZXRCYXJiZXJzIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsImJvdFN0YXR1cyIsInNldEJvdFN0YXR1cyIsIl91c2VTdGF0ZTg3IiwiX3VzZVN0YXRlODgiLCJib3RTZXR0aW5ncyIsInNldEJvdFNldHRpbmdzIiwiX3VzZVN0YXRlODkiLCJfdXNlU3RhdGU5MCIsImJvdE1lc3NhZ2VzIiwic2V0Qm90TWVzc2FnZXMiLCJfdXNlU3RhdGU5MSIsIl91c2VTdGF0ZTkyIiwic2V0TGljZW5zZVN0YXR1cyIsIl91c2VTdGF0ZTkzIiwiX3VzZVN0YXRlOTQiLCJzZXRVcGRhdGVJbmZvIiwiX3VzZVN0YXRlOTUiLCJfdXNlU3RhdGU5NiIsIm9wdGlvbnNDYWNoZSIsInNldE9wdGlvbnNDYWNoZSIsIl91c2VTdGF0ZTk3IiwiX3VzZVN0YXRlOTgiLCJwcm9maWxlTW9kYWwiLCJzZXRQcm9maWxlTW9kYWwiLCJfdXNlU3RhdGU5OSIsIl91c2VTdGF0ZTEwMCIsImFwcG9pbnRtZW50TW9kYWwiLCJzZXRBcHBvaW50bWVudE1vZGFsIiwiX3VzZVN0YXRlMTAxIiwiX3VzZVN0YXRlMTAyIiwiX3VzZVN0YXRlMTAzIiwiX3VzZVN0YXRlMTA0IiwiZ2xvYmFsRXJyb3IiLCJzZXRHbG9iYWxFcnJvciIsIl91c2VTdGF0ZTEwNSIsIl91c2VTdGF0ZTEwNiIsImF1dGhFcnJvciIsInNldEF1dGhFcnJvciIsIl91c2VTdGF0ZTEwNyIsIl91c2VTdGF0ZTEwOCIsInNldFN5c3RlbUJ1c3kiLCJfdXNlU3RhdGUxMDkiLCJfdXNlU3RhdGUxMTAiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiX3VzZVN0YXRlMTExIiwiX3VzZVN0YXRlMTEyIiwicmVhbHRpbWVTbmFwc2hvdCIsInNldFJlYWx0aW1lU25hcHNob3QiLCJfdXNlU3RhdGUxMTMiLCJfdXNlU3RhdGUxMTQiLCJmYXRhbEVycm9yIiwic2V0RmF0YWxFcnJvciIsIl91c2VTdGF0ZTExNSIsIl91c2VTdGF0ZTExNiIsImNvbmZpcm1EaWFsb2ciLCJzZXRDb25maXJtRGlhbG9nIiwiX3VzZVN0YXRlMTE3IiwiX3VzZVN0YXRlMTE4IiwiY29ubmVjdGlvblN0YXR1cyIsInNldENvbm5lY3Rpb25TdGF0dXMiLCJjb25maXJtUmVzb2x2ZXJSZWYiLCJyZXF1ZXN0Q29uZmlybSIsImhhbmRsZUNvbmZpcm1SZXN1bHQiLCJoYW5kbGVTaWRlYmFyVGFibGVDaGFuZ2UiLCJoYW5kbGVBY3RpdmVUYWJsZVN5bmMiLCJoYW5kbGVQcmVmZXJyZWRUYWJsZUNvbnN1bWVkIiwic2VydmljZVNhdmVUaW1lcnMiLCJjaGVja1NlcnZlciIsIl9yZWY2NSIsIl9jYWxsZWUxIiwiX3Q5IiwiX2NvbnRleHQxIiwiY2FjaGUiLCJpbnRlcnZhbCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfcmVmNjYiLCJfY2FsbGVlMTAiLCJlbmRwb2ludCIsIl9vcHRpb25zJGhlYWRlcnMiLCJfYXJnczEwIiwiX2NvbnRleHQxMCIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0ZXh0IiwiX3g4IiwiZmV0Y2hBbGwiLCJfY2FsbGVlMTEiLCJfb3ZlcnZpZXckYm90Iiwib3ZlcnZpZXciLCJ3aXRoRmFsbGJhY2siLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwic2VydmljZXNGdWxsIiwiYmFyYmVyc0Z1bGwiLCJib3RTdGF0ZSIsImJvdE1lc3NhZ2VzUGF5bG9hZCIsInVwZGF0ZSIsIl90MCIsIl9jb250ZXh0MTEiLCJyZXF1ZXN0IiwiRXZlbnRTb3VyY2UiLCJ0b2tlblBhcmFtIiwic3RyZWFtVXJsIiwiZXZlbnRTb3VyY2UiLCJvbm9wZW4iLCJoYW5kbGVFdmVudCIsInVwZGF0ZWRBdCIsIm9uZXJyb3IiLCJjbG9zZSIsIl9wcmV2JGFwcG9pbnRtZW50cyIsIm5leHRTdGF0cyIsIm5leHRBcHBvaW50bWVudHMiLCJoYW5kbGVHbG9iYWxFcnJvciIsImRldGFpbCIsInJlYXNvbiIsImNsZWFyVGltZW91dCIsImNsZWFyIiwiaGFuZGxlTG9naW4iLCJfcmVmNjgiLCJfY2FsbGVlMTIiLCJub3JtYWxpemVkVXNlcm5hbWUiLCJzZXNzaW9uUGF5bG9hZCIsIl90MSIsIl9jb250ZXh0MTIiLCJzdWNjZXNzIiwiX3g5IiwiX3gwIiwiaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UiLCJub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCIsImZyb21FbnRyaWVzIiwiX3JlZjY5IiwiX3JlZjcwIiwiZGVyaXZlQmFyYmVyTG9naW4iLCJiYXJiZXJEYXRhIiwiYnVpbGRCYXJiZXJQYXlsb2FkIiwiX2JhcmJlckRhdGEkb3JkZXJJbmRlIiwiZmFsbGJhY2tPcmRlciIsIm5pY2tuYW1lIiwib3JkZXJJbmRleCIsImhhbmRsZVNhdmVCYXJiZXIiLCJfcmVmNzEiLCJfY2FsbGVlMTMiLCJ1cGRhdGVkQmFyYmVyIiwiX3QxMCIsIl9jb250ZXh0MTMiLCJfeDEiLCJoYW5kbGVEZWxldGVCYXJiZXIiLCJfcmVmNzIiLCJfY2FsbGVlMTQiLCJfdDExIiwiX2NvbnRleHQxNCIsIl94MTAiLCJoYW5kbGVBZGRCYXJiZXIiLCJfcmVmNzMiLCJfY2FsbGVlMTUiLCJuZXdCYXJiZXJQYXlsb2FkIiwiX3QxMiIsIl9jb250ZXh0MTUiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfeDExIiwiaGFuZGxlU2F2ZVNlcnZpY2UiLCJfcmVmNzQiLCJfY2FsbGVlMTYiLCJfdDEzIiwiX2NvbnRleHQxNiIsIl94MTIiLCJzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSIsInRpbWVycyIsImV4aXN0aW5nVGltZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRGVsZXRlU2VydmljZSIsIl9yZWY3NSIsIl9jYWxsZWUxNyIsIl90MTQiLCJfY29udGV4dDE3IiwiX3gxMyIsImhhbmRsZUFkZFNlcnZpY2UiLCJfcmVmNzYiLCJfY2FsbGVlMTgiLCJfdDE1IiwiX2NvbnRleHQxOCIsIl94MTQiLCJoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UiLCJoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UiLCJzZXJ2aWNlSWQiLCJoYW5kbGVCb3RUb2dnbGUiLCJfcmVmNzciLCJfY2FsbGVlMTkiLCJlbmFibGVkIiwiX3QxNiIsIl9jb250ZXh0MTkiLCJfeDE1IiwiaGFuZGxlQm90QWN0aW9uIiwiX3JlZjc4IiwiX2NhbGxlZTIwIiwiYWN0aW9uIiwiX3QxNyIsIl9jb250ZXh0MjAiLCJfeDE2IiwiaGFuZGxlU2F2ZVNldHRpbmdzIiwiX3JlZjc5IiwiX2NhbGxlZTIxIiwiX3QxOCIsIl9jb250ZXh0MjEiLCJfeDE3IiwiaGFuZGxlU2F2ZU1lc3NhZ2UiLCJfcmVmODAiLCJfY2FsbGVlMjIiLCJwZXJzaXN0IiwiX3QxOSIsIl9jb250ZXh0MjIiLCJjb2RlIiwiX3gxOCIsIl94MTkiLCJfeDIwIiwiaGFuZGxlUmVzdG9yZUJhY2t1cCIsIl9yZWY4MSIsIl9jYWxsZWUyMyIsIl90MjAiLCJfY29udGV4dDIzIiwiX3gyMSIsImhhbmRsZUNyZWF0ZUJhY2t1cCIsIl9yZWY4MiIsIl9jYWxsZWUyNCIsIl90MjEiLCJfY29udGV4dDI0IiwiaGFuZGxlRGVsZXRlQmFja3VwIiwiX3JlZjgzIiwiX2NhbGxlZTI1IiwiX3QyMiIsIl9jb250ZXh0MjUiLCJfeDIyIiwiZmV0Y2hDbGllbnRIaXN0b3J5IiwiX3JlZjg0IiwiX2NhbGxlZTI2IiwiX2NvbnRleHQyNiIsIl94MjMiLCJvcGVuUHJvZmlsZSIsIl9yZWY4NSIsIl9jYWxsZWUyNyIsIl90MjMiLCJfY29udGV4dDI3IiwiX3gyNCIsImVuc3VyZU9wdGlvbnMiLCJfY2FsbGVlMjgiLCJfY29udGV4dDI4IiwiaGFuZGxlT3BlbkFwcG9pbnRtZW50IiwiX3JlZjg3IiwiX2NhbGxlZTI5Iiwib3B0aW9uc0NvbmZpZyIsIl9hcmdzMjkiLCJfY29udGV4dDI5IiwiX3gyNSIsImhhbmRsZUNyZWF0ZUFwcG9pbnRtZW50IiwiX2NhbGxlZTMwIiwiX29wdGlvbnMkc3RhdHVzZXMiLCJkZWZhdWx0U3RhdHVzIiwiZGVmYXVsdEJhcmJlciIsIl9jb250ZXh0MzAiLCJoYW5kbGVTYXZlQXBwb2ludG1lbnQiLCJfcmVmOTAiLCJfY2FsbGVlMzEiLCJfcmVmODkiLCJfdDI0IiwiX2NvbnRleHQzMSIsIl94MjYiLCJoYW5kbGVEZWxldGVBcHBvaW50bWVudCIsIl9yZWY5MSIsIl9jYWxsZWUzMiIsIl90MjUiLCJfY29udGV4dDMyIiwiX3gyNyIsImhhbmRsZVJlZnJlc2hVcGRhdGUiLCJfcmVmOTIiLCJfY2FsbGVlMzMiLCJpbmZvIiwiX3QyNiIsIl9jb250ZXh0MzMiLCJoYW5kbGVBcHBseVVwZGF0ZSIsIl9yZWY5MyIsIl9jYWxsZWUzNCIsIl90MjciLCJfY29udGV4dDM0IiwicHJlZmVycmVkVGFibGVUYXJnZXQiLCJtYWluQ2xhc3NOYW1lIiwicmVuZGVyQWN0aXZlIiwicmVsb2FkIiwicmVhY3RBcHBSb290IiwicmVuZGVyQXBwIiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImlubmVySFRNTCJdLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCwgRnJhZ21lbnQgfSA9IFJlYWN0O1xyXG5jb25zdCB7IGNyZWF0ZVBvcnRhbCwgY3JlYXRlUm9vdCB9ID0gUmVhY3RET007XHJcblxyXG5jb25zdCByZXNvbHZlRGVmYXVsdEFwaUJhc2VVcmwgPSAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpYDtcclxuICB9XHJcbiAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQVBJX0JBU0VfVVJMID0gcmVzb2x2ZURlZmF1bHRBcGlCYXNlVXJsKCk7XHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHdpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fIHx8IERFRkFVTFRfQVBJX0JBU0VfVVJMO1xyXG53aW5kb3cuX19CQVJCRVJfQVBJX0JBU0VfXyA9IEFQSV9CQVNFX1VSTDtcclxuXHJcbmNvbnN0IFZJRVdfVEFCUyA9IFtcclxuICB7IGlkOiAnZGFzaGJvYXJkJywgbGFiZWw6ICfQntCx0LfQvtGAJyB9LFxyXG4gIHsgaWQ6ICd0YWJsZXMnLCBsYWJlbDogJ9CU0LDQvdC90YvQtScgfSxcclxuICB7IGlkOiAnYm90JywgbGFiZWw6ICfQkdC+0YInIH0sXHJcbiAgeyBpZDogJ3N5c3RlbScsIGxhYmVsOiAn0KHQuNGB0YLQtdC80LAnIH0sXHJcbl07XHJcblxyXG5jb25zdCBUQUJMRV9PUkRFUiA9IFsnQXBwb2ludG1lbnRzJywgJ1NjaGVkdWxlcycsICdVc2VycycsICdCYXJiZXJzJywgJ1NlcnZpY2VzJ107XHJcbmNvbnN0IFZJU0lCTEVfVEFCTEVfT1JERVIgPSBUQUJMRV9PUkRFUi5maWx0ZXIoKHRhYmxlKSA9PiB0YWJsZSAhPT0gJ1NjaGVkdWxlcycpO1xyXG5jb25zdCBEQVRBX1RBQkxFUyA9IFsnQXBwb2ludG1lbnRzJywgJ1NjaGVkdWxlcycsICdVc2VycyddO1xyXG5cclxuY29uc3QgVEFCTEVfQ09ORklHID0ge1xuICBBcHBvaW50bWVudHM6IHsgbGFiZWw6ICfQl9Cw0L/QuNGB0LgnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogdHJ1ZSwgc3VwcG9ydHNCYXJiZXJGaWx0ZXI6IHRydWUsIHN1cHBvcnRzU3RhdHVzRmlsdGVyOiB0cnVlLCBkZWZhdWx0U29ydDogeyBrZXk6ICdEYXRlJywgZGlyZWN0aW9uOiAnYXNjJyB9IH0sXG4gIFNjaGVkdWxlczogeyBsYWJlbDogJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IGZhbHNlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxuICBVc2VyczogeyBsYWJlbDogJ9Ca0LvQuNC10L3RgtGLJywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ05hbWUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcbiAgQmFyYmVyczogeyBsYWJlbDogJ9CR0LDRgNCx0LXRgNGLJywgbW9kZTogJ2N1c3RvbScgfSxcbiAgU2VydmljZXM6IHsgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBtb2RlOiAnY3VzdG9tJyB9LFxufTtcbmNvbnN0IERBVEFfU0hPUlRDVVRTID0gWydBcHBvaW50bWVudHMnLCAnVXNlcnMnLCAnQmFyYmVycycsICdTZXJ2aWNlcyddLm1hcCgodGFibGVJZCkgPT4gKHtcbiAgaWQ6IHRhYmxlSWQsXG4gIGxhYmVsOiBUQUJMRV9DT05GSUdbdGFibGVJZF0/LmxhYmVsIHx8IHRhYmxlSWQsXG59KSk7XG5cclxuY29uc3QgVEFCTEVfQ09MVU1OUyA9IHtcclxuICBBcHBvaW50bWVudHM6IFtcclxuICAgIHsga2V5OiAnQ3VzdG9tZXJOYW1lJywgbGFiZWw6ICfQmtC70LjQtdC90YInLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDgnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdiYXJiZXJzJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnZGF0ZScsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnVGltZScsIGxhYmVsOiAn0JLRgNC10LzRjycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yOCcsIG5vV3JhcDogdHJ1ZSB9LFxyXG4gICAgeyBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ9Ch0YLQsNGC0YPRgScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ3N0YXR1c2VzJywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctMjgnIH0sXHJcbiAgICB7IGtleTogJ1NlcnZpY2VzJywgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ211bHRpLXNlbGVjdCcsIG9wdGlvbnNLZXk6ICdzZXJ2aWNlcycsIG1pbldpZHRoOiAndy01NicgfSxcclxuICAgIHsga2V5OiAnVXNlcklEJywgbGFiZWw6ICdJRCDQutC70LjQtdC90YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yNCcgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LrQu9C40LXQvdGC0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaEJhcmJlclNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LHQsNGA0LHQtdGA0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICBdLFxyXG4gIFNjaGVkdWxlczogW1xyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdEYXlPZldlZWsnLCBsYWJlbDogJ9CU0LXQvdGMINC90LXQtNC10LvQuCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdXZWVrJywgbGFiZWw6ICfQodC70L7RgtGLJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxuICBVc2VyczogW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICfQmNC80Y8nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnVGVsZWdyYW1JRCcsIGxhYmVsOiAnVGVsZWdyYW0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JvRjtCx0LjQvNGL0Lkg0LzQsNGB0YLQtdGAJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnYmFyYmVycycsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUkFUSU5HX01JTiA9IDM7XHJcbmNvbnN0IFJBVElOR19NQVggPSA1O1xyXG5jb25zdCBSQVRJTkdfU1RFUCA9IDAuNTtcclxubGV0IGF2YXRhck9wdGlvbnNDYWNoZSA9IG51bGw7XHJcbmNvbnN0IFlFQVJfSU5fTVMgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuY29uc3QgREFZX0lOX01TID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbmNvbnN0IGJ1aWxkTmV3QmFyYmVyU3RhdGUgPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICcnLFxyXG4gIHBhc3N3b3JkOiAnJyxcclxuICByYXRpbmc6ICc1JyxcclxuICBjb2xvcjogJyM2ZDI4ZDknLFxyXG4gIGF2YXRhclVybDogJycsXHJcbiAgZGVzY3JpcHRpb246ICcnLFxyXG4gIHBob25lOiAnJyxcclxuICB0ZWxlZ3JhbUlkOiAnJyxcclxuICBpc0FjdGl2ZTogdHJ1ZSxcclxufSk7XHJcbmNvbnN0IGJ1aWxkTmV3U2VydmljZVN0YXRlID0gKCkgPT4gKHtcclxuICBuYW1lOiAnJyxcclxuICBkdXJhdGlvbjogNjAsXHJcbiAgaXNBY3RpdmU6IHRydWUsXHJcbiAgcHJpY2VzOiB7fSxcclxufSk7XHJcbmNvbnN0IEFDVElWRV9CQVJCRVJfTEFCRUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDQxMCwgMHgwNDNhLCAweDA0NDIsIDB4MDQzOCwgMHgwNDMyLCAweDA0MzUsIDB4MDQzZCk7XHJcbmNvbnN0IEhJRERFTl9CQVJCRVJfTEFCRUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDQyMSwgMHgwNDNhLCAweDA0NDAsIDB4MDQ0YiwgMHgwNDQyKTtcclxuY29uc3QgQUNUSVZFX1NFUlZJQ0VfTEFCRUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDQxMCwgMHgwNDNhLCAweDA0NDIsIDB4MDQzOCwgMHgwNDMyLCAweDA0M2QsIDB4MDQzMCk7XHJcbmNvbnN0IEhJRERFTl9TRVJWSUNFX0xBQkVMID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDA0MjEsIDB4MDQzYSwgMHgwNDQwLCAweDA0NGIsIDB4MDQ0MiwgMHgwNDMwKTtcclxuY29uc3QgYnVpbGRWaXNpdEhpc3RvcnkgPSAoYXBwb2ludG1lbnRzID0gW10pID0+IHtcclxuICBpZiAoIWFwcG9pbnRtZW50cy5sZW5ndGgpIHJldHVybiBbXTtcclxuICBjb25zdCBjdXRvZmYgPSBEYXRlLm5vdygpIC0gWUVBUl9JTl9NUztcclxuICBjb25zdCBjb21wbGV0ZWQgPSBhcHBvaW50bWVudHNcclxuICAgIC5tYXAoKGFwcHQpID0+IHtcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYXBwdC5EYXRlLCBhcHB0LlRpbWUsIGFwcHQuc3RhcnREYXRlVGltZSk7XHJcbiAgICAgIHJldHVybiB7IC4uLmFwcHQsIHN0YXJ0RGF0ZSB9O1xyXG4gICAgfSlcclxuICAgIC5maWx0ZXIoXHJcbiAgICAgIChhcHB0KSA9PlxyXG4gICAgICAgIGFwcHQuc3RhcnREYXRlICYmXHJcbiAgICAgICAgYXBwdC5zdGFydERhdGUuZ2V0VGltZSgpID49IGN1dG9mZiAmJlxyXG4gICAgICAgIChpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzKGFwcHQuU3RhdHVzKSB8fCBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzKGFwcHQuU3RhdHVzKSlcclxuICAgIClcclxuICAgIC5zb3J0KChhLCBiKSA9PiBiLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gIHJldHVybiBjb21wbGV0ZWQubWFwKChhcHB0LCBpbmRleCkgPT4gKHtcclxuICAgIC4uLmFwcHQsXHJcbiAgICBvcmRlck51bWJlcjogY29tcGxldGVkLmxlbmd0aCAtIGluZGV4LFxyXG4gICAgZGF0ZUxhYmVsOiBmb3JtYXREYXRlVGltZShhcHB0LkRhdGUsIGFwcHQuVGltZSksXHJcbiAgfSkpO1xyXG59O1xyXG5jb25zdCBkZWZhdWx0Q29uZmlybVN0YXRlID0ge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIHRpdGxlOiAnJyxcclxuICBtZXNzYWdlOiAnJyxcclxuICBjb25maXJtTGFiZWw6ICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMJyxcclxuICBjYW5jZWxMYWJlbDogJ9Ce0YLQvNC10L3QsCcsXHJcbiAgdG9uZTogJ25ldXRyYWwnLFxyXG59O1xyXG5jb25zdCBnZXRSZWNvcmRJZCA9IChyZWNvcmQgPSB7fSkgPT4gcmVjb3JkLmlkIHx8IHJlY29yZC5JZCB8fCByZWNvcmQuSUQgfHwgcmVjb3JkLnJlY29yZElkIHx8IHJlY29yZC5JRF9SZWNvcmQgfHwgbnVsbDtcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICByZXR1cm4gc3RvcmVkID8gSlNPTi5wYXJzZShzdG9yZWQpIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2UgcmVhZCBlcnJvcicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VDYWxsYmFjayhcclxuICAgICh1cGRhdGVyKSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKChwcmV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKHByZXYpIDogdXBkYXRlcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobmV4dFZhbHVlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIHdyaXRlIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBba2V5XVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBbdmFsdWUsIHVwZGF0ZVZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHVzZU5vd1RpY2sgPSAoaW50ZXJ2YWxNcyA9IDEwMDApID0+IHtcclxuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUoKCkgPT4gRGF0ZS5ub3coKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Tm93KERhdGUubm93KCkpLCBpbnRlcnZhbE1zKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbaW50ZXJ2YWxNc10pO1xyXG4gIHJldHVybiBub3c7XHJcbn07XHJcblxyXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBoYW5kbGVyKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuO1xyXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaEF2YXRhck9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2Fzc2V0cy9hdmF0YXJzYCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0YHQv9C40YHQvtC6INCw0LLQsNGC0LDRgNC+0LInKTtcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZC5pbWFnZXMpID8gcGF5bG9hZC5pbWFnZXMuZmlsdGVyKEJvb2xlYW4pLm1hcChub3JtYWxpemVJbWFnZVBhdGgpIDogW107XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChpbWFnZXMpKTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVRleHQgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBTdHJpbmcodmFsdWUpKTtcbmNvbnN0IGlzVmFsaWREYXRlID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xuY29uc3QgcmVzb2x2ZUFzc2V0VXJsID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnRyaW0oKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChub3JtYWxpemVkKSB8fCBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHJldHVybiBub3JtYWxpemVkO1xyXG4gIGNvbnN0IHNhbml0aXplZCA9IG5vcm1hbGl6ZWQucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC5cXC8rLywgJycpO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gc2FuaXRpemVkO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnSW1hZ2UvJykpIHJldHVybiBgLyR7c2FuaXRpemVkfWA7XHJcbiAgcmV0dXJuIGAvSW1hZ2UvJHtzYW5pdGl6ZWR9YDtcclxufTtcclxuY29uc3Qgbm9ybWFsaXplSW1hZ2VQYXRoID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlQXNzZXRVcmwodmFsdWUpO1xyXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChyZXNvbHZlZCkgfHwgcmVzb2x2ZWQuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIHJlc29sdmVkO1xyXG4gIHJldHVybiByZXNvbHZlZC5zdGFydHNXaXRoKCcvJykgPyByZXNvbHZlZCA6IGAvJHtyZXNvbHZlZH1gO1xyXG59O1xyXG5jb25zdCBudW1iZXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJyk7XHJcbmNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbnVtZXJpYyA9IE51bWJlcih2YWx1ZSk7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHJldHVybiAnJztcclxuICByZXR1cm4gYCR7bnVtYmVyRm9ybWF0dGVyLmZvcm1hdChudW1lcmljKX0gXFx1MjBCRGA7XHJcbn07XHJcbmNvbnN0IHBsdXJhbGl6ZSA9IChjb3VudCwgW29uZSwgZmV3LCBtYW55XSkgPT4ge1xyXG4gIGNvbnN0IG1vZDEwID0gY291bnQgJSAxMDtcclxuICBjb25zdCBtb2QxMDAgPSBjb3VudCAlIDEwMDtcclxuICBpZiAobW9kMTAgPT09IDEgJiYgbW9kMTAwICE9PSAxMSkgcmV0dXJuIG9uZTtcclxuICBpZiAobW9kMTAgPj0gMiAmJiBtb2QxMCA8PSA0ICYmIChtb2QxMDAgPCAxMCB8fCBtb2QxMDAgPj0gMjApKSByZXR1cm4gZmV3O1xyXG4gIHJldHVybiBtYW55O1xyXG59O1xyXG5cclxuY29uc3QgY2Fub25pY2FsaXplTmFtZSA9ICh2YWx1ZSkgPT4gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvW15hLXowLTnQsC3Rj9GRXFxzXS9naSwgJycpLnRyaW0oKTtcclxuXHJcbmNvbnN0IHJlc29sdmVMb2dpbiA9ICh2YWx1ZSkgPT4gbm9ybWFsaXplVGV4dCh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFNlc3Npb25QYXlsb2FkID0gKHBheWxvYWQgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRMb2dpbiA9IHJlc29sdmVMb2dpbihwYXlsb2FkLnVzZXJuYW1lIHx8IHBheWxvYWQubG9naW4pO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wYXlsb2FkLFxyXG4gICAgdXNlcm5hbWU6IG5vcm1hbGl6ZWRMb2dpbixcclxuICAgIGRpc3BsYXlOYW1lOiBwYXlsb2FkLmRpc3BsYXlOYW1lIHx8IHBheWxvYWQubmFtZSB8fCBub3JtYWxpemVkTG9naW4sXHJcbiAgICBiYXJiZXJJZDogcGF5bG9hZC5iYXJiZXJJZCB8fCBwYXlsb2FkLmlkIHx8IG51bGwsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHBpY2tCYXJiZXJGb3JVc2VyID0gKHVzZXJTZXNzaW9uLCBhdmFpbGFibGVCYXJiZXJzID0gW10pID0+IHtcclxuICBjb25zdCBmYWxsYmFjayA9IGF2YWlsYWJsZUJhcmJlcnM/LlswXSB8fCAnJztcclxuICBpZiAoIXVzZXJTZXNzaW9uKSByZXR1cm4gZmFsbGJhY2s7XHJcbiAgY29uc3QgY2FuZGlkYXRlcyA9IFt1c2VyU2Vzc2lvbi5kaXNwbGF5TmFtZSwgdXNlclNlc3Npb24ucHJlZmVycmVkTmFtZSwgdXNlclNlc3Npb24udXNlcm5hbWVdXHJcbiAgICAubWFwKChjYW5kaWRhdGUpID0+IGNhbm9uaWNhbGl6ZU5hbWUoY2FuZGlkYXRlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuICBpZiAoIWNhbmRpZGF0ZXMubGVuZ3RoIHx8ICFhdmFpbGFibGVCYXJiZXJzPy5sZW5ndGgpIHJldHVybiBmYWxsYmFjaztcclxuICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IGF2YWlsYWJsZUJhcmJlcnMubWFwKChiYXJiZXIpID0+IGNhbm9uaWNhbGl6ZU5hbWUoYmFyYmVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XHJcbiAgICBjb25zdCBtYXRjaEluZGV4ID0gbm9ybWFsaXplZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbiA9PT0gY2FuZGlkYXRlKTtcclxuICAgIGlmIChtYXRjaEluZGV4ICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gYXZhaWxhYmxlQmFyYmVyc1ttYXRjaEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbGxiYWNrO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnLSc7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRheTogJzItZGlnaXQnLCBtb250aDogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0VGltZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmVWYWx1ZSA9IG5vcm1hbGl6ZVRleHQodmFsdWUpO1xyXG4gIGlmICghc2FmZVZhbHVlKSByZXR1cm4gJy0nO1xyXG4gIGlmIChzYWZlVmFsdWUuaW5jbHVkZXMoJy0nKSkge1xyXG4gICAgcmV0dXJuIHNhZmVWYWx1ZS5zcGxpdCgnLScpWzBdLnRyaW0oKTtcclxuICB9XHJcbiAgcmV0dXJuIHNhZmVWYWx1ZTtcclxufTtcclxuY29uc3QgZm9ybWF0UGhvbmVJbnB1dCA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IGRpZ2l0cyA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuICAgIC5yZXBsYWNlKC9bXlxcZF0vZywgJycpXHJcbiAgICAudHJpbSgpO1xyXG4gIGlmICghZGlnaXRzKSByZXR1cm4gJyc7XHJcbiAgbGV0IG5vcm1hbGl6ZWQgPSBkaWdpdHM7XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMSAmJiBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzgnKSkge1xyXG4gICAgbm9ybWFsaXplZCA9IGA3JHtub3JtYWxpemVkLnNsaWNlKDEpfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTApIHtcclxuICAgIG5vcm1hbGl6ZWQgPSBgNyR7bm9ybWFsaXplZH1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDExICYmIG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnNycpKSB7XHJcbiAgICByZXR1cm4gYCs3ICgke25vcm1hbGl6ZWQuc2xpY2UoMSwgNCl9KSAke25vcm1hbGl6ZWQuc2xpY2UoNCwgNyl9LSR7bm9ybWFsaXplZC5zbGljZSg3LCA5KX0tJHtub3JtYWxpemVkLnNsaWNlKDksIDExKX1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5zdGFydHNXaXRoKCc3JykgJiYgbm9ybWFsaXplZC5sZW5ndGggPiAxMSkge1xyXG4gICAgcmV0dXJuIGArJHtub3JtYWxpemVkfWA7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoJysnKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG4gIHJldHVybiBgKyR7bm9ybWFsaXplZH1gO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0VGVsZWdyYW1IYW5kbGUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBoYW5kbGUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9eQCsvLCAnJykudHJpbSgpO1xyXG4gIHJldHVybiBoYW5kbGUgPyBgQCR7aGFuZGxlfWAgOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkVGVsZWdyYW1MaW5rID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvXkArLywgJycpLnRyaW0oKTtcclxuICByZXR1cm4gaGFuZGxlID8gYGh0dHBzOi8vdC5tZS8ke2hhbmRsZX1gIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGRhdGVQYXJ0ID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgY29uc3QgdGltZVBhcnQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICBpZiAoZGF0ZVBhcnQgPT09ICctJyAmJiB0aW1lUGFydCA9PT0gJy0nKSByZXR1cm4gJy0nO1xuICBpZiAoZGF0ZVBhcnQgPT09ICctJykgcmV0dXJuIHRpbWVQYXJ0O1xuICBpZiAodGltZVBhcnQgPT09ICctJykgcmV0dXJuIGRhdGVQYXJ0O1xuICByZXR1cm4gYCR7ZGF0ZVBhcnR9IHwgJHt0aW1lUGFydH1gO1xufTtcblxuY29uc3QgYmFja3VwRGF0ZUZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHtcbiAgZGF5OiAnbnVtZXJpYycsXG4gIG1vbnRoOiAnbG9uZycsXG4gIHllYXI6ICdudW1lcmljJyxcbiAgaG91cjogJzItZGlnaXQnLFxuICBtaW51dGU6ICcyLWRpZ2l0Jyxcbn0pO1xuXG5jb25zdCBwYXJzZUJhY2t1cFRpbWVzdGFtcCA9IChmaWxlbmFtZSA9ICcnKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dChmaWxlbmFtZSkubWF0Y2goL2JhY2t1cC0oXFxkezR9LVxcZHsyfS1cXGR7Mn0pVChcXGR7Mn0pLShcXGR7Mn0pLShcXGR7Mn0pKD86LShcXGR7M30pKT8vaSk7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBjb25zdCBbLCBkYXRlUGFydCwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kc10gPSBtYXRjaDtcbiAgY29uc3QgaXNvQ2FuZGlkYXRlID0gYCR7ZGF0ZVBhcnR9VCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfSR7bWlsbGlzZWNvbmRzID8gYC4ke21pbGxpc2Vjb25kc31gIDogJyd9WmA7XG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkO1xufTtcblxuY29uc3QgZm9ybWF0QmFja3VwTGFiZWwgPSAoZmlsZW5hbWUgPSAnJykgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUJhY2t1cFRpbWVzdGFtcChmaWxlbmFtZSk7XG4gIHJldHVybiBwYXJzZWQgPyBiYWNrdXBEYXRlRm9ybWF0dGVyLmZvcm1hdChwYXJzZWQpIDogZmlsZW5hbWU7XG59O1xuY29uc3QgZm9ybWF0RGF0ZUhlYWRpbmcgPSAodmFsdWUsIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAn0JHQtdC3INC00LDRgtGLJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7dmFsdWV9VDAwOjAwOjAwYCk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gdmFsdWU7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgb3B0aW9ucykuZm9ybWF0KHBhcnNlZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGZvcm1hdERhdGVCYWRnZUxhYmVsID0gKHZhbHVlKSA9PlxyXG4gIGZvcm1hdERhdGVIZWFkaW5nKHZhbHVlLCB7IHdlZWtkYXk6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JyB9KTtcclxuY29uc3QgZm9ybWF0TGl2ZVRpbWVzdGFtcCA9ICh2YWx1ZSwgbm93VHMgPSBEYXRlLm5vdygpKSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gJyc7XHJcbiAgICBjb25zdCBkaWZmTXMgPSBNYXRoLm1heCgwLCBub3dUcyAtIHBhcnNlZC5nZXRUaW1lKCkpO1xyXG4gICAgaWYgKGRpZmZNcyA8IDEwMDApIHJldHVybiAn0YLQvtC70YzQutC+INGH0YLQvic7XHJcbiAgICBpZiAoZGlmZk1zIDwgNjBfMDAwKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmTXMgLyAxMDAwKX0g0YHQtdC6YDtcclxuICAgIGlmIChkaWZmTXMgPCAzXzYwMF8wMDApIHtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gNjBfMDAwKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDYwXzAwMCkgLyAxMDAwKTtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9INC80LjQvSAke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSDRgdC10LpgO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZmZNcyA8IDg2XzQwMF8wMDApIHtcclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRpZmZNcyAvIDNfNjAwXzAwMCk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmTXMgJSAzXzYwMF8wMDApIC8gNjBfMDAwKTtcclxuICAgICAgcmV0dXJuIGAke2hvdXJzfSDRhyAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSDQvNC40L1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZC50b0xvY2FsZVN0cmluZygncnUtUlUnLCB7XHJcbiAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTVEFUVVNfVFJBTlNMQVRJT05TID0ge1xyXG4gIGFjdGl2ZTogJ9CQ0LrRgtC40LLQvdCw0Y8nLFxyXG4gICfQsNC60YLQuNCy0L3QsNGPJzogJ9CQ0LrRgtC40LLQvdCw0Y8nLFxyXG4gIGNvbmZpcm06ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGNvbmZpcm1lZDogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3Qvic6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gICfQv9C+0LTRgtCy0LXRgNC20LTQtdC90LAnOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICBkb25lOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZTogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgY29tcGxldGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBmaW5pc2hlZDogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9Cy0YvQv9C+0LvQvdC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gICfQt9Cw0LLQtdGA0YjQtdC90LAnOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjYW5jZWw6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICBjYW5jZWxlZDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGxlZDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gICfQvtGC0LzQtdC90LAnOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QtdC90L4nOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ25vIHNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gICduby1zaG93JzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBub3Nob3c6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgbWlzc2VkOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIHBlbmRpbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHdhaXQ6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHdhaXRpbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG4gIHByb2Nlc3Npbmc6ICfQkiDQvtCx0YDQsNCx0L7RgtC60LUnLFxyXG59O1xyXG5jb25zdCBTVEFUVVNfQkFER0VfTUFQID0ge1xyXG4gINCQ0LrRgtC40LLQvdCw0Y86ICdib3JkZXIgYm9yZGVyLXNreS01MDAvMzAgYmctc2t5LTUwMC8xMCB0ZXh0LXNreS0xMDAnLFxyXG4gINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QsDogJ2JvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCcsXHJcbiAg0JfQsNCy0LXRgNGI0LXQvdCwOiAnYm9yZGVyIGJvcmRlci1pbmRpZ28tNTAwLzMwIGJnLWluZGlnby01MDAvMTAgdGV4dC1pbmRpZ28tMTAwJyxcclxuICDQntGC0LzQtdC90LXQvdCwOiAnYm9yZGVyIGJvcmRlci1yb3NlLTUwMC8zMCBiZy1yb3NlLTUwMC8xMCB0ZXh0LXJvc2UtMTAwJyxcclxuICAn0J3QtSDQv9GA0LjRiNGR0LsnOiAnYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgYmctYW1iZXItNTAwLzEwIHRleHQtYW1iZXItMTAwJyxcclxufTtcclxuY29uc3QgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICBTVEFUVVNfQkFER0VfTUFQW25vcm1hbGl6ZWRdIHx8ICdib3JkZXIgYm9yZGVyLXNsYXRlLTYwMC82MCBiZy1zbGF0ZS04MDAvNzAgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IElOQUNUSVZFX1NUQVRVU19UT0tFTlMgPSBbJ9Cy0YvQv9C+0LvQvScsICfQt9Cw0LLQtdGA0YgnLCAnZG9uZScsICdjYW5jZWwnLCAn0L7RgtC80LXQvScsICfQvdC1INC/0YDQuNGIJywgJ25vc2hvdycsICduby1zaG93JywgJ21pc3NlZCcsICfQv9GA0L7RgdGAJywgJ2V4cGlyZWQnXTtcclxuY29uc3QgQUNUSVZFX1NUQVRVU19UT0tFTlMgPSBbJ9Cw0LrRgtC40LInLCAnYWN0aXZlJywgJ9C/0L7QtNGC0LLQtdGA0LYnLCAnY29uZmlybScsICfQvtC20LjQtCcsICdwZW5kaW5nJywgJ3dhaXQnLCAn0LbQtNC10LwnLCAn0LbQtNGR0LwnLCAn0L3QvtCyJywgJ25ldyddO1xyXG5jb25zdCBDT01QTEVURURfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NvbXBsZXRlJywgJ9Cz0L7RgtC+0LInXTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVUZXh0KHN0YXR1cykudHJpbSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IHRyYW5zbGF0ZWQgPSBTVEFUVVNfVFJBTlNMQVRJT05TW25vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKV07XHJcbiAgaWYgKHRyYW5zbGF0ZWQpIHJldHVybiB0cmFuc2xhdGVkO1xyXG4gIHJldHVybiBub3JtYWxpemVkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbm9ybWFsaXplZC5zbGljZSgxKTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVN0YXR1c0xpc3QgPSAoc3RhdHVzZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XHJcbiAgcmV0dXJuIHN0YXR1c2VzXHJcbiAgICAubWFwKChzdGF0dXMpID0+IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykpXHJcbiAgICAuZmlsdGVyKChzdGF0dXMpID0+IHtcclxuICAgICAgaWYgKCFzdGF0dXMgfHwgc2Vlbi5oYXMoc3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBzZWVuLmFkZChzdGF0dXMpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaXNDb21wbGV0ZWRBcHBvaW50bWVudFN0YXR1cyA9IChzdGF0dXMpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiBDT01QTEVURURfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpO1xyXG59O1xyXG5cclxuY29uc3Qgc2FuaXRpemVUaW1lVG9rZW4gPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBtYXRjaCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLm1hdGNoKC8oXFxkezEsMn0pOihcXGR7Mn0pLyk7XHJcbiAgaWYgKCFtYXRjaCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGhvdXJzID0gbWF0Y2hbMV0ucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBtaW51dGVzID0gbWF0Y2hbMl07XHJcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlVGltZVJhbmdlVmFsdWUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkucmVwbGFjZSgvW+KAlOKAk10vZywgJy0nKTtcclxuICBpZiAoIXNhZmUpIHJldHVybiB7IHN0YXJ0OiAnJywgZW5kOiAnJyB9O1xyXG4gIGNvbnN0IFtyYXdTdGFydCwgcmF3RW5kID0gJyddID0gc2FmZS5zcGxpdCgnLScpLm1hcCgocGFydCkgPT4gcGFydC50cmltKCkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGFydDogc2FuaXRpemVUaW1lVG9rZW4ocmF3U3RhcnQpLFxyXG4gICAgZW5kOiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdFbmQpLFxyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnNlVGltZVJhbmdlUGFydHMgPSAodmFsdWUpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpO1xyXG5cclxuY29uc3QgYnVpbGRUaW1lUmFuZ2VWYWx1ZSA9IChzdGFydCwgZW5kKSA9PiB7XHJcbiAgY29uc3Qgc2FmZVN0YXJ0ID0gc2FuaXRpemVUaW1lVG9rZW4oc3RhcnQpO1xyXG4gIGNvbnN0IHNhZmVFbmQgPSBzYW5pdGl6ZVRpbWVUb2tlbihlbmQpO1xyXG4gIGlmIChzYWZlU3RhcnQgJiYgc2FmZUVuZCkge1xyXG4gICAgY29uc3QgW2Zyb20sIHRvXSA9IHNhZmVTdGFydCA8PSBzYWZlRW5kID8gW3NhZmVTdGFydCwgc2FmZUVuZF0gOiBbc2FmZUVuZCwgc2FmZVN0YXJ0XTtcclxuICAgIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcclxuICB9XHJcbiAgcmV0dXJuIHNhZmVTdGFydCB8fCAnJztcclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3RUaW1lU3RhcnQgPSAodmFsdWUpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpLnN0YXJ0O1xyXG5cclxuY29uc3QgZ2V0QXBwb2ludG1lbnRTdGFydERhdGUgPSAoZGF0ZVZhbHVlLCB0aW1lVmFsdWUsIGZhbGxiYWNrSXNvKSA9PiB7XG4gIGlmIChmYWxsYmFja0lzbykge1xuICAgIGNvbnN0IHBhcnNlZEZhbGxiYWNrID0gbmV3IERhdGUoZmFsbGJhY2tJc28pO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZEZhbGxiYWNrLmdldFRpbWUoKSkpIHJldHVybiBwYXJzZWRGYWxsYmFjaztcbiAgfVxuICBjb25zdCBkYXRlUGFydCA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKCFkYXRlUGFydCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBleHRyYWN0VGltZVN0YXJ0KHRpbWVWYWx1ZSkgfHwgJzAwOjAwJztcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHt0aW1lUGFydH06MDBgO1xyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkO1xufTtcblxuY29uc3QgZ2V0QXBwb2ludG1lbnRFbmREYXRlID0gKGRhdGVWYWx1ZSwgdGltZVZhbHVlLCBmYWxsYmFja0lzbykgPT4ge1xuICBjb25zdCBzdGFydERhdGUgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShkYXRlVmFsdWUsIHRpbWVWYWx1ZSwgZmFsbGJhY2tJc28pO1xuICBpZiAoIXN0YXJ0RGF0ZSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyh0aW1lVmFsdWUpO1xuICBjb25zdCBlbmRUb2tlbiA9IGVuZCB8fCBzdGFydDtcbiAgaWYgKCFlbmRUb2tlbikgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgY29uc3QgYmFzZURhdGVQYXJ0ID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpLnNsaWNlKDAsIDEwKSB8fCBzdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIGlmICghYmFzZURhdGVQYXJ0KSByZXR1cm4gc3RhcnREYXRlO1xuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtiYXNlRGF0ZVBhcnR9VCR7ZW5kVG9rZW59OjAwYDtcbiAgbGV0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XG4gIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiBzdGFydERhdGU7XG4gIGlmIChlbmQgJiYgc3RhcnQgJiYgZW5kIDw9IHN0YXJ0KSB7XG4gICAgcGFyc2VkID0gbmV3IERhdGUocGFyc2VkLmdldFRpbWUoKSArIERBWV9JTl9NUyk7XG4gIH1cbiAgaWYgKHBhcnNlZC5nZXRUaW1lKCkgPCBzdGFydERhdGUuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuY29uc3QgcmVzb2x2ZUFwcG9pbnRtZW50U3RhcnREYXRlID0gKGFwcG9pbnRtZW50ID0ge30pID0+IHtcbiAgaWYgKGlzVmFsaWREYXRlKGFwcG9pbnRtZW50LnN0YXJ0RGF0ZSkpIHJldHVybiBhcHBvaW50bWVudC5zdGFydERhdGU7XG4gIHJldHVybiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudC5EYXRlLCBhcHBvaW50bWVudC5UaW1lLCBhcHBvaW50bWVudC5zdGFydERhdGVUaW1lKTtcbn07XG5cbmNvbnN0IHJlc29sdmVBcHBvaW50bWVudEVuZERhdGUgPSAoYXBwb2ludG1lbnQgPSB7fSkgPT4ge1xuICBpZiAoaXNWYWxpZERhdGUoYXBwb2ludG1lbnQuZW5kRGF0ZSkpIHJldHVybiBhcHBvaW50bWVudC5lbmREYXRlO1xuICBjb25zdCBlbmREYXRlID0gZ2V0QXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xuICBpZiAoZW5kRGF0ZSkgcmV0dXJuIGVuZERhdGU7XG4gIHJldHVybiByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQpO1xufTtcblxyXG5jb25zdCBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKElOQUNUSVZFX1NUQVRVU19UT0tFTlMuc29tZSgodG9rZW4pID0+IG5vcm1hbGl6ZWQuaW5jbHVkZXModG9rZW4pKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChBQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHNob3VsZERpc3BsYXlBcHBvaW50bWVudCA9IChhcHBvaW50bWVudCwgbm93VHMgPSBEYXRlLm5vdygpKSA9PiB7XG4gIGlmICghaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyhub3JtYWxpemVTdGF0dXNWYWx1ZShhcHBvaW50bWVudC5TdGF0dXMpKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzdGFydERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQpO1xuICBjb25zdCBlbmREYXRlID0gcmVzb2x2ZUFwcG9pbnRtZW50RW5kRGF0ZShhcHBvaW50bWVudCk7XG4gIGlmICghc3RhcnREYXRlIHx8ICFlbmREYXRlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbmREYXRlLmdldFRpbWUoKSA+PSBub3dUcztcbn07XG5cbmNvbnN0IGlzQXBwb2ludG1lbnRPbmdvaW5nID0gKGFwcG9pbnRtZW50LCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcbiAgaWYgKCFpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzKG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGFwcG9pbnRtZW50LlN0YXR1cykpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHJlc29sdmVBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHBvaW50bWVudCk7XG4gIGNvbnN0IGVuZERhdGUgPSByZXNvbHZlQXBwb2ludG1lbnRFbmREYXRlKGFwcG9pbnRtZW50KTtcbiAgaWYgKCFzdGFydERhdGUgfHwgIWVuZERhdGUpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3RhcnRUcyA9IHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGVuZFRzID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG4gIHJldHVybiBzdGFydFRzIDw9IG5vd1RzICYmIGVuZFRzID4gbm93VHM7XG59O1xuXHJcbmNvbnN0IHBhcnNlTXVsdGlWYWx1ZSA9ICh2YWx1ZSkgPT5cclxuICBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbmNvbnN0IExvYWRpbmdTdGF0ZSA9ICh7IGxhYmVsID0gJ9CX0LDQs9GA0YPQttCw0Y4g0LTQsNC90L3Ri9C1Li4uJyB9ID0ge30pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEyIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlXCI+e2xhYmVsfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEVycm9yQmFubmVyID0gKHsgbWVzc2FnZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXJvc2UtNjAwIHB4LTQgcHktMyB0ZXh0LXdoaXRlXCI+e21lc3NhZ2V9PC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBWaXNpdEhpc3RvcnlMaXN0ID0gKHtcclxuICB2aXNpdHMgPSBbXSxcclxuICBsb2FkaW5nID0gZmFsc2UsXHJcbiAgZXJyb3IgPSAnJyxcclxuICBlbXB0eU1lc3NhZ2UgPSAn0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LIg0L/Rg9GB0YLQsC4nLFxyXG4gIG1heEhlaWdodENsYXNzID0gJ21heC1oLTY0JyxcclxuICBzaG93U3VtbWFyeSA9IHRydWUsXHJcbn0pID0+IHtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7Ql9Cw0LPRgNGD0LbQsNC10Lwg0LjRgdGC0L7RgNC40Y4uLi48L3A+O1xyXG4gIH1cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JCYW5uZXIgbWVzc2FnZT17ZXJyb3J9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAge3Nob3dTdW1tYXJ5ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAg0JfQsNC/0LjRgdC10Lkg0LfQsCAxMiDQvNC10YHRj9GG0LXQsjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Zpc2l0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+0J/QvtGB0LvQtdC00L3QuNC1INCy0LjQt9C40YLRizwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NwYWNlLXktMiBvdmVyZmxvdy1hdXRvJywgbWF4SGVpZ2h0Q2xhc3MpfT5cclxuICAgICAgICB7dmlzaXRzLmxlbmd0aCA/IChcclxuICAgICAgICAgIHZpc2l0cy5tYXAoKHZpc2l0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyh2aXNpdC5TdGF0dXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17YCR7dmlzaXQuaWQgfHwgdmlzaXQuZGF0ZUxhYmVsfS0ke3Zpc2l0Lm9yZGVyTnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBwLTMgdGV4dC14cyB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYm9yZGVyLWVtZXJhbGQtNDAwLzYwIGJnLWVtZXJhbGQtNTAwLzEwIHNoYWRvdy1pbm5lciBzaGFkb3ctZW1lcmFsZC05MDAvMzAnIDogJ2JvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj7QktC40LfQuNGCIOKElnt2aXNpdC5vcmRlck51bWJlciB8fCAn4oCUJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt2aXNpdC5kYXRlTGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1zbGF0ZS0xMDBcIj57dmlzaXQuQmFyYmVyIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+e3Zpc2l0LlNlcnZpY2VzIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgIHt2aXNpdC5TdGF0dXMgJiYgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1zbGF0ZS01MDBcIj57dmlzaXQuU3RhdHVzfTwvcD59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e2VtcHR5TWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2VjdGlvbkNhcmQgPSAoeyB0aXRsZSwgYWN0aW9ucywgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTgwMC83MCBwLTYgc2hhZG93LWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAge2FjdGlvbnN9XHJcbiAgICA8L2Rpdj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTGl2ZUJhZGdlID0gKHsgdGltZXN0YW1wLCBzdGF0dXMgPSAndW5rbm93bicgfSkgPT4ge1xuICBjb25zdCB0aWNraW5nTm93ID0gdXNlTm93VGljaygxMDAwKTtcbiAgaWYgKHN0YXR1cyA9PT0gJ3Vua25vd24nICYmICF0aW1lc3RhbXApIHJldHVybiBudWxsO1xuICBjb25zdCBpc09mZmxpbmUgPSBzdGF0dXMgPT09ICdvZmZsaW5lJztcbiAgY29uc3QgaXNPbmxpbmUgPSBzdGF0dXMgPT09ICdvbmxpbmUnO1xuICBjb25zdCBsYWJlbCA9IGlzT2ZmbGluZSA/ICdPRkZMSU5FJyA6ICdMSVZFJztcbiAgY29uc3QgdGltZUxhYmVsID0gaXNPbmxpbmUgJiYgdGltZXN0YW1wID8gZm9ybWF0TGl2ZVRpbWVzdGFtcCh0aW1lc3RhbXAsIHRpY2tpbmdOb3cpIDogbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXScsXG4gICAgICAgIGlzT2ZmbGluZSA/ICdib3JkZXItcm9zZS01MDAvNTAgYmctcm9zZS01MDAvMTAgdGV4dC1yb3NlLTIwMCcgOiAnYm9yZGVyLWVtZXJhbGQtNDAwLzQwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0yMDAnXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAnaC0yIHctMiByb3VuZGVkLWZ1bGwnLFxuICAgICAgICAgIGlzT2ZmbGluZSA/ICdiZy1yb3NlLTQwMCcgOiAnYW5pbWF0ZS1wdWxzZSBiZy1lbWVyYWxkLTQwMCdcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgICB7bGFiZWx9XG4gICAgICB7dGltZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhpc09mZmxpbmUgPyAndGV4dC1yb3NlLTEwMC84MCcgOiAndGV4dC1lbWVyYWxkLTEwMC84MCcsICdub3JtYWwtY2FzZSB0cmFja2luZy1ub3JtYWwnKX0+e3RpbWVMYWJlbH08L3NwYW4+fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cclxuY29uc3QgSWNvblRyYXNoID0gKHsgY2xhc3NOYW1lID0gJ2gtNCB3LTQnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiIC8+XHJcbiAgICA8bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCIgLz5cclxuICAgIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvbkRhc2hib2FyZCA9ICh7IGNsYXNzTmFtZSA9ICdoLTUgdy01JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aCBkPVwiTTMuNSAxMSAxMiA0bDguNSA3XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNNiAxMHYxMGg1di01aDJ2NWg1VjEwXCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25EYXRhID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxyZWN0IHg9XCIzLjVcIiB5PVwiNVwiIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNFwiIHJ4PVwiMi41XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMy41IDloMTdNMy41IDEzaDE3TTggNXYxNE0xMyA1djE0XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25Cb3QgPSAoeyBjbGFzc05hbWUgPSAnaC01IHctNScgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGggZD1cIk0xMiAydjNcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjVcIiB5PVwiN1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxMVwiIHJ4PVwiNFwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTUgMTJIM20xOCAwaC0yTTkgMTl2Mm02LTJ2MlwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEyXCIgcj1cIjEuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCIgLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxNFwiIGN5PVwiMTJcIiByPVwiMS4yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIiAvPlxyXG4gICAgPHBhdGggZD1cIk05LjUgMTVoNVwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJY29uU3lzdGVtID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiM1wiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTEyIDIuNXYzTTEyIDE4LjV2M000LjIgNy41bDIuNiAxLjVNMTcuMiAxNWwyLjYgMS41TTQuMiAxNi41bDIuNi0xLjVNMTcuMiA5bDIuNi0xLjVNMi41IDEyaDNNMTguNSAxMmgzXCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEljb25Eb3RzID0gKHsgY2xhc3NOYW1lID0gJ2gtNSB3LTUnIH0pID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIxLjVcIiAvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxLjVcIiAvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIxLjVcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgVklFV19UQUJfSUNPTlMgPSB7XHJcbiAgZGFzaGJvYXJkOiBJY29uRGFzaGJvYXJkLFxyXG4gIHRhYmxlczogSWNvbkRhdGEsXHJcbiAgYm90OiBJY29uQm90LFxyXG4gIHN5c3RlbTogSWNvblN5c3RlbSxcclxufTtcclxuXHJcbmNvbnN0IFVJX1RFWFQgPSBPYmplY3QuZnJlZXplKHtcclxuICBhY2NvdW50VGl0bGU6ICfQktCw0Ygg0LDQutC60LDRg9C90YInLFxyXG4gIGxvZ291dDogJ9CS0YvQudGC0LgnLFxyXG4gIG5ld0FwcG9pbnRtZW50Q3RhOiAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnLFxyXG4gIGxpdmVGYWxsYmFjazogJ0xJVkUnLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCBNb2RhbCA9ICh7IHRpdGxlLCBpc09wZW4sIG9uQ2xvc2UsIGNoaWxkcmVuLCBmb290ZXIsIG1heFdpZHRoQ2xhc3MgPSAnbWF4LXctM3hsJyB9KSA9PiB7XHJcbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay82MCBweC00IHB5LTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYXgtaC1bOTB2aF0gdy1mdWxsICR7bWF4V2lkdGhDbGFzc30gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBzaGFkb3ctMnhsYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC02IHB5LTRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+eDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzcwdmhdIG92ZXJmbG93LXktYXV0byBweC02IHB5LTQgc3BhY2UteS00XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIHtmb290ZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS00XCI+e2Zvb3Rlcn08L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbmZpcm1EaWFsb2cgPSAoeyBvcGVuLCB0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsID0gJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLCBjYW5jZWxMYWJlbCA9ICfQntGC0LzQtdC90LAnLCB0b25lID0gJ25ldXRyYWwnLCBvblJlc3VsdCB9KSA9PiB7XHJcbiAgaWYgKCFvcGVuKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBjb25maXJtVG9uZUNsYXNzID0gKCgpID0+IHtcclxuICAgIHN3aXRjaCAodG9uZSkge1xyXG4gICAgICBjYXNlICdkYW5nZXInOlxyXG4gICAgICAgIHJldHVybiAnYmctcm9zZS02MDAgaG92ZXI6Ymctcm9zZS01MDAnO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2JnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2JnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTUwMCc7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgdGl0bGU9e3RpdGxlIHx8ICfQn9C+0LTRgtCy0LXRgNC00LjRgtC1INC00LXQudGB0YLQstC40LUnfVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBvblJlc3VsdChmYWxzZSl9XHJcbiAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy1tZFwiXHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdWx0KGZhbHNlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICB7Y2FuY2VsTGFiZWx9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN1bHQodHJ1ZSl9IGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlICR7Y29uZmlybVRvbmVDbGFzc31gfT5cclxuICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj57bWVzc2FnZSB8fCAn0JLRiyDRg9Cy0LXRgNC10L3Riywg0YfRgtC+INGF0L7RgtC40YLQtSDQv9GA0L7QtNC+0LvQttC40YLRjD8nfTwvcD5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0YXRDYXJkID0gKHsgbGFiZWwsIHZhbHVlLCBhY2NlbnQgPSAndGV4dC1pbmRpZ28tMzAwJyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTMgc206cC00XCI+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+e2xhYmVsfTwvcD5cclxuICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXQtMSB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHNtOm10LTIgc206dGV4dC0zeGwnLCBhY2NlbnQpfT57dmFsdWV9PC9wPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7XG4gIHNlc3Npb24sXG4gIGFjdGl2ZVRhYixcbiAgb25DaGFuZ2UsXG4gIG9uTG9nb3V0LFxuICBsaXZlVXBkYXRlZEF0LFxuICBsaXZlU3RhdHVzID0gJ3Vua25vd24nLFxuICBhY3RpdmVEYXRhVGFibGUgPSAnQXBwb2ludG1lbnRzJyxcbiAgb25TZWxlY3RUYWJsZSxcbn0pID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSBzZXNzaW9uPy5kaXNwbGF5TmFtZSB8fCBzZXNzaW9uPy51c2VybmFtZSB8fCAnLSc7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaGlkZGVuIHctNzIgZmxleC1zaHJpbmstMCBmbGV4LWNvbCBib3JkZXItciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC85MCBwLTUgbGc6c3RpY2t5IGxnOnRvcC0wIGxnOmZsZXggbGc6aC1zY3JlZW4gbGc6b3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTUwMFwiPntVSV9URVhULmFjY291bnRUaXRsZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMTAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtVSV9URVhULmxvZ291dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7KGxpdmVVcGRhdGVkQXQgfHwgbGl2ZVN0YXR1cyAhPT0gJ3Vua25vd24nKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgICA8TGl2ZUJhZGdlIHRpbWVzdGFtcD17bGl2ZVVwZGF0ZWRBdH0gc3RhdHVzPXtsaXZlU3RhdHVzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTYgZmxleC0xIHNwYWNlLXktMiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlVGFiID09PSB0YWIuaWQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXt0YWIuaWR9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2U/Lih0YWIuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICd3LWZ1bGwgcm91bmRlZC14bCBweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAvOTAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWluZGlnby05MDAvNDAnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLXNsYXRlLTkwMC80MCB0ZXh0LXNsYXRlLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDAvNjAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhYi5sYWJlbH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHt0YWIuaWQgPT09ICd0YWJsZXMnICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBwbC00XCI+XG4gICAgICAgICAgICAgICAgICB7REFUQV9TSE9SVENVVFMubWFwKChzaG9ydGN1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1Nob3J0Y3V0QWN0aXZlID0gYWN0aXZlRGF0YVRhYmxlID09PSBzaG9ydGN1dC5pZCAmJiBhY3RpdmVUYWIgPT09ICd0YWJsZXMnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2hvcnRjdXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFRhYmxlPy4oc2hvcnRjdXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndy1mdWxsIHJvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvcnRjdXRBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tNjAwLzIwIHRleHQtaW5kaWdvLTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAvNjAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW9uU2VsZWN0VGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3J0Y3V0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvbmF2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXHJcbmNvbnN0IE1vYmlsZVRhYnMgPSAoeyBzZXNzaW9uLCBhY3RpdmVUYWIsIG9uQ2hhbmdlLCBvbkxvZ291dCwgbGl2ZVVwZGF0ZWRBdCwgbGl2ZVN0YXR1cyA9ICd1bmtub3duJyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvbj8uZGlzcGxheU5hbWUgfHwgc2Vzc2lvbj8udXNlcm5hbWUgfHwgJy0nO1xuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodGFiSWQpID0+IG9uQ2hhbmdlPy4odGFiSWQpO1xuICBjb25zdCByZW5kZXJMaXZlSW5kaWNhdG9yID0gKCkgPT5cbiAgICBsaXZlU3RhdHVzID09PSAndW5rbm93bicgJiYgIWxpdmVVcGRhdGVkQXQgPyAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zNWVtXSB0ZXh0LXNsYXRlLTUwMFwiPntVSV9URVhULmxpdmVGYWxsYmFja308L3NwYW4+XG4gICAgKSA6IChcbiAgICAgIDxMaXZlQmFkZ2UgdGltZXN0YW1wPXtsaXZlVXBkYXRlZEF0fSBzdGF0dXM9e2xpdmVTdGF0dXN9IC8+XG4gICAgKTtcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTMwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzgwIGJhY2tkcm9wLWJsdXIgbGc6aGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcHgtNCBweS0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctWzg4cHhdIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAge3JlbmRlckxpdmVJbmRpY2F0b3IoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG1heC13LVs2MHZ3XSB0cnVuY2F0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4tdy1bOTZweF0ganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJvcmRlci1yb3NlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHdoaXRlc3BhY2Utbm93cmFwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtVSV9URVhULmxvZ291dH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQteC0wIGJvdHRvbS0wIHotMzAgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvOTUgcHgtNCBweS0yIGJhY2tkcm9wLWJsdXIgbGc6aGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBJY29uQ29tcG9uZW50ID0gVklFV19UQUJfSUNPTlNbdGFiLmlkXSB8fCBJY29uRG90cztcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCh0YWIuaWQpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAnZmxleC0xIHJvdW5kZWQtMnhsIHB4LTMgcHktMiB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYmctaW5kaWdvLTYwMC8yMCB0ZXh0LWluZGlnby0yMDAnIDogJ3RleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGFiLmxhYmVsfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXgtYXV0byBoLTYgdy02JywgaXNBY3RpdmUgPyAndGV4dC1pbmRpZ28tMzAwJyA6ICd0ZXh0LXNsYXRlLTQwMCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPnt0YWIubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoeyBkYXRhLCBvbk9wZW5BcHBvaW50bWVudCwgb25PcGVuUHJvZmlsZSwgb25DcmVhdGVBcHBvaW50bWVudCB9KSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICBjb25zdCBzdGF0cyA9IGRhdGEuc3RhdHMgfHwge307XHJcblxyXG4gIGNvbnN0IHVwY29taW5nUmF3ID0gZGF0YS5hcHBvaW50bWVudHM/LnVwY29taW5nIHx8IFtdO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0xpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBub3dUcyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHVwY29taW5nUmF3XG4gICAgICAubWFwKChhcHB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcHQuRGF0ZSwgYXBwdC5UaW1lLCBhcHB0LnN0YXJ0RGF0ZVRpbWUpO1xuICAgICAgICBjb25zdCBlbmREYXRlID0gZ2V0QXBwb2ludG1lbnRFbmREYXRlKGFwcHQuRGF0ZSwgYXBwdC5UaW1lLCBhcHB0LnN0YXJ0RGF0ZVRpbWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmFwcHQsXG4gICAgICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShhcHB0LlN0YXR1cyksXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYXBwdCkgPT4gc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50KGFwcHQsIG5vd1RzKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGEuRGF0ZSwgYS5UaW1lLCBhLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShiLkRhdGUsIGIuVGltZSwgYi5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIHJldHVybiBsZWZ0IC0gcmlnaHQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zbGljZSgwLCAxMik7XHJcbiAgfSwgW3VwY29taW5nUmF3XSk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdEdyb3VwTGFiZWwgPSB1c2VDYWxsYmFjaygoZGF0ZVZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGVWYWx1ZSB8fCBkYXRlVmFsdWUgPT09ICfQkdC10Lcg0LTQsNGC0YsnKSByZXR1cm4gJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtkYXRlVmFsdWV9VDAwOjAwOjAwYCk7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IHdlZWtkYXk6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KHBhcnNlZCk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGRhdGVWYWx1ZTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdyb3VwZWRVcGNvbWluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgdXBjb21pbmdMaXN0LmZvckVhY2goKGFwcHQpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gYXBwdC5EYXRlIHx8ICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICAgIGJ1Y2tldC5wdXNoKGFwcHQpO1xyXG4gICAgICBncm91cHMuc2V0KGtleSwgYnVja2V0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3JvdXBzLmVudHJpZXMoKSlcclxuICAgICAgLm1hcCgoW2tleSwgaXRlbXNdKSA9PiAoe1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBsYWJlbDogZm9ybWF0R3JvdXBMYWJlbChrZXkpLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIHNvcnRWYWx1ZTogTWF0aC5taW4oXHJcbiAgICAgICAgICAuLi5pdGVtcy5tYXAoKGl0ZW0pID0+IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGl0ZW0uRGF0ZSwgaXRlbS5UaW1lLCBpdGVtLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXHJcbiAgICAgICAgKSxcclxuICAgICAgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnRWYWx1ZSAtIGIuc29ydFZhbHVlKTtcclxuICB9LCBbZm9ybWF0R3JvdXBMYWJlbCwgdXBjb21pbmdMaXN0XSk7XHJcblxyXG4gIGNvbnN0IHVwY29taW5nQWN0aW9ucyA9IG9uQ3JlYXRlQXBwb2ludG1lbnQgPyAoXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlQXBwb2ludG1lbnR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICArIHtVSV9URVhULm5ld0FwcG9pbnRtZW50Q3RhfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKSA6IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQmtC70Y7Rh9C10LLRi9C1INC/0L7QutCw0LfQsNGC0LXQu9C4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHN0YXQtZ3JpZFwiPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0JLRgdC10LPQviDQutC70LjQtdC90YLQvtCyXCIgdmFsdWU9e3N0YXRzLnRvdGFsVXNlcnMgPz8gMH0gLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCQ0LrRgtC40LLQvdGL0LUg0LfQsNC/0LjRgdC4XCIgdmFsdWU9e3N0YXRzLmFjdGl2ZUFwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWVtZXJhbGQtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QviDQt9CwINCz0L7QtFwiIHZhbHVlPXtzdGF0cy5jb25maXJtZWRZZWFyID8/IDB9IGFjY2VudD1cInRleHQtZnVjaHNpYS0zMDBcIiAvPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0KHQtdCz0L7QtNC90Y9cIiB2YWx1ZT17c3RhdHMudG9kYXlzQXBwb2ludG1lbnRzID8/IDB9IGFjY2VudD1cInRleHQtY3lhbi0zMDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JHQu9C40LbQsNC50YjQuNC1INC30LDQv9C40YHQuFwiIGFjdGlvbnM9e3VwY29taW5nQWN0aW9uc30+XHJcbiAgICAgICAge2dyb3VwZWRVcGNvbWluZy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQsdC70LjQttCw0LnRiNC40YUg0LfQsNC/0LjRgdC10LkuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgICB7Z3JvdXBlZFVwY29taW5nLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIGxnOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtncm91cC5pdGVtcy5tYXAoKGFwcHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5Qcm9ncmVzcyA9IGlzQXBwb2ludG1lbnRPbmdvaW5nKGFwcHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0LCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogKGV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0LCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdncm91cCB1cGNvbWluZy1jYXJkIHJlbGF0aXZlIHctZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNjAgYmctc2xhdGUtOTAwLzcwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206cC01JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3MgJiYgJ2JvcmRlci1lbWVyYWxkLTQwMC84MCBzaGFkb3ctWzBfMF8yNXB4X3JnYmEoMTYsMTg1LDEyOSwwLjI1KV0nXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKGFwcHQuVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShhcHB0LlN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXNMaXN0ID0gcGFyc2VNdWx0aVZhbHVlKGFwcHQuU2VydmljZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXBwdC5pZCB8fCBgJHtncm91cC5rZXl9LSR7YXBwdC5DdXN0b21lck5hbWV9LSR7YXBwdC5UaW1lfWB9IHsuLi5jYXJkUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMC84MCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZUJhZGdlTGFiZWwoYXBwdC5EYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtd2hpdGUgc206dGV4dC00eGxcIj57c3RhcnQgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW5kICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDAgc206dGV4dC1iYXNlXCI+0LTQviB7ZW5kfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGdhcC0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBzbTp0ZXh0LXhzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGF0dXNCYWRnZUNsYXNzZXMoc3RhdHVzTGFiZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzTGFiZWwgfHwgJ9CR0LXQtyDRgdGC0LDRgtGD0YHQsCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5CYXJiZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkdCw0YDQsdC10YA6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57YXBwdC5CYXJiZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktNCB0ZXh0LVsxM3B4XSB0ZXh0LXNsYXRlLTMwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQ3VzdG9tZXJOYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlblByb2ZpbGU/LihhcHB0LkN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWluZGlnby0zMDAgc206dGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5DdXN0b21lck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+0JHQtdC3INC40LzQtdC90Lg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lm1hcCgoc2VydmljZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtzZXJ2aWNlfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtODAwLzcwIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTIwMCBzbTp0ZXh0LXhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPtCd0LXRgiDQstGL0LHRgNCw0L3QvdGL0YUg0YPRgdC70YPQszwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFyYmVyQXZhdGFyUGlja2VyID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBsb2FkT3B0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3QgW2F2YXRhck9wdGlvbnMsIHNldEF2YXRhck9wdGlvbnNdID0gdXNlU3RhdGUoKCkgPT4gYXZhdGFyT3B0aW9uc0NhY2hlIHx8IFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dHYWxsZXJ5LCBzZXRTaG93R2FsbGVyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZUltYWdlUGF0aCh2YWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiBvbkNoYW5nZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUltYWdlUGF0aCh2YWx1ZSk7XHJcbiAgICBpZiAobm9ybWFsaXplZCAmJiBub3JtYWxpemVkICE9PSB2YWx1ZSkge1xyXG4gICAgICBvbkNoYW5nZShub3JtYWxpemVkKTtcclxuICAgIH1cclxuICB9LCBbdmFsdWUsIG9uQ2hhbmdlXSk7XHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZU9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghbm9ybWFsaXplZFZhbHVlIHx8IGF2YXRhck9wdGlvbnMuaW5jbHVkZXMobm9ybWFsaXplZFZhbHVlKSkgcmV0dXJuIGF2YXRhck9wdGlvbnM7XHJcbiAgICByZXR1cm4gW25vcm1hbGl6ZWRWYWx1ZSwgLi4uYXZhdGFyT3B0aW9uc107XHJcbiAgfSwgW2F2YXRhck9wdGlvbnMsIG5vcm1hbGl6ZWRWYWx1ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IHR5cGVvZiBsb2FkT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IGxvYWRPcHRpb25zIDogZmV0Y2hBdmF0YXJPcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IGFzc2V0c1BheWxvYWQgPSBhd2FpdCBsb2FkZXIoKTtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IEFycmF5LmlzQXJyYXkoYXNzZXRzUGF5bG9hZClcclxuICAgICAgICAgID8gYXNzZXRzUGF5bG9hZFxyXG4gICAgICAgICAgOiBBcnJheS5pc0FycmF5KGFzc2V0c1BheWxvYWQ/LmltYWdlcylcclxuICAgICAgICAgICAgPyBhc3NldHNQYXlsb2FkLmltYWdlc1xyXG4gICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgIGF2YXRhck9wdGlvbnNDYWNoZSA9IGFzc2V0cztcclxuICAgICAgICBzZXRBdmF0YXJPcHRpb25zKGFzc2V0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQXZhdGFyIGxvYWQgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsb2FkKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW2xvYWRPcHRpb25zXSk7XHJcblxyXG4gIGNvbnN0IHByZXZpZXdTcmMgPSByZXNvbHZlQXNzZXRVcmwobm9ybWFsaXplZFZhbHVlIHx8IGF2YXRhck9wdGlvbnNbMF0gfHwgJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTUyIHctZnVsbCBiZy1zbGF0ZS05MDBcIj5cclxuICAgICAgICB7cHJldmlld1NyYyA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3U3JjfSBhbHQ9XCJhdmF0YXIgcHJldmlld1wiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC40ZW1dIHRleHQtc2xhdGUtNTAwXCI+0L3QtdGCINGE0L7RgtC+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTk1MC84MCB2aWEtc2xhdGUtOTUwLzEwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+0KLQtdC60YPRidC10LUg0YTQvtGC0L48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC83MCBweC00IHB5LTMgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICB7bm9ybWFsaXplZFZhbHVlID8gbm9ybWFsaXplZFZhbHVlLnJlcGxhY2UoJy9JbWFnZS8nLCAnJykgOiAn0J3QtSDQstGL0LHRgNCw0L3Qvid9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93R2FsbGVyeSgocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTIwMCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOnRleHQtd2hpdGUgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOmJvcmRlci1zbGF0ZS04MDAgZGlzYWJsZWQ6dGV4dC1zbGF0ZS01MDBcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCAoIWF2YXRhck9wdGlvbnMubGVuZ3RoICYmICFub3JtYWxpemVkVmFsdWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICfQodC60LDQvdC40YDRg9GOLi4uJyA6IHNob3dHYWxsZXJ5ID8gJ9Ch0LrRgNGL0YLRjCDQs9Cw0LvQtdGA0LXRjicgOiAn0J7RgtC60YDRi9GC0Ywg0LPQsNC70LXRgNC10Y4nfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZSgnJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDAgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItcm9zZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCR0LXQtyDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd0dhbGxlcnkgJiYgYXZhdGFyT3B0aW9ucy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBzbTpncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgICB7YXZhdGFyT3B0aW9ucy5tYXAoKHByZXNldCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwcmVzZXQgPT09IG5vcm1hbGl6ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtwcmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKHByZXNldCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0yeGwgYm9yZGVyIHAtMS41IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby00MDAgaG92ZXI6Ymctc2xhdGUtODAwJyxcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTUnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVzb2x2ZUFzc2V0VXJsKHByZXNldCl9IGFsdD1cImF2YXRhciBwcmVzZXRcIiBjbGFzc05hbWU9XCJoLTIwIHctZnVsbCByb3VuZGVkLXhsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFhdmF0YXJPcHRpb25zLmxlbmd0aCAmJiAhbG9hZGluZyAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0JTQvtCx0LDQstGM0YLQtSDQuNC30L7QsdGA0LDQttC10L3QuNGPINCyINC/0LDQv9C60YMgL0ltYWdlLCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMINCw0LLQsNGC0LDRgC48L3A+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBEQVlfSU5ERVhfTE9PS1VQID0gKCgpID0+IHtcclxuICBjb25zdCBmdWxsID0gWyfQv9C+0L3QtdC00LXQu9GM0L3QuNC6JywgJ9Cy0YLQvtGA0L3QuNC6JywgJ9GB0YDQtdC00LAnLCAn0YfQtdGC0LLQtdGA0LMnLCAn0L/Rj9GC0L3QuNGG0LAnLCAn0YHRg9Cx0LHQvtGC0LAnLCAn0LLQvtGB0LrRgNC10YHQtdC90YzQtSddO1xyXG4gIGNvbnN0IHNob3J0ID0gWyfQv9C9JywgJ9Cy0YInLCAn0YHRgCcsICfRh9GCJywgJ9C/0YInLCAn0YHQsScsICfQstGBJ107XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgZnVsbC5mb3JFYWNoKChuYW1lLCBpbmRleCkgPT4ge1xyXG4gICAgbWFwW25hbWVdID0gaW5kZXg7XHJcbiAgfSk7XHJcbiAgc2hvcnQuZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcclxuICAgIG1hcFtuYW1lXSA9IGluZGV4O1xyXG4gIH0pO1xyXG4gIHJldHVybiBtYXA7XHJcbn0pKCk7XHJcbmNvbnN0IGdldERheUluZGV4ID0gKHZhbHVlID0gJycpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKERBWV9JTkRFWF9MT09LVVBbbm9ybWFsaXplZF0pID8gREFZX0lOREVYX0xPT0tVUFtub3JtYWxpemVkXSA6IDc7XHJcbn07XHJcbmNvbnN0IGZvcm1hdFNjaGVkdWxlRGF5U2hvcnQgPSAoZGF0ZVZhbHVlLCBmYWxsYmFja0RheSA9ICcnKSA9PiB7XHJcbiAgY29uc3Qgc2FmZURhdGUgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSk7XHJcbiAgaWYgKHNhZmVEYXRlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtzYWZlRGF0ZX1UMDA6MDA6MDBgKTtcclxuICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyB3ZWVrZGF5OiAnc2hvcnQnIH0pLmZvcm1hdChwYXJzZWQpLnJlcGxhY2UoJy4nLCAnJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAvLyBub29wXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRGYWxsYmFjayA9IG5vcm1hbGl6ZVRleHQoZmFsbGJhY2tEYXkpO1xyXG4gIHJldHVybiBub3JtYWxpemVkRmFsbGJhY2sgPyBub3JtYWxpemVkRmFsbGJhY2suc2xpY2UoMCwgMikgOiAnJztcclxufTtcclxuY29uc3QgZm9ybWF0U2NoZWR1bGVEYXRlTGFiZWwgPSAoZGF0ZVZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZURhdGUgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSk7XHJcbiAgaWYgKCFzYWZlRGF0ZSkgcmV0dXJuICcnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtzYWZlRGF0ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiAnJztcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRheTogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JyB9KS5mb3JtYXQocGFyc2VkKS5yZXBsYWNlKCcuJywgJycpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuY29uc3QgaXNUb2RheURhdGUgPSAoZGF0ZVZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZURhdGUgPSBub3JtYWxpemVUZXh0KGRhdGVWYWx1ZSk7XHJcbiAgaWYgKCFzYWZlRGF0ZSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZShgJHtzYWZlRGF0ZX1UMDA6MDA6MDBgKTtcclxuICBpZiAoTnVtYmVyLmlzTmFOKHRhcmdldC5nZXRUaW1lKCkpKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIChcclxuICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgPT09IHRhcmdldC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICB0b2RheS5nZXRNb250aCgpID09PSB0YXJnZXQuZ2V0TW9udGgoKSAmJlxyXG4gICAgdG9kYXkuZ2V0RGF0ZSgpID09PSB0YXJnZXQuZ2V0RGF0ZSgpXHJcbiAgKTtcclxufTtcclxuY29uc3QgcGFyc2VTbG90VGltZU1pbnV0ZXMgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBtYXRjaCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLm1hdGNoKC8oXFxkezEsMn0pOihcXGR7Mn0pLyk7XHJcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIDA7XHJcbiAgcmV0dXJuIE51bWJlcihtYXRjaFsxXSkgKiA2MCArIE51bWJlcihtYXRjaFsyXSk7XHJcbn07XHJcbmNvbnN0IGdldFNjaGVkdWxlU29ydFZhbHVlID0gKHNsb3QpID0+IHtcclxuICBjb25zdCBzYWZlRGF0ZSA9IG5vcm1hbGl6ZVRleHQoc2xvdC5EYXRlKTtcclxuICBpZiAoc2FmZURhdGUpIHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke3NhZmVEYXRlfVQwMDowMDowMGApO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlZC5nZXRUaW1lKCkgKyBwYXJzZVNsb3RUaW1lTWludXRlcyhwYXJzZVRpbWVSYW5nZVBhcnRzKHNsb3QuV2Vlaykuc3RhcnQpICogNjAwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGJhc2UgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAtIDFfMDAwXzAwMF8wMDA7XHJcbiAgY29uc3QgZGF5SW5kZXggPSBnZXREYXlJbmRleChzbG90LkRheU9mV2Vlayk7XHJcbiAgcmV0dXJuIGJhc2UgKyBkYXlJbmRleCAqIDEwMDAwICsgcGFyc2VTbG90VGltZU1pbnV0ZXMocGFyc2VUaW1lUmFuZ2VQYXJ0cyhzbG90LldlZWspLnN0YXJ0IHx8IHNsb3QuV2VlaykgKiAxMDtcclxufTtcclxuXHJcbmNvbnN0IFJhdGluZ1NsaWRlciA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgZGVuc2UgPSBmYWxzZSB9KSA9PiB7XHJcbiAgY29uc3QgcmF0aW5nVmFsdWUgPSBOdW1iZXIodmFsdWUgfHwgUkFUSU5HX01BWCkudG9GaXhlZCgxKTtcclxuICBjb25zdCB3cmFwcGVyQ2xhc3MgPSBkZW5zZVxyXG4gICAgPyAnc3BhY2UteS0xIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMS41J1xyXG4gICAgOiAnc3BhY2UteS0xIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMic7XHJcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGRlbnNlXHJcbiAgICA/ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXNsYXRlLTMwMCdcclxuICAgIDogJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwJztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc30+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9PlxyXG4gICAgICAgIDxzcGFuPtCg0LXQudGC0LjQvdCzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntyYXRpbmdWYWx1ZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49e1JBVElOR19NSU59IG1heD17UkFUSU5HX01BWH0gc3RlcD17UkFUSU5HX1NURVB9IHZhbHVlPXtOdW1iZXIodmFsdWUpIHx8IFJBVElOR19NQVh9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1pbmRpZ28tNTAwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQmFyYmVyc1ZpZXcgPSAoe1xyXG4gIGJhcmJlcnMgPSBbXSxcclxuICBzY2hlZHVsZXMgPSBbXSxcclxuICBsb2FkQXZhdGFyT3B0aW9ucyxcclxuICBvbkZpZWxkQ2hhbmdlLFxyXG4gIG9uU2F2ZSxcclxuICBvbkFkZCxcclxuICBvbkRlbGV0ZSxcclxuICBvblNjaGVkdWxlVXBkYXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBtb2RlOiAnZWRpdCcsIHRhcmdldElkOiBudWxsIH0pO1xyXG4gIGNvbnN0IFtkcmFmdEJhcmJlciwgc2V0RHJhZnRCYXJiZXJdID0gdXNlU3RhdGUoYnVpbGROZXdCYXJiZXJTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0b3IgPSAobW9kZSwgdGFyZ2V0SWQgPSBudWxsKSA9PiB7XHJcbiAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgc2V0RHJhZnRCYXJiZXIoYnVpbGROZXdCYXJiZXJTdGF0ZSgpKTtcclxuICAgIH1cclxuICAgIHNldEVkaXRvclN0YXRlKHsgb3BlbjogdHJ1ZSwgbW9kZSwgdGFyZ2V0SWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VFZGl0b3IgPSAoKSA9PiBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IGZhbHNlLCBtb2RlOiAnZWRpdCcsIHRhcmdldElkOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBpc0NyZWF0ZU1vZGUgPSBlZGl0b3JTdGF0ZS5tb2RlID09PSAnY3JlYXRlJztcclxuICBjb25zdCBhY3RpdmVCYXJiZXIgPSBiYXJiZXJzLmZpbmQoKGJhcmJlcikgPT4gYmFyYmVyLmlkID09PSBlZGl0b3JTdGF0ZS50YXJnZXRJZCkgfHwgbnVsbDtcclxuICBjb25zdCB3b3JraW5nQmFyYmVyID0gaXNDcmVhdGVNb2RlID8gZHJhZnRCYXJiZXIgOiBhY3RpdmVCYXJiZXI7XHJcblxyXG4gIGNvbnN0IHdvcmtpbmdCYXJiZXJTY2hlZHVsZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCF3b3JraW5nQmFyYmVyPy5uYW1lKSByZXR1cm4gW107XHJcbiAgICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVUZXh0KHdvcmtpbmdCYXJiZXIubmFtZSkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBzY2hlZHVsZXNcclxuICAgICAgLmZpbHRlcigoc2xvdCkgPT4gbm9ybWFsaXplVGV4dChzbG90LkJhcmJlcikudG9Mb3dlckNhc2UoKSA9PT0gdGFyZ2V0KVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gZ2V0U2NoZWR1bGVTb3J0VmFsdWUoYSkgLSBnZXRTY2hlZHVsZVNvcnRWYWx1ZShiKSk7XHJcbiAgfSwgW3dvcmtpbmdCYXJiZXIsIHNjaGVkdWxlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWVsZENoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgc2V0RHJhZnRCYXJiZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlQmFyYmVyKSB7XHJcbiAgICAgIG9uRmllbGRDaGFuZ2U/LihhY3RpdmVCYXJiZXIuaWQsIGZpZWxkLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgb25BZGQ/LihkcmFmdEJhcmJlcik7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKGJ1aWxkTmV3QmFyYmVyU3RhdGUoKSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUJhcmJlcikge1xyXG4gICAgICBvblNhdmU/LihhY3RpdmVCYXJiZXIpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VFZGl0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ3JlYXRlTW9kZSAmJiBhY3RpdmVCYXJiZXIpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gb25EZWxldGU/LihhY3RpdmVCYXJiZXIpO1xyXG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQuZmluYWxseSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlc3VsdC5maW5hbGx5KCgpID0+IGNsb3NlRWRpdG9yKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJTdGF0dXNCYWRnZSA9IChiYXJiZXIpID0+XHJcbiAgICBiYXJiZXIgPyAoXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgJ3JvdW5kZWQtZnVsbCBweC0yIHB5LTAuNSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlJyxcclxuICAgICAgICAgIGJhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYmctZW1lcmFsZC01MDAvMTUgdGV4dC1lbWVyYWxkLTIwMCcgOiAnYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7YmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/IEFDVElWRV9CQVJCRVJfTEFCRUwgOiBISURERU5fQkFSQkVSX0xBQkVMfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbiAgY29uc3QgY2FuU3VibWl0ID0gaXNDcmVhdGVNb2RlID8gQm9vbGVhbih3b3JraW5nQmFyYmVyPy5uYW1lPy50cmltKCkgJiYgd29ya2luZ0JhcmJlcj8ucGFzc3dvcmQ/LnRyaW0oKSkgOiBCb29sZWFuKHdvcmtpbmdCYXJiZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY2hlZHVsZVBpY2tlckNoYW5nZSA9IGFzeW5jIChzbG90LCBuZXh0VmFsdWUpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygb25TY2hlZHVsZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3Qgc2xvdElkID0gZ2V0UmVjb3JkSWQoc2xvdCk7XHJcbiAgICBpZiAoIXNsb3RJZCkgcmV0dXJuO1xyXG4gICAgYXdhaXQgb25TY2hlZHVsZVVwZGF0ZShzbG90SWQsIHtcclxuICAgICAgQmFyYmVyOiBzbG90LkJhcmJlcixcclxuICAgICAgRGF0ZTogc2xvdC5EYXRlLFxyXG4gICAgICBEYXlPZldlZWs6IHNsb3QuRGF5T2ZXZWVrLFxyXG4gICAgICBXZWVrOiBuZXh0VmFsdWUsXHJcbiAgICAgIFRpbWU6IG5leHRWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8U2VjdGlvbkNhcmRcclxuICAgICAgICB0aXRsZT1cItCR0LDRgNCx0LXRgNGLXCJcclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignY3JlYXRlJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTYwMC85MCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93IHNoYWRvdy1lbWVyYWxkLTkwMC80MCBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2JhcmJlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QodC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7QsiDQv9C+0LrQsCDQv9GD0YHRgi4g0JTQvtCx0LDQstGM0YLQtSDQv9C10YDQstC+0LPQviDRgdC+0YLRgNGD0LTQvdC40LrQsC48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICB7YmFyYmVycy5tYXAoKGJhcmJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF2YXRhclNyYyA9IHJlc29sdmVBc3NldFVybChiYXJiZXIuYXZhdGFyVXJsKTtcclxuICAgICAgICAgICAgICBjb25zdCBwaG9uZUxhYmVsID0gYmFyYmVyLnBob25lID8gZm9ybWF0UGhvbmVJbnB1dChiYXJiZXIucGhvbmUpIDogJyc7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmF0aW5nTGFiZWwgPSBOdW1iZXIoYmFyYmVyLnJhdGluZyB8fCBSQVRJTkdfTUFYKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YmFyYmVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdG9yKCdlZGl0JywgYmFyYmVyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGdhcC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTkwMC81MCBwLTQgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNzAgaG92ZXI6Ymctc2xhdGUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE2IHctMTYgZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthdmF0YXJTcmMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyU3JjfSBhbHQ9e2JhcmJlci5uYW1lIHx8ICdhdmF0YXInfSBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC0yeGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTYgdy0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC0yeGwgYmctc2xhdGUtODAwIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGJhcmJlci5uYW1lIHx8ICdCJykuc2xpY2UoMCwgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhYnNvbHV0ZSAtYm90dG9tLTEgLXJpZ2h0LTEgaC0zIHctMyByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXNsYXRlLTkwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYmctZW1lcmFsZC00MDAnIDogJ2JnLXNsYXRlLTYwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj57YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU3RhdHVzQmFkZ2UoYmFyYmVyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAteC00IGdhcC15LTEgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8xMCBweC0yIHB5LTAuNSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtaW5kaWdvLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDimIUge3JhdGluZ0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Bob25lTGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj57cGhvbmVMYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAge2JhcmJlci50ZWxlZ3JhbUlkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+QHtiYXJiZXIudGVsZWdyYW1JZH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtiYXJiZXIuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17aXNDcmVhdGVNb2RlID8gJ9CU0L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnIDogd29ya2luZ0JhcmJlcj8ubmFtZSB8fCAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQsdCw0YDQsdC10YDQsCd9XHJcbiAgICAgICAgaXNPcGVuPXtlZGl0b3JTdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlRWRpdG9yfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy00eGxcIlxyXG4gICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7IWlzQ3JlYXRlTW9kZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCI+XHJcbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlRWRpdG9yfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblN1Ym1pdH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAncm91bmRlZC1sZyBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID8gJ2JnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwJyA6ICdiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0NyZWF0ZU1vZGUgPyAn0JTQvtCx0LDQstC40YLRjCcgOiAn0KHQvtGF0YDQsNC90LjRgtGMJ31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7d29ya2luZ0JhcmJlciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgIDxCYXJiZXJBdmF0YXJQaWNrZXIgdmFsdWU9e3dvcmtpbmdCYXJiZXIuYXZhdGFyVXJsfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnYXZhdGFyVXJsJywgdmFsdWUpfSBsb2FkT3B0aW9ucz17bG9hZEF2YXRhck9wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC84MCBwLTYgc2hhZG93LWlubmVyIHNoYWRvdy1ibGFjay8xMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLm5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCduYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmNC80Y9cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYXRpbmdTbGlkZXIgZGVuc2UgdmFsdWU9e3dvcmtpbmdCYXJiZXIucmF0aW5nfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncmF0aW5nJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLnBhc3N3b3JkIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNzAgcHgtNCBweS0zIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICDQptCy0LXRglxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsvXiMvLnRlc3Qod29ya2luZ0JhcmJlci5jb2xvciB8fCAnJykgPyB3b3JraW5nQmFyYmVyLmNvbG9yIDogJyM2ZDI4ZDknfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdjb2xvcicsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTE2IGN1cnNvci1wb2ludGVyIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS01MDAgYmctdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2Rlc2NyaXB0aW9uJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1XCJcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiB3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIucGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdwaG9uZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KLQtdC70LXRhNC+0L1cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci50ZWxlZ3JhbUlkIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgndGVsZWdyYW1JZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsZWdyYW0gSURcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTQgcHktMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnaXNBY3RpdmUnLCAhKHdvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlKSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtMnhsIGJvcmRlciBweC00IHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTQwMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMjAwJyA6ICdib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MCB0ZXh0LXNsYXRlLTQwMCdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3dvcmtpbmdCYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gQUNUSVZFX0JBUkJFUl9MQUJFTCA6IEhJRERFTl9CQVJCRVJfTEFCRUx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGgtNSB3LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd29ya2luZ0JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2UgPyAnYm9yZGVyLWVtZXJhbGQtMzAwIGJnLWVtZXJhbGQtNDAwLzIwIHRleHQtZW1lcmFsZC0xMDAnIDogJ2JvcmRlci1zbGF0ZS02MDAgdGV4dC1zbGF0ZS01MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICfinJMnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+0KDQsNGB0L/QuNGB0LDQvdC40LU8L3A+XHJcbiAgICAgICAgICAgICAgICB7d29ya2luZ0JhcmJlclNjaGVkdWxlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IHhsOmdyaWQtY29scy01IDJ4bDpncmlkLWNvbHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3JraW5nQmFyYmVyU2NoZWR1bGUubWFwKChzbG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbG90SWQgPSBnZXRSZWNvcmRJZChzbG90KSB8fCBgJHtzbG90LkJhcmJlcn0tJHtzbG90LkRhdGV9LSR7c2xvdC5XZWVrfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lVmFsdWUgPSBzbG90LldlZWsgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlMYWJlbCA9IGZvcm1hdFNjaGVkdWxlRGF5U2hvcnQoc2xvdC5EYXRlLCBzbG90LkRheU9mV2Vlayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBmb3JtYXRTY2hlZHVsZURhdGVMYWJlbChzbG90LkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNUb2RheVNsb3QgPSBpc1RvZGF5RGF0ZShzbG90LkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2xvdElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJnLXNsYXRlLTkwMC82MCBwLTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheVNsb3QgPyAnYm9yZGVyLWVtZXJhbGQtNDAwLzcwIHJpbmctMSByaW5nLWVtZXJhbGQtNDAwLzMwJyA6ICdib3JkZXItc2xhdGUtODAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xIHRleHQtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMjAwIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZGF5TGFiZWwsIGRhdGVMYWJlbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyDCtyAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZVJhbmdlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXh0VmFsdWUpID0+IGhhbmRsZVNjaGVkdWxlUGlja2VyQ2hhbmdlKHNsb3QsIG5leHRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzcwIHB4LTMgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LLRgNC10LzQtdC90LhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktGA0LXQvNGPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPtCU0LvRjyDRjdGC0L7Qs9C+INCx0LDRgNCx0LXRgNCwINC90LXRgiDQt9Cw0L/Qu9Cw0L3QuNGA0L7QstCw0L3QvdGL0YUg0YHQu9C+0YLQvtCyLjwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCwg0YfRgtC+0LHRiyDQuNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtS48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTZXJ2aWNlc1ZpZXcgPSAoeyBzZXJ2aWNlcyA9IFtdLCBiYXJiZXJzID0gW10sIG9uRmllbGRDaGFuZ2UsIG9uUHJpY2VDaGFuZ2UsIG9uRGVsZXRlLCBvbkFkZCB9KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBtb2RlOiAnZWRpdCcsIHRhcmdldElkOiBudWxsIH0pO1xyXG4gIGNvbnN0IFtkcmFmdFNlcnZpY2UsIHNldERyYWZ0U2VydmljZV0gPSB1c2VTdGF0ZShidWlsZE5ld1NlcnZpY2VTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0b3IgPSAobW9kZSwgdGFyZ2V0SWQgPSBudWxsKSA9PiB7XHJcbiAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKGJ1aWxkTmV3U2VydmljZVN0YXRlKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiB0cnVlLCBtb2RlLCB0YXJnZXRJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUVkaXRvciA9ICgpID0+IHNldEVkaXRvclN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcblxyXG4gIGNvbnN0IGlzQ3JlYXRlTW9kZSA9IGVkaXRvclN0YXRlLm1vZGUgPT09ICdjcmVhdGUnO1xyXG4gIGNvbnN0IGFjdGl2ZVNlcnZpY2UgPSBzZXJ2aWNlcy5maW5kKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLmlkID09PSBlZGl0b3JTdGF0ZS50YXJnZXRJZCkgfHwgbnVsbDtcclxuICBjb25zdCB3b3JraW5nU2VydmljZSA9IGlzQ3JlYXRlTW9kZSA/IGRyYWZ0U2VydmljZSA6IGFjdGl2ZVNlcnZpY2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpZWxkQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2VydmljZSkge1xyXG4gICAgICBvbkZpZWxkQ2hhbmdlPy4oYWN0aXZlU2VydmljZS5pZCwgZmllbGQsIHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmljZUNoYW5nZSA9IChiYXJiZXJJZCwgdmFsdWUpID0+IHtcclxuICAgIGlmIChpc0NyZWF0ZU1vZGUpIHtcclxuICAgICAgc2V0RHJhZnRTZXJ2aWNlKChwcmV2KSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgcHJpY2VzOiB7IC4uLihwcmV2LnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2VydmljZSkge1xyXG4gICAgICBvblByaWNlQ2hhbmdlPy4oYWN0aXZlU2VydmljZS5pZCwgYmFyYmVySWQsIHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBpZiAoIXdvcmtpbmdTZXJ2aWNlPy5uYW1lPy50cmltKCkpIHJldHVybjtcclxuICAgICAgb25BZGQ/LihkcmFmdFNlcnZpY2UpO1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoYnVpbGROZXdTZXJ2aWNlU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZUVkaXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUxvY2FsID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NyZWF0ZU1vZGUgJiYgYWN0aXZlU2VydmljZSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBvbkRlbGV0ZT8uKGFjdGl2ZVNlcnZpY2UpO1xyXG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQuZmluYWxseSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlc3VsdC5maW5hbGx5KCgpID0+IGNsb3NlRWRpdG9yKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXJ2aWNlUHJpY2VTdW1tYXJ5ID0gKHNlcnZpY2UpID0+IHtcclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBsYWJlbDogJ+KAlCcsIGRldGFpbHM6ICcnIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBiYXJiZXJzXHJcbiAgICAgIC5tYXAoKGJhcmJlcikgPT4gTnVtYmVyKHNlcnZpY2UucHJpY2VzPy5bYmFyYmVyLmlkXSkpXHJcbiAgICAgIC5maWx0ZXIoKHByaWNlKSA9PiBOdW1iZXIuaXNGaW5pdGUocHJpY2UpICYmIHByaWNlID49IDApO1xyXG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6ICfQptC10L3RiyDQvdC1INC30LDQtNCw0L3RiycsXHJcbiAgICAgICAgZGV0YWlsczogYmFyYmVycy5sZW5ndGggPyAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCcgOiAn0J3QtdGCINCx0LDRgNCx0LXRgNC+0LIg0LTQu9GPINC90LDQt9C90LDRh9C10L3QuNGPJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XHJcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4gICAgY29uc3QgY291bnQgPSB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IG1pbiA9PT0gbWF4ID8gZm9ybWF0Q3VycmVuY3kobWluKSA6IGAke2Zvcm1hdEN1cnJlbmN5KG1pbil9IOKAkyAke2Zvcm1hdEN1cnJlbmN5KG1heCl9YCxcclxuICAgICAgZGV0YWlsczogYNCU0LvRjyAke2NvdW50fSAke3BsdXJhbGl6ZShjb3VudCwgWyfQsdCw0YDQsdC10YDQsCcsICfQsdCw0YDQsdC10YDQsCcsICfQsdCw0YDQsdC10YDQvtCyJ10pfWAsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhblN1Ym1pdCA9IGlzQ3JlYXRlTW9kZSA/IEJvb2xlYW4od29ya2luZ1NlcnZpY2U/Lm5hbWU/LnRyaW0oKSkgOiB0cnVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQo9GB0LvRg9Cz0LhcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdG9yKCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNjAwLzkwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3cgc2hhZG93LWVtZXJhbGQtOTAwLzQwIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINGD0YHQu9GD0LPRg1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NlcnZpY2VzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KHQv9C40YHQvtC6INGD0YHQu9GD0LMg0L/Rg9GB0YIuINCU0L7QsdCw0LLRjNGC0LUg0L/QtdGA0LLRg9GOINGD0YHQu9GD0LPRgy48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHNlcnZpY2VQcmljZVN1bW1hcnkoc2VydmljZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdG9yKCdlZGl0Jywgc2VydmljZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC0zIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTkwMC81MCBwLTQgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNzAgaG92ZXI6Ymctc2xhdGUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj57c2VydmljZS5uYW1lIHx8ICfQkdC10Lcg0L3QsNC30LLQsNC90LjRjyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1zbGF0ZS04MDAgcHgtMiBweS0wLjUgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuZHVyYXRpb24gPyBgJHtzZXJ2aWNlLmR1cmF0aW9ufSDQvNC40L1gIDogJ+KAlCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMTAwXCI+e3N1bW1hcnkubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57c3VtbWFyeS5kZXRhaWxzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtpc0NyZWF0ZU1vZGUgPyAn0J3QvtCy0LDRjyDRg9GB0LvRg9Cz0LAnIDogd29ya2luZ1NlcnZpY2U/Lm5hbWUgfHwgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YPRgdC70YPQs9C4J31cclxuICAgICAgICBpc09wZW49e2VkaXRvclN0YXRlLm9wZW59XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VFZGl0b3J9XHJcbiAgICAgICAgbWF4V2lkdGhDbGFzcz1cIm1heC13LTN4bFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHshaXNDcmVhdGVNb2RlICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUxvY2FsfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUVkaXRvcn0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA/ICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCcgOiAnYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNDcmVhdGVNb2RlID8gJ9CU0L7QsdCw0LLQuNGC0YwnIDogJ9CT0L7RgtC+0LLQvid9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3dvcmtpbmdTZXJ2aWNlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0J3QsNC30LLQsNC90LjQtTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdTZXJ2aWNlLm5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCduYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0L/RgNC40LzQtdGALCDRgdGC0YDQuNC20LrQsFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMLCDQvNC40L08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBtaW49ezV9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nU2VydmljZS5kdXJhdGlvbiA/PyAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWVsZENoYW5nZSgnZHVyYXRpb24nLCBldmVudC50YXJnZXQudmFsdWUgPT09ICcnID8gJycgOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2lzQWN0aXZlJywgISh3b3JraW5nU2VydmljZS5pc0FjdGl2ZSAhPT0gZmFsc2UpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLTJ4bCBib3JkZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgd29ya2luZ1NlcnZpY2UuaXNBY3RpdmUgIT09IGZhbHNlID8gJ2JvcmRlci1lbWVyYWxkLTQwMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMjAwJyA6ICdib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MCB0ZXh0LXNsYXRlLTQwMCdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSA/IEFDVElWRV9TRVJWSUNFX0xBQkVMIDogSElEREVOX1NFUlZJQ0VfTEFCRUx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICdmbGV4IGgtNSB3LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdib3JkZXItZW1lcmFsZC0zMDAgYmctZW1lcmFsZC00MDAvMjAgdGV4dC1lbWVyYWxkLTEwMCcgOiAnYm9yZGVyLXNsYXRlLTYwMCB0ZXh0LXNsYXRlLTUwMCdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3dvcmtpbmdTZXJ2aWNlLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdcXHUyNzEzJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0KbQtdC90Ysg0L/QviDQsdCw0YDQsdC10YDQsNC8PC9wPlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7YmFyYmVycy5tYXAoKGJhcmJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2JhcmJlci5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nU2VydmljZS5wcmljZXM/LltiYXJiZXIuaWRdID8/ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVQcmljZUNoYW5nZShiYXJiZXIuaWQsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtcmlnaHQgdGV4dC1zbSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7QsdCw0LLRjNGC0LUg0LHQsNGA0LHQtdGA0L7Qsiwg0YfRgtC+0LHRiyDQvdCw0LfQvdCw0YfQsNGC0Ywg0YbQtdC90YsuPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDRg9GB0LvRg9Cz0YMg0LTQu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8uPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3RDZWxsID0gKHsgdmFsdWUsIG9wdGlvbnMgPSBbXSwgb25Db21taXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gIGNvbnN0IGFuY2hvclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgdG9wOiAwLCBsZWZ0OiAwIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RHJhZnQocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFhbmNob3JSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdCA9IGFuY2hvclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgcGFuZWxXaWR0aCA9IDMyMDtcclxuICAgIGNvbnN0IHBhbmVsSGVpZ2h0ID0gMzYwO1xyXG4gICAgY29uc3QgbmV4dExlZnQgPSBNYXRoLm1pbihyZWN0LmxlZnQsIHdpbmRvdy5pbm5lcldpZHRoIC0gcGFuZWxXaWR0aCAtIDE2KTtcclxuICAgIGNvbnN0IG5leHRUb3AgPSBNYXRoLm1pbihyZWN0LmJvdHRvbSArIDgsIHdpbmRvdy5pbm5lckhlaWdodCAtIHBhbmVsSGVpZ2h0IC0gMTYpO1xyXG4gICAgc2V0UG9zaXRpb24oe1xyXG4gICAgICB0b3A6IE1hdGgubWF4KDE2LCBuZXh0VG9wKSxcclxuICAgICAgbGVmdDogTWF0aC5tYXgoMTYsIG5leHRMZWZ0KSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghb3BlbikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gdXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgfTtcclxuICB9LCBbb3BlbiwgdXBkYXRlUG9zaXRpb25dKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9uID0gKG9wdGlvbikgPT4ge1xyXG4gICAgc2V0RHJhZnQoKHByZXYpID0+IChwcmV2LmluY2x1ZGVzKG9wdGlvbikgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gb3B0aW9uKSA6IFsuLi5wcmV2LCBvcHRpb25dKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIG9uQ29tbWl0KGRyYWZ0LmpvaW4oJywgJykpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VtbWFyeSA9IGRyYWZ0Lmxlbmd0aCA/IGRyYWZ0LmpvaW4oJywgJykgOiAn0JLRi9Cx0YDQsNGC0Ywg0YPRgdC70YPQs9C4JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICByZWY9e2FuY2hvclJlZn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZSBob3Zlcjpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtYXgtaC1bNDBweF0gb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXMgd2hpdGVzcGFjZS1wcmUtd3JhcFwiPntzdW1tYXJ5fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmXHJcbiAgICAgICAgY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTBcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgbWF4LXcteHMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzk1IHAtMyB0ZXh0LXNtIHRleHQtd2hpdGUgc2hhZG93LTJ4bFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHtwb3NpdGlvbi50b3B9cHhgLCBsZWZ0OiBgJHtwb3NpdGlvbi5sZWZ0fXB4YCB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCj0YHQu9GD0LPQuDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTEgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcmFmdChwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2RyYWZ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTIgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2RyYWZ0Lm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMjAgcHgtMiBweS0xIHRleHQteHMgdGV4dC1pbmRpZ28tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wdGlvbihzZXJ2aWNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+Pzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtNTYgc3BhY2UteS0xIG92ZXJmbG93LXktYXV0byBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINGD0YHQu9GD0LM8L3A+fVxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBkcmFmdC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LXdoaXRlJyA6ICdib3JkZXItc2xhdGUtNzAwIHRleHQtc2xhdGUtMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzYwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0yIHRleHQtbGVmdFwiPntvcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzQWN0aXZlfSBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlT3B0aW9uKG9wdGlvbil9IGNsYXNzTmFtZT1cImgtNCB3LTQgcm91bmRlZCBib3JkZXItc2xhdGUtNTAwIGFjY2VudC1pbmRpZ28tNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0RHJhZnQoW10pfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICDQk9C+0YLQvtCy0L5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHlcclxuICAgICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbWVSYW5nZVBpY2tlciA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgdGl0bGUgPSAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCcsXHJcbiAgcGxhY2Vob2xkZXIgPSAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0YwnLFxyXG4gIGJ1dHRvbkNsYXNzTmFtZSA9ICd3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGUgd2hpdGVzcGFjZS1ub3dyYXAnLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt7IHN0YXJ0LCBlbmQgfSwgc2V0RHJhZnRdID0gdXNlU3RhdGUoKCkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVIb3VyVmFsdWUgPSAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFpbnB1dFZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICBjb25zdCBbaG91cnNdID0gaW5wdXRWYWx1ZS5zcGxpdCgnOicpO1xyXG4gICAgaWYgKCFob3VycykgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIGAke2hvdXJzLnBhZFN0YXJ0KDIsICcwJyl9OjAwYDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0RHJhZnQocGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgb25DaGFuZ2U/LihidWlsZFRpbWVSYW5nZVZhbHVlKHN0YXJ0LCBlbmQpKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgb25DaGFuZ2U/LignMCcpO1xyXG4gICAgc2V0RHJhZnQoeyBzdGFydDogJycsIGVuZDogJycgfSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9PlxyXG4gICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogcGxhY2Vob2xkZXJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy1tZFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LLRgNC10LzRjyDQtNC70Y8g0L3QsNGH0LDQu9CwINC4INC30LDQstC10YDRiNC10L3QuNGPPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGVhcn0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGdhcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzYwIHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj7QodGC0LDRgNGCPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIzNjAwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBzdGFydDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IHRleHQtc2xhdGUtNTAwXCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwXCI+0KTQuNC90LjRiDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMzYwMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIGVuZDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5jb25zdCBFZGl0YWJsZUNlbGwgPSAoeyByZWNvcmQsIGNvbHVtbiwgb3B0aW9ucywgb25VcGRhdGUsIG9uT3BlblByb2ZpbGUsIHRhYmxlSWQgfSkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZElkID0gcmVjb3JkPy5pZCB8fCByZWNvcmQ/LklkIHx8IHJlY29yZD8uSUQgfHwgcmVjb3JkPy5yZWNvcmRJZDtcclxuICBjb25zdCB2YWx1ZSA9IHJlY29yZFtjb2x1bW4ua2V5XTtcclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHZhbHVlID8/ICcnKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgaWYgKCFjb2x1bW4uZWRpdGFibGUpIHtcclxuICAgIGlmIChjb2x1bW4uaXNQcm9maWxlTGluaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25PcGVuUHJvZmlsZT8uKHZhbHVlKX0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgIHt2YWx1ZSB8fCAnLSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgd2hpdGVzcGFjZS1ub3JtYWwgYnJlYWstd29yZHMgbGVhZGluZy10aWdodFwiPnt2YWx1ZSB8fCAnLSd9PC9zcGFuPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbW1pdCA9IChuZXh0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSBuZXh0VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5leHRWYWx1ZSA6IGRyYWZ0O1xyXG4gICAgaWYgKCh2YWx1ZSA/PyAnJykgPT09IChwYXlsb2FkID8/ICcnKSkgcmV0dXJuO1xyXG4gICAgb25VcGRhdGUocmVjb3JkSWQsIHsgW2NvbHVtbi5rZXldOiBwYXlsb2FkIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChcclxuICAgICh0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBjb2x1bW4ua2V5ID09PSAnVGltZScpIHx8XHJcbiAgICAodGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgJiYgY29sdW1uLmtleSA9PT0gJ1dlZWsnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gY29tbWl0KG5leHRWYWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLigJRcIlxyXG4gICAgICAgIHRpdGxlPXt0YWJsZUlkID09PSAnU2NoZWR1bGVzJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlXCJcclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XHJcbiAgICBjYXNlICdzZWxlY3QnOiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkxpc3QgPSBjb2x1bW4ub3B0aW9uc0tleSA/IG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdIDogW107XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgIHtvcHRpb25MaXN0Lm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAnMSd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQuY2hlY2tlZCA/ICd0cnVlJyA6ICcnKX0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApO1xyXG4gICAgY2FzZSAnbXVsdGktc2VsZWN0JzpcclxuICAgICAgcmV0dXJuIDxNdWx0aVNlbGVjdENlbGwgdmFsdWU9e3ZhbHVlfSBvcHRpb25zPXtvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXX0gb25Db21taXQ9e2NvbW1pdH0gLz47XHJcbiAgICBjYXNlICdkYXRlJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17dmFsdWUgPyBTdHJpbmcodmFsdWUpLnNsaWNlKDAsIDEwKSA6ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb21taXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZHJhZnQgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG9uQmx1cj17KCkgPT4gY29tbWl0KCl9IG9uS2V5RG93bj17KGV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgY29tbWl0KCl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb2x1bW5NZW51ID0gKHsgY29sdW1ucywgaGlkZGVuQ29sdW1ucyA9IFtdLCBvblRvZ2dsZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VPdXRzaWRlQ2xpY2socmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgc206dy1hdXRvXCJcbiAgICAgID5cbiAgICAgICAg0J/QvtC70Y9cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge29wZW4gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHotMzAgbXQtMiB3LTY0IG1heC13LVtjYWxjKDEwMHZ3LTJyZW0pXSBzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHAtMyBzaGFkb3ctMnhsIHNtOmxlZnQtYXV0byBzbTpyaWdodC0wXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KX0gb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKGNvbHVtbi5rZXkpfSAvPlxuICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxyXG5jb25zdCBNdWx0aVNlbGVjdENoZWNrYm94ZXMgPSAoeyBsYWJlbCwgb3B0aW9ucyA9IFtdLCB2YWx1ZSA9IFtdLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSAn0J3QtdGCINC00LDQvdC90YvRhScgfSkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlTWVtbygoKSA9PiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpLCBbdmFsdWVdKTtcclxuICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBxdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFub3JtYWxpemVkUXVlcnkpIHJldHVybiBvcHRpb25zO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkpO1xyXG4gIH0sIFtvcHRpb25zLCBub3JtYWxpemVkUXVlcnldKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKCFvbkNoYW5nZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZXhpc3RzID0gc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgIGNvbnN0IG5leHQgPSBleGlzdHMgPyBzZWxlY3RlZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4uc2VsZWN0ZWQsIG9wdGlvbl07XHJcbiAgICBvbkNoYW5nZShuZXh0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57c2VsZWN0ZWQubGVuZ3RoID8gYCR7c2VsZWN0ZWQubGVuZ3RofSDQstGL0LHRgNCw0L3QvmAgOiAn0J3QtSDQstGL0LHRgNCw0L3Qvid9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAge3NlbGVjdGVkLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNTAwLzEwIHB4LTIgcHktMSB0ZXh0LXhzIHRleHQtaW5kaWdvLTIwMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlKHNlcnZpY2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj4/PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC0zIHB5LTJcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zbGF0ZS00MDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsxLjV9IGQ9XCJNMjEgMjFsLTQuMzUtNC4zNW0wIDBBNy41IDcuNSAwIDEwMTYuNjUgMTYuNjV6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INGD0YHQu9GD0LPQuFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3F1ZXJ5ICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoJycpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IG92ZXJmbG93LXktYXV0byBwLTJcIj5cclxuICAgICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTEgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e3BsYWNlaG9sZGVyfTwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMSBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBzZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShvcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNDAnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1pbmRpZ28tMzAwXCI+Pzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDbGllbnRMb29rdXBJbnB1dCA9ICh7XHJcbiAgbGFiZWwgPSAn0JrQu9C40LXQvdGCJyxcclxuICB2YWx1ZSA9ICcnLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGNsaWVudHMgPSBbXSxcclxuICBvblNlbGVjdENsaWVudCxcclxuICBwbGFjZWhvbGRlciA9ICfQndCw0YfQvdC40YLQtSDQstCy0L7QtNC40YLRjCDQuNC80Y8g0LjQu9C4INGC0LXQu9C10YTQvtC9JyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUodmFsdWUgfHwgJycpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRRdWVyeSh2YWx1ZSB8fCAnJyk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghY2xpZW50cy5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVUZXh0KHF1ZXJ5KS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3Qgc2hvcnRsaXN0ID0gbm9ybWFsaXplZFxyXG4gICAgICA/IGNsaWVudHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGNsaWVudCkgPT5cclxuICAgICAgICAgICAgbm9ybWFsaXplVGV4dChjbGllbnQubmFtZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkKSB8fFxyXG4gICAgICAgICAgICBub3JtYWxpemVUZXh0KGNsaWVudC5waG9uZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkKVxyXG4gICAgICAgIClcclxuICAgICAgOiBjbGllbnRzO1xyXG4gICAgcmV0dXJuIHNob3J0bGlzdC5zbGljZSgwLCA2KTtcclxuICB9LCBbY2xpZW50cywgcXVlcnldKTtcclxuXHJcbiAgdXNlT3V0c2lkZUNsaWNrKGNvbnRhaW5lclJlZiwgb3BlbiA/ICgpID0+IHNldE9wZW4oZmFsc2UpIDogbnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChjbGllbnQpID0+IHtcclxuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNsaWVudD8ubmFtZSB8fCAnJztcclxuICAgIHNldFF1ZXJ5KG5leHRWYWx1ZSk7XHJcbiAgICBvbkNoYW5nZT8uKG5leHRWYWx1ZSk7XHJcbiAgICBvblNlbGVjdENsaWVudD8uKGNsaWVudCk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTFcIiByZWY9e2NvbnRhaW5lclJlZn0+XHJcbiAgICAgIHtsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBvbkNoYW5nZT8uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgLz5cclxuICAgICAge29wZW4gJiYgbWF0Y2hlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotMzAgbXQtMSB3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvOTUgc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAge21hdGNoZXMubWFwKChjbGllbnQpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGtleT17Y2xpZW50LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwIGxhc3Q6Ym9yZGVyLW5vbmUgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChjbGllbnQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntjbGllbnQubmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e2NsaWVudC5waG9uZSB8fCAn0KLQtdC70LXRhNC+0L0g0L3QtSDRg9C60LDQt9Cw0L0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdGF0dXNNZW51ID0gKHsgc3RhdHVzZXMgPSBbXSwgaGlkZGVuU3RhdHVzZXMgPSBbXSwgb25Ub2dnbGUsIG9uUmVzZXQgfSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT3V0c2lkZUNsaWNrKHJlZiwgb3BlbiA/ICgpID0+IHNldE9wZW4oZmFsc2UpIDogbnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBzbTp3LWF1dG9cIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIHNtOnctYXV0b1wiXG4gICAgICA+XG4gICAgICAgINCh0YLQsNGC0YPRgdGLXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTMwIG10LTIgdy02NCBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gc3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwLTMgc2hhZG93LTJ4bCBzbTpsZWZ0LWF1dG8gc206cmlnaHQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdHVzZXMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QndC10YIg0YHRgtCw0YLRg9GB0L7QsjwvcD59XG4gICAgICAgICAge3N0YXR1c2VzLm1hcCgoc3RhdHVzKSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtzdGF0dXN9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyFoaWRkZW5TdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpfSBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUoc3RhdHVzKX0gLz5cbiAgICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblJlc2V0fSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cbiAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cclxuXHJcbmNvbnN0IFRhYmxlVG9vbGJhciA9ICh7XHJcbiAgdGFibGVJZCxcclxuICBzZWFyY2hUZXJtLFxyXG4gIHNldFNlYXJjaFRlcm0sXHJcbiAgc3VwcG9ydHNCYXJiZXJGaWx0ZXIsXHJcbiAgc2VsZWN0ZWRCYXJiZXIsXHJcbiAgc2V0U2VsZWN0ZWRCYXJiZXIsXHJcbiAgYmFyYmVycyA9IFtdLFxyXG4gIHN1cHBvcnRzU3RhdHVzRmlsdGVyLFxyXG4gIHN0YXR1c2VzID0gW10sXHJcbiAgaGlkZGVuU3RhdHVzZXMgPSBbXSxcclxuICB0b2dnbGVTdGF0dXMsXHJcbiAgcmVzZXRTdGF0dXNlcyxcclxuICBjb2x1bW5zID0gW10sXHJcbiAgaGlkZGVuQ29sdW1ucyA9IFtdLFxyXG4gIHRvZ2dsZUNvbHVtbixcclxuICBjYW5DcmVhdGUsXHJcbiAgb25PcGVuQ3JlYXRlLFxyXG4gIG9uUmVmcmVzaCxcclxuICBzaG93UGFzdEFwcG9pbnRtZW50cyxcclxuICBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyxcclxuICBzdXBwb3J0c0dyb3VwaW5nID0gZmFsc2UsXHJcbiAgZ3JvdXBCeURhdGUgPSBmYWxzZSxcclxuICBzZXRHcm91cEJ5RGF0ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNoaXBDbGFzcyA9IChhY3RpdmUpID0+XG4gICAgY2xhc3NOYW1lcyhcbiAgICAgICdyb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0cmFuc2l0aW9uIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtY2VudGVyJyxcbiAgICAgIGFjdGl2ZSA/ICdib3JkZXItaW5kaWdvLTQwMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtaW5kaWdvLTEwMCcgOiAnYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjpib3JkZXItc2xhdGUtNTAwJ1xuICAgICk7XG4gIGNvbnN0IGFsbG93TWFudWFsUmVmcmVzaCA9IHR5cGVvZiBvblJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgIVsnQXBwb2ludG1lbnRzJywgJ1VzZXJzJ10uaW5jbHVkZXModGFibGVJZCk7XG4gIGNvbnN0IGlubGluZUNyZWF0ZUZvck1vYmlsZSA9IGNhbkNyZWF0ZSAmJiB0eXBlb2Ygb25PcGVuQ3JlYXRlID09PSAnZnVuY3Rpb24nICYmIFsnQXBwb2ludG1lbnRzJywgJ1VzZXJzJ10uaW5jbHVkZXModGFibGVJZCk7XG4gIGNvbnN0IHNob3dDb2x1bW5NZW51ID0gY29sdW1ucy5sZW5ndGggPiAwICYmIHRhYmxlSWQgIT09ICdVc2Vycyc7XG4gIGNvbnN0IHN0YXR1c0NvbnRyb2wgPVxuICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyID8gKFxuICAgICAgPFN0YXR1c01lbnUgc3RhdHVzZXM9e3N0YXR1c2VzfSBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9IG9uVG9nZ2xlPXt0b2dnbGVTdGF0dXN9IG9uUmVzZXQ9e3Jlc2V0U3RhdHVzZXN9IC8+XG4gICAgKSA6IG51bGw7XG4gIGNvbnN0IGNvbHVtbkNvbnRyb2wgPSBzaG93Q29sdW1uTWVudSA/IDxDb2x1bW5NZW51IGNvbHVtbnM9e2NvbHVtbnN9IGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9IG9uVG9nZ2xlPXt0b2dnbGVDb2x1bW59IC8+IDogbnVsbDtcbiAgY29uc3QgcGFzdENvbnRyb2wgPVxuICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIHR5cGVvZiBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyghc2hvd1Bhc3RBcHBvaW50bWVudHMpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNoaXBDbGFzcyhzaG93UGFzdEFwcG9pbnRtZW50cyksICd3LWZ1bGwgc206dy1hdXRvJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J/RgNC+0YjQtdC00YjQuNC1XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcbiAgY29uc3QgZ3JvdXBpbmdDb250cm9sID1cbiAgICBzdXBwb3J0c0dyb3VwaW5nICYmIHR5cGVvZiBzZXRHcm91cEJ5RGF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0R3JvdXBCeURhdGUoIWdyb3VwQnlEYXRlKX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNoaXBDbGFzcyhncm91cEJ5RGF0ZSksICd3LWZ1bGwgc206dy1hdXRvJyl9PlxuICAgICAgICAgICAg0J/QviDQtNC90Y/QvFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gIGNvbnN0IGNvbnRyb2xPcmRlciA9XG4gICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cydcbiAgICAgID8gW1xuICAgICAgICAgIHsga2V5OiAnc3RhdHVzJywgbm9kZTogc3RhdHVzQ29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAnY29sdW1ucycsIG5vZGU6IGNvbHVtbkNvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ3Bhc3QnLCBub2RlOiBwYXN0Q29udHJvbCB9LFxuICAgICAgICAgIHsga2V5OiAnZ3JvdXAnLCBub2RlOiBncm91cGluZ0NvbnRyb2wgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAgeyBrZXk6ICdzdGF0dXMnLCBub2RlOiBzdGF0dXNDb250cm9sIH0sXG4gICAgICAgICAgeyBrZXk6ICdwYXN0Jywgbm9kZTogcGFzdENvbnRyb2wgfSxcbiAgICAgICAgICB7IGtleTogJ2dyb3VwJywgbm9kZTogZ3JvdXBpbmdDb250cm9sIH0sXG4gICAgICAgICAgeyBrZXk6ICdjb2x1bW5zJywgbm9kZTogY29sdW1uQ29udHJvbCB9LFxuICAgICAgICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzMwIHAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGxnOmZsZXgtcm93IGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLXN0cmV0Y2ggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBtaW4tdy1bMjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtc2xhdGUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOSAzLjVhNS41IDUuNSAwIDAxMy45OTUgOS4zMTVsMy4wOTUgMy4wOTVhLjc1Ljc1IDAgMTEtMS4wNiAxLjA2bC0zLjA5NS0zLjA5NEE1LjUgNS41IDAgMTE5IDMuNXptMCAxLjVhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCf0L7QuNGB0Log0L/QviDRgtCw0LHQu9C40YbQtVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBwbC05IHByLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzQwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7aW5saW5lQ3JlYXRlRm9yTW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5DcmVhdGV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTExIHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXhsIGJnLWVtZXJhbGQtNjAwIHB4LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIHNoYWRvdy1lbWVyYWxkLTkwMC8yMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCBzbTpoaWRkZW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c3VwcG9ydHNCYXJiZXJGaWx0ZXIgJiYgKFxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQmFyYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlbGVjdGVkQmFyYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgc206dy00OFwiXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj7QktGB0LUg0LzQsNGB0YLQtdGA0LA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgc206ZmxleCBzbTpmbGV4LXdyYXAgc206aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7Y29udHJvbE9yZGVyLm1hcCgoY29udHJvbCkgPT5cbiAgICAgICAgICAgICAgY29udHJvbC5ub2RlID8gPEZyYWdtZW50IGtleT17Y29udHJvbC5rZXl9Pntjb250cm9sLm5vZGV9PC9GcmFnbWVudD4gOiBudWxsXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTJcIj5cclxuICAgICAgICAgIHthbGxvd01hbnVhbFJlZnJlc2ggJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNofVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBzbTpweC01XCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv71cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj4/PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y2FuQ3JlYXRlICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuQ3JlYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDAnLFxuICAgICAgICAgICAgICAgIGlubGluZUNyZWF0ZUZvck1vYmlsZSA/ICdoaWRkZW4gc206aW5saW5lLWZsZXgnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPisg0JTQvtCx0LDQstC40YLRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206aGlkZGVuXCI+Kzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRBcHBvaW50bWVudEdyb3VwcyA9IChyZWNvcmRzID0gW10sIHNvcnREaXJlY3Rpb24gPSAnZGVzYycpID0+IHtcclxuICBjb25zdCBidWNrZXRzID0gbmV3IE1hcCgpO1xyXG4gIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSByZWNvcmQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgIGNvbnN0IGJ1Y2tldCA9IGJ1Y2tldHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICBidWNrZXQucHVzaChyZWNvcmQpO1xyXG4gICAgYnVja2V0cy5zZXQoa2V5LCBidWNrZXQpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbXBhcmUgPSBzb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/IChhLCBiKSA9PiBhIC0gYiA6IChhLCBiKSA9PiBiIC0gYTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShidWNrZXRzLmVudHJpZXMoKSlcclxuICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4ge1xyXG4gICAgICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gY29tcGFyZShsZWZ0LCByaWdodCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzb3J0ZWRJdGVtc1swXTtcclxuICAgICAgY29uc3Qgc29ydFZhbHVlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocmVmZXJlbmNlLkRhdGUsIHJlZmVyZW5jZS5UaW1lLCByZWZlcmVuY2Uuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCAoc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IGtleSB8fCBgbm8tZGF0ZS0ke3JlZmVyZW5jZT8uaWQgfHwgTWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlSGVhZGluZyhrZXkpLFxyXG4gICAgICAgIHJvd3M6IHNvcnRlZEl0ZW1zLFxyXG4gICAgICAgIHNvcnRWYWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pXHJcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLnNvcnRWYWx1ZSwgYi5zb3J0VmFsdWUpKTtcclxufTtcclxuY29uc3QgcmVzb2x2ZVNvcnRWYWx1ZSA9IChyb3csIGNvbHVtbiwgdGFibGVJZCkgPT4ge1xyXG4gIGlmICghY29sdW1uKSByZXR1cm4gbm9ybWFsaXplVGV4dChyb3dbY29sdW1uPy5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICh0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBjb2x1bW4ua2V5ID09PSAnRGF0ZScpIHtcclxuICAgIHJldHVybiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShyb3cuRGF0ZSwgcm93LlRpbWUsIHJvdy5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IDA7XHJcbiAgfVxyXG4gIGlmIChjb2x1bW4udHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICBjb25zdCB0cyA9IG5ldyBEYXRlKHJvd1tjb2x1bW4ua2V5XSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTih0cykgPyAwIDogdHM7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygcm93W2NvbHVtbi5rZXldID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHJvd1tjb2x1bW4ua2V5XTtcclxuICB9XHJcbiAgaWYgKGNvbHVtbi50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgIHJldHVybiByb3dbY29sdW1uLmtleV0gPyAxIDogMDtcclxuICB9XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbi5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG5jb25zdCBTb3J0SW5kaWNhdG9yID0gKHsgZGlyZWN0aW9uIH0pID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxlYWRpbmctWzZweF1cIj5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgdGV4dC1zbGF0ZS02MDAnLCBkaXJlY3Rpb24gPT09ICdhc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDEwbDQtNCA0IDRcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC0zIHctMyAtbXQtMC41IHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnZGVzYycgJiYgJ3RleHQtaW5kaWdvLTMwMCcpfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQgNmw0IDQgNC00XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBTY2hlZHVsZXNCb2FyZCA9ICh7IHJvd3MgPSBbXSwgY29sdW1ucyA9IFtdLCBvblVwZGF0ZSwgb3B0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3QgdmlzaWJsZUtleXMgPSB1c2VNZW1vKCgpID0+IG5ldyBTZXQoY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gY29sdW1uLmtleSkpLCBbY29sdW1uc10pO1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCBncm91cGVkQnlEYXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBidWNrZXRzID0gbmV3IE1hcCgpO1xyXG4gICAgcm93cy5mb3JFYWNoKChzbG90KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IHNsb3QuRGF0ZSB8fCBzbG90LkRheU9mV2VlayB8fCBgYmFyYmVyLSR7c2xvdC5CYXJiZXIgfHwgJ25vLWJhcmJlcid9YDtcclxuICAgICAgY29uc3QgbmV4dCA9IGJ1Y2tldHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICAgIG5leHQucHVzaChzbG90KTtcclxuICAgICAgYnVja2V0cy5zZXQoa2V5LCBuZXh0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnVja2V0cy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIHNsb3RzXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZFNsb3RzID0gWy4uLnNsb3RzXS5zb3J0KChhLCBiKSA9PiBub3JtYWxpemVUZXh0KGEuV2VlaykubG9jYWxlQ29tcGFyZShub3JtYWxpemVUZXh0KGIuV2VlaykpKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBzb3J0ZWRTbG90c1swXSB8fCB7fTtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBuZXcgRGF0ZShrZXkpLmdldFRpbWUoKSA6IE51bWJlci5OYU47XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleSxcclxuICAgICAgICAgIHRpdGxlOiBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBmb3JtYXREYXRlSGVhZGluZyhrZXkpIDogcmVmZXJlbmNlLkRheU9mV2VlayB8fCAn0JHQtdC3INC00LDRgtGLJyxcclxuICAgICAgICAgIGJhZGdlOiBrZXkgJiYgIWtleS5zdGFydHNXaXRoKCdiYXJiZXItJykgPyBmb3JtYXREYXRlQmFkZ2VMYWJlbChrZXkpIDogcmVmZXJlbmNlLkRheU9mV2VlayB8fCAn4oCUJyxcclxuICAgICAgICAgIHNvcnRWYWx1ZTogTnVtYmVyLmlzRmluaXRlKHRpbWVzdGFtcCkgPyB0aW1lc3RhbXAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgIHNsb3RzOiBzb3J0ZWRTbG90cyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW3Jvd3NdKTtcclxuXHJcbiAgaWYgKCFncm91cGVkQnlEYXRlLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KDQsNGB0L/QuNGB0LDQvdC40LUg0L/Rg9GB0YLQvi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIHtncm91cGVkQnlEYXRlLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICA8c2VjdGlvbiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0yIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzgwIGJnLXNsYXRlLTk1MC8zMCBwLTQgc2hhZG93LWlubmVyIHNoYWRvdy1ibGFjay8xMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjRlbV0gdGV4dC1zbGF0ZS01MDBcIj57Z3JvdXAuYmFkZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57Z3JvdXAudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTIuNSBweS0wLjUgdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICB7Z3JvdXAuc2xvdHMubGVuZ3RofSB7cGx1cmFsaXplKGdyb3VwLnNsb3RzLmxlbmd0aCwgWyfRgdC70L7RgicsICfRgdC70L7RgtCwJywgJ9GB0LvQvtGC0L7QsiddKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAge2dyb3VwLnNsb3RzLm1hcCgoc2xvdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Nsb3QuaWQgfHwgYCR7c2xvdC5CYXJiZXIgfHwgJ25vLWJhcmJlcid9LSR7c2xvdC5EYXRlIHx8IHNsb3QuRGF5T2ZXZWVrIHx8IHNsb3QuV2Vla31gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAgYmctc2xhdGUtOTUwLzUwIHAtMyB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNTAwXCI+e3Nsb3QuRGF5T2ZXZWVrIHx8ICfQlNC10L3RjCDQvdC1INGD0LrQsNC30LDQvSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57c2xvdC5CYXJiZXIgfHwgJ9Cd0LUg0L3QsNC30L3QsNGH0LXQvSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Nsb3QuV2VlayB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNTAwXCI+e3Nsb3QuRGF0ZSA/IGZvcm1hdERhdGUoc2xvdC5EYXRlKSA6ICfQkdC10Lcg0LTQsNGC0YsnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlZGl0YWJsZUNvbHVtbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBncmlkIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdGFibGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7c2xvdC5pZCB8fCBzbG90LkRhdGV9LSR7Y29sdW1uLmtleX1gfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC82MCBiZy1zbGF0ZS05NTAvNjAgcHgtMiBweS0xLjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS01MDBcIj57Y29sdW1uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlQ2VsbCByZWNvcmQ9e3Nsb3R9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IHRhYmxlSWQ9XCJTY2hlZHVsZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHBvaW50bWVudHNMaXN0ID0gKHsgZ3JvdXBzID0gW10sIG9uT3BlbiwgY29sdW1ucyA9IFtdLCBoaWRkZW5Db2x1bW5zID0gW10gfSkgPT4ge1xyXG4gIGlmICghZ3JvdXBzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JfQsNC/0LjRgdC10Lkg0L/QvtC60LAg0L3QtdGCLjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpLCBbY29sdW1ucywgaGlkZGVuQ29sdW1uc10pO1xyXG4gIGNvbnN0IHJlbmRlckNvbHVtblZhbHVlID0gKHJlY29yZCwgY29sdW1uKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHJlY29yZFtjb2x1bW4ua2V5XTtcclxuICAgIHN3aXRjaCAoY29sdW1uLmtleSkge1xyXG4gICAgICBjYXNlICdEYXRlJzpcclxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSkgfHwgJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1RpbWUnOiB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gW3N0YXJ0IHx8IHZhbHVlIHx8ICctJywgZW5kID8gYNC00L4gJHtlbmR9YCA6ICcnXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHZhbHVlKSB8fCAn4oCUJztcclxuICAgICAgY2FzZSAnU2VydmljZXMnOiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwYXJzZU11bHRpVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5sZW5ndGggPyBpdGVtcy5qb2luKCcsICcpIDogJ+KAlCc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnUGhvbmUnOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IGZvcm1hdFBob25lSW5wdXQodmFsdWUpIDogJ+KAlCc7XHJcbiAgICAgIGNhc2UgJ1JlbWluZGVyMmhDbGllbnRTZW50JzpcclxuICAgICAgY2FzZSAnUmVtaW5kZXIyaEJhcmJlclNlbnQnOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAxID8gJ9Ce0YLQv9GA0LDQstC70LXQvdC+JyA6ICfigJQnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCAn4oCUJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgPHNlY3Rpb24ga2V5PXtncm91cC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIGxnOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZ2V0UmVjb3JkSWQocmVjb3JkKSB8fCBgJHtncm91cC5rZXl9LSR7cmVjb3JkLkN1c3RvbWVyTmFtZX0tJHtyZWNvcmQuVGltZX1gO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfHwgJy0nO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyhyZWNvcmQuVGltZSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXNMaXN0ID0gcGFyc2VNdWx0aVZhbHVlKHJlY29yZC5TZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk9wZW4/LihyZWNvcmQsIHsgYWxsb3dEZWxldGU6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGZsZXgtY29sIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC80MCBwLTMgdGV4dC1sZWZ0IHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNzAgaG92ZXI6Ymctc2xhdGUtOTAwLzcwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzYwIHNtOnAtNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvNzAgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPntmb3JtYXREYXRlQmFkZ2VMYWJlbChyZWNvcmQuRGF0ZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LTN4bFwiPntzdGFydCB8fCByZWNvcmQuVGltZSB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW5kICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPtC00L4ge2VuZH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlJywgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzKHN0YXR1c0xhYmVsKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLkJhcmJlciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3JlY29yZC5CYXJiZXJ9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGZsZXgtY29sIGdhcC0zIHRleHQtWzEzcHhdIHRleHQtc2xhdGUtMzAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7a2V5fS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAgYmctc2xhdGUtOTUwLzUwIHB4LTIgcHktMS41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LXNsYXRlLTIwMFwiPntyZW5kZXJDb2x1bW5WYWx1ZShyZWNvcmQsIGNvbHVtbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj57cmVjb3JkLkN1c3RvbWVyTmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5zbGljZSgwLCAzKS5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YCR7c2VydmljZX0tJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtOTAwLzcwIHB4LTIgcHktMC41IHRleHQtWzExcHhdIHRleHQtc2xhdGUtMjAwIHNtOnRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lmxlbmd0aCA+IDMgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj4re3NlcnZpY2VzTGlzdC5sZW5ndGggLSAzfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPtCj0YHQu9GD0LPQuCDQvdC1INGD0LrQsNC30LDQvdGLPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRGF0YVRhYmxlID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHJvd3MsXHJcbiAgY29sdW1ucyxcclxuICBoaWRkZW5Db2x1bW5zLFxyXG4gIHNvcnRDb25maWcsXHJcbiAgb25Tb3J0LFxyXG4gIG9uVXBkYXRlLFxyXG4gIG9uRGVsZXRlLFxyXG4gIG9wdGlvbnMsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBvbk9wZW5BcHBvaW50bWVudCxcclxuICBncm91cEJ5RGF0ZSA9IHRydWUsXHJcbn0pID0+IHtcclxuICBpZiAoIXJvd3MubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LfQsNC/0LjRgdC10LkuPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZpc2libGVDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IGlzQXBwb2ludG1lbnRzVGFibGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuICBjb25zdCBjYW5Hcm91cEFwcG9pbnRtZW50cyA9IGlzQXBwb2ludG1lbnRzVGFibGUgJiYgZ3JvdXBCeURhdGUgJiYgKCFzb3J0Q29uZmlnIHx8IHNvcnRDb25maWcua2V5ID09PSAnRGF0ZScpO1xyXG4gIGNvbnN0IGdyb3VwZWRSb3dzID0gaXNBcHBvaW50bWVudHNUYWJsZVxyXG4gICAgPyBjYW5Hcm91cEFwcG9pbnRtZW50c1xyXG4gICAgICA/IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMocm93cywgc29ydENvbmZpZz8uZGlyZWN0aW9uIHx8ICdkZXNjJylcclxuICAgICAgOiBbeyBrZXk6ICdkZWZhdWx0JywgbGFiZWw6IG51bGwsIHJvd3MgfV1cclxuICAgIDogW3sga2V5OiAnZGVmYXVsdCcsIGxhYmVsOiBudWxsLCByb3dzIH1dO1xyXG5cclxuICBpZiAoaXNBcHBvaW50bWVudHNUYWJsZSkge1xyXG4gICAgcmV0dXJuIDxBcHBvaW50bWVudHNMaXN0IGdyb3Vwcz17Z3JvdXBlZFJvd3N9IG9uT3Blbj17b25PcGVuQXBwb2ludG1lbnR9IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnKSB7XHJcbiAgICByZXR1cm4gPFNjaGVkdWxlc0JvYXJkIHJvd3M9e3Jvd3N9IGNvbHVtbnM9e3Zpc2libGVDb2x1bW5zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9wdGlvbnM9e29wdGlvbnN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgIHtyb3dzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVjb3JkSWQgPSBnZXRSZWNvcmRJZChyZWNvcmQpO1xyXG4gICAgICAgICAgY29uc3QgY2FyZEtleSA9IHJlY29yZElkIHx8IGAke3RhYmxlSWR9LWNhcmQtJHtpbmRleH1gO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGFydGljbGUga2V5PXtjYXJkS2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzYwIHAtNCBzaGFkb3ctbGcgc2hhZG93LWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGFibGVJZCA9PT0gJ1VzZXJzJyA/ICfQmtC70LjQtdC90YInIDogdGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgPyAn0KDQsNGB0L/QuNGB0LDQvdC40LUnIDogJ9CX0LDQv9C40YHRjCd9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntyZWNvcmRbdmlzaWJsZUNvbHVtbnNbMF0/LmtleV0gfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItcm9zZS02MDAvNzAgcC0yIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtjYXJkS2V5fS0ke2NvbHVtbi5rZXl9YH0gY2xhc3NOYW1lPVwic3BhY2UteS0xIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzgwIGJnLXNsYXRlLTk1MC81MCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtyZWNvcmR9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9uT3BlblByb2ZpbGU9e29uT3BlblByb2ZpbGV9IHRhYmxlSWQ9e3RhYmxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gMnhsOmJsb2NrIC1teC00IG92ZXJmbG93LXgtYXV0byBvdmVyZmxvdy15LXZpc2libGUgcGItMyBzbTpteC0wXCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LVs3NjBweF0gdy1mdWxsIHRhYmxlLWF1dG8gdGV4dC1bMTNweF0gbGVhZGluZy10aWdodCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3B4LTIgcHktMS41IHdoaXRlc3BhY2Utbm93cmFwJywgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInLCBjb2x1bW4ubWluV2lkdGgpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb2x1bW4uc29ydGFibGUgIT09IGZhbHNlICYmIG9uU29ydChjb2x1bW4ua2V5KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yJywgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAnanVzdGlmeS1jZW50ZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSAmJiA8U29ydEluZGljYXRvciBkaXJlY3Rpb249e3NvcnRDb25maWc/LmtleSA9PT0gY29sdW1uLmtleSA/IHNvcnRDb25maWcuZGlyZWN0aW9uIDogbnVsbH0gLz59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICB7b25EZWxldGUgJiYgPHRoIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHRleHQtcmlnaHRcIiBhcmlhLWxhYmVsPVwi0JTQtdC50YHRgtCy0LjRj1wiIC8+fVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2dyb3VwZWRSb3dzLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtncm91cC5rZXl9PlxyXG4gICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3Zpc2libGVDb2x1bW5zLmxlbmd0aCArIChvbkRlbGV0ZSA/IDEgOiAwKX0gY2xhc3NOYW1lPVwicHgtMiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtnZXRSZWNvcmRJZChyZWNvcmQpfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3B4LTIgcHktMS41IGFsaWduLXRvcCB0ZXh0LVsxM3B4XSBsZWFkaW5nLXNudWcgc206dGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5ub1dyYXAgPyAnd2hpdGVzcGFjZS1ub3dyYXAnIDogJ3doaXRlc3BhY2Utbm9ybWFsIGJyZWFrLXdvcmRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMCBweC0yIHB5LTEuNSB0ZXh0LXhzIHRleHQtcm9zZS0zMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQ2xpZW50c0xpc3QgPSAoeyBjbGllbnRzID0gW10sIGJhcmJlcnMgPSBbXSwgb25VcGRhdGUsIG9uRGVsZXRlLCBmZXRjaEhpc3RvcnksIG9uUmVxdWVzdENvbmZpcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIHJlY29yZDogbnVsbCwgaGlzdG9yeTogW10sIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycgfSk7XHJcbiAgY29uc3QgYmFyYmVyT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gKEFycmF5LmlzQXJyYXkoYmFyYmVycykgPyBiYXJiZXJzLmZpbHRlcihCb29sZWFuKSA6IFtdKSwgW2JhcmJlcnNdKTtcclxuXHJcbiAgY29uc3Qgb3BlbkNsaWVudE1vZGFsID0gYXN5bmMgKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldE1vZGFsU3RhdGUoeyBvcGVuOiB0cnVlLCByZWNvcmQ6IHsgLi4uY2xpZW50IH0sIGhpc3Rvcnk6IFtdLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogJycgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZmV0Y2hIaXN0b3J5ICYmIGNsaWVudC5OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGZldGNoSGlzdG9yeShjbGllbnQpO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBidWlsZFZpc2l0SGlzdG9yeShwcm9maWxlPy5hcHBvaW50bWVudHMgfHwgW10pO1xyXG4gICAgICAgIHNldE1vZGFsU3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGhpc3RvcnksIGxvYWRpbmc6IGZhbHNlIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSwgaGlzdG9yeTogW10gfSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC40YHRgtC+0YDQuNGOJyB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VDbGllbnRNb2RhbCA9ICgpID0+IHNldE1vZGFsU3RhdGUoeyBvcGVuOiBmYWxzZSwgcmVjb3JkOiBudWxsLCBoaXN0b3J5OiBbXSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiAnJyB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCByZWNvcmQ6IHsgLi4ucHJldi5yZWNvcmQsIFtmaWVsZF06IHZhbHVlIH0gfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIW1vZGFsU3RhdGUucmVjb3JkIHx8IHR5cGVvZiBvblVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjb3JkSWQgPSBnZXRSZWNvcmRJZChtb2RhbFN0YXRlLnJlY29yZCk7XHJcbiAgICBpZiAoIXJlY29yZElkKSByZXR1cm47XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBOYW1lOiBtb2RhbFN0YXRlLnJlY29yZC5OYW1lLFxyXG4gICAgICBQaG9uZTogbW9kYWxTdGF0ZS5yZWNvcmQuUGhvbmUsXHJcbiAgICAgIFRlbGVncmFtSUQ6IG1vZGFsU3RhdGUucmVjb3JkLlRlbGVncmFtSUQsXHJcbiAgICAgIEJhcmJlcjogbW9kYWxTdGF0ZS5yZWNvcmQuQmFyYmVyLFxyXG4gICAgfTtcclxuICAgIG9uVXBkYXRlKHJlY29yZElkLCBwYXlsb2FkKTtcclxuICAgIGNsb3NlQ2xpZW50TW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW1vZGFsU3RhdGUucmVjb3JkIHx8IHR5cGVvZiBvbkRlbGV0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgb25SZXF1ZXN0Q29uZmlybT8uKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQutC70LjQtdC90YLQsD8nLFxyXG4gICAgICBtZXNzYWdlOiBg0JrQu9C40LXQvdGCIMKrJHttb2RhbFN0YXRlLnJlY29yZC5OYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAob25SZXF1ZXN0Q29uZmlybSAmJiAhY29uZmlybWVkKSByZXR1cm47XHJcbiAgICBhd2FpdCBvbkRlbGV0ZShtb2RhbFN0YXRlLnJlY29yZCwgeyBza2lwQ29uZmlybTogdHJ1ZSB9KTtcclxuICAgIGNsb3NlQ2xpZW50TW9kYWwoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAge2NsaWVudHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KHQv9C40YHQvtC6INC60LvQuNC10L3RgtC+0LIg0L/Rg9GB0YIuPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwLzQwIHNoYWRvdy1pbm5lciBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTkwMFwiPlxyXG4gICAgICAgICAgICB7Y2xpZW50cy5tYXAoKGNsaWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjbGllbnROdW1iZXIgPSBTdHJpbmcoaW5kZXggKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBob25lRGlzcGxheSA9IGNsaWVudC5QaG9uZSA/IGZvcm1hdFBob25lSW5wdXQoY2xpZW50LlBob25lKSA6ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlbGVncmFtSGFuZGxlID0gZm9ybWF0VGVsZWdyYW1IYW5kbGUoY2xpZW50LlRlbGVncmFtSUQpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkNsaWVudE1vZGFsKGNsaWVudCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC0yIHB4LTQgcHktMyB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3ZlcjpiZy1zbGF0ZS05MDAvNjAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAvNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC04IHctOCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctc2xhdGUtOTAwIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjbGllbnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2NsaWVudC5OYW1lIHx8ICfQndC10YIg0LjQvNC10L3QuCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjbGllbnQuQmFyYmVyICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj7Qm9GO0LHQuNC80YvQuSDQsdCw0YDQsdC10YA6IHtjbGllbnQuQmFyYmVyfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LXJpZ2h0IHRleHQtc20gdGV4dC1zbGF0ZS0zMDAgc206YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGhvbmVEaXNwbGF5ICYmIDxwPntwaG9uZURpc3BsYXl9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPnt0ZWxlZ3JhbUhhbmRsZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bW9kYWxTdGF0ZS5yZWNvcmQ/Lk5hbWUgfHwgJ9Ca0LvQuNC10L3Rgid9XHJcbiAgICAgICAgaXNPcGVuPXttb2RhbFN0YXRlLm9wZW59XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VDbGllbnRNb2RhbH1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctM3hsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICB7bW9kYWxTdGF0ZS5yZWNvcmQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUNsaWVudE1vZGFsfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyFtb2RhbFN0YXRlLnJlY29yZCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQutC70LjQtdC90YLQsC48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAg0JjQvNGPXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLk5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdOYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIHRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgINCi0LXQu9C10YTQvtC9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGFsU3RhdGUucmVjb3JkLlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnUGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgVGVsZWdyYW0gSURcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bW9kYWxTdGF0ZS5yZWNvcmQuVGVsZWdyYW1JRCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ1RlbGVncmFtSUQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAg0JvRjtCx0LjQvNGL0Lkg0LHQsNGA0LHQtdGAXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RhbFN0YXRlLnJlY29yZC5CYXJiZXIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0J3QtSDQstGL0LHRgNCw0L08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2JhcmJlck9wdGlvbnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YmFyYmVyfSB2YWx1ZT17YmFyYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyPC9wPlxyXG4gICAgICAgICAgICAgIDxWaXNpdEhpc3RvcnlMaXN0XHJcbiAgICAgICAgICAgICAgICB2aXNpdHM9e21vZGFsU3RhdGUuaGlzdG9yeX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e21vZGFsU3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGVycm9yPXttb2RhbFN0YXRlLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlPVwi0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LIg0L/Rg9GB0YLQsC5cIlxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0Q2xhc3M9XCJtYXgtaC01NlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENyZWF0ZVJlY29yZE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvblNhdmUsIGNvbHVtbnMsIHRhYmxlTmFtZSwgb3B0aW9ucywgdGFibGVJZCwgY2xpZW50cyA9IFtdLCBoaWRkZW5GaWVsZHMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgZWRpdGFibGVDb2x1bW5zID0gdXNlTWVtbygoKSA9PiBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4uZWRpdGFibGUgIT09IGZhbHNlKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBlZGl0YWJsZUNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5GaWVsZHMuaW5jbHVkZXMoY29sdW1uLmtleSkpLFxyXG4gICAgW2VkaXRhYmxlQ29sdW1ucywgaGlkZGVuRmllbGRzXVxyXG4gICk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge307XHJcbiAgICBlZGl0YWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIHBheWxvYWRbY29sdW1uLmtleV0gPSBjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgPyBbXSA6ICcnO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9LCBbZWRpdGFibGVDb2x1bW5zXSk7XHJcblxyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBpc0FwcG9pbnRtZW50c0NyZWF0ZSA9IHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzT3Blbikgc2V0RHJhZnQoaW5pdGlhbFN0YXRlKTtcclxuICB9LCBbaXNPcGVuLCBpbml0aWFsU3RhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgT2JqZWN0LmVudHJpZXMoZHJhZnQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBwYXlsb2FkW2tleV0gPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgb25TYXZlKHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICBQaG9uZTogY2xpZW50LnBob25lIHx8IHByZXYuUGhvbmUsXHJcbiAgICAgIEJhcmJlcjogcHJldi5CYXJiZXIgfHwgY2xpZW50LnByZWZlcnJlZEJhcmJlciB8fCAnJyxcclxuICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT17YNCd0L7QstCw0Y8g0LfQsNC/0LjRgdGMOiAke3RhYmxlTmFtZX1gfVxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXtcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBkcmFmdFtjb2x1bW4ua2V5XTtcclxuICAgICAgICAgIGlmIChpc0FwcG9pbnRtZW50c0NyZWF0ZSAmJiBjb2x1bW4ua2V5ID09PSAnQ3VzdG9tZXJOYW1lJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDbGllbnRMb29rdXBJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgQ3VzdG9tZXJOYW1lOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7KG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdKS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogcGFyc2VNdWx0aVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW119XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBzZWxlY3RlZCB9KSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LXRgiDQtNCw0L3QvdGL0YVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLmtleSA9PT0gJ1RpbWUnIHx8IGNvbHVtbi5rZXkgPT09ICdXZWVrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ+KAlCcgOiAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0YwnfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57Y29sdW1uLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e2NvbHVtbi50eXBlID09PSAnZGF0ZScgPyAnZGF0ZScgOiAndGV4dCd9IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcm9maWxlTW9kYWwgPSAoeyBzdGF0ZSwgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRzID0gc3RhdGUuZGF0YT8uYXBwb2ludG1lbnRzIHx8IFtdO1xyXG4gIGNvbnN0IHZpc2l0SGlzdG9yeSA9IHVzZU1lbW8oKCkgPT4gYnVpbGRWaXNpdEhpc3RvcnkoYXBwb2ludG1lbnRzKSwgW2FwcG9pbnRtZW50c10pO1xyXG4gIGNvbnN0IHVzZXIgPSBzdGF0ZS5kYXRhPy51c2VyIHx8IG51bGw7XHJcbiAgY29uc3QgcGhvbmVMYWJlbCA9IHVzZXI/LlBob25lID8gZm9ybWF0UGhvbmVJbnB1dCh1c2VyLlBob25lKSA6ICcnO1xyXG4gIGNvbnN0IHBob25lSHJlZiA9IHBob25lTGFiZWwgPyBgdGVsOiR7cGhvbmVMYWJlbC5yZXBsYWNlKC9bXlxcZCtdL2csICcnKX1gIDogJyc7XHJcbiAgY29uc3QgdGVsZWdyYW1IYW5kbGUgPSB1c2VyPy5UZWxlZ3JhbUlEID8gZm9ybWF0VGVsZWdyYW1IYW5kbGUodXNlci5UZWxlZ3JhbUlEKSA6ICcnO1xyXG4gIGNvbnN0IHRlbGVncmFtSHJlZiA9IHVzZXI/LlRlbGVncmFtSUQgPyBidWlsZFRlbGVncmFtTGluayh1c2VyLlRlbGVncmFtSUQpIDogJyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e3N0YXRlLmRhdGE/LnVzZXI/Lk5hbWUgfHwgJ9Cf0YDQvtGE0LjQu9GMINC60LvQuNC10L3RgtCwJ31cclxuICAgICAgaXNPcGVuPXtzdGF0ZS5vcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9ezxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+fVxyXG4gICAgPlxyXG4gICAgICB7c3RhdGUubG9hZGluZyAmJiA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0JfQsNCz0YDRg9C20LDRjiDQv9GA0L7RhNC40LvRjC4uLlwiIC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgc3RhdGUuZGF0YT8uZXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e3N0YXRlLmRhdGEuZXJyb3J9IC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgdXNlciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QotC10LvQtdGE0L7QvTo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICB7cGhvbmVMYWJlbCAmJiBwaG9uZUhyZWYgPyAoXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwaG9uZUhyZWZ9IGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3Bob25lTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICfigJQnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj5UZWxlZ3JhbTo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGUgJiYgdGVsZWdyYW1IcmVmID8gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dGVsZWdyYW1IcmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGVsZWdyYW1IYW5kbGV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICfigJQnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7Qm9GO0LHQuNC80YvQuSDQsdCw0YDQsdC10YA6PC9zcGFuPiB7dXNlci5CYXJiZXIgfHwgJ+KAlCd9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QmNGB0YLQvtGA0LjRjyDQstC40LfQuNGC0L7QsjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPFZpc2l0SGlzdG9yeUxpc3QgdmlzaXRzPXt2aXNpdEhpc3Rvcnl9IGVtcHR5TWVzc2FnZT1cItCX0LDQv9C40YHQtdC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC5INCz0L7QtCDQvdC10YIuXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhY2t1cHNQYW5lbCA9ICh7IGJhY2t1cHMgPSBbXSwgb25SZXN0b3JlLCBvbkNyZWF0ZSwgb25EZWxldGUgfSkgPT4gKFxuICA8U2VjdGlvbkNhcmRcbiAgICB0aXRsZT1cItCg0LXQt9C10YDQstC90YvQtSDQutC+0L/QuNC4XCJcbiAgICBhY3Rpb25zPXtcbiAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxuICAgICAgICDQodC+0LfQtNCw0YLRjCDQutC+0L/QuNGOXG4gICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxuICA+XHJcbiAgICB7YmFja3Vwcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINC/0YPRgdGC0LAuPC9wPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICB7YmFja3Vwcy5tYXAoKGJhY2t1cCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0QmFja3VwTGFiZWwoYmFja3VwKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2JhY2t1cH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntsYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPntiYWNrdXB9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdG9yZShiYWNrdXApfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgINCS0L7RgdGB0YLQsNC90L7QstC40YLRjFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGJhY2t1cCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtMyBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCBjbGFzc05hbWU9XCJtci0xIGgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L1NlY3Rpb25DYXJkPlxuKTtcblxyXG5jb25zdCBBcHBvaW50bWVudE1vZGFsID0gKHsgb3BlbiwgYXBwb2ludG1lbnQsIG9wdGlvbnMgPSB7fSwgb25DbG9zZSwgb25TYXZlLCBvbkRlbGV0ZSwgY2FuRGVsZXRlID0gZmFsc2UsIGlzTmV3ID0gZmFsc2UsIGNsaWVudHMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgYnVpbGREcmFmdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHJlY29yZCkgPT4gKHJlY29yZCA/IHsgLi4ucmVjb3JkLCBVc2VySUQ6IHJlY29yZC5Vc2VySUQgfHwgcmVjb3JkLnVzZXJJZCB8fCAnJywgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyZWNvcmQuU3RhdHVzKSB9IDogbnVsbCksXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHJldHVybjtcclxuICAgIHNldERyYWZ0KGJ1aWxkRHJhZnQoYXBwb2ludG1lbnQpKTtcclxuICB9LCBbYXBwb2ludG1lbnQsIGJ1aWxkRHJhZnQsIG9wZW5dKTtcclxuXHJcbiAgaWYgKCFvcGVuIHx8ICFkcmFmdCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IHNlcnZpY2VzU2VsZWN0aW9uID0gcGFyc2VNdWx0aVZhbHVlKGRyYWZ0LlNlcnZpY2VzKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG5cclxuICBjb25zdCBzdWJtaXREcmFmdCA9IChuZXh0RHJhZnQpID0+IHtcbiAgICBpZiAoIW5leHREcmFmdCkgcmV0dXJuO1xuICAgIG9uU2F2ZSh7XG4gICAgICBpZDogbmV4dERyYWZ0LmlkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBDdXN0b21lck5hbWU6IG5leHREcmFmdC5DdXN0b21lck5hbWUsXG4gICAgICAgIFBob25lOiBuZXh0RHJhZnQuUGhvbmUsXG4gICAgICAgIEJhcmJlcjogbmV4dERyYWZ0LkJhcmJlcixcbiAgICAgICAgRGF0ZTogbmV4dERyYWZ0LkRhdGUsXG4gICAgICAgIFRpbWU6IG5leHREcmFmdC5UaW1lLFxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKG5leHREcmFmdC5TdGF0dXMpLFxuICAgICAgICBTZXJ2aWNlczogbmV4dERyYWZ0LlNlcnZpY2VzLFxuICAgICAgICBVc2VySUQ6IG5leHREcmFmdC5Vc2VySUQgfHwgJycsXG4gICAgICB9LFxuICAgICAgaXNOZXcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4gc3VibWl0RHJhZnQoZHJhZnQpO1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCFkcmFmdCkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHREcmFmdCA9IHsgLi4uZHJhZnQsIFN0YXR1czogJ9CS0YvQv9C+0LvQvdC10L3QsCcgfTtcbiAgICBzZXREcmFmdChuZXh0RHJhZnQpO1xuICAgIHN1Ym1pdERyYWZ0KG5leHREcmFmdCk7XG4gIH07XG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4ge1xyXG4gICAgICBpZiAoIXByZXYpIHJldHVybiBwcmV2O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgICBQaG9uZTogY2xpZW50LnBob25lIHx8IHByZXYuUGhvbmUsXHJcbiAgICAgICAgQmFyYmVyOiBwcmV2LkJhcmJlciB8fCBjbGllbnQucHJlZmVycmVkQmFyYmVyIHx8ICcnLFxyXG4gICAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT17aXNOZXcgPyAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnIDogYNCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LfQsNC/0LjRgdC4ICR7ZHJhZnQuQ3VzdG9tZXJOYW1lIHx8ICcnfWB9XHJcbiAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktZW5kIGdhcC0zXCI+XHJcbiAgICAgICAgICB7IWlzTmV3ICYmIGNhbkRlbGV0ZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlPy4oZHJhZnQpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxuICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHshaXNOZXcgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNYXJrQ29tcGxldGVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWVtZXJhbGQtMjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwLzEwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg0JLRi9C/0L7Qu9C90LXQvdC+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxDbGllbnRMb29rdXBJbnB1dFxyXG4gICAgICAgICAgbGFiZWw9XCLQmNC80Y8g0LrQu9C40LXQvdGC0LBcIlxyXG4gICAgICAgICAgdmFsdWU9e2RyYWZ0LkN1c3RvbWVyTmFtZSB8fCAnJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ0N1c3RvbWVyTmFtZScsIG5leHRWYWx1ZSl9XHJcbiAgICAgICAgICBjbGllbnRzPXtjbGllbnRzfVxyXG4gICAgICAgICAgb25TZWxlY3RDbGllbnQ9e2hhbmRsZUNsaWVudEF1dG9GaWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0KLQtdC70LXRhNC+0L08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZHJhZnQuUGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnUGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis3Li4uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuQmFyYmVyIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ0JhcmJlcicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0JHQsNGA0LHQtdGAPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuYmFyYmVycyB8fCBbXSkubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAge2JhcmJlcn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17ZHJhZnQuRGF0ZSA/IFN0cmluZyhkcmFmdC5EYXRlKS5zbGljZSgwLCAxMCkgOiAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdEYXRlJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC0xMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDxUaW1lUmFuZ2VQaWNrZXIgdmFsdWU9e2RyYWZ0LlRpbWUgfHwgJyd9IG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ1RpbWUnLCBuZXh0VmFsdWUpfSBwbGFjZWhvbGRlcj1cItCd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMXCIgLz5cclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtkcmFmdC5TdGF0dXMgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnU3RhdHVzJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC0xMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7QodGC0LDRgtGD0YE8L29wdGlvbj5cclxuICAgICAgICAgIHsob3B0aW9ucy5zdGF0dXNlcyB8fCBbXSkubWFwKChzdGF0dXMpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N0YXR1c30gdmFsdWU9e3N0YXR1c30+XHJcbiAgICAgICAgICAgICAge3N0YXR1c31cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgIDxNdWx0aVNlbGVjdENoZWNrYm94ZXNcclxuICAgICAgICAgICAgbGFiZWw9XCLQo9GB0LvRg9Cz0LhcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zLnNlcnZpY2VzIHx8IFtdfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VydmljZXNTZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQpID0+IGhhbmRsZUNoYW5nZSgnU2VydmljZXMnLCBzZWxlY3RlZC5qb2luKCcsICcpKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINGD0YHQu9GD0LNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IFRhYmxlc1dvcmtzcGFjZSA9ICh7XG4gIGFwaVJlcXVlc3QsXG4gIHNoYXJlZE9wdGlvbnMsXG4gIG9uT3B0aW9uc1VwZGF0ZSxcbiAgb25PcGVuUHJvZmlsZSxcbiAgb25PcGVuQXBwb2ludG1lbnRSZWNvcmQsXHJcbiAgY2xpZW50cyA9IFtdLFxyXG4gIGN1cnJlbnRVc2VyID0gbnVsbCxcclxuICBsaXZlQXBwb2ludG1lbnRzID0gbnVsbCxcclxuICBsaXZlVXBkYXRlZEF0ID0gbnVsbCxcclxuICBiYXJiZXJzID0gW10sXHJcbiAgc2VydmljZXMgPSBbXSxcclxuICBvbkJhcmJlckZpZWxkQ2hhbmdlLFxyXG4gIG9uU2F2ZUJhcmJlcixcclxuICBvbkFkZEJhcmJlcixcclxuICBvbkRlbGV0ZUJhcmJlcixcclxuICBvblNlcnZpY2VGaWVsZENoYW5nZSxcclxuICBvblNlcnZpY2VQcmljZUNoYW5nZSxcbiAgb25EZWxldGVTZXJ2aWNlLFxuICBvbkFkZFNlcnZpY2UsXG4gIG9uQWN0aXZlVGFibGVDaGFuZ2UsXG4gIHByZWZlcnJlZFRhYmxlID0gbnVsbCxcbiAgb25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkLFxuICBvblJlcXVlc3RDb25maXJtID0gbnVsbCxcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5hY3RpdmUnLCAnQXBwb2ludG1lbnRzJyk7XHJcbiAgY29uc3QgW3RhYmxlcywgc2V0VGFibGVzXSA9IHVzZVN0YXRlKCgpID0+IERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBbXSB9KSwge30pKTtcclxuICBjb25zdCBbZHJvcGRvd25PcHRpb25zLCBzZXREcm9wZG93bk9wdGlvbnNdID0gdXNlU3RhdGUoc2hhcmVkT3B0aW9ucyB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9KTtcclxuICBjb25zdCBbdGFibGVFcnJvciwgc2V0VGFibGVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJiZXIsIHNldFNlbGVjdGVkQmFyYmVyXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmJhcmJlckZpbHRlcicsICdhbGwnKTtcclxuICBjb25zdCBbaGlkZGVuU3RhdHVzZXMsIHNldEhpZGRlblN0YXR1c2VzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlblN0YXR1c2VzJywgW10pO1xyXG4gIGNvbnN0IFtoaWRkZW5Db2x1bW5zTWFwLCBzZXRIaWRkZW5Db2x1bW5zTWFwXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlbkNvbHVtbnMnLCB7XHJcbiAgICBBcHBvaW50bWVudHM6IFsnVXNlcklEJ10sXHJcbiAgICBTY2hlZHVsZXM6IFtdLFxyXG4gICAgVXNlcnM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzb3J0Q29uZmlncywgc2V0U29ydENvbmZpZ3NdID0gdXNlTG9jYWxTdG9yYWdlKFxyXG4gICAgJ3RhYmxlcy5zb3J0Q29uZmlncycsXHJcbiAgICBEQVRBX1RBQkxFUy5yZWR1Y2UoKGFjYywgdGFibGUpID0+ICh7IC4uLmFjYywgW3RhYmxlXTogVEFCTEVfQ09ORklHW3RhYmxlXT8uZGVmYXVsdFNvcnQgfHwgbnVsbCB9KSwge30pXHJcbiAgKTtcclxuICBjb25zdCBbY3JlYXRlTW9kYWxPcGVuLCBzZXRDcmVhdGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGFzdEFwcG9pbnRtZW50cywgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHNdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuc2hvd1Bhc3RBcHBvaW50bWVudHMnLCB0cnVlKTtcclxuICBjb25zdCBbZ3JvdXBBcHBvaW50bWVudHNCeURhdGUsIHNldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmdyb3VwQXBwb2ludG1lbnRzQnlEYXRlJywgdHJ1ZSk7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRUZW1wbGF0ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICBCYXJiZXI6IHBpY2tCYXJiZXJGb3JVc2VyKGN1cnJlbnRVc2VyLCBkcm9wZG93bk9wdGlvbnMuYmFyYmVycyB8fCBbXSksXHJcbiAgICAgIERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXHJcbiAgICAgIFRpbWU6ICcnLFxyXG4gICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKChkcm9wZG93bk9wdGlvbnMuc3RhdHVzZXMgJiYgZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzWzBdKSB8fCAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnKSxcclxuICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICBVc2VySUQ6ICcnLFxyXG4gICAgfSksXHJcbiAgICBbZHJvcGRvd25PcHRpb25zLCBjdXJyZW50VXNlcj8uZGlzcGxheU5hbWUsIGN1cnJlbnRVc2VyPy51c2VybmFtZV1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNoYXJlZE9wdGlvbnMpIHtcclxuICAgICAgc2V0RHJvcGRvd25PcHRpb25zKHtcclxuICAgICAgICAuLi5zaGFyZWRPcHRpb25zLFxyXG4gICAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KHNoYXJlZE9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2hhcmVkT3B0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVUYWJsZSA9PT0gJ1NjaGVkdWxlcycpIHtcbiAgICAgIHNldEFjdGl2ZVRhYmxlKCdCYXJiZXJzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXSkge1xuICAgICAgc2V0QWN0aXZlVGFibGUoJ0FwcG9pbnRtZW50cycpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25BY3RpdmVUYWJsZUNoYW5nZT8uKGFjdGl2ZVRhYmxlKTtcbiAgfSwgW2FjdGl2ZVRhYmxlLCBvbkFjdGl2ZVRhYmxlQ2hhbmdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByZWZlcnJlZFRhYmxlKSByZXR1cm47XG4gICAgY29uc3QgbmV4dFRhYmxlID0gcHJlZmVycmVkVGFibGUgPT09ICdTY2hlZHVsZXMnID8gJ0JhcmJlcnMnIDogcHJlZmVycmVkVGFibGU7XG4gICAgaWYgKFRBQkxFX09SREVSLmluY2x1ZGVzKG5leHRUYWJsZSkpIHtcclxuICAgICAgc2V0QWN0aXZlVGFibGUobmV4dFRhYmxlKTtcclxuICAgIH1cclxuICAgIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZD8uKCk7XHJcbiAgfSwgW3ByZWZlcnJlZFRhYmxlLCBzZXRBY3RpdmVUYWJsZSwgb25QcmVmZXJyZWRUYWJsZUNvbnN1bWVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRIaWRkZW5TdGF0dXNlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gQXJyYXkuZnJvbShuZXcgU2V0KHByZXYubWFwKChzdGF0dXMpID0+IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykpLmZpbHRlcihCb29sZWFuKSkpO1xyXG4gICAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IHByZXYubGVuZ3RoICYmIG5vcm1hbGl6ZWQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IHByZXZbaW5kZXhdKSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gICAgfSk7XHJcbiAgfSwgW3NldEhpZGRlblN0YXR1c2VzXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVGFibGVzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcclxuICAgIHNldFRhYmxlRXJyb3IoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIC4uLkRBVEFfVEFCTEVTLm1hcCgodGFibGUpID0+IGFwaVJlcXVlc3QoYC8ke3RhYmxlfWApKSxcclxuICAgICAgICBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHMnKSxcclxuICAgICAgXSk7XHJcbiAgICAgIGNvbnN0IG5leHRUYWJsZXMgPSB7fTtcclxuICAgICAgREFUQV9UQUJMRVMuZm9yRWFjaCgodGFibGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IHJlc3BvbnNlc1tpbmRleF0gfHwgW107XHJcbiAgICAgICAgbmV4dFRhYmxlc1t0YWJsZV0gPSB0YWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyByZWNvcmRzLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocm93LlN0YXR1cykgfSkpIDogcmVjb3JkcztcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJhd09wdGlvbnMgPSByZXNwb25zZXNbREFUQV9UQUJMRVMubGVuZ3RoXSB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9O1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHtcclxuICAgICAgICAuLi5yYXdPcHRpb25zLFxyXG4gICAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KHJhd09wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUYWJsZXMobmV4dFRhYmxlcyk7XHJcbiAgICAgIHNldERyb3Bkb3duT3B0aW9ucyhub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICAgIG9uT3B0aW9uc1VwZGF0ZT8uKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RhYmxlIGZldGNoIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgtCw0LHQu9C40YbRiycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaVJlcXVlc3QsIG9uT3B0aW9uc1VwZGF0ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUYWJsZXMoKTtcclxuICB9LCBbZmV0Y2hUYWJsZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXZlQXBwb2ludG1lbnRzKSkgcmV0dXJuO1xyXG4gICAgc2V0VGFibGVzKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBBcHBvaW50bWVudHM6IGxpdmVBcHBvaW50bWVudHMubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgLi4ucm93LFxyXG4gICAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocm93LlN0YXR1cyksXHJcbiAgICAgIH0pKSxcclxuICAgIH0pKTtcclxuICB9LCBbbGl2ZUFwcG9pbnRtZW50cywgbGl2ZVVwZGF0ZWRBdF0pO1xyXG5cclxuICBjb25zdCBjdXJyZW50Q29sdW1ucyA9IFRBQkxFX0NPTFVNTlNbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSBoaWRkZW5Db2x1bW5zTWFwW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IGN1cnJlbnRDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KSk7XHJcbiAgY29uc3Qgc29ydENvbmZpZyA9IHNvcnRDb25maWdzW2FjdGl2ZVRhYmxlXSB8fCBUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdPy5kZWZhdWx0U29ydCB8fCBudWxsO1xyXG5cclxuICBjb25zdCBwcm9jZXNzZWRSb3dzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBzb3VyY2UgPSB0YWJsZXNbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gICAgaWYgKCFzb3VyY2UubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBsZXQgcm93cyA9IFsuLi5zb3VyY2VdO1xyXG4gICAgaWYgKFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0/LnN1cHBvcnRzQmFyYmVyRmlsdGVyICYmIHNlbGVjdGVkQmFyYmVyICE9PSAnYWxsJykge1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4gbm9ybWFsaXplVGV4dChyb3cuQmFyYmVyKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVUZXh0KHNlbGVjdGVkQmFyYmVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycpIHtcclxuICAgICAgY29uc3Qgbm93VHMgPSBEYXRlLm5vdygpO1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICAgIGlmIChoaWRkZW5TdGF0dXNlcy5sZW5ndGggJiYgaGlkZGVuU3RhdHVzZXMuaW5jbHVkZXMocm93LlN0YXR1cykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoc2hvd1Bhc3RBcHBvaW50bWVudHMpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQocm93LCBub3dUcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaFRlcm0udHJpbSgpKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoVGVybS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IHZpc2libGVDb2x1bW5zLnNvbWUoKGNvbHVtbikgPT4gbm9ybWFsaXplVGV4dChyb3dbY29sdW1uLmtleV0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydENvbmZpZz8ua2V5KSB7XHJcbiAgICAgIGNvbnN0IGNvbHVtbkRlZiA9IGN1cnJlbnRDb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmtleSA9PT0gc29ydENvbmZpZy5rZXkpO1xyXG4gICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVzb2x2ZVNvcnRWYWx1ZShhLCBjb2x1bW5EZWYsIGFjdGl2ZVRhYmxlKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IHJlc29sdmVTb3J0VmFsdWUoYiwgY29sdW1uRGVmLCBhY3RpdmVUYWJsZSk7XHJcbiAgICAgICAgaWYgKGxlZnQgPT09IHJpZ2h0KSByZXR1cm4gMDtcclxuICAgICAgICBpZiAodHlwZW9mIGxlZnQgPT09ICdudW1iZXInICYmIHR5cGVvZiByaWdodCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyBsZWZ0IC0gcmlnaHQgOiByaWdodCAtIGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb3J0Q29uZmlnLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAobGVmdCA+IHJpZ2h0ID8gMSA6IC0xKSA6IGxlZnQgPiByaWdodCA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm93cztcclxuICB9LCBbdGFibGVzLCBhY3RpdmVUYWJsZSwgc2VsZWN0ZWRCYXJiZXIsIGhpZGRlblN0YXR1c2VzLCBzZWFyY2hUZXJtLCB2aXNpYmxlQ29sdW1ucywgc29ydENvbmZpZywgc2hvd1Bhc3RBcHBvaW50bWVudHNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU29ydCA9IChjb2x1bW5LZXkpID0+IHtcclxuICAgIHNldFNvcnRDb25maWdzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBwcmV2W2FjdGl2ZVRhYmxlXTtcclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gY3VycmVudD8ua2V5ID09PSBjb2x1bW5LZXkgJiYgY3VycmVudC5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFthY3RpdmVUYWJsZV06IHsga2V5OiBjb2x1bW5LZXksIGRpcmVjdGlvbiB9IH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDb2x1bW4gPSAoY29sdW1uS2V5KSA9PiB7XHJcbiAgICBzZXRIaWRkZW5Db2x1bW5zTWFwKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQocHJldlthY3RpdmVUYWJsZV0gfHwgW10pO1xyXG4gICAgICBpZiAoaGlkZGVuLmhhcyhjb2x1bW5LZXkpKSB7XHJcbiAgICAgICAgaGlkZGVuLmRlbGV0ZShjb2x1bW5LZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGhpZGRlbi5zaXplIDwgY3VycmVudENvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGhpZGRlbi5hZGQoY29sdW1uS2V5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbYWN0aXZlVGFibGVdOiBBcnJheS5mcm9tKGhpZGRlbikgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVN0YXR1cyA9IChzdGF0dXMpID0+IHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpO1xyXG4gICAgc2V0SGlkZGVuU3RhdHVzZXMoKHByZXYpID0+IChwcmV2LmluY2x1ZGVzKG5vcm1hbGl6ZWQpID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG5vcm1hbGl6ZWQpIDogWy4uLnByZXYsIG5vcm1hbGl6ZWRdKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKHJlY29yZElkLCBkYXRhLCB7IHRhYmxlSWQ6IG92ZXJyaWRlVGFibGVJZCB9ID0ge30pID0+IHtcclxuICAgIGlmICghcmVjb3JkSWQpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBvdmVycmlkZVRhYmxlSWQgfHwgYWN0aXZlVGFibGU7XHJcbiAgICBjb25zdCBub3JtYWxpemVkRGF0YSA9XHJcbiAgICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGRhdGE/LlN0YXR1cyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB7IC4uLmRhdGEsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoZGF0YS5TdGF0dXMpIH1cclxuICAgICAgICA6IGRhdGE7XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHRhYmxlc1t0YWJsZUlkXSB8fCBbXTtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gcHJldlt0YWJsZUlkXSB8fCBbXTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIFt0YWJsZUlkXTogbGlzdC5tYXAoKHJvdykgPT4gKGdldFJlY29yZElkKHJvdykgPT09IHJlY29yZElkID8geyAuLi5yb3csIC4uLm5vcm1hbGl6ZWREYXRhIH0gOiByb3cpKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ1NjaGVkdWxlcydcclxuICAgICAgICAgID8geyAuLi4ob3JpZ2luYWwuZmluZCgocm93KSA9PiBnZXRSZWNvcmRJZChyb3cpID09PSByZWNvcmRJZCkgfHwge30pLCAuLi5ub3JtYWxpemVkRGF0YSB9XHJcbiAgICAgICAgICA6IG5vcm1hbGl6ZWREYXRhO1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvJHt0YWJsZUlkfS8ke2VuY29kZVVSSUNvbXBvbmVudChyZWNvcmRJZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0L3QvtCy0LjRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgICBzZXRUYWJsZXMoKHByZXYpID0+ICh7IC4uLnByZXYsIFt0YWJsZUlkXTogb3JpZ2luYWwgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChyZWNvcmQsIHsgc2tpcENvbmZpcm0gPSBmYWxzZSB9ID0ge30pID0+IHtcclxuICAgIGlmICghcmVjb3JkIHx8IGFjdGl2ZVRhYmxlID09PSAnU2NoZWR1bGVzJykgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3QgY29uZmlybUNvcHkgPSAoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRhYmxlSWQpIHtcclxuICAgICAgICBjYXNlICdVc2Vycyc6XHJcbiAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINC60LvQuNC10L3RgtCwPycsIG1lc3NhZ2U6ICfQmtC70LjQtdC90YIg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nIH07XHJcbiAgICAgICAgY2FzZSAnQXBwb2ludG1lbnRzJzpcclxuICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsIG1lc3NhZ2U6ICfQl9Cw0L/QuNGB0Ywg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsCDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLicgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Yw/JywgbWVzc2FnZTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwLicgfTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGlmICghc2tpcENvbmZpcm0pIHtcclxuICAgICAgY29uc3QgY29uZmlybWVkID0gb25SZXF1ZXN0Q29uZmlybVxyXG4gICAgICAgID8gYXdhaXQgb25SZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgICAgICAgIC4uLmNvbmZpcm1Db3B5LFxyXG4gICAgICAgICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgICAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IHRydWU7XHJcbiAgICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHRhYmxlc1t0YWJsZUlkXSB8fCBbXTtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gcHJldlt0YWJsZUlkXSB8fCBbXTtcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW3RhYmxlSWRdOiBsaXN0LmZpbHRlcigocm93KSA9PiBnZXRSZWNvcmRJZChyb3cpICE9PSBnZXRSZWNvcmRJZChyZWNvcmQpKSB9O1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvJHt0YWJsZUlkfS8ke2VuY29kZVVSSUNvbXBvbmVudChyZWNvcmQuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgICAgc2V0VGFibGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbdGFibGVJZF06IG9yaWdpbmFsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVSZWNvcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXlsb2FkID1cclxuICAgICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBwYXlsb2FkPy5TdGF0dXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyB7IC4uLnBheWxvYWQsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocGF5bG9hZC5TdGF0dXMpIH1cclxuICAgICAgICAgIDogcGF5bG9hZDtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplZFBheWxvYWQpLFxyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hUYWJsZXMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsaWVudFByb2ZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIChjbGllbnQpID0+IHtcclxuICAgICAgaWYgKCFjbGllbnQ/Lk5hbWUpIHJldHVybiBudWxsO1xyXG4gICAgICByZXR1cm4gYXBpUmVxdWVzdChgL3VzZXItcHJvZmlsZS8ke2VuY29kZVVSSUNvbXBvbmVudChjbGllbnQuTmFtZSl9YCk7XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdGFibGVTZXR0aW5ncyA9IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0gfHwge307XHJcbiAgY29uc3QgaXNDdXN0b21UYWJsZSA9IHRhYmxlU2V0dGluZ3M/Lm1vZGUgPT09ICdjdXN0b20nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgIHtWSVNJQkxFX1RBQkxFX09SREVSLm1hcCgodGFibGUpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt0YWJsZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFibGUodGFibGUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBweC00IHB5LTIgdGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgYWN0aXZlVGFibGUgPT09IHRhYmxlID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZScgOiAnYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VEFCTEVfQ09ORklHW3RhYmxlXT8ubGFiZWwgfHwgdGFibGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7aXNDdXN0b21UYWJsZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAge2FjdGl2ZVRhYmxlID09PSAnQmFyYmVycycgJiYgKFxyXG4gICAgICAgICAgICA8QmFyYmVyc1ZpZXdcclxuICAgICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlcz17dGFibGVzLlNjaGVkdWxlcyB8fCBbXX1cclxuICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvbkJhcmJlckZpZWxkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uU2F2ZT17b25TYXZlQmFyYmVyfVxyXG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZEJhcmJlcn1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVCYXJiZXJ9XHJcbiAgICAgICAgICAgICAgbG9hZEF2YXRhck9wdGlvbnM9eygpID0+IGFwaVJlcXVlc3QoJy9hc3NldHMvYXZhdGFycycpfVxyXG4gICAgICAgICAgICAgIG9uU2NoZWR1bGVVcGRhdGU9eyhyZWNvcmRJZCwgcGF5bG9hZCkgPT4gaGFuZGxlVXBkYXRlKHJlY29yZElkLCBwYXlsb2FkLCB7IHRhYmxlSWQ6ICdTY2hlZHVsZXMnIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthY3RpdmVUYWJsZSA9PT0gJ1NlcnZpY2VzJyAmJiAoXHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc1ZpZXdcclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XHJcbiAgICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvblNlcnZpY2VGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlPXtvblNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVTZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZFNlcnZpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7dGFibGVTZXR0aW5ncyAmJiAoXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPXt0YWJsZVNldHRpbmdzLmxhYmVsfT5cclxuICAgICAgICAgIHt0YWJsZUVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt0YWJsZUVycm9yfSAvPn1cclxuICAgICAgICAgIDxUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHN1cHBvcnRzQmFyYmVyRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzQmFyYmVyRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJhcmJlcj17c2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQmFyYmVyPXtzZXRTZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnN9XHJcbiAgICAgICAgICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17ZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHRvZ2dsZVN0YXR1cz17dG9nZ2xlU3RhdHVzfVxyXG4gICAgICAgICAgICByZXNldFN0YXR1c2VzPXsoKSA9PiBzZXRIaWRkZW5TdGF0dXNlcyhbXSl9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICB0b2dnbGVDb2x1bW49e3RvZ2dsZUNvbHVtbn1cclxuICAgICAgICAgICAgY2FuQ3JlYXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZX1cclxuICAgICAgICAgICAgb25PcGVuQ3JlYXRlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17ZmV0Y2hUYWJsZXN9XHJcbiAgICAgICAgICAgIHNob3dQYXN0QXBwb2ludG1lbnRzPXtzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHM9e3NldFNob3dQYXN0QXBwb2ludG1lbnRzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0dyb3VwaW5nPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cyd9XHJcbiAgICAgICAgICAgIGdyb3VwQnlEYXRlPXtncm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgICAgc2V0R3JvdXBCeURhdGU9e3NldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc0ZldGNoaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0J7QsdC90L7QstC70Y/RjiDRgtCw0LHQu9C40YbRiy4uLlwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICB7YWN0aXZlVGFibGUgPT09ICdVc2VycycgPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2xpZW50c0xpc3RcclxuICAgICAgICAgICAgICAgICAgY2xpZW50cz17cHJvY2Vzc2VkUm93c31cclxuICAgICAgICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnMgfHwgW119XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoSGlzdG9yeT17ZmV0Y2hDbGllbnRQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvblJlcXVlc3RDb25maXJtPXtvblJlcXVlc3RDb25maXJtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgcm93cz17cHJvY2Vzc2VkUm93c31cclxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRDb25maWc9e3NvcnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgIG9uU29ydD17aGFuZGxlU29ydH1cclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e3RhYmxlU2V0dGluZ3MuY2FuQ3JlYXRlID8gaGFuZGxlRGVsZXRlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbk9wZW5BcHBvaW50bWVudD17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gb25PcGVuQXBwb2ludG1lbnRSZWNvcmQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBncm91cEJ5RGF0ZT17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gZ3JvdXBBcHBvaW50bWVudHNCeURhdGUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICAgICAge3RhYmxlU2V0dGluZ3MuY2FuQ3JlYXRlICYmXHJcbiAgICAgICAgICAgIChhY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyAoXHJcbiAgICAgICAgICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e2NyZWF0ZU1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50PXthcHBvaW50bWVudFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17KHsgcGF5bG9hZCB9KSA9PiBoYW5kbGVDcmVhdGVSZWNvcmQocGF5bG9hZCl9XHJcbiAgICAgICAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxDcmVhdGVSZWNvcmRNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtjcmVhdGVNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25TYXZlPXtoYW5kbGVDcmVhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVTZXR0aW5ncy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlSWQ9e2FjdGl2ZVRhYmxlfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkZpZWxkcz17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gWydVc2VySUQnLCAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCAnUmVtaW5kZXIyaEJhcmJlclNlbnQnXSA6IFtdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQm90Q29udHJvbFZpZXcgPSAoe1xuICBzdGF0dXMsXG4gIHNldHRpbmdzLFxuICBiYWNrdXBzID0gW10sXG4gIG1lc3NhZ2VzID0gW10sXG4gIG9uVG9nZ2xlRW5hYmxlZCxcclxuICBvblN0YXJ0LFxyXG4gIG9uU3RvcCxcclxuICBvblJlc3RhcnQsXHJcbiAgb25TYXZlU2V0dGluZ3MsXHJcbiAgb25TYXZlTWVzc2FnZSxcbiAgb25SZXN0b3JlQmFja3VwLFxuICBvbkNyZWF0ZUJhY2t1cCxcbiAgb25EZWxldGVCYWNrdXAsXG4gIGxpY2Vuc2VTdGF0dXMsXG4gIHVwZGF0ZUluZm8sXG4gIG9uUmVmcmVzaFVwZGF0ZSxcbiAgb25BcHBseVVwZGF0ZSxcclxuICBzeXN0ZW1CdXN5LFxyXG4gIHZpZXdNb2RlID0gJ2JvdCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBzZXRBYm91dChzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuICB9LCBbc2V0dGluZ3NdKTtcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnc3lzdGVtJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICA8QmFja3Vwc1BhbmVsIGJhY2t1cHM9e2JhY2t1cHN9IG9uUmVzdG9yZT17b25SZXN0b3JlQmFja3VwfSBvbkNyZWF0ZT17b25DcmVhdGVCYWNrdXB9IG9uRGVsZXRlPXtvbkRlbGV0ZUJhY2t1cH0gLz5cblxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCb0LjRhtC10L3Qt9C40Y8g0Lgg0L7QsdC90L7QstC70LXQvdC40Y9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCb0LjRhtC10L3Qt9C40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCh0YLQsNGC0YPRgToge2xpY2Vuc2VTdGF0dXM/LnZhbGlkID8gJ9CQ0LrRgtC40LLQvdCwJyA6ICfQndC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk6IHtsaWNlbnNlU3RhdHVzPy5tZXNzYWdlIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm93bmVyICYmIDxwPtCS0LvQsNC00LXQu9C10YY6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2Uub3duZXJ9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8uZXhwaXJlc0F0ICYmIDxwPtCU0LXQudGB0YLQstGD0LXRgiDQtNC+IHtmb3JtYXREYXRlKGxpY2Vuc2VTdGF0dXMubGljZW5zZS5leHBpcmVzQXQpfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm51bWJlciAmJiA8cD7QndC+0LzQtdGAOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm51bWJlcn08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7QntCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0J/QvtGB0LvQtdC00L3Rj9GPINCy0LXRgNGB0LjRjzoge3VwZGF0ZUluZm8/LnZlcnNpb24gfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQvtCy0LXRgNC10L3Qvjoge3VwZGF0ZUluZm8/LmNoZWNrZWRBdCA/IGZvcm1hdERhdGUodXBkYXRlSW5mby5jaGVja2VkQXQpIDogJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCh0YLQsNGC0YPRgToge3VwZGF0ZUluZm8/LmRldGFpbHMgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCf0YDQvtCy0LXRgNC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5IHx8ICF1cGRhdGVJbmZvPy5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzeXN0ZW1CdXN5ID8gJ9Ce0LHQvdC+0LLQu9C10L3QuNC14oCmJyA6ICfQntCx0L3QvtCy0LjRgtGMJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQodGC0LDRgtGD0YEg0LHQvtGC0LBcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0KHQvtGB0YLQvtGPOiB7c3RhdHVzPy5ydW5uaW5nID8gJ9GA0LDQsdC+0YLQsNC10YInIDogJ9C+0YHRgtCw0L3QvtCy0LvQtdC9J308L3A+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2V0dGluZ3M/LmlzQm90RW5hYmxlZCAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uVG9nZ2xlRW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNCy0YLQvtGB0YLQsNGA0YIg0LLQvNC10YHRgtC1INGBIENSTVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQotC10LrRgdGC0Ysg0LHQvtGC0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QntC/0LjRgdCw0L3QuNC1INC70LXQvdC00LjQvdCz0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXszfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCR0LvQvtC6IMKr0J4g0L3QsNGBwrs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBYm91dChldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXs0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZVNldHRpbmdzKHsgYm90RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhYm91dFRleHQ6IGFib3V0IH0pfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YHRgtGLXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMb2dpblNjcmVlbiA9ICh7IG9uTG9naW4sIGVycm9yIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbk9wdGlvbnMsIHNldExvZ2luT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdGlvbnNFcnJvciwgc2V0T3B0aW9uc0Vycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZ09wdGlvbnMsIHNldExvYWRpbmdPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdPcHRpb25zKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUobm9ybWFsaXplZFswXS5sb2dpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm9ybWFsaXplZC5zb21lKChvcHRpb24pID0+IG9wdGlvbi5sb2dpbiA9PT0gdXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcignJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhbXSk7XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7Qsi4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hPcHRpb25zKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIG9uTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3REaXNhYmxlZCA9IGxvYWRpbmdPcHRpb25zIHx8IGxvZ2luT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAgcHgtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMCBwLTggc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5CYXJiZXIgQm90IENSTTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCAo0LvQvtCz0LjQvSk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS02MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57bG9hZGluZ09wdGlvbnMgPyAn0JfQsNCz0YDRg9C30LrQsC4uLicgOiAn0KPQutCw0LbQuNGC0LUg0LHQsNGA0LHQtdGA0LAnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bG9naW5PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubG9naW59IHZhbHVlPXtvcHRpb24ubG9naW59PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbCB8fCBvcHRpb24ubG9naW59XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQsNC60YLQuNCy0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ysg0LjQtyDRgNCw0LfQtNC10LvQsCDCq9CR0LDRgNCx0LXRgNGLwrsuPC9wPlxyXG4gICAgICAgICAgICB7b3B0aW9uc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTQwMFwiPntvcHRpb25zRXJyb3J9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyh2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3IpICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3J9IC8+fVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH0+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgICByZXR1cm4gc2F2ZWQgPyBidWlsZFNlc3Npb25QYXlsb2FkKEpTT04ucGFyc2Uoc2F2ZWQpKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlTG9jYWxTdG9yYWdlKCdiYXJiZXIuYWN0aXZlVGFiJywgJ2Rhc2hib2FyZCcpO1xyXG4gIGNvbnN0IFtwZW5kaW5nVGFibGVWaWV3LCBzZXRQZW5kaW5nVGFibGVWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWN0aXZlRGF0YVRhYmxlLCBzZXRBY3RpdmVEYXRhVGFibGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFibGVzLmFjdGl2ZScpO1xuICAgICAgcmV0dXJuIHN0b3JlZCA/IEpTT04ucGFyc2Uoc3RvcmVkKSA6ICdBcHBvaW50bWVudHMnO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuICdBcHBvaW50bWVudHMnO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFyYmVycywgc2V0QmFyYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JvdFN0YXR1cywgc2V0Qm90U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RTZXR0aW5ncywgc2V0Qm90U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdE1lc3NhZ2VzLCBzZXRCb3RNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpY2Vuc2VTdGF0dXMsIHNldExpY2Vuc2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwZGF0ZUluZm8sIHNldFVwZGF0ZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnNDYWNoZSwgc2V0T3B0aW9uc0NhY2hlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgY29uc3QgW2FwcG9pbnRtZW50TW9kYWwsIHNldEFwcG9pbnRtZW50TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgZGF0YTogbnVsbCwgb3B0aW9uczogbnVsbCwgaXNOZXc6IGZhbHNlLCBhbGxvd0RlbGV0ZTogZmFsc2UgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dsb2JhbEVycm9yLCBzZXRHbG9iYWxFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzeXN0ZW1CdXN5LCBzZXRTeXN0ZW1CdXN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpO1xuICBjb25zdCBbcmVhbHRpbWVTbmFwc2hvdCwgc2V0UmVhbHRpbWVTbmFwc2hvdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZhdGFsRXJyb3IsIHNldEZhdGFsRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb25maXJtRGlhbG9nLCBzZXRDb25maXJtRGlhbG9nXSA9IHVzZVN0YXRlKGRlZmF1bHRDb25maXJtU3RhdGUpO1xuICBjb25zdCBbY29ubmVjdGlvblN0YXR1cywgc2V0Q29ubmVjdGlvblN0YXR1c10gPSB1c2VTdGF0ZSgndW5rbm93bicpO1xuICBjb25zdCBjb25maXJtUmVzb2x2ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RDb25maXJtID0gdXNlQ2FsbGJhY2soXHJcbiAgICAob3B0aW9ucyA9IHt9KSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50ID0gcmVzb2x2ZTtcclxuICAgICAgICBzZXRDb25maXJtRGlhbG9nKHsgLi4uZGVmYXVsdENvbmZpcm1TdGF0ZSwgLi4ub3B0aW9ucywgb3BlbjogdHJ1ZSB9KTtcclxuICAgICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1SZXN1bHQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgc2V0Q29uZmlybURpYWxvZyhkZWZhdWx0Q29uZmlybVN0YXRlKTtcclxuICAgICAgaWYgKGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQocmVzdWx0KTtcclxuICAgICAgICBjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnIHx8IGFjdGl2ZVRhYiA9PT0gJ3NlcnZpY2VzJykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gYWN0aXZlVGFiID09PSAnYmFyYmVycycgPyAnQmFyYmVycycgOiAnU2VydmljZXMnO1xuICAgICAgc2V0UGVuZGluZ1RhYmxlVmlldyh0YXJnZXQpO1xuICAgICAgc2V0QWN0aXZlVGFiKCd0YWJsZXMnKTtcbiAgICB9XG4gIH0sIFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJUYWJsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICh0YWJsZUlkKSA9PiB7XG4gICAgICBpZiAoIXRhYmxlSWQpIHJldHVybjtcbiAgICAgIHNldEFjdGl2ZURhdGFUYWJsZSh0YWJsZUlkKTtcbiAgICAgIHNldFBlbmRpbmdUYWJsZVZpZXcodGFibGVJZCk7XG4gICAgICBzZXRBY3RpdmVUYWIoJ3RhYmxlcycpO1xuICAgIH0sXG4gICAgW3NldEFjdGl2ZVRhYiwgc2V0UGVuZGluZ1RhYmxlVmlld11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVBY3RpdmVUYWJsZVN5bmMgPSB1c2VDYWxsYmFjayhcbiAgICAodGFibGVJZCkgPT4ge1xuICAgICAgaWYgKCF0YWJsZUlkKSByZXR1cm47XG4gICAgICBzZXRBY3RpdmVEYXRhVGFibGUodGFibGVJZCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRQZW5kaW5nVGFibGVWaWV3KG51bGwpLCBbXSk7XG4gIGNvbnN0IHNlcnZpY2VTYXZlVGltZXJzID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XG4gICAgICBzZXRDb25uZWN0aW9uU3RhdHVzKCd1bmtub3duJyk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tTZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vbG9naW4vb3B0aW9uc2AsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVybjtcbiAgICAgICAgc2V0Q29ubmVjdGlvblN0YXR1cyhyZXNwb25zZS5vayA/ICdvbmxpbmUnIDogJ29mZmxpbmUnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgc2V0Q29ubmVjdGlvblN0YXR1cygnb2ZmbGluZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGVja1NlcnZlcigpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hlY2tTZXJ2ZXIsIDE1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtzZXNzaW9uPy50b2tlbl0pO1xuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JhcmJlci1zZXNzaW9uJyk7XHJcbiAgICBzZXRTZXNzaW9uKG51bGwpO1xyXG4gICAgc2V0RGFzaGJvYXJkKG51bGwpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgc2V0UmVhbHRpbWVTbmFwc2hvdChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFwaVJlcXVlc3QgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChlbmRwb2ludCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHRocm93IG5ldyBFcnJvcign0J3QtdGCINCw0LrRgtC40LLQvdC+0Lkg0YHQtdGB0YHQuNC4Jyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udG9rZW59YCxcclxuICAgICAgICAuLi4ob3B0aW9ucy5ib2R5ICYmICFvcHRpb25zLmhlYWRlcnM/LlsnQ29udGVudC1UeXBlJ10gPyB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSA6IHt9KSxcclxuICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtlbmRwb2ludH1gLCB7IC4uLm9wdGlvbnMsIGhlYWRlcnMgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGhhbmRsZUxvZ291dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0KHQtdGB0YHQuNGPINC40YHRgtC10LrQu9CwJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQt9Cw0L/RgNC+0YHQsCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9LFxyXG4gICAgW3Nlc3Npb24/LnRva2VuLCBoYW5kbGVMb2dvdXRdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBbGwgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvZGFzaGJvYXJkL292ZXJ2aWV3Jyk7XHJcbiAgICAgIHNldERhc2hib2FyZChvdmVydmlldyk7XHJcbiAgICAgIGNvbnN0IHdpdGhGYWxsYmFjayA9IChyZXF1ZXN0LCBmYWxsYmFjaywgbGFiZWwpID0+XHJcbiAgICAgICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsYWJlbH0gZmV0Y2ggc2tpcHBlZDpgLCBlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IFtcclxuICAgICAgICBzZXJ2aWNlc0Z1bGwsXHJcbiAgICAgICAgYmFyYmVyc0Z1bGwsXHJcbiAgICAgICAgYm90U3RhdGUsXHJcbiAgICAgICAgYm90TWVzc2FnZXNQYXlsb2FkLFxyXG4gICAgICAgIGxpY2Vuc2UsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9zZXJ2aWNlcy9mdWxsJyksIHsgc2VydmljZXM6IFtdIH0sICdTZXJ2aWNlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYmFyYmVycy9mdWxsJyksIFtdLCAnQmFyYmVycycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycpLCB7IHN0YXR1czogbnVsbCwgc2V0dGluZ3M6IG51bGwgfSwgJ0JvdCBzdGF0dXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JvdC9tZXNzYWdlcycpLCBbXSwgJ0JvdCBtZXNzYWdlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvbGljZW5zZS9zdGF0dXMnKSwgbnVsbCwgJ0xpY2Vuc2UnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnKSwgbnVsbCwgJ1VwZGF0ZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soXHJcbiAgICAgICAgICBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHMnKSxcclxuICAgICAgICAgIHsgc3RhdHVzZXM6IFtdLCBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdIH0sXHJcbiAgICAgICAgICAnT3B0aW9ucycsXHJcbiAgICAgICAgKSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlcnZpY2VzKHNlcnZpY2VzRnVsbC5zZXJ2aWNlcyB8fCBbXSk7XHJcbiAgICAgIHNldEJhcmJlcnMoYmFyYmVyc0Z1bGwgfHwgb3ZlcnZpZXcuYmFyYmVycyB8fCBbXSk7XHJcbiAgICAgIHNldEJvdFNldHRpbmdzKGJvdFN0YXRlLnNldHRpbmdzIHx8IG92ZXJ2aWV3LmJvdD8uc2V0dGluZ3MgfHwgbnVsbCk7XHJcbiAgICAgIHNldEJvdFN0YXR1cyhib3RTdGF0ZS5zdGF0dXMpO1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcyhib3RNZXNzYWdlc1BheWxvYWQgfHwgW10pO1xyXG4gICAgICBzZXRMaWNlbnNlU3RhdHVzKGxpY2Vuc2UpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHVwZGF0ZSk7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0geyAuLi5vcHRpb25zLCBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSB9O1xyXG4gICAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaVJlcXVlc3QsIHNlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbj8udG9rZW4sIGZldGNoQWxsXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgIHNldFJlYWx0aW1lU25hcHNob3QobnVsbCk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEV2ZW50U291cmNlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHRva2VuUGFyYW0gPSBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbi50b2tlbik7XHJcbiAgICBjb25zdCBzdHJlYW1VcmwgPSBgJHtBUElfQkFTRV9VUkx9L2V2ZW50cy9zdHJlYW0/dG9rZW49JHt0b2tlblBhcmFtfWA7XHJcbiAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShzdHJlYW1VcmwpO1xuICAgIGV2ZW50U291cmNlLm9ub3BlbiA9ICgpID0+IHNldENvbm5lY3Rpb25TdGF0dXMoJ29ubGluZScpO1xuICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgaWYgKHBheWxvYWQ/LnR5cGUgIT09ICdhcHBvaW50bWVudHM6dXBkYXRlJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gcGF5bG9hZC5wYXlsb2FkIHx8IHt9O1xyXG4gICAgICAgIHNldFJlYWx0aW1lU25hcHNob3Qoe1xyXG4gICAgICAgICAgcm93czogQXJyYXkuaXNBcnJheShkZXRhaWxzLnJvd3MpID8gZGV0YWlscy5yb3dzIDogW10sXHJcbiAgICAgICAgICBzdGF0czogZGV0YWlscy5zdGF0cyB8fCB7fSxcclxuICAgICAgICAgIHVwY29taW5nOiBBcnJheS5pc0FycmF5KGRldGFpbHMudXBjb21pbmcpID8gZGV0YWlscy51cGNvbWluZyA6IFtdLFxyXG4gICAgICAgICAgdXBkYXRlZEF0OiBkZXRhaWxzLnVwZGF0ZWRBdCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVhbHRpbWUgZXZlbnQgcGFyc2UgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZXZlbnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYXBwb2ludG1lbnRzJywgaGFuZGxlRXZlbnQpO1xuICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBzZXRDb25uZWN0aW9uU3RhdHVzKCdvZmZsaW5lJyk7XG4gICAgfTtcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBldmVudFNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhcHBvaW50bWVudHMnLCBoYW5kbGVFdmVudCk7XHJcbiAgICAgIGV2ZW50U291cmNlLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZWFsdGltZVNuYXBzaG90KSByZXR1cm47XHJcbiAgICBzZXREYXNoYm9hcmQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbmV4dFN0YXRzID0geyAuLi4ocHJldj8uc3RhdHMgfHwge30pLCAuLi4ocmVhbHRpbWVTbmFwc2hvdC5zdGF0cyB8fCB7fSkgfTtcclxuICAgICAgY29uc3QgbmV4dEFwcG9pbnRtZW50cyA9IHtcclxuICAgICAgICAuLi4ocHJldj8uYXBwb2ludG1lbnRzIHx8IHt9KSxcclxuICAgICAgICB1cGNvbWluZzogcmVhbHRpbWVTbmFwc2hvdC51cGNvbWluZyB8fCBwcmV2Py5hcHBvaW50bWVudHM/LnVwY29taW5nIHx8IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXByZXYpIHtcclxuICAgICAgICByZXR1cm4geyBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgIH0pO1xyXG4gIH0sIFtyZWFsdGltZVNuYXBzaG90XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxFcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkZXRhaWwgPSBldmVudD8ucmVhc29uIHx8IGV2ZW50Py5lcnJvcjtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9XHJcbiAgICAgICAgZGV0YWlsPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgZXZlbnQ/Lm1lc3NhZ2UgfHxcclxuICAgICAgICAodHlwZW9mIGRldGFpbCA9PT0gJ3N0cmluZycgPyBkZXRhaWwgOiAn0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAnKTtcclxuICAgICAgY29uc29sZS5lcnJvcignR2xvYmFsIFVJIGVycm9yOicsIGRldGFpbCB8fCBldmVudCk7XHJcbiAgICAgIHNldEZhdGFsRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+ICgpID0+IHtcclxuICAgICAgc2VydmljZVNhdmVUaW1lcnMuY3VycmVudC5mb3JFYWNoKCh0aW1lcikgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKSk7XHJcbiAgICAgIHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgc2V0QXV0aEVycm9yKCcnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRVc2VybmFtZSA9IHJlc29sdmVMb2dpbih1c2VybmFtZSk7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRVc2VybmFtZSkge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAg0LjQtyDRgdC/0LjRgdC60LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IG5vcm1hbGl6ZWRVc2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRBdXRoRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICfQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZXNzaW9uUGF5bG9hZCA9IGJ1aWxkU2Vzc2lvblBheWxvYWQoeyAuLi5kYXRhLCB1c2VybmFtZTogbm9ybWFsaXplZFVzZXJuYW1lIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFyYmVyLXNlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uUGF5bG9hZCkpO1xyXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25QYXlsb2FkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcign0KHQtdGA0LLQtdGAINC90LXQtNC+0YHRgtGD0L/QtdC9Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UgPSAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGJhcmJlcikgPT4gKGJhcmJlci5pZCA9PT0gaWQgPyB7IC4uLmJhcmJlciwgW2ZpZWxkXTogdmFsdWUgfSA6IGJhcmJlcikpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCA9IChzZXJ2aWNlKSA9PiAoe1xyXG4gICAgLi4uc2VydmljZSxcclxuICAgIHByaWNlczogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhzZXJ2aWNlLnByaWNlcyB8fCB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSldKVxyXG4gICAgKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGVyaXZlQmFyYmVyTG9naW4gPSAoYmFyYmVyRGF0YSA9IHt9KSA9PiByZXNvbHZlTG9naW4oYmFyYmVyRGF0YS5sb2dpbiB8fCBiYXJiZXJEYXRhLm5hbWUgfHwgJycpO1xyXG5cclxuICBjb25zdCBidWlsZEJhcmJlclBheWxvYWQgPSAoYmFyYmVyRGF0YSA9IHt9LCBmYWxsYmFja09yZGVyID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbmFtZTogYmFyYmVyRGF0YS5uYW1lIHx8ICcnLFxyXG4gICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgZGVzY3JpcHRpb246IGJhcmJlckRhdGEuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIHJhdGluZzogYmFyYmVyRGF0YS5yYXRpbmcgfHwgJycsXHJcbiAgICAgIGF2YXRhclVybDogYmFyYmVyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbG9yOiBiYXJiZXJEYXRhLmNvbG9yIHx8ICcnLFxyXG4gICAgICBsb2dpbjogZGVyaXZlQmFyYmVyTG9naW4oYmFyYmVyRGF0YSksXHJcbiAgICAgIHBhc3N3b3JkOiBiYXJiZXJEYXRhLnBhc3N3b3JkIHx8ICcnLFxyXG4gICAgICBwaG9uZTogYmFyYmVyRGF0YS5waG9uZSB8fCAnJyxcclxuICAgICAgdGVsZWdyYW1JZDogYmFyYmVyRGF0YS50ZWxlZ3JhbUlkIHx8ICcnLFxyXG4gICAgICBpc0FjdGl2ZTogYmFyYmVyRGF0YS5pc0FjdGl2ZSAhPT0gZmFsc2UsXHJcbiAgICAgIG9yZGVySW5kZXg6IE51bWJlcihiYXJiZXJEYXRhLm9yZGVySW5kZXggPz8gZmFsbGJhY2tPcmRlcikgfHwgMCxcclxuICAgIH07XHJcbiAgICBpZiAoYmFyYmVyRGF0YS5pZCkge1xyXG4gICAgICBwYXlsb2FkLmlkID0gYmFyYmVyRGF0YS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVCYXJiZXIgPSBhc3luYyAoYmFyYmVyKSA9PiB7XHJcbiAgICBpZiAoIWJhcmJlcj8uaWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUmVxdWVzdChgL0JhcmJlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoYmFyYmVyLmlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1aWxkQmFyYmVyUGF5bG9hZChiYXJiZXIpKSB9KTtcclxuICAgICAgY29uc3QgdXBkYXRlZEJhcmJlciA9IHJlc3BvbnNlIHx8IGJhcmJlcjtcclxuICAgICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSB1cGRhdGVkQmFyYmVyLmlkID8geyAuLi5pdGVtLCAuLi51cGRhdGVkQmFyYmVyIH0gOiBpdGVtKSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQmFyYmVyID0gYXN5bmMgKGJhcmJlcikgPT4ge1xyXG4gICAgaWYgKCFiYXJiZXI/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LA/JyxcclxuICAgICAgbWVzc2FnZTogYNCR0LDRgNCx0LXRgCDCqyR7YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J33CuyDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLmAsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQmFyYmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChiYXJiZXIuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRCYXJiZXIgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUgfHwgIXBheWxvYWQucGFzc3dvcmQpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoJ9CX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y8sINC70L7Qs9C40L0g0Lgg0L/QsNGA0L7Qu9GMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5ld0JhcmJlclBheWxvYWQgPSBidWlsZEJhcmJlclBheWxvYWQoeyAuLi5wYXlsb2FkLCBpZDogdW5kZWZpbmVkIH0sIGJhcmJlcnMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgeyBpZCwgLi4uYm9keSB9ID0gbmV3QmFyYmVyUGF5bG9hZDtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0JhcmJlcnMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVTZXJ2aWNlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHNlcnZpY2UpKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNjaGVkdWxlU2VydmljZUF1dG9zYXZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRpbWVycyA9IHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGltZXIgPSB0aW1lcnMuZ2V0KHNlcnZpY2UuaWQpO1xyXG4gICAgICBpZiAoZXhpc3RpbmdUaW1lcikgY2xlYXJUaW1lb3V0KGV4aXN0aW5nVGltZXIpO1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVNhdmVTZXJ2aWNlKHNlcnZpY2UpO1xyXG4gICAgICAgIHRpbWVycy5kZWxldGUoc2VydmljZS5pZCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHRpbWVycy5zZXQoc2VydmljZS5pZCwgdGltZXIpO1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTYXZlU2VydmljZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVTZXJ2aWNlID0gYXN5bmMgKHNlcnZpY2UpID0+IHtcclxuICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YM/JyxcclxuICAgICAgbWVzc2FnZTogYNCj0YHQu9GD0LPQsCDCqyR7c2VydmljZS5uYW1lIHx8ICfQkdC10Lcg0L3QsNC30LLQsNC90LjRjyd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsC5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRTZXJ2aWNlID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghcGF5bG9hZC5uYW1lKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvc2VydmljZXMvZnVsbCcsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHBheWxvYWQpKSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFNlcnZpY2VzKChwcmV2KSA9PiBwcmV2Lm1hcCgoc2VydmljZSkgPT4gKHNlcnZpY2UuaWQgPT09IGlkID8geyAuLi5zZXJ2aWNlLCBbZmllbGRdOiB2YWx1ZSB9IDogc2VydmljZSkpKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUoeyAuLi50YXJnZXQsIFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NlcnZpY2VzLCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZXJ2aWNlSWQsIGJhcmJlcklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRTZXJ2aWNlcygocHJldikgPT5cclxuICAgICAgICBwcmV2Lm1hcCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlcnZpY2UuaWQgIT09IHNlcnZpY2VJZCkgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcmljZXM6IHsgLi4uKHNlcnZpY2UucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gc2VydmljZUlkKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlKHtcclxuICAgICAgICAgIC4uLnRhcmdldCxcclxuICAgICAgICAgIHByaWNlczogeyAuLi4odGFyZ2V0LnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VydmljZXMsIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdFRvZ2dsZSA9IGFzeW5jIChlbmFibGVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXNCb3RFbmFibGVkOiBlbmFibGVkIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0L3QvtCy0LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCDQsdC+0YLQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdEFjdGlvbiA9IGFzeW5jIChhY3Rpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24gfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0YvQv9C+0LvQvdC40YLRjCDQtNC10LnRgdGC0LLQuNC1Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZVNldHRpbmdzID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghYm90U2V0dGluZ3M/LmlkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQm90U2V0dGluZ3MvJHtlbmNvZGVVUklDb21wb25lbnQoYm90U2V0dGluZ3MuaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LgnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlTWVzc2FnZSA9IGFzeW5jIChpZCwgZHJhZnQsIHBlcnNpc3QpID0+IHtcclxuICAgIGlmICghcGVyc2lzdCkge1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcygocHJldikgPT4gcHJldi5tYXAoKG1lc3NhZ2UpID0+IChtZXNzYWdlLmlkID09PSBpZCA/IHsgLi4uZHJhZnQgfSA6IG1lc3NhZ2UpKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9ib3QvbWVzc2FnZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlOiBkcmFmdC5jb2RlLCB0aXRsZTogZHJhZnQudGl0bGUsIHRleHQ6IGRyYWZ0LnRleHQgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXN0b3JlQmFja3VwID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XHJcbiAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQotC10LrRg9GJ0LjQtSDQtNCw0L3QvdGL0LUg0LHRg9C00YPRgiDQt9Cw0LzQtdC90LXQvdGLINGB0L7QtNC10YDQttC40LzRi9C8ICR7ZmlsZW5hbWV9LiDQn9GA0L7QtNC+0LvQttC40YLRjD9gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL3Jlc3RvcmUnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlbmFtZSB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVCYWNrdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xuICAgICAgdGl0bGU6ICfQodC+0LfQtNCw0YLRjCDRgNC10LfQtdGA0LLQvdGD0Y4g0LrQvtC/0LjRjj8nLFxuICAgICAgbWVzc2FnZTogJ9CR0YPQtNC10YIg0YHQvtC30LTQsNC9INGE0LDQudC7INGA0LXQt9C10YDQstC90L7QuSDQutC+0L/QuNC4INGC0LXQutGD0YnQtdC5INCx0LDQt9GLINC00LDQvdC90YvRhS4nLFxuICAgICAgY29uZmlybUxhYmVsOiAn0KHQvtC30LTQsNGC0YwnLFxuICAgICAgdG9uZTogJ3N1Y2Nlc3MnLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JhY2t1cHMvY3JlYXRlJywgeyBtZXRob2Q6ICdQT1NUJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7Qt9C00LDRgtGMINCx0Y3QutCw0L8nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQmFja3VwID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XG4gICAgaWYgKCFmaWxlbmFtZSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JyxcbiAgICAgIG1lc3NhZ2U6IGDQpNCw0LnQuyAke2ZpbGVuYW1lfSDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSDQsdC10LfQstC+0LfQstGA0LDRgtC90L4uYCxcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxuICAgIH0pO1xuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL2RlbGV0ZScsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGVuYW1lIH0pIH0pO1xuICAgICAgZmV0Y2hBbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQsdGN0LrQsNC/Jyk7XG4gICAgfVxuICB9O1xuXHJcbiAgY29uc3QgZmV0Y2hDbGllbnRIaXN0b3J5ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoY2xpZW50KSA9PiB7XHJcbiAgICAgIGlmICghY2xpZW50Py5OYW1lKSByZXR1cm4gbnVsbDtcclxuICAgICAgcmV0dXJuIGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQoY2xpZW50Lk5hbWUpfWApO1xyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG5cclxuICBjb25zdCBvcGVuUHJvZmlsZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IG51bGwsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogcGF5bG9hZCwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0L/RgNC+0YTQuNC70YwnIH0sIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZW5zdXJlT3B0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmIChvcHRpb25zQ2FjaGUpIHJldHVybiBvcHRpb25zQ2FjaGU7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzP2ZvcmNlPTEnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgfTtcclxuICAgIHNldE9wdGlvbnNDYWNoZShub3JtYWxpemVkKTtcclxuICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gIH0sIFthcGlSZXF1ZXN0LCBvcHRpb25zQ2FjaGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFwcG9pbnRtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoYXBwb2ludG1lbnQsIG9wdGlvbnNDb25maWcgPSB7fSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgZW5zdXJlT3B0aW9ucygpO1xyXG4gICAgICBzZXRBcHBvaW50bWVudE1vZGFsKHtcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGFwcG9pbnRtZW50LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgaXNOZXc6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93RGVsZXRlOiAhIW9wdGlvbnNDb25maWcuYWxsb3dEZWxldGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtlbnN1cmVPcHRpb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUFwcG9pbnRtZW50ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuICAgIGNvbnN0IGRlZmF1bHRTdGF0dXMgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShvcHRpb25zLnN0YXR1c2VzPy5bMF0gfHwgJ9CQ0LrRgtC40LLQvdCw0Y8nKTtcclxuICAgIGNvbnN0IGRlZmF1bHRCYXJiZXIgPSBwaWNrQmFyYmVyRm9yVXNlcihzZXNzaW9uLCBvcHRpb25zLmJhcmJlcnMgfHwgW10pO1xyXG4gICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7XHJcbiAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBDdXN0b21lck5hbWU6ICcnLFxyXG4gICAgICAgIFBob25lOiAnJyxcclxuICAgICAgICBCYXJiZXI6IGRlZmF1bHRCYXJiZXIsXHJcbiAgICAgICAgRGF0ZTogdG9kYXksXHJcbiAgICAgICAgVGltZTogJycsXHJcbiAgICAgICAgU3RhdHVzOiBkZWZhdWx0U3RhdHVzLFxyXG4gICAgICAgIFNlcnZpY2VzOiAnJyxcclxuICAgICAgICBVc2VySUQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBpc05ldzogdHJ1ZSxcclxuICAgICAgYWxsb3dEZWxldGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Vuc3VyZU9wdGlvbnMsIHNlc3Npb24/LmRpc3BsYXlOYW1lLCBzZXNzaW9uPy51c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQXBwb2ludG1lbnQgPSBhc3luYyAoeyBpZCwgcGF5bG9hZCwgaXNOZXcgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0FwcG9pbnRtZW50cycsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCgocHJldikgPT4gKHsgLi4ucHJldiwgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGlzTmV3OiBmYWxzZSwgYWxsb3dEZWxldGU6IGZhbHNlIH0pKTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUFwcG9pbnRtZW50ID0gYXN5bmMgKGFwcG9pbnRtZW50KSA9PiB7XHJcbiAgICBpZiAoIWFwcG9pbnRtZW50Py5pZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Cj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjD8nLFxyXG4gICAgICBtZXNzYWdlOiAn0JfQsNC/0LjRgdGMINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL0FwcG9pbnRtZW50cy8ke2VuY29kZVVSSUNvbXBvbmVudChhcHBvaW50bWVudC5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBzZXRBcHBvaW50bWVudE1vZGFsKHsgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIG9wdGlvbnM6IG51bGwsIGlzTmV3OiBmYWxzZSwgYWxsb3dEZWxldGU6IGZhbHNlIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U3lzdGVtQnVzeSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZT9mb3JjZT0xJyk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8oaW5mbyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQvtCy0LXRgNC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjRjycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXBwbHlVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0J7QsdC90L7QstC40YLRjCDRgdC40YHRgtC10LzRgz8nLFxyXG4gICAgICBtZXNzYWdlOiAnQ1JNINC4INCx0L7RgiDQsdGD0LTRg9GCINC+0LHQvdC+0LLQu9C10L3RiyDQtNC+INC/0L7RgdC70LXQtNC90LXQuSDQstC10YDRgdC40LguINCf0LXRgNC10LfQsNC/0YPRgdC6INC80L7QttC10YIg0LfQsNC90Y/RgtGMINC90LXRgdC60L7Qu9GM0LrQviDQvNC40L3Rg9GCLicsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Ce0LHQvdC+0LLQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8ocmVzdWx0LmluZm8gfHwgcmVzdWx0KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/RgNC40LzQtdC90LjRgtGMINC+0LHQvdC+0LLQu9C10L3QuNC1Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTeXN0ZW1CdXN5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICByZXR1cm4gPExvZ2luU2NyZWVuIG9uTG9naW49e2hhbmRsZUxvZ2lufSBlcnJvcj17YXV0aEVycm9yfSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByZWZlcnJlZFRhYmxlVGFyZ2V0ID0gYWN0aXZlVGFiID09PSAnYmFyYmVycycgPyAnQmFyYmVycycgOiBhY3RpdmVUYWIgPT09ICdzZXJ2aWNlcycgPyAnU2VydmljZXMnIDogcGVuZGluZ1RhYmxlVmlldztcclxuICBjb25zdCBsaXZlVXBkYXRlZEF0ID0gcmVhbHRpbWVTbmFwc2hvdD8udXBkYXRlZEF0IHx8IG51bGw7XHJcbiAgY29uc3QgbWFpbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ2ZsZXgtMSBzcGFjZS15LTQgcC00IG1kOnAtOCcsIGlzTW9iaWxlID8gJ3BiLTI0JyA6ICcnKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZ1N0YXRlIC8+O1xyXG4gICAgc3dpdGNoIChhY3RpdmVUYWIpIHtcclxuICAgICAgY2FzZSAnZGFzaGJvYXJkJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPERhc2hib2FyZFZpZXdcclxuICAgICAgICAgICAgZGF0YT17ZGFzaGJvYXJkfVxyXG4gICAgICAgICAgICBvbk9wZW5BcHBvaW50bWVudD17aGFuZGxlT3BlbkFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvcGVuUHJvZmlsZX1cclxuICAgICAgICAgICAgb25DcmVhdGVBcHBvaW50bWVudD17aGFuZGxlQ3JlYXRlQXBwb2ludG1lbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ3RhYmxlcyc6XHJcbiAgICAgIGNhc2UgJ2JhcmJlcnMnOlxyXG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUYWJsZXNXb3Jrc3BhY2VcclxuICAgICAgICAgICAgYXBpUmVxdWVzdD17YXBpUmVxdWVzdH1cclxuICAgICAgICAgICAgc2hhcmVkT3B0aW9ucz17b3B0aW9uc0NhY2hlfVxyXG4gICAgICAgICAgICBvbk9wdGlvbnNVcGRhdGU9e3NldE9wdGlvbnNDYWNoZX1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uT3BlbkFwcG9pbnRtZW50UmVjb3JkPXtoYW5kbGVPcGVuQXBwb2ludG1lbnR9XHJcbiAgICAgICAgICAgIGNsaWVudHM9e2Rhc2hib2FyZD8uY2xpZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgY3VycmVudFVzZXI9e3Nlc3Npb24gfHwgbnVsbH1cclxuICAgICAgICAgICAgbGl2ZUFwcG9pbnRtZW50cz17cmVhbHRpbWVTbmFwc2hvdD8ucm93cyB8fCBudWxsfVxyXG4gICAgICAgICAgICBsaXZlVXBkYXRlZEF0PXtyZWFsdGltZVNuYXBzaG90Py51cGRhdGVkQXQgfHwgbnVsbH1cclxuICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgc2VydmljZXM9e3NlcnZpY2VzfVxyXG4gICAgICAgICAgICBvbkJhcmJlckZpZWxkQ2hhbmdlPXtoYW5kbGVCYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgb25TYXZlQmFyYmVyPXtoYW5kbGVTYXZlQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkFkZEJhcmJlcj17aGFuZGxlQWRkQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZUJhcmJlcj17aGFuZGxlRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgICBvblNlcnZpY2VGaWVsZENoYW5nZT17aGFuZGxlU2VydmljZUZpZWxkQ2hhbmdlfVxuICAgICAgICAgICAgb25TZXJ2aWNlUHJpY2VDaGFuZ2U9e2hhbmRsZVNlcnZpY2VQcmljZUNoYW5nZX1cbiAgICAgICAgICAgIG9uRGVsZXRlU2VydmljZT17aGFuZGxlRGVsZXRlU2VydmljZX1cbiAgICAgICAgICAgIG9uQWRkU2VydmljZT17aGFuZGxlQWRkU2VydmljZX1cbiAgICAgICAgICAgIG9uQWN0aXZlVGFibGVDaGFuZ2U9e2hhbmRsZUFjdGl2ZVRhYmxlU3luY31cbiAgICAgICAgICAgIHByZWZlcnJlZFRhYmxlPXtwcmVmZXJyZWRUYWJsZVRhcmdldH1cbiAgICAgICAgICAgIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZD17aGFuZGxlUHJlZmVycmVkVGFibGVDb25zdW1lZH1cbiAgICAgICAgICAgIG9uUmVxdWVzdENvbmZpcm09e3JlcXVlc3RDb25maXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ2JvdCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xuICAgICAgICAgICAgc3RhdHVzPXtib3RTdGF0dXN9XG4gICAgICAgICAgICBzZXR0aW5ncz17Ym90U2V0dGluZ3N9XG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XG4gICAgICAgICAgICBtZXNzYWdlcz17Ym90TWVzc2FnZXN9XG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZWQ9e2hhbmRsZUJvdFRvZ2dsZX1cclxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdGFydCcpfVxyXG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxyXG4gICAgICAgICAgICBvblJlc3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbigncmVzdGFydCcpfVxyXG4gICAgICAgICAgICBvblNhdmVTZXR0aW5ncz17aGFuZGxlU2F2ZVNldHRpbmdzfVxyXG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxyXG4gICAgICAgICAgICBvblJlc3RvcmVCYWNrdXA9e2hhbmRsZVJlc3RvcmVCYWNrdXB9XG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxuICAgICAgICAgICAgb25EZWxldGVCYWNrdXA9e2hhbmRsZURlbGV0ZUJhY2t1cH1cbiAgICAgICAgICAgIGxpY2Vuc2VTdGF0dXM9e2xpY2Vuc2VTdGF0dXN9XG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxuICAgICAgICAgICAgb25SZWZyZXNoVXBkYXRlPXtoYW5kbGVSZWZyZXNoVXBkYXRlfVxuICAgICAgICAgICAgb25BcHBseVVwZGF0ZT17aGFuZGxlQXBwbHlVcGRhdGV9XG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxuICAgICAgICAgICAgdmlld01vZGU9XCJib3RcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdzeXN0ZW0nOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcbiAgICAgICAgICAgIHN0YXR1cz17Ym90U3RhdHVzfVxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxuICAgICAgICAgICAgbWVzc2FnZXM9e2JvdE1lc3NhZ2VzfVxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XG4gICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0YXJ0Jyl9XG4gICAgICAgICAgICBvblN0b3A9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RvcCcpfVxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cbiAgICAgICAgICAgIG9uU2F2ZVNldHRpbmdzPXtoYW5kbGVTYXZlU2V0dGluZ3N9XG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cbiAgICAgICAgICAgIHZpZXdNb2RlPVwic3lzdGVtXCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm90Q29udHJvbFZpZXdcclxuICAgICAgICAgICAgc3RhdHVzPXtib3RTdGF0dXN9XHJcbiAgICAgICAgICAgIHNldHRpbmdzPXtib3RTZXR0aW5nc31cclxuICAgICAgICAgICAgYmFja3Vwcz17ZGFzaGJvYXJkPy5iYWNrdXBzIHx8IFtdfVxyXG4gICAgICAgICAgICBtZXNzYWdlcz17Ym90TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlZD17aGFuZGxlQm90VG9nZ2xlfVxyXG4gICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU3RvcD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdzdG9wJyl9XHJcbiAgICAgICAgICAgIG9uUmVzdGFydD17KCkgPT4gaGFuZGxlQm90QWN0aW9uKCdyZXN0YXJ0Jyl9XHJcbiAgICAgICAgICAgIG9uU2F2ZVNldHRpbmdzPXtoYW5kbGVTYXZlU2V0dGluZ3N9XG4gICAgICAgICAgICBvblNhdmVNZXNzYWdlPXsoaWQsIGRyYWZ0LCBwZXJzaXN0KSA9PiBoYW5kbGVTYXZlTWVzc2FnZShpZCwgZHJhZnQsIHBlcnNpc3QpfVxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxuICAgICAgICAgICAgb25DcmVhdGVCYWNrdXA9e2hhbmRsZUNyZWF0ZUJhY2t1cH1cbiAgICAgICAgICAgIG9uRGVsZXRlQmFja3VwPXtoYW5kbGVEZWxldGVCYWNrdXB9XG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxuICAgICAgICAgICAgdXBkYXRlSW5mbz17dXBkYXRlSW5mb31cbiAgICAgICAgICAgIG9uUmVmcmVzaFVwZGF0ZT17aGFuZGxlUmVmcmVzaFVwZGF0ZX1cbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxuICAgICAgICAgICAgc3lzdGVtQnVzeT17c3lzdGVtQnVzeX1cbiAgICAgICAgICAgIHZpZXdNb2RlPVwiYm90XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZmF0YWxFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgYmctc2xhdGUtOTUwIHAtNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC81MCBiZy1zbGF0ZS05MDAvODAgcC02IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwXCI+0JrRgNC40YLQuNGH0LXRgdC60LDRjyDQvtGI0LjQsdC60LAg0LjQvdGC0LXRgNGE0LXQudGB0LA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgINCh0L7QvtCx0YnQtdC90LjQtSDQvdC40LbQtSDQvNC+0LbQvdC+INC/0LXRgNC10YHQu9Cw0YLRjCDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60YMuINCf0L7RgdC70LUg0LjRgdC/0YDQsNCy0LvQtdC90LjRjyDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLQtSDRgdGC0YDQsNC90LjRhtGDLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvODAgcC00IHRleHQtbGVmdCB0ZXh0LXhzIHRleHQtcm9zZS0yMDBcIj5cclxuICAgICAgICAgICAge2ZhdGFsRXJyb3J9XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICA8TW9iaWxlVGFic1xuICAgICAgICAgIGFjdGl2ZVRhYj17YWN0aXZlVGFifVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgICAgICBvbkxvZ291dD17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e2xpdmVVcGRhdGVkQXR9XG4gICAgICAgICAgbGl2ZVN0YXR1cz17Y29ubmVjdGlvblN0YXR1c31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgICAgYWN0aXZlVGFiPXthY3RpdmVUYWJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldEFjdGl2ZVRhYn1cbiAgICAgICAgICBvbkxvZ291dD17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e2xpdmVVcGRhdGVkQXR9XG4gICAgICAgICAgbGl2ZVN0YXR1cz17Y29ubmVjdGlvblN0YXR1c31cbiAgICAgICAgICBhY3RpdmVEYXRhVGFibGU9e2FjdGl2ZURhdGFUYWJsZX1cbiAgICAgICAgICBvblNlbGVjdFRhYmxlPXtoYW5kbGVTaWRlYmFyVGFibGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17bWFpbkNsYXNzTmFtZX0+XHJcbiAgICAgICAgICB7Z2xvYmFsRXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e2dsb2JhbEVycm9yfSAvPn1cclxuICAgICAgICAgIHtyZW5kZXJBY3RpdmUoKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZmlsZU1vZGFsIHN0YXRlPXtwcm9maWxlTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KX0gLz5cclxuICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICBvcGVuPXthcHBvaW50bWVudE1vZGFsLm9wZW59XHJcbiAgICAgICAgYXBwb2ludG1lbnQ9e2FwcG9pbnRtZW50TW9kYWwuZGF0YX1cclxuICAgICAgICBvcHRpb25zPXthcHBvaW50bWVudE1vZGFsLm9wdGlvbnMgfHwgb3B0aW9uc0NhY2hlIHx8IHt9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSl9XHJcbiAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlQXBwb2ludG1lbnR9XHJcbiAgICAgICAgaXNOZXc9e2FwcG9pbnRtZW50TW9kYWwuaXNOZXd9XHJcbiAgICAgICAgY2xpZW50cz17ZGFzaGJvYXJkPy5jbGllbnRzIHx8IFtdfVxyXG4gICAgICAgIGNhbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZX1cclxuICAgICAgICBvbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZSA/IGhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IDogbnVsbH1cclxuICAgICAgLz5cclxuICAgICAgPENvbmZpcm1EaWFsb2cgey4uLmNvbmZpcm1EaWFsb2d9IG9uUmVzdWx0PXtoYW5kbGVDb25maXJtUmVzdWx0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmxldCByZWFjdEFwcFJvb3QgPSBudWxsO1xyXG5jb25zdCByZW5kZXJBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXJvb3RFbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDQvdCw0LnQtNC10L0g0LrQvtC90YLQtdC50L3QtdGAICNyb290Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlYWN0QXBwUm9vdCkge1xyXG4gICAgICByZWFjdEFwcFJvb3QgPVxyXG4gICAgICAgIHR5cGVvZiBjcmVhdGVSb290ID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpXHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICByZW5kZXI6IChub2RlKSA9PiBSZWFjdERPTS5yZW5kZXIobm9kZSwgcm9vdEVsZW1lbnQpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVhY3RBcHBSb290LnJlbmRlcig8QXBwIC8+KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRmF0YWwgcmVuZGVyIGVycm9yOicsIGVycm9yKTtcclxuICAgIGlmIChyb290RWxlbWVudCkge1xyXG4gICAgICByb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIlxyXG4gICAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6MTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAyMDYxNztcclxuICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHBhZGRpbmc6MjRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDo0ODBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQ4LDExMywxMTMsMC40KTtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsMC44NSk7Ym9yZGVyLXJhZGl1czoxNnB4O3BhZGRpbmc6MjRweDtcIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6I2ZlY2FjYTttYXJnaW4tYm90dG9tOjEycHg7XCI+XHJcbiAgICAgICAgICAgICAg0J7RiNC40LHQutCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC40L3RgtC10YDRhNC10LnRgdCwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweDtjb2xvcjojY2JkNWY1O3doaXRlLXNwYWNlOnByZS13cmFwO1wiPlxyXG4gICAgICAgICAgICAgICR7ZXJyb3I/Lm1lc3NhZ2UgfHwgJ9Ch0LzQvtGC0YDQuNGC0LUg0LrQvtC90YHQvtC70Ywg0LHRgNCw0YPQt9C10YDQsCAoRjEyKSd9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIlxyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICM0YjU1NjM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OTk5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgXCIgb25jbGljaz1cIndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVwiPlxyXG4gICAgICAgICAgICDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyQXBwKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFD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