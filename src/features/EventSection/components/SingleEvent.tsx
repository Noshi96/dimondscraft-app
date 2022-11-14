import styled from 'styled-components'
import { Button } from '../../../layouts/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Event } from './Models/Event'
import { Layout } from '../../../styles/breakpoints'

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
      <ExtendedButton onClick={navigateToEventHandler}>Dowiedz się więcej</ExtendedButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`
const Poster = styled.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #ffffff;

  @media only screen and (${Layout.tablet}) {
    width: 19rem;
    height: 28rem;
  }
`

const ExtendedButton = styled(Button)`
  width: 100%;
  height: 80px;
`

export default SingleEvent
