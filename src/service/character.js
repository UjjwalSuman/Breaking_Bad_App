import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  characters: [],
  isLoading: false,
};

export const getcharacters = createAsyncThunk(
  'CHARACTERS/GET_ALL_CHARACTERS',
  async () => {
    const data = await axios.get('https://breakingbadapi.com/api/characters');
    return data.data;
  },
);

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
  },
});
