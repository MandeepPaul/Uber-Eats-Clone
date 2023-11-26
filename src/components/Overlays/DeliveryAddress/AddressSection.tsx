import Button from "../../UI/Button";

const AddressSection: React.FC<{
  svg: React.ReactNode;
  place: string;
  description?: string;
  buttonTitle: string;
}> = ({ svg, place, description, buttonTitle }) => {
  return (
    <section className="p-4 flex gap-2 justify-between items-center">
      <div>{svg}</div>

      <div className="flex flex-col pl-2 grow overflow-hidden">
        <span className="lg:text-xl">{place}</span>
        <span className="text-sm lg:text-base font-light max-w-[90%] truncate">
          {description}
        </span>
      </div>

      <Button className="bg-gray-200 px-2 py-1 font-normal rounded-full">
        {buttonTitle}
      </Button>
    </section>
  );
};

export default AddressSection;
