"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
require("./Style.css");
var _pic = _interopRequireDefault(require("./pic.png"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _BigCard = _interopRequireDefault(require("./components/BigCard"));
var _SmallCard = _interopRequireDefault(require("./components/SmallCard"));
var _VaultCard = _interopRequireDefault(require("./components/VaultCard"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 8rem 0 3rem 0;\n    background-color: rgba(249, 232, 202, 1);\n    background-repeat: no-repeat;\n    background-image: url();\n    background-size: 50% 70%;\n    background-position: right top !important;\n  \n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        padding: 1rem 0 2rem 0;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #000;\n    font-weight: normal;\n    font-size: 1.8rem;\n    margin: 1rem 0 -0.5rem 2rem; \n    // margin-bottom: 2rem;\n    // text-align: left;\n    //  font-weight: lighter;\n    //  letter-spacing: 0.05rem;\n    //  line-height: 1.8;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
var Tp = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: grey;\n    font-weight: normal;\n    font-size: 1.2rem;\n    margin: 1rem 0 -0.5rem 2rem; \n    text-align: right;\n \n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
var Flex = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        width: 100%;\n        display: flex;\n        //\n        justify-content: space-between;\n       // align-items: center;\n     \n    @media only screen and (max-width: 1250px) {\n       \n        flex-direction: column;\n      }\n"])));
var Button = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: rgba(2, 169, 92, 1);\n  border: none;\n  border-radius: 0 0.5rem 0.5rem 0;\n  padding: 0 1.5rem;\n  color: #FFF;\n  font-size: 1.2rem;\n  height: 8rem;\n  width: 15rem;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n \n  @media only screen and (max-width: 1100px) {\n    height: 4rem;\n   \n  }\n\n  @media only screen and (max-width: 768px) {\n    height: 4rem;\n    width: 100%;\n    border-radius: 0 0 0.5rem 0.5rem;\n  }\n"])));
var SmallButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 2px solid rgba(2, 169, 92, 1);\n  border-radius: 0.5rem ;\n  padding: 0.5rem 1.5rem;\n  color: rgba(2, 169, 92, 1);\n  font-size: 1.2rem;\n  cursor: pointer;\n      margin: 1.5rem 0 0 0;\n"])));
var Width = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n      flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n"])));
var Margin = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n@media only screen and (max-width: 1100px) {\n  margin: 0 0 1rem 0;\n}\n@media only screen and (max-width: 768px) {\n  margin: 1rem 0;\n}\n"])));
var Heading = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    color: rgba(2, 169, 92, 1);\n    font-size: 2.5rem;\n      //margin: 0.5rem 0;\n      font-weight: bold;\n     text-align: center;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n      \n      }\n"])));
var Line = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background: rgba(196, 196, 196, 0.3);\n    width: 75%;\n    height: 3px;\n    margin: 1rem 0 0 0;\n    @media only screen and (max-width: 1350px) {\n      //width: 20rem;\n    }\n"])));
var Page5 = function Page5() {
  var _useState = (0, _react.useState)('none'),
    _useState2 = _slicedToArray(_useState, 2),
    dis = _useState2[0],
    setDis = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(Heading, null, "Feeding From Far-Ration Distribution Amid Lockdown"), /*#__PURE__*/_react.default.createElement(Line, null)), /*#__PURE__*/_react.default.createElement(Flex, null, /*#__PURE__*/_react.default.createElement(_BigCard.default, {
    img: _pic.default
  }), /*#__PURE__*/_react.default.createElement(_SmallCard.default, null))));
};
var _default = Page5;
exports.default = _default;