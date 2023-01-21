"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _rcProgress = require("rc-progress");
var _FundraiserCard = _interopRequireDefault(require("./FundraiserCard"));
var _reactRedux = require("react-redux");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledRaiser = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 90%;\n  margin-left:10px;\n  margin-right:10px;\n\n  display: flex;\n  align-items: center;\n  // justify-content: center;\n  flex-direction: column;\n  height: 100%;\n"])));
var Head = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2rem 0 0 0;\n"])));
var T = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
var CardContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
var FundRaisers = function FundRaisers() {
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  });
  var fundraisers = user.fundraisers ? user.fundraisers : [];
  console.log({
    fundraisers: fundraisers
  });
  return /*#__PURE__*/_react.default.createElement(StyledRaiser, null, /*#__PURE__*/_react.default.createElement(CardContainer, null, fundraisers.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_FundraiserCard.default, {
      data: item,
      key: index
    });
  })));
};
var _default = FundRaisers;
exports.default = _default;