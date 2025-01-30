import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questionsState',
  initialState: {
    questions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export const { setQuestions, setLoading, setError } = questionsSlice.actions;
export default questionsSlice.reducer;