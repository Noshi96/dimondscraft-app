import styled from 'styled-components'
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
`

const SectionTitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
`
