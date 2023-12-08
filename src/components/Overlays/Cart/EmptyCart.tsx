import Button from "../../UI/Button";

const EmptyCart: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <div className="grid h-screen place-content-center lg:max-w-[430px] lg:mx-[auto]">
      <div className="flex flex-col gap-2 p-4 mb-20 items-center text-center">
        <img
          className="h-[200px] w-[200px]"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg"
          alt="Shopping cart"
        />
        <h2 className="text-2xl font-semibold">Add items to start a cart</h2>
        <p className="font-light text-lg">
          Once you add items from a restaurant or store, your cart will appear
          here.
        </p>
        <Button
          className="py-2 px-3 mt-4 bg-black text-white rounded-full"
          onClick={onReset}
        >
          Start shopping
        </Button>
      </div>
    </div>
  );
};
export default EmptyCart;
