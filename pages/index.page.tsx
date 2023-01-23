import RootComponent from '../components/RootComponent';
import HomeComponent from '../components/HomeComponent';
import { getEvents } from '../utils/getEventData';
import { FetchedEventType } from '../store/model';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, updateEventsData } from '../store/reducers';

interface Props {
  eventList?: FetchedEventType[];
  notFound?: Boolean;
}

export default function Home({ eventList }: Props) {
  const dispatch = useDispatch();
  const statusSelector = useSelector(selectStatus) as string;
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
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  console.log(firebaseConfig);
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
