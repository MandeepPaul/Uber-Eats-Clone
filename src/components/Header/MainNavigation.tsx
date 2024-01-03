import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

import SearchBar from "../Main/HomeContent/SearchBar";
import SideNav from "../Main/HomeContent/SideNav/SideNav";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import Cart from "../Overlays/Cart/Cart";
import NotificationWrapper from "../UI/Wrappers/NotificationWrapper";
import Button from "../UI/Wrappers/Button";
import Logo from "./Logo";
import { HamburgerMenuIcon, CartIcon } from "../../SVG/svgIcon";
import { itemOrdered } from "../../store/Slices/cartSlice";

const MainNavigation: React.FC<{
  className: string;
  onAddressBarClick?: () => void;
}> = ({ className, onAddressBarClick }) => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [sideNavigation, setNavVisibility] = useState(false);
  const [animateButton, setAnimate] = useState(false);

  //To prevent animation when component renders first time
  let firstRender = useRef(true);

  const cart: itemOrdered = useSelector(
    (state: { cart: itemOrdered }) => state.cart
  );
  const cartHandler = () => {
    setCartVisibility(true);
  };

  const openSideNav = () => {
    sideNavigation ? setNavVisibility(false) : setNavVisibility(true);
  };

  useEffect(() => {
    if (cart?.cartItemList?.length === 0) {
      return;
    }

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.cartItemList]);

  return (
    <NotificationWrapper>
      <div
        className={`flex flex-row justify-between w-full py-3 md:text-sm xl:text-base lg:px-10 lg:items-center ${className}`}
      >
        <Button onClick={openSideNav} className="pr-6">
          <HamburgerMenuIcon />
        </Button>

        <Logo />

        <DeliveryDetails
          className="hidden lg:inline-flex lg:gap-3"
          onAddressBarClick={onAddressBarClick}
        />

        <SearchBar className="hidden lg:inline-flex" />

        <Button
          className={`flex items-center space-x-1 bg-black rounded-full text-white px-3 lg:px-4 lg:py-3 hover:opacity-75 ${
            animateButton ? "bump z-30" : ""
          }`}
          onClick={cartHandler}
        >
          <CartIcon className="lg:h-5 lg:w-6" strokeColor="" />

          <span>{cart.totalQuantity}</span>
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
    </NotificationWrapper>
  );
};

export default MainNavigation;
