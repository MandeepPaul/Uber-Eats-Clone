import DeliveryEstimateSection from "../components/CheckoutPageContent/DeliveryType/DeliverEstimateSection";
import Address from "../components/CheckoutPageContent/Address/Address";
import OrderSummary from "../components/CheckoutPageContent/Order/OrderSummary";
import { useAppSelector } from "../types/hooks";

const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const { restName, restImg, totalAmount, totalQuantity, cartItemList } = cart;
  return (
    <main className="bg-gray-100 font-ubermove space-y-2">
      <Address />
      <DeliveryEstimateSection />
      <OrderSummary />
    </main>
  );
};

export default CheckoutPage;
