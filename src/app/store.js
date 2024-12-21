import { configureStore } from '@reduxjs/toolkit';
import Time from './slicers/TimeSlice'

export const store = configureStore({
  reducer: {
    time: Time
  }
})

