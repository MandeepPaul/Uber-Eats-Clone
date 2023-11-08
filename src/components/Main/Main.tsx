import Categories from "./Categories";
import Message from "./Message";
import SearchBar from "./SearchBar";

const Main: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <SearchBar className="md:hidden" />
      <Categories />
      <Message className={props.className} />
    </>
  );
};

export default Main;
