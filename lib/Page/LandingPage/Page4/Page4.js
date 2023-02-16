"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _Page = require("../Page2/Page2");
var _config = require("../../config/config");
var _FundraiserCard = _interopRequireDefault(require("../../../components/card/FundraiserCard"));
var _Live = _interopRequireDefault(require("./Live.svg"));
require("react-alice-carousel/lib/alice-carousel.css");
var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));
var _ti = require("react-icons/ti");
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Width = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 1300px;\n\n  display: flex;\n  flex-direction: column;\n\n  //align-items: center;\n  //justify-content: center;\n\n  @media only screen and (max-width: 1300px) {\n    width: 98%;\n  }\n"])));
var StyleCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 1300px;\n  display: grid;\n\n  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));\n\n  @media only screen and (max-width: 1600px) {\n    width: 98%;\n  }\n\n  @media only screen and (max-width: 510px) {\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));\n  }\n"])));
var Heading = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: rgba(2, 169, 92, 1);\n  font-size: 1.6rem;\n\n  background-image: url(", ");\n  // background: red;\n  width: 22rem;\n  text-align: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1.2rem;\n    font-weight: bold;\n    width: 12rem;\n  }\n"])), _Live.default);
var Background = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: rgba(0, 29, 35, 1);\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem 0 0 0;\n  position: relative;\n"])));
var Dashboard = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: rgba(2, 169, 92, 1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1300px;\n  padding: 2rem 0;\n  border-radius: 1.2rem;\n\n  margin: 3rem 0 -6rem 0;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n  @media only screen and (max-width: 1350px) {\n    width: 98%;\n    display: grid;\n    grid-gap: 2rem;\n    //place-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));\n  }\n\n  @media only screen and (max-width: 1093px) {\n    margin: 3rem 0 -12rem 0;\n  }\n"])));
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  margin: 0.5rem 0 2rem 0;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n"])));
var Mid = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0 1rem;\n  @media only screen and (max-width: 1350px) {\n    margin: 0;\n  }\n"])));
var First = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 25rem;\n  @media only screen and (max-width: 1350px) {\n    width: 20rem;\n  }\n"])));
var LeftArrow = (0, _styledComponents.default)(_ti.TiArrowLeftOutline)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 4rem;\n  cursor: pointer;\n  color: rgba(2, 169, 92, 1);\n  //margin: 0 5rem 0 0;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n"])));
var RightArrow = (0, _styledComponents.default)(_ti.TiArrowRightOutline)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 4rem;\n  cursor: pointer;\n  color: rgba(2, 169, 92, 1);\n  // margin: 0 0 0 5rem;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n"])));
var resposive = {
  0: {
    items: 1
  },
  650: {
    items: 2
  },
  1335: {
    items: 3
  }
};
var Sec = _styledComponents.default.section(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(249, 232, 202, 1);\n  // background-image: url(", ");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  flex-direction: column;\n  padding: ", ";\n\n  @media only screen and (max-width: 998px) {\n    min-height: 100vh;\n    width: 100%;\n    padding: 2rem 0;\n    flex-direction: column;\n    background-size: auto 100%;\n  }\n"])), _Live.default, function (props) {
  return props.big ? "6rem 0 10rem 0" : "2rem 0";
});
var Page4 = function Page4(props) {
  var fundraisers = (0, _reactRedux.useSelector)(function (state) {
    return state.fundraisers.data;
  });
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "fund"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Heading, null, "Donate To"), /*#__PURE__*/_react.default.createElement(Hs, {
    style: {
      color: "#000000"
    }
  }, "Ongoing Fundraisers")), /*#__PURE__*/_react.default.createElement(Background, null, /*#__PURE__*/_react.default.createElement(StyleCard, null, /*#__PURE__*/_react.default.createElement(_reactAliceCarousel.default, {
    animationDuration: 1168
    // disableButtonsControls={true}
    ,
    disableDotsControls: true
    // autoPlayStrategy={'none'}
    // autoHeight={true}
    ,
    responsive: resposive,
    mouseTracking: true,
    renderPrevButton: function renderPrevButton() {
      return /*#__PURE__*/_react.default.createElement(LeftArrow, null);
    },
    renderNextButton: function renderNextButton() {
      return /*#__PURE__*/_react.default.createElement(RightArrow, null);
    }
  }, fundraisers.map(function (fundraiser, index) {
    return /*#__PURE__*/_react.default.createElement(_FundraiserCard.default, {
      data: fundraiser,
      key: index
    });
  }))), /*#__PURE__*/_react.default.createElement(Dashboard, null, /*#__PURE__*/_react.default.createElement(First, {
    style: {
      display: "grid",
      placeItems: "center",
      justifySelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "0"
    }
  }, "5,234"), /*#__PURE__*/_react.default.createElement(Hs, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "1rem 0 0.8rem 0",
      fontSize: "1rem"
    }
  }, "Projects"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.5",
      margin: "0"
    }
  }, "Total number of Campaigns of the platform")), /*#__PURE__*/_react.default.createElement(Mid, {
    style: {
      width: "20rem",
      display: "grid",
      placeItems: "center",
      justifySelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "0"
    }
  }, "122"), /*#__PURE__*/_react.default.createElement(Hs, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "1rem 0 0.8rem 0",
      fontSize: "1rem"
    }
  }, "Projects"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.5",
      margin: "0"
    }
  }, "Total Ongoing Campaigns")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "20rem",
      display: "grid",
      placeItems: "center",
      justifySelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "0"
    }
  }, "5,234"), /*#__PURE__*/_react.default.createElement(Hs, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      margin: "1rem 0 0.8rem 0",
      fontSize: "1rem"
    }
  }, "Projects"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.5",
      margin: "0"
    }
  }, "Total Settled Campaigns")))));
};
var _default = Page4;
exports.default = _default;