import ButtonsManager from "./ButtonsManager";
import ToppingSection from "./ToppingSection";

import { Condiments } from "../../../firestoreData/StoreList";
import { findItemIndexById } from "../../../utility/findItemIndexById";
import { useEffect, useState } from "react";

export type CondimentsWithoutLimit = Omit<Condiments, "limit">;

const AddOns: React.FC<{ condiments: Condiments[]; onReset: () => void }> = ({
  condiments,
  onReset,
}) => {
  const [finalItem, setFinalItem] = useState<CondimentsWithoutLimit[]>([]);

  const onSelectionHandler = (selectedI: CondimentsWithoutLimit) => {
    if (selectedI.list.length <= 0) {
      return;
    }

    const index = findItemIndexById(selectedI.id, finalItem).index;
    if (index === -1) {
      setFinalItem((prevItems) => [...prevItems, selectedI]);
    } else {
      setFinalItem((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index].list = selectedI.list;
        return updatedItems;
      });
    }
  };

  useEffect(() => {
    console.log(finalItem);
  }, [finalItem]);

  const addItemButtonhandler = () => {
    //State change
    onReset();
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
        />
      </div>
    </div>
  );
};

export default AddOns;
