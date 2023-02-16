"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Wwe.css");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../components/Navbar/Navbar");
var _logo = _interopRequireDefault(require("../../components/Navbar/logo.svg"));
var _doc = _interopRequireDefault(require("./components/doc.svg"));
var _reactRedux = require("react-redux");
var _upload = require("../../utils/upload");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  padding: 8rem 0 2rem 0;\n  // flex-direction: column;\n  // align-items: center;\n  justify-content: center;\n  background-color: rgba(249, 232, 202, 1);\n  @media only screen and (max-width: 1100px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 1300px;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffdea580;\n  border-radius: 1.75rem;\n  position: relative;\n\n  @media only screen and (max-width: 1400px) {\n    width: 98%;\n  }\n  @media only screen and (max-width: 1100px) {\n    flex-direction: column;\n    background: #ffdea580;\n  }\n"])));
var InputContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 25rem;\n  border-radius: 0.75rem;\n  background-color: #fff;\n"])));
var Input = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
var H = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 2rem;\n  font-weight: light;\n  margin-bottom: 2rem;\n  text-align: left !important;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  // text-align: center;\n  //width: 20rem;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Left = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 2rem;\n  //margin: 5rem 0 0 0;\n  background: #ffffff;\n  border-radius: 1.75rem;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n  @media only screen and (max-width: 1100px) {\n    width: 100%;\n    margin: 6rem 0 0 0;\n    padding: 2rem 2rem 1rem 2rem;\n  }\n"])));
var Right = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  // align-items: center;\n  width: 60%;\n  // padding: 5rem 0 3rem 0;\n  border-radius: 2rem 0 0 0;\n  // background-color: rgba(255,255,255,0.9);\n  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n  @media only screen and (max-width: 1100px) {\n    width: 100%;\n    margin: 3rem 0 0 0;\n  }\n"])));
var Line = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.2);\n  margin: 3rem 0 0 0;\n"])));
var Margin = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin: 5rem 0 0 0;\n\n  @media only screen and (max-width: 1100px) {\n    margin: 3rem 0 0 0;\n  }\n"])));
var MarginLeft = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 0 1rem 0 4rem;\n\n  @media only screen and (max-width: 1100px) {\n    margin: 0 1rem;\n  }\n"])));
var Grid = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: grid;\n  width: 100%;\n  margin: 3rem 0 0 0;\n  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));\n  grid-gap: 2rem 0.5rem;\n"])));
var Back = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: 2rem 3rem 0 0;\n  cursor: pointer;\n\n  @media only screen and (max-width: 998px) {\n    position: absolute;\n    top: 1rem;\n    right: 0.5rem;\n    margin: 1rem 2rem 1rem 0;\n  }\n"])));
var Details = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n      180deg,\n      rgba(2, 169, 92, 0.5) 0%,\n      rgba(34, 170, 48, 0.5) 100%\n    ),\n    linear-gradient(0deg, #ffffff, #ffffff);\n\n  padding: 3rem 2rem 2rem 2rem;\n  border: 0.25rem solid #ffffff;\n  border-radius: 1.25rem;\n  margin: 2rem 1rem 4rem 1rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 3rem 1rem 2rem 1rem;\n  }\n"])));
var FourmPage5 = function FourmPage5(_ref) {
  var onNext = _ref.onNext,
    hide = _ref.hide,
    onBack = _ref.onBack;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    documentUrl = _useState2[0],
    setDocumentUrl = _useState2[1];
  var _useState3 = (0, _react.useState)({
      supportingDocuments: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var inputFile = (0, _react.useRef)(null);
  var validate = function validate() {
    if (data.supportingDocuments.length == 0) {
      alert("Please Select Supporting Document");
      return;
    }
    return true;
  };
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _upload.uploadFile)(data.supportingDocuments[0]);
          case 3:
            url = _context.sent;
            setDocumentUrl(url);
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("handleUpload", _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function handleUpload() {
      return _ref2.apply(this, arguments);
    };
  }();
  var renderButton = function renderButton() {
    var text = "";
    var _onClick = "";
    if (documentUrl) {
      text = "Next";
      _onClick = handleClickNext;
    } else {
      text = "Upload";
      _onClick = handleUpload;
    }
    return /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
      style: {
        marginTop: "2rem",
        borderRadius: "2rem",
        width: "9rem",
        margin: "1rem 0",
        border: "2px solid #FFFFFF",
        fontSize: "2rem"
      },
      onClick: function onClick() {
        return _onClick();
      }
    }, text);
  };
  (0, _react.useEffect)(function () {
    console.log({
      data: data
    });
  }, [data]);
  var handleClickNext = function handleClickNext() {
    var isValid = validate();
    if (isValid) {
      onNext({
        supportingDocuments: [documentUrl]
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(Sec, {
    style: {
      display: hide ? "none" : ""
    }
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "",
    style: {
      width: "5rem",
      height: "5rem"
    }
  }), /*#__PURE__*/_react.default.createElement(Margin, null, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      color: "#000"
    }
  }, "Any documents you want to upload to support your fundraiser"))), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Back, {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    },
    onClick: function onClick() {
      onBack();
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
  }, "Back"))), /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(InputContainer, {
    onClick: function onClick() {
      inputFile.current.click();
    }
  }, data.supportingDocuments.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("iframe", {
    height: 400,
    width: 400,
    src: URL.createObjectURL(data.supportingDocuments[0]),
    title: "title"
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Input, {
    type: "image",
    src: _doc.default,
    alt: "",
    className: "input1",
    style: {
      height: "3rem",
      width: "3.5rem"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "1.5rem 0 0 0"
    }
  }, "below 300 KB pdf format only")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "1.5rem 0 0 0",
      fontSize: "1.25rem",
      textAlign: "center"
    }
  }, "Click here to select supporting document"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    id: "file",
    accept: "application/pdf",
    ref: inputFile,
    onChange: function onChange(f) {
      if (f.target.files.length > 0) {
        var files = _toConsumableArray(data.supportingDocuments);
        files.push(f.target.files[0]);
        setData({
          supportingDocuments: files
        });
      }
    },
    style: {
      display: "none"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center"
    }
  }, renderButton())))));
};
var _default = FourmPage5;
exports.default = _default;