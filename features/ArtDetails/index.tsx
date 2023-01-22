import styled from 'styled-components';
import { BasicSection } from '../../layouts/AdjustingSection/AdjustingSection';
import { UiHeader1, UiHeader3 } from '../../layouts/Headers';
import AuthorData from '../../layouts/AuthorData';
import ArtCard from '../../layouts/ArtCard';
import UiButton from '../../layouts/UiButton';
import { Layout } from '../../styles/breakpoints';
import ryba from '../../public/images/heroPage/ryba2.webp';

const ArtDetails = () => {
  return (
    <ArtDetailsContainer>
      <StyledBasicSection>
        <BaseSection>
          <ArtAndArtistContainer>
            <ArtInfo>
              <ArtHeader> Genesis_soul </ArtHeader>
              <ArtDate> Tu jakaś data, ale czego? </ArtDate>
              <ArtImage src={ryba.src}></ArtImage>
              <ArtDescription>
                Yed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet
              </ArtDescription>
            </ArtInfo>
            <ArtCreatorContainer>
              <AuthorAvatarBox>
                <AuthorAvatar></AuthorAvatar>
              </AuthorAvatarBox>
              <AuthorData></AuthorData>
            </ArtCreatorContainer>
          </ArtAndArtistContainer>
          <Aside>
            <IsNFTBox>
              <NftHeader>NFT i Fizyczyny Obraz</NftHeader>

              <NftDesc>
                ten NFT jest sprzedawany łącznie z fizycznym obrazem:
              </NftDesc>
              <NftLearnMore>Dowiedz się wiecej</NftLearnMore>

              <Ul>
                <li> ✓ Bezplatna bezpieczna wysylka w PL.</li>
                <li> ✓ Potwierdzona autentycznoS6 </li>
                <li> ✓ Certyfikat</li>
              </Ul>
            </IsNFTBox>
            <BuyBox>
              <PriceText> Cena: </PriceText>
              <PriceCalculatedText>
                {' '}
                w przybliżeniu = USD&nbsp;2137 / 6389.90&nbsp;PLN /
                2000&nbsp;EURO{' '}
              </PriceCalculatedText>
              <BuyBoxButton variant={'btnPrimary'}> Kup </BuyBoxButton>
            </BuyBox>
          </Aside>
        </BaseSection>
      </StyledBasicSection>
      <StyledPreviewSection>
        <PreviewHeader> Inne prace artysty: </PreviewHeader>
        <PreviewCardContainer>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
          <ArtCard size={'medium'}></ArtCard>
        </PreviewCardContainer>
      </StyledPreviewSection>
    </ArtDetailsContainer>
  );
};

const StyledBasicSection = styled(BasicSection)`
  display: flex;
`;

const ArtDetailsContainer = styled.div`
  width: 100%;
  background: #000000;
`;

const BaseSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  @media only screen and (${Layout.laptop}) {
    flex-direction: row;
    padding: 0;
  }
`;
const ArtAndArtistContainer = styled.div`
  width: 100%;
  background: black;

  @media only screen and (${Layout.laptop}) {
    width: 70%;
  }
`;

const ArtInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (${Layout.laptop}) {
    padding-right: 84px;
  }
`;

const ArtHeader = styled(UiHeader1)`
  padding-top: 32px;
  margin: 0;
`;

const ArtDate = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 12px 0 32px 0;
`;

const ArtImage = styled.img`
  width: 100%;
  height: auto;
`;

const ArtDescription = styled.div`
  margin-top: 32px;
  font-size: 1rem;
`;

const ArtCreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;

  @media only screen and (${Layout.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const AuthorAvatarBox = styled.div`
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;

  @media only screen and (${Layout.laptop}) {
    margin-bottom: 0;
  }
`;

const AuthorAvatar = styled.div`
  width: 140px;
  height: 140px;
  background: white;
  border-radius: 50%;
`;

const Aside = styled.aside`
  width: 100%;
  height: 700px;
  position: sticky;
  top: 0;
  box-sizing: border-box;

  @media only screen and (${Layout.laptop}) {
    width: 30%;
    padding-left: 84px;
  }
`;

const IsNFTBox = styled.div`
  box-sizing: border-box;
  padding-top: 92px;
`;
const NftHeader = styled.div`
  font-size: 1.4rem;
  line-height: 1.4rem;
`;

const NftDesc = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 16px;
`;

const NftLearnMore = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 8px;
`;

const Ul = styled.ul`
  margin: 16px 0 0 0;
  padding-left: 0;
  list-style: none;
  li {
    padding-left: 0;
    text-decoration: none;
  }
`;

const BuyBox = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
`;

const PriceText = styled.div`
  font-size: 1.2rem;
  line-height: 1.2rem;
`;

const PriceCalculatedText = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  margin: 48px 0 8px 0;
`;

const BuyBoxButton = styled(UiButton)`
  background: hotpink;
  max-width: 300px;
  width: 80%;
`;

const StyledPreviewSection = styled(BasicSection)``;

const PreviewHeader = styled(UiHeader3)`
  margin-top: 100px;

  @media only screen and (${Layout.laptop}) {
    margin-top: 150px;
  }
`;

const PreviewCardContainer = styled.div`
  display: grid;
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

export default ArtDetails;
