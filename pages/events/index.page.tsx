import EventsComponent from '../../components/EventsComponent';
import RootComponent from '../../components/RootComponent';

const Events = () => {
  return (
    <RootComponent>
      <EventsComponent title={'Events:'} />
    </RootComponent>
  );
};

export default Events;
