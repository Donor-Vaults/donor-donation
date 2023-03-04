"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.T = exports.H = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _bg = _interopRequireDefault(require("./bg.svg"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _king = _interopRequireDefault(require("./king.jpg"));
var _right = _interopRequireDefault(require("./right.png"));
var _framerMotion = require("framer-motion");
var _element = _interopRequireDefault(require("./element.png"));
var _Navbar = require("../../../components/Navbar/Navbar");
var _Frame = _interopRequireDefault(require("./Frame.png"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height:  45rem;\n    background-color: rgba(249, 232, 202, 1) ;\n    width: 100%;\n  \n    padding: 10rem 0 0 0;\n    \n    @media only screen and (max-width: 768px) {\n        \n      \n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.3rem;\n    margin-bottom: 2rem;\n    text-align: left;\n      font-weight: bold;\n      letter-spacing: 0.05rem;\n      line-height: 1.8;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
exports.T = T;
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFFFFF;\n    font-size: 2.5rem;\n    font-weight: bold;\n    margin-bottom: 2rem;\n    text-align: left !important;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
exports.H = H;
var Center = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 1000px;\n      display: flex;\n      flex-direction: column;\n      background-color: rgba(0, 29, 35, 1);\n      \n        border-radius: 1.5rem;\n        padding: 3rem 20rem 3rem 3rem;\n        background-image: url(", ");\n        background-size: 20rem 100%;\n        background-position: right center;\n        background-repeat: no-repeat;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n       \n        padding: 3rem;\n        background-image: none;\n    }\n\n"])), _bg.default);
var Page2 = function Page2() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Center, null, /*#__PURE__*/_react.default.createElement(H, null, "How are we different"), /*#__PURE__*/_react.default.createElement(T, null, "We are like \"gofundme\" of the crypto-world. The differences between DONOR and GOFUNDME are - we help people from any part of the world, we ensure each cent is utilised for the purpose, and all on a blockchain platform managed by the community.")));
};
var _default = Page2;
exports.default = _default;