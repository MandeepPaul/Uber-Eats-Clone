import Button from "./Wrappers/Button";

const ButtonPair: React.FC<{
  text1: string;
  text2: string;
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
}> = ({ text1, text2, onFirstButtonClick, onSecondButtonClick }) => {
  return (
    <>
      <Button
        onClick={onFirstButtonClick}
        className="bg-black w-full py-4 mt-6 rounded-lg md:text-lg lg:text-xl text-white hover:opacity-75"
      >
        {text1}
      </Button>
      <Button
        onClick={onSecondButtonClick}
        className="bg-white w-full py-4 mb-6 mt-1 rounded-lg md:text-lg lg:text-xl hover:bg-gray-100"
      >
        <span className="font-medium">{text2}</span>
      </Button>
    </>
  );
};

export default ButtonPair;
