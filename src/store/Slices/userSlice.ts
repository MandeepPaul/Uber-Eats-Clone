import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userDetails = {
  userName: string;
  userAddress: string;
};

export const initialState: userDetails = {
  userName: "",
  userAddress: "",
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addDeliveryDetails(state: userDetails, action: PayloadAction<string>) {
      state.userAddress = action.payload;
    },
    replaceInfo(state: userDetails, action: PayloadAction<userDetails>) {
      Object.assign(state, action.payload);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
