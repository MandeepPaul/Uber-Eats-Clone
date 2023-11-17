import { hamburgerMenuIcon, cartIcon } from "../../SVG/svgIcon";
import SearchBar from "../Main/SearchBar";
import Button from "../UI/Button";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";

const MainNavigation = () => {
  return (
    <div
      className={`flex flex-row justify-between w-full max-w-[1440px] bg-white p-3 lg:py-2 lg:px-3 lg:items-center lg:fixed lg:top-0 lg:z-10 lg:shadow-md`}
    >
      <Button>{hamburgerMenuIcon}</Button>

      <img
        className="py-2 h-[35px] md:h-[37px]"
        alt="Uber_Eats Logo"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
      />

      <DeliveryDetails className="hidden lg:inline-flex lg:gap-3" />

      <SearchBar className="hidden lg:inline-flex" />

      <Button className="flex items-center space-x-1 bg-black rounded-full px-3 text-white">
        {cartIcon}
        <span>0</span>
      </Button>
    </div>
  );
};

export default MainNavigation;
