import DeliveryEstimateSection from "../components/CheckoutPageContent/DeliveryType/DeliverEstimateSection";
import Address from "../components/CheckoutPageContent/Address/Address";
import OrderSummary from "../components/CheckoutPageContent/Order/OrderSummary";
import Button from "../components/UI/Wrappers/Button";

import saveOrderToFirestore from "../firestoreData/sendingUserData";

import { useAppSelector, useAppDispatch } from "../types/hooks";
import { useState } from "react";
import { initialState as cartInitialState } from "../store/Slices/cartSlice";
import { initialState as userInitialState } from "../store/Slices/userSlice";
import { cartActions } from "../store/Slices/cartSlice";
import { userActions } from "../store/Slices/userSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [isValid, setValidity] = useState(true);
  const [isSubmitting, setSubmit] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.userSlice);
  const orderType = cart.orderType;

  const placeOrderHandler = async () => {
    if (user.userAddress1 === "") {
      setValidity(false);
      return;
    }
    setSubmit("submitting");
    const currentDate = new Date(); // Replace this with your desired date
    // Using toLocaleString() method with options for formatting
    const formattedDate = currentDate.toLocaleString("en-US", {
      month: "short", // Short month name (e.g., Jan, Feb)
      day: "numeric", // Day of the month (e.g., 1, 2, ...)
      hour: "numeric", // Hour (e.g., 1, 2, ... 12)
      minute: "numeric", // Minute (e.g., 0, 15, 30, ...)
      hour12: true, // Use 12-hour clock
    });

    dispatch(userActions.setOrderTime(formattedDate));
    await saveOrderToFirestore(cart, user);

    // Clear the cart after placing an order.
    dispatch(cartActions.replaceCart(cartInitialState));
    dispatch(userActions.replaceInfo(userInitialState));
    navigate("../orders");
  };

  return (
    <main className="bg-gray-100 font-ubermove space-y-2 max-w-[768px] mx-auto lg:space-y-0 lg:grid lg:grid-cols-2">
      <Address
        className={`${orderType === "PICKUP" ? "lg:col-span-2 pr-[52%]" : ""}`}
      />
      {orderType === "DELIVERY" && (
        <DeliveryEstimateSection deliveryTime={cart.deliveryTime} />
      )}
      <OrderSummary cart={cart} className="lg:col-span-2" />
      <div className="bg-white bg-opacity-50 px-4 sticky lg:static bottom-2 w-full lg:col-span-2 lg:bg-opacity-100 lg:border-y-2 lg:mb-10">
        {!isValid ? (
          <span className="text-sm text-red-600">*Enter Delivery Details</span>
        ) : (
          ""
        )}
        <Button
          onClick={placeOrderHandler}
          className="bg-black w-full py-4 my-6 rounded-lg md:text-lg lg:text-xl text-white hover:opacity-75"
        >
          {isSubmitting !== "" ? `Placing Order...` : `Place Order`}
        </Button>
      </div>
    </main>
  );
};

export default CheckoutPage;
