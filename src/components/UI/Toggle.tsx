import React, { useState } from "react";

const Toggle = () => {
  const [toggleState, setToggle] = useState(false);
  const toggleHandler = () => {
    toggleState ? setToggle(false) : setToggle(true);
  };

  return (
    <button className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" onInput={toggleHandler} className="hidden" />
        <div className="toggle__line w-10 h-4 bg-gray-200 rounded-full shadow-inner" />
        <div
          className={`toggle__dot absolute top-[-2px] w-5 h-5 rounded-full shadow  ${
            toggleState ? "right-[-1px] bg-black" : "left-[-1px] bg-white"
          }`}
        />
      </div>
    </button>
  );
};

export default Toggle;
