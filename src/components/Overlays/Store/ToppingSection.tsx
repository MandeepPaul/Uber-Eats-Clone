import { toppingsT } from "../../../tempData/Toppings";
import Checkbox from "../../UI/Checkbox";

const ToppingSection: React.FC<{
  title: string;
  limit: number;
  list: toppingsT[];
}> = ({ title, limit, list }) => {
  return (
    <section className="flex flex-col">
      <div>
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <span className="text-gray-700">{`Choose up to ${limit}`}</span>
      </div>

      <ul className="divide-y-2">
        {list.map(({ id, name, price, special }) => (
          <li key={id} className="flex justify-between py-3 last:mb-4">
            <div className="flex flex-col">
              <span className="font-[500] text-[18px]">{name}</span>
              {price && <span className="font-thin">{`+$${price}`}</span>}
              {special && (
                <span className="font-[400] text-green-600">{special}</span>
              )}
            </div>
            <Checkbox />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToppingSection;
