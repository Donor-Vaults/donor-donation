"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMenu = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledMenu = _styledComponents.default.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: none; //  ", ";\n  transform: ", ";\n  min-height: 100vh;\n  width:100%;\n  text-align: center;\n  align-items: center;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  backdrop-filter: blur(2rem);\n  margin: 0;\n  a {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #FFF; \n    text-decoration: none;\n    transition: color 0.3s linear;\n    margin: 1rem 0;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.primaryLight;
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'translateX(0)' : 'translateX(-100%)';
});
exports.StyledMenu = StyledMenu;