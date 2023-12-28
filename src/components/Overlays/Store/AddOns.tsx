import { useEffect, useState } from "react";

import { Condiments } from "../../../firestoreData/StoreList";
import { findItemIndexById } from "../../../utility/findItemIndexById";

import ButtonsManager from "./ButtonsManager";
import ToppingSection from "./ToppingSection";

export type CondimentsWithoutLimit = Omit<Condiments, "limit">;

const AddOns: React.FC<{
  condiments: Condiments[];
  onReset: () => void;
  onAddToCart: (items: CondimentsWithoutLimit[], quantity: number) => void;
}> = ({ condiments, onReset, onAddToCart }) => {
  const [finalItem, setFinalItem] = useState<CondimentsWithoutLimit[]>([]);
  const [quantity, setFinalQuantity] = useState(1);

  const onSelectionHandler = (selectedCondType: CondimentsWithoutLimit) => {
    //Avoids including data for type where condiments are not selected
    if (selectedCondType.list.length <= 0) {
      return;
    }

    const index = findItemIndexById(selectedCondType.id, finalItem).index;

    //Fills the array with objects of type Condiment or replace the nested list of condiments if modified.
    if (index === -1) {
      setFinalItem((prevItems) => [...prevItems, selectedCondType]);
    } else {
      setFinalItem((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index].list = selectedCondType.list;
        return updatedItems;
      });
    }
  };

  useEffect(() => {
    console.log(finalItem);
  }, [finalItem]);

  const addItemButtonhandler = () => {
    onAddToCart(finalItem, quantity);
    onReset();
  };

  const setQuantity = (value: number) => {
    setFinalQuantity(value);
  };

  const seeDetailsButtonhandler = () => {
    console.log("Here we can add logic to show details!");
  };
  return (
    <div className="divide-y-2 lg:divide-y-[3px] mb-16">
      {condiments.map(({ id, title, limit, list }) => (
        <ToppingSection
          key={id}
          title={title}
          limit={limit}
          list={list}
          onSelection={(list) => onSelectionHandler({ id, title, list })}
        />
      ))}

      <div>
        <ButtonsManager
          onFirstButtonClick={addItemButtonhandler}
          onSecondButtonClick={seeDetailsButtonhandler}
          quantityHandler={setQuantity}
        />
      </div>
    </div>
  );
};

export default AddOns;
