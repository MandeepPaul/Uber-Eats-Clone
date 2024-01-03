const CartItemWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`py-2 grid grid-cols-3 gap-4 place-content-between ${className}`}
    >
      {children}
    </div>
  );
};

export default CartItemWrapper;
