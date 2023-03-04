"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.T = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _bg = _interopRequireDefault(require("./bg.svg"));
var _img = _interopRequireDefault(require("./img.jpg"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _donor = _interopRequireDefault(require("./donor.png"));
var _pic = _interopRequireDefault(require("./pic.svg"));
var _framerMotion = require("framer-motion");
var _Page = require("../Home/Page2/Page2");
var _ti = require("react-icons/ti");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color:rgba(249, 232, 202, 1);\n    width: 100%;\n  \n    padding: 5rem 0;\n    \n    @media only screen and (max-width: 768px) {\n        \n        padding:  2rem 0;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1100px;\n      display: flex;\n        \n        align-items: center;\n        justify-content: space-between;\n\n        @media only screen and (max-width: 1400px) {\n          width: 998px;\n      }\n    \n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n    @media only screen and (max-width: 1000px) {\n      width: 98%;   \n  }\n\n"])));
var Left = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        width: 30rem;\n        height: 30rem;\n        background-image: url(", ");\n        background-size: 100% 100%;\n        background-repeat: no-repeat;\n        border-radius: 1rem;\n        \n        // @media only screen and (max-width: 1700px) {\n        //     height: 35rem;\n        //   }\n\n          @media only screen and (max-width: 1100px) {\n            width: 30rem;\n            height: 30rem;\n            \n        }\n        @media only screen and (max-width: 998px) {\n          width: 20rem;\n          height: 20rem;\n        }\n\n    // @media only screen and (max-width: 768px) {\n     \n    //     width: 85%;\n    //     height: 25rem;\n       \n    //   }\n"])), _donor.default);
var Right = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: center;\n     \n        flex-direction: column;\n        width: 27rem;\n    \n        @media only screen and (max-width: 1100px) {\n          margin: 3rem 0 0 0;\n      }\n\n        @media only screen and (max-width: 998px) {\n            width: 65%;\n           \n        }\n\n      @media only screen and (max-width: 768px) {\n        width: 95%; \n       \n      }\n"])));
var T = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: rgba(0, 29, 35, 1);\n    font-weight: bold;\n    font-size: 1.25rem;\n    margin-bottom: 2rem;\n    text-align: left;\n    line-height: 1.6;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
exports.T = T;
var Ht = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: #e69500;\n    font-size: 2.2rem;\n    font-weight: bold;\n    margin-bottom: 2rem;\n    text-align: left;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var Founder = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    \n  background-image: url(", ");\n  background-size: 90% 100%;\n  background-repeat: no-repeat;\n  padding: 2rem 1rem;\n  margin: 1rem 0 0 0;\n\n  @media only screen and (max-width: 510px) {\n  \n    background-size: 100% 100%;\n  }\n\n"])), _img.default);
var Heading = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: rgba(2, 169, 92, 1);\n    font-size: 1.4rem;\n    font-weight: bold;\n    text-align: center;\n    // width: 10rem;\n    //  background: red;\n    background-image: url(", ");\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n       \n      }\n"])), _bg.default);
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n   text-align: center;\n    font-size: 2rem;\n    margin: 1.2rem 0;\ncolor: #000000;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var HeadingContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 14rem;\n // background: red;\n"])));
var Page3a = function Page3a() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "rarity"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Left, {
    whileHover: {
      scale: 1.1,
      boxShadow: "0 0 25px #ff7b00"
    }
  }), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(HeadingContainer, null, /*#__PURE__*/_react.default.createElement(Heading, null, "Why DONOR"), /*#__PURE__*/_react.default.createElement(Hs, null, "Why DONOR")), /*#__PURE__*/_react.default.createElement(T, null, "DONOR is community-driven with decisions recorded and enforced by smart contracts on the blockchain. Every donation's utilization is verified and audited."), /*#__PURE__*/_react.default.createElement(Founder, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/_react.default.createElement(_ti.TiTick, {
    color: "#fff",
    style: {
      fontSize: '2rem'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0.2rem 0 0 0'
    }
  }, " Strong Token Utility")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/_react.default.createElement(_ti.TiTick, {
    color: "#fff",
    style: {
      fontSize: '2rem'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0.2rem 0 0 0'
    }
  }, "Platform Earnings to Community")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/_react.default.createElement(_ti.TiTick, {
    color: "#fff",
    style: {
      fontSize: '2rem'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0.2rem 0 0 0'
    }
  }, "Community Governed")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/_react.default.createElement(_ti.TiTick, {
    color: "#fff",
    style: {
      fontSize: '2rem'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0.2rem 0 0 0'
    }
  }, "First Cryptocurrency Donation Platform")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/_react.default.createElement(_ti.TiTick, {
    color: "#fff",
    style: {
      fontSize: '2rem'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0.2rem 0 0 0'
    }
  }, "Accepts Any Tradable Cryptocurrency"))))));
};
var _default = Page3a;
exports.default = _default;