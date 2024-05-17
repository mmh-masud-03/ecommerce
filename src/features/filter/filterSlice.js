import fetchFilterProducts from "./filterThunk";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: null,
  products: [],
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilterProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchFilterProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchFilterProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default filterSlice.reducer;
