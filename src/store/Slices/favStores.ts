import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const favStores = createSlice({
  name: "FavStoreList",
  initialState,

  reducers: {
    handleFavrourite(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.includes(id)) {
        return state.filter((ids) => ids !== id);
      }
      console.log(state.length);

      state.push(id);
    },
  },
});

export const favListActions = favStores.actions;
export default favStores.reducer;
//  const favStoreList = useAppSelector((state)=>state.favSlice)
