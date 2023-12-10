import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RightArrow } from "../../../../SVG/svgIcon";
import RenderStores from "./RenderStores";
import { Istores } from "../../../../tempData/StoreList";
import LoadingIndicator from "../../../UI/Animations/LoadingIndicator";

import { onSnapshot, collection } from "firebase/firestore";
import db from "../../../../firebase";

const Allstores: React.FC<{ className?: string }> = ({ className }) => {
  const [storesData, setStoresData] = useState<Istores[]>([]);

  const storesCollection = collection(db, "stores");

  useEffect(() => {
    const unsubscribe = onSnapshot(storesCollection, (querySnapshot) => {
      const newStoresData: Istores[] = [];
      querySnapshot.forEach((doc) => {
        const storeData = {
          id: doc.id,
          ...(doc.data() as Omit<Istores, "id">),
        };
        newStoresData.push(storeData);
      });
      setStoresData(newStoresData); // Update StoresData state variable
    });

    return () => {
      unsubscribe(); //Prevents memory leaks and unnecessary resource consuption.
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${className}`}>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-xl font-semibold `}>Today's offers</h2>
        <Link to="offers" className="bg-gray-200 rounded-full p-1 h-67 w-67">
          <RightArrow />
        </Link>
      </div>

      {storesData.length === 0 ? (
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
    </div>
  );
};

export default Allstores;
