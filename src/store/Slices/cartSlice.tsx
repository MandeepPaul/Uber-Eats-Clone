import { createSlice } from "@reduxjs/toolkit";

const cartState = createSlice({
  name: "cart",
  initialState: 0,
  reducers: {},
});

export const cartActions = cartState.actions;
