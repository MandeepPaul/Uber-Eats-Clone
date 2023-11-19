import Modal from "../../UI/Modal";
import ExtraOptions from "./ExtraOptions";
import Options from "./Options";
import Profile from "./Profile";

const SideNav: React.FC<{ onReset: () => void }> = (props) => {
  return (
    <Modal reset={props.onReset}>
      <aside className="px-2 py-3 m-2 font-ubermove h-screen bg-yellow-600">
        <Profile />
        <Options />
        <ExtraOptions />
      </aside>
    </Modal>
  );
};

export default SideNav;
