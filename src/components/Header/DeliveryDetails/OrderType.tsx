import Button from "../../UI/Button";
import { arrowDownSVG } from "../../../SVG/svgIcon";

const OrderType: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`self-end lg:self-center ${props.className}`}>
      <Button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1">
        <span>Delivery</span>
        {arrowDownSVG}
      </Button>
    </div>
  );
};

export default OrderType;
