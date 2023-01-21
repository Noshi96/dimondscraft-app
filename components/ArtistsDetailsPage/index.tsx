import styled from 'styled-components';
import { BasicSection } from '../../layouts/AdjustingSection/AdjustingSection';
import AuthorData from '../../layouts/AuthorData';
import ArtCard from '../../layouts/ArtCard';
import { Layout } from '../../styles/breakpoints';
import ArtDetails from '../../features/ArtDetails';
const ryba = '/images/heroPage/ryba2.jpg'

const ArtistsDetailsPage = () => {

    return (
        <Wrapper>
            <ArtDetails></ArtDetails>
            <StyledBasicSection>
                <HeaderBox>
                    <AvatarBox></AvatarBox>
                </HeaderBox>
                <ContentBox>
                    <AuthorDataContainer>
                        <AuthorData></AuthorData>
                    </AuthorDataContainer>
                    <AuthorsWorkCardsContainer>
                        <ArtCard size={'medium'}></ArtCard>
                        <ArtCard size={'medium'}></ArtCard>
                        <ArtCard size={'medium'}></ArtCard>
                        <ArtCard size={'medium'}></ArtCard>
                        <ArtCard size={'medium'}></ArtCard>
                    </AuthorsWorkCardsContainer>
                </ContentBox>
            </StyledBasicSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('${ryba}'), #000000aa;
  background-blend-mode: multiply;
  box-sizing: border-box;
  padding: 220px 0 300px 0;

  background-image: url('${ryba}');
  background-size: 100% auto;
  background-position: center;
  background-attachment: fixed;
`

const StyledBasicSection = styled(BasicSection)`
  margin-top: 20px;  
`

const HeaderBox = styled.div`
  width: 100%;
  height: 200px;
  background: #34A69E;
  position: relative;
`

const AvatarBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  left: calc(50% - 70px);
  top: 138px;
`

const ContentBox = styled.div`
  width: 100%;
  background: #000000aa;
  min-height: 1000px;
  margin-top: 20px;
`

const AuthorDataContainer = styled.div`
  box-sizing: border-box;
  padding: 90px 20px 18px 20px;

  @media only screen and (${Layout.laptop}) {
    padding: 2rem 2rem;
  }
`

const AuthorsWorkCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 60px;
  row-gap: 80px;
  place-items: center;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 0 20px 70px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 80px;
    column-gap: 40px;
    place-items: center
  }
`


export default ArtistsDetailsPage;

