import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../connections/firebase/firebase.config'
import { Event } from '../features/EventSection/Models/model'
import { FetchedEventType } from '../store/model'

const eventsCollectionRef = collection(db, 'events')

export const getEvents = async () => {
  const descQuery = query(eventsCollectionRef, orderBy('dateOfEvent', 'desc'))
  const fetchedEvents = await getDocs(descQuery)

  const events = fetchedEvents.docs.map((doc) => ({
    event: {
      title: doc.data().title,
      imageSrc: doc.data().imageSrc,
      alt: doc.data().alt,
      description: doc.data().description,
      dateOfEvent:
        {
          seconds: doc.data().dateOfEvent?.seconds?.toString() ?? '0',
          nanoseconds: doc.data().dateOfEvent?.nanoseconds?.toString() ?? '0',
        } ?? '0',
    } as Event,
    id: doc.id,
  }))
  return events as FetchedEventType[]
}
