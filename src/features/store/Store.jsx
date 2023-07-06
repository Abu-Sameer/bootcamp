import { configureStore } from '@reduxjs/toolkit';
import Resultslice from '../Slice/ResultSlice';

const store = configureStore({
  reducer: {
    results: Resultslice,
  },
});
export default store;
