import styled from 'styled-components';
import {
  AdjustingSection,
  BasicSection,
} from '../../layouts/AdjustingSection/AdjustingSection';
import { Layout } from '../../styles/breakpoints';

import CollectionBadge from '../../layouts/CollectionBadge';
import Slider from '../../layouts/Slider';
import ArtCard from '../../layouts/ArtCard';
import { UiHeader1, UiHeader3 } from '../../layouts/Headers';
import ChampionCard from '../../layouts/ChampionCard';
import OurTeam from './components/OurTeam/OurTeam';
import MediaSection from '../../features/MediaSection';
import UiButton from '../../layouts/UiButton';
import bg from '../../public/images/heroPage/bg.webp';
import getConfig from 'next/config';

const HeroPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const firebaseConfig = {
    apiKey: publicRuntimeConfig.apiKey,
    authDomain: publicRuntimeConfig.authDomain,
    projectId: publicRuntimeConfig.projectId,
    storageBucket: publicRuntimeConfig.storageBucket,
    messagingSenderId: publicRuntimeConfig.messagingSenderId,
    appId: publicRuntimeConfig.appId,
    measurementId: publicRuntimeConfig.measurementId,
  };
  const clickHandler = () => {
    console.log(firebaseConfig);
  };
  return (
    <>
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
              <ColumnLeftBtn variant='btnPrimary'>
                Zobacz nasze prace
              </ColumnLeftBtn>
            </LeftColumn>
            <RightColumn>
              <NextEvent>
                @The genesis
                <NextEventCounter> 00 DNI : 22 H :22M:23S </NextEventCounter>
              </NextEvent>

              <ColumnRightButton variant='btnPrimary' onClick={clickHandler}>
                {'Dołącz do aukcji'}
              </ColumnRightButton>
              <ColumnRightButton variant='btnPrimary'>
                {'Zgłoś obiek na aukcję'}
              </ColumnRightButton>
            </RightColumn>
          </EvenColumnsWrapper>
        </ExtendedAdjustingSection>
        <ExtendedAdjustingSection>
          <LastAuctionRecordsHeader>
            {' '}
            Najnowsze aukcje:{' '}
          </LastAuctionRecordsHeader>
          <Slider>
            <CollectionBadge></CollectionBadge>
            <CollectionBadge></CollectionBadge>
            <CollectionBadge></CollectionBadge>
            <CollectionBadge></CollectionBadge>
            <CollectionBadge></CollectionBadge>
          </Slider>
        </ExtendedAdjustingSection>
      </Wrapper>
      <StyledBasicSection>
        <LastSalesHeader> Ostatnie sprzedaże: </LastSalesHeader>
        <LastSalesCardContainer>
          <ArtCard size={'large'}></ArtCard>
          <ArtCard size={'large'}></ArtCard>
          <ArtCard size={'large'}></ArtCard>
          <ArtCard size={'large'}></ArtCard>
          <ArtCard size={'large'}></ArtCard>
        </LastSalesCardContainer>
        <FeaturedArtistsHeader> Wyróżnieni artyści: </FeaturedArtistsHeader>
        <Slider>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
        </Slider>
        <PreviewHeader> Preview: </PreviewHeader>
        <PreviewCardContainer>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
        </PreviewCardContainer>

        <PartnershipHeader> Sponsorzy: </PartnershipHeader>
        <Slider>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
          <ChampionCard></ChampionCard>
        </Slider>
      </StyledBasicSection>
      <OurTeam></OurTeam>
      <StyledBasicSection>
        <MediaSection></MediaSection>
      </StyledBasicSection>
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('${bg.src}'), #000000aa;
  background-blend-mode: multiply;
  box-sizing: border-box;
  padding: 0 0 300px 0;
  
  background-image: url('${bg.src}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const ExtendedAdjustingSection = styled(AdjustingSection)`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  flex-direction: column;
  position: relative;
`;

const StyledBasicSection = styled(BasicSection)`
  margin-top: 20px;
`;

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
`;

const LeftColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ColumnLeftBtn = styled(UiButton)`
  margin-top: 28px;
`;

const RightColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;

const ColumnRightButton = styled(UiButton)`
  margin-bottom: 28px;
`;

const Header = styled(UiHeader1)``;

const LastAuctionRecordsHeader = styled(UiHeader3)`
  margin: 450px 0 24px 0;
`;

const NextEvent = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: start;
  margin-bottom: 22px;
`;

const NextEventCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`;

const SpotifyWidget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 0 0 0;

  @media only screen and (${Layout.laptop}) {
    padding: 0;
  }
`;

const LastSalesHeader = styled(UiHeader3)`
  margin-top: 200px;
`;

const LastSalesCardContainer = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, 420px);
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 80px;
  place-items: center;

  @media only screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    place-items: flex-start;
  }
`;

const FeaturedArtistsHeader = styled(UiHeader3)`
  margin-top: 150px;
`;

const PreviewHeader = styled(UiHeader3)`
  margin-top: 150px;
`;

const PreviewCardContainer = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, 420px);
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 80px;
  place-items: center;

  @media only screen and (min-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 0px;
    place-items: flex-start;
  }
`;

const PartnershipHeader = styled(UiHeader3)`
  margin-top: 150px;
`;

export default HeroPage;
