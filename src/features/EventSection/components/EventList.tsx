import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import poster1 from '../../../assets/AukcjaTurtleUnite.jpg'
import poster2 from '../../../assets/PierwszaAukjaTokenow.jpg'
import poster3 from '../../../assets/plakat2AukcjaTokenow.jpg'
import poster4 from '../../../assets/SummerArtBreak.jpg'
import poster5 from '../../../assets/SummerArtBreak2.jpg'

const EventList = () => {
  return (
    <EventListContainer>
      <SingleEvent alt='poster-1' imgSrc={poster1} />
      <SingleEvent alt='poster-2' imgSrc={poster2} />
      <SingleEvent alt='poster-3' imgSrc={poster3} />
      <SingleEvent alt='poster-4' imgSrc={poster4} />
      <SingleEvent alt='poster-5' imgSrc={poster5} />
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
