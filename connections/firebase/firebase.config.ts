import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { initializeFirestore } from 'firebase/firestore';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const firebaseConfig = publicRuntimeConfig.firebaseConfig;

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
