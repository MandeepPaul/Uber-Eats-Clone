import MainNavigation from "./MainNavigation";
import OrderType from "./OrderType";

const Header: React.FC<{ className?: string }> = (props) => {
  return (
    <header>
      <MainNavigation />
      <OrderType className={`md:hidden ${props.className}`} />
    </header>
  );
};

export default Header;
