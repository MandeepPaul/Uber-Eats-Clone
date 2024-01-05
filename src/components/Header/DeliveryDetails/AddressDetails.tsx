import Button from "../../UI/Wrappers/Button";
import { ArrowDownSVG, LocationPinSVG } from "../../../SVG/svgIcon";
import { useAppSelector } from "../../../types/hooks";

const AddressDetails: React.FC<{ onAddressBarClick?: () => void }> = ({
  onAddressBarClick,
}) => {
  const userSelector = useAppSelector((state) => state.userSlice);
  return (
    <div className="flex flex-col">
      <span className="lg:hidden text-sm">Deliver now</span>

      <Button
        className="flex gap-2 items-center lg:rounded-full lg:p-3 lg:bg-gray-200 lg:hover:bg-zinc-300 overflow-hidden"
        onClick={onAddressBarClick}
      >
        <div className="hidden lg:inline-block">
          <LocationPinSVG />
        </div>

        <p className="truncate">{`${userSelector.userAddress1}`}</p>

        <span className="hidden lg:inline-block">Now</span>

        <ArrowDownSVG />
      </Button>
    </div>
  );
};

export default AddressDetails;
