import { useRouteLoaderData } from "react-router-dom";
import { Istores } from "../types/incomingDataType";
import Format from "../components/Main/Fav-offer-page-content/Format";

const OffersPage = () => {
  const data = useRouteLoaderData("store-details");
  const storesData = data as Istores[];

  const storesWithDeal = storesData.filter((store) => store.offer);

  return (
    <Format
      storesData={storesWithDeal as Istores[]}
      title="Today's offers"
      message="No offers available right now! Comeback later."
    />
  );
};

export default OffersPage;
