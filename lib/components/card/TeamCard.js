"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Frame = _interopRequireDefault(require("./Frame.png"));
var _framerMotion = require("framer-motion");
var _Page = require("../../Page/Home/Page2/Page2");
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
  var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        // height: 25rem; \n        width: 25rem;   \n     \n       \n        margin: 2rem 0 0 0;\n       cursor: grab;\n       justify-self: center;\n       @media only screen and (max-width: 500px) {\n            // height: 300px; \n            width: 99%;  \n      }\n    "])));
  var Upper = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: 22rem;\n        width: 100%;\n       \n    //     @media only screen and (max-width: 500px) {\n    //         height: 284px; \n    //         width: 284x; \n          \n    //   }\n        "])));
  var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       \n        \n    "])));
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Upper, {
    whileHover: {
      scale: 1.1,
      boxShadow: "0 0 25px #ff7b00"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "".concat(props.img ? props.img : ""),
    alt: "",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/_react.default.createElement(Lower, null, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: "rgba(2, 169, 92, 1)",
      fontSize: '1rem',
      margin: '1.5rem 0 1.5rem 0'
    }
  }, props.date ? props.date : '  04 August 2021'), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: 'rgba(34, 34, 34, 1)',
      fontSize: '1.1rem',
      fontWeight: '400',
      lineHeight: '1.4'
    }
  }, props.desc ? props.desc : '5 Ways on how technology can help your capital raise.')));
};
var _default = Card;
exports.default = _default;