import { createSlice } from '@reduxjs/toolkit'
import { EventsState } from '../model'

const initialState: EventsState = {
  events: [],
  status: 'empty',
  error: null,
}

export const eventSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: {
    updateEventsData: (state, action) => {
      state.events = action.payload
    },
  },
})

export const selectEvents = (state: any) => {
  return state.events.events
}

export const { updateEventsData } = eventSlice.actions
