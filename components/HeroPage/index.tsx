import styled from 'styled-components';
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection';
import { Layout } from '../../styles/breakpoints';

import CollectionBadge from '../../layouts/CollectionBadge';
import Slider from '../../layouts/Slider';

const bg = '/images/heroPage/bg.png'

const HeroPage = () => {
    return (
        <Wrapper>
            <ExtendedAdjustingSection>
                <EvenColumnsWrapper>
                    <LeftColumn>
                        <Header> Łączymy rynek sztuki z rynkiem NFT, </Header>
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
                    </LeftColumn>
                    <RightColumn>
                        <NextEvent> @The genesis </NextEvent>
                        <NextEventCounter> 00 DNI : 22 H :22M:23S </NextEventCounter>
                        <button> 123123123 </button>
                        <button> 123123123 </button>
                    </RightColumn>
                </EvenColumnsWrapper>


            </ExtendedAdjustingSection>
            <ExtendedAdjustingSection>
                <Header3> Last auction records: </Header3>
                <Slider>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </Slider>

            </ExtendedAdjustingSection>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('${bg}'), #000000aa;
  background-blend-mode: multiply;
  box-sizing: border-box;
  padding: 0 0 300px 0;
  
  background-image: url('${bg}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  flex-direction: column;
  position: relative;
`

const EvenColumnsWrapper = styled.div`
  margin-top: 250px;
  width: 100%;
  display: grid;

  grid-template-columns: 100%;
  gap: 6rem;

  @media only screen and (${Layout.laptop}) {
    grid-template-columns: 50% 50%;
    gap: 1rem;
  }
`

const LeftColumn = styled.div`
  box-sizing: border-box;
  border: 1px solid crimson;
  display: flex;
  flex-direction: column;
`

const RightColumn = styled.div`
  box-sizing: border-box;
  border: 1px solid crimson;
  display: flex;
  flex-direction: column;
`

const NextEvent = styled.div`
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`

const NextEventCounter = styled.div`
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`

const SpotifyWidget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 0 0 0;

  @media only screen and (${Layout.laptop}) {
    //padding: 2rem 0;
    padding: 0;
  }
`

const Header = styled.h1`
  font-size: 3rem;
  margin: 0;
  box-sizing: border-box;
`

const Header3 = styled.h3`
  font-size: 2rem;
  margin: 450px 0 24px 0;
  box-sizing: border-box;
`

export default HeroPage;
