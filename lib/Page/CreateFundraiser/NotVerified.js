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
var _fa = require("react-icons/fa");
var _Tag = _interopRequireDefault(require("./components/Tag"));
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n // padding: 8rem 0 2rem 0;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(249, 232, 202, 1);\n  @media only screen and (max-width: 1100px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 1300px;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  // background: #ffdea580;\n  border-radius: 1.75rem;\n  position: relative;\n\n  @media only screen and (max-width: 1400px) {\n    width: 98%;\n  }\n  @media only screen and (max-width: 1100px) {\n    flex-direction: column;\n    // background: #ffdea580;\n  }\n"])));
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 2rem;\n  font-weight: light;\n  margin-bottom: 2rem;\n  text-align: left !important;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  // text-align: center;\n  //width: 20rem;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Left = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 2rem;\n  //margin: 5rem 0 0 0;\n  background: #ffffff;\n  border-radius: 1.75rem;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n  @media only screen and (max-width: 1100px) {\n    width: 100%;\n    margin: 6rem 0 0 0;\n  }\n"])));
var Right = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  // align-items: center;\n  width: 60%;\n  // padding: 5rem 0 3rem 0;\n  border-radius: 2rem 0 0 0;\n  // background-color: rgba(255,255,255,0.9);\n  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n  @media only screen and (max-width: 1100px) {\n    width: 100%;\n    margin: 3rem 0 0 0 !important;\n  }\n"])));
var Line = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.2);\n  margin: 3rem 0 0 0;\n"])));
var Margin = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 5rem 0 0 0;\n\n  @media only screen and (max-width: 1100px) {\n    margin: 3rem 0 0 0;\n  }\n"])));
var MarginLeft = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0 1rem 0 4rem;\n\n  @media only screen and (max-width: 1100px) {\n    margin: 0 1rem;\n  }\n"])));
var Grid = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: grid;\n  width: 100%;\n  margin: 3rem 0 0 0;\n  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));\n  grid-gap: 2rem 0.5rem;\n"])));
var Back = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 1rem 2rem 1rem 0;\n  cursor: pointer;\n\n  @media only screen and (max-width: 998px) {\n    position: absolute;\n    top: 1rem;\n    right: 0.5rem;\n  }\n"])));
var Details = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n      180deg,\n      rgba(2, 169, 92, 0.5) 0%,\n      rgba(34, 170, 48, 0.5) 100%\n    ),\n    linear-gradient(0deg, #ffffff, #ffffff);\n\n  padding: 3rem 2rem 2rem 2rem;\n  border: 0.25rem solid #ffffff;\n  border-radius: 1.25rem;\n  ", "\n"])), '' /* margin: 0 1rem 4rem 1rem; */);

var NotVerified = function NotVerified(_ref) {
  var onNext = _ref.onNext,
    hide = _ref.hide,
    onBack = _ref.onBack;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)({
      category: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var validate = function validate() {
    if (!data.category) {
      alert("Please Select Category");
      return false;
    }
    return true;
  };
  var handleClickNext = function handleClickNext(data) {
    var isValid = validate();
    if (isValid) {
      onNext(data);
    }
  };
  return /*#__PURE__*/_react.default.createElement(Sec, {
    style: {
      display: hide ? "none" : ""
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "3rem 0 0 0"
    }
  }, /*#__PURE__*/_react.default.createElement(T, {
    style: {
      margin: "0 0 0.5rem 0",
      fontSize: "1.6rem"
    }
  }, "Your account is Pending for verification. ", /*#__PURE__*/_react.default.createElement("br", null), "Please wait, while we are verfiying your account")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: "2rem",
      // width: "9rem",
      margin: "2rem 0 0 0",
      border: "2px solid #FFFFFF",
      fontSize: "2rem"
    },
    onClick: function onClick() {
      window.location.href = "/allfundraiser";
    }
  }, "Explore")))));
};
var _default = NotVerified;
exports.default = _default;