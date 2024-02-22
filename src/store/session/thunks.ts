import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDatabase } from '../../firebase/config';
import { Action, Dispatch } from '@reduxjs/toolkit';
import { SessionState } from './sessionSlice';

const newSession: SessionState = {
  counter: 0,
  won: 0,
  lost: 0,
  played: 0,
};

export const startSession = () => {
  return async (dispatch: Dispatch<Action>) => {
    const newDoc = doc(collection(firebaseDatabase, 'sessions'));
    await setDoc(newDoc, newSession);
  };
};
