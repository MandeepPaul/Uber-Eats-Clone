import { Link } from "react-router-dom";

import { FavHeartIcon, TrophyIcon } from "../../../../SVG/svgIcon";
import { Istores } from "../../../../types/incomingDataType";
import { useAppDispatch } from "../../../../types/hooks";
import { favListActions } from "../../../../store/Slices/favStores";

import Card from "../../../UI/Wrappers/ImageCard";
import CardSection from "./CardSection";
import Button from "../../../UI/Wrappers/Button";

interface StoreDetailsProps extends Istores {
  className?: string;
  favFlag: boolean;
}

const Store: React.FC<StoreDetailsProps> = (props) => {
  const {
    id,
    url,
    name,
    offer,
    rating,
    deliveryFee,
    time,
    className,
    favFlag,
  } = props;
  const dispatch = useAppDispatch();

  const favListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default link behavior

    dispatch(favListActions.handleFavourite(id));
  };

  return (
    <Link to={`stores/${id}`} className={`${className}`}>
      <Card className={`h-[150px] relative rounded-lg`} url={url}>
        {offer && (
          <div className="bg-green-700 absolute top-3 rounded-r-full text-sm text-white px-2 flex items-center gap-1 shadow-sm">
            <TrophyIcon />
            {offer}
          </div>
        )}
        <Button
          onClick={(event) => favListHandler(event)}
          className="absolute top-3 right-3"
        >
          <FavHeartIcon
            width="32px"
            height="32px"
            className={`hover:fill-white ${favFlag && "fill-white"}`}
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
