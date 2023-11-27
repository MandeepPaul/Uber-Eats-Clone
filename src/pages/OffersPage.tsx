import { storeWithDeals } from "../components/Main/stores/Allstores";
import Store from "../components/Main/stores/Store";
import HorizontalCard from "../components/UI/Cards/HorizontalCard";

const OffersPage = () => {
  return (
    <div className="mx-4 lg:mt-[100px]">
      <h3 className="font-ubermove font-medium text-center text-lg lg:hidden">
        Today's offers
      </h3>

      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        {storeWithDeals.map(
          ({ id, name, rating, deliveryFee, time, offer, url }) => (
            <li key={id}>
              <HorizontalCard
                name={name}
                rating={rating}
                deliveryFee={deliveryFee}
                time={time}
                offer={offer}
                url={url}
                className="lg:hidden"
              />
              <Store
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
