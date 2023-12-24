import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";
import { CrossIcon, ShareArrowIcon, ThumbsUpIcon } from "../../../SVG/svgIcon";
import Card from "../../UI/Wrappers/ImageCard";
import { MenuItem } from "../../../fireStoreData/StoreList";
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
  imageURL,
  condiments,
}) => {
  return (
    <Modal
      modal="top-1/2 transform translate-y-[-50%] h-full w-full lg:w-[80%] mx-auto inset-x-0 font-ubermove overflow-y-scroll"
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
        <div className="md:grid md:grid-cols-2">
          <Card
            className="h-[250px] lg:h-[450px] transition-transform duration-300 transform-gpu hover:scale-105"
            url={imageURL}
          />
          <div className="px-4 pt-2">
            <div className="flex flex-col text-slate-800">
              <h2 className="text-3xl text-black font-semibold">{name}</h2>
              <span className="text-lg">{`${calories} Cal`}</span>
              <span className="text-lg font-semibold text-stone-600">{`$${price}`}</span>
              <p className="text-sm md:text-base">{description}</p>

              <div className="flex items-center max-w-[70px] mt-6 p-[0.5] gap-1 text-sm bg-stone-200 rounded-full justify-center">
                <ThumbsUpIcon height="14px" fill="#000000" />
                <span>{`${recommended}%`}</span>
              </div>
            </div>

            <hr className="mt-4 border-gray-300" />

            <AddOns condiments={condiments} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ItemDetails;
