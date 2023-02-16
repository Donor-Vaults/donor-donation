"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _support = _interopRequireDefault(require("./support.png"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HomePage = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  min-height: 100vh;\n  width: 100%;\n  padding: 8rem 0 3rem 0;\n\n background-color: rgba(249, 232, 202, 1);\n\n@media only screen and (max-width: 768px) {\n \n    width: 100%;\n   \n    background-size: auto 100%;\n    flex-direction: column;\n}"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1400px;\n      height: 35rem;\n       display: flex;\n       align-items: center;\n      //   justify-content: space-between;\n        background-color: #98C87D;\n        background-image: url(", ");\n        background-size: 100% 100%;\n       // background-position: right center;\n        background-repeat: no-repeat;\n       // background: red;\n\n       position: relative;\n  \n    @media only screen and (max-width: 1400px) {\n        width: 100%;\n        \n    }\n    @media only screen and (max-width: 1100px) {\n      //   flex-direction: column;\n      //  margin: 7rem  0 0 0;\n       background-size: 40rem 25rem;\n       height: 25rem;\n       justify-content: center;\n    }\n\n    @media only screen and (max-width: 510px) {\n      width: 98%;\n      //margin: 4rem  0 0 0;\n      background-position: center center;\n      background-size: auto auto;\n  }\n"])), _support.default);
var Ht = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #000;\n    font-size: 4.5rem;\n    margin-bottom: 2rem;\n    text-align: left;\n    //font-family: 'PT Serif', serif !important;\n    line-height: 1.15;\n    max-width: 998px;\n    margin: 0 0 0 5rem;\n\n    @media only screen and (max-width: 1300px) {\n      font-size: 4rem;\n    }\n\n    @media only screen and (max-width: 1300px) {\n      font-size: 3rem;\n    }\n\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 2.5rem;\n        font-weight: bold;\n      }\n"])));
var Button = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-color: rgba(2, 169, 92, 1);\n    border: none;\n    border-radius: 2rem;\n    padding: 0 1.5rem;\n    color: #FFF;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    cursor: pointer;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    position: fixed;\n    top: 75%;  /* position the top  edge of the element at the middle of the parent */\n    left: 50%; /* position the left edge of the element at the middle of the parent */\n    transform: translate(-50%, -50%);\n"])));
var HeroImage = function HeroImage() {
  return /*#__PURE__*/_react.default.createElement(HomePage, {
    id: "home"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Ht, null, "Helping each other is human nature"), /*#__PURE__*/_react.default.createElement(Button, {
    style: {
      margin: '5rem 0 0 0',
      height: '4.5rem',
      width: '15rem',
      fontSize: '1.5rem'
    }
  }, "Fundraise Now")));
};
var _default = HeroImage;
exports.default = _default;