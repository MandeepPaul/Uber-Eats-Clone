import React from "react";

import Message from "./Message";
import Allstores from "./stores/Allstores";
import Filter from "./Filter/Filter";
import { Istores } from "../../../firestoreData/StoreList";

const StoreSection: React.FC<{ className: string; storesData: Istores[] }> = ({
  className,
  storesData,
}) => {
  return (
    <div
      className={`lg:grid lg:grid-flow-col lg:grid-cols-4 lg:gap-2 ${className}`}
    >
      <Filter className={`hidden lg:inline-grid row-span-3 ml-3`} />

      <Message className={`lg:col-span-3`} />
      <Allstores className={`lg:col-span-3`} storesData={storesData} />
    </div>
  );
};

export default StoreSection;
