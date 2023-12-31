import { useState, useEffect } from "react";
import { Bin } from "../../SVG/svgIcon";

const CounterButton: React.FC<{
  className?: string;
  onChange: (quantity: number) => void;
  defaultValue: number;
}> = ({ onChange, className, defaultValue }) => {
  const [counter, setCounter] = useState(defaultValue);

  const counterHandler = (identifier: string) => {
    identifier === "minus"
      ? setCounter((prevState) => prevState - 1)
      : setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    onChange(counter);
  });

  return (
    <div
      className={`flex justify-between items-center px-4 text-2xl font-medium bg-gray-200 rounded-full ${className}`}
    >
      <button onClick={() => counterHandler("minus")}>
        {counter <= 1 ? <Bin strokeWidth="1" /> : <span>-</span>}
      </button>
      <span className="text-base pt-1">{counter}</span>
      <button onClick={() => counterHandler("add")}>+</button>
    </div>
  );
};

export default CounterButton;
