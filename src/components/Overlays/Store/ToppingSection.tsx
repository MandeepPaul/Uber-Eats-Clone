import { useState } from "react";
import { CondimentsList } from "../../../fireStoreData/StoreList";
import Checkbox from "../../UI/Checkbox";

const ToppingSection: React.FC<{
  title: string;
  limit: number;
  list: CondimentsList[];
}> = ({ title, limit, list }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    const index = checkedItems.indexOf(id);
    if (index === -1) {
      setCheckedItems([...checkedItems, id]);
    } else {
      const updatedItems = [...checkedItems];
      updatedItems.splice(index, 1);
      setCheckedItems(updatedItems);
    }
  };

  return (
    <section className="flex flex-col">
      <div>
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <span className="text-gray-700">{`Choose up to ${limit}`}</span>
      </div>

      <ul className="divide-y-2">
        {list.map(({ id, name, price, extraCalories, special }) => (
          <li key={id} className="flex justify-between py-3 last:mb-4">
            <label htmlFor={id} className="flex flex-col cursor-pointer">
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
              id={id}
              isChecked={checkedItems.includes(id)}
              onCheckboxChange={handleCheckboxChange.bind(this, id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToppingSection;
