import { StringMappingType } from "typescript";
import { Istores } from "../../../../types/incomingDataType";
import { useAppSelector } from "../../../../types/hooks";
import { findItemIndexById } from "../../../../utility/findItemIndexById";
import Store from "./Store";

const RenderStores: React.FC<{
  storeData: Istores[];
  isGrid: boolean;
  className?: StringMappingType;
}> = ({ storeData, isGrid, className }) => {
  const favStoreList = useAppSelector((state) => state.favSlice);

  return (
    <ul
      className={
        isGrid
          ? `lg:grid lg:grid-cols-3 lg:gap-4 ${className}`
          : `flex justify-start gap-4 pb-3 overflow-x-auto`
      }
    >
      {storeData.map((store) => (
        <li
          key={store.id}
          className={
            isGrid ? "mt-4" : "mt-4 flex-shrink-0 w-[85%] md:w-[40%] lg:w-[32%]"
          }
        >
          <Store
            favFlag={findItemIndexById(store.id, favStoreList.list).isPresent}
            {...store}
          />
        </li>
      ))}
    </ul>
  );
};

export default RenderStores;
