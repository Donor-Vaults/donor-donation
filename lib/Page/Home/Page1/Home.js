"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
require("./Bg.css");
var _framerMotion = require("framer-motion");
var _support = _interopRequireDefault(require("./support.png"));
var _reactRedux = require("react-redux");
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _bs = require("react-icons/bs");
var _reactScroll = require("react-scroll");
var _Navbar = require("../../../components/Navbar/Navbar");
var _useWallet = require("use-wallet");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
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
// const iconColor = theme("theme", {
//     light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     dark: "linear-gradient(to right, #fc00ff, #00dbde)",
//   });  

var HomePage = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  //flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  min-height: 100%;\n  width: 100%;\n  padding: 10rem 0 1rem 0;\n\n background-color: rgba(249, 232, 202, 1);\n\n@media only screen and (max-width: 768px) {\n \n    width: 100%;\n   \n    background-size: auto 100%;\n    flex-direction: column;\n}"])));
var Width = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 1300px;\n      height: 28rem;\n      display: flex;\n     margin: 3rem 0 0 0;\n        align-items: center;\n        justify-content: space-between;\n        background-color: #98C87D;\n        background-image: url(", ");\n        background-size: 100% 100%;\n       // background-position: right center;\n        background-repeat: no-repeat;\n       // background: red;\n  \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n        \n    }\n    @media only screen and (max-width: 1100px) {\n      //   flex-direction: column;\n      //  margin: 7rem  0 0 0;\n       background-size: 40rem 25rem;\n       height: 25rem;\n       justify-content: center;\n    }\n\n    @media only screen and (max-width: 510px) {\n      width: 98%;\n      //margin: 4rem  0 0 0;\n      background-position: center center;\n      background-size: auto auto;\n  }\n"])), _support.default);
var Left = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        width: 55%;\n     // background: red;\n\n          @media only screen and (max-width: 1100px) {\n            width: 50%;\n        }\n        @media only screen and (max-width: 998px) {\n            width: 85%;\n        }\n\n    @media only screen and (max-width: 768px) {\n     \n        width: 85%;\n      \n       \n      }\n"])));
var Right = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        width: 60%;\n        height: 45rem;\n\n\n          @media only screen and (max-width: 1100px) {\n            width: 50%;\n            margin: 3rem  0 0 0;\n            height: auto;\n        }\n        @media only screen and (max-width: 998px) {\n            width: 65%;\n           \n        }\n\n      @media only screen and (max-width: 768px) {\n        width: 25rem; \n        \n      }\n\n      @media only screen and (max-width: 768px) {\n        width: 90%; \n        \n      }\n"])));
var Ht = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: #000;\n    font-size: 4rem;\n    margin-bottom: 2rem;\n    text-align: left;\n    //font-family: 'PT Serif', serif !important;\n    line-height: 1.15;\n    margin: 0 0 0 2rem;\n\n    @media only screen and (max-width: 1300px) {\n      font-size: 3.5rem;\n    }\n\n    @media only screen and (max-width: 1300px) {\n      font-size: 3rem;\n    }\n\n    // @media only screen and (max-width: 1100px) {\n    //   font-size: 2.5rem;\n    // }\n\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 2.5rem;\n        font-weight: bold;\n      }\n"])));
var T = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    \n    font-weight: 500;\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n    text-align: left;\n   // font-family: 'Nunito Sans', sans-serif;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1rem;\n       \n      }\n"])));
var ButtonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      display: flex;\n        justify-content: center;\n        \n        justify-content: space-between;\n     width: 22rem;\n     margin: 3rem 0 0 0;\n     @media only screen and (max-width: 768px) {\n      width: 98%;\n      flex-direction: column;\n    }\n"])));
var ShowButton = (0, _styledComponents.default)(_reactScroll.Link)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    background-color: rgba(2, 169, 92, 1); //\n    color: #FFF ;\n    font-weight: bold;\n    cursor: pointer;\n    position: fixed;\n    height: 4rem;\n    width: 3rem;\n    border-radius: 0.5rem;\n    transition:  0.5s linear;\n    right: 3rem ;\n    bottom: 10rem;\n    display: grid;\n    place-items: center;\n    z-index: 7;\n    @media only screen and (max-width: 768px) {\n      right: 2rem ;\n    bottom: 5rem;\n    }\n    \n"])));
var ButtonR = (0, _styledComponents.default)(_Navbar.Button)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0 0 0 1rem;\n  box-shadow: none;\n  color: rgba(0, 29, 35, 1);\n  background: transparent;\n  min-width: 15rem;\n  border: 2px solid rgba(176, 163, 144, 1);\n  @media only screen and (max-width: 768px) {\n    margin: 1rem 0 0 0;\n  }\n"])));
var Home = function Home() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var wallet = (0, _useWallet.useWallet)();
  var renderButton = function renderButton() {
    return wallet.account ? /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
      type: "button",
      style: {
        padding: '0 1rem',
        minWidth: '11rem'
      },
      onClick: function onClick() {
        wallet.connect();
      },
      to: "donate",
      spy: true,
      smooth: true,
      offset: 150
    }, wallet.account.slice(0, 10), "...") : /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
      type: "button",
      style: {
        padding: '0 1rem',
        minWidth: '11rem'
      },
      onClick: function onClick() {
        wallet.connect();
      },
      to: "donate",
      spy: true,
      smooth: true,
      offset: 150
    }, "Donate");
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showButton = _useState2[0],
    setShowButton = _useState2[1];
  var showButtonTop = function showButtonTop() {
    // console.log(window.scrollY)
    if (window.scrollY >= 600) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  (0, _react.useEffect)(function () {
    showButtonTop();
    // adding the event when scroll change background
    window.addEventListener("scroll", showButtonTop);
  });
  return /*#__PURE__*/_react.default.createElement(_reactScroll.Element, {
    id: "allfundraiser",
    name: "allfundraiser"
  }, /*#__PURE__*/_react.default.createElement(HomePage, null, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement(Ht, null, "Your support is highly  ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: 'rgba(2, 169, 92, 1)'
    }
  }, "appreciated"), " "))), showButton ? /*#__PURE__*/_react.default.createElement(ShowButton, {
    type: "button",
    to: "home",
    spy: true,
    smooth: true
  }, /*#__PURE__*/_react.default.createElement(_bs.BsBoxArrowUp, {
    size: "2rem"
  })) : null));
};
var _default = Home;
exports.default = _default;