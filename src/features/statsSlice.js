import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/data.json";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

// Get data
export const getStats = createAsyncThunk("stats/getStats", async (thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});

const statsSlice = createSlice({
  name: "stats",

  initialState,

  reducers: {},

  extraReducers: {
    [getStats.pending]: (state, action) => {
      // When data is being fetched
      state.status = "loading";
    },
    [getStats.fulfilled]: (state, action) => {
      // When data is fetched successfully
      state.status = "successful";

      // Concat the new data to the existing data in the array
      state.items.push(action.payload);
    },
    [getStats.rejected]: (state, action) => {
      // When data is fetched unsuccessfully
      state.status = "failed";

      // Update the error message for proper error handling
      state.error = action.error.message;

      console.error(state.error);
    },
  },
});

// Export the reducer logic from the slice
export default statsSlice.reducer;
