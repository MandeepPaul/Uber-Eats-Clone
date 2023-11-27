import { favHeartIcon } from "../../../SVG/svgIcon";
import { Istores } from "../../Main/stores/Allstores";
import Card from "../Card";

interface StoreDetailsProps
  extends Pick<
    Istores,
    "name" | "rating" | "deliveryFee" | "time" | "offer" | "url"
  > {}

const HorizontalCard: React.FC<StoreDetailsProps> = ({
  name,
  rating,
  deliveryFee,
  time,
  offer,
  url,
}) => {
  return (
    <div className="flex gap-3 mt-3">
      <Card
        className="rounded-xl min-h-[100px] min-w-[100px] relative"
        url={url}
      >
        <div className="absolute -top-1.5 -right-1.5 ">{favHeartIcon}</div>
      </Card>

      <div className="flex-grow overflow-hidden">
        <div className="flex flex-col gap-1 overflow-hidden">
          <div className="flex justify-between">
            <span className="font-medium truncate">{`${name}`}</span>

            <span className="bg-stone-200 text-sm h-7 w-7 p-1 rounded-full">
              {`${rating}`}
            </span>
          </div>

          <img
            src="https://cn-geo1.uber.com/static/mobile-content/membership/uberone_ccc3x.png"
            alt="uber_one_logo"
            className="h-4 w-4"
          />
          <p className="text-sm truncate">
            {`$${deliveryFee} DeliveryFee`}
            <span className="text-gray-400">&#x2022;{` ${time}min`}</span>
          </p>
          <span className="text-sm font-medium truncate text-green-700">
            {`${offer}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
