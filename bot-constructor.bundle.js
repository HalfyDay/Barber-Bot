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
    var _document$body;
    if (!dragState) return;
    var bodyStyle = typeof document !== "undefined" ? (_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.style : null;
    var previousBodyStyles = bodyStyle ? {
      overflow: bodyStyle.overflow,
      touchAction: bodyStyle.touchAction,
      overscrollBehavior: bodyStyle.overscrollBehavior
    } : null;
    if (bodyStyle) {
      bodyStyle.overflow = "hidden";
      bodyStyle.touchAction = "none";
      bodyStyle.overscrollBehavior = "none";
    }
    var preventScroll = function preventScroll(event) {
      event.preventDefault();
    };
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
    var handleCancel = function handleCancel(event) {
      var _event$preventDefault;
      event === null || event === void 0 || (_event$preventDefault = event.preventDefault) === null || _event$preventDefault === void 0 || _event$preventDefault.call(event);
      clearPreview();
      setDraggingId(null);
      dragPayloadRef.current = null;
      setDragState(null);
      setDropRowHighlight(null);
      setDropOrderHighlight(null);
      onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
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
    document.addEventListener("touchmove", preventScroll, {
      passive: false
    });
    document.addEventListener("pointermove", handleMove, {
      passive: false
    });
    document.addEventListener("pointerup", handleUp, {
      passive: false
    });
    document.addEventListener("pointercancel", handleCancel, {
      passive: false
    });
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      if (dragMoveFrameRef.current) {
        cancelAnimationFrame(dragMoveFrameRef.current);
        dragMoveFrameRef.current = null;
      }
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
      document.removeEventListener("pointercancel", handleCancel);
      document.removeEventListener("keydown", handleKeyDown);
      onDropZoneHoverChange === null || onDropZoneHoverChange === void 0 || onDropZoneHoverChange(null);
      if (bodyStyle && previousBodyStyles) {
        bodyStyle.overflow = previousBodyStyles.overflow;
        bodyStyle.touchAction = previousBodyStyles.touchAction;
        bodyStyle.overscrollBehavior = previousBodyStyles.overscrollBehavior;
      }
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
    try {
      if (typeof event.pointerId === "number") {
        var _originNode$setPointe;
        originNode === null || originNode === void 0 || (_originNode$setPointe = originNode.setPointerCapture) === null || _originNode$setPointe === void 0 || _originNode$setPointe.call(originNode, event.pointerId);
      }
    } catch (_unused) {
      // ignore pointer capture failures
    }
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
      className: "relative grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition-all duration-200 lg:flex lg:flex-wrap ".concat(dropRowHighlight === rowId ? "ring-2 ring-emerald-400/70 bg-emerald-500/10 scale-[1.01]" : ""),
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
          className: "pointer-events-none h-[44px] w-full min-w-0 rounded-xl border border-dashed border-emerald-300/70 bg-emerald-200/10 lg:min-w-[140px] lg:flex-1"
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
          style: isEditing ? {
            touchAction: "none"
          } : undefined,
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
          className: "group relative flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.35)] lg:min-w-[140px] lg:flex-1 ".concat(isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-pointer", " ").concat(draggingId === btn.id ? "opacity-40 border-white/20 bg-white/10" : "border-white/10 bg-white/5"),
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
      } catch (_unused2) {
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
      } catch (_unused3) {
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
    className: "mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3"
  }, BOT_BUTTON_TYPES.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      draggable: false,
      style: isEditing ? {
        touchAction: "none"
      } : undefined,
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
      className: "group relative flex min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] lg:min-w-[140px] ".concat(isEditing ? "cursor-grab active:cursor-grabbing" : "cursor-not-allowed opacity-60")
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, item.emoji || "✨"), /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, item.label));
  })));
};
window.BotMenuBuilder = BotMenuBuilder;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNvbnN0cnVjdG9yLmJ1bmRsZS5qcyIsIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwicmV0dXJuIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJoYXNPd25Qcm9wZXJ0eSIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm5leHQiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJfUmVhY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiQk9UX0JVVFRPTl9UWVBFUyIsImlkIiwibGFiZWwiLCJlbW9qaSIsIkJPVF9CVVRUT05fVFlQRV9TRVQiLCJTZXQiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRHJhZ1ByZXZpZXciLCJub2RlIiwic3RhcnRFdmVudCIsIl9zdGFydEV2ZW50JGN1cnJlbnRUYSIsIl9zdGFydEV2ZW50JGN1cnJlbnRUYTIiLCJfbm9kZSRnZXRCb3VuZGluZ0NsaWUiLCJfbm9kZSRnZXRCb3VuZGluZ0NsaWUyIiwiX2Nsb25lJGNsYXNzTGlzdCIsInJlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJjb25jYXQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwb2ludGVyRXZlbnRzIiwidHJhbnNpdGlvbiIsIndpbGxDaGFuZ2UiLCJib3hTaGFkb3ciLCJ6SW5kZXgiLCJvcGFjaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvZmZzZXRYIiwiY2xpZW50WCIsIm9mZnNldFkiLCJjbGllbnRZIiwidXBkYXRlIiwieCIsInZpc2liaWxpdHkiLCJjbGVhbnVwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGVzdHJveURyYWdQcmV2aWV3IiwiX2Nsb25lJGNsZWFudXAiLCJzYW5pdGl6ZUlkIiwidW5kZWZpbmVkIiwidHJpbSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNvcnRCdXR0b25zIiwiYnV0dG9ucyIsInNvcnQiLCJiIiwiX2Ekcm93IiwiX2Ikcm93IiwiX2Ekb3JkZXIiLCJfYiRvcmRlciIsInJvdyIsIm9yZGVyIiwibm9ybWFsaXplQnV0dG9uT3JkZXIiLCJzb3J0ZWQiLCJjdXJyZW50Um93Iiwibm9ybWFsaXplZFJvdyIsImJ0biIsImluc2VydEJ1dHRvbkF0UG9zaXRpb24iLCJidXR0b24iLCJ0YXJnZXRSb3ciLCJ0YXJnZXRPcmRlciIsIm9wdGlvbnMiLCJfb3B0aW9ucyRjcmVhdGVOZXdSb3ciLCJjcmVhdGVOZXdSb3ciLCJmaWx0ZXJlZCIsInJvd3NNYXAiLCJNYXAiLCJyb3dJZCIsImlzRmluaXRlIiwiaGFzIiwic2V0IiwiZ2V0Iiwicm93RW50cmllcyIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJsaXN0Iiwicm93cyIsInJvd0xpc3QiLCJpbnNlcnRJbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzcGxpY2UiLCJyZWJ1aWx0IiwiX3JlZjMiLCJfcmVmNCIsImlkeCIsIm5vcm1hbGl6ZUJ1dHRvbiIsIl9idG4kcGF5bG9hZCIsInNjcmVlbklkIiwidGV4dCIsInR5cGUiLCJpbmNsdWRlcyIsInRhcmdldFNjcmVlbklkIiwidGFyZ2V0IiwicGF5bG9hZCIsImZsb29yIiwibm9ybWFsaXplU2NyZWVuIiwic2NyZWVuIiwiX3JlZjUiLCJfc2NyZWVuJG1lc3NhZ2UiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJpbWFnZVVybCIsImltYWdlIiwibm9ybWFsaXplTWVudURyYWZ0IiwibWVudSIsInNjcmVlbnMiLCJzY3IiLCJidXR0b25UeXBlcyIsInZlcnNpb24iLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZWFkRmlsZUFzRGF0YVVybCIsImZpbGUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwicmVhZEFzRGF0YVVSTCIsIkJ1dHRvblR5cGVCYWRnZSIsIl9yZWY2IiwiZmluZCIsImVudHJ5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbkVkaXRQYW5lbCIsIl9yZWY3Iiwib25DaGFuZ2UiLCJvblJlbW92ZSIsIm9uRHJvcFNlbGVjdCIsImlzRWRpdGluZyIsImlzRHJvcFRhcmdldEFjdGl2ZSIsImlzRHJhZ2dpbmciLCJfcmVmNyRwYW5lbFJlZiIsInBhbmVsUmVmIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImlzRHJhZ0FjdGl2ZSIsInNldElzRHJhZ0FjdGl2ZSIsImRyYWdBY3RpdmVSZWYiLCJkcm9wSGFuZGxlcnMiLCJvbkRyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwib25Ecm9wIiwib25EcmFnTGVhdmUiLCJyZWYiLCJkaXNhYmxlZCIsImtleSIsIkNoYXRQcmV2aWV3IiwiX3JlZjgiLCJvblNlbGVjdEJ1dHRvbiIsIm9uTmF2aWdhdGUiLCJvbk1vdmVCdXR0b24iLCJvbkFkZEZyb21QYWxldHRlIiwib25SZW1vdmVCdXR0b24iLCJvbkltYWdlQ2hhbmdlIiwib25NZXNzYWdlQ2hhbmdlIiwib25UaXRsZUNoYW5nZSIsImRyb3Bab25lcyIsIm9uRHJvcFpvbmVIb3ZlckNoYW5nZSIsIm9uRHJhZ1N0YXRlQ2hhbmdlIiwiZ2FsbGVyeUltYWdlcyIsIm9uU2VsZWN0R2FsbGVyeUltYWdlIiwib25VcGxvYWRJbWFnZSIsIl9yZWY4JGlzR2FsbGVyeUxvYWRpbiIsImlzR2FsbGVyeUxvYWRpbmciLCJvblRvZ2dsZUVkaXRpbmciLCJvblNhdmUiLCJfcmVmOCRpc1NhdmluZyIsImlzU2F2aW5nIiwiX3JlZjgkaXNMb2FkaW5nIiwiaXNMb2FkaW5nIiwiZmlsZUlucHV0UmVmIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJkcmFnZ2luZ0lkIiwic2V0RHJhZ2dpbmdJZCIsImRyYWdQcmV2aWV3UmVmIiwiZHJhZ1BheWxvYWRSZWYiLCJkcmFnTW92ZUZyYW1lUmVmIiwiZHJhZ01vdmVDb29yZHNSZWYiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImRyb3BSb3dIaWdobGlnaHQiLCJzZXREcm9wUm93SGlnaGxpZ2h0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJkcm9wT3JkZXJIaWdobGlnaHQiLCJzZXREcm9wT3JkZXJIaWdobGlnaHQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImRyYWdTdGF0ZSIsInNldERyYWdTdGF0ZSIsInJvd3NDb250YWluZXJSZWYiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ1cGxvYWRpbmdJbWFnZSIsInNldFVwbG9hZGluZ0ltYWdlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImltYWdlRXJyb3IiLCJzZXRJbWFnZUVycm9yIiwibWVzc2FnZVJlZiIsInJvd0luZGV4IiwiX3JlZjkiLCJfcmVmMCIsImJ0bnMiLCJfYSRvcmRlcjIiLCJfYiRvcmRlcjIiLCJnYWxsZXJ5TGlzdCIsInRvcFJvd1ZhbHVlIiwiX3Jvd3MkMCRyb3dJZCIsIl9yb3dzJCIsImJvdHRvbVJvd1ZhbHVlIiwiX3Jvd3Mkcm93SWQiLCJfcm93cyIsImF1dG9zaXplVGV4dGFyZWEiLCJzY3JvbGxIZWlnaHQiLCJpc0luc2lkZURyb3Bab25lIiwiZXZlbnQiLCJyaWdodCIsImJvdHRvbSIsIndpbmRvdyIsIl9fYm90TWVudUJlZ2luRHJhZyIsImJlZ2luRHJhZyIsImNsZWFyUHJldmlldyIsInBsYWNlUGF5bG9hZCIsIm9yZGVySW5kZXgiLCJzb3VyY2UiLCJoYW5kbGVJbWFnZUZpbGUiLCJfcmVmMSIsIl9jYWxsZWUiLCJfZmlsZSR0eXBlIiwiX2ZpbGUkdHlwZSRzdGFydHNXaXRoIiwiX3QiLCJfY29udGV4dCIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwiX3giLCJoYW5kbGVHYWxsZXJ5UGljayIsInNyYyIsImhhbmRsZU1lc3NhZ2VJbnB1dCIsIl9ldmVudCR0YXJnZXQiLCJfZG9jdW1lbnQkYm9keSIsImJvZHlTdHlsZSIsInByZXZpb3VzQm9keVN0eWxlcyIsIm92ZXJmbG93IiwidG91Y2hBY3Rpb24iLCJvdmVyc2Nyb2xsQmVoYXZpb3IiLCJwcmV2ZW50U2Nyb2xsIiwiaGFuZGxlTW92ZSIsIl9yb3dzQ29udGFpbmVyUmVmJGN1ciIsIl9yb3dzQ29udGFpbmVyUmVmJGN1cjIiLCJfZXZlbnQkdGFyZ2V0MiIsIl9ldmVudCR0YXJnZXQyJGNsb3NlcyIsIl9ldmVudCR0YXJnZXQzIiwiX2V2ZW50JHRhcmdldDMkY2xvc2VzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29vcmRzIiwiX2RyYWdQcmV2aWV3UmVmJGN1cnJlIiwiX2RyYWdQcmV2aWV3UmVmJGN1cnJlMiIsIm5leHRab25lIiwic2V0dGluZ3NSZWYiLCJwYWxldHRlUmVmIiwiY29udGFpbmVyUmVjdCIsIm5ld1Jvd1RhcmdldCIsImNsb3Nlc3QiLCJyb3dOb2RlIiwiaGFuZGxlVXAiLCJjb21taXREcm9wIiwiaGFuZGxlQ2FuY2VsIiwiX2V2ZW50JHByZXZlbnREZWZhdWx0IiwiaGFuZGxlS2V5RG93biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3JpZ2luTm9kZSIsIl9wYXlsb2FkJGZyb21Sb3ciLCJfcGF5bG9hZCRmcm9tT3JkZXIiLCJfcHJldmlldyR1cGRhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJwb2ludGVySWQiLCJfb3JpZ2luTm9kZSRzZXRQb2ludGUiLCJzZXRQb2ludGVyQ2FwdHVyZSIsIl91bnVzZWQiLCJmcm9tUm93IiwiZnJvbU9yZGVyIiwicHJldmlldyIsIl9yZWYxMCIsIl9yZWYxMSIsInJhd1JvdyIsImlzQmV0d2VlblJvd3MiLCJhYnMiLCJjZWlsIiwicm91bmQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJfZSR0YXJnZXQiLCJfZSR0YXJnZXQkY2xvc2VzdCIsIl9maWxlSW5wdXRSZWYkY3VycmVudCIsImNsaWNrIiwiX2UkZGF0YVRyYW5zZmVyJGZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJhbHQiLCJhY2NlcHQiLCJfZSR0YXJnZXQkZmlsZXMiLCJfZmlsZUlucHV0UmVmJGN1cnJlbnQyIiwiaXNBY3RpdmUiLCJvbklucHV0IiwiRnJhZ21lbnQiLCJvblBvaW50ZXJFbnRlciIsIm9uUG9pbnRlck1vdmUiLCJvblBvaW50ZXJVcCIsImluZGV4IiwiX3JvdyRyb3dJZCIsImJlZm9yZVJvdyIsInNob3dCZWZvcmUiLCJidG5Ob2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhc2V0IiwiZHJhZ0lkIiwibWlkcG9pbnQiLCJvblBvaW50ZXJMZWF2ZSIsImluc2VydGlvbkluZGV4IiwicmVuZGVyUGxhY2Vob2xkZXIiLCJ2aXNpYmxlQnV0dG9ucyIsIml0ZW1zIiwiYnRuT3JQbGFjZWhvbGRlciIsIl9idG4kb3JkZXIiLCJpc1ZhbGlkRWxlbWVudCIsImRyYWdnYWJsZSIsIm9uUG9pbnRlckRvd24iLCJfYnRuJG9yZGVyMiIsIkJvdE1lbnVCdWlsZGVyIiwiX3JlZjEyIiwiX2RyYWZ0JHNjcmVlbnMkIiwib25SZWxvYWQiLCJsb2FkTWVudUltYWdlcyIsIm9uVXBsb2FkTWVudUltYWdlIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImRyYWZ0Iiwic2V0RHJhZnQiLCJfdXNlU3RhdGUxNSIsIl9ub3JtYWxpemVNZW51RHJhZnQkcyIsIl91c2VTdGF0ZTE2IiwiYWN0aXZlU2NyZWVuSWQiLCJzZXRBY3RpdmVTY3JlZW5JZCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJzZWxlY3RlZEJ1dHRvbklkIiwic2V0U2VsZWN0ZWRCdXR0b25JZCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJzZXRJc0VkaXRpbmciLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiZGlydHkiLCJzZXREaXJ0eSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzTW91bnRlZFJlZiIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJwYWxldHRlSG92ZXIiLCJzZXRQYWxldHRlSG92ZXIiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiZHJvcFpvbmVIb3ZlciIsInNldERyb3Bab25lSG92ZXIiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwibWVudUltYWdlcyIsInNldE1lbnVJbWFnZXMiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiZ2FsbGVyeUxvYWRpbmciLCJzZXRHYWxsZXJ5TG9hZGluZyIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzZXRJc0RyYWdnaW5nIiwiYnV0dG9uU2V0dGluZ3NSZWYiLCJzdHlsZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJub3JtYWxpemVkIiwicyIsIl9ub3JtYWxpemVkJHNjcmVlbnMkIiwicmVmcmVzaEdhbGxlcnkiLCJfY2FsbGVlMiIsIl90MiIsIl9jb250ZXh0MiIsImZldGNoIiwicmVzIiwianNvbiIsImltYWdlcyIsImFjdGl2ZVNjcmVlbiIsImFjdGl2ZVRpdGxlIiwidXBkYXRlU2NyZWVuIiwidXBkYXRlciIsInByZXYiLCJhZGRTY3JlZW4iLCJyZW1vdmVTY3JlZW4iLCJfZmlsdGVyZWQkIiwibmV4dEFjdGl2ZSIsIm1vdmVTY3JlZW4iLCJkZWx0YSIsImZpbmRJbmRleCIsIm5leHRJbmRleCIsIl9zY3JlZW5zJHNwbGljZSIsIl9zY3JlZW5zJHNwbGljZTIiLCJ1cGRhdGVCdXR0b24iLCJidXR0b25JZCIsIm5leHRCdXR0b24iLCJtb3ZlQnV0dG9uIiwicGxhY2VkIiwiYWRkQnV0dG9uRnJvbVBhbGV0dGUiLCJfQk9UX0JVVFRPTl9UWVBFUyRmaW4iLCJuZXdCdG4iLCJyZW1vdmVCdXR0b24iLCJoYW5kbGVTZWxlY3RHYWxsZXJ5SW1hZ2UiLCJoYW5kbGVVcGxvYWRNZW51SW1hZ2UiLCJfcmVmMTQiLCJfY2FsbGVlMyIsInVwbG9hZGVkUGF0aCIsImRhdGFVcmwiLCJfdDMiLCJfY29udGV4dDMiLCJwYXRoIiwidXJsIiwiX3gyIiwiaGFuZGxlU2F2ZSIsIl9jYWxsZWU0IiwiX2NvbnRleHQ0IiwidGFyZ2V0SWQiLCJKU09OIiwicGFyc2UiLCJnZXREYXRhIiwiX3VudXNlZDIiLCJCdXR0b25QYWxldHRlIiwib25BZGQiLCJfYWN0aXZlU2NyZWVuJGJ1dHRvbnMiLCJfYWN0aXZlU2NyZWVuJGJ1dHRvbnMyIiwiX2FjdGl2ZVNjcmVlbiRidXR0b25zMyIsIm9uSG92ZXJDaGFuZ2UiLCJpc0hpZ2hsaWdodGVkIiwiX3JlZjE2IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImlzRHJvcHBpbmciLCJzZXRJc0Ryb3BwaW5nIiwiZHJvcEFjdGl2ZVJlZiIsInN0YXJ0UGFsZXR0ZURyYWciLCJfZXZlbnQkc3RvcFByb3BhZ2F0aW8iLCJfZ2hvc3QkdXBkYXRlIiwic3RhcnRlciIsImdob3N0IiwiX2dob3N0JHVwZGF0ZTIiLCJvbmNlIiwiYWN0aXZlSGlnaGxpZ2h0Iiwib25EcmFnRW50ZXIiLCJfdW51c2VkMyJdLCJzb3VyY2VzIjpbImJvdC1jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gPSBSZWFjdDtcclxuXHJcbmNvbnN0IEJPVF9CVVRUT05fVFlQRVMgPSBbXHJcbiAgeyBpZDogXCJzY3JlZW5cIiwgbGFiZWw6IFwi0J/QtdGA0LXRhdC+0LQg0L3QsCDRjdC60YDQsNC9XCIsIGVtb2ppOiBcIvCfp61cIiB9LFxyXG4gIHsgaWQ6IFwiYm9va1wiLCBsYWJlbDogXCLQl9Cw0L/QuNGB0LDRgtGM0YHRj1wiLCBlbW9qaTogXCLwn5eT77iPXCIgfSxcclxuICB7IGlkOiBcImRlc2NyaXB0aW9uXCIsIGxhYmVsOiBcItCe0L/QuNGB0LDQvdC40LVcIiwgZW1vamk6IFwi8J+TnVwiIH0sXHJcbiAgeyBpZDogXCJwcm9maWxlXCIsIGxhYmVsOiBcItCf0YDQvtGE0LjQu9GMXCIsIGVtb2ppOiBcIvCfkaRcIiB9LFxyXG4gIHsgaWQ6IFwidXNlckFwcG9pbnRtZW50c1wiLCBsYWJlbDogXCLQnNC+0Lgg0LfQsNC/0LjRgdC4XCIsIGVtb2ppOiBcIvCfk5RcIiB9LFxyXG4gIHsgaWQ6IFwiY3VzdG9tXCIsIGxhYmVsOiBcItCh0LLQvtGPINC60L3QvtC/0LrQsFwiLCBlbW9qaTogXCLinKhcIiB9LFxyXG5dO1xyXG5jb25zdCBCT1RfQlVUVE9OX1RZUEVfU0VUID0gbmV3IFNldChCT1RfQlVUVE9OX1RZUEVTLm1hcCgoaXRlbSkgPT4gaXRlbS5pZCkpO1xyXG5cclxuY29uc3QgY3JlYXRlRHJhZ1ByZXZpZXcgPSAobm9kZSwgc3RhcnRFdmVudCkgPT4ge1xyXG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgcmVjdCA9IHN0YXJ0RXZlbnQ/LmN1cnJlbnRUYXJnZXQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XHJcbiAgY29uc3QgY2xvbmUgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuICBjb25zdCB3aWR0aCA9IHJlY3Q/LndpZHRoIHx8IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKT8ud2lkdGggfHwgbm9kZS5vZmZzZXRXaWR0aDtcclxuICBjb25zdCBoZWlnaHQgPSByZWN0Py5oZWlnaHQgfHwgbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpPy5oZWlnaHQgfHwgbm9kZS5vZmZzZXRIZWlnaHQ7XHJcbiAgaWYgKHdpZHRoKSBjbG9uZS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICBpZiAoaGVpZ2h0KSBjbG9uZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gIGNsb25lLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gIGNsb25lLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICBjbG9uZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtOTk5OXB4LC05OTk5cHgpIHNjYWxlKDEpXCI7XHJcbiAgY2xvbmUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gIGNsb25lLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICBjbG9uZS5zdHlsZS53aWxsQ2hhbmdlID0gXCJ0cmFuc2Zvcm1cIjtcclxuICBjbG9uZS5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMThweCA0NXB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KVwiO1xyXG4gIGNsb25lLnN0eWxlLnpJbmRleCA9IFwiOTk5OVwiO1xyXG4gIGNsb25lLnN0eWxlLm9wYWNpdHkgPSBcIjAuOTVcIjtcclxuICBjbG9uZS5jbGFzc0xpc3Q/LmFkZChcImRyYWctc2hhZG93XCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gIGNvbnN0IG9mZnNldFggPSByZWN0ID8gc3RhcnRFdmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IDogY2xvbmUub2Zmc2V0V2lkdGggLyAyO1xyXG4gIGNvbnN0IG9mZnNldFkgPSByZWN0ID8gc3RhcnRFdmVudC5jbGllbnRZIC0gcmVjdC50b3AgOiBjbG9uZS5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gIHJldHVybiB7XHJcbiAgICBjbG9uZSxcclxuICAgIG9mZnNldFgsXHJcbiAgICBvZmZzZXRZLFxyXG4gICAgdXBkYXRlOiAoeCwgeSkgPT4ge1xyXG4gICAgICBjbG9uZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eCAtIG9mZnNldFh9cHgsICR7eSAtIG9mZnNldFl9cHgpYDtcclxuICAgICAgY2xvbmUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfSxcclxuICAgIGNsZWFudXA6ICgpID0+IHtcclxuICAgICAgaWYgKGNsb25lLnBhcmVudE5vZGUpIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZGVzdHJveURyYWdQcmV2aWV3ID0gKGNsb25lKSA9PiB7XHJcbiAgaWYgKCFjbG9uZSkgcmV0dXJuO1xyXG4gIGNsb25lLmNsZWFudXA/LigpO1xyXG4gIGNvbnN0IG5vZGUgPSBjbG9uZS5jbG9uZSB8fCBjbG9uZTtcclxuICBpZiAobm9kZT8ucGFyZW50Tm9kZSkgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG59O1xyXG5cclxuY29uc3Qgc2FuaXRpemVJZCA9ICh2YWx1ZSA9IFwiXCIpID0+XHJcbiAgdmFsdWVcclxuICAgIC50b1N0cmluZygpXHJcbiAgICAudHJpbSgpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1teYS16MC05Xy1dKy9nLCBcIi1cIilcclxuICAgIC5yZXBsYWNlKC8oXi18LSQpL2csIFwiXCIpXHJcbiAgICB8fCBcIml0ZW1cIjtcclxuXHJcbmNvbnN0IHNvcnRCdXR0b25zID0gKGJ1dHRvbnMgPSBbXSkgPT5cclxuICBbLi4uYnV0dG9uc10uc29ydCgoYSwgYikgPT4gKGEucm93ID8/IDApIC0gKGIucm93ID8/IDApIHx8IChhLm9yZGVyID8/IDApIC0gKGIub3JkZXIgPz8gMCkpO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplQnV0dG9uT3JkZXIgPSAoYnV0dG9ucyA9IFtdKSA9PiB7XHJcbiAgY29uc3Qgc29ydGVkID0gc29ydEJ1dHRvbnMoWy4uLmJ1dHRvbnNdKTtcclxuICBsZXQgY3VycmVudFJvdyA9IG51bGw7XHJcbiAgbGV0IG5vcm1hbGl6ZWRSb3cgPSAtMTtcclxuICBsZXQgb3JkZXIgPSAwO1xyXG4gIHJldHVybiBzb3J0ZWQubWFwKChidG4pID0+IHtcclxuICAgIGlmIChjdXJyZW50Um93ID09PSBudWxsIHx8IGJ0bi5yb3cgIT09IGN1cnJlbnRSb3cpIHtcclxuICAgICAgY3VycmVudFJvdyA9IGJ0bi5yb3c7XHJcbiAgICAgIG5vcm1hbGl6ZWRSb3cgKz0gMTtcclxuICAgICAgb3JkZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV4dCA9IHsgLi4uYnRuLCByb3c6IG5vcm1hbGl6ZWRSb3csIG9yZGVyIH07XHJcbiAgICBvcmRlciArPSAxO1xyXG4gICAgcmV0dXJuIG5leHQ7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgaW5zZXJ0QnV0dG9uQXRQb3NpdGlvbiA9IChidXR0b25zID0gW10sIGJ1dHRvbiwgdGFyZ2V0Um93ID0gMCwgdGFyZ2V0T3JkZXIgPSAwLCBvcHRpb25zID0ge30pID0+IHtcclxuICBpZiAoIWJ1dHRvbikgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgY29uc3QgeyBjcmVhdGVOZXdSb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcclxuICBjb25zdCBmaWx0ZXJlZCA9IGJ1dHRvbnMuZmlsdGVyKChidG4pID0+IGJ0bi5pZCAhPT0gYnV0dG9uLmlkKTtcclxuICBjb25zdCByb3dzTWFwID0gbmV3IE1hcCgpO1xyXG4gIHNvcnRCdXR0b25zKGZpbHRlcmVkKS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGNvbnN0IHJvd0lkID0gTnVtYmVyLmlzRmluaXRlKGJ0bi5yb3cpID8gTnVtYmVyKGJ0bi5yb3cpIDogMDtcclxuICAgIGlmICghcm93c01hcC5oYXMocm93SWQpKSByb3dzTWFwLnNldChyb3dJZCwgW10pO1xyXG4gICAgcm93c01hcC5nZXQocm93SWQpLnB1c2goYnRuKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IHJvd0VudHJpZXMgPSBBcnJheS5mcm9tKHJvd3NNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XHJcbiAgaWYgKGNyZWF0ZU5ld1Jvdykge1xyXG4gICAgcm93RW50cmllcyA9IHJvd0VudHJpZXNcclxuICAgICAgLm1hcCgoW3Jvd0lkLCBsaXN0XSkgPT4gW3Jvd0lkID49IHRhcmdldFJvdyA/IHJvd0lkICsgMSA6IHJvd0lkLCBsaXN0XSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvd3MgPSBuZXcgTWFwKHJvd0VudHJpZXMpO1xyXG4gIGNvbnN0IHJvd0xpc3QgPSByb3dzLmdldCh0YXJnZXRSb3cpID8gWy4uLnJvd3MuZ2V0KHRhcmdldFJvdyldIDogW107XHJcbiAgY29uc3QgaW5zZXJ0SW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCh0YXJnZXRPcmRlciwgMCksIHJvd0xpc3QubGVuZ3RoKTtcclxuICByb3dMaXN0LnNwbGljZShpbnNlcnRJbmRleCwgMCwgeyAuLi5idXR0b24sIHJvdzogdGFyZ2V0Um93LCBvcmRlcjogaW5zZXJ0SW5kZXggfSk7XHJcbiAgcm93cy5zZXQodGFyZ2V0Um93LCByb3dMaXN0KTtcclxuXHJcbiAgY29uc3QgcmVidWlsdCA9IFtdO1xyXG4gIEFycmF5LmZyb20ocm93cy5lbnRyaWVzKCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXHJcbiAgICAuZm9yRWFjaCgoW3Jvd0lkLCBsaXN0XSkgPT4ge1xyXG4gICAgICBzb3J0QnV0dG9ucyhsaXN0KS5mb3JFYWNoKChidG4sIGlkeCkgPT4ge1xyXG4gICAgICAgIHJlYnVpbHQucHVzaCh7IC4uLmJ0biwgcm93OiByb3dJZCwgb3JkZXI6IGlkeCB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICByZXR1cm4gbm9ybWFsaXplQnV0dG9uT3JkZXIocmVidWlsdCk7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVCdXR0b24gPSAoYnRuLCBpZHggPSAwLCBzY3JlZW5JZCA9IFwic2NyZWVuXCIpID0+IHtcclxuICBjb25zdCBpZCA9IHNhbml0aXplSWQoYnRuPy5pZCB8fCBgYnRuLSR7c2NyZWVuSWR9LSR7aWR4ICsgMX1gKTtcclxuICBjb25zdCBsYWJlbCA9IChidG4/LmxhYmVsIHx8IGJ0bj8udGV4dCB8fCBg0JrQvdC+0L/QutCwICR7aWR4ICsgMX1gKS50b1N0cmluZygpO1xyXG4gIGNvbnN0IHR5cGUgPSBCT1RfQlVUVE9OX1RZUEVfU0VULmhhcyhidG4/LnR5cGUpXHJcbiAgICA/IGJ0bi50eXBlXHJcbiAgICA6IFtcInN0YWZmXCIsIFwic2VydmljZVwiLCBcImRhdGVcIiwgXCJ0aW1lXCJdLmluY2x1ZGVzKGJ0bj8udHlwZSlcclxuICAgICAgPyBcImJvb2tcIlxyXG4gICAgICA6IFwic2NyZWVuXCI7XHJcbiAgY29uc3QgdGFyZ2V0U2NyZWVuSWQgPSBidG4/LnRhcmdldFNjcmVlbklkIHx8IGJ0bj8udGFyZ2V0IHx8IG51bGw7XHJcbiAgY29uc3QgcGF5bG9hZCA9IGJ0bj8ucGF5bG9hZCA/PyBcIlwiO1xyXG4gIGNvbnN0IHJvdyA9IE51bWJlci5pc0Zpbml0ZShidG4/LnJvdykgPyBOdW1iZXIoYnRuLnJvdykgOiBNYXRoLmZsb29yKGlkeCAvIDIpO1xyXG4gIGNvbnN0IG9yZGVyID0gTnVtYmVyLmlzRmluaXRlKGJ0bj8ub3JkZXIpID8gTnVtYmVyKGJ0bi5vcmRlcikgOiBpZHg7XHJcbiAgcmV0dXJuIHsgaWQsIGxhYmVsLCB0eXBlLCB0YXJnZXRTY3JlZW5JZCwgcGF5bG9hZCwgcm93LCBvcmRlciB9O1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplU2NyZWVuID0gKHNjcmVlbiwgaWR4ID0gMCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gc2FuaXRpemVJZChzY3JlZW4/LmlkIHx8IGBzY3JlZW4tJHtpZHggKyAxfWApO1xyXG4gIGNvbnN0IHRpdGxlID0gKHNjcmVlbj8udGl0bGUgfHwgc2NyZWVuPy5uYW1lIHx8IGDQrdC60YDQsNC9ICR7aWR4ICsgMX1gKS50b1N0cmluZygpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBzY3JlZW4/Lm1lc3NhZ2UgPz8gc2NyZWVuPy50ZXh0ID8/IFwiXCI7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBzY3JlZW4/LmltYWdlVXJsIHx8IHNjcmVlbj8uaW1hZ2UgfHwgXCJcIjtcclxuICBjb25zdCBidXR0b25zID0gQXJyYXkuaXNBcnJheShzY3JlZW4/LmJ1dHRvbnMpXHJcbiAgICA/IG5vcm1hbGl6ZUJ1dHRvbk9yZGVyKHNjcmVlbi5idXR0b25zLm1hcCgoYnRuLCBpKSA9PiBub3JtYWxpemVCdXR0b24oYnRuLCBpLCBpZCkpKVxyXG4gICAgOiBbXTtcclxuICByZXR1cm4geyBpZCwgdGl0bGUsIG1lc3NhZ2UsIGltYWdlVXJsLCBidXR0b25zIH07XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVNZW51RHJhZnQgPSAobWVudSkgPT4ge1xyXG4gIGNvbnN0IHNjcmVlbnMgPSBBcnJheS5pc0FycmF5KG1lbnU/LnNjcmVlbnMpICYmIG1lbnUuc2NyZWVucy5sZW5ndGhcclxuICAgID8gbWVudS5zY3JlZW5zLm1hcCgoc2NyLCBpZHgpID0+IG5vcm1hbGl6ZVNjcmVlbihzY3IsIGlkeCkpXHJcbiAgICA6IFtub3JtYWxpemVTY3JlZW4oeyBpZDogXCJtYWluXCIsIHRpdGxlOiBcItCT0LvQsNCy0L3QvtC1INC80LXQvdGOXCIsIG1lc3NhZ2U6IFwi0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCFcIiwgYnV0dG9uczogW10gfSwgMCldO1xyXG4gIGNvbnN0IGJ1dHRvblR5cGVzID0gQXJyYXkuaXNBcnJheShtZW51Py5idXR0b25UeXBlcykgJiYgbWVudS5idXR0b25UeXBlcy5sZW5ndGggPyBtZW51LmJ1dHRvblR5cGVzIDogQk9UX0JVVFRPTl9UWVBFUztcclxuICBjb25zdCB2ZXJzaW9uID0gTnVtYmVyKG1lbnU/LnZlcnNpb24pIHx8IDE7XHJcbiAgY29uc3QgdXBkYXRlZEF0ID0gbWVudT8udXBkYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICByZXR1cm4geyB2ZXJzaW9uLCB1cGRhdGVkQXQsIHNjcmVlbnMsIGJ1dHRvblR5cGVzIH07XHJcbn07XHJcblxyXG5jb25zdCByZWFkRmlsZUFzRGF0YVVybCA9IChmaWxlKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0IHx8IFwiXCIpO1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICB9KTtcclxuXHJcbmNvbnN0IEJ1dHRvblR5cGVCYWRnZSA9ICh7IHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IGl0ZW0gPSBCT1RfQlVUVE9OX1RZUEVTLmZpbmQoKGVudHJ5KSA9PiBlbnRyeS5pZCA9PT0gdHlwZSk7XHJcbiAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgcHgtMi41IHB5LTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNsYXRlLTEwMCByaW5nLTEgcmluZy13aGl0ZS8xMFwiPlxyXG4gICAgICA8c3Bhbj57aXRlbS5lbW9qaSB8fCBcIuKaoVwifTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF1cIj57aXRlbS5sYWJlbH08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbkVkaXRQYW5lbCA9ICh7XHJcbiAgYnV0dG9uLFxyXG4gIHNjcmVlbnMsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25SZW1vdmUsXHJcbiAgb25Ecm9wU2VsZWN0LFxyXG4gIGlzRWRpdGluZyxcclxuICBpc0Ryb3BUYXJnZXRBY3RpdmUsXHJcbiAgaXNEcmFnZ2luZyxcclxuICBwYW5lbFJlZiA9IG51bGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBbaXNEcmFnQWN0aXZlLCBzZXRJc0RyYWdBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRyYWdBY3RpdmVSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IGRyb3BIYW5kbGVycyA9IHtcclxuICAgIG9uRHJhZ092ZXI6IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCFkcmFnQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkcmFnQWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHNldElzRHJhZ0FjdGl2ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJvcDogKGUpID0+IHtcclxuICAgICAgb25Ecm9wU2VsZWN0Py4oZSk7XHJcbiAgICAgIGlmIChkcmFnQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkcmFnQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0RyYWdBY3RpdmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnTGVhdmU6ICgpID0+IHtcclxuICAgICAgaWYgKGRyYWdBY3RpdmVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGRyYWdBY3RpdmVSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHNldElzRHJhZ0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFidXR0b24pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICB7Li4uZHJvcEhhbmRsZXJzfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1pbmRpZ28tNTAwLzQwIGJnLXNsYXRlLTkwMC83MCBwLTMgdGV4dC1zbGF0ZS0zMDAgc2hhZG93LWlubmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgICAgaXNEcmFnQWN0aXZlID8gXCJzY2FsZS1bMS4wMV0gcmluZy0yIHJpbmctaW5kaWdvLTQwMC82MCBzaGFkb3ctWzBfMTVweF80MHB4X3JnYmEoOTksMTAyLDI0MSwwLjI1KV1cIiA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZS84MFwiPtCf0LXRgNC10YLQsNGJ0LjRgtC1INC60L3QvtC/0LrRgyDRgdGO0LTQsCwg0YfRgtC+0LHRiyDQvtGC0LrRgNGL0YLRjCDQtdGRINC90LDRgdGC0YDQvtC50LrQuDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+0KHQtdC60YbQuNGPINC/0L7QtNGB0LLQtdGC0LjRgtGB0Y8g0Lgg0L/RgNC40YLRj9C90LXRgiDRjdC70LXQvNC10L3Rgi48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5kcm9wSGFuZGxlcnN9XHJcbiAgICAgIHJlZj17cGFuZWxSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXNsYXRlLTk1MC84NSB2aWEtc2xhdGUtOTAwLzcwIHRvLWluZGlnby05MDAvNzAgcC0yLjUgc2hhZG93LTJ4bCByaW5nLTEgcmluZy1pbmRpZ28tODAwLzUwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBzbTpwLTMgJHtcclxuICAgICAgICBpc0RyYWdBY3RpdmUgPyBcInNjYWxlLVsxLjAxXSByaW5nLTIgcmluZy1pbmRpZ28tNDAwLzcwIHNoYWRvdy1bMF8yMHB4XzcwcHhfcmdiYSg5OSwxMDIsMjQxLDAuMzUpXVwiIDogXCJcIlxyXG4gICAgICB9ICR7XHJcbiAgICAgICAgaXNEcmFnZ2luZ1xyXG4gICAgICAgICAgPyBcInJpbmctMiByaW5nLWluZGlnby00MDAvNzAgc2NhbGUtWzEuMDFdIGFuaW1hdGUtW21hZ25ldFB1bGxfMC45c19lYXNlLWluLW91dF9pbmZpbml0ZV1cIlxyXG4gICAgICAgICAgOiBcIlwiXHJcbiAgICAgIH0gJHtpc0Ryb3BUYXJnZXRBY3RpdmUgPyBcInJpbmctMiByaW5nLWVtZXJhbGQtNDAwLzcwIHNjYWxlLVsxLjAxXVwiIDogXCJcIn1gfVxyXG4gICAgPlxyXG4gICAgICB7aXNEcmFnZ2luZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAvNDAgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAvODAgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHJpbmctMSByaW5nLXdoaXRlLzEwIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4pyP77iPPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+8J+Xke+4jzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBiZy1bcmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF8xMCVfMjAlLHJnYmEoOTksMTAyLDI0MSwwLjEyKSx0cmFuc3BhcmVudF8zNSUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfODAlXzAlLHJnYmEoMTQsMTY1LDIzMywwLjEyKSx0cmFuc3BhcmVudF8zMCUpXVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0yLjUgc206c3BhY2UteS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc2xhdGUtNDAwXCI+0J3QsNGB0YLRgNC+0LnQutC4INC60L3QvtC/0LrQuDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPntidXR0b24ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uVHlwZUJhZGdlIHR5cGU9e2J1dHRvbi50eXBlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMi41IG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPtCi0LXQutGB0YI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17YnV0dG9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoeyAuLi5idXR0b24sIGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC84MCBweC0zIHB5LTEuNSB0ZXh0LXNtIHRleHQtd2hpdGUgc2hhZG93LWlubmVyIHRyYW5zaXRpb24gZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj7QotC40L88L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvbi50eXBlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoeyAuLi5idXR0b24sIHR5cGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaXNFZGl0aW5nfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIGJnLXNsYXRlLTkwMC84MCBweC0zIHB5LTEuNSB0ZXh0LXNtIHRleHQtd2hpdGUgc2hhZG93LWlubmVyIHRyYW5zaXRpb24gZm9jdXM6Ym9yZGVyLWluZGlnby00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtCT1RfQlVUVE9OX1RZUEVTLm1hcCgodHlwZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3R5cGUuaWR9IHZhbHVlPXt0eXBlLmlkfT5cclxuICAgICAgICAgICAgICAgICAge3R5cGUubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTIuNSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+0J/QtdGA0LXRhdC+0LQg0L3QsCDRjdC60YDQsNC9PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtidXR0b24udGFyZ2V0U2NyZWVuSWQgfHwgXCJcIn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKHsgLi4uYnV0dG9uLCB0YXJnZXRTY3JlZW5JZDogZS50YXJnZXQudmFsdWUgfHwgbnVsbCB9KX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBiZy1zbGF0ZS05MDAvODAgcHgtMyBweS0xLjUgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+4oCUPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge3NjcmVlbnMubWFwKChzY3JlZW4pID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzY3JlZW4uaWR9IHZhbHVlPXtzY3JlZW4uaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7c2NyZWVuLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENoYXRQcmV2aWV3ID0gKHtcclxuICBzY3JlZW4sXHJcbiAgc2NyZWVucyxcclxuICBvblNlbGVjdEJ1dHRvbixcclxuICBvbk5hdmlnYXRlLFxyXG4gIG9uTW92ZUJ1dHRvbixcclxuICBvbkFkZEZyb21QYWxldHRlLFxyXG4gIG9uUmVtb3ZlQnV0dG9uLFxyXG4gIG9uSW1hZ2VDaGFuZ2UsXHJcbiAgb25NZXNzYWdlQ2hhbmdlLFxyXG4gIG9uVGl0bGVDaGFuZ2UsXHJcbiAgZHJvcFpvbmVzLFxyXG4gIGlzRWRpdGluZyxcclxuICBvbkRyb3Bab25lSG92ZXJDaGFuZ2UsXHJcbiAgb25EcmFnU3RhdGVDaGFuZ2UsXHJcbiAgZ2FsbGVyeUltYWdlcyxcclxuICBvblNlbGVjdEdhbGxlcnlJbWFnZSxcclxuICBvblVwbG9hZEltYWdlLFxyXG4gIGlzR2FsbGVyeUxvYWRpbmcgPSBmYWxzZSxcclxuICBvblRvZ2dsZUVkaXRpbmcsXHJcbiAgb25TYXZlLFxyXG4gIGlzU2F2aW5nID0gZmFsc2UsXHJcbiAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2RyYWdnaW5nSWQsIHNldERyYWdnaW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZHJhZ1ByZXZpZXdSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJhZ1BheWxvYWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJhZ01vdmVGcmFtZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkcmFnTW92ZUNvb3Jkc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbZHJvcFJvd0hpZ2hsaWdodCwgc2V0RHJvcFJvd0hpZ2hsaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZHJvcE9yZGVySGlnaGxpZ2h0LCBzZXREcm9wT3JkZXJIaWdobGlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RyYWdTdGF0ZSwgc2V0RHJhZ1N0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvd3NDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3VwbG9hZGluZ0ltYWdlLCBzZXRVcGxvYWRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlRXJyb3IsIHNldEltYWdlRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgbWVzc2FnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3dzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCByb3dzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgKHNjcmVlbj8uYnV0dG9ucyB8fCBbXSkuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gTnVtYmVyKGJ0bi5yb3cgfHwgMCk7XHJcbiAgICAgIGlmICghcm93c01hcC5oYXMocm93SW5kZXgpKSByb3dzTWFwLnNldChyb3dJbmRleCwgW10pO1xyXG4gICAgICByb3dzTWFwLmdldChyb3dJbmRleCkucHVzaChidG4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShyb3dzTWFwLmVudHJpZXMoKSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxyXG4gICAgICAubWFwKChbcm93SWQsIGJ0bnNdKSA9PiAoe1xyXG4gICAgICAgIHJvd0lkLFxyXG4gICAgICAgIGJ1dHRvbnM6IGJ0bnMuc29ydCgoYSwgYikgPT4gKGEub3JkZXIgPz8gMCkgLSAoYi5vcmRlciA/PyAwKSksXHJcbiAgICAgIH0pKTtcclxuICB9LCBbc2NyZWVuXSk7XHJcblxyXG4gIGNvbnN0IGdhbGxlcnlMaXN0ID0gdXNlTWVtbygoKSA9PiAoQXJyYXkuaXNBcnJheShnYWxsZXJ5SW1hZ2VzKSA/IGdhbGxlcnlJbWFnZXMgOiBbXSksIFtnYWxsZXJ5SW1hZ2VzXSk7XHJcbiAgY29uc3QgdG9wUm93VmFsdWUgPSB1c2VNZW1vKCgpID0+IChyb3dzWzBdPy5yb3dJZCA/PyAwKSAtIDAuNSwgW3Jvd3NdKTtcclxuICBjb25zdCBib3R0b21Sb3dWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHJvd3Nbcm93cy5sZW5ndGggLSAxXT8ucm93SWQgPz8gMCkgKyAwLjUsIFtyb3dzXSk7XHJcbiAgY29uc3QgYXV0b3NpemVUZXh0YXJlYSA9IHVzZUNhbGxiYWNrKChub2RlKSA9PiB7XHJcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcclxuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IGAke25vZGUuc2Nyb2xsSGVpZ2h0fXB4YDtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGlzSW5zaWRlRHJvcFpvbmUgPSB1c2VDYWxsYmFjaygoZXZlbnQsIHJlZikgPT4ge1xyXG4gICAgaWYgKCFldmVudCB8fCAhcmVmPy5jdXJyZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByZWN0ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuIGNsaWVudFggPj0gcmVjdC5sZWZ0ICYmIGNsaWVudFggPD0gcmVjdC5yaWdodCAmJiBjbGllbnRZID49IHJlY3QudG9wICYmIGNsaWVudFkgPD0gcmVjdC5ib3R0b207XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gZGVzdHJveURyYWdQcmV2aWV3KGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQpLCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuX19ib3RNZW51QmVnaW5EcmFnID0gYmVnaW5EcmFnO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5fX2JvdE1lbnVCZWdpbkRyYWcgPT09IGJlZ2luRHJhZykge1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19ib3RNZW51QmVnaW5EcmFnO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtiZWdpbkRyYWddKTtcclxuXHJcbiAgY29uc3QgY2xlYXJQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgZGVzdHJveURyYWdQcmV2aWV3KGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQpO1xyXG4gICAgZHJhZ1ByZXZpZXdSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VQYXlsb2FkID0gKHBheWxvYWQsIHJvd0luZGV4LCBvcmRlckluZGV4ID0gMCwgY3JlYXRlTmV3Um93ID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghcGF5bG9hZCkgcmV0dXJuO1xyXG4gICAgaWYgKHBheWxvYWQuc291cmNlID09PSBcInBhbGV0dGVcIiAmJiBwYXlsb2FkLnR5cGUpIHtcclxuICAgICAgb25BZGRGcm9tUGFsZXR0ZT8uKHBheWxvYWQudHlwZSwgcm93SW5kZXgsIG9yZGVySW5kZXgsIGNyZWF0ZU5ld1Jvdyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXlsb2FkLmlkKSB7XHJcbiAgICAgIG9uTW92ZUJ1dHRvbj8uKHBheWxvYWQuaWQsIHJvd0luZGV4LCBvcmRlckluZGV4LCBjcmVhdGVOZXdSb3cpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlRmlsZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGZpbGUpID0+IHtcclxuICAgICAgaWYgKCFmaWxlIHx8ICFpc0VkaXRpbmcpIHJldHVybjtcclxuICAgICAgaWYgKCFmaWxlLnR5cGU/LnN0YXJ0c1dpdGg/LihcImltYWdlL1wiKSkge1xyXG4gICAgICAgIHNldEltYWdlRXJyb3IoXCLQl9Cw0LPRgNGD0LfQuNGC0LUg0YTQsNC50Lsg0LjQt9C+0LHRgNCw0LbQtdC90LjRjy5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEltYWdlRXJyb3IoXCJcIik7XHJcbiAgICAgIGlmICh0eXBlb2Ygb25VcGxvYWRJbWFnZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc2V0VXBsb2FkaW5nSW1hZ2UodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IG9uVXBsb2FkSW1hZ2UoZmlsZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZW51IGltYWdlIHVwbG9hZCBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICBzZXRJbWFnZUVycm9yKGVycm9yPy5tZXNzYWdlIHx8IFwi0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0VXBsb2FkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBvbkltYWdlQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBvbkltYWdlQ2hhbmdlKGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzRWRpdGluZywgb25JbWFnZUNoYW5nZSwgb25VcGxvYWRJbWFnZV0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2FsbGVyeVBpY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChzcmMpID0+IHtcclxuICAgICAgaWYgKCFpc0VkaXRpbmcgfHwgIXNyYykgcmV0dXJuO1xyXG4gICAgICBvblNlbGVjdEdhbGxlcnlJbWFnZT8uKHNyYyk7XHJcbiAgICB9LFxyXG4gICAgW2lzRWRpdGluZywgb25TZWxlY3RHYWxsZXJ5SW1hZ2VdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VJbnB1dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGF1dG9zaXplVGV4dGFyZWEoZXZlbnQ/LnRhcmdldCk7XHJcbiAgICAgIG9uTWVzc2FnZUNoYW5nZT8uKGV2ZW50Py50YXJnZXQ/LnZhbHVlIHx8IFwiXCIpO1xyXG4gICAgfSxcclxuICAgIFthdXRvc2l6ZVRleHRhcmVhLCBvbk1lc3NhZ2VDaGFuZ2VdLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgYm9keVN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYm9keT8uc3R5bGUgOiBudWxsO1xyXG4gICAgY29uc3QgcHJldmlvdXNCb2R5U3R5bGVzID0gYm9keVN0eWxlXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGJvZHlTdHlsZS5vdmVyZmxvdyxcclxuICAgICAgICAgIHRvdWNoQWN0aW9uOiBib2R5U3R5bGUudG91Y2hBY3Rpb24sXHJcbiAgICAgICAgICBvdmVyc2Nyb2xsQmVoYXZpb3I6IGJvZHlTdHlsZS5vdmVyc2Nyb2xsQmVoYXZpb3IsXHJcbiAgICAgICAgfVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgaWYgKGJvZHlTdHlsZSkge1xyXG4gICAgICBib2R5U3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICBib2R5U3R5bGUudG91Y2hBY3Rpb24gPSBcIm5vbmVcIjtcclxuICAgICAgYm9keVN0eWxlLm92ZXJzY3JvbGxCZWhhdmlvciA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZlbnRTY3JvbGwgPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW92ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkcmFnTW92ZUNvb3Jkc1JlZi5jdXJyZW50ID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XHJcbiAgICAgIGlmICghZHJhZ01vdmVGcmFtZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZHJhZ01vdmVGcmFtZVJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgIGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBjb29yZHMgPSBkcmFnTW92ZUNvb3Jkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgICAgaWYgKGNvb3Jkcykge1xyXG4gICAgICAgICAgICBkcmFnUHJldmlld1JlZi5jdXJyZW50Py51cGRhdGU/Lihjb29yZHMueCwgY29vcmRzLnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5leHRab25lID0gaXNJbnNpZGVEcm9wWm9uZShldmVudCwgZHJvcFpvbmVzPy5zZXR0aW5nc1JlZilcclxuICAgICAgICA/IFwic2V0dGluZ3NcIlxyXG4gICAgICAgIDogaXNJbnNpZGVEcm9wWm9uZShldmVudCwgZHJvcFpvbmVzPy5wYWxldHRlUmVmKVxyXG4gICAgICAgICAgPyBcInBhbGV0dGVcIlxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICBvbkRyb3Bab25lSG92ZXJDaGFuZ2U/LihuZXh0Wm9uZSk7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSByb3dzQ29udGFpbmVyUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XHJcbiAgICAgIGlmIChjb250YWluZXJSZWN0KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFkgPCBjb250YWluZXJSZWN0LnRvcCAtIDEyKSB7XHJcbiAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KHRvcFJvd1ZhbHVlKTtcclxuICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFkgPiBjb250YWluZXJSZWN0LmJvdHRvbSArIDEyKSB7XHJcbiAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJvdHRvbVJvd1ZhbHVlKTtcclxuICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3Um93VGFyZ2V0ID0gZXZlbnQudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1uZXctcm93LXRhcmdldF1cIik7XHJcbiAgICAgIGNvbnN0IHJvd05vZGUgPSBldmVudC50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLXJvdy1pZF1cIik7XHJcbiAgICAgIGlmICghcm93Tm9kZSAmJiAhbmV3Um93VGFyZ2V0KSB7XHJcbiAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChudWxsKTtcclxuICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVVcCA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb21taXREcm9wKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0Py4oKTtcclxuICAgICAgY2xlYXJQcmV2aWV3KCk7XHJcbiAgICAgIHNldERyYWdnaW5nSWQobnVsbCk7XHJcbiAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICBzZXREcmFnU3RhdGUobnVsbCk7XHJcbiAgICAgIHNldERyb3BSb3dIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obnVsbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbGVhclByZXZpZXcoKTtcclxuICAgICAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHNldERyYWdTdGF0ZShudWxsKTtcclxuICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgcHJldmVudFNjcm9sbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBoYW5kbGVNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVVcCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZUNhbmNlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGRyYWdNb3ZlRnJhbWVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgZHJhZ01vdmVGcmFtZVJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnRTY3JvbGwpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVDYW5jZWwpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcclxuICAgICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obnVsbCk7XHJcblxyXG4gICAgICBpZiAoYm9keVN0eWxlICYmIHByZXZpb3VzQm9keVN0eWxlcykge1xyXG4gICAgICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzQm9keVN0eWxlcy5vdmVyZmxvdztcclxuICAgICAgICBib2R5U3R5bGUudG91Y2hBY3Rpb24gPSBwcmV2aW91c0JvZHlTdHlsZXMudG91Y2hBY3Rpb247XHJcbiAgICAgICAgYm9keVN0eWxlLm92ZXJzY3JvbGxCZWhhdmlvciA9IHByZXZpb3VzQm9keVN0eWxlcy5vdmVyc2Nyb2xsQmVoYXZpb3I7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW2JvdHRvbVJvd1ZhbHVlLCBkcmFnU3RhdGUsIGRyb3Bab25lcywgaXNJbnNpZGVEcm9wWm9uZSwgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlLCB0b3BSb3dWYWx1ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXV0b3NpemVUZXh0YXJlYShtZXNzYWdlUmVmLmN1cnJlbnQpO1xyXG4gIH0sIFthdXRvc2l6ZVRleHRhcmVhLCBzY3JlZW4/Lm1lc3NhZ2VdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uRHJhZ1N0YXRlQ2hhbmdlPy4oISFkcmFnU3RhdGUpO1xyXG4gIH0sIFtkcmFnU3RhdGUsIG9uRHJhZ1N0YXRlQ2hhbmdlXSk7XHJcblxyXG4gIGNvbnN0IGJlZ2luRHJhZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBheWxvYWQsIG9yaWdpbk5vZGUsIGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghZXZlbnQgfHwgIWlzRWRpdGluZykgcmV0dXJuO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJJZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgb3JpZ2luTm9kZT8uc2V0UG9pbnRlckNhcHR1cmU/LihldmVudC5wb2ludGVySWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgLy8gaWdub3JlIHBvaW50ZXIgY2FwdHVyZSBmYWlsdXJlc1xyXG4gICAgICB9XHJcbiAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBwYXlsb2FkO1xyXG4gICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KHBheWxvYWQuZnJvbVJvdyA/PyBudWxsKTtcclxuICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KHBheWxvYWQuZnJvbU9yZGVyID8/IG51bGwpO1xyXG4gICAgICBzZXREcmFnU3RhdGUocGF5bG9hZCk7XHJcbiAgICAgIHNldERyYWdnaW5nSWQocGF5bG9hZC5pZCB8fCBudWxsKTtcclxuICAgICAgY29uc3QgcHJldmlldyA9IGNyZWF0ZURyYWdQcmV2aWV3KG9yaWdpbk5vZGUsIGV2ZW50KTtcclxuICAgICAgZHJhZ1ByZXZpZXdSZWYuY3VycmVudCA9IHByZXZpZXc7XHJcbiAgICAgIHByZXZpZXc/LnVwZGF0ZT8uKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgfSxcclxuICAgIFtpc0VkaXRpbmddLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbW1pdERyb3AgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8uc2V0dGluZ3NSZWYpICYmIGRyYWdTdGF0ZS5pZCkge1xyXG4gICAgICAgIG9uU2VsZWN0QnV0dG9uPy4oZHJhZ1N0YXRlLmlkKTtcclxuICAgICAgICBjbGVhclByZXZpZXcoKTtcclxuICAgICAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgICAgIGRyYWdQYXlsb2FkUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHNldERyYWdTdGF0ZShudWxsKTtcclxuICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodChudWxsKTtcclxuICAgICAgICBvbkRyb3Bab25lSG92ZXJDaGFuZ2U/LihudWxsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlRHJvcFpvbmUoZXZlbnQsIGRyb3Bab25lcz8ucGFsZXR0ZVJlZikgJiYgZHJhZ1N0YXRlLmlkKSB7XHJcbiAgICAgICAgb25SZW1vdmVCdXR0b24/LihkcmFnU3RhdGUuaWQpO1xyXG4gICAgICAgIGNsZWFyUHJldmlldygpO1xyXG4gICAgICAgIHNldERyYWdnaW5nSWQobnVsbCk7XHJcbiAgICAgICAgZHJhZ1BheWxvYWRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgc2V0RHJhZ1N0YXRlKG51bGwpO1xyXG4gICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgIG9uRHJvcFpvbmVIb3ZlckNoYW5nZT8uKG51bGwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmF3Um93ID0gZHJvcFJvd0hpZ2hsaWdodCA/PyBkcmFnU3RhdGUuZnJvbVJvdyA/PyAwO1xyXG4gICAgY29uc3QgaXNCZXR3ZWVuUm93cyA9IE51bWJlci5pc0Zpbml0ZShyYXdSb3cpICYmIE1hdGguYWJzKHJhd1JvdyAlIDEpID09PSAwLjU7XHJcbiAgICBjb25zdCB0YXJnZXRSb3cgPSBOdW1iZXIuaXNGaW5pdGUocmF3Um93KSA/IChpc0JldHdlZW5Sb3dzID8gTWF0aC5jZWlsKHJhd1JvdykgOiBNYXRoLnJvdW5kKHJhd1JvdykpIDogMDtcclxuICAgIGNvbnN0IHRhcmdldE9yZGVyID0gZHJvcE9yZGVySGlnaGxpZ2h0ID8/IGRyYWdTdGF0ZS5mcm9tT3JkZXIgPz8gMDtcclxuICAgIHBsYWNlUGF5bG9hZChkcmFnU3RhdGUsIHRhcmdldFJvdywgdGFyZ2V0T3JkZXIsIGlzQmV0d2VlblJvd3MpO1xyXG4gICAgY2xlYXJQcmV2aWV3KCk7XHJcbiAgICBzZXREcmFnZ2luZ0lkKG51bGwpO1xyXG4gICAgZHJhZ1BheWxvYWRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICBzZXREcmFnU3RhdGUobnVsbCk7XHJcbiAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPy4obnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtOTUwLzg1IHZpYS1zbGF0ZS05MDAvNzAgdG8taW5kaWdvLTk1MC83MCBwLTUgc2hhZG93LVswXzI1cHhfOTBweF9yZ2JhKDAsMCwwLDAuNDUpXSByaW5nLTEgcmluZy1pbmRpZ28tOTAwLzUwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGJnLVtyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0XzIwJV8yMCUscmdiYSg5OSwxMDIsMjQxLDAuMTgpLHRyYW5zcGFyZW50XzMyJSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF84MCVfMCUscmdiYSgxNCwxNjUsMjMzLDAuMTgpLHRyYW5zcGFyZW50XzM1JSldXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyBzbTpmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtMVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NyZWVuPy50aXRsZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25UaXRsZUNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QuiDRjdC60YDQsNC90LBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXdoaXRlLzUgcHgtNCBweS0zIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uIGZvY3VzOmJvcmRlci1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlRWRpdGluZz8uKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC14bCBib3JkZXIgcHgtMyBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCBzaGFkb3ctc20gdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvNzAgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMTUgYmctd2hpdGUvNSB0ZXh0LXNsYXRlLTEwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPuKcj++4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+e2lzRWRpdGluZyA/IFwi0J/QvtC60LjQvdGD0YLRjCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XCIgOiBcItCg0LXQtNCw0LrRgtC+0YBcIn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlPy4oKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tNjAwIHZpYS1ibHVlLTYwMCB0by1lbWVyYWxkLTYwMCBweC00IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LWxnIHRyYW5zaXRpb24gaG92ZXI6YnJpZ2h0bmVzcy0xMTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCBpc1NhdmluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgfHwgaXNTYXZpbmcgPyBcItCh0L7RhdGA0LDQvdGP0LXQvC4uLlwiIDogXCLQodC+0YXRgNCw0L3QuNGC0YxcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXNsYXRlLTkwMC83MCBzaGFkb3ctaW5uZXJcIj5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bncm91cCByZWxhdGl2ZSBibG9jayBvdmVyZmxvdy1oaWRkZW4gJHtpc0VkaXRpbmcgPyBcImN1cnNvci1wb2ludGVyXCIgOiBcImN1cnNvci1kZWZhdWx0XCJ9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtZ2FsbGVyeS16b25lXVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGlmICghaXNFZGl0aW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgaWYgKGZpbGUpIGhhbmRsZUltYWdlRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NjcmVlbj8uaW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtzY3JlZW4uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Utb3V0IGdyb3VwLWhvdmVyOnNjYWxlLVsxLjAyXVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC02NCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtODAwLzcwIHZpYS1pbmRpZ28tOTAwLzYwIHRvLXNsYXRlLTk1MCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby0xMDAgcmluZy0xIHJpbmctaW5kaWdvLTUwMC8zMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPvCflrzvuI88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCX0LDQs9GA0YPQt9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtc2xhdGUtMzAwXCI+0JrQu9C40LrQvdC40YLQtSDQuNC70Lgg0L/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50Ls8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlKSBoYW5kbGVJbWFnZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3VwbG9hZGluZ0ltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS05MDAvNzAgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C20LDQtdC8Li4uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS05MDAvNjAgdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMCB0cmFuc2l0aW9uIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCIgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBzcGFjZS15LTIgYmctc2xhdGUtOTUwLzgwIHAtMyB0ZXh0LXdoaXRlIHNoYWRvdy1bMF8tMTBweF8zMHB4X3JnYmEoMCwwLDAsMC4zNSldIHJpbmctMSByaW5nLWluZGlnby01MDAvMzAgYmFja2Ryb3AtYmx1ci1zbSAke1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nID8gXCJwb2ludGVyLWV2ZW50cy1hdXRvXCIgOiBcInBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgZGF0YS1nYWxsZXJ5LXpvbmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+8J+WvO+4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+0JPQsNC70LXRgNC10Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjQuTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNFZGl0aW5nICYmIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItaW5kaWdvLTQwMC82MCBiZy1pbmRpZ28tNTAwLzE1IHB4LTMgcHktMSB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTEwMCB0cmFuc2l0aW9uIGhvdmVyOmJvcmRlci1pbmRpZ28tMzAwIGhvdmVyOnRleHQtd2hpdGUgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNFZGl0aW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpbWFnZUVycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTMwMFwiPntpbWFnZUVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAge2lzR2FsbGVyeUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwXCI+0JfQsNCz0YDRg9C20LDQtdC8INC40LfQvtCx0YDQsNC20LXQvdC40Y8uLi48L3A+XHJcbiAgICAgICAgICAgICAgKSA6IGdhbGxlcnlMaXN0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBzbTpncmlkLWNvbHMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7Z2FsbGVyeUxpc3QubWFwKChzcmMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IChzY3JlZW4/LmltYWdlVXJsIHx8IFwiXCIpID09PSBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYWxsZXJ5UGljayhzcmMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgYm9yZGVyIHRleHQtbGVmdCB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci13aGl0ZS8xMCBiZy1zbGF0ZS05MDAvNzAgaG92ZXI6Ym9yZGVyLWluZGlnby0zMDAgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAkeyFpc0VkaXRpbmcgPyBcIm9wYWNpdHktNjBcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHJpZ2h0LTEgdG9wLTEgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNTAwLzkwIHB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQsdGA0LDQvdC+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICDQn9C+0LrQsCDQvdC10YIg0LfQsNCz0YDRg9C20LXQvdC90YvRhSDQuNC30L7QsdGA0LDQttC10L3QuNC5LiDQlNC+0LHQsNCy0YzRgtC1INGE0LDQudC7LCDRh9GC0L7QsdGLINC+0L0g0L/QvtGP0LLQuNC70YHRjyDQsiDQs9Cw0LvQtdGA0LXQtS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBiZy1zbGF0ZS05MDAvODAgcHgtNCBweS00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcmVmPXttZXNzYWdlUmVmfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW4/Lm1lc3NhZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uSW5wdXQ9e2hhbmRsZU1lc3NhZ2VJbnB1dH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVzaXplLW5vbmUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy13aGl0ZS81IHB4LTMgcHktMS41IHRleHQtc20gdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHQvtC+0LHRidC10L3QuNC1INC00LvRjyDQutC70LjQtdC90YLQsCwg0L7Qv9C40YHQsNC90LjQtSDRjdC60YDQsNC90LBcIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3BhY2UteS0zIGJnLXNsYXRlLTkwMC83MCBweC00IHBiLTUgcHQtM1wiIHJlZj17cm93c0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgIHtyb3dzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCAke2RyYWdTdGF0ZSA/IFwiei0xMFwiIDogXCJwb2ludGVyLWV2ZW50cy1ub25lXCJ9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MGB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkcmFnU3RhdGUgPyBcIi0xMHB4XCIgOiBcIi02cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRyYWdTdGF0ZSA/IDMyIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBkcmFnU3RhdGUgPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBkcmFnU3RhdGUgPyBcImF1dG9cIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5ldy1yb3ctdGFyZ2V0PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCh0b3BSb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQodG9wUm93VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCh0b3BSb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdERyb3AoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEgdGV4dC1bMTFweF0gdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcFJvd0hpZ2hsaWdodCA9PT0gdG9wUm93VmFsdWUgJiYgZHJhZ1N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCByaW5nLTIgcmluZy1lbWVyYWxkLTQwMC82MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMjAgYmctc2xhdGUtODAwLzcwIHRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0L7QstCw0Y8g0YHRgtGA0L7QutCwINGB0LLQtdGA0YXRg1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCByb3dJZCA9IE51bWJlcihyb3cucm93SWQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZVJvdyA9IHJvd0lkIC0gMC41O1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzaG93QmVmb3JlID0gaW5kZXggIT09IDAgJiYgISFkcmFnU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0lkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93QmVmb3JlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMCByaWdodC0wIC10b3AtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BSb3dIaWdobGlnaHQgPT09IGJlZm9yZVJvdyA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBkcmFnU3RhdGUgPyBcImF1dG9cIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1uZXctcm93LXRhcmdldD17YGJlZm9yZS0ke3Jvd0lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChiZWZvcmVSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJlZm9yZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJlZm9yZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXREcm9wKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9pbnRlci1ldmVudHMtYXV0byByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTIgcHktMSB0ZXh0LVsxMHB4XSB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BSb3dIaWdobGlnaHQgPT09IGJlZm9yZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItZW1lcmFsZC00MDAvODAgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTEwMCByaW5nLTIgcmluZy1lbWVyYWxkLTQwMC82MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci13aGl0ZS8xNSBiZy1zbGF0ZS05MDAvNzAgdGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QvtCy0LDRjyDRgdGC0YDQvtC60LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiByb3VuZGVkLTJ4bCBiZy13aGl0ZS81IHAtMiByaW5nLTEgcmluZy13aGl0ZS8xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgbGc6ZmxleCBsZzpmbGV4LXdyYXAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wUm93SGlnaGxpZ2h0ID09PSByb3dJZCA/IFwicmluZy0yIHJpbmctZW1lcmFsZC00MDAvNzAgYmctZW1lcmFsZC01MDAvMTAgc2NhbGUtWzEuMDFdXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJvdy1pZD17cm93SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQocm93SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGVzID0gQXJyYXkuZnJvbSh0YXJnZXQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbltkYXRhLWRyYWctaWRdXCIpKS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobm9kZSkgPT4gbm9kZS5kYXRhc2V0LmRyYWdJZCAhPT0gZHJhZ2dpbmdJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IGJ0bk5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bk5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gYnRuTm9kZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRwb2ludCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY2xpZW50WCA8IG1pZHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYnRuTm9kZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlciA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQob3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXREcm9wKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRpb25JbmRleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnU3RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BSb3dIaWdobGlnaHQgPT09IHJvd0lkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wT3JkZXJIaWdobGlnaHQgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihNYXRoLm1heChkcm9wT3JkZXJIaWdobGlnaHQsIDApLCByb3cuYnV0dG9ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJQbGFjZWhvbGRlciA9IChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgaC1bNDRweF0gdy1mdWxsIG1pbi13LTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItZW1lcmFsZC0zMDAvNzAgYmctZW1lcmFsZC0yMDAvMTAgbGc6bWluLXctWzE0MHB4XSBsZzpmbGV4LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVCdXR0b25zID0gcm93LmJ1dHRvbnMuZmlsdGVyKChidG4pID0+IGJ0bi5pZCAhPT0gZHJhZ2dpbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4udmlzaWJsZUJ1dHRvbnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRpb25JbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChpbnNlcnRpb25JbmRleCwgMCksIGl0ZW1zLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYWNlaG9sZGVyKGBwbGFjZWhvbGRlci0ke3Jvd0lkfS0ke2luc2VydGlvbkluZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoYnRuT3JQbGFjZWhvbGRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnRuT3JQbGFjZWhvbGRlcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoYnRuT3JQbGFjZWhvbGRlcikpIHJldHVybiBidG5PclBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuID0gYnRuT3JQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J0bi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRyYWctaWQ9e2J0bi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW9yZGVyPXtidG4ub3JkZXIgPz8gaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aXNFZGl0aW5nID8geyB0b3VjaEFjdGlvbjogXCJub25lXCIgfSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VkaXRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luRHJhZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidG4uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVJvdzogTnVtYmVyKGJ0bi5yb3cgfHwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbU9yZGVyOiBOdW1iZXIoYnRuLm9yZGVyID8/IGluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFwibWVudVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGJ0bi50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgZmxleCB3LWZ1bGwgbWluLXctMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC0yeGwgYm9yZGVyIHB4LTMgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6Ym9yZGVyLWluZGlnby0zMDAgaG92ZXI6c2hhZG93LVswXzIwcHhfNDBweF9yZ2JhKDk5LDEwMiwyNDEsMC4zNSldIGxnOm1pbi13LVsxNDBweF0gbGc6ZmxleC0xICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmcgPyBcImN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmdcIiA6IFwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nSWQgPT09IGJ0bi5pZCA/IFwib3BhY2l0eS00MCBib3JkZXItd2hpdGUvMjAgYmctd2hpdGUvMTBcIiA6IFwiYm9yZGVyLXdoaXRlLzEwIGJnLXdoaXRlLzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4udGFyZ2V0U2NyZWVuSWQgPyBvbk5hdmlnYXRlPy4oYnRuLnRhcmdldFNjcmVlbklkKSA6IG9uU2VsZWN0QnV0dG9uPy4oYnRuLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2J0bi5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMCByaWdodC0wICR7ZHJhZ1N0YXRlID8gXCJ6LTEwXCIgOiBcInBvaW50ZXItZXZlbnRzLW5vbmVcIn0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwYH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IGRyYWdTdGF0ZSA/IFwiLTEwcHhcIiA6IFwiLTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZHJhZ1N0YXRlID8gMzIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGRyYWdTdGF0ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGRyYWdTdGF0ZSA/IFwiYXV0b1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmV3LXJvdy10YXJnZXQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICBvblBvaW50ZXJFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJvdHRvbVJvd1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodChib3R0b21Sb3dWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KGJvdHRvbVJvd1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0RHJvcChlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTMgcHktMSB0ZXh0LVsxMXB4XSB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkcm9wUm93SGlnaGxpZ2h0ID09PSBib3R0b21Sb3dWYWx1ZSAmJiBkcmFnU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1lbWVyYWxkLTQwMC84MCBiZy1lbWVyYWxkLTUwMC8xMCB0ZXh0LWVtZXJhbGQtMTAwIHJpbmctMiByaW5nLWVtZXJhbGQtNDAwLzYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci13aGl0ZS8yMCBiZy1zbGF0ZS04MDAvNzAgdGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3QvtCy0LDRjyDRgdGC0YDQvtC60LAg0YHQvdC40LfRg1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMjQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItd2hpdGUvMjUgYmctd2hpdGUvNSB0ZXh0LXNtIHRleHQtc2xhdGUtMzAwXCJcclxuICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghZHJhZ1N0YXRlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcFJvd0hpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcE9yZGVySGlnaGxpZ2h0KDApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3BSb3dIaWdobGlnaHQoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3BPcmRlckhpZ2hsaWdodCgwKTtcclxuICAgICAgICAgICAgICAgICAgY29tbWl0RHJvcChlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wUm93SGlnaGxpZ2h0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wT3JkZXJIaWdobGlnaHQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERyb3AgYSBidXR0b24gaGVyZSB0byBwbGFjZSB0aGUgdmVyeSBmaXJzdCByb3dcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQm90TWVudUJ1aWxkZXIgPSAoeyBtZW51LCBvblNhdmUsIG9uUmVsb2FkLCBpc1NhdmluZywgbG9hZE1lbnVJbWFnZXMsIG9uVXBsb2FkTWVudUltYWdlIH0pID0+IHtcclxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKCgpID0+IG5vcm1hbGl6ZU1lbnVEcmFmdChtZW51KSk7XHJcbiAgY29uc3QgW2FjdGl2ZVNjcmVlbklkLCBzZXRBY3RpdmVTY3JlZW5JZF0gPSB1c2VTdGF0ZSgoKSA9PlxyXG4gICAgbm9ybWFsaXplTWVudURyYWZ0KG1lbnUpLnNjcmVlbnNbMF0/LmlkIHx8IFwibWFpblwiLFxyXG4gICk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQnV0dG9uSWQsIHNldFNlbGVjdGVkQnV0dG9uSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGlydHksIHNldERpcnR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtwYWxldHRlSG92ZXIsIHNldFBhbGV0dGVIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bab25lSG92ZXIsIHNldERyb3Bab25lSG92ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lbnVJbWFnZXMsIHNldE1lbnVJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYWxsZXJ5TG9hZGluZywgc2V0R2FsbGVyeUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBidXR0b25TZXR0aW5nc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBwYWxldHRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVJZCA9IFwiYm90LWNvbnN0cnVjdG9yLWFuaW1hdGlvbnNcIjtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgQGtleWZyYW1lcyBmbG9hdHkgeyAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9IDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfSAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH0gfVxyXG4gICAgICBAa2V5ZnJhbWVzIGdsb3dQdWxzZSB7IDAlIHsgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9IDUwJSB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoOTksMTAyLDI0MSwwLjM1KTsgfSAxMDAlIHsgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9IH1cclxuICAgICAgQGtleWZyYW1lcyBtYWduZXRQdWxsIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wMikgdHJhbnNsYXRlWSgtMnB4KTsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgICAgIEBrZXlmcmFtZXMgc2hpbW1lclNsaWRlIHsgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH0gMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH0gfVxyXG4gICAgICAuZHJhZy1zaGFkb3cgeyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMThweCA0NXB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KSk7IH1cclxuICAgIGA7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRWRpdGluZykge1xyXG4gICAgICBzZXREcm9wWm9uZUhvdmVyKG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0VkaXRpbmddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU1lbnVEcmFmdChtZW51KTtcclxuICAgIHNldERyYWZ0KG5vcm1hbGl6ZWQpO1xyXG4gICAgaWYgKCFub3JtYWxpemVkLnNjcmVlbnMuZmluZCgocykgPT4gcy5pZCA9PT0gYWN0aXZlU2NyZWVuSWQpKSB7XHJcbiAgICAgIHNldEFjdGl2ZVNjcmVlbklkKG5vcm1hbGl6ZWQuc2NyZWVuc1swXT8uaWQgfHwgXCJtYWluXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRCdXR0b25JZChudWxsKTtcclxuICAgIHNldERpcnR5KGZhbHNlKTtcclxuICB9LCBbbWVudV0pO1xyXG5cclxuICBjb25zdCByZWZyZXNoR2FsbGVyeSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghbG9hZE1lbnVJbWFnZXMgJiYgdHlwZW9mIGZldGNoICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcclxuICAgIHNldEdhbGxlcnlMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0ICh0eXBlb2YgbG9hZE1lbnVJbWFnZXMgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgID8gbG9hZE1lbnVJbWFnZXMoKVxyXG4gICAgICAgIDogZmV0Y2goXCIvYXBpL2JvdC9tZW51L2ltYWdlc1wiKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpKTtcclxuICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkocGF5bG9hZD8uaW1hZ2VzKSA/IHBheWxvYWQuaW1hZ2VzIDogQXJyYXkuaXNBcnJheShwYXlsb2FkKSA/IHBheWxvYWQgOiBbXTtcclxuICAgICAgc2V0TWVudUltYWdlcyhsaXN0KTtcclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTWVudSBpbWFnZXMgbG9hZCBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldEdhbGxlcnlMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbbG9hZE1lbnVJbWFnZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZnJlc2hHYWxsZXJ5KCk7XHJcbiAgfSwgW3JlZnJlc2hHYWxsZXJ5XSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVNjcmVlbiA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBkcmFmdC5zY3JlZW5zLmZpbmQoKHNjcmVlbikgPT4gc2NyZWVuLmlkID09PSBhY3RpdmVTY3JlZW5JZCkgfHwgZHJhZnQuc2NyZWVuc1swXSxcclxuICAgIFtkcmFmdC5zY3JlZW5zLCBhY3RpdmVTY3JlZW5JZF0sXHJcbiAgKTtcclxuICBjb25zdCBhY3RpdmVUaXRsZSA9IGFjdGl2ZVNjcmVlbj8udGl0bGUgfHwgZHJhZnQuc2NyZWVuc1swXT8udGl0bGUgfHwgXCLQnNC10L3RjlwiO1xyXG5cclxuICBjb25zdCB1cGRhdGVTY3JlZW4gPSB1c2VDYWxsYmFjayhcclxuICAgIChzY3JlZW5JZCwgdXBkYXRlcikgPT4ge1xyXG4gICAgICBzZXREcmFmdCgocHJldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbnMgPSBwcmV2LnNjcmVlbnMubWFwKChzY3JlZW4pID0+XHJcbiAgICAgICAgICBzY3JlZW4uaWQgPT09IHNjcmVlbklkID8geyAuLi5zY3JlZW4sIC4uLnVwZGF0ZXIoc2NyZWVuKSB9IDogc2NyZWVuLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgc2NyZWVucyB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGlydHkodHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkU2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RHJhZnQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2LnNjcmVlbnMubGVuZ3RoICsgMTtcclxuICAgICAgY29uc3QgaWQgPSBzYW5pdGl6ZUlkKGBzY3JlZW4tJHtpbmRleH1gKTtcclxuICAgICAgY29uc3Qgc2NyZWVuID0gbm9ybWFsaXplU2NyZWVuKFxyXG4gICAgICAgIHsgaWQsIHRpdGxlOiBg0K3QutGA0LDQvSAke2luZGV4fWAsIG1lc3NhZ2U6ICcnLCBidXR0b25zOiBbXSB9LFxyXG4gICAgICAgIGluZGV4IC0gMSxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgc2NyZWVuczogWy4uLnByZXYuc2NyZWVucywgc2NyZWVuXSB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXREaXJ0eSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZVNjcmVlbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNjcmVlbklkKSA9PiB7XHJcbiAgICAgIHNldERyYWZ0KChwcmV2KSA9PiB7XHJcbiAgICAgICAgaWYgKHByZXYuc2NyZWVucy5sZW5ndGggPD0gMSkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBwcmV2LnNjcmVlbnMuZmlsdGVyKChzY3JlZW4pID0+IHNjcmVlbi5pZCAhPT0gc2NyZWVuSWQpO1xyXG4gICAgICAgIGNvbnN0IG5leHRBY3RpdmUgPSBmaWx0ZXJlZFswXT8uaWQgfHwgbnVsbDtcclxuICAgICAgICBzZXRBY3RpdmVTY3JlZW5JZCgoY3VycmVudCkgPT4gKGN1cnJlbnQgPT09IHNjcmVlbklkID8gbmV4dEFjdGl2ZSA6IGN1cnJlbnQpKTtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBzY3JlZW5zOiBmaWx0ZXJlZCB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGlydHkodHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW92ZVNjcmVlbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNjcmVlbklkLCBkZWx0YSkgPT4ge1xyXG4gICAgICBzZXREcmFmdCgocHJldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHByZXYuc2NyZWVucy5maW5kSW5kZXgoKHNjcmVlbikgPT4gc2NyZWVuLmlkID09PSBzY3JlZW5JZCk7XHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHJldHVybiBwcmV2O1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGlkeCArIGRlbHRhO1xyXG4gICAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBwcmV2LnNjcmVlbnMubGVuZ3RoKSByZXR1cm4gcHJldjtcclxuICAgICAgICBjb25zdCBzY3JlZW5zID0gWy4uLnByZXYuc2NyZWVuc107XHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gc2NyZWVucy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICBzY3JlZW5zLnNwbGljZShuZXh0SW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIHNjcmVlbnMgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldERpcnR5KHRydWUpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGJ1dHRvbklkLCBuZXh0QnV0dG9uKSA9PiB7XHJcbiAgICAgIGlmICghYWN0aXZlU2NyZWVuKSByZXR1cm47XHJcbiAgICAgIHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsIChzY3JlZW4pID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gKHNjcmVlbi5idXR0b25zIHx8IFtdKS5tYXAoKGJ0bikgPT5cclxuICAgICAgICAgIGJ0bi5pZCA9PT0gYnV0dG9uSWQgPyBub3JtYWxpemVCdXR0b24obmV4dEJ1dHRvbiwgMCwgc2NyZWVuLmlkKSA6IGJ0bixcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7IGJ1dHRvbnM6IG5vcm1hbGl6ZUJ1dHRvbk9yZGVyKGJ1dHRvbnMpIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFthY3RpdmVTY3JlZW4sIHVwZGF0ZVNjcmVlbl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW92ZUJ1dHRvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGJ1dHRvbklkLCB0YXJnZXRSb3csIHRhcmdldE9yZGVyID0gMCwgY3JlYXRlTmV3Um93ID0gZmFsc2UpID0+IHtcclxuICAgICAgaWYgKCFhY3RpdmVTY3JlZW4pIHJldHVybjtcclxuICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKHNjcmVlbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBzY3JlZW4uYnV0dG9ucyB8fCBbXTtcclxuICAgICAgICBjb25zdCBpdGVtID0gYnV0dG9ucy5maW5kKChidG4pID0+IGJ0bi5pZCA9PT0gYnV0dG9uSWQpO1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIHt9O1xyXG4gICAgICAgIGNvbnN0IHBsYWNlZCA9IGluc2VydEJ1dHRvbkF0UG9zaXRpb24oYnV0dG9ucywgeyAuLi5pdGVtIH0sIHRhcmdldFJvdywgdGFyZ2V0T3JkZXIsIHsgY3JlYXRlTmV3Um93IH0pO1xyXG4gICAgICAgIHJldHVybiB7IGJ1dHRvbnM6IHBsYWNlZCB9O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbYWN0aXZlU2NyZWVuLCB1cGRhdGVTY3JlZW5dLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZEJ1dHRvbkZyb21QYWxldHRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodHlwZSwgcm93ID0gMCwgb3JkZXIgPSAwLCBjcmVhdGVOZXdSb3cgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBpZiAoIWFjdGl2ZVNjcmVlbikgcmV0dXJuO1xyXG4gICAgICB1cGRhdGVTY3JlZW4oYWN0aXZlU2NyZWVuLmlkLCAoc2NyZWVuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHNjcmVlbi5idXR0b25zID8gWy4uLnNjcmVlbi5idXR0b25zXSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGJ1dHRvbnMubGVuZ3RoICsgMTtcclxuICAgICAgICBjb25zdCBuZXdCdG4gPSBub3JtYWxpemVCdXR0b24oXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBgYnRuLSR7c2NyZWVuLmlkfS0ke25leHRJbmRleH1gLFxyXG4gICAgICAgICAgICBsYWJlbDogYCR7Qk9UX0JVVFRPTl9UWVBFUy5maW5kKCh0KSA9PiB0LmlkID09PSB0eXBlKT8ubGFiZWwgfHwgXCLQmtC90L7Qv9C60LBcIn1gLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB0YXJnZXRTY3JlZW5JZDogbnVsbCxcclxuICAgICAgICAgICAgcm93LFxyXG4gICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBuZXh0SW5kZXggLSAxLFxyXG4gICAgICAgICAgc2NyZWVuLmlkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcGxhY2VkID0gaW5zZXJ0QnV0dG9uQXRQb3NpdGlvbihidXR0b25zLCBuZXdCdG4sIHJvdywgb3JkZXIsIHsgY3JlYXRlTmV3Um93IH0pO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQnV0dG9uSWQobmV3QnRuLmlkKTtcclxuICAgICAgICByZXR1cm4geyBidXR0b25zOiBwbGFjZWQgfTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW2FjdGl2ZVNjcmVlbiwgdXBkYXRlU2NyZWVuXSxcclxuICApO1xyXG5cclxuICBjb25zdCByZW1vdmVCdXR0b24gPSB1c2VDYWxsYmFjayhcclxuICAgIChidXR0b25JZCkgPT4ge1xyXG4gICAgICBpZiAoIWFjdGl2ZVNjcmVlbiB8fCAhYnV0dG9uSWQpIHJldHVybjtcclxuICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKHNjcmVlbikgPT4gKHtcclxuICAgICAgICBidXR0b25zOiAoc2NyZWVuLmJ1dHRvbnMgfHwgW10pLmZpbHRlcigoYnRuKSA9PiBidG4uaWQgIT09IGJ1dHRvbklkKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRTZWxlY3RlZEJ1dHRvbklkKChwcmV2KSA9PiAocHJldiA9PT0gYnV0dG9uSWQgPyBudWxsIDogcHJldikpO1xyXG4gICAgfSxcclxuICAgIFthY3RpdmVTY3JlZW4sIHVwZGF0ZVNjcmVlbl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0R2FsbGVyeUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc3JjKSA9PiB7XHJcbiAgICAgIGlmICghYWN0aXZlU2NyZWVuIHx8ICFzcmMpIHJldHVybjtcclxuICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKCkgPT4gKHsgaW1hZ2VVcmw6IHNyYyB9KSk7XHJcbiAgICB9LFxyXG4gICAgW2FjdGl2ZVNjcmVlbiwgdXBkYXRlU2NyZWVuXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRNZW51SW1hZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChmaWxlKSA9PiB7XHJcbiAgICAgIGlmICghZmlsZSB8fCAhYWN0aXZlU2NyZWVuKSByZXR1cm4gbnVsbDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9uVXBsb2FkTWVudUltYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uVXBsb2FkTWVudUltYWdlKGZpbGUpO1xyXG4gICAgICAgICAgY29uc3QgdXBsb2FkZWRQYXRoID0gcmVzdWx0Py5wYXRoIHx8IHJlc3VsdD8udXJsIHx8IHJlc3VsdD8uaW1hZ2UgfHwgXCJcIjtcclxuICAgICAgICAgIGlmICh1cGxvYWRlZFBhdGgpIHtcclxuICAgICAgICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKCkgPT4gKHsgaW1hZ2VVcmw6IHVwbG9hZGVkUGF0aCB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQ/LmltYWdlcykpIHtcclxuICAgICAgICAgICAgc2V0TWVudUltYWdlcyhyZXN1bHQuaW1hZ2VzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHJlZnJlc2hHYWxsZXJ5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdXBsb2FkZWRQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVXJsID0gYXdhaXQgcmVhZEZpbGVBc0RhdGFVcmwoZmlsZSk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKCkgPT4gKHsgaW1hZ2VVcmw6IGRhdGFVcmwgfSkpO1xyXG4gICAgICAgIHJldHVybiBkYXRhVXJsO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZW51IGltYWdlIHVwbG9hZCBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbYWN0aXZlU2NyZWVuLCBvblVwbG9hZE1lbnVJbWFnZSwgcmVmcmVzaEdhbGxlcnksIHVwZGF0ZVNjcmVlbl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghb25TYXZlKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb25TYXZlKGRyYWZ0KTtcclxuICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0RGlydHkoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RyYWZ0LCBvblNhdmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctM3hsIHNwYWNlLXktNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIDxDaGF0UHJldmlld1xyXG4gICAgICAgICAgc2NyZWVuPXthY3RpdmVTY3JlZW59XHJcbiAgICAgICAgICBzY3JlZW5zPXtkcmFmdC5zY3JlZW5zfVxyXG4gICAgICAgICAgb25TZWxlY3RCdXR0b249eyhpZCkgPT4gc2V0U2VsZWN0ZWRCdXR0b25JZChpZCl9XHJcbiAgICAgICAgICBvbk5hdmlnYXRlPXsodGFyZ2V0SWQpID0+IHNldEFjdGl2ZVNjcmVlbklkKHRhcmdldElkKX1cclxuICAgICAgICAgIG9uTW92ZUJ1dHRvbj17KGlkLCByb3csIG9yZGVyLCBjcmVhdGVOZXdSb3cpID0+IG1vdmVCdXR0b24oaWQsIHJvdywgb3JkZXIsIGNyZWF0ZU5ld1Jvdyl9XHJcbiAgICAgICAgICBvbkFkZEZyb21QYWxldHRlPXsodHlwZSwgcm93LCBvcmRlciwgY3JlYXRlTmV3Um93KSA9PiBhZGRCdXR0b25Gcm9tUGFsZXR0ZSh0eXBlLCByb3csIG9yZGVyLCBjcmVhdGVOZXdSb3cpfVxyXG4gICAgICAgICAgb25SZW1vdmVCdXR0b249e3JlbW92ZUJ1dHRvbn1cclxuICAgICAgICAgIG9uVXBsb2FkSW1hZ2U9e2hhbmRsZVVwbG9hZE1lbnVJbWFnZX1cclxuICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e21lbnVJbWFnZXN9XHJcbiAgICAgICAgICBvblNlbGVjdEdhbGxlcnlJbWFnZT17aGFuZGxlU2VsZWN0R2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgb25NZXNzYWdlQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZVNjcmVlbihhY3RpdmVTY3JlZW4uaWQsICgpID0+ICh7IG1lc3NhZ2U6IHZhbHVlIH0pKX1cclxuICAgICAgICAgIG9uVGl0bGVDaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlU2NyZWVuKGFjdGl2ZVNjcmVlbi5pZCwgKCkgPT4gKHsgdGl0bGU6IHZhbHVlIH0pKX1cclxuICAgICAgICAgIGRyb3Bab25lcz17eyBzZXR0aW5nc1JlZjogYnV0dG9uU2V0dGluZ3NSZWYsIHBhbGV0dGVSZWYgfX1cclxuICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICAgICAgb25Ecm9wWm9uZUhvdmVyQ2hhbmdlPXtzZXREcm9wWm9uZUhvdmVyfVxyXG4gICAgICAgICAgb25EcmFnU3RhdGVDaGFuZ2U9e3NldElzRHJhZ2dpbmd9XHJcbiAgICAgICAgICBpc0dhbGxlcnlMb2FkaW5nPXtnYWxsZXJ5TG9hZGluZ31cclxuICAgICAgICAgIG9uVG9nZ2xlRWRpdGluZz17KCkgPT4gc2V0SXNFZGl0aW5nKChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICBpc1NhdmluZz17aXNTYXZpbmd9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge2lzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uRWRpdFBhbmVsXHJcbiAgICAgICAgICAgIHBhbmVsUmVmPXtidXR0b25TZXR0aW5nc1JlZn1cclxuICAgICAgICAgICAgYnV0dG9uPXthY3RpdmVTY3JlZW4uYnV0dG9ucy5maW5kKChidG4pID0+IGJ0bi5pZCA9PT0gc2VsZWN0ZWRCdXR0b25JZCkgfHwgYWN0aXZlU2NyZWVuLmJ1dHRvbnNbMF19XHJcbiAgICAgICAgICAgIHNjcmVlbnM9e2RyYWZ0LnNjcmVlbnN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dCkgPT4gdXBkYXRlQnV0dG9uKG5leHQuaWQgfHwgc2VsZWN0ZWRCdXR0b25JZCwgbmV4dCl9XHJcbiAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbihzZWxlY3RlZEJ1dHRvbklkKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQnV0dG9uSWQobnVsbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3BTZWxlY3Q9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKSB8fCBcInt9XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQ/LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQnV0dG9uSWQocGF5bG9hZC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICAgICAgICBpc0Ryb3BUYXJnZXRBY3RpdmU9e2Ryb3Bab25lSG92ZXIgPT09IFwic2V0dGluZ3NcIn1cclxuICAgICAgICAgICAgaXNEcmFnZ2luZz17aXNEcmFnZ2luZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2lzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtM3hsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke1xyXG4gICAgICAgICAgICAgIHBhbGV0dGVIb3ZlclxyXG4gICAgICAgICAgICAgICAgPyBcInNjYWxlLVsxLjAxXSByaW5nLTIgcmluZy1yb3NlLTQwMC82MCBzaGFkb3ctWzBfMTRweF81MHB4X3JnYmEoMjQ0LDYzLDk0LDAuMzUpXVwiXHJcbiAgICAgICAgICAgICAgICA6IFwicmluZy0xIHJpbmctd2hpdGUvNVwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIHJlZj17cGFsZXR0ZVJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblBhbGV0dGVcclxuICAgICAgICAgICAgICBvbkFkZD17KHR5cGUpID0+XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b25Gcm9tUGFsZXR0ZSh0eXBlLCBhY3RpdmVTY3JlZW4/LmJ1dHRvbnM/LlswXT8ucm93ID8/IDAsIGFjdGl2ZVNjcmVlbj8uYnV0dG9ucz8ubGVuZ3RoIHx8IDApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uUmVtb3ZlPXtyZW1vdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckNoYW5nZT17c2V0UGFsZXR0ZUhvdmVyfVxyXG4gICAgICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxyXG4gICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2Ryb3Bab25lSG92ZXIgPT09IFwicGFsZXR0ZVwifVxyXG4gICAgICAgICAgICAgIGlzRHJhZ2dpbmc9e2lzRHJhZ2dpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25QYWxldHRlID0gKHsgb25BZGQsIG9uUmVtb3ZlLCBvbkhvdmVyQ2hhbmdlLCBpc0VkaXRpbmcsIGlzSGlnaGxpZ2h0ZWQsIGlzRHJhZ2dpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0Ryb3BwaW5nLCBzZXRJc0Ryb3BwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkcm9wQWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICBjb25zdCBkcmFnUHJldmlld1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRQYWxldHRlRHJhZyA9IChpdGVtLCBldmVudCkgPT4ge1xyXG4gICAgaWYgKCFpc0VkaXRpbmcpIHJldHVybjtcclxuICAgIGlmICghZXZlbnQgfHwgKHR5cGVvZiBldmVudC5idXR0b24gPT09IFwibnVtYmVyXCIgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSkgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbj8uKCk7XHJcbiAgICBvbkhvdmVyQ2hhbmdlPy4odHJ1ZSk7XHJcbiAgICBjb25zdCBzdGFydGVyID0gd2luZG93Ll9fYm90TWVudUJlZ2luRHJhZztcclxuICAgIGlmICh0eXBlb2Ygc3RhcnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHN0YXJ0ZXIoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICBmcm9tUm93OiAwLFxyXG4gICAgICAgICAgZnJvbU9yZGVyOiAwLFxyXG4gICAgICAgICAgc291cmNlOiBcInBhbGV0dGVcIixcclxuICAgICAgICAgIHR5cGU6IGl0ZW0uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG4gICAgICAgIGV2ZW50LFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBnaG9zdCA9IGNyZWF0ZURyYWdQcmV2aWV3KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50KTtcclxuICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBnaG9zdDtcclxuICAgIGdob3N0Py51cGRhdGU/LihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgIGNvbnN0IGhhbmRsZU1vdmUgPSAoZSkgPT4gZ2hvc3Q/LnVwZGF0ZT8uKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgIGNvbnN0IGhhbmRsZVVwID0gKCkgPT4ge1xyXG4gICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgc2V0SXNEcm9wcGluZyhmYWxzZSk7XHJcbiAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgIGRlc3Ryb3lEcmFnUHJldmlldyhkcmFnUHJldmlld1JlZi5jdXJyZW50KTtcclxuICAgICAgZHJhZ1ByZXZpZXdSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBoYW5kbGVNb3ZlKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZVVwLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlSGlnaGxpZ2h0ID0gaXNEcm9wcGluZyB8fCBpc0hpZ2hsaWdodGVkIHx8IGlzRHJhZ2dpbmc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1lbWVyYWxkLTkwMC80MCB2aWEtaW5kaWdvLTkwMC81MCB0by1yb3NlLTkwMC80MCBwLTQgc2hhZG93LVswXzIwcHhfODBweF9yZ2JhKDAsMCwwLDAuMzUpXSBiYWNrZHJvcC1ibHVyLXNtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgIGFjdGl2ZUhpZ2hsaWdodCA/IFwicmluZy0yIHJpbmctcm9zZS00MDAvNzAgc2NhbGUtWzEuMDFdIGFuaW1hdGUtW21hZ25ldFB1bGxfMC45c19lYXNlLWluLW91dF9pbmZpbml0ZV1cIiA6IFwicmluZy0xIHJpbmctd2hpdGUvMTBcIlxyXG4gICAgICB9YH1cclxuICAgICAgb25Qb2ludGVyRW50ZXI9eygpID0+IHtcclxuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAoIWRyb3BBY3RpdmVSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgZHJvcEFjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIHNldElzRHJvcHBpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBvbkhvdmVyQ2hhbmdlPy4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgICBvblBvaW50ZXJNb3ZlPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkcm9wQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGRyb3BBY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICBzZXRJc0Ryb3BwaW5nKHRydWUpO1xyXG4gICAgICAgICAgb25Ib3ZlckNoYW5nZT8uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgb25Qb2ludGVyTGVhdmU9eygpID0+IHtcclxuICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0Ryb3BwaW5nKGZhbHNlKTtcclxuICAgICAgICBvbkhvdmVyQ2hhbmdlPy4oZmFsc2UpO1xyXG4gICAgICB9fVxyXG4gICAgICBvblBvaW50ZXJVcD17KCkgPT4ge1xyXG4gICAgICAgIGRyb3BBY3RpdmVSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghZHJvcEFjdGl2ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0SXNEcm9wcGluZyh0cnVlKTtcclxuICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/Lih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAgIG9uRHJhZ0VudGVyPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkcm9wQWN0aXZlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGRyb3BBY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICBzZXRJc0Ryb3BwaW5nKHRydWUpO1xyXG4gICAgICAgICAgb25Ib3ZlckNoYW5nZT8uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkcm9wQWN0aXZlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRJc0Ryb3BwaW5nKGZhbHNlKTtcclxuICAgICAgICBvbkhvdmVyQ2hhbmdlPy4oZmFsc2UpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vanNvblwiKSB8fCBcInt9XCIpO1xyXG4gICAgICAgICAgaWYgKHBheWxvYWQ/LmlkKSB7XHJcbiAgICAgICAgICAgIG9uUmVtb3ZlPy4ocGF5bG9hZC5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAvLyBpZ25vcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdHJveURyYWdQcmV2aWV3KGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICB9fVxyXG4gICAgICBvbkRyYWdMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgIGRyb3BBY3RpdmVSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLVswLjA4ZW1dIHRleHQtaW5kaWdvLTEwMFwiPtCV0YnQtSDQutC90L7Qv9C60Lg8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTMwMFwiPtCb0LjRgdGC0LDQudGC0LUg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L4g0Lgg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC50YLQtSDQvdCwINGN0LrRgNCw0L08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBsZzpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgIHtCT1RfQlVUVE9OX1RZUEVTLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtpc0VkaXRpbmcgPyB7IHRvdWNoQWN0aW9uOiBcIm5vbmVcIiB9IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZSkgPT4gc3RhcnRQYWxldHRlRHJhZyhpdGVtLCBlKX1cclxuICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgZGVzdHJveURyYWdQcmV2aWV3KGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIGRyYWdQcmV2aWV3UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzRHJvcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U/LihmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIG9uQWRkPy4oaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwIHJlbGF0aXZlIGZsZXggbWluLXctMCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy13aGl0ZS81IHB4LTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBob3Zlcjpib3JkZXItaW5kaWdvLTMwMCBob3ZlcjpzaGFkb3ctWzBfMThweF80MHB4X3JnYmEoOTksMTAyLDI0MSwwLjM1KV0gbGc6bWluLXctWzE0MHB4XSAke1xyXG4gICAgICAgICAgICAgIGlzRWRpdGluZyA/IFwiY3Vyc29yLWdyYWIgYWN0aXZlOmN1cnNvci1ncmFiYmluZ1wiIDogXCJjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2l0ZW0uZW1vamkgfHwgXCLinKhcIn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbndpbmRvdy5Cb3RNZW51QnVpbGRlciA9IEJvdE1lbnVCdWlsZGVyO1xyXG4iXSwibWFwcGluZ3MiOiI7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixDQUFBLEVBQUFILENBQUEsT0FBQWlCLENBQUEsSUFBQUYsQ0FBQSxLQUFBVixDQUFBLElBQUFMLENBQUEsR0FBQWdCLENBQUEsQ0FBQU8sTUFBQSxFQUFBdkIsQ0FBQSxVQUFBSyxDQUFBLEVBQUFFLENBQUEsR0FBQVMsQ0FBQSxDQUFBaEIsQ0FBQSxHQUFBcUIsQ0FBQSxHQUFBSCxDQUFBLENBQUFGLENBQUEsRUFBQVEsQ0FBQSxHQUFBakIsQ0FBQSxLQUFBTixDQUFBLFFBQUFJLENBQUEsR0FBQW1CLENBQUEsS0FBQXJCLENBQUEsTUFBQVEsQ0FBQSxHQUFBSixDQUFBLEVBQUFDLENBQUEsR0FBQUQsQ0FBQSxZQUFBQyxDQUFBLFdBQUFELENBQUEsTUFBQUEsQ0FBQSxNQUFBUixDQUFBLElBQUFRLENBQUEsT0FBQWMsQ0FBQSxNQUFBaEIsQ0FBQSxHQUFBSixDQUFBLFFBQUFvQixDQUFBLEdBQUFkLENBQUEsUUFBQUMsQ0FBQSxNQUFBVSxDQUFBLENBQUFDLENBQUEsR0FBQWhCLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFJLENBQUEsT0FBQWMsQ0FBQSxHQUFBRyxDQUFBLEtBQUFuQixDQUFBLEdBQUFKLENBQUEsUUFBQU0sQ0FBQSxNQUFBSixDQUFBLElBQUFBLENBQUEsR0FBQXFCLENBQUEsTUFBQWpCLENBQUEsTUFBQU4sQ0FBQSxFQUFBTSxDQUFBLE1BQUFKLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFxQixDQUFBLEVBQUFoQixDQUFBLGNBQUFILENBQUEsSUFBQUosQ0FBQSxhQUFBbUIsQ0FBQSxRQUFBSCxDQUFBLE9BQUFkLENBQUEscUJBQUFFLENBQUEsRUFBQVcsQ0FBQSxFQUFBUSxDQUFBLFFBQUFULENBQUEsWUFBQVUsU0FBQSx1Q0FBQVIsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBUSxDQUFBLEdBQUFoQixDQUFBLEdBQUFRLENBQUEsRUFBQUwsQ0FBQSxHQUFBYSxDQUFBLEdBQUF4QixDQUFBLEdBQUFRLENBQUEsT0FBQVQsQ0FBQSxHQUFBWSxDQUFBLE1BQUFNLENBQUEsS0FBQVYsQ0FBQSxLQUFBQyxDQUFBLEdBQUFBLENBQUEsUUFBQUEsQ0FBQSxTQUFBVSxDQUFBLENBQUFmLENBQUEsUUFBQWtCLENBQUEsQ0FBQWIsQ0FBQSxFQUFBRyxDQUFBLEtBQUFPLENBQUEsQ0FBQWYsQ0FBQSxHQUFBUSxDQUFBLEdBQUFPLENBQUEsQ0FBQUMsQ0FBQSxHQUFBUixDQUFBLGFBQUFJLENBQUEsTUFBQVIsQ0FBQSxRQUFBQyxDQUFBLEtBQUFILENBQUEsWUFBQUwsQ0FBQSxHQUFBTyxDQUFBLENBQUFGLENBQUEsV0FBQUwsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEVBQUFJLENBQUEsVUFBQWMsU0FBQSwyQ0FBQXpCLENBQUEsQ0FBQTJCLElBQUEsU0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxHQUFBWCxDQUFBLENBQUE0QixLQUFBLEVBQUFwQixDQUFBLFNBQUFBLENBQUEsb0JBQUFBLENBQUEsS0FBQVIsQ0FBQSxHQUFBTyxDQUFBLENBQUFzQixNQUFBLEtBQUE3QixDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFvQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBL0IsQ0FBQSxHQUFBWSxNQUFBLENBQUFvQixjQUFBLE1BQUF4QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW9CLDBCQUFBLENBQUF0QixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFxQixjQUFBLEdBQUFyQixNQUFBLENBQUFxQixjQUFBLENBQUFsQyxDQUFBLEVBQUFnQywwQkFBQSxLQUFBaEMsQ0FBQSxDQUFBbUMsU0FBQSxHQUFBSCwwQkFBQSxFQUFBakIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBK0IsaUJBQUEsQ0FBQXJCLFNBQUEsR0FBQXNCLDBCQUFBLEVBQUFqQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBb0IsMEJBQUEsR0FBQWpCLG1CQUFBLENBQUFpQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXJCLG1CQUFBLENBQUFpQiwwQkFBQSxFQUFBMUIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXlCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE5QixDQUFBLEVBQUErQixDQUFBLEVBQUF2QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEyQixjQUFBLFFBQUFoQyxDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQTBCLG1CQUFBekMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUEwQyxPQUFBLENBQUF4QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXVDLFVBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFlBQUEsR0FBQTNDLENBQUEsRUFBQTRDLFFBQUEsR0FBQTVDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBNkMsbUJBQUExQyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBbUMsT0FBQSxDQUFBQyxPQUFBLENBQUFwQyxDQUFBLEVBQUFxQyxJQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBNEMsa0JBQUE5QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQW1ELFNBQUEsYUFBQUosT0FBQSxXQUFBN0MsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQWdELEtBQUEsQ0FBQW5ELENBQUEsRUFBQUQsQ0FBQSxZQUFBcUQsTUFBQWpELENBQUEsSUFBQTBDLGtCQUFBLENBQUF6QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQStDLEtBQUEsRUFBQUMsTUFBQSxVQUFBbEQsQ0FBQSxjQUFBa0QsT0FBQWxELENBQUEsSUFBQTBDLGtCQUFBLENBQUF6QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQStDLEtBQUEsRUFBQUMsTUFBQSxXQUFBbEQsQ0FBQSxLQUFBaUQsS0FBQTtBQUFBLFNBQUFFLFNBQUEsV0FBQUEsUUFBQSxHQUFBMUMsTUFBQSxDQUFBMkMsTUFBQSxHQUFBM0MsTUFBQSxDQUFBMkMsTUFBQSxDQUFBakMsSUFBQSxlQUFBbkIsQ0FBQSxhQUFBSixDQUFBLE1BQUFBLENBQUEsR0FBQW1ELFNBQUEsQ0FBQTNCLE1BQUEsRUFBQXhCLENBQUEsVUFBQUMsQ0FBQSxHQUFBa0QsU0FBQSxDQUFBbkQsQ0FBQSxZQUFBRSxDQUFBLElBQUFELENBQUEsT0FBQXdELGNBQUEsQ0FBQTlCLElBQUEsQ0FBQTFCLENBQUEsRUFBQUMsQ0FBQSxNQUFBRSxDQUFBLENBQUFGLENBQUEsSUFBQUQsQ0FBQSxDQUFBQyxDQUFBLGFBQUFFLENBQUEsS0FBQW1ELFFBQUEsQ0FBQUgsS0FBQSxPQUFBRCxTQUFBO0FBQUEsU0FBQU8sZUFBQXhELENBQUEsRUFBQUYsQ0FBQSxXQUFBMkQsZUFBQSxDQUFBekQsQ0FBQSxLQUFBMEQscUJBQUEsQ0FBQTFELENBQUEsRUFBQUYsQ0FBQSxLQUFBNkQsMkJBQUEsQ0FBQTNELENBQUEsRUFBQUYsQ0FBQSxLQUFBOEQsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBcEMsU0FBQTtBQUFBLFNBQUFrQyxzQkFBQTFELENBQUEsRUFBQXVCLENBQUEsUUFBQXhCLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxLQUFBSCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQVMsQ0FBQSxPQUFBTCxDQUFBLE9BQUFWLENBQUEsaUJBQUFFLENBQUEsSUFBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUF6QixDQUFBLEdBQUE2RCxJQUFBLFFBQUF0QyxDQUFBLFFBQUFaLE1BQUEsQ0FBQVosQ0FBQSxNQUFBQSxDQUFBLFVBQUFlLENBQUEsdUJBQUFBLENBQUEsSUFBQWhCLENBQUEsR0FBQVEsQ0FBQSxDQUFBbUIsSUFBQSxDQUFBMUIsQ0FBQSxHQUFBMkIsSUFBQSxNQUFBUCxDQUFBLENBQUEyQyxJQUFBLENBQUFoRSxDQUFBLENBQUE2QixLQUFBLEdBQUFSLENBQUEsQ0FBQUcsTUFBQSxLQUFBQyxDQUFBLEdBQUFULENBQUEsaUJBQUFkLENBQUEsSUFBQUksQ0FBQSxPQUFBRixDQUFBLEdBQUFGLENBQUEseUJBQUFjLENBQUEsWUFBQWYsQ0FBQSxDQUFBNkIsTUFBQSxLQUFBbEIsQ0FBQSxHQUFBWCxDQUFBLENBQUE2QixNQUFBLElBQUFqQixNQUFBLENBQUFELENBQUEsTUFBQUEsQ0FBQSwyQkFBQU4sQ0FBQSxRQUFBRixDQUFBLGFBQUFpQixDQUFBO0FBQUEsU0FBQXNDLGdCQUFBekQsQ0FBQSxRQUFBK0QsS0FBQSxDQUFBQyxPQUFBLENBQUFoRSxDQUFBLFVBQUFBLENBQUE7QUFBQSxTQUFBaUUsUUFBQW5FLENBQUEsRUFBQUUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFZLE1BQUEsQ0FBQXVELElBQUEsQ0FBQXBFLENBQUEsT0FBQWEsTUFBQSxDQUFBd0QscUJBQUEsUUFBQS9ELENBQUEsR0FBQU8sTUFBQSxDQUFBd0QscUJBQUEsQ0FBQXJFLENBQUEsR0FBQUUsQ0FBQSxLQUFBSSxDQUFBLEdBQUFBLENBQUEsQ0FBQWdFLE1BQUEsV0FBQXBFLENBQUEsV0FBQVcsTUFBQSxDQUFBMEQsd0JBQUEsQ0FBQXZFLENBQUEsRUFBQUUsQ0FBQSxFQUFBeUMsVUFBQSxPQUFBMUMsQ0FBQSxDQUFBK0QsSUFBQSxDQUFBWixLQUFBLENBQUFuRCxDQUFBLEVBQUFLLENBQUEsWUFBQUwsQ0FBQTtBQUFBLFNBQUF1RSxjQUFBeEUsQ0FBQSxhQUFBRSxDQUFBLE1BQUFBLENBQUEsR0FBQWlELFNBQUEsQ0FBQTNCLE1BQUEsRUFBQXRCLENBQUEsVUFBQUQsQ0FBQSxXQUFBa0QsU0FBQSxDQUFBakQsQ0FBQSxJQUFBaUQsU0FBQSxDQUFBakQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFpRSxPQUFBLENBQUF0RCxNQUFBLENBQUFaLENBQUEsT0FBQXdFLE9BQUEsV0FBQXZFLENBQUEsSUFBQXdFLGVBQUEsQ0FBQTFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRCxDQUFBLENBQUFDLENBQUEsU0FBQVcsTUFBQSxDQUFBOEQseUJBQUEsR0FBQTlELE1BQUEsQ0FBQStELGdCQUFBLENBQUE1RSxDQUFBLEVBQUFhLE1BQUEsQ0FBQThELHlCQUFBLENBQUExRSxDQUFBLEtBQUFrRSxPQUFBLENBQUF0RCxNQUFBLENBQUFaLENBQUEsR0FBQXdFLE9BQUEsV0FBQXZFLENBQUEsSUFBQVcsTUFBQSxDQUFBMkIsY0FBQSxDQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFXLE1BQUEsQ0FBQTBELHdCQUFBLENBQUF0RSxDQUFBLEVBQUFDLENBQUEsaUJBQUFGLENBQUE7QUFBQSxTQUFBMEUsZ0JBQUExRSxDQUFBLEVBQUFFLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLEdBQUEyRSxjQUFBLENBQUEzRSxDQUFBLE1BQUFGLENBQUEsR0FBQWEsTUFBQSxDQUFBMkIsY0FBQSxDQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQixLQUFBLEVBQUE1QixDQUFBLEVBQUEwQyxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxVQUFBN0MsQ0FBQSxDQUFBRSxDQUFBLElBQUFELENBQUEsRUFBQUQsQ0FBQTtBQUFBLFNBQUE2RSxlQUFBNUUsQ0FBQSxRQUFBTyxDQUFBLEdBQUFzRSxZQUFBLENBQUE3RSxDQUFBLGdDQUFBOEUsT0FBQSxDQUFBdkUsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBc0UsYUFBQTdFLENBQUEsRUFBQUMsQ0FBQSxvQkFBQTZFLE9BQUEsQ0FBQTlFLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBRSxNQUFBLENBQUE2RSxXQUFBLGtCQUFBaEYsQ0FBQSxRQUFBUSxDQUFBLEdBQUFSLENBQUEsQ0FBQTJCLElBQUEsQ0FBQTFCLENBQUEsRUFBQUMsQ0FBQSxnQ0FBQTZFLE9BQUEsQ0FBQXZFLENBQUEsVUFBQUEsQ0FBQSxZQUFBa0IsU0FBQSx5RUFBQXhCLENBQUEsR0FBQStFLE1BQUEsR0FBQUMsTUFBQSxFQUFBakYsQ0FBQTtBQUFBLFNBQUFrRixtQkFBQWpGLENBQUEsV0FBQWtGLGtCQUFBLENBQUFsRixDQUFBLEtBQUFtRixnQkFBQSxDQUFBbkYsQ0FBQSxLQUFBMkQsMkJBQUEsQ0FBQTNELENBQUEsS0FBQW9GLGtCQUFBO0FBQUEsU0FBQUEsbUJBQUEsY0FBQTVELFNBQUE7QUFBQSxTQUFBbUMsNEJBQUEzRCxDQUFBLEVBQUFtQixDQUFBLFFBQUFuQixDQUFBLDJCQUFBQSxDQUFBLFNBQUFxRixpQkFBQSxDQUFBckYsQ0FBQSxFQUFBbUIsQ0FBQSxPQUFBcEIsQ0FBQSxNQUFBdUYsUUFBQSxDQUFBN0QsSUFBQSxDQUFBekIsQ0FBQSxFQUFBdUYsS0FBQSw2QkFBQXhGLENBQUEsSUFBQUMsQ0FBQSxDQUFBd0YsV0FBQSxLQUFBekYsQ0FBQSxHQUFBQyxDQUFBLENBQUF3RixXQUFBLENBQUFDLElBQUEsYUFBQTFGLENBQUEsY0FBQUEsQ0FBQSxHQUFBZ0UsS0FBQSxDQUFBMkIsSUFBQSxDQUFBMUYsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQTRGLElBQUEsQ0FBQTVGLENBQUEsSUFBQXNGLGlCQUFBLENBQUFyRixDQUFBLEVBQUFtQixDQUFBO0FBQUEsU0FBQWdFLGlCQUFBbkYsQ0FBQSw4QkFBQUMsTUFBQSxZQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxhQUFBSCxDQUFBLHVCQUFBK0QsS0FBQSxDQUFBMkIsSUFBQSxDQUFBMUYsQ0FBQTtBQUFBLFNBQUFrRixtQkFBQWxGLENBQUEsUUFBQStELEtBQUEsQ0FBQUMsT0FBQSxDQUFBaEUsQ0FBQSxVQUFBcUYsaUJBQUEsQ0FBQXJGLENBQUE7QUFBQSxTQUFBcUYsa0JBQUFyRixDQUFBLEVBQUFtQixDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBc0IsTUFBQSxNQUFBSCxDQUFBLEdBQUFuQixDQUFBLENBQUFzQixNQUFBLFlBQUF4QixDQUFBLE1BQUFJLENBQUEsR0FBQTZELEtBQUEsQ0FBQTVDLENBQUEsR0FBQXJCLENBQUEsR0FBQXFCLENBQUEsRUFBQXJCLENBQUEsSUFBQUksQ0FBQSxDQUFBSixDQUFBLElBQUFFLENBQUEsQ0FBQUYsQ0FBQSxVQUFBSSxDQUFBO0FBQUEsSUFBQTBGLE1BQUEsR0FBOERDLEtBQUs7RUFBM0RDLFFBQVEsR0FBQUYsTUFBQSxDQUFSRSxRQUFRO0VBQUVDLFNBQVMsR0FBQUgsTUFBQSxDQUFURyxTQUFTO0VBQUVDLE9BQU8sR0FBQUosTUFBQSxDQUFQSSxPQUFPO0VBQUVDLFdBQVcsR0FBQUwsTUFBQSxDQUFYSyxXQUFXO0VBQUVDLE1BQU0sR0FBQU4sTUFBQSxDQUFOTSxNQUFNO0FBRXpELElBQU1DLGdCQUFnQixHQUFHLENBQ3ZCO0VBQUVDLEVBQUUsRUFBRSxRQUFRO0VBQUVDLEtBQUssRUFBRSxrQkFBa0I7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBQyxFQUN4RDtFQUFFRixFQUFFLEVBQUUsTUFBTTtFQUFFQyxLQUFLLEVBQUUsWUFBWTtFQUFFQyxLQUFLLEVBQUU7QUFBTSxDQUFDLEVBQ2pEO0VBQUVGLEVBQUUsRUFBRSxhQUFhO0VBQUVDLEtBQUssRUFBRSxVQUFVO0VBQUVDLEtBQUssRUFBRTtBQUFLLENBQUMsRUFDckQ7RUFBRUYsRUFBRSxFQUFFLFNBQVM7RUFBRUMsS0FBSyxFQUFFLFNBQVM7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBQyxFQUNoRDtFQUFFRixFQUFFLEVBQUUsa0JBQWtCO0VBQUVDLEtBQUssRUFBRSxZQUFZO0VBQUVDLEtBQUssRUFBRTtBQUFLLENBQUMsRUFDNUQ7RUFBRUYsRUFBRSxFQUFFLFFBQVE7RUFBRUMsS0FBSyxFQUFFLGFBQWE7RUFBRUMsS0FBSyxFQUFFO0FBQUksQ0FBQyxDQUNuRDtBQUNELElBQU1DLG1CQUFtQixHQUFHLElBQUlDLEdBQUcsQ0FBQ0wsZ0JBQWdCLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0VBQUEsT0FBS0EsSUFBSSxDQUFDTixFQUFFO0FBQUEsRUFBQyxDQUFDO0FBRTVFLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLElBQUksRUFBRUMsVUFBVSxFQUFLO0VBQUEsSUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsZ0JBQUE7RUFDOUMsSUFBSSxDQUFDTixJQUFJLEVBQUUsT0FBTyxJQUFJO0VBQ3RCLElBQU1PLElBQUksR0FBR04sVUFBVSxhQUFWQSxVQUFVLGdCQUFBQyxxQkFBQSxHQUFWRCxVQUFVLENBQUVPLGFBQWEsY0FBQU4scUJBQUEsZ0JBQUFDLHNCQUFBLEdBQXpCRCxxQkFBQSxDQUEyQk8scUJBQXFCLGNBQUFOLHNCQUFBLHVCQUFoREEsc0JBQUEsQ0FBQXRGLElBQUEsQ0FBQXFGLHFCQUFtRCxDQUFDO0VBQ2pFLElBQU1RLEtBQUssR0FBR1YsSUFBSSxDQUFDVyxTQUFTLENBQUMsSUFBSSxDQUFDO0VBQ2xDLElBQU1DLEtBQUssR0FBRyxDQUFBTCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRUssS0FBSyxPQUFBUixxQkFBQSxHQUFJSixJQUFJLENBQUNTLHFCQUFxQixjQUFBTCxxQkFBQSxnQkFBQUEscUJBQUEsR0FBMUJBLHFCQUFBLENBQUF2RixJQUFBLENBQUFtRixJQUE2QixDQUFDLGNBQUFJLHFCQUFBLHVCQUE5QkEscUJBQUEsQ0FBZ0NRLEtBQUssS0FBSVosSUFBSSxDQUFDYSxXQUFXO0VBQ3RGLElBQU1DLE1BQU0sR0FBRyxDQUFBUCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRU8sTUFBTSxPQUFBVCxzQkFBQSxHQUFJTCxJQUFJLENBQUNTLHFCQUFxQixjQUFBSixzQkFBQSxnQkFBQUEsc0JBQUEsR0FBMUJBLHNCQUFBLENBQUF4RixJQUFBLENBQUFtRixJQUE2QixDQUFDLGNBQUFLLHNCQUFBLHVCQUE5QkEsc0JBQUEsQ0FBZ0NTLE1BQU0sS0FBSWQsSUFBSSxDQUFDZSxZQUFZO0VBQzFGLElBQUlILEtBQUssRUFBRUYsS0FBSyxDQUFDTSxLQUFLLENBQUNKLEtBQUssTUFBQUssTUFBQSxDQUFNTCxLQUFLLE9BQUk7RUFDM0MsSUFBSUUsTUFBTSxFQUFFSixLQUFLLENBQUNNLEtBQUssQ0FBQ0YsTUFBTSxNQUFBRyxNQUFBLENBQU1ILE1BQU0sT0FBSTtFQUM5Q0osS0FBSyxDQUFDTSxLQUFLLENBQUNFLFFBQVEsR0FBRyxPQUFPO0VBQzlCUixLQUFLLENBQUNNLEtBQUssQ0FBQ0csR0FBRyxHQUFHLEdBQUc7RUFDckJULEtBQUssQ0FBQ00sS0FBSyxDQUFDSSxJQUFJLEdBQUcsR0FBRztFQUN0QlYsS0FBSyxDQUFDTSxLQUFLLENBQUNLLFNBQVMsR0FBRyxxQ0FBcUM7RUFDN0RYLEtBQUssQ0FBQ00sS0FBSyxDQUFDTSxhQUFhLEdBQUcsTUFBTTtFQUNsQ1osS0FBSyxDQUFDTSxLQUFLLENBQUNPLFVBQVUsR0FBRyxNQUFNO0VBQy9CYixLQUFLLENBQUNNLEtBQUssQ0FBQ1EsVUFBVSxHQUFHLFdBQVc7RUFDcENkLEtBQUssQ0FBQ00sS0FBSyxDQUFDUyxTQUFTLEdBQUcsc0NBQXNDO0VBQzlEZixLQUFLLENBQUNNLEtBQUssQ0FBQ1UsTUFBTSxHQUFHLE1BQU07RUFDM0JoQixLQUFLLENBQUNNLEtBQUssQ0FBQ1csT0FBTyxHQUFHLE1BQU07RUFDNUIsQ0FBQXJCLGdCQUFBLEdBQUFJLEtBQUssQ0FBQ2tCLFNBQVMsY0FBQXRCLGdCQUFBLGVBQWZBLGdCQUFBLENBQWlCdUIsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUNuQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ3RCLEtBQUssQ0FBQztFQUNoQyxJQUFNdUIsT0FBTyxHQUFHMUIsSUFBSSxHQUFHTixVQUFVLENBQUNpQyxPQUFPLEdBQUczQixJQUFJLENBQUNhLElBQUksR0FBR1YsS0FBSyxDQUFDRyxXQUFXLEdBQUcsQ0FBQztFQUM3RSxJQUFNc0IsT0FBTyxHQUFHNUIsSUFBSSxHQUFHTixVQUFVLENBQUNtQyxPQUFPLEdBQUc3QixJQUFJLENBQUNZLEdBQUcsR0FBR1QsS0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztFQUM3RSxPQUFPO0lBQ0xMLEtBQUssRUFBTEEsS0FBSztJQUNMdUIsT0FBTyxFQUFQQSxPQUFPO0lBQ1BFLE9BQU8sRUFBUEEsT0FBTztJQUNQRSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR0MsQ0FBQyxFQUFFbEksQ0FBQyxFQUFLO01BQ2hCc0csS0FBSyxDQUFDTSxLQUFLLENBQUNLLFNBQVMsZ0JBQUFKLE1BQUEsQ0FBZ0JxQixDQUFDLEdBQUdMLE9BQU8sVUFBQWhCLE1BQUEsQ0FBTzdHLENBQUMsR0FBRytILE9BQU8sUUFBSztNQUN2RXpCLEtBQUssQ0FBQ00sS0FBSyxDQUFDdUIsVUFBVSxHQUFHLFNBQVM7SUFDcEMsQ0FBQztJQUNEQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQSxFQUFRO01BQ2IsSUFBSTlCLEtBQUssQ0FBQytCLFVBQVUsRUFBRS9CLEtBQUssQ0FBQytCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDaEMsS0FBSyxDQUFDO0lBQzNEO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxJQUFNaUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSWpDLEtBQUssRUFBSztFQUFBLElBQUFrQyxjQUFBO0VBQ3BDLElBQUksQ0FBQ2xDLEtBQUssRUFBRTtFQUNaLENBQUFrQyxjQUFBLEdBQUFsQyxLQUFLLENBQUM4QixPQUFPLGNBQUFJLGNBQUEsZUFBYkEsY0FBQSxDQUFBL0gsSUFBQSxDQUFBNkYsS0FBZ0IsQ0FBQztFQUNqQixJQUFNVixJQUFJLEdBQUdVLEtBQUssQ0FBQ0EsS0FBSyxJQUFJQSxLQUFLO0VBQ2pDLElBQUlWLElBQUksYUFBSkEsSUFBSSxlQUFKQSxJQUFJLENBQUV5QyxVQUFVLEVBQUV6QyxJQUFJLENBQUN5QyxVQUFVLENBQUNDLFdBQVcsQ0FBQzFDLElBQUksQ0FBQztBQUN6RCxDQUFDO0FBRUQsSUFBTTZDLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBO0VBQUEsSUFBSTlILEtBQUssR0FBQXNCLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQXlHLFNBQUEsR0FBQXpHLFNBQUEsTUFBRyxFQUFFO0VBQUEsT0FDNUJ0QixLQUFLLENBQ0YyRCxRQUFRLENBQUMsQ0FBQyxDQUNWcUUsSUFBSSxDQUFDLENBQUMsQ0FDTkMsV0FBVyxDQUFDLENBQUMsQ0FDYkMsT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FDN0JBLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQ3JCLE1BQU07QUFBQTtBQUViLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBO0VBQUEsSUFBSUMsT0FBTyxHQUFBOUcsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLEVBQUU7RUFBQSxPQUMvQmdDLGtCQUFBLENBQUk4RSxPQUFPLEVBQUVDLElBQUksQ0FBQyxVQUFDN0ksQ0FBQyxFQUFFOEksQ0FBQztJQUFBLElBQUFDLE1BQUEsRUFBQUMsTUFBQSxFQUFBQyxRQUFBLEVBQUFDLFFBQUE7SUFBQSxPQUFLLEVBQUFILE1BQUEsR0FBQy9JLENBQUMsQ0FBQ21KLEdBQUcsY0FBQUosTUFBQSxjQUFBQSxNQUFBLEdBQUksQ0FBQyxNQUFBQyxNQUFBLEdBQUtGLENBQUMsQ0FBQ0ssR0FBRyxjQUFBSCxNQUFBLGNBQUFBLE1BQUEsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFBQyxRQUFBLEdBQUNqSixDQUFDLENBQUNvSixLQUFLLGNBQUFILFFBQUEsY0FBQUEsUUFBQSxHQUFJLENBQUMsTUFBQUMsUUFBQSxHQUFLSixDQUFDLENBQUNNLEtBQUssY0FBQUYsUUFBQSxjQUFBQSxRQUFBLEdBQUksQ0FBQyxDQUFDO0VBQUEsRUFBQztBQUFBO0FBRTdGLElBQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBcUI7RUFBQSxJQUFqQlQsT0FBTyxHQUFBOUcsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLEVBQUU7RUFDeEMsSUFBTXdILE1BQU0sR0FBR1gsV0FBVyxDQUFBN0Usa0JBQUEsQ0FBSzhFLE9BQU8sQ0FBQyxDQUFDO0VBQ3hDLElBQUlXLFVBQVUsR0FBRyxJQUFJO0VBQ3JCLElBQUlDLGFBQWEsR0FBRyxDQUFDLENBQUM7RUFDdEIsSUFBSUosS0FBSyxHQUFHLENBQUM7RUFDYixPQUFPRSxNQUFNLENBQUNoRSxHQUFHLENBQUMsVUFBQ21FLEdBQUcsRUFBSztJQUN6QixJQUFJRixVQUFVLEtBQUssSUFBSSxJQUFJRSxHQUFHLENBQUNOLEdBQUcsS0FBS0ksVUFBVSxFQUFFO01BQ2pEQSxVQUFVLEdBQUdFLEdBQUcsQ0FBQ04sR0FBRztNQUNwQkssYUFBYSxJQUFJLENBQUM7TUFDbEJKLEtBQUssR0FBRyxDQUFDO0lBQ1g7SUFDQSxJQUFNMUcsSUFBSSxHQUFBUyxhQUFBLENBQUFBLGFBQUEsS0FBUXNHLEdBQUc7TUFBRU4sR0FBRyxFQUFFSyxhQUFhO01BQUVKLEtBQUssRUFBTEE7SUFBSyxFQUFFO0lBQ2xEQSxLQUFLLElBQUksQ0FBQztJQUNWLE9BQU8xRyxJQUFJO0VBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUdELElBQU1nSCxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQTJFO0VBQUEsSUFBdkVkLE9BQU8sR0FBQTlHLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQXlHLFNBQUEsR0FBQXpHLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFBRTZILE1BQU0sR0FBQTdILFNBQUEsQ0FBQTNCLE1BQUEsT0FBQTJCLFNBQUEsTUFBQXlHLFNBQUE7RUFBQSxJQUFFcUIsU0FBUyxHQUFBOUgsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLENBQUM7RUFBQSxJQUFFK0gsV0FBVyxHQUFBL0gsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLENBQUM7RUFBQSxJQUFFZ0ksT0FBTyxHQUFBaEksU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLENBQUMsQ0FBQztFQUNoRyxJQUFJLENBQUM2SCxNQUFNLEVBQUUsT0FBT2YsT0FBTztFQUMzQixJQUFBbUIscUJBQUEsR0FBaUNELE9BQU8sQ0FBaENFLFlBQVk7SUFBWkEsWUFBWSxHQUFBRCxxQkFBQSxjQUFHLEtBQUssR0FBQUEscUJBQUE7RUFDNUIsSUFBTUUsUUFBUSxHQUFHckIsT0FBTyxDQUFDM0YsTUFBTSxDQUFDLFVBQUN3RyxHQUFHO0lBQUEsT0FBS0EsR0FBRyxDQUFDeEUsRUFBRSxLQUFLMEUsTUFBTSxDQUFDMUUsRUFBRTtFQUFBLEVBQUM7RUFDOUQsSUFBTWlGLE9BQU8sR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztFQUN6QnhCLFdBQVcsQ0FBQ3NCLFFBQVEsQ0FBQyxDQUFDN0csT0FBTyxDQUFDLFVBQUNxRyxHQUFHLEVBQUs7SUFDckMsSUFBTVcsS0FBSyxHQUFHdkcsTUFBTSxDQUFDd0csUUFBUSxDQUFDWixHQUFHLENBQUNOLEdBQUcsQ0FBQyxHQUFHdEYsTUFBTSxDQUFDNEYsR0FBRyxDQUFDTixHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzVELElBQUksQ0FBQ2UsT0FBTyxDQUFDSSxHQUFHLENBQUNGLEtBQUssQ0FBQyxFQUFFRixPQUFPLENBQUNLLEdBQUcsQ0FBQ0gsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUMvQ0YsT0FBTyxDQUFDTSxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDekgsSUFBSSxDQUFDOEcsR0FBRyxDQUFDO0VBQzlCLENBQUMsQ0FBQztFQUVGLElBQUlnQixVQUFVLEdBQUc3SCxLQUFLLENBQUMyQixJQUFJLENBQUMyRixPQUFPLENBQUNRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzdCLElBQUksQ0FBQyxVQUFDN0ksQ0FBQyxFQUFFOEksQ0FBQztJQUFBLE9BQUs5SSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc4SSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUMxRSxJQUFJa0IsWUFBWSxFQUFFO0lBQ2hCUyxVQUFVLEdBQUdBLFVBQVUsQ0FDcEJuRixHQUFHLENBQUMsVUFBQXFGLElBQUE7TUFBQSxJQUFBQyxLQUFBLEdBQUF2SSxjQUFBLENBQUFzSSxJQUFBO1FBQUVQLEtBQUssR0FBQVEsS0FBQTtRQUFFQyxJQUFJLEdBQUFELEtBQUE7TUFBQSxPQUFNLENBQUNSLEtBQUssSUFBSVIsU0FBUyxHQUFHUSxLQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFLLEVBQUVTLElBQUksQ0FBQztJQUFBLEVBQUMsQ0FDdEVoQyxJQUFJLENBQUMsVUFBQzdJLENBQUMsRUFBRThJLENBQUM7TUFBQSxPQUFLOUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHOEksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFDaEM7RUFFQSxJQUFNZ0MsSUFBSSxHQUFHLElBQUlYLEdBQUcsQ0FBQ00sVUFBVSxDQUFDO0VBQ2hDLElBQU1NLE9BQU8sR0FBR0QsSUFBSSxDQUFDTixHQUFHLENBQUNaLFNBQVMsQ0FBQyxHQUFBOUYsa0JBQUEsQ0FBT2dILElBQUksQ0FBQ04sR0FBRyxDQUFDWixTQUFTLENBQUMsSUFBSSxFQUFFO0VBQ25FLElBQU1vQixXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ3RCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRWtCLE9BQU8sQ0FBQzVLLE1BQU0sQ0FBQztFQUN0RTRLLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDSixXQUFXLEVBQUUsQ0FBQyxFQUFBN0gsYUFBQSxDQUFBQSxhQUFBLEtBQU93RyxNQUFNO0lBQUVSLEdBQUcsRUFBRVMsU0FBUztJQUFFUixLQUFLLEVBQUU0QjtFQUFXLEVBQUUsQ0FBQztFQUNqRkYsSUFBSSxDQUFDUCxHQUFHLENBQUNYLFNBQVMsRUFBRW1CLE9BQU8sQ0FBQztFQUU1QixJQUFNTSxPQUFPLEdBQUcsRUFBRTtFQUNsQnpJLEtBQUssQ0FBQzJCLElBQUksQ0FBQ3VHLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUN2QjdCLElBQUksQ0FBQyxVQUFDN0ksQ0FBQyxFQUFFOEksQ0FBQztJQUFBLE9BQUs5SSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc4SSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUMzQjFGLE9BQU8sQ0FBQyxVQUFBa0ksS0FBQSxFQUFtQjtJQUFBLElBQUFDLEtBQUEsR0FBQWxKLGNBQUEsQ0FBQWlKLEtBQUE7TUFBakJsQixLQUFLLEdBQUFtQixLQUFBO01BQUVWLElBQUksR0FBQVUsS0FBQTtJQUNwQjVDLFdBQVcsQ0FBQ2tDLElBQUksQ0FBQyxDQUFDekgsT0FBTyxDQUFDLFVBQUNxRyxHQUFHLEVBQUUrQixHQUFHLEVBQUs7TUFDdENILE9BQU8sQ0FBQzFJLElBQUksQ0FBQVEsYUFBQSxDQUFBQSxhQUFBLEtBQU1zRyxHQUFHO1FBQUVOLEdBQUcsRUFBRWlCLEtBQUs7UUFBRWhCLEtBQUssRUFBRW9DO01BQUcsRUFBRSxDQUFDO0lBQ2xELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUNKLE9BQU9uQyxvQkFBb0IsQ0FBQ2dDLE9BQU8sQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJaEMsR0FBRyxFQUFtQztFQUFBLElBQUFpQyxZQUFBO0VBQUEsSUFBakNGLEdBQUcsR0FBQTFKLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQXlHLFNBQUEsR0FBQXpHLFNBQUEsTUFBRyxDQUFDO0VBQUEsSUFBRTZKLFFBQVEsR0FBQTdKLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQXlHLFNBQUEsR0FBQXpHLFNBQUEsTUFBRyxRQUFRO0VBQ3hELElBQU1tRCxFQUFFLEdBQUdxRCxVQUFVLENBQUMsQ0FBQW1CLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFeEUsRUFBRSxZQUFBeUIsTUFBQSxDQUFXaUYsUUFBUSxPQUFBakYsTUFBQSxDQUFJOEUsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFDO0VBQzlELElBQU10RyxLQUFLLEdBQUcsQ0FBQyxDQUFBdUUsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUV2RSxLQUFLLE1BQUl1RSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRW1DLElBQUksNkNBQUFsRixNQUFBLENBQWM4RSxHQUFHLEdBQUcsQ0FBQyxDQUFFLEVBQUVySCxRQUFRLENBQUMsQ0FBQztFQUN6RSxJQUFNMEgsSUFBSSxHQUFHekcsbUJBQW1CLENBQUNrRixHQUFHLENBQUNiLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFb0MsSUFBSSxDQUFDLEdBQzNDcEMsR0FBRyxDQUFDb0MsSUFBSSxHQUNSLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3JDLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFb0MsSUFBSSxDQUFDLEdBQ3RELE1BQU0sR0FDTixRQUFRO0VBQ2QsSUFBTUUsY0FBYyxHQUFHLENBQUF0QyxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRXNDLGNBQWMsTUFBSXRDLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFdUMsTUFBTSxLQUFJLElBQUk7RUFDakUsSUFBTUMsT0FBTyxJQUFBUCxZQUFBLEdBQUdqQyxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRXdDLE9BQU8sY0FBQVAsWUFBQSxjQUFBQSxZQUFBLEdBQUksRUFBRTtFQUNsQyxJQUFNdkMsR0FBRyxHQUFHdEYsTUFBTSxDQUFDd0csUUFBUSxDQUFDWixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRU4sR0FBRyxDQUFDLEdBQUd0RixNQUFNLENBQUM0RixHQUFHLENBQUNOLEdBQUcsQ0FBQyxHQUFHOEIsSUFBSSxDQUFDaUIsS0FBSyxDQUFDVixHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQzdFLElBQU1wQyxLQUFLLEdBQUd2RixNQUFNLENBQUN3RyxRQUFRLENBQUNaLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFTCxLQUFLLENBQUMsR0FBR3ZGLE1BQU0sQ0FBQzRGLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLEdBQUdvQyxHQUFHO0VBQ25FLE9BQU87SUFBRXZHLEVBQUUsRUFBRkEsRUFBRTtJQUFFQyxLQUFLLEVBQUxBLEtBQUs7SUFBRTJHLElBQUksRUFBSkEsSUFBSTtJQUFFRSxjQUFjLEVBQWRBLGNBQWM7SUFBRUUsT0FBTyxFQUFQQSxPQUFPO0lBQUU5QyxHQUFHLEVBQUhBLEdBQUc7SUFBRUMsS0FBSyxFQUFMQTtFQUFNLENBQUM7QUFDakUsQ0FBQztBQUVELElBQU0rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLE1BQU0sRUFBYztFQUFBLElBQUFDLEtBQUEsRUFBQUMsZUFBQTtFQUFBLElBQVpkLEdBQUcsR0FBQTFKLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQXlHLFNBQUEsR0FBQXpHLFNBQUEsTUFBRyxDQUFDO0VBQ3RDLElBQU1tRCxFQUFFLEdBQUdxRCxVQUFVLENBQUMsQ0FBQThELE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFbkgsRUFBRSxlQUFBeUIsTUFBQSxDQUFjOEUsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFDO0VBQ3hELElBQU1lLEtBQUssR0FBRyxDQUFDLENBQUFILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFRyxLQUFLLE1BQUlILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFOUgsSUFBSSx1Q0FBQW9DLE1BQUEsQ0FBYThFLEdBQUcsR0FBRyxDQUFDLENBQUUsRUFBRXJILFFBQVEsQ0FBQyxDQUFDO0VBQzlFLElBQU1xSSxPQUFPLElBQUFILEtBQUEsSUFBQUMsZUFBQSxHQUFHRixNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUksT0FBTyxjQUFBRixlQUFBLGNBQUFBLGVBQUEsR0FBSUYsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVSLElBQUksY0FBQVMsS0FBQSxjQUFBQSxLQUFBLEdBQUksRUFBRTtFQUNyRCxJQUFNSSxRQUFRLEdBQUcsQ0FBQUwsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVLLFFBQVEsTUFBSUwsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVNLEtBQUssS0FBSSxFQUFFO0VBQ3hELElBQU05RCxPQUFPLEdBQUdoRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3VKLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFeEQsT0FBTyxDQUFDLEdBQzFDUyxvQkFBb0IsQ0FBQytDLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQ3RELEdBQUcsQ0FBQyxVQUFDbUUsR0FBRyxFQUFFdEssQ0FBQztJQUFBLE9BQUtzTSxlQUFlLENBQUNoQyxHQUFHLEVBQUV0SyxDQUFDLEVBQUU4RixFQUFFLENBQUM7RUFBQSxFQUFDLENBQUMsR0FDakYsRUFBRTtFQUNOLE9BQU87SUFBRUEsRUFBRSxFQUFGQSxFQUFFO0lBQUVzSCxLQUFLLEVBQUxBLEtBQUs7SUFBRUMsT0FBTyxFQUFQQSxPQUFPO0lBQUVDLFFBQVEsRUFBUkEsUUFBUTtJQUFFN0QsT0FBTyxFQUFQQTtFQUFRLENBQUM7QUFDbEQsQ0FBQztBQUVELElBQU0rRCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxJQUFJLEVBQUs7RUFDbkMsSUFBTUMsT0FBTyxHQUFHakssS0FBSyxDQUFDQyxPQUFPLENBQUMrSixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRUMsT0FBTyxDQUFDLElBQUlELElBQUksQ0FBQ0MsT0FBTyxDQUFDMU0sTUFBTSxHQUMvRHlNLElBQUksQ0FBQ0MsT0FBTyxDQUFDdkgsR0FBRyxDQUFDLFVBQUN3SCxHQUFHLEVBQUV0QixHQUFHO0lBQUEsT0FBS1csZUFBZSxDQUFDVyxHQUFHLEVBQUV0QixHQUFHLENBQUM7RUFBQSxFQUFDLEdBQ3pELENBQUNXLGVBQWUsQ0FBQztJQUFFbEgsRUFBRSxFQUFFLE1BQU07SUFBRXNILEtBQUssRUFBRSxjQUFjO0lBQUVDLE9BQU8sRUFBRSxtQkFBbUI7SUFBRTVELE9BQU8sRUFBRTtFQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUMxRyxJQUFNbUUsV0FBVyxHQUFHbkssS0FBSyxDQUFDQyxPQUFPLENBQUMrSixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRUcsV0FBVyxDQUFDLElBQUlILElBQUksQ0FBQ0csV0FBVyxDQUFDNU0sTUFBTSxHQUFHeU0sSUFBSSxDQUFDRyxXQUFXLEdBQUcvSCxnQkFBZ0I7RUFDckgsSUFBTWdJLE9BQU8sR0FBR25KLE1BQU0sQ0FBQytJLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFSSxPQUFPLENBQUMsSUFBSSxDQUFDO0VBQzFDLElBQU1DLFNBQVMsR0FBRyxDQUFBTCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRUssU0FBUyxLQUFJLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQzdELE9BQU87SUFBRUgsT0FBTyxFQUFQQSxPQUFPO0lBQUVDLFNBQVMsRUFBVEEsU0FBUztJQUFFSixPQUFPLEVBQVBBLE9BQU87SUFBRUUsV0FBVyxFQUFYQTtFQUFZLENBQUM7QUFDckQsQ0FBQztBQUVELElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLElBQUk7RUFBQSxPQUM3QixJQUFJM0wsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRTJMLE1BQU0sRUFBSztJQUMvQixJQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxDQUFDLENBQUM7SUFDL0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHO01BQUEsT0FBTTlMLE9BQU8sQ0FBQzRMLE1BQU0sQ0FBQ0csTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUFBO0lBQ2xESCxNQUFNLENBQUNJLE9BQU8sR0FBRyxVQUFDQyxLQUFLO01BQUEsT0FBS04sTUFBTSxDQUFDTSxLQUFLLENBQUM7SUFBQTtJQUN6Q0wsTUFBTSxDQUFDTSxhQUFhLENBQUNSLElBQUksQ0FBQztFQUM1QixDQUFDLENBQUM7QUFBQTtBQUVKLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQUMsS0FBQSxFQUFpQjtFQUFBLElBQVhsQyxJQUFJLEdBQUFrQyxLQUFBLENBQUpsQyxJQUFJO0VBQzdCLElBQU10RyxJQUFJLEdBQUdQLGdCQUFnQixDQUFDZ0osSUFBSSxDQUFDLFVBQUNDLEtBQUs7SUFBQSxPQUFLQSxLQUFLLENBQUNoSixFQUFFLEtBQUs0RyxJQUFJO0VBQUEsRUFBQztFQUNoRSxJQUFJLENBQUN0RyxJQUFJLEVBQUUsT0FBTyxJQUFJO0VBQ3RCLG9CQUNFYixLQUFBLENBQUF3SixhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUE0SixnQkFDMUt6SixLQUFBLENBQUF3SixhQUFBLGVBQU8zSSxJQUFJLENBQUNKLEtBQUssSUFBSSxHQUFVLENBQUMsZUFDaENULEtBQUEsQ0FBQXdKLGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQWEsR0FBRTVJLElBQUksQ0FBQ0wsS0FBWSxDQUM1QyxDQUFDO0FBRVgsQ0FBQztBQUVELElBQU1rSixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLEtBQUEsRUFVZjtFQUFBLElBVEoxRSxNQUFNLEdBQUEwRSxLQUFBLENBQU4xRSxNQUFNO0lBQ05rRCxPQUFPLEdBQUF3QixLQUFBLENBQVB4QixPQUFPO0lBQ1B5QixTQUFRLEdBQUFELEtBQUEsQ0FBUkMsUUFBUTtJQUNSQyxRQUFRLEdBQUFGLEtBQUEsQ0FBUkUsUUFBUTtJQUNSQyxZQUFZLEdBQUFILEtBQUEsQ0FBWkcsWUFBWTtJQUNaQyxTQUFTLEdBQUFKLEtBQUEsQ0FBVEksU0FBUztJQUNUQyxrQkFBa0IsR0FBQUwsS0FBQSxDQUFsQkssa0JBQWtCO0lBQ2xCQyxVQUFVLEdBQUFOLEtBQUEsQ0FBVk0sVUFBVTtJQUFBQyxjQUFBLEdBQUFQLEtBQUEsQ0FDVlEsUUFBUTtJQUFSQSxRQUFRLEdBQUFELGNBQUEsY0FBRyxJQUFJLEdBQUFBLGNBQUE7RUFFZixJQUFBRSxTQUFBLEdBQXdDbkssUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBb0ssVUFBQSxHQUFBMU0sY0FBQSxDQUFBeU0sU0FBQTtJQUFoREUsWUFBWSxHQUFBRCxVQUFBO0lBQUVFLGVBQWUsR0FBQUYsVUFBQTtFQUNwQyxJQUFNRyxhQUFhLEdBQUduSyxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQ25DLElBQU1vSyxZQUFZLEdBQUc7SUFDbkJDLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFHelEsQ0FBQyxFQUFLO01BQ2pCQSxDQUFDLENBQUMwUSxjQUFjLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNILGFBQWEsQ0FBQ0ksT0FBTyxFQUFFO1FBQzFCSixhQUFhLENBQUNJLE9BQU8sR0FBRyxJQUFJO1FBQzVCTCxlQUFlLENBQUMsSUFBSSxDQUFDO01BQ3ZCO0lBQ0YsQ0FBQztJQUNETSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRzVRLENBQUMsRUFBSztNQUNiNlAsWUFBWSxhQUFaQSxZQUFZLGVBQVpBLFlBQVksQ0FBRzdQLENBQUMsQ0FBQztNQUNqQixJQUFJdVEsYUFBYSxDQUFDSSxPQUFPLEVBQUU7UUFDekJKLGFBQWEsQ0FBQ0ksT0FBTyxHQUFHLEtBQUs7UUFDN0JMLGVBQWUsQ0FBQyxLQUFLLENBQUM7TUFDeEI7SUFDRixDQUFDO0lBQ0RPLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFBLEVBQVE7TUFDakIsSUFBSU4sYUFBYSxDQUFDSSxPQUFPLEVBQUU7UUFDekJKLGFBQWEsQ0FBQ0ksT0FBTyxHQUFHLEtBQUs7UUFDN0JMLGVBQWUsQ0FBQyxLQUFLLENBQUM7TUFDeEI7SUFDRjtFQUNGLENBQUM7RUFFRCxJQUFJLENBQUN0RixNQUFNLEVBQUU7SUFDWCxvQkFDRWpGLEtBQUEsQ0FBQXdKLGFBQUEsUUFBQWhNLFFBQUEsS0FDTWlOLFlBQVk7TUFDaEJoQixTQUFTLHVJQUFBekgsTUFBQSxDQUNQc0ksWUFBWSxHQUFHLG1GQUFtRixHQUFHLEVBQUU7SUFDdEcsaUJBRUh0SyxLQUFBLENBQUF3SixhQUFBO01BQUdDLFNBQVMsRUFBQztJQUFtQyxHQUFDLDJRQUFxRCxDQUFDLGVBQ3ZHekosS0FBQSxDQUFBd0osYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBd0IsR0FBQyw2TUFBeUMsQ0FDNUUsQ0FBQztFQUVWO0VBRUEsb0JBQ0V6SixLQUFBLENBQUF3SixhQUFBLFFBQUFoTSxRQUFBLEtBQ01pTixZQUFZO0lBQ2hCTSxHQUFHLEVBQUVaLFFBQVM7SUFDZFYsU0FBUyw4TEFBQXpILE1BQUEsQ0FDUHNJLFlBQVksR0FBRyxtRkFBbUYsR0FBRyxFQUFFLE9BQUF0SSxNQUFBLENBRXZHaUksVUFBVSxHQUNOLHVGQUF1RixHQUN2RixFQUFFLE9BQUFqSSxNQUFBLENBQ0pnSSxrQkFBa0IsR0FBRyx5Q0FBeUMsR0FBRyxFQUFFO0VBQUcsSUFFekVDLFVBQVUsaUJBQ1RqSyxLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUE2RyxnQkFDMUh6SixLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUErSCxnQkFDNUl6SixLQUFBLENBQUF3SixhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFTLEdBQUMsY0FBUSxDQUFDLGVBQ25DekosS0FBQSxDQUFBd0osYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBUyxHQUFDLG9CQUFTLENBQ2hDLENBQ0YsQ0FDTixlQUNEekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBNEwsQ0FBRSxDQUFDLGVBQzlNekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBbUMsZ0JBQ2hEekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBeUMsZ0JBQ3REekosS0FBQSxDQUFBd0osYUFBQSwyQkFDRXhKLEtBQUEsQ0FBQXdKLGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQW9ELEdBQUMsNkZBQW1CLENBQUMsZUFDdEZ6SixLQUFBLENBQUF3SixhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFvQyxHQUFFeEUsTUFBTSxDQUFDekUsS0FBUyxDQUNoRSxDQUFDLGVBQ05SLEtBQUEsQ0FBQXdKLGFBQUEsQ0FBQ0osZUFBZTtJQUFDakMsSUFBSSxFQUFFbEMsTUFBTSxDQUFDa0M7RUFBSyxDQUFFLENBQ2xDLENBQUMsZUFDTm5ILEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQTZCLGdCQUMxQ3pKLEtBQUEsQ0FBQXdKLGFBQUEsMkJBQ0V4SixLQUFBLENBQUF3SixhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF3QixHQUFDLGdDQUFZLENBQUMsZUFDdkR6SixLQUFBLENBQUF3SixhQUFBO0lBQ0UxTixLQUFLLEVBQUVtSixNQUFNLENBQUN6RSxLQUFNO0lBQ3BCb0osUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUczUCxDQUFDO01BQUEsT0FBSzJQLFNBQVEsQ0FBQW5MLGFBQUEsQ0FBQUEsYUFBQSxLQUFNd0csTUFBTTtRQUFFekUsS0FBSyxFQUFFdkcsQ0FBQyxDQUFDcU4sTUFBTSxDQUFDeEw7TUFBSyxFQUFFLENBQUM7SUFBQSxDQUFDO0lBQ2hFa1AsUUFBUSxFQUFFLENBQUNqQixTQUFVO0lBQ3JCTixTQUFTLEVBQUM7RUFBa0ssQ0FDN0ssQ0FDRSxDQUFDLGVBQ056SixLQUFBLENBQUF3SixhQUFBLDJCQUNFeEosS0FBQSxDQUFBd0osYUFBQTtJQUFPQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyxvQkFBVSxDQUFDLGVBQ3JEekosS0FBQSxDQUFBd0osYUFBQTtJQUNFMU4sS0FBSyxFQUFFbUosTUFBTSxDQUFDa0MsSUFBSztJQUNuQnlDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHM1AsQ0FBQztNQUFBLE9BQUsyUCxTQUFRLENBQUFuTCxhQUFBLENBQUFBLGFBQUEsS0FBTXdHLE1BQU07UUFBRWtDLElBQUksRUFBRWxOLENBQUMsQ0FBQ3FOLE1BQU0sQ0FBQ3hMO01BQUssRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUMvRGtQLFFBQVEsRUFBRSxDQUFDakIsU0FBVTtJQUNyQk4sU0FBUyxFQUFDO0VBQWtMLEdBRTNMbkosZ0JBQWdCLENBQUNNLEdBQUcsQ0FBQyxVQUFDdUcsSUFBSTtJQUFBLG9CQUN6Qm5ILEtBQUEsQ0FBQXdKLGFBQUE7TUFBUXlCLEdBQUcsRUFBRTlELElBQUksQ0FBQzVHLEVBQUc7TUFBQ3pFLEtBQUssRUFBRXFMLElBQUksQ0FBQzVHO0lBQUcsR0FDbEM0RyxJQUFJLENBQUMzRyxLQUNBLENBQUM7RUFBQSxDQUNWLENBQ0ssQ0FDTCxDQUNGLENBQUMsZUFDTlIsS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBNkIsZ0JBQzFDekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBZSxnQkFDNUJ6SixLQUFBLENBQUF3SixhQUFBO0lBQU9DLFNBQVMsRUFBQztFQUF3QixHQUFDLHdGQUF1QixDQUFDLGVBQ2xFekosS0FBQSxDQUFBd0osYUFBQTtJQUNFMU4sS0FBSyxFQUFFbUosTUFBTSxDQUFDb0MsY0FBYyxJQUFJLEVBQUc7SUFDbkN1QyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRzNQLENBQUM7TUFBQSxPQUFLMlAsU0FBUSxDQUFBbkwsYUFBQSxDQUFBQSxhQUFBLEtBQU13RyxNQUFNO1FBQUVvQyxjQUFjLEVBQUVwTixDQUFDLENBQUNxTixNQUFNLENBQUN4TCxLQUFLLElBQUk7TUFBSSxFQUFFLENBQUM7SUFBQSxDQUFDO0lBQ2pGa1AsUUFBUSxFQUFFLENBQUNqQixTQUFVO0lBQ3JCTixTQUFTLEVBQUM7RUFBa0wsZ0JBRTVMekosS0FBQSxDQUFBd0osYUFBQTtJQUFRMU4sS0FBSyxFQUFDO0VBQUUsR0FBQyxRQUFTLENBQUMsRUFDMUJxTSxPQUFPLENBQUN2SCxHQUFHLENBQUMsVUFBQzhHLE1BQU07SUFBQSxvQkFDbEIxSCxLQUFBLENBQUF3SixhQUFBO01BQVF5QixHQUFHLEVBQUV2RCxNQUFNLENBQUNuSCxFQUFHO01BQUN6RSxLQUFLLEVBQUU0TCxNQUFNLENBQUNuSDtJQUFHLEdBQ3RDbUgsTUFBTSxDQUFDRyxLQUNGLENBQUM7RUFBQSxDQUNWLENBQ0ssQ0FDTCxDQUNGLENBQ0YsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELElBQU1xRCxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUMsS0FBQSxFQXVCWDtFQUFBLElBdEJKekQsTUFBTSxHQUFBeUQsS0FBQSxDQUFOekQsTUFBTTtJQUNOUyxPQUFPLEdBQUFnRCxLQUFBLENBQVBoRCxPQUFPO0lBQ1BpRCxjQUFjLEdBQUFELEtBQUEsQ0FBZEMsY0FBYztJQUNkQyxVQUFVLEdBQUFGLEtBQUEsQ0FBVkUsVUFBVTtJQUNWQyxZQUFZLEdBQUFILEtBQUEsQ0FBWkcsWUFBWTtJQUNaQyxnQkFBZ0IsR0FBQUosS0FBQSxDQUFoQkksZ0JBQWdCO0lBQ2hCQyxjQUFjLEdBQUFMLEtBQUEsQ0FBZEssY0FBYztJQUNkQyxhQUFhLEdBQUFOLEtBQUEsQ0FBYk0sYUFBYTtJQUNiQyxlQUFlLEdBQUFQLEtBQUEsQ0FBZk8sZUFBZTtJQUNmQyxhQUFhLEdBQUFSLEtBQUEsQ0FBYlEsYUFBYTtJQUNiQyxTQUFTLEdBQUFULEtBQUEsQ0FBVFMsU0FBUztJQUNUN0IsU0FBUyxHQUFBb0IsS0FBQSxDQUFUcEIsU0FBUztJQUNUOEIscUJBQXFCLEdBQUFWLEtBQUEsQ0FBckJVLHFCQUFxQjtJQUNyQkMsaUJBQWlCLEdBQUFYLEtBQUEsQ0FBakJXLGlCQUFpQjtJQUNqQkMsYUFBYSxHQUFBWixLQUFBLENBQWJZLGFBQWE7SUFDYkMsb0JBQW9CLEdBQUFiLEtBQUEsQ0FBcEJhLG9CQUFvQjtJQUNwQkMsYUFBYSxHQUFBZCxLQUFBLENBQWJjLGFBQWE7SUFBQUMscUJBQUEsR0FBQWYsS0FBQSxDQUNiZ0IsZ0JBQWdCO0lBQWhCQSxnQkFBZ0IsR0FBQUQscUJBQUEsY0FBRyxLQUFLLEdBQUFBLHFCQUFBO0lBQ3hCRSxlQUFlLEdBQUFqQixLQUFBLENBQWZpQixlQUFlO0lBQ2ZDLE1BQU0sR0FBQWxCLEtBQUEsQ0FBTmtCLE1BQU07SUFBQUMsY0FBQSxHQUFBbkIsS0FBQSxDQUNOb0IsUUFBUTtJQUFSQSxRQUFRLEdBQUFELGNBQUEsY0FBRyxLQUFLLEdBQUFBLGNBQUE7SUFBQUUsZUFBQSxHQUFBckIsS0FBQSxDQUNoQnNCLFNBQVM7SUFBVEEsU0FBUyxHQUFBRCxlQUFBLGNBQUcsS0FBSyxHQUFBQSxlQUFBO0VBRWpCLElBQU1FLFlBQVksR0FBR3JNLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDakMsSUFBQXNNLFVBQUEsR0FBb0MxTSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUEyTSxVQUFBLEdBQUFqUCxjQUFBLENBQUFnUCxVQUFBO0lBQTNDRSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBQ2hDLElBQU1HLGNBQWMsR0FBRzFNLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDbkMsSUFBTTJNLGNBQWMsR0FBRzNNLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDbkMsSUFBTTRNLGdCQUFnQixHQUFHNU0sTUFBTSxDQUFDLElBQUksQ0FBQztFQUNyQyxJQUFNNk0saUJBQWlCLEdBQUc3TSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ3RDLElBQUE4TSxVQUFBLEdBQWdEbE4sUUFBUSxDQUFDLElBQUksQ0FBQztJQUFBbU4sVUFBQSxHQUFBelAsY0FBQSxDQUFBd1AsVUFBQTtJQUF2REUsZ0JBQWdCLEdBQUFELFVBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFVBQUE7RUFDNUMsSUFBQUcsVUFBQSxHQUFvRHROLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQXVOLFVBQUEsR0FBQTdQLGNBQUEsQ0FBQTRQLFVBQUE7SUFBM0RFLGtCQUFrQixHQUFBRCxVQUFBO0lBQUVFLHFCQUFxQixHQUFBRixVQUFBO0VBQ2hELElBQUFHLFVBQUEsR0FBa0MxTixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQUEyTixVQUFBLEdBQUFqUSxjQUFBLENBQUFnUSxVQUFBO0lBQXpDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBQzlCLElBQU1HLGdCQUFnQixHQUFHMU4sTUFBTSxDQUFDLElBQUksQ0FBQztFQUNyQyxJQUFBMk4sVUFBQSxHQUE0Qy9OLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWdPLFdBQUEsR0FBQXRRLGNBQUEsQ0FBQXFRLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsV0FBQTtJQUFFRSxpQkFBaUIsR0FBQUYsV0FBQTtFQUN4QyxJQUFBRyxXQUFBLEdBQW9Dbk8sUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb08sV0FBQSxHQUFBMVEsY0FBQSxDQUFBeVEsV0FBQTtJQUF6Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFNRyxVQUFVLEdBQUduTyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQy9CLElBQU0rRixJQUFJLEdBQUdqRyxPQUFPLENBQUMsWUFBTTtJQUN6QixJQUFNcUYsT0FBTyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQWlDLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFeEQsT0FBTyxLQUFJLEVBQUUsRUFBRXhGLE9BQU8sQ0FBQyxVQUFDcUcsR0FBRyxFQUFLO01BQ3ZDLElBQU0wSixRQUFRLEdBQUd0UCxNQUFNLENBQUM0RixHQUFHLENBQUNOLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDZSxPQUFPLENBQUNJLEdBQUcsQ0FBQzZJLFFBQVEsQ0FBQyxFQUFFakosT0FBTyxDQUFDSyxHQUFHLENBQUM0SSxRQUFRLEVBQUUsRUFBRSxDQUFDO01BQ3JEakosT0FBTyxDQUFDTSxHQUFHLENBQUMySSxRQUFRLENBQUMsQ0FBQ3hRLElBQUksQ0FBQzhHLEdBQUcsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFDRixPQUFPN0csS0FBSyxDQUFDMkIsSUFBSSxDQUFDMkYsT0FBTyxDQUFDUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2pDN0IsSUFBSSxDQUFDLFVBQUM3SSxDQUFDLEVBQUU4SSxDQUFDO01BQUEsT0FBSzlJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzhJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxFQUFDLENBQzNCeEQsR0FBRyxDQUFDLFVBQUE4TixLQUFBO01BQUEsSUFBQUMsS0FBQSxHQUFBaFIsY0FBQSxDQUFBK1EsS0FBQTtRQUFFaEosS0FBSyxHQUFBaUosS0FBQTtRQUFFQyxJQUFJLEdBQUFELEtBQUE7TUFBQSxPQUFPO1FBQ3ZCakosS0FBSyxFQUFMQSxLQUFLO1FBQ0x4QixPQUFPLEVBQUUwSyxJQUFJLENBQUN6SyxJQUFJLENBQUMsVUFBQzdJLENBQUMsRUFBRThJLENBQUM7VUFBQSxJQUFBeUssU0FBQSxFQUFBQyxTQUFBO1VBQUEsT0FBSyxFQUFBRCxTQUFBLEdBQUN2VCxDQUFDLENBQUNvSixLQUFLLGNBQUFtSyxTQUFBLGNBQUFBLFNBQUEsR0FBSSxDQUFDLE1BQUFDLFNBQUEsR0FBSzFLLENBQUMsQ0FBQ00sS0FBSyxjQUFBb0ssU0FBQSxjQUFBQSxTQUFBLEdBQUksQ0FBQyxDQUFDO1FBQUE7TUFDOUQsQ0FBQztJQUFBLENBQUMsQ0FBQztFQUNQLENBQUMsRUFBRSxDQUFDcEgsTUFBTSxDQUFDLENBQUM7RUFFWixJQUFNcUgsV0FBVyxHQUFHNU8sT0FBTyxDQUFDO0lBQUEsT0FBT2pDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDNE4sYUFBYSxDQUFDLEdBQUdBLGFBQWEsR0FBRyxFQUFFO0VBQUEsQ0FBQyxFQUFFLENBQUNBLGFBQWEsQ0FBQyxDQUFDO0VBQ3ZHLElBQU1pRCxXQUFXLEdBQUc3TyxPQUFPLENBQUM7SUFBQSxJQUFBOE8sYUFBQSxFQUFBQyxNQUFBO0lBQUEsT0FBTSxFQUFBRCxhQUFBLElBQUFDLE1BQUEsR0FBQzlJLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBQThJLE1BQUEsdUJBQVBBLE1BQUEsQ0FBU3hKLEtBQUssY0FBQXVKLGFBQUEsY0FBQUEsYUFBQSxHQUFJLENBQUMsSUFBSSxHQUFHO0VBQUEsR0FBRSxDQUFDN0ksSUFBSSxDQUFDLENBQUM7RUFDdEUsSUFBTStJLGNBQWMsR0FBR2hQLE9BQU8sQ0FBQztJQUFBLElBQUFpUCxXQUFBLEVBQUFDLEtBQUE7SUFBQSxPQUFNLEVBQUFELFdBQUEsSUFBQUMsS0FBQSxHQUFDakosSUFBSSxDQUFDQSxJQUFJLENBQUMzSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGNBQUE0VCxLQUFBLHVCQUFyQkEsS0FBQSxDQUF1QjNKLEtBQUssY0FBQTBKLFdBQUEsY0FBQUEsV0FBQSxHQUFJLENBQUMsSUFBSSxHQUFHO0VBQUEsR0FBRSxDQUFDaEosSUFBSSxDQUFDLENBQUM7RUFDdkYsSUFBTWtKLGdCQUFnQixHQUFHbFAsV0FBVyxDQUFDLFVBQUNXLElBQUksRUFBSztJQUM3QyxJQUFJLENBQUNBLElBQUksRUFBRTtJQUNYQSxJQUFJLENBQUNnQixLQUFLLENBQUNGLE1BQU0sR0FBRyxNQUFNO0lBQzFCZCxJQUFJLENBQUNnQixLQUFLLENBQUNGLE1BQU0sTUFBQUcsTUFBQSxDQUFNakIsSUFBSSxDQUFDd08sWUFBWSxPQUFJO0VBQzlDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxnQkFBZ0IsR0FBR3BQLFdBQVcsQ0FBQyxVQUFDcVAsS0FBSyxFQUFFMUUsR0FBRyxFQUFLO0lBQ25ELElBQUksQ0FBQzBFLEtBQUssSUFBSSxFQUFDMUUsR0FBRyxhQUFIQSxHQUFHLGVBQUhBLEdBQUcsQ0FBRUgsT0FBTyxHQUFFLE9BQU8sS0FBSztJQUN6QyxJQUFNdEosSUFBSSxHQUFHeUosR0FBRyxDQUFDSCxPQUFPLENBQUNwSixxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hELElBQVF5QixPQUFPLEdBQWN3TSxLQUFLLENBQTFCeE0sT0FBTztNQUFFRSxPQUFPLEdBQUtzTSxLQUFLLENBQWpCdE0sT0FBTztJQUN4QixPQUFPRixPQUFPLElBQUkzQixJQUFJLENBQUNhLElBQUksSUFBSWMsT0FBTyxJQUFJM0IsSUFBSSxDQUFDb08sS0FBSyxJQUFJdk0sT0FBTyxJQUFJN0IsSUFBSSxDQUFDWSxHQUFHLElBQUlpQixPQUFPLElBQUk3QixJQUFJLENBQUNxTyxNQUFNO0VBQ3ZHLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTnpQLFNBQVMsQ0FBQztJQUFBLE9BQU07TUFBQSxPQUFNd0Qsa0JBQWtCLENBQUNxSixjQUFjLENBQUNuQyxPQUFPLENBQUM7SUFBQTtFQUFBLEdBQUUsRUFBRSxDQUFDO0VBRXJFMUssU0FBUyxDQUFDLFlBQU07SUFDZDBQLE1BQU0sQ0FBQ0Msa0JBQWtCLEdBQUdDLFNBQVM7SUFDckMsT0FBTyxZQUFNO01BQ1gsSUFBSUYsTUFBTSxDQUFDQyxrQkFBa0IsS0FBS0MsU0FBUyxFQUFFO1FBQzNDLE9BQU9GLE1BQU0sQ0FBQ0Msa0JBQWtCO01BQ2xDO0lBQ0YsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUVmLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekJyTSxrQkFBa0IsQ0FBQ3FKLGNBQWMsQ0FBQ25DLE9BQU8sQ0FBQztJQUMxQ21DLGNBQWMsQ0FBQ25DLE9BQU8sR0FBRyxJQUFJO0VBQy9CLENBQUM7RUFFRCxJQUFNb0YsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUl6SSxPQUFPLEVBQUVrSCxRQUFRLEVBQTJDO0lBQUEsSUFBekN3QixVQUFVLEdBQUE3UyxTQUFBLENBQUEzQixNQUFBLFFBQUEyQixTQUFBLFFBQUF5RyxTQUFBLEdBQUF6RyxTQUFBLE1BQUcsQ0FBQztJQUFBLElBQUVrSSxZQUFZLEdBQUFsSSxTQUFBLENBQUEzQixNQUFBLFFBQUEyQixTQUFBLFFBQUF5RyxTQUFBLEdBQUF6RyxTQUFBLE1BQUcsS0FBSztJQUMzRSxJQUFJLENBQUNtSyxPQUFPLEVBQUU7SUFDZCxJQUFJQSxPQUFPLENBQUMySSxNQUFNLEtBQUssU0FBUyxJQUFJM0ksT0FBTyxDQUFDSixJQUFJLEVBQUU7TUFDaERvRSxnQkFBZ0IsYUFBaEJBLGdCQUFnQixlQUFoQkEsZ0JBQWdCLENBQUdoRSxPQUFPLENBQUNKLElBQUksRUFBRXNILFFBQVEsRUFBRXdCLFVBQVUsRUFBRTNLLFlBQVksQ0FBQztNQUNwRTtJQUNGO0lBQ0EsSUFBSWlDLE9BQU8sQ0FBQ2hILEVBQUUsRUFBRTtNQUNkK0ssWUFBWSxhQUFaQSxZQUFZLGVBQVpBLFlBQVksQ0FBRy9ELE9BQU8sQ0FBQ2hILEVBQUUsRUFBRWtPLFFBQVEsRUFBRXdCLFVBQVUsRUFBRTNLLFlBQVksQ0FBQztJQUNoRTtFQUNGLENBQUM7RUFFRCxJQUFNNkssZUFBZSxHQUFHL1AsV0FBVztJQUFBLElBQUFnUSxLQUFBLEdBQUFqVCxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FDakMsU0FBQTZULFFBQU8xSCxJQUFJO01BQUEsSUFBQTJILFVBQUEsRUFBQUMscUJBQUE7TUFBQSxJQUFBQyxFQUFBO01BQUEsT0FBQWxVLFlBQUEsR0FBQUMsQ0FBQSxXQUFBa1UsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUF2VixDQUFBLEdBQUF1VixRQUFBLENBQUFwVyxDQUFBO1VBQUE7WUFBQSxNQUNMLENBQUNzTyxJQUFJLElBQUksQ0FBQ29CLFNBQVM7Y0FBQTBHLFFBQUEsQ0FBQXBXLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQW9XLFFBQUEsQ0FBQW5WLENBQUE7VUFBQTtZQUFBLEtBQUFnVixVQUFBLEdBQ2xCM0gsSUFBSSxDQUFDeEIsSUFBSSxjQUFBbUosVUFBQSxnQkFBQUMscUJBQUEsR0FBVEQsVUFBQSxDQUFXSSxVQUFVLGNBQUFILHFCQUFBLGVBQXJCQSxxQkFBQSxDQUFBM1UsSUFBQSxDQUFBMFUsVUFBQSxFQUF3QixRQUFRLENBQUM7Y0FBQUcsUUFBQSxDQUFBcFcsQ0FBQTtjQUFBO1lBQUE7WUFDcENrVSxhQUFhLENBQUMsNkJBQTZCLENBQUM7WUFBQyxPQUFBa0MsUUFBQSxDQUFBblYsQ0FBQTtVQUFBO1lBRy9DaVQsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQ2QsT0FBT3RDLGFBQWEsS0FBSyxVQUFVO2NBQUF3RSxRQUFBLENBQUFwVyxDQUFBO2NBQUE7WUFBQTtZQUNyQzhULGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUFDc0MsUUFBQSxDQUFBdlYsQ0FBQTtZQUFBdVYsUUFBQSxDQUFBcFcsQ0FBQTtZQUFBLE9BRWhCNFIsYUFBYSxDQUFDdEQsSUFBSSxDQUFDO1VBQUE7WUFBQThILFFBQUEsQ0FBQXBXLENBQUE7WUFBQTtVQUFBO1lBQUFvVyxRQUFBLENBQUF2VixDQUFBO1lBQUFzVixFQUFBLEdBQUFDLFFBQUEsQ0FBQXBWLENBQUE7WUFFekJzVixPQUFPLENBQUN6SCxLQUFLLENBQUMseUJBQXlCLEVBQUFzSCxFQUFPLENBQUM7WUFDL0NqQyxhQUFhLENBQUMsQ0FBQWlDLEVBQUEsYUFBQUEsRUFBQSx1QkFBQUEsRUFBQSxDQUFPMUksT0FBTyxLQUFJLGtDQUFrQyxDQUFDO1VBQUM7WUFBQTJJLFFBQUEsQ0FBQXZWLENBQUE7WUFFcEVpVCxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFBQyxPQUFBc0MsUUFBQSxDQUFBeFYsQ0FBQTtVQUFBO1lBQUEsT0FBQXdWLFFBQUEsQ0FBQW5WLENBQUE7VUFBQTtZQUk3QixJQUFJLE9BQU9tUSxhQUFhLEtBQUssVUFBVSxFQUFFO2NBQ3ZDQSxhQUFhLENBQUM5QyxJQUFJLENBQUM7WUFDckI7VUFBQztZQUFBLE9BQUE4SCxRQUFBLENBQUFuVixDQUFBO1FBQUE7TUFBQSxHQUFBK1UsT0FBQTtJQUFBLENBQ0Y7SUFBQSxpQkFBQU8sRUFBQTtNQUFBLE9BQUFSLEtBQUEsQ0FBQS9TLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsS0FDRCxDQUFDMk0sU0FBUyxFQUFFMEIsYUFBYSxFQUFFUSxhQUFhLENBQzFDLENBQUM7RUFFRCxJQUFNNEUsaUJBQWlCLEdBQUd6USxXQUFXLENBQ25DLFVBQUMwUSxHQUFHLEVBQUs7SUFDUCxJQUFJLENBQUMvRyxTQUFTLElBQUksQ0FBQytHLEdBQUcsRUFBRTtJQUN4QjlFLG9CQUFvQixhQUFwQkEsb0JBQW9CLGVBQXBCQSxvQkFBb0IsQ0FBRzhFLEdBQUcsQ0FBQztFQUM3QixDQUFDLEVBQ0QsQ0FBQy9HLFNBQVMsRUFBRWlDLG9CQUFvQixDQUNsQyxDQUFDO0VBRUQsSUFBTStFLGtCQUFrQixHQUFHM1EsV0FBVyxDQUNwQyxVQUFDcVAsS0FBSyxFQUFLO0lBQUEsSUFBQXVCLGFBQUE7SUFDVDFCLGdCQUFnQixDQUFDRyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW5JLE1BQU0sQ0FBQztJQUMvQm9FLGVBQWUsYUFBZkEsZUFBZSxlQUFmQSxlQUFlLENBQUcsQ0FBQStELEtBQUssYUFBTEEsS0FBSyxnQkFBQXVCLGFBQUEsR0FBTHZCLEtBQUssQ0FBRW5JLE1BQU0sY0FBQTBKLGFBQUEsdUJBQWJBLGFBQUEsQ0FBZWxWLEtBQUssS0FBSSxFQUFFLENBQUM7RUFDL0MsQ0FBQyxFQUNELENBQUN3VCxnQkFBZ0IsRUFBRTVELGVBQWUsQ0FDcEMsQ0FBQztFQUVEeEwsU0FBUyxDQUFDLFlBQU07SUFBQSxJQUFBK1EsY0FBQTtJQUNkLElBQUksQ0FBQ3BELFNBQVMsRUFBRTtJQUNoQixJQUFNcUQsU0FBUyxHQUFHLE9BQU9yTyxRQUFRLEtBQUssV0FBVyxJQUFBb08sY0FBQSxHQUFHcE8sUUFBUSxDQUFDQyxJQUFJLGNBQUFtTyxjQUFBLHVCQUFiQSxjQUFBLENBQWVsUCxLQUFLLEdBQUcsSUFBSTtJQUMvRSxJQUFNb1Asa0JBQWtCLEdBQUdELFNBQVMsR0FDaEM7TUFDRUUsUUFBUSxFQUFFRixTQUFTLENBQUNFLFFBQVE7TUFDNUJDLFdBQVcsRUFBRUgsU0FBUyxDQUFDRyxXQUFXO01BQ2xDQyxrQkFBa0IsRUFBRUosU0FBUyxDQUFDSTtJQUNoQyxDQUFDLEdBQ0QsSUFBSTtJQUVSLElBQUlKLFNBQVMsRUFBRTtNQUNiQSxTQUFTLENBQUNFLFFBQVEsR0FBRyxRQUFRO01BQzdCRixTQUFTLENBQUNHLFdBQVcsR0FBRyxNQUFNO01BQzlCSCxTQUFTLENBQUNJLGtCQUFrQixHQUFHLE1BQU07SUFDdkM7SUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUk5QixLQUFLLEVBQUs7TUFDL0JBLEtBQUssQ0FBQzlFLGNBQWMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFNNkcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUkvQixLQUFLLEVBQUs7TUFBQSxJQUFBZ0MscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxjQUFBLEVBQUFDLHFCQUFBO01BQzVCckMsS0FBSyxDQUFDOUUsY0FBYyxDQUFDLENBQUM7TUFDdEJ1QyxpQkFBaUIsQ0FBQ3RDLE9BQU8sR0FBRztRQUFFdkgsQ0FBQyxFQUFFb00sS0FBSyxDQUFDeE0sT0FBTztRQUFFOUgsQ0FBQyxFQUFFc1UsS0FBSyxDQUFDdE07TUFBUSxDQUFDO01BQ2xFLElBQUksQ0FBQzhKLGdCQUFnQixDQUFDckMsT0FBTyxFQUFFO1FBQzdCcUMsZ0JBQWdCLENBQUNyQyxPQUFPLEdBQUdtSCxxQkFBcUIsQ0FBQyxZQUFNO1VBQ3JEOUUsZ0JBQWdCLENBQUNyQyxPQUFPLEdBQUcsSUFBSTtVQUMvQixJQUFNb0gsTUFBTSxHQUFHOUUsaUJBQWlCLENBQUN0QyxPQUFPO1VBQ3hDLElBQUlvSCxNQUFNLEVBQUU7WUFBQSxJQUFBQyxxQkFBQSxFQUFBQyxzQkFBQTtZQUNWLENBQUFELHFCQUFBLEdBQUFsRixjQUFjLENBQUNuQyxPQUFPLGNBQUFxSCxxQkFBQSxnQkFBQUMsc0JBQUEsR0FBdEJELHFCQUFBLENBQXdCN08sTUFBTSxjQUFBOE8sc0JBQUEsZUFBOUJBLHNCQUFBLENBQUF0VyxJQUFBLENBQUFxVyxxQkFBQSxFQUFpQ0QsTUFBTSxDQUFDM08sQ0FBQyxFQUFFMk8sTUFBTSxDQUFDN1csQ0FBQyxDQUFDO1VBQ3REO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7TUFDQSxJQUFNZ1gsUUFBUSxHQUFHM0MsZ0JBQWdCLENBQUNDLEtBQUssRUFBRTdELFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFd0csV0FBVyxDQUFDLEdBQzVELFVBQVUsR0FDVjVDLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU3RCxTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRXlHLFVBQVUsQ0FBQyxHQUM1QyxTQUFTLEdBQ1QsSUFBSTtNQUNWeEcscUJBQXFCLGFBQXJCQSxxQkFBcUIsZUFBckJBLHFCQUFxQixDQUFHc0csUUFBUSxDQUFDO01BQ2pDLElBQU1HLGFBQWEsSUFBQWIscUJBQUEsR0FBRzFELGdCQUFnQixDQUFDbkQsT0FBTyxjQUFBNkcscUJBQUEsZ0JBQUFDLHNCQUFBLEdBQXhCRCxxQkFBQSxDQUEwQmpRLHFCQUFxQixjQUFBa1Esc0JBQUEsdUJBQS9DQSxzQkFBQSxDQUFBOVYsSUFBQSxDQUFBNlYscUJBQWtELENBQUM7TUFDekUsSUFBSWEsYUFBYSxFQUFFO1FBQ2pCLElBQUk3QyxLQUFLLENBQUN0TSxPQUFPLEdBQUdtUCxhQUFhLENBQUNwUSxHQUFHLEdBQUcsRUFBRSxFQUFFO1VBQzFDb0wsbUJBQW1CLENBQUMwQixXQUFXLENBQUM7VUFDaEN0QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7VUFDeEI7UUFDRjtRQUNBLElBQUkrQixLQUFLLENBQUN0TSxPQUFPLEdBQUdtUCxhQUFhLENBQUMzQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1VBQzdDckMsbUJBQW1CLENBQUM2QixjQUFjLENBQUM7VUFDbkN6QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7VUFDeEI7UUFDRjtNQUNGO01BQ0EsSUFBTTZFLFlBQVksSUFBQVosY0FBQSxHQUFHbEMsS0FBSyxDQUFDbkksTUFBTSxjQUFBcUssY0FBQSxnQkFBQUMscUJBQUEsR0FBWkQsY0FBQSxDQUFjYSxPQUFPLGNBQUFaLHFCQUFBLHVCQUFyQkEscUJBQUEsQ0FBQWhXLElBQUEsQ0FBQStWLGNBQUEsRUFBd0IsdUJBQXVCLENBQUM7TUFDckUsSUFBTWMsT0FBTyxJQUFBWixjQUFBLEdBQUdwQyxLQUFLLENBQUNuSSxNQUFNLGNBQUF1SyxjQUFBLGdCQUFBQyxxQkFBQSxHQUFaRCxjQUFBLENBQWNXLE9BQU8sY0FBQVYscUJBQUEsdUJBQXJCQSxxQkFBQSxDQUFBbFcsSUFBQSxDQUFBaVcsY0FBQSxFQUF3QixlQUFlLENBQUM7TUFDeEQsSUFBSSxDQUFDWSxPQUFPLElBQUksQ0FBQ0YsWUFBWSxFQUFFO1FBQzdCakYsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7TUFDN0I7SUFDRixDQUFDO0lBQ0QsSUFBTWdGLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJakQsS0FBSyxFQUFLO01BQzFCQSxLQUFLLENBQUM5RSxjQUFjLENBQUMsQ0FBQztNQUN0QmdJLFVBQVUsQ0FBQ2xELEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBTW1ELFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJbkQsS0FBSyxFQUFLO01BQUEsSUFBQW9ELHFCQUFBO01BQzlCcEQsS0FBSyxhQUFMQSxLQUFLLGdCQUFBb0QscUJBQUEsR0FBTHBELEtBQUssQ0FBRTlFLGNBQWMsY0FBQWtJLHFCQUFBLGVBQXJCQSxxQkFBQSxDQUFBalgsSUFBQSxDQUFBNlQsS0FBd0IsQ0FBQztNQUN6Qk0sWUFBWSxDQUFDLENBQUM7TUFDZGpELGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDbkJFLGNBQWMsQ0FBQ3BDLE9BQU8sR0FBRyxJQUFJO01BQzdCa0QsWUFBWSxDQUFDLElBQUksQ0FBQztNQUNsQlIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO01BQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7TUFDM0I3QixxQkFBcUIsYUFBckJBLHFCQUFxQixlQUFyQkEscUJBQXFCLENBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFNaUgsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJckQsS0FBSyxFQUFLO01BQy9CLElBQUlBLEtBQUssQ0FBQ3hFLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDMUJ3RSxLQUFLLENBQUM5RSxjQUFjLENBQUMsQ0FBQztRQUN0Qm9GLFlBQVksQ0FBQyxDQUFDO1FBQ2RqRCxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CRSxjQUFjLENBQUNwQyxPQUFPLEdBQUcsSUFBSTtRQUM3QmtELFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbEJSLG1CQUFtQixDQUFDLElBQUksQ0FBQztRQUN6QkkscUJBQXFCLENBQUMsSUFBSSxDQUFDO01BQzdCO0lBQ0YsQ0FBQztJQUNEN0ssUUFBUSxDQUFDa1EsZ0JBQWdCLENBQUMsV0FBVyxFQUFFeEIsYUFBYSxFQUFFO01BQUV5QixPQUFPLEVBQUU7SUFBTSxDQUFDLENBQUM7SUFDekVuUSxRQUFRLENBQUNrUSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUV2QixVQUFVLEVBQUU7TUFBRXdCLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQztJQUN4RW5RLFFBQVEsQ0FBQ2tRLGdCQUFnQixDQUFDLFdBQVcsRUFBRUwsUUFBUSxFQUFFO01BQUVNLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQztJQUNwRW5RLFFBQVEsQ0FBQ2tRLGdCQUFnQixDQUFDLGVBQWUsRUFBRUgsWUFBWSxFQUFFO01BQUVJLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQztJQUM1RW5RLFFBQVEsQ0FBQ2tRLGdCQUFnQixDQUFDLFNBQVMsRUFBRUQsYUFBYSxDQUFDO0lBQ25ELE9BQU8sWUFBTTtNQUNYLElBQUk3RixnQkFBZ0IsQ0FBQ3JDLE9BQU8sRUFBRTtRQUM1QnFJLG9CQUFvQixDQUFDaEcsZ0JBQWdCLENBQUNyQyxPQUFPLENBQUM7UUFDOUNxQyxnQkFBZ0IsQ0FBQ3JDLE9BQU8sR0FBRyxJQUFJO01BQ2pDO01BQ0EvSCxRQUFRLENBQUNxUSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUzQixhQUFhLENBQUM7TUFDeEQxTyxRQUFRLENBQUNxUSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUxQixVQUFVLENBQUM7TUFDdkQzTyxRQUFRLENBQUNxUSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUVSLFFBQVEsQ0FBQztNQUNuRDdQLFFBQVEsQ0FBQ3FRLG1CQUFtQixDQUFDLGVBQWUsRUFBRU4sWUFBWSxDQUFDO01BQzNEL1AsUUFBUSxDQUFDcVEsbUJBQW1CLENBQUMsU0FBUyxFQUFFSixhQUFhLENBQUM7TUFDdERqSCxxQkFBcUIsYUFBckJBLHFCQUFxQixlQUFyQkEscUJBQXFCLENBQUcsSUFBSSxDQUFDO01BRTdCLElBQUlxRixTQUFTLElBQUlDLGtCQUFrQixFQUFFO1FBQ25DRCxTQUFTLENBQUNFLFFBQVEsR0FBR0Qsa0JBQWtCLENBQUNDLFFBQVE7UUFDaERGLFNBQVMsQ0FBQ0csV0FBVyxHQUFHRixrQkFBa0IsQ0FBQ0UsV0FBVztRQUN0REgsU0FBUyxDQUFDSSxrQkFBa0IsR0FBR0gsa0JBQWtCLENBQUNHLGtCQUFrQjtNQUN0RTtJQUNGLENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ25DLGNBQWMsRUFBRXRCLFNBQVMsRUFBRWpDLFNBQVMsRUFBRTRELGdCQUFnQixFQUFFM0QscUJBQXFCLEVBQUVtRCxXQUFXLENBQUMsQ0FBQztFQUVoRzlPLFNBQVMsQ0FBQyxZQUFNO0lBQ2RvUCxnQkFBZ0IsQ0FBQ2QsVUFBVSxDQUFDNUQsT0FBTyxDQUFDO0VBQ3RDLENBQUMsRUFBRSxDQUFDMEUsZ0JBQWdCLEVBQUU1SCxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUksT0FBTyxDQUFDLENBQUM7RUFFdkM1SCxTQUFTLENBQUMsWUFBTTtJQUNkNEwsaUJBQWlCLGFBQWpCQSxpQkFBaUIsZUFBakJBLGlCQUFpQixDQUFHLENBQUMsQ0FBQytCLFNBQVMsQ0FBQztFQUNsQyxDQUFDLEVBQUUsQ0FBQ0EsU0FBUyxFQUFFL0IsaUJBQWlCLENBQUMsQ0FBQztFQUVsQyxJQUFNZ0UsU0FBUyxHQUFHMVAsV0FBVyxDQUMzQixVQUFDbUgsT0FBTyxFQUFFNEwsVUFBVSxFQUFFMUQsS0FBSyxFQUFLO0lBQUEsSUFBQTJELGdCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGVBQUE7SUFDOUIsSUFBSSxDQUFDN0QsS0FBSyxJQUFJLENBQUMxRixTQUFTLEVBQUU7SUFDMUIwRixLQUFLLENBQUM5RSxjQUFjLENBQUMsQ0FBQztJQUN0QjhFLEtBQUssQ0FBQzhELGVBQWUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUk7TUFDRixJQUFJLE9BQU85RCxLQUFLLENBQUMrRCxTQUFTLEtBQUssUUFBUSxFQUFFO1FBQUEsSUFBQUMscUJBQUE7UUFDdkNOLFVBQVUsYUFBVkEsVUFBVSxnQkFBQU0scUJBQUEsR0FBVk4sVUFBVSxDQUFFTyxpQkFBaUIsY0FBQUQscUJBQUEsZUFBN0JBLHFCQUFBLENBQUE3WCxJQUFBLENBQUF1WCxVQUFVLEVBQXNCMUQsS0FBSyxDQUFDK0QsU0FBUyxDQUFDO01BQ2xEO0lBQ0YsQ0FBQyxDQUFDLE9BQUFHLE9BQUEsRUFBTTtNQUNOO0lBQUE7SUFFRjNHLGNBQWMsQ0FBQ3BDLE9BQU8sR0FBR3JELE9BQU87SUFDaEMrRixtQkFBbUIsRUFBQThGLGdCQUFBLEdBQUM3TCxPQUFPLENBQUNxTSxPQUFPLGNBQUFSLGdCQUFBLGNBQUFBLGdCQUFBLEdBQUksSUFBSSxDQUFDO0lBQzVDMUYscUJBQXFCLEVBQUEyRixrQkFBQSxHQUFDOUwsT0FBTyxDQUFDc00sU0FBUyxjQUFBUixrQkFBQSxjQUFBQSxrQkFBQSxHQUFJLElBQUksQ0FBQztJQUNoRHZGLFlBQVksQ0FBQ3ZHLE9BQU8sQ0FBQztJQUNyQnVGLGFBQWEsQ0FBQ3ZGLE9BQU8sQ0FBQ2hILEVBQUUsSUFBSSxJQUFJLENBQUM7SUFDakMsSUFBTXVULE9BQU8sR0FBR2hULGlCQUFpQixDQUFDcVMsVUFBVSxFQUFFMUQsS0FBSyxDQUFDO0lBQ3BEMUMsY0FBYyxDQUFDbkMsT0FBTyxHQUFHa0osT0FBTztJQUNoQ0EsT0FBTyxhQUFQQSxPQUFPLGdCQUFBUixlQUFBLEdBQVBRLE9BQU8sQ0FBRTFRLE1BQU0sY0FBQWtRLGVBQUEsZUFBZkEsZUFBQSxDQUFBMVgsSUFBQSxDQUFBa1ksT0FBTyxFQUFXckUsS0FBSyxDQUFDeE0sT0FBTyxFQUFFd00sS0FBSyxDQUFDdE0sT0FBTyxDQUFDO0VBQ2pELENBQUMsRUFDRCxDQUFDNEcsU0FBUyxDQUNaLENBQUM7RUFFRCxJQUFNNEksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlsRCxLQUFLLEVBQUs7SUFBQSxJQUFBc0UsTUFBQSxFQUFBQyxNQUFBO0lBQzVCLElBQUksQ0FBQ25HLFNBQVMsRUFBRTtJQUNoQixJQUFJNEIsS0FBSyxFQUFFO01BQ1QsSUFBSUQsZ0JBQWdCLENBQUNDLEtBQUssRUFBRTdELFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFd0csV0FBVyxDQUFDLElBQUl2RSxTQUFTLENBQUN0TixFQUFFLEVBQUU7UUFDbkU2SyxjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFHeUMsU0FBUyxDQUFDdE4sRUFBRSxDQUFDO1FBQzlCd1AsWUFBWSxDQUFDLENBQUM7UUFDZGpELGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkJFLGNBQWMsQ0FBQ3BDLE9BQU8sR0FBRyxJQUFJO1FBQzdCa0QsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNsQlIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDM0I3QixxQkFBcUIsYUFBckJBLHFCQUFxQixlQUFyQkEscUJBQXFCLENBQUcsSUFBSSxDQUFDO1FBQzdCO01BQ0Y7TUFDQSxJQUFJMkQsZ0JBQWdCLENBQUNDLEtBQUssRUFBRTdELFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFeUcsVUFBVSxDQUFDLElBQUl4RSxTQUFTLENBQUN0TixFQUFFLEVBQUU7UUFDbEVpTCxjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFHcUMsU0FBUyxDQUFDdE4sRUFBRSxDQUFDO1FBQzlCd1AsWUFBWSxDQUFDLENBQUM7UUFDZGpELGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkJFLGNBQWMsQ0FBQ3BDLE9BQU8sR0FBRyxJQUFJO1FBQzdCa0QsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNsQlIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDM0I3QixxQkFBcUIsYUFBckJBLHFCQUFxQixlQUFyQkEscUJBQXFCLENBQUcsSUFBSSxDQUFDO1FBQzdCO01BQ0Y7SUFDRjtJQUNBLElBQU1vSSxNQUFNLElBQUFGLE1BQUEsR0FBRzFHLGdCQUFnQixhQUFoQkEsZ0JBQWdCLGNBQWhCQSxnQkFBZ0IsR0FBSVEsU0FBUyxDQUFDK0YsT0FBTyxjQUFBRyxNQUFBLGNBQUFBLE1BQUEsR0FBSSxDQUFDO0lBQ3pELElBQU1HLGFBQWEsR0FBRy9VLE1BQU0sQ0FBQ3dHLFFBQVEsQ0FBQ3NPLE1BQU0sQ0FBQyxJQUFJMU4sSUFBSSxDQUFDNE4sR0FBRyxDQUFDRixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRztJQUM3RSxJQUFNL08sU0FBUyxHQUFHL0YsTUFBTSxDQUFDd0csUUFBUSxDQUFDc08sTUFBTSxDQUFDLEdBQUlDLGFBQWEsR0FBRzNOLElBQUksQ0FBQzZOLElBQUksQ0FBQ0gsTUFBTSxDQUFDLEdBQUcxTixJQUFJLENBQUM4TixLQUFLLENBQUNKLE1BQU0sQ0FBQyxHQUFJLENBQUM7SUFDeEcsSUFBTTlPLFdBQVcsSUFBQTZPLE1BQUEsR0FBR3ZHLGtCQUFrQixhQUFsQkEsa0JBQWtCLGNBQWxCQSxrQkFBa0IsR0FBSUksU0FBUyxDQUFDZ0csU0FBUyxjQUFBRyxNQUFBLGNBQUFBLE1BQUEsR0FBSSxDQUFDO0lBQ2xFaEUsWUFBWSxDQUFDbkMsU0FBUyxFQUFFM0ksU0FBUyxFQUFFQyxXQUFXLEVBQUUrTyxhQUFhLENBQUM7SUFDOURuRSxZQUFZLENBQUMsQ0FBQztJQUNkakQsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNuQkUsY0FBYyxDQUFDcEMsT0FBTyxHQUFHLElBQUk7SUFDN0JrRCxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2xCUixtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDekJJLHFCQUFxQixDQUFDLElBQUksQ0FBQztJQUMzQjdCLHFCQUFxQixhQUFyQkEscUJBQXFCLGVBQXJCQSxxQkFBcUIsQ0FBRyxJQUFJLENBQUM7RUFDL0IsQ0FBQztFQUVELG9CQUNFN0wsS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBZ0wsZ0JBQzdMekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBNEwsQ0FBRSxDQUFDLGVBQzlNekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBa0QsZ0JBQy9EekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzdCekosS0FBQSxDQUFBd0osYUFBQTtJQUNFMU4sS0FBSyxFQUFFLENBQUE0TCxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUcsS0FBSyxLQUFJLEVBQUc7SUFDM0IrQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRzNQLENBQUM7TUFBQSxPQUFLMFIsYUFBYSxhQUFiQSxhQUFhLHVCQUFiQSxhQUFhLENBQUcxUixDQUFDLENBQUNxTixNQUFNLENBQUN4TCxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ2pEa1AsUUFBUSxFQUFFLENBQUNqQixTQUFVO0lBQ3JCdUssV0FBVyxFQUFDLHdJQUEwQjtJQUN0QzdLLFNBQVMsRUFBQztFQUFvSyxDQUMvSyxDQUNFLENBQUMsZUFDTnpKLEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQWtDLGdCQUMvQ3pKLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRXJDLElBQUksRUFBQyxRQUFRO0lBQ2JvTixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLE9BQVFuSSxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRyxDQUFDO0lBQUEsQ0FBQztJQUNuQzNDLFNBQVMsb0dBQUF6SCxNQUFBLENBQ1ArSCxTQUFTLEdBQ0wsMERBQTBELEdBQzFELG9GQUFvRjtFQUN2RixnQkFFSC9KLEtBQUEsQ0FBQXdKLGFBQUE7SUFBTSxlQUFZO0VBQU0sR0FBQyxjQUFRLENBQUMsZUFDbEN4SixLQUFBLENBQUF3SixhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFrQixHQUFFTSxTQUFTLEdBQUcseUJBQXlCLEdBQUcsVUFBaUIsQ0FDdkYsQ0FBQyxlQUNUL0osS0FBQSxDQUFBd0osYUFBQTtJQUNFckMsSUFBSSxFQUFDLFFBQVE7SUFDYm9OLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUWxJLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFHLENBQUM7SUFBQSxDQUFDO0lBQzFCNUMsU0FBUyxFQUFDLGtMQUFrTDtJQUM1THVCLFFBQVEsRUFBRXlCLFNBQVMsSUFBSUY7RUFBUyxHQUUvQkUsU0FBUyxJQUFJRixRQUFRLEdBQUcsY0FBYyxHQUFHLFdBQ3BDLENBQ0wsQ0FDRixDQUFDLGVBQ052TSxLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFpRixnQkFDOUZ6SixLQUFBLENBQUF3SixhQUFBO0lBQ0VDLFNBQVMsMENBQUF6SCxNQUFBLENBQTBDK0gsU0FBUyxHQUFHLGdCQUFnQixHQUFHLGdCQUFnQixDQUFHO0lBQ3JHd0ssT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUd0YSxDQUFDLEVBQUs7TUFBQSxJQUFBdWEsU0FBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQTtNQUNkLElBQUksQ0FBQzNLLFNBQVMsRUFBRTtNQUNoQixLQUFBeUssU0FBQSxHQUFJdmEsQ0FBQyxDQUFDcU4sTUFBTSxjQUFBa04sU0FBQSxnQkFBQUMsaUJBQUEsR0FBUkQsU0FBQSxDQUFVaEMsT0FBTyxjQUFBaUMsaUJBQUEsZUFBakJBLGlCQUFBLENBQUE3WSxJQUFBLENBQUE0WSxTQUFBLEVBQW9CLHFCQUFxQixDQUFDLEVBQUU7TUFDaEQsQ0FBQUUscUJBQUEsR0FBQWhJLFlBQVksQ0FBQzlCLE9BQU8sY0FBQThKLHFCQUFBLGVBQXBCQSxxQkFBQSxDQUFzQkMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBRTtJQUNGakssVUFBVSxFQUFFLFNBQVpBLFVBQVVBLENBQUd6USxDQUFDO01BQUEsT0FBS0EsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3RDRSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRzVRLENBQUMsRUFBSztNQUFBLElBQUEyYSxxQkFBQTtNQUNiM2EsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDWixTQUFTLEVBQUU7TUFDaEIsSUFBTXBCLElBQUksSUFBQWlNLHFCQUFBLEdBQUczYSxDQUFDLENBQUM0YSxZQUFZLENBQUNDLEtBQUssY0FBQUYscUJBQUEsdUJBQXBCQSxxQkFBQSxDQUF1QixDQUFDLENBQUM7TUFDdEMsSUFBSWpNLElBQUksRUFBRXdILGVBQWUsQ0FBQ3hILElBQUksQ0FBQztJQUNqQztFQUFFLEdBRURqQixNQUFNLGFBQU5BLE1BQU0sZUFBTkEsTUFBTSxDQUFFSyxRQUFRLGdCQUNmL0gsS0FBQSxDQUFBd0osYUFBQTtJQUNFc0gsR0FBRyxFQUFFcEosTUFBTSxDQUFDSyxRQUFTO0lBQ3JCZ04sR0FBRyxFQUFDLEVBQUU7SUFDTnRMLFNBQVMsRUFBQztFQUFvRixDQUMvRixDQUFDLGdCQUVGekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBK0wsZ0JBQzVNekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBa0MsZ0JBQy9DekosS0FBQSxDQUFBd0osYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBVSxHQUFDLG9CQUFTLENBQUMsZUFDckN6SixLQUFBLENBQUF3SixhQUFBLGVBQU0sMkhBQTJCLENBQUMsZUFDbEN4SixLQUFBLENBQUF3SixhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFvQyxHQUFDLDJKQUFrQyxDQUNwRixDQUNGLENBQ04sZUFDRHpKLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRXJDLElBQUksRUFBQyxNQUFNO0lBQ1g2TixNQUFNLEVBQUMsU0FBUztJQUNoQnZMLFNBQVMsRUFBQyxRQUFRO0lBQ2xCc0IsR0FBRyxFQUFFMkIsWUFBYTtJQUNsQjlDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHM1AsQ0FBQyxFQUFLO01BQUEsSUFBQWdiLGVBQUE7TUFDZixJQUFNdE0sSUFBSSxJQUFBc00sZUFBQSxHQUFHaGIsQ0FBQyxDQUFDcU4sTUFBTSxDQUFDd04sS0FBSyxjQUFBRyxlQUFBLHVCQUFkQSxlQUFBLENBQWlCLENBQUMsQ0FBQztNQUNoQ2hiLENBQUMsQ0FBQ3FOLE1BQU0sQ0FBQ3hMLEtBQUssR0FBRyxFQUFFO01BQ25CLElBQUk2TSxJQUFJLEVBQUV3SCxlQUFlLENBQUN4SCxJQUFJLENBQUM7SUFDakM7RUFBRSxDQUNILENBQUMsRUFDRHVGLGNBQWMsaUJBQ2JsTyxLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUEwSCxHQUFDLDJEQUVySSxDQUNOLGVBQ0R6SixLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFxSixDQUFFLENBQUMsZUFDdkt6SixLQUFBLENBQUF3SixhQUFBO0lBQ0VDLFNBQVMsNEpBQUF6SCxNQUFBLENBQ1ArSCxTQUFTLEdBQUcscUJBQXFCLEdBQUcsZ0NBQWdDLENBQ25FO0lBQ0gscUJBQWtCO0VBQU0sZ0JBRXhCL0osS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBbUQsZ0JBQ2hFekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBMkYsZ0JBQ3hHekosS0FBQSxDQUFBd0osYUFBQTtJQUFNQyxTQUFTLEVBQUM7RUFBUyxHQUFDLG9CQUFTLENBQUMsZUFDcEN6SixLQUFBLENBQUF3SixhQUFBLGVBQU0sK0dBQXlCLENBQzVCLENBQUMsZUFDTnhKLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRXJDLElBQUksRUFBQyxRQUFRO0lBQ2JvTixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtNQUFBLElBQUFXLHNCQUFBO01BQUEsT0FBUW5MLFNBQVMsTUFBQW1MLHNCQUFBLEdBQUl4SSxZQUFZLENBQUM5QixPQUFPLGNBQUFzSyxzQkFBQSx1QkFBcEJBLHNCQUFBLENBQXNCUCxLQUFLLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDMURsTCxTQUFTLEVBQUMscUxBQXFMO0lBQy9MdUIsUUFBUSxFQUFFLENBQUNqQjtFQUFVLEdBQ3RCLHdEQUVPLENBQ0wsQ0FBQyxFQUNMdUUsVUFBVSxpQkFBSXRPLEtBQUEsQ0FBQXdKLGFBQUE7SUFBR0MsU0FBUyxFQUFDO0VBQXVCLEdBQUU2RSxVQUFjLENBQUMsRUFDbkVuQyxnQkFBZ0IsZ0JBQ2ZuTSxLQUFBLENBQUF3SixhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFDLDhIQUEyQixDQUFDLEdBQ2hFc0YsV0FBVyxDQUFDdFQsTUFBTSxnQkFDcEJ1RSxLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUF1QyxHQUNuRHNGLFdBQVcsQ0FBQ25PLEdBQUcsQ0FBQyxVQUFDa1EsR0FBRyxFQUFLO0lBQ3hCLElBQU1xRSxRQUFRLEdBQUcsQ0FBQyxDQUFBek4sTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVLLFFBQVEsS0FBSSxFQUFFLE1BQU0rSSxHQUFHO0lBQ2pELG9CQUNFOVEsS0FBQSxDQUFBd0osYUFBQTtNQUNFckMsSUFBSSxFQUFDLFFBQVE7TUFDYjhELEdBQUcsRUFBRTZGLEdBQUk7TUFDVHlELE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUTFELGlCQUFpQixDQUFDQyxHQUFHLENBQUM7TUFBQSxDQUFDO01BQ3RDOUYsUUFBUSxFQUFFLENBQUNqQixTQUFVO01BQ3JCTixTQUFTLDJFQUFBekgsTUFBQSxDQUNQbVQsUUFBUSxHQUNKLHlDQUF5QyxHQUN6Qyw0RUFBNEUsT0FBQW5ULE1BQUEsQ0FDOUUsQ0FBQytILFNBQVMsR0FBRyxZQUFZLEdBQUcsRUFBRTtJQUFHLGdCQUVyQy9KLEtBQUEsQ0FBQXdKLGFBQUE7TUFBS3NILEdBQUcsRUFBRUEsR0FBSTtNQUFDaUUsR0FBRyxFQUFDLEVBQUU7TUFBQ3RMLFNBQVMsRUFBQztJQUEwQixDQUFFLENBQUMsRUFDNUQwTCxRQUFRLGlCQUNQblYsS0FBQSxDQUFBd0osYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBbUksR0FBQyw0Q0FFOUksQ0FFRixDQUFDO0VBRWIsQ0FBQyxDQUNFLENBQUMsZ0JBRU56SixLQUFBLENBQUF3SixhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUF3QixHQUFDLCtZQUVuQyxDQUVGLENBQ0EsQ0FBQyxlQUNSekosS0FBQSxDQUFBd0osYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBZ0QsZ0JBQzdEekosS0FBQSxDQUFBd0osYUFBQTtJQUNFdUIsR0FBRyxFQUFFeUQsVUFBVztJQUNoQjFTLEtBQUssRUFBRSxDQUFBNEwsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLE9BQU8sS0FBSSxFQUFHO0lBQzdCOEIsUUFBUSxFQUFFbUgsa0JBQW1CO0lBQzdCcUUsT0FBTyxFQUFFckUsa0JBQW1CO0lBQzVCL0YsUUFBUSxFQUFFLENBQUNqQixTQUFVO0lBQ3JCTixTQUFTLEVBQUMsdUtBQXVLO0lBQ2pMNkssV0FBVyxFQUFDLDZNQUF3QztJQUNwRGxPLElBQUksRUFBRTtFQUFFLENBQ1QsQ0FDRSxDQUFDLGVBQ05wRyxLQUFBLENBQUF3SixhQUFBO0lBQUtDLFNBQVMsRUFBQyxtREFBbUQ7SUFBQ3NCLEdBQUcsRUFBRWdEO0VBQWlCLEdBQ3RGM0gsSUFBSSxDQUFDM0ssTUFBTSxnQkFDVnVFLEtBQUEsQ0FBQXdKLGFBQUEsQ0FBQXhKLEtBQUEsQ0FBQXFWLFFBQUEscUJBQ0VyVixLQUFBLENBQUF3SixhQUFBO0lBQ0VDLFNBQVMsNkJBQUF6SCxNQUFBLENBQTZCNkwsU0FBUyxHQUFHLE1BQU0sR0FBRyxxQkFBcUIsa0VBQWdFO0lBQ2hKOUwsS0FBSyxFQUFFO01BQ0xHLEdBQUcsRUFBRTJMLFNBQVMsR0FBRyxPQUFPLEdBQUcsTUFBTTtNQUNqQ2hNLE1BQU0sRUFBRWdNLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQztNQUMxQm5MLE9BQU8sRUFBRW1MLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUMxQnhMLGFBQWEsRUFBRXdMLFNBQVMsR0FBRyxNQUFNLEdBQUc7SUFDdEMsQ0FBRTtJQUNGLHVCQUFvQixLQUFLO0lBQ3pCeUgsY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFHcmIsQ0FBQyxFQUFLO01BQ3JCLElBQUksQ0FBQzRULFNBQVMsRUFBRTtNQUNoQjVULENBQUMsQ0FBQzBRLGNBQWMsQ0FBQyxDQUFDO01BQ2xCMkMsbUJBQW1CLENBQUMwQixXQUFXLENBQUM7TUFDaEN0QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBRTtJQUNGNkgsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUd0YixDQUFDLEVBQUs7TUFDcEIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO01BQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIyQyxtQkFBbUIsQ0FBQzBCLFdBQVcsQ0FBQztNQUNoQ3RCLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFFO0lBQ0Y4SCxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBR3ZiLENBQUMsRUFBSztNQUNsQixJQUFJLENBQUM0VCxTQUFTLEVBQUU7TUFDaEI1VCxDQUFDLENBQUMwUSxjQUFjLENBQUMsQ0FBQztNQUNsQjJDLG1CQUFtQixDQUFDMEIsV0FBVyxDQUFDO01BQ2hDdEIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ3hCaUYsVUFBVSxDQUFDMVksQ0FBQyxDQUFDO0lBQ2Y7RUFBRSxnQkFFRitGLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRUMsU0FBUywwREFBQXpILE1BQUEsQ0FDUHFMLGdCQUFnQixLQUFLMkIsV0FBVyxJQUFJbkIsU0FBUyxHQUN6QyxxRkFBcUYsR0FDckYsZ0RBQWdEO0VBQ25ELEdBQ0osMEdBRUssQ0FDSCxDQUFDLEVBQ0x6SCxJQUFJLENBQUN4RixHQUFHLENBQUMsVUFBQzZELEdBQUcsRUFBRWdSLEtBQUssRUFBSztJQUFBLElBQUFDLFVBQUE7SUFDeEIsSUFBTWhRLEtBQUssR0FBR3ZHLE1BQU0sRUFBQXVXLFVBQUEsR0FBQ2pSLEdBQUcsQ0FBQ2lCLEtBQUssY0FBQWdRLFVBQUEsY0FBQUEsVUFBQSxHQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFNQyxTQUFTLEdBQUdqUSxLQUFLLEdBQUcsR0FBRztJQUM3QixJQUFNa1EsVUFBVSxHQUFHSCxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzVILFNBQVM7SUFDN0Msb0JBQ0U3TixLQUFBLENBQUF3SixhQUFBO01BQUt5QixHQUFHLEVBQUV2RixLQUFNO01BQUMrRCxTQUFTLEVBQUM7SUFBb0IsR0FDNUNtTSxVQUFVLGlCQUNUNVYsS0FBQSxDQUFBd0osYUFBQTtNQUNFQyxTQUFTLGlHQUFBekgsTUFBQSxDQUNQcUwsZ0JBQWdCLEtBQUtzSSxTQUFTLEdBQUcsYUFBYSxHQUFHLFlBQVksQ0FDNUQ7TUFDSDVULEtBQUssRUFBRTtRQUNMRixNQUFNLEVBQUUsRUFBRTtRQUNWUSxhQUFhLEVBQUV3TCxTQUFTLEdBQUcsTUFBTSxHQUFHO01BQ3RDLENBQUU7TUFDRixpQ0FBQTdMLE1BQUEsQ0FBK0IwRCxLQUFLLENBQUc7TUFDdkM0UCxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUdyYixDQUFDLEVBQUs7UUFDckIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO1FBQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7UUFDbEIyQyxtQkFBbUIsQ0FBQ3FJLFNBQVMsQ0FBQztRQUM5QmpJLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUMxQixDQUFFO01BQ0Y2SCxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBR3RiLENBQUMsRUFBSztRQUNwQixJQUFJLENBQUM0VCxTQUFTLEVBQUU7UUFDaEI1VCxDQUFDLENBQUMwUSxjQUFjLENBQUMsQ0FBQztRQUNsQjJDLG1CQUFtQixDQUFDcUksU0FBUyxDQUFDO1FBQzlCakkscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQzFCLENBQUU7TUFDRjhILFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFHdmIsQ0FBQyxFQUFLO1FBQ2xCLElBQUksQ0FBQzRULFNBQVMsRUFBRTtRQUNoQjVULENBQUMsQ0FBQzBRLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCMkMsbUJBQW1CLENBQUNxSSxTQUFTLENBQUM7UUFDOUJqSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDeEJpRixVQUFVLENBQUMxWSxDQUFDLENBQUM7TUFDZjtJQUFFLGdCQUVGK0YsS0FBQSxDQUFBd0osYUFBQTtNQUNFQyxTQUFTLDhFQUFBekgsTUFBQSxDQUNQcUwsZ0JBQWdCLEtBQUtzSSxTQUFTLEdBQzFCLHFGQUFxRixHQUNyRixnREFBZ0Q7SUFDbkQsR0FDSixxRUFFSyxDQUNILENBQ04sZUFDRDNWLEtBQUEsQ0FBQXdKLGFBQUE7TUFDRUMsU0FBUyxzSUFBQXpILE1BQUEsQ0FDUHFMLGdCQUFnQixLQUFLM0gsS0FBSyxHQUFHLDJEQUEyRCxHQUFHLEVBQUUsQ0FDNUY7TUFDSCxlQUFhQSxLQUFNO01BQ25CNlAsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUd0YixDQUFDLEVBQUs7UUFDcEIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO1FBQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7UUFDbEIsSUFBTXJELE1BQU0sR0FBR3JOLENBQUMsQ0FBQ3NILGFBQWE7UUFDOUIrTCxtQkFBbUIsQ0FBQzVILEtBQUssQ0FBQztRQUMxQixJQUFNbVEsUUFBUSxHQUFHM1gsS0FBSyxDQUFDMkIsSUFBSSxDQUFDeUgsTUFBTSxDQUFDd08sZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDdlgsTUFBTSxDQUNqRixVQUFDd0MsSUFBSTtVQUFBLE9BQUtBLElBQUksQ0FBQ2dWLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLbkosVUFBVTtRQUFBLENBQzlDLENBQUM7UUFDRCxJQUFJbkksS0FBSyxHQUFHbVIsUUFBUSxDQUFDcGEsTUFBTTtRQUMzQixLQUFLLElBQUloQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdvYixRQUFRLENBQUNwYSxNQUFNLEVBQUVoQixDQUFDLElBQUksQ0FBQyxFQUFFO1VBQzNDLElBQU02RyxJQUFJLEdBQUd1VSxRQUFRLENBQUNwYixDQUFDLENBQUMsQ0FBQytHLHFCQUFxQixDQUFDLENBQUM7VUFDaEQsSUFBTXlVLFFBQVEsR0FBRzNVLElBQUksQ0FBQ2EsSUFBSSxHQUFHYixJQUFJLENBQUNLLEtBQUssR0FBRyxDQUFDO1VBQzNDLElBQUkxSCxDQUFDLENBQUNnSixPQUFPLEdBQUdnVCxRQUFRLEVBQUU7WUFDeEJ2UixLQUFLLEdBQUdqSyxDQUFDO1lBQ1Q7VUFDRjtVQUNBLElBQUlBLENBQUMsS0FBS29iLFFBQVEsQ0FBQ3BhLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0JpSixLQUFLLEdBQUdqSyxDQUFDLEdBQUcsQ0FBQztVQUNmO1FBQ0Y7UUFDQWlULHFCQUFxQixDQUFDaEosS0FBSyxDQUFDO01BQzlCLENBQUU7TUFDRndSLGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBQSxFQUFRO1FBQ3BCNUksbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7TUFDN0IsQ0FBRTtNQUNGOEgsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUd2YixDQUFDLEVBQUs7UUFDbEIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO1FBQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7UUFDbEJnSSxVQUFVLENBQUMxWSxDQUFDLENBQUM7TUFDZjtJQUFFLEdBRUEsWUFBTTtNQUNOLElBQU1rYyxjQUFjLEdBQ2xCdEksU0FBUyxJQUNUUixnQkFBZ0IsS0FBSzNILEtBQUssSUFDMUIrSCxrQkFBa0IsS0FBSyxJQUFJLEdBQ3ZCbEgsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ0UsR0FBRyxDQUFDZ0gsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEVBQUVoSixHQUFHLENBQUNQLE9BQU8sQ0FBQ3pJLE1BQU0sQ0FBQyxHQUM3RCxJQUFJO01BQ1YsSUFBTTJhLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUluTCxHQUFHO1FBQUEsb0JBQzVCakwsS0FBQSxDQUFBd0osYUFBQTtVQUNFeUIsR0FBRyxFQUFFQSxHQUFJO1VBQ1R4QixTQUFTLEVBQUM7UUFBZ0osQ0FDM0osQ0FBQztNQUFBLENBQ0g7TUFDRCxJQUFNNE0sY0FBYyxHQUFHNVIsR0FBRyxDQUFDUCxPQUFPLENBQUMzRixNQUFNLENBQUMsVUFBQ3dHLEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUN4RSxFQUFFLEtBQUtzTSxVQUFVO01BQUEsRUFBQztNQUN6RSxJQUFNeUosS0FBSyxHQUFBbFgsa0JBQUEsQ0FBT2lYLGNBQWMsQ0FBQztNQUNqQyxJQUFJRixjQUFjLEtBQUssSUFBSSxFQUFFO1FBQzNCRyxLQUFLLENBQUM1UCxNQUFNLENBQ1ZILElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQzBQLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRUcsS0FBSyxDQUFDN2EsTUFBTSxDQUFDLEVBQ25ELENBQUMsRUFDRDJhLGlCQUFpQixnQkFBQXBVLE1BQUEsQ0FBZ0IwRCxLQUFLLE9BQUExRCxNQUFBLENBQUltVSxjQUFjLENBQUUsQ0FDNUQsQ0FBQztNQUNIO01BQ0EsT0FBT0csS0FBSyxDQUFDMVYsR0FBRyxDQUFDLFVBQUMyVixnQkFBZ0IsRUFBRWQsS0FBSyxFQUFLO1FBQUEsSUFBQWUsVUFBQTtRQUM1QyxJQUFJLENBQUNELGdCQUFnQixFQUFFLE9BQU8sSUFBSTtRQUNsQyxJQUFJdlcsS0FBSyxDQUFDeVcsY0FBYyxDQUFDRixnQkFBZ0IsQ0FBQyxFQUFFLE9BQU9BLGdCQUFnQjtRQUNuRSxJQUFNeFIsR0FBRyxHQUFHd1IsZ0JBQWdCO1FBQzVCLG9CQUNFdlcsS0FBQSxDQUFBd0osYUFBQTtVQUNFeUIsR0FBRyxFQUFFbEcsR0FBRyxDQUFDeEUsRUFBRztVQUNaNEcsSUFBSSxFQUFDLFFBQVE7VUFDYixnQkFBY3BDLEdBQUcsQ0FBQ3hFLEVBQUc7VUFDckIsZUFBQWlXLFVBQUEsR0FBWXpSLEdBQUcsQ0FBQ0wsS0FBSyxjQUFBOFIsVUFBQSxjQUFBQSxVQUFBLEdBQUlmLEtBQU07VUFDL0JpQixTQUFTLEVBQUUsS0FBTTtVQUNqQjNVLEtBQUssRUFBRWdJLFNBQVMsR0FBRztZQUFFc0gsV0FBVyxFQUFFO1VBQU8sQ0FBQyxHQUFHeE4sU0FBVTtVQUN2RDhTLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFHMWMsQ0FBQyxFQUFLO1lBQUEsSUFBQTJjLFdBQUE7WUFDcEIsSUFBSSxDQUFDN00sU0FBUyxFQUFFO1lBQ2hCK0YsU0FBUyxDQUNQO2NBQ0V2UCxFQUFFLEVBQUV3RSxHQUFHLENBQUN4RSxFQUFFO2NBQ1ZxVCxPQUFPLEVBQUV6VSxNQUFNLENBQUM0RixHQUFHLENBQUNOLEdBQUcsSUFBSSxDQUFDLENBQUM7Y0FDN0JvUCxTQUFTLEVBQUUxVSxNQUFNLEVBQUF5WCxXQUFBLEdBQUM3UixHQUFHLENBQUNMLEtBQUssY0FBQWtTLFdBQUEsY0FBQUEsV0FBQSxHQUFJbkIsS0FBSyxDQUFDO2NBQ3JDdkYsTUFBTSxFQUFFLE1BQU07Y0FDZC9JLElBQUksRUFBRXBDLEdBQUcsQ0FBQ29DO1lBQ1osQ0FBQyxFQUNEbE4sQ0FBQyxDQUFDc0gsYUFBYSxFQUNmdEgsQ0FDRixDQUFDO1VBQ0gsQ0FBRTtVQUNGd1AsU0FBUyx5U0FBQXpILE1BQUEsQ0FDUCtILFNBQVMsR0FBRyxvQ0FBb0MsR0FBRyxnQkFBZ0IsT0FBQS9ILE1BQUEsQ0FFbkU2SyxVQUFVLEtBQUs5SCxHQUFHLENBQUN4RSxFQUFFLEdBQUcsd0NBQXdDLEdBQUcsNEJBQTRCLENBQzlGO1VBQ0hnVSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtZQUFBLE9BQ0x4UCxHQUFHLENBQUNzQyxjQUFjLEdBQUdnRSxVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBR3RHLEdBQUcsQ0FBQ3NDLGNBQWMsQ0FBQyxHQUFHK0QsY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUdyRyxHQUFHLENBQUN4RSxFQUFFLENBQUM7VUFBQTtRQUNqRixnQkFFRFAsS0FBQSxDQUFBd0osYUFBQTtVQUFLQyxTQUFTLEVBQUM7UUFBeUIsZ0JBQ3RDekosS0FBQSxDQUFBd0osYUFBQTtVQUFNQyxTQUFTLEVBQUM7UUFBVSxHQUFFMUUsR0FBRyxDQUFDdkUsS0FBWSxDQUN6QyxDQUNDLENBQUM7TUFFYixDQUFDLENBQUM7SUFDSixDQUFDLENBQUUsQ0FDQSxDQUNGLENBQUM7RUFFVixDQUFDLENBQUMsZUFDRlIsS0FBQSxDQUFBd0osYUFBQTtJQUNFQyxTQUFTLDZCQUFBekgsTUFBQSxDQUE2QjZMLFNBQVMsR0FBRyxNQUFNLEdBQUcscUJBQXFCLGtFQUFnRTtJQUNoSjlMLEtBQUssRUFBRTtNQUNMNE4sTUFBTSxFQUFFOUIsU0FBUyxHQUFHLE9BQU8sR0FBRyxNQUFNO01BQ3BDaE0sTUFBTSxFQUFFZ00sU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDO01BQzFCbkwsT0FBTyxFQUFFbUwsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDO01BQzFCeEwsYUFBYSxFQUFFd0wsU0FBUyxHQUFHLE1BQU0sR0FBRztJQUN0QyxDQUFFO0lBQ0YsdUJBQW9CLFFBQVE7SUFDNUJ5SCxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUdyYixDQUFDLEVBQUs7TUFDckIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO01BQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIyQyxtQkFBbUIsQ0FBQzZCLGNBQWMsQ0FBQztNQUNuQ3pCLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFFO0lBQ0Y2SCxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBR3RiLENBQUMsRUFBSztNQUNwQixJQUFJLENBQUM0VCxTQUFTLEVBQUU7TUFDaEI1VCxDQUFDLENBQUMwUSxjQUFjLENBQUMsQ0FBQztNQUNsQjJDLG1CQUFtQixDQUFDNkIsY0FBYyxDQUFDO01BQ25DekIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUU7SUFDRjhILFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFHdmIsQ0FBQyxFQUFLO01BQ2xCLElBQUksQ0FBQzRULFNBQVMsRUFBRTtNQUNoQjVULENBQUMsQ0FBQzBRLGNBQWMsQ0FBQyxDQUFDO01BQ2xCMkMsbUJBQW1CLENBQUM2QixjQUFjLENBQUM7TUFDbkN6QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDeEJpRixVQUFVLENBQUMxWSxDQUFDLENBQUM7SUFDZjtFQUFFLGdCQUVGK0YsS0FBQSxDQUFBd0osYUFBQTtJQUNFQyxTQUFTLDBEQUFBekgsTUFBQSxDQUNQcUwsZ0JBQWdCLEtBQUs4QixjQUFjLElBQUl0QixTQUFTLEdBQzVDLHFGQUFxRixHQUNyRixnREFBZ0Q7RUFDbkQsR0FDSixvR0FFSyxDQUNILENBQ0wsQ0FBQyxnQkFFSDdOLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRUMsU0FBUyxFQUFDLGlJQUFpSTtJQUMzSThMLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFHdGIsQ0FBQyxFQUFLO01BQ3BCLElBQUksQ0FBQzRULFNBQVMsRUFBRTtNQUNoQjVULENBQUMsQ0FBQzBRLGNBQWMsQ0FBQyxDQUFDO01BQ2xCMkMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO01BQ3RCSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBRTtJQUNGOEgsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUd2YixDQUFDLEVBQUs7TUFDbEIsSUFBSSxDQUFDNFQsU0FBUyxFQUFFO01BQ2hCNVQsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIyQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7TUFDdEJJLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUN4QmlGLFVBQVUsQ0FBQzFZLENBQUMsQ0FBQztJQUNmLENBQUU7SUFDRmljLGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBQSxFQUFRO01BQ3BCNUksbUJBQW1CLENBQUMsSUFBSSxDQUFDO01BQ3pCSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7SUFDN0I7RUFBRSxHQUNILGdEQUVJLENBRUosQ0FDRixDQUNGLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFHRCxJQUFNbUosY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBQyxNQUFBLEVBQWdGO0VBQUEsSUFBQUMsZUFBQTtFQUFBLElBQTFFN08sSUFBSSxHQUFBNE8sTUFBQSxDQUFKNU8sSUFBSTtJQUFFbUUsTUFBTSxHQUFBeUssTUFBQSxDQUFOekssTUFBTTtJQUFFMkssUUFBUSxHQUFBRixNQUFBLENBQVJFLFFBQVE7SUFBRXpLLFFBQVEsR0FBQXVLLE1BQUEsQ0FBUnZLLFFBQVE7SUFBRTBLLGNBQWMsR0FBQUgsTUFBQSxDQUFkRyxjQUFjO0lBQUVDLGlCQUFpQixHQUFBSixNQUFBLENBQWpCSSxpQkFBaUI7RUFDM0YsSUFBQUMsV0FBQSxHQUEwQmxYLFFBQVEsQ0FBQztNQUFBLE9BQU1nSSxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDO0lBQUEsRUFBQztJQUFBa1AsV0FBQSxHQUFBelosY0FBQSxDQUFBd1osV0FBQTtJQUEzREUsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUN0QixJQUFBRyxXQUFBLEdBQTRDdFgsUUFBUSxDQUFDO01BQUEsSUFBQXVYLHFCQUFBO01BQUEsT0FDbkQsRUFBQUEscUJBQUEsR0FBQXZQLGtCQUFrQixDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFBcVAscUJBQUEsdUJBQW5DQSxxQkFBQSxDQUFxQ2pYLEVBQUUsS0FBSSxNQUFNO0lBQUEsQ0FDbkQsQ0FBQztJQUFBa1gsV0FBQSxHQUFBOVosY0FBQSxDQUFBNFosV0FBQTtJQUZNRyxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFHeEMsSUFBQUcsV0FBQSxHQUFnRDNYLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTRYLFdBQUEsR0FBQWxhLGNBQUEsQ0FBQWlhLFdBQUE7SUFBdkRFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBa0MvWCxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFnWSxXQUFBLEdBQUF0YSxjQUFBLENBQUFxYSxXQUFBO0lBQTFDak8sU0FBUyxHQUFBa08sV0FBQTtJQUFFQyxZQUFZLEdBQUFELFdBQUE7RUFDOUIsSUFBQUUsV0FBQSxHQUEwQmxZLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQW1ZLFdBQUEsR0FBQXphLGNBQUEsQ0FBQXdhLFdBQUE7SUFBbENFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxRQUFRLEdBQUFGLFdBQUE7RUFDdEIsSUFBQUcsV0FBQSxHQUE4QnRZLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXVZLFdBQUEsR0FBQTdhLGNBQUEsQ0FBQTRhLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBTUcsWUFBWSxHQUFHdFksTUFBTSxDQUFDLElBQUksQ0FBQztFQUNqQyxJQUFBdVksV0FBQSxHQUF3QzNZLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTRZLFdBQUEsR0FBQWxiLGNBQUEsQ0FBQWliLFdBQUE7SUFBaERFLFlBQVksR0FBQUQsV0FBQTtJQUFFRSxlQUFlLEdBQUFGLFdBQUE7RUFDcEMsSUFBQUcsV0FBQSxHQUEwQy9ZLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWdaLFdBQUEsR0FBQXRiLGNBQUEsQ0FBQXFiLFdBQUE7SUFBakRFLGFBQWEsR0FBQUQsV0FBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsV0FBQTtFQUN0QyxJQUFBRyxXQUFBLEdBQW9DblosUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb1osV0FBQSxHQUFBMWIsY0FBQSxDQUFBeWIsV0FBQTtJQUF6Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQTRDdlosUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBd1osV0FBQSxHQUFBOWIsY0FBQSxDQUFBNmIsV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBQ3hDLElBQUFHLFdBQUEsR0FBb0MzWixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE0WixXQUFBLEdBQUFsYyxjQUFBLENBQUFpYyxXQUFBO0lBQTVDM1AsVUFBVSxHQUFBNFAsV0FBQTtJQUFFQyxhQUFhLEdBQUFELFdBQUE7RUFDaEMsSUFBTUUsaUJBQWlCLEdBQUcxWixNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ3RDLElBQU1nUyxVQUFVLEdBQUdoUyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBRS9CSCxTQUFTLENBQUMsWUFBTTtJQUNkLElBQU04WixPQUFPLEdBQUcsNEJBQTRCO0lBQzVDLElBQUluWCxRQUFRLENBQUNvWCxjQUFjLENBQUNELE9BQU8sQ0FBQyxFQUFFO0lBQ3RDLElBQU1qWSxLQUFLLEdBQUdjLFFBQVEsQ0FBQzJHLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDN0N6SCxLQUFLLENBQUN4QixFQUFFLEdBQUd5WixPQUFPO0lBQ2xCalksS0FBSyxDQUFDbVksV0FBVyx1cUJBTWhCO0lBQ0RyWCxRQUFRLENBQUNzWCxJQUFJLENBQUNwWCxXQUFXLENBQUNoQixLQUFLLENBQUM7RUFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVON0IsU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFJLENBQUM2SixTQUFTLEVBQUU7TUFDZG9QLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN4QjtFQUNGLENBQUMsRUFBRSxDQUFDcFAsU0FBUyxDQUFDLENBQUM7RUFFZjdKLFNBQVMsQ0FBQztJQUFBLE9BQU0sWUFBTTtNQUNwQnlZLFlBQVksQ0FBQy9OLE9BQU8sR0FBRyxLQUFLO0lBQzlCLENBQUM7RUFBQSxHQUFFLEVBQUUsQ0FBQztFQUVOMUssU0FBUyxDQUFDLFlBQU07SUFDZCxJQUFNa2EsVUFBVSxHQUFHblMsa0JBQWtCLENBQUNDLElBQUksQ0FBQztJQUMzQ29QLFFBQVEsQ0FBQzhDLFVBQVUsQ0FBQztJQUNwQixJQUFJLENBQUNBLFVBQVUsQ0FBQ2pTLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxVQUFDK1EsQ0FBQztNQUFBLE9BQUtBLENBQUMsQ0FBQzlaLEVBQUUsS0FBS21YLGNBQWM7SUFBQSxFQUFDLEVBQUU7TUFBQSxJQUFBNEMsb0JBQUE7TUFDNUQzQyxpQkFBaUIsQ0FBQyxFQUFBMkMsb0JBQUEsR0FBQUYsVUFBVSxDQUFDalMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFBbVMsb0JBQUEsdUJBQXJCQSxvQkFBQSxDQUF1Qi9aLEVBQUUsS0FBSSxNQUFNLENBQUM7SUFDeEQ7SUFDQXdYLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUN6Qk8sUUFBUSxDQUFDLEtBQUssQ0FBQztFQUNqQixDQUFDLEVBQUUsQ0FBQ3BRLElBQUksQ0FBQyxDQUFDO0VBRVYsSUFBTXFTLGNBQWMsR0FBR25hLFdBQVcsY0FBQWpELGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFDLFNBQUFnZSxTQUFBO0lBQUEsSUFBQWpULE9BQUEsRUFBQXBCLElBQUEsRUFBQXNVLEdBQUE7SUFBQSxPQUFBbmUsWUFBQSxHQUFBQyxDQUFBLFdBQUFtZSxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXhmLENBQUEsR0FBQXdmLFNBQUEsQ0FBQXJnQixDQUFBO1FBQUE7VUFBQSxNQUM3QixDQUFDNGMsY0FBYyxJQUFJLE9BQU8wRCxLQUFLLEtBQUssVUFBVTtZQUFBRCxTQUFBLENBQUFyZ0IsQ0FBQTtZQUFBO1VBQUE7VUFBQSxPQUFBcWdCLFNBQUEsQ0FBQXBmLENBQUEsSUFBUyxFQUFFO1FBQUE7VUFDN0RxZSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7VUFBQ2UsU0FBQSxDQUFBeGYsQ0FBQTtVQUFBd2YsU0FBQSxDQUFBcmdCLENBQUE7VUFBQSxPQUVDLE9BQU80YyxjQUFjLEtBQUssVUFBVSxHQUN2REEsY0FBYyxDQUFDLENBQUMsR0FDaEIwRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3pkLElBQUksQ0FBQyxVQUFDMGQsR0FBRztZQUFBLE9BQUtBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7VUFBQSxFQUFDO1FBQUE7VUFGckR0VCxPQUFPLEdBQUFtVCxTQUFBLENBQUFyZixDQUFBO1VBR1A4SyxJQUFJLEdBQUdqSSxLQUFLLENBQUNDLE9BQU8sQ0FBQ29KLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFdVQsTUFBTSxDQUFDLEdBQUd2VCxPQUFPLENBQUN1VCxNQUFNLEdBQUc1YyxLQUFLLENBQUNDLE9BQU8sQ0FBQ29KLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUcsRUFBRTtVQUNwR2dTLGFBQWEsQ0FBQ3BULElBQUksQ0FBQztVQUFDLE9BQUF1VSxTQUFBLENBQUFwZixDQUFBLElBQ2I2SyxJQUFJO1FBQUE7VUFBQXVVLFNBQUEsQ0FBQXhmLENBQUE7VUFBQXVmLEdBQUEsR0FBQUMsU0FBQSxDQUFBcmYsQ0FBQTtVQUVYc1YsT0FBTyxDQUFDekgsS0FBSyxDQUFDLHdCQUF3QixFQUFBdVIsR0FBTyxDQUFDO1VBQUMsT0FBQUMsU0FBQSxDQUFBcGYsQ0FBQSxJQUN4QyxFQUFFO1FBQUE7VUFBQW9mLFNBQUEsQ0FBQXhmLENBQUE7VUFFVHllLGlCQUFpQixDQUFDLEtBQUssQ0FBQztVQUFDLE9BQUFlLFNBQUEsQ0FBQXpmLENBQUE7UUFBQTtVQUFBLE9BQUF5ZixTQUFBLENBQUFwZixDQUFBO01BQUE7SUFBQSxHQUFBa2YsUUFBQTtFQUFBLENBRTVCLElBQUUsQ0FBQ3ZELGNBQWMsQ0FBQyxDQUFDO0VBRXBCL1csU0FBUyxDQUFDLFlBQU07SUFDZHFhLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCLENBQUMsRUFBRSxDQUFDQSxjQUFjLENBQUMsQ0FBQztFQUVwQixJQUFNUSxZQUFZLEdBQUc1YSxPQUFPLENBQzFCO0lBQUEsT0FBTWtYLEtBQUssQ0FBQ2xQLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxVQUFDNUIsTUFBTTtNQUFBLE9BQUtBLE1BQU0sQ0FBQ25ILEVBQUUsS0FBS21YLGNBQWM7SUFBQSxFQUFDLElBQUlMLEtBQUssQ0FBQ2xQLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFBQSxHQUN0RixDQUFDa1AsS0FBSyxDQUFDbFAsT0FBTyxFQUFFdVAsY0FBYyxDQUNoQyxDQUFDO0VBQ0QsSUFBTXNELFdBQVcsR0FBRyxDQUFBRCxZQUFZLGFBQVpBLFlBQVksdUJBQVpBLFlBQVksQ0FBRWxULEtBQUssT0FBQWtQLGVBQUEsR0FBSU0sS0FBSyxDQUFDbFAsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFBNE8sZUFBQSx1QkFBaEJBLGVBQUEsQ0FBa0JsUCxLQUFLLEtBQUksTUFBTTtFQUU1RSxJQUFNb1QsWUFBWSxHQUFHN2EsV0FBVyxDQUM5QixVQUFDNkcsUUFBUSxFQUFFaVUsT0FBTyxFQUFLO0lBQ3JCNUQsUUFBUSxDQUFDLFVBQUM2RCxJQUFJLEVBQUs7TUFDakIsSUFBTWhULE9BQU8sR0FBR2dULElBQUksQ0FBQ2hULE9BQU8sQ0FBQ3ZILEdBQUcsQ0FBQyxVQUFDOEcsTUFBTTtRQUFBLE9BQ3RDQSxNQUFNLENBQUNuSCxFQUFFLEtBQUswRyxRQUFRLEdBQUF4SSxhQUFBLENBQUFBLGFBQUEsS0FBUWlKLE1BQU0sR0FBS3dULE9BQU8sQ0FBQ3hULE1BQU0sQ0FBQyxJQUFLQSxNQUFNO01BQUEsQ0FDckUsQ0FBQztNQUNELE9BQUFqSixhQUFBLENBQUFBLGFBQUEsS0FBWTBjLElBQUk7UUFBRWhULE9BQU8sRUFBUEE7TUFBTztJQUMzQixDQUFDLENBQUM7SUFDRm1RLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDaEIsQ0FBQyxFQUNELEVBQ0YsQ0FBQztFQUVELElBQU04QyxTQUFTLEdBQUdoYixXQUFXLENBQUMsWUFBTTtJQUNsQ2tYLFFBQVEsQ0FBQyxVQUFDNkQsSUFBSSxFQUFLO01BQ2pCLElBQU0xRixLQUFLLEdBQUcwRixJQUFJLENBQUNoVCxPQUFPLENBQUMxTSxNQUFNLEdBQUcsQ0FBQztNQUNyQyxJQUFNOEUsRUFBRSxHQUFHcUQsVUFBVSxXQUFBNUIsTUFBQSxDQUFXeVQsS0FBSyxDQUFFLENBQUM7TUFDeEMsSUFBTS9OLE1BQU0sR0FBR0QsZUFBZSxDQUM1QjtRQUFFbEgsRUFBRSxFQUFGQSxFQUFFO1FBQUVzSCxLQUFLLG9DQUFBN0YsTUFBQSxDQUFXeVQsS0FBSyxDQUFFO1FBQUUzTixPQUFPLEVBQUUsRUFBRTtRQUFFNUQsT0FBTyxFQUFFO01BQUcsQ0FBQyxFQUN6RHVSLEtBQUssR0FBRyxDQUNWLENBQUM7TUFDRCxPQUFBaFgsYUFBQSxDQUFBQSxhQUFBLEtBQVkwYyxJQUFJO1FBQUVoVCxPQUFPLEtBQUFuRyxNQUFBLENBQUE1QyxrQkFBQSxDQUFNK2IsSUFBSSxDQUFDaFQsT0FBTyxJQUFFVCxNQUFNO01BQUM7SUFDdEQsQ0FBQyxDQUFDO0lBQ0Y0USxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNK0MsWUFBWSxHQUFHamIsV0FBVyxDQUM5QixVQUFDNkcsUUFBUSxFQUFLO0lBQ1pxUSxRQUFRLENBQUMsVUFBQzZELElBQUksRUFBSztNQUFBLElBQUFHLFVBQUE7TUFDakIsSUFBSUgsSUFBSSxDQUFDaFQsT0FBTyxDQUFDMU0sTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPMGYsSUFBSTtNQUN6QyxJQUFNNVYsUUFBUSxHQUFHNFYsSUFBSSxDQUFDaFQsT0FBTyxDQUFDNUosTUFBTSxDQUFDLFVBQUNtSixNQUFNO1FBQUEsT0FBS0EsTUFBTSxDQUFDbkgsRUFBRSxLQUFLMEcsUUFBUTtNQUFBLEVBQUM7TUFDeEUsSUFBTXNVLFVBQVUsR0FBRyxFQUFBRCxVQUFBLEdBQUEvVixRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQUErVixVQUFBLHVCQUFYQSxVQUFBLENBQWEvYSxFQUFFLEtBQUksSUFBSTtNQUMxQ29YLGlCQUFpQixDQUFDLFVBQUMvTSxPQUFPO1FBQUEsT0FBTUEsT0FBTyxLQUFLM0QsUUFBUSxHQUFHc1UsVUFBVSxHQUFHM1EsT0FBTztNQUFBLENBQUMsQ0FBQztNQUM3RSxPQUFBbk0sYUFBQSxDQUFBQSxhQUFBLEtBQVkwYyxJQUFJO1FBQUVoVCxPQUFPLEVBQUU1QztNQUFRO0lBQ3JDLENBQUMsQ0FBQztJQUNGK1MsUUFBUSxDQUFDLElBQUksQ0FBQztFQUNoQixDQUFDLEVBQ0QsRUFDRixDQUFDO0VBRUQsSUFBTWtELFVBQVUsR0FBR3BiLFdBQVcsQ0FDNUIsVUFBQzZHLFFBQVEsRUFBRXdVLEtBQUssRUFBSztJQUNuQm5FLFFBQVEsQ0FBQyxVQUFDNkQsSUFBSSxFQUFLO01BQ2pCLElBQU1yVSxHQUFHLEdBQUdxVSxJQUFJLENBQUNoVCxPQUFPLENBQUN1VCxTQUFTLENBQUMsVUFBQ2hVLE1BQU07UUFBQSxPQUFLQSxNQUFNLENBQUNuSCxFQUFFLEtBQUswRyxRQUFRO01BQUEsRUFBQztNQUN0RSxJQUFJSCxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU9xVSxJQUFJO01BQ3hCLElBQU1RLFNBQVMsR0FBRzdVLEdBQUcsR0FBRzJVLEtBQUs7TUFDN0IsSUFBSUUsU0FBUyxHQUFHLENBQUMsSUFBSUEsU0FBUyxJQUFJUixJQUFJLENBQUNoVCxPQUFPLENBQUMxTSxNQUFNLEVBQUUsT0FBTzBmLElBQUk7TUFDbEUsSUFBTWhULE9BQU8sR0FBQS9JLGtCQUFBLENBQU8rYixJQUFJLENBQUNoVCxPQUFPLENBQUM7TUFDakMsSUFBQXlULGVBQUEsR0FBZXpULE9BQU8sQ0FBQ3pCLE1BQU0sQ0FBQ0ksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUFBK1UsZ0JBQUEsR0FBQWxlLGNBQUEsQ0FBQWllLGVBQUE7UUFBOUIvYSxJQUFJLEdBQUFnYixnQkFBQTtNQUNYMVQsT0FBTyxDQUFDekIsTUFBTSxDQUFDaVYsU0FBUyxFQUFFLENBQUMsRUFBRTlhLElBQUksQ0FBQztNQUNsQyxPQUFBcEMsYUFBQSxDQUFBQSxhQUFBLEtBQVkwYyxJQUFJO1FBQUVoVCxPQUFPLEVBQVBBO01BQU87SUFDM0IsQ0FBQyxDQUFDO0lBQ0ZtUSxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hCLENBQUMsRUFDRCxFQUNGLENBQUM7RUFFRCxJQUFNd0QsWUFBWSxHQUFHMWIsV0FBVyxDQUM5QixVQUFDMmIsUUFBUSxFQUFFQyxVQUFVLEVBQUs7SUFDeEIsSUFBSSxDQUFDakIsWUFBWSxFQUFFO0lBQ25CRSxZQUFZLENBQUNGLFlBQVksQ0FBQ3hhLEVBQUUsRUFBRSxVQUFDbUgsTUFBTSxFQUFLO01BQ3hDLElBQU14RCxPQUFPLEdBQUcsQ0FBQ3dELE1BQU0sQ0FBQ3hELE9BQU8sSUFBSSxFQUFFLEVBQUV0RCxHQUFHLENBQUMsVUFBQ21FLEdBQUc7UUFBQSxPQUM3Q0EsR0FBRyxDQUFDeEUsRUFBRSxLQUFLd2IsUUFBUSxHQUFHaFYsZUFBZSxDQUFDaVYsVUFBVSxFQUFFLENBQUMsRUFBRXRVLE1BQU0sQ0FBQ25ILEVBQUUsQ0FBQyxHQUFHd0UsR0FBRztNQUFBLENBQ3ZFLENBQUM7TUFDRCxPQUFPO1FBQUViLE9BQU8sRUFBRVMsb0JBQW9CLENBQUNULE9BQU87TUFBRSxDQUFDO0lBQ25ELENBQUMsQ0FBQztFQUNKLENBQUMsRUFDRCxDQUFDNlcsWUFBWSxFQUFFRSxZQUFZLENBQzdCLENBQUM7RUFFRCxJQUFNZ0IsVUFBVSxHQUFHN2IsV0FBVyxDQUM1QixVQUFDMmIsUUFBUSxFQUFFN1csU0FBUyxFQUE0QztJQUFBLElBQTFDQyxXQUFXLEdBQUEvSCxTQUFBLENBQUEzQixNQUFBLFFBQUEyQixTQUFBLFFBQUF5RyxTQUFBLEdBQUF6RyxTQUFBLE1BQUcsQ0FBQztJQUFBLElBQUVrSSxZQUFZLEdBQUFsSSxTQUFBLENBQUEzQixNQUFBLFFBQUEyQixTQUFBLFFBQUF5RyxTQUFBLEdBQUF6RyxTQUFBLE1BQUcsS0FBSztJQUN6RCxJQUFJLENBQUMyZCxZQUFZLEVBQUU7SUFDbkJFLFlBQVksQ0FBQ0YsWUFBWSxDQUFDeGEsRUFBRSxFQUFFLFVBQUNtSCxNQUFNLEVBQUs7TUFDeEMsSUFBTXhELE9BQU8sR0FBR3dELE1BQU0sQ0FBQ3hELE9BQU8sSUFBSSxFQUFFO01BQ3BDLElBQU1yRCxJQUFJLEdBQUdxRCxPQUFPLENBQUNvRixJQUFJLENBQUMsVUFBQ3ZFLEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUN4RSxFQUFFLEtBQUt3YixRQUFRO01BQUEsRUFBQztNQUN2RCxJQUFJLENBQUNsYixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDcEIsSUFBTXFiLE1BQU0sR0FBR2xYLHNCQUFzQixDQUFDZCxPQUFPLEVBQUF6RixhQUFBLEtBQU9vQyxJQUFJLEdBQUlxRSxTQUFTLEVBQUVDLFdBQVcsRUFBRTtRQUFFRyxZQUFZLEVBQVpBO01BQWEsQ0FBQyxDQUFDO01BQ3JHLE9BQU87UUFBRXBCLE9BQU8sRUFBRWdZO01BQU8sQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDLEVBQ0QsQ0FBQ25CLFlBQVksRUFBRUUsWUFBWSxDQUM3QixDQUFDO0VBRUQsSUFBTWtCLG9CQUFvQixHQUFHL2IsV0FBVyxDQUN0QyxVQUFDK0csSUFBSSxFQUErQztJQUFBLElBQTdDMUMsR0FBRyxHQUFBckgsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFc0gsS0FBSyxHQUFBdEgsU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFa0ksWUFBWSxHQUFBbEksU0FBQSxDQUFBM0IsTUFBQSxRQUFBMkIsU0FBQSxRQUFBeUcsU0FBQSxHQUFBekcsU0FBQSxNQUFHLEtBQUs7SUFDN0MsSUFBSSxDQUFDMmQsWUFBWSxFQUFFO0lBQ25CRSxZQUFZLENBQUNGLFlBQVksQ0FBQ3hhLEVBQUUsRUFBRSxVQUFDbUgsTUFBTSxFQUFLO01BQUEsSUFBQTBVLHFCQUFBO01BQ3hDLElBQU1sWSxPQUFPLEdBQUd3RCxNQUFNLENBQUN4RCxPQUFPLEdBQUE5RSxrQkFBQSxDQUFPc0ksTUFBTSxDQUFDeEQsT0FBTyxJQUFJLEVBQUU7TUFDekQsSUFBTXlYLFNBQVMsR0FBR3pYLE9BQU8sQ0FBQ3pJLE1BQU0sR0FBRyxDQUFDO01BQ3BDLElBQU00Z0IsTUFBTSxHQUFHdFYsZUFBZSxDQUM1QjtRQUNFeEcsRUFBRSxTQUFBeUIsTUFBQSxDQUFTMEYsTUFBTSxDQUFDbkgsRUFBRSxPQUFBeUIsTUFBQSxDQUFJMlosU0FBUyxDQUFFO1FBQ25DbmIsS0FBSyxLQUFBd0IsTUFBQSxDQUFLLEVBQUFvYSxxQkFBQSxHQUFBOWIsZ0JBQWdCLENBQUNnSixJQUFJLENBQUMsVUFBQ3BQLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUNxRyxFQUFFLEtBQUs0RyxJQUFJO1FBQUEsRUFBQyxjQUFBaVYscUJBQUEsdUJBQTNDQSxxQkFBQSxDQUE2QzViLEtBQUssS0FBSSxRQUFRLENBQUU7UUFDMUUyRyxJQUFJLEVBQUpBLElBQUk7UUFDSkUsY0FBYyxFQUFFLElBQUk7UUFDcEI1QyxHQUFHLEVBQUhBLEdBQUc7UUFDSEMsS0FBSyxFQUFMQTtNQUNGLENBQUMsRUFDRGlYLFNBQVMsR0FBRyxDQUFDLEVBQ2JqVSxNQUFNLENBQUNuSCxFQUNULENBQUM7TUFDRCxJQUFNMmIsTUFBTSxHQUFHbFgsc0JBQXNCLENBQUNkLE9BQU8sRUFBRW1ZLE1BQU0sRUFBRTVYLEdBQUcsRUFBRUMsS0FBSyxFQUFFO1FBQUVZLFlBQVksRUFBWkE7TUFBYSxDQUFDLENBQUM7TUFDcEZ5UyxtQkFBbUIsQ0FBQ3NFLE1BQU0sQ0FBQzliLEVBQUUsQ0FBQztNQUM5QixPQUFPO1FBQUUyRCxPQUFPLEVBQUVnWTtNQUFPLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUNELENBQUNuQixZQUFZLEVBQUVFLFlBQVksQ0FDN0IsQ0FBQztFQUVELElBQU1xQixZQUFZLEdBQUdsYyxXQUFXLENBQzlCLFVBQUMyYixRQUFRLEVBQUs7SUFDWixJQUFJLENBQUNoQixZQUFZLElBQUksQ0FBQ2dCLFFBQVEsRUFBRTtJQUNoQ2QsWUFBWSxDQUFDRixZQUFZLENBQUN4YSxFQUFFLEVBQUUsVUFBQ21ILE1BQU07TUFBQSxPQUFNO1FBQ3pDeEQsT0FBTyxFQUFFLENBQUN3RCxNQUFNLENBQUN4RCxPQUFPLElBQUksRUFBRSxFQUFFM0YsTUFBTSxDQUFDLFVBQUN3RyxHQUFHO1VBQUEsT0FBS0EsR0FBRyxDQUFDeEUsRUFBRSxLQUFLd2IsUUFBUTtRQUFBO01BQ3JFLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDSGhFLG1CQUFtQixDQUFDLFVBQUNvRCxJQUFJO01BQUEsT0FBTUEsSUFBSSxLQUFLWSxRQUFRLEdBQUcsSUFBSSxHQUFHWixJQUFJO0lBQUEsQ0FBQyxDQUFDO0VBQ2xFLENBQUMsRUFDRCxDQUFDSixZQUFZLEVBQUVFLFlBQVksQ0FDN0IsQ0FBQztFQUVELElBQU1zQix3QkFBd0IsR0FBR25jLFdBQVcsQ0FDMUMsVUFBQzBRLEdBQUcsRUFBSztJQUNQLElBQUksQ0FBQ2lLLFlBQVksSUFBSSxDQUFDakssR0FBRyxFQUFFO0lBQzNCbUssWUFBWSxDQUFDRixZQUFZLENBQUN4YSxFQUFFLEVBQUU7TUFBQSxPQUFPO1FBQUV3SCxRQUFRLEVBQUUrSTtNQUFJLENBQUM7SUFBQSxDQUFDLENBQUM7RUFDMUQsQ0FBQyxFQUNELENBQUNpSyxZQUFZLEVBQUVFLFlBQVksQ0FDN0IsQ0FBQztFQUVELElBQU11QixxQkFBcUIsR0FBR3BjLFdBQVc7SUFBQSxJQUFBcWMsTUFBQSxHQUFBdGYsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQ3ZDLFNBQUFrZ0IsU0FBTy9ULElBQUk7TUFBQSxJQUFBSyxNQUFBLEVBQUEyVCxZQUFBLEVBQUFDLE9BQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUF2Z0IsWUFBQSxHQUFBQyxDQUFBLFdBQUF1Z0IsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUE1aEIsQ0FBQSxHQUFBNGhCLFNBQUEsQ0FBQXppQixDQUFBO1VBQUE7WUFBQSxNQUNMLENBQUNzTyxJQUFJLElBQUksQ0FBQ29TLFlBQVk7Y0FBQStCLFNBQUEsQ0FBQXppQixDQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUF5aUIsU0FBQSxDQUFBeGhCLENBQUEsSUFBUyxJQUFJO1VBQUE7WUFBQXdoQixTQUFBLENBQUE1aEIsQ0FBQTtZQUFBLE1BRWpDLE9BQU9nYyxpQkFBaUIsS0FBSyxVQUFVO2NBQUE0RixTQUFBLENBQUF6aUIsQ0FBQTtjQUFBO1lBQUE7WUFBQXlpQixTQUFBLENBQUF6aUIsQ0FBQTtZQUFBLE9BQ3BCNmMsaUJBQWlCLENBQUN2TyxJQUFJLENBQUM7VUFBQTtZQUF0Q0ssTUFBTSxHQUFBOFQsU0FBQSxDQUFBemhCLENBQUE7WUFDTnNoQixZQUFZLEdBQUcsQ0FBQTNULE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFK1QsSUFBSSxNQUFJL1QsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVnVSxHQUFHLE1BQUloVSxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRWhCLEtBQUssS0FBSSxFQUFFO1lBQ3ZFLElBQUkyVSxZQUFZLEVBQUU7Y0FDaEIxQixZQUFZLENBQUNGLFlBQVksQ0FBQ3hhLEVBQUUsRUFBRTtnQkFBQSxPQUFPO2tCQUFFd0gsUUFBUSxFQUFFNFU7Z0JBQWEsQ0FBQztjQUFBLENBQUMsQ0FBQztZQUNuRTtZQUFDLEtBQ0d6ZSxLQUFLLENBQUNDLE9BQU8sQ0FBQzZLLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFOFIsTUFBTSxDQUFDO2NBQUFnQyxTQUFBLENBQUF6aUIsQ0FBQTtjQUFBO1lBQUE7WUFDL0JrZixhQUFhLENBQUN2USxNQUFNLENBQUM4UixNQUFNLENBQUM7WUFBQ2dDLFNBQUEsQ0FBQXppQixDQUFBO1lBQUE7VUFBQTtZQUFBeWlCLFNBQUEsQ0FBQXppQixDQUFBO1lBQUEsT0FFdkJrZ0IsY0FBYyxDQUFDLENBQUM7VUFBQTtZQUFBLE9BQUF1QyxTQUFBLENBQUF4aEIsQ0FBQSxJQUVqQnFoQixZQUFZO1VBQUE7WUFBQUcsU0FBQSxDQUFBemlCLENBQUE7WUFBQSxPQUVDcU8saUJBQWlCLENBQUNDLElBQUksQ0FBQztVQUFBO1lBQXZDaVUsT0FBTyxHQUFBRSxTQUFBLENBQUF6aEIsQ0FBQTtZQUNiNGYsWUFBWSxDQUFDRixZQUFZLENBQUN4YSxFQUFFLEVBQUU7Y0FBQSxPQUFPO2dCQUFFd0gsUUFBUSxFQUFFNlU7Y0FBUSxDQUFDO1lBQUEsQ0FBQyxDQUFDO1lBQUMsT0FBQUUsU0FBQSxDQUFBeGhCLENBQUEsSUFDdERzaEIsT0FBTztVQUFBO1lBQUFFLFNBQUEsQ0FBQTVoQixDQUFBO1lBQUEyaEIsR0FBQSxHQUFBQyxTQUFBLENBQUF6aEIsQ0FBQTtZQUVkc1YsT0FBTyxDQUFDekgsS0FBSyxDQUFDLHlCQUF5QixFQUFBMlQsR0FBTyxDQUFDO1lBQUMsTUFBQUEsR0FBQTtVQUFBO1lBQUEsT0FBQUMsU0FBQSxDQUFBeGhCLENBQUE7UUFBQTtNQUFBLEdBQUFvaEIsUUFBQTtJQUFBLENBR25EO0lBQUEsaUJBQUFPLEdBQUE7TUFBQSxPQUFBUixNQUFBLENBQUFwZixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEtBQ0QsQ0FBQzJkLFlBQVksRUFBRTdELGlCQUFpQixFQUFFcUQsY0FBYyxFQUFFVSxZQUFZLENBQ2hFLENBQUM7RUFFRCxJQUFNaUMsVUFBVSxHQUFHOWMsV0FBVyxjQUFBakQsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUMsU0FBQTJnQixTQUFBO0lBQUEsSUFBQW5VLE1BQUE7SUFBQSxPQUFBMU0sWUFBQSxHQUFBQyxDQUFBLFdBQUE2Z0IsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFsaUIsQ0FBQSxHQUFBa2lCLFNBQUEsQ0FBQS9pQixDQUFBO1FBQUE7VUFBQSxJQUN4QmdTLE1BQU07WUFBQStRLFNBQUEsQ0FBQS9pQixDQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUEraUIsU0FBQSxDQUFBOWhCLENBQUE7UUFBQTtVQUNYb2QsVUFBVSxDQUFDLElBQUksQ0FBQztVQUFDMEUsU0FBQSxDQUFBbGlCLENBQUE7VUFBQWtpQixTQUFBLENBQUEvaUIsQ0FBQTtVQUFBLE9BRU1nUyxNQUFNLENBQUNnTCxLQUFLLENBQUM7UUFBQTtVQUE1QnJPLE1BQU0sR0FBQW9VLFNBQUEsQ0FBQS9oQixDQUFBO1VBQUEsS0FDUnNkLFlBQVksQ0FBQy9OLE9BQU87WUFBQXdTLFNBQUEsQ0FBQS9pQixDQUFBO1lBQUE7VUFBQTtVQUN0QmllLFFBQVEsQ0FBQyxLQUFLLENBQUM7VUFBQyxPQUFBOEUsU0FBQSxDQUFBOWhCLENBQUEsSUFDVDBOLE1BQU07UUFBQTtVQUFBb1UsU0FBQSxDQUFBbGlCLENBQUE7VUFHZixJQUFJeWQsWUFBWSxDQUFDL04sT0FBTyxFQUFFO1lBQ3hCOE4sVUFBVSxDQUFDLEtBQUssQ0FBQztVQUNuQjtVQUFDLE9BQUEwRSxTQUFBLENBQUFuaUIsQ0FBQTtRQUFBO1VBQUEsT0FBQW1pQixTQUFBLENBQUE5aEIsQ0FBQTtNQUFBO0lBQUEsR0FBQTZoQixRQUFBO0VBQUEsQ0FFSixJQUFFLENBQUM5RixLQUFLLEVBQUVoTCxNQUFNLENBQUMsQ0FBQztFQUVuQixvQkFDRXJNLEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQW9DLGdCQUNqRHpKLEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCekosS0FBQSxDQUFBd0osYUFBQSxDQUFDMEIsV0FBVztJQUNWeEQsTUFBTSxFQUFFcVQsWUFBYTtJQUNyQjVTLE9BQU8sRUFBRWtQLEtBQUssQ0FBQ2xQLE9BQVE7SUFDdkJpRCxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUc3SyxFQUFFO01BQUEsT0FBS3dYLG1CQUFtQixDQUFDeFgsRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUNoRDhLLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFHZ1MsUUFBUTtNQUFBLE9BQUsxRixpQkFBaUIsQ0FBQzBGLFFBQVEsQ0FBQztJQUFBLENBQUM7SUFDdEQvUixZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBRy9LLEVBQUUsRUFBRWtFLEdBQUcsRUFBRUMsS0FBSyxFQUFFWSxZQUFZO01BQUEsT0FBSzJXLFVBQVUsQ0FBQzFiLEVBQUUsRUFBRWtFLEdBQUcsRUFBRUMsS0FBSyxFQUFFWSxZQUFZLENBQUM7SUFBQSxDQUFDO0lBQ3pGaUcsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBR3BFLElBQUksRUFBRTFDLEdBQUcsRUFBRUMsS0FBSyxFQUFFWSxZQUFZO01BQUEsT0FBSzZXLG9CQUFvQixDQUFDaFYsSUFBSSxFQUFFMUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVZLFlBQVksQ0FBQztJQUFBLENBQUM7SUFDM0drRyxjQUFjLEVBQUU4USxZQUFhO0lBQzdCclEsYUFBYSxFQUFFdVEscUJBQXNCO0lBQ3JDelEsYUFBYSxFQUFFdU4sVUFBVztJQUMxQnROLG9CQUFvQixFQUFFdVEsd0JBQXlCO0lBQy9DN1EsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHNVAsS0FBSztNQUFBLE9BQUttZixZQUFZLENBQUNGLFlBQVksQ0FBQ3hhLEVBQUUsRUFBRTtRQUFBLE9BQU87VUFBRXVILE9BQU8sRUFBRWhNO1FBQU0sQ0FBQztNQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDdEY2UCxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBRzdQLEtBQUs7TUFBQSxPQUFLbWYsWUFBWSxDQUFDRixZQUFZLENBQUN4YSxFQUFFLEVBQUU7UUFBQSxPQUFPO1VBQUVzSCxLQUFLLEVBQUUvTDtRQUFNLENBQUM7TUFBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ2xGOFAsU0FBUyxFQUFFO01BQUV3RyxXQUFXLEVBQUUySCxpQkFBaUI7TUFBRTFILFVBQVUsRUFBVkE7SUFBVyxDQUFFO0lBQzFEdEksU0FBUyxFQUFFQSxTQUFVO0lBQ3JCOEIscUJBQXFCLEVBQUVzTixnQkFBaUI7SUFDeENyTixpQkFBaUIsRUFBRWdPLGFBQWM7SUFDakMzTixnQkFBZ0IsRUFBRXVOLGNBQWU7SUFDakN0TixlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUE7TUFBQSxPQUFROEwsWUFBWSxDQUFDLFVBQUNpRCxJQUFJO1FBQUEsT0FBSyxDQUFDQSxJQUFJO01BQUEsRUFBQztJQUFBLENBQUM7SUFDckQ5TyxNQUFNLEVBQUU2USxVQUFXO0lBQ25CM1EsUUFBUSxFQUFFQSxRQUFTO0lBQ25CRSxTQUFTLEVBQUVnTTtFQUFRLENBQ3BCLENBQUMsRUFFRDFPLFNBQVMsaUJBQ1IvSixLQUFBLENBQUF3SixhQUFBLENBQUNFLGVBQWU7SUFDZFMsUUFBUSxFQUFFNFAsaUJBQWtCO0lBQzVCOVUsTUFBTSxFQUFFOFYsWUFBWSxDQUFDN1csT0FBTyxDQUFDb0YsSUFBSSxDQUFDLFVBQUN2RSxHQUFHO01BQUEsT0FBS0EsR0FBRyxDQUFDeEUsRUFBRSxLQUFLdVgsZ0JBQWdCO0lBQUEsRUFBQyxJQUFJaUQsWUFBWSxDQUFDN1csT0FBTyxDQUFDLENBQUMsQ0FBRTtJQUNuR2lFLE9BQU8sRUFBRWtQLEtBQUssQ0FBQ2xQLE9BQVE7SUFDdkJ5QixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRzVMLElBQUk7TUFBQSxPQUFLOGQsWUFBWSxDQUFDOWQsSUFBSSxDQUFDdUMsRUFBRSxJQUFJdVgsZ0JBQWdCLEVBQUU5WixJQUFJLENBQUM7SUFBQSxDQUFDO0lBQ3BFNkwsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUEsRUFBUTtNQUNkLElBQUlpTyxnQkFBZ0IsRUFBRTtRQUNwQndFLFlBQVksQ0FBQ3hFLGdCQUFnQixDQUFDO1FBQzlCQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7TUFDM0I7SUFDRixDQUFFO0lBQ0ZqTyxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBRzJGLEtBQUssRUFBSztNQUN2QkEsS0FBSyxDQUFDOUUsY0FBYyxDQUFDLENBQUM7TUFDdEIsSUFBSTtRQUNGLElBQU1wRCxPQUFPLEdBQUcrVixJQUFJLENBQUNDLEtBQUssQ0FBQzlOLEtBQUssQ0FBQ29GLFlBQVksQ0FBQzJJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNsRixJQUFJalcsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRWhILEVBQUUsRUFBRTtVQUNmd1gsbUJBQW1CLENBQUN4USxPQUFPLENBQUNoSCxFQUFFLENBQUM7UUFDakM7TUFDRixDQUFDLENBQUMsT0FBQWtkLFFBQUEsRUFBTTtRQUNOO01BQUE7SUFFSixDQUFFO0lBQ0YxVCxTQUFTLEVBQUVBLFNBQVU7SUFDckJDLGtCQUFrQixFQUFFa1AsYUFBYSxLQUFLLFVBQVc7SUFDakRqUCxVQUFVLEVBQUVBO0VBQVcsQ0FDeEIsQ0FDRixFQUVBRixTQUFTLGlCQUNSL0osS0FBQSxDQUFBd0osYUFBQTtJQUNFQyxTQUFTLDZDQUFBekgsTUFBQSxDQUNQOFcsWUFBWSxHQUNSLGdGQUFnRixHQUNoRixxQkFBcUIsQ0FDdEI7SUFDTC9OLEdBQUcsRUFBRXNIO0VBQVcsZ0JBRWhCclMsS0FBQSxDQUFBd0osYUFBQSxDQUFDa1UsYUFBYTtJQUNaQyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBR3hXLElBQUk7TUFBQSxJQUFBeVcscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsc0JBQUE7TUFBQSxPQUNWM0Isb0JBQW9CLENBQUNoVixJQUFJLEdBQUF5VyxxQkFBQSxHQUFFN0MsWUFBWSxhQUFaQSxZQUFZLGdCQUFBOEMsc0JBQUEsR0FBWjlDLFlBQVksQ0FBRTdXLE9BQU8sY0FBQTJaLHNCQUFBLGdCQUFBQSxzQkFBQSxHQUFyQkEsc0JBQUEsQ0FBd0IsQ0FBQyxDQUFDLGNBQUFBLHNCQUFBLHVCQUExQkEsc0JBQUEsQ0FBNEJwWixHQUFHLGNBQUFtWixxQkFBQSxjQUFBQSxxQkFBQSxHQUFJLENBQUMsRUFBRSxDQUFBN0MsWUFBWSxhQUFaQSxZQUFZLGdCQUFBK0Msc0JBQUEsR0FBWi9DLFlBQVksQ0FBRTdXLE9BQU8sY0FBQTRaLHNCQUFBLHVCQUFyQkEsc0JBQUEsQ0FBdUJyaUIsTUFBTSxLQUFJLENBQUMsQ0FBQztJQUFBLENBQ3JHO0lBQ0RvTyxRQUFRLEVBQUV5UyxZQUFhO0lBQ3ZCeUIsYUFBYSxFQUFFaEYsZUFBZ0I7SUFDL0JoUCxTQUFTLEVBQUVBLFNBQVU7SUFDckJpVSxhQUFhLEVBQUU5RSxhQUFhLEtBQUssU0FBVTtJQUMzQ2pQLFVBQVUsRUFBRUE7RUFBVyxDQUN4QixDQUNFLENBRUosQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELElBQU15VCxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFPLE1BQUEsRUFBaUY7RUFBQSxJQUEzRU4sS0FBSyxHQUFBTSxNQUFBLENBQUxOLEtBQUs7SUFBRTlULFFBQVEsR0FBQW9VLE1BQUEsQ0FBUnBVLFFBQVE7SUFBRWtVLGFBQWEsR0FBQUUsTUFBQSxDQUFiRixhQUFhO0lBQUVoVSxTQUFTLEdBQUFrVSxNQUFBLENBQVRsVSxTQUFTO0lBQUVpVSxhQUFhLEdBQUFDLE1BQUEsQ0FBYkQsYUFBYTtJQUFFL1QsVUFBVSxHQUFBZ1UsTUFBQSxDQUFWaFUsVUFBVTtFQUMzRixJQUFBaVUsV0FBQSxHQUFvQ2plLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtlLFdBQUEsR0FBQXhnQixjQUFBLENBQUF1Z0IsV0FBQTtJQUE1Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFNRyxhQUFhLEdBQUdqZSxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQ25DLElBQU0wTSxjQUFjLEdBQUcxTSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBRW5DLElBQU1rZSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJMWQsSUFBSSxFQUFFNE8sS0FBSyxFQUFLO0lBQUEsSUFBQStPLHFCQUFBLEVBQUFDLGFBQUE7SUFDeEMsSUFBSSxDQUFDMVUsU0FBUyxFQUFFO0lBQ2hCLElBQUksQ0FBQzBGLEtBQUssSUFBSyxPQUFPQSxLQUFLLENBQUN4SyxNQUFNLEtBQUssUUFBUSxJQUFJd0ssS0FBSyxDQUFDeEssTUFBTSxLQUFLLENBQUUsRUFBRTtJQUN4RXdLLEtBQUssQ0FBQzlFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLENBQUE2VCxxQkFBQSxHQUFBL08sS0FBSyxDQUFDOEQsZUFBZSxjQUFBaUwscUJBQUEsZUFBckJBLHFCQUFBLENBQUE1aUIsSUFBQSxDQUFBNlQsS0FBd0IsQ0FBQztJQUN6QnNPLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUcsSUFBSSxDQUFDO0lBQ3JCLElBQU1XLE9BQU8sR0FBRzlPLE1BQU0sQ0FBQ0Msa0JBQWtCO0lBQ3pDLElBQUksT0FBTzZPLE9BQU8sS0FBSyxVQUFVLEVBQUU7TUFDakNBLE9BQU8sQ0FDTDtRQUNFbmUsRUFBRSxFQUFFLElBQUk7UUFDUnFULE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLFNBQVMsRUFBRSxDQUFDO1FBQ1ozRCxNQUFNLEVBQUUsU0FBUztRQUNqQi9JLElBQUksRUFBRXRHLElBQUksQ0FBQ047TUFDYixDQUFDLEVBQ0RrUCxLQUFLLENBQUNsTyxhQUFhLEVBQ25Ca08sS0FDRixDQUFDO01BQ0Q7SUFDRjtJQUNBLElBQU1rUCxLQUFLLEdBQUc3ZCxpQkFBaUIsQ0FBQzJPLEtBQUssQ0FBQ2xPLGFBQWEsRUFBRWtPLEtBQUssQ0FBQztJQUMzRDFDLGNBQWMsQ0FBQ25DLE9BQU8sR0FBRytULEtBQUs7SUFDOUJBLEtBQUssYUFBTEEsS0FBSyxnQkFBQUYsYUFBQSxHQUFMRSxLQUFLLENBQUV2YixNQUFNLGNBQUFxYixhQUFBLGVBQWJBLGFBQUEsQ0FBQTdpQixJQUFBLENBQUEraUIsS0FBSyxFQUFXbFAsS0FBSyxDQUFDeE0sT0FBTyxFQUFFd00sS0FBSyxDQUFDdE0sT0FBTyxDQUFDO0lBQzdDLElBQU1xTyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXZYLENBQUM7TUFBQSxJQUFBMmtCLGNBQUE7TUFBQSxPQUFLRCxLQUFLLGFBQUxBLEtBQUssZ0JBQUFDLGNBQUEsR0FBTEQsS0FBSyxDQUFFdmIsTUFBTSxjQUFBd2IsY0FBQSx1QkFBYkEsY0FBQSxDQUFBaGpCLElBQUEsQ0FBQStpQixLQUFLLEVBQVcxa0IsQ0FBQyxDQUFDZ0osT0FBTyxFQUFFaEosQ0FBQyxDQUFDa0osT0FBTyxDQUFDO0lBQUE7SUFDL0QsSUFBTXVQLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7TUFDckI0TCxhQUFhLENBQUMxVCxPQUFPLEdBQUcsS0FBSztNQUM3QnlULGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDcEJOLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUcsS0FBSyxDQUFDO01BQ3RCcmEsa0JBQWtCLENBQUNxSixjQUFjLENBQUNuQyxPQUFPLENBQUM7TUFDMUNtQyxjQUFjLENBQUNuQyxPQUFPLEdBQUcsSUFBSTtNQUM3Qi9ILFFBQVEsQ0FBQ3FRLG1CQUFtQixDQUFDLGFBQWEsRUFBRTFCLFVBQVUsQ0FBQztJQUN6RCxDQUFDO0lBQ0QzTyxRQUFRLENBQUNrUSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUV2QixVQUFVLENBQUM7SUFDcEQzTyxRQUFRLENBQUNrUSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVMLFFBQVEsRUFBRTtNQUFFbU0sSUFBSSxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQ2xFLENBQUM7RUFFRCxJQUFNQyxlQUFlLEdBQUdWLFVBQVUsSUFBSUosYUFBYSxJQUFJL1QsVUFBVTtFQUVqRSxvQkFDRWpLLEtBQUEsQ0FBQXdKLGFBQUE7SUFDRUMsU0FBUyw4TkFBQXpILE1BQUEsQ0FDUDhjLGVBQWUsR0FBRyxxRkFBcUYsR0FBRyxzQkFBc0IsQ0FDL0g7SUFDSHhKLGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBQSxFQUFRO01BQ3BCLElBQUksQ0FBQ3JMLFVBQVUsRUFBRTtNQUNqQixJQUFJLENBQUNxVSxhQUFhLENBQUMxVCxPQUFPLEVBQUU7UUFDMUIwVCxhQUFhLENBQUMxVCxPQUFPLEdBQUcsSUFBSTtRQUM1QnlULGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkJOLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUcsSUFBSSxDQUFDO01BQ3ZCO0lBQ0YsQ0FBRTtJQUNGeEksYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBUTtNQUNuQixJQUFJLENBQUN0TCxVQUFVLEVBQUU7TUFDakIsSUFBSSxDQUFDcVUsYUFBYSxDQUFDMVQsT0FBTyxFQUFFO1FBQzFCMFQsYUFBYSxDQUFDMVQsT0FBTyxHQUFHLElBQUk7UUFDNUJ5VCxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLElBQUksQ0FBQztNQUN2QjtJQUNGLENBQUU7SUFDRjdILGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBQSxFQUFRO01BQ3BCb0ksYUFBYSxDQUFDMVQsT0FBTyxHQUFHLEtBQUs7TUFDN0J5VCxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3BCTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLEtBQUssQ0FBQztJQUN4QixDQUFFO0lBQ0Z2SSxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFRO01BQ2pCOEksYUFBYSxDQUFDMVQsT0FBTyxHQUFHLEtBQUs7TUFDN0J5VCxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3BCTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLEtBQUssQ0FBQztJQUN4QixDQUFFO0lBQ0ZyVCxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBR3pRLENBQUMsRUFBSztNQUNqQkEsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDMlQsYUFBYSxDQUFDMVQsT0FBTyxFQUFFO1FBQzFCMFQsYUFBYSxDQUFDMVQsT0FBTyxHQUFHLElBQUk7UUFDNUJ5VCxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLElBQUksQ0FBQztNQUN2QjtJQUNGLENBQUU7SUFDRmdCLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFBLEVBQVE7TUFDakIsSUFBSSxDQUFDVCxhQUFhLENBQUMxVCxPQUFPLEVBQUU7UUFDMUIwVCxhQUFhLENBQUMxVCxPQUFPLEdBQUcsSUFBSTtRQUM1QnlULGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkJOLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUcsSUFBSSxDQUFDO01BQ3ZCO0lBQ0YsQ0FBRTtJQUNGbFQsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUc1USxDQUFDLEVBQUs7TUFDYkEsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7TUFDbEIyVCxhQUFhLENBQUMxVCxPQUFPLEdBQUcsS0FBSztNQUM3QnlULGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDcEJOLGFBQWEsYUFBYkEsYUFBYSxlQUFiQSxhQUFhLENBQUcsS0FBSyxDQUFDO01BQ3RCLElBQUk7UUFDRixJQUFNeFcsT0FBTyxHQUFHK1YsSUFBSSxDQUFDQyxLQUFLLENBQUN0akIsQ0FBQyxDQUFDNGEsWUFBWSxDQUFDMkksT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxDQUFDO1FBQzlFLElBQUlqVyxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFaEgsRUFBRSxFQUFFO1VBQ2ZzSixRQUFRLGFBQVJBLFFBQVEsZUFBUkEsUUFBUSxDQUFHdEMsT0FBTyxDQUFDaEgsRUFBRSxDQUFDO1FBQ3hCO01BQ0YsQ0FBQyxDQUFDLE9BQUF5ZSxRQUFBLEVBQU07UUFDTjtNQUFBO01BRUZ0YixrQkFBa0IsQ0FBQ3FKLGNBQWMsQ0FBQ25DLE9BQU8sQ0FBQztNQUMxQ21DLGNBQWMsQ0FBQ25DLE9BQU8sR0FBRyxJQUFJO0lBQy9CLENBQUU7SUFDRkUsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUEsRUFBUTtNQUNqQndULGFBQWEsQ0FBQzFULE9BQU8sR0FBRyxLQUFLO01BQzdCeVQsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNwQk4sYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBRyxLQUFLLENBQUM7SUFDeEI7RUFBRSxnQkFFRi9kLEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXlDLGdCQUN0RHpKLEtBQUEsQ0FBQXdKLGFBQUEsMkJBQ0V4SixLQUFBLENBQUF3SixhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUFxRCxHQUFDLHlEQUFhLENBQUMsZUFDakZ6SixLQUFBLENBQUF3SixhQUFBO0lBQUdDLFNBQVMsRUFBQztFQUE0QixHQUFDLHlRQUFtRCxDQUMxRixDQUNGLENBQUMsZUFDTnpKLEtBQUEsQ0FBQXdKLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQTRDLEdBQ3hEbkosZ0JBQWdCLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsb0JBQ3pCYixLQUFBLENBQUF3SixhQUFBO01BQ0V5QixHQUFHLEVBQUVwSyxJQUFJLENBQUNOLEVBQUc7TUFDYm1XLFNBQVMsRUFBRSxLQUFNO01BQ2pCM1UsS0FBSyxFQUFFZ0ksU0FBUyxHQUFHO1FBQUVzSCxXQUFXLEVBQUU7TUFBTyxDQUFDLEdBQUd4TixTQUFVO01BQ3ZEOFMsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUcxYyxDQUFDO1FBQUEsT0FBS3NrQixnQkFBZ0IsQ0FBQzFkLElBQUksRUFBRTVHLENBQUMsQ0FBQztNQUFBLENBQUM7TUFDaER1YixXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBR3ZiLENBQUMsRUFBSztRQUNsQkEsQ0FBQyxDQUFDMFEsY0FBYyxDQUFDLENBQUM7UUFDbEIwVCxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BCTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLEtBQUssQ0FBQztRQUN0QnJhLGtCQUFrQixDQUFDcUosY0FBYyxDQUFDbkMsT0FBTyxDQUFDO1FBQzFDbUMsY0FBYyxDQUFDbkMsT0FBTyxHQUFHLElBQUk7TUFDL0IsQ0FBRTtNQUNGc0wsY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFBLEVBQVE7UUFDcEJtSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BCTixhQUFhLGFBQWJBLGFBQWEsZUFBYkEsYUFBYSxDQUFHLEtBQUssQ0FBQztNQUN4QixDQUFFO01BQ0Z4SixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQSxFQUFRO1FBQ2IsSUFBSSxDQUFDeEssU0FBUyxFQUFFO1FBQ2hCNFQsS0FBSyxhQUFMQSxLQUFLLGVBQUxBLEtBQUssQ0FBRzljLElBQUksQ0FBQ04sRUFBRSxDQUFDO01BQ2xCLENBQUU7TUFDRmtKLFNBQVMsc1NBQUF6SCxNQUFBLENBQ1ArSCxTQUFTLEdBQUcsb0NBQW9DLEdBQUcsK0JBQStCO0lBQ2pGLGdCQUVIL0osS0FBQSxDQUFBd0osYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBUyxHQUFFNUksSUFBSSxDQUFDSixLQUFLLElBQUksR0FBVSxDQUFDLGVBQ3BEVCxLQUFBLENBQUF3SixhQUFBO01BQU1DLFNBQVMsRUFBQztJQUFVLEdBQUU1SSxJQUFJLENBQUNMLEtBQVksQ0FDMUMsQ0FBQztFQUFBLENBQ1AsQ0FDRSxDQUNGLENBQUM7QUFFVixDQUFDO0FBRURvUCxNQUFNLENBQUNpSCxjQUFjLEdBQUdBLGNBQWMiLCJpZ25vcmVMaXN0IjpbXX0=