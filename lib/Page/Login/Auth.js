"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Registeration = _interopRequireDefault(require("./Registeration1"));
var _Registration = _interopRequireDefault(require("./Registration2/Registration2"));
var _Registration2 = _interopRequireDefault(require("./Registration3/Registration3"));
var _Registration3 = _interopRequireDefault(require("./Registration4"));
var _Registration4a = _interopRequireDefault(require("./Registration4a"));
var _Registration4 = _interopRequireDefault(require("./Registration5/Registration5"));
var _Registration5 = _interopRequireDefault(require("./Registration6/Registration6"));
var _Registration6 = _interopRequireDefault(require("./Registration9/Registration9"));
var _reactRedux = require("react-redux");
var _Fourm = _interopRequireDefault(require("../Fundraise/Fourm"));
var _FourmPage = _interopRequireDefault(require("../Fundraise/FourmPage1"));
var _FourmPage2 = _interopRequireDefault(require("../Fundraise/FourmPage2"));
var _FourmPage3 = _interopRequireDefault(require("../Fundraise/FourmPage3"));
var _FourmPage4 = _interopRequireDefault(require("../Fundraise/FourmPage4"));
var _FourmPage5 = _interopRequireDefault(require("../Fundraise/FourmPage5"));
var _FourmPage6 = _interopRequireDefault(require("../Fundraise/FourmPage6"));
var _Login = _interopRequireDefault(require("./Login"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _material = require("@mui/material");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(249, 232, 202, 1);\n  padding: 8rem 0 2rem 0;\n  @media only screen and (max-width: 768px) {\n    min-height: 100vh;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n"])));
var Gradient = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    180deg,\n    rgba(2, 169, 92, 0.5) 0%,\n    rgba(34, 170, 48, 0.5) 100%\n  );\n  border-radius: 2rem;\n  padding: 3.5rem 3rem 2rem 3rem;\n\n    width: 100%;\n    display: flex;\n    width: 1300px;\n    align-items: center;\n    justify-content: center;\n    @media only screen and (max-width: 1400px) {\n      width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n      flex-direction: column;\n      \n    }\n"])));
var Width = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n \n\n  \n"])));
var RegisterationHome = function RegisterationHome() {
  // console.log(PathName)

  return /*#__PURE__*/_react.default.createElement(Sec, null, /*#__PURE__*/_react.default.createElement(Gradient, null, /*#__PURE__*/_react.default.createElement(_Login.default, null)));
};
var _default = RegisterationHome;
exports.default = _default;