import styled from 'styled-components'
import { Layout } from '../../styles/breakpoints'
import EventList from './components/EventList'
import { AdjustingSection } from "../../layouts/AdjustingSection/AdjustingSection";

interface Props {
  sectionTitle: string
}

export function EventSection({ sectionTitle }: Props) {
  return (
    <ExtendedAdjustingSection>
      <EventList />
    </ExtendedAdjustingSection>
  )
}

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 8rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  height: 100%;
`
