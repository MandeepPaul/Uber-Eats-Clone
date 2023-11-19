const SortSection = () => {
  return (
    <>
      {["Recommended", "Most popular", "Rating", "Delivery time"].map(
        (label, index) => (
          <label key={index} className="flex gap-2">
            <input
              type="radio"
              name="sort"
              className="appearance-none h-5 w-5 rounded-full border-4 border-gray-500 checked:border-black checked:ring checked:ring-inset checked:ring-black"
            />
            <span>{label}</span>
          </label>
        )
      )}
    </>
  );
};

export default SortSection;
