import DeliveryDetails from "../components/Header/DeliveryDetails/DeliveryDetails";
import Main from "../components/Main/Main";

const HomePage = () => {
  return (
    <>
      <DeliveryDetails className={`lg:hidden `} />
      <Main className="mx-4 lg:mx-7" />
    </>
  );
};

export default HomePage;
