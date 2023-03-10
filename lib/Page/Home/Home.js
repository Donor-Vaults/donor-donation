"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Home = _interopRequireDefault(require("./Page1/Home"));
var _Page = _interopRequireDefault(require("./Page2/Page2"));
var _Page2 = _interopRequireDefault(require("./Page4/Page4"));
var _Page3 = _interopRequireDefault(require("./Page7/Page7"));
var Scroll = _interopRequireWildcard(require("react-scroll"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HomeDefault = function HomeDefault() {
  var scrollToWithContainer = function scrollToWithContainer() {
    var goToContainer = new Promise(function (resolve, reject) {
      Scroll.Events.scrollEvent.register("end", function () {
        resolve();
        Scroll.Events.scrollEvent.remove("end");
      });
      Scroll.scroller.scrollTo("allfundraiserCategory", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80
      });
    });
    goToContainer.then(function () {
      return Scroll.scroller.scrollTo("allfundraiserCategory", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "allfundraiserCategory",
        offset: -80
      });
    });
  };
  if (window.location.pathname === "/allfundraiser") {
    scrollToWithContainer();
  }
  (0, _react.useEffect)(function () {
    scrollToWithContainer();
  }, [window.location.pathname]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Home.default, null), /*#__PURE__*/_react.default.createElement(_Page.default, null), /*#__PURE__*/_react.default.createElement(_Page2.default, null), /*#__PURE__*/_react.default.createElement(_Page3.default, null));
};
var _default = HomeDefault;
exports.default = _default;