"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CurrencyCard = _interopRequireDefault(require("./components/CurrencyCard"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ExchangeCard = _interopRequireDefault(require("./components/ExchangeCard"));
var _ThankYouCard = _interopRequireDefault(require("./components/ThankYouCard"));
var _reactRedux = require("react-redux");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 8rem 0 3rem 0;\n    background-color: rgba(249, 232, 202, 1);\n    background-repeat: no-repeat;\n    background-image: url();\n    background-size: 50% 70%;\n    background-position: right top !important;\n  \n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        padding: 1rem 0 2rem 0;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var Payment = function Payment() {
  var PathName = (0, _reactRedux.useSelector)(function (state) {
    return state.path;
  });
  return /*#__PURE__*/_react.default.createElement(Sec, null, PathName === "pay1" ? /*#__PURE__*/_react.default.createElement(_ExchangeCard.default, null) : PathName === "pay2" ? /*#__PURE__*/_react.default.createElement(_ThankYouCard.default, null) : /*#__PURE__*/_react.default.createElement(_CurrencyCard.default, null));
};
var _default = Payment;
exports.default = _default;