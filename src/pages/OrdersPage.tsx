import OrderCard from "../components/OrdersPageContent/OrderCard";

const OrderPage = () => {
  return (
    <main className="lg:mt-[150px] m-4 lg:p-4">
      <h2 className="font-bold text-2xl">Past Orders</h2>
      <div className="divide-y-2">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </main>
  );
};

export default OrderPage;
