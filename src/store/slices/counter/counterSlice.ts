import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  counter: number;
  gamesPlayed: number;
}

const initialState: CounterState = {
  counter: 0,
  gamesPlayed: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
      state.gamesPlayed += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
      state.gamesPlayed += 1;
    },
    reset: (state) => {
      state.counter = initialState.counter;
      state.gamesPlayed = initialState.gamesPlayed;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
