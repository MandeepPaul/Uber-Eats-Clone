type item = {
  key: string;
  title: string;
  url: string;
}[];

const DUMMY_CATEGORIES: item = [
  {
    key: "i1",
    title: "Deals",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
  },
  {
    key: "i2",
    title: "Grocery",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png",
  },
  {
    key: "i3",
    title: "Convenience",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
  },
  {
    key: "i4",
    title: "Indian",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/indian.png",
  },
  {
    key: "i5",
    title: "Alcohol",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
  },
  {
    key: "i6",
    title: "Pharmacy",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png",
  },
  {
    key: "i7",
    title: "Baby",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png",
  },
  {
    key: "i8",
    title: "Pet Supplies",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png",
  },
  {
    key: "i9",
    title: "Flowers",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png",
  },
  {
    key: "i10",
    title: "Speciality Foods",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png",
  },
  {
    key: "i11",
    title: "Coffee and Tea",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png",
  },
];

const Categories: React.FC<{ className?: string }> = (props) => {
  return (
    <ul
      className={`flex overflow-x-auto overflow-y-hidden space-x-4 py-2 font-playpen lg:mt-[100px] lg:justify-center ${props.className}`}
    >
      {DUMMY_CATEGORIES.map((item) => (
        <li
          key={item.key}
          className="flex flex-col h-auto w-[68px] items-center flex-shrink-0"
        >
          <img src={item.url} alt={item.title} className="h-[65px] w-full" />
          <span className=" h-auto w-full text-center font-title text-sm">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
