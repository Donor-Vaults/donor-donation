"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Tag = function Tag(props) {
  var StyledtTag = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        border-radius: 2rem;\n        border: 2px solid #FFF;\n        padding: 1rem 0.5rem;\n        font-size: 1.25rem;\n        color: #FFF;\n        display: grid;\n        place-items: center;\n       // width: 14rem;\n    "])));
  return /*#__PURE__*/_react.default.createElement(StyledtTag, null, props.Text ? props.Text : 'Animal');
};
var _default = Tag;
exports.default = _default;