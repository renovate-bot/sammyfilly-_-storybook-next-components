"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectInput = StyledSelectInput => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    placeholder,
    ...props
  } = _ref;
  const {
    setValue,
    value,
    isDisabled
  } = _react.default.useContext(_SelectContext.SelectContext);
  return /*#__PURE__*/_react.default.createElement(StyledSelectInput, _extends({
    ref: ref,
    states: {
      disabled: isDisabled
    },
    disabled: isDisabled,
    "aria-hidden": true,
    editable: false,
    focusable: false,
    importantForAccessibility: "no",
    placeholder: placeholder,
    value: value ? value : '',
    pointerEvents: "none",
    onChangeText: text => setValue(text)
  }, props));
});
exports.SelectInput = SelectInput;
//# sourceMappingURL=SelectInput.js.map