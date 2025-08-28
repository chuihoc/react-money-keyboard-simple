// src/Keyboard.tsx
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
var Keyboard = (props) => {
  const [activeKey, setActiveKey] = useState(null);
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
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 grid-rows-4 gap-2 bg-[rgba(0,0,0,0.03)] p-2", children: [1, 2, 3, "\u232B", 4, 5, 6, titleBtnEnter, 7, 8, 9, 0, "."].map(
    (value, index) => {
      return /* @__PURE__ */ jsx(
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
export {
  Keyboard_default as Keyboard
};
//# sourceMappingURL=index.mjs.map