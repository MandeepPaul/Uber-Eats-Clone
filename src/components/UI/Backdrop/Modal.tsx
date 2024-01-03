import Backdrop from "./Backdrop";

const Modal: React.FC<{
  backdrop?: string;
  reset?: () => void;
  modal: string;
  children?: React.ReactNode;
}> = ({ backdrop, modal, reset, children }) => {
  const rootElement = document.getElementById("root");
  rootElement && rootElement.classList.add("no-scroll");

  const resetOverlay = () => {
    rootElement && rootElement.classList.remove("no-scroll");
    reset && reset();
  };

  return (
    <>
      <Backdrop reset={resetOverlay} backdrop={backdrop} />

      {/* We need to specify the position of modal first in the component where we are using this modal*/}
      <div className={`fixed bg-white shadow-xl z-40 ${modal}`}>{children}</div>
    </>
  );
};

export default Modal;
