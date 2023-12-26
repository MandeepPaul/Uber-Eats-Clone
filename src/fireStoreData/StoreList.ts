// Import necessary Firebase Firestore modules based on your setup
import {
  collection,
  getDoc,
  getDocs,
  QuerySnapshot,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  CollectionReference,
} from "firebase/firestore";
import db from "../firebase";

export type CondimentsList = {
  id: string;
  name: string;
  price?: number;
  extraCalories?: number;
  special?: string;
};

export type Condiments = {
  id: string;
  title: string;
  limit: number;
  list: CondimentsList[];
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  calories?: number | string;
  recommended?: number;
  description?: string;
  imageURL: string;
  condimentsReference: DocumentReference<DocumentData>;
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

//Fetch condiments within each item.
export async function fetchCondiments(
  documentRef: DocumentReference
): Promise<Condiments[]> {
  const condiments: Condiments[] = [];
  try {
    const documentSnapshot: DocumentSnapshot = await getDoc(documentRef);

    const condimentsRef: CollectionReference<Condiments> | undefined =
      documentSnapshot.data()?.condiments;

    if (condimentsRef) {
      const condSnapshot: QuerySnapshot<DocumentData> = await getDocs(
        collection(condimentsRef, "condiments")
      );

      for (const listDoc of condSnapshot.docs) {
        const condData: Condiments = {
          id: listDoc.id,
          title: listDoc.data().title,
          limit: listDoc.data().limit,
          list: [],
        };
        let list = [];
        //If there is a reference to commonCondiments
        if (listDoc.data().commonCondiment) {
          const commonCondimentRef: DocumentReference =
            listDoc.data().commonCondiment;

          // Get the data from the referenced document in commonCondimentRef
          const commonCondimentSnapshot: DocumentSnapshot = await getDoc(
            commonCondimentRef
          );

          const { title, limit } = commonCondimentSnapshot.data() as {
            title: string;
            limit: number;
          };
          condData.title = title;
          condData.limit = limit;
          const commonSnapshot: QuerySnapshot<DocumentData> = await getDocs(
            collection(listDoc.data().commonCondiment, "list")
          );
          const sampleArray = commonSnapshot.docs.map((eachItem) => ({
            id: eachItem.id,
            ...(eachItem.data() as Omit<CondimentsList, "id">),
          }));
          list = sampleArray;
        } else {
          list = await fetchCondimentList(listDoc.ref); // Call the fetchCondimentList function to populate the list
        }
        condData.list = list;
        condiments.push(condData);
      }
    }
  } catch (error) {
    console.error("Error accessing referenced document:", error);
    throw error;
  }

  return condiments;
}

async function fetchCondimentList(
  condRef: DocumentReference
): Promise<CondimentsList[]> {
  const condListSnapshot: QuerySnapshot<DocumentData> = await getDocs(
    collection(condRef, "list")
  );

  if (condListSnapshot.docs.length === 0) {
    return [];
  }

  return condListSnapshot.docs.map((eachCondData) => ({
    id: eachCondData.id,
    ...(eachCondData.data() as Omit<CondimentsList, "id">),
  }));
}

// Fetch items within a category
const fetchItems = async (
  categoryRef: DocumentReference
): Promise<MenuItem[]> => {
  const items: MenuItem[] = [];

  try {
    const itemsSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(categoryRef, "items")
    );

    for (const itemDoc of itemsSnapshot.docs) {
      const itemData: MenuItem = {
        id: itemDoc.id,
        ...(itemDoc.data() as Omit<MenuItem, "id">),
        condimentsReference: itemDoc.ref,
      };
      items.push(itemData);
    }
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }

  return items;
};

// Fetch menu content for a specific store by ID
const fetchMenuContent = async (
  storeRef: DocumentReference
): Promise<MenuCategory[]> => {
  const menuContent: MenuCategory[] = [];

  try {
    const menuContentSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(storeRef, "menuContent")
    );

    for (const categoryDoc of menuContentSnapshot.docs) {
      const categoryData: MenuCategory = {
        id: categoryDoc.id,
        ...(categoryDoc.data() as Omit<MenuCategory, "id">),
        items: await fetchItems(categoryDoc.ref),
      };

      if (categoryData.items.length > 0) {
        menuContent.push(categoryData);
      }
    }
  } catch (error) {
    console.error("Error fetching menu content:", error);
    throw error;
  }

  return menuContent;
};

// Fetch store data including menu content by ID
export const fetchMenuData = async (
  id: string | undefined
): Promise<storeDataType[]> => {
  if (id === undefined) {
    throw new Error("Invalid store!");
  }

  const storesCollection = collection(db, "stores");
  const storeDataIncMenu: storeDataType[] = [];

  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      storesCollection
    );

    for (const doc of querySnapshot.docs) {
      if (doc.id === id) {
        const storeData: storeDataType = {
          id: doc.id,
          ...(doc.data() as Omit<storeDataType, "id">),
          menuContent: await fetchMenuContent(doc.ref), // Call the fetchMenuContent function to populate the menuContent.
        };

        if (storeData.menuContent.length > 0) {
          storeDataIncMenu.push(storeData);
        }

        break; // No need to continue looping once the store is found
      }
    }

    return storeDataIncMenu;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};
