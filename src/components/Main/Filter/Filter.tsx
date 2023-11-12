import React from "react";
import SectionCollapse from "./SectionCollapse";
import FromUberEats from "./FromUberEatsSection";

const Filter: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`px-6 pt-2  ${props.className}`}>
      <div className="sticky left-0 top-[100px] h-[100px] ">
        <h2 className="text-2xl font-bold mb-3">All stores</h2>

        <SectionCollapse title="Sort">
          <label className="flex gap-2">
            <input type="radio" name="recommended" />
            <span>Recommended</span>
          </label>
          <label className="flex gap-2">
            <input type="radio" name="popular" />
            Most popular
          </label>
          <label className="flex gap-2">
            <input type="radio" name="rating" />
            Rating
          </label>
        </SectionCollapse>

        <SectionCollapse title="From Uber Eats">
          <FromUberEats title="Offers" />
        </SectionCollapse>
      </div>
    </div>
  );
};

export default Filter;
