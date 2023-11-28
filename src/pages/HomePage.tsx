import { useState } from "react";
import ReactDOM from "react-dom";

import DeliveryDetails from "../components/Header/DeliveryDetails/DeliveryDetails";
import Main from "../components/Main/Main";
import DeliveryAddress from "../components/Overlays/DeliveryAddress/DeliveryAddress";

const HomePage = () => {
  const [addressOverlayVisibility, setAddressVisibility] = useState(false);

  const onAddressBarClick = () => {
    setAddressVisibility(true);
  };
  return (
    <>
      <DeliveryDetails
        className={`lg:hidden `}
        onAddressBarClick={onAddressBarClick} //On Small Screens
      />
      <Main className="mx-4 lg:mx-7" />

      {addressOverlayVisibility &&
        ReactDOM.createPortal(
          <DeliveryAddress onReset={() => setAddressVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </>
  );
};

export default HomePage;
