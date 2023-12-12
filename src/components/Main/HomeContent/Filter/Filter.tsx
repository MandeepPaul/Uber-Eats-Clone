import React from "react";
import ToggleSection from "../../../UI/Wrappers/ToggleSection";
import Sort from "./subSections/Sort";
import Offers from "./subSections/OfferSubSection/Offers";
import Price from "./subSections/Price";
import Delivery from "./subSections/Delivery";
import Dietry from "./Dietary";

const Filter: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`pr-6 pt-2 text-xl ${className}`}>
      <div className="sticky left-0 top-[120px] h-screen">
        <h2 className="hidden lg:block text-3xl font-bold mb-2">All stores</h2>
        <>
          <ToggleSection title="Sort">
            <Sort />
          </ToggleSection>

          <ToggleSection title="From Uber Eats">
            <Offers />
          </ToggleSection>

          <ToggleSection title="Price">
            <Price />
          </ToggleSection>

          <ToggleSection title="Delivery Free">
            <Delivery />
          </ToggleSection>

          <ToggleSection title="Dietary">
            <Dietry />
          </ToggleSection>
        </>
      </div>
    </div>
  );
};

export default Filter;
