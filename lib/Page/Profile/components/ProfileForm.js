"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _react = require("react");
var _reactRedux = require("react-redux");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 4rem 2rem 2rem 2rem;\n\n  @media only screen and (max-width: 768px) {\n    margin: 2rem;\n  }\n"])));
var Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 25rem;\n  padding: 0 0 0 1rem;\n\n  @media only screen and (max-width: 768px) {\n    width: 80%;\n  }\n"])));
var Second = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  @media only screen and (max-width: 920px) {\n    margin: 2rem 0 0 0;\n  }\n"])));
var T = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  // text-align: center;\n  //width: 20rem;\n\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"])));
var Flex = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 90%;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2.5rem 0;\n\n  @media only screen and (max-width: 1250px) {\n    width: 100%;\n  }\n\n  @media only screen and (max-width: 920px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    //background: red;\n  }\n"])));
var ProfileForm = function ProfileForm() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    saveButtonShow = _useState2[0],
    setSaveButtonShow = _useState2[1];
  var Button = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: none;\n    border-radius: 2rem;\n    padding: 0 1.5rem;\n    color: #FFF;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    cursor: pointer;\n    display: grid;\n    place-items: center;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"])), saveButtonShow ? 'rgba(2, 169, 92, 1)' : 'grey');
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  });
  var _useState3 = (0, _react.useState)({
      name: "",
      email: "",
      mobile_number: "",
      date_of_birth: "",
      country: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  (0, _react.useEffect)(function () {
    if (user) {
      setData(_objectSpread({}, user));
      console.log("mobile,", user.mobile_number);
    }
  }, [user]);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "0 0 0 0",
      fontSize: "1.5rem",
      color: "#000"
    }
  }, "Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "John Michael",
    className: "input1",
    value: data.name,
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        name: e.target.value
      }));
      setSaveButtonShow(true);
    },
    style: {
      height: "4rem",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.5rem",
      width: "80%",
      margin: "0.5rem 0 0 0",
      padding: "0 0 0 1rem"
    }
  })), /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "0 0 0 0",
      fontSize: "1.5rem",
      color: "#000"
    }
  }, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    type: "e-mail",
    placeholder: "xyz@gmail.com",
    className: "input1",
    value: data.email,
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        email: e.target.value
      }));
      setSaveButtonShow(true);
    },
    style: {
      height: "4rem",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.5rem",
      margin: "0.5rem 0 0 0"
    }
  })), /*#__PURE__*/React.createElement(Second, null, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "0 0 0 0",
      fontSize: "1.5rem",
      color: "#000"
    }
  }, "Date Of Birth"), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    placeholder: "01/12/23",
    className: "input1",
    value: (0, _moment.default)(data.date_of_birth).format("DD-MMM-YYYY"),
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        date_of_birth: e.target.value
      }));
      setSaveButtonShow(true);
    },
    style: {
      height: "4rem",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.5rem",
      margin: "0.5rem 0 0 0"
    }
  }))), /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "0 0 0 0",
      fontSize: "1.5rem",
      color: "#000"
    }
  }, "Phone Number"), /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    placeholder: "9001-111",
    className: "input1",
    value: data.mobile_number,
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        mobile_number: e.target.value
      }));
      setSaveButtonShow(true);
    },
    style: {
      height: "4rem",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.5rem",
      margin: "0.5rem 0 0 0"
    }
  })), /*#__PURE__*/React.createElement(Second, null, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "0 0 0 0",
      fontSize: "1.5rem",
      color: "#000"
    }
  }, "Country"), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    placeholder: "USA",
    className: "input1",
    value: data.country,
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        country: e.target.value
      }));
      setSaveButtonShow(true);
    },
    style: {
      height: "4rem",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0.5rem",
      margin: "0.5rem 0 0 0"
    }
  }))), /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "48%"
    },
    disabled: true
  }, "Save")));
};
var _default = ProfileForm;
exports.default = _default;