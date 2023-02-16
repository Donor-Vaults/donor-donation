"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _exports = require("react-redux/es/exports");
var _reactRouterDom = require("react-router-dom");
var InverseProtected = function InverseProtected(_ref) {
  var children = _ref.children;
  var authData = (0, _exports.useSelector)(function (state) {
    return state.user;
  });
  (0, _react.useEffect)(function () {
    console.log({
      authData: authData
    });
  }, [authData]);
  if (authData.loading) {
    return null;
  }
  if (authData.isAuthenticated) {
    return /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
      to: "/",
      replace: true
    });
  }
  return children;
};
var _default = InverseProtected;
exports.default = _default;