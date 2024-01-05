import OrderCard from "../components/OrdersPageContent/OrderCard";
import fetchOrdersFromFirestore from "../firestoreData/fetchingOrderData";
import { IndexRouteObject, useLoaderData } from "react-router-dom";
import { finalData } from "../firestoreData/sendingUserData";
import LoadingIndicator from "../components/UI/Animations/LoadingIndicator";

const OrderPage = () => {
  const orderData = useLoaderData();
  const prevOrdersData = orderData as finalData[];

  return (
    <main className="lg:mt-[150px] m-4 lg:p-4">
      <h2 className="font-bold text-2xl">Past Orders</h2>

      <div className="divide-y-2">
        {prevOrdersData.map((order, index) => (
          <OrderCard key={index} {...order.orderDetails} />
        ))}
        {prevOrdersData.length === 0 && (
          <span className="pt-[50px]">
            Place an order first to see it here!
          </span>
        )}
      </div>
    </main>
  );
};

export default OrderPage;

export const loader: IndexRouteObject["loader"] = async (): Promise<any> => {
  try {
    const data = await fetchOrdersFromFirestore(); // Execute StoreList function to get store data
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
