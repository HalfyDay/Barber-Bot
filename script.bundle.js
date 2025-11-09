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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
      direction: 'desc'
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
    prices: {}
  };
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
var formatDateTime = function formatDateTime(date, time) {
  var datePart = formatDate(date);
  var timePart = formatTime(time);
  if (datePart === '-' && timePart === '-') return '-';
  if (datePart === '-') return timePart;
  if (timePart === '-') return datePart;
  return "".concat(datePart, " | ").concat(timePart);
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
  var status = normalizeStatusValue(appointment.Status);
  if (!isActiveAppointmentStatus(status)) return false;
  var startDate = getAppointmentStartDate(appointment.Date, appointment.Time, appointment.startDateTime);
  if (!startDate) return false;
  return startDate.getTime() >= nowTs;
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
var SectionCard = function SectionCard(_ref8) {
  var title = _ref8.title,
    actions = _ref8.actions,
    children = _ref8.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold text-white"
  }, title), actions), children);
};
var LiveBadge = function LiveBadge(_ref9) {
  var timestamp = _ref9.timestamp,
    _ref9$label = _ref9.label,
    label = _ref9$label === void 0 ? 'LIVE' : _ref9$label;
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
var IconTrash = function IconTrash(_ref0) {
  var _ref0$className = _ref0.className,
    className = _ref0$className === void 0 ? 'h-4 w-4' : _ref0$className;
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
var Modal = function Modal(_ref1) {
  var title = _ref1.title,
    isOpen = _ref1.isOpen,
    onClose = _ref1.onClose,
    children = _ref1.children,
    footer = _ref1.footer,
    _ref1$maxWidthClass = _ref1.maxWidthClass,
    maxWidthClass = _ref1$maxWidthClass === void 0 ? 'max-w-3xl' : _ref1$maxWidthClass;
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
var ConfirmDialog = function ConfirmDialog(_ref10) {
  var open = _ref10.open,
    title = _ref10.title,
    message = _ref10.message,
    _ref10$confirmLabel = _ref10.confirmLabel,
    confirmLabel = _ref10$confirmLabel === void 0 ? 'Подтвердить' : _ref10$confirmLabel,
    _ref10$cancelLabel = _ref10.cancelLabel,
    cancelLabel = _ref10$cancelLabel === void 0 ? 'Отмена' : _ref10$cancelLabel,
    _ref10$tone = _ref10.tone,
    tone = _ref10$tone === void 0 ? 'neutral' : _ref10$tone,
    onResult = _ref10.onResult;
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
    }, cancelLabel), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onResult(true);
      },
      className: "rounded-lg px-4 py-2 text-sm font-semibold text-white ".concat(confirmToneClass)
    }, confirmLabel))
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-200"
  }, message || 'Вы уверены, что хотите продолжить?'));
};
var StatCard = function StatCard(_ref11) {
  var label = _ref11.label,
    value = _ref11.value,
    _ref11$accent = _ref11.accent,
    accent = _ref11$accent === void 0 ? 'text-indigo-300' : _ref11$accent;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)
  }, value));
};
var Sidebar = function Sidebar(_ref12) {
  var session = _ref12.session,
    activeTab = _ref12.activeTab,
    onChange = _ref12.onChange,
    onLogout = _ref12.onLogout;
  var username = (session === null || session === void 0 ? void 0 : session.displayName) || (session === null || session === void 0 ? void 0 : session.username) || '—';
  return /*#__PURE__*/React.createElement("aside", {
    className: "hidden w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 p-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 border-b border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-wide text-slate-500"
  }, "\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-semibold text-white"
  }, username), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "mt-2 w-full rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-indigo-500 hover:text-white"
  }, "\u0412\u044B\u0439\u0442\u0438")), /*#__PURE__*/React.createElement("nav", {
    className: "mt-6 flex-1 space-y-2 overflow-y-auto"
  }, VIEW_TABS.map(function (tab) {
    var isActive = activeTab === tab.id;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: function onClick() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(tab.id);
      },
      className: classNames('w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition', isActive ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-900/40' : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800/60 hover:text-white')
    }, tab.label);
  })));
};
var MobileTabs = function MobileTabs(_ref13) {
  var session = _ref13.session,
    activeTab = _ref13.activeTab,
    onChange = _ref13.onChange,
    onLogout = _ref13.onLogout;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    menuOpen = _useState6[0],
    setMenuOpen = _useState6[1];
  var username = (session === null || session === void 0 ? void 0 : session.displayName) || (session === null || session === void 0 ? void 0 : session.username) || '—';
  var handleSelect = function handleSelect(tabId) {
    onChange === null || onChange === void 0 || onChange(tabId);
    setMenuOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-4 py-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMenuOpen(function (prev) {
        return !prev;
      });
    },
    className: "rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-indigo-500 hover:text-white",
    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "h-5 w-5"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] uppercase tracking-wide text-slate-400"
  }, "\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A"), /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-white"
  }, username)), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-rose-200 hover:border-rose-400 hover:text-white"
  }, "\u0412\u044B\u0439\u0442\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "flex overflow-x-auto border-t border-slate-800"
  }, VIEW_TABS.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: function onClick() {
        return handleSelect(tab.id);
      },
      className: classNames('flex-1 whitespace-nowrap px-3 py-2 text-xs font-semibold', activeTab === tab.id ? 'text-indigo-300' : 'text-slate-400')
    }, tab.label);
  })), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 border-t border-slate-800 bg-slate-900/90 px-4 py-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-300"
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, VIEW_TABS.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: function onClick() {
        return handleSelect(tab.id);
      },
      className: classNames('rounded-lg px-3 py-2 text-left text-sm font-semibold', activeTab === tab.id ? 'bg-indigo-600/80 text-white' : 'bg-slate-800/70 text-slate-200')
    }, tab.label);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "w-full rounded-lg border border-rose-500 px-3 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/10"
  }, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430")));
};
var DashboardView = function DashboardView(_ref14) {
  var _data$appointments, _stats$totalUsers, _stats$activeAppointm, _stats$confirmedYear, _stats$todaysAppointm;
  var data = _ref14.data,
    onOpenAppointment = _ref14.onOpenAppointment,
    onOpenProfile = _ref14.onOpenProfile,
    onCreateAppointment = _ref14.onCreateAppointment,
    _ref14$liveMeta = _ref14.liveMeta,
    liveMeta = _ref14$liveMeta === void 0 ? null : _ref14$liveMeta;
  if (!data) return /*#__PURE__*/React.createElement(LoadingState, null);
  var stats = data.stats || {};
  var upcomingRaw = ((_data$appointments = data.appointments) === null || _data$appointments === void 0 ? void 0 : _data$appointments.upcoming) || [];
  var upcomingList = useMemo(function () {
    var nowTs = Date.now();
    return upcomingRaw.map(function (appt) {
      return _objectSpread(_objectSpread({}, appt), {}, {
        Status: normalizeStatusValue(appt.Status)
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
    return Array.from(groups.entries()).map(function (_ref15) {
      var _ref16 = _slicedToArray(_ref15, 2),
        key = _ref16[0],
        items = _ref16[1];
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
  var upcomingActions = liveMeta !== null && liveMeta !== void 0 && liveMeta.updatedAt || onCreateAppointment ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, (liveMeta === null || liveMeta === void 0 ? void 0 : liveMeta.updatedAt) && /*#__PURE__*/React.createElement(LiveBadge, {
    timestamp: liveMeta.updatedAt
  }), onCreateAppointment && /*#__PURE__*/React.createElement("button", {
    onClick: onCreateAppointment,
    className: "rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500"
  }, "+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")) : null;
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
      className: "space-y-3"
    }, group.items.map(function (appt) {
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
        className: 'group upcoming-card relative w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-5'
      };
      var _parseTimeRangeParts = parseTimeRangeParts(appt.Time),
        start = _parseTimeRangeParts.start,
        end = _parseTimeRangeParts.end;
      var statusLabel = normalizeStatusValue(appt.Status);
      var servicesList = parseMultiValue(appt.Services);
      var phoneLabel = appt.Phone ? formatPhoneInput(appt.Phone) : '';
      var phoneHref = phoneLabel ? phoneLabel.replace(/[^\d+]/g, '') : '';
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
        className: "mt-4 grid gap-3 text-[13px] text-slate-300 upcoming-card-grid sm:text-sm"
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
      }, "\u0411\u0435\u0437 \u0438\u043C\u0435\u043D\u0438"), servicesList.length ? /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-2"
      }, servicesList.map(function (service, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: "".concat(service, "-").concat(index),
          className: "rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-1 text-[11px] text-slate-200 sm:text-xs"
        }, service);
      })) : /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 sm:text-sm"
      }, "\u041D\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433")), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 min-w-0"
      }, phoneLabel && phoneHref && /*#__PURE__*/React.createElement("a", {
        href: "tel:".concat(phoneHref),
        onClick: function onClick(event) {
          return event.stopPropagation();
        },
        className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600/60 px-3 py-1 text-xs text-slate-200 hover:border-indigo-500 hover:text-white sm:w-auto sm:justify-start sm:text-sm"
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        className: "h-4 w-4"
      }, /*#__PURE__*/React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.26a1.5 1.5 0 00-1.093-1.44l-4.443-1.27a1.5 1.5 0 00-1.726.752l-.79 1.58a1.5 1.5 0 01-2.278.536A15.052 15.052 0 018.352 14.4a1.5 1.5 0 01.536-2.278l1.58-.79a1.5 1.5 0 00.752-1.726l-1.27-4.443A1.5 1.5 0 009.51 4.07H8.25A2.25 2.25 0 006 6.32z"
      })), phoneLabel), appt.UserID && /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs"
      }, "ID \u043A\u043B\u0438\u0435\u043D\u0442\u0430:", ' ', /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-slate-200"
      }, appt.UserID)))));
    })));
  }))));
};
var BarberAvatarPicker = function BarberAvatarPicker(_ref17) {
  var value = _ref17.value,
    _onChange = _ref17.onChange;
  var _useState7 = useState(function () {
      return avatarOptionsCache || [];
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    avatarOptions = _useState8[0],
    setAvatarOptions = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    showGallery = _useState10[0],
    setShowGallery = _useState10[1];
  var normalizedValue = normalizeImagePath(value);
  useEffect(function () {
    if (!value || typeof _onChange !== 'function') return;
    var normalized = normalizeImagePath(value);
    if (normalized && normalized !== value) {
      _onChange(normalized);
    }
  }, [value, _onChange]);
  var availableOptions = useMemo(function () {
    if (!normalizedValue || avatarOptions.includes(normalizedValue)) return avatarOptions;
    return [normalizedValue].concat(_toConsumableArray(avatarOptions));
  }, [avatarOptions, normalizedValue]);
  useEffect(function () {
    var isMounted = true;
    var load = /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var assets, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              setLoading(true);
              _context2.p = 1;
              _context2.n = 2;
              return fetchAvatarOptions();
            case 2:
              assets = _context2.v;
              if (isMounted) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
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
        return _ref18.apply(this, arguments);
      };
    }();
    load();
    return function () {
      isMounted = false;
    };
  }, []);
  var previewSrc = resolveAssetUrl(normalizedValue || avatarOptions[0] || '');
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 sm:flex-row sm:items-center"
  }, previewSrc ? /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: "avatar",
    className: "h-16 w-16 rounded-full border border-slate-700 object-cover"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-slate-700 text-[10px] uppercase text-slate-500"
  }, "\u043D\u0435\u0442 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 \u201CImage\u201D"), /*#__PURE__*/React.createElement("select", {
    value: normalizedValue || '',
    onChange: function onChange(event) {
      return _onChange(normalizeImagePath(event.target.value));
    },
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0411\u0435\u0437 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"), availableOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option,
      value: option
    }, option.replace('/Image/', ''));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setShowGallery(function (prev) {
        return !prev;
      });
    },
    className: "text-left text-sm text-indigo-300 hover:text-indigo-100 disabled:text-slate-500",
    disabled: loading
  }, loading ? 'Загружаем список' : avatarOptions.length ? showGallery ? 'Скрыть галерею' : 'Показать галерею' : 'Нет файлов в папке Image'))), showGallery && avatarOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 sm:grid-cols-4"
  }, avatarOptions.map(function (preset) {
    var isSelected = preset === normalizedValue;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: preset,
      onClick: function onClick() {
        return _onChange(preset);
      },
      className: "rounded-lg border p-1 transition hover:border-indigo-400 hover:bg-slate-800 ".concat(isSelected ? 'border-indigo-500 bg-indigo-500/20' : 'border-slate-700 bg-slate-900')
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveAssetUrl(preset),
      alt: "avatar preset",
      className: "h-16 w-full rounded-md object-cover"
    }));
  })), !avatarOptions.length && !loading && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u043F\u0430\u043F\u043A\u0443 /Image, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440."));
};
var RatingSlider = function RatingSlider(_ref19) {
  var value = _ref19.value,
    onChange = _ref19.onChange,
    _ref19$dense = _ref19.dense,
    dense = _ref19$dense === void 0 ? false : _ref19$dense;
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
var BarbersView = function BarbersView(_ref20) {
  var _workingBarber$name, _workingBarber$passwo;
  var _ref20$barbers = _ref20.barbers,
    barbers = _ref20$barbers === void 0 ? [] : _ref20$barbers,
    onFieldChange = _ref20.onFieldChange,
    onSave = _ref20.onSave,
    onAdd = _ref20.onAdd,
    onDelete = _ref20.onDelete;
  var _useState11 = useState({
      open: false,
      mode: 'edit',
      targetId: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    editorState = _useState12[0],
    setEditorState = _useState12[1];
  var _useState13 = useState(buildNewBarberState),
    _useState14 = _slicedToArray(_useState13, 2),
    draftBarber = _useState14[0],
    setDraftBarber = _useState14[1];
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
    }, barber.isActive !== false ? 'Активен' : 'Скрыт') : null;
  };
  var canSubmit = isCreateMode ? Boolean((workingBarber === null || workingBarber === void 0 || (_workingBarber$name = workingBarber.name) === null || _workingBarber$name === void 0 ? void 0 : _workingBarber$name.trim()) && (workingBarber === null || workingBarber === void 0 || (_workingBarber$passwo = workingBarber.password) === null || _workingBarber$passwo === void 0 ? void 0 : _workingBarber$passwo.trim())) : Boolean(workingBarber);
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
      className: "min-w-0 flex-1 space-y-2"
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
    maxWidthClass: "max-w-3xl",
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
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
  }, /*#__PURE__*/React.createElement("input", {
    value: workingBarber.name || '',
    onChange: function onChange(event) {
      return handleFieldChange('name', event.target.value);
    },
    placeholder: "\u0418\u043C\u044F",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement(RatingSlider, {
    dense: true,
    value: workingBarber.rating,
    onChange: function onChange(event) {
      return handleFieldChange('rating', event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: workingBarber.password || '',
    onChange: function onChange(event) {
      return handleFieldChange('password', event.target.value);
    },
    placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center justify-between gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
  }, "\u0426\u0432\u0435\u0442", /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: /^#/.test(workingBarber.color || '') ? workingBarber.color : '#6d28d9',
    onChange: function onChange(event) {
      return handleFieldChange('color', event.target.value);
    },
    className: "h-10 w-16 cursor-pointer rounded border border-slate-500 bg-transparent"
  }))), /*#__PURE__*/React.createElement("textarea", {
    value: workingBarber.description || '',
    onChange: function onChange(event) {
      return handleFieldChange('description', event.target.value);
    },
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    rows: 4,
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: workingBarber.phone || '',
    onChange: function onChange(event) {
      return handleFieldChange('phone', event.target.value);
    },
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("input", {
    value: workingBarber.telegramId || '',
    onChange: function onChange(event) {
      return handleFieldChange('telegramId', event.target.value);
    },
    placeholder: "Telegram ID",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement(BarberAvatarPicker, {
    value: workingBarber.avatarUrl,
    onChange: function onChange(value) {
      return handleFieldChange('avatarUrl', value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "inline-flex items-center gap-2 text-sm text-slate-300"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: workingBarber.isActive !== false,
    onChange: function onChange(event) {
      return handleFieldChange('isActive', event.target.checked);
    }
  }), "\u0410\u043A\u0442\u0438\u0432\u0435\u043D")) : /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u0440\u0431\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435.")));
};
var ServicesView = function ServicesView(_ref21) {
  var _workingService$name2, _workingService$durat;
  var _ref21$services = _ref21.services,
    services = _ref21$services === void 0 ? [] : _ref21$services,
    _ref21$barbers = _ref21.barbers,
    barbers = _ref21$barbers === void 0 ? [] : _ref21$barbers,
    onFieldChange = _ref21.onFieldChange,
    onPriceChange = _ref21.onPriceChange,
    onDelete = _ref21.onDelete,
    onAdd = _ref21.onAdd;
  var _useState15 = useState({
      open: false,
      mode: 'edit',
      targetId: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    editorState = _useState16[0],
    setEditorState = _useState16[1];
  var _useState17 = useState(buildNewServiceState),
    _useState18 = _slicedToArray(_useState17, 2),
    draftService = _useState18[0],
    setDraftService = _useState18[1];
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
var MultiSelectCell = function MultiSelectCell(_ref22) {
  var value = _ref22.value,
    _ref22$options = _ref22.options,
    options = _ref22$options === void 0 ? [] : _ref22$options,
    onCommit = _ref22.onCommit;
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    open = _useState20[0],
    setOpen = _useState20[1];
  var _useState21 = useState(parseMultiValue(value)),
    _useState22 = _slicedToArray(_useState21, 2),
    draft = _useState22[0],
    setDraft = _useState22[1];
  var anchorRef = useRef(null);
  var _useState23 = useState({
      top: 0,
      left: 0
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    position = _useState24[0],
    setPosition = _useState24[1];
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
  }, "\u2715")), draft.length > 0 && /*#__PURE__*/React.createElement("div", {
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
    }, "\xD7"));
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
var TimeRangePicker = function TimeRangePicker(_ref23) {
  var value = _ref23.value,
    onChange = _ref23.onChange,
    _ref23$title = _ref23.title,
    title = _ref23$title === void 0 ? 'Выбор времени' : _ref23$title,
    _ref23$placeholder = _ref23.placeholder,
    placeholder = _ref23$placeholder === void 0 ? 'Нажмите, чтобы выбрать' : _ref23$placeholder,
    _ref23$buttonClassNam = _ref23.buttonClassName,
    buttonClassName = _ref23$buttonClassNam === void 0 ? 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white whitespace-nowrap' : _ref23$buttonClassNam;
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    open = _useState26[0],
    setOpen = _useState26[1];
  var _useState27 = useState(function () {
      return parseTimeRangeValue(value);
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    _useState28$ = _useState28[0],
    start = _useState28$.start,
    end = _useState28$.end,
    setDraft = _useState28[1];
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
    onChange === null || onChange === void 0 || onChange('');
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
var EditableCell = function EditableCell(_ref24) {
  var record = _ref24.record,
    column = _ref24.column,
    options = _ref24.options,
    onUpdate = _ref24.onUpdate,
    onOpenProfile = _ref24.onOpenProfile,
    tableId = _ref24.tableId;
  var recordId = (record === null || record === void 0 ? void 0 : record.id) || (record === null || record === void 0 ? void 0 : record.Id) || (record === null || record === void 0 ? void 0 : record.ID) || (record === null || record === void 0 ? void 0 : record.recordId);
  var value = record[column.key];
  var _useState29 = useState(value !== null && value !== void 0 ? value : ''),
    _useState30 = _slicedToArray(_useState29, 2),
    draft = _useState30[0],
    setDraft = _useState30[1];
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
var ColumnMenu = function ColumnMenu(_ref25) {
  var columns = _ref25.columns,
    _ref25$hiddenColumns = _ref25.hiddenColumns,
    hiddenColumns = _ref25$hiddenColumns === void 0 ? [] : _ref25$hiddenColumns,
    onToggle = _ref25.onToggle;
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open = _useState32[0],
    setOpen = _useState32[1];
  var ref = useRef(null);
  useOutsideClick(ref, open ? function () {
    return setOpen(false);
  } : null);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (prev) {
        return !prev;
      });
    },
    className: "rounded-lg border border-slate-600 px-3 py-2 text-sm text-white"
  }, "\u041F\u043E\u043B\u044F"), open && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl"
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
var MultiSelectCheckboxes = function MultiSelectCheckboxes(_ref26) {
  var label = _ref26.label,
    _ref26$options = _ref26.options,
    options = _ref26$options === void 0 ? [] : _ref26$options,
    _ref26$value = _ref26.value,
    value = _ref26$value === void 0 ? [] : _ref26$value,
    onChange = _ref26.onChange,
    _ref26$placeholder = _ref26.placeholder,
    placeholder = _ref26$placeholder === void 0 ? 'Нет данных' : _ref26$placeholder;
  var _useState33 = useState(''),
    _useState34 = _slicedToArray(_useState33, 2),
    query = _useState34[0],
    setQuery = _useState34[1];
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
      className: "text-xs text-indigo-300"
    }, "\u2713"));
  })))));
};
var ClientLookupInput = function ClientLookupInput(_ref27) {
  var _ref27$label = _ref27.label,
    label = _ref27$label === void 0 ? 'Клиент' : _ref27$label,
    _ref27$value = _ref27.value,
    value = _ref27$value === void 0 ? '' : _ref27$value,
    _onChange2 = _ref27.onChange,
    _ref27$clients = _ref27.clients,
    clients = _ref27$clients === void 0 ? [] : _ref27$clients,
    onSelectClient = _ref27.onSelectClient,
    _ref27$placeholder = _ref27.placeholder,
    placeholder = _ref27$placeholder === void 0 ? 'Начните вводить имя или телефон' : _ref27$placeholder;
  var _useState35 = useState(value || ''),
    _useState36 = _slicedToArray(_useState35, 2),
    query = _useState36[0],
    setQuery = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open = _useState38[0],
    setOpen = _useState38[1];
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
    _onChange2 === null || _onChange2 === void 0 || _onChange2(nextValue);
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
      _onChange2 === null || _onChange2 === void 0 || _onChange2(event.target.value);
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
var StatusMenu = function StatusMenu(_ref28) {
  var _ref28$statuses = _ref28.statuses,
    statuses = _ref28$statuses === void 0 ? [] : _ref28$statuses,
    _ref28$hiddenStatuses = _ref28.hiddenStatuses,
    hiddenStatuses = _ref28$hiddenStatuses === void 0 ? [] : _ref28$hiddenStatuses,
    onToggle = _ref28.onToggle,
    onReset = _ref28.onReset;
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    open = _useState40[0],
    setOpen = _useState40[1];
  var ref = useRef(null);
  useOutsideClick(ref, open ? function () {
    return setOpen(false);
  } : null);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (prev) {
        return !prev;
      });
    },
    className: "rounded-lg border border-slate-600 px-3 py-2 text-sm text-white"
  }, "\u0421\u0442\u0430\u0442\u0443\u0441\u044B"), open && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "absolute right-0 z-30 mt-2 w-56 space-y-2 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl"
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
var TableToolbar = function TableToolbar(_ref29) {
  var tableId = _ref29.tableId,
    searchTerm = _ref29.searchTerm,
    setSearchTerm = _ref29.setSearchTerm,
    supportsBarberFilter = _ref29.supportsBarberFilter,
    selectedBarber = _ref29.selectedBarber,
    setSelectedBarber = _ref29.setSelectedBarber,
    barbers = _ref29.barbers,
    supportsStatusFilter = _ref29.supportsStatusFilter,
    statuses = _ref29.statuses,
    hiddenStatuses = _ref29.hiddenStatuses,
    toggleStatus = _ref29.toggleStatus,
    resetStatuses = _ref29.resetStatuses,
    columns = _ref29.columns,
    hiddenColumns = _ref29.hiddenColumns,
    toggleColumn = _ref29.toggleColumn,
    canCreate = _ref29.canCreate,
    onOpenCreate = _ref29.onOpenCreate,
    onRefresh = _ref29.onRefresh,
    showPastAppointments = _ref29.showPastAppointments,
    setShowPastAppointments = _ref29.setShowPastAppointments,
    _ref29$supportsGroupi = _ref29.supportsGrouping,
    supportsGrouping = _ref29$supportsGroupi === void 0 ? false : _ref29$supportsGroupi,
    _ref29$groupByDate = _ref29.groupByDate,
    groupByDate = _ref29$groupByDate === void 0 ? false : _ref29$groupByDate,
    setGroupByDate = _ref29.setGroupByDate,
    _ref29$lastUpdatedAt = _ref29.lastUpdatedAt,
    lastUpdatedAt = _ref29$lastUpdatedAt === void 0 ? null : _ref29$lastUpdatedAt;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "relative w-full sm:w-64"
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
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 py-2 pl-9 pr-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
  })), supportsBarberFilter && /*#__PURE__*/React.createElement("select", {
    value: selectedBarber,
    onChange: function onChange(event) {
      return setSelectedBarber(event.target.value);
    },
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u0412\u0441\u0435 \u0431\u0430\u0440\u0431\u0435\u0440\u044B"), barbers.map(function (barber) {
    return /*#__PURE__*/React.createElement("option", {
      key: barber,
      value: barber
    }, barber);
  })), supportsStatusFilter && /*#__PURE__*/React.createElement(StatusMenu, {
    statuses: statuses,
    hiddenStatuses: hiddenStatuses,
    onToggle: toggleStatus,
    onReset: resetStatuses
  }), tableId === 'Appointments' && typeof setShowPastAppointments === 'function' && /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-white"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "accent-indigo-500",
    checked: !!showPastAppointments,
    onChange: function onChange(event) {
      return setShowPastAppointments(event.target.checked);
    }
  }), "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435"), supportsGrouping && typeof setGroupByDate === 'function' && /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-white"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "accent-indigo-500",
    checked: !!groupByDate,
    onChange: function onChange(event) {
      return setGroupByDate(event.target.checked);
    }
  }), "\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0434\u043D\u044F\u043C"), /*#__PURE__*/React.createElement(ColumnMenu, {
    columns: columns,
    hiddenColumns: hiddenColumns,
    onToggle: toggleColumn
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, lastUpdatedAt && /*#__PURE__*/React.createElement(LiveBadge, {
    timestamp: lastUpdatedAt
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onRefresh,
    className: "rounded-lg border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800"
  }, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"), canCreate && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCreate,
    className: "rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500"
  }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
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
  return Array.from(buckets.entries()).map(function (_ref30) {
    var _getAppointmentStartD6;
    var _ref31 = _slicedToArray(_ref30, 2),
      key = _ref31[0],
      items = _ref31[1];
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
var SortIndicator = function SortIndicator(_ref32) {
  var direction = _ref32.direction;
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
var DataTable = function DataTable(_ref33) {
  var tableId = _ref33.tableId,
    rows = _ref33.rows,
    columns = _ref33.columns,
    hiddenColumns = _ref33.hiddenColumns,
    sortConfig = _ref33.sortConfig,
    onSort = _ref33.onSort,
    onUpdate = _ref33.onUpdate,
    onDelete = _ref33.onDelete,
    options = _ref33.options,
    onOpenProfile = _ref33.onOpenProfile,
    _ref33$groupByDate = _ref33.groupByDate,
    groupByDate = _ref33$groupByDate === void 0 ? true : _ref33$groupByDate;
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
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, groupedRows.map(function (group) {
      return /*#__PURE__*/React.createElement("div", {
        key: group.key,
        className: "space-y-3"
      }, group.label && /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400"
      }, /*#__PURE__*/React.createElement("span", {
        className: "h-px flex-1 bg-slate-700"
      }), group.label, /*#__PURE__*/React.createElement("span", {
        className: "h-px flex-1 bg-slate-700"
      })), /*#__PURE__*/React.createElement("div", {
        className: "grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
      }, group.rows.map(function (record) {
        var recordId = getRecordId(record);
        var statusLabel = normalizeStatusValue(record.Status) || '—';
        return /*#__PURE__*/React.createElement("article", {
          key: recordId,
          className: "space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-black/10"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-wrap items-center justify-between gap-3"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-[11px] uppercase tracking-[0.2em] text-slate-500"
        }, "\u0417\u0430\u043F\u0438\u0441\u044C"), /*#__PURE__*/React.createElement("p", {
          className: "text-base font-semibold text-white"
        }, record.CustomerName || 'Без имени'), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-slate-400"
        }, formatDateTime(record.Date, record.Time))), /*#__PURE__*/React.createElement("span", {
          className: classNames('text-xs font-semibold', getStatusBadgeClasses(record.Status))
        }, statusLabel)), /*#__PURE__*/React.createElement("div", {
          className: "grid gap-3 sm:grid-cols-2"
        }, visibleColumns.map(function (column) {
          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(recordId, "-").concat(column.key),
            className: "space-y-1"
          }, /*#__PURE__*/React.createElement("p", {
            className: "text-[11px] uppercase tracking-[0.2em] text-slate-500"
          }, column.label), /*#__PURE__*/React.createElement("div", {
            className: "rounded-lg border border-slate-700 bg-slate-950/40 px-2 py-1.5"
          }, /*#__PURE__*/React.createElement(EditableCell, {
            record: record,
            column: column,
            options: options,
            onUpdate: onUpdate,
            onOpenProfile: onOpenProfile,
            tableId: tableId
          })));
        })), onDelete && /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return onDelete(record);
          },
          className: "w-full rounded-lg border border-rose-500 px-3 py-2 text-sm text-rose-200 hover:bg-rose-500/10",
          "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"
        }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"));
      })));
    }));
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
    }, record[(_visibleColumns$ = visibleColumns[0]) === null || _visibleColumns$ === void 0 ? void 0 : _visibleColumns$.key] || '—')), onDelete && /*#__PURE__*/React.createElement("button", {
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
var CreateRecordModal = function CreateRecordModal(_ref34) {
  var isOpen = _ref34.isOpen,
    onClose = _ref34.onClose,
    onSave = _ref34.onSave,
    columns = _ref34.columns,
    tableName = _ref34.tableName,
    options = _ref34.options,
    tableId = _ref34.tableId,
    _ref34$clients = _ref34.clients,
    clients = _ref34$clients === void 0 ? [] : _ref34$clients,
    _ref34$hiddenFields = _ref34.hiddenFields,
    hiddenFields = _ref34$hiddenFields === void 0 ? [] : _ref34$hiddenFields;
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
    Object.entries(draft).forEach(function (_ref35) {
      var _ref36 = _slicedToArray(_ref35, 2),
        key = _ref36[0],
        value = _ref36[1];
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
var ProfileModal = function ProfileModal(_ref37) {
  var _state$data, _state$data2, _state$data3, _state$data4;
  var state = _ref37.state,
    onClose = _ref37.onClose;
  var appointments = ((_state$data = state.data) === null || _state$data === void 0 ? void 0 : _state$data.appointments) || [];
  var visitHistory = useMemo(function () {
    if (!appointments.length) return [];
    var cutoff = Date.now() - YEAR_IN_MS;
    var completed = appointments.map(function (appt) {
      var startDate = getAppointmentStartDate(appt.Date, appt.Time, appt.startDateTime);
      return _objectSpread(_objectSpread({}, appt), {}, {
        startDate: startDate
      });
    }).filter(function (appt) {
      return appt.startDate && appt.startDate.getTime() >= cutoff && isCompletedAppointmentStatus(appt.Status);
    }).sort(function (a, b) {
      return b.startDate.getTime() - a.startDate.getTime();
    });
    return completed.map(function (appt, index) {
      return _objectSpread(_objectSpread({}, appt), {}, {
        orderNumber: completed.length - index,
        dateLabel: formatDateTime(appt.Date, appt.Time)
      });
    });
  }, [appointments]);
  return /*#__PURE__*/React.createElement(Modal, {
    title: ((_state$data2 = state.data) === null || _state$data2 === void 0 || (_state$data2 = _state$data2.user) === null || _state$data2 === void 0 ? void 0 : _state$data2.Name) || 'Профиль клиента',
    isOpen: state.open,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "rounded-lg border border-slate-600 px-4 py-2 text-white"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
  }, state.loading && /*#__PURE__*/React.createElement(LoadingState, {
    label: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044C..."
  }), !state.loading && ((_state$data3 = state.data) === null || _state$data3 === void 0 ? void 0 : _state$data3.error) && /*#__PURE__*/React.createElement(ErrorBanner, {
    message: state.data.error
  }), !state.loading && ((_state$data4 = state.data) === null || _state$data4 === void 0 ? void 0 : _state$data4.user) && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 text-sm text-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"), " ", state.data.user.Phone || '-'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "Telegram:"), " ", state.data.user.TelegramID || '-'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, "\u0411\u0430\u0440\u0431\u0435\u0440:"), " ", state.data.user.Barber || '-')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-400"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0437\u0438\u0442\u043E\u0432"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 max-h-64 space-y-2 overflow-auto"
  }, visitHistory.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-white"
  }, visitHistory.length)), /*#__PURE__*/React.createElement("span", null, "\u0422\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438")), visitHistory.map(function (appt, index) {
    var isLatest = index === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(appt.id || appt.dateLabel, "-").concat(appt.orderNumber),
      className: classNames('rounded-lg border p-3 text-xs transition', isLatest ? 'border-emerald-400/60 bg-emerald-500/10 shadow-inner shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/40')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[11px] uppercase tracking-wide text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-white"
    }, "\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u2116", appt.orderNumber), /*#__PURE__*/React.createElement("span", null, appt.dateLabel)), /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-sm text-slate-100"
    }, appt.Barber || '—'), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, appt.Services || '—'));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u043E\u0434 \u043D\u0435\u0442.")))));
};
var BackupsPanel = function BackupsPanel(_ref38) {
  var _ref38$backups = _ref38.backups,
    backups = _ref38$backups === void 0 ? [] : _ref38$backups,
    onRestore = _ref38.onRestore,
    onCreate = _ref38.onCreate;
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
    return /*#__PURE__*/React.createElement("div", {
      key: backup,
      className: "flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200"
    }, /*#__PURE__*/React.createElement("span", null, backup), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onRestore(backup);
      },
      className: "text-indigo-300 hover:text-indigo-100"
    }, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"));
  })));
};
var AppointmentModal = function AppointmentModal(_ref39) {
  var open = _ref39.open,
    appointment = _ref39.appointment,
    _ref39$options = _ref39.options,
    options = _ref39$options === void 0 ? {} : _ref39$options,
    onClose = _ref39.onClose,
    onSave = _ref39.onSave,
    onDelete = _ref39.onDelete,
    _ref39$canDelete = _ref39.canDelete,
    canDelete = _ref39$canDelete === void 0 ? false : _ref39$canDelete,
    _ref39$isNew = _ref39.isNew,
    isNew = _ref39$isNew === void 0 ? false : _ref39$isNew,
    _ref39$clients = _ref39.clients,
    clients = _ref39$clients === void 0 ? [] : _ref39$clients;
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
  var handleSubmit = function handleSubmit() {
    onSave({
      id: draft.id,
      payload: {
        CustomerName: draft.CustomerName,
        Phone: draft.Phone,
        Barber: draft.Barber,
        Date: draft.Date,
        Time: draft.Time,
        Status: normalizeStatusValue(draft.Status),
        Services: draft.Services,
        UserID: draft.UserID || ''
      },
      isNew: isNew
    });
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
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
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
var TablesWorkspace = function TablesWorkspace(_ref40) {
  var _TABLE_CONFIG$activeT;
  var apiRequest = _ref40.apiRequest,
    sharedOptions = _ref40.sharedOptions,
    onOptionsUpdate = _ref40.onOptionsUpdate,
    onOpenProfile = _ref40.onOpenProfile,
    _ref40$clients = _ref40.clients,
    clients = _ref40$clients === void 0 ? [] : _ref40$clients,
    _ref40$currentUser = _ref40.currentUser,
    currentUser = _ref40$currentUser === void 0 ? null : _ref40$currentUser,
    _ref40$liveAppointmen = _ref40.liveAppointments,
    liveAppointments = _ref40$liveAppointmen === void 0 ? null : _ref40$liveAppointmen,
    _ref40$liveUpdatedAt = _ref40.liveUpdatedAt,
    liveUpdatedAt = _ref40$liveUpdatedAt === void 0 ? null : _ref40$liveUpdatedAt,
    _ref40$barbers = _ref40.barbers,
    barbers = _ref40$barbers === void 0 ? [] : _ref40$barbers,
    _ref40$services = _ref40.services,
    services = _ref40$services === void 0 ? [] : _ref40$services,
    onBarberFieldChange = _ref40.onBarberFieldChange,
    onSaveBarber = _ref40.onSaveBarber,
    onAddBarber = _ref40.onAddBarber,
    onDeleteBarber = _ref40.onDeleteBarber,
    onServiceFieldChange = _ref40.onServiceFieldChange,
    onServicePriceChange = _ref40.onServicePriceChange,
    onDeleteService = _ref40.onDeleteService,
    onAddService = _ref40.onAddService,
    _ref40$preferredTable = _ref40.preferredTable,
    preferredTable = _ref40$preferredTable === void 0 ? null : _ref40$preferredTable,
    onPreferredTableConsumed = _ref40.onPreferredTableConsumed,
    _ref40$onRequestConfi = _ref40.onRequestConfirm,
    onRequestConfirm = _ref40$onRequestConfi === void 0 ? null : _ref40$onRequestConfi;
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
    if (!TABLE_CONFIG[activeTable]) {
      setActiveTable('Appointments');
    }
  }, [activeTable, setActiveTable]);
  useEffect(function () {
    if (!preferredTable) return;
    if (TABLE_ORDER.includes(preferredTable)) {
      setActiveTable(preferredTable);
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
  var fetchTables = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var responses, nextTables, rawOptions, normalizedOptions, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          setIsFetching(true);
          setTableError('');
          _context3.p = 1;
          _context3.n = 2;
          return Promise.all([].concat(_toConsumableArray(DATA_TABLES.map(function (table) {
            return apiRequest("/".concat(table));
          })), [apiRequest('/options/appointments')]));
        case 2:
          responses = _context3.v;
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
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t2 = _context3.v;
          console.error('Table fetch failed', _t2);
          setTableError(_t2.message || 'Не удалось загрузить таблицы');
        case 4:
          _context3.p = 4;
          setIsFetching(false);
          return _context3.f(4);
        case 5:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 3, 4, 5]]);
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
    var _ref42 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(recordId, data) {
      var tableId, normalizedData, original, payload, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (recordId) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            tableId = activeTable;
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
            _context4.p = 2;
            payload = tableId === 'Schedules' ? _objectSpread(_objectSpread({}, original.find(function (row) {
              return getRecordId(row) === recordId;
            }) || {}), normalizedData) : normalizedData;
            _context4.n = 3;
            return apiRequest("/".concat(tableId, "/").concat(encodeURIComponent(recordId)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 3:
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t3 = _context4.v;
            console.error('Update failed', _t3);
            setTableError(_t3.message || 'Не удалось обновить запись');
            setTables(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, original));
            });
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return function handleUpdate(_x, _x2) {
      return _ref42.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref43 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(record) {
      var confirmed, tableId, original, _t4, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (!(!record || activeTable === 'Schedules')) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            if (!onRequestConfirm) {
              _context5.n = 3;
              break;
            }
            _context5.n = 2;
            return onRequestConfirm({
              title: 'Удалить запись?',
              message: 'Запись будет удалена без возможности восстановления.',
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            _t4 = _context5.v;
            _context5.n = 4;
            break;
          case 3:
            _t4 = true;
          case 4:
            confirmed = _t4;
            if (confirmed) {
              _context5.n = 5;
              break;
            }
            return _context5.a(2);
          case 5:
            tableId = activeTable;
            original = tables[tableId] || [];
            setTables(function (prev) {
              var list = prev[tableId] || [];
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, list.filter(function (row) {
                return getRecordId(row) !== getRecordId(record);
              })));
            });
            _context5.p = 6;
            _context5.n = 7;
            return apiRequest("/".concat(tableId, "/").concat(encodeURIComponent(record.id)), {
              method: 'DELETE'
            });
          case 7:
            _context5.n = 9;
            break;
          case 8:
            _context5.p = 8;
            _t5 = _context5.v;
            console.error('Delete failed', _t5);
            setTableError(_t5.message || 'Не удалось удалить запись');
            setTables(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, original));
            });
          case 9:
            return _context5.a(2);
        }
      }, _callee5, null, [[6, 8]]);
    }));
    return function handleDelete(_x3) {
      return _ref43.apply(this, arguments);
    };
  }();
  var handleCreateRecord = /*#__PURE__*/function () {
    var _ref44 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(payload) {
      var tableId, normalizedPayload, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            tableId = activeTable;
            setCreateModalOpen(false);
            _context6.p = 1;
            normalizedPayload = tableId === 'Appointments' && (payload === null || payload === void 0 ? void 0 : payload.Status) !== undefined ? _objectSpread(_objectSpread({}, payload), {}, {
              Status: normalizeStatusValue(payload.Status)
            }) : payload;
            _context6.n = 2;
            return apiRequest("/".concat(tableId), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(normalizedPayload)
            });
          case 2:
            fetchTables();
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            console.error('Create failed', _t6);
            setTableError(_t6.message || 'Не удалось создать запись');
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function handleCreateRecord(_x4) {
      return _ref44.apply(this, arguments);
    };
  }();
  var tableSettings = TABLE_CONFIG[activeTable] || {};
  var isCustomTable = (tableSettings === null || tableSettings === void 0 ? void 0 : tableSettings.mode) === 'custom';
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, TABLE_ORDER.map(function (table) {
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
    onFieldChange: onBarberFieldChange,
    onSave: onSaveBarber,
    onAdd: onAddBarber,
    onDelete: onDeleteBarber
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
    setGroupByDate: setGroupAppointmentsByDate,
    lastUpdatedAt: liveUpdatedAt
  }), isFetching ? /*#__PURE__*/React.createElement(LoadingState, {
    label: "\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u044E \u0442\u0430\u0431\u043B\u0438\u0446\u044B..."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(DataTable, {
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
    groupByDate: activeTable === 'Appointments' ? groupAppointmentsByDate : false
  }))), tableSettings.canCreate && (activeTable === 'Appointments' ? /*#__PURE__*/React.createElement(AppointmentModal, {
    open: createModalOpen,
    appointment: appointmentTemplate,
    options: dropdownOptions,
    onClose: function onClose() {
      return setCreateModalOpen(false);
    },
    onSave: function onSave(_ref45) {
      var payload = _ref45.payload;
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
var BotControlView = function BotControlView(_ref46) {
  var status = _ref46.status,
    settings = _ref46.settings,
    _ref46$backups = _ref46.backups,
    backups = _ref46$backups === void 0 ? [] : _ref46$backups,
    _ref46$messages = _ref46.messages,
    messages = _ref46$messages === void 0 ? [] : _ref46$messages,
    onToggleEnabled = _ref46.onToggleEnabled,
    onStart = _ref46.onStart,
    onStop = _ref46.onStop,
    onRestart = _ref46.onRestart,
    onSaveSettings = _ref46.onSaveSettings,
    onSaveMessage = _ref46.onSaveMessage,
    onRestoreBackup = _ref46.onRestoreBackup,
    onCreateBackup = _ref46.onCreateBackup,
    licenseStatus = _ref46.licenseStatus,
    updateInfo = _ref46.updateInfo,
    onRefreshUpdate = _ref46.onRefreshUpdate,
    onApplyUpdate = _ref46.onApplyUpdate,
    systemBusy = _ref46.systemBusy,
    _ref46$viewMode = _ref46.viewMode,
    viewMode = _ref46$viewMode === void 0 ? 'bot' : _ref46$viewMode;
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
      onCreate: onCreateBackup
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
var LoginScreen = function LoginScreen(_ref47) {
  var onLogin = _ref47.onLogin,
    error = _ref47.error;
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
      var _ref48 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, data, normalized, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              setLoadingOptions(true);
              _context7.p = 1;
              _context7.n = 2;
              return fetch("".concat(API_BASE_URL, "/login/options"));
            case 2:
              response = _context7.v;
              if (response.ok) {
                _context7.n = 3;
                break;
              }
              throw new Error('failed');
            case 3:
              _context7.n = 4;
              return response.json();
            case 4:
              data = _context7.v;
              if (isMounted) {
                _context7.n = 5;
                break;
              }
              return _context7.a(2);
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
              _context7.n = 8;
              break;
            case 6:
              _context7.p = 6;
              _t7 = _context7.v;
              if (isMounted) {
                _context7.n = 7;
                break;
              }
              return _context7.a(2);
            case 7:
              setLoginOptions([]);
              setOptionsError('Не удалось загрузить список барберов.');
            case 8:
              _context7.p = 8;
              if (isMounted) {
                setLoadingOptions(false);
              }
              return _context7.f(8);
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 6, 8, 9]]);
      }));
      return function fetchOptions() {
        return _ref48.apply(this, arguments);
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
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    dashboard = _useState78[0],
    setDashboard = _useState78[1];
  var _useState79 = useState([]),
    _useState80 = _slicedToArray(_useState79, 2),
    services = _useState80[0],
    setServices = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    barbers = _useState82[0],
    setBarbers = _useState82[1];
  var _useState83 = useState(null),
    _useState84 = _slicedToArray(_useState83, 2),
    botStatus = _useState84[0],
    setBotStatus = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    botSettings = _useState86[0],
    setBotSettings = _useState86[1];
  var _useState87 = useState([]),
    _useState88 = _slicedToArray(_useState87, 2),
    botMessages = _useState88[0],
    setBotMessages = _useState88[1];
  var _useState89 = useState(null),
    _useState90 = _slicedToArray(_useState89, 2),
    licenseStatus = _useState90[0],
    setLicenseStatus = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    updateInfo = _useState92[0],
    setUpdateInfo = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    optionsCache = _useState94[0],
    setOptionsCache = _useState94[1];
  var _useState95 = useState({
      open: false,
      data: null,
      loading: false
    }),
    _useState96 = _slicedToArray(_useState95, 2),
    profileModal = _useState96[0],
    setProfileModal = _useState96[1];
  var _useState97 = useState({
      open: false,
      data: null,
      options: null,
      isNew: false,
      allowDelete: false
    }),
    _useState98 = _slicedToArray(_useState97, 2),
    appointmentModal = _useState98[0],
    setAppointmentModal = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    loading = _useState100[0],
    setLoading = _useState100[1];
  var _useState101 = useState(''),
    _useState102 = _slicedToArray(_useState101, 2),
    globalError = _useState102[0],
    setGlobalError = _useState102[1];
  var _useState103 = useState(''),
    _useState104 = _slicedToArray(_useState103, 2),
    authError = _useState104[0],
    setAuthError = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    systemBusy = _useState106[0],
    setSystemBusy = _useState106[1];
  var _useState107 = useState(window.innerWidth < 1024),
    _useState108 = _slicedToArray(_useState107, 2),
    isMobile = _useState108[0],
    setIsMobile = _useState108[1];
  var _useState109 = useState(null),
    _useState110 = _slicedToArray(_useState109, 2),
    realtimeSnapshot = _useState110[0],
    setRealtimeSnapshot = _useState110[1];
  var _useState111 = useState(null),
    _useState112 = _slicedToArray(_useState111, 2),
    fatalError = _useState112[0],
    setFatalError = _useState112[1];
  var _useState113 = useState(defaultConfirmState),
    _useState114 = _slicedToArray(_useState113, 2),
    confirmDialog = _useState114[0],
    setConfirmDialog = _useState114[1];
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
    var _ref49 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(endpoint) {
      var _options$headers;
      var options,
        headers,
        response,
        message,
        _args8 = arguments;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
            if (session !== null && session !== void 0 && session.token) {
              _context8.n = 1;
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
            _context8.n = 2;
            return fetch("".concat(API_BASE_URL).concat(endpoint), _objectSpread(_objectSpread({}, options), {}, {
              headers: headers
            }));
          case 2:
            response = _context8.v;
            if (!(response.status === 401 || response.status === 403)) {
              _context8.n = 3;
              break;
            }
            handleLogout();
            throw new Error('Сессия истекла');
          case 3:
            if (response.ok) {
              _context8.n = 5;
              break;
            }
            _context8.n = 4;
            return response.text();
          case 4:
            message = _context8.v;
            throw new Error(message || 'Ошибка запроса');
          case 5:
            if (!(response.status === 204)) {
              _context8.n = 6;
              break;
            }
            return _context8.a(2, null);
          case 6:
            return _context8.a(2, response.json());
        }
      }, _callee8);
    }));
    return function (_x5) {
      return _ref49.apply(this, arguments);
    };
  }(), [session === null || session === void 0 ? void 0 : session.token, handleLogout]);
  var fetchAll = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var _overview$bot, overview, withFallback, _yield$Promise$all, _yield$Promise$all2, servicesFull, barbersFull, botState, botMessagesPayload, license, update, options, normalizedOptions, _t8;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          if (session !== null && session !== void 0 && session.token) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2);
        case 1:
          setLoading(true);
          setGlobalError('');
          _context9.p = 2;
          _context9.n = 3;
          return apiRequest('/dashboard/overview');
        case 3:
          overview = _context9.v;
          setDashboard(overview);
          withFallback = function withFallback(request, fallback, label) {
            return request["catch"](function (error) {
              console.warn("".concat(label, " fetch skipped:"), (error === null || error === void 0 ? void 0 : error.message) || error);
              return fallback;
            });
          };
          _context9.n = 4;
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
          _yield$Promise$all = _context9.v;
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
          _context9.n = 6;
          break;
        case 5:
          _context9.p = 5;
          _t8 = _context9.v;
          console.error(_t8);
          setGlobalError(_t8.message || 'Не удалось загрузить данные');
        case 6:
          _context9.p = 6;
          setLoading(false);
          return _context9.f(6);
        case 7:
          return _context9.a(2);
      }
    }, _callee9, null, [[2, 5, 6, 7]]);
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
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(username, password) {
      var normalizedUsername, response, data, sessionPayload, _t9;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            setAuthError('');
            normalizedUsername = resolveLogin(username);
            if (normalizedUsername) {
              _context0.n = 1;
              break;
            }
            setAuthError('Выберите барбера из списка');
            return _context0.a(2);
          case 1:
            _context0.p = 1;
            _context0.n = 2;
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
            response = _context0.v;
            _context0.n = 3;
            return response.json();
          case 3:
            data = _context0.v;
            if (!(!response.ok || !data.success)) {
              _context0.n = 4;
              break;
            }
            setAuthError(data.message || 'Неверный логин или пароль');
            return _context0.a(2);
          case 4:
            sessionPayload = buildSessionPayload(_objectSpread(_objectSpread({}, data), {}, {
              username: normalizedUsername
            }));
            localStorage.setItem('barber-session', JSON.stringify(sessionPayload));
            setSession(sessionPayload);
            _context0.n = 6;
            break;
          case 5:
            _context0.p = 5;
            _t9 = _context0.v;
            setAuthError('Сервер недоступен');
          case 6:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 5]]);
    }));
    return function handleLogin(_x6, _x7) {
      return _ref51.apply(this, arguments);
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
      prices: Object.fromEntries(Object.entries(service.prices || {}).map(function (_ref52) {
        var _ref53 = _slicedToArray(_ref52, 2),
          key = _ref53[0],
          value = _ref53[1];
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
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(barber) {
      var response, updatedBarber, _t0;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            _context1.p = 1;
            _context1.n = 2;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'PUT',
              body: JSON.stringify(buildBarberPayload(barber))
            });
          case 2:
            response = _context1.v;
            updatedBarber = response || barber;
            setBarbers(function (prev) {
              return prev.map(function (item) {
                return item.id === updatedBarber.id ? _objectSpread(_objectSpread({}, item), updatedBarber) : item;
              });
            });
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t0 = _context1.v;
            setGlobalError(_t0.message);
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[1, 3]]);
    }));
    return function handleSaveBarber(_x8) {
      return _ref54.apply(this, arguments);
    };
  }();
  var handleDeleteBarber = /*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(barber) {
      var confirmed, _t1;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            _context10.n = 2;
            return requestConfirm({
              title: 'Удалить барбера?',
              message: "\u0411\u0430\u0440\u0431\u0435\u0440 \xAB".concat(barber.name || 'Без имени', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F."),
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context10.v;
            if (confirmed) {
              _context10.n = 3;
              break;
            }
            return _context10.a(2);
          case 3:
            _context10.p = 3;
            _context10.n = 4;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t1 = _context10.v;
            setGlobalError(_t1.message || 'Не удалось удалить барбера');
          case 6:
            return _context10.a(2);
        }
      }, _callee10, null, [[3, 5]]);
    }));
    return function handleDeleteBarber(_x9) {
      return _ref55.apply(this, arguments);
    };
  }();
  var handleAddBarber = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(payload) {
      var newBarberPayload, id, body, _t10;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (!(!payload.name || !payload.password)) {
              _context11.n = 1;
              break;
            }
            setGlobalError('Заполните имя, логин и пароль барбера');
            return _context11.a(2);
          case 1:
            _context11.p = 1;
            newBarberPayload = buildBarberPayload(_objectSpread(_objectSpread({}, payload), {}, {
              id: undefined
            }), barbers.length);
            id = newBarberPayload.id, body = _objectWithoutProperties(newBarberPayload, _excluded);
            _context11.n = 2;
            return apiRequest('/Barbers', {
              method: 'POST',
              body: JSON.stringify(body)
            });
          case 2:
            fetchAll();
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t10 = _context11.v;
            setGlobalError(_t10.message || 'Не удалось добавить барбера');
          case 4:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 3]]);
    }));
    return function handleAddBarber(_x0) {
      return _ref56.apply(this, arguments);
    };
  }();
  var handleSaveService = useCallback(/*#__PURE__*/function () {
    var _ref57 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(service) {
      var _t11;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            _context12.p = 1;
            _context12.n = 2;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'PUT',
              body: JSON.stringify(normalizeServicePayload(service))
            });
          case 2:
            _context12.n = 4;
            break;
          case 3:
            _context12.p = 3;
            _t11 = _context12.v;
            setGlobalError(_t11.message || 'Не удалось сохранить услугу');
          case 4:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 3]]);
    }));
    return function (_x1) {
      return _ref57.apply(this, arguments);
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
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(service) {
      var confirmed, _t12;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            _context13.n = 2;
            return requestConfirm({
              title: 'Удалить услугу?',
              message: "\u0423\u0441\u043B\u0443\u0433\u0430 \xAB".concat(service.name || 'Без названия', "\xBB \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430."),
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
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'DELETE'
            });
          case 4:
            fetchAll();
            _context13.n = 6;
            break;
          case 5:
            _context13.p = 5;
            _t12 = _context13.v;
            setGlobalError(_t12.message || 'Не удалось удалить услугу');
          case 6:
            return _context13.a(2);
        }
      }, _callee13, null, [[3, 5]]);
    }));
    return function handleDeleteService(_x10) {
      return _ref58.apply(this, arguments);
    };
  }();
  var handleAddService = /*#__PURE__*/function () {
    var _ref59 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(payload) {
      var _t13;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (payload.name) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            _context14.p = 1;
            _context14.n = 2;
            return apiRequest('/services/full', {
              method: 'POST',
              body: JSON.stringify(normalizeServicePayload(payload))
            });
          case 2:
            fetchAll();
            _context14.n = 4;
            break;
          case 3:
            _context14.p = 3;
            _t13 = _context14.v;
            setGlobalError(_t13.message || 'Не удалось добавить услугу');
          case 4:
            return _context14.a(2);
        }
      }, _callee14, null, [[1, 3]]);
    }));
    return function handleAddService(_x11) {
      return _ref59.apply(this, arguments);
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
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(enabled) {
      var _t14;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            _context15.p = 0;
            _context15.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                isBotEnabled: enabled
              })
            });
          case 1:
            fetchAll();
            _context15.n = 3;
            break;
          case 2:
            _context15.p = 2;
            _t14 = _context15.v;
            setGlobalError(_t14.message || 'Не удалось обновить настройки бота');
          case 3:
            return _context15.a(2);
        }
      }, _callee15, null, [[0, 2]]);
    }));
    return function handleBotToggle(_x12) {
      return _ref60.apply(this, arguments);
    };
  }();
  var handleBotAction = /*#__PURE__*/function () {
    var _ref61 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(action) {
      var _t15;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            _context16.p = 0;
            _context16.n = 1;
            return apiRequest('/bot/status', {
              method: 'POST',
              body: JSON.stringify({
                action: action
              })
            });
          case 1:
            fetchAll();
            _context16.n = 3;
            break;
          case 2:
            _context16.p = 2;
            _t15 = _context16.v;
            setGlobalError(_t15.message || 'Не удалось выполнить действие');
          case 3:
            return _context16.a(2);
        }
      }, _callee16, null, [[0, 2]]);
    }));
    return function handleBotAction(_x13) {
      return _ref61.apply(this, arguments);
    };
  }();
  var handleSaveSettings = /*#__PURE__*/function () {
    var _ref62 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(payload) {
      var _t16;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (botSettings !== null && botSettings !== void 0 && botSettings.id) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            _context17.p = 1;
            _context17.n = 2;
            return apiRequest("/BotSettings/".concat(encodeURIComponent(botSettings.id)), {
              method: 'PUT',
              body: JSON.stringify(payload)
            });
          case 2:
            fetchAll();
            _context17.n = 4;
            break;
          case 3:
            _context17.p = 3;
            _t16 = _context17.v;
            setGlobalError(_t16.message || 'Не удалось сохранить настройки');
          case 4:
            return _context17.a(2);
        }
      }, _callee17, null, [[1, 3]]);
    }));
    return function handleSaveSettings(_x14) {
      return _ref62.apply(this, arguments);
    };
  }();
  var handleSaveMessage = /*#__PURE__*/function () {
    var _ref63 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(id, draft, persist) {
      var _t17;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (persist) {
              _context18.n = 1;
              break;
            }
            setBotMessages(function (prev) {
              return prev.map(function (message) {
                return message.id === id ? _objectSpread({}, draft) : message;
              });
            });
            return _context18.a(2);
          case 1:
            _context18.p = 1;
            _context18.n = 2;
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
            _context18.n = 4;
            break;
          case 3:
            _context18.p = 3;
            _t17 = _context18.v;
            setGlobalError(_t17.message || 'Не удалось сохранить сообщение');
          case 4:
            return _context18.a(2);
        }
      }, _callee18, null, [[1, 3]]);
    }));
    return function handleSaveMessage(_x15, _x16, _x17) {
      return _ref63.apply(this, arguments);
    };
  }();
  var handleRestoreBackup = /*#__PURE__*/function () {
    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(filename) {
      var confirmed, _t18;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            if (filename) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            _context19.n = 2;
            return requestConfirm({
              title: 'Восстановить резервную копию?',
              message: "\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C ".concat(filename, ". \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?"),
              confirmLabel: 'Восстановить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context19.v;
            if (confirmed) {
              _context19.n = 3;
              break;
            }
            return _context19.a(2);
          case 3:
            _context19.p = 3;
            _context19.n = 4;
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
            _context19.n = 6;
            break;
          case 5:
            _context19.p = 5;
            _t18 = _context19.v;
            setGlobalError(_t18.message || 'Не удалось восстановить бэкап');
          case 6:
            return _context19.a(2);
        }
      }, _callee19, null, [[3, 5]]);
    }));
    return function handleRestoreBackup(_x18) {
      return _ref64.apply(this, arguments);
    };
  }();
  var handleCreateBackup = /*#__PURE__*/function () {
    var _ref65 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var confirmed, _t19;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            _context20.n = 1;
            return requestConfirm({
              title: 'Создать резервную копию?',
              message: 'Будет создан файл резервной копии текущей базы данных.',
              confirmLabel: 'Создать',
              tone: 'success'
            });
          case 1:
            confirmed = _context20.v;
            if (confirmed) {
              _context20.n = 2;
              break;
            }
            return _context20.a(2);
          case 2:
            _context20.p = 2;
            _context20.n = 3;
            return apiRequest('/backups/create', {
              method: 'POST'
            });
          case 3:
            fetchAll();
            _context20.n = 5;
            break;
          case 4:
            _context20.p = 4;
            _t19 = _context20.v;
            setGlobalError(_t19.message || 'Не удалось создать бэкап');
          case 5:
            return _context20.a(2);
        }
      }, _callee20, null, [[2, 4]]);
    }));
    return function handleCreateBackup() {
      return _ref65.apply(this, arguments);
    };
  }();
  var openProfile = useCallback(/*#__PURE__*/function () {
    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(name) {
      var payload, _t20;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (name) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            setProfileModal({
              open: true,
              data: null,
              loading: true
            });
            _context21.p = 2;
            _context21.n = 3;
            return apiRequest("/user-profile/".concat(encodeURIComponent(name)));
          case 3:
            payload = _context21.v;
            setProfileModal({
              open: true,
              data: payload,
              loading: false
            });
            _context21.n = 5;
            break;
          case 4:
            _context21.p = 4;
            _t20 = _context21.v;
            setProfileModal({
              open: true,
              data: {
                error: _t20.message || 'Не удалось загрузить профиль'
              },
              loading: false
            });
          case 5:
            return _context21.a(2);
        }
      }, _callee21, null, [[2, 4]]);
    }));
    return function (_x19) {
      return _ref66.apply(this, arguments);
    };
  }(), [apiRequest]);
  var ensureOptions = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
    var options, normalized;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          if (!optionsCache) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2, optionsCache);
        case 1:
          _context22.n = 2;
          return apiRequest('/options/appointments?force=1');
        case 2:
          options = _context22.v;
          normalized = _objectSpread(_objectSpread({}, options), {}, {
            statuses: normalizeStatusList(options.statuses || [])
          });
          setOptionsCache(normalized);
          return _context22.a(2, normalized);
      }
    }, _callee22);
  })), [apiRequest, optionsCache]);
  var handleOpenAppointment = useCallback(/*#__PURE__*/function () {
    var _ref68 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(appointment) {
      var optionsConfig,
        options,
        _args23 = arguments;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            optionsConfig = _args23.length > 1 && _args23[1] !== undefined ? _args23[1] : {};
            _context23.n = 1;
            return ensureOptions();
          case 1:
            options = _context23.v;
            setAppointmentModal({
              open: true,
              data: appointment,
              options: options,
              isNew: false,
              allowDelete: !!optionsConfig.allowDelete
            });
          case 2:
            return _context23.a(2);
        }
      }, _callee23);
    }));
    return function (_x20) {
      return _ref68.apply(this, arguments);
    };
  }(), [ensureOptions]);
  var handleCreateAppointment = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
    var _options$statuses;
    var options, today, defaultStatus, defaultBarber;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          _context24.n = 1;
          return ensureOptions();
        case 1:
          options = _context24.v;
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
          return _context24.a(2);
      }
    }, _callee24);
  })), [ensureOptions, session === null || session === void 0 ? void 0 : session.displayName, session === null || session === void 0 ? void 0 : session.username]);
  var handleSaveAppointment = /*#__PURE__*/function () {
    var _ref71 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(_ref70) {
      var id, payload, isNew, _t21;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            id = _ref70.id, payload = _ref70.payload, isNew = _ref70.isNew;
            _context25.p = 1;
            if (!isNew) {
              _context25.n = 3;
              break;
            }
            _context25.n = 2;
            return apiRequest('/Appointments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 2:
            _context25.n = 4;
            break;
          case 3:
            if (!id) {
              _context25.n = 4;
              break;
            }
            _context25.n = 4;
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
            _context25.n = 6;
            break;
          case 5:
            _context25.p = 5;
            _t21 = _context25.v;
            setGlobalError(_t21.message || 'Не удалось сохранить запись');
          case 6:
            return _context25.a(2);
        }
      }, _callee25, null, [[1, 5]]);
    }));
    return function handleSaveAppointment(_x21) {
      return _ref71.apply(this, arguments);
    };
  }();
  var handleDeleteAppointment = /*#__PURE__*/function () {
    var _ref72 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(appointment) {
      var confirmed, _t22;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            if (appointment !== null && appointment !== void 0 && appointment.id) {
              _context26.n = 1;
              break;
            }
            return _context26.a(2);
          case 1:
            _context26.n = 2;
            return requestConfirm({
              title: 'Удалить запись?',
              message: 'Запись будет удалена без возможности восстановления.',
              confirmLabel: 'Удалить',
              tone: 'danger'
            });
          case 2:
            confirmed = _context26.v;
            if (confirmed) {
              _context26.n = 3;
              break;
            }
            return _context26.a(2);
          case 3:
            _context26.p = 3;
            _context26.n = 4;
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
            _context26.n = 6;
            break;
          case 5:
            _context26.p = 5;
            _t22 = _context26.v;
            setGlobalError(_t22.message || 'Не удалось удалить запись');
          case 6:
            return _context26.a(2);
        }
      }, _callee26, null, [[3, 5]]);
    }));
    return function handleDeleteAppointment(_x22) {
      return _ref72.apply(this, arguments);
    };
  }();
  var handleRefreshUpdate = /*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
      var info, _t23;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            setSystemBusy(true);
            _context27.p = 1;
            _context27.n = 2;
            return apiRequest('/system/update?force=1');
          case 2:
            info = _context27.v;
            setUpdateInfo(info);
            _context27.n = 4;
            break;
          case 3:
            _context27.p = 3;
            _t23 = _context27.v;
            setGlobalError(_t23.message || 'Не удалось проверить обновления');
          case 4:
            _context27.p = 4;
            setSystemBusy(false);
            return _context27.f(4);
          case 5:
            return _context27.a(2);
        }
      }, _callee27, null, [[1, 3, 4, 5]]);
    }));
    return function handleRefreshUpdate() {
      return _ref73.apply(this, arguments);
    };
  }();
  var handleApplyUpdate = /*#__PURE__*/function () {
    var _ref74 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
      var confirmed, result, _t24;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            _context28.n = 1;
            return requestConfirm({
              title: 'Обновить систему?',
              message: 'CRM и бот будут обновлены до последней версии. Перезапуск может занять несколько минут.',
              confirmLabel: 'Обновить',
              tone: 'danger'
            });
          case 1:
            confirmed = _context28.v;
            if (confirmed) {
              _context28.n = 2;
              break;
            }
            return _context28.a(2);
          case 2:
            setSystemBusy(true);
            _context28.p = 3;
            _context28.n = 4;
            return apiRequest('/system/update', {
              method: 'POST'
            });
          case 4:
            result = _context28.v;
            setUpdateInfo(result.info || result);
            fetchAll();
            _context28.n = 6;
            break;
          case 5:
            _context28.p = 5;
            _t24 = _context28.v;
            setGlobalError(_t24.message || 'Не удалось применить обновление');
          case 6:
            _context28.p = 6;
            setSystemBusy(false);
            return _context28.f(6);
          case 7:
            return _context28.a(2);
        }
      }, _callee28, null, [[3, 5, 6, 7]]);
    }));
    return function handleApplyUpdate() {
      return _ref74.apply(this, arguments);
    };
  }();
  if (!(session !== null && session !== void 0 && session.token)) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: handleLogin,
      error: authError
    });
  }
  var preferredTableTarget = activeTab === 'barbers' ? 'Barbers' : activeTab === 'services' ? 'Services' : pendingTableView;
  var renderActive = function renderActive() {
    if (loading) return /*#__PURE__*/React.createElement(LoadingState, null);
    switch (activeTab) {
      case 'dashboard':
        return /*#__PURE__*/React.createElement(DashboardView, {
          data: dashboard,
          onOpenAppointment: handleOpenAppointment,
          onOpenProfile: openProfile,
          onCreateAppointment: handleCreateAppointment,
          liveMeta: realtimeSnapshot
        });
      case 'tables':
      case 'barbers':
      case 'services':
        return /*#__PURE__*/React.createElement(TablesWorkspace, {
          apiRequest: apiRequest,
          sharedOptions: optionsCache,
          onOptionsUpdate: setOptionsCache,
          onOpenProfile: openProfile,
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
    onLogout: handleLogout
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    session: session,
    activeTab: activeTab,
    onChange: setActiveTab,
    onLogout: handleLogout
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 space-y-4 p-4 md:p-8"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIl9SZWFjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJGcmFnbWVudCIsIl9SZWFjdERPTSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiY3JlYXRlUm9vdCIsInJlc29sdmVEZWZhdWx0QXBpQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY29uY2F0IiwiREVGQVVMVF9BUElfQkFTRV9VUkwiLCJBUElfQkFTRV9VUkwiLCJfX0JBUkJFUl9BUElfQkFTRV9fIiwiVklFV19UQUJTIiwiaWQiLCJsYWJlbCIsIlRBQkxFX09SREVSIiwiREFUQV9UQUJMRVMiLCJUQUJMRV9DT05GSUciLCJBcHBvaW50bWVudHMiLCJtb2RlIiwiY2FuQ3JlYXRlIiwic3VwcG9ydHNCYXJiZXJGaWx0ZXIiLCJzdXBwb3J0c1N0YXR1c0ZpbHRlciIsImRlZmF1bHRTb3J0Iiwia2V5IiwiZGlyZWN0aW9uIiwiU2NoZWR1bGVzIiwiVXNlcnMiLCJCYXJiZXJzIiwiU2VydmljZXMiLCJUQUJMRV9DT0xVTU5TIiwiZWRpdGFibGUiLCJ0eXBlIiwiaXNQcm9maWxlTGluayIsIm1pbldpZHRoIiwib3B0aW9uc0tleSIsIm5vV3JhcCIsImFsaWduIiwiUkFUSU5HX01JTiIsIlJBVElOR19NQVgiLCJSQVRJTkdfU1RFUCIsImF2YXRhck9wdGlvbnNDYWNoZSIsIllFQVJfSU5fTVMiLCJidWlsZE5ld0JhcmJlclN0YXRlIiwicGFzc3dvcmQiLCJyYXRpbmciLCJjb2xvciIsImF2YXRhclVybCIsImRlc2NyaXB0aW9uIiwicGhvbmUiLCJ0ZWxlZ3JhbUlkIiwiaXNBY3RpdmUiLCJidWlsZE5ld1NlcnZpY2VTdGF0ZSIsImR1cmF0aW9uIiwicHJpY2VzIiwiZGVmYXVsdENvbmZpcm1TdGF0ZSIsIm9wZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtTGFiZWwiLCJjYW5jZWxMYWJlbCIsInRvbmUiLCJnZXRSZWNvcmRJZCIsInJlY29yZCIsInVuZGVmaW5lZCIsIklkIiwiSUQiLCJyZWNvcmRJZCIsIklEX1JlY29yZCIsImNsYXNzTmFtZXMiLCJfbGVuIiwiY2xhc3NlcyIsIl9rZXkiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVyIiwicHJldiIsIm5leHRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VOb3dUaWNrIiwiaW50ZXJ2YWxNcyIsIl91c2VTdGF0ZTMiLCJEYXRlIiwibm93IiwiX3VzZVN0YXRlNCIsInNldE5vdyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidXNlT3V0c2lkZUNsaWNrIiwicmVmIiwiaGFuZGxlciIsImxpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmV0Y2hBdmF0YXJPcHRpb25zIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsInBheWxvYWQiLCJpbWFnZXMiLCJfY29udGV4dCIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJtYXAiLCJub3JtYWxpemVJbWFnZVBhdGgiLCJTZXQiLCJub3JtYWxpemVUZXh0IiwiU3RyaW5nIiwicmVzb2x2ZUFzc2V0VXJsIiwibm9ybWFsaXplZCIsInRyaW0iLCJzdGFydHNXaXRoIiwic2FuaXRpemVkIiwicmVwbGFjZSIsInJlc29sdmVkIiwibnVtYmVyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdEN1cnJlbmN5IiwibnVtZXJpYyIsIk51bWJlciIsImlzRmluaXRlIiwiZm9ybWF0IiwicGx1cmFsaXplIiwiY291bnQiLCJfcmVmMiIsIl9yZWYzIiwib25lIiwiZmV3IiwibWFueSIsIm1vZDEwIiwibW9kMTAwIiwiY2Fub25pY2FsaXplTmFtZSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiX29iamVjdFNwcmVhZCIsImJhcmJlcklkIiwicGlja0JhcmJlckZvclVzZXIiLCJ1c2VyU2Vzc2lvbiIsImF2YWlsYWJsZUJhcmJlcnMiLCJmYWxsYmFjayIsImNhbmRpZGF0ZXMiLCJwcmVmZXJyZWROYW1lIiwiY2FuZGlkYXRlIiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemVkT3B0aW9ucyIsImJhcmJlciIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJfbG9vcCIsIm1hdGNoSW5kZXgiLCJmaW5kSW5kZXgiLCJvcHRpb24iLCJfcmV0IiwicyIsImVyciIsImZvcm1hdERhdGUiLCJEYXRlVGltZUZvcm1hdCIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdFRpbWUiLCJzYWZlVmFsdWUiLCJpbmNsdWRlcyIsInNwbGl0IiwiZm9ybWF0UGhvbmVJbnB1dCIsImRpZ2l0cyIsImZvcm1hdERhdGVUaW1lIiwiZGF0ZSIsInRpbWUiLCJkYXRlUGFydCIsInRpbWVQYXJ0IiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsInBhcnNlZCIsImlzTmFOIiwiZ2V0VGltZSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJwYWRTdGFydCIsImhvdXJzIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwiU1RBVFVTX1RSQU5TTEFUSU9OUyIsImFjdGl2ZSIsImNvbmZpcm0iLCJjb25maXJtZWQiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImZpbmlzaGVkIiwiY2FuY2VsIiwiY2FuY2VsZWQiLCJjYW5jZWxsZWQiLCJub3Nob3ciLCJtaXNzZWQiLCJwZW5kaW5nIiwid2FpdCIsIndhaXRpbmciLCJwcm9jZXNzaW5nIiwiU1RBVFVTX0JBREdFX01BUCIsItCQ0LrRgtC40LLQvdCw0Y8iLCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAiLCLQl9Cw0LLQtdGA0YjQtdC90LAiLCLQntGC0LzQtdC90LXQvdCwIiwiZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzIiwic3RhdHVzIiwibm9ybWFsaXplU3RhdHVzVmFsdWUiLCJJTkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQUNUSVZFX1NUQVRVU19UT0tFTlMiLCJDT01QTEVURURfU1RBVFVTX1RPS0VOUyIsInRyYW5zbGF0ZWQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm5vcm1hbGl6ZVN0YXR1c0xpc3QiLCJzdGF0dXNlcyIsInNlZW4iLCJoYXMiLCJhZGQiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJtYXRjaCIsInBhcnNlVGltZVJhbmdlVmFsdWUiLCJzYWZlIiwic3RhcnQiLCJlbmQiLCJfc2FmZSRzcGxpdCRtYXAiLCJwYXJ0IiwiX3NhZmUkc3BsaXQkbWFwMiIsInJhd1N0YXJ0IiwiX3NhZmUkc3BsaXQkbWFwMiQiLCJyYXdFbmQiLCJwYXJzZVRpbWVSYW5nZVBhcnRzIiwiYnVpbGRUaW1lUmFuZ2VWYWx1ZSIsInNhZmVTdGFydCIsInNhZmVFbmQiLCJfcmVmNCIsIl9yZWY1IiwidG8iLCJleHRyYWN0VGltZVN0YXJ0IiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJkYXRlVmFsdWUiLCJ0aW1lVmFsdWUiLCJmYWxsYmFja0lzbyIsInBhcnNlZEZhbGxiYWNrIiwiaXNvQ2FuZGlkYXRlIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNob3VsZERpc3BsYXlBcHBvaW50bWVudCIsImFwcG9pbnRtZW50IiwiU3RhdHVzIiwic3RhcnREYXRlIiwiVGltZSIsInN0YXJ0RGF0ZVRpbWUiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjYiLCJfcmVmNiRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY3IiwiU2VjdGlvbkNhcmQiLCJfcmVmOCIsImFjdGlvbnMiLCJjaGlsZHJlbiIsIkxpdmVCYWRnZSIsIl9yZWY5IiwidGltZXN0YW1wIiwiX3JlZjkkbGFiZWwiLCJ0aWNraW5nTm93IiwidGltZUxhYmVsIiwiSWNvblRyYXNoIiwiX3JlZjAiLCJfcmVmMCRjbGFzc05hbWUiLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwb2ludHMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1vZGFsIiwiX3JlZjEiLCJpc09wZW4iLCJvbkNsb3NlIiwiZm9vdGVyIiwiX3JlZjEkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiQ29uZmlybURpYWxvZyIsIl9yZWYxMCIsIl9yZWYxMCRjb25maXJtTGFiZWwiLCJfcmVmMTAkY2FuY2VsTGFiZWwiLCJfcmVmMTAkdG9uZSIsIm9uUmVzdWx0IiwiY29uZmlybVRvbmVDbGFzcyIsIlN0YXRDYXJkIiwiX3JlZjExIiwiX3JlZjExJGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMTIiLCJzZXNzaW9uIiwiYWN0aXZlVGFiIiwib25DaGFuZ2UiLCJvbkxvZ291dCIsInRhYiIsIk1vYmlsZVRhYnMiLCJfcmVmMTMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJoYW5kbGVTZWxlY3QiLCJ0YWJJZCIsIkRhc2hib2FyZFZpZXciLCJfcmVmMTQiLCJfZGF0YSRhcHBvaW50bWVudHMiLCJfc3RhdHMkdG90YWxVc2VycyIsIl9zdGF0cyRhY3RpdmVBcHBvaW50bSIsIl9zdGF0cyRjb25maXJtZWRZZWFyIiwiX3N0YXRzJHRvZGF5c0FwcG9pbnRtIiwiZGF0YSIsIm9uT3BlbkFwcG9pbnRtZW50Iiwib25PcGVuUHJvZmlsZSIsIm9uQ3JlYXRlQXBwb2ludG1lbnQiLCJfcmVmMTQkbGl2ZU1ldGEiLCJsaXZlTWV0YSIsInN0YXRzIiwidXBjb21pbmdSYXciLCJhcHBvaW50bWVudHMiLCJ1cGNvbWluZyIsInVwY29taW5nTGlzdCIsImFwcHQiLCJzb3J0IiwiYiIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDIiLCJsZWZ0IiwiTUFYX1NBRkVfSU5URUdFUiIsInJpZ2h0IiwiZm9ybWF0R3JvdXBMYWJlbCIsIl91bnVzZWQiLCJncm91cGVkVXBjb21pbmciLCJncm91cHMiLCJNYXAiLCJmb3JFYWNoIiwiYnVja2V0IiwiZ2V0Iiwic2V0IiwiZW50cmllcyIsIl9yZWYxNSIsIl9yZWYxNiIsIml0ZW1zIiwic29ydFZhbHVlIiwibWluIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dldEFwcG9pbnRtZW50U3RhcnREMyIsInVwY29taW5nQWN0aW9ucyIsInVwZGF0ZWRBdCIsInRvdGFsVXNlcnMiLCJhY3RpdmVBcHBvaW50bWVudHMiLCJjb25maXJtZWRZZWFyIiwidG9kYXlzQXBwb2ludG1lbnRzIiwiZ3JvdXAiLCJjYXJkUHJvcHMiLCJyb2xlIiwidGFiSW5kZXgiLCJhbGxvd0RlbGV0ZSIsIm9uS2V5RG93biIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzIiwic3RhdHVzTGFiZWwiLCJzZXJ2aWNlc0xpc3QiLCJwaG9uZUxhYmVsIiwiUGhvbmUiLCJwaG9uZUhyZWYiLCJfZXh0ZW5kcyIsIkN1c3RvbWVyTmFtZSIsIkJhcmJlciIsInN0b3BQcm9wYWdhdGlvbiIsInNlcnZpY2UiLCJpbmRleCIsImhyZWYiLCJVc2VySUQiLCJCYXJiZXJBdmF0YXJQaWNrZXIiLCJfcmVmMTciLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImF2YXRhck9wdGlvbnMiLCJzZXRBdmF0YXJPcHRpb25zIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInNob3dHYWxsZXJ5Iiwic2V0U2hvd0dhbGxlcnkiLCJub3JtYWxpemVkVmFsdWUiLCJhdmFpbGFibGVPcHRpb25zIiwiaXNNb3VudGVkIiwibG9hZCIsIl9yZWYxOCIsIl9jYWxsZWUyIiwiYXNzZXRzIiwiX3QiLCJfY29udGV4dDIiLCJwcmV2aWV3U3JjIiwic3JjIiwiYWx0IiwiZGlzYWJsZWQiLCJwcmVzZXQiLCJpc1NlbGVjdGVkIiwiUmF0aW5nU2xpZGVyIiwiX3JlZjE5IiwiX3JlZjE5JGRlbnNlIiwiZGVuc2UiLCJyYXRpbmdWYWx1ZSIsInRvRml4ZWQiLCJ3cmFwcGVyQ2xhc3MiLCJsYWJlbENsYXNzIiwic3RlcCIsIkJhcmJlcnNWaWV3IiwiX3JlZjIwIiwiX3dvcmtpbmdCYXJiZXIkbmFtZSIsIl93b3JraW5nQmFyYmVyJHBhc3N3byIsIl9yZWYyMCRiYXJiZXJzIiwiYmFyYmVycyIsIm9uRmllbGRDaGFuZ2UiLCJvblNhdmUiLCJvbkFkZCIsIm9uRGVsZXRlIiwiX3VzZVN0YXRlMTEiLCJ0YXJnZXRJZCIsIl91c2VTdGF0ZTEyIiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJkcmFmdEJhcmJlciIsInNldERyYWZ0QmFyYmVyIiwib3BlbkVkaXRvciIsImNsb3NlRWRpdG9yIiwiaXNDcmVhdGVNb2RlIiwiYWN0aXZlQmFyYmVyIiwiZmluZCIsIndvcmtpbmdCYXJiZXIiLCJoYW5kbGVGaWVsZENoYW5nZSIsImZpZWxkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU2F2ZSIsImhhbmRsZURlbGV0ZSIsInJlc3VsdCIsInJlbmRlclN0YXR1c0JhZGdlIiwiY2FuU3VibWl0IiwiYXZhdGFyU3JjIiwicmF0aW5nTGFiZWwiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJjaGVja2VkIiwiU2VydmljZXNWaWV3IiwiX3JlZjIxIiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUyIiwiX3dvcmtpbmdTZXJ2aWNlJGR1cmF0IiwiX3JlZjIxJHNlcnZpY2VzIiwic2VydmljZXMiLCJfcmVmMjEkYmFyYmVycyIsIm9uUHJpY2VDaGFuZ2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImRyYWZ0U2VydmljZSIsInNldERyYWZ0U2VydmljZSIsImFjdGl2ZVNlcnZpY2UiLCJ3b3JraW5nU2VydmljZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiX3dvcmtpbmdTZXJ2aWNlJG5hbWUiLCJoYW5kbGVEZWxldGVMb2NhbCIsInNlcnZpY2VQcmljZVN1bW1hcnkiLCJkZXRhaWxzIiwidmFsdWVzIiwiX3NlcnZpY2UkcHJpY2VzIiwicHJpY2UiLCJzdW1tYXJ5IiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlIiwiX3dvcmtpbmdTZXJ2aWNlJHByaWNlMiIsIk11bHRpU2VsZWN0Q2VsbCIsIl9yZWYyMiIsIl9yZWYyMiRvcHRpb25zIiwib25Db21taXQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwic2V0T3BlbiIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJkcmFmdCIsInNldERyYWZ0IiwiYW5jaG9yUmVmIiwiX3VzZVN0YXRlMjMiLCJ0b3AiLCJfdXNlU3RhdGUyNCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVQb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJuZXh0TGVmdCIsImlubmVyV2lkdGgiLCJuZXh0VG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJ0b2dnbGVPcHRpb24iLCJzdHlsZSIsImJvZHkiLCJUaW1lUmFuZ2VQaWNrZXIiLCJfcmVmMjMiLCJfcmVmMjMkdGl0bGUiLCJfcmVmMjMkcGxhY2Vob2xkZXIiLCJfcmVmMjMkYnV0dG9uQ2xhc3NOYW0iLCJidXR0b25DbGFzc05hbWUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIl91c2VTdGF0ZTI4JCIsIm5vcm1hbGl6ZUhvdXJWYWx1ZSIsImlucHV0VmFsdWUiLCJfaW5wdXRWYWx1ZSRzcGxpdCIsIl9pbnB1dFZhbHVlJHNwbGl0MiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbGVhciIsIkVkaXRhYmxlQ2VsbCIsIl9yZWYyNCIsImNvbHVtbiIsIm9uVXBkYXRlIiwidGFibGVJZCIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJjb21taXQiLCJvcHRpb25MaXN0Iiwib25CbHVyIiwiQ29sdW1uTWVudSIsIl9yZWYyNSIsImNvbHVtbnMiLCJfcmVmMjUkaGlkZGVuQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJvblRvZ2dsZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJNdWx0aVNlbGVjdENoZWNrYm94ZXMiLCJfcmVmMjYiLCJfcmVmMjYkb3B0aW9ucyIsIl9yZWYyNiR2YWx1ZSIsIl9yZWYyNiRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VsZWN0ZWQiLCJub3JtYWxpemVkUXVlcnkiLCJmaWx0ZXJlZCIsInRvZ2dsZSIsImV4aXN0cyIsIkNsaWVudExvb2t1cElucHV0IiwiX3JlZjI3IiwiX3JlZjI3JGxhYmVsIiwiX3JlZjI3JHZhbHVlIiwiX3JlZjI3JGNsaWVudHMiLCJjbGllbnRzIiwib25TZWxlY3RDbGllbnQiLCJfcmVmMjckcGxhY2Vob2xkZXIiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImNvbnRhaW5lclJlZiIsIm1hdGNoZXMiLCJzaG9ydGxpc3QiLCJjbGllbnQiLCJvbkZvY3VzIiwib25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0YXR1c01lbnUiLCJfcmVmMjgiLCJfcmVmMjgkc3RhdHVzZXMiLCJfcmVmMjgkaGlkZGVuU3RhdHVzZXMiLCJoaWRkZW5TdGF0dXNlcyIsIm9uUmVzZXQiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiVGFibGVUb29sYmFyIiwiX3JlZjI5Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZEJhcmJlciIsInNldFNlbGVjdGVkQmFyYmVyIiwidG9nZ2xlU3RhdHVzIiwicmVzZXRTdGF0dXNlcyIsInRvZ2dsZUNvbHVtbiIsIm9uT3BlbkNyZWF0ZSIsIm9uUmVmcmVzaCIsInNob3dQYXN0QXBwb2ludG1lbnRzIiwic2V0U2hvd1Bhc3RBcHBvaW50bWVudHMiLCJfcmVmMjkkc3VwcG9ydHNHcm91cGkiLCJzdXBwb3J0c0dyb3VwaW5nIiwiX3JlZjI5JGdyb3VwQnlEYXRlIiwiZ3JvdXBCeURhdGUiLCJzZXRHcm91cEJ5RGF0ZSIsIl9yZWYyOSRsYXN0VXBkYXRlZEF0IiwibGFzdFVwZGF0ZWRBdCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJidWlsZEFwcG9pbnRtZW50R3JvdXBzIiwicmVjb3JkcyIsInNvcnREaXJlY3Rpb24iLCJidWNrZXRzIiwiY29tcGFyZSIsIl9yZWYzMCIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDYiLCJfcmVmMzEiLCJzb3J0ZWRJdGVtcyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDQiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ1IiwicmVmZXJlbmNlIiwiTUlOX1NBRkVfSU5URUdFUiIsInJhbmRvbSIsInJlc29sdmVTb3J0VmFsdWUiLCJyb3ciLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ3IiwidHMiLCJTb3J0SW5kaWNhdG9yIiwiX3JlZjMyIiwiRGF0YVRhYmxlIiwiX3JlZjMzIiwic29ydENvbmZpZyIsIm9uU29ydCIsIl9yZWYzMyRncm91cEJ5RGF0ZSIsInZpc2libGVDb2x1bW5zIiwiaXNBcHBvaW50bWVudHNUYWJsZSIsImNhbkdyb3VwQXBwb2ludG1lbnRzIiwiZ3JvdXBlZFJvd3MiLCJfdmlzaWJsZUNvbHVtbnMkIiwiY2FyZEtleSIsInNvcnRhYmxlIiwiY29sU3BhbiIsIkNyZWF0ZVJlY29yZE1vZGFsIiwiX3JlZjM0IiwidGFibGVOYW1lIiwiX3JlZjM0JGNsaWVudHMiLCJfcmVmMzQkaGlkZGVuRmllbGRzIiwiaGlkZGVuRmllbGRzIiwiZWRpdGFibGVDb2x1bW5zIiwiaW5pdGlhbFN0YXRlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImlzQXBwb2ludG1lbnRzQ3JlYXRlIiwiaGFuZGxlU3VibWl0IiwiX3JlZjM1IiwiX3JlZjM2IiwiaGFuZGxlQ2xpZW50QXV0b0ZpbGwiLCJwcmVmZXJyZWRCYXJiZXIiLCJUZWxlZ3JhbUlEIiwic2VsZWN0ZWRWYWx1ZXMiLCJQcm9maWxlTW9kYWwiLCJfcmVmMzciLCJfc3RhdGUkZGF0YSIsIl9zdGF0ZSRkYXRhMiIsIl9zdGF0ZSRkYXRhMyIsIl9zdGF0ZSRkYXRhNCIsInN0YXRlIiwidmlzaXRIaXN0b3J5IiwiY3V0b2ZmIiwib3JkZXJOdW1iZXIiLCJkYXRlTGFiZWwiLCJ1c2VyIiwiTmFtZSIsImlzTGF0ZXN0IiwiQmFja3Vwc1BhbmVsIiwiX3JlZjM4IiwiX3JlZjM4JGJhY2t1cHMiLCJiYWNrdXBzIiwib25SZXN0b3JlIiwib25DcmVhdGUiLCJiYWNrdXAiLCJBcHBvaW50bWVudE1vZGFsIiwiX3JlZjM5IiwiX3JlZjM5JG9wdGlvbnMiLCJfcmVmMzkkY2FuRGVsZXRlIiwiY2FuRGVsZXRlIiwiX3JlZjM5JGlzTmV3IiwiaXNOZXciLCJfcmVmMzkkY2xpZW50cyIsImJ1aWxkRHJhZnQiLCJ1c2VySWQiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwic2VydmljZXNTZWxlY3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJUYWJsZXNXb3Jrc3BhY2UiLCJfcmVmNDAiLCJfVEFCTEVfQ09ORklHJGFjdGl2ZVQiLCJhcGlSZXF1ZXN0Iiwic2hhcmVkT3B0aW9ucyIsIm9uT3B0aW9uc1VwZGF0ZSIsIl9yZWY0MCRjbGllbnRzIiwiX3JlZjQwJGN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXIiLCJfcmVmNDAkbGl2ZUFwcG9pbnRtZW4iLCJsaXZlQXBwb2ludG1lbnRzIiwiX3JlZjQwJGxpdmVVcGRhdGVkQXQiLCJsaXZlVXBkYXRlZEF0IiwiX3JlZjQwJGJhcmJlcnMiLCJfcmVmNDAkc2VydmljZXMiLCJvbkJhcmJlckZpZWxkQ2hhbmdlIiwib25TYXZlQmFyYmVyIiwib25BZGRCYXJiZXIiLCJvbkRlbGV0ZUJhcmJlciIsIm9uU2VydmljZUZpZWxkQ2hhbmdlIiwib25TZXJ2aWNlUHJpY2VDaGFuZ2UiLCJvbkRlbGV0ZVNlcnZpY2UiLCJvbkFkZFNlcnZpY2UiLCJfcmVmNDAkcHJlZmVycmVkVGFibGUiLCJwcmVmZXJyZWRUYWJsZSIsIm9uUHJlZmVycmVkVGFibGVDb25zdW1lZCIsIl9yZWY0MCRvblJlcXVlc3RDb25maSIsIm9uUmVxdWVzdENvbmZpcm0iLCJfdXNlTG9jYWxTdG9yYWdlIiwiX3VzZUxvY2FsU3RvcmFnZTIiLCJhY3RpdmVUYWJsZSIsInNldEFjdGl2ZVRhYmxlIiwiX3VzZVN0YXRlNDUiLCJyZWR1Y2UiLCJhY2MiLCJ0YWJsZSIsIl91c2VTdGF0ZTQ2IiwidGFibGVzIiwic2V0VGFibGVzIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImRyb3Bkb3duT3B0aW9ucyIsInNldERyb3Bkb3duT3B0aW9ucyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJ0YWJsZUVycm9yIiwic2V0VGFibGVFcnJvciIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJfdXNlTG9jYWxTdG9yYWdlMyIsIl91c2VMb2NhbFN0b3JhZ2U0IiwiX3VzZUxvY2FsU3RvcmFnZTUiLCJfdXNlTG9jYWxTdG9yYWdlNiIsInNldEhpZGRlblN0YXR1c2VzIiwiX3VzZUxvY2FsU3RvcmFnZTciLCJfdXNlTG9jYWxTdG9yYWdlOCIsImhpZGRlbkNvbHVtbnNNYXAiLCJzZXRIaWRkZW5Db2x1bW5zTWFwIiwiX3VzZUxvY2FsU3RvcmFnZTkiLCJfVEFCTEVfQ09ORklHJHRhYmxlIiwiX3VzZUxvY2FsU3RvcmFnZTAiLCJzb3J0Q29uZmlncyIsInNldFNvcnRDb25maWdzIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImNyZWF0ZU1vZGFsT3BlbiIsInNldENyZWF0ZU1vZGFsT3BlbiIsIl91c2VMb2NhbFN0b3JhZ2UxIiwiX3VzZUxvY2FsU3RvcmFnZTEwIiwiX3VzZUxvY2FsU3RvcmFnZTExIiwiX3VzZUxvY2FsU3RvcmFnZTEyIiwiZ3JvdXBBcHBvaW50bWVudHNCeURhdGUiLCJzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsImFwcG9pbnRtZW50VGVtcGxhdGUiLCJ0b0lTT1N0cmluZyIsImV2ZXJ5IiwiZmV0Y2hUYWJsZXMiLCJfY2FsbGVlMyIsInJlc3BvbnNlcyIsIm5leHRUYWJsZXMiLCJyYXdPcHRpb25zIiwiX3QyIiwiX2NvbnRleHQzIiwiYWxsIiwiY3VycmVudENvbHVtbnMiLCJwcm9jZXNzZWRSb3dzIiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUMiIsInNvdXJjZSIsImNvbHVtbkRlZiIsImhhbmRsZVNvcnQiLCJjb2x1bW5LZXkiLCJoaWRkZW4iLCJzaXplIiwiaGFuZGxlVXBkYXRlIiwiX3JlZjQyIiwiX2NhbGxlZTQiLCJub3JtYWxpemVkRGF0YSIsIm9yaWdpbmFsIiwiX3QzIiwiX2NvbnRleHQ0IiwibGlzdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsIl94IiwiX3gyIiwiX3JlZjQzIiwiX2NhbGxlZTUiLCJfdDQiLCJfdDUiLCJfY29udGV4dDUiLCJfeDMiLCJoYW5kbGVDcmVhdGVSZWNvcmQiLCJfcmVmNDQiLCJfY2FsbGVlNiIsIm5vcm1hbGl6ZWRQYXlsb2FkIiwiX3Q2IiwiX2NvbnRleHQ2IiwiaGVhZGVycyIsIl94NCIsInRhYmxlU2V0dGluZ3MiLCJpc0N1c3RvbVRhYmxlIiwiX1RBQkxFX0NPTkZJRyR0YWJsZTIiLCJfcmVmNDUiLCJCb3RDb250cm9sVmlldyIsIl9yZWY0NiIsInNldHRpbmdzIiwiX3JlZjQ2JGJhY2t1cHMiLCJfcmVmNDYkbWVzc2FnZXMiLCJtZXNzYWdlcyIsIm9uVG9nZ2xlRW5hYmxlZCIsIm9uU3RhcnQiLCJvblN0b3AiLCJvblJlc3RhcnQiLCJvblNhdmVTZXR0aW5ncyIsIm9uU2F2ZU1lc3NhZ2UiLCJvblJlc3RvcmVCYWNrdXAiLCJvbkNyZWF0ZUJhY2t1cCIsImxpY2Vuc2VTdGF0dXMiLCJ1cGRhdGVJbmZvIiwib25SZWZyZXNoVXBkYXRlIiwib25BcHBseVVwZGF0ZSIsInN5c3RlbUJ1c3kiLCJfcmVmNDYkdmlld01vZGUiLCJ2aWV3TW9kZSIsIl91c2VTdGF0ZTU3IiwiYm90RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU1OCIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNTkiLCJhYm91dFRleHQiLCJfdXNlU3RhdGU2MCIsImFib3V0Iiwic2V0QWJvdXQiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMyIiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zMyIsInZhbGlkIiwibGljZW5zZSIsIm93bmVyIiwiZXhwaXJlc0F0IiwibnVtYmVyIiwidmVyc2lvbiIsImNoZWNrZWRBdCIsImF2YWlsYWJsZSIsInJ1bm5pbmciLCJpc0JvdEVuYWJsZWQiLCJMb2dpblNjcmVlbiIsIl9yZWY0NyIsIm9uTG9naW4iLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwidmFsaWRhdGlvbkVycm9yIiwic2V0VmFsaWRhdGlvbkVycm9yIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsImxvZ2luT3B0aW9ucyIsInNldExvZ2luT3B0aW9ucyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJvcHRpb25zRXJyb3IiLCJzZXRPcHRpb25zRXJyb3IiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwibG9hZGluZ09wdGlvbnMiLCJzZXRMb2FkaW5nT3B0aW9ucyIsImZldGNoT3B0aW9ucyIsIl9yZWY0OCIsIl9jYWxsZWU3IiwiX3Q3IiwiX2NvbnRleHQ3Iiwic2VsZWN0RGlzYWJsZWQiLCJvblN1Ym1pdCIsIkFwcCIsIl91c2VTdGF0ZTczIiwic2F2ZWQiLCJfdXNlU3RhdGU3NCIsInNldFNlc3Npb24iLCJfdXNlTG9jYWxTdG9yYWdlMTMiLCJfdXNlTG9jYWxTdG9yYWdlMTQiLCJzZXRBY3RpdmVUYWIiLCJfdXNlU3RhdGU3NSIsIl91c2VTdGF0ZTc2IiwicGVuZGluZ1RhYmxlVmlldyIsInNldFBlbmRpbmdUYWJsZVZpZXciLCJfdXNlU3RhdGU3NyIsIl91c2VTdGF0ZTc4IiwiZGFzaGJvYXJkIiwic2V0RGFzaGJvYXJkIiwiX3VzZVN0YXRlNzkiLCJfdXNlU3RhdGU4MCIsInNldFNlcnZpY2VzIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsInNldEJhcmJlcnMiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0IiwiYm90U3RhdHVzIiwic2V0Qm90U3RhdHVzIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsImJvdFNldHRpbmdzIiwic2V0Qm90U2V0dGluZ3MiLCJfdXNlU3RhdGU4NyIsIl91c2VTdGF0ZTg4IiwiYm90TWVzc2FnZXMiLCJzZXRCb3RNZXNzYWdlcyIsIl91c2VTdGF0ZTg5IiwiX3VzZVN0YXRlOTAiLCJzZXRMaWNlbnNlU3RhdHVzIiwiX3VzZVN0YXRlOTEiLCJfdXNlU3RhdGU5MiIsInNldFVwZGF0ZUluZm8iLCJfdXNlU3RhdGU5MyIsIl91c2VTdGF0ZTk0Iiwib3B0aW9uc0NhY2hlIiwic2V0T3B0aW9uc0NhY2hlIiwiX3VzZVN0YXRlOTUiLCJfdXNlU3RhdGU5NiIsInByb2ZpbGVNb2RhbCIsInNldFByb2ZpbGVNb2RhbCIsIl91c2VTdGF0ZTk3IiwiX3VzZVN0YXRlOTgiLCJhcHBvaW50bWVudE1vZGFsIiwic2V0QXBwb2ludG1lbnRNb2RhbCIsIl91c2VTdGF0ZTk5IiwiX3VzZVN0YXRlMTAwIiwiX3VzZVN0YXRlMTAxIiwiX3VzZVN0YXRlMTAyIiwiZ2xvYmFsRXJyb3IiLCJzZXRHbG9iYWxFcnJvciIsIl91c2VTdGF0ZTEwMyIsIl91c2VTdGF0ZTEwNCIsImF1dGhFcnJvciIsInNldEF1dGhFcnJvciIsIl91c2VTdGF0ZTEwNSIsIl91c2VTdGF0ZTEwNiIsInNldFN5c3RlbUJ1c3kiLCJfdXNlU3RhdGUxMDciLCJfdXNlU3RhdGUxMDgiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiX3VzZVN0YXRlMTA5IiwiX3VzZVN0YXRlMTEwIiwicmVhbHRpbWVTbmFwc2hvdCIsInNldFJlYWx0aW1lU25hcHNob3QiLCJfdXNlU3RhdGUxMTEiLCJfdXNlU3RhdGUxMTIiLCJmYXRhbEVycm9yIiwic2V0RmF0YWxFcnJvciIsIl91c2VTdGF0ZTExMyIsIl91c2VTdGF0ZTExNCIsImNvbmZpcm1EaWFsb2ciLCJzZXRDb25maXJtRGlhbG9nIiwiY29uZmlybVJlc29sdmVyUmVmIiwicmVxdWVzdENvbmZpcm0iLCJoYW5kbGVDb25maXJtUmVzdWx0IiwiaGFuZGxlUHJlZmVycmVkVGFibGVDb25zdW1lZCIsInNlcnZpY2VTYXZlVGltZXJzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9yZWY0OSIsIl9jYWxsZWU4IiwiZW5kcG9pbnQiLCJfb3B0aW9ucyRoZWFkZXJzIiwiX2FyZ3M4IiwiX2NvbnRleHQ4IiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRleHQiLCJfeDUiLCJmZXRjaEFsbCIsIl9jYWxsZWU5IiwiX292ZXJ2aWV3JGJvdCIsIm92ZXJ2aWV3Iiwid2l0aEZhbGxiYWNrIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInNlcnZpY2VzRnVsbCIsImJhcmJlcnNGdWxsIiwiYm90U3RhdGUiLCJib3RNZXNzYWdlc1BheWxvYWQiLCJ1cGRhdGUiLCJfdDgiLCJfY29udGV4dDkiLCJyZXF1ZXN0IiwiYm90IiwiRXZlbnRTb3VyY2UiLCJ0b2tlblBhcmFtIiwic3RyZWFtVXJsIiwiZXZlbnRTb3VyY2UiLCJoYW5kbGVFdmVudCIsIm9uZXJyb3IiLCJjbG9zZSIsIl9wcmV2JGFwcG9pbnRtZW50cyIsIm5leHRTdGF0cyIsIm5leHRBcHBvaW50bWVudHMiLCJoYW5kbGVHbG9iYWxFcnJvciIsImRldGFpbCIsInJlYXNvbiIsImNsZWFyVGltZW91dCIsImNsZWFyIiwiaGFuZGxlTG9naW4iLCJfcmVmNTEiLCJfY2FsbGVlMCIsIm5vcm1hbGl6ZWRVc2VybmFtZSIsInNlc3Npb25QYXlsb2FkIiwiX3Q5IiwiX2NvbnRleHQwIiwic3VjY2VzcyIsIl94NiIsIl94NyIsImhhbmRsZUJhcmJlckZpZWxkQ2hhbmdlIiwibm9ybWFsaXplU2VydmljZVBheWxvYWQiLCJmcm9tRW50cmllcyIsIl9yZWY1MiIsIl9yZWY1MyIsImRlcml2ZUJhcmJlckxvZ2luIiwiYmFyYmVyRGF0YSIsImJ1aWxkQmFyYmVyUGF5bG9hZCIsIl9iYXJiZXJEYXRhJG9yZGVySW5kZSIsImZhbGxiYWNrT3JkZXIiLCJuaWNrbmFtZSIsIm9yZGVySW5kZXgiLCJoYW5kbGVTYXZlQmFyYmVyIiwiX3JlZjU0IiwiX2NhbGxlZTEiLCJ1cGRhdGVkQmFyYmVyIiwiX3QwIiwiX2NvbnRleHQxIiwiX3g4IiwiaGFuZGxlRGVsZXRlQmFyYmVyIiwiX3JlZjU1IiwiX2NhbGxlZTEwIiwiX3QxIiwiX2NvbnRleHQxMCIsIl94OSIsImhhbmRsZUFkZEJhcmJlciIsIl9yZWY1NiIsIl9jYWxsZWUxMSIsIm5ld0JhcmJlclBheWxvYWQiLCJfdDEwIiwiX2NvbnRleHQxMSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl94MCIsImhhbmRsZVNhdmVTZXJ2aWNlIiwiX3JlZjU3IiwiX2NhbGxlZTEyIiwiX3QxMSIsIl9jb250ZXh0MTIiLCJfeDEiLCJzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSIsInRpbWVycyIsImV4aXN0aW5nVGltZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRGVsZXRlU2VydmljZSIsIl9yZWY1OCIsIl9jYWxsZWUxMyIsIl90MTIiLCJfY29udGV4dDEzIiwiX3gxMCIsImhhbmRsZUFkZFNlcnZpY2UiLCJfcmVmNTkiLCJfY2FsbGVlMTQiLCJfdDEzIiwiX2NvbnRleHQxNCIsIl94MTEiLCJoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UiLCJoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UiLCJzZXJ2aWNlSWQiLCJoYW5kbGVCb3RUb2dnbGUiLCJfcmVmNjAiLCJfY2FsbGVlMTUiLCJlbmFibGVkIiwiX3QxNCIsIl9jb250ZXh0MTUiLCJfeDEyIiwiaGFuZGxlQm90QWN0aW9uIiwiX3JlZjYxIiwiX2NhbGxlZTE2IiwiYWN0aW9uIiwiX3QxNSIsIl9jb250ZXh0MTYiLCJfeDEzIiwiaGFuZGxlU2F2ZVNldHRpbmdzIiwiX3JlZjYyIiwiX2NhbGxlZTE3IiwiX3QxNiIsIl9jb250ZXh0MTciLCJfeDE0IiwiaGFuZGxlU2F2ZU1lc3NhZ2UiLCJfcmVmNjMiLCJfY2FsbGVlMTgiLCJwZXJzaXN0IiwiX3QxNyIsIl9jb250ZXh0MTgiLCJjb2RlIiwiX3gxNSIsIl94MTYiLCJfeDE3IiwiaGFuZGxlUmVzdG9yZUJhY2t1cCIsIl9yZWY2NCIsIl9jYWxsZWUxOSIsImZpbGVuYW1lIiwiX3QxOCIsIl9jb250ZXh0MTkiLCJfeDE4IiwiaGFuZGxlQ3JlYXRlQmFja3VwIiwiX3JlZjY1IiwiX2NhbGxlZTIwIiwiX3QxOSIsIl9jb250ZXh0MjAiLCJvcGVuUHJvZmlsZSIsIl9yZWY2NiIsIl9jYWxsZWUyMSIsIl90MjAiLCJfY29udGV4dDIxIiwiX3gxOSIsImVuc3VyZU9wdGlvbnMiLCJfY2FsbGVlMjIiLCJfY29udGV4dDIyIiwiaGFuZGxlT3BlbkFwcG9pbnRtZW50IiwiX3JlZjY4IiwiX2NhbGxlZTIzIiwib3B0aW9uc0NvbmZpZyIsIl9hcmdzMjMiLCJfY29udGV4dDIzIiwiX3gyMCIsImhhbmRsZUNyZWF0ZUFwcG9pbnRtZW50IiwiX2NhbGxlZTI0IiwiX29wdGlvbnMkc3RhdHVzZXMiLCJ0b2RheSIsImRlZmF1bHRTdGF0dXMiLCJkZWZhdWx0QmFyYmVyIiwiX2NvbnRleHQyNCIsImhhbmRsZVNhdmVBcHBvaW50bWVudCIsIl9yZWY3MSIsIl9jYWxsZWUyNSIsIl9yZWY3MCIsIl90MjEiLCJfY29udGV4dDI1IiwiX3gyMSIsImhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IiwiX3JlZjcyIiwiX2NhbGxlZTI2IiwiX3QyMiIsIl9jb250ZXh0MjYiLCJfeDIyIiwiaGFuZGxlUmVmcmVzaFVwZGF0ZSIsIl9yZWY3MyIsIl9jYWxsZWUyNyIsImluZm8iLCJfdDIzIiwiX2NvbnRleHQyNyIsImhhbmRsZUFwcGx5VXBkYXRlIiwiX3JlZjc0IiwiX2NhbGxlZTI4IiwiX3QyNCIsIl9jb250ZXh0MjgiLCJwcmVmZXJyZWRUYWJsZVRhcmdldCIsInJlbmRlckFjdGl2ZSIsInJlbG9hZCIsInJlYWN0QXBwUm9vdCIsInJlbmRlckFwcCIsInJvb3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJub2RlIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsic2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIu+7v2NvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0LCBGcmFnbWVudCB9ID0gUmVhY3Q7XHJcbmNvbnN0IHsgY3JlYXRlUG9ydGFsLCBjcmVhdGVSb290IH0gPSBSZWFjdERPTTtcclxuXHJcbmNvbnN0IHJlc29sdmVEZWZhdWx0QXBpQmFzZVVybCA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGlgO1xyXG4gIH1cclxuICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknO1xyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfQkFTRV9VUkwgPSByZXNvbHZlRGVmYXVsdEFwaUJhc2VVcmwoKTtcclxuY29uc3QgQVBJX0JBU0VfVVJMID0gd2luZG93Ll9fQkFSQkVSX0FQSV9CQVNFX18gfHwgREVGQVVMVF9BUElfQkFTRV9VUkw7XHJcbndpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fID0gQVBJX0JBU0VfVVJMO1xyXG5cclxuY29uc3QgVklFV19UQUJTID0gW1xyXG4gIHsgaWQ6ICdkYXNoYm9hcmQnLCBsYWJlbDogJ9Ce0LHQt9C+0YAnIH0sXHJcbiAgeyBpZDogJ3RhYmxlcycsIGxhYmVsOiAn0JTQsNC90L3Ri9C1JyB9LFxyXG4gIHsgaWQ6ICdib3QnLCBsYWJlbDogJ9CR0L7RgicgfSxcclxuICB7IGlkOiAnc3lzdGVtJywgbGFiZWw6ICfQodC40YHRgtC10LzQsCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRBQkxFX09SREVSID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJywgJ0JhcmJlcnMnLCAnU2VydmljZXMnXTtcclxuY29uc3QgREFUQV9UQUJMRVMgPSBbJ0FwcG9pbnRtZW50cycsICdTY2hlZHVsZXMnLCAnVXNlcnMnXTtcclxuXHJcbmNvbnN0IFRBQkxFX0NPTkZJRyA9IHtcclxuICBBcHBvaW50bWVudHM6IHsgbGFiZWw6ICfQl9Cw0L/QuNGB0LgnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogdHJ1ZSwgc3VwcG9ydHNCYXJiZXJGaWx0ZXI6IHRydWUsIHN1cHBvcnRzU3RhdHVzRmlsdGVyOiB0cnVlLCBkZWZhdWx0U29ydDogeyBrZXk6ICdEYXRlJywgZGlyZWN0aW9uOiAnZGVzYycgfSB9LFxyXG4gIFNjaGVkdWxlczogeyBsYWJlbDogJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JywgbW9kZTogJ2RhdGEnLCBjYW5DcmVhdGU6IGZhbHNlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIFVzZXJzOiB7IGxhYmVsOiAn0JrQu9C40LXQvdGC0YsnLCBtb2RlOiAnZGF0YScsIGNhbkNyZWF0ZTogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnTmFtZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIEJhcmJlcnM6IHsgbGFiZWw6ICfQkdCw0YDQsdC10YDRiycsIG1vZGU6ICdjdXN0b20nIH0sXHJcbiAgU2VydmljZXM6IHsgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBtb2RlOiAnY3VzdG9tJyB9LFxyXG59O1xyXG5cclxuY29uc3QgVEFCTEVfQ09MVU1OUyA9IHtcclxuICBBcHBvaW50bWVudHM6IFtcclxuICAgIHsga2V5OiAnQ3VzdG9tZXJOYW1lJywgbGFiZWw6ICfQmtC70LjQtdC90YInLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDgnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdiYXJiZXJzJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnZGF0ZScsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnVGltZScsIGxhYmVsOiAn0JLRgNC10LzRjycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yOCcsIG5vV3JhcDogdHJ1ZSB9LFxyXG4gICAgeyBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ9Ch0YLQsNGC0YPRgScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ3N0YXR1c2VzJywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctMjgnIH0sXHJcbiAgICB7IGtleTogJ1NlcnZpY2VzJywgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ211bHRpLXNlbGVjdCcsIG9wdGlvbnNLZXk6ICdzZXJ2aWNlcycsIG1pbldpZHRoOiAndy01NicgfSxcclxuICAgIHsga2V5OiAnVXNlcklEJywgbGFiZWw6ICdJRCDQutC70LjQtdC90YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yNCcgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LrQu9C40LXQvdGC0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaEJhcmJlclNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LHQsNGA0LHQtdGA0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICBdLFxyXG4gIFNjaGVkdWxlczogW1xyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdEYXlPZldlZWsnLCBsYWJlbDogJ9CU0LXQvdGMINC90LXQtNC10LvQuCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdXZWVrJywgbGFiZWw6ICfQodC70L7RgtGLJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxuICBVc2VyczogW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICfQmNC80Y8nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnVGVsZWdyYW1JRCcsIGxhYmVsOiAnVGVsZWdyYW0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JvRjtCx0LjQvNGL0Lkg0LzQsNGB0YLQtdGAJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnYmFyYmVycycsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUkFUSU5HX01JTiA9IDM7XHJcbmNvbnN0IFJBVElOR19NQVggPSA1O1xyXG5jb25zdCBSQVRJTkdfU1RFUCA9IDAuNTtcclxubGV0IGF2YXRhck9wdGlvbnNDYWNoZSA9IG51bGw7XHJcbmNvbnN0IFlFQVJfSU5fTVMgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5jb25zdCBidWlsZE5ld0JhcmJlclN0YXRlID0gKCkgPT4gKHtcclxuICBuYW1lOiAnJyxcclxuICBwYXNzd29yZDogJycsXHJcbiAgcmF0aW5nOiAnNScsXHJcbiAgY29sb3I6ICcjNmQyOGQ5JyxcclxuICBhdmF0YXJVcmw6ICcnLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBwaG9uZTogJycsXHJcbiAgdGVsZWdyYW1JZDogJycsXHJcbiAgaXNBY3RpdmU6IHRydWUsXHJcbn0pO1xyXG5jb25zdCBidWlsZE5ld1NlcnZpY2VTdGF0ZSA9ICgpID0+ICh7XHJcbiAgbmFtZTogJycsXHJcbiAgZHVyYXRpb246IDYwLFxyXG4gIHByaWNlczoge30sXHJcbn0pO1xyXG5jb25zdCBkZWZhdWx0Q29uZmlybVN0YXRlID0ge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIHRpdGxlOiAnJyxcclxuICBtZXNzYWdlOiAnJyxcclxuICBjb25maXJtTGFiZWw6ICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMJyxcclxuICBjYW5jZWxMYWJlbDogJ9Ce0YLQvNC10L3QsCcsXHJcbiAgdG9uZTogJ25ldXRyYWwnLFxyXG59O1xyXG5jb25zdCBnZXRSZWNvcmRJZCA9IChyZWNvcmQgPSB7fSkgPT4gcmVjb3JkLmlkIHx8IHJlY29yZC5JZCB8fCByZWNvcmQuSUQgfHwgcmVjb3JkLnJlY29yZElkIHx8IHJlY29yZC5JRF9SZWNvcmQgfHwgbnVsbDtcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICByZXR1cm4gc3RvcmVkID8gSlNPTi5wYXJzZShzdG9yZWQpIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2UgcmVhZCBlcnJvcicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VDYWxsYmFjayhcclxuICAgICh1cGRhdGVyKSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKChwcmV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKHByZXYpIDogdXBkYXRlcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobmV4dFZhbHVlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIHdyaXRlIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBba2V5XVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBbdmFsdWUsIHVwZGF0ZVZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHVzZU5vd1RpY2sgPSAoaW50ZXJ2YWxNcyA9IDEwMDApID0+IHtcclxuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUoKCkgPT4gRGF0ZS5ub3coKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Tm93KERhdGUubm93KCkpLCBpbnRlcnZhbE1zKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbaW50ZXJ2YWxNc10pO1xyXG4gIHJldHVybiBub3c7XHJcbn07XHJcblxyXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBoYW5kbGVyKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuO1xyXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaEF2YXRhck9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2Fzc2V0cy9hdmF0YXJzYCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0YHQv9C40YHQvtC6INCw0LLQsNGC0LDRgNC+0LInKTtcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZC5pbWFnZXMpID8gcGF5bG9hZC5pbWFnZXMuZmlsdGVyKEJvb2xlYW4pLm1hcChub3JtYWxpemVJbWFnZVBhdGgpIDogW107XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChpbWFnZXMpKTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVRleHQgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBTdHJpbmcodmFsdWUpKTtcclxuY29uc3QgcmVzb2x2ZUFzc2V0VXJsID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnRyaW0oKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChub3JtYWxpemVkKSB8fCBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHJldHVybiBub3JtYWxpemVkO1xyXG4gIGNvbnN0IHNhbml0aXplZCA9IG5vcm1hbGl6ZWQucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC5cXC8rLywgJycpO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gc2FuaXRpemVkO1xyXG4gIGlmIChzYW5pdGl6ZWQuc3RhcnRzV2l0aCgnSW1hZ2UvJykpIHJldHVybiBgLyR7c2FuaXRpemVkfWA7XHJcbiAgcmV0dXJuIGAvSW1hZ2UvJHtzYW5pdGl6ZWR9YDtcclxufTtcclxuY29uc3Qgbm9ybWFsaXplSW1hZ2VQYXRoID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlQXNzZXRVcmwodmFsdWUpO1xyXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiAnJztcclxuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdChyZXNvbHZlZCkgfHwgcmVzb2x2ZWQuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIHJlc29sdmVkO1xyXG4gIHJldHVybiByZXNvbHZlZC5zdGFydHNXaXRoKCcvJykgPyByZXNvbHZlZCA6IGAvJHtyZXNvbHZlZH1gO1xyXG59O1xyXG5jb25zdCBudW1iZXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJyk7XHJcbmNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbnVtZXJpYyA9IE51bWJlcih2YWx1ZSk7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykpIHJldHVybiAnJztcclxuICByZXR1cm4gYCR7bnVtYmVyRm9ybWF0dGVyLmZvcm1hdChudW1lcmljKX0g4oK9YDtcclxufTtcclxuY29uc3QgcGx1cmFsaXplID0gKGNvdW50LCBbb25lLCBmZXcsIG1hbnldKSA9PiB7XHJcbiAgY29uc3QgbW9kMTAgPSBjb3VudCAlIDEwO1xyXG4gIGNvbnN0IG1vZDEwMCA9IGNvdW50ICUgMTAwO1xyXG4gIGlmIChtb2QxMCA9PT0gMSAmJiBtb2QxMDAgIT09IDExKSByZXR1cm4gb25lO1xyXG4gIGlmIChtb2QxMCA+PSAyICYmIG1vZDEwIDw9IDQgJiYgKG1vZDEwMCA8IDEwIHx8IG1vZDEwMCA+PSAyMCkpIHJldHVybiBmZXc7XHJcbiAgcmV0dXJuIG1hbnk7XHJcbn07XHJcblxyXG5jb25zdCBjYW5vbmljYWxpemVOYW1lID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9bXmEtejAtOdCwLdGP0ZFcXHNdL2dpLCAnJykudHJpbSgpO1xyXG5cclxuY29uc3QgcmVzb2x2ZUxvZ2luID0gKHZhbHVlKSA9PiBub3JtYWxpemVUZXh0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGJ1aWxkU2Vzc2lvblBheWxvYWQgPSAocGF5bG9hZCA9IHt9KSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZExvZ2luID0gcmVzb2x2ZUxvZ2luKHBheWxvYWQudXNlcm5hbWUgfHwgcGF5bG9hZC5sb2dpbik7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBheWxvYWQsXHJcbiAgICB1c2VybmFtZTogbm9ybWFsaXplZExvZ2luLFxyXG4gICAgZGlzcGxheU5hbWU6IHBheWxvYWQuZGlzcGxheU5hbWUgfHwgcGF5bG9hZC5uYW1lIHx8IG5vcm1hbGl6ZWRMb2dpbixcclxuICAgIGJhcmJlcklkOiBwYXlsb2FkLmJhcmJlcklkIHx8IHBheWxvYWQuaWQgfHwgbnVsbCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcGlja0JhcmJlckZvclVzZXIgPSAodXNlclNlc3Npb24sIGF2YWlsYWJsZUJhcmJlcnMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGZhbGxiYWNrID0gYXZhaWxhYmxlQmFyYmVycz8uWzBdIHx8ICcnO1xyXG4gIGlmICghdXNlclNlc3Npb24pIHJldHVybiBmYWxsYmFjaztcclxuICBjb25zdCBjYW5kaWRhdGVzID0gW3VzZXJTZXNzaW9uLmRpc3BsYXlOYW1lLCB1c2VyU2Vzc2lvbi5wcmVmZXJyZWROYW1lLCB1c2VyU2Vzc2lvbi51c2VybmFtZV1cclxuICAgIC5tYXAoKGNhbmRpZGF0ZSkgPT4gY2Fub25pY2FsaXplTmFtZShjYW5kaWRhdGUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIGlmICghY2FuZGlkYXRlcy5sZW5ndGggfHwgIWF2YWlsYWJsZUJhcmJlcnM/Lmxlbmd0aCkgcmV0dXJuIGZhbGxiYWNrO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gYXZhaWxhYmxlQmFyYmVycy5tYXAoKGJhcmJlcikgPT4gY2Fub25pY2FsaXplTmFtZShiYXJiZXIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcclxuICAgIGNvbnN0IG1hdGNoSW5kZXggPSBub3JtYWxpemVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uID09PSBjYW5kaWRhdGUpO1xyXG4gICAgaWYgKG1hdGNoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVCYXJiZXJzW21hdGNoSW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsbGJhY2s7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICctJztcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRUaW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZVZhbHVlID0gbm9ybWFsaXplVGV4dCh2YWx1ZSk7XHJcbiAgaWYgKCFzYWZlVmFsdWUpIHJldHVybiAnLSc7XHJcbiAgaWYgKHNhZmVWYWx1ZS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICByZXR1cm4gc2FmZVZhbHVlLnNwbGl0KCctJylbMF0udHJpbSgpO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVZhbHVlO1xyXG59O1xyXG5jb25zdCBmb3JtYXRQaG9uZUlucHV0ID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgZGlnaXRzID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG4gICAgLnJlcGxhY2UoL1teXFxkXS9nLCAnJylcclxuICAgIC50cmltKCk7XHJcbiAgaWYgKCFkaWdpdHMpIHJldHVybiAnJztcclxuICBsZXQgbm9ybWFsaXplZCA9IGRpZ2l0cztcclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDExICYmIG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnOCcpKSB7XHJcbiAgICBub3JtYWxpemVkID0gYDcke25vcm1hbGl6ZWQuc2xpY2UoMSl9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgbm9ybWFsaXplZCA9IGA3JHtub3JtYWxpemVkfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTEgJiYgbm9ybWFsaXplZC5zdGFydHNXaXRoKCc3JykpIHtcclxuICAgIHJldHVybiBgKzcgKCR7bm9ybWFsaXplZC5zbGljZSgxLCA0KX0pICR7bm9ybWFsaXplZC5zbGljZSg0LCA3KX0tJHtub3JtYWxpemVkLnNsaWNlKDcsIDkpfS0ke25vcm1hbGl6ZWQuc2xpY2UoOSwgMTEpfWA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzcnKSAmJiBub3JtYWxpemVkLmxlbmd0aCA+IDExKSB7XHJcbiAgICByZXR1cm4gYCske25vcm1hbGl6ZWR9YDtcclxuICB9XHJcbiAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnKycpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgcmV0dXJuIGArJHtub3JtYWxpemVkfWA7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChkYXRlLCB0aW1lKSA9PiB7XHJcbiAgY29uc3QgZGF0ZVBhcnQgPSBmb3JtYXREYXRlKGRhdGUpO1xyXG4gIGNvbnN0IHRpbWVQYXJ0ID0gZm9ybWF0VGltZSh0aW1lKTtcclxuICBpZiAoZGF0ZVBhcnQgPT09ICctJyAmJiB0aW1lUGFydCA9PT0gJy0nKSByZXR1cm4gJy0nO1xyXG4gIGlmIChkYXRlUGFydCA9PT0gJy0nKSByZXR1cm4gdGltZVBhcnQ7XHJcbiAgaWYgKHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiBkYXRlUGFydDtcclxuICByZXR1cm4gYCR7ZGF0ZVBhcnR9IHwgJHt0aW1lUGFydH1gO1xyXG59O1xyXG5jb25zdCBmb3JtYXREYXRlSGVhZGluZyA9ICh2YWx1ZSwgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9KSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHt2YWx1ZX1UMDA6MDA6MDBgKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiB2YWx1ZTtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCBvcHRpb25zKS5mb3JtYXQocGFyc2VkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufTtcclxuY29uc3QgZm9ybWF0RGF0ZUJhZGdlTGFiZWwgPSAodmFsdWUpID0+XHJcbiAgZm9ybWF0RGF0ZUhlYWRpbmcodmFsdWUsIHsgd2Vla2RheTogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnIH0pO1xyXG5jb25zdCBmb3JtYXRMaXZlVGltZXN0YW1wID0gKHZhbHVlLCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiAnJztcclxuICAgIGNvbnN0IGRpZmZNcyA9IE1hdGgubWF4KDAsIG5vd1RzIC0gcGFyc2VkLmdldFRpbWUoKSk7XHJcbiAgICBpZiAoZGlmZk1zIDwgMTAwMCkgcmV0dXJuICfRgtC+0LvRjNC60L4g0YfRgtC+JztcclxuICAgIGlmIChkaWZmTXMgPCA2MF8wMDApIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmZNcyAvIDEwMDApfSDRgdC10LpgO1xyXG4gICAgaWYgKGRpZmZNcyA8IDNfNjAwXzAwMCkge1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmTXMgLyA2MF8wMDApO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZk1zICUgNjBfMDAwKSAvIDEwMDApO1xyXG4gICAgICByZXR1cm4gYCR7bWludXRlc30g0LzQuNC9ICR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INGB0LXQumA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlmZk1zIDwgODZfNDAwXzAwMCkge1xyXG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gM182MDBfMDAwKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDNfNjAwXzAwMCkgLyA2MF8wMDApO1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9INGHICR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INC80LjQvWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkLnRvTG9jYWxlU3RyaW5nKCdydS1SVScsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNUQVRVU19UUkFOU0xBVElPTlMgPSB7XHJcbiAgYWN0aXZlOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgJ9Cw0LrRgtC40LLQvdCw0Y8nOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgY29uZmlybTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgY29uZmlybWVkOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICAn0L/QvtC00YLQstC10YDQttC00LXQvdC+JzogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCc6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGRvbmU6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNvbXBsZXRlOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZWQ6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGZpbmlzaGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICAn0LLRi9C/0L7Qu9C90LXQvdCwJzogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9C30LDQstC10YDRiNC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNhbmNlbDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgY2FuY2VsbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QsCc6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAn0L7RgtC80LXQvdC10L3Qvic6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAnbm8gc2hvdyc6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgJ25vLXNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIG5vc2hvdzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBtaXNzZWQ6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgcGVuZGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdDogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgcHJvY2Vzc2luZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbn07XHJcbmNvbnN0IFNUQVRVU19CQURHRV9NQVAgPSB7XHJcbiAg0JDQutGC0LjQstC90LDRjzogJ2JvcmRlciBib3JkZXItc2t5LTUwMC8zMCBiZy1za3ktNTAwLzEwIHRleHQtc2t5LTEwMCcsXHJcbiAg0J/QvtC00YLQstC10YDQttC00LXQvdCwOiAnYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMTAwJyxcclxuICDQl9Cw0LLQtdGA0YjQtdC90LA6ICdib3JkZXIgYm9yZGVyLWluZGlnby01MDAvMzAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnLFxyXG4gINCe0YLQvNC10L3QtdC90LA6ICdib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzMwIGJnLXJvc2UtNTAwLzEwIHRleHQtcm9zZS0xMDAnLFxyXG4gICfQndC1INC/0YDQuNGI0ZHQuyc6ICdib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCBiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0xMDAnLFxyXG59O1xyXG5jb25zdCBnZXRTdGF0dXNCYWRnZUNsYXNzZXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIFNUQVRVU19CQURHRV9NQVBbbm9ybWFsaXplZF0gfHwgJ2JvcmRlciBib3JkZXItc2xhdGUtNjAwLzYwIGJnLXNsYXRlLTgwMC83MCB0ZXh0LXNsYXRlLTIwMCdcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NhbmNlbCcsICfQvtGC0LzQtdC9JywgJ9C90LUg0L/RgNC40YgnLCAnbm9zaG93JywgJ25vLXNob3cnLCAnbWlzc2VkJywgJ9C/0YDQvtGB0YAnLCAnZXhwaXJlZCddO1xyXG5jb25zdCBBQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LDQutGC0LjQsicsICdhY3RpdmUnLCAn0L/QvtC00YLQstC10YDQticsICdjb25maXJtJywgJ9C+0LbQuNC0JywgJ3BlbmRpbmcnLCAnd2FpdCcsICfQttC00LXQvCcsICfQttC00ZHQvCcsICfQvdC+0LInLCAnbmV3J107XHJcbmNvbnN0IENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TID0gWyfQstGL0L/QvtC70L0nLCAn0LfQsNCy0LXRgNGIJywgJ2RvbmUnLCAnY29tcGxldGUnLCAn0LPQvtGC0L7QsiddO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzVmFsdWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQoc3RhdHVzKS50cmltKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgdHJhbnNsYXRlZCA9IFNUQVRVU19UUkFOU0xBVElPTlNbbm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpXTtcclxuICBpZiAodHJhbnNsYXRlZCkgcmV0dXJuIHRyYW5zbGF0ZWQ7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3JtYWxpemVkLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzTGlzdCA9IChzdGF0dXNlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcclxuICByZXR1cm4gc3RhdHVzZXNcclxuICAgIC5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSlcclxuICAgIC5maWx0ZXIoKHN0YXR1cykgPT4ge1xyXG4gICAgICBpZiAoIXN0YXR1cyB8fCBzZWVuLmhhcyhzdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHNlZW4uYWRkKHN0YXR1cyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSk7XHJcbn07XHJcblxyXG5jb25zdCBzYW5pdGl6ZVRpbWVUb2tlbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkubWF0Y2goLyhcXGR7MSwyfSk6KFxcZHsyfSkvKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaG91cnMgPSBtYXRjaFsxXS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBtYXRjaFsyXTtcclxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9b4oCU4oCTXS9nLCAnLScpO1xyXG4gIGlmICghc2FmZSkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcbiAgY29uc3QgW3Jhd1N0YXJ0LCByYXdFbmQgPSAnJ10gPSBzYWZlLnNwbGl0KCctJykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0OiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdTdGFydCksXHJcbiAgICBlbmQ6IHNhbml0aXplVGltZVRva2VuKHJhd0VuZCksXHJcbiAgfTtcclxufTtcclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VQYXJ0cyA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFRpbWVSYW5nZVZhbHVlID0gKHN0YXJ0LCBlbmQpID0+IHtcclxuICBjb25zdCBzYWZlU3RhcnQgPSBzYW5pdGl6ZVRpbWVUb2tlbihzdGFydCk7XHJcbiAgY29uc3Qgc2FmZUVuZCA9IHNhbml0aXplVGltZVRva2VuKGVuZCk7XHJcbiAgaWYgKHNhZmVTdGFydCAmJiBzYWZlRW5kKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gc2FmZVN0YXJ0IDw9IHNhZmVFbmQgPyBbc2FmZVN0YXJ0LCBzYWZlRW5kXSA6IFtzYWZlRW5kLCBzYWZlU3RhcnRdO1xyXG4gICAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVN0YXJ0IHx8ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRpbWVTdGFydCA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkuc3RhcnQ7XHJcblxyXG5jb25zdCBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZSA9IChkYXRlVmFsdWUsIHRpbWVWYWx1ZSwgZmFsbGJhY2tJc28pID0+IHtcclxuICBpZiAoZmFsbGJhY2tJc28pIHtcclxuICAgIGNvbnN0IHBhcnNlZEZhbGxiYWNrID0gbmV3IERhdGUoZmFsbGJhY2tJc28pO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkRmFsbGJhY2suZ2V0VGltZSgpKSkgcmV0dXJuIHBhcnNlZEZhbGxiYWNrO1xyXG4gIH1cclxuICBjb25zdCBkYXRlUGFydCA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKCFkYXRlUGFydCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBleHRyYWN0VGltZVN0YXJ0KHRpbWVWYWx1ZSkgfHwgJzAwOjAwJztcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHt0aW1lUGFydH06MDBgO1xyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XHJcbiAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWQ7XHJcbn07XHJcblxyXG5jb25zdCBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKElOQUNUSVZFX1NUQVRVU19UT0tFTlMuc29tZSgodG9rZW4pID0+IG5vcm1hbGl6ZWQuaW5jbHVkZXModG9rZW4pKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChBQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHNob3VsZERpc3BsYXlBcHBvaW50bWVudCA9IChhcHBvaW50bWVudCwgbm93VHMgPSBEYXRlLm5vdygpKSA9PiB7XHJcbiAgY29uc3Qgc3RhdHVzID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwb2ludG1lbnQuU3RhdHVzKTtcclxuICBpZiAoIWlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMoc3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gIGlmICghc3RhcnREYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIHN0YXJ0RGF0ZS5nZXRUaW1lKCkgPj0gbm93VHM7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZU11bHRpVmFsdWUgPSAodmFsdWUpID0+XHJcbiAgbm9ybWFsaXplVGV4dCh2YWx1ZSlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG5jb25zdCBMb2FkaW5nU3RhdGUgPSAoeyBsYWJlbCA9ICfQl9Cw0LPRgNGD0LbQsNGOINC00LDQvdC90YvQtS4uLicgfSA9IHt9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZVwiPntsYWJlbH08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBFcnJvckJhbm5lciA9ICh7IG1lc3NhZ2UgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC00IHB5LTMgdGV4dC13aGl0ZVwiPnttZXNzYWdlfTwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgU2VjdGlvbkNhcmQgPSAoeyB0aXRsZSwgYWN0aW9ucywgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTgwMC83MCBwLTYgc2hhZG93LWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAge2FjdGlvbnN9XHJcbiAgICA8L2Rpdj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTGl2ZUJhZGdlID0gKHsgdGltZXN0YW1wLCBsYWJlbCA9ICdMSVZFJyB9KSA9PiB7XHJcbiAgY29uc3QgdGlja2luZ05vdyA9IHVzZU5vd1RpY2soMTAwMCk7XHJcbiAgaWYgKCF0aW1lc3RhbXApIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHRpbWVMYWJlbCA9IGZvcm1hdExpdmVUaW1lc3RhbXAodGltZXN0YW1wLCB0aWNraW5nTm93KTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZW1lcmFsZC00MDAvNDAgYmctZW1lcmFsZC01MDAvMTAgcHgtMyBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1lbWVyYWxkLTIwMFwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLTIgdy0yIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNDAwXCIgLz5cclxuICAgICAge2xhYmVsfVxyXG4gICAgICB7dGltZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC0xMDAvODAgbm9ybWFsLWNhc2UgdHJhY2tpbmctbm9ybWFsXCI+e3RpbWVMYWJlbH08L3NwYW4+fVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJY29uVHJhc2ggPSAoeyBjbGFzc05hbWUgPSAnaC00IHctNCcgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgc3Ryb2tlV2lkdGg9XCIxLjZcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCIgLz5cclxuICAgIDxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIiAvPlxyXG4gICAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBNb2RhbCA9ICh7IHRpdGxlLCBpc09wZW4sIG9uQ2xvc2UsIGNoaWxkcmVuLCBmb290ZXIsIG1heFdpZHRoQ2xhc3MgPSAnbWF4LXctM3hsJyB9KSA9PiB7XHJcbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay82MCBweC00IHB5LTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYXgtaC1bOTB2aF0gdy1mdWxsICR7bWF4V2lkdGhDbGFzc30gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMCBzaGFkb3ctMnhsYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC02IHB5LTRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+eDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzcwdmhdIG92ZXJmbG93LXktYXV0byBweC02IHB5LTQgc3BhY2UteS00XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIHtmb290ZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS00XCI+e2Zvb3Rlcn08L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbmZpcm1EaWFsb2cgPSAoeyBvcGVuLCB0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsID0gJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLCBjYW5jZWxMYWJlbCA9ICfQntGC0LzQtdC90LAnLCB0b25lID0gJ25ldXRyYWwnLCBvblJlc3VsdCB9KSA9PiB7XHJcbiAgaWYgKCFvcGVuKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBjb25maXJtVG9uZUNsYXNzID0gKCgpID0+IHtcclxuICAgIHN3aXRjaCAodG9uZSkge1xyXG4gICAgICBjYXNlICdkYW5nZXInOlxyXG4gICAgICAgIHJldHVybiAnYmctcm9zZS02MDAgaG92ZXI6Ymctcm9zZS01MDAnO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2JnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2JnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTUwMCc7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgdGl0bGU9e3RpdGxlIHx8ICfQn9C+0LTRgtCy0LXRgNC00LjRgtC1INC00LXQudGB0YLQstC40LUnfVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBvblJlc3VsdChmYWxzZSl9XHJcbiAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy1tZFwiXHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdWx0KGZhbHNlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICB7Y2FuY2VsTGFiZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN1bHQodHJ1ZSl9IGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlICR7Y29uZmlybVRvbmVDbGFzc31gfT5cclxuICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj57bWVzc2FnZSB8fCAn0JLRiyDRg9Cy0LXRgNC10L3Riywg0YfRgtC+INGF0L7RgtC40YLQtSDQv9GA0L7QtNC+0LvQttC40YLRjD8nfTwvcD5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0YXRDYXJkID0gKHsgbGFiZWwsIHZhbHVlLCBhY2NlbnQgPSAndGV4dC1pbmRpZ28tMzAwJyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTMgc206cC00XCI+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+e2xhYmVsfTwvcD5cclxuICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXQtMSB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHNtOm10LTIgc206dGV4dC0zeGwnLCBhY2NlbnQpfT57dmFsdWV9PC9wPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IHNlc3Npb24sIGFjdGl2ZVRhYiwgb25DaGFuZ2UsIG9uTG9nb3V0IH0pID0+IHtcclxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICfigJQnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImhpZGRlbiB3LTcyIGZsZXgtc2hyaW5rLTAgZmxleC1jb2wgYm9yZGVyLXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvOTAgcC01IGxnOnN0aWNreSBsZzp0b3AtMCBsZzpmbGV4IGxnOmgtc2NyZWVuIGxnOm92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNTAwXCI+0JLRiyDQstC+0YjQu9C4INC60LDQujwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0xMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JLRi9C50YLQuFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02IGZsZXgtMSBzcGFjZS15LTIgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZT8uKHRhYi5pZCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3ctZnVsbCByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyAnYmctaW5kaWdvLTYwMC85MCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctaW5kaWdvLTkwMC80MCdcclxuICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwLzQwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMC82MCBob3Zlcjp0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTW9iaWxlVGFicyA9ICh7IHNlc3Npb24sIGFjdGl2ZVRhYiwgb25DaGFuZ2UsIG9uTG9nb3V0IH0pID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICfigJQnO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0YWJJZCkgPT4ge1xyXG4gICAgb25DaGFuZ2U/Lih0YWJJZCk7XHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMzAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgYmFja2Ryb3AtYmx1ciBsZzpoaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcC0yIHRleHQtc2xhdGUtMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cItCe0YLQutGA0YvRgtGMINC80LXQvdGOXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJoLTUgdy01XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTMuNzUgNi43NWgxNi41TTMuNzUgMTJoMTYuNU0zLjc1IDE3LjI1aDE2LjVcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj7QktGLINCy0L7RiNC70Lgg0LrQsNC6PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3Zlcjpib3JkZXItcm9zZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JLRi9C50YLQuFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KHRhYi5pZCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAnZmxleC0xIHdoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQnLFxyXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gdGFiLmlkID8gJ3RleHQtaW5kaWdvLTMwMCcgOiAndGV4dC1zbGF0ZS00MDAnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0YWIubGFiZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHttZW51T3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvOTAgcHgtNCBweS00XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0KDQsNC30LTQtdC70Ys8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cclxuICAgICAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KHRhYi5pZCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkJyxcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0YWIuaWQgPyAnYmctaW5kaWdvLTYwMC84MCB0ZXh0LXdoaXRlJyA6ICdiZy1zbGF0ZS04MDAvNzAgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YWIubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNTAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCS0YvQudGC0Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoeyBkYXRhLCBvbk9wZW5BcHBvaW50bWVudCwgb25PcGVuUHJvZmlsZSwgb25DcmVhdGVBcHBvaW50bWVudCwgbGl2ZU1ldGEgPSBudWxsIH0pID0+IHtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZ1N0YXRlIC8+O1xyXG4gIGNvbnN0IHN0YXRzID0gZGF0YS5zdGF0cyB8fCB7fTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdSYXcgPSBkYXRhLmFwcG9pbnRtZW50cz8udXBjb21pbmcgfHwgW107XHJcblxyXG4gIGNvbnN0IHVwY29taW5nTGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgbm93VHMgPSBEYXRlLm5vdygpO1xyXG4gICAgcmV0dXJuIHVwY29taW5nUmF3XHJcbiAgICAgIC5tYXAoKGFwcHQpID0+ICh7IC4uLmFwcHQsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpIH0pKVxyXG4gICAgICAuZmlsdGVyKChhcHB0KSA9PiBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQoYXBwdCwgbm93VHMpKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICB9KVxyXG4gICAgICAuc2xpY2UoMCwgMTIpO1xyXG4gIH0sIFt1cGNvbWluZ1Jhd10pO1xyXG5cclxuICBjb25zdCBmb3JtYXRHcm91cExhYmVsID0gdXNlQ2FsbGJhY2soKGRhdGVWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlVmFsdWUgfHwgZGF0ZVZhbHVlID09PSAn0JHQtdC3INC00LDRgtGLJykgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7ZGF0ZVZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gZGF0ZVZhbHVlO1xyXG4gICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBncm91cGVkVXBjb21pbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIHVwY29taW5nTGlzdC5mb3JFYWNoKChhcHB0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGFwcHQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgICAgY29uc3QgYnVja2V0ID0gZ3JvdXBzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBidWNrZXQucHVzaChhcHB0KTtcclxuICAgICAgZ3JvdXBzLnNldChrZXksIGJ1Y2tldCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3Vwcy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4gKHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgbGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwoa2V5KSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWU6IE1hdGgubWluKFxyXG4gICAgICAgICAgLi4uaXRlbXMubWFwKChpdGVtKSA9PiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShpdGVtLkRhdGUsIGl0ZW0uVGltZSwgaXRlbS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW2Zvcm1hdEdyb3VwTGFiZWwsIHVwY29taW5nTGlzdF0pO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0FjdGlvbnMgPVxyXG4gICAgbGl2ZU1ldGE/LnVwZGF0ZWRBdCB8fCBvbkNyZWF0ZUFwcG9pbnRtZW50XHJcbiAgICAgID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAge2xpdmVNZXRhPy51cGRhdGVkQXQgJiYgPExpdmVCYWRnZSB0aW1lc3RhbXA9e2xpdmVNZXRhLnVwZGF0ZWRBdH0gLz59XHJcbiAgICAgICAgICAgIHtvbkNyZWF0ZUFwcG9pbnRtZW50ICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlQXBwb2ludG1lbnR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgKyDQodC+0LfQtNCw0YLRjCDQt9Cw0L/QuNGB0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQu9GO0YfQtdCy0YvQtSDQv9C+0LrQsNC30LDRgtC10LvQuFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBzdGF0LWdyaWRcIj5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCS0YHQtdCz0L4g0LrQu9C40LXQvdGC0L7QslwiIHZhbHVlPXtzdGF0cy50b3RhbFVzZXJzID8/IDB9IC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQkNC60YLQuNCy0L3Ri9C1INC30LDQv9C40YHQuFwiIHZhbHVlPXtzdGF0cy5hY3RpdmVBcHBvaW50bWVudHMgPz8gMH0gYWNjZW50PVwidGV4dC1lbWVyYWxkLTMwMFwiIC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4g0LfQsCDQs9C+0LRcIiB2YWx1ZT17c3RhdHMuY29uZmlybWVkWWVhciA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCh0LXQs9C+0LTQvdGPXCIgdmFsdWU9e3N0YXRzLnRvZGF5c0FwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWN5YW4tMzAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCR0LvQuNC20LDQudGI0LjQtSDQt9Cw0L/QuNGB0LhcIiBhY3Rpb25zPXt1cGNvbWluZ0FjdGlvbnN9PlxyXG4gICAgICAgIHtncm91cGVkVXBjb21pbmcubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LHQu9C40LbQsNC50YjQuNGFINC30LDQv9C40YHQtdC5LjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAge2dyb3VwZWRVcGNvbWluZy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtncm91cC5pdGVtcy5tYXAoKGFwcHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0LCB7IGFsbG93RGVsZXRlOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiAoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBvbk9wZW5BcHBvaW50bWVudD8uKGFwcHQsIHsgYWxsb3dEZWxldGU6IHRydWUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdncm91cCB1cGNvbWluZy1jYXJkIHJlbGF0aXZlIHctZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNjAgYmctc2xhdGUtOTAwLzcwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206cC01JyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcGFyc2VUaW1lUmFuZ2VQYXJ0cyhhcHB0LlRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzTGlzdCA9IHBhcnNlTXVsdGlWYWx1ZShhcHB0LlNlcnZpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaG9uZUxhYmVsID0gYXBwdC5QaG9uZSA/IGZvcm1hdFBob25lSW5wdXQoYXBwdC5QaG9uZSkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaG9uZUhyZWYgPSBwaG9uZUxhYmVsID8gcGhvbmVMYWJlbC5yZXBsYWNlKC9bXlxcZCtdL2csICcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXBwdC5pZCB8fCBgJHtncm91cC5rZXl9LSR7YXBwdC5DdXN0b21lck5hbWV9LSR7YXBwdC5UaW1lfWB9IHsuLi5jYXJkUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMC84MCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZUJhZGdlTGFiZWwoYXBwdC5EYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtd2hpdGUgc206dGV4dC00eGxcIj57c3RhcnQgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW5kICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDAgc206dGV4dC1iYXNlXCI+0LTQviB7ZW5kfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGdhcC0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBzbTp0ZXh0LXhzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGF0dXNCYWRnZUNsYXNzZXMoc3RhdHVzTGFiZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzTGFiZWwgfHwgJ9CR0LXQtyDRgdGC0LDRgtGD0YHQsCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5CYXJiZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkdCw0YDQsdC10YA6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57YXBwdC5CYXJiZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGdyaWQgZ2FwLTMgdGV4dC1bMTNweF0gdGV4dC1zbGF0ZS0zMDAgdXBjb21pbmctY2FyZC1ncmlkIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtaW4tdy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5DdXN0b21lck5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT8uKGFwcHQuQ3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBzbTp0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkN1c3RvbWVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNtOnRleHQtbGdcIj7QkdC10Lcg0LjQvNC10L3QuDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtzZXJ2aWNlfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS04MDAvNzAgcHgtMyBweS0xIHRleHQtWzExcHhdIHRleHQtc2xhdGUtMjAwIHNtOnRleHQteHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHNtOnRleHQtc21cIj7QndC10YIg0LLRi9Cx0YDQsNC90L3Ri9GFINGD0YHQu9GD0LM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsICYmIHBob25lSHJlZiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke3Bob25lSHJlZn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAvNjAgcHgtMyBweS0xIHRleHQteHMgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZSBzbTp3LWF1dG8gc206anVzdGlmeS1zdGFydCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi4yNSA2Ljc1YzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMi4yNWEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNXYtMS4yNmExLjUgMS41IDAgMDAtMS4wOTMtMS40NGwtNC40NDMtMS4yN2ExLjUgMS41IDAgMDAtMS43MjYuNzUybC0uNzkgMS41OGExLjUgMS41IDAgMDEtMi4yNzguNTM2QTE1LjA1MiAxNS4wNTIgMCAwMTguMzUyIDE0LjRhMS41IDEuNSAwIDAxLjUzNi0yLjI3OGwxLjU4LS43OWExLjUgMS41IDAgMDAuNzUyLTEuNzI2bC0xLjI3LTQuNDQzQTEuNSAxLjUgMCAwMDkuNTEgNC4wN0g4LjI1QTIuMjUgMi4yNSAwIDAwNiA2LjMyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuVXNlcklEICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS01MDAgc206dGV4dC14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEINC60LvQuNC10L3RgtCwOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPnthcHB0LlVzZXJJRH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQmFyYmVyQXZhdGFyUGlja2VyID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbYXZhdGFyT3B0aW9ucywgc2V0QXZhdGFyT3B0aW9uc10gPSB1c2VTdGF0ZSgoKSA9PiBhdmF0YXJPcHRpb25zQ2FjaGUgfHwgW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0dhbGxlcnksIHNldFNob3dHYWxsZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gbm9ybWFsaXplSW1hZ2VQYXRoKHZhbHVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIG9uQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSW1hZ2VQYXRoKHZhbHVlKTtcclxuICAgIGlmIChub3JtYWxpemVkICYmIG5vcm1hbGl6ZWQgIT09IHZhbHVlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKG5vcm1hbGl6ZWQpO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZSwgb25DaGFuZ2VdKTtcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFub3JtYWxpemVkVmFsdWUgfHwgYXZhdGFyT3B0aW9ucy5pbmNsdWRlcyhub3JtYWxpemVkVmFsdWUpKSByZXR1cm4gYXZhdGFyT3B0aW9ucztcclxuICAgIHJldHVybiBbbm9ybWFsaXplZFZhbHVlLCAuLi5hdmF0YXJPcHRpb25zXTtcclxuICB9LCBbYXZhdGFyT3B0aW9ucywgbm9ybWFsaXplZFZhbHVlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0gYXdhaXQgZmV0Y2hBdmF0YXJPcHRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBhdmF0YXJPcHRpb25zQ2FjaGUgPSBhc3NldHM7XHJcbiAgICAgICAgc2V0QXZhdGFyT3B0aW9ucyhhc3NldHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F2YXRhciBsb2FkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbG9hZCgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcHJldmlld1NyYyA9IHJlc29sdmVBc3NldFVybChub3JtYWxpemVkVmFsdWUgfHwgYXZhdGFyT3B0aW9uc1swXSB8fCAnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICB7cHJldmlld1NyYyA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3U3JjfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IHctMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItc2xhdGUtNzAwIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTUwMFwiPlxyXG4gICAgICAgICAgICDQvdC10YIg0YTQvtGC0L5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPtCY0LfQvtCx0YDQsNC20LXQvdC40LUg0LjQtyDQv9Cw0L/QutC4IOKAnEltYWdl4oCdPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e25vcm1hbGl6ZWRWYWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2Uobm9ybWFsaXplSW1hZ2VQYXRoKGV2ZW50LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7QkdC10Lcg0LjQt9C+0LHRgNCw0LbQtdC90LjRjzwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7YXZhaWxhYmxlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5yZXBsYWNlKCcvSW1hZ2UvJywgJycpfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0dhbGxlcnkoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtc20gdGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMCBkaXNhYmxlZDp0ZXh0LXNsYXRlLTUwMFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZ1xyXG4gICAgICAgICAgICAgID8gJ9CX0LDQs9GA0YPQttCw0LXQvCDRgdC/0LjRgdC+0LonXHJcbiAgICAgICAgICAgICAgOiBhdmF0YXJPcHRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBzaG93R2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgICA/ICfQodC60YDRi9GC0Ywg0LPQsNC70LXRgNC10Y4nXHJcbiAgICAgICAgICAgICAgICAgIDogJ9Cf0L7QutCw0LfQsNGC0Ywg0LPQsNC70LXRgNC10Y4nXHJcbiAgICAgICAgICAgICAgICA6ICfQndC10YIg0YTQsNC50LvQvtCyINCyINC/0LDQv9C60LUgSW1hZ2UnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0dhbGxlcnkgJiYgYXZhdGFyT3B0aW9ucy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgc206Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgIHthdmF0YXJPcHRpb25zLm1hcCgocHJlc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwcmVzZXQgPT09IG5vcm1hbGl6ZWRWYWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGtleT17cHJlc2V0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UocHJlc2V0KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgYm9yZGVyIHAtMSB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOmJnLXNsYXRlLTgwMCAke1xyXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMjAnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc29sdmVBc3NldFVybChwcmVzZXQpfSBhbHQ9XCJhdmF0YXIgcHJlc2V0XCIgY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgcm91bmRlZC1tZCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshYXZhdGFyT3B0aW9ucy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7QsdCw0LLRjNGC0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQsiDQv9Cw0L/QutGDIC9JbWFnZSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDQsNCy0LDRgtCw0YAuPC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYXRpbmdTbGlkZXIgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRlbnNlID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJhdGluZ1ZhbHVlID0gTnVtYmVyKHZhbHVlIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgY29uc3Qgd3JhcHBlckNsYXNzID0gZGVuc2VcclxuICAgID8gJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTEuNSdcclxuICAgIDogJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTInO1xyXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBkZW5zZVxyXG4gICAgPyAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICA6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMCc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT5cclxuICAgICAgICA8c3Bhbj7QoNC10LnRgtC40L3Qszwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmF0aW5nVmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXtSQVRJTkdfTUlOfSBtYXg9e1JBVElOR19NQVh9IHN0ZXA9e1JBVElOR19TVEVQfSB2YWx1ZT17TnVtYmVyKHZhbHVlKSB8fCBSQVRJTkdfTUFYfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFyYmVyc1ZpZXcgPSAoeyBiYXJiZXJzID0gW10sIG9uRmllbGRDaGFuZ2UsIG9uU2F2ZSwgb25BZGQsIG9uRGVsZXRlIH0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcbiAgY29uc3QgW2RyYWZ0QmFyYmVyLCBzZXREcmFmdEJhcmJlcl0gPSB1c2VTdGF0ZShidWlsZE5ld0JhcmJlclN0YXRlKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRvciA9IChtb2RlLCB0YXJnZXRJZCA9IG51bGwpID0+IHtcclxuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICBzZXREcmFmdEJhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiB0cnVlLCBtb2RlLCB0YXJnZXRJZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUVkaXRvciA9ICgpID0+IHNldEVkaXRvclN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcblxyXG4gIGNvbnN0IGlzQ3JlYXRlTW9kZSA9IGVkaXRvclN0YXRlLm1vZGUgPT09ICdjcmVhdGUnO1xyXG4gIGNvbnN0IGFjdGl2ZUJhcmJlciA9IGJhcmJlcnMuZmluZCgoYmFyYmVyKSA9PiBiYXJiZXIuaWQgPT09IGVkaXRvclN0YXRlLnRhcmdldElkKSB8fCBudWxsO1xyXG4gIGNvbnN0IHdvcmtpbmdCYXJiZXIgPSBpc0NyZWF0ZU1vZGUgPyBkcmFmdEJhcmJlciA6IGFjdGl2ZUJhcmJlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0QmFyYmVyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB2YWx1ZSB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUJhcmJlcikge1xyXG4gICAgICBvbkZpZWxkQ2hhbmdlPy4oYWN0aXZlQmFyYmVyLmlkLCBmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIG9uQWRkPy4oZHJhZnRCYXJiZXIpO1xyXG4gICAgICBzZXREcmFmdEJhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVCYXJiZXIpIHtcclxuICAgICAgb25TYXZlPy4oYWN0aXZlQmFyYmVyKTtcclxuICAgIH1cclxuICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIGlmICghaXNDcmVhdGVNb2RlICYmIGFjdGl2ZUJhcmJlcikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb25EZWxldGU/LihhY3RpdmVCYXJiZXIpO1xuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmZpbmFsbHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0LmZpbmFsbHkoKCkgPT4gY2xvc2VFZGl0b3IoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZUVkaXRvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxyXG4gIGNvbnN0IHJlbmRlclN0YXR1c0JhZGdlID0gKGJhcmJlcikgPT5cclxuICAgIGJhcmJlciA/IChcclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAncm91bmRlZC1mdWxsIHB4LTIgcHktMC41IHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUnLFxyXG4gICAgICAgICAgYmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdiZy1lbWVyYWxkLTUwMC8xNSB0ZXh0LWVtZXJhbGQtMjAwJyA6ICdiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtiYXJiZXIuaXNBY3RpdmUgIT09IGZhbHNlID8gJ9CQ0LrRgtC40LLQtdC9JyA6ICfQodC60YDRi9GCJ31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IGNhblN1Ym1pdCA9IGlzQ3JlYXRlTW9kZSA/IEJvb2xlYW4od29ya2luZ0JhcmJlcj8ubmFtZT8udHJpbSgpICYmIHdvcmtpbmdCYXJiZXI/LnBhc3N3b3JkPy50cmltKCkpIDogQm9vbGVhbih3b3JraW5nQmFyYmVyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0JHQsNGA0LHQtdGA0YtcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdG9yKCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNjAwLzkwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3cgc2hhZG93LWVtZXJhbGQtOTAwLzQwIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7YmFyYmVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDQsdCw0YDQsdC10YDQvtCyINC/0L7QutCwINC/0YPRgdGCLiDQlNC+0LHQsNCy0YzRgtC1INC/0LXRgNCy0L7Qs9C+INGB0L7RgtGA0YPQtNC90LjQutCwLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXZhdGFyU3JjID0gcmVzb2x2ZUFzc2V0VXJsKGJhcmJlci5hdmF0YXJVcmwpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBob25lTGFiZWwgPSBiYXJiZXIucGhvbmUgPyBmb3JtYXRQaG9uZUlucHV0KGJhcmJlci5waG9uZSkgOiAnJztcclxuICAgICAgICAgICAgICBjb25zdCByYXRpbmdMYWJlbCA9IE51bWJlcihiYXJiZXIucmF0aW5nIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtiYXJiZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0b3IoJ2VkaXQnLCBiYXJiZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtOTAwLzUwIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTYgdy0xNiBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YXRhclNyYyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJTcmN9IGFsdD17YmFyYmVyLm5hbWUgfHwgJ2F2YXRhcid9IGNsYXNzTmFtZT1cImgtMTYgdy0xNiByb3VuZGVkLTJ4bCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiB3LTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLTJ4bCBiZy1zbGF0ZS04MDAgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoYmFyYmVyLm5hbWUgfHwgJ0InKS5zbGljZSgwLCAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIC1ib3R0b20tMSAtcmlnaHQtMSBoLTMgdy0zIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItc2xhdGUtOTAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZSA/ICdiZy1lbWVyYWxkLTQwMCcgOiAnYmctc2xhdGUtNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtMSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e2JhcmJlci5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclN0YXR1c0JhZGdlKGJhcmJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBnYXAteS0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDAgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMTAgcHgtMiBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWluZGlnby0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4piFIHtyYXRpbmdMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+e3Bob25lTGFiZWx9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtiYXJiZXIudGVsZWdyYW1JZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPkB7YmFyYmVyLnRlbGVncmFtSWR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YmFyYmVyLmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj57YmFyYmVyLmRlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwJyA6IHdvcmtpbmdCYXJiZXI/Lm5hbWUgfHwgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LHQsNGA0LHQtdGA0LAnfVxyXG4gICAgICAgIGlzT3Blbj17ZWRpdG9yU3RhdGUub3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZUVkaXRvcn1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctM3hsXCJcclxuICAgICAgICBmb290ZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFpc0NyZWF0ZU1vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZUVkaXRvcn0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA/ICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCcgOiAnYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNDcmVhdGVNb2RlID8gJ9CU0L7QsdCw0LLQuNGC0YwnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3dvcmtpbmdCYXJiZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLVttaW5tYXgoMCwyZnIpX21pbm1heCgwLDFmcildXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmNC80Y9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhdGluZ1NsaWRlciBkZW5zZSB2YWx1ZT17d29ya2luZ0JhcmJlci5yYXRpbmd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdyYXRpbmcnLCBldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIucGFzc3dvcmQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICDQptCy0LXRglxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsvXiMvLnRlc3Qod29ya2luZ0JhcmJlci5jb2xvciB8fCAnJykgPyB3b3JraW5nQmFyYmVyLmNvbG9yIDogJyM2ZDI4ZDknfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnY29sb3InLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTYgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBiZy10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ0JhcmJlci5kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnZGVzY3JpcHRpb24nLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXHJcbiAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dvcmtpbmdCYXJiZXIucGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgncGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQotC10LvQtdGE0L7QvVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nQmFyYmVyLnRlbGVncmFtSWQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgndGVsZWdyYW1JZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJhcmJlckF2YXRhclBpY2tlciB2YWx1ZT17d29ya2luZ0JhcmJlci5hdmF0YXJVcmx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUZpZWxkQ2hhbmdlKCdhdmF0YXJVcmwnLCB2YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt3b3JraW5nQmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmllbGRDaGFuZ2UoJ2lzQWN0aXZlJywgZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICAgINCQ0LrRgtC40LLQtdC9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwLCDRh9GC0L7QsdGLINC40LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1LjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzVmlldyA9ICh7IHNlcnZpY2VzID0gW10sIGJhcmJlcnMgPSBbXSwgb25GaWVsZENoYW5nZSwgb25QcmljZUNoYW5nZSwgb25EZWxldGUsIG9uQWRkIH0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UsIG1vZGU6ICdlZGl0JywgdGFyZ2V0SWQ6IG51bGwgfSk7XHJcbiAgY29uc3QgW2RyYWZ0U2VydmljZSwgc2V0RHJhZnRTZXJ2aWNlXSA9IHVzZVN0YXRlKGJ1aWxkTmV3U2VydmljZVN0YXRlKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRvciA9IChtb2RlLCB0YXJnZXRJZCA9IG51bGwpID0+IHtcclxuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoYnVpbGROZXdTZXJ2aWNlU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgICBzZXRFZGl0b3JTdGF0ZSh7IG9wZW46IHRydWUsIG1vZGUsIHRhcmdldElkIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdG9yID0gKCkgPT4gc2V0RWRpdG9yU3RhdGUoeyBvcGVuOiBmYWxzZSwgbW9kZTogJ2VkaXQnLCB0YXJnZXRJZDogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgaXNDcmVhdGVNb2RlID0gZWRpdG9yU3RhdGUubW9kZSA9PT0gJ2NyZWF0ZSc7XHJcbiAgY29uc3QgYWN0aXZlU2VydmljZSA9IHNlcnZpY2VzLmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2UuaWQgPT09IGVkaXRvclN0YXRlLnRhcmdldElkKSB8fCBudWxsO1xyXG4gIGNvbnN0IHdvcmtpbmdTZXJ2aWNlID0gaXNDcmVhdGVNb2RlID8gZHJhZnRTZXJ2aWNlIDogYWN0aXZlU2VydmljZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZSgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVTZXJ2aWNlKSB7XHJcbiAgICAgIG9uRmllbGRDaGFuZ2U/LihhY3RpdmVTZXJ2aWNlLmlkLCBmaWVsZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaWNlQ2hhbmdlID0gKGJhcmJlcklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlYXRlTW9kZSkge1xyXG4gICAgICBzZXREcmFmdFNlcnZpY2UoKHByZXYpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBwcmljZXM6IHsgLi4uKHByZXYucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVTZXJ2aWNlKSB7XHJcbiAgICAgIG9uUHJpY2VDaGFuZ2U/LihhY3RpdmVTZXJ2aWNlLmlkLCBiYXJiZXJJZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDcmVhdGVNb2RlKSB7XHJcbiAgICAgIGlmICghd29ya2luZ1NlcnZpY2U/Lm5hbWU/LnRyaW0oKSkgcmV0dXJuO1xyXG4gICAgICBvbkFkZD8uKGRyYWZ0U2VydmljZSk7XHJcbiAgICAgIHNldERyYWZ0U2VydmljZShidWlsZE5ld1NlcnZpY2VTdGF0ZSgpKTtcclxuICAgIH1cclxuICAgIGNsb3NlRWRpdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTG9jYWwgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0NyZWF0ZU1vZGUgJiYgYWN0aXZlU2VydmljZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb25EZWxldGU/LihhY3RpdmVTZXJ2aWNlKTtcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC5maW5hbGx5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC5maW5hbGx5KCgpID0+IGNsb3NlRWRpdG9yKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VFZGl0b3IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cclxuICBjb25zdCBzZXJ2aWNlUHJpY2VTdW1tYXJ5ID0gKHNlcnZpY2UpID0+IHtcclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBsYWJlbDogJ+KAlCcsIGRldGFpbHM6ICcnIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBiYXJiZXJzXHJcbiAgICAgIC5tYXAoKGJhcmJlcikgPT4gTnVtYmVyKHNlcnZpY2UucHJpY2VzPy5bYmFyYmVyLmlkXSkpXHJcbiAgICAgIC5maWx0ZXIoKHByaWNlKSA9PiBOdW1iZXIuaXNGaW5pdGUocHJpY2UpICYmIHByaWNlID49IDApO1xyXG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6ICfQptC10L3RiyDQvdC1INC30LDQtNCw0L3RiycsXHJcbiAgICAgICAgZGV0YWlsczogYmFyYmVycy5sZW5ndGggPyAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCcgOiAn0J3QtdGCINCx0LDRgNCx0LXRgNC+0LIg0LTQu9GPINC90LDQt9C90LDRh9C10L3QuNGPJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XHJcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4gICAgY29uc3QgY291bnQgPSB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IG1pbiA9PT0gbWF4ID8gZm9ybWF0Q3VycmVuY3kobWluKSA6IGAke2Zvcm1hdEN1cnJlbmN5KG1pbil9IOKAkyAke2Zvcm1hdEN1cnJlbmN5KG1heCl9YCxcclxuICAgICAgZGV0YWlsczogYNCU0LvRjyAke2NvdW50fSAke3BsdXJhbGl6ZShjb3VudCwgWyfQsdCw0YDQsdC10YDQsCcsICfQsdCw0YDQsdC10YDQsCcsICfQsdCw0YDQsdC10YDQvtCyJ10pfWAsXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5TdWJtaXQgPSBpc0NyZWF0ZU1vZGUgPyBCb29sZWFuKHdvcmtpbmdTZXJ2aWNlPy5uYW1lPy50cmltKCkpIDogdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZFxyXG4gICAgICAgIHRpdGxlPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignY3JlYXRlJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTYwMC85MCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93IHNoYWRvdy1lbWVyYWxkLTkwMC80MCBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzZXJ2aWNlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDRg9GB0LvRg9CzINC/0YPRgdGCLiDQlNC+0LHQsNCy0YzRgtC1INC/0LXRgNCy0YPRjiDRg9GB0LvRg9Cz0YMuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBzZXJ2aWNlUHJpY2VTdW1tYXJ5KHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRvcignZWRpdCcsIHNlcnZpY2UuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC83MCBiZy1zbGF0ZS05MDAvNTAgcC00IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LWxnXCI+e3NlcnZpY2UubmFtZSB8fCAn0JHQtdC3INC90LDQt9Cy0LDQvdC40Y8nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctc2xhdGUtODAwIHB4LTIgcHktMC41IHRleHQteHMgdGV4dC1zbGF0ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmR1cmF0aW9uID8gYCR7c2VydmljZS5kdXJhdGlvbn0g0LzQuNC9YCA6ICfigJQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTEwMFwiPntzdW1tYXJ5LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3N1bW1hcnkuZGV0YWlsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17aXNDcmVhdGVNb2RlID8gJ9Cd0L7QstCw0Y8g0YPRgdC70YPQs9CwJyA6IHdvcmtpbmdTZXJ2aWNlPy5uYW1lIHx8ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGD0YHQu9GD0LPQuCd9XHJcbiAgICAgICAgaXNPcGVuPXtlZGl0b3JTdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlRWRpdG9yfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy0zeGxcIlxyXG4gICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7IWlzQ3JlYXRlTW9kZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVMb2NhbH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VFZGl0b3J9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBjYW5TdWJtaXQgPyAnYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC01MDAnIDogJ2JnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzQ3JlYXRlTW9kZSA/ICfQlNC+0LHQsNCy0LjRgtGMJyA6ICfQk9C+0YLQvtCy0L4nfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHt3b3JraW5nU2VydmljZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JraW5nU2VydmljZS5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZSgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC/0YDQuNC80LXRgCwg0YHRgtGA0LjQttC60LBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjCwg0LzQuNC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbWluPXs1fVxyXG4gICAgICAgICAgICAgICAgICBzdGVwPXs1fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UuZHVyYXRpb24gPz8gJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmllbGRDaGFuZ2UoJ2R1cmF0aW9uJywgZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJyA/ICcnIDogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCm0LXQvdGLINC/0L4g0LHQsNGA0LHQtdGA0LDQvDwvcD5cclxuICAgICAgICAgICAgICB7YmFyYmVycy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtiYXJiZXIuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntiYXJiZXIubmFtZSB8fCAn0JHQtdC3INC40LzQtdC90LgnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29ya2luZ1NlcnZpY2UucHJpY2VzPy5bYmFyYmVyLmlkXSA/PyAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlUHJpY2VDaGFuZ2UoYmFyYmVyLmlkLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXJpZ2h0IHRleHQtc20gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QlNC+0LHQsNCy0YzRgtC1INCx0LDRgNCx0LXRgNC+0LIsINGH0YLQvtCx0Ysg0L3QsNC30L3QsNGH0LDRgtGMINGG0LXQvdGLLjwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0YPRgdC70YPQs9GDINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0Q2VsbCA9ICh7IHZhbHVlLCBvcHRpb25zID0gW10sIG9uQ29tbWl0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHRvcDogMCwgbGVmdDogMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghYW5jaG9yUmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3QgPSBhbmNob3JSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHBhbmVsV2lkdGggPSAzMjA7XHJcbiAgICBjb25zdCBwYW5lbEhlaWdodCA9IDM2MDtcclxuICAgIGNvbnN0IG5leHRMZWZ0ID0gTWF0aC5taW4ocmVjdC5sZWZ0LCB3aW5kb3cuaW5uZXJXaWR0aCAtIHBhbmVsV2lkdGggLSAxNik7XHJcbiAgICBjb25zdCBuZXh0VG9wID0gTWF0aC5taW4ocmVjdC5ib3R0b20gKyA4LCB3aW5kb3cuaW5uZXJIZWlnaHQgLSBwYW5lbEhlaWdodCAtIDE2KTtcclxuICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgdG9wOiBNYXRoLm1heCgxNiwgbmV4dFRvcCksXHJcbiAgICAgIGxlZnQ6IE1hdGgubWF4KDE2LCBuZXh0TGVmdCksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIH07XHJcbiAgfSwgW29wZW4sIHVwZGF0ZVBvc2l0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhvcHRpb24pID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4ucHJldiwgb3B0aW9uXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNvbW1pdChkcmFmdC5qb2luKCcsICcpKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSBkcmFmdC5sZW5ndGggPyBkcmFmdC5qb2luKCcsICcpIDogJ9CS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPQuCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWF4LWgtWzQwcHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2UtcHJlLXdyYXBcIj57c3VtbWFyeX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJlxyXG4gICAgICAgIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIG1heC13LXhzIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC85NSBwLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogYCR7cG9zaXRpb24udG9wfXB4YCwgbGVmdDogYCR7cG9zaXRpb24ubGVmdH1weGAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7Qo9GB0LvRg9Cz0Lg8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0xIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJhZnQocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOKclVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2RyYWZ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTIgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2RyYWZ0Lm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMjAgcHgtMiBweS0xIHRleHQteHMgdGV4dC1pbmRpZ28tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wdGlvbihzZXJ2aWNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IHNwYWNlLXktMSBvdmVyZmxvdy15LWF1dG8gcHItMVwiPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzPC9wPn1cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZHJhZnQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIHB4LTMgcHktMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC82MCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMiB0ZXh0LWxlZnRcIj57b3B0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0FjdGl2ZX0gb25DaGFuZ2U9eygpID0+IHRvZ2dsZU9wdGlvbihvcHRpb24pfSBjbGFzc05hbWU9XCJoLTQgdy00IHJvdW5kZWQgYm9yZGVyLXNsYXRlLTUwMCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldERyYWZ0KFtdKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaW1lUmFuZ2VQaWNrZXIgPSAoe1xyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHRpdGxlID0gJ9CS0YvQsdC+0YAg0LLRgNC10LzQtdC90LgnLFxyXG4gIHBsYWNlaG9sZGVyID0gJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJyxcclxuICBidXR0b25DbGFzc05hbWUgPSAndy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlIHdoaXRlc3BhY2Utbm93cmFwJyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbeyBzdGFydCwgZW5kIH0sIHNldERyYWZ0XSA9IHVzZVN0YXRlKCgpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplSG91clZhbHVlID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgW2hvdXJzXSA9IGlucHV0VmFsdWUuc3BsaXQoJzonKTtcclxuICAgIGlmICghaG91cnMpIHJldHVybiAnJztcclxuICAgIHJldHVybiBgJHtob3Vycy5wYWRTdGFydCgyLCAnMCcpfTowMGA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oYnVpbGRUaW1lUmFuZ2VWYWx1ZShzdGFydCwgZW5kKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oJycpO1xyXG4gICAgc2V0RHJhZnQoeyBzdGFydDogJycsIGVuZDogJycgfSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9PlxyXG4gICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogcGxhY2Vob2xkZXJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy1tZFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LLRgNC10LzRjyDQtNC70Y8g0L3QsNGH0LDQu9CwINC4INC30LDQstC10YDRiNC10L3QuNGPPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGVhcn0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGdhcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzYwIHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj7QodGC0LDRgNGCPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIzNjAwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBzdGFydDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IHRleHQtc2xhdGUtNTAwXCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwXCI+0KTQuNC90LjRiDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMzYwMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIGVuZDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5jb25zdCBFZGl0YWJsZUNlbGwgPSAoeyByZWNvcmQsIGNvbHVtbiwgb3B0aW9ucywgb25VcGRhdGUsIG9uT3BlblByb2ZpbGUsIHRhYmxlSWQgfSkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZElkID0gcmVjb3JkPy5pZCB8fCByZWNvcmQ/LklkIHx8IHJlY29yZD8uSUQgfHwgcmVjb3JkPy5yZWNvcmRJZDtcclxuICBjb25zdCB2YWx1ZSA9IHJlY29yZFtjb2x1bW4ua2V5XTtcclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHZhbHVlID8/ICcnKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgaWYgKCFjb2x1bW4uZWRpdGFibGUpIHtcclxuICAgIGlmIChjb2x1bW4uaXNQcm9maWxlTGluaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25PcGVuUHJvZmlsZT8uKHZhbHVlKX0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgIHt2YWx1ZSB8fCAnLSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgd2hpdGVzcGFjZS1ub3JtYWwgYnJlYWstd29yZHMgbGVhZGluZy10aWdodFwiPnt2YWx1ZSB8fCAnLSd9PC9zcGFuPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbW1pdCA9IChuZXh0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSBuZXh0VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5leHRWYWx1ZSA6IGRyYWZ0O1xyXG4gICAgaWYgKCh2YWx1ZSA/PyAnJykgPT09IChwYXlsb2FkID8/ICcnKSkgcmV0dXJuO1xyXG4gICAgb25VcGRhdGUocmVjb3JkSWQsIHsgW2NvbHVtbi5rZXldOiBwYXlsb2FkIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChcclxuICAgICh0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBjb2x1bW4ua2V5ID09PSAnVGltZScpIHx8XHJcbiAgICAodGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgJiYgY29sdW1uLmtleSA9PT0gJ1dlZWsnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gY29tbWl0KG5leHRWYWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLigJRcIlxyXG4gICAgICAgIHRpdGxlPXt0YWJsZUlkID09PSAnU2NoZWR1bGVzJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlXCJcclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XHJcbiAgICBjYXNlICdzZWxlY3QnOiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkxpc3QgPSBjb2x1bW4ub3B0aW9uc0tleSA/IG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdIDogW107XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgIHtvcHRpb25MaXN0Lm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAnMSd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQuY2hlY2tlZCA/ICd0cnVlJyA6ICcnKX0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApO1xyXG4gICAgY2FzZSAnbXVsdGktc2VsZWN0JzpcclxuICAgICAgcmV0dXJuIDxNdWx0aVNlbGVjdENlbGwgdmFsdWU9e3ZhbHVlfSBvcHRpb25zPXtvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXX0gb25Db21taXQ9e2NvbW1pdH0gLz47XHJcbiAgICBjYXNlICdkYXRlJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17dmFsdWUgPyBTdHJpbmcodmFsdWUpLnNsaWNlKDAsIDEwKSA6ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb21taXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZHJhZnQgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG9uQmx1cj17KCkgPT4gY29tbWl0KCl9IG9uS2V5RG93bj17KGV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgY29tbWl0KCl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb2x1bW5NZW51ID0gKHsgY29sdW1ucywgaGlkZGVuQ29sdW1ucyA9IFtdLCBvblRvZ2dsZSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VPdXRzaWRlQ2xpY2socmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgINCf0L7Qu9GPXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTMwIG10LTIgdy01NiBzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHAtMyBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpfSBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUoY29sdW1uLmtleSl9IC8+XHJcbiAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0Q2hlY2tib3hlcyA9ICh7IGxhYmVsLCBvcHRpb25zID0gW10sIHZhbHVlID0gW10sIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciA9ICfQndC10YIg0LTQsNC90L3Ri9GFJyB9KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgc2VsZWN0ZWQgPSB1c2VNZW1vKCgpID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogcGFyc2VNdWx0aVZhbHVlKHZhbHVlKSksIFt2YWx1ZV0pO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRRdWVyeSkgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KSk7XHJcbiAgfSwgW29wdGlvbnMsIG5vcm1hbGl6ZWRRdWVyeV0pO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAob3B0aW9uKSA9PiB7XHJcbiAgICBpZiAoIW9uQ2hhbmdlKSByZXR1cm47XHJcbiAgICBjb25zdCBleGlzdHMgPSBzZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgY29uc3QgbmV4dCA9IGV4aXN0cyA/IHNlbGVjdGVkLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gb3B0aW9uKSA6IFsuLi5zZWxlY3RlZCwgb3B0aW9uXTtcclxuICAgIG9uQ2hhbmdlKG5leHQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICB7bGFiZWwgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntzZWxlY3RlZC5sZW5ndGggPyBgJHtzZWxlY3RlZC5sZW5ndGh9INCy0YvQsdGA0LDQvdC+YCA6ICfQndC1INCy0YvQsdGA0LDQvdC+J308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICB7c2VsZWN0ZWQubWFwKChzZXJ2aWNlKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMTAgcHgtMiBweS0xIHRleHQteHMgdGV4dC1pbmRpZ28tMjAwXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoc2VydmljZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC0zIHB5LTJcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zbGF0ZS00MDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsxLjV9IGQ9XCJNMjEgMjFsLTQuMzUtNC4zNW0wIDBBNy41IDcuNSAwIDEwMTYuNjUgMTYuNjV6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INGD0YHQu9GD0LPQuFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3F1ZXJ5ICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoJycpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IG92ZXJmbG93LXktYXV0byBwLTJcIj5cclxuICAgICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTEgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e3BsYWNlaG9sZGVyfTwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMSBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBzZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShvcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNDAnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1pbmRpZ28tMzAwXCI+4pyTPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENsaWVudExvb2t1cElucHV0ID0gKHtcclxuICBsYWJlbCA9ICfQmtC70LjQtdC90YInLFxyXG4gIHZhbHVlID0gJycsXHJcbiAgb25DaGFuZ2UsXHJcbiAgY2xpZW50cyA9IFtdLFxyXG4gIG9uU2VsZWN0Q2xpZW50LFxyXG4gIHBsYWNlaG9sZGVyID0gJ9Cd0LDRh9C90LjRgtC1INCy0LLQvtC00LjRgtGMINC40LzRjyDQuNC70Lgg0YLQtdC70LXRhNC+0L0nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCAnJyk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFF1ZXJ5KHZhbHVlIHx8ICcnKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQocXVlcnkpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBzaG9ydGxpc3QgPSBub3JtYWxpemVkXHJcbiAgICAgID8gY2xpZW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoY2xpZW50KSA9PlxyXG4gICAgICAgICAgICBub3JtYWxpemVUZXh0KGNsaWVudC5uYW1lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWQpIHx8XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50LnBob25lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWQpXHJcbiAgICAgICAgKVxyXG4gICAgICA6IGNsaWVudHM7XHJcbiAgICByZXR1cm4gc2hvcnRsaXN0LnNsaWNlKDAsIDYpO1xyXG4gIH0sIFtjbGllbnRzLCBxdWVyeV0pO1xyXG5cclxuICB1c2VPdXRzaWRlQ2xpY2soY29udGFpbmVyUmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGNsaWVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV4dFZhbHVlID0gY2xpZW50Py5uYW1lIHx8ICcnO1xyXG4gICAgc2V0UXVlcnkobmV4dFZhbHVlKTtcclxuICAgIG9uQ2hhbmdlPy4obmV4dFZhbHVlKTtcclxuICAgIG9uU2VsZWN0Q2xpZW50Py4oY2xpZW50KTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktMVwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuICAgICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIG9uQ2hhbmdlPy4oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAvPlxyXG4gICAgICB7b3BlbiAmJiBtYXRjaGVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0zMCBtdC0xIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC85NSBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7bWF0Y2hlcy5tYXAoKGNsaWVudCkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAga2V5PXtjbGllbnQuaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtc3RhcnQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC1zbGF0ZS0yMDAgbGFzdDpib3JkZXItbm9uZSBob3ZlcjpiZy1zbGF0ZS04MDBcIlxyXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KGNsaWVudCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2NsaWVudC5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57Y2xpZW50LnBob25lIHx8ICfQotC10LvQtdGE0L7QvSDQvdC1INGD0LrQsNC30LDQvSd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0YXR1c01lbnUgPSAoeyBzdGF0dXNlcyA9IFtdLCBoaWRkZW5TdGF0dXNlcyA9IFtdLCBvblRvZ2dsZSwgb25SZXNldCB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VPdXRzaWRlQ2xpY2socmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgINCh0YLQsNGC0YPRgdGLXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTMwIG10LTIgdy01NiBzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHAtMyBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7c3RhdHVzZXMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QndC10YIg0YHRgtCw0YLRg9GB0L7QsjwvcD59XHJcbiAgICAgICAgICB7c3RhdHVzZXMubWFwKChzdGF0dXMpID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17c3RhdHVzfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyFoaWRkZW5TdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpfSBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUoc3RhdHVzKX0gLz5cclxuICAgICAgICAgICAgICB7c3RhdHVzfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzZXR9IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGFibGVUb29sYmFyID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHNlYXJjaFRlcm0sXHJcbiAgc2V0U2VhcmNoVGVybSxcclxuICBzdXBwb3J0c0JhcmJlckZpbHRlcixcclxuICBzZWxlY3RlZEJhcmJlcixcclxuICBzZXRTZWxlY3RlZEJhcmJlcixcclxuICBiYXJiZXJzLFxyXG4gIHN1cHBvcnRzU3RhdHVzRmlsdGVyLFxyXG4gIHN0YXR1c2VzLFxyXG4gIGhpZGRlblN0YXR1c2VzLFxyXG4gIHRvZ2dsZVN0YXR1cyxcclxuICByZXNldFN0YXR1c2VzLFxyXG4gIGNvbHVtbnMsXHJcbiAgaGlkZGVuQ29sdW1ucyxcclxuICB0b2dnbGVDb2x1bW4sXHJcbiAgY2FuQ3JlYXRlLFxyXG4gIG9uT3BlbkNyZWF0ZSxcclxuICBvblJlZnJlc2gsXHJcbiAgc2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc3VwcG9ydHNHcm91cGluZyA9IGZhbHNlLFxyXG4gIGdyb3VwQnlEYXRlID0gZmFsc2UsXHJcbiAgc2V0R3JvdXBCeURhdGUsXHJcbiAgbGFzdFVwZGF0ZWRBdCA9IG51bGwsXHJcbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbGc6ZmxleC1yb3cgbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LXdyYXAgZ2FwLTNcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBzbTp3LTY0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNOSAzLjVhNS41IDUuNSAwIDAxMy45OTUgOS4zMTVsMy4wOTUgMy4wOTVhLjc1Ljc1IDAgMTEtMS4wNiAxLjA2bC0zLjA5NS0zLjA5NEE1LjUgNS41IDAgMTE5IDMuNXptMCAxLjVhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cItCf0L7QuNGB0Log0L/QviDRgtCw0LHQu9C40YbQtVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHktMiBwbC05IHByLTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMC80MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAge3N1cHBvcnRzQmFyYmVyRmlsdGVyICYmIChcclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZEJhcmJlcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VsZWN0ZWRCYXJiZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj7QktGB0LUg0LHQsNGA0LHQtdGA0Ys8L29wdGlvbj5cclxuICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdXBwb3J0c1N0YXR1c0ZpbHRlciAmJiAoXHJcbiAgICAgICAgPFN0YXR1c01lbnUgc3RhdHVzZXM9e3N0YXR1c2VzfSBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9IG9uVG9nZ2xlPXt0b2dnbGVTdGF0dXN9IG9uUmVzZXQ9e3Jlc2V0U3RhdHVzZXN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiB0eXBlb2Ygc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMgPT09ICdmdW5jdGlvbicgJiYgKFxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhc2hvd1Bhc3RBcHBvaW50bWVudHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNob3dQYXN0QXBwb2ludG1lbnRzKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINC/0YDQvtGI0LXQtNGI0LjQtVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdXBwb3J0c0dyb3VwaW5nICYmIHR5cGVvZiBzZXRHcm91cEJ5RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAoXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17ISFncm91cEJ5RGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R3JvdXBCeURhdGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgINCT0YDRg9C/0L/QuNGA0L7QstCw0YLRjCDQv9C+INC00L3Rj9C8XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgKX1cclxuICAgICAgPENvbHVtbk1lbnUgY29sdW1ucz17Y29sdW1uc30gaGlkZGVuQ29sdW1ucz17aGlkZGVuQ29sdW1uc30gb25Ub2dnbGU9e3RvZ2dsZUNvbHVtbn0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAge2xhc3RVcGRhdGVkQXQgJiYgPExpdmVCYWRnZSB0aW1lc3RhbXA9e2xhc3RVcGRhdGVkQXR9IC8+fVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVmcmVzaH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgINCe0LHQvdC+0LLQuNGC0YxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtjYW5DcmVhdGUgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25PcGVuQ3JlYXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMgPSAocmVjb3JkcyA9IFtdLCBzb3J0RGlyZWN0aW9uID0gJ2Rlc2MnKSA9PiB7XHJcbiAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICByZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gcmVjb3JkLkRhdGUgfHwgJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgYnVja2V0LnB1c2gocmVjb3JkKTtcclxuICAgIGJ1Y2tldHMuc2V0KGtleSwgYnVja2V0KTtcclxuICB9KTtcclxuICBjb25zdCBjb21wYXJlID0gc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAoYSwgYikgPT4gYSAtIGIgOiAoYSwgYikgPT4gYiAtIGE7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oYnVja2V0cy5lbnRyaWVzKCkpXHJcbiAgICAubWFwKChba2V5LCBpdGVtc10pID0+IHtcclxuICAgICAgY29uc3Qgc29ydGVkSXRlbXMgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYS5EYXRlLCBhLlRpbWUsIGEuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBjb25zdCByaWdodCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGIuRGF0ZSwgYi5UaW1lLCBiLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUobGVmdCwgcmlnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkSXRlbXNbMF07XHJcbiAgICAgIGNvbnN0IHNvcnRWYWx1ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKHJlZmVyZW5jZS5EYXRlLCByZWZlcmVuY2UuVGltZSwgcmVmZXJlbmNlLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBrZXkgfHwgYG5vLWRhdGUtJHtyZWZlcmVuY2U/LmlkIHx8IE1hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSxcclxuICAgICAgICByb3dzOiBzb3J0ZWRJdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5zb3J0VmFsdWUsIGIuc29ydFZhbHVlKSk7XHJcbn07XHJcbmNvbnN0IHJlc29sdmVTb3J0VmFsdWUgPSAocm93LCBjb2x1bW4sIHRhYmxlSWQpID0+IHtcclxuICBpZiAoIWNvbHVtbikgcmV0dXJuIG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbj8ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxuICBpZiAodGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgY29sdW1uLmtleSA9PT0gJ0RhdGUnKSB7XHJcbiAgICByZXR1cm4gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocm93LkRhdGUsIHJvdy5UaW1lLCByb3cuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCAwO1xyXG4gIH1cclxuICBpZiAoY29sdW1uLnR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgY29uc3QgdHMgPSBuZXcgRGF0ZShyb3dbY29sdW1uLmtleV0pLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odHMpID8gMCA6IHRzO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHJvd1tjb2x1bW4ua2V5XSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiByb3dbY29sdW1uLmtleV07XHJcbiAgfVxyXG4gIGlmIChjb2x1bW4udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICByZXR1cm4gcm93W2NvbHVtbi5rZXldID8gMSA6IDA7XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxpemVUZXh0KHJvd1tjb2x1bW4ua2V5XSkudG9Mb3dlckNhc2UoKTtcclxufTtcclxuY29uc3QgU29ydEluZGljYXRvciA9ICh7IGRpcmVjdGlvbiB9KSA9PiAoXHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZWFkaW5nLVs2cHhdXCI+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTMgdy0zIHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnYXNjJyAmJiAndGV4dC1pbmRpZ28tMzAwJyl9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNCAxMGw0LTQgNCA0XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgLW10LTAuNSB0ZXh0LXNsYXRlLTYwMCcsIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDZsNCA0IDQtNFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9zcGFuPlxyXG4pO1xyXG5jb25zdCBEYXRhVGFibGUgPSAoe1xyXG4gIHRhYmxlSWQsXHJcbiAgcm93cyxcclxuICBjb2x1bW5zLFxyXG4gIGhpZGRlbkNvbHVtbnMsXHJcbiAgc29ydENvbmZpZyxcclxuICBvblNvcnQsXHJcbiAgb25VcGRhdGUsXHJcbiAgb25EZWxldGUsXHJcbiAgb3B0aW9ucyxcclxuICBvbk9wZW5Qcm9maWxlLFxyXG4gIGdyb3VwQnlEYXRlID0gdHJ1ZSxcclxufSkgPT4ge1xyXG4gIGlmICghcm93cy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQt9Cw0L/QuNGB0LXQuS48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4ua2V5KSk7XHJcbiAgY29uc3QgaXNBcHBvaW50bWVudHNUYWJsZSA9IHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnO1xyXG4gIGNvbnN0IGNhbkdyb3VwQXBwb2ludG1lbnRzID0gaXNBcHBvaW50bWVudHNUYWJsZSAmJiBncm91cEJ5RGF0ZSAmJiAoIXNvcnRDb25maWcgfHwgc29ydENvbmZpZy5rZXkgPT09ICdEYXRlJyk7XHJcbiAgY29uc3QgZ3JvdXBlZFJvd3MgPSBpc0FwcG9pbnRtZW50c1RhYmxlXHJcbiAgICA/IGNhbkdyb3VwQXBwb2ludG1lbnRzXHJcbiAgICAgID8gYnVpbGRBcHBvaW50bWVudEdyb3Vwcyhyb3dzLCBzb3J0Q29uZmlnPy5kaXJlY3Rpb24gfHwgJ2Rlc2MnKVxyXG4gICAgICA6IFt7IGtleTogJ2RlZmF1bHQnLCBsYWJlbDogbnVsbCwgcm93cyB9XVxyXG4gICAgOiBbeyBrZXk6ICdkZWZhdWx0JywgbGFiZWw6IG51bGwsIHJvd3MgfV07XHJcblxyXG4gIGlmIChpc0FwcG9pbnRtZW50c1RhYmxlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgIHtncm91cGVkUm93cy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbGc6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkSWQgPSBnZXRSZWNvcmRJZChyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShyZWNvcmQuU3RhdHVzKSB8fCAn4oCUJztcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17cmVjb3JkSWR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNjAgcC00IHNoYWRvdy1sZyBzaGFkb3ctYmxhY2svMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNTAwXCI+0JfQsNC/0LjRgdGMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3JlY29yZC5DdXN0b21lck5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57Zm9ybWF0RGF0ZVRpbWUocmVjb3JkLkRhdGUsIHJlY29yZC5UaW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC14cyBmb250LXNlbWlib2xkJywgZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzKHJlY29yZC5TdGF0dXMpKX0+e3N0YXR1c0xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7cmVjb3JkSWR9LSR7Y29sdW1uLmtleX1gfSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAvNDAgcHgtMiBweS0xLjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtyZWNvcmR9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9uT3BlblByb2ZpbGU9e29uT3BlblByb2ZpbGV9IHRhYmxlSWQ9e3RhYmxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge29uRGVsZXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUocmVjb3JkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtyb3dzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlY29yZElkID0gZ2V0UmVjb3JkSWQocmVjb3JkKTtcbiAgICAgICAgICBjb25zdCBjYXJkS2V5ID0gcmVjb3JkSWQgfHwgYCR7dGFibGVJZH0tY2FyZC0ke2luZGV4fWA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2FyZEtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC82MCBwLTQgc2hhZG93LWxnIHNoYWRvdy1ibGFjay8xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWJsZUlkID09PSAnVXNlcnMnID8gJ9Ca0LvQuNC10L3RgicgOiB0YWJsZUlkID09PSAnU2NoZWR1bGVzJyA/ICfQoNCw0YHQv9C40YHQsNC90LjQtScgOiAn0JfQsNC/0LjRgdGMJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmVjb3JkW3Zpc2libGVDb2x1bW5zWzBdPy5rZXldIHx8ICfigJQnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1yb3NlLTYwMC83MCBwLTIgdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblRyYXNoIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2NhcmRLZXl9LSR7Y29sdW1uLmtleX1gfSBjbGFzc05hbWU9XCJzcGFjZS15LTEgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvODAgYmctc2xhdGUtOTUwLzUwIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b25PcGVuUHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZUlkPXt0YWJsZUlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIDJ4bDpibG9jayAtbXgtNCBvdmVyZmxvdy14LWF1dG8gb3ZlcmZsb3cteS12aXNpYmxlIHBiLTMgc206bXgtMFwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctWzc2MHB4XSB3LWZ1bGwgdGFibGUtYXV0byB0ZXh0LVsxM3B4XSBsZWFkaW5nLXRpZ2h0IHNtOnRleHQtc21cIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncHgtMiBweS0xLjUgd2hpdGVzcGFjZS1ub3dyYXAnLCBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICd0ZXh0LWNlbnRlcicsIGNvbHVtbi5taW5XaWR0aCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb2x1bW4uc29ydGFibGUgIT09IGZhbHNlICYmIG9uU29ydChjb2x1bW4ua2V5KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTInLCBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICdqdXN0aWZ5LWNlbnRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5zb3J0YWJsZSAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxTb3J0SW5kaWNhdG9yIGRpcmVjdGlvbj17c29ydENvbmZpZz8ua2V5ID09PSBjb2x1bW4ua2V5ID8gc29ydENvbmZpZy5kaXJlY3Rpb24gOiBudWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiA8dGggY2xhc3NOYW1lPVwicHgtMiBweS0xLjUgdGV4dC1yaWdodFwiIGFyaWEtbGFiZWw9XCLQlNC10LnRgdGC0LLQuNGPXCIgLz59XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2dyb3VwZWRSb3dzLm1hcCgoZ3JvdXApID0+IChcbiAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17Z3JvdXAua2V5fT5cbiAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXt2aXNpYmxlQ29sdW1ucy5sZW5ndGggKyAob25EZWxldGUgPyAxIDogMCl9IGNsYXNzTmFtZT1cInB4LTIgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyZWNvcmQpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2dldFJlY29yZElkKHJlY29yZCl9IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweC0yIHB5LTEuNSBhbGlnbi10b3AgdGV4dC1bMTNweF0gbGVhZGluZy1zbnVnIHNtOnRleHQtc20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICd0ZXh0LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5ub1dyYXAgPyAnd2hpdGVzcGFjZS1ub3dyYXAnIDogJ3doaXRlc3BhY2Utbm9ybWFsIGJyZWFrLXdvcmRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHJlY29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAgcHgtMiBweS0xLjUgdGV4dC14cyB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxyXG5jb25zdCBDcmVhdGVSZWNvcmRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25TYXZlLCBjb2x1bW5zLCB0YWJsZU5hbWUsIG9wdGlvbnMsIHRhYmxlSWQsIGNsaWVudHMgPSBbXSwgaGlkZGVuRmllbGRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlICE9PSBmYWxzZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZWRpdGFibGVDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuRmllbGRzLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSxcclxuICAgIFtlZGl0YWJsZUNvbHVtbnMsIGhpZGRlbkZpZWxkc11cclxuICApO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgZWRpdGFibGVDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICBwYXlsb2FkW2NvbHVtbi5rZXldID0gY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnID8gW10gOiAnJztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfSwgW2VkaXRhYmxlQ29sdW1uc10pO1xyXG5cclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaXNBcHBvaW50bWVudHNDcmVhdGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc09wZW4pIHNldERyYWZ0KGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2lzT3BlbiwgaW5pdGlhbFN0YXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGRyYWZ0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgcGF5bG9hZFtrZXldID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIG9uU2F2ZShwYXlsb2FkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2DQndC+0LLQsNGPINC30LDQv9C40YHRjDogJHt0YWJsZU5hbWV9YH1cclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZHJhZnRbY29sdW1uLmtleV07XHJcbiAgICAgICAgICBpZiAoaXNBcHBvaW50bWVudHNDcmVhdGUgJiYgY29sdW1uLmtleSA9PT0gJ0N1c3RvbWVyTmFtZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIEN1c3RvbWVyTmFtZTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdENsaWVudD17aGFuZGxlQ2xpZW50QXV0b0ZpbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBldmVudC50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgeyhvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXSkubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0Q2hlY2tib3hlc1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogc2VsZWN0ZWQgfSkpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQsNC90L3Ri9GFXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT09ICdUaW1lJyB8fCBjb2x1bW4ua2V5ID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfigJQnIDogJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJ31cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtjb2x1bW4udHlwZSA9PT0gJ2RhdGUnID8gJ2RhdGUnIDogJ3RleHQnfSB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZmlsZU1vZGFsID0gKHsgc3RhdGUsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGFwcG9pbnRtZW50cyA9IHN0YXRlLmRhdGE/LmFwcG9pbnRtZW50cyB8fCBbXTtcclxuICBjb25zdCB2aXNpdEhpc3RvcnkgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghYXBwb2ludG1lbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgY3V0b2ZmID0gRGF0ZS5ub3coKSAtIFlFQVJfSU5fTVM7XHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBhcHBvaW50bWVudHNcclxuICAgICAgLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcHQuRGF0ZSwgYXBwdC5UaW1lLCBhcHB0LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmFwcHQsIHN0YXJ0RGF0ZSB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChhcHB0KSA9PiBhcHB0LnN0YXJ0RGF0ZSAmJiBhcHB0LnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPj0gY3V0b2ZmICYmIGlzQ29tcGxldGVkQXBwb2ludG1lbnRTdGF0dXMoYXBwdC5TdGF0dXMpKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5zdGFydERhdGUuZ2V0VGltZSgpIC0gYS5zdGFydERhdGUuZ2V0VGltZSgpKTtcclxuICAgIHJldHVybiBjb21wbGV0ZWQubWFwKChhcHB0LCBpbmRleCkgPT4gKHtcclxuICAgICAgLi4uYXBwdCxcclxuICAgICAgb3JkZXJOdW1iZXI6IGNvbXBsZXRlZC5sZW5ndGggLSBpbmRleCxcclxuICAgICAgZGF0ZUxhYmVsOiBmb3JtYXREYXRlVGltZShhcHB0LkRhdGUsIGFwcHQuVGltZSksXHJcbiAgICB9KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtzdGF0ZS5kYXRhPy51c2VyPy5OYW1lIHx8ICfQn9GA0L7RhNC40LvRjCDQutC70LjQtdC90YLQsCd9XHJcbiAgICAgIGlzT3Blbj17c3RhdGUub3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXs8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cclxuICAgID5cclxuICAgICAge3N0YXRlLmxvYWRpbmcgJiYgPExvYWRpbmdTdGF0ZSBsYWJlbD1cItCX0LDQs9GA0YPQttCw0Y4g0L/RgNC+0YTQuNC70YwuLi5cIiAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHN0YXRlLmRhdGE/LmVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXtzdGF0ZS5kYXRhLmVycm9yfSAvPn1cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHN0YXRlLmRhdGE/LnVzZXIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KLQtdC70LXRhNC+0L06PC9zcGFuPiB7c3RhdGUuZGF0YS51c2VyLlBob25lIHx8ICctJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPlRlbGVncmFtOjwvc3Bhbj4ge3N0YXRlLmRhdGEudXNlci5UZWxlZ3JhbUlEIHx8ICctJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCR0LDRgNCx0LXRgDo8L3NwYW4+IHtzdGF0ZS5kYXRhLnVzZXIuQmFyYmVyIHx8ICctJ308L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LWgtNjQgc3BhY2UteS0yIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICB7dmlzaXRIaXN0b3J5Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QktGL0L/QvtC70L3QtdC90L4g0LfQsCAxMiDQvNC10YHRj9GG0LXQsjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3Zpc2l0SGlzdG9yeS5sZW5ndGh9PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QotC+0LvRjNC60L4g0LfQsNCy0LXRgNGI0ZHQvdC90YvQtSDQt9Cw0L/QuNGB0Lg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dmlzaXRIaXN0b3J5Lm1hcCgoYXBwdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0xhdGVzdCA9IGluZGV4ID09PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7YXBwdC5pZCB8fCBhcHB0LmRhdGVMYWJlbH0tJHthcHB0Lm9yZGVyTnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAncm91bmRlZC1sZyBib3JkZXIgcC0zIHRleHQteHMgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMYXRlc3QgPyAnYm9yZGVyLWVtZXJhbGQtNDAwLzYwIGJnLWVtZXJhbGQtNTAwLzEwIHNoYWRvdy1pbm5lciBzaGFkb3ctZW1lcmFsZC05MDAvMzAnIDogJ2JvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCh0YLRgNC40LbQutCwIOKElnthcHB0Lm9yZGVyTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXBwdC5kYXRlTGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtc2xhdGUtMTAwXCI+e2FwcHQuQmFyYmVyIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj57YXBwdC5TZXJ2aWNlcyB8fCAn4oCUJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+0JLRi9C/0L7Qu9C90LXQvdC90YvRhSDQt9Cw0L/QuNGB0LXQuSDQt9CwINC/0L7RgdC70LXQtNC90LjQuSDQs9C+0LQg0L3QtdGCLjwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFja3Vwc1BhbmVsID0gKHsgYmFja3VwcyA9IFtdLCBvblJlc3RvcmUsIG9uQ3JlYXRlIH0pID0+IChcclxuICA8U2VjdGlvbkNhcmRcclxuICAgIHRpdGxlPVwi0KDQtdC30LXRgNCy0L3Ri9C1INC60L7Qv9C40LhcIlxyXG4gICAgYWN0aW9ucz17XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7Qv9C40Y5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICB9XHJcbiAgPlxyXG4gICAge2JhY2t1cHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINC/0YPRgdGC0LAuPC9wPlxyXG4gICAgKSA6IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICB7YmFja3Vwcy5tYXAoKGJhY2t1cCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2JhY2t1cH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntiYWNrdXB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzdG9yZShiYWNrdXApfSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L1NlY3Rpb25DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgQXBwb2ludG1lbnRNb2RhbCA9ICh7IG9wZW4sIGFwcG9pbnRtZW50LCBvcHRpb25zID0ge30sIG9uQ2xvc2UsIG9uU2F2ZSwgb25EZWxldGUsIGNhbkRlbGV0ZSA9IGZhbHNlLCBpc05ldyA9IGZhbHNlLCBjbGllbnRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGJ1aWxkRHJhZnQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWNvcmQpID0+IChyZWNvcmQgPyB7IC4uLnJlY29yZCwgVXNlcklEOiByZWNvcmQuVXNlcklEIHx8IHJlY29yZC51c2VySWQgfHwgJycsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfSA6IG51bGwpLFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm47XHJcbiAgICBzZXREcmFmdChidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XHJcblxyXG4gIGlmICghb3BlbiB8fCAhZHJhZnQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlc1NlbGVjdGlvbiA9IHBhcnNlTXVsdGlWYWx1ZShkcmFmdC5TZXJ2aWNlcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgb25TYXZlKHtcclxuICAgICAgaWQ6IGRyYWZ0LmlkLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBkcmFmdC5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IGRyYWZ0LlBob25lLFxyXG4gICAgICAgIEJhcmJlcjogZHJhZnQuQmFyYmVyLFxyXG4gICAgICAgIERhdGU6IGRyYWZ0LkRhdGUsXHJcbiAgICAgICAgVGltZTogZHJhZnQuVGltZSxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRyYWZ0LlN0YXR1cyksXHJcbiAgICAgICAgU2VydmljZXM6IGRyYWZ0LlNlcnZpY2VzLFxyXG4gICAgICAgIFVzZXJJRDogZHJhZnQuVXNlcklEIHx8ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBpc05ldyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICghcHJldikgcmV0dXJuIHByZXY7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICAgIFBob25lOiBjbGllbnQucGhvbmUgfHwgcHJldi5QaG9uZSxcclxuICAgICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtpc05ldyA/ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcgOiBg0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQt9Cw0L/QuNGB0LggJHtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9YH1cclxuICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9e1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1lbmQgZ2FwLTNcIj5cclxuICAgICAgICAgIHshaXNOZXcgJiYgY2FuRGVsZXRlICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZT8uKGRyYWZ0KX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtcm9zZS0yMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIj5cclxuICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPINC60LvQuNC10L3RgtCwXCJcclxuICAgICAgICAgIHZhbHVlPXtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCi0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RyYWZ0LlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e2RyYWZ0LkJhcmJlciB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTExIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LDRgNCx0LXRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgeyhvcHRpb25zLmJhcmJlcnMgfHwgW10pLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RyYWZ0LkRhdGUgPyBTdHJpbmcoZHJhZnQuRGF0ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnRGF0ZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8VGltZVJhbmdlUGlja2VyIHZhbHVlPXtkcmFmdC5UaW1lIHx8ICcnfSBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdUaW1lJywgbmV4dFZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjFwiIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuU3RhdHVzIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1N0YXR1cycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHRgtCw0YLRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXN9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5zZXJ2aWNlcyB8fCBbXX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBoYW5kbGVDaGFuZ2UoJ1NlcnZpY2VzJywgc2VsZWN0ZWQuam9pbignLCAnKSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5jb25zdCBUYWJsZXNXb3Jrc3BhY2UgPSAoe1xyXG4gIGFwaVJlcXVlc3QsXHJcbiAgc2hhcmVkT3B0aW9ucyxcclxuICBvbk9wdGlvbnNVcGRhdGUsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgY3VycmVudFVzZXIgPSBudWxsLFxyXG4gIGxpdmVBcHBvaW50bWVudHMgPSBudWxsLFxyXG4gIGxpdmVVcGRhdGVkQXQgPSBudWxsLFxyXG4gIGJhcmJlcnMgPSBbXSxcclxuICBzZXJ2aWNlcyA9IFtdLFxyXG4gIG9uQmFyYmVyRmllbGRDaGFuZ2UsXHJcbiAgb25TYXZlQmFyYmVyLFxyXG4gIG9uQWRkQmFyYmVyLFxyXG4gIG9uRGVsZXRlQmFyYmVyLFxyXG4gIG9uU2VydmljZUZpZWxkQ2hhbmdlLFxyXG4gIG9uU2VydmljZVByaWNlQ2hhbmdlLFxyXG4gIG9uRGVsZXRlU2VydmljZSxcclxuICBvbkFkZFNlcnZpY2UsXHJcbiAgcHJlZmVycmVkVGFibGUgPSBudWxsLFxyXG4gIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZCxcbiAgb25SZXF1ZXN0Q29uZmlybSA9IG51bGwsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuYWN0aXZlJywgJ0FwcG9pbnRtZW50cycpO1xyXG4gIGNvbnN0IFt0YWJsZXMsIHNldFRhYmxlc10gPSB1c2VTdGF0ZSgoKSA9PiBEQVRBX1RBQkxFUy5yZWR1Y2UoKGFjYywgdGFibGUpID0+ICh7IC4uLmFjYywgW3RhYmxlXTogW10gfSksIHt9KSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duT3B0aW9ucywgc2V0RHJvcGRvd25PcHRpb25zXSA9IHVzZVN0YXRlKHNoYXJlZE9wdGlvbnMgfHwgeyBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdLCBzdGF0dXNlczogW10gfSk7XHJcbiAgY29uc3QgW3RhYmxlRXJyb3IsIHNldFRhYmxlRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmFyYmVyLCBzZXRTZWxlY3RlZEJhcmJlcl0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5iYXJiZXJGaWx0ZXInLCAnYWxsJyk7XHJcbiAgY29uc3QgW2hpZGRlblN0YXR1c2VzLCBzZXRIaWRkZW5TdGF0dXNlc10gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5oaWRkZW5TdGF0dXNlcycsIFtdKTtcclxuICBjb25zdCBbaGlkZGVuQ29sdW1uc01hcCwgc2V0SGlkZGVuQ29sdW1uc01hcF0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5oaWRkZW5Db2x1bW5zJywge1xyXG4gICAgQXBwb2ludG1lbnRzOiBbJ1VzZXJJRCddLFxyXG4gICAgU2NoZWR1bGVzOiBbXSxcclxuICAgIFVzZXJzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbc29ydENvbmZpZ3MsIHNldFNvcnRDb25maWdzXSA9IHVzZUxvY2FsU3RvcmFnZShcclxuICAgICd0YWJsZXMuc29ydENvbmZpZ3MnLFxyXG4gICAgREFUQV9UQUJMRVMucmVkdWNlKChhY2MsIHRhYmxlKSA9PiAoeyAuLi5hY2MsIFt0YWJsZV06IFRBQkxFX0NPTkZJR1t0YWJsZV0/LmRlZmF1bHRTb3J0IHx8IG51bGwgfSksIHt9KVxyXG4gICk7XHJcbiAgY29uc3QgW2NyZWF0ZU1vZGFsT3Blbiwgc2V0Q3JlYXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3RBcHBvaW50bWVudHMsIHNldFNob3dQYXN0QXBwb2ludG1lbnRzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLnNob3dQYXN0QXBwb2ludG1lbnRzJywgdHJ1ZSk7XHJcbiAgY29uc3QgW2dyb3VwQXBwb2ludG1lbnRzQnlEYXRlLCBzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5ncm91cEFwcG9pbnRtZW50c0J5RGF0ZScsIHRydWUpO1xyXG4gIGNvbnN0IGFwcG9pbnRtZW50VGVtcGxhdGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIEN1c3RvbWVyTmFtZTogJycsXHJcbiAgICAgIFBob25lOiAnJyxcclxuICAgICAgQmFyYmVyOiBwaWNrQmFyYmVyRm9yVXNlcihjdXJyZW50VXNlciwgZHJvcGRvd25PcHRpb25zLmJhcmJlcnMgfHwgW10pLFxyXG4gICAgICBEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxyXG4gICAgICBUaW1lOiAnJyxcclxuICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZSgoZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzICYmIGRyb3Bkb3duT3B0aW9ucy5zdGF0dXNlc1swXSkgfHwgJ9Cd0L7QstCw0Y8g0LfQsNC/0LjRgdGMJyksXHJcbiAgICAgIFNlcnZpY2VzOiAnJyxcclxuICAgICAgVXNlcklEOiAnJyxcclxuICAgIH0pLFxyXG4gICAgW2Ryb3Bkb3duT3B0aW9ucywgY3VycmVudFVzZXI/LmRpc3BsYXlOYW1lLCBjdXJyZW50VXNlcj8udXNlcm5hbWVdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaGFyZWRPcHRpb25zKSB7XHJcbiAgICAgIHNldERyb3Bkb3duT3B0aW9ucyh7XHJcbiAgICAgICAgLi4uc2hhcmVkT3B0aW9ucyxcclxuICAgICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChzaGFyZWRPcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3NoYXJlZE9wdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXSkge1xyXG4gICAgICBzZXRBY3RpdmVUYWJsZSgnQXBwb2ludG1lbnRzJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwcmVmZXJyZWRUYWJsZSkgcmV0dXJuO1xyXG4gICAgaWYgKFRBQkxFX09SREVSLmluY2x1ZGVzKHByZWZlcnJlZFRhYmxlKSkge1xyXG4gICAgICBzZXRBY3RpdmVUYWJsZShwcmVmZXJyZWRUYWJsZSk7XHJcbiAgICB9XHJcbiAgICBvblByZWZlcnJlZFRhYmxlQ29uc3VtZWQ/LigpO1xyXG4gIH0sIFtwcmVmZXJyZWRUYWJsZSwgc2V0QWN0aXZlVGFibGUsIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SGlkZGVuU3RhdHVzZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmZyb20obmV3IFNldChwcmV2Lm1hcCgoc3RhdHVzKSA9PiBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpKS5maWx0ZXIoQm9vbGVhbikpKTtcclxuICAgICAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSBwcmV2Lmxlbmd0aCAmJiBub3JtYWxpemVkLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBwcmV2W2luZGV4XSkpIHtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICAgIH0pO1xyXG4gIH0sIFtzZXRIaWRkZW5TdGF0dXNlc10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRhYmxlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICBzZXRUYWJsZUVycm9yKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAuLi5EQVRBX1RBQkxFUy5tYXAoKHRhYmxlKSA9PiBhcGlSZXF1ZXN0KGAvJHt0YWJsZX1gKSksXHJcbiAgICAgICAgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzJyksXHJcbiAgICAgIF0pO1xyXG4gICAgICBjb25zdCBuZXh0VGFibGVzID0ge307XHJcbiAgICAgIERBVEFfVEFCTEVTLmZvckVhY2goKHRhYmxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSByZXNwb25zZXNbaW5kZXhdIHx8IFtdO1xyXG4gICAgICAgIG5leHRUYWJsZXNbdGFibGVdID0gdGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gcmVjb3Jkcy5tYXAoKHJvdykgPT4gKHsgLi4ucm93LCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpIH0pKSA6IHJlY29yZHM7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByYXdPcHRpb25zID0gcmVzcG9uc2VzW0RBVEFfVEFCTEVTLmxlbmd0aF0gfHwgeyBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdLCBzdGF0dXNlczogW10gfTtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgLi4ucmF3T3B0aW9ucyxcclxuICAgICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChyYXdPcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGFibGVzKG5leHRUYWJsZXMpO1xyXG4gICAgICBzZXREcm9wZG93bk9wdGlvbnMobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgICBvbk9wdGlvbnNVcGRhdGU/Lihub3JtYWxpemVkT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUYWJsZSBmZXRjaCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIHNldFRhYmxlRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0YLQsNCx0LvQuNGG0YsnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGlSZXF1ZXN0LCBvbk9wdGlvbnNVcGRhdGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVGFibGVzKCk7XHJcbiAgfSwgW2ZldGNoVGFibGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGl2ZUFwcG9pbnRtZW50cykpIHJldHVybjtcclxuICAgIHNldFRhYmxlcygocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQXBwb2ludG1lbnRzOiBsaXZlQXBwb2ludG1lbnRzLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgIC4uLnJvdyxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHJvdy5TdGF0dXMpLFxyXG4gICAgICB9KSksXHJcbiAgICB9KSk7XHJcbiAgfSwgW2xpdmVBcHBvaW50bWVudHMsIGxpdmVVcGRhdGVkQXRdKTtcclxuXHJcbiAgY29uc3QgY3VycmVudENvbHVtbnMgPSBUQUJMRV9DT0xVTU5TW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICBjb25zdCBoaWRkZW5Db2x1bW5zID0gaGlkZGVuQ29sdW1uc01hcFthY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSBjdXJyZW50Q29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IHNvcnRDb25maWcgPSBzb3J0Q29uZmlnc1thY3RpdmVUYWJsZV0gfHwgVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXT8uZGVmYXVsdFNvcnQgfHwgbnVsbDtcclxuXHJcbiAgY29uc3QgcHJvY2Vzc2VkUm93cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgc291cmNlID0gdGFibGVzW2FjdGl2ZVRhYmxlXSB8fCBbXTtcclxuICAgIGlmICghc291cmNlLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgbGV0IHJvd3MgPSBbLi4uc291cmNlXTtcclxuICAgIGlmIChUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdPy5zdXBwb3J0c0JhcmJlckZpbHRlciAmJiBzZWxlY3RlZEJhcmJlciAhPT0gJ2FsbCcpIHtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IG5vcm1hbGl6ZVRleHQocm93LkJhcmJlcikudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplVGV4dChzZWxlY3RlZEJhcmJlcikudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnKSB7XHJcbiAgICAgIGNvbnN0IG5vd1RzID0gRGF0ZS5ub3coKTtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgICBpZiAoaGlkZGVuU3RhdHVzZXMubGVuZ3RoICYmIGhpZGRlblN0YXR1c2VzLmluY2x1ZGVzKHJvdy5TdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNob3dQYXN0QXBwb2ludG1lbnRzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50KHJvdywgbm93VHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzZWFyY2hUZXJtLnRyaW0oKSkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFRlcm0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiB2aXNpYmxlQ29sdW1ucy5zb21lKChjb2x1bW4pID0+IG5vcm1hbGl6ZVRleHQocm93W2NvbHVtbi5rZXldKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRDb25maWc/LmtleSkge1xyXG4gICAgICBjb25zdCBjb2x1bW5EZWYgPSBjdXJyZW50Q29sdW1ucy5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5rZXkgPT09IHNvcnRDb25maWcua2V5KTtcclxuICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHJlc29sdmVTb3J0VmFsdWUoYSwgY29sdW1uRGVmLCBhY3RpdmVUYWJsZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByZXNvbHZlU29ydFZhbHVlKGIsIGNvbHVtbkRlZiwgYWN0aXZlVGFibGUpO1xyXG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmlnaHQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gbGVmdCAtIHJpZ2h0IDogcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2MnID8gKGxlZnQgPiByaWdodCA/IDEgOiAtMSkgOiBsZWZ0ID4gcmlnaHQgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfSwgW3RhYmxlcywgYWN0aXZlVGFibGUsIHNlbGVjdGVkQmFyYmVyLCBoaWRkZW5TdGF0dXNlcywgc2VhcmNoVGVybSwgdmlzaWJsZUNvbHVtbnMsIHNvcnRDb25maWcsIHNob3dQYXN0QXBwb2ludG1lbnRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoY29sdW1uS2V5KSA9PiB7XHJcbiAgICBzZXRTb3J0Q29uZmlncygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gcHJldlthY3RpdmVUYWJsZV07XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGN1cnJlbnQ/LmtleSA9PT0gY29sdW1uS2V5ICYmIGN1cnJlbnQuZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbYWN0aXZlVGFibGVdOiB7IGtleTogY29sdW1uS2V5LCBkaXJlY3Rpb24gfSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29sdW1uID0gKGNvbHVtbktleSkgPT4ge1xyXG4gICAgc2V0SGlkZGVuQ29sdW1uc01hcCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHByZXZbYWN0aXZlVGFibGVdIHx8IFtdKTtcclxuICAgICAgaWYgKGhpZGRlbi5oYXMoY29sdW1uS2V5KSkge1xyXG4gICAgICAgIGhpZGRlbi5kZWxldGUoY29sdW1uS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChoaWRkZW4uc2l6ZSA8IGN1cnJlbnRDb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBoaWRkZW4uYWRkKGNvbHVtbktleSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2FjdGl2ZVRhYmxlXTogQXJyYXkuZnJvbShoaWRkZW4pIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKTtcclxuICAgIHNldEhpZGRlblN0YXR1c2VzKChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhub3JtYWxpemVkKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBub3JtYWxpemVkKSA6IFsuLi5wcmV2LCBub3JtYWxpemVkXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChyZWNvcmRJZCwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFyZWNvcmRJZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPVxyXG4gICAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBkYXRhPy5TdGF0dXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8geyAuLi5kYXRhLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRhdGEuU3RhdHVzKSB9XHJcbiAgICAgICAgOiBkYXRhO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBbdGFibGVJZF06IGxpc3QubWFwKChyb3cpID0+IChnZXRSZWNvcmRJZChyb3cpID09PSByZWNvcmRJZCA/IHsgLi4ucm93LCAuLi5ub3JtYWxpemVkRGF0YSB9IDogcm93KSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPVxyXG4gICAgICAgIHRhYmxlSWQgPT09ICdTY2hlZHVsZXMnXHJcbiAgICAgICAgICA/IHsgLi4uKG9yaWdpbmFsLmZpbmQoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSA9PT0gcmVjb3JkSWQpIHx8IHt9KSwgLi4ubm9ybWFsaXplZERhdGEgfVxyXG4gICAgICAgICAgOiBub3JtYWxpemVkRGF0YTtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkSWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7QsdC90L7QstC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgICAgc2V0VGFibGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbdGFibGVJZF06IG9yaWdpbmFsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocmVjb3JkKSA9PiB7XHJcbiAgICBpZiAoIXJlY29yZCB8fCBhY3RpdmVUYWJsZSA9PT0gJ1NjaGVkdWxlcycpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IG9uUmVxdWVzdENvbmZpcm1cclxuICAgICAgPyBhd2FpdCBvblJlcXVlc3RDb25maXJtKHtcclxuICAgICAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMPycsXHJcbiAgICAgICAgICBtZXNzYWdlOiAn0JfQsNC/0LjRgdGMINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjy4nLFxyXG4gICAgICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgOiB0cnVlO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIGNvbnN0IG9yaWdpbmFsID0gdGFibGVzW3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgc2V0VGFibGVzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBwcmV2W3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBbdGFibGVJZF06IGxpc3QuZmlsdGVyKChyb3cpID0+IGdldFJlY29yZElkKHJvdykgIT09IGdldFJlY29yZElkKHJlY29yZCkpIH07XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY29yZC5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRGVsZXRlIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgICBzZXRUYWJsZXMoKHByZXYpID0+ICh7IC4uLnByZXYsIFt0YWJsZUlkXTogb3JpZ2luYWwgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVJlY29yZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCB0YWJsZUlkID0gYWN0aXZlVGFibGU7XHJcbiAgICBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFBheWxvYWQgPVxyXG4gICAgICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIHBheWxvYWQ/LlN0YXR1cyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHsgLi4ucGF5bG9hZCwgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShwYXlsb2FkLlN0YXR1cykgfVxyXG4gICAgICAgICAgOiBwYXlsb2FkO1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvJHt0YWJsZUlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShub3JtYWxpemVkUGF5bG9hZCksXHJcbiAgICAgIH0pO1xyXG4gICAgICBmZXRjaFRhYmxlcygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRlIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7Qt9C00LDRgtGMINC30LDQv9C40YHRjCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhYmxlU2V0dGluZ3MgPSBUQUJMRV9DT05GSUdbYWN0aXZlVGFibGVdIHx8IHt9O1xyXG4gIGNvbnN0IGlzQ3VzdG9tVGFibGUgPSB0YWJsZVNldHRpbmdzPy5tb2RlID09PSAnY3VzdG9tJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICB7VEFCTEVfT1JERVIubWFwKCh0YWJsZSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3RhYmxlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWJsZSh0YWJsZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAncm91bmRlZC1mdWxsIHB4LTQgcHktMiB0ZXh0LXNtJyxcclxuICAgICAgICAgICAgICBhY3RpdmVUYWJsZSA9PT0gdGFibGUgPyAnYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlJyA6ICdiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtUQUJMRV9DT05GSUdbdGFibGVdPy5sYWJlbCB8fCB0YWJsZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc0N1c3RvbVRhYmxlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICB7YWN0aXZlVGFibGUgPT09ICdCYXJiZXJzJyAmJiAoXHJcbiAgICAgICAgICAgIDxCYXJiZXJzVmlld1xyXG4gICAgICAgICAgICAgIGJhcmJlcnM9e2JhcmJlcnN9XHJcbiAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25CYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZUJhcmJlcn1cclxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRCYXJiZXJ9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthY3RpdmVUYWJsZSA9PT0gJ1NlcnZpY2VzJyAmJiAoXHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc1ZpZXdcclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XHJcbiAgICAgICAgICAgICAgYmFyYmVycz17YmFyYmVyc31cclxuICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvblNlcnZpY2VGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlPXtvblNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVTZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZFNlcnZpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7dGFibGVTZXR0aW5ncyAmJiAoXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPXt0YWJsZVNldHRpbmdzLmxhYmVsfT5cclxuICAgICAgICAgIHt0YWJsZUVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt0YWJsZUVycm9yfSAvPn1cclxuICAgICAgICAgIDxUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHN1cHBvcnRzQmFyYmVyRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzQmFyYmVyRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJhcmJlcj17c2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQmFyYmVyPXtzZXRTZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnN9XHJcbiAgICAgICAgICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17ZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHRvZ2dsZVN0YXR1cz17dG9nZ2xlU3RhdHVzfVxyXG4gICAgICAgICAgICByZXNldFN0YXR1c2VzPXsoKSA9PiBzZXRIaWRkZW5TdGF0dXNlcyhbXSl9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICB0b2dnbGVDb2x1bW49e3RvZ2dsZUNvbHVtbn1cclxuICAgICAgICAgICAgY2FuQ3JlYXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZX1cclxuICAgICAgICAgICAgb25PcGVuQ3JlYXRlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17ZmV0Y2hUYWJsZXN9XHJcbiAgICAgICAgICAgIHNob3dQYXN0QXBwb2ludG1lbnRzPXtzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHM9e3NldFNob3dQYXN0QXBwb2ludG1lbnRzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0dyb3VwaW5nPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cyd9XHJcbiAgICAgICAgICAgIGdyb3VwQnlEYXRlPXtncm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgICAgc2V0R3JvdXBCeURhdGU9e3NldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlfVxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZEF0PXtsaXZlVXBkYXRlZEF0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc0ZldGNoaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0J7QsdC90L7QstC70Y/RjiDRgtCw0LHQu9C40YbRiy4uLlwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29uZmlnPXtzb3J0Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXtoYW5kbGVTb3J0fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSA/IGhhbmRsZURlbGV0ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgZ3JvdXBCeURhdGU9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IGdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICAgICAge3RhYmxlU2V0dGluZ3MuY2FuQ3JlYXRlICYmXHJcbiAgICAgICAgICAgIChhY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyAoXHJcbiAgICAgICAgICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e2NyZWF0ZU1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50PXthcHBvaW50bWVudFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q3JlYXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17KHsgcGF5bG9hZCB9KSA9PiBoYW5kbGVDcmVhdGVSZWNvcmQocGF5bG9hZCl9XHJcbiAgICAgICAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxDcmVhdGVSZWNvcmRNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtjcmVhdGVNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25TYXZlPXtoYW5kbGVDcmVhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVTZXR0aW5ncy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHRhYmxlSWQ9e2FjdGl2ZVRhYmxlfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkZpZWxkcz17YWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gWydVc2VySUQnLCAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCAnUmVtaW5kZXIyaEJhcmJlclNlbnQnXSA6IFtdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQm90Q29udHJvbFZpZXcgPSAoe1xyXG4gIHN0YXR1cyxcclxuICBzZXR0aW5ncyxcclxuICBiYWNrdXBzID0gW10sXHJcbiAgbWVzc2FnZXMgPSBbXSxcclxuICBvblRvZ2dsZUVuYWJsZWQsXHJcbiAgb25TdGFydCxcclxuICBvblN0b3AsXHJcbiAgb25SZXN0YXJ0LFxyXG4gIG9uU2F2ZVNldHRpbmdzLFxyXG4gIG9uU2F2ZU1lc3NhZ2UsXHJcbiAgb25SZXN0b3JlQmFja3VwLFxyXG4gIG9uQ3JlYXRlQmFja3VwLFxyXG4gIGxpY2Vuc2VTdGF0dXMsXHJcbiAgdXBkYXRlSW5mbyxcclxuICBvblJlZnJlc2hVcGRhdGUsXHJcbiAgb25BcHBseVVwZGF0ZSxcclxuICBzeXN0ZW1CdXN5LFxyXG4gIHZpZXdNb2RlID0gJ2JvdCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBzZXRBYm91dChzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuICB9LCBbc2V0dGluZ3NdKTtcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnc3lzdGVtJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICA8QmFja3Vwc1BhbmVsIGJhY2t1cHM9e2JhY2t1cHN9IG9uUmVzdG9yZT17b25SZXN0b3JlQmFja3VwfSBvbkNyZWF0ZT17b25DcmVhdGVCYWNrdXB9IC8+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCb0LjRhtC10L3Qt9C40Y8g0Lgg0L7QsdC90L7QstC70LXQvdC40Y9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCb0LjRhtC10L3Qt9C40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCh0YLQsNGC0YPRgToge2xpY2Vuc2VTdGF0dXM/LnZhbGlkID8gJ9CQ0LrRgtC40LLQvdCwJyA6ICfQndC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk6IHtsaWNlbnNlU3RhdHVzPy5tZXNzYWdlIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm93bmVyICYmIDxwPtCS0LvQsNC00LXQu9C10YY6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2Uub3duZXJ9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8uZXhwaXJlc0F0ICYmIDxwPtCU0LXQudGB0YLQstGD0LXRgiDQtNC+IHtmb3JtYXREYXRlKGxpY2Vuc2VTdGF0dXMubGljZW5zZS5leHBpcmVzQXQpfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm51bWJlciAmJiA8cD7QndC+0LzQtdGAOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm51bWJlcn08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7QntCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0J/QvtGB0LvQtdC00L3Rj9GPINCy0LXRgNGB0LjRjzoge3VwZGF0ZUluZm8/LnZlcnNpb24gfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQvtCy0LXRgNC10L3Qvjoge3VwZGF0ZUluZm8/LmNoZWNrZWRBdCA/IGZvcm1hdERhdGUodXBkYXRlSW5mby5jaGVja2VkQXQpIDogJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCh0YLQsNGC0YPRgToge3VwZGF0ZUluZm8/LmRldGFpbHMgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCf0YDQvtCy0LXRgNC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5IHx8ICF1cGRhdGVJbmZvPy5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzeXN0ZW1CdXN5ID8gJ9Ce0LHQvdC+0LLQu9C10L3QuNC14oCmJyA6ICfQntCx0L3QvtCy0LjRgtGMJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQodGC0LDRgtGD0YEg0LHQvtGC0LBcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0KHQvtGB0YLQvtGPOiB7c3RhdHVzPy5ydW5uaW5nID8gJ9GA0LDQsdC+0YLQsNC10YInIDogJ9C+0YHRgtCw0L3QvtCy0LvQtdC9J308L3A+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2V0dGluZ3M/LmlzQm90RW5hYmxlZCAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uVG9nZ2xlRW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNCy0YLQvtGB0YLQsNGA0YIg0LLQvNC10YHRgtC1INGBIENSTVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQotC10LrRgdGC0Ysg0LHQvtGC0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QntC/0LjRgdCw0L3QuNC1INC70LXQvdC00LjQvdCz0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXszfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCR0LvQvtC6IMKr0J4g0L3QsNGBwrs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBYm91dChldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXs0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZVNldHRpbmdzKHsgYm90RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhYm91dFRleHQ6IGFib3V0IH0pfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YHRgtGLXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMb2dpblNjcmVlbiA9ICh7IG9uTG9naW4sIGVycm9yIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbk9wdGlvbnMsIHNldExvZ2luT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdGlvbnNFcnJvciwgc2V0T3B0aW9uc0Vycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZ09wdGlvbnMsIHNldExvYWRpbmdPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdPcHRpb25zKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUobm9ybWFsaXplZFswXS5sb2dpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm9ybWFsaXplZC5zb21lKChvcHRpb24pID0+IG9wdGlvbi5sb2dpbiA9PT0gdXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcignJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhbXSk7XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7Qsi4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hPcHRpb25zKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIG9uTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3REaXNhYmxlZCA9IGxvYWRpbmdPcHRpb25zIHx8IGxvZ2luT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAgcHgtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMCBwLTggc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5CYXJiZXIgQm90IENSTTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCAo0LvQvtCz0LjQvSk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS02MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57bG9hZGluZ09wdGlvbnMgPyAn0JfQsNCz0YDRg9C30LrQsC4uLicgOiAn0KPQutCw0LbQuNGC0LUg0LHQsNGA0LHQtdGA0LAnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bG9naW5PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubG9naW59IHZhbHVlPXtvcHRpb24ubG9naW59PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbCB8fCBvcHRpb24ubG9naW59XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQsNC60YLQuNCy0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ysg0LjQtyDRgNCw0LfQtNC10LvQsCDCq9CR0LDRgNCx0LXRgNGLwrsuPC9wPlxyXG4gICAgICAgICAgICB7b3B0aW9uc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTQwMFwiPntvcHRpb25zRXJyb3J9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyh2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3IpICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3J9IC8+fVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH0+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgICByZXR1cm4gc2F2ZWQgPyBidWlsZFNlc3Npb25QYXlsb2FkKEpTT04ucGFyc2Uoc2F2ZWQpKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlTG9jYWxTdG9yYWdlKCdiYXJiZXIuYWN0aXZlVGFiJywgJ2Rhc2hib2FyZCcpO1xyXG4gIGNvbnN0IFtwZW5kaW5nVGFibGVWaWV3LCBzZXRQZW5kaW5nVGFibGVWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFyYmVycywgc2V0QmFyYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JvdFN0YXR1cywgc2V0Qm90U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RTZXR0aW5ncywgc2V0Qm90U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdE1lc3NhZ2VzLCBzZXRCb3RNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpY2Vuc2VTdGF0dXMsIHNldExpY2Vuc2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwZGF0ZUluZm8sIHNldFVwZGF0ZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnNDYWNoZSwgc2V0T3B0aW9uc0NhY2hlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICBjb25zdCBbYXBwb2ludG1lbnRNb2RhbCwgc2V0QXBwb2ludG1lbnRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dsb2JhbEVycm9yLCBzZXRHbG9iYWxFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgc2V0QXV0aEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3lzdGVtQnVzeSwgc2V0U3lzdGVtQnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpO1xyXG4gIGNvbnN0IFtyZWFsdGltZVNuYXBzaG90LCBzZXRSZWFsdGltZVNuYXBzaG90XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmYXRhbEVycm9yLCBzZXRGYXRhbEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb25maXJtRGlhbG9nLCBzZXRDb25maXJtRGlhbG9nXSA9IHVzZVN0YXRlKGRlZmF1bHRDb25maXJtU3RhdGUpO1xyXG4gIGNvbnN0IGNvbmZpcm1SZXNvbHZlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdENvbmZpcm0gPSB1c2VDYWxsYmFjayhcclxuICAgIChvcHRpb25zID0ge30pID0+XHJcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQgPSByZXNvbHZlO1xyXG4gICAgICAgIHNldENvbmZpcm1EaWFsb2coeyAuLi5kZWZhdWx0Q29uZmlybVN0YXRlLCAuLi5vcHRpb25zLCBvcGVuOiB0cnVlIH0pO1xyXG4gICAgICB9KSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybVJlc3VsdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBzZXRDb25maXJtRGlhbG9nKGRlZmF1bHRDb25maXJtU3RhdGUpO1xyXG4gICAgICBpZiAoY29uZmlybVJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25maXJtUmVzb2x2ZXJSZWYuY3VycmVudChyZXN1bHQpO1xyXG4gICAgICAgIGNvbmZpcm1SZXNvbHZlclJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmVUYWIgPT09ICdiYXJiZXJzJyB8fCBhY3RpdmVUYWIgPT09ICdzZXJ2aWNlcycpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gYWN0aXZlVGFiID09PSAnYmFyYmVycycgPyAnQmFyYmVycycgOiAnU2VydmljZXMnO1xyXG4gICAgICBzZXRQZW5kaW5nVGFibGVWaWV3KHRhcmdldCk7XHJcbiAgICAgIHNldEFjdGl2ZVRhYigndGFibGVzJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZWZlcnJlZFRhYmxlQ29uc3VtZWQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRQZW5kaW5nVGFibGVWaWV3KG51bGwpLCBbXSk7XHJcbiAgY29uc3Qgc2VydmljZVNhdmVUaW1lcnMgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgc2V0U2Vzc2lvbihudWxsKTtcclxuICAgIHNldERhc2hib2FyZChudWxsKTtcclxuICAgIHNldEdsb2JhbEVycm9yKCcnKTtcclxuICAgIHNldFJlYWx0aW1lU25hcHNob3QobnVsbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhcGlSZXF1ZXN0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoZW5kcG9pbnQsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXRgiDQsNC60YLQuNCy0L3QvtC5INGB0LXRgdGB0LjQuCcpO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnRva2VufWAsXHJcbiAgICAgICAgLi4uKG9wdGlvbnMuYm9keSAmJiAhb3B0aW9ucy5oZWFkZXJzPy5bJ0NvbnRlbnQtVHlwZSddID8geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gOiB7fSksXHJcbiAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7ZW5kcG9pbnR9YCwgeyAuLi5vcHRpb25zLCBoZWFkZXJzIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBoYW5kbGVMb2dvdXQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ch0LXRgdGB0LjRjyDQuNGB0YLQtdC60LvQsCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICfQntGI0LjQsdC60LAg0LfQsNC/0YDQvtGB0LAnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHJldHVybiBudWxsO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSxcclxuICAgIFtzZXNzaW9uPy50b2tlbiwgaGFuZGxlTG9nb3V0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZldGNoQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZXNzaW9uPy50b2tlbikgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEdsb2JhbEVycm9yKCcnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG92ZXJ2aWV3ID0gYXdhaXQgYXBpUmVxdWVzdCgnL2Rhc2hib2FyZC9vdmVydmlldycpO1xyXG4gICAgICBzZXREYXNoYm9hcmQob3ZlcnZpZXcpO1xyXG4gICAgICBjb25zdCB3aXRoRmFsbGJhY2sgPSAocmVxdWVzdCwgZmFsbGJhY2ssIGxhYmVsKSA9PlxyXG4gICAgICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bGFiZWx9IGZldGNoIHNraXBwZWQ6YCwgZXJyb3I/Lm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zdCBbXHJcbiAgICAgICAgc2VydmljZXNGdWxsLFxyXG4gICAgICAgIGJhcmJlcnNGdWxsLFxyXG4gICAgICAgIGJvdFN0YXRlLFxyXG4gICAgICAgIGJvdE1lc3NhZ2VzUGF5bG9hZCxcclxuICAgICAgICBsaWNlbnNlLFxyXG4gICAgICAgIHVwZGF0ZSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvc2VydmljZXMvZnVsbCcpLCB7IHNlcnZpY2VzOiBbXSB9LCAnU2VydmljZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JhcmJlcnMvZnVsbCcpLCBbXSwgJ0JhcmJlcnMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnKSwgeyBzdGF0dXM6IG51bGwsIHNldHRpbmdzOiBudWxsIH0sICdCb3Qgc3RhdHVzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9ib3QvbWVzc2FnZXMnKSwgW10sICdCb3QgbWVzc2FnZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2xpY2Vuc2Uvc3RhdHVzJyksIG51bGwsICdMaWNlbnNlJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9zeXN0ZW0vdXBkYXRlJyksIG51bGwsICdVcGRhdGVzJyksXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKFxyXG4gICAgICAgICAgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzJyksXHJcbiAgICAgICAgICB7IHN0YXR1c2VzOiBbXSwgYmFyYmVyczogW10sIHNlcnZpY2VzOiBbXSB9LFxyXG4gICAgICAgICAgJ09wdGlvbnMnLFxyXG4gICAgICAgICksXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRTZXJ2aWNlcyhzZXJ2aWNlc0Z1bGwuc2VydmljZXMgfHwgW10pO1xyXG4gICAgICBzZXRCYXJiZXJzKGJhcmJlcnNGdWxsIHx8IG92ZXJ2aWV3LmJhcmJlcnMgfHwgW10pO1xyXG4gICAgICBzZXRCb3RTZXR0aW5ncyhib3RTdGF0ZS5zZXR0aW5ncyB8fCBvdmVydmlldy5ib3Q/LnNldHRpbmdzIHx8IG51bGwpO1xyXG4gICAgICBzZXRCb3RTdGF0dXMoYm90U3RhdGUuc3RhdHVzKTtcclxuICAgICAgc2V0Qm90TWVzc2FnZXMoYm90TWVzc2FnZXNQYXlsb2FkIHx8IFtdKTtcclxuICAgICAgc2V0TGljZW5zZVN0YXR1cyhsaWNlbnNlKTtcclxuICAgICAgc2V0VXBkYXRlSW5mbyh1cGRhdGUpO1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3Qob3B0aW9ucy5zdGF0dXNlcyB8fCBbXSkgfTtcclxuICAgICAgc2V0T3B0aW9uc0NhY2hlKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNCw0L3QvdGL0LUnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGlSZXF1ZXN0LCBzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb24/LnRva2VuLCBmZXRjaEFsbF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgICBzZXRSZWFsdGltZVNuYXBzaG90KG51bGwpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBFdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCB0b2tlblBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb24udG9rZW4pO1xyXG4gICAgY29uc3Qgc3RyZWFtVXJsID0gYCR7QVBJX0JBU0VfVVJMfS9ldmVudHMvc3RyZWFtP3Rva2VuPSR7dG9rZW5QYXJhbX1gO1xyXG4gICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2Uoc3RyZWFtVXJsKTtcclxuICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgaWYgKHBheWxvYWQ/LnR5cGUgIT09ICdhcHBvaW50bWVudHM6dXBkYXRlJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBwYXlsb2FkLnBheWxvYWQgfHwge307XHJcbiAgICAgICAgc2V0UmVhbHRpbWVTbmFwc2hvdCh7XHJcbiAgICAgICAgICByb3dzOiBBcnJheS5pc0FycmF5KGRldGFpbHMucm93cykgPyBkZXRhaWxzLnJvd3MgOiBbXSxcclxuICAgICAgICAgIHN0YXRzOiBkZXRhaWxzLnN0YXRzIHx8IHt9LFxyXG4gICAgICAgICAgdXBjb21pbmc6IEFycmF5LmlzQXJyYXkoZGV0YWlscy51cGNvbWluZykgPyBkZXRhaWxzLnVwY29taW5nIDogW10sXHJcbiAgICAgICAgICB1cGRhdGVkQXQ6IGRldGFpbHMudXBkYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFsdGltZSBldmVudCBwYXJzZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBldmVudFNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdhcHBvaW50bWVudHMnLCBoYW5kbGVFdmVudCk7XHJcbiAgICBldmVudFNvdXJjZS5vbmVycm9yID0gKCkgPT4ge307XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBldmVudFNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhcHBvaW50bWVudHMnLCBoYW5kbGVFdmVudCk7XHJcbiAgICAgIGV2ZW50U291cmNlLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzZXNzaW9uPy50b2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZWFsdGltZVNuYXBzaG90KSByZXR1cm47XHJcbiAgICBzZXREYXNoYm9hcmQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbmV4dFN0YXRzID0geyAuLi4ocHJldj8uc3RhdHMgfHwge30pLCAuLi4ocmVhbHRpbWVTbmFwc2hvdC5zdGF0cyB8fCB7fSkgfTtcclxuICAgICAgY29uc3QgbmV4dEFwcG9pbnRtZW50cyA9IHtcclxuICAgICAgICAuLi4ocHJldj8uYXBwb2ludG1lbnRzIHx8IHt9KSxcclxuICAgICAgICB1cGNvbWluZzogcmVhbHRpbWVTbmFwc2hvdC51cGNvbWluZyB8fCBwcmV2Py5hcHBvaW50bWVudHM/LnVwY29taW5nIHx8IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXByZXYpIHtcclxuICAgICAgICByZXR1cm4geyBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBzdGF0czogbmV4dFN0YXRzLCBhcHBvaW50bWVudHM6IG5leHRBcHBvaW50bWVudHMgfTtcclxuICAgIH0pO1xyXG4gIH0sIFtyZWFsdGltZVNuYXBzaG90XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxFcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkZXRhaWwgPSBldmVudD8ucmVhc29uIHx8IGV2ZW50Py5lcnJvcjtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9XHJcbiAgICAgICAgZGV0YWlsPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgZXZlbnQ/Lm1lc3NhZ2UgfHxcclxuICAgICAgICAodHlwZW9mIGRldGFpbCA9PT0gJ3N0cmluZycgPyBkZXRhaWwgOiAn0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAnKTtcclxuICAgICAgY29uc29sZS5lcnJvcignR2xvYmFsIFVJIGVycm9yOicsIGRldGFpbCB8fCBldmVudCk7XHJcbiAgICAgIHNldEZhdGFsRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGhhbmRsZUdsb2JhbEVycm9yKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+ICgpID0+IHtcclxuICAgICAgc2VydmljZVNhdmVUaW1lcnMuY3VycmVudC5mb3JFYWNoKCh0aW1lcikgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKSk7XHJcbiAgICAgIHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgc2V0QXV0aEVycm9yKCcnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRVc2VybmFtZSA9IHJlc29sdmVMb2dpbih1c2VybmFtZSk7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRVc2VybmFtZSkge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0LHQsNGA0LHQtdGA0LAg0LjQtyDRgdC/0LjRgdC60LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IG5vcm1hbGl6ZWRVc2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRBdXRoRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICfQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZXNzaW9uUGF5bG9hZCA9IGJ1aWxkU2Vzc2lvblBheWxvYWQoeyAuLi5kYXRhLCB1c2VybmFtZTogbm9ybWFsaXplZFVzZXJuYW1lIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFyYmVyLXNlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uUGF5bG9hZCkpO1xyXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25QYXlsb2FkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcign0KHQtdGA0LLQtdGAINC90LXQtNC+0YHRgtGD0L/QtdC9Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFyYmVyRmllbGRDaGFuZ2UgPSAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGJhcmJlcikgPT4gKGJhcmJlci5pZCA9PT0gaWQgPyB7IC4uLmJhcmJlciwgW2ZpZWxkXTogdmFsdWUgfSA6IGJhcmJlcikpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub3JtYWxpemVTZXJ2aWNlUGF5bG9hZCA9IChzZXJ2aWNlKSA9PiAoe1xyXG4gICAgLi4uc2VydmljZSxcclxuICAgIHByaWNlczogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhzZXJ2aWNlLnByaWNlcyB8fCB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSldKVxyXG4gICAgKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGVyaXZlQmFyYmVyTG9naW4gPSAoYmFyYmVyRGF0YSA9IHt9KSA9PiByZXNvbHZlTG9naW4oYmFyYmVyRGF0YS5sb2dpbiB8fCBiYXJiZXJEYXRhLm5hbWUgfHwgJycpO1xyXG5cclxuICBjb25zdCBidWlsZEJhcmJlclBheWxvYWQgPSAoYmFyYmVyRGF0YSA9IHt9LCBmYWxsYmFja09yZGVyID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbmFtZTogYmFyYmVyRGF0YS5uYW1lIHx8ICcnLFxyXG4gICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgZGVzY3JpcHRpb246IGJhcmJlckRhdGEuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIHJhdGluZzogYmFyYmVyRGF0YS5yYXRpbmcgfHwgJycsXHJcbiAgICAgIGF2YXRhclVybDogYmFyYmVyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbG9yOiBiYXJiZXJEYXRhLmNvbG9yIHx8ICcnLFxyXG4gICAgICBsb2dpbjogZGVyaXZlQmFyYmVyTG9naW4oYmFyYmVyRGF0YSksXHJcbiAgICAgIHBhc3N3b3JkOiBiYXJiZXJEYXRhLnBhc3N3b3JkIHx8ICcnLFxyXG4gICAgICBwaG9uZTogYmFyYmVyRGF0YS5waG9uZSB8fCAnJyxcclxuICAgICAgdGVsZWdyYW1JZDogYmFyYmVyRGF0YS50ZWxlZ3JhbUlkIHx8ICcnLFxyXG4gICAgICBpc0FjdGl2ZTogYmFyYmVyRGF0YS5pc0FjdGl2ZSAhPT0gZmFsc2UsXHJcbiAgICAgIG9yZGVySW5kZXg6IE51bWJlcihiYXJiZXJEYXRhLm9yZGVySW5kZXggPz8gZmFsbGJhY2tPcmRlcikgfHwgMCxcclxuICAgIH07XHJcbiAgICBpZiAoYmFyYmVyRGF0YS5pZCkge1xyXG4gICAgICBwYXlsb2FkLmlkID0gYmFyYmVyRGF0YS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVCYXJiZXIgPSBhc3luYyAoYmFyYmVyKSA9PiB7XHJcbiAgICBpZiAoIWJhcmJlcj8uaWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUmVxdWVzdChgL0JhcmJlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoYmFyYmVyLmlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1aWxkQmFyYmVyUGF5bG9hZChiYXJiZXIpKSB9KTtcclxuICAgICAgY29uc3QgdXBkYXRlZEJhcmJlciA9IHJlc3BvbnNlIHx8IGJhcmJlcjtcclxuICAgICAgc2V0QmFyYmVycygocHJldikgPT4gcHJldi5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSB1cGRhdGVkQmFyYmVyLmlkID8geyAuLi5pdGVtLCAuLi51cGRhdGVkQmFyYmVyIH0gOiBpdGVtKSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQmFyYmVyID0gYXN5bmMgKGJhcmJlcikgPT4ge1xyXG4gICAgaWYgKCFiYXJiZXI/LmlkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0KPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LA/JyxcclxuICAgICAgbWVzc2FnZTogYNCR0LDRgNCx0LXRgCDCqyR7YmFyYmVyLm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J33CuyDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPLmAsXHJcbiAgICAgIGNvbmZpcm1MYWJlbDogJ9Cj0LTQsNC70LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQmFyYmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChiYXJiZXIuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRCYXJiZXIgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUgfHwgIXBheWxvYWQucGFzc3dvcmQpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoJ9CX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y8sINC70L7Qs9C40L0g0Lgg0L/QsNGA0L7Qu9GMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5ld0JhcmJlclBheWxvYWQgPSBidWlsZEJhcmJlclBheWxvYWQoeyAuLi5wYXlsb2FkLCBpZDogdW5kZWZpbmVkIH0sIGJhcmJlcnMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgeyBpZCwgLi4uYm9keSB9ID0gbmV3QmFyYmVyUGF5bG9hZDtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0JhcmJlcnMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVTZXJ2aWNlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHNlcnZpY2UpKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNjaGVkdWxlU2VydmljZUF1dG9zYXZlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VydmljZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlcnZpY2U/LmlkKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRpbWVycyA9IHNlcnZpY2VTYXZlVGltZXJzLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGltZXIgPSB0aW1lcnMuZ2V0KHNlcnZpY2UuaWQpO1xyXG4gICAgICBpZiAoZXhpc3RpbmdUaW1lcikgY2xlYXJUaW1lb3V0KGV4aXN0aW5nVGltZXIpO1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVNhdmVTZXJ2aWNlKHNlcnZpY2UpO1xyXG4gICAgICAgIHRpbWVycy5kZWxldGUoc2VydmljZS5pZCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHRpbWVycy5zZXQoc2VydmljZS5pZCwgdGltZXIpO1xyXG4gICAgfSxcclxuICAgIFtoYW5kbGVTYXZlU2VydmljZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVTZXJ2aWNlID0gYXN5bmMgKHNlcnZpY2UpID0+IHtcclxuICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YM/JyxcclxuICAgICAgbWVzc2FnZTogYNCj0YHQu9GD0LPQsCDCqyR7c2VydmljZS5uYW1lIHx8ICfQkdC10Lcg0L3QsNC30LLQsNC90LjRjyd9wrsg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsC5gLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQo9C00LDQu9C40YLRjCcsXHJcbiAgICAgIHRvbmU6ICdkYW5nZXInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL3NlcnZpY2VzL2Z1bGwvJHtlbmNvZGVVUklDb21wb25lbnQoc2VydmljZS5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRTZXJ2aWNlID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghcGF5bG9hZC5uYW1lKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvc2VydmljZXMvZnVsbCcsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkKHBheWxvYWQpKSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFNlcnZpY2VzKChwcmV2KSA9PiBwcmV2Lm1hcCgoc2VydmljZSkgPT4gKHNlcnZpY2UuaWQgPT09IGlkID8geyAuLi5zZXJ2aWNlLCBbZmllbGRdOiB2YWx1ZSB9IDogc2VydmljZSkpKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUoeyAuLi50YXJnZXQsIFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NlcnZpY2VzLCBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZXJ2aWNlSWQsIGJhcmJlcklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRTZXJ2aWNlcygocHJldikgPT5cclxuICAgICAgICBwcmV2Lm1hcCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlcnZpY2UuaWQgIT09IHNlcnZpY2VJZCkgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcmljZXM6IHsgLi4uKHNlcnZpY2UucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2VydmljZXMuZmluZCgoc2VydmljZSkgPT4gc2VydmljZS5pZCA9PT0gc2VydmljZUlkKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlKHtcclxuICAgICAgICAgIC4uLnRhcmdldCxcclxuICAgICAgICAgIHByaWNlczogeyAuLi4odGFyZ2V0LnByaWNlcyB8fCB7fSksIFtiYXJiZXJJZF06IHZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VydmljZXMsIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdFRvZ2dsZSA9IGFzeW5jIChlbmFibGVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXNCb3RFbmFibGVkOiBlbmFibGVkIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0L3QvtCy0LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCDQsdC+0YLQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJvdEFjdGlvbiA9IGFzeW5jIChhY3Rpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24gfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0YvQv9C+0LvQvdC40YLRjCDQtNC10LnRgdGC0LLQuNC1Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZVNldHRpbmdzID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGlmICghYm90U2V0dGluZ3M/LmlkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQm90U2V0dGluZ3MvJHtlbmNvZGVVUklDb21wb25lbnQoYm90U2V0dGluZ3MuaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LgnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlTWVzc2FnZSA9IGFzeW5jIChpZCwgZHJhZnQsIHBlcnNpc3QpID0+IHtcclxuICAgIGlmICghcGVyc2lzdCkge1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcygocHJldikgPT4gcHJldi5tYXAoKG1lc3NhZ2UpID0+IChtZXNzYWdlLmlkID09PSBpZCA/IHsgLi4uZHJhZnQgfSA6IG1lc3NhZ2UpKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9ib3QvbWVzc2FnZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlOiBkcmFmdC5jb2RlLCB0aXRsZTogZHJhZnQudGl0bGUsIHRleHQ6IGRyYWZ0LnRleHQgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXN0b3JlQmFja3VwID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XHJcbiAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm47XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCByZXF1ZXN0Q29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXHJcbiAgICAgIG1lc3NhZ2U6IGDQotC10LrRg9GJ0LjQtSDQtNCw0L3QvdGL0LUg0LHRg9C00YPRgiDQt9Cw0LzQtdC90LXQvdGLINGB0L7QtNC10YDQttC40LzRi9C8ICR7ZmlsZW5hbWV9LiDQn9GA0L7QtNC+0LvQttC40YLRjD9gLFxuICAgICAgY29uZmlybUxhYmVsOiAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9yZXN0b3JlJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZW5hbWUgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQsdGN0LrQsNC/Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQmFja3VwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Ch0L7Qt9C00LDRgtGMINGA0LXQt9C10YDQstC90YPRjiDQutC+0L/QuNGOPycsXHJcbiAgICAgIG1lc3NhZ2U6ICfQkdGD0LTQtdGCINGB0L7Qt9C00LDQvSDRhNCw0LnQuyDRgNC10LfQtdGA0LLQvdC+0Lkg0LrQvtC/0LjQuCDRgtC10LrRg9GJ0LXQuSDQsdCw0LfRiyDQtNCw0L3QvdGL0YUuJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KHQvtC30LTQsNGC0YwnLFxyXG4gICAgICB0b25lOiAnc3VjY2VzcycsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvYmFja3Vwcy9jcmVhdGUnLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQsdGN0LrQsNC/Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlblByb2ZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xyXG4gICAgICBzZXRQcm9maWxlTW9kYWwoeyBvcGVuOiB0cnVlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlSZXF1ZXN0KGAvdXNlci1wcm9maWxlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHBheWxvYWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC/0YDQvtGE0LjQu9GMJyB9LCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFthcGlSZXF1ZXN0XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVuc3VyZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAob3B0aW9uc0NhY2hlKSByZXR1cm4gb3B0aW9uc0NhY2hlO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cz9mb3JjZT0xJyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSxcclxuICAgIH07XHJcbiAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZCk7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICB9LCBbYXBpUmVxdWVzdCwgb3B0aW9uc0NhY2hlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGFwcG9pbnRtZW50LCBvcHRpb25zQ29uZmlnID0ge30pID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7XHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhcHBvaW50bWVudCxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBhbGxvd0RlbGV0ZTogISFvcHRpb25zQ29uZmlnLmFsbG93RGVsZXRlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbZW5zdXJlT3B0aW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVBcHBvaW50bWVudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBlbnN1cmVPcHRpb25zKCk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbiAgICBjb25zdCBkZWZhdWx0U3RhdHVzID0gbm9ybWFsaXplU3RhdHVzVmFsdWUob3B0aW9ucy5zdGF0dXNlcz8uWzBdIHx8ICfQkNC60YLQuNCy0L3QsNGPJyk7XHJcbiAgICBjb25zdCBkZWZhdWx0QmFyYmVyID0gcGlja0JhcmJlckZvclVzZXIoc2Vzc2lvbiwgb3B0aW9ucy5iYXJiZXJzIHx8IFtdKTtcclxuICAgIHNldEFwcG9pbnRtZW50TW9kYWwoe1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgICBQaG9uZTogJycsXHJcbiAgICAgICAgQmFyYmVyOiBkZWZhdWx0QmFyYmVyLFxyXG4gICAgICAgIERhdGU6IHRvZGF5LFxyXG4gICAgICAgIFRpbWU6ICcnLFxyXG4gICAgICAgIFN0YXR1czogZGVmYXVsdFN0YXR1cyxcclxuICAgICAgICBTZXJ2aWNlczogJycsXHJcbiAgICAgICAgVXNlcklEOiAnJyxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgaXNOZXc6IHRydWUsXHJcbiAgICAgIGFsbG93RGVsZXRlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0sIFtlbnN1cmVPcHRpb25zLCBzZXNzaW9uPy5kaXNwbGF5TmFtZSwgc2Vzc2lvbj8udXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUFwcG9pbnRtZW50ID0gYXN5bmMgKHsgaWQsIHBheWxvYWQsIGlzTmV3IH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9BcHBvaW50bWVudHMnLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvQXBwb2ludG1lbnRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVBcHBvaW50bWVudCA9IGFzeW5jIChhcHBvaW50bWVudCkgPT4ge1xyXG4gICAgaWYgKCFhcHBvaW50bWVudD8uaWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IHJlcXVlc3RDb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Yw/JyxcclxuICAgICAgbWVzc2FnZTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8uJyxcclxuICAgICAgY29uZmlybUxhYmVsOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG4gICAgICB0b25lOiAnZGFuZ2VyJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoYXBwb2ludG1lbnQuaWQpfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGU/Zm9yY2U9MScpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKGluZm8pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQv9GA0L7QstC10YDQuNGC0Ywg0L7QsdC90L7QstC70LXQvdC40Y8nKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFN5c3RlbUJ1c3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFwcGx5VXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgcmVxdWVzdENvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogJ9Ce0LHQvdC+0LLQuNGC0Ywg0YHQuNGB0YLQtdC80YM/JyxcclxuICAgICAgbWVzc2FnZTogJ0NSTSDQuCDQsdC+0YIg0LHRg9C00YPRgiDQvtCx0L3QvtCy0LvQtdC90Ysg0LTQviDQv9C+0YHQu9C10LTQvdC10Lkg0LLQtdGA0YHQuNC4LiDQn9C10YDQtdC30LDQv9GD0YHQuiDQvNC+0LbQtdGCINC30LDQvdGP0YLRjCDQvdC10YHQutC+0LvRjNC60L4g0LzQuNC90YPRgi4nLFxyXG4gICAgICBjb25maXJtTGFiZWw6ICfQntCx0L3QvtCy0LjRgtGMJyxcclxuICAgICAgdG9uZTogJ2RhbmdlcicsXHJcbiAgICB9KTtcclxuICAgIGlmICghY29uZmlybWVkKSByZXR1cm47XHJcbiAgICBzZXRTeXN0ZW1CdXN5KHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHJlc3VsdC5pbmZvIHx8IHJlc3VsdCk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQuNC80LXQvdC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uPy50b2tlbikge1xyXG4gICAgcmV0dXJuIDxMb2dpblNjcmVlbiBvbkxvZ2luPXtoYW5kbGVMb2dpbn0gZXJyb3I9e2F1dGhFcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVmZXJyZWRUYWJsZVRhcmdldCA9IGFjdGl2ZVRhYiA9PT0gJ2JhcmJlcnMnID8gJ0JhcmJlcnMnIDogYWN0aXZlVGFiID09PSAnc2VydmljZXMnID8gJ1NlcnZpY2VzJyA6IHBlbmRpbmdUYWJsZVZpZXc7XHJcblxyXG4gIGNvbnN0IHJlbmRlckFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEYXNoYm9hcmRWaWV3XHJcbiAgICAgICAgICAgIGRhdGE9e2Rhc2hib2FyZH1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQXBwb2ludG1lbnQ9e2hhbmRsZUNyZWF0ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBsaXZlTWV0YT17cmVhbHRpbWVTbmFwc2hvdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAndGFibGVzJzpcclxuICAgICAgY2FzZSAnYmFyYmVycyc6XHJcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRhYmxlc1dvcmtzcGFjZVxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0PXthcGlSZXF1ZXN0fVxyXG4gICAgICAgICAgICBzaGFyZWRPcHRpb25zPXtvcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3B0aW9uc1VwZGF0ZT17c2V0T3B0aW9uc0NhY2hlfVxyXG4gICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvcGVuUHJvZmlsZX1cclxuICAgICAgICAgICAgY2xpZW50cz17ZGFzaGJvYXJkPy5jbGllbnRzIHx8IFtdfVxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcj17c2Vzc2lvbiB8fCBudWxsfVxyXG4gICAgICAgICAgICBsaXZlQXBwb2ludG1lbnRzPXtyZWFsdGltZVNuYXBzaG90Py5yb3dzIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVVcGRhdGVkQXQ9e3JlYWx0aW1lU25hcHNob3Q/LnVwZGF0ZWRBdCB8fCBudWxsfVxyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XHJcbiAgICAgICAgICAgIG9uQmFyYmVyRmllbGRDaGFuZ2U9e2hhbmRsZUJhcmJlckZpZWxkQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblNhdmVCYXJiZXI9e2hhbmRsZVNhdmVCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uQWRkQmFyYmVyPXtoYW5kbGVBZGRCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlQmFyYmVyPXtoYW5kbGVEZWxldGVCYXJiZXJ9XHJcbiAgICAgICAgICAgIG9uU2VydmljZUZpZWxkQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU2VydmljZVByaWNlQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlU2VydmljZT17aGFuZGxlRGVsZXRlU2VydmljZX1cclxuICAgICAgICAgICAgb25BZGRTZXJ2aWNlPXtoYW5kbGVBZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgICBwcmVmZXJyZWRUYWJsZT17cHJlZmVycmVkVGFibGVUYXJnZXR9XHJcbiAgICAgICAgICAgIG9uUHJlZmVycmVkVGFibGVDb25zdW1lZD17aGFuZGxlUHJlZmVycmVkVGFibGVDb25zdW1lZH1cclxuICAgICAgICAgICAgb25SZXF1ZXN0Q29uZmlybT17cmVxdWVzdENvbmZpcm19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ2JvdCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ3N5c3RlbSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cInN5c3RlbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZhdGFsRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGJnLXNsYXRlLTk1MCBwLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0zIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcm9zZS01MDAvNTAgYmctc2xhdGUtOTAwLzgwIHAtNiBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMFwiPtCa0YDQuNGC0LjRh9C10YHQutCw0Y8g0L7RiNC40LHQutCwINC40L3RgtC10YDRhNC10LnRgdCwPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICDQodC+0L7QsdGJ0LXQvdC40LUg0L3QuNC20LUg0LzQvtC20L3QviDQv9C10YDQtdGB0LvQsNGC0Ywg0YDQsNC30YDQsNCx0L7RgtGH0LjQutGDLiDQn9C+0YHQu9C1INC40YHQv9GA0LDQstC70LXQvdC40Y8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIHAtNCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LXJvc2UtMjAwXCI+XHJcbiAgICAgICAgICAgIHtmYXRhbEVycm9yfVxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAge2lzTW9iaWxlICYmIDxNb2JpbGVUYWJzIGFjdGl2ZVRhYj17YWN0aXZlVGFifSBvbkNoYW5nZT17c2V0QWN0aXZlVGFifSBzZXNzaW9uPXtzZXNzaW9ufSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXIgc2Vzc2lvbj17c2Vzc2lvbn0gYWN0aXZlVGFiPXthY3RpdmVUYWJ9IG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9IG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBwLTQgbWQ6cC04XCI+XHJcbiAgICAgICAgICB7Z2xvYmFsRXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e2dsb2JhbEVycm9yfSAvPn1cclxuICAgICAgICAgIHtyZW5kZXJBY3RpdmUoKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZmlsZU1vZGFsIHN0YXRlPXtwcm9maWxlTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KX0gLz5cclxuICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICBvcGVuPXthcHBvaW50bWVudE1vZGFsLm9wZW59XHJcbiAgICAgICAgYXBwb2ludG1lbnQ9e2FwcG9pbnRtZW50TW9kYWwuZGF0YX1cclxuICAgICAgICBvcHRpb25zPXthcHBvaW50bWVudE1vZGFsLm9wdGlvbnMgfHwgb3B0aW9uc0NhY2hlIHx8IHt9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UsIGFsbG93RGVsZXRlOiBmYWxzZSB9KSl9XHJcbiAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlQXBwb2ludG1lbnR9XHJcbiAgICAgICAgaXNOZXc9e2FwcG9pbnRtZW50TW9kYWwuaXNOZXd9XHJcbiAgICAgICAgY2xpZW50cz17ZGFzaGJvYXJkPy5jbGllbnRzIHx8IFtdfVxyXG4gICAgICAgIGNhbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZX1cclxuICAgICAgICBvbkRlbGV0ZT17YXBwb2ludG1lbnRNb2RhbC5hbGxvd0RlbGV0ZSA/IGhhbmRsZURlbGV0ZUFwcG9pbnRtZW50IDogbnVsbH1cclxuICAgICAgLz5cclxuICAgICAgPENvbmZpcm1EaWFsb2cgey4uLmNvbmZpcm1EaWFsb2d9IG9uUmVzdWx0PXtoYW5kbGVDb25maXJtUmVzdWx0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmxldCByZWFjdEFwcFJvb3QgPSBudWxsO1xyXG5jb25zdCByZW5kZXJBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXJvb3RFbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDQvdCw0LnQtNC10L0g0LrQvtC90YLQtdC50L3QtdGAICNyb290Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlYWN0QXBwUm9vdCkge1xyXG4gICAgICByZWFjdEFwcFJvb3QgPVxyXG4gICAgICAgIHR5cGVvZiBjcmVhdGVSb290ID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpXHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICByZW5kZXI6IChub2RlKSA9PiBSZWFjdERPTS5yZW5kZXIobm9kZSwgcm9vdEVsZW1lbnQpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVhY3RBcHBSb290LnJlbmRlcig8QXBwIC8+KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRmF0YWwgcmVuZGVyIGVycm9yOicsIGVycm9yKTtcclxuICAgIGlmIChyb290RWxlbWVudCkge1xyXG4gICAgICByb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIlxyXG4gICAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6MTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAyMDYxNztcclxuICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHBhZGRpbmc6MjRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDo0ODBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQ4LDExMywxMTMsMC40KTtiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsMC44NSk7Ym9yZGVyLXJhZGl1czoxNnB4O3BhZGRpbmc6MjRweDtcIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6I2ZlY2FjYTttYXJnaW4tYm90dG9tOjEycHg7XCI+XHJcbiAgICAgICAgICAgICAg0J7RiNC40LHQutCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC40L3RgtC10YDRhNC10LnRgdCwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweDtjb2xvcjojY2JkNWY1O3doaXRlLXNwYWNlOnByZS13cmFwO1wiPlxyXG4gICAgICAgICAgICAgICR7ZXJyb3I/Lm1lc3NhZ2UgfHwgJ9Ch0LzQvtGC0YDQuNGC0LUg0LrQvtC90YHQvtC70Ywg0LHRgNCw0YPQt9C10YDQsCAoRjEyKSd9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIlxyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICM0YjU1NjM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OTk5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgXCIgb25jbGljaz1cIndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVwiPlxyXG4gICAgICAgICAgICDQn9C10YDQtdC30LDQs9GA0YPQt9C40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyQXBwKCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFSLENBQUEsRUFBQUgsQ0FBQSxPQUFBaUIsQ0FBQSxJQUFBRixDQUFBLEtBQUFWLENBQUEsSUFBQUwsQ0FBQSxHQUFBZ0IsQ0FBQSxDQUFBTyxNQUFBLEVBQUF2QixDQUFBLFVBQUFLLENBQUEsRUFBQUUsQ0FBQSxHQUFBUyxDQUFBLENBQUFoQixDQUFBLEdBQUFxQixDQUFBLEdBQUFILENBQUEsQ0FBQUYsQ0FBQSxFQUFBUSxDQUFBLEdBQUFqQixDQUFBLEtBQUFOLENBQUEsUUFBQUksQ0FBQSxHQUFBbUIsQ0FBQSxLQUFBckIsQ0FBQSxNQUFBUSxDQUFBLEdBQUFKLENBQUEsRUFBQUMsQ0FBQSxHQUFBRCxDQUFBLFlBQUFDLENBQUEsV0FBQUQsQ0FBQSxNQUFBQSxDQUFBLE1BQUFSLENBQUEsSUFBQVEsQ0FBQSxPQUFBYyxDQUFBLE1BQUFoQixDQUFBLEdBQUFKLENBQUEsUUFBQW9CLENBQUEsR0FBQWQsQ0FBQSxRQUFBQyxDQUFBLE1BQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBaEIsQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQUksQ0FBQSxPQUFBYyxDQUFBLEdBQUFHLENBQUEsS0FBQW5CLENBQUEsR0FBQUosQ0FBQSxRQUFBTSxDQUFBLE1BQUFKLENBQUEsSUFBQUEsQ0FBQSxHQUFBcUIsQ0FBQSxNQUFBakIsQ0FBQSxNQUFBTixDQUFBLEVBQUFNLENBQUEsTUFBQUosQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQXFCLENBQUEsRUFBQWhCLENBQUEsY0FBQUgsQ0FBQSxJQUFBSixDQUFBLGFBQUFtQixDQUFBLFFBQUFILENBQUEsT0FBQWQsQ0FBQSxxQkFBQUUsQ0FBQSxFQUFBVyxDQUFBLEVBQUFRLENBQUEsUUFBQVQsQ0FBQSxZQUFBVSxTQUFBLHVDQUFBUixDQUFBLFVBQUFELENBQUEsSUFBQUssQ0FBQSxDQUFBTCxDQUFBLEVBQUFRLENBQUEsR0FBQWhCLENBQUEsR0FBQVEsQ0FBQSxFQUFBTCxDQUFBLEdBQUFhLENBQUEsR0FBQXhCLENBQUEsR0FBQVEsQ0FBQSxPQUFBVCxDQUFBLEdBQUFZLENBQUEsTUFBQU0sQ0FBQSxLQUFBVixDQUFBLEtBQUFDLENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFVLENBQUEsQ0FBQWYsQ0FBQSxRQUFBa0IsQ0FBQSxDQUFBYixDQUFBLEVBQUFHLENBQUEsS0FBQU8sQ0FBQSxDQUFBZixDQUFBLEdBQUFRLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBTCxDQUFBLEdBQUFPLENBQUEsQ0FBQUYsQ0FBQSxXQUFBTCxDQUFBLEdBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUksQ0FBQSxVQUFBYyxTQUFBLDJDQUFBekIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLEdBQUFYLENBQUEsQ0FBQTRCLEtBQUEsRUFBQXBCLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBUixDQUFBLEdBQUFPLENBQUEsZUFBQVAsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxHQUFBQyxDQUFBLFNBQUFHLENBQUEsR0FBQWMsU0FBQSx1Q0FBQXBCLENBQUEsZ0JBQUFHLENBQUEsT0FBQUQsQ0FBQSxHQUFBUixDQUFBLGNBQUFDLENBQUEsSUFBQWlCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZixDQUFBLFFBQUFRLENBQUEsR0FBQVYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSxFQUFBZSxDQUFBLE9BQUFFLENBQUEsa0JBQUFwQixDQUFBLElBQUFPLENBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLE1BQUFHLENBQUEsR0FBQVgsQ0FBQSxjQUFBZSxDQUFBLG1CQUFBYSxLQUFBLEVBQUE1QixDQUFBLEVBQUEyQixJQUFBLEVBQUFWLENBQUEsU0FBQWhCLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsUUFBQVMsQ0FBQSxnQkFBQVYsVUFBQSxjQUFBbUIsa0JBQUEsY0FBQUMsMkJBQUEsS0FBQTlCLENBQUEsR0FBQVksTUFBQSxDQUFBbUIsY0FBQSxNQUFBdkIsQ0FBQSxNQUFBTCxDQUFBLElBQUFILENBQUEsQ0FBQUEsQ0FBQSxJQUFBRyxDQUFBLFNBQUFXLG1CQUFBLENBQUFkLENBQUEsT0FBQUcsQ0FBQSxpQ0FBQUgsQ0FBQSxHQUFBVyxDQUFBLEdBQUFtQiwwQkFBQSxDQUFBckIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQWhCLENBQUEsV0FBQWEsTUFBQSxDQUFBb0IsY0FBQSxHQUFBcEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBakMsQ0FBQSxFQUFBK0IsMEJBQUEsS0FBQS9CLENBQUEsQ0FBQWtDLFNBQUEsR0FBQUgsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFmLENBQUEsRUFBQU0sQ0FBQSx5QkFBQU4sQ0FBQSxDQUFBVSxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBRixDQUFBLEdBQUFaLENBQUEsV0FBQThCLGlCQUFBLENBQUFwQixTQUFBLEdBQUFxQiwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQUgsQ0FBQSxpQkFBQW1CLDBCQUFBLEdBQUFoQixtQkFBQSxDQUFBZ0IsMEJBQUEsaUJBQUFELGlCQUFBLEdBQUFBLGlCQUFBLENBQUFLLFdBQUEsd0JBQUFwQixtQkFBQSxDQUFBZ0IsMEJBQUEsRUFBQXpCLENBQUEsd0JBQUFTLG1CQUFBLENBQUFILENBQUEsR0FBQUcsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBTixDQUFBLGdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFSLENBQUEsaUNBQUFXLG1CQUFBLENBQUFILENBQUEsOERBQUF3QixZQUFBLFlBQUFBLGFBQUEsYUFBQUMsQ0FBQSxFQUFBN0IsQ0FBQSxFQUFBOEIsQ0FBQSxFQUFBdEIsQ0FBQTtBQUFBLFNBQUFELG9CQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLFFBQUFPLENBQUEsR0FBQUssTUFBQSxDQUFBMEIsY0FBQSxRQUFBL0IsQ0FBQSx1QkFBQVIsQ0FBQSxJQUFBUSxDQUFBLFFBQUFPLG1CQUFBLFlBQUF5QixtQkFBQXhDLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsYUFBQUssRUFBQUosQ0FBQSxFQUFBRSxDQUFBLElBQUFXLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxZQUFBRixDQUFBLGdCQUFBeUMsT0FBQSxDQUFBdkMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFKLENBQUEsU0FBQUUsQ0FBQSxHQUFBTSxDQUFBLEdBQUFBLENBQUEsQ0FBQVIsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQixLQUFBLEVBQUF6QixDQUFBLEVBQUFzQyxVQUFBLEdBQUF6QyxDQUFBLEVBQUEwQyxZQUFBLEdBQUExQyxDQUFBLEVBQUEyQyxRQUFBLEdBQUEzQyxDQUFBLE1BQUFELENBQUEsQ0FBQUUsQ0FBQSxJQUFBRSxDQUFBLElBQUFFLENBQUEsYUFBQUEsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBUyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQTRDLG1CQUFBekMsQ0FBQSxFQUFBSCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSSxDQUFBLEVBQUFlLENBQUEsRUFBQVosQ0FBQSxjQUFBRCxDQUFBLEdBQUFKLENBQUEsQ0FBQWlCLENBQUEsRUFBQVosQ0FBQSxHQUFBRyxDQUFBLEdBQUFKLENBQUEsQ0FBQXFCLEtBQUEsV0FBQXpCLENBQUEsZ0JBQUFKLENBQUEsQ0FBQUksQ0FBQSxLQUFBSSxDQUFBLENBQUFvQixJQUFBLEdBQUEzQixDQUFBLENBQUFXLENBQUEsSUFBQWtDLE9BQUEsQ0FBQUMsT0FBQSxDQUFBbkMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBSSxDQUFBO0FBQUEsU0FBQTJDLGtCQUFBN0MsQ0FBQSw2QkFBQUgsQ0FBQSxTQUFBRCxDQUFBLEdBQUFrRCxTQUFBLGFBQUFKLE9BQUEsV0FBQTVDLENBQUEsRUFBQUksQ0FBQSxRQUFBZSxDQUFBLEdBQUFqQixDQUFBLENBQUErQyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUEsWUFBQW9ELE1BQUFoRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpELENBQUEsY0FBQWlELE9BQUFqRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsV0FBQWpELENBQUEsS0FBQWdELEtBQUE7QUFBQSxTQUFBRSxlQUFBcEQsQ0FBQSxFQUFBRixDQUFBLFdBQUF1RCxlQUFBLENBQUFyRCxDQUFBLEtBQUFzRCxxQkFBQSxDQUFBdEQsQ0FBQSxFQUFBRixDQUFBLEtBQUF5RCwyQkFBQSxDQUFBdkQsQ0FBQSxFQUFBRixDQUFBLEtBQUEwRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUFoQyxTQUFBO0FBQUEsU0FBQStCLDRCQUFBdkQsQ0FBQSxFQUFBbUIsQ0FBQSxRQUFBbkIsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUQsaUJBQUEsQ0FBQXpELENBQUEsRUFBQW1CLENBQUEsT0FBQXBCLENBQUEsTUFBQTJELFFBQUEsQ0FBQWpDLElBQUEsQ0FBQXpCLENBQUEsRUFBQTJELEtBQUEsNkJBQUE1RCxDQUFBLElBQUFDLENBQUEsQ0FBQTRELFdBQUEsS0FBQTdELENBQUEsR0FBQUMsQ0FBQSxDQUFBNEQsV0FBQSxDQUFBQyxJQUFBLGFBQUE5RCxDQUFBLGNBQUFBLENBQUEsR0FBQStELEtBQUEsQ0FBQUMsSUFBQSxDQUFBL0QsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQWlFLElBQUEsQ0FBQWpFLENBQUEsSUFBQTBELGlCQUFBLENBQUF6RCxDQUFBLEVBQUFtQixDQUFBO0FBQUEsU0FBQXNDLGtCQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQSxhQUFBQSxDQUFBLElBQUFBLENBQUEsR0FBQW5CLENBQUEsQ0FBQXNCLE1BQUEsTUFBQUgsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBc0IsTUFBQSxZQUFBeEIsQ0FBQSxNQUFBSSxDQUFBLEdBQUE0RCxLQUFBLENBQUEzQyxDQUFBLEdBQUFyQixDQUFBLEdBQUFxQixDQUFBLEVBQUFyQixDQUFBLElBQUFJLENBQUEsQ0FBQUosQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUksQ0FBQTtBQUFBLFNBQUFvRCxzQkFBQXRELENBQUEsRUFBQXVCLENBQUEsUUFBQXhCLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxLQUFBSCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQVMsQ0FBQSxPQUFBTCxDQUFBLE9BQUFWLENBQUEsaUJBQUFFLENBQUEsSUFBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUF6QixDQUFBLEdBQUFpRSxJQUFBLFFBQUExQyxDQUFBLFFBQUFaLE1BQUEsQ0FBQVosQ0FBQSxNQUFBQSxDQUFBLFVBQUFlLENBQUEsdUJBQUFBLENBQUEsSUFBQWhCLENBQUEsR0FBQVEsQ0FBQSxDQUFBbUIsSUFBQSxDQUFBMUIsQ0FBQSxHQUFBMkIsSUFBQSxNQUFBUCxDQUFBLENBQUErQyxJQUFBLENBQUFwRSxDQUFBLENBQUE2QixLQUFBLEdBQUFSLENBQUEsQ0FBQUcsTUFBQSxLQUFBQyxDQUFBLEdBQUFULENBQUEsaUJBQUFkLENBQUEsSUFBQUksQ0FBQSxPQUFBRixDQUFBLEdBQUFGLENBQUEseUJBQUFjLENBQUEsWUFBQWYsQ0FBQSxlQUFBVyxDQUFBLEdBQUFYLENBQUEsY0FBQVksTUFBQSxDQUFBRCxDQUFBLE1BQUFBLENBQUEsMkJBQUFOLENBQUEsUUFBQUYsQ0FBQSxhQUFBaUIsQ0FBQTtBQUFBLFNBQUFrQyxnQkFBQXJELENBQUEsUUFBQThELEtBQUEsQ0FBQUssT0FBQSxDQUFBbkUsQ0FBQSxVQUFBQSxDQUFBO0FBREMsSUFBQW9FLE1BQUEsR0FBeUZDLEtBQUs7RUFBdEZDLFFBQVEsR0FBQUYsTUFBQSxDQUFSRSxRQUFRO0VBQUVDLFNBQVMsR0FBQUgsTUFBQSxDQUFURyxTQUFTO0VBQUVDLFdBQVcsR0FBQUosTUFBQSxDQUFYSSxXQUFXO0VBQUVDLE9BQU8sR0FBQUwsTUFBQSxDQUFQSyxPQUFPO0VBQUVDLE1BQU0sR0FBQU4sTUFBQSxDQUFOTSxNQUFNO0VBQUVDLGVBQWUsR0FBQVAsTUFBQSxDQUFmTyxlQUFlO0VBQUVDLFFBQVEsR0FBQVIsTUFBQSxDQUFSUSxRQUFRO0FBQ3JGLElBQUFDLFNBQUEsR0FBcUNDLFFBQVE7RUFBckNDLFlBQVksR0FBQUYsU0FBQSxDQUFaRSxZQUFZO0VBQUVDLFVBQVUsR0FBQUgsU0FBQSxDQUFWRyxVQUFVO0FBRWhDLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0JBLENBQUEsRUFBUztFQUNyQyxJQUFJLE9BQU9DLE1BQU0sS0FBSyxXQUFXLElBQUlBLE1BQU0sQ0FBQ0MsUUFBUSxJQUFJRCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQzlFLFVBQUFDLE1BQUEsQ0FBVUgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU07RUFDbEM7RUFDQSxPQUFPLDJCQUEyQjtBQUNwQyxDQUFDO0FBRUQsSUFBTUUsb0JBQW9CLEdBQUdMLHdCQUF3QixDQUFDLENBQUM7QUFDdkQsSUFBTU0sWUFBWSxHQUFHTCxNQUFNLENBQUNNLG1CQUFtQixJQUFJRixvQkFBb0I7QUFDdkVKLE1BQU0sQ0FBQ00sbUJBQW1CLEdBQUdELFlBQVk7QUFFekMsSUFBTUUsU0FBUyxHQUFHLENBQ2hCO0VBQUVDLEVBQUUsRUFBRSxXQUFXO0VBQUVDLEtBQUssRUFBRTtBQUFRLENBQUMsRUFDbkM7RUFBRUQsRUFBRSxFQUFFLFFBQVE7RUFBRUMsS0FBSyxFQUFFO0FBQVMsQ0FBQyxFQUNqQztFQUFFRCxFQUFFLEVBQUUsS0FBSztFQUFFQyxLQUFLLEVBQUU7QUFBTSxDQUFDLEVBQzNCO0VBQUVELEVBQUUsRUFBRSxRQUFRO0VBQUVDLEtBQUssRUFBRTtBQUFVLENBQUMsQ0FDbkM7QUFFRCxJQUFNQyxXQUFXLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQ2pGLElBQU1DLFdBQVcsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDO0FBRTFELElBQU1DLFlBQVksR0FBRztFQUNuQkMsWUFBWSxFQUFFO0lBQUVKLEtBQUssRUFBRSxRQUFRO0lBQUVLLElBQUksRUFBRSxNQUFNO0lBQUVDLFNBQVMsRUFBRSxJQUFJO0lBQUVDLG9CQUFvQixFQUFFLElBQUk7SUFBRUMsb0JBQW9CLEVBQUUsSUFBSTtJQUFFQyxXQUFXLEVBQUU7TUFBRUMsR0FBRyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU87RUFBRSxDQUFDO0VBQ3pLQyxTQUFTLEVBQUU7SUFBRVosS0FBSyxFQUFFLFlBQVk7SUFBRUssSUFBSSxFQUFFLE1BQU07SUFBRUMsU0FBUyxFQUFFLEtBQUs7SUFBRUMsb0JBQW9CLEVBQUUsSUFBSTtJQUFFRSxXQUFXLEVBQUU7TUFBRUMsR0FBRyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU07RUFBRSxDQUFDO0VBQzlJRSxLQUFLLEVBQUU7SUFBRWIsS0FBSyxFQUFFLFNBQVM7SUFBRUssSUFBSSxFQUFFLE1BQU07SUFBRUMsU0FBUyxFQUFFLElBQUk7SUFBRUcsV0FBVyxFQUFFO01BQUVDLEdBQUcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNO0VBQUUsQ0FBQztFQUMxR0csT0FBTyxFQUFFO0lBQUVkLEtBQUssRUFBRSxTQUFTO0lBQUVLLElBQUksRUFBRTtFQUFTLENBQUM7RUFDN0NVLFFBQVEsRUFBRTtJQUFFZixLQUFLLEVBQUUsUUFBUTtJQUFFSyxJQUFJLEVBQUU7RUFBUztBQUM5QyxDQUFDO0FBRUQsSUFBTVcsYUFBYSxHQUFHO0VBQ3BCWixZQUFZLEVBQUUsQ0FDWjtJQUFFTSxHQUFHLEVBQUUsY0FBYztJQUFFVixLQUFLLEVBQUUsUUFBUTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLE1BQU07SUFBRUMsYUFBYSxFQUFFLElBQUk7SUFBRUMsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUM3RztJQUFFVixHQUFHLEVBQUUsT0FBTztJQUFFVixLQUFLLEVBQUUsU0FBUztJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLE1BQU07SUFBRUUsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUNsRjtJQUFFVixHQUFHLEVBQUUsUUFBUTtJQUFFVixLQUFLLEVBQUUsUUFBUTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLFFBQVE7SUFBRUcsVUFBVSxFQUFFLFNBQVM7SUFBRUQsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUMzRztJQUFFVixHQUFHLEVBQUUsTUFBTTtJQUFFVixLQUFLLEVBQUUsTUFBTTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLE1BQU07SUFBRUUsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUM5RTtJQUFFVixHQUFHLEVBQUUsTUFBTTtJQUFFVixLQUFLLEVBQUUsT0FBTztJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLE1BQU07SUFBRUUsUUFBUSxFQUFFLE1BQU07SUFBRUUsTUFBTSxFQUFFO0VBQUssQ0FBQyxFQUM3RjtJQUFFWixHQUFHLEVBQUUsUUFBUTtJQUFFVixLQUFLLEVBQUUsUUFBUTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLFFBQVE7SUFBRUcsVUFBVSxFQUFFLFVBQVU7SUFBRUUsS0FBSyxFQUFFLFFBQVE7SUFBRUgsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUM3SDtJQUFFVixHQUFHLEVBQUUsVUFBVTtJQUFFVixLQUFLLEVBQUUsUUFBUTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLGNBQWM7SUFBRUcsVUFBVSxFQUFFLFVBQVU7SUFBRUQsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUNwSDtJQUFFVixHQUFHLEVBQUUsUUFBUTtJQUFFVixLQUFLLEVBQUUsWUFBWTtJQUFFaUIsUUFBUSxFQUFFLElBQUk7SUFBRUMsSUFBSSxFQUFFLE1BQU07SUFBRUUsUUFBUSxFQUFFO0VBQU8sQ0FBQyxFQUN0RjtJQUFFVixHQUFHLEVBQUUsc0JBQXNCO0lBQUVWLEtBQUssRUFBRSxxQkFBcUI7SUFBRWlCLFFBQVEsRUFBRSxJQUFJO0lBQUVDLElBQUksRUFBRSxTQUFTO0lBQUVLLEtBQUssRUFBRTtFQUFTLENBQUMsRUFDL0c7SUFBRWIsR0FBRyxFQUFFLHNCQUFzQjtJQUFFVixLQUFLLEVBQUUscUJBQXFCO0lBQUVpQixRQUFRLEVBQUUsSUFBSTtJQUFFQyxJQUFJLEVBQUUsU0FBUztJQUFFSyxLQUFLLEVBQUU7RUFBUyxDQUFDLENBQ2hIO0VBQ0RYLFNBQVMsRUFBRSxDQUNUO0lBQUVGLEdBQUcsRUFBRSxRQUFRO0lBQUVWLEtBQUssRUFBRSxRQUFRO0lBQUVpQixRQUFRLEVBQUUsS0FBSztJQUFFRyxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQ3JFO0lBQUVWLEdBQUcsRUFBRSxXQUFXO0lBQUVWLEtBQUssRUFBRSxhQUFhO0lBQUVpQixRQUFRLEVBQUUsS0FBSztJQUFFRyxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQzdFO0lBQUVWLEdBQUcsRUFBRSxNQUFNO0lBQUVWLEtBQUssRUFBRSxNQUFNO0lBQUVpQixRQUFRLEVBQUUsS0FBSztJQUFFRyxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQ2pFO0lBQUVWLEdBQUcsRUFBRSxNQUFNO0lBQUVWLEtBQUssRUFBRSxPQUFPO0lBQUVpQixRQUFRLEVBQUUsSUFBSTtJQUFFQyxJQUFJLEVBQUUsTUFBTTtJQUFFSyxLQUFLLEVBQUUsUUFBUTtJQUFFSCxRQUFRLEVBQUU7RUFBTyxDQUFDLENBQ2pHO0VBQ0RQLEtBQUssRUFBRSxDQUNMO0lBQUVILEdBQUcsRUFBRSxNQUFNO0lBQUVWLEtBQUssRUFBRSxLQUFLO0lBQUVpQixRQUFRLEVBQUUsSUFBSTtJQUFFQyxJQUFJLEVBQUUsTUFBTTtJQUFFQyxhQUFhLEVBQUUsSUFBSTtJQUFFQyxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQ2xHO0lBQUVWLEdBQUcsRUFBRSxPQUFPO0lBQUVWLEtBQUssRUFBRSxTQUFTO0lBQUVpQixRQUFRLEVBQUUsSUFBSTtJQUFFQyxJQUFJLEVBQUUsTUFBTTtJQUFFRSxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQ2xGO0lBQUVWLEdBQUcsRUFBRSxZQUFZO0lBQUVWLEtBQUssRUFBRSxVQUFVO0lBQUVpQixRQUFRLEVBQUUsSUFBSTtJQUFFQyxJQUFJLEVBQUUsTUFBTTtJQUFFRSxRQUFRLEVBQUU7RUFBTyxDQUFDLEVBQ3hGO0lBQUVWLEdBQUcsRUFBRSxRQUFRO0lBQUVWLEtBQUssRUFBRSxnQkFBZ0I7SUFBRWlCLFFBQVEsRUFBRSxJQUFJO0lBQUVDLElBQUksRUFBRSxRQUFRO0lBQUVHLFVBQVUsRUFBRSxTQUFTO0lBQUVELFFBQVEsRUFBRTtFQUFPLENBQUM7QUFFdkgsQ0FBQztBQUVELElBQU1JLFVBQVUsR0FBRyxDQUFDO0FBQ3BCLElBQU1DLFVBQVUsR0FBRyxDQUFDO0FBQ3BCLElBQU1DLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLElBQUlDLGtCQUFrQixHQUFHLElBQUk7QUFDN0IsSUFBTUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQzVDLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUE7RUFBQSxPQUFVO0lBQ2pDM0QsSUFBSSxFQUFFLEVBQUU7SUFDUjRELFFBQVEsRUFBRSxFQUFFO0lBQ1pDLE1BQU0sRUFBRSxHQUFHO0lBQ1hDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxRQUFRLEVBQUU7RUFDWixDQUFDO0FBQUEsQ0FBQztBQUNGLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUE7RUFBQSxPQUFVO0lBQ2xDcEUsSUFBSSxFQUFFLEVBQUU7SUFDUnFFLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLE1BQU0sRUFBRSxDQUFDO0VBQ1gsQ0FBQztBQUFBLENBQUM7QUFDRixJQUFNQyxtQkFBbUIsR0FBRztFQUMxQkMsSUFBSSxFQUFFLEtBQUs7RUFDWEMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsT0FBTyxFQUFFLEVBQUU7RUFDWEMsWUFBWSxFQUFFLGFBQWE7RUFDM0JDLFdBQVcsRUFBRSxRQUFRO0VBQ3JCQyxJQUFJLEVBQUU7QUFDUixDQUFDO0FBQ0QsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUE7RUFBQSxJQUFJQyxNQUFNLEdBQUE1RixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsQ0FBQyxDQUFDO0VBQUEsT0FBSzRGLE1BQU0sQ0FBQ2xELEVBQUUsSUFBSWtELE1BQU0sQ0FBQ0UsRUFBRSxJQUFJRixNQUFNLENBQUNHLEVBQUUsSUFBSUgsTUFBTSxDQUFDSSxRQUFRLElBQUlKLE1BQU0sQ0FBQ0ssU0FBUyxJQUFJLElBQUk7QUFBQTtBQUV2SCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQTtFQUFBLFNBQUFDLElBQUEsR0FBQW5HLFNBQUEsQ0FBQTFCLE1BQUEsRUFBTzhILE9BQU8sT0FBQXRGLEtBQUEsQ0FBQXFGLElBQUEsR0FBQUUsSUFBQSxNQUFBQSxJQUFBLEdBQUFGLElBQUEsRUFBQUUsSUFBQTtJQUFQRCxPQUFPLENBQUFDLElBQUEsSUFBQXJHLFNBQUEsQ0FBQXFHLElBQUE7RUFBQTtFQUFBLE9BQUtELE9BQU8sQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUFBO0FBQ3BFLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSXBELEdBQUcsRUFBRXFELFlBQVksRUFBSztFQUM3QyxJQUFBQyxTQUFBLEdBQTBCckYsUUFBUSxDQUFDLFlBQU07TUFDdkMsSUFBSTtRQUNGLElBQU1zRixNQUFNLEdBQUcxRSxNQUFNLENBQUMyRSxZQUFZLENBQUNDLE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQztRQUMvQyxPQUFPdUQsTUFBTSxHQUFHRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osTUFBTSxDQUFDLEdBQUdGLFlBQVk7TUFDbkQsQ0FBQyxDQUFDLE9BQU9PLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLElBQUksQ0FBQyx5QkFBeUIsRUFBRUYsS0FBSyxDQUFDO1FBQzlDLE9BQU9QLFlBQVk7TUFDckI7SUFDRixDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBaEgsY0FBQSxDQUFBdUcsU0FBQTtJQVJLaEksS0FBSyxHQUFBeUksVUFBQTtJQUFFQyxRQUFRLEdBQUFELFVBQUE7RUFVdEIsSUFBTUUsV0FBVyxHQUFHOUYsV0FBVyxDQUM3QixVQUFDK0YsT0FBTyxFQUFLO0lBQ1hGLFFBQVEsQ0FBQyxVQUFDRyxJQUFJLEVBQUs7TUFDakIsSUFBTUMsU0FBUyxHQUFHLE9BQU9GLE9BQU8sS0FBSyxVQUFVLEdBQUdBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEdBQUdELE9BQU87TUFDekUsSUFBSTtRQUNGckYsTUFBTSxDQUFDMkUsWUFBWSxDQUFDYSxPQUFPLENBQUNyRSxHQUFHLEVBQUUwRCxJQUFJLENBQUNZLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7TUFDN0QsQ0FBQyxDQUFDLE9BQU9SLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLElBQUksQ0FBQywwQkFBMEIsRUFBRUYsS0FBSyxDQUFDO01BQ2pEO01BQ0EsT0FBT1EsU0FBUztJQUNsQixDQUFDLENBQUM7RUFDSixDQUFDLEVBQ0QsQ0FBQ3BFLEdBQUcsQ0FDTixDQUFDO0VBRUQsT0FBTyxDQUFDMUUsS0FBSyxFQUFFMkksV0FBVyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUEwQjtFQUFBLElBQXRCQyxVQUFVLEdBQUE3SCxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsSUFBSTtFQUNuQyxJQUFBOEgsVUFBQSxHQUFzQnhHLFFBQVEsQ0FBQztNQUFBLE9BQU15RyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUFBQyxVQUFBLEdBQUE3SCxjQUFBLENBQUEwSCxVQUFBO0lBQXpDRSxHQUFHLEdBQUFDLFVBQUE7SUFBRUMsTUFBTSxHQUFBRCxVQUFBO0VBQ2xCMUcsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFNNEcsS0FBSyxHQUFHQyxXQUFXLENBQUM7TUFBQSxPQUFNRixNQUFNLENBQUNILElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUFBLEdBQUVILFVBQVUsQ0FBQztJQUMvRCxPQUFPO01BQUEsT0FBTVEsYUFBYSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUNuQyxDQUFDLEVBQUUsQ0FBQ04sVUFBVSxDQUFDLENBQUM7RUFDaEIsT0FBT0csR0FBRztBQUNaLENBQUM7QUFFRCxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEdBQUcsRUFBRUMsT0FBTyxFQUFLO0VBQ3hDakgsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJLENBQUNpSCxPQUFPLEVBQUUsT0FBTzNDLFNBQVM7SUFDOUIsSUFBTTRDLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUs7TUFDMUIsSUFBSSxDQUFDSCxHQUFHLENBQUNJLE9BQU8sSUFBSUosR0FBRyxDQUFDSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxNQUFNLENBQUMsRUFBRTtNQUN4REwsT0FBTyxDQUFDRSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUNESSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRU4sUUFBUSxDQUFDO0lBQ2hESyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRU4sUUFBUSxDQUFDO0lBQ2pELE9BQU8sWUFBTTtNQUNYSyxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFdBQVcsRUFBRVAsUUFBUSxDQUFDO01BQ25ESyxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFlBQVksRUFBRVAsUUFBUSxDQUFDO0lBQ3RELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ0YsR0FBRyxFQUFFQyxPQUFPLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsSUFBTVMsa0JBQWtCO0VBQUEsSUFBQUMsSUFBQSxHQUFBbkosaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQStKLFFBQUE7SUFBQSxJQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFBQUMsTUFBQTtJQUFBLE9BQUFwSyxZQUFBLEdBQUFDLENBQUEsV0FBQW9LLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBck0sQ0FBQTtRQUFBO1VBQUFxTSxRQUFBLENBQUFyTSxDQUFBO1VBQUEsT0FDRnNNLEtBQUssSUFBQW5ILE1BQUEsQ0FBSUUsWUFBWSxvQkFBaUIsQ0FBQztRQUFBO1VBQXhENkcsUUFBUSxHQUFBRyxRQUFBLENBQUFyTCxDQUFBO1VBQUEsSUFDVGtMLFFBQVEsQ0FBQ0ssRUFBRTtZQUFBRixRQUFBLENBQUFyTSxDQUFBO1lBQUE7VUFBQTtVQUFBLE1BQVEsSUFBSXdNLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztRQUFBO1VBQUFILFFBQUEsQ0FBQXJNLENBQUE7VUFBQSxPQUNsRGtNLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7UUFBQTtVQUEvQk4sT0FBTyxHQUFBRSxRQUFBLENBQUFyTCxDQUFBO1VBQ1BvTCxNQUFNLEdBQUd4SSxLQUFLLENBQUNLLE9BQU8sQ0FBQ2tJLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsTUFBTSxDQUFDaEQsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQ3FELEdBQUcsQ0FBQ0Msa0JBQWtCLENBQUMsR0FBRyxFQUFFO1VBQUEsT0FBQU4sUUFBQSxDQUFBcEwsQ0FBQSxJQUNuRzJDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUkrSSxHQUFHLENBQUNSLE1BQU0sQ0FBQyxDQUFDO01BQUE7SUFBQSxHQUFBSCxPQUFBO0VBQUEsQ0FDbkM7RUFBQSxnQkFOS0Ysa0JBQWtCQSxDQUFBO0lBQUEsT0FBQUMsSUFBQSxDQUFBakosS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxHQU12QjtBQUVELElBQU0rSixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlwTCxLQUFLO0VBQUEsT0FBTUEsS0FBSyxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUdxTCxNQUFNLENBQUNyTCxLQUFLLENBQUM7QUFBQSxDQUFDO0FBQ3JFLElBQU1zTCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUl0TCxLQUFLLEVBQUs7RUFDakMsSUFBTXVMLFVBQVUsR0FBR0gsYUFBYSxDQUFDcEwsS0FBSyxDQUFDLENBQUN3TCxJQUFJLENBQUMsQ0FBQztFQUM5QyxJQUFJLENBQUNELFVBQVUsRUFBRSxPQUFPLEVBQUU7RUFDMUIsSUFBSSxrQkFBa0IsQ0FBQ2xKLElBQUksQ0FBQ2tKLFVBQVUsQ0FBQyxJQUFJQSxVQUFVLENBQUNFLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPRixVQUFVO0VBQzVGLElBQU1HLFNBQVMsR0FBR0gsVUFBVSxDQUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN0RSxJQUFJRCxTQUFTLENBQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPQyxTQUFTO0VBQy9DLElBQUlBLFNBQVMsQ0FBQ0QsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQUEvSCxNQUFBLENBQVdnSSxTQUFTO0VBQ3hELGlCQUFBaEksTUFBQSxDQUFpQmdJLFNBQVM7QUFDNUIsQ0FBQztBQUNELElBQU1SLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlsTCxLQUFLLEVBQUs7RUFDcEMsSUFBTTRMLFFBQVEsR0FBR04sZUFBZSxDQUFDdEwsS0FBSyxDQUFDO0VBQ3ZDLElBQUksQ0FBQzRMLFFBQVEsRUFBRSxPQUFPLEVBQUU7RUFDeEIsSUFBSSxrQkFBa0IsQ0FBQ3ZKLElBQUksQ0FBQ3VKLFFBQVEsQ0FBQyxJQUFJQSxRQUFRLENBQUNILFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPRyxRQUFRO0VBQ3RGLE9BQU9BLFFBQVEsQ0FBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHRyxRQUFRLE9BQUFsSSxNQUFBLENBQU9rSSxRQUFRLENBQUU7QUFDN0QsQ0FBQztBQUNELElBQU1DLGVBQWUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7QUFDdEQsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJaE0sS0FBSyxFQUFLO0VBQ2hDLElBQU1pTSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ2xNLEtBQUssQ0FBQztFQUM3QixJQUFJLENBQUNrTSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFO0VBQ3hDLFVBQUF2SSxNQUFBLENBQVVtSSxlQUFlLENBQUNPLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDO0FBQzNDLENBQUM7QUFDRCxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsS0FBSyxFQUFBQyxLQUFBLEVBQXVCO0VBQUEsSUFBQUMsS0FBQSxHQUFBL0ssY0FBQSxDQUFBOEssS0FBQTtJQUFwQkUsR0FBRyxHQUFBRCxLQUFBO0lBQUVFLEdBQUcsR0FBQUYsS0FBQTtJQUFFRyxJQUFJLEdBQUFILEtBQUE7RUFDdkMsSUFBTUksS0FBSyxHQUFHTixLQUFLLEdBQUcsRUFBRTtFQUN4QixJQUFNTyxNQUFNLEdBQUdQLEtBQUssR0FBRyxHQUFHO0VBQzFCLElBQUlNLEtBQUssS0FBSyxDQUFDLElBQUlDLE1BQU0sS0FBSyxFQUFFLEVBQUUsT0FBT0osR0FBRztFQUM1QyxJQUFJRyxLQUFLLElBQUksQ0FBQyxJQUFJQSxLQUFLLElBQUksQ0FBQyxLQUFLQyxNQUFNLEdBQUcsRUFBRSxJQUFJQSxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBT0gsR0FBRztFQUN6RSxPQUFPQyxJQUFJO0FBQ2IsQ0FBQztBQUVELElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUk5TSxLQUFLO0VBQUEsT0FBS29MLGFBQWEsQ0FBQ3BMLEtBQUssQ0FBQyxDQUFDMkwsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDSCxJQUFJLENBQUMsQ0FBQztBQUFBO0FBRWhHLElBQU11QixZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSS9NLEtBQUs7RUFBQSxPQUFLb0wsYUFBYSxDQUFDcEwsS0FBSyxDQUFDO0FBQUE7QUFFcEQsSUFBTWdOLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBcUI7RUFBQSxJQUFqQnRDLE9BQU8sR0FBQXJKLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQTZGLFNBQUEsR0FBQTdGLFNBQUEsTUFBRyxDQUFDLENBQUM7RUFDdkMsSUFBTTRMLGVBQWUsR0FBR0YsWUFBWSxDQUFDckMsT0FBTyxDQUFDd0MsUUFBUSxJQUFJeEMsT0FBTyxDQUFDeUMsS0FBSyxDQUFDO0VBQ3ZFLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNLMUMsT0FBTztJQUNWd0MsUUFBUSxFQUFFRCxlQUFlO0lBQ3pCM00sV0FBVyxFQUFFb0ssT0FBTyxDQUFDcEssV0FBVyxJQUFJb0ssT0FBTyxDQUFDeEksSUFBSSxJQUFJK0ssZUFBZTtJQUNuRUksUUFBUSxFQUFFM0MsT0FBTyxDQUFDMkMsUUFBUSxJQUFJM0MsT0FBTyxDQUFDM0csRUFBRSxJQUFJO0VBQUk7QUFFcEQsQ0FBQztBQUVELElBQU11SixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxXQUFXLEVBQTRCO0VBQUEsSUFBMUJDLGdCQUFnQixHQUFBbk0sU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBNkYsU0FBQSxHQUFBN0YsU0FBQSxNQUFHLEVBQUU7RUFDM0QsSUFBTW9NLFFBQVEsR0FBRyxDQUFBRCxnQkFBZ0IsYUFBaEJBLGdCQUFnQix1QkFBaEJBLGdCQUFnQixDQUFHLENBQUMsQ0FBQyxLQUFJLEVBQUU7RUFDNUMsSUFBSSxDQUFDRCxXQUFXLEVBQUUsT0FBT0UsUUFBUTtFQUNqQyxJQUFNQyxVQUFVLEdBQUcsQ0FBQ0gsV0FBVyxDQUFDak4sV0FBVyxFQUFFaU4sV0FBVyxDQUFDSSxhQUFhLEVBQUVKLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDLENBQzFGakMsR0FBRyxDQUFDLFVBQUMyQyxTQUFTO0lBQUEsT0FBS2QsZ0JBQWdCLENBQUNjLFNBQVMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDN0RsRyxNQUFNLENBQUNDLE9BQU8sQ0FBQztFQUNsQixJQUFJLENBQUM4RixVQUFVLENBQUMvTixNQUFNLElBQUksRUFBQzZOLGdCQUFnQixhQUFoQkEsZ0JBQWdCLGVBQWhCQSxnQkFBZ0IsQ0FBRTdOLE1BQU0sR0FBRSxPQUFPOE4sUUFBUTtFQUNwRSxJQUFNSyxpQkFBaUIsR0FBR04sZ0JBQWdCLENBQUN2QyxHQUFHLENBQUMsVUFBQzhDLE1BQU07SUFBQSxPQUFLakIsZ0JBQWdCLENBQUNpQixNQUFNLENBQUMsQ0FBQ0YsV0FBVyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBQUMsSUFBQUcsU0FBQSxHQUFBQywwQkFBQSxDQUMzRVAsVUFBVTtJQUFBUSxLQUFBO0VBQUE7SUFBQSxJQUFBQyxLQUFBLFlBQUFBLE1BQUEsRUFBRTtRQUFBLElBQXpCUCxTQUFTLEdBQUFNLEtBQUEsQ0FBQWxPLEtBQUE7UUFDbEIsSUFBTW9PLFVBQVUsR0FBR04saUJBQWlCLENBQUNPLFNBQVMsQ0FBQyxVQUFDQyxNQUFNO1VBQUEsT0FBS0EsTUFBTSxLQUFLVixTQUFTO1FBQUEsRUFBQztRQUNoRixJQUFJUSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7VUFBQTtZQUFBN08sQ0FBQSxFQUNkaU8sZ0JBQWdCLENBQUNZLFVBQVU7VUFBQztRQUNyQztNQUNGLENBQUM7TUFBQUcsSUFBQTtJQUxELEtBQUFQLFNBQUEsQ0FBQVEsQ0FBQSxNQUFBTixLQUFBLEdBQUFGLFNBQUEsQ0FBQXpQLENBQUEsSUFBQXdCLElBQUE7TUFBQXdPLElBQUEsR0FBQUosS0FBQTtNQUFBLElBQUFJLElBQUEsU0FBQUEsSUFBQSxDQUFBaFAsQ0FBQTtJQUFBO0VBS0MsU0FBQWtQLEdBQUE7SUFBQVQsU0FBQSxDQUFBN1AsQ0FBQSxDQUFBc1EsR0FBQTtFQUFBO0lBQUFULFNBQUEsQ0FBQTdPLENBQUE7RUFBQTtFQUNELE9BQU9zTyxRQUFRO0FBQ2pCLENBQUM7QUFFRCxJQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUkxTyxLQUFLLEVBQUs7RUFDNUIsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTyxHQUFHO0VBQ3RCLElBQUk7SUFDRixPQUFPLElBQUk4TCxJQUFJLENBQUM2QyxjQUFjLENBQUMsT0FBTyxFQUFFO01BQUVDLEdBQUcsRUFBRSxTQUFTO01BQUVDLEtBQUssRUFBRSxPQUFPO01BQUVDLElBQUksRUFBRTtJQUFVLENBQUMsQ0FBQyxDQUFDMUMsTUFBTSxDQUFDLElBQUloRCxJQUFJLENBQUNwSixLQUFLLENBQUMsQ0FBQztFQUN0SCxDQUFDLENBQUMsT0FBT3NJLEtBQUssRUFBRTtJQUNkLE9BQU90SSxLQUFLO0VBQ2Q7QUFDRixDQUFDO0FBRUQsSUFBTStPLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJL08sS0FBSyxFQUFLO0VBQzVCLElBQU1nUCxTQUFTLEdBQUc1RCxhQUFhLENBQUNwTCxLQUFLLENBQUM7RUFDdEMsSUFBSSxDQUFDZ1AsU0FBUyxFQUFFLE9BQU8sR0FBRztFQUMxQixJQUFJQSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUMzQixPQUFPRCxTQUFTLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzFELElBQUksQ0FBQyxDQUFDO0VBQ3ZDO0VBQ0EsT0FBT3dELFNBQVM7QUFDbEIsQ0FBQztBQUNELElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUluUCxLQUFLLEVBQUs7RUFDbEMsSUFBTW9QLE1BQU0sR0FBRy9ELE1BQU0sQ0FBQ3JMLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FDL0IyTCxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUNyQkgsSUFBSSxDQUFDLENBQUM7RUFDVCxJQUFJLENBQUM0RCxNQUFNLEVBQUUsT0FBTyxFQUFFO0VBQ3RCLElBQUk3RCxVQUFVLEdBQUc2RCxNQUFNO0VBQ3ZCLElBQUk3RCxVQUFVLENBQUM1TCxNQUFNLEtBQUssRUFBRSxJQUFJNEwsVUFBVSxDQUFDRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDMURGLFVBQVUsT0FBQTdILE1BQUEsQ0FBTzZILFVBQVUsQ0FBQ3ZKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRTtFQUN4QztFQUNBLElBQUl1SixVQUFVLENBQUM1TCxNQUFNLEtBQUssRUFBRSxFQUFFO0lBQzVCNEwsVUFBVSxPQUFBN0gsTUFBQSxDQUFPNkgsVUFBVSxDQUFFO0VBQy9CO0VBQ0EsSUFBSUEsVUFBVSxDQUFDNUwsTUFBTSxLQUFLLEVBQUUsSUFBSTRMLFVBQVUsQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQzFELGNBQUEvSCxNQUFBLENBQWM2SCxVQUFVLENBQUN2SixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFBMEIsTUFBQSxDQUFLNkgsVUFBVSxDQUFDdkosS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBQTBCLE1BQUEsQ0FBSTZILFVBQVUsQ0FBQ3ZKLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQUEwQixNQUFBLENBQUk2SCxVQUFVLENBQUN2SixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUN0SDtFQUNBLElBQUl1SixVQUFVLENBQUNFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSUYsVUFBVSxDQUFDNUwsTUFBTSxHQUFHLEVBQUUsRUFBRTtJQUN4RCxXQUFBK0QsTUFBQSxDQUFXNkgsVUFBVTtFQUN2QjtFQUNBLElBQUl2TCxLQUFLLENBQUMrQixRQUFRLENBQUMsQ0FBQyxDQUFDMEosVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ3BDLE9BQU96TCxLQUFLLENBQUMrQixRQUFRLENBQUMsQ0FBQztFQUN6QjtFQUNBLFdBQUEyQixNQUFBLENBQVc2SCxVQUFVO0FBQ3ZCLENBQUM7QUFFRCxJQUFNOEQsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxJQUFJLEVBQUVDLElBQUksRUFBSztFQUNyQyxJQUFNQyxRQUFRLEdBQUdkLFVBQVUsQ0FBQ1ksSUFBSSxDQUFDO0VBQ2pDLElBQU1HLFFBQVEsR0FBR1YsVUFBVSxDQUFDUSxJQUFJLENBQUM7RUFDakMsSUFBSUMsUUFBUSxLQUFLLEdBQUcsSUFBSUMsUUFBUSxLQUFLLEdBQUcsRUFBRSxPQUFPLEdBQUc7RUFDcEQsSUFBSUQsUUFBUSxLQUFLLEdBQUcsRUFBRSxPQUFPQyxRQUFRO0VBQ3JDLElBQUlBLFFBQVEsS0FBSyxHQUFHLEVBQUUsT0FBT0QsUUFBUTtFQUNyQyxVQUFBOUwsTUFBQSxDQUFVOEwsUUFBUSxTQUFBOUwsTUFBQSxDQUFNK0wsUUFBUTtBQUNsQyxDQUFDO0FBQ0QsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSTFQLEtBQUssRUFBbUU7RUFBQSxJQUFqRTJQLE9BQU8sR0FBQXRPLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQTZGLFNBQUEsR0FBQTdGLFNBQUEsTUFBRztJQUFFdU8sT0FBTyxFQUFFLE1BQU07SUFBRWhCLEdBQUcsRUFBRSxTQUFTO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDNUYsSUFBSSxDQUFDN08sS0FBSyxFQUFFLE9BQU8sVUFBVTtFQUM3QixJQUFJO0lBQ0YsSUFBTTZQLE1BQU0sR0FBRyxJQUFJekcsSUFBSSxJQUFBMUYsTUFBQSxDQUFJMUQsS0FBSyxjQUFXLENBQUM7SUFDNUMsSUFBSWtNLE1BQU0sQ0FBQzRELEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTy9QLEtBQUs7SUFDaEQsT0FBTyxJQUFJOEwsSUFBSSxDQUFDNkMsY0FBYyxDQUFDLE9BQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFDdkQsTUFBTSxDQUFDeUQsTUFBTSxDQUFDO0VBQ2pFLENBQUMsQ0FBQyxPQUFPdkgsS0FBSyxFQUFFO0lBQ2QsT0FBT3RJLEtBQUs7RUFDZDtBQUNGLENBQUM7QUFDRCxJQUFNZ1Esb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSWhRLEtBQUs7RUFBQSxPQUNqQzBQLGlCQUFpQixDQUFDMVAsS0FBSyxFQUFFO0lBQUU0UCxPQUFPLEVBQUUsT0FBTztJQUFFaEIsR0FBRyxFQUFFLFNBQVM7SUFBRUMsS0FBSyxFQUFFO0VBQVEsQ0FBQyxDQUFDO0FBQUE7QUFDaEYsSUFBTW9CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlqUSxLQUFLLEVBQXlCO0VBQUEsSUFBdkJrUSxLQUFLLEdBQUE3TyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcrSCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3BELElBQUksQ0FBQ3JKLEtBQUssRUFBRSxPQUFPLEVBQUU7RUFDckIsSUFBSTtJQUNGLElBQU02UCxNQUFNLEdBQUcsSUFBSXpHLElBQUksQ0FBQ3BKLEtBQUssQ0FBQztJQUM5QixJQUFJa00sTUFBTSxDQUFDNEQsS0FBSyxDQUFDRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUU7SUFDN0MsSUFBTUksTUFBTSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVILEtBQUssR0FBR0wsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUlJLE1BQU0sR0FBRyxJQUFJLEVBQUUsT0FBTyxZQUFZO0lBQ3RDLElBQUlBLE1BQU0sR0FBRyxLQUFNLEVBQUUsVUFBQXpNLE1BQUEsQ0FBVTBNLElBQUksQ0FBQ0UsS0FBSyxDQUFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3hELElBQUlBLE1BQU0sR0FBRyxPQUFTLEVBQUU7TUFDdEIsSUFBTUksT0FBTyxHQUFHSCxJQUFJLENBQUNFLEtBQUssQ0FBQ0gsTUFBTSxHQUFHLEtBQU0sQ0FBQztNQUMzQyxJQUFNSyxPQUFPLEdBQUdKLElBQUksQ0FBQ0UsS0FBSyxDQUFFSCxNQUFNLEdBQUcsS0FBTSxHQUFJLElBQUksQ0FBQztNQUNwRCxVQUFBek0sTUFBQSxDQUFVNk0sT0FBTywwQkFBQTdNLE1BQUEsQ0FBUThNLE9BQU8sQ0FBQ3pPLFFBQVEsQ0FBQyxDQUFDLENBQUMwTyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUM5RDtJQUNBLElBQUlOLE1BQU0sR0FBRyxRQUFVLEVBQUU7TUFDdkIsSUFBTU8sS0FBSyxHQUFHTixJQUFJLENBQUNFLEtBQUssQ0FBQ0gsTUFBTSxHQUFHLE9BQVMsQ0FBQztNQUM1QyxJQUFNSSxRQUFPLEdBQUdILElBQUksQ0FBQ0UsS0FBSyxDQUFFSCxNQUFNLEdBQUcsT0FBUyxHQUFJLEtBQU0sQ0FBQztNQUN6RCxVQUFBek0sTUFBQSxDQUFVZ04sS0FBSyxjQUFBaE4sTUFBQSxDQUFNNk0sUUFBTyxDQUFDeE8sUUFBUSxDQUFDLENBQUMsQ0FBQzBPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzFEO0lBQ0EsT0FBT1osTUFBTSxDQUFDYyxjQUFjLENBQUMsT0FBTyxFQUFFO01BQ3BDL0IsR0FBRyxFQUFFLFNBQVM7TUFDZEMsS0FBSyxFQUFFLFNBQVM7TUFDaEIrQixJQUFJLEVBQUUsU0FBUztNQUNmQyxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3ZJLEtBQUssRUFBRTtJQUNkLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELElBQU13SSxtQkFBbUIsR0FBRztFQUMxQkMsTUFBTSxFQUFFLFVBQVU7RUFDbEIsVUFBVSxFQUFFLFVBQVU7RUFDdEJDLE9BQU8sRUFBRSxjQUFjO0VBQ3ZCQyxTQUFTLEVBQUUsY0FBYztFQUN6QixjQUFjLEVBQUUsY0FBYztFQUM5QixjQUFjLEVBQUUsY0FBYztFQUM5QmxSLElBQUksRUFBRSxXQUFXO0VBQ2pCbVIsUUFBUSxFQUFFLFdBQVc7RUFDckJDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxRQUFRLEVBQUUsV0FBVztFQUNyQixXQUFXLEVBQUUsV0FBVztFQUN4QixXQUFXLEVBQUUsV0FBVztFQUN4QkMsTUFBTSxFQUFFLFVBQVU7RUFDbEJDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxTQUFTLEVBQUUsVUFBVTtFQUNyQixRQUFRLEVBQUUsVUFBVTtFQUNwQixVQUFVLEVBQUUsVUFBVTtFQUN0QixTQUFTLEVBQUUsV0FBVztFQUN0QixTQUFTLEVBQUUsV0FBVztFQUN0QkMsTUFBTSxFQUFFLFdBQVc7RUFDbkJDLE1BQU0sRUFBRSxXQUFXO0VBQ25CQyxPQUFPLEVBQUUsYUFBYTtFQUN0QkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLE9BQU8sRUFBRSxhQUFhO0VBQ3RCQyxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBQ0QsSUFBTUMsZ0JBQWdCLEdBQUc7RUFDdkJDLFFBQVEsRUFBRSxxREFBcUQ7RUFDL0RDLFlBQVksRUFBRSxpRUFBaUU7RUFDL0VDLFNBQVMsRUFBRSw4REFBOEQ7RUFDekVDLFFBQVEsRUFBRSx3REFBd0Q7RUFDbEUsV0FBVyxFQUFFO0FBQ2YsQ0FBQztBQUNELElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLE1BQU0sRUFBSztFQUN4QyxJQUFNN0csVUFBVSxHQUFHOEcsb0JBQW9CLENBQUNELE1BQU0sQ0FBQztFQUMvQyxPQUNFTixnQkFBZ0IsQ0FBQ3ZHLFVBQVUsQ0FBQyxJQUFJLDJEQUEyRDtBQUUvRixDQUFDO0FBRUQsSUFBTStHLHNCQUFzQixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUM1SSxJQUFNQyxvQkFBb0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFDaEksSUFBTUMsdUJBQXVCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO0FBRWpGLElBQU1ILG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlELE1BQU0sRUFBSztFQUN2QyxJQUFNN0csVUFBVSxHQUFHSCxhQUFhLENBQUNnSCxNQUFNLENBQUMsQ0FBQzVHLElBQUksQ0FBQyxDQUFDO0VBQy9DLElBQUksQ0FBQ0QsVUFBVSxFQUFFLE9BQU8sRUFBRTtFQUMxQixJQUFNa0gsVUFBVSxHQUFHM0IsbUJBQW1CLENBQUN2RixVQUFVLENBQUNzQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ2hFLElBQUk0RSxVQUFVLEVBQUUsT0FBT0EsVUFBVTtFQUNqQyxPQUFPbEgsVUFBVSxDQUFDbUgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxHQUFHcEgsVUFBVSxDQUFDdkosS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQsSUFBTTRRLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBc0I7RUFBQSxJQUFsQkMsUUFBUSxHQUFBeFIsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBNkYsU0FBQSxHQUFBN0YsU0FBQSxNQUFHLEVBQUU7RUFDeEMsSUFBTXlSLElBQUksR0FBRyxJQUFJM0gsR0FBRyxDQUFDLENBQUM7RUFDdEIsT0FBTzBILFFBQVEsQ0FDWjVILEdBQUcsQ0FBQyxVQUFDbUgsTUFBTTtJQUFBLE9BQUtDLG9CQUFvQixDQUFDRCxNQUFNLENBQUM7RUFBQSxFQUFDLENBQzdDekssTUFBTSxDQUFDLFVBQUN5SyxNQUFNLEVBQUs7SUFDbEIsSUFBSSxDQUFDQSxNQUFNLElBQUlVLElBQUksQ0FBQ0MsR0FBRyxDQUFDWCxNQUFNLENBQUMsRUFBRSxPQUFPLEtBQUs7SUFDN0NVLElBQUksQ0FBQ0UsR0FBRyxDQUFDWixNQUFNLENBQUM7SUFDaEIsT0FBTyxJQUFJO0VBQ2IsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1hLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBNEJBLENBQUliLE1BQU0sRUFBSztFQUMvQyxJQUFNN0csVUFBVSxHQUFHOEcsb0JBQW9CLENBQUNELE1BQU0sQ0FBQyxDQUFDdkUsV0FBVyxDQUFDLENBQUM7RUFDN0QsSUFBSSxDQUFDdEMsVUFBVSxFQUFFLE9BQU8sS0FBSztFQUM3QixPQUFPaUgsdUJBQXVCLENBQUNVLElBQUksQ0FBQyxVQUFDQyxLQUFLO0lBQUEsT0FBSzVILFVBQVUsQ0FBQzBELFFBQVEsQ0FBQ2tFLEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDNUUsQ0FBQztBQUVELElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlwVCxLQUFLLEVBQUs7RUFDbkMsSUFBTXFULEtBQUssR0FBR2pJLGFBQWEsQ0FBQ3BMLEtBQUssQ0FBQyxDQUFDcVQsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0VBQzdELElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU8sRUFBRTtFQUNyQixJQUFNM0MsS0FBSyxHQUFHMkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDNUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDdkMsSUFBTUYsT0FBTyxHQUFHOEMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4QixVQUFBM1AsTUFBQSxDQUFVZ04sS0FBSyxPQUFBaE4sTUFBQSxDQUFJNk0sT0FBTztBQUM1QixDQUFDO0FBRUQsSUFBTStDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUl0VCxLQUFLLEVBQUs7RUFDckMsSUFBTXVULElBQUksR0FBR25JLGFBQWEsQ0FBQ3BMLEtBQUssQ0FBQyxDQUFDMkwsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7RUFDdkQsSUFBSSxDQUFDNEgsSUFBSSxFQUFFLE9BQU87SUFBRUMsS0FBSyxFQUFFLEVBQUU7SUFBRUMsR0FBRyxFQUFFO0VBQUcsQ0FBQztFQUN4QyxJQUFBQyxlQUFBLEdBQWdDSCxJQUFJLENBQUNyRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNqRSxHQUFHLENBQUMsVUFBQzBJLElBQUk7TUFBQSxPQUFLQSxJQUFJLENBQUNuSSxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFBQW9JLGdCQUFBLEdBQUFuUyxjQUFBLENBQUFpUyxlQUFBO0lBQW5FRyxRQUFRLEdBQUFELGdCQUFBO0lBQUFFLGlCQUFBLEdBQUFGLGdCQUFBO0lBQUVHLE1BQU0sR0FBQUQsaUJBQUEsY0FBRyxFQUFFLEdBQUFBLGlCQUFBO0VBQzVCLE9BQU87SUFDTE4sS0FBSyxFQUFFSixpQkFBaUIsQ0FBQ1MsUUFBUSxDQUFDO0lBQ2xDSixHQUFHLEVBQUVMLGlCQUFpQixDQUFDVyxNQUFNO0VBQy9CLENBQUM7QUFDSCxDQUFDO0FBQ0QsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSWhVLEtBQUs7RUFBQSxPQUFLc1QsbUJBQW1CLENBQUN0VCxLQUFLLENBQUM7QUFBQTtBQUVqRSxJQUFNaVUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSVQsS0FBSyxFQUFFQyxHQUFHLEVBQUs7RUFDMUMsSUFBTVMsU0FBUyxHQUFHZCxpQkFBaUIsQ0FBQ0ksS0FBSyxDQUFDO0VBQzFDLElBQU1XLE9BQU8sR0FBR2YsaUJBQWlCLENBQUNLLEdBQUcsQ0FBQztFQUN0QyxJQUFJUyxTQUFTLElBQUlDLE9BQU8sRUFBRTtJQUN4QixJQUFBQyxLQUFBLEdBQW1CRixTQUFTLElBQUlDLE9BQU8sR0FBRyxDQUFDRCxTQUFTLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUNBLE9BQU8sRUFBRUQsU0FBUyxDQUFDO01BQUFHLEtBQUEsR0FBQTVTLGNBQUEsQ0FBQTJTLEtBQUE7TUFBOUVoUyxJQUFJLEdBQUFpUyxLQUFBO01BQUVDLEVBQUUsR0FBQUQsS0FBQTtJQUNmLFVBQUEzUSxNQUFBLENBQVV0QixJQUFJLFNBQUFzQixNQUFBLENBQU00USxFQUFFO0VBQ3hCO0VBQ0EsT0FBT0osU0FBUyxJQUFJLEVBQUU7QUFDeEIsQ0FBQztBQUVELElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUl2VSxLQUFLO0VBQUEsT0FBS3NULG1CQUFtQixDQUFDdFQsS0FBSyxDQUFDLENBQUN3VCxLQUFLO0FBQUE7QUFFcEUsSUFBTWdCLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBdUJBLENBQUlDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUs7RUFDckUsSUFBSUEsV0FBVyxFQUFFO0lBQ2YsSUFBTUMsY0FBYyxHQUFHLElBQUl4TCxJQUFJLENBQUN1TCxXQUFXLENBQUM7SUFDNUMsSUFBSSxDQUFDekksTUFBTSxDQUFDNEQsS0FBSyxDQUFDOEUsY0FBYyxDQUFDN0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU82RSxjQUFjO0VBQ3BFO0VBQ0EsSUFBTXBGLFFBQVEsR0FBR3BFLGFBQWEsQ0FBQ3FKLFNBQVMsQ0FBQyxDQUFDelMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDdEQsSUFBSSxDQUFDd04sUUFBUSxFQUFFLE9BQU8sSUFBSTtFQUMxQixJQUFNQyxRQUFRLEdBQUc4RSxnQkFBZ0IsQ0FBQ0csU0FBUyxDQUFDLElBQUksT0FBTztFQUN2RCxJQUFNRyxZQUFZLE1BQUFuUixNQUFBLENBQU04TCxRQUFRLE9BQUE5TCxNQUFBLENBQUkrTCxRQUFRLFFBQUs7RUFDakQsSUFBTUksTUFBTSxHQUFHLElBQUl6RyxJQUFJLENBQUN5TCxZQUFZLENBQUM7RUFDckMsT0FBTzNJLE1BQU0sQ0FBQzRELEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHRixNQUFNO0FBQ3ZELENBQUM7QUFFRCxJQUFNaUYseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBSTFDLE1BQU0sRUFBSztFQUM1QyxJQUFNN0csVUFBVSxHQUFHOEcsb0JBQW9CLENBQUNELE1BQU0sQ0FBQyxDQUFDdkUsV0FBVyxDQUFDLENBQUM7RUFDN0QsSUFBSSxDQUFDdEMsVUFBVSxFQUFFLE9BQU8sS0FBSztFQUM3QixJQUFJK0csc0JBQXNCLENBQUNZLElBQUksQ0FBQyxVQUFDQyxLQUFLO0lBQUEsT0FBSzVILFVBQVUsQ0FBQzBELFFBQVEsQ0FBQ2tFLEtBQUssQ0FBQztFQUFBLEVBQUMsRUFBRSxPQUFPLEtBQUs7RUFDcEYsSUFBSVosb0JBQW9CLENBQUNXLElBQUksQ0FBQyxVQUFDQyxLQUFLO0lBQUEsT0FBSzVILFVBQVUsQ0FBQzBELFFBQVEsQ0FBQ2tFLEtBQUssQ0FBQztFQUFBLEVBQUMsRUFBRSxPQUFPLElBQUk7RUFDakYsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUVELElBQU00Qix3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCQSxDQUFJQyxXQUFXLEVBQXlCO0VBQUEsSUFBdkI5RSxLQUFLLEdBQUE3TyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcrSCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQy9ELElBQU0rSSxNQUFNLEdBQUdDLG9CQUFvQixDQUFDMkMsV0FBVyxDQUFDQyxNQUFNLENBQUM7RUFDdkQsSUFBSSxDQUFDSCx5QkFBeUIsQ0FBQzFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSztFQUNwRCxJQUFNOEMsU0FBUyxHQUFHVix1QkFBdUIsQ0FBQ1EsV0FBVyxDQUFDNUwsSUFBSSxFQUFFNEwsV0FBVyxDQUFDRyxJQUFJLEVBQUVILFdBQVcsQ0FBQ0ksYUFBYSxDQUFDO0VBQ3hHLElBQUksQ0FBQ0YsU0FBUyxFQUFFLE9BQU8sS0FBSztFQUM1QixPQUFPQSxTQUFTLENBQUNuRixPQUFPLENBQUMsQ0FBQyxJQUFJRyxLQUFLO0FBQ3JDLENBQUM7QUFFRCxJQUFNbUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJclYsS0FBSztFQUFBLE9BQzVCb0wsYUFBYSxDQUFDcEwsS0FBSyxDQUFDLENBQ2pCa1AsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWakUsR0FBRyxDQUFDLFVBQUNxSyxJQUFJO0lBQUEsT0FBS0EsSUFBSSxDQUFDOUosSUFBSSxDQUFDLENBQUM7RUFBQSxFQUFDLENBQzFCN0QsTUFBTSxDQUFDQyxPQUFPLENBQUM7QUFBQTtBQUVwQixJQUFNMk4sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUE7RUFBQSxJQUFBQyxLQUFBLEdBQUFuVSxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQXVDLENBQUMsQ0FBQztJQUFBb1UsV0FBQSxHQUFBRCxLQUFBLENBQW5DeFIsS0FBSztJQUFMQSxLQUFLLEdBQUF5UixXQUFBLGNBQUcsb0JBQW9CLEdBQUFBLFdBQUE7RUFBQSxvQkFDbEQvUyxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUF1RCxnQkFDcEVqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFlLEdBQUUzUixLQUFZLENBQzFDLENBQUM7QUFBQSxDQUNQO0FBRUQsSUFBTTRSLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBQyxLQUFBO0VBQUEsSUFBTWpQLE9BQU8sR0FBQWlQLEtBQUEsQ0FBUGpQLE9BQU87RUFBQSxvQkFDNUJsRSxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUE2QyxHQUFFL08sT0FBYSxDQUFDO0FBQUEsQ0FDN0U7QUFFRCxJQUFNa1AsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLEtBQUE7RUFBQSxJQUFNcFAsS0FBSyxHQUFBb1AsS0FBQSxDQUFMcFAsS0FBSztJQUFFcVAsT0FBTyxHQUFBRCxLQUFBLENBQVBDLE9BQU87SUFBRUMsUUFBUSxHQUFBRixLQUFBLENBQVJFLFFBQVE7RUFBQSxvQkFDN0N2VCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUE2RSxnQkFDMUZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFvRSxnQkFDakZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUlDLFNBQVMsRUFBQztFQUFrQyxHQUFFaFAsS0FBVSxDQUFDLEVBQzVEcVAsT0FDRSxDQUFDLEVBQ0xDLFFBQ0UsQ0FBQztBQUFBLENBQ1A7QUFDRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsS0FBQSxFQUFzQztFQUFBLElBQWhDQyxTQUFTLEdBQUFELEtBQUEsQ0FBVEMsU0FBUztJQUFBQyxXQUFBLEdBQUFGLEtBQUEsQ0FBRW5TLEtBQUs7SUFBTEEsS0FBSyxHQUFBcVMsV0FBQSxjQUFHLE1BQU0sR0FBQUEsV0FBQTtFQUM1QyxJQUFNQyxVQUFVLEdBQUdyTixVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLElBQUksQ0FBQ21OLFNBQVMsRUFBRSxPQUFPLElBQUk7RUFDM0IsSUFBTUcsU0FBUyxHQUFHdEcsbUJBQW1CLENBQUNtRyxTQUFTLEVBQUVFLFVBQVUsQ0FBQztFQUM1RCxvQkFDRTVULEtBQUEsQ0FBQWdULGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQXFLLGdCQUNuTGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQW1ELENBQUUsQ0FBQyxFQUNyRTNSLEtBQUssRUFDTHVTLFNBQVMsaUJBQUk3VCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFpRCxHQUFFWSxTQUFnQixDQUM3RixDQUFDO0FBRVgsQ0FBQztBQUVELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxLQUFBO0VBQUEsSUFBQUMsZUFBQSxHQUFBRCxLQUFBLENBQU1kLFNBQVM7SUFBVEEsU0FBUyxHQUFBZSxlQUFBLGNBQUcsU0FBUyxHQUFBQSxlQUFBO0VBQUEsb0JBQ3hDaFUsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFaUIsS0FBSyxFQUFDLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLElBQUksRUFBQyxNQUFNO0lBQ1hDLE1BQU0sRUFBQyxjQUFjO0lBQ3JCQyxXQUFXLEVBQUMsS0FBSztJQUNqQkMsYUFBYSxFQUFDLE9BQU87SUFDckJDLGNBQWMsRUFBQyxPQUFPO0lBQ3RCdEIsU0FBUyxFQUFFQTtFQUFVLGdCQUVyQmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBVXdCLE1BQU0sRUFBQztFQUFjLENBQUUsQ0FBQyxlQUNsQ3hVLEtBQUEsQ0FBQWdULGFBQUE7SUFBTWpXLENBQUMsRUFBQztFQUFnRixDQUFFLENBQUMsZUFDM0ZpRCxLQUFBLENBQUFnVCxhQUFBO0lBQU15QixFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUM7RUFBSSxDQUFFLENBQUMsZUFDeEM1VSxLQUFBLENBQUFnVCxhQUFBO0lBQU15QixFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUM7RUFBSSxDQUFFLENBQ3BDLENBQUM7QUFBQSxDQUNQO0FBRUQsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUFDLEtBQUEsRUFBa0Y7RUFBQSxJQUE1RTdRLEtBQUssR0FBQTZRLEtBQUEsQ0FBTDdRLEtBQUs7SUFBRThRLE1BQU0sR0FBQUQsS0FBQSxDQUFOQyxNQUFNO0lBQUVDLE9BQU8sR0FBQUYsS0FBQSxDQUFQRSxPQUFPO0lBQUV6QixRQUFRLEdBQUF1QixLQUFBLENBQVJ2QixRQUFRO0lBQUUwQixNQUFNLEdBQUFILEtBQUEsQ0FBTkcsTUFBTTtJQUFBQyxtQkFBQSxHQUFBSixLQUFBLENBQUVLLGFBQWE7SUFBYkEsYUFBYSxHQUFBRCxtQkFBQSxjQUFHLFdBQVcsR0FBQUEsbUJBQUE7RUFDcEYsSUFBSSxDQUFDSCxNQUFNLEVBQUUsT0FBTyxJQUFJO0VBQ3hCLG9CQUNFL1UsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBMkUsZ0JBQ3hGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLHlCQUFBalMsTUFBQSxDQUF5Qm1VLGFBQWE7RUFBK0UsZ0JBQ2pJblYsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBdUUsZ0JBQ3BGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFJQyxTQUFTLEVBQUM7RUFBa0MsR0FBRWhQLEtBQVUsQ0FBQyxlQUM3RGpFLEtBQUEsQ0FBQWdULGFBQUE7SUFBUW9DLE9BQU8sRUFBRUosT0FBUTtJQUFDL0IsU0FBUyxFQUFDO0VBQWlDLEdBQUMsR0FBUyxDQUM1RSxDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFrRCxHQUFFTSxRQUFjLENBQUMsRUFDakYwQixNQUFNLGlCQUFJalYsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBNEQsR0FBRWdDLE1BQVksQ0FDakcsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsTUFBQSxFQUFtSDtFQUFBLElBQTdHdFIsSUFBSSxHQUFBc1IsTUFBQSxDQUFKdFIsSUFBSTtJQUFFQyxLQUFLLEdBQUFxUixNQUFBLENBQUxyUixLQUFLO0lBQUVDLE9BQU8sR0FBQW9SLE1BQUEsQ0FBUHBSLE9BQU87SUFBQXFSLG1CQUFBLEdBQUFELE1BQUEsQ0FBRW5SLFlBQVk7SUFBWkEsWUFBWSxHQUFBb1IsbUJBQUEsY0FBRyxhQUFhLEdBQUFBLG1CQUFBO0lBQUFDLGtCQUFBLEdBQUFGLE1BQUEsQ0FBRWxSLFdBQVc7SUFBWEEsV0FBVyxHQUFBb1Isa0JBQUEsY0FBRyxRQUFRLEdBQUFBLGtCQUFBO0lBQUFDLFdBQUEsR0FBQUgsTUFBQSxDQUFFalIsSUFBSTtJQUFKQSxJQUFJLEdBQUFvUixXQUFBLGNBQUcsU0FBUyxHQUFBQSxXQUFBO0lBQUVDLFFBQVEsR0FBQUosTUFBQSxDQUFSSSxRQUFRO0VBQzdILElBQUksQ0FBQzFSLElBQUksRUFBRSxPQUFPLElBQUk7RUFDdEIsSUFBTTJSLGdCQUFnQixHQUFJLFlBQU07SUFDOUIsUUFBUXRSLElBQUk7TUFDVixLQUFLLFFBQVE7UUFDWCxPQUFPLCtCQUErQjtNQUN4QyxLQUFLLFNBQVM7UUFDWixPQUFPLHFDQUFxQztNQUM5QztRQUNFLE9BQU8sbUNBQW1DO0lBQzlDO0VBQ0YsQ0FBQyxDQUFFLENBQUM7RUFDSixvQkFDRXJFLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzZCLEtBQUs7SUFDSkUsTUFBTSxFQUFFL1EsSUFBSztJQUNiQyxLQUFLLEVBQUVBLEtBQUssSUFBSSxzQkFBdUI7SUFDdkMrUSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVFVLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQy9CUCxhQUFhLEVBQUMsVUFBVTtJQUN4QkYsTUFBTSxlQUNKalYsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBd0IsZ0JBQ3JDalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFRb0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRTSxRQUFRLENBQUMsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUFDekMsU0FBUyxFQUFDO0lBQW9GLEdBQ25JN08sV0FDSyxDQUFDLGVBQ1RwRSxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFBQSxDQUFDO01BQUN6QyxTQUFTLDJEQUFBalMsTUFBQSxDQUEyRDJVLGdCQUFnQjtJQUFHLEdBQzNIeFIsWUFDSyxDQUNMO0VBQ04sZ0JBRURuRSxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFFL08sT0FBTyxJQUFJLG9DQUF3QyxDQUNyRixDQUFDO0FBRVosQ0FBQztBQUVELElBQU0wUixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQUMsTUFBQTtFQUFBLElBQU12VSxLQUFLLEdBQUF1VSxNQUFBLENBQUx2VSxLQUFLO0lBQUVoRSxLQUFLLEdBQUF1WSxNQUFBLENBQUx2WSxLQUFLO0lBQUF3WSxhQUFBLEdBQUFELE1BQUEsQ0FBRUUsTUFBTTtJQUFOQSxNQUFNLEdBQUFELGFBQUEsY0FBRyxpQkFBaUIsR0FBQUEsYUFBQTtFQUFBLG9CQUMxRDlWLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQStELGdCQUM1RWpULEtBQUEsQ0FBQWdULGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQWdELEdBQUUzUixLQUFTLENBQUMsZUFDekV0QixLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBRXBPLFVBQVUsQ0FBQyxpREFBaUQsRUFBRWtSLE1BQU07RUFBRSxHQUFFelksS0FBUyxDQUM1RixDQUFDO0FBQUEsQ0FDUDtBQUVELElBQU0wWSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsTUFBQSxFQUFtRDtFQUFBLElBQTdDQyxPQUFPLEdBQUFELE1BQUEsQ0FBUEMsT0FBTztJQUFFQyxTQUFTLEdBQUFGLE1BQUEsQ0FBVEUsU0FBUztJQUFFQyxRQUFRLEdBQUFILE1BQUEsQ0FBUkcsUUFBUTtJQUFFQyxRQUFRLEdBQUFKLE1BQUEsQ0FBUkksUUFBUTtFQUN2RCxJQUFNN0wsUUFBUSxHQUFHLENBQUEwTCxPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRXRZLFdBQVcsTUFBSXNZLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFMUwsUUFBUSxLQUFJLEdBQUc7RUFFakUsb0JBQ0V4SyxLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUE0SSxnQkFDM0pqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEwQyxnQkFDdkRqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFnRCxHQUFDLGdFQUFlLENBQUMsZUFDOUVqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFrQyxHQUFFekksUUFBWSxDQUFDLGVBQzlEeEssS0FBQSxDQUFBZ1QsYUFBQTtJQUNFb0MsT0FBTyxFQUFFaUIsUUFBUztJQUNsQnBELFNBQVMsRUFBQztFQUF3SSxHQUNuSixnQ0FFTyxDQUNMLENBQUMsZUFDTmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXVDLEdBQ25EN1IsU0FBUyxDQUFDbUgsR0FBRyxDQUFDLFVBQUMrTixHQUFHLEVBQUs7SUFDdEIsSUFBTTNTLFFBQVEsR0FBR3dTLFNBQVMsS0FBS0csR0FBRyxDQUFDalYsRUFBRTtJQUNyQyxvQkFDRXJCLEtBQUEsQ0FBQWdULGFBQUE7TUFDRWhSLEdBQUcsRUFBRXNVLEdBQUcsQ0FBQ2pWLEVBQUc7TUFDWitULE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUWdCLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFHRSxHQUFHLENBQUNqVixFQUFFLENBQUM7TUFBQSxDQUFDO01BQ2xDNFIsU0FBUyxFQUFFcE8sVUFBVSxDQUNuQix3RUFBd0UsRUFDeEVsQixRQUFRLEdBQ0osNERBQTRELEdBQzVELHVFQUNOO0lBQUUsR0FFRDJTLEdBQUcsQ0FBQ2hWLEtBQ0MsQ0FBQztFQUViLENBQUMsQ0FDRSxDQUNBLENBQUM7QUFFWixDQUFDO0FBRUQsSUFBTWlWLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxNQUFBLEVBQW1EO0VBQUEsSUFBN0NOLE9BQU8sR0FBQU0sTUFBQSxDQUFQTixPQUFPO0lBQUVDLFNBQVMsR0FBQUssTUFBQSxDQUFUTCxTQUFTO0lBQUVDLFFBQVEsR0FBQUksTUFBQSxDQUFSSixRQUFRO0lBQUVDLFFBQVEsR0FBQUcsTUFBQSxDQUFSSCxRQUFRO0VBQzFELElBQUFJLFVBQUEsR0FBZ0N4VyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUF5VyxVQUFBLEdBQUEzWCxjQUFBLENBQUEwWCxVQUFBO0lBQXhDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQU1sTSxRQUFRLEdBQUcsQ0FBQTBMLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFdFksV0FBVyxNQUFJc1ksT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUUxTCxRQUFRLEtBQUksR0FBRztFQUNqRSxJQUFNcU0sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztJQUM5QlYsUUFBUSxhQUFSQSxRQUFRLGVBQVJBLFFBQVEsQ0FBR1UsS0FBSyxDQUFDO0lBQ2pCRixXQUFXLENBQUMsS0FBSyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRTVXLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXFGLGdCQUNsR2pULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQTZDLGdCQUMxRGpULEtBQUEsQ0FBQWdULGFBQUE7SUFDRW9DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUXdCLFdBQVcsQ0FBQyxVQUFDelEsSUFBSTtRQUFBLE9BQUssQ0FBQ0EsSUFBSTtNQUFBLEVBQUM7SUFBQSxDQUFDO0lBQzVDOE0sU0FBUyxFQUFDLGdHQUFnRztJQUMxRyxjQUFXO0VBQWMsZ0JBRXpCalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLaUIsS0FBSyxFQUFDLDRCQUE0QjtJQUFDRSxJQUFJLEVBQUMsTUFBTTtJQUFDRCxPQUFPLEVBQUMsV0FBVztJQUFDRyxXQUFXLEVBQUUsR0FBSTtJQUFDRCxNQUFNLEVBQUMsY0FBYztJQUFDbkIsU0FBUyxFQUFDO0VBQVMsZ0JBQ2pJalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNc0IsYUFBYSxFQUFDLE9BQU87SUFBQ0MsY0FBYyxFQUFDLE9BQU87SUFBQ3hYLENBQUMsRUFBQztFQUE4QyxDQUFFLENBQ2xHLENBQ0MsQ0FBQyxlQUNUaUQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBYSxnQkFDMUJqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFvRCxHQUFDLGdFQUFlLENBQUMsZUFDbEZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFvQyxHQUFFekksUUFBWSxDQUM1RCxDQUFDLGVBQ054SyxLQUFBLENBQUFnVCxhQUFBO0lBQ0VvQyxPQUFPLEVBQUVpQixRQUFTO0lBQ2xCcEQsU0FBUyxFQUFDO0VBQXlILEdBQ3BJLGdDQUVPLENBQ0wsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBZ0QsR0FDNUQ3UixTQUFTLENBQUNtSCxHQUFHLENBQUMsVUFBQytOLEdBQUc7SUFBQSxvQkFDakJ0VyxLQUFBLENBQUFnVCxhQUFBO01BQ0VoUixHQUFHLEVBQUVzVSxHQUFHLENBQUNqVixFQUFHO01BQ1orVCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF5QixZQUFZLENBQUNQLEdBQUcsQ0FBQ2pWLEVBQUUsQ0FBQztNQUFBLENBQUM7TUFDcEM0UixTQUFTLEVBQUVwTyxVQUFVLENBQ25CLDBEQUEwRCxFQUMxRHNSLFNBQVMsS0FBS0csR0FBRyxDQUFDalYsRUFBRSxHQUFHLGlCQUFpQixHQUFHLGdCQUM3QztJQUFFLEdBRURpVixHQUFHLENBQUNoVixLQUNDLENBQUM7RUFBQSxDQUNWLENBQ0UsQ0FBQyxFQUNMcVYsUUFBUSxpQkFDUDNXLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQStELGdCQUM1RWpULEtBQUEsQ0FBQWdULGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQXdCLEdBQUMsNENBQVUsQ0FBQyxlQUNqRGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXdCLEdBQ3BDN1IsU0FBUyxDQUFDbUgsR0FBRyxDQUFDLFVBQUMrTixHQUFHO0lBQUEsb0JBQ2pCdFcsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFaFIsR0FBRyxFQUFFc1UsR0FBRyxDQUFDalYsRUFBRztNQUNaK1QsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFReUIsWUFBWSxDQUFDUCxHQUFHLENBQUNqVixFQUFFLENBQUM7TUFBQSxDQUFDO01BQ3BDNFIsU0FBUyxFQUFFcE8sVUFBVSxDQUNuQixzREFBc0QsRUFDdERzUixTQUFTLEtBQUtHLEdBQUcsQ0FBQ2pWLEVBQUUsR0FBRyw2QkFBNkIsR0FBRyxnQ0FDekQ7SUFBRSxHQUVEaVYsR0FBRyxDQUFDaFYsS0FDQyxDQUFDO0VBQUEsQ0FDVixDQUNFLENBQUMsZUFDTnRCLEtBQUEsQ0FBQWdULGFBQUE7SUFDRW9DLE9BQU8sRUFBRWlCLFFBQVM7SUFDbEJwRCxTQUFTLEVBQUM7RUFBNkcsR0FDeEgsOEZBRU8sQ0FDTCxDQUVKLENBQUM7QUFFVixDQUFDO0FBQ0QsSUFBTThELGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsTUFBQSxFQUF5RjtFQUFBLElBQUFDLGtCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLG9CQUFBLEVBQUFDLHFCQUFBO0VBQUEsSUFBbkZDLElBQUksR0FBQU4sTUFBQSxDQUFKTSxJQUFJO0lBQUVDLGlCQUFpQixHQUFBUCxNQUFBLENBQWpCTyxpQkFBaUI7SUFBRUMsYUFBYSxHQUFBUixNQUFBLENBQWJRLGFBQWE7SUFBRUMsbUJBQW1CLEdBQUFULE1BQUEsQ0FBbkJTLG1CQUFtQjtJQUFBQyxlQUFBLEdBQUFWLE1BQUEsQ0FBRVcsUUFBUTtJQUFSQSxRQUFRLEdBQUFELGVBQUEsY0FBRyxJQUFJLEdBQUFBLGVBQUE7RUFDbkcsSUFBSSxDQUFDSixJQUFJLEVBQUUsb0JBQU90WCxLQUFBLENBQUFnVCxhQUFBLENBQUNILFlBQVksTUFBRSxDQUFDO0VBQ2xDLElBQU0rRSxLQUFLLEdBQUdOLElBQUksQ0FBQ00sS0FBSyxJQUFJLENBQUMsQ0FBQztFQUU5QixJQUFNQyxXQUFXLEdBQUcsRUFBQVosa0JBQUEsR0FBQUssSUFBSSxDQUFDUSxZQUFZLGNBQUFiLGtCQUFBLHVCQUFqQkEsa0JBQUEsQ0FBbUJjLFFBQVEsS0FBSSxFQUFFO0VBRXJELElBQU1DLFlBQVksR0FBRzVYLE9BQU8sQ0FBQyxZQUFNO0lBQ2pDLElBQU1vTixLQUFLLEdBQUc5RyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLE9BQU9rUixXQUFXLENBQ2Z0UCxHQUFHLENBQUMsVUFBQzBQLElBQUk7TUFBQSxPQUFBdk4sYUFBQSxDQUFBQSxhQUFBLEtBQVd1TixJQUFJO1FBQUUxRixNQUFNLEVBQUU1QyxvQkFBb0IsQ0FBQ3NJLElBQUksQ0FBQzFGLE1BQU07TUFBQztJQUFBLENBQUcsQ0FBQyxDQUN2RXROLE1BQU0sQ0FBQyxVQUFDZ1QsSUFBSTtNQUFBLE9BQUs1Rix3QkFBd0IsQ0FBQzRGLElBQUksRUFBRXpLLEtBQUssQ0FBQztJQUFBLEVBQUMsQ0FDdkQwSyxJQUFJLENBQUMsVUFBQ3BiLENBQUMsRUFBRXFiLENBQUMsRUFBSztNQUFBLElBQUFDLHFCQUFBLEVBQUFDLHNCQUFBO01BQ2QsSUFBTUMsSUFBSSxHQUFHLEVBQUFGLHFCQUFBLEdBQUF0Ryx1QkFBdUIsQ0FBQ2hWLENBQUMsQ0FBQzRKLElBQUksRUFBRTVKLENBQUMsQ0FBQzJWLElBQUksRUFBRTNWLENBQUMsQ0FBQzRWLGFBQWEsQ0FBQyxjQUFBMEYscUJBQUEsdUJBQXhEQSxxQkFBQSxDQUEwRC9LLE9BQU8sQ0FBQyxDQUFDLEtBQUk3RCxNQUFNLENBQUMrTyxnQkFBZ0I7TUFDM0csSUFBTUMsS0FBSyxHQUFHLEVBQUFILHNCQUFBLEdBQUF2Ryx1QkFBdUIsQ0FBQ3FHLENBQUMsQ0FBQ3pSLElBQUksRUFBRXlSLENBQUMsQ0FBQzFGLElBQUksRUFBRTBGLENBQUMsQ0FBQ3pGLGFBQWEsQ0FBQyxjQUFBMkYsc0JBQUEsdUJBQXhEQSxzQkFBQSxDQUEwRGhMLE9BQU8sQ0FBQyxDQUFDLEtBQUk3RCxNQUFNLENBQUMrTyxnQkFBZ0I7TUFDNUcsT0FBT0QsSUFBSSxHQUFHRSxLQUFLO0lBQ3JCLENBQUMsQ0FBQyxDQUNEbFosS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDakIsQ0FBQyxFQUFFLENBQUN1WSxXQUFXLENBQUMsQ0FBQztFQUVqQixJQUFNWSxnQkFBZ0IsR0FBR3RZLFdBQVcsQ0FBQyxVQUFDNFIsU0FBUyxFQUFLO0lBQ2xELElBQUksQ0FBQ0EsU0FBUyxJQUFJQSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8sVUFBVTtJQUM3RCxJQUFJO01BQ0YsSUFBTTVFLE1BQU0sR0FBRyxJQUFJekcsSUFBSSxJQUFBMUYsTUFBQSxDQUFJK1EsU0FBUyxjQUFXLENBQUM7TUFDaEQsSUFBSXZJLE1BQU0sQ0FBQzRELEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzBFLFNBQVM7TUFDcEQsT0FBTyxJQUFJM0ksSUFBSSxDQUFDNkMsY0FBYyxDQUFDLE9BQU8sRUFBRTtRQUFFaUIsT0FBTyxFQUFFLE1BQU07UUFBRWhCLEdBQUcsRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUFPLENBQUMsQ0FBQyxDQUFDekMsTUFBTSxDQUFDeUQsTUFBTSxDQUFDO0lBQzVHLENBQUMsQ0FBQyxPQUFBdUwsT0FBQSxFQUFNO01BQ04sT0FBTzNHLFNBQVM7SUFDbEI7RUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTTRHLGVBQWUsR0FBR3ZZLE9BQU8sQ0FBQyxZQUFNO0lBQ3BDLElBQU13WSxNQUFNLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7SUFDeEJiLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLFVBQUNiLElBQUksRUFBSztNQUM3QixJQUFNalcsR0FBRyxHQUFHaVcsSUFBSSxDQUFDdlIsSUFBSSxJQUFJLFVBQVU7TUFDbkMsSUFBTXFTLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxHQUFHLENBQUNoWCxHQUFHLENBQUMsSUFBSSxFQUFFO01BQ3BDK1csTUFBTSxDQUFDbFosSUFBSSxDQUFDb1ksSUFBSSxDQUFDO01BQ2pCVyxNQUFNLENBQUNLLEdBQUcsQ0FBQ2pYLEdBQUcsRUFBRStXLE1BQU0sQ0FBQztJQUN6QixDQUFDLENBQUM7SUFDRixPQUFPdFosS0FBSyxDQUFDQyxJQUFJLENBQUNrWixNQUFNLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDaEMzUSxHQUFHLENBQUMsVUFBQTRRLE1BQUE7TUFBQSxJQUFBQyxNQUFBLEdBQUFyYSxjQUFBLENBQUFvYSxNQUFBO1FBQUVuWCxHQUFHLEdBQUFvWCxNQUFBO1FBQUVDLEtBQUssR0FBQUQsTUFBQTtNQUFBLE9BQU87UUFDdEJwWCxHQUFHLEVBQUhBLEdBQUc7UUFDSFYsS0FBSyxFQUFFbVgsZ0JBQWdCLENBQUN6VyxHQUFHLENBQUM7UUFDNUJxWCxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsU0FBUyxFQUFFNUwsSUFBSSxDQUFDNkwsR0FBRyxDQUFBM2EsS0FBQSxDQUFSOE8sSUFBSSxFQUFBOEwsa0JBQUEsQ0FDVkgsS0FBSyxDQUFDOVEsR0FBRyxDQUFDLFVBQUNxSyxJQUFJO1VBQUEsSUFBQTZHLHNCQUFBO1VBQUEsT0FBSyxFQUFBQSxzQkFBQSxHQUFBM0gsdUJBQXVCLENBQUNjLElBQUksQ0FBQ2xNLElBQUksRUFBRWtNLElBQUksQ0FBQ0gsSUFBSSxFQUFFRyxJQUFJLENBQUNGLGFBQWEsQ0FBQyxjQUFBK0csc0JBQUEsdUJBQWpFQSxzQkFBQSxDQUFtRXBNLE9BQU8sQ0FBQyxDQUFDLEtBQUk3RCxNQUFNLENBQUMrTyxnQkFBZ0I7UUFBQSxFQUFDLENBQ2pJO01BQ0YsQ0FBQztJQUFBLENBQUMsQ0FBQyxDQUNGTCxJQUFJLENBQUMsVUFBQ3BiLENBQUMsRUFBRXFiLENBQUM7TUFBQSxPQUFLcmIsQ0FBQyxDQUFDd2MsU0FBUyxHQUFHbkIsQ0FBQyxDQUFDbUIsU0FBUztJQUFBLEVBQUM7RUFDOUMsQ0FBQyxFQUFFLENBQUNiLGdCQUFnQixFQUFFVCxZQUFZLENBQUMsQ0FBQztFQUVwQyxJQUFNMEIsZUFBZSxHQUNuQi9CLFFBQVEsYUFBUkEsUUFBUSxlQUFSQSxRQUFRLENBQUVnQyxTQUFTLElBQUlsQyxtQkFBbUIsZ0JBRXBDelgsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBbUMsR0FDL0MsQ0FBQTBFLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFZ0MsU0FBUyxrQkFBSTNaLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ1EsU0FBUztJQUFDRSxTQUFTLEVBQUVpRSxRQUFRLENBQUNnQztFQUFVLENBQUUsQ0FBQyxFQUNuRWxDLG1CQUFtQixpQkFDbEJ6WCxLQUFBLENBQUFnVCxhQUFBO0lBQVFvQyxPQUFPLEVBQUVxQyxtQkFBb0I7SUFBQ3hFLFNBQVMsRUFBQztFQUE2RSxHQUFDLG1GQUV0SCxDQUVQLENBQUMsR0FFUixJQUFJO0VBRVYsb0JBQ0VqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0ksV0FBVztJQUFDblAsS0FBSyxFQUFDO0VBQXFCLGdCQUN0Q2pFLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXNCLGdCQUNuQ2pULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzRDLFFBQVE7SUFBQ3RVLEtBQUssRUFBQyxpRkFBZ0I7SUFBQ2hFLEtBQUssR0FBQTRaLGlCQUFBLEdBQUVVLEtBQUssQ0FBQ2dDLFVBQVUsY0FBQTFDLGlCQUFBLGNBQUFBLGlCQUFBLEdBQUk7RUFBRSxDQUFFLENBQUMsZUFDakVsWCxLQUFBLENBQUFnVCxhQUFBLENBQUM0QyxRQUFRO0lBQUN0VSxLQUFLLEVBQUMsdUZBQWlCO0lBQUNoRSxLQUFLLEdBQUE2WixxQkFBQSxHQUFFUyxLQUFLLENBQUNpQyxrQkFBa0IsY0FBQTFDLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksQ0FBRTtJQUFDcEIsTUFBTSxFQUFDO0VBQWtCLENBQUUsQ0FBQyxlQUNwRy9WLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzRDLFFBQVE7SUFBQ3RVLEtBQUssRUFBQywwR0FBcUI7SUFBQ2hFLEtBQUssR0FBQThaLG9CQUFBLEdBQUVRLEtBQUssQ0FBQ2tDLGFBQWEsY0FBQTFDLG9CQUFBLGNBQUFBLG9CQUFBLEdBQUksQ0FBRTtJQUFDckIsTUFBTSxFQUFDO0VBQWtCLENBQUUsQ0FBQyxlQUNuRy9WLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzRDLFFBQVE7SUFBQ3RVLEtBQUssRUFBQyw0Q0FBUztJQUFDaEUsS0FBSyxHQUFBK1oscUJBQUEsR0FBRU8sS0FBSyxDQUFDbUMsa0JBQWtCLGNBQUExQyxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJLENBQUU7SUFBQ3RCLE1BQU0sRUFBQztFQUFlLENBQUUsQ0FDckYsQ0FDTSxDQUFDLGVBRWQvVixLQUFBLENBQUFnVCxhQUFBLENBQUNJLFdBQVc7SUFBQ25QLEtBQUssRUFBQyw2RkFBa0I7SUFBQ3FQLE9BQU8sRUFBRW9HO0VBQWdCLEdBQzVEZixlQUFlLENBQUMxYixNQUFNLEtBQUssQ0FBQyxnQkFDM0IrQyxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFnQixHQUFDLHVIQUF5QixDQUFDLGdCQUV4RGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsR0FDdkIwRixlQUFlLENBQUNwUSxHQUFHLENBQUMsVUFBQ3lSLEtBQUs7SUFBQSxvQkFDekJoYSxLQUFBLENBQUFnVCxhQUFBO01BQUtoUixHQUFHLEVBQUVnWSxLQUFLLENBQUNoWSxHQUFJO01BQUNpUixTQUFTLEVBQUM7SUFBVyxnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUF5RixnQkFDdEdqVCxLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUEwQixDQUFFLENBQUMsRUFDNUMrRyxLQUFLLENBQUMxWSxLQUFLLGVBQ1p0QixLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUEwQixDQUFFLENBQ3pDLENBQUMsZUFDTmpULEtBQUEsQ0FBQWdULGFBQUE7TUFBS0MsU0FBUyxFQUFDO0lBQVcsR0FDdkIrRyxLQUFLLENBQUNYLEtBQUssQ0FBQzlRLEdBQUcsQ0FBQyxVQUFDMFAsSUFBSSxFQUFLO01BQ3pCLElBQU1nQyxTQUFTLEdBQUc7UUFDaEJDLElBQUksRUFBRSxRQUFRO1FBQ2RDLFFBQVEsRUFBRSxDQUFDO1FBQ1gvRSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtVQUFBLE9BQVFtQyxpQkFBaUIsYUFBakJBLGlCQUFpQix1QkFBakJBLGlCQUFpQixDQUFHVSxJQUFJLEVBQUU7WUFBRW1DLFdBQVcsRUFBRTtVQUFLLENBQUMsQ0FBQztRQUFBO1FBQy9EQyxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBR2hULEtBQUs7VUFBQSxPQUFLQSxLQUFLLENBQUNyRixHQUFHLEtBQUssT0FBTyxLQUFJdVYsaUJBQWlCLGFBQWpCQSxpQkFBaUIsdUJBQWpCQSxpQkFBaUIsQ0FBR1UsSUFBSSxFQUFFO1lBQUVtQyxXQUFXLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFBQTtRQUMvRm5ILFNBQVMsRUFDUDtNQUNKLENBQUM7TUFDRCxJQUFBcUgsb0JBQUEsR0FBdUJoSixtQkFBbUIsQ0FBQzJHLElBQUksQ0FBQ3hGLElBQUksQ0FBQztRQUE3QzNCLEtBQUssR0FBQXdKLG9CQUFBLENBQUx4SixLQUFLO1FBQUVDLEdBQUcsR0FBQXVKLG9CQUFBLENBQUh2SixHQUFHO01BQ2xCLElBQU13SixXQUFXLEdBQUc1SyxvQkFBb0IsQ0FBQ3NJLElBQUksQ0FBQzFGLE1BQU0sQ0FBQztNQUNyRCxJQUFNaUksWUFBWSxHQUFHN0gsZUFBZSxDQUFDc0YsSUFBSSxDQUFDNVYsUUFBUSxDQUFDO01BQ25ELElBQU1vWSxVQUFVLEdBQUd4QyxJQUFJLENBQUN5QyxLQUFLLEdBQUdqTyxnQkFBZ0IsQ0FBQ3dMLElBQUksQ0FBQ3lDLEtBQUssQ0FBQyxHQUFHLEVBQUU7TUFDakUsSUFBTUMsU0FBUyxHQUFHRixVQUFVLEdBQUdBLFVBQVUsQ0FBQ3hSLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtNQUNyRSxvQkFDRWpKLEtBQUEsQ0FBQWdULGFBQUEsUUFBQTRILFFBQUE7UUFBSzVZLEdBQUcsRUFBRWlXLElBQUksQ0FBQzVXLEVBQUUsT0FBQUwsTUFBQSxDQUFPZ1osS0FBSyxDQUFDaFksR0FBRyxPQUFBaEIsTUFBQSxDQUFJaVgsSUFBSSxDQUFDNEMsWUFBWSxPQUFBN1osTUFBQSxDQUFJaVgsSUFBSSxDQUFDeEYsSUFBSTtNQUFHLEdBQUt3SCxTQUFTLGdCQUNsRmphLEtBQUEsQ0FBQWdULGFBQUE7UUFBS0MsU0FBUyxFQUFDO01BQWtGLGdCQUMvRmpULEtBQUEsQ0FBQWdULGFBQUE7UUFBS0MsU0FBUyxFQUFDO01BQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFHQyxTQUFTLEVBQUM7TUFBOEQsR0FDeEUzRixvQkFBb0IsQ0FBQzJLLElBQUksQ0FBQ3ZSLElBQUksQ0FDOUIsQ0FBQyxlQUNKMUcsS0FBQSxDQUFBZ1QsYUFBQTtRQUFLQyxTQUFTLEVBQUM7TUFBMkIsZ0JBQ3hDalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFHQyxTQUFTLEVBQUM7TUFBd0QsR0FBRW5DLEtBQUssSUFBSSxHQUFPLENBQUMsRUFDdkZDLEdBQUcsaUJBQUkvUSxLQUFBLENBQUFnVCxhQUFBO1FBQUdDLFNBQVMsRUFBQztNQUFxQyxHQUFDLGVBQUcsRUFBQ2xDLEdBQU8sQ0FDbkUsQ0FDRixDQUFDLGVBQ04vUSxLQUFBLENBQUFnVCxhQUFBO1FBQUtDLFNBQVMsRUFBQztNQUEwQyxnQkFDdkRqVCxLQUFBLENBQUFnVCxhQUFBO1FBQ0VDLFNBQVMsRUFBRXBPLFVBQVUsQ0FDbkIsOEdBQThHLEVBQzlHNEsscUJBQXFCLENBQUM4SyxXQUFXLENBQ25DO01BQUUsR0FFREEsV0FBVyxJQUFJLGFBQ1osQ0FBQyxFQUNOdEMsSUFBSSxDQUFDNkMsTUFBTSxpQkFDVjlhLEtBQUEsQ0FBQWdULGFBQUE7UUFBR0MsU0FBUyxFQUFDO01BQW1DLEdBQUMsdUNBQ3hDLEVBQUMsR0FBRyxlQUNYalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFNQyxTQUFTLEVBQUM7TUFBMEIsR0FBRWdGLElBQUksQ0FBQzZDLE1BQWEsQ0FDN0QsQ0FFRixDQUNGLENBQUMsZUFDTjlhLEtBQUEsQ0FBQWdULGFBQUE7UUFBS0MsU0FBUyxFQUFDO01BQTBFLGdCQUN2RmpULEtBQUEsQ0FBQWdULGFBQUE7UUFBS0MsU0FBUyxFQUFDO01BQW1CLEdBQy9CZ0YsSUFBSSxDQUFDNEMsWUFBWSxnQkFDaEI3YSxLQUFBLENBQUFnVCxhQUFBO1FBQ0V4USxJQUFJLEVBQUMsUUFBUTtRQUNiNFMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUcvTixLQUFLLEVBQUs7VUFDbEJBLEtBQUssQ0FBQzBULGVBQWUsQ0FBQyxDQUFDO1VBQ3ZCdkQsYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBR1MsSUFBSSxDQUFDNEMsWUFBWSxDQUFDO1FBQ3BDLENBQUU7UUFDRjVILFNBQVMsRUFBQztNQUErRSxHQUV4RmdGLElBQUksQ0FBQzRDLFlBQ0EsQ0FBQyxnQkFFVDdhLEtBQUEsQ0FBQWdULGFBQUE7UUFBR0MsU0FBUyxFQUFDO01BQStDLEdBQUMsbURBQVksQ0FDMUUsRUFDQXVILFlBQVksQ0FBQ3ZkLE1BQU0sZ0JBQ2xCK0MsS0FBQSxDQUFBZ1QsYUFBQTtRQUFLQyxTQUFTLEVBQUM7TUFBc0IsR0FDbEN1SCxZQUFZLENBQUNqUyxHQUFHLENBQUMsVUFBQ3lTLE9BQU8sRUFBRUMsS0FBSztRQUFBLG9CQUMvQmpiLEtBQUEsQ0FBQWdULGFBQUE7VUFDRWhSLEdBQUcsS0FBQWhCLE1BQUEsQ0FBS2dhLE9BQU8sT0FBQWhhLE1BQUEsQ0FBSWlhLEtBQUssQ0FBRztVQUMzQmhJLFNBQVMsRUFBQztRQUF5RyxHQUVsSCtILE9BQ0csQ0FBQztNQUFBLENBQ1IsQ0FDRSxDQUFDLGdCQUVOaGIsS0FBQSxDQUFBZ1QsYUFBQTtRQUFHQyxTQUFTLEVBQUM7TUFBbUMsR0FBQywwR0FBc0IsQ0FFdEUsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFLQyxTQUFTLEVBQUM7TUFBbUIsR0FDL0J3SCxVQUFVLElBQUlFLFNBQVMsaUJBQ3RCM2EsS0FBQSxDQUFBZ1QsYUFBQTtRQUNFa0ksSUFBSSxTQUFBbGEsTUFBQSxDQUFTMlosU0FBUyxDQUFHO1FBQ3pCdkYsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUcvTixLQUFLO1VBQUEsT0FBS0EsS0FBSyxDQUFDMFQsZUFBZSxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQzVDOUgsU0FBUyxFQUFDO01BQThNLGdCQUV4TmpULEtBQUEsQ0FBQWdULGFBQUE7UUFDRWlCLEtBQUssRUFBQyw0QkFBNEI7UUFDbENDLE9BQU8sRUFBQyxXQUFXO1FBQ25CQyxJQUFJLEVBQUMsTUFBTTtRQUNYQyxNQUFNLEVBQUMsY0FBYztRQUNyQkMsV0FBVyxFQUFDLEtBQUs7UUFDakJwQixTQUFTLEVBQUM7TUFBUyxnQkFFbkJqVCxLQUFBLENBQUFnVCxhQUFBO1FBQ0VzQixhQUFhLEVBQUMsT0FBTztRQUNyQkMsY0FBYyxFQUFDLE9BQU87UUFDdEJ4WCxDQUFDLEVBQUM7TUFBbVQsQ0FDdFQsQ0FDRSxDQUFDLEVBQ0wwZCxVQUNBLENBQ0osRUFDQXhDLElBQUksQ0FBQ2tELE1BQU0saUJBQ1ZuYixLQUFBLENBQUFnVCxhQUFBO1FBQUdDLFNBQVMsRUFBQztNQUErRCxHQUFDLGdEQUNoRSxFQUFDLEdBQUcsZUFDZmpULEtBQUEsQ0FBQWdULGFBQUE7UUFBTUMsU0FBUyxFQUFDO01BQThCLEdBQUVnRixJQUFJLENBQUNrRCxNQUFhLENBQ2pFLENBRUYsQ0FDRixDQUNGLENBQUM7SUFFVixDQUFDLENBQ0UsQ0FDRixDQUFDO0VBQUEsQ0FDUCxDQUNFLENBRUksQ0FDVixDQUFDO0FBRVYsQ0FBQztBQUNELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUFDLE1BQUEsRUFBNEI7RUFBQSxJQUF0Qi9kLEtBQUssR0FBQStkLE1BQUEsQ0FBTC9kLEtBQUs7SUFBRThZLFNBQVEsR0FBQWlGLE1BQUEsQ0FBUmpGLFFBQVE7RUFDM0MsSUFBQWtGLFVBQUEsR0FBMENyYixRQUFRLENBQUM7TUFBQSxPQUFNZ0Qsa0JBQWtCLElBQUksRUFBRTtJQUFBLEVBQUM7SUFBQXNZLFVBQUEsR0FBQXhjLGNBQUEsQ0FBQXVjLFVBQUE7SUFBM0VFLGFBQWEsR0FBQUQsVUFBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsVUFBQTtFQUN0QyxJQUFBRyxVQUFBLEdBQThCemIsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBMGIsVUFBQSxHQUFBNWMsY0FBQSxDQUFBMmMsVUFBQTtJQUF0Q0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQXNDN2IsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBOGIsV0FBQSxHQUFBaGQsY0FBQSxDQUFBK2MsVUFBQTtJQUE5Q0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUVsQyxJQUFNRyxlQUFlLEdBQUcxVCxrQkFBa0IsQ0FBQ2xMLEtBQUssQ0FBQztFQUVqRDRDLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxDQUFDNUMsS0FBSyxJQUFJLE9BQU84WSxTQUFRLEtBQUssVUFBVSxFQUFFO0lBQzlDLElBQU12TixVQUFVLEdBQUdMLGtCQUFrQixDQUFDbEwsS0FBSyxDQUFDO0lBQzVDLElBQUl1TCxVQUFVLElBQUlBLFVBQVUsS0FBS3ZMLEtBQUssRUFBRTtNQUN0QzhZLFNBQVEsQ0FBQ3ZOLFVBQVUsQ0FBQztJQUN0QjtFQUNGLENBQUMsRUFBRSxDQUFDdkwsS0FBSyxFQUFFOFksU0FBUSxDQUFDLENBQUM7RUFFckIsSUFBTStGLGdCQUFnQixHQUFHL2IsT0FBTyxDQUFDLFlBQU07SUFDckMsSUFBSSxDQUFDOGIsZUFBZSxJQUFJVixhQUFhLENBQUNqUCxRQUFRLENBQUMyUCxlQUFlLENBQUMsRUFBRSxPQUFPVixhQUFhO0lBQ3JGLFFBQVFVLGVBQWUsRUFBQWxiLE1BQUEsQ0FBQXdZLGtCQUFBLENBQUtnQyxhQUFhO0VBQzNDLENBQUMsRUFBRSxDQUFDQSxhQUFhLEVBQUVVLGVBQWUsQ0FBQyxDQUFDO0VBRXBDaGMsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJa2MsU0FBUyxHQUFHLElBQUk7SUFDcEIsSUFBTUMsSUFBSTtNQUFBLElBQUFDLE1BQUEsR0FBQTVkLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUF3ZSxTQUFBO1FBQUEsSUFBQUMsTUFBQSxFQUFBQyxFQUFBO1FBQUEsT0FBQTVlLFlBQUEsR0FBQUMsQ0FBQSxXQUFBNGUsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUFoZ0IsQ0FBQSxHQUFBZ2dCLFNBQUEsQ0FBQTdnQixDQUFBO1lBQUE7Y0FDWGdnQixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQUNhLFNBQUEsQ0FBQWhnQixDQUFBO2NBQUFnZ0IsU0FBQSxDQUFBN2dCLENBQUE7Y0FBQSxPQUVNK0wsa0JBQWtCLENBQUMsQ0FBQztZQUFBO2NBQW5DNFUsTUFBTSxHQUFBRSxTQUFBLENBQUE3ZixDQUFBO2NBQUEsSUFDUHVmLFNBQVM7Z0JBQUFNLFNBQUEsQ0FBQTdnQixDQUFBO2dCQUFBO2NBQUE7Y0FBQSxPQUFBNmdCLFNBQUEsQ0FBQTVmLENBQUE7WUFBQTtjQUNkbUcsa0JBQWtCLEdBQUd1WixNQUFNO2NBQzNCZixnQkFBZ0IsQ0FBQ2UsTUFBTSxDQUFDO2NBQUNFLFNBQUEsQ0FBQTdnQixDQUFBO2NBQUE7WUFBQTtjQUFBNmdCLFNBQUEsQ0FBQWhnQixDQUFBO2NBQUErZixFQUFBLEdBQUFDLFNBQUEsQ0FBQTdmLENBQUE7Y0FFekJnSixPQUFPLENBQUNELEtBQUssQ0FBQyxtQkFBbUIsRUFBQTZXLEVBQU8sQ0FBQztZQUFDO2NBQUFDLFNBQUEsQ0FBQWhnQixDQUFBO2NBRTFDLElBQUkwZixTQUFTLEVBQUVQLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FBQyxPQUFBYSxTQUFBLENBQUFqZ0IsQ0FBQTtZQUFBO2NBQUEsT0FBQWlnQixTQUFBLENBQUE1ZixDQUFBO1VBQUE7UUFBQSxHQUFBeWYsUUFBQTtNQUFBLENBRXBDO01BQUEsZ0JBWktGLElBQUlBLENBQUE7UUFBQSxPQUFBQyxNQUFBLENBQUExZCxLQUFBLE9BQUFELFNBQUE7TUFBQTtJQUFBLEdBWVQ7SUFDRDBkLElBQUksQ0FBQyxDQUFDO0lBQ04sT0FBTyxZQUFNO01BQ1hELFNBQVMsR0FBRyxLQUFLO0lBQ25CLENBQUM7RUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTU8sVUFBVSxHQUFHL1QsZUFBZSxDQUFDc1QsZUFBZSxJQUFJVixhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0VBRTdFLG9CQUNFeGIsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBbUUsZ0JBQ2hGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBaUQsR0FDN0QwSixVQUFVLGdCQUNUM2MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLNEosR0FBRyxFQUFFRCxVQUFXO0lBQUNFLEdBQUcsRUFBQyxRQUFRO0lBQUM1SixTQUFTLEVBQUM7RUFBNkQsQ0FBRSxDQUFDLGdCQUU3R2pULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQW9JLEdBQUMsNkNBRS9JLENBQ04sZUFDRGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWtCLGdCQUMvQmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQWdELEdBQUMsa0lBQW1DLENBQUMsZUFDdEdqVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0UxVixLQUFLLEVBQUU0ZSxlQUFlLElBQUksRUFBRztJQUM3QjlGLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUsrTyxTQUFRLENBQUM1TixrQkFBa0IsQ0FBQ25CLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3RFMlYsU0FBUyxFQUFDO0VBQXFGLGdCQUUvRmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBUTFWLEtBQUssRUFBQztFQUFFLEdBQUMsdUZBQXVCLENBQUMsRUFDeEM2ZSxnQkFBZ0IsQ0FBQzVULEdBQUcsQ0FBQyxVQUFDcUQsTUFBTTtJQUFBLG9CQUMzQjVMLEtBQUEsQ0FBQWdULGFBQUE7TUFBUWhSLEdBQUcsRUFBRTRKLE1BQU87TUFBQ3RPLEtBQUssRUFBRXNPO0lBQU8sR0FDaENBLE1BQU0sQ0FBQzNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUN2QixDQUFDO0VBQUEsQ0FDVixDQUNLLENBQUMsZUFDVGpKLEtBQUEsQ0FBQWdULGFBQUE7SUFDRXhRLElBQUksRUFBQyxRQUFRO0lBQ2I0UyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVE2RyxjQUFjLENBQUMsVUFBQzlWLElBQUk7UUFBQSxPQUFLLENBQUNBLElBQUk7TUFBQSxFQUFDO0lBQUEsQ0FBQztJQUMvQzhNLFNBQVMsRUFBQyxpRkFBaUY7SUFDM0Y2SixRQUFRLEVBQUVsQjtFQUFRLEdBRWpCQSxPQUFPLEdBQ0osa0JBQWtCLEdBQ2xCSixhQUFhLENBQUN2ZSxNQUFNLEdBQ2xCK2UsV0FBVyxHQUNULGdCQUFnQixHQUNoQixrQkFBa0IsR0FDcEIsMEJBQ0EsQ0FDTCxDQUNGLENBQUMsRUFDTEEsV0FBVyxJQUFJUixhQUFhLENBQUN2ZSxNQUFNLEdBQUcsQ0FBQyxpQkFDdEMrQyxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUF1QyxHQUNuRHVJLGFBQWEsQ0FBQ2pULEdBQUcsQ0FBQyxVQUFDd1UsTUFBTSxFQUFLO0lBQzdCLElBQU1DLFVBQVUsR0FBR0QsTUFBTSxLQUFLYixlQUFlO0lBQzdDLG9CQUNFbGMsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFeFEsSUFBSSxFQUFDLFFBQVE7TUFDYlIsR0FBRyxFQUFFK2EsTUFBTztNQUNaM0gsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRZ0IsU0FBUSxDQUFDMkcsTUFBTSxDQUFDO01BQUEsQ0FBQztNQUNoQzlKLFNBQVMsaUZBQUFqUyxNQUFBLENBQ1BnYyxVQUFVLEdBQUcsb0NBQW9DLEdBQUcsK0JBQStCO0lBQ2xGLGdCQUVIaGQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLNEosR0FBRyxFQUFFaFUsZUFBZSxDQUFDbVUsTUFBTSxDQUFFO01BQUNGLEdBQUcsRUFBQyxlQUFlO01BQUM1SixTQUFTLEVBQUM7SUFBcUMsQ0FBRSxDQUNsRyxDQUFDO0VBRWIsQ0FBQyxDQUNFLENBQ04sRUFDQSxDQUFDdUksYUFBYSxDQUFDdmUsTUFBTSxJQUFJLENBQUMyZSxPQUFPLGlCQUFJNWIsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyxtUkFBNkQsQ0FDdEksQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNZ0ssWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLE1BQUEsRUFBMkM7RUFBQSxJQUFyQzVmLEtBQUssR0FBQTRmLE1BQUEsQ0FBTDVmLEtBQUs7SUFBRThZLFFBQVEsR0FBQThHLE1BQUEsQ0FBUjlHLFFBQVE7SUFBQStHLFlBQUEsR0FBQUQsTUFBQSxDQUFFRSxLQUFLO0lBQUxBLEtBQUssR0FBQUQsWUFBQSxjQUFHLEtBQUssR0FBQUEsWUFBQTtFQUNwRCxJQUFNRSxXQUFXLEdBQUc3VCxNQUFNLENBQUNsTSxLQUFLLElBQUl5RixVQUFVLENBQUMsQ0FBQ3VhLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDMUQsSUFBTUMsWUFBWSxHQUFHSCxLQUFLLEdBQ3RCLHVFQUF1RSxHQUN2RSxxRUFBcUU7RUFDekUsSUFBTUksVUFBVSxHQUFHSixLQUFLLEdBQ3BCLDBEQUEwRCxHQUMxRCwwREFBMEQ7RUFDOUQsb0JBQ0VwZCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBRXNLO0VBQWEsZ0JBQzNCdmQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUV1SztFQUFXLGdCQUMzQnhkLEtBQUEsQ0FBQWdULGFBQUEsZUFBTSw0Q0FBYSxDQUFDLGVBQ3BCaFQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBMEIsR0FBRW9LLFdBQWtCLENBQ3pELENBQUMsZUFDUnJkLEtBQUEsQ0FBQWdULGFBQUE7SUFBT3hRLElBQUksRUFBQyxPQUFPO0lBQUMrVyxHQUFHLEVBQUV6VyxVQUFXO0lBQUM2SyxHQUFHLEVBQUU1SyxVQUFXO0lBQUMwYSxJQUFJLEVBQUV6YSxXQUFZO0lBQUMxRixLQUFLLEVBQUVrTSxNQUFNLENBQUNsTSxLQUFLLENBQUMsSUFBSXlGLFVBQVc7SUFBQ3FULFFBQVEsRUFBRUEsUUFBUztJQUFDbkQsU0FBUyxFQUFDO0VBQTBCLENBQUUsQ0FDcEssQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNeUssV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLE1BQUEsRUFBaUU7RUFBQSxJQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtFQUFBLElBQUFDLGNBQUEsR0FBQUgsTUFBQSxDQUEzREksT0FBTztJQUFQQSxPQUFPLEdBQUFELGNBQUEsY0FBRyxFQUFFLEdBQUFBLGNBQUE7SUFBRUUsYUFBYSxHQUFBTCxNQUFBLENBQWJLLGFBQWE7SUFBRUMsTUFBTSxHQUFBTixNQUFBLENBQU5NLE1BQU07SUFBRUMsS0FBSyxHQUFBUCxNQUFBLENBQUxPLEtBQUs7SUFBRUMsUUFBUSxHQUFBUixNQUFBLENBQVJRLFFBQVE7RUFDekUsSUFBQUMsV0FBQSxHQUFzQ25lLFFBQVEsQ0FBQztNQUFFK0QsSUFBSSxFQUFFLEtBQUs7TUFBRXJDLElBQUksRUFBRSxNQUFNO01BQUUwYyxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFBQUMsV0FBQSxHQUFBdmYsY0FBQSxDQUFBcWYsV0FBQTtJQUF0RkcsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUNsQyxJQUFBRyxXQUFBLEdBQXNDeGUsUUFBUSxDQUFDa0QsbUJBQW1CLENBQUM7SUFBQXViLFdBQUEsR0FBQTNmLGNBQUEsQ0FBQTBmLFdBQUE7SUFBNURFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFFbEMsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlsZCxJQUFJLEVBQXNCO0lBQUEsSUFBcEIwYyxRQUFRLEdBQUExZixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsSUFBSTtJQUN2QyxJQUFJZ0QsSUFBSSxLQUFLLFFBQVEsRUFBRTtNQUNyQmlkLGNBQWMsQ0FBQ3piLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN2QztJQUNBcWIsY0FBYyxDQUFDO01BQUV4YSxJQUFJLEVBQUUsSUFBSTtNQUFFckMsSUFBSSxFQUFKQSxJQUFJO01BQUUwYyxRQUFRLEVBQVJBO0lBQVMsQ0FBQyxDQUFDO0VBQ2hELENBQUM7RUFFRCxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQTtJQUFBLE9BQVNOLGNBQWMsQ0FBQztNQUFFeGEsSUFBSSxFQUFFLEtBQUs7TUFBRXJDLElBQUksRUFBRSxNQUFNO01BQUUwYyxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUM7RUFBQTtFQUV2RixJQUFNVSxZQUFZLEdBQUdSLFdBQVcsQ0FBQzVjLElBQUksS0FBSyxRQUFRO0VBQ2xELElBQU1xZCxZQUFZLEdBQUdqQixPQUFPLENBQUNrQixJQUFJLENBQUMsVUFBQzVULE1BQU07SUFBQSxPQUFLQSxNQUFNLENBQUNoSyxFQUFFLEtBQUtrZCxXQUFXLENBQUNGLFFBQVE7RUFBQSxFQUFDLElBQUksSUFBSTtFQUN6RixJQUFNYSxhQUFhLEdBQUdILFlBQVksR0FBR0osV0FBVyxHQUFHSyxZQUFZO0VBRS9ELElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLEtBQUssRUFBRTloQixLQUFLLEVBQUs7SUFDMUMsSUFBSXloQixZQUFZLEVBQUU7TUFDaEJILGNBQWMsQ0FBQyxVQUFDelksSUFBSTtRQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FBV3ZFLElBQUksT0FBQWtaLGVBQUEsS0FBR0QsS0FBSyxFQUFHOWhCLEtBQUs7TUFBQSxDQUFHLENBQUM7SUFDekQsQ0FBQyxNQUFNLElBQUkwaEIsWUFBWSxFQUFFO01BQ3ZCaEIsYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBR2dCLFlBQVksQ0FBQzNkLEVBQUUsRUFBRStkLEtBQUssRUFBRTloQixLQUFLLENBQUM7SUFDaEQ7RUFDRixDQUFDO0VBRUQsSUFBTWdpQixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3ZCLElBQUlQLFlBQVksRUFBRTtNQUNoQmIsS0FBSyxhQUFMQSxLQUFLLGVBQUxBLEtBQUssQ0FBR1MsV0FBVyxDQUFDO01BQ3BCQyxjQUFjLENBQUN6YixtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxNQUFNLElBQUk2YixZQUFZLEVBQUU7TUFDdkJmLE1BQU0sYUFBTkEsTUFBTSxlQUFOQSxNQUFNLENBQUdlLFlBQVksQ0FBQztJQUN4QjtJQUNBRixXQUFXLENBQUMsQ0FBQztFQUNmLENBQUM7RUFFRCxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCLElBQUksQ0FBQ1IsWUFBWSxJQUFJQyxZQUFZLEVBQUU7TUFDakMsSUFBTVEsTUFBTSxHQUFHckIsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUdhLFlBQVksQ0FBQztNQUN2QyxJQUFJUSxNQUFNLElBQUksT0FBT0EsTUFBTSxXQUFRLEtBQUssVUFBVSxFQUFFO1FBQ2xEQSxNQUFNLFdBQVEsQ0FBQztVQUFBLE9BQU1WLFdBQVcsQ0FBQyxDQUFDO1FBQUEsRUFBQztNQUNyQyxDQUFDLE1BQU07UUFDTEEsV0FBVyxDQUFDLENBQUM7TUFDZjtJQUNGO0VBQ0YsQ0FBQztFQUVELElBQU1XLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlwVSxNQUFNO0lBQUEsT0FDL0JBLE1BQU0sZ0JBQ0pyTCxLQUFBLENBQUFnVCxhQUFBO01BQ0VDLFNBQVMsRUFBRXBPLFVBQVUsQ0FDbkIsNEVBQTRFLEVBQzVFd0csTUFBTSxDQUFDMUgsUUFBUSxLQUFLLEtBQUssR0FBRyxvQ0FBb0MsR0FBRyw2QkFDckU7SUFBRSxHQUVEMEgsTUFBTSxDQUFDMUgsUUFBUSxLQUFLLEtBQUssR0FBRyxTQUFTLEdBQUcsT0FDckMsQ0FBQyxHQUNMLElBQUk7RUFBQTtFQUVWLElBQU0rYixTQUFTLEdBQUdYLFlBQVksR0FBRzdaLE9BQU8sQ0FBQyxDQUFBZ2EsYUFBYSxhQUFiQSxhQUFhLGdCQUFBdEIsbUJBQUEsR0FBYnNCLGFBQWEsQ0FBRTFmLElBQUksY0FBQW9lLG1CQUFBLHVCQUFuQkEsbUJBQUEsQ0FBcUI5VSxJQUFJLENBQUMsQ0FBQyxNQUFJb1csYUFBYSxhQUFiQSxhQUFhLGdCQUFBckIscUJBQUEsR0FBYnFCLGFBQWEsQ0FBRTliLFFBQVEsY0FBQXlhLHFCQUFBLHVCQUF2QkEscUJBQUEsQ0FBeUIvVSxJQUFJLENBQUMsQ0FBQyxFQUFDLEdBQUc1RCxPQUFPLENBQUNnYSxhQUFhLENBQUM7RUFFakksb0JBQ0VsZixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0ksV0FBVztJQUNWblAsS0FBSyxFQUFDLDRDQUFTO0lBQ2ZxUCxPQUFPLGVBQ0x0VCxLQUFBLENBQUFnVCxhQUFBO01BQ0VvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF5SixVQUFVLENBQUMsUUFBUSxDQUFDO01BQUEsQ0FBQztNQUNwQzVMLFNBQVMsRUFBQztJQUE2SCxHQUN4SSwrRkFFTztFQUNULEdBRUE4SyxPQUFPLENBQUM5Z0IsTUFBTSxLQUFLLENBQUMsZ0JBQ25CK0MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBZ0IsR0FBQyxvU0FBMEQsQ0FBQyxnQkFFekZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEyQixHQUN2QzhLLE9BQU8sQ0FBQ3hWLEdBQUcsQ0FBQyxVQUFDOEMsTUFBTSxFQUFLO0lBQ3ZCLElBQU1zVSxTQUFTLEdBQUcvVyxlQUFlLENBQUN5QyxNQUFNLENBQUM5SCxTQUFTLENBQUM7SUFDbkQsSUFBTWtYLFVBQVUsR0FBR3BQLE1BQU0sQ0FBQzVILEtBQUssR0FBR2dKLGdCQUFnQixDQUFDcEIsTUFBTSxDQUFDNUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtJQUNyRSxJQUFNbWMsV0FBVyxHQUFHcFcsTUFBTSxDQUFDNkIsTUFBTSxDQUFDaEksTUFBTSxJQUFJTixVQUFVLENBQUMsQ0FBQ3VhLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEUsb0JBQ0V0ZCxLQUFBLENBQUFnVCxhQUFBO01BQ0VoUixHQUFHLEVBQUVxSixNQUFNLENBQUNoSyxFQUFHO01BQ2YrVCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF5SixVQUFVLENBQUMsTUFBTSxFQUFFeFQsTUFBTSxDQUFDaEssRUFBRSxDQUFDO01BQUEsQ0FBQztNQUM3QzRSLFNBQVMsRUFBQztJQUEwTixnQkFFcE9qVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFrQyxHQUM5QzBNLFNBQVMsZ0JBQ1IzZixLQUFBLENBQUFnVCxhQUFBO01BQUs0SixHQUFHLEVBQUUrQyxTQUFVO01BQUM5QyxHQUFHLEVBQUV4UixNQUFNLENBQUM3TCxJQUFJLElBQUksUUFBUztNQUFDeVQsU0FBUyxFQUFDO0lBQW9DLENBQUUsQ0FBQyxnQkFFcEdqVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUEwRyxHQUN0SCxDQUFDNUgsTUFBTSxDQUFDN0wsSUFBSSxJQUFJLEdBQUcsRUFBRUYsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQzdCLENBQ04sZUFDRFUsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFQyxTQUFTLEVBQUVwTyxVQUFVLENBQ25CLDRFQUE0RSxFQUM1RXdHLE1BQU0sQ0FBQzFILFFBQVEsS0FBSyxLQUFLLEdBQUcsZ0JBQWdCLEdBQUcsY0FDakQ7SUFBRSxDQUNILENBQ0UsQ0FBQyxlQUNOM0QsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBMEIsZ0JBQ3ZDalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBbUMsZ0JBQ2hEalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBK0MsR0FBRTVILE1BQU0sQ0FBQzdMLElBQUksSUFBSSxXQUFlLENBQUMsRUFDNUZpZ0IsaUJBQWlCLENBQUNwVSxNQUFNLENBQ3RCLENBQUMsZUFDTnJMLEtBQUEsQ0FBQWdULGFBQUE7TUFBS0MsU0FBUyxFQUFDO0lBQStFLGdCQUM1RmpULEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQTZHLEdBQUMsU0FDMUgsRUFBQzJNLFdBQ0MsQ0FBQyxFQUNObkYsVUFBVSxpQkFBSXphLEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQWdCLEdBQUV3SCxVQUFpQixDQUFDLEVBQ2xFcFAsTUFBTSxDQUFDM0gsVUFBVSxpQkFBSTFELEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQWdCLEdBQUMsR0FBQyxFQUFDNUgsTUFBTSxDQUFDM0gsVUFBaUIsQ0FDOUUsQ0FBQyxFQUNMMkgsTUFBTSxDQUFDN0gsV0FBVyxpQkFBSXhELEtBQUEsQ0FBQWdULGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQXdCLEdBQUU1SCxNQUFNLENBQUM3SCxXQUFlLENBQ2pGLENBQ0MsQ0FBQztFQUViLENBQUMsQ0FDRSxDQUVJLENBQUMsZUFFZHhELEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzZCLEtBQUs7SUFDSjVRLEtBQUssRUFBRThhLFlBQVksR0FBRyxrQkFBa0IsR0FBRyxDQUFBRyxhQUFhLGFBQWJBLGFBQWEsdUJBQWJBLGFBQWEsQ0FBRTFmLElBQUksS0FBSSx3QkFBeUI7SUFDM0Z1VixNQUFNLEVBQUV3SixXQUFXLENBQUN2YSxJQUFLO0lBQ3pCZ1IsT0FBTyxFQUFFOEosV0FBWTtJQUNyQjNKLGFBQWEsRUFBQyxXQUFXO0lBQ3pCRixNQUFNLGVBQ0pqVixLQUFBLENBQUFnVCxhQUFBLENBQUFoVCxLQUFBLENBQUFPLFFBQUEsUUFDRyxDQUFDd2UsWUFBWSxpQkFDWi9lLEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRW1LLFlBQWE7TUFBQ3RNLFNBQVMsRUFBQztJQUF3RixHQUFDLDRDQUUxSCxDQUNULGVBQ0RqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUUwSixXQUFZO01BQUM3TCxTQUFTLEVBQUM7SUFBb0YsR0FBQyxzQ0FFckgsQ0FBQyxlQUNUalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFb0MsT0FBTyxFQUFFa0ssVUFBVztNQUNwQnhDLFFBQVEsRUFBRSxDQUFDNEMsU0FBVTtNQUNyQnpNLFNBQVMsRUFBRXBPLFVBQVUsQ0FDbkIsdURBQXVELEVBQ3ZENmEsU0FBUyxHQUFHLHFDQUFxQyxHQUFHLDZCQUN0RDtJQUFFLEdBRURYLFlBQVksR0FBRyxVQUFVLEdBQUcsV0FDdkIsQ0FDUjtFQUNILEdBRUFHLGFBQWEsZ0JBQ1psZixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXVELGdCQUNwRWpULEtBQUEsQ0FBQWdULGFBQUE7SUFDRTFWLEtBQUssRUFBRTRoQixhQUFhLENBQUMxZixJQUFJLElBQUksRUFBRztJQUNoQzRXLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUs4WCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU5WCxLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDbkV1aUIsV0FBVyxFQUFDLG9CQUFLO0lBQ2pCNU0sU0FBUyxFQUFDO0VBQXNFLENBQ2pGLENBQUMsZUFDRmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ2lLLFlBQVk7SUFBQ0csS0FBSztJQUFDOWYsS0FBSyxFQUFFNGhCLGFBQWEsQ0FBQzdiLE1BQU87SUFBQytTLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUs4WCxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU5WCxLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUNySCxDQUFDLGVBQ04wQyxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEyQixnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0V4USxJQUFJLEVBQUMsVUFBVTtJQUNmbEYsS0FBSyxFQUFFNGhCLGFBQWEsQ0FBQzliLFFBQVEsSUFBSSxFQUFHO0lBQ3BDZ1QsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBSzhYLGlCQUFpQixDQUFDLFVBQVUsRUFBRTlYLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN2RXVpQixXQUFXLEVBQUMsc0NBQVE7SUFDcEI1TSxTQUFTLEVBQUM7RUFBc0UsQ0FDakYsQ0FBQyxlQUNGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBc0gsR0FBQywwQkFFdEksZUFBQWpULEtBQUEsQ0FBQWdULGFBQUE7SUFDRXhRLElBQUksRUFBQyxPQUFPO0lBQ1psRixLQUFLLEVBQUUsSUFBSSxDQUFDcUMsSUFBSSxDQUFDdWYsYUFBYSxDQUFDNWIsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHNGIsYUFBYSxDQUFDNWIsS0FBSyxHQUFHLFNBQVU7SUFDOUU4UyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLOFgsaUJBQWlCLENBQUMsT0FBTyxFQUFFOVgsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3BFMlYsU0FBUyxFQUFDO0VBQXlFLENBQ3BGLENBQ0ksQ0FDSixDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0UxVixLQUFLLEVBQUU0aEIsYUFBYSxDQUFDMWIsV0FBVyxJQUFJLEVBQUc7SUFDdkM0UyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLOFgsaUJBQWlCLENBQUMsYUFBYSxFQUFFOVgsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQzFFdWlCLFdBQVcsRUFBQyxrREFBVTtJQUN0QkMsSUFBSSxFQUFFLENBQUU7SUFDUjdNLFNBQVMsRUFBQztFQUE2RSxDQUN4RixDQUFDLGVBQ0ZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEyQixnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0V4USxJQUFJLEVBQUMsS0FBSztJQUNWbEYsS0FBSyxFQUFFNGhCLGFBQWEsQ0FBQ3piLEtBQUssSUFBSSxFQUFHO0lBQ2pDMlMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBSzhYLGlCQUFpQixDQUFDLE9BQU8sRUFBRTlYLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUNwRXVpQixXQUFXLEVBQUMsNENBQVM7SUFDckI1TSxTQUFTLEVBQUM7RUFBc0UsQ0FDakYsQ0FBQyxlQUNGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFMVYsS0FBSyxFQUFFNGhCLGFBQWEsQ0FBQ3hiLFVBQVUsSUFBSSxFQUFHO0lBQ3RDMFMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBSzhYLGlCQUFpQixDQUFDLFlBQVksRUFBRTlYLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN6RXVpQixXQUFXLEVBQUMsYUFBYTtJQUN6QjVNLFNBQVMsRUFBQztFQUFzRSxDQUNqRixDQUNFLENBQUMsZUFDTmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ29JLGtCQUFrQjtJQUFDOWQsS0FBSyxFQUFFNGhCLGFBQWEsQ0FBQzNiLFNBQVU7SUFBQzZTLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHOVksS0FBSztNQUFBLE9BQUs2aEIsaUJBQWlCLENBQUMsV0FBVyxFQUFFN2hCLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLGVBQ2xIMEMsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBdUQsZ0JBQ3RFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPeFEsSUFBSSxFQUFDLFVBQVU7SUFBQ3VkLE9BQU8sRUFBRWIsYUFBYSxDQUFDdmIsUUFBUSxLQUFLLEtBQU07SUFBQ3lTLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUs4WCxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU5WCxLQUFLLENBQUNHLE1BQU0sQ0FBQ3VZLE9BQU8sQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLDhDQUV6SSxDQUNKLENBQUMsZ0JBRU4vZixLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFnQixHQUFDLG9OQUEyQyxDQUV0RSxDQUNKLENBQUM7QUFFVixDQUFDO0FBRUQsSUFBTStNLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxNQUFBLEVBQXVGO0VBQUEsSUFBQUMscUJBQUEsRUFBQUMscUJBQUE7RUFBQSxJQUFBQyxlQUFBLEdBQUFILE1BQUEsQ0FBakZJLFFBQVE7SUFBUkEsUUFBUSxHQUFBRCxlQUFBLGNBQUcsRUFBRSxHQUFBQSxlQUFBO0lBQUFFLGNBQUEsR0FBQUwsTUFBQSxDQUFFbEMsT0FBTztJQUFQQSxPQUFPLEdBQUF1QyxjQUFBLGNBQUcsRUFBRSxHQUFBQSxjQUFBO0lBQUV0QyxhQUFhLEdBQUFpQyxNQUFBLENBQWJqQyxhQUFhO0lBQUV1QyxhQUFhLEdBQUFOLE1BQUEsQ0FBYk0sYUFBYTtJQUFFcEMsUUFBUSxHQUFBOEIsTUFBQSxDQUFSOUIsUUFBUTtJQUFFRCxLQUFLLEdBQUErQixNQUFBLENBQUwvQixLQUFLO0VBQ2hHLElBQUFzQyxXQUFBLEdBQXNDdmdCLFFBQVEsQ0FBQztNQUFFK0QsSUFBSSxFQUFFLEtBQUs7TUFBRXJDLElBQUksRUFBRSxNQUFNO01BQUUwYyxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFBQW9DLFdBQUEsR0FBQTFoQixjQUFBLENBQUF5aEIsV0FBQTtJQUF0RmpDLFdBQVcsR0FBQWtDLFdBQUE7SUFBRWpDLGNBQWMsR0FBQWlDLFdBQUE7RUFDbEMsSUFBQUMsV0FBQSxHQUF3Q3pnQixRQUFRLENBQUMyRCxvQkFBb0IsQ0FBQztJQUFBK2MsV0FBQSxHQUFBNWhCLGNBQUEsQ0FBQTJoQixXQUFBO0lBQS9ERSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBRXBDLElBQU05QixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSWxkLElBQUksRUFBc0I7SUFBQSxJQUFwQjBjLFFBQVEsR0FBQTFmLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQTZGLFNBQUEsR0FBQTdGLFNBQUEsTUFBRyxJQUFJO0lBQ3ZDLElBQUlnRCxJQUFJLEtBQUssUUFBUSxFQUFFO01BQ3JCa2YsZUFBZSxDQUFDamQsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3pDO0lBQ0E0YSxjQUFjLENBQUM7TUFBRXhhLElBQUksRUFBRSxJQUFJO01BQUVyQyxJQUFJLEVBQUpBLElBQUk7TUFBRTBjLFFBQVEsRUFBUkE7SUFBUyxDQUFDLENBQUM7RUFDaEQsQ0FBQztFQUVELElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBO0lBQUEsT0FBU04sY0FBYyxDQUFDO01BQUV4YSxJQUFJLEVBQUUsS0FBSztNQUFFckMsSUFBSSxFQUFFLE1BQU07TUFBRTBjLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQztFQUFBO0VBRXZGLElBQU1VLFlBQVksR0FBR1IsV0FBVyxDQUFDNWMsSUFBSSxLQUFLLFFBQVE7RUFDbEQsSUFBTW1mLGFBQWEsR0FBR1QsUUFBUSxDQUFDcEIsSUFBSSxDQUFDLFVBQUNqRSxPQUFPO0lBQUEsT0FBS0EsT0FBTyxDQUFDM1osRUFBRSxLQUFLa2QsV0FBVyxDQUFDRixRQUFRO0VBQUEsRUFBQyxJQUFJLElBQUk7RUFDN0YsSUFBTTBDLGNBQWMsR0FBR2hDLFlBQVksR0FBRzZCLFlBQVksR0FBR0UsYUFBYTtFQUVsRSxJQUFNM0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsS0FBSyxFQUFFOWhCLEtBQUssRUFBSztJQUMxQyxJQUFJeWhCLFlBQVksRUFBRTtNQUNoQjhCLGVBQWUsQ0FBQyxVQUFDMWEsSUFBSTtRQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FBV3ZFLElBQUksT0FBQWtaLGVBQUEsS0FBR0QsS0FBSyxFQUFHOWhCLEtBQUs7TUFBQSxDQUFHLENBQUM7SUFDMUQsQ0FBQyxNQUFNLElBQUl3akIsYUFBYSxFQUFFO01BQ3hCOUMsYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBRzhDLGFBQWEsQ0FBQ3pmLEVBQUUsRUFBRStkLEtBQUssRUFBRTloQixLQUFLLENBQUM7SUFDakQ7RUFDRixDQUFDO0VBRUQsSUFBTTBqQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJclcsUUFBUSxFQUFFck4sS0FBSyxFQUFLO0lBQzdDLElBQUl5aEIsWUFBWSxFQUFFO01BQ2hCOEIsZUFBZSxDQUFDLFVBQUMxYSxJQUFJO1FBQUEsT0FBQXVFLGFBQUEsQ0FBQUEsYUFBQSxLQUNoQnZFLElBQUk7VUFDUHJDLE1BQU0sRUFBQTRHLGFBQUEsQ0FBQUEsYUFBQSxLQUFRdkUsSUFBSSxDQUFDckMsTUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFBdWIsZUFBQSxLQUFJMVUsUUFBUSxFQUFHck4sS0FBSztRQUFFO01BQUEsQ0FDckQsQ0FBQztJQUNMLENBQUMsTUFBTSxJQUFJd2pCLGFBQWEsRUFBRTtNQUN4QlAsYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBR08sYUFBYSxDQUFDemYsRUFBRSxFQUFFc0osUUFBUSxFQUFFck4sS0FBSyxDQUFDO0lBQ3BEO0VBQ0YsQ0FBQztFQUVELElBQU1naUIsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUN2QixJQUFJUCxZQUFZLEVBQUU7TUFBQSxJQUFBa0Msb0JBQUE7TUFDaEIsSUFBSSxFQUFDRixjQUFjLGFBQWRBLGNBQWMsZ0JBQUFFLG9CQUFBLEdBQWRGLGNBQWMsQ0FBRXZoQixJQUFJLGNBQUF5aEIsb0JBQUEsZUFBcEJBLG9CQUFBLENBQXNCblksSUFBSSxDQUFDLENBQUMsR0FBRTtNQUNuQ29WLEtBQUssYUFBTEEsS0FBSyxlQUFMQSxLQUFLLENBQUcwQyxZQUFZLENBQUM7TUFDckJDLGVBQWUsQ0FBQ2pkLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUN6QztJQUNBa2IsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDO0VBRUQsSUFBTW9DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM5QixJQUFJLENBQUNuQyxZQUFZLElBQUkrQixhQUFhLEVBQUU7TUFDbEMsSUFBTXRCLE1BQU0sR0FBR3JCLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFHMkMsYUFBYSxDQUFDO01BQ3hDLElBQUl0QixNQUFNLElBQUksT0FBT0EsTUFBTSxXQUFRLEtBQUssVUFBVSxFQUFFO1FBQ2xEQSxNQUFNLFdBQVEsQ0FBQztVQUFBLE9BQU1WLFdBQVcsQ0FBQyxDQUFDO1FBQUEsRUFBQztNQUNyQyxDQUFDLE1BQU07UUFDTEEsV0FBVyxDQUFDLENBQUM7TUFDZjtJQUNGO0VBQ0YsQ0FBQztFQUVELElBQU1xQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJbkcsT0FBTyxFQUFLO0lBQ3ZDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO01BQ1osT0FBTztRQUFFMVosS0FBSyxFQUFFLEdBQUc7UUFBRThmLE9BQU8sRUFBRTtNQUFHLENBQUM7SUFDcEM7SUFDQSxJQUFNQyxNQUFNLEdBQUd0RCxPQUFPLENBQ25CeFYsR0FBRyxDQUFDLFVBQUM4QyxNQUFNO01BQUEsSUFBQWlXLGVBQUE7TUFBQSxPQUFLOVgsTUFBTSxFQUFBOFgsZUFBQSxHQUFDdEcsT0FBTyxDQUFDbFgsTUFBTSxjQUFBd2QsZUFBQSx1QkFBZEEsZUFBQSxDQUFpQmpXLE1BQU0sQ0FBQ2hLLEVBQUUsQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUNwRDRELE1BQU0sQ0FBQyxVQUFDc2MsS0FBSztNQUFBLE9BQUsvWCxNQUFNLENBQUNDLFFBQVEsQ0FBQzhYLEtBQUssQ0FBQyxJQUFJQSxLQUFLLElBQUksQ0FBQztJQUFBLEVBQUM7SUFDMUQsSUFBSSxDQUFDRixNQUFNLENBQUNwa0IsTUFBTSxFQUFFO01BQ2xCLE9BQU87UUFDTHFFLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkI4ZixPQUFPLEVBQUVyRCxPQUFPLENBQUM5Z0IsTUFBTSxHQUFHLHlCQUF5QixHQUFHO01BQ3hELENBQUM7SUFDSDtJQUNBLElBQU1zYyxHQUFHLEdBQUc3TCxJQUFJLENBQUM2TCxHQUFHLENBQUEzYSxLQUFBLENBQVI4TyxJQUFJLEVBQUE4TCxrQkFBQSxDQUFRNkgsTUFBTSxFQUFDO0lBQy9CLElBQU0xVCxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFBL08sS0FBQSxDQUFSOE8sSUFBSSxFQUFBOEwsa0JBQUEsQ0FBUTZILE1BQU0sRUFBQztJQUMvQixJQUFNelgsS0FBSyxHQUFHeVgsTUFBTSxDQUFDcGtCLE1BQU07SUFDM0IsT0FBTztNQUNMcUUsS0FBSyxFQUFFaVksR0FBRyxLQUFLNUwsR0FBRyxHQUFHckUsY0FBYyxDQUFDaVEsR0FBRyxDQUFDLE1BQUF2WSxNQUFBLENBQU1zSSxjQUFjLENBQUNpUSxHQUFHLENBQUMsY0FBQXZZLE1BQUEsQ0FBTXNJLGNBQWMsQ0FBQ3FFLEdBQUcsQ0FBQyxDQUFFO01BQzVGeVQsT0FBTyx3QkFBQXBnQixNQUFBLENBQVM0SSxLQUFLLE9BQUE1SSxNQUFBLENBQUkySSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztFQUNILENBQUM7RUFFRCxJQUFNOFYsU0FBUyxHQUFHWCxZQUFZLEdBQUc3WixPQUFPLENBQUM2YixjQUFjLGFBQWRBLGNBQWMsZ0JBQUFiLHFCQUFBLEdBQWRhLGNBQWMsQ0FBRXZoQixJQUFJLGNBQUEwZ0IscUJBQUEsdUJBQXBCQSxxQkFBQSxDQUFzQnBYLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO0VBRTdFLG9CQUNFOUksS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJqVCxLQUFBLENBQUFnVCxhQUFBLENBQUNJLFdBQVc7SUFDVm5QLEtBQUssRUFBQyxzQ0FBUTtJQUNkcVAsT0FBTyxlQUNMdFQsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFb0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFReUosVUFBVSxDQUFDLFFBQVEsQ0FBQztNQUFBLENBQUM7TUFDcEM1TCxTQUFTLEVBQUM7SUFBNkgsR0FDeEkseUZBRU87RUFDVCxHQUVBb04sUUFBUSxDQUFDcGpCLE1BQU0sS0FBSyxDQUFDLGdCQUNwQitDLEtBQUEsQ0FBQWdULGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQWdCLEdBQUMsMk5BQTZDLENBQUMsZ0JBRTVFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBMkIsR0FDdkNvTixRQUFRLENBQUM5WCxHQUFHLENBQUMsVUFBQ3lTLE9BQU8sRUFBSztJQUN6QixJQUFNd0csT0FBTyxHQUFHTCxtQkFBbUIsQ0FBQ25HLE9BQU8sQ0FBQztJQUM1QyxvQkFDRWhiLEtBQUEsQ0FBQWdULGFBQUE7TUFDRWhSLEdBQUcsRUFBRWdaLE9BQU8sQ0FBQzNaLEVBQUc7TUFDaEIrVCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF5SixVQUFVLENBQUMsTUFBTSxFQUFFN0QsT0FBTyxDQUFDM1osRUFBRSxDQUFDO01BQUEsQ0FBQztNQUM5QzRSLFNBQVMsRUFBQztJQUFzTixnQkFFaE9qVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUF5QyxnQkFDdERqVCxLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUErQyxHQUFFK0gsT0FBTyxDQUFDeGIsSUFBSSxJQUFJLGNBQWtCLENBQUMsZUFDakdRLEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQThELEdBQzNFK0gsT0FBTyxDQUFDblgsUUFBUSxNQUFBN0MsTUFBQSxDQUFNZ2EsT0FBTyxDQUFDblgsUUFBUSwyQkFBUyxHQUM1QyxDQUNILENBQUMsZUFDTjdELEtBQUEsQ0FBQWdULGFBQUE7TUFBS0MsU0FBUyxFQUFDO0lBQXdCLEdBQUV1TyxPQUFPLENBQUNsZ0IsS0FBVyxDQUFDLGVBQzdEdEIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBd0IsR0FBRXVPLE9BQU8sQ0FBQ0osT0FBVyxDQUNwRCxDQUFDO0VBRWIsQ0FBQyxDQUNFLENBRUksQ0FBQyxlQUVkcGhCLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzZCLEtBQUs7SUFDSjVRLEtBQUssRUFBRThhLFlBQVksR0FBRyxjQUFjLEdBQUcsQ0FBQWdDLGNBQWMsYUFBZEEsY0FBYyx1QkFBZEEsY0FBYyxDQUFFdmhCLElBQUksS0FBSSx1QkFBd0I7SUFDdkZ1VixNQUFNLEVBQUV3SixXQUFXLENBQUN2YSxJQUFLO0lBQ3pCZ1IsT0FBTyxFQUFFOEosV0FBWTtJQUNyQjNKLGFBQWEsRUFBQyxXQUFXO0lBQ3pCRixNQUFNLGVBQ0pqVixLQUFBLENBQUFnVCxhQUFBLENBQUFoVCxLQUFBLENBQUFPLFFBQUEsUUFDRyxDQUFDd2UsWUFBWSxpQkFDWi9lLEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRThMLGlCQUFrQjtNQUFDak8sU0FBUyxFQUFDO0lBQXdGLEdBQUMsNENBRS9ILENBQ1QsZUFDRGpULEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRTBKLFdBQVk7TUFBQzdMLFNBQVMsRUFBQztJQUFvRixHQUFDLHNDQUVySCxDQUFDLGVBQ1RqVCxLQUFBLENBQUFnVCxhQUFBO01BQ0VvQyxPQUFPLEVBQUVrSyxVQUFXO01BQ3BCeEMsUUFBUSxFQUFFLENBQUM0QyxTQUFVO01BQ3JCek0sU0FBUyxFQUFFcE8sVUFBVSxDQUNuQix1REFBdUQsRUFDdkQ2YSxTQUFTLEdBQUcscUNBQXFDLEdBQUcsNkJBQ3REO0lBQUUsR0FFRFgsWUFBWSxHQUFHLFVBQVUsR0FBRyxRQUN2QixDQUNSO0VBQ0gsR0FFQWdDLGNBQWMsZ0JBQ2IvZ0IsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEyQixnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQThCLEdBQUMsa0RBQWUsQ0FBQyxlQUNoRWpULEtBQUEsQ0FBQWdULGFBQUE7SUFDRTFWLEtBQUssRUFBRXlqQixjQUFjLENBQUN2aEIsSUFBSSxJQUFJLEVBQUc7SUFDakM0VyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLOFgsaUJBQWlCLENBQUMsTUFBTSxFQUFFOVgsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ25FdWlCLFdBQVcsRUFBQyw4RkFBbUI7SUFDL0I1TSxTQUFTLEVBQUM7RUFBc0UsQ0FDakYsQ0FDRSxDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQThCLEdBQUMsOEZBQXdCLENBQUMsZUFDekVqVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0V4USxJQUFJLEVBQUMsUUFBUTtJQUNiK1csR0FBRyxFQUFFLENBQUU7SUFDUGtFLElBQUksRUFBRSxDQUFFO0lBQ1JuZ0IsS0FBSyxHQUFBNmlCLHFCQUFBLEdBQUVZLGNBQWMsQ0FBQ2xkLFFBQVEsY0FBQXNjLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksRUFBRztJQUNyQy9KLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQ2Q4WCxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU5WCxLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHa00sTUFBTSxDQUFDbkMsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUMsQ0FBQztJQUFBLENBQzNGO0lBQ0QyVixTQUFTLEVBQUM7RUFBc0UsQ0FDakYsQ0FDRSxDQUNGLENBQUMsZUFDTmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyx3RkFBbUIsQ0FBQyxFQUN6RDhLLE9BQU8sQ0FBQzlnQixNQUFNLGdCQUNiK0MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBMkIsR0FDdkM4SyxPQUFPLENBQUN4VixHQUFHLENBQUMsVUFBQzhDLE1BQU07SUFBQSxJQUFBb1cscUJBQUEsRUFBQUMsc0JBQUE7SUFBQSxvQkFDbEIxaEIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFPaFIsR0FBRyxFQUFFcUosTUFBTSxDQUFDaEssRUFBRztNQUFDNFIsU0FBUyxFQUFDO0lBQXlILGdCQUN4SmpULEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQVUsR0FBRTVILE1BQU0sQ0FBQzdMLElBQUksSUFBSSxXQUFrQixDQUFDLGVBQzlEUSxLQUFBLENBQUFnVCxhQUFBO01BQ0V4USxJQUFJLEVBQUMsUUFBUTtNQUNiK1csR0FBRyxFQUFFLENBQUU7TUFDUGpjLEtBQUssR0FBQW1rQixxQkFBQSxJQUFBQyxzQkFBQSxHQUFFWCxjQUFjLENBQUNqZCxNQUFNLGNBQUE0ZCxzQkFBQSx1QkFBckJBLHNCQUFBLENBQXdCclcsTUFBTSxDQUFDaEssRUFBRSxDQUFDLGNBQUFvZ0IscUJBQUEsY0FBQUEscUJBQUEsR0FBSSxFQUFHO01BQ2hEckwsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO1FBQUEsT0FBSzJaLGlCQUFpQixDQUFDM1YsTUFBTSxDQUFDaEssRUFBRSxFQUFFZ0csS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ3RFMlYsU0FBUyxFQUFDLDhGQUE4RjtNQUN4RzRNLFdBQVcsRUFBQztJQUFHLENBQ2hCLENBQ0ksQ0FBQztFQUFBLENBQ1QsQ0FDRSxDQUFDLGdCQUVON2YsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyxvTkFBMkMsQ0FFaEYsQ0FDRixDQUFDLGdCQUVOalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBZ0IsR0FBQyxnTUFBc0MsQ0FFakUsQ0FDSixDQUFDO0FBRVYsQ0FBQztBQUVELElBQU0wTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLE1BQUEsRUFBMEM7RUFBQSxJQUFwQ3RrQixLQUFLLEdBQUFza0IsTUFBQSxDQUFMdGtCLEtBQUs7SUFBQXVrQixjQUFBLEdBQUFELE1BQUEsQ0FBRTNVLE9BQU87SUFBUEEsT0FBTyxHQUFBNFUsY0FBQSxjQUFHLEVBQUUsR0FBQUEsY0FBQTtJQUFFQyxRQUFRLEdBQUFGLE1BQUEsQ0FBUkUsUUFBUTtFQUN0RCxJQUFBQyxXQUFBLEdBQXdCOWhCLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQStoQixXQUFBLEdBQUFqakIsY0FBQSxDQUFBZ2pCLFdBQUE7SUFBaEMvZCxJQUFJLEdBQUFnZSxXQUFBO0lBQUVDLE9BQU8sR0FBQUQsV0FBQTtFQUNwQixJQUFBRSxXQUFBLEdBQTBCamlCLFFBQVEsQ0FBQzBTLGVBQWUsQ0FBQ3JWLEtBQUssQ0FBQyxDQUFDO0lBQUE2a0IsV0FBQSxHQUFBcGpCLGNBQUEsQ0FBQW1qQixXQUFBO0lBQW5ERSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQU1HLFNBQVMsR0FBR2ppQixNQUFNLENBQUMsSUFBSSxDQUFDO0VBQzlCLElBQUFraUIsV0FBQSxHQUFnQ3RpQixRQUFRLENBQUM7TUFBRXVpQixHQUFHLEVBQUUsQ0FBQztNQUFFbEssSUFBSSxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQUFtSyxXQUFBLEdBQUExakIsY0FBQSxDQUFBd2pCLFdBQUE7SUFBdERHLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFFNUJ2aUIsU0FBUyxDQUFDLFlBQU07SUFDZG1pQixRQUFRLENBQUMxUCxlQUFlLENBQUNyVixLQUFLLENBQUMsQ0FBQztFQUNsQyxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLENBQUM7RUFFWCxJQUFNc2xCLGNBQWMsR0FBR3ppQixXQUFXLENBQUMsWUFBTTtJQUN2QyxJQUFJLENBQUNtaUIsU0FBUyxDQUFDaGIsT0FBTyxFQUFFO0lBQ3hCLElBQU11YixJQUFJLEdBQUdQLFNBQVMsQ0FBQ2hiLE9BQU8sQ0FBQ3diLHFCQUFxQixDQUFDLENBQUM7SUFDdEQsSUFBTUMsVUFBVSxHQUFHLEdBQUc7SUFDdEIsSUFBTUMsV0FBVyxHQUFHLEdBQUc7SUFDdkIsSUFBTUMsUUFBUSxHQUFHdlYsSUFBSSxDQUFDNkwsR0FBRyxDQUFDc0osSUFBSSxDQUFDdkssSUFBSSxFQUFFelgsTUFBTSxDQUFDcWlCLFVBQVUsR0FBR0gsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6RSxJQUFNSSxPQUFPLEdBQUd6VixJQUFJLENBQUM2TCxHQUFHLENBQUNzSixJQUFJLENBQUNPLE1BQU0sR0FBRyxDQUFDLEVBQUV2aUIsTUFBTSxDQUFDd2lCLFdBQVcsR0FBR0wsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNoRkwsV0FBVyxDQUFDO01BQ1ZILEdBQUcsRUFBRTlVLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRXdWLE9BQU8sQ0FBQztNQUMxQjdLLElBQUksRUFBRTVLLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRXNWLFFBQVE7SUFDN0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOM2lCLGVBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQzBELElBQUksRUFBRSxPQUFPUSxTQUFTO0lBQzNCb2UsY0FBYyxDQUFDLENBQUM7SUFDaEIsSUFBTXpiLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBO01BQUEsT0FBU3liLGNBQWMsQ0FBQyxDQUFDO0lBQUE7SUFDdEMvaEIsTUFBTSxDQUFDNkcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFUCxPQUFPLENBQUM7SUFDMUN0RyxNQUFNLENBQUM2RyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVQLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDaEQsT0FBTyxZQUFNO01BQ1h0RyxNQUFNLENBQUM4RyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVSLE9BQU8sQ0FBQztNQUM3Q3RHLE1BQU0sQ0FBQzhHLG1CQUFtQixDQUFDLFFBQVEsRUFBRVIsT0FBTyxFQUFFLElBQUksQ0FBQztJQUNyRCxDQUFDO0VBQ0gsQ0FBQyxFQUFFLENBQUNuRCxJQUFJLEVBQUU0ZSxjQUFjLENBQUMsQ0FBQztFQUUxQixJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSTFYLE1BQU0sRUFBSztJQUMvQnlXLFFBQVEsQ0FBQyxVQUFDbGMsSUFBSTtNQUFBLE9BQU1BLElBQUksQ0FBQ29HLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDLEdBQUd6RixJQUFJLENBQUNsQixNQUFNLENBQUMsVUFBQzJOLElBQUk7UUFBQSxPQUFLQSxJQUFJLEtBQUtoSCxNQUFNO01BQUEsRUFBQyxNQUFBNUssTUFBQSxDQUFBd1ksa0JBQUEsQ0FBT3JULElBQUksSUFBRXlGLE1BQU0sRUFBQztJQUFBLENBQUMsQ0FBQztFQUMxRyxDQUFDO0VBRUQsSUFBTTBULFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDdkJ3QyxRQUFRLENBQUNNLEtBQUssQ0FBQ2pkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQjhjLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFDaEIsQ0FBQztFQUVELElBQU1ULE9BQU8sR0FBR1ksS0FBSyxDQUFDbmxCLE1BQU0sR0FBR21sQixLQUFLLENBQUNqZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQWdCO0VBRWxFLG9CQUNFbkYsS0FBQSxDQUFBZ1QsYUFBQSxDQUFBaFQsS0FBQSxDQUFBTyxRQUFBLHFCQUNFUCxLQUFBLENBQUFnVCxhQUFBO0lBQ0U5TCxHQUFHLEVBQUVvYixTQUFVO0lBQ2ZsTixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVE2TSxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUM3QmhQLFNBQVMsRUFBQztFQUF1SCxnQkFFaklqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFzRSxHQUFFdU8sT0FBYyxDQUNoRyxDQUFDLEVBQ1J4ZCxJQUFJLElBQ0h0RCxZQUFZLGNBQ1ZWLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDLG9CQUFvQjtJQUFDbUMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7TUFBQSxPQUFRNk0sT0FBTyxDQUFDLEtBQUssQ0FBQztJQUFBO0VBQUMsZ0JBQ2hFamlCLEtBQUEsQ0FBQWdULGFBQUE7SUFDRUMsU0FBUyxFQUFDLGdIQUFnSDtJQUMxSHNRLEtBQUssRUFBRTtNQUFFZixHQUFHLEtBQUF4aEIsTUFBQSxDQUFLMGhCLFFBQVEsQ0FBQ0YsR0FBRyxPQUFJO01BQUVsSyxJQUFJLEtBQUF0WCxNQUFBLENBQUswaEIsUUFBUSxDQUFDcEssSUFBSTtJQUFLLENBQUU7SUFDaEVsRCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBRy9OLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUMwVCxlQUFlLENBQUMsQ0FBQztJQUFBO0VBQUMsZ0JBRTVDL2EsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBbUMsZ0JBQ2hEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBZSxHQUFDLHNDQUFTLENBQUMsZUFDdkNqVCxLQUFBLENBQUFnVCxhQUFBO0lBQ0V4USxJQUFJLEVBQUMsUUFBUTtJQUNieVEsU0FBUyxFQUFDLGtEQUFrRDtJQUM1RG1DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBLEVBQVE7TUFDYmlOLFFBQVEsQ0FBQzFQLGVBQWUsQ0FBQ3JWLEtBQUssQ0FBQyxDQUFDO01BQ2hDMmtCLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDaEI7RUFBRSxHQUNILFFBRU8sQ0FDTCxDQUFDLEVBQ0xHLEtBQUssQ0FBQ25sQixNQUFNLEdBQUcsQ0FBQyxpQkFDZitDLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWdDLEdBQzVDbVAsS0FBSyxDQUFDN1osR0FBRyxDQUFDLFVBQUN5UyxPQUFPO0lBQUEsb0JBQ2pCaGIsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFeFEsSUFBSSxFQUFDLFFBQVE7TUFDYlIsR0FBRyxFQUFFZ1osT0FBUTtNQUNiL0gsU0FBUyxFQUFDLHlGQUF5RjtNQUNuR21DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUWtPLFlBQVksQ0FBQ3RJLE9BQU8sQ0FBQztNQUFBO0lBQUMsR0FFcENBLE9BQU8sZUFDUmhiLEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQWdCLEdBQUMsTUFBTyxDQUNsQyxDQUFDO0VBQUEsQ0FDVixDQUNFLENBQ04sZUFDRGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXlDLEdBQ3JEaEcsT0FBTyxDQUFDaFEsTUFBTSxLQUFLLENBQUMsaUJBQUkrQyxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFnQixHQUFDLDBHQUFzQixDQUFDLEVBQzdFaEcsT0FBTyxDQUFDMUUsR0FBRyxDQUFDLFVBQUNxRCxNQUFNLEVBQUs7SUFDdkIsSUFBTWpJLFFBQVEsR0FBR3llLEtBQUssQ0FBQzdWLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDO0lBQ3ZDLG9CQUNFNUwsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFaFIsR0FBRyxFQUFFNEosTUFBTztNQUNacUgsU0FBUyxFQUFFcE8sVUFBVSxDQUNuQiwrREFBK0QsRUFDL0RsQixRQUFRLEdBQUcsK0NBQStDLEdBQUcsNERBQy9EO0lBQUUsZ0JBRUYzRCxLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUFnQixHQUFFckgsTUFBYSxDQUFDLGVBQ2hENUwsS0FBQSxDQUFBZ1QsYUFBQTtNQUFPeFEsSUFBSSxFQUFDLFVBQVU7TUFBQ3VkLE9BQU8sRUFBRXBjLFFBQVM7TUFBQ3lTLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBO1FBQUEsT0FBUWtOLFlBQVksQ0FBQzFYLE1BQU0sQ0FBQztNQUFBLENBQUM7TUFBQ3FILFNBQVMsRUFBQztJQUFvRCxDQUFFLENBQzNJLENBQUM7RUFFWixDQUFDLENBQ0UsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBOEMsZ0JBQzNEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFReFEsSUFBSSxFQUFDLFFBQVE7SUFBQzRTLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUWlOLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQSxDQUFDO0lBQUNwUCxTQUFTLEVBQUM7RUFBeUMsR0FBQyxrREFFL0YsQ0FBQyxlQUNUalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFReFEsSUFBSSxFQUFDLFFBQVE7SUFBQzRTLE9BQU8sRUFBRWtLLFVBQVc7SUFBQ3JNLFNBQVMsRUFBQztFQUEyRixHQUFDLHNDQUV6SSxDQUNMLENBQ0YsQ0FDRixDQUFDLEVBQ054TCxRQUFRLENBQUMrYixJQUNYLENBQ0YsQ0FBQztBQUVQLENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLE1BQUEsRUFNZjtFQUFBLElBTEpwbUIsS0FBSyxHQUFBb21CLE1BQUEsQ0FBTHBtQixLQUFLO0lBQ0w4WSxRQUFRLEdBQUFzTixNQUFBLENBQVJ0TixRQUFRO0lBQUF1TixZQUFBLEdBQUFELE1BQUEsQ0FDUnpmLEtBQUs7SUFBTEEsS0FBSyxHQUFBMGYsWUFBQSxjQUFHLGVBQWUsR0FBQUEsWUFBQTtJQUFBQyxrQkFBQSxHQUFBRixNQUFBLENBQ3ZCN0QsV0FBVztJQUFYQSxXQUFXLEdBQUErRCxrQkFBQSxjQUFHLHdCQUF3QixHQUFBQSxrQkFBQTtJQUFBQyxxQkFBQSxHQUFBSCxNQUFBLENBQ3RDSSxlQUFlO0lBQWZBLGVBQWUsR0FBQUQscUJBQUEsY0FBRyxpSEFBaUgsR0FBQUEscUJBQUE7RUFFbkksSUFBQUUsV0FBQSxHQUF3QjlqQixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUErakIsV0FBQSxHQUFBamxCLGNBQUEsQ0FBQWdsQixXQUFBO0lBQWhDL2YsSUFBSSxHQUFBZ2dCLFdBQUE7SUFBRS9CLE9BQU8sR0FBQStCLFdBQUE7RUFDcEIsSUFBQUMsV0FBQSxHQUFtQ2hrQixRQUFRLENBQUM7TUFBQSxPQUFNMlEsbUJBQW1CLENBQUN0VCxLQUFLLENBQUM7SUFBQSxFQUFDO0lBQUE0bUIsV0FBQSxHQUFBbmxCLGNBQUEsQ0FBQWtsQixXQUFBO0lBQUFFLFlBQUEsR0FBQUQsV0FBQTtJQUFwRXBULEtBQUssR0FBQXFULFlBQUEsQ0FBTHJULEtBQUs7SUFBRUMsR0FBRyxHQUFBb1QsWUFBQSxDQUFIcFQsR0FBRztJQUFJc1IsUUFBUSxHQUFBNkIsV0FBQTtFQUUvQixJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxVQUFVLEVBQUs7SUFDekMsSUFBSSxDQUFDQSxVQUFVLEVBQUUsT0FBTyxFQUFFO0lBQzFCLElBQUFDLGlCQUFBLEdBQWdCRCxVQUFVLENBQUM3WCxLQUFLLENBQUMsR0FBRyxDQUFDO01BQUErWCxrQkFBQSxHQUFBeGxCLGNBQUEsQ0FBQXVsQixpQkFBQTtNQUE5QnRXLEtBQUssR0FBQXVXLGtCQUFBO0lBQ1osSUFBSSxDQUFDdlcsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNyQixVQUFBaE4sTUFBQSxDQUFVZ04sS0FBSyxDQUFDRCxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNsQyxDQUFDO0VBRUQsSUFBTXlXLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDdkJuQyxRQUFRLENBQUN6UixtQkFBbUIsQ0FBQ3RULEtBQUssQ0FBQyxDQUFDO0lBQ3BDMmtCLE9BQU8sQ0FBQyxJQUFJLENBQUM7RUFDZixDQUFDO0VBRUQsSUFBTTNDLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDdkJsSixRQUFRLGFBQVJBLFFBQVEsZUFBUkEsUUFBUSxDQUFHN0UsbUJBQW1CLENBQUNULEtBQUssRUFBRUMsR0FBRyxDQUFDLENBQUM7SUFDM0NrUixPQUFPLENBQUMsS0FBSyxDQUFDO0VBQ2hCLENBQUM7RUFFRCxJQUFNd0MsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN4QnJPLFFBQVEsYUFBUkEsUUFBUSxlQUFSQSxRQUFRLENBQUcsRUFBRSxDQUFDO0lBQ2RpTSxRQUFRLENBQUM7TUFBRXZSLEtBQUssRUFBRSxFQUFFO01BQUVDLEdBQUcsRUFBRTtJQUFHLENBQUMsQ0FBQztJQUNoQ2tSLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFDaEIsQ0FBQztFQUVELG9CQUNFamlCLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQWhULEtBQUEsQ0FBQU8sUUFBQSxxQkFDRVAsS0FBQSxDQUFBZ1QsYUFBQTtJQUFReFEsSUFBSSxFQUFDLFFBQVE7SUFBQzRTLE9BQU8sRUFBRW9QLFVBQVc7SUFBQ3ZSLFNBQVMsRUFBRTZRO0VBQWdCLEdBQ25FeG1CLEtBQUssR0FBR0EsS0FBSyxHQUFHdWlCLFdBQ1gsQ0FBQyxlQUNUN2YsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDNkIsS0FBSztJQUNKNVEsS0FBSyxFQUFFQSxLQUFNO0lBQ2I4USxNQUFNLEVBQUUvUSxJQUFLO0lBQ2JnUixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVFpTixPQUFPLENBQUMsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUM5QjlNLGFBQWEsRUFBQyxVQUFVO0lBQ3hCRixNQUFNLGVBQ0pqVixLQUFBLENBQUFnVCxhQUFBLENBQUFoVCxLQUFBLENBQUFPLFFBQUEscUJBQ0VQLEtBQUEsQ0FBQWdULGFBQUE7TUFBUXhRLElBQUksRUFBQyxRQUFRO01BQUM0UyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVE2TSxPQUFPLENBQUMsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUFDaFAsU0FBUyxFQUFDO0lBQXlELEdBQUMsNENBRWpILENBQUMsZUFDVGpULEtBQUEsQ0FBQWdULGFBQUE7TUFBUXhRLElBQUksRUFBQyxRQUFRO01BQUM0UyxPQUFPLEVBQUVrSyxVQUFXO01BQUNyTSxTQUFTLEVBQUM7SUFBcUUsR0FBQyx3REFFbkgsQ0FDUjtFQUNILGdCQUVEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFtQyxnQkFDaERqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFDLDZNQUF5QyxDQUFDLGVBQ2hGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFReFEsSUFBSSxFQUFDLFFBQVE7SUFBQzRTLE9BQU8sRUFBRXFQLFdBQVk7SUFBQ3hSLFNBQVMsRUFBQztFQUE2QyxHQUFDLGtEQUU1RixDQUNMLENBQUMsZUFDTmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXlHLGdCQUN0SGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWEsZ0JBQzFCalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBMEMsR0FBQyxnQ0FBWSxDQUFDLGVBQ3pFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFeFEsSUFBSSxFQUFDLE1BQU07SUFDWGliLElBQUksRUFBQyxNQUFNO0lBQ1huZ0IsS0FBSyxFQUFFd1QsS0FBTTtJQUNic0YsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBS2diLFFBQVEsQ0FBQyxVQUFDbGMsSUFBSTtRQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FBV3ZFLElBQUk7VUFBRTJLLEtBQUssRUFBRXNULGtCQUFrQixDQUFDL2MsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLO1FBQUM7TUFBQSxDQUFHLENBQUM7SUFBQSxDQUFDO0lBQ3RHMlYsU0FBUyxFQUFDO0VBQW9HLENBQy9HLENBQ0UsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBb0MsR0FBQyxHQUFPLENBQUMsZUFDN0RqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFhLGdCQUMxQmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQTBDLEdBQUMsZ0NBQVksQ0FBQyxlQUN6RWpULEtBQUEsQ0FBQWdULGFBQUE7SUFDRXhRLElBQUksRUFBQyxNQUFNO0lBQ1hpYixJQUFJLEVBQUMsTUFBTTtJQUNYbmdCLEtBQUssRUFBRXlULEdBQUk7SUFDWHFGLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUtnYixRQUFRLENBQUMsVUFBQ2xjLElBQUk7UUFBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJO1VBQUU0SyxHQUFHLEVBQUVxVCxrQkFBa0IsQ0FBQy9jLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSztRQUFDO01BQUEsQ0FBRyxDQUFDO0lBQUEsQ0FBQztJQUNwRzJWLFNBQVMsRUFBQztFQUFvRyxDQUMvRyxDQUNFLENBQ0YsQ0FDRixDQUNBLENBQ1AsQ0FBQztBQUVQLENBQUM7QUFDRCxJQUFNeVIsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLE1BQUEsRUFBc0U7RUFBQSxJQUFoRXBnQixNQUFNLEdBQUFvZ0IsTUFBQSxDQUFOcGdCLE1BQU07SUFBRXFnQixNQUFNLEdBQUFELE1BQUEsQ0FBTkMsTUFBTTtJQUFFM1gsT0FBTyxHQUFBMFgsTUFBQSxDQUFQMVgsT0FBTztJQUFFNFgsUUFBUSxHQUFBRixNQUFBLENBQVJFLFFBQVE7SUFBRXJOLGFBQWEsR0FBQW1OLE1BQUEsQ0FBYm5OLGFBQWE7SUFBRXNOLE9BQU8sR0FBQUgsTUFBQSxDQUFQRyxPQUFPO0VBQy9FLElBQU1uZ0IsUUFBUSxHQUFHLENBQUFKLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFbEQsRUFBRSxNQUFJa0QsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVFLEVBQUUsTUFBSUYsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVHLEVBQUUsTUFBSUgsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLFFBQVE7RUFDM0UsSUFBTXJILEtBQUssR0FBR2lILE1BQU0sQ0FBQ3FnQixNQUFNLENBQUM1aUIsR0FBRyxDQUFDO0VBQ2hDLElBQUEraUIsV0FBQSxHQUEwQjlrQixRQUFRLENBQUMzQyxLQUFLLGFBQUxBLEtBQUssY0FBTEEsS0FBSyxHQUFJLEVBQUUsQ0FBQztJQUFBMG5CLFdBQUEsR0FBQWptQixjQUFBLENBQUFnbUIsV0FBQTtJQUF4QzNDLEtBQUssR0FBQTRDLFdBQUE7SUFBRTNDLFFBQVEsR0FBQTJDLFdBQUE7RUFFdEI5a0IsU0FBUyxDQUFDLFlBQU07SUFDZG1pQixRQUFRLENBQUMva0IsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxFQUFFLENBQUM7RUFDdkIsQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxDQUFDO0VBRVgsSUFBSSxDQUFDc25CLE1BQU0sQ0FBQ3JpQixRQUFRLEVBQUU7SUFDcEIsSUFBSXFpQixNQUFNLENBQUNuaUIsYUFBYSxFQUFFO01BQ3hCLG9CQUNFekMsS0FBQSxDQUFBZ1QsYUFBQTtRQUFRb0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7VUFBQSxPQUFRb0MsYUFBYSxhQUFiQSxhQUFhLHVCQUFiQSxhQUFhLENBQUdsYSxLQUFLLENBQUM7UUFBQSxDQUFDO1FBQUMyVixTQUFTLEVBQUM7TUFBaUQsR0FDdkczVixLQUFLLElBQUksR0FDSixDQUFDO0lBRWI7SUFDQSxvQkFBTzBDLEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQTRELEdBQUUzVixLQUFLLElBQUksR0FBVSxDQUFDO0VBQzNHO0VBRUEsSUFBTTJuQixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSTdlLFNBQVMsRUFBSztJQUM1QixJQUFNNEIsT0FBTyxHQUFHNUIsU0FBUyxLQUFLNUIsU0FBUyxHQUFHNEIsU0FBUyxHQUFHZ2MsS0FBSztJQUMzRCxJQUFJLENBQUM5a0IsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxFQUFFLE9BQU8wSyxPQUFPLGFBQVBBLE9BQU8sY0FBUEEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ3ZDNmMsUUFBUSxDQUFDbGdCLFFBQVEsRUFBQTBhLGVBQUEsS0FBS3VGLE1BQU0sQ0FBQzVpQixHQUFHLEVBQUdnRyxPQUFPLENBQUUsQ0FBQztFQUMvQyxDQUFDO0VBRUQsSUFDRzhjLE9BQU8sS0FBSyxjQUFjLElBQUlGLE1BQU0sQ0FBQzVpQixHQUFHLEtBQUssTUFBTSxJQUNuRDhpQixPQUFPLEtBQUssV0FBVyxJQUFJRixNQUFNLENBQUM1aUIsR0FBRyxLQUFLLE1BQU8sRUFDbEQ7SUFDQSxvQkFDRWhDLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ3lRLGVBQWU7TUFDZG5tQixLQUFLLEVBQUVBLEtBQUssSUFBSSxFQUFHO01BQ25COFksUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdoUSxTQUFTO1FBQUEsT0FBSzZlLE1BQU0sQ0FBQzdlLFNBQVMsQ0FBQztNQUFBLENBQUM7TUFDM0N5WixXQUFXLEVBQUMsUUFBRztNQUNmNWIsS0FBSyxFQUFFNmdCLE9BQU8sS0FBSyxXQUFXLEdBQUcsdUJBQXVCLEdBQUcsZUFBZ0I7TUFDM0VoQixlQUFlLEVBQUM7SUFBK0YsQ0FDaEgsQ0FBQztFQUVOO0VBRUEsUUFBUWMsTUFBTSxDQUFDcGlCLElBQUk7SUFDakIsS0FBSyxRQUFRO01BQUU7UUFDYixJQUFNMGlCLFVBQVUsR0FBR04sTUFBTSxDQUFDamlCLFVBQVUsR0FBR3NLLE9BQU8sQ0FBQzJYLE1BQU0sQ0FBQ2ppQixVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUM1RSxvQkFDRTNDLEtBQUEsQ0FBQWdULGFBQUE7VUFBUTFWLEtBQUssRUFBRUEsS0FBSyxJQUFJLEVBQUc7VUFBQzhZLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztZQUFBLE9BQUs0ZCxNQUFNLENBQUM1ZCxLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztVQUFBLENBQUM7VUFBQzJWLFNBQVMsRUFBQztRQUFxRixnQkFDMUtqVCxLQUFBLENBQUFnVCxhQUFBO1VBQVExVixLQUFLLEVBQUM7UUFBRSxHQUFDLEdBQVMsQ0FBQyxFQUMxQjRuQixVQUFVLENBQUMzYyxHQUFHLENBQUMsVUFBQ3FELE1BQU07VUFBQSxvQkFDckI1TCxLQUFBLENBQUFnVCxhQUFBO1lBQVFoUixHQUFHLEVBQUU0SixNQUFPO1lBQUN0TyxLQUFLLEVBQUVzTztVQUFPLEdBQ2hDQSxNQUNLLENBQUM7UUFBQSxDQUNWLENBQ0ssQ0FBQztNQUViO0lBQ0EsS0FBSyxTQUFTO01BQ1osb0JBQ0U1TCxLQUFBLENBQUFnVCxhQUFBO1FBQU9DLFNBQVMsRUFBQztNQUFrQyxnQkFDakRqVCxLQUFBLENBQUFnVCxhQUFBO1FBQU94USxJQUFJLEVBQUMsVUFBVTtRQUFDdWQsT0FBTyxFQUFFemlCLEtBQUssS0FBSyxJQUFJLElBQUlBLEtBQUssS0FBSyxNQUFNLElBQUlBLEtBQUssS0FBSyxDQUFDLElBQUlBLEtBQUssS0FBSyxHQUFJO1FBQUM4WSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7VUFBQSxPQUFLNGQsTUFBTSxDQUFDNWQsS0FBSyxDQUFDRyxNQUFNLENBQUN1WSxPQUFPLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUFBO01BQUMsQ0FBRSxDQUNqSyxDQUFDO0lBRVosS0FBSyxjQUFjO01BQ2pCLG9CQUFPL2YsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDMk8sZUFBZTtRQUFDcmtCLEtBQUssRUFBRUEsS0FBTTtRQUFDMlAsT0FBTyxFQUFFQSxPQUFPLENBQUMyWCxNQUFNLENBQUNqaUIsVUFBVSxDQUFDLElBQUksRUFBRztRQUFDbWYsUUFBUSxFQUFFbUQ7TUFBTyxDQUFFLENBQUM7SUFDdkcsS0FBSyxNQUFNO01BQ1Qsb0JBQ0VqbEIsS0FBQSxDQUFBZ1QsYUFBQTtRQUFPeFEsSUFBSSxFQUFDLE1BQU07UUFBQ2xGLEtBQUssRUFBRUEsS0FBSyxHQUFHcUwsTUFBTSxDQUFDckwsS0FBSyxDQUFDLENBQUNnQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUc7UUFBQzhXLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztVQUFBLE9BQUs0ZCxNQUFNLENBQUM1ZCxLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztRQUFBLENBQUM7UUFBQzJWLFNBQVMsRUFBQztNQUFxRixDQUFFLENBQUM7SUFFMU47TUFDRSxvQkFDRWpULEtBQUEsQ0FBQWdULGFBQUE7UUFBT3hRLElBQUksRUFBQyxNQUFNO1FBQUNsRixLQUFLLEVBQUU4a0IsS0FBSyxJQUFJLEVBQUc7UUFBQ2hNLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztVQUFBLE9BQUtnYixRQUFRLENBQUNoYixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztRQUFBLENBQUM7UUFBQzZuQixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQTtVQUFBLE9BQVFGLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUFDNUssU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUdoVCxLQUFLO1VBQUEsT0FBS0EsS0FBSyxDQUFDckYsR0FBRyxLQUFLLE9BQU8sSUFBSWlqQixNQUFNLENBQUMsQ0FBQztRQUFBLENBQUM7UUFBQ2hTLFNBQVMsRUFBQztNQUFxRixDQUFFLENBQUM7RUFFblI7QUFDRixDQUFDO0FBRUQsSUFBTW1TLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxNQUFBLEVBQWtEO0VBQUEsSUFBNUNDLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO0lBQUFDLG9CQUFBLEdBQUFGLE1BQUEsQ0FBRUcsYUFBYTtJQUFiQSxhQUFhLEdBQUFELG9CQUFBLGNBQUcsRUFBRSxHQUFBQSxvQkFBQTtJQUFFRSxRQUFRLEdBQUFKLE1BQUEsQ0FBUkksUUFBUTtFQUN6RCxJQUFBQyxXQUFBLEdBQXdCemxCLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTBsQixXQUFBLEdBQUE1bUIsY0FBQSxDQUFBMm1CLFdBQUE7SUFBaEMxaEIsSUFBSSxHQUFBMmhCLFdBQUE7SUFBRTFELE9BQU8sR0FBQTBELFdBQUE7RUFDcEIsSUFBTXplLEdBQUcsR0FBRzdHLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDeEI0RyxlQUFlLENBQUNDLEdBQUcsRUFBRWxELElBQUksR0FBRztJQUFBLE9BQU1pZSxPQUFPLENBQUMsS0FBSyxDQUFDO0VBQUEsSUFBRyxJQUFJLENBQUM7RUFFeEQsb0JBQ0VqaUIsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBVSxnQkFDdkJqVCxLQUFBLENBQUFnVCxhQUFBO0lBQVFvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVE2TSxPQUFPLENBQUMsVUFBQzliLElBQUk7UUFBQSxPQUFLLENBQUNBLElBQUk7TUFBQSxFQUFDO0lBQUEsQ0FBQztJQUFDOE0sU0FBUyxFQUFDO0VBQWlFLEdBQUMsMEJBRXJILENBQUMsRUFDUmpQLElBQUksaUJBQ0hoRSxLQUFBLENBQUFnVCxhQUFBO0lBQUs5TCxHQUFHLEVBQUVBLEdBQUk7SUFBQytMLFNBQVMsRUFBQztFQUEyRyxHQUNqSXFTLE9BQU8sQ0FBQy9jLEdBQUcsQ0FBQyxVQUFDcWMsTUFBTTtJQUFBLG9CQUNsQjVrQixLQUFBLENBQUFnVCxhQUFBO01BQU9oUixHQUFHLEVBQUU0aUIsTUFBTSxDQUFDNWlCLEdBQUk7TUFBQ2lSLFNBQVMsRUFBQztJQUFnRCxnQkFDaEZqVCxLQUFBLENBQUFnVCxhQUFBO01BQU94USxJQUFJLEVBQUMsVUFBVTtNQUFDdWQsT0FBTyxFQUFFLENBQUN5RixhQUFhLENBQUNqWixRQUFRLENBQUNxWSxNQUFNLENBQUM1aUIsR0FBRyxDQUFFO01BQUNvVSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQTtRQUFBLE9BQVFxUCxRQUFRLENBQUNiLE1BQU0sQ0FBQzVpQixHQUFHLENBQUM7TUFBQTtJQUFDLENBQUUsQ0FBQyxFQUM1RzRpQixNQUFNLENBQUN0akIsS0FDSCxDQUFDO0VBQUEsQ0FDVCxDQUNFLENBRUosQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNc2tCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUFDLE1BQUEsRUFBa0Y7RUFBQSxJQUE1RXZrQixLQUFLLEdBQUF1a0IsTUFBQSxDQUFMdmtCLEtBQUs7SUFBQXdrQixjQUFBLEdBQUFELE1BQUEsQ0FBRTVZLE9BQU87SUFBUEEsT0FBTyxHQUFBNlksY0FBQSxjQUFHLEVBQUUsR0FBQUEsY0FBQTtJQUFBQyxZQUFBLEdBQUFGLE1BQUEsQ0FBRXZvQixLQUFLO0lBQUxBLEtBQUssR0FBQXlvQixZQUFBLGNBQUcsRUFBRSxHQUFBQSxZQUFBO0lBQUUzUCxRQUFRLEdBQUF5UCxNQUFBLENBQVJ6UCxRQUFRO0lBQUE0UCxrQkFBQSxHQUFBSCxNQUFBLENBQUVoRyxXQUFXO0lBQVhBLFdBQVcsR0FBQW1HLGtCQUFBLGNBQUcsWUFBWSxHQUFBQSxrQkFBQTtFQUNwRyxJQUFBQyxXQUFBLEdBQTBCaG1CLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWltQixXQUFBLEdBQUFubkIsY0FBQSxDQUFBa25CLFdBQUE7SUFBL0JFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxRQUFRLEdBQUFGLFdBQUE7RUFDdEIsSUFBTUcsUUFBUSxHQUFHam1CLE9BQU8sQ0FBQztJQUFBLE9BQU9YLEtBQUssQ0FBQ0ssT0FBTyxDQUFDeEMsS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBR3FWLGVBQWUsQ0FBQ3JWLEtBQUssQ0FBQztFQUFBLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsQ0FBQztFQUNoRyxJQUFNZ3BCLGVBQWUsR0FBR0gsS0FBSyxDQUFDcmQsSUFBSSxDQUFDLENBQUMsQ0FBQ3FDLFdBQVcsQ0FBQyxDQUFDO0VBQ2xELElBQU1vYixRQUFRLEdBQUdubUIsT0FBTyxDQUFDLFlBQU07SUFDN0IsSUFBSSxDQUFDa21CLGVBQWUsRUFBRSxPQUFPclosT0FBTztJQUNwQyxPQUFPQSxPQUFPLENBQUNoSSxNQUFNLENBQUMsVUFBQzJHLE1BQU07TUFBQSxPQUFLQSxNQUFNLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUNvQixRQUFRLENBQUMrWixlQUFlLENBQUM7SUFBQSxFQUFDO0VBQ25GLENBQUMsRUFBRSxDQUFDclosT0FBTyxFQUFFcVosZUFBZSxDQUFDLENBQUM7RUFFOUIsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUk1YSxNQUFNLEVBQUs7SUFDekIsSUFBSSxDQUFDd0ssUUFBUSxFQUFFO0lBQ2YsSUFBTXFRLE1BQU0sR0FBR0osUUFBUSxDQUFDOVosUUFBUSxDQUFDWCxNQUFNLENBQUM7SUFDeEMsSUFBTWhNLElBQUksR0FBRzZtQixNQUFNLEdBQUdKLFFBQVEsQ0FBQ3BoQixNQUFNLENBQUMsVUFBQzJOLElBQUk7TUFBQSxPQUFLQSxJQUFJLEtBQUtoSCxNQUFNO0lBQUEsRUFBQyxNQUFBNUssTUFBQSxDQUFBd1ksa0JBQUEsQ0FBTzZNLFFBQVEsSUFBRXphLE1BQU0sRUFBQztJQUN4RndLLFFBQVEsQ0FBQ3hXLElBQUksQ0FBQztFQUNoQixDQUFDO0VBRUQsb0JBQ0VJLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsR0FDdkIzUixLQUFLLGlCQUNKdEIsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBMkMsZ0JBQ3hEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBZ0IsR0FBRTNSLEtBQWEsQ0FBQyxlQUNqRHRCLEtBQUEsQ0FBQWdULGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQXdCLEdBQUVvVCxRQUFRLENBQUNwcEIsTUFBTSxNQUFBK0QsTUFBQSxDQUFNcWxCLFFBQVEsQ0FBQ3BwQixNQUFNLG1EQUFhLFlBQW1CLENBQzNHLENBQ04sRUFDQW9wQixRQUFRLENBQUNwcEIsTUFBTSxHQUFHLENBQUMsaUJBQ2xCK0MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBc0IsR0FDbENvVCxRQUFRLENBQUM5ZCxHQUFHLENBQUMsVUFBQ3lTLE9BQU87SUFBQSxvQkFDcEJoYixLQUFBLENBQUFnVCxhQUFBO01BQ0V4USxJQUFJLEVBQUMsUUFBUTtNQUNiUixHQUFHLEVBQUVnWixPQUFRO01BQ2IvSCxTQUFTLEVBQUMseUZBQXlGO01BQ25HbUMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRb1IsTUFBTSxDQUFDeEwsT0FBTyxDQUFDO01BQUE7SUFBQyxHQUU5QkEsT0FBTyxlQUNSaGIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBZ0IsR0FBQyxNQUFPLENBQ2xDLENBQUM7RUFBQSxDQUNWLENBQ0UsQ0FDTixlQUNEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBcUQsZ0JBQ2xFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBNkQsZ0JBQzFFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLaUIsS0FBSyxFQUFDLDRCQUE0QjtJQUFDaEIsU0FBUyxFQUFDLHdCQUF3QjtJQUFDa0IsSUFBSSxFQUFDLE1BQU07SUFBQ0QsT0FBTyxFQUFDLFdBQVc7SUFBQ0UsTUFBTSxFQUFDO0VBQWMsZ0JBQzlIcFUsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNc0IsYUFBYSxFQUFDLE9BQU87SUFBQ0MsY0FBYyxFQUFDLE9BQU87SUFBQ0YsV0FBVyxFQUFFLEdBQUk7SUFBQ3RYLENBQUMsRUFBQztFQUFnRCxDQUFFLENBQ3RILENBQUMsZUFDTmlELEtBQUEsQ0FBQWdULGFBQUE7SUFDRTFWLEtBQUssRUFBRTZvQixLQUFNO0lBQ2IvUCxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLK2UsUUFBUSxDQUFDL2UsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ2xEdWlCLFdBQVcsRUFBQyxxRUFBYztJQUMxQjVNLFNBQVMsRUFBQztFQUFtRixDQUM5RixDQUFDLEVBQ0RrVCxLQUFLLGlCQUNKbm1CLEtBQUEsQ0FBQWdULGFBQUE7SUFBUXhRLElBQUksRUFBQyxRQUFRO0lBQUM0UyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVFnUixRQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUFDblQsU0FBUyxFQUFDO0VBQXlDLEdBQUMsa0RBRS9GLENBRVAsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBOEIsR0FDMUNzVCxRQUFRLENBQUN0cEIsTUFBTSxLQUFLLENBQUMsZ0JBQ3BCK0MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBa0MsR0FBRTRNLFdBQWUsQ0FBQyxnQkFFakU3ZixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEyQixHQUN2Q3NULFFBQVEsQ0FBQ2hlLEdBQUcsQ0FBQyxVQUFDcUQsTUFBTSxFQUFLO0lBQ3hCLElBQU1qSSxRQUFRLEdBQUcwaUIsUUFBUSxDQUFDOVosUUFBUSxDQUFDWCxNQUFNLENBQUM7SUFDMUMsb0JBQ0U1TCxLQUFBLENBQUFnVCxhQUFBO01BQ0V4USxJQUFJLEVBQUMsUUFBUTtNQUNiUixHQUFHLEVBQUU0SixNQUFPO01BQ1p3SixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFvUixNQUFNLENBQUM1YSxNQUFNLENBQUM7TUFBQSxDQUFDO01BQzlCcUgsU0FBUyxFQUFFcE8sVUFBVSxDQUNuQixpRkFBaUYsRUFDakZsQixRQUFRLEdBQUcsK0NBQStDLEdBQUcsNEVBQy9EO0lBQUUsZ0JBRUYzRCxLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUFVLEdBQUVySCxNQUFhLENBQUMsRUFDekNqSSxRQUFRLGlCQUFJM0QsS0FBQSxDQUFBZ1QsYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBeUIsR0FBQyxRQUFPLENBQ3hELENBQUM7RUFFYixDQUFDLENBQ0UsQ0FFSixDQUNGLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNeVQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQUMsTUFBQSxFQU9qQjtFQUFBLElBQUFDLFlBQUEsR0FBQUQsTUFBQSxDQU5KcmxCLEtBQUs7SUFBTEEsS0FBSyxHQUFBc2xCLFlBQUEsY0FBRyxRQUFRLEdBQUFBLFlBQUE7SUFBQUMsWUFBQSxHQUFBRixNQUFBLENBQ2hCcnBCLEtBQUs7SUFBTEEsS0FBSyxHQUFBdXBCLFlBQUEsY0FBRyxFQUFFLEdBQUFBLFlBQUE7SUFDVnpRLFVBQVEsR0FBQXVRLE1BQUEsQ0FBUnZRLFFBQVE7SUFBQTBRLGNBQUEsR0FBQUgsTUFBQSxDQUNSSSxPQUFPO0lBQVBBLE9BQU8sR0FBQUQsY0FBQSxjQUFHLEVBQUUsR0FBQUEsY0FBQTtJQUNaRSxjQUFjLEdBQUFMLE1BQUEsQ0FBZEssY0FBYztJQUFBQyxrQkFBQSxHQUFBTixNQUFBLENBQ2Q5RyxXQUFXO0lBQVhBLFdBQVcsR0FBQW9ILGtCQUFBLGNBQUcsaUNBQWlDLEdBQUFBLGtCQUFBO0VBRS9DLElBQUFDLFdBQUEsR0FBMEJqbkIsUUFBUSxDQUFDM0MsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUFBNnBCLFdBQUEsR0FBQXBvQixjQUFBLENBQUFtb0IsV0FBQTtJQUF4Q2YsS0FBSyxHQUFBZ0IsV0FBQTtJQUFFZixRQUFRLEdBQUFlLFdBQUE7RUFDdEIsSUFBQUMsV0FBQSxHQUF3Qm5uQixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFvbkIsV0FBQSxHQUFBdG9CLGNBQUEsQ0FBQXFvQixXQUFBO0lBQWhDcGpCLElBQUksR0FBQXFqQixXQUFBO0lBQUVwRixPQUFPLEdBQUFvRixXQUFBO0VBQ3BCLElBQU1DLFlBQVksR0FBR2puQixNQUFNLENBQUMsSUFBSSxDQUFDO0VBRWpDSCxTQUFTLENBQUMsWUFBTTtJQUNka21CLFFBQVEsQ0FBQzlvQixLQUFLLElBQUksRUFBRSxDQUFDO0VBQ3ZCLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsQ0FBQztFQUVYLElBQU1pcUIsT0FBTyxHQUFHbm5CLE9BQU8sQ0FBQyxZQUFNO0lBQzVCLElBQUksQ0FBQzJtQixPQUFPLENBQUM5cEIsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUM5QixJQUFNNEwsVUFBVSxHQUFHSCxhQUFhLENBQUN5ZCxLQUFLLENBQUMsQ0FBQ2hiLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELElBQU1xYyxTQUFTLEdBQUczZSxVQUFVLEdBQ3hCa2UsT0FBTyxDQUFDOWhCLE1BQU0sQ0FDWixVQUFDd2lCLE1BQU07TUFBQSxPQUNML2UsYUFBYSxDQUFDK2UsTUFBTSxDQUFDam9CLElBQUksQ0FBQyxDQUFDMkwsV0FBVyxDQUFDLENBQUMsQ0FBQ29CLFFBQVEsQ0FBQzFELFVBQVUsQ0FBQyxJQUM3REgsYUFBYSxDQUFDK2UsTUFBTSxDQUFDaGtCLEtBQUssQ0FBQyxDQUFDMEgsV0FBVyxDQUFDLENBQUMsQ0FBQ29CLFFBQVEsQ0FBQzFELFVBQVUsQ0FBQztJQUFBLENBQ2xFLENBQUMsR0FDRGtlLE9BQU87SUFDWCxPQUFPUyxTQUFTLENBQUNsb0IsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUIsQ0FBQyxFQUFFLENBQUN5bkIsT0FBTyxFQUFFWixLQUFLLENBQUMsQ0FBQztFQUVwQmxmLGVBQWUsQ0FBQ3FnQixZQUFZLEVBQUV0akIsSUFBSSxHQUFHO0lBQUEsT0FBTWllLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFBQSxJQUFHLElBQUksQ0FBQztFQUVqRSxJQUFNcEwsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUk0USxNQUFNLEVBQUs7SUFDL0IsSUFBTXJoQixTQUFTLEdBQUcsQ0FBQXFoQixNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRWpvQixJQUFJLEtBQUksRUFBRTtJQUNwQzRtQixRQUFRLENBQUNoZ0IsU0FBUyxDQUFDO0lBQ25CZ1EsVUFBUSxhQUFSQSxVQUFRLGVBQVJBLFVBQVEsQ0FBR2hRLFNBQVMsQ0FBQztJQUNyQjRnQixjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFHUyxNQUFNLENBQUM7SUFDeEJ4RixPQUFPLENBQUMsS0FBSyxDQUFDO0VBQ2hCLENBQUM7RUFFRCxvQkFDRWppQixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQyxvQkFBb0I7SUFBQy9MLEdBQUcsRUFBRW9nQjtFQUFhLEdBQ25EaG1CLEtBQUssaUJBQUl0QixLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF3QixHQUFFM1IsS0FBYSxDQUFDLGVBQ25FdEIsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFMVYsS0FBSyxFQUFFNm9CLEtBQU07SUFDYi9QLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSyxFQUFLO01BQ25CK2UsUUFBUSxDQUFDL2UsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7TUFDNUI4WSxVQUFRLGFBQVJBLFVBQVEsZUFBUkEsVUFBUSxDQUFHL08sS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7TUFDOUIya0IsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNmLENBQUU7SUFDRnlGLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUXpGLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFBQSxDQUFDO0lBQzdCcEMsV0FBVyxFQUFFQSxXQUFZO0lBQ3pCNU0sU0FBUyxFQUFDO0VBQTZFLENBQ3hGLENBQUMsRUFDRGpQLElBQUksSUFBSXVqQixPQUFPLENBQUN0cUIsTUFBTSxHQUFHLENBQUMsaUJBQ3pCK0MsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBeUYsR0FDckdzVSxPQUFPLENBQUNoZixHQUFHLENBQUMsVUFBQ2tmLE1BQU07SUFBQSxvQkFDbEJ6bkIsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFeFEsSUFBSSxFQUFDLFFBQVE7TUFDYlIsR0FBRyxFQUFFeWxCLE1BQU0sQ0FBQ3BtQixFQUFHO01BQ2Y0UixTQUFTLEVBQUMsMklBQTJJO01BQ3JKMFUsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUd0Z0IsS0FBSztRQUFBLE9BQUtBLEtBQUssQ0FBQ3VnQixjQUFjLENBQUMsQ0FBQztNQUFBLENBQUM7TUFDL0N4UyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF5QixZQUFZLENBQUM0USxNQUFNLENBQUM7TUFBQTtJQUFDLGdCQUVwQ3puQixLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUFlLEdBQUV3VSxNQUFNLENBQUNqb0IsSUFBSSxJQUFJLFdBQWtCLENBQUMsZUFDbkVRLEtBQUEsQ0FBQWdULGFBQUE7TUFBTUMsU0FBUyxFQUFDO0lBQXdCLEdBQUV3VSxNQUFNLENBQUNoa0IsS0FBSyxJQUFJLG1CQUEwQixDQUM5RSxDQUFDO0VBQUEsQ0FDVixDQUNFLENBRUosQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNb2tCLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxNQUFBLEVBQWtFO0VBQUEsSUFBQUMsZUFBQSxHQUFBRCxNQUFBLENBQTVEM1gsUUFBUTtJQUFSQSxRQUFRLEdBQUE0WCxlQUFBLGNBQUcsRUFBRSxHQUFBQSxlQUFBO0lBQUFDLHFCQUFBLEdBQUFGLE1BQUEsQ0FBRUcsY0FBYztJQUFkQSxjQUFjLEdBQUFELHFCQUFBLGNBQUcsRUFBRSxHQUFBQSxxQkFBQTtJQUFFdkMsUUFBUSxHQUFBcUMsTUFBQSxDQUFSckMsUUFBUTtJQUFFeUMsT0FBTyxHQUFBSixNQUFBLENBQVBJLE9BQU87RUFDekUsSUFBQUMsV0FBQSxHQUF3QmxvQixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFtb0IsV0FBQSxHQUFBcnBCLGNBQUEsQ0FBQW9wQixXQUFBO0lBQWhDbmtCLElBQUksR0FBQW9rQixXQUFBO0lBQUVuRyxPQUFPLEdBQUFtRyxXQUFBO0VBQ3BCLElBQU1saEIsR0FBRyxHQUFHN0csTUFBTSxDQUFDLElBQUksQ0FBQztFQUN4QjRHLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFbEQsSUFBSSxHQUFHO0lBQUEsT0FBTWllLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFBQSxJQUFHLElBQUksQ0FBQztFQUV4RCxvQkFDRWppQixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFVLGdCQUN2QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBUW9DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUTZNLE9BQU8sQ0FBQyxVQUFDOWIsSUFBSTtRQUFBLE9BQUssQ0FBQ0EsSUFBSTtNQUFBLEVBQUM7SUFBQSxDQUFDO0lBQUM4TSxTQUFTLEVBQUM7RUFBaUUsR0FBQyw0Q0FFckgsQ0FBQyxFQUNSalAsSUFBSSxpQkFDSGhFLEtBQUEsQ0FBQWdULGFBQUE7SUFBSzlMLEdBQUcsRUFBRUEsR0FBSTtJQUFDK0wsU0FBUyxFQUFDO0VBQTJHLEdBQ2pJOUMsUUFBUSxDQUFDbFQsTUFBTSxLQUFLLENBQUMsaUJBQUkrQyxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFDLHFFQUFlLENBQUMsRUFDL0U5QyxRQUFRLENBQUM1SCxHQUFHLENBQUMsVUFBQ21ILE1BQU07SUFBQSxvQkFDbkIxUCxLQUFBLENBQUFnVCxhQUFBO01BQU9oUixHQUFHLEVBQUUwTixNQUFPO01BQUN1RCxTQUFTLEVBQUM7SUFBZ0QsZ0JBQzVFalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFPeFEsSUFBSSxFQUFDLFVBQVU7TUFBQ3VkLE9BQU8sRUFBRSxDQUFDa0ksY0FBYyxDQUFDMWIsUUFBUSxDQUFDbUQsTUFBTSxDQUFFO01BQUMwRyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQTtRQUFBLE9BQVFxUCxRQUFRLENBQUMvVixNQUFNLENBQUM7TUFBQTtJQUFDLENBQUUsQ0FBQyxFQUNyR0EsTUFDSSxDQUFDO0VBQUEsQ0FDVCxDQUFDLGVBQ0YxUCxLQUFBLENBQUFnVCxhQUFBO0lBQVFvQyxPQUFPLEVBQUU4UyxPQUFRO0lBQUNqVixTQUFTLEVBQUM7RUFBK0MsR0FBQyxxRUFFNUUsQ0FDTCxDQUVKLENBQUM7QUFFVixDQUFDO0FBRUQsSUFBTW9WLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxNQUFBO0VBQUEsSUFDaEJ4RCxPQUFPLEdBQUF3RCxNQUFBLENBQVB4RCxPQUFPO0lBQ1B5RCxVQUFVLEdBQUFELE1BQUEsQ0FBVkMsVUFBVTtJQUNWQyxhQUFhLEdBQUFGLE1BQUEsQ0FBYkUsYUFBYTtJQUNiM21CLG9CQUFvQixHQUFBeW1CLE1BQUEsQ0FBcEJ6bUIsb0JBQW9CO0lBQ3BCNG1CLGNBQWMsR0FBQUgsTUFBQSxDQUFkRyxjQUFjO0lBQ2RDLGlCQUFpQixHQUFBSixNQUFBLENBQWpCSSxpQkFBaUI7SUFDakIzSyxPQUFPLEdBQUF1SyxNQUFBLENBQVB2SyxPQUFPO0lBQ1BqYyxvQkFBb0IsR0FBQXdtQixNQUFBLENBQXBCeG1CLG9CQUFvQjtJQUNwQnFPLFFBQVEsR0FBQW1ZLE1BQUEsQ0FBUm5ZLFFBQVE7SUFDUjhYLGNBQWMsR0FBQUssTUFBQSxDQUFkTCxjQUFjO0lBQ2RVLFlBQVksR0FBQUwsTUFBQSxDQUFaSyxZQUFZO0lBQ1pDLGFBQWEsR0FBQU4sTUFBQSxDQUFiTSxhQUFhO0lBQ2J0RCxPQUFPLEdBQUFnRCxNQUFBLENBQVBoRCxPQUFPO0lBQ1BFLGFBQWEsR0FBQThDLE1BQUEsQ0FBYjlDLGFBQWE7SUFDYnFELFlBQVksR0FBQVAsTUFBQSxDQUFaTyxZQUFZO0lBQ1pqbkIsU0FBUyxHQUFBMG1CLE1BQUEsQ0FBVDFtQixTQUFTO0lBQ1RrbkIsWUFBWSxHQUFBUixNQUFBLENBQVpRLFlBQVk7SUFDWkMsU0FBUyxHQUFBVCxNQUFBLENBQVRTLFNBQVM7SUFDVEMsb0JBQW9CLEdBQUFWLE1BQUEsQ0FBcEJVLG9CQUFvQjtJQUNwQkMsdUJBQXVCLEdBQUFYLE1BQUEsQ0FBdkJXLHVCQUF1QjtJQUFBQyxxQkFBQSxHQUFBWixNQUFBLENBQ3ZCYSxnQkFBZ0I7SUFBaEJBLGdCQUFnQixHQUFBRCxxQkFBQSxjQUFHLEtBQUssR0FBQUEscUJBQUE7SUFBQUUsa0JBQUEsR0FBQWQsTUFBQSxDQUN4QmUsV0FBVztJQUFYQSxXQUFXLEdBQUFELGtCQUFBLGNBQUcsS0FBSyxHQUFBQSxrQkFBQTtJQUNuQkUsY0FBYyxHQUFBaEIsTUFBQSxDQUFkZ0IsY0FBYztJQUFBQyxvQkFBQSxHQUFBakIsTUFBQSxDQUNka0IsYUFBYTtJQUFiQSxhQUFhLEdBQUFELG9CQUFBLGNBQUcsSUFBSSxHQUFBQSxvQkFBQTtFQUFBLG9CQUVwQnZwQixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFvRSxnQkFDakZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUE2QixnQkFDMUNqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF5QixnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUE2RSxnQkFDM0ZqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtpQixLQUFLLEVBQUMsNEJBQTRCO0lBQUNoQixTQUFTLEVBQUMsU0FBUztJQUFDaUIsT0FBTyxFQUFDLFdBQVc7SUFBQ0MsSUFBSSxFQUFDO0VBQWMsZ0JBQ2pHblUsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFeVcsUUFBUSxFQUFDLFNBQVM7SUFDbEIxc0IsQ0FBQyxFQUFDLGlJQUFpSTtJQUNuSTJzQixRQUFRLEVBQUM7RUFBUyxDQUNuQixDQUNFLENBQ0QsQ0FBQyxlQUNQMXBCLEtBQUEsQ0FBQWdULGFBQUE7SUFDRTFWLEtBQUssRUFBRWlyQixVQUFXO0lBQ2xCblMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBS21oQixhQUFhLENBQUNuaEIsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3ZEdWlCLFdBQVcsRUFBQyxtQ0FBVTtJQUN0QixjQUFXLHdGQUFrQjtJQUM3QjVNLFNBQVMsRUFBQztFQUE4TCxDQUN6TSxDQUNJLENBQUMsRUFDUHBSLG9CQUFvQixpQkFDbkI3QixLQUFBLENBQUFnVCxhQUFBO0lBQVExVixLQUFLLEVBQUVtckIsY0FBZTtJQUFDclMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBS3FoQixpQkFBaUIsQ0FBQ3JoQixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQzJWLFNBQVMsRUFBQztFQUFzRSxnQkFDektqVCxLQUFBLENBQUFnVCxhQUFBO0lBQVExVixLQUFLLEVBQUM7RUFBSyxHQUFDLCtEQUFtQixDQUFDLEVBQ3ZDeWdCLE9BQU8sQ0FBQ3hWLEdBQUcsQ0FBQyxVQUFDOEMsTUFBTTtJQUFBLG9CQUNsQnJMLEtBQUEsQ0FBQWdULGFBQUE7TUFBUWhSLEdBQUcsRUFBRXFKLE1BQU87TUFBQy9OLEtBQUssRUFBRStOO0lBQU8sR0FDaENBLE1BQ0ssQ0FBQztFQUFBLENBQ1YsQ0FDSyxDQUNULEVBQ0F2SixvQkFBb0IsaUJBQ25COUIsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDNlUsVUFBVTtJQUFDMVgsUUFBUSxFQUFFQSxRQUFTO0lBQUM4WCxjQUFjLEVBQUVBLGNBQWU7SUFBQ3hDLFFBQVEsRUFBRWtELFlBQWE7SUFBQ1QsT0FBTyxFQUFFVTtFQUFjLENBQUUsQ0FDbEgsRUFDQTlELE9BQU8sS0FBSyxjQUFjLElBQUksT0FBT21FLHVCQUF1QixLQUFLLFVBQVUsaUJBQzFFanBCLEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQXlGLGdCQUN4R2pULEtBQUEsQ0FBQWdULGFBQUE7SUFDRXhRLElBQUksRUFBQyxVQUFVO0lBQ2Z5USxTQUFTLEVBQUMsbUJBQW1CO0lBQzdCOE0sT0FBTyxFQUFFLENBQUMsQ0FBQ2lKLG9CQUFxQjtJQUNoQzVTLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUs0aEIsdUJBQXVCLENBQUM1aEIsS0FBSyxDQUFDRyxNQUFNLENBQUN1WSxPQUFPLENBQUM7SUFBQTtFQUFDLENBQ3BFLENBQUMsMkdBRUcsQ0FDUixFQUNBb0osZ0JBQWdCLElBQUksT0FBT0csY0FBYyxLQUFLLFVBQVUsaUJBQ3ZEdHBCLEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQXlGLGdCQUN4R2pULEtBQUEsQ0FBQWdULGFBQUE7SUFDRXhRLElBQUksRUFBQyxVQUFVO0lBQ2Z5USxTQUFTLEVBQUMsbUJBQW1CO0lBQzdCOE0sT0FBTyxFQUFFLENBQUMsQ0FBQ3NKLFdBQVk7SUFDdkJqVCxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLaWlCLGNBQWMsQ0FBQ2ppQixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VZLE9BQU8sQ0FBQztJQUFBO0VBQUMsQ0FDM0QsQ0FBQyxrSEFFRyxDQUNSLGVBQ0QvZixLQUFBLENBQUFnVCxhQUFBLENBQUNvUyxVQUFVO0lBQUNFLE9BQU8sRUFBRUEsT0FBUTtJQUFDRSxhQUFhLEVBQUVBLGFBQWM7SUFBQ0MsUUFBUSxFQUFFb0Q7RUFBYSxDQUFFLENBQ2xGLENBQUMsZUFDTjdvQixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFtQyxHQUMvQ3VXLGFBQWEsaUJBQUl4cEIsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDUSxTQUFTO0lBQUNFLFNBQVMsRUFBRThWO0VBQWMsQ0FBRSxDQUFDLGVBQ3pEeHBCLEtBQUEsQ0FBQWdULGFBQUE7SUFBUW9DLE9BQU8sRUFBRTJULFNBQVU7SUFBQzlWLFNBQVMsRUFBQztFQUFvRixHQUFDLGtEQUVuSCxDQUFDLEVBQ1JyUixTQUFTLGlCQUNSNUIsS0FBQSxDQUFBZ1QsYUFBQTtJQUFRb0MsT0FBTyxFQUFFMFQsWUFBYTtJQUFDN1YsU0FBUyxFQUFDO0VBQTZFLEdBQUMsb0RBRS9HLENBRVAsQ0FDRixDQUFDO0FBQUEsQ0FDUDtBQUNELElBQU0wVyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQTZDO0VBQUEsSUFBekNDLE9BQU8sR0FBQWpyQixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsRUFBRTtFQUFBLElBQUVrckIsYUFBYSxHQUFBbHJCLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQTZGLFNBQUEsR0FBQTdGLFNBQUEsTUFBRyxNQUFNO0VBQ2xFLElBQU1tckIsT0FBTyxHQUFHLElBQUlqUixHQUFHLENBQUMsQ0FBQztFQUN6QitRLE9BQU8sQ0FBQzlRLE9BQU8sQ0FBQyxVQUFDdlUsTUFBTSxFQUFLO0lBQzFCLElBQU12QyxHQUFHLEdBQUd1QyxNQUFNLENBQUNtQyxJQUFJLElBQUksVUFBVTtJQUNyQyxJQUFNcVMsTUFBTSxHQUFHK1EsT0FBTyxDQUFDOVEsR0FBRyxDQUFDaFgsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNyQytXLE1BQU0sQ0FBQ2xaLElBQUksQ0FBQzBFLE1BQU0sQ0FBQztJQUNuQnVsQixPQUFPLENBQUM3USxHQUFHLENBQUNqWCxHQUFHLEVBQUUrVyxNQUFNLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0VBQ0YsSUFBTWdSLE9BQU8sR0FBR0YsYUFBYSxLQUFLLEtBQUssR0FBRyxVQUFDL3NCLENBQUMsRUFBRXFiLENBQUM7SUFBQSxPQUFLcmIsQ0FBQyxHQUFHcWIsQ0FBQztFQUFBLElBQUcsVUFBQ3JiLENBQUMsRUFBRXFiLENBQUM7SUFBQSxPQUFLQSxDQUFDLEdBQUdyYixDQUFDO0VBQUE7RUFDM0UsT0FBTzJDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDb3FCLE9BQU8sQ0FBQzVRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDakMzUSxHQUFHLENBQUMsVUFBQXloQixNQUFBLEVBQWtCO0lBQUEsSUFBQUMsc0JBQUE7SUFBQSxJQUFBQyxNQUFBLEdBQUFuckIsY0FBQSxDQUFBaXJCLE1BQUE7TUFBaEJob0IsR0FBRyxHQUFBa29CLE1BQUE7TUFBRTdRLEtBQUssR0FBQTZRLE1BQUE7SUFDZixJQUFNQyxXQUFXLEdBQUczUSxrQkFBQSxDQUFJSCxLQUFLLEVBQUVuQixJQUFJLENBQUMsVUFBQ3BiLENBQUMsRUFBRXFiLENBQUMsRUFBSztNQUFBLElBQUFpUyxzQkFBQSxFQUFBQyxzQkFBQTtNQUM1QyxJQUFNL1IsSUFBSSxHQUFHLEVBQUE4UixzQkFBQSxHQUFBdFksdUJBQXVCLENBQUNoVixDQUFDLENBQUM0SixJQUFJLEVBQUU1SixDQUFDLENBQUMyVixJQUFJLEVBQUUzVixDQUFDLENBQUM0VixhQUFhLENBQUMsY0FBQTBYLHNCQUFBLHVCQUF4REEsc0JBQUEsQ0FBMEQvYyxPQUFPLENBQUMsQ0FBQyxLQUFJN0QsTUFBTSxDQUFDK08sZ0JBQWdCO01BQzNHLElBQU1DLEtBQUssR0FBRyxFQUFBNlIsc0JBQUEsR0FBQXZZLHVCQUF1QixDQUFDcUcsQ0FBQyxDQUFDelIsSUFBSSxFQUFFeVIsQ0FBQyxDQUFDMUYsSUFBSSxFQUFFMEYsQ0FBQyxDQUFDekYsYUFBYSxDQUFDLGNBQUEyWCxzQkFBQSx1QkFBeERBLHNCQUFBLENBQTBEaGQsT0FBTyxDQUFDLENBQUMsS0FBSTdELE1BQU0sQ0FBQytPLGdCQUFnQjtNQUM1RyxPQUFPd1IsT0FBTyxDQUFDelIsSUFBSSxFQUFFRSxLQUFLLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBQ0YsSUFBTThSLFNBQVMsR0FBR0gsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFNN1EsU0FBUyxHQUFHLEVBQUEyUSxzQkFBQSxHQUFBblksdUJBQXVCLENBQUN3WSxTQUFTLENBQUM1akIsSUFBSSxFQUFFNGpCLFNBQVMsQ0FBQzdYLElBQUksRUFBRTZYLFNBQVMsQ0FBQzVYLGFBQWEsQ0FBQyxjQUFBdVgsc0JBQUEsdUJBQWhGQSxzQkFBQSxDQUFrRjVjLE9BQU8sQ0FBQyxDQUFDLE1BQUt3YyxhQUFhLEtBQUssS0FBSyxHQUFHcmdCLE1BQU0sQ0FBQytPLGdCQUFnQixHQUFHL08sTUFBTSxDQUFDK2dCLGdCQUFnQixDQUFDO0lBQzlMLE9BQU87TUFDTHZvQixHQUFHLEVBQUVBLEdBQUcsZUFBQWhCLE1BQUEsQ0FBZSxDQUFBc3BCLFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFanBCLEVBQUUsS0FBSXFNLElBQUksQ0FBQzhjLE1BQU0sQ0FBQyxDQUFDLENBQUU7TUFDdkRscEIsS0FBSyxFQUFFMEwsaUJBQWlCLENBQUNoTCxHQUFHLENBQUM7TUFDN0I4ZCxJQUFJLEVBQUVxSyxXQUFXO01BQ2pCN1EsU0FBUyxFQUFUQTtJQUNGLENBQUM7RUFDSCxDQUFDLENBQUMsQ0FDRHBCLElBQUksQ0FBQyxVQUFDcGIsQ0FBQyxFQUFFcWIsQ0FBQztJQUFBLE9BQUs0UixPQUFPLENBQUNqdEIsQ0FBQyxDQUFDd2MsU0FBUyxFQUFFbkIsQ0FBQyxDQUFDbUIsU0FBUyxDQUFDO0VBQUEsRUFBQztBQUN0RCxDQUFDO0FBQ0QsSUFBTW1SLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEdBQUcsRUFBRTlGLE1BQU0sRUFBRUUsT0FBTyxFQUFLO0VBQ2pELElBQUksQ0FBQ0YsTUFBTSxFQUFFLE9BQU9sYyxhQUFhLENBQUNnaUIsR0FBRyxDQUFDOUYsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUU1aUIsR0FBRyxDQUFDLENBQUMsQ0FBQ21KLFdBQVcsQ0FBQyxDQUFDO0VBQ2pFLElBQUkyWixPQUFPLEtBQUssY0FBYyxJQUFJRixNQUFNLENBQUM1aUIsR0FBRyxLQUFLLE1BQU0sRUFBRTtJQUFBLElBQUEyb0Isc0JBQUE7SUFDdkQsT0FBTyxFQUFBQSxzQkFBQSxHQUFBN1ksdUJBQXVCLENBQUM0WSxHQUFHLENBQUNoa0IsSUFBSSxFQUFFZ2tCLEdBQUcsQ0FBQ2pZLElBQUksRUFBRWlZLEdBQUcsQ0FBQ2hZLGFBQWEsQ0FBQyxjQUFBaVksc0JBQUEsdUJBQTlEQSxzQkFBQSxDQUFnRXRkLE9BQU8sQ0FBQyxDQUFDLEtBQUksQ0FBQztFQUN2RjtFQUNBLElBQUl1WCxNQUFNLENBQUNwaUIsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUMxQixJQUFNb29CLEVBQUUsR0FBRyxJQUFJbGtCLElBQUksQ0FBQ2drQixHQUFHLENBQUM5RixNQUFNLENBQUM1aUIsR0FBRyxDQUFDLENBQUMsQ0FBQ3FMLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLE9BQU83RCxNQUFNLENBQUM0RCxLQUFLLENBQUN3ZCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUdBLEVBQUU7RUFDbEM7RUFDQSxJQUFJLE9BQU9GLEdBQUcsQ0FBQzlGLE1BQU0sQ0FBQzVpQixHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7SUFDdkMsT0FBTzBvQixHQUFHLENBQUM5RixNQUFNLENBQUM1aUIsR0FBRyxDQUFDO0VBQ3hCO0VBQ0EsSUFBSTRpQixNQUFNLENBQUNwaUIsSUFBSSxLQUFLLFNBQVMsRUFBRTtJQUM3QixPQUFPa29CLEdBQUcsQ0FBQzlGLE1BQU0sQ0FBQzVpQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUNoQztFQUNBLE9BQU8wRyxhQUFhLENBQUNnaUIsR0FBRyxDQUFDOUYsTUFBTSxDQUFDNWlCLEdBQUcsQ0FBQyxDQUFDLENBQUNtSixXQUFXLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0QsSUFBTTBmLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsTUFBQTtFQUFBLElBQU03b0IsU0FBUyxHQUFBNm9CLE1BQUEsQ0FBVDdvQixTQUFTO0VBQUEsb0JBQ2hDakMsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBNkIsZ0JBQzNDalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFa0IsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLElBQUksRUFBQyxNQUFNO0lBQ1hDLE1BQU0sRUFBQyxjQUFjO0lBQ3JCQyxXQUFXLEVBQUMsS0FBSztJQUNqQnBCLFNBQVMsRUFBRXBPLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRTVDLFNBQVMsS0FBSyxLQUFLLElBQUksaUJBQWlCO0VBQUUsZ0JBRTFGakMsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNalcsQ0FBQyxFQUFDLGVBQWU7SUFBQ3VYLGFBQWEsRUFBQyxPQUFPO0lBQUNDLGNBQWMsRUFBQztFQUFPLENBQUUsQ0FDbkUsQ0FBQyxlQUNOdlUsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFa0IsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLElBQUksRUFBQyxNQUFNO0lBQ1hDLE1BQU0sRUFBQyxjQUFjO0lBQ3JCQyxXQUFXLEVBQUMsS0FBSztJQUNqQnBCLFNBQVMsRUFBRXBPLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRTVDLFNBQVMsS0FBSyxNQUFNLElBQUksaUJBQWlCO0VBQUUsZ0JBRW5HakMsS0FBQSxDQUFBZ1QsYUFBQTtJQUFNalcsQ0FBQyxFQUFDLGNBQWM7SUFBQ3VYLGFBQWEsRUFBQyxPQUFPO0lBQUNDLGNBQWMsRUFBQztFQUFPLENBQUUsQ0FDbEUsQ0FDRCxDQUFDO0FBQUEsQ0FDUjtBQUNELElBQU13VyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsTUFBQSxFQVlUO0VBQUEsSUFYSmxHLE9BQU8sR0FBQWtHLE1BQUEsQ0FBUGxHLE9BQU87SUFDUGhGLElBQUksR0FBQWtMLE1BQUEsQ0FBSmxMLElBQUk7SUFDSndGLE9BQU8sR0FBQTBGLE1BQUEsQ0FBUDFGLE9BQU87SUFDUEUsYUFBYSxHQUFBd0YsTUFBQSxDQUFieEYsYUFBYTtJQUNieUYsVUFBVSxHQUFBRCxNQUFBLENBQVZDLFVBQVU7SUFDVkMsTUFBTSxHQUFBRixNQUFBLENBQU5FLE1BQU07SUFDTnJHLFFBQVEsR0FBQW1HLE1BQUEsQ0FBUm5HLFFBQVE7SUFDUjFHLFFBQVEsR0FBQTZNLE1BQUEsQ0FBUjdNLFFBQVE7SUFDUmxSLE9BQU8sR0FBQStkLE1BQUEsQ0FBUC9kLE9BQU87SUFDUHVLLGFBQWEsR0FBQXdULE1BQUEsQ0FBYnhULGFBQWE7SUFBQTJULGtCQUFBLEdBQUFILE1BQUEsQ0FDYjNCLFdBQVc7SUFBWEEsV0FBVyxHQUFBOEIsa0JBQUEsY0FBRyxJQUFJLEdBQUFBLGtCQUFBO0VBRWxCLElBQUksQ0FBQ3JMLElBQUksQ0FBQzdpQixNQUFNLEVBQUU7SUFDaEIsb0JBQU8rQyxLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUFnQixHQUFDLGdFQUFlLENBQUM7RUFDdkQ7RUFFQSxJQUFNbVksY0FBYyxHQUFHOUYsT0FBTyxDQUFDcmdCLE1BQU0sQ0FBQyxVQUFDMmYsTUFBTTtJQUFBLE9BQUssQ0FBQ1ksYUFBYSxDQUFDalosUUFBUSxDQUFDcVksTUFBTSxDQUFDNWlCLEdBQUcsQ0FBQztFQUFBLEVBQUM7RUFDdEYsSUFBTXFwQixtQkFBbUIsR0FBR3ZHLE9BQU8sS0FBSyxjQUFjO0VBQ3RELElBQU13RyxvQkFBb0IsR0FBR0QsbUJBQW1CLElBQUloQyxXQUFXLEtBQUssQ0FBQzRCLFVBQVUsSUFBSUEsVUFBVSxDQUFDanBCLEdBQUcsS0FBSyxNQUFNLENBQUM7RUFDN0csSUFBTXVwQixXQUFXLEdBQUdGLG1CQUFtQixHQUNuQ0Msb0JBQW9CLEdBQ2xCM0Isc0JBQXNCLENBQUM3SixJQUFJLEVBQUUsQ0FBQW1MLFVBQVUsYUFBVkEsVUFBVSx1QkFBVkEsVUFBVSxDQUFFaHBCLFNBQVMsS0FBSSxNQUFNLENBQUMsR0FDN0QsQ0FBQztJQUFFRCxHQUFHLEVBQUUsU0FBUztJQUFFVixLQUFLLEVBQUUsSUFBSTtJQUFFd2UsSUFBSSxFQUFKQTtFQUFLLENBQUMsQ0FBQyxHQUN6QyxDQUFDO0lBQUU5ZCxHQUFHLEVBQUUsU0FBUztJQUFFVixLQUFLLEVBQUUsSUFBSTtJQUFFd2UsSUFBSSxFQUFKQTtFQUFLLENBQUMsQ0FBQztFQUUzQyxJQUFJdUwsbUJBQW1CLEVBQUU7SUFDdkIsb0JBQ0VyckIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBVyxHQUN2QnNZLFdBQVcsQ0FBQ2hqQixHQUFHLENBQUMsVUFBQ3lSLEtBQUs7TUFBQSxvQkFDckJoYSxLQUFBLENBQUFnVCxhQUFBO1FBQUtoUixHQUFHLEVBQUVnWSxLQUFLLENBQUNoWSxHQUFJO1FBQUNpUixTQUFTLEVBQUM7TUFBVyxHQUN2QytHLEtBQUssQ0FBQzFZLEtBQUssaUJBQ1Z0QixLQUFBLENBQUFnVCxhQUFBO1FBQUtDLFNBQVMsRUFBQztNQUE2RixnQkFDMUdqVCxLQUFBLENBQUFnVCxhQUFBO1FBQU1DLFNBQVMsRUFBQztNQUEwQixDQUFFLENBQUMsRUFDNUMrRyxLQUFLLENBQUMxWSxLQUFLLGVBQ1p0QixLQUFBLENBQUFnVCxhQUFBO1FBQU1DLFNBQVMsRUFBQztNQUEwQixDQUFFLENBQ3pDLENBQ04sZUFDRGpULEtBQUEsQ0FBQWdULGFBQUE7UUFBS0MsU0FBUyxFQUFDO01BQTBDLEdBQ3REK0csS0FBSyxDQUFDOEYsSUFBSSxDQUFDdlgsR0FBRyxDQUFDLFVBQUNoRSxNQUFNLEVBQUs7UUFDMUIsSUFBTUksUUFBUSxHQUFHTCxXQUFXLENBQUNDLE1BQU0sQ0FBQztRQUNwQyxJQUFNZ1csV0FBVyxHQUFHNUssb0JBQW9CLENBQUNwTCxNQUFNLENBQUNnTyxNQUFNLENBQUMsSUFBSSxHQUFHO1FBQzlELG9CQUNFdlMsS0FBQSxDQUFBZ1QsYUFBQTtVQUFTaFIsR0FBRyxFQUFFMkMsUUFBUztVQUFDc08sU0FBUyxFQUFDO1FBQTZGLGdCQUM3SGpULEtBQUEsQ0FBQWdULGFBQUE7VUFBS0MsU0FBUyxFQUFDO1FBQW1ELGdCQUNoRWpULEtBQUEsQ0FBQWdULGFBQUEsMkJBQ0VoVCxLQUFBLENBQUFnVCxhQUFBO1VBQUdDLFNBQVMsRUFBQztRQUF1RCxHQUFDLHNDQUFTLENBQUMsZUFDL0VqVCxLQUFBLENBQUFnVCxhQUFBO1VBQUdDLFNBQVMsRUFBQztRQUFvQyxHQUFFMU8sTUFBTSxDQUFDc1csWUFBWSxJQUFJLFdBQWUsQ0FBQyxlQUMxRjdhLEtBQUEsQ0FBQWdULGFBQUE7VUFBR0MsU0FBUyxFQUFDO1FBQXdCLEdBQUV0RyxjQUFjLENBQUNwSSxNQUFNLENBQUNtQyxJQUFJLEVBQUVuQyxNQUFNLENBQUNrTyxJQUFJLENBQUssQ0FDaEYsQ0FBQyxlQUNOelMsS0FBQSxDQUFBZ1QsYUFBQTtVQUFNQyxTQUFTLEVBQUVwTyxVQUFVLENBQUMsdUJBQXVCLEVBQUU0SyxxQkFBcUIsQ0FBQ2xMLE1BQU0sQ0FBQ2dPLE1BQU0sQ0FBQztRQUFFLEdBQUVnSSxXQUFrQixDQUM1RyxDQUFDLGVBQ052YSxLQUFBLENBQUFnVCxhQUFBO1VBQUtDLFNBQVMsRUFBQztRQUEyQixHQUN2Q21ZLGNBQWMsQ0FBQzdpQixHQUFHLENBQUMsVUFBQ3FjLE1BQU07VUFBQSxvQkFDekI1a0IsS0FBQSxDQUFBZ1QsYUFBQTtZQUFLaFIsR0FBRyxLQUFBaEIsTUFBQSxDQUFLMkQsUUFBUSxPQUFBM0QsTUFBQSxDQUFJNGpCLE1BQU0sQ0FBQzVpQixHQUFHLENBQUc7WUFBQ2lSLFNBQVMsRUFBQztVQUFXLGdCQUMxRGpULEtBQUEsQ0FBQWdULGFBQUE7WUFBR0MsU0FBUyxFQUFDO1VBQXVELEdBQUUyUixNQUFNLENBQUN0akIsS0FBUyxDQUFDLGVBQ3ZGdEIsS0FBQSxDQUFBZ1QsYUFBQTtZQUFLQyxTQUFTLEVBQUM7VUFBZ0UsZ0JBQzdFalQsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDMFIsWUFBWTtZQUFDbmdCLE1BQU0sRUFBRUEsTUFBTztZQUFDcWdCLE1BQU0sRUFBRUEsTUFBTztZQUFDM1gsT0FBTyxFQUFFQSxPQUFRO1lBQUM0WCxRQUFRLEVBQUVBLFFBQVM7WUFBQ3JOLGFBQWEsRUFBRUEsYUFBYztZQUFDc04sT0FBTyxFQUFFQTtVQUFRLENBQUUsQ0FDbEksQ0FDRixDQUFDO1FBQUEsQ0FDUCxDQUNFLENBQUMsRUFDTDNHLFFBQVEsaUJBQ1BuZSxLQUFBLENBQUFnVCxhQUFBO1VBQ0VvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtZQUFBLE9BQVErSSxRQUFRLENBQUM1WixNQUFNLENBQUM7VUFBQSxDQUFDO1VBQ2hDME8sU0FBUyxFQUFDLCtGQUErRjtVQUN6RyxjQUFXO1FBQWdCLEdBQzVCLGlGQUVPLENBRUgsQ0FBQztNQUVkLENBQUMsQ0FDRSxDQUNGLENBQUM7SUFBQSxDQUNQLENBQ0UsQ0FBQztFQUVWO0VBRUEsb0JBQ0VqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQTBDLEdBQ3RENk0sSUFBSSxDQUFDdlgsR0FBRyxDQUFDLFVBQUNoRSxNQUFNLEVBQUUwVyxLQUFLLEVBQUs7SUFBQSxJQUFBdVEsZ0JBQUE7SUFDM0IsSUFBTTdtQixRQUFRLEdBQUdMLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3BDLElBQU1rbkIsT0FBTyxHQUFHOW1CLFFBQVEsT0FBQTNELE1BQUEsQ0FBTzhqQixPQUFPLFlBQUE5akIsTUFBQSxDQUFTaWEsS0FBSyxDQUFFO0lBQ3RELG9CQUNFamIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFTaFIsR0FBRyxFQUFFeXBCLE9BQVE7TUFBQ3hZLFNBQVMsRUFBQztJQUE2RixnQkFDNUhqVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUF3QyxnQkFDckRqVCxLQUFBLENBQUFnVCxhQUFBLDJCQUNFaFQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBdUQsR0FDakU2UixPQUFPLEtBQUssT0FBTyxHQUFHLFFBQVEsR0FBR0EsT0FBTyxLQUFLLFdBQVcsR0FBRyxZQUFZLEdBQUcsUUFDMUUsQ0FBQyxlQUNKOWtCLEtBQUEsQ0FBQWdULGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQW9DLEdBQUUxTyxNQUFNLEVBQUFpbkIsZ0JBQUEsR0FBQ0osY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFBSSxnQkFBQSx1QkFBakJBLGdCQUFBLENBQW1CeHBCLEdBQUcsQ0FBQyxJQUFJLEdBQU8sQ0FDekYsQ0FBQyxFQUNMbWMsUUFBUSxpQkFDUG5lLEtBQUEsQ0FBQWdULGFBQUE7TUFDRW9DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUStJLFFBQVEsQ0FBQzVaLE1BQU0sQ0FBQztNQUFBLENBQUM7TUFDaEMwTyxTQUFTLEVBQUMsK0VBQStFO01BQ3pGLGNBQVc7SUFBZ0IsZ0JBRTNCalQsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDYyxTQUFTO01BQUNiLFNBQVMsRUFBQztJQUFTLENBQUUsQ0FDMUIsQ0FFUCxDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFZLEdBQ3hCbVksY0FBYyxDQUFDN2lCLEdBQUcsQ0FBQyxVQUFDcWMsTUFBTTtNQUFBLG9CQUN6QjVrQixLQUFBLENBQUFnVCxhQUFBO1FBQUtoUixHQUFHLEtBQUFoQixNQUFBLENBQUt5cUIsT0FBTyxPQUFBenFCLE1BQUEsQ0FBSTRqQixNQUFNLENBQUM1aUIsR0FBRyxDQUFHO1FBQUNpUixTQUFTLEVBQUM7TUFBc0UsZ0JBQ3BIalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFHQyxTQUFTLEVBQUM7TUFBdUQsR0FBRTJSLE1BQU0sQ0FBQ3RqQixLQUFTLENBQUMsZUFDdkZ0QixLQUFBLENBQUFnVCxhQUFBLENBQUMwUixZQUFZO1FBQ1huZ0IsTUFBTSxFQUFFQSxNQUFPO1FBQ2ZxZ0IsTUFBTSxFQUFFQSxNQUFPO1FBQ2YzWCxPQUFPLEVBQUVBLE9BQVE7UUFDakI0WCxRQUFRLEVBQUVBLFFBQVM7UUFDbkJyTixhQUFhLEVBQUVBLGFBQWM7UUFDN0JzTixPQUFPLEVBQUVBO01BQVEsQ0FDbEIsQ0FDRSxDQUFDO0lBQUEsQ0FDUCxDQUNFLENBQ0UsQ0FBQztFQUVkLENBQUMsQ0FDRSxDQUFDLGVBRU45a0IsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBd0UsZ0JBQ3JGalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBc0UsZ0JBQ3JGalQsS0FBQSxDQUFBZ1QsYUFBQSw2QkFDRWhULEtBQUEsQ0FBQWdULGFBQUE7SUFBSUMsU0FBUyxFQUFDO0VBQWtFLEdBQzdFbVksY0FBYyxDQUFDN2lCLEdBQUcsQ0FBQyxVQUFDcWMsTUFBTTtJQUFBLG9CQUN6QjVrQixLQUFBLENBQUFnVCxhQUFBO01BQ0VoUixHQUFHLEVBQUU0aUIsTUFBTSxDQUFDNWlCLEdBQUk7TUFDaEJpUixTQUFTLEVBQUVwTyxVQUFVLENBQUMsK0JBQStCLEVBQUUrZixNQUFNLENBQUMvaEIsS0FBSyxLQUFLLFFBQVEsSUFBSSxhQUFhLEVBQUUraEIsTUFBTSxDQUFDbGlCLFFBQVEsQ0FBRTtNQUNwSDBTLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUXdQLE1BQU0sQ0FBQzhHLFFBQVEsS0FBSyxLQUFLLElBQUlSLE1BQU0sQ0FBQ3RHLE1BQU0sQ0FBQzVpQixHQUFHLENBQUM7TUFBQTtJQUFDLGdCQUUvRGhDLEtBQUEsQ0FBQWdULGFBQUE7TUFBS0MsU0FBUyxFQUFFcE8sVUFBVSxDQUFDLHlCQUF5QixFQUFFK2YsTUFBTSxDQUFDL2hCLEtBQUssS0FBSyxRQUFRLElBQUksZ0JBQWdCO0lBQUUsR0FDbEcraEIsTUFBTSxDQUFDdGpCLEtBQUssRUFDWnNqQixNQUFNLENBQUM4RyxRQUFRLEtBQUssS0FBSyxpQkFDeEIxckIsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDNlgsYUFBYTtNQUFDNW9CLFNBQVMsRUFBRSxDQUFBZ3BCLFVBQVUsYUFBVkEsVUFBVSx1QkFBVkEsVUFBVSxDQUFFanBCLEdBQUcsTUFBSzRpQixNQUFNLENBQUM1aUIsR0FBRyxHQUFHaXBCLFVBQVUsQ0FBQ2hwQixTQUFTLEdBQUc7SUFBSyxDQUFFLENBRXhGLENBQ0gsQ0FBQztFQUFBLENBQ04sQ0FBQyxFQUNEa2MsUUFBUSxpQkFBSW5lLEtBQUEsQ0FBQWdULGFBQUE7SUFBSUMsU0FBUyxFQUFDLHdCQUF3QjtJQUFDLGNBQVc7RUFBVSxDQUFFLENBQ3pFLENBQ0MsQ0FBQyxlQUNSalQsS0FBQSxDQUFBZ1QsYUFBQSxnQkFDR3VZLFdBQVcsQ0FBQ2hqQixHQUFHLENBQUMsVUFBQ3lSLEtBQUs7SUFBQSxvQkFDckJoYSxLQUFBLENBQUFnVCxhQUFBLENBQUN6UyxRQUFRO01BQUN5QixHQUFHLEVBQUVnWSxLQUFLLENBQUNoWTtJQUFJLEdBQ3RCZ1ksS0FBSyxDQUFDMVksS0FBSyxpQkFDVnRCLEtBQUEsQ0FBQWdULGFBQUE7TUFBSUMsU0FBUyxFQUFDO0lBQWdCLGdCQUM1QmpULEtBQUEsQ0FBQWdULGFBQUE7TUFBSTJZLE9BQU8sRUFBRVAsY0FBYyxDQUFDbnVCLE1BQU0sSUFBSWtoQixRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRTtNQUFDbEwsU0FBUyxFQUFDO0lBQVcsZ0JBQzVFalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBNkYsZ0JBQzFHalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBMEIsQ0FBRSxDQUFDLEVBQzVDK0csS0FBSyxDQUFDMVksS0FBSyxlQUNadEIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBMEIsQ0FBRSxDQUN6QyxDQUNILENBQ0YsQ0FDTCxFQUNBK0csS0FBSyxDQUFDOEYsSUFBSSxDQUFDdlgsR0FBRyxDQUFDLFVBQUNoRSxNQUFNO01BQUEsb0JBQ3JCdkUsS0FBQSxDQUFBZ1QsYUFBQTtRQUFJaFIsR0FBRyxFQUFFc0MsV0FBVyxDQUFDQyxNQUFNLENBQUU7UUFBQzBPLFNBQVMsRUFBQztNQUEyQixHQUNoRW1ZLGNBQWMsQ0FBQzdpQixHQUFHLENBQUMsVUFBQ3FjLE1BQU07UUFBQSxvQkFDekI1a0IsS0FBQSxDQUFBZ1QsYUFBQTtVQUNFaFIsR0FBRyxFQUFFNGlCLE1BQU0sQ0FBQzVpQixHQUFJO1VBQ2hCaVIsU0FBUyxFQUFFcE8sVUFBVSxDQUNuQiwyREFBMkQsRUFDM0QrZixNQUFNLENBQUMvaEIsS0FBSyxLQUFLLFFBQVEsSUFBSSxhQUFhLEVBQzFDK2hCLE1BQU0sQ0FBQ2hpQixNQUFNLEdBQUcsbUJBQW1CLEdBQUcsK0JBQ3hDO1FBQUUsZ0JBRUY1QyxLQUFBLENBQUFnVCxhQUFBLENBQUMwUixZQUFZO1VBQUNuZ0IsTUFBTSxFQUFFQSxNQUFPO1VBQUNxZ0IsTUFBTSxFQUFFQSxNQUFPO1VBQUMzWCxPQUFPLEVBQUVBLE9BQVE7VUFBQzRYLFFBQVEsRUFBRUEsUUFBUztVQUFDck4sYUFBYSxFQUFFQSxhQUFjO1VBQUNzTixPQUFPLEVBQUVBO1FBQVEsQ0FBRSxDQUNuSSxDQUFDO01BQUEsQ0FDTixDQUFDLEVBQ0QzRyxRQUFRLGlCQUNQbmUsS0FBQSxDQUFBZ1QsYUFBQTtRQUFJQyxTQUFTLEVBQUM7TUFBd0IsZ0JBQ3BDalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUNFb0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7VUFBQSxPQUFRK0ksUUFBUSxDQUFDNVosTUFBTSxDQUFDO1FBQUEsQ0FBQztRQUNoQzBPLFNBQVMsRUFBQyxtSEFBbUg7UUFDN0gsY0FBVztNQUFnQixnQkFFM0JqVCxLQUFBLENBQUFnVCxhQUFBLENBQUNjLFNBQVMsTUFBRSxDQUNOLENBQ04sQ0FFSixDQUFDO0lBQUEsQ0FDTixDQUNPLENBQUM7RUFBQSxDQUNaLENBQ0ksQ0FDRixDQUNKLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFNOFgsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQUMsTUFBQSxFQUEyRztFQUFBLElBQXJHOVcsTUFBTSxHQUFBOFcsTUFBQSxDQUFOOVcsTUFBTTtJQUFFQyxPQUFPLEdBQUE2VyxNQUFBLENBQVA3VyxPQUFPO0lBQUVpSixNQUFNLEdBQUE0TixNQUFBLENBQU41TixNQUFNO0lBQUVxSCxPQUFPLEdBQUF1RyxNQUFBLENBQVB2RyxPQUFPO0lBQUV3RyxTQUFTLEdBQUFELE1BQUEsQ0FBVEMsU0FBUztJQUFFN2UsT0FBTyxHQUFBNGUsTUFBQSxDQUFQNWUsT0FBTztJQUFFNlgsT0FBTyxHQUFBK0csTUFBQSxDQUFQL0csT0FBTztJQUFBaUgsY0FBQSxHQUFBRixNQUFBLENBQUU5RSxPQUFPO0lBQVBBLE9BQU8sR0FBQWdGLGNBQUEsY0FBRyxFQUFFLEdBQUFBLGNBQUE7SUFBQUMsbUJBQUEsR0FBQUgsTUFBQSxDQUFFSSxZQUFZO0lBQVpBLFlBQVksR0FBQUQsbUJBQUEsY0FBRyxFQUFFLEdBQUFBLG1CQUFBO0VBQ3pILElBQU1FLGVBQWUsR0FBRzlyQixPQUFPLENBQUM7SUFBQSxPQUFNa2xCLE9BQU8sQ0FBQ3JnQixNQUFNLENBQUMsVUFBQzJmLE1BQU07TUFBQSxPQUFLQSxNQUFNLENBQUNyaUIsUUFBUSxLQUFLLEtBQUs7SUFBQSxFQUFDO0VBQUEsR0FBRSxDQUFDK2lCLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZHLElBQU04RixjQUFjLEdBQUdockIsT0FBTyxDQUM1QjtJQUFBLE9BQU04ckIsZUFBZSxDQUFDam5CLE1BQU0sQ0FBQyxVQUFDMmYsTUFBTTtNQUFBLE9BQUssQ0FBQ3FILFlBQVksQ0FBQzFmLFFBQVEsQ0FBQ3FZLE1BQU0sQ0FBQzVpQixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQUEsR0FDNUUsQ0FBQ2txQixlQUFlLEVBQUVELFlBQVksQ0FDaEMsQ0FBQztFQUNELElBQU1FLFlBQVksR0FBRy9yQixPQUFPLENBQUMsWUFBTTtJQUNqQyxJQUFNNEgsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNsQmtrQixlQUFlLENBQUNwVCxPQUFPLENBQUMsVUFBQzhMLE1BQU0sRUFBSztNQUNsQzVjLE9BQU8sQ0FBQzRjLE1BQU0sQ0FBQzVpQixHQUFHLENBQUMsR0FBRzRpQixNQUFNLENBQUNwaUIsSUFBSSxLQUFLLGNBQWMsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNoRSxDQUFDLENBQUM7SUFDRixPQUFPd0YsT0FBTztFQUNoQixDQUFDLEVBQUUsQ0FBQ2trQixlQUFlLENBQUMsQ0FBQztFQUVyQixJQUFBRSxXQUFBLEdBQTBCbnNCLFFBQVEsQ0FBQ2tzQixZQUFZLENBQUM7SUFBQUUsV0FBQSxHQUFBdHRCLGNBQUEsQ0FBQXF0QixXQUFBO0lBQXpDaEssS0FBSyxHQUFBaUssV0FBQTtJQUFFaEssUUFBUSxHQUFBZ0ssV0FBQTtFQUN0QixJQUFNQyxvQkFBb0IsR0FBR3hILE9BQU8sS0FBSyxjQUFjO0VBRXZENWtCLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSTZVLE1BQU0sRUFBRXNOLFFBQVEsQ0FBQzhKLFlBQVksQ0FBQztFQUNwQyxDQUFDLEVBQUUsQ0FBQ3BYLE1BQU0sRUFBRW9YLFlBQVksQ0FBQyxDQUFDO0VBRTFCLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJbGxCLEtBQUssRUFBSztJQUM5QkEsS0FBSyxDQUFDdWdCLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQU01ZixPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCMUwsTUFBTSxDQUFDNGMsT0FBTyxDQUFDa0osS0FBSyxDQUFDLENBQUN0SixPQUFPLENBQUMsVUFBQTBULE1BQUEsRUFBa0I7TUFBQSxJQUFBQyxNQUFBLEdBQUExdEIsY0FBQSxDQUFBeXRCLE1BQUE7UUFBaEJ4cUIsR0FBRyxHQUFBeXFCLE1BQUE7UUFBRW52QixLQUFLLEdBQUFtdkIsTUFBQTtNQUN4Q3prQixPQUFPLENBQUNoRyxHQUFHLENBQUMsR0FBR3ZDLEtBQUssQ0FBQ0ssT0FBTyxDQUFDeEMsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FBQzZILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzdILEtBQUs7SUFDaEUsQ0FBQyxDQUFDO0lBQ0YyZ0IsTUFBTSxDQUFDalcsT0FBTyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxJQUFNMGtCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlqRixNQUFNLEVBQUs7SUFDdkMsSUFBSSxDQUFDQSxNQUFNLEVBQUU7SUFDYnBGLFFBQVEsQ0FBQyxVQUFDbGMsSUFBSTtNQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FDVHZFLElBQUk7UUFDUDBVLFlBQVksRUFBRTRNLE1BQU0sQ0FBQ2pvQixJQUFJLElBQUkyRyxJQUFJLENBQUMwVSxZQUFZO1FBQzlDSCxLQUFLLEVBQUUrTSxNQUFNLENBQUNoa0IsS0FBSyxJQUFJMEMsSUFBSSxDQUFDdVUsS0FBSztRQUNqQ0ksTUFBTSxFQUFFM1UsSUFBSSxDQUFDMlUsTUFBTSxJQUFJMk0sTUFBTSxDQUFDa0YsZUFBZSxJQUFJLEVBQUU7UUFDbkR4UixNQUFNLEVBQUVzTSxNQUFNLENBQUMvakIsVUFBVSxJQUFJK2pCLE1BQU0sQ0FBQ21GLFVBQVUsSUFBSW5GLE1BQU0sQ0FBQ3BtQixFQUFFLElBQUk4RSxJQUFJLENBQUNnVixNQUFNLElBQUk7TUFBRTtJQUFBLENBQ2hGLENBQUM7RUFDTCxDQUFDO0VBRUQsb0JBQ0VuYixLQUFBLENBQUFnVCxhQUFBLENBQUM2QixLQUFLO0lBQ0o1USxLQUFLLDBFQUFBakQsTUFBQSxDQUFtQjhxQixTQUFTLENBQUc7SUFDcEMvVyxNQUFNLEVBQUVBLE1BQU87SUFDZkMsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCQyxNQUFNLGVBQ0pqVixLQUFBLENBQUFnVCxhQUFBLENBQUFoVCxLQUFBLENBQUFPLFFBQUEscUJBQ0VQLEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRUosT0FBUTtNQUFDL0IsU0FBUyxFQUFDO0lBQXlELEdBQUMsc0NBRXRGLENBQUMsZUFDVGpULEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRW1YLFlBQWE7TUFBQ3RaLFNBQVMsRUFBQztJQUFnRCxHQUFDLHdEQUVsRixDQUNSO0VBQ0gsZ0JBRURqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFXLEdBQ3hCbVksY0FBYyxDQUFDN2lCLEdBQUcsQ0FBQyxVQUFDcWMsTUFBTSxFQUFLO0lBQzlCLElBQU10bkIsS0FBSyxHQUFHOGtCLEtBQUssQ0FBQ3dDLE1BQU0sQ0FBQzVpQixHQUFHLENBQUM7SUFDL0IsSUFBSXNxQixvQkFBb0IsSUFBSTFILE1BQU0sQ0FBQzVpQixHQUFHLEtBQUssY0FBYyxFQUFFO01BQ3pELG9CQUNFaEMsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDMFQsaUJBQWlCO1FBQ2hCMWtCLEdBQUcsRUFBRTRpQixNQUFNLENBQUM1aUIsR0FBSTtRQUNoQlYsS0FBSyxFQUFFc2pCLE1BQU0sQ0FBQ3RqQixLQUFNO1FBQ3BCaEUsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRztRQUNuQjhZLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHaFEsU0FBUztVQUFBLE9BQUtpYyxRQUFRLENBQUMsVUFBQ2xjLElBQUk7WUFBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJO2NBQUUwVSxZQUFZLEVBQUV6VTtZQUFTO1VBQUEsQ0FBRyxDQUFDO1FBQUEsQ0FBQztRQUNwRjJnQixPQUFPLEVBQUVBLE9BQVE7UUFDakJDLGNBQWMsRUFBRTBGO01BQXFCLENBQ3RDLENBQUM7SUFFTjtJQUNBLElBQUk5SCxNQUFNLENBQUNwaUIsSUFBSSxLQUFLLFFBQVEsRUFBRTtNQUM1QixvQkFDRXhDLEtBQUEsQ0FBQWdULGFBQUE7UUFBS2hSLEdBQUcsRUFBRTRpQixNQUFNLENBQUM1aUIsR0FBSTtRQUFDaVIsU0FBUyxFQUFDO01BQVcsZ0JBQ3pDalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFPQyxTQUFTLEVBQUM7TUFBd0IsR0FBRTJSLE1BQU0sQ0FBQ3RqQixLQUFhLENBQUMsZUFDaEV0QixLQUFBLENBQUFnVCxhQUFBO1FBQVExVixLQUFLLEVBQUVBLEtBQUssSUFBSSxFQUFHO1FBQUM4WSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7VUFBQSxPQUFLZ2IsUUFBUSxDQUFDLFVBQUNsYyxJQUFJO1lBQUEsT0FBQXVFLGFBQUEsQ0FBQUEsYUFBQSxLQUFXdkUsSUFBSSxPQUFBa1osZUFBQSxLQUFHdUYsTUFBTSxDQUFDNWlCLEdBQUcsRUFBR3FGLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSztVQUFBLENBQUcsQ0FBQztRQUFBLENBQUM7UUFBQzJWLFNBQVMsRUFBQztNQUE2RSxnQkFDM01qVCxLQUFBLENBQUFnVCxhQUFBO1FBQVExVixLQUFLLEVBQUM7TUFBRSxHQUFDLEdBQVMsQ0FBQyxFQUMxQixDQUFDMlAsT0FBTyxDQUFDMlgsTUFBTSxDQUFDamlCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTRGLEdBQUcsQ0FBQyxVQUFDcUQsTUFBTTtRQUFBLG9CQUM3QzVMLEtBQUEsQ0FBQWdULGFBQUE7VUFBUWhSLEdBQUcsRUFBRTRKLE1BQU87VUFBQ3RPLEtBQUssRUFBRXNPO1FBQU8sR0FDaENBLE1BQ0ssQ0FBQztNQUFBLENBQ1YsQ0FDSyxDQUNMLENBQUM7SUFFVjtJQUNBLElBQUlnWixNQUFNLENBQUNwaUIsSUFBSSxLQUFLLGNBQWMsRUFBRTtNQUNsQyxJQUFNcXFCLGNBQWMsR0FBR3B0QixLQUFLLENBQUNLLE9BQU8sQ0FBQ3hDLEtBQUssQ0FBQyxHQUFHQSxLQUFLLEdBQUdxVixlQUFlLENBQUNyVixLQUFLLENBQUM7TUFDNUUsb0JBQ0UwQyxLQUFBLENBQUFnVCxhQUFBLENBQUM0UyxxQkFBcUI7UUFDcEI1akIsR0FBRyxFQUFFNGlCLE1BQU0sQ0FBQzVpQixHQUFJO1FBQ2hCVixLQUFLLEVBQUVzakIsTUFBTSxDQUFDdGpCLEtBQU07UUFDcEIyTCxPQUFPLEVBQUVBLE9BQU8sQ0FBQzJYLE1BQU0sQ0FBQ2ppQixVQUFVLENBQUMsSUFBSSxFQUFHO1FBQzFDckYsS0FBSyxFQUFFdXZCLGNBQWU7UUFDdEJ6VyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR2lRLFFBQVE7VUFBQSxPQUFLaEUsUUFBUSxDQUFDLFVBQUNsYyxJQUFJO1lBQUEsT0FBQXVFLGFBQUEsQ0FBQUEsYUFBQSxLQUFXdkUsSUFBSSxPQUFBa1osZUFBQSxLQUFHdUYsTUFBTSxDQUFDNWlCLEdBQUcsRUFBR3FrQixRQUFRO1VBQUEsQ0FBRyxDQUFDO1FBQUEsQ0FBQztRQUNsRnhHLFdBQVcsRUFBQztNQUFZLENBQ3pCLENBQUM7SUFFTjtJQUNBLElBQUkrRSxNQUFNLENBQUM1aUIsR0FBRyxLQUFLLE1BQU0sSUFBSTRpQixNQUFNLENBQUM1aUIsR0FBRyxLQUFLLE1BQU0sRUFBRTtNQUNsRCxvQkFDRWhDLEtBQUEsQ0FBQWdULGFBQUE7UUFBS2hSLEdBQUcsRUFBRTRpQixNQUFNLENBQUM1aUIsR0FBSTtRQUFDaVIsU0FBUyxFQUFDO01BQVcsZ0JBQ3pDalQsS0FBQSxDQUFBZ1QsYUFBQTtRQUFPQyxTQUFTLEVBQUM7TUFBd0IsR0FBRTJSLE1BQU0sQ0FBQ3RqQixLQUFhLENBQUMsZUFDaEV0QixLQUFBLENBQUFnVCxhQUFBLENBQUN5USxlQUFlO1FBQ2RubUIsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRztRQUNuQjhZLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHaFEsU0FBUztVQUFBLE9BQUtpYyxRQUFRLENBQUMsVUFBQ2xjLElBQUk7WUFBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJLE9BQUFrWixlQUFBLEtBQUd1RixNQUFNLENBQUM1aUIsR0FBRyxFQUFHb0UsU0FBUztVQUFBLENBQUcsQ0FBQztRQUFBLENBQUM7UUFDcEZ5WixXQUFXLEVBQUUrRSxNQUFNLENBQUM1aUIsR0FBRyxLQUFLLE1BQU0sR0FBRyxHQUFHLEdBQUcsd0JBQXlCO1FBQ3BFaUMsS0FBSyxFQUFFMmdCLE1BQU0sQ0FBQzVpQixHQUFHLEtBQUssTUFBTSxHQUFHLHVCQUF1QixHQUFHO01BQWdCLENBQzFFLENBQ0UsQ0FBQztJQUVWO0lBQ0Esb0JBQ0VoQyxLQUFBLENBQUFnVCxhQUFBO01BQUtoUixHQUFHLEVBQUU0aUIsTUFBTSxDQUFDNWlCLEdBQUk7TUFBQ2lSLFNBQVMsRUFBQztJQUFXLGdCQUN6Q2pULEtBQUEsQ0FBQWdULGFBQUE7TUFBT0MsU0FBUyxFQUFDO0lBQXdCLEdBQUUyUixNQUFNLENBQUN0akIsS0FBYSxDQUFDLGVBQ2hFdEIsS0FBQSxDQUFBZ1QsYUFBQTtNQUFPeFEsSUFBSSxFQUFFb2lCLE1BQU0sQ0FBQ3BpQixJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFPO01BQUNsRixLQUFLLEVBQUVBLEtBQUssSUFBSSxFQUFHO01BQUM4WSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7UUFBQSxPQUFLZ2IsUUFBUSxDQUFDLFVBQUNsYyxJQUFJO1VBQUEsT0FBQXVFLGFBQUEsQ0FBQUEsYUFBQSxLQUFXdkUsSUFBSSxPQUFBa1osZUFBQSxLQUFHdUYsTUFBTSxDQUFDNWlCLEdBQUcsRUFBR3FGLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSztRQUFBLENBQUcsQ0FBQztNQUFBLENBQUM7TUFBQzJWLFNBQVMsRUFBQztJQUE2RSxDQUFFLENBQzNQLENBQUM7RUFFVixDQUFDLENBQ0csQ0FDRCxDQUFDO0FBRVosQ0FBQztBQUVELElBQU02WixZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsTUFBQSxFQUEyQjtFQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFyQkMsS0FBSyxHQUFBTCxNQUFBLENBQUxLLEtBQUs7SUFBRXBZLE9BQU8sR0FBQStYLE1BQUEsQ0FBUC9YLE9BQU87RUFDcEMsSUFBTThDLFlBQVksR0FBRyxFQUFBa1YsV0FBQSxHQUFBSSxLQUFLLENBQUM5VixJQUFJLGNBQUEwVixXQUFBLHVCQUFWQSxXQUFBLENBQVlsVixZQUFZLEtBQUksRUFBRTtFQUNuRCxJQUFNdVYsWUFBWSxHQUFHanRCLE9BQU8sQ0FBQyxZQUFNO0lBQ2pDLElBQUksQ0FBQzBYLFlBQVksQ0FBQzdhLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDbkMsSUFBTXF3QixNQUFNLEdBQUc1bUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHekQsVUFBVTtJQUN0QyxJQUFNdUwsU0FBUyxHQUFHcUosWUFBWSxDQUMzQnZQLEdBQUcsQ0FBQyxVQUFDMFAsSUFBSSxFQUFLO01BQ2IsSUFBTXpGLFNBQVMsR0FBR1YsdUJBQXVCLENBQUNtRyxJQUFJLENBQUN2UixJQUFJLEVBQUV1UixJQUFJLENBQUN4RixJQUFJLEVBQUV3RixJQUFJLENBQUN2RixhQUFhLENBQUM7TUFDbkYsT0FBQWhJLGFBQUEsQ0FBQUEsYUFBQSxLQUFZdU4sSUFBSTtRQUFFekYsU0FBUyxFQUFUQTtNQUFTO0lBQzdCLENBQUMsQ0FBQyxDQUNEdk4sTUFBTSxDQUFDLFVBQUNnVCxJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDekYsU0FBUyxJQUFJeUYsSUFBSSxDQUFDekYsU0FBUyxDQUFDbkYsT0FBTyxDQUFDLENBQUMsSUFBSWlnQixNQUFNLElBQUkvYyw0QkFBNEIsQ0FBQzBILElBQUksQ0FBQzFGLE1BQU0sQ0FBQztJQUFBLEVBQUMsQ0FDbkgyRixJQUFJLENBQUMsVUFBQ3BiLENBQUMsRUFBRXFiLENBQUM7TUFBQSxPQUFLQSxDQUFDLENBQUMzRixTQUFTLENBQUNuRixPQUFPLENBQUMsQ0FBQyxHQUFHdlEsQ0FBQyxDQUFDMFYsU0FBUyxDQUFDbkYsT0FBTyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQ2hFLE9BQU9vQixTQUFTLENBQUNsRyxHQUFHLENBQUMsVUFBQzBQLElBQUksRUFBRWdELEtBQUs7TUFBQSxPQUFBdlEsYUFBQSxDQUFBQSxhQUFBLEtBQzVCdU4sSUFBSTtRQUNQc1YsV0FBVyxFQUFFOWUsU0FBUyxDQUFDeFIsTUFBTSxHQUFHZ2UsS0FBSztRQUNyQ3VTLFNBQVMsRUFBRTdnQixjQUFjLENBQUNzTCxJQUFJLENBQUN2UixJQUFJLEVBQUV1UixJQUFJLENBQUN4RixJQUFJO01BQUM7SUFBQSxDQUMvQyxDQUFDO0VBQ0wsQ0FBQyxFQUFFLENBQUNxRixZQUFZLENBQUMsQ0FBQztFQUVsQixvQkFDRTlYLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzZCLEtBQUs7SUFDSjVRLEtBQUssRUFBRSxFQUFBZ3BCLFlBQUEsR0FBQUcsS0FBSyxDQUFDOVYsSUFBSSxjQUFBMlYsWUFBQSxnQkFBQUEsWUFBQSxHQUFWQSxZQUFBLENBQVlRLElBQUksY0FBQVIsWUFBQSx1QkFBaEJBLFlBQUEsQ0FBa0JTLElBQUksS0FBSSxpQkFBa0I7SUFDbkQzWSxNQUFNLEVBQUVxWSxLQUFLLENBQUNwcEIsSUFBSztJQUNuQmdSLE9BQU8sRUFBRUEsT0FBUTtJQUNqQkMsTUFBTSxlQUFFalYsS0FBQSxDQUFBZ1QsYUFBQTtNQUFRb0MsT0FBTyxFQUFFSixPQUFRO01BQUMvQixTQUFTLEVBQUM7SUFBeUQsR0FBQyw0Q0FBZTtFQUFFLEdBRXRIbWEsS0FBSyxDQUFDeFIsT0FBTyxpQkFBSTViLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0gsWUFBWTtJQUFDdlIsS0FBSyxFQUFDO0VBQXFCLENBQUUsQ0FBQyxFQUM3RCxDQUFDOHJCLEtBQUssQ0FBQ3hSLE9BQU8sTUFBQXNSLFlBQUEsR0FBSUUsS0FBSyxDQUFDOVYsSUFBSSxjQUFBNFYsWUFBQSx1QkFBVkEsWUFBQSxDQUFZdG5CLEtBQUssa0JBQUk1RixLQUFBLENBQUFnVCxhQUFBLENBQUNFLFdBQVc7SUFBQ2hQLE9BQU8sRUFBRWtwQixLQUFLLENBQUM5VixJQUFJLENBQUMxUjtFQUFNLENBQUUsQ0FBQyxFQUNqRixDQUFDd25CLEtBQUssQ0FBQ3hSLE9BQU8sTUFBQXVSLFlBQUEsR0FBSUMsS0FBSyxDQUFDOVYsSUFBSSxjQUFBNlYsWUFBQSx1QkFBVkEsWUFBQSxDQUFZTSxJQUFJLGtCQUNqQ3p0QixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQW1DLGdCQUNoRGpULEtBQUEsQ0FBQWdULGFBQUEsMkJBQUtoVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFnQixHQUFDLDZDQUFjLENBQUMsS0FBQyxFQUFDbWEsS0FBSyxDQUFDOVYsSUFBSSxDQUFDbVcsSUFBSSxDQUFDL1MsS0FBSyxJQUFJLEdBQVMsQ0FBQyxlQUMxRjFhLEtBQUEsQ0FBQWdULGFBQUEsMkJBQUtoVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFnQixHQUFDLFdBQWUsQ0FBQyxLQUFDLEVBQUNtYSxLQUFLLENBQUM5VixJQUFJLENBQUNtVyxJQUFJLENBQUNiLFVBQVUsSUFBSSxHQUFTLENBQUMsZUFDaEc1c0IsS0FBQSxDQUFBZ1QsYUFBQSwyQkFBS2hULEtBQUEsQ0FBQWdULGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQWdCLEdBQUMsdUNBQWEsQ0FBQyxLQUFDLEVBQUNtYSxLQUFLLENBQUM5VixJQUFJLENBQUNtVyxJQUFJLENBQUMzUyxNQUFNLElBQUksR0FBUyxDQUN0RixDQUFDLGVBQ045YSxLQUFBLENBQUFnVCxhQUFBLDJCQUNFaFQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyx1RkFBa0IsQ0FBQyxlQUN6RGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXVDLEdBQ25Eb2EsWUFBWSxDQUFDcHdCLE1BQU0sZ0JBQ2xCK0MsS0FBQSxDQUFBZ1QsYUFBQSxDQUFBaFQsS0FBQSxDQUFBTyxRQUFBLHFCQUNFUCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEwRCxnQkFDdkVqVCxLQUFBLENBQUFnVCxhQUFBLGVBQU0scUhBQXlCLGVBQUFoVCxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUEwQixHQUFFb2EsWUFBWSxDQUFDcHdCLE1BQWEsQ0FBTyxDQUFDLGVBQzdHK0MsS0FBQSxDQUFBZ1QsYUFBQSxlQUFNLDhJQUErQixDQUNsQyxDQUFDLEVBQ0xxYSxZQUFZLENBQUM5a0IsR0FBRyxDQUFDLFVBQUMwUCxJQUFJLEVBQUVnRCxLQUFLLEVBQUs7SUFDakMsSUFBTTBTLFFBQVEsR0FBRzFTLEtBQUssS0FBSyxDQUFDO0lBQzVCLG9CQUNFamIsS0FBQSxDQUFBZ1QsYUFBQTtNQUNFaFIsR0FBRyxLQUFBaEIsTUFBQSxDQUFLaVgsSUFBSSxDQUFDNVcsRUFBRSxJQUFJNFcsSUFBSSxDQUFDdVYsU0FBUyxPQUFBeHNCLE1BQUEsQ0FBSWlYLElBQUksQ0FBQ3NWLFdBQVcsQ0FBRztNQUN4RHRhLFNBQVMsRUFBRXBPLFVBQVUsQ0FDbkIsMENBQTBDLEVBQzFDOG9CLFFBQVEsR0FBRyw0RUFBNEUsR0FBRyxrQ0FDNUY7SUFBRSxnQkFFRjN0QixLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFzRixnQkFDbkdqVCxLQUFBLENBQUFnVCxhQUFBO01BQU1DLFNBQVMsRUFBQztJQUEwQixHQUFDLG1EQUFTLEVBQUNnRixJQUFJLENBQUNzVixXQUFrQixDQUFDLGVBQzdFdnRCLEtBQUEsQ0FBQWdULGFBQUEsZUFBT2lGLElBQUksQ0FBQ3VWLFNBQWdCLENBQ3pCLENBQUMsZUFDTnh0QixLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUE2QixHQUFFZ0YsSUFBSSxDQUFDNkMsTUFBTSxJQUFJLEdBQU8sQ0FBQyxlQUNuRTlhLEtBQUEsQ0FBQWdULGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQWdCLEdBQUVnRixJQUFJLENBQUM1VixRQUFRLElBQUksR0FBTyxDQUNwRCxDQUFDO0VBRVYsQ0FBQyxDQUNELENBQUMsZ0JBRUhyQyxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFDLDBOQUE0QyxDQUVqRixDQUNGLENBQ0YsQ0FFRixDQUFDO0FBRVosQ0FBQztBQUVELElBQU0yYSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsTUFBQTtFQUFBLElBQUFDLGNBQUEsR0FBQUQsTUFBQSxDQUFNRSxPQUFPO0lBQVBBLE9BQU8sR0FBQUQsY0FBQSxjQUFHLEVBQUUsR0FBQUEsY0FBQTtJQUFFRSxTQUFTLEdBQUFILE1BQUEsQ0FBVEcsU0FBUztJQUFFQyxRQUFRLEdBQUFKLE1BQUEsQ0FBUkksUUFBUTtFQUFBLG9CQUN2RGp1QixLQUFBLENBQUFnVCxhQUFBLENBQUNJLFdBQVc7SUFDVm5QLEtBQUssRUFBQyx1RkFBaUI7SUFDdkJxUCxPQUFPLGVBQ0x0VCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUU2WSxRQUFTO01BQUNoYixTQUFTLEVBQUM7SUFBNkUsR0FBQywyRUFFM0c7RUFDVCxHQUVBOGEsT0FBTyxDQUFDOXdCLE1BQU0sS0FBSyxDQUFDLGdCQUNuQitDLEtBQUEsQ0FBQWdULGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQWdCLEdBQUMsNEVBQWlCLENBQUMsZ0JBRWhEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBVyxHQUN2QjhhLE9BQU8sQ0FBQ3hsQixHQUFHLENBQUMsVUFBQzJsQixNQUFNO0lBQUEsb0JBQ2xCbHVCLEtBQUEsQ0FBQWdULGFBQUE7TUFBS2hSLEdBQUcsRUFBRWtzQixNQUFPO01BQUNqYixTQUFTLEVBQUM7SUFBdUgsZ0JBQ2pKalQsS0FBQSxDQUFBZ1QsYUFBQSxlQUFPa2IsTUFBYSxDQUFDLGVBQ3JCbHVCLEtBQUEsQ0FBQWdULGFBQUE7TUFBUW9DLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUTRZLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO01BQUEsQ0FBQztNQUFDamIsU0FBUyxFQUFDO0lBQXVDLEdBQUMsMEVBRXBGLENBQ0wsQ0FBQztFQUFBLENBQ1AsQ0FDRSxDQUVJLENBQUM7QUFBQSxDQUNmO0FBRUQsSUFBTWtiLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUFDLE1BQUEsRUFBdUg7RUFBQSxJQUFqSHBxQixJQUFJLEdBQUFvcUIsTUFBQSxDQUFKcHFCLElBQUk7SUFBRXNPLFdBQVcsR0FBQThiLE1BQUEsQ0FBWDliLFdBQVc7SUFBQStiLGNBQUEsR0FBQUQsTUFBQSxDQUFFbmhCLE9BQU87SUFBUEEsT0FBTyxHQUFBb2hCLGNBQUEsY0FBRyxDQUFDLENBQUMsR0FBQUEsY0FBQTtJQUFFclosT0FBTyxHQUFBb1osTUFBQSxDQUFQcFosT0FBTztJQUFFaUosTUFBTSxHQUFBbVEsTUFBQSxDQUFOblEsTUFBTTtJQUFFRSxRQUFRLEdBQUFpUSxNQUFBLENBQVJqUSxRQUFRO0lBQUFtUSxnQkFBQSxHQUFBRixNQUFBLENBQUVHLFNBQVM7SUFBVEEsU0FBUyxHQUFBRCxnQkFBQSxjQUFHLEtBQUssR0FBQUEsZ0JBQUE7SUFBQUUsWUFBQSxHQUFBSixNQUFBLENBQUVLLEtBQUs7SUFBTEEsS0FBSyxHQUFBRCxZQUFBLGNBQUcsS0FBSyxHQUFBQSxZQUFBO0lBQUFFLGNBQUEsR0FBQU4sTUFBQSxDQUFFckgsT0FBTztJQUFQQSxPQUFPLEdBQUEySCxjQUFBLGNBQUcsRUFBRSxHQUFBQSxjQUFBO0VBQ3BJLElBQU1DLFVBQVUsR0FBR3h1QixXQUFXLENBQzVCLFVBQUNvRSxNQUFNO0lBQUEsT0FBTUEsTUFBTSxHQUFBbUcsYUFBQSxDQUFBQSxhQUFBLEtBQVFuRyxNQUFNO01BQUU0VyxNQUFNLEVBQUU1VyxNQUFNLENBQUM0VyxNQUFNLElBQUk1VyxNQUFNLENBQUNxcUIsTUFBTSxJQUFJLEVBQUU7TUFBRXJjLE1BQU0sRUFBRTVDLG9CQUFvQixDQUFDcEwsTUFBTSxDQUFDZ08sTUFBTTtJQUFDLEtBQUssSUFBSTtFQUFBLENBQUMsRUFDdEksRUFDRixDQUFDO0VBQ0QsSUFBQXNjLFdBQUEsR0FBMEI1dUIsUUFBUSxDQUFDMHVCLFVBQVUsQ0FBQ3JjLFdBQVcsQ0FBQyxDQUFDO0lBQUF3YyxXQUFBLEdBQUEvdkIsY0FBQSxDQUFBOHZCLFdBQUE7SUFBcER6TSxLQUFLLEdBQUEwTSxXQUFBO0lBQUV6TSxRQUFRLEdBQUF5TSxXQUFBO0VBRXRCNXVCLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxDQUFDOEQsSUFBSSxFQUFFO0lBQ1hxZSxRQUFRLENBQUNzTSxVQUFVLENBQUNyYyxXQUFXLENBQUMsQ0FBQztFQUNuQyxDQUFDLEVBQUUsQ0FBQ0EsV0FBVyxFQUFFcWMsVUFBVSxFQUFFM3FCLElBQUksQ0FBQyxDQUFDO0VBRW5DLElBQUksQ0FBQ0EsSUFBSSxJQUFJLENBQUNvZSxLQUFLLEVBQUUsT0FBTyxJQUFJO0VBRWhDLElBQU0yTSxpQkFBaUIsR0FBR3BjLGVBQWUsQ0FBQ3lQLEtBQUssQ0FBQy9mLFFBQVEsQ0FBQztFQUN6RCxJQUFNMnNCLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJNVAsS0FBSyxFQUFFOWhCLEtBQUs7SUFBQSxPQUFLK2tCLFFBQVEsQ0FBQyxVQUFDbGMsSUFBSTtNQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FBV3ZFLElBQUksT0FBQWtaLGVBQUEsS0FBR0QsS0FBSyxFQUFHOWhCLEtBQUs7SUFBQSxDQUFHLENBQUM7RUFBQTtFQUV4RixJQUFNaXZCLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekJ0TyxNQUFNLENBQUM7TUFDTDVjLEVBQUUsRUFBRStnQixLQUFLLENBQUMvZ0IsRUFBRTtNQUNaMkcsT0FBTyxFQUFFO1FBQ1A2UyxZQUFZLEVBQUV1SCxLQUFLLENBQUN2SCxZQUFZO1FBQ2hDSCxLQUFLLEVBQUUwSCxLQUFLLENBQUMxSCxLQUFLO1FBQ2xCSSxNQUFNLEVBQUVzSCxLQUFLLENBQUN0SCxNQUFNO1FBQ3BCcFUsSUFBSSxFQUFFMGIsS0FBSyxDQUFDMWIsSUFBSTtRQUNoQitMLElBQUksRUFBRTJQLEtBQUssQ0FBQzNQLElBQUk7UUFDaEJGLE1BQU0sRUFBRTVDLG9CQUFvQixDQUFDeVMsS0FBSyxDQUFDN1AsTUFBTSxDQUFDO1FBQzFDbFEsUUFBUSxFQUFFK2YsS0FBSyxDQUFDL2YsUUFBUTtRQUN4QjhZLE1BQU0sRUFBRWlILEtBQUssQ0FBQ2pILE1BQU0sSUFBSTtNQUMxQixDQUFDO01BQ0RzVCxLQUFLLEVBQUxBO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELElBQU0vQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJakYsTUFBTSxFQUFLO0lBQ3ZDLElBQUksQ0FBQ0EsTUFBTSxFQUFFO0lBQ2JwRixRQUFRLENBQUMsVUFBQ2xjLElBQUksRUFBSztNQUNqQixJQUFJLENBQUNBLElBQUksRUFBRSxPQUFPQSxJQUFJO01BQ3RCLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FDS3ZFLElBQUk7UUFDUDBVLFlBQVksRUFBRTRNLE1BQU0sQ0FBQ2pvQixJQUFJLElBQUkyRyxJQUFJLENBQUMwVSxZQUFZO1FBQzlDSCxLQUFLLEVBQUUrTSxNQUFNLENBQUNoa0IsS0FBSyxJQUFJMEMsSUFBSSxDQUFDdVUsS0FBSztRQUNqQ0ksTUFBTSxFQUFFM1UsSUFBSSxDQUFDMlUsTUFBTSxJQUFJMk0sTUFBTSxDQUFDa0YsZUFBZSxJQUFJLEVBQUU7UUFDbkR4UixNQUFNLEVBQUVzTSxNQUFNLENBQUMvakIsVUFBVSxJQUFJK2pCLE1BQU0sQ0FBQ21GLFVBQVUsSUFBSW5GLE1BQU0sQ0FBQ3BtQixFQUFFLElBQUk4RSxJQUFJLENBQUNnVixNQUFNLElBQUk7TUFBRTtJQUVwRixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQsb0JBQ0VuYixLQUFBLENBQUFnVCxhQUFBLENBQUM2QixLQUFLO0lBQ0o1USxLQUFLLEVBQUV3cUIsS0FBSyxHQUFHLGNBQWMsZ0lBQUF6dEIsTUFBQSxDQUE0Qm9oQixLQUFLLENBQUN2SCxZQUFZLElBQUksRUFBRSxDQUFHO0lBQ3BGOUYsTUFBTSxFQUFFL1EsSUFBSztJQUNiZ1IsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCQyxNQUFNLGVBQ0pqVixLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFrQyxHQUM5QyxDQUFDd2IsS0FBSyxJQUFJRixTQUFTLGlCQUNsQnZ1QixLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVErSSxRQUFRLGFBQVJBLFFBQVEsdUJBQVJBLFFBQVEsQ0FBR2lFLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ25QLFNBQVMsRUFBQztJQUF3RixHQUFDLDRDQUVySSxDQUNULGVBQ0RqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUVKLE9BQVE7TUFBQy9CLFNBQVMsRUFBQztJQUF5RCxHQUFDLHNDQUV0RixDQUFDLGVBQ1RqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUVtWCxZQUFhO01BQUN0WixTQUFTLEVBQUM7SUFBZ0QsR0FBQyx3REFFbEYsQ0FDTDtFQUNOLGdCQUVEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBeUMsZ0JBQ3REalQsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDMFQsaUJBQWlCO0lBQ2hCcGxCLEtBQUssRUFBQywrREFBYTtJQUNuQmhFLEtBQUssRUFBRThrQixLQUFLLENBQUN2SCxZQUFZLElBQUksRUFBRztJQUNoQ3pFLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHaFEsU0FBUztNQUFBLE9BQUs0b0IsWUFBWSxDQUFDLGNBQWMsRUFBRTVvQixTQUFTLENBQUM7SUFBQSxDQUFDO0lBQ2pFMmdCLE9BQU8sRUFBRUEsT0FBUTtJQUNqQkMsY0FBYyxFQUFFMEY7RUFBcUIsQ0FDdEMsQ0FBQyxlQUNGMXNCLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyw0Q0FBYyxDQUFDLGVBQ3pEalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFeFEsSUFBSSxFQUFDLEtBQUs7SUFDVmxGLEtBQUssRUFBRThrQixLQUFLLENBQUMxSCxLQUFLLElBQUksRUFBRztJQUN6QnRFLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUsybkIsWUFBWSxDQUFDLE9BQU8sRUFBRTNuQixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDL0R1aUIsV0FBVyxFQUFDLE9BQU87SUFDbkI1TSxTQUFTLEVBQUM7RUFBNkUsQ0FDeEYsQ0FDRSxDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO0lBQVExVixLQUFLLEVBQUU4a0IsS0FBSyxDQUFDdEgsTUFBTSxJQUFJLEVBQUc7SUFBQzFFLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUsybkIsWUFBWSxDQUFDLFFBQVEsRUFBRTNuQixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQzJWLFNBQVMsRUFBQztFQUFzRSxnQkFDbExqVCxLQUFBLENBQUFnVCxhQUFBO0lBQVExVixLQUFLLEVBQUM7RUFBRSxHQUFDLHNDQUFjLENBQUMsRUFDL0IsQ0FBQzJQLE9BQU8sQ0FBQzhRLE9BQU8sSUFBSSxFQUFFLEVBQUV4VixHQUFHLENBQUMsVUFBQzhDLE1BQU07SUFBQSxvQkFDbENyTCxLQUFBLENBQUFnVCxhQUFBO01BQVFoUixHQUFHLEVBQUVxSixNQUFPO01BQUMvTixLQUFLLEVBQUUrTjtJQUFPLEdBQ2hDQSxNQUNLLENBQUM7RUFBQSxDQUNWLENBQ0ssQ0FBQyxlQUNUckwsS0FBQSxDQUFBZ1QsYUFBQTtJQUFPeFEsSUFBSSxFQUFDLE1BQU07SUFBQ2xGLEtBQUssRUFBRThrQixLQUFLLENBQUMxYixJQUFJLEdBQUdpQyxNQUFNLENBQUN5WixLQUFLLENBQUMxYixJQUFJLENBQUMsQ0FBQ3BILEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRztJQUFDOFcsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBSzJuQixZQUFZLENBQUMsTUFBTSxFQUFFM25CLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDMlYsU0FBUyxFQUFDO0VBQXNFLENBQUUsQ0FBQyxlQUMvTmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ3lRLGVBQWU7SUFBQ25tQixLQUFLLEVBQUU4a0IsS0FBSyxDQUFDM1AsSUFBSSxJQUFJLEVBQUc7SUFBQzJELFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHaFEsU0FBUztNQUFBLE9BQUs0b0IsWUFBWSxDQUFDLE1BQU0sRUFBRTVvQixTQUFTLENBQUM7SUFBQSxDQUFDO0lBQUN5WixXQUFXLEVBQUM7RUFBd0IsQ0FBRSxDQUFDLGVBQzNJN2YsS0FBQSxDQUFBZ1QsYUFBQTtJQUFRMVYsS0FBSyxFQUFFOGtCLEtBQUssQ0FBQzdQLE1BQU0sSUFBSSxFQUFHO0lBQUM2RCxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLMm5CLFlBQVksQ0FBQyxRQUFRLEVBQUUzbkIsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUMyVixTQUFTLEVBQUM7RUFBc0UsZ0JBQ2xMalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFRMVYsS0FBSyxFQUFDO0VBQUUsR0FBQyxzQ0FBYyxDQUFDLEVBQy9CLENBQUMyUCxPQUFPLENBQUNrRCxRQUFRLElBQUksRUFBRSxFQUFFNUgsR0FBRyxDQUFDLFVBQUNtSCxNQUFNO0lBQUEsb0JBQ25DMVAsS0FBQSxDQUFBZ1QsYUFBQTtNQUFRaFIsR0FBRyxFQUFFME4sTUFBTztNQUFDcFMsS0FBSyxFQUFFb1M7SUFBTyxHQUNoQ0EsTUFDSyxDQUFDO0VBQUEsQ0FDVixDQUNLLENBQUMsZUFDVDFQLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVksZ0JBQ3pCalQsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDNFMscUJBQXFCO0lBQ3BCdGtCLEtBQUssRUFBQyxzQ0FBUTtJQUNkMkwsT0FBTyxFQUFFQSxPQUFPLENBQUNvVCxRQUFRLElBQUksRUFBRztJQUNoQy9pQixLQUFLLEVBQUV5eEIsaUJBQWtCO0lBQ3pCM1ksUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdpUSxRQUFRO01BQUEsT0FBSzJJLFlBQVksQ0FBQyxVQUFVLEVBQUUzSSxRQUFRLENBQUNsaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUN0RTBhLFdBQVcsRUFBQztFQUFxQixDQUNsQyxDQUNFLENBQ0YsQ0FDQSxDQUFDO0FBRVosQ0FBQztBQUNELElBQU1vUCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLE1BQUEsRUFzQmY7RUFBQSxJQUFBQyxxQkFBQTtFQUFBLElBckJKQyxVQUFVLEdBQUFGLE1BQUEsQ0FBVkUsVUFBVTtJQUNWQyxhQUFhLEdBQUFILE1BQUEsQ0FBYkcsYUFBYTtJQUNiQyxlQUFlLEdBQUFKLE1BQUEsQ0FBZkksZUFBZTtJQUNmOVgsYUFBYSxHQUFBMFgsTUFBQSxDQUFiMVgsYUFBYTtJQUFBK1gsY0FBQSxHQUFBTCxNQUFBLENBQ2JuSSxPQUFPO0lBQVBBLE9BQU8sR0FBQXdJLGNBQUEsY0FBRyxFQUFFLEdBQUFBLGNBQUE7SUFBQUMsa0JBQUEsR0FBQU4sTUFBQSxDQUNaTyxXQUFXO0lBQVhBLFdBQVcsR0FBQUQsa0JBQUEsY0FBRyxJQUFJLEdBQUFBLGtCQUFBO0lBQUFFLHFCQUFBLEdBQUFSLE1BQUEsQ0FDbEJTLGdCQUFnQjtJQUFoQkEsZ0JBQWdCLEdBQUFELHFCQUFBLGNBQUcsSUFBSSxHQUFBQSxxQkFBQTtJQUFBRSxvQkFBQSxHQUFBVixNQUFBLENBQ3ZCVyxhQUFhO0lBQWJBLGFBQWEsR0FBQUQsb0JBQUEsY0FBRyxJQUFJLEdBQUFBLG9CQUFBO0lBQUFFLGNBQUEsR0FBQVosTUFBQSxDQUNwQm5SLE9BQU87SUFBUEEsT0FBTyxHQUFBK1IsY0FBQSxjQUFHLEVBQUUsR0FBQUEsY0FBQTtJQUFBQyxlQUFBLEdBQUFiLE1BQUEsQ0FDWjdPLFFBQVE7SUFBUkEsUUFBUSxHQUFBMFAsZUFBQSxjQUFHLEVBQUUsR0FBQUEsZUFBQTtJQUNiQyxtQkFBbUIsR0FBQWQsTUFBQSxDQUFuQmMsbUJBQW1CO0lBQ25CQyxZQUFZLEdBQUFmLE1BQUEsQ0FBWmUsWUFBWTtJQUNaQyxXQUFXLEdBQUFoQixNQUFBLENBQVhnQixXQUFXO0lBQ1hDLGNBQWMsR0FBQWpCLE1BQUEsQ0FBZGlCLGNBQWM7SUFDZEMsb0JBQW9CLEdBQUFsQixNQUFBLENBQXBCa0Isb0JBQW9CO0lBQ3BCQyxvQkFBb0IsR0FBQW5CLE1BQUEsQ0FBcEJtQixvQkFBb0I7SUFDcEJDLGVBQWUsR0FBQXBCLE1BQUEsQ0FBZm9CLGVBQWU7SUFDZkMsWUFBWSxHQUFBckIsTUFBQSxDQUFacUIsWUFBWTtJQUFBQyxxQkFBQSxHQUFBdEIsTUFBQSxDQUNadUIsY0FBYztJQUFkQSxjQUFjLEdBQUFELHFCQUFBLGNBQUcsSUFBSSxHQUFBQSxxQkFBQTtJQUNyQkUsd0JBQXdCLEdBQUF4QixNQUFBLENBQXhCd0Isd0JBQXdCO0lBQUFDLHFCQUFBLEdBQUF6QixNQUFBLENBQ3hCMEIsZ0JBQWdCO0lBQWhCQSxnQkFBZ0IsR0FBQUQscUJBQUEsY0FBRyxJQUFJLEdBQUFBLHFCQUFBO0VBRXZCLElBQUFFLGdCQUFBLEdBQXNDenJCLGVBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO0lBQUEwckIsaUJBQUEsR0FBQS94QixjQUFBLENBQUE4eEIsZ0JBQUE7SUFBL0VFLFdBQVcsR0FBQUQsaUJBQUE7SUFBRUUsY0FBYyxHQUFBRixpQkFBQTtFQUNsQyxJQUFBRyxXQUFBLEdBQTRCaHhCLFFBQVEsQ0FBQztNQUFBLE9BQU11QixXQUFXLENBQUMwdkIsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsS0FBSztRQUFBLE9BQUExbUIsYUFBQSxDQUFBQSxhQUFBLEtBQVd5bUIsR0FBRyxPQUFBOVIsZUFBQSxLQUFHK1IsS0FBSyxFQUFHLEVBQUU7TUFBQSxDQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQUFDLFdBQUEsR0FBQXR5QixjQUFBLENBQUFreUIsV0FBQTtJQUF0R0ssTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQThDdnhCLFFBQVEsQ0FBQ292QixhQUFhLElBQUk7TUFBRXRSLE9BQU8sRUFBRSxFQUFFO01BQUVzQyxRQUFRLEVBQUUsRUFBRTtNQUFFbFEsUUFBUSxFQUFFO0lBQUcsQ0FBQyxDQUFDO0lBQUFzaEIsV0FBQSxHQUFBMXlCLGNBQUEsQ0FBQXl5QixXQUFBO0lBQTdHRSxlQUFlLEdBQUFELFdBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFdBQUE7RUFDMUMsSUFBQUcsV0FBQSxHQUFvQzN4QixRQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE0eEIsV0FBQSxHQUFBOXlCLGNBQUEsQ0FBQTZ5QixXQUFBO0lBQXpDRSxVQUFVLEdBQUFELFdBQUE7SUFBRUUsYUFBYSxHQUFBRixXQUFBO0VBQ2hDLElBQUFHLFdBQUEsR0FBb0MveEIsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBZ3lCLFdBQUEsR0FBQWx6QixjQUFBLENBQUFpekIsV0FBQTtJQUE1Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQW9DbnlCLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW95QixXQUFBLEdBQUF0ekIsY0FBQSxDQUFBcXpCLFdBQUE7SUFBekM3SixVQUFVLEdBQUE4SixXQUFBO0lBQUU3SixhQUFhLEdBQUE2SixXQUFBO0VBQ2hDLElBQUFDLGlCQUFBLEdBQTRDbHRCLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7SUFBQW10QixpQkFBQSxHQUFBeHpCLGNBQUEsQ0FBQXV6QixpQkFBQTtJQUFsRjdKLGNBQWMsR0FBQThKLGlCQUFBO0lBQUU3SixpQkFBaUIsR0FBQTZKLGlCQUFBO0VBQ3hDLElBQUFDLGlCQUFBLEdBQTRDcHRCLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUM7SUFBQXF0QixpQkFBQSxHQUFBMXpCLGNBQUEsQ0FBQXl6QixpQkFBQTtJQUFqRnZLLGNBQWMsR0FBQXdLLGlCQUFBO0lBQUVDLGlCQUFpQixHQUFBRCxpQkFBQTtFQUN4QyxJQUFBRSxpQkFBQSxHQUFnRHZ0QixlQUFlLENBQUMsc0JBQXNCLEVBQUU7TUFDdEYxRCxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7TUFDeEJRLFNBQVMsRUFBRSxFQUFFO01BQ2JDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUFBeXdCLGlCQUFBLEdBQUE3ekIsY0FBQSxDQUFBNHpCLGlCQUFBO0lBSktFLGdCQUFnQixHQUFBRCxpQkFBQTtJQUFFRSxtQkFBbUIsR0FBQUYsaUJBQUE7RUFLNUMsSUFBQUcsaUJBQUEsR0FBc0MzdEIsZUFBZSxDQUNuRCxvQkFBb0IsRUFDcEI1RCxXQUFXLENBQUMwdkIsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsS0FBSztNQUFBLElBQUE0QixtQkFBQTtNQUFBLE9BQUF0b0IsYUFBQSxDQUFBQSxhQUFBLEtBQVd5bUIsR0FBRyxPQUFBOVIsZUFBQSxLQUFHK1IsS0FBSyxFQUFHLEVBQUE0QixtQkFBQSxHQUFBdnhCLFlBQVksQ0FBQzJ2QixLQUFLLENBQUMsY0FBQTRCLG1CQUFBLHVCQUFuQkEsbUJBQUEsQ0FBcUJqeEIsV0FBVyxLQUFJLElBQUk7SUFBQSxDQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3hHLENBQUM7SUFBQWt4QixpQkFBQSxHQUFBbDBCLGNBQUEsQ0FBQWcwQixpQkFBQTtJQUhNRyxXQUFXLEdBQUFELGlCQUFBO0lBQUVFLGNBQWMsR0FBQUYsaUJBQUE7RUFJbEMsSUFBQUcsV0FBQSxHQUE4Q256QixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFvekIsV0FBQSxHQUFBdDBCLGNBQUEsQ0FBQXEwQixXQUFBO0lBQXRERSxlQUFlLEdBQUFELFdBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFdBQUE7RUFDMUMsSUFBQUcsaUJBQUEsR0FBd0RwdUIsZUFBZSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQztJQUFBcXVCLGtCQUFBLEdBQUExMEIsY0FBQSxDQUFBeTBCLGlCQUFBO0lBQXJHeEssb0JBQW9CLEdBQUF5SyxrQkFBQTtJQUFFeEssdUJBQXVCLEdBQUF3SyxrQkFBQTtFQUNwRCxJQUFBQyxrQkFBQSxHQUE4RHR1QixlQUFlLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDO0lBQUF1dUIsa0JBQUEsR0FBQTUwQixjQUFBLENBQUEyMEIsa0JBQUE7SUFBOUdFLHVCQUF1QixHQUFBRCxrQkFBQTtJQUFFRSwwQkFBMEIsR0FBQUYsa0JBQUE7RUFDMUQsSUFBTUcsbUJBQW1CLEdBQUcxekIsT0FBTyxDQUNqQztJQUFBLE9BQU87TUFDTGlCLEVBQUUsRUFBRSxJQUFJO01BQ1J3WixZQUFZLEVBQUUsRUFBRTtNQUNoQkgsS0FBSyxFQUFFLEVBQUU7TUFDVEksTUFBTSxFQUFFbFEsaUJBQWlCLENBQUM2a0IsV0FBVyxFQUFFaUMsZUFBZSxDQUFDM1QsT0FBTyxJQUFJLEVBQUUsQ0FBQztNQUNyRXJYLElBQUksRUFBRSxJQUFJQSxJQUFJLENBQUMsQ0FBQyxDQUFDcXRCLFdBQVcsQ0FBQyxDQUFDLENBQUN6MEIsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDM0NtVCxJQUFJLEVBQUUsRUFBRTtNQUNSRixNQUFNLEVBQUU1QyxvQkFBb0IsQ0FBRStoQixlQUFlLENBQUN2aEIsUUFBUSxJQUFJdWhCLGVBQWUsQ0FBQ3ZoQixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUssY0FBYyxDQUFDO01BQ3pHOU4sUUFBUSxFQUFFLEVBQUU7TUFDWjhZLE1BQU0sRUFBRTtJQUNWLENBQUM7RUFBQSxDQUFDLEVBQ0YsQ0FBQ3VXLGVBQWUsRUFBRWpDLFdBQVcsYUFBWEEsV0FBVyx1QkFBWEEsV0FBVyxDQUFFN3hCLFdBQVcsRUFBRTZ4QixXQUFXLGFBQVhBLFdBQVcsdUJBQVhBLFdBQVcsQ0FBRWpsQixRQUFRLENBQ25FLENBQUM7RUFFRHRLLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSW12QixhQUFhLEVBQUU7TUFDakJzQyxrQkFBa0IsQ0FBQWpuQixhQUFBLENBQUFBLGFBQUEsS0FDYjJrQixhQUFhO1FBQ2hCbGYsUUFBUSxFQUFFRCxtQkFBbUIsQ0FBQ21mLGFBQWEsQ0FBQ2xmLFFBQVEsSUFBSSxFQUFFO01BQUMsRUFDNUQsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxFQUFFLENBQUNrZixhQUFhLENBQUMsQ0FBQztFQUVuQm52QixTQUFTLENBQUMsWUFBTTtJQUNkLElBQUksQ0FBQ3VCLFlBQVksQ0FBQ3N2QixXQUFXLENBQUMsRUFBRTtNQUM5QkMsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUNoQztFQUNGLENBQUMsRUFBRSxDQUFDRCxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxDQUFDO0VBRWpDOXdCLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxDQUFDdXdCLGNBQWMsRUFBRTtJQUNyQixJQUFJbHZCLFdBQVcsQ0FBQ2dMLFFBQVEsQ0FBQ2trQixjQUFjLENBQUMsRUFBRTtNQUN4Q08sY0FBYyxDQUFDUCxjQUFjLENBQUM7SUFDaEM7SUFDQUMsd0JBQXdCLGFBQXhCQSx3QkFBd0IsZUFBeEJBLHdCQUF3QixDQUFHLENBQUM7RUFDOUIsQ0FBQyxFQUFFLENBQUNELGNBQWMsRUFBRU8sY0FBYyxFQUFFTix3QkFBd0IsQ0FBQyxDQUFDO0VBRTlEeHdCLFNBQVMsQ0FBQyxZQUFNO0lBQ2R3eUIsaUJBQWlCLENBQUMsVUFBQ3ZzQixJQUFJLEVBQUs7TUFDMUIsSUFBTTBDLFVBQVUsR0FBR3BKLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUkrSSxHQUFHLENBQUN0QyxJQUFJLENBQUNvQyxHQUFHLENBQUMsVUFBQ21ILE1BQU07UUFBQSxPQUFLQyxvQkFBb0IsQ0FBQ0QsTUFBTSxDQUFDO01BQUEsRUFBQyxDQUFDekssTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzFHLElBQUkyRCxVQUFVLENBQUM1TCxNQUFNLEtBQUtrSixJQUFJLENBQUNsSixNQUFNLElBQUk0TCxVQUFVLENBQUNtckIsS0FBSyxDQUFDLFVBQUMxMkIsS0FBSyxFQUFFMmQsS0FBSztRQUFBLE9BQUszZCxLQUFLLEtBQUs2SSxJQUFJLENBQUM4VSxLQUFLLENBQUM7TUFBQSxFQUFDLEVBQUU7UUFDbEcsT0FBTzlVLElBQUk7TUFDYjtNQUNBLE9BQU8wQyxVQUFVO0lBQ25CLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDNnBCLGlCQUFpQixDQUFDLENBQUM7RUFFdkIsSUFBTXVCLFdBQVcsR0FBRzl6QixXQUFXLGNBQUF6QixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBQyxTQUFBbTJCLFNBQUE7SUFBQSxJQUFBQyxTQUFBLEVBQUFDLFVBQUEsRUFBQUMsVUFBQSxFQUFBanBCLGlCQUFBLEVBQUFrcEIsR0FBQTtJQUFBLE9BQUF6MkIsWUFBQSxHQUFBQyxDQUFBLFdBQUF5MkIsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE3M0IsQ0FBQSxHQUFBNjNCLFNBQUEsQ0FBQTE0QixDQUFBO1FBQUE7VUFDOUJzMkIsYUFBYSxDQUFDLElBQUksQ0FBQztVQUNuQkosYUFBYSxDQUFDLEVBQUUsQ0FBQztVQUFDd0MsU0FBQSxDQUFBNzNCLENBQUE7VUFBQTYzQixTQUFBLENBQUExNEIsQ0FBQTtVQUFBLE9BRVEwQyxPQUFPLENBQUNpMkIsR0FBRyxJQUFBeHpCLE1BQUEsQ0FBQXdZLGtCQUFBLENBQzlCaFksV0FBVyxDQUFDK0csR0FBRyxDQUFDLFVBQUM2b0IsS0FBSztZQUFBLE9BQUtoQyxVQUFVLEtBQUFwdUIsTUFBQSxDQUFLb3dCLEtBQUssQ0FBRSxDQUFDO1VBQUEsRUFBQyxJQUN0RGhDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNwQyxDQUFDO1FBQUE7VUFISStFLFNBQVMsR0FBQUksU0FBQSxDQUFBMTNCLENBQUE7VUFJVHUzQixVQUFVLEdBQUcsQ0FBQyxDQUFDO1VBQ3JCNXlCLFdBQVcsQ0FBQ3NYLE9BQU8sQ0FBQyxVQUFDc1ksS0FBSyxFQUFFblcsS0FBSyxFQUFLO1lBQ3BDLElBQU0yTyxPQUFPLEdBQUd1SyxTQUFTLENBQUNsWixLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3RDbVosVUFBVSxDQUFDaEQsS0FBSyxDQUFDLEdBQUdBLEtBQUssS0FBSyxjQUFjLEdBQUd4SCxPQUFPLENBQUNyaEIsR0FBRyxDQUFDLFVBQUNtaUIsR0FBRztjQUFBLE9BQUFoZ0IsYUFBQSxDQUFBQSxhQUFBLEtBQVdnZ0IsR0FBRztnQkFBRW5ZLE1BQU0sRUFBRTVDLG9CQUFvQixDQUFDK2EsR0FBRyxDQUFDblksTUFBTTtjQUFDO1lBQUEsQ0FBRyxDQUFDLEdBQUdxWCxPQUFPO1VBQ3ZJLENBQUMsQ0FBQztVQUNJeUssVUFBVSxHQUFHRixTQUFTLENBQUMzeUIsV0FBVyxDQUFDdkUsTUFBTSxDQUFDLElBQUk7WUFBRThnQixPQUFPLEVBQUUsRUFBRTtZQUFFc0MsUUFBUSxFQUFFLEVBQUU7WUFBRWxRLFFBQVEsRUFBRTtVQUFHLENBQUM7VUFDekYvRSxpQkFBaUIsR0FBQVYsYUFBQSxDQUFBQSxhQUFBLEtBQ2xCMnBCLFVBQVU7WUFDYmxrQixRQUFRLEVBQUVELG1CQUFtQixDQUFDbWtCLFVBQVUsQ0FBQ2xrQixRQUFRLElBQUksRUFBRTtVQUFDO1VBRTFEb2hCLFNBQVMsQ0FBQzZDLFVBQVUsQ0FBQztVQUNyQnpDLGtCQUFrQixDQUFDdm1CLGlCQUFpQixDQUFDO1VBQ3JDa2tCLGVBQWUsYUFBZkEsZUFBZSxlQUFmQSxlQUFlLENBQUdsa0IsaUJBQWlCLENBQUM7VUFBQ21wQixTQUFBLENBQUExNEIsQ0FBQTtVQUFBO1FBQUE7VUFBQTA0QixTQUFBLENBQUE3M0IsQ0FBQTtVQUFBNDNCLEdBQUEsR0FBQUMsU0FBQSxDQUFBMTNCLENBQUE7VUFFckNnSixPQUFPLENBQUNELEtBQUssQ0FBQyxvQkFBb0IsRUFBQTB1QixHQUFPLENBQUM7VUFDMUN2QyxhQUFhLENBQUN1QyxHQUFBLENBQU1wd0IsT0FBTyxJQUFJLDhCQUE4QixDQUFDO1FBQUM7VUFBQXF3QixTQUFBLENBQUE3M0IsQ0FBQTtVQUUvRHkxQixhQUFhLENBQUMsS0FBSyxDQUFDO1VBQUMsT0FBQW9DLFNBQUEsQ0FBQTkzQixDQUFBO1FBQUE7VUFBQSxPQUFBODNCLFNBQUEsQ0FBQXozQixDQUFBO01BQUE7SUFBQSxHQUFBbzNCLFFBQUE7RUFBQSxDQUV4QixJQUFFLENBQUM5RSxVQUFVLEVBQUVFLGVBQWUsQ0FBQyxDQUFDO0VBRWpDcHZCLFNBQVMsQ0FBQyxZQUFNO0lBQ2QrekIsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLEVBQUUsQ0FBQ0EsV0FBVyxDQUFDLENBQUM7RUFFakIvekIsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJLENBQUNULEtBQUssQ0FBQ0ssT0FBTyxDQUFDNnZCLGdCQUFnQixDQUFDLEVBQUU7SUFDdEM0QixTQUFTLENBQUMsVUFBQ3ByQixJQUFJO01BQUEsT0FBQXVFLGFBQUEsQ0FBQUEsYUFBQSxLQUNWdkUsSUFBSTtRQUNQekUsWUFBWSxFQUFFaXVCLGdCQUFnQixDQUFDcG5CLEdBQUcsQ0FBQyxVQUFDbWlCLEdBQUc7VUFBQSxPQUFBaGdCLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQ2dnQixHQUFHO1lBQ05uWSxNQUFNLEVBQUU1QyxvQkFBb0IsQ0FBQythLEdBQUcsQ0FBQ25ZLE1BQU07VUFBQztRQUFBLENBQ3hDO01BQUM7SUFBQSxDQUNILENBQUM7RUFDTCxDQUFDLEVBQUUsQ0FBQ29kLGdCQUFnQixFQUFFRSxhQUFhLENBQUMsQ0FBQztFQUVyQyxJQUFNNEUsY0FBYyxHQUFHbnlCLGFBQWEsQ0FBQ3l1QixXQUFXLENBQUMsSUFBSSxFQUFFO0VBQ3ZELElBQU12TCxhQUFhLEdBQUdxTixnQkFBZ0IsQ0FBQzlCLFdBQVcsQ0FBQyxJQUFJLEVBQUU7RUFDekQsSUFBTTNGLGNBQWMsR0FBR3FKLGNBQWMsQ0FBQ3h2QixNQUFNLENBQUMsVUFBQzJmLE1BQU07SUFBQSxPQUFLLENBQUNZLGFBQWEsQ0FBQ2paLFFBQVEsQ0FBQ3FZLE1BQU0sQ0FBQzVpQixHQUFHLENBQUM7RUFBQSxFQUFDO0VBQzdGLElBQU1pcEIsVUFBVSxHQUFHaUksV0FBVyxDQUFDbkMsV0FBVyxDQUFDLE1BQUE1QixxQkFBQSxHQUFJMXRCLFlBQVksQ0FBQ3N2QixXQUFXLENBQUMsY0FBQTVCLHFCQUFBLHVCQUF6QkEscUJBQUEsQ0FBMkJwdEIsV0FBVyxLQUFJLElBQUk7RUFFN0YsSUFBTTJ5QixhQUFhLEdBQUd0MEIsT0FBTyxDQUFDLFlBQU07SUFBQSxJQUFBdTBCLHNCQUFBO0lBQ2xDLElBQU1DLE1BQU0sR0FBR3RELE1BQU0sQ0FBQ1AsV0FBVyxDQUFDLElBQUksRUFBRTtJQUN4QyxJQUFJLENBQUM2RCxNQUFNLENBQUMzM0IsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUM3QixJQUFJNmlCLElBQUksR0FBQXRHLGtCQUFBLENBQU9vYixNQUFNLENBQUM7SUFDdEIsSUFBSSxDQUFBRCxzQkFBQSxHQUFBbHpCLFlBQVksQ0FBQ3N2QixXQUFXLENBQUMsY0FBQTRELHNCQUFBLGVBQXpCQSxzQkFBQSxDQUEyQjl5QixvQkFBb0IsSUFBSTRtQixjQUFjLEtBQUssS0FBSyxFQUFFO01BQy9FM0ksSUFBSSxHQUFHQSxJQUFJLENBQUM3YSxNQUFNLENBQUMsVUFBQ3lsQixHQUFHO1FBQUEsT0FBS2hpQixhQUFhLENBQUNnaUIsR0FBRyxDQUFDNVAsTUFBTSxDQUFDLENBQUMzUCxXQUFXLENBQUMsQ0FBQyxLQUFLekMsYUFBYSxDQUFDK2YsY0FBYyxDQUFDLENBQUN0ZCxXQUFXLENBQUMsQ0FBQztNQUFBLEVBQUM7SUFDdEg7SUFDQSxJQUFJNGxCLFdBQVcsS0FBSyxjQUFjLEVBQUU7TUFDbEMsSUFBTXZqQixLQUFLLEdBQUc5RyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO01BQ3hCbVosSUFBSSxHQUFHQSxJQUFJLENBQUM3YSxNQUFNLENBQUMsVUFBQ3lsQixHQUFHLEVBQUs7UUFDMUIsSUFBSXpDLGNBQWMsQ0FBQ2hyQixNQUFNLElBQUlnckIsY0FBYyxDQUFDMWIsUUFBUSxDQUFDbWUsR0FBRyxDQUFDblksTUFBTSxDQUFDLEVBQUUsT0FBTyxLQUFLO1FBQzlFLElBQUl5VyxvQkFBb0IsRUFBRSxPQUFPLElBQUk7UUFDckMsT0FBTzNXLHdCQUF3QixDQUFDcVksR0FBRyxFQUFFbGQsS0FBSyxDQUFDO01BQzdDLENBQUMsQ0FBQztJQUNKO0lBQ0EsSUFBSSthLFVBQVUsQ0FBQ3pmLElBQUksQ0FBQyxDQUFDLEVBQUU7TUFDckIsSUFBTXFkLEtBQUssR0FBR29DLFVBQVUsQ0FBQ3pmLElBQUksQ0FBQyxDQUFDLENBQUNxQyxXQUFXLENBQUMsQ0FBQztNQUM3QzJVLElBQUksR0FBR0EsSUFBSSxDQUFDN2EsTUFBTSxDQUFDLFVBQUN5bEIsR0FBRztRQUFBLE9BQUtVLGNBQWMsQ0FBQzVhLElBQUksQ0FBQyxVQUFDb1UsTUFBTTtVQUFBLE9BQUtsYyxhQUFhLENBQUNnaUIsR0FBRyxDQUFDOUYsTUFBTSxDQUFDNWlCLEdBQUcsQ0FBQyxDQUFDLENBQUNtSixXQUFXLENBQUMsQ0FBQyxDQUFDb0IsUUFBUSxDQUFDNFosS0FBSyxDQUFDO1FBQUEsRUFBQztNQUFBLEVBQUM7SUFDNUg7SUFDQSxJQUFJOEUsVUFBVSxhQUFWQSxVQUFVLGVBQVZBLFVBQVUsQ0FBRWpwQixHQUFHLEVBQUU7TUFDbkIsSUFBTTZ5QixTQUFTLEdBQUdKLGNBQWMsQ0FBQ3hWLElBQUksQ0FBQyxVQUFDMkYsTUFBTTtRQUFBLE9BQUtBLE1BQU0sQ0FBQzVpQixHQUFHLEtBQUtpcEIsVUFBVSxDQUFDanBCLEdBQUc7TUFBQSxFQUFDO01BQ2hGOGQsSUFBSSxDQUFDNUgsSUFBSSxDQUFDLFVBQUNwYixDQUFDLEVBQUVxYixDQUFDLEVBQUs7UUFDbEIsSUFBTUcsSUFBSSxHQUFHbVMsZ0JBQWdCLENBQUMzdEIsQ0FBQyxFQUFFKzNCLFNBQVMsRUFBRTlELFdBQVcsQ0FBQztRQUN4RCxJQUFNdlksS0FBSyxHQUFHaVMsZ0JBQWdCLENBQUN0UyxDQUFDLEVBQUUwYyxTQUFTLEVBQUU5RCxXQUFXLENBQUM7UUFDekQsSUFBSXpZLElBQUksS0FBS0UsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM1QixJQUFJLE9BQU9GLElBQUksS0FBSyxRQUFRLElBQUksT0FBT0UsS0FBSyxLQUFLLFFBQVEsRUFBRTtVQUN6RCxPQUFPeVMsVUFBVSxDQUFDaHBCLFNBQVMsS0FBSyxLQUFLLEdBQUdxVyxJQUFJLEdBQUdFLEtBQUssR0FBR0EsS0FBSyxHQUFHRixJQUFJO1FBQ3JFO1FBQ0EsT0FBTzJTLFVBQVUsQ0FBQ2hwQixTQUFTLEtBQUssS0FBSyxHQUFJcVcsSUFBSSxHQUFHRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFJRixJQUFJLEdBQUdFLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO01BQ3pGLENBQUMsQ0FBQztJQUNKO0lBQ0EsT0FBT3NILElBQUk7RUFDYixDQUFDLEVBQUUsQ0FBQ3dSLE1BQU0sRUFBRVAsV0FBVyxFQUFFdEksY0FBYyxFQUFFUixjQUFjLEVBQUVNLFVBQVUsRUFBRTZDLGNBQWMsRUFBRUgsVUFBVSxFQUFFakMsb0JBQW9CLENBQUMsQ0FBQztFQUV2SCxJQUFNOEwsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLFNBQVMsRUFBSztJQUNoQzVCLGNBQWMsQ0FBQyxVQUFDaHRCLElBQUksRUFBSztNQUN2QixJQUFNbUIsT0FBTyxHQUFHbkIsSUFBSSxDQUFDNHFCLFdBQVcsQ0FBQztNQUNqQyxJQUFNOXVCLFNBQVMsR0FBRyxDQUFBcUYsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUV0RixHQUFHLE1BQUsreUIsU0FBUyxJQUFJenRCLE9BQU8sQ0FBQ3JGLFNBQVMsS0FBSyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUs7TUFDNUYsT0FBQXlJLGFBQUEsQ0FBQUEsYUFBQSxLQUFZdkUsSUFBSSxPQUFBa1osZUFBQSxLQUFHMFIsV0FBVyxFQUFHO1FBQUUvdUIsR0FBRyxFQUFFK3lCLFNBQVM7UUFBRTl5QixTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUNoRSxDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQsSUFBTTRtQixZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSWtNLFNBQVMsRUFBSztJQUNsQ2pDLG1CQUFtQixDQUFDLFVBQUMzc0IsSUFBSSxFQUFLO01BQzVCLElBQU02dUIsTUFBTSxHQUFHLElBQUl2c0IsR0FBRyxDQUFDdEMsSUFBSSxDQUFDNHFCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztNQUMvQyxJQUFJaUUsTUFBTSxDQUFDM2tCLEdBQUcsQ0FBQzBrQixTQUFTLENBQUMsRUFBRTtRQUN6QkMsTUFBTSxVQUFPLENBQUNELFNBQVMsQ0FBQztNQUMxQixDQUFDLE1BQU0sSUFBSUMsTUFBTSxDQUFDQyxJQUFJLEdBQUdSLGNBQWMsQ0FBQ3gzQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2xEKzNCLE1BQU0sQ0FBQzFrQixHQUFHLENBQUN5a0IsU0FBUyxDQUFDO01BQ3ZCO01BQ0EsT0FBQXJxQixhQUFBLENBQUFBLGFBQUEsS0FBWXZFLElBQUksT0FBQWtaLGVBQUEsS0FBRzBSLFdBQVcsRUFBR3R4QixLQUFLLENBQUNDLElBQUksQ0FBQ3MxQixNQUFNLENBQUM7SUFDckQsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELElBQU1yTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSWpaLE1BQU0sRUFBSztJQUMvQixJQUFNN0csVUFBVSxHQUFHOEcsb0JBQW9CLENBQUNELE1BQU0sQ0FBQztJQUMvQ2dqQixpQkFBaUIsQ0FBQyxVQUFDdnNCLElBQUk7TUFBQSxPQUFNQSxJQUFJLENBQUNvRyxRQUFRLENBQUMxRCxVQUFVLENBQUMsR0FBRzFDLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQyxVQUFDMk4sSUFBSTtRQUFBLE9BQUtBLElBQUksS0FBSy9KLFVBQVU7TUFBQSxFQUFDLE1BQUE3SCxNQUFBLENBQUF3WSxrQkFBQSxDQUFPclQsSUFBSSxJQUFFMEMsVUFBVSxFQUFDO0lBQUEsQ0FBQyxDQUFDO0VBQy9ILENBQUM7RUFFRCxJQUFNcXNCLFlBQVk7SUFBQSxJQUFBQyxNQUFBLEdBQUF6MkIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQXEzQixTQUFPendCLFFBQVEsRUFBRTJTLElBQUk7TUFBQSxJQUFBd04sT0FBQSxFQUFBdVEsY0FBQSxFQUFBQyxRQUFBLEVBQUF0dEIsT0FBQSxFQUFBdXRCLEdBQUE7TUFBQSxPQUFBMTNCLFlBQUEsR0FBQUMsQ0FBQSxXQUFBMDNCLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBOTRCLENBQUEsR0FBQTg0QixTQUFBLENBQUEzNUIsQ0FBQTtVQUFBO1lBQUEsSUFDbkM4SSxRQUFRO2NBQUE2d0IsU0FBQSxDQUFBMzVCLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTI1QixTQUFBLENBQUExNEIsQ0FBQTtVQUFBO1lBQ1Bnb0IsT0FBTyxHQUFHaU0sV0FBVztZQUNyQnNFLGNBQWMsR0FDbEJ2USxPQUFPLEtBQUssY0FBYyxJQUFJLENBQUF4TixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRS9FLE1BQU0sTUFBSy9OLFNBQVMsR0FBQWtHLGFBQUEsQ0FBQUEsYUFBQSxLQUMvQzRNLElBQUk7Y0FBRS9FLE1BQU0sRUFBRTVDLG9CQUFvQixDQUFDMkgsSUFBSSxDQUFDL0UsTUFBTTtZQUFDLEtBQ3BEK0UsSUFBSTtZQUNKZ2UsUUFBUSxHQUFHaEUsTUFBTSxDQUFDeE0sT0FBTyxDQUFDLElBQUksRUFBRTtZQUN0Q3lNLFNBQVMsQ0FBQyxVQUFDcHJCLElBQUksRUFBSztjQUNsQixJQUFNc3ZCLElBQUksR0FBR3R2QixJQUFJLENBQUMyZSxPQUFPLENBQUMsSUFBSSxFQUFFO2NBQ2hDLE9BQUFwYSxhQUFBLENBQUFBLGFBQUEsS0FDS3ZFLElBQUksT0FBQWtaLGVBQUEsS0FDTnlGLE9BQU8sRUFBRzJRLElBQUksQ0FBQ2x0QixHQUFHLENBQUMsVUFBQ21pQixHQUFHO2dCQUFBLE9BQU1wbUIsV0FBVyxDQUFDb21CLEdBQUcsQ0FBQyxLQUFLL2xCLFFBQVEsR0FBQStGLGFBQUEsQ0FBQUEsYUFBQSxLQUFRZ2dCLEdBQUcsR0FBSzJLLGNBQWMsSUFBSzNLLEdBQUc7Y0FBQSxDQUFDLENBQUM7WUFFdkcsQ0FBQyxDQUFDO1lBQUM4SyxTQUFBLENBQUE5NEIsQ0FBQTtZQUVLc0wsT0FBTyxHQUNYOGMsT0FBTyxLQUFLLFdBQVcsR0FBQXBhLGFBQUEsQ0FBQUEsYUFBQSxLQUNiNHFCLFFBQVEsQ0FBQ3JXLElBQUksQ0FBQyxVQUFDeUwsR0FBRztjQUFBLE9BQUtwbUIsV0FBVyxDQUFDb21CLEdBQUcsQ0FBQyxLQUFLL2xCLFFBQVE7WUFBQSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQU0wd0IsY0FBYyxJQUNyRkEsY0FBYztZQUFBRyxTQUFBLENBQUEzNUIsQ0FBQTtZQUFBLE9BQ2R1ekIsVUFBVSxLQUFBcHVCLE1BQUEsQ0FBSzhqQixPQUFPLE9BQUE5akIsTUFBQSxDQUFJMDBCLGtCQUFrQixDQUFDL3dCLFFBQVEsQ0FBQyxHQUFJO2NBQUVneEIsTUFBTSxFQUFFLEtBQUs7Y0FBRW5TLElBQUksRUFBRTlkLElBQUksQ0FBQ1ksU0FBUyxDQUFDMEIsT0FBTztZQUFFLENBQUMsQ0FBQztVQUFBO1lBQUF3dEIsU0FBQSxDQUFBMzVCLENBQUE7WUFBQTtVQUFBO1lBQUEyNUIsU0FBQSxDQUFBOTRCLENBQUE7WUFBQTY0QixHQUFBLEdBQUFDLFNBQUEsQ0FBQTM0QixDQUFBO1lBRWpIZ0osT0FBTyxDQUFDRCxLQUFLLENBQUMsZUFBZSxFQUFBMnZCLEdBQU8sQ0FBQztZQUNyQ3hELGFBQWEsQ0FBQ3dELEdBQUEsQ0FBTXJ4QixPQUFPLElBQUksNEJBQTRCLENBQUM7WUFDNURxdEIsU0FBUyxDQUFDLFVBQUNwckIsSUFBSTtjQUFBLE9BQUF1RSxhQUFBLENBQUFBLGFBQUEsS0FBV3ZFLElBQUksT0FBQWtaLGVBQUEsS0FBR3lGLE9BQU8sRUFBR3dRLFFBQVE7WUFBQSxDQUFHLENBQUM7VUFBQztZQUFBLE9BQUFFLFNBQUEsQ0FBQTE0QixDQUFBO1FBQUE7TUFBQSxHQUFBczRCLFFBQUE7SUFBQSxDQUUzRDtJQUFBLGdCQTFCS0YsWUFBWUEsQ0FBQVUsRUFBQSxFQUFBQyxHQUFBO01BQUEsT0FBQVYsTUFBQSxDQUFBdjJCLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0EwQmpCO0VBRUQsSUFBTTRnQixZQUFZO0lBQUEsSUFBQXVXLE1BQUEsR0FBQXAzQixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBZzRCLFNBQU94eEIsTUFBTTtNQUFBLElBQUFnSyxTQUFBLEVBQUF1VyxPQUFBLEVBQUF3USxRQUFBLEVBQUFVLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFwNEIsWUFBQSxHQUFBQyxDQUFBLFdBQUFvNEIsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF4NUIsQ0FBQSxHQUFBdzVCLFNBQUEsQ0FBQXI2QixDQUFBO1VBQUE7WUFBQSxNQUM1QixDQUFDMEksTUFBTSxJQUFJd3NCLFdBQVcsS0FBSyxXQUFXO2NBQUFtRixTQUFBLENBQUFyNkIsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBcTZCLFNBQUEsQ0FBQXA1QixDQUFBO1VBQUE7WUFBQSxLQUN4Qjh6QixnQkFBZ0I7Y0FBQXNGLFNBQUEsQ0FBQXI2QixDQUFBO2NBQUE7WUFBQTtZQUFBcTZCLFNBQUEsQ0FBQXI2QixDQUFBO1lBQUEsT0FDeEIrMEIsZ0JBQWdCLENBQUM7Y0FDckIzc0IsS0FBSyxFQUFFLGlCQUFpQjtjQUN4QkMsT0FBTyxFQUFFLHNEQUFzRDtjQUMvREMsWUFBWSxFQUFFLFNBQVM7Y0FDdkJFLElBQUksRUFBRTtZQUNSLENBQUMsQ0FBQztVQUFBO1lBQUEyeEIsR0FBQSxHQUFBRSxTQUFBLENBQUFyNUIsQ0FBQTtZQUFBcTVCLFNBQUEsQ0FBQXI2QixDQUFBO1lBQUE7VUFBQTtZQUFBbTZCLEdBQUEsR0FDRixJQUFJO1VBQUE7WUFQRnpuQixTQUFTLEdBQUF5bkIsR0FBQTtZQUFBLElBUVZ6bkIsU0FBUztjQUFBMm5CLFNBQUEsQ0FBQXI2QixDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFxNkIsU0FBQSxDQUFBcDVCLENBQUE7VUFBQTtZQUNSZ29CLE9BQU8sR0FBR2lNLFdBQVc7WUFDckJ1RSxRQUFRLEdBQUdoRSxNQUFNLENBQUN4TSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3RDeU0sU0FBUyxDQUFDLFVBQUNwckIsSUFBSSxFQUFLO2NBQ2xCLElBQU1zdkIsSUFBSSxHQUFHdHZCLElBQUksQ0FBQzJlLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Y0FDaEMsT0FBQXBhLGFBQUEsQ0FBQUEsYUFBQSxLQUFZdkUsSUFBSSxPQUFBa1osZUFBQSxLQUFHeUYsT0FBTyxFQUFHMlEsSUFBSSxDQUFDeHdCLE1BQU0sQ0FBQyxVQUFDeWxCLEdBQUc7Z0JBQUEsT0FBS3BtQixXQUFXLENBQUNvbUIsR0FBRyxDQUFDLEtBQUtwbUIsV0FBVyxDQUFDQyxNQUFNLENBQUM7Y0FBQSxFQUFDO1lBQzdGLENBQUMsQ0FBQztZQUFDMnhCLFNBQUEsQ0FBQXg1QixDQUFBO1lBQUF3NUIsU0FBQSxDQUFBcjZCLENBQUE7WUFBQSxPQUVLdXpCLFVBQVUsS0FBQXB1QixNQUFBLENBQUs4akIsT0FBTyxPQUFBOWpCLE1BQUEsQ0FBSTAwQixrQkFBa0IsQ0FBQ254QixNQUFNLENBQUNsRCxFQUFFLENBQUMsR0FBSTtjQUFFczBCLE1BQU0sRUFBRTtZQUFTLENBQUMsQ0FBQztVQUFBO1lBQUFPLFNBQUEsQ0FBQXI2QixDQUFBO1lBQUE7VUFBQTtZQUFBcTZCLFNBQUEsQ0FBQXg1QixDQUFBO1lBQUF1NUIsR0FBQSxHQUFBQyxTQUFBLENBQUFyNUIsQ0FBQTtZQUV0RmdKLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBQXF3QixHQUFPLENBQUM7WUFDckNsRSxhQUFhLENBQUNrRSxHQUFBLENBQU0veEIsT0FBTyxJQUFJLDJCQUEyQixDQUFDO1lBQzNEcXRCLFNBQVMsQ0FBQyxVQUFDcHJCLElBQUk7Y0FBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJLE9BQUFrWixlQUFBLEtBQUd5RixPQUFPLEVBQUd3USxRQUFRO1lBQUEsQ0FBRyxDQUFDO1VBQUM7WUFBQSxPQUFBWSxTQUFBLENBQUFwNUIsQ0FBQTtRQUFBO01BQUEsR0FBQWk1QixRQUFBO0lBQUEsQ0FFM0Q7SUFBQSxnQkF4Qkt4VyxZQUFZQSxDQUFBNFcsR0FBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQWwzQixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBd0JqQjtFQUVELElBQU15M0Isa0JBQWtCO0lBQUEsSUFBQUMsTUFBQSxHQUFBMzNCLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUF1NEIsU0FBT3R1QixPQUFPO01BQUEsSUFBQThjLE9BQUEsRUFBQXlSLGlCQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBMzRCLFlBQUEsR0FBQUMsQ0FBQSxXQUFBMjRCLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBLzVCLENBQUEsR0FBQSs1QixTQUFBLENBQUE1NkIsQ0FBQTtVQUFBO1lBQ2pDaXBCLE9BQU8sR0FBR2lNLFdBQVc7WUFDM0J3QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFBQ2tELFNBQUEsQ0FBQS81QixDQUFBO1lBRWxCNjVCLGlCQUFpQixHQUNyQnpSLE9BQU8sS0FBSyxjQUFjLElBQUksQ0FBQTljLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFdUssTUFBTSxNQUFLL04sU0FBUyxHQUFBa0csYUFBQSxDQUFBQSxhQUFBLEtBQ2xEMUMsT0FBTztjQUFFdUssTUFBTSxFQUFFNUMsb0JBQW9CLENBQUMzSCxPQUFPLENBQUN1SyxNQUFNO1lBQUMsS0FDMUR2SyxPQUFPO1lBQUF5dUIsU0FBQSxDQUFBNTZCLENBQUE7WUFBQSxPQUNQdXpCLFVBQVUsS0FBQXB1QixNQUFBLENBQUs4akIsT0FBTyxHQUFJO2NBQzlCNlEsTUFBTSxFQUFFLE1BQU07Y0FDZGUsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRTtjQUFtQixDQUFDO2NBQy9DbFQsSUFBSSxFQUFFOWQsSUFBSSxDQUFDWSxTQUFTLENBQUNpd0IsaUJBQWlCO1lBQ3hDLENBQUMsQ0FBQztVQUFBO1lBQ0Z0QyxXQUFXLENBQUMsQ0FBQztZQUFDd0MsU0FBQSxDQUFBNTZCLENBQUE7WUFBQTtVQUFBO1lBQUE0NkIsU0FBQSxDQUFBLzVCLENBQUE7WUFBQTg1QixHQUFBLEdBQUFDLFNBQUEsQ0FBQTU1QixDQUFBO1lBRWRnSixPQUFPLENBQUNELEtBQUssQ0FBQyxlQUFlLEVBQUE0d0IsR0FBTyxDQUFDO1lBQ3JDekUsYUFBYSxDQUFDeUUsR0FBQSxDQUFNdHlCLE9BQU8sSUFBSSwyQkFBMkIsQ0FBQztVQUFDO1lBQUEsT0FBQXV5QixTQUFBLENBQUEzNUIsQ0FBQTtRQUFBO01BQUEsR0FBQXc1QixRQUFBO0lBQUEsQ0FFL0Q7SUFBQSxnQkFsQktGLGtCQUFrQkEsQ0FBQU8sR0FBQTtNQUFBLE9BQUFOLE1BQUEsQ0FBQXozQixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBa0J2QjtFQUVELElBQU1pNEIsYUFBYSxHQUFHbjFCLFlBQVksQ0FBQ3N2QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDckQsSUFBTThGLGFBQWEsR0FBRyxDQUFBRCxhQUFhLGFBQWJBLGFBQWEsdUJBQWJBLGFBQWEsQ0FBRWoxQixJQUFJLE1BQUssUUFBUTtFQUV0RCxvQkFDRTNCLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBc0IsR0FDbEMxUixXQUFXLENBQUNnSCxHQUFHLENBQUMsVUFBQzZvQixLQUFLO0lBQUEsSUFBQTBGLG9CQUFBO0lBQUEsb0JBQ3JCOTJCLEtBQUEsQ0FBQWdULGFBQUE7TUFDRWhSLEdBQUcsRUFBRW92QixLQUFNO01BQ1hoYyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVE0YixjQUFjLENBQUNJLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDckNuZSxTQUFTLEVBQUVwTyxVQUFVLENBQ25CLGdDQUFnQyxFQUNoQ2tzQixXQUFXLEtBQUtLLEtBQUssR0FBRywwQkFBMEIsR0FBRyw2QkFDdkQ7SUFBRSxHQUVELEVBQUEwRixvQkFBQSxHQUFBcjFCLFlBQVksQ0FBQzJ2QixLQUFLLENBQUMsY0FBQTBGLG9CQUFBLHVCQUFuQkEsb0JBQUEsQ0FBcUJ4MUIsS0FBSyxLQUFJOHZCLEtBQ3pCLENBQUM7RUFBQSxDQUNWLENBQ0UsQ0FBQyxFQUVMeUYsYUFBYSxnQkFDWjcyQixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFXLEdBQ3ZCOGQsV0FBVyxLQUFLLFNBQVMsaUJBQ3hCL3dCLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzBLLFdBQVc7SUFDVkssT0FBTyxFQUFFQSxPQUFRO0lBQ2pCQyxhQUFhLEVBQUVnUyxtQkFBb0I7SUFDbkMvUixNQUFNLEVBQUVnUyxZQUFhO0lBQ3JCL1IsS0FBSyxFQUFFZ1MsV0FBWTtJQUNuQi9SLFFBQVEsRUFBRWdTO0VBQWUsQ0FDMUIsQ0FDRixFQUNBWSxXQUFXLEtBQUssVUFBVSxpQkFDekIvd0IsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDZ04sWUFBWTtJQUNYSyxRQUFRLEVBQUVBLFFBQVM7SUFDbkJ0QyxPQUFPLEVBQUVBLE9BQVE7SUFDakJDLGFBQWEsRUFBRW9TLG9CQUFxQjtJQUNwQzdQLGFBQWEsRUFBRThQLG9CQUFxQjtJQUNwQ2xTLFFBQVEsRUFBRW1TLGVBQWdCO0lBQzFCcFMsS0FBSyxFQUFFcVM7RUFBYSxDQUNyQixDQUVBLENBQUMsZ0JBRU52d0IsS0FBQSxDQUFBZ1QsYUFBQSxDQUFBaFQsS0FBQSxDQUFBTyxRQUFBLFFBQ0dxMkIsYUFBYSxpQkFDaEI1MkIsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDSSxXQUFXO0lBQUNuUCxLQUFLLEVBQUUyeUIsYUFBYSxDQUFDdDFCO0VBQU0sR0FDckN3d0IsVUFBVSxpQkFBSTl4QixLQUFBLENBQUFnVCxhQUFBLENBQUNFLFdBQVc7SUFBQ2hQLE9BQU8sRUFBRTR0QjtFQUFXLENBQUUsQ0FBQyxlQUNuRDl4QixLQUFBLENBQUFnVCxhQUFBLENBQUNxVixZQUFZO0lBQ1h2RCxPQUFPLEVBQUVpTSxXQUFZO0lBQ3JCeEksVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCQyxhQUFhLEVBQUVBLGFBQWM7SUFDN0IzbUIsb0JBQW9CLEVBQUUrMEIsYUFBYSxDQUFDLzBCLG9CQUFxQjtJQUN6RDRtQixjQUFjLEVBQUVBLGNBQWU7SUFDL0JDLGlCQUFpQixFQUFFQSxpQkFBa0I7SUFDckMzSyxPQUFPLEVBQUUyVCxlQUFlLENBQUMzVCxPQUFRO0lBQ2pDamMsb0JBQW9CLEVBQUU4MEIsYUFBYSxDQUFDOTBCLG9CQUFxQjtJQUN6RHFPLFFBQVEsRUFBRXVoQixlQUFlLENBQUN2aEIsUUFBUztJQUNuQzhYLGNBQWMsRUFBRUEsY0FBZTtJQUMvQlUsWUFBWSxFQUFFQSxZQUFhO0lBQzNCQyxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBQTtNQUFBLE9BQVE4SixpQkFBaUIsQ0FBQyxFQUFFLENBQUM7SUFBQSxDQUFDO0lBQzNDcE4sT0FBTyxFQUFFbVAsY0FBZTtJQUN4QmpQLGFBQWEsRUFBRUEsYUFBYztJQUM3QnFELFlBQVksRUFBRUEsWUFBYTtJQUMzQmpuQixTQUFTLEVBQUVnMUIsYUFBYSxDQUFDaDFCLFNBQVU7SUFDbkNrbkIsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQUE7TUFBQSxPQUFReUssa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUM3Q3hLLFNBQVMsRUFBRWtMLFdBQVk7SUFDdkJqTCxvQkFBb0IsRUFBRUEsb0JBQXFCO0lBQzNDQyx1QkFBdUIsRUFBRUEsdUJBQXdCO0lBQ2pERSxnQkFBZ0IsRUFBRTRILFdBQVcsS0FBSyxjQUFlO0lBQ2pEMUgsV0FBVyxFQUFFdUssdUJBQXdCO0lBQ3JDdEssY0FBYyxFQUFFdUssMEJBQTJCO0lBQzNDckssYUFBYSxFQUFFcUc7RUFBYyxDQUM5QixDQUFDLEVBQ0RxQyxVQUFVLGdCQUNUbHlCLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0gsWUFBWTtJQUFDdlIsS0FBSyxFQUFDO0VBQXFCLENBQUUsQ0FBQyxnQkFFNUN0QixLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFNLGdCQUNuQmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQytYLFNBQVM7SUFDUmpHLE9BQU8sRUFBRWlNLFdBQVk7SUFDckJqUixJQUFJLEVBQUU0VSxhQUFjO0lBQ3BCcFAsT0FBTyxFQUFFbVAsY0FBZTtJQUN4QmpQLGFBQWEsRUFBRUEsYUFBYztJQUM3QnlGLFVBQVUsRUFBRUEsVUFBVztJQUN2QkMsTUFBTSxFQUFFNEosVUFBVztJQUNuQmpRLFFBQVEsRUFBRXFRLFlBQWE7SUFDdkIvVyxRQUFRLEVBQUV5WSxhQUFhLENBQUNoMUIsU0FBUyxHQUFHMmQsWUFBWSxHQUFHLElBQUs7SUFDeER0UyxPQUFPLEVBQUV5a0IsZUFBZ0I7SUFDekJsYSxhQUFhLEVBQUVBLGFBQWM7SUFDN0I2UixXQUFXLEVBQUUwSCxXQUFXLEtBQUssY0FBYyxHQUFHNkMsdUJBQXVCLEdBQUc7RUFBTSxDQUMvRSxDQUNFLENBRUksQ0FDZCxFQUVJZ0QsYUFBYSxDQUFDaDFCLFNBQVMsS0FDckJtdkIsV0FBVyxLQUFLLGNBQWMsZ0JBQzdCL3dCLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ21iLGdCQUFnQjtJQUNmbnFCLElBQUksRUFBRXN2QixlQUFnQjtJQUN0QmhoQixXQUFXLEVBQUV3aEIsbUJBQW9CO0lBQ2pDN21CLE9BQU8sRUFBRXlrQixlQUFnQjtJQUN6QjFjLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUXVlLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDekN0VixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQThZLE1BQUE7TUFBQSxJQUFLL3VCLE9BQU8sR0FBQSt1QixNQUFBLENBQVAvdUIsT0FBTztNQUFBLE9BQU9vdUIsa0JBQWtCLENBQUNwdUIsT0FBTyxDQUFDO0lBQUEsQ0FBQztJQUNyRHltQixLQUFLO0lBQ0wxSCxPQUFPLEVBQUVBO0VBQVEsQ0FDbEIsQ0FBQyxnQkFFRi9tQixLQUFBLENBQUFnVCxhQUFBLENBQUM0WSxpQkFBaUI7SUFDaEI3VyxNQUFNLEVBQUV1ZSxlQUFnQjtJQUN4QnRlLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUXVlLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDekN0VixNQUFNLEVBQUVtWSxrQkFBbUI7SUFDM0I5USxPQUFPLEVBQUVtUCxjQUFlO0lBQ3hCM0ksU0FBUyxFQUFFOEssYUFBYSxDQUFDdDFCLEtBQU07SUFDL0IyTCxPQUFPLEVBQUV5a0IsZUFBZ0I7SUFDekI1TSxPQUFPLEVBQUVpTSxXQUFZO0lBQ3JCaEssT0FBTyxFQUFFQSxPQUFRO0lBQ2pCa0YsWUFBWSxFQUFFOEUsV0FBVyxLQUFLLGNBQWMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxHQUFHO0VBQUcsQ0FDaEgsQ0FDRixDQUNILENBRUQsQ0FBQztBQUVWLENBQUM7QUFDRCxJQUFNaUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBQyxNQUFBLEVBbUJkO0VBQUEsSUFsQkp2bkIsTUFBTSxHQUFBdW5CLE1BQUEsQ0FBTnZuQixNQUFNO0lBQ053bkIsUUFBUSxHQUFBRCxNQUFBLENBQVJDLFFBQVE7SUFBQUMsY0FBQSxHQUFBRixNQUFBLENBQ1JsSixPQUFPO0lBQVBBLE9BQU8sR0FBQW9KLGNBQUEsY0FBRyxFQUFFLEdBQUFBLGNBQUE7SUFBQUMsZUFBQSxHQUFBSCxNQUFBLENBQ1pJLFFBQVE7SUFBUkEsUUFBUSxHQUFBRCxlQUFBLGNBQUcsRUFBRSxHQUFBQSxlQUFBO0lBQ2JFLGVBQWUsR0FBQUwsTUFBQSxDQUFmSyxlQUFlO0lBQ2ZDLE9BQU8sR0FBQU4sTUFBQSxDQUFQTSxPQUFPO0lBQ1BDLE1BQU0sR0FBQVAsTUFBQSxDQUFOTyxNQUFNO0lBQ05DLFNBQVMsR0FBQVIsTUFBQSxDQUFUUSxTQUFTO0lBQ1RDLGNBQWMsR0FBQVQsTUFBQSxDQUFkUyxjQUFjO0lBQ2RDLGFBQWEsR0FBQVYsTUFBQSxDQUFiVSxhQUFhO0lBQ2JDLGVBQWUsR0FBQVgsTUFBQSxDQUFmVyxlQUFlO0lBQ2ZDLGNBQWMsR0FBQVosTUFBQSxDQUFkWSxjQUFjO0lBQ2RDLGFBQWEsR0FBQWIsTUFBQSxDQUFiYSxhQUFhO0lBQ2JDLFVBQVUsR0FBQWQsTUFBQSxDQUFWYyxVQUFVO0lBQ1ZDLGVBQWUsR0FBQWYsTUFBQSxDQUFmZSxlQUFlO0lBQ2ZDLGFBQWEsR0FBQWhCLE1BQUEsQ0FBYmdCLGFBQWE7SUFDYkMsVUFBVSxHQUFBakIsTUFBQSxDQUFWaUIsVUFBVTtJQUFBQyxlQUFBLEdBQUFsQixNQUFBLENBQ1ZtQixRQUFRO0lBQVJBLFFBQVEsR0FBQUQsZUFBQSxjQUFHLEtBQUssR0FBQUEsZUFBQTtFQUVoQixJQUFBRSxXQUFBLEdBQXNDcDRCLFFBQVEsQ0FBQyxDQUFBaTNCLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFb0IsY0FBYyxLQUFJLEVBQUUsQ0FBQztJQUFBQyxXQUFBLEdBQUF4NUIsY0FBQSxDQUFBczVCLFdBQUE7SUFBdkU3MEIsV0FBVyxHQUFBKzBCLFdBQUE7SUFBRUMsY0FBYyxHQUFBRCxXQUFBO0VBQ2xDLElBQUFFLFdBQUEsR0FBMEJ4NEIsUUFBUSxDQUFDLENBQUFpM0IsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUV3QixTQUFTLEtBQUksRUFBRSxDQUFDO0lBQUFDLFdBQUEsR0FBQTU1QixjQUFBLENBQUEwNUIsV0FBQTtJQUF0REcsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUV0Qno0QixTQUFTLENBQUMsWUFBTTtJQUNkczRCLGNBQWMsQ0FBQyxDQUFBdEIsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUVvQixjQUFjLEtBQUksRUFBRSxDQUFDO0lBQzlDTyxRQUFRLENBQUMsQ0FBQTNCLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFd0IsU0FBUyxLQUFJLEVBQUUsQ0FBQztFQUNyQyxDQUFDLEVBQUUsQ0FBQ3hCLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBSWtCLFFBQVEsS0FBSyxRQUFRLEVBQUU7SUFBQSxJQUFBVSxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxzQkFBQTtJQUN6QixvQkFDRWg1QixLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFXLGdCQUN4QmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzRhLFlBQVk7TUFBQ0csT0FBTyxFQUFFQSxPQUFRO01BQUNDLFNBQVMsRUFBRTRKLGVBQWdCO01BQUMzSixRQUFRLEVBQUU0SjtJQUFlLENBQUUsQ0FBQyxlQUV4RjczQixLQUFBLENBQUFnVCxhQUFBLENBQUNJLFdBQVc7TUFBQ25QLEtBQUssRUFBQztJQUF1QixnQkFDeENqRSxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUEyQixnQkFDeENqVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUErRSxnQkFDNUZqVCxLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUFlLEdBQUMsa0RBQVcsQ0FBQyxlQUN6Q2pULEtBQUEsQ0FBQWdULGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQU0sR0FBQyx3Q0FBUSxFQUFDNmtCLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUVtQixLQUFLLEdBQUcsU0FBUyxHQUFHLGlCQUFxQixDQUFDLGVBQ3RGajVCLEtBQUEsQ0FBQWdULGFBQUEsWUFBRyxzRUFBYSxFQUFDLENBQUE4a0IsYUFBYSxhQUFiQSxhQUFhLHVCQUFiQSxhQUFhLENBQUU1ekIsT0FBTyxLQUFJLFlBQWdCLENBQUMsRUFDM0QsQ0FBQTR6QixhQUFhLGFBQWJBLGFBQWEsZ0JBQUFnQixxQkFBQSxHQUFiaEIsYUFBYSxDQUFFb0IsT0FBTyxjQUFBSixxQkFBQSx1QkFBdEJBLHFCQUFBLENBQXdCSyxLQUFLLGtCQUFJbjVCLEtBQUEsQ0FBQWdULGFBQUEsWUFBRyxvREFBVSxFQUFDOGtCLGFBQWEsQ0FBQ29CLE9BQU8sQ0FBQ0MsS0FBUyxDQUFDLEVBQy9FLENBQUFyQixhQUFhLGFBQWJBLGFBQWEsZ0JBQUFpQixzQkFBQSxHQUFiakIsYUFBYSxDQUFFb0IsT0FBTyxjQUFBSCxzQkFBQSx1QkFBdEJBLHNCQUFBLENBQXdCSyxTQUFTLGtCQUFJcDVCLEtBQUEsQ0FBQWdULGFBQUEsWUFBRyxzRUFBYSxFQUFDaEgsVUFBVSxDQUFDOHJCLGFBQWEsQ0FBQ29CLE9BQU8sQ0FBQ0UsU0FBUyxDQUFLLENBQUMsRUFDdEcsQ0FBQXRCLGFBQWEsYUFBYkEsYUFBYSxnQkFBQWtCLHNCQUFBLEdBQWJsQixhQUFhLENBQUVvQixPQUFPLGNBQUFGLHNCQUFBLHVCQUF0QkEsc0JBQUEsQ0FBd0JLLE1BQU0sa0JBQUlyNUIsS0FBQSxDQUFBZ1QsYUFBQSxZQUFHLGtDQUFPLEVBQUM4a0IsYUFBYSxDQUFDb0IsT0FBTyxDQUFDRyxNQUFVLENBQzNFLENBQUMsZUFDTnI1QixLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUErRSxnQkFDNUZqVCxLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUFlLEdBQUMsOERBQWEsQ0FBQyxlQUMzQ2pULEtBQUEsQ0FBQWdULGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQU0sR0FBQywrRkFBa0IsRUFBQyxDQUFBOGtCLFVBQVUsYUFBVkEsVUFBVSx1QkFBVkEsVUFBVSxDQUFFdUIsT0FBTyxLQUFJLEdBQU8sQ0FBQyxlQUN0RXQ1QixLQUFBLENBQUFnVCxhQUFBLFlBQUcsMERBQVcsRUFBQytrQixVQUFVLGFBQVZBLFVBQVUsZUFBVkEsVUFBVSxDQUFFd0IsU0FBUyxHQUFHdnRCLFVBQVUsQ0FBQytyQixVQUFVLENBQUN3QixTQUFTLENBQUMsR0FBRyxHQUFPLENBQUMsZUFDbEZ2NUIsS0FBQSxDQUFBZ1QsYUFBQSxZQUFHLHdDQUFRLEVBQUMsQ0FBQStrQixVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBRTNXLE9BQU8sS0FBSSxZQUFnQixDQUFDLGVBQ3BEcGhCLEtBQUEsQ0FBQWdULGFBQUE7TUFBS0MsU0FBUyxFQUFDO0lBQTJCLGdCQUN4Q2pULEtBQUEsQ0FBQWdULGFBQUE7TUFDRW9DLE9BQU8sRUFBRTRpQixlQUFnQjtNQUN6QmxiLFFBQVEsRUFBRW9iLFVBQVc7TUFDckJqbEIsU0FBUyxFQUFDO0lBQW9JLEdBQy9JLHdEQUVPLENBQUMsZUFDVGpULEtBQUEsQ0FBQWdULGFBQUE7TUFDRW9DLE9BQU8sRUFBRTZpQixhQUFjO01BQ3ZCbmIsUUFBUSxFQUFFb2IsVUFBVSxJQUFJLEVBQUNILFVBQVUsYUFBVkEsVUFBVSxlQUFWQSxVQUFVLENBQUV5QixTQUFTLENBQUM7TUFDL0N2bUIsU0FBUyxFQUFDO0lBQTZILEdBRXRJaWxCLFVBQVUsR0FBRyxhQUFhLEdBQUcsVUFDeEIsQ0FDTCxDQUNGLENBQ0YsQ0FDTSxDQUNWLENBQUM7RUFFVjtFQUdBLG9CQUNFbDRCLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDSSxXQUFXO0lBQ1ZuUCxLQUFLLEVBQUMsK0RBQWE7SUFDbkJxUCxPQUFPLGVBQ0x0VCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFvQixnQkFDakNqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUVtaUIsT0FBUTtNQUFDdGtCLFNBQVMsRUFBQztJQUFnRCxHQUFDLHdEQUU3RSxDQUFDLGVBQ1RqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUVvaUIsTUFBTztNQUFDdmtCLFNBQVMsRUFBQztJQUE2QyxHQUFDLDhEQUV6RSxDQUFDLGVBQ1RqVCxLQUFBLENBQUFnVCxhQUFBO01BQVFvQyxPQUFPLEVBQUVxaUIsU0FBVTtNQUFDeGtCLFNBQVMsRUFBQztJQUE4QyxHQUFDLGdGQUU3RSxDQUNMO0VBQ04sZ0JBRURqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFnQixHQUFDLHdDQUFRLEVBQUN2RCxNQUFNLGFBQU5BLE1BQU0sZUFBTkEsTUFBTSxDQUFFK3BCLE9BQU8sR0FBRyxVQUFVLEdBQUcsWUFBZ0IsQ0FBQyxlQUN2Rno1QixLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUFvRCxnQkFDbkVqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU94USxJQUFJLEVBQUMsVUFBVTtJQUFDdWQsT0FBTyxFQUFFLENBQUFtWCxRQUFRLGFBQVJBLFFBQVEsdUJBQVJBLFFBQVEsQ0FBRXdDLFlBQVksTUFBSyxLQUFNO0lBQUN0akIsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBS2l3QixlQUFlLENBQUNqd0IsS0FBSyxDQUFDRyxNQUFNLENBQUN1WSxPQUFPLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQywwR0FFM0gsQ0FDSSxDQUFDLGVBRWQvZixLQUFBLENBQUFnVCxhQUFBLENBQUNJLFdBQVc7SUFBQ25QLEtBQUssRUFBQztFQUFhLGdCQUM5QmpFLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCalQsS0FBQSxDQUFBZ1QsYUFBQSwyQkFDRWhULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQXdCLEdBQUMsbUdBQXdCLENBQUMsZUFDbkVqVCxLQUFBLENBQUFnVCxhQUFBO0lBQVUxVixLQUFLLEVBQUVrRyxXQUFZO0lBQUM0UyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9PLEtBQUs7TUFBQSxPQUFLbXhCLGNBQWMsQ0FBQ254QixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ3dpQixJQUFJLEVBQUUsQ0FBRTtJQUFDN00sU0FBUyxFQUFDO0VBQTZFLENBQUUsQ0FDdEwsQ0FBQyxlQUNOalQsS0FBQSxDQUFBZ1QsYUFBQSwyQkFDRWhULEtBQUEsQ0FBQWdULGFBQUE7SUFBT0MsU0FBUyxFQUFDO0VBQXdCLEdBQUMsNERBQW1CLENBQUMsZUFDOURqVCxLQUFBLENBQUFnVCxhQUFBO0lBQVUxVixLQUFLLEVBQUVzN0IsS0FBTTtJQUFDeGlCLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL08sS0FBSztNQUFBLE9BQUt3eEIsUUFBUSxDQUFDeHhCLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEssS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDd2lCLElBQUksRUFBRSxDQUFFO0lBQUM3TSxTQUFTLEVBQUM7RUFBNkUsQ0FBRSxDQUMxSyxDQUFDLGVBQ05qVCxLQUFBLENBQUFnVCxhQUFBO0lBQVFvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVFzaUIsY0FBYyxDQUFDO1FBQUVZLGNBQWMsRUFBRTkwQixXQUFXO1FBQUVrMUIsU0FBUyxFQUFFRTtNQUFNLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzNsQixTQUFTLEVBQUM7RUFBbUUsR0FBQyw2RkFFaEssQ0FDTCxDQUNNLENBRVYsQ0FBQztBQUVWLENBQUM7QUFDRCxJQUFNMG1CLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBQyxNQUFBLEVBQTJCO0VBQUEsSUFBckJDLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO0lBQUVqMEIsS0FBSyxHQUFBZzBCLE1BQUEsQ0FBTGgwQixLQUFLO0VBQ25DLElBQUFrMEIsV0FBQSxHQUFnQzc1QixRQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE4NUIsV0FBQSxHQUFBaDdCLGNBQUEsQ0FBQSs2QixXQUFBO0lBQXJDdHZCLFFBQVEsR0FBQXV2QixXQUFBO0lBQUVDLFdBQVcsR0FBQUQsV0FBQTtFQUM1QixJQUFBRSxXQUFBLEdBQWdDaDZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWk2QixXQUFBLEdBQUFuN0IsY0FBQSxDQUFBazdCLFdBQUE7SUFBckM3MkIsUUFBUSxHQUFBODJCLFdBQUE7SUFBRUMsV0FBVyxHQUFBRCxXQUFBO0VBQzVCLElBQUFFLFdBQUEsR0FBOENuNkIsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBbzZCLFdBQUEsR0FBQXQ3QixjQUFBLENBQUFxN0IsV0FBQTtJQUFuREUsZUFBZSxHQUFBRCxXQUFBO0lBQUVFLGtCQUFrQixHQUFBRixXQUFBO0VBQzFDLElBQUFHLFdBQUEsR0FBd0N2NkIsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBdzZCLFdBQUEsR0FBQTE3QixjQUFBLENBQUF5N0IsV0FBQTtJQUE3Q0UsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUNwQyxJQUFBRyxXQUFBLEdBQXdDMzZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTQ2QixXQUFBLEdBQUE5N0IsY0FBQSxDQUFBNjdCLFdBQUE7SUFBN0NFLFlBQVksR0FBQUQsV0FBQTtJQUFFRSxlQUFlLEdBQUFGLFdBQUE7RUFDcEMsSUFBQUcsV0FBQSxHQUE0Qy82QixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFnN0IsV0FBQSxHQUFBbDhCLGNBQUEsQ0FBQWk4QixXQUFBO0lBQW5ERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFFeEMvNkIsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJa2MsU0FBUyxHQUFHLElBQUk7SUFDcEIsSUFBTWdmLFlBQVk7TUFBQSxJQUFBQyxNQUFBLEdBQUEzOEIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQXU5QixTQUFBO1FBQUEsSUFBQXZ6QixRQUFBLEVBQUF1UCxJQUFBLEVBQUF6TyxVQUFBLEVBQUEweUIsR0FBQTtRQUFBLE9BQUExOUIsWUFBQSxHQUFBQyxDQUFBLFdBQUEwOUIsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUE5K0IsQ0FBQSxHQUFBOCtCLFNBQUEsQ0FBQTMvQixDQUFBO1lBQUE7Y0FDbkJzL0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2NBQUNLLFNBQUEsQ0FBQTkrQixDQUFBO2NBQUE4K0IsU0FBQSxDQUFBMy9CLENBQUE7Y0FBQSxPQUVDc00sS0FBSyxJQUFBbkgsTUFBQSxDQUFJRSxZQUFZLG1CQUFnQixDQUFDO1lBQUE7Y0FBdkQ2RyxRQUFRLEdBQUF5ekIsU0FBQSxDQUFBMytCLENBQUE7Y0FBQSxJQUNUa0wsUUFBUSxDQUFDSyxFQUFFO2dCQUFBb3pCLFNBQUEsQ0FBQTMvQixDQUFBO2dCQUFBO2NBQUE7Y0FBQSxNQUFRLElBQUl3TSxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQUE7Y0FBQW16QixTQUFBLENBQUEzL0IsQ0FBQTtjQUFBLE9BQ3hCa00sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztZQUFBO2NBQTVCZ1AsSUFBSSxHQUFBa2tCLFNBQUEsQ0FBQTMrQixDQUFBO2NBQUEsSUFDTHVmLFNBQVM7Z0JBQUFvZixTQUFBLENBQUEzL0IsQ0FBQTtnQkFBQTtjQUFBO2NBQUEsT0FBQTIvQixTQUFBLENBQUExK0IsQ0FBQTtZQUFBO2NBQ1IrTCxVQUFVLEdBQUdwSixLQUFLLENBQUNLLE9BQU8sQ0FBQ3dYLElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsRUFBRTtjQUNsRHFqQixlQUFlLENBQUM5eEIsVUFBVSxDQUFDO2NBQzNCLElBQUlBLFVBQVUsQ0FBQzVMLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNCKzhCLFdBQVcsQ0FBQ254QixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM0QixLQUFLLENBQUM7Y0FDbEMsQ0FBQyxNQUFNLElBQUksQ0FBQzVCLFVBQVUsQ0FBQzJILElBQUksQ0FBQyxVQUFDNUUsTUFBTTtnQkFBQSxPQUFLQSxNQUFNLENBQUNuQixLQUFLLEtBQUtELFFBQVE7Y0FBQSxFQUFDLEVBQUU7Z0JBQ2xFd3ZCLFdBQVcsQ0FBQyxFQUFFLENBQUM7Y0FDakI7Y0FDQWUsZUFBZSxDQUFDLEVBQUUsQ0FBQztjQUFDUyxTQUFBLENBQUEzL0IsQ0FBQTtjQUFBO1lBQUE7Y0FBQTIvQixTQUFBLENBQUE5K0IsQ0FBQTtjQUFBNitCLEdBQUEsR0FBQUMsU0FBQSxDQUFBMytCLENBQUE7Y0FBQSxJQUVmdWYsU0FBUztnQkFBQW9mLFNBQUEsQ0FBQTMvQixDQUFBO2dCQUFBO2NBQUE7Y0FBQSxPQUFBMi9CLFNBQUEsQ0FBQTErQixDQUFBO1lBQUE7Y0FDZDY5QixlQUFlLENBQUMsRUFBRSxDQUFDO2NBQ25CSSxlQUFlLENBQUMsdUNBQXVDLENBQUM7WUFBQztjQUFBUyxTQUFBLENBQUE5K0IsQ0FBQTtjQUV6RCxJQUFJMGYsU0FBUyxFQUFFO2dCQUNiK2UsaUJBQWlCLENBQUMsS0FBSyxDQUFDO2NBQzFCO2NBQUMsT0FBQUssU0FBQSxDQUFBLytCLENBQUE7WUFBQTtjQUFBLE9BQUErK0IsU0FBQSxDQUFBMStCLENBQUE7VUFBQTtRQUFBLEdBQUF3K0IsUUFBQTtNQUFBLENBRUo7TUFBQSxnQkF4QktGLFlBQVlBLENBQUE7UUFBQSxPQUFBQyxNQUFBLENBQUF6OEIsS0FBQSxPQUFBRCxTQUFBO01BQUE7SUFBQSxHQXdCakI7SUFDRHk4QixZQUFZLENBQUMsQ0FBQztJQUNkLE9BQU8sWUFBTTtNQUNYaGYsU0FBUyxHQUFHLEtBQUs7SUFDbkIsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztFQUVSbGMsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJMEYsS0FBSyxFQUFFO01BQ1QyMEIsa0JBQWtCLENBQUMsRUFBRSxDQUFDO0lBQ3hCO0VBQ0YsQ0FBQyxFQUFFLENBQUMzMEIsS0FBSyxDQUFDLENBQUM7RUFFWCxJQUFNMm1CLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJbGxCLEtBQUssRUFBSztJQUM5QkEsS0FBSyxDQUFDdWdCLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ3BkLFFBQVEsRUFBRTtNQUNiK3ZCLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDO01BQ2hEO0lBQ0Y7SUFDQSxJQUFJLENBQUNuM0IsUUFBUSxFQUFFO01BQ2JtM0Isa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7TUFDcEM7SUFDRjtJQUNBQSxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7SUFDdEJWLE9BQU8sQ0FBQ3J2QixRQUFRLEVBQUVwSCxRQUFRLENBQUM7RUFDN0IsQ0FBQztFQUVELElBQU1xNEIsY0FBYyxHQUFHUCxjQUFjLElBQUlSLFlBQVksQ0FBQ3o5QixNQUFNLEtBQUssQ0FBQztFQUVsRSxvQkFDRStDLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWlFLGdCQUM5RWpULEtBQUEsQ0FBQWdULGFBQUE7SUFBTTBvQixRQUFRLEVBQUVuUCxZQUFhO0lBQUN0WixTQUFTLEVBQUM7RUFBMkYsZ0JBQ2pJalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUFJQyxTQUFTLEVBQUM7RUFBK0MsR0FBQyxnQkFBa0IsQ0FBQyxlQUNqRmpULEtBQUEsQ0FBQWdULGFBQUEsMkJBQ0VoVCxLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF3QixHQUFDLDhIQUErQixDQUFDLGVBQzFFalQsS0FBQSxDQUFBZ1QsYUFBQTtJQUNFMVYsS0FBSyxFQUFFa04sUUFBUztJQUNoQnNTLFFBQVEsRUFBRTJlLGNBQWU7SUFDekJybEIsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLLEVBQUs7TUFDbkJrekIsa0JBQWtCLENBQUMsRUFBRSxDQUFDO01BQ3RCUCxXQUFXLENBQUMzeUIsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFDakMsQ0FBRTtJQUNGMlYsU0FBUyxFQUFDO0VBQXNHLGdCQUVoSGpULEtBQUEsQ0FBQWdULGFBQUE7SUFBUTFWLEtBQUssRUFBQztFQUFFLEdBQUU0OUIsY0FBYyxHQUFHLGFBQWEsR0FBRyxpQkFBMEIsQ0FBQyxFQUM3RVIsWUFBWSxDQUFDbnlCLEdBQUcsQ0FBQyxVQUFDcUQsTUFBTTtJQUFBLG9CQUN2QjVMLEtBQUEsQ0FBQWdULGFBQUE7TUFBUWhSLEdBQUcsRUFBRTRKLE1BQU0sQ0FBQ3ZLLEVBQUUsSUFBSXVLLE1BQU0sQ0FBQ25CLEtBQU07TUFBQ25OLEtBQUssRUFBRXNPLE1BQU0sQ0FBQ25CO0lBQU0sR0FDekRtQixNQUFNLENBQUN0SyxLQUFLLElBQUlzSyxNQUFNLENBQUNuQixLQUNsQixDQUFDO0VBQUEsQ0FDVixDQUNLLENBQUMsZUFDVHpLLEtBQUEsQ0FBQWdULGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWdCLGdCQUM3QmpULEtBQUEsQ0FBQWdULGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQXdCLEdBQUMscVNBQTBELENBQUMsRUFDaEc2bkIsWUFBWSxpQkFBSTk2QixLQUFBLENBQUFnVCxhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF1QixHQUFFNm5CLFlBQWdCLENBQ3BFLENBQ0YsQ0FBQyxlQUNOOTZCLEtBQUEsQ0FBQWdULGFBQUEsMkJBQ0VoVCxLQUFBLENBQUFnVCxhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF3QixHQUFDLHNDQUFhLENBQUMsZUFDeERqVCxLQUFBLENBQUFnVCxhQUFBO0lBQU94USxJQUFJLEVBQUMsVUFBVTtJQUFDbEYsS0FBSyxFQUFFOEYsUUFBUztJQUFDZ1QsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvTyxLQUFLO01BQUEsT0FBSzh5QixXQUFXLENBQUM5eUIsS0FBSyxDQUFDRyxNQUFNLENBQUNsSyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUMyVixTQUFTLEVBQUM7RUFBa0YsQ0FBRSxDQUN6TCxDQUFDLEVBQ0wsQ0FBQ3FuQixlQUFlLElBQUkxMEIsS0FBSyxrQkFBSzVGLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0UsV0FBVztJQUFDaFAsT0FBTyxFQUFFbzJCLGVBQWUsSUFBSTEwQjtFQUFNLENBQUUsQ0FBQyxlQUNqRjVGLEtBQUEsQ0FBQWdULGFBQUE7SUFBUXhRLElBQUksRUFBQyxRQUFRO0lBQUN5USxTQUFTLEVBQUMsbUZBQW1GO0lBQUM2SixRQUFRLEVBQUUyZTtFQUFlLEdBQUMsZ0NBRXRJLENBQ0osQ0FDSCxDQUFDO0FBRVYsQ0FBQztBQUNELElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDaEIsSUFBQUMsV0FBQSxHQUE4QjM3QixRQUFRLENBQUMsWUFBTTtNQUMzQyxJQUFJO1FBQ0YsSUFBTTQ3QixLQUFLLEdBQUdyMkIsWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEQsT0FBT28yQixLQUFLLEdBQUd2eEIsbUJBQW1CLENBQUM1RSxJQUFJLENBQUNDLEtBQUssQ0FBQ2syQixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUk7TUFDOUQsQ0FBQyxDQUFDLE9BQU9qMkIsS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJO01BQ2I7SUFDRixDQUFDLENBQUM7SUFBQWsyQixXQUFBLEdBQUEvOEIsY0FBQSxDQUFBNjhCLFdBQUE7SUFQSzFsQixPQUFPLEdBQUE0bEIsV0FBQTtJQUFFQyxVQUFVLEdBQUFELFdBQUE7RUFRMUIsSUFBQUUsa0JBQUEsR0FBa0M1MkIsZUFBZSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztJQUFBNjJCLGtCQUFBLEdBQUFsOUIsY0FBQSxDQUFBaTlCLGtCQUFBO0lBQTNFN2xCLFNBQVMsR0FBQThsQixrQkFBQTtJQUFFQyxZQUFZLEdBQUFELGtCQUFBO0VBQzlCLElBQUFFLFdBQUEsR0FBZ0RsOEIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUFBbThCLFdBQUEsR0FBQXI5QixjQUFBLENBQUFvOUIsV0FBQTtJQUF2REUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsSUFBQUcsV0FBQSxHQUFrQ3Q4QixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUF1OEIsV0FBQSxHQUFBejlCLGNBQUEsQ0FBQXc5QixXQUFBO0lBQXpDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUFHLFdBQUEsR0FBZ0MxOEIsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBMjhCLFdBQUEsR0FBQTc5QixjQUFBLENBQUE0OUIsV0FBQTtJQUFyQ3RjLFFBQVEsR0FBQXVjLFdBQUE7SUFBRUMsV0FBVyxHQUFBRCxXQUFBO0VBQzVCLElBQUFFLFdBQUEsR0FBOEI3OEIsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBODhCLFdBQUEsR0FBQWgrQixjQUFBLENBQUErOUIsV0FBQTtJQUFuQy9lLE9BQU8sR0FBQWdmLFdBQUE7SUFBRUMsVUFBVSxHQUFBRCxXQUFBO0VBQzFCLElBQUFFLFdBQUEsR0FBa0NoOUIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUFBaTlCLFdBQUEsR0FBQW4rQixjQUFBLENBQUFrK0IsV0FBQTtJQUF6Q0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUM5QixJQUFBRyxXQUFBLEdBQXNDcDlCLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQXE5QixXQUFBLEdBQUF2K0IsY0FBQSxDQUFBcytCLFdBQUE7SUFBN0NFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUFzQ3g5QixRQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF5OUIsV0FBQSxHQUFBMytCLGNBQUEsQ0FBQTArQixXQUFBO0lBQTNDRSxXQUFXLEdBQUFELFdBQUE7SUFBRUUsY0FBYyxHQUFBRixXQUFBO0VBQ2xDLElBQUFHLFdBQUEsR0FBMEM1OUIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUFBNjlCLFdBQUEsR0FBQS8rQixjQUFBLENBQUE4K0IsV0FBQTtJQUFqRC9GLGFBQWEsR0FBQWdHLFdBQUE7SUFBRUMsZ0JBQWdCLEdBQUFELFdBQUE7RUFDdEMsSUFBQUUsV0FBQSxHQUFvQy85QixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFnK0IsV0FBQSxHQUFBbC9CLGNBQUEsQ0FBQWkvQixXQUFBO0lBQTNDakcsVUFBVSxHQUFBa0csV0FBQTtJQUFFQyxhQUFhLEdBQUFELFdBQUE7RUFDaEMsSUFBQUUsV0FBQSxHQUF3Q2wrQixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFtK0IsV0FBQSxHQUFBci9CLGNBQUEsQ0FBQW8vQixXQUFBO0lBQS9DRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDLElBQUFHLFdBQUEsR0FBd0N0K0IsUUFBUSxDQUFDO01BQUUrRCxJQUFJLEVBQUUsS0FBSztNQUFFc1QsSUFBSSxFQUFFLElBQUk7TUFBRXNFLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQztJQUFBNGlCLFdBQUEsR0FBQXovQixjQUFBLENBQUF3L0IsV0FBQTtJQUF0RkUsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUNwQyxJQUFBRyxXQUFBLEdBQWdEMStCLFFBQVEsQ0FBQztNQUFFK0QsSUFBSSxFQUFFLEtBQUs7TUFBRXNULElBQUksRUFBRSxJQUFJO01BQUVySyxPQUFPLEVBQUUsSUFBSTtNQUFFd2hCLEtBQUssRUFBRSxLQUFLO01BQUVyVSxXQUFXLEVBQUU7SUFBTSxDQUFDLENBQUM7SUFBQXdrQixXQUFBLEdBQUE3L0IsY0FBQSxDQUFBNC9CLFdBQUE7SUFBL0hFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBOEI5K0IsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBKytCLFlBQUEsR0FBQWpnQyxjQUFBLENBQUFnZ0MsV0FBQTtJQUF0Q25qQixPQUFPLEdBQUFvakIsWUFBQTtJQUFFbmpCLFVBQVUsR0FBQW1qQixZQUFBO0VBQzFCLElBQUFDLFlBQUEsR0FBc0NoL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBaS9CLFlBQUEsR0FBQW5nQyxjQUFBLENBQUFrZ0MsWUFBQTtJQUEzQ0UsV0FBVyxHQUFBRCxZQUFBO0lBQUVFLGNBQWMsR0FBQUYsWUFBQTtFQUNsQyxJQUFBRyxZQUFBLEdBQWtDcC9CLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXEvQixZQUFBLEdBQUF2Z0MsY0FBQSxDQUFBc2dDLFlBQUE7SUFBdkNFLFNBQVMsR0FBQUQsWUFBQTtJQUFFRSxZQUFZLEdBQUFGLFlBQUE7RUFDOUIsSUFBQUcsWUFBQSxHQUFvQ3gvQixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUF5L0IsWUFBQSxHQUFBM2dDLGNBQUEsQ0FBQTBnQyxZQUFBO0lBQTVDdkgsVUFBVSxHQUFBd0gsWUFBQTtJQUFFQyxhQUFhLEdBQUFELFlBQUE7RUFDaEMsSUFBQUUsWUFBQSxHQUFnQzMvQixRQUFRLENBQUNZLE1BQU0sQ0FBQ3FpQixVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQUEyYyxZQUFBLEdBQUE5Z0MsY0FBQSxDQUFBNmdDLFlBQUE7SUFBM0RFLFFBQVEsR0FBQUQsWUFBQTtJQUFFRSxXQUFXLEdBQUFGLFlBQUE7RUFDNUIsSUFBQUcsWUFBQSxHQUFnRC8vQixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFnZ0MsWUFBQSxHQUFBbGhDLGNBQUEsQ0FBQWloQyxZQUFBO0lBQXZERSxnQkFBZ0IsR0FBQUQsWUFBQTtJQUFFRSxtQkFBbUIsR0FBQUYsWUFBQTtFQUM1QyxJQUFBRyxZQUFBLEdBQW9DbmdDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQW9nQyxZQUFBLEdBQUF0aEMsY0FBQSxDQUFBcWhDLFlBQUE7SUFBM0NFLFVBQVUsR0FBQUQsWUFBQTtJQUFFRSxhQUFhLEdBQUFGLFlBQUE7RUFDaEMsSUFBQUcsWUFBQSxHQUEwQ3ZnQyxRQUFRLENBQUM4RCxtQkFBbUIsQ0FBQztJQUFBMDhCLFlBQUEsR0FBQTFoQyxjQUFBLENBQUF5aEMsWUFBQTtJQUFoRUUsYUFBYSxHQUFBRCxZQUFBO0lBQUVFLGdCQUFnQixHQUFBRixZQUFBO0VBQ3RDLElBQU1HLGtCQUFrQixHQUFHdmdDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFFdkMsSUFBTXdnQyxjQUFjLEdBQUcxZ0MsV0FBVyxDQUNoQztJQUFBLElBQUM4TSxPQUFPLEdBQUF0TyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsQ0FBQyxDQUFDO0lBQUEsT0FDWCxJQUFJSixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFLO01BQ3ZCb2lDLGtCQUFrQixDQUFDdDVCLE9BQU8sR0FBRzlJLE9BQU87TUFDcENtaUMsZ0JBQWdCLENBQUFqMkIsYUFBQSxDQUFBQSxhQUFBLENBQUFBLGFBQUEsS0FBTTNHLG1CQUFtQixHQUFLa0osT0FBTztRQUFFakosSUFBSSxFQUFFO01BQUksRUFBRSxDQUFDO0lBQ3RFLENBQUMsQ0FBQztFQUFBLEdBQ0osRUFDRixDQUFDO0VBRUQsSUFBTTg4QixtQkFBbUIsR0FBRzNnQyxXQUFXLENBQ3JDLFVBQUNxZixNQUFNLEVBQUs7SUFDVm1oQixnQkFBZ0IsQ0FBQzU4QixtQkFBbUIsQ0FBQztJQUNyQyxJQUFJNjhCLGtCQUFrQixDQUFDdDVCLE9BQU8sRUFBRTtNQUM5QnM1QixrQkFBa0IsQ0FBQ3Q1QixPQUFPLENBQUNrWSxNQUFNLENBQUM7TUFDbENvaEIsa0JBQWtCLENBQUN0NUIsT0FBTyxHQUFHLElBQUk7SUFDbkM7RUFDRixDQUFDLEVBQ0QsRUFDRixDQUFDO0VBRURwSCxTQUFTLENBQUMsWUFBTTtJQUNkLElBQUlpVyxTQUFTLEtBQUssU0FBUyxJQUFJQSxTQUFTLEtBQUssVUFBVSxFQUFFO01BQ3ZELElBQU0zTyxNQUFNLEdBQUcyTyxTQUFTLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxVQUFVO01BQy9EbW1CLG1CQUFtQixDQUFDOTBCLE1BQU0sQ0FBQztNQUMzQjAwQixZQUFZLENBQUMsUUFBUSxDQUFDO0lBQ3hCO0VBQ0YsQ0FBQyxFQUFFLENBQUMvbEIsU0FBUyxFQUFFK2xCLFlBQVksQ0FBQyxDQUFDO0VBRTdCLElBQU02RSw0QkFBNEIsR0FBRzVnQyxXQUFXLENBQUM7SUFBQSxPQUFNbThCLG1CQUFtQixDQUFDLElBQUksQ0FBQztFQUFBLEdBQUUsRUFBRSxDQUFDO0VBQ3JGLElBQU0wRSxpQkFBaUIsR0FBRzNnQyxNQUFNLENBQUMsSUFBSXdZLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFFM0MzWSxTQUFTLENBQUMsWUFBTTtJQUNkLElBQU1pSCxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQTtNQUFBLE9BQVM0NEIsV0FBVyxDQUFDbC9CLE1BQU0sQ0FBQ3FpQixVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQUE7SUFDM0RyaUIsTUFBTSxDQUFDNkcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFUCxPQUFPLENBQUM7SUFDMUMsT0FBTztNQUFBLE9BQU10RyxNQUFNLENBQUM4RyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVSLE9BQU8sQ0FBQztJQUFBO0VBQzVELENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNODVCLFlBQVksR0FBRzlnQyxXQUFXLENBQUMsWUFBTTtJQUNyQ3FGLFlBQVksQ0FBQzA3QixVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDekNuRixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCVyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2xCMEMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUNsQmUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0VBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNL1EsVUFBVSxHQUFHanZCLFdBQVc7SUFBQSxJQUFBZ2hDLE1BQUEsR0FBQXppQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FDNUIsU0FBQXFqQyxTQUFPQyxRQUFRO01BQUEsSUFBQUMsZ0JBQUE7TUFBQSxJQUFBcjBCLE9BQUE7UUFBQXlwQixPQUFBO1FBQUEzdUIsUUFBQTtRQUFBN0QsT0FBQTtRQUFBcTlCLE1BQUEsR0FBQTVpQyxTQUFBO01BQUEsT0FBQWQsWUFBQSxHQUFBQyxDQUFBLFdBQUEwakMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUEzbEMsQ0FBQTtVQUFBO1lBQUVvUixPQUFPLEdBQUFzMEIsTUFBQSxDQUFBdGtDLE1BQUEsUUFBQXNrQyxNQUFBLFFBQUEvOEIsU0FBQSxHQUFBKzhCLE1BQUEsTUFBRyxDQUFDLENBQUM7WUFBQSxJQUN0QnJyQixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFekYsS0FBSztjQUFBK3dCLFNBQUEsQ0FBQTNsQyxDQUFBO2NBQUE7WUFBQTtZQUFBLE1BQVEsSUFBSXdNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztVQUFBO1lBQ3JEcXVCLE9BQU8sR0FBQWhzQixhQUFBLENBQUFBLGFBQUE7Y0FDWCsyQixNQUFNLEVBQUUsa0JBQWtCO2NBQzFCQyxhQUFhLFlBQUExZ0MsTUFBQSxDQUFZa1YsT0FBTyxDQUFDekYsS0FBSztZQUFFLEdBQ3BDeEQsT0FBTyxDQUFDdVcsSUFBSSxJQUFJLEdBQUE4ZCxnQkFBQSxHQUFDcjBCLE9BQU8sQ0FBQ3lwQixPQUFPLGNBQUE0SyxnQkFBQSxlQUFmQSxnQkFBQSxDQUFrQixjQUFjLENBQUMsSUFBRztjQUFFLGNBQWMsRUFBRTtZQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQ2hHcjBCLE9BQU8sQ0FBQ3lwQixPQUFPLElBQUksQ0FBQyxDQUFDO1lBQUE4SyxTQUFBLENBQUEzbEMsQ0FBQTtZQUFBLE9BRUpzTSxLQUFLLElBQUFuSCxNQUFBLENBQUlFLFlBQVksRUFBQUYsTUFBQSxDQUFHcWdDLFFBQVEsR0FBQTMyQixhQUFBLENBQUFBLGFBQUEsS0FBU3VDLE9BQU87Y0FBRXlwQixPQUFPLEVBQVBBO1lBQU8sRUFBRSxDQUFDO1VBQUE7WUFBN0UzdUIsUUFBUSxHQUFBeTVCLFNBQUEsQ0FBQTNrQyxDQUFBO1lBQUEsTUFDVmtMLFFBQVEsQ0FBQzJILE1BQU0sS0FBSyxHQUFHLElBQUkzSCxRQUFRLENBQUMySCxNQUFNLEtBQUssR0FBRztjQUFBOHhCLFNBQUEsQ0FBQTNsQyxDQUFBO2NBQUE7WUFBQTtZQUNwRG9sQyxZQUFZLENBQUMsQ0FBQztZQUFDLE1BQ1QsSUFBSTU0QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7VUFBQTtZQUFBLElBRTlCTixRQUFRLENBQUNLLEVBQUU7Y0FBQW81QixTQUFBLENBQUEzbEMsQ0FBQTtjQUFBO1lBQUE7WUFBQTJsQyxTQUFBLENBQUEzbEMsQ0FBQTtZQUFBLE9BQ1FrTSxRQUFRLENBQUM0NUIsSUFBSSxDQUFDLENBQUM7VUFBQTtZQUEvQno5QixPQUFPLEdBQUFzOUIsU0FBQSxDQUFBM2tDLENBQUE7WUFBQSxNQUNQLElBQUl3TCxLQUFLLENBQUNuRSxPQUFPLElBQUksZ0JBQWdCLENBQUM7VUFBQTtZQUFBLE1BRTFDNkQsUUFBUSxDQUFDMkgsTUFBTSxLQUFLLEdBQUc7Y0FBQTh4QixTQUFBLENBQUEzbEMsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBMmxDLFNBQUEsQ0FBQTFrQyxDQUFBLElBQVMsSUFBSTtVQUFBO1lBQUEsT0FBQTBrQyxTQUFBLENBQUExa0MsQ0FBQSxJQUNqQ2lMLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7UUFBQTtNQUFBLEdBQUE4NEIsUUFBQTtJQUFBLENBQ3ZCO0lBQUEsaUJBQUFRLEdBQUE7TUFBQSxPQUFBVCxNQUFBLENBQUF2aUMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxLQUNELENBQUN1WCxPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRXpGLEtBQUssRUFBRXd3QixZQUFZLENBQy9CLENBQUM7RUFFRCxJQUFNWSxRQUFRLEdBQUcxaEMsV0FBVyxjQUFBekIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUMsU0FBQStqQyxTQUFBO0lBQUEsSUFBQUMsYUFBQSxFQUFBQyxRQUFBLEVBQUFDLFlBQUEsRUFBQUMsa0JBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxXQUFBLEVBQUFDLFFBQUEsRUFBQUMsa0JBQUEsRUFBQXJKLE9BQUEsRUFBQXNKLE1BQUEsRUFBQXYxQixPQUFBLEVBQUE3QixpQkFBQSxFQUFBcTNCLEdBQUE7SUFBQSxPQUFBNWtDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBNGtDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBaG1DLENBQUEsR0FBQWdtQyxTQUFBLENBQUE3bUMsQ0FBQTtRQUFBO1VBQUEsSUFDdEJxYSxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFekYsS0FBSztZQUFBaXlCLFNBQUEsQ0FBQTdtQyxDQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUE2bUMsU0FBQSxDQUFBNWxDLENBQUE7UUFBQTtVQUNuQitlLFVBQVUsQ0FBQyxJQUFJLENBQUM7VUFDaEJ1akIsY0FBYyxDQUFDLEVBQUUsQ0FBQztVQUFDc0QsU0FBQSxDQUFBaG1DLENBQUE7VUFBQWdtQyxTQUFBLENBQUE3bUMsQ0FBQTtVQUFBLE9BRU11ekIsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1FBQUE7VUFBbEQ0UyxRQUFRLEdBQUFVLFNBQUEsQ0FBQTdsQyxDQUFBO1VBQ2Q2L0IsWUFBWSxDQUFDc0YsUUFBUSxDQUFDO1VBQ2hCQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSVUsT0FBTyxFQUFFNTNCLFFBQVEsRUFBRXpKLEtBQUs7WUFBQSxPQUM1Q3FoQyxPQUFPLFNBQU0sQ0FBQyxVQUFDLzhCLEtBQUssRUFBSztjQUN2QkMsT0FBTyxDQUFDQyxJQUFJLElBQUE5RSxNQUFBLENBQUlNLEtBQUssc0JBQW1CLENBQUFzRSxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRTFCLE9BQU8sS0FBSTBCLEtBQUssQ0FBQztjQUNoRSxPQUFPbUYsUUFBUTtZQUNqQixDQUFDLENBQUM7VUFBQTtVQUFBMjNCLFNBQUEsQ0FBQTdtQyxDQUFBO1VBQUEsT0FTTTBDLE9BQU8sQ0FBQ2kyQixHQUFHLENBQUMsQ0FDcEJ5TixZQUFZLENBQUM3UyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFL08sUUFBUSxFQUFFO1VBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUN4RTRoQixZQUFZLENBQUM3UyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUN4RDZTLFlBQVksQ0FBQzdTLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFMWYsTUFBTSxFQUFFLElBQUk7WUFBRXduQixRQUFRLEVBQUU7VUFBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQ3ZGK0ssWUFBWSxDQUFDN1MsVUFBVSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxjQUFjLENBQUMsRUFDN0Q2UyxZQUFZLENBQUM3UyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQzVENlMsWUFBWSxDQUFDN1MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUMzRDZTLFlBQVksQ0FDVjdTLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNuQztZQUFFamYsUUFBUSxFQUFFLEVBQUU7WUFBRTROLE9BQU8sRUFBRSxFQUFFO1lBQUVzQyxRQUFRLEVBQUU7VUFBRyxDQUFDLEVBQzNDLFNBQ0YsQ0FBQyxDQUNGLENBQUM7UUFBQTtVQUFBNmhCLGtCQUFBLEdBQUFRLFNBQUEsQ0FBQTdsQyxDQUFBO1VBQUFzbEMsbUJBQUEsR0FBQXBqQyxjQUFBLENBQUFtakMsa0JBQUE7VUFuQkFFLFlBQVksR0FBQUQsbUJBQUE7VUFDWkUsV0FBVyxHQUFBRixtQkFBQTtVQUNYRyxRQUFRLEdBQUFILG1CQUFBO1VBQ1JJLGtCQUFrQixHQUFBSixtQkFBQTtVQUNsQmpKLE9BQU8sR0FBQWlKLG1CQUFBO1VBQ1BLLE1BQU0sR0FBQUwsbUJBQUE7VUFDTmwxQixPQUFPLEdBQUFrMUIsbUJBQUE7VUFjVHRGLFdBQVcsQ0FBQ3VGLFlBQVksQ0FBQy9oQixRQUFRLElBQUksRUFBRSxDQUFDO1VBQ3hDMmMsVUFBVSxDQUFDcUYsV0FBVyxJQUFJTCxRQUFRLENBQUNqa0IsT0FBTyxJQUFJLEVBQUUsQ0FBQztVQUNqRHlmLGNBQWMsQ0FBQzhFLFFBQVEsQ0FBQ3BMLFFBQVEsTUFBQTZLLGFBQUEsR0FBSUMsUUFBUSxDQUFDWSxHQUFHLGNBQUFiLGFBQUEsdUJBQVpBLGFBQUEsQ0FBYzdLLFFBQVEsS0FBSSxJQUFJLENBQUM7VUFDbkVrRyxZQUFZLENBQUNrRixRQUFRLENBQUM1eUIsTUFBTSxDQUFDO1VBQzdCa3VCLGNBQWMsQ0FBQzJFLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztVQUN4Q3hFLGdCQUFnQixDQUFDN0UsT0FBTyxDQUFDO1VBQ3pCZ0YsYUFBYSxDQUFDc0UsTUFBTSxDQUFDO1VBQ2ZwM0IsaUJBQWlCLEdBQUFWLGFBQUEsQ0FBQUEsYUFBQSxLQUFRdUMsT0FBTztZQUFFa0QsUUFBUSxFQUFFRCxtQkFBbUIsQ0FBQ2pELE9BQU8sQ0FBQ2tELFFBQVEsSUFBSSxFQUFFO1VBQUM7VUFDN0ZtdUIsZUFBZSxDQUFDbHpCLGlCQUFpQixDQUFDO1VBQUNzM0IsU0FBQSxDQUFBN21DLENBQUE7VUFBQTtRQUFBO1VBQUE2bUMsU0FBQSxDQUFBaG1DLENBQUE7VUFBQStsQyxHQUFBLEdBQUFDLFNBQUEsQ0FBQTdsQyxDQUFBO1VBRW5DZ0osT0FBTyxDQUFDRCxLQUFLLENBQUE2OEIsR0FBTSxDQUFDO1VBQ3BCckQsY0FBYyxDQUFDcUQsR0FBQSxDQUFNditCLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQztRQUFDO1VBQUF3K0IsU0FBQSxDQUFBaG1DLENBQUE7VUFFL0RtZixVQUFVLENBQUMsS0FBSyxDQUFDO1VBQUMsT0FBQTZtQixTQUFBLENBQUFqbUMsQ0FBQTtRQUFBO1VBQUEsT0FBQWltQyxTQUFBLENBQUE1bEMsQ0FBQTtNQUFBO0lBQUEsR0FBQWdsQyxRQUFBO0VBQUEsQ0FFckIsSUFBRSxDQUFDMVMsVUFBVSxFQUFFbFosT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUV6RixLQUFLLENBQUMsQ0FBQztFQUVoQ3ZRLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSWdXLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUV6RixLQUFLLEVBQUU7TUFDbEJveEIsUUFBUSxDQUFDLENBQUM7SUFDWjtFQUNGLENBQUMsRUFBRSxDQUFDM3JCLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFekYsS0FBSyxFQUFFb3hCLFFBQVEsQ0FBQyxDQUFDO0VBRTlCM2hDLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxFQUFDZ1csT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXpGLEtBQUssR0FBRTtNQUNuQjB2QixtQkFBbUIsQ0FBQyxJQUFJLENBQUM7TUFDekIsT0FBTzM3QixTQUFTO0lBQ2xCO0lBQ0EsSUFBSSxPQUFPcStCLFdBQVcsS0FBSyxXQUFXLEVBQUUsT0FBT3IrQixTQUFTO0lBQ3hELElBQU1zK0IsVUFBVSxHQUFHcE4sa0JBQWtCLENBQUN4ZixPQUFPLENBQUN6RixLQUFLLENBQUM7SUFDcEQsSUFBTXN5QixTQUFTLE1BQUEvaEMsTUFBQSxDQUFNRSxZQUFZLDJCQUFBRixNQUFBLENBQXdCOGhDLFVBQVUsQ0FBRTtJQUNyRSxJQUFNRSxXQUFXLEdBQUcsSUFBSUgsV0FBVyxDQUFDRSxTQUFTLENBQUM7SUFDOUMsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUk1N0IsS0FBSyxFQUFLO01BQzdCLElBQUk7UUFDRixJQUFNVyxPQUFPLEdBQUd0QyxJQUFJLENBQUNDLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2lRLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUF0UCxPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRXhGLElBQUksTUFBSyxxQkFBcUIsRUFBRTtRQUM3QyxJQUFNNGUsT0FBTyxHQUFHcFosT0FBTyxDQUFDQSxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3JDbTRCLG1CQUFtQixDQUFDO1VBQ2xCcmdCLElBQUksRUFBRXJnQixLQUFLLENBQUNLLE9BQU8sQ0FBQ3NoQixPQUFPLENBQUN0QixJQUFJLENBQUMsR0FBR3NCLE9BQU8sQ0FBQ3RCLElBQUksR0FBRyxFQUFFO1VBQ3JEbEksS0FBSyxFQUFFd0osT0FBTyxDQUFDeEosS0FBSyxJQUFJLENBQUMsQ0FBQztVQUMxQkcsUUFBUSxFQUFFdFksS0FBSyxDQUFDSyxPQUFPLENBQUNzaEIsT0FBTyxDQUFDckosUUFBUSxDQUFDLEdBQUdxSixPQUFPLENBQUNySixRQUFRLEdBQUcsRUFBRTtVQUNqRTRCLFNBQVMsRUFBRXlILE9BQU8sQ0FBQ3pILFNBQVMsSUFBSSxJQUFJalQsSUFBSSxDQUFDLENBQUMsQ0FBQ3F0QixXQUFXLENBQUM7UUFDekQsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDLE9BQU9udUIsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDZCQUE2QixFQUFFQSxLQUFLLENBQUM7TUFDckQ7SUFDRixDQUFDO0lBQ0RvOUIsV0FBVyxDQUFDdDdCLGdCQUFnQixDQUFDLGNBQWMsRUFBRXU3QixXQUFXLENBQUM7SUFDekRELFdBQVcsQ0FBQ0UsT0FBTyxHQUFHLFlBQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sWUFBTTtNQUNYRixXQUFXLENBQUNyN0IsbUJBQW1CLENBQUMsY0FBYyxFQUFFczdCLFdBQVcsQ0FBQztNQUM1REQsV0FBVyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0VBQ0gsQ0FBQyxFQUFFLENBQUNqdEIsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUV6RixLQUFLLENBQUMsQ0FBQztFQUVwQnZRLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxDQUFDZ2dDLGdCQUFnQixFQUFFO0lBQ3ZCeEQsWUFBWSxDQUFDLFVBQUN2MkIsSUFBSSxFQUFLO01BQUEsSUFBQWk5QixrQkFBQTtNQUNyQixJQUFNQyxTQUFTLEdBQUEzNEIsYUFBQSxDQUFBQSxhQUFBLEtBQVMsQ0FBQXZFLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFeVIsS0FBSyxLQUFJLENBQUMsQ0FBQyxHQUFPc29CLGdCQUFnQixDQUFDdG9CLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBRztNQUMvRSxJQUFNMHJCLGdCQUFnQixHQUFBNTRCLGFBQUEsQ0FBQUEsYUFBQSxLQUNoQixDQUFBdkUsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUUyUixZQUFZLEtBQUksQ0FBQyxDQUFDO1FBQzVCQyxRQUFRLEVBQUVtb0IsZ0JBQWdCLENBQUNub0IsUUFBUSxLQUFJNVIsSUFBSSxhQUFKQSxJQUFJLGdCQUFBaTlCLGtCQUFBLEdBQUpqOUIsSUFBSSxDQUFFMlIsWUFBWSxjQUFBc3JCLGtCQUFBLHVCQUFsQkEsa0JBQUEsQ0FBb0JyckIsUUFBUSxLQUFJO01BQUUsRUFDMUU7TUFDRCxJQUFJLENBQUM1UixJQUFJLEVBQUU7UUFDVCxPQUFPO1VBQUV5UixLQUFLLEVBQUV5ckIsU0FBUztVQUFFdnJCLFlBQVksRUFBRXdyQjtRQUFpQixDQUFDO01BQzdEO01BQ0EsT0FBQTU0QixhQUFBLENBQUFBLGFBQUEsS0FBWXZFLElBQUk7UUFBRXlSLEtBQUssRUFBRXlyQixTQUFTO1FBQUV2ckIsWUFBWSxFQUFFd3JCO01BQWdCO0lBQ3BFLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDcEQsZ0JBQWdCLENBQUMsQ0FBQztFQUV0QmhnQyxTQUFTLENBQUMsWUFBTTtJQUNkLElBQU1xakMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSWw4QixLQUFLLEVBQUs7TUFDbkMsSUFBTW04QixNQUFNLEdBQUcsQ0FBQW44QixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW84QixNQUFNLE1BQUlwOEIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV6QixLQUFLO01BQzVDLElBQU0xQixPQUFPLEdBQ1gsQ0FBQXMvQixNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRXQvQixPQUFPLE1BQ2ZtRCxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW5ELE9BQU8sTUFDYixPQUFPcy9CLE1BQU0sS0FBSyxRQUFRLEdBQUdBLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztNQUM5RDM5QixPQUFPLENBQUNELEtBQUssQ0FBQyxrQkFBa0IsRUFBRTQ5QixNQUFNLElBQUluOEIsS0FBSyxDQUFDO01BQ2xEazVCLGFBQWEsQ0FBQ3I4QixPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNEckQsTUFBTSxDQUFDNkcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFNjdCLGlCQUFpQixDQUFDO0lBQ25EMWlDLE1BQU0sQ0FBQzZHLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFNjdCLGlCQUFpQixDQUFDO0lBQ2hFLE9BQU8sWUFBTTtNQUNYMWlDLE1BQU0sQ0FBQzhHLG1CQUFtQixDQUFDLE9BQU8sRUFBRTQ3QixpQkFBaUIsQ0FBQztNQUN0RDFpQyxNQUFNLENBQUM4RyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRTQ3QixpQkFBaUIsQ0FBQztJQUNyRSxDQUFDO0VBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOcmpDLFNBQVMsQ0FDUDtJQUFBLE9BQU0sWUFBTTtNQUNWOGdDLGlCQUFpQixDQUFDMTVCLE9BQU8sQ0FBQ3dSLE9BQU8sQ0FBQyxVQUFDaFMsS0FBSztRQUFBLE9BQUs0OEIsWUFBWSxDQUFDNThCLEtBQUssQ0FBQztNQUFBLEVBQUM7TUFDakVrNkIsaUJBQWlCLENBQUMxNUIsT0FBTyxDQUFDcThCLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7RUFBQSxHQUNELEVBQ0YsQ0FBQztFQUVELElBQU1DLFdBQVc7SUFBQSxJQUFBQyxNQUFBLEdBQUFubEMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQStsQyxTQUFPdDVCLFFBQVEsRUFBRXBILFFBQVE7TUFBQSxJQUFBMmdDLGtCQUFBLEVBQUFoOEIsUUFBQSxFQUFBdVAsSUFBQSxFQUFBMHNCLGNBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFwbUMsWUFBQSxHQUFBQyxDQUFBLFdBQUFvbUMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF4bkMsQ0FBQSxHQUFBd25DLFNBQUEsQ0FBQXJvQyxDQUFBO1VBQUE7WUFDM0MyakMsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNWdUUsa0JBQWtCLEdBQUcxNUIsWUFBWSxDQUFDRyxRQUFRLENBQUM7WUFBQSxJQUM1Q3U1QixrQkFBa0I7Y0FBQUcsU0FBQSxDQUFBcm9DLENBQUE7Y0FBQTtZQUFBO1lBQ3JCMmpDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQztZQUFDLE9BQUEwRSxTQUFBLENBQUFwbkMsQ0FBQTtVQUFBO1lBQUFvbkMsU0FBQSxDQUFBeG5DLENBQUE7WUFBQXduQyxTQUFBLENBQUFyb0MsQ0FBQTtZQUFBLE9BSXBCc00sS0FBSyxJQUFBbkgsTUFBQSxDQUFJRSxZQUFZLGFBQVU7Y0FDcER5MEIsTUFBTSxFQUFFLE1BQU07Y0FDZGUsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRTtjQUFtQixDQUFDO2NBQy9DbFQsSUFBSSxFQUFFOWQsSUFBSSxDQUFDWSxTQUFTLENBQUM7Z0JBQUVrRSxRQUFRLEVBQUV1NUIsa0JBQWtCO2dCQUFFM2dDLFFBQVEsRUFBUkE7Y0FBUyxDQUFDO1lBQ2pFLENBQUMsQ0FBQztVQUFBO1lBSkkyRSxRQUFRLEdBQUFtOEIsU0FBQSxDQUFBcm5DLENBQUE7WUFBQXFuQyxTQUFBLENBQUFyb0MsQ0FBQTtZQUFBLE9BS0trTSxRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO1VBQUE7WUFBNUJnUCxJQUFJLEdBQUE0c0IsU0FBQSxDQUFBcm5DLENBQUE7WUFBQSxNQUNOLENBQUNrTCxRQUFRLENBQUNLLEVBQUUsSUFBSSxDQUFDa1AsSUFBSSxDQUFDNnNCLE9BQU87Y0FBQUQsU0FBQSxDQUFBcm9DLENBQUE7Y0FBQTtZQUFBO1lBQy9CMmpDLFlBQVksQ0FBQ2xvQixJQUFJLENBQUNwVCxPQUFPLElBQUksMkJBQTJCLENBQUM7WUFBQyxPQUFBZ2dDLFNBQUEsQ0FBQXBuQyxDQUFBO1VBQUE7WUFHdERrbkMsY0FBYyxHQUFHMTVCLG1CQUFtQixDQUFBSSxhQUFBLENBQUFBLGFBQUEsS0FBTTRNLElBQUk7Y0FBRTlNLFFBQVEsRUFBRXU1QjtZQUFrQixFQUFFLENBQUM7WUFDckZ2K0IsWUFBWSxDQUFDYSxPQUFPLENBQUMsZ0JBQWdCLEVBQUVYLElBQUksQ0FBQ1ksU0FBUyxDQUFDMDlCLGNBQWMsQ0FBQyxDQUFDO1lBQ3RFakksVUFBVSxDQUFDaUksY0FBYyxDQUFDO1lBQUNFLFNBQUEsQ0FBQXJvQyxDQUFBO1lBQUE7VUFBQTtZQUFBcW9DLFNBQUEsQ0FBQXhuQyxDQUFBO1lBQUF1bkMsR0FBQSxHQUFBQyxTQUFBLENBQUFybkMsQ0FBQTtZQUUzQjJpQyxZQUFZLENBQUMsbUJBQW1CLENBQUM7VUFBQztZQUFBLE9BQUEwRSxTQUFBLENBQUFwbkMsQ0FBQTtRQUFBO01BQUEsR0FBQWduQyxRQUFBO0lBQUEsQ0FFckM7SUFBQSxnQkF4QktGLFdBQVdBLENBQUFRLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFSLE1BQUEsQ0FBQWpsQyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBd0JoQjtFQUVELElBQU0ybEMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QkEsQ0FBSWpqQyxFQUFFLEVBQUUrZCxLQUFLLEVBQUU5aEIsS0FBSyxFQUFLO0lBQ3BEMC9CLFVBQVUsQ0FBQyxVQUFDNzJCLElBQUk7TUFBQSxPQUFLQSxJQUFJLENBQUNvQyxHQUFHLENBQUMsVUFBQzhDLE1BQU07UUFBQSxPQUFNQSxNQUFNLENBQUNoSyxFQUFFLEtBQUtBLEVBQUUsR0FBQXFKLGFBQUEsQ0FBQUEsYUFBQSxLQUFRVyxNQUFNLE9BQUFnVSxlQUFBLEtBQUdELEtBQUssRUFBRzloQixLQUFLLEtBQUsrTixNQUFNO01BQUEsQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUN6RyxDQUFDO0VBRUQsSUFBTWs1Qix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFJdnBCLE9BQU87SUFBQSxPQUFBdFEsYUFBQSxDQUFBQSxhQUFBLEtBQ25Dc1EsT0FBTztNQUNWbFgsTUFBTSxFQUFFeEgsTUFBTSxDQUFDa29DLFdBQVcsQ0FDeEJsb0MsTUFBTSxDQUFDNGMsT0FBTyxDQUFDOEIsT0FBTyxDQUFDbFgsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN5RSxHQUFHLENBQUMsVUFBQWs4QixNQUFBO1FBQUEsSUFBQUMsTUFBQSxHQUFBM2xDLGNBQUEsQ0FBQTBsQyxNQUFBO1VBQUV6aUMsR0FBRyxHQUFBMGlDLE1BQUE7VUFBRXBuQyxLQUFLLEdBQUFvbkMsTUFBQTtRQUFBLE9BQU0sQ0FBQzFpQyxHQUFHLEVBQUUxRSxLQUFLLEtBQUssRUFBRSxJQUFJQSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksR0FBR2tNLE1BQU0sQ0FBQ2xNLEtBQUssQ0FBQyxDQUFDO01BQUEsRUFDeEg7SUFBQztFQUFBLENBQ0Q7RUFFRixJQUFNcW5DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUE7SUFBQSxJQUFJQyxVQUFVLEdBQUFqbUMsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBNkYsU0FBQSxHQUFBN0YsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBLE9BQUswTCxZQUFZLENBQUN1NkIsVUFBVSxDQUFDbjZCLEtBQUssSUFBSW02QixVQUFVLENBQUNwbEMsSUFBSSxJQUFJLEVBQUUsQ0FBQztFQUFBO0VBRXRHLElBQU1xbEMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUEyQztJQUFBLElBQUFDLHFCQUFBO0lBQUEsSUFBdkNGLFVBQVUsR0FBQWptQyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUE2RixTQUFBLEdBQUE3RixTQUFBLE1BQUcsQ0FBQyxDQUFDO0lBQUEsSUFBRW9tQyxhQUFhLEdBQUFwbUMsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBNkYsU0FBQSxHQUFBN0YsU0FBQSxNQUFHLENBQUM7SUFDNUQsSUFBTXFKLE9BQU8sR0FBRztNQUNkeEksSUFBSSxFQUFFb2xDLFVBQVUsQ0FBQ3BsQyxJQUFJLElBQUksRUFBRTtNQUMzQndsQyxRQUFRLEVBQUUsSUFBSTtNQUNkeGhDLFdBQVcsRUFBRW9oQyxVQUFVLENBQUNwaEMsV0FBVyxJQUFJLEVBQUU7TUFDekNILE1BQU0sRUFBRXVoQyxVQUFVLENBQUN2aEMsTUFBTSxJQUFJLEVBQUU7TUFDL0JFLFNBQVMsRUFBRXFoQyxVQUFVLENBQUNyaEMsU0FBUyxJQUFJLEVBQUU7TUFDckNELEtBQUssRUFBRXNoQyxVQUFVLENBQUN0aEMsS0FBSyxJQUFJLEVBQUU7TUFDN0JtSCxLQUFLLEVBQUVrNkIsaUJBQWlCLENBQUNDLFVBQVUsQ0FBQztNQUNwQ3hoQyxRQUFRLEVBQUV3aEMsVUFBVSxDQUFDeGhDLFFBQVEsSUFBSSxFQUFFO01BQ25DSyxLQUFLLEVBQUVtaEMsVUFBVSxDQUFDbmhDLEtBQUssSUFBSSxFQUFFO01BQzdCQyxVQUFVLEVBQUVraEMsVUFBVSxDQUFDbGhDLFVBQVUsSUFBSSxFQUFFO01BQ3ZDQyxRQUFRLEVBQUVpaEMsVUFBVSxDQUFDamhDLFFBQVEsS0FBSyxLQUFLO01BQ3ZDc2hDLFVBQVUsRUFBRXo3QixNQUFNLEVBQUFzN0IscUJBQUEsR0FBQ0YsVUFBVSxDQUFDSyxVQUFVLGNBQUFILHFCQUFBLGNBQUFBLHFCQUFBLEdBQUlDLGFBQWEsQ0FBQyxJQUFJO0lBQ2hFLENBQUM7SUFDRCxJQUFJSCxVQUFVLENBQUN2akMsRUFBRSxFQUFFO01BQ2pCMkcsT0FBTyxDQUFDM0csRUFBRSxHQUFHdWpDLFVBQVUsQ0FBQ3ZqQyxFQUFFO0lBQzVCO0lBQ0EsT0FBTzJHLE9BQU87RUFDaEIsQ0FBQztFQUVELElBQU1rOUIsZ0JBQWdCO0lBQUEsSUFBQUMsTUFBQSxHQUFBem1DLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUFxbkMsU0FBTy81QixNQUFNO01BQUEsSUFBQXRELFFBQUEsRUFBQXM5QixhQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBem5DLFlBQUEsR0FBQUMsQ0FBQSxXQUFBeW5DLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBN29DLENBQUEsR0FBQTZvQyxTQUFBLENBQUExcEMsQ0FBQTtVQUFBO1lBQUEsSUFDL0J3UCxNQUFNLGFBQU5BLE1BQU0sZUFBTkEsTUFBTSxDQUFFaEssRUFBRTtjQUFBa2tDLFNBQUEsQ0FBQTFwQyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUEwcEMsU0FBQSxDQUFBem9DLENBQUE7VUFBQTtZQUFBeW9DLFNBQUEsQ0FBQTdvQyxDQUFBO1lBQUE2b0MsU0FBQSxDQUFBMXBDLENBQUE7WUFBQSxPQUVVdXpCLFVBQVUsYUFBQXB1QixNQUFBLENBQWEwMEIsa0JBQWtCLENBQUNycUIsTUFBTSxDQUFDaEssRUFBRSxDQUFDLEdBQUk7Y0FBRXMwQixNQUFNLEVBQUUsS0FBSztjQUFFblMsSUFBSSxFQUFFOWQsSUFBSSxDQUFDWSxTQUFTLENBQUN1K0Isa0JBQWtCLENBQUN4NUIsTUFBTSxDQUFDO1lBQUUsQ0FBQyxDQUFDO1VBQUE7WUFBN0l0RCxRQUFRLEdBQUF3OUIsU0FBQSxDQUFBMW9DLENBQUE7WUFDUndvQyxhQUFhLEdBQUd0OUIsUUFBUSxJQUFJc0QsTUFBTTtZQUN4QzJ4QixVQUFVLENBQUMsVUFBQzcyQixJQUFJO2NBQUEsT0FBS0EsSUFBSSxDQUFDb0MsR0FBRyxDQUFDLFVBQUNxSyxJQUFJO2dCQUFBLE9BQU1BLElBQUksQ0FBQ3ZSLEVBQUUsS0FBS2drQyxhQUFhLENBQUNoa0MsRUFBRSxHQUFBcUosYUFBQSxDQUFBQSxhQUFBLEtBQVFrSSxJQUFJLEdBQUt5eUIsYUFBYSxJQUFLenlCLElBQUk7Y0FBQSxDQUFDLENBQUM7WUFBQSxFQUFDO1lBQUMyeUIsU0FBQSxDQUFBMXBDLENBQUE7WUFBQTtVQUFBO1lBQUEwcEMsU0FBQSxDQUFBN29DLENBQUE7WUFBQTRvQyxHQUFBLEdBQUFDLFNBQUEsQ0FBQTFvQyxDQUFBO1lBRWhIdWlDLGNBQWMsQ0FBQ2tHLEdBQUEsQ0FBTXBoQyxPQUFPLENBQUM7VUFBQztZQUFBLE9BQUFxaEMsU0FBQSxDQUFBem9DLENBQUE7UUFBQTtNQUFBLEdBQUFzb0MsUUFBQTtJQUFBLENBRWpDO0lBQUEsZ0JBVEtGLGdCQUFnQkEsQ0FBQU0sR0FBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQXZtQyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBU3JCO0VBRUQsSUFBTThtQyxrQkFBa0I7SUFBQSxJQUFBQyxNQUFBLEdBQUFobkMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQTRuQyxVQUFPdDZCLE1BQU07TUFBQSxJQUFBa0QsU0FBQSxFQUFBcTNCLEdBQUE7TUFBQSxPQUFBL25DLFlBQUEsR0FBQUMsQ0FBQSxXQUFBK25DLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBbnBDLENBQUEsR0FBQW1wQyxVQUFBLENBQUFocUMsQ0FBQTtVQUFBO1lBQUEsSUFDakN3UCxNQUFNLGFBQU5BLE1BQU0sZUFBTkEsTUFBTSxDQUFFaEssRUFBRTtjQUFBd2tDLFVBQUEsQ0FBQWhxQyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFncUMsVUFBQSxDQUFBL29DLENBQUE7VUFBQTtZQUFBK29DLFVBQUEsQ0FBQWhxQyxDQUFBO1lBQUEsT0FDU2dsQyxjQUFjLENBQUM7Y0FDckM1OEIsS0FBSyxFQUFFLGtCQUFrQjtjQUN6QkMsT0FBTyw4Q0FBQWxELE1BQUEsQ0FBYXFLLE1BQU0sQ0FBQzdMLElBQUksSUFBSSxXQUFXLHlQQUFnRDtjQUM5RjJFLFlBQVksRUFBRSxTQUFTO2NBQ3ZCRSxJQUFJLEVBQUU7WUFDUixDQUFDLENBQUM7VUFBQTtZQUxJa0ssU0FBUyxHQUFBczNCLFVBQUEsQ0FBQWhwQyxDQUFBO1lBQUEsSUFNVjBSLFNBQVM7Y0FBQXMzQixVQUFBLENBQUFocUMsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBZ3FDLFVBQUEsQ0FBQS9vQyxDQUFBO1VBQUE7WUFBQStvQyxVQUFBLENBQUFucEMsQ0FBQTtZQUFBbXBDLFVBQUEsQ0FBQWhxQyxDQUFBO1lBQUEsT0FFTnV6QixVQUFVLGFBQUFwdUIsTUFBQSxDQUFhMDBCLGtCQUFrQixDQUFDcnFCLE1BQU0sQ0FBQ2hLLEVBQUUsQ0FBQyxHQUFJO2NBQUVzMEIsTUFBTSxFQUFFO1lBQVMsQ0FBQyxDQUFDO1VBQUE7WUFDbkZrTSxRQUFRLENBQUMsQ0FBQztZQUFDZ0UsVUFBQSxDQUFBaHFDLENBQUE7WUFBQTtVQUFBO1lBQUFncUMsVUFBQSxDQUFBbnBDLENBQUE7WUFBQWtwQyxHQUFBLEdBQUFDLFVBQUEsQ0FBQWhwQyxDQUFBO1lBRVh1aUMsY0FBYyxDQUFDd0csR0FBQSxDQUFNMWhDLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQztVQUFDO1lBQUEsT0FBQTJoQyxVQUFBLENBQUEvb0MsQ0FBQTtRQUFBO01BQUEsR0FBQTZvQyxTQUFBO0lBQUEsQ0FFakU7SUFBQSxnQkFmS0Ysa0JBQWtCQSxDQUFBSyxHQUFBO01BQUEsT0FBQUosTUFBQSxDQUFBOW1DLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FldkI7RUFFRCxJQUFNb25DLGVBQWU7SUFBQSxJQUFBQyxNQUFBLEdBQUF0bkMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQWtvQyxVQUFPaitCLE9BQU87TUFBQSxJQUFBaytCLGdCQUFBLEVBQUE3a0MsRUFBQSxFQUFBbWlCLElBQUEsRUFBQTJpQixJQUFBO01BQUEsT0FBQXRvQyxZQUFBLEdBQUFDLENBQUEsV0FBQXNvQyxVQUFBO1FBQUEsa0JBQUFBLFVBQUEsQ0FBQTFwQyxDQUFBLEdBQUEwcEMsVUFBQSxDQUFBdnFDLENBQUE7VUFBQTtZQUFBLE1BQ2hDLENBQUNtTSxPQUFPLENBQUN4SSxJQUFJLElBQUksQ0FBQ3dJLE9BQU8sQ0FBQzVFLFFBQVE7Y0FBQWdqQyxVQUFBLENBQUF2cUMsQ0FBQTtjQUFBO1lBQUE7WUFDcEN1akMsY0FBYyxDQUFDLHVDQUF1QyxDQUFDO1lBQUMsT0FBQWdILFVBQUEsQ0FBQXRwQyxDQUFBO1VBQUE7WUFBQXNwQyxVQUFBLENBQUExcEMsQ0FBQTtZQUlsRHdwQyxnQkFBZ0IsR0FBR3JCLGtCQUFrQixDQUFBbjZCLGFBQUEsQ0FBQUEsYUFBQSxLQUFNMUMsT0FBTztjQUFFM0csRUFBRSxFQUFFbUQ7WUFBUyxJQUFJdVosT0FBTyxDQUFDOWdCLE1BQU0sQ0FBQztZQUNsRm9FLEVBQUUsR0FBYzZrQyxnQkFBZ0IsQ0FBaEM3a0MsRUFBRSxFQUFLbWlCLElBQUksR0FBQTZpQix3QkFBQSxDQUFLSCxnQkFBZ0IsRUFBQUksU0FBQTtZQUFBRixVQUFBLENBQUF2cUMsQ0FBQTtZQUFBLE9BQ2xDdXpCLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Y0FBRXVHLE1BQU0sRUFBRSxNQUFNO2NBQUVuUyxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQ2tkLElBQUk7WUFBRSxDQUFDLENBQUM7VUFBQTtZQUM1RXFlLFFBQVEsQ0FBQyxDQUFDO1lBQUN1RSxVQUFBLENBQUF2cUMsQ0FBQTtZQUFBO1VBQUE7WUFBQXVxQyxVQUFBLENBQUExcEMsQ0FBQTtZQUFBeXBDLElBQUEsR0FBQUMsVUFBQSxDQUFBdnBDLENBQUE7WUFFWHVpQyxjQUFjLENBQUMrRyxJQUFBLENBQU1qaUMsT0FBTyxJQUFJLDZCQUE2QixDQUFDO1VBQUM7WUFBQSxPQUFBa2lDLFVBQUEsQ0FBQXRwQyxDQUFBO1FBQUE7TUFBQSxHQUFBbXBDLFNBQUE7SUFBQSxDQUVsRTtJQUFBLGdCQWJLRixlQUFlQSxDQUFBUSxHQUFBO01BQUEsT0FBQVAsTUFBQSxDQUFBcG5DLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FhcEI7RUFFRCxJQUFNNm5DLGlCQUFpQixHQUFHcm1DLFdBQVc7SUFBQSxJQUFBc21DLE1BQUEsR0FBQS9uQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FDbkMsU0FBQTJvQyxVQUFPMXJCLE9BQU87TUFBQSxJQUFBMnJCLElBQUE7TUFBQSxPQUFBOW9DLFlBQUEsR0FBQUMsQ0FBQSxXQUFBOG9DLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBbHFDLENBQUEsR0FBQWtxQyxVQUFBLENBQUEvcUMsQ0FBQTtVQUFBO1lBQUEsSUFDUG1mLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUUzWixFQUFFO2NBQUF1bEMsVUFBQSxDQUFBL3FDLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQStxQyxVQUFBLENBQUE5cEMsQ0FBQTtVQUFBO1lBQUE4cEMsVUFBQSxDQUFBbHFDLENBQUE7WUFBQWtxQyxVQUFBLENBQUEvcUMsQ0FBQTtZQUFBLE9BRVJ1ekIsVUFBVSxtQkFBQXB1QixNQUFBLENBQW1CMDBCLGtCQUFrQixDQUFDMWEsT0FBTyxDQUFDM1osRUFBRSxDQUFDLEdBQUk7Y0FDbkVzMEIsTUFBTSxFQUFFLEtBQUs7Y0FDYm5TLElBQUksRUFBRTlkLElBQUksQ0FBQ1ksU0FBUyxDQUFDaStCLHVCQUF1QixDQUFDdnBCLE9BQU8sQ0FBQztZQUN2RCxDQUFDLENBQUM7VUFBQTtZQUFBNHJCLFVBQUEsQ0FBQS9xQyxDQUFBO1lBQUE7VUFBQTtZQUFBK3FDLFVBQUEsQ0FBQWxxQyxDQUFBO1lBQUFpcUMsSUFBQSxHQUFBQyxVQUFBLENBQUEvcEMsQ0FBQTtZQUVGdWlDLGNBQWMsQ0FBQ3VILElBQUEsQ0FBTXppQyxPQUFPLElBQUksNkJBQTZCLENBQUM7VUFBQztZQUFBLE9BQUEwaUMsVUFBQSxDQUFBOXBDLENBQUE7UUFBQTtNQUFBLEdBQUE0cEMsU0FBQTtJQUFBLENBRWxFO0lBQUEsaUJBQUFHLEdBQUE7TUFBQSxPQUFBSixNQUFBLENBQUE3bkMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxLQUNELENBQUN5d0IsVUFBVSxDQUNiLENBQUM7RUFFRCxJQUFNMFgsdUJBQXVCLEdBQUczbUMsV0FBVyxDQUN6QyxVQUFDNmEsT0FBTyxFQUFLO0lBQ1gsSUFBSSxFQUFDQSxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFM1osRUFBRSxHQUFFO0lBQ2xCLElBQU0wbEMsTUFBTSxHQUFHL0YsaUJBQWlCLENBQUMxNUIsT0FBTztJQUN4QyxJQUFNMC9CLGFBQWEsR0FBR0QsTUFBTSxDQUFDL3RCLEdBQUcsQ0FBQ2dDLE9BQU8sQ0FBQzNaLEVBQUUsQ0FBQztJQUM1QyxJQUFJMmxDLGFBQWEsRUFBRXRELFlBQVksQ0FBQ3NELGFBQWEsQ0FBQztJQUM5QyxJQUFNbGdDLEtBQUssR0FBR21nQyxVQUFVLENBQUMsWUFBTTtNQUM3QlQsaUJBQWlCLENBQUN4ckIsT0FBTyxDQUFDO01BQzFCK3JCLE1BQU0sVUFBTyxDQUFDL3JCLE9BQU8sQ0FBQzNaLEVBQUUsQ0FBQztJQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1AwbEMsTUFBTSxDQUFDOXRCLEdBQUcsQ0FBQytCLE9BQU8sQ0FBQzNaLEVBQUUsRUFBRXlGLEtBQUssQ0FBQztFQUMvQixDQUFDLEVBQ0QsQ0FBQzAvQixpQkFBaUIsQ0FDcEIsQ0FBQztFQUVELElBQU1VLG1CQUFtQjtJQUFBLElBQUFDLE1BQUEsR0FBQXpvQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBcXBDLFVBQU9wc0IsT0FBTztNQUFBLElBQUF6TSxTQUFBLEVBQUE4NEIsSUFBQTtNQUFBLE9BQUF4cEMsWUFBQSxHQUFBQyxDQUFBLFdBQUF3cEMsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUE1cUMsQ0FBQSxHQUFBNHFDLFVBQUEsQ0FBQXpyQyxDQUFBO1VBQUE7WUFBQSxJQUNuQ21mLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUUzWixFQUFFO2NBQUFpbUMsVUFBQSxDQUFBenJDLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQXlyQyxVQUFBLENBQUF4cUMsQ0FBQTtVQUFBO1lBQUF3cUMsVUFBQSxDQUFBenJDLENBQUE7WUFBQSxPQUNRZ2xDLGNBQWMsQ0FBQztjQUNyQzU4QixLQUFLLEVBQUUsaUJBQWlCO2NBQ3hCQyxPQUFPLDhDQUFBbEQsTUFBQSxDQUFhZ2EsT0FBTyxDQUFDeGIsSUFBSSxJQUFJLGNBQWMsb0ZBQWtCO2NBQ3BFMkUsWUFBWSxFQUFFLFNBQVM7Y0FDdkJFLElBQUksRUFBRTtZQUNSLENBQUMsQ0FBQztVQUFBO1lBTElrSyxTQUFTLEdBQUErNEIsVUFBQSxDQUFBenFDLENBQUE7WUFBQSxJQU1WMFIsU0FBUztjQUFBKzRCLFVBQUEsQ0FBQXpyQyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUF5ckMsVUFBQSxDQUFBeHFDLENBQUE7VUFBQTtZQUFBd3FDLFVBQUEsQ0FBQTVxQyxDQUFBO1lBQUE0cUMsVUFBQSxDQUFBenJDLENBQUE7WUFBQSxPQUVOdXpCLFVBQVUsbUJBQUFwdUIsTUFBQSxDQUFtQjAwQixrQkFBa0IsQ0FBQzFhLE9BQU8sQ0FBQzNaLEVBQUUsQ0FBQyxHQUFJO2NBQUVzMEIsTUFBTSxFQUFFO1lBQVMsQ0FBQyxDQUFDO1VBQUE7WUFDMUZrTSxRQUFRLENBQUMsQ0FBQztZQUFDeUYsVUFBQSxDQUFBenJDLENBQUE7WUFBQTtVQUFBO1lBQUF5ckMsVUFBQSxDQUFBNXFDLENBQUE7WUFBQTJxQyxJQUFBLEdBQUFDLFVBQUEsQ0FBQXpxQyxDQUFBO1lBRVh1aUMsY0FBYyxDQUFDaUksSUFBQSxDQUFNbmpDLE9BQU8sSUFBSSwyQkFBMkIsQ0FBQztVQUFDO1lBQUEsT0FBQW9qQyxVQUFBLENBQUF4cUMsQ0FBQTtRQUFBO01BQUEsR0FBQXNxQyxTQUFBO0lBQUEsQ0FFaEU7SUFBQSxnQkFmS0YsbUJBQW1CQSxDQUFBSyxJQUFBO01BQUEsT0FBQUosTUFBQSxDQUFBdm9DLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FleEI7RUFFRCxJQUFNNm9DLGdCQUFnQjtJQUFBLElBQUFDLE1BQUEsR0FBQS9vQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBMnBDLFVBQU8xL0IsT0FBTztNQUFBLElBQUEyL0IsSUFBQTtNQUFBLE9BQUE5cEMsWUFBQSxHQUFBQyxDQUFBLFdBQUE4cEMsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUFsckMsQ0FBQSxHQUFBa3JDLFVBQUEsQ0FBQS9yQyxDQUFBO1VBQUE7WUFBQSxJQUNoQ21NLE9BQU8sQ0FBQ3hJLElBQUk7Y0FBQW9vQyxVQUFBLENBQUEvckMsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBK3JDLFVBQUEsQ0FBQTlxQyxDQUFBO1VBQUE7WUFBQThxQyxVQUFBLENBQUFsckMsQ0FBQTtZQUFBa3JDLFVBQUEsQ0FBQS9yQyxDQUFBO1lBQUEsT0FFVHV6QixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Y0FBRXVHLE1BQU0sRUFBRSxNQUFNO2NBQUVuUyxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQ2krQix1QkFBdUIsQ0FBQ3Y4QixPQUFPLENBQUM7WUFBRSxDQUFDLENBQUM7VUFBQTtZQUM5RzY1QixRQUFRLENBQUMsQ0FBQztZQUFDK0YsVUFBQSxDQUFBL3JDLENBQUE7WUFBQTtVQUFBO1lBQUErckMsVUFBQSxDQUFBbHJDLENBQUE7WUFBQWlyQyxJQUFBLEdBQUFDLFVBQUEsQ0FBQS9xQyxDQUFBO1lBRVh1aUMsY0FBYyxDQUFDdUksSUFBQSxDQUFNempDLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQztVQUFDO1lBQUEsT0FBQTBqQyxVQUFBLENBQUE5cUMsQ0FBQTtRQUFBO01BQUEsR0FBQTRxQyxTQUFBO0lBQUEsQ0FFakU7SUFBQSxnQkFSS0YsZ0JBQWdCQSxDQUFBSyxJQUFBO01BQUEsT0FBQUosTUFBQSxDQUFBN29DLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FRckI7RUFFRCxJQUFNbXBDLHdCQUF3QixHQUFHM25DLFdBQVcsQ0FDMUMsVUFBQ2tCLEVBQUUsRUFBRStkLEtBQUssRUFBRTloQixLQUFLLEVBQUs7SUFDcEJ1L0IsV0FBVyxDQUFDLFVBQUMxMkIsSUFBSTtNQUFBLE9BQUtBLElBQUksQ0FBQ29DLEdBQUcsQ0FBQyxVQUFDeVMsT0FBTztRQUFBLE9BQU1BLE9BQU8sQ0FBQzNaLEVBQUUsS0FBS0EsRUFBRSxHQUFBcUosYUFBQSxDQUFBQSxhQUFBLEtBQVFzUSxPQUFPLE9BQUFxRSxlQUFBLEtBQUdELEtBQUssRUFBRzloQixLQUFLLEtBQUswZCxPQUFPO01BQUEsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUM1RyxJQUFNeFQsTUFBTSxHQUFHNlksUUFBUSxDQUFDcEIsSUFBSSxDQUFDLFVBQUNqRSxPQUFPO01BQUEsT0FBS0EsT0FBTyxDQUFDM1osRUFBRSxLQUFLQSxFQUFFO0lBQUEsRUFBQztJQUM1RCxJQUFJbUcsTUFBTSxFQUFFO01BQ1ZzL0IsdUJBQXVCLENBQUFwOEIsYUFBQSxDQUFBQSxhQUFBLEtBQU1sRCxNQUFNLE9BQUE2WCxlQUFBLEtBQUdELEtBQUssRUFBRzloQixLQUFLLEVBQUUsQ0FBQztJQUN4RDtFQUNGLENBQUMsRUFDRCxDQUFDK2lCLFFBQVEsRUFBRXltQix1QkFBdUIsQ0FDcEMsQ0FBQztFQUVELElBQU1pQix3QkFBd0IsR0FBRzVuQyxXQUFXLENBQzFDLFVBQUM2bkMsU0FBUyxFQUFFcjlCLFFBQVEsRUFBRXJOLEtBQUssRUFBSztJQUM5QnUvQixXQUFXLENBQUMsVUFBQzEyQixJQUFJO01BQUEsT0FDZkEsSUFBSSxDQUFDb0MsR0FBRyxDQUFDLFVBQUN5UyxPQUFPLEVBQUs7UUFDcEIsSUFBSUEsT0FBTyxDQUFDM1osRUFBRSxLQUFLMm1DLFNBQVMsRUFBRSxPQUFPaHRCLE9BQU87UUFDNUMsT0FBQXRRLGFBQUEsQ0FBQUEsYUFBQSxLQUNLc1EsT0FBTztVQUNWbFgsTUFBTSxFQUFBNEcsYUFBQSxDQUFBQSxhQUFBLEtBQVFzUSxPQUFPLENBQUNsWCxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQUF1YixlQUFBLEtBQUkxVSxRQUFRLEVBQUdyTixLQUFLO1FBQUU7TUFFNUQsQ0FBQyxDQUFDO0lBQUEsQ0FDSixDQUFDO0lBQ0QsSUFBTWtLLE1BQU0sR0FBRzZZLFFBQVEsQ0FBQ3BCLElBQUksQ0FBQyxVQUFDakUsT0FBTztNQUFBLE9BQUtBLE9BQU8sQ0FBQzNaLEVBQUUsS0FBSzJtQyxTQUFTO0lBQUEsRUFBQztJQUNuRSxJQUFJeGdDLE1BQU0sRUFBRTtNQUNWcy9CLHVCQUF1QixDQUFBcDhCLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQmxELE1BQU07UUFDVDFELE1BQU0sRUFBQTRHLGFBQUEsQ0FBQUEsYUFBQSxLQUFRbEQsTUFBTSxDQUFDMUQsTUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFBdWIsZUFBQSxLQUFJMVUsUUFBUSxFQUFHck4sS0FBSztNQUFFLEVBQ3hELENBQUM7SUFDSjtFQUNGLENBQUMsRUFDRCxDQUFDK2lCLFFBQVEsRUFBRXltQix1QkFBdUIsQ0FDcEMsQ0FBQztFQUVELElBQU1tQixlQUFlO0lBQUEsSUFBQUMsTUFBQSxHQUFBeHBDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUFvcUMsVUFBT0MsT0FBTztNQUFBLElBQUFDLElBQUE7TUFBQSxPQUFBeHFDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBd3FDLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBNXJDLENBQUEsR0FBQTRyQyxVQUFBLENBQUF6c0MsQ0FBQTtVQUFBO1lBQUF5c0MsVUFBQSxDQUFBNXJDLENBQUE7WUFBQTRyQyxVQUFBLENBQUF6c0MsQ0FBQTtZQUFBLE9BRTVCdXpCLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Y0FBRXVHLE1BQU0sRUFBRSxNQUFNO2NBQUVuUyxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQztnQkFBRW96QixZQUFZLEVBQUUwTztjQUFRLENBQUM7WUFBRSxDQUFDLENBQUM7VUFBQTtZQUNwR3ZHLFFBQVEsQ0FBQyxDQUFDO1lBQUN5RyxVQUFBLENBQUF6c0MsQ0FBQTtZQUFBO1VBQUE7WUFBQXlzQyxVQUFBLENBQUE1ckMsQ0FBQTtZQUFBMnJDLElBQUEsR0FBQUMsVUFBQSxDQUFBenJDLENBQUE7WUFFWHVpQyxjQUFjLENBQUNpSixJQUFBLENBQU1ua0MsT0FBTyxJQUFJLG9DQUFvQyxDQUFDO1VBQUM7WUFBQSxPQUFBb2tDLFVBQUEsQ0FBQXhyQyxDQUFBO1FBQUE7TUFBQSxHQUFBcXJDLFNBQUE7SUFBQSxDQUV6RTtJQUFBLGdCQVBLRixlQUFlQSxDQUFBTSxJQUFBO01BQUEsT0FBQUwsTUFBQSxDQUFBdHBDLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FPcEI7RUFFRCxJQUFNNnBDLGVBQWU7SUFBQSxJQUFBQyxNQUFBLEdBQUEvcEMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQTJxQyxVQUFPQyxNQUFNO01BQUEsSUFBQUMsSUFBQTtNQUFBLE9BQUEvcUMsWUFBQSxHQUFBQyxDQUFBLFdBQUErcUMsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUFuc0MsQ0FBQSxHQUFBbXNDLFVBQUEsQ0FBQWh0QyxDQUFBO1VBQUE7WUFBQWd0QyxVQUFBLENBQUFuc0MsQ0FBQTtZQUFBbXNDLFVBQUEsQ0FBQWh0QyxDQUFBO1lBQUEsT0FFM0J1ekIsVUFBVSxDQUFDLGFBQWEsRUFBRTtjQUFFdUcsTUFBTSxFQUFFLE1BQU07Y0FBRW5TLElBQUksRUFBRTlkLElBQUksQ0FBQ1ksU0FBUyxDQUFDO2dCQUFFcWlDLE1BQU0sRUFBTkE7Y0FBTyxDQUFDO1lBQUUsQ0FBQyxDQUFDO1VBQUE7WUFDckY5RyxRQUFRLENBQUMsQ0FBQztZQUFDZ0gsVUFBQSxDQUFBaHRDLENBQUE7WUFBQTtVQUFBO1lBQUFndEMsVUFBQSxDQUFBbnNDLENBQUE7WUFBQWtzQyxJQUFBLEdBQUFDLFVBQUEsQ0FBQWhzQyxDQUFBO1lBRVh1aUMsY0FBYyxDQUFDd0osSUFBQSxDQUFNMWtDLE9BQU8sSUFBSSwrQkFBK0IsQ0FBQztVQUFDO1lBQUEsT0FBQTJrQyxVQUFBLENBQUEvckMsQ0FBQTtRQUFBO01BQUEsR0FBQTRyQyxTQUFBO0lBQUEsQ0FFcEU7SUFBQSxnQkFQS0YsZUFBZUEsQ0FBQU0sSUFBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQTdwQyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBT3BCO0VBRUQsSUFBTW9xQyxrQkFBa0I7SUFBQSxJQUFBQyxNQUFBLEdBQUF0cUMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQWtyQyxVQUFPamhDLE9BQU87TUFBQSxJQUFBa2hDLElBQUE7TUFBQSxPQUFBcnJDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBcXJDLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBenNDLENBQUEsR0FBQXlzQyxVQUFBLENBQUF0dEMsQ0FBQTtVQUFBO1lBQUEsSUFDbEMwaEMsV0FBVyxhQUFYQSxXQUFXLGVBQVhBLFdBQVcsQ0FBRWw4QixFQUFFO2NBQUE4bkMsVUFBQSxDQUFBdHRDLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQXN0QyxVQUFBLENBQUFyc0MsQ0FBQTtVQUFBO1lBQUFxc0MsVUFBQSxDQUFBenNDLENBQUE7WUFBQXlzQyxVQUFBLENBQUF0dEMsQ0FBQTtZQUFBLE9BRVp1ekIsVUFBVSxpQkFBQXB1QixNQUFBLENBQWlCMDBCLGtCQUFrQixDQUFDNkgsV0FBVyxDQUFDbDhCLEVBQUUsQ0FBQyxHQUFJO2NBQUVzMEIsTUFBTSxFQUFFLEtBQUs7Y0FBRW5TLElBQUksRUFBRTlkLElBQUksQ0FBQ1ksU0FBUyxDQUFDMEIsT0FBTztZQUFFLENBQUMsQ0FBQztVQUFBO1lBQ3hINjVCLFFBQVEsQ0FBQyxDQUFDO1lBQUNzSCxVQUFBLENBQUF0dEMsQ0FBQTtZQUFBO1VBQUE7WUFBQXN0QyxVQUFBLENBQUF6c0MsQ0FBQTtZQUFBd3NDLElBQUEsR0FBQUMsVUFBQSxDQUFBdHNDLENBQUE7WUFFWHVpQyxjQUFjLENBQUM4SixJQUFBLENBQU1obEMsT0FBTyxJQUFJLGdDQUFnQyxDQUFDO1VBQUM7WUFBQSxPQUFBaWxDLFVBQUEsQ0FBQXJzQyxDQUFBO1FBQUE7TUFBQSxHQUFBbXNDLFNBQUE7SUFBQSxDQUVyRTtJQUFBLGdCQVJLRixrQkFBa0JBLENBQUFLLElBQUE7TUFBQSxPQUFBSixNQUFBLENBQUFwcUMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQVF2QjtFQUVELElBQU0wcUMsaUJBQWlCO0lBQUEsSUFBQUMsTUFBQSxHQUFBNXFDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUF3ckMsVUFBT2xvQyxFQUFFLEVBQUUrZ0IsS0FBSyxFQUFFb25CLE9BQU87TUFBQSxJQUFBQyxJQUFBO01BQUEsT0FBQTVyQyxZQUFBLEdBQUFDLENBQUEsV0FBQTRyQyxVQUFBO1FBQUEsa0JBQUFBLFVBQUEsQ0FBQWh0QyxDQUFBLEdBQUFndEMsVUFBQSxDQUFBN3RDLENBQUE7VUFBQTtZQUFBLElBQzVDMnRDLE9BQU87Y0FBQUUsVUFBQSxDQUFBN3RDLENBQUE7Y0FBQTtZQUFBO1lBQ1YraEMsY0FBYyxDQUFDLFVBQUN6M0IsSUFBSTtjQUFBLE9BQUtBLElBQUksQ0FBQ29DLEdBQUcsQ0FBQyxVQUFDckUsT0FBTztnQkFBQSxPQUFNQSxPQUFPLENBQUM3QyxFQUFFLEtBQUtBLEVBQUUsR0FBQXFKLGFBQUEsS0FBUTBYLEtBQUssSUFBS2xlLE9BQU87Y0FBQSxDQUFDLENBQUM7WUFBQSxFQUFDO1lBQUMsT0FBQXdsQyxVQUFBLENBQUE1c0MsQ0FBQTtVQUFBO1lBQUE0c0MsVUFBQSxDQUFBaHRDLENBQUE7WUFBQWd0QyxVQUFBLENBQUE3dEMsQ0FBQTtZQUFBLE9BSXhGdXpCLFVBQVUsa0JBQUFwdUIsTUFBQSxDQUFrQjAwQixrQkFBa0IsQ0FBQ3IwQixFQUFFLENBQUMsR0FBSTtjQUFFczBCLE1BQU0sRUFBRSxLQUFLO2NBQUVuUyxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQztnQkFBRXFqQyxJQUFJLEVBQUV2bkIsS0FBSyxDQUFDdW5CLElBQUk7Z0JBQUUxbEMsS0FBSyxFQUFFbWUsS0FBSyxDQUFDbmUsS0FBSztnQkFBRTA5QixJQUFJLEVBQUV2ZixLQUFLLENBQUN1ZjtjQUFLLENBQUM7WUFBRSxDQUFDLENBQUM7VUFBQTtZQUNoS0UsUUFBUSxDQUFDLENBQUM7WUFBQzZILFVBQUEsQ0FBQTd0QyxDQUFBO1lBQUE7VUFBQTtZQUFBNnRDLFVBQUEsQ0FBQWh0QyxDQUFBO1lBQUErc0MsSUFBQSxHQUFBQyxVQUFBLENBQUE3c0MsQ0FBQTtZQUVYdWlDLGNBQWMsQ0FBQ3FLLElBQUEsQ0FBTXZsQyxPQUFPLElBQUksZ0NBQWdDLENBQUM7VUFBQztZQUFBLE9BQUF3bEMsVUFBQSxDQUFBNXNDLENBQUE7UUFBQTtNQUFBLEdBQUF5c0MsU0FBQTtJQUFBLENBRXJFO0lBQUEsZ0JBWEtGLGlCQUFpQkEsQ0FBQU8sSUFBQSxFQUFBQyxJQUFBLEVBQUFDLElBQUE7TUFBQSxPQUFBUixNQUFBLENBQUExcUMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQVd0QjtFQUVELElBQU1vckMsbUJBQW1CO0lBQUEsSUFBQUMsTUFBQSxHQUFBdHJDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUFrc0MsVUFBT0MsUUFBUTtNQUFBLElBQUEzN0IsU0FBQSxFQUFBNDdCLElBQUE7TUFBQSxPQUFBdHNDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBc3NDLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBMXRDLENBQUEsR0FBQTB0QyxVQUFBLENBQUF2dUMsQ0FBQTtVQUFBO1lBQUEsSUFDcENxdUMsUUFBUTtjQUFBRSxVQUFBLENBQUF2dUMsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBdXVDLFVBQUEsQ0FBQXR0QyxDQUFBO1VBQUE7WUFBQXN0QyxVQUFBLENBQUF2dUMsQ0FBQTtZQUFBLE9BQ1dnbEMsY0FBYyxDQUFDO2NBQ3JDNThCLEtBQUssRUFBRSwrQkFBK0I7Y0FDdENDLE9BQU8sa09BQUFsRCxNQUFBLENBQThDa3BDLFFBQVEsb0VBQWU7Y0FDNUUvbEMsWUFBWSxFQUFFLGNBQWM7Y0FDNUJFLElBQUksRUFBRTtZQUNSLENBQUMsQ0FBQztVQUFBO1lBTElrSyxTQUFTLEdBQUE2N0IsVUFBQSxDQUFBdnRDLENBQUE7WUFBQSxJQU1WMFIsU0FBUztjQUFBNjdCLFVBQUEsQ0FBQXZ1QyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUF1dUMsVUFBQSxDQUFBdHRDLENBQUE7VUFBQTtZQUFBc3RDLFVBQUEsQ0FBQTF0QyxDQUFBO1lBQUEwdEMsVUFBQSxDQUFBdnVDLENBQUE7WUFBQSxPQUVOdXpCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtjQUFFdUcsTUFBTSxFQUFFLE1BQU07Y0FBRWUsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRTtjQUFtQixDQUFDO2NBQUVsVCxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQztnQkFBRTRqQyxRQUFRLEVBQVJBO2NBQVMsQ0FBQztZQUFFLENBQUMsQ0FBQztVQUFBO1lBQzdJckksUUFBUSxDQUFDLENBQUM7WUFBQ3VJLFVBQUEsQ0FBQXZ1QyxDQUFBO1lBQUE7VUFBQTtZQUFBdXVDLFVBQUEsQ0FBQTF0QyxDQUFBO1lBQUF5dEMsSUFBQSxHQUFBQyxVQUFBLENBQUF2dEMsQ0FBQTtZQUVYdWlDLGNBQWMsQ0FBQytLLElBQUEsQ0FBTWptQyxPQUFPLElBQUksK0JBQStCLENBQUM7VUFBQztZQUFBLE9BQUFrbUMsVUFBQSxDQUFBdHRDLENBQUE7UUFBQTtNQUFBLEdBQUFtdEMsU0FBQTtJQUFBLENBRXBFO0lBQUEsZ0JBZktGLG1CQUFtQkEsQ0FBQU0sSUFBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQXByQyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBZXhCO0VBRUQsSUFBTTJyQyxrQkFBa0I7SUFBQSxJQUFBQyxNQUFBLEdBQUE3ckMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQXlzQyxVQUFBO01BQUEsSUFBQWo4QixTQUFBLEVBQUFrOEIsSUFBQTtNQUFBLE9BQUE1c0MsWUFBQSxHQUFBQyxDQUFBLFdBQUE0c0MsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUFodUMsQ0FBQSxHQUFBZ3VDLFVBQUEsQ0FBQTd1QyxDQUFBO1VBQUE7WUFBQTZ1QyxVQUFBLENBQUE3dUMsQ0FBQTtZQUFBLE9BQ0RnbEMsY0FBYyxDQUFDO2NBQ3JDNThCLEtBQUssRUFBRSwwQkFBMEI7Y0FDakNDLE9BQU8sRUFBRSx3REFBd0Q7Y0FDakVDLFlBQVksRUFBRSxTQUFTO2NBQ3ZCRSxJQUFJLEVBQUU7WUFDUixDQUFDLENBQUM7VUFBQTtZQUxJa0ssU0FBUyxHQUFBbThCLFVBQUEsQ0FBQTd0QyxDQUFBO1lBQUEsSUFNVjBSLFNBQVM7Y0FBQW04QixVQUFBLENBQUE3dUMsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBNnVDLFVBQUEsQ0FBQTV0QyxDQUFBO1VBQUE7WUFBQTR0QyxVQUFBLENBQUFodUMsQ0FBQTtZQUFBZ3VDLFVBQUEsQ0FBQTd1QyxDQUFBO1lBQUEsT0FFTnV6QixVQUFVLENBQUMsaUJBQWlCLEVBQUU7Y0FBRXVHLE1BQU0sRUFBRTtZQUFPLENBQUMsQ0FBQztVQUFBO1lBQ3ZEa00sUUFBUSxDQUFDLENBQUM7WUFBQzZJLFVBQUEsQ0FBQTd1QyxDQUFBO1lBQUE7VUFBQTtZQUFBNnVDLFVBQUEsQ0FBQWh1QyxDQUFBO1lBQUErdEMsSUFBQSxHQUFBQyxVQUFBLENBQUE3dEMsQ0FBQTtZQUVYdWlDLGNBQWMsQ0FBQ3FMLElBQUEsQ0FBTXZtQyxPQUFPLElBQUksMEJBQTBCLENBQUM7VUFBQztZQUFBLE9BQUF3bUMsVUFBQSxDQUFBNXRDLENBQUE7UUFBQTtNQUFBLEdBQUEwdEMsU0FBQTtJQUFBLENBRS9EO0lBQUEsZ0JBZEtGLGtCQUFrQkEsQ0FBQTtNQUFBLE9BQUFDLE1BQUEsQ0FBQTNyQyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBY3ZCO0VBRUQsSUFBTWdzQyxXQUFXLEdBQUd4cUMsV0FBVztJQUFBLElBQUF5cUMsTUFBQSxHQUFBbHNDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUM3QixTQUFBOHNDLFVBQU9yckMsSUFBSTtNQUFBLElBQUF3SSxPQUFBLEVBQUE4aUMsSUFBQTtNQUFBLE9BQUFqdEMsWUFBQSxHQUFBQyxDQUFBLFdBQUFpdEMsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUFydUMsQ0FBQSxHQUFBcXVDLFVBQUEsQ0FBQWx2QyxDQUFBO1VBQUE7WUFBQSxJQUNKMkQsSUFBSTtjQUFBdXJDLFVBQUEsQ0FBQWx2QyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFrdkMsVUFBQSxDQUFBanVDLENBQUE7VUFBQTtZQUNUNGhDLGVBQWUsQ0FBQztjQUFFMTZCLElBQUksRUFBRSxJQUFJO2NBQUVzVCxJQUFJLEVBQUUsSUFBSTtjQUFFc0UsT0FBTyxFQUFFO1lBQUssQ0FBQyxDQUFDO1lBQUNtdkIsVUFBQSxDQUFBcnVDLENBQUE7WUFBQXF1QyxVQUFBLENBQUFsdkMsQ0FBQTtZQUFBLE9BRW5DdXpCLFVBQVUsa0JBQUFwdUIsTUFBQSxDQUFrQjAwQixrQkFBa0IsQ0FBQ2wyQixJQUFJLENBQUMsQ0FBRSxDQUFDO1VBQUE7WUFBdkV3SSxPQUFPLEdBQUEraUMsVUFBQSxDQUFBbHVDLENBQUE7WUFDYjZoQyxlQUFlLENBQUM7Y0FBRTE2QixJQUFJLEVBQUUsSUFBSTtjQUFFc1QsSUFBSSxFQUFFdFAsT0FBTztjQUFFNFQsT0FBTyxFQUFFO1lBQU0sQ0FBQyxDQUFDO1lBQUNtdkIsVUFBQSxDQUFBbHZDLENBQUE7WUFBQTtVQUFBO1lBQUFrdkMsVUFBQSxDQUFBcnVDLENBQUE7WUFBQW91QyxJQUFBLEdBQUFDLFVBQUEsQ0FBQWx1QyxDQUFBO1lBRS9ENmhDLGVBQWUsQ0FBQztjQUFFMTZCLElBQUksRUFBRSxJQUFJO2NBQUVzVCxJQUFJLEVBQUU7Z0JBQUUxUixLQUFLLEVBQUVrbEMsSUFBQSxDQUFNNW1DLE9BQU8sSUFBSTtjQUErQixDQUFDO2NBQUUwWCxPQUFPLEVBQUU7WUFBTSxDQUFDLENBQUM7VUFBQztZQUFBLE9BQUFtdkIsVUFBQSxDQUFBanVDLENBQUE7UUFBQTtNQUFBLEdBQUErdEMsU0FBQTtJQUFBLENBRXJIO0lBQUEsaUJBQUFHLElBQUE7TUFBQSxPQUFBSixNQUFBLENBQUFoc0MsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxLQUNELENBQUN5d0IsVUFBVSxDQUNiLENBQUM7RUFFRCxJQUFNNmIsYUFBYSxHQUFHOXFDLFdBQVcsY0FBQXpCLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFDLFNBQUFtdEMsVUFBQTtJQUFBLElBQUFqK0IsT0FBQSxFQUFBcEUsVUFBQTtJQUFBLE9BQUFoTCxZQUFBLEdBQUFDLENBQUEsV0FBQXF0QyxVQUFBO01BQUEsa0JBQUFBLFVBQUEsQ0FBQXR2QyxDQUFBO1FBQUE7VUFBQSxLQUM1QndpQyxZQUFZO1lBQUE4TSxVQUFBLENBQUF0dkMsQ0FBQTtZQUFBO1VBQUE7VUFBQSxPQUFBc3ZDLFVBQUEsQ0FBQXJ1QyxDQUFBLElBQVN1aEMsWUFBWTtRQUFBO1VBQUE4TSxVQUFBLENBQUF0dkMsQ0FBQTtVQUFBLE9BQ2Z1ekIsVUFBVSxDQUFDLCtCQUErQixDQUFDO1FBQUE7VUFBM0RuaUIsT0FBTyxHQUFBaytCLFVBQUEsQ0FBQXR1QyxDQUFBO1VBQ1BnTSxVQUFVLEdBQUE2QixhQUFBLENBQUFBLGFBQUEsS0FDWHVDLE9BQU87WUFDVmtELFFBQVEsRUFBRUQsbUJBQW1CLENBQUNqRCxPQUFPLENBQUNrRCxRQUFRLElBQUksRUFBRTtVQUFDO1VBRXZEbXVCLGVBQWUsQ0FBQ3oxQixVQUFVLENBQUM7VUFBQyxPQUFBc2lDLFVBQUEsQ0FBQXJ1QyxDQUFBLElBQ3JCK0wsVUFBVTtNQUFBO0lBQUEsR0FBQXFpQyxTQUFBO0VBQUEsQ0FDbEIsSUFBRSxDQUFDOWIsVUFBVSxFQUFFaVAsWUFBWSxDQUFDLENBQUM7RUFFOUIsSUFBTStNLHFCQUFxQixHQUFHanJDLFdBQVc7SUFBQSxJQUFBa3JDLE1BQUEsR0FBQTNzQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FDdkMsU0FBQXV0QyxVQUFPaDVCLFdBQVc7TUFBQSxJQUFBaTVCLGFBQUE7UUFBQXQrQixPQUFBO1FBQUF1K0IsT0FBQSxHQUFBN3NDLFNBQUE7TUFBQSxPQUFBZCxZQUFBLEdBQUFDLENBQUEsV0FBQTJ0QyxVQUFBO1FBQUEsa0JBQUFBLFVBQUEsQ0FBQTV2QyxDQUFBO1VBQUE7WUFBRTB2QyxhQUFhLEdBQUFDLE9BQUEsQ0FBQXZ1QyxNQUFBLFFBQUF1dUMsT0FBQSxRQUFBaG5DLFNBQUEsR0FBQWduQyxPQUFBLE1BQUcsQ0FBQyxDQUFDO1lBQUFDLFVBQUEsQ0FBQTV2QyxDQUFBO1lBQUEsT0FDZG92QyxhQUFhLENBQUMsQ0FBQztVQUFBO1lBQS9CaCtCLE9BQU8sR0FBQXcrQixVQUFBLENBQUE1dUMsQ0FBQTtZQUNiaWlDLG1CQUFtQixDQUFDO2NBQ2xCOTZCLElBQUksRUFBRSxJQUFJO2NBQ1ZzVCxJQUFJLEVBQUVoRixXQUFXO2NBQ2pCckYsT0FBTyxFQUFQQSxPQUFPO2NBQ1B3aEIsS0FBSyxFQUFFLEtBQUs7Y0FDWnJVLFdBQVcsRUFBRSxDQUFDLENBQUNteEIsYUFBYSxDQUFDbnhCO1lBQy9CLENBQUMsQ0FBQztVQUFDO1lBQUEsT0FBQXF4QixVQUFBLENBQUEzdUMsQ0FBQTtRQUFBO01BQUEsR0FBQXd1QyxTQUFBO0lBQUEsQ0FDSjtJQUFBLGlCQUFBSSxJQUFBO01BQUEsT0FBQUwsTUFBQSxDQUFBenNDLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsS0FDRCxDQUFDc3NDLGFBQWEsQ0FDaEIsQ0FBQztFQUVELElBQU1VLHVCQUF1QixHQUFHeHJDLFdBQVcsY0FBQXpCLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFDLFNBQUE2dEMsVUFBQTtJQUFBLElBQUFDLGlCQUFBO0lBQUEsSUFBQTUrQixPQUFBLEVBQUE2K0IsS0FBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUE7SUFBQSxPQUFBbnVDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBbXVDLFVBQUE7TUFBQSxrQkFBQUEsVUFBQSxDQUFBcHdDLENBQUE7UUFBQTtVQUFBb3dDLFVBQUEsQ0FBQXB3QyxDQUFBO1VBQUEsT0FDcEJvdkMsYUFBYSxDQUFDLENBQUM7UUFBQTtVQUEvQmgrQixPQUFPLEdBQUFnL0IsVUFBQSxDQUFBcHZDLENBQUE7VUFDUGl2QyxLQUFLLEdBQUcsSUFBSXBsQyxJQUFJLENBQUMsQ0FBQyxDQUFDcXRCLFdBQVcsQ0FBQyxDQUFDLENBQUN6MEIsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7VUFDN0N5c0MsYUFBYSxHQUFHcDhCLG9CQUFvQixDQUFDLEVBQUFrOEIsaUJBQUEsR0FBQTUrQixPQUFPLENBQUNrRCxRQUFRLGNBQUEwN0IsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFtQixDQUFDLENBQUMsS0FBSSxVQUFVLENBQUM7VUFDekVHLGFBQWEsR0FBR3BoQyxpQkFBaUIsQ0FBQ3NMLE9BQU8sRUFBRWpKLE9BQU8sQ0FBQzhRLE9BQU8sSUFBSSxFQUFFLENBQUM7VUFDdkUrZ0IsbUJBQW1CLENBQUM7WUFDbEI5NkIsSUFBSSxFQUFFLElBQUk7WUFDVnNULElBQUksRUFBRTtjQUNKalcsRUFBRSxFQUFFLElBQUk7Y0FDUndaLFlBQVksRUFBRSxFQUFFO2NBQ2hCSCxLQUFLLEVBQUUsRUFBRTtjQUNUSSxNQUFNLEVBQUVreEIsYUFBYTtjQUNyQnRsQyxJQUFJLEVBQUVvbEMsS0FBSztjQUNYcjVCLElBQUksRUFBRSxFQUFFO2NBQ1JGLE1BQU0sRUFBRXc1QixhQUFhO2NBQ3JCMXBDLFFBQVEsRUFBRSxFQUFFO2NBQ1o4WSxNQUFNLEVBQUU7WUFDVixDQUFDO1lBQ0RsTyxPQUFPLEVBQVBBLE9BQU87WUFDUHdoQixLQUFLLEVBQUUsSUFBSTtZQUNYclUsV0FBVyxFQUFFO1VBQ2YsQ0FBQyxDQUFDO1FBQUM7VUFBQSxPQUFBNnhCLFVBQUEsQ0FBQW52QyxDQUFBO01BQUE7SUFBQSxHQUFBOHVDLFNBQUE7RUFBQSxDQUNKLElBQUUsQ0FBQ1gsYUFBYSxFQUFFLzBCLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFdFksV0FBVyxFQUFFc1ksT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUUxTCxRQUFRLENBQUMsQ0FBQztFQUU1RCxJQUFNMGhDLHFCQUFxQjtJQUFBLElBQUFDLE1BQUEsR0FBQXp0QyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBcXVDLFVBQUFDLE1BQUE7TUFBQSxJQUFBaHJDLEVBQUEsRUFBQTJHLE9BQUEsRUFBQXltQixLQUFBLEVBQUE2ZCxJQUFBO01BQUEsT0FBQXp1QyxZQUFBLEdBQUFDLENBQUEsV0FBQXl1QyxVQUFBO1FBQUEsa0JBQUFBLFVBQUEsQ0FBQTd2QyxDQUFBLEdBQUE2dkMsVUFBQSxDQUFBMXdDLENBQUE7VUFBQTtZQUFTd0YsRUFBRSxHQUFBZ3JDLE1BQUEsQ0FBRmhyQyxFQUFFLEVBQUUyRyxPQUFPLEdBQUFxa0MsTUFBQSxDQUFQcmtDLE9BQU8sRUFBRXltQixLQUFLLEdBQUE0ZCxNQUFBLENBQUw1ZCxLQUFLO1lBQUE4ZCxVQUFBLENBQUE3dkMsQ0FBQTtZQUFBLEtBRWpEK3hCLEtBQUs7Y0FBQThkLFVBQUEsQ0FBQTF3QyxDQUFBO2NBQUE7WUFBQTtZQUFBMHdDLFVBQUEsQ0FBQTF3QyxDQUFBO1lBQUEsT0FDRHV6QixVQUFVLENBQUMsZUFBZSxFQUFFO2NBQUV1RyxNQUFNLEVBQUUsTUFBTTtjQUFFZSxPQUFPLEVBQUU7Z0JBQUUsY0FBYyxFQUFFO2NBQW1CLENBQUM7Y0FBRWxULElBQUksRUFBRTlkLElBQUksQ0FBQ1ksU0FBUyxDQUFDMEIsT0FBTztZQUFFLENBQUMsQ0FBQztVQUFBO1lBQUF1a0MsVUFBQSxDQUFBMXdDLENBQUE7WUFBQTtVQUFBO1lBQUEsS0FDNUh3RixFQUFFO2NBQUFrckMsVUFBQSxDQUFBMXdDLENBQUE7Y0FBQTtZQUFBO1lBQUEwd0MsVUFBQSxDQUFBMXdDLENBQUE7WUFBQSxPQUNMdXpCLFVBQVUsa0JBQUFwdUIsTUFBQSxDQUFrQjAwQixrQkFBa0IsQ0FBQ3IwQixFQUFFLENBQUMsR0FBSTtjQUFFczBCLE1BQU0sRUFBRSxLQUFLO2NBQUVuUyxJQUFJLEVBQUU5ZCxJQUFJLENBQUNZLFNBQVMsQ0FBQzBCLE9BQU87WUFBRSxDQUFDLENBQUM7VUFBQTtZQUUvRzgyQixtQkFBbUIsQ0FBQyxVQUFDMzRCLElBQUk7Y0FBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJO2dCQUFFbkMsSUFBSSxFQUFFLEtBQUs7Z0JBQUVzVCxJQUFJLEVBQUUsSUFBSTtnQkFBRW1YLEtBQUssRUFBRSxLQUFLO2dCQUFFclUsV0FBVyxFQUFFO2NBQUs7WUFBQSxDQUFHLENBQUM7WUFDdkd5bkIsUUFBUSxDQUFDLENBQUM7WUFBQzBLLFVBQUEsQ0FBQTF3QyxDQUFBO1lBQUE7VUFBQTtZQUFBMHdDLFVBQUEsQ0FBQTd2QyxDQUFBO1lBQUE0dkMsSUFBQSxHQUFBQyxVQUFBLENBQUExdkMsQ0FBQTtZQUVYdWlDLGNBQWMsQ0FBQ2tOLElBQUEsQ0FBTXBvQyxPQUFPLElBQUksNkJBQTZCLENBQUM7VUFBQztZQUFBLE9BQUFxb0MsVUFBQSxDQUFBenZDLENBQUE7UUFBQTtNQUFBLEdBQUFzdkMsU0FBQTtJQUFBLENBRWxFO0lBQUEsZ0JBWktGLHFCQUFxQkEsQ0FBQU0sSUFBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQXZ0QyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBWTFCO0VBRUQsSUFBTTh0Qyx1QkFBdUI7SUFBQSxJQUFBQyxNQUFBLEdBQUFodUMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQTR1QyxVQUFPcjZCLFdBQVc7TUFBQSxJQUFBL0QsU0FBQSxFQUFBcStCLElBQUE7TUFBQSxPQUFBL3VDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBK3VDLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBbndDLENBQUEsR0FBQW13QyxVQUFBLENBQUFoeEMsQ0FBQTtVQUFBO1lBQUEsSUFDM0N5VyxXQUFXLGFBQVhBLFdBQVcsZUFBWEEsV0FBVyxDQUFFalIsRUFBRTtjQUFBd3JDLFVBQUEsQ0FBQWh4QyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFneEMsVUFBQSxDQUFBL3ZDLENBQUE7VUFBQTtZQUFBK3ZDLFVBQUEsQ0FBQWh4QyxDQUFBO1lBQUEsT0FDSWdsQyxjQUFjLENBQUM7Y0FDckM1OEIsS0FBSyxFQUFFLGlCQUFpQjtjQUN4QkMsT0FBTyxFQUFFLHNEQUFzRDtjQUMvREMsWUFBWSxFQUFFLFNBQVM7Y0FDdkJFLElBQUksRUFBRTtZQUNSLENBQUMsQ0FBQztVQUFBO1lBTElrSyxTQUFTLEdBQUFzK0IsVUFBQSxDQUFBaHdDLENBQUE7WUFBQSxJQU1WMFIsU0FBUztjQUFBcytCLFVBQUEsQ0FBQWh4QyxDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFneEMsVUFBQSxDQUFBL3ZDLENBQUE7VUFBQTtZQUFBK3ZDLFVBQUEsQ0FBQW53QyxDQUFBO1lBQUFtd0MsVUFBQSxDQUFBaHhDLENBQUE7WUFBQSxPQUVOdXpCLFVBQVUsa0JBQUFwdUIsTUFBQSxDQUFrQjAwQixrQkFBa0IsQ0FBQ3BqQixXQUFXLENBQUNqUixFQUFFLENBQUMsR0FBSTtjQUFFczBCLE1BQU0sRUFBRTtZQUFTLENBQUMsQ0FBQztVQUFBO1lBQzdGbUosbUJBQW1CLENBQUM7Y0FBRTk2QixJQUFJLEVBQUUsS0FBSztjQUFFc1QsSUFBSSxFQUFFLElBQUk7Y0FBRXJLLE9BQU8sRUFBRSxJQUFJO2NBQUV3aEIsS0FBSyxFQUFFLEtBQUs7Y0FBRXJVLFdBQVcsRUFBRTtZQUFNLENBQUMsQ0FBQztZQUNqR3luQixRQUFRLENBQUMsQ0FBQztZQUFDZ0wsVUFBQSxDQUFBaHhDLENBQUE7WUFBQTtVQUFBO1lBQUFneEMsVUFBQSxDQUFBbndDLENBQUE7WUFBQWt3QyxJQUFBLEdBQUFDLFVBQUEsQ0FBQWh3QyxDQUFBO1lBRVh1aUMsY0FBYyxDQUFDd04sSUFBQSxDQUFNMW9DLE9BQU8sSUFBSSwyQkFBMkIsQ0FBQztVQUFDO1lBQUEsT0FBQTJvQyxVQUFBLENBQUEvdkMsQ0FBQTtRQUFBO01BQUEsR0FBQTZ2QyxTQUFBO0lBQUEsQ0FFaEU7SUFBQSxnQkFoQktGLHVCQUF1QkEsQ0FBQUssSUFBQTtNQUFBLE9BQUFKLE1BQUEsQ0FBQTl0QyxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBZ0I1QjtFQUVELElBQU1vdUMsbUJBQW1CO0lBQUEsSUFBQUMsTUFBQSxHQUFBdHVDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUFrdkMsVUFBQTtNQUFBLElBQUFDLElBQUEsRUFBQUMsSUFBQTtNQUFBLE9BQUF0dkMsWUFBQSxHQUFBQyxDQUFBLFdBQUFzdkMsVUFBQTtRQUFBLGtCQUFBQSxVQUFBLENBQUExd0MsQ0FBQSxHQUFBMHdDLFVBQUEsQ0FBQXZ4QyxDQUFBO1VBQUE7WUFDMUI4akMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUFDeU4sVUFBQSxDQUFBMXdDLENBQUE7WUFBQTB3QyxVQUFBLENBQUF2eEMsQ0FBQTtZQUFBLE9BRUN1ekIsVUFBVSxDQUFDLHdCQUF3QixDQUFDO1VBQUE7WUFBakQ4ZCxJQUFJLEdBQUFFLFVBQUEsQ0FBQXZ3QyxDQUFBO1lBQ1ZxaEMsYUFBYSxDQUFDZ1AsSUFBSSxDQUFDO1lBQUNFLFVBQUEsQ0FBQXZ4QyxDQUFBO1lBQUE7VUFBQTtZQUFBdXhDLFVBQUEsQ0FBQTF3QyxDQUFBO1lBQUF5d0MsSUFBQSxHQUFBQyxVQUFBLENBQUF2d0MsQ0FBQTtZQUVwQnVpQyxjQUFjLENBQUMrTixJQUFBLENBQU1qcEMsT0FBTyxJQUFJLGlDQUFpQyxDQUFDO1VBQUM7WUFBQWtwQyxVQUFBLENBQUExd0MsQ0FBQTtZQUVuRWlqQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQUMsT0FBQXlOLFVBQUEsQ0FBQTN3QyxDQUFBO1VBQUE7WUFBQSxPQUFBMndDLFVBQUEsQ0FBQXR3QyxDQUFBO1FBQUE7TUFBQSxHQUFBbXdDLFNBQUE7SUFBQSxDQUV4QjtJQUFBLGdCQVZLRixtQkFBbUJBLENBQUE7TUFBQSxPQUFBQyxNQUFBLENBQUFwdUMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQVV4QjtFQUVELElBQU0wdUMsaUJBQWlCO0lBQUEsSUFBQUMsTUFBQSxHQUFBNXVDLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUF3dkMsVUFBQTtNQUFBLElBQUFoL0IsU0FBQSxFQUFBaVIsTUFBQSxFQUFBZ3VCLElBQUE7TUFBQSxPQUFBM3ZDLFlBQUEsR0FBQUMsQ0FBQSxXQUFBMnZDLFVBQUE7UUFBQSxrQkFBQUEsVUFBQSxDQUFBL3dDLENBQUEsR0FBQSt3QyxVQUFBLENBQUE1eEMsQ0FBQTtVQUFBO1lBQUE0eEMsVUFBQSxDQUFBNXhDLENBQUE7WUFBQSxPQUNBZ2xDLGNBQWMsQ0FBQztjQUNyQzU4QixLQUFLLEVBQUUsbUJBQW1CO2NBQzFCQyxPQUFPLEVBQUUseUZBQXlGO2NBQ2xHQyxZQUFZLEVBQUUsVUFBVTtjQUN4QkUsSUFBSSxFQUFFO1lBQ1IsQ0FBQyxDQUFDO1VBQUE7WUFMSWtLLFNBQVMsR0FBQWsvQixVQUFBLENBQUE1d0MsQ0FBQTtZQUFBLElBTVYwUixTQUFTO2NBQUFrL0IsVUFBQSxDQUFBNXhDLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTR4QyxVQUFBLENBQUEzd0MsQ0FBQTtVQUFBO1lBQ2Q2aUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUFDOE4sVUFBQSxDQUFBL3dDLENBQUE7WUFBQSt3QyxVQUFBLENBQUE1eEMsQ0FBQTtZQUFBLE9BRUd1ekIsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2NBQUV1RyxNQUFNLEVBQUU7WUFBTyxDQUFDLENBQUM7VUFBQTtZQUEvRG5XLE1BQU0sR0FBQWl1QixVQUFBLENBQUE1d0MsQ0FBQTtZQUNacWhDLGFBQWEsQ0FBQzFlLE1BQU0sQ0FBQzB0QixJQUFJLElBQUkxdEIsTUFBTSxDQUFDO1lBQ3BDcWlCLFFBQVEsQ0FBQyxDQUFDO1lBQUM0TCxVQUFBLENBQUE1eEMsQ0FBQTtZQUFBO1VBQUE7WUFBQTR4QyxVQUFBLENBQUEvd0MsQ0FBQTtZQUFBOHdDLElBQUEsR0FBQUMsVUFBQSxDQUFBNXdDLENBQUE7WUFFWHVpQyxjQUFjLENBQUNvTyxJQUFBLENBQU10cEMsT0FBTyxJQUFJLGlDQUFpQyxDQUFDO1VBQUM7WUFBQXVwQyxVQUFBLENBQUEvd0MsQ0FBQTtZQUVuRWlqQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQUMsT0FBQThOLFVBQUEsQ0FBQWh4QyxDQUFBO1VBQUE7WUFBQSxPQUFBZ3hDLFVBQUEsQ0FBQTN3QyxDQUFBO1FBQUE7TUFBQSxHQUFBeXdDLFNBQUE7SUFBQSxDQUV4QjtJQUFBLGdCQWxCS0YsaUJBQWlCQSxDQUFBO01BQUEsT0FBQUMsTUFBQSxDQUFBMXVDLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FrQnRCO0VBRUQsSUFBSSxFQUFDdVgsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXpGLEtBQUssR0FBRTtJQUNuQixvQkFBT3pRLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQzJtQixXQUFXO01BQUNFLE9BQU8sRUFBRStKLFdBQVk7TUFBQ2grQixLQUFLLEVBQUUyNUI7SUFBVSxDQUFFLENBQUM7RUFDaEU7RUFFQSxJQUFNbU8sb0JBQW9CLEdBQUd2M0IsU0FBUyxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUdBLFNBQVMsS0FBSyxVQUFVLEdBQUcsVUFBVSxHQUFHa21CLGdCQUFnQjtFQUUzSCxJQUFNc1IsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QixJQUFJL3hCLE9BQU8sRUFBRSxvQkFBTzViLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0gsWUFBWSxNQUFFLENBQUM7SUFDcEMsUUFBUXNELFNBQVM7TUFDZixLQUFLLFdBQVc7UUFDZCxvQkFDRW5XLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQytELGFBQWE7VUFDWk8sSUFBSSxFQUFFbWxCLFNBQVU7VUFDaEJsbEIsaUJBQWlCLEVBQUU2ekIscUJBQXNCO1VBQ3pDNXpCLGFBQWEsRUFBRW16QixXQUFZO1VBQzNCbHpCLG1CQUFtQixFQUFFazBCLHVCQUF3QjtVQUM3Q2gwQixRQUFRLEVBQUV1b0I7UUFBaUIsQ0FDNUIsQ0FBQztNQUVOLEtBQUssUUFBUTtNQUNiLEtBQUssU0FBUztNQUNkLEtBQUssVUFBVTtRQUNiLG9CQUNFbGdDLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ2ljLGVBQWU7VUFDZEcsVUFBVSxFQUFFQSxVQUFXO1VBQ3ZCQyxhQUFhLEVBQUVnUCxZQUFhO1VBQzVCL08sZUFBZSxFQUFFZ1AsZUFBZ0I7VUFDakM5bUIsYUFBYSxFQUFFbXpCLFdBQVk7VUFDM0I1akIsT0FBTyxFQUFFLENBQUEwVixTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRTFWLE9BQU8sS0FBSSxFQUFHO1VBQ2xDMEksV0FBVyxFQUFFdlosT0FBTyxJQUFJLElBQUs7VUFDN0J5WixnQkFBZ0IsRUFBRSxDQUFBdVEsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsdUJBQWhCQSxnQkFBZ0IsQ0FBRXBnQixJQUFJLEtBQUksSUFBSztVQUNqRCtQLGFBQWEsRUFBRSxDQUFBcVEsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsdUJBQWhCQSxnQkFBZ0IsQ0FBRXZtQixTQUFTLEtBQUksSUFBSztVQUNuRG9FLE9BQU8sRUFBRUEsT0FBUTtVQUNqQnNDLFFBQVEsRUFBRUEsUUFBUztVQUNuQjJQLG1CQUFtQixFQUFFc1UsdUJBQXdCO1VBQzdDclUsWUFBWSxFQUFFaVYsZ0JBQWlCO1VBQy9CaFYsV0FBVyxFQUFFNlYsZUFBZ0I7VUFDN0I1VixjQUFjLEVBQUVzVixrQkFBbUI7VUFDbkNyVixvQkFBb0IsRUFBRTBYLHdCQUF5QjtVQUMvQ3pYLG9CQUFvQixFQUFFMFgsd0JBQXlCO1VBQy9DelgsZUFBZSxFQUFFNFcsbUJBQW9CO1VBQ3JDM1csWUFBWSxFQUFFaVgsZ0JBQWlCO1VBQy9CL1csY0FBYyxFQUFFaWQsb0JBQXFCO1VBQ3JDaGQsd0JBQXdCLEVBQUVxUSw0QkFBNkI7VUFDdkRuUSxnQkFBZ0IsRUFBRWlRO1FBQWUsQ0FDbEMsQ0FBQztNQUVOLEtBQUssS0FBSztRQUNSLG9CQUNFN2dDLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ2drQixjQUFjO1VBQ2J0bkIsTUFBTSxFQUFFeXRCLFNBQVU7VUFDbEJqRyxRQUFRLEVBQUVxRyxXQUFZO1VBQ3RCeFAsT0FBTyxFQUFFLENBQUEwTyxTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRTFPLE9BQU8sS0FBSSxFQUFHO1VBQ2xDc0osUUFBUSxFQUFFc0csV0FBWTtVQUN0QnJHLGVBQWUsRUFBRTJRLGVBQWdCO1VBQ2pDMVEsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7WUFBQSxPQUFRaVIsZUFBZSxDQUFDLE9BQU8sQ0FBQztVQUFBLENBQUM7VUFDeENoUixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQTtZQUFBLE9BQVFnUixlQUFlLENBQUMsTUFBTSxDQUFDO1VBQUEsQ0FBQztVQUN0Qy9RLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBO1lBQUEsT0FBUStRLGVBQWUsQ0FBQyxTQUFTLENBQUM7VUFBQSxDQUFDO1VBQzVDOVEsY0FBYyxFQUFFcVIsa0JBQW1CO1VBQ25DcFIsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUd0MkIsRUFBRSxFQUFFK2dCLEtBQUssRUFBRW9uQixPQUFPO1lBQUEsT0FBS0gsaUJBQWlCLENBQUNob0MsRUFBRSxFQUFFK2dCLEtBQUssRUFBRW9uQixPQUFPLENBQUM7VUFBQSxDQUFDO1VBQzdFNVIsZUFBZSxFQUFFbVMsbUJBQW9CO1VBQ3JDbFMsY0FBYyxFQUFFeVMsa0JBQW1CO1VBQ25DeFMsYUFBYSxFQUFFQSxhQUFjO1VBQzdCQyxVQUFVLEVBQUVBLFVBQVc7VUFDdkJDLGVBQWUsRUFBRStVLG1CQUFvQjtVQUNyQzlVLGFBQWEsRUFBRW9WLGlCQUFrQjtVQUNqQ25WLFVBQVUsRUFBRUEsVUFBVztVQUN2QkUsUUFBUSxFQUFDO1FBQUssQ0FDZixDQUFDO01BRU4sS0FBSyxRQUFRO1FBQ1gsb0JBQ0VwNEIsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDZ2tCLGNBQWM7VUFDYnRuQixNQUFNLEVBQUV5dEIsU0FBVTtVQUNsQmpHLFFBQVEsRUFBRXFHLFdBQVk7VUFDdEJ4UCxPQUFPLEVBQUUsQ0FBQTBPLFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFMU8sT0FBTyxLQUFJLEVBQUc7VUFDbENzSixRQUFRLEVBQUVzRyxXQUFZO1VBQ3RCckcsZUFBZSxFQUFFMlEsZUFBZ0I7VUFDakMxUSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtZQUFBLE9BQVFpUixlQUFlLENBQUMsT0FBTyxDQUFDO1VBQUEsQ0FBQztVQUN4Q2hSLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO1lBQUEsT0FBUWdSLGVBQWUsQ0FBQyxNQUFNLENBQUM7VUFBQSxDQUFDO1VBQ3RDL1EsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUE7WUFBQSxPQUFRK1EsZUFBZSxDQUFDLFNBQVMsQ0FBQztVQUFBLENBQUM7VUFDNUM5USxjQUFjLEVBQUVxUixrQkFBbUI7VUFDbkNwUixhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBR3QyQixFQUFFLEVBQUUrZ0IsS0FBSyxFQUFFb25CLE9BQU87WUFBQSxPQUFLSCxpQkFBaUIsQ0FBQ2hvQyxFQUFFLEVBQUUrZ0IsS0FBSyxFQUFFb25CLE9BQU8sQ0FBQztVQUFBLENBQUM7VUFDN0U1UixlQUFlLEVBQUVtUyxtQkFBb0I7VUFDckNsUyxjQUFjLEVBQUV5UyxrQkFBbUI7VUFDbkN4UyxhQUFhLEVBQUVBLGFBQWM7VUFDN0JDLFVBQVUsRUFBRUEsVUFBVztVQUN2QkMsZUFBZSxFQUFFK1UsbUJBQW9CO1VBQ3JDOVUsYUFBYSxFQUFFb1YsaUJBQWtCO1VBQ2pDblYsVUFBVSxFQUFFQSxVQUFXO1VBQ3ZCRSxRQUFRLEVBQUM7UUFBUSxDQUNsQixDQUFDO01BRU47UUFDRSxvQkFDRXA0QixLQUFBLENBQUFnVCxhQUFBLENBQUNna0IsY0FBYztVQUNidG5CLE1BQU0sRUFBRXl0QixTQUFVO1VBQ2xCakcsUUFBUSxFQUFFcUcsV0FBWTtVQUN0QnhQLE9BQU8sRUFBRSxDQUFBME8sU0FBUyxhQUFUQSxTQUFTLHVCQUFUQSxTQUFTLENBQUUxTyxPQUFPLEtBQUksRUFBRztVQUNsQ3NKLFFBQVEsRUFBRXNHLFdBQVk7VUFDdEJyRyxlQUFlLEVBQUUyUSxlQUFnQjtVQUNqQzFRLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBUWlSLGVBQWUsQ0FBQyxPQUFPLENBQUM7VUFBQSxDQUFDO1VBQ3hDaFIsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUE7WUFBQSxPQUFRZ1IsZUFBZSxDQUFDLE1BQU0sQ0FBQztVQUFBLENBQUM7VUFDdEMvUSxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQTtZQUFBLE9BQVErUSxlQUFlLENBQUMsU0FBUyxDQUFDO1VBQUEsQ0FBQztVQUM1QzlRLGNBQWMsRUFBRXFSLGtCQUFtQjtVQUNuQ3BSLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFHdDJCLEVBQUUsRUFBRStnQixLQUFLLEVBQUVvbkIsT0FBTztZQUFBLE9BQUtILGlCQUFpQixDQUFDaG9DLEVBQUUsRUFBRStnQixLQUFLLEVBQUVvbkIsT0FBTyxDQUFDO1VBQUEsQ0FBQztVQUM3RTVSLGVBQWUsRUFBRW1TLG1CQUFvQjtVQUNyQ2xTLGNBQWMsRUFBRXlTLGtCQUFtQjtVQUNuQ3hTLGFBQWEsRUFBRUEsYUFBYztVQUM3QkMsVUFBVSxFQUFFQSxVQUFXO1VBQ3ZCQyxlQUFlLEVBQUUrVSxtQkFBb0I7VUFDckM5VSxhQUFhLEVBQUVvVixpQkFBa0I7VUFDakNuVixVQUFVLEVBQUVBLFVBQVc7VUFDdkJFLFFBQVEsRUFBQztRQUFLLENBQ2YsQ0FBQztJQUVSO0VBQ0YsQ0FBQztFQUVELElBQUlrSSxVQUFVLEVBQUU7SUFDZCxvQkFDRXRnQyxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUFzRyxnQkFDbkhqVCxLQUFBLENBQUFnVCxhQUFBO01BQUtDLFNBQVMsRUFBQztJQUF5RixnQkFDdEdqVCxLQUFBLENBQUFnVCxhQUFBO01BQUdDLFNBQVMsRUFBQztJQUFxQyxHQUFDLHNLQUFnQyxDQUFDLGVBQ3BGalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBd0IsR0FBQyxvZEFFbkMsQ0FBQyxlQUNKalQsS0FBQSxDQUFBZ1QsYUFBQTtNQUFLQyxTQUFTLEVBQUM7SUFBZ0YsR0FDNUZxdEIsVUFDRSxDQUNGLENBQUMsZUFDTnRnQyxLQUFBLENBQUFnVCxhQUFBO01BQ0VvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVF2VSxNQUFNLENBQUNDLFFBQVEsQ0FBQzhzQyxNQUFNLENBQUMsQ0FBQztNQUFBLENBQUM7TUFDeEMzNkIsU0FBUyxFQUFDO0lBQW9GLEdBQy9GLGlJQUVPLENBQ0wsQ0FBQztFQUVWO0VBRUEsb0JBQ0VqVCxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFzQyxHQUNsRDZzQixRQUFRLGlCQUFJOS9CLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ3VELFVBQVU7SUFBQ0osU0FBUyxFQUFFQSxTQUFVO0lBQUNDLFFBQVEsRUFBRThsQixZQUFhO0lBQUNobUIsT0FBTyxFQUFFQSxPQUFRO0lBQUNHLFFBQVEsRUFBRTRxQjtFQUFhLENBQUUsQ0FBQyxlQUNuSGpoQyxLQUFBLENBQUFnVCxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFNLGdCQUNuQmpULEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ2dELE9BQU87SUFBQ0UsT0FBTyxFQUFFQSxPQUFRO0lBQUNDLFNBQVMsRUFBRUEsU0FBVTtJQUFDQyxRQUFRLEVBQUU4bEIsWUFBYTtJQUFDN2xCLFFBQVEsRUFBRTRxQjtFQUFhLENBQUUsQ0FBQyxlQUNuR2poQyxLQUFBLENBQUFnVCxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUE2QixHQUMxQ2tzQixXQUFXLGlCQUFJbi9CLEtBQUEsQ0FBQWdULGFBQUEsQ0FBQ0UsV0FBVztJQUFDaFAsT0FBTyxFQUFFaTdCO0VBQVksQ0FBRSxDQUFDLEVBQ3BEd08sWUFBWSxDQUFDLENBQ1YsQ0FDSCxDQUFDLGVBQ04zdEMsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDOFosWUFBWTtJQUFDTSxLQUFLLEVBQUVxUixZQUFhO0lBQUN6cEIsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7TUFBQSxPQUFRMHBCLGVBQWUsQ0FBQztRQUFFMTZCLElBQUksRUFBRSxLQUFLO1FBQUVzVCxJQUFJLEVBQUUsSUFBSTtRQUFFc0UsT0FBTyxFQUFFO01BQU0sQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDbEg1YixLQUFBLENBQUFnVCxhQUFBLENBQUNtYixnQkFBZ0I7SUFDZm5xQixJQUFJLEVBQUU2NkIsZ0JBQWdCLENBQUM3NkIsSUFBSztJQUM1QnNPLFdBQVcsRUFBRXVzQixnQkFBZ0IsQ0FBQ3ZuQixJQUFLO0lBQ25DckssT0FBTyxFQUFFNHhCLGdCQUFnQixDQUFDNXhCLE9BQU8sSUFBSW94QixZQUFZLElBQUksQ0FBQyxDQUFFO0lBQ3hEcnBCLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUThwQixtQkFBbUIsQ0FBQyxVQUFDMzRCLElBQUk7UUFBQSxPQUFBdUUsYUFBQSxDQUFBQSxhQUFBLEtBQVd2RSxJQUFJO1VBQUVuQyxJQUFJLEVBQUUsS0FBSztVQUFFc1QsSUFBSSxFQUFFLElBQUk7VUFBRW1YLEtBQUssRUFBRSxLQUFLO1VBQUVyVSxXQUFXLEVBQUU7UUFBSztNQUFBLENBQUcsQ0FBQztJQUFBLENBQUM7SUFDdkg2RCxNQUFNLEVBQUVpdUIscUJBQXNCO0lBQzlCemQsS0FBSyxFQUFFb1EsZ0JBQWdCLENBQUNwUSxLQUFNO0lBQzlCMUgsT0FBTyxFQUFFLENBQUEwVixTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRTFWLE9BQU8sS0FBSSxFQUFHO0lBQ2xDd0gsU0FBUyxFQUFFc1EsZ0JBQWdCLENBQUN6a0IsV0FBWTtJQUN4QytELFFBQVEsRUFBRTBnQixnQkFBZ0IsQ0FBQ3prQixXQUFXLEdBQUdxeUIsdUJBQXVCLEdBQUc7RUFBSyxDQUN6RSxDQUFDLGVBQ0Z6c0MsS0FBQSxDQUFBZ1QsYUFBQSxDQUFDcUMsYUFBYSxFQUFBdUYsUUFBQSxLQUFLOGxCLGFBQWE7SUFBRWhyQixRQUFRLEVBQUVvckI7RUFBb0IsRUFBRSxDQUMvRCxDQUFDO0FBRVYsQ0FBQztBQUVELElBQUkrTSxZQUFZLEdBQUcsSUFBSTtBQUN2QixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3RCLElBQU1DLFdBQVcsR0FBR3RtQyxRQUFRLENBQUN1bUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUNuRCxJQUFJO0lBQ0YsSUFBSSxDQUFDRCxXQUFXLEVBQUU7TUFDaEIsTUFBTSxJQUFJMWxDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUM5QztJQUNBLElBQUksQ0FBQ3dsQyxZQUFZLEVBQUU7TUFDakJBLFlBQVksR0FDVixPQUFPbHRDLFVBQVUsS0FBSyxVQUFVLEdBQzVCQSxVQUFVLENBQUNvdEMsV0FBVyxDQUFDLEdBQ3ZCO1FBQ0VFLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHQyxJQUFJO1VBQUEsT0FBS3p0QyxRQUFRLENBQUN3dEMsTUFBTSxDQUFDQyxJQUFJLEVBQUVILFdBQVcsQ0FBQztRQUFBO01BQ3RELENBQUM7SUFDVDtJQUNBRixZQUFZLENBQUNJLE1BQU0sY0FBQ2p1QyxLQUFBLENBQUFnVCxhQUFBLENBQUMyb0IsR0FBRyxNQUFFLENBQUMsQ0FBQztFQUM5QixDQUFDLENBQUMsT0FBTy8xQixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMscUJBQXFCLEVBQUVBLEtBQUssQ0FBQztJQUMzQyxJQUFJbW9DLFdBQVcsRUFBRTtNQUNmQSxXQUFXLENBQUNJLFNBQVMsdThCQUFBbnRDLE1BQUEsQ0FtQlgsQ0FBQTRFLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFMUIsT0FBTyxLQUFJLGlDQUFpQyxxY0FjNUQ7SUFDSDtFQUNGO0FBQ0YsQ0FBQztBQUVENHBDLFNBQVMsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119