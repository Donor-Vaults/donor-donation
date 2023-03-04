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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RegisterationHome = function RegisterationHome() {
  var PathName = "F1";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, PathName === 'Registration2' ? /*#__PURE__*/_react.default.createElement(_Registration.default, null) : PathName === 'Registration3' ? /*#__PURE__*/_react.default.createElement(_Registration2.default, null) : PathName === 'Registration4' ? /*#__PURE__*/_react.default.createElement(_Registration3.default, null) : PathName === 'Registration5' ? /*#__PURE__*/_react.default.createElement(_Registration4a.default, null) : PathName === 'Registration6' ? /*#__PURE__*/_react.default.createElement(_Registration4.default, null) : PathName === 'Registration7' ? /*#__PURE__*/_react.default.createElement(_Registration5.default, null) : PathName === 'Registration8' ? /*#__PURE__*/_react.default.createElement(_Registration6.default, null) : PathName === 'Back1' ? /*#__PURE__*/_react.default.createElement(_Registeration.default, null) : PathName === 'Back2' ? /*#__PURE__*/_react.default.createElement(_Registration.default, null) : PathName === 'Back3' ? /*#__PURE__*/_react.default.createElement(_Registration2.default, null) : PathName === 'Back4' ? /*#__PURE__*/_react.default.createElement(_Registration3.default, null) : PathName === 'Back5' ? /*#__PURE__*/_react.default.createElement(_Registration4.default, null) : PathName === 'Back6' ? /*#__PURE__*/_react.default.createElement(_Registration5.default, null) : PathName === 'F1' ? /*#__PURE__*/_react.default.createElement(_Fourm.default, null) : PathName === 'F2' ? /*#__PURE__*/_react.default.createElement(_FourmPage.default, null) : PathName === 'F3' ? /*#__PURE__*/_react.default.createElement(_FourmPage2.default, null) : PathName === 'F4' ? /*#__PURE__*/_react.default.createElement(_FourmPage3.default, null) : PathName === 'F5' ? /*#__PURE__*/_react.default.createElement(_FourmPage4.default, null) : PathName === 'F6' ? /*#__PURE__*/_react.default.createElement(_FourmPage5.default, null) : PathName === 'F7' ? /*#__PURE__*/_react.default.createElement(_FourmPage6.default, null) : /*#__PURE__*/_react.default.createElement(_Registeration.default, null));
};
var _default = RegisterationHome;
exports.default = _default;