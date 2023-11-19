import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import AddressSection from "./AddressSection";
import { locationPinSVG } from "../../../SVG/svgIcon";

const DeliveryAddress: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="bottom-0 inset-x-0 h-1/4 lg:top-0 font-ubermove"
    >
      <div className="mx-4 text-base font-medium h-full relative">
        <h1 className="text-center text-xl py-3">Delivery details</h1>

        <hr className="border-t-2 border-gray-200" />

        <AddressSection
          svg={locationPinSVG}
          place="Home"
          description="1720 Pembina Hwy, Winnipeg, MB R3T 5T4, CA"
          buttonTitle="Change"
        />

        <hr className="border-t-2 border-gray-200 ml-[55px]" />

        <AddressSection
          svg={locationPinSVG}
          place="Now"
          buttonTitle="Schedule"
        />
        <Button className="bg-black w-full absolute bottom-8 py-5 rounded-md text-xl text-white">
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default DeliveryAddress;
