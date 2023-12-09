import React from "react";
import Button from "../../../../UI/Wrappers/Button";

const ButtonIcon: React.FC<{ svg: React.ReactNode; name: string }> = ({
  svg,
  name,
}) => (
  <Button className="bg-gray-200 p-2 rounded-full flex justify-center gap-2">
    {svg}
    <span>{name}</span>
  </Button>
);

export default ButtonIcon;
