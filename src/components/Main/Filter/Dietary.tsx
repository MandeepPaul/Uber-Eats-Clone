import DieteryIcons from "../../../SVG/svgIcon";
import Button from "../../UI/Button";

const Dietry = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {["Vegetarian", "Vegan", "Gluten-free"].map((type, index) => (
        <Button
          key={index}
          className="bg-gray-200 rounded-full flex items-center justify-center gap-2 p-2"
        >
          {DieteryIcons[index]}
          <span>{type}</span>
        </Button>
      ))}
    </div>
  );
};

export default Dietry;
