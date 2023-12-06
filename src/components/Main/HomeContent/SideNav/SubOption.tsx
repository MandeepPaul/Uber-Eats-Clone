import React from "react";

const SubOption: React.FC<{
  title: string;
  icon: React.ReactNode;
  description?: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div className="flex flex-col">
        <span>{title}</span>
        <span
          className={`text-base font-light ${
            title === "Uber One" ? "text-yellow-700" : "text-gray-600"
          }`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default SubOption;
