import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const firebaseConfig = {
  apiKey: publicRuntimeConfig.apiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
  storageBucket: publicRuntimeConfig.storageBucket,
  messagingSenderId: publicRuntimeConfig.messagingSenderId,
  appId: publicRuntimeConfig.appId,
  measurementId: publicRuntimeConfig.measurementId,
};
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
