"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WideBox = function WideBox(props) {
  var StyledBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        border-radius: 1rem;\n        border: 2px solid rgba(0,0,0,0.2);\n        padding: 2rem 1.5rem;\n        //font-size: 1.75rem;\n        color: rgba(0,0,0,0.7);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin: 1rem 0 0 0;\n    "])));
  var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        font-size: 1.5rem;\n        color: #000;\n    "])));
  return /*#__PURE__*/_react.default.createElement(StyledBox, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(T, null, props.Title ? props.Title : 'Animal'), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '0.75rem 0 0 0'
    }
  }, props.Text ? props.Text : 'Animal')), /*#__PURE__*/_react.default.createElement("img", {
    src: props.image ? props.image : '',
    alt: "",
    style: {
      width: '4rem',
      height: '4rem'
    }
  }));
};
var _default = WideBox;
exports.default = _default;