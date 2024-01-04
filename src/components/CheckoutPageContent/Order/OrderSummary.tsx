import Button from "../../UI/Wrappers/Button";
import ItemSection from "./ItemSection";
import RestDetails from "./RestDetails";
import { itemOrdered } from "../../../store/Slices/cartSlice";
import { useNavigate, useNavigation } from "react-router-dom";
import LoadingIndicator from "../../UI/Animations/LoadingIndicator";

const OrderSummary: React.FC<{ cart: itemOrdered; className: string }> = ({
  cart,
  className,
}) => {
  const { restId, cartItemList, totalAmount, deliveryFee, ...rest } = cart;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const tax = totalAmount * 0.13;
  let dFee = deliveryFee;

  if (cart.orderType === "PICKUP") {
    dFee = 0;
  }

  const addMoreItems = () => {
    const route = `../stores/${restId}`;
    navigate(route);
  };

  return (
    <section className={`px-4 py-2 bg-white ${className}`}>
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl lg:text-3xl font-semibold pb-3">
          Order summary
        </h2>
        <Button
          onClick={addMoreItems}
          className="bg-gray-200 px-3 py-0.5 text-[15px] rounded-full hover:bg-gray-300"
        >
          <span className="font-bold text-lg">+</span> Add items
        </Button>
      </div>

      <RestDetails {...rest} />

      <div className="divide-y-2">
        {cartItemList.length > 0
          ? cartItemList.map((eachItem) => (
              <ItemSection key={eachItem.itemId} {...eachItem} />
            ))
          : ""}
      </div>

      <div className="flex flex-col gap-1 border-t-[0.5px] pt-2">
        <div className="flex justify-between items-center font-light ">
          <span>Subtotal</span>
          <span>{`$${totalAmount?.toFixed(2)}`}</span>
        </div>
        {dFee !== 0 && (
          <div className="flex justify-between items-center font-light ">
            <span>Delivery Fee</span>
            <span>{`$${deliveryFee?.toFixed(2)}`}</span>
          </div>
        )}
        <div className="flex justify-between items-center font-light ">
          <span>Tax and Service Fee</span>
          <span>{`$${tax?.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>{`$${(totalAmount + dFee + tax)?.toFixed(2)}`}</span>
        </div>
      </div>
      {navigation.state === "loading" && <LoadingIndicator />}
    </section>
  );
};

export default OrderSummary;
