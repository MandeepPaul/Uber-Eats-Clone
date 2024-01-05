import { itemOrdered } from "../../store/Slices/cartSlice";
import { orderedItemFormat } from "../../types/outgoingDataType";
import LoadingIndicator from "../UI/Animations/LoadingIndicator";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../UI/Wrappers/Button";
const OrderCard: React.FC<itemOrdered> = ({
  restId,
  restImg,
  restName,
  cartItemList,
  totalAmount,
  totalQuantity,
}) => {
  const itemsOrdered = cartItemList as orderedItemFormat[];
  const navigate = useNavigate();
  const navigation = useNavigation();

  const viewStoreHandler = () => {
    navigate(`../orders/${restId}`);
  };

  return (
    <div className="py-2 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start lg:justify-between lg:py-4">
      <img
        alt="Restaurant"
        className="py-2 h-[150px] w-full object-cover lg:py-0"
        src={restImg}
      />
      <div>
        <span className="py-2 text-2xl font-semibold">{restName}</span>

        <p className="text-sm py-1 text-gray-400">{`${totalQuantity} items for $${totalAmount.toFixed(
          2
        )} - Mar 16 at 1:05 a.m`}</p>
        <span className="underline underline-offset-2 text-sm">
          View receipt
        </span>
        <ul>
          {itemsOrdered?.map((eachItem, index) => (
            <li
              key={index}
              className="py-2 flex justify-start items-center gap-4 font-light"
            >
              <span className="border-[1px] px-1.5 text-sm">
                {eachItem.quantity}
              </span>
              <span>{eachItem.itemName}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={viewStoreHandler}
        className="bg-black w-full py-4 rounded-lg md:text-lg lg:text-xl text-white hover:opacity-75"
      >
        View Store
      </Button>

      {navigation.state === "loading" && <LoadingIndicator />}
    </div>
  );
};

export default OrderCard;
