import styled from 'styled-components'
import SocialMedia from './components/SocialMedia'
import CryptoPrices from './components/CryptoPrices'
import NavigationMenu from './components/NavigationMenu'
import { Layout } from '../../styles/breakpoints'

import OpenseaLogo from '../../assets/media/opensea.png'
import TwitterLogo from '../../assets/media/twitter.png'
import OneBidLogo from '../../assets/media/onebidlogo.png'
import SpotifyLogo from '../../assets/media/spotify.png'
import InstagramLogo from '../../assets/media/instagramLogo.webp'
import FacebookLogo from '../../assets/media/fb_icon_325x325.webp'

import { MediaIcon } from './models/MediaIcon'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'
import ParticlesBackground from '../../layouts/Particles'

const Footer = () => {
  const baseMedia: MediaIcon[] = [
    {
      path: FacebookLogo,
      redirectionLink: 'https://www.facebook.com/DiamondsCraftNFTart/',
      altText: 'FacebookLogo',
    },
    {
      path: TwitterLogo,
      redirectionLink: 'https://twitter.com/diamondsct',
      altText: 'TwitterLogo',
    },
    {
      path: InstagramLogo,
      redirectionLink: 'https://www.instagram.com/diamondscraft.io/',
      altText: 'InstagramLogo',
    },
  ]
  const additionalMedia: MediaIcon[] = [
    {
      path: OpenseaLogo,
      redirectionLink: 'https://opensea.io/DCFT/',
      altText: 'OpenseaLogo',
    },
    {
      path: SpotifyLogo,
      redirectionLink:
        'https://open.spotify.com/show/33bLiSdONLfzUd8oNMYLTn?si=5dd99fa2d0744767',
      altText: 'SpotifyLogo',
    },
    {
      path: OneBidLogo,
      redirectionLink: 'https://onebid.pl/pl/auction/-/3391',
      altText: 'OneBidLogo',
    },
  ]

  return (
    <FullWidthContainer>
      <ParticlesBackground
        width='100%'
        height='100%'
        options={customOptionsFour}
        style={{ position: 'absolute', zIndex: '-1' }}
        id={'FooterParticles'}
      />
      <ExtendedAdjustingSection>
        <ColumnWrapper>
          <CryptoPrices />
        </ColumnWrapper>

        <ColumnWrapper>
          <SocialMedia
            headerText={'Do????cz do naszej spo??eczno??ci:'}
            media={baseMedia}
          />

          <SocialMedia
            headerText={'Jeste??my dost??pni tak??e na:'}
            media={additionalMedia}
          />
        </ColumnWrapper>
      </ExtendedAdjustingSection>

      <ExtendedAdjustingSection>
        <NavigationMenu />
      </ExtendedAdjustingSection>

      <ExtendedAdjustingSection>
        <Restrictions> ??? DIAMONDS CRAFT. ALL RIGHTS RESERVED. </Restrictions>
      </ExtendedAdjustingSection>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: transparent;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (${Layout.laptop}) {
    flex-direction: row;
  }
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media only screen and (${Layout.laptop}) {
    min-width: 400px;
    margin-top: 12rem;
  }
`

const Restrictions = styled.div`
  margin: 4rem auto 0 auto;
  color: #aeaeae;
  font-size: 0.8rem;
  font-weight: bold;
`

export default Footer
