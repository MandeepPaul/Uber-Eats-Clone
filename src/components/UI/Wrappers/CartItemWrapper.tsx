const CartItemWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="py-2 grid grid-cols-3 gap-4 place-content-between">
      {children}
    </div>
  );
};

export default CartItemWrapper;
