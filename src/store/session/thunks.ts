import { createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import { database } from '../../firebase/config';
import { Session } from '../../types';

const newSession = {
  counter: 0,
  played: 0,
  won: 0,
  lost: 0,
  active: true,
  created: dayjs().format('DD-MM-YYYY HH:mm:ss'),
};

export const createSession = createAsyncThunk('session/create', async () => {
  const { id } = await addDoc(collection(database, 'sessions'), newSession);
  return { id: id, ...newSession };
});

export const getCurrentSession = createAsyncThunk('session/get', async () => {
  const q = query(collection(database, 'sessions'), where('active', '==', true), limit(1));
  const querySnapshot = await getDocs(q);
  return querySnapshot.empty ? null : { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
});

export const getSessions = createAsyncThunk('session/getAll', async () => {
  const q = await getDocs(collection(database, 'sessions'));
  const sessions: Session[] = [];
  q.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    sessions.push({ id: doc.id, ...doc.data() } as Session);
  });
  return sessions;
});

export const updateSession = (id: string) => async (_dispatch, getState) => {
  const { counter, played, won, lost } = getState().scorer.currentSession;
  const sessionRef = doc(database, 'sessions', id);
  await updateDoc(sessionRef, { counter, played, won, lost });
};

export const finishSession = createAsyncThunk('session/finish', async (id: string) => {
  await updateDoc(doc(database, 'sessions', id), { active: false });
});
