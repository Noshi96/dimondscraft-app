import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import andrzej from '../../assets/andrzej-kielar-artist-painter.jpg'
import gosia from '../../assets/gosia-kosiec-fot-agnieszka-cytacka.jpg'
import jan from '../../assets/jan-drnico-oklinski-artysta.jpg'
import jaroslaw from '../../assets/jaroslaw-jasnikowski-artist-painter.jpg'
import lucyna from '../../assets/lucyna-goralczyk.jpg'
import malgorzata from '../../assets/malgorzata-bankowska-artist-painter.jpg'
import piotr from '../../assets/piotr-horodynski-artysta-malarz.jpg'
import raf from '../../assets/raf-tarnawski.jpg'
import styled from 'styled-components'
import CarouselItem from './components/CarouselItem'
import { useCurrentWidth } from '../../hooks/useCurrentWidth'

const ArtistsSection = () => {
  let width = useCurrentWidth()

  const responsiveDesktop = {
    0: { items: 1 },
    512: { items: 2 },
    1024: { items: 3 },
    1536: { items: 4 },
  }

  const responsiveMobile = {
    0: { items: 1 },
  }

  const items = [
    <CarouselItem name={'Andrzej'} src={andrzej} />,
    <CarouselItem name={'Gosia'} src={gosia} />,
    <CarouselItem name={'Jan'} src={jan} />,
    <CarouselItem name={'Jaroslaw'} src={jaroslaw} />,
    <CarouselItem name={'Lucyna'} src={lucyna} />,
    <CarouselItem name={'Malgorzata'} src={malgorzata} />,
    <CarouselItem name={'Piotr'} src={piotr} />,
    <CarouselItem name={'Raf'} src={raf} />,
  ]

  return (
    <Wrapper>
      <Title>Nasi Artyści</Title>

      <AliceCarousel
        responsive={width < 700 ? responsiveMobile : responsiveDesktop}
        mouseTracking
        disableDotsControls
        autoPlayInterval={4000}
        animationDuration={500}
        infinite
        animationType='slide'
        items={items}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`

const Title = styled.h2`
  align-self: flex-start;
  color: #ffffff;
  font-size: 3rem;
`

export default ArtistsSection
