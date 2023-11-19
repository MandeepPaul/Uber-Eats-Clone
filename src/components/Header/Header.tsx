import MainNavigation from "./MainNavigation";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";

const Header: React.FC<{ className?: string; onClick: () => void }> = (
  props
) => {
  return (
    <header>
      <MainNavigation onClick={props.onClick} className={`lg:px-6`} />
      <DeliveryDetails className={`lg:hidden ${props.className}`} />
    </header>
  );
};

export default Header;
