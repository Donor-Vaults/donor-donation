"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../Page/Home/Page2/Page2");
var _Navbar = require("../Navbar/Navbar");
var _templateObject, _templateObject2, _templateObject3;
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
var Card = function Card(props) {
  var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n     \n        width: 24rem;  \n        height: 30rem; \n       \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n       background-color: rgba(2, 169, 92, 0.75);\n        margin: 2rem auto 0 auto;\n        border-radius: 2rem 2rem 0 0 ;\n       \n        @media only screen and (max-width: 510px) {\n            \n            width: 98%;\n            \n        }\n    "])));
  var Upper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: 18rem;\n        width: 100%;\n        "])));
  var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       \n        padding: 0 1rem;\n        display: grid;\n        place-items: center;\n    "])));
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Upper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "".concat(props.img ? props.img : ""),
    alt: "",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/_react.default.createElement(Lower, null, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: '#FFFFFF',
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  }, props.name ? props.name : "")));
};
var _default = Card;
exports.default = _default;