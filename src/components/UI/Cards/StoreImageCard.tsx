import { FavHeartIcon } from "../../../SVG/svgIcon";
import { Istores } from "../../../types/incomingDataType";
import { useAppDispatch } from "../../../types/hooks";
import { favListActions } from "../../../store/Slices/favStores";
import Card from "../Wrappers/ImageCard";
import Button from "../Wrappers/Button";

interface StoreDetailsProps extends Istores {
  className?: string;
  favFlag: boolean;
}

const StoreImageCard: React.FC<StoreDetailsProps> = ({
  id,
  name,
  rating,
  deliveryFee,
  time,
  offer,
  url,
  className,
  favFlag,
}) => {
  const dispatch = useAppDispatch();

  const favListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default link behavior

    dispatch(favListActions.handleFavourite(id));
  };

  return (
    <div className={`flex gap-3 mt-3 ${className}`}>
      <Card
        className="rounded-xl min-h-[100px] min-w-[100px] relative"
        url={url}
      >
        <Button
          onClick={(event) => favListHandler(event)}
          className="absolute top-1.5 right-1.5"
        >
          <FavHeartIcon
            width="22px"
            height="22px"
            className={`hover:fill-white ${favFlag && "fill-white"}`}
          />
        </Button>
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
            {offer && `${offer}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreImageCard;
