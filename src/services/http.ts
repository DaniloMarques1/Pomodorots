import axios from 'axios';

export const Http = axios.create({
  baseURL: 'https://pomodoroapi.herokuapp.com'
});
