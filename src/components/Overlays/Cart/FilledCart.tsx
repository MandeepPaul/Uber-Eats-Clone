import CartItem from "./CartItem";
import ButtonPair from "../../UI/ButtonPair";
import StoreCartDetails from "./StoreCartDetails";

import { itemOrdered } from "../../../store/Slices/cartSlice";

const FilledCart: React.FC<itemOrdered> = ({
  restName,
  totalAmount,
  totalQuantity,
  cartItemList,
}) => {
  const checkoutButtonHandler = () => {};

  const addItemButtonhandler = () => {};

  return (
    <>
      <div className="mx-4 h-screen">
        <div className="pt-12 divide-y">
          {/* Renders store details */}
          <StoreCartDetails
            restName={restName}
            subTotal={totalAmount}
            totalQuantity={totalQuantity}
          />

          {/* Renders all the items in the cart */}
          {cartItemList.map((item) => (
            <CartItem key={item.itemId} {...item} />
          ))}

          <div className="py-2 text-xl font-semibold flex justify-between">
            <span>Subtotal</span>
            <span>{`$${totalAmount.toFixed(2)}`}</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full lg:w-[50%] xl:w-[33%] px-4 border-t-2 ">
        <ButtonPair
          onFirstButtonClick={checkoutButtonHandler}
          onSecondButtonClick={addItemButtonhandler}
          text1="Go to checkout"
          text2="Add items"
        />
      </div>
    </>
  );
};
export default FilledCart;
