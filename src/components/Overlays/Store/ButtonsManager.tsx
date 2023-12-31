import ButtonPair from "../../UI/ButtonPair";
import DropDownMenu from "../../UI/DropDownMenu";

const ButtonsManager: React.FC<{
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
  quantityHandler: (value: number) => void;
  price: number;
}> = ({ onFirstButtonClick, onSecondButtonClick, quantityHandler, price }) => {
  return (
    <>
      <DropDownMenu
        options={[1, 2, 3, 4, 5]}
        className="px-5 py-2 space-x-4"
        listPosition="right-0"
        quantityHandler={quantityHandler}
      />
      <ButtonPair
        text1={`Add 1 to order ${`\u2022`} $${price}`}
        text2={`See Details`}
        onFirstButtonClick={onFirstButtonClick}
        onSecondButtonClick={onSecondButtonClick}
      />
    </>
  );
};

export default ButtonsManager;
