var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Keyboard: () => Keyboard_default
});
module.exports = __toCommonJS(index_exports);

// src/Keyboard.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Keyboard = (props) => {
  const [activeKey, setActiveKey] = (0, import_react.useState)(null);
  const {
    handleSubmit,
    handleNumberClick,
    handleBackspace,
    BackspaceIcon,
    titleBtnEnter = "Done"
  } = props;
  const handleKeyDown = (value) => {
    setActiveKey(value);
  };
  const handleKeyUp = () => {
    setActiveKey(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid grid-cols-4 grid-rows-4 gap-2 bg-[rgba(0,0,0,0.03)] p-2", children: [1, 2, 3, "\u232B", 4, 5, 6, titleBtnEnter, 7, 8, 9, 0, "."].map(
    (value, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => value === titleBtnEnter ? handleSubmit() : value === "\u232B" ? handleBackspace() : handleNumberClick(value.toString()),
          onMouseDown: () => handleKeyDown(value),
          onMouseUp: handleKeyUp,
          onTouchStart: () => handleKeyDown(value),
          onTouchEnd: handleKeyUp,
          className: ` flex justify-center items-center rounded-lg text-[20px] font-semibold transition-all duration-100 md: cursor-pointer ${activeKey === value ? "bg-gray-300 scale-95" : "hover:bg-gray-200"} ${value === titleBtnEnter ? "row-span-3 h-auto bg-[#0abd52] text-white" : "bg-white h-[48px]"} ${value === 0 ? "col-span-2" : ""}`,
          children: value === "\u232B" ? BackspaceIcon != null ? BackspaceIcon : "\u232B" : value
        },
        String(value) + index
      );
    }
  ) });
};
var Keyboard_default = Keyboard;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Keyboard
});
//# sourceMappingURL=index.js.map