import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComponents = createAsyncThunk(
  "COMPONENTS/GET_ALL_COMPONENTS",
  async () => {
    const data = await axios.get(`https://breakingbadapi.com/api/characters`);
    return data.data;
  }
);

export const getSearchedComponents = createAsyncThunk(
  "COMPONENTS/SEARCH_COMPONENTS",
  async (text) => {
    const data = await axios.get(
      `https://breakingbadapi.com/api/characters?name=${text}`
    );
    return data.data;
  }
);

const initialState = {
  components: [],
  isLoading: false,
};

export const componentSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: {
    [getComponents.pending]: (state) => {
      state.isLoading = true;
    },
    [getcComponents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.components = action.payload;
    },
    [getComponents.rejected]: (state) => {
      state.isLoading = false;
      state.components = [];
    },
    [getSearchedComponents.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchedComponents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Components = action.payload;
    },
    [getSearchedComponents.rejected]: (state) => {
      state.isLoading = false;
      state.components = [];
    },
  },
});
