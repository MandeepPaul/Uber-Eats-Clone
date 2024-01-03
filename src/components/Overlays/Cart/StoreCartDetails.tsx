import CartItemWrapper from "../../UI/Wrappers/CartItemWrapper";
import Button from "../../UI/Wrappers/Button";

const StoreCartDetails: React.FC<{
  restName: string;
  subTotal: number;
  totalQuantity: number;
}> = ({ restName, subTotal, totalQuantity }) => {
  return (
    <CartItemWrapper className="sticky top-10 bg-white">
      <div className="col-span-2">
        <h2 className="text-3xl font-medium">{restName}</h2>
        <span className="font-light text-[14px]">Deliver to Pembina Hwy</span>
      </div>

      <Button className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full justify-self-end">
        &#8226; &#8226; &#8226;
      </Button>

      <span className="text-sm col-span-2">{`${totalQuantity} items`}</span>
      <p className="justify-self-end">
        <span className="text-gray-400">Subtotal: </span>
        <span className="">{`${subTotal.toFixed(2)}`}</span>
      </p>
    </CartItemWrapper>
  );
};

export default StoreCartDetails;
