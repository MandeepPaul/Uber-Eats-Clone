import { Istores } from "../../../types/incomingDataType";
import { useAppSelector } from "../../../types/hooks";
import { findItemIndexById } from "../../../utility/findItemIndexById";
import Store from "../HomeContent/stores/Store";
import StoreImageCard from "../../UI/Cards/StoreImageCard";

const Format: React.FC<{
  storesData: Istores[];
  title: string;
  message?: string;
}> = ({ storesData, title, message }) => {
  const favourite = useAppSelector((state) => state.favSlice.list);

  return (
    <div className="mx-4 lg:mt-[150px]" style={{ height: "60vh" }}>
      <h3 className="font-ubermove font-medium text-center text-lg lg:hidden">
        {title}
      </h3>

      {storesData.length > 0 ? (
        <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
          {storesData.map((store) => (
            <li key={store.id}>
              <StoreImageCard
                {...store}
                className="lg:hidden"
                favFlag={
                  title === "favourites" ||
                  findItemIndexById(store.id, favourite).isPresent
                }
              />
              <Store
                {...store}
                className="hidden lg:grid"
                favFlag={
                  title === "favourites" ||
                  findItemIndexById(store.id, favourite).isPresent
                }
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-[50%]">
          <span className="text-center">{message}</span>
        </div>
      )}
    </div>
  );
};

export default Format;
