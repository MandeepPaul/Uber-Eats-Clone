import { addFriendIcon } from "../../../SVG/svgIcon";
import Button from "../../UI/Button";
import OrderTypeToggle from "../../Header/DeliveryDetails/OrderTypeToogle";

const DeliveryDetails = () => {
  return (
    <>
      <div className="mt-10 mb-2 text-center">
        <span className="text-2xl font-medium">A&W</span>
        <div className="text-sm flex gap-1 justify-center">
          <span>4.4 &#9733; </span>
          <span className="text-gray-500 font-light">
            (100+) &#8226; $0.99 Delivery Fee &#8226;
          </span>
          <span className="text-amber-800">Uber One &#8226; </span>
          <span>0.6 km </span>
        </div>
      </div>

      <div className="mx-4">
        <div className="flex justify-between items-center">
          <OrderTypeToggle className="py-2" />
          <Button className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-2 flex justify-between gap-1 items-center">
            {addFriendIcon}
            <span>Group order</span>
          </Button>
        </div>

        <div className="flex justify-around border-[1px] rounded-lg p-3 mt-3 divide-x">
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
    </>
  );
};

export default DeliveryDetails;
