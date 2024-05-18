import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterProducts } from "./filterThunk";

const initialState = {
  filterQuery: "",
  filterResults: [],
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilterProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterResults = action.payload;
      })
      .addCase(fetchFilterProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilterQuery } = filterSlice.actions;
export default filterSlice.reducer;
