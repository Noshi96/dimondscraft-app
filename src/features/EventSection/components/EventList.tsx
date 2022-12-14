import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import { useEffect } from 'react'
import { store } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { selectEvents, updateEventsData } from '../../../store/reducers'
import { getEvents } from '../../../../utils/getEventData'
import { FetchedEventType } from '../../../store/model'

const EventList = () => {
  const dispatch = useDispatch()
  const eventSelector = useSelector(selectEvents) as FetchedEventType[]

  useEffect(() => {
    const fetchEvents = async () => {
      if (store.getState().events.status === 'loaded') {
        return
      }
      const eventData = await getEvents()
      dispatch(updateEventsData(eventData))
    }

    fetchEvents()
  }, [dispatch])

  return (
    <EventListContainer>
      {eventSelector.map(({ event, event: { alt, imageSrc } }) => (
        <SingleEvent
          key={alt}
          alt={alt || 'temp-img'}
          imgSrc={imageSrc}
          event={event}
        />
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
