import { DUMMY_CATEGORIES } from "../../../tempData/DummyCategories";

const Categories: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <ul
        className={`flex overflow-x-auto overflow-y-hidden space-x-4 py-2 lg:mt-[120px] lg:justify-center ${props.className}`}
      >
        {DUMMY_CATEGORIES.map((item) => (
          <li
            key={item.key}
            className="flex flex-col h-auto w-[68px] items-center flex-shrink-0 hover:scale-110 "
          >
            <img src={item.url} alt={item.title} className="h-[65px] w-full" />
            <span className=" h-auto w-full text-center font-title text-sm">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
      <hr className="hidden lg:block border-t-2 border-gray-200 mx-10" />
    </>
  );
};

export default Categories;
