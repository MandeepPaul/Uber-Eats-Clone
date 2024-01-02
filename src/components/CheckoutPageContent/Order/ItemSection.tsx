const ItemSection = () => {
  return (
    <section className="flex justify-between items-start gap-4 py-4">
      <span className="bg-gray-200 px-2">4</span>
      <div className="flex flex-col grow">
        <span className="font-medium ">Name</span>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          voluptas iste facilis. Veniam, molestias? Perferendis adipisci aliquam
          provident eveniet nostr.
        </p>
      </div>
      <span className="text-sm text-gray-600">$30.56</span>
    </section>
  );
};

export default ItemSection;
