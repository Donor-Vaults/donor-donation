"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _reactSuperResponsiveTable = require("react-super-responsive-table");
require("react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}
var Box1 = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 35rem;\n  background-color: #2d7b43;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem auto 0 auto;\n  justify-self: center;\n  padding: 3rem 0;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 2rem;\n\n  @media only screen and (max-width: 500px) {\n    width: 98%;\n  }\n"])));
var Flex = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  // border-radius: 0.75rem 0.75rem 0 0;\n"])));
var Ts = (0, _styledComponents.default)(_reactSuperResponsiveTable.Td)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center;\n  color:#FFF;\n  height: 3rem;\n"])));
var Hs = (0, _styledComponents.default)(_reactSuperResponsiveTable.Th)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center;\n  color:#FFF;\n"])));
var TH = (0, _styledComponents.default)(_reactSuperResponsiveTable.Thead)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  \n  height: 2rem;\n"])));
var Container = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 80%;\n  @media only screen and (max-width: 768px) {\n    width: 90%;\n    flex-direction: column;\n  }\n"])));
var OneDisbursementItem = function OneDisbursementItem(_ref) {
  var data = _ref.data;
  console.log("Saasa", data);
  var createdAt = data.createdAt,
    amount = data.amount,
    id = data.id;
  return (
    /*#__PURE__*/
    // <Card sx={{}}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} variant="body2" gutterBottom>
    //       Date: {moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}
    //     </Typography>
    //     <Typography variant="body2">
    //       Amount: {Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}
    //     </Typography>
    //     <Typography variant="body2" >
    //       <a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank">Txn Hash: {id}</a>
    //     </Typography>
    //   </CardContent>
    // </Card>
    _react.default.createElement(_reactSuperResponsiveTable.Tbody, {
      style: {
        margin: '0.5rem 0 0 0'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Tr, null, /*#__PURE__*/_react.default.createElement(Ts, {
      style: {}
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "https://testnet.bscscan.com/tx/".concat(id),
      target: "_blank",
      style: {
        textDecoration: 'none',
        textAlign: 'center'
      }
    }, id.slice(0, 10), "..")), /*#__PURE__*/_react.default.createElement(Ts, {
      style: {}
    }, (0, _moment.default)(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")), /*#__PURE__*/_react.default.createElement(Ts, {
      style: {}
    }, _web.default.utils.fromWei(amount), " ", _config.default.DONTATION_TOKEN_SYMBOL)))
  );
};
var OneDonationItem = function OneDonationItem(_ref2) {
  var data = _ref2.data;
  console.log("Saasa", data);
  var id = data.id,
    createdAt = data.createdAt,
    amount = data.amount,
    donor = data.donor;
  return /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Tbody, null, /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Tr, null, /*#__PURE__*/_react.default.createElement(Ts, {
    style: {}
  }, " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://testnet.bscscan.com/tx/".concat(id),
    target: "_blank",
    style: {
      textDecoration: 'none',
      textAlign: 'center'
    }
  }, id.slice(0, 10))), /*#__PURE__*/_react.default.createElement(Ts, {
    style: {
      padding: '0 0.5rem'
    }
  }, (0, _moment.default)(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")), /*#__PURE__*/_react.default.createElement(Ts, {
    style: {}
  }, _web.default.utils.fromWei(amount), " ", _config.default.DONTATION_TOKEN_SYMBOL), /*#__PURE__*/_react.default.createElement(Ts, {
    style: {}
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://testnet.bscscan.com/address/".concat(donor),
    target: "_blank",
    style: {
      textDecoration: 'none',
      textAlign: 'center'
    }
  }, donor.slice(0, 10)))));
  // <Card sx={{}}>
  //   <CardContent>
  //     <Typography sx={{ fontSize: 14 }} variant="body2" gutterBottom>
  //       Date: {moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}
  //     </Typography>

  //     <Typography variant="body2">
  //       Amount: {Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}
  //     </Typography>

  //     <Typography variant="body2" >
  //       <a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank">Txn Hash: {id}</a>
  //     </Typography>

  //     <Typography variant="body2" >
  //       <a href={`https://testnet.bscscan.com/address/${donor}`} target="_blank">Donor: {donor}</a>
  //     </Typography>
  //   </CardContent>

  // </Card>
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
            return donationContract.methods.totalRaised().call();
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
  return (
    /*#__PURE__*/
    // <div style={{ display: "block" }}>
    _react.default.createElement(Box1, null, /*#__PURE__*/_react.default.createElement(_DonationModal.default, {
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
        margin: "3rem 0 1rem 0"
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
        width: "100%",
        margin: "0 0 1rem 0",
        padding: "0 2rem"
      }
    }, /*#__PURE__*/_react.default.createElement(_Page.T, {
      style: _defineProperty({
        margin: "0",
        textAlign: 'left'
      }, "margin", "0 0 0.5rem 0")
    }, "Disbursement Details"), /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Table, null, /*#__PURE__*/_react.default.createElement(TH, null, /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Tr, null, /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Txn Hash"), /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Date"), /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Amount"))), subgraphDetail.disbursements.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(OneDisbursementItem, {
        data: item,
        key: index
      });
    }))) : null, subgraphDetail ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: "100%",
        margin: "0 0 1rem 0",
        padding: "0 2rem"
      }
    }, /*#__PURE__*/_react.default.createElement(_Page.T, {
      style: _defineProperty({
        margin: "0"
      }, "margin", "0 0 0.5rem 0")
    }, "Donations Details (Latest #5)"), /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Table, null, /*#__PURE__*/_react.default.createElement(TH, null, /*#__PURE__*/_react.default.createElement(_reactSuperResponsiveTable.Tr, null, /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Txn Hash"), /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Date"), /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Amount"), /*#__PURE__*/_react.default.createElement(Hs, {
      style: {
        color: "#FFF"
      }
    }, "Donor"))), subgraphDetail.dontations.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(OneDonationItem, {
        data: item,
        key: index
      });
    }))) : null)

    // </div>
  );
};
var _default = DonationPanel;
exports.default = _default;