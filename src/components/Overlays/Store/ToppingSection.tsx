import { useEffect, useState } from "react";

import { CondimentsList } from "../../../types/incomingDataType";
import { findItemIndexById } from "../../../utility/findItemIndexById";

import Checkbox from "../../UI/Checkbox";

const ToppingSection: React.FC<{
  title: string;
  limit: number;
  list: CondimentsList[];
  onSelection: (items: CondimentsList[], addOnPrice: number) => void;
}> = ({ title, limit, list, onSelection }) => {
  const [checkedItems, setCheckedItems] = useState<CondimentsList[]>([]);
  const [addOnPrice, setPrice] = useState(0);

  const handleCheckboxChange = (selectedObj: CondimentsList) => {
    const updatedPrice =
      selectedObj.conPrice !== undefined ? selectedObj.conPrice : 0;

    const index = findItemIndexById(selectedObj.id, checkedItems).index;
    if (index === -1) {
      if (checkedItems.length >= limit) {
        console.log("Limit Exceed!");
        return;
      }
      setCheckedItems((prevItems) => [...prevItems, selectedObj]);
      setPrice((prevPrice) => prevPrice + updatedPrice);
    } else {
      // When unchecked, it removes the object from the list.
      setCheckedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      });

      setPrice((prevPrice) => prevPrice - updatedPrice);
    }
  };

  //Everytime checkedItems change, it notify parent in order to update parent list.
  useEffect(() => {
    onSelection(checkedItems, addOnPrice);
    // eslint-disable-next-line
  }, [checkedItems]);

  return (
    <section className="flex flex-col">
      <div>
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <span className="text-gray-700">{`Choose up to ${limit}`}</span>
      </div>

      <ul className="divide-y-2">
        {list.map(({ id, conName, conPrice, extraCalories, special }) => (
          <li key={id + title} className="flex justify-between py-3 last:mb-4">
            <label
              htmlFor={id + title}
              className="flex flex-col cursor-pointer"
            >
              <span className="md:text-[18px]">{conName}</span>
              {conPrice && (
                <span className="font-thin">{`+$${conPrice.toFixed(2)}`}</span>
              )}
              <div className="flex gap-2">
                {special && (
                  <span className="font-[400] text-green-700">{special}</span>
                )}
                {extraCalories !== undefined ? (
                  <span className="text-stone-600">{`${extraCalories} Cal.`}</span>
                ) : (
                  ""
                )}
              </div>
            </label>
            <Checkbox
              id={id + title}
              isChecked={findItemIndexById(id + title, checkedItems).isPresent}
              onCheckboxChange={() =>
                handleCheckboxChange({
                  id: id + title,
                  conName,
                  conPrice,
                })
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToppingSection;
