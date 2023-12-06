import React, { useState } from "react";
import Button from "./Button";
import { ArrowDownSVG } from "../../SVG/svgIcon";

const DropDownMenu: React.FC<{ options: number[] }> = ({ options }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [listOpen, setToggle] = useState(false);

  const handleQuantityChange = (quantity: number) => {
    setSelectedQuantity(quantity);
    setToggle(false);
  };

  const listToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={listToggle}
        className="flex items-center space-x-4 bg-gray-200 rounded-full px-5 py-2 mt-4 hover:bg-gray-300"
      >
        <span>{selectedQuantity}</span>
        <ArrowDownSVG />
      </Button>
      {listOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="quantity-options"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <Button
                key={option}
                className="block w-full text-left px-4 py-1 hover:bg-gray-100 focus:bg-gray-100"
                onClick={() => handleQuantityChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
