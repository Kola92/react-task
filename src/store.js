// Pull in configureStore API
import { configureStore } from '@reduxjs/toolkit';
// Import the reducer logic from the slice
import statsReducer from './features/statsSlice';


// Create the Redux store and pass in the statsReducer as the initial data
export const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
})