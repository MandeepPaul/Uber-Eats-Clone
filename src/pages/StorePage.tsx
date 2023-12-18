import { IndexRouteObject, useLoaderData } from "react-router-dom";
import { fetchMenuData } from "../tempData/StoreList";
import StoreDeliveryDetails from "../components/Main/StoreContent/StoreHeader/StoreDeliveryDetails";
import ImageCard from "../components/Main/StoreContent/StoreHeader/ImageCard";
import MenuContent from "../components/Main/StoreContent/Main/MenuContent";

import { storeDataType } from "../tempData/StoreList";

const StorePage = () => {
  const loader = useLoaderData() as storeDataType;

  if (typeof loader === "object" && loader !== null) {
    console.log(loader);
  }

  return (
    <main className="text-sm">
      <ImageCard />
      <StoreDeliveryDetails />
      <MenuContent />
    </main>
  );
};

export default StorePage;

export const loader: IndexRouteObject["loader"] = async ({
  params,
}): Promise<any> => {
  const id = params.storeId;

  try {
    const storesData = await fetchMenuData(id);
    return storesData[0];
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw new Error(`Error fetching store data:", ${error}`);
  }
};
