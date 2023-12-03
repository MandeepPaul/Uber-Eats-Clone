import { useState } from "react";
import Button from "../../UI/Button";

const OrderTypeToggle: React.FC<{
  className?: string;
  buttonPadding?: string;
  deliveryDetails?: string;
  pickupDetails?: string;
}> = ({
  className,
  deliveryDetails,
  pickupDetails,
  buttonPadding = "px-[6px]",
}) => {
  const [orderType, setOrderType] = useState("DELIVERY");

  const toggleHandler = (tab: string) => {
    setOrderType(tab);
  };
  return (
    <div className="relative flex">
      <div className={`bg-gray-200 px-2 rounded-full ${className}`}>
        <Button
          onClick={() => toggleHandler("DELIVERY")}
          className={`z-10 w-[50%] bg-gren-500 ${buttonPadding}`}
        >
          <div className="flex flex-col items-center justify-center">
            <span>Delivery</span>
            <span className="text-sm text-gray-400 w-[90px]">
              {deliveryDetails}
            </span>
          </div>
        </Button>
        <Button
          onClick={() => toggleHandler("PICKUP")}
          className={`z-10 w-[50%] bg-gren-500 ${buttonPadding}`}
        >
          <div className="flex flex-col items-center justify-between">
            <span>Pickup</span>
            <span className="text-sm text-gray-400 w-[90px]">
              {pickupDetails}
            </span>
          </div>
        </Button>
      </div>
      <div
        className={`absolute top-1/2 transform translate-y-[-50%] h-[80%] bg-white rounded-full ${
          orderType === "DELIVERY" ? "left-1" : "right-1"
        }`}
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default OrderTypeToggle;
