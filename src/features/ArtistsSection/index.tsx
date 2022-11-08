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
import { Layout } from '../../styles/breakpoints'

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
    <CarouselItem name={'Andrzej Kielar'} src={andrzej} />,
    <CarouselItem name={'Małgorzata Kosiec'} src={gosia} />,
    <CarouselItem name={'Jan DrNico Okliński '} src={jan} />,
    <CarouselItem name={'Jarosław Jaśnikowski'} src={jaroslaw} />,
    <CarouselItem name={'Lucyna Góralczyk'} src={lucyna} />,
    <CarouselItem name={'Małgorzata Bankowska'} src={malgorzata} />,
    <CarouselItem name={'Piotr Horodyński'} src={piotr} />,
    <CarouselItem name={'Raf Tarnawski'} src={raf} />,
  ]

  return (
    <Wrapper>
      <Title>Nasi Artyści</Title>

      <AliceCarousel
        responsive={width < 700 ? responsiveMobile : responsiveDesktop}
        mouseTracking
        disableDotsControls
        autoPlayInterval={3000}
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
  padding: 0;

  @media only screen and (${Layout.tablet}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const Title = styled.h2`
  align-self: flex-start;
  color: #ffffff;
  padding-left: 5rem;
  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
    padding-left: 3rem;
  }
`

export default ArtistsSection
