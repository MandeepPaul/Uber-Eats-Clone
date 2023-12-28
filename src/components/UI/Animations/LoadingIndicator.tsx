import Backdrop from "../Backdrop/Backdrop";

const LoadingIndicator = () => {
  return (
    <Backdrop backdrop="grid place-content-center h-screen">
      <div className="absolute left-0 top-0 z-40 w-full h-full grid place-content-center">
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="120px"
          height="120px"
          viewBox="0 0 16 16"
          id="spinner"
        >
          <path
            fill="#00A300"
            d="M9.9.2l-.2 1C12.7 2 15 4.7 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-.2-1C2.6 1.1 0 4.3 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"
          ></path>
        </svg>
      </div>
    </Backdrop>
  );
};

export default LoadingIndicator;
