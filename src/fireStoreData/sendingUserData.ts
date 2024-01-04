import { collection, addDoc } from "firebase/firestore";
import { itemOrdered } from "../store/Slices/cartSlice";
import { userDetails } from "../store/Slices/userSlice";
import db from "../firebase";

export type finalData = {
  userInfo: userDetails;
  orderDetails: itemOrdered;
};

// Function to save order details to Firestore
const saveOrderToFirestore = async (order: itemOrdered, user: userDetails) => {
  try {
    const finalOrder: finalData = {
      userInfo: user,
      orderDetails: order,
    };
    const ordersRef = collection(db, "orders");
    await addDoc(ordersRef, finalOrder);
    console.log("Order successfully saved to Firestore");
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
  }
};

export default saveOrderToFirestore;
