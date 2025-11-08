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
    label: 'РўРёРјСѓСЂ',
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
var AVATAR_PRESETS = ['/Image/barber_alex.jpg', '/Image/barber_alina.jpg', '/Image/barber_vlad.jpg', '/Image/barber_timur.jpg'];
var avatarOptionsCache = null;
var avatarOptionsPromise = null;
var YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
var buildNewBarberState = function buildNewBarberState() {
  return {
    name: '',
    password: '',
    rating: '5',
    color: '#6d28d9',
    avatarUrl: AVATAR_PRESETS[0],
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
          return _context.a(2, images.length ? images : AVATAR_PRESETS);
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
    if (diffMs < 60000) return "".concat(Math.floor(diffMs / 1000), " \u0441\u0435\u043A \u043D\u0430\u0437\u0430\u0434");
    if (diffMs < 3600000) {
      var minutes = Math.floor(diffMs / 60000);
      var seconds = Math.floor(diffMs % 60000 / 1000);
      return "".concat(minutes, " \u043C\u0438\u043D ").concat(seconds.toString().padStart(2, '0'), " \u0441\u0435\u043A \u043D\u0430\u0437\u0430\u0434");
    }
    if (diffMs < 86400000) {
      var hours = Math.floor(diffMs / 3600000);
      var _minutes = Math.floor(diffMs % 3600000 / 60000);
      return "".concat(hours, " \u0447 ").concat(_minutes.toString().padStart(2, '0'), " \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434");
    }
    return parsed.toLocaleTimeString('ru-RU', {
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
  }, "\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E ", timeLabel));
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
      return avatarOptionsCache || AVATAR_PRESETS;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    avatarOptions = _useState8[0],
    setAvatarOptions = _useState8[1];
  var _useState9 = useState(!avatarOptionsCache),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var availableOptions = useMemo(function () {
    if (!value || avatarOptions.includes(value)) return avatarOptions;
    return [value].concat(_toConsumableArray(avatarOptions));
  }, [avatarOptions, value]);
  var refreshAvatars = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var assets, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          setLoading(true);
          _context2.p = 1;
          avatarOptionsPromise = avatarOptionsPromise || fetchAvatarOptions();
          _context2.n = 2;
          return avatarOptionsPromise;
        case 2:
          assets = _context2.v;
          avatarOptionsCache = assets;
          setAvatarOptions(assets);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          console.error('Avatar load error', _t);
        case 4:
          _context2.p = 4;
          avatarOptionsPromise = null;
          setLoading(false);
          return _context2.f(4);
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3, 4, 5]]);
  })), []);
  useEffect(function () {
    if (avatarOptionsCache) return;
    refreshAvatars();
  }, [refreshAvatars]);
  var previewSrc = value || avatarOptions[0] || AVATAR_PRESETS[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 rounded-2xl border border-slate-700 bg-slate-900/40 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 sm:flex-row sm:items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: "avatar",
    className: "h-16 w-16 rounded-full border border-slate-700 object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs uppercase tracking-wide text-slate-400"
  }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 \xABImage\xBB"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 sm:flex-row"
  }, /*#__PURE__*/React.createElement("select", {
    value: value || '',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    className: "flex-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0411\u0435\u0437 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"), availableOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option,
      value: option
    }, option.replace('/Image/', ''));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: refreshAvatars,
    className: "rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-100 hover:border-indigo-500 hover:text-white"
  }, loading ? 'Обновляю…' : 'Обновить список')), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400"
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u0430\u0439\u043B \u0432 \u043F\u0430\u043F\u043A\u0443 Image, \u0437\u0430\u0442\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u043F\u0438\u0441\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E \u0438\u0437 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u043C\u0435\u043D\u044E."))), avatarOptions.length ? /*#__PURE__*/React.createElement("div", {
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
  })) : /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0432 \u043F\u0430\u043F\u043A\u0443 /Image."));
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
  var _useState1 = useState(buildNewBarberState),
    _useState10 = _slicedToArray(_useState1, 2),
    newBarber = _useState10[0],
    setNewBarber = _useState10[1];
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
    }, "\u0426\u0432\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438", /*#__PURE__*/React.createElement("input", {
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
  }, "\u0426\u0432\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438", /*#__PURE__*/React.createElement("input", {
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
  var _useState11 = useState({
      name: '',
      duration: 60,
      prices: {}
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    newService = _useState12[0],
    setNewService = _useState12[1];
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
    className: "min-w-[900px] text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "text-left text-slate-400"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("th", {
    className: "p-2 w-32"
  }, "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"), barbers.map(function (barber) {
    return /*#__PURE__*/React.createElement("th", {
      key: barber.id,
      className: "p-2 text-center"
    }, barber.name);
  }), /*#__PURE__*/React.createElement("th", {
    className: "p-2 w-16 text-center"
  }))), /*#__PURE__*/React.createElement("tbody", null, services.map(function (service) {
    return /*#__PURE__*/React.createElement("tr", {
      key: service.id,
      className: "border-t border-slate-800"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-2 align-top"
    }, /*#__PURE__*/React.createElement("input", {
      value: service.name || '',
      onChange: function onChange(event) {
        return onFieldChange(service.id, 'name', event.target.value);
      },
      className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white"
    })), /*#__PURE__*/React.createElement("td", {
      className: "p-2 align-top"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: service.duration || 0,
      onChange: function onChange(event) {
        return onFieldChange(service.id, 'duration', Number(event.target.value));
      },
      className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white"
    })), barbers.map(function (barber) {
      var _service$prices$barbe, _service$prices;
      return /*#__PURE__*/React.createElement("td", {
        key: barber.id,
        className: "p-2 align-top"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: (_service$prices$barbe = (_service$prices = service.prices) === null || _service$prices === void 0 ? void 0 : _service$prices[barber.id]) !== null && _service$prices$barbe !== void 0 ? _service$prices$barbe : '',
        onChange: function onChange(event) {
          return onPriceChange(service.id, barber.id, event.target.value);
        },
        className: "w-full rounded border border-slate-600 bg-slate-900 px-2 py-2 text-white",
        placeholder: "\u0426\u0435\u043D\u0430"
      }));
    }), /*#__PURE__*/React.createElement("td", {
      className: "p-2 align-top text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(service);
      },
      className: "inline-flex items-center justify-center rounded-lg border border-rose-500/70 p-2 text-rose-300 hover:bg-rose-500/10",
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
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open = _useState14[0],
    setOpen = _useState14[1];
  var _useState15 = useState(parseMultiValue(value)),
    _useState16 = _slicedToArray(_useState15, 2),
    draft = _useState16[0],
    setDraft = _useState16[1];
  var anchorRef = useRef(null);
  var _useState17 = useState({
      top: 0,
      left: 0
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    position = _useState18[0],
    setPosition = _useState18[1];
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
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    open = _useState20[0],
    setOpen = _useState20[1];
  var _useState21 = useState(function () {
      return parseTimeRangeValue(value);
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    _useState22$ = _useState22[0],
    start = _useState22$.start,
    end = _useState22$.end,
    setDraft = _useState22[1];
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
  var _useState23 = useState(value !== null && value !== void 0 ? value : ''),
    _useState24 = _slicedToArray(_useState23, 2),
    draft = _useState24[0],
    setDraft = _useState24[1];
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
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    open = _useState26[0],
    setOpen = _useState26[1];
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
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    query = _useState28[0],
    setQuery = _useState28[1];
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
  var _useState29 = useState(value || ''),
    _useState30 = _slicedToArray(_useState29, 2),
    query = _useState30[0],
    setQuery = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open = _useState32[0],
    setOpen = _useState32[1];
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
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    open = _useState34[0],
    setOpen = _useState34[1];
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
    _ref30$isCompact = _ref30.isCompact,
    isCompact = _ref30$isCompact === void 0 ? false : _ref30$isCompact,
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
  if (isCompact) {
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4 md:hidden"
    }, groupedRows.map(function (group) {
      return /*#__PURE__*/React.createElement("div", {
        key: group.key,
        className: "space-y-3"
      }, group.label && /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400"
      }, /*#__PURE__*/React.createElement("span", {
        className: "h-px flex-1 bg-slate-700"
      }), group.label, /*#__PURE__*/React.createElement("span", {
        className: "h-px flex-1 bg-slate-700"
      })), group.rows.map(function (record) {
        return /*#__PURE__*/React.createElement("div", {
          key: getRecordId(record),
          className: "space-y-3 rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
        }, visibleColumns.map(function (column) {
          return /*#__PURE__*/React.createElement("div", {
            key: column.key,
            className: "text-sm"
          }, /*#__PURE__*/React.createElement("p", {
            className: "text-xs uppercase tracking-wide text-slate-500"
          }, column.label), /*#__PURE__*/React.createElement("div", {
            className: "mt-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-1"
          }, /*#__PURE__*/React.createElement(EditableCell, {
            record: record,
            column: column,
            options: options,
            onUpdate: onUpdate,
            onOpenProfile: onOpenProfile,
            tableId: tableId
          })));
        }), onDelete && /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return onDelete(record);
          },
          className: "flex w-full items-center justify-center rounded-lg border border-rose-500 p-2 text-rose-300 hover:bg-rose-500/10",
          "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"
        }, /*#__PURE__*/React.createElement(IconTrash, null)));
      }));
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "-mx-4 overflow-x-auto overflow-y-visible pb-4 md:mx-0"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-[860px] table-auto text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "text-left text-xs uppercase tracking-wide text-slate-400"
  }, visibleColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      key: column.key,
      className: classNames('p-2', column.align === 'center' && 'text-center', column.minWidth),
      onClick: function onClick() {
        return column.sortable !== false && onSort(column.key);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('flex items-center gap-2', column.align === 'center' && 'justify-center')
    }, column.label, column.sortable !== false && /*#__PURE__*/React.createElement(SortIndicator, {
      direction: (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.key) === column.key ? sortConfig.direction : null
    })));
  }), onDelete && /*#__PURE__*/React.createElement("th", {
    className: "p-2 text-right"
  }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"))), /*#__PURE__*/React.createElement("tbody", null, groupedRows.map(function (group) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: group.key
    }, group.label && /*#__PURE__*/React.createElement("tr", {
      className: "bg-transparent"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: visibleColumns.length + (onDelete ? 1 : 0),
      className: "p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
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
          className: classNames('p-2 align-top whitespace-pre-wrap break-words', column.align === 'center' && 'text-center')
        }, /*#__PURE__*/React.createElement(EditableCell, {
          record: record,
          column: column,
          options: options,
          onUpdate: onUpdate,
          onOpenProfile: onOpenProfile,
          tableId: tableId
        }));
      }), onDelete && /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return onDelete(record);
        },
        className: "inline-flex items-center rounded-lg border border-rose-500 p-2 text-rose-300 hover:bg-rose-500/10",
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
  var _useState35 = useState(initialState),
    _useState36 = _slicedToArray(_useState35, 2),
    draft = _useState36[0],
    setDraft = _useState36[1];
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
  var _useState37 = useState(buildDraft(appointment)),
    _useState38 = _slicedToArray(_useState37, 2),
    draft = _useState38[0],
    setDraft = _useState38[1];
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
  var _useState39 = useState(function () {
      return DATA_TABLES.reduce(function (acc, table) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, table, []));
      }, {});
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    tables = _useState40[0],
    setTables = _useState40[1];
  var _useState41 = useState(sharedOptions || {
      barbers: [],
      services: [],
      statuses: []
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    dropdownOptions = _useState42[0],
    setDropdownOptions = _useState42[1];
  var _useState43 = useState(''),
    _useState44 = _slicedToArray(_useState43, 2),
    tableError = _useState44[0],
    setTableError = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    isFetching = _useState46[0],
    setIsFetching = _useState46[1];
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    searchTerm = _useState48[0],
    setSearchTerm = _useState48[1];
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
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    createModalOpen = _useState50[0],
    setCreateModalOpen = _useState50[1];
  var _useState51 = useState(window.innerWidth < 768),
    _useState52 = _slicedToArray(_useState51, 2),
    compactTableView = _useState52[0],
    setCompactTableView = _useState52[1];
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
    var handleResize = function handleResize() {
      return setCompactTableView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
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
    isCompact: compactTableView,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIl9SZWFjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJGcmFnbWVudCIsIl9SZWFjdERPTSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiY3JlYXRlUm9vdCIsIkRFRkFVTFRfQVBJX0JBU0VfVVJMIiwiQVBJX0JBU0VfVVJMIiwid2luZG93IiwiX19CQVJCRVJfQVBJX0JBU0VfXyIsIlZJRVdfVEFCUyIsImlkIiwibGFiZWwiLCJUQUJMRV9PUkRFUiIsIkRBVEFfVEFCTEVTIiwiVEFCTEVfQ09ORklHIiwiQXBwb2ludG1lbnRzIiwiY2FuQ3JlYXRlIiwic3VwcG9ydHNCYXJiZXJGaWx0ZXIiLCJzdXBwb3J0c1N0YXR1c0ZpbHRlciIsImRlZmF1bHRTb3J0Iiwia2V5IiwiZGlyZWN0aW9uIiwiU2NoZWR1bGVzIiwiVXNlcnMiLCJDb3N0IiwiVEFCTEVfQ09MVU1OUyIsImVkaXRhYmxlIiwidHlwZSIsImlzUHJvZmlsZUxpbmsiLCJtaW5XaWR0aCIsIm9wdGlvbnNLZXkiLCJhbGlnbiIsIlJBVElOR19NSU4iLCJSQVRJTkdfTUFYIiwiUkFUSU5HX1NURVAiLCJBVkFUQVJfUFJFU0VUUyIsImF2YXRhck9wdGlvbnNDYWNoZSIsImF2YXRhck9wdGlvbnNQcm9taXNlIiwiWUVBUl9JTl9NUyIsImJ1aWxkTmV3QmFyYmVyU3RhdGUiLCJwYXNzd29yZCIsInJhdGluZyIsImNvbG9yIiwiYXZhdGFyVXJsIiwiZGVzY3JpcHRpb24iLCJwaG9uZSIsInRlbGVncmFtSWQiLCJpc0FjdGl2ZSIsImdldFJlY29yZElkIiwicmVjb3JkIiwidW5kZWZpbmVkIiwiSWQiLCJJRCIsInJlY29yZElkIiwiSURfUmVjb3JkIiwiY2xhc3NOYW1lcyIsIl9sZW4iLCJjbGFzc2VzIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidXNlTG9jYWxTdG9yYWdlIiwiaW5pdGlhbFZhbHVlIiwiX3VzZVN0YXRlIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJfdXNlU3RhdGUyIiwic2V0VmFsdWUiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZXIiLCJwcmV2IiwibmV4dFZhbHVlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVzZU5vd1RpY2siLCJpbnRlcnZhbE1zIiwiX3VzZVN0YXRlMyIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGU0Iiwic2V0Tm93IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEF2YXRhck9wdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwicGF5bG9hZCIsImltYWdlcyIsIl9jb250ZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJvayIsIkVycm9yIiwianNvbiIsIm5vcm1hbGl6ZVRleHQiLCJTdHJpbmciLCJjYW5vbmljYWxpemVOYW1lIiwicmVwbGFjZSIsInRyaW0iLCJyZXNvbHZlTG9naW4iLCJidWlsZFNlc3Npb25QYXlsb2FkIiwibm9ybWFsaXplZExvZ2luIiwidXNlcm5hbWUiLCJsb2dpbiIsIl9vYmplY3RTcHJlYWQiLCJiYXJiZXJJZCIsInBpY2tCYXJiZXJGb3JVc2VyIiwidXNlclNlc3Npb24iLCJhdmFpbGFibGVCYXJiZXJzIiwiZmFsbGJhY2siLCJjYW5kaWRhdGVzIiwicHJlZmVycmVkTmFtZSIsIm1hcCIsImNhbmRpZGF0ZSIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplZE9wdGlvbnMiLCJiYXJiZXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AiLCJtYXRjaEluZGV4IiwiZmluZEluZGV4Iiwib3B0aW9uIiwiX3JldCIsInMiLCJlcnIiLCJmb3JtYXREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0IiwiZm9ybWF0VGltZSIsInNhZmVWYWx1ZSIsImluY2x1ZGVzIiwic3BsaXQiLCJmb3JtYXRQaG9uZUlucHV0IiwiZGlnaXRzIiwibm9ybWFsaXplZCIsInN0YXJ0c1dpdGgiLCJmb3JtYXREYXRlVGltZSIsImRhdGUiLCJ0aW1lIiwiZGF0ZVBhcnQiLCJ0aW1lUGFydCIsImZvcm1hdERhdGVIZWFkaW5nIiwib3B0aW9ucyIsIndlZWtkYXkiLCJwYXJzZWQiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJmb3JtYXREYXRlQmFkZ2VMYWJlbCIsImZvcm1hdExpdmVUaW1lc3RhbXAiLCJub3dUcyIsImRpZmZNcyIsIk1hdGgiLCJtYXgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicGFkU3RhcnQiLCJob3VycyIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJTVEFUVVNfVFJBTlNMQVRJT05TIiwiYWN0aXZlIiwiY29uZmlybSIsImNvbmZpcm1lZCIsImNvbXBsZXRlIiwiY29tcGxldGVkIiwiZmluaXNoZWQiLCJjYW5jZWwiLCJjYW5jZWxlZCIsImNhbmNlbGxlZCIsIm5vc2hvdyIsIm1pc3NlZCIsInBlbmRpbmciLCJ3YWl0Iiwid2FpdGluZyIsInByb2Nlc3NpbmciLCJTVEFUVVNfQkFER0VfTUFQIiwi0JDQutGC0LjQstC90LDRjyIsItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCIsItCX0LDQstC10YDRiNC10L3QsCIsItCe0YLQvNC10L3QtdC90LAiLCJnZXRTdGF0dXNCYWRnZUNsYXNzZXMiLCJzdGF0dXMiLCJub3JtYWxpemVTdGF0dXNWYWx1ZSIsIklOQUNUSVZFX1NUQVRVU19UT0tFTlMiLCJBQ1RJVkVfU1RBVFVTX1RPS0VOUyIsIkNPTVBMRVRFRF9TVEFUVVNfVE9LRU5TIiwidHJhbnNsYXRlZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibm9ybWFsaXplU3RhdHVzTGlzdCIsInN0YXR1c2VzIiwic2VlbiIsIlNldCIsImhhcyIsImFkZCIsImlzQ29tcGxldGVkQXBwb2ludG1lbnRTdGF0dXMiLCJzb21lIiwidG9rZW4iLCJzYW5pdGl6ZVRpbWVUb2tlbiIsIm1hdGNoIiwicGFyc2VUaW1lUmFuZ2VWYWx1ZSIsInNhZmUiLCJzdGFydCIsImVuZCIsIl9zYWZlJHNwbGl0JG1hcCIsInBhcnQiLCJfc2FmZSRzcGxpdCRtYXAyIiwicmF3U3RhcnQiLCJfc2FmZSRzcGxpdCRtYXAyJCIsInJhd0VuZCIsInBhcnNlVGltZVJhbmdlUGFydHMiLCJidWlsZFRpbWVSYW5nZVZhbHVlIiwic2FmZVN0YXJ0Iiwic2FmZUVuZCIsIl9yZWYyIiwiX3JlZjMiLCJ0byIsImV4dHJhY3RUaW1lU3RhcnQiLCJnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZSIsImRhdGVWYWx1ZSIsInRpbWVWYWx1ZSIsImZhbGxiYWNrSXNvIiwicGFyc2VkRmFsbGJhY2siLCJpc29DYW5kaWRhdGUiLCJpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzIiwic2hvdWxkRGlzcGxheUFwcG9pbnRtZW50IiwiYXBwb2ludG1lbnQiLCJTdGF0dXMiLCJzdGFydERhdGUiLCJUaW1lIiwic3RhcnREYXRlVGltZSIsInBhcnNlTXVsdGlWYWx1ZSIsIml0ZW0iLCJMb2FkaW5nU3RhdGUiLCJfcmVmNCIsIl9yZWY0JGxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkVycm9yQmFubmVyIiwiX3JlZjUiLCJtZXNzYWdlIiwiU2VjdGlvbkNhcmQiLCJfcmVmNiIsInRpdGxlIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiTGl2ZUJhZGdlIiwiX3JlZjciLCJ0aW1lc3RhbXAiLCJfcmVmNyRsYWJlbCIsInRpY2tpbmdOb3ciLCJ0aW1lTGFiZWwiLCJJY29uVHJhc2giLCJfcmVmOCIsIl9yZWY4JGNsYXNzTmFtZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwiTW9kYWwiLCJfcmVmOSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb290ZXIiLCJfcmVmOSRtYXhXaWR0aENsYXNzIiwibWF4V2lkdGhDbGFzcyIsIm9uQ2xpY2siLCJTdGF0Q2FyZCIsIl9yZWYwIiwiX3JlZjAkYWNjZW50IiwiYWNjZW50IiwiU2lkZWJhciIsIl9yZWYxIiwic2Vzc2lvbiIsImFjdGl2ZVRhYiIsIm9uQ2hhbmdlIiwib25Mb2dvdXQiLCJ0YWIiLCJNb2JpbGVUYWJzIiwiX3JlZjEwIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGFuZGxlU2VsZWN0IiwidGFiSWQiLCJEYXNoYm9hcmRWaWV3IiwiX3JlZjExIiwiX2RhdGEkYXBwb2ludG1lbnRzIiwiX3N0YXRzJHRvdGFsVXNlcnMiLCJfc3RhdHMkYWN0aXZlQXBwb2ludG0iLCJfc3RhdHMkY29uZmlybWVkWWVhciIsIl9zdGF0cyR0b2RheXNBcHBvaW50bSIsImRhdGEiLCJvbk9wZW5BcHBvaW50bWVudCIsIm9uT3BlblByb2ZpbGUiLCJvbkNyZWF0ZUFwcG9pbnRtZW50IiwiX3JlZjExJGxpdmVNZXRhIiwibGl2ZU1ldGEiLCJzdGF0cyIsInVwY29taW5nUmF3IiwiYXBwb2ludG1lbnRzIiwidXBjb21pbmciLCJ1cGNvbWluZ0xpc3QiLCJhcHB0Iiwic29ydCIsImIiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQyIiwibGVmdCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyaWdodCIsImZvcm1hdEdyb3VwTGFiZWwiLCJfdW51c2VkIiwiZ3JvdXBlZFVwY29taW5nIiwiZ3JvdXBzIiwiTWFwIiwiZm9yRWFjaCIsImJ1Y2tldCIsImdldCIsInNldCIsImVudHJpZXMiLCJfcmVmMTIiLCJfcmVmMTMiLCJpdGVtcyIsInNvcnRWYWx1ZSIsIm1pbiIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDMiLCJ1cGNvbWluZ0FjdGlvbnMiLCJ1cGRhdGVkQXQiLCJ0b3RhbFVzZXJzIiwiYWN0aXZlQXBwb2ludG1lbnRzIiwiY29uZmlybWVkWWVhciIsInRvZGF5c0FwcG9pbnRtZW50cyIsImdyb3VwIiwiY2FyZFByb3BzIiwicm9sZSIsInRhYkluZGV4Iiwib25LZXlEb3duIiwiX3BhcnNlVGltZVJhbmdlUGFydHMiLCJzdGF0dXNMYWJlbCIsInNlcnZpY2VzTGlzdCIsIlNlcnZpY2VzIiwicGhvbmVMYWJlbCIsIlBob25lIiwicGhvbmVIcmVmIiwiX2V4dGVuZHMiLCJDdXN0b21lck5hbWUiLCJCYXJiZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXJ2aWNlIiwiaW5kZXgiLCJocmVmIiwiVXNlcklEIiwiQmFyYmVyQXZhdGFyUGlja2VyIiwiX3JlZjE0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJhdmF0YXJPcHRpb25zIiwic2V0QXZhdGFyT3B0aW9ucyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhdmFpbGFibGVPcHRpb25zIiwicmVmcmVzaEF2YXRhcnMiLCJfY2FsbGVlMiIsImFzc2V0cyIsIl90IiwiX2NvbnRleHQyIiwicHJldmlld1NyYyIsInNyYyIsImFsdCIsInByZXNldCIsImlzU2VsZWN0ZWQiLCJSYXRpbmdTbGlkZXIiLCJfcmVmMTYiLCJfcmVmMTYkZGVuc2UiLCJkZW5zZSIsInJhdGluZ1ZhbHVlIiwidG9GaXhlZCIsIndyYXBwZXJDbGFzcyIsImxhYmVsQ2xhc3MiLCJzdGVwIiwiQmFyYmVyc1ZpZXciLCJfcmVmMTciLCJfcmVmMTckYmFyYmVycyIsImJhcmJlcnMiLCJvbkZpZWxkQ2hhbmdlIiwib25TYXZlIiwib25BZGQiLCJvbkRlbGV0ZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIm5ld0JhcmJlciIsInNldE5ld0JhcmJlciIsInVwZGF0ZU5ld0JhcmJlciIsImZpZWxkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlQ3JlYXRlQmFyYmVyIiwiX25ld0JhcmJlciRuYW1lIiwiX25ld0JhcmJlciRwYXNzd29yZCIsInJlbmRlckJhcmJlckNhcmQiLCJjb2xvclZhbHVlIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwiY2hlY2tlZCIsIlNlcnZpY2VzVmlldyIsIl9yZWYxOCIsIl9yZWYxOCRzZXJ2aWNlcyIsInNlcnZpY2VzIiwiX3JlZjE4JGJhcmJlcnMiLCJvblByaWNlQ2hhbmdlIiwiX3VzZVN0YXRlMTEiLCJkdXJhdGlvbiIsInByaWNlcyIsIl91c2VTdGF0ZTEyIiwibmV3U2VydmljZSIsInNldE5ld1NlcnZpY2UiLCJ1cGRhdGVOZXdTZXJ2aWNlIiwidXBkYXRlTmV3U2VydmljZVByaWNlIiwiX3NlcnZpY2UkcHJpY2VzJGJhcmJlIiwiX3NlcnZpY2UkcHJpY2VzIiwiX25ld1NlcnZpY2UkcHJpY2VzJGJhIiwiX25ld1NlcnZpY2UkcHJpY2VzIiwiTXVsdGlTZWxlY3RDZWxsIiwiX3JlZjE5IiwiX3JlZjE5JG9wdGlvbnMiLCJvbkNvbW1pdCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJvcGVuIiwic2V0T3BlbiIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJkcmFmdCIsInNldERyYWZ0IiwiYW5jaG9yUmVmIiwiX3VzZVN0YXRlMTciLCJ0b3AiLCJfdXNlU3RhdGUxOCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVQb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJuZXh0TGVmdCIsImlubmVyV2lkdGgiLCJuZXh0VG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJ0b2dnbGVPcHRpb24iLCJoYW5kbGVTYXZlIiwic3VtbWFyeSIsInN0eWxlIiwiYm9keSIsIlRpbWVSYW5nZVBpY2tlciIsIl9yZWYyMCIsIl9yZWYyMCR0aXRsZSIsIl9yZWYyMCRwbGFjZWhvbGRlciIsIl9yZWYyMCRidXR0b25DbGFzc05hbSIsImJ1dHRvbkNsYXNzTmFtZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiX3VzZVN0YXRlMjIkIiwibm9ybWFsaXplSG91clZhbHVlIiwiaW5wdXRWYWx1ZSIsIl9pbnB1dFZhbHVlJHNwbGl0IiwiX2lucHV0VmFsdWUkc3BsaXQyIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsZWFyIiwiRWRpdGFibGVDZWxsIiwiX3JlZjIxIiwiY29sdW1uIiwib25VcGRhdGUiLCJ0YWJsZUlkIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImNvbW1pdCIsIm9wdGlvbkxpc3QiLCJvbkJsdXIiLCJDb2x1bW5NZW51IiwiX3JlZjIyIiwiY29sdW1ucyIsIl9yZWYyMiRoaWRkZW5Db2x1bW5zIiwiaGlkZGVuQ29sdW1ucyIsIm9uVG9nZ2xlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIk11bHRpU2VsZWN0Q2hlY2tib3hlcyIsIl9yZWYyMyIsIl9yZWYyMyRvcHRpb25zIiwiX3JlZjIzJHZhbHVlIiwiX3JlZjIzJHBsYWNlaG9sZGVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWxlY3RlZCIsIm5vcm1hbGl6ZWRRdWVyeSIsImZpbHRlcmVkIiwidG9nZ2xlIiwiZXhpc3RzIiwiQ2xpZW50TG9va3VwSW5wdXQiLCJfcmVmMjQiLCJfcmVmMjQkbGFiZWwiLCJfcmVmMjQkdmFsdWUiLCJfcmVmMjQkY2xpZW50cyIsImNsaWVudHMiLCJvblNlbGVjdENsaWVudCIsIl9yZWYyNCRwbGFjZWhvbGRlciIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiY29udGFpbmVyUmVmIiwibWF0Y2hlcyIsInNob3J0bGlzdCIsImNsaWVudCIsIm9uRm9jdXMiLCJvbk1vdXNlRG93biIsInByZXZlbnREZWZhdWx0IiwiU3RhdHVzTWVudSIsIl9yZWYyNSIsIl9yZWYyNSRzdGF0dXNlcyIsIl9yZWYyNSRoaWRkZW5TdGF0dXNlcyIsImhpZGRlblN0YXR1c2VzIiwib25SZXNldCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJUYWJsZVRvb2xiYXIiLCJfcmVmMjYiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlbGVjdGVkQmFyYmVyIiwic2V0U2VsZWN0ZWRCYXJiZXIiLCJ0b2dnbGVTdGF0dXMiLCJyZXNldFN0YXR1c2VzIiwidG9nZ2xlQ29sdW1uIiwib25PcGVuQ3JlYXRlIiwib25SZWZyZXNoIiwic2hvd1Bhc3RBcHBvaW50bWVudHMiLCJzZXRTaG93UGFzdEFwcG9pbnRtZW50cyIsIl9yZWYyNiRzdXBwb3J0c0dyb3VwaSIsInN1cHBvcnRzR3JvdXBpbmciLCJfcmVmMjYkZ3JvdXBCeURhdGUiLCJncm91cEJ5RGF0ZSIsInNldEdyb3VwQnlEYXRlIiwiX3JlZjI2JGxhc3RVcGRhdGVkQXQiLCJsYXN0VXBkYXRlZEF0IiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImJ1aWxkQXBwb2ludG1lbnRHcm91cHMiLCJyZWNvcmRzIiwiYnVja2V0cyIsIl9yZWYyNyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDYiLCJfcmVmMjgiLCJzb3J0ZWRJdGVtcyIsIl9nZXRBcHBvaW50bWVudFN0YXJ0RDQiLCJfZ2V0QXBwb2ludG1lbnRTdGFydEQ1IiwicmVmZXJlbmNlIiwicmFuZG9tIiwiU29ydEluZGljYXRvciIsIl9yZWYyOSIsIkRhdGFUYWJsZSIsIl9yZWYzMCIsInNvcnRDb25maWciLCJvblNvcnQiLCJfcmVmMzAkaXNDb21wYWN0IiwiaXNDb21wYWN0IiwiX3JlZjMwJGdyb3VwQnlEYXRlIiwidmlzaWJsZUNvbHVtbnMiLCJncm91cGVkUm93cyIsInNvcnRhYmxlIiwiY29sU3BhbiIsIkNyZWF0ZVJlY29yZE1vZGFsIiwiX3JlZjMxIiwidGFibGVOYW1lIiwiX3JlZjMxJGNsaWVudHMiLCJfcmVmMzEkaGlkZGVuRmllbGRzIiwiaGlkZGVuRmllbGRzIiwiZWRpdGFibGVDb2x1bW5zIiwiaW5pdGlhbFN0YXRlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImlzQXBwb2ludG1lbnRzQ3JlYXRlIiwiaGFuZGxlU3VibWl0IiwiX3JlZjMyIiwiX3JlZjMzIiwiaGFuZGxlQ2xpZW50QXV0b0ZpbGwiLCJwcmVmZXJyZWRCYXJiZXIiLCJUZWxlZ3JhbUlEIiwic2VsZWN0ZWRWYWx1ZXMiLCJQcm9maWxlTW9kYWwiLCJfcmVmMzQiLCJfc3RhdGUkZGF0YSIsIl9zdGF0ZSRkYXRhMiIsIl9zdGF0ZSRkYXRhMyIsIl9zdGF0ZSRkYXRhNCIsInN0YXRlIiwidmlzaXRIaXN0b3J5IiwiY3V0b2ZmIiwib3JkZXJOdW1iZXIiLCJkYXRlTGFiZWwiLCJ1c2VyIiwiTmFtZSIsImlzTGF0ZXN0IiwiQmFja3Vwc1BhbmVsIiwiX3JlZjM1IiwiX3JlZjM1JGJhY2t1cHMiLCJiYWNrdXBzIiwib25SZXN0b3JlIiwib25DcmVhdGUiLCJiYWNrdXAiLCJBcHBvaW50bWVudE1vZGFsIiwiX3JlZjM2IiwiX3JlZjM2JG9wdGlvbnMiLCJfcmVmMzYkaXNOZXciLCJpc05ldyIsIl9yZWYzNiRjbGllbnRzIiwiYnVpbGREcmFmdCIsInVzZXJJZCIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJzZXJ2aWNlc1NlbGVjdGlvbiIsImhhbmRsZUNoYW5nZSIsIlRhYmxlc1dvcmtzcGFjZSIsIl9yZWYzNyIsIl9UQUJMRV9DT05GSUckYWN0aXZlVCIsImFwaVJlcXVlc3QiLCJzaGFyZWRPcHRpb25zIiwib25PcHRpb25zVXBkYXRlIiwiX3JlZjM3JGNsaWVudHMiLCJfcmVmMzckY3VycmVudFVzZXIiLCJjdXJyZW50VXNlciIsIl9yZWYzNyRsaXZlQXBwb2ludG1lbiIsImxpdmVBcHBvaW50bWVudHMiLCJfcmVmMzckbGl2ZVVwZGF0ZWRBdCIsImxpdmVVcGRhdGVkQXQiLCJfdXNlTG9jYWxTdG9yYWdlIiwiX3VzZUxvY2FsU3RvcmFnZTIiLCJhY3RpdmVUYWJsZSIsInNldEFjdGl2ZVRhYmxlIiwiX3VzZVN0YXRlMzkiLCJyZWR1Y2UiLCJhY2MiLCJ0YWJsZSIsIl91c2VTdGF0ZTQwIiwidGFibGVzIiwic2V0VGFibGVzIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImRyb3Bkb3duT3B0aW9ucyIsInNldERyb3Bkb3duT3B0aW9ucyIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJ0YWJsZUVycm9yIiwic2V0VGFibGVFcnJvciIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJfdXNlTG9jYWxTdG9yYWdlMyIsIl91c2VMb2NhbFN0b3JhZ2U0IiwiX3VzZUxvY2FsU3RvcmFnZTUiLCJfdXNlTG9jYWxTdG9yYWdlNiIsInNldEhpZGRlblN0YXR1c2VzIiwiX3VzZUxvY2FsU3RvcmFnZTciLCJfdXNlTG9jYWxTdG9yYWdlOCIsImhpZGRlbkNvbHVtbnNNYXAiLCJzZXRIaWRkZW5Db2x1bW5zTWFwIiwiX3VzZUxvY2FsU3RvcmFnZTkiLCJfVEFCTEVfQ09ORklHJHRhYmxlIiwiX3VzZUxvY2FsU3RvcmFnZTAiLCJzb3J0Q29uZmlncyIsInNldFNvcnRDb25maWdzIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsImNyZWF0ZU1vZGFsT3BlbiIsInNldENyZWF0ZU1vZGFsT3BlbiIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJjb21wYWN0VGFibGVWaWV3Iiwic2V0Q29tcGFjdFRhYmxlVmlldyIsIl91c2VMb2NhbFN0b3JhZ2UxIiwiX3VzZUxvY2FsU3RvcmFnZTEwIiwiX3VzZUxvY2FsU3RvcmFnZTExIiwiX3VzZUxvY2FsU3RvcmFnZTEyIiwiZ3JvdXBBcHBvaW50bWVudHNCeURhdGUiLCJzZXRHcm91cEFwcG9pbnRtZW50c0J5RGF0ZSIsImFwcG9pbnRtZW50VGVtcGxhdGUiLCJ0b0lTT1N0cmluZyIsImhhbmRsZVJlc2l6ZSIsImV2ZXJ5IiwiZmV0Y2hUYWJsZXMiLCJfY2FsbGVlMyIsInJlc3BvbnNlcyIsIm5leHRUYWJsZXMiLCJyYXdPcHRpb25zIiwiX3QyIiwiX2NvbnRleHQzIiwiYWxsIiwicm93IiwiY3VycmVudENvbHVtbnMiLCJwcm9jZXNzZWRSb3dzIiwiX1RBQkxFX0NPTkZJRyRhY3RpdmVUMiIsInNvdXJjZSIsImhhbmRsZVNvcnQiLCJjb2x1bW5LZXkiLCJoaWRkZW4iLCJzaXplIiwiaGFuZGxlVXBkYXRlIiwiX3JlZjM5IiwiX2NhbGxlZTQiLCJub3JtYWxpemVkRGF0YSIsIm9yaWdpbmFsIiwiX3QzIiwiX2NvbnRleHQ0IiwibGlzdCIsImZpbmQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJfeCIsIl94MiIsImhhbmRsZURlbGV0ZSIsIl9yZWY0MCIsIl9jYWxsZWU1IiwiX3Q0IiwiX2NvbnRleHQ1IiwiX3gzIiwiaGFuZGxlQ3JlYXRlUmVjb3JkIiwiX3JlZjQxIiwiX2NhbGxlZTYiLCJub3JtYWxpemVkUGF5bG9hZCIsIl90NSIsIl9jb250ZXh0NiIsImhlYWRlcnMiLCJfeDQiLCJ0YWJsZVNldHRpbmdzIiwiX1RBQkxFX0NPTkZJRyR0YWJsZTIiLCJfcmVmNDIiLCJCb3RDb250cm9sVmlldyIsIl9yZWY0MyIsInNldHRpbmdzIiwiX3JlZjQzJGJhY2t1cHMiLCJfcmVmNDMkbWVzc2FnZXMiLCJtZXNzYWdlcyIsIm9uVG9nZ2xlRW5hYmxlZCIsIm9uU3RhcnQiLCJvblN0b3AiLCJvblJlc3RhcnQiLCJvblNhdmVTZXR0aW5ncyIsIm9uU2F2ZU1lc3NhZ2UiLCJvblJlc3RvcmVCYWNrdXAiLCJvbkNyZWF0ZUJhY2t1cCIsImxpY2Vuc2VTdGF0dXMiLCJ1cGRhdGVJbmZvIiwib25SZWZyZXNoVXBkYXRlIiwib25BcHBseVVwZGF0ZSIsInN5c3RlbUJ1c3kiLCJfcmVmNDMkdmlld01vZGUiLCJ2aWV3TW9kZSIsIl91c2VTdGF0ZTUzIiwiYm90RGVzY3JpcHRpb24iLCJfdXNlU3RhdGU1NCIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNTUiLCJhYm91dFRleHQiLCJfdXNlU3RhdGU1NiIsImFib3V0Iiwic2V0QWJvdXQiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMiLCJfbGljZW5zZVN0YXR1cyRsaWNlbnMyIiwiX2xpY2Vuc2VTdGF0dXMkbGljZW5zMyIsInZhbGlkIiwibGljZW5zZSIsIm93bmVyIiwiZXhwaXJlc0F0IiwibnVtYmVyIiwidmVyc2lvbiIsImNoZWNrZWRBdCIsImRldGFpbHMiLCJkaXNhYmxlZCIsImF2YWlsYWJsZSIsInJ1bm5pbmciLCJpc0JvdEVuYWJsZWQiLCJMb2dpblNjcmVlbiIsIl9yZWY0NCIsIm9uTG9naW4iLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4Iiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwidmFsaWRhdGlvbkVycm9yIiwic2V0VmFsaWRhdGlvbkVycm9yIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsImxvZ2luT3B0aW9ucyIsInNldExvZ2luT3B0aW9ucyIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJvcHRpb25zRXJyb3IiLCJzZXRPcHRpb25zRXJyb3IiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwibG9hZGluZ09wdGlvbnMiLCJzZXRMb2FkaW5nT3B0aW9ucyIsImlzTW91bnRlZCIsImZldGNoT3B0aW9ucyIsIl9yZWY0NSIsIl9jYWxsZWU3IiwiX3Q2IiwiX2NvbnRleHQ3Iiwic2VsZWN0RGlzYWJsZWQiLCJvblN1Ym1pdCIsIkFwcCIsIl91c2VTdGF0ZTY5Iiwic2F2ZWQiLCJfdXNlU3RhdGU3MCIsInNldFNlc3Npb24iLCJfdXNlTG9jYWxTdG9yYWdlMTMiLCJfdXNlTG9jYWxTdG9yYWdlMTQiLCJzZXRBY3RpdmVUYWIiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwiZGFzaGJvYXJkIiwic2V0RGFzaGJvYXJkIiwiX3VzZVN0YXRlNzMiLCJfdXNlU3RhdGU3NCIsInNldFNlcnZpY2VzIiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsInNldEJhcmJlcnMiLCJfdXNlU3RhdGU3NyIsIl91c2VTdGF0ZTc4IiwiYm90U3RhdHVzIiwic2V0Qm90U3RhdHVzIiwiX3VzZVN0YXRlNzkiLCJfdXNlU3RhdGU4MCIsImJvdFNldHRpbmdzIiwic2V0Qm90U2V0dGluZ3MiLCJfdXNlU3RhdGU4MSIsIl91c2VTdGF0ZTgyIiwiYm90TWVzc2FnZXMiLCJzZXRCb3RNZXNzYWdlcyIsIl91c2VTdGF0ZTgzIiwiX3VzZVN0YXRlODQiLCJzZXRMaWNlbnNlU3RhdHVzIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsInNldFVwZGF0ZUluZm8iLCJfdXNlU3RhdGU4NyIsIl91c2VTdGF0ZTg4Iiwib3B0aW9uc0NhY2hlIiwic2V0T3B0aW9uc0NhY2hlIiwiX3VzZVN0YXRlODkiLCJfdXNlU3RhdGU5MCIsInByb2ZpbGVNb2RhbCIsInNldFByb2ZpbGVNb2RhbCIsIl91c2VTdGF0ZTkxIiwiX3VzZVN0YXRlOTIiLCJhcHBvaW50bWVudE1vZGFsIiwic2V0QXBwb2ludG1lbnRNb2RhbCIsIl91c2VTdGF0ZTkzIiwiX3VzZVN0YXRlOTQiLCJfdXNlU3RhdGU5NSIsIl91c2VTdGF0ZTk2IiwiZ2xvYmFsRXJyb3IiLCJzZXRHbG9iYWxFcnJvciIsIl91c2VTdGF0ZTk3IiwiX3VzZVN0YXRlOTgiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJfdXNlU3RhdGU5OSIsIl91c2VTdGF0ZTEwMCIsInNldFN5c3RlbUJ1c3kiLCJfdXNlU3RhdGUxMDEiLCJfdXNlU3RhdGUxMDIiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiX3VzZVN0YXRlMTAzIiwiX3VzZVN0YXRlMTA0IiwicmVhbHRpbWVTbmFwc2hvdCIsInNldFJlYWx0aW1lU25hcHNob3QiLCJfdXNlU3RhdGUxMDUiLCJfdXNlU3RhdGUxMDYiLCJmYXRhbEVycm9yIiwic2V0RmF0YWxFcnJvciIsInNlcnZpY2VTYXZlVGltZXJzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9yZWY0NiIsIl9jYWxsZWU4IiwiZW5kcG9pbnQiLCJfb3B0aW9ucyRoZWFkZXJzIiwiX2FyZ3M4IiwiX2NvbnRleHQ4IiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRleHQiLCJfeDUiLCJmZXRjaEFsbCIsIl9jYWxsZWU5IiwiX292ZXJ2aWV3JGJvdCIsIm92ZXJ2aWV3Iiwid2l0aEZhbGxiYWNrIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInNlcnZpY2VzRnVsbCIsImJhcmJlcnNGdWxsIiwiYm90U3RhdGUiLCJib3RNZXNzYWdlc1BheWxvYWQiLCJ1cGRhdGUiLCJfdDciLCJfY29udGV4dDkiLCJyZXF1ZXN0IiwiYm90IiwiRXZlbnRTb3VyY2UiLCJ0b2tlblBhcmFtIiwic3RyZWFtVXJsIiwiZXZlbnRTb3VyY2UiLCJoYW5kbGVFdmVudCIsIm9uZXJyb3IiLCJjbG9zZSIsIl9wcmV2JGFwcG9pbnRtZW50cyIsIm5leHRTdGF0cyIsIm5leHRBcHBvaW50bWVudHMiLCJoYW5kbGVHbG9iYWxFcnJvciIsImRldGFpbCIsInJlYXNvbiIsImNsZWFyVGltZW91dCIsImNsZWFyIiwiaGFuZGxlTG9naW4iLCJfcmVmNDgiLCJfY2FsbGVlMCIsIm5vcm1hbGl6ZWRVc2VybmFtZSIsInNlc3Npb25QYXlsb2FkIiwiX3Q4IiwiX2NvbnRleHQwIiwic3VjY2VzcyIsIl94NiIsIl94NyIsImhhbmRsZUJhcmJlckZpZWxkQ2hhbmdlIiwibm9ybWFsaXplU2VydmljZVBheWxvYWQiLCJmcm9tRW50cmllcyIsIl9yZWY0OSIsIl9yZWY1MCIsImRlcml2ZUJhcmJlckxvZ2luIiwiYmFyYmVyRGF0YSIsImJ1aWxkQmFyYmVyUGF5bG9hZCIsIl9iYXJiZXJEYXRhJG9yZGVySW5kZSIsImZhbGxiYWNrT3JkZXIiLCJuaWNrbmFtZSIsIm9yZGVySW5kZXgiLCJoYW5kbGVTYXZlQmFyYmVyIiwiX3JlZjUxIiwiX2NhbGxlZTEiLCJ1cGRhdGVkQmFyYmVyIiwiX3Q5IiwiX2NvbnRleHQxIiwiX3g4IiwiaGFuZGxlRGVsZXRlQmFyYmVyIiwiX3JlZjUyIiwiX2NhbGxlZTEwIiwiX3QwIiwiX2NvbnRleHQxMCIsIl94OSIsImhhbmRsZUFkZEJhcmJlciIsIl9yZWY1MyIsIl9jYWxsZWUxMSIsIm5ld0JhcmJlclBheWxvYWQiLCJfdDEiLCJfY29udGV4dDExIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX3gwIiwiaGFuZGxlU2F2ZVNlcnZpY2UiLCJfcmVmNTQiLCJfY2FsbGVlMTIiLCJfdDEwIiwiX2NvbnRleHQxMiIsIl94MSIsInNjaGVkdWxlU2VydmljZUF1dG9zYXZlIiwidGltZXJzIiwiZXhpc3RpbmdUaW1lciIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGVTZXJ2aWNlIiwiX3JlZjU1IiwiX2NhbGxlZTEzIiwiX3QxMSIsIl9jb250ZXh0MTMiLCJfeDEwIiwiaGFuZGxlQWRkU2VydmljZSIsIl9yZWY1NiIsIl9jYWxsZWUxNCIsIl90MTIiLCJfY29udGV4dDE0IiwiX3gxMSIsImhhbmRsZVNlcnZpY2VGaWVsZENoYW5nZSIsImhhbmRsZVNlcnZpY2VQcmljZUNoYW5nZSIsInNlcnZpY2VJZCIsImhhbmRsZUJvdFRvZ2dsZSIsIl9yZWY1NyIsIl9jYWxsZWUxNSIsImVuYWJsZWQiLCJfdDEzIiwiX2NvbnRleHQxNSIsIl94MTIiLCJoYW5kbGVCb3RBY3Rpb24iLCJfcmVmNTgiLCJfY2FsbGVlMTYiLCJhY3Rpb24iLCJfdDE0IiwiX2NvbnRleHQxNiIsIl94MTMiLCJoYW5kbGVTYXZlU2V0dGluZ3MiLCJfcmVmNTkiLCJfY2FsbGVlMTciLCJfdDE1IiwiX2NvbnRleHQxNyIsIl94MTQiLCJoYW5kbGVTYXZlTWVzc2FnZSIsIl9yZWY2MCIsIl9jYWxsZWUxOCIsInBlcnNpc3QiLCJfdDE2IiwiX2NvbnRleHQxOCIsImNvZGUiLCJfeDE1IiwiX3gxNiIsIl94MTciLCJoYW5kbGVSZXN0b3JlQmFja3VwIiwiX3JlZjYxIiwiX2NhbGxlZTE5IiwiZmlsZW5hbWUiLCJfdDE3IiwiX2NvbnRleHQxOSIsIl94MTgiLCJoYW5kbGVDcmVhdGVCYWNrdXAiLCJfcmVmNjIiLCJfY2FsbGVlMjAiLCJfdDE4IiwiX2NvbnRleHQyMCIsIm9wZW5Qcm9maWxlIiwiX3JlZjYzIiwiX2NhbGxlZTIxIiwiX3QxOSIsIl9jb250ZXh0MjEiLCJfeDE5IiwiZW5zdXJlT3B0aW9ucyIsIl9jYWxsZWUyMiIsIl9jb250ZXh0MjIiLCJoYW5kbGVPcGVuQXBwb2ludG1lbnQiLCJfcmVmNjUiLCJfY2FsbGVlMjMiLCJfY29udGV4dDIzIiwiX3gyMCIsImhhbmRsZUNyZWF0ZUFwcG9pbnRtZW50IiwiX2NhbGxlZTI0IiwiX29wdGlvbnMkc3RhdHVzZXMiLCJ0b2RheSIsImRlZmF1bHRTdGF0dXMiLCJkZWZhdWx0QmFyYmVyIiwiX2NvbnRleHQyNCIsImhhbmRsZVNhdmVBcHBvaW50bWVudCIsIl9yZWY2OCIsIl9jYWxsZWUyNSIsIl9yZWY2NyIsIl90MjAiLCJfY29udGV4dDI1IiwiX3gyMSIsImhhbmRsZVJlZnJlc2hVcGRhdGUiLCJfcmVmNjkiLCJfY2FsbGVlMjYiLCJpbmZvIiwiX3QyMSIsIl9jb250ZXh0MjYiLCJoYW5kbGVBcHBseVVwZGF0ZSIsIl9yZWY3MCIsIl9jYWxsZWUyNyIsInJlc3VsdCIsIl90MjIiLCJfY29udGV4dDI3IiwicmVuZGVyQWN0aXZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZWFjdEFwcFJvb3QiLCJyZW5kZXJBcHAiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwibm9kZSIsImlubmVySFRNTCJdLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCwgRnJhZ21lbnQgfSA9IFJlYWN0O1xyXG5jb25zdCB7IGNyZWF0ZVBvcnRhbCwgY3JlYXRlUm9vdCB9ID0gUmVhY3RET007XHJcblxyXG5jb25zdCBERUZBVUxUX0FQSV9CQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjU1OjMwMDAvYXBpJztcclxuY29uc3QgQVBJX0JBU0VfVVJMID0gd2luZG93Ll9fQkFSQkVSX0FQSV9CQVNFX18gfHwgREVGQVVMVF9BUElfQkFTRV9VUkw7XHJcbndpbmRvdy5fX0JBUkJFUl9BUElfQkFTRV9fID0gQVBJX0JBU0VfVVJMO1xyXG5cclxuY29uc3QgVklFV19UQUJTID0gW1xyXG4gIHsgaWQ6ICdkYXNoYm9hcmQnLCBsYWJlbDogJ9Ce0LHQt9C+0YAnIH0sXHJcbiAgeyBpZDogJ2JhcmJlcnMnLCBsYWJlbDogJ9CR0LDRgNCx0LXRgNGLJyB9LFxyXG4gIHsgaWQ6ICdzZXJ2aWNlcycsIGxhYmVsOiAn0KPRgdC70YPQs9C4JyB9LFxyXG4gIHsgaWQ6ICd0YWJsZXMnLCBsYWJlbDogJ9Ci0LDQsdC70LjRhtGLJyB9LFxyXG4gIHsgaWQ6ICdib3QnLCBsYWJlbDogJ9CR0L7RgicgfSxcclxuICB7IGlkOiAnc3lzdGVtJywgbGFiZWw6ICfQodC40YHRgtC10LzQsCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRBQkxFX09SREVSID0gWydBcHBvaW50bWVudHMnLCAnU2NoZWR1bGVzJywgJ1VzZXJzJywgJ0Nvc3QnXTtcclxuY29uc3QgREFUQV9UQUJMRVMgPSBbJ0FwcG9pbnRtZW50cycsICdTY2hlZHVsZXMnLCAnVXNlcnMnLCAnQ29zdCddO1xyXG5cclxuY29uc3QgVEFCTEVfQ09ORklHID0ge1xyXG4gIEFwcG9pbnRtZW50czogeyBsYWJlbDogJ9CX0LDQv9C40YHQuCcsIGNhbkNyZWF0ZTogdHJ1ZSwgc3VwcG9ydHNCYXJiZXJGaWx0ZXI6IHRydWUsIHN1cHBvcnRzU3RhdHVzRmlsdGVyOiB0cnVlLCBkZWZhdWx0U29ydDogeyBrZXk6ICdEYXRlJywgZGlyZWN0aW9uOiAnYXNjJyB9IH0sXHJcbiAgU2NoZWR1bGVzOiB7IGxhYmVsOiAn0KDQsNGB0L/QuNGB0LDQvdC40LUnLCBjYW5DcmVhdGU6IGZhbHNlLCBzdXBwb3J0c0JhcmJlckZpbHRlcjogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnRGF0ZScsIGRpcmVjdGlvbjogJ2FzYycgfSB9LFxyXG4gIFVzZXJzOiB7IGxhYmVsOiAn0JrQu9C40LXQvdGC0YsnLCBjYW5DcmVhdGU6IHRydWUsIGRlZmF1bHRTb3J0OiB7IGtleTogJ05hbWUnLCBkaXJlY3Rpb246ICdhc2MnIH0gfSxcclxuICBDb3N0OiB7IGxhYmVsOiAn0JrQsNGC0LDQu9C+0LMg0YPRgdC70YPQsycsIGNhbkNyZWF0ZTogdHJ1ZSwgZGVmYXVsdFNvcnQ6IHsga2V5OiAnVXNsdWdpJywgZGlyZWN0aW9uOiAnYXNjJyB9IH0sXHJcbn07XHJcblxyXG5jb25zdCBUQUJMRV9DT0xVTU5TID0ge1xyXG4gIEFwcG9pbnRtZW50czogW1xyXG4gICAgeyBrZXk6ICdDdXN0b21lck5hbWUnLCBsYWJlbDogJ9Ca0LvQuNC10L3RgicsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGlzUHJvZmlsZUxpbms6IHRydWUsIG1pbldpZHRoOiAndy00OCcgfSxcclxuICAgIHsga2V5OiAnUGhvbmUnLCBsYWJlbDogJ9Ci0LXQu9C10YTQvtC9JywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTM2JyB9LFxyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ2JhcmJlcnMnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0RhdGUnLCBsYWJlbDogJ9CU0LDRgtCwJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdkYXRlJywgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdUaW1lJywgbGFiZWw6ICfQktGA0LXQvNGPJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgbWluV2lkdGg6ICd3LTI4JyB9LFxyXG4gICAgeyBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ9Ch0YLQsNGC0YPRgScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uc0tleTogJ3N0YXR1c2VzJywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctMjgnIH0sXHJcbiAgICB7IGtleTogJ1NlcnZpY2VzJywgbGFiZWw6ICfQo9GB0LvRg9Cz0LgnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ211bHRpLXNlbGVjdCcsIG9wdGlvbnNLZXk6ICdzZXJ2aWNlcycsIG1pbldpZHRoOiAndy01NicgfSxcclxuICAgIHsga2V5OiAnVXNlcklEJywgbGFiZWw6ICdJRCDQutC70LjQtdC90YLQsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0yNCcgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaENsaWVudFNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LrQu9C40LXQvdGC0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICAgIHsga2V5OiAnUmVtaW5kZXIyaEJhcmJlclNlbnQnLCBsYWJlbDogJ9Cd0LDQv9C+0LzQuNC90LDQvdC40LUg0LHQsNGA0LHQtdGA0YMnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ2Jvb2xlYW4nLCBhbGlnbjogJ2NlbnRlcicgfSxcclxuICBdLFxyXG4gIFNjaGVkdWxlczogW1xyXG4gICAgeyBrZXk6ICdCYXJiZXInLCBsYWJlbDogJ9CR0LDRgNCx0LXRgCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTQwJyB9LFxyXG4gICAgeyBrZXk6ICdEYXlPZldlZWsnLCBsYWJlbDogJ9CU0LXQvdGMINC90LXQtNC10LvQuCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlJywgbGFiZWw6ICfQlNCw0YLQsCcsIGVkaXRhYmxlOiBmYWxzZSwgbWluV2lkdGg6ICd3LTMyJyB9LFxyXG4gICAgeyBrZXk6ICdXZWVrJywgbGFiZWw6ICfQodC70L7RgtGLJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0JywgYWxpZ246ICdjZW50ZXInLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgXSxcclxuICBVc2VyczogW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICfQmNC80Y8nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBpc1Byb2ZpbGVMaW5rOiB0cnVlLCBtaW5XaWR0aDogJ3ctNDAnIH0sXHJcbiAgICB7IGtleTogJ1Bob25lJywgbGFiZWw6ICfQotC10LvQtdGE0L7QvScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIG1pbldpZHRoOiAndy0zNicgfSxcclxuICAgIHsga2V5OiAnVGVsZWdyYW1JRCcsIGxhYmVsOiAnVGVsZWdyYW0nLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgICB7IGtleTogJ0JhcmJlcicsIGxhYmVsOiAn0JvRjtCx0LjQvNGL0Lkg0LzQsNGB0YLQtdGAJywgZWRpdGFibGU6IHRydWUsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zS2V5OiAnYmFyYmVycycsIG1pbldpZHRoOiAndy00MCcgfSxcclxuICBdLFxyXG4gIENvc3Q6IFtcclxuICAgIHsga2V5OiAnVXNsdWdpJywgbGFiZWw6ICfQo9GB0LvRg9Cz0LAnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctNTYnIH0sXHJcbiAgICB7IGtleTogJ1RpbXVyJywgbGFiZWw6ICfQoNGe0KDRkdCg0ZjQodGT0KHQgicsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgeyBrZXk6ICdWbGFkaW1pcicsIGxhYmVsOiAn0JLQu9Cw0LTQuNC80LjRgCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgeyBrZXk6ICdBbGluYScsIGxhYmVsOiAn0JDQu9C40L3QsCcsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgeyBrZXk6ICdBbGVrc2V5JywgbGFiZWw6ICfQkNC70LXQutGB0LXQuScsIGVkaXRhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCcsIGFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgeyBrZXk6ICdEbGl0ZWxub3N0JywgbGFiZWw6ICfQlNC70LjRgtC10LvRjNC90L7RgdGC0YwnLCBlZGl0YWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnLCBtaW5XaWR0aDogJ3ctMzInIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IFJBVElOR19NSU4gPSAzO1xyXG5jb25zdCBSQVRJTkdfTUFYID0gNTtcclxuY29uc3QgUkFUSU5HX1NURVAgPSAwLjU7XHJcbmNvbnN0IEFWQVRBUl9QUkVTRVRTID0gWycvSW1hZ2UvYmFyYmVyX2FsZXguanBnJywgJy9JbWFnZS9iYXJiZXJfYWxpbmEuanBnJywgJy9JbWFnZS9iYXJiZXJfdmxhZC5qcGcnLCAnL0ltYWdlL2JhcmJlcl90aW11ci5qcGcnXTtcclxubGV0IGF2YXRhck9wdGlvbnNDYWNoZSA9IG51bGw7XHJcbmxldCBhdmF0YXJPcHRpb25zUHJvbWlzZSA9IG51bGw7XHJcbmNvbnN0IFlFQVJfSU5fTVMgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5jb25zdCBidWlsZE5ld0JhcmJlclN0YXRlID0gKCkgPT4gKHtcclxuICBuYW1lOiAnJyxcclxuICBwYXNzd29yZDogJycsXHJcbiAgcmF0aW5nOiAnNScsXHJcbiAgY29sb3I6ICcjNmQyOGQ5JyxcclxuICBhdmF0YXJVcmw6IEFWQVRBUl9QUkVTRVRTWzBdLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBwaG9uZTogJycsXHJcbiAgdGVsZWdyYW1JZDogJycsXHJcbiAgaXNBY3RpdmU6IHRydWUsXHJcbn0pO1xyXG5jb25zdCBnZXRSZWNvcmRJZCA9IChyZWNvcmQgPSB7fSkgPT4gcmVjb3JkLmlkIHx8IHJlY29yZC5JZCB8fCByZWNvcmQuSUQgfHwgcmVjb3JkLnJlY29yZElkIHx8IHJlY29yZC5JRF9SZWNvcmQgfHwgbnVsbDtcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICByZXR1cm4gc3RvcmVkID8gSlNPTi5wYXJzZShzdG9yZWQpIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2UgcmVhZCBlcnJvcicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VDYWxsYmFjayhcclxuICAgICh1cGRhdGVyKSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKChwcmV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKHByZXYpIDogdXBkYXRlcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobmV4dFZhbHVlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIHdyaXRlIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBba2V5XVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBbdmFsdWUsIHVwZGF0ZVZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHVzZU5vd1RpY2sgPSAoaW50ZXJ2YWxNcyA9IDEwMDApID0+IHtcclxuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUoKCkgPT4gRGF0ZS5ub3coKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Tm93KERhdGUubm93KCkpLCBpbnRlcnZhbE1zKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbaW50ZXJ2YWxNc10pO1xyXG4gIHJldHVybiBub3c7XHJcbn07XHJcblxyXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBoYW5kbGVyKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuO1xyXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaEF2YXRhck9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2Fzc2V0cy9hdmF0YXJzYCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0YHQv9C40YHQvtC6INCw0LLQsNGC0LDRgNC+0LInKTtcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZC5pbWFnZXMpID8gcGF5bG9hZC5pbWFnZXMuZmlsdGVyKEJvb2xlYW4pIDogW107XHJcbiAgcmV0dXJuIGltYWdlcy5sZW5ndGggPyBpbWFnZXMgOiBBVkFUQVJfUFJFU0VUUztcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVRleHQgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBTdHJpbmcodmFsdWUpKTtcclxuXHJcbmNvbnN0IGNhbm9uaWNhbGl6ZU5hbWUgPSAodmFsdWUpID0+IG5vcm1hbGl6ZVRleHQodmFsdWUpLnJlcGxhY2UoL1teYS16MC050LAt0Y/RkVxcc10vZ2ksICcnKS50cmltKCk7XHJcblxyXG5jb25zdCByZXNvbHZlTG9naW4gPSAodmFsdWUpID0+IG5vcm1hbGl6ZVRleHQodmFsdWUpO1xyXG5cclxuY29uc3QgYnVpbGRTZXNzaW9uUGF5bG9hZCA9IChwYXlsb2FkID0ge30pID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkTG9naW4gPSByZXNvbHZlTG9naW4ocGF5bG9hZC51c2VybmFtZSB8fCBwYXlsb2FkLmxvZ2luKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4ucGF5bG9hZCxcclxuICAgIHVzZXJuYW1lOiBub3JtYWxpemVkTG9naW4sXHJcbiAgICBkaXNwbGF5TmFtZTogcGF5bG9hZC5kaXNwbGF5TmFtZSB8fCBwYXlsb2FkLm5hbWUgfHwgbm9ybWFsaXplZExvZ2luLFxyXG4gICAgYmFyYmVySWQ6IHBheWxvYWQuYmFyYmVySWQgfHwgcGF5bG9hZC5pZCB8fCBudWxsLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBwaWNrQmFyYmVyRm9yVXNlciA9ICh1c2VyU2Vzc2lvbiwgYXZhaWxhYmxlQmFyYmVycyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgZmFsbGJhY2sgPSBhdmFpbGFibGVCYXJiZXJzPy5bMF0gfHwgJyc7XHJcbiAgaWYgKCF1c2VyU2Vzc2lvbikgcmV0dXJuIGZhbGxiYWNrO1xyXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbdXNlclNlc3Npb24uZGlzcGxheU5hbWUsIHVzZXJTZXNzaW9uLnByZWZlcnJlZE5hbWUsIHVzZXJTZXNzaW9uLnVzZXJuYW1lXVxyXG4gICAgLm1hcCgoY2FuZGlkYXRlKSA9PiBjYW5vbmljYWxpemVOYW1lKGNhbmRpZGF0ZSkudG9Mb3dlckNhc2UoKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKCFjYW5kaWRhdGVzLmxlbmd0aCB8fCAhYXZhaWxhYmxlQmFyYmVycz8ubGVuZ3RoKSByZXR1cm4gZmFsbGJhY2s7XHJcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBhdmFpbGFibGVCYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiBjYW5vbmljYWxpemVOYW1lKGJhcmJlcikudG9Mb3dlckNhc2UoKSk7XHJcbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xyXG4gICAgY29uc3QgbWF0Y2hJbmRleCA9IG5vcm1hbGl6ZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24gPT09IGNhbmRpZGF0ZSk7XHJcbiAgICBpZiAobWF0Y2hJbmRleCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUJhcmJlcnNbbWF0Y2hJbmRleF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxsYmFjaztcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSAodmFsdWUpID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJy0nO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdFRpbWUgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBzYWZlVmFsdWUgPSBub3JtYWxpemVUZXh0KHZhbHVlKTtcclxuICBpZiAoIXNhZmVWYWx1ZSkgcmV0dXJuICctJztcclxuICBpZiAoc2FmZVZhbHVlLmluY2x1ZGVzKCctJykpIHtcclxuICAgIHJldHVybiBzYWZlVmFsdWUuc3BsaXQoJy0nKVswXS50cmltKCk7XHJcbiAgfVxyXG4gIHJldHVybiBzYWZlVmFsdWU7XHJcbn07XHJcbmNvbnN0IGZvcm1hdFBob25lSW5wdXQgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBkaWdpdHMgPSBTdHJpbmcodmFsdWUgfHwgJycpXHJcbiAgICAucmVwbGFjZSgvW15cXGRdL2csICcnKVxyXG4gICAgLnRyaW0oKTtcclxuICBpZiAoIWRpZ2l0cykgcmV0dXJuICcnO1xyXG4gIGxldCBub3JtYWxpemVkID0gZGlnaXRzO1xyXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMTEgJiYgbm9ybWFsaXplZC5zdGFydHNXaXRoKCc4JykpIHtcclxuICAgIG5vcm1hbGl6ZWQgPSBgNyR7bm9ybWFsaXplZC5zbGljZSgxKX1gO1xyXG4gIH1cclxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICBub3JtYWxpemVkID0gYDcke25vcm1hbGl6ZWR9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAxMSAmJiBub3JtYWxpemVkLnN0YXJ0c1dpdGgoJzcnKSkge1xyXG4gICAgcmV0dXJuIGArNyAoJHtub3JtYWxpemVkLnNsaWNlKDEsIDQpfSkgJHtub3JtYWxpemVkLnNsaWNlKDQsIDcpfS0ke25vcm1hbGl6ZWQuc2xpY2UoNywgOSl9LSR7bm9ybWFsaXplZC5zbGljZSg5LCAxMSl9YDtcclxuICB9XHJcbiAgaWYgKG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCgnNycpICYmIG5vcm1hbGl6ZWQubGVuZ3RoID4gMTEpIHtcclxuICAgIHJldHVybiBgKyR7bm9ybWFsaXplZH1gO1xyXG4gIH1cclxuICBpZiAodmFsdWUudG9TdHJpbmcoKS5zdGFydHNXaXRoKCcrJykpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuICByZXR1cm4gYCske25vcm1hbGl6ZWR9YDtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gKGRhdGUsIHRpbWUpID0+IHtcclxuICBjb25zdCBkYXRlUGFydCA9IGZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBmb3JtYXRUaW1lKHRpbWUpO1xyXG4gIGlmIChkYXRlUGFydCA9PT0gJy0nICYmIHRpbWVQYXJ0ID09PSAnLScpIHJldHVybiAnLSc7XHJcbiAgaWYgKGRhdGVQYXJ0ID09PSAnLScpIHJldHVybiB0aW1lUGFydDtcclxuICBpZiAodGltZVBhcnQgPT09ICctJykgcmV0dXJuIGRhdGVQYXJ0O1xyXG4gIHJldHVybiBgJHtkYXRlUGFydH0gfCAke3RpbWVQYXJ0fWA7XHJcbn07XHJcbmNvbnN0IGZvcm1hdERhdGVIZWFkaW5nID0gKHZhbHVlLCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pID0+IHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGAke3ZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuIHZhbHVlO1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SVScsIG9wdGlvbnMpLmZvcm1hdChwYXJzZWQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBmb3JtYXREYXRlQmFkZ2VMYWJlbCA9ICh2YWx1ZSkgPT5cclxuICBmb3JtYXREYXRlSGVhZGluZyh2YWx1ZSwgeyB3ZWVrZGF5OiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcgfSk7XHJcbmNvbnN0IGZvcm1hdExpdmVUaW1lc3RhbXAgPSAodmFsdWUsIG5vd1RzID0gRGF0ZS5ub3coKSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgZGlmZk1zID0gTWF0aC5tYXgoMCwgbm93VHMgLSBwYXJzZWQuZ2V0VGltZSgpKTtcclxuICAgIGlmIChkaWZmTXMgPCAxMDAwKSByZXR1cm4gJ9GC0L7Qu9GM0LrQviDRh9GC0L4nO1xyXG4gICAgaWYgKGRpZmZNcyA8IDYwXzAwMCkgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZk1zIC8gMTAwMCl9INGB0LXQuiDQvdCw0LfQsNC0YDtcclxuICAgIGlmIChkaWZmTXMgPCAzXzYwMF8wMDApIHtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gNjBfMDAwKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDYwXzAwMCkgLyAxMDAwKTtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9INC80LjQvSAke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSDRgdC10Log0L3QsNC30LDQtGA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlmZk1zIDwgODZfNDAwXzAwMCkge1xyXG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZGlmZk1zIC8gM182MDBfMDAwKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZNcyAlIDNfNjAwXzAwMCkgLyA2MF8wMDApO1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9INGHICR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9INC80LjQvSDQvdCw0LfQsNC0YDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZWQudG9Mb2NhbGVUaW1lU3RyaW5nKCdydS1SVScsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNUQVRVU19UUkFOU0xBVElPTlMgPSB7XHJcbiAgYWN0aXZlOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgJ9Cw0LrRgtC40LLQvdCw0Y8nOiAn0JDQutGC0LjQstC90LDRjycsXHJcbiAgY29uZmlybTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgY29uZmlybWVkOiAn0J/QvtC00YLQstC10YDQttC00LXQvdCwJyxcclxuICAn0L/QvtC00YLQstC10YDQttC00LXQvdC+JzogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QsCcsXHJcbiAgJ9C/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCc6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LAnLFxyXG4gIGRvbmU6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNvbXBsZXRlOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICBjb21wbGV0ZWQ6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGZpbmlzaGVkOiAn0JLRi9C/0L7Qu9C90LXQvdCwJyxcclxuICAn0LLRi9C/0L7Qu9C90LXQvdCwJzogJ9CS0YvQv9C+0LvQvdC10L3QsCcsXHJcbiAgJ9C30LDQstC10YDRiNC10L3QsCc6ICfQktGL0L/QvtC70L3QtdC90LAnLFxyXG4gIGNhbmNlbDogJ9Ce0YLQvNC10L3QtdC90L4nLFxyXG4gIGNhbmNlbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgY2FuY2VsbGVkOiAn0J7RgtC80LXQvdC10L3QvicsXHJcbiAgJ9C+0YLQvNC10L3QsCc6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAn0L7RgtC80LXQvdC10L3Qvic6ICfQntGC0LzQtdC90LXQvdC+JyxcclxuICAnbm8gc2hvdyc6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgJ25vLXNob3cnOiAn0J3QtSDQv9GA0LjRiNGR0LsnLFxyXG4gIG5vc2hvdzogJ9Cd0LUg0L/RgNC40YjRkdC7JyxcclxuICBtaXNzZWQ6ICfQndC1INC/0YDQuNGI0ZHQuycsXHJcbiAgcGVuZGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdDogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgd2FpdGluZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbiAgcHJvY2Vzc2luZzogJ9CSINC+0LHRgNCw0LHQvtGC0LrQtScsXHJcbn07XHJcbmNvbnN0IFNUQVRVU19CQURHRV9NQVAgPSB7XHJcbiAg0JDQutGC0LjQstC90LDRjzogJ2JvcmRlciBib3JkZXItc2t5LTUwMC8zMCBiZy1za3ktNTAwLzEwIHRleHQtc2t5LTEwMCcsXHJcbiAg0J/QvtC00YLQstC10YDQttC00LXQvdCwOiAnYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMTAwJyxcclxuICDQl9Cw0LLQtdGA0YjQtdC90LA6ICdib3JkZXIgYm9yZGVyLWluZGlnby01MDAvMzAgYmctaW5kaWdvLTUwMC8xMCB0ZXh0LWluZGlnby0xMDAnLFxyXG4gINCe0YLQvNC10L3QtdC90LA6ICdib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzMwIGJnLXJvc2UtNTAwLzEwIHRleHQtcm9zZS0xMDAnLFxyXG4gICfQndC1INC/0YDQuNGI0ZHQuyc6ICdib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCBiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0xMDAnLFxyXG59O1xyXG5jb25zdCBnZXRTdGF0dXNCYWRnZUNsYXNzZXMgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIFNUQVRVU19CQURHRV9NQVBbbm9ybWFsaXplZF0gfHwgJ2JvcmRlciBib3JkZXItc2xhdGUtNjAwLzYwIGJnLXNsYXRlLTgwMC83MCB0ZXh0LXNsYXRlLTIwMCdcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSU5BQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LLRi9C/0L7Qu9C9JywgJ9C30LDQstC10YDRiCcsICdkb25lJywgJ2NhbmNlbCcsICfQvtGC0LzQtdC9JywgJ9C90LUg0L/RgNC40YgnLCAnbm9zaG93JywgJ25vLXNob3cnLCAnbWlzc2VkJywgJ9C/0YDQvtGB0YAnLCAnZXhwaXJlZCddO1xyXG5jb25zdCBBQ1RJVkVfU1RBVFVTX1RPS0VOUyA9IFsn0LDQutGC0LjQsicsICdhY3RpdmUnLCAn0L/QvtC00YLQstC10YDQticsICdjb25maXJtJywgJ9C+0LbQuNC0JywgJ3BlbmRpbmcnLCAnd2FpdCcsICfQttC00LXQvCcsICfQttC00ZHQvCcsICfQvdC+0LInLCAnbmV3J107XHJcbmNvbnN0IENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TID0gWyfQstGL0L/QvtC70L0nLCAn0LfQsNCy0LXRgNGIJywgJ2RvbmUnLCAnY29tcGxldGUnLCAn0LPQvtGC0L7QsiddO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzVmFsdWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQoc3RhdHVzKS50cmltKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgdHJhbnNsYXRlZCA9IFNUQVRVU19UUkFOU0xBVElPTlNbbm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpXTtcclxuICBpZiAodHJhbnNsYXRlZCkgcmV0dXJuIHRyYW5zbGF0ZWQ7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3JtYWxpemVkLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU3RhdHVzTGlzdCA9IChzdGF0dXNlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcclxuICByZXR1cm4gc3RhdHVzZXNcclxuICAgIC5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSlcclxuICAgIC5maWx0ZXIoKHN0YXR1cykgPT4ge1xyXG4gICAgICBpZiAoIXN0YXR1cyB8fCBzZWVuLmhhcyhzdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHNlZW4uYWRkKHN0YXR1cyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIENPTVBMRVRFRF9TVEFUVVNfVE9LRU5TLnNvbWUoKHRva2VuKSA9PiBub3JtYWxpemVkLmluY2x1ZGVzKHRva2VuKSk7XHJcbn07XHJcblxyXG5jb25zdCBzYW5pdGl6ZVRpbWVUb2tlbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gbm9ybWFsaXplVGV4dCh2YWx1ZSkubWF0Y2goLyhcXGR7MSwyfSk6KFxcZHsyfSkvKTtcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaG91cnMgPSBtYXRjaFsxXS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBtYXRjaFsyXTtcclxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZmUgPSBub3JtYWxpemVUZXh0KHZhbHVlKS5yZXBsYWNlKC9b4oCU4oCTXS9nLCAnLScpO1xyXG4gIGlmICghc2FmZSkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH07XHJcbiAgY29uc3QgW3Jhd1N0YXJ0LCByYXdFbmQgPSAnJ10gPSBzYWZlLnNwbGl0KCctJykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0OiBzYW5pdGl6ZVRpbWVUb2tlbihyYXdTdGFydCksXHJcbiAgICBlbmQ6IHNhbml0aXplVGltZVRva2VuKHJhd0VuZCksXHJcbiAgfTtcclxufTtcclxuY29uc3QgcGFyc2VUaW1lUmFuZ2VQYXJ0cyA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcblxyXG5jb25zdCBidWlsZFRpbWVSYW5nZVZhbHVlID0gKHN0YXJ0LCBlbmQpID0+IHtcclxuICBjb25zdCBzYWZlU3RhcnQgPSBzYW5pdGl6ZVRpbWVUb2tlbihzdGFydCk7XHJcbiAgY29uc3Qgc2FmZUVuZCA9IHNhbml0aXplVGltZVRva2VuKGVuZCk7XHJcbiAgaWYgKHNhZmVTdGFydCAmJiBzYWZlRW5kKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gc2FmZVN0YXJ0IDw9IHNhZmVFbmQgPyBbc2FmZVN0YXJ0LCBzYWZlRW5kXSA6IFtzYWZlRW5kLCBzYWZlU3RhcnRdO1xyXG4gICAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG4gIH1cclxuICByZXR1cm4gc2FmZVN0YXJ0IHx8ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRpbWVTdGFydCA9ICh2YWx1ZSkgPT4gcGFyc2VUaW1lUmFuZ2VWYWx1ZSh2YWx1ZSkuc3RhcnQ7XHJcblxyXG5jb25zdCBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZSA9IChkYXRlVmFsdWUsIHRpbWVWYWx1ZSwgZmFsbGJhY2tJc28pID0+IHtcclxuICBpZiAoZmFsbGJhY2tJc28pIHtcclxuICAgIGNvbnN0IHBhcnNlZEZhbGxiYWNrID0gbmV3IERhdGUoZmFsbGJhY2tJc28pO1xyXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkRmFsbGJhY2suZ2V0VGltZSgpKSkgcmV0dXJuIHBhcnNlZEZhbGxiYWNrO1xyXG4gIH1cclxuICBjb25zdCBkYXRlUGFydCA9IG5vcm1hbGl6ZVRleHQoZGF0ZVZhbHVlKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKCFkYXRlUGFydCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGltZVBhcnQgPSBleHRyYWN0VGltZVN0YXJ0KHRpbWVWYWx1ZSkgfHwgJzAwOjAwJztcclxuICBjb25zdCBpc29DYW5kaWRhdGUgPSBgJHtkYXRlUGFydH1UJHt0aW1lUGFydH06MDBgO1xyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlzb0NhbmRpZGF0ZSk7XHJcbiAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWQ7XHJcbn07XHJcblxyXG5jb25zdCBpc0FjdGl2ZUFwcG9pbnRtZW50U3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShzdGF0dXMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKElOQUNUSVZFX1NUQVRVU19UT0tFTlMuc29tZSgodG9rZW4pID0+IG5vcm1hbGl6ZWQuaW5jbHVkZXModG9rZW4pKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChBQ1RJVkVfU1RBVFVTX1RPS0VOUy5zb21lKCh0b2tlbikgPT4gbm9ybWFsaXplZC5pbmNsdWRlcyh0b2tlbikpKSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHNob3VsZERpc3BsYXlBcHBvaW50bWVudCA9IChhcHBvaW50bWVudCwgbm93VHMgPSBEYXRlLm5vdygpKSA9PiB7XHJcbiAgY29uc3Qgc3RhdHVzID0gbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwb2ludG1lbnQuU3RhdHVzKTtcclxuICBpZiAoIWlzQWN0aXZlQXBwb2ludG1lbnRTdGF0dXMoc3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKGFwcG9pbnRtZW50LkRhdGUsIGFwcG9pbnRtZW50LlRpbWUsIGFwcG9pbnRtZW50LnN0YXJ0RGF0ZVRpbWUpO1xyXG4gIGlmICghc3RhcnREYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIHN0YXJ0RGF0ZS5nZXRUaW1lKCkgPj0gbm93VHM7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZU11bHRpVmFsdWUgPSAodmFsdWUpID0+XHJcbiAgbm9ybWFsaXplVGV4dCh2YWx1ZSlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG5jb25zdCBMb2FkaW5nU3RhdGUgPSAoeyBsYWJlbCA9ICfQl9Cw0LPRgNGD0LbQsNGOINC00LDQvdC90YvQtS4uLicgfSA9IHt9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZVwiPntsYWJlbH08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBFcnJvckJhbm5lciA9ICh7IG1lc3NhZ2UgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC00IHB5LTMgdGV4dC13aGl0ZVwiPnttZXNzYWdlfTwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgU2VjdGlvbkNhcmQgPSAoeyB0aXRsZSwgYWN0aW9ucywgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTgwMC83MCBwLTYgc2hhZG93LWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAge2FjdGlvbnN9XHJcbiAgICA8L2Rpdj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTGl2ZUJhZGdlID0gKHsgdGltZXN0YW1wLCBsYWJlbCA9ICdMSVZFJyB9KSA9PiB7XHJcbiAgY29uc3QgdGlja2luZ05vdyA9IHVzZU5vd1RpY2soMTAwMCk7XHJcbiAgaWYgKCF0aW1lc3RhbXApIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHRpbWVMYWJlbCA9IGZvcm1hdExpdmVUaW1lc3RhbXAodGltZXN0YW1wLCB0aWNraW5nTm93KTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZW1lcmFsZC00MDAvNDAgYmctZW1lcmFsZC01MDAvMTAgcHgtMyBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1lbWVyYWxkLTIwMFwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLTIgdy0yIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNDAwXCIgLz5cclxuICAgICAge2xhYmVsfVxyXG4gICAgICB7dGltZUxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC0xMDAvODAgbm9ybWFsLWNhc2UgdHJhY2tpbmctbm9ybWFsXCI+0L7QsdC90L7QstC70LXQvdC+IHt0aW1lTGFiZWx9PC9zcGFuPn1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSWNvblRyYXNoID0gKHsgY2xhc3NOYW1lID0gJ2gtNCB3LTQnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiIC8+XHJcbiAgICA8bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCIgLz5cclxuICAgIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgTW9kYWwgPSAoeyB0aXRsZSwgaXNPcGVuLCBvbkNsb3NlLCBjaGlsZHJlbiwgZm9vdGVyLCBtYXhXaWR0aENsYXNzID0gJ21heC13LTN4bCcgfSkgPT4ge1xyXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svNjAgcHgtNCBweS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LWgtWzkwdmhdIHctZnVsbCAke21heFdpZHRoQ2xhc3N9IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAgc2hhZG93LTJ4bGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS00XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPng8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs3MHZoXSBvdmVyZmxvdy15LWF1dG8gcHgtNiBweS00IHNwYWNlLXktNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICB7Zm9vdGVyICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtMyBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNFwiPntmb290ZXJ9PC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGxhYmVsLCB2YWx1ZSwgYWNjZW50ID0gJ3RleHQtaW5kaWdvLTMwMCcgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcC0zIHNtOnAtNFwiPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPntsYWJlbH08L3A+XHJcbiAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ210LTEgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBzbTptdC0yIHNtOnRleHQtM3hsJywgYWNjZW50KX0+e3ZhbHVlfTwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBzZXNzaW9uLCBhY3RpdmVUYWIsIG9uQ2hhbmdlLCBvbkxvZ291dCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBzZXNzaW9uPy5kaXNwbGF5TmFtZSB8fCBzZXNzaW9uPy51c2VybmFtZSB8fCAn4oCUJztcclxuXHJcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaGlkZGVuIHctNzIgZmxleC1zaHJpbmstMCBmbGV4LWNvbCBib3JkZXItciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MC85MCBwLTUgbGc6c3RpY2t5IGxnOnRvcC0wIGxnOmZsZXggbGc6aC1zY3JlZW4gbGc6b3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNTAwXCI+0JLRiyDQstC+0YjQu9C4INC60LDQujwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0xMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JLRi9C50YLQuFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02IGZsZXgtMSBzcGFjZS15LTIgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVUYWIgPT09IHRhYi5pZDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZT8uKHRhYi5pZCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3ctZnVsbCByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyAnYmctaW5kaWdvLTYwMC85MCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctaW5kaWdvLTkwMC80MCdcclxuICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwLzQwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMC82MCBob3Zlcjp0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTW9iaWxlVGFicyA9ICh7IHNlc3Npb24sIGFjdGl2ZVRhYiwgb25DaGFuZ2UsIG9uTG9nb3V0IH0pID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24/LmRpc3BsYXlOYW1lIHx8IHNlc3Npb24/LnVzZXJuYW1lIHx8ICfigJQnO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0YWJJZCkgPT4ge1xyXG4gICAgb25DaGFuZ2U/Lih0YWJJZCk7XHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMzAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgYmFja2Ryb3AtYmx1ciBsZzpoaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcC0yIHRleHQtc2xhdGUtMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cItCe0YLQutGA0YvRgtGMINC80LXQvdGOXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJoLTUgdy01XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTMuNzUgNi43NWgxNi41TTMuNzUgMTJoMTYuNU0zLjc1IDE3LjI1aDE2LjVcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj7QktGLINCy0L7RiNC70Lgg0LrQsNC6PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25Mb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3Zlcjpib3JkZXItcm9zZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JLRi9C50YLQuFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KHRhYi5pZCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAnZmxleC0xIHdoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQnLFxyXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gdGFiLmlkID8gJ3RleHQtaW5kaWdvLTMwMCcgOiAndGV4dC1zbGF0ZS00MDAnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0YWIubGFiZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHttZW51T3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvOTAgcHgtNCBweS00XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0KDQsNC30LTQtdC70Ys8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cclxuICAgICAgICAgICAge1ZJRVdfVEFCUy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KHRhYi5pZCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkJyxcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0YWIuaWQgPyAnYmctaW5kaWdvLTYwMC84MCB0ZXh0LXdoaXRlJyA6ICdiZy1zbGF0ZS04MDAvNzAgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YWIubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNTAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMCBob3ZlcjpiZy1yb3NlLTUwMC8xMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCS0YvQudGC0Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoeyBkYXRhLCBvbk9wZW5BcHBvaW50bWVudCwgb25PcGVuUHJvZmlsZSwgb25DcmVhdGVBcHBvaW50bWVudCwgbGl2ZU1ldGEgPSBudWxsIH0pID0+IHtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZ1N0YXRlIC8+O1xyXG4gIGNvbnN0IHN0YXRzID0gZGF0YS5zdGF0cyB8fCB7fTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdSYXcgPSBkYXRhLmFwcG9pbnRtZW50cz8udXBjb21pbmcgfHwgW107XHJcblxyXG4gIGNvbnN0IHVwY29taW5nTGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgbm93VHMgPSBEYXRlLm5vdygpO1xyXG4gICAgcmV0dXJuIHVwY29taW5nUmF3XHJcbiAgICAgIC5tYXAoKGFwcHQpID0+ICh7IC4uLmFwcHQsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUoYXBwdC5TdGF0dXMpIH0pKVxyXG4gICAgICAuZmlsdGVyKChhcHB0KSA9PiBzaG91bGREaXNwbGF5QXBwb2ludG1lbnQoYXBwdCwgbm93VHMpKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICB9KVxyXG4gICAgICAuc2xpY2UoMCwgMTIpO1xyXG4gIH0sIFt1cGNvbWluZ1Jhd10pO1xyXG5cclxuICBjb25zdCBmb3JtYXRHcm91cExhYmVsID0gdXNlQ2FsbGJhY2soKGRhdGVWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlVmFsdWUgfHwgZGF0ZVZhbHVlID09PSAn0JHQtdC3INC00LDRgtGLJykgcmV0dXJuICfQkdC10Lcg0LTQsNGC0YsnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoYCR7ZGF0ZVZhbHVlfVQwMDowMDowMGApO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gZGF0ZVZhbHVlO1xyXG4gICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJVJywgeyB3ZWVrZGF5OiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBkYXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBncm91cGVkVXBjb21pbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIHVwY29taW5nTGlzdC5mb3JFYWNoKChhcHB0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGFwcHQuRGF0ZSB8fCAn0JHQtdC3INC00LDRgtGLJztcclxuICAgICAgY29uc3QgYnVja2V0ID0gZ3JvdXBzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgICBidWNrZXQucHVzaChhcHB0KTtcclxuICAgICAgZ3JvdXBzLnNldChrZXksIGJ1Y2tldCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3Vwcy5lbnRyaWVzKCkpXHJcbiAgICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4gKHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgbGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwoa2V5KSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWU6IE1hdGgubWluKFxyXG4gICAgICAgICAgLi4uaXRlbXMubWFwKChpdGVtKSA9PiBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShpdGVtLkRhdGUsIGl0ZW0uVGltZSwgaXRlbS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0VmFsdWUgLSBiLnNvcnRWYWx1ZSk7XHJcbiAgfSwgW2Zvcm1hdEdyb3VwTGFiZWwsIHVwY29taW5nTGlzdF0pO1xyXG5cclxuICBjb25zdCB1cGNvbWluZ0FjdGlvbnMgPVxyXG4gICAgbGl2ZU1ldGE/LnVwZGF0ZWRBdCB8fCBvbkNyZWF0ZUFwcG9pbnRtZW50XHJcbiAgICAgID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAge2xpdmVNZXRhPy51cGRhdGVkQXQgJiYgPExpdmVCYWRnZSB0aW1lc3RhbXA9e2xpdmVNZXRhLnVwZGF0ZWRBdH0gLz59XHJcbiAgICAgICAgICAgIHtvbkNyZWF0ZUFwcG9pbnRtZW50ICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlQXBwb2ludG1lbnR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgKyDQodC+0LfQtNCw0YLRjCDQt9Cw0L/QuNGB0YxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQu9GO0YfQtdCy0YvQtSDQv9C+0LrQsNC30LDRgtC10LvQuFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBzdGF0LWdyaWRcIj5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCS0YHQtdCz0L4g0LrQu9C40LXQvdGC0L7QslwiIHZhbHVlPXtzdGF0cy50b3RhbFVzZXJzID8/IDB9IC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQkNC60YLQuNCy0L3Ri9C1INC30LDQv9C40YHQuFwiIHZhbHVlPXtzdGF0cy5hY3RpdmVBcHBvaW50bWVudHMgPz8gMH0gYWNjZW50PVwidGV4dC1lbWVyYWxkLTMwMFwiIC8+XHJcbiAgICAgICAgICA8U3RhdENhcmQgbGFiZWw9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4g0LfQsCDQs9C+0LRcIiB2YWx1ZT17c3RhdHMuY29uZmlybWVkWWVhciA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIgLz5cclxuICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cItCh0LXQs9C+0LTQvdGPXCIgdmFsdWU9e3N0YXRzLnRvZGF5c0FwcG9pbnRtZW50cyA/PyAwfSBhY2NlbnQ9XCJ0ZXh0LWN5YW4tMzAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCR0LvQuNC20LDQudGI0LjQtSDQt9Cw0L/QuNGB0LhcIiBhY3Rpb25zPXt1cGNvbWluZ0FjdGlvbnN9PlxyXG4gICAgICAgIHtncm91cGVkVXBjb21pbmcubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LHQu9C40LbQsNC50YjQuNGFINC30LDQv9C40YHQtdC5LjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAge2dyb3VwZWRVcGNvbWluZy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtncm91cC5pdGVtcy5tYXAoKGFwcHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0KSxcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogKGV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgb25PcGVuQXBwb2ludG1lbnQ/LihhcHB0KSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHctZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvNjAgYmctc2xhdGUtOTAwLzcwIHAtNSB0ZXh0LWxlZnQgdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC83MCBob3ZlcjpiZy1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBwYXJzZVRpbWVSYW5nZVBhcnRzKGFwcHQuVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBub3JtYWxpemVTdGF0dXNWYWx1ZShhcHB0LlN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXNMaXN0ID0gcGFyc2VNdWx0aVZhbHVlKGFwcHQuU2VydmljZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob25lTGFiZWwgPSBhcHB0LlBob25lID8gZm9ybWF0UGhvbmVJbnB1dChhcHB0LlBob25lKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob25lSHJlZiA9IHBob25lTGFiZWwgPyBwaG9uZUxhYmVsLnJlcGxhY2UoL1teXFxkK10vZywgJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcHB0LmlkIHx8IGAke2dyb3VwLmtleX0tJHthcHB0LkN1c3RvbWVyTmFtZX0tJHthcHB0LlRpbWV9YH0gey4uLmNhcmRQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwLzgwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlQmFkZ2VMYWJlbChhcHB0LkRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZVwiPntzdGFydCB8fCAn4oCUJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbmQgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtc2xhdGUtNDAwXCI+0LTQviB7ZW5kfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGdhcC0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGF0dXNCYWRnZUNsYXNzZXMoc3RhdHVzTGFiZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzTGFiZWwgfHwgJ9CR0LXQtyDRgdGC0LDRgtGD0YHQsCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwdC5CYXJiZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JHQsNGA0LHQtdGAOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2FwcHQuQmFyYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBncmlkIGdhcC00IHRleHQtc20gdGV4dC1zbGF0ZS0zMDAgbWQ6Z3JpZC1jb2xzLVttaW5tYXgoMCwxLjZmcilfbWlubWF4KDAsMWZyKV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwcHQuQ3VzdG9tZXJOYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlblByb2ZpbGU/LihhcHB0LkN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LkN1c3RvbWVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCR0LXQtyDQuNC80LXQvdC4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0xpc3QubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzTGlzdC5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3NlcnZpY2V9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzcwIGJnLXNsYXRlLTgwMC83MCBweC0zIHB5LTEgdGV4dC14cyB0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS00MDBcIj7QndC10YIg0LLRi9Cx0YDQsNC90L3Ri9GFINGD0YHQu9GD0LM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGhvbmVMYWJlbCAmJiBwaG9uZUhyZWYgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2B0ZWw6JHtwaG9uZUhyZWZ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAvNjAgcHgtMyBweS0xIHRleHQtc20gdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuMjUgNi43NWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDIuMjVhMi4yNSAyLjI1IDAgMDAyLjI1LTIuMjV2LTEuMjZhMS41IDEuNSAwIDAwLTEuMDkzLTEuNDRsLTQuNDQzLTEuMjdhMS41IDEuNSAwIDAwLTEuNzI2Ljc1MmwtLjc5IDEuNThhMS41IDEuNSAwIDAxLTIuMjc4LjUzNkExNS4wNTIgMTUuMDUyIDAgMDE4LjM1MiAxNC40YTEuNSAxLjUgMCAwMS41MzYtMi4yNzhsMS41OC0uNzlhMS41IDEuNSAwIDAwLjc1Mi0xLjcyNmwtMS4yNy00LjQ0M0ExLjUgMS41IDAgMDA5LjUxIDQuMDdIOC4yNUEyLjI1IDIuMjUgMCAwMDYgNi4zMnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGhvbmVMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHB0LlVzZXJJRCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRCDQutC70LjQtdC90YLQsDp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDBcIj57YXBwdC5Vc2VySUR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEJhcmJlckF2YXRhclBpY2tlciA9ICh7IHZhbHVlLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgW2F2YXRhck9wdGlvbnMsIHNldEF2YXRhck9wdGlvbnNdID0gdXNlU3RhdGUoKCkgPT4gYXZhdGFyT3B0aW9uc0NhY2hlIHx8IEFWQVRBUl9QUkVTRVRTKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSghYXZhdGFyT3B0aW9uc0NhY2hlKTtcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCBhdmF0YXJPcHRpb25zLmluY2x1ZGVzKHZhbHVlKSkgcmV0dXJuIGF2YXRhck9wdGlvbnM7XHJcbiAgICByZXR1cm4gW3ZhbHVlLCAuLi5hdmF0YXJPcHRpb25zXTtcclxuICB9LCBbYXZhdGFyT3B0aW9ucywgdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgcmVmcmVzaEF2YXRhcnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXZhdGFyT3B0aW9uc1Byb21pc2UgPSBhdmF0YXJPcHRpb25zUHJvbWlzZSB8fCBmZXRjaEF2YXRhck9wdGlvbnMoKTtcclxuICAgICAgY29uc3QgYXNzZXRzID0gYXdhaXQgYXZhdGFyT3B0aW9uc1Byb21pc2U7XHJcbiAgICAgIGF2YXRhck9wdGlvbnNDYWNoZSA9IGFzc2V0cztcclxuICAgICAgc2V0QXZhdGFyT3B0aW9ucyhhc3NldHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQXZhdGFyIGxvYWQgZXJyb3InLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBhdmF0YXJPcHRpb25zUHJvbWlzZSA9IG51bGw7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdmF0YXJPcHRpb25zQ2FjaGUpIHJldHVybjtcclxuICAgIHJlZnJlc2hBdmF0YXJzKCk7XHJcbiAgfSwgW3JlZnJlc2hBdmF0YXJzXSk7XHJcblxyXG4gIGNvbnN0IHByZXZpZXdTcmMgPSB2YWx1ZSB8fCBhdmF0YXJPcHRpb25zWzBdIHx8IEFWQVRBUl9QUkVTRVRTWzBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3ByZXZpZXdTcmN9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cImgtMTYgdy0xNiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC3INC/0LDQv9C60LggwqtJbWFnZcK7PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBzbTpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LXQtyDQuNC30L7QsdGA0LDQttC10L3QuNGPPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge2F2YWlsYWJsZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoJy9JbWFnZS8nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZWZyZXNoQXZhdGFyc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtMTAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAn0J7QsdC90L7QstC70Y/RjuKApicgOiAn0J7QsdC90L7QstC40YLRjCDRgdC/0LjRgdC+0LonfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj7QlNC+0LHQsNCy0YzRgtC1INGE0LDQudC7INCyINC/0LDQv9C60YMgSW1hZ2UsINC30LDRgtC10Lwg0L7QsdC90L7QstC40YLQtSDRgdC/0LjRgdC+0LosINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0Ywg0LXQs9C+INC40Lcg0LLRi9C/0LDQtNCw0Y7RidC10LPQviDQvNC10L3Rji48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YXZhdGFyT3B0aW9ucy5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yIHNtOmdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICB7YXZhdGFyT3B0aW9ucy5tYXAoKHByZXNldCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gcHJlc2V0ID09PSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGtleT17cHJlc2V0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UocHJlc2V0KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgYm9yZGVyIHAtMSB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOmJnLXNsYXRlLTgwMCAke1xyXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMjAnIDogJ2JvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3ByZXNldH0gYWx0PVwiYXZhdGFyIHByZXNldFwiIGNsYXNzTmFtZT1cImgtMTYgdy1mdWxsIHJvdW5kZWQtbWQgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINC40LfQvtCx0YDQsNC20LXQvdC40LkuINCU0L7QsdCw0LLRjNGC0LUg0YTQsNC50LvRiyDQsiDQv9Cw0L/QutGDIC9JbWFnZS48L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmF0aW5nU2xpZGVyID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBkZW5zZSA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCByYXRpbmdWYWx1ZSA9IE51bWJlcih2YWx1ZSB8fCBSQVRJTkdfTUFYKS50b0ZpeGVkKDEpO1xyXG4gIGNvbnN0IHdyYXBwZXJDbGFzcyA9IGRlbnNlXHJcbiAgICA/ICdzcGFjZS15LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0xLjUnXHJcbiAgICA6ICdzcGFjZS15LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yJztcclxuICBjb25zdCBsYWJlbENsYXNzID0gZGVuc2VcclxuICAgID8gJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgOiAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1zbGF0ZS0zMDAnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc30+XHJcbiAgICAgICAgPHNwYW4+0KDQtdC50YLQuNC90LM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e3JhdGluZ1ZhbHVlfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17UkFUSU5HX01JTn0gbWF4PXtSQVRJTkdfTUFYfSBzdGVwPXtSQVRJTkdfU1RFUH0gdmFsdWU9e051bWJlcih2YWx1ZSkgfHwgUkFUSU5HX01BWH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LWluZGlnby01MDBcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhcmJlcnNWaWV3ID0gKHsgYmFyYmVycyA9IFtdLCBvbkZpZWxkQ2hhbmdlLCBvblNhdmUsIG9uQWRkLCBvbkRlbGV0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW25ld0JhcmJlciwgc2V0TmV3QmFyYmVyXSA9IHVzZVN0YXRlKGJ1aWxkTmV3QmFyYmVyU3RhdGUpO1xyXG5cclxuICBjb25zdCB1cGRhdGVOZXdCYXJiZXIgPSAoZmllbGQsIHZhbHVlKSA9PiBzZXROZXdCYXJiZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQmFyYmVyID0gKCkgPT4ge1xyXG4gICAgaWYgKCFuZXdCYXJiZXIubmFtZT8udHJpbSgpIHx8ICFuZXdCYXJiZXIucGFzc3dvcmQ/LnRyaW0oKSkgcmV0dXJuO1xyXG4gICAgb25BZGQobmV3QmFyYmVyKTtcclxuICAgIHNldE5ld0JhcmJlcihidWlsZE5ld0JhcmJlclN0YXRlKCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJhcmJlckNhcmQgPSAoYmFyYmVyKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvclZhbHVlID0gL14jLy50ZXN0KGJhcmJlci5jb2xvciB8fCAnJykgPyBiYXJiZXIuY29sb3IgOiAnIzZkMjhkOSc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT17YmFyYmVyLmlkfSBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBtZDpncmlkLWNvbHMtW21pbm1heCgwLDJmcilfbWlubWF4KDAsMWZyKV1cIj5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YmFyYmVyLm5hbWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0JjQvNGPXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0xLjUgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDxSYXRpbmdTbGlkZXIgZGVuc2UgdmFsdWU9e2JhcmJlci5yYXRpbmd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAncmF0aW5nJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtiYXJiZXIucGFzc3dvcmQgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCm0LLQtdGCINC60LDRgNGC0L7Rh9C60LhcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXtjb2xvclZhbHVlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKGJhcmJlci5pZCwgJ2NvbG9yJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC04IHctMTYgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBiZy10cmFuc3BhcmVudFwiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17YmFyYmVyLmRlc2NyaXB0aW9uIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKGJhcmJlci5pZCwgJ2Rlc2NyaXB0aW9uJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1XCIgcm93cz17NH0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiB2YWx1ZT17YmFyYmVyLnBob25lIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKGJhcmJlci5pZCwgJ3Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQotC10LvQtdGE0L7QvVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YmFyYmVyLnRlbGVncmFtSWQgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2UoYmFyYmVyLmlkLCAndGVsZWdyYW1JZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVGVsZWdyYW0gSURcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJhcmJlckF2YXRhclBpY2tlciB2YWx1ZT17YmFyYmVyLmF2YXRhclVybH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdhdmF0YXJVcmwnLCB2YWx1ZSl9IC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17YmFyYmVyLmlzQWN0aXZlICE9PSBmYWxzZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gb25GaWVsZENoYW5nZShiYXJiZXIuaWQsICdpc0FjdGl2ZScsIGV2ZW50LnRhcmdldC5jaGVja2VkKX0gLz5cclxuICAgICAgICAgINCQ0LrRgtC40LLQtdC9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcHQtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmUoYmFyYmVyKX0gY2xhc3NOYW1lPVwiZmxleC0xIHJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUoYmFyYmVyKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNjAwIHAtMiB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JHQsNGA0LHQtdGA0YtcIj5cclxuICAgICAgICB7YmFyYmVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCh0L/QuNGB0L7QuiDQsdCw0YDQsdC10YDQvtCyINC/0L7QutCwINC/0YPRgdGCLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1vYmlsZS1ncmlkLTIgbGc6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IHJlbmRlckJhcmJlckNhcmQoYmFyYmVyKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JTQvtCx0LDQstC40YLRjCDQsdCw0YDQsdC10YDQsFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbWQ6Z3JpZC1jb2xzLVttaW5tYXgoMCwyZnIpX21pbm1heCgwLDFmcildXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV3QmFyYmVyLm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcignbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0JjQvNGPXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0xLjUgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgPFJhdGluZ1NsaWRlciBkZW5zZSB2YWx1ZT17bmV3QmFyYmVyLnJhdGluZ30gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3QmFyYmVyKCdyYXRpbmcnLCBldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e25ld0JhcmJlci5wYXNzd29yZH0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3QmFyYmVyKCdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCm0LLQtdGCINC60LDRgNGC0L7Rh9C60LhcclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e25ld0JhcmJlci5jb2xvcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3QmFyYmVyKCdjb2xvcicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtOCB3LTE2IGN1cnNvci1wb2ludGVyIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS01MDAgYmctdHJhbnNwYXJlbnRcIiAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e25ld0JhcmJlci5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlTmV3QmFyYmVyKCdkZXNjcmlwdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiIHJvd3M9ezN9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIHZhbHVlPXtuZXdCYXJiZXIucGhvbmV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld0JhcmJlcigncGhvbmUnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25ld0JhcmJlci50ZWxlZ3JhbUlkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdCYXJiZXIoJ3RlbGVncmFtSWQnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlRlbGVncmFtIElEXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QmFyYmVyQXZhdGFyUGlja2VyIHZhbHVlPXtuZXdCYXJiZXIuYXZhdGFyVXJsfSBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVOZXdCYXJiZXIoJ2F2YXRhclVybCcsIHZhbHVlKX0gLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17bmV3QmFyYmVyLmlzQWN0aXZlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdCYXJiZXIoJ2lzQWN0aXZlJywgZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICDQkNC60YLQuNCy0LXQvVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQmFyYmVyfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMFwiPlxyXG4gICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTZXJ2aWNlc1ZpZXcgPSAoeyBzZXJ2aWNlcyA9IFtdLCBiYXJiZXJzID0gW10sIG9uRmllbGRDaGFuZ2UsIG9uUHJpY2VDaGFuZ2UsIG9uRGVsZXRlLCBvbkFkZCB9KSA9PiB7XHJcbiAgY29uc3QgW25ld1NlcnZpY2UsIHNldE5ld1NlcnZpY2VdID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZHVyYXRpb246IDYwLCBwcmljZXM6IHt9IH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVOZXdTZXJ2aWNlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0TmV3U2VydmljZSgocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xyXG4gIGNvbnN0IHVwZGF0ZU5ld1NlcnZpY2VQcmljZSA9IChiYXJiZXJJZCwgdmFsdWUpID0+XHJcbiAgICBzZXROZXdTZXJ2aWNlKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBwcmljZXM6IHtcclxuICAgICAgICAuLi4ocHJldi5wcmljZXMgfHwge30pLFxyXG4gICAgICAgIFtiYXJiZXJJZF06IHZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0JrQsNGC0LDQu9C+0LNcIj5cclxuICAgICAgICB7c2VydmljZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7Qn9C+0LrQsCDQvdC10YIg0L3QuCDQvtC00L3QvtC5INGD0YHQu9GD0LPQuC48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctWzkwMHB4XSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yXCI+0J3QsNC30LLQsNC90LjQtTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdy0zMlwiPtCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17YmFyYmVyLmlkfSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXJcIj57YmFyYmVyLm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdy0xNiB0ZXh0LWNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtzZXJ2aWNlLmlkfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBhbGlnbi10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VydmljZS5uYW1lIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkZpZWxkQ2hhbmdlKHNlcnZpY2UuaWQsICduYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgYWxpZ24tdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtzZXJ2aWNlLmR1cmF0aW9uIHx8IDB9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uRmllbGRDaGFuZ2Uoc2VydmljZS5pZCwgJ2R1cmF0aW9uJywgTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2JhcmJlci5pZH0gY2xhc3NOYW1lPVwicC0yIGFsaWduLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtzZXJ2aWNlLnByaWNlcz8uW2JhcmJlci5pZF0gPz8gJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uUHJpY2VDaGFuZ2Uoc2VydmljZS5pZCwgYmFyYmVyLmlkLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0yIHRleHQtd2hpdGVcIiBwbGFjZWhvbGRlcj1cItCm0LXQvdCwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBhbGlnbi10b3AgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUoc2VydmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAvNzAgcC0yIHRleHQtcm9zZS0zMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0KPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlY3Rpb25DYXJkPlxyXG5cclxuICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPVwi0J3QvtCy0LDRjyDRg9GB0LvRg9Cz0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgbW9iaWxlLWdyaWQtMiBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtuZXdTZXJ2aWNlLm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld1NlcnZpY2UoJ25hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LVcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtuZXdTZXJ2aWNlLmR1cmF0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVOZXdTZXJ2aWNlKCdkdXJhdGlvbicsIE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKX0gcGxhY2Vob2xkZXI9XCLQlNC70LjRgtC10LvRjNC90L7RgdGC0YwsINC80LjQvVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZ3JpZCBnYXAtMyBtb2JpbGUtZ3JpZC0yIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICB7YmFyYmVycy5tYXAoKGJhcmJlcikgPT4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2JhcmJlci5pZH1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3U2VydmljZS5wcmljZXM/LltiYXJiZXIuaWRdID8/ICcnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZU5ld1NlcnZpY2VQcmljZShiYXJiZXIuaWQsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2DQptC10L3QsCDQtNC70Y8gJHtiYXJiZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuZXdTZXJ2aWNlLm5hbWUpIHJldHVybjtcclxuICAgICAgICAgICAgb25BZGQobmV3U2VydmljZSk7XHJcbiAgICAgICAgICAgIHNldE5ld1NlcnZpY2UoeyBuYW1lOiAnJywgZHVyYXRpb246IDYwLCBwcmljZXM6IHt9IH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0YPRgdC70YPQs9GDXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBNdWx0aVNlbGVjdENlbGwgPSAoeyB2YWx1ZSwgb3B0aW9ucyA9IFtdLCBvbkNvbW1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUocGFyc2VNdWx0aVZhbHVlKHZhbHVlKSk7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB0b3A6IDAsIGxlZnQ6IDAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZU11bHRpVmFsdWUodmFsdWUpKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWFuY2hvclJlZi5jdXJyZW50KSByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gYW5jaG9yUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBwYW5lbFdpZHRoID0gMzIwO1xyXG4gICAgY29uc3QgcGFuZWxIZWlnaHQgPSAzNjA7XHJcbiAgICBjb25zdCBuZXh0TGVmdCA9IE1hdGgubWluKHJlY3QubGVmdCwgd2luZG93LmlubmVyV2lkdGggLSBwYW5lbFdpZHRoIC0gMTYpO1xyXG4gICAgY29uc3QgbmV4dFRvcCA9IE1hdGgubWluKHJlY3QuYm90dG9tICsgOCwgd2luZG93LmlubmVySGVpZ2h0IC0gcGFuZWxIZWlnaHQgLSAxNik7XHJcbiAgICBzZXRQb3NpdGlvbih7XHJcbiAgICAgIHRvcDogTWF0aC5tYXgoMTYsIG5leHRUb3ApLFxyXG4gICAgICBsZWZ0OiBNYXRoLm1heCgxNiwgbmV4dExlZnQpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgdXBkYXRlUG9zaXRpb24oKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB1cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtvcGVuLCB1cGRhdGVQb3NpdGlvbl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcHRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHByZXYuaW5jbHVkZXMob3B0aW9uKSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pIDogWy4uLnByZXYsIG9wdGlvbl0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgb25Db21taXQoZHJhZnQuam9pbignLCAnKSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gZHJhZnQubGVuZ3RoID8gZHJhZnQuam9pbignLCAnKSA6ICfQktGL0LHRgNCw0YLRjCDRg9GB0LvRg9Cz0LgnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1heC1oLVs0MHB4XSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLXByZS13cmFwXCI+e3N1bW1hcnl9PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge29wZW4gJiZcclxuICAgICAgICBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MFwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBtYXgtdy14cyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvOTUgcC0zIHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke3Bvc2l0aW9uLnRvcH1weGAsIGxlZnQ6IGAke3Bvc2l0aW9uLmxlZnR9cHhgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+0KPRgdC70YPQs9C4PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMSB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyYWZ0KHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDinJVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtkcmFmdC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yIGZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkcmFmdC5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNTAwLzIwIHB4LTIgcHktMSB0ZXh0LXhzIHRleHQtaW5kaWdvLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcHRpb24oc2VydmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC01NiBzcGFjZS15LTEgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA9PT0gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCd0LXRgiDQtNC+0YHRgtGD0L/QvdGL0YUg0YPRgdC70YPQszwvcD59XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGRyYWZ0LmluY2x1ZGVzKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBweC0zIHB5LTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwLzEwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTIgdGV4dC1sZWZ0XCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNBY3RpdmV9IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVPcHRpb24ob3B0aW9uKX0gY2xhc3NOYW1lPVwiaC00IHctNCByb3VuZGVkIGJvcmRlci1zbGF0ZS01MDAgYWNjZW50LWluZGlnby01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXREcmFmdChbXSl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGltZVJhbmdlUGlja2VyID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICB0aXRsZSA9ICfQktGL0LHQvtGAINCy0YDQtdC80LXQvdC4JyxcclxuICBwbGFjZWhvbGRlciA9ICfQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCcsXHJcbiAgYnV0dG9uQ2xhc3NOYW1lID0gJ3ctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC13aGl0ZScsXHJcbn0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3sgc3RhcnQsIGVuZCB9LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSgoKSA9PiBwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZUhvdXJWYWx1ZSA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybiAnJztcclxuICAgIGNvbnN0IFtob3Vyc10gPSBpbnB1dFZhbHVlLnNwbGl0KCc6Jyk7XHJcbiAgICBpZiAoIWhvdXJzKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gYCR7aG91cnMucGFkU3RhcnQoMiwgJzAnKX06MDBgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREcmFmdChwYXJzZVRpbWVSYW5nZVZhbHVlKHZhbHVlKSk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGJ1aWxkVGltZVJhbmdlVmFsdWUoc3RhcnQsIGVuZCkpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKCcnKTtcclxuICAgIHNldERyYWZ0KHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH0pO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfT5cclxuICAgICAgICB7dmFsdWUgPyB2YWx1ZSA6IHBsYWNlaG9sZGVyfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGlzT3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBtYXhXaWR0aENsYXNzPVwibWF4LXctbWRcIlxyXG4gICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCX0LDQutGA0YvRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QktGL0LHQtdGA0LjRgtC1INCy0YDQtdC80Y8g0LTQu9GPINC90LDRh9Cw0LvQsCDQuCDQt9Cw0LLQtdGA0YjQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xlYXJ9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDBcIj5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBnYXAtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMC82MCBwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwXCI+0KHRgtCw0YDRgjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMzYwMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgc3RhcnQ6IG5vcm1hbGl6ZUhvdXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0zMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMFwiPtCk0LjQvdC40Yg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjM2MDBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VuZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlbmQ6IG5vcm1hbGl6ZUhvdXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0zMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuY29uc3QgRWRpdGFibGVDZWxsID0gKHsgcmVjb3JkLCBjb2x1bW4sIG9wdGlvbnMsIG9uVXBkYXRlLCBvbk9wZW5Qcm9maWxlLCB0YWJsZUlkIH0pID0+IHtcclxuICBjb25zdCByZWNvcmRJZCA9IHJlY29yZD8uaWQgfHwgcmVjb3JkPy5JZCB8fCByZWNvcmQ/LklEIHx8IHJlY29yZD8ucmVjb3JkSWQ7XHJcbiAgY29uc3QgdmFsdWUgPSByZWNvcmRbY29sdW1uLmtleV07XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSh2YWx1ZSA/PyAnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREcmFmdCh2YWx1ZSA/PyAnJyk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGlmICghY29sdW1uLmVkaXRhYmxlKSB7XHJcbiAgICBpZiAoY29sdW1uLmlzUHJvZmlsZUxpbmspIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uT3BlblByb2ZpbGU/Lih2YWx1ZSl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWluZGlnby0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tMTAwXCI+XHJcbiAgICAgICAgICB7dmFsdWUgfHwgJy0nfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMjAwIHdoaXRlc3BhY2UtcHJlLXdyYXAgYnJlYWstd29yZHMgbGVhZGluZy10aWdodFwiPnt2YWx1ZSB8fCAnLSd9PC9zcGFuPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbW1pdCA9IChuZXh0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSBuZXh0VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5leHRWYWx1ZSA6IGRyYWZ0O1xyXG4gICAgaWYgKCh2YWx1ZSA/PyAnJykgPT09IChwYXlsb2FkID8/ICcnKSkgcmV0dXJuO1xyXG4gICAgb25VcGRhdGUocmVjb3JkSWQsIHsgW2NvbHVtbi5rZXldOiBwYXlsb2FkIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChcclxuICAgICh0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBjb2x1bW4ua2V5ID09PSAnVGltZScpIHx8XHJcbiAgICAodGFibGVJZCA9PT0gJ1NjaGVkdWxlcycgJiYgY29sdW1uLmtleSA9PT0gJ1dlZWsnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRpbWVSYW5nZVBpY2tlclxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gY29tbWl0KG5leHRWYWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLigJRcIlxyXG4gICAgICAgIHRpdGxlPXt0YWJsZUlkID09PSAnU2NoZWR1bGVzJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LXdoaXRlXCJcclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XHJcbiAgICBjYXNlICdzZWxlY3QnOiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkxpc3QgPSBjb2x1bW4ub3B0aW9uc0tleSA/IG9wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdIDogW107XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMiBweS0xIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgIHtvcHRpb25MaXN0Lm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAnMSd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNvbW1pdChldmVudC50YXJnZXQuY2hlY2tlZCA/ICd0cnVlJyA6ICcnKX0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApO1xyXG4gICAgY2FzZSAnbXVsdGktc2VsZWN0JzpcclxuICAgICAgcmV0dXJuIDxNdWx0aVNlbGVjdENlbGwgdmFsdWU9e3ZhbHVlfSBvcHRpb25zPXtvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXX0gb25Db21taXQ9e2NvbW1pdH0gLz47XHJcbiAgICBjYXNlICdkYXRlJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17dmFsdWUgPyBTdHJpbmcodmFsdWUpLnNsaWNlKDAsIDEwKSA6ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb21taXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTIgcHktMSB0ZXh0LXNtIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICApO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZHJhZnQgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG9uQmx1cj17KCkgPT4gY29tbWl0KCl9IG9uS2V5RG93bj17KGV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgY29tbWl0KCl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0yIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb2x1bW5NZW51ID0gKHsgY29sdW1ucywgaGlkZGVuQ29sdW1ucyA9IFtdLCBvblRvZ2dsZSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VPdXRzaWRlQ2xpY2socmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgINCf0L7Qu9GPXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTMwIG10LTIgdy01NiBzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHAtMyBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpfSBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUoY29sdW1uLmtleSl9IC8+XHJcbiAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0Q2hlY2tib3hlcyA9ICh7IGxhYmVsLCBvcHRpb25zID0gW10sIHZhbHVlID0gW10sIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciA9ICfQndC10YIg0LTQsNC90L3Ri9GFJyB9KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgc2VsZWN0ZWQgPSB1c2VNZW1vKCgpID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogcGFyc2VNdWx0aVZhbHVlKHZhbHVlKSksIFt2YWx1ZV0pO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIW5vcm1hbGl6ZWRRdWVyeSkgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KSk7XHJcbiAgfSwgW29wdGlvbnMsIG5vcm1hbGl6ZWRRdWVyeV0pO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAob3B0aW9uKSA9PiB7XHJcbiAgICBpZiAoIW9uQ2hhbmdlKSByZXR1cm47XHJcbiAgICBjb25zdCBleGlzdHMgPSBzZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgY29uc3QgbmV4dCA9IGV4aXN0cyA/IHNlbGVjdGVkLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gb3B0aW9uKSA6IFsuLi5zZWxlY3RlZCwgb3B0aW9uXTtcclxuICAgIG9uQ2hhbmdlKG5leHQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICB7bGFiZWwgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntzZWxlY3RlZC5sZW5ndGggPyBgJHtzZWxlY3RlZC5sZW5ndGh9INCy0YvQsdGA0LDQvdC+YCA6ICfQndC1INCy0YvQsdGA0LDQvdC+J308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICB7c2VsZWN0ZWQubWFwKChzZXJ2aWNlKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcm91bmRlZC1mdWxsIGJnLWluZGlnby01MDAvMTAgcHgtMiBweS0xIHRleHQteHMgdGV4dC1pbmRpZ28tMjAwXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoc2VydmljZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VydmljZX1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC0zIHB5LTJcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zbGF0ZS00MDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsxLjV9IGQ9XCJNMjEgMjFsLTQuMzUtNC4zNW0wIDBBNy41IDcuNSAwIDEwMTYuNjUgMTYuNjV6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INGD0YHQu9GD0LPQuFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3F1ZXJ5ICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoJycpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTU2IG92ZXJmbG93LXktYXV0byBwLTJcIj5cclxuICAgICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTEgcHktMiB0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e3BsYWNlaG9sZGVyfTwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMSBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBzZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShvcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LXNtJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAvMTAgdGV4dC13aGl0ZScgOiAnYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAvNDAnXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e29wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1pbmRpZ28tMzAwXCI+4pyTPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENsaWVudExvb2t1cElucHV0ID0gKHtcclxuICBsYWJlbCA9ICfQmtC70LjQtdC90YInLFxyXG4gIHZhbHVlID0gJycsXHJcbiAgb25DaGFuZ2UsXHJcbiAgY2xpZW50cyA9IFtdLFxyXG4gIG9uU2VsZWN0Q2xpZW50LFxyXG4gIHBsYWNlaG9sZGVyID0gJ9Cd0LDRh9C90LjRgtC1INCy0LLQvtC00LjRgtGMINC40LzRjyDQuNC70Lgg0YLQtdC70LXRhNC+0L0nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCAnJyk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFF1ZXJ5KHZhbHVlIHx8ICcnKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRleHQocXVlcnkpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBzaG9ydGxpc3QgPSBub3JtYWxpemVkXHJcbiAgICAgID8gY2xpZW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoY2xpZW50KSA9PlxyXG4gICAgICAgICAgICBub3JtYWxpemVUZXh0KGNsaWVudC5uYW1lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWQpIHx8XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZVRleHQoY2xpZW50LnBob25lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWQpXHJcbiAgICAgICAgKVxyXG4gICAgICA6IGNsaWVudHM7XHJcbiAgICByZXR1cm4gc2hvcnRsaXN0LnNsaWNlKDAsIDYpO1xyXG4gIH0sIFtjbGllbnRzLCBxdWVyeV0pO1xyXG5cclxuICB1c2VPdXRzaWRlQ2xpY2soY29udGFpbmVyUmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGNsaWVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV4dFZhbHVlID0gY2xpZW50Py5uYW1lIHx8ICcnO1xyXG4gICAgc2V0UXVlcnkobmV4dFZhbHVlKTtcclxuICAgIG9uQ2hhbmdlPy4obmV4dFZhbHVlKTtcclxuICAgIG9uU2VsZWN0Q2xpZW50Py4oY2xpZW50KTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktMVwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuICAgICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIG9uQ2hhbmdlPy4oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIlxyXG4gICAgICAvPlxyXG4gICAgICB7b3BlbiAmJiBtYXRjaGVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0zMCBtdC0xIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC85NSBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7bWF0Y2hlcy5tYXAoKGNsaWVudCkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAga2V5PXtjbGllbnQuaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtc3RhcnQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBweC0zIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC1zbGF0ZS0yMDAgbGFzdDpib3JkZXItbm9uZSBob3ZlcjpiZy1zbGF0ZS04MDBcIlxyXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KGNsaWVudCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2NsaWVudC5uYW1lIHx8ICfQkdC10Lcg0LjQvNC10L3QuCd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj57Y2xpZW50LnBob25lIHx8ICfQotC10LvQtdGE0L7QvSDQvdC1INGD0LrQsNC30LDQvSd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0YXR1c01lbnUgPSAoeyBzdGF0dXNlcyA9IFtdLCBoaWRkZW5TdGF0dXNlcyA9IFtdLCBvblRvZ2dsZSwgb25SZXNldCB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VPdXRzaWRlQ2xpY2socmVmLCBvcGVuID8gKCkgPT4gc2V0T3BlbihmYWxzZSkgOiBudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKChwcmV2KSA9PiAhcHJldil9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgINCh0YLQsNGC0YPRgdGLXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTMwIG10LTIgdy01NiBzcGFjZS15LTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwIHAtMyBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICB7c3RhdHVzZXMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QndC10YIg0YHRgtCw0YLRg9GB0L7QsjwvcD59XHJcbiAgICAgICAgICB7c3RhdHVzZXMubWFwKChzdGF0dXMpID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17c3RhdHVzfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyFoaWRkZW5TdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpfSBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUoc3RhdHVzKX0gLz5cclxuICAgICAgICAgICAgICB7c3RhdHVzfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzZXR9IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1pbmRpZ28tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGFibGVUb29sYmFyID0gKHtcclxuICB0YWJsZUlkLFxyXG4gIHNlYXJjaFRlcm0sXHJcbiAgc2V0U2VhcmNoVGVybSxcclxuICBzdXBwb3J0c0JhcmJlckZpbHRlcixcclxuICBzZWxlY3RlZEJhcmJlcixcclxuICBzZXRTZWxlY3RlZEJhcmJlcixcclxuICBiYXJiZXJzLFxyXG4gIHN1cHBvcnRzU3RhdHVzRmlsdGVyLFxyXG4gIHN0YXR1c2VzLFxyXG4gIGhpZGRlblN0YXR1c2VzLFxyXG4gIHRvZ2dsZVN0YXR1cyxcclxuICByZXNldFN0YXR1c2VzLFxyXG4gIGNvbHVtbnMsXHJcbiAgaGlkZGVuQ29sdW1ucyxcclxuICB0b2dnbGVDb2x1bW4sXHJcbiAgY2FuQ3JlYXRlLFxyXG4gIG9uT3BlbkNyZWF0ZSxcclxuICBvblJlZnJlc2gsXHJcbiAgc2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMsXHJcbiAgc3VwcG9ydHNHcm91cGluZyA9IGZhbHNlLFxyXG4gIGdyb3VwQnlEYXRlID0gZmFsc2UsXHJcbiAgc2V0R3JvdXBCeURhdGUsXHJcbiAgbGFzdFVwZGF0ZWRBdCA9IG51bGwsXHJcbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbGc6ZmxleC1yb3cgbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LXdyYXAgZ2FwLTNcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBzbTp3LTY0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTQgdy00XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNOSAzLjVhNS41IDUuNSAwIDAxMy45OTUgOS4zMTVsMy4wOTUgMy4wOTVhLjc1Ljc1IDAgMTEtMS4wNiAxLjA2bC0zLjA5NS0zLjA5NEE1LjUgNS41IDAgMTE5IDMuNXptMCAxLjVhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cItCf0L7QuNGB0Log0L/QviDRgtCw0LHQu9C40YbQtVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHktMiBwbC05IHByLTMgdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMC80MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAge3N1cHBvcnRzQmFyYmVyRmlsdGVyICYmIChcclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZEJhcmJlcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VsZWN0ZWRCYXJiZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj7QktGB0LUg0LHQsNGA0LHQtdGA0Ys8L29wdGlvbj5cclxuICAgICAgICAgIHtiYXJiZXJzLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdXBwb3J0c1N0YXR1c0ZpbHRlciAmJiAoXHJcbiAgICAgICAgPFN0YXR1c01lbnUgc3RhdHVzZXM9e3N0YXR1c2VzfSBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9IG9uVG9nZ2xlPXt0b2dnbGVTdGF0dXN9IG9uUmVzZXQ9e3Jlc2V0U3RhdHVzZXN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiB0eXBlb2Ygc2V0U2hvd1Bhc3RBcHBvaW50bWVudHMgPT09ICdmdW5jdGlvbicgJiYgKFxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhc2hvd1Bhc3RBcHBvaW50bWVudHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNob3dQYXN0QXBwb2ludG1lbnRzKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICDQn9C+0LrQsNC30LDRgtGMINC/0YDQvtGI0LXQtNGI0LjQtVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdXBwb3J0c0dyb3VwaW5nICYmIHR5cGVvZiBzZXRHcm91cEJ5RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAoXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17ISFncm91cEJ5RGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R3JvdXBCeURhdGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgINCT0YDRg9C/0L/QuNGA0L7QstCw0YLRjCDQv9C+INC00L3Rj9C8XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgKX1cclxuICAgICAgPENvbHVtbk1lbnUgY29sdW1ucz17Y29sdW1uc30gaGlkZGVuQ29sdW1ucz17aGlkZGVuQ29sdW1uc30gb25Ub2dnbGU9e3RvZ2dsZUNvbHVtbn0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAge2xhc3RVcGRhdGVkQXQgJiYgPExpdmVCYWRnZSB0aW1lc3RhbXA9e2xhc3RVcGRhdGVkQXR9IC8+fVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVmcmVzaH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgINCe0LHQvdC+0LLQuNGC0YxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtjYW5DcmVhdGUgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25PcGVuQ3JlYXRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cclxuICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMgPSAocmVjb3JkcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnVja2V0cyA9IG5ldyBNYXAoKTtcclxuICByZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gcmVjb3JkLkRhdGUgfHwgJ9CR0LXQtyDQtNCw0YLRiyc7XHJcbiAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzLmdldChrZXkpIHx8IFtdO1xyXG4gICAgYnVja2V0LnB1c2gocmVjb3JkKTtcclxuICAgIGJ1Y2tldHMuc2V0KGtleSwgYnVja2V0KTtcclxuICB9KTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShidWNrZXRzLmVudHJpZXMoKSlcclxuICAgIC5tYXAoKFtrZXksIGl0ZW1zXSkgPT4ge1xyXG4gICAgICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhLkRhdGUsIGEuVGltZSwgYS5zdGFydERhdGVUaW1lKT8uZ2V0VGltZSgpIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2V0QXBwb2ludG1lbnRTdGFydERhdGUoYi5EYXRlLCBiLlRpbWUsIGIuc3RhcnREYXRlVGltZSk/LmdldFRpbWUoKSB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gc29ydGVkSXRlbXNbMF07XHJcbiAgICAgIGNvbnN0IHNvcnRWYWx1ZSA9IGdldEFwcG9pbnRtZW50U3RhcnREYXRlKHJlZmVyZW5jZS5EYXRlLCByZWZlcmVuY2UuVGltZSwgcmVmZXJlbmNlLnN0YXJ0RGF0ZVRpbWUpPy5nZXRUaW1lKCkgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBrZXkgfHwgYG5vLWRhdGUtJHtyZWZlcmVuY2U/LmlkIHx8IE1hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZUhlYWRpbmcoa2V5KSxcclxuICAgICAgICByb3dzOiBzb3J0ZWRJdGVtcyxcclxuICAgICAgICBzb3J0VmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydFZhbHVlIC0gYi5zb3J0VmFsdWUpO1xyXG59O1xyXG5jb25zdCBTb3J0SW5kaWNhdG9yID0gKHsgZGlyZWN0aW9uIH0pID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxlYWRpbmctWzZweF1cIj5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMyB3LTMgdGV4dC1zbGF0ZS02MDAnLCBkaXJlY3Rpb24gPT09ICdhc2MnICYmICd0ZXh0LWluZGlnby0zMDAnKX1cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00IDEwbDQtNCA0IDRcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC0zIHctMyAtbXQtMC41IHRleHQtc2xhdGUtNjAwJywgZGlyZWN0aW9uID09PSAnZGVzYycgJiYgJ3RleHQtaW5kaWdvLTMwMCcpfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQgNmw0IDQgNC00XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L3NwYW4+XHJcbik7XHJcbmNvbnN0IERhdGFUYWJsZSA9ICh7XHJcbiAgdGFibGVJZCxcclxuICByb3dzLFxyXG4gIGNvbHVtbnMsXHJcbiAgaGlkZGVuQ29sdW1ucyxcclxuICBzb3J0Q29uZmlnLFxyXG4gIG9uU29ydCxcclxuICBvblVwZGF0ZSxcclxuICBvbkRlbGV0ZSxcclxuICBvcHRpb25zLFxyXG4gIG9uT3BlblByb2ZpbGUsXHJcbiAgaXNDb21wYWN0ID0gZmFsc2UsXHJcbiAgZ3JvdXBCeURhdGUgPSB0cnVlLFxyXG59KSA9PiB7XHJcbiAgaWYgKCFyb3dzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J3QtdGCINC30LDQv9C40YHQtdC5LjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKTtcclxuICBjb25zdCBncm91cGVkUm93cyA9XHJcbiAgICB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJyAmJiBncm91cEJ5RGF0ZSA/IGJ1aWxkQXBwb2ludG1lbnRHcm91cHMocm93cykgOiBbeyBrZXk6ICdkZWZhdWx0JywgbGFiZWw6IG51bGwsIHJvd3MgfV07XHJcblxyXG4gIGlmIChpc0NvbXBhY3QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOmhpZGRlblwiPlxyXG4gICAgICAgIHtncm91cGVkUm93cy5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAua2V5fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAge2dyb3VwLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtnZXRSZWNvcmRJZChyZWNvcmQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzYwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb2x1bW4ua2V5fSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTUwMFwiPntjb2x1bW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC82MCBweC0yIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGwgcmVjb3JkPXtyZWNvcmR9IGNvbHVtbj17Y29sdW1ufSBvcHRpb25zPXtvcHRpb25zfSBvblVwZGF0ZT17b25VcGRhdGV9IG9uT3BlblByb2ZpbGU9e29uT3BlblByb2ZpbGV9IHRhYmxlSWQ9e3RhYmxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtvbkRlbGV0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUocmVjb3JkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS01MDAgcC0yIHRleHQtcm9zZS0zMDAgaG92ZXI6Ymctcm9zZS01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25UcmFzaCAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCItbXgtNCBvdmVyZmxvdy14LWF1dG8gb3ZlcmZsb3cteS12aXNpYmxlIHBiLTQgbWQ6bXgtMFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctWzg2MHB4XSB0YWJsZS1hdXRvIHRleHQtc21cIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRoIGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdwLTInLCBjb2x1bW4uYWxpZ24gPT09ICdjZW50ZXInICYmICd0ZXh0LWNlbnRlcicsIGNvbHVtbi5taW5XaWR0aCl9IG9uQ2xpY2s9eygpID0+IGNvbHVtbi5zb3J0YWJsZSAhPT0gZmFsc2UgJiYgb25Tb3J0KGNvbHVtbi5rZXkpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMicsIGNvbHVtbi5hbGlnbiA9PT0gJ2NlbnRlcicgJiYgJ2p1c3RpZnktY2VudGVyJyl9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnNvcnRhYmxlICE9PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNvcnRJbmRpY2F0b3IgZGlyZWN0aW9uPXtzb3J0Q29uZmlnPy5rZXkgPT09IGNvbHVtbi5rZXkgPyBzb3J0Q29uZmlnLmRpcmVjdGlvbiA6IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge29uRGVsZXRlICYmIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1yaWdodFwiPtCU0LXQudGB0YLQstC40Y88L3RoPn1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Z3JvdXBlZFJvd3MubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtncm91cC5rZXl9PlxyXG4gICAgICAgICAgICAgIHtncm91cC5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3Zpc2libGVDb2x1bW5zLmxlbmd0aCArIChvbkRlbGV0ZSA/IDEgOiAwKX0gY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtcHggZmxleC0xIGJnLXNsYXRlLTcwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLXB4IGZsZXgtMSBiZy1zbGF0ZS03MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgocmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtnZXRSZWNvcmRJZChyZWNvcmQpfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncC0yIGFsaWduLXRvcCB3aGl0ZXNwYWNlLXByZS13cmFwIGJyZWFrLXdvcmRzJywgY29sdW1uLmFsaWduID09PSAnY2VudGVyJyAmJiAndGV4dC1jZW50ZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsIHJlY29yZD17cmVjb3JkfSBjb2x1bW49e2NvbHVtbn0gb3B0aW9ucz17b3B0aW9uc30gb25VcGRhdGU9e29uVXBkYXRlfSBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfSB0YWJsZUlkPXt0YWJsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICB7b25EZWxldGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShyZWNvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtNTAwIHAtMiB0ZXh0LXJvc2UtMzAwIGhvdmVyOmJnLXJvc2UtNTAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhc2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVSZWNvcmRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25TYXZlLCBjb2x1bW5zLCB0YWJsZU5hbWUsIG9wdGlvbnMsIHRhYmxlSWQsIGNsaWVudHMgPSBbXSwgaGlkZGVuRmllbGRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGVkaXRhYmxlQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlICE9PSBmYWxzZSksIFtjb2x1bW5zXSk7XHJcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZWRpdGFibGVDb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhaGlkZGVuRmllbGRzLmluY2x1ZGVzKGNvbHVtbi5rZXkpKSxcclxuICAgIFtlZGl0YWJsZUNvbHVtbnMsIGhpZGRlbkZpZWxkc11cclxuICApO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xyXG4gICAgZWRpdGFibGVDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICBwYXlsb2FkW2NvbHVtbi5rZXldID0gY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnID8gW10gOiAnJztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfSwgW2VkaXRhYmxlQ29sdW1uc10pO1xyXG5cclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaXNBcHBvaW50bWVudHNDcmVhdGUgPSB0YWJsZUlkID09PSAnQXBwb2ludG1lbnRzJztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc09wZW4pIHNldERyYWZ0KGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2lzT3BlbiwgaW5pdGlhbFN0YXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGRyYWZ0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgcGF5bG9hZFtrZXldID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIG9uU2F2ZShwYXlsb2FkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGllbnRBdXRvRmlsbCA9IChjbGllbnQpID0+IHtcclxuICAgIGlmICghY2xpZW50KSByZXR1cm47XHJcbiAgICBzZXREcmFmdCgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgQ3VzdG9tZXJOYW1lOiBjbGllbnQubmFtZSB8fCBwcmV2LkN1c3RvbWVyTmFtZSxcclxuICAgICAgUGhvbmU6IGNsaWVudC5waG9uZSB8fCBwcmV2LlBob25lLFxyXG4gICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgIFVzZXJJRDogY2xpZW50LnRlbGVncmFtSWQgfHwgY2xpZW50LlRlbGVncmFtSUQgfHwgY2xpZW50LmlkIHx8IHByZXYuVXNlcklEIHx8ICcnLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9e2DQndC+0LLQsNGPINC30LDQv9C40YHRjDogJHt0YWJsZU5hbWV9YH1cclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZHJhZnRbY29sdW1uLmtleV07XHJcbiAgICAgICAgICBpZiAoaXNBcHBvaW50bWVudHNDcmVhdGUgJiYgY29sdW1uLmtleSA9PT0gJ0N1c3RvbWVyTmFtZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIEN1c3RvbWVyTmFtZTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgIGNsaWVudHM9e2NsaWVudHN9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdENsaWVudD17aGFuZGxlQ2xpZW50QXV0b0ZpbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREcmFmdCgocHJldikgPT4gKHsgLi4ucHJldiwgW2NvbHVtbi5rZXldOiBldmVudC50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgeyhvcHRpb25zW2NvbHVtbi5vcHRpb25zS2V5XSB8fCBbXSkubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHBhcnNlTXVsdGlWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0Q2hlY2tib3hlc1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNbY29sdW1uLm9wdGlvbnNLZXldIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogc2VsZWN0ZWQgfSkpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndC10YIg0LTQsNC90L3Ri9GFXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT09ICdUaW1lJyB8fCBjb2x1bW4ua2V5ID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sdW1uLmtleX0gY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPntjb2x1bW4ubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtjb2x1bW4ua2V5XTogbmV4dFZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfigJQnIDogJ9Cd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJ31cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXkgPT09ICdXZWVrJyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGB0LvQvtGC0L7QsicgOiAn0JLRi9Cx0L7RgCDQstGA0LXQvNC10L3QuCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+e2NvbHVtbi5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtjb2x1bW4udHlwZSA9PT0gJ2RhdGUnID8gJ2RhdGUnIDogJ3RleHQnfSB2YWx1ZT17dmFsdWUgfHwgJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERyYWZ0KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY29sdW1uLmtleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTkwMCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZmlsZU1vZGFsID0gKHsgc3RhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBhcHBvaW50bWVudHMgPSBzdGF0ZS5kYXRhPy5hcHBvaW50bWVudHMgfHwgW107XG4gIGNvbnN0IHZpc2l0SGlzdG9yeSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghYXBwb2ludG1lbnRzLmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGN1dG9mZiA9IERhdGUubm93KCkgLSBZRUFSX0lOX01TO1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGFwcG9pbnRtZW50c1xuICAgICAgLm1hcCgoYXBwdCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBnZXRBcHBvaW50bWVudFN0YXJ0RGF0ZShhcHB0LkRhdGUsIGFwcHQuVGltZSwgYXBwdC5zdGFydERhdGVUaW1lKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uYXBwdCwgc3RhcnREYXRlIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYXBwdCkgPT4gYXBwdC5zdGFydERhdGUgJiYgYXBwdC5zdGFydERhdGUuZ2V0VGltZSgpID49IGN1dG9mZiAmJiBpc0NvbXBsZXRlZEFwcG9pbnRtZW50U3RhdHVzKGFwcHQuU3RhdHVzKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBhLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiBjb21wbGV0ZWQubWFwKChhcHB0LCBpbmRleCkgPT4gKHtcbiAgICAgIC4uLmFwcHQsXG4gICAgICBvcmRlck51bWJlcjogY29tcGxldGVkLmxlbmd0aCAtIGluZGV4LFxuICAgICAgZGF0ZUxhYmVsOiBmb3JtYXREYXRlVGltZShhcHB0LkRhdGUsIGFwcHQuVGltZSksXG4gICAgfSkpO1xuICB9LCBbYXBwb2ludG1lbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRpdGxlPXtzdGF0ZS5kYXRhPy51c2VyPy5OYW1lIHx8ICfQn9GA0L7RhNC40LvRjCDQutC70LjQtdC90YLQsCd9XG4gICAgICBpc09wZW49e3N0YXRlLm9wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgZm9vdGVyPXs8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cbiAgICA+XG4gICAgICB7c3RhdGUubG9hZGluZyAmJiA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0JfQsNCz0YDRg9C20LDRjiDQv9GA0L7RhNC40LvRjC4uLlwiIC8+fVxuICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmIHN0YXRlLmRhdGE/LmVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXtzdGF0ZS5kYXRhLmVycm9yfSAvPn1cbiAgICAgIHshc3RhdGUubG9hZGluZyAmJiBzdGF0ZS5kYXRhPy51c2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCi0LXQu9C10YTQvtC9Ojwvc3Bhbj4ge3N0YXRlLmRhdGEudXNlci5QaG9uZSB8fCAnLSd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+VGVsZWdyYW06PC9zcGFuPiB7c3RhdGUuZGF0YS51c2VyLlRlbGVncmFtSUQgfHwgJy0nfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCR0LDRgNCx0LXRgDo8L3NwYW4+IHtzdGF0ZS5kYXRhLnVzZXIuQmFyYmVyIHx8ICctJ308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPtCY0YHRgtC+0YDQuNGPINCy0LjQt9C40YLQvtCyPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1heC1oLTY0IHNwYWNlLXktMiBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgIHt2aXNpdEhpc3RvcnkubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvQv9C+0LvQvdC10L3QviDQt9CwIDEyINC80LXRgdGP0YbQtdCyOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dmlzaXRIaXN0b3J5Lmxlbmd0aH08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QotC+0LvRjNC60L4g0LfQsNCy0LXRgNGI0ZHQvdC90YvQtSDQt9Cw0L/QuNGB0Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHt2aXNpdEhpc3RvcnkubWFwKChhcHB0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0xhdGVzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7YXBwdC5pZCB8fCBhcHB0LmRhdGVMYWJlbH0tJHthcHB0Lm9yZGVyTnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBwLTMgdGV4dC14cyB0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMYXRlc3QgPyAnYm9yZGVyLWVtZXJhbGQtNDAwLzYwIGJnLWVtZXJhbGQtNTAwLzEwIHNoYWRvdy1pbm5lciBzaGFkb3ctZW1lcmFsZC05MDAvMzAnIDogJ2JvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTAwLzQwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj7QodGC0YDQuNC20LrQsCDihJZ7YXBwdC5vcmRlck51bWJlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcHB0LmRhdGVMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LXNsYXRlLTEwMFwiPnthcHB0LkJhcmJlciB8fCAn4oCUJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPnthcHB0LlNlcnZpY2VzIHx8ICfigJQnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS01MDBcIj7QktGL0L/QvtC70L3QtdC90L3Ri9GFINC30LDQv9C40YHQtdC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC5INCz0L7QtCDQvdC10YIuPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxyXG5jb25zdCBCYWNrdXBzUGFuZWwgPSAoeyBiYWNrdXBzID0gW10sIG9uUmVzdG9yZSwgb25DcmVhdGUgfSkgPT4gKFxyXG4gIDxTZWN0aW9uQ2FyZFxyXG4gICAgdGl0bGU9XCLQoNC10LfQtdGA0LLQvdGL0LUg0LrQvtC/0LjQuFwiXHJcbiAgICBhY3Rpb25zPXtcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1lbWVyYWxkLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtNTAwXCI+XHJcbiAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxuICA+XHJcbiAgICB7YmFja3Vwcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JjRgdGC0L7RgNC40Y8g0L/Rg9GB0YLQsC48L3A+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgIHtiYWNrdXBzLm1hcCgoYmFja3VwKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YmFja3VwfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvNDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC1zbGF0ZS0yMDBcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2JhY2t1cH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25SZXN0b3JlKGJhY2t1cCl9IGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMCBob3Zlcjp0ZXh0LWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgICDQktC+0YHRgdGC0LDQvdC+0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApfVxyXG4gIDwvU2VjdGlvbkNhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBBcHBvaW50bWVudE1vZGFsID0gKHsgb3BlbiwgYXBwb2ludG1lbnQsIG9wdGlvbnMgPSB7fSwgb25DbG9zZSwgb25TYXZlLCBpc05ldyA9IGZhbHNlLCBjbGllbnRzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IGJ1aWxkRHJhZnQgPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWNvcmQpID0+IChyZWNvcmQgPyB7IC4uLnJlY29yZCwgVXNlcklEOiByZWNvcmQuVXNlcklEIHx8IHJlY29yZC51c2VySWQgfHwgJycsIFN0YXR1czogbm9ybWFsaXplU3RhdHVzVmFsdWUocmVjb3JkLlN0YXR1cykgfSA6IG51bGwpLFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGUoYnVpbGREcmFmdChhcHBvaW50bWVudCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSByZXR1cm47XHJcbiAgICBzZXREcmFmdChidWlsZERyYWZ0KGFwcG9pbnRtZW50KSk7XHJcbiAgfSwgW2FwcG9pbnRtZW50LCBidWlsZERyYWZ0LCBvcGVuXSk7XHJcblxyXG4gIGlmICghb3BlbiB8fCAhZHJhZnQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlc1NlbGVjdGlvbiA9IHBhcnNlTXVsdGlWYWx1ZShkcmFmdC5TZXJ2aWNlcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gc2V0RHJhZnQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHZhbHVlIH0pKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgb25TYXZlKHtcclxuICAgICAgaWQ6IGRyYWZ0LmlkLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lOiBkcmFmdC5DdXN0b21lck5hbWUsXHJcbiAgICAgICAgUGhvbmU6IGRyYWZ0LlBob25lLFxyXG4gICAgICAgIEJhcmJlcjogZHJhZnQuQmFyYmVyLFxyXG4gICAgICAgIERhdGU6IGRyYWZ0LkRhdGUsXHJcbiAgICAgICAgVGltZTogZHJhZnQuVGltZSxcclxuICAgICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKGRyYWZ0LlN0YXR1cyksXHJcbiAgICAgICAgU2VydmljZXM6IGRyYWZ0LlNlcnZpY2VzLFxyXG4gICAgICAgIFVzZXJJRDogZHJhZnQuVXNlcklEIHx8ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBpc05ldyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWVudEF1dG9GaWxsID0gKGNsaWVudCkgPT4ge1xyXG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICghcHJldikgcmV0dXJuIHByZXY7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBDdXN0b21lck5hbWU6IGNsaWVudC5uYW1lIHx8IHByZXYuQ3VzdG9tZXJOYW1lLFxyXG4gICAgICAgIFBob25lOiBjbGllbnQucGhvbmUgfHwgcHJldi5QaG9uZSxcclxuICAgICAgICBCYXJiZXI6IHByZXYuQmFyYmVyIHx8IGNsaWVudC5wcmVmZXJyZWRCYXJiZXIgfHwgJycsXHJcbiAgICAgICAgVXNlcklEOiBjbGllbnQudGVsZWdyYW1JZCB8fCBjbGllbnQuVGVsZWdyYW1JRCB8fCBjbGllbnQuaWQgfHwgcHJldi5Vc2VySUQgfHwgJycsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHRpdGxlPXtpc05ldyA/ICfQndC+0LLQsNGPINC30LDQv9C40YHRjCcgOiBg0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQt9Cw0L/QuNGB0LggJHtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9YH1cclxuICAgICAgaXNPcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmb290ZXI9e1xyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIG1vYmlsZS1ncmlkLTIgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8Q2xpZW50TG9va3VwSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPINC60LvQuNC10L3RgtCwXCJcclxuICAgICAgICAgIHZhbHVlPXtkcmFmdC5DdXN0b21lck5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdDdXN0b21lck5hbWUnLCBuZXh0VmFsdWUpfVxyXG4gICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgIG9uU2VsZWN0Q2xpZW50PXtoYW5kbGVDbGllbnRBdXRvRmlsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCi0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RyYWZ0LlBob25lIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1Bob25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e2RyYWZ0LkJhcmJlciB8fCAnJ30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdCYXJiZXInLCBldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTExIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtOTAwIHB4LTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCR0LDRgNCx0LXRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgeyhvcHRpb25zLmJhcmJlcnMgfHwgW10pLm1hcCgoYmFyYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJiZXJ9IHZhbHVlPXtiYXJiZXJ9PlxyXG4gICAgICAgICAgICAgIHtiYXJiZXJ9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RyYWZ0LkRhdGUgPyBTdHJpbmcoZHJhZnQuRGF0ZSkuc2xpY2UoMCwgMTApIDogJyd9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnRGF0ZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICA8VGltZVJhbmdlUGlja2VyIHZhbHVlPXtkcmFmdC5UaW1lIHx8ICcnfSBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdUaW1lJywgbmV4dFZhbHVlKX0gcGxhY2Vob2xkZXI9XCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjFwiIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJhZnQuU3RhdHVzIHx8ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ1N0YXR1cycsIGV2ZW50LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImgtMTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHRgtCw0YLRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICB7KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXN9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgIHtzdGF0dXN9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RDaGVja2JveGVzXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0KPRgdC70YPQs9C4XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5zZXJ2aWNlcyB8fCBbXX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VzU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBoYW5kbGVDaGFuZ2UoJ1NlcnZpY2VzJywgc2VsZWN0ZWQuam9pbignLCAnKSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRg9GB0LvRg9CzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5jb25zdCBUYWJsZXNXb3Jrc3BhY2UgPSAoe1xyXG4gIGFwaVJlcXVlc3QsXHJcbiAgc2hhcmVkT3B0aW9ucyxcclxuICBvbk9wdGlvbnNVcGRhdGUsXHJcbiAgb25PcGVuUHJvZmlsZSxcclxuICBjbGllbnRzID0gW10sXHJcbiAgY3VycmVudFVzZXIgPSBudWxsLFxyXG4gIGxpdmVBcHBvaW50bWVudHMgPSBudWxsLFxyXG4gIGxpdmVVcGRhdGVkQXQgPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYmxlLCBzZXRBY3RpdmVUYWJsZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RhYmxlcy5hY3RpdmUnLCAnQXBwb2ludG1lbnRzJyk7XHJcbiAgY29uc3QgW3RhYmxlcywgc2V0VGFibGVzXSA9IHVzZVN0YXRlKCgpID0+IERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBbXSB9KSwge30pKTtcclxuICBjb25zdCBbZHJvcGRvd25PcHRpb25zLCBzZXREcm9wZG93bk9wdGlvbnNdID0gdXNlU3RhdGUoc2hhcmVkT3B0aW9ucyB8fCB7IGJhcmJlcnM6IFtdLCBzZXJ2aWNlczogW10sIHN0YXR1c2VzOiBbXSB9KTtcclxuICBjb25zdCBbdGFibGVFcnJvciwgc2V0VGFibGVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCYXJiZXIsIHNldFNlbGVjdGVkQmFyYmVyXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmJhcmJlckZpbHRlcicsICdhbGwnKTtcclxuICBjb25zdCBbaGlkZGVuU3RhdHVzZXMsIHNldEhpZGRlblN0YXR1c2VzXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlblN0YXR1c2VzJywgW10pO1xyXG4gIGNvbnN0IFtoaWRkZW5Db2x1bW5zTWFwLCBzZXRIaWRkZW5Db2x1bW5zTWFwXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmhpZGRlbkNvbHVtbnMnLCB7XHJcbiAgICBBcHBvaW50bWVudHM6IFsnVXNlcklEJ10sXHJcbiAgICBTY2hlZHVsZXM6IFtdLFxyXG4gICAgVXNlcnM6IFtdLFxyXG4gICAgQ29zdDogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NvcnRDb25maWdzLCBzZXRTb3J0Q29uZmlnc10gPSB1c2VMb2NhbFN0b3JhZ2UoXHJcbiAgICAndGFibGVzLnNvcnRDb25maWdzJyxcclxuICAgIERBVEFfVEFCTEVTLnJlZHVjZSgoYWNjLCB0YWJsZSkgPT4gKHsgLi4uYWNjLCBbdGFibGVdOiBUQUJMRV9DT05GSUdbdGFibGVdPy5kZWZhdWx0U29ydCB8fCBudWxsIH0pLCB7fSlcclxuICApO1xyXG4gIGNvbnN0IFtjcmVhdGVNb2RhbE9wZW4sIHNldENyZWF0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbXBhY3RUYWJsZVZpZXcsIHNldENvbXBhY3RUYWJsZVZpZXddID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gIGNvbnN0IFtzaG93UGFzdEFwcG9pbnRtZW50cywgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHNdID0gdXNlTG9jYWxTdG9yYWdlKCd0YWJsZXMuc2hvd1Bhc3RBcHBvaW50bWVudHMnLCB0cnVlKTtcclxuICBjb25zdCBbZ3JvdXBBcHBvaW50bWVudHNCeURhdGUsIHNldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlXSA9IHVzZUxvY2FsU3RvcmFnZSgndGFibGVzLmdyb3VwQXBwb2ludG1lbnRzQnlEYXRlJywgdHJ1ZSk7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRUZW1wbGF0ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgQ3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICBCYXJiZXI6IHBpY2tCYXJiZXJGb3JVc2VyKGN1cnJlbnRVc2VyLCBkcm9wZG93bk9wdGlvbnMuYmFyYmVycyB8fCBbXSksXHJcbiAgICAgIERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXHJcbiAgICAgIFRpbWU6ICcnLFxyXG4gICAgICBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKChkcm9wZG93bk9wdGlvbnMuc3RhdHVzZXMgJiYgZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzWzBdKSB8fCAn0J3QvtCy0LDRjyDQt9Cw0L/QuNGB0YwnKSxcclxuICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICBVc2VySUQ6ICcnLFxyXG4gICAgfSksXHJcbiAgICBbZHJvcGRvd25PcHRpb25zLCBjdXJyZW50VXNlcj8uZGlzcGxheU5hbWUsIGN1cnJlbnRVc2VyPy51c2VybmFtZV1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNoYXJlZE9wdGlvbnMpIHtcclxuICAgICAgc2V0RHJvcGRvd25PcHRpb25zKHtcclxuICAgICAgICAuLi5zaGFyZWRPcHRpb25zLFxyXG4gICAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KHNoYXJlZE9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2hhcmVkT3B0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0Q29tcGFjdFRhYmxlVmlldyh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIVRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0pIHtcclxuICAgICAgc2V0QWN0aXZlVGFibGUoJ0FwcG9pbnRtZW50cycpO1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUYWJsZSwgc2V0QWN0aXZlVGFibGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEhpZGRlblN0YXR1c2VzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBBcnJheS5mcm9tKG5ldyBTZXQocHJldi5tYXAoKHN0YXR1cykgPT4gbm9ybWFsaXplU3RhdHVzVmFsdWUoc3RhdHVzKSkuZmlsdGVyKEJvb2xlYW4pKSk7XHJcbiAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gcHJldi5sZW5ndGggJiYgbm9ybWFsaXplZC5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcHJldltpbmRleF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgICB9KTtcclxuICB9LCBbc2V0SGlkZGVuU3RhdHVzZXNdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUYWJsZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xyXG4gICAgc2V0VGFibGVFcnJvcignJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgLi4uREFUQV9UQUJMRVMubWFwKCh0YWJsZSkgPT4gYXBpUmVxdWVzdChgLyR7dGFibGV9YCkpLFxyXG4gICAgICAgIGFwaVJlcXVlc3QoJy9vcHRpb25zL2FwcG9pbnRtZW50cycpLFxyXG4gICAgICBdKTtcclxuICAgICAgY29uc3QgbmV4dFRhYmxlcyA9IHt9O1xyXG4gICAgICBEQVRBX1RBQkxFUy5mb3JFYWNoKCh0YWJsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gcmVzcG9uc2VzW2luZGV4XSB8fCBbXTtcclxuICAgICAgICBuZXh0VGFibGVzW3RhYmxlXSA9IHRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IHJlY29yZHMubWFwKChyb3cpID0+ICh7IC4uLnJvdywgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyb3cuU3RhdHVzKSB9KSkgOiByZWNvcmRzO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmF3T3B0aW9ucyA9IHJlc3BvbnNlc1tEQVRBX1RBQkxFUy5sZW5ndGhdIHx8IHsgYmFyYmVyczogW10sIHNlcnZpY2VzOiBbXSwgc3RhdHVzZXM6IFtdIH07XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0ge1xyXG4gICAgICAgIC4uLnJhd09wdGlvbnMsXHJcbiAgICAgICAgc3RhdHVzZXM6IG5vcm1hbGl6ZVN0YXR1c0xpc3QocmF3T3B0aW9ucy5zdGF0dXNlcyB8fCBbXSksXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRhYmxlcyhuZXh0VGFibGVzKTtcclxuICAgICAgc2V0RHJvcGRvd25PcHRpb25zKG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuICAgICAgb25PcHRpb25zVXBkYXRlPy4obm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGFibGUgZmV0Y2ggZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGC0LDQsdC70LjRhtGLJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbYXBpUmVxdWVzdCwgb25PcHRpb25zVXBkYXRlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhYmxlcygpO1xyXG4gIH0sIFtmZXRjaFRhYmxlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpdmVBcHBvaW50bWVudHMpKSByZXR1cm47XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIEFwcG9pbnRtZW50czogbGl2ZUFwcG9pbnRtZW50cy5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShyb3cuU3RhdHVzKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSkpO1xyXG4gIH0sIFtsaXZlQXBwb2ludG1lbnRzLCBsaXZlVXBkYXRlZEF0XSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRDb2x1bW5zID0gVEFCTEVfQ09MVU1OU1thY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgY29uc3QgaGlkZGVuQ29sdW1ucyA9IGhpZGRlbkNvbHVtbnNNYXBbYWN0aXZlVGFibGVdIHx8IFtdO1xyXG4gIGNvbnN0IHZpc2libGVDb2x1bW5zID0gY3VycmVudENvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5rZXkpKTtcclxuICBjb25zdCBzb3J0Q29uZmlnID0gc29ydENvbmZpZ3NbYWN0aXZlVGFibGVdIHx8IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0/LmRlZmF1bHRTb3J0IHx8IG51bGw7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZFJvd3MgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHNvdXJjZSA9IHRhYmxlc1thY3RpdmVUYWJsZV0gfHwgW107XHJcbiAgICBpZiAoIXNvdXJjZS5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgIGxldCByb3dzID0gWy4uLnNvdXJjZV07XHJcbiAgICBpZiAoVEFCTEVfQ09ORklHW2FjdGl2ZVRhYmxlXT8uc3VwcG9ydHNCYXJiZXJGaWx0ZXIgJiYgc2VsZWN0ZWRCYXJiZXIgIT09ICdhbGwnKSB7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiBub3JtYWxpemVUZXh0KHJvdy5CYXJiZXIpLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZVRleHQoc2VsZWN0ZWRCYXJiZXIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJykge1xyXG4gICAgICBjb25zdCBub3dUcyA9IERhdGUubm93KCk7XHJcbiAgICAgIHJvd3MgPSByb3dzLmZpbHRlcigocm93KSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGRlblN0YXR1c2VzLmxlbmd0aCAmJiBoaWRkZW5TdGF0dXNlcy5pbmNsdWRlcyhyb3cuU3RhdHVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChzaG93UGFzdEFwcG9pbnRtZW50cykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZERpc3BsYXlBcHBvaW50bWVudChyb3csIG5vd1RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkpIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hUZXJtLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIoKHJvdykgPT4gdmlzaWJsZUNvbHVtbnMuc29tZSgoY29sdW1uKSA9PiBub3JtYWxpemVUZXh0KHJvd1tjb2x1bW4ua2V5XSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpKTtcclxuICAgIH1cclxuICAgIGlmIChzb3J0Q29uZmlnPy5rZXkpIHtcclxuICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IG5vcm1hbGl6ZVRleHQoYVtzb3J0Q29uZmlnLmtleV0pLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBub3JtYWxpemVUZXh0KGJbc29ydENvbmZpZy5rZXldKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRDb25maWcuZGlyZWN0aW9uID09PSAnYXNjJyA/IChsZWZ0ID4gcmlnaHQgPyAxIDogLTEpIDogbGVmdCA+IHJpZ2h0ID8gLTEgOiAxO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByb3dzO1xyXG4gIH0sIFt0YWJsZXMsIGFjdGl2ZVRhYmxlLCBzZWxlY3RlZEJhcmJlciwgaGlkZGVuU3RhdHVzZXMsIHNlYXJjaFRlcm0sIHZpc2libGVDb2x1bW5zLCBzb3J0Q29uZmlnLCBzaG93UGFzdEFwcG9pbnRtZW50c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTb3J0ID0gKGNvbHVtbktleSkgPT4ge1xyXG4gICAgc2V0U29ydENvbmZpZ3MoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHByZXZbYWN0aXZlVGFibGVdO1xyXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBjdXJyZW50Py5rZXkgPT09IGNvbHVtbktleSAmJiBjdXJyZW50LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2FjdGl2ZVRhYmxlXTogeyBrZXk6IGNvbHVtbktleSwgZGlyZWN0aW9uIH0gfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbHVtbiA9IChjb2x1bW5LZXkpID0+IHtcclxuICAgIHNldEhpZGRlbkNvbHVtbnNNYXAoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgaGlkZGVuID0gbmV3IFNldChwcmV2W2FjdGl2ZVRhYmxlXSB8fCBbXSk7XHJcbiAgICAgIGlmIChoaWRkZW4uaGFzKGNvbHVtbktleSkpIHtcclxuICAgICAgICBoaWRkZW4uZGVsZXRlKGNvbHVtbktleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaGlkZGVuLnNpemUgPCBjdXJyZW50Q29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaGlkZGVuLmFkZChjb2x1bW5LZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFthY3RpdmVUYWJsZV06IEFycmF5LmZyb20oaGlkZGVuKSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHN0YXR1cyk7XHJcbiAgICBzZXRIaWRkZW5TdGF0dXNlcygocHJldikgPT4gKHByZXYuaW5jbHVkZXMobm9ybWFsaXplZCkgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbm9ybWFsaXplZCkgOiBbLi4ucHJldiwgbm9ybWFsaXplZF0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAocmVjb3JkSWQsIGRhdGEpID0+IHtcclxuICAgIGlmICghcmVjb3JkSWQpIHJldHVybjtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID1cclxuICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgZGF0YT8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHsgLi4uZGF0YSwgU3RhdHVzOiBub3JtYWxpemVTdGF0dXNWYWx1ZShkYXRhLlN0YXR1cykgfVxyXG4gICAgICAgIDogZGF0YTtcclxuICAgIGNvbnN0IG9yaWdpbmFsID0gdGFibGVzW3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgc2V0VGFibGVzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBwcmV2W3RhYmxlSWRdIHx8IFtdO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgW3RhYmxlSWRdOiBsaXN0Lm1hcCgocm93KSA9PiAoZ2V0UmVjb3JkSWQocm93KSA9PT0gcmVjb3JkSWQgPyB7IC4uLnJvdywgLi4ubm9ybWFsaXplZERhdGEgfSA6IHJvdykpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID1cclxuICAgICAgICB0YWJsZUlkID09PSAnU2NoZWR1bGVzJ1xyXG4gICAgICAgICAgPyB7IC4uLihvcmlnaW5hbC5maW5kKChyb3cpID0+IGdldFJlY29yZElkKHJvdykgPT09IHJlY29yZElkKSB8fCB7fSksIC4uLm5vcm1hbGl6ZWREYXRhIH1cclxuICAgICAgICAgIDogbm9ybWFsaXplZERhdGE7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY29yZElkKX1gLCB7IG1ldGhvZDogJ1BVVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVXBkYXRlIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgc2V0VGFibGVFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC+0LHQvdC+0LLQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHJlY29yZCkgPT4ge1xyXG4gICAgaWYgKCFyZWNvcmQgfHwgYWN0aXZlVGFibGUgPT09ICdTY2hlZHVsZXMnKSByZXR1cm47XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0Ywg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjz8nKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFibGVJZCA9IGFjdGl2ZVRhYmxlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0YWJsZXNbdGFibGVJZF0gfHwgW107XHJcbiAgICBzZXRUYWJsZXMoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IHByZXZbdGFibGVJZF0gfHwgW107XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFt0YWJsZUlkXTogbGlzdC5maWx0ZXIoKHJvdykgPT4gZ2V0UmVjb3JkSWQocm93KSAhPT0gZ2V0UmVjb3JkSWQocmVjb3JkKSkgfTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgLyR7dGFibGVJZH0vJHtlbmNvZGVVUklDb21wb25lbnQocmVjb3JkLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICAgIHNldFRhYmxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW3RhYmxlSWRdOiBvcmlnaW5hbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUmVjb3JkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHRhYmxlSWQgPSBhY3RpdmVUYWJsZTtcclxuICAgIHNldENyZWF0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF5bG9hZCA9XHJcbiAgICAgICAgdGFibGVJZCA9PT0gJ0FwcG9pbnRtZW50cycgJiYgcGF5bG9hZD8uU3RhdHVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8geyAuLi5wYXlsb2FkLCBTdGF0dXM6IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKHBheWxvYWQuU3RhdHVzKSB9XHJcbiAgICAgICAgICA6IHBheWxvYWQ7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC8ke3RhYmxlSWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5vcm1hbGl6ZWRQYXlsb2FkKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoVGFibGVzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICBzZXRUYWJsZUVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LfQsNC/0LjRgdGMJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGFibGVTZXR0aW5ncyA9IFRBQkxFX0NPTkZJR1thY3RpdmVUYWJsZV0gfHwge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAge1RBQkxFX09SREVSLm1hcCgodGFibGUpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt0YWJsZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFibGUodGFibGUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ3JvdW5kZWQtZnVsbCBweC00IHB5LTIgdGV4dC1zbScsXHJcbiAgICAgICAgICAgICAgYWN0aXZlVGFibGUgPT09IHRhYmxlID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZScgOiAnYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMzAwJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VEFCTEVfQ09ORklHW3RhYmxlXT8ubGFiZWwgfHwgdGFibGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dGFibGVTZXR0aW5ncyAmJiAoXHJcbiAgICAgICAgPFNlY3Rpb25DYXJkIHRpdGxlPXt0YWJsZVNldHRpbmdzLmxhYmVsfT5cclxuICAgICAgICAgIHt0YWJsZUVycm9yICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt0YWJsZUVycm9yfSAvPn1cclxuICAgICAgICAgIDxUYWJsZVRvb2xiYXJcclxuICAgICAgICAgICAgdGFibGVJZD17YWN0aXZlVGFibGV9XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIHN1cHBvcnRzQmFyYmVyRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzQmFyYmVyRmlsdGVyfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJhcmJlcj17c2VsZWN0ZWRCYXJiZXJ9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQmFyYmVyPXtzZXRTZWxlY3RlZEJhcmJlcn1cclxuICAgICAgICAgICAgYmFyYmVycz17ZHJvcGRvd25PcHRpb25zLmJhcmJlcnN9XHJcbiAgICAgICAgICAgIHN1cHBvcnRzU3RhdHVzRmlsdGVyPXt0YWJsZVNldHRpbmdzLnN1cHBvcnRzU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17ZHJvcGRvd25PcHRpb25zLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICBoaWRkZW5TdGF0dXNlcz17aGlkZGVuU3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHRvZ2dsZVN0YXR1cz17dG9nZ2xlU3RhdHVzfVxyXG4gICAgICAgICAgICByZXNldFN0YXR1c2VzPXsoKSA9PiBzZXRIaWRkZW5TdGF0dXNlcyhbXSl9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2N1cnJlbnRDb2x1bW5zfVxyXG4gICAgICAgICAgICBoaWRkZW5Db2x1bW5zPXtoaWRkZW5Db2x1bW5zfVxyXG4gICAgICAgICAgICB0b2dnbGVDb2x1bW49e3RvZ2dsZUNvbHVtbn1cclxuICAgICAgICAgICAgY2FuQ3JlYXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZX1cclxuICAgICAgICAgICAgb25PcGVuQ3JlYXRlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUmVmcmVzaD17ZmV0Y2hUYWJsZXN9XHJcbiAgICAgICAgICAgIHNob3dQYXN0QXBwb2ludG1lbnRzPXtzaG93UGFzdEFwcG9pbnRtZW50c31cclxuICAgICAgICAgICAgc2V0U2hvd1Bhc3RBcHBvaW50bWVudHM9e3NldFNob3dQYXN0QXBwb2ludG1lbnRzfVxyXG4gICAgICAgICAgICBzdXBwb3J0c0dyb3VwaW5nPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cyd9XHJcbiAgICAgICAgICAgIGdyb3VwQnlEYXRlPXtncm91cEFwcG9pbnRtZW50c0J5RGF0ZX1cclxuICAgICAgICAgICAgc2V0R3JvdXBCeURhdGU9e3NldEdyb3VwQXBwb2ludG1lbnRzQnlEYXRlfVxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZEF0PXtsaXZlVXBkYXRlZEF0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc0ZldGNoaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1N0YXRlIGxhYmVsPVwi0J7QsdC90L7QstC70Y/RjiDRgtCw0LHQu9C40YbRiy4uLlwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Byb2Nlc3NlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjdXJyZW50Q29sdW1uc31cclxuICAgICAgICAgICAgICAgIGhpZGRlbkNvbHVtbnM9e2hpZGRlbkNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBzb3J0Q29uZmlnPXtzb3J0Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXtoYW5kbGVTb3J0fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0YWJsZVNldHRpbmdzLmNhbkNyZWF0ZSA/IGhhbmRsZURlbGV0ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW5Qcm9maWxlPXtvbk9wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgaXNDb21wYWN0PXtjb21wYWN0VGFibGVWaWV3fVxyXG4gICAgICAgICAgICAgICAgZ3JvdXBCeURhdGU9e2FjdGl2ZVRhYmxlID09PSAnQXBwb2ludG1lbnRzJyA/IGdyb3VwQXBwb2ludG1lbnRzQnlEYXRlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7dGFibGVTZXR0aW5ncy5jYW5DcmVhdGUgJiZcclxuICAgICAgICAoYWN0aXZlVGFibGUgPT09ICdBcHBvaW50bWVudHMnID8gKFxyXG4gICAgICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICAgICAgb3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBhcHBvaW50bWVudD17YXBwb2ludG1lbnRUZW1wbGF0ZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICBvblNhdmU9eyh7IHBheWxvYWQgfSkgPT4gaGFuZGxlQ3JlYXRlUmVjb3JkKHBheWxvYWQpfVxyXG4gICAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgICBjbGllbnRzPXtjbGllbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENyZWF0ZVJlY29yZE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3Blbj17Y3JlYXRlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDcmVhdGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICBvblNhdmU9e2hhbmRsZUNyZWF0ZVJlY29yZH1cclxuICAgICAgICAgICAgY29sdW1ucz17Y3VycmVudENvbHVtbnN9XHJcbiAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVTZXR0aW5ncy5sYWJlbH1cclxuICAgICAgICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICB0YWJsZUlkPXthY3RpdmVUYWJsZX1cclxuICAgICAgICAgICAgY2xpZW50cz17Y2xpZW50c31cclxuICAgICAgICAgICAgaGlkZGVuRmllbGRzPXthY3RpdmVUYWJsZSA9PT0gJ0FwcG9pbnRtZW50cycgPyBbJ1VzZXJJRCcsICdSZW1pbmRlcjJoQ2xpZW50U2VudCcsICdSZW1pbmRlcjJoQmFyYmVyU2VudCddIDogW119XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgQm90Q29udHJvbFZpZXcgPSAoe1xyXG4gIHN0YXR1cyxcclxuICBzZXR0aW5ncyxcclxuICBiYWNrdXBzID0gW10sXHJcbiAgbWVzc2FnZXMgPSBbXSxcclxuICBvblRvZ2dsZUVuYWJsZWQsXHJcbiAgb25TdGFydCxcclxuICBvblN0b3AsXHJcbiAgb25SZXN0YXJ0LFxyXG4gIG9uU2F2ZVNldHRpbmdzLFxyXG4gIG9uU2F2ZU1lc3NhZ2UsXHJcbiAgb25SZXN0b3JlQmFja3VwLFxyXG4gIG9uQ3JlYXRlQmFja3VwLFxyXG4gIGxpY2Vuc2VTdGF0dXMsXHJcbiAgdXBkYXRlSW5mbyxcclxuICBvblJlZnJlc2hVcGRhdGUsXHJcbiAgb25BcHBseVVwZGF0ZSxcclxuICBzeXN0ZW1CdXN5LFxyXG4gIHZpZXdNb2RlID0gJ2JvdCcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKHNldHRpbmdzPy5ib3REZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBzZXRBYm91dChzZXR0aW5ncz8uYWJvdXRUZXh0IHx8ICcnKTtcclxuICB9LCBbc2V0dGluZ3NdKTtcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnc3lzdGVtJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICA8QmFja3Vwc1BhbmVsIGJhY2t1cHM9e2JhY2t1cHN9IG9uUmVzdG9yZT17b25SZXN0b3JlQmFja3VwfSBvbkNyZWF0ZT17b25DcmVhdGVCYWNrdXB9IC8+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uQ2FyZCB0aXRsZT1cItCb0LjRhtC10L3Qt9C40Y8g0Lgg0L7QsdC90L7QstC70LXQvdC40Y9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzQwIHAtNCB0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPtCb0LjRhtC10L3Qt9C40Y88L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPtCh0YLQsNGC0YPRgToge2xpY2Vuc2VTdGF0dXM/LnZhbGlkID8gJ9CQ0LrRgtC40LLQvdCwJyA6ICfQndC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCa0L7QvNC80LXQvdGC0LDRgNC40Lk6IHtsaWNlbnNlU3RhdHVzPy5tZXNzYWdlIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJ308L3A+XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm93bmVyICYmIDxwPtCS0LvQsNC00LXQu9C10YY6IHtsaWNlbnNlU3RhdHVzLmxpY2Vuc2Uub3duZXJ9PC9wPn1cclxuICAgICAgICAgICAgICB7bGljZW5zZVN0YXR1cz8ubGljZW5zZT8uZXhwaXJlc0F0ICYmIDxwPtCU0LXQudGB0YLQstGD0LXRgiDQtNC+IHtmb3JtYXREYXRlKGxpY2Vuc2VTdGF0dXMubGljZW5zZS5leHBpcmVzQXQpfTwvcD59XHJcbiAgICAgICAgICAgICAge2xpY2Vuc2VTdGF0dXM/LmxpY2Vuc2U/Lm51bWJlciAmJiA8cD7QndC+0LzQtdGAOiB7bGljZW5zZVN0YXR1cy5saWNlbnNlLm51bWJlcn08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC80MCBwLTQgdGV4dC1zbSB0ZXh0LXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7QntCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+0J/QvtGB0LvQtdC00L3Rj9GPINCy0LXRgNGB0LjRjzoge3VwZGF0ZUluZm8/LnZlcnNpb24gfHwgJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQvtCy0LXRgNC10L3Qvjoge3VwZGF0ZUluZm8/LmNoZWNrZWRBdCA/IGZvcm1hdERhdGUodXBkYXRlSW5mby5jaGVja2VkQXQpIDogJ+KAlCd9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPtCh0YLQsNGC0YPRgToge3VwZGF0ZUluZm8/LmRldGFpbHMgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZWZyZXNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3lzdGVtQnVzeX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCf0YDQvtCy0LXRgNC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHlVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzeXN0ZW1CdXN5IHx8ICF1cGRhdGVJbmZvPy5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctZW1lcmFsZC02MDAgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzeXN0ZW1CdXN5ID8gJ9Ce0LHQvdC+0LLQu9C10L3QuNC14oCmJyA6ICfQntCx0L3QvtCy0LjRgtGMJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgPFNlY3Rpb25DYXJkXHJcbiAgICAgICAgdGl0bGU9XCLQodGC0LDRgtGD0YEg0LHQvtGC0LBcIlxyXG4gICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHB4LTMgcHktMSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNC/0YPRgdGC0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1yb3NlLTYwMCBweC0zIHB5LTEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1zbGF0ZS02MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+0KHQvtGB0YLQvtGPOiB7c3RhdHVzPy5ydW5uaW5nID8gJ9GA0LDQsdC+0YLQsNC10YInIDogJ9C+0YHRgtCw0L3QvtCy0LvQtdC9J308L3A+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTMgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2V0dGluZ3M/LmlzQm90RW5hYmxlZCAhPT0gZmFsc2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uVG9nZ2xlRW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICDQkNCy0YLQvtGB0YLQsNGA0YIg0LLQvNC10YHRgtC1INGBIENSTVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvU2VjdGlvbkNhcmQ+XHJcblxyXG4gICAgICA8U2VjdGlvbkNhcmQgdGl0bGU9XCLQotC10LrRgdGC0Ysg0LHQvtGC0LBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS0zMDBcIj7QntC/0LjRgdCw0L3QuNC1INC70LXQvdC00LjQvdCz0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXszfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCR0LvQvtC6IMKr0J4g0L3QsNGBwrs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBYm91dChldmVudC50YXJnZXQudmFsdWUpfSByb3dzPXs0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBiZy1zbGF0ZS05MDAgcHgtMyBweS0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZVNldHRpbmdzKHsgYm90RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhYm91dFRleHQ6IGFib3V0IH0pfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YHRgtGLXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uQ2FyZD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMb2dpblNjcmVlbiA9ICh7IG9uTG9naW4sIGVycm9yIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbk9wdGlvbnMsIHNldExvZ2luT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdGlvbnNFcnJvciwgc2V0T3B0aW9uc0Vycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZ09wdGlvbnMsIHNldExvYWRpbmdPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdPcHRpb25zKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9sb2dpbi9vcHRpb25zYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XHJcbiAgICAgICAgc2V0TG9naW5PcHRpb25zKG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUobm9ybWFsaXplZFswXS5sb2dpbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm9ybWFsaXplZC5zb21lKChvcHRpb24pID0+IG9wdGlvbi5sb2dpbiA9PT0gdXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wdGlvbnNFcnJvcignJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldExvZ2luT3B0aW9ucyhbXSk7XHJcbiAgICAgICAgc2V0T3B0aW9uc0Vycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdC/0LjRgdC+0Log0LHQsNGA0LHQtdGA0L7Qsi4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hPcHRpb25zKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktGL0LHQtdGA0LjRgtC1INCx0LDRgNCx0LXRgNCwINC40Lcg0YHQv9C40YHQutCwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9yKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9yKCcnKTtcclxuICAgIG9uTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3REaXNhYmxlZCA9IGxvYWRpbmdPcHRpb25zIHx8IGxvZ2luT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAgcHgtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTkwMCBwLTggc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5CYXJiZXIgQm90IENSTTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCI+0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCAo0LvQvtCz0LjQvSk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFZhbGlkYXRpb25FcnJvcignJyk7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05NTAgcHgtMyBweS0yIHRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS02MFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57bG9hZGluZ09wdGlvbnMgPyAn0JfQsNCz0YDRg9C30LrQsC4uLicgOiAn0KPQutCw0LbQuNGC0LUg0LHQsNGA0LHQtdGA0LAnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bG9naW5PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubG9naW59IHZhbHVlPXtvcHRpb24ubG9naW59PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbCB8fCBvcHRpb24ubG9naW59XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj7QlNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQsNC60YLQuNCy0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ysg0LjQtyDRgNCw0LfQtNC10LvQsCDCq9CR0LDRgNCx0LXRgNGLwrsuPC9wPlxyXG4gICAgICAgICAgICB7b3B0aW9uc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTQwMFwiPntvcHRpb25zRXJyb3J9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTk1MCBweC0zIHB5LTIgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyh2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3IpICYmIDxFcnJvckJhbm5lciBtZXNzYWdlPXt2YWxpZGF0aW9uRXJyb3IgfHwgZXJyb3J9IC8+fVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWluZGlnby02MDAgcHktMiBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwMFwiIGRpc2FibGVkPXtzZWxlY3REaXNhYmxlZH0+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicpO1xyXG4gICAgICByZXR1cm4gc2F2ZWQgPyBidWlsZFNlc3Npb25QYXlsb2FkKEpTT04ucGFyc2Uoc2F2ZWQpKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlTG9jYWxTdG9yYWdlKCdiYXJiZXIuYWN0aXZlVGFiJywgJ2Rhc2hib2FyZCcpO1xyXG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFyYmVycywgc2V0QmFyYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2JvdFN0YXR1cywgc2V0Qm90U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtib3RTZXR0aW5ncywgc2V0Qm90U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2JvdE1lc3NhZ2VzLCBzZXRCb3RNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpY2Vuc2VTdGF0dXMsIHNldExpY2Vuc2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwZGF0ZUluZm8sIHNldFVwZGF0ZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnNDYWNoZSwgc2V0T3B0aW9uc0NhY2hlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICBjb25zdCBbYXBwb2ludG1lbnRNb2RhbCwgc2V0QXBwb2ludG1lbnRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBvcHRpb25zOiBudWxsLCBpc05ldzogZmFsc2UgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnbG9iYWxFcnJvciwgc2V0R2xvYmFsRXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N5c3RlbUJ1c3ksIHNldFN5c3RlbUJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGggPCAxMDI0KTtcclxuICBjb25zdCBbcmVhbHRpbWVTbmFwc2hvdCwgc2V0UmVhbHRpbWVTbmFwc2hvdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZmF0YWxFcnJvciwgc2V0RmF0YWxFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBzZXJ2aWNlU2F2ZVRpbWVycyA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JhcmJlci1zZXNzaW9uJyk7XHJcbiAgICBzZXRTZXNzaW9uKG51bGwpO1xyXG4gICAgc2V0RGFzaGJvYXJkKG51bGwpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgc2V0UmVhbHRpbWVTbmFwc2hvdChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFwaVJlcXVlc3QgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChlbmRwb2ludCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udG9rZW4pIHRocm93IG5ldyBFcnJvcign0J3QtdGCINCw0LrRgtC40LLQvdC+0Lkg0YHQtdGB0YHQuNC4Jyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udG9rZW59YCxcclxuICAgICAgICAuLi4ob3B0aW9ucy5ib2R5ICYmICFvcHRpb25zLmhlYWRlcnM/LlsnQ29udGVudC1UeXBlJ10gPyB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSA6IHt9KSxcclxuICAgICAgICAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtlbmRwb2ludH1gLCB7IC4uLm9wdGlvbnMsIGhlYWRlcnMgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGhhbmRsZUxvZ291dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0KHQtdGB0YHQuNGPINC40YHRgtC10LrQu9CwJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQt9Cw0L/RgNC+0YHQsCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9LFxyXG4gICAgW3Nlc3Npb24/LnRva2VuLCBoYW5kbGVMb2dvdXRdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBbGwgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0R2xvYmFsRXJyb3IoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvZGFzaGJvYXJkL292ZXJ2aWV3Jyk7XHJcbiAgICAgIHNldERhc2hib2FyZChvdmVydmlldyk7XHJcbiAgICAgIGNvbnN0IHdpdGhGYWxsYmFjayA9IChyZXF1ZXN0LCBmYWxsYmFjaywgbGFiZWwpID0+XHJcbiAgICAgICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsYWJlbH0gZmV0Y2ggc2tpcHBlZDpgLCBlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IFtcclxuICAgICAgICBzZXJ2aWNlc0Z1bGwsXHJcbiAgICAgICAgYmFyYmVyc0Z1bGwsXHJcbiAgICAgICAgYm90U3RhdGUsXHJcbiAgICAgICAgYm90TWVzc2FnZXNQYXlsb2FkLFxyXG4gICAgICAgIGxpY2Vuc2UsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgd2l0aEZhbGxiYWNrKGFwaVJlcXVlc3QoJy9zZXJ2aWNlcy9mdWxsJyksIHsgc2VydmljZXM6IFtdIH0sICdTZXJ2aWNlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYmFyYmVycy9mdWxsJyksIFtdLCAnQmFyYmVycycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvYm90L3N0YXR1cycpLCB7IHN0YXR1czogbnVsbCwgc2V0dGluZ3M6IG51bGwgfSwgJ0JvdCBzdGF0dXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL2JvdC9tZXNzYWdlcycpLCBbXSwgJ0JvdCBtZXNzYWdlcycpLFxyXG4gICAgICAgIHdpdGhGYWxsYmFjayhhcGlSZXF1ZXN0KCcvbGljZW5zZS9zdGF0dXMnKSwgbnVsbCwgJ0xpY2Vuc2UnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soYXBpUmVxdWVzdCgnL3N5c3RlbS91cGRhdGUnKSwgbnVsbCwgJ1VwZGF0ZXMnKSxcclxuICAgICAgICB3aXRoRmFsbGJhY2soXHJcbiAgICAgICAgICBhcGlSZXF1ZXN0KCcvb3B0aW9ucy9hcHBvaW50bWVudHMnKSxcclxuICAgICAgICAgIHsgc3RhdHVzZXM6IFtdLCBiYXJiZXJzOiBbXSwgc2VydmljZXM6IFtdIH0sXHJcbiAgICAgICAgICAnT3B0aW9ucycsXHJcbiAgICAgICAgKSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlcnZpY2VzKHNlcnZpY2VzRnVsbC5zZXJ2aWNlcyB8fCBbXSk7XHJcbiAgICAgIHNldEJhcmJlcnMoYmFyYmVyc0Z1bGwgfHwgb3ZlcnZpZXcuYmFyYmVycyB8fCBbXSk7XHJcbiAgICAgIHNldEJvdFNldHRpbmdzKGJvdFN0YXRlLnNldHRpbmdzIHx8IG92ZXJ2aWV3LmJvdD8uc2V0dGluZ3MgfHwgbnVsbCk7XHJcbiAgICAgIHNldEJvdFN0YXR1cyhib3RTdGF0ZS5zdGF0dXMpO1xyXG4gICAgICBzZXRCb3RNZXNzYWdlcyhib3RNZXNzYWdlc1BheWxvYWQgfHwgW10pO1xyXG4gICAgICBzZXRMaWNlbnNlU3RhdHVzKGxpY2Vuc2UpO1xyXG4gICAgICBzZXRVcGRhdGVJbmZvKHVwZGF0ZSk7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0geyAuLi5vcHRpb25zLCBzdGF0dXNlczogbm9ybWFsaXplU3RhdHVzTGlzdChvcHRpb25zLnN0YXR1c2VzIHx8IFtdKSB9O1xyXG4gICAgICBzZXRPcHRpb25zQ2FjaGUobm9ybWFsaXplZE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaVJlcXVlc3QsIHNlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbj8udG9rZW4pIHtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbj8udG9rZW4sIGZldGNoQWxsXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICAgIHNldFJlYWx0aW1lU25hcHNob3QobnVsbCk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEV2ZW50U291cmNlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHRva2VuUGFyYW0gPSBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbi50b2tlbik7XHJcbiAgICBjb25zdCBzdHJlYW1VcmwgPSBgJHtBUElfQkFTRV9VUkx9L2V2ZW50cy9zdHJlYW0/dG9rZW49JHt0b2tlblBhcmFtfWA7XHJcbiAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShzdHJlYW1VcmwpO1xyXG4gICAgY29uc3QgaGFuZGxlRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBpZiAocGF5bG9hZD8udHlwZSAhPT0gJ2FwcG9pbnRtZW50czp1cGRhdGUnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHBheWxvYWQucGF5bG9hZCB8fCB7fTtcclxuICAgICAgICBzZXRSZWFsdGltZVNuYXBzaG90KHtcclxuICAgICAgICAgIHJvd3M6IEFycmF5LmlzQXJyYXkoZGV0YWlscy5yb3dzKSA/IGRldGFpbHMucm93cyA6IFtdLFxyXG4gICAgICAgICAgc3RhdHM6IGRldGFpbHMuc3RhdHMgfHwge30sXHJcbiAgICAgICAgICB1cGNvbWluZzogQXJyYXkuaXNBcnJheShkZXRhaWxzLnVwY29taW5nKSA/IGRldGFpbHMudXBjb21pbmcgOiBbXSxcclxuICAgICAgICAgIHVwZGF0ZWRBdDogZGV0YWlscy51cGRhdGVkQXQgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYWx0aW1lIGV2ZW50IHBhcnNlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGV2ZW50U291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2FwcG9pbnRtZW50cycsIGhhbmRsZUV2ZW50KTtcclxuICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSAoKSA9PiB7fTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGV2ZW50U291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FwcG9pbnRtZW50cycsIGhhbmRsZUV2ZW50KTtcclxuICAgICAgZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgfSwgW3Nlc3Npb24/LnRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWx0aW1lU25hcHNob3QpIHJldHVybjtcclxuICAgIHNldERhc2hib2FyZCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHMgPSB7IC4uLihwcmV2Py5zdGF0cyB8fCB7fSksIC4uLihyZWFsdGltZVNuYXBzaG90LnN0YXRzIHx8IHt9KSB9O1xyXG4gICAgICBjb25zdCBuZXh0QXBwb2ludG1lbnRzID0ge1xyXG4gICAgICAgIC4uLihwcmV2Py5hcHBvaW50bWVudHMgfHwge30pLFxyXG4gICAgICAgIHVwY29taW5nOiByZWFsdGltZVNuYXBzaG90LnVwY29taW5nIHx8IHByZXY/LmFwcG9pbnRtZW50cz8udXBjb21pbmcgfHwgW10sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghcHJldikge1xyXG4gICAgICAgIHJldHVybiB7IHN0YXRzOiBuZXh0U3RhdHMsIGFwcG9pbnRtZW50czogbmV4dEFwcG9pbnRtZW50cyB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHN0YXRzOiBuZXh0U3RhdHMsIGFwcG9pbnRtZW50czogbmV4dEFwcG9pbnRtZW50cyB9O1xyXG4gICAgfSk7XHJcbiAgfSwgW3JlYWx0aW1lU25hcHNob3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbEVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRldGFpbCA9IGV2ZW50Py5yZWFzb24gfHwgZXZlbnQ/LmVycm9yO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID1cclxuICAgICAgICBkZXRhaWw/Lm1lc3NhZ2UgfHxcclxuICAgICAgICBldmVudD8ubWVzc2FnZSB8fFxyXG4gICAgICAgICh0eXBlb2YgZGV0YWlsID09PSAnc3RyaW5nJyA/IGRldGFpbCA6ICfQndC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsCcpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdHbG9iYWwgVUkgZXJyb3I6JywgZGV0YWlsIHx8IGV2ZW50KTtcclxuICAgICAgc2V0RmF0YWxFcnJvcihtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBoYW5kbGVHbG9iYWxFcnJvcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgaGFuZGxlR2xvYmFsRXJyb3IpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4gKCkgPT4ge1xyXG4gICAgICBzZXJ2aWNlU2F2ZVRpbWVycy5jdXJyZW50LmZvckVhY2goKHRpbWVyKSA9PiBjbGVhclRpbWVvdXQodGltZXIpKTtcclxuICAgICAgc2VydmljZVNhdmVUaW1lcnMuY3VycmVudC5jbGVhcigpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBzZXRBdXRoRXJyb3IoJycpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVzZXJuYW1lID0gcmVzb2x2ZUxvZ2luKHVzZXJuYW1lKTtcclxuICAgIGlmICghbm9ybWFsaXplZFVzZXJuYW1lKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcign0JLRi9Cx0LXRgNC40YLQtSDQsdCw0YDQsdC10YDQsCDQuNC3INGB0L/QuNGB0LrQsCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vbG9naW5gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogbm9ybWFsaXplZFVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIWRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldEF1dGhFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ9Cd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlc3Npb25QYXlsb2FkID0gYnVpbGRTZXNzaW9uUGF5bG9hZCh7IC4uLmRhdGEsIHVzZXJuYW1lOiBub3JtYWxpemVkVXNlcm5hbWUgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYXJiZXItc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb25QYXlsb2FkKSk7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvblBheWxvYWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKCfQodC10YDQstC10YAg0L3QtdC00L7RgdGC0YPQv9C10L0nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYXJiZXJGaWVsZENoYW5nZSA9IChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRCYXJiZXJzKChwcmV2KSA9PiBwcmV2Lm1hcCgoYmFyYmVyKSA9PiAoYmFyYmVyLmlkID09PSBpZCA/IHsgLi4uYmFyYmVyLCBbZmllbGRdOiB2YWx1ZSB9IDogYmFyYmVyKSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZVNlcnZpY2VQYXlsb2FkID0gKHNlcnZpY2UpID0+ICh7XHJcbiAgICAuLi5zZXJ2aWNlLFxyXG4gICAgcHJpY2VzOiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNlcnZpY2UucHJpY2VzIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKV0pXHJcbiAgICApLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkZXJpdmVCYXJiZXJMb2dpbiA9IChiYXJiZXJEYXRhID0ge30pID0+IHJlc29sdmVMb2dpbihiYXJiZXJEYXRhLmxvZ2luIHx8IGJhcmJlckRhdGEubmFtZSB8fCAnJyk7XHJcblxyXG4gIGNvbnN0IGJ1aWxkQmFyYmVyUGF5bG9hZCA9IChiYXJiZXJEYXRhID0ge30sIGZhbGxiYWNrT3JkZXIgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBuYW1lOiBiYXJiZXJEYXRhLm5hbWUgfHwgJycsXHJcbiAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICBkZXNjcmlwdGlvbjogYmFyYmVyRGF0YS5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgcmF0aW5nOiBiYXJiZXJEYXRhLnJhdGluZyB8fCAnJyxcclxuICAgICAgYXZhdGFyVXJsOiBiYXJiZXJEYXRhLmF2YXRhclVybCB8fCAnJyxcclxuICAgICAgY29sb3I6IGJhcmJlckRhdGEuY29sb3IgfHwgJycsXHJcbiAgICAgIGxvZ2luOiBkZXJpdmVCYXJiZXJMb2dpbihiYXJiZXJEYXRhKSxcclxuICAgICAgcGFzc3dvcmQ6IGJhcmJlckRhdGEucGFzc3dvcmQgfHwgJycsXHJcbiAgICAgIHBob25lOiBiYXJiZXJEYXRhLnBob25lIHx8ICcnLFxyXG4gICAgICB0ZWxlZ3JhbUlkOiBiYXJiZXJEYXRhLnRlbGVncmFtSWQgfHwgJycsXHJcbiAgICAgIGlzQWN0aXZlOiBiYXJiZXJEYXRhLmlzQWN0aXZlICE9PSBmYWxzZSxcclxuICAgICAgb3JkZXJJbmRleDogTnVtYmVyKGJhcmJlckRhdGEub3JkZXJJbmRleCA/PyBmYWxsYmFja09yZGVyKSB8fCAwLFxyXG4gICAgfTtcclxuICAgIGlmIChiYXJiZXJEYXRhLmlkKSB7XHJcbiAgICAgIHBheWxvYWQuaWQgPSBiYXJiZXJEYXRhLmlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUJhcmJlciA9IGFzeW5jIChiYXJiZXIpID0+IHtcclxuICAgIGlmICghYmFyYmVyPy5pZCkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlSZXF1ZXN0KGAvQmFyYmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChiYXJiZXIuaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYnVpbGRCYXJiZXJQYXlsb2FkKGJhcmJlcikpIH0pO1xyXG4gICAgICBjb25zdCB1cGRhdGVkQmFyYmVyID0gcmVzcG9uc2UgfHwgYmFyYmVyO1xyXG4gICAgICBzZXRCYXJiZXJzKChwcmV2KSA9PiBwcmV2Lm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IHVwZGF0ZWRCYXJiZXIuaWQgPyB7IC4uLml0ZW0sIC4uLnVwZGF0ZWRCYXJiZXIgfSA6IGl0ZW0pKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVCYXJiZXIgPSBhc3luYyAoYmFyYmVyKSA9PiB7XHJcbiAgICBpZiAoIWJhcmJlcj8uaWQpIHJldHVybjtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ9Cj0LTQsNC70LjRgtGMINCx0LDRgNCx0LXRgNCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8/JykpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9CYXJiZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhcmJlci5pZCl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDRg9C00LDQu9C40YLRjCDQsdCw0YDQsdC10YDQsCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEJhcmJlciA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQubmFtZSB8fCAhcGF5bG9hZC5wYXNzd29yZCkge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcign0JfQsNC/0L7Qu9C90LjRgtC1INC40LzRjywg0LvQvtCz0LjQvSDQuCDQv9Cw0YDQvtC70Ywg0LHQsNGA0LHQtdGA0LAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbmV3QmFyYmVyUGF5bG9hZCA9IGJ1aWxkQmFyYmVyUGF5bG9hZCh7IC4uLnBheWxvYWQsIGlkOiB1bmRlZmluZWQgfSwgYmFyYmVycy5sZW5ndGgpO1xyXG4gICAgICBjb25zdCB7IGlkLCAuLi5ib2R5IH0gPSBuZXdCYXJiZXJQYXlsb2FkO1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KCcvQmFyYmVycycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQtNC+0LHQsNCy0LjRgtGMINCx0LDRgNCx0LXRgNCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZVNlcnZpY2UgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvc2VydmljZXMvZnVsbC8ke2VuY29kZVVSSUNvbXBvbmVudChzZXJ2aWNlLmlkKX1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplU2VydmljZVBheWxvYWQoc2VydmljZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgIGlmICghc2VydmljZT8uaWQpIHJldHVybjtcclxuICAgICAgY29uc3QgdGltZXJzID0gc2VydmljZVNhdmVUaW1lcnMuY3VycmVudDtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHRpbWVycy5nZXQoc2VydmljZS5pZCk7XHJcbiAgICAgIGlmIChleGlzdGluZ1RpbWVyKSBjbGVhclRpbWVvdXQoZXhpc3RpbmdUaW1lcik7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlU2F2ZVNlcnZpY2Uoc2VydmljZSk7XHJcbiAgICAgICAgdGltZXJzLmRlbGV0ZShzZXJ2aWNlLmlkKTtcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgdGltZXJzLnNldChzZXJ2aWNlLmlkLCB0aW1lcik7XHJcbiAgICB9LFxyXG4gICAgW2hhbmRsZVNhdmVTZXJ2aWNlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVNlcnZpY2UgPSBhc3luYyAoc2VydmljZSkgPT4ge1xyXG4gICAgaWYgKCFzZXJ2aWNlPy5pZCkgcmV0dXJuO1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgn0KPQtNCw0LvQuNGC0Ywg0YPRgdC70YPQs9GDPycpKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGlSZXF1ZXN0KGAvc2VydmljZXMvZnVsbC8ke2VuY29kZVVSSUNvbXBvbmVudChzZXJ2aWNlLmlkKX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFNlcnZpY2UgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFwYXlsb2FkLm5hbWUpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9zZXJ2aWNlcy9mdWxsJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplU2VydmljZVBheWxvYWQocGF5bG9hZCkpIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQtNC+0LHQsNCy0LjRgtGMINGD0YHQu9GD0LPRgycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlcnZpY2VGaWVsZENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGlkLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgc2V0U2VydmljZXMoKHByZXYpID0+IHByZXYubWFwKChzZXJ2aWNlKSA9PiAoc2VydmljZS5pZCA9PT0gaWQgPyB7IC4uLnNlcnZpY2UsIFtmaWVsZF06IHZhbHVlIH0gOiBzZXJ2aWNlKSkpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBzZXJ2aWNlcy5maW5kKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBzY2hlZHVsZVNlcnZpY2VBdXRvc2F2ZSh7IC4uLnRhcmdldCwgW2ZpZWxkXTogdmFsdWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VydmljZXMsIHNjaGVkdWxlU2VydmljZUF1dG9zYXZlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlcnZpY2VQcmljZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlcnZpY2VJZCwgYmFyYmVySWQsIHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFNlcnZpY2VzKChwcmV2KSA9PlxyXG4gICAgICAgIHByZXYubWFwKChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VydmljZS5pZCAhPT0gc2VydmljZUlkKSByZXR1cm4gc2VydmljZTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaWNlczogeyAuLi4oc2VydmljZS5wcmljZXMgfHwge30pLCBbYmFyYmVySWRdOiB2YWx1ZSB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBzZXJ2aWNlcy5maW5kKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLmlkID09PSBzZXJ2aWNlSWQpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmUoe1xyXG4gICAgICAgICAgLi4udGFyZ2V0LFxyXG4gICAgICAgICAgcHJpY2VzOiB7IC4uLih0YXJnZXQucHJpY2VzIHx8IHt9KSwgW2JhcmJlcklkXTogdmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzZXJ2aWNlcywgc2NoZWR1bGVTZXJ2aWNlQXV0b3NhdmVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQm90VG9nZ2xlID0gYXN5bmMgKGVuYWJsZWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9ib3Qvc3RhdHVzJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpc0JvdEVuYWJsZWQ6IGVuYWJsZWQgfSkgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC+0LHQvdC+0LLQuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4INCx0L7RgtCwJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQm90QWN0aW9uID0gYXN5bmMgKGFjdGlvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JvdC9zdGF0dXMnLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LLRi9C/0L7Qu9C90LjRgtGMINC00LXQudGB0YLQstC40LUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlU2V0dGluZ3MgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgaWYgKCFib3RTZXR0aW5ncz8uaWQpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9Cb3RTZXR0aW5ncy8ke2VuY29kZVVSSUNvbXBvbmVudChib3RTZXR0aW5ncy5pZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVNZXNzYWdlID0gYXN5bmMgKGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4ge1xyXG4gICAgaWYgKCFwZXJzaXN0KSB7XHJcbiAgICAgIHNldEJvdE1lc3NhZ2VzKChwcmV2KSA9PiBwcmV2Lm1hcCgobWVzc2FnZSkgPT4gKG1lc3NhZ2UuaWQgPT09IGlkID8geyAuLi5kcmFmdCB9IDogbWVzc2FnZSkpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdChgL2JvdC9tZXNzYWdlcy8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGU6IGRyYWZ0LmNvZGUsIHRpdGxlOiBkcmFmdC50aXRsZSwgdGV4dDogZHJhZnQudGV4dCB9KSB9KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmVCYWNrdXAgPSBhc3luYyAoZmlsZW5hbWUpID0+IHtcclxuICAgIGlmICghZmlsZW5hbWUpIHJldHVybjtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oYNCS0L7RgdGB0YLQsNC90L7QstC40YLRjCDQtNCw0L3QvdGL0LUg0LjQtyAke2ZpbGVuYW1lfT9gKSkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL2JhY2t1cHMvcmVzdG9yZScsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGVuYW1lIH0pIH0pO1xyXG4gICAgICBmZXRjaEFsbCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0R2xvYmFsRXJyb3IoZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LHRjdC60LDQvycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJhY2t1cCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ9Ch0L7Qt9C00LDRgtGMINC90L7QstGD0Y4g0YDQtdC30LXRgNCy0L3Rg9GOINC60L7Qv9C40Y4/JykpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaVJlcXVlc3QoJy9iYWNrdXBzL2NyZWF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7Qt9C00LDRgtGMINCx0Y3QutCw0L8nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuUHJvZmlsZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgIHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IG51bGwsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaVJlcXVlc3QoYC91c2VyLXByb2ZpbGUvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogcGF5bG9hZCwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0UHJvZmlsZU1vZGFsKHsgb3BlbjogdHJ1ZSwgZGF0YTogeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0L/RgNC+0YTQuNC70YwnIH0sIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FwaVJlcXVlc3RdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZW5zdXJlT3B0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmIChvcHRpb25zQ2FjaGUpIHJldHVybiBvcHRpb25zQ2FjaGU7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgYXBpUmVxdWVzdCgnL29wdGlvbnMvYXBwb2ludG1lbnRzP2ZvcmNlPTEnKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIHN0YXR1c2VzOiBub3JtYWxpemVTdGF0dXNMaXN0KG9wdGlvbnMuc3RhdHVzZXMgfHwgW10pLFxyXG4gICAgfTtcclxuICAgIHNldE9wdGlvbnNDYWNoZShub3JtYWxpemVkKTtcclxuICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gIH0sIFthcGlSZXF1ZXN0LCBvcHRpb25zQ2FjaGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFwcG9pbnRtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoYXBwb2ludG1lbnQpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGVuc3VyZU9wdGlvbnMoKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCh7IG9wZW46IHRydWUsIGRhdGE6IGFwcG9pbnRtZW50LCBvcHRpb25zLCBpc05ldzogZmFsc2UgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Vuc3VyZU9wdGlvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQXBwb2ludG1lbnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgZW5zdXJlT3B0aW9ucygpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgY29uc3QgZGVmYXVsdFN0YXR1cyA9IG5vcm1hbGl6ZVN0YXR1c1ZhbHVlKG9wdGlvbnMuc3RhdHVzZXM/LlswXSB8fCAn0JDQutGC0LjQstC90LDRjycpO1xyXG4gICAgY29uc3QgZGVmYXVsdEJhcmJlciA9IHBpY2tCYXJiZXJGb3JVc2VyKHNlc3Npb24sIG9wdGlvbnMuYmFyYmVycyB8fCBbXSk7XHJcbiAgICBzZXRBcHBvaW50bWVudE1vZGFsKHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIEN1c3RvbWVyTmFtZTogJycsXHJcbiAgICAgICAgUGhvbmU6ICcnLFxyXG4gICAgICAgIEJhcmJlcjogZGVmYXVsdEJhcmJlcixcclxuICAgICAgICBEYXRlOiB0b2RheSxcclxuICAgICAgICBUaW1lOiAnJyxcclxuICAgICAgICBTdGF0dXM6IGRlZmF1bHRTdGF0dXMsXHJcbiAgICAgICAgU2VydmljZXM6ICcnLFxyXG4gICAgICAgIFVzZXJJRDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIGlzTmV3OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Vuc3VyZU9wdGlvbnMsIHNlc3Npb24/LmRpc3BsYXlOYW1lLCBzZXNzaW9uPy51c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQXBwb2ludG1lbnQgPSBhc3luYyAoeyBpZCwgcGF5bG9hZCwgaXNOZXcgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgYXdhaXQgYXBpUmVxdWVzdCgnL0FwcG9pbnRtZW50cycsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFwaVJlcXVlc3QoYC9BcHBvaW50bWVudHMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHsgbWV0aG9kOiAnUFVUJywgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0QXBwb2ludG1lbnRNb2RhbCgocHJldikgPT4gKHsgLi4ucHJldiwgb3BlbjogZmFsc2UsIGRhdGE6IG51bGwsIGlzTmV3OiBmYWxzZSB9KSk7XHJcbiAgICAgIGZldGNoQWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINGB0L7RhdGA0LDQvdC40YLRjCDQt9Cw0L/QuNGB0YwnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U3lzdGVtQnVzeSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZT9mb3JjZT0xJyk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8oaW5mbyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRHbG9iYWxFcnJvcihlcnJvci5tZXNzYWdlIHx8ICfQndC1INGD0LTQsNC70L7RgdGMINC/0YDQvtCy0LXRgNC40YLRjCDQvtCx0L3QvtCy0LvQtdC90LjRjycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3lzdGVtQnVzeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXBwbHlVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfQntCx0L3QvtCy0LjRgtGMIENSTSDQuCDQsdC+0YLQsCDQtNC+INC/0L7RgdC70LXQtNC90LXQuSDQstC10YDRgdC40Lg/JykpIHJldHVybjtcclxuICAgIHNldFN5c3RlbUJ1c3kodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlSZXF1ZXN0KCcvc3lzdGVtL3VwZGF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XHJcbiAgICAgIHNldFVwZGF0ZUluZm8ocmVzdWx0LmluZm8gfHwgcmVzdWx0KTtcclxuICAgICAgZmV0Y2hBbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEdsb2JhbEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/RgNC40LzQtdC90LjRgtGMINC+0LHQvdC+0LLQu9C10L3QuNC1Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTeXN0ZW1CdXN5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNlc3Npb24/LnRva2VuKSB7XHJcbiAgICByZXR1cm4gPExvZ2luU2NyZWVuIG9uTG9naW49e2hhbmRsZUxvZ2lufSBlcnJvcj17YXV0aEVycm9yfSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckFjdGl2ZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTdGF0ZSAvPjtcclxuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEYXNoYm9hcmRWaWV3XHJcbiAgICAgICAgICAgIGRhdGE9e2Rhc2hib2FyZH1cclxuICAgICAgICAgICAgb25PcGVuQXBwb2ludG1lbnQ9e2hhbmRsZU9wZW5BcHBvaW50bWVudH1cclxuICAgICAgICAgICAgb25PcGVuUHJvZmlsZT17b3BlblByb2ZpbGV9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlQXBwb2ludG1lbnQ9e2hhbmRsZUNyZWF0ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgICAgICBsaXZlTWV0YT17cmVhbHRpbWVTbmFwc2hvdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnYmFyYmVycyc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCYXJiZXJzVmlld1xyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtoYW5kbGVCYXJiZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkFkZD17aGFuZGxlQWRkQmFyYmVyfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlQmFyYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxTZXJ2aWNlc1ZpZXdcclxuICAgICAgICAgICAgc2VydmljZXM9e3NlcnZpY2VzfVxyXG4gICAgICAgICAgICBiYXJiZXJzPXtiYXJiZXJzfVxyXG4gICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2U9e2hhbmRsZVNlcnZpY2VQcmljZUNoYW5nZX1cclxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVNlcnZpY2V9XHJcbiAgICAgICAgICAgIG9uQWRkPXtoYW5kbGVBZGRTZXJ2aWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd0YWJsZXMnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFibGVzV29ya3NwYWNlXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3Q9e2FwaVJlcXVlc3R9XHJcbiAgICAgICAgICAgIHNoYXJlZE9wdGlvbnM9e29wdGlvbnNDYWNoZX1cclxuICAgICAgICAgICAgb25PcHRpb25zVXBkYXRlPXtzZXRPcHRpb25zQ2FjaGV9XHJcbiAgICAgICAgICAgIG9uT3BlblByb2ZpbGU9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICBjbGllbnRzPXtkYXNoYm9hcmQ/LmNsaWVudHMgfHwgW119XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyPXtzZXNzaW9uIHx8IG51bGx9XHJcbiAgICAgICAgICAgIGxpdmVBcHBvaW50bWVudHM9e3JlYWx0aW1lU25hcHNob3Q/LnJvd3MgfHwgbnVsbH1cclxuICAgICAgICAgICAgbGl2ZVVwZGF0ZWRBdD17cmVhbHRpbWVTbmFwc2hvdD8udXBkYXRlZEF0IHx8IG51bGx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ2JvdCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ3N5c3RlbSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cInN5c3RlbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb3RDb250cm9sVmlld1xyXG4gICAgICAgICAgICBzdGF0dXM9e2JvdFN0YXR1c31cclxuICAgICAgICAgICAgc2V0dGluZ3M9e2JvdFNldHRpbmdzfVxyXG4gICAgICAgICAgICBiYWNrdXBzPXtkYXNoYm9hcmQ/LmJhY2t1cHMgfHwgW119XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtib3RNZXNzYWdlc31cclxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVkPXtoYW5kbGVCb3RUb2dnbGV9XHJcbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGhhbmRsZUJvdEFjdGlvbignc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TdG9wPXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3N0b3AnKX1cclxuICAgICAgICAgICAgb25SZXN0YXJ0PXsoKSA9PiBoYW5kbGVCb3RBY3Rpb24oJ3Jlc3RhcnQnKX1cclxuICAgICAgICAgICAgb25TYXZlU2V0dGluZ3M9e2hhbmRsZVNhdmVTZXR0aW5nc31cclxuICAgICAgICAgICAgb25TYXZlTWVzc2FnZT17KGlkLCBkcmFmdCwgcGVyc2lzdCkgPT4gaGFuZGxlU2F2ZU1lc3NhZ2UoaWQsIGRyYWZ0LCBwZXJzaXN0KX1cclxuICAgICAgICAgICAgb25SZXN0b3JlQmFja3VwPXtoYW5kbGVSZXN0b3JlQmFja3VwfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUJhY2t1cD17aGFuZGxlQ3JlYXRlQmFja3VwfVxyXG4gICAgICAgICAgICBsaWNlbnNlU3RhdHVzPXtsaWNlbnNlU3RhdHVzfVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvPXt1cGRhdGVJbmZvfVxyXG4gICAgICAgICAgICBvblJlZnJlc2hVcGRhdGU9e2hhbmRsZVJlZnJlc2hVcGRhdGV9XHJcbiAgICAgICAgICAgIG9uQXBwbHlVcGRhdGU9e2hhbmRsZUFwcGx5VXBkYXRlfVxyXG4gICAgICAgICAgICBzeXN0ZW1CdXN5PXtzeXN0ZW1CdXN5fVxyXG4gICAgICAgICAgICB2aWV3TW9kZT1cImJvdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZhdGFsRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGJnLXNsYXRlLTk1MCBwLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0zIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcm9zZS01MDAvNTAgYmctc2xhdGUtOTAwLzgwIHAtNiBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yb3NlLTIwMFwiPtCa0YDQuNGC0LjRh9C10YHQutCw0Y8g0L7RiNC40LHQutCwINC40L3RgtC10YDRhNC10LnRgdCwPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICDQodC+0L7QsdGJ0LXQvdC40LUg0L3QuNC20LUg0LzQvtC20L3QviDQv9C10YDQtdGB0LvQsNGC0Ywg0YDQsNC30YDQsNCx0L7RgtGH0LjQutGDLiDQn9C+0YHQu9C1INC40YHQv9GA0LDQstC70LXQvdC40Y8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIHAtNCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LXJvc2UtMjAwXCI+XHJcbiAgICAgICAgICAgIHtmYXRhbEVycm9yfVxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTYwMCBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNsYXRlLTgwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAge2lzTW9iaWxlICYmIDxNb2JpbGVUYWJzIGFjdGl2ZVRhYj17YWN0aXZlVGFifSBvbkNoYW5nZT17c2V0QWN0aXZlVGFifSBzZXNzaW9uPXtzZXNzaW9ufSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXIgc2Vzc2lvbj17c2Vzc2lvbn0gYWN0aXZlVGFiPXthY3RpdmVUYWJ9IG9uQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9IG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBwLTQgbWQ6cC04XCI+XHJcbiAgICAgICAgICB7Z2xvYmFsRXJyb3IgJiYgPEVycm9yQmFubmVyIG1lc3NhZ2U9e2dsb2JhbEVycm9yfSAvPn1cclxuICAgICAgICAgIHtyZW5kZXJBY3RpdmUoKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZmlsZU1vZGFsIHN0YXRlPXtwcm9maWxlTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldFByb2ZpbGVNb2RhbCh7IG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KX0gLz5cclxuICAgICAgPEFwcG9pbnRtZW50TW9kYWxcclxuICAgICAgICBvcGVuPXthcHBvaW50bWVudE1vZGFsLm9wZW59XHJcbiAgICAgICAgYXBwb2ludG1lbnQ9e2FwcG9pbnRtZW50TW9kYWwuZGF0YX1cclxuICAgICAgICBvcHRpb25zPXthcHBvaW50bWVudE1vZGFsLm9wdGlvbnMgfHwgb3B0aW9uc0NhY2hlIHx8IHt9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFwcG9pbnRtZW50TW9kYWwoKHByZXYpID0+ICh7IC4uLnByZXYsIG9wZW46IGZhbHNlLCBkYXRhOiBudWxsLCBpc05ldzogZmFsc2UgfSkpfVxyXG4gICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZUFwcG9pbnRtZW50fVxyXG4gICAgICAgIGlzTmV3PXthcHBvaW50bWVudE1vZGFsLmlzTmV3fVxyXG4gICAgICAgIGNsaWVudHM9e2Rhc2hib2FyZD8uY2xpZW50cyB8fCBbXX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5sZXQgcmVhY3RBcHBSb290ID0gbnVsbDtcclxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICB0cnkge1xyXG4gICAgaWYgKCFyb290RWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0L3QsNC50LTQtdC9INC60L7QvdGC0LXQudC90LXRgCAjcm9vdCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZWFjdEFwcFJvb3QpIHtcclxuICAgICAgcmVhY3RBcHBSb290ID1cclxuICAgICAgICB0eXBlb2YgY3JlYXRlUm9vdCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyBjcmVhdGVSb290KHJvb3RFbGVtZW50KVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgcmVuZGVyOiAobm9kZSkgPT4gUmVhY3RET00ucmVuZGVyKG5vZGUsIHJvb3RFbGVtZW50KSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlYWN0QXBwUm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhdGFsIHJlbmRlciBlcnJvcjonLCBlcnJvcik7XHJcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcclxuICAgICAgcm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgZ2FwOjE2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjA2MTc7XHJcbiAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6NDgwcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0OCwxMTMsMTEzLDAuNCk7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuODUpO2JvcmRlci1yYWRpdXM6MTZweDtwYWRkaW5nOjI0cHg7XCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZWNhY2E7bWFyZ2luLWJvdHRvbToxMnB4O1wiPlxyXG4gICAgICAgICAgICAgINCe0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQuNC90YLQtdGA0YTQtdC50YHQsFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Y29sb3I6I2NiZDVmNTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcIj5cclxuICAgICAgICAgICAgICAke2Vycm9yPy5tZXNzYWdlIHx8ICfQodC80L7RgtGA0LjRgtC1INC60L7QvdGB0L7Qu9GMINCx0YDQsNGD0LfQtdGA0LAgKEYxMiknfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjNGI1NTYzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjk5OXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjhweCAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIFwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcIj5cclxuICAgICAgICAgICAg0J/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0YxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnJlbmRlckFwcCgpO1xyXG5cclxu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LE9BQVFvbUIsbUJBQW1CLENBQUMsVUFBQ2wwQixJQUFJO1FBQUEsT0FBQStDLGFBQUEsQ0FBQUEsYUFBQSxLQUFXL0MsSUFBSTtVQUFFd1ksSUFBSSxFQUFFLEtBQUs7VUFBRTNJLElBQUksRUFBRSxJQUFJO1VBQUUyVSxLQUFLLEVBQUU7UUFBSztNQUFBLENBQUcsQ0FBQztJQUFBLENBQUM7SUFDbkcxTyxNQUFNLEVBQUU4cUIscUJBQXNCO0lBQzlCcGMsS0FBSyxFQUFFeVAsZ0JBQWdCLENBQUN6UCxLQUFNO0lBQzlCL0csT0FBTyxFQUFFLENBQUFvVSxTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRXBVLE9BQU8sS0FBSTtFQUFHLENBQ25DLENBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxJQUFJeWtCLFlBQVksR0FBRyxJQUFJO0FBQ3ZCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFDdEIsSUFBTUMsV0FBVyxHQUFHOWdDLFFBQVEsQ0FBQytnQyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQ25ELElBQUk7SUFDRixJQUFJLENBQUNELFdBQVcsRUFBRTtNQUNoQixNQUFNLElBQUlqZ0MsS0FBSyxDQUFDLDJCQUEyQixDQUFDO0lBQzlDO0lBQ0EsSUFBSSxDQUFDKy9CLFlBQVksRUFBRTtNQUNqQkEsWUFBWSxHQUNWLE9BQU8zbUMsVUFBVSxLQUFLLFVBQVUsR0FDNUJBLFVBQVUsQ0FBQzZtQyxXQUFXLENBQUMsR0FDdkI7UUFDRUUsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUdDLElBQUk7VUFBQSxPQUFLbG5DLFFBQVEsQ0FBQ2luQyxNQUFNLENBQUNDLElBQUksRUFBRUgsV0FBVyxDQUFDO1FBQUE7TUFDdEQsQ0FBQztJQUNUO0lBQ0FGLFlBQVksQ0FBQ0ksTUFBTSxjQUFDMW5DLEtBQUEsQ0FBQWdSLGFBQUEsQ0FBQ3VsQixHQUFHLE1BQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUMsQ0FBQyxPQUFPMXhCLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDO0lBQzNDLElBQUkyaUMsV0FBVyxFQUFFO01BQ2ZBLFdBQVcsQ0FBQ0ksU0FBUyx1OEJBQUF2Z0MsTUFBQSxDQW1CWCxDQUFBeEMsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV1TSxPQUFPLEtBQUksaUNBQWlDLHFjQWM1RDtJQUNIO0VBQ0Y7QUFDRixDQUFDO0FBRURtMkIsU0FBUyxDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=