"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBurger = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var bColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
var StyledBurger = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 2rem;\n  right: 6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: rgba(2, 169, 92, 1)     ; // ", ";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ", ";\n    }\n\n    :nth-child(2) {\n      opacity: ", ";\n      transform: ", ";\n    }\n\n    :nth-child(3) {\n      transform: ", ";\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
    open = _ref.open;
  return open ? theme.primaryDark : theme.primaryLight;
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref3) {
  var open = _ref3.open;
  return open ? '0' : '1';
}, function (_ref4) {
  var open = _ref4.open;
  return open ? 'translateX(20px)' : 'translateX(0)';
}, function (_ref5) {
  var open = _ref5.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});
exports.StyledBurger = StyledBurger;