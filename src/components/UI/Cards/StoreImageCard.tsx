import { FavHeartIcon } from "../../../SVG/svgIcon";
import { Istores } from "../../../fireStoreData/StoreList";
import Card from "../Wrappers/ImageCard";

interface StoreDetailsProps
  extends Pick<
    Istores,
    "name" | "rating" | "deliveryFee" | "time" | "offer" | "url"
  > {
  className?: string;
}

const StoreImageCard: React.FC<StoreDetailsProps> = ({
  name,
  rating,
  deliveryFee,
  time,
  offer,
  url,
  className,
}) => {
  return (
    <div className={`flex gap-3 mt-3 ${className}`}>
      <Card
        className="rounded-xl min-h-[100px] min-w-[100px] relative"
        url={url}
      >
        <div className="absolute top-1.5 right-1.5">
          <FavHeartIcon
            className="hover:fill-white "
            width="32px"
            height="32px"
          />
        </div>
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
            {`$${deliveryFee} DeliveryFee `}
            <span className="text-gray-500">&#x2022;{` ${time}min`}</span>
          </p>
          <span className="text-sm font-medium truncate text-green-700">
            {`${offer}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreImageCard;
