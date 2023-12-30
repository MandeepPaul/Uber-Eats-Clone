import CartItemWrapper from "../../UI/Wrappers/CartItemWrapper";
import Card from "../../UI/Wrappers/ImageCard";
// import DropDownMenu from "../../UI/DropDownMenu";
import CounterButton from "../../UI/CounterButton";

import { orderedItemFormat } from "../../../types/outgoingDataType";

const CartItem: React.FC<orderedItemFormat> = ({
  itemName,
  price,
  quantity,
  imageURL,
  condimentsData,
}) => {
  const removeItemHandler = () => {
    console.log("removed");
  };
  return (
    <CartItemWrapper>
      <div className="flex flex-col col-span-2">
        <span>{itemName}</span>
        {condimentsData.map((data) => (
          <p key={data.id} className="font-light text-sm">
            {data.list
              .map(({ conName, conPrice }) =>
                conPrice ? `${conName}: ($${conPrice})` : conName
              )
              .join(", ")}
          </p>
        ))}
      </div>

      <Card className="h-12 w-12 justify-self-end" url={imageURL || ""} />

      {/* <DropDownMenu
        options={[1, 2, 3, 4, 5]}
        className="hidden md:flex space-x-2 px-3 py-1 text-sm"
      /> */}
      <CounterButton className="" onDelete={removeItemHandler} />

      <span className="place-self-end col-span-2">{`$${price.toFixed(
        2
      )}`}</span>
    </CartItemWrapper>
  );
};

export default CartItem;
