import { useState } from "react";
import { Bin } from "../../SVG/svgIcon";

const CounterButton: React.FC<{ onDelete: () => void }> = ({ onDelete }) => {
  const [counter, setCounter] = useState(1);

  const counterHandler = (identifier: string) => {
    if (counter === 1 && identifier === "minus") {
      onDelete();
      return;
    }
    identifier === "minus"
      ? setCounter((prevState) => prevState - 1)
      : setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="flex justify-between items-center px-4 text-3xl font-medium bg-gray-200 rounded-full">
      <button onClick={(event) => counterHandler("minus")}>
        {counter <= 1 ? <Bin strokeWidth="1" /> : <span>-</span>}
      </button>
      <span className="text-base pt-1">{counter}</span>
      <button onClick={(event) => counterHandler("add")}>+</button>
    </div>
  );
};

export default CounterButton;