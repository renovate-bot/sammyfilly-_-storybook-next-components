"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuBackdrop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuContext = require("../MenuContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MenuBackdrop = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    StyledBackdrop,
    ...props
  } = _ref;
  const {
    onClose
  } = (0, _react.useContext)(_MenuContext.MenuContext);
  return /*#__PURE__*/_react.default.createElement(StyledBackdrop, _extends({}, props, {
    ref: ref,
    onPress: onClose,
    style: {
      backgroundColor: 'red'
    }
  }), children);
});
exports.MenuBackdrop = MenuBackdrop;
MenuBackdrop.displayName = 'MenuBackdrop';
var _default = MenuBackdrop;
exports.default = _default;
//# sourceMappingURL=Backdrop.js.map