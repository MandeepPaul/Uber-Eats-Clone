import CartItemWrapper from "../../UI/Wrappers/CartItemWrapper";
import Card from "../../UI/Wrappers/ImageCard";
import CounterButton from "../../UI/CounterButton";

import { cartActions } from "../../../store/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { orderedItemFormat } from "../../../types/outgoingDataType";

const CartItem: React.FC<orderedItemFormat> = ({
  itemId,
  itemName,
  price,
  quantity,
  imageURL,
  condimentsData,
}) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart(itemId));
    console.log(itemId, itemName);
  };

  const quantityChangeHandler = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeItemHandler();
      return;
    }

    dispatch(cartActions.changeQuantity({ id: itemId, newQuantity }));
  };

  return (
    <CartItemWrapper>
      <div className="flex flex-col col-span-2">
        <span>{itemName}</span>
        {condimentsData.map((data) => (
          <p key={data.id} className="font-light text-sm">
            {`${data.title}: `}
            {data.list
              .map(({ conName, conPrice }) =>
                conPrice ? `${conName}: ($${conPrice})` : conName
              )
              .join(", ")}
          </p>
        ))}
      </div>

      <Card className="h-12 w-12 justify-self-end" url={imageURL || ""} />

      <CounterButton
        className=""
        onChange={quantityChangeHandler}
        defaultValue={quantity}
      />

      <span className="place-self-end col-span-2">{`$${price.toFixed(
        2
      )}`}</span>
    </CartItemWrapper>
  );
};

export default CartItem;
