import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import poster1 from '../../../assets/AukcjaTurtleUnite.jpg'
import poster2 from '../../../assets/PierwszaAukjaTokenow.jpg'
import poster2hq from '../../../assets/1_9_20.jpg'
import poster3 from '../../../assets/plakat2AukcjaTokenow.jpg'
import poster4 from '../../../assets/SummerArtBreak.jpg'
import poster5 from '../../../assets/SummerArtBreak2.jpg'
import poster6 from '../../../assets/art1.jpg'
import { EventType } from './Models/EventType'

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
    {
      alt: 'turtle-event-poster',
      imgSrc: poster1,
      event: {
        title: 'turtle event',
        imgSrc: poster1,
        alt: 'turtle-event-poster',
        contentText: `1 ${content}`,
      },
    },
  ]

  return (
    <EventListContainer>
      {events.map(({ alt, imgSrc, event }) => (
        <SingleEvent key={alt} alt={alt} imgSrc={imgSrc} event={event}/>
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
