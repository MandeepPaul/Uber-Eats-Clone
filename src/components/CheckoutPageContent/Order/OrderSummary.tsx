import Button from "../../UI/Wrappers/Button";
import ItemSection from "./ItemSection";
import RestDetails from "./RestDetails";
import { itemOrdered } from "../../../store/Slices/cartSlice";

const OrderSummary: React.FC<itemOrdered> = ({
  cartItemList,
  totalAmount,
  deliveryFee,
  ...rest
}) => {
  // console.log(rest);
  return (
    <section className="px-4 py-2 bg-white">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl lg:text-3xl font-semibold pb-3">
          Order summary
        </h2>
        <Button className="bg-gray-200 px-3 py-0.5 text-[15px] rounded-full">
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

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center font-light ">
          <span>Subtotal</span>
          <span>{`$${totalAmount?.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center font-light ">
          <span>Delivery Fee</span>
          <span>{`$${deliveryFee?.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>{`$${(totalAmount + deliveryFee)?.toFixed(2)}`}</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
