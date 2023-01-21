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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    padding: 8rem 0 2rem 0;\n    // flex-direction: column;\n      // align-items: center;\n       justify-content: center;\n       background-color: rgba(249, 232, 202, 1);\n    @media only screen and (max-width: 1100px) {\n        \n        flex-direction: column;\n        align-items: center;\n        \n      }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n     // flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        background: #FFDEA580;\n      border-radius: 1.75rem;\n      position: relative;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 98%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n        background: #FFDEA580;\n    }\n"])));
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-size: 2rem;\n    font-weight: light;\n    margin-bottom: 2rem;\n    text-align: left !important;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.2rem;\n    margin-bottom: 2rem;\n   // text-align: center;\n    //width: 20rem;\n\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n        \n      }\n"])));
var Left = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        width: 40%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        padding: 0 2rem;\n        //margin: 5rem 0 0 0;\n        background: #FFFFFF;\n        border-radius: 1.75rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n     \n        @media only screen and (max-width: 1100px) {\n            width: 100%;\n            margin: 6rem 0 0 0;\n        }\n\n"])));
var Right = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n     // align-items: center;\n        width: 60%;\n       // padding: 5rem 0 3rem 0;\n      border-radius: 2rem 0 0 0;\n     // background-color: rgba(255,255,255,0.9);\n       // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n        @media only screen and (max-width: 1100px) {\n            width: 100%;\n            margin: 3rem 0 0 0;\n        }\n\n"])));
var Line = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 1px;\n    background: rgba(0,0,0,0.2);\n    margin: 3rem 0 0 0;\n"])));
var Margin = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin: 5rem 0 0 0;\n\n    @media only screen and (max-width: 1100px) {\n        \n        margin: 3rem 0 0 0;\n    }\n\n"])));
var MarginLeft = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin: 0 1rem 0 4rem;\n\n    @media only screen and (max-width: 1100px) {\n        \n        margin: 0 1rem;\n    }\n"])));
var Grid = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: grid;\n    width: 100%;\n    margin: 3rem 0 0 0;\n    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));\n     grid-gap: 2rem 0.5rem;\n   \n"])));
var Back = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n     margin: 1rem 2rem 1rem 0;\n    cursor: pointer;\n\n    @media only screen and (max-width: 998px) {\n        position: absolute;\n        top: 1rem;\n        right: 0.5rem;\n    }  \n\n"])));
var Details = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n\n\nbackground: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF);\n\n\n    padding: 3rem 2rem 2rem 2rem;\n    border: 0.25rem solid #FFFFFF;\n    border-radius: 1.25rem;\n    margin: 0 1rem 4rem 1rem;\n\n"])));
var FourmPage2 = function FourmPage2(_ref) {
  var onNext = _ref.onNext,
    hide = _ref.hide,
    onBack = _ref.onBack;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)({
      goalAmount: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var validate = function validate() {
    if (!data.goalAmount) {
      alert("Please Enter Goal Amount");
      return false;
    }
    return true;
  };
  var handleClickNext = function handleClickNext() {
    var isValid = validate();
    if (isValid) {
      onNext(data);
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
      width: '5rem',
      height: '5rem'
    }
  }), /*#__PURE__*/_react.default.createElement(Margin, null, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      color: '#000'
    }
  }, "Fund amount you would like to raise"), /*#__PURE__*/_react.default.createElement(T, {
    style: {
      color: '#000'
    }
  }, "If you need more funds you can anytime start a new fundraiser."))), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Back, {
    onClick: function onClick() {
      onBack();
    },
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '8rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
      color: '#000',
      margin: '0',
      fontSize: '1.75rem'
    }
  }, "Back"))), /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement(T, {
    style: {
      margin: '0 0 0 0',
      fontSize: '1.6rem'
    }
  }, "Your goal amount"), /*#__PURE__*/_react.default.createElement("input", {
    type: "Number",
    placeholder: "Your goal amount",
    className: "input1",
    onChange: function onChange(t) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        goalAmount: t.target.value
      }));
    },
    style: {
      height: "4rem",
      border: '1px solid rgba(0,0,0,0.2)',
      borderRadius: '0.75rem',
      width: '100%',
      margin: '2rem 0 0 0'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0 0 0',
      color: '#FFF'
    }
  }, "Please note that amounts are shown in terms of US Dollars but the donation would be in cryptocurrency that is remitted after deducting the platform fees."), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '2rem',
      width: '9rem',
      margin: '2rem 0 0 0',
      border: '2px solid #FFFFFF',
      fontSize: '2rem'
    },
    onClick: function onClick() {
      return handleClickNext();
    }
  }, "Next"))))));
};
var _default = FourmPage2;
exports.default = _default;