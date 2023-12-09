import Button from "../../UI/Wrappers/Button";
import { ArrowDownSVG } from "../../../SVG/svgIcon";

const OrderType: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`self-end lg:self-center ${className}`}>
      <Button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 hover:bg-zinc-300">
        <span>Delivery</span>
        <ArrowDownSVG />
      </Button>
    </div>
  );
};

export default OrderType;
