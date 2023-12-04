import { AddFriendIcon, CalendarIcon } from "../../../../SVG/svgIcon";
import Button from "../../../UI/Button";
import OrderTypeToggle from "../../../Header/DeliveryDetails/OrderTypeToogle";

const StoreDeliveryDetails = () => {
  return (
    <>
      <div
        className={`mt-10 mb-2 mx-4 text-center flex flex-col items-center justify-center lg:items-start lg:gap-1`}
      >
        <span className="text-2xl font-medium lg:text-[40px] lg:font-semibold">
          A&W
        </span>
        <div className="text-sm flex gap-1 justify-center">
          <span>4.4 &#9733;</span>
          <span className="text-gray-500 font-light">
            (100+) &#8226; $0.99 Delivery Fee &#8226;
          </span>
          <span className="text-amber-800">Uber One &#8226; </span>
          <span>0.6 km </span>
        </div>
      </div>

      <div className="mx-4 lg:text-base z-0">
        <div className="flex justify-between items-center lg:flex-row-reverse">
          <OrderTypeToggle
            className="py-2 flex"
            buttonPadding="px-[12px] lg:px-[100px]"
            deliveryDetails={`20min $0.99`}
            pickupDetails={`10 min 0.5 KM`}
          />
          <div className="flex gap-2">
            <Button className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-2 flex justify-between gap-2 items-center lg:py-3">
              <AddFriendIcon />
              <span>Group order</span>
            </Button>
            <Button className="hidden lg:flex bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-2 justify-between gap-2 items-center lg:py-3">
              <CalendarIcon />
              <span>Schedule</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-around border-[1px] rounded-lg p-3 mt-3 divide-x lg:hidden">
          <div className="flex flex-col items-center w-[50%]">
            <span>$0.99 Delivery Fee</span>
            <span className="text-gray-400 font-thin text-xs">
              Pricing & fees
            </span>
          </div>
          <div className="flex flex-col items-center w-[50%]">
            <span>15 min</span>
            <span className="text-gray-400 font-thin text-xs">
              Delivery time
            </span>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 my-4 lg:hidden" />
    </>
  );
};

export default StoreDeliveryDetails;
