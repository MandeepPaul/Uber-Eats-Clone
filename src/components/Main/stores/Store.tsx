import { Link } from "react-router-dom";

import { FavHeartIcon, trophyIcon } from "../../../SVG/svgIcon";
import { Istores } from "../../../tempData/StoreList";

import Card from "../../UI/Card";
import CardSection from "./CardSection";
import Button from "../../UI/Button";

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
      <Card className={`h-[150px] relative rounded-lg`} url={url}>
        {offer && (
          <div className="bg-green-700 absolute top-3 rounded-r-full text-sm text-white px-2 flex items-center gap-1 shadow-sm">
            {trophyIcon}
            {offer}
          </div>
        )}
        <Button className="absolute top-3 right-3">
          <FavHeartIcon
            width="32px"
            height="32px"
            className="hover:fill-white"
          />
        </Button>
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
