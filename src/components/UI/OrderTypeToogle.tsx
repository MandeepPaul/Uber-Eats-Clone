import React, { useState } from "react";
import Button from "./Wrappers/Button";

type OrderTypeToggleProps = {
  className?: string;
  buttonPadding?: string;
  deliveryDetails?: string;
  pickupDetails?: string;
};

const OrderTypeToggle: React.FC<OrderTypeToggleProps> = ({
  className,
  deliveryDetails,
  pickupDetails,
  buttonPadding = "",
}) => {
  const [orderType, setOrderType] = useState("DELIVERY");

  const toggleHandler = (tab: string) => {
    setOrderType(tab);
  };

  const deliveryButtonClasses = `z-10 w-[50%] ${buttonPadding}`;
  const pickupButtonClasses = `z-10 w-[50%] ${buttonPadding}`;

  return (
    <div className="relative flex">
      <div className={`bg-gray-200 px-2 rounded-full ${className}`}>
        <Button
          onClick={() => toggleHandler("DELIVERY")}
          className={deliveryButtonClasses}
        >
          <div className="flex flex-col items-center justify-center">
            <span>Delivery</span>
            <span className="hidden lg:block text-sm text-slate-600 w-[90px]">
              {deliveryDetails}
            </span>
          </div>
        </Button>
        <Button
          onClick={() => toggleHandler("PICKUP")}
          className={pickupButtonClasses}
        >
          <div className="flex flex-col items-center justify-between">
            <span>Pickup</span>
            <span className="hidden lg:block text-sm text-slate-600 w-[90px]">
              {pickupDetails}
            </span>
          </div>
        </Button>
      </div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 h-[80%] w-[50%] bg-white rounded-full ${
          orderType === "DELIVERY" ? "left-1" : "right-1"
        }`}
      />
    </div>
  );
};

export default OrderTypeToggle;
