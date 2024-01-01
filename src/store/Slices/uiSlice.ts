import { createSlice } from "@reduxjs/toolkit";

type uiState = {
  notification: {
    status: string;
    title: string;
    message: string;
  };
};
const initialState: uiState = {
  notification: {
    status: "default",
    title: "Important: ",
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    defaultNotification(state) {
      state.notification = initialState.notification;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
