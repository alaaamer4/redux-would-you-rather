import { ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS } from "./types";

const initialState = {
  questions: null,
};

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      let questions = Object.entries(action.payload).map((q) => q[1]);
      return {
        ...state,
        questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case ANSWER_QUESTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
