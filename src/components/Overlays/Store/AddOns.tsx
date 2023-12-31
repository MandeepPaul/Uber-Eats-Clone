import { useEffect, useState } from "react";

import { Condiments } from "../../../types/incomingDataType";
import { NewCondimentsInterface } from "../../../types/outgoingDataType";
import { findItemIndexById } from "../../../utility/findItemIndexById";

import ButtonsManager from "./ButtonsManager";
import ToppingSection from "./ToppingSection";

const AddOns: React.FC<{
  condiments: Condiments[];
  onReset: () => void;
  onAddToCart: (items: NewCondimentsInterface[], quantity: number) => void;
  initialPrice: number;
}> = ({ condiments, onReset, onAddToCart, initialPrice }) => {
  const [finalItem, setFinalItem] = useState<NewCondimentsInterface[]>([]);
  const [quantity, setFinalQuantity] = useState(1);

  const onSelectionHandler = (selectedCondType: NewCondimentsInterface) => {
    const index = findItemIndexById(selectedCondType.id, finalItem).index;

    // Avoids including data for type where condiments are not selected
    if (selectedCondType.list.length === 0) {
      setFinalItem((prevItems) => {
        const updatedItems = [...prevItems].filter(
          (item) => item.id !== selectedCondType.id
        );
        return updatedItems;
      });
    } else {
      setFinalItem((prevItems) => {
        const updatedItems = [...prevItems];
        if (index === -1) {
          updatedItems.push(selectedCondType);
        } else {
          updatedItems[index] = selectedCondType;
        }
        return updatedItems;
      });
    }
  };

  useEffect(() => {
    // console.log(finalItem);
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
          onSelection={(checkedList, addOnPrice) =>
            onSelectionHandler({ id, title, list: checkedList, addOnPrice })
          }
        />
      ))}

      <div>
        <ButtonsManager
          onFirstButtonClick={addItemButtonhandler}
          onSecondButtonClick={seeDetailsButtonhandler}
          quantityHandler={setQuantity}
          price={initialPrice * quantity}
        />
      </div>
    </div>
  );
};

export default AddOns;
