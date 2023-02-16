"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _Page = require("../Page2/Page2");
var _config = require("../../config/config");
var _FundraiserCard = _interopRequireDefault(require("../../../components/card/FundraiserCard"));
var _CATEGORY = _interopRequireDefault(require("./CATEGORY.png"));
require("react-alice-carousel/lib/alice-carousel.css");
var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));
var _ti = require("react-icons/ti");
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var Width = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      width: 1300px;\n \n   display: flex;\n   flex-direction: column;\n\n    //align-items: center;\n    //justify-content: center;\n     \n    @media only screen and (max-width: 1300px) {\n        width: 98%;\n    }\n  \n"])));
var StyleCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 70%;\n      display: grid;\n    \n      grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));\n \n \n      @media only screen and (max-width: 1600px) {\n        width: 98%;\n     \n      }\n\n\n      @media only screen and (max-width: 510px) {\n    \n        width: 100%;\n        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));\n      }\n"])));
var Heading = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: rgba(2, 169, 92, 1);\n    font-size: 1.8rem;\n      margin: 0.5rem 0 2rem 0;\n      font-weight: bold;\n     text-align: center;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n      \n      }\n"])));
var Background = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    //background-color: rgba(0, 29, 35, 1);\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  // align-items: center;\n    //\n  \n      position: relative;\n\n      @media only screen and (max-width: 1200px) {\n        flex-direction: column;\n     \n      }\n"])));
var Category = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: #082F37;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    //align-items: center;\n    width: 25rem;\n    height: 100%;\n    padding: 2rem 1rem;\n    margin: 2rem 0 0 0;\n    border-radius: 0 1.2rem 1.2rem 0;\n \n    //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    @media only screen and (max-width: 1350px) {\n     \n      \n    }\n\n    @media only screen and (max-width: 510px) {\n      width: 95%;\n    }\n"])));
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   \n    font-size: 2rem;\n    margin: 0.5rem 0 2rem 0;\n\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n        font-weight: bold;\n      }\n"])));
var Mid = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin: 0 1rem;\n    @media only screen and (max-width: 1350px) {\n      margin: 0;\n    }\n"])));
var Line = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: rgba(196, 196, 196, 0.3);\n    width: 100%;\n    height: 1px;\n    margin: 1rem 0 0 0;\n    @media only screen and (max-width: 1350px) {\n      //width: 20rem;\n    }\n"])));
var LeftArrow = (0, _styledComponents.default)(_ti.TiArrowLeftOutline)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      font-size: 4rem;\n      cursor: pointer;\n      color: rgba(2,169,92,1);\n      //margin: 0 5rem 0 0;\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%);\n    \n"])));
var RightArrow = (0, _styledComponents.default)(_ti.TiArrowRightOutline)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      font-size: 4rem;\n      cursor: pointer;\n      color: rgba(2,169,92,1);\n     // margin: 0 0 0 5rem;\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      \n"])));
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
var HeadingContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 14rem;\n // background: red;\n"])));
var Head = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    color: #fff;\n    font-size: 1.4rem;\n    font-weight: bold;\n    text-align: center;\n    // width: 10rem;\n    //  background: red;\n    background-image: url(", ");\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n       \n      }\n"])), _CATEGORY.default);
var Sec = _styledComponents.default.section(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\nmin-height: 100vh;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground-color: rgba(249, 232, 202, 1);\n// background-image: url(", ");\nbackground-size: 100% 100%;\nbackground-repeat: no-repeat;\nflex-direction: column;\npadding: ", ";\n\n@media only screen and (max-width: 998px) {\n    min-height: 100vh;\n    width: 100%;\n    padding: 2rem 0;\n    flex-direction: column;\n    background-size: auto 100%;\n  }\n"])), _CATEGORY.default, function (props) {
  return props.big ? '6rem 0 10rem 0' : '2rem 0';
});
var Page4 = function Page4(props) {
  var fundraisers = (0, _reactRedux.useSelector)(function (state) {
    return state.fundraisers.data;
  });
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: "fund"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Heading, null, "You can search by category or donate directly to a fundraiser of your option")), /*#__PURE__*/_react.default.createElement(Background, null, /*#__PURE__*/_react.default.createElement(Category, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(HeadingContainer, null, /*#__PURE__*/_react.default.createElement(Head, null, "CATEGORY"), /*#__PURE__*/_react.default.createElement(Line, null))), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#02A95C',
      margin: '1rem 0 0 1rem'
    }
  }, "All Categories"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Animals"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Business"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Community"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Education"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Faith"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Family"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Medical"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Other"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Relief"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Works"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Sports"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Animals"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Travel"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#FFF',
      margin: '0 0 0 1rem'
    }
  }, "Animals")), /*#__PURE__*/_react.default.createElement(StyleCard, null, fundraisers === null || fundraisers === void 0 ? void 0 : fundraisers.map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_FundraiserCard.default, {
      data: e
    });
  }))));
};
var _default = Page4;
exports.default = _default;