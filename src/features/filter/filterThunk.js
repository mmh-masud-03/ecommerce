import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilterProducts = createAsyncThunk(
  "filter/fetchFilterProducts",
  async (filterQuery, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/products?${filterQuery}`);
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
