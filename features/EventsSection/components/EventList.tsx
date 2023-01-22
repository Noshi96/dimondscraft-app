import styled from 'styled-components';
import Event from './Event';

const EventList = () => {
  return (
    <EventListContainer>
      <Event></Event>
      <Event></Event>
      <Event></Event>
    </EventListContainer>
  );
};

const EventListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 5rem;
`;

export default EventList;
