import Button from "../../UI/Button";
import { ArrowDownSVG, locationPinSVG } from "../../../SVG/svgIcon";

const AddressDetails: React.FC<{ onAddressBarClick?: () => void }> = ({
  onAddressBarClick,
}) => {
  return (
    <div className="flex flex-col">
      <span className="lg:hidden text-sm">Deliver now</span>

      <Button
        className="flex gap-2 items-center lg:rounded-full lg:p-3 lg:bg-gray-200 lg:hover:bg-zinc-300 overflow-hidden"
        onClick={onAddressBarClick}
      >
        <div className="hidden lg:inline-block">{locationPinSVG}</div>

        <p className="truncate">Pembina Highway</p>

        <span className="hidden lg:inline-block">Now</span>

        <div className="w-3 h-3 pt-[2px] text-gray-800 lg:hidden ">
          <ArrowDownSVG />
        </div>
      </Button>
    </div>
  );
};

export default AddressDetails;
