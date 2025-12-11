"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useCallback = _React.useCallback,
  useRef = _React.useRef;
var BOT_BUTTON_TYPES = [{
  id: "screen",
  label: "Переход на экран",
  emoji: "🧭"
}, {
  id: "book",
  label: "Записаться",
  emoji: "🗓️"
}, {
  id: "description",
  label: "Описание",
  emoji: "📝"
}, {
  id: "profile",
  label: "Профиль",
  emoji: "👤"
}, {
  id: "userAppointments",
  label: "Мои записи",
  emoji: "📔"
}, {
  id: "custom",
  label: "Своя кнопка",
  emoji: "✨"
}];
var BOT_BUTTON_TYPE_SET = new Set(BOT_BUTTON_TYPES.map(function (item) {
  return item.id;
}));
var createDragPreview = function createDragPreview(node, startEvent) {
  var _startEvent$currentTa, _startEvent$currentTa2, _node$getBoundingClie, _node$getBoundingClie2, _clone$classList;
  if (!node) return null;
  var rect = startEvent === null || startEvent === void 0 || (_startEvent$currentTa = startEvent.currentTarget) === null || _startEvent$currentTa === void 0 || (_startEvent$currentTa2 = _startEvent$currentTa.getBoundingClientRect) === null || _startEvent$currentTa2 === void 0 ? void 0 : _startEvent$currentTa2.call(_startEvent$currentTa);
  var clone = node.cloneNode(true);
  var width = (rect === null || rect === void 0 ? void 0 : rect.width) || ((_node$getBoundingClie = node.getBoundingClientRect) === null || _node$getBoundingClie === void 0 || (_node$getBoundingClie = _node$getBoundingClie.call(node)) === null || _node$getBoundingClie === void 0 ? void 0 : _node$getBoundingClie.width) || node.offsetWidth;
  var height = (rect === null || rect === void 0 ? void 0 : rect.height) || ((_node$getBoundingClie2 = node.getBoundingClientRect) === null || _node$getBoundingClie2 === void 0 || (_node$getBoundingClie2 = _node$getBoundingClie2.call(node)) === null || _node$getBoundingClie2 === void 0 ? void 0 : _node$getBoundingClie2.height) || node.offsetHeight;
  if (width) clone.style.width = "".concat(width, "px");
  if (height) clone.style.height = "".concat(height, "px");
  clone.style.position = "fixed";
  clone.style.top = "0";
  clone.style.left = "0";
  clone.style.transform = "translate(-9999px,-9999px) scale(1)";
  clone.style.pointerEvents = "none";
  clone.style.transition = "none";
  clone.style.willChange = "transform";
  clone.style.boxShadow = "0 18px 45px rgba(99, 102, 241, 0.35)";
  clone.style.zIndex = "9999";
  clone.style.opacity = "0.95";
  (_clone$classList = clone.classList) === null || _clone$classList === void 0 || _clone$classList.add("drag-shadow");
  document.body.appendChild(clone);
  var offsetX = rect ? startEvent.clientX - rect.left : clone.offsetWidth / 2;
  var offsetY = rect ? startEvent.clientY - rect.top : clone.offsetHeight / 2;
  return {
    clone: clone,
    offsetX: offsetX,
    offsetY: offsetY,
    update: function update(x, y) {
      clone.style.transform = "translate(".concat(x - offsetX, "px, ").concat(y - offsetY, "px)");
      clone.style.visibility = "visible";
    },
    cleanup: function cleanup() {
      if (clone.parentNode) clone.parentNode.removeChild(clone);
    }
  };
};
var destroyDragPreview = function destroyDragPreview(clone) {
  var _clone$cleanup;
  if (!clone) return;
  (_clone$cleanup = clone.cleanup) === null || _clone$cleanup === void 0 || _clone$cleanup.call(clone);
  var node = clone.clone || clone;
  if (node !== null && node !== void 0 && node.parentNode) node.parentNode.removeChild(node);
};
var sanitizeId = function sanitizeId() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return value.toString().trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/(^-|-$)/g, "") || "item";
};
var sortButtons = function sortButtons() {
  var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return _toConsumableArray(buttons).sort(function (a, b) {
    var _a$row, _b$row, _a$order, _b$order;
    return ((_a$row = a.row) !== null && _a$row !== void 0 ? _a$row : 0) - ((_b$row = b.row) !== null && _b$row !== void 0 ? _b$row : 0) || ((_a$order = a.order) !== null && _a$order !== void 0 ? _a$order : 0) - ((_b$order = b.order) !== null && _b$order !== void 0 ? _b$order : 0);
  });
};
var normalizeButtonOrder = function normalizeButtonOrder() {
  var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sorted = sortButtons(_toConsumableArray(buttons));
  var currentRow = null;
  var normalizedRow = -1;
  var order = 0;
  return sorted.map(function (btn) {
    if (currentRow === null || btn.row !== currentRow) {
      currentRow = btn.row;
      normalizedRow += 1;
      order = 0;
    }
    var next = _objectSpread(_objectSpread({}, btn), {}, {
      row: normalizedRow,
      order: order
    });
    order += 1;
    return next;
  });
};
var insertButtonAtPosition = function insertButtonAtPosition() {
  var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var button = arguments.length > 1 ? arguments[1] : undefined;
  var targetRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var targetOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (!button) return buttons;
  var _options$createNewRow = options.createNewRow,
    createNewRow = _options$createNewRow === void 0 ? false : _options$createNewRow;
  var filtered = buttons.filter(function (btn) {
    return btn.id !== button.id;
  });
  var rowsMap = new Map();
  sortButtons(filtered).forEach(function (btn) {
    var rowId = Number.isFinite(btn.row) ? Number(btn.row) : 0;
    if (!rowsMap.has(rowId)) rowsMap.set(rowId, []);
    rowsMap.get(rowId).push(btn);
  });
  var rowEntries = Array.from(rowsMap.entries()).sort(function (a, b) {
    return a[0] - b[0];
  });
  if (createNewRow) {
    rowEntries = rowEntries.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        rowId = _ref2[0],
        list = _ref2[1];
      return [rowId >= targetRow ? rowId + 1 : rowId, list];
    }).sort(function (a, b) {
      return a[0] - b[0];
    });
  }
  var rows = new Map(rowEntries);
  var rowList = rows.get(targetRow) ? _toConsumableArray(rows.get(targetRow)) : [];
  var insertIndex = Math.min(Math.max(targetOrder, 0), rowList.length);
  rowList.splice(insertIndex, 0, _objectSpread(_objectSpread({}, button), {}, {
    row: targetRow,
    order: insertIndex
  }));
  rows.set(targetRow, rowList);
  var rebuilt = [];
  Array.from(rows.entries()).sort(function (a, b) {
    return a[0] - b[0];
  }).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      rowId = _ref4[0],
      list = _ref4[1];
    sortButtons(list).forEach(function (btn, idx) {
      rebuilt.push(_objectSpread(_objectSpread({}, btn), {}, {
        row: rowId,
        order: idx
      }));
    });
  });
  return normalizeButtonOrder(rebuilt);
};
var normalizeButton = function normalizeButton(btn) {
  var _btn$payload;
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var screenId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "screen";
  var id = sanitizeId((btn === null || btn === void 0 ? void 0 : btn.id) || "btn-".concat(screenId, "-").concat(idx + 1));
  var label = ((btn === null || btn === void 0 ? void 0 : btn.label) || (btn === null || btn === void 0 ? void 0 : btn.text) || "\u041A\u043D\u043E\u043F\u043A\u0430 ".concat(idx + 1)).toString();
  var type = BOT_BUTTON_TYPE_SET.has(btn === null || btn === void 0 ? void 0 : btn.type) ? btn.type : ["staff", "service", "date", "time"].includes(btn === null || btn === void 0 ? void 0 : btn.type) ? "book" : "screen";
  var targetScreenId = (btn === null || btn === void 0 ? void 0 : btn.targetScreenId) || (btn === null || btn === void 0 ? void 0 : btn.target) || null;
  var payload = (_btn$payload = btn === null || btn === void 0 ? void 0 : btn.payload) !== null && _btn$payload !== void 0 ? _btn$payload : "";
  var row = Number.isFinite(btn === null || btn === void 0 ? void 0 : btn.row) ? Number(btn.row) : Math.floor(idx / 2);
  var order = Number.isFinite(btn === null || btn === void 0 ? void 0 : btn.order) ? Number(btn.order) : idx;
  return {
    id: id,
    label: label,
    type: type,
    targetScreenId: targetScreenId,
    payload: payload,
    row: row,
    order: order
  };
};
var normalizeScreen = function normalizeScreen(screen) {
  var _ref5, _screen$message;
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var id = sanitizeId((screen === null || screen === void 0 ? void 0 : screen.id) || "screen-".concat(idx + 1));
  var title = ((screen === null || screen === void 0 ? void 0 : screen.title) || (screen === null || screen === void 0 ? void 0 : screen.name) || "\u042D\u043A\u0440\u0430\u043D ".concat(idx + 1)).toString();
  var message = (_ref5 = (_screen$message = screen === null || screen === void 0 ? void 0 : screen.message) !== null && _screen$message !== void 0 ? _screen$message : screen === null || screen === void 0 ? void 0 : screen.text) !== null && _ref5 !== void 0 ? _ref5 : "";
  var imageUrl = (screen === null || screen === void 0 ? void 0 : screen.imageUrl) || (screen === null || screen === void 0 ? void 0 : screen.image) || "";
  var buttons = Array.isArray(screen === null || screen === void 0 ? void 0 : screen.buttons) ? normalizeButtonOrder(screen.buttons.map(function (btn, i) {
    return normalizeButton(btn, i, id);
  })) : [];
  return {
    id: id,
    title: title,
    message: message,
    imageUrl: imageUrl,
    buttons: buttons
  };
};
var normalizeMenuDraft = function normalizeMenuDraft(menu) {
  var screens = Array.isArray(menu === null || menu === void 0 ? void 0 : menu.screens) && menu.screens.length ? menu.screens.map(function (scr, idx) {
    return normalizeScreen(scr, idx);
  }) : [normalizeScreen({
    id: "main",
    title: "Главное меню",
    message: "Добро пожаловать!",
    buttons: []
  }, 0)];
  var buttonTypes = Array.isArray(menu === null || menu === void 0 ? void 0 : menu.buttonTypes) && menu.buttonTypes.length ? menu.buttonTypes : BOT_BUTTON_TYPES;
  var version = Number(menu === null || menu === void 0 ? void 0 : menu.version) || 1;
  var updatedAt = (menu === null || menu === void 0 ? void 0 : menu.updatedAt) || new Date().toISOString();
  return {
    version: version,
    updatedAt: updatedAt,
    screens: screens,
    buttonTypes: buttonTypes
  };
};
var readFileAsDataUrl = function readFileAsDataUrl(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      return resolve(reader.result || "");
    };
    reader.onerror = function (error) {
      return reject(error);
    };
    reader.readAsDataURL(file);
  });
};
var ButtonTypeBadge = function ButtonTypeBadge(_ref6) {
  var type = _ref6.type;
  var item = BOT_BUTTON_TYPES.find(function (entry) {
    return entry.id === type;
  });
  if (!item) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/10"
  }, /*#__PURE__*/React.createElement("span", null, item.emoji || "⚡"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]"
  }, item.label));
};
var ButtonEditPanel = function ButtonEditPanel(_ref7) {
  var button = _ref7.button,
    screens = _ref7.screens,
    _onChange = _ref7.onChange,
    onRemove = _ref7.onRemove,
    onDropSelect = _ref7.onDropSelect,
    isEditing = _ref7.isEditing,
    isDropTargetActive = _ref7.isDropTargetActive,
    isDragging = _ref7.isDragging,
    _ref7$panelRef = _ref7.panelRef,
    panelRef = _ref7$panelRef === void 0 ? null : _ref7$panelRef;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragActive = _useState2[0],
    setIsDragActive = _useState2[1];
  var dragActiveRef = useRef(false);
  var dropHandlers = {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      if (!dragActiveRef.current) {
        dragActiveRef.current = true;
        setIsDragActive(true);
      }
    },
    onDrop: function onDrop(e) {
      onDropSelect === null || onDropSelect === void 0 || onDropSelect(e);
      if (dragActiveRef.current) {
        dragActiveRef.current = false;
        setIsDragActive(false);
      }
    },
    onDragLeave: function onDragLeave() {
      if (dragActiveRef.current) {
        dragActiveRef.current = false;
        setIsDragActive(false);
      }
    }
  };
  if (!button) {
    return /*#__PURE__*/React.createElement("div", _extends({}, dropHandlers, {
      className: "rounded-3xl border border-dashed border-indigo-500/40 bg-slate-900/70 p-3 text-slate-300 shadow-inner transition-all duration-300 ".concat(isDragActive ? "scale-[1.01] ring-2 ring-indigo-400/60 shadow-[0_15px_40px_rgba(99,102,241,0.25)]" : "")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-white/80"
    }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0441\u044E\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0435\u0451 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400"
    }, "\u0421\u0435\u043A\u0446\u0438\u044F \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u0438 \u043F\u0440\u0438\u0442\u044F\u043D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442."));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, dropHandlers, {
    ref: panelRef,
    className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-900/70 p-2.5 shadow-2xl ring-1 ring-indigo-800/50 transition-all duration-300 sm:p-3 ".concat(isDragActive ? "scale-[1.01] ring-2 ring-indigo-400/70 shadow-[0_20px_70px_rgba(99,102,241,0.35)]" : "", " ").concat(isDragging ? "ring-2 ring-indigo-400/70 scale-[1.01] animate-[magnetPull_0.9s_ease-in-out_infinite]" : "", " ").concat(isDropTargetActive ? "ring-2 ring-emerald-400/70 scale-[1.01]" : "")
  }), isDragging && /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 shadow-lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDDD1\uFE0F"))), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_30%)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative space-y-2.5 sm:space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] uppercase tracking-wide text-slate-400"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043D\u043E\u043F\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-white"
  }, button.label)), /*#__PURE__*/React.createElement(ButtonTypeBadge, {
    type: button.type
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-slate-400"
  }, "\u0422\u0435\u043A\u0441\u0442"), /*#__PURE__*/React.createElement("input", {
    value: button.label,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, button), {}, {
        label: e.target.value
      }));
    },
    disabled: !isEditing,
    className: "mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-slate-400"
  }, "\u0422\u0438\u043F"), /*#__PURE__*/React.createElement("select", {
    value: button.type,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, button), {}, {
        type: e.target.value
      }));
    },
    disabled: !isEditing,
    className: "mt-1 w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
  }, BOT_BUTTON_TYPES.map(function (type) {
    return /*#__PURE__*/React.createElement("option", {
      key: type.id,
      value: type.id
    }, type.label);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-slate-400"
  }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D"), /*#__PURE__*/React.createElement("select", {
    value: button.targetScreenId || "",
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, button), {}, {
        targetScreenId: e.target.value || null
      }));
    },
    disabled: !isEditing,
    className: "mt-1 w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), screens.map(function (screen) {
    return /*#__PURE__*/React.createElement("option", {
      key: screen.id,
      value: screen.id
    }, screen.title);
  }))))));
};
var ChatPreview = function ChatPreview(_ref8) {
  var screen = _ref8.screen,
    screens = _ref8.screens,
    onSelectButton = _ref8.onSelectButton,
    onNavigate = _ref8.onNavigate,
    onMoveButton = _ref8.onMoveButton,
    onAddFromPalette = _ref8.onAddFromPalette,
    onRemoveButton = _ref8.onRemoveButton,
    onImageChange = _ref8.onImageChange,
    onMessageChange = _ref8.onMessageChange,
    onTitleChange = _ref8.onTitleChange,
    dropZones = _ref8.dropZones,
    isEditing = _ref8.isEditing,
    onDropZoneHoverChange = _ref8.onDropZoneHoverChange,
    onDragStateChange = _ref8.onDragStateChange,
    galleryImages = _ref8.galleryImages,
    onSelectGalleryImage = _ref8.onSelectGalleryImage,
    onUploadImage = _ref8.onUploadImage,
    _ref8$isGalleryLoadin = _ref8.isGalleryLoading,
    isGalleryLoading = _ref8$isGalleryLoadin === void 0 ? false : _ref8$isGalleryLoadin,
    onToggleEditing = _ref8.onToggleEditing,
    onSave = _ref8.onSave,
    _ref8$isSaving = _ref8.isSaving,
    isSaving = _ref8$isSaving === void 0 ? false : _ref8$isSaving,
    _ref8$isLoading = _ref8.isLoading,
    isLoading = _ref8$isLoading === void 0 ? false : _ref8$isLoading;
  var fileInputRef = useRef(null);
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    draggingId = _useState4[0],
    setDraggingId = _useState4[1];
  var dragPreviewRef = useRef(null);
  var dragPayloadRef = useRef(null);
  var dragMoveFrameRef = useRef(null);
  var dragMoveCoordsRef = useRef(null);
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    dropRowHighlight = _useState6[0],
    setDropRowHighlight = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    dropOrderHighlight = _useState8[0],
    setDropOrderHighlight = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    dragState = _useState0[0],
    setDragState = _useState0[1];
  var rowsContainerRef = useRef(null);
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    uploadingImage = _useState10[0],
    setUploadingImage = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    imageError = _useState12[0],
    setImageError = _useState12[1];
  var messageRef = useRef(null);
  var rows = useMemo(function () {
    var rowsMap = new Map();
    ((screen === null || screen === void 0 ? void 0 : screen.buttons) || []).forEach(function (btn) {
      var rowIndex = Number(btn.row || 0);
      if (!rowsMap.has(rowIndex)) rowsMap.set(rowIndex, []);
      rowsMap.get(rowIndex).push(btn);
    });
    return Array.from(rowsMap.entries()).sort(function (a, b) {
      return a[0] - b[0];
    }).map(function (_ref9) {
      var _ref0 = _slicedToArray(_ref9, 2),
        rowId = _ref0[0],
        btns = _ref0[1];
      return {
        rowId: rowId,
        buttons: btns.sort(function (a, b) {
          var _a$order2, _b$order2;
          return ((_a$order2 = a.order) !== null && _a$order2 !== void 0 ? _a$order2 : 0) - ((_b$order2 = b.order) !== null && _b$order2 !== void 0 ? _b$order2 : 0);
        })
      };
    });
  }, [screen]);
  var galleryList = useMemo(function () {
    return Array.isArray(galleryImages) ? galleryImages : [];
  }, [galleryImages]);
  var topRowValue = useMemo(function () {
    var _rows$0$rowId, _rows$;
    return ((_rows$0$rowId = (_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.rowId) !== null && _rows$0$rowId !== void 0 ? _rows$0$rowId : 0) - 0.5;
  }, [rows]);
  var bottomRowValue = useMemo(function () {
    var _rows$rowId, _rows;
    return ((_rows$rowId = (_rows = rows[rows.length - 1]) === null || _rows === void 0 ? void 0 : _rows.rowId) !== null && _rows$rowId !== void 0 ? _rows$rowId : 0) + 0.5;
  }, [rows]);
  var autosizeTextarea = useCallback(function (node) {
    if (!node) return;
    node.style.height = "auto";
    node.style.height = "".concat(node.scrollHeight, "px");
  }, []);
  var isInsideDropZone = useCallback(function (event, ref) {
    if (!event || !(ref !== null && ref !== void 0 && ref.current)) return false;
    var rect = ref.current.getBoundingClientRect();
    var clientX = event.clientX,
      clientY = event.clientY;
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  }, []);
  useEffect(function () {
    return function () {
      return destroyDragPreview(dragPreviewRef.current);
    };
  }, []);
  useEffect(function () {
    window.__botMenuBeginDrag = beginDrag;
    return function () {
      if (window.__botMenuBeginDrag === beginDrag) {
        delete window.__botMenuBeginDrag;
      }
    };
  }, [beginDrag]);
  var clearPreview = function clearPreview() {
    destroyDragPreview(dragPreviewRef.current);
    dragPreviewRef.current = null;
  };
  var placePayload = function placePayload(payload, rowIndex) {
    var orderIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var createNewRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!payload) return;
    if (payload.source === "palette" && payload.type) {
      onAddFromPalette === null || onAddFromPalette === void 0 || onAddFromPalette(payload.type, rowIndex, orderIndex, createNewRow);
      return;
    }
    if (payload.id) {
      onMoveButton === null || onMoveButton === void 0 || onMoveButton(payload.id, rowIndex, orderIndex, createNewRow);
    }
  };
  var handleImageFile = useCallback(/*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(file) {
      var _file$type, _file$type$startsWith;
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!file || !isEditing)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if ((_file$type = file.type) !== null && _file$type !== void 0 && (_file$type$startsWith = _file$type.startsWith) !== null && _file$type$startsWith !== void 0 && _file$type$startsWith.call(_file$type, "image/")) {
              _context.n = 2;
              break;
            }
            setImageError("Загрузите файл изображения.");
            return _context.a(2);
          case 2:
            setImageError("");
            if (!(typeof onUploadImage === "function")) {
              _context.n = 8;
              break;
            }
            setUploadingImage(true);
            _context.p = 3;
            _context.n = 4;
            return onUploadImage(file);
          case 4:
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error("Menu image upload error", _t);
            setImageError((_t === null || _t === void 0 ? void 0 : _t.message) || "Не удалось загрузить изображение");
          case 6:
            _context.p = 6;
            setUploadingImage(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
          case 8:
            if (typeof onImageChange === "function") {
              onImageChange(file);
            }
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[3, 5, 6, 7]]);
    }));
    return function (_x) {
      return _ref1.apply(this, arguments);
    };
  }(), [isEditing, onImageChange, onUploadImage]);
  var handleGalleryPick = useCallback(function (src) {
    if (!isEditing || !src) return;
    onSelectGalleryImage === null || onSelectGalleryImage === void 0 || onSelectGalleryImage(src);
  }, [isEditing, onSelectGalleryImage]);
  var handleMessageInput = useCallback(function (event) {
    var _event$target;
    autosizeTextarea(event === null || event === void 0 ? void 0 : event.target);
    onMessageChange === null || onMessageChange === void 0 || onMessageChange((event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) || "");
  }, [autosizeTextarea, onMessageChange]);
  useEffect(function () {
    if (!dragState) return;
    var handleMove = function handleMove(event) {
      var _rowsContainerRef$cur, _rowsContainerRef$cur2, _event$target2, _event$target2$closes, _event$target3, _event$target3$closes;
      event.preventDefault();
      dragMoveCoordsRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      if (!dragMoveFrameRef.current) {
        dragMoveFrameRef.current = requestAnimationFrame(function () {
          dragMoveFrameRef.current = null;
          var coords = dragMoveCoordsRef.current;
          if (coords) {
            var _dragPreviewRef$curre, _dragPreviewRef$curre2;
            (_dragPreviewRef$curre = dragPreviewRef.current) === null || _dragPreviewRef$curre === void 0 || (_dragPreviewRef$curre2 = _dragPreviewRef$curre.update) === null || _dragPreviewRef$curre2 === void 0 || _dragPreviewRef$curre2.call(_dragPreviewRef$curre, coords.x, coords.y);
          }
        });
      }
      var nextZone = isInsideDropZone(event, dropZones === null || dropZones === void 0 ? void 0 : dropZones.settingsRef) ? "settings" : isInsideDropZone(event, dropZones === null || dropZones === void 0 ? void 0 : dropZones.paletteRef) ? "palette" : null;
      onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(nextZone);
      var containerRect = (_rowsContainerRef$cur = rowsContainerRef.current) === null || _rowsContainerRef$cur === void 0 || (_rowsContainerRef$cur2 = _rowsContainerRef$cur.getBoundingClientRect) === null || _rowsContainerRef$cur2 === void 0 ? void 0 : _rowsContainerRef$cur2.call(_rowsContainerRef$cur);
      if (containerRect) {
        if (event.clientY < containerRect.top - 12) {
          setDropRowHighlight(topRowValue);
          setDropOrderHighlight(0);
          return;
        }
        if (event.clientY > containerRect.bottom + 12) {
          setDropRowHighlight(bottomRowValue);
          setDropOrderHighlight(0);
          return;
        }
      }
      var newRowTarget = (_event$target2 = event.target) === null || _event$target2 === void 0 || (_event$target2$closes = _event$target2.closest) === null || _event$target2$closes === void 0 ? void 0 : _event$target2$closes.call(_event$target2, "[data-new-row-target]");
      var rowNode = (_event$target3 = event.target) === null || _event$target3 === void 0 || (_event$target3$closes = _event$target3.closest) === null || _event$target3$closes === void 0 ? void 0 : _event$target3$closes.call(_event$target3, "[data-row-id]");
      if (!rowNode && !newRowTarget) {
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
      }
    };
    var handleUp = function handleUp(event) {
      event.preventDefault();
      commitDrop(event);
    };
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
      }
    };
    document.addEventListener("pointermove", handleMove, {
      passive: false
    });
    document.addEventListener("pointerup", handleUp, {
      passive: false
    });
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      if (dragMoveFrameRef.current) {
        cancelAnimationFrame(dragMoveFrameRef.current);
        dragMoveFrameRef.current = null;
      }
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
      document.removeEventListener("keydown", handleKeyDown);
      onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
    };
  }, [bottomRowValue, dragState, dropZones, isInsideDropZone, onDropZoneHoverChange, topRowValue]);
  useEffect(function () {
    autosizeTextarea(messageRef.current);
  }, [autosizeTextarea, screen === null || screen === void 0 ? void 0 : screen.message]);
  useEffect(function () {
    onDragStateChange === null || onDragStateChange === void 0 || onDragStateChange(!!dragState);
  }, [dragState, onDragStateChange]);
  var beginDrag = useCallback(function (payload, originNode, event) {
    var _payload$fromRow, _payload$fromOrder, _preview$update;
    if (!event || !isEditing) return;
    event.preventDefault();
    event.stopPropagation();
    dragPayloadRef.current = payload;
    setDropRowHighlight((_payload$fromRow = payload.fromRow) !== null && _payload$fromRow !== void 0 ? _payload$fromRow : null);
    setDropOrderHighlight((_payload$fromOrder = payload.fromOrder) !== null && _payload$fromOrder !== void 0 ? _payload$fromOrder : null);
    setDragState(payload);
    setDraggingId(payload.id || null);
    var preview = createDragPreview(originNode, event);
    dragPreviewRef.current = preview;
    preview === null || preview === void 0 || (_preview$update = preview.update) === null || _preview$update === void 0 || _preview$update.call(preview, event.clientX, event.clientY);
  }, [isEditing]);
  var commitDrop = function commitDrop(event) {
    var _ref10, _ref11;
    if (!dragState) return;
    if (event) {
      if (isInsideDropZone(event, dropZones === null || dropZones === void 0 ? void 0 : dropZones.settingsRef) && dragState.id) {
        onSelectButton === null || onSelectButton === void 0 || onSelectButton(dragState.id);
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
        onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
        return;
      }
      if (isInsideDropZone(event, dropZones === null || dropZones === void 0 ? void 0 : dropZones.paletteRef) && dragState.id) {
        onRemoveButton === null || onRemoveButton === void 0 || onRemoveButton(dragState.id);
        clearPreview();
        setDraggingId(null);
        dragPayloadRef.current = null;
        setDragState(null);
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
        onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
        return;
      }
    }
    var rawRow = (_ref10 = dropRowHighlight !== null && dropRowHighlight !== void 0 ? dropRowHighlight : dragState.fromRow) !== null && _ref10 !== void 0 ? _ref10 : 0;
    var isBetweenRows = Number.isFinite(rawRow) && Math.abs(rawRow % 1) === 0.5;
    var targetRow = Number.isFinite(rawRow) ? isBetweenRows ? Math.ceil(rawRow) : Math.round(rawRow) : 0;
    var targetOrder = (_ref11 = dropOrderHighlight !== null && dropOrderHighlight !== void 0 ? dropOrderHighlight : dragState.fromOrder) !== null && _ref11 !== void 0 ? _ref11 : 0;
    placePayload(dragState, targetRow, targetOrder, isBetweenRows);
    clearPreview();
    setDraggingId(null);
    dragPayloadRef.current = null;
    setDragState(null);
    setDropRowHighlight(null);
    setDropOrderHighlight(null);
    onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-950/70 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.45)] ring-1 ring-indigo-900/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_35%)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 sm:flex-nowrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("input", {
    value: (screen === null || screen === void 0 ? void 0 : screen.title) || "",
    onChange: function onChange(e) {
      return onTitleChange === null || onTitleChange === void 0 ? void 0 : onTitleChange(e.target.value);
    },
    disabled: !isEditing,
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430",
    className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold text-white shadow-inner transition focus:border-indigo-400 focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onToggleEditing === null || onToggleEditing === void 0 ? void 0 : onToggleEditing();
    },
    className: "flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold shadow-sm transition ".concat(isEditing ? "border-emerald-400/70 bg-emerald-500/20 text-emerald-100" : "border-white/15 bg-white/5 text-slate-100 hover:border-indigo-400 hover:text-white")
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, isEditing ? "Покинуть редактирование" : "Редактор")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onSave === null || onSave === void 0 ? void 0 : onSave();
    },
    className: "rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:brightness-110 disabled:opacity-50",
    disabled: isLoading || isSaving
  }, isLoading || isSaving ? "Сохраняем..." : "Сохранить"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-inner"
  }, /*#__PURE__*/React.createElement("label", {
    className: "group relative block overflow-hidden ".concat(isEditing ? "cursor-pointer" : "cursor-default"),
    onClick: function onClick(e) {
      var _e$target, _e$target$closest, _fileInputRef$current;
      if (!isEditing) return;
      if ((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$closest = _e$target.closest) !== null && _e$target$closest !== void 0 && _e$target$closest.call(_e$target, "[data-gallery-zone]")) return;
      (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 || _fileInputRef$current.click();
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    },
    onDrop: function onDrop(e) {
      var _e$dataTransfer$files;
      e.preventDefault();
      if (!isEditing) return;
      var file = (_e$dataTransfer$files = e.dataTransfer.files) === null || _e$dataTransfer$files === void 0 ? void 0 : _e$dataTransfer$files[0];
      if (file) handleImageFile(file);
    }
  }, screen !== null && screen !== void 0 && screen.imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: screen.imageUrl,
    alt: "",
    className: "h-64 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-64 w-full items-center justify-center bg-gradient-to-br from-slate-800/70 via-indigo-900/60 to-slate-950 text-center text-base font-semibold text-indigo-100 ring-1 ring-indigo-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl"
  }, "\uD83D\uDDBC\uFE0F"), /*#__PURE__*/React.createElement("span", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-normal text-slate-300"
  }, "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B"))), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    className: "hidden",
    ref: fileInputRef,
    onChange: function onChange(e) {
      var _e$target$files;
      var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
      e.target.value = "";
      if (file) handleImageFile(file);
    }
  }), uploadingImage && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-10 flex items-center justify-center bg-slate-900/70 text-sm font-semibold text-white backdrop-blur-sm"
  }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C..."), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 space-y-2 bg-slate-950/80 p-3 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.35)] ring-1 ring-indigo-500/30 backdrop-blur-sm ".concat(isEditing ? "pointer-events-auto" : "pointer-events-none opacity-60"),
    "data-gallery-zone": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-indigo-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "\uD83D\uDDBC\uFE0F"), /*#__PURE__*/React.createElement("span", null, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _fileInputRef$current2;
      return isEditing && ((_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.click());
    },
    className: "rounded-lg border border-indigo-400/60 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-100 transition hover:border-indigo-300 hover:text-white disabled:opacity-50",
    disabled: !isEditing
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")), imageError && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-300"
  }, imageError), isGalleryLoading ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300"
  }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F...") : galleryList.length ? /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 sm:grid-cols-5"
  }, galleryList.map(function (src) {
    var isActive = ((screen === null || screen === void 0 ? void 0 : screen.imageUrl) || "") === src;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: src,
      onClick: function onClick() {
        return handleGalleryPick(src);
      },
      disabled: !isEditing,
      className: "group relative overflow-hidden rounded-xl border text-left transition ".concat(isActive ? "border-emerald-400/80 bg-emerald-500/10" : "border-white/10 bg-slate-900/70 hover:border-indigo-300 hover:bg-slate-800", " ").concat(!isEditing ? "opacity-60" : "")
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      className: "h-16 w-full object-cover"
    }), isActive && /*#__PURE__*/React.createElement("span", {
      className: "pointer-events-none absolute right-1 top-1 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow"
    }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043E"));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400"
  }, "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u0430\u0439\u043B, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u0435."))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-slate-900/80 px-4 py-4 text-white"
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: messageRef,
    value: (screen === null || screen === void 0 ? void 0 : screen.message) || "",
    onChange: handleMessageInput,
    onInput: handleMessageInput,
    disabled: !isEditing,
    className: "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none",
    placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u0430",
    rows: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative space-y-3 bg-slate-900/70 px-4 pb-5 pt-3",
    ref: rowsContainerRef
  }, rows.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 right-0 ".concat(dragState ? "z-10" : "pointer-events-none", " flex items-center justify-center transition-all duration-150"),
    style: {
      top: dragState ? "-10px" : "-6px",
      height: dragState ? 32 : 0,
      opacity: dragState ? 1 : 0,
      pointerEvents: dragState ? "auto" : "none"
    },
    "data-new-row-target": "top",
    onPointerEnter: function onPointerEnter(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(topRowValue);
      setDropOrderHighlight(0);
    },
    onPointerMove: function onPointerMove(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(topRowValue);
      setDropOrderHighlight(0);
    },
    onPointerUp: function onPointerUp(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(topRowValue);
      setDropOrderHighlight(0);
      commitDrop(e);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rounded-full border px-3 py-1 text-[11px] transition ".concat(dropRowHighlight === topRowValue && dragState ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60" : "border-white/20 bg-slate-800/70 text-slate-200")
  }, "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0441\u0432\u0435\u0440\u0445\u0443")), rows.map(function (row, index) {
    var _row$rowId;
    var rowId = Number((_row$rowId = row.rowId) !== null && _row$rowId !== void 0 ? _row$rowId : 0);
    var beforeRow = rowId - 0.5;
    var showBefore = index !== 0 && !!dragState;
    return /*#__PURE__*/React.createElement("div", {
      key: rowId,
      className: "relative space-y-2"
    }, showBefore && /*#__PURE__*/React.createElement("div", {
      className: "absolute left-0 right-0 -top-3 flex items-center justify-center transition-all duration-150 ".concat(dropRowHighlight === beforeRow ? "opacity-100" : "opacity-60"),
      style: {
        height: 24,
        pointerEvents: dragState ? "auto" : "none"
      },
      "data-new-row-target": "before-".concat(rowId),
      onPointerEnter: function onPointerEnter(e) {
        if (!dragState) return;
        e.preventDefault();
        setDropRowHighlight(beforeRow);
        setDropOrderHighlight(0);
      },
      onPointerMove: function onPointerMove(e) {
        if (!dragState) return;
        e.preventDefault();
        setDropRowHighlight(beforeRow);
        setDropOrderHighlight(0);
      },
      onPointerUp: function onPointerUp(e) {
        if (!dragState) return;
        e.preventDefault();
        setDropRowHighlight(beforeRow);
        setDropOrderHighlight(0);
        commitDrop(e);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pointer-events-auto rounded-full border px-2 py-1 text-[10px] transition ".concat(dropRowHighlight === beforeRow ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60" : "border-white/15 bg-slate-900/70 text-slate-200")
    }, "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex flex-wrap gap-2 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition-all duration-200 ".concat(dropRowHighlight === rowId ? "ring-2 ring-emerald-400/70 bg-emerald-500/10 scale-[1.01]" : ""),
      "data-row-id": rowId,
      onPointerMove: function onPointerMove(e) {
        if (!dragState) return;
        e.preventDefault();
        var target = e.currentTarget;
        setDropRowHighlight(rowId);
        var btnNodes = Array.from(target.querySelectorAll("button[data-drag-id]")).filter(function (node) {
          return node.dataset.dragId !== draggingId;
        });
        var order = btnNodes.length;
        for (var i = 0; i < btnNodes.length; i += 1) {
          var rect = btnNodes[i].getBoundingClientRect();
          var midpoint = rect.left + rect.width / 2;
          if (e.clientX < midpoint) {
            order = i;
            break;
          }
          if (i === btnNodes.length - 1) {
            order = i + 1;
          }
        }
        setDropOrderHighlight(order);
      },
      onPointerLeave: function onPointerLeave() {
        setDropRowHighlight(null);
        setDropOrderHighlight(null);
      },
      onPointerUp: function onPointerUp(e) {
        if (!dragState) return;
        e.preventDefault();
        commitDrop(e);
      }
    }, function () {
      var insertionIndex = dragState && dropRowHighlight === rowId && dropOrderHighlight !== null ? Math.min(Math.max(dropOrderHighlight, 0), row.buttons.length) : null;
      var renderPlaceholder = function renderPlaceholder(key) {
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: "pointer-events-none h-[44px] min-w-[140px] flex-1 rounded-xl border border-dashed border-emerald-300/70 bg-emerald-200/10"
        });
      };
      var visibleButtons = row.buttons.filter(function (btn) {
        return btn.id !== draggingId;
      });
      var items = _toConsumableArray(visibleButtons);
      if (insertionIndex !== null) {
        items.splice(Math.min(Math.max(insertionIndex, 0), items.length), 0, renderPlaceholder("placeholder-".concat(rowId, "-").concat(insertionIndex)));
      }
      return items.map(function (btnOrPlaceholder, index) {
        var _btn$order;
        if (!btnOrPlaceholder) return null;
        if (React.isValidElement(btnOrPlaceholder)) return btnOrPlaceholder;
        var btn = btnOrPlaceholder;
        return /*#__PURE__*/React.createElement("button", {
          key: btn.id,
          type: "button",
          "data-drag-id": btn.id,
          "data-order": (_btn$order = btn.order) !== null && _btn$order !== void 0 ? _btn$order : index,
          draggable: false,
          onPointerDown: function onPointerDown(e) {
            var _btn$order2;
            if (!isEditing) return;
            beginDrag({
              id: btn.id,
              fromRow: Number(btn.row || 0),
              fromOrder: Number((_btn$order2 = btn.order) !== null && _btn$order2 !== void 0 ? _btn$order2 : index),
              source: "menu",
              type: btn.type
            }, e.currentTarget, e);
          },
          className: "group relative flex min-w-[140px] flex-1 items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.35)] ".concat(isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-pointer", " ").concat(draggingId === btn.id ? "opacity-40 border-white/20 bg-white/10" : "border-white/10 bg-white/5"),
          onClick: function onClick() {
            return btn.targetScreenId ? onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(btn.targetScreenId) : onSelectButton === null || onSelectButton === void 0 ? void 0 : onSelectButton(btn.id);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "truncate"
        }, btn.label)));
      });
    }()));
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 right-0 ".concat(dragState ? "z-10" : "pointer-events-none", " flex items-center justify-center transition-all duration-150"),
    style: {
      bottom: dragState ? "-10px" : "-6px",
      height: dragState ? 32 : 0,
      opacity: dragState ? 1 : 0,
      pointerEvents: dragState ? "auto" : "none"
    },
    "data-new-row-target": "bottom",
    onPointerEnter: function onPointerEnter(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(bottomRowValue);
      setDropOrderHighlight(0);
    },
    onPointerMove: function onPointerMove(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(bottomRowValue);
      setDropOrderHighlight(0);
    },
    onPointerUp: function onPointerUp(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(bottomRowValue);
      setDropOrderHighlight(0);
      commitDrop(e);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rounded-full border px-3 py-1 text-[11px] transition ".concat(dropRowHighlight === bottomRowValue && dragState ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-400/60" : "border-white/20 bg-slate-800/70 text-slate-200")
  }, "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0441\u043D\u0438\u0437\u0443"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-24 w-full items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/5 text-sm text-slate-300",
    onPointerMove: function onPointerMove(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(0);
      setDropOrderHighlight(0);
    },
    onPointerUp: function onPointerUp(e) {
      if (!dragState) return;
      e.preventDefault();
      setDropRowHighlight(0);
      setDropOrderHighlight(0);
      commitDrop(e);
    },
    onPointerLeave: function onPointerLeave() {
      setDropRowHighlight(null);
      setDropOrderHighlight(null);
    }
  }, "Drop a button here to place the very first row")))));
};
var BotMenuBuilder = function BotMenuBuilder(_ref12) {
  var _draft$screens$;
  var menu = _ref12.menu,
    onSave = _ref12.onSave,
    onReload = _ref12.onReload,
    isSaving = _ref12.isSaving,
    loadMenuImages = _ref12.loadMenuImages,
    onUploadMenuImage = _ref12.onUploadMenuImage;
  var _useState13 = useState(function () {
      return normalizeMenuDraft(menu);
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    draft = _useState14[0],
    setDraft = _useState14[1];
  var _useState15 = useState(function () {
      var _normalizeMenuDraft$s;
      return ((_normalizeMenuDraft$s = normalizeMenuDraft(menu).screens[0]) === null || _normalizeMenuDraft$s === void 0 ? void 0 : _normalizeMenuDraft$s.id) || "main";
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    activeScreenId = _useState16[0],
    setActiveScreenId = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedButtonId = _useState18[0],
    setSelectedButtonId = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isEditing = _useState20[0],
    setIsEditing = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    dirty = _useState22[0],
    setDirty = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loading = _useState24[0],
    setLoading = _useState24[1];
  var isMountedRef = useRef(true);
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    paletteHover = _useState26[0],
    setPaletteHover = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    dropZoneHover = _useState28[0],
    setDropZoneHover = _useState28[1];
  var _useState29 = useState([]),
    _useState30 = _slicedToArray(_useState29, 2),
    menuImages = _useState30[0],
    setMenuImages = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    galleryLoading = _useState32[0],
    setGalleryLoading = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    isDragging = _useState34[0],
    setIsDragging = _useState34[1];
  var buttonSettingsRef = useRef(null);
  var paletteRef = useRef(null);
  useEffect(function () {
    var styleId = "bot-constructor-animations";
    if (document.getElementById(styleId)) return;
    var style = document.createElement("style");
    style.id = styleId;
    style.textContent = "\n      @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0px); } }\n      @keyframes glowPulse { 0% { box-shadow: 0 10px 30px rgba(99,102,241,0.25); } 50% { box-shadow: 0 20px 50px rgba(99,102,241,0.35); } 100% { box-shadow: 0 10px 30px rgba(99,102,241,0.25); } }\n      @keyframes magnetPull { 0% { transform: scale(1); } 50% { transform: scale(1.02) translateY(-2px); } 100% { transform: scale(1); } }\n      @keyframes shimmerSlide { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }\n      .drag-shadow { filter: drop-shadow(0 18px 45px rgba(99, 102, 241, 0.35)); }\n    ";
    document.head.appendChild(style);
  }, []);
  useEffect(function () {
    if (!isEditing) {
      setDropZoneHover(null);
    }
  }, [isEditing]);
  useEffect(function () {
    return function () {
      isMountedRef.current = false;
    };
  }, []);
  useEffect(function () {
    var normalized = normalizeMenuDraft(menu);
    setDraft(normalized);
    if (!normalized.screens.find(function (s) {
      return s.id === activeScreenId;
    })) {
      var _normalized$screens$;
      setActiveScreenId(((_normalized$screens$ = normalized.screens[0]) === null || _normalized$screens$ === void 0 ? void 0 : _normalized$screens$.id) || "main");
    }
    setSelectedButtonId(null);
    setDirty(false);
  }, [menu]);
  var refreshGallery = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var payload, list, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!(!loadMenuImages && typeof fetch !== "function")) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, []);
        case 1:
          setGalleryLoading(true);
          _context2.p = 2;
          _context2.n = 3;
          return typeof loadMenuImages === "function" ? loadMenuImages() : fetch("/api/bot/menu/images").then(function (res) {
            return res.json();
          });
        case 3:
          payload = _context2.v;
          list = Array.isArray(payload === null || payload === void 0 ? void 0 : payload.images) ? payload.images : Array.isArray(payload) ? payload : [];
          setMenuImages(list);
          return _context2.a(2, list);
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.error("Menu images load error", _t2);
          return _context2.a(2, []);
        case 5:
          _context2.p = 5;
          setGalleryLoading(false);
          return _context2.f(5);
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4, 5, 6]]);
  })), [loadMenuImages]);
  useEffect(function () {
    refreshGallery();
  }, [refreshGallery]);
  var activeScreen = useMemo(function () {
    return draft.screens.find(function (screen) {
      return screen.id === activeScreenId;
    }) || draft.screens[0];
  }, [draft.screens, activeScreenId]);
  var activeTitle = (activeScreen === null || activeScreen === void 0 ? void 0 : activeScreen.title) || ((_draft$screens$ = draft.screens[0]) === null || _draft$screens$ === void 0 ? void 0 : _draft$screens$.title) || "Меню";
  var updateScreen = useCallback(function (screenId, updater) {
    setDraft(function (prev) {
      var screens = prev.screens.map(function (screen) {
        return screen.id === screenId ? _objectSpread(_objectSpread({}, screen), updater(screen)) : screen;
      });
      return _objectSpread(_objectSpread({}, prev), {}, {
        screens: screens
      });
    });
    setDirty(true);
  }, []);
  var addScreen = useCallback(function () {
    setDraft(function (prev) {
      var index = prev.screens.length + 1;
      var id = sanitizeId("screen-".concat(index));
      var screen = normalizeScreen({
        id: id,
        title: "\u042D\u043A\u0440\u0430\u043D ".concat(index),
        message: '',
        buttons: []
      }, index - 1);
      return _objectSpread(_objectSpread({}, prev), {}, {
        screens: [].concat(_toConsumableArray(prev.screens), [screen])
      });
    });
    setDirty(true);
  }, []);
  var removeScreen = useCallback(function (screenId) {
    setDraft(function (prev) {
      var _filtered$;
      if (prev.screens.length <= 1) return prev;
      var filtered = prev.screens.filter(function (screen) {
        return screen.id !== screenId;
      });
      var nextActive = ((_filtered$ = filtered[0]) === null || _filtered$ === void 0 ? void 0 : _filtered$.id) || null;
      setActiveScreenId(function (current) {
        return current === screenId ? nextActive : current;
      });
      return _objectSpread(_objectSpread({}, prev), {}, {
        screens: filtered
      });
    });
    setDirty(true);
  }, []);
  var moveScreen = useCallback(function (screenId, delta) {
    setDraft(function (prev) {
      var idx = prev.screens.findIndex(function (screen) {
        return screen.id === screenId;
      });
      if (idx < 0) return prev;
      var nextIndex = idx + delta;
      if (nextIndex < 0 || nextIndex >= prev.screens.length) return prev;
      var screens = _toConsumableArray(prev.screens);
      var _screens$splice = screens.splice(idx, 1),
        _screens$splice2 = _slicedToArray(_screens$splice, 1),
        item = _screens$splice2[0];
      screens.splice(nextIndex, 0, item);
      return _objectSpread(_objectSpread({}, prev), {}, {
        screens: screens
      });
    });
    setDirty(true);
  }, []);
  var updateButton = useCallback(function (buttonId, nextButton) {
    if (!activeScreen) return;
    updateScreen(activeScreen.id, function (screen) {
      var buttons = (screen.buttons || []).map(function (btn) {
        return btn.id === buttonId ? normalizeButton(nextButton, 0, screen.id) : btn;
      });
      return {
        buttons: normalizeButtonOrder(buttons)
      };
    });
  }, [activeScreen, updateScreen]);
  var moveButton = useCallback(function (buttonId, targetRow) {
    var targetOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var createNewRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!activeScreen) return;
    updateScreen(activeScreen.id, function (screen) {
      var buttons = screen.buttons || [];
      var item = buttons.find(function (btn) {
        return btn.id === buttonId;
      });
      if (!item) return {};
      var placed = insertButtonAtPosition(buttons, _objectSpread({}, item), targetRow, targetOrder, {
        createNewRow: createNewRow
      });
      return {
        buttons: placed
      };
    });
  }, [activeScreen, updateScreen]);
  var addButtonFromPalette = useCallback(function (type) {
    var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var createNewRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!activeScreen) return;
    updateScreen(activeScreen.id, function (screen) {
      var _BOT_BUTTON_TYPES$fin;
      var buttons = screen.buttons ? _toConsumableArray(screen.buttons) : [];
      var nextIndex = buttons.length + 1;
      var newBtn = normalizeButton({
        id: "btn-".concat(screen.id, "-").concat(nextIndex),
        label: "".concat(((_BOT_BUTTON_TYPES$fin = BOT_BUTTON_TYPES.find(function (t) {
          return t.id === type;
        })) === null || _BOT_BUTTON_TYPES$fin === void 0 ? void 0 : _BOT_BUTTON_TYPES$fin.label) || "Кнопка"),
        type: type,
        targetScreenId: null,
        row: row,
        order: order
      }, nextIndex - 1, screen.id);
      var placed = insertButtonAtPosition(buttons, newBtn, row, order, {
        createNewRow: createNewRow
      });
      setSelectedButtonId(newBtn.id);
      return {
        buttons: placed
      };
    });
  }, [activeScreen, updateScreen]);
  var removeButton = useCallback(function (buttonId) {
    if (!activeScreen || !buttonId) return;
    updateScreen(activeScreen.id, function (screen) {
      return {
        buttons: (screen.buttons || []).filter(function (btn) {
          return btn.id !== buttonId;
        })
      };
    });
    setSelectedButtonId(function (prev) {
      return prev === buttonId ? null : prev;
    });
  }, [activeScreen, updateScreen]);
  var handleSelectGalleryImage = useCallback(function (src) {
    if (!activeScreen || !src) return;
    updateScreen(activeScreen.id, function () {
      return {
        imageUrl: src
      };
    });
  }, [activeScreen, updateScreen]);
  var handleUploadMenuImage = useCallback(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(file) {
      var result, uploadedPath, dataUrl, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!file || !activeScreen)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, null);
          case 1:
            _context3.p = 1;
            if (!(typeof onUploadMenuImage === "function")) {
              _context3.n = 5;
              break;
            }
            _context3.n = 2;
            return onUploadMenuImage(file);
          case 2:
            result = _context3.v;
            uploadedPath = (result === null || result === void 0 ? void 0 : result.path) || (result === null || result === void 0 ? void 0 : result.url) || (result === null || result === void 0 ? void 0 : result.image) || "";
            if (uploadedPath) {
              updateScreen(activeScreen.id, function () {
                return {
                  imageUrl: uploadedPath
                };
              });
            }
            if (!Array.isArray(result === null || result === void 0 ? void 0 : result.images)) {
              _context3.n = 3;
              break;
            }
            setMenuImages(result.images);
            _context3.n = 4;
            break;
          case 3:
            _context3.n = 4;
            return refreshGallery();
          case 4:
            return _context3.a(2, uploadedPath);
          case 5:
            _context3.n = 6;
            return readFileAsDataUrl(file);
          case 6:
            dataUrl = _context3.v;
            updateScreen(activeScreen.id, function () {
              return {
                imageUrl: dataUrl
              };
            });
            return _context3.a(2, dataUrl);
          case 7:
            _context3.p = 7;
            _t3 = _context3.v;
            console.error("Menu image upload error", _t3);
            throw _t3;
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 7]]);
    }));
    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }(), [activeScreen, onUploadMenuImage, refreshGallery, updateScreen]);
  var handleSave = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var result;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          if (onSave) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          setLoading(true);
          _context4.p = 2;
          _context4.n = 3;
          return onSave(draft);
        case 3:
          result = _context4.v;
          if (!isMountedRef.current) {
            _context4.n = 4;
            break;
          }
          setDirty(false);
          return _context4.a(2, result);
        case 4:
          _context4.p = 4;
          if (isMountedRef.current) {
            setLoading(false);
          }
          return _context4.f(4);
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[2,, 4, 5]]);
  })), [draft, onSave]);
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-auto w-full max-w-3xl space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement(ChatPreview, {
    screen: activeScreen,
    screens: draft.screens,
    onSelectButton: function onSelectButton(id) {
      return setSelectedButtonId(id);
    },
    onNavigate: function onNavigate(targetId) {
      return setActiveScreenId(targetId);
    },
    onMoveButton: function onMoveButton(id, row, order, createNewRow) {
      return moveButton(id, row, order, createNewRow);
    },
    onAddFromPalette: function onAddFromPalette(type, row, order, createNewRow) {
      return addButtonFromPalette(type, row, order, createNewRow);
    },
    onRemoveButton: removeButton,
    onUploadImage: handleUploadMenuImage,
    galleryImages: menuImages,
    onSelectGalleryImage: handleSelectGalleryImage,
    onMessageChange: function onMessageChange(value) {
      return updateScreen(activeScreen.id, function () {
        return {
          message: value
        };
      });
    },
    onTitleChange: function onTitleChange(value) {
      return updateScreen(activeScreen.id, function () {
        return {
          title: value
        };
      });
    },
    dropZones: {
      settingsRef: buttonSettingsRef,
      paletteRef: paletteRef
    },
    isEditing: isEditing,
    onDropZoneHoverChange: setDropZoneHover,
    onDragStateChange: setIsDragging,
    isGalleryLoading: galleryLoading,
    onToggleEditing: function onToggleEditing() {
      return setIsEditing(function (prev) {
        return !prev;
      });
    },
    onSave: handleSave,
    isSaving: isSaving,
    isLoading: loading
  }), isEditing && /*#__PURE__*/React.createElement(ButtonEditPanel, {
    panelRef: buttonSettingsRef,
    button: activeScreen.buttons.find(function (btn) {
      return btn.id === selectedButtonId;
    }) || activeScreen.buttons[0],
    screens: draft.screens,
    onChange: function onChange(next) {
      return updateButton(next.id || selectedButtonId, next);
    },
    onRemove: function onRemove() {
      if (selectedButtonId) {
        removeButton(selectedButtonId);
        setSelectedButtonId(null);
      }
    },
    onDropSelect: function onDropSelect(event) {
      event.preventDefault();
      try {
        var payload = JSON.parse(event.dataTransfer.getData("application/json") || "{}");
        if (payload !== null && payload !== void 0 && payload.id) {
          setSelectedButtonId(payload.id);
        }
      } catch (_unused) {
        // ignore
      }
    },
    isEditing: isEditing,
    isDropTargetActive: dropZoneHover === "settings",
    isDragging: isDragging
  }), isEditing && /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl transition-all duration-200 ".concat(paletteHover ? "scale-[1.01] ring-2 ring-rose-400/60 shadow-[0_14px_50px_rgba(244,63,94,0.35)]" : "ring-1 ring-white/5"),
    ref: paletteRef
  }, /*#__PURE__*/React.createElement(ButtonPalette, {
    onAdd: function onAdd(type) {
      var _activeScreen$buttons, _activeScreen$buttons2, _activeScreen$buttons3;
      return addButtonFromPalette(type, (_activeScreen$buttons = activeScreen === null || activeScreen === void 0 || (_activeScreen$buttons2 = activeScreen.buttons) === null || _activeScreen$buttons2 === void 0 || (_activeScreen$buttons2 = _activeScreen$buttons2[0]) === null || _activeScreen$buttons2 === void 0 ? void 0 : _activeScreen$buttons2.row) !== null && _activeScreen$buttons !== void 0 ? _activeScreen$buttons : 0, (activeScreen === null || activeScreen === void 0 || (_activeScreen$buttons3 = activeScreen.buttons) === null || _activeScreen$buttons3 === void 0 ? void 0 : _activeScreen$buttons3.length) || 0);
    },
    onRemove: removeButton,
    onHoverChange: setPaletteHover,
    isEditing: isEditing,
    isHighlighted: dropZoneHover === "palette",
    isDragging: isDragging
  }))));
};
var ButtonPalette = function ButtonPalette(_ref16) {
  var onAdd = _ref16.onAdd,
    onRemove = _ref16.onRemove,
    onHoverChange = _ref16.onHoverChange,
    isEditing = _ref16.isEditing,
    isHighlighted = _ref16.isHighlighted,
    isDragging = _ref16.isDragging;
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isDropping = _useState36[0],
    setIsDropping = _useState36[1];
  var dropActiveRef = useRef(false);
  var dragPreviewRef = useRef(null);
  var startPaletteDrag = function startPaletteDrag(item, event) {
    var _event$stopPropagatio, _ghost$update;
    if (!isEditing) return;
    if (!event || typeof event.button === "number" && event.button !== 0) return;
    event.preventDefault();
    (_event$stopPropagatio = event.stopPropagation) === null || _event$stopPropagatio === void 0 || _event$stopPropagatio.call(event);
    onHoverChange === null || onHoverChange === void 0 || onHoverChange(true);
    var starter = window.__botMenuBeginDrag;
    if (typeof starter === "function") {
      starter({
        id: null,
        fromRow: 0,
        fromOrder: 0,
        source: "palette",
        type: item.id
      }, event.currentTarget, event);
      return;
    }
    var ghost = createDragPreview(event.currentTarget, event);
    dragPreviewRef.current = ghost;
    ghost === null || ghost === void 0 || (_ghost$update = ghost.update) === null || _ghost$update === void 0 || _ghost$update.call(ghost, event.clientX, event.clientY);
    var handleMove = function handleMove(e) {
      var _ghost$update2;
      return ghost === null || ghost === void 0 || (_ghost$update2 = ghost.update) === null || _ghost$update2 === void 0 ? void 0 : _ghost$update2.call(ghost, e.clientX, e.clientY);
    };
    var handleUp = function handleUp() {
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
      destroyDragPreview(dragPreviewRef.current);
      dragPreviewRef.current = null;
      document.removeEventListener("pointermove", handleMove);
    };
    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp, {
      once: true
    });
  };
  var activeHighlight = isDropping || isHighlighted || isDragging;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-900/40 via-indigo-900/50 to-rose-900/40 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 ".concat(activeHighlight ? "ring-2 ring-rose-400/70 scale-[1.01] animate-[magnetPull_0.9s_ease-in-out_infinite]" : "ring-1 ring-white/10"),
    onPointerEnter: function onPointerEnter() {
      if (!isDragging) return;
      if (!dropActiveRef.current) {
        dropActiveRef.current = true;
        setIsDropping(true);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(true);
      }
    },
    onPointerMove: function onPointerMove() {
      if (!isDragging) return;
      if (!dropActiveRef.current) {
        dropActiveRef.current = true;
        setIsDropping(true);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(true);
      }
    },
    onPointerLeave: function onPointerLeave() {
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
    },
    onPointerUp: function onPointerUp() {
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      if (!dropActiveRef.current) {
        dropActiveRef.current = true;
        setIsDropping(true);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(true);
      }
    },
    onDragEnter: function onDragEnter() {
      if (!dropActiveRef.current) {
        dropActiveRef.current = true;
        setIsDropping(true);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(true);
      }
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
      try {
        var payload = JSON.parse(e.dataTransfer.getData("application/json") || "{}");
        if (payload !== null && payload !== void 0 && payload.id) {
          onRemove === null || onRemove === void 0 || onRemove(payload.id);
        }
      } catch (_unused2) {
        // ignore
      }
      destroyDragPreview(dragPreviewRef.current);
      dragPreviewRef.current = null;
    },
    onDragLeave: function onDragLeave() {
      dropActiveRef.current = false;
      setIsDropping(false);
      onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.08em] text-indigo-100"
  }, "\u0415\u0449\u0435 \u043A\u043D\u043E\u043F\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-300"
  }, "\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439\u0442\u0435 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3"
  }, BOT_BUTTON_TYPES.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      draggable: false,
      onPointerDown: function onPointerDown(e) {
        return startPaletteDrag(item, e);
      },
      onPointerUp: function onPointerUp(e) {
        e.preventDefault();
        setIsDropping(false);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
        destroyDragPreview(dragPreviewRef.current);
        dragPreviewRef.current = null;
      },
      onPointerLeave: function onPointerLeave() {
        setIsDropping(false);
        onHoverChange === null || onHoverChange === void 0 || onHoverChange(false);
      },
      onClick: function onClick() {
        if (!isEditing) return;
        onAdd === null || onAdd === void 0 || onAdd(item.id);
      },
      className: "group relative flex min-w-[140px] items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] ".concat(isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-not-allowed opacity-60")
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, item.emoji || "✨"), /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, item.label));
  })));
};
window.BotMenuBuilder = BotMenuBuilder;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNvbnN0cnVjdG9yLmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwicmV0dXJuIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJoYXNPd25Qcm9wZXJ0eSIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm5leHQiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJfUmVhY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiQk9UX0JVVFRPTl9UWVBFUyIsImlkIiwibGFiZWwiLCJlbW9qaSIsIkJPVF9CVVRUT05fVFlQRV9TRVQiLCJTZXQiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRHJhZ1ByZXZpZXciLCJub2RlIiwic3RhcnRFdmVudCIsIl9zdGFydEV2ZW50JGN1cnJlbnRUYSIsIl9zdGFydEV2ZW50JGN1cnJlbnRUYTIiLCJfbm9kZSRnZXRCb3VuZGluZ0NsaWUiLCJfbm9kZSRnZXRCb3VuZGluZ0NsaWUyIiwiX2Nsb25lJGNsYXNzTGlzdCIsInJlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJjb25jYXQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwb2ludGVyRXZlbnRzIiwidHJhbnNpdGlvbiIsIndpbGxDaGFuZ2UiLCJib3hTaGFkb3ciLCJ6SW5kZXgiLCJvcGFjaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvZmZzZXRYIiwiY2xpZW50WCIsIm9mZnNldFkiLCJjbGllbnRZIiwidXBkYXRlIiwieCIsInZpc2liaWxpdHkiLCJjbGVhbnVwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGVzdHJveURyYWdQcmV2aWV3IiwiX2Nsb25lJGNsZWFudXAiLCJzYW5pdGl6ZUlkIiwidW5kZWZpbmVkIiwidHJpbSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNvcnRCdXR0b25zIiwiYnV0dG9ucyIsInNvcnQiLCJiIiwiX2Ekcm93IiwiX2Ikcm93IiwiX2Ekb3JkZXIiLCJfYiRvcmRlciIsInJvdyIsIm9yZGVyIiwibm9ybWFsaXplQnV0dG9uT3JkZXIiLCJzb3J0ZWQiLCJjdXJyZW50Um93Iiwibm9ybWFsaXplZFJvdyIsImJ0biIsImluc2VydEJ1dHRvbkF0UG9zaXRpb24iLCJidXR0b24iLCJ0YXJnZXRSb3ciLCJ0YXJnZXRPcmRlciIsIm9wdGlvbnMiLCJfb3B0aW9ucyRjcmVhdGVOZXdSb3ciLCJjcmVhdGVOZXdSb3ciLCJmaWx0ZXJlZCIsInJvd3NNYXAiLCJNYXAiLCJyb3dJZCIsImlzRmluaXRlIiwiaGFzIiwic2V0IiwiZ2V0Iiwicm93RW50cmllcyIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJsaXN0Iiwicm93cyIsInJvd0xpc3QiLCJpbnNlcnRJbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzcGxpY2UiLCJyZWJ1aWx0IiwiX3JlZjMiLCJfcmVmNCIsImlkeCIsIm5vcm1hbGl6ZUJ1dHRvbiIsIl9idG4kcGF5bG9hZCIsInNjcmVlbklkIiwidGV4dCIsInR5cGUiLCJpbmNsdWRlcyIsInRhcmdldFNjcmVlbklkIiwidGFyZ2V0IiwicGF5bG9hZCIsImZsb29yIiwibm9ybWFsaXplU2NyZWVuIiwic2NyZWVuIiwiX3JlZjUiLCJfc2NyZWVuJG1lc3NhZ2UiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJpbWFnZVVybCIsImltYWdlIiwibm9ybWFsaXplTWVudURyYWZ0IiwibWVudSIsInNjcmVlbnMiLCJzY3IiLCJidXR0b25UeXBlcyIsInZlcnNpb24iLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZWFkRmlsZUFzRGF0YVVybCIsImZpbGUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwicmVhZEFzRGF0YVVSTCIsIkJ1dHRvblR5cGVCYWRnZSIsIl9yZWY2IiwiZmluZCIsImVudHJ5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbkVkaXRQYW5lbCIsIl9yZWY3Iiwib25DaGFuZ2UiLCJvblJlbW92ZSIsIm9uRHJvcFNlbGVjdCIsImlzRWRpdGluZyIsImlzRHJvcFRhcmdldEFjdGl2ZSIsImlzRHJhZ2dpbmciLCJfcmVmNyRwYW5lbFJlZiIsInBhbmVsUmVmIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImlzRHJhZ0FjdGl2ZSIsInNldElzRHJhZ0FjdGl2ZSIsImRyYWdBY3RpdmVSZWYiLCJkcm9wSGFuZGxlcnMiLCJvbkRyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwib25Ecm9wIiwib25EcmFnTGVhdmUiLCJyZWYiLCJkaXNhYmxlZCIsImtleSIsIkNoYXRQcmV2aWV3IiwiX3JlZjgiLCJvblNlbGVjdEJ1dHRvbiIsIm9uTmF2aWdhdGUiLCJvbk1vdmVCdXR0b24iLCJvbkFkZEZyb21QYWxldHRlIiwib25SZW1vdmVCdXR0b24iLCJvbkltYWdlQ2hhbmdlIiwib25NZXNzYWdlQ2hhbmdlIiwib25UaXRsZUNoYW5nZSIsImRyb3Bab25lcyIsIm9uRHJvcFpvbmVIb3ZlckNoYW5nZSIsIm9uRHJhZ1N0YXRlQ2hhbmdlIiwiZ2FsbGVyeUltYWdlcyIsIm9uU2VsZWN0R2FsbGVyeUltYWdlIiwib25VcGxvYWRJbWFnZSIsIl9yZWY4JGlzR2FsbGVyeUxvYWRpbiIsImlzR2FsbGVyeUxvYWRpbmciLCJvblRvZ2dsZUVkaXRpbmciLCJvblNhdmUiLCJfcmVmOCRpc1NhdmluZyIsImlzU2F2aW5nIiwiX3JlZjgkaXNMb2FkaW5nIiwiaXNMb2FkaW5nIiwiZmlsZUlucHV0UmVmIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJkcmFnZ2luZ0lkIiwic2V0RHJhZ2dpbmdJZCIsImRyYWdQcmV2aWV3UmVmIiwiZHJhZ1BheWxvYWRSZWYiLCJkcmFnTW92ZUZyYW1lUmVmIiwiZHJhZ01vdmVDb29yZHNSZWYiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImRyb3BSb3dIaWdobGlnaHQiLCJzZXREcm9wUm93SGlnaGxpZ2h0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJkcm9wT3JkZXJIaWdobGlnaHQiLCJzZXREcm9wT3JkZXJIaWdobGlnaHQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImRyYWdTdGF0ZSIsInNldERyYWdTdGF0ZSIsInJvd3NDb250YWluZXJSZWYiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ1cGxvYWRpbmdJbWFnZSIsInNldFVwbG9hZGluZ0ltYWdlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImltYWdlRXJyb3IiLCJzZXRJbWFnZUVycm9yIiwibWVzc2FnZVJlZiIsInJvd0luZGV4IiwiX3JlZjkiLCJfcmVmMCIsImJ0bnMiLCJfYSRvcmRlcjIiLCJfYiRvcmRlcjIiLCJnYWxsZXJ5TGlzdCIsInRvcFJvd1ZhbHVlIiwiX3Jvd3MkMCRyb3dJZCIsIl9yb3dzJCIsImJvdHRvbVJvd1ZhbHVlIiwiX3Jvd3Mkcm93SWQiLCJfcm93cyIsImF1dG9zaXplVGV4dGFyZWEiLCJzY3JvbGxIZWlnaHQiLCJpc0luc2lkZURyb3Bab25lIiwiZXZlbnQiLCJyaWdodCIsImJvdHRvbSIsIndpbmRvdyIsIl9fYm90TWVudUJlZ2luRHJhZyIsImJlZ2luRHJhZyIsImNsZWFyUHJldmlldyIsInBsYWNlUGF5bG9hZCIsIm9yZGVySW5kZXgiLCJzb3VyY2UiLCJoYW5kbGVJbWFnZUZpbGUiLCJfcmVmMSIsIl9jYWxsZWUiLCJfZmlsZSR0eXBlIiwiX2ZpbGUkdHlwZSRzdGFydHNXaXRoIiwiX3QiLCJfY29udGV4dCIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwiX3giLCJoYW5kbGVHYWxsZXJ5UGljayIsInNyYyIsImhhbmRsZU1lc3NhZ2VJbnB1dCIsIl9ldmVudCR0YXJnZXQiLCJoYW5kbGVNb3ZlIiwiX3Jvd3NDb250YWluZXJSZWYkY3VyIiwiX3Jvd3NDb250YWluZXJSZWYkY3VyMiIsIl9ldmVudCR0YXJnZXQyIiwiX2V2ZW50JHRhcmdldDIkY2xvc2VzIiwiX2V2ZW50JHRhcmdldDMiLCJfZXZlbnQkdGFyZ2V0MyRjbG9zZXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb29yZHMiLCJfZHJhZ1ByZXZpZXdSZWYkY3VycmUiLCJfZHJhZ1ByZXZpZXdSZWYkY3VycmUyIiwibmV4dFpvbmUiLCJzZXR0aW5nc1JlZiIsInBhbGV0dGVSZWYiLCJjb250YWluZXJSZWN0IiwibmV3Um93VGFyZ2V0IiwiY2xvc2VzdCIsInJvd05vZGUiLCJoYW5kbGVVcCIsImNvbW1pdERyb3AiLCJoYW5kbGVLZXlEb3duIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvcmlnaW5Ob2RlIiwiX3BheWxvYWQkZnJvbVJvdyIsIl9wYXlsb2FkJGZyb21PcmRlciIsIl9wcmV2aWV3JHVwZGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImZyb21Sb3ciLCJmcm9tT3JkZXIiLCJwcmV2aWV3IiwiX3JlZjEwIiwiX3JlZjExIiwicmF3Um93IiwiaXNCZXR3ZWVuUm93cyIsImFicyIsImNlaWwiLCJyb3VuZCIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIl9lJHRhcmdldCIsIl9lJHRhcmdldCRjbG9zZXN0IiwiX2ZpbGVJbnB1dFJlZiRjdXJyZW50IiwiY2xpY2siLCJfZSRkYXRhVHJhbnNmZXIkZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImFsdCIsImFjY2VwdCIsIl9lJHRhcmdldCRmaWxlcyIsIl9maWxlSW5wdXRSZWYkY3VycmVudDIiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJGcmFnbWVudCIsIm9uUG9pbnRlckVudGVyIiwib25Qb2ludGVyTW92ZSIsIm9uUG9pbnRlclVwIiwiaW5kZXgiLCJfcm93JHJvd0lkIiwiYmVmb3JlUm93Iiwic2hvd0JlZm9yZSIsImJ0bk5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGFzZXQiLCJkcmFnSWQiLCJtaWRwb2ludCIsIm9uUG9pbnRlckxlYXZlIiwiaW5zZXJ0aW9uSW5kZXgiLCJyZW5kZXJQbGFjZWhvbGRlciIsInZpc2libGVCdXR0b25zIiwiaXRlbXMiLCJidG5PclBsYWNlaG9sZGVyIiwiX2J0biRvcmRlciIsImlzVmFsaWRFbGVtZW50IiwiZHJhZ2dhYmxlIiwib25Qb2ludGVyRG93biIsIl9idG4kb3JkZXIyIiwiQm90TWVudUJ1aWxkZXIiLCJfcmVmMTIiLCJfZHJhZnQkc2NyZWVucyQiLCJvblJlbG9hZCIsImxvYWRNZW51SW1hZ2VzIiwib25VcGxvYWRNZW51SW1hZ2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiZHJhZnQiLCJzZXREcmFmdCIsIl91c2VTdGF0ZTE1IiwiX25vcm1hbGl6ZU1lbnVEcmFmdCRzIiwiX3VzZVN0YXRlMTYiLCJhY3RpdmVTY3JlZW5JZCIsInNldEFjdGl2ZVNjcmVlbklkIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInNlbGVjdGVkQnV0dG9uSWQiLCJzZXRTZWxlY3RlZEJ1dHRvbklkIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInNldElzRWRpdGluZyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJkaXJ0eSIsInNldERpcnR5IiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNNb3VudGVkUmVmIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInBhbGV0dGVIb3ZlciIsInNldFBhbGV0dGVIb3ZlciIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJkcm9wWm9uZUhvdmVyIiwic2V0RHJvcFpvbmVIb3ZlciIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJtZW51SW1hZ2VzIiwic2V0TWVudUltYWdlcyIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJnYWxsZXJ5TG9hZGluZyIsInNldEdhbGxlcnlMb2FkaW5nIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInNldElzRHJhZ2dpbmciLCJidXR0b25TZXR0aW5nc1JlZiIsInN0eWxlSWQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiaGVhZCIsIm5vcm1hbGl6ZWQiLCJzIiwiX25vcm1hbGl6ZWQkc2NyZWVucyQiLCJyZWZyZXNoR2FsbGVyeSIsIl9jYWxsZWUyIiwiX3QyIiwiX2NvbnRleHQyIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiaW1hZ2VzIiwiYWN0aXZlU2NyZWVuIiwiYWN0aXZlVGl0bGUiLCJ1cGRhdGVTY3JlZW4iLCJ1cGRhdGVyIiwicHJldiIsImFkZFNjcmVlbiIsInJlbW92ZVNjcmVlbiIsIl9maWx0ZXJlZCQiLCJuZXh0QWN0aXZlIiwibW92ZVNjcmVlbiIsImRlbHRhIiwiZmluZEluZGV4IiwibmV4dEluZGV4IiwiX3NjcmVlbnMkc3BsaWNlIiwiX3NjcmVlbnMkc3BsaWNlMiIsInVwZGF0ZUJ1dHRvbiIsImJ1dHRvbklkIiwibmV4dEJ1dHRvbiIsIm1vdmVCdXR0b24iLCJwbGFjZWQiLCJhZGRCdXR0b25Gcm9tUGFsZXR0ZSIsIl9CT1RfQlVUVE9OX1RZUEVTJGZpbiIsIm5ld0J0biIsInJlbW92ZUJ1dHRvbiIsImhhbmRsZVNlbGVjdEdhbGxlcnlJbWFnZSIsImhhbmRsZVVwbG9hZE1lbnVJbWFnZSIsIl9yZWYxNCIsIl9jYWxsZWUzIiwidXBsb2FkZWRQYXRoIiwiZGF0YVVybCIsIl90MyIsIl9jb250ZXh0MyIsInBhdGgiLCJ1cmwiLCJfeDIiLCJoYW5kbGVTYXZlIiwiX2NhbGxlZTQiLCJfY29udGV4dDQiLCJ0YXJnZXRJZCIsIkpTT04iLCJwYXJzZSIsImdldERhdGEiLCJfdW51c2VkIiwiQnV0dG9uUGFsZXR0ZSIsIm9uQWRkIiwiX2FjdGl2ZVNjcmVlbiRidXR0b25zIiwiX2FjdGl2ZVNjcmVlbiRidXR0b25zMiIsIl9hY3RpdmVTY3JlZW4kYnV0dG9uczMiLCJvbkhvdmVyQ2hhbmdlIiwiaXNIaWdobGlnaHRlZCIsIl9yZWYxNiIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJpc0Ryb3BwaW5nIiwic2V0SXNEcm9wcGluZyIsImRyb3BBY3RpdmVSZWYiLCJzdGFydFBhbGV0dGVEcmFnIiwiX2V2ZW50JHN0b3BQcm9wYWdhdGlvIiwiX2dob3N0JHVwZGF0ZSIsInN0YXJ0ZXIiLCJnaG9zdCIsIl9naG9zdCR1cGRhdGUyIiwib25jZSIsImFjdGl2ZUhpZ2hsaWdodCIsIm9uRHJhZ0VudGVyIiwiX3VudXNlZDIiXSwic291cmNlcyI6WyJib3QtY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9ID0gUmVhY3Q7XHJcblxyXG5jb25zdCBCT1RfQlVUVE9OX1RZUEVTID0gW1xyXG4gIHsgaWQ6IFwic2NyZWVuXCIsIGxhYmVsOiBcItCf0LXRgNC10YXQvtC0INC90LAg0Y3QutGA0LDQvVwiLCBlbW9qaTogXCLwn6etXCIgfSxcclxuICB7IGlkOiBcImJvb2tcIiwgbGFiZWw6IFwi0JfQsNC/0LjRgdCw0YLRjNGB0Y9cIiwgZW1vamk6IFwi8J+Xk++4j1wiIH0sXHJcbiAgeyBpZDogXCJkZXNjcmlwdGlvblwiLCBsYWJlbDogXCLQntC/0LjRgdCw0L3QuNC1XCIsIGVtb2ppOiBcIvCfk51cIiB9LFxyXG4gIHsgaWQ6IFwicHJvZmlsZVwiLCBsYWJlbDogXCLQn9GA0L7RhNC40LvRjFwiLCBlbW9qaTogXCLwn5GkXCIgfSxcclxuICB7IGlkOiBcInVzZXJBcHBvaW50bWVudHNcIiwgbGFiZWw6IFwi0JzQvtC4INC30LDQv9C40YHQuFwiLCBlbW9qaTogXCLwn5OUXCIgfSxcclxuICB7IGlkOiBcImN1c3RvbVwiLCBsYWJlbDogXCLQodCy0L7RjyDQutC90L7Qv9C60LBcIiwgZW1vamk6IFwi4pyoXCIgfSxcclxuXTtcclxuY29uc3QgQk9UX0JVVFRPTl9UWVBFX1NFVCA9IG5ldyBTZXQoQk9UX0JVVFRPTl9UWVBFUy5tYXAoKGl0ZW0pID0+IGl0ZW0uaWQpKTtcclxuXHJcbmNvbnN0IGNyZWF0ZURyYWdQcmV2aWV3ID0gKG5vZGUsIHN0YXJ0RXZlbnQpID0+IHtcclxuICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHJlY3QgPSBzdGFydEV2ZW50Py5jdXJyZW50VGFyZ2V0Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xyXG4gIGNvbnN0IGNsb25lID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgY29uc3Qgd2lkdGggPSByZWN0Py53aWR0aCB8fCBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk/LndpZHRoIHx8IG5vZGUub2Zmc2V0V2lkdGg7XHJcbiAgY29uc3QgaGVpZ2h0ID0gcmVjdD8uaGVpZ2h0IHx8IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKT8uaGVpZ2h0IHx8IG5vZGUub2Zmc2V0SGVpZ2h0O1xyXG4gIGlmICh3aWR0aCkgY2xvbmUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgaWYgKGhlaWdodCkgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICBjbG9uZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICBjbG9uZS5zdHlsZS50b3AgPSBcIjBcIjtcclxuICBjbG9uZS5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgY2xvbmUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTk5OTlweCwtOTk5OXB4KSBzY2FsZSgxKVwiO1xyXG4gIGNsb25lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICBjbG9uZS5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgY2xvbmUuc3R5bGUud2lsbENoYW5nZSA9IFwidHJhbnNmb3JtXCI7XHJcbiAgY2xvbmUuc3R5bGUuYm94U2hhZG93ID0gXCIwIDE4cHggNDVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSlcIjtcclxuICBjbG9uZS5zdHlsZS56SW5kZXggPSBcIjk5OTlcIjtcclxuICBjbG9uZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjk1XCI7XHJcbiAgY2xvbmUuY2xhc3NMaXN0Py5hZGQoXCJkcmFnLXNoYWRvd1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICBjb25zdCBvZmZzZXRYID0gcmVjdCA/IHN0YXJ0RXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCA6IGNsb25lLm9mZnNldFdpZHRoIC8gMjtcclxuICBjb25zdCBvZmZzZXRZID0gcmVjdCA/IHN0YXJ0RXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIDogY2xvbmUub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICByZXR1cm4ge1xyXG4gICAgY2xvbmUsXHJcbiAgICBvZmZzZXRYLFxyXG4gICAgb2Zmc2V0WSxcclxuICAgIHVwZGF0ZTogKHgsIHkpID0+IHtcclxuICAgICAgY2xvbmUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3ggLSBvZmZzZXRYfXB4LCAke3kgLSBvZmZzZXRZfXB4KWA7XHJcbiAgICAgIGNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH0sXHJcbiAgICBjbGVhbnVwOiAoKSA9PiB7XHJcbiAgICAgIGlmIChjbG9uZS5wYXJlbnROb2RlKSBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGRlc3Ryb3lEcmFnUHJldmlldyA9IChjbG9uZSkgPT4ge1xyXG4gIGlmICghY2xvbmUpIHJldHVybjtcclxuICBjbG9uZS5jbGVhbnVwPy4oKTtcclxuICBjb25zdCBub2RlID0gY2xvbmUuY2xvbmUgfHwgY2xvbmU7XHJcbiAgaWYgKG5vZGU/LnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufTtcclxuXHJcbmNvbnN0IHNhbml0aXplSWQgPSAodmFsdWUgPSBcIlwiKSA9PlxyXG4gIHZhbHVlXHJcbiAgICAudG9TdHJpbmcoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEtejAtOV8tXSsvZywgXCItXCIpXHJcbiAgICAucmVwbGFjZSgvKF4tfC0kKS9nLCBcIlwiKVxyXG4gICAgfHwgXCJpdGVtXCI7XHJcblxyXG5jb25zdCBzb3J0QnV0dG9ucyA9IChidXR0b25zID0gW10pID0+XHJcbiAgWy4uLmJ1dHRvbnNdLnNvcnQoKGEsIGIpID0+IChhLnJvdyA/PyAwKSAtIChiLnJvdyA/PyAwKSB8fCAoYS5vcmRlciA/PyAwKSAtIChiLm9yZGVyID8/IDApKTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZUJ1dHRvbk9yZGVyID0gKGJ1dHRvbnMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IHNvcnRlZCA9IHNvcnRCdXR0b25zKFsuLi5idXR0b25zXSk7XHJcbiAgbGV0IGN1cnJlbnRSb3cgPSBudWxsO1xyXG4gIGxldCBub3JtYWxpemVkUm93ID0gLTE7XHJcbiAgbGV0IG9yZGVyID0gMDtcclxuICByZXR1cm4gc29ydGVkLm1hcCgoYnRuKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFJvdyA9PT0gbnVsbCB8fCBidG4ucm93ICE9PSBjdXJyZW50Um93KSB7XHJcbiAgICAgIGN1cnJlbnRSb3cgPSBidG4ucm93O1xyXG4gICAgICBub3JtYWxpemVkUm93ICs9IDE7XHJcbiAgICAgIG9yZGVyID0gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHQgPSB7IC4uLmJ0biwgcm93OiBub3JtYWxpemVkUm93LCBvcmRlciB9O1xyXG4gICAgb3JkZXIgKz0gMTtcclxuICAgIHJldHVybiBuZXh0O1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGluc2VydEJ1dHRvbkF0UG9zaXRpb24gPSAoYnV0dG9ucyA9IFtdLCBidXR0b24sIHRhcmdldFJvdyA9IDAsIHRhcmdldE9yZGVyID0gMCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgaWYgKCFidXR0b24pIHJldHVybiBidXR0b25zO1xyXG4gIGNvbnN0IHsgY3JlYXRlTmV3Um93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBidXR0b25zLmZpbHRlcigoYnRuKSA9PiBidG4uaWQgIT09IGJ1dHRvbi5pZCk7XHJcbiAgY29uc3Qgcm93c01hcCA9IG5ldyBNYXAoKTtcclxuICBzb3J0QnV0dG9ucyhmaWx0ZXJlZCkuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBjb25zdCByb3dJZCA9IE51bWJlci5pc0Zpbml0ZShidG4ucm93KSA/IE51bWJlcihidG4ucm93KSA6IDA7XHJcbiAgICBpZiAoIXJvd3NNYXAuaGFzKHJvd0lkKSkgcm93c01hcC5zZXQocm93SWQsIFtdKTtcclxuICAgIHJvd3NNYXAuZ2V0KHJvd0lkKS5wdXNoKGJ0bik7XHJcbiAgfSk7XHJcblxyXG4gIGxldCByb3dFbnRyaWVzID0gQXJyYXkuZnJvbShyb3dzTWFwLmVudHJpZXMoKSkuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xyXG4gIGlmIChjcmVhdGVOZXdSb3cpIHtcclxuICAgIHJvd0VudHJpZXMgPSByb3dFbnRyaWVzXHJcbiAgICAgIC5tYXAoKFtyb3dJZCwgbGlzdF0pID0+IFtyb3dJZCA+PSB0YXJnZXRSb3cgPyByb3dJZCArIDEgOiByb3dJZCwgbGlzdF0pXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3dzID0gbmV3IE1hcChyb3dFbnRyaWVzKTtcclxuICBjb25zdCByb3dMaXN0ID0gcm93cy5nZXQodGFyZ2V0Um93KSA/IFsuLi5yb3dzLmdldCh0YXJnZXRSb3cpXSA6IFtdO1xyXG4gIGNvbnN0IGluc2VydEluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgodGFyZ2V0T3JkZXIsIDApLCByb3dMaXN0Lmxlbmd0aCk7XHJcbiAgcm93TGlzdC5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIHsgLi4uYnV0dG9uLCByb3c6IHRhcmdldFJvdywgb3JkZXI6IGluc2VydEluZGV4IH0pO1xyXG4gIHJvd3Muc2V0KHRhcmdldFJvdywgcm93TGlzdCk7XHJcblxyXG4gIGNvbnN0IHJlYnVpbHQgPSBbXTtcclxuICBBcnJheS5mcm9tKHJvd3MuZW50cmllcygpKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxyXG4gICAgLmZvckVhY2goKFtyb3dJZCwgbGlzdF0pID0+IHtcclxuICAgICAgc29ydEJ1dHRvbnMobGlzdCkuZm9yRWFjaCgoYnRuLCBpZHgpID0+IHtcclxuICAgICAgICByZWJ1aWx0LnB1c2goeyAuLi5idG4sIHJvdzogcm93SWQsIG9yZGVyOiBpZHggfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZUJ1dHRvbk9yZGVyKHJlYnVpbHQpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplQnV0dG9uID0gKGJ0biwgaWR4ID0gMCwgc2NyZWVuSWQgPSBcInNjcmVlblwiKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBzYW5pdGl6ZUlkKGJ0bj8uaWQgfHwgYGJ0bi0ke3NjcmVlbklkfS0ke2lkeCArIDF9YCk7XHJcbiAgY29uc3QgbGFiZWwgPSAoYnRuPy5sYWJlbCB8fCBidG4/LnRleHQgfHwgYNCa0L3QvtC/0LrQsCAke2lkeCArIDF9YCkudG9TdHJpbmcoKTtcclxuICBjb25zdCB0eXBlID0gQk9UX0JVVFRPTl9UWVBFX1NFVC5oYXMoYnRuPy50eXBlKVxyXG4gICAgPyBidG4udHlwZVxyXG4gICAgOiBbXCJzdGFmZlwiLCBcInNlcnZpY2VcIiwgXCJkYXRlXCIsIFwidGltZVwiXS5pbmNsdWRlcyhidG4/LnR5cGUpXHJcbiAgICAgID8gXCJib29rXCJcclxuICAgICAgOiBcInNjcmVlblwiO1xyXG4gIGNvbnN0IHRhcmdldFNjcmVlbklkID0gYnRuPy50YXJnZXRTY3JlZW5JZCB8fCBidG4/LnRhcmdldCB8fCBudWxsO1xyXG4gIGNvbnN0IHBheWxvYWQgPSBidG4/LnBheWxvYWQgPz8gXCJcIjtcclxuICBjb25zdCByb3cgPSBOdW1iZXIuaXNGaW5pdGUoYnRuPy5yb3cpID8gTnVtYmVyKGJ0bi5yb3cpIDogTWF0aC5mbG9vcihpZHggLyAyKTtcclxuICBjb25zdCBvcmRlciA9IE51bWJlci5pc0Zpbml0ZShidG4/Lm9yZGVyKSA/IE51bWJlcihidG4ub3JkZXIpIDogaWR4O1xyXG4gIHJldHVybiB7IGlkLCBsYWJlbCwgdHlwZSwgdGFyZ2V0U2NyZWVuSWQsIHBheWxvYWQsIHJvdywgb3JkZXIgfTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVNjcmVlbiA9IChzY3JlZW4sIGlkeCA9IDApID0+IHtcclxuICBjb25zdCBpZCA9IHNhbml0aXplSWQoc2NyZWVuPy5pZCB8fCBgc2NyZWVuLSR7aWR4ICsgMX1gKTtcclxuICBjb25zdCB0aXRsZSA9IChzY3JlZW4/LnRpdGxlIHx8IHNjcmVlbj8ubmFtZSB8fCBg0K3QutGA0LDQvSAke2lkeCArIDF9YCkudG9TdHJpbmcoKTtcclxuICBjb25zdCBtZXNzYWdlID0gc2NyZWVuPy5tZXNzYWdlID8/IHNjcmVlbj8udGV4dCA/PyBcIlwiO1xyXG4gIGNvbnN0IGltYWdlVXJsID0gc2NyZWVuPy5pbWFnZVVybCB8fCBzY3JlZW4/LmltYWdlIHx8IFwiXCI7XHJcbiAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmlzQXJyYXkoc2NyZWVuPy5idXR0b25zKVxyXG4gICAgPyBub3JtYWxpemVCdXR0b25PcmRlcihzY3JlZW4uYnV0dG9ucy5tYXAoKGJ0biwgaSkgPT4gbm9ybWFsaXplQnV0dG9uKGJ0biwgaSwgaWQpKSlcclxuICAgIDogW107XHJcbiAgcmV0dXJuIHsgaWQsIHRpdGxlLCBtZXNzYWdlLCBpbWFnZVVybCwgYnV0dG9ucyB9O1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplTWVudURyYWZ0ID0gKG1lbnUpID0+IHtcclxuICBjb25zdCBzY3JlZW5zID0gQXJyYXkuaXNBcnJheShtZW51Py5zY3JlZW5zKSAmJiBtZW51LnNjcmVlbnMubGVuZ3RoXHJcbiAgICA/IG1lbnUuc2NyZWVucy5tYXAoKHNjciwgaWR4KSA9PiBub3JtYWxpemVTY3JlZW4oc2NyLCBpZHgpKVxyXG4gICAgOiBbbm9ybWFsaXplU2NyZWVuKHsgaWQ6IFwibWFpblwiLCB0aXRsZTogXCLQk9C70LDQstC90L7QtSDQvNC10L3RjlwiLCBtZXNzYWdlOiBcItCU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YwhXCIsIGJ1dHRvbnM6IFtdIH0sIDApXTtcclxuICBjb25zdCBidXR0b25UeXBlcyA9IEFycmF5LmlzQXJyYXkobWVudT8uYnV0dG9uVHlwZXMpICYmIG1lbnUuYnV0dG9uVHlwZXMubGVuZ3RoID8gbWVudS5idXR0b25UeXBlcyA6IEJPVF9CVVRUT05fVFlQRVM7XHJcbiAgY29uc3QgdmVyc2lvbiA9IE51bWJlcihtZW51Py52ZXJzaW9uKSB8fCAxO1xyXG4gIGNvbnN0IHVwZGF0ZWRBdCA9IG1lbnU/LnVwZGF0ZWRBdCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgcmV0dXJuIHsgdmVyc2lvbiwgdXBkYXRlZEF0LCBzY3JlZW5zLCBidXR0b25UeXBlcyB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVhZEZpbGVBc0RhdGFVcmwgPSAoZmlsZSkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCB8fCBcIlwiKTtcclxuICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBCdXR0b25UeXBlQmFkZ2UgPSAoeyB0eXBlIH0pID0+IHtcclxuICBjb25zdCBpdGVtID0gQk9UX0JVVFRPTl9UWVBFUy5maW5kKChlbnRyeSkgPT4gZW50cnkuaWQgPT09IHR5cGUpO1xyXG4gIGlmICghaXRlbSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS81IHB4LTIuNSBweS0xIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbGF0ZS0xMDAgcmluZy0xIHJpbmctd2hpdGUvMTBcIj5cclxuICAgICAgPHNwYW4+e2l0ZW0uZW1vamkgfHwgXCLimqFcIn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25FZGl0UGFuZWwgPSAoe1xyXG4gIGJ1dHRvbixcclxuICBzY3JlZW5zLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uUmVtb3ZlLFxyXG4gIG9uRHJvcFNlbGVjdCxcclxuICBpc0VkaXRpbmcsXHJcbiAgaXNEcm9wVGFyZ2V0QWN0aXZlLFxyXG4gIGlzRHJhZ2dpbmcsXHJcbiAgcGFuZWxSZWYgPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2lzRHJhZ0FjdGl2ZSwgc2V0SXNEcmFnQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkcmFnQWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICBjb25zdCBkcm9wSGFuZGxlcnMgPSB7XHJcbiAgICBvbkRyYWdPdmVyOiAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICghZHJhZ0FjdGl2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZHJhZ0FjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICBzZXRJc0RyYWdBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRyb3A6IChlKSA9PiB7XHJcbiAgICAgIG9uRHJvcFNlbGVjdD8uKGUpO1xyXG4gICAgICBpZiAoZHJhZ0FjdGl2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZHJhZ0FjdGl2ZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgc2V0SXNEcmFnQWN0aXZlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0xlYXZlOiAoKSA9PiB7XHJcbiAgICAgIGlmIChkcmFnQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkcmFnQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0RyYWdBY3RpdmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGlmICghYnV0dG9uKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgey4uLmRyb3BIYW5kbGVyc31cclxuICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItaW5kaWdvLTUwMC80MCBiZy1zbGF0ZS05MDAvNzAgcC0zIHRleHQtc2xhdGUtMzAwIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgIGlzRHJhZ0FjdGl2ZSA/IFwic2NhbGUtWzEuMDFdIHJpbmctMiByaW5nLWluZGlnby00MDAvNjAgc2hhZG93LVswXzE1cHhfNDBweF9yZ2JhKDk5LDEwMiwyNDEsMC4yNSldXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUvODBcIj7Qn9C10YDQtdGC0LDRidC40YLQtSDQutC90L7Qv9C60YMg0YHRjtC00LAsINGH0YLQvtCx0Ysg0L7RgtC60YDRi9GC0Ywg0LXRkSDQvdCw0YHRgtGA0L7QudC60Lg8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPtCh0LXQutGG0LjRjyDQv9C+0LTRgdCy0LXRgtC40YLRgdGPINC4INC/0YDQuNGC0Y/QvdC10YIg0Y3Qu9C10LzQtdC90YIuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4uZHJvcEhhbmRsZXJzfVxyXG4gICAgICByZWY9e3BhbmVsUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zbGF0ZS05NTAvODUgdmlhLXNsYXRlLTkwMC83MCB0by1pbmRpZ28tOTAwLzcwIHAtMi41IHNoYWRvdy0yeGwgcmluZy0xIHJpbmctaW5kaWdvLTgwMC81MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc206cC0zICR7XHJcbiAgICAgICAgaXNEcmFnQWN0aXZlID8gXCJzY2FsZS1bMS4wMV0gcmluZy0yIHJpbmctaW5kaWdvLTQwMC83MCBzaGFkb3ctWzBfMjBweF83MHB4X3JnYmEoOTksMTAyLDI0MSwwLjM1KV1cIiA6IFwiXCJcclxuICAgICAgfSAke1xyXG4gICAgICAgIGlzRHJhZ2dpbmdcclxuICAgICAgICAgID8gXCJyaW5nLTIgcmluZy1pbmRpZ28tNDAwLzcwIHNjYWxlLVsxLjAxXSBhbmltYXRlLVttYWduZXRQdWxsXzAuOXNfZWFzZS1pbi1vdXRfaW5maW5pdGVdXCJcclxuICAgICAgICAgIDogXCJcIlxyXG4gICAgICB9ICR7aXNEcm9wVGFyZ2V0QWN0aXZlID8gXCJyaW5nLTIgcmluZy1lbWVyYWxkLTQwMC83MCBzY2FsZS1bMS4wMV1cIiA6IFwiXCJ9YH1cclxuICAgID5cclxuICAgICAge2lzRHJhZ2dpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHotMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2xhdGUtOTAwLzQwIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcm91bmRlZC0yeGwgYmctc2xhdGUtOTAwLzgwIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSByaW5nLTEgcmluZy13aGl0ZS8xMCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKcj++4jzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPvCfl5HvuI88L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgYmctW3JhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfMTAlXzIwJSxyZ2JhKDk5LDEwMiwyNDEsMC4xMiksdHJhbnNwYXJlbnRfMzUlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0XzgwJV8wJSxyZ2JhKDE0LDE2NSwyMzMsMC4xMiksdHJhbnNwYXJlbnRfMzAlKV1cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktMi41IHNtOnNwYWNlLXktM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTQwMFwiPtCd0LDRgdGC0YDQvtC50LrQuCDQutC90L7Qv9C60Lg8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57YnV0dG9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblR5cGVCYWRnZSB0eXBlPXtidXR0b24udHlwZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIuNSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj7QotC10LrRgdGCPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvbi5sYWJlbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKHsgLi4uYnV0dG9uLCBsYWJlbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0VkaXRpbmd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvODAgcHgtMyBweS0xLjUgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+0KLQuNC/PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtidXR0b24udHlwZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKHsgLi4uYnV0dG9uLCB0eXBlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvODAgcHgtMyBweS0xLjUgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Qk9UX0JVVFRPTl9UWVBFUy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0eXBlLmlkfSB2YWx1ZT17dHlwZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yLjUgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPtCf0LXRgNC10YXQvtC0INC90LAg0Y3QutGA0LDQvTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17YnV0dG9uLnRhcmdldFNjcmVlbklkIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZSh7IC4uLmJ1dHRvbiwgdGFyZ2V0U2NyZWVuSWQ6IGUudGFyZ2V0LnZhbHVlIHx8IG51bGwgfSl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0VkaXRpbmd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgYmctc2xhdGUtOTAwLzgwIHB4LTMgcHktMS41IHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctaW5uZXIgdHJhbnNpdGlvbiBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuKAlDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtzY3JlZW5zLm1hcCgoc2NyZWVuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c2NyZWVuLmlkfSB2YWx1ZT17c2NyZWVuLmlkfT5cclxuICAgICAgICAgICAgICAgICAge3NjcmVlbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDaGF0UHJldmlldyA9ICh7XHJcbiAgc2NyZWVuLFxyXG4gIHNjcmVlbnMsXHJcbiAgb25TZWxlY3RCdXR0b24sXHJcbiAgb25OYXZpZ2F0ZSxcclxuICBvbk1vdmVCdXR0b24sXHJcbiAgb25BZGRGcm9tUGFsZXR0ZSxcclxuICBvblJlbW92ZUJ1dHRvbixcclxuICBvbkltYWdlQ2hhbmdlLFxyXG4gIG9uTWVzc2FnZUNoYW5nZSxcclxuICBvblRpdGxlQ2hhbmdlLFxyXG4gIGRyb3Bab25lcyxcclxuICBpc0VkaXRpbmcsXHJcbiAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlLFxyXG4gIG9uRHJhZ1N0YXRlQ2hhbmdlLFxyXG4gIGdhbGxlcnlJbWFnZXMsXHJcbiAgb25TZWxlY3RHYWxsZXJ5SW1hZ2UsXHJcbiAgb25VcGxvYWRJbWFnZSxcclxuICBpc0dhbGxlcnlMb2FkaW5nID0gZmFsc2UsXHJcbiAgb25Ub2dnbGVFZGl0aW5nLFxyXG4gIG9uU2F2ZSxcclxuICBpc1NhdmluZyA9IGZhbHNlLFxyXG4gIGlzTG9hZGluZyA9IGZhbHNlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtkcmFnZ2luZ0lkLCBzZXREcmFnZ2luZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGRyYWdQcmV2aWV3UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyYWdQYXlsb2FkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyYWdNb3ZlRnJhbWVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJhZ01vdmVDb29yZHNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2Ryb3BSb3dIaWdobGlnaHQsIHNldERyb3BSb3dIaWdobGlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Ryb3BPcmRlckhpZ2hsaWdodCwgc2V0RHJvcE9yZGVySGlnaGxpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkcmFnU3RhdGUsIHNldERyYWdTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3dzQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFt1cGxvYWRpbmdJbWFnZSwgc2V0VXBsb2FkaW5nSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZUVycm9yLCBzZXRJbWFnZUVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm93cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgcm93c01hcCA9IG5ldyBNYXAoKTtcclxuICAgIChzY3JlZW4/LmJ1dHRvbnMgfHwgW10pLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBjb25zdCByb3dJbmRleCA9IE51bWJlcihidG4ucm93IHx8IDApO1xyXG4gICAgICBpZiAoIXJvd3NNYXAuaGFzKHJvd0luZGV4KSkgcm93c01hcC5zZXQocm93SW5kZXgsIFtdKTtcclxuICAgICAgcm93c01hcC5nZXQocm93SW5kZXgpLnB1c2goYnRuKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocm93c01hcC5lbnRyaWVzKCkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcclxuICAgICAgLm1hcCgoW3Jvd0lkLCBidG5zXSkgPT4gKHtcclxuICAgICAgICByb3dJZCxcclxuICAgICAgICBidXR0b25zOiBidG5zLnNvcnQoKGEsIGIpID0+IChhLm9yZGVyID8/IDApIC0gKGIub3JkZXIgPz8gMCkpLFxyXG4gICAgICB9KSk7XHJcbiAgfSwgW3NjcmVlbl0pO1xyXG5cclxuICBjb25zdCBnYWxsZXJ5TGlzdCA9IHVzZU1lbW8oKCkgPT4gKEFycmF5LmlzQXJyYXkoZ2FsbGVyeUltYWdlcykgPyBnYWxsZXJ5SW1hZ2VzIDogW10pLCBbZ2FsbGVyeUltYWdlc10pO1xyXG4gIGNvbnN0IHRvcFJvd1ZhbHVlID0gdXNlTWVtbygoKSA9PiAocm93c1swXT8ucm93SWQgPz8gMCkgLSAwLjUsIFtyb3dzXSk7XHJcbiAgY29uc3QgYm90dG9tUm93VmFsdWUgPSB1c2VNZW1vKCgpID0+IChyb3dzW3Jvd3MubGVuZ3RoIC0gMV0/LnJvd0lkID8/IDApICsgMC41LCBbcm93c10pO1xyXG4gIGNvbnN0IGF1dG9zaXplVGV4dGFyZWEgPSB1c2VDYWxsYmFjaygobm9kZSkgPT4ge1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBgJHtub2RlLnNjcm9sbEhlaWdodH1weGA7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpc0luc2lkZURyb3Bab25lID0gdXNlQ2FsbGJhY2soKGV2ZW50LCByZWYpID0+IHtcclxuICAgIGlmICghZXZlbnQgfHwgIXJlZj8uY3VycmVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcmVjdCA9IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcclxuICAgIHJldHVybiBjbGllbnRYID49IHJlY3QubGVmdCAmJiBjbGllbnRYIDw9IHJlY3QucmlnaHQgJiYgY2xpZW50WSA+PSByZWN0LnRvcCAmJiBjbGllbnRZIDw9IHJlY3QuYm90dG9tO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+ICgpID0+IGRlc3Ryb3lEcmFnUHJldmlldyhkcmFnUHJldmlld1JlZi5jdXJyZW50KSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93Ll9fYm90TWVudUJlZ2luRHJhZyA9IGJlZ2luRHJhZztcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuX19ib3RNZW51QmVnaW5EcmFnID09PSBiZWdpbkRyYWcpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93Ll9fYm90TWVudUJlZ2luRHJhZztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbYmVnaW5EcmFnXSk7XHJcblxyXG4gIGNvbnN0IGNsZWFyUHJldmlldyA9ICgpID0+IHtcclxuICAgIGRlc3Ryb3lEcmFnUHJldmlldyhkcmFnUHJldmlld1JlZi5jdXJyZW50KTtcclxuICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlUGF5bG9hZCA9IChwYXlsb2FkLCByb3dJbmRleCwgb3JkZXJJbmRleCA9IDAsIGNyZWF0ZU5ld1JvdyA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcclxuICAgIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gXCJwYWxldHRlXCIgJiYgcGF5bG9hZC50eXBlKSB7XHJcbiAgICAgIG9uQWRkRnJvbVBhbGV0dGU/LihwYXlsb2FkLnR5cGUsIHJvd0luZGV4LCBvcmRlckluZGV4LCBjcmVhdGVOZXdSb3cpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGF5bG9hZC5pZCkge1xyXG4gICAgICBvbk1vdmVCdXR0b24/LihwYXlsb2FkLmlkLCByb3dJbmRleCwgb3JkZXJJbmRleCwgY3JlYXRlTmV3Um93KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUZpbGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChmaWxlKSA9PiB7XHJcbiAgICAgIGlmICghZmlsZSB8fCAhaXNFZGl0aW5nKSByZXR1cm47XHJcbiAgICAgIGlmICghZmlsZS50eXBlPy5zdGFydHNXaXRoPy4oXCJpbWFnZS9cIikpIHtcclxuICAgICAgICBzZXRJbWFnZUVycm9yKFwi0JfQsNCz0YDRg9C30LjRgtC1INGE0LDQudC7INC40LfQvtCx0YDQsNC20LXQvdC40Y8uXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzZXRJbWFnZUVycm9yKFwiXCIpO1xyXG4gICAgICBpZiAodHlwZW9mIG9uVXBsb2FkSW1hZ2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHNldFVwbG9hZGluZ0ltYWdlKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBvblVwbG9hZEltYWdlKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTWVudSBpbWFnZSB1cGxvYWQgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgc2V0SW1hZ2VFcnJvcihlcnJvcj8ubWVzc2FnZSB8fCBcItCd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LVcIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldFVwbG9hZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2Ygb25JbWFnZUNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgb25JbWFnZUNoYW5nZShmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpc0VkaXRpbmcsIG9uSW1hZ2VDaGFuZ2UsIG9uVXBsb2FkSW1hZ2VdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdhbGxlcnlQaWNrID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc3JjKSA9PiB7XHJcbiAgICAgIGlmICghaXNFZGl0aW5nIHx8ICFzcmMpIHJldHVybjtcclxuICAgICAgb25TZWxlY3RHYWxsZXJ5SW1hZ2U/LihzcmMpO1xyXG4gICAgfSxcclxuICAgIFtpc0VkaXRpbmcsIG9uU2VsZWN0R2FsbGVyeUltYWdlXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlSW5wdXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudCkgPT4ge1xyXG4gICAgICBhdXRvc2l6ZVRleHRhcmVhKGV2ZW50Py50YXJnZXQpO1xyXG4gICAgICBvbk1lc3NhZ2VDaGFuZ2U/LihldmVudD8udGFyZ2V0Py52YWx1ZSB8fCBcIlwiKTtcclxuICAgIH0sXHJcbiAgICBbYXV0b3NpemVUZXh0YXJlYSwgb25NZXNzYWdlQ2hhbmdlXSxcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgIGNvbnN0IGhhbmRsZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZHJhZ01vdmVDb29yZHNSZWYuY3VycmVudCA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgICBpZiAoIWRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICBkcmFnTW92ZUZyYW1lUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgY29uc3QgY29vcmRzID0gZHJhZ01vdmVDb29yZHNSZWYuY3VycmVudDtcclxuICAgICAgICAgIGlmIChjb29yZHMpIHtcclxuICAgICAgICAgICAgZHJhZ1ByZXZpZXdSZWYuY3VycmVudD8udXBkYXRlPy4oY29vcmRzLngsIGNvb3Jkcy55KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0Wm9uZSA9IGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8uc2V0dGluZ3NSZWYpXHJcbiAgICAgICAgPyBcInNldHRpbmdzXCJcclxuICAgICAgICA6IGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8ucGFsZXR0ZVJlZilcclxuICAgICAgICAgID8gXCJwYWxldHRlXCJcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obmV4dFpvbmUpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gcm93c0NvbnRhaW5lclJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xyXG4gICAgICBpZiAoY29udGFpbmVyUmVjdCkge1xyXG4gICAgICAgIGlmIChldmVudC5jbGllbnRZIDwgY29udGFpbmVyUmVjdC50b3AgLSAxMikge1xyXG4gICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCh0b3BSb3dWYWx1ZSk7XHJcbiAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5jbGllbnRZID4gY29udGFpbmVyUmVjdC5ib3R0b20gKyAxMikge1xyXG4gICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChib3R0b21Sb3dWYWx1ZSk7XHJcbiAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5ld1Jvd1RhcmdldCA9IGV2ZW50LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtbmV3LXJvdy10YXJnZXRdXCIpO1xyXG4gICAgICBjb25zdCByb3dOb2RlID0gZXZlbnQudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1yb3ctaWRdXCIpO1xyXG4gICAgICBpZiAoIXJvd05vZGUgJiYgIW5ld1Jvd1RhcmdldCkge1xyXG4gICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlVXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29tbWl0RHJvcChldmVudCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbGVhclByZXZpZXcoKTtcclxuICAgICAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHNldERyYWdTdGF0ZShudWxsKTtcclxuICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBoYW5kbGVNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVVcCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgZHJhZ01vdmVGcmFtZVJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcclxuICAgICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obnVsbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtib3R0b21Sb3dWYWx1ZSwgZHJhZ1N0YXRlLCBkcm9wWm9uZXMsIGlzSW5zaWRlRHJvcFpvbmUsIG9uRHJvcFpvbmVIb3ZlckNoYW5nZSwgdG9wUm93VmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF1dG9zaXplVGV4dGFyZWEobWVzc2FnZVJlZi5jdXJyZW50KTtcclxuICB9LCBbYXV0b3NpemVUZXh0YXJlYSwgc2NyZWVuPy5tZXNzYWdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvbkRyYWdTdGF0ZUNoYW5nZT8uKCEhZHJhZ1N0YXRlKTtcclxuICB9LCBbZHJhZ1N0YXRlLCBvbkRyYWdTdGF0ZUNoYW5nZV0pO1xyXG5cclxuICBjb25zdCBiZWdpbkRyYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChwYXlsb2FkLCBvcmlnaW5Ob2RlLCBldmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWV2ZW50IHx8ICFpc0VkaXRpbmcpIHJldHVybjtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBwYXlsb2FkO1xyXG4gICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KHBheWxvYWQuZnJvbVJvdyA/PyBudWxsKTtcclxuICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KHBheWxvYWQuZnJvbU9yZGVyID8/IG51bGwpO1xyXG4gICAgICBzZXREcmFnU3RhdGUocGF5bG9hZCk7XHJcbiAgICAgIHNldERyYWdnaW5nSWQocGF5bG9hZC5pZCB8fCBudWxsKTtcclxuICAgICAgY29uc3QgcHJldmlldyA9IGNyZWF0ZURyYWdQcmV2aWV3KG9yaWdpbk5vZGUsIGV2ZW50KTtcclxuICAgICAgZHJhZ1ByZXZpZXdSZWYuY3VycmVudCA9IHByZXZpZXc7XHJcbiAgICAgIHByZXZpZXc/LnVwZGF0ZT8uKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgfSxcclxuICAgIFtpc0VkaXRpbmddLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbW1pdERyb3AgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8uc2V0dGluZ3NSZWYpICYmIGRyYWdTdGF0ZS5pZCkge1xyXG4gICAgICAgIG9uU2VsZWN0QnV0dG9uPy4oZHJhZ1N0YXRlLmlkKTtcclxuICAgICAgICBjbGVhclByZXZpZXcoKTtcclxuICAgICAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHNldERyYWdTdGF0ZShudWxsKTtcclxuICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgICBvbkRyb3Bab25lSG92ZXJDaGFuZ2U/LihudWxsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8ucGFsZXR0ZVJlZikgJiYgZHJhZ1N0YXRlLmlkKSB7XHJcbiAgICAgICAgb25SZW1vdmVCdXR0b24/LihkcmFnU3RhdGUuaWQpO1xyXG4gICAgICAgIGNsZWFyUHJldmlldygpO1xyXG4gICAgICAgIHNldERyYWdnaW5nSWQobnVsbCk7XHJcbiAgICAgICAgZHJhZ1BheWxvYWRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgc2V0RHJhZ1N0YXRlKG51bGwpO1xyXG4gICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIG9uRHJvcFpvbmVIb3ZlckNoYW5nZT8uKG51bGwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmF3Um93ID0gZHJvcFJvd0hpZ2hsaWdodCA/PyBkcmFnU3RhdGUuZnJvbVJvdyA/PyAwO1xyXG4gICAgY29uc3QgaXNCZXR3ZWVuUm93cyA9IE51bWJlci5pc0Zpbml0ZShyYXdSb3cpICYmIE1hdGguYWJzKHJhd1JvdyAlIDEpID09PSAwLjU7XHJcbiAgICBjb25zdCB0YXJnZXRSb3cgPSBOdW1iZXIuaXNGaW5pdGUocmF3Um93KSA/IChpc0JldHdlZW5Sb3dzID8gTWF0aC5jZWlsKHJhd1JvdykgOiBNYXRoLnJvdW5kKHJhd1JvdykpIDogMDtcclxuICAgIGNvbnN0IHRhcmdldE9yZGVyID0gZHJvcE9yZGVySGlnaGxpZ2h0ID8/IGRyYWdTdGF0ZS5mcm9tT3JkZXIgPz8gMDtcclxuICAgIHBsYWNlUGF5bG9hZChkcmFnU3RhdGUsIHRhcmdldFJvdywgdGFyZ2V0T3JkZXIsIGlzQmV0d2VlblJvd3MpO1xyXG4gICAgY2xlYXJQcmV2aWV3KCk7XHJcbiAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgZHJhZ1BheWxvYWRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICBzZXREcmFnU3RhdGUobnVsbCk7XHJcbiAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtOTUwLzg1IHZpYS1zbGF0ZS05MDAvNzAgdG8taW5kaWdvLTk1MC83MCBwLTUgc2hhZG93LVswXzI1cHhfOTBweF9yZ2JhKDAsMCwwLDAuNDUpXSByaW5nLTEgcmluZy1pbmRpZ28tOTAwLzUwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGJnLVtyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0XzIwJV8yMCUscmdiYSg5OSwxMDIsMjQxLDAuMTgpLHRyYW5zcGFyZW50XzMyJSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF84MCVfMCUscmdiYSgxNCwxNjUsMjMzLDAuMTgpLHRyYW5zcGFyZW50XzM1JSldXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyBzbTpmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtMVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NyZWVuPy50aXRsZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25UaXRsZUNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QuiDRjdC60YDQsNC90LBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXdoaXRlLzUgcHgtNCBweS0zIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlRWRpdGluZz8uKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCBzaGFkb3ctc20gdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvNzAgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMTUgYmctd2hpdGUvNSB0ZXh0LXNsYXRlLTEwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPuKcj++4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+e2lzRWRpdGluZyA/IFwi0J/QvtC60LjQvdGD0YLRjCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XCIgOiBcItCg0LXQtNCw0LrRgtC+0YBcIn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlPy4oKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tNjAwIHZpYS1ibHVlLTYwMCB0by1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LWxnIHRyYW5zaXRpb24gaG92ZXI6YnJpZ2h0bmVzcy0xMTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCBpc1NhdmluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgfHwgaXNTYXZpbmcgPyBcItCh0L7RhdGA0LDQvdGP0LXQvC4uLlwiIDogXCLQodC+0YXRgNCw0L3QuNGC0YxcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXNsYXRlLTkwMC83MCBzaGFkb3ctaW5uZXJcIj5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bncm91cCByZWxhdGl2ZSBibG9jayBvdmVyZmxvdy1oaWRkZW4gJHtpc0VkaXRpbmcgPyBcImN1cnNvci1wb2ludGVyXCIgOiBcImN1cnNvci1kZWZhdWx0XCJ9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtZ2FsbGVyeS16b25lXVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGlmICghaXNFZGl0aW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgaWYgKGZpbGUpIGhhbmRsZUltYWdlRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NjcmVlbj8uaW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtzY3JlZW4uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Utb3V0IGdyb3VwLWhvdmVyOnNjYWxlLVsxLjAyXVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC02NCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtODAwLzcwIHZpYS1pbmRpZ28tOTAwLzYwIHRvLXNsYXRlLTk1MCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0xMDAgcmluZy0xIHJpbmctaW5kaWdvLTUwMC8zMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPvCflrzvuI88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCX0LDQs9GA0YPQt9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtc2xhdGUtMzAwXCI+0JrQu9C40LrQvdC40YLQtSDQuNC70Lgg0L/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50Ls8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlKSBoYW5kbGVJbWFnZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3VwbG9hZGluZ0ltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAvNzAgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C20LDQtdC8Li4uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS05MDAvNjAgdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMCB0cmFuc2l0aW9uIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCIgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBzcGFjZS15LTIgYmctc2xhdGUtOTUwLzgwIHAtMyB0ZXh0LXdoaXRlIHNoYWRvdy1bMF8tMTBweF8zMHB4X3JnYmEoMCwwLDAsMC4zNSldIHJpbmctMSByaW5nLWluZGlnby01MDAvMzAgYmFja2Ryb3AtYmx1ci1zbSAke1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nID8gXCJwb2ludGVyLWV2ZW50cy1hdXRvXCIgOiBcInBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgZGF0YS1nYWxsZXJ5LXpvbmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+8J+WvO+4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+0JPQsNC70LXRgNC10Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjQuTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNFZGl0aW5nICYmIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItaW5kaWdvLTQwMC82MCBiZy1pbmRpZ28tNTAwLzE1IHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTEwMCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tMzAwIGhvdmVyOnRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNFZGl0aW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpbWFnZUVycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTMwMFwiPntpbWFnZUVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAge2lzR2FsbGVyeUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwXCI+0JfQsNCz0YDRg9C20LDQtdC8INC40LfQvtCx0YDQsNC20LXQvdC40Y8uLi48L3A+XHJcbiAgICAgICAgICAgICAgKSA6IGdhbGxlcnlMaXN0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBzbTpncmlkLWNvbHMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7Z2FsbGVyeUxpc3QubWFwKChzcmMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IChzY3JlZW4/LmltYWdlVXJsIHx8IFwiXCIpID09PSBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYWxsZXJ5UGljayhzcmMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgYm9yZGVyIHRleHQtbGVmdCB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci13aGl0ZS8xMCBiZy1zbGF0ZS05MDAvNzAgaG92ZXI6Ym9yZGVyLWluZGlnby0zMDAgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAkeyFpc0VkaXRpbmcgPyBcIm9wYWNpdHktNjBcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHJpZ2h0LTEgdG9wLTEgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNTAwLzkwIHB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQsdGA0LDQvdC+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICDQn9C+0LrQsCDQvdC10YIg0LfQsNCz0YDRg9C20LXQvdC90YvRhSDQuNC30L7QsdGA0LDQttC10L3QuNC5LiDQlNC+0LHQsNCy0YzRgtC1INGE0LDQudC7LCDRh9GC0L7QsdGLINC+0L0g0L/QvtGP0LLQuNC70YHRjyDQsiDQs9Cw0LvQtdGA0LXQtS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBiZy1zbGF0ZS05MDAvODAgcHgtNCBweS00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcmVmPXttZXNzYWdlUmVmfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW4/Lm1lc3NhZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uSW5wdXQ9e2hhbmRsZU1lc3NhZ2VJbnB1dH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVzaXplLW5vbmUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy13aGl0ZS81IHB4LTMgcHktMS41IHRleHQtc20gdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHQvtC+0LHRidC10L3QuNC1INC00LvRjyDQutC70LjQtdC90YLQsCwg0L7Qv9C40YHQsNC90LjQtSDRjdC60YDQsNC90LBcIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0zIGJnLXNsYXRlLTkwMC83MCBweC00IHBiLTUgcHQtM1wiIHJlZj17cm93c0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgIHtyb3dzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCAke2RyYWdTdGF0ZSA/IFwiei0xMFwiIDogXCJwb2ludGVyLWV2ZW50cy1ub25lXCJ9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MGB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkcmFnU3RhdGUgPyBcIi0xMHB4XCIgOiBcIi02cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRyYWdTdGF0ZSA/IDMyIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBkcmFnU3RhdGUgPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBkcmFnU3RhdGUgPyBcImF1dG9cIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5ldy1yb3ctdGFyZ2V0PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCh0b3BSb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQodG9wUm93VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCh0b3BSb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdERyb3AoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEgdGV4dC1bMTFweF0gdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcFJvd0hpZ2hsaWdodCA9PT0gdG9wUm93VmFsdWUgJiYgZHJhZ1N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCByaW5nLTIgcmluZy1lbWVyYWxkLTQwMC82MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMjAgYmctc2xhdGUtODAwLzcwIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0L7QstCw0Y8g0YHRgtGA0L7QutCwINGB0LLQtdGA0YXRg1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCByb3dJZCA9IE51bWJlcihyb3cucm93SWQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZVJvdyA9IHJvd0lkIC0gMC41O1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzaG93QmVmb3JlID0gaW5kZXggIT09IDAgJiYgISFkcmFnU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0lkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93QmVmb3JlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMCByaWdodC0wIC10b3AtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BSb3dIaWdobGlnaHQgPT09IGJlZm9yZVJvdyA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBkcmFnU3RhdGUgPyBcImF1dG9cIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1uZXctcm93LXRhcmdldD17YGJlZm9yZS0ke3Jvd0lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChiZWZvcmVSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJlZm9yZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJlZm9yZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXREcm9wKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9pbnRlci1ldmVudHMtYXV0byByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTIgcHktMSB0ZXh0LVsxMHB4XSB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BSb3dIaWdobGlnaHQgPT09IGJlZm9yZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCByaW5nLTIgcmluZy1lbWVyYWxkLTQwMC82MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci13aGl0ZS8xNSBiZy1zbGF0ZS05MDAvNzAgdGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QvtCy0LDRjyDRgdGC0YDQvtC60LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LXdyYXAgZ2FwLTIgcm91bmRlZC0yeGwgYmctd2hpdGUvNSBwLTIgcmluZy0xIHJpbmctd2hpdGUvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcFJvd0hpZ2hsaWdodCA9PT0gcm93SWQgPyBcInJpbmctMiByaW5nLWVtZXJhbGQtNDAwLzcwIGJnLWVtZXJhbGQtNTAwLzEwIHNjYWxlLVsxLjAxXVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1yb3ctaWQ9e3Jvd0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KHJvd0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlcyA9IEFycmF5LmZyb20odGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25bZGF0YS1kcmFnLWlkXVwiKSkuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGUpID0+IG5vZGUuZGF0YXNldC5kcmFnSWQgIT09IGRyYWdnaW5nSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSBidG5Ob2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5Ob2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGJ0bk5vZGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkcG9pbnQgPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFggPCBtaWRwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlciA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGJ0bk5vZGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG9yZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0RHJvcChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0aW9uSW5kZXggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ1N0YXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wUm93SGlnaGxpZ2h0ID09PSByb3dJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE9yZGVySGlnaGxpZ2h0ICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5taW4oTWF0aC5tYXgoZHJvcE9yZGVySGlnaGxpZ2h0LCAwKSwgcm93LmJ1dHRvbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyUGxhY2Vob2xkZXIgPSAoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGgtWzQ0cHhdIG1pbi13LVsxNDBweF0gZmxleC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLWVtZXJhbGQtMzAwLzcwIGJnLWVtZXJhbGQtMjAwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlQnV0dG9ucyA9IHJvdy5idXR0b25zLmZpbHRlcigoYnRuKSA9PiBidG4uaWQgIT09IGRyYWdnaW5nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLnZpc2libGVCdXR0b25zXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0aW9uSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oTWF0aC5tYXgoaW5zZXJ0aW9uSW5kZXgsIDApLCBpdGVtcy5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGFjZWhvbGRlcihgcGxhY2Vob2xkZXItJHtyb3dJZH0tJHtpbnNlcnRpb25JbmRleH1gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcy5tYXAoKGJ0bk9yUGxhY2Vob2xkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ0bk9yUGxhY2Vob2xkZXIpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGJ0bk9yUGxhY2Vob2xkZXIpKSByZXR1cm4gYnRuT3JQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGJ0bk9yUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtidG4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kcmFnLWlkPXtidG4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmRlcj17YnRuLm9yZGVyID8/IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFZGl0aW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkRyYWcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnRuLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Sb3c6IE51bWJlcihidG4ucm93IHx8IDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21PcmRlcjogTnVtYmVyKGJ0bi5vcmRlciA/PyBpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBidG4udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwIHJlbGF0aXZlIGZsZXggbWluLXctWzE0MHB4XSBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtMnhsIGJvcmRlciBweC0zIHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjotdHJhbnNsYXRlLXktMC41IGhvdmVyOmJvcmRlci1pbmRpZ28tMzAwIGhvdmVyOnNoYWRvdy1bMF8yMHB4XzQwcHhfcmdiYSg5OSwxMDIsMjQxLDAuMzUpXSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nID8gXCJjdXJzb3ItZ3JhYiBhY3RpdmU6Y3Vyc29yLWdyYWJiaW5nXCIgOiBcImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZ0lkID09PSBidG4uaWQgPyBcIm9wYWNpdHktNDAgYm9yZGVyLXdoaXRlLzIwIGJnLXdoaXRlLzEwXCIgOiBcImJvcmRlci13aGl0ZS8xMCBiZy13aGl0ZS81XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnRhcmdldFNjcmVlbklkID8gb25OYXZpZ2F0ZT8uKGJ0bi50YXJnZXRTY3JlZW5JZCkgOiBvblNlbGVjdEJ1dHRvbj8uKGJ0bi5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntidG4ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCAke2RyYWdTdGF0ZSA/IFwiei0xMFwiIDogXCJwb2ludGVyLWV2ZW50cy1ub25lXCJ9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MGB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBkcmFnU3RhdGUgPyBcIi0xMHB4XCIgOiBcIi02cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRyYWdTdGF0ZSA/IDMyIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBkcmFnU3RhdGUgPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBkcmFnU3RhdGUgPyBcImF1dG9cIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5ldy1yb3ctdGFyZ2V0PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChib3R0b21Sb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQoYm90dG9tUm93VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChib3R0b21Sb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdERyb3AoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEgdGV4dC1bMTFweF0gdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcFJvd0hpZ2hsaWdodCA9PT0gYm90dG9tUm93VmFsdWUgJiYgZHJhZ1N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCByaW5nLTIgcmluZy1lbWVyYWxkLTQwMC82MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMjAgYmctc2xhdGUtODAwLzcwIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0L7QstCw0Y8g0YHRgtGA0L7QutCwINGB0L3QuNC30YNcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTI0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXdoaXRlLzI1IGJnLXdoaXRlLzUgdGV4dC1zbSB0ZXh0LXNsYXRlLTMwMFwiXHJcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1pdERyb3AoZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Qb2ludGVyTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEcm9wIGEgYnV0dG9uIGhlcmUgdG8gcGxhY2UgdGhlIHZlcnkgZmlyc3Qgcm93XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEJvdE1lbnVCdWlsZGVyID0gKHsgbWVudSwgb25TYXZlLCBvblJlbG9hZCwgaXNTYXZpbmcsIGxvYWRNZW51SW1hZ2VzLCBvblVwbG9hZE1lbnVJbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSgoKSA9PiBub3JtYWxpemVNZW51RHJhZnQobWVudSkpO1xyXG4gIGNvbnN0IFthY3RpdmVTY3JlZW5JZCwgc2V0QWN0aXZlU2NyZWVuSWRdID0gdXNlU3RhdGUoKCkgPT5cclxuICAgIG5vcm1hbGl6ZU1lbnVEcmFmdChtZW51KS5zY3JlZW5zWzBdPy5pZCB8fCBcIm1haW5cIixcclxuICApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJ1dHRvbklkLCBzZXRTZWxlY3RlZEJ1dHRvbklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RpcnR5LCBzZXREaXJ0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcGFsZXR0ZUhvdmVyLCBzZXRQYWxldHRlSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wWm9uZUhvdmVyLCBzZXREcm9wWm9uZUhvdmVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZW51SW1hZ2VzLCBzZXRNZW51SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FsbGVyeUxvYWRpbmcsIHNldEdhbGxlcnlMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYnV0dG9uU2V0dGluZ3NSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGFsZXR0ZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlSWQgPSBcImJvdC1jb25zdHJ1Y3Rvci1hbmltYXRpb25zXCI7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHJldHVybjtcclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgIEBrZXlmcmFtZXMgZmxvYXR5IHsgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7IH0gMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9IH1cclxuICAgICAgQGtleWZyYW1lcyBnbG93UHVsc2UgeyAwJSB7IGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoOTksMTAyLDI0MSwwLjI1KTsgfSA1MCUgeyBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDk5LDEwMiwyNDEsMC4zNSk7IH0gMTAwJSB7IGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoOTksMTAyLDI0MSwwLjI1KTsgfSB9XHJcbiAgICAgIEBrZXlmcmFtZXMgbWFnbmV0UHVsbCB7IDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpIHRyYW5zbGF0ZVkoLTJweCk7IH0gMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gICAgICBAa2V5ZnJhbWVzIHNoaW1tZXJTbGlkZSB7IDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9IDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9IH1cclxuICAgICAgLmRyYWctc2hhZG93IHsgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDE4cHggNDVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSkpOyB9XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0VkaXRpbmcpIHtcclxuICAgICAgc2V0RHJvcFpvbmVIb3ZlcihudWxsKTtcclxuICAgIH1cclxuICB9LCBbaXNFZGl0aW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XHJcbiAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVNZW51RHJhZnQobWVudSk7XHJcbiAgICBzZXREcmFmdChub3JtYWxpemVkKTtcclxuICAgIGlmICghbm9ybWFsaXplZC5zY3JlZW5zLmZpbmQoKHMpID0+IHMuaWQgPT09IGFjdGl2ZVNjcmVlbklkKSkge1xyXG4gICAgICBzZXRBY3RpdmVTY3JlZW5JZChub3JtYWxpemVkLnNjcmVlbnNbMF0/LmlkIHx8IFwibWFpblwiKTtcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkQnV0dG9uSWQobnVsbCk7XHJcbiAgICBzZXREaXJ0eShmYWxzZSk7XHJcbiAgfSwgW21lbnVdKTtcclxuXHJcbiAgY29uc3QgcmVmcmVzaEdhbGxlcnkgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRNZW51SW1hZ2VzICYmIHR5cGVvZiBmZXRjaCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gW107XHJcbiAgICBzZXRHYWxsZXJ5TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCAodHlwZW9mIGxvYWRNZW51SW1hZ2VzID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICA/IGxvYWRNZW51SW1hZ2VzKClcclxuICAgICAgICA6IGZldGNoKFwiL2FwaS9ib3QvbWVudS9pbWFnZXNcIikudGhlbigocmVzKSA9PiByZXMuanNvbigpKSk7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KHBheWxvYWQ/LmltYWdlcykgPyBwYXlsb2FkLmltYWdlcyA6IEFycmF5LmlzQXJyYXkocGF5bG9hZCkgPyBwYXlsb2FkIDogW107XHJcbiAgICAgIHNldE1lbnVJbWFnZXMobGlzdCk7XHJcbiAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIk1lbnUgaW1hZ2VzIGxvYWQgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRHYWxsZXJ5TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRNZW51SW1hZ2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWZyZXNoR2FsbGVyeSgpO1xyXG4gIH0sIFtyZWZyZXNoR2FsbGVyeV0pO1xyXG5cclxuICBjb25zdCBhY3RpdmVTY3JlZW4gPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZHJhZnQuc2NyZWVucy5maW5kKChzY3JlZW4pID0+IHNjcmVlbi5pZCA9PT0gYWN0aXZlU2NyZWVuSWQpIHx8IGRyYWZ0LnNjcmVlbnNbMF0sXHJcbiAgICBbZHJhZnQuc2NyZWVucywgYWN0aXZlU2NyZWVuSWRdLFxyXG4gICk7XHJcbiAgY29uc3QgYWN0aXZlVGl0bGUgPSBhY3RpdmVTY3JlZW4/LnRpdGxlIHx8IGRyYWZ0LnNjcmVlbnNbMF0/LnRpdGxlIHx8IFwi0JzQtdC90Y5cIjtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2NyZWVuID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2NyZWVuSWQsIHVwZGF0ZXIpID0+IHtcclxuICAgICAgc2V0RHJhZnQoKHByZXYpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JlZW5zID0gcHJldi5zY3JlZW5zLm1hcCgoc2NyZWVuKSA9PlxyXG4gICAgICAgICAgc2NyZWVuLmlkID09PSBzY3JlZW5JZCA/IHsgLi4uc2NyZWVuLCAuLi51cGRhdGVyKHNjcmVlbikgfSA6IHNjcmVlbixcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIHNjcmVlbnMgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldERpcnR5KHRydWUpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFNjcmVlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldERyYWZ0KChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJldi5zY3JlZW5zLmxlbmd0aCArIDE7XHJcbiAgICAgIGNvbnN0IGlkID0gc2FuaXRpemVJZChgc2NyZWVuLSR7aW5kZXh9YCk7XHJcbiAgICAgIGNvbnN0IHNjcmVlbiA9IG5vcm1hbGl6ZVNjcmVlbihcclxuICAgICAgICB7IGlkLCB0aXRsZTogYNCt0LrRgNCw0L0gJHtpbmRleH1gLCBtZXNzYWdlOiAnJywgYnV0dG9uczogW10gfSxcclxuICAgICAgICBpbmRleCAtIDEsXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHNjcmVlbnM6IFsuLi5wcmV2LnNjcmVlbnMsIHNjcmVlbl0gfTtcclxuICAgIH0pO1xyXG4gICAgc2V0RGlydHkodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZW1vdmVTY3JlZW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChzY3JlZW5JZCkgPT4ge1xyXG4gICAgICBzZXREcmFmdCgocHJldikgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2LnNjcmVlbnMubGVuZ3RoIDw9IDEpIHJldHVybiBwcmV2O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gcHJldi5zY3JlZW5zLmZpbHRlcigoc2NyZWVuKSA9PiBzY3JlZW4uaWQgIT09IHNjcmVlbklkKTtcclxuICAgICAgICBjb25zdCBuZXh0QWN0aXZlID0gZmlsdGVyZWRbMF0/LmlkIHx8IG51bGw7XHJcbiAgICAgICAgc2V0QWN0aXZlU2NyZWVuSWQoKGN1cnJlbnQpID0+IChjdXJyZW50ID09PSBzY3JlZW5JZCA/IG5leHRBY3RpdmUgOiBjdXJyZW50KSk7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgc2NyZWVuczogZmlsdGVyZWQgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldERpcnR5KHRydWUpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vdmVTY3JlZW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChzY3JlZW5JZCwgZGVsdGEpID0+IHtcclxuICAgICAgc2V0RHJhZnQoKHByZXYpID0+IHtcclxuICAgICAgICBjb25zdCBpZHggPSBwcmV2LnNjcmVlbnMuZmluZEluZGV4KChzY3JlZW4pID0+IHNjcmVlbi5pZCA9PT0gc2NyZWVuSWQpO1xyXG4gICAgICAgIGlmIChpZHggPCAwKSByZXR1cm4gcHJldjtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBpZHggKyBkZWx0YTtcclxuICAgICAgICBpZiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPj0gcHJldi5zY3JlZW5zLmxlbmd0aCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVucyA9IFsuLi5wcmV2LnNjcmVlbnNdO1xyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IHNjcmVlbnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgc2NyZWVucy5zcGxpY2UobmV4dEluZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBzY3JlZW5zIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXREaXJ0eSh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCB1cGRhdGVCdXR0b24gPSB1c2VDYWxsYmFjayhcclxuICAgIChidXR0b25JZCwgbmV4dEJ1dHRvbikgPT4ge1xyXG4gICAgICBpZiAoIWFjdGl2ZVNjcmVlbikgcmV0dXJuO1xyXG4gICAgICB1cGRhdGVTY3JlZW4oYWN0aXZlU2NyZWVuLmlkLCAoc2NyZWVuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IChzY3JlZW4uYnV0dG9ucyB8fCBbXSkubWFwKChidG4pID0+XHJcbiAgICAgICAgICBidG4uaWQgPT09IGJ1dHRvbklkID8gbm9ybWFsaXplQnV0dG9uKG5leHRCdXR0b24sIDAsIHNjcmVlbi5pZCkgOiBidG4sXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4geyBidXR0b25zOiBub3JtYWxpemVCdXR0b25PcmRlcihidXR0b25zKSB9O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbYWN0aXZlU2NyZWVuLCB1cGRhdGVTY3JlZW5dLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vdmVCdXR0b24gPSB1c2VDYWxsYmFjayhcclxuICAgIChidXR0b25JZCwgdGFyZ2V0Um93LCB0YXJnZXRPcmRlciA9IDAsIGNyZWF0ZU5ld1JvdyA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGlmICghYWN0aXZlU2NyZWVuKSByZXR1cm47XHJcbiAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsIChzY3JlZW4pID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gc2NyZWVuLmJ1dHRvbnMgfHwgW107XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGJ1dHRvbnMuZmluZCgoYnRuKSA9PiBidG4uaWQgPT09IGJ1dHRvbklkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiB7fTtcclxuICAgICAgICBjb25zdCBwbGFjZWQgPSBpbnNlcnRCdXR0b25BdFBvc2l0aW9uKGJ1dHRvbnMsIHsgLi4uaXRlbSB9LCB0YXJnZXRSb3csIHRhcmdldE9yZGVyLCB7IGNyZWF0ZU5ld1JvdyB9KTtcclxuICAgICAgICByZXR1cm4geyBidXR0b25zOiBwbGFjZWQgfTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW2FjdGl2ZVNjcmVlbiwgdXBkYXRlU2NyZWVuXSxcclxuICApO1xyXG5cclxuICBjb25zdCBhZGRCdXR0b25Gcm9tUGFsZXR0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHR5cGUsIHJvdyA9IDAsIG9yZGVyID0gMCwgY3JlYXRlTmV3Um93ID0gZmFsc2UpID0+IHtcclxuICAgICAgaWYgKCFhY3RpdmVTY3JlZW4pIHJldHVybjtcclxuICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKHNjcmVlbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBzY3JlZW4uYnV0dG9ucyA/IFsuLi5zY3JlZW4uYnV0dG9uc10gOiBbXTtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBidXR0b25zLmxlbmd0aCArIDE7XHJcbiAgICAgICAgY29uc3QgbmV3QnRuID0gbm9ybWFsaXplQnV0dG9uKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogYGJ0bi0ke3NjcmVlbi5pZH0tJHtuZXh0SW5kZXh9YCxcclxuICAgICAgICAgICAgbGFiZWw6IGAke0JPVF9CVVRUT05fVFlQRVMuZmluZCgodCkgPT4gdC5pZCA9PT0gdHlwZSk/LmxhYmVsIHx8IFwi0JrQvdC+0L/QutCwXCJ9YCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdGFyZ2V0U2NyZWVuSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJvdyxcclxuICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbmV4dEluZGV4IC0gMSxcclxuICAgICAgICAgIHNjcmVlbi5pZCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlZCA9IGluc2VydEJ1dHRvbkF0UG9zaXRpb24oYnV0dG9ucywgbmV3QnRuLCByb3csIG9yZGVyLCB7IGNyZWF0ZU5ld1JvdyB9KTtcclxuICAgICAgICBzZXRTZWxlY3RlZEJ1dHRvbklkKG5ld0J0bi5pZCk7XHJcbiAgICAgICAgcmV0dXJuIHsgYnV0dG9uczogcGxhY2VkIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFthY3RpdmVTY3JlZW4sIHVwZGF0ZVNjcmVlbl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoYnV0dG9uSWQpID0+IHtcclxuICAgICAgaWYgKCFhY3RpdmVTY3JlZW4gfHwgIWJ1dHRvbklkKSByZXR1cm47XHJcbiAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsIChzY3JlZW4pID0+ICh7XHJcbiAgICAgICAgYnV0dG9uczogKHNjcmVlbi5idXR0b25zIHx8IFtdKS5maWx0ZXIoKGJ0bikgPT4gYnRuLmlkICE9PSBidXR0b25JZCksXHJcbiAgICAgIH0pKTtcclxuICAgICAgc2V0U2VsZWN0ZWRCdXR0b25JZCgocHJldikgPT4gKHByZXYgPT09IGJ1dHRvbklkID8gbnVsbCA6IHByZXYpKTtcclxuICAgIH0sXHJcbiAgICBbYWN0aXZlU2NyZWVuLCB1cGRhdGVTY3JlZW5dLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEdhbGxlcnlJbWFnZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNyYykgPT4ge1xyXG4gICAgICBpZiAoIWFjdGl2ZVNjcmVlbiB8fCAhc3JjKSByZXR1cm47XHJcbiAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsICgpID0+ICh7IGltYWdlVXJsOiBzcmMgfSkpO1xyXG4gICAgfSxcclxuICAgIFthY3RpdmVTY3JlZW4sIHVwZGF0ZVNjcmVlbl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkTWVudUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoZmlsZSkgPT4ge1xyXG4gICAgICBpZiAoIWZpbGUgfHwgIWFjdGl2ZVNjcmVlbikgcmV0dXJuIG51bGw7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvblVwbG9hZE1lbnVJbWFnZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvblVwbG9hZE1lbnVJbWFnZShmaWxlKTtcclxuICAgICAgICAgIGNvbnN0IHVwbG9hZGVkUGF0aCA9IHJlc3VsdD8ucGF0aCB8fCByZXN1bHQ/LnVybCB8fCByZXN1bHQ/LmltYWdlIHx8IFwiXCI7XHJcbiAgICAgICAgICBpZiAodXBsb2FkZWRQYXRoKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsICgpID0+ICh7IGltYWdlVXJsOiB1cGxvYWRlZFBhdGggfSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0Py5pbWFnZXMpKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVJbWFnZXMocmVzdWx0LmltYWdlcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCByZWZyZXNoR2FsbGVyeSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHVwbG9hZGVkUGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGF3YWl0IHJlYWRGaWxlQXNEYXRhVXJsKGZpbGUpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsICgpID0+ICh7IGltYWdlVXJsOiBkYXRhVXJsIH0pKTtcclxuICAgICAgICByZXR1cm4gZGF0YVVybDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWVudSBpbWFnZSB1cGxvYWQgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2FjdGl2ZVNjcmVlbiwgb25VcGxvYWRNZW51SW1hZ2UsIHJlZnJlc2hHYWxsZXJ5LCB1cGRhdGVTY3JlZW5dLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW9uU2F2ZSkgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uU2F2ZShkcmFmdCk7XHJcbiAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNldERpcnR5KGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtkcmFmdCwgb25TYXZlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIG1heC13LTN4bCBzcGFjZS15LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICA8Q2hhdFByZXZpZXdcclxuICAgICAgICAgIHNjcmVlbj17YWN0aXZlU2NyZWVufVxyXG4gICAgICAgICAgc2NyZWVucz17ZHJhZnQuc2NyZWVuc31cclxuICAgICAgICAgIG9uU2VsZWN0QnV0dG9uPXsoaWQpID0+IHNldFNlbGVjdGVkQnV0dG9uSWQoaWQpfVxyXG4gICAgICAgICAgb25OYXZpZ2F0ZT17KHRhcmdldElkKSA9PiBzZXRBY3RpdmVTY3JlZW5JZCh0YXJnZXRJZCl9XHJcbiAgICAgICAgICBvbk1vdmVCdXR0b249eyhpZCwgcm93LCBvcmRlciwgY3JlYXRlTmV3Um93KSA9PiBtb3ZlQnV0dG9uKGlkLCByb3csIG9yZGVyLCBjcmVhdGVOZXdSb3cpfVxyXG4gICAgICAgICAgb25BZGRGcm9tUGFsZXR0ZT17KHR5cGUsIHJvdywgb3JkZXIsIGNyZWF0ZU5ld1JvdykgPT4gYWRkQnV0dG9uRnJvbVBhbGV0dGUodHlwZSwgcm93LCBvcmRlciwgY3JlYXRlTmV3Um93KX1cclxuICAgICAgICAgIG9uUmVtb3ZlQnV0dG9uPXtyZW1vdmVCdXR0b259XHJcbiAgICAgICAgICBvblVwbG9hZEltYWdlPXtoYW5kbGVVcGxvYWRNZW51SW1hZ2V9XHJcbiAgICAgICAgICBnYWxsZXJ5SW1hZ2VzPXttZW51SW1hZ2VzfVxyXG4gICAgICAgICAgb25TZWxlY3RHYWxsZXJ5SW1hZ2U9e2hhbmRsZVNlbGVjdEdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgIG9uTWVzc2FnZUNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVTY3JlZW4oYWN0aXZlU2NyZWVuLmlkLCAoKSA9PiAoeyBtZXNzYWdlOiB2YWx1ZSB9KSl9XHJcbiAgICAgICAgICBvblRpdGxlQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsICgpID0+ICh7IHRpdGxlOiB2YWx1ZSB9KSl9XHJcbiAgICAgICAgICBkcm9wWm9uZXM9e3sgc2V0dGluZ3NSZWY6IGJ1dHRvblNldHRpbmdzUmVmLCBwYWxldHRlUmVmIH19XHJcbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgICAgIG9uRHJvcFpvbmVIb3ZlckNoYW5nZT17c2V0RHJvcFpvbmVIb3Zlcn1cclxuICAgICAgICAgIG9uRHJhZ1N0YXRlQ2hhbmdlPXtzZXRJc0RyYWdnaW5nfVxyXG4gICAgICAgICAgaXNHYWxsZXJ5TG9hZGluZz17Z2FsbGVyeUxvYWRpbmd9XHJcbiAgICAgICAgICBvblRvZ2dsZUVkaXRpbmc9eygpID0+IHNldElzRWRpdGluZygocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgaXNTYXZpbmc9e2lzU2F2aW5nfVxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtpc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbkVkaXRQYW5lbFxyXG4gICAgICAgICAgICBwYW5lbFJlZj17YnV0dG9uU2V0dGluZ3NSZWZ9XHJcbiAgICAgICAgICAgIGJ1dHRvbj17YWN0aXZlU2NyZWVuLmJ1dHRvbnMuZmluZCgoYnRuKSA9PiBidG4uaWQgPT09IHNlbGVjdGVkQnV0dG9uSWQpIHx8IGFjdGl2ZVNjcmVlbi5idXR0b25zWzBdfVxyXG4gICAgICAgICAgICBzY3JlZW5zPXtkcmFmdC5zY3JlZW5zfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KG5leHQpID0+IHVwZGF0ZUJ1dHRvbihuZXh0LmlkIHx8IHNlbGVjdGVkQnV0dG9uSWQsIG5leHQpfVxyXG4gICAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCdXR0b24oc2VsZWN0ZWRCdXR0b25JZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEJ1dHRvbklkKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Ecm9wU2VsZWN0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIikgfHwgXCJ7fVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkPy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEJ1dHRvbklkKHBheWxvYWQuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgICAgICAgaXNEcm9wVGFyZ2V0QWN0aXZlPXtkcm9wWm9uZUhvdmVyID09PSBcInNldHRpbmdzXCJ9XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc9e2lzRHJhZ2dpbmd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtpc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTN4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHtcclxuICAgICAgICAgICAgICBwYWxldHRlSG92ZXJcclxuICAgICAgICAgICAgICAgID8gXCJzY2FsZS1bMS4wMV0gcmluZy0yIHJpbmctcm9zZS00MDAvNjAgc2hhZG93LVswXzE0cHhfNTBweF9yZ2JhKDI0NCw2Myw5NCwwLjM1KV1cIlxyXG4gICAgICAgICAgICAgICAgOiBcInJpbmctMSByaW5nLXdoaXRlLzVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICByZWY9e3BhbGV0dGVSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b25QYWxldHRlXHJcbiAgICAgICAgICAgICAgb25BZGQ9eyh0eXBlKSA9PlxyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uRnJvbVBhbGV0dGUodHlwZSwgYWN0aXZlU2NyZWVuPy5idXR0b25zPy5bMF0/LnJvdyA/PyAwLCBhY3RpdmVTY3JlZW4/LmJ1dHRvbnM/Lmxlbmd0aCB8fCAwKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvblJlbW92ZT17cmVtb3ZlQnV0dG9ufVxyXG4gICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U9e3NldFBhbGV0dGVIb3Zlcn1cclxuICAgICAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkPXtkcm9wWm9uZUhvdmVyID09PSBcInBhbGV0dGVcIn1cclxuICAgICAgICAgICAgICBpc0RyYWdnaW5nPXtpc0RyYWdnaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uUGFsZXR0ZSA9ICh7IG9uQWRkLCBvblJlbW92ZSwgb25Ib3ZlckNoYW5nZSwgaXNFZGl0aW5nLCBpc0hpZ2hsaWdodGVkLCBpc0RyYWdnaW5nIH0pID0+IHtcclxuICBjb25zdCBbaXNEcm9wcGluZywgc2V0SXNEcm9wcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZHJvcEFjdGl2ZVJlZiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgZHJhZ1ByZXZpZXdSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0UGFsZXR0ZURyYWcgPSAoaXRlbSwgZXZlbnQpID0+IHtcclxuICAgIGlmICghaXNFZGl0aW5nKSByZXR1cm47XHJcbiAgICBpZiAoIWV2ZW50IHx8ICh0eXBlb2YgZXZlbnQuYnV0dG9uID09PSBcIm51bWJlclwiICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkpIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24/LigpO1xyXG4gICAgb25Ib3ZlckNoYW5nZT8uKHRydWUpO1xyXG4gICAgY29uc3Qgc3RhcnRlciA9IHdpbmRvdy5fX2JvdE1lbnVCZWdpbkRyYWc7XHJcbiAgICBpZiAodHlwZW9mIHN0YXJ0ZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBzdGFydGVyKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgZnJvbVJvdzogMCxcclxuICAgICAgICAgIGZyb21PcmRlcjogMCxcclxuICAgICAgICAgIHNvdXJjZTogXCJwYWxldHRlXCIsXHJcbiAgICAgICAgICB0eXBlOiBpdGVtLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcclxuICAgICAgICBldmVudCxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2hvc3QgPSBjcmVhdGVEcmFnUHJldmlldyhldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudCk7XHJcbiAgICBkcmFnUHJldmlld1JlZi5jdXJyZW50ID0gZ2hvc3Q7XHJcbiAgICBnaG9zdD8udXBkYXRlPy4oZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlID0gKGUpID0+IGdob3N0Py51cGRhdGU/LihlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICBjb25zdCBoYW5kbGVVcCA9ICgpID0+IHtcclxuICAgICAgZHJvcEFjdGl2ZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICBvbkhvdmVyQ2hhbmdlPy4oZmFsc2UpO1xyXG4gICAgICBkZXN0cm95RHJhZ1ByZXZpZXcoZHJhZ1ByZXZpZXdSZWYuY3VycmVudCk7XHJcbiAgICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGhhbmRsZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVVcCwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUhpZ2hsaWdodCA9IGlzRHJvcHBpbmcgfHwgaXNIaWdobGlnaHRlZCB8fCBpc0RyYWdnaW5nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1ncmFkaWVudC10by1yIGZyb20tZW1lcmFsZC05MDAvNDAgdmlhLWluZGlnby05MDAvNTAgdG8tcm9zZS05MDAvNDAgcC00IHNoYWRvdy1bMF8yMHB4XzgwcHhfcmdiYSgwLDAsMCwwLjM1KV0gYmFja2Ryb3AtYmx1ci1zbSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICBhY3RpdmVIaWdobGlnaHQgPyBcInJpbmctMiByaW5nLXJvc2UtNDAwLzcwIHNjYWxlLVsxLjAxXSBhbmltYXRlLVttYWduZXRQdWxsXzAuOXNfZWFzZS1pbi1vdXRfaW5maW5pdGVdXCIgOiBcInJpbmctMSByaW5nLXdoaXRlLzEwXCJcclxuICAgICAgfWB9XHJcbiAgICAgIG9uUG9pbnRlckVudGVyPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkcm9wQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGRyb3BBY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICBzZXRJc0Ryb3BwaW5nKHRydWUpO1xyXG4gICAgICAgICAgb25Ib3ZlckNoYW5nZT8uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgb25Qb2ludGVyTW92ZT17KCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZHJvcEFjdGl2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0SXNEcm9wcGluZyh0cnVlKTtcclxuICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/Lih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAgIG9uUG9pbnRlckxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgZHJvcEFjdGl2ZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgc2V0SXNEcm9wcGluZyhmYWxzZSk7XHJcbiAgICAgICAgb25Ib3ZlckNoYW5nZT8uKGZhbHNlKTtcclxuICAgICAgfX1cclxuICAgICAgb25Qb2ludGVyVXA9eygpID0+IHtcclxuICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0Ryb3BwaW5nKGZhbHNlKTtcclxuICAgICAgICBvbkhvdmVyQ2hhbmdlPy4oZmFsc2UpO1xyXG4gICAgICB9fVxyXG4gICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWRyb3BBY3RpdmVSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgZHJvcEFjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIHNldElzRHJvcHBpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBvbkhvdmVyQ2hhbmdlPy4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgICBvbkRyYWdFbnRlcj17KCkgPT4ge1xyXG4gICAgICAgIGlmICghZHJvcEFjdGl2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0SXNEcm9wcGluZyh0cnVlKTtcclxuICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/Lih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAgIG9uRHJvcD17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZHJvcEFjdGl2ZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgc2V0SXNEcm9wcGluZyhmYWxzZSk7XHJcbiAgICAgICAgb25Ib3ZlckNoYW5nZT8uKGZhbHNlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIikgfHwgXCJ7fVwiKTtcclxuICAgICAgICAgIGlmIChwYXlsb2FkPy5pZCkge1xyXG4gICAgICAgICAgICBvblJlbW92ZT8uKHBheWxvYWQuaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc3Ryb3lEcmFnUHJldmlldyhkcmFnUHJldmlld1JlZi5jdXJyZW50KTtcclxuICAgICAgICBkcmFnUHJldmlld1JlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfX1cclxuICAgICAgb25EcmFnTGVhdmU9eygpID0+IHtcclxuICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0Ryb3BwaW5nKGZhbHNlKTtcclxuICAgICAgICBvbkhvdmVyQ2hhbmdlPy4oZmFsc2UpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4wOGVtXSB0ZXh0LWluZGlnby0xMDBcIj7QldGJ0LUg0LrQvdC+0L/QutC4PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS0zMDBcIj7Qm9C40YHRgtCw0LnRgtC1INCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+INC4INC/0LXRgNC10YLQsNGB0LrQuNCy0LDQudGC0LUg0L3QsCDRjdC60YDQsNC9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICB7Qk9UX0JVVFRPTl9UWVBFUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZSkgPT4gc3RhcnRQYWxldHRlRHJhZyhpdGVtLCBlKX1cclxuICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgZGVzdHJveURyYWdQcmV2aWV3KGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIG9uQWRkPy4oaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwIHJlbGF0aXZlIGZsZXggbWluLXctWzE0MHB4XSBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy13aGl0ZS81IHB4LTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBob3Zlcjpib3JkZXItaW5kaWdvLTMwMCBob3ZlcjpzaGFkb3ctWzBfMThweF80MHB4X3JnYmEoOTksMTAyLDI0MSwwLjM1KV0gJHtcclxuICAgICAgICAgICAgICBpc0VkaXRpbmcgPyBcImN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmdcIiA6IFwiY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNjBcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntpdGVtLmVtb2ppIHx8IFwi4pyoXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG53aW5kb3cuQm90TWVudUJ1aWxkZXIgPSBCb3RNZW51QnVpbGRlcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FB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