import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../connections/firebase/firebase.config'
import { Event } from '../features/EventSection/Models/model'
import { FetchedEventType } from '../store/model'

const eventsCollectionRef = collection(db, 'events')

export const getEvents = async () => {
  const descQuery = query(eventsCollectionRef, orderBy('dateOfEvent', 'desc'))
  const fetchedEvents = await getDocs(descQuery)

  const events: FetchedEventType[] = fetchedEvents.docs.map((doc) => {
    const {
      title,
      imageSrc,
      dateOfEvent,
      description,
      alt,
    } = doc.data() as Event
    const { seconds } = dateOfEvent || {}

    return {
      event: {
        title,
        imageSrc,
        alt,
        description,
        dateOfEvent: dateOfEvent ? { seconds: seconds?.toString() } : null,
      } as Event,
      id: doc.id,
    }
  })

  return events
}
