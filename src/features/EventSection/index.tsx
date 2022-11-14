import styled from 'styled-components'
import EventList from './components/EventList'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

export function EventSection() {
  return (
      <FullWidthContainer>
        <ExtendedAdjustingSection>
          <EventList />
        </ExtendedAdjustingSection>
      </FullWidthContainer>
  )
}

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 3rem;
  
`

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`
