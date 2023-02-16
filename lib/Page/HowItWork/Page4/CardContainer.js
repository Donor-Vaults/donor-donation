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
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100%;\n    padding: 4rem 0;\n    background-color: rgba(249, 232, 202, 1) ;\n    width: 100%;\n    \n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #FFF;\n    font-weight: 500;\n    font-size: 1.3rem;\n    //margin-bottom: 2rem;\n    text-align: left;\n    margin: 1rem;\n      letter-spacing: 0.05rem;\n      line-height: 1.8;\n      width: 70%;\n    @media only screen and (max-width: 1000px) {\n        \n        width: 100%;\n      }\n      @media only screen and (max-width: 768px) {\n        \n        font-weight: 510;\n        font-size: 1rem;\n      }\n      \n"])));
exports.T = T;
var H = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: #FFFFFF;\n    font-size: 2.5rem;\n    font-weight: bold;\n    margin-bottom: 2rem;\n    text-align: left !important;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n        margin-left: 1rem;\n      }\n"])));
exports.H = H;
var Center = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 1200px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color: #7EBDE0;\n      padding: 0.5rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    @media only screen and (max-width: 1400px) {\n        width: 100%;\n    }\n\n"])));
var Right = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    height: 16rem;\n    width: 20rem;\n    @media only screen and (max-width: 1000px) {\n        display: none;\n    }\n"])));
var CardContainer = function CardContainer() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Center, null, /*#__PURE__*/_react.default.createElement(T, null, "At the heart of fundraising there must be integrity and trust. Your motto should be \"the truth, told well\". While creating your fundraising need, please be detail in every aspect, provide all the facts and answer all the questions. Please avoid slick marketing and the hard sell. Make effective communication the heart of your fundraising proposal. Let your sincerity and commitment show."), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  }))), /*#__PURE__*/_react.default.createElement(Center, {
    style: {
      backgroundColor: '#6458D6',
      margin: '6rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _2.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(T, {
    style: {
      textAlign: 'right'
    }
  }, "Our donor community will assess your need from the  verifiable facts alone and vote on the same. Our donors are generous, wise and kind. After your fundraiser is approved by the platform and is published, its time to spread the word to as many people as possible using all channels. Donor platform will also help you in this effort of sharing via social media, emails, texts and with your local community.")), /*#__PURE__*/_react.default.createElement(Center, {
    style: {
      backgroundColor: 'rgba(224, 67, 67, 0.69)'
    }
  }, /*#__PURE__*/_react.default.createElement(T, null, "As people know about your fundraiser, they will visit Donor platform to make donations. In addition, all published fundraising campaigns will also receive part of the earnings from the Donor platform community. Once the goal amount is reached, funds will start getting in your wallet to meet the needs from time to time upon your furnishing the utilization proofs to the satisfaction of donor community."), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _3.default,
    alt: "",
    style: {
      height: '100%',
      width: '100%'
    }
  }))));
};
var _default = CardContainer;
exports.default = _default;