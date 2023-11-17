import MainNavigation from "./MainNavigation";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";

const Header: React.FC<{ className?: string }> = (props) => {
  return (
    <header>
      <MainNavigation />
      <DeliveryDetails className={`lg:hidden ${props.className}`} />
    </header>
  );
};

export default Header;
