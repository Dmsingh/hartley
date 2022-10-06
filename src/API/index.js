import axios from 'axios';

const url = 'https://reqres.in/api';
export const registerUser = (data) => axios.post(`${url}/register`,data);
export const loginUser = (data) => axios.post(`${url}/login`, data);