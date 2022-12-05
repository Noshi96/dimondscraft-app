import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from './reducers'

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
  },
})
