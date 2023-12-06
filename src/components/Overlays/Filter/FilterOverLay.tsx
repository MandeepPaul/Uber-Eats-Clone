import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Filter from "../../Main/HomeContent/Filter/Filter";
import { CrossIcon } from "../../../SVG/svgIcon";

const FilterOverlay: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal modal="top-0 left-0 h-screen w-full overflow-y-auto" reset={onReset}>
      <div className="fixed z-40 p-3 border-b-2 border-gray-300 bg-white w-full">
        <Button onClick={onReset} className="bg-white p-2 rounded-full">
          <CrossIcon />
        </Button>
      </div>

      <div className="p-5 my-5 mb-[100px] h-full">
        <h1 className="text-4xl font-semibold pt-4">Filters</h1>

        <Filter />

        <div className="flex justify-center bg-white">
          <Button
            className="fixed bottom-0 bg-black w-[94%] py-4 my-6 rounded-md text-xl text-white hover:opacity-75"
            onClick={onReset}
          >
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterOverlay;
