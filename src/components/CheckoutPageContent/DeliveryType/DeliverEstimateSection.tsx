import ReusableSection from "./ReusableSection";

const DeliveryEstimateSection = () => {
  return (
    <section className="bg-white px-4 py-2">
      <h2 className="text-2xl lg:text-3xl font-semibold pb-3">
        Delivery estimate
      </h2>
      <div className="space-y-2 ">
        <ReusableSection />
        <ReusableSection />
        <ReusableSection />
      </div>
    </section>
  );
};

export default DeliveryEstimateSection;
