import styled from 'styled-components';
import { BasicSection } from '../../layouts/AdjustingSection/AdjustingSection';
import { UiHeader3 } from '../../layouts/Headers';
import Slider from '../../layouts/Slider';
import CollectionBadge from '../../layouts/CollectionBadge';
import ArtCard from '../../layouts/ArtCard';

const ArtistsPage = () => {

    return (
        <StyledBasicSection>
            <ArtistsHeader> Wszyscy Artyści: </ArtistsHeader>
            <Slider>
                <ArtistsColumn>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </ArtistsColumn>
                <ArtistsColumn>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </ArtistsColumn>
                <ArtistsColumn>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </ArtistsColumn>
                <ArtistsColumn>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </ArtistsColumn>
                <ArtistsColumn>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                    <CollectionBadge></CollectionBadge>
                </ArtistsColumn>
            </Slider>

            <AvailableArtisticWorkHeader> Last sales: </AvailableArtisticWorkHeader>
            <AvailableArtisticWorkCardContainer>
                <ArtCard size={'large'}></ArtCard>
                <ArtCard size={'large'}></ArtCard>
                <ArtCard size={'large'}></ArtCard>
                <ArtCard size={'large'}></ArtCard>
                <ArtCard size={'large'}></ArtCard>
                <ArtCard size={'large'}></ArtCard>
            </AvailableArtisticWorkCardContainer>
        </StyledBasicSection>
    )

}

const StyledBasicSection = styled(BasicSection)`
  margin-top: 20px;  
`

const ArtistsHeader = styled(UiHeader3)`
  margin-top: 150px;
`

const ArtistsColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  
  & > * {
    margin-bottom: 30px;
  }
`

const AvailableArtisticWorkHeader = styled(UiHeader3)`
    margin-top: 200px;

`

const AvailableArtisticWorkCardContainer = styled.div`
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
    place-items: flex-start
  }
`


export default ArtistsPage;
