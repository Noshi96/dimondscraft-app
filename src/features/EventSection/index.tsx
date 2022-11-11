import styled from 'styled-components'
import EventList from './components/EventList'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

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
