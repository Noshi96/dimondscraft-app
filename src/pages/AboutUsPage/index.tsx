import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

import Auction1 from '../../assets/aboutUs/auction1.jpg'
import Auction2 from '../../assets/aboutUs/auction2.jpg'
import Auction3 from '../../assets/aboutUs/auction3.jpg'
import SamantaPhoto from '../../assets/aboutUs/samanta.jpg'
import JanekPhoto from '../../assets/aboutUs/janek.jpg'

interface CustomStyledElement {
  marginTop?: string
  maxWidth?: string
  paddingTop?: string
}

const AboutUsPage = () => {
  return (
    <FullWidthContainer>
      <FullWidthContainer>
        <ExtendedAdjustingSection>
          <Header paddingTop={'8.5rem'}> Nasza misja </Header>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'3rem'}>
          <BasicText>
            Jako Diamondscraft jesteśmy pierwszym domem aukcyjnym sprzedającym
            tokeny NFT, ale również dzieła sztuki. Pomysłodawcy firmy od wielu
            lat zajmują się sprzedażą obrazów, promocją artystów oraz
            organizacją wystaw. NFT Art/Diamondscraft zrzesza artystów
            tworzących cyfrowo oraz tradycyjnie. Tworzymy pomost pomiędzy
            rzeczywistym rynkiem sztuki, a tym wirtualnym. Diamondscraft
            organizuje aukcje dzieł sztuki – są to wyjątkowe imprezy, na których
            warto się pojawić. Zawsze wybieramy miejsca o najwyższym poziomie,
            aby nasz odbiorca czuł się wyjątkowo. Licytacje są prowadzone przez
            znanych i cenionych prezenterów, bądź aktorów: ostatnie przez
            Krzysztofa Ibisza czy tez Sandrę Staniszewską- Herbich.
          </BasicText>
        </ExtendedAdjustingSection>
        <ExtendedAdjustingSection marginTop={'4rem'}>
          <ColumnWrapper>
            <ImageShort src={Auction1} alt='Krzysztof Ibisz' />
          </ColumnWrapper>
          <ColumnWrapper>
            <ImageShort src={Auction2} alt='Pałac kultury' />
          </ColumnWrapper>
        </ExtendedAdjustingSection>
      </FullWidthContainer>

      <GradientFullWidthContainer>
        <ExtendedAdjustingSection>
          <ColumnWrapper>
            <BasicText>
              Pierwsza aukcja odbyła się w prestiżowym miejscu w Warszawie w
              wieżowcu na Złotej 44, na ostatnim piętrze z widokiem na całą
              Warszawę. Odwiedziło Nas wielu znamienitych gości, oprócz obrazów,
              można było zakupić pierwszy raz na aukcji w Polsce tokeny NFT,
              które wśród kolekcjonerów cieszyły się ogromną popularnością.
              Nasze aukcje to spotkania ludzi biznesu, świata kultury i sztuki
              oraz crypto i NFT. To również możliwość poszerzenia swojej wiedzy
              na tematy związane ze światowym rynkiem kryptowalut oraz tokenów.
              <br />
              <br />
              <br />
              Tworzymy eliatrny klub miłośników sztuki, ale również nowych
              technologii. Na naszych aukcjach zawsze mamy stoisko z OCULASAMI,
              gdzie do wejścia do naszej galerii Diamondscraft w przestrzeni
              METAVERSE.
              <br />
              <br />
              <br />
              Przecieramy nowe szlaki. Stworzyliśmy pierwszą Galerię Sztuki w
              METAVERSE, a kolejne aukcja w odbędą się nie tylko w siedzibie
              Galerii, ale również w METAVERSE. Zachęcamy do wejścia do Naszej
              Galerii na Spatial, należy tylko podpiąć się do swojego portfela
              na METAMASK i podłączyć Oculusa.
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper>
            <ImageLong src={Auction3} alt='Aukcje' />
          </ColumnWrapper>
        </ExtendedAdjustingSection>
      </GradientFullWidthContainer>

      <FullWidthContainerBlack>
        <ExtendedAdjustingSection>
          <BasicText paddingTop={'4rem'}>
            Tworzymy eliatrny klub miłośników sztuki, ale również nowych
            technologii. Na naszych aukcjach zawsze mamy stoisko z OCULASAMI,
            gdzie do wejścia do naszej galerii Diamondscraft w przestrzeni
            METAVERSE.
            <br />
            <br />
            Przecieramy nowe szlaki. Stworzyliśmy pierwszą Galerię Sztuki w
            METAVERSE, a kolejne aukcja w odbędą się nie tylko w siedzibie
            Galerii, ale również w METAVERSE.
            <br />
            <br />
            Zachęcamy do wejścia do Naszej Galerii na Spatial, należy tylko
            podpiąć się do swojego portfela na METAMASK i podłączyć Oculusa.
          </BasicText>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'12rem'}>
          <Header> Nasz zespół </Header>
        </ExtendedAdjustingSection>
        <ExtendedAdjustingSection marginTop={'4rem'}>
          <ColumnWrapper>
            <TeamMemberPhoto src={SamantaPhoto} alt='Samanta Belling' />
            <Header marginTop={'4rem'}> Samanta Belling </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              Co-founder and CEO
              <br />
              <br />
              Historyk sztuki, wieloletni kurator, redaktor magazynu Artysta i
              Sztuka, Prezes zarządu Belle Arte, wiceprezes Fundacji Dziedzictwa
              Kultury Polskiej, pomysłodawca i współzałożyciel Diamondscraft.
              <br />
              <br />
              Związana z rynkiem sztuki od kilkunastu lat, specialuzująca się w
              sztuce fantastycznej i realizmie magicznym.
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper>
            <TeamMemberPhoto src={SamantaPhoto} alt='Tomasz Belling' />
            <Header marginTop={'4rem'}> Tomasz Belling </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              Co-founder and CEO
              <br />
              <br />
              Historyk sztuki, wieloletni kurator, redaktor magazynu Artysta i
              Sztuka, Prezes zarządu Belle Arte, wiceprezes Fundacji Dziedzictwa
              Kultury Polskiej, pomysłodawca i współzałożyciel Diamondscraft.
              <br />
              <br />
              Związana z rynkiem sztuki od kilkunastu lat, specialuzująca się w
              sztuce fantastycznej i realizmie magicznym.
            </BasicText>
          </ColumnWrapper>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'6rem'}>
          <ColumnWrapper>
            <TeamMemberPhoto src={JanekPhoto} alt='Jan' />
            <Header marginTop={'4rem'}> Jan DrNico Okliński </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              Artysta, muzyk, twórca tatuaży, rysunków, projektów graficznych
              oraz NFT.
              <br />
              Poświęcił wiele lat na samodzielny rozwój talentu, inspirując się
              rozmaitymi technikami oraz motywami. Doświadczenia nabierał
              pracując przy projektach graficzno-artystycznych dla setek firm,
              oraz tworząc dla przyjemności.
              <br />
              W swojej twórczości łączy wiele technik, często
              niekonwencjonalnych. Korzystając z wielorakich inspiracji, nie
              zamyka się na jeden określony styl.
              <br />
              Mocno związany z Sopotem. Natchnienie czerpie z obserwacji świata,
              refleksji oraz rozmów z napotkanymi ludźmi. W swoich pracach
              porusza często tematy trudne, nawet kontrowersyjne.
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper></ColumnWrapper>
        </ExtendedAdjustingSection>
      </FullWidthContainerBlack>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
  box-sizing: border-box;
