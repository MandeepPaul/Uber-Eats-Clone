import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Filter from "../../Main/Filter/Filter";
import { crossIcon } from "../../../SVG/svgIcon";

const FilterOverlay: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal modal="top-0 left-0 p-5 w-full" reset={onReset}>
      <div className="relative h-screen">
        <Button onClick={onReset}>{crossIcon}</Button>
        <h1 className="text-3xl font-bold pt-4">Filters</h1>
        <Filter />
        <Button
          className="bg-black w-full absolute bottom-8 py-5 rounded-md text-xl text-white hover:opacity-75"
          onClick={onReset}
        >
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default FilterOverlay;
