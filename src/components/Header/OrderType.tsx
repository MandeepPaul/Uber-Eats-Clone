import Button from "../UI/Button";

const OrderType: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={`flex md:flex-row-reverse justify-between px-4 font-dosis ${props.className}`}
    >
      <div className="flex flex-col md:flex-none">
        <span className="md:hidden">Deliver now</span>
        <Button className="flex items-center space-x-2">
          <span className="font-semibold">Pembina Highway</span>
          <svg
            className="w-3 h-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </Button>
      </div>
      <div className="self-end md:self-start">
        <Button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1">
          <span className="font-semibold">Delivery</span>
          <svg
            className="w-3 h-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default OrderType;
