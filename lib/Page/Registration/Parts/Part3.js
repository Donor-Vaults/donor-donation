"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../../components/Navbar/Navbar");
var _lappy = _interopRequireDefault(require("./lappy.png"));
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(249, 232, 202, 1);\n  padding: 8rem 0 2rem 0;\n  @media only screen and (max-width: 768px) {\n    min-height: 100vh;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 1300px;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media only screen and (max-width: 1400px) {\n    width: 95%;\n  }\n  @media only screen and (max-width: 1100px) {\n    flex-direction: column;\n  }\n"])));
var Img = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 30rem;\n  border-radius: 1rem;\n  @media only screen and (max-width: 768px) {\n    margin-right: 0;\n    width: 100%;\n    padding: 0 1rem;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  width: 20rem;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Left = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 1rem;\n\n  //   @media only screen and (max-width: 1100px) {\n  //     width: 50%;\n  // }\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    padding: 1rem 0;\n  }\n"])));
var Right = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: 60%;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    margin: 0 0 4rem 0;\n  }\n"])));
var Box = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 95%;\n  min-height: 30rem;\n  background-color: #ffdea580;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 1rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  @media only screen and (max-width: 998px) {\n    min-height: 30rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
var Details = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n      180deg,\n      rgba(2, 169, 92, 0.5) 0%,\n      rgba(34, 170, 48, 0.5) 100%\n    ),\n    linear-gradient(0deg, #ffffff, #ffffff);\n  padding: 3rem 2rem 2rem 2rem;\n  border: 0.25rem solid #ffffff;\n  border-radius: 1.25rem;\n  margin: 0 1rem 4rem 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60rem;\n\n  @media only screen and (max-width: 1180px) {\n    width: 90%;\n    margin: 0 0 2rem 0;\n    padding: 3rem 0.5rem 2rem 0.5rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 95%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n"])));
var Man = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 20rem;\n  height: 16rem;\n"])));
var H = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #fff;\n  margin: 2rem 0 0 0;\n  line-height: 1.5;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 0.95rem;\n    font-weight: bold;\n  }\n"])));
var Frame = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 25rem;\n  height: 22rem;\n  border-radius: 1rem;\n  background: #fff;\n"])));
var Part3 = function Part3(_ref) {
  var hide = _ref.hide;
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: hide ? "none" : "block"
    }
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Box, {
    onClick: function onClick() {
      return dispatch({
        type: "PATHNAME7"
      });
    }
  }, /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement(Man, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _lappy.default,
    alt: "",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/_react.default.createElement(H, null, "Thank you. You have successfully completed the registration process. Please check your email. A verification email is sent to you. You can use DONOR platform for fundraising immediately after verification is complete.")))));
};
var _default = Part3;
exports.default = _default;