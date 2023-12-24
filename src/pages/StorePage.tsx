import {
  IndexRouteObject,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Istores, fetchMenuData } from "../tempData/StoreList";
import StoreDeliveryDetails from "../components/Main/StoreContent/StoreHeader/StoreDeliveryDetails";
import ImageCard from "../components/Main/StoreContent/StoreHeader/ImageCard";
import MenuContent from "../components/Main/StoreContent/Main/MenuContent";

import { storeDataType } from "../tempData/StoreList";
import LoadingIndicator from "../components/UI/Animations/LoadingIndicator";

const StorePage = () => {
  const storeDetailsIncMenu = useLoaderData() as storeDataType;
  const navigation = useNavigation();

  let content = (
    <div className="w-ful h-[800px] grid place-content-center">
      <p className="text-center text-xl text-red-500">
        No store data available!
      </p>
    </div>
  );
  // console.log(storeDetailsIncMenu);
  if (navigation.state === "loading") content = <LoadingIndicator />;

  if (storeDetailsIncMenu && typeof storeDetailsIncMenu === "object") {
    content = (
      <>
        <ImageCard
          imageURL={storeDetailsIncMenu.url || ""} // Accessing 'url' property, ensuring it exists
          logoURL={storeDetailsIncMenu.logoURL || ""} // Accessing 'logoURL' property, ensuring it exists
        />
        <StoreDeliveryDetails {...(storeDetailsIncMenu as Istores)} />
        <MenuContent categoryList={storeDetailsIncMenu.menuContent || []} />
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
    // console.log(storesData);
    return storesData[0];
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw new Error(`Error fetching store data:", ${error}`);
  }
};
