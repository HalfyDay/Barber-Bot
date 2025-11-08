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
var DEFAULT_API_BASE_URL = 'http://192.168.1.55:3000/api';
var API_BASE_URL = window.__BARBER_API_BASE__ || DEFAULT_API_BASE_URL;
window.__BARBER_API_BASE__ = API_BASE_URL;
var VIEW_TABS = [{
  id: 'dashboard',
  label: 'Обзор'
}, {
  id: 'barbers',
  label: 'Барберы'
}, {
  id: 'services',
  label: 'Услуги'
}, {
  id: 'tables',
  label: 'Таблицы'
}, {
  id: 'bot',
  label: 'Бот'
}, {
  id: 'system',
  label: 'Система'
}];
var TABLE_ORDER = ['Appointments', 'Schedules', 'Users', 'Cost'];
var DATA_TABLES = ['Appointments', 'Schedules', 'Users', 'Cost'];
var TABLE_CONFIG = {
  Appointments: {
    label: 'Записи',
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
    canCreate: false,
    supportsBarberFilter: true,
    defaultSort: {
      key: 'Date',
      direction: 'asc'
    }
  },
  Users: {
    label: 'Клиенты',
    canCreate: true,
    defaultSort: {
      key: 'Name',
      direction: 'asc'
    }
  },
  Cost: {
    label: 'Каталог услуг',
    canCreate: true,
    defaultSort: {
      key: 'Uslugi',
      direction: 'asc'
    }
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
    minWidth: 'w-28'
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
  }],
  Cost: [{
    key: 'Uslugi',
    label: 'Услуга',
    editable: true,
    type: 'text',
    minWidth: 'w-56'
  }, {
    key: 'Timur',
    label: 'Тимур',
    editable: true,
    type: 'text',
    align: 'center'
  }, {
    key: 'Vladimir',
    label: 'Владимир',
    editable: true,
    type: 'text',
    align: 'center'
  }, {
    key: 'Alina',
    label: 'Алина',
    editable: true,
    type: 'text',
    align: 'center'
  }, {
    key: 'Aleksey',
    label: 'Алексей',
    editable: true,
    type: 'text',
    align: 'center'
  }, {
    key: 'Dlitelnost',
    label: 'Длительность',
    editable: true,
    type: 'text',
    minWidth: 'w-32'
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
          images = Array.isArray(payload.images) ? payload.images.filter(Boolean) : [];
          return _context.a(2, images);
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
    var _ref2 = safeStart <= safeEnd ? [safeStart, safeEnd] : [safeEnd, safeStart],
      _ref3 = _slicedToArray(_ref2, 2),
      from = _ref3[0],
      to = _ref3[1];
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
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$label = _ref4.label,
    label = _ref4$label === void 0 ? 'Загружаю данные...' : _ref4$label;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center py-12 text-slate-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-pulse"
  }, label));
};
var ErrorBanner = function ErrorBanner(_ref5) {
  var message = _ref5.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg bg-rose-600 px-4 py-3 text-white"
  }, message);
};
var SectionCard = function SectionCard(_ref6) {
  var title = _ref6.title,
    actions = _ref6.actions,
    children = _ref6.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold text-white"
  }, title), actions), children);
};
var LiveBadge = function LiveBadge(_ref7) {
  var timestamp = _ref7.timestamp,
    _ref7$label = _ref7.label,
    label = _ref7$label === void 0 ? 'LIVE' : _ref7$label;
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
var IconTrash = function IconTrash(_ref8) {
  var _ref8$className = _ref8.className,
    className = _ref8$className === void 0 ? 'h-4 w-4' : _ref8$className;
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
var Modal = function Modal(_ref9) {
  var title = _ref9.title,
    isOpen = _ref9.isOpen,
    onClose = _ref9.onClose,
    children = _ref9.children,
    footer = _ref9.footer,
    _ref9$maxWidthClass = _ref9.maxWidthClass,
    maxWidthClass = _ref9$maxWidthClass === void 0 ? 'max-w-3xl' : _ref9$maxWidthClass;
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
var StatCard = function StatCard(_ref0) {
  var label = _ref0.label,
    value = _ref0.value,
    _ref0$accent = _ref0.accent,
    accent = _ref0$accent === void 0 ? 'text-indigo-300' : _ref0$accent;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: classNames('mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl', accent)
  }, value));
};
var Sidebar = function Sidebar(_ref1) {
  var session = _ref1.session,
    activeTab = _ref1.activeTab,
    onChange = _ref1.onChange,
    onLogout = _ref1.onLogout;
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
var MobileTabs = function MobileTabs(_ref10) {
  var session = _ref10.session,
    activeTab = _ref10.activeTab,
    onChange = _ref10.onChange,
    onLogout = _ref10.onLogout;
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
var DashboardView = function DashboardView(_ref11) {
  var _data$appointments, _stats$totalUsers, _stats$activeAppointm, _stats$confirmedYear, _stats$todaysAppointm;
  var data = _ref11.data,
    onOpenAppointment = _ref11.onOpenAppointment,
    onOpenProfile = _ref11.onOpenProfile,
    onCreateAppointment = _ref11.onCreateAppointment,
    _ref11$liveMeta = _ref11.liveMeta,
    liveMeta = _ref11$liveMeta === void 0 ? null : _ref11$liveMeta;
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
    return Array.from(groups.entries()).map(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
        key = _ref13[0],
        items = _ref13[1];
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
          return onOpenAppointment === null || onOpenAppointment === void 0 ? void 0 : onOpenAppointment(appt);
        },
        onKeyDown: function onKeyDown(event) {
          return event.key === 'Enter' && (onOpenAppointment === null || onOpenAppointment === void 0 ? void 0 : onOpenAppointment(appt));
        },
        className: 'group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-5 text-left transition hover:border-indigo-500/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500'
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
        className: "text-4xl font-bold leading-none text-white"
      }, start || '—'), end && /*#__PURE__*/React.createElement("p", {
        className: "text-base text-slate-400"
      }, "\u0434\u043E ", end))), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-end gap-2 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', getStatusBadgeClasses(statusLabel))
      }, statusLabel || 'Без статуса'), appt.Barber && /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-slate-400"
      }, "\u0411\u0430\u0440\u0431\u0435\u0440:", ' ', /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-white"
      }, appt.Barber)))), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 grid gap-4 text-sm text-slate-300 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, appt.CustomerName ? /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: function onClick(event) {
          event.stopPropagation();
          onOpenProfile === null || onOpenProfile === void 0 || onOpenProfile(appt.CustomerName);
        },
        className: "text-left text-lg font-semibold text-white hover:text-indigo-300"
      }, appt.CustomerName) : /*#__PURE__*/React.createElement("p", {
        className: "text-lg font-semibold text-white"
      }, "\u0411\u0435\u0437 \u0438\u043C\u0435\u043D\u0438"), servicesList.length ? /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-2"
      }, servicesList.map(function (service, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: "".concat(service, "-").concat(index),
          className: "rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-1 text-xs text-slate-200"
        }, service);
      })) : /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-slate-400"
      }, "\u041D\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433")), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, phoneLabel && phoneHref && /*#__PURE__*/React.createElement("a", {
        href: "tel:".concat(phoneHref),
        onClick: function onClick(event) {
          return event.stopPropagation();
        },
        className: "inline-flex items-center gap-2 rounded-full border border-slate-600/60 px-3 py-1 text-sm text-slate-200 hover:border-indigo-500 hover:text-white"
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
        className: "text-xs uppercase tracking-wide text-slate-500"
      }, "ID \u043A\u043B\u0438\u0435\u043D\u0442\u0430:", ' ', /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-slate-200"
      }, appt.UserID)))));
    })));
  }))));
};
var BarberAvatarPicker = function BarberAvatarPicker(_ref14) {
  var value = _ref14.value,
    _onChange = _ref14.onChange;
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
  var availableOptions = useMemo(function () {
    if (!value || avatarOptions.includes(value)) return avatarOptions;
    return value ? [value].concat(_toConsumableArray(avatarOptions)) : avatarOptions;
  }, [avatarOptions, value]);
  useEffect(function () {
    var isMounted = true;
    var load = /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
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
        return _ref15.apply(this, arguments);
      };
    }();
    load();
    return function () {
      isMounted = false;
    };
  }, []);
  var previewSrc = value || avatarOptions[0] || null;
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
  }, "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 \xABImage\xBB"), /*#__PURE__*/React.createElement("select", {
    value: value || '',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
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
  }, loading ? 'Сканирую папку…' : avatarOptions.length ? showGallery ? 'Скрыть миниатюры' : 'Показать миниатюры' : 'Нет изображений в папке Image'))), showGallery && avatarOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 sm:grid-cols-4"
  }, avatarOptions.map(function (preset) {
    var isSelected = preset === value;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: preset,
      onClick: function onClick() {
        return _onChange(preset);
      },
      className: "rounded-lg border p-1 transition hover:border-indigo-400 hover:bg-slate-800 ".concat(isSelected ? 'border-indigo-500 bg-indigo-500/20' : 'border-slate-700 bg-slate-900')
    }, /*#__PURE__*/React.createElement("img", {
      src: preset,
      alt: "avatar preset",
      className: "h-16 w-full rounded-md object-cover"
    }));
  })), !avatarOptions.length && !loading && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0432 \u043F\u0430\u043F\u043A\u0443 /Image, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440."));
};
var RatingSlider = function RatingSlider(_ref16) {
  var value = _ref16.value,
    onChange = _ref16.onChange,
    _ref16$dense = _ref16.dense,
    dense = _ref16$dense === void 0 ? false : _ref16$dense;
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
var BarbersView = function BarbersView(_ref17) {
  var _ref17$barbers = _ref17.barbers,
    barbers = _ref17$barbers === void 0 ? [] : _ref17$barbers,
    onFieldChange = _ref17.onFieldChange,
    onSave = _ref17.onSave,
    onAdd = _ref17.onAdd,
    onDelete = _ref17.onDelete;
  var _useState11 = useState(buildNewBarberState),
    _useState12 = _slicedToArray(_useState11, 2),
    newBarber = _useState12[0],
    setNewBarber = _useState12[1];
  var updateNewBarber = function updateNewBarber(field, value) {
    return setNewBarber(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var handleCreateBarber = function handleCreateBarber() {
    var _newBarber$name, _newBarber$password;
    if (!((_newBarber$name = newBarber.name) !== null && _newBarber$name !== void 0 && _newBarber$name.trim()) || !((_newBarber$password = newBarber.password) !== null && _newBarber$password !== void 0 && _newBarber$password.trim())) return;
    onAdd(newBarber);
    setNewBarber(buildNewBarberState());
  };
  var renderBarberCard = function renderBarberCard(barber) {
    var colorValue = /^#/.test(barber.color || '') ? barber.color : '#6d28d9';
    return /*#__PURE__*/React.createElement("div", {
      key: barber.id,
      className: "space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
    }, /*#__PURE__*/React.createElement("input", {
      value: barber.name || '',
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'name', event.target.value);
      },
      placeholder: "\u0418\u043C\u044F",
      className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5 text-sm text-white"
    }), /*#__PURE__*/React.createElement(RatingSlider, {
      dense: true,
      value: barber.rating,
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'rating', event.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-2 mobile-grid-2 md:grid-cols-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: barber.password || '',
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'password', event.target.value);
      },
      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
      className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    }), /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
    }, "\u0426\u0432\u0435\u0442", /*#__PURE__*/React.createElement("input", {
      type: "color",
      value: colorValue,
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'color', event.target.value);
      },
      className: "h-8 w-16 cursor-pointer rounded border border-slate-500 bg-transparent"
    }))), /*#__PURE__*/React.createElement("textarea", {
      value: barber.description || '',
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'description', event.target.value);
      },
      placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
      rows: 4,
      className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid gap-2 mobile-grid-2 md:grid-cols-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: barber.phone || '',
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'phone', event.target.value);
      },
      placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    }), /*#__PURE__*/React.createElement("input", {
      value: barber.telegramId || '',
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'telegramId', event.target.value);
      },
      placeholder: "Telegram ID",
      className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    })), /*#__PURE__*/React.createElement(BarberAvatarPicker, {
      value: barber.avatarUrl,
      onChange: function onChange(value) {
        return onFieldChange(barber.id, 'avatarUrl', value);
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "inline-flex items-center gap-2 text-sm text-slate-300"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: barber.isActive !== false,
      onChange: function onChange(event) {
        return onFieldChange(barber.id, 'isActive', event.target.checked);
      }
    }), "\u0410\u043A\u0442\u0438\u0432\u0435\u043D"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onSave(barber);
      },
      className: "flex-1 rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(barber);
      },
      className: "rounded-lg border border-rose-600 p-2 text-rose-300 hover:bg-rose-500/10",
      "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u0430\u0440\u0431\u0435\u0440\u0430"
    }, /*#__PURE__*/React.createElement(IconTrash, null))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0411\u0430\u0440\u0431\u0435\u0440\u044B"
  }, barbers.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0431\u0430\u0440\u0431\u0435\u0440\u043E\u0432 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442.") : /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 mobile-grid-2 lg:grid-cols-2"
  }, barbers.map(function (barber) {
    return renderBarberCard(barber);
  }))), /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u0430\u0440\u0431\u0435\u0440\u0430"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
  }, /*#__PURE__*/React.createElement("input", {
    value: newBarber.name,
    onChange: function onChange(event) {
      return updateNewBarber('name', event.target.value);
    },
    placeholder: "\u0418\u043C\u044F",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5 text-sm text-white"
  }), /*#__PURE__*/React.createElement(RatingSlider, {
    dense: true,
    value: newBarber.rating,
    onChange: function onChange(event) {
      return updateNewBarber('rating', event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mobile-grid-2 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: newBarber.password,
    onChange: function onChange(event) {
      return updateNewBarber('password', event.target.value);
    },
    placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
  }, "\u0426\u0432\u0435\u0442", /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: newBarber.color,
    onChange: function onChange(event) {
      return updateNewBarber('color', event.target.value);
    },
    className: "h-8 w-16 cursor-pointer rounded border border-slate-500 bg-transparent"
  }))), /*#__PURE__*/React.createElement("textarea", {
    value: newBarber.description,
    onChange: function onChange(event) {
      return updateNewBarber('description', event.target.value);
    },
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    rows: 3,
    className: "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mobile-grid-2 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: newBarber.phone,
    onChange: function onChange(event) {
      return updateNewBarber('phone', event.target.value);
    },
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("input", {
    value: newBarber.telegramId,
    onChange: function onChange(event) {
      return updateNewBarber('telegramId', event.target.value);
    },
    placeholder: "Telegram ID",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement(BarberAvatarPicker, {
    value: newBarber.avatarUrl,
    onChange: function onChange(value) {
      return updateNewBarber('avatarUrl', value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "inline-flex items-center gap-2 text-sm text-slate-300"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: newBarber.isActive,
    onChange: function onChange(event) {
      return updateNewBarber('isActive', event.target.checked);
    }
  }), "\u0410\u043A\u0442\u0438\u0432\u0435\u043D"), /*#__PURE__*/React.createElement("button", {
    onClick: handleCreateBarber,
    className: "w-full rounded-lg bg-emerald-600 py-2 font-semibold text-white hover:bg-emerald-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
};
var ServicesView = function ServicesView(_ref18) {
  var _ref18$services = _ref18.services,
    services = _ref18$services === void 0 ? [] : _ref18$services,
    _ref18$barbers = _ref18.barbers,
    barbers = _ref18$barbers === void 0 ? [] : _ref18$barbers,
    onFieldChange = _ref18.onFieldChange,
    onPriceChange = _ref18.onPriceChange,
    onDelete = _ref18.onDelete,
    onAdd = _ref18.onAdd;
  var _useState13 = useState({
      name: '',
      duration: 60,
      prices: {}
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    newService = _useState14[0],
    setNewService = _useState14[1];
  var updateNewService = function updateNewService(field, value) {
    return setNewService(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var updateNewServicePrice = function updateNewServicePrice(barberId, value) {
    return setNewService(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        prices: _objectSpread(_objectSpread({}, prev.prices || {}), {}, _defineProperty({}, barberId, value))
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"
  }, services.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400"
  }, "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u0438.") : /*#__PURE__*/React.createElement("div", {
    className: "overflow-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-[860px] text-[13px] leading-tight sm:text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "text-left text-[11px] uppercase tracking-[0.2em] text-slate-400"
  }, /*#__PURE__*/React.createElement("th", {
    className: "px-2 py-1.5"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    className: "px-2 py-1.5 w-28"
  }, "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"), barbers.map(function (barber) {
    return /*#__PURE__*/React.createElement("th", {
      key: barber.id,
      className: "px-2 py-1.5 text-center"
    }, barber.name);
  }), /*#__PURE__*/React.createElement("th", {
    className: "px-2 py-1.5 w-12 text-center"
  }))), /*#__PURE__*/React.createElement("tbody", null, services.map(function (service) {
    return /*#__PURE__*/React.createElement("tr", {
      key: service.id,
      className: "border-t border-slate-800"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-2 py-1.5 align-top"
    }, /*#__PURE__*/React.createElement("input", {
      value: service.name || '',
      onChange: function onChange(event) {
        return onFieldChange(service.id, 'name', event.target.value);
      },
      className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-1.5 text-sm text-white"
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-2 py-1.5 align-top"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: service.duration || 0,
      onChange: function onChange(event) {
        return onFieldChange(service.id, 'duration', Number(event.target.value));
      },
      className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-1.5 text-sm text-white"
    })), barbers.map(function (barber) {
      var _service$prices$barbe, _service$prices;
      return /*#__PURE__*/React.createElement("td", {
        key: barber.id,
        className: "px-2 py-1.5 align-top"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: (_service$prices$barbe = (_service$prices = service.prices) === null || _service$prices === void 0 ? void 0 : _service$prices[barber.id]) !== null && _service$prices$barbe !== void 0 ? _service$prices$barbe : '',
        onChange: function onChange(event) {
          return onPriceChange(service.id, barber.id, event.target.value);
        },
        className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-1.5 text-sm text-white",
        placeholder: "\u0426\u0435\u043D\u0430"
      }));
    }), /*#__PURE__*/React.createElement("td", {
      className: "px-2 py-1.5 align-top text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(service);
      },
      className: "inline-flex items-center justify-center rounded-lg border border-rose-500/70 p-2 text-xs text-rose-300 hover:bg-rose-500/10",
      "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"
    }, /*#__PURE__*/React.createElement(IconTrash, null))));
  }))))), /*#__PURE__*/React.createElement(SectionCard, {
    title: "\u041D\u043E\u0432\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 mobile-grid-2 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: newService.name,
    onChange: function onChange(event) {
      return updateNewService('name', event.target.value);
    },
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: newService.duration,
    onChange: function onChange(event) {
      return updateNewService('duration', Number(event.target.value));
    },
    placeholder: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043C\u0438\u043D",
    className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid gap-3 mobile-grid-2 md:grid-cols-2"
  }, barbers.map(function (barber) {
    var _newService$prices$ba, _newService$prices;
    return /*#__PURE__*/React.createElement("input", {
      key: barber.id,
      type: "number",
      value: (_newService$prices$ba = (_newService$prices = newService.prices) === null || _newService$prices === void 0 ? void 0 : _newService$prices[barber.id]) !== null && _newService$prices$ba !== void 0 ? _newService$prices$ba : '',
      onChange: function onChange(event) {
        return updateNewServicePrice(barber.id, event.target.value);
      },
      placeholder: "\u0426\u0435\u043D\u0430 \u0434\u043B\u044F ".concat(barber.name),
      className: "rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white"
    });
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (!newService.name) return;
      onAdd(newService);
      setNewService({
        name: '',
        duration: 60,
        prices: {}
      });
    },
    className: "mt-4 w-full rounded-lg bg-emerald-600 py-2 font-semibold text-white hover:bg-emerald-500"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443")));
};
var MultiSelectCell = function MultiSelectCell(_ref19) {
  var value = _ref19.value,
    _ref19$options = _ref19.options,
    options = _ref19$options === void 0 ? [] : _ref19$options,
    onCommit = _ref19.onCommit;
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    open = _useState16[0],
    setOpen = _useState16[1];
  var _useState17 = useState(parseMultiValue(value)),
    _useState18 = _slicedToArray(_useState17, 2),
    draft = _useState18[0],
    setDraft = _useState18[1];
  var anchorRef = useRef(null);
  var _useState19 = useState({
      top: 0,
      left: 0
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    position = _useState20[0],
    setPosition = _useState20[1];
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
var TimeRangePicker = function TimeRangePicker(_ref20) {
  var value = _ref20.value,
    onChange = _ref20.onChange,
    _ref20$title = _ref20.title,
    title = _ref20$title === void 0 ? 'Выбор времени' : _ref20$title,
    _ref20$placeholder = _ref20.placeholder,
    placeholder = _ref20$placeholder === void 0 ? 'Нажмите, чтобы выбрать' : _ref20$placeholder,
    _ref20$buttonClassNam = _ref20.buttonClassName,
    buttonClassName = _ref20$buttonClassNam === void 0 ? 'w-full rounded-lg border border-slate-600 bg-slate-900 px-2 py-1 text-left text-sm text-white' : _ref20$buttonClassNam;
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    open = _useState22[0],
    setOpen = _useState22[1];
  var _useState23 = useState(function () {
      return parseTimeRangeValue(value);
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    _useState24$ = _useState24[0],
    start = _useState24$.start,
    end = _useState24$.end,
    setDraft = _useState24[1];
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
var EditableCell = function EditableCell(_ref21) {
  var record = _ref21.record,
    column = _ref21.column,
    options = _ref21.options,
    onUpdate = _ref21.onUpdate,
    onOpenProfile = _ref21.onOpenProfile,
    tableId = _ref21.tableId;
  var recordId = (record === null || record === void 0 ? void 0 : record.id) || (record === null || record === void 0 ? void 0 : record.Id) || (record === null || record === void 0 ? void 0 : record.ID) || (record === null || record === void 0 ? void 0 : record.recordId);
  var value = record[column.key];
  var _useState25 = useState(value !== null && value !== void 0 ? value : ''),
    _useState26 = _slicedToArray(_useState25, 2),
    draft = _useState26[0],
    setDraft = _useState26[1];
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
      className: "text-slate-200 whitespace-pre-wrap break-words leading-tight"
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
var ColumnMenu = function ColumnMenu(_ref22) {
  var columns = _ref22.columns,
    _ref22$hiddenColumns = _ref22.hiddenColumns,
    hiddenColumns = _ref22$hiddenColumns === void 0 ? [] : _ref22$hiddenColumns,
    onToggle = _ref22.onToggle;
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    open = _useState28[0],
    setOpen = _useState28[1];
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
var MultiSelectCheckboxes = function MultiSelectCheckboxes(_ref23) {
  var label = _ref23.label,
    _ref23$options = _ref23.options,
    options = _ref23$options === void 0 ? [] : _ref23$options,
    _ref23$value = _ref23.value,
    value = _ref23$value === void 0 ? [] : _ref23$value,
    onChange = _ref23.onChange,
    _ref23$placeholder = _ref23.placeholder,
    placeholder = _ref23$placeholder === void 0 ? 'Нет данных' : _ref23$placeholder;
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    query = _useState30[0],
    setQuery = _useState30[1];
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
var ClientLookupInput = function ClientLookupInput(_ref24) {
  var _ref24$label = _ref24.label,
    label = _ref24$label === void 0 ? 'Клиент' : _ref24$label,
    _ref24$value = _ref24.value,
    value = _ref24$value === void 0 ? '' : _ref24$value,
    _onChange2 = _ref24.onChange,
    _ref24$clients = _ref24.clients,
    clients = _ref24$clients === void 0 ? [] : _ref24$clients,
    onSelectClient = _ref24.onSelectClient,
    _ref24$placeholder = _ref24.placeholder,
    placeholder = _ref24$placeholder === void 0 ? 'Начните вводить имя или телефон' : _ref24$placeholder;
  var _useState31 = useState(value || ''),
    _useState32 = _slicedToArray(_useState31, 2),
    query = _useState32[0],
    setQuery = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    open = _useState34[0],
    setOpen = _useState34[1];
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
var StatusMenu = function StatusMenu(_ref25) {
  var _ref25$statuses = _ref25.statuses,
    statuses = _ref25$statuses === void 0 ? [] : _ref25$statuses,
    _ref25$hiddenStatuses = _ref25.hiddenStatuses,
    hiddenStatuses = _ref25$hiddenStatuses === void 0 ? [] : _ref25$hiddenStatuses,
    onToggle = _ref25.onToggle,
    onReset = _ref25.onReset;
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    open = _useState36[0],
    setOpen = _useState36[1];
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
var TableToolbar = function TableToolbar(_ref26) {
  var tableId = _ref26.tableId,
    searchTerm = _ref26.searchTerm,
    setSearchTerm = _ref26.setSearchTerm,
    supportsBarberFilter = _ref26.supportsBarberFilter,
    selectedBarber = _ref26.selectedBarber,
    setSelectedBarber = _ref26.setSelectedBarber,
    barbers = _ref26.barbers,
    supportsStatusFilter = _ref26.supportsStatusFilter,
    statuses = _ref26.statuses,
    hiddenStatuses = _ref26.hiddenStatuses,
    toggleStatus = _ref26.toggleStatus,
    resetStatuses = _ref26.resetStatuses,
    columns = _ref26.columns,
    hiddenColumns = _ref26.hiddenColumns,
    toggleColumn = _ref26.toggleColumn,
    canCreate = _ref26.canCreate,
    onOpenCreate = _ref26.onOpenCreate,
    onRefresh = _ref26.onRefresh,
    showPastAppointments = _ref26.showPastAppointments,
    setShowPastAppointments = _ref26.setShowPastAppointments,
    _ref26$supportsGroupi = _ref26.supportsGrouping,
    supportsGrouping = _ref26$supportsGroupi === void 0 ? false : _ref26$supportsGroupi,
    _ref26$groupByDate = _ref26.groupByDate,
    groupByDate = _ref26$groupByDate === void 0 ? false : _ref26$groupByDate,
    setGroupByDate = _ref26.setGroupByDate,
    _ref26$lastUpdatedAt = _ref26.lastUpdatedAt,
    lastUpdatedAt = _ref26$lastUpdatedAt === void 0 ? null : _ref26$lastUpdatedAt;
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
  var buckets = new Map();
  records.forEach(function (record) {
    var key = record.Date || 'Без даты';
    var bucket = buckets.get(key) || [];
    bucket.push(record);
    buckets.set(key, bucket);
  });
  return Array.from(buckets.entries()).map(function (_ref27) {
    var _getAppointmentStartD6;
    var _ref28 = _slicedToArray(_ref27, 2),
      key = _ref28[0],
      items = _ref28[1];
    var sortedItems = _toConsumableArray(items).sort(function (a, b) {
      var _getAppointmentStartD4, _getAppointmentStartD5;
      var left = ((_getAppointmentStartD4 = getAppointmentStartDate(a.Date, a.Time, a.startDateTime)) === null || _getAppointmentStartD4 === void 0 ? void 0 : _getAppointmentStartD4.getTime()) || Number.MAX_SAFE_INTEGER;
      var right = ((_getAppointmentStartD5 = getAppointmentStartDate(b.Date, b.Time, b.startDateTime)) === null || _getAppointmentStartD5 === void 0 ? void 0 : _getAppointmentStartD5.getTime()) || Number.MAX_SAFE_INTEGER;
      return left - right;
    });
    var reference = sortedItems[0];
    var sortValue = ((_getAppointmentStartD6 = getAppointmentStartDate(reference.Date, reference.Time, reference.startDateTime)) === null || _getAppointmentStartD6 === void 0 ? void 0 : _getAppointmentStartD6.getTime()) || Number.MAX_SAFE_INTEGER;
    return {
      key: key || "no-date-".concat((reference === null || reference === void 0 ? void 0 : reference.id) || Math.random()),
      label: formatDateHeading(key),
      rows: sortedItems,
      sortValue: sortValue
    };
  }).sort(function (a, b) {
    return a.sortValue - b.sortValue;
  });
};
var SortIndicator = function SortIndicator(_ref29) {
  var direction = _ref29.direction;
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
var DataTable = function DataTable(_ref30) {
  var tableId = _ref30.tableId,
    rows = _ref30.rows,
    columns = _ref30.columns,
    hiddenColumns = _ref30.hiddenColumns,
    sortConfig = _ref30.sortConfig,
    onSort = _ref30.onSort,
    onUpdate = _ref30.onUpdate,
    onDelete = _ref30.onDelete,
    options = _ref30.options,
    onOpenProfile = _ref30.onOpenProfile,
    _ref30$groupByDate = _ref30.groupByDate,
    groupByDate = _ref30$groupByDate === void 0 ? true : _ref30$groupByDate;
  if (!rows.length) {
    return /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400"
    }, "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439.");
  }
  var visibleColumns = columns.filter(function (column) {
    return !hiddenColumns.includes(column.key);
  });
  var groupedRows = tableId === 'Appointments' && groupByDate ? buildAppointmentGroups(rows) : [{
    key: 'default',
    label: null,
    rows: rows
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "-mx-4 overflow-x-auto overflow-y-visible pb-3 sm:mx-0"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-[760px] table-auto text-[13px] leading-tight sm:text-sm"
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
    className: "px-2 py-1.5 text-right"
  }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"))), /*#__PURE__*/React.createElement("tbody", null, groupedRows.map(function (group) {
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
          className: classNames('px-2 py-1.5 align-top whitespace-pre-wrap break-words text-[13px] leading-snug sm:text-sm', column.align === 'center' && 'text-center')
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
  }))));
};
var CreateRecordModal = function CreateRecordModal(_ref31) {
  var isOpen = _ref31.isOpen,
    onClose = _ref31.onClose,
    onSave = _ref31.onSave,
    columns = _ref31.columns,
    tableName = _ref31.tableName,
    options = _ref31.options,
    tableId = _ref31.tableId,
    _ref31$clients = _ref31.clients,
    clients = _ref31$clients === void 0 ? [] : _ref31$clients,
    _ref31$hiddenFields = _ref31.hiddenFields,
    hiddenFields = _ref31$hiddenFields === void 0 ? [] : _ref31$hiddenFields;
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
  var _useState37 = useState(initialState),
    _useState38 = _slicedToArray(_useState37, 2),
    draft = _useState38[0],
    setDraft = _useState38[1];
  var isAppointmentsCreate = tableId === 'Appointments';
  useEffect(function () {
    if (isOpen) setDraft(initialState);
  }, [isOpen, initialState]);
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var payload = {};
    Object.entries(draft).forEach(function (_ref32) {
      var _ref33 = _slicedToArray(_ref32, 2),
        key = _ref33[0],
        value = _ref33[1];
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
var ProfileModal = function ProfileModal(_ref34) {
  var _state$data, _state$data2, _state$data3, _state$data4;
  var state = _ref34.state,
    onClose = _ref34.onClose;
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
var BackupsPanel = function BackupsPanel(_ref35) {
  var _ref35$backups = _ref35.backups,
    backups = _ref35$backups === void 0 ? [] : _ref35$backups,
    onRestore = _ref35.onRestore,
    onCreate = _ref35.onCreate;
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
var AppointmentModal = function AppointmentModal(_ref36) {
  var open = _ref36.open,
    appointment = _ref36.appointment,
    _ref36$options = _ref36.options,
    options = _ref36$options === void 0 ? {} : _ref36$options,
    onClose = _ref36.onClose,
    onSave = _ref36.onSave,
    _ref36$isNew = _ref36.isNew,
    isNew = _ref36$isNew === void 0 ? false : _ref36$isNew,
    _ref36$clients = _ref36.clients,
    clients = _ref36$clients === void 0 ? [] : _ref36$clients;
  var buildDraft = useCallback(function (record) {
    return record ? _objectSpread(_objectSpread({}, record), {}, {
      UserID: record.UserID || record.userId || '',
      Status: normalizeStatusValue(record.Status)
    }) : null;
  }, []);
  var _useState39 = useState(buildDraft(appointment)),
    _useState40 = _slicedToArray(_useState39, 2),
    draft = _useState40[0],
    setDraft = _useState40[1];
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
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
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
var TablesWorkspace = function TablesWorkspace(_ref37) {
  var _TABLE_CONFIG$activeT;
  var apiRequest = _ref37.apiRequest,
    sharedOptions = _ref37.sharedOptions,
    onOptionsUpdate = _ref37.onOptionsUpdate,
    onOpenProfile = _ref37.onOpenProfile,
    _ref37$clients = _ref37.clients,
    clients = _ref37$clients === void 0 ? [] : _ref37$clients,
    _ref37$currentUser = _ref37.currentUser,
    currentUser = _ref37$currentUser === void 0 ? null : _ref37$currentUser,
    _ref37$liveAppointmen = _ref37.liveAppointments,
    liveAppointments = _ref37$liveAppointmen === void 0 ? null : _ref37$liveAppointmen,
    _ref37$liveUpdatedAt = _ref37.liveUpdatedAt,
    liveUpdatedAt = _ref37$liveUpdatedAt === void 0 ? null : _ref37$liveUpdatedAt;
  var _useLocalStorage = useLocalStorage('tables.active', 'Appointments'),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    activeTable = _useLocalStorage2[0],
    setActiveTable = _useLocalStorage2[1];
  var _useState41 = useState(function () {
      return DATA_TABLES.reduce(function (acc, table) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, table, []));
      }, {});
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    tables = _useState42[0],
    setTables = _useState42[1];
  var _useState43 = useState(sharedOptions || {
      barbers: [],
      services: [],
      statuses: []
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    dropdownOptions = _useState44[0],
    setDropdownOptions = _useState44[1];
  var _useState45 = useState(''),
    _useState46 = _slicedToArray(_useState45, 2),
    tableError = _useState46[0],
    setTableError = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    isFetching = _useState48[0],
    setIsFetching = _useState48[1];
  var _useState49 = useState(''),
    _useState50 = _slicedToArray(_useState49, 2),
    searchTerm = _useState50[0],
    setSearchTerm = _useState50[1];
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
      Users: [],
      Cost: []
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
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    createModalOpen = _useState52[0],
    setCreateModalOpen = _useState52[1];
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
      rows.sort(function (a, b) {
        var left = normalizeText(a[sortConfig.key]).toLowerCase();
        var right = normalizeText(b[sortConfig.key]).toLowerCase();
        if (left === right) return 0;
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
    var _ref39 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(recordId, data) {
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
      return _ref39.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(record) {
      var tableId, original, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (!(!record || activeTable === 'Schedules')) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            if (window.confirm('Удалить запись без возможности восстановления?')) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            tableId = activeTable;
            original = tables[tableId] || [];
            setTables(function (prev) {
              var list = prev[tableId] || [];
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, list.filter(function (row) {
                return getRecordId(row) !== getRecordId(record);
              })));
            });
            _context5.p = 3;
            _context5.n = 4;
            return apiRequest("/".concat(tableId, "/").concat(encodeURIComponent(record.id)), {
              method: 'DELETE'
            });
          case 4:
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t4 = _context5.v;
            console.error('Delete failed', _t4);
            setTableError(_t4.message || 'Не удалось удалить запись');
            setTables(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tableId, original));
            });
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[3, 5]]);
    }));
    return function handleDelete(_x3) {
      return _ref40.apply(this, arguments);
    };
  }();
  var handleCreateRecord = /*#__PURE__*/function () {
    var _ref41 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(payload) {
      var tableId, normalizedPayload, _t5;
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
            _t5 = _context6.v;
            console.error('Create failed', _t5);
            setTableError(_t5.message || 'Не удалось создать запись');
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function handleCreateRecord(_x4) {
      return _ref41.apply(this, arguments);
    };
  }();
  var tableSettings = TABLE_CONFIG[activeTable] || {};
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
  })), tableSettings && /*#__PURE__*/React.createElement(SectionCard, {
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
    onSave: function onSave(_ref42) {
      var payload = _ref42.payload;
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
  })));
};
var BotControlView = function BotControlView(_ref43) {
  var status = _ref43.status,
    settings = _ref43.settings,
    _ref43$backups = _ref43.backups,
    backups = _ref43$backups === void 0 ? [] : _ref43$backups,
    _ref43$messages = _ref43.messages,
    messages = _ref43$messages === void 0 ? [] : _ref43$messages,
    onToggleEnabled = _ref43.onToggleEnabled,
    onStart = _ref43.onStart,
    onStop = _ref43.onStop,
    onRestart = _ref43.onRestart,
    onSaveSettings = _ref43.onSaveSettings,
    onSaveMessage = _ref43.onSaveMessage,
    onRestoreBackup = _ref43.onRestoreBackup,
    onCreateBackup = _ref43.onCreateBackup,
    licenseStatus = _ref43.licenseStatus,
    updateInfo = _ref43.updateInfo,
    onRefreshUpdate = _ref43.onRefreshUpdate,
    onApplyUpdate = _ref43.onApplyUpdate,
    systemBusy = _ref43.systemBusy,
    _ref43$viewMode = _ref43.viewMode,
    viewMode = _ref43$viewMode === void 0 ? 'bot' : _ref43$viewMode;
  var _useState53 = useState((settings === null || settings === void 0 ? void 0 : settings.botDescription) || ''),
    _useState54 = _slicedToArray(_useState53, 2),
    description = _useState54[0],
    setDescription = _useState54[1];
  var _useState55 = useState((settings === null || settings === void 0 ? void 0 : settings.aboutText) || ''),
    _useState56 = _slicedToArray(_useState55, 2),
    about = _useState56[0],
    setAbout = _useState56[1];
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
var LoginScreen = function LoginScreen(_ref44) {
  var onLogin = _ref44.onLogin,
    error = _ref44.error;
  var _useState57 = useState(''),
    _useState58 = _slicedToArray(_useState57, 2),
    username = _useState58[0],
    setUsername = _useState58[1];
  var _useState59 = useState(''),
    _useState60 = _slicedToArray(_useState59, 2),
    password = _useState60[0],
    setPassword = _useState60[1];
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    validationError = _useState62[0],
    setValidationError = _useState62[1];
  var _useState63 = useState([]),
    _useState64 = _slicedToArray(_useState63, 2),
    loginOptions = _useState64[0],
    setLoginOptions = _useState64[1];
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    optionsError = _useState66[0],
    setOptionsError = _useState66[1];
  var _useState67 = useState(true),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOptions = _useState68[0],
    setLoadingOptions = _useState68[1];
  useEffect(function () {
    var isMounted = true;
    var fetchOptions = /*#__PURE__*/function () {
      var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, data, normalized, _t6;
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
              _t6 = _context7.v;
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
        return _ref45.apply(this, arguments);
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
  var _useState69 = useState(function () {
      try {
        var saved = localStorage.getItem('barber-session');
        return saved ? buildSessionPayload(JSON.parse(saved)) : null;
      } catch (error) {
        return null;
      }
    }),
    _useState70 = _slicedToArray(_useState69, 2),
    session = _useState70[0],
    setSession = _useState70[1];
  var _useLocalStorage13 = useLocalStorage('barber.activeTab', 'dashboard'),
    _useLocalStorage14 = _slicedToArray(_useLocalStorage13, 2),
    activeTab = _useLocalStorage14[0],
    setActiveTab = _useLocalStorage14[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    dashboard = _useState72[0],
    setDashboard = _useState72[1];
  var _useState73 = useState([]),
    _useState74 = _slicedToArray(_useState73, 2),
    services = _useState74[0],
    setServices = _useState74[1];
  var _useState75 = useState([]),
    _useState76 = _slicedToArray(_useState75, 2),
    barbers = _useState76[0],
    setBarbers = _useState76[1];
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    botStatus = _useState78[0],
    setBotStatus = _useState78[1];
  var _useState79 = useState(null),
    _useState80 = _slicedToArray(_useState79, 2),
    botSettings = _useState80[0],
    setBotSettings = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    botMessages = _useState82[0],
    setBotMessages = _useState82[1];
  var _useState83 = useState(null),
    _useState84 = _slicedToArray(_useState83, 2),
    licenseStatus = _useState84[0],
    setLicenseStatus = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    updateInfo = _useState86[0],
    setUpdateInfo = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    optionsCache = _useState88[0],
    setOptionsCache = _useState88[1];
  var _useState89 = useState({
      open: false,
      data: null,
      loading: false
    }),
    _useState90 = _slicedToArray(_useState89, 2),
    profileModal = _useState90[0],
    setProfileModal = _useState90[1];
  var _useState91 = useState({
      open: false,
      data: null,
      options: null,
      isNew: false
    }),
    _useState92 = _slicedToArray(_useState91, 2),
    appointmentModal = _useState92[0],
    setAppointmentModal = _useState92[1];
  var _useState93 = useState(false),
    _useState94 = _slicedToArray(_useState93, 2),
    loading = _useState94[0],
    setLoading = _useState94[1];
  var _useState95 = useState(''),
    _useState96 = _slicedToArray(_useState95, 2),
    globalError = _useState96[0],
    setGlobalError = _useState96[1];
  var _useState97 = useState(''),
    _useState98 = _slicedToArray(_useState97, 2),
    authError = _useState98[0],
    setAuthError = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    systemBusy = _useState100[0],
    setSystemBusy = _useState100[1];
  var _useState101 = useState(window.innerWidth < 1024),
    _useState102 = _slicedToArray(_useState101, 2),
    isMobile = _useState102[0],
    setIsMobile = _useState102[1];
  var _useState103 = useState(null),
    _useState104 = _slicedToArray(_useState103, 2),
    realtimeSnapshot = _useState104[0],
    setRealtimeSnapshot = _useState104[1];
  var _useState105 = useState(null),
    _useState106 = _slicedToArray(_useState105, 2),
    fatalError = _useState106[0],
    setFatalError = _useState106[1];
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
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(endpoint) {
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
      return _ref46.apply(this, arguments);
    };
  }(), [session === null || session === void 0 ? void 0 : session.token, handleLogout]);
  var fetchAll = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var _overview$bot, overview, withFallback, _yield$Promise$all, _yield$Promise$all2, servicesFull, barbersFull, botState, botMessagesPayload, license, update, options, normalizedOptions, _t7;
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
          _t7 = _context9.v;
          console.error(_t7);
          setGlobalError(_t7.message || 'Не удалось загрузить данные');
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
    var _ref48 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(username, password) {
      var normalizedUsername, response, data, sessionPayload, _t8;
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
            _t8 = _context0.v;
            setAuthError('Сервер недоступен');
          case 6:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 5]]);
    }));
    return function handleLogin(_x6, _x7) {
      return _ref48.apply(this, arguments);
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
      prices: Object.fromEntries(Object.entries(service.prices || {}).map(function (_ref49) {
        var _ref50 = _slicedToArray(_ref49, 2),
          key = _ref50[0],
          value = _ref50[1];
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
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(barber) {
      var response, updatedBarber, _t9;
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
            _t9 = _context1.v;
            setGlobalError(_t9.message);
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[1, 3]]);
    }));
    return function handleSaveBarber(_x8) {
      return _ref51.apply(this, arguments);
    };
  }();
  var handleDeleteBarber = /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(barber) {
      var _t0;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (barber !== null && barber !== void 0 && barber.id) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            if (window.confirm('Удалить барбера без возможности восстановления?')) {
              _context10.n = 2;
              break;
            }
            return _context10.a(2);
          case 2:
            _context10.p = 2;
            _context10.n = 3;
            return apiRequest("/Barbers/".concat(encodeURIComponent(barber.id)), {
              method: 'DELETE'
            });
          case 3:
            fetchAll();
            _context10.n = 5;
            break;
          case 4:
            _context10.p = 4;
            _t0 = _context10.v;
            setGlobalError(_t0.message || 'Не удалось удалить барбера');
          case 5:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 4]]);
    }));
    return function handleDeleteBarber(_x9) {
      return _ref52.apply(this, arguments);
    };
  }();
  var handleAddBarber = /*#__PURE__*/function () {
    var _ref53 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(payload) {
      var newBarberPayload, id, body, _t1;
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
            _t1 = _context11.v;
            setGlobalError(_t1.message || 'Не удалось добавить барбера');
          case 4:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 3]]);
    }));
    return function handleAddBarber(_x0) {
      return _ref53.apply(this, arguments);
    };
  }();
  var handleSaveService = useCallback(/*#__PURE__*/function () {
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(service) {
      var _t10;
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
            _t10 = _context12.v;
            setGlobalError(_t10.message || 'Не удалось сохранить услугу');
          case 4:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 3]]);
    }));
    return function (_x1) {
      return _ref54.apply(this, arguments);
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
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(service) {
      var _t11;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (service !== null && service !== void 0 && service.id) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            if (window.confirm('Удалить услугу?')) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2);
          case 2:
            _context13.p = 2;
            _context13.n = 3;
            return apiRequest("/services/full/".concat(encodeURIComponent(service.id)), {
              method: 'DELETE'
            });
          case 3:
            fetchAll();
            _context13.n = 5;
            break;
          case 4:
            _context13.p = 4;
            _t11 = _context13.v;
            setGlobalError(_t11.message || 'Не удалось удалить услугу');
          case 5:
            return _context13.a(2);
        }
      }, _callee13, null, [[2, 4]]);
    }));
    return function handleDeleteService(_x10) {
      return _ref55.apply(this, arguments);
    };
  }();
  var handleAddService = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(payload) {
      var _t12;
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
            _t12 = _context14.v;
            setGlobalError(_t12.message || 'Не удалось добавить услугу');
          case 4:
            return _context14.a(2);
        }
      }, _callee14, null, [[1, 3]]);
    }));
    return function handleAddService(_x11) {
      return _ref56.apply(this, arguments);
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
    var _ref57 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(enabled) {
      var _t13;
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
            _t13 = _context15.v;
            setGlobalError(_t13.message || 'Не удалось обновить настройки бота');
          case 3:
            return _context15.a(2);
        }
      }, _callee15, null, [[0, 2]]);
    }));
    return function handleBotToggle(_x12) {
      return _ref57.apply(this, arguments);
    };
  }();
  var handleBotAction = /*#__PURE__*/function () {
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(action) {
      var _t14;
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
            _t14 = _context16.v;
            setGlobalError(_t14.message || 'Не удалось выполнить действие');
          case 3:
            return _context16.a(2);
        }
      }, _callee16, null, [[0, 2]]);
    }));
    return function handleBotAction(_x13) {
      return _ref58.apply(this, arguments);
    };
  }();
  var handleSaveSettings = /*#__PURE__*/function () {
    var _ref59 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(payload) {
      var _t15;
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
            _t15 = _context17.v;
            setGlobalError(_t15.message || 'Не удалось сохранить настройки');
          case 4:
            return _context17.a(2);
        }
      }, _callee17, null, [[1, 3]]);
    }));
    return function handleSaveSettings(_x14) {
      return _ref59.apply(this, arguments);
    };
  }();
  var handleSaveMessage = /*#__PURE__*/function () {
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(id, draft, persist) {
      var _t16;
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
            _t16 = _context18.v;
            setGlobalError(_t16.message || 'Не удалось сохранить сообщение');
          case 4:
            return _context18.a(2);
        }
      }, _callee18, null, [[1, 3]]);
    }));
    return function handleSaveMessage(_x15, _x16, _x17) {
      return _ref60.apply(this, arguments);
    };
  }();
  var handleRestoreBackup = /*#__PURE__*/function () {
    var _ref61 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(filename) {
      var _t17;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            if (filename) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            if (window.confirm("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 ".concat(filename, "?"))) {
              _context19.n = 2;
              break;
            }
            return _context19.a(2);
          case 2:
            _context19.p = 2;
            _context19.n = 3;
            return apiRequest('/backups/restore', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filename: filename
              })
            });
          case 3:
            fetchAll();
            _context19.n = 5;
            break;
          case 4:
            _context19.p = 4;
            _t17 = _context19.v;
            setGlobalError(_t17.message || 'Не удалось восстановить бэкап');
          case 5:
            return _context19.a(2);
        }
      }, _callee19, null, [[2, 4]]);
    }));
    return function handleRestoreBackup(_x18) {
      return _ref61.apply(this, arguments);
    };
  }();
  var handleCreateBackup = /*#__PURE__*/function () {
    var _ref62 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var _t18;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            if (window.confirm('Создать новую резервную копию?')) {
              _context20.n = 1;
              break;
            }
            return _context20.a(2);
          case 1:
            _context20.p = 1;
            _context20.n = 2;
            return apiRequest('/backups/create', {
              method: 'POST'
            });
          case 2:
            fetchAll();
            _context20.n = 4;
            break;
          case 3:
            _context20.p = 3;
            _t18 = _context20.v;
            setGlobalError(_t18.message || 'Не удалось создать бэкап');
          case 4:
            return _context20.a(2);
        }
      }, _callee20, null, [[1, 3]]);
    }));
    return function handleCreateBackup() {
      return _ref62.apply(this, arguments);
    };
  }();
  var openProfile = useCallback(/*#__PURE__*/function () {
    var _ref63 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(name) {
      var payload, _t19;
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
            _t19 = _context21.v;
            setProfileModal({
              open: true,
              data: {
                error: _t19.message || 'Не удалось загрузить профиль'
              },
              loading: false
            });
          case 5:
            return _context21.a(2);
        }
      }, _callee21, null, [[2, 4]]);
    }));
    return function (_x19) {
      return _ref63.apply(this, arguments);
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
    var _ref65 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(appointment) {
      var options;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            _context23.n = 1;
            return ensureOptions();
          case 1:
            options = _context23.v;
            setAppointmentModal({
              open: true,
              data: appointment,
              options: options,
              isNew: false
            });
          case 2:
            return _context23.a(2);
        }
      }, _callee23);
    }));
    return function (_x20) {
      return _ref65.apply(this, arguments);
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
            isNew: true
          });
        case 2:
          return _context24.a(2);
      }
    }, _callee24);
  })), [ensureOptions, session === null || session === void 0 ? void 0 : session.displayName, session === null || session === void 0 ? void 0 : session.username]);
  var handleSaveAppointment = /*#__PURE__*/function () {
    var _ref68 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(_ref67) {
      var id, payload, isNew, _t20;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            id = _ref67.id, payload = _ref67.payload, isNew = _ref67.isNew;
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
                isNew: false
              });
            });
            fetchAll();
            _context25.n = 6;
            break;
          case 5:
            _context25.p = 5;
            _t20 = _context25.v;
            setGlobalError(_t20.message || 'Не удалось сохранить запись');
          case 6:
            return _context25.a(2);
        }
      }, _callee25, null, [[1, 5]]);
    }));
    return function handleSaveAppointment(_x21) {
      return _ref68.apply(this, arguments);
    };
  }();
  var handleRefreshUpdate = /*#__PURE__*/function () {
    var _ref69 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
      var info, _t21;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            setSystemBusy(true);
            _context26.p = 1;
            _context26.n = 2;
            return apiRequest('/system/update?force=1');
          case 2:
            info = _context26.v;
            setUpdateInfo(info);
            _context26.n = 4;
            break;
          case 3:
            _context26.p = 3;
            _t21 = _context26.v;
            setGlobalError(_t21.message || 'Не удалось проверить обновления');
          case 4:
            _context26.p = 4;
            setSystemBusy(false);
            return _context26.f(4);
          case 5:
            return _context26.a(2);
        }
      }, _callee26, null, [[1, 3, 4, 5]]);
    }));
    return function handleRefreshUpdate() {
      return _ref69.apply(this, arguments);
    };
  }();
  var handleApplyUpdate = /*#__PURE__*/function () {
    var _ref70 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
      var result, _t22;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            if (window.confirm('Обновить CRM и бота до последней версии?')) {
              _context27.n = 1;
              break;
            }
            return _context27.a(2);
          case 1:
            setSystemBusy(true);
            _context27.p = 2;
            _context27.n = 3;
            return apiRequest('/system/update', {
              method: 'POST'
            });
          case 3:
            result = _context27.v;
            setUpdateInfo(result.info || result);
            fetchAll();
            _context27.n = 5;
            break;
          case 4:
            _context27.p = 4;
            _t22 = _context27.v;
            setGlobalError(_t22.message || 'Не удалось применить обновление');
          case 5:
            _context27.p = 5;
            setSystemBusy(false);
            return _context27.f(5);
          case 6:
            return _context27.a(2);
        }
      }, _callee27, null, [[2, 4, 5, 6]]);
    }));
    return function handleApplyUpdate() {
      return _ref70.apply(this, arguments);
    };
  }();
  if (!(session !== null && session !== void 0 && session.token)) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: handleLogin,
      error: authError
    });
  }
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
      case 'barbers':
        return /*#__PURE__*/React.createElement(BarbersView, {
          barbers: barbers,
          onFieldChange: handleBarberFieldChange,
          onSave: handleSaveBarber,
          onAdd: handleAddBarber,
          onDelete: handleDeleteBarber
        });
      case 'services':
        return /*#__PURE__*/React.createElement(ServicesView, {
          services: services,
          barbers: barbers,
          onFieldChange: handleServiceFieldChange,
          onPriceChange: handleServicePriceChange,
          onDelete: handleDeleteService,
          onAdd: handleAddService
        });
      case 'tables':
        return /*#__PURE__*/React.createElement(TablesWorkspace, {
          apiRequest: apiRequest,
          sharedOptions: optionsCache,
          onOptionsUpdate: setOptionsCache,
          onOpenProfile: openProfile,
          clients: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.clients) || [],
          currentUser: session || null,
          liveAppointments: (realtimeSnapshot === null || realtimeSnapshot === void 0 ? void 0 : realtimeSnapshot.rows) || null,
          liveUpdatedAt: (realtimeSnapshot === null || realtimeSnapshot === void 0 ? void 0 : realtimeSnapshot.updatedAt) || null
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
          isNew: false
        });
      });
    },
    onSave: handleSaveAppointment,
    isNew: appointmentModal.isNew,
    clients: (dashboard === null || dashboard === void 0 ? void 0 : dashboard.clients) || []
  }));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIl9SZWFjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJGcmFnbWVudCIsIl9SZWFjdERPTSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiY3JlYXRlUm9vdCIsIkRFRkFVTFRfQVBJX0JBU0VfVVJMIiwiQVBJX0JBU0VfVVJMIiwid2luZG93IiwiX19CQVJCRVJfQVBJX0JBU0VfXyIsIlZJRVdfVEFCUyIsImlkIiwibGFiZWwiLCJUQUJMRV9PUkRFUiIsIkRBVEFfVEFCTEVTIiwiVEFCTEVfQ09ORklHIiwiQXBwb2ludG1lbnRzIiwiY2FuQ3JlYXRlIiwic3VwcG9ydHNCYXJiZXJGaWx0ZXIiLCJzdXBwb3J0c1N0YXR1c0ZpbHRlciIsImRlZmF1bHRTb3J0Iiwia2V5IiwiZGlyZWN0aW9uIiwiU2NoZWR1bGVzIiwiVXNlcnMiLCJDb3N0IiwiVEFCTEVfQ09MVU1OUyIsImVkaXRhYmxlIiwidHlwZSIsImlzUHJvZmlsZUxpbmsiLCJtaW5XaWR0aCIsIm9wdGlvbnNLZXkiLCJhbGlnbiIsIlJBVElOR19NSU4iLCJSQVRJTkdfTUFYIiwiUkFUSU5HX1NURVAiLCJhdmF0YXJPcHRpb25zQ2FjaGUiLCJZRUFSX0lOX01TIiwiYnVpbGROZXdCYXJiZXJTdGF0ZSIsInBhc3N3b3JkIiwicmF0aW5nIiwiY29sb3IiLCJhdmF0YXJVcmwiLCJkZXNjcmlwdGlvbiIsInBob25lIiwidGVsZWdyYW1JZCIsImlzQWN0aXZlIiwiZ2V0UmVjb3JkSWQiLCJyZWNvcmQiLCJ1bmRlZmluZWQiLCJJZCIsIklEIiwicmVjb3JkSWQiLCJJRF9SZWNvcmQiLCJjbGFzc05hbWVzIiwiX2xlbiIsImNsYXNzZXMiLCJfa2V5IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJpbml0aWFsVmFsdWUiLCJfdXNlU3RhdGUiLCJzdG9yZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIl91c2VTdGF0ZTIiLCJzZXRWYWx1ZSIsInVwZGF0ZVZhbHVlIiwidXBkYXRlciIsInByZXYiLCJuZXh0VmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlTm93VGljayIsImludGVydmFsTXMiLCJfdXNlU3RhdGUzIiwiRGF0ZSIsIm5vdyIsIl91c2VTdGF0ZTQiLCJzZXROb3ciLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInVzZU91dHNpZGVDbGljayIsInJlZiIsImhhbmRsZXIiLCJsaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZldGNoQXZhdGFyT3B0aW9ucyIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJwYXlsb2FkIiwiaW1hZ2VzIiwiX2NvbnRleHQiLCJmZXRjaCIsImNvbmNhdCIsIm9rIiwiRXJyb3IiLCJqc29uIiwibm9ybWFsaXplVGV4dCIsIlN0cmluZyIsImNhbm9uaWNhbGl6ZU5hbWUiLCJyZXBsYWNlIiwidHJpbSIsInJlc29sdmVMb2dpbiIsImJ1aWxkU2Vzc2lvblBheWxvYWQiLCJub3JtYWxpemVkTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwiX29iamVjdFNwcmVhZCIsImJhcmJlcklkIiwicGlja0JhcmJlckZvclVzZXIiLCJ1c2VyU2Vzc2lvbiIsImF2YWlsYWJsZUJhcmJlcnMiLCJmYWxsYmFjayIsImNhbmRpZGF0ZXMiLCJwcmVmZXJyZWROYW1lIiwibWFwIiwiY2FuZGlkYXRlIiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemVkT3B0aW9ucyIsImJhcmJlciIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJfbG9vcCIsIm1hdGNoSW5kZXgiLCJmaW5kSW5kZXgiLCJvcHRpb24iLCJfcmV0IiwicyIsImVyciIsImZvcm1hdERhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUaW1lIiwic2FmZVZhbHVlIiwiaW5jbHVkZXMiLCJzcGxpdCIsImZvcm1hdFBob25lSW5wdXQiLCJkaWdpdHMiLCJub3JtYWxpemVkIiwic3RhcnRzV2l0aCIsImZvcm1hdERhdGVUaW1lIiwiZGF0ZSIsInRpbWUiLCJkYXRlUGFydCIsInRpbWVQYXJ0IiwiZm9ybWF0RGF0ZUhlYWRpbmciLCJvcHRpb25zIiwid2Vla2RheSIsInBhcnNlZCIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsImZvcm1hdERhdGVCYWRnZUxhYmVsIiwiZm9ybWF0TGl2ZVRpbWVzdGFtcCIsIm5vd1RzIiwiZGlmZk1zIiwiTWF0aCIsIm1heCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJwYWRTdGFydCIsImhvdXJzIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwiU1RBVFVTX1RSQU5TTEFUSU9OUyIsImFjdGl2ZSIsImNvbmZpcm0iLCJjb25maXJtZWQiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImZpbmlzaGVkIiwiY2FuY2VsIiwiY2FuY2VsZWQiLCJjYW5jZWxsZWQiLCJub3Nob3ciLCJtaXNzZWQiLCJwZW5kaW5nIiwid2FpdCIsIndhaXRpbmciLCJwcm9jZXNzaW5nIiwiU1RBVFVTX0JBREdFX01BUCIsItCQ0LrRgtC40LLQvdCw0Y8iLCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAiLCLQl9Cw0LLQtdGA0YjQtdC90LAiLCLQntGC0LzQtdC90LXQvdCwIiwiZ2V0U3RhdHVzQmFkZ2VDbGFzc2VzIiwic3RhdHVzIiwibm9ybWFsaXplU3RhdHVzVmFsdWUiLCJJTkFDVElWRV9TVEFUVVNfVE9LRU5TIiwiQUNUSVZFX1NUQVRVU19UT0tFTlMiLCJDT01QTEVURURfU1RBVFVTX1RPS0VOUyIsInRyYW5zbGF0ZWQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm5vcm1hbGl6ZVN0YXR1c0xpc3QiLCJzdGF0dXNlcyIsInNlZW4iLCJTZXQiLCJoYXMiLCJhZGQiLCJpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzIiwic29tZSIsInRva2VuIiwic2FuaXRpemVUaW1lVG9rZW4iLCJtYXRjaCIsInBhcnNlVGltZVJhbmdlVmFsdWUiLCJzYWZlIiwic3RhcnQiLCJlbmQiLCJfc2FmZSRzcGxpdCRtYXAiLCJwYXJ0IiwiX3NhZmUkc3BsaXQkbWFwMiIsInJhd1N0YXJ0IiwiX3NhZmUkc3BsaXQkbWFwMiQiLCJyYXdFbmQiLCJwYXJzZVRpbWVSYW5nZVBhcnRzIiwiYnVpbGRUaW1lUmFuZ2VWYWx1ZSIsInNhZmVTdGFydCIsInNhZmVFbmQiLCJfcmVmMiIsIl9yZWYzIiwidG8iLCJleHRyYWN0VGltZVN0YXJ0IiwiZ2V0QXBwb2ludG1lbnRTdGFydERhdGUiLCJkYXRlVmFsdWUiLCJ0aW1lVmFsdWUiLCJmYWxsYmFja0lzbyIsInBhcnNlZEZhbGxiYWNrIiwiaXNvQ2FuZGlkYXRlIiwiaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyIsInNob3VsZERpc3BsYXlBcHBvaW50bWVudCIsImFwcG9pbnRtZW50IiwiU3RhdHVzIiwic3RhcnREYXRlIiwiVGltZSIsInN0YXJ0RGF0ZVRpbWUiLCJwYXJzZU11bHRpVmFsdWUiLCJpdGVtIiwiTG9hZGluZ1N0YXRlIiwiX3JlZjQiLCJfcmVmNCRsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJFcnJvckJhbm5lciIsIl9yZWY1IiwibWVzc2FnZSIsIlNlY3Rpb25DYXJkIiwiX3JlZjYiLCJ0aXRsZSIsImFjdGlvbnMiLCJjaGlsZHJlbiIsIkxpdmVCYWRnZSIsIl9yZWY3IiwidGltZXN0YW1wIiwiX3JlZjckbGFiZWwiLCJ0aWNraW5nTm93IiwidGltZUxhYmVsIiwiSWNvblRyYXNoIiwiX3JlZjgiLCJfcmVmOCRjbGFzc05hbWUiLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwb2ludHMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1vZGFsIiwiX3JlZjkiLCJpc09wZW4iLCJvbkNsb3NlIiwiZm9vdGVyIiwiX3JlZjkkbWF4V2lkdGhDbGFzcyIsIm1heFdpZHRoQ2xhc3MiLCJvbkNsaWNrIiwiU3RhdENhcmQiLCJfcmVmMCIsIl9yZWYwJGFjY2VudCIsImFjY2VudCIsIlNpZGViYXIiLCJfcmVmMSIsInNlc3Npb24iLCJhY3RpdmVUYWIiLCJvbkNoYW5nZSIsIm9uTG9nb3V0IiwidGFiIiwiTW9iaWxlVGFicyIsIl9yZWYxMCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImhhbmRsZVNlbGVjdCIsInRhYklkIiwiRGFzaGJvYXJkVmlldyIsIl9yZWYxMSIsIl9kYXRhJGFwcG9pbnRtZW50cyIsIl9zdGF0cyR0b3RhbFVzZXJzIiwiX3N0YXRzJGFjdGl2ZUFwcG9pbnRtIiwiX3N0YXRzJGNvbmZpcm1lZFllYXIiLCJfc3RhdHMkdG9kYXlzQXBwb2ludG0iLCJkYXRhIiwib25PcGVuQXBwb2ludG1lbnQiLCJvbk9wZW5Qcm9maWxlIiwib25DcmVhdGVBcHBvaW50bWVudCIsIl9yZWYxMSRsaXZlTWV0YSIsImxpdmVNZXRhIiwic3RhdHMiLCJ1cGNvbWluZ1JhdyIsImFwcG9pbnRtZW50cyIsInVwY29taW5nIiwidXBjb21pbmdMaXN0IiwiYXBwdCIsInNvcnQiLCJiIiwiX2dldEFwcG9pbnRtZW50U3RhcnREIiwiX2dldEFwcG9pbnRtZW50U3RhcnREMiIsImxlZnQiLCJNQVhfU0FGRV9JTlRFR0VSIiwicmlnaHQiLCJmb3JtYXRHcm91cExhYmVsIiwiX3VudXNlZCIsImdyb3VwZWRVcGNvbWluZyIsImdyb3VwcyIsIk1hcCIsImZvckVhY2giLCJidWNrZXQiLCJnZXQiLCJzZXQiLCJlbnRyaWVzIiwiX3JlZjEyIiwiX3JlZjEzIiwiaXRlbXMiLCJzb3J0VmFsdWUiLCJtaW4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQzIiwidXBjb21pbmdBY3Rpb25zIiwidXBkYXRlZEF0IiwidG90YWxVc2VycyIsImFjdGl2ZUFwcG9pbnRtZW50cyIsImNvbmZpcm1lZFllYXIiLCJ0b2RheXNBcHBvaW50bWVudHMiLCJncm91cCIsImNhcmRQcm9wcyIsInJvbGUiLCJ0YWJJbmRleCIsIm9uS2V5RG93biIsIl9wYXJzZVRpbWVSYW5nZVBhcnRzIiwic3RhdHVzTGFiZWwiLCJzZXJ2aWNlc0xpc3QiLCJTZXJ2aWNlcyIsInBob25lTGFiZWwiLCJQaG9uZSIsInBob25lSHJlZiIsIl9leHRlbmRzIiwiQ3VzdG9tZXJOYW1lIiwiQmFyYmVyIiwic3RvcFByb3BhZ2F0aW9uIiwic2VydmljZSIsImluZGV4IiwiaHJlZiIsIlVzZXJJRCIsIkJhcmJlckF2YXRhclBpY2tlciIsIl9yZWYxNCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYXZhdGFyT3B0aW9ucyIsInNldEF2YXRhck9wdGlvbnMiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwic2hvd0dhbGxlcnkiLCJzZXRTaG93R2FsbGVyeSIsImF2YWlsYWJsZU9wdGlvbnMiLCJpc01vdW50ZWQiLCJsb2FkIiwiX3JlZjE1IiwiX2NhbGxlZTIiLCJhc3NldHMiLCJfdCIsIl9jb250ZXh0MiIsInByZXZpZXdTcmMiLCJzcmMiLCJhbHQiLCJkaXNhYmxlZCIsInByZXNldCIsImlzU2VsZWN0ZWQiLCJSYXRpbmdTbGlkZXIiLCJfcmVmMTYiLCJfcmVmMTYkZGVuc2UiLCJkZW5zZSIsInJhdGluZ1ZhbHVlIiwidG9GaXhlZCIsIndyYXBwZXJDbGFzcyIsImxhYmVsQ2xhc3MiLCJzdGVwIiwiQmFyYmVyc1ZpZXciLCJfcmVmMTciLCJfcmVmMTckYmFyYmVycyIsImJhcmJlcnMiLCJvbkZpZWxkQ2hhbmdlIiwib25TYXZlIiwib25BZGQiLCJvbkRlbGV0ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJuZXdCYXJiZXIiLCJzZXROZXdCYXJiZXIiLCJ1cGRhdGVOZXdCYXJiZXIiLCJmaWVsZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZUNyZWF0ZUJhcmJlciIsIl9uZXdCYXJiZXIkbmFtZSIsIl9uZXdCYXJiZXIkcGFzc3dvcmQiLCJyZW5kZXJCYXJiZXJDYXJkIiwiY29sb3JWYWx1ZSIsInBsYWNlaG9sZGVyIiwicm93cyIsImNoZWNrZWQiLCJTZXJ2aWNlc1ZpZXciLCJfcmVmMTgiLCJfcmVmMTgkc2VydmljZXMiLCJzZXJ2aWNlcyIsIl9yZWYxOCRiYXJiZXJzIiwib25QcmljZUNoYW5nZSIsIl91c2VTdGF0ZTEzIiwiZHVyYXRpb24iLCJwcmljZXMiLCJfdXNlU3RhdGUxNCIsIm5ld1NlcnZpY2UiLCJzZXROZXdTZXJ2aWNlIiwidXBkYXRlTmV3U2VydmljZSIsInVwZGF0ZU5ld1NlcnZpY2VQcmljZSIsIl9zZXJ2aWNlJHByaWNlcyRiYXJiZSIsIl9zZXJ2aWNlJHByaWNlcyIsIl9uZXdTZXJ2aWNlJHByaWNlcyRiYSIsIl9uZXdTZXJ2aWNlJHByaWNlcyIsIk11bHRpU2VsZWN0Q2VsbCIsIl9yZWYxOSIsIl9yZWYxOSRvcHRpb25zIiwib25Db21taXQiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwib3BlbiIsInNldE9wZW4iLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiZHJhZnQiLCJzZXREcmFmdCIsImFuY2hvclJlZiIsIl91c2VTdGF0ZTE5IiwidG9wIiwiX3VzZVN0YXRlMjAiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwidXBkYXRlUG9zaXRpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFuZWxXaWR0aCIsInBhbmVsSGVpZ2h0IiwibmV4dExlZnQiLCJpbm5lcldpZHRoIiwibmV4dFRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwidG9nZ2xlT3B0aW9uIiwiaGFuZGxlU2F2ZSIsInN1bW1hcnkiLCJzdHlsZSIsImJvZHkiLCJUaW1lUmFuZ2VQaWNrZXIiLCJfcmVmMjAiLCJfcmVmMjAkdGl0bGUiLCJfcmVmMjAkcGxhY2Vob2xkZXIiLCJfcmVmMjAkYnV0dG9uQ2xhc3NOYW0iLCJidXR0b25DbGFzc05hbWUiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIl91c2VTdGF0ZTI0JCIsIm5vcm1hbGl6ZUhvdXJWYWx1ZSIsImlucHV0VmFsdWUiLCJfaW5wdXRWYWx1ZSRzcGxpdCIsIl9pbnB1dFZhbHVlJHNwbGl0MiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbGVhciIsIkVkaXRhYmxlQ2VsbCIsIl9yZWYyMSIsImNvbHVtbiIsIm9uVXBkYXRlIiwidGFibGVJZCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJjb21taXQiLCJvcHRpb25MaXN0Iiwib25CbHVyIiwiQ29sdW1uTWVudSIsIl9yZWYyMiIsImNvbHVtbnMiLCJfcmVmMjIkaGlkZGVuQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJvblRvZ2dsZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJNdWx0aVNlbGVjdENoZWNrYm94ZXMiLCJfcmVmMjMiLCJfcmVmMjMkb3B0aW9ucyIsIl9yZWYyMyR2YWx1ZSIsIl9yZWYyMyRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VsZWN0ZWQiLCJub3JtYWxpemVkUXVlcnkiLCJmaWx0ZXJlZCIsInRvZ2dsZSIsImV4aXN0cyIsIkNsaWVudExvb2t1cElucHV0IiwiX3JlZjI0IiwiX3JlZjI0JGxhYmVsIiwiX3JlZjI0JHZhbHVlIiwiX3JlZjI0JGNsaWVudHMiLCJjbGllbnRzIiwib25TZWxlY3RDbGllbnQiLCJfcmVmMjQkcGxhY2Vob2xkZXIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImNvbnRhaW5lclJlZiIsIm1hdGNoZXMiLCJzaG9ydGxpc3QiLCJjbGllbnQiLCJvbkZvY3VzIiwib25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0YXR1c01lbnUiLCJfcmVmMjUiLCJfcmVmMjUkc3RhdHVzZXMiLCJfcmVmMjUkaGlkZGVuU3RhdHVzZXMiLCJoaWRkZW5TdGF0dXNlcyIsIm9uUmVzZXQiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiVGFibGVUb29sYmFyIiwiX3JlZjI2Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZEJhcmJlciIsInNldFNlbGVjdGVkQmFyYmVyIiwidG9nZ2xlU3RhdHVzIiwicmVzZXRTdGF0dXNlcyIsInRvZ2dsZUNvbHVtbiIsIm9uT3BlbkNyZWF0ZSIsIm9uUmVmcmVzaCIsInNob3dQYXN0QXBwb2ludG1lbnRzIiwic2V0U2hvd1Bhc3RBcHBvaW50bWVudHMiLCJfcmVmMjYkc3VwcG9ydHNHcm91cGkiLCJzdXBwb3J0c0dyb3VwaW5nIiwiX3JlZjI2JGdyb3VwQnlEYXRlIiwiZ3JvdXBCeURhdGUiLCJzZXRHcm91cEJ5RGF0ZSIsIl9yZWYyNiRsYXN0VXBkYXRlZEF0IiwibGFzdFVwZGF0ZWRBdCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJidWlsZEFwcG9pbnRtZW50R3JvdXBzIiwicmVjb3JkcyIsImJ1Y2tldHMiLCJfcmVmMjciLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ2IiwiX3JlZjI4Iiwic29ydGVkSXRlbXMiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ0IiwiX2dldEFwcG9pbnRtZW50U3RhcnRENSIsInJlZmVyZW5jZSIsInJhbmRvbSIsIlNvcnRJbmRpY2F0b3IiLCJfcmVmMjkiLCJEYXRhVGFibGUiLCJfcmVmMzAiLCJzb3J0Q29uZmlnIiwib25Tb3J0IiwiX3JlZjMwJGdyb3VwQnlEYXRlIiwidmlzaWJsZUNvbHVtbnMiLCJncm91cGVkUm93cyIsInNvcnRhYmxlIiwiY29sU3BhbiIsIkNyZWF0ZVJlY29yZE1vZGFsIiwiX3JlZjMxIiwidGFibGVOYW1lIiwiX3JlZjMxJGNsaWVudHMiLCJfcmVmMzEkaGlkZGVuRmllbGRzIiwiaGlkZGVuRmllbGRzIiwiZWRpdGFibGVDb2x1bW5zIiwiaW5pdGlhbFN0YXRlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImlzQXBwb2ludG1lbnRzQ3JlYXRlIiwiaGFuZGxlU3VibWl0IiwiX3JlZjMyIiwiX3JlZjMzIiwiaGFuZGxlQ2xpZW50QXV0b0ZpbGwiLCJwcmVmZXJyZWRCYXJiZXIiLCJUZWxlZ3JhbUlEIiwic2VsZWN0ZWRWYWx1ZXMiLCJQcm9maWxlTW9kYWwiLCJfcmVmMzQiLCJfc3RhdGUkZGF0YSIsIl9zdGF0ZSRkYXRhMiIsIl9zdGF0ZSRkYXRhMyIsIl9zdGF0ZSRkYXRhNCIsInN0YXRlIiwidmlzaXRIaXN0b3J5IiwiY3V0b2ZmIiwib3JkZXJOdW1iZXIiLCJkYXRlTGFiZWwiLCJ1c2VyIiwiTmFtZSIsImlzTGF0ZXN0IiwiQmFja3Vwc1BhbmVsIiwiX3JlZjM1IiwiX3JlZjM1JGJhY2t1cHMiLCJiYWNrdXBzIiwib25SZXN0b3JlIiwib25DcmVhdGUiLCJiYWNrdXAiLCJBcHBvaW50bWVudE1vZGFsIiwiX3JlZjM2IiwiX3JlZjM2JG9wdGlvbnMiLCJfcmVmMzYkaXNOZXciLCJpc05ldyIsIl9yZWYzNiRjbGllbnRzIiwiYnVpbGREcmFmdCIsInVzZXJJZCIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzZXJ2aWNlc1NlbGVjdGlvbiIsImhhbmRsZUNoYW5nZSIsIlRhYmxlc1dvcmtzcGFjZSIsIl9yZWYzNyIsIl9UQUJMRV9DT05GSUckYWN0aXZlVCIsImFwaVJlcXVlc3QiLCJzaGFyZWRPcHRpb25zIiwib25PcHRpb25zVXBkYXRlIiwiX3JlZjM3JGNsaWVudHMiLCJfcmVmMzckY3VycmVudFVzZXIiLCJjdXJyZW50VXNlciIsIl9yZWYzNyRsaXZlQXBwb2ludG1lbiIsImxpdmVBcHBvaW50bWVudHMiLCJfcmVmMzckbGl2ZVVwZGF0ZWRBdCIsImxpdmVVcGRhdGVkQXQiLCJfdXNlTG9jYWxTdG9yYWdlIiwiX3VzZUxvY2FsU3RvcmFnZTIiLCJhY3RpdmVUYWJsZSIsInNldEFjdGl2ZVRhYmxlIiwiX3VzZVN0YXRlNDEiLCJyZWR1Y2UiLCJhY2MiLCJ0YWJsZSIsIl91c2VTdGF0ZTQyIiwidGFibGVzIiwic2V0VGFibGVzIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImRyb3Bkb3duT3B0aW9ucyIsInNldERyb3Bkb3duT3B0aW9ucyIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJ0YWJsZUVycm9yIiwic2V0VGFibGVFcnJvciIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJfdXNlTG9jYWxTdG9yYWdlMyIsIl91c2VMb2NhbFN0b3JhZ2U0IiwiX3VzZUxvY2FsU3RvcmFnZTUiLCJfdXNlTG9jYWxTdG9yYWdlNiIsInNldEhpZGRlblN0YXR1c2VzIiwiX3VzZUxvY2FsU3RvcmFnZTciLCJfdXNlTG9jYWxTdG9yYWdlOCIsImhpZGRlbkNvbHVtbnNNYXAiLCJzZXRIaWRkZW5Db2x1bW5zTWFwIiwiX3VzZUxvY2FsU3RvcmFnZTkiLCJfVEFCTEVfQ09ORklHJHRhYmxlIiwiX3VzZUxvY2FsU3RvcmFnZTAiLCJzb3J0Q29uZmlncyIsInNldFNvcnRDb25maWdzIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImNyZWF0ZU1vZGFsT3BlbiIsInNldENyZWF0ZU1vZGFsT3BlbiIsIl91c2VMb2NhbFN0b3JhZ2UxIiwiX3VzZUxvY2FsU3RvcmFnZTEwIiwiX3VzZUxvY2FsU3RvcmFnZTExIiwiX3VzZUxvY2FsU3RvcmFnZTEyIiwiZ3JvdXBBcHBvaW50bWVudHNCeURhdGUiLCJzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsImFwcG9pbnRtZW50VGVtcGxhdGUiLCJ0b0lTT1N0cmluZyIsImV2ZXJ5IiwiZmV0Y2hUYWJsZXMiLCJfY2FsbGVlMyIsInJlc3BvbnNlcyIsIm5leHRUYWJsZXMiLCJyYXdPcHRpb25zIiwiX3QyIiwiX2NvbnRleHQzIiwiYWxsIiwicm93IiwiY3VycmVudENvbHVtbnMiLCJwcm9jZXNzZWRSb3dzIiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUMiIsInNvdXJjZSIsImhhbmRsZVNvcnQiLCJjb2x1bW5LZXkiLCJoaWRkZW4iLCJzaXplIiwiaGFuZGxlVXBkYXRlIiwiX3JlZjM5IiwiX2NhbGxlZTQiLCJub3JtYWxpemVkRGF0YSIsIm9yaWdpbmFsIiwiX3QzIiwiX2NvbnRleHQ0IiwibGlzdCIsImZpbmQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJfeCIsIl94MiIsImhhbmRsZURlbGV0ZSIsIl9yZWY0MCIsIl9jYWxsZWU1IiwiX3Q0IiwiX2NvbnRleHQ1IiwiX3gzIiwiaGFuZGxlQ3JlYXRlUmVjb3JkIiwiX3JlZjQxIiwiX2NhbGxlZTYiLCJub3JtYWxpemVkUGF5bG9hZCIsIl90NSIsIl9jb250ZXh0NiIsImhlYWRlcnMiLCJfeDQiLCJ0YWJsZVNldHRpbmdzIiwiX1RBQkxFX0NPTkZJRyR0YWJsZTIiLCJfcmVmNDIiLCJCb3RDb250cm9sVmlldyIsIl9yZWY0MyIsInNldHRpbmdzIiwiX3JlZjQzJGJhY2t1cHMiLCJfcmVmNDMkbWVzc2FnZXMiLCJtZXNzYWdlcyIsIm9uVG9nZ2xlRW5hYmxlZCIsIm9uU3RhcnQiLCJvblN0b3AiLCJvblJlc3RhcnQiLCJvblNhdmVTZXR0aW5ncyIsIm9uU2F2ZU1lc3NhZ2UiLCJvblJlc3RvcmVCYWNrdXAiLCJvbkNyZWF0ZUJhY2t1cCIsImxpY2Vuc2VTdGF0dXMiLCJ1cGRhdGVJbmZvIiwib25SZWZyZXNoVXBkYXRlIiwib25BcHBseVVwZGF0ZSIsInN5c3RlbUJ1c3kiLCJfcmVmNDMkdmlld01vZGUiLCJ2aWV3TW9kZSIsIl91c2VTdGF0ZTUzIiwiYm90RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU1NCIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNTUiLCJhYm91dFRleHQiLCJfdXNlU3RhdGU1NiIsImFib3V0Iiwic2V0QWJvdXQiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMyIiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zMyIsInZhbGlkIiwibGljZW5zZSIsIm93bmVyIiwiZXhwaXJlc0F0IiwibnVtYmVyIiwidmVyc2lvbiIsImNoZWNrZWRBdCIsImRldGFpbHMiLCJhdmFpbGFibGUiLCJydW5uaW5nIiwiaXNCb3RFbmFibGVkIiwiTG9naW5TY3JlZW4iLCJfcmVmNDQiLCJvbkxvZ2luIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJsb2dpbk9wdGlvbnMiLCJzZXRMb2dpbk9wdGlvbnMiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3B0aW9uc0Vycm9yIiwic2V0T3B0aW9uc0Vycm9yIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsImxvYWRpbmdPcHRpb25zIiwic2V0TG9hZGluZ09wdGlvbnMiLCJmZXRjaE9wdGlvbnMiLCJfcmVmNDUiLCJfY2FsbGVlNyIsIl90NiIsIl9jb250ZXh0NyIsInNlbGVjdERpc2FibGVkIiwib25TdWJtaXQiLCJBcHAiLCJfdXNlU3RhdGU2OSIsInNhdmVkIiwiX3VzZVN0YXRlNzAiLCJzZXRTZXNzaW9uIiwiX3VzZUxvY2FsU3RvcmFnZTEzIiwiX3VzZUxvY2FsU3RvcmFnZTE0Iiwic2V0QWN0aXZlVGFiIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsImRhc2hib2FyZCIsInNldERhc2hib2FyZCIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJzZXRTZXJ2aWNlcyIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJzZXRCYXJiZXJzIiwiX3VzZVN0YXRlNzciLCJfdXNlU3RhdGU3OCIsImJvdFN0YXR1cyIsInNldEJvdFN0YXR1cyIsIl91c2VTdGF0ZTc5IiwiX3VzZVN0YXRlODAiLCJib3RTZXR0aW5ncyIsInNldEJvdFNldHRpbmdzIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsImJvdE1lc3NhZ2VzIiwic2V0Qm90TWVzc2FnZXMiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0Iiwic2V0TGljZW5zZVN0YXR1cyIsIl91c2VTdGF0ZTg1IiwiX3VzZVN0YXRlODYiLCJzZXRVcGRhdGVJbmZvIiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsIm9wdGlvbnNDYWNoZSIsInNldE9wdGlvbnNDYWNoZSIsIl91c2VTdGF0ZTg5IiwiX3VzZVN0YXRlOTAiLCJwcm9maWxlTW9kYWwiLCJzZXRQcm9maWxlTW9kYWwiLCJfdXNlU3RhdGU5MSIsIl91c2VTdGF0ZTkyIiwiYXBwb2ludG1lbnRNb2RhbCIsInNldEFwcG9pbnRtZW50TW9kYWwiLCJfdXNlU3RhdGU5MyIsIl91c2VTdGF0ZTk0IiwiX3VzZVN0YXRlOTUiLCJfdXNlU3RhdGU5NiIsImdsb2JhbEVycm9yIiwic2V0R2xvYmFsRXJyb3IiLCJfdXNlU3RhdGU5NyIsIl91c2VTdGF0ZTk4IiwiYXV0aEVycm9yIiwic2V0QXV0aEVycm9yIiwiX3VzZVN0YXRlOTkiLCJfdXNlU3RhdGUxMDAiLCJzZXRTeXN0ZW1CdXN5IiwiX3VzZVN0YXRlMTAxIiwiX3VzZVN0YXRlMTAyIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIl91c2VTdGF0ZTEwMyIsIl91c2VTdGF0ZTEwNCIsInJlYWx0aW1lU25hcHNob3QiLCJzZXRSZWFsdGltZVNuYXBzaG90IiwiX3VzZVN0YXRlMTA1IiwiX3VzZVN0YXRlMTA2IiwiZmF0YWxFcnJvciIsInNldEZhdGFsRXJyb3IiLCJzZXJ2aWNlU2F2ZVRpbWVycyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfcmVmNDYiLCJfY2FsbGVlOCIsImVuZHBvaW50IiwiX29wdGlvbnMkaGVhZGVycyIsIl9hcmdzOCIsIl9jb250ZXh0OCIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0ZXh0IiwiX3g1IiwiZmV0Y2hBbGwiLCJfY2FsbGVlOSIsIl9vdmVydmlldyRib3QiLCJvdmVydmlldyIsIndpdGhGYWxsYmFjayIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJzZXJ2aWNlc0Z1bGwiLCJiYXJiZXJzRnVsbCIsImJvdFN0YXRlIiwiYm90TWVzc2FnZXNQYXlsb2FkIiwidXBkYXRlIiwiX3Q3IiwiX2NvbnRleHQ5IiwicmVxdWVzdCIsImJvdCIsIkV2ZW50U291cmNlIiwidG9rZW5QYXJhbSIsInN0cmVhbVVybCIsImV2ZW50U291cmNlIiwiaGFuZGxlRXZlbnQiLCJvbmVycm9yIiwiY2xvc2UiLCJfcHJldiRhcHBvaW50bWVudHMiLCJuZXh0U3RhdHMiLCJuZXh0QXBwb2ludG1lbnRzIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJkZXRhaWwiLCJyZWFzb24iLCJjbGVhclRpbWVvdXQiLCJjbGVhciIsImhhbmRsZUxvZ2luIiwiX3JlZjQ4IiwiX2NhbGxlZTAiLCJub3JtYWxpemVkVXNlcm5hbWUiLCJzZXNzaW9uUGF5bG9hZCIsIl90OCIsIl9jb250ZXh0MCIsInN1Y2Nlc3MiLCJfeDYiLCJfeDciLCJoYW5kbGVCYXJiZXJGaWVsZENoYW5nZSIsIm5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkIiwiZnJvbUVudHJpZXMiLCJfcmVmNDkiLCJfcmVmNTAiLCJkZXJpdmVCYXJiZXJMb2dpbiIsImJhcmJlckRhdGEiLCJidWlsZEJhcmJlclBheWxvYWQiLCJfYmFyYmVyRGF0YSRvcmRlckluZGUiLCJmYWxsYmFja09yZGVyIiwibmlja25hbWUiLCJvcmRlckluZGV4IiwiaGFuZGxlU2F2ZUJhcmJlciIsIl9yZWY1MSIsIl9jYWxsZWUxIiwidXBkYXRlZEJhcmJlciIsIl90OSIsIl9jb250ZXh0MSIsIl94OCIsImhhbmRsZURlbGV0ZUJhcmJlciIsIl9yZWY1MiIsIl9jYWxsZWUxMCIsIl90MCIsIl9jb250ZXh0MTAiLCJfeDkiLCJoYW5kbGVBZGRCYXJiZXIiLCJfcmVmNTMiLCJfY2FsbGVlMTEiLCJuZXdCYXJiZXJQYXlsb2FkIiwiX3QxIiwiX2NvbnRleHQxMSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl94MCIsImhhbmRsZVNhdmVTZXJ2aWNlIiwiX3JlZjU0IiwiX2NhbGxlZTEyIiwiX3QxMCIsIl9jb250ZXh0MTIiLCJfeDEiLCJzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSIsInRpbWVycyIsImV4aXN0aW5nVGltZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRGVsZXRlU2VydmljZSIsIl9yZWY1NSIsIl9jYWxsZWUxMyIsIl90MTEiLCJfY29udGV4dDEzIiwiX3gxMCIsImhhbmRsZUFkZFNlcnZpY2UiLCJfcmVmNTYiLCJfY2FsbGVlMTQiLCJfdDEyIiwiX2NvbnRleHQxNCIsIl94MTEiLCJoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2UiLCJoYW5kbGVTZXJ2aWNlUHJpY2VDaGFuZ2UiLCJzZXJ2aWNlSWQiLCJoYW5kbGVCb3RUb2dnbGUiLCJfcmVmNTciLCJfY2FsbGVlMTUiLCJlbmFibGVkIiwiX3QxMyIsIl9jb250ZXh0MTUiLCJfeDEyIiwiaGFuZGxlQm90QWN0aW9uIiwiX3JlZjU4IiwiX2NhbGxlZTE2IiwiYWN0aW9uIiwiX3QxNCIsIl9jb250ZXh0MTYiLCJfeDEzIiwiaGFuZGxlU2F2ZVNldHRpbmdzIiwiX3JlZjU5IiwiX2NhbGxlZTE3IiwiX3QxNSIsIl9jb250ZXh0MTciLCJfeDE0IiwiaGFuZGxlU2F2ZU1lc3NhZ2UiLCJfcmVmNjAiLCJfY2FsbGVlMTgiLCJwZXJzaXN0IiwiX3QxNiIsIl9jb250ZXh0MTgiLCJjb2RlIiwiX3gxNSIsIl94MTYiLCJfeDE3IiwiaGFuZGxlUmVzdG9yZUJhY2t1cCIsIl9yZWY2MSIsIl9jYWxsZWUxOSIsImZpbGVuYW1lIiwiX3QxNyIsIl9jb250ZXh0MTkiLCJfeDE4IiwiaGFuZGxlQ3JlYXRlQmFja3VwIiwiX3JlZjYyIiwiX2NhbGxlZTIwIiwiX3QxOCIsIl9jb250ZXh0MjAiLCJvcGVuUHJvZmlsZSIsIl9yZWY2MyIsIl9jYWxsZWUyMSIsIl90MTkiLCJfY29udGV4dDIxIiwiX3gxOSIsImVuc3VyZU9wdGlvbnMiLCJfY2FsbGVlMjIiLCJfY29udGV4dDIyIiwiaGFuZGxlT3BlbkFwcG9pbnRtZW50IiwiX3JlZjY1IiwiX2NhbGxlZTIzIiwiX2NvbnRleHQyMyIsIl94MjAiLCJoYW5kbGVDcmVhdGVBcHBvaW50bWVudCIsIl9jYWxsZWUyNCIsIl9vcHRpb25zJHN0YXR1c2VzIiwidG9kYXkiLCJkZWZhdWx0U3RhdHVzIiwiZGVmYXVsdEJhcmJlciIsIl9jb250ZXh0MjQiLCJoYW5kbGVTYXZlQXBwb2ludG1lbnQiLCJfcmVmNjgiLCJfY2FsbGVlMjUiLCJfcmVmNjciLCJfdDIwIiwiX2NvbnRleHQyNSIsIl94MjEiLCJoYW5kbGVSZWZyZXNoVXBkYXRlIiwiX3JlZjY5IiwiX2NhbGxlZTI2IiwiaW5mbyIsIl90MjEiLCJfY29udGV4dDI2IiwiaGFuZGxlQXBwbHlVcGRhdGUiLCJfcmVmNzAiLCJfY2FsbGVlMjciLCJyZXN1bHQiLCJfdDIyIiwiX2NvbnRleHQyNyIsInJlbmRlckFjdGl2ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVhY3RBcHBSb290IiwicmVuZGVyQXBwIiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIm5vZGUiLCJpbm5lckhUTUwiXSwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsi77u/Y29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QsIEZyYWdtZW50IH0gPSBSZWFjdDtcclxuY29uc3QgeyBjcmVhdGVQb3J0YWwsIGNyZWF0ZVJvb3QgfSA9IFJlYWN0RE9NO1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMS41NTozMDAwL2FwaSc7XHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHdpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fIHx8IERFRkFVTFRfQVBJX0JBU0VfVVJMO1xyXG53aW5kb3cuX19CQVJCRVJfQVBJX0JBU0VfXyA9IEFQSV9CQVNFX1VSTDtcclxuXHJcbmNvbnN0IFZJRVdfVEFCUyA9IFtcclxuICB7IGlkOiAnZGFzaGJvYXJkJywgbGFiZWw6ICfQntCx0LfQvtGAJyB9LFxyXG4gIHsgaWQ6ICdiYXJiZXJzJywgbGFiZWw6ICfQkdCw0YDQsdC10YDRiycgfSxcclxuICB7IGlkOiAnc2VydmljZXMnLCBsYWJlbDogJ9Cj0YHQu9GD0LPQuCcgfSxcclxuICB7IGlkOiAndGFibGVzJywgbGFiZWw6ICfQotCw0LHQu9C40YbRiycgfSxcclxuICB7IGlkOiAnYm90JywgbGFiZWw6ICfQkdC+0YInIH0sXHJcbiAgeyBpZDogJ3N5c3RlbScsIGxhYmVsOiAn0KHQuNGB0YLQtdC80LAnIH0sXHJcbl07XHJcblxyXG5jb25zdCBUQUJMRV9PUkRFUiA9IFsnQXBwb2ludG1lbnRzJywgJ1NjaGVkdWxlcycsICdVc2VycycsICdDb3N0J107XHJcbmNvbnN0IERBVEFfVEFCTEVTID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJywgJ0Nvc3QnXTtcclxuXHJcbmNvbnN0IFRBQkxFX0NPTkZJRyA9IHtcclxuICBBcHBvaW50bWVudHM6IHsgbGFiZWw6ICfQl9Cw0L/QuNGB0LgnLCBjYW5DcmVhdGU6IHRydWUsIHN1cHBvcnRzQmFyYmVyRmlsdGVyOiB0cnVlLCBzdXBwb3J0c1N0YXR1c0ZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIFNjaGVkdWxlczogeyBsYWJlbDogJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1JywgY2FuQ3JlYXRlOiBmYWxzZSwgc3VwcG9ydHNCYXJiZXJGaWx0ZXI6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ0RhdGUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcclxuICBVc2VyczogeyBsYWJlbDogJ9Ca0LvQuNC10L3RgtGLJywgY2FuQ3JlYXRlOiB0cnVlLCBkZWZhdWx0U29ydDogeyBrZXk6ICdOYW1lJywgZGlyZWN0aW9uOiAnYXNjJyB9IH0sXHJcbiAgQ29zdDogeyBsYWJlbDogJ9Ca0LDRgtCw0LvQvtCzINGD0YHQu9GD0LMnLCBjYW5DcmVhdGU6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ1VzbHVnaScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG59O1xyXG5cclxuY29uc3QgVEFCTEVfQ09MVU1OUyA9IHtcclxuICBBcHBvaW50bWVudHM6IFtcclxuICAgIHsga2V5OiAnQ3VzdG9tZXJOYW1lJywgbGFiZWw6ICfQmtC70LjQtdC90YInLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDgnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdiYXJiZXJzJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnZGF0ZScsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnVGltZScsIGxhYmVsOiAn0JLRgNC10LzRjycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yOCcgfSxcclxuICAgIHsga2V5OiAnU3RhdHVzJywgbGFiZWw6ICfQodGC0LDRgtGD0YEnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnNLZXk6ICdzdGF0dXNlcycsIGFsaWduOiAnY2VudGVyJywgbWluV2lkdGg6ICd3LTI4JyB9LFxyXG4gICAgeyBrZXk6ICdTZXJ2aWNlcycsIGxhYmVsOiAn0KPRgdC70YPQs9C4JywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdtdWx0aS1zZWxlY3QnLCBvcHRpb25zS2V5OiAnc2VydmljZXMnLCBtaW5XaWR0aDogJ3ctNTYnIH0sXHJcbiAgICB7IGtleTogJ1VzZXJJRCcsIGxhYmVsOiAnSUQg0LrQu9C40LXQvdGC0LAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMjQnIH0sXHJcbiAgICB7IGtleTogJ1JlbWluZGVyMmhDbGllbnRTZW50JywgbGFiZWw6ICfQndCw0L/QvtC80LjQvdCw0L3QuNC1INC60LvQuNC10L3RgtGDJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdib29sZWFuJywgYWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICB7IGtleTogJ1JlbWluZGVyMmhCYXJiZXJTZW50JywgbGFiZWw6ICfQndCw0L/QvtC80LjQvdCw0L3QuNC1INCx0LDRgNCx0LXRgNGDJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdib29sZWFuJywgYWxpZ246ICdjZW50ZXInIH0sXHJcbiAgXSxcclxuICBTY2hlZHVsZXM6IFtcclxuICAgIHsga2V5OiAnQmFyYmVyJywgbGFiZWw6ICfQkdCw0YDQsdC10YAnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICAgIHsga2V5OiAnRGF5T2ZXZWVrJywgbGFiZWw6ICfQlNC10L3RjCDQvdC10LTQtdC70LgnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnRGF0ZScsIGxhYmVsOiAn0JTQsNGC0LAnLCBlZGl0YWJsZTogZmFsc2UsIG1pbldpZHRoOiAndy0zMicgfSxcclxuICAgIHsga2V5OiAnV2VlaycsIGxhYmVsOiAn0KHQu9C+0YLRiycsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJywgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gIF0sXHJcbiAgVXNlcnM6IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAn0JjQvNGPJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgaXNQcm9maWxlTGluazogdHJ1ZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdQaG9uZScsIGxhYmVsOiAn0KLQtdC70LXRhNC+0L0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzYnIH0sXHJcbiAgICB7IGtleTogJ1RlbGVncmFtSUQnLCBsYWJlbDogJ1RlbGVncmFtJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9Cb0Y7QsdC40LzRi9C5INC80LDRgdGC0LXRgCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ2JhcmJlcnMnLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxuICBDb3N0OiBbXHJcbiAgICB7IGtleTogJ1VzbHVnaScsIGxhYmVsOiAn0KPRgdC70YPQs9CwJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTU2JyB9LFxyXG4gICAgeyBrZXk6ICdUaW11cicsIGxhYmVsOiAn0KDRntCg0ZHQoNGY0KHRk9Ch0IInLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnVmxhZGltaXInLCBsYWJlbDogJ9CS0LvQsNC00LjQvNC40YAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnQWxpbmEnLCBsYWJlbDogJ9CQ0LvQuNC90LAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnQWxla3NleScsIGxhYmVsOiAn0JDQu9C10LrRgdC10LknLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnRGxpdGVsbm9zdCcsIGxhYmVsOiAn0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBSQVRJTkdfTUlOID0gMztcclxuY29uc3QgUkFUSU5HX01BWCA9IDU7XHJcbmNvbnN0IFJBVElOR19TVEVQID0gMC41O1xyXG5sZXQgYXZhdGFyT3B0aW9uc0NhY2hlID0gbnVsbDtcclxuY29uc3QgWUVBUl9JTl9NUyA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbmNvbnN0IGJ1aWxkTmV3QmFyYmVyU3RhdGUgPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICcnLFxyXG4gIHBhc3N3b3JkOiAnJyxcclxuICByYXRpbmc6ICc1JyxcclxuICBjb2xvcjogJyM2ZDI4ZDknLFxyXG4gIGF2YXRhclVybDogJycsXHJcbiAgZGVzY3JpcHRpb246ICcnLFxyXG4gIHBob25lOiAnJyxcclxuICB0ZWxlZ3JhbUlkOiAnJyxcclxuICBpc0FjdGl2ZTogdHJ1ZSxcclxufSk7XHJcbmNvbnN0IGdldFJlY29yZElkID0gKHJlY29yZCA9IHt9KSA9PiByZWNvcmQuaWQgfHwgcmVjb3JkLklkIHx8IHJlY29yZC5JRCB8fCByZWNvcmQucmVjb3JkSWQgfHwgcmVjb3JkLklEX1JlY29yZCB8fCBudWxsO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcbmNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RvcmVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiBzdG9yZWQgPyBKU09OLnBhcnNlKHN0b3JlZCkgOiBpbml0aWFsVmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSByZWFkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVWYWx1ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHVwZGF0ZXIpID0+IHtcclxuICAgICAgc2V0VmFsdWUoKHByZXYpID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIocHJldikgOiB1cGRhdGVyO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXh0VmFsdWUpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2Ugd3JpdGUgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtrZXldXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFt2YWx1ZSwgdXBkYXRlVmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdXNlTm93VGljayA9IChpbnRlcnZhbE1zID0gMTAwMCkgPT4ge1xyXG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZSgoKSA9PiBEYXRlLm5vdygpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXROb3coRGF0ZS5ub3coKSksIGludGVydmFsTXMpO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtpbnRlcnZhbE1zXSk7XHJcbiAgcmV0dXJuIG5vdztcclxufTtcclxuXHJcbmNvbnN0IHVzZU91dHNpZGVDbGljayA9IChyZWYsIGhhbmRsZXIpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFoYW5kbGVyKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFyZWYuY3VycmVudCB8fCByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm47XHJcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGhhbmRsZXJdKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQXZhdGFyT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2Fzc2V0cy9hdmF0YXJzYCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINGB0L/QuNGB0L7QuiDQsNCy0LDRgtCw0YDQvtCyJyk7XG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZC5pbWFnZXMpID8gcGF5bG9hZC5pbWFnZXMuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXHJcbmNvbnN0IG5vcm1hbGl6ZVRleHQgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBTdHJpbmcodmFsdWUpKTtcclxuXHJcbmNvbnN0IGNhbm9uaWNhbGl6ZU5hbWUgPSAodmFsdWUpID0+IG5vcm1hbGl6ZVRleHQodmFsdWUpLnJlcGxhY2UoL1teYS16MC050LAt0Y/RkVxcc10vZ2ksICcnKS50cmltKCk7XHJcblxyXG5jb25zdCByZXNvbHZlTG9naW4gPSAodmFsdWUpID0+IG5vcm1hbGl6ZVRleHQodmFsdWUpO1xyXG5cclxuY29uc3QgYnVpbGRTZXNzaW9uUGF5bG9hZCA9IChwYXlsb2FkID0ge30pID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkTG9naW4gPSByZXNvbHZlTG9naW4ocGF5bG9hZC51c2VybmFtZSB8fCBwYXlsb2FkLmxvZ2luKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4ucGF5bG9hZCxcclxuICAgIHVzZXJuYW1lOiBub3JtYWxpemVkTG9naW4sXHJcbiAgICBkaXNwbGF5TmFtZTogcGF5bG9hZC5kaXNwbGF5TmFtZSB8fCBwYXlsb2FkLm5hbWUgfHwgbm9ybWFsaXplZExvZ2luLFxyXG4gICAgYmFyYmVySWQ6IHBheWxvYWQuYmFyYmVySWQgfHwgcGF5bG9hZC5pZCB8fCBudWxsLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBwaWNrQmFyYmVyRm9yVXNlciA9ICh1c2VyU2Vzc2lvbiwgYXZhaWxhYmxlQmFyYmVycyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgZmFsbGJhY2sgPSBhdmFpbGFibGVCYXJiZXJzPy5bMF0gfHwgJyc7XHJcbiAgaWYgKCF1c2VyU2Vzc2lvbikgcmV0dXJuIGZhbGxiYWNrO1xyXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbdXNlclNlc3Npb24uZGlzcGxheU5hbWUsIHVzZXJTZXNzaW9uLnByZWZlcnJlZE5hbWUsIHVzZXJTZXNzaW9uLnVzZXJuYW1lXVxyXG4gICAgLm1hcCgoY2FuZGlkYXRlKSA9PiBjYW5vbmljYWxpemVOYW1lKGNhbmRpZGF0ZSkudG9Mb3dlckNhc2UoKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKCFjYW5kaWRhdGVzLmxlbmd0aCB8fCAhYXZhaWxhYmxlQmFyYmVycz8ubGVuZ3RoKSByZXR1cm4gZmFsbGJhY2s7XHJcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBhdmFpbGFibGVCYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiBjYW5vbmljYWxpemVOYW1lKGJhcmJlcikudG9Mb3dlckNhc2UoKSk7XHJcbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xyXG4gICAgY29uc3QgbWF0Y2hJbmRleCA9IG5vcm1hbGl6ZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24gPT09IGNhbmRpZGF0ZSk7XHJcbiAgICBpZiAobWF0Y2hJbmRleCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUJhcmJlcnNbbWF0Y2hJbmRleF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxsYmFjaztcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSAodmFsdWUpID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJy0nO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdFRpbWUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlVmFsdWUgPSBub3JtYWxpemVUZXh0KHZhbHVlKTtcclxuICBpZiAoIXNhZmVWYWx1ZSkgcmV0dXJuICctJztcclxuICBpZiAoc2FmZVZhbHVlLmluY2x1ZGVzKCctJykpIHtcclxuICAgIHJldHVybiBzYWZlVmFsdWUuc3BsaXQoJy0nKVswXS50cmltKCk7XHJcbiAgfVxyXG4gIHJldHVybiBzYWZlVmFsdWU7XHJcbn07XHJcbmNvbnN0IGZvcm1hdFBob25lSW5wdXQgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBkaWdpdHMgPSBTdHJpbmcodmFsdWUgfHwgJycpXHJcbiAgICAucmVwbGFjZSgvW15cXGRdL2csICcnKVxyXG4gICAgLnRyaW0oKTtcclxuICBpZiAoIWRpZ2l0cykgcmV0dXJuICcnO1xyXG4gIGxldCBub3JtYWxpemVkID0gZGlnaXRzO1xyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTEgJiYgbm9ybWFsaXplZC5zdGFydHNXaXRoKCc4JykpIHtcclxuICAgIG5vcm1hbGl6ZWQgPSBgNyR7bm9ybWFsaXplZC5zbGljZSgxKX1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICBub3JtYWxpemVkID0gYDcke25vcm1hbGl6ZWR9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMSAmJiBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzcnKSkge1xyXG4gICAgcmV0dXJuIGArNyAoJHtub3JtYWxpemVkLnNsaWNlKDEsIDQpfSkgJHtub3JtYWxpemVkLnNsaWNlKDQsIDcpfS0ke25vcm1hbGl6ZWQuc2xpY2UoNywgOSl9LSR7bm9ybWFsaXplZC5zbGljZSg5LCAxMSl9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnNycpICYmIG5vcm1hbGl6ZWQubGVuZ3RoID4gMTEpIHtcclxuICAgIHJldHVybiBgKyR7bm9ybWFsaXplZH1gO1xyXG4gIH1cclxuICBpZiAodmFsdWUudG9TdHJpbmcoKS5zdGFydHNXaXRoKCcrJykpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuICByZXR1cm4gYCske25vcm1hbGl6ZWR9YDtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gKGRhdGUsIHRpbWUpID0+IHtcclxuICBjb25zdCBkYXRlUGFydCA9IGZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBmb3JtYXRUaW1lKHRpbWUpO1xyXG4gIGlmIChkYXRlUGFydCA9PT0gJy0nICYmIHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiAnLSc7XHJcbiAgaWYgKGRhdGVQYXJ0ID09PSAnLScpIHJldHVybiB0aW1lUGFydDtcclxuICBpZiAodGltZVBhcnQgPT09ICctJykgcmV0dXJuIGRhdGVQYXJ0O1xyXG4gIHJldHVybiBgJHtkYXRlUGFydH0gfCAke3RpbWVQYXJ0fWA7XHJcbn07XHJcbmNvbnN0IGZvcm1hdERhdGVIZWFkaW5nID0gKHZhbHVlLCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke3ZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuIHZhbHVlO1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIG9wdGlvbnMpLmZvcm1hdChwYXJzZWQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBmb3JtYXREYXRlQmFkZ2VMYWJlbCA9ICh2YWx1ZSkgPT5cclxuICBmb3JtYXREYXRlSGVhZGluZyh2YWx1ZSwgeyB3ZWVrZGF5OiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcgfSk7XHJcbmNvbnN0IGZvcm1hdExpdmVUaW1lc3RhbXAgPSAodmFsdWUsIG5vd1RzID0gRGF0ZS5ub3coKSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgZGlmZk1zID0gTWF0aC5tYXgoMCwgbm93VHMgLSBwYXJzZWQuZ2V0VGltZSgpKTtcclxuICAgIGlmIChkaWZmTXMgPCAxMDAwKSByZXR1cm4gJ9GC0L7Qu9GM0LrQviDRh9GC0L4nO1xyXG4gICAgaWYgKGRpZmZNcyA8IDYwXzAwMCkgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZk1zIC8gMTAwMCl9INGB0LXQumA7XHJcbiAgICBpZiAoZGlmZk1zIDwgM182MDBfMDAwKSB7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmZNcyAvIDYwXzAwMCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmTXMgJSA2MF8wMDApIC8gMTAwMCk7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzfSDQvNC40L0gJHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0g0YHQtdC6YDtcclxuICAgIH1cclxuICAgIGlmIChkaWZmTXMgPCA4Nl80MDBfMDAwKSB7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmTXMgLyAzXzYwMF8wMDApO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZk1zICUgM182MDBfMDAwKSAvIDYwXzAwMCk7XHJcbiAgICAgIHJldHVybiBgJHtob3Vyc30g0YcgJHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0g0LzQuNC9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZWQudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJywge1xyXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU1RBVFVTX1RSQU5TTEFUSU9OUyA9IHtcclxuICBhY3RpdmU6ICfQkNC60YLQuNCy0L3QsNGPJyxcclxuICAn0LDQutGC0LjQstC90LDRjyc6ICfQkNC60YLQuNCy0L3QsNGPJyxcclxuICBjb25maXJtOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICBjb25maXJtZWQ6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gICfQv9C+0LTRgtCy0LXRgNC20LTQtdC90L4nOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICAn0L/QvtC00YLQstC10YDQttC00LXQvdCwJzogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgZG9uZTogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgY29tcGxldGU6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNvbXBsZXRlZDogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgZmluaXNoZWQ6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gICfQstGL0L/QvtC70L3QtdC90LAnOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICAn0LfQsNCy0LXRgNGI0LXQvdCwJzogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgY2FuY2VsOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgY2FuY2VsZWQ6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICBjYW5jZWxsZWQ6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAn0L7RgtC80LXQvdCwJzogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gICfQvtGC0LzQtdC90LXQvdC+JzogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gICdubyBzaG93JzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICAnbm8tc2hvdyc6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgbm9zaG93OiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIG1pc3NlZDogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBwZW5kaW5nOiAn0JIg0L7QsdGA0LDQsdC+0YLQutC1JyxcclxuICB3YWl0OiAn0JIg0L7QsdGA0LDQsdC+0YLQutC1JyxcclxuICB3YWl0aW5nOiAn0JIg0L7QsdGA0LDQsdC+0YLQutC1JyxcclxuICBwcm9jZXNzaW5nOiAn0JIg0L7QsdGA0LDQsdC+0YLQutC1JyxcclxufTtcclxuY29uc3QgU1RBVFVTX0JBREdFX01BUCA9IHtcclxuICDQkNC60YLQuNCy0L3QsNGPOiAnYm9yZGVyIGJvcmRlci1za3ktNTAwLzMwIGJnLXNreS01MDAvMTAgdGV4dC1za3ktMTAwJyxcclxuICDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LA6ICdib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwIGJnLWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC0xMDAnLFxyXG4gINCX0LDQstC10YDRiNC10L3QsDogJ2JvcmRlciBib3JkZXItaW5kaWdvLTUwMC8zMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtaW5kaWdvLTEwMCcsXHJcbiAg0J7RgtC80LXQvdC10L3QsDogJ2JvcmRlciBib3JkZXItcm9zZS01MDAvMzAgYmctcm9zZS01MDAvMTAgdGV4dC1yb3NlLTEwMCcsXHJcbiAgJ9Cd0LUg0L/RgNC40YjRkdC7JzogJ2JvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIGJnLWFtYmVyLTUwMC8xMCB0ZXh0LWFtYmVyLTEwMCcsXHJcbn07XHJcbmNvbnN0IGdldFN0YXR1c0JhZGdlQ2xhc3NlcyA9IChzdGF0dXMpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgU1RBVFVTX0JBREdFX01BUFtub3JtYWxpemVkXSB8fCAnYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAvNjAgYmctc2xhdGUtODAwLzcwIHRleHQtc2xhdGUtMjAwJ1xyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJTkFDVElWRV9TVEFUVVNfVE9LRU5TID0gWyfQstGL0L/QvtC70L0nLCAn0LfQsNCy0LXRgNGIJywgJ2RvbmUnLCAnY2FuY2VsJywgJ9C+0YLQvNC10L0nLCAn0L3QtSDQv9GA0LjRiCcsICdub3Nob3cnLCAnbm8tc2hvdycsICdtaXNzZWQnLCAn0L/RgNC+0YHRgCcsICdleHBpcmVkJ107XHJcbmNvbnN0IEFDVElWRV9TVEFUVVNfVE9LRU5TID0gWyfQsNC60YLQuNCyJywgJ2FjdGl2ZScsICfQv9C+0LTRgtCy0LXRgNC2JywgJ2NvbmZpcm0nLCAn0L7QttC40LQnLCAncGVuZGluZycsICd3YWl0JywgJ9C20LTQtdC8JywgJ9C20LTRkdC8JywgJ9C90L7QsicsICduZXcnXTtcclxuY29uc3QgQ09NUExFVEVEX1NUQVRVU19UT0tFTlMgPSBbJ9Cy0YvQv9C+0LvQvScsICfQt9Cw0LLQtdGA0YgnLCAnZG9uZScsICdjb21wbGV0ZScsICfQs9C+0YLQvtCyJ107XHJcblxyXG5jb25zdCBub3JtYWxpemVTdGF0dXNWYWx1ZSA9IChzdGF0dXMpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dChzdGF0dXMpLnRyaW0oKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiAnJztcclxuICBjb25zdCB0cmFuc2xhdGVkID0gU1RBVFVTX1RSQU5TTEFUSU9OU1tub3JtYWxpemVkLnRvTG93ZXJDYXNlKCldO1xyXG4gIGlmICh0cmFuc2xhdGVkKSByZXR1cm4gdHJhbnNsYXRlZDtcclxuICByZXR1cm4gbm9ybWFsaXplZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5vcm1hbGl6ZWQuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVTdGF0dXNMaXN0ID0gKHN0YXR1c2VzID0gW10pID0+IHtcclxuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG4gIHJldHVybiBzdGF0dXNlc1xyXG4gICAgLm1hcCgoc3RhdHVzKSA9PiBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpKVxyXG4gICAgLmZpbHRlcigoc3RhdHVzKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdHVzIHx8IHNlZW4uaGFzKHN0YXR1cykpIHJldHVybiBmYWxzZTtcclxuICAgICAgc2Vlbi5hZGQoc3RhdHVzKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGlzQ29tcGxldGVkQXBwb2ludG1lbnRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gQ09NUExFVEVEX1NUQVRVU19UT0tFTlMuc29tZSgodG9rZW4pID0+IG5vcm1hbGl6ZWQuaW5jbHVkZXModG9rZW4pKTtcclxufTtcclxuXHJcbmNvbnN0IHNhbml0aXplVGltZVRva2VuID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2ggPSBub3JtYWxpemVUZXh0KHZhbHVlKS5tYXRjaCgvKFxcZHsxLDJ9KTooXFxkezJ9KS8pO1xyXG4gIGlmICghbWF0Y2gpIHJldHVybiAnJztcclxuICBjb25zdCBob3VycyA9IG1hdGNoWzFdLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbWludXRlcyA9IG1hdGNoWzJdO1xyXG4gIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZVRpbWVSYW5nZVZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2FmZSA9IG5vcm1hbGl6ZVRleHQodmFsdWUpLnJlcGxhY2UoL1vigJTigJNdL2csICctJyk7XHJcbiAgaWYgKCFzYWZlKSByZXR1cm4geyBzdGFydDogJycsIGVuZDogJycgfTtcclxuICBjb25zdCBbcmF3U3RhcnQsIHJhd0VuZCA9ICcnXSA9IHNhZmUuc3BsaXQoJy0nKS5tYXAoKHBhcnQpID0+IHBhcnQudHJpbSgpKTtcclxuICByZXR1cm4ge1xyXG4gICAgc3RhcnQ6IHNhbml0aXplVGltZVRva2VuKHJhd1N0YXJ0KSxcclxuICAgIGVuZDogc2FuaXRpemVUaW1lVG9rZW4ocmF3RW5kKSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBwYXJzZVRpbWVSYW5nZVBhcnRzID0gKHZhbHVlKSA9PiBwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKTtcclxuXHJcbmNvbnN0IGJ1aWxkVGltZVJhbmdlVmFsdWUgPSAoc3RhcnQsIGVuZCkgPT4ge1xyXG4gIGNvbnN0IHNhZmVTdGFydCA9IHNhbml0aXplVGltZVRva2VuKHN0YXJ0KTtcclxuICBjb25zdCBzYWZlRW5kID0gc2FuaXRpemVUaW1lVG9rZW4oZW5kKTtcclxuICBpZiAoc2FmZVN0YXJ0ICYmIHNhZmVFbmQpIHtcclxuICAgIGNvbnN0IFtmcm9tLCB0b10gPSBzYWZlU3RhcnQgPD0gc2FmZUVuZCA/IFtzYWZlU3RhcnQsIHNhZmVFbmRdIDogW3NhZmVFbmQsIHNhZmVTdGFydF07XHJcbiAgICByZXR1cm4gYCR7ZnJvbX0gLSAke3RvfWA7XHJcbiAgfVxyXG4gIHJldHVybiBzYWZlU3RhcnQgfHwgJyc7XHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0VGltZVN0YXJ0ID0gKHZhbHVlKSA9PiBwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKS5zdGFydDtcclxuXHJcbmNvbnN0IGdldEFwcG9pbnRtZW50U3RhcnREYXRlID0gKGRhdGVWYWx1ZSwgdGltZVZhbHVlLCBmYWxsYmFja0lzbykgPT4ge1xyXG4gIGlmIChmYWxsYmFja0lzbykge1xyXG4gICAgY29uc3QgcGFyc2VkRmFsbGJhY2sgPSBuZXcgRGF0ZShmYWxsYmFja0lzbyk7XHJcbiAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWRGYWxsYmFjay5nZXRUaW1lKCkpKSByZXR1cm4gcGFyc2VkRmFsbGJhY2s7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGVQYXJ0ID0gbm9ybWFsaXplVGV4dChkYXRlVmFsdWUpLnNsaWNlKDAsIDEwKTtcclxuICBpZiAoIWRhdGVQYXJ0KSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB0aW1lUGFydCA9IGV4dHJhY3RUaW1lU3RhcnQodGltZVZhbHVlKSB8fCAnMDA6MDAnO1xyXG4gIGNvbnN0IGlzb0NhbmRpZGF0ZSA9IGAke2RhdGVQYXJ0fVQke3RpbWVQYXJ0fTowMGA7XHJcbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoaXNvQ2FuZGlkYXRlKTtcclxuICByZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpID8gbnVsbCA6IHBhcnNlZDtcclxufTtcclxuXHJcbmNvbnN0IGlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cykudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiBmYWxzZTtcclxuICBpZiAoSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKEFDVElWRV9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSkpIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvdWxkRGlzcGxheUFwcG9pbnRtZW50ID0gKGFwcG9pbnRtZW50LCBub3dUcyA9IERhdGUubm93KCkpID0+IHtcclxuICBjb25zdCBzdGF0dXMgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShhcHBvaW50bWVudC5TdGF0dXMpO1xyXG4gIGlmICghaXNBY3RpdmVBcHBvaW50bWVudFN0YXR1cyhzdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYXBwb2ludG1lbnQuRGF0ZSwgYXBwb2ludG1lbnQuVGltZSwgYXBwb2ludG1lbnQuc3RhcnREYXRlVGltZSk7XHJcbiAgaWYgKCFzdGFydERhdGUpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gc3RhcnREYXRlLmdldFRpbWUoKSA+PSBub3dUcztcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlTXVsdGlWYWx1ZSA9ICh2YWx1ZSkgPT5cclxuICBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbmNvbnN0IExvYWRpbmdTdGF0ZSA9ICh7IGxhYmVsID0gJ9CX0LDQs9GA0YPQttCw0Y4g0LTQsNC90L3Ri9C1Li4uJyB9ID0ge30pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEyIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlXCI+e2xhYmVsfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEVycm9yQmFubmVyID0gKHsgbWVzc2FnZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXJvc2UtNjAwIHB4LTQgcHktMyB0ZXh0LXdoaXRlXCI+e21lc3NhZ2V9PC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBTZWN0aW9uQ2FyZCA9ICh7IHRpdGxlLCBhY3Rpb25zLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtODAwLzcwIHAtNiBzaGFkb3ctbGdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICB7YWN0aW9uc31cclxuICAgIDwvZGl2PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBMaXZlQmFkZ2UgPSAoeyB0aW1lc3RhbXAsIGxhYmVsID0gJ0xJVkUnIH0pID0+IHtcclxuICBjb25zdCB0aWNraW5nTm93ID0gdXNlTm93VGljaygxMDAwKTtcclxuICBpZiAoIXRpbWVzdGFtcCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZUxhYmVsID0gZm9ybWF0TGl2ZVRpbWVzdGFtcCh0aW1lc3RhbXAsIHRpY2tpbmdOb3cpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTQwMC80MCBiZy1lbWVyYWxkLTUwMC8xMCBweC0zIHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWVtZXJhbGQtMjAwXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMiB3LTIgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC00MDBcIiAvPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICAgIHt0aW1lTGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTEwMC84MCBub3JtYWwtY2FzZSB0cmFja2luZy1ub3JtYWxcIj57dGltZUxhYmVsfTwvc3Bhbj59XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEljb25UcmFzaCA9ICh7IGNsYXNzTmFtZSA9ICdoLTQgdy00JyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjEuNlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIiAvPlxyXG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiIC8+XHJcbiAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IE1vZGFsID0gKHsgdGl0bGUsIGlzT3Blbiwgb25DbG9zZSwgY2hpbGRyZW4sIGZvb3RlciwgbWF4V2lkdGhDbGFzcyA9ICdtYXgtdy0zeGwnIH0pID0+IHtcclxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzYwIHB4LTQgcHktNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC1oLVs5MHZoXSB3LWZ1bGwgJHttYXhXaWR0aENsYXNzfSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHNoYWRvdy0yeGxgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj54PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bNzB2aF0gb3ZlcmZsb3cteS1hdXRvIHB4LTYgcHktNCBzcGFjZS15LTRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAge2Zvb3RlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBweC02IHB5LTRcIj57Zm9vdGVyfTwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdENhcmQgPSAoeyBsYWJlbCwgdmFsdWUsIGFjY2VudCA9ICd0ZXh0LWluZGlnby0zMDAnIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtMyBzbTpwLTRcIj5cclxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj57bGFiZWx9PC9wPlxyXG4gICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdC0xIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc206bXQtMiBzbTp0ZXh0LTN4bCcsIGFjY2VudCl9Pnt2YWx1ZX08L3A+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgc2Vzc2lvbiwgYWN0aXZlVGFiLCBvbkNoYW5nZSwgb25Mb2dvdXQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvbj8uZGlzcGxheU5hbWUgfHwgc2Vzc2lvbj8udXNlcm5hbWUgfHwgJ+KAlCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaGlkZGVuIHctNzIgZmxleC1zaHJpbmstMCBmbGV4LWNvbCBib3JkZXItciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC85MCBwLTUgbGc6c3RpY2t5IGxnOnRvcC0wIGxnOmZsZXggbGc6aC1zY3JlZW4gbGc6b3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcGItNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS01MDBcIj7QktGLINCy0L7RiNC70Lgg0LrQsNC6PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTEwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQktGL0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTYgZmxleC0xIHNwYWNlLXktMiBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICB7VklFV19UQUJTLm1hcCgodGFiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVRhYiA9PT0gdGFiLmlkO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlPy4odGFiLmlkKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAndy1mdWxsIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tNjAwLzkwIHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1pbmRpZ28tOTAwLzQwJ1xyXG4gICAgICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwLzYwIGhvdmVyOnRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YWIubGFiZWx9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNb2JpbGVUYWJzID0gKHsgc2Vzc2lvbiwgYWN0aXZlVGFiLCBvbkNoYW5nZSwgb25Mb2dvdXQgfSkgPT4ge1xyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvbj8uZGlzcGxheU5hbWUgfHwgc2Vzc2lvbj8udXNlcm5hbWUgfHwgJ+KAlCc7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHRhYklkKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKHRhYklkKTtcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0zMCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC84MCBiYWNrZHJvcC1ibHVyIGxnOmhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTNcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbigocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBwLTIgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwi0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZVdpZHRoPXsxLjV9IHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cImgtNSB3LTVcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMy43NSA2Ljc1aDE2LjVNMy43NSAxMmgxNi41TTMuNzUgMTcuMjVoMTYuNVwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPtCS0Ysg0LLQvtGI0LvQuCDQutCw0Lo8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJvcmRlci1yb3NlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQktGL0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1hdXRvIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICB7VklFV19UQUJTLm1hcCgodGFiKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QodGFiLmlkKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdmbGV4LTEgd2hpdGVzcGFjZS1ub3dyYXAgcHgtMyBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCcsXHJcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0YWIuaWQgPyAndGV4dC1pbmRpZ28tMzAwJyA6ICd0ZXh0LXNsYXRlLTQwMCdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhYi5sYWJlbH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge21lbnVPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC85MCBweC00IHB5LTRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QoNCw0LfQtNC10LvRizwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMlwiPlxyXG4gICAgICAgICAgICB7VklFV19UQUJTLm1hcCgodGFiKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QodGFiLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdiZy1pbmRpZ28tNjAwLzgwIHRleHQtd2hpdGUnIDogJ2JnLXNsYXRlLTgwMC83MCB0ZXh0LXNsYXRlLTIwMCdcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RhYi5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXJvc2UtMjAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0JLRi9C50YLQuCDQuNC3INCw0LrQutCw0YPQvdGC0LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgRGFzaGJvYXJkVmlldyA9ICh7IGRhdGEsIG9uT3BlbkFwcG9pbnRtZW50LCBvbk9wZW5Qcm9maWxlLCBvbkNyZWF0ZUFwcG9pbnRtZW50LCBsaXZlTWV0YSA9IG51bGwgfSkgPT4ge1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nU3RhdGUgLz47XHJcbiAgY29uc3Qgc3RhdHMgPSBkYXRhLnN0YXRzIHx8IHt9O1xyXG5cclxuICBjb25zdCB1cGNvbWluZ1JhdyA9IGRhdGEuYXBwb2ludG1lbnRzPy51cGNvbWluZyB8fCBbXTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdMaXN0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBub3dUcyA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gdXBjb21pbmdSYXdcclxuICAgICAgLm1hcCgoYXBwdCkgPT4gKHsgLi4uYXBwdCwgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShhcHB0LlN0YXR1cykgfSkpXHJcbiAgICAgIC5maWx0ZXIoKGFwcHQpID0+IHNob3VsZERpc3BsYXlBcHBvaW50bWVudChhcHB0LCBub3dUcykpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGEuRGF0ZSwgYS5UaW1lLCBhLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShiLkRhdGUsIGIuVGltZSwgYi5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIHJldHVybiBsZWZ0IC0gcmlnaHQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zbGljZSgwLCAxMik7XHJcbiAgfSwgW3VwY29taW5nUmF3XSk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdEdyb3VwTGFiZWwgPSB1c2VDYWxsYmFjaygoZGF0ZVZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGVWYWx1ZSB8fCBkYXRlVmFsdWUgPT09ICfQkdC10Lcg0LTQsNGC0YsnKSByZXR1cm4gJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShgJHtkYXRlVmFsdWV9VDAwOjAwOjAwYCk7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IHdlZWtkYXk6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KHBhcnNlZCk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGRhdGVWYWx1ZTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdyb3VwZWRVcGNvbWluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgdXBjb21pbmdMaXN0LmZvckVhY2goKGFwcHQpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gYXBwdC5EYXRlIHx8ICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICAgIGJ1Y2tldC5wdXNoKGFwcHQpO1xyXG4gICAgICBncm91cHMuc2V0KGtleSwgYnVja2V0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3JvdXBzLmVudHJpZXMoKSlcclxuICAgICAgLm1hcCgoW2tleSwgaXRlbXNdKSA9PiAoe1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBsYWJlbDogZm9ybWF0R3JvdXBMYWJlbChrZXkpLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIHNvcnRWYWx1ZTogTWF0aC5taW4oXHJcbiAgICAgICAgICAuLi5pdGVtcy5tYXAoKGl0ZW0pID0+IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGl0ZW0uRGF0ZSwgaXRlbS5UaW1lLCBpdGVtLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXHJcbiAgICAgICAgKSxcclxuICAgICAgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnRWYWx1ZSAtIGIuc29ydFZhbHVlKTtcclxuICB9LCBbZm9ybWF0R3JvdXBMYWJlbCwgdXBjb21pbmdMaXN0XSk7XHJcblxyXG4gIGNvbnN0IHVwY29taW5nQWN0aW9ucyA9XHJcbiAgICBsaXZlTWV0YT8udXBkYXRlZEF0IHx8IG9uQ3JlYXRlQXBwb2ludG1lbnRcclxuICAgICAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICB7bGl2ZU1ldGE/LnVwZGF0ZWRBdCAmJiA8TGl2ZUJhZGdlIHRpbWVzdGFtcD17bGl2ZU1ldGEudXBkYXRlZEF0fSAvPn1cclxuICAgICAgICAgICAge29uQ3JlYXRlQXBwb2ludG1lbnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGVBcHBvaW50bWVudH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICArINCh0L7Qt9C00LDRgtGMINC30LDQv9C40YHRjFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQmtC70Y7Rh9C10LLRi9C1INC/0L7QutCw0LfQsNGC0LXQu9C4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHN0YXQtZ3JpZFwiPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0JLRgdC10LPQviDQutC70LjQtdC90YLQvtCyXCIgdmFsdWU9e3N0YXRzLnRvdGFsVXNlcnMgPz8gMH0gLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCQ0LrRgtC40LLQvdGL0LUg0LfQsNC/0LjRgdC4XCIgdmFsdWU9e3N0YXRzLmFjdGl2ZUFwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWVtZXJhbGQtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QviDQt9CwINCz0L7QtFwiIHZhbHVlPXtzdGF0cy5jb25maXJtZWRZZWFyID8/IDB9IGFjY2VudD1cInRleHQtZnVjaHNpYS0zMDBcIiAvPlxyXG4gICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwi0KHQtdCz0L7QtNC90Y9cIiB2YWx1ZT17c3RhdHMudG9kYXlzQXBwb2ludG1lbnRzID8/IDB9IGFjY2VudD1cInRleHQtY3lhbi0zMDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JHQu9C40LbQsNC50YjQuNC1INC30LDQv9C40YHQuFwiIGFjdGlvbnM9e3VwY29taW5nQWN0aW9uc30+XHJcbiAgICAgICAge2dyb3VwZWRVcGNvbWluZy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQsdC70LjQttCw0LnRiNC40YUg0LfQsNC/0LjRgdC10LkuPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgICB7Z3JvdXBlZFVwY29taW5nLm1hcCgoZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAge2dyb3VwLml0ZW1zLm1hcCgoYXBwdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBvbk9wZW5BcHBvaW50bWVudD8uKGFwcHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiAoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBvbk9wZW5BcHBvaW50bWVudD8uKGFwcHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC82MCBiZy1zbGF0ZS05MDAvNzAgcC01IHRleHQtbGVmdCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwLzcwIGhvdmVyOmJnLXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHBhcnNlVGltZVJhbmdlUGFydHMoYXBwdC5UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGFwcHQuU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlc0xpc3QgPSBwYXJzZU11bHRpVmFsdWUoYXBwdC5TZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGhvbmVMYWJlbCA9IGFwcHQuUGhvbmUgPyBmb3JtYXRQaG9uZUlucHV0KGFwcHQuUGhvbmUpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGhvbmVIcmVmID0gcGhvbmVMYWJlbCA/IHBob25lTGFiZWwucmVwbGFjZSgvW15cXGQrXS9nLCAnJykgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FwcHQuaWQgfHwgYCR7Z3JvdXAua2V5fS0ke2FwcHQuQ3VzdG9tZXJOYW1lfS0ke2FwcHQuVGltZX1gfSB7Li4uY2FyZFByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGVCYWRnZUxhYmVsKGFwcHQuRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlXCI+e3N0YXJ0IHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VuZCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1zbGF0ZS00MDBcIj7QtNC+IHtlbmR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgZ2FwLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0YXR1c0JhZGdlQ2xhc3NlcyhzdGF0dXNMYWJlbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNMYWJlbCB8fCAn0JHQtdC3INGB0YLQsNGC0YPRgdCwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkJhcmJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkdCw0YDQsdC10YA6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57YXBwdC5CYXJiZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGdyaWQgZ2FwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMCBtZDpncmlkLWNvbHMtW21pbm1heCgwLDEuNmZyKV9taW5tYXgoMCwxZnIpXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5DdXN0b21lck5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuUHJvZmlsZT8uKGFwcHQuQ3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWluZGlnby0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQ3VzdG9tZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+0JHQtdC3INC40LzQtdC90Lg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNMaXN0Lm1hcCgoc2VydmljZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VydmljZX0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNzAgYmctc2xhdGUtODAwLzcwIHB4LTMgcHktMSB0ZXh0LXhzIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQstGL0LHRgNCw0L3QvdGL0YUg0YPRgdC70YPQszwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsICYmIHBob25lSHJlZiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke3Bob25lSHJlZn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMC82MCBweC0zIHB5LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi4yNSA2Ljc1YzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMi4yNWEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNXYtMS4yNmExLjUgMS41IDAgMDAtMS4wOTMtMS40NGwtNC40NDMtMS4yN2ExLjUgMS41IDAgMDAtMS43MjYuNzUybC0uNzkgMS41OGExLjUgMS41IDAgMDEtMi4yNzguNTM2QTE1LjA1MiAxNS4wNTIgMCAwMTguMzUyIDE0LjRhMS41IDEuNSAwIDAxLjUzNi0yLjI3OGwxLjU4LS43OWExLjUgMS41IDAgMDAuNzUyLTEuNzI2bC0xLjI3LTQuNDQzQTEuNSAxLjUgMCAwMDkuNTEgNC4wN0g4LjI1QTIuMjUgMi4yNSAwIDAwNiA2LjMyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuVXNlcklEICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEINC60LvQuNC10L3RgtCwOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPnthcHB0LlVzZXJJRH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQmFyYmVyQXZhdGFyUGlja2VyID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbYXZhdGFyT3B0aW9ucywgc2V0QXZhdGFyT3B0aW9uc10gPSB1c2VTdGF0ZSgoKSA9PiBhdmF0YXJPcHRpb25zQ2FjaGUgfHwgW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0dhbGxlcnksIHNldFNob3dHYWxsZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCBhdmF0YXJPcHRpb25zLmluY2x1ZGVzKHZhbHVlKSkgcmV0dXJuIGF2YXRhck9wdGlvbnM7XHJcbiAgICByZXR1cm4gdmFsdWUgPyBbdmFsdWUsIC4uLmF2YXRhck9wdGlvbnNdIDogYXZhdGFyT3B0aW9ucztcclxuICB9LCBbYXZhdGFyT3B0aW9ucywgdmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhc3NldHMgPSBhd2FpdCBmZXRjaEF2YXRhck9wdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGF2YXRhck9wdGlvbnNDYWNoZSA9IGFzc2V0cztcclxuICAgICAgICBzZXRBdmF0YXJPcHRpb25zKGFzc2V0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQXZhdGFyIGxvYWQgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsb2FkKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBwcmV2aWV3U3JjID0gdmFsdWUgfHwgYXZhdGFyT3B0aW9uc1swXSB8fCBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAge3ByZXZpZXdTcmMgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJldmlld1NyY30gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiB3LTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAg0J3QtdGCINGE0L7RgtC+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj7QmNC30L7QsdGA0LDQttC10L3QuNC1INC40Lcg0L/QsNC/0LrQuCDCq0ltYWdlwrs8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LXQtyDQuNC30L7QsdGA0LDQttC10L3QuNGPPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHthdmFpbGFibGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoJy9JbWFnZS8nLCAnJyl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dHYWxsZXJ5KChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwIGRpc2FibGVkOnRleHQtc2xhdGUtNTAwXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nXG4gICAgICAgICAgICAgID8gJ9Ch0LrQsNC90LjRgNGD0Y4g0L/QsNC/0LrRg+KApidcbiAgICAgICAgICAgICAgOiBhdmF0YXJPcHRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgID8gJ9Ch0LrRgNGL0YLRjCDQvNC40L3QuNCw0YLRjtGA0YsnXG4gICAgICAgICAgICAgICAgICA6ICfQn9C+0LrQsNC30LDRgtGMINC80LjQvdC40LDRgtGO0YDRiydcbiAgICAgICAgICAgICAgICA6ICfQndC10YIg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQsiDQv9Cw0L/QutC1IEltYWdlJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0dhbGxlcnkgJiYgYXZhdGFyT3B0aW9ucy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgc206Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgIHthdmF0YXJPcHRpb25zLm1hcCgocHJlc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwcmVzZXQgPT09IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAga2V5PXtwcmVzZXR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShwcmVzZXQpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyBib3JkZXIgcC0xIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLWluZGlnby00MDAgaG92ZXI6Ymctc2xhdGUtODAwICR7XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAnYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMC8yMCcgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJlc2V0fSBhbHQ9XCJhdmF0YXIgcHJlc2V0XCIgY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgcm91bmRlZC1tZCBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshYXZhdGFyT3B0aW9ucy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCU0L7QsdCw0LLRjNGC0LUg0YTQsNC50LvRiyDQsiDQv9Cw0L/QutGDIC9JbWFnZSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDQsNCy0LDRgtCw0YAuPC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYXRpbmdTbGlkZXIgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRlbnNlID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJhdGluZ1ZhbHVlID0gTnVtYmVyKHZhbHVlIHx8IFJBVElOR19NQVgpLnRvRml4ZWQoMSk7XHJcbiAgY29uc3Qgd3JhcHBlckNsYXNzID0gZGVuc2VcclxuICAgID8gJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTEuNSdcclxuICAgIDogJ3NwYWNlLXktMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTInO1xyXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBkZW5zZVxyXG4gICAgPyAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAnXHJcbiAgICA6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMCc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT5cclxuICAgICAgICA8c3Bhbj7QoNC10LnRgtC40L3Qszwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmF0aW5nVmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXtSQVRJTkdfTUlOfSBtYXg9e1JBVElOR19NQVh9IHN0ZXA9e1JBVElOR19TVEVQfSB2YWx1ZT17TnVtYmVyKHZhbHVlKSB8fCBSQVRJTkdfTUFYfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFyYmVyc1ZpZXcgPSAoeyBiYXJiZXJzID0gW10sIG9uRmllbGRDaGFuZ2UsIG9uU2F2ZSwgb25BZGQsIG9uRGVsZXRlIH0pID0+IHtcclxuICBjb25zdCBbbmV3QmFyYmVyLCBzZXROZXdCYXJiZXJdID0gdXNlU3RhdGUoYnVpbGROZXdCYXJiZXJTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZU5ld0JhcmJlciA9IChmaWVsZCwgdmFsdWUpID0+IHNldE5ld0JhcmJlcigocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVCYXJiZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIW5ld0JhcmJlci5uYW1lPy50cmltKCkgfHwgIW5ld0JhcmJlci5wYXNzd29yZD8udHJpbSgpKSByZXR1cm47XHJcbiAgICBvbkFkZChuZXdCYXJiZXIpO1xyXG4gICAgc2V0TmV3QmFyYmVyKGJ1aWxkTmV3QmFyYmVyU3RhdGUoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQmFyYmVyQ2FyZCA9IChiYXJiZXIpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSAvXiMvLnRlc3QoYmFyYmVyLmNvbG9yIHx8ICcnKSA/IGJhcmJlci5jb2xvciA6ICcjNmQyOGQ5JztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYga2V5PXtiYXJiZXIuaWR9IGNsYXNzTmFtZT1cInNwYWNlLXktMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy1bbWlubWF4KDAsMmZyKV9taW5tYXgoMCwxZnIpXVwiPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtiYXJiZXIubmFtZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICduYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQmNC80Y9cIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTEuNSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPFJhdGluZ1NsaWRlciBkZW5zZSB2YWx1ZT17YmFyYmVyLnJhdGluZ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdyYXRpbmcnLCBldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBtb2JpbGUtZ3JpZC0yIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e2JhcmJlci5wYXNzd29yZCB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgINCm0LLQtdGCXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e2NvbG9yVmFsdWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAnY29sb3InLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTggdy0xNiBjdXJzb3ItcG9pbnRlciByb3VuZGVkIGJvcmRlciBib3JkZXItc2xhdGUtNTAwIGJnLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2JhcmJlci5kZXNjcmlwdGlvbiB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdkZXNjcmlwdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiIHJvd3M9ezR9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgdmFsdWU9e2JhcmJlci5waG9uZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdwaG9uZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0KLQtdC70LXRhNC+0L1cIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2JhcmJlci50ZWxlZ3JhbUlkIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKGJhcmJlci5pZCwgJ3RlbGVncmFtSWQnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCYXJiZXJBdmF0YXJQaWNrZXIgdmFsdWU9e2JhcmJlci5hdmF0YXJVcmx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAnYXZhdGFyVXJsJywgdmFsdWUpfSAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2JhcmJlci5pc0FjdGl2ZSAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAnaXNBY3RpdmUnLCBldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNC60YLQuNCy0LXQvVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIHB0LTJcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TYXZlKGJhcmJlcil9IGNsYXNzTmFtZT1cImZsZXgtMSByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGJhcmJlcil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTYwMCBwLTIgdGV4dC1yb3NlLTMwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDQsdCw0YDQsdC10YDQsFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCR0LDRgNCx0LXRgNGLXCI+XHJcbiAgICAgICAge2JhcmJlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QodC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7QsiDQv9C+0LrQsCDQv9GD0YHRgi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtb2JpbGUtZ3JpZC0yIGxnOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiByZW5kZXJCYXJiZXJDYXJkKGJhcmJlcikpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCU0L7QsdCw0LLQuNGC0Ywg0LHQsNGA0LHQtdGA0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1kOmdyaWQtY29scy1bbWlubWF4KDAsMmZyKV9taW5tYXgoMCwxZnIpXVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25ld0JhcmJlci5uYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdCYXJiZXIoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCY0LzRj1wiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMS41IHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxSYXRpbmdTbGlkZXIgZGVuc2UgdmFsdWU9e25ld0JhcmJlci5yYXRpbmd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcigncmF0aW5nJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtuZXdCYXJiZXIucGFzc3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcigncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAg0KbQstC10YJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXtuZXdCYXJiZXIuY29sb3J9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcignY29sb3InLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTggdy0xNiBjdXJzb3ItcG9pbnRlciByb3VuZGVkIGJvcmRlciBib3JkZXItc2xhdGUtNTAwIGJnLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e25ld0JhcmJlci5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3QmFyYmVyKCdkZXNjcmlwdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiIHJvd3M9ezN9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIHZhbHVlPXtuZXdCYXJiZXIucGhvbmV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcigncGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25ld0JhcmJlci50ZWxlZ3JhbUlkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdCYXJiZXIoJ3RlbGVncmFtSWQnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QmFyYmVyQXZhdGFyUGlja2VyIHZhbHVlPXtuZXdCYXJiZXIuYXZhdGFyVXJsfSBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVOZXdCYXJiZXIoJ2F2YXRhclVybCcsIHZhbHVlKX0gLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17bmV3QmFyYmVyLmlzQWN0aXZlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdCYXJiZXIoJ2lzQWN0aXZlJywgZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICDQkNC60YLQuNCy0LXQvVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQmFyYmVyfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTZXJ2aWNlc1ZpZXcgPSAoeyBzZXJ2aWNlcyA9IFtdLCBiYXJiZXJzID0gW10sIG9uRmllbGRDaGFuZ2UsIG9uUHJpY2VDaGFuZ2UsIG9uRGVsZXRlLCBvbkFkZCB9KSA9PiB7XHJcbiAgY29uc3QgW25ld1NlcnZpY2UsIHNldE5ld1NlcnZpY2VdID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZHVyYXRpb246IDYwLCBwcmljZXM6IHt9IH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVOZXdTZXJ2aWNlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0TmV3U2VydmljZSgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG4gIGNvbnN0IHVwZGF0ZU5ld1NlcnZpY2VQcmljZSA9IChiYXJiZXJJZCwgdmFsdWUpID0+XHJcbiAgICBzZXROZXdTZXJ2aWNlKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBwcmljZXM6IHtcclxuICAgICAgICAuLi4ocHJldi5wcmljZXMgfHwge30pLFxyXG4gICAgICAgIFtiYXJiZXJJZF06IHZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQsNGC0LDQu9C+0LNcIj5cclxuICAgICAgICB7c2VydmljZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7Qn9C+0LrQsCDQvdC10YIg0L3QuCDQvtC00L3QvtC5INGD0YHQu9GD0LPQuC48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LVs4NjBweF0gdGV4dC1bMTNweF0gbGVhZGluZy10aWdodCBzbTp0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMiBweS0xLjVcIj7QndCw0LfQstCw0L3QuNC1PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSB3LTI4XCI+0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMPC90aD5cbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2JhcmJlci5pZH0gY2xhc3NOYW1lPVwicHgtMiBweS0xLjUgdGV4dC1jZW50ZXJcIj57YmFyYmVyLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHctMTIgdGV4dC1jZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtzZXJ2aWNlLmlkfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSBhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlcnZpY2UubmFtZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShzZXJ2aWNlLmlkLCAnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEuNSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMiBweS0xLjUgYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17c2VydmljZS5kdXJhdGlvbiB8fCAwfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKHNlcnZpY2UuaWQsICdkdXJhdGlvbicsIE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMS41IHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YmFyYmVyLmlkfSBjbGFzc05hbWU9XCJweC0yIHB5LTEuNSBhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3NlcnZpY2UucHJpY2VzPy5bYmFyYmVyLmlkXSA/PyAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gb25QcmljZUNoYW5nZShzZXJ2aWNlLmlkLCBiYXJiZXIuaWQsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEuNSB0ZXh0LXNtIHRleHQtd2hpdGVcIiBwbGFjZWhvbGRlcj1cItCm0LXQvdCwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IGFsaWduLXRvcCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHNlcnZpY2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC83MCBwLTIgdGV4dC14cyB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQo9C00LDQu9C40YLRjCDRg9GB0LvRg9Cz0YNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQndC+0LLQsNGPINGD0YHQu9GD0LPQsFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtb2JpbGUtZ3JpZC0yIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e25ld1NlcnZpY2UubmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3U2VydmljZSgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e25ld1NlcnZpY2UuZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld1NlcnZpY2UoJ2R1cmF0aW9uJywgTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpfSBwbGFjZWhvbGRlcj1cItCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjCwg0LzQuNC9XCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17YmFyYmVyLmlkfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdTZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0gPz8gJyd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3U2VydmljZVByaWNlKGJhcmJlci5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YNCm0LXQvdCwINC00LvRjyAke2JhcmJlci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1NlcnZpY2UubmFtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBvbkFkZChuZXdTZXJ2aWNlKTtcclxuICAgICAgICAgICAgc2V0TmV3U2VydmljZSh7IG5hbWU6ICcnLCBkdXJhdGlvbjogNjAsIHByaWNlczoge30gfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDRg9GB0LvRg9Cz0YNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IE11bHRpU2VsZWN0Q2VsbCA9ICh7IHZhbHVlLCBvcHRpb25zID0gW10sIG9uQ29tbWl0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHRvcDogMCwgbGVmdDogMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghYW5jaG9yUmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3QgPSBhbmNob3JSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHBhbmVsV2lkdGggPSAzMjA7XHJcbiAgICBjb25zdCBwYW5lbEhlaWdodCA9IDM2MDtcclxuICAgIGNvbnN0IG5leHRMZWZ0ID0gTWF0aC5taW4ocmVjdC5sZWZ0LCB3aW5kb3cuaW5uZXJXaWR0aCAtIHBhbmVsV2lkdGggLSAxNik7XHJcbiAgICBjb25zdCBuZXh0VG9wID0gTWF0aC5taW4ocmVjdC5ib3R0b20gKyA4LCB3aW5kb3cuaW5uZXJIZWlnaHQgLSBwYW5lbEhlaWdodCAtIDE2KTtcclxuICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgdG9wOiBNYXRoLm1heCgxNiwgbmV4dFRvcCksXHJcbiAgICAgIGxlZnQ6IE1hdGgubWF4KDE2LCBuZXh0TGVmdCksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgIH07XHJcbiAgfSwgW29wZW4sIHVwZGF0ZVBvc2l0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAocHJldi5pbmNsdWRlcyhvcHRpb24pID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbikgOiBbLi4ucHJldiwgb3B0aW9uXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNvbW1pdChkcmFmdC5qb2luKCcsICcpKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSBkcmFmdC5sZW5ndGggPyBkcmFmdC5qb2luKCcsICcpIDogJ9CS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPQuCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWF4LWgtWzQwcHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2UtcHJlLXdyYXBcIj57c3VtbWFyeX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJlxyXG4gICAgICAgIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIG1heC13LXhzIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC85NSBwLTMgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogYCR7cG9zaXRpb24udG9wfXB4YCwgbGVmdDogYCR7cG9zaXRpb24ubGVmdH1weGAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7Qo9GB0LvRg9Cz0Lg8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0xIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJhZnQocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOKclVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2RyYWZ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTIgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2RyYWZ0Lm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMjAgcHgtMiBweS0xIHRleHQteHMgdGV4dC1pbmRpZ28tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wdGlvbihzZXJ2aWNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IHNwYWNlLXktMSBvdmVyZmxvdy15LWF1dG8gcHItMVwiPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzPC9wPn1cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZHJhZnQuaW5jbHVkZXMob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIHB4LTMgcHktMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC82MCdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMiB0ZXh0LWxlZnRcIj57b3B0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0FjdGl2ZX0gb25DaGFuZ2U9eygpID0+IHRvZ2dsZU9wdGlvbihvcHRpb24pfSBjbGFzc05hbWU9XCJoLTQgdy00IHJvdW5kZWQgYm9yZGVyLXNsYXRlLTUwMCBhY2NlbnQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldERyYWZ0KFtdKX0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaW1lUmFuZ2VQaWNrZXIgPSAoe1xyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHRpdGxlID0gJ9CS0YvQsdC+0YAg0LLRgNC10LzQtdC90LgnLFxyXG4gIHBsYWNlaG9sZGVyID0gJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJyxcclxuICBidXR0b25DbGFzc05hbWUgPSAndy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlJyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbeyBzdGFydCwgZW5kIH0sIHNldERyYWZ0XSA9IHVzZVN0YXRlKCgpID0+IHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplSG91clZhbHVlID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgW2hvdXJzXSA9IGlucHV0VmFsdWUuc3BsaXQoJzonKTtcclxuICAgIGlmICghaG91cnMpIHJldHVybiAnJztcclxuICAgIHJldHVybiBgJHtob3Vycy5wYWRTdGFydCgyLCAnMCcpfTowMGA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERyYWZ0KHBhcnNlVGltZVJhbmdlVmFsdWUodmFsdWUpKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oYnVpbGRUaW1lUmFuZ2VWYWx1ZShzdGFydCwgZW5kKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlPy4oJycpO1xyXG4gICAgc2V0RHJhZnQoeyBzdGFydDogJycsIGVuZDogJycgfSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9PlxyXG4gICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogcGxhY2Vob2xkZXJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1heFdpZHRoQ2xhc3M9XCJtYXgtdy1tZFwiXHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCS0YvQsdC10YDQuNGC0LUg0LLRgNC10LzRjyDQtNC70Y8g0L3QsNGH0LDQu9CwINC4INC30LDQstC10YDRiNC10L3QuNGPPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGVhcn0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMFwiPlxyXG4gICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGdhcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzYwIHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDBcIj7QodGC0LDRgNGCPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIzNjAwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBzdGFydDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IHRleHQtc2xhdGUtNTAwXCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwXCI+0KTQuNC90LjRiDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMzYwMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIGVuZDogbm9ybWFsaXplSG91clZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTMyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5jb25zdCBFZGl0YWJsZUNlbGwgPSAoeyByZWNvcmQsIGNvbHVtbiwgb3B0aW9ucywgb25VcGRhdGUsIG9uT3BlblByb2ZpbGUsIHRhYmxlSWQgfSkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZElkID0gcmVjb3JkPy5pZCB8fCByZWNvcmQ/LklkIHx8IHJlY29yZD8uSUQgfHwgcmVjb3JkPy5yZWNvcmRJZDtcclxuICBjb25zdCB2YWx1ZSA9IHJlY29yZFtjb2x1bW4ua2V5XTtcclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERyYWZ0KHZhbHVlID8/ICcnKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgaWYgKCFjb2x1bW4uZWRpdGFibGUpIHtcclxuICAgIGlmIChjb2x1bW4uaXNQcm9maWxlTGluaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25PcGVuUHJvZmlsZT8uKHZhbHVlKX0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgIHt2YWx1ZSB8fCAnLSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgd2hpdGVzcGFjZS1wcmUtd3JhcCBicmVhay13b3JkcyBsZWFkaW5nLXRpZ2h0XCI+e3ZhbHVlIHx8ICctJ308L3NwYW4+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWl0ID0gKG5leHRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IG5leHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFZhbHVlIDogZHJhZnQ7XHJcbiAgICBpZiAoKHZhbHVlID8/ICcnKSA9PT0gKHBheWxvYWQgPz8gJycpKSByZXR1cm47XHJcbiAgICBvblVwZGF0ZShyZWNvcmRJZCwgeyBbY29sdW1uLmtleV06IHBheWxvYWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKFxyXG4gICAgKHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGNvbHVtbi5rZXkgPT09ICdUaW1lJykgfHxcclxuICAgICh0YWJsZUlkID09PSAnU2NoZWR1bGVzJyAmJiBjb2x1bW4ua2V5ID09PSAnV2VlaycpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGltZVJhbmdlUGlja2VyXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBjb21taXQobmV4dFZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuKAlFwiXHJcbiAgICAgICAgdGl0bGU9e3RhYmxlSWQgPT09ICdTY2hlZHVsZXMnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICBidXR0b25DbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtbGVmdCB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoY29sdW1uLnR5cGUpIHtcclxuICAgIGNhc2UgJ3NlbGVjdCc6IHtcclxuICAgICAgY29uc3Qgb3B0aW9uTGlzdCA9IGNvbHVtbi5vcHRpb25zS2V5ID8gb3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW10gOiBbXTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAge29wdGlvbkxpc3QubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09IDEgfHwgdmFsdWUgPT09ICcxJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gY29tbWl0KGV2ZW50LnRhcmdldC5jaGVja2VkID8gJ3RydWUnIDogJycpfSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICk7XHJcbiAgICBjYXNlICdtdWx0aS1zZWxlY3QnOlxyXG4gICAgICByZXR1cm4gPE11bHRpU2VsZWN0Q2VsbCB2YWx1ZT17dmFsdWV9IG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfSBvbkNvbW1pdD17Y29tbWl0fSAvPjtcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXt2YWx1ZSA/IFN0cmluZyh2YWx1ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkcmFmdCB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gb25CbHVyPXsoKSA9PiBjb21taXQoKX0gb25LZXlEb3duPXsoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBjb21taXQoKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbHVtbk1lbnUgPSAoeyBjb2x1bW5zLCBoaWRkZW5Db2x1bW5zID0gW10sIG9uVG9nZ2xlIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHByZXYpID0+ICFwcmV2KX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAg0J/QvtC70Y9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHotMzAgbXQtMiB3LTU2IHNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcC0zIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17IWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSl9IG9uQ2hhbmdlPXsoKSA9PiBvblRvZ2dsZShjb2x1bW4ua2V5KX0gLz5cclxuICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3RDaGVja2JveGVzID0gKHsgbGFiZWwsIG9wdGlvbnMgPSBbXSwgdmFsdWUgPSBbXSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnIH0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBwYXJzZU11bHRpVmFsdWUodmFsdWUpKSwgW3ZhbHVlXSk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gcXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghbm9ybWFsaXplZFF1ZXJ5KSByZXR1cm4gb3B0aW9ucztcclxuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnkpKTtcclxuICB9LCBbb3B0aW9ucywgbm9ybWFsaXplZFF1ZXJ5XSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9IChvcHRpb24pID0+IHtcclxuICAgIGlmICghb25DaGFuZ2UpIHJldHVybjtcclxuICAgIGNvbnN0IGV4aXN0cyA9IHNlbGVjdGVkLmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICBjb25zdCBuZXh0ID0gZXhpc3RzID8gc2VsZWN0ZWQuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pIDogWy4uLnNlbGVjdGVkLCBvcHRpb25dO1xyXG4gICAgb25DaGFuZ2UobmV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3NlbGVjdGVkLmxlbmd0aCA/IGAke3NlbGVjdGVkLmxlbmd0aH0g0LLRi9Cx0YDQsNC90L5gIDogJ9Cd0LUg0LLRi9Cx0YDQsNC90L4nfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgIHtzZWxlY3RlZC5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGtleT17c2VydmljZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8xMCBweC0yIHB5LTEgdGV4dC14cyB0ZXh0LWluZGlnby0yMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShzZXJ2aWNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzYwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXNsYXRlLTQwMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezEuNX0gZD1cIk0yMSAyMWwtNC4zNS00LjM1bTAgMEE3LjUgNy41IDAgMTAxNi42NSAxNi42NXpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0YPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXRyYW5zcGFyZW50IHRleHQtc20gdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cXVlcnkgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSgnJyl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YfQuNGB0YLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtNTYgb3ZlcmZsb3cteS1hdXRvIHAtMlwiPlxyXG4gICAgICAgICAge2ZpbHRlcmVkLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMSBweS0yIHRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj57cGxhY2Vob2xkZXJ9PC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xIHNtOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHNlbGVjdGVkLmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlKG9wdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LXdoaXRlJyA6ICdib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCB0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC80MCdcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57b3B0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBY3RpdmUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWluZGlnby0zMDBcIj7inJM8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2xpZW50TG9va3VwSW5wdXQgPSAoe1xyXG4gIGxhYmVsID0gJ9Ca0LvQuNC10L3RgicsXHJcbiAgdmFsdWUgPSAnJyxcclxuICBvbkNoYW5nZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgb25TZWxlY3RDbGllbnQsXHJcbiAgcGxhY2Vob2xkZXIgPSAn0J3QsNGH0L3QuNGC0LUg0LLQstC+0LTQuNGC0Ywg0LjQvNGPINC40LvQuCDRgtC10LvQtdGE0L7QvScsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UXVlcnkodmFsdWUgfHwgJycpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGV4dChxdWVyeSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNob3J0bGlzdCA9IG5vcm1hbGl6ZWRcclxuICAgICAgPyBjbGllbnRzLmZpbHRlcihcclxuICAgICAgICAgIChjbGllbnQpID0+XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50Lm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZCkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplVGV4dChjbGllbnQucGhvbmUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZClcclxuICAgICAgICApXHJcbiAgICAgIDogY2xpZW50cztcclxuICAgIHJldHVybiBzaG9ydGxpc3Quc2xpY2UoMCwgNik7XHJcbiAgfSwgW2NsaWVudHMsIHF1ZXJ5XSk7XHJcblxyXG4gIHVzZU91dHNpZGVDbGljayhjb250YWluZXJSZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoY2xpZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjbGllbnQ/Lm5hbWUgfHwgJyc7XHJcbiAgICBzZXRRdWVyeShuZXh0VmFsdWUpO1xyXG4gICAgb25DaGFuZ2U/LihuZXh0VmFsdWUpO1xyXG4gICAgb25TZWxlY3RDbGllbnQ/LihjbGllbnQpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0xXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgb25DaGFuZ2U/LihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtvcGVuICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIG10LTEgdy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzk1IHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHttYXRjaGVzLm1hcCgoY2xpZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e2NsaWVudC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1zdGFydCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsYXN0OmJvcmRlci1ub25lIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoY2xpZW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2xpZW50Lm5hbWUgfHwgJ9CR0LXQtyDQuNC80LXQvdC4J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntjbGllbnQucGhvbmUgfHwgJ9Ci0LXQu9C10YTQvtC9INC90LUg0YPQutCw0LfQsNC9J308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3RhdHVzTWVudSA9ICh7IHN0YXR1c2VzID0gW10sIGhpZGRlblN0YXR1c2VzID0gW10sIG9uVG9nZ2xlLCBvblJlc2V0IH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIG9wZW4gPyAoKSA9PiBzZXRPcGVuKGZhbHNlKSA6IG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHByZXYpID0+ICFwcmV2KX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAg0KHRgtCw0YLRg9GB0YtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHotMzAgbXQtMiB3LTU2IHNwYWNlLXktMiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgcC0zIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgIHtzdGF0dXNlcy5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPtCd0LXRgiDRgdGC0LDRgtGD0YHQvtCyPC9wPn1cclxuICAgICAgICAgIHtzdGF0dXNlcy5tYXAoKHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtzdGF0dXN9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17IWhpZGRlblN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cyl9IG9uQ2hhbmdlPXsoKSA9PiBvblRvZ2dsZShzdGF0dXMpfSAvPlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25SZXNldH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUYWJsZVRvb2xiYXIgPSAoe1xyXG4gIHRhYmxlSWQsXHJcbiAgc2VhcmNoVGVybSxcclxuICBzZXRTZWFyY2hUZXJtLFxyXG4gIHN1cHBvcnRzQmFyYmVyRmlsdGVyLFxyXG4gIHNlbGVjdGVkQmFyYmVyLFxyXG4gIHNldFNlbGVjdGVkQmFyYmVyLFxyXG4gIGJhcmJlcnMsXHJcbiAgc3VwcG9ydHNTdGF0dXNGaWx0ZXIsXHJcbiAgc3RhdHVzZXMsXHJcbiAgaGlkZGVuU3RhdHVzZXMsXHJcbiAgdG9nZ2xlU3RhdHVzLFxyXG4gIHJlc2V0U3RhdHVzZXMsXHJcbiAgY29sdW1ucyxcclxuICBoaWRkZW5Db2x1bW5zLFxyXG4gIHRvZ2dsZUNvbHVtbixcclxuICBjYW5DcmVhdGUsXHJcbiAgb25PcGVuQ3JlYXRlLFxyXG4gIG9uUmVmcmVzaCxcclxuICBzaG93UGFzdEFwcG9pbnRtZW50cyxcclxuICBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyxcclxuICBzdXBwb3J0c0dyb3VwaW5nID0gZmFsc2UsXHJcbiAgZ3JvdXBCeURhdGUgPSBmYWxzZSxcclxuICBzZXRHcm91cEJ5RGF0ZSxcclxuICBsYXN0VXBkYXRlZEF0ID0gbnVsbCxcclxufSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBsZzpmbGV4LXJvdyBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtd3JhcCBnYXAtM1wiPlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHNtOnctNjRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTRcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk05IDMuNWE1LjUgNS41IDAgMDEzLjk5NSA5LjMxNWwzLjA5NSAzLjA5NWEuNzUuNzUgMCAxMS0xLjA2IDEuMDZsLTMuMDk1LTMuMDk0QTUuNSA1LjUgMCAxMTkgMy41em0wIDEuNWE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpcIlxyXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwi0J/QvtC40YHQuiDQv9C+INGC0LDQsdC70LjRhtC1XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweS0yIHBsLTkgcHItMyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwLzQwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICB7c3VwcG9ydHNCYXJiZXJGaWx0ZXIgJiYgKFxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQmFyYmVyfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWxlY3RlZEJhcmJlcihldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPtCS0YHQtSDQsdCw0YDQsdC10YDRizwvb3B0aW9uPlxyXG4gICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcmJlcn0gdmFsdWU9e2JhcmJlcn0+XHJcbiAgICAgICAgICAgICAge2JhcmJlcn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKX1cclxuICAgICAge3N1cHBvcnRzU3RhdHVzRmlsdGVyICYmIChcclxuICAgICAgICA8U3RhdHVzTWVudSBzdGF0dXNlcz17c3RhdHVzZXN9IGhpZGRlblN0YXR1c2VzPXtoaWRkZW5TdGF0dXNlc30gb25Ub2dnbGU9e3RvZ2dsZVN0YXR1c30gb25SZXNldD17cmVzZXRTdGF0dXNlc30gLz5cclxuICAgICAgKX1cclxuICAgICAge3RhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIHR5cGVvZiBzZXRTaG93UGFzdEFwcG9pbnRtZW50cyA9PT0gJ2Z1bmN0aW9uJyAmJiAoXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17ISFzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0L/RgNC+0YjQtdC00YjQuNC1XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgKX1cclxuICAgICAge3N1cHBvcnRzR3JvdXBpbmcgJiYgdHlwZW9mIHNldEdyb3VwQnlEYXRlID09PSAnZnVuY3Rpb24nICYmIChcclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjZW50LWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXshIWdyb3VwQnlEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRHcm91cEJ5RGF0ZShldmVudC50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAg0JPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMINC/0L4g0LTQvdGP0LxcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApfVxyXG4gICAgICA8Q29sdW1uTWVudSBjb2x1bW5zPXtjb2x1bW5zfSBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfSBvblRvZ2dsZT17dG9nZ2xlQ29sdW1ufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICB7bGFzdFVwZGF0ZWRBdCAmJiA8TGl2ZUJhZGdlIHRpbWVzdGFtcD17bGFzdFVwZGF0ZWRBdH0gLz59XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25SZWZyZXNofSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwXCI+XHJcbiAgICAgICAg0J7QsdC90L7QstC40YLRjFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2NhbkNyZWF0ZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk9wZW5DcmVhdGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuY29uc3QgYnVpbGRBcHBvaW50bWVudEdyb3VwcyA9IChyZWNvcmRzID0gW10pID0+IHtcclxuICBjb25zdCBidWNrZXRzID0gbmV3IE1hcCgpO1xyXG4gIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSByZWNvcmQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgIGNvbnN0IGJ1Y2tldCA9IGJ1Y2tldHMuZ2V0KGtleSkgfHwgW107XHJcbiAgICBidWNrZXQucHVzaChyZWNvcmQpO1xyXG4gICAgYnVja2V0cy5zZXQoa2V5LCBidWNrZXQpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGJ1Y2tldHMuZW50cmllcygpKVxyXG4gICAgLm1hcCgoW2tleSwgaXRlbXNdKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZEl0ZW1zID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGEuRGF0ZSwgYS5UaW1lLCBhLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShiLkRhdGUsIGIuVGltZSwgYi5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIHJldHVybiBsZWZ0IC0gcmlnaHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzb3J0ZWRJdGVtc1swXTtcclxuICAgICAgY29uc3Qgc29ydFZhbHVlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUocmVmZXJlbmNlLkRhdGUsIHJlZmVyZW5jZS5UaW1lLCByZWZlcmVuY2Uuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IGtleSB8fCBgbm8tZGF0ZS0ke3JlZmVyZW5jZT8uaWQgfHwgTWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlSGVhZGluZyhrZXkpLFxyXG4gICAgICAgIHJvd3M6IHNvcnRlZEl0ZW1zLFxyXG4gICAgICAgIHNvcnRWYWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbn07XHJcbmNvbnN0IFNvcnRJbmRpY2F0b3IgPSAoeyBkaXJlY3Rpb24gfSkgPT4gKFxyXG4gIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGVhZGluZy1bNnB4XVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC0zIHctMyB0ZXh0LXNsYXRlLTYwMCcsIGRpcmVjdGlvbiA9PT0gJ2FzYycgJiYgJ3RleHQtaW5kaWdvLTMwMCcpfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQgMTBsNC00IDQgNFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTMgdy0zIC1tdC0wLjUgdGV4dC1zbGF0ZS02MDAnLCBkaXJlY3Rpb24gPT09ICdkZXNjJyAmJiAndGV4dC1pbmRpZ28tMzAwJyl9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNCA2bDQgNCA0LTRcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvc3Bhbj5cclxuKTtcclxuY29uc3QgRGF0YVRhYmxlID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHJvd3MsXHJcbiAgY29sdW1ucyxcclxuICBoaWRkZW5Db2x1bW5zLFxyXG4gIHNvcnRDb25maWcsXHJcbiAgb25Tb3J0LFxyXG4gIG9uVXBkYXRlLFxyXG4gIG9uRGVsZXRlLFxyXG4gIG9wdGlvbnMsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBncm91cEJ5RGF0ZSA9IHRydWUsXHJcbn0pID0+IHtcclxuICBpZiAoIXJvd3MubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LfQsNC/0LjRgdC10LkuPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZpc2libGVDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmtleSkpO1xyXG4gIGNvbnN0IGdyb3VwZWRSb3dzID1cclxuICAgIHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnICYmIGdyb3VwQnlEYXRlID8gYnVpbGRBcHBvaW50bWVudEdyb3Vwcyhyb3dzKSA6IFt7IGtleTogJ2RlZmF1bHQnLCBsYWJlbDogbnVsbCwgcm93cyB9XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTQgb3ZlcmZsb3cteC1hdXRvIG92ZXJmbG93LXktdmlzaWJsZSBwYi0zIHNtOm14LTBcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LVs3NjBweF0gdGFibGUtYXV0byB0ZXh0LVsxM3B4XSBsZWFkaW5nLXRpZ2h0IHNtOnRleHQtc21cIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncHgtMiBweS0xLjUgd2hpdGVzcGFjZS1ub3dyYXAnLCBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICd0ZXh0LWNlbnRlcicsIGNvbHVtbi5taW5XaWR0aCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb2x1bW4uc29ydGFibGUgIT09IGZhbHNlICYmIG9uU29ydChjb2x1bW4ua2V5KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTInLCBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICdqdXN0aWZ5LWNlbnRlcicpfT5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5zb3J0YWJsZSAhPT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTb3J0SW5kaWNhdG9yIGRpcmVjdGlvbj17c29ydENvbmZpZz8ua2V5ID09PSBjb2x1bW4ua2V5ID8gc29ydENvbmZpZy5kaXJlY3Rpb24gOiBudWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiA8dGggY2xhc3NOYW1lPVwicHgtMiBweS0xLjUgdGV4dC1yaWdodFwiPtCU0LXQudGB0YLQstC40Y88L3RoPn1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Z3JvdXBlZFJvd3MubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtncm91cC5rZXl9PlxyXG4gICAgICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3Zpc2libGVDb2x1bW5zLmxlbmd0aCArIChvbkRlbGV0ZSA/IDEgOiAwKX0gY2xhc3NOYW1lPVwicHgtMiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2dyb3VwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1weCBmbGV4LTEgYmctc2xhdGUtNzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17Z2V0UmVjb3JkSWQocmVjb3JkKX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3B4LTIgcHktMS41IGFsaWduLXRvcCB3aGl0ZXNwYWNlLXByZS13cmFwIGJyZWFrLXdvcmRzIHRleHQtWzEzcHhdIGxlYWRpbmctc251ZyBzbTp0ZXh0LXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtyZWNvcmR9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9uT3BlblByb2ZpbGU9e29uT3BlblByb2ZpbGV9IHRhYmxlSWQ9e3RhYmxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMS41IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUocmVjb3JkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMCBweC0yIHB5LTEuNSB0ZXh0LXhzIHRleHQtcm9zZS0zMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENyZWF0ZVJlY29yZE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvblNhdmUsIGNvbHVtbnMsIHRhYmxlTmFtZSwgb3B0aW9ucywgdGFibGVJZCwgY2xpZW50cyA9IFtdLCBoaWRkZW5GaWVsZHMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgZWRpdGFibGVDb2x1bW5zID0gdXNlTWVtbygoKSA9PiBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4uZWRpdGFibGUgIT09IGZhbHNlKSwgW2NvbHVtbnNdKTtcclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBlZGl0YWJsZUNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5GaWVsZHMuaW5jbHVkZXMoY29sdW1uLmtleSkpLFxyXG4gICAgW2VkaXRhYmxlQ29sdW1ucywgaGlkZGVuRmllbGRzXVxyXG4gICk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge307XHJcbiAgICBlZGl0YWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIHBheWxvYWRbY29sdW1uLmtleV0gPSBjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgPyBbXSA6ICcnO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9LCBbZWRpdGFibGVDb2x1bW5zXSk7XHJcblxyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBpc0FwcG9pbnRtZW50c0NyZWF0ZSA9IHRhYmxlSWQgPT09ICdBcHBvaW50bWVudHMnO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzT3Blbikgc2V0RHJhZnQoaW5pdGlhbFN0YXRlKTtcclxuICB9LCBbaXNPcGVuLCBpbml0aWFsU3RhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgT2JqZWN0LmVudHJpZXMoZHJhZnQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBwYXlsb2FkW2tleV0gPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgb25TYXZlKHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICBQaG9uZTogY2xpZW50LnBob25lIHx8IHByZXYuUGhvbmUsXHJcbiAgICAgIEJhcmJlcjogcHJldi5CYXJiZXIgfHwgY2xpZW50LnByZWZlcnJlZEJhcmJlciB8fCAnJyxcclxuICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT17YNCd0L7QstCw0Y8g0LfQsNC/0LjRgdGMOiAke3RhYmxlTmFtZX1gfVxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgZm9vdGVyPXtcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBkcmFmdFtjb2x1bW4ua2V5XTtcclxuICAgICAgICAgIGlmIChpc0FwcG9pbnRtZW50c0NyZWF0ZSAmJiBjb2x1bW4ua2V5ID09PSAnQ3VzdG9tZXJOYW1lJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDbGllbnRMb29rdXBJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgQ3VzdG9tZXJOYW1lOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7KG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdKS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ211bHRpLXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogcGFyc2VNdWx0aVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tjb2x1bW4ub3B0aW9uc0tleV0gfHwgW119XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBzZWxlY3RlZCB9KSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LXRgiDQtNCw0L3QvdGL0YVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLmtleSA9PT0gJ1RpbWUnIHx8IGNvbHVtbi5rZXkgPT09ICdXZWVrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBuZXh0VmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ+KAlCcgOiAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0YwnfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17Y29sdW1uLmtleSA9PT0gJ1dlZWsnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHQu9C+0YLQvtCyJyA6ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4J31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj57Y29sdW1uLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e2NvbHVtbi50eXBlID09PSAnZGF0ZScgPyAnZGF0ZScgOiAndGV4dCd9IHZhbHVlPXt2YWx1ZSB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcm9maWxlTW9kYWwgPSAoeyBzdGF0ZSwgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRzID0gc3RhdGUuZGF0YT8uYXBwb2ludG1lbnRzIHx8IFtdO1xyXG4gIGNvbnN0IHZpc2l0SGlzdG9yeSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFhcHBvaW50bWVudHMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBjdXRvZmYgPSBEYXRlLm5vdygpIC0gWUVBUl9JTl9NUztcclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGFwcG9pbnRtZW50c1xyXG4gICAgICAubWFwKChhcHB0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYXBwdC5EYXRlLCBhcHB0LlRpbWUsIGFwcHQuc3RhcnREYXRlVGltZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uYXBwdCwgc3RhcnREYXRlIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKGFwcHQpID0+IGFwcHQuc3RhcnREYXRlICYmIGFwcHQuc3RhcnREYXRlLmdldFRpbWUoKSA+PSBjdXRvZmYgJiYgaXNDb21wbGV0ZWRBcHBvaW50bWVudFN0YXR1cyhhcHB0LlN0YXR1cykpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgcmV0dXJuIGNvbXBsZXRlZC5tYXAoKGFwcHQsIGluZGV4KSA9PiAoe1xyXG4gICAgICAuLi5hcHB0LFxyXG4gICAgICBvcmRlck51bWJlcjogY29tcGxldGVkLmxlbmd0aCAtIGluZGV4LFxyXG4gICAgICBkYXRlTGFiZWw6IGZvcm1hdERhdGVUaW1lKGFwcHQuRGF0ZSwgYXBwdC5UaW1lKSxcclxuICAgIH0pKTtcclxuICB9LCBbYXBwb2ludG1lbnRzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e3N0YXRlLmRhdGE/LnVzZXI/Lk5hbWUgfHwgJ9Cf0YDQvtGE0LjQu9GMINC60LvQuNC10L3RgtCwJ31cclxuICAgICAgaXNPcGVuPXtzdGF0ZS5vcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9ezxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+fVxyXG4gICAgPlxyXG4gICAgICB7c3RhdGUubG9hZGluZyAmJiA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0JfQsNCz0YDRg9C20LDRjiDQv9GA0L7RhNC40LvRjC4uLlwiIC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgc3RhdGUuZGF0YT8uZXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e3N0YXRlLmRhdGEuZXJyb3J9IC8+fVxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgJiYgc3RhdGUuZGF0YT8udXNlciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QotC10LvQtdGE0L7QvTo8L3NwYW4+IHtzdGF0ZS5kYXRhLnVzZXIuUGhvbmUgfHwgJy0nfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+VGVsZWdyYW06PC9zcGFuPiB7c3RhdGUuZGF0YS51c2VyLlRlbGVncmFtSUQgfHwgJy0nfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JHQsNGA0LHQtdGAOjwvc3Bhbj4ge3N0YXRlLmRhdGEudXNlci5CYXJiZXIgfHwgJy0nfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0LLQuNC30LjRgtC+0LI8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYXgtaC02NCBzcGFjZS15LTIgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIHt2aXNpdEhpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvQv9C+0LvQvdC10L3QviDQt9CwIDEyINC80LXRgdGP0YbQtdCyOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dmlzaXRIaXN0b3J5Lmxlbmd0aH08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCi0L7Qu9GM0LrQviDQt9Cw0LLQtdGA0YjRkdC90L3Ri9C1INC30LDQv9C40YHQuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt2aXNpdEhpc3RvcnkubWFwKChhcHB0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTGF0ZXN0ID0gaW5kZXggPT09IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHthcHB0LmlkIHx8IGFwcHQuZGF0ZUxhYmVsfS0ke2FwcHQub3JkZXJOdW1iZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBwLTMgdGV4dC14cyB0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xhdGVzdCA/ICdib3JkZXItZW1lcmFsZC00MDAvNjAgYmctZW1lcmFsZC01MDAvMTAgc2hhZG93LWlubmVyIHNoYWRvdy1lbWVyYWxkLTkwMC8zMCcgOiAnYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+0KHRgtGA0LjQttC60LAg4oSWe2FwcHQub3JkZXJOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcHB0LmRhdGVMYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1zbGF0ZS0xMDBcIj57YXBwdC5CYXJiZXIgfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPnthcHB0LlNlcnZpY2VzIHx8ICfigJQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QktGL0L/QvtC70L3QtdC90L3Ri9GFINC30LDQv9C40YHQtdC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC5INCz0L7QtCDQvdC10YIuPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCYWNrdXBzUGFuZWwgPSAoeyBiYWNrdXBzID0gW10sIG9uUmVzdG9yZSwgb25DcmVhdGUgfSkgPT4gKFxyXG4gIDxTZWN0aW9uQ2FyZFxyXG4gICAgdGl0bGU9XCLQoNC10LfQtdGA0LLQvdGL0LUg0LrQvtC/0LjQuFwiXHJcbiAgICBhY3Rpb25zPXtcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxuICA+XHJcbiAgICB7YmFja3Vwcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0L/Rg9GB0YLQsC48L3A+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgIHtiYWNrdXBzLm1hcCgoYmFja3VwKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YmFja3VwfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2JhY2t1cH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN0b3JlKGJhY2t1cCl9IGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApfVxyXG4gIDwvU2VjdGlvbkNhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBBcHBvaW50bWVudE1vZGFsID0gKHsgb3BlbiwgYXBwb2ludG1lbnQsIG9wdGlvbnMgPSB7fSwgb25DbG9zZSwgb25TYXZlLCBpc05ldyA9IGZhbHNlLCBjbGllbnRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGJ1aWxkRHJhZnQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWNvcmQpID0+IChyZWNvcmQgPyB7IC4uLnJlY29yZCwgVXNlcklEOiByZWNvcmQuVXNlcklEIHx8IHJlY29yZC51c2VySWQgfHwgJycsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfSA6IG51bGwpLFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm47XHJcbiAgICBzZXREcmFmdChidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XHJcblxyXG4gIGlmICghb3BlbiB8fCAhZHJhZnQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlc1NlbGVjdGlvbiA9IHBhcnNlTXVsdGlWYWx1ZShkcmFmdC5TZXJ2aWNlcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgb25TYXZlKHtcclxuICAgICAgaWQ6IGRyYWZ0LmlkLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBkcmFmdC5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IGRyYWZ0LlBob25lLFxyXG4gICAgICAgIEJhcmJlcjogZHJhZnQuQmFyYmVyLFxyXG4gICAgICAgIERhdGU6IGRyYWZ0LkRhdGUsXHJcbiAgICAgICAgVGltZTogZHJhZnQuVGltZSxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRyYWZ0LlN0YXR1cyksXHJcbiAgICAgICAgU2VydmljZXM6IGRyYWZ0LlNlcnZpY2VzLFxyXG4gICAgICAgIFVzZXJJRDogZHJhZnQuVXNlcklEIHx8ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBpc05ldyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICghcHJldikgcmV0dXJuIHByZXY7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICAgIFBob25lOiBjbGllbnQucGhvbmUgfHwgcHJldi5QaG9uZSxcclxuICAgICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtpc05ldyA/ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcgOiBg0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQt9Cw0L/QuNGB0LggJHtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9YH1cclxuICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9e1xyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPINC60LvQuNC10L3RgtCwXCJcclxuICAgICAgICAgIHZhbHVlPXtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCi0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RyYWZ0LlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e2RyYWZ0LkJhcmJlciB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTExIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LDRgNCx0LXRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgeyhvcHRpb25zLmJhcmJlcnMgfHwgW10pLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RyYWZ0LkRhdGUgPyBTdHJpbmcoZHJhZnQuRGF0ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnRGF0ZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8VGltZVJhbmdlUGlja2VyIHZhbHVlPXtkcmFmdC5UaW1lIHx8ICcnfSBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdUaW1lJywgbmV4dFZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjFwiIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuU3RhdHVzIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1N0YXR1cycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHRgtCw0YLRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXN9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5zZXJ2aWNlcyB8fCBbXX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBoYW5kbGVDaGFuZ2UoJ1NlcnZpY2VzJywgc2VsZWN0ZWQuam9pbignLCAnKSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5jb25zdCBUYWJsZXNXb3Jrc3BhY2UgPSAoe1xyXG4gIGFwaVJlcXVlc3QsXHJcbiAgc2hhcmVkT3B0aW9ucyxcclxuICBvbk9wdGlvbnNVcGRhdGUsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgY3VycmVudFVzZXIgPSBudWxsLFxyXG4gIGxpdmVBcHBvaW50bWVudHMgPSBudWxsLFxyXG4gIGxpdmVVcGRhdGVkQXQgPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5hY3RpdmUnLCAnQXBwb2ludG1lbnRzJyk7XHJcbiAgY29uc3QgW3RhYmxlcywgc2V0VGFibGVzXSA9IHVzZVN0YXRlKCgpID0+IERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBbXSB9KSwge30pKTtcclxuICBjb25zdCBbZHJvcGRvd25PcHRpb25zLCBzZXREcm9wZG93bk9wdGlvbnNdID0gdXNlU3RhdGUoc2hhcmVkT3B0aW9ucyB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9KTtcclxuICBjb25zdCBbdGFibGVFcnJvciwgc2V0VGFibGVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJiZXIsIHNldFNlbGVjdGVkQmFyYmVyXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmJhcmJlckZpbHRlcicsICdhbGwnKTtcclxuICBjb25zdCBbaGlkZGVuU3RhdHVzZXMsIHNldEhpZGRlblN0YXR1c2VzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlblN0YXR1c2VzJywgW10pO1xyXG4gIGNvbnN0IFtoaWRkZW5Db2x1bW5zTWFwLCBzZXRIaWRkZW5Db2x1bW5zTWFwXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlbkNvbHVtbnMnLCB7XHJcbiAgICBBcHBvaW50bWVudHM6IFsnVXNlcklEJ10sXHJcbiAgICBTY2hlZHVsZXM6IFtdLFxyXG4gICAgVXNlcnM6IFtdLFxyXG4gICAgQ29zdDogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NvcnRDb25maWdzLCBzZXRTb3J0Q29uZmlnc10gPSB1c2VMb2NhbFN0b3JhZ2UoXHJcbiAgICAndGFibGVzLnNvcnRDb25maWdzJyxcclxuICAgIERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBUQUJMRV9DT05GSUdbdGFibGVdPy5kZWZhdWx0U29ydCB8fCBudWxsIH0pLCB7fSlcclxuICApO1xyXG4gIGNvbnN0IFtjcmVhdGVNb2RhbE9wZW4sIHNldENyZWF0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXN0QXBwb2ludG1lbnRzLCBzZXRTaG93UGFzdEFwcG9pbnRtZW50c10gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5zaG93UGFzdEFwcG9pbnRtZW50cycsIHRydWUpO1xyXG4gIGNvbnN0IFtncm91cEFwcG9pbnRtZW50c0J5RGF0ZSwgc2V0R3JvdXBBcHBvaW50bWVudHNCeURhdGVdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuZ3JvdXBBcHBvaW50bWVudHNCeURhdGUnLCB0cnVlKTtcclxuICBjb25zdCBhcHBvaW50bWVudFRlbXBsYXRlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICBDdXN0b21lck5hbWU6ICcnLFxyXG4gICAgICBQaG9uZTogJycsXHJcbiAgICAgIEJhcmJlcjogcGlja0JhcmJlckZvclVzZXIoY3VycmVudFVzZXIsIGRyb3Bkb3duT3B0aW9ucy5iYXJiZXJzIHx8IFtdKSxcclxuICAgICAgRGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcclxuICAgICAgVGltZTogJycsXHJcbiAgICAgIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoKGRyb3Bkb3duT3B0aW9ucy5zdGF0dXNlcyAmJiBkcm9wZG93bk9wdGlvbnMuc3RhdHVzZXNbMF0pIHx8ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcpLFxyXG4gICAgICBTZXJ2aWNlczogJycsXHJcbiAgICAgIFVzZXJJRDogJycsXHJcbiAgICB9KSxcclxuICAgIFtkcm9wZG93bk9wdGlvbnMsIGN1cnJlbnRVc2VyPy5kaXNwbGF5TmFtZSwgY3VycmVudFVzZXI/LnVzZXJuYW1lXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hhcmVkT3B0aW9ucykge1xyXG4gICAgICBzZXREcm9wZG93bk9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnNoYXJlZE9wdGlvbnMsXHJcbiAgICAgICAgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3Qoc2hhcmVkT3B0aW9ucy5zdGF0dXNlcyB8fCBbXSksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzaGFyZWRPcHRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIVRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0pIHtcclxuICAgICAgc2V0QWN0aXZlVGFibGUoJ0FwcG9pbnRtZW50cycpO1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEhpZGRlblN0YXR1c2VzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBBcnJheS5mcm9tKG5ldyBTZXQocHJldi5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSkuZmlsdGVyKEJvb2xlYW4pKSk7XHJcbiAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gcHJldi5sZW5ndGggJiYgbm9ybWFsaXplZC5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcHJldltpbmRleF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgICB9KTtcclxuICB9LCBbc2V0SGlkZGVuU3RhdHVzZXNdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUYWJsZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xyXG4gICAgc2V0VGFibGVFcnJvcignJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgLi4uREFUQV9UQUJMRVMubWFwKCh0YWJsZSkgPT4gYXBpUmVxdWVzdChgLyR7dGFibGV9YCkpLFxyXG4gICAgICAgIGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cycpLFxyXG4gICAgICBdKTtcclxuICAgICAgY29uc3QgbmV4dFRhYmxlcyA9IHt9O1xyXG4gICAgICBEQVRBX1RBQkxFUy5mb3JFYWNoKCh0YWJsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gcmVzcG9uc2VzW2luZGV4XSB8fCBbXTtcclxuICAgICAgICBuZXh0VGFibGVzW3RhYmxlXSA9IHRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IHJlY29yZHMubWFwKChyb3cpID0+ICh7IC4uLnJvdywgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyb3cuU3RhdHVzKSB9KSkgOiByZWNvcmRzO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmF3T3B0aW9ucyA9IHJlc3BvbnNlc1tEQVRBX1RBQkxFUy5sZW5ndGhdIHx8IHsgYmFyYmVyczogW10sIHNlcnZpY2VzOiBbXSwgc3RhdHVzZXM6IFtdIH07XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0ge1xyXG4gICAgICAgIC4uLnJhd09wdGlvbnMsXHJcbiAgICAgICAgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3QocmF3T3B0aW9ucy5zdGF0dXNlcyB8fCBbXSksXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRhYmxlcyhuZXh0VGFibGVzKTtcclxuICAgICAgc2V0RHJvcGRvd25PcHRpb25zKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgICAgb25PcHRpb25zVXBkYXRlPy4obm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGFibGUgZmV0Y2ggZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGC0LDQsdC70LjRhtGLJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbYXBpUmVxdWVzdCwgb25PcHRpb25zVXBkYXRlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhYmxlcygpO1xyXG4gIH0sIFtmZXRjaFRhYmxlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpdmVBcHBvaW50bWVudHMpKSByZXR1cm47XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIEFwcG9pbnRtZW50czogbGl2ZUFwcG9pbnRtZW50cy5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyb3cuU3RhdHVzKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSkpO1xyXG4gIH0sIFtsaXZlQXBwb2ludG1lbnRzLCBsaXZlVXBkYXRlZEF0XSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRDb2x1bW5zID0gVEFCTEVfQ09MVU1OU1thY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgY29uc3QgaGlkZGVuQ29sdW1ucyA9IGhpZGRlbkNvbHVtbnNNYXBbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gIGNvbnN0IHZpc2libGVDb2x1bW5zID0gY3VycmVudENvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKTtcclxuICBjb25zdCBzb3J0Q29uZmlnID0gc29ydENvbmZpZ3NbYWN0aXZlVGFibGVdIHx8IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0/LmRlZmF1bHRTb3J0IHx8IG51bGw7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZFJvd3MgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHNvdXJjZSA9IHRhYmxlc1thY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgICBpZiAoIXNvdXJjZS5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgIGxldCByb3dzID0gWy4uLnNvdXJjZV07XHJcbiAgICBpZiAoVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXT8uc3VwcG9ydHNCYXJiZXJGaWx0ZXIgJiYgc2VsZWN0ZWRCYXJiZXIgIT09ICdhbGwnKSB7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiBub3JtYWxpemVUZXh0KHJvdy5CYXJiZXIpLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZVRleHQoc2VsZWN0ZWRCYXJiZXIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJykge1xyXG4gICAgICBjb25zdCBub3dUcyA9IERhdGUubm93KCk7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGRlblN0YXR1c2VzLmxlbmd0aCAmJiBoaWRkZW5TdGF0dXNlcy5pbmNsdWRlcyhyb3cuU3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChzaG93UGFzdEFwcG9pbnRtZW50cykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZERpc3BsYXlBcHBvaW50bWVudChyb3csIG5vd1RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkpIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hUZXJtLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4gdmlzaWJsZUNvbHVtbnMuc29tZSgoY29sdW1uKSA9PiBub3JtYWxpemVUZXh0KHJvd1tjb2x1bW4ua2V5XSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpKTtcclxuICAgIH1cclxuICAgIGlmIChzb3J0Q29uZmlnPy5rZXkpIHtcclxuICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IG5vcm1hbGl6ZVRleHQoYVtzb3J0Q29uZmlnLmtleV0pLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBub3JtYWxpemVUZXh0KGJbc29ydENvbmZpZy5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRDb25maWcuZGlyZWN0aW9uID09PSAnYXNjJyA/IChsZWZ0ID4gcmlnaHQgPyAxIDogLTEpIDogbGVmdCA+IHJpZ2h0ID8gLTEgOiAxO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByb3dzO1xyXG4gIH0sIFt0YWJsZXMsIGFjdGl2ZVRhYmxlLCBzZWxlY3RlZEJhcmJlciwgaGlkZGVuU3RhdHVzZXMsIHNlYXJjaFRlcm0sIHZpc2libGVDb2x1bW5zLCBzb3J0Q29uZmlnLCBzaG93UGFzdEFwcG9pbnRtZW50c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTb3J0ID0gKGNvbHVtbktleSkgPT4ge1xyXG4gICAgc2V0U29ydENvbmZpZ3MoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHByZXZbYWN0aXZlVGFibGVdO1xyXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBjdXJyZW50Py5rZXkgPT09IGNvbHVtbktleSAmJiBjdXJyZW50LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2FjdGl2ZVRhYmxlXTogeyBrZXk6IGNvbHVtbktleSwgZGlyZWN0aW9uIH0gfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbHVtbiA9IChjb2x1bW5LZXkpID0+IHtcclxuICAgIHNldEhpZGRlbkNvbHVtbnNNYXAoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgaGlkZGVuID0gbmV3IFNldChwcmV2W2FjdGl2ZVRhYmxlXSB8fCBbXSk7XHJcbiAgICAgIGlmIChoaWRkZW4uaGFzKGNvbHVtbktleSkpIHtcclxuICAgICAgICBoaWRkZW4uZGVsZXRlKGNvbHVtbktleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaGlkZGVuLnNpemUgPCBjdXJyZW50Q29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaGlkZGVuLmFkZChjb2x1bW5LZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFthY3RpdmVUYWJsZV06IEFycmF5LmZyb20oaGlkZGVuKSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgICBzZXRIaWRkZW5TdGF0dXNlcygocHJldikgPT4gKHByZXYuaW5jbHVkZXMobm9ybWFsaXplZCkgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbm9ybWFsaXplZCkgOiBbLi4ucHJldiwgbm9ybWFsaXplZF0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAocmVjb3JkSWQsIGRhdGEpID0+IHtcclxuICAgIGlmICghcmVjb3JkSWQpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID1cclxuICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgZGF0YT8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHsgLi4uZGF0YSwgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShkYXRhLlN0YXR1cykgfVxyXG4gICAgICAgIDogZGF0YTtcclxuICAgIGNvbnN0IG9yaWdpbmFsID0gdGFibGVzW3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgc2V0VGFibGVzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBwcmV2W3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgW3RhYmxlSWRdOiBsaXN0Lm1hcCgocm93KSA9PiAoZ2V0UmVjb3JkSWQocm93KSA9PT0gcmVjb3JkSWQgPyB7IC4uLnJvdywgLi4ubm9ybWFsaXplZERhdGEgfSA6IHJvdykpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID1cclxuICAgICAgICB0YWJsZUlkID09PSAnU2NoZWR1bGVzJ1xyXG4gICAgICAgICAgPyB7IC4uLihvcmlnaW5hbC5maW5kKChyb3cpID0+IGdldFJlY29yZElkKHJvdykgPT09IHJlY29yZElkKSB8fCB7fSksIC4uLm5vcm1hbGl6ZWREYXRhIH1cclxuICAgICAgICAgIDogbm9ybWFsaXplZERhdGE7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY29yZElkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVXBkYXRlIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC+0LHQvdC+0LLQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHJlY29yZCkgPT4ge1xyXG4gICAgaWYgKCFyZWNvcmQgfHwgYWN0aXZlVGFibGUgPT09ICdTY2hlZHVsZXMnKSByZXR1cm47XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Ywg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjz8nKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFt0YWJsZUlkXTogbGlzdC5maWx0ZXIoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSAhPT0gZ2V0UmVjb3JkSWQocmVjb3JkKSkgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUmVjb3JkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgcGF5bG9hZD8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8geyAuLi5wYXlsb2FkLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHBheWxvYWQuU3RhdHVzKSB9XHJcbiAgICAgICAgICA6IHBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZWRQYXlsb2FkKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoVGFibGVzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGFibGVTZXR0aW5ncyA9IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0gfHwge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAge1RBQkxFX09SREVSLm1hcCgodGFibGUpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt0YWJsZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFibGUodGFibGUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBweC00IHB5LTIgdGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgYWN0aXZlVGFibGUgPT09IHRhYmxlID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZScgOiAnYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VEFCTEVfQ09ORklHW3RhYmxlXT8ubGFiZWwgfHwgdGFibGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dGFibGVTZXR0aW5ncyAmJiAoXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPXt0YWJsZVNldHRpbmdzLmxhYmVsfT5cclxuICAgICAgICAgIHt0YWJsZUVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt0YWJsZUVycm9yfSAvPn1cclxuICAgICAgICAgIDxUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHN1cHBvcnRzQmFyYmVyRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzQmFyYmVyRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJhcmJlcj17c2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQmFyYmVyPXtzZXRTZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnN9XHJcbiAgICAgICAgICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17ZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHRvZ2dsZVN0YXR1cz17dG9nZ2xlU3RhdHVzfVxyXG4gICAgICAgICAgICByZXNldFN0YXR1c2VzPXsoKSA9PiBzZXRIaWRkZW5TdGF0dXNlcyhbXSl9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICB0b2dnbGVDb2x1bW49e3RvZ2dsZUNvbHVtbn1cclxuICAgICAgICAgICAgY2FuQ3JlYXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZX1cclxuICAgICAgICAgICAgb25PcGVuQ3JlYXRlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17ZmV0Y2hUYWJsZXN9XHJcbiAgICAgICAgICAgIHNob3dQYXN0QXBwb2ludG1lbnRzPXtzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHM9e3NldFNob3dQYXN0QXBwb2ludG1lbnRzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0dyb3VwaW5nPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cyd9XHJcbiAgICAgICAgICAgIGdyb3VwQnlEYXRlPXtncm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgICAgc2V0R3JvdXBCeURhdGU9e3NldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlfVxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZEF0PXtsaXZlVXBkYXRlZEF0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc0ZldGNoaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0J7QsdC90L7QstC70Y/RjiDRgtCw0LHQu9C40YbRiy4uLlwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29uZmlnPXtzb3J0Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXtoYW5kbGVTb3J0fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSA/IGhhbmRsZURlbGV0ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgZ3JvdXBCeURhdGU9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IGdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7dGFibGVTZXR0aW5ncy5jYW5DcmVhdGUgJiZcclxuICAgICAgICAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gKFxyXG4gICAgICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICAgICAgb3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBhcHBvaW50bWVudD17YXBwb2ludG1lbnRUZW1wbGF0ZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICBvblNhdmU9eyh7IHBheWxvYWQgfSkgPT4gaGFuZGxlQ3JlYXRlUmVjb3JkKHBheWxvYWQpfVxyXG4gICAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgICBjbGllbnRzPXtjbGllbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENyZWF0ZVJlY29yZE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICBvblNhdmU9e2hhbmRsZUNyZWF0ZVJlY29yZH1cclxuICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVTZXR0aW5ncy5sYWJlbH1cclxuICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgaGlkZGVuRmllbGRzPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyBbJ1VzZXJJRCcsICdSZW1pbmRlcjJoQ2xpZW50U2VudCcsICdSZW1pbmRlcjJoQmFyYmVyU2VudCddIDogW119XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQm90Q29udHJvbFZpZXcgPSAoe1xyXG4gIHN0YXR1cyxcclxuICBzZXR0aW5ncyxcclxuICBiYWNrdXBzID0gW10sXHJcbiAgbWVzc2FnZXMgPSBbXSxcclxuICBvblRvZ2dsZUVuYWJsZWQsXHJcbiAgb25TdGFydCxcclxuICBvblN0b3AsXHJcbiAgb25SZXN0YXJ0LFxyXG4gIG9uU2F2ZVNldHRpbmdzLFxyXG4gIG9uU2F2ZU1lc3NhZ2UsXHJcbiAgb25SZXN0b3JlQmFja3VwLFxyXG4gIG9uQ3JlYXRlQmFja3VwLFxyXG4gIGxpY2Vuc2VTdGF0dXMsXHJcbiAgdXBkYXRlSW5mbyxcclxuICBvblJlZnJlc2hVcGRhdGUsXHJcbiAgb25BcHBseVVwZGF0ZSxcclxuICBzeXN0ZW1CdXN5LFxyXG4gIHZpZXdNb2RlID0gJ2JvdCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBzZXRBYm91dChzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuICB9LCBbc2V0dGluZ3NdKTtcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnc3lzdGVtJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICA8QmFja3Vwc1BhbmVsIGJhY2t1cHM9e2JhY2t1cHN9IG9uUmVzdG9yZT17b25SZXN0b3JlQmFja3VwfSBvbkNyZWF0ZT17b25DcmVhdGVCYWNrdXB9IC8+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCb0LjRhtC10L3Qt9C40Y8g0Lgg0L7QsdC90L7QstC70LXQvdC40Y9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCb0LjRhtC10L3Qt9C40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCh0YLQsNGC0YPRgToge2xpY2Vuc2VTdGF0dXM/LnZhbGlkID8gJ9CQ0LrRgtC40LLQvdCwJyA6ICfQndC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk6IHtsaWNlbnNlU3RhdHVzPy5tZXNzYWdlIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm93bmVyICYmIDxwPtCS0LvQsNC00LXQu9C10YY6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2Uub3duZXJ9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8uZXhwaXJlc0F0ICYmIDxwPtCU0LXQudGB0YLQstGD0LXRgiDQtNC+IHtmb3JtYXREYXRlKGxpY2Vuc2VTdGF0dXMubGljZW5zZS5leHBpcmVzQXQpfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm51bWJlciAmJiA8cD7QndC+0LzQtdGAOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm51bWJlcn08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7QntCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0J/QvtGB0LvQtdC00L3Rj9GPINCy0LXRgNGB0LjRjzoge3VwZGF0ZUluZm8/LnZlcnNpb24gfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQvtCy0LXRgNC10L3Qvjoge3VwZGF0ZUluZm8/LmNoZWNrZWRBdCA/IGZvcm1hdERhdGUodXBkYXRlSW5mby5jaGVja2VkQXQpIDogJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCh0YLQsNGC0YPRgToge3VwZGF0ZUluZm8/LmRldGFpbHMgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCf0YDQvtCy0LXRgNC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5IHx8ICF1cGRhdGVJbmZvPy5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzeXN0ZW1CdXN5ID8gJ9Ce0LHQvdC+0LLQu9C10L3QuNC14oCmJyA6ICfQntCx0L3QvtCy0LjRgtGMJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQodGC0LDRgtGD0YEg0LHQvtGC0LBcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0KHQvtGB0YLQvtGPOiB7c3RhdHVzPy5ydW5uaW5nID8gJ9GA0LDQsdC+0YLQsNC10YInIDogJ9C+0YHRgtCw0L3QvtCy0LvQtdC9J308L3A+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2V0dGluZ3M/LmlzQm90RW5hYmxlZCAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uVG9nZ2xlRW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNCy0YLQvtGB0YLQsNGA0YIg0LLQvNC10YHRgtC1INGBIENSTVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQotC10LrRgdGC0Ysg0LHQvtGC0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QntC/0LjRgdCw0L3QuNC1INC70LXQvdC00LjQvdCz0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXszfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCR0LvQvtC6IMKr0J4g0L3QsNGBwrs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBYm91dChldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXs0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZVNldHRpbmdzKHsgYm90RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhYm91dFRleHQ6IGFib3V0IH0pfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YHRgtGLXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMb2dpblNjcmVlbiA9ICh7IG9uTG9naW4sIGVycm9yIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbk9wdGlvbnMsIHNldExvZ2luT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdGlvbnNFcnJvciwgc2V0T3B0aW9uc0Vycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZ09wdGlvbnMsIHNldExvYWRpbmdPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdPcHRpb25zKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUobm9ybWFsaXplZFswXS5sb2dpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm9ybWFsaXplZC5zb21lKChvcHRpb24pID0+IG9wdGlvbi5sb2dpbiA9PT0gdXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcignJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhbXSk7XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7Qsi4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hPcHRpb25zKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIG9uTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3REaXNhYmxlZCA9IGxvYWRpbmdPcHRpb25zIHx8IGxvZ2luT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAgcHgtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMCBwLTggc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5CYXJiZXIgQm90IENSTTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCAo0LvQvtCz0LjQvSk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS02MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57bG9hZGluZ09wdGlvbnMgPyAn0JfQsNCz0YDRg9C30LrQsC4uLicgOiAn0KPQutCw0LbQuNGC0LUg0LHQsNGA0LHQtdGA0LAnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bG9naW5PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubG9naW59IHZhbHVlPXtvcHRpb24ubG9naW59PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbCB8fCBvcHRpb24ubG9naW59XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQsNC60YLQuNCy0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ysg0LjQtyDRgNCw0LfQtNC10LvQsCDCq9CR0LDRgNCx0LXRgNGLwrsuPC9wPlxyXG4gICAgICAgICAgICB7b3B0aW9uc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTQwMFwiPntvcHRpb25zRXJyb3J9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyh2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3IpICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3J9IC8+fVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH0+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgICByZXR1cm4gc2F2ZWQgPyBidWlsZFNlc3Npb25QYXlsb2FkKEpTT04ucGFyc2Uoc2F2ZWQpKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlTG9jYWxTdG9yYWdlKCdiYXJiZXIuYWN0aXZlVGFiJywgJ2Rhc2hib2FyZCcpO1xyXG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFyYmVycywgc2V0QmFyYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JvdFN0YXR1cywgc2V0Qm90U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RTZXR0aW5ncywgc2V0Qm90U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdE1lc3NhZ2VzLCBzZXRCb3RNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpY2Vuc2VTdGF0dXMsIHNldExpY2Vuc2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwZGF0ZUluZm8sIHNldFVwZGF0ZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnNDYWNoZSwgc2V0T3B0aW9uc0NhY2hlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICBjb25zdCBbYXBwb2ludG1lbnRNb2RhbCwgc2V0QXBwb2ludG1lbnRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnbG9iYWxFcnJvciwgc2V0R2xvYmFsRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N5c3RlbUJ1c3ksIHNldFN5c3RlbUJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGggPCAxMDI0KTtcclxuICBjb25zdCBbcmVhbHRpbWVTbmFwc2hvdCwgc2V0UmVhbHRpbWVTbmFwc2hvdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZmF0YWxFcnJvciwgc2V0RmF0YWxFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBzZXJ2aWNlU2F2ZVRpbWVycyA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JhcmJlci1zZXNzaW9uJyk7XHJcbiAgICBzZXRTZXNzaW9uKG51bGwpO1xyXG4gICAgc2V0RGFzaGJvYXJkKG51bGwpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgc2V0UmVhbHRpbWVTbmFwc2hvdChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFwaVJlcXVlc3QgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChlbmRwb2ludCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHRocm93IG5ldyBFcnJvcign0J3QtdGCINCw0LrRgtC40LLQvdC+0Lkg0YHQtdGB0YHQuNC4Jyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udG9rZW59YCxcclxuICAgICAgICAuLi4ob3B0aW9ucy5ib2R5ICYmICFvcHRpb25zLmhlYWRlcnM/LlsnQ29udGVudC1UeXBlJ10gPyB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSA6IHt9KSxcclxuICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtlbmRwb2ludH1gLCB7IC4uLm9wdGlvbnMsIGhlYWRlcnMgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGhhbmRsZUxvZ291dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0KHQtdGB0YHQuNGPINC40YHRgtC10LrQu9CwJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQt9Cw0L/RgNC+0YHQsCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9LFxyXG4gICAgW3Nlc3Npb24/LnRva2VuLCBoYW5kbGVMb2dvdXRdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBbGwgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvZGFzaGJvYXJkL292ZXJ2aWV3Jyk7XHJcbiAgICAgIHNldERhc2hib2FyZChvdmVydmlldyk7XHJcbiAgICAgIGNvbnN0IHdpdGhGYWxsYmFjayA9IChyZXF1ZXN0LCBmYWxsYmFjaywgbGFiZWwpID0+XHJcbiAgICAgICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsYWJlbH0gZmV0Y2ggc2tpcHBlZDpgLCBlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IFtcclxuICAgICAgICBzZXJ2aWNlc0Z1bGwsXHJcbiAgICAgICAgYmFyYmVyc0Z1bGwsXHJcbiAgICAgICAgYm90U3RhdGUsXHJcbiAgICAgICAgYm90TWVzc2FnZXNQYXlsb2FkLFxyXG4gICAgICAgIGxpY2Vuc2UsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9zZXJ2aWNlcy9mdWxsJyksIHsgc2VydmljZXM6IFtdIH0sICdTZXJ2aWNlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYmFyYmVycy9mdWxsJyksIFtdLCAnQmFyYmVycycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycpLCB7IHN0YXR1czogbnVsbCwgc2V0dGluZ3M6IG51bGwgfSwgJ0JvdCBzdGF0dXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JvdC9tZXNzYWdlcycpLCBbXSwgJ0JvdCBtZXNzYWdlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvbGljZW5zZS9zdGF0dXMnKSwgbnVsbCwgJ0xpY2Vuc2UnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnKSwgbnVsbCwgJ1VwZGF0ZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soXHJcbiAgICAgICAgICBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHMnKSxcclxuICAgICAgICAgIHsgc3RhdHVzZXM6IFtdLCBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdIH0sXHJcbiAgICAgICAgICAnT3B0aW9ucycsXHJcbiAgICAgICAgKSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlcnZpY2VzKHNlcnZpY2VzRnVsbC5zZXJ2aWNlcyB8fCBbXSk7XHJcbiAgICAgIHNldEJhcmJlcnMoYmFyYmVyc0Z1bGwgfHwgb3ZlcnZpZXcuYmFyYmVycyB8fCBbXSk7XHJcbiAgICAgIHNldEJvdFNldHRpbmdzKGJvdFN0YXRlLnNldHRpbmdzIHx8IG92ZXJ2aWV3LmJvdD8uc2V0dGluZ3MgfHwgbnVsbCk7XHJcbiAgICAgIHNldEJvdFN0YXR1cyhib3RTdGF0ZS5zdGF0dXMpO1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcyhib3RNZXNzYWdlc1BheWxvYWQgfHwgW10pO1xyXG4gICAgICBzZXRMaWNlbnNlU3RhdHVzKGxpY2Vuc2UpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHVwZGF0ZSk7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0geyAuLi5vcHRpb25zLCBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSB9O1xyXG4gICAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaVJlcXVlc3QsIHNlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbj8udG9rZW4sIGZldGNoQWxsXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgIHNldFJlYWx0aW1lU25hcHNob3QobnVsbCk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEV2ZW50U291cmNlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHRva2VuUGFyYW0gPSBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbi50b2tlbik7XHJcbiAgICBjb25zdCBzdHJlYW1VcmwgPSBgJHtBUElfQkFTRV9VUkx9L2V2ZW50cy9zdHJlYW0/dG9rZW49JHt0b2tlblBhcmFtfWA7XHJcbiAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShzdHJlYW1VcmwpO1xyXG4gICAgY29uc3QgaGFuZGxlRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBpZiAocGF5bG9hZD8udHlwZSAhPT0gJ2FwcG9pbnRtZW50czp1cGRhdGUnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHBheWxvYWQucGF5bG9hZCB8fCB7fTtcclxuICAgICAgICBzZXRSZWFsdGltZVNuYXBzaG90KHtcclxuICAgICAgICAgIHJvd3M6IEFycmF5LmlzQXJyYXkoZGV0YWlscy5yb3dzKSA/IGRldGFpbHMucm93cyA6IFtdLFxyXG4gICAgICAgICAgc3RhdHM6IGRldGFpbHMuc3RhdHMgfHwge30sXHJcbiAgICAgICAgICB1cGNvbWluZzogQXJyYXkuaXNBcnJheShkZXRhaWxzLnVwY29taW5nKSA/IGRldGFpbHMudXBjb21pbmcgOiBbXSxcclxuICAgICAgICAgIHVwZGF0ZWRBdDogZGV0YWlscy51cGRhdGVkQXQgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYWx0aW1lIGV2ZW50IHBhcnNlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGV2ZW50U291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2FwcG9pbnRtZW50cycsIGhhbmRsZUV2ZW50KTtcclxuICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSAoKSA9PiB7fTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGV2ZW50U291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FwcG9pbnRtZW50cycsIGhhbmRsZUV2ZW50KTtcclxuICAgICAgZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgfSwgW3Nlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWx0aW1lU25hcHNob3QpIHJldHVybjtcclxuICAgIHNldERhc2hib2FyZCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHMgPSB7IC4uLihwcmV2Py5zdGF0cyB8fCB7fSksIC4uLihyZWFsdGltZVNuYXBzaG90LnN0YXRzIHx8IHt9KSB9O1xyXG4gICAgICBjb25zdCBuZXh0QXBwb2ludG1lbnRzID0ge1xyXG4gICAgICAgIC4uLihwcmV2Py5hcHBvaW50bWVudHMgfHwge30pLFxyXG4gICAgICAgIHVwY29taW5nOiByZWFsdGltZVNuYXBzaG90LnVwY29taW5nIHx8IHByZXY/LmFwcG9pbnRtZW50cz8udXBjb21pbmcgfHwgW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghcHJldikge1xyXG4gICAgICAgIHJldHVybiB7IHN0YXRzOiBuZXh0U3RhdHMsIGFwcG9pbnRtZW50czogbmV4dEFwcG9pbnRtZW50cyB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHN0YXRzOiBuZXh0U3RhdHMsIGFwcG9pbnRtZW50czogbmV4dEFwcG9pbnRtZW50cyB9O1xyXG4gICAgfSk7XHJcbiAgfSwgW3JlYWx0aW1lU25hcHNob3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbEVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRldGFpbCA9IGV2ZW50Py5yZWFzb24gfHwgZXZlbnQ/LmVycm9yO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID1cclxuICAgICAgICBkZXRhaWw/Lm1lc3NhZ2UgfHxcclxuICAgICAgICBldmVudD8ubWVzc2FnZSB8fFxyXG4gICAgICAgICh0eXBlb2YgZGV0YWlsID09PSAnc3RyaW5nJyA/IGRldGFpbCA6ICfQndC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsCcpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdHbG9iYWwgVUkgZXJyb3I6JywgZGV0YWlsIHx8IGV2ZW50KTtcclxuICAgICAgc2V0RmF0YWxFcnJvcihtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4gKCkgPT4ge1xyXG4gICAgICBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50LmZvckVhY2goKHRpbWVyKSA9PiBjbGVhclRpbWVvdXQodGltZXIpKTtcclxuICAgICAgc2VydmljZVNhdmVUaW1lcnMuY3VycmVudC5jbGVhcigpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBzZXRBdXRoRXJyb3IoJycpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVzZXJuYW1lID0gcmVzb2x2ZUxvZ2luKHVzZXJuYW1lKTtcclxuICAgIGlmICghbm9ybWFsaXplZFVzZXJuYW1lKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcign0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCDQuNC3INGB0L/QuNGB0LrQsCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vbG9naW5gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogbm9ybWFsaXplZFVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIWRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldEF1dGhFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ9Cd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlc3Npb25QYXlsb2FkID0gYnVpbGRTZXNzaW9uUGF5bG9hZCh7IC4uLmRhdGEsIHVzZXJuYW1lOiBub3JtYWxpemVkVXNlcm5hbWUgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb25QYXlsb2FkKSk7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvblBheWxvYWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKCfQodC10YDQstC10YAg0L3QtdC00L7RgdGC0YPQv9C10L0nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYXJiZXJGaWVsZENoYW5nZSA9IChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRCYXJiZXJzKChwcmV2KSA9PiBwcmV2Lm1hcCgoYmFyYmVyKSA9PiAoYmFyYmVyLmlkID09PSBpZCA/IHsgLi4uYmFyYmVyLCBbZmllbGRdOiB2YWx1ZSB9IDogYmFyYmVyKSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkID0gKHNlcnZpY2UpID0+ICh7XHJcbiAgICAuLi5zZXJ2aWNlLFxyXG4gICAgcHJpY2VzOiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNlcnZpY2UucHJpY2VzIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKV0pXHJcbiAgICApLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkZXJpdmVCYXJiZXJMb2dpbiA9IChiYXJiZXJEYXRhID0ge30pID0+IHJlc29sdmVMb2dpbihiYXJiZXJEYXRhLmxvZ2luIHx8IGJhcmJlckRhdGEubmFtZSB8fCAnJyk7XHJcblxyXG4gIGNvbnN0IGJ1aWxkQmFyYmVyUGF5bG9hZCA9IChiYXJiZXJEYXRhID0ge30sIGZhbGxiYWNrT3JkZXIgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBuYW1lOiBiYXJiZXJEYXRhLm5hbWUgfHwgJycsXHJcbiAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICBkZXNjcmlwdGlvbjogYmFyYmVyRGF0YS5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgcmF0aW5nOiBiYXJiZXJEYXRhLnJhdGluZyB8fCAnJyxcclxuICAgICAgYXZhdGFyVXJsOiBiYXJiZXJEYXRhLmF2YXRhclVybCB8fCAnJyxcclxuICAgICAgY29sb3I6IGJhcmJlckRhdGEuY29sb3IgfHwgJycsXHJcbiAgICAgIGxvZ2luOiBkZXJpdmVCYXJiZXJMb2dpbihiYXJiZXJEYXRhKSxcclxuICAgICAgcGFzc3dvcmQ6IGJhcmJlckRhdGEucGFzc3dvcmQgfHwgJycsXHJcbiAgICAgIHBob25lOiBiYXJiZXJEYXRhLnBob25lIHx8ICcnLFxyXG4gICAgICB0ZWxlZ3JhbUlkOiBiYXJiZXJEYXRhLnRlbGVncmFtSWQgfHwgJycsXHJcbiAgICAgIGlzQWN0aXZlOiBiYXJiZXJEYXRhLmlzQWN0aXZlICE9PSBmYWxzZSxcclxuICAgICAgb3JkZXJJbmRleDogTnVtYmVyKGJhcmJlckRhdGEub3JkZXJJbmRleCA/PyBmYWxsYmFja09yZGVyKSB8fCAwLFxyXG4gICAgfTtcclxuICAgIGlmIChiYXJiZXJEYXRhLmlkKSB7XHJcbiAgICAgIHBheWxvYWQuaWQgPSBiYXJiZXJEYXRhLmlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUJhcmJlciA9IGFzeW5jIChiYXJiZXIpID0+IHtcclxuICAgIGlmICghYmFyYmVyPy5pZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlSZXF1ZXN0KGAvQmFyYmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChiYXJiZXIuaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYnVpbGRCYXJiZXJQYXlsb2FkKGJhcmJlcikpIH0pO1xyXG4gICAgICBjb25zdCB1cGRhdGVkQmFyYmVyID0gcmVzcG9uc2UgfHwgYmFyYmVyO1xyXG4gICAgICBzZXRCYXJiZXJzKChwcmV2KSA9PiBwcmV2Lm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IHVwZGF0ZWRCYXJiZXIuaWQgPyB7IC4uLml0ZW0sIC4uLnVwZGF0ZWRCYXJiZXIgfSA6IGl0ZW0pKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVCYXJiZXIgPSBhc3luYyAoYmFyYmVyKSA9PiB7XHJcbiAgICBpZiAoIWJhcmJlcj8uaWQpIHJldHVybjtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ9Cj0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8/JykpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9CYXJiZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhcmJlci5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEJhcmJlciA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQubmFtZSB8fCAhcGF5bG9hZC5wYXNzd29yZCkge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcign0JfQsNC/0L7Qu9C90LjRgtC1INC40LzRjywg0LvQvtCz0LjQvSDQuCDQv9Cw0YDQvtC70Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbmV3QmFyYmVyUGF5bG9hZCA9IGJ1aWxkQmFyYmVyUGF5bG9hZCh7IC4uLnBheWxvYWQsIGlkOiB1bmRlZmluZWQgfSwgYmFyYmVycy5sZW5ndGgpO1xyXG4gICAgICBjb25zdCB7IGlkLCAuLi5ib2R5IH0gPSBuZXdCYXJiZXJQYXlsb2FkO1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvQmFyYmVycycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQtNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZVNlcnZpY2UgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvc2VydmljZXMvZnVsbC8ke2VuY29kZVVSSUNvbXBvbmVudChzZXJ2aWNlLmlkKX1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplU2VydmljZVBheWxvYWQoc2VydmljZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgICAgY29uc3QgdGltZXJzID0gc2VydmljZVNhdmVUaW1lcnMuY3VycmVudDtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHRpbWVycy5nZXQoc2VydmljZS5pZCk7XHJcbiAgICAgIGlmIChleGlzdGluZ1RpbWVyKSBjbGVhclRpbWVvdXQoZXhpc3RpbmdUaW1lcik7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlU2F2ZVNlcnZpY2Uoc2VydmljZSk7XHJcbiAgICAgICAgdGltZXJzLmRlbGV0ZShzZXJ2aWNlLmlkKTtcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgdGltZXJzLnNldChzZXJ2aWNlLmlkLCB0aW1lcik7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZVNhdmVTZXJ2aWNlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVNlcnZpY2UgPSBhc3luYyAoc2VydmljZSkgPT4ge1xyXG4gICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgn0KPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDPycpKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvc2VydmljZXMvZnVsbC8ke2VuY29kZVVSSUNvbXBvbmVudChzZXJ2aWNlLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFNlcnZpY2UgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9zZXJ2aWNlcy9mdWxsJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplU2VydmljZVBheWxvYWQocGF5bG9hZCkpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQtNC+0LHQsNCy0LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlcnZpY2VGaWVsZENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGlkLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgc2V0U2VydmljZXMoKHByZXYpID0+IHByZXYubWFwKChzZXJ2aWNlKSA9PiAoc2VydmljZS5pZCA9PT0gaWQgPyB7IC4uLnNlcnZpY2UsIFtmaWVsZF06IHZhbHVlIH0gOiBzZXJ2aWNlKSkpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBzZXJ2aWNlcy5maW5kKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSh7IC4uLnRhcmdldCwgW2ZpZWxkXTogdmFsdWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VydmljZXMsIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlcnZpY2VQcmljZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlcnZpY2VJZCwgYmFyYmVySWQsIHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFNlcnZpY2VzKChwcmV2KSA9PlxyXG4gICAgICAgIHByZXYubWFwKChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VydmljZS5pZCAhPT0gc2VydmljZUlkKSByZXR1cm4gc2VydmljZTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaWNlczogeyAuLi4oc2VydmljZS5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBzZXJ2aWNlcy5maW5kKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLmlkID09PSBzZXJ2aWNlSWQpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUoe1xyXG4gICAgICAgICAgLi4udGFyZ2V0LFxyXG4gICAgICAgICAgcHJpY2VzOiB7IC4uLih0YXJnZXQucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzZXJ2aWNlcywgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQm90VG9nZ2xlID0gYXN5bmMgKGVuYWJsZWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpc0JvdEVuYWJsZWQ6IGVuYWJsZWQgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC+0LHQvdC+0LLQuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4INCx0L7RgtCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQm90QWN0aW9uID0gYXN5bmMgKGFjdGlvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LLRi9C/0L7Qu9C90LjRgtGMINC00LXQudGB0YLQstC40LUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlU2V0dGluZ3MgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFib3RTZXR0aW5ncz8uaWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9Cb3RTZXR0aW5ncy8ke2VuY29kZVVSSUNvbXBvbmVudChib3RTZXR0aW5ncy5pZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVNZXNzYWdlID0gYXN5bmMgKGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4ge1xyXG4gICAgaWYgKCFwZXJzaXN0KSB7XHJcbiAgICAgIHNldEJvdE1lc3NhZ2VzKChwcmV2KSA9PiBwcmV2Lm1hcCgobWVzc2FnZSkgPT4gKG1lc3NhZ2UuaWQgPT09IGlkID8geyAuLi5kcmFmdCB9IDogbWVzc2FnZSkpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL2JvdC9tZXNzYWdlcy8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGU6IGRyYWZ0LmNvZGUsIHRpdGxlOiBkcmFmdC50aXRsZSwgdGV4dDogZHJhZnQudGV4dCB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmVCYWNrdXAgPSBhc3luYyAoZmlsZW5hbWUpID0+IHtcclxuICAgIGlmICghZmlsZW5hbWUpIHJldHVybjtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oYNCS0L7RgdGB0YLQsNC90L7QstC40YLRjCDQtNCw0L3QvdGL0LUg0LjQtyAke2ZpbGVuYW1lfT9gKSkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JhY2t1cHMvcmVzdG9yZScsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGVuYW1lIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LHRjdC60LDQvycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJhY2t1cCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ9Ch0L7Qt9C00LDRgtGMINC90L7QstGD0Y4g0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JykpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL2NyZWF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7Qt9C00LDRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuUHJvZmlsZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IG51bGwsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogcGF5bG9hZCwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0L/RgNC+0YTQuNC70YwnIH0sIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZW5zdXJlT3B0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmIChvcHRpb25zQ2FjaGUpIHJldHVybiBvcHRpb25zQ2FjaGU7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzP2ZvcmNlPTEnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgfTtcclxuICAgIHNldE9wdGlvbnNDYWNoZShub3JtYWxpemVkKTtcclxuICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gIH0sIFthcGlSZXF1ZXN0LCBvcHRpb25zQ2FjaGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFwcG9pbnRtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoYXBwb2ludG1lbnQpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IGFwcG9pbnRtZW50LCBvcHRpb25zLCBpc05ldzogZmFsc2UgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Vuc3VyZU9wdGlvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQXBwb2ludG1lbnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgZW5zdXJlT3B0aW9ucygpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgY29uc3QgZGVmYXVsdFN0YXR1cyA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKG9wdGlvbnMuc3RhdHVzZXM/LlswXSB8fCAn0JDQutGC0LjQstC90LDRjycpO1xyXG4gICAgY29uc3QgZGVmYXVsdEJhcmJlciA9IHBpY2tCYXJiZXJGb3JVc2VyKHNlc3Npb24sIG9wdGlvbnMuYmFyYmVycyB8fCBbXSk7XHJcbiAgICBzZXRBcHBvaW50bWVudE1vZGFsKHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIEN1c3RvbWVyTmFtZTogJycsXHJcbiAgICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICAgIEJhcmJlcjogZGVmYXVsdEJhcmJlcixcclxuICAgICAgICBEYXRlOiB0b2RheSxcclxuICAgICAgICBUaW1lOiAnJyxcclxuICAgICAgICBTdGF0dXM6IGRlZmF1bHRTdGF0dXMsXHJcbiAgICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICAgIFVzZXJJRDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIGlzTmV3OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Vuc3VyZU9wdGlvbnMsIHNlc3Npb24/LmRpc3BsYXlOYW1lLCBzZXNzaW9uPy51c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQXBwb2ludG1lbnQgPSBhc3luYyAoeyBpZCwgcGF5bG9hZCwgaXNOZXcgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0FwcG9pbnRtZW50cycsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCgocHJldikgPT4gKHsgLi4ucHJldiwgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGlzTmV3OiBmYWxzZSB9KSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U3lzdGVtQnVzeSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZT9mb3JjZT0xJyk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8oaW5mbyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQvtCy0LXRgNC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjRjycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXBwbHlVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfQntCx0L3QvtCy0LjRgtGMIENSTSDQuCDQsdC+0YLQsCDQtNC+INC/0L7RgdC70LXQtNC90LXQuSDQstC10YDRgdC40Lg/JykpIHJldHVybjtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8ocmVzdWx0LmluZm8gfHwgcmVzdWx0KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/RgNC40LzQtdC90LjRgtGMINC+0LHQvdC+0LLQu9C10L3QuNC1Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTeXN0ZW1CdXN5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICByZXR1cm4gPExvZ2luU2NyZWVuIG9uTG9naW49e2hhbmRsZUxvZ2lufSBlcnJvcj17YXV0aEVycm9yfSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEYXNoYm9hcmRWaWV3XHJcbiAgICAgICAgICAgIGRhdGE9e2Rhc2hib2FyZH1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQXBwb2ludG1lbnQ9e2hhbmRsZUNyZWF0ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBsaXZlTWV0YT17cmVhbHRpbWVTbmFwc2hvdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnYmFyYmVycyc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCYXJiZXJzVmlld1xyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtoYW5kbGVCYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkFkZD17aGFuZGxlQWRkQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxTZXJ2aWNlc1ZpZXdcclxuICAgICAgICAgICAgc2VydmljZXM9e3NlcnZpY2VzfVxyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2U9e2hhbmRsZVNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVNlcnZpY2V9XHJcbiAgICAgICAgICAgIG9uQWRkPXtoYW5kbGVBZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd0YWJsZXMnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFibGVzV29ya3NwYWNlXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3Q9e2FwaVJlcXVlc3R9XHJcbiAgICAgICAgICAgIHNoYXJlZE9wdGlvbnM9e29wdGlvbnNDYWNoZX1cclxuICAgICAgICAgICAgb25PcHRpb25zVXBkYXRlPXtzZXRPcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3BlblByb2ZpbGU9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICBjbGllbnRzPXtkYXNoYm9hcmQ/LmNsaWVudHMgfHwgW119XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyPXtzZXNzaW9uIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVBcHBvaW50bWVudHM9e3JlYWx0aW1lU25hcHNob3Q/LnJvd3MgfHwgbnVsbH1cclxuICAgICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17cmVhbHRpbWVTbmFwc2hvdD8udXBkYXRlZEF0IHx8IG51bGx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ2JvdCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ3N5c3RlbSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cInN5c3RlbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZhdGFsRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGJnLXNsYXRlLTk1MCBwLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0zIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcm9zZS01MDAvNTAgYmctc2xhdGUtOTAwLzgwIHAtNiBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMFwiPtCa0YDQuNGC0LjRh9C10YHQutCw0Y8g0L7RiNC40LHQutCwINC40L3RgtC10YDRhNC10LnRgdCwPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICDQodC+0L7QsdGJ0LXQvdC40LUg0L3QuNC20LUg0LzQvtC20L3QviDQv9C10YDQtdGB0LvQsNGC0Ywg0YDQsNC30YDQsNCx0L7RgtGH0LjQutGDLiDQn9C+0YHQu9C1INC40YHQv9GA0LDQstC70LXQvdC40Y8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIHAtNCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LXJvc2UtMjAwXCI+XHJcbiAgICAgICAgICAgIHtmYXRhbEVycm9yfVxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAge2lzTW9iaWxlICYmIDxNb2JpbGVUYWJzIGFjdGl2ZVRhYj17YWN0aXZlVGFifSBvbkNoYW5nZT17c2V0QWN0aXZlVGFifSBzZXNzaW9uPXtzZXNzaW9ufSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXIgc2Vzc2lvbj17c2Vzc2lvbn0gYWN0aXZlVGFiPXthY3RpdmVUYWJ9IG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9IG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBwLTQgbWQ6cC04XCI+XHJcbiAgICAgICAgICB7Z2xvYmFsRXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e2dsb2JhbEVycm9yfSAvPn1cclxuICAgICAgICAgIHtyZW5kZXJBY3RpdmUoKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZmlsZU1vZGFsIHN0YXRlPXtwcm9maWxlTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KX0gLz5cclxuICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICBvcGVuPXthcHBvaW50bWVudE1vZGFsLm9wZW59XHJcbiAgICAgICAgYXBwb2ludG1lbnQ9e2FwcG9pbnRtZW50TW9kYWwuZGF0YX1cclxuICAgICAgICBvcHRpb25zPXthcHBvaW50bWVudE1vZGFsLm9wdGlvbnMgfHwgb3B0aW9uc0NhY2hlIHx8IHt9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UgfSkpfVxyXG4gICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgIGlzTmV3PXthcHBvaW50bWVudE1vZGFsLmlzTmV3fVxyXG4gICAgICAgIGNsaWVudHM9e2Rhc2hib2FyZD8uY2xpZW50cyB8fCBbXX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5sZXQgcmVhY3RBcHBSb290ID0gbnVsbDtcclxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICB0cnkge1xyXG4gICAgaWYgKCFyb290RWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0L3QsNC50LTQtdC9INC60L7QvdGC0LXQudC90LXRgCAjcm9vdCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZWFjdEFwcFJvb3QpIHtcclxuICAgICAgcmVhY3RBcHBSb290ID1cclxuICAgICAgICB0eXBlb2YgY3JlYXRlUm9vdCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyBjcmVhdGVSb290KHJvb3RFbGVtZW50KVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgcmVuZGVyOiAobm9kZSkgPT4gUmVhY3RET00ucmVuZGVyKG5vZGUsIHJvb3RFbGVtZW50KSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlYWN0QXBwUm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhdGFsIHJlbmRlciBlcnJvcjonLCBlcnJvcik7XHJcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcclxuICAgICAgcm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgZ2FwOjE2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjA2MTc7XHJcbiAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6NDgwcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0OCwxMTMsMTEzLDAuNCk7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuODUpO2JvcmRlci1yYWRpdXM6MTZweDtwYWRkaW5nOjI0cHg7XCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZWNhY2E7bWFyZ2luLWJvdHRvbToxMnB4O1wiPlxyXG4gICAgICAgICAgICAgINCe0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQuNC90YLQtdGA0YTQtdC50YHQsFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Y29sb3I6I2NiZDVmNTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcIj5cclxuICAgICAgICAgICAgICAke2Vycm9yPy5tZXNzYWdlIHx8ICfQodC80L7RgtGA0LjRgtC1INC60L7QvdGB0L7Qu9GMINCx0YDQsNGD0LfQtdGA0LAgKEYxMiknfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjNGI1NTYzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjk5OXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjhweCAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIFwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcIj5cclxuICAgICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnJlbmRlckFwcCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5n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