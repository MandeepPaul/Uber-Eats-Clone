import CartItemWrapper from "../../UI/Wrappers/CartItemWrapper";
import Button from "../../UI/Button";

const StoreCartDetails = () => {
  return (
    <CartItemWrapper>
      <div className="col-span-2">
        <h2 className="text-3xl font-medium">A&W</h2>
        <span className="font-light text-[14px]">
          Deliver to 1720 Pembina Hwy
        </span>
      </div>

      <Button className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full justify-self-end">
        &#8226; &#8226; &#8226;
      </Button>

      <span className="text-sm col-span-2">4 items</span>
      <p className="justify-self-end">
        <span className="text-gray-400">Subtotal: </span>
        <span className="">$17.76</span>
      </p>
    </CartItemWrapper>
  );
};

export default StoreCartDetails;
