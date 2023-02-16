"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backgroundColor = exports.bColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _reactParallaxTilt = _interopRequireDefault(require("react-parallax-tilt"));
var _Page = require("../../Page/Home/Page2/Page2");
var _rcProgress = require("rc-progress");
var _Navbar = require("../Navbar/Navbar");
var _wp = _interopRequireDefault(require("./wp.svg"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _moment = _interopRequireDefault(require("moment"));
var _SocialShare = require("../SocialShare");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
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
var Box = (0, _styledComponents.default)(_reactParallaxTilt.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 25rem;\n  min-height: 54rem;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem auto 0 auto;\n  justify-self: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 0.75rem;\n\n  @media only screen and (max-width: 500px) {\n    width: 98%;\n  }\n"])));
var Upper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 18rem;\n  width: 100%;\n"])));
var Lower = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0 1rem;\n"])));
var StyledLine = (0, _styledComponents.default)(_rcProgress.Line)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: -1rem 0 1rem 0;\n\n  @media only screen and (max-width: 510px) {\n    width: 99%;\n  }\n"])));
var Ts = (0, _styledComponents.default)(_Page.T)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  font-weight: bold;\n"])));
var Hs = (0, _styledComponents.default)(_Page.H)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  font-weight: bold;\n"])));
var ButtonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  justify-content: space-between;\n  width: 22rem;\n  margin: 0 0 2rem 0;\n  @media only screen and (max-width: 768px) {\n    width: 98%;\n    flex-direction: column;\n  }\n"])));
var ButtonR = (0, _styledComponents.default)(_Navbar.Button)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0 0 0 1rem;\n  box-shadow: none;\n  color: rgba(0, 29, 35, 1);\n  background: transparent;\n  //min-width: 15rem;\n  border: 2px solid rgba(176, 163, 144, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media only screen and (max-width: 768px) {\n    margin: 1rem 0 0 0;\n  }\n"])));
var FundraiserCard = function FundraiserCard(props) {
  var data = props.data;
  var featuredImage = data.featuredImage,
    firstName = data.firstName,
    createdAt = data.createdAt,
    fundraiserDescription = data.fundraiserDescription,
    fundraiserName = data.fundraiserName,
    fundraisers_status = data.fundraisers_status,
    goalAmount = data.goalAmount,
    id = data.id,
    lastName = data.lastName,
    supportingDocuments = data.supportingDocuments,
    updatedAt = data.updatedAt,
    userId = data.userId;
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/fundraiser?id=".concat(id),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/_react.default.createElement(Ts, {
    style: {
      textAlign: "left",
      margin: "2rem 1rem 1rem 1rem",
      color: "rgba(2, 169, 92, 1)"
    }
  }, fundraiserName), /*#__PURE__*/_react.default.createElement(Upper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: featuredImage,
    alt: "",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/_react.default.createElement(Lower, null, /*#__PURE__*/_react.default.createElement(Ts, {
    style: {
      textAlign: "left",
      color: "rgba(0, 29, 35, 1)",
      marginTop: "1.5rem"
    }
  }, fundraiserDescription), /*#__PURE__*/_react.default.createElement(StyledLine, {
    style: {},
    percent: "50",
    strokeWidth: "1.9",
    strokeColor: "#02A95C",
    trailColor: "#DBDBDB"
    // gapPosition="2rem 2rem 1rem 1rem"
  }), /*#__PURE__*/_react.default.createElement(_Page.H, {
    style: {
      color: "rgba(0, 0, 0, 1)",
      fontSize: "1.4rem"
    }
  }, "Goal: $", goalAmount), /*#__PURE__*/_react.default.createElement(_Page.T, {
    style: {
      color: "rgba(133, 129, 129"
    }
  }, "Created At : ", (0, _moment.default)(createdAt).format("DD MMM YYYY hh:mm a")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: "1.5rem",
      minWidth: "9rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/fundraiser?id=".concat(id),
    style: {
      color: "#FFF",
      textDecoration: "none"
    }
  }, "Donate")), /*#__PURE__*/_react.default.createElement(_SocialShare.SocialShare, {
    link: ""
  })))));
};
var _default = FundraiserCard;
exports.default = _default;