import DeliveryDetails from "../components/Main/storeContent/StoreDeliveryDetails";
import ImageCard from "../components/Main/storeContent/ImageCard";
// import menu from "../tempData/MenuList";

const StorePage = () => {
  return (
    <div className="h-screen text-sm">
      <ImageCard />
      <DeliveryDetails />
    </div>
  );
};

export default StorePage;
