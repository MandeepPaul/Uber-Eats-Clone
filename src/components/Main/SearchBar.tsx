import { useState } from "react";
import ReactDOM from "react-dom";

import Button from "../UI/Button";
import { searchIcon, filterIcon } from "../../SVG/svgIcon";

import FilterOverlay from "../Overlays/Filter/FilterOverLay";

const SearchBar: React.FC<{ className?: string }> = (props) => {
  const [filterVisibility, setShowFilter] = useState(false);

  const filterOverLayHandler = () => {
    setShowFilter(true);
  };

  return (
    <div
      className={`py-3 lg:py-1 lg:w-[25%] lg:flex lg:justify-center mt-2 lg:m-0 sticky top-0 z-10 bg-white ${props.className}`}
    >
      <div className="flex grow items-center space-x-2 px-4 py-1 bg-gray-200 rounded-full">
        <div className="flex basis-11/12 items-center p-1 relative">
          <div className="absolute pointer-events-none">{searchIcon}</div>
          <input
            className="py-1 pl-6 border-r-2 lg:border-none border-gray-300 bg-gray-200 w-full outline-none placeholder:text-gray-500 placeholder:font-ubermove truncate"
            type="text"
            name="searchField"
            placeholder="Food, groceries, drinks, etc"
          />
        </div>
        <Button className="basis-1/12 lg:hidden" onClick={filterOverLayHandler}>
          {filterIcon}
        </Button>
      </div>

      {filterVisibility &&
        ReactDOM.createPortal(
          <FilterOverlay onReset={() => setShowFilter(false)} />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
};

export default SearchBar;
