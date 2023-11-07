import Button from "../UI/Button";

const SearchBar: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`mx-4 py-3 ${props.className}`}>
      <div className="flex items-center space-x-2 px-4 py-1 bg-gray-200 rounded-full">
        <div className="flex basis-11/12 items-center p-1 relative">
          <div className="absolute pointer-events-none">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            className="py-1 pl-6 border-r-2 md:border-none border-gray-300 bg-gray-200 w-full outline-none placeholder:text-gray-500 placeholder:font-dosis"
            type="text"
            name="searchField"
            placeholder="Food, groceries, drinks, etc"
          />
        </div>
        <Button className="basis-1/12 md:hidden">
          <svg
            className="w-5 h-5 m-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
