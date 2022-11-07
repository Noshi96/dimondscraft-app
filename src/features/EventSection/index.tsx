import styled from 'styled-components'
import { Layout } from '../../styles/breakpoints'
import EventList from './components/EventList'

interface Props {
  sectionTitle: string
}

export function EventSection({ sectionTitle }: Props) {
  return (
    <Section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <EventList />
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

  @media only screen and (${Layout.laptop}) {
    height: 100vh;
  }
`

const SectionTitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;

  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
  }
`
