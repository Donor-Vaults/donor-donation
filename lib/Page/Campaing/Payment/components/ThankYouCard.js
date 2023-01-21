"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../../Home/Page2/Page2");
require("./CurrencyCard.css");
var _Navbar = require("../../../../components/Navbar/Navbar");
var _thank = _interopRequireDefault(require("./thank.svg"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ThankYouCard = function ThankYouCard(props) {
  var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n     \n        width: 30rem;  \n        min-height: 25rem; \n       \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n       justify-content: center;\n       background-color: #FFF;\n        margin: 0 auto;\n        border-radius: 1.25rem ;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n       \n        @media only screen and (max-width: 510px) {\n            \n            width: 98%;\n            \n        }\n    "])));
  var Heading = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: 100%;\n        border-bottom: 1px solid grey;\n        padding: 1rem 1rem 0.5rem 2rem;\n        font-size: 1.25rem;\n        font-weight: bold;\n        "])));
  var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       \n        padding: 0 1rem;\n        display: grid;\n        place-items: center;\n    "])));
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _thank.default,
    alt: "",
    style: {
      height: '6rem',
      width: '16rem'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '400',
      lineHeight: '1.2',
      margin: '0 1rem 1rem 1rem',
      fontSize: '1.05rem',
      textAlign: 'center'
    }
  }, "Payment Received"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '400',
      lineHeight: '1.2',
      margin: '0 1rem',
      fontSize: '1.05rem',
      textAlign: 'center'
    }
  }, "Your generosity means a lot to us!!")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '2rem',
      minWidth: '9rem',
      margin: '1rem 0',
      border: '2px solid #F7F7F7',
      fontSize: '1.75rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    style: {
      textDecoration: 'none',
      color: '#fff'
    }
  }, "Return Home"))));
};
var _default = ThankYouCard;
exports.default = _default;