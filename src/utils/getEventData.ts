import { collection, getDocs } from 'firebase/firestore'
import { db } from '../connections/firebase/firebase.config'

const eventsCollectionRef = collection(db, 'events')

export const getEvents = async () => {
  const fetchedEventsData = await getDocs(eventsCollectionRef)

  const events = fetchedEventsData.docs.map((doc) => ({
    event: {...doc.data()},
    id: doc.id,
  }))
  return events
}
