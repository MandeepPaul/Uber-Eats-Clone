import { useEffect, useState } from "react";

import { CondimentsList } from "../../../firestoreData/StoreList";
import { findItemIndexById } from "../../../utility/findItemIndexById";

import Checkbox from "../../UI/Checkbox";

const ToppingSection: React.FC<{
  title: string;
  limit: number;
  list: CondimentsList[];
  onSelection: (items: CondimentsList[]) => void;
}> = ({ title, limit, list, onSelection }) => {
  const [checkedItems, setCheckedItems] = useState<CondimentsList[]>([]);

  const handleCheckboxChange = (selectedObj: CondimentsList) => {
    if (!selectedObj.price) selectedObj.price = 0; //Making sure price is not undefined!

    const index = findItemIndexById(selectedObj.id, checkedItems).index;
    if (index === -1) {
      if (checkedItems.length >= limit) {
        console.log("Limit Exceed!");
        return;
      }
      setCheckedItems((prevItems) => [...prevItems, selectedObj]);
    } else {
      //When unchecked, it removes the object from list.
      setCheckedItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      });
    }
  };

  //Everytime checkedItems change, it notify parent in order to update parent list.
  useEffect(() => {
    onSelection(checkedItems);
    // eslint-disable-next-line
  }, [checkedItems]);

  return (
    <section className="flex flex-col">
      <div>
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <span className="text-gray-700">{`Choose up to ${limit}`}</span>
      </div>

      <ul className="divide-y-2">
        {list.map(({ id, name, price, extraCalories, special }) => (
          <li key={id + title} className="flex justify-between py-3 last:mb-4">
            <label
              htmlFor={id + title}
              className="flex flex-col cursor-pointer"
            >
              <span className="md:text-[18px]">{name}</span>
              {price && (
                <span className="font-thin">{`+$${price.toFixed(2)}`}</span>
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
                  name,
                  price,
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
