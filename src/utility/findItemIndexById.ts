type ItemWithId = { id: string }; // Define a type with an 'id' property

// Utility function to find item index by ID in an array
export const findItemIndexById = <T extends ItemWithId | string>(
  id: string,
  items: T[]
) => {
  let indexNum = -1;

  if (items.length === 0) {
    return { isPresent: false, index: -1 };
  }

  if (Array.isArray(items)) {
    items.some((item, index) => {
      if (
        (typeof item === "string" && item === id) ||
        (item as ItemWithId).id === id
      ) {
        indexNum = index;
        return true;
      }
      return false;
    });
  } else {
    console.error("Items is not an array.");
    return { isPresent: false, index: -1 };
  }

  return { isPresent: indexNum !== -1, index: indexNum };
};
