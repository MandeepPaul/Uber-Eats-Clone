import DeliveryDetails from "../components/Main/storeContent/StoreDeliveryDetails";
import ImageCard from "../components/Main/storeContent/ImageCard";
import Card from "../components/UI/Card";
import MenuContent from "../components/Main/storeContent/MenuContent";
// import menu from "../tempData/MenuList";

const StorePage = () => {
  return (
    <div className="h-screen text-sm">
      <ImageCard />
      <DeliveryDetails />
      <hr className="border-t-2 border-gray-200 my-4 " />
      <MenuContent />
    </div>
  );
};

export default StorePage;
