import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import { characterslice } from '../service/character';

const rootReducer = combineReducers({
  character: characterslice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
