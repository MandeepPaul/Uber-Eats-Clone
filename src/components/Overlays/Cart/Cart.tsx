import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import { CrossIcon } from "../../../SVG/svgIcon";
// import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="top-0 right-0 w-full h-full lg:w-1/2 xl:w-1/3 font-ubermove"
    >
      <div className="relative">
        <Button className="absolute top-4 left-4" onClick={onReset}>
          <CrossIcon />
        </Button>
        {/* <EmptyCart onReset={onReset} /> */}
        <FilledCart />
      </div>
    </Modal>
  );
};

export default Cart;
