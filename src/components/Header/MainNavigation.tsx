import Button from "../UI/Button";
const MainNavigation = () => {
  return (
    <div className="flex flex-row justify-between p-3 bg-yellow-400">
      <Button>
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 8.25H4.5V6.75H19.5V8.25Z"
            fill="#080341"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 12.75H4.5V11.25H19.5V12.75Z"
            fill="#080341"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 17.25H4.5V15.75H19.5V17.25Z"
            fill="#080341"
          />
        </svg>
      </Button>
      <img
        className="py-2"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
      />
      <Button className="bg-black rounded-full px-3 text-white flex items-center space-x-1">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
        <span>0</span>
      </Button>
    </div>
  );
};

export default MainNavigation;
