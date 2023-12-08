import ButtonPair from "../../UI/ButtonPair";
import DropDownMenu from "../../UI/DropDownMenu";

const ButtonsManager = () => {
  return (
    <>
      <DropDownMenu
        options={[1, 2, 3, 4, 5]}
        className="px-5 py-2 space-x-4"
        listPosition="right-0"
      />
      <ButtonPair
        text1={`Add 1 to order ${`\u2022`} $13.58`}
        text2={`See Details`}
      />
    </>
  );
};

export default ButtonsManager;
