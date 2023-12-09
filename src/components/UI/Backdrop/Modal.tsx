import Backdrop from "./Backdrop";

const Modal: React.FC<{
  backdrop?: string;
  reset?: () => void;
  modal: string;
  children?: React.ReactNode;
}> = ({ backdrop, modal, reset, children }) => {
  return (
    <>
      <Backdrop reset={reset} backdrop={backdrop} />

      {/* We need to specify the position of modal first in the component where we are using this modal*/}
      <div className={`fixed bg-white shadow-xl z-40 ${modal}`}>{children}</div>
    </>
  );
};

export default Modal;
