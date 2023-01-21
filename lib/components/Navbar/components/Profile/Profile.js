"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _pro = _interopRequireDefault(require("./pro.png"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledProfile = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  cursor: pointer;\n"])));
var Profile = function Profile() {
  var userData = (0, _reactRedux.useSelector)(function (state) {
    return state.user;
  });
  var user = userData.user;
  console.log({
    user: user
  });
  if (userData.loading) {
    return null;
  }
  var getImgSrc = function getImgSrc() {
    console.log("getImgSrc", {
      user: user
    });
    if (userData.isAuthenticated && user.selfie) {
      return user.selfie;
    }
    console.log({});
  };
  return /*#__PURE__*/_react.default.createElement(StyledProfile, {
    to: userData.isAuthenticated ? "/profile" : "/login"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: getImgSrc(),
    alt: "",
    style: {
      height: "3rem",
      width: "3rem",
      borderRadius: "50%"
    }
  }));
};
var _default = Profile;
exports.default = _default;