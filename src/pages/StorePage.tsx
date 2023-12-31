import { IndexRouteObject, useLoaderData } from "react-router-dom";
import { fetchMenuData } from "../firestoreData/StoreList";
import { Istores } from "../types/incomingDataType";

import StoreDeliveryDetails from "../components/Main/StoreContent/StoreHeader/StoreDeliveryDetails";
import ImageCard from "../components/Main/StoreContent/StoreHeader/ImageCard";
import MenuContent from "../components/Main/StoreContent/Main/MenuContent";

import { storeDataType } from "../types/incomingDataType";
import { useAppSelector } from "../types/hooks";

const StorePage = () => {
  const storeDetailsIncMenu = useLoaderData() as storeDataType;
  const orderType = useAppSelector((state) => state.cart.orderType);

  const { id, name, url, logoURL, deliveryFee, time, menuContent } =
    storeDetailsIncMenu;

  //Show message in case of an error!
  let content = (
    <div className="w-ful h-[800px] grid place-content-center">
      <p className="text-center text-xl text-red-500">
        No store data available!
      </p>
    </div>
  );

  if (storeDetailsIncMenu && typeof storeDetailsIncMenu === "object") {
    content = (
      <>
        <ImageCard
          imageURL={url || ""} // Accessing 'url' property, ensuring it exists
          logoURL={logoURL || ""} // Accessing 'logoURL' property, ensuring it exists
        />
        <StoreDeliveryDetails {...(storeDetailsIncMenu as Istores)} />
        <MenuContent
          categoryList={menuContent || []}
          restaurantDetails={{
            restId: id,
            restName: name,
            restImg: url,
            deliveryFee: deliveryFee,
            deliveryTime: time,
            orderType: orderType,
          }}
        />
        {/* Ensuring 'menuContent' is an array */}
      </>
    );
  }

  return <main className="text-sm">{content}</main>;
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
