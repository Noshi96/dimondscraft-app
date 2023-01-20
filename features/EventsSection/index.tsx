import styled from 'styled-components';
import EventList from './components/EventList';
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection';
import { Layout } from '../../styles/breakpoints';

const EventsSection = () => {
  return (
    <FullWidthContainer>
      <ExtendedAdjustingSection>
        <EventList />
      </ExtendedAdjustingSection>
    </FullWidthContainer>
  );
};

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 3rem;
`;

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`;

export default EventsSection;
