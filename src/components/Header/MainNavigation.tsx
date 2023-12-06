import { useState } from "react";
import ReactDOM from "react-dom";

import { hamburgerMenuIcon, cartIcon } from "../../SVG/svgIcon";
import SearchBar from "../Main/HomeContent/SearchBar";
import Button from "../UI/Button";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import Cart from "../Overlays/Cart/Cart";
import SideNav from "../Main/HomeContent/SideNav/SideNav";
import Logo from "./Logo";

const MainNavigation: React.FC<{
  className: string;
  onAddressBarClick?: () => void;
}> = ({ className, onAddressBarClick }) => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [sideNavigation, setNavVisibility] = useState(false);

  const cartHandler = () => {
    setCartVisibility(true);
  };

  const openSideNav = () => {
    sideNavigation ? setNavVisibility(false) : setNavVisibility(true);
  };

  return (
    <div
      className={`flex flex-row justify-between w-full bg-white max-w-[1440px] py-3 md:text-sm xl:text-base lg:px-10 lg:items-center lg:fixed lg:top-0 lg:z-20 lg:shadow-lg ${className}`}
    >
      <Button onClick={openSideNav} className="pr-6">
        {hamburgerMenuIcon}
      </Button>

      <Logo />

      <DeliveryDetails
        className="hidden lg:inline-flex lg:gap-3"
        onAddressBarClick={onAddressBarClick}
      />

      <SearchBar className="hidden lg:inline-flex" />

      <Button
        className="flex items-center space-x-1 bg-black rounded-full text-white px-3 lg:px-4 lg:py-3 hover:opacity-75"
        onClick={cartHandler}
      >
        {cartIcon}
        <span>0</span>
        <span className="hidden lg:inline-flex">carts</span>
      </Button>

      {cartVisibility &&
        ReactDOM.createPortal(
          <Cart onReset={() => setCartVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}

      {sideNavigation &&
        ReactDOM.createPortal(
          <SideNav onReset={() => setNavVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
};

export default MainNavigation;
