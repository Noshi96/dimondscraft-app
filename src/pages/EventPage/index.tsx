import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ParticlesBackground from '../../layouts/Particles'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'

const EventPage = () => {
  const { state } = useLocation()
  const {
    event: { title, imgSrc, contentText, alt },
  } = state

  return (
    <Section>
      <ParticlesBackground
        width='100%'
        height='100%'
        options={customOptionsFour}
        style={{ position: 'absolute', zIndex: '-1' }}
      />
      <HeadLine>{title}</HeadLine>
      <Image src={imgSrc} alt={alt} />

      <Text>{contentText}</Text>
    </Section>
  )
}

const HeadLine = styled.h1`
  text-transform: uppercase;
  align-items: center;
  color: #ffffff;
`
const Section = styled.section`
  background-color: #000000;
  z-index: 2;
  position: relative;
`
const Text = styled.p`
  color: #ffffff;
`
const Image = styled.img`
  width: 400px;
  height: 600px;
`

export default EventPage
