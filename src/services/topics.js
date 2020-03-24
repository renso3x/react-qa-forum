import axios from 'axios';

const API_URL = 'https://calm-sands-14121.herokuapp.com';

export const getAllTopics = () => {
  return axios.get(`${API_URL}/topics`);
}