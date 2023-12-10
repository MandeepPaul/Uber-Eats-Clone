import { StringMappingType } from "typescript";
import { Istores } from "../../../../tempData/StoreList";
import Store from "./Store";

const RenderStores: React.FC<{
  storeData: Istores[];
  isGrid: boolean;
  className?: StringMappingType;
}> = ({ storeData, isGrid, className }) => {
  return (
    <ul
      className={
        isGrid
          ? `lg:grid lg:grid-cols-3 lg:gap-4 ${className}`
          : `flex justify-start gap-4 pb-3 overflow-x-auto`
      }
    >
      {storeData.map(({ id, url, offer, name, deliveryFee, time, rating }) => (
        <li
          key={id}
          className={
            isGrid ? "mt-4" : "mt-4 flex-shrink-0 w-[85%] md:w-[40%] lg:w-[32%]"
          }
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
      ))}
    </ul>
  );
};

export default RenderStores;
