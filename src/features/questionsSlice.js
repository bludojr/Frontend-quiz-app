import { createSlice, current } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questionsState',
  initialState: {
    questions: [],
    status: 'idle',
    error: null,
    currentQuestionIndex: 0,
    totalQuestions: 10
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
    },
    updateCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex += 1;
    }
  }
});

export const { setQuestions, setLoading, setError, updateCurrentQuestionIndex } = questionsSlice.actions;
export default questionsSlice.reducer;
export const selectCurrentQuestionIndex = (state) => state.questionsState.currentQuestionIndex;
export const selectTotalQuestions = (state) => state.questionsState.totalQuestions;