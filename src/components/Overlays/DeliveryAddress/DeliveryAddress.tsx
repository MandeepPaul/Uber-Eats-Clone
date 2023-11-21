import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import AddressSection from "./AddressSection";
import { locationPinSVG, clockIcon, crossIcon } from "../../../SVG/svgIcon";

const DeliveryAddress: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="bottom-0 inset-x-0 h-1/4 lg:h-1/4 lg:top-20 mx-auto lg:max-w-xl font-ubermove"
    >
      <div className="mx-4 text-base font-medium h-full relative">
        <div className="absolute top-3 left-0">{crossIcon}</div>

        <h1 className="text-center text-xl py-3 lg:text-4xl lg:font-semibold lg:text-start lg:pt-14">
          Delivery details
        </h1>

        <hr className="border-t-2 border-gray-200 lg:hidden" />

        <AddressSection
          svg={locationPinSVG}
          place="Home"
          description="1720 Pembina Hwy, Winnipeg, MB R3T 5T4, CA"
          buttonTitle="Change"
        />

        <hr className="border-t-2 border-gray-200 ml-[55px]" />

        <AddressSection svg={clockIcon} place="Now" buttonTitle="Schedule" />
        <Button
          className="bg-black w-full absolute bottom-8 py-5 rounded-md text-xl text-white hover:opacity-75"
          onClick={onReset}
        >
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default DeliveryAddress;
