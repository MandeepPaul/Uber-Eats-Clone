import { Istores } from "../../../fireStoreData/StoreList";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import StoreSection from "./StoreSection";

const Main: React.FC<{ className?: string; storesData: Istores[] }> = ({
  className,
  storesData,
}) => {
  return (
    <>
      <SearchBar className={`lg:hidden font-ubermove  ${className}`} />
      <Categories className={`${className}`} />
      <StoreSection
        className={`font-ubermove ${className}`}
        storesData={storesData}
      />
    </>
  );
};

export default Main;
