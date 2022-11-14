import styled from 'styled-components'
import SocialMedia from './components/SocialMedia'
import CryptoPrices from './components/CryptoPrices'
import NavigationMenu from './components/NavigationMenu'
import { Layout } from '../../styles/breakpoints'

import OpenseaLogo from '../../assets/media/opensea.png'
import DiscordLogo from '../../assets/media/discord.png'
import InstagramLogo from '../../assets/media/instagram.png'
import TelegramLogo from '../../assets/media/telegram.png'
import TwitterLogo from '../../assets/media/twitter.png'
import YouTubeLogo from '../../assets/media/youtube.png'

import { MediaIcon } from './models/MediaIcon'
import { AdjustingSection } from "../../layouts/AdjustingSection/AdjustingSection";

const Footer = () => {
  const additionalMedia: MediaIcon[] = [
    { path: OpenseaLogo, redirectionLink: 'https://opensea.io/DCFT/' },
  ]

  const baseMedia: MediaIcon[] = [
    { path: TwitterLogo, redirectionLink: 'https://twitter.com/diamondsct' },
    {
      path: InstagramLogo,
      redirectionLink: 'https://www.instagram.com/diamondscraft.io//',
    },
    { path: DiscordLogo, redirectionLink: 'https://opensea.io/' },
    { path: TelegramLogo, redirectionLink: 'https://opensea.io/' },
    { path: YouTubeLogo, redirectionLink: 'https://opensea.io/' },
  ]

  return (
      <FullWidthContainer>
        <ExtendedAdjustingSection>
          <ColumnWrapper>
            <CryptoPrices></CryptoPrices>
          </ColumnWrapper>

          <ColumnWrapper>
            <SocialMedia
                headerText={'Dołącz do naszej społeczności:'}
                media={baseMedia}
            ></SocialMedia>

            <SocialMedia
                headerText={'Jesteśmy dostępni także na:'}
                media={additionalMedia}
            ></SocialMedia>
          </ColumnWrapper>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection>
          <NavigationMenu></NavigationMenu>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection>
          <Restrictions> Ⓒ DIAMONDS CRAFT. ALL RIGHTS RESERVED. </Restrictions>
        </ExtendedAdjustingSection>
      </FullWidthContainer>
  )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: #000000;
  padding-top: 8rem;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (${Layout.laptop}) {
    flex-direction: row;
  }
  
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (${Layout.laptop}) {
    min-width: 400px;
  }
`

const Restrictions = styled.div`
  margin: 4rem auto 0 auto;
  color: #aeaeae;
  font-size: 1rem;
  font-weight: bold;
`

export default Footer
