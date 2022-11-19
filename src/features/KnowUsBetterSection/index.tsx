import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import { Layout } from '../../styles/breakpoints'

const KnowUsBetterSection = () => {
  const style = {
    color: 'white',
    fontSize: 200,
  }
  return (
    <FullWidthContainer>
      <ExtendedAdjustingSection>
        <Header> Technologia blockchain dla Twojego biznesu </Header>
        Jeśli poszukujesz kompleksowych rozwiązań i zastosowania technologii Web3,
        jeśli chcesz przenieść swoje produkty lub usługi do Metaverse w sposób bezpieczny i kompleksowy skontaktuj się z nami aby poznać szczegóły oferty dla Ciebie.
        Pomożemy, doradzimy i wdrożymy Twoje produkty w formie Tokenu NFT.
        <SpotifyWidget>
          <iframe
            style={style}
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
