"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialShare = void 0;
var _material = require("@mui/material");
var _system = require("@mui/system");
var _react = _interopRequireWildcard(require("react"));
var _Navbar = require("../Navbar/Navbar");
var _reactShare = require("react-share");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SocialShare = function SocialShare(_ref) {
  var link = _ref.link;
  var shareUrl = link;
  var title = 'Donor Platform';
  return /*#__PURE__*/_react.default.createElement(_system.Box, {
    mt: 1
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button
  //disabled={fundraiser.fundraisers_status !== "APPROVED"}
  , {
    style: {
      width: "12rem",
      background: "#FFF",
      color: "#2D7B43"
    }
  }, "Share Now"), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__container",
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '1rem 0 0 0'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.FacebookShareButton, {
    url: shareUrl,
    quote: title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.FacebookIcon, {
    size: 32,
    round: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.TwitterShareButton, {
    url: shareUrl,
    title: title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.TwitterIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network__share-count"
  }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.TelegramShareButton, {
    url: shareUrl,
    title: title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.TelegramIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network__share-count"
  }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.WhatsappShareButton, {
    url: shareUrl,
    title: title,
    separator: ":: ",
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.WhatsappIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network__share-count"
  }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.LinkedinShareButton, {
    url: shareUrl,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.LinkedinIcon, {
    size: 32,
    round: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "Demo__some-network"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.EmailShareButton, {
    url: shareUrl,
    subject: title,
    body: "body",
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.EmailIcon, {
    size: 32,
    round: true
  })))));
};
exports.SocialShare = SocialShare;