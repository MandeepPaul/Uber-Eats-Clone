import { favHeartIcon, trophyIcon } from "../../../SVG/svgIcon";
import Card from "../../UI/Card";
import { Istores } from "./Allstores";
import CardSection from "./CardSection";

const Store: React.FC<Istores> = ({
  url,
  name,
  offer,
  rating,
  deliveryFee,
  time,
}) => {
  return (
    <a href="..">
      <Card className={`h-[150px] relative`} url={url}>
        {offer && (
          <div className="bg-green-700 absolute top-3 rounded-r-full text-sm text-white px-2 flex items-center gap-1 shadow-sm">
            {trophyIcon}
            {offer}
          </div>
        )}
        {favHeartIcon}
      </Card>
      <CardSection
        name={name}
        rating={rating}
        deliveryFee={deliveryFee}
        time={time}
      />
    </a>
  );
};

export default Store;
