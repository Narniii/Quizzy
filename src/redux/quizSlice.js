import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  currentQuestion: 0,
  selectedAnswer: null,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },

    incrementScore: (state) => {
      state.score += 1;
    },

    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.selectedAnswer = null;
    },

    resetQuiz: (state) => {
      state.username = "";
      state.currentQuestion = 0;
      state.selectedAnswer = null;
      state.score = 0;
    },
  },
});

export const {
  setUsername,
  setSelectedAnswer,
  incrementScore,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
