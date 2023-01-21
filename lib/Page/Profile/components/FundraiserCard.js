"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _pro = _interopRequireDefault(require("./pro.png"));
var _Page = require("../../Home/Page2/Page2");
var _rcProgress = require("rc-progress");
var _moment = _interopRequireDefault(require("moment"));
var _reactRouterDom = require("react-router-dom");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var backgroundColor = (0, _styledTheming.default)("theme", {
  light: "#000000",
  dark: "#E5E5E5"
});
exports.backgroundColor = backgroundColor;
var bColor = (0, _styledTheming.default)("theme", {
  light: "linear-gradient(to right, #36d1dc, #5b86e5)",
  dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
});
exports.bColor = bColor;
var Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #ffffff;\n  display: flex;\n  //flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem auto 0 auto;\n  padding: 0.5rem 2rem;\n  justify-self: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 0.75rem;\n\n  @media only screen and (max-width: 900px) {\n    width: 98%;\n    flex-direction: column;\n    padding: 2rem 1rem;\n  }\n"])));
var Upper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 18rem;\n  width: 100%;\n"])));
var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0 1rem;\n"])));
var StyledLine = (0, _styledComponents.default)(_rcProgress.Line)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: -1rem 0 1rem 0;\n\n  @media only screen and (max-width: 510px) {\n    width: 99%;\n  }\n"])));
var Ts = (0, _styledComponents.default)(_Page.T)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #000;\n  margin: 0;\n"])));
var Tc = (0, _styledComponents.default)(_Page.T)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #000;\n  margin: 0;\n  padding: 0 2rem;\n\n  @media only screen and (max-width: 900px) {\n    padding: 0;\n    text-align: center;\n  }\n"])));
var Mid = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  @media only screen and (max-width: 900px) {\n    margin: 2rem 0;\n  }\n"])));
var Card = function Card(_ref) {
  var data = _ref.data;
  var getFundraiserStatus = function getFundraiserStatus() {
    if (data.fundraisers_status === "PENDING") {
      return "Pending Approval";
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/fundraiser?id=".concat(data.id),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "0 0 0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: data.featuredImage,
    alt: "",
    style: {
      width: "5rem",
      height: "5rem",
      margin: " 0 0 0"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "0 0 0 1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      margin: " 0 0 0",
      color: "#000",
      fontSize: "1rem"
    }
  }, data.fundraiserName))), /*#__PURE__*/_react.default.createElement(Mid, null, /*#__PURE__*/_react.default.createElement(Tc, null, data.fundraiserDescription)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: "17rem",
      justifyContent: "space-between",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement(Ts, {
    style: {
      margin: "0 0 0.5rem 0",
      fontSize: "1.25rem"
    }
  }, "Goal Amount:$ ", data.goalAmount), /*#__PURE__*/_react.default.createElement(Ts, {
    style: {
      margin: "0 0 0.5rem 0",
      fontSize: "1.0rem"
    }
  }, "Status: ", getFundraiserStatus()), /*#__PURE__*/_react.default.createElement(_rcProgress.Line, null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "0.5rem 0 0.4rem 0"
    }
  }, "Created At ", (0, _moment.default)(data.createdAt).format("DD MMM YYYY hh:mm a"))))));
};
var _default = Card;
exports.default = _default;