"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Content.css");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _fa = require("react-icons/fa");
var _correct = _interopRequireDefault(require("./correct.png"));
var _Navbar = require("../../../components/Navbar/Navbar");
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    min-height: 100vh;\n    width: 100%;\n    overflow-x: hidden !important;\n    background-color: rgba(249, 232, 202, 1);\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n    flex-direction: column;\n    paading: 0 0 3rem 0;\n    @media only screen and (max-width: 768px) {\n        min-height: 60rem;\n        background-size: auto 100% !important;\n        width: 100%;\n        padding: 1rem 0.5rem 1rem 0.5rem;\n        flex-direction: column;\n    }\n\n"])));
var H = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #FFF;\n  font-size: 1.75rem;\n  font-weight: 400;\n  margin: 1.5rem 0 0 0;\n\n\n@media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1.2rem;\n    //font-weight: bold;\n    text-align: center;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.4rem;\n    margin: 0.5rem 0 1.5rem 0;\n    text-align: center;\n \n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n      }\n"])));
var Width = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 1600px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    @media only screen and (max-width: 1700px) {\n        width: 93%;\n        justify-content: space-between;\n    }\n    @media only screen and (max-width: 1400px) {\n        width: 96%;\n        justify-content: space-between;\n    }\n    @media only screen and (max-width: 1000px) {\n        width: 99%;\n       \n    }\n    @media only screen and (max-width: 800px) {\n        width: 99%;\n        flex-direction: column;\n        margin: 10rem  0 0 0;\n    }\n    @media only screen and (max-width: 600px) {\n        width: 99%;\n        \n        margin: 5rem  0 0 0;\n    }\n"])));
var Details = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nbackground: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF);\n    padding: 3rem 2rem 2rem 2rem;\n    border: 0.25rem solid #FFFFFF;\n    border-radius: 1.25rem;\n    margin: 0 1rem 4rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n"])));
var Register9 = function Register9() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "roadmap"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _correct.default,
    alt: "",
    style: {
      height: '5rem',
      width: '5rem'
    }
  }), /*#__PURE__*/_react.default.createElement(H, null, "Registration completed successfully"), /*#__PURE__*/_react.default.createElement(H, null, "Email successfully verified. You can now start fundraiser on DONOR platform."), /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '0.5rem',
      width: '12rem',
      margin: '2rem 0 0.5rem 0'
    },
    onClick: function onClick() {
      return dispatch({
        type: 'F1'
      });
    }
  }, "Fundraise now"))));
};
var _default = Register9;
exports.default = _default;