import AddressDetails from "./AddressDetails";
import OrderType from "./OrderType";
import OrderTypeToggle from "./OrderTypeToogle";

const DeliveryDetails: React.FC<{
  className?: string;
  onAddressBarClick?: () => void;
}> = ({ className, onAddressBarClick }) => {
  return (
    <div
      className={`flex lg:flex-row-reverse justify-between px-4 mt-4 lg:m-0 font-ubermove ${className}`}
    >
      <AddressDetails onAddressBarClick={onAddressBarClick} />
      <OrderTypeToggle className="hidden lg:inline-flex" />
      <OrderType className="lg:hidden" />
    </div>
  );
};

export default DeliveryDetails;
