import Backdrop from "../Backdrop/Backdrop";

const LoadingIndicator = () => {
  return (
    <Backdrop backdrop="grid place-content-center h-screen">
      <div className="absolute left-0 top-0 z-40 w-full h-full grid place-content-center">
        <div className="relative h-28 w-28 rounded-full animate-spin">
          <div className="absolute inset-0 rounded-full ring-[10px] ring-emerald-600" />
          <div className="absolute inset-0 rounded-full">
            <div className="absolute left-1/2 transform translate-x-[-50%] -top-2.5 bg-white w-2.5 h-2.5 rounded-full"></div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default LoadingIndicator;
