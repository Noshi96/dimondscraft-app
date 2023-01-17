import { Event } from '../features/EventSection/Models/model'

export interface FetchedEventType {
  id: string
  event: Event
}
export interface EventsState {
  events: FetchedEventType[]
  status: string
  error: null
}
