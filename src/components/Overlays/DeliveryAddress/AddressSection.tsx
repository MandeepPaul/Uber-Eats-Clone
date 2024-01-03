import React from "react";
import Button from "../../UI/Wrappers/Button";

const AddressSection: React.FC<{
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  place: string;
  description?: string;
  buttonTitle: string;
  onClick: () => void;
}> = ({ svg: SVGComponent, place, description, buttonTitle, onClick }) => {
  return (
    <section className="p-4 flex gap-2 justify-between items-center">
      <SVGComponent width="20" height="20" />

      <div className="flex flex-col pl-2 grow overflow-hidden">
        <span className="lg:text-xl font-medium">{place}</span>
        <span className="text-sm lg:text-base font-light max-w-[90%] truncate">
          {description}
        </span>
      </div>

      <Button
        onClick={onClick}
        className="bg-gray-200 px-3 py-2 text-sm rounded-full hover:bg-gray-300"
      >
        {buttonTitle}
      </Button>
    </section>
  );
};

export default AddressSection;
