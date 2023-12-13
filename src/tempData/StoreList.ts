import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";

export interface Istores {
  id: string;
  url: string;
  offer?: string;
  name: string;
  deliveryFee: number;
  time: number;
  rating: number;
}

const fetchStoreData = (): Promise<Istores[]> => {
  return new Promise((resolve, reject) => {
    const storesCollection = collection(db, "stores");
    const newStoresData: Istores[] = [];

    onSnapshot(
      storesCollection,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const storeData = {
            id: doc.id,
            ...(doc.data() as Omit<Istores, "id">),
          };
          newStoresData.push(storeData);
        });

        resolve(newStoresData);
      },
      reject
    );
  });
};

const StoreList = async (): Promise<Istores[] | Error> => {
  try {
    const storesData = await fetchStoreData();
    return storesData;
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw new Error(`Error fetching store data:", ${error}`);
  }
};

export default StoreList;
