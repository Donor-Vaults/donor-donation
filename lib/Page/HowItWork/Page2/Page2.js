"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.T = exports.H = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100%;\n    padding: 4rem 0;\n    background-color: rgba(249, 232, 202, 1) ;\n    width: 100%;\n    \n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.3rem;\n    margin-bottom: 2rem;\n    text-align: left;\n      font-weight: bold;\n      letter-spacing: 0.05rem;\n      line-height: 1.8;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
exports.T = T;
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFFFFF;\n    font-size: 2.5rem;\n    font-weight: bold;\n    margin-bottom: 2rem;\n    text-align: left !important;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n        margin-left: 1rem;\n      }\n"])));
exports.H = H;
var Center = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 1400px;\n      display: flex;\n      flex-direction: column;\n      background-color: #289B66;\n      padding: 2rem 1.5rem 0 1.5rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    @media only screen and (max-width: 1400px) {\n        width: 100%;\n    }\n\n"])));
var Page2H = function Page2H() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      color: '#3E4958'
    }
  }, "How to fundraise"), /*#__PURE__*/_react.default.createElement(Center, null, /*#__PURE__*/_react.default.createElement(T, null, "DONOR platform brings people together to find the support they need when they need. Whether you are fundraising for yourself or for someone else or for a cause close to your heart or for a non-profit, you can set up a fundraiser and start raising money in a few simple steps."))));
};
var _default = Page2H;
exports.default = _default;