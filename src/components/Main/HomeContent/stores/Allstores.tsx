import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RightArrow } from "../../../../SVG/svgIcon";
import RenderStores from "./RenderStores";
import { Istores } from "../../../../tempData/StoreList";
import LoadingIndicator from "../../../UI/Animations/LoadingIndicator";

import StoreList from "../../../../tempData/StoreList";

const Allstores: React.FC<{ className?: string }> = ({ className }) => {
  const [storesData, setStoresData] = useState<Istores[]>([]); // State to hold the store data
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Fetch store data using StoreList function
    async function fetchStores() {
      try {
        const data = await StoreList(); // Execute StoreList function to get store data

        if (data instanceof Error) {
          throw data;
        }

        setStoresData(data); // Set the store data in state
      } catch (error) {
        console.error("Error fetching store data:", error);
        setError("Could not fetch data! Try refreshing.");
      }
    }

    fetchStores(); // Call the function to fetch store data
  }, []);

  console.log(error);

  return (
    <div className={`${className}`}>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-xl font-semibold `}>Today's offers</h2>
        <Link to="offers" className="bg-gray-200 rounded-full p-1 h-67 w-67">
          <RightArrow />
        </Link>
      </div>

      {!error && storesData.length === 0 ? (
        <LoadingIndicator />
      ) : (
        <>
          <RenderStores
            storeData={storesData.filter((store) => store.offer)}
            isGrid={false}
          />
          <RenderStores storeData={storesData} isGrid={true} />
        </>
      )}

      {error && <p className="lg:text-xl text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Allstores;
