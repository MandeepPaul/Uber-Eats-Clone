import Categories from "./Categories";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <>
      <SearchBar className="md:hidden" />
      <Categories />
    </>
  );
};

export default Main;
