"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _Menu = require("./Menu.styled");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _logo = _interopRequireDefault(require("./logo.png"));
var _reactScroll = require("react-scroll");
var _excluded = ["open"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MenuItems = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  place-items: center;\n  margin-top: 5rem;\n"])));
var Link1 = (0, _styledComponents.default)(_reactScroll.Link)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    margin: 0 2rem;\n    align-items: center;\n    text-decoration: none;\n    color: #FFF;\n    position: absolute;\n    left: 2rem;\n    top: -0.3rem;\n    width: 3rem;\n"])));
var Right = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 0 2rem 0;\n    align-items: center;\n"])));
var Img = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 3rem;\n"])));
var Flex = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-evenly;\n    width: 70%;\n"])));
var T = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 16px;\n    margin-top: 1rem;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n      }\n"])));
var H = (0, _styledComponents.default)(_reactScroll.Link)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      font-size: 1.5rem;\n      font-weight: bold;\n    font-family: 'Montserrat', sans-serif;\n      color: #000;\n"])));
var Menu = function Menu(_ref) {
  var open = _ref.open,
    props = _objectWithoutProperties(_ref, _excluded);
  var isHidden = open ? true : false;
  var tabIndex = isHidden ? 0 : -1;
  return /*#__PURE__*/_react.default.createElement(_Menu.StyledMenu, _extends({
    open: open,
    "aria-hidden": !isHidden
  }, props), /*#__PURE__*/_react.default.createElement(Link1, {
    to: "home",
    spy: true,
    smooth: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/yellow.png",
    alt: "Logo",
    style: {
      width: "5rem",
      height: "5rem"
    }
  })), /*#__PURE__*/_react.default.createElement(MenuItems, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://donor-vaults.s3-website-us-west-2.amazonaws.com/#/avax",
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "home",
    spy: true,
    smooth: true
  }, "Vault")), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "learn",
    spy: true,
    smooth: true
  }, "Earn")), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "rarity",
    spy: true,
    smooth: true
  }, "Donate")), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "faq",
    spy: true,
    smooth: true
  }, "Fundraise for")), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "roadmap",
    spy: true,
    smooth: true
  }, "Docs")), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: "0"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    to: "roadmap",
    spy: true,
    smooth: true
  }, "How it Works"))), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(T, null, "Donor All Right Reserved.")));
};
Menu.propTypes = {
  open: _propTypes.bool.isRequired
};
var _default = Menu;
exports.default = _default;