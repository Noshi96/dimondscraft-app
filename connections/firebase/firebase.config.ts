import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const firebaseConfig = publicRuntimeConfig.firebaseConfig;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
