import { Condiments } from "./incomingDataType";

export type restDetails = {
  restId: string;
  restName: string;
  restImg: string;
  deliveryFee: number;
  deliveryTime: string | number;
  orderType: string;
};

export interface NewCondimentsInterface
  extends Pick<Condiments, "id" | "title" | "list"> {
  addOnPrice?: number;
}
//For data we will use to manage state.
export type orderedItemFormat = {
  itemId: string;
  itemName: string;
  price: number;
  quantity: number;
  imageURL?: string;
  condimentsData: NewCondimentsInterface[];
};

export type finalOrder = restDetails & { orderedItem: orderedItemFormat };
