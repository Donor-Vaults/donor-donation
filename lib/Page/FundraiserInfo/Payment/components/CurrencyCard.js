"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../../Home/Page2/Page2");
var _fa = require("react-icons/fa");
require("./CurrencyCard.css");
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CurrencyCard = function CurrencyCard(props) {
  var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n     \n        width: 30rem;  \n        height: 30rem; \n       \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n       // justify-content: space-between;\n       background-color: #FFF;\n        margin: 0 auto;\n        border-radius: 1.25rem ;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n       \n        @media only screen and (max-width: 510px) {\n            \n            width: 98%;\n            \n        }\n    "])));
  var Heading = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: 100%;\n        border-bottom: 1px solid grey;\n        padding: 1rem 1rem 0.5rem 2rem;\n        font-size: 1.25rem;\n        font-weight: bold;\n        "])));
  var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       \n        padding: 0 1rem;\n        display: grid;\n        place-items: center;\n    "])));
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Box, {
    onClick: function onClick() {
      return dispatch({
        type: 'PAY1'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(Heading, null, "Contribute"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '400',
      lineHeight: '1.2',
      margin: '3rem 1rem'
    }
  }, "Please choose the currency in which you would like to donate."), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "dropbtn1"
  }, "Country", /*#__PURE__*/_react.default.createElement(_fa.FaAngleDown, {
    style: {
      fontSize: '1.8rem',
      color: 'grey'
    }
  }), " "), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-content1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 1"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 2"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 3")))));
};
var _default = CurrencyCard;
exports.default = _default;