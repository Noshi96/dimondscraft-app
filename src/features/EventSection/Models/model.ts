export interface DateOfEvent {
  nanoseconds: string
  seconds: string
}

export interface EventType {
  alt: string
  imgSrc: string
  event: Event
}

export interface Event {
  title: string
  imageSrc: string
  alt?: string
  description: string
  dateOfEvent?: DateOfEvent
}
