import Card from "../../../UI/Card";
import { ThumbsUpIcon } from "../../../../SVG/svgIcon";
import { MenuItem as MenuItemType } from "../../../../tempData/MenuList";

const MenuItem: React.FC<MenuItemType> = ({
  name,
  price,
  calories,
  recommended,
  description,
}) => (
  <div className="min-h-[126px] flex justify-between items-center p-2 lg:flex-col-reverse lg:justify-end lg:items-start lg:gap-1 lg:grow lg:min-h-[320px] hover:shadow-xl">
    {/* Individual Card */}
    <div className="overflow-hidden">
      <span className="text-base font-medium lg:text-lg">{name}</span>
      <div className="flex gap-1 font-thin lg:flex-col lg:text-base">
        <div>
          <span>{`$${price} `}</span>
          <span className="text-gray-500">&#8226; {`${calories} Cal.`}</span>
        </div>
        <div className="flex items-center max-w-[70px] gap-1 lg:bg-stone-200 lg:rounded-full lg:justify-center">
          <span className="lg:hidden">&#8226;</span>
          <ThumbsUpIcon height="14px" fill="#000000" />
          <span>{`${recommended}%`}</span>
        </div>
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
      <div className="absolute right-1 bottom-1 bg-white w-7 h-7 flex justify-center items-center rounded-full lg:hidden">
        <span className="self-center text-2xl">+</span>
      </div>
    </Card>
  </div>
);

export default MenuItem;
