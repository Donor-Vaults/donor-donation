"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Page = _interopRequireDefault(require("./Page1/Page1"));
var _Page2 = _interopRequireDefault(require("./Page2/Page2"));
var _Page3W = _interopRequireDefault(require("./Page3/Page3W"));
var _Page4H = _interopRequireDefault(require("./Page4/Page4H"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Work = function Work() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Page.default, null), /*#__PURE__*/_react.default.createElement(_Page2.default, null), /*#__PURE__*/_react.default.createElement(_Page3W.default, null), /*#__PURE__*/_react.default.createElement(_Page4H.default, null));
};
var _default = Work;
exports.default = _default;