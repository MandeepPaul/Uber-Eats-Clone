import { useState } from "react";
import ReactDOM from "react-dom";

import { ThumbsUpIcon } from "../../../../SVG/svgIcon";
import { MenuItem as MenuItemType } from "../../../../tempData/MenuList";
import ItemDetails from "../../../Overlays/Store/ItemDetails";
import Button from "../../../UI/Wrappers/Button";
import Card from "../../../UI/Wrappers/ImageCard";

const MenuItem: React.FC<MenuItemType> = ({
  name,
  price,
  calories,
  recommended,
  description,
}) => {
  const [showItemDetail, setVisibility] = useState(false);

  const showItemDetailOverlay = () => {
    setVisibility(true);
  };

  return (
    <div className="group min-h-[126px] flex justify-between items-center p-2 lg:flex-col-reverse lg:justify-end lg:items-start lg:gap-1 lg:grow lg:min-h-[320px] lg:hover:shadow-xl">
      {/* Individual Card */}
      <div className="overflow-hidden lg:flex lg:flex-col lg:justify-between h-full">
        <span className="text-base font-medium lg:text-lg">{name}</span>
        <div className="flex gap-1 font-thin lg:flex-col lg:text-base">
          <div>
            <span>{`$${price} `}</span>
            <span className="text-gray-500">&#8226; {`${calories} Cal.`}</span>
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
        className="min-h-[100px] min-w-[100px] rounded-lg relative lg:min-h-[220px] lg:min-w-[200px] lg:max-w-[350px] lg:rounded-none lg:self-stretch"
        url="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2IzOGRiNWNjMGYwOTUyMjA0YjY2ZjkyMDUzNTY4MjcvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="
      >
        <Button
          onClick={showItemDetailOverlay}
          className="absolute right-1 bottom-1 bg-white w-7 h-7 flex justify-center items-center rounded-full lg:hidden"
        >
          <span className="self-center text-2xl">+</span>
        </Button>
        <Button
          onClick={showItemDetailOverlay}
          className="hidden lg:group-hover:block bg-white p-2 rounded-full absolute bottom-2 left-1/2 transform translate-x-[-50%] border-2 border-gray-200"
        >
          <span className="font-medium">Quick view</span>
        </Button>
      </Card>

      {showItemDetail &&
        ReactDOM.createPortal(
          <ItemDetails
            onReset={() => setVisibility(false)}
            name={name}
            calories={calories}
            price={price}
            recommended={recommended}
            description={description}
          />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
};

export default MenuItem;
