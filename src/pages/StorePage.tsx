import StoreDeliveryDetails from "../components/Main/storeContent/StoreHeader/StoreDeliveryDetails";
import ImageCard from "../components/Main/storeContent/StoreHeader/ImageCard";
import MenuContent from "../components/Main/storeContent/Main/MenuContent";

const StorePage = () => {
  return (
    <div className="h-screen text-sm">
      <ImageCard />
      <StoreDeliveryDetails />
      <MenuContent />
    </div>
  );
};

export default StorePage;
