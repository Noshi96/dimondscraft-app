import styled from 'styled-components'
import { Button } from '../../../layouts/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Event } from './Models/Event'

interface Props {
  imgSrc: string
  alt: string
  event: Event
}

const SingleEvent = ({ imgSrc, alt, event }: Props) => {
  const navigate = useNavigate()
  const destination = '/event-page'

  const navigateToEventHandler = () => {
    navigate(destination, { state: { event } })
  }

  return (
    <Container>
      <Poster src={imgSrc} alt={alt} loading='lazy' />
      <Button onClick={navigateToEventHandler}>Dowiedz się więcej</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`
const Poster = styled.img`
  width: 260px;
  height: 368px;
`

export default SingleEvent
