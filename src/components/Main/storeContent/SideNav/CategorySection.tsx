import { MenuCategory } from "../../../../tempData/MenuList";

const CategorySection: React.FC<{ menu: MenuCategory[] }> = ({ menu }) => {
  return (
    <section className="w-[500px] pl-6 pt-5 text-lg sticky left-0 top-[80px] h-[600px] hidden lg:flex">
      <ul className="flex flex-col gap-4">
        {menu.map(({ id, itemCategory }) => (
          <li key={id} className="text-slate-900">
            {itemCategory}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
