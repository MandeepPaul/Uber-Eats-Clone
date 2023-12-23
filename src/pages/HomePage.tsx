import { useState } from "react";
import { IndexRouteObject, useRouteLoaderData } from "react-router-dom";
import ReactDOM from "react-dom";

import { fetchStoreData, Istores } from "../tempData/StoreList";

import DeliveryDetails from "../components/Header/DeliveryDetails/DeliveryDetails";
import Main from "../components/Main/HomeContent/Main";
import DeliveryAddress from "../components/Overlays/DeliveryAddress/DeliveryAddress";

const HomePage = () => {
  const [addressOverlayVisibility, setAddressVisibility] = useState(false);
  const data = useRouteLoaderData("store-details");
  const typedData = data as Istores[];

  const onAddressBarClick = () => {
    setAddressVisibility(true);
  };

  return (
    <main id="home-main-content">
      <DeliveryDetails
        className={`lg:hidden `}
        onAddressBarClick={onAddressBarClick} // On Small Screens
      />
      {typedData instanceof Error ? (
        <p className="text-center text-xl h-[500px] grid place-content-center">
          <span className="text-red-500">{typedData.message}</span>
        </p>
      ) : (
        <Main className="mx-4 lg:mx-7" storesData={typedData} />
      )}

      {addressOverlayVisibility &&
        ReactDOM.createPortal(
          <DeliveryAddress onReset={() => setAddressVisibility(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </main>
  );
};

export default HomePage;

export const loader: IndexRouteObject["loader"] = async (): Promise<any> => {
  try {
    const data = await fetchStoreData(); // Execute StoreList function to get store data

    if (data instanceof Error) {
      throw data;
    }
    return data; // Return the retrieved data if no error occurred
  } catch (error) {
    console.error("Error fetching store data: " + error);
    // Handle the error by throwing a new Error or providing an appropriate response
    return new Error("Error while fetching store data!");
  }
};
