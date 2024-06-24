import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Scorer, Session } from '../../types';
import { createSession, finishSession, getCurrentSession, getSessions } from './thunks';

const initialState: Scorer = {
  currentSession: null,
  sessions: [],
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
      state.currentSession.counter = initialState.currentSession.counter;
      state.currentSession.played = initialState.currentSession.played;
      state.currentSession.won = initialState.currentSession.won;
      state.currentSession.lost = initialState.currentSession.lost;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.fulfilled, (state, action: PayloadAction<Session>) => {
      state.currentSession = action.payload;
    });
    builder.addCase(getSessions.fulfilled, (state, action: PayloadAction<Session[]>) => {
      state.sessions = action.payload;
    });
    builder.addCase(getCurrentSession.fulfilled, (state, action: PayloadAction<any>) => {
      state.currentSession = action.payload;
    });
    builder.addCase(finishSession.fulfilled, (state) => {
      state.currentSession = null;
    });
  },
});

export const { increment, decrement, reset } = scorerSlice.actions;
