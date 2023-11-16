import Button from "../UI/Button";
import { arrowDownSVG, locationPinSVG } from "../../SVG/svgIcon";
const OrderType: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={`flex text-sm lg:flex-row-reverse justify-between px-4 mt-4 lg:m-0 font-ubermove ${props.className}`}
    >
      <div className="flex flex-col lg:flex-none lg:self-center">
        <span className="lg:hidden">Deliver now</span>

        <Button className="flex gap-2 items-center lg:rounded-full lg:p-3 lg:bg-gray-200">
          {locationPinSVG}
          <p>Pembina Highway</p>
          <span className="hidden lg:inline-block">Now</span>
          {arrowDownSVG}
        </Button>
      </div>

      <div className="self-end lg:self-center">
        <Button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 lg:py-3 lg:px-4">
          <span>Delivery</span>
          {arrowDownSVG}
        </Button>
      </div>
    </div>
  );
};

export default OrderType;
