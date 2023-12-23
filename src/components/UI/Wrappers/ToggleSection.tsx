import React, { useState } from "react";
import Button from "./Button";
import { ArrowDownSVG } from "../../../SVG/svgIcon";

const SectionCollapse: React.FC<{
  children: React.ReactNode;
  title: string;
}> = (props) => {
  const [isVisible, setVisible] = useState(true);

  const visibilityHandler = () => {
    isVisible ? setVisible(false) : setVisible(true);
  };

  return (
    <>
      <div className={`${isVisible ? "py-4" : "pt-4"}`}>
        <Button
          onClick={visibilityHandler}
          className="flex items-center w-full justify-between font-medium pt-1 pb-4"
        >
          <span>{props.title}</span>

          <ArrowDownSVG
            className={`w-5 h-5 ${isVisible ? "" : "rotate-180"}`}
          />
        </Button>
        <div
          className={`flex flex-col gap-4 text-base ${
            isVisible ? "" : "hidden"
          }`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default SectionCollapse;
