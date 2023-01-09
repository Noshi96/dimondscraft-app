import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import { Layout } from '../../styles/breakpoints'
import React from "react";
import Slider from "../../layouts/Slider";


import andrzej from '../../assets/homepage/artists/andrzej-kielar-artist-painter.webp'
import gosia from '../../assets/homepage/artists/gosia-kosiec-fot-agnieszka-cytacka.webp'
import jan from '../../assets/homepage/artists/jan-drnico-oklinski-artysta.webp'
import jaroslaw from '../../assets/homepage/artists/jaroslaw-jasnikowski-artist-painter.webp'
import lucyna from '../../assets/homepage/artists/lucyna-goralczyk.webp'
import piotr from '../../assets/homepage/artists/piotr-horodynski-artysta-malarz.webp'
import orzechowski from '../../assets/homepage/artists/orzechowski.webp'
import CarouselItem from "../ArtistsSection/components/CarouselItem";
import ChampionCard from "../../layouts/ChampionCard";


const KnowUsBetterSection = () => {
  return (
    <FullWidthContainer>
      <ExtendedAdjustingSection>
        {/*<Block1>*/}
        {/*  <ArtCard size={'large'}></ArtCard>*/}
        {/*  <CollectionBadge></CollectionBadge>*/}
        {/*  <ArtCard size={'medium'}></ArtCard>*/}
        {/*</Block1>*/}

        <Slider>
          <ChampionCard></ChampionCard>
          <CarouselItem name={'Janusz Orzechowski'} src={orzechowski} />
          <CarouselItem name={'Jan DrNico Okliński '} src={jan} />
          <CarouselItem name={'Andrzej Kielar'} src={andrzej} />
          <CarouselItem name={'Małgorzata Kosiec'} src={gosia} />
          <CarouselItem name={'Jarosław Jaśnikowski'} src={jaroslaw} />
          <CarouselItem name={'Lucyna Góralczyk'} src={lucyna} />
          <CarouselItem name={'Piotr Horodyński'} src={piotr} />
        </Slider>
      </ExtendedAdjustingSection>
      <ExtendedAdjustingSection>
        <Header> Technologia blockchain dla Twojego biznesu </Header>
        Jeśli poszukujesz kompleksowych rozwiązań i zastosowania technologii
        Web3, jeśli chcesz przenieść swoje produkty lub usługi do Metaverse w
        sposób bezpieczny i kompleksowy skontaktuj się z nami aby poznać
        szczegóły oferty dla Ciebie. Pomożemy, doradzimy i wdrożymy Twoje
        produkty w formie Tokenu NFT.
        <SpotifyWidget>
          <iframe
            src='https://open.spotify.com/embed/episode/5bX870sornBdKFQgik2utu?utm_source=generator&theme=0'
            width='100%'
            height='152'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
            title='NFTpodcast'
          ></iframe>
        </SpotifyWidget>
      </ExtendedAdjustingSection>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  box-sizing: border-box;
  color: #ffffff;
  font-size: 1.2rem;

  @media only screen and (${Layout.tablet}) {
    padding: 3rem 4rem;
  }

  @media only screen and (${Layout.laptop}) {
    padding: 3rem 10rem;
  }
`

const Header = styled.h3`
  font-size: 2rem;
  margin: 0;
  padding-top: 5.5rem;
  box-sizing: border-box;
`

const SpotifyWidget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 0 0 0;

  @media only screen and (${Layout.laptop}) {
    padding: 2rem 0;
  }
`

export default KnowUsBetterSection
