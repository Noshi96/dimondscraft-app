import { createSlice } from '@reduxjs/toolkit'
import { getEvents } from '../../utils/getEventData'
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
    fetchEventsData: (state) => {
      // state.events = getEvents()
    },
  },
})

export const { fetchEventsData } = eventSlice.actions
