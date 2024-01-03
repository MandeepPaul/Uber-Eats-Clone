import ReusableSection from "./ReusableSection";
import {
  CalendarIcon,
  LocationPinSVG,
  lighteningIcon,
} from "../../../SVG/svgIcon";

const DeliveryEstimateSection: React.FC<{
  deliveryTime: string | number;
}> = ({ deliveryTime }) => {
  return (
    <section className="bg-white px-4 py-2">
      <h2 className="text-2xl lg:text-3xl font-semibold pb-3">
        Delivery estimate
      </h2>
      <div className="space-y-2 ">
        <ReusableSection
          svg={lighteningIcon}
          type="Priority"
          deliveryTime={"10-25 min"}
        />
        <ReusableSection
          svg={LocationPinSVG}
          type="Standard"
          deliveryTime={deliveryTime}
        />
        <ReusableSection
          svg={CalendarIcon}
          type="Schedule"
          deliveryTime={"Select a time"}
        />
      </div>
    </section>
  );
};

export default DeliveryEstimateSection;
