import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCP3oDRVsAAuv6qIhP80Zl5XKFULXipRKA",
  authDomain: "rocketeer-scorer.firebaseapp.com",
  projectId: "rocketeer-scorer",
  storageBucket: "rocketeer-scorer.appspot.com",
  messagingSenderId: "227623182585",
  appId: "1:227623182585:android:a30766a41717d9de674228",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDatabase = getFirestore(firebaseApp);
