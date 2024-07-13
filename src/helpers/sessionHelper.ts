import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  Timestamp,
  Unsubscribe,
  updateDoc,
} from 'firebase/firestore';
import { database } from '../firebase/config';
import { Session } from '../types';
import { SESSIONS } from '../utils/constants';

const newSession: Session = {
  counter: 0,
  played: 0,
  won: 0,
  lost: 0,
  active: true,
  created: Timestamp.fromDate(new Date()),
};

export const createSession = async () => {
  const { id } = await addDoc(collection(database, SESSIONS), newSession);
  return { id: id, ...newSession };
};

export const getActiveSession = async (): Promise<Session | null> => {
  const sessionsSnapshot = await getDocs(collection(database, SESSIONS));
  const activeSession = sessionsSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Session))
    .find((session) => session.active);
  return activeSession || null;
};

export const unsubscribeSession = (
  sessionId: string,
  setCurrentSession: (session: Session | null) => void
): Unsubscribe => {
  const sessionRef = doc(database, SESSIONS, sessionId);
  const unsubscribe = onSnapshot(sessionRef, (snapshot) => {
    const data = { id: snapshot.id, ...(snapshot.data() as Session) };
    setCurrentSession(data);
  });
  return unsubscribe;
};

export const unsubscribeSessions = (setSessions: (sessions: Session[]) => void): Unsubscribe => {
  const sessionsRef = query(collection(database, SESSIONS), orderBy('created', 'desc'));
  const unsubscribe = onSnapshot(sessionsRef, (snapshot) => {
    const data: Session[] = [];
    snapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      data.push({ id: doc.id, ...doc.data() } as Session);
    });
    setSessions(data);
  });
  return unsubscribe;
};

export const updateSession = async (session: Partial<Session>, sessionId: string) => {
  const sessionRef = doc(database, SESSIONS, sessionId);
  await updateDoc(sessionRef, session);
};

export const deleteSession = async (sessionId: string) => {
  const sessionRef = doc(database, SESSIONS, sessionId);
  await deleteDoc(sessionRef);
};
