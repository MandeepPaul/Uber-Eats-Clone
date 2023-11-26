import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import AddressSection from "./AddressSection";
import { locationPinSVG, clockIcon, crossIcon } from "../../../SVG/svgIcon";

const DeliveryAddress: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="bottom-0 inset-x-0 h-[300px] lg:h-[400px] lg:top-20 mx-auto lg:max-w-xl font-ubermove"
    >
      <div className="font-medium relative h-full flex flex-col justify-between">
        <div>
          <Button
            className="hidden lg:block absolute top-3 left-3"
            onClick={onReset}
          >
            {crossIcon}
          </Button>

          <h1 className="text-center text-xl p-3 lg:text-4xl lg:font-semibold lg:text-start lg:pt-14">
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
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-black w-[94%] py-4 my-6 rounded-md text-xl text-white hover:opacity-75"
            onClick={onReset}
          >
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeliveryAddress;
