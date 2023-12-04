import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import { CrossIcon } from "../../../SVG/svgIcon";
import Card from "../../UI/Card";
import { MenuItem } from "../../../tempData/MenuList";

type ItemType = Omit<MenuItem, "id"> & {
  onReset: () => void;
};

const ItemDetails: React.FC<ItemType> = ({
  onReset,
  name,
  price,
  calories,
  recommended,
  description,
}) => {
  return (
    <Modal
      modal="top-1/2 transform translate-y-[-50%] h-[50%] w-[80%] mx-auto inset-x-0  font-ubermove"
      reset={onReset}
    >
      <div className="bg-yelow-500 h-full px-4 pt-16">
        <Button onClick={onReset}>
          <CrossIcon className="absolute top-4 left-4" />
        </Button>

        <div className="grid grid-cols-2 bg-violt-500">
          <Card
            className="h-[450px]"
            url="https://tb-static.uber.com/prod/image-proc/processed_images/518b43dfb7300d8ebf9c87be2d6b59db/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          />
          <div className="px-4 pt-2">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <span className="text-slate-800 text-lg">{`${calories} Cal`}</span>
              <span className="text-slate-800 text-lg">{`$${price}`}</span>
              <p className="text-slate-800">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ItemDetails;
