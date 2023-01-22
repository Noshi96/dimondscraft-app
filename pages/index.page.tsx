import RootComponent from '../components/RootComponent';
import HomeComponent from '../components/HomeComponent';
import { getEvents } from '../utils/getEventData';
import { FetchedEventType } from '../store/model';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, updateEventsData } from '../store/reducers';
import { useEffect } from 'react';

interface Props {
  eventList?: FetchedEventType[];
  notFound?: Boolean;
}

export default function Home({ eventList }: Props) {
  const dispatch = useDispatch();
  const statusSelector = useSelector(selectStatus) as string;

  useEffect(() => {
    console.log('in');
    const events = async () => {
      const data = (await getEvents()) as FetchedEventType[];
      console.log('data in');
      console.log(data);
    };

    events();
  }, []);
  console.log(statusSelector);
  console.log(eventList);
  if (statusSelector === 'empty') {
    dispatch(updateEventsData(eventList));
  }
  return (
    <div className='container'>
      <RootComponent>
        <HomeComponent />
      </RootComponent>
    </div>
  );
}

export async function getStaticProps() {
  const events = (await getEvents()) as FetchedEventType[];

  if (!events) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventList: events,
    },
  };
}
