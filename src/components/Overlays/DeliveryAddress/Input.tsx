import React, { useEffect, useState, useCallback } from "react";
import { useAppSelector } from "../../../types/hooks";
const Input = React.forwardRef<
  HTMLInputElement,
  {
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
    placeholder: string;
    setParentValue: (value: string) => void;
  }
>(({ svg: SVGComponent, className = "", placeholder, setParentValue }, ref) => {
  const address = useAppSelector((state) => state.userSlice.userAddress);

  const [value, setValue] = useState(address);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    []
  );

  useEffect(() => {
    setParentValue(value);
  }, [setParentValue, value]);

  return (
    <div className="relative">
      <SVGComponent
        className={`absolute left-3 top-3 ${className}`}
        width="20"
        height="20"
      />
      <input
        ref={ref}
        className={`bg-zinc-100 font col-span-2 h-12 w-full focus:border-b-2 focus:border-green-500 outline-none pl-10 ${className}`}
        type="text"
        id="name"
        name="name"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
    </div>
  );
});

export default Input;
