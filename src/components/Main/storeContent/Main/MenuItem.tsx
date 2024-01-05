import { useState } from "react";
import ReactDOM from "react-dom";

import { ThumbsUpIcon } from "../../../../SVG/svgIcon";
import { MenuItem as MenuItemType } from "../../../../types/incomingDataType";
import { restDetails } from "../../../../types/outgoingDataType";
import ItemDetails from "../../../Overlays/Store/ItemDetails";
import Button from "../../../UI/Wrappers/Button";
import Card from "../../../UI/Wrappers/ImageCard";

const MenuItem: React.FC<{
  menuItems: MenuItemType;
  restaurantDetails: restDetails;
}> = ({ menuItems, restaurantDetails }) => {
  const {
    id,
    name,
    price,
    calories,
    recommended,
    description,
    imageURL,
    condimentsReference,
  } = menuItems;
  const [showItemDetail, setVisibility] = useState(false);

  const showItemDetailOverlay = () => {
    setVisibility(true);
  };

  return (
    <div className="group min-h-[126px] flex justify-between items-center p-2 lg:flex-col-reverse lg:justify-end lg:items-start lg:gap-1 lg:grow lg:min-h-[320px] lg:hover:shadow-xl">
      {/* Individual Card */}
      <div className="overflow-hidden lg:flex lg:flex-col lg:justify-start h-full">
        <span className="text-base flex-grow font-medium lg:text-lg">
          {name}
        </span>
        <div className="flex gap-1 font-thin lg:flex-col lg:text-base">
          <div>
            <span>{`$${price} `}</span>
            {calories && (
              <span className="text-gray-500">
                &#8226; {`${calories} Cal.`}
              </span>
            )}
          </div>
          {recommended && (
            <div className="flex items-center max-w-[70px] gap-1 lg:bg-stone-200 lg:rounded-full lg:justify-center">
              <span className="lg:hidden">&#8226;</span>
              <ThumbsUpIcon height="14px" fill="#000000" />
              <span>{`${recommended}%`}</span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-gray-500 pt-1 max-h-10 mr-1 truncate lg:hidden">
            {description}
          </p>
        )}
      </div>

      <Card
        onClick={showItemDetailOverlay}
        className="min-h-[100px] min-w-[100px] rounded-lg relative lg:min-h-[220px] lg:min-w-[200px] lg:max-w-[350px] lg:rounded-none lg:self-stretch"
        url={imageURL}
      >
        <Button className="absolute right-1 bottom-1 bg-white w-7 h-7 flex justify-center items-center rounded-full shadow-lg lg:hidden">
          <span className="self-center text-2xl">+</span>
        </Button>
        <Button className="hidden lg:group-hover:block bg-white p-2 rounded-full absolute bottom-2 left-1/2 transform translate-x-[-50%] border-2 border-gray-200">
          <span className="font-medium">Quick view</span>
        </Button>
      </Card>

      {showItemDetail &&
        ReactDOM.createPortal(
          <ItemDetails
            id={id}
            onReset={() => setVisibility(false)}
            name={name}
            calories={calories}
            price={price}
            recommended={recommended}
            description={description}
            imageURL={imageURL}
            condimentsReference={condimentsReference}
            restDetails={restaurantDetails}
          />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
};

export default MenuItem;
