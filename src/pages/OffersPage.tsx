import { storeWithDeals } from "../components/Main/stores/Allstores";
import HorizontalCard from "../components/UI/Cards/HorizontalCard";
// import CardSection from "../components/Main/stores/CardSection";

const OffersPage = () => {
  return (
    <div className="mx-4">
      <h3 className="font-ubermove font-medium text-center text-lg">
        Today's offers
      </h3>
      {storeWithDeals.map(
        ({ id, name, rating, deliveryFee, time, offer, url }) => (
          <HorizontalCard
            key={id}
            name={name}
            rating={rating}
            deliveryFee={deliveryFee}
            time={time}
            offer={offer}
            url={url}
          />
        )
      )}

      {/* <CardSection name="KFC" rating={4.4} deliveryFee={0.99} time={20} /> */}
    </div>
  );
};

export default OffersPage;
