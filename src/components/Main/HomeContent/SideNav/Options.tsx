import Button from "../../../UI/Wrappers/Button";
import SubOption from "./SubOption";

import { sideNavIcons } from "../../../../tempData/SideNavIcons";

const Options: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <div className="flex flex-col justify-start gap-7 text-lg my-6 pl-6 pt-2 max-w-[300px]">
      {sideNavIcons.map((item) => (
        <SubOption
          key={item.id}
          icon={item.svg}
          title={item.title}
          description={item.description}
          onReset={onReset}
        />
      ))}

      <Button className="self-start text-gray-400">Sign out</Button>
    </div>
  );
};

export default Options;
