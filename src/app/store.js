import { configureStore } from '@reduxjs/toolkit';
import modeReducer from '../features/modeSlice';
import questionsReducer from '../features/questionsSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    questionsState: questionsReducer,
  },
});