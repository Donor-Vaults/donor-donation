"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HeroImage = _interopRequireDefault(require("./HeroImage/HeroImage"));
var _HowTo = _interopRequireDefault(require("./HowTo/HowTo"));
var _Roadmap = _interopRequireDefault(require("./Page3/Roadmap"));
var _CardContainer = _interopRequireDefault(require("./Page4/CardContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Work = function Work() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeroImage.default, null), /*#__PURE__*/_react.default.createElement(_HowTo.default, null), /*#__PURE__*/_react.default.createElement(_Roadmap.default, null), /*#__PURE__*/_react.default.createElement(_CardContainer.default, null));
};
var _default = Work;
exports.default = _default;