import { CondimentsList } from "../types/incomingDataType";
import { NewCondimentsInterface } from "../types/outgoingDataType";

// Utility function to find item index by ID in an array
export const findItemIndexById = (
  id: string,
  items: NewCondimentsInterface[] | CondimentsList[]
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
