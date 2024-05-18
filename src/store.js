import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
