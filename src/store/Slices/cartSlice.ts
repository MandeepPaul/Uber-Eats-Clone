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

        return;
      }

      if (state.restId === restId) {
        state.totalQuantity += quantity;
        state.totalAmount += price * quantity;
        state.cartItemList.push(orderedItem);
        return;
      }

      //When there is existing cart.
      console.log("Cart exist from another store");
    },
    removeFromCart(state: itemOrdered, action: PayloadAction<string>) {
      const removableItemId = action.payload;
      const list = state.cartItemList;
      if (list.length === 1 && list[0].itemId === removableItemId) {
        return initialState;
      }
      console.log("removed");

      state.cartItemList = state.cartItemList.filter(
        (item) => item.itemId !== removableItemId
      );
    },
    changeQuantity(
      state: itemOrdered,
      action: PayloadAction<{ id: string; newQuantity: number }>
    ) {
      const { id, newQuantity } = action.payload;
      const itemToUpdate = state.cartItemList.find(
        (item) => item.itemId === id
      );

      if (itemToUpdate) {
        const prevItemQuantity = itemToUpdate.quantity;
        const diffQuantity = newQuantity - prevItemQuantity;

        // Update the quantity for the specific item
        itemToUpdate.quantity = newQuantity;

        // Update total quantity by adding the difference in quantities
        state.totalQuantity += diffQuantity;

        // Recalculate the total amount by iterating through all items in the cart
        state.totalAmount = state.cartItemList.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
  },
});

export const cartActions = cartState.actions;

export default cartState;
