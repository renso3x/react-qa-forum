import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getAllTopics = () => {
  return axios.get(`${API_URL}/topics`);
}