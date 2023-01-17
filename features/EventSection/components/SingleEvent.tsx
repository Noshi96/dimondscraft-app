import styled, { css } from 'styled-components'
import { TempEventButton } from '../../../layouts/Button/Button'
import { Layout } from '../../../styles/breakpoints'
import { DateOfEvent, Event } from '../Models/model'

interface Props {
  imgSrc: string
  alt: string
  event: Event
}

const SingleEvent = ({ imgSrc, alt, event }: Props) => {
  const seconds = event?.dateOfEvent?.seconds
  const date = new Date(Number(seconds) * 1000)
  const showDate = Math.floor(Date.now()) < +(seconds || 0)

  const eventFormattedDate = seconds
    ? new Intl.DateTimeFormat('pl-PL', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Poland',
      })
        .format(date)
        .split(' ')
        .slice(0, -1)
        .join(' ')
        .slice(0, -3)
    : ''

  // const eventRef = useRef(null)
  // const navigate = useNavigate()
  // const destination = '/event-page'

  // const navigateToEventHandler = () => {
  //   navigate(destination, { state: { event } })

  //   setTimeout(() => {
  //     const element = document.getElementById('entryPageEndHook') as HTMLElement
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'start',
  //     })
  //   }, 300)
  // }

  // useEffect(() => {
  //   const el = eventRef.current
  //   gsap.fromTo(
  //     el,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: el,
  //       },
  //     }
  //   )
  // }, [])

  return (
    <Container seconds={showDate ? eventFormattedDate : ''}>
      <Poster src={imgSrc} alt={alt} loading='lazy' />
      {/* <ExtendedButton onClick={navigateToEventHandler}> */}
      <ExtendedButton>Dowiedz się więcej</ExtendedButton>
    </Container>
  )
}

const upcomingEventStyle = ({ seconds = '0' }: DateOfEvent) => css`
  &:before {
    content: '${seconds}';
    position: absolute;
    top: -5%;
    left: 0;
    color: #FF00AA;

    @media only screen and (${Layout.tablet}){
      top: -14%;
    }
  }
`

const Container = styled.div<DateOfEvent>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  ${({ seconds }) => (seconds ? upcomingEventStyle : '')}
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

const ExtendedButton = styled(TempEventButton)`
  width: 100%;
  height: 80px;
`

export default SingleEvent
