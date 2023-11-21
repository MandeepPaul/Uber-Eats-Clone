import { useState } from "react";
import ReactDOM from "react-dom";

import { hamburgerMenuIcon, cartIcon } from "../../SVG/svgIcon";
import SearchBar from "../Main/SearchBar";
import Button from "../UI/Button";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import Cart from "../Overlays/Cart/Cart";

const MainNavigation: React.FC<{
  className: string;
  onHamburgerIconClick: () => void;
  onAddressBarClick: () => void;
}> = ({ className, onHamburgerIconClick, onAddressBarClick }) => {
  const [cartVisibility, setCartVisibility] = useState(true);
  const cartHandler = () => {
    setCartVisibility(true);
  };
  const closeCartOverlay = () => {
    setCartVisibility(false);
  };

  return (
    <div
      className={`flex flex-row justify-between w-full max-w-[1440px] bg-white py-3 px-8 md:text-sm xl:text-base lg:px-10 lg:items-center lg:fixed lg:top-0 lg:z-10 lg:shadow-lg ${className}`}
    >
      <Button onClick={onHamburgerIconClick}>{hamburgerMenuIcon}</Button>

      <img
        className="py-2 h-[35px] md:h-[37px] lg:h-[40px] xl:h-[45px]"
        alt="Uber_Eats Logo"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
      />

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
          <Cart onReset={closeCartOverlay} />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
};

export default MainNavigation;
