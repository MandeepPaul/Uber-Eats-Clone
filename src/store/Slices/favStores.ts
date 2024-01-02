import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type favStoreType = {
  list: string[];
  changeFlag: boolean;
};

export const initialFavState: favStoreType = {
  list: [],
  changeFlag: false,
};

const favStores = createSlice({
  name: "FavStoreList",
  initialState: initialFavState,

  reducers: {
    handleFavourite(state, action: PayloadAction<string>) {
      state.changeFlag = true;
      const id = action.payload;

      if (state.list.includes(id)) {
        state.list = state.list.filter((ids) => ids !== id); // Update state with the filtered array
      } else {
        state.list.push(id); // If not present, add the ID to the list
      }
    },
    replaceFavourite(state, action: PayloadAction<string[]>) {
      state.list = action.payload;
    },
  },
});

export const favListActions = favStores.actions;
export default favStores.reducer;
