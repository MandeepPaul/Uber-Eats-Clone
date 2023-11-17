const SortSection = () => {
  return (
    <>
      {["Recommended", "Most popular", "Rating", "Delivery time"].map(
        (label, index) => (
          <label key={index} className="flex gap-2">
            <input
              type="radio"
              name="sort"
              className="appearance-none checked:bg-white checked:border-transparent checked:ring-4 checked:ring-inset checked:ring-black h-4 w-4 rounded-full border border-gray-300"
            />
            <span>{label}</span>
          </label>
        )
      )}
    </>
  );
};

export default SortSection;
