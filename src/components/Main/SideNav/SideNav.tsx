import Modal from "../../UI/Modal";

const SideNav: React.FC<{ onReset: () => void }> = (props) => {
  return (
    <Modal reset={props.onReset}>
      <p>Modal</p>
    </Modal>
  );
};

export default SideNav;
