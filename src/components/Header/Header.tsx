import { useState } from "react";
import ReactDOM from "react-dom";

import MainNavigation from "./MainNavigation";
import DeliveryAddress from "../Overlays/DeliveryAddress/DeliveryAddress";

const Header = () => {
  const [addressOverlayVisibility, setAddressVisibility] = useState(false);

  const onAddressBarClick = () => {
    setAddressVisibility(true);
  };

  return (
    <header>
      <MainNavigation
        className={`px-4 lg:px-8`}
        onAddressBarClick={onAddressBarClick} //On Large Screens
      />
      {addressOverlayVisibility &&
        ReactDOM.createPortal(
          <DeliveryAddress onReset={() => setAddressVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </header>
  );
};

export default Header;
