import { Link } from "react-router-dom";
import { rightArrow } from "../../../SVG/svgIcon";
import Store from "./Store";

export interface Istores {
  id: string;
  url: string;
  offer?: string;
  name: string;
  deliveryFee: number;
  time: number;
  rating: number;
}

let DUMMY_STORES: Istores[] = [
  {
    id: "s1",
    url: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
    name: "INDIAN FOOD CORNER",
    deliveryFee: 0.99,
    time: 25,
    rating: 4.4,
  },
  {
    id: "s2",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/dd992b0b66f9ffcd3ee723ed33b9d371/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "KFC",
    deliveryFee: 0.99,
    time: 15,
    rating: 4.2,
  },
  {
    id: "s3",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/e1244ff68a32fe72d9ee6345c724dcf6/719c6bd2757b08684c0faae44d43159d.jpeg",
    name: "A&W",
    offer: "Save on Select Items",
    deliveryFee: 0.99,
    time: 15,
    rating: 4.3,
  },
  {
    id: "s4",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s5",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s6",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/baa6bb26a3b7f19cb3d9efa7ef36013a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Tim Hortons",
    deliveryFee: 1.99,
    time: 10,
    rating: 4.5,
  },
  {
    id: "s7",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s8",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s9",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s10",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s11",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s12",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s13",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s14",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s15",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s16",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s17",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s18",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
  {
    id: "s19",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/fc38832355b731999eb24fc2e7880ad1/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "McDonald's (Chancellor)",
    offer: "Buy 1, Get 1 Free",
    deliveryFee: 0.99,
    time: 10,
    rating: 4.1,
  },
  {
    id: "s20",
    url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f52ccdf081506d52abfd837bdc5e263/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    name: "Wendy's",
    deliveryFee: 1.99,
    time: 15,
    rating: 4.4,
  },
];

let storeWithDeals = DUMMY_STORES.filter((store) => store.offer);

export { storeWithDeals };

const Allstores: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-xl font-semibold `}>Today's offers</h2>
        <Link to="offers" className="bg-gray-200 rounded-full p-2">
          {rightArrow}
        </Link>
      </div>

      <ul className={`flex justify-between gap-4 pb-3 overflow-x-auto`}>
        {storeWithDeals.map(
          ({ id, url, offer, name, deliveryFee, time, rating }) => (
            <li
              key={id}
              className="mt-4 flex-shrink-0 w-[85%] md:w-[40%] lg:w-[32%]"
            >
              <Store
                url={url}
                offer={offer}
                name={name}
                deliveryFee={deliveryFee}
                time={time}
                rating={rating}
              />
            </li>
          )
        )}
      </ul>
      <ul className={`lg:grid lg:grid-cols-3 lg:gap-4 ${className}`}>
        {DUMMY_STORES.map(
          ({ id, url, offer, name, deliveryFee, time, rating }) => (
            <li key={id} className="mt-4">
              <Store
                url={url}
                offer={offer}
                name={name}
                deliveryFee={deliveryFee}
                time={time}
                rating={rating}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Allstores;
