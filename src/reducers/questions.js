import {
  GET_ALL_QUESTIONS,
  ADD_NEW_QUESTION
} from '../actions/questions';
import { GET_ALL_TOPICS, SELECT_TOPIC } from '../actions/topics';

const initialState = {
  questions : [],
  topics: [],
  selectedQuestion: [],
  selectedTopic: 'all',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOPIC: {
      return {
        ...state,
        selectedTopic: action.payload,
      }
    }

    case ADD_NEW_QUESTION:
      return {
        ...state,
        questions: [
          action.payload,
          ...state.questions
        ]
      }

    case GET_ALL_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }

    case GET_ALL_TOPICS:
      return {
        ...state,
        topics: action.payload
      }

    default:
      return state;
  }
};