import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { addDoc, collection, doc, DocumentData, getDocs, Timestamp, updateDoc } from 'firebase/firestore/lite';
import { database } from '../../firebase/config';
import { Session } from '../../types';
import { RootState } from '../store';

const newSession = {
  counter: 0,
  played: 0,
  won: 0,
  lost: 0,
  active: true,
  created: Timestamp.fromDate(new Date()),
};

export const createSession = createAsyncThunk('session/create', async () => {
  const { id } = await addDoc(collection(database, 'sessions'), newSession);
  return { id: id, ...newSession };
});

export const getSessions = createAsyncThunk('session/getAll', async () => {
  const q = await getDocs(collection(database, 'sessions'));
  const sessions: Session[] = [];
  q.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    sessions.push({ id: doc.id, ...doc.data() } as Session);
  });
  return sessions;
});

export const updateSession = createAsyncThunk('session/update', async (id: string, { getState }) => {
  const state = getState() as RootState;
  const { currentSession } = state.scorer;
  const sessionRef = doc(database, 'sessions', id);
  await updateDoc(sessionRef, currentSession);
  return currentSession;
});

export const finishSession = createAsyncThunk('session/finish', async (id: string) => {
  await updateDoc(doc(database, 'sessions', id), { active: false });
  return id;
});
