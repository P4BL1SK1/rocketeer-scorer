import { createSlice } from '@reduxjs/toolkit';
import { Scorer } from '../../types';

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
});

export const { increment, decrement, reset } = scorerSlice.actions;
