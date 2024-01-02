import { useRouteLoaderData } from "react-router-dom";
import { Istores } from "../types/incomingDataType";
import Format from "../components/Main/Fav-offer-page-content/Format";
import { findItemIndexById } from "../utility/findItemIndexById";
import { useAppSelector } from "../types/hooks";

const FavStorePage = () => {
  const data = useRouteLoaderData("store-details");
  const favourite = useAppSelector((state) => state.favSlice.list);

  const storesData = data as Istores[];

  const favouriteStores = storesData.filter(
    (store) => findItemIndexById(store.id, favourite).isPresent
  );

  return (
    <Format
      storesData={favouriteStores as Istores[]}
      title="Favourites"
      message="Add Favourite store to see it here!"
    />
  );
};

export default FavStorePage;
