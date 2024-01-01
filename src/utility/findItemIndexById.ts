import { CondimentsList } from "../types/incomingDataType";
import { NewCondimentsInterface } from "../types/outgoingDataType";

type ItemWithId = { id: string }; // Define a type with an 'id' property

// Utility function to find item index by ID in an array
export const findItemIndexById = <T extends ItemWithId | string>(
  id: string,
  items: T[]
) => {
  let indexNum = -1;
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

  return { isPresent: indexNum !== -1, index: indexNum };
};
