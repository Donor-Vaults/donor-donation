"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../../components/Navbar/Navbar");
var _reactRedux = require("react-redux");
var _upload = require("../../../utils/upload");
var _reactWebcam = _interopRequireDefault(require("react-webcam"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
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
var WebcamComponent = function WebcamComponent() {
  return /*#__PURE__*/_react.default.createElement(_reactWebcam.default, null);
};
var videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};
var ManIcon = function ManIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "298",
    height: "327",
    viewBox: "0 0 298 327",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M179.731 167.076V158.901H159.244V167.076C159.244 171.675 155.984 175.251 152.259 175.251H187.181C182.991 175.251 179.731 171.675 179.731 167.076Z",
    fill: "#FFE1BD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M142.947 175.251H195.562V201.309H142.947V175.251Z",
    fill: "#FFE1BD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M120.597 175.251C114.078 175.251 110.819 179.339 108.491 181.894L33.9907 274.884H48.8907C60.5313 274.884 64.2563 270.286 67.5157 266.198L140.619 175.251H120.597",
    fill: "#75A843"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.8157 223.791L45.1657 238.608C49.3564 241.163 54.4782 240.141 57.272 235.542C60.0657 231.455 58.6689 225.323 54.4782 222.769L32.1282 207.952C27.9376 205.397 22.8157 206.419 20.022 211.017C17.6939 215.105 19.0907 221.236 22.8157 223.791",
    fill: "#E6B796"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M82.4157 246.783C82.4157 249.848 80.0876 252.403 77.2938 252.403H34.4563C31.6626 252.403 29.3345 249.848 29.3345 246.783V141.529C29.3345 138.464 31.6626 135.909 34.4563 135.909H76.8282C79.622 135.909 81.9501 138.464 81.9501 141.529V246.783H82.4157Z",
    fill: "#3E4347"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M55.8748 164.522C58.7035 164.522 60.9967 162.006 60.9967 158.902C60.9967 155.798 58.7035 153.281 55.8748 153.281C53.0461 153.281 50.7529 155.798 50.7529 158.902C50.7529 162.006 53.0461 164.522 55.8748 164.522Z",
    fill: "#B2C1C0"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M55.8748 161.967C57.4178 161.967 58.6686 160.595 58.6686 158.902C58.6686 157.208 57.4178 155.836 55.8748 155.836C54.3319 155.836 53.0811 157.208 53.0811 158.902C53.0811 160.595 54.3319 161.967 55.8748 161.967Z",
    fill: "#3E4347"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59.6 263.133C59.6 269.775 54.9437 274.884 48.8906 274.884H29.3344C23.2813 274.884 18.625 269.775 18.625 263.133V223.791C18.625 217.148 23.2813 212.039 29.3344 212.039H49.3563C55.4094 212.039 60.0656 217.148 60.0656 223.791V263.133H59.6Z",
    fill: "#FFE1BD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M248.644 127.223V148.683C248.644 152.77 251.437 155.836 255.162 155.836C258.887 155.836 261.681 152.77 261.681 148.683V127.223C261.681 123.136 258.887 120.07 255.162 120.07C251.437 120.07 248.644 123.136 248.644 127.223Z",
    fill: "#E6B796"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M279.375 174.229C279.375 178.828 275.65 182.915 271.459 182.915H256.559C252.369 182.915 248.644 178.828 248.644 174.229V144.595C248.644 139.997 252.369 135.909 256.559 135.909H271.459C275.65 135.909 279.375 139.997 279.375 144.595V174.229Z",
    fill: "#FFE1BD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M75.8971 146.639C75.8971 147.661 75.4314 148.172 74.5002 148.172H71.7064C70.7752 148.172 70.3096 147.661 70.3096 146.639V143.573C70.3096 142.551 70.7752 142.041 71.7064 142.041H74.5002C75.4314 142.041 75.8971 142.551 75.8971 143.573V146.639Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M252.834 181.894C248.178 193.134 243.987 203.353 240.262 212.55C236.537 203.353 232.347 193.134 227.691 181.894C226.294 178.317 222.103 175.251 215.584 175.251H203.478C203.478 175.251 219.775 215.616 225.362 228.9C225.362 229.411 229.553 239.119 238.4 239.119H239.331C242.125 239.119 250.506 238.097 254.231 228.9L273.322 182.405H252.834V181.894Z",
    fill: "#75A843"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M216.05 175.251H189.975C187.647 185.981 179.265 194.156 169.487 194.156C159.709 194.156 151.328 185.981 149 175.251H122.925V306.562C122.925 306.562 138.756 316.781 169.487 316.781C199.753 316.781 216.05 306.562 216.05 306.562V175.251Z",
    fill: "#83BF4F"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M104.3 84.8156L110.819 98.1H227.69L232.812 83.7938C232.812 32.7 221.637 10.7297 169.953 10.2188C117.337 9.70784 104.3 32.7 104.3 84.8156Z",
    fill: "#594640"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M228.156 84.3047C227.691 87.3703 227.225 89.925 226.294 91.4578C224.897 94.5234 222.103 96.0562 222.103 96.0562C222.103 96.0562 223.035 90.4359 222.569 82.2609C219.775 34.7437 216.981 57.7359 169.488 57.7359C121.994 57.7359 119.2 34.7437 116.406 82.2609C115.941 90.4359 116.872 96.0562 116.872 96.0562C116.872 96.0562 114.078 94.5234 112.681 91.4578C111.75 89.925 111.285 86.8594 110.819 84.3047C106.163 82.7719 100.575 84.3047 100.575 98.6109C100.575 107.297 103.369 114.961 113.613 115.472C117.338 145.106 153.191 165.033 169.488 165.033C185.785 165.033 222.103 145.106 225.363 115.472C235.141 114.45 238.4 107.297 238.4 98.6109C238.4 83.7937 232.347 82.7719 228.156 84.3047",
    fill: "#FFE1BD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M144.809 110.873C150.467 110.873 155.053 105.841 155.053 99.6327C155.053 93.4247 150.467 88.3921 144.809 88.3921C139.152 88.3921 134.565 93.4247 134.565 99.6327C134.565 105.841 139.152 110.873 144.809 110.873Z",
    fill: "#664E27"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M193.7 110.873C199.357 110.873 203.944 105.841 203.944 99.6327C203.944 93.4247 199.357 88.3921 193.7 88.3921C188.042 88.3921 183.456 93.4247 183.456 99.6327C183.456 105.841 188.042 110.873 193.7 110.873Z",
    fill: "#664E27"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M188.112 136.42C188.112 144.084 178.8 148.172 169.487 148.172C160.175 148.172 150.862 144.084 150.862 136.42C150.862 136.42 150.862 134.376 152.725 134.376H186.25C188.112 134.376 188.112 136.42 188.112 136.42Z",
    fill: "#664E27"
  }));
};
var T = _styledComponents.default.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: 500;\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  text-align: left;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Ht = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Left = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 1rem;\n  padding: 1rem;\n  //   @media only screen and (max-width: 1100px) {\n  //     width: 50%;\n  // }\n\n  @media only screen and (max-width: 998px) {\n    width: 35rem;\n    padding: 1rem 0;\n    margin: 7rem 0 0 0;\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 95%;\n    padding: 1rem;\n    margin: 7rem 0 0 0;\n  }\n"])));
var Right = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: 60%;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    margin: 4rem 0 0 0;\n  }\n\n  @media only screen and (max-width: 998px) {\n    width: 95%;\n  }\n"])));
var Box = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 95%;\n  min-height: 30rem;\n  background-color: #ffdea580;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 1rem;\n  position: relative;\n\n  @media only screen and (max-width: 998px) {\n    flex-direction: column;\n    min-height: 30rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
var Back = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 3rem 0;\n  cursor: pointer;\n\n  @media only screen and (max-width: 998px) {\n    position: absolute;\n    top: 0;\n    right: 2rem;\n  }\n"])));
var Details = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n      180deg,\n      rgba(2, 169, 92, 0.5) 0%,\n      rgba(34, 170, 48, 0.5) 100%\n    ),\n    linear-gradient(0deg, #ffffff, #ffffff);\n  padding: 3rem 2rem 2rem 2rem;\n  border: 0.25rem solid #ffffff;\n  border-radius: 1.25rem;\n  margin: 0 1rem 4rem 1rem;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    margin: 0 0 2rem 0;\n    padding: 3rem 0.5rem 2rem 0.5rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n"])));
var Man = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 12rem;\n  height: 12rem;\n"])));
var H = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 1.25rem;\n  font-weight: bold;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 0.95rem;\n    font-weight: bold;\n  }\n"])));
var Frame = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 25rem;\n  height: 22rem;\n  border-radius: 1rem;\n  background: #fff;\n\n  @media only screen and (max-width: 768px) {\n    width: 95%;\n  }\n"])));
var Part2 = function Part2(_ref) {
  var hide = _ref.hide,
    onNext = _ref.onNext,
    onPrev = _ref.onPrev;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFile = _useState2[0],
    setSelectedFile = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    uploadUrl = _useState4[0],
    setUploadUrl = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setLoading = _useState6[1];
  var webcamRef = _react.default.useRef(null);
  var capture = _react.default.useCallback(function () {
    var pictureSrc = webcamRef.current.getScreenshot();
    setSelectedFile(pictureSrc);
  });
  var inputRef = (0, _react.useRef)(null);
  var handleFinish = function handleFinish() {
    onNext({
      selfie: uploadUrl
    });
  };
  var handleFileSelect = function handleFileSelect() {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            try {
              // const url = await uploadFile(selectedFile);
              setUploadUrl(selectedFile);
            } catch (err) {
              console.error(err);
            }
            setLoading(false);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleUpload() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleFileChange = function handleFileChange(event) {
    var fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setSelectedFile(event.target.files[0]);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: hide ? "none" : "block"
    }
  }, /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/_react.default.createElement(Ht, null, "Capture your selfie"), /*#__PURE__*/_react.default.createElement(T, null, "Please take a selfie using your device")), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Back, {
    style: {
      display: "flex",
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    },
    onClick: function onClick() {
      onPrev();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "8rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "30",
    viewBox: "0 0 42 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M22.4582 0C17.5662 0 13.5862 3.98 13.5862 8.872V10.736C13.5862 11.564 14.2582 12.236 15.0862 12.236C15.9142 12.236 16.5862 11.564 16.5862 10.736V8.872C16.5862 5.632 19.2202 3 22.4582 3H32.2082C35.4422 3 38.0742 5.632 38.0742 8.872V31.13C38.0742 34.368 35.4422 37 32.2082 37H22.4362C19.2122 37 16.5862 34.376 16.5862 31.152V29.266C16.5862 28.438 15.9142 27.766 15.0862 27.766C14.2582 27.766 13.5862 28.438 13.5862 29.266V31.152C13.5862 36.032 17.5582 40 22.4362 40H32.2082C37.0962 40 41.0742 36.022 41.0742 31.13V8.872C41.0742 3.98 37.0962 0 32.2082 0H22.4582ZM6.29802 13.108L0.442017 18.938C0.389774 18.9898 0.342995 19.0437 0.300182 19.1008L0.442017 18.938C0.371159 19.0079 0.308144 19.0842 0.253468 19.1656C0.229401 19.2025 0.206188 19.2406 0.184677 19.2798C0.167221 19.3105 0.151154 19.3424 0.136261 19.3749C0.123634 19.4036 0.111515 19.4324 0.100281 19.4615C0.0852013 19.4995 0.0719986 19.5386 0.0604172 19.5782C0.0516891 19.6094 0.0436668 19.6405 0.0366364 19.672C0.0277023 19.7102 0.020668 19.7486 0.0151329 19.7874C0.012001 19.8125 0.00893784 19.8389 0.00657272 19.8655C0.00199509 19.9111 1.90735e-05 19.9555 1.90735e-05 20L0.0102158 20.124L0.0143204 20.2035C0.014782 20.2068 0.0152512 20.2102 0.0157356 20.2136L1.90735e-05 20C1.90735e-05 20.111 0.01231 20.221 0.0362053 20.3278C0.0436668 20.3595 0.0516891 20.3906 0.0606689 20.4213C0.0719986 20.4614 0.0852013 20.5005 0.0999908 20.5389C0.111515 20.5676 0.123638 20.5964 0.136608 20.6246C0.151157 20.6576 0.167221 20.6895 0.184433 20.7209C0.206188 20.7594 0.229401 20.7975 0.254215 20.8345C0.268253 20.8564 0.283653 20.8781 0.299652 20.8993C0.347271 20.962 0.399162 21.0209 0.455307 21.0755L6.29802 26.894C6.59002 27.186 6.97402 27.332 7.35602 27.332C7.74002 27.332 8.12602 27.186 8.41802 26.89C9.00202 26.302 9.00002 25.354 8.41402 24.77L5.13422 21.5H25.5826C26.4106 21.5 27.0826 20.828 27.0826 20C27.0826 19.172 26.4106 18.5 25.5826 18.5H5.13022L8.41402 15.232C9.00002 14.648 9.00402 13.7 8.41802 13.112C7.83402 12.524 6.88602 12.524 6.29802 13.108Z",
    fill: "#082F37"
  }))), /*#__PURE__*/_react.default.createElement(T, {
    style: {
      color: "#000",
      margin: "0",
      fontSize: "1.75rem"
    }
  }, "Back"))), /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      fontSize: "1.5rem",
      color: "#FFF",
      textAlign: "left",
      margin: "0 0 2rem 0"
    }
  }, "Selfie")), /*#__PURE__*/_react.default.createElement(Frame, null, /*#__PURE__*/_react.default.createElement("input", {
    accept: "image/png, image/jpeg",
    style: {
      display: "none"
    },
    ref: inputRef,
    type: "file",
    onChange: handleFileChange
  }), selectedFile ? /*#__PURE__*/_react.default.createElement("img", {
    src: selectedFile,
    height: 300,
    width: 300
  }) : /*#__PURE__*/_react.default.createElement(Man, null, /*#__PURE__*/_react.default.createElement(_reactWebcam.default, {
    audio: false,
    height: "100%",
    ref: webcamRef,
    width: "100%",
    screenshotFormat: "image/jpeg",
    videoConstraints: videoConstraints
  })), /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      height: "2.5rem",
      margin: "1rem 0 0 0"
    },
    onClick: function onClick(e) {
      e.preventDefault();
      if (selectedFile) {
        setSelectedFile();
      } else {
        capture();
      }
    }
  }, selectedFile ? "Retake" : " Click To Capture")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center"
    }
  }, selectedFile ? /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: "2rem",
      //   width: "9rem",
      margin: "2rem 0 0 0",
      border: "2px solid #FFFFFF",
      fontSize: "2rem"
    },
    disabled: isLoading,
    onClick: function onClick() {
      if (!uploadUrl) {
        handleUpload();
      } else {
        handleFinish();
      }
    }
  }, uploadUrl ? "Finish" : "Upload Image") : null)))));
};
var _default = Part2;
exports.default = _default;