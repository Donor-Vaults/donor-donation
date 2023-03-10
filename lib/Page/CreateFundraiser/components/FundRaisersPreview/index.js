"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTheming = _interopRequireDefault(require("styled-theming"));
var _BigCard = _interopRequireDefault(require("../../../FundraiserInfo/components/BigCard"));
var _reactRedux = require("react-redux");
var _material = require("@mui/material");
var _useWallet = require("use-wallet");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Sec = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n   // padding: 8rem 0 3rem 0;\n    background-color: rgba(249, 232, 202, 1);\n    background-repeat: no-repeat;\n    background-image: url();\n    background-size: 50% 70%;\n    background-position: right top !important;\n  \n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        padding: 1rem 0 2rem 0;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n"])));
var Flex = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: 100%;\n        display: flex;\n        //\n        justify-content: space-between;\n       // align-items: center;\n     \n    @media only screen and (max-width: 1250px) {\n       \n        flex-direction: column;\n      }\n"])));
var Button = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: rgba(2, 169, 92, 1);\n  border: none;\n  border-radius: 0 0.5rem 0.5rem 0;\n  padding: 0 1.5rem;\n  color: #FFF;\n  font-size: 1.2rem;\n  height: 8rem;\n  width: 15rem;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n \n  @media only screen and (max-width: 1100px) {\n    height: 4rem;\n   \n  }\n\n  @media only screen and (max-width: 768px) {\n    height: 4rem;\n    width: 100%;\n    border-radius: 0 0 0.5rem 0.5rem;\n  }\n"])));
var SmallButton = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 2px solid rgba(2, 169, 92, 1);\n  border-radius: 0.5rem ;\n  padding: 0.5rem 1.5rem;\n  color: rgba(2, 169, 92, 1);\n  font-size: 1.2rem;\n  cursor: pointer;\n      margin: 1.5rem 0 0 0;\n"])));
var Width = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      width: 1300px;\n      display: flex;\n      flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    \n    @media only screen and (max-width: 1400px) {\n        width: 95%;\n    }\n    @media only screen and (max-width: 1100px) {\n        flex-direction: column;\n    }\n"])));
var Heading = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: rgba(2, 169, 92, 1);\n    font-size: 2.5rem;\n      //margin: 0.5rem 0;\n      font-weight: bold;\n     text-align: center;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    @media only screen and (max-width: 768px) {\n        font-weight: 510;\n        font-size: 1.2rem;\n      \n      }\n"])));
var Line = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: rgba(196, 196, 196, 0.3);\n    width: 75%;\n    height: 3px;\n    margin: 1rem 0 0 0;\n    @media only screen and (max-width: 1350px) {\n      //width: 20rem;\n    }\n"])));
var Box = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 35rem;\n  background-color: #2d7b43;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem auto 0 auto;\n  justify-self: center;\n  padding: 3rem 0;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 2rem;\n\n  @media only screen and (max-width: 500px) {\n    width: 98%;\n  }\n"])));
var ApprovalPanel = function ApprovalPanel(_ref) {
  var onConfirm = _ref.onConfirm,
    isLoading = _ref.isLoading,
    onNext = _ref.onNext,
    isDeployed = _ref.isDeployed;
  var wallet = (0, _useWallet.useWallet)();
  var renderButton = function renderButton() {
    var _onClick = "";
    var text = "";
    if (wallet.account) {
      if (isDeployed) {
        text = "Continue";
        _onClick = onNext;
      } else {
        text = "Publish";
        _onClick = onConfirm;
      }
    } else {
      text = "Connect Wallet";
      _onClick = wallet.connect;
    }
    return /*#__PURE__*/_react.default.createElement(Button, {
      onClick: function onClick() {
        _onClick();
      },
      style: {
        borderRadius: "2rem",
        //   width: "12rem",
        margin: "0 0 2rem 0",
        border: "2px solid #FFFFFF",
        fontSize: "2rem"
      }
    }, isLoading ? "Please Wait" : text);
  };
  return /*#__PURE__*/_react.default.createElement(Box, null, renderButton());
};
var FundraiserPreview = function FundraiserPreview(_ref2) {
  var fundraiser = _ref2.fundraiser,
    isLoading = _ref2.isLoading,
    onConfirm = _ref2.onConfirm,
    onNext = _ref2.onNext,
    isDeployed = _ref2.isDeployed;
  return /*#__PURE__*/_react.default.createElement(Sec, {
    id: ""
  }, /*#__PURE__*/_react.default.createElement(Width, null, /*#__PURE__*/_react.default.createElement(Heading, {
    style: {
      color: "black"
    }
  }, "Preview"), /*#__PURE__*/_react.default.createElement(Heading, null, fundraiser.fundraiserName), /*#__PURE__*/_react.default.createElement(Line, null), /*#__PURE__*/_react.default.createElement(Flex, null, /*#__PURE__*/_react.default.createElement(_BigCard.default, {
    fundraiser: fundraiser,
    isForPreview: true
  }), /*#__PURE__*/_react.default.createElement(ApprovalPanel, {
    onConfirm: onConfirm,
    isLoading: isLoading,
    onNext: onNext,
    isDeployed: isDeployed
  }))));
};
var _default = FundraiserPreview;
exports.default = _default;