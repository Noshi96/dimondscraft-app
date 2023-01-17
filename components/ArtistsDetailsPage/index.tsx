import styled from 'styled-components';
import { BasicSection } from '../../layouts/AdjustingSection/AdjustingSection';
import AuthorData from '../../layouts/AuthorData';
const ryba = '/images/heroPage/ryba2.jpg'

const ArtistsDetailsPage = () => {

    return (
        <Wrapper>
            <StyledBasicSection>
                <HeaderBox>
                    <AvatarBox></AvatarBox>
                </HeaderBox>
                <ContentBox>
                    <AuthorData></AuthorData>
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


export default ArtistsDetailsPage;

