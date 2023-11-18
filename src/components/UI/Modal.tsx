const Modal: React.FC<{
  className?: string;
  reset: () => void;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-30 bg-stone-900 opacity-70"
        onClick={props.reset}
      />
      <div className="fixed top-0 left-0 w-1/4 h-full bg-white shadow-xl z-40">
        {props.children}
      </div>
    </>
  );
};

export default Modal;
