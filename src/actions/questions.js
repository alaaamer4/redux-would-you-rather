import {
  ADD_QUESTION,
  GET_QUESTIONS,
  ANSWER_QUESTION,
} from "../reducers/types";
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { getUsers } from "./users";
export const getQuestions = () => async (dispatch) => {
  const questions = await _getQuestions();

  dispatch({ type: GET_QUESTIONS, payload: questions });
};

export const addQuestion = (newQuestion) => async (dispatch) => {
  const question = await _saveQuestion(newQuestion);
  dispatch({ type: ADD_QUESTION, payload: question });
  dispatch(getQuestions());
  dispatch(getUsers());
};

export const answerQuestion =
  ({ authedUser, qid, answer }) =>
  async (dispatch) => {
    await _saveQuestionAnswer({ authedUser, qid, answer });

    dispatch({ type: ANSWER_QUESTION });
    dispatch(getQuestions());
    dispatch(getUsers());
  };
