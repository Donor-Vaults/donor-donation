"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactRedux = require("react-redux");
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  // flex-direction: column;\n     align-items: center;\n     justify-content: center;\n     background-color: rgba(249, 232, 202, 1);\n     padding: 8rem 0 2rem 0;\n  @media only screen and (max-width: 768px) {\n      min-height: 100vh;\n      width: 100%;\n      flex-direction: column;\n      justify-content: space-around;\n    }\n"])));
var Registration = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 1200px;\n\n  display: flex;\n  border-radius: 1.75rem;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n\n  @media only screen and (max-width: 1300px) {\n    width: 98%;\n    \n  }\n  @media only screen and (max-width: 1100px) {\n    \n    display: grid;\n    \n      grid-template-columns: repeat(2, minmax(50%, 1fr));\n      place-items: center;\n    \n  }\n  @media only screen and (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #000;\n    font-weight: normal;\n    font-size: 1.5rem;\n    margin: 1rem 0 -1rem 2rem; \n    // margin-bottom: 2rem;\n    // text-align: left;\n    //  font-weight: lighter;\n    //  letter-spacing: 0.05rem;\n    //  line-height: 1.8;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
var Tp = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: grey;\n    font-weight: normal;\n    font-size: 1.2rem;\n    margin: 1rem 0 -0.5rem 2rem; \n    text-align: right;\n \n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
var Section = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 2rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n     \n    @media only screen and (max-width: 768px) {\n        margin-right: 0;\n        width: 100%;\n        padding: 0 1rem;\n        height: auto;\n      }\n"])));
var Line = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n     height: 3rem;\n     width: 1px;\n     background: rgba(0,0,0,0.3);\n     margin: 0 2rem 0 0;\n     display: block;\n      @media only screen and (max-width: 1100px) {\n        display: none;\n      }\n"])));
var Button = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: rgba(2, 169, 92, 1);\n  border: none;\n  border-radius: 0 1.75rem 1.75rem 0;\n  padding: 0 1.5rem;\n  color: #FFF;\n  font-size: 1.2rem;\n  height: 8rem;\n  width: 15rem;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n \n  @media only screen and (max-width: 1100px) {\n    height: 4rem;\n   \n  }\n\n  @media only screen and (max-width: 768px) {\n    height: 4rem;\n    width: 100%;\n    border-radius: 0 0 0.5rem 0.5rem;\n  }\n"])));
var SmallButton = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 2px solid rgba(2, 169, 92, 1);\n  border-radius: 0.5rem ;\n  padding: 0.5rem 1.5rem;\n  color: rgba(2, 169, 92, 1);\n  font-size: 1.2rem;\n  cursor: pointer;\n      margin: 0 0 0 1rem;\n"])));
var Gradient = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    \nbackground: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%);\n  border-radius: 2rem;\n  padding:3rem;\n\n    @media only screen and (max-width: 768px) {\n      margin: 2rem 0 3rem 0;\n      padding: 3rem 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n"])));
var Width = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n      flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n"])));
var Margin = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n@media only screen and (max-width: 1100px) {\n  margin: 0 0 1rem 0;\n}\n@media only screen and (max-width: 768px) {\n  margin: 1rem 0;\n}\n"])));
var Register1 = function Register1() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Gradient, null, /*#__PURE__*/_react.default.createElement(Registration, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(Line, null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      margin: '0 0 0.5rem 0'
    }
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Enter Email",
    className: "input",
    style: {
      height: "2rem",
      width: "10rem"
    }
  }))), /*#__PURE__*/_react.default.createElement(Margin, {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(Line, null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      margin: '0 0 0.5rem 0'
    }
  }, "Mobile Number"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: '3rem',
      padding: '0 0 0 -2rem'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Enter Number",
    className: "input",
    style: {
      height: "2rem",
      width: "10rem",
      margin: '0',
      padding: '0'
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(Line, null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      margin: '0 0 0.5rem 0'
    }
  }, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Enter Name",
    className: "input",
    style: {
      height: "2rem",
      width: "10rem"
    }
  }))), /*#__PURE__*/_react.default.createElement(Button, {
    onClick: function onClick() {
      dispatch({
        type: 'PATHNAME1'
      });
    }
  }, "REGISTER")))));
};
var _default = Register1;
exports.default = _default;