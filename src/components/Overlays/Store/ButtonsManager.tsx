import Button from "../../UI/Button";
import DropDownMenu from "../../UI/DropDownMenu";

const ButtonsManager = () => {
  return (
    <>
      <DropDownMenu options={[1, 2, 3, 4, 5]} />
      <Button className="bg-black w-full py-4 mt-6 rounded-lg text-xl text-white hover:opacity-75">
        Add 1 to order &#8226; $13.58
      </Button>
      <Button className="bg-white w-full py-4 mb-6 mt-1 rounded-lg text-xl text-white hover:bg-gray-100">
        <span className="text-slate-900 font-medium">See Details</span>
      </Button>
    </>
  );
};

export default ButtonsManager;
