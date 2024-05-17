import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchProducts = createAsyncThunk(
  "search/fetchSearchProducts",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/products/search/${searchQuery}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
