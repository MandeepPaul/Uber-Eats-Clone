const Modal: React.FC<{
  backdrop?: string;
  modal: string;
  reset: () => void;
  children?: React.ReactNode;
}> = ({ backdrop, modal, reset, children }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-30 bg-stone-900 opacity-70 ${backdrop}`}
        onClick={reset}
      />
      {/* We need to specify the position of modal first*/}
      <div className={`fixed bg-white shadow-xl z-40 ${modal}`}>{children}</div>
    </>
  );
};

export default Modal;
