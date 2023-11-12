import Categories from "./Categories";
import SearchBar from "./SearchBar";
import StoreSection from "./StoreSection";

const Main: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <SearchBar className={`lg:hidden ${props.className}`} />
      <Categories className={`${props.className}`} />
      <StoreSection className={`${props.className}`} />
    </>
  );
};

export default Main;
