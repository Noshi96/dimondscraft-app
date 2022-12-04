interface EventType {
  id: string
  event: any
}

export interface EventsState {
  events: EventType[]
  status: string
  error: null
}
