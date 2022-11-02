import styled from 'styled-components'
import SingleEvent from './SingleEvent'

const EventList = () => {
  return (
    <EventListContainer>
      <SingleEvent
        alt='poster-1'
        imgUrl='https://cdn.discordapp.com/attachments/608049459586269206/1037062861429669908/Summer_art_break.jpg'
      />
      <SingleEvent
        alt='poster-2'
        imgUrl='https://cdn.discordapp.com/attachments/608049459586269206/1037062861429669908/Summer_art_break.jpg'
      />
      <SingleEvent
        alt='poster-3'
        imgUrl='https://cdn.discordapp.com/attachments/608049459586269206/1037062861429669908/Summer_art_break.jpg'
      />
    </EventListContainer>
  )
}

const EventListContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export default EventList
