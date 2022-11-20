import styled from 'styled-components'
import { Button } from '../../../layouts/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Event } from './Models/Event'
import { Layout } from '../../../styles/breakpoints'
import gsap from 'gsap'
import { useRef, useEffect } from "react";

interface Props {
  imgSrc: string
  alt: string
  event: Event
}

const SingleEvent = ({ imgSrc, alt, event }: Props) => {
  const eventRef = useRef(null);
  const navigate = useNavigate()
  const destination = '/event-page'

  const navigateToEventHandler = () => {
    navigate(destination, { state: { event } })

    setTimeout(() => {
      const element = document.getElementById('entryPageEndHook') as HTMLElement;
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }, 300)
  }

  useEffect(() => {
    const el = eventRef.current;
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 2, scrollTrigger: {
      trigger: el
    }})

  }, [])

  return (
    <Container ref={eventRef}>
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
    width: auto;
    height: 350px;
  }
`

const ExtendedButton = styled(Button)`
  width: 100%;
  height: 80px;
`

export default SingleEvent
