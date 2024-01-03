import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "../../../store/Slices/cartSlice";

import { CrossIcon, ShareArrowIcon, ThumbsUpIcon } from "../../../SVG/svgIcon";
import { fetchCondiments } from "../../../firestoreData/StoreList";
import { MenuItem, Condiments } from "../../../types/incomingDataType";
import { orderedItemFormat, finalOrder } from "../../../types/outgoingDataType";

import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";
import Card from "../../UI/Wrappers/ImageCard";
import SkeletonLoading from "../../UI/Animations/Skeleton/SkeletonLoading";

import AddOns from "./AddOns";
import {
  restDetails,
  NewCondimentsInterface,
} from "../../../types/outgoingDataType";

//For incoming props.
type ItemType = MenuItem & {
  onReset: () => void;
  restDetails: restDetails;
};

const ItemDetails: React.FC<ItemType> = ({
  onReset,
  id,
  name,
  price,
  recommended,
  description,
  imageURL,
  condimentsReference,
  restDetails,
}) => {
  const [condimentList, setCondiments] = useState<Condiments[] | null>(null);
  const dispatch = useDispatch();

  const fetchCondimentsData = async (): Promise<any> => {
    try {
      const condimentsData: Condiments[] = await fetchCondiments(
        condimentsReference
      );
      return condimentsData;
    } catch (error) {
      console.error("Error fetching item addons:", error);
      throw new Error(`Error fetching item addons: ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await fetchCondimentsData();
        setCondiments(list);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const addToCartHandler = (
    condimentsData: NewCondimentsInterface[],
    quantity: number
  ) => {
    const finalItem: orderedItemFormat = {
      itemId: id,
      itemName: name,
      price,
      imageURL,
      condimentsData,
      quantity,
    };

    condimentsData.forEach(({ addOnPrice }) => {
      if (addOnPrice) finalItem.price += addOnPrice;
    });

    const finalOrder: finalOrder = {
      restId: restDetails.restId,
      restName: restDetails.restName,
      restImg: restDetails.restImg,
      deliveryFee: restDetails.deliveryFee,
      deliveryTime: restDetails.deliveryTime,
      orderedItem: finalItem,
    };

    dispatch(cartActions.addToCart(finalOrder));

    // outgoing data.
    // console.log(finalOrder);
  };

  //To see incoming data.
  // console.log(condimentList);

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
            className="h-[250px] lg:h-[450px] transition-transform duration-300 hover:scale-105"
            url={imageURL}
          />
          <div className="px-4 pt-2">
            <div className="flex flex-col text-slate-800">
              <h2 className="text-3xl text-black font-semibold">{name}</h2>
              {/* <span className="text-lg">{`${calories} Cal`}</span> */}
              <span className="text-xl font-semibold text-stone-600">{`$${price}`}</span>
              <p className="text-sm md:text-base">{description}</p>

              {recommended && (
                <div className="flex items-center max-w-[70px] mt-6 p-[0.5] gap-1 text-sm bg-stone-200 rounded-full justify-center">
                  <ThumbsUpIcon height="14px" fill="#000000" />
                  <span>{`${recommended}%`}</span>
                </div>
              )}
            </div>

            <hr className="mt-4 border-gray-300" />

            {condimentList !== null ? (
              <AddOns
                condiments={condimentList}
                onReset={onReset}
                onAddToCart={(items, quantity) =>
                  addToCartHandler(items, quantity)
                }
                initialPrice={price}
              />
            ) : (
              <>
                <SkeletonLoading />
                <SkeletonLoading />
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ItemDetails;
