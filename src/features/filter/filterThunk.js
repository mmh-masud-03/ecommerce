import { createAsyncThunk } from "@reduxjs/toolkit";
const fetchFilterProducts = createAsyncThunk(
  "filter/fetchFilterProducts",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/products?${new URLSearchParams(query).toString()}`
      );
      return response.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export default fetchFilterProducts;
