import db from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { finalData } from "./sendingUserData";
// Function to retrieve order details from Firestore
export const fetchOrdersFromFirestore = async () => {
  try {
    const ordersRef = collection(db, "orders");
    const orderedQuery = query(
      ordersRef,
      orderBy("userInfo.orderTime", "desc")
    );
    const querySnapshot = await getDocs(orderedQuery);

    const orders: finalData[] = [];

    querySnapshot.forEach((doc) => {
      // Retrieve data from each document
      const data = doc.data();
      orders.push(data as finalData);
    });

    return orders;
  } catch (error) {
    console.error("Error retrieving orders from Firestore:", error);
    return [];
  }
};

export default fetchOrdersFromFirestore;
