import { useAppSelector } from "../../../types/hooks";
import AddressDetails from "./AddressDetails";
import OrderTypeToggle from "../../UI/OrderTypeToogle";
// import OrderType from "./OrderType";

const DeliveryDetails: React.FC<{
  className?: string;
  onAddressBarClick?: () => void;
}> = ({ className, onAddressBarClick }) => {
  const orderType = useAppSelector((state) => state.cart.orderType);
  return (
    <div
      className={`flex lg:flex-row-reverse px-4 mt-4 lg:m-0 font-ubermove ${
        orderType === "PICKUP" ? "justify-end" : "justify-between"
      } ${className}`}
    >
      {orderType === "DELIVERY" && (
        <AddressDetails onAddressBarClick={onAddressBarClick} />
      )}
      <OrderTypeToggle
        className={`inline-flex w-[200px] ${
          orderType === "PICKUP" && "py-2.5"
        }`}
      />
      {/* {orderType === "DELIVERY" && <OrderType className="lg:hidden" />} */}
    </div>
  );
};

export default DeliveryDetails;
