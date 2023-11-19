import Modal from "../../UI/Modal";
import ExtraOptions from "./AdditionalOptions/ExtraOptions";
import Options from "./Options";
import Profile from "./Profile";

const SideNav: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="top-0 left-0 w-3/4 h-full md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <aside className="py-7 font-ubermove h-screen">
        <Profile />
        <Options />
        <ExtraOptions />
      </aside>
    </Modal>
  );
};

export default SideNav;
