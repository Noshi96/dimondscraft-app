import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import Detail from '../../assets/contact3.png'
import { Layout } from "../../styles/breakpoints";

const ContactPage = () => {
    return (
        <FullWidthContainer>
            <ExtendedAdjustingSection>
                <Header> Kontakt </Header>
                <BaseText> Jeśli masz pytania lub sugestie, napisz do nas na adres e-mail: </BaseText>
                <DataText> info@diamondscraft.io </DataText>
                <BaseText> Jeśli chcesz kupić nasze obrazy, zadzwoń: </BaseText>
                <DataText> 798 709 181 </DataText>
                <Image src={Detail}></Image>

            </ExtendedAdjustingSection>
        </FullWidthContainer>
    )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(#080924, #000000);
  box-sizing: border-box;
  min-height: 750px;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  flex-direction: column;
  position: relative;
`

const Header = styled.h3`
  margin: 8rem 0 0 0;
  padding: 0;
  box-sizing: border-box;
  
  font-size: 4rem;
  line-height: 4rem;
`

const BaseText = styled.div`
  margin-top: 3rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
`

const DataText = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #FF00AA;
`

const Image = styled.img`
  height: auto;
  width: 300px;
  position: absolute;
  right: 0;
  top: 300px;
  display: none;

  @media only screen and (${Layout.laptop}) {
    display: block;
  }
`



export default ContactPage;
