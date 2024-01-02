import { LocationPinSVG } from "../../../SVG/svgIcon";

const ReusableSection = () => {
  return (
    <div className="flex justify-between items-center p-4 gap-4 border-2 rounded-lg">
      <LocationPinSVG width="20" height="20" />
      <div className="flex flex-col grow">
        <p>
          Priority{" "}
          <span className="text-white bg-green-600 px-2 py-0.5 text-sm rounded-full">
            Faster
          </span>
        </p>
        <span className="text-sm text-gray-400">10-25 min</span>
      </div>
      <span>+$3.49</span>
    </div>
  );
};

export default ReusableSection;
