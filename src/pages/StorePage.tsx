import StoreDeliveryDetails from "../components/Main/StoreContent/StoreHeader/StoreDeliveryDetails";
import ImageCard from "../components/Main/StoreContent/StoreHeader/ImageCard";
import MenuContent from "../components/Main/StoreContent/Main/MenuContent";

const StorePage = () => {
  return (
    <main className="text-sm">
      <ImageCard />
      <StoreDeliveryDetails />
      <MenuContent />
    </main>
  );
};

export default StorePage;
