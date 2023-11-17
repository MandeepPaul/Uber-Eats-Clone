import Button from "../../UI/Button";
import { arrowDownSVG, locationPinSVG } from "../../../SVG/svgIcon";

const AddressDetails = () => {
  return (
    <div className="flex flex-col">
      <span className="lg:hidden">Deliver now</span>

      <Button className="flex gap-2 items-center lg:rounded-full lg:p-3 lg:bg-gray-200">
        {locationPinSVG}
        <p>Pembina Highway</p>
        <span className="hidden lg:inline-block">Now</span>
        {arrowDownSVG}
      </Button>
    </div>
  );
};

export default AddressDetails;
