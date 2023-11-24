import { Link } from "react-router-dom";

const MainContent: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 mb-20 text-center min-w-[40%]">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/29ed4bc0793fd578.svg"
        alt="Icecream-cone"
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-lg">{message}</p>
      <Link
        to={"/"}
        className="bg-black w-full py-3 rounded-md text-xl text-white shadow-md hover:opacity-75"
      >
        Find Food
      </Link>
    </div>
  );
};

export default MainContent;
