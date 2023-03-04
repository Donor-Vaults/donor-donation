"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _config = require("../../config/config");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Card = _interopRequireDefault(require("../../../components/card/Card"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
require("react-alice-carousel/lib/alice-carousel.css");
var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));
var _bg = _interopRequireDefault(require("./bg.svg"));
var _Navbar = require("../../../components/Navbar/Navbar");
var _Page = require("../Page2/Page2");
var _map = _interopRequireDefault(require("./map.jpg"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Width = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      width: 1300px;\n \n   display: flex;\n   flex-direction: column;\n\n    align-items: center;\n    justify-content: center;\n      @media only screen and (max-width: 1700px) {\n        width: 90%;\n      }\n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n\n    }\n"])));
var Center = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1000px;\n      display: flex;\n      flex-direction: column;\n      background-color: rgba(0, 29, 35, 1);\n        // align-items: center;\n        // justify-content: space-between;\n        border-radius: 1.5rem;\n        padding: 3rem 20rem 3rem 3rem;\n        background-image: url(", ");\n        background-size: 20rem 100%;\n        background-position: right center;\n        background-repeat: no-repeat;\n        margin: 0 0 5rem 0;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    @media only screen and (max-width: 1400px) {\n        width: 100%;\n        margin-top: 2rem;\n    }\n    @media only screen and (max-width: 1100px) {\n       \n        padding: 3rem;\n        background-image: none;\n    }\n\n"])), _bg.default);
var resposive = {
  600: {
    items: 0
  },
  1000: {
    items: 2
  },
  1600: {
    items: 3
  },
  2400: {
    items: 6
  }
};
var Page3 = function Page3(props) {
  var Sec = _styledComponents.default.section(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        min-height: 70rem;\n        background-image: url(", ");\n        background-size: 100% 50rem;\n        background-repeat: no-repeat;\n        background-color: rgba(249, 232, 202, 1) ;\n        width: 100%;\n        padding: ", ";\n    @media only screen and (max-width: 1200px) {\n        background-size: 150% 50rem;\n        background-position: center center;\n    }\n    @media only screen and (max-width: 768px) {\n        min-height: auto;\n        width: 100%;\n        padding: 2rem 0;\n        background-size: 200% 50rem;\n    }\n"])), _map.default, props.big ? '6rem 0 0 0' : '');
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "donate"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Center, null, /*#__PURE__*/_react.default.createElement(_Page.H, null, " Anyone from anywhere can ask help"), /*#__PURE__*/_react.default.createElement(_Page.T, null, "Any sincere and committed individual or group or institution from anywhere in the world can fundraise for self or for a cause. "), /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    to: "fund",
    spy: true,
    smooth: true,
    offset: -80,
    style: {
      width: '13rem'
    }
  }, "Fundraise now")), /*#__PURE__*/_react.default.createElement(_reactAliceCarousel.default, {
    autoPlay: true,
    infinite: true,
    animationDuration: 1768,
    disableButtonsControls: true,
    disableDotsControls: true,
    autoPlayStrategy: 'none',
    autoHeight: true
    //paddingLeft={60}
    ,
    responsive: resposive
  }, _config.data === null || _config.data === void 0 ? void 0 : _config.data.map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_Card.default, {
      img: e.img,
      name: e.name,
      button: e.button
    });
  }))));
};
var _default = Page3;
exports.default = _default;