import { useState } from "react";
import ReactDOM from "react-dom";

import OrderTypeToggle from "../../UI/OrderTypeToogle";
import AddressSection from "../../Overlays/DeliveryAddress/AddressSection";
import { LocationPinSVG, doorSVG } from "../../../SVG/svgIcon";
import { useAppSelector } from "../../../types/hooks";
import EditUserInfo from "../../Overlays/DeliveryAddress/EditUserInfo";

const Address: React.FC<{ className: string }> = ({ className }) => {
  const [overlayVisible, setVisibility] = useState(false);
  const orderType = useAppSelector((state) => state.cart.orderType);
  const address = useAppSelector((state) => state.userSlice);

  const onButtonClick = (identifier: string) => {
    if (identifier === "address") {
      setVisibility(true);
    }
  };

  return (
    <section className={`bg-white px-4 py-2 ${className}`}>
      <div>
        <h2 className="text-3xl font-semibold pb-3">Checkout</h2>
        <OrderTypeToggle
          className={`py-2 flex w-full`}
          buttonPadding="px-[8px]"
        />
      </div>
      {orderType === "DELIVERY" ? (
        <>
          <AddressSection
            svg={LocationPinSVG}
            place="Delivery details"
            description={address.userAddress1}
            buttonTitle="Add"
            onClick={() => onButtonClick("address")}
          />
          <AddressSection
            svg={doorSVG}
            place="Leave at my door"
            description={address.userAddress2}
            buttonTitle="Add"
            onClick={() => onButtonClick("information")}
          />
        </>
      ) : (
        ""
      )}

      {overlayVisible &&
        ReactDOM.createPortal(
          <EditUserInfo onReset={() => setVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </section>
  );
};

export default Address;

/*
place
description
*/
