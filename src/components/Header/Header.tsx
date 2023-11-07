import MainNavigation from "./MainNavigation";
import OrderType from "./OrderType";

const Header = () => {
  return (
    <header>
      <MainNavigation />
      <OrderType className="md:hidden" />
    </header>
  );
};

export default Header;
