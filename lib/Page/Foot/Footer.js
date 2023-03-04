"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
require("./Footer.css");
var _foot = _interopRequireDefault(require("./foot.png"));
var _reactScroll = require("react-scroll");
var _Navbar = require("../../components/Navbar/Navbar");
var _Page = require("../Home/Page2/Page2");
var _Discord = _interopRequireDefault(require("../../components/Navbar/Discord.png"));
var _Twitter = _interopRequireDefault(require("../../components/Navbar/Twitter.png"));
var _Medium = _interopRequireDefault(require("../../components/Navbar/Medium.png"));
var _logo = _interopRequireDefault(require("../../components/Navbar/logo.svg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    background: rgba(0, 29, 35, 1);\n    padding: 2rem 0 1rem 0;\n"])));
var StyledFooter = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    flex-direction: column;\n    width: 1600px;\n\n    @media only screen and (max-width: 1600px) {\n        width: 99%;\n    }\n"])));
var IconContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 3rem 0 0;\n"])));
var Left = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items:center;\n    flex-direction: column;\n    \n    width: 30rem;\n    \n    @media only screen and (max-width: 610px) {\n        width: 99%;\n        padding: 0 2rem;\n    }\n"])));
var Mid = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    width: 998px;\n    justify-content: space-between;\n    padding: 0 0.5rem;\n\n    @media only screen and (max-width: 1100px) {\n        width: 90%;\n       \n        \n    }\n    @media only screen and (max-width: 610px) {\n        width: 99%;\n       \n        \n    }\n"])));
var Right = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    width: 30rem;\n    justify-content: center;\n    align-items:center;\n    flex-direction: column;\n \n    @media only screen and (max-width: 610px) {\n        width: 99%;\n        padding: 2rem 0;\n    }\n"])));
var Link1 = (0, _styledComponents.default)(_reactScroll.Link)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    \n \n   cursor: pointer;\n   display: flex;\n   align-items: center;\n   font-size: 3.5rem;\n   color: rgba(249,232,202,0.9);\n    @media only screen and (max-width: 998px) {\n        margin-right: 6rem  !important;\n        width: 16rem;\n        height: auto;\n    }\n    @media only screen and (max-width: 768px) {\n       // margin-right: 3rem  !important;\n        width: 10rem;\n        font-size: 1.5rem;\n    }\n    "])));
var Upper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   \n    //place-items: center;\n    width: 100%;\n    // grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n    // padding: 0 0 0 2rem;\n    \n    @media only screen and (max-width: 610px) {\n        grid-template-columns: repeat(auto-fit, minmax(99%, 1fr));\n        padding: 0 0 ;\n    }\n"])));
var Line = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 1px;\n    background: rgba(255,255,255,0.6);\n    margin: 2rem 0;\n"])));
var Lower = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n     background-color: rgba(1, 23, 28, 1);\n     width: 1400px;\n     display: flex;\n     justify-content:space-between;\n    align-items:center;\n    padding: 0.5rem 1.5rem;\n    margin: 4rem 0 1rem 0;\n    @media only screen and (max-width: 1400px) {\n        width: 98%;\n    }\n    @media only screen and (max-width: 610px) {\n        width: 99%;\n        flex-direction: column;\n        padding: 2rem 0.5rem;\n    }\n"])));
var SocialMedia = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    @media only screen and (max-width: 610px) {\n        margin: 1rem 0 0 0;\n    }\n"])));
var Footer = function Footer() {
  return /*#__PURE__*/_react.default.createElement(Sec, null, /*#__PURE__*/_react.default.createElement(StyledFooter, null, /*#__PURE__*/_react.default.createElement(Upper, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: ' rgba(249,232,202,0.7)',
      fontSize: '1rem'
    }
  }, "Copyright @ 2022. All rights reserved"), /*#__PURE__*/_react.default.createElement(IconContainer, null, /*#__PURE__*/_react.default.createElement(Link1, {
    style: {
      margin: "0"
    },
    to: "home",
    spy: true,
    smooth: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/yellow.png",
    alt: "Logo",
    style: {
      width: "10rem",
      height: "9rem"
    }
  }), "Donor"))), /*#__PURE__*/_react.default.createElement(Mid, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0 0 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      fontSize: '1.6rem',
      fontWeight: '500',
      margin: '0 0 1rem 0',
      color: ' rgba(249,232,202,0.9)'
    }
  }, "Connect"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Telegram"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Reddit"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Discord"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0 0 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      fontSize: '1.6rem',
      fontWeight: '500',
      margin: '0 0 1rem 0',
      color: ' rgba(249,232,202,0.9)'
    }
  }, "Learn"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Medium")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0 0 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      fontSize: '1.6rem',
      fontWeight: '500',
      margin: '0 0 1rem 0',
      color: ' rgba(249,232,202,0.9)'
    }
  }, "Build"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Docs"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Github"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: _defineProperty({
      color: 'rgba(153, 156, 165, 1)',
      margin: '0',
      fontSize: '1rem',
      fontWeight: '400'
    }, "color", ' rgba(249,232,202,0.8)')
  }, "Disclaimer")))), /*#__PURE__*/_react.default.createElement(Line, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0 1rem '
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      margin: '0 0 1rem 0',
      color: ' rgba(249,232,202,0.9)'
    }
  }, "Disclaimer:"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: ' rgba(249,232,202,0.7)'
    }
  }, "The Information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the website's content as such. The DONOR team provides the website as a service to the public, and is not resonsible for, and expressly disclaims all liabilty for, damages of any kind arising out of use, reference to, or reliance on any information contained within this website. While the information contained within this website is periodically updated, no quarantee is given that the information provided in this webiste is correct, complete and up-to-date."))));
};
var _default = Footer;
exports.default = _default;