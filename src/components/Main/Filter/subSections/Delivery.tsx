const Delivery = () => {
  const rangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <section className="pt-2">
      <div className="w-[70%]">
        <input
          min="1"
          max="7"
          step="2"
          type="range"
          onChange={rangeHandler}
          className="appearance-none h-[2px] w-full rounded-full bg-blue-700 "
        />
        <div className="flex justify-between text-sm">
          <span>$1</span>
          <span>$3</span>
          <span>$5</span>
          <span>$5+</span>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
