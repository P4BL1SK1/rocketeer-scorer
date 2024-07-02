import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Scorer, Session } from '../../types';
import { createSession, finishSession, getSessions, updateSession } from './thunks';

const initialState: Scorer = {
  currentSession: null,
  sessions: [],
  loading: false,
};

export const scorerSlice = createSlice({
  name: 'scorer',
  initialState,
  reducers: {
    increment: (state) => {
      state.currentSession.counter += 1;
      state.currentSession.played += 1;
      state.currentSession.won += 1;
    },
    decrement: (state) => {
      state.currentSession.counter -= 1;
      state.currentSession.played += 1;
      state.currentSession.lost += 1;
    },
    reset: (state) => {
      state.currentSession.counter = 0;
      state.currentSession.played = 0;
      state.currentSession.won = 0;
      state.currentSession.lost = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.fulfilled, (state, action: PayloadAction<Session>) => {
      state.currentSession = action.payload;
      state.sessions.push(action.payload);
    });
    builder.addCase(getSessions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSessions.fulfilled, (state, action: PayloadAction<Session[]>) => {
      const currentSession = action.payload.find((session) => session.active);
      if (currentSession) {
        state.currentSession = currentSession;
      }
      state.sessions = action.payload;
      state.loading = false;
    });
    builder.addCase(updateSession.fulfilled, (state, action: PayloadAction<Session>) => {
      state.currentSession = action.payload;
      const index = state.sessions.findIndex((session) => session.id === action.payload.id);
      state.sessions[index] = action.payload;
    });
    builder.addCase(finishSession.fulfilled, (state) => {
      state.currentSession = null;
    });
  },
});

export const { increment, decrement, reset } = scorerSlice.actions;
