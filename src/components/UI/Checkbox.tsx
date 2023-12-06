import React, { useState } from "react";
import { TickIcon } from "../../SVG/svgIcon";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label htmlFor="myCheckbox" className="cursor-pointer relative self-center">
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        checked={isChecked}
        onChange={handleCheckboxClick}
        className="appearance-none h-6 w-6 border-[3px] border-gray-600 checked:border-black checked:bg-black"
      />
      {isChecked && <TickIcon className={`absolute top-0.5 left-0.5`} />}
    </label>
  );
};

export default Checkbox;
