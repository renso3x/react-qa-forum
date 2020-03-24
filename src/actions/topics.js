import { getAllTopics } from '../services/topics';
import { GET_ALL_QUESTIONS } from './questions';
import { filterByTopic } from '../services/question';

export const GET_ALL_TOPICS = 'GET_ALL_TOPICS';
export const SELECT_TOPIC = 'SELECT_TOPIC';

export const fetchAllTopics = () => {
  return async (dispatch) => {
    try {
      const response = await getAllTopics();
      dispatch({
        type: GET_ALL_TOPICS,
        payload: response.data
      })
    } catch (e) {
      console.log('Error topics', e)
    }
  }
}

export const setTopic = topic => {
  return async (dispatch) => {
    try {
      dispatch({ type: SELECT_TOPIC, payload: topic });
      const response = await filterByTopic(topic);
      dispatch({
        type: GET_ALL_QUESTIONS,
        payload: response.data
      })
    } catch (e) {
      console.log('Error topics', e)
    }
  }
}