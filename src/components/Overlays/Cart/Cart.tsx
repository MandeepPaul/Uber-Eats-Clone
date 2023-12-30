import { useSelector } from "react-redux";
import { itemOrdered } from "../../../store/Slices/cartSlice";
import { orderedItemFormat } from "../../../types/outgoingDataType";

import { CrossIcon } from "../../../SVG/svgIcon";

import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";

import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const cartItemList: orderedItemFormat[] = useSelector(
    (state: { cart: itemOrdered }) => state.cart.cartItemList
  );

  console.log(cartItemList);
  return (
    <Modal
      reset={onReset}
      modal="top-0 right-0 w-full h-full lg:w-1/2 xl:w-1/3 font-ubermove"
    >
      <div className="relative">
        <Button className="absolute top-4 left-4" onClick={onReset}>
          <CrossIcon />
        </Button>
        {cartItemList.length === 0 ? (
          <EmptyCart onReset={onReset} />
        ) : (
          <FilledCart cartItems={cartItemList} />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
