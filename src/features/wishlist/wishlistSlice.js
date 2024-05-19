import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
      } else {
        state.items.push({
          ...newItem,
        });
      }
    },
    removeItemFromWishlist: (state, action) => {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        state.items = state.items.filter((item) => item._id !== _id);
      }
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } = cartSlice.actions;
export default wishlistSlice.reducer;
