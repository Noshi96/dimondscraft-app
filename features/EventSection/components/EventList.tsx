import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import { useSelector } from 'react-redux'
import { selectEvents } from '../../../store/reducers'
import { FetchedEventType } from '../../../store/model'

const EventList = () => {
  const eventSelector = useSelector(selectEvents) as FetchedEventType[]

  return (
    <EventListContainer>
      {eventSelector.length !== 0
        ? eventSelector.map(({ event, event: { alt, imageSrc } }) => (
            <SingleEvent
              key={alt}
              alt={alt || 'temp-img'}
              imgSrc={imageSrc}
              event={event}
            />
          ))
        : null}
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
