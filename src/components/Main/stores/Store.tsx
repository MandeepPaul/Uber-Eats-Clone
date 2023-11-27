import { Link } from "react-router-dom";

import { favHeartIcon, trophyIcon } from "../../../SVG/svgIcon";
import { Istores } from "./Allstores";

import Card from "../../UI/Card";
import CardSection from "./CardSection";

interface StoreDetailsProps
  extends Pick<
    Istores,
    "name" | "rating" | "deliveryFee" | "time" | "offer" | "url"
  > {
  className?: string;
}

const Store: React.FC<StoreDetailsProps> = ({
  url,
  name,
  offer,
  rating,
  deliveryFee,
  time,
  className,
}) => {
  return (
    <Link to="stores" className={`${className}`}>
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
    </Link>
  );
};

export default Store;
