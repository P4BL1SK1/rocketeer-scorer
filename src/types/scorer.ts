import { Session } from './';

export type Scorer = {
  currentSession: Session;
  sessions: Session[];
  loading: boolean;
};
