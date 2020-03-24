import { getAllQuestions, postQuestions } from '../services/question';

export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export const fetchAllQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await getAllQuestions();
      dispatch({
        type: GET_ALL_QUESTIONS,
        payload: response.data
      });
    } catch (e) {
      console.log('Error', e)
    }
  }
}

export const createQuestion = (data) => {
  return async (dispatch) => {
    try {
      const response = await postQuestions(data);
      dispatch({
        type: ADD_NEW_QUESTION,
        payload: response.data
      });
    } catch (e) {
      console.log('Error', e)
    }
  }
}