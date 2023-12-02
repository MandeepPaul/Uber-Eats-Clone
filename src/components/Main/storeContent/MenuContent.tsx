import Card from "../../UI/Card";
import menu from "../../../tempData/MenuList";
import { thumbsUp } from "../../../SVG/svgIcon";

const MenuContent = () => {
  return (
    <div className="divide-y-2">
      {menu.map((menu) => (
        <div key={menu.id} className="px-4 pt-4">
          <h2 className="text-2xl font-semibold">{menu.itemCategory}</h2>

          <div className="divide-y ">
            {menu.items.map(
              ({ name, price, calories, recommended, description }) => (
                <div className="h-[126px] flex justify-between items-center px-2">
                  <div className="overflow-hidden">
                    <span className="text-base font-medium">{name}</span>
                    <div className="flex gap-1 font-thin">
                      <span>{`$${price}`}</span>
                      <span className="text-gray-500">
                        &#8226; {`${calories} Cal.`} &#8226;
                      </span>
                      <div className="flex items-center gap-1">
                        {thumbsUp}
                        <span>{`${recommended}%`}</span>
                      </div>
                    </div>
                    {description && (
                      <p className="text-gray-500 pt-1 max-h-10 mr-1 truncate">
                        {description}
                      </p>
                    )}
                  </div>
                  <Card
                    className="min-h-[100px] min-w-[100px] relative"
                    url="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2IzOGRiNWNjMGYwOTUyMjA0YjY2ZjkyMDUzNTY4MjcvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="
                  >
                    <div className="absolute right-1 bottom-1 bg-white w-7 h-7 flex justify-center items-center rounded-full lg:hidden">
                      <span className="self-center  text-2xl">+</span>
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuContent;
