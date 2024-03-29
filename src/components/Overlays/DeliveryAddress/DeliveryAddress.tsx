import { useState } from "react";
import { useAppSelector } from "../../../types/hooks";
import { LocationPinSVG, ClockIcon, CrossIcon } from "../../../SVG/svgIcon";

import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";
import AddressSection from "./AddressSection";
import EditUserInfo from "./EditUserInfo";

const DeliveryAddress: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const [overlayVisible, setVisibility] = useState(false);
  const userDetails = useAppSelector((state) => state.userSlice);

  const onButtonClick = (identifier: string) => {
    if (identifier === "address") {
      setVisibility(true);
    }
  };

  const topOverlayClose = () => {
    setVisibility(false);
  };
  return (
    <Modal
      reset={onReset}
      modal="bottom-0 inset-x-0 h-[300px] lg:h-[400px] lg:top-20 mx-auto lg:max-w-xl font-ubermove"
    >
      {!overlayVisible ? (
        <div className="font-medium relative h-full flex flex-col justify-between">
          <div>
            <Button
              className="hidden lg:block absolute top-3 left-3 rounded-full hover:bg-slate-200 p-2"
              onClick={onReset}
            >
              <CrossIcon />
            </Button>

            <h1 className="text-center text-xl p-3 lg:text-4xl lg:font-semibold lg:text-start lg:pt-14">
              Delivery details
            </h1>

            <hr className="border-t-2 border-gray-200 lg:hidden" />

            <AddressSection
              svg={LocationPinSVG}
              place="Home"
              description={userDetails.userAddress}
              buttonTitle="Change"
              onClick={() => onButtonClick("address")}
            />

            <hr className="border-t-2 border-gray-200 ml-[55px]" />

            <AddressSection
              svg={ClockIcon}
              place="Now"
              buttonTitle="Schedule"
              onClick={() => onButtonClick("information")}
            />
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
      ) : (
        <EditUserInfo onReset={topOverlayClose} />
      )}
    </Modal>
  );
};

export default DeliveryAddress;
