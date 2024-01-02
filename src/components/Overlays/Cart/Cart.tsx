import { useSelector } from "react-redux";
import { itemOrdered } from "../../../store/Slices/cartSlice";

import { CrossIcon } from "../../../SVG/svgIcon";

import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";

import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const cart: itemOrdered = useSelector(
    (state: { cart: itemOrdered }) => state.cart
  );

  return (
    <Modal
      reset={onReset}
      modal="top-0 right-0 w-full h-full lg:w-1/2 xl:w-1/3 font-ubermove"
    >
      <div className="relative">
        <Button
          className="absolute top-4 left-4 rounded-full hover:bg-slate-200 p-2"
          onClick={onReset}
        >
          <CrossIcon />
        </Button>
        {cart.cartItemList.length === 0 ? (
          <EmptyCart onReset={onReset} />
        ) : (
          <FilledCart cart={cart} onReset={onReset} />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
