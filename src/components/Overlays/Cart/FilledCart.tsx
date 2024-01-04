import { useNavigate, useNavigation } from "react-router-dom";
import CartItem from "./CartItem";
import ButtonPair from "../../UI/ButtonPair";
import StoreCartDetails from "./StoreCartDetails";

import { itemOrdered } from "../../../store/Slices/cartSlice";
import LoadingIndicator from "../../UI/Animations/LoadingIndicator";

const FilledCart: React.FC<{ cart: itemOrdered; onReset: () => void }> = ({
  cart,
  onReset,
}) => {
  const { restName, totalAmount, totalQuantity, cartItemList } = cart;
  const navigation = useNavigation();
  const navigate = useNavigate();

  const checkoutButtonHandler = () => {
    navigate("/checkout");
    onReset();
  };

  const addItemButtonhandler = () => {
    onReset();
    navigate(`../stores/${cart.restId}`);
  };

  return (
    <>
      <div className="mx-4 mb-[500px] h-screen">
        <div className="divide-y">
          {/* Renders store details */}
          <StoreCartDetails
            restName={restName}
            subTotal={totalAmount}
            totalQuantity={totalQuantity}
          />

          {/* Renders all the items in the cart */}
          {cartItemList?.map((item) => (
            <CartItem key={item.itemId} {...item} />
          ))}

          <div className="pt-2 text-xl font-semibold flex justify-between">
            <span>Subtotal</span>
            <span>{`$${totalAmount.toFixed(2)}`}</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full lg:w-[50%] xl:w-[33%] px-4 border-t-2">
        <ButtonPair
          onFirstButtonClick={checkoutButtonHandler}
          onSecondButtonClick={addItemButtonhandler}
          text1="Go to checkout"
          text2="Add items"
        />
      </div>
      {navigation.state === "loading" && <LoadingIndicator />}
    </>
  );
};
export default FilledCart;
