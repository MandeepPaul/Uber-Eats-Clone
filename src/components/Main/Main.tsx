import Categories from "./Categories";
import Message from "./Message";
import SearchBar from "./SearchBar";
import Allstores from "./stores/Allstores";

const Main: React.FC<{ className?: string }> = (props) => {
  return (
    <>
      <SearchBar className={`md:hidden ${props.className}`} />
      <Categories className={`${props.className}`} />
      <Message className={`${props.className}`} />
      <Allstores className={`${props.className}`} />
    </>
  );
};

export default Main;
