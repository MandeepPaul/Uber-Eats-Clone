import CategorySection from "../SideNav/CategorySection";
import MenuItem from "./MenuItem";
import { MenuCategory } from "../../../../tempData/StoreList";

const MenuContent: React.FC<{ categoryList: MenuCategory[] }> = ({
  categoryList,
}) => {
  return (
    <div className="lg:flex">
      <CategorySection menu={categoryList} />

      <div className="divide-y-2 lg:divide-y-0 lg:col-span-3">
        {categoryList.map((eachCategory) => (
          <div key={eachCategory.id} className="px-4 pt-4">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              {eachCategory.itemCategory}
            </h2>
            <div
              id={eachCategory.itemCategory}
              className="gap-1 divide-y lg:divide-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-4"
            >
              {eachCategory.items.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContent;
