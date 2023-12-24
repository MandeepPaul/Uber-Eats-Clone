import React from "react";
import { TickIcon } from "../../SVG/svgIcon";

const Checkbox: React.FC<{
  id: string;
  isChecked: boolean;
  onCheckboxChange: () => void;
}> = ({ id, isChecked, onCheckboxChange }) => {
  const handleCheckboxClick = () => {
    onCheckboxChange();
    console.log("change");
  };

  return (
    <label htmlFor={id} className="cursor-pointer relative self-center">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={isChecked}
        onChange={handleCheckboxClick}
        className="appearance-none h-4 w-4 md:h-6 md:w-6 border-[3px] border-gray-600 checked:border-black checked:bg-black"
      />
      {isChecked && <TickIcon className={`absolute top-0.5 left-0.5`} />}
    </label>
  );
};

export default Checkbox;
