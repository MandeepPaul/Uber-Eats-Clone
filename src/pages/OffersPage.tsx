import { useRouteLoaderData } from "react-router-dom";
import { Istores } from "../tempData/StoreList";
import Store from "../components/Main/HomeContent/stores/Store";
import StoreImageCard from "../components/UI/Cards/StoreImageCard";

const OffersPage = () => {
  const data = useRouteLoaderData("store-details");

  const storesData = data as Istores[];
  const storesWithDeal = storesData.filter((store) => store.offer);
  return (
    <div className="mx-4 lg:mt-[100px]">
      <h3 className="font-ubermove font-medium text-center text-lg lg:hidden">
        Today's offers
      </h3>

      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        {storesWithDeal.map(
          ({ id, name, rating, deliveryFee, time, offer, url }) => (
            <li key={id}>
              <StoreImageCard
                name={name}
                rating={rating}
                deliveryFee={deliveryFee}
                time={time}
                offer={offer}
                url={url}
                className="lg:hidden"
              />
              <Store
                id={id}
                url={url}
                offer={offer}
                name={name}
                deliveryFee={deliveryFee}
                time={time}
                rating={rating}
                className="hidden lg:grid"
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default OffersPage;
