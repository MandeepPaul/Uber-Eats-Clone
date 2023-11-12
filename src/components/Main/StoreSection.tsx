import React from "react";

import Message from "./Message";
import Allstores from "./stores/Allstores";
import Filter from "./Filter/Filter";

const StoreSection: React.FC<{ className: string }> = (props) => {
  return (
    <div
      className={`lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-2 ${props.className}`}
    >
      <Filter className={`hidden lg:inline-grid row-span-3`} />

      <Message className={`lg:col-span-2`} />
      <Allstores className={`lg:col-span-2`} />
    </div>
  );
};

export default StoreSection;
