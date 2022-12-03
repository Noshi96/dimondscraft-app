import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import poster2 from '../../../assets/homepage/posters/PierwszaAukjaTokenow.webp'
import poster2hq from '../../../assets/homepage/posters/1_9_20.jpg'
import poster3 from '../../../assets/homepage/posters/plakat2AukcjaTokenow.webp'
import poster4 from '../../../assets/homepage/posters/SummerArtBreak-min.jpg'
import poster5 from '../../../assets/homepage/posters/SummerArtBreak2.webp'
import poster6 from '../../../assets/homepage/posters/art1.webp'
import { EventType } from './Models/EventType'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../connections/firebase/firebase.config'

const EventList = () => {
  const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

  const events: EventType[] = [
    {
      alt: 'art revolution',
      imgSrc: poster6,
      event: {
        title: 'Art revolution',
        imgSrc: poster6,
        alt: 'Art-revolution',
        contentText: `1 ${content}`,
        upcomingEvent: {
          upcoming: true,
          upcomingMessage: 'Nadchodzące wydarzenie!',
        },
      },
    },
    {
      alt: 'first-token-event-poster',
      imgSrc: poster2,
      event: {
        title: 'first token event',
        imgSrc: poster2hq,
        alt: 'first-token-event-poster',
        contentText: `2 ${content}`,
      },
    },
    {
      alt: 'token-event-poster',
      imgSrc: poster3,
      event: {
        title: 'token event poster',
        imgSrc: poster3,
        alt: 'token-event-poster',
        contentText: `3 ${content}`,
      },
    },
    {
      alt: 'summer-art-break-1-poster',
      imgSrc: poster4,
      event: {
        title: 'summer art break',
        imgSrc: poster4,
        alt: 'summer-art-break-1-poster',
        contentText: `4 ${content}`,
      },
    },
    {
      alt: 'summer-art-break-2-poster',
      imgSrc: poster5,
      event: {
        title: 'summer art break 2',
        imgSrc: poster5,
        alt: 'summer-art-break-2-poster',
        contentText: `5 ${content}`,
      },
    },
  ]


  const [fsEvents, setEvents] = useState([]);
  const eventsCollectionRef = collection(db, 'events'); 

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await getDocs(eventsCollectionRef);
      console.log(fetchedEvents);
    }

    getEvents();
  }, [])

  return (
    <EventListContainer>
      {events.map(({ alt, imgSrc, event }) => (
        <SingleEvent key={alt} alt={alt} imgSrc={imgSrc} event={event} />
      ))}
    </EventListContainer>
  )
}

const EventListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem 2rem;
`

export default EventList
