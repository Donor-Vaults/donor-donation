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
var _CATEGORY = _interopRequireDefault(require("./CATEGORY.png"));
require("react-alice-carousel/lib/alice-carousel.css");
var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));
var _ti = require("react-icons/ti");
var _reactRedux = require("react-redux");
var _categories = _interopRequireDefault(require("../../../config/categories"));
var _reactScroll = require("react-scroll");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  var fundraisersData = (0, _reactRedux.useSelector)(function (state) {
    return state.fundraisers.data;
  });
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  var fundraisers = selectedCategory ? fundraisersData.filter(function (item) {
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  }) : fundraisersData;
  return /*#__PURE__*/_react.default.createElement(_reactScroll.Element, {
    id: "allfundraiser",
    name: "allfundraiser"
  }, /*#__PURE__*/_react.default.createElement(Sec, {
    id: "allfundraiserCategory"
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Heading, null, "You can search by category or donate directly to a fundraiser of your option")), /*#__PURE__*/_react.default.createElement(Background, null, /*#__PURE__*/_react.default.createElement(Category, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(HeadingContainer, null, /*#__PURE__*/_react.default.createElement(Head, null, "Categories"), /*#__PURE__*/_react.default.createElement(Line, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "hoverable",
    onClick: function onClick() {
      setSelectedCategory("");
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: !selectedCategory ? '#02A95C' : "#fff",
      margin: '1rem 0 0 1rem'
    }
  }, "All Categories")), _categories.default.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "hoverable",
      onClick: function onClick() {
        setSelectedCategory(item);
      }
    }, /*#__PURE__*/_react.default.createElement(_Page.T, {
      style: {
        color: selectedCategory.toLowerCase() === item.toLowerCase() ? '#02A95C' : "#fff",
        margin: '1rem 0 0 1rem'
      }
    }, item));
  })), /*#__PURE__*/_react.default.createElement(StyleCard, null, fundraisers === null || fundraisers === void 0 ? void 0 : fundraisers.map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_FundraiserCard.default, {
      data: e
    });
  })))));
};
var _default = Page4;
exports.default = _default;