import { Link } from "react-router-dom";
import { rightArrow } from "../../../../SVG/svgIcon";
import Store from "./Store";
import DUMMY_STORES from "../../../../tempData/StoreList";

let storeWithDeals = DUMMY_STORES.filter((store) => store.offer);

export { storeWithDeals };

const Allstores: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-xl font-semibold `}>Today's offers</h2>
        <Link to="offers" className="bg-gray-200 rounded-full p-1 h-67 w-67">
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
