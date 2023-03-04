"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../../components/Navbar/Navbar");
var _reactRedux = require("react-redux");
var _logo = _interopRequireDefault(require("../../../components/Navbar/logo.svg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    // flex-direction: column;\n       align-items: center;\n       justify-content: center;\n       background-color: rgba(249, 232, 202, 1);\n       padding: 8rem 0 2rem 0;\n    @media only screen and (max-width: 768px) {\n        min-height: 100vh;\n        width: 100%;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n     // flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n"])));
var Img = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        width: 30rem;\n        border-radius: 1rem;\n    @media only screen and (max-width: 768px) {\n        margin-right: 0;\n        width: 100%;\n        padding: 0 1rem;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: #000;\n    font-weight: 500;\n    font-size: 1.2rem;\n    \n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n        \n      }\n"])));
var Left = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        width: 35%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n        background-color: #FFF;\n        border-radius: 1rem;\n      padding: 1rem;\n        //   @media only screen and (max-width: 1100px) {\n        //     width: 50%;\n        // }\n   \n\n    @media only screen and (max-width: 998px) {\n     \n        width: 35rem;\n        padding: 1rem  0;\n        margin: 7rem 0 0 0;\n       \n      }\n\n      @media only screen and (max-width: 768px) {\n     \n        width: 95%;\n        padding: 1rem;\n        margin: 7rem 0 0 0;\n       \n      }\n"])));
var Right = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n      align-items: center;\n        width: 60%;\n   \n        @media only screen and (max-width: 998px) {\n     \n            width: 100%;\n            margin: 4rem 0 0 0;\n          \n           \n          }\n        \n          @media only screen and (max-width: 998px) {\n     \n            width: 95%;\n           \n          }\n     \n"])));
var Box = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    width: 95%;\n    min-height: 30rem;\n    background-color: #FFDEA580 ;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    border-radius: 1rem;\n    position: relative;\n\n    @media only screen and (max-width: 998px) {\n        \n        flex-direction: column;\n        min-height: 30rem;\n        align-items: center;\n        justify-content: space-between;\n \n     }\n"])));
var Back = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin: 3rem 0;\n    cursor: pointer;\n\n    @media only screen and (max-width: 998px) {\n        position: absolute;\n        top: 0;\n        right: 2rem;\n    }  \n\n"])));
var Details = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\nbackground: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF);\n    padding: 3rem 2rem 2rem 2rem;\n    border: 0.25rem solid #FFFFFF;\n    border-radius: 1.25rem;\n    margin: 0 1rem 4rem 1rem;\n\n    @media only screen and (max-width: 998px) {\n        width: 100%;\n        margin: 0 0 2rem 0;\n        padding: 3rem 0.5rem 2rem 0.5rem;\n    } \n\n"])));
var Input = _styledComponents.default.input(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\n    width: 20rem;\n\n    @media only screen and (max-width: 998px) {\n        width: 100%;\n    } \n  \n"])));
var H = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n\n  font-size: 1.25rem;\n  font-weight: bold;\n  // margin-bottom: 2rem;\n  text-align: left !important;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 0.95rem;\n    font-weight: bold;\n  }\n"])));
var Register3 = function Register3() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Sec, null, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "",
    style: {
      width: '5rem',
      height: '4.5rem',
      margin: '0 0 2rem 0'
    }
  })), /*#__PURE__*/_react.default.createElement(T, null, "Thousands of fundraisers met their goal amounts using DONOR platform")), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Back, {
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    onClick: function onClick() {
      return dispatch({
        type: 'BACK3'
      });
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '8rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "30",
    viewBox: "0 0 42 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M22.4582 0C17.5662 0 13.5862 3.98 13.5862 8.872V10.736C13.5862 11.564 14.2582 12.236 15.0862 12.236C15.9142 12.236 16.5862 11.564 16.5862 10.736V8.872C16.5862 5.632 19.2202 3 22.4582 3H32.2082C35.4422 3 38.0742 5.632 38.0742 8.872V31.13C38.0742 34.368 35.4422 37 32.2082 37H22.4362C19.2122 37 16.5862 34.376 16.5862 31.152V29.266C16.5862 28.438 15.9142 27.766 15.0862 27.766C14.2582 27.766 13.5862 28.438 13.5862 29.266V31.152C13.5862 36.032 17.5582 40 22.4362 40H32.2082C37.0962 40 41.0742 36.022 41.0742 31.13V8.872C41.0742 3.98 37.0962 0 32.2082 0H22.4582ZM6.29802 13.108L0.442017 18.938C0.389774 18.9898 0.342995 19.0437 0.300182 19.1008L0.442017 18.938C0.371159 19.0079 0.308144 19.0842 0.253468 19.1656C0.229401 19.2025 0.206188 19.2406 0.184677 19.2798C0.167221 19.3105 0.151154 19.3424 0.136261 19.3749C0.123634 19.4036 0.111515 19.4324 0.100281 19.4615C0.0852013 19.4995 0.0719986 19.5386 0.0604172 19.5782C0.0516891 19.6094 0.0436668 19.6405 0.0366364 19.672C0.0277023 19.7102 0.020668 19.7486 0.0151329 19.7874C0.012001 19.8125 0.00893784 19.8389 0.00657272 19.8655C0.00199509 19.9111 1.90735e-05 19.9555 1.90735e-05 20L0.0102158 20.124L0.0143204 20.2035C0.014782 20.2068 0.0152512 20.2102 0.0157356 20.2136L1.90735e-05 20C1.90735e-05 20.111 0.01231 20.221 0.0362053 20.3278C0.0436668 20.3595 0.0516891 20.3906 0.0606689 20.4213C0.0719986 20.4614 0.0852013 20.5005 0.0999908 20.5389C0.111515 20.5676 0.123638 20.5964 0.136608 20.6246C0.151157 20.6576 0.167221 20.6895 0.184433 20.7209C0.206188 20.7594 0.229401 20.7975 0.254215 20.8345C0.268253 20.8564 0.283653 20.8781 0.299652 20.8993C0.347271 20.962 0.399162 21.0209 0.455307 21.0755L6.29802 26.894C6.59002 27.186 6.97402 27.332 7.35602 27.332C7.74002 27.332 8.12602 27.186 8.41802 26.89C9.00202 26.302 9.00002 25.354 8.41402 24.77L5.13422 21.5H25.5826C26.4106 21.5 27.0826 20.828 27.0826 20C27.0826 19.172 26.4106 18.5 25.5826 18.5H5.13022L8.41402 15.232C9.00002 14.648 9.00402 13.7 8.41802 13.112C7.83402 12.524 6.88602 12.524 6.29802 13.108Z",
    fill: "#082F37"
  }))), /*#__PURE__*/_react.default.createElement(T, {
    style: {
      color: '#000',
      margin: '0',
      fontSize: '1.75rem'
    }
  }, "Back"))), /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // display: "flex",
      // alignItems: "center",
      // backgroundColor: "#FFF",
      width: "100%",
      borderRadius: '1rem',
      margin: '1rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0.5rem 1rem",
      color: ' #FFF'
    }
  }, "Re-enter")), /*#__PURE__*/_react.default.createElement(Input, {
    disabled: true,
    type: "Text",
    placeholder: "   password"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    style: {
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "1.25rem",
      margin: "2rem 0 0 0"
      // margin: "0 0 0 1rem",
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // display: "flex",
      // alignItems: "center",
      // backgroundColor: "#FFF",
      width: "100%",
      borderRadius: '1rem',
      margin: '3rem 0 1.5rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0.5rem 1rem",
      color: ' #FFF'
    }
  }, "Type the test displayed above")), /*#__PURE__*/_react.default.createElement(Input, {
    disabled: true,
    type: "Text",
    placeholder: "   password"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    style: {
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "1.25rem",
      margin: "2rem 0 0 0"
      // margin: "0 0 0 1rem",
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '2rem',
      width: '9rem',
      margin: '0.5rem 0 0 0',
      border: '2px solid #FFFFFF',
      fontSize: '2rem'
    },
    onClick: function onClick() {
      return dispatch({
        type: 'PATHNAME3'
      });
    }
  }, "Next")))))));
};
var _default = Register3;
exports.default = _default;