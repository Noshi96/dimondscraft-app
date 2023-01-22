import styled from 'styled-components';

const EventCard = () => {
  return (
    <CardAndButtonContainer>
      <Card>
        <CardImageContainer> </CardImageContainer>
        <CardDataContainer>
          <EventTitle>David Bowie art contest</EventTitle>

          <TimerContainer>
            <TimerText>Wyniki konkursu za:</TimerText>
            <TimerCount> 00 DNI : 22 H :22M:23S </TimerCount>
          </TimerContainer>
        </CardDataContainer>
      </Card>
      <EventButton>Weź udział</EventButton>
    </CardAndButtonContainer>
  );
};

const CardAndButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  background: transparent;
  @media only screen and (min-width: 460px) {
    position: absolute;
    width: 290px;
    bottom: 0;
    right: 5rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  color: #ffffff;
  width: 100%;
  height: 100%;
`;

const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #6e7ebc;
  height: 280px;
  border-bottom: 1px solid #e5e5e5;
`;

const CardDataContainer = styled.div`
  box-sizing: border-box;
  padding: 9px 0 0 0;
  height: 150px;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventTitle = styled.div`
  width: 100%;
  color: #e5e5e5;
  padding: 0 25px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  height: 42px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 1rem;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  margin-top: 4px;
`;

const TimerText = styled.div`
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

const TimerCount = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const EventButton = styled.button`
  position: absolute;
  bottom: -5rem;
  width: 100%;
  height: 3rem;
  background: #ffff00;
  color: #000000;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
  padding: 0.7rem 0;
  border: 1px solid #ffffff;
  cursor: pointer;
`;

export default EventCard;
