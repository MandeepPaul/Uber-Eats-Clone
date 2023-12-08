import Button from "../../UI/Button";
import { ArrowDownSVG } from "../../../SVG/svgIcon";
import CartItem from "./CartItem";
import ButtonPair from "../../UI/ButtonPair";
import StoreCartDetails from "./StoreCartDetails";

const FilledCart = () => {
  return (
    <>
      <div className="mx-4 h-screen">
        <Button className="flex items-center gap-2 absolute top-4 right-4">
          <span className="text-sm font-[500]">Carts (2) </span>
          <ArrowDownSVG />
        </Button>

        <div className="pt-12 divide-y">
          {/* Renders store details */}
          <StoreCartDetails />

          {/* Renders all the items in the cart */}
          <CartItem />

          <div className="py-2 text-xl font-semibold flex justify-between">
            <span>Subtotal</span>
            <span>$17.76</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full px-4 bg-white border-t-2 ">
        <ButtonPair text1="Go to checkout" text2="Add items" />
      </div>
    </>
  );
};
export default FilledCart;
