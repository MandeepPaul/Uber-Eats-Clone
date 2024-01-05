import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userDetails = {
  userName: string;
  userAddress1: string;
  userAddress2: string;
  orderTime: string; // Added orderTime field to track order time
  changedFlag: boolean;
};

export const initialState: userDetails = {
  userName: "",
  userAddress1: "",
  userAddress2: "",
  orderTime: "null", // Initialize orderTime as null
  changedFlag: false,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addDeliveryDetails(state: userDetails, action: PayloadAction<string>) {
      state.changedFlag = true;
      state.userAddress1 = action.payload;
    },
    // Action to set order time
    setOrderTime(state: userDetails, action: PayloadAction<string>) {
      state.orderTime = action.payload;
      console.log(action.payload);
    },
    replaceInfo(state: userDetails, action: PayloadAction<userDetails>) {
      return { ...action.payload };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
