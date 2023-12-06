import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import { CrossIcon, ShareArrowIcon, ThumbsUpIcon } from "../../../SVG/svgIcon";
import Card from "../../UI/Card";
import { MenuItem } from "../../../tempData/MenuList";
import AddOns from "./AddOns";

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
      modal="top-1/2 transform translate-y-[-50%] h-full w-[80%] mx-auto inset-x-0 font-ubermove overflow-y-scroll"
      reset={onReset}
    >
      <div className="h-auto px-4 pt-16">
        <Button
          onClick={onReset}
          className="absolute top-2 left-2 h-10 w-10 grid place-content-center rounded-full  hover:bg-gray-200"
        >
          <CrossIcon className="p-0" />
        </Button>
        <Button className="absolute top-2 right-2 h-10 w-10 grid place-content-center rounded-full hover:bg-gray-200">
          <ShareArrowIcon />
        </Button>
        <div className="grid grid-cols-2">
          <Card
            className="h-[450px] transition-transform duration-300 transform-gpu hover:scale-105"
            url="https://tb-static.uber.com/prod/image-proc/processed_images/518b43dfb7300d8ebf9c87be2d6b59db/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          />
          <div className="px-4 pt-2">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <span className="text-slate-800 text-lg">{`${calories} Cal`}</span>
              <span className="text-slate-800 text-lg">{`$${price}`}</span>
              <p className="text-slate-800">{description}</p>

              <div className="flex items-center max-w-[70px] mt-6 gap-1 lg:bg-stone-200 lg:rounded-full lg:justify-center">
                <ThumbsUpIcon height="14px" fill="#000000" />
                <span>{`${recommended}%`}</span>
              </div>
            </div>

            <hr className="mt-4 border-gray-300" />

            <AddOns />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ItemDetails;
