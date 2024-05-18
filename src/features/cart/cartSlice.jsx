import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeItemFromCart: (state, action) => {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item._id !== _id);
      }
    },
    updateItemQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += existingItem.price * quantityDifference;
      }
    },
    increaseQuantity: (state, action) => {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== _id);
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
