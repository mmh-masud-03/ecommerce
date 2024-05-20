import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalWishlistItems: 0,
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
        state.totalWishlistItems += 1;
      }
    },
    removeItemFromWishlist: (state, action) => {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        state.items = state.items.filter((item) => item._id !== _id);
        state.totalWishlistItems -= 1;
      }
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
