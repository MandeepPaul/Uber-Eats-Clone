import CartItem from "./CartItem";
import ButtonPair from "../../UI/ButtonPair";
import StoreCartDetails from "./StoreCartDetails";

import { orderedItemFormat } from "../../../types/outgoingDataType";

const FilledCart: React.FC<{ cartItems: orderedItemFormat[] }> = ({
  cartItems,
}) => {
  const checkoutButtonHandler = () => {};

  const addItemButtonhandler = () => {};

  return (
    <>
      <div className="mx-4 h-screen">
        <div className="pt-12 divide-y">
          {/* Renders store details */}
          <StoreCartDetails />

          {/* Renders all the items in the cart */}
          {cartItems.map((item) => (
            <CartItem key={item.itemId} {...item} />
          ))}

          <div className="py-2 text-xl font-semibold flex justify-between">
            <span>Subtotal</span>
            <span>$17.76</span>
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
