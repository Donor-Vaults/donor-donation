"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _News = _interopRequireDefault(require("./News.png"));
var _nbg = _interopRequireDefault(require("./nbg.png"));
var _Page = require("../Home/Page2/Page2");
var _config = require("../config/config");
var _TeamCard = _interopRequireDefault(require("../../components/card/TeamCard"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var bColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.bColor = bColor;
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    min-height: 100vh;\n    width: 100%;\n    background-color: rgba(249, 232, 202, 1); \n    padding: 5rem 0.5rem ;\n    @media only screen and (max-width: 768px) {\n        min-height: 60rem;\n        width: 100%;\n        padding: 5rem 0.5rem ;\n    }\n\n"])));
var GridAuto = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    width: 1300px;\n  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));\n\n\n@media only screen and (max-width: 1300px) {\n  width: 90%;\n}\n@media only screen and (max-width: 768px) {\n  width: 95%;\n  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));\n}\n@media only screen and (max-width: 330px) {\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));\n \n}\n"])));
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n   text-align: center;\n    font-size: 2rem;\n    margin: 1.2rem 0;\ncolor: #000000;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var Heading = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: rgba(2, 169, 92, 1);\n    font-size: 1.4rem;\n    font-weight: bold;\n      text-align: left;\n    background-image: url(", ");\n    background-size: 50% 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n       \n      }\n"])), _News.default);
var Page6 = function Page6() {
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "roadmap"
  }, /*#__PURE__*/_react.default.createElement(Heading, null, "Where you can help"), /*#__PURE__*/_react.default.createElement(Hs, null, "Featured Specials"), /*#__PURE__*/_react.default.createElement(GridAuto, null, _config.CardData === null || _config.CardData === void 0 ? void 0 : _config.CardData.map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_TeamCard.default, {
      img: e.img
    });
  })));
};
var _default = Page6;
exports.default = _default;