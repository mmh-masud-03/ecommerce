import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSearchProducts = createAsyncThunk(
  "search/fetchSearchProducts",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/products/search/${searchQuery}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
