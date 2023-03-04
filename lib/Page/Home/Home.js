"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Home = _interopRequireDefault(require("./Page1/Home"));
var _Page = _interopRequireDefault(require("./Page2/Page2"));
var _Page2 = _interopRequireDefault(require("./Page4/Page4"));
var _Page3 = _interopRequireDefault(require("./Page7/Page7"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var HomeDefault = function HomeDefault() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Home.default, null), /*#__PURE__*/_react.default.createElement(_Page.default, null), /*#__PURE__*/_react.default.createElement(_Page2.default, {
    id: "allfundraiser"
  }), /*#__PURE__*/_react.default.createElement(_Page3.default, null));
};
var _default = HomeDefault;
exports.default = _default;