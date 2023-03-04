"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../../Home/Page2/Page2");
var _fa = require("react-icons/fa");
require("./CurrencyCard.css");
var _Navbar = require("../../../../components/Navbar/Navbar");
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ExchangeCard = function ExchangeCard(props) {
  var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n     \n        width: 30rem;  \n        min-height: 30rem; \n       \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n       // justify-content: space-between;\n       background-color: #FFF;\n        margin: 0 auto;\n        border-radius: 1.25rem ;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n       \n        @media only screen and (max-width: 510px) {\n            \n            width: 98%;\n            \n        }\n    "])));
  var Heading = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: 100%;\n        border-bottom: 1px solid grey;\n        padding: 1rem 1rem 0.5rem 2rem;\n        font-size: 1.25rem;\n        font-weight: bold;\n        "])));
  var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n       \n        padding: 0 1rem;\n        display: grid;\n        place-items: center;\n    "])));
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Heading, null, "Contribute"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '400',
      lineHeight: '1.2',
      margin: '3rem 1rem 1rem 1rem',
      fontSize: '1.05rem',
      textAlign: 'left'
    }
  }, "You are about to contribute to this fundraise", /*#__PURE__*/_react.default.createElement("div", null), "Enter your donation"), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '400',
      lineHeight: '1.2',
      margin: '0 1rem',
      fontSize: '1.05rem'
    }
  }, "You will go through 2 blockchain transactions", /*#__PURE__*/_react.default.createElement("div", null), "Approve Spending", /*#__PURE__*/_react.default.createElement("div", null), "Donate"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "dropbtn1"
  }, "Country", /*#__PURE__*/_react.default.createElement(_fa.FaAngleDown, {
    style: {
      fontSize: '1.8rem',
      color: 'grey'
    }
  }), " "), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-content1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 1"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 2"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 3")))), /*#__PURE__*/_react.default.createElement("svg", {
    width: "56",
    height: "40",
    viewBox: "0 0 56 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "56",
    height: "40",
    rx: "8",
    fill: "#F7F7F7"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26 16L23 13L20 16",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23 27V13",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M30 24L33 27L36 24",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M33 13V27",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "dropbtn1"
  }, "Country", /*#__PURE__*/_react.default.createElement(_fa.FaAngleDown, {
    style: {
      fontSize: '1.8rem',
      color: 'grey'
    }
  }), " "), /*#__PURE__*/_react.default.createElement("div", {
    class: "dropdown-content1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 1"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 2"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Link 3"))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: '2rem',
      minWidth: '9rem',
      margin: '1rem 0',
      border: '2px solid #F7F7F7',
      fontSize: '1.75rem'
    },
    onClick: function onClick() {
      return dispatch({
        type: 'PAY2'
      });
    }
  }, "DONATE")), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: '#000',
      fontWeight: '300',
      fontSize: '1.2rem'
    }
  }, "I agree with Rules and statements"));
};
var _default = ExchangeCard;
exports.default = _default;