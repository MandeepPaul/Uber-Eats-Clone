const Price = () => {
  return (
    <section className="flex gap-2">
      {["$", "$$", "$$$", "$$$$"].map((price, index) => (
        <button key={index} className="bg-gray-200 p-2 rounded-full">
          {price}
        </button>
      ))}
    </section>
  );
};

export default Price;
