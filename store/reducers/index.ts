import { createSlice } from '@reduxjs/toolkit'
import { EventsState, FetchedEventType } from '../model'

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
      state.status = 'loaded'
    },
  },
})

export const selectEvents = (state: {
  events: { events: FetchedEventType[]; status: string }
}) => {
  return state.events.events
}

export const selectStatus = (state: {
  events: { events: FetchedEventType[]; status: string }
}) => {
  return state.events.status
}

export const { updateEventsData } = eventSlice.actions
