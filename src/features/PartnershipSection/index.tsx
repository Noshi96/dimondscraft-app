import styled from 'styled-components'
import { Layout } from '../../styles/breakpoints'
import alexandrinum from '../../assets/partnership/alexandrinum.png'
import annakubisz from '../../assets/partnership/annakubisz.png'
import fantastyka from '../../assets/partnership/fantastyka.png'
import rotary from '../../assets/partnership/rotary.png'
import cashify from '../../assets/partnership/cashify.png'
import sopra from '../../assets/partnership/sopra.png'

interface Props {
  sectionTitle: string
}

const PartnershipSection = ({ sectionTitle }: Props) => {
  return (
    <Section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <ImageList>
        <img src={alexandrinum} alt='sopra' />
        <img src={annakubisz} alt='sopra' />
        <img src={fantastyka} alt='sopra' />
        <img src={rotary} alt='sopra' />
        <img src={sopra} alt='sopra' />
        <img src={cashify} alt='sopra' />
      </ImageList>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  height: 100%;
`

const SectionTitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;

  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
  }
`

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  @media only screen and (${Layout.tablet}) {
    flex-direction: row;
    justify-content: center;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

export default PartnershipSection
