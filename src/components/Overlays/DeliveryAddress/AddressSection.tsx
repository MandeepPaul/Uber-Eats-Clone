import Button from "../../UI/Button";

const AddressSection: React.FC<{
  svg: React.ReactNode;
  place: string;
  description?: string;
  buttonTitle: string;
}> = ({ svg, place, description, buttonTitle }) => {
  return (
    <section className="p-4 flex justify-between items-center">
      <div>{svg}</div>

      <div className="flex flex-col grow pl-5">
        <span className="text-xl">{place}</span>
        <span className="font-light">{description}</span>
      </div>

      <Button className="bg-gray-200 px-3 py-2 font-normal rounded-full">
        {buttonTitle}
      </Button>
    </section>
  );
};

export default AddressSection;
