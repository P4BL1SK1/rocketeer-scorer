import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
  apiKey: 'AIzaSyDTOXTgUcTUgOmwpiYN8S4zd7NTckiM2mo',
  authDomain: 'rocketeer-scorer-5d21c.firebaseapp.com',
  projectId: 'rocketeer-scorer-5d21c',
  storageBucket: 'rocketeer-scorer-5d21c.appspot.com',
  messagingSenderId: '794776782274',
  appId: '1:794776782274:web:af86ba57010ce36655425b',
};

export const app = initializeApp(config);
export const database = getFirestore(app);
