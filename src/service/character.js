import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getcharacters = createAsyncThunk(
  'CHARACTERS/GET_ALL_CHARACTERS',
  async () => {
    const data = await axios.get('https://breakingbadapi.com/api/characters');
    return data.data;
  },
);

export const getSearchedcharacters = createAsyncThunk(
  'CHARACTERS/SEARCH_CHARACTERS',
  async (text) => {
    const data = await axios.get(
      `https://breakingbadapi.com/api/characters?name=${text}`,
    );
    return data.data;
  },
);

const initialState = {
  characters: [],
  isLoading: false,
};

export const characterslice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: {
    [getcharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getcharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [getcharacters.rejected]: (state) => {
      state.isLoading = false;
      state.characters = [];
    },
    [getSearchedcharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchedcharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [getSearchedcharacters.rejected]: (state) => {
      state.isLoading = false;
      state.characters = [];
    },
  },
});
