import styled from 'styled-components'
import SocialMedia from "./components/SocialMedia";
import CryptoPrices from "./components/CryptoPrices";
import NavigationMenu from "./components/NavigationMenu";
import { Layout } from '../../styles/breakpoints'

import OpenseaLogo from '../../assets/media/opensea.png'
import DiscordLogo from '../../assets/media/discord.png'
import InstagramLogo from '../../assets/media/instagram.png'
import TelegramLogo from '../../assets/media/telegram.png'
import TwitterLogo from '../../assets/media/twitter.png'
import YouTubeLogo from '../../assets/media/youtube.png'

import { MediaIcon } from "./models/MediaIcon";


const Footer = () => {
    const additionalMedia: MediaIcon[] = [{path: OpenseaLogo, redirectionLink: 'https://opensea.io/DCFT/'}];

    const baseMedia: MediaIcon[] = [
        { path: TwitterLogo, redirectionLink: 'https://twitter.com/diamondsct' },
        { path: InstagramLogo, redirectionLink: 'https://www.instagram.com/diamondscraft.io//' },
        { path: DiscordLogo, redirectionLink: 'https://opensea.io/' },
        { path: TelegramLogo, redirectionLink: 'https://opensea.io/' },
        { path: YouTubeLogo, redirectionLink: 'https://opensea.io/' }
    ]

    return (
        <Section>
            <ContentWrapper>
                <Topper> 💎 <span> DIAMONDS CRAFT </span> </Topper>

                <RowWrapper>
                    <ColumnWrapper>
                        <SocialMedia headerText={'Jesteśmy dostępni także na:'} media={additionalMedia}></SocialMedia>
                        <NavigationMenu></NavigationMenu>
                        <CryptoPrices></CryptoPrices>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <SocialMedia headerText={'Dołącz do naszej społeczności:'} media={baseMedia}></SocialMedia>
                    </ColumnWrapper>
                </RowWrapper>

                <Restrictions> Ⓒ DIAMONDS CRAFT. ALL RIGHTS RESERVED. </Restrictions>
            </ContentWrapper>
        </Section>
    )
}


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  color: #ffffff;
  box-sizing: border-box;
  padding: 100px 0 50px;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${Layout.laptop} {
    min-width: 400px;
  }
`

const RowWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  @media only screen and ${Layout.laptop} {
    flex-direction: row;
    gap: 0 5rem;
  }
`

const Topper = styled.div`
  margin: 0 auto 4rem auto;
  color: #aeaeae;
  font-size: 12px;
  font-weight: bold;
  
  span {
    margin-left: 0.25rem;
  }
`

const Restrictions = styled.div`
  margin: 4rem auto 0 auto;
  color: #aeaeae;
  font-size: 12px;
  font-weight: bold;
`


export default Footer;
