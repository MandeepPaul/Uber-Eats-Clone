const SortSection = () => {
  return (
    <>
      {["Recommended", "Most popular", "Rating", "Delivery time"].map(
        (label, index) => (
          <label key={index} className="flex gap-2">
            <input type="radio" name="sort" className="checked:bg-black" />
            <span>{label}</span>
          </label>
        )
      )}
    </>
  );
};

export default SortSection;
