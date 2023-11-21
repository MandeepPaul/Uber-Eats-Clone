import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import { crossIcon } from "../../../SVG/svgIcon";

const Cart: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="top-0 right-0 w-full h-full lg:w-1/2 xl:w-1/3 font-ubermove"
    >
      <div className="relative">
        <Button className="absolute top-4 left-4" onClick={onReset}>
          {crossIcon}
        </Button>
        <div className="grid h-screen place-content-center lg:max-w-[430px] lg:mx-[auto]">
          <div className="flex flex-col gap-2 p-4 mb-20 items-center text-center">
            <img
              className="h-[200px] w-[200px]"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg"
              alt="Shopping cart"
            />
            <h2 className="text-2xl font-semibold">
              Add items to start a cart
            </h2>
            <p className="font-light text-lg">
              Once you add items from a restaurant or store, your cart will
              appear here.
            </p>
            <Button
              className="py-2 px-3 mt-4 bg-black text-white rounded-full"
              onClick={onReset}
            >
              Start shopping
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
