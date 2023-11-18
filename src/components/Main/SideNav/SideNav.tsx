import Modal from "../../UI/Modal";
import Profile from "./Profile";

const SideNav: React.FC<{ onReset: () => void }> = (props) => {
  return (
    <Modal reset={props.onReset}>
      <aside className="px-4 py-6">
        <Profile />
      </aside>
    </Modal>
  );
};

export default SideNav;
