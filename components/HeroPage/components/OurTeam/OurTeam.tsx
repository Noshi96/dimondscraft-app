import styled from 'styled-components';
import { BasicSection } from '../../../../layouts/AdjustingSection/AdjustingSection';
import { UiHeader3 } from '../../../../layouts/Headers';
import { Layout } from '../../../../styles/breakpoints';
import TextWithCharLimit from '../../../../layouts/TextWithCharLimit';

const samantaPhoto = '/images/aboutUs/samanta.jpg';
const janekPhoto = '/images/aboutUs/janek.jpg';
const tomaszPhoto = '/images/aboutUs/tomasBelling.webp';

interface CustomStyledElement {
    marginTop?: string;
}

const OurTeam = () => {

    return (
        <StyledBaseSection>
            <StyledHeader marginTop={'4rem'}> Team:  </StyledHeader>
            <StyledBaseSection marginTop={'6rem'}>
                <ColumnWrapper>
                    <FancyCard>
                        <div className='content'>
                            <TeamMemberPhoto src={samantaPhoto} alt='Samanta Belling' />
                        </div>
                        <div className='card'></div>
                    </FancyCard>

                    <StyledHeader marginTop={'4rem'}> Samanta Belling </StyledHeader>
                    <BasicText marginTop={'2.5rem'}>
                        <TextWithCharLimit charLimit={247}>
                            CEO i współzałożyciel „Diamondscraft” pierwszego Domu Aukcyjnego w
                            Polsce sprzedającego dzieła sztuki oraz tokeny NFT, który posiada
                            również swoją przestrzeń na platformie Metaverse Spatial, gdzie
                            regularnie organizowane są wystawy NFT oraz aukcje, które
                            symultanicznie odbywają się na żywo oraz online na platformie
                            aukcyjnej. Diamondscraft tworzy pomost pomiędzy tradycyjną, a
                            wirtualną sztuką.

                            Tworząc projekty NFT starannie wyselekcjonowanym artystom.
                            Diamondscraft tworzy również przestrzenie w rozszerzonej
                            rzeczywistości AR, w której można spotykać się z przyjaciółmi i
                            klientami.

                            Historyk sztuki, studia na Katolickim Uniwersytecie Lubelskim,
                            specjalizacja: inwentaryzatorska oraz konserwatorska, (praca
                            magisterska – „Kolekcjonerzy, a Rynek Sztuki w Polsce po 1989 r.,
                            wieloletni kurator wystaw, marszand, redaktor magazynu „Artysta i
                            Sztuka”, Prezes „Belle Arte” – Galerii Sztuki w Centrum Praskim
                            Koneser, wiceprezes „Fundacji Dziedzictwa Kultury Polskiej”
                            przywracającej pamięć o utraconych dobrach kultury podczas II
                            wojny światowej.

                            Koordynator Aukcji Sztuki Fantastycznej w Desie Unicum,
                            odpowiedzialna za: dobór prac, wycenę dzieł, ustalanie estymacji,
                            potwierdzenie autentyczności prac, kontakty z kolekcjonerami,
                            kontakty z artystami, przygotowanie katalogów: zakres merytoryczny
                            oraz skład graficzny.

                            Promotorka polskich artystów w kraju i za granicą. Związana z
                            rynkiem sztuki od kilkunastu lat
                        </TextWithCharLimit>
                    </BasicText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <FancyCard>
                        <div className='content'>
                            <TeamMemberPhoto src={tomaszPhoto} alt='Tomasz Belling' />
                        </div>
                        <div className='card'></div>
                    </FancyCard>

                    <StyledHeader marginTop={'4rem'}> Tomasz Belling </StyledHeader>
                    <BasicText marginTop={'2.5rem'}>
                        <TextWithCharLimit>
                            CoFounder & Board Member (Współzałożyciel i członek zarządu) NFT
                            ART Spółka z ograniczoną odpowiedzialnością, twórca marki
                            Diamondscraft.

                            Kilkuletnie doświadczenie w branży reklamowej w firma RGB Gdańsk,
                            13 lat doświadczenia w przemyśle energetycznym jako dyrektor w
                            sektorze morza północnego dla kompanii energetyczny Shell i TAKA.

                            Pasjonat i miłośnik sztuk pięknych, kolekcjoner sztuki i
                            współwłaściciel galerii Belle Arte. Współorganizator wielu wystaw
                            i eventów artystycznych.
                        </TextWithCharLimit>

                    </BasicText>

                </ColumnWrapper>
            </StyledBaseSection>

            <StyledBaseSection marginTop={'6rem'}>
                <ColumnWrapper>
                    <FancyCard>
                        <div className='content'>
                            <TeamMemberPhoto src={janekPhoto} alt='Jan' />
                        </div>
                        <div className='card'></div>
                    </FancyCard>

                    <StyledHeader marginTop={'4rem'}> Jan DrNico Okliński </StyledHeader>
                    <BasicText marginTop={'2.5rem'}>
                        <TextWithCharLimit>
                            Artysta, muzyk, twórca tatuaży, rysunków, projektów graficznych
                            oraz NFT.
                            Poświęcił wiele lat na samodzielny rozwój talentu, inspirując się
                            rozmaitymi technikami oraz motywami. Doświadczenia nabierał
                            pracując przy projektach graficzno-artystycznych dla setek firm,
                            oraz tworząc dla przyjemności.
                            W swojej twórczości łączy wiele technik, często
                            niekonwencjonalnych. Korzystając z wielorakich inspiracji, nie
                            zamyka się na jeden określony styl.
                            Mocno związany z Sopotem. Natchnienie czerpie z obserwacji świata,
                            refleksji oraz rozmów z napotkanymi ludźmi. W swoich pracach
                            porusza często tematy trudne, nawet kontrowersyjne.
                        </TextWithCharLimit>
                    </BasicText>

                </ColumnWrapper>
                <ColumnWrapper></ColumnWrapper>
            </StyledBaseSection>

        </StyledBaseSection>
    )
}

const StyledBaseSection = styled(BasicSection)<CustomStyledElement>`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  gap: 2rem;
  margin-top: ${({ marginTop }) => marginTop};
  width: 95%;

  @media only screen and (${Layout.tablet}) {
    width: 90%;
  }
`;

const ColumnWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 300px;
`;

const StyledHeader = styled(UiHeader3)<CustomStyledElement>`
  margin-top: ${({ marginTop }) => marginTop};
`

const BasicText = styled.div<CustomStyledElement>`
  font-size: 1rem;
  box-sizing: border-box;
  max-width: 420px;
  margin-top: ${({ marginTop }) => marginTop};
`;

const TeamMemberPhoto = styled.img`
  width: 300px;
  object-fit: cover;
  object-position: top;
  height: 400px;
`;

const FancyCard = styled.div`
  position: relative;

  @property --rotate {
    syntax: '<angle>';
    initial-value: 132deg;
    inherits: false;
  }

  .content {
    z-index: 100;
    position: absolute;
    height: 100%;
    background: #000000;
  }

  .card {
    width: 300px;
    height: 400px;
    position: relative;
    z-index: 10;
  }

  .card::before {
    content: '';
    width: 309px;
    height: 411px;
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    position: absolute;
    z-index: -1;
    top: -5px;
    left: -4px;
    animation: spin 2.5s linear infinite;
  }

  .card::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 309px;
    height: 411px;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(130px);
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    opacity: 1;
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
`;


export default OurTeam;
