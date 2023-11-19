import { useState } from "react";
import ReactDOM from "react-dom";

import MainNavigation from "./MainNavigation";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import DeliveryAddress from "../Overlays/DeliveryAddress/DeliveryAddress";

const Header: React.FC<{ className?: string; onClick: () => void }> = ({
  onClick,
  className,
}) => {
  const [addressOverlayVisibility, setVisibility] = useState(true);

  const onAddressBarClick = () => {
    setVisibility(true);
  };

  const closeAddressOverlay = () => {
    setVisibility(false);
  };

  return (
    <header>
      <MainNavigation
        onHamburgerIconClick={onClick}
        className={`lg:px-6`}
        onAddressBarClick={onAddressBarClick} //On Large Screens
      />
      <DeliveryDetails
        className={`lg:hidden ${className}`}
        onAddressBarClick={onAddressBarClick} //On Small Screens
      />
      {addressOverlayVisibility &&
        ReactDOM.createPortal(
          <DeliveryAddress onReset={closeAddressOverlay} />,
          document.getElementById("back-drop") as Element
        )}
    </header>
  );
};

export default Header;
