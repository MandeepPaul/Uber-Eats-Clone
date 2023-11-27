import { useState } from "react";
import ReactDOM from "react-dom";

import MainNavigation from "./MainNavigation";
// import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import DeliveryAddress from "../Overlays/DeliveryAddress/DeliveryAddress";

const Header: React.FC<{ className?: string }> = ({ className }) => {
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
      {/* <DeliveryDetails
        className={`lg:hidden ${className}`}
        onAddressBarClick={onAddressBarClick} //On Small Screens
      /> */}
      {addressOverlayVisibility &&
        ReactDOM.createPortal(
          <DeliveryAddress onReset={() => setAddressVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </header>
  );
};

export default Header;
