import ButtonsManager from "./ButtonsManager";
import ToppingSection from "./ToppingSection";

import { Condiments } from "../../../fireStoreData/StoreList";

const AddOns: React.FC<{ condiments: Condiments[] }> = ({ condiments }) => {
  return (
    <div className="divide-y-2 lg:divide-y-[3px] mb-16">
      {condiments.map((eachCondiment) => (
        <ToppingSection
          key={eachCondiment.id}
          title={eachCondiment.title}
          limit={eachCondiment.limit}
          list={eachCondiment.list}
        />
      ))}

      <div>
        <ButtonsManager />
      </div>
    </div>
  );
};

export default AddOns;
