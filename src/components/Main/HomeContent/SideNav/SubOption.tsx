import React from "react";
import { Link } from "react-router-dom";

const SubOption: React.FC<{
  title: string;
  icon: React.ReactNode;
  description?: string;
  onReset: () => void;
}> = ({ icon, title, description, onReset }) => {
  let linkHref = "..";
  if (title === "Favorites") linkHref = "stores/favourite";
  return (
    <Link to={linkHref} className="flex gap-4 items-center" onClick={onReset}>
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
    </Link>
  );
};

export default SubOption;
