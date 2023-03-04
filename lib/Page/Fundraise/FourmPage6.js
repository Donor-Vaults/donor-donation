"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Wwe.css");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../components/Navbar/Navbar");
var _logo = _interopRequireDefault(require("../../components/Navbar/logo.svg"));
var _tick = _interopRequireDefault(require("./components/tick.jpg"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    padding: 8rem 0 2rem 0;\n    // flex-direction: column;\n      // align-items: center;\n       justify-content: center;\n       background-color: rgba(249, 232, 202, 1);\n    @media only screen and (max-width: 1100px) {\n        \n        flex-direction: column;\n        align-items: center;\n        \n      }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n     // flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        background: #FFDEA580;\n      border-radius: 1.75rem;\n      position: relative;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 98%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n        background: #FFDEA580;\n    }\n"])));
var InputContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 1px solid rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 25rem;\n    border-radius: 0.75rem;\n    background-color: #FFF;\n"])));
var Input = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    \n"])));
var H = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-size: 1.75rem;\n    font-weight: 600;\n    margin: 2rem 0.5rem;\n    text-align: center;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.2rem;\n    margin-bottom: 2rem;\n   // text-align: center;\n    //width: 20rem;\n\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n        \n      }\n"])));
var Right = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n     // align-items: center;\n        width: 100%;\n       // padding: 5rem 0 3rem 0;\n      border-radius: 2rem 0 0 0;\n     // background-color: rgba(255,255,255,0.9);\n       // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n        @media only screen and (max-width: 1100px) {\n            width: 100%;\n            margin: 3rem 0 0 0;\n        }\n\n"])));
var Details = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\n\nbackground: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF);\n\n\n    padding: 0 2rem 2rem 2rem;\n    border: 0.25rem solid #FFFFFF;\n    border-radius: 1.25rem;\n    margin: 2rem 1rem 4rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n        padding: 0 1rem 2rem 1rem;\n    } \n\n"])));
var FourmPage6 = function FourmPage6() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Sec, null, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _tick.default,
    alt: "",
    style: {
      borderRadius: '0 0 1rem 1rem',
      height: '10rem',
      width: '11rem'
    }
  }), /*#__PURE__*/_react.default.createElement(H, null, "Your fundraiser has been successfully submitted for audit and approval. If any further information is needed, you will receive a notification. Once approved, it will be published on the DONOR  platform"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '2rem',
      width: '12rem',
      margin: '0 0 2rem 0',
      border: '2px solid #FFFFFF',
      fontSize: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    style: {
      textDecoration: 'none',
      color: '#fff'
    }
  }, "Continue")))))));
};
var _default = FourmPage6;
exports.default = _default;