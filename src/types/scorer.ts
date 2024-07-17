import { Session } from './';

export type Scorer = {
  currentSession: Session | null;
  sessions: Session[];
  loading: boolean;
};
