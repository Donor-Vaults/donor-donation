"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bg = _interopRequireDefault(require("./bg.png"));
var _Page = require("../Page2/Page2");
var _ = _interopRequireDefault(require("./1.svg"));
var _2 = _interopRequireDefault(require("./2.svg"));
var _3 = _interopRequireDefault(require("./3.svg"));
var _4 = _interopRequireDefault(require("./4.svg"));
var _5 = _interopRequireDefault(require("./5.svg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n \n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(249, 232, 202, 1);\n    padding: 2rem 0;\n    @media only screen and (max-width: 768px) {\n        padding: 2rem 0;\n        background-size: auto 100%;\n      }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n      flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n"])));
var Ts = (0, _styledComponents.default)(_Page.T)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: rgba(140, 150, 166, 1);\n    font-size: 2rem;\n    @media only screen and (max-width: 1000px) {\n      font-size: 1.5rem;\n  }\n"])));
var Icon = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    height: 5rem;\n    width: 5rem;\n    @media only screen and (max-width: 600px) {\n      height: 3rem;\n    width: 3rem;\n  }\n"])));
var IconContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n     display: flex;\n  margin: 4rem 0 0 0;\n    align-items: center;\n    justify-content: space-between;\n    width: 1200px;\n   \n    // background-color: rgba(0,0,0,0.7);\n    \n\n  @media only screen and (max-width: 1400px) {\n      width: 96%;\n      margin: 2rem 0 0 0;\n     \n  }\n  @media only screen and (max-width: 1000px) {\n      width: 99%;\n      margin: 1rem 0 0 0;\n  }\n  @media only screen and (max-width: 800px) {\n      width: 99%;\n    \n  }\n  @media only screen and (max-width: 600px) {\n      width: 99%;\n      \n  }\n"])));
var Line = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 2px;\n  width: 100%;\n  background-color: rgba(234, 225, 209, 1);\n  margin: 4rem 0 0 0;\n"])));
var Page2 = function Page2() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "garage"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Ts, null, "We will be on all the main blockchain networks shortly"), /*#__PURE__*/_react.default.createElement(IconContainer, null, /*#__PURE__*/_react.default.createElement(Icon, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _.default,
    alt: "",
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Icon, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _2.default,
    alt: "",
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Icon, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _4.default,
    alt: "",
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Icon, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _5.default,
    alt: "",
    style: {
      width: '100%',
      height: '100%'
    }
  })))), /*#__PURE__*/_react.default.createElement(Line, null));
};
var _default = Page2;
exports.default = _default;