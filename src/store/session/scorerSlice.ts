import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Scorer, Session } from '../../types';

const initialState: Scorer = {
  currentSession: null,
  sessions: [],
  loading: false,
};

export const scorerSlice = createSlice({
  name: 'scorer',
  initialState,
  reducers: {
    setActiveSession: (state, action: PayloadAction<Session>) => {
      state.currentSession = action.payload;
    },
    setSessions: (state, action: PayloadAction<Session[]>) => {
      state.sessions = action.payload;
    },
  },
});

export const { setActiveSession, setSessions } = scorerSlice.actions;