`

const FullWidthContainerBlack = styled.div`
  width: 100%;
  background: #000000;
  box-sizing: border-box;
`

const GradientFullWidthContainer = styled(FullWidthContainer)`
  background: linear-gradient(#080924, #000000);
  padding-top: 4rem;
`

const ExtendedAdjustingSection = styled(AdjustingSection)<CustomStyledElement>`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  gap: 2rem;
  margin-top: ${({ marginTop }) => marginTop};
`

const ColumnWrapper = styled.div<CustomStyledElement>`
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 320px;
  margin-top: ${({ marginTop }) => marginTop};
`

const Header = styled.h3<CustomStyledElement>`
  font-size: 2rem;
  line-height: 2rem;
  margin: ${({ marginTop }) => marginTop} 0 0 0;
  padding-top: ${({ paddingTop }) => paddingTop};
  box-sizing: border-box;
`

const BasicText = styled.div<CustomStyledElement>`
  font-size: 1rem;
  box-sizing: border-box;
  margin-top: ${({ marginTop }) => marginTop};
  max-width: ${({ maxWidth }) => maxWidth};
  padding-top: ${({ paddingTop }) => paddingTop};
`

const ImageShort = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
`

const ImageLong = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 660px;
`

const TeamMemberPhoto = styled.img<CustomStyledElement>`
  width: 250px;
  object-fit: cover;
  object-position: top;
  height: 300px;
  margin-top: ${({ marginTop }) => marginTop};
`

export default AboutUsPage