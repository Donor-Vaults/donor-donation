"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _material = require("@mui/material");
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../Home/Page2/Page2");
var _rcProgress = require("rc-progress");
var _Navbar = require("../../../components/Navbar/Navbar");
var _reactSwitchSelector = _interopRequireDefault(require("react-switch-selector"));
var _subgraph = require("../../../apollo/subgraph");
var _reactRouterDom = require("react-router-dom");
var _moment = _interopRequireDefault(require("moment"));
var _Badge = _interopRequireDefault(require("@mui/material/Badge"));
var _DonationModal = _interopRequireDefault(require("../../../components/DonationModal"));
var _web = _interopRequireDefault(require("web3"));
var _config = _interopRequireDefault(require("../../../config"));
var _CampaingABI = _interopRequireDefault(require("../../../config/abi/CampaingABI.json"));
var _SocialShare = require("../../../components/SocialShare");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}
var bColor = (0, _styledTheming.default)("theme", {
  light: "linear-gradient(to right, #36d1dc, #5b86e5)",
  dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
});
exports.bColor = bColor;
var options = [{
  label: /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#02A95C",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "37",
    height: "25",
    viewBox: "0 0 37 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M25.818 0C32.106 0 36.33 4.306 36.33 10.714V29.106C36.33 35.57 32.236 39.774 25.9 39.814L10.514 39.82C4.226 39.82 0 35.514 0 29.106V10.714C0 4.248 4.094 0.046 10.43 0.008L25.816 0H25.818ZM25.818 3L10.44 3.008C5.784 3.036 3 5.916 3 10.714V29.106C3 33.936 5.81 36.82 10.512 36.82L25.89 36.814C30.546 36.786 33.33 33.902 33.33 29.106V10.714C33.33 5.884 30.522 3 25.818 3ZM25.4322 26.9474C26.2602 26.9474 26.9322 27.6194 26.9322 28.4474C26.9322 29.2754 26.2602 29.9474 25.4322 29.9474H10.9922C10.1642 29.9474 9.4922 29.2754 9.4922 28.4474C9.4922 27.6194 10.1642 26.9474 10.9922 26.9474H25.4322ZM25.4322 18.5744C26.2602 18.5744 26.9322 19.2464 26.9322 20.0744C26.9322 20.9024 26.2602 21.5744 25.4322 21.5744H10.9922C10.1642 21.5744 9.4922 20.9024 9.4922 20.0744C9.4922 19.2464 10.1642 18.5744 10.9922 18.5744H25.4322ZM16.5016 10.2208C17.3296 10.2208 18.0016 10.8928 18.0016 11.7208C18.0016 12.5488 17.3296 13.2208 16.5016 13.2208H10.9916C10.1636 13.2208 9.4916 12.5488 9.4916 11.7208C9.4916 10.8928 10.1636 10.2208 10.9916 10.2208H16.5016Z",
    fill: "#02A95C"
  })), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: "1.6rem",
      margin: "0 0 0 0.5rem"
    }
  }, "About")),
  value: {
    foo: true
  },
  selectedBackgroundColor: "rgba(251, 216, 155, 1.00)"
}, {
  label: /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#02A95C",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "40",
    height: "25",
    viewBox: "0 0 40 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.5122 5.42794C30.2716 5.42794 30.8992 5.99225 30.9985 6.7244L31.0122 6.92794L31.012 30.528L36.6044 24.9131C37.1889 24.3259 38.1386 24.3237 38.7258 24.9082C39.2595 25.4395 39.3099 26.2727 38.8755 26.8609L38.7307 27.0295L30.5751 35.2228C30.5259 35.2711 30.4759 35.3149 30.4231 35.3554L30.5751 35.2228C30.5015 35.2967 30.4222 35.3614 30.3385 35.4168C30.3093 35.4349 30.2789 35.4535 30.2479 35.471C30.2191 35.4884 30.1898 35.5036 30.1601 35.5178C30.1308 35.5308 30.1011 35.5439 30.0709 35.556C30.0325 35.5724 29.9932 35.5863 29.9534 35.5985C29.93 35.6048 29.906 35.6115 29.8817 35.6177C29.8385 35.6295 29.7951 35.6385 29.7514 35.6455C29.731 35.6478 29.7096 35.6508 29.688 35.6533C29.6387 35.6601 29.5899 35.6634 29.541 35.6643C29.5313 35.6634 29.5218 35.6635 29.5122 35.6635L29.483 35.6643C29.4341 35.6634 29.3853 35.6601 29.3367 35.6544L29.5122 35.6635C29.4305 35.6635 29.3503 35.657 29.2721 35.6444C29.2289 35.6385 29.1855 35.6295 29.1425 35.6186C29.1197 35.6118 29.0969 35.6055 29.0743 35.5986C29.0314 35.5866 28.9886 35.5715 28.9465 35.5544C28.9235 35.5438 28.9012 35.5341 28.8793 35.5238C28.8448 35.5091 28.8101 35.4913 28.7761 35.4721C28.7454 35.4534 28.7151 35.4349 28.6856 35.4154C28.6625 35.4015 28.6397 35.3855 28.6174 35.3689L28.6013 35.3554C28.5485 35.3149 28.4985 35.2711 28.4516 35.2242L28.4489 35.2228L20.2933 27.0295C19.7089 26.4423 19.7111 25.4926 20.2982 24.9082C20.832 24.3769 21.6654 24.3304 22.2517 24.7674L22.4196 24.9131L28.012 30.532L28.0122 6.92794C28.0122 6.09952 28.6838 5.42794 29.5122 5.42794ZM9.65533 0.000832587L9.68455 0C9.73343 0.000939102 9.78227 0.00425304 9.83089 0.00994183L9.65533 0.000832587C9.73705 0.000832587 9.81724 0.00736682 9.89541 0.0199413C9.93816 0.0257847 9.98108 0.0346166 10.0236 0.0453386C10.0486 0.0526766 10.0741 0.0598327 10.0993 0.0676359C10.1387 0.0787398 10.1768 0.0922369 10.2145 0.10732C10.2417 0.119433 10.2692 0.131473 10.2963 0.144301C10.3285 0.158228 10.3603 0.174617 10.3915 0.192213C10.4182 0.208674 10.4447 0.22471 10.4706 0.241525C10.4973 0.257383 10.524 0.275942 10.5502 0.295468L10.7187 0.441515L18.8742 8.63485C19.4587 9.22199 19.4565 10.1717 18.8693 10.7562C18.3356 11.2875 17.5021 11.334 16.9159 10.8969L16.748 10.7513L11.154 5.13L11.1553 28.7364C11.1553 29.5648 10.4838 30.2364 9.65533 30.2364C8.89594 30.2364 8.26835 29.6721 8.16903 28.9399L8.15533 28.7364L8.154 5.132L2.56311 10.7513C2.03181 11.285 1.19859 11.3354 0.610366 10.901L0.441794 10.7562C-0.0919687 10.2249 -0.142306 9.39165 0.292045 8.80342L0.436892 8.63485L8.59245 0.441515L8.68077 0.360521C8.70151 0.342777 8.72274 0.32559 8.74444 0.308981L8.59245 0.441515C8.66603 0.367592 8.74539 0.302945 8.82909 0.247576C8.85829 0.229383 8.88865 0.21081 8.91968 0.19331C8.9485 0.175941 8.9778 0.160701 9.00747 0.146493C9.03675 0.133529 9.06647 0.120448 9.09667 0.108322C9.13503 0.0919152 9.17438 0.0780247 9.21414 0.0658233C9.23833 0.059327 9.2631 0.0524021 9.28813 0.0461058C9.32842 0.035038 9.36916 0.0265766 9.41012 0.0198192C9.43475 0.0167381 9.4589 0.0133783 9.48322 0.0106001C9.52952 0.00423893 9.57702 0.0010161 9.62456 3.97414e-05C9.63505 0.000933454 9.64518 0.000832587 9.65533 0.000832587Z",
    fill: "#02A95C"
  })), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: "1.6rem",
      margin: "0 0 0 0.5rem"
    }
  }, "Update")),
  value: "bar",
  selectedBackgroundColor: "rgba(251, 216, 155, 1.00)"
}, {
  label: /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#02A95C",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "42",
    height: "25",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M15.286 0C17.188 0.002 19 0.91 20.136 2.428L21.958 4.852C22.536 5.62 23.454 6.078 24.414 6.08H30.072C37.796 6.08 41.394 10.038 41.394 18.536L41.338 28.47C41.336 36.406 36.404 41.338 28.464 41.338H12.9C4.944 41.338 0 36.404 0 28.464V12.866C0 4.328 3.798 0 11.286 0H15.286ZM15.284 3H11.286C5.478 3 3 5.952 3 12.866V28.464C3 34.832 6.516 38.338 12.9 38.338H28.464C34.832 38.338 38.338 34.832 38.338 28.464V28.458L38.394 18.528C38.394 11.73 36.062 9.08 30.072 9.08H24.412C22.514 9.078 20.702 8.172 19.562 6.656L17.736 4.228C17.162 3.458 16.244 3.002 15.284 3ZM29.4324 24.4256C30.2604 24.4256 30.9324 25.0976 30.9324 25.9256C30.9324 26.7536 30.2604 27.4256 29.4324 27.4256H11.9624C11.1344 27.4256 10.4624 26.7536 10.4624 25.9256C10.4624 25.0976 11.1344 24.4256 11.9624 24.4256H29.4324Z",
    fill: "#02A95C"
  })), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: "1.6rem",
      margin: "0 0 0 0.5rem"
    }
  }, "Related files")),
  value: "bar",
  selectedBackgroundColor: "rgba(251, 216, 155, 1.00)"
}];
var Box1 = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 30rem;\n  background-color: #2d7b43;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem auto 0 auto;\n  justify-self: center;\n  padding: 3rem 0;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 2rem;\n\n  @media only screen and (max-width: 500px) {\n    width: 98%;\n  }\n"])));
var Flex = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  // border-radius: 0.75rem 0.75rem 0 0;\n"])));
var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0 1rem;\n  height: 50%;\n"])));
var StyledLine = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 6rem;\n  height: 0.2rem;\n  margin: 0 0 0 0 !important;\n  background: rgba(2, 169, 92, 1);\n\n  @media only screen and (max-width: 510px) {\n    width: 99%;\n  }\n"])));
var Ts = (0, _styledComponents.default)(_Page.T)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n"])));
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  font-weight: bold;\n"])));
var Container = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 80%;\n  @media only screen and (max-width: 768px) {\n    width: 90%;\n    flex-direction: column;\n  }\n"])));
var ButtonR = (0, _styledComponents.default)(_Navbar.Button)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0 0 0 1rem;\n  box-shadow: none;\n  color: rgba(0, 29, 35, 1);\n  background: transparent;\n  //min-width: 15rem;\n  border: 2px solid rgba(176, 163, 144, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media only screen and (max-width: 768px) {\n    margin: 1rem 0 0 0;\n  }\n"])));
var OneDisbursementItem = function OneDisbursementItem(_ref) {
  var data = _ref.data;
  console.log("Saasa", data);
  var createdAt = data.createdAt,
    amount = data.amount,
    id = data.id;
  return /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: {}
  }, /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 14
    },
    variant: "body2",
    gutterBottom: true
  }, "Date: ", (0, _moment.default)(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2"
  }, "Amount: ", _web.default.utils.fromWei(amount), " ", _config.default.DONTATION_TOKEN_SYMBOL), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://testnet.bscscan.com/tx/".concat(id),
    target: "_blank"
  }, "Txn Hash: ", id))));
};
var OneDonationItem = function OneDonationItem(_ref2) {
  var data = _ref2.data;
  console.log("Saasa", data);
  var id = data.id,
    createdAt = data.createdAt,
    amount = data.amount,
    donor = data.donor;
  return /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: {}
  }, /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 14
    },
    variant: "body2",
    gutterBottom: true
  }, "Date: ", (0, _moment.default)(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2"
  }, "Amount: ", _web.default.utils.fromWei(amount), " ", _config.default.DONTATION_TOKEN_SYMBOL), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://testnet.bscscan.com/tx/".concat(id),
    target: "_blank"
  }, "Txn Hash: ", id)), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://testnet.bscscan.com/address/".concat(donor),
    target: "_blank"
  }, "Donor: ", donor))));
};
var DonationPanel = function DonationPanel(_ref3) {
  var fundraiser = _ref3.fundraiser;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDonationModal = _useState2[0],
    setShowDonationModal = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    subgraphDetail = _useState4[0],
    setSubgraphDetail = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isDataLoading = _useState6[0],
    setDataLoading = _useState6[1];
  var _useState7 = (0, _react.useState)({
      totalRaised: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    contractData = _useState8[0],
    setContractData = _useState8[1];
  var _React$useState = _react.default.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedTab = _React$useState2[0],
    setSelectedTab = _React$useState2[1];
  var loadSubgraphDetail = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var subgraphData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _subgraph.getFundraiserDetails)(fundraiser.contract_address.toLowerCase());
          case 3:
            subgraphData = _context.sent;
            console.log({
              subgraphData: subgraphData
            });
            setSubgraphDetail(subgraphData);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("loadSubgraphDetail", _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function loadSubgraphDetail() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    console.log({
      fundraiser: fundraiser
    });
    if (fundraiser) {
      loadSubgraphDetail();
    }
  }, [fundraiser]);
  (0, _react.useEffect)(function () {
    console.log({
      subgraphDetail: subgraphDetail
    });
  }, [subgraphDetail]);
  (0, _react.useEffect)(function () {
    setInterval(function () {
      loadData();
    }, 5000);
    loadData();
  }, []);
  var loadData = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var web3, donationContract, totalRaised;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setDataLoading(true);
            _context2.prev = 1;
            web3 = new _web.default(_config.default.RPC);
            donationContract = new web3.eth.Contract(_CampaingABI.default, fundraiser.contract_address);
            _context2.next = 6;
            return donationContract.methods.totalPaid().call();
          case 6:
            totalRaised = _context2.sent;
            setContractData({
              totalRaised: totalRaised / 1e18
            });
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log("saasas", _context2.t0);
          case 13:
            setDataLoading(false);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 10]]);
    }));
    return function loadData() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/_react.default.createElement(Box1, null, /*#__PURE__*/_react.default.createElement(_DonationModal.default, {
    fundraiser: fundraiser,
    setOpen: setShowDonationModal,
    open: showDonationModal
  }), /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    disabled: fundraiser.fundraisers_status !== "APPROVED",
    style: {
      width: "12rem",
      background: "#FFF",
      color: "#2D7B43"
    },
    onClick: function onClick() {
      setShowDonationModal(true);
    }
  }, fundraiser.fundraisers_status === "APPROVED" ? "Donate" : "Donation not Enabled"), /*#__PURE__*/_react.default.createElement(_SocialShare.SocialShare, {
    link: window.location.href
  }), /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      margin: "4rem 0 1rem 0"
    }
  }, "$ ", contractData.totalRaised), /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      margin: "0",
      textAlign: "center"
    }
  }, "raised of $", fundraiser.goalAmount, " goal"), /*#__PURE__*/_react.default.createElement(_rcProgress.Line, {
    percent: Number(contractData.totalRaised) / Number(fundraiser.goalAmount) * 100
  }), /*#__PURE__*/_react.default.createElement(Flex, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      margin: "0"
    }
  }, "Created At"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      fontSize: "0.85rem"
    }
  }, (0, _moment.default)(fundraiser.createdAt).format("DD MMM YYYY hh:mm a"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      margin: "0"
    }
  }, "Status "), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      fontSize: "0.85rem"
    }
  }, fundraiser.fundraisers_status)))), subgraphDetail ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25rem",
      // display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5px',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }, "Disbursement Details"), subgraphDetail.disbursements.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(OneDisbursementItem, {
      data: item,
      key: index
    });
  })) : null, subgraphDetail ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25rem",
      // display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5px',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }, "Donations Details (Latest #5)"), subgraphDetail.dontations.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(OneDonationItem, {
      data: item,
      key: index
    });
  })) : null));
};
var _default = DonationPanel;
exports.default = _default;