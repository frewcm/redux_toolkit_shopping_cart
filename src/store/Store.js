import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modelReducer from "../features/model/modelSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    model: modelReducer,
  },
});
