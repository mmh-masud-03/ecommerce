import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProducts } from "./searchThunk";

const initialState = {
  searchQuery: "",
  searchResults: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
