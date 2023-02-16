"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DarkThemeProvider = function DarkThemeProvider(_ref) {
  var children = _ref.children;
  var darkThemeEnabled = (0, _reactRedux.useSelector)(function (state) {
    return state.preferences.darkThemeEnabled;
  });
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {
      theme: darkThemeEnabled ? "dark" : "light"
    }
  }, children);
};
var _default = DarkThemeProvider;
exports.default = _default;