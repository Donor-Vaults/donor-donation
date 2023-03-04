"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.T = exports.H = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ = _interopRequireDefault(require("./1.png"));
var _2 = _interopRequireDefault(require("./2.png"));
var _3 = _interopRequireDefault(require("./3.png"));
var _4 = _interopRequireDefault(require("./4.png"));
var _5 = _interopRequireDefault(require("./5.png"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100%;\n    padding: 4rem 0;\n    background-color: rgba(249, 232, 202, 1) ;\n    width: 100%;\n    \n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.3rem;\n    margin-bottom: 2rem;\n    text-align: left;\n      font-weight: bold;\n      letter-spacing: 0.05rem;\n      line-height: 1.8;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
exports.T = T;
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFFFFF;\n    font-size: 2.5rem;\n    font-weight: bold;\n    margin-bottom: 2rem;\n    text-align: left !important;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n        margin-left: 1rem;\n      }\n"])));
exports.H = H;
var Width = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n      flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 768px) {\n        display: none;\n    }\n"])));
var WidthM = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n \n      display: none;\n     \n    @media only screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 95%;\n    }\n"])));
var Img = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    height: 14rem;\n    width: 12rem;\n    margin: 2rem 0 0 0;\n"])));
var Flex = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var FlexSmall = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 40rem;\n    display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem 0 0 0;\n  @media only screen and (max-width: 998px) {\n    width: 35rem;\n}\n@media only screen and (max-width: 888px) {\n  width: 30rem;\n}\n"])));
var Roadmap = function Roadmap() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Flex, null, /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _2.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _3.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  }))), /*#__PURE__*/_react.default.createElement(FlexSmall, null, /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _4.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _5.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })))), /*#__PURE__*/_react.default.createElement(WidthM, null, /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _4.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _2.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _5.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Img, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _3.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  }))));
};
var _default = Roadmap;
exports.default = _default;