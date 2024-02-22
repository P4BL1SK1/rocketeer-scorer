import { createSlice } from '@reduxjs/toolkit';

export type SessionState = {
  counter: number;
  won: number;
  lost: number;
  played: number;
};

const initialState: SessionState = {
  counter: 0,
  won: 0,
  lost: 0,
  played: 0,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
      state.won += 1;
      state.played += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
      state.lost += 1;
      state.played += 1;
    },
    reset: (state) => {
      state.counter = initialState.counter;
      state.won = initialState.won;
      state.lost = initialState.lost;
      state.played = initialState.played;
    },
  },
});

export const { increment, decrement, reset } = sessionSlice.actions;
