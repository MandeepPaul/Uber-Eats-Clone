import { useState } from "react";

const OrderTypeToggle: React.FC<{ className?: string }> = (props) => {
  const [orderType, setOrderType] = useState("DELIVERY");

  const toggleHandler = (tab: string) => {
    setOrderType(tab);
  };
  return (
    <div className="relative flex">
      <div
        className={`bg-gray-200 px-3 space-x-6 rounded-full ${props.className}`}
      >
        <button
          onClick={() => toggleHandler("DELIVERY")}
          className="lg:z-20 pl-1"
        >
          Delivery
        </button>
        <button
          onClick={() => toggleHandler("PICKUP")}
          className="lg:z-20 pr-2"
        >
          <span> Pickup </span>
        </button>
      </div>
      <div
        className={`absolute top-1 h-[85%] w-[50%] bg-white rounded-full transition-transform duration-300 ${
          orderType === "DELIVERY" ? "left-1" : "right-1"
        }`}
      />
    </div>
  );
};

export default OrderTypeToggle;
