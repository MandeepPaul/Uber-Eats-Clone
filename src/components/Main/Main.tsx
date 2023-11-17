import Categories from "./Categories";
import SearchBar from "./SearchBar";
import StoreSection from "./StoreSection";

const Main: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <SearchBar className={`lg:hidden font-ubermove  ${props.className}`} />
      <Categories className={`${props.className}`} />
      <StoreSection className={`font-ubermove ${props.className}`} />
    </>
  );
};

export default Main;
