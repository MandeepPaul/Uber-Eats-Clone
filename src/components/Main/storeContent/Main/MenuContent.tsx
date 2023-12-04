import menu from "../../../../tempData/MenuList";
import CategorySection from "../SideNav/CategorySection";
import MenuItem from "./MenuItem";

const MenuContent = () => {
  return (
    <div className="lg:flex">
      <CategorySection menu={menu} />

      <div className="divide-y-2 lg:divide-y-0 lg:col-span-3">
        {menu.map((menuCategory) => (
          <div key={menuCategory.id} className="px-4 pt-4">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              {menuCategory.itemCategory}
            </h2>
            <div className="gap-1 divide-y lg:divide-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-4">
              {menuCategory.items.map((item) => (
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
