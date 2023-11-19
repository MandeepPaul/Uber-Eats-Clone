import React from "react";

const ButtonIcon: React.FC<{ svg: React.ReactNode; name: string }> = ({
  svg,
  name,
}) => (
  <button className="bg-gray-200 p-2 rounded-full flex justify-center gap-2">
    {svg}
    <span>{name}</span>
  </button>
);

export default ButtonIcon;
