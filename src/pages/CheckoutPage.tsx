import DeliveryEstimateSection from "../components/CheckoutPageContent/DeliveryType/DeliverEstimateSection";
import Address from "../components/CheckoutPageContent/Address/Address";
import OrderSummary from "../components/CheckoutPageContent/Order/OrderSummary";
import { useAppSelector } from "../types/hooks";

const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart);

  // const {
  //   restName,
  //   restImg,
  //   deliveryFee,
  //   totalAmount,
  //   totalQuantity,
  //   cartItemList,
  // } = cart;
  return (
    <main className="bg-gray-100 font-ubermove space-y-2">
      <Address />
      <DeliveryEstimateSection />
      <OrderSummary {...cart} />
    </main>
  );
};

export default CheckoutPage;
