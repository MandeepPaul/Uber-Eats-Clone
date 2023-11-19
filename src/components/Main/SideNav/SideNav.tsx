import Modal from "../../UI/Modal";
import ExtraOptions from "./ExtraOptions";
import Options from "./Options";
import Profile from "./Profile";

const SideNav: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal reset={onReset}>
      <aside className="py-7 font-ubermove h-screen">
        <Profile />
        <Options />
        <ExtraOptions />
      </aside>
    </Modal>
  );
};

export default SideNav;
