import styled from 'styled-components'
import EventList from './components/EventList'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

export function EventSection() {
  return (
    <ExtendedAdjustingSection>
      <EventList />
    </ExtendedAdjustingSection>
  )
}

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 8rem;
`
