import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import uiSlice from "./Slices/uiSlice";
import userSlice from "./Slices/userSlice";
import favStores from "./Slices/favStores";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    uiSlice: uiSlice,
    favSlice: favStores,
    userSlice: userSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
