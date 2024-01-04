import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userDetails = {
  userName: string;
  userAddress1: string;
  userAddress2: string;
  changedFlag: boolean;
};
export const initialState = {
  userName: "",
  userAddress1: "",
  userAddress2: "",
  changedFlag: false,
};

const userSlice = createSlice({
  name: "useInfo",
  initialState,
  reducers: {
    addDeliveryDetails(state: userDetails, action: PayloadAction<string>) {
      state.changedFlag = true;
      state.userAddress1 = action.payload;
    },
    replaceInfo(state: userDetails, action: PayloadAction<userDetails>) {
      return { ...action.payload };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
