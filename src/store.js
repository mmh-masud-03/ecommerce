import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    filter: filterReducer,
    cart: cartReducer,
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
