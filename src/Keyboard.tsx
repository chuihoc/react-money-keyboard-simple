import { useState } from "react";

type KeyboardProps = {
  handleBackspace: () => void;
  handleNumberClick: (value: string) => void;
  handleSubmit: () => void;
  BackspaceIcon?: React.ReactNode; // 👈 thêm props này
  titleBtnEnter?: string;
};

const Keyboard: React.FC<KeyboardProps> = (props: KeyboardProps) => {
  const [activeKey, setActiveKey] = useState<any>(null);
  const {
    handleSubmit,
    handleNumberClick,
    handleBackspace,
    BackspaceIcon,
    titleBtnEnter = "Done",
  } = props;

  const handleKeyDown = (value: any) => {
    setActiveKey(value);
  };

  const handleKeyUp = () => {
    setActiveKey(null);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 bg-[rgba(0,0,0,0.03)] p-2">
      {[1, 2, 3, "⌫", 4, 5, 6, titleBtnEnter, 7, 8, 9, 0, "."].map(
        (value: any, index: number) => {
          return (
            <button
              key={String(value) + index}
              onClick={() =>
                value === titleBtnEnter
                  ? handleSubmit()
                  : value === "⌫"
                  ? handleBackspace()
                  : handleNumberClick(value.toString())
              }
              onMouseDown={() => handleKeyDown(value)}
              onMouseUp={handleKeyUp}
              onTouchStart={() => handleKeyDown(value)}
              onTouchEnd={handleKeyUp}
              className={` flex justify-center items-center rounded-lg text-[20px] font-semibold transition-all duration-100 md: cursor-pointer ${
                activeKey === value
                  ? "bg-gray-300 scale-95"
                  : "hover:bg-gray-200"
              } ${
                value === titleBtnEnter
                  ? "row-span-3 h-auto bg-[#0abd52] text-white"
                  : "bg-white h-[48px]"
              } ${value === 0 ? "col-span-2" : ""}`}
            >
              {value === "⌫" ? BackspaceIcon ?? "⌫" : value}
            </button>
          );
        }
      )}
    </div>
  );
};

export default Keyboard;
