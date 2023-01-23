import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASRVK_5Kbu0MPAMwFNA_eHtIK9a3U_LnQ',
  authDomain: 'diamondscraft-dev.firebaseapp.com',
  projectId: 'diamondscraft-dev',
  storageBucket: 'diamondscraft-dev.appspot.com',
  messagingSenderId: '714055447773',
  appId: '1:714055447773:web:4b46197c471c546aded734',
  measurementId: 'G-P82LX1TN1D',
};
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
