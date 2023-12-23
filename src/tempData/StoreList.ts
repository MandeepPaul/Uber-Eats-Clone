// Import necessary Firebase Firestore modules based on your setup
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import db from "../firebase";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  calories?: number | string;
  recommended?: number;
  description?: string;
  imageURL: string;
};

export type MenuCategory = {
  id: string;
  itemCategory: string;
  items: MenuItem[];
};

export interface Istores {
  id: string;
  url: string;
  offer?: string;
  name: string;
  deliveryFee: number;
  time: number;
  rating: number;
  logoURL?: string;
  category?: string;
}

export interface storeDataType extends Istores {
  menuContent: MenuCategory[];
}

export const fetchStoreData = async (): Promise<Istores[]> => {
  const storesCollection = collection(db, "stores");
  const newStoresData: Istores[] = [];

  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      storesCollection
    );

    for (const doc of querySnapshot.docs) {
      const storeData: Istores = {
        id: doc.id,
        ...(doc.data() as Omit<Istores, "id">),
      };
      newStoresData.push(storeData);
    }
    return newStoresData;
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error;
  }
};

export const fetchMenuData = async (
  id: string | undefined
): Promise<storeDataType[]> => {
  if (id === undefined) return Promise.reject(new Error("Invalid store!"));

  const storesCollection = collection(db, "stores");
  const storeDataIncMenu: storeDataType[] = []; //This array will get populated with store information with sub array of MenuCategory that again nested with menuItems array in each category.

  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      storesCollection
    );

    for (const doc of querySnapshot.docs) {
      if (doc.id === id) {
        const storeData: storeDataType = {
          id: doc.id,
          ...(doc.data() as Omit<storeDataType, "id">),
        };

        const menuContentRef = collection(doc.ref, "menuContent");
        const menu: MenuCategory[] = []; //Sub-Array that contains object with properties id, itemCategory and items[].

        const menuContentSnapshot: QuerySnapshot<DocumentData> = await getDocs(
          menuContentRef
        );

        for (const categoryDoc of menuContentSnapshot.docs) {
          const categoryData: MenuCategory = {
            id: categoryDoc.id,
            ...(categoryDoc.data() as Omit<MenuCategory, "id">),
          };

          const itemsRef = collection(categoryDoc.ref, "items");
          const itemsSnapshot: QuerySnapshot<DocumentData> = await getDocs(
            itemsRef
          );

          //Nested array with menu item details.
          const items: MenuItem[] = itemsSnapshot.docs.map((itemDoc) => {
            const itemData: MenuItem = {
              id: itemDoc.id,
              ...(itemDoc.data() as Omit<MenuItem, "id">),
            };
            return itemData;
          });

          categoryData.items = items;
          menu.push(categoryData as MenuCategory);
        }

        if (storeData && menu.length > 0) {
          storeData.menuContent = menu;
          storeDataIncMenu.push(storeData as storeDataType);
        }

        break;
      }
    }

    return storeDataIncMenu;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};
