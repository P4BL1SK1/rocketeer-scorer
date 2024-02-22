import { configureStore } from '@reduxjs/toolkit';
import reactotron from '../../reactotron';
import { scorerSlice } from './session';

export const store = configureStore({
  reducer: {
    scorer: scorerSlice.reducer,
  },
  enhancers: (getDefaultEnhancers) => {
    return __DEV__ ? getDefaultEnhancers().concat(reactotron.createEnhancer()) : getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
