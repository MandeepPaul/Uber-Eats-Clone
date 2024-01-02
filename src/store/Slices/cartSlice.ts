import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { orderedItemFormat, finalOrder } from "../../types/outgoingDataType";
import { restDetails } from "../../types/outgoingDataType";

export type itemOrdered = restDetails & {
  changedFlag: boolean;
  totalAmount: number;
  totalQuantity: number;
  cartItemList: orderedItemFormat[];
};

export const initialState: itemOrdered = {
  restId: "",
  restName: "",
  deliveryFee: 0,
  totalAmount: 0,
  totalQuantity: 0,
  cartItemList: [],
  restImg: "",
  changedFlag: false,
};

const cartState = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    addToCart(state: itemOrdered, action: PayloadAction<finalOrder>) {
      const { restId, restName, restImg, deliveryFee, orderedItem } =
        action.payload;
      const { quantity, price } = orderedItem;

      state.changedFlag = true;

      if (state.cartItemList.length === 0) {
        orderedItem.itemId = uuidv4(); //To uniquly identify each item in the cart
        state.restId = restId;
        state.restName = restName;
        state.restImg = restImg;
        state.deliveryFee = deliveryFee;
        state.totalQuantity += quantity;
        state.totalAmount += +(price * quantity).toFixed(2);
        state.cartItemList.push(orderedItem);

        return;
      }

      if (state.restId === restId) {
        orderedItem.itemId = uuidv4();
        state.totalQuantity += quantity;
        state.totalAmount += +(price * quantity).toFixed(2);
        state.cartItemList.push(orderedItem);
        return;
      }

      //When there is existing cart.
      console.log("Cart exist from another store");
    },
    removeFromCart(state: itemOrdered, action: PayloadAction<string>) {
      const removableItemId = action.payload;
      const list = state.cartItemList;

      state.changedFlag = true;

      if (list.length === 1 && list[0].itemId === removableItemId) {
        return initialState;
      }

      state.cartItemList = state.cartItemList.filter(
        (item) => item.itemId !== removableItemId
      );
      state.totalQuantity--;
    },
    changeQuantity(
      state: itemOrdered,
      action: PayloadAction<{ id: string; newQuantity: number }>
    ) {
      const { id, newQuantity } = action.payload;

      state.changedFlag = true;

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
        state.totalAmount = +state.cartItemList
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2);
      }
    },
    replaceCart(state: itemOrdered, action: PayloadAction<itemOrdered>) {
      return { ...action.payload };
    },
  },
});

export const cartActions = cartState.actions;

export default cartState.reducer;
