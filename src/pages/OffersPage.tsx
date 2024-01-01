import { useRouteLoaderData } from "react-router-dom";
import { Istores } from "../types/incomingDataType";
import { useAppSelector } from "../types/hooks";
import { findItemIndexById } from "../utility/findItemIndexById";
import Store from "../components/Main/HomeContent/stores/Store";
import StoreImageCard from "../components/UI/Cards/StoreImageCard";

const OffersPage = () => {
  const data = useRouteLoaderData("store-details");
  const favourite = useAppSelector((state) => state.favSlice);

  const storesData = data as Istores[];
  const storesWithDeal = storesData.filter((store) => store.offer);
  return (
    <div className="mx-4 lg:mt-[130px] h-full">
      <h3 className="font-ubermove font-medium text-center text-lg lg:hidden">
        Today's offers
      </h3>

      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        {storesWithDeal.map((store) => (
          <li key={store.id}>
            <StoreImageCard {...store} className="lg:hidden" />
            <Store
              {...store}
              className="hidden lg:grid"
              favFlag={findItemIndexById(store.id, favourite).isPresent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffersPage;
