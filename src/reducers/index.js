import { combineReducers } from 'redux';
import questionReducer from './questions';

export default combineReducers({
  questions: questionReducer
});