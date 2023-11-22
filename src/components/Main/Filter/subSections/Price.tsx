import Button from "../../../UI/Button";

const Price = () => {
  return (
    <section className="flex gap-2">
      {["$", "$$", "$$$", "$$$$"].map((price, index) => (
        <Button
          key={index}
          className="bg-gray-200 p-2 rounded-full hover:bg-zinc-300"
        >
          {price}
        </Button>
      ))}
    </section>
  );
};

export default Price;
