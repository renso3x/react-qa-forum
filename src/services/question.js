import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getAllQuestions = () => {
  return axios.get(`${API_URL}/questions`);
}

export const postQuestions = (payload) => {
  return axios.post(`${API_URL}/questions`, payload)
}

export const filterByTopic = (topic) => {
  return axios.get(`${API_URL}/questions/${topic}`);
}