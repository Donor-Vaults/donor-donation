"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _fundraisersSlice = _interopRequireDefault(require("./slices/fundraisersSlice"));
var _userSlice = _interopRequireDefault(require("./slices/userSlice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice.default,
    fundraisers: _fundraisersSlice.default
  }
});
exports.default = _default;