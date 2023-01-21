"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _Navbar = require("../../../components/Navbar/Navbar");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _logo = _interopRequireDefault(require("../../../components/Navbar/logo.svg"));
var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var T = _styledComponents.default.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: 500;\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Ht = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: 500;\n  font-size: 1.25rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Left = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 1rem;\n  padding: 1rem;\n  //   @media only screen and (max-width: 1100px) {\n  //     width: 50%;\n  // }\n\n  @media only screen and (max-width: 998px) {\n    width: 35rem;\n    padding: 1rem 0;\n    margin: 7rem 0 0 0;\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 95%;\n    padding: 1rem 0;\n    margin: 7rem 0 0 0;\n  }\n"])));
var Right = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: 60%;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    margin: 0 0 0 0;\n  }\n\n  @media only screen and (max-width: 998px) {\n    width: 95%;\n  }\n"])));
var Box = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 95%;\n  min-height: 30rem;\n  background-color: #ffdea580;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius: 1rem;\n  position: relative;\n\n  @media only screen and (max-width: 998px) {\n    flex-direction: column;\n    min-height: 30rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
var Back = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 3rem 0;\n  cursor: pointer;\n\n  @media only screen and (max-width: 998px) {\n    position: absolute;\n    top: 0;\n    right: 2rem;\n  }\n"])));
var Details = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: linear-gradient(\n      180deg,\n      rgba(2, 169, 92, 0.5) 0%,\n      rgba(34, 170, 48, 0.5) 100%\n    ),\n    linear-gradient(0deg, #ffffff, #ffffff);\n  padding: 3rem 2rem 2rem 2rem;\n  border: 0.25rem solid #ffffff;\n  border-radius: 1.25rem;\n  margin: 0 1rem 4rem 1rem;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n    margin: 0 0 2rem 0;\n    padding: 3rem 0.5rem 2rem 0.5rem;\n  }\n"])));
var Input = _styledComponents.default.input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 20rem;\n\n  @media only screen and (max-width: 998px) {\n    width: 100%;\n  }\n"])));
var H = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  // font-weight: light;\n  // margin-bottom: 2rem;\n  text-align: left !important;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 0.95rem;\n    font-weight: bold;\n  }\n"])));
var Part1 = function Part1(_ref) {
  var hide = _ref.hide,
    value = _ref.value,
    onNext = _ref.onNext,
    onInfoChanged = _ref.onInfoChanged;
  //     const navigate = useNavigate ();

  // const naviagtePath = ()=>{
  //     let path = `/`;
  //     navigate(path);
  // }

  var _useState = (0, _react.useState)({
      name: "",
      dob: "",
      country: "",
      mobile: "",
      email: "",
      password: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    info = _useState2[0],
    setInfo = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var validate = function validate() {
    if (!info.name) {
      console.log("dsdsdsdsd111");
      _reactHotToast.default.error("Enter Name");
      return false;
    }
    if (!info.dob) {
      _reactHotToast.default.error("Enter DOB");
      return false;
    }
    if (!info.country) {
      _reactHotToast.default.error("Enter Country");
      return false;
    }
    if (!info.mobile) {
      _reactHotToast.default.error("Enter Mobile");
      return false;
    }
    if (!info.email) {
      _reactHotToast.default.error("Enter Email");
      return false;
    }
    if (!info.password) {
      _reactHotToast.default.error("Enter Password");
      return false;
    }
    return true;
  };
  var handleOnNext = function handleOnNext() {
    console.log("ddsdsds");
    var isValid = validate();
    if (isValid) {
      onNext();
    }
  };
  (0, _react.useEffect)(function () {
    if (info && onInfoChanged) {
      onInfoChanged(info);
    }
  }, [info]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: hide ? "none" : "block"
    }
  }, /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "",
    style: {
      width: "5rem",
      height: "4.5rem",
      margin: "0 0 2rem 0"
    }
  })), /*#__PURE__*/_react.default.createElement(Ht, null, "Your information is collected for legal and security purposes only"), /*#__PURE__*/_react.default.createElement(T, null, "Please provide us with your basic details")), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(Details, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem",
      margin: "1rem 0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Your Name")), /*#__PURE__*/_react.default.createElement(Input, {
    placeholder: "Enter Name"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    value: info.name,
    onChange: function onChange(r) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        name: r.target.value
      }));
    },
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Date of Birth"), /*#__PURE__*/_react.default.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.806 0C20.4004 0 20.8829 0.437579 20.8829 0.97674L20.8836 2.08086C22.9801 2.21123 24.7214 2.86256 25.9537 3.98262C27.2992 5.20811 28.0071 6.97014 27.9999 9.08381V20.9649C27.9999 25.3042 24.9615 28 20.0723 28H7.92756C3.03835 28 0 25.2664 0 20.8659V9.0812C0 4.98826 2.70961 2.36103 7.12875 2.08131L7.12963 0.97674C7.12963 0.437579 7.61209 0 8.20655 0C8.80101 0 9.28347 0.437579 9.28347 0.97674L9.28304 2.05636H18.7283L18.7291 0.97674C18.7291 0.437579 19.2115 0 19.806 0ZM25.8461 11.5959H2.15384V20.8659C2.15384 24.2076 4.20429 26.0465 7.92756 26.0465H20.0723C23.7956 26.0465 25.8461 24.2415 25.8461 20.9649L25.8461 11.5959ZM20.3914 19.7904C20.9858 19.7904 21.4683 20.228 21.4683 20.7672C21.4683 21.3063 20.9858 21.7439 20.3914 21.7439C19.7969 21.7439 19.3087 21.3063 19.3087 20.7672C19.3087 20.228 19.784 19.7904 20.3785 19.7904H20.3914ZM14.0196 19.7904C14.6141 19.7904 15.0965 20.228 15.0965 20.7672C15.0965 21.3063 14.6141 21.7439 14.0196 21.7439C13.4252 21.7439 12.937 21.3063 12.937 20.7672C12.937 20.228 13.4122 19.7904 14.0067 19.7904H14.0196ZM7.63449 19.7904C8.22895 19.7904 8.71141 20.228 8.71141 20.7672C8.71141 21.3063 8.22895 21.7439 7.63449 21.7439C7.04003 21.7439 6.5504 21.3063 6.5504 20.7672C6.5504 20.228 7.02711 19.7904 7.62157 19.7904H7.63449ZM20.3914 14.7287C20.9858 14.7287 21.4683 15.1663 21.4683 15.7055C21.4683 16.2446 20.9858 16.6822 20.3914 16.6822C19.7969 16.6822 19.3087 16.2446 19.3087 15.7055C19.3087 15.1663 19.784 14.7287 20.3785 14.7287H20.3914ZM14.0196 14.7287C14.6141 14.7287 15.0965 15.1663 15.0965 15.7055C15.0965 16.2446 14.6141 16.6822 14.0196 16.6822C13.4252 16.6822 12.937 16.2446 12.937 15.7055C12.937 15.1663 13.4122 14.7287 14.0067 14.7287H14.0196ZM7.63449 14.7287C8.22895 14.7287 8.71141 15.1663 8.71141 15.7055C8.71141 16.2446 8.22895 16.6822 7.63449 16.6822C7.04003 16.6822 6.5504 16.2446 6.5504 15.7055C6.5504 15.1663 7.02711 14.7287 7.62157 14.7287H7.63449ZM18.7283 4.00984H9.28304L9.28347 5.26267C9.28347 5.80183 8.80101 6.23941 8.20655 6.23941C7.61209 6.23941 7.12963 5.80183 7.12963 5.26267L7.12887 4.03941C3.91214 4.28449 2.15384 6.05299 2.15384 9.0812V9.64237H25.8461L25.8461 9.0812C25.8518 7.47284 25.3751 6.22261 24.4288 5.36308C23.5982 4.60749 22.3839 4.15622 20.8841 4.04003L20.8829 5.26267C20.8829 5.80183 20.4004 6.23941 19.806 6.23941C19.2115 6.23941 18.7291 5.80183 18.7291 5.26267L18.7283 4.00984Z",
    fill: "#3E4958"
  }))), /*#__PURE__*/_react.default.createElement(Input, {
    type: "date",
    placeholder: "DD/MM/YYYY"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    value: info.dob,
    onChange: function onChange(r) {
      console.log(r);
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        dob: r.target.value
      }));
    },
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem",
      margin: "1rem 0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Country"), /*#__PURE__*/_react.default.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.9227 3.5875C12.9883 3.5875 13.0703 3.62031 13.1414 3.71875C12.8242 3.26484 13.4969 3.46172 13.5352 3.02969C13.918 2.74531 13.7812 2.55937 13.8906 2.54844L14.0109 2.45C13.7758 2.5375 13.6937 2.55391 13.6281 2.55391H13.5188C13.4367 2.55391 13.3 2.57031 12.9773 2.66875C12.2391 2.72344 11.7086 3.52188 11.457 3.54375C11.2 3.68047 11.2109 3.70781 11.2711 3.70781C11.2875 3.70781 11.3094 3.70234 11.3313 3.70234C11.3531 3.70234 11.3695 3.69687 11.3859 3.69687C11.4461 3.69687 11.4297 3.72422 11.0797 3.88828C11.1617 3.91016 10.4672 4.21641 10.4617 4.69766C10.4398 4.88359 10.5164 5.00938 10.6422 5.00938C10.7516 5.00938 10.8883 4.92734 11.0359 4.71953C11.5281 4.15078 12.5672 4.09609 13.0156 3.75156C12.7367 3.72969 12.7914 3.5875 12.9227 3.5875ZM10.4234 3.77891C10.3742 3.77891 10.4398 3.71875 10.5109 3.65859C10.5875 3.59844 10.675 3.53828 10.675 3.53828L10.6695 3.54375C10.9648 3.42891 10.7844 3.40156 10.943 3.325H10.932C10.8992 3.325 10.9594 3.28125 11.0141 3.23203C11.0687 3.18828 11.118 3.13906 11.0687 3.13906C11.0414 3.13906 10.9703 3.15547 10.85 3.20469C10.8883 3.15 11.0359 3.11172 11.2438 2.99688C10.943 3.09531 10.7078 3.15547 10.6805 3.15547C10.6586 3.15547 10.7844 3.11172 11.1617 2.99688C11.1781 2.99688 11.1945 3.00234 11.2055 3.00234C11.2437 3.00234 11.2602 2.99141 11.2547 2.98047C11.2492 2.96953 11.2273 2.96406 11.1891 2.96406C10.6477 3.00781 10.243 3.34687 10.3633 3.39062C10.4344 3.36875 10.4836 3.35781 10.5164 3.35781C10.5875 3.35781 10.5547 3.41797 10.4125 3.50547C10.4781 3.65859 9.31875 4.05234 9.1875 4.19453C9.25313 4.15625 9.29688 4.14531 9.31875 4.14531C9.40625 4.14531 9.29141 4.31484 9.17656 4.39687C9.24766 4.4625 9.30234 4.48438 9.34609 4.48438C9.46094 4.48438 9.51016 4.32578 9.60859 4.27656C9.63047 4.32031 9.65234 4.34219 9.67969 4.34219C9.77266 4.34219 9.8875 4.1125 9.98047 3.99219C10.0078 4.01953 10.0406 4.04141 10.0844 4.04141C10.1719 4.04141 10.3031 3.97031 10.5109 3.76797C10.4672 3.77344 10.4344 3.77891 10.4234 3.77891ZM9.16563 4.78516C8.96875 4.90547 8.86484 4.95469 8.82109 4.95469C8.73906 4.95469 8.84844 4.80156 8.94688 4.64297C9.04531 4.48984 9.13281 4.33672 9.00703 4.33672C8.94687 4.33672 8.8375 4.36953 8.6625 4.45703C8.18672 4.77422 7.38281 5.64922 7.02734 5.64922H6.99453C7.56875 5.22813 7.39922 4.40234 8.20312 4.18906C8.99609 3.73516 9.5375 3.87734 10.243 3.35781C10.0352 3.46172 9.72891 3.57656 9.65781 3.57656C9.61406 3.57656 9.67969 3.52188 9.96406 3.38516C9.93672 3.39062 9.91484 3.39609 9.89844 3.39609C9.70703 3.39609 11.1562 2.87656 11.2273 2.86563C10.6313 2.94766 9.66875 3.44531 9.5375 3.44531C9.52109 3.44531 9.52109 3.43984 9.52109 3.42891C9.54297 3.4125 9.54297 3.40156 9.52109 3.40156C9.45 3.40156 9.15469 3.5 8.85391 3.59844C8.55859 3.69688 8.25781 3.80078 8.19219 3.80078C8.17031 3.80078 8.17031 3.78984 8.20312 3.76797C5.62187 5.23359 3.46719 7.70547 2.79453 10.6367C3.07344 11.2766 2.88203 12.4961 3.34141 12.8516C3.86641 13.2945 2.89297 14.5797 3.15 15.3727C3.4125 16.8055 4.54453 17.7844 4.66484 19.25C4.87266 20.2563 5.63281 21.4867 5.95 22.1266C6.19063 22.3672 6.85234 23.0617 6.96719 23.0617C7.01094 23.0617 6.98359 22.9578 6.80859 22.6789C6.69922 22.3672 6.06484 21.5523 6.37109 21.5523C6.3875 21.5523 6.40391 21.5523 6.42578 21.5578C6.04844 21.175 7.2625 21.2789 6.41484 20.7594C6.31641 20.6391 6.29453 20.6008 6.31641 20.6008C6.34375 20.6008 6.42031 20.6445 6.50781 20.6883C6.60078 20.732 6.71016 20.7758 6.79766 20.7758C6.93438 20.7758 7.02734 20.6828 6.97266 20.3438C6.99453 20.3547 7.01641 20.3547 7.03281 20.3547C7.175 20.3547 7.12578 20.0758 7.13672 19.7969C7.14766 19.518 7.21875 19.2391 7.60156 19.2391C7.64531 19.2391 7.69453 19.2445 7.74375 19.25C8.62969 18.7687 7.85859 17.4398 8.87578 16.9531C8.8375 15.8484 7.35547 15.7938 6.79766 15.3453C6.70469 15.4 6.61719 15.4164 6.52969 15.4164C6.43125 15.4164 6.34375 15.3945 6.26719 15.3672C6.19062 15.3453 6.11953 15.318 6.07031 15.318C6.05937 15.318 6.04844 15.318 6.0375 15.3234C6.98906 15.0719 6.29453 13.7484 5.50703 13.7484H5.45234C5.39219 13.1742 5.09687 13.393 5.06406 12.9172C5.01484 12.9445 4.96563 12.9555 4.91641 12.9555C4.78516 12.9555 4.66484 12.8625 4.56094 12.775C4.45703 12.682 4.36953 12.5945 4.29297 12.5945C4.23281 12.5945 4.17812 12.6547 4.12891 12.8297C4.18359 12.5617 4.16719 12.4742 4.1125 12.4742C4.05781 12.4742 3.95938 12.5672 3.85 12.6602C3.74609 12.7531 3.62578 12.8461 3.53281 12.8461H3.50547C2.86562 12.3922 3.51094 11.5883 3.17188 10.9703C3.39062 10.7352 3.47812 10.3359 3.37969 10.3359C3.33047 10.3359 3.23203 10.4344 3.07891 10.7023C2.86016 10.1445 3.43984 8.88125 3.93203 8.81016C3.94844 8.81016 3.95937 8.80469 3.97578 8.80469C4.06328 8.80469 4.15078 8.84844 4.22734 8.94141C4.27109 9.19844 4.16172 9.73984 4.20547 9.73984C4.22734 9.73984 4.27109 9.63047 4.38047 9.34609C4.52266 8.69531 5.51797 8.225 5.62188 7.82578C5.62734 7.83125 5.62734 7.83125 5.63281 7.83125C5.74766 7.83125 6.48594 7.18047 6.80859 7.10938C6.93437 6.98359 7.02188 6.93984 7.0875 6.93984C7.15859 6.93984 7.19688 6.99453 7.22422 7.04375C7.25156 7.09844 7.27344 7.14766 7.30078 7.14766C7.32266 7.14766 7.35 7.11484 7.39922 7.02187C7.22969 6.68828 7.66719 6.37109 7.54688 6.37109C7.50313 6.37109 7.37187 6.41484 7.10391 6.52422C7.06016 6.54609 7.03828 6.55156 7.02734 6.55156C6.99453 6.55156 7.12578 6.46406 7.31719 6.37656C7.50859 6.28906 7.74922 6.20156 7.95156 6.20156C8.05 6.20156 8.1375 6.22344 8.20312 6.27813C9.05078 6.07578 8.58594 5.79688 8.62969 5.79688H8.64062C8.88125 5.65469 8.81016 5.11875 9.16563 4.78516ZM5.37578 7.02187C5.36484 7.02187 5.41406 6.95078 5.57812 6.74844C5.91719 6.49688 6.19063 6.32734 5.87891 6.16328C6.01562 6.10312 6.14687 6.03203 6.27266 5.95547C6.26719 6.22344 6.04297 6.87422 5.92266 6.87422C5.89531 6.87422 5.86797 6.83594 5.85703 6.75391C5.92812 6.62813 5.93359 6.57891 5.90625 6.57891C5.8625 6.57891 5.73672 6.68828 5.61641 6.80312C5.49609 6.90703 5.38672 7.02187 5.37578 7.02187ZM5.6875 7.16953C5.53984 7.16953 5.56719 7.07656 6.02109 6.98359C6.21797 6.95625 6.06484 6.96719 6.3 6.9125C6.07031 7.09844 5.81328 7.16953 5.6875 7.16953ZM14.1914 6.61719C14.257 6.60625 14.3062 6.60625 14.3445 6.60625C14.5031 6.60625 14.432 6.67188 14.3391 6.7375C14.2461 6.80312 14.1313 6.86875 14.1969 6.86875C14.2352 6.86875 14.3391 6.84687 14.5523 6.78672C15.6297 6.71016 14.1312 5.79688 14.3719 5.49062L14.3063 5.46875C13.8633 6.03203 14.6016 6.04297 14.1914 6.61719ZM13.743 6.63906C13.8195 6.63906 13.918 6.55156 14.0219 6.30547C14.1641 6.13594 14.1039 6.11406 13.9508 6.03203C13.5297 6.14141 13.568 6.63906 13.743 6.63906ZM17.5164 8.37266C17.5 8.37266 17.4891 8.37813 17.4781 8.38359C17.5219 8.39453 17.5656 8.40547 17.6094 8.40547C17.5656 8.38359 17.5383 8.37266 17.5164 8.37266ZM24.8609 9.73438C24.9539 9.93672 25.0031 10.0188 25.0086 10.0188C25.0469 10.0188 24.3195 8.24687 24.0188 7.92969C22.4492 5.34844 19.868 3.37422 16.9258 2.63594H16.9203C16.8438 2.63594 16.9312 2.67422 17.0352 2.7125C17.1391 2.75078 17.2648 2.78906 17.2648 2.78906C17.2648 2.78906 17.1828 2.76172 16.9312 2.69062C16.6523 2.60859 16.368 2.54844 16.0781 2.52656C16.0289 2.54297 17.2758 3.03516 18.1125 3.29219C17.8336 3.20469 17.5438 3.12812 17.4727 3.12812C17.4234 3.12812 17.4727 3.16094 17.675 3.24844C17.4289 3.17734 17.325 3.14453 17.3141 3.14453C17.2977 3.14453 17.6422 3.25938 17.9648 3.37422C18.293 3.48906 18.6047 3.60391 18.5172 3.60391C18.4953 3.60391 18.4352 3.59297 18.3422 3.57656C18.6211 3.72969 18.7195 3.78984 18.7031 3.78984C18.6758 3.78984 18.3313 3.62578 17.9758 3.46172C17.6258 3.29766 17.2703 3.13359 17.2211 3.13359C17.1938 3.13359 17.2648 3.18828 17.5055 3.33047C17.8336 3.47266 18.1617 3.61484 18.0688 3.61484C18.025 3.61484 17.8992 3.5875 17.6531 3.51641C18.2 3.79531 17.2648 3.68594 17.582 4.06328C17.407 3.89922 17.3359 3.84453 17.3195 3.84453C17.3031 3.84453 17.3469 3.91016 17.3906 3.97578C17.4344 4.04141 17.4672 4.10703 17.4289 4.10703H17.418C17.8008 4.52266 17.15 4.15078 17.6148 4.52266C17.2648 4.36406 16.6688 4.10156 16.9367 4.10156C17.0023 4.10156 17.1281 4.11797 17.325 4.16172C16.9695 3.74609 15.9633 3.72969 15.9414 3.68047C15.6898 3.69688 15.6844 3.88828 15.7281 4.23828C15.7227 4.79063 15.1812 4.80156 15.2523 5.11875C15.2523 5.11328 15.2578 5.11328 15.2578 5.11328C15.2688 5.11328 15.2742 5.22266 15.307 5.3375C15.3453 5.44688 15.4109 5.56172 15.5531 5.56172C15.6297 5.56172 15.7281 5.52891 15.8484 5.44688C16.018 5.75312 16.1711 5.8625 16.2914 5.8625C16.4719 5.8625 16.5812 5.61641 16.5703 5.39219C16.3734 5.28281 16.1164 4.375 16.4008 4.375C16.4445 4.375 16.4992 4.39688 16.5703 4.44609C16.1273 5.53438 18.3203 4.80703 17.0789 5.30469C17.3578 5.67109 16.9039 5.65469 17.0352 6.09766C16.8219 6.15781 16.5867 6.2125 16.3789 6.2125C16.0727 6.2125 15.8375 6.08125 15.8648 5.62188C15.482 5.82422 16.2477 6.50781 15.4875 6.50781H15.4437C15.0773 7.18047 13.7047 6.95078 14.782 7.66172C14.8422 7.97344 14.6453 8.02812 14.3938 8.02812C14.3281 8.02812 14.257 8.02266 14.1859 8.01719C14.1148 8.01172 14.0438 8.01172 13.9781 8.01172C13.6938 8.01172 13.4914 8.08281 13.6664 8.52578C13.5406 8.98516 13.8359 9.1875 14.1969 9.1875C14.6344 9.1875 15.1703 8.90312 15.2086 8.43281C15.4438 8.07734 15.7445 7.92969 16.0562 7.92969C16.5484 7.92969 17.068 8.30156 17.407 8.76094C17.4344 8.80469 17.4562 8.82109 17.4672 8.82109C17.4945 8.82109 17.4672 8.71172 17.4563 8.60234C17.4453 8.51484 17.4453 8.42734 17.4781 8.4C16.9914 8.26328 16.6195 7.67266 16.7836 7.67266C16.8383 7.67266 16.9531 7.73828 17.1391 7.91328H17.1664C17.4727 7.91328 17.7133 8.15391 17.8992 8.39453C18.0906 8.63516 18.2328 8.87578 18.3586 8.87578C18.4078 8.87578 18.457 8.83203 18.5008 8.73359C18.4789 8.70078 18.4242 8.60781 18.3969 8.51484C18.3641 8.4 18.3641 8.28516 18.5117 8.28516C18.5719 8.28516 18.6539 8.30703 18.7688 8.35078C19.1406 8.25234 18.5336 7.28437 19.0258 7.28437C19.075 7.28437 19.1352 7.29531 19.2117 7.31719C19.2062 7.48672 19.2828 7.54688 19.3539 7.54688C19.4961 7.54688 19.6383 7.34453 19.2937 7.28437C19.425 7.15859 19.5016 7.10938 19.5562 7.10938C19.7477 7.10938 19.5945 7.74375 20.2563 7.74375C20.4805 8.27422 18.3094 7.78203 19.0039 8.79922C19.1625 8.91406 19.3594 8.93594 19.5508 8.93594C19.6109 8.93594 19.6656 8.93594 19.7203 8.93047C19.775 8.93047 19.8297 8.925 19.8789 8.925C20.218 8.925 20.4586 9.00703 20.3109 9.70703C20.1305 9.83828 19.9281 9.88203 19.7203 9.88203C19.5344 9.88203 19.3484 9.84922 19.168 9.81641C18.9875 9.78359 18.8125 9.75078 18.6539 9.75078C18.4078 9.75078 18.2109 9.83281 18.0906 10.1172C17.4508 9.85469 16.6086 9.84375 16.6906 9.05078C15.575 9.20938 14.4102 9.12734 13.5898 9.81094C13.5406 10.8117 11.8234 11.1344 12.2391 12.2719C11.7414 13.3219 12.8406 14.793 13.9617 14.793C14 14.793 14.0437 14.793 14.082 14.7875C14.6945 14.782 15.3125 14.5086 15.8539 14.5086C16.1328 14.5086 16.3844 14.5797 16.6031 14.7984C16.6523 14.793 16.6961 14.7875 16.7344 14.7875C17.5711 14.7875 16.4664 16.1164 17.4672 16.3406C18.375 17.2812 16.9094 18.2492 17.6258 19.1516C17.7023 19.857 18.0523 20.4477 18.0523 21.1367C18.1453 21.1477 18.2328 21.1531 18.3258 21.1531C19.4797 21.1531 20.2016 20.1469 20.8797 19.3867C20.6719 18.2492 22.493 18.025 21.8695 16.7508C21.5797 15.3562 23.2422 14.5305 23.1492 13.1359C23.1656 12.9391 23.1109 12.8789 23.0289 12.8789C22.9469 12.8789 22.8266 12.9391 22.7117 12.9938C22.5914 13.0539 22.4602 13.1086 22.3562 13.1086C22.2195 13.1086 22.1156 13.0156 22.1047 12.7094C21.3008 11.9602 20.9344 10.943 20.1852 10.1172C21.1586 10.5875 21.7109 11.6484 22.1594 12.6109C22.1977 12.6219 22.2359 12.6273 22.2797 12.6273C23.0727 12.6273 24.1773 10.7297 22.9742 10.2703C22.9086 10.4508 22.8211 10.5164 22.7172 10.5164C22.5367 10.5164 22.3289 10.2977 22.1812 10.0844C22.0336 9.86562 21.957 9.64687 22.0391 9.64687C22.0938 9.64687 22.2141 9.73438 22.4219 9.96406C22.657 10.1117 22.8867 10.15 23.1273 10.15C23.3625 10.15 23.6031 10.1117 23.8547 10.0898C24.1719 10.2156 24.3086 10.6203 24.407 10.6203C24.4234 10.6203 24.4453 10.6039 24.4617 10.5656C24.7133 11.1672 25.0031 12.2391 25.2656 12.5289C25.1289 11.6102 25.0961 10.6367 24.8609 9.73438ZM21.8094 8.47109C21.1914 8.3125 20.9891 7.54687 20.5023 7.10391C20.4969 6.98359 20.6773 7.00547 20.6336 6.80312C21.2898 7.00547 21.0766 7.20781 21.0164 7.24609C21.257 7.64531 21.9297 7.91875 21.8094 8.47109ZM13.3164 4.30938C12.7203 4.48438 12.6383 4.29297 12.7422 4.65937C12.7859 4.69219 12.868 4.70312 12.95 4.70312C13.2398 4.70859 13.6336 4.53906 13.3164 4.30938ZM22.0719 19.3758C22.8539 18.7141 22.9523 17.9266 22.9906 17.1281C22.6406 17.8117 21.6016 18.5664 22.0719 19.3758ZM18.5117 8.71172C18.5063 8.71719 18.5063 8.71719 18.5063 8.72266C18.5117 8.73359 18.5172 8.73359 18.5172 8.73359C18.5172 8.73359 18.5172 8.72813 18.5117 8.71172ZM14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C21.7328 28 28 21.7328 28 14C28 6.26719 21.7328 0 14 0ZM14 26.9227C6.86328 26.9227 1.07734 21.1367 1.07734 14C1.07734 6.86328 6.86328 1.07734 14 1.07734C21.1367 1.07734 26.9227 6.86328 26.9227 14C26.9227 21.1367 21.1367 26.9227 14 26.9227Z",
    fill: "#3E4958"
  }))), /*#__PURE__*/_react.default.createElement(Input, {
    type: "Text",
    placeholder: "Enter Country",
    className: "input",
    value: info.country,
    onChange: function onChange(r) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        country: r.target.value
      }));
    },
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem",
      margin: "1rem 0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Mobile Number")), /*#__PURE__*/_react.default.createElement(Input, {
    type: "Text",
    placeholder: "Enter Mobile Number"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    value: info.mobile,
    onChange: function onChange(r) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        mobile: r.target.value
      }));
    },
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem",
      margin: "1rem 0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Email")), /*#__PURE__*/_react.default.createElement(Input, {
    value: info.email,
    onChange: function onChange(r) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        email: r.target.value
      }));
    },
    type: "Text",
    placeholder: "Enter Email"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
      borderRadius: "1rem",
      margin: "1rem 0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(H, {
    style: {
      margin: "0 0.5rem 0 1rem",
      color: " #3E4958"
    }
  }, "Password")), /*#__PURE__*/_react.default.createElement(Input, {
    type: "password",
    value: info.password,
    onChange: function onChange(r) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        password: r.target.value
      }));
    },
    placeholder: "Enter Password"
    //value={"21 July 2022. 1200 UTC+1"}
    ,
    className: "input",
    style: _defineProperty({
      height: "3.75rem",
      // border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.75rem",
      margin: "2rem 0 0 0"
    }, "margin", "0 0 0 1rem")
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.Button, {
    style: {
      borderRadius: "2rem",
      width: "9rem",
      margin: "0.5rem 0 0 0",
      border: "2px solid #FFFFFF",
      fontSize: "2rem"
    },
    onClick: function onClick() {
      handleOnNext();
    }
  }, "Next"))))));
};
var _default = Part1;
exports.default = _default;