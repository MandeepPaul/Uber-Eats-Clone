import Button from "../../UI/Button";
import { arrowDownSVG, locationPinSVG } from "../../../SVG/svgIcon";

const AddressDetails: React.FC<{ onAddressBarClick: () => void }> = ({
  onAddressBarClick,
}) => {
  return (
    <div className="flex flex-col">
      <span className="lg:hidden text-sm">Deliver now</span>

      <Button
        className="flex gap-2 items-center lg:rounded-full lg:p-3 lg:bg-gray-200"
        onClick={onAddressBarClick}
      >
        {locationPinSVG}
        <p>Pembina Highway</p>
        <span className="hidden lg:inline-block">Now</span>
        {arrowDownSVG}
      </Button>
    </div>
  );
};

export default AddressDetails;
