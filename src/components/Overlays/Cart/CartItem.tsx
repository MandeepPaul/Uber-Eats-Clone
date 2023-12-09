import CartItemWrapper from "../../UI/Wrappers/CartItemWrapper";
import Card from "../../UI/Wrappers/ImageCard";
// import DropDownMenu from "../../UI/DropDownMenu";
import CounterButton from "../../UI/CounterButton";

const CartItem = () => {
  const removeItemHandler = () => {
    console.log("removed");
  };
  return (
    <CartItemWrapper>
      <div className="flex flex-col col-span-2">
        <span>Russet Thick-Cut Fries</span>
        <span className="font-light text-sm">
          Dipping Sauces: Jalapeno Ranch ($0.25)
        </span>
      </div>

      <Card
        className="h-12 w-12 justify-self-end"
        url="https://tb-static.uber.com/prod/image-proc/processed_images/97be21a6da0ad268bce561149d6ef720/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
      />

      {/* <DropDownMenu
        options={[1, 2, 3, 4, 5]}
        className="hidden md:flex space-x-2 px-3 py-1 text-sm"
      /> */}
      <CounterButton className="" onDelete={removeItemHandler} />

      <span className="place-self-end col-span-2">$17.76</span>
    </CartItemWrapper>
  );
};

export default CartItem;
