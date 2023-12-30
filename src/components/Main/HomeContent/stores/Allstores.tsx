import { Link } from "react-router-dom";
import { RightArrow } from "../../../../SVG/svgIcon";
import RenderStores from "./RenderStores";
import { Istores } from "../../../../types/incomingDataType";

const Allstores: React.FC<{ className?: string; storesData: Istores[] }> = ({
  className,
  storesData,
}) => {
  return (
    <div className={`${className}`}>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-xl font-semibold `}>Today's offers</h2>
        <Link
          to="stores/offers"
          className="bg-gray-200 rounded-full p-1 h-67 w-67"
        >
          <RightArrow />
        </Link>
      </div>

      <RenderStores
        storeData={storesData.filter((store) => store.offer)}
        isGrid={false}
      />
      <RenderStores storeData={storesData} isGrid={true} />
    </div>
  );
};

export default Allstores;
