import MainNavigation from "./MainNavigation";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";

const Header: React.FC<{ className?: string; onClick: () => void }> = ({
  onClick,
  className,
}) => {
  const onAddressBarClick = () => {
    console.log("AdressBar");
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
    </header>
  );
};

export default Header;
