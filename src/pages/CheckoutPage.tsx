import DeliveryEstimateSection from "../components/CheckoutPageContent/DeliveryType/DeliverEstimateSection";
import Address from "../components/CheckoutPageContent/Address/Address";
import OrderSummary from "../components/CheckoutPageContent/Order/OrderSummary";
import Button from "../components/UI/Wrappers/Button";
import { useAppSelector } from "../types/hooks";

const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const placeOrderHandler = () => {};
  return (
    <main className="bg-gray-100 font-ubermove space-y-2 max-w-[768px] mx-auto lg:space-y-0 lg:grid lg:grid-cols-2">
      <Address />
      <DeliveryEstimateSection deliveryTime={cart.deliveryTime} />
      <OrderSummary {...cart} />
      <div className="bg-white bg-opacity-50 px-4 sticky lg:static bottom-2 w-full lg:col-span-2 lg:bg-opacity-100 lg:border-y-2 lg:mb-10">
        <Button
          onClick={placeOrderHandler}
          className="bg-black w-full py-4 my-6 rounded-lg md:text-lg lg:text-xl text-white hover:opacity-75"
        >
          Place Order
        </Button>
      </div>
    </main>
  );
};

export default CheckoutPage;
