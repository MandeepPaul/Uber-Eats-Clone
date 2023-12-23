import { MenuCategory } from "../../../../tempData/StoreList";

const CategorySection: React.FC<{ menu: MenuCategory[] }> = ({ menu }) => {
  return (
    <section className="w-[500px] pl-6 pt-5 text-lg sticky left-0 top-[80px] h-[600px] hidden lg:flex">
      <ul className="flex flex-col gap-4">
        {menu.map(({ id, itemCategory }) => (
          <li key={id} className="text-slate-900">
            <a
              href={`#${itemCategory}`}
              className="active:underline active:underline-offset-1"
            >
              {itemCategory}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
