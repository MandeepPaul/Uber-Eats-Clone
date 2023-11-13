import React from "react";
import ToggleSection from "./ToggleSection";
import Sort from "./subSections/Sort";
import Offers from "./subSections/OfferSubSection/Offers";

const Filter: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`px-6 pt-2  ${className}`}>
      <div className="sticky left-0 top-[100px] h-[100px] ">
        <h2 className="text-2xl font-bold mb-3">All stores</h2>

        <ToggleSection title="Sort">
          <Sort />
        </ToggleSection>

        <ToggleSection title="From Uber Eats">
          <Offers />
        </ToggleSection>
      </div>
    </div>
  );
};

export default Filter;
