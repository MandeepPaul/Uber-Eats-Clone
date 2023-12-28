import { CondimentsList } from "../firestoreData/StoreList";
import { CondimentsWithoutLimit } from "../components/Overlays/Store/AddOns";
// Utility function to find item index by ID in an array
export const findItemIndexById = (
  id: string,
  items: CondimentsWithoutLimit[] | CondimentsList[]
) => {
  let indexNum = -1;
  items.some((item, index) => {
    if (item.id === id) {
      indexNum = index;
      return true;
    }
    return false;
  });

  return { isPresent: indexNum !== -1, index: indexNum };
};
