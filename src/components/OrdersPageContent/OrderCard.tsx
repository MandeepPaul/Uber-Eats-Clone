import { itemOrdered } from "../../store/Slices/cartSlice";
import { userDetails } from "../../store/Slices/userSlice";
import { orderedItemFormat } from "../../types/outgoingDataType";
import LoadingIndicator from "../UI/Animations/LoadingIndicator";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../UI/Wrappers/Button";
import { useState } from "react";
const OrderCard: React.FC<{ order: itemOrdered; userData: userDetails }> = ({
  order,
  userData,
}) => {
  const {
    restId,
    restImg,
    restName,
    cartItemList,
    totalAmount,
    totalQuantity,
  } = order;
  const [showMore, setShowMore] = useState(false);
  const itemsOrdered = cartItemList as orderedItemFormat[];
  const navigate = useNavigate();
  const navigation = useNavigation();

  const viewStoreHandler = () => {
    navigate(`../stores/${restId}`);
  };

  const toggleHandler = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  return (
    <div className="py-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start lg:justify-between">
      <img
        alt="Restaurant"
        className="h-[150px] w-full object-cover lg:h-[185px] lg:py-0"
        src={restImg}
      />
      <div>
        <span className="py-2 text-2xl font-semibold">{restName}</span>

        <p className="text-sm py-1 text-gray-400">{`${totalQuantity} items for $${totalAmount.toFixed(
          2
        )} - ${userData.orderTime}`}</p>
        <span className="underline underline-offset-2 text-sm">
          View receipt
        </span>
        <ul>
          {(() => {
            const renderedItems = [];
            let visibleItems = itemsOrdered.length;

            if (itemsOrdered.length >= 2 && !showMore) {
              visibleItems = 2;
            }

            for (let index = 0; index < visibleItems; index++) {
              const eachItem = itemsOrdered[index];

              renderedItems.push(
                <li
                  key={index}
                  className="py-2 flex justify-start items-center gap-4 font-light"
                >
                  <span className="border-[1px] px-1.5 text-sm">
                    {eachItem.quantity}
                  </span>
                  <span>{eachItem.itemName}</span>
                </li>
              );
            }

            return renderedItems;
          })()}
        </ul>
        {itemsOrdered.length > 2 && (
          <button
            onClick={toggleHandler}
            className="text-sm underline underline-offset-2"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <Button
        onClick={viewStoreHandler}
        className="bg-black w-full py-4 mt-4 rounded-lg md:text-lg lg:mt-0 lg:text-xl text-white hover:opacity-75"
      >
        View Store
      </Button>

      {navigation.state === "loading" && <LoadingIndicator />}
    </div>
  );
};

export default OrderCard;
