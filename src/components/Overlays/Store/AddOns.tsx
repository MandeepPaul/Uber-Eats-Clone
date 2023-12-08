import ButtonsManager from "./ButtonsManager";
import ToppingSection from "./ToppingSection";
import {
  DUMMY_ADDONS,
  DUMMY_REMOVES,
  DUMMY_SUBSTITUTE,
} from "../../../tempData/Toppings";

const AddOns = () => {
  return (
    <div className="divide-y-2 lg:divide-y-4 mb-16">
      <ToppingSection title="Add Toppings" limit={6} list={DUMMY_ADDONS} />
      <ToppingSection title="Remove Toppings" limit={8} list={DUMMY_REMOVES} />
      <ToppingSection
        title="Substitute Bun"
        limit={1}
        list={DUMMY_SUBSTITUTE}
      />
      <div>
        <ButtonsManager />
      </div>
    </div>
  );
};

export default AddOns;
