import { useState } from "react";

const Toggle = () => {
  const [toggleState, setToggle] = useState(false);

  const toggleHandler = () => {
    toggleState ? setToggle(false) : setToggle(true);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" onInput={toggleHandler} className="hidden" />
        <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner" />
        <div
          className={`absolute top-[-2px] w-5 h-5 rounded-full shadow-md  ${
            toggleState ? "right-[-1px] bg-black" : "left-[-1px] bg-white"
          } hover:shadow-lg`}
        />
      </div>
    </label>
  );
};

export default Toggle;
