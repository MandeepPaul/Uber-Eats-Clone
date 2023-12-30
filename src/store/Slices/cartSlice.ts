import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { orderedItemFormat, finalOrder } from "../../types/outgoingDataType";
import { restDetails } from "../../types/outgoingDataType";

export type itemOrdered = restDetails & {
  totalAmount: number;
  totalQuantity: number;
  cartItemList: orderedItemFormat[];
};

const initialState: itemOrdered = {
  restId: "",
  restName: "",
  totalAmount: 0,
  totalQuantity: 0,
  cartItemList: [],
};

const cartState = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    addToCart(state: itemOrdered, action: PayloadAction<finalOrder>) {
      const { restId, restName, orderedItem } = action.payload;
      const { quantity, price } = orderedItem;

      if (state.cartItemList.length === 0) {
        state.restId = restId;
        state.restName = restName;
        state.totalQuantity += quantity;
        state.totalAmount += price * quantity;
        state.cartItemList.push(orderedItem);
      }

      //When restId is not empty!
      if (state.restId !== action.payload.restId) {
        console.log(action.payload.restId);
        console.log("Cart exist from another store");
      }
    },
  },
});

export const cartActions = cartState.actions;

export default cartState;
