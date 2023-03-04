"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnClickOutside = void 0;
var _react = require("react");
var useOnClickOutside = function useOnClickOutside(ref, handler) {
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
exports.useOnClickOutside = useOnClickOutside;