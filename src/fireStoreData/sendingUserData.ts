import { collection, addDoc } from "firebase/firestore";
import { itemOrdered } from "../store/Slices/cartSlice";
import { userDetails } from "../store/Slices/userSlice";
import db from "../firebase";

export type finalData = {
  orderDetails: itemOrdered;
  userInfo: userDetails & {
    orderTime: string;
  };
};

// Function to save order details to Firestore
const saveOrderToFirestore = async (order: itemOrdered, user: userDetails) => {
  try {
    const currentDate = new Date(); // Replace this with your desired date
    // Using toLocaleString() method with options for formatting
    const formattedDate = currentDate.toLocaleString("en-US", {
      month: "short", // Short month name (e.g., Jan, Feb)
      day: "numeric", // Day of the month (e.g., 1, 2, ...)
      hour: "numeric", // Hour (e.g., 1, 2, ... 12)
      minute: "numeric", // Minute (e.g., 0, 15, 30, ...)
      hour12: true, // Use 12-hour clock
    });

    const userData = {
      ...user,
      orderTime: formattedDate,
    };

    const finalOrder: finalData = {
      orderDetails: order,
      userInfo: userData,
    };
    const ordersRef = collection(db, "orders");
    await addDoc(ordersRef, finalOrder);
    console.log("Order successfully saved to Firestore");
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
    return { error: error };
  }
};

export default saveOrderToFirestore;
