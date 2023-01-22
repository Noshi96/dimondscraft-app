import styled from 'styled-components';
import EventCard from './EventCard';

const Event = () => {
  return (
    <EventContainer>
      <EventImage></EventImage>
      <AvailabilityInformation>{'Aktualne'}</AvailabilityInformation>
      <EventCard></EventCard>
    </EventContainer>
  );
};

const EventContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  height: 700px;
  position: relative;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
  }
`;

const AvailabilityInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 6rem;
  background: #000000;
  color: #ffff00;
  font-size: 40px;
  font-weight: 700;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  @media only screen and (min-width: 768px) {
    border-top: 0px solid transparent;
  }
`;

const EventImage = styled.div`
  width: 100%;
  background: #0e7ebc;
  height: 600px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border: 2px solid #e5e5e5;
`;

export default Event;
