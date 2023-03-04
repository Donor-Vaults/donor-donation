"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link1 = exports.Image = exports.IconContainer = exports.Button = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Navbar.css");
var _logo = _interopRequireDefault(require("./logo.svg"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _components = require("./components");
var _reactFocusLock = _interopRequireDefault(require("react-focus-lock"));
var _reactScroll = _interopRequireWildcard(require("react-scroll"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactRouterDom = require("react-router-dom");
var _useWallet = require("use-wallet");
var _Profile = _interopRequireDefault(require("./components/Profile/Profile"));
var _Logout = _interopRequireDefault(require("./components/Profile/Logout"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
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
var ScrollLink = _reactScroll.default.ScrollLink;
var Link1 = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 0.5rem 8vw;\n  align-items: center;\n  text-decoration: none;\n  color: #000;\n  cursor: pointer;\n  font-size: 1.8rem;\n // background:red;\n  font-family: 'Roboto Condensed', sans-serif;\n  @-webkit-keyframes hvr-pulse {\n    25% {\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1);\n    }\n    75% {\n      -webkit-transform: scale(0.9);\n      transform: scale(0.9);\n    }\n  }\n  @keyframes hvr-pulse {\n    25% {\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1);\n    }\n    75% {\n      -webkit-transform: scale(0.9);\n      transform: scale(0.9);\n    }\n  }\n \n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  \n  &:hover, &:focus, &:active {\n    -webkit-animation-name: hvr-pulse;\n    animation-name: hvr-pulse;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n  }\n}\n\n@media only screen and (max-width: 1600px) {\n  margin: 0 0 0 1rem;\n}\n\n@media only screen and (max-width: 768px) {\n  font-size: 1.8rem;\n}\n\n\n"])));
exports.Link1 = Link1;
var Link2 = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  align-items: center;\n  text-decoration: none;\n  color: #FFF !important;\n  cursor: pointer;\n  font-weight: 550;\n\n  @media only screen and (max-width: 768px) {\n    \n  }\n\n"])));
var Link3 = _styledComponents.default.a(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  align-items: center;\n  text-decoration: none;\n  color: #FFF !important;\n  cursor: pointer;\n\n  @media only screen and (max-width: 768px) {\n    \n  }\n\n"])));
var Hr = _styledComponents.default.a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\ndisplay: flex;\nmargin: 0;\nalign-items: center;\ntext-decoration: none;\ncolor: #FFF !important;\ncursor: pointer;\n@media only screen and (max-width: 768px) {\n  \n}\n"])));
var Mobile = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: none;\n  @media only screen and (max-width: 1200px) {\n    display: block;\n    //margin: 0 2rem 0 0;\n    background: red;\n  }"])));
var PC = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\ndisplay: block;\n@media only screen and (max-width: 1200px) {\n  display: none;\n}"])));
var Button = (0, _styledComponents.default)(_reactScroll.Link)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: rgba(2, 169, 92, 1);\n  border: none;\n  border-radius: 2rem;\n  padding: 0 1.5rem;\n  color: #FFF;\n  font-size: 1.2rem;\n  height: 3.5rem;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"])));
exports.Button = Button;
var IconContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  \n  margin: 0 8vw 0 2rem;\n  @media only screen and (max-width: 1600px) {\n    margin: 0 6rem 0 0;\n  }\n  @media only screen and (max-width: 1200px) {\n    margin: 0 10rem 0 0;\n  }\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n \n"])));
exports.IconContainer = IconContainer;
var Image = (0, _styledComponents.default)(_framerMotion.motion.img)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));
exports.Image = Image;
var RightContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  //background: red;\n  align-items: center;\n"])));
var Navbar = function Navbar() {
  var wallet = (0, _useWallet.useWallet)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var node = (0, _react.useRef)();
  var menuId = "main-menu";
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    navbar = _useState4[0],
    setNavbar = _useState4[1];
  var changeBackground = function changeBackground() {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  (0, _react.useEffect)(function () {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: navbar ? "navActiveLight" : "nav"
  }, /*#__PURE__*/_react.default.createElement(Link1, {
    to: "/",
    spy: true,
    smooth: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Logo",
    className: navbar ? "LogoActive" : "Logo"
  }), " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0 0 0 -0.5rem'
    }
  }, "Donor")), /*#__PURE__*/_react.default.createElement(RightContainer, null, /*#__PURE__*/_react.default.createElement(PC, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: wallet.account ? "listWallet" : "list"
  }, /*#__PURE__*/_react.default.createElement(Link3, {
    href: "http://donoooor-valuts.s3-website-us-west-2.amazonaws.com/#/bsctest",
    spy: true,
    smooth: true,
    offset: -80
  }, "Vault"), /*#__PURE__*/_react.default.createElement(Link2, {
    to: "/allfundraiser#allfundraiserCategory",
    spy: true,
    smooth: true,
    offset: -80
  }, "Donate"), /*#__PURE__*/_react.default.createElement(Link2, {
    to: "/start",
    spy: true,
    smooth: true,
    offset: -80
  }, "Start a Fundraiser"), /*#__PURE__*/_react.default.createElement(Link2, {
    to: "/docs",
    spy: true,
    smooth: true,
    offset: -80
  }, "Docs"), /*#__PURE__*/_react.default.createElement(Link2, {
    to: "/work",
    spy: true,
    smooth: true,
    offset: -80
  }, "How It Works"), wallet.account ? /*#__PURE__*/_react.default.createElement(Link2, {
    to: "/work",
    spy: true,
    smooth: true,
    offset: -80
  }, "My Campaigns ") : null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(IconContainer, null), /*#__PURE__*/_react.default.createElement(Mobile, {
    ref: node
  }, /*#__PURE__*/_react.default.createElement(_reactFocusLock.default, {
    disabled: !open
  }, /*#__PURE__*/_react.default.createElement(_components.Burger, {
    open: open,
    setOpen: setOpen,
    "aria-controls": menuId
  }), /*#__PURE__*/_react.default.createElement(_components.Menu, {
    open: open,
    setOpen: setOpen,
    id: menuId
  }))))), /*#__PURE__*/_react.default.createElement(_Profile.default, {
    onClick: function onClick() {
      /*#__PURE__*/_react.default.createElement(_Logout.default, null);
    }
  }));
};
var _default = Navbar;
exports.default = _default;