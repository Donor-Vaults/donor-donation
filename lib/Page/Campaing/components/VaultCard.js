"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../Home/Page2/Page2");
var _Navbar = require("../../../components/Navbar/Navbar");
var _vault = _interopRequireDefault(require("./vault.jpg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var bColor = (0, _styledTheming.default)("theme", {
  light: "linear-gradient(to right, #36d1dc, #5b86e5)",
  dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
});
exports.bColor = bColor;
var Mobile = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n\n    @media only screen and (max-width: 510px) {\n        display: none;\n}\n\n  "])));
var VaultCard = function VaultCard(props) {
  var Box = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        display: flex;\n        width: 40rem; \n       // height: 30rem;  \n       background-color: #FFF;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        margin: 2rem auto 0 auto;\n        justify-self: center;\n        padding: 0 0 1rem 0;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n        border-radius: 0.75rem;\n\n        @media only screen and (max-width: 768px) {\n            width: 98%;\n            \n            \n        }\n    "])));
  var Upper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        height: 25rem;\n        width: 100%;\n       // border-radius: 0.75rem 0.75rem 0 0; \n        "])));
  var Lower = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n       \n        padding: 0 2rem;\n\n\n        @media only screen and (max-width: 768px) {\n            padding: 0 1rem;\n            \n        }\n\n    "])));
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Upper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _vault.default,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      borderRadius: '0.75rem 0.75rem 0 0'
    }
  })), /*#__PURE__*/_react.default.createElement(Lower, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      margin: '2rem 0 2.5rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: '#02A95C',
      fontSize: '1.8rem',
      margin: '0',
      textAlign: 'center'
    }
  }, "Auto Compounding $DONOR vaults opening soon"))));
};
var _default = VaultCard;
exports.default = _default;